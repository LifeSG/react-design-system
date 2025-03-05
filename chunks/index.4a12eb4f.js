import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,forwardRef as g,useCallback as p,useContext as f,useMemo as m,useImperativeHandle as b,lazy as v,Suspense as y,useReducer as x,memo as $,createContext as w,Fragment as C,Children as S,createElement as k}from"react";import O,{findDOMNode as D,unstable_batchedUpdates as j,createPortal as E}from"react-dom";import{ChevronUpIcon as _}from"@lifesg/react-icons/chevron-up";import T,{css as F,keyframes as M,useTheme as A}from"styled-components";import{ExternalIcon as B}from"@lifesg/react-icons/external";import{ArrowRightIcon as I}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as z}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as R}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as P}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as L}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as N,SquareIcon as W,SquareFillIcon as H,SquareTickFillIcon as Y,MinusSquareFillIcon as V,ClockIcon as U,ArrowUpIcon as X,ArrowDownIcon as K,ArrowRightIcon as q,PencilIcon as G,EraserIcon as Z,DownloadIcon as Q,CrossIcon as J,FilterIcon as ee,PlaceholderImageIcon as te,MagnifierPlusIcon as re,MagnifierMinusIcon as ne,ChevronLeftIcon as ie,ChevronRightIcon as oe,CircleIcon as ae,CircleDotIcon as se,ChevronUpIcon as le,ExclamationCircleFillIcon as ce,TickIcon as de,RefreshIcon as ue,ICircleFillIcon as he,ExclamationTriangleFillIcon as ge,TickCircleFillIcon as pe}from"@lifesg/react-icons";import{ChevronDownIcon as fe}from"@lifesg/react-icons/chevron-down";import{ChevronRightIcon as me}from"@lifesg/react-icons/chevron-right";import{ChevronLeftIcon as be}from"@lifesg/react-icons/chevron-left";import{useFloatingTree as ve,useFloating as ye,autoUpdate as xe,offset as $e,flip as we,shift as Ce,limitShift as Se,size as ke,useTransitionStyles as Oe,useClick as De,useDismiss as je,useInteractions as Ee,FloatingPortal as _e,FloatingFocusManager as Te,FloatingTree as Fe,useFloatingNodeId as Me,FloatingNode as Ae,useHover as Be}from"@floating-ui/react";import{CrossIcon as Ie}from"@lifesg/react-icons/cross";import{StarIcon as ze}from"@lifesg/react-icons/star";import{StarFillIcon as Re}from"@lifesg/react-icons/star-fill";import{CloudArrowUpFillIcon as Pe}from"@lifesg/react-icons/cloud-arrow-up-fill";import{MagnifierIcon as Le}from"@lifesg/react-icons/magnifier";import{EyeIcon as Ne}from"@lifesg/react-icons/eye";import{EyeSlashIcon as We}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as He}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as Ye}from"@lifesg/react-icons/square";import{SquareTickFillIcon as Ve}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Ue}from"@lifesg/react-icons/tick";import{CaretRightIcon as Xe}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Ke}from"@lifesg/react-icons/minus-square-fill";import{CircleIcon as qe}from"@lifesg/react-icons/circle";import{CircleDotIcon as Ge}from"@lifesg/react-icons/circle-dot";import{BinIcon as Ze}from"@lifesg/react-icons/bin";import{PencilIcon as Qe}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Je}from"@lifesg/react-icons/drag-handle";import{MinusIcon as et}from"@lifesg/react-icons/minus";import{PlusIcon as tt}from"@lifesg/react-icons/plus";import{MenuIcon as rt}from"@lifesg/react-icons/menu";import{Chevron2LeftIcon as nt}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as it}from"@lifesg/react-icons/chevron-2-right";import{ChevronLineLeftIcon as ot}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as at}from"@lifesg/react-icons/chevron-line-right";import{EllipsisHorizontalIcon as st}from"@lifesg/react-icons/ellipsis-horizontal";import{StarHalfIcon as lt}from"@lifesg/react-icons/star-half";const ct=i.createContext(!1);function dt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function ut(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function ht(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function gt(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function pt(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ft=function(e,t){return ft=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},ft(e,t)};var mt=function(){return mt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},mt.apply(this,arguments)};var bt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var vt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},yt="object"==typeof bt&&bt&&bt.Object===Object&&bt,xt="object"==typeof self&&self&&self.Object===Object&&self,$t=yt||xt||Function("return this")(),wt=$t,Ct=function(){return wt.Date.now()},St=/\s/;var kt=function(e){for(var t=e.length;t--&&St.test(e.charAt(t)););return t},Ot=/^\s+/;var Dt=function(e){return e?e.slice(0,kt(e)+1).replace(Ot,""):e},jt=$t.Symbol,Et=jt,_t=Object.prototype,Tt=_t.hasOwnProperty,Ft=_t.toString,Mt=Et?Et.toStringTag:void 0;var At=function(e){var t=Tt.call(e,Mt),r=e[Mt];try{e[Mt]=void 0;var n=!0}catch(e){}var i=Ft.call(e);return n&&(t?e[Mt]=r:delete e[Mt]),i},Bt=Object.prototype.toString;var It=At,zt=function(e){return Bt.call(e)},Rt=jt?jt.toStringTag:void 0;var Pt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Rt&&Rt in Object(e)?It(e):zt(e)},Lt=function(e){return null!=e&&"object"==typeof e};var Nt=Dt,Wt=vt,Ht=function(e){return"symbol"==typeof e||Lt(e)&&"[object Symbol]"==Pt(e)},Yt=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,Ut=/^0o[0-7]+$/i,Xt=parseInt;var Kt=vt,qt=Ct,Gt=function(e){if("number"==typeof e)return e;if(Ht(e))return NaN;if(Wt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Wt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Nt(e);var r=Vt.test(e);return r||Ut.test(e)?Xt(e.slice(2),r?2:8):Yt.test(e)?NaN:+e},Zt=Math.max,Qt=Math.min;var Jt=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function f(){var e=qt();if(p(e))return m(e);s=setTimeout(f,function(e){var r=t-(e-l);return u?Qt(r,o-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?g(e):(n=i=void 0,a)}function b(){var e=qt(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),g(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=Gt(t)||0,Kt(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Zt(Gt(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(qt())},b},er=Jt,tr=vt;var rr=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return tr(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),er(e,t,{leading:n,maxWait:t,trailing:i})},nr=function(e,t,r,n){switch(t){case"debounce":return Jt(e,r,n);case"throttle":return rr(e,r,n);default:return e}},ir=function(e){return"function"==typeof e},or=function(){return"undefined"==typeof window},ar=function(e){return e instanceof Element||e instanceof HTMLDocument},sr=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&ir(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!or()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(or())return null;if(t)return document.querySelector(t);if(n&&ar(n))return n;if(r.targetRef&&ar(r.targetRef.current))return r.targetRef.current;var i=D(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=sr(s,r.setState.bind(r),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!or()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return ir(t)?"renderProp":ir(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,c=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=l(),r.observableElement=null,or()||(r.resizeHandler=nr(r.createResizeHandler,i,a,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}ft(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){or()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(d);var lr=or()?u:h;function cr(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,p=e.observerOptions,f=e.onResize,m=o(r),b=o(null),v=null!=g?g:b,y=o(),x=a({width:void 0,height:void 0}),$=x[0],w=x[1];return lr((function(){if(!or()){var e=sr(f,w,d,h);y.current=nr((function(t){(d||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!or()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,d,h,f,p,v.current]),mt({ref:v},$)}var dr=Object.defineProperty,ur={};((e,t)=>{for(var r in t)dr(e,r,{get:t[r],enumerable:!0})})(ur,{assign:()=>Yr,colors:()=>Nr,createStringInterpolator:()=>zr,skipAnimation:()=>Wr,to:()=>Rr,willAdvance:()=>Hr});var hr=jr(),gr=e=>Sr(e,hr),pr=jr();gr.write=e=>Sr(e,pr);var fr=jr();gr.onStart=e=>Sr(e,fr);var mr=jr();gr.onFrame=e=>Sr(e,mr);var br=jr();gr.onFinish=e=>Sr(e,br);var vr=[];gr.setTimeout=(e,t)=>{const r=gr.now()+t,n=()=>{const e=vr.findIndex((e=>e.cancel==n));~e&&vr.splice(e,1),wr-=~e?1:0},i={time:r,handler:e,cancel:n};return vr.splice(yr(r),0,i),wr+=1,kr(),i};var yr=e=>~(~vr.findIndex((t=>t.time>e))||~vr.length);gr.cancel=e=>{fr.delete(e),mr.delete(e),br.delete(e),hr.delete(e),pr.delete(e)},gr.sync=e=>{Cr=!0,gr.batchedUpdates(e),Cr=!1},gr.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,gr.onStart(r)}return n.handler=e,n.cancel=()=>{fr.delete(r),t=null},n};var xr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};gr.use=e=>xr=e,gr.now="undefined"!=typeof performance?()=>performance.now():Date.now,gr.batchedUpdates=e=>e(),gr.catch=console.error,gr.frameLoop="always",gr.advance=()=>{"demand"!==gr.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Dr()};var $r=-1,wr=0,Cr=!1;function Sr(e,t){Cr?(t.delete(e),e(0)):(t.add(e),kr())}function kr(){$r<0&&($r=0,"demand"!==gr.frameLoop&&xr(Or))}function Or(){~$r&&(xr(Or),gr.batchedUpdates(Dr))}function Dr(){const e=$r;$r=gr.now();const t=yr($r);t&&(Er(vr.splice(0,t),(e=>e.handler())),wr-=t),wr?(fr.flush(),hr.flush(e?Math.min(64,$r-e):16.667),mr.flush(),pr.flush(),br.flush()):$r=-1}function jr(){let e=new Set,t=e;return{add(r){wr+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(wr-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,wr-=t.size,Er(t,(t=>t(r)&&e.add(t))),wr+=e.size,t=e)}}}function Er(e,t){e.forEach((e=>{try{t(e)}catch(e){gr.catch(e)}}))}function _r(){}var Tr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Fr(e,t){if(Tr.arr(e)){if(!Tr.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Mr=(e,t)=>e.forEach(t);function Ar(e,t,r){if(Tr.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Br=e=>Tr.und(e)?[]:Tr.arr(e)?e:[e];function Ir(e,t){if(e.size){const r=Array.from(e);e.clear(),Mr(r,t)}}var zr,Rr,Pr=(e,...t)=>Ir(e,(e=>e(...t))),Lr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Nr=null,Wr=!1,Hr=_r,Yr=e=>{e.to&&(Rr=e.to),e.now&&(gr.now=e.now),void 0!==e.colors&&(Nr=e.colors),null!=e.skipAnimation&&(Wr=e.skipAnimation),e.createStringInterpolator&&(zr=e.createStringInterpolator),e.requestAnimationFrame&&gr.use(e.requestAnimationFrame),e.batchedUpdates&&(gr.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Hr=e.willAdvance),e.frameLoop&&(gr.frameLoop=e.frameLoop)},Vr=new Set,Ur=[],Xr=[],Kr=0,qr={get idle(){return!Vr.size&&!Ur.length},start(e){Kr>e.priority?(Vr.add(e),gr.onStart(Gr)):(Zr(e),gr(Jr))},advance:Jr,sort(e){if(Kr)gr.onFrame((()=>qr.sort(e)));else{const t=Ur.indexOf(e);~t&&(Ur.splice(t,1),Qr(e))}},clear(){Ur=[],Vr.clear()}};function Gr(){Vr.forEach(Zr),Vr.clear(),gr(Jr)}function Zr(e){Ur.includes(e)||Qr(e)}function Qr(e){Ur.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Ur,(t=>t.priority>e.priority)),0,e)}function Jr(e){const t=Xr;for(let r=0;r<Ur.length;r++){const n=Ur[r];Kr=n.priority,n.idle||(Hr(n),n.advance(e),n.idle||t.push(n))}return Kr=0,(Xr=Ur).length=0,(Ur=t).length>0}var en="[-+]?\\d*\\.?\\d+",tn=en+"%";function rn(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var nn=new RegExp("rgb"+rn(en,en,en)),on=new RegExp("rgba"+rn(en,en,en,en)),an=new RegExp("hsl"+rn(en,tn,tn)),sn=new RegExp("hsla"+rn(en,tn,tn,en)),ln=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,cn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,dn=/^#([0-9a-fA-F]{6})$/,un=/^#([0-9a-fA-F]{8})$/;function hn(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function gn(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=hn(i,n,e+1/3),a=hn(i,n,e),s=hn(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function pn(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function fn(e){return(parseFloat(e)%360+360)%360/360}function mn(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function bn(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function vn(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=dn.exec(e))?parseInt(t[1]+"ff",16)>>>0:Nr&&void 0!==Nr[e]?Nr[e]:(t=nn.exec(e))?(pn(t[1])<<24|pn(t[2])<<16|pn(t[3])<<8|255)>>>0:(t=on.exec(e))?(pn(t[1])<<24|pn(t[2])<<16|pn(t[3])<<8|mn(t[4]))>>>0:(t=ln.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=un.exec(e))?parseInt(t[1],16)>>>0:(t=cn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=an.exec(e))?(255|gn(fn(t[1]),bn(t[2]),bn(t[3])))>>>0:(t=sn.exec(e))?(gn(fn(t[1]),bn(t[2]),bn(t[3]))|mn(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var yn=(e,t,r)=>{if(Tr.fun(e))return e;if(Tr.arr(e))return yn({range:e,output:t,extrapolate:r});if(Tr.str(e.output[0]))return zr(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var xn=1.70158,$n=1.525*xn,wn=xn+1,Cn=2*Math.PI/3,Sn=2*Math.PI/4.5,kn=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},On={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>wn*e*e*e-xn*e*e,easeOutBack:e=>1+wn*Math.pow(e-1,3)+xn*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-$n)/2:(Math.pow(2*e-2,2)*(($n+1)*(2*e-2)+$n)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Cn),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Cn)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Sn)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Sn)/2+1,easeInBounce:e=>1-kn(1-e),easeOutBounce:kn,easeInOutBounce:e=>e<.5?(1-kn(1-2*e))/2:(1+kn(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Dn=Symbol.for("FluidValue.get"),jn=Symbol.for("FluidValue.observers"),En=e=>Boolean(e&&e[Dn]),_n=e=>e&&e[Dn]?e[Dn]():e,Tn=e=>e[jn]||null;function Fn(e,t){const r=e[jn];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Mn=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");An(this,e)}},An=(e,t)=>Rn(e,Dn,t);function Bn(e,t){if(e[Dn]){let r=e[jn];r||Rn(e,jn,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function In(e,t){const r=e[jn];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[jn]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var zn,Rn=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Pn=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ln=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Nn=new RegExp(`(${Pn.source})(%|[a-z]+)`,"i"),Wn=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Hn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Yn=e=>{const[t,r]=Vn(e);if(!t||Lr())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Hn.test(r)?Yn(r):r||e},Vn=e=>{const t=Hn.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Un=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Xn=e=>{zn||(zn=Nr?new RegExp(`(${Object.keys(Nr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>_n(e).replace(Hn,Yn).replace(Ln,vn).replace(zn,vn))),r=t.map((e=>e.match(Pn).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=n.map((t=>yn({...e,output:t})));return e=>{const r=!Nn.test(t[0])&&t.find((e=>Nn.test(e)))?.replace(Pn,"");let n=0;return t[0].replace(Pn,(()=>`${i[n++](e)}${r||""}`)).replace(Wn,Un)}},Kn="react-spring: ",qn=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Kn}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Gn=qn(console.warn);var Zn=qn(console.warn);function Qn(e){return Tr.str(e)&&("#"==e[0]||/\d/.test(e)||!Lr()&&Hn.test(e)||e in(Nr||{}))}var Jn=Lr()?u:h,ei=()=>{const e=o(!1);return Jn((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ti(){const e=a()[1],t=ei();return()=>{t.current&&e(Math.random())}}var ri=e=>u(e,ni),ni=[];function ii(e){const t=o();return u((()=>{t.current=e})),t.current}var oi=Symbol.for("Animated:node"),ai=e=>e&&e[oi],si=(e,t)=>{return r=e,n=oi,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},li=e=>e&&e[oi]&&e[oi].getPayload(),ci=class{constructor(){si(this,this)}getPayload(){return this.payload||[]}},di=class extends ci{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Tr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new di(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Tr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Tr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ui=class extends di{constructor(e){super(0),this._string=null,this._toString=yn({output:[e,e]})}static create(e){return new ui(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Tr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=yn({output:[this.getValue(),e]})),this._value=0,super.reset()}},hi={dependencies:null},gi=class extends ci{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ar(this.source,((r,n)=>{var i;(i=r)&&i[oi]===i?t[n]=r.getValue(e):En(r)?t[n]=_n(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Mr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ar(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){hi.dependencies&&En(e)&&hi.dependencies.add(e);const t=li(e);t&&Mr(t,(e=>this.add(e)))}},pi=class extends gi{constructor(e){super(e)}static create(e){return new pi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(fi)),!0)}};function fi(e){return(Qn(e)?ui:di).create(e)}function mi(e){const t=ai(e);return t?t.constructor:Tr.arr(e)?pi:Qn(e)?ui:di}var bi=(e,t)=>{const r=!Tr.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((i,a)=>{const s=o(null),l=r&&p((e=>{s.current=function(e,t){e&&(Tr.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,d]=function(e,t){const r=new Set;hi.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new gi(e),hi.dependencies=null,[e,r]}(i,t),h=ti(),g=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new vi(g,d),m=o();Jn((()=>(m.current=f,Mr(d,(e=>Bn(e,f))),()=>{m.current&&(Mr(m.current.deps,(e=>In(e,m.current))),gr.cancel(m.current.update))}))),u(g,[]),ri((()=>()=>{const e=m.current;Mr(e.deps,(t=>In(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:l})}))},vi=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&gr.write(this.update)}};var yi=Symbol.for("AnimatedComponent"),xi=e=>Tr.str(e)?e:e&&Tr.str(e.displayName)?e.displayName:Tr.fun(e)&&e.name||null;function $i(e,...t){return Tr.fun(e)?e(...t):e}var wi=(e,t)=>!0===e||!!(t&&e&&(Tr.fun(e)?e(t):Br(e).includes(t))),Ci=(e,t)=>Tr.obj(e)?t&&e[t]:e,Si=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ki=e=>e,Oi=(e,t=ki)=>{let r=Di;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Tr.und(r)||(n[i]=r)}return n},Di=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ji={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ei(e){const t=function(e){const t={};let r=0;if(Ar(e,((e,n)=>{ji[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ar(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function _i(e){return e=_n(e),Tr.arr(e)?e.map(_i):Qn(e)?ur.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ti(e){return Tr.fun(e)||Tr.arr(e)&&Tr.obj(e[0])}var Fi={tension:170,friction:26,mass:1,damping:1,easing:On.linear,clamp:!1},Mi=class{constructor(){this.velocity=0,Object.assign(this,Fi)}};function Ai(e,t){if(Tr.und(t.decay)){const r=!Tr.und(t.tension)||!Tr.und(t.friction);!r&&Tr.und(t.frequency)&&Tr.und(t.damping)&&Tr.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Bi=[],Ii=class{constructor(){this.changed=!1,this.values=Bi,this.toValues=null,this.fromValues=Bi,this.config=new Mi,this.immediate=!1}};function zi(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=wi(r.cancel??n?.cancel,t);if(d)g();else{Tr.und(r.pause)||(i.paused=wi(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||wi(e,t)),l=$i(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-gr.now()}function h(){l>0&&!ur.skipAnimation?(i.delayed=!0,c=gr.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(c)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Ri=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ni(e.get()):t.every((e=>e.noop))?Pi(e.get()):Li(e.get(),t.every((e=>e.finished))),Pi=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Li=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ni=e=>({value:e,cancelled:!0,finished:!1});function Wi(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Oi(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),g=e=>{const t=i<=(r.cancelId||0)&&Ni(n)||i!==r.asyncId&&Li(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new Yi,a=new Vi;return(async()=>{if(ur.skipAnimation)throw Hi(r),a.result=Li(n,!1),u(a),a;g(o);const s=Tr.obj(e)?{...e}:{...t,to:e};s.parentId=i,Ar(c,((e,t)=>{Tr.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return g(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(ur.skipAnimation)return Hi(r),Li(n,!1);try{let t;t=Tr.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),h]),f=Li(n.get(),!0,!1)}catch(e){if(e instanceof Yi)f=e.result;else{if(!(e instanceof Vi))throw e;f=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Tr.fun(a)&&gr.batchedUpdates((()=>{a(f,n,n.item)})),f})():l}function Hi(e,t){Ir(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Yi=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Vi=class extends Error{constructor(){super("SkipAnimationSignal")}},Ui=e=>e instanceof Ki,Xi=1,Ki=class extends Mn{constructor(){super(...arguments),this.id=Xi++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ai(this);return e&&e.getValue()}to(...e){return ur.to(this,e)}interpolate(...e){return Gn(`${Kn}The "interpolate" function is deprecated in v9 (use "to" instead)`),ur.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Fn(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||qr.sort(this),Fn(this,{type:"priority",parent:this,priority:e})}},qi=Symbol.for("SpringPhase"),Gi=e=>(1&e[qi])>0,Zi=e=>(2&e[qi])>0,Qi=e=>(4&e[qi])>0,Ji=(e,t)=>t?e[qi]|=3:e[qi]&=-3,eo=(e,t)=>t?e[qi]|=4:e[qi]&=-5,to=class extends Ki{constructor(e,t){if(super(),this.animation=new Ii,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Tr.und(e)||!Tr.und(t)){const r=Tr.obj(e)?{...e}:{...t,from:e};Tr.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Zi(this)||this._state.asyncTo)||Qi(this)}get goal(){return _n(this.animation.to)}get velocity(){const e=ai(this);return e instanceof di?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Gi(this)}get isAnimating(){return Zi(this)}get isPaused(){return Qi(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=li(n.to);!a&&En(n.to)&&(i=Br(_n(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ui?1:a?a[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Tr.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Tr.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Tr.und(n),g=r==c?s.v0>0:r<c;let p,f=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(f=u==c||u>c==g,f&&(a=-a*n,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=ai(this),l=s.getValue();if(t){const e=_n(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return gr.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Zi(this)){const{to:e,config:t}=this.animation;gr.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Tr.und(e)?(r=this.queue||[],this.queue=[]):r=[Tr.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Ri(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Hi(this._state,e&&this._lastCallId),gr.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Tr.obj(r)?r[t]:r,(null==r||Ti(r))&&(r=void 0),n=Tr.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Gi(this)||(e.reverse&&([r,n]=[n,r]),n=_n(n),Tr.und(n)?ai(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Oi(e,((e,t)=>/^on/.test(t)?Ci(e,r):e))),lo(this,e,"onProps"),co(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return zi(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{Qi(this)||(eo(this,!0),Pr(o.pauseQueue),co(this,"onPause",Li(this,ro(this,this.animation.to)),this))},resume:()=>{Qi(this)&&(eo(this,!1),Zi(this)&&this._resume(),Pr(o.resumeQueue),co(this,"onResume",Li(this,ro(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=no(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ni(this));const n=!Tr.und(e.to),i=!Tr.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Ni(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||n||t.default&&!Tr.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!Fr(u,c);h&&(s.from=u),u=_n(u);const g=!Fr(d,l);g&&this._focus(d);const p=Ti(t.to),{config:f}=s,{decay:m,velocity:b}=f;(n||i)&&(f.velocity=0),t.config&&!p&&function(e,t,r){r&&(Ai(r={...r},t),t={...r,...t}),Ai(e,t),Object.assign(e,t);for(const t in Fi)null==e[t]&&(e[t]=Fi[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Tr.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(f,$i(t.config,o),t.config!==a.config?$i(a.config,o):void 0);let v=ai(this);if(!v||Tr.und(d))return r(Li(this,!0));const y=Tr.und(t.reset)?i&&!t.default:!Tr.und(u)&&wi(t.reset,o),x=y?u:this.get(),$=_i(d),w=Tr.num($)||Tr.arr($)||Qn($),C=!p&&(!w||wi(a.immediate||t.immediate,o));if(g){const e=mi(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const S=v.constructor;let k=En(d),O=!1;if(!k){const e=y||!Gi(this)&&h;(g||e)&&(O=Fr(_i(x),$),k=!O),(Fr(s.immediate,C)||C)&&Fr(f.decay,m)&&Fr(f.velocity,b)||(k=!0)}if(O&&Zi(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||En(l))&&(s.values=v.getPayload(),s.toValues=En(d)?null:S==ui?[1]:Br($)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),k)){const{onRest:e}=s;Mr(so,(e=>lo(this,t,e)));const n=Li(this,ro(this,l));Pr(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&gr.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?$i(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(Wi(t.to,t,this._state,this)):k?this._start():Zi(this)&&!g?this._pendingCalls.add(r):r(Pi(x))}_focus(e){const t=this.animation;e!==t.to&&(Tn(this)&&this._detach(),t.to=e,Tn(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;En(t)&&(Bn(t,this),Ui(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;En(e)&&In(e,this)}_set(e,t=!0){const r=_n(e);if(!Tr.und(r)){const e=ai(this);if(!e||!Fr(r,e.getValue())){const n=mi(r);e&&e.constructor==n?e.setValue(r):si(this,n.create(r)),e&&gr.batchedUpdates((()=>{this._onChange(r,t)}))}}return ai(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,co(this,"onStart",Li(this,ro(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),$i(this.animation.onChange,e,this)),$i(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ai(this).reset(_n(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Zi(this)||(Ji(this,!0),Qi(this)||this._resume())}_resume(){ur.skipAnimation?this.finish():qr.start(this)}_stop(e,t){if(Zi(this)){Ji(this,!1);const r=this.animation;Mr(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Fn(this,{type:"idle",parent:this});const n=t?Ni(this.get()):Li(this.get(),ro(this,e??r.to));Pr(this._pendingCalls,n),r.changed&&(r.changed=!1,co(this,"onRest",n,this))}}};function ro(e,t){const r=_i(t);return Fr(_i(e.get()),r)}function no(e,t=e.loop,r=e.to){const n=$i(t);if(n){const i=!0!==n&&Ei(n),o=(i||e).reverse,a=!i||i.reset;return io({...e,loop:t,default:!1,pause:void 0,to:!o||Ti(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function io(e){const{to:t,from:r}=e=Ei(e),n=new Set;return Tr.obj(t)&&ao(t,n),Tr.obj(r)&&ao(r,n),e.keys=n.size?Array.from(n):null,e}function oo(e){const t=io(e);return Tr.und(t.default)&&(t.default=Oi(t)),t}function ao(e,t){Ar(e,((e,r)=>null!=e&&t.add(r)))}var so=["onStart","onRest","onChange","onPause","onResume"];function lo(e,t,r){e.animation[r]=t[r]!==Si(t,r)?Ci(t[r],e.key):void 0}function co(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var uo=["onStart","onChange","onRest"],ho=1,go=class{constructor(e,t){this.id=ho++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Tr.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(io(e)),this}start(e){let{queue:t}=this;return e?t=Br(e).map(io):this.queue=[],this._flush?this._flush(this,t):(xo(this,t),po(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Mr(Br(t),(t=>r[t].stop(!!e)))}else Hi(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Tr.und(e))this.start({pause:!0});else{const t=this.springs;Mr(Br(e),(e=>t[e].pause()))}return this}resume(e){if(Tr.und(e))this.start({pause:!1});else{const t=this.springs;Mr(Br(e),(e=>t[e].resume()))}return this}each(e){Ar(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Ir(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Ir(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ir(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}gr.onFrame(this._onFrame)}};function po(e,t){return Promise.all(t.map((t=>fo(e,t)))).then((t=>Ri(e,t)))}async function fo(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Tr.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=Tr.arr(i)||Tr.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Mr(uo,(r=>{const n=t[r];if(Tr.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Pr(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===Si(t,"cancel");(d||g&&u.asyncId)&&h.push(zi(++e._lastAsyncId,{props:t,state:u,actions:{pause:_r,resume:_r,start(t,r){g?(Hi(u,e._lastAsyncId),r(Ni(e))):(t.onRest=s,r(Wi(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Ri(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=no(t,a,i);if(r)return xo(e,[r]),fo(e,r,!0)}return l&&gr.batchedUpdates((()=>l(p,e,e.item))),p}function mo(e,t){const r={...e.springs};return t&&Mr(Br(t),(e=>{Tr.und(e.keys)&&(e=io(e)),Tr.obj(e.to)||(e={...e,to:void 0}),yo(r,e,(e=>vo(e)))})),bo(e,r),r}function bo(e,t){Ar(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Bn(t,e))}))}function vo(e,t){const r=new to;return r.key=e,t&&Bn(r,t),r}function yo(e,t,r){t.keys&&Mr(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function xo(e,t){Mr(t,(t=>{yo(e.springs,t,(t=>vo(t,e)))}))}var $o,wo,Co=({children:e,...t})=>{const r=f(So),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=o(),i=n.current;let s=i;if(s){const r=Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs));r||(s={inputs:t,result:e()})}else s=r;return u((()=>{n.current=s,i==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=So;return n.createElement(l,{value:t},e)},So=($o=Co,wo={},Object.assign($o,n.createContext(wo)),$o.Provider._context=$o,$o.Consumer._context=$o,$o);Co.Provider=So.Provider,Co.Consumer=So.Consumer;var ko=()=>{const e=[],t=function(t){Zn(`${Kn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Mr(e,((e,i)=>{if(Tr.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Mr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Mr(e,(e=>e.resume(...arguments))),this},t.set=function(t){Mr(e,((e,r)=>{const n=Tr.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Mr(e,((e,n)=>{if(Tr.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Mr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Mr(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Tr.fun(e)?e(r,t):e};return t._getProps=r,t};function Oo(e,t){const r=Tr.fun(e),[[n],i]=function(e,t,r){const n=Tr.fun(t)&&t;n&&!r&&(r=[]);const i=m((()=>n||3==arguments.length?ko():void 0),[]),a=o(0),s=ti(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const r=mo(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?po(e,t):new Promise((n=>{bo(e,r),l.queue.push((()=>{n(po(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),d=[],u=ii(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new go(null,l.flush)),r=n?n(i,e):t[i];r&&(d[i]=oo(r))}}m((()=>{Mr(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),m((()=>{h(0,Math.min(u,e))}),r);const g=c.current.map(((e,t)=>mo(e,d[t]))),p=f(Co),b=ii(p),v=p!==b&&function(e){for(const t in e)return!0;return!1}(p);Jn((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Mr(e,(e=>e()))),Mr(c.current,((e,t)=>{i?.add(e),v&&e.start({default:p});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ri((()=>()=>{Mr(l.ctrls,(e=>e.stop(!0)))}));const y=g.map((e=>({...e})));return i?[y,i]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Do=class extends Ki{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=yn(...t);const r=this._get(),n=mi(r);si(this,n.create(r))}advance(e){const t=this._get();Fr(t,this.get())||(ai(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Eo(this._active)&&_o(this)}_get(){const e=Tr.arr(this.source)?this.source.map(_n):Br(_n(this.source));return this.calc(...e)}_start(){this.idle&&!Eo(this._active)&&(this.idle=!1,Mr(li(this),(e=>{e.done=!1})),ur.skipAnimation?(gr.batchedUpdates((()=>this.advance())),_o(this)):qr.start(this))}_attach(){let e=1;Mr(Br(this.source),(t=>{En(t)&&Bn(t,this),Ui(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Mr(Br(this.source),(e=>{En(e)&&In(e,this)})),this._active.clear(),_o(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Br(this.source).reduce(((e,t)=>Math.max(e,(Ui(t)?t.priority:0)+1)),0))}};function jo(e){return!1!==e.idle}function Eo(e){return!e.size||Array.from(e).every(jo)}function _o(e){e.idle||(e.idle=!0,Mr(li(e),(e=>{e.done=!0})),Fn(e,{type:"idle",parent:e}))}ur.assign({createStringInterpolator:Xn,to:(e,t)=>new Do(e,t)});var To=/^--/;function Fo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||To.test(e)||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}var Mo={};var Ao={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bo=["Webkit","Ms","Moz","O"];Ao=Object.keys(Ao).reduce(((e,t)=>(Bo.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Ao);var Io=/^(matrix|translate|scale|rotate|skew)/,zo=/^(translate)/,Ro=/^(rotate|skew)/,Po=(e,t)=>Tr.num(e)&&0!==e?e+t:e,Lo=(e,t)=>Tr.arr(e)?e.every((e=>Lo(e,t))):Tr.num(e)?e===t:parseFloat(e)===t,No=class extends gi{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Po(e,"px"))).join(",")})`,Lo(e,0)]))),Ar(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Io.test(t)){if(delete n[t],Tr.und(e))return;const r=zo.test(t)?"px":Ro.test(t)?"deg":"";i.push(Br(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Po(i,r)})`,Lo(i,0)]:e=>[`${t}(${e.map((e=>Po(e,r))).join(",")})`,Lo(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Wo(i,o)),super(n)}},Wo=class extends Mn{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Mr(this.inputs,((r,n)=>{const i=_n(r[0]),[o,a]=this.transforms[n](Tr.arr(i)?i:r.map(_n));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Mr(this.inputs,(e=>Mr(e,(e=>En(e)&&Bn(e,this)))))}observerRemoved(e){0==e&&Mr(this.inputs,(e=>Mr(e,(e=>En(e)&&In(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Fn(this,e)}};ur.assign({batchedUpdates:j,createStringInterpolator:Xn,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Ho=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new gi(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=xi(e)||"Anonymous";return(e=Tr.str(e)?o[e]||(o[e]=bi(e,i)):e[yi]||(e[yi]=bi(e,i))).displayName=`Animated(${t})`,e};return Ar(e,((t,r)=>{Tr.arr(e)&&(r=xi(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Mo[t]||(Mo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Fo(t,n[t]);To.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new No(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Yo=Ho.animated,Vo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Uo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Xo(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var Ko=Array.isArray,qo="object"==typeof Vo&&Vo&&Vo.Object===Object&&Vo,Go=qo,Zo="object"==typeof self&&self&&self.Object===Object&&self,Qo=Go||Zo||Function("return this")(),Jo=Qo.Symbol,ea=Jo,ta=Object.prototype,ra=ta.hasOwnProperty,na=ta.toString,ia=ea?ea.toStringTag:void 0;var oa=function(e){var t=ra.call(e,ia),r=e[ia];try{e[ia]=void 0;var n=!0}catch(e){}var i=na.call(e);return n&&(t?e[ia]=r:delete e[ia]),i},aa=Object.prototype.toString;var sa=oa,la=function(e){return aa.call(e)},ca=Jo?Jo.toStringTag:void 0;var da=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ca&&ca in Object(e)?sa(e):la(e)};var ua=function(e){return null!=e&&"object"==typeof e},ha=da,ga=ua;var pa=function(e){return"symbol"==typeof e||ga(e)&&"[object Symbol]"==ha(e)},fa=Ko,ma=pa,ba=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,va=/^\w*$/;var ya=function(e,t){if(fa(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ma(e))||(va.test(e)||!ba.test(e)||null!=t&&e in Object(t))};var xa=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},$a=da,wa=xa;var Ca,Sa=function(e){if(!wa(e))return!1;var t=$a(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ka=Qo["__core-js_shared__"],Oa=(Ca=/[^.]+$/.exec(ka&&ka.keys&&ka.keys.IE_PROTO||""))?"Symbol(src)_1."+Ca:"";var Da=function(e){return!!Oa&&Oa in e},ja=Function.prototype.toString;var Ea=function(e){if(null!=e){try{return ja.call(e)}catch(e){}try{return e+""}catch(e){}}return""},_a=Sa,Ta=Da,Fa=xa,Ma=Ea,Aa=/^\[object .+?Constructor\]$/,Ba=Function.prototype,Ia=Object.prototype,za=Ba.toString,Ra=Ia.hasOwnProperty,Pa=RegExp("^"+za.call(Ra).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var La=function(e,t){return null==e?void 0:e[t]},Na=function(e){return!(!Fa(e)||Ta(e))&&(_a(e)?Pa:Aa).test(Ma(e))},Wa=La;var Ha=function(e,t){var r=Wa(e,t);return Na(r)?r:void 0},Ya=Ha(Object,"create"),Va=Ya;var Ua=function(){this.__data__=Va?Va(null):{},this.size=0};var Xa=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ka=Ya,qa=Object.prototype.hasOwnProperty;var Ga=function(e){var t=this.__data__;if(Ka){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return qa.call(t,e)?t[e]:void 0},Za=Ya,Qa=Object.prototype.hasOwnProperty;var Ja=function(e){var t=this.__data__;return Za?void 0!==t[e]:Qa.call(t,e)},es=Ya;var ts=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=es&&void 0===t?"__lodash_hash_undefined__":t,this},rs=Ua,ns=Xa,is=Ga,os=Ja,as=ts;function ss(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ss.prototype.clear=rs,ss.prototype.delete=ns,ss.prototype.get=is,ss.prototype.has=os,ss.prototype.set=as;var ls=ss;var cs=function(){this.__data__=[],this.size=0};var ds=function(e,t){return e===t||e!=e&&t!=t},us=ds;var hs=function(e,t){for(var r=e.length;r--;)if(us(e[r][0],t))return r;return-1},gs=hs,ps=Array.prototype.splice;var fs=function(e){var t=this.__data__,r=gs(t,e);return!(r<0)&&(r==t.length-1?t.pop():ps.call(t,r,1),--this.size,!0)},ms=hs;var bs=function(e){var t=this.__data__,r=ms(t,e);return r<0?void 0:t[r][1]},vs=hs;var ys=function(e){return vs(this.__data__,e)>-1},xs=hs;var $s=function(e,t){var r=this.__data__,n=xs(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},ws=cs,Cs=fs,Ss=bs,ks=ys,Os=$s;function Ds(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ds.prototype.clear=ws,Ds.prototype.delete=Cs,Ds.prototype.get=Ss,Ds.prototype.has=ks,Ds.prototype.set=Os;var js=Ds,Es=Ha(Qo,"Map"),_s=ls,Ts=js,Fs=Es;var Ms=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var As=function(e,t){var r=e.__data__;return Ms(t)?r["string"==typeof t?"string":"hash"]:r.map},Bs=As;var Is=function(e){var t=Bs(this,e).delete(e);return this.size-=t?1:0,t},zs=As;var Rs=function(e){return zs(this,e).get(e)},Ps=As;var Ls=function(e){return Ps(this,e).has(e)},Ns=As;var Ws=function(e,t){var r=Ns(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Hs=function(){this.size=0,this.__data__={hash:new _s,map:new(Fs||Ts),string:new _s}},Ys=Is,Vs=Rs,Us=Ls,Xs=Ws;function Ks(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ks.prototype.clear=Hs,Ks.prototype.delete=Ys,Ks.prototype.get=Vs,Ks.prototype.has=Us,Ks.prototype.set=Xs;var qs=Ks,Gs=qs;function Zs(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Zs.Cache||Gs),r}Zs.Cache=Gs;var Qs=Zs;var Js=function(e){var t=Qs(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},el=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tl=/\\(\\)?/g,rl=Js((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(el,(function(e,r,n,i){t.push(n?i.replace(tl,"$1"):r||e)})),t}));var nl=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},il=Ko,ol=pa,al=Jo?Jo.prototype:void 0,sl=al?al.toString:void 0;var ll=function e(t){if("string"==typeof t)return t;if(il(t))return nl(t,e)+"";if(ol(t))return sl?sl.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},cl=ll;var dl=function(e){return null==e?"":cl(e)},ul=Ko,hl=ya,gl=rl,pl=dl;var fl=function(e,t){return ul(e)?e:hl(e,t)?[e]:gl(pl(e))},ml=pa;var bl=function(e){if("string"==typeof e||ml(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},vl=fl,yl=bl;var xl=function(e,t){for(var r=0,n=(t=vl(t,e)).length;null!=e&&r<n;)e=e[yl(t[r++])];return r&&r==n?e:void 0},$l=xl;var wl=function(e,t,r){var n=null==e?void 0:$l(e,t);return void 0===n?r:n},Cl=Uo(wl);const Sl=(e,t,r)=>Cl(r,t)||Cl(e,t),kl=(e,t)=>{const r=t||e.defaultValue;return Cl(e.collections,r)},Ol={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},Dl=e=>t=>{var r;const n=t.theme,i=kl(Ol,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Sl(i,e,n.overrides.motion):i[e]},jl={"duration-150":Dl("duration-150"),"duration-250":Dl("duration-250"),"duration-350":Dl("duration-350"),"duration-500":Dl("duration-500"),"duration-800":Dl("duration-800"),"duration-1000":Dl("duration-1000"),"ease-default":Dl("ease-default"),"ease-standard":Dl("ease-standard"),"ease-entrance":Dl("ease-entrance"),"ease-exit":Dl("ease-exit")},El={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#89000B","primary-20":"#B0000E","primary-30":"#C4000F","primary-40":"#D0333F","primary-50":"#DC666F","primary-60":"#E28087","primary-70":"#E7999F","primary-80":"#EDB3B7","primary-90":"#F3CCCF","primary-95":"#F9E6E7","primary-100":"#FCF2F3","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4d4d4d","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},_l=e=>t=>{var r;const n=t.theme,i=kl(El,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?Sl(i,e,n.overrides.primitiveColour):i[e]},Tl={"brand-10":_l("brand-10"),"brand-20":_l("brand-20"),"brand-30":_l("brand-30"),"brand-40":_l("brand-40"),"brand-50":_l("brand-50"),"brand-60":_l("brand-60"),"brand-70":_l("brand-70"),"brand-80":_l("brand-80"),"brand-90":_l("brand-90"),"brand-95":_l("brand-95"),"brand-100":_l("brand-100"),"primary-10":_l("primary-10"),"primary-20":_l("primary-20"),"primary-30":_l("primary-30"),"primary-40":_l("primary-40"),"primary-50":_l("primary-50"),"primary-60":_l("primary-60"),"primary-70":_l("primary-70"),"primary-80":_l("primary-80"),"primary-90":_l("primary-90"),"primary-95":_l("primary-95"),"primary-100":_l("primary-100"),"secondary-10":_l("secondary-10"),"secondary-20":_l("secondary-20"),"secondary-30":_l("secondary-30"),"secondary-40":_l("secondary-40"),"secondary-50":_l("secondary-50"),"secondary-60":_l("secondary-60"),"secondary-70":_l("secondary-70"),"secondary-80":_l("secondary-80"),"secondary-90":_l("secondary-90"),"secondary-95":_l("secondary-95"),"secondary-100":_l("secondary-100"),"neutral-10":_l("neutral-10"),"neutral-20":_l("neutral-20"),"neutral-30":_l("neutral-30"),"neutral-40":_l("neutral-40"),"neutral-50":_l("neutral-50"),"neutral-60":_l("neutral-60"),"neutral-70":_l("neutral-70"),"neutral-80":_l("neutral-80"),"neutral-90":_l("neutral-90"),"neutral-95":_l("neutral-95"),"neutral-100":_l("neutral-100"),"success-10":_l("success-10"),"success-20":_l("success-20"),"success-30":_l("success-30"),"success-40":_l("success-40"),"success-50":_l("success-50"),"success-60":_l("success-60"),"success-70":_l("success-70"),"success-80":_l("success-80"),"success-90":_l("success-90"),"success-95":_l("success-95"),"success-100":_l("success-100"),"warning-10":_l("warning-10"),"warning-20":_l("warning-20"),"warning-30":_l("warning-30"),"warning-40":_l("warning-40"),"warning-50":_l("warning-50"),"warning-60":_l("warning-60"),"warning-70":_l("warning-70"),"warning-80":_l("warning-80"),"warning-90":_l("warning-90"),"warning-95":_l("warning-95"),"warning-100":_l("warning-100"),"error-10":_l("error-10"),"error-20":_l("error-20"),"error-30":_l("error-30"),"error-40":_l("error-40"),"error-50":_l("error-50"),"error-60":_l("error-60"),"error-70":_l("error-70"),"error-80":_l("error-80"),"error-90":_l("error-90"),"error-95":_l("error-95"),"error-100":_l("error-100"),"info-10":_l("info-10"),"info-20":_l("info-20"),"info-30":_l("info-30"),"info-40":_l("info-40"),"info-50":_l("info-50"),"info-60":_l("info-60"),"info-70":_l("info-70"),"info-80":_l("info-80"),"info-90":_l("info-90"),"info-95":_l("info-95"),"info-100":_l("info-100"),white:_l("white"),black:_l("black"),"primary-inverse":_l("primary-inverse")},Fl={text:_l("neutral-20"),"text-subtle":_l("neutral-30"),"text-subtler":_l("neutral-50"),"text-subtlest":_l("neutral-60"),"text-primary":_l("primary-50"),"text-hover":_l("primary-40"),"text-selected":_l("primary-50"),"text-selected-hover":_l("primary-40"),"text-disabled":_l("neutral-50"),"text-disabled-subtle":_l("neutral-60"),"text-disabled-subtlest":_l("neutral-80"),"text-selected-disabled":_l("neutral-20"),"text-success":_l("success-40"),"text-warning":_l("warning-40"),"text-error":_l("error-40"),"text-info":_l("info-40"),"text-inverse":_l("white"),icon:_l("neutral-50"),"icon-subtle":_l("neutral-60"),"icon-strongest":_l("neutral-20"),"icon-primary":_l("primary-50"),"icon-primary-subtle":_l("primary-60"),"icon-primary-subtlest":_l("primary-70"),"icon-hover":_l("primary-40"),"icon-selected":_l("primary-50"),"icon-selected-hover":_l("primary-40"),"icon-disabled":_l("neutral-50"),"icon-disabled-subtle":_l("neutral-60"),"icon-selected-disabled":_l("neutral-60"),"icon-success":_l("success-50"),"icon-warning":_l("warning-60"),"icon-error":_l("error-50"),"icon-error-strong":_l("error-40"),"icon-info":_l("info-50"),"icon-inverse":_l("white"),"icon-primary-inverse":_l("primary-inverse"),border:_l("neutral-90"),"border-strong":_l("neutral-70"),"border-stronger":_l("neutral-50"),"border-primary":_l("primary-50"),"border-primary-subtle":_l("primary-60"),"border-hover":_l("primary-90"),"border-hover-strong":_l("primary-60"),"border-selected":_l("primary-50"),"border-selected-subtle":_l("primary-70"),"border-selected-subtlest":_l("primary-90"),"border-selected-hover":_l("primary-40"),"border-focus":_l("primary-60"),"border-focus-strong":_l("primary-50"),"border-disabled":_l("neutral-90"),"border-selected-disabled":_l("neutral-70"),"border-success":_l("success-60"),"border-warning":_l("warning-60"),"border-error":_l("error-60"),"border-error-focus":_l("error-60"),"border-error-focus-strong":_l("error-40"),"border-error-strong":_l("error-40"),"border-info":_l("info-60"),bg:_l("white"),"bg-strong":_l("neutral-100"),"bg-stronger":_l("neutral-95"),"bg-strongest":_l("neutral-90"),"bg-hover":_l("primary-95"),"bg-hover-strong":_l("primary-90"),"bg-hover-subtle":_l("primary-100"),"bg-hover-neutral":_l("neutral-100"),"bg-hover-neutral-strong":_l("neutral-90"),"bg-selected":_l("primary-95"),"bg-selected-hover":_l("primary-90"),"bg-selected-strong":_l("primary-90"),"bg-selected-stronger":_l("primary-70"),"bg-selected-strongest":_l("primary-50"),"bg-selected-strongest-hover":_l("primary-40"),"bg-disabled":_l("neutral-95"),"bg-selected-disabled":_l("neutral-95"),"bg-selected-stronger-disabled":_l("neutral-70"),"bg-success":_l("success-100"),"bg-success-hover":_l("success-95"),"bg-success-strong":_l("success-50"),"bg-success-strong-hover":_l("success-40"),"bg-warning":_l("warning-100"),"bg-warning-hover":_l("warning-95"),"bg-warning-strong":_l("warning-50"),"bg-warning-strong-hover":_l("warning-40"),"bg-info":_l("info-100"),"bg-info-hover":_l("info-95"),"bg-info-strong":_l("info-50"),"bg-info-strong-hover":_l("info-40"),"bg-error":_l("error-100"),"bg-error-hover":_l("error-95"),"bg-error-strong":_l("error-50"),"bg-error-strong-hover":_l("error-40"),"bg-inverse":_l("neutral-20"),"bg-inverse-subtle":_l("neutral-30"),"bg-inverse-subtler":_l("neutral-50"),"bg-inverse-subtlest":_l("neutral-60"),"bg-inverse-hover":_l("neutral-40"),"bg-primary":_l("primary-50"),"bg-primary-subtle":_l("primary-60"),"bg-primary-subtler":_l("primary-95"),"bg-primary-subtlest":_l("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":_l("primary-40"),"bg-primary-subtlest-hover":_l("primary-90"),"bg-primary-subtlest-selected":_l("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:_l("primary-50"),"hyperlink-hover":_l("primary-40"),"hyperlink-visited":_l("primary-40"),"hyperlink-inverse":_l("primary-inverse"),"focus-ring":_l("black"),"focus-ring-inverse":_l("white")},Ml={collections:{lifesg:Fl,bookingsg:Fl,rbs:Fl,mylegacy:Fl,ccube:Fl,pa:Fl},defaultValue:"lifesg"},Al=e=>t=>{var r;const n=t.theme,i=kl(Ml,null==n?void 0:n.colourScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?Sl(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},Bl={text:Al("text"),"text-subtle":Al("text-subtle"),"text-subtler":Al("text-subtler"),"text-subtlest":Al("text-subtlest"),"text-primary":Al("text-primary"),"text-hover":Al("text-hover"),"text-selected":Al("text-selected"),"text-selected-hover":Al("text-selected-hover"),"text-disabled":Al("text-disabled"),"text-disabled-subtle":Al("text-disabled-subtle"),"text-disabled-subtlest":Al("text-disabled-subtlest"),"text-selected-disabled":Al("text-selected-disabled"),"text-success":Al("text-success"),"text-warning":Al("text-warning"),"text-error":Al("text-error"),"text-info":Al("text-info"),"text-inverse":Al("text-inverse"),icon:Al("icon"),"icon-subtle":Al("icon-subtle"),"icon-strongest":Al("icon-strongest"),"icon-primary":Al("icon-primary"),"icon-primary-subtle":Al("icon-primary-subtle"),"icon-primary-subtlest":Al("icon-primary-subtlest"),"icon-hover":Al("icon-hover"),"icon-selected":Al("icon-selected"),"icon-selected-hover":Al("icon-selected-hover"),"icon-disabled":Al("icon-disabled"),"icon-disabled-subtle":Al("icon-disabled-subtle"),"icon-selected-disabled":Al("icon-selected-disabled"),"icon-success":Al("icon-success"),"icon-warning":Al("icon-warning"),"icon-error":Al("icon-error"),"icon-error-strong":Al("icon-error-strong"),"icon-info":Al("icon-info"),"icon-inverse":Al("icon-inverse"),"icon-primary-inverse":Al("icon-primary-inverse"),border:Al("border"),"border-strong":Al("border-strong"),"border-stronger":Al("border-stronger"),"border-primary":Al("border-primary"),"border-primary-subtle":Al("border-primary-subtle"),"border-hover":Al("border-hover"),"border-hover-strong":Al("border-hover-strong"),"border-selected":Al("border-selected"),"border-selected-subtle":Al("border-selected-subtle"),"border-selected-subtlest":Al("border-selected-subtlest"),"border-selected-hover":Al("border-selected-hover"),"border-focus":Al("border-focus"),"border-focus-strong":Al("border-focus-strong"),"border-disabled":Al("border-disabled"),"border-selected-disabled":Al("border-selected-disabled"),"border-success":Al("border-success"),"border-warning":Al("border-warning"),"border-error":Al("border-error"),"border-error-focus":Al("border-error-focus"),"border-error-focus-strong":Al("border-error-focus-strong"),"border-error-strong":Al("border-error-strong"),"border-info":Al("border-info"),bg:Al("bg"),"bg-strong":Al("bg-strong"),"bg-stronger":Al("bg-stronger"),"bg-strongest":Al("bg-strongest"),"bg-hover":Al("bg-hover"),"bg-hover-strong":Al("bg-hover-strong"),"bg-hover-subtle":Al("bg-hover-subtle"),"bg-hover-neutral":Al("bg-hover-neutral"),"bg-hover-neutral-strong":Al("bg-hover-neutral-strong"),"bg-selected":Al("bg-selected"),"bg-selected-hover":Al("bg-selected-hover"),"bg-selected-strong":Al("bg-selected-strong"),"bg-selected-stronger":Al("bg-selected-stronger"),"bg-selected-strongest":Al("bg-selected-strongest"),"bg-selected-strongest-hover":Al("bg-selected-strongest-hover"),"bg-disabled":Al("bg-disabled"),"bg-selected-disabled":Al("bg-selected-disabled"),"bg-selected-stronger-disabled":Al("bg-selected-stronger-disabled"),"bg-success":Al("bg-success"),"bg-success-hover":Al("bg-success-hover"),"bg-success-strong":Al("bg-success-strong"),"bg-success-strong-hover":Al("bg-success-strong-hover"),"bg-warning":Al("bg-warning"),"bg-warning-hover":Al("bg-warning-hover"),"bg-warning-strong":Al("bg-warning-strong"),"bg-warning-strong-hover":Al("bg-warning-strong-hover"),"bg-info":Al("bg-info"),"bg-info-hover":Al("bg-info-hover"),"bg-info-strong":Al("bg-info-strong"),"bg-info-strong-hover":Al("bg-info-strong-hover"),"bg-error":Al("bg-error"),"bg-error-hover":Al("bg-error-hover"),"bg-error-strong":Al("bg-error-strong"),"bg-error-strong-hover":Al("bg-error-strong-hover"),"bg-inverse":Al("bg-inverse"),"bg-inverse-subtle":Al("bg-inverse-subtle"),"bg-inverse-subtler":Al("bg-inverse-subtler"),"bg-inverse-subtlest":Al("bg-inverse-subtlest"),"bg-inverse-hover":Al("bg-inverse-hover"),"bg-primary":Al("bg-primary"),"bg-primary-subtle":Al("bg-primary-subtle"),"bg-primary-subtler":Al("bg-primary-subtler"),"bg-primary-subtlest":Al("bg-primary-subtlest"),"bg-available":Al("bg-available"),"bg-primary-hover":Al("bg-primary-hover"),"bg-primary-subtlest-hover":Al("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Al("bg-primary-subtlest-selected"),"overlay-strong":Al("overlay-strong"),"overlay-subtle":Al("overlay-subtle"),hyperlink:Al("hyperlink"),"hyperlink-hover":Al("hyperlink-hover"),"hyperlink-visited":Al("hyperlink-visited"),"hyperlink-inverse":Al("hyperlink-inverse"),"focus-ring":Al("focus-ring"),"focus-ring-inverse":Al("focus-ring-inverse")},Il={collections:{lifesg:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>t=>{var r,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:Pl["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:Bl.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"lifesg"},zl=e=>t=>{var r;const n=t.theme,i=kl(Il,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Sl(i,e,n.overrides.border)}px`:`${i[e]}px`},Rl=e=>1===e.length&&"theme"in e[0],Pl={"width-005":zl("width-005"),"width-010":zl("width-010"),"width-020":zl("width-020"),"width-040":zl("width-040"),solid:(Ll="solid",e=>{var t;const r=e.theme,n=kl(Il,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Sl(n,Ll,r.overrides.border):n[Ll];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...t)=>r=>{var n;const i=Rl(t)?[]:t,o=Rl(t)?t[0]:r,a=o.theme,s=kl(Il,null==a?void 0:a.borderScheme);return((null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.border)?Sl(s,e,a.overrides.border):s[e])(...i)(o)})("dashed-default")};var Ll;const Nl={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Wl=e=>t=>{var r;const n=t.theme,i=kl(Nl,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Sl(i,e,n.overrides.breakpoint):i[e],o},Hl={"xxs-min":Wl("xxs-min"),"xxs-max":Wl("xxs-max"),"xs-min":Wl("xs-min"),"xs-max":Wl("xs-max"),"sm-min":Wl("sm-min"),"sm-max":Wl("sm-max"),"md-min":Wl("md-min"),"md-max":Wl("md-max"),"lg-min":Wl("lg-min"),"lg-max":Wl("lg-max"),"xl-min":Wl("xl-min"),"xl-max":Wl("xl-max"),"xxl-min":Wl("xxl-min"),"xxs-column":Wl("xxs-column"),"xs-column":Wl("xs-column"),"sm-column":Wl("sm-column"),"md-column":Wl("md-column"),"lg-column":Wl("lg-column"),"xl-column":Wl("xl-column"),"xxl-column":Wl("xxl-column"),"xxs-gutter":Wl("xxs-gutter"),"xs-gutter":Wl("xs-gutter"),"sm-gutter":Wl("sm-gutter"),"md-gutter":Wl("md-gutter"),"lg-gutter":Wl("lg-gutter"),"xl-gutter":Wl("xl-gutter"),"xxl-gutter":Wl("xxl-gutter"),"xxs-margin":Wl("xxs-margin"),"xs-margin":Wl("xs-margin"),"sm-margin":Wl("sm-margin"),"md-margin":Wl("md-margin"),"lg-margin":Wl("lg-margin"),"xl-margin":Wl("xl-margin"),"xxl-margin":Wl("xxl-margin")},Yl=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Hl["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Vl={MaxWidth:Yl("max-width"),MinWidth:Yl("min-width")},Ul={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Xl={collections:{lifesg:Ul,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Ul,mylegacy:Ul,ccube:Ul,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"}},defaultValue:"lifesg"},Kl=e=>t=>{var r;const n=t.theme,i=kl(Xl,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Sl(i,e,n.overrides.fontSpec):i[e]},ql={"header-size-xxl":Kl("header-size-xxl"),"header-size-xl":Kl("header-size-xl"),"header-size-lg":Kl("header-size-lg"),"header-size-md":Kl("header-size-md"),"header-size-sm":Kl("header-size-sm"),"header-size-xs":Kl("header-size-xs"),"header-lh-xxl":Kl("header-lh-xxl"),"header-lh-xl":Kl("header-lh-xl"),"header-lh-lg":Kl("header-lh-lg"),"header-lh-md":Kl("header-lh-md"),"header-lh-sm":Kl("header-lh-sm"),"header-lh-xs":Kl("header-lh-xs"),"header-ls-xxl":Kl("header-ls-xxl"),"header-ls-xl":Kl("header-ls-xl"),"header-ls-lg":Kl("header-ls-lg"),"header-ls-md":Kl("header-ls-md"),"header-ls-sm":Kl("header-ls-sm"),"header-ls-xs":Kl("header-ls-xs"),"weight-light":Kl("weight-light"),"weight-regular":Kl("weight-regular"),"weight-semibold":Kl("weight-semibold"),"weight-bold":Kl("weight-bold"),"font-family":Kl("font-family"),"body-size-baseline":Kl("body-size-baseline"),"body-size-md":Kl("body-size-md"),"body-size-sm":Kl("body-size-sm"),"body-size-xs":Kl("body-size-xs"),"body-lh-baseline":Kl("body-lh-baseline"),"body-lh-md":Kl("body-lh-md"),"body-lh-sm":Kl("body-lh-sm"),"body-lh-xs":Kl("body-lh-xs"),"body-ls-baseline":Kl("body-ls-baseline"),"body-ls-md":Kl("body-ls-md"),"body-ls-sm":Kl("body-ls-sm"),"body-ls-xs":Kl("body-ls-xs"),"formlabel-size-baseline":Kl("formlabel-size-baseline"),"formlabel-size-lg":Kl("formlabel-size-lg"),"formlabel-lh-baseline":Kl("formlabel-lh-baseline"),"formlabel-lh-lg":Kl("formlabel-lh-lg"),"formlabel-ls-baseline":Kl("formlabel-ls-baseline"),"formlabel-ls-lg":Kl("formlabel-ls-lg")},Gl={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Zl=e=>t=>{var r;const n=t.theme,i=kl(Gl,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Sl(i,e,n.overrides.radius)}px`:`${i[e]}px`},Ql={none:Zl("none"),xs:Zl("xs"),sm:Zl("sm"),md:Zl("md"),lg:Zl("lg"),full:Zl("full")},Jl={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},ec=e=>t=>{var r;const n=t.theme,i=kl(Jl,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Sl(i,e,n.overrides.spacing)}px`:`${i[e]}px`},tc={"spacing-0":ec("spacing-0"),"spacing-4":ec("spacing-4"),"spacing-8":ec("spacing-8"),"spacing-12":ec("spacing-12"),"spacing-16":ec("spacing-16"),"spacing-20":ec("spacing-20"),"spacing-24":ec("spacing-24"),"spacing-32":ec("spacing-32"),"spacing-40":ec("spacing-40"),"spacing-48":ec("spacing-48"),"spacing-64":ec("spacing-64"),"spacing-72":ec("spacing-72"),"layout-xs":ec("layout-xs"),"layout-sm":ec("layout-sm"),"layout-md":ec("layout-md"),"layout-lg":ec("layout-lg"),"layout-xl":ec("layout-xl"),"layout-xxl":ec("layout-xxl"),"layout-xxxl":ec("layout-xxxl")},rc=(e,t,r,n)=>F`
    font-family: ${Kl("font-family")};
    font-size: ${Kl(e)};
    font-weight: ${Kl(t)};
    line-height: ${Kl(r)};
    letter-spacing: ${Kl(n)};
`,nc={"header-xxl-light":rc("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":rc("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":rc("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":rc("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":rc("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":rc("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":rc("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":rc("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":rc("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":rc("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":rc("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":rc("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":rc("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":rc("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":rc("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":rc("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":rc("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":rc("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":rc("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":rc("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":rc("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":rc("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":rc("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":rc("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":rc("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":rc("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":rc("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":rc("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":rc("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":rc("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":rc("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":rc("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":rc("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":rc("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":rc("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":rc("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":rc("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":rc("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":rc("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":rc("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":rc("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":rc("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},ic={collections:{lifesg:nc,bookingsg:nc,rbs:nc,mylegacy:nc,ccube:nc,pa:nc},defaultValue:"lifesg"},oc=e=>t=>{var r;const n=t.theme,i=kl(ic,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Sl(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},ac={"header-xxl-light":oc("header-xxl-light"),"header-xxl-regular":oc("header-xxl-regular"),"header-xxl-semibold":oc("header-xxl-semibold"),"header-xxl-bold":oc("header-xxl-bold"),"header-xl-light":oc("header-xl-light"),"header-xl-regular":oc("header-xl-regular"),"header-xl-semibold":oc("header-xl-semibold"),"header-xl-bold":oc("header-xl-bold"),"header-lg-light":oc("header-lg-light"),"header-lg-regular":oc("header-lg-regular"),"header-lg-semibold":oc("header-lg-semibold"),"header-lg-bold":oc("header-lg-bold"),"header-md-light":oc("header-md-light"),"header-md-regular":oc("header-md-regular"),"header-md-semibold":oc("header-md-semibold"),"header-md-bold":oc("header-md-bold"),"header-sm-light":oc("header-sm-light"),"header-sm-regular":oc("header-sm-regular"),"header-sm-semibold":oc("header-sm-semibold"),"header-sm-bold":oc("header-sm-bold"),"header-xs-light":oc("header-xs-light"),"header-xs-regular":oc("header-xs-regular"),"header-xs-semibold":oc("header-xs-semibold"),"header-xs-bold":oc("header-xs-bold"),"body-baseline-light":oc("body-baseline-light"),"body-baseline-regular":oc("body-baseline-regular"),"body-baseline-semibold":oc("body-baseline-semibold"),"body-baseline-bold":oc("body-baseline-bold"),"body-md-light":oc("body-md-light"),"body-md-regular":oc("body-md-regular"),"body-md-semibold":oc("body-md-semibold"),"body-md-bold":oc("body-md-bold"),"body-sm-light":oc("body-sm-light"),"body-sm-regular":oc("body-sm-regular"),"body-sm-semibold":oc("body-sm-semibold"),"body-sm-bold":oc("body-sm-bold"),"body-xs-light":oc("body-xs-light"),"body-xs-regular":oc("body-xs-regular"),"body-xs-semibold":oc("body-xs-semibold"),"body-xs-bold":oc("body-xs-bold"),"formlabel-baseline-semibold":oc("formlabel-baseline-semibold"),"formlabel-lg-semibold":oc("formlabel-lg-semibold")},sc=Object.assign(Object.assign({},Bl),{Primitive:Tl}),lc=Object.assign(Object.assign({},ac),{Spec:ql}),cc=jl,dc=Pl,uc=tc,hc=Ql,gc=Hl,pc=Vl,fc={colourScheme:"lifesg",fontScheme:"lifesg",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},mc={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},bc={colourScheme:"ccube",fontScheme:"ccube",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},vc={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},yc={colourScheme:"rbs",fontScheme:"rbs",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},xc={colourScheme:"pa",fontScheme:"pa",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"pa"},$c=T.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${uc["spacing-24"]};
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
                background-color: ${sc["bg-hover-neutral"]};
            `}
    }
`,wc=i.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=dt(t,["children","focusHighlight","focusOutline","type"]);return e($c,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),Cc=(e,t,r=!1)=>{const n=`${e}-${t.toLowerCase()}`;return F`
        ${lc[n]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Sc=(e,t)=>F`
    ${Cc(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1)=>t?F`
            display: block;
        `:e?F`
            display: inline;
        `:F`
            display: block;
        `)(t.inline,t.paragraph)}
    color: ${sc.text};
`;var kc;!function(r){const n=(e,t,r)=>{const n=T(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Sc(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeaderXXL=n("h1","header-xxl","HeaderXXL"),r.HeaderXL=n("h2","header-xl","HeaderXL"),r.HeaderLG=n("h3","header-lg","HeaderLG"),r.HeaderMD=n("h4","header-md","HeaderMD"),r.HeaderSM=n("h5","header-sm","HeaderSM"),r.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,t)=>{const r=T.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Sc(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const o=(r,n)=>{const i=T.a`
            ${e=>F`
                ${Cc(r,e.weight||"regular")}
                color: ${sc.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${sc["text-hover"]};
                }
            `}
        `,o=r=>{var{external:n=!1,children:o}=r,a=dt(r,["external","children"]);return t(i,Object.assign({},a,{children:[o,n&&e(Oc,{})]}))};return o.displayName=`Typography.${n}`,o};r.LinkBL=o("body-baseline","LinkBL"),r.LinkMD=o("body-md","LinkMD"),r.LinkSM=o("body-sm","LinkSM"),r.LinkXS=o("body-xs","LinkXS")}(kc||(kc={}));const Oc=T(B)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Dc=T.div`
    background-color: ${sc.bg} !important;
    border-top: ${dc["width-010"]} ${dc.solid} ${sc.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${pc.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,jc=T.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Ec=e=>F`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${cc["duration-250"]} ${cc["ease-standard"]};
`,_c=T(kc.HeaderSM)`
    ${e=>Ec(e.$isCollapsed)}
`,Tc=T(kc.HeaderXS)`
    ${e=>Ec(e.$isCollapsed)}
`,Fc=T(wc)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${cc["duration-250"]} ${cc["ease-default"]};
    margin: auto -1rem auto 0;
`,Mc=T(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${sc["icon-primary"]};
`,Ac=T(Yo.div)`
    overflow: hidden;
`,Bc=T.div`
    display: inline-block;
    padding-right: 4rem;

    ${pc.MaxWidth.lg} {
        padding-right: 0;
    }
`;const Ic=g((function(r,n){var{title:i,children:s,expanded:l,type:c="default",collapsible:d=!0}=r,h=dt(r,["title","children","expanded","type","collapsible"]);const g=o(),p=f(ct),[m,v]=a(!d||(null!=l?l:p)),[y,x]=a(!1),$=h["data-testid"]||"accordion-item",w=cr(),C=w.ref;b(n,(()=>Object.assign(g.current,{expand(){v(!0)},collapse(){v(!1)},isExpanded:()=>m})),[m]),u((()=>{y&&v(!d||p)}),[p]),u((()=>{y&&v(l)}),[l]),u((()=>{x(!0)}),[]);const S={height:m?w.height:0},k=Oo(S);return t(Dc,Object.assign({"data-testid":$,className:h.className,$isCollapsed:m,ref:g},{children:[t(jc,Object.assign({$isCollapsed:d,onClick:d?e=>{e.preventDefault(),v((e=>!e))}:void 0},{children:["string"!=typeof i?i:e("small"===c?Tc:_c,Object.assign({weight:"bold","data-testid":`${$}-title`,$isCollapsed:m},{children:i})),d&&e(Fc,Object.assign({"data-testid":`${$}-expand-collapse-button`,$isCollapsed:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand"},{children:e(Mc,{})}))]})),e(Ac,Object.assign({style:y?k:S,$isCollapsed:m,"data-testid":`${$}-expandable-container`},{children:e(Bc,Object.assign({ref:C,id:"content-container"},{children:s}))}))]}))})),zc=T.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Rc=M`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Pc=T.div`
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
    animation: ${Rc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Lc=T(Pc)`
    animation-delay: -0.45s;
`,Nc=T(Pc)`
    animation-delay: -0.3s;
`,Wc=T(Pc)`
    animation-delay: -0.15s;
`,Hc=({color:r,className:n,size:i})=>t(zc,Object.assign({className:n,$size:i,$color:r},{children:[e(Pc,{id:"inner1"}),e(Lc,{id:"inner2"}),e(Nc,{id:"inner3"}),e(Wc,{id:"inner4"})]})),Yc=T.button`
    padding: ${uc["spacing-8"]} ${uc["spacing-16"]};
    min-width: 4rem;
    border: ${dc["width-010"]} ${dc.solid} transparent;
    border-radius: ${hc.sm};
    transition: all ${cc["duration-250"]} ${cc["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${sc.Primitive.white};
                    border-color: ${e.$buttonIsDanger?sc["border-error-strong"]:sc["border-primary"]};

                    color: ${e.$buttonIsDanger?sc["text-error"]:sc["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${sc["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${sc.bg};
                    border-color: ${sc.border};

                    color: ${e.$buttonIsDanger?sc["text-error"]:sc["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${sc["bg-hover-neutral"]};
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?sc["text-error"]:sc["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${sc["bg-hover-neutral"]};
                    }
                `;case"disabled":return F`
                    background-color: ${sc["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${sc["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?sc["bg-error-strong"]:sc["bg-primary"]};

                    ${pc.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${sc["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?sc["bg-error-strong-hover"]:sc["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${lc["body-md-semibold"]}

                    ${pc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${lc["header-md-semibold"]}

                    ${pc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${lc["header-xs-semibold"]}

                    ${pc.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Vc=T(Hc)`
    margin-right: 0.5rem;
`,Uc=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=dt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Yc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Vc,{}),e("span",{children:i})]}))};Uc.displayName="Button.Default";const Xc=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=dt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Yc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Vc,{}),e("span",{children:i})]}))};Xc.displayName="Button.Small";const Kc=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=dt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(Yc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Vc,{}),e("span",{children:i})]}))};Kc.displayName="Button.Large";const qc={Default:i.forwardRef(Uc),Small:i.forwardRef(Xc),Large:i.forwardRef(Kc)},Gc=T.div`
    width: 100%;
    border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};
`,Zc=T.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${pc.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return F`
                ${pc.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,Qc=T(kc.HeaderMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${pc.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return F`
                ${pc.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,Jc=T(qc.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,ed=Object.assign((({children:r,title:n,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:s=!1,className:l})=>{const[c,d]=a("expand-all"===o),u=e=>{e.preventDefault(),d((e=>!e))};return e(ct.Provider,Object.assign({value:c},{children:t(Gc,Object.assign({className:l},{children:[n||i?t(Zc,Object.assign({$showTitleInMobile:s,$hasExpandAll:i},{children:[n&&e(Qc,Object.assign({weight:"bold",$showInMobile:s,"data-testid":"accordion-title"},{children:n})),i&&e(Jc,Object.assign({"data-testid":"accordion-expand-collapse-button",onClick:u,styleType:"link",type:"button"},{children:c?"Hide all":"Show all"}))]})):null,r]}))}))}),{Item:Ic}),td=e=>{const{textSize:t}=e||{};return F`
        // Text styling
        ${t&&lc[`${t}-regular`]}

        strong {
            font-weight: ${lc.Spec["weight-semibold"]};
            ${t&&lc[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${lc.Spec["weight-semibold"]};
            ${t&&lc[`${t}-semibold`]}
            color: ${sc.hyperlink};
            text-decoration: none;

            svg {
                color: ${sc["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${sc["hyperlink-hover"]};

                svg {
                    color: ${sc["icon-hover"]};
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
    `},rd=T.div`
    padding: ${uc[8]} ${uc["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=sc["bg-error"](e),r=sc["border-error"](e);break;case"success":t=sc["bg-success"](e),r=sc["border-success"](e);break;case"warning":default:t=sc["bg-warning"](e),r=sc["border-warning"](e);break;case"info":t=sc["bg-info"](e),r=sc["border-info"](e);break;case"description":t=sc["bg-strong"](e),r=sc["border-strong"](e)}return F`
            background: ${t};
            border-left: ${dc["width-020"]} ${dc.solid}
                ${r};
        `}}

    color: ${sc.text};
    ${e=>"small"===e.$sizeType?td({textSize:"body-sm"}):td({textSize:"body-md"})}
`,nd=T.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${uc["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=sc["icon-error"](e);break;case"success":t=sc["icon-success"](e);break;case"warning":default:t=sc["icon-warning"](e);break;case"info":t=sc["icon-info"](e);break;case"description":t=sc["icon-subtle"](e)}return F`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,id=T(kc.LinkSM)`
    ${e=>"small"===e.$sizeType?F`
                ${lc["body-sm-semibold"]}
                margin-top: ${uc["spacing-4"]};
            `:F`
                ${lc["body-md-semibold"]}
                margin-top: ${uc["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${uc["spacing-4"]};
    }
`,od=T.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,ad=T.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return F`
                margin-bottom: ${uc["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,sd=T.button`
    ${e=>"small"===e.$sizeType?F`
                ${lc["body-sm-semibold"]}
            `:F`
                ${lc["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${uc["spacing-4"]};
    margin-top: ${uc["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${sc["text-primary"]};
`,ld=T(N)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${cc["duration-350"]} ${cc["ease-standard"]};
`,cd=r=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:g}=r,p=dt(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,m]=a(!1),[b,v]=a(!1),{height:y,ref:x}=cr();u((()=>{$()}),[g,y]);const $=()=>{m(!g),v(w())},w=()=>!!g&&y>g;return t(rd,Object.assign({className:i,$type:n,$sizeType:c,"data-testid":p["data-testid"]},{children:[d&&e(nd,Object.assign({$sizeType:c,$type:n},{children:(()=>{if(n&&h)return h;switch(n){case"success":return e(L,{});case"warning":return e(R,{});case"error":return e(z,{});case"info":case"description":return e(P,{});default:return null}})()})),t(od,{children:[t(ad,Object.assign({$maxCollapsedHeight:w()?g:void 0,$showMore:f,$hasActionLink:!!s},{children:[e("div",Object.assign({ref:x},{children:o})),s&&t(id,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},s,{children:[s.children,l||e(I,{})]}))]})),b&&t(sd,Object.assign({$sizeType:c,$type:n,type:"button",onClick:()=>m(!f)},{children:["Show ",f?"less":"more",e(ld,{$expanded:f})]}))]})]}))},dd=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.eaa6acaf.js")).LottieSpinner}})))),ud=t=>e(gd,Object.assign({},t,{children:e(y,Object.assign({fallback:e(hd,{})},{children:e(dd,{})}))})),hd=()=>e("div",{style:{height:"200px",width:"200px"}}),gd=T.div`
    margin: 0 auto;
    padding: ${uc["spacing-32"]} ${uc["spacing-16"]};
`,pd=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.f6a05e20.js")).LottieLoadingDots}})))),fd=t=>e(bd,Object.assign({},t,{children:e(y,Object.assign({fallback:e(md,{})},{children:e(pd,{})}))})),md=()=>e("div",{style:{height:"16px",width:"64px"}}),bd=T.div`
    margin: 0 auto;
`,vd=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.a72ffd58.js")).LottieLoadingDotsSpinner}})))),yd=t=>{var{color:r}=t,n=dt(t,["color"]);const i=A(),o=r||sc["icon-primary"]({theme:i});return e($d,Object.assign({},n,{children:e(y,Object.assign({fallback:e(xd,{})},{children:e(vd,{color:o})}))}))},xd=()=>e("div",{style:{height:"200px",width:"200px"}}),$d=T.div`
    margin: 0 auto;
`;var wd,Cd={exports:{}};wd=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(a(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,r,null,i)}catch(e){d=e}if(!d||d instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in o)){o[d.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+d.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:f(c),arrayOf:function(e){return f((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:f((function(t,r,n,i,o){var a=t[r];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:f((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+n+" `"+o+"` of type `"+y(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:f((function(e,t,r,n,i){return v(e[t])?null:new p("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=y(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,i,o+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?f((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(g(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(r)+" at index "+t+"."),c}return f((function(t,r,n,i,o){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,i,o,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return f((function(t,r,n,i,o){var s=t[r],l=y(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(n,i,o,c,x(d));var u=d(s,c,n,i,o+"."+c,a);if(u)return u}return null}))},exact:function(e){return f((function(t,r,n,i,l){var c=t[r],d=y(c);if("object"!==d)return new p("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=o({},t[r],e);for(var h in u){var g=e[h];if(s(e,h)&&"function"!=typeof g)return b(n,i,l,h,x(g));if(!g)return new p("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=g(c,h,n,i,l+"."+h,a);if(f)return f}return null}))}};function g(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function f(e){var r={},i=0;function o(o,s,l,c,d,h,g){if(c=c||u,h=h||l,g!==a){if(t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function m(e){return f((function(t,r,n,i,o,a){var s=t[r];return y(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[d]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var g=e.type;switch(g){case c:case d:case i:case a:case o:case h:return g;default:var m=g&&g.$$typeof;switch(m){case l:case u:case f:case p:case s:return m;default:return t}}case n:return t}}}var $=c,w=d,C=l,S=s,k=r,O=u,D=i,j=f,E=p,_=n,T=a,F=o,M=h,A=!1;function B(e){return x(e)===d}t.AsyncMode=$,t.ConcurrentMode=w,t.ContextConsumer=C,t.ContextProvider=S,t.Element=k,t.ForwardRef=O,t.Fragment=D,t.Lazy=j,t.Memo=E,t.Portal=_,t.Profiler=T,t.StrictMode=F,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===c},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===f},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},d=i(c,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},d),h=n(n({},l),u);t.default={all:h,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(c.default),r=function(){return d(e)||d(t)},n=(0,i.useState)(r),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),g=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=u();return(0,i.useEffect)((function(){p&&r&&r(g)}),[g]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),g}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Sd=Cd.exports=wd(i);const kd=T.div`
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};
    margin-bottom: ${uc["spacing-32"]};
`,Od=T(Yo.div)`
    overflow: hidden;
`,Dd=T.div`
    height: max-content;
`,jd=T.div`
    border-top: ${dc["width-010"]} ${dc.solid} ${sc.border};
`,Ed=T.div`
    padding: ${uc["spacing-16"]} ${uc["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${pc.MaxWidth.sm} {
        padding: ${uc["spacing-16"]} ${uc["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return F`
                cursor: pointer;
            `}}
`,_d=T.div`
    ${lc["header-sm-semibold"]}
    color: ${sc.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${uc["spacing-16"]};
`,Td=T.div`
    display: flex;
`,Fd=T.span`
    display: flex;
    align-items: center;
    margin-right: ${uc["spacing-40"]};

    ${pc.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return F`
                    color: ${sc["icon-error"]};
                `;case"warning":return F`
                    color: ${sc["icon-warning"]};
                `}}}
`,Md=T(z)`
    height: ${lc.Spec["header-size-sm"]};
    width: ${lc.Spec["header-size-sm"]};
`,Ad=T.div`
    display: flex;
    margin-left: auto;
    ${pc.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return F`
                margin-right: ${uc["spacing-40"]};
                ${pc.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${uc["spacing-16"]};
                }
            `}}
`,Bd=T.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${uc["spacing-16"]};
    margin: -${uc["spacing-16"]};
    display: flex;
    align-items: center;

    ${pc.MaxWidth.sm} {
        margin: -${uc["spacing-16"]} -${uc["spacing-16"]} -${uc["spacing-16"]} 0;
        margin-left: auto;
    }
`,Id=T.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${cc["duration-250"]} ${cc["ease-default"]};
`,zd=T(fe)`
    color: ${sc.icon};
    height: ${lc.Spec["header-size-sm"]};
    width: ${lc.Spec["header-size-sm"]};
`,Rd=r=>{var{children:n,title:i,collapsible:o=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=r,h=dt(r,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[g,p]=a(!o||s),f=cr(),m=f.ref,b=A(),v=gc["sm-max"]({theme:b}),y=Sd.useMediaQuery({maxWidth:v}),x=e=>{e.stopPropagation(),p(!g)},$=Oo({height:g?f.height:0}),w=()=>o&&e(Bd,Object.assign({onClick:x,type:"button","aria-label":g?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle"},{children:e(Id,Object.assign({$expanded:g},{children:e(zd,{"aria-hidden":!0})}))}));return t(kd,Object.assign({},h,{children:[t(Ed,Object.assign({"data-testid":"header",onClick:u&&o&&x,$interactive:u&&o},{children:[t(Td,{children:[e(_d,Object.assign({"data-testid":(null==d?void 0:d.title)||"title"},{children:i})),(()=>{switch(c){case"error":case"warning":return e(Fd,Object.assign({$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`},{children:e(Md,{})}));default:return null}})(),y&&w()]}),l&&e(Ad,Object.assign({$collapsible:o,"data-testid":"call-to-action-container"},{children:l})),!y&&w()]})),o?e(Od,Object.assign({style:$,"data-testid":"expandable-container"},{children:e(jd,Object.assign({ref:m},{children:n}))})):e(Dd,Object.assign({"data-testid":"non-expandable-container"},{children:e(jd,{children:n})}))]}))};var Pd={exports:{}};Pd.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",g="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var $="$isDayjsObject",w=function(e){return e instanceof O||!(!e||!e[$])},C=function e(t,r,n){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(y=i),i||!n&&y},S=function(e,t){if(w(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new O(r)},k=v;k.l=C,k.i=w,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return k.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!k.u(t)||t,d=k.p(e),g=function(e,t){var i=k.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return k.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?g(1,0):g(31,11);case c:return n?g(1,m):g(0,m+1);case l:var y=this.$locale().weekStart||0,x=(f<y?f+7:f)-y;return g(n?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=k.p(e),d="set"+(this.$u?"UTC":""),g=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[o]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var f=this.clone().set(h,1);f.$d[g](p),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(n,d){var h,g=this;n=Number(n);var p=k.p(d),f=function(e){var t=S(g);return k.w(t.date(t.date()+Math.round(e*n)),g)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return f(1);if(p===l)return f(7);var m=(h={},h[o]=t,h[a]=r,h[i]=e,h)[p]||1,b=this.$d.getTime()+n*m;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},h=function(e){return k.s(o%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return k.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var p,f=this,m=k.p(h),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return k.m(f,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case o:p=y/t;break;case i:p=y/e;break;default:p=y}return g?p:k.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),D=O.prototype;return S.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=C,S.isDayjs=w,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Ld=Uo(Pd.exports),Nd={exports:{}};Nd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],g=d&&d[1];a[l]=g?{regex:h,parser:g}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,g=new Date,p=a||(i||o?1:g.getDate()),f=i||g.getFullYear(),m=0;i&&!o||(m=o>0?o-1:g.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(f,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(f,m,p,b,v,y,x)):new Date(f,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var g=s.length,p=1;p<=g;p+=1){a[1]=s[p-1];var f=r.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}p===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Wd=Uo(Nd.exports),Hd={exports:{}};Hd.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Yd=Uo(Hd.exports),Vd={exports:{}};Vd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ud=Uo(Vd.exports),Xd={exports:{}};Xd.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Kd,qd,Gd=Uo(Xd.exports),Zd={exports:{}};Zd.exports=(Kd={year:0,month:1,day:2,hour:3,minute:4,second:5},qd={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=qd[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),qd[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=Kd[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(g).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Qd,Jd=Uo(Zd.exports);Ld.extend(Yd),Ld.extend(Gd),Ld.extend(Ud),Ld.extend(Wd),Ld.extend(Jd),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Ld(t).startOf("week");return eu(r).map((e=>tu(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return tu(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Ld(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ld(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ld(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?Ld(n):void 0,i?Ld(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Qd||(Qd={}));const eu=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},tu=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},ru=[1,3,5,7,8,10,12],nu=[4,6,9,11];var iu,ou,au,su;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":ru.includes(o)?Math.min(i,31).toString():nu.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Ld(e,r);return Ld(t,r).diff(n,"minute")},e.toDayjs=e=>e?Ld(e):Ld(),e.addMinutesToTime=(e,t,r="HH:mm")=>Ld(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Ld(e).isSame(Ld(t),r)}(iu||(iu={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Ld(e).isBefore(n,"day"))||!(!i||!Ld(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Ld(e).isValid())return e}return""}}(ou||(ou={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(au||(au={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(su||(su={}));function lu(e){const t=o(null);return h((()=>{t.current=e}),[e]),p(((...e)=>t.current(...e)),[])}const cu=(e,t,r="window",n)=>{const i=o();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])},du="undefined"!=typeof window?h:u,uu=()=>{const[e,t]=a(!1);return u((()=>{t(!0)}),[]),e};function hu({ref:e,formatter:t}){return()=>{const r=e.current,n=r.value,i=t(n),o=n.substring(0,r.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,r.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{r.value=i,r.setSelectionRange(l,l)}}}}const gu=e=>{const t=(e=>{const t=o(e),r=o();return u((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},pu=e=>{const[t,r]=a(e),n=o(e);return[t,p((e=>{n.current=e,r(e)}),[]),n]},fu=T.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${uc["spacing-32"]} 0;

    ${pc.MaxWidth.xl} {
        margin: ${uc["spacing-24"]} 0;
    }

    ${pc.MaxWidth.lg} {
        margin: ${uc["spacing-16"]} 0;
    }
`,mu=T.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${uc["spacing-8"]};
    font-size: ${lc.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${pc.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,bu=T.div`
    width: ${uc["spacing-64"]};
    height: calc(1lh + ${uc["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,F`
            ${pc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,vu=T.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,yu=T(me)`
    margin: ${uc["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${sc["icon-subtle"]};
`,xu=T(kc.BodyMD)`
    margin: ${uc["spacing-8"]} !important;
`,$u=T(kc.LinkMD)`
    margin: ${uc["spacing-8"]} !important;
`,wu=n=>{var{links:i,fadeColor:s,fadePosition:l="both",itemStyle:c,id:d}=n,u=dt(n,["links","fadeColor","fadePosition","itemStyle","id"]);const[h,g]=a(!1),[p,f]=a(!1),[m,b]=a(!1),v="left"===l||"both"===l,y="right"===l||"both"===l,x=o(null),$=o(null),w=A(),C=gc["lg-max"]({theme:w}),S=lu((()=>{const e=$.current,t=x.current;e&&t&&i&&i.length>1&&window.innerWidth<=C&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),k=lu((()=>{const e=window.innerWidth<=C;g(e);const t=$.current,r=x.current;if(t&&r&&e&&t.scrollWidth>r.offsetWidth)return f(t.scrollLeft>=1),void b(t.scrollWidth-t.scrollLeft-1>r.offsetWidth);f(!1),b(!1)}));if(cu("resize",k),cu("scroll",k,$.current),du((()=>{S(),k()}),[S,k]),cr({onResize:S,targetRef:x,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!i)return null;return t(fu,Object.assign({ref:x,id:d||"breadcrumb"},u,{children:[e("nav",{children:e(mu,Object.assign({ref:$},{children:i.map(((r,n)=>{let o;return r.children?(o=n!==i.length-1&&r.href?e($u,Object.assign({},r,{weight:"semibold"})):e(xu,Object.assign({weight:"semibold"},{children:r.children})),t(vu,Object.assign({$styleProps:c},{children:[o,n<i.length-1&&e(yu,{})]}),n)):null}))}))}),h&&(()=>{let n;return n=Array.isArray(s)&&s.length>0?{left:s,right:s}:s||{left:void 0,right:void 0},t(r,{children:[p&&v&&e(bu,{$backgroundColor:n.left,$position:"left"}),m&&y&&e(bu,{$backgroundColor:n.right,$position:"right"})]})})()]}))},Cu=T(Yc)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Su=(r,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=r,d=dt(r,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return t(Cu,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:o},u,d,{children:[l,e("span",{children:i})]}))};Su.displayName="ButtonWithIcon.Default";const ku=(r,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=r,d=dt(r,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return t(Cu,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:o},u,d,{children:[l,e("span",{children:i})]}))};ku.displayName="ButtonWithIcon.Small";const Ou={Default:i.forwardRef(Su),Small:i.forwardRef(ku)},Du=T.div`
    --vertical-inset: ${uc["spacing-24"]};
    --horizontal-inset: ${uc["spacing-20"]};
    --header-bottom-spacing: ${uc["spacing-4"]};

    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${pc.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,ju=F`
    color: ${sc.icon};
    height: 1rem;
    width: 1rem;
`,Eu=T(be)`
    ${ju}
`,_u=T(me)`
    ${ju}
`,Tu=T(fe)`
    ${ju}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Fu=T.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Mu=T.div`
    display: flex;
    flex: 1;
    position: relative;
`,Au=T.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Bu=T.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${sc.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return F`
                display: none;
            `}}
`,Iu=T.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,zu=T.div`
    display: flex;
`,Ru=T.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?F`
                display: none;
            `:e.$expanded?F`
                ${Tu} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Pu=T.span`
    ${lc["body-md-regular"]}
    color: ${sc.text};
`,Lu=T.div`
    display: flex;
`,Nu=T(wc)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Wu=T.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Hu=T(qc.Small)`
    flex: 1;
`,Yu=T.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Vu=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${hc.md};
    margin: 0 0.5rem;
    transition: ${cc["duration-150"]} ${cc["ease-default"]};

    // default styles
    ${lc["body-md-regular"]}
    border-radius: ${hc.md};
    border: ${dc["width-010"]} ${dc.solid} transparent;
    background-clip: border-box;
    color: ${sc.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?F`
                cursor: pointer;
            `:e.$disabledDisplay?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?F`
                background: ${sc["bg-selected"]};
                border-color: ${sc["border-selected"]};
                color: ${sc["text-selected"]};
                font-weight: ${lc.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${sc["bg-selected-hover"]};
                        border-color: ${sc["border-selected-hover"]};
                        color: ${sc["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?F`
                color: ${sc["text-primary"]};
                font-weight: ${lc.Spec["weight-semibold"]};
            `:r?F`
                color: ${sc["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?F`
                &:hover {
                    background: ${sc["bg-selected-hover"]};
                    border-color: ${sc["border-selected-hover"]};
                    color: ${sc["text-selected-hover"]};
                    font-weight: ${lc.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${sc["bg-hover"]};
                color: ${sc["text-hover"]};
                font-weight: ${lc.Spec["weight-semibold"]};
            }
        `}}
`,Uu=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,isNewSelection:a,minDate:s,maxDate:l,allowDisabledSelection:c,onMonthSelect:d})=>{const u=m((()=>Qd.generateMonths(Ld(t))),[t]),h=e=>{const t="start"===r&&i&&e.isAfter(i,"month")&&a,o="end"===r&&n&&e.isBefore(n,"month")&&a;return t||o},g=e=>{const t=e.format("MMMM"),r=(n=e,!Qd.isWithinRange(n,s?Ld(s):void 0,l?Ld(l):void 0,"month"));var n;const i=o.isSame(e,"month")?"selected-month":Ld().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||h(e),interactive:!r||c,month:t,variant:i}};return u.length?e(Yu,{children:u.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,month:o}=g(t);return e(Vu,Object.assign({$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||d(e)})(t,!n)},{children:o}),o)}))}):null},Xu=T.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Ku=T.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${cc["duration-150"]} ${cc["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${lc["body-md-regular"]}
    border-radius: ${hc.md};
    border: ${dc["width-010"]} ${dc.solid} transparent;
    background-clip: border-box;
    color: ${sc.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?F`
                cursor: pointer;
            `:t?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?F`
                background: ${sc["bg-selected"]};
                border-color: ${sc["border-selected"]};
                color: ${sc["text-selected"]};
                font-weight: ${lc.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${sc["bg-selected-hover"]};
                        border-color: ${sc["border-selected-hover"]};
                        color: ${sc["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?F`
                color: ${sc["text-primary"]};
                font-weight: ${lc.Spec["weight-semibold"]};
            `:"other-decade"===e||r?F`
                color: ${sc["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?F`
                &:hover {
                    background: ${sc["bg-selected-hover"]};
                    border-color: ${sc["border-selected-hover"]};
                    color: ${sc["text-selected-hover"]};
                    font-weight: ${lc.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${sc["bg-hover"]};
                color: ${sc["text-hover"]};
                font-weight: ${lc.Spec["weight-semibold"]};
            }
        `}}
`,qu=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,isNewSelection:a,minDate:s,maxDate:l,allowDisabledSelection:c,onYearSelect:d})=>{const u=m((()=>Qd.generateDecadeOfYears(Ld(t))),[t]),h=e=>{const t="start"===r&&i&&e.isAfter(i,"year")&&a,o="end"===r&&n&&e.isBefore(n,"year")&&a;return t||o},g=e=>{const t=[0,11].includes(u.indexOf(e)),r=e.year(),n=(i=e,!Qd.isWithinRange(i,s?Ld(s):void 0,l?Ld(l):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":Ld().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||c,year:r,variant:a}};return u.length?e(Xu,{children:u.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,year:o}=g(t);return e(Ku,Object.assign({$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||d(e)})(t,!n)},{children:o}),o)}))}):null},Gu=i.forwardRef(((n,i)=>{var{children:s,initialCalendarDate:l,minDate:c,maxDate:d,currentFocus:h,selectedStartDate:g,selectedEndDate:p,selectWithinRange:f,dynamicHeight:m=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:$,onDismiss:w,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:k,isLeftArrowDisabled:O,isRightArrowDisabled:D,getMonthHeaderLabel:j,getYearHeaderLabel:E}=n,_=dt(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[T,F]=a(iu.toDayjs(l)),[M,A]=a(iu.toDayjs(l)),[B,I]=a("default"),z=o(null),R=o(null),P=o();b(i,(()=>({defaultView(){I("default")},resetView(){const e=iu.toDayjs(l);F(e),A(e),I("default")},setCalendarDate(e){const t=iu.toDayjs(e);F(t),A(t)}}))),u((()=>{const e=iu.toDayjs(l);F(e),A(e)}),[l]),u((()=>{U(M)}),[M]);const L=()=>{"month-options"!==B?(I("month-options"),P.current.focus()):(I("default"),F(M))},N=()=>{"default"!==B?(I("default"),F(M)):I("year-options")},W=()=>{P.current.focus();const e=S?S(T):T.subtract(1,"month");switch(B){case"default":A(e),F(e);break;case"month-options":F((e=>e.subtract(1,"year")));break;case"year-options":F((e=>e.subtract(10,"year")))}},H=()=>{P.current.focus();const e=k?k(T):T.add(1,"month");switch(B){case"default":A(e),F(e);break;case"month-options":F((e=>e.add(1,"year")));break;case"year-options":F((e=>e.add(10,"year")))}},Y=e=>{F(e),A(e),x||I("default")},V=()=>{const e=iu.toDayjs(l);F(e),A(e),"default"===B?X("reset"):I("default")},U=e=>{y&&y(e)},X=e=>{w&&w(e)},K=()=>{if(!c||v)return!1;const e=Ld(c);return"month-options"===B?!Qd.isPreviousYearWithinRange(T,e):"year-options"===B?!Qd.isPreviousDecadeWithinRange(T,e):O?O(T):!Qd.isPreviousMonthWithinRange(T,e)},q=()=>{if(!d||v)return!1;const e=Ld(d);return"month-options"===B?!Qd.isNextYearWithinRange(T,e):"year-options"===B?!Qd.isNextDecadeWithinRange(T,e):D?D(T):!Qd.isNextMonthWithinRange(T,e)},G=()=>{if("year-options"===B){const{beginDecade:e,endDecade:t}=Qd.getStartEndDecade(T);return`${e} to ${t}`}return E?E(T):T.format("YYYY")},Z=()=>{const n=j?j(T):T.format("MMM");return t(r,{children:[t(Ru,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===B,$visible:"default"===B,id:"month-dropdown",onClick:L},{children:[e(Pu,{children:n}),e(Tu,{})]})),t(Ru,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==B,id:"year-dropdown",onClick:N},{children:[e(Pu,{children:G()}),e(Tu,{})]}))]})},Q=()=>{switch(B){case"month-options":return e(Uu,{calendarDate:T,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:g,selectedEndDate:p,viewCalendarDate:M,isNewSelection:f,onMonthSelect:Y,allowDisabledSelection:v});case"year-options":return e(qu,{calendarDate:T,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:g,selectedEndDate:p,viewCalendarDate:M,isNewSelection:f,onYearSelect:Y,allowDisabledSelection:v});default:return null}};return t(Fu,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container"},_,{children:[C&&t(Iu,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[e(zu,{children:Z()}),t(Lu,{children:[e(Nu,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:W},{children:e(Eu,{})})),e(Nu,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:H},{children:e(_u,{})}))]})]})),e(Mu,{children:(()=>{const n="function"==typeof s?s({calendarDate:M,currentView:B}):s;return t(r,m?{children:["default"===B&&n,Q()]}:{children:[e(Au,{children:n}),e(Bu,Object.assign({$visible:"default"!==B},{children:Q()}))]})})()}),(()=>{if(!x)return;const r=!!("default"===B)&&$;return t(Wu,{children:[e(Hu,Object.assign({ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:V},{children:"Cancel"})),e(Hu,Object.assign({"data-testid":"done-button",ref:z,type:"button",onClick:()=>{r||(F(M),"default"===B?X("confirmed"):I("default"))},disabled:r},{children:"Done"}))]})})()]}))})),Zu=T.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Qu=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${lc["body-sm-semibold"]};
    color: ${sc.text};
`,Ju=T.div`
    grid-column: 1 / -1;
    display: flex;
`,eh=e=>{let t=sc.bg,r="transparent";switch(e.$type){case"hover-subtle":t=sc["bg-hover"],r=sc["bg-hover"];break;case"hover":t=sc["bg-hover-strong"],r=sc["bg-hover-strong"];break;case"hover-outline":t=sc["bg-hover-subtle"],r=sc["border-hover"];break;case"selected-outline":t=sc["bg-selected"],r=sc["border-selected"];break;case"selected-outline-subtle":t=sc["bg-selected"],r=sc["border-selected-subtle"];break;case"selected-hover":t=sc["bg-selected-hover"];break;case"selected-hover-outline":t=sc["bg-selected-hover"],r=sc["border-selected-hover"]}return{color:t,borderColor:r}},th=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,rh=T.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${cc["duration-150"]} ${cc["ease-default"]};
    border: ${dc["width-010"]} ${dc.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=eh(e);return F`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,nh=T(rh)`
    left: 0;
`,ih=T(rh)`
    right: 0;
`,oh=T.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${cc["duration-150"]} ${cc["ease-default"]};

    border: ${dc["width-010"]} ${dc.solid} transparent;
    border-radius: ${hc.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=eh(e);return F`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,ah=T(oh)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,sh=T(oh)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,lh=T.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${lc["body-md-regular"]}
    transition: ${cc["duration-150"]} ${cc["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return F`
                color: ${sc["text-disabled-subtlest"]};
            `;switch(r){case"selected":return F`
                    font-weight: ${lc.Spec["weight-semibold"]};
                    color: ${sc["text-selected"]};
                `;case"selected-hover":return F`
                    font-weight: ${lc.Spec["weight-semibold"]};
                    color: ${sc["text-selected-hover"]};
                `;case"current":return F`
                    font-weight: ${lc.Spec["weight-semibold"]};
                    color: ${sc["text-primary"]};
                `;case"hover":return F`
                    font-weight: ${lc.Spec["weight-semibold"]};
                    color: ${sc["text-hover"]};
                `;case"unavailable":return F`
                    color: ${sc["text-disabled-subtlest"]};
                `;case"hidden":return F`
                    visibility: hidden;
                `;default:return F`
                    color: ${sc.text};
                `}}}
`,ch=T.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,dh=({bgLeft:r,bgRight:n,circleLeft:i,circleRight:o,labelType:a,disabled:s,interactive:l,currentDateIndicator:c,date:d,onSelect:u,onHover:h,onHoverEnd:g})=>{const p=Ld().isSame(d,"day");return t(th,{children:[e(nh,{$type:r}),e(ah,{$type:i}),e(ih,{$type:n}),e(sh,{$type:o}),t(lh,Object.assign({$type:a,$disabled:s,$interactive:l,onClick:()=>{u(d)},onMouseEnter:()=>{h(d)},onMouseLeave:()=>{g&&g(d)}},{children:[d.date(),c&&p&&e(ch,{$disabled:s})]}))]})},uh=({date:t,calendarDate:r,startDate:n,endDate:i,currentFocus:o,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:g,onHover:p})=>{const f=Qd.isDisabledDay(t,c,s,l),m=!f||d,b=()=>{const e=Ld(a),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===o&&i&&t&&(n&&r?(c=a,d=i):(s=a,l=n||i)),"end"===o&&n&&r&&(i&&t?(c=n,d=a):(s=i||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:r,disabled:f,interactive:m,currentDateIndicator:!0,onSelect:()=>{g(t,!m)},onHover:()=>{p(t.format("YYYY-MM-DD"),!m)}};return e(dh,Object.assign({},v,(()=>{const e={};if(r.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(Ld().isSame(t,"day")&&!f)e.labelType="current";else if(u){const r="end"===o&&n&&t.isBefore(n),a="start"===o&&i&&t.isAfter(i);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(n,"day"),a=t.isSame(i,"day");return h&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&i&&t.isBetween(n,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return;const e={},r=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:c}=b();if(r){const r=t.isSame(n,"day"),o=t.isSame(i,"day");r||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const r=t.isSame(o,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Ld.extend(Yd);const hh=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:o,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:d,minDate:u,maxDate:h,allowDisabledSelection:g,showActiveMonthDaysOnly:p})=>{const f=m((()=>Qd.generateDays(r)),[r]),[b,v]=a(""),y=(e,t)=>{t&&!g||l(e)},x=(e,t)=>{t&&!g||(v(e),c(e))},$=()=>{v(""),c("")};return t(Zu,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((t,r)=>e(Qu,{children:Ld(t).format("ddd")},`week-day-${r}`))),f.map(((t,a)=>e(Ju,Object.assign({onMouseLeave:$},{children:t.map(((t,a)=>e(uh,{date:t,calendarDate:r,startDate:o,endDate:s,hoverDate:b,currentFocus:n,minDate:u,maxDate:h,disabledDates:i,allowDisabledSelection:g,isNewSelection:d,showActiveMonthDaysOnly:p,onSelect:y,onHover:x},`day-${a}`)))}),a)))]}))},gh=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:d,onHover:u})=>{const h=Qd.isDisabledDay(t,s,o,a),g=!h||l,{start:p,end:f}=n?Qd.getFixedRangeStartEnd(iu.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=i?Qd.getFixedRangeStartEnd(iu.toDayjs(i),c):{start:void 0,end:void 0},v=n&&t.isBetween(p,f,"day","[]"),y=i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),$=v&&t.isSame(f,"day")||y&&t.isSame(b,"day"),w=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:t,calendarDate:r,disabled:h,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(t,!g)},onHover:()=>{u(t.format("YYYY-MM-DD"),!g)}};return e(dh,Object.assign({},C,(()=>{const e={};return v||y?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":Ld().isSame(t,"day")&&!h&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return y&&w(e,"hover",r===m,r===b),v&&w(e,"selected-outline",r===p,r===f),v&&y&&(w(e,"selected-hover-outline",x,$),r===m&&r!==p&&(e.circleLeft="selected-hover")),e})()))},ph=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=m((()=>Qd.generateDays(r)),[r]),[g,p]=a(""),f=(e,t)=>{t&&!d||(o(e),e&&!Ld(e).isSame(e,"month")&&p(""))},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(Zu,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((t,r)=>e(Qu,{children:Ld(t).format("ddd")},`week-day-${r}`))),h.map(((t,o)=>e(Ju,Object.assign({onMouseLeave:v},{children:t.map(((t,o)=>e(gh,{date:t,calendarDate:r,selectedDate:i,hoverDate:g,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,onSelect:f,onHover:b,numberOfDays:u},`day-${o}`)))}),o)))]}))},fh=T.div`
    width: 100%;
    background: ${sc.bg};
`,mh=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const h=Qd.isDisabledDay(t,s,o,a),g=!h||l,p={date:t,calendarDate:r,disabled:h,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(t,!g)},onHover:()=>{u(t.format("YYYY-MM-DD"),!g)}};return e(dh,Object.assign({},p,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":Ld().isSame(t,"day")&&!h&&(e.labelType="current");const o=t.isSame(n,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Ld.extend(Yd);const bh=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,showActiveMonthDaysOnly:u})=>{const h=m((()=>Qd.generateDays(r)),[r]),[g,p]=a(""),f=(e,t)=>{t&&!d||o(e)},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(Zu,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((t,r)=>e(Qu,{children:Ld(t).format("ddd")},`week-day-${r}`))),h.map(((t,o)=>e(Ju,Object.assign({onMouseLeave:v},{children:t.map(((t,o)=>e(mh,{date:t,calendarDate:r,selectedDate:i,hoverDate:g,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,showActiveMonthDaysOnly:u,onSelect:f,onHover:b},`day-${o}`)))}),o)))]}))},vh=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Qd.isDisabledDay(t,s,o,a),h=!u||l,{start:g,end:p}=Qd.getWeekStartEnd(iu.toDayjs(n)),{start:f,end:m}=Qd.getWeekStartEnd(iu.toDayjs(i)),b=n&&t.isBetween(g,p,"day","[]"),v=i&&t.isBetween(f,m,"day","[]"),y=b&&t.isSame(g)||v&&t.isSame(f),x=b&&t.isSame(p)||v&&t.isSame(m),$={date:t,calendarDate:r,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(t,!h)},onHover:()=>{d(t.format("YYYY-MM-DD"),!h)}};return e(dh,Object.assign({},$,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":Ld().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},yh=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const u=m((()=>Qd.generateDays(r)),[r]),[h,g]=a(""),p=(e,t)=>{if(t&&!d)return;const r=e.startOf("week");o(r),e&&!Ld(e).isSame(r,"month")&&g("")},f=(e,t)=>{t&&!d||(g(e),s(e))},b=()=>{g(""),s("")};return t(Zu,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((t,r)=>e(Qu,{children:Ld(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e(Ju,Object.assign({onMouseLeave:b},{children:t.map(((t,o)=>e(vh,{date:t,calendarDate:r,selectedDate:i,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,onSelect:p,onHover:f},`day-${o}`)))}),o)))]}))},xh=i.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:i,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:g,allowDisabledSelection:p,selectWithinRange:f=!0,initialCalendarDate:m,numberOfDays:v,showActiveMonthDaysOnly:y=!1},x)=>{const $=o(),w=o(void 0);b(x,(()=>({reset(){$.current.resetView()},setCalendarDate(e){$.current.setCalendarDate(e)}})));const C=e=>{const t=e.format("YYYY-MM-DD");$.current.setCalendarDate(t),k(t)},S=e=>{O(e)},k=e=>{n&&n(e)},O=e=>{i&&i(e)},D=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(fh,{children:e(Gu,Object.assign({ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:h,maxDate:g,selectWithinRange:f,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||D(e),w.current=e},initialCalendarDate:m},{children:({calendarDate:r})=>(r=>{switch(u){case"week":return e(yh,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,onSelect:C,onHover:S});case"fixed-range":return e(ph,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,onSelect:C,onHover:S,numberOfDays:v});case"single":return e(bh,{calendarDate:r,disabledDates:t,selectedDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:C,onHover:S});default:return e(hh,{calendarDate:r,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:g,isNewSelection:f,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:C,onHover:S})}})(r)}))})})),$h=i.forwardRef(((t,r)=>{var{width:n}=t,i=dt(t,["width"]);return e(Du,Object.assign({$width:n,"data-testid":"calendar-dropdown"},{children:e(xh,Object.assign({ref:r},i))}))})),wh=t=>{var{className:r,styleType:n="bordered",value:i,onSelect:o}=t,s=dt(t,["className","styleType","value","onSelect"]);const[l,c]=a(i);return u((()=>{c(i)}),[i]),e(Ch,Object.assign({className:r,$hasBorder:"bordered"===n},{children:e(xh,Object.assign({value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==o||o(e)}},s))}))},Ch=T.div`
    --vertical-inset: ${uc["spacing-24"]};
    --horizontal-inset: ${uc["spacing-32"]};
    --header-bottom-spacing: ${uc["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return F`
                border: ${dc["width-010"]} ${dc.solid} ${sc.border};
                border-radius: ${hc.lg};
                overflow: hidden;
            `}}
`,Sh=T.div`
    border-radius: ${hc.md};
    background: ${sc.bg};
    padding: ${uc["spacing-16"]} ${uc["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,kh=t=>{var{children:r}=t,n=dt(t,["children"]);const i=n["data-testid"]||"card";return e(Sh,Object.assign({},n,{"data-testid":i},{children:"string"==typeof r?e(kc.BodyBL,{children:r}):r}))},Oh=M`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Dh=T.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>F`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,jh=F`
    animation: ${cc["duration-150"]} ${cc["ease-default"]} ${Oh};
    width: 100%;
    height: 100%;
    transition: color ${cc["duration-150"]} ${cc["ease-default"]};
`,Eh=T(W)`
    ${jh}
    color: ${sc["icon-primary-subtlest"]};
`,_h=T(H)`
    ${jh}
    color: ${sc["icon-disabled-subtle"]};
`,Th=T(Y)`
    ${jh}
    color: ${e=>e.$disabled?sc["icon-disabled-subtle"](e):sc["icon-selected"](e)};
`,Fh=T(V)`
    ${jh}
    color: ${e=>e.$disabled?sc["icon-disabled-subtle"](e):sc["icon-selected"](e)};
`,Mh=T.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Eh},
        &:hover
        + ${Th},
        &:hover
        + ${Fh} {
        color: ${e=>!e.disabled&&sc["icon-hover"](e)};
    }
`,Ah=r=>{var{className:n,checked:i,disabled:a,indeterminate:s,onChange:l,onKeyPress:c,displaySize:d="default"}=r,h=dt(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const g=o();u((()=>{g.current.indeterminate=s}),[s]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(Dh,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,$displaySize:d,$disabled:a,$unchecked:!(s||i||a)},{children:[e(Mh,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:g,tabIndex:-1,onChange:p,disabled:a},h)),s?e(Fh,{$disabled:a,"data-testid":"indeterminate"}):i?e(Th,{$disabled:a,"data-testid":"checkmark"}):a?e(_h,{"data-testid":"empty-disabled-checkbox"}):e(Eh,{$disabled:a,"data-testid":"empty-checkbox"})]}))};var Bh=Qo,Ih=/\s/;var zh=function(e){for(var t=e.length;t--&&Ih.test(e.charAt(t)););return t},Rh=/^\s+/;var Ph=function(e){return e?e.slice(0,zh(e)+1).replace(Rh,""):e},Lh=xa,Nh=pa,Wh=/^[-+]0x[0-9a-f]+$/i,Hh=/^0b[01]+$/i,Yh=/^0o[0-7]+$/i,Vh=parseInt;var Uh=function(e){if("number"==typeof e)return e;if(Nh(e))return NaN;if(Lh(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Lh(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ph(e);var r=Hh.test(e);return r||Yh.test(e)?Vh(e.slice(2),r?2:8):Wh.test(e)?NaN:+e},Xh=xa,Kh=function(){return Bh.Date.now()},qh=Uh,Gh=Math.max,Zh=Math.min;var Qh=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function f(){var e=Kh();if(p(e))return m(e);s=setTimeout(f,function(e){var r=t-(e-l);return u?Zh(r,o-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?g(e):(n=i=void 0,a)}function b(){var e=Kh(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),g(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=qh(t)||0,Xh(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Gh(qh(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Kh())},b},Jh=Uo(Qh),eg=Qh,tg=xa;var rg,ng,ig=Uo((function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return tg(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),eg(e,t,{leading:n,maxWait:t,trailing:i})})),og=new Map,ag=new WeakMap,sg=0,lg=void 0;function cg(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(ag.has(e)||(sg+=1,ag.set(e,sg.toString())),ag.get(e)):"0"}(e.root):e[t]}`)).toString()}function dg(e,t,r={},n=lg){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=cg(e);let r=og.get(t);if(!r){const n=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},og.set(t,r)}return r}(r),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),og.delete(i))}}function ug({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var u;const[h,g]=n.useState(null),p=n.useRef(),[f,m]=n.useState({inView:!!l,entry:void 0});p.current=d,n.useEffect((()=>{if(s||!h)return;let n;return n=dg(h,((e,t)=>{m({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&a&&n&&(n(),n=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:r,delay:t},c),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,h,o,i,a,s,r,c,t]);const b=null==(u=f.entry)?void 0:u.target,v=n.useRef();h||!b||a||s||v.current===b||(v.current=b,m({inView:!!l,entry:void 0}));const y=[g,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}!function(e){e.AM="AM",e.PM="PM"}(rg||(rg={})),function(e){e.roundToNearestHour=(e,t)=>{const r=Ld(e,"HH:mm");return(0===r.minute()?r:t?r.minute(0).add(1,"hour"):r.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=Ld(e,n),o=Ld(t,n);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(r)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:rg.AM};if(!t)return r;try{if("24hr"===e){const n=pg(t,e);r.minute=su.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=rg.AM,r.hour=0===i?"12":su.padValue(i.toString())):(r.period=rg.PM,r.hour=12===i?i.toString():su.padValue((i-12).toString()))}else{const n=pg(t,e);r.hour=su.padValue(n.hour),r.minute=su.padValue(n.minute),r.period="am"===n.period.toLowerCase()?rg.AM:rg.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?su.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return su.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?su.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?su.padValue(n.toString()):13===n?su.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===rg.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return su.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=pg(e,t),n=su.padValue(r.hour);let i=`${n}:${su.padValue(r.minute)}`;return"12hr"===t?(i+=r.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&o<12&&(o+=12),"am"===r&&12===o&&(o=0),fg(o,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const o=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=fg(e,n,t);o.push(r)}else{const t=fg(e,n);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const o=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),fg(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return fg(i,o,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",o=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<o)o=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&12!==o&&(o+=12),"am"===r&&12===o&&(o=0),60*o+i}}(ng||(ng={}));const hg=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},gg=e=>{const t=parseInt(e);return t>=0&&t<=59},pg=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!hg(r[0],t)||!gg(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!hg(r[0],t)||!gg(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},fg=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,mg=T.div`
    width: 100%;
`,bg=T.div`
    ${lc["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${uc["spacing-8"]} ${uc["spacing-16"]};
    border-radius: ${hc.sm};
    color: ${sc["text-primary"]};
    border: ${dc["width-010"]} ${dc.solid};
    border-color: ${sc["border-primary"]};
    background-color: ${sc.bg};

    ${pc.MaxWidth.sm} {
        padding: ${uc["spacing-16"]};
    }

    ${e=>{if(e.$warn)return F`
                color: ${sc["text-error"]};
                border-color: ${sc["border-error"]};
            `}}
`,vg=T(bg)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,yg=T(bg)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:r,$right:n,$warn:i}=e;return F`
            /* style object will be converted to px */
            ${{top:t,left:r,right:n}}

            box-shadow: 0px 0px 4px 1px rgb(from ${i?sc["border-error"]:sc["border-primary-subtle"]} r g b / 50%);

            ${pc.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,xg=T.div`
    font-weight: ${lc.Spec["weight-bold"]};
    margin-left: ${uc["spacing-8"]};
    margin-right: ${uc["spacing-24"]};

    ${pc.MaxWidth.sm} {
        margin-right: ${uc["spacing-48"]};
    }
`,$g=T.div`
    font-weight: ${lc.Spec["weight-semibold"]};
    margin-left: auto;
`,wg=T(U)`
    color: ${e=>e.$warn?sc["icon-error"]:sc["icon-primary"]};
`,Cg=n=>{var{className:i,align:s="right",timer:l,timestamp:c,notifyTimer:d,offset:h,mobileOffset:g,show:p,fixed:f=!0,"data-testid":m,onFinish:b,onNotify:v,onTick:y}=n,x=dt(n,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const $=o(),w=o(!1),[C,S]=a(0),[k,O]=a(0),[D,j]=a(0),[E,_]=a(!1),[T]=((e,t,r)=>{const[n,i]=a(e);u((()=>{if(!t)return;const n=null!=r?r:Date.now()+1e3*e,i=o(n);return()=>clearTimeout(i)}),[r,t,e]);const o=e=>{const t=()=>{const r=e-Date.now(),n=r%1e3,o=Math.max(Math.round(r/1e3),0);if(i(o),0!==o)return setTimeout(t,n>500?n:n+1e3)};return t()};return[n]})(l,E,c),{ref:F,inView:M}=ug({threshold:1,rootMargin:-1*C+"px 0px 0px 0px",initialInView:!0}),B=!f||M,I=T<=d,z=A(),R=gc["sm-max"]({theme:z}),P=Sd.useMediaQuery({maxWidth:R});u((()=>{_(p)}),[p]),u((()=>{0===T?H():T<=d&&(N(),W())}),[T]),u((()=>{const e=function(){var e,t;const r=null!==(e=null==h?void 0:h.top)&&void 0!==e?e:168,n=null!==(t=null==g?void 0:g.top)&&void 0!==t?t:80,i=P?n:r;return i}();S(e)}),[P,null==h?void 0:h.top,null==g?void 0:g.top]),u((()=>{if($.current){const e=ig(L,300);return L(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[$.current]),u((()=>{w.current=!1}),[l,p]);const L=()=>{var e;const t=null===(e=$.current)||void 0===e?void 0:e.getBoundingClientRect();j(t.x),O(t.right)},N=()=>{y&&y(T)},W=()=>{v&&!w.current&&(w.current=!0,v())},H=()=>{_(!1),b&&b()};const Y=()=>{const{minutes:n,seconds:i}=ng.toMinutesSeconds(T),o=1!==n?"mins":"min",a=1!==i?"secs":"sec";return t(r,{children:[e(wg,{$warn:I}),e(xg,{children:"Time left:"}),t($g,{children:[n," ",o," ",String(i).padStart(2,"0")," ",a]})]})};if(void 0!==typeof window)return E||0===T?t(mg,Object.assign({className:i},x,{children:[e("div",{ref:F}),e(vg,Object.assign({"data-testid":m,"data-id":"countdown-wrapper",ref:$,inert:B?void 0:"",$visible:B,$warn:I},{children:Y()})),$.current&&!B&&(()=>{var t,r;const n=null!==(t=null==h?void 0:h.left)&&void 0!==t?t:"left"===s?D:void 0,i=null!==(r=null==h?void 0:h.right)&&void 0!==r?r:"right"===s?Math.floor(document.body.clientWidth-k):void 0;return e(yg,Object.assign({"data-testid":m,"data-id":"fixed-countdown-wrapper",$warn:I,$top:C,$left:n,$right:i},{children:Y()}))})()]})):e(r,{})},Sg=n=>i=>{switch(n){case"maintenance":return t(r,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const n=i,o=Math.floor(n.secondsLeft/60),a=n.secondsLeft%60;return t(r,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",o," minutes"," ",a," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var kg;!function(e){e.imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:o,height:a}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${gc["sm-max"]({theme:t})}px) 400px, (max-width: ${gc["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}}}(kg||(kg={}));const{imgAttributeHelper:Og}=kg,Dg={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},jg={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},Eg=Object.assign(Object.assign({},Dg),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),_g=Object.assign(Object.assign({},Dg),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Tg=(e,t)=>new Map([["400",{img:Og(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Og(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Og(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Og(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Og(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Og(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Og(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Og(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Og(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Og(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Og(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Og(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Og(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:Sg("inactivity")}],["maintenance",{img:Og(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:Sg("maintenance")}],["no-item-found",{img:Og(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Og(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Og(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Og(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Og(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Og(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),Fg=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Mg=T.img`
    position: relative;
    width: 400px;
    height: auto;

    ${pc.MaxWidth.sm} {
        width: 320px;
    }

    ${pc.MaxWidth.xs} {
        width: 288px;
    }

    ${pc.MaxWidth.xxs} {
        width: 240px;
    }
`,Ag=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,Bg=T(kc.HeaderMD)`
    margin: ${uc["spacing-32"]} 0 ${uc["spacing-16"]};
    text-align: center;
`,Ig=T.div`
    color: ${sc.text};
    text-align: center;

    ${td({textSize:"body-baseline"})}
`,zg=T(qc.Default)`
    margin: ${uc["spacing-32"]} auto 0;
    width: 21rem;

    ${pc.MaxWidth.sm} {
        width: 100%;
    }
`,Rg=r=>{var{type:n,img:i,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=r,u=dt(r,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=A(),g=((e,t,r)=>{switch(t){case"bookingsg":return Tg(jg,r).get(e);case"ccube":return Tg(Eg,r).get(e);case"mylegacy":return Tg(_g,r).get(e);default:return Tg(Dg,r).get(e)}})(n,d||(h||fc).resourceScheme,h),p=u["data-testid"]||"error-display",f=()=>{switch(n){case"maintenance":{const e=l;return l&&e.dateString?g.renderDescription(e):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?g.renderDescription(e):a||void 0}default:return a||void 0}};if(!g)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},g),i&&{img:i}),o&&{title:o}),f()&&{description:f()});return t(Fg,Object.assign({},u,{"data-testid":p},{children:[e(Mg,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?t(Ag,{children:[m.title&&("string"==typeof m.title?e(Bg,Object.assign({"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold"},{children:m.title})):m.title),m.description&&e(Ig,Object.assign({"data-testid":`${p}--description`,"data-id":"error-display-description"},{children:"string"==typeof m.description?e("p",{children:m.description}):m.description}))]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e(zg,Object.assign({},t))})()]}))},Pg=F`
    outline-offset: -1px;
    outline: ${dc["width-020"]} ${dc.solid} ${sc["border-focus"]};
`,Lg=F`
    outline-color: ${sc["border-focus"]};
`,Ng=F`
    outline-color: ${sc["border-disabled"]};
`,Wg=F`
    outline-color: ${sc["border-error-focus"]};
`,Hg=T.div`
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};
    background: ${sc.bg};

    :focus-within {
        ${Pg}
    }
    ${e=>e.$focused&&Pg}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Lg}
                }
                ${e.$focused&&Lg}
            `:e.$disabled?F`
                background: ${sc["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Ng}
                }
                ${e.$focused&&Ng}
            `:e.$error?F`
                border-color: ${sc["border-error"]};

                :focus-within {
                    ${Wg}
                }
                ${e.$focused&&Wg}
            `:void 0}
`,Yg=T(Hg)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${uc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Vg=T.input`
    ${e=>"small"===e.$variant?lc["body-md-regular"]:lc["body-baseline-regular"]}
    color: ${sc.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${sc["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${sc["text-subtler"]};
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
`,Ug=T.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${dc["width-010"]} ${dc.solid}
            ${sc["border-focus"]};
        border-radius: ${hc.sm};
    }
`,Xg=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Kg=sc.border,qg=sc.text,Gg=T.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${dc["width-010"]} ${dc.solid} ${Kg};
    border-radius: ${hc.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Zg=T.div`
    flex: 1;
`,Qg=T.table`
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
`,Jg=T.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${dc["width-010"]} ${dc.solid} ${Kg}`:"none"};
        }
    }
`,ep=T.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return F`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return F`
                position: sticky;
                left: 0;
            `}};
`,tp=T(Ug)`
    ${lc["body-md-semibold"]}
    cursor: pointer;
    color: ${sc["text-primary"]};
    transition: ${cc["duration-150"]} ${cc["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${sc["text-hover"]};
    }
`,rp=T.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&F`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${hc.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${dc["width-010"]} ${dc.solid} ${Kg};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${dc["width-010"]} ${dc.solid} ${Kg};
    border-radius: 0 0 ${hc.sm} ${hc.sm};
    background-color: ${sc["bg-selected"]};
    transition: all 300ms ease;
`,np=T.tr`
    background-color: ${sc["bg-stronger"]};
    height: 6rem;
    border-bottom: ${dc["width-010"]} ${dc.solid} ${Kg};
`,ip=T.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${qg};
    border-bottom: ${dc["width-010"]} ${dc.solid} ${Kg};
    ${e=>{if(e.$isCheckbox)return F`
                width: 4rem;
            `}};
`,op=T.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${qg};
        margin-left: 0.5rem;
    }
`,ap=T.tr`
    background-color: ${e=>e.$isSelected?F`
                ${sc["bg-selected"]};
            `:e.$alternating?F`
                ${sc["bg-strong"]};
            `:F`
                ${sc.bg};
            `};
    border-top: ${dc["width-010"]} ${dc.solid} ${Kg};
    &:hover {
        ${e=>{if(e.$isSelectable)return F`
                    background-color: ${sc["bg-hover-strong"]};
                `}};
    }
`,sp=T.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${qg};
    border-bottom: ${dc["width-010"]} ${dc.solid} ${Kg};
`,lp=T(kc.BodyBL)`
    ${Xg(2)}
    text-overflow: ellipsis;
`,cp=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,dp=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,up=T(kc.HeaderSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,hp=T.td`
    padding: 4rem 0;
`,gp=n=>{var{id:i,headers:s,rows:l,className:c,sortIndicators:d,alternatingRows:h,loadState:g="success",enableMultiSelect:f,selectedIds:m,disabledIds:b,enableActionBar:v,enableSelectAll:y,enableStickyHeader:x,emptyView:$,actionBarContent:w,renderCustomEmptyView:C,onHeaderClick:S,onSelect:k,onSelectAll:O,onClearSelectionClick:D}=n,j=dt(n,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const E=o(null),_=o(null),T=o(null),F=o(null),M=o(null),[A,B]=a(!1),[I,z]=a(!1),[R,P]=a(!1),[L,N]=a(!1),[W,H]=a(!1),{ref:Y,inView:V}=ug(),U=p((()=>{if(!M.current||!F.current)return;const e=M.current.scrollHeight>M.current.clientHeight;B(e),e?F.current.style.transform="translateY(0)":re()}),[]);u((()=>{U()}),[]),cr({onResize:U});cu("scroll",(()=>{requestAnimationFrame((()=>{A?te():re()})),M.current&&P(M.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),u((()=>{ne()}),[l]);const q=()=>(null==m?void 0:m.length)===l.length,G=e=>!!(null==m?void 0:m.includes(e)),Z=e=>!!h&&e%2==1,Q=e=>!!(null==b?void 0:b.includes(e)),J=e=>{if(j["data-testid"])return`${j["data-testid"]}-${e}`},ee=()=>s.length+(f?1:0),te=()=>{if(!M.current)return;const e=M.current.getBoundingClientRect();N(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},re=()=>{if(!(E.current&&_.current&&M.current&&F.current&&T.current))return;const e=_.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=E.current.getBoundingClientRect().height-T.current.clientHeight-32,n=Math.min(t,r);F.current.style.transform=`translateY(-${n}px)`}else F.current.style.transform="translateY(0)"},ne=()=>{E.current&&M.current&&H(E.current.clientHeight+(v?56:0)<M.current.clientHeight)},ie=r=>{const{fieldKey:n,label:i,clickable:o=!1,style:a}="string"==typeof r?{fieldKey:r,label:r,style:void 0}:r;return e(ip,Object.assign({"data-testid":J(`header-${n}`),$clickable:o,onClick:()=>o&&(null==S?void 0:S(n)),style:a,$isCheckbox:!1},{children:t(op,{children:["string"==typeof i?e(kc.BodyBL,Object.assign({weight:"bold"},{children:i})):i,oe(n)]})}),n)},oe=t=>{const n=null==d?void 0:d[t];return n?"asc"===n?e(X,{"data-testid":J(`header-${t}-arrowup`)}):e(K,{"data-testid":J(`header-${t}-arrowdown`)}):e(r,{})},ae=()=>e(ip,Object.assign({"data-testid":J("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e(cp,{children:y&&e(Ah,{checked:q(),indeterminate:m&&0!==m.length&&!q(),onClick:()=>{O&&O(q())}})})})),se=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=r.id.toString(),a=r[i],s=`${o}-${i}`;return e(sp,Object.assign({"data-testid":J(`row-${s}`),style:n,$isCheckbox:!1},{children:"string"==typeof a||"number"==typeof a?e(lp,{children:a}):"function"==typeof a?a(r,{isSelected:G(o)}):a}),s)},le=t=>e(sp,Object.assign({"data-testid":J(`row-${t}-selection`),$isCheckbox:!0},{children:e(cp,{children:e(Ah,{checked:G(t),onClick:()=>{k&&k(t,!G(t))},disabled:Q(t)})})})),ce=()=>e(Rg,Object.assign({type:"no-item-found"},$,{title:(null==$?void 0:$.title)?"string"==typeof $.title?e(up,Object.assign({weight:"bold"},{children:$.title})):$.title:e(up,Object.assign({weight:"bold"},{children:"No <items> found"})),description:(null==$?void 0:$.description)?$.description:"No matching rows"}));return t(Gg,Object.assign({id:i||"table-wrapper","data-testid":j["data-testid"]||"table",className:c,ref:M,onScroll:()=>{A&&M.current&&z(M.current.scrollTop+M.current.clientHeight>=M.current.scrollHeight)}},{children:[e(Zg,{children:t(Qg,Object.assign({$end:R,$scrollable:A,ref:E,$stickyHeader:x},{children:[e("thead",Object.assign({ref:T},{children:t(np,{children:[f&&ae(),s.map(ie)]})})),e(Jg,Object.assign({$showLastRowBottomBorder:W},{children:"success"===g?!l||l.length<1?e("tr",{children:e(hp,Object.assign({colSpan:ee()},{children:C?C():ce()}))}):e(r,{children:null==l?void 0:l.map(((e,r)=>t(ap,Object.assign({"data-testid":J(`row-${e.id.toString()}`),$alternating:Z(r),$isSelectable:f,$isSelected:G(e.id.toString())},{children:[f&&le(e.id.toString()),s.map((t=>se(t,e)))]}),e.id.toString())))}):e("tr",{children:e("td",Object.assign({colSpan:ee()},{children:e(dp,{children:"loading"===g&&e(yd,{})})}))})}))]}))}),v&&m&&m.length>0&&(()=>{var r,n,i;return e(ep,Object.assign({ref:F,$fixed:L,$left:null===(n=null===(r=null==E?void 0:E.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(i=null==E?void 0:E.current)||void 0===i?void 0:i.clientWidth},{children:t(rp,Object.assign({$float:(A?!I:!V)||L,$scrollable:A},{children:[e(kc.BodyMD,Object.assign({weight:"semibold"},{children:`${m.length} item${m.length>1?"s":""} selected`})),e(tp,Object.assign({type:"button",onClick:D},{children:"Clear selection"})),w]}))}))})(),e("div",{ref:e=>{_.current=e,Y(e)}})]}))},pp=e=>"small"===e?2.5:3,fp=T.div`
    position: relative;
    width: 100%;
    ${e=>{const t=pp(e.$variant);return F`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,mp=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${uc["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>pp(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${hc.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${sc["border-focus"]};
    }
`,bp=T.button`
    ${mp}
    cursor: pointer;
`,vp=T.div`
    ${mp}
`,yp=M`
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
`,xp=T.div`
    position: relative;
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};
    background: ${sc.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${sc["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${sc["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${yp} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?F`
                background: ${sc["bg-disabled"]};

                ${bp} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${sc.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${bp} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?F`
                border-color: ${sc["border-error"]};

                :focus-within {
                    border-color: ${sc["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${sc["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;T.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${cc["duration-250"]} ${cc["ease-default"]};
    margin-left: ${uc["spacing-16"]};
`,T(fe)`
    color: ${sc.icon};
`;const $p=T.div`
    height: 1px;
    background: ${sc.border};
    margin: 0 ${uc["spacing-8"]};
`,wp=T.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${sc["text-disabled"]};
            `}}
`,Cp=T.div`
    ${e=>"small"===e.$variant?lc["body-md-regular"]:lc["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return F`
                    ${Xg(1)}
                `}}
    overflow: hidden;
`,Sp=T(Cp)`
    color: ${sc["text-subtler"]};
`,kp=({children:t,show:r,error:n,disabled:i,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=o();return cu("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;r&&s()}}),"document"),e(fp,Object.assign({className:c,$variant:d},{children:e(xp,Object.assign({ref:u,error:n&&!r,disabled:i,$readOnly:l,expanded:r,"data-testid":a},{children:t}))}))};var Op;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Op||(Op={}));const Dp=()=>{const[e,t]=a(void 0),r=ve();return u((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Op.Change,e),r.events.emit(Op.Ready),()=>r.events.off(Op.Change,e)}),[r]),e},jp=T.div`
    display: flex;
    flex-direction: column;
`,Ep=e=>"right"===e?"bottom-end":"bottom-start",_p=({enabled:n,isOpen:i,onOpen:a,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:g=0,alignment:p="left",fitAvailableHeight:f})=>{var m;const b=A(),v=gc["sm-max"]({theme:b}),y=o(null),x=o(null),{width:$}=cr({targetRef:y,handleHeight:!1}),w={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<v;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:C,floatingStyles:S,context:k}=ye({open:i,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!i?null==a||a():!e&&i&&(null==s||s(r))},whileElementsMounted:xe,placement:Ep(p),middleware:[$e(g),we(),Ce({limiter:Se()}),ke({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),w]}),O=Dp(),{isMounted:D,styles:j}=Oe(k,{initial:{opacity:0},open:{opacity:1},duration:300}),E=De(k,{enabled:n,toggle:h}),_=je(k,{enabled:n}),{getReferenceProps:T,getFloatingProps:F}=Ee([E,_]);return t(r,{children:[e("div",Object.assign({ref:e=>{y.current=e,C.setReference(e)}},T(),{children:c()})),D&&e(_e,{children:e(Te,Object.assign({context:k,modal:!1,initialFocus:x,returnFocus:!1},{children:e("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(m=null!=u?u:O)&&void 0!==m?m:50})},F(),{children:e(jp,Object.assign({ref:x,style:Object.assign({},j),inert:j.opacity<1?"":void 0},{children:d({elementWidth:$})}))}))}))})]})},Tp=T.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Fp=T.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return F`
                ${Mp}, ${zp} {
                    color: ${sc["text-subtler"]};
                }
            `}}
`,Mp=T(Vg)`
    background: transparent;
    text-align: center;
`,Ap=T(Mp)`
    width: 2rem;
    margin-right: ${uc["spacing-4"]};
`,Bp=T(Mp)`
    width: 2.5rem;
`,Ip=T(Mp)`
    width: 3rem;
    margin-left: ${uc["spacing-4"]};
`,zp=T.span`
    ${lc["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return F`
                color: ${sc.text};
            `}}
`,Rp=T.div`
    ${lc["body-baseline-regular"]}
    background-color: ${sc.bg};
    color: ${sc["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?F`
                background-color: ${sc["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?F`
                display: none;
            `:void 0}
`;Ld.extend(Wd);const Pp=i.forwardRef((({disabled:r,readOnly:n,names:i,value:s,focused:l,hoverValue:c,placeholder:d,label:h,onChange:g,onFocus:p,onBlur:f,hideInputKeyboard:m},v)=>{const y=m?"none":"numeric",[x,$,w]=pu(""),[C,S,k]=pu(""),[O,D,j]=pu(""),[E,_]=a("none"),[T,F]=a(!1),M=o(null),A=o(null),B=o(null),I=o(null),[z,R,P]=V(c);u((()=>{const[e="",t="",r=""]=V(s);$(e),S(t),D(r),e||t||r||!M.current.contains(document.activeElement)||A.current.focus()}),[s]),u((()=>{l||_("none"),l&&(F(!0),M.current.contains(document.activeElement)||A.current.focus())}),[l]),b(v,(()=>({ref:M,resetPlaceholder(){F(!1)},resetInput(){const[e="",t="",r=""]=V(s);$(e),S(t),D(r)}})),[s]);const L=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;_(t)},W=e=>{const[t,r,n]=i,o={[t]:w.current,[r]:k.current,[n]:j.current},a=e.target.name,s=o[a],l=a!==n?su.padValue(s,!0):s;switch(a){case t:o[t]=l,$(l);break;case r:o[r]=l,S(l)}const c=`${o[n]}-${o[r]}-${o[t]}`,d=Ld(c,"YYYY-MM-DD",!0).isValid(),u=!o[t]&&!o[r]&&!o[n];d&&s!==l&&g(c),M.current.contains(e.relatedTarget)||(_("none"),null==f||f(u||d))},H=e=>{if(c)return;const t=e.target.name,r=e.target.value.replace(/[^0-9]/g,""),n={day:x,month:C,year:O};switch(t){case i[0]:n.day=r,$(r),2===r.length&&B.current.focus();break;case i[1]:n.month=r,S(r),2===r.length&&I.current.focus();break;case i[2]:n.year=r,D(r)}if(!n.day&&!n.month&&!n.year)return void g("");const o=`${n.year}-${n.month}-${n.day}`;Ld(o,"YYYY-MM-DD",!0).isValid()&&g(o)},Y=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(E===i[1]&&0===C.length&&A.current.focus(),E===i[2]&&0===O.length&&B.current.focus())};function V(e){if(e){const t=Ld(new Date(e));return t.isValid()?[su.padValue(t.date().toString()),su.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(Tp,Object.assign({role:"group","aria-label":h,onClick:()=>{r||n||(F(!0),M.current.contains(document.activeElement)||A.current.focus())},onFocus:e=>{r||(F(!0),l||null==p||p(e))}},{children:[t(Fp,Object.assign({ref:M,$hover:!!c},{children:[e(Ap,{ref:A,name:i[0],maxLength:2,value:null!=z?z:x,onFocus:N,onBlur:W,onChange:H,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==i[0]||n?"DD":""}),e(zp,Object.assign({$inactive:0===x.length},{children:"/"})),e(Bp,{ref:B,name:i[1],maxLength:2,value:null!=R?R:C,onFocus:N,onBlur:W,onChange:H,onKeyDown:Y,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==i[1]||n?"MM":""}),e(zp,Object.assign({$inactive:0===C.length},{children:"/"})),e(Ip,{ref:I,name:i[2],maxLength:4,value:null!=P?P:O,onFocus:N,onBlur:W,onChange:H,onKeyDown:Y,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==i[2]||n?"YYYY":""})]})),(()=>{if(!s&&!n&&d)return e(Rp,Object.assign({$hide:T,$disabled:r,onMouseDown:L},{children:d}))})()]}))})),Lp=T(Yg)`
    height: 3rem;
`,Np=t=>{var{minDate:r,maxDate:n,disabled:i,disabledDates:s,error:l,hideInputKeyboard:c,value:d,onChange:h,onFocus:g,onBlur:p,onYearMonthDisplayChange:f,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x}=t,$=dt(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[w,C]=a(ou.sanitizeInput(d)),[S,k]=a(ou.sanitizeInput(d)),[O,D]=a(void 0),[j,E]=a(!1),[_,T]=a(!1),F=o(null),M=o();u((()=>{const e=ou.sanitizeInput(d);C(e),k(e)}),[d]);const A=e=>{!y&&ou.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:n})||(k(e),m||(L(e),C(e),e&&E(!1)))},B=e=>{k(e),m||(L(e),C(e),e&&(F.current.focus(),E(!1)),O&&D(void 0))},I=()=>{b||i||(E(!0),_||(T(!0),g&&g()))},z=e=>{!_||j||F.current.contains(e.relatedTarget)||(M.current.resetInput(),k(w),T(!1),N())},R=e=>{D(e)},P=e=>{switch(e){case"reset":k(w);break;case"confirmed":C(S),L(S)}F.current.focus(),E(!1)},L=e=>{h&&h(e)},N=()=>{p&&p()};return e(_p,{enabled:!b&&!i,isOpen:j,renderElement:()=>e(Lp,Object.assign({tabIndex:-1,ref:F,onBlur:z,onFocus:I,$disabled:i,$readOnly:b,$focused:_,$error:l,id:v,"data-testid":$["data-testid"]},$,{children:e(Pp,{ref:M,disabled:i,onChange:A,readOnly:b,focused:j,names:["start-day","start-month","start-year"],value:S,hoverValue:O,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e($h,{variant:"single",initialCalendarDate:S,withButton:m,value:S,disabledDates:s,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:R,onSelect:B,onDismiss:P,onYearMonthDisplayChange:f,width:t}),onClose:()=>{M.current.resetInput(),k(w),E(!1),T(!1),N()},onDismiss:()=>{M.current.resetInput(),F.current.focus(),k(w),E(!1)},customZIndex:x,offset:16})},Wp=T.button`
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
                    background-color: ${sc.bg};
                    border: ${dc["width-010"]} ${dc.solid}
                        ${sc["border-primary"]};
                    color: ${sc["text-primary"]};

                    :hover {
                        background-color: ${sc["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${sc.bg};
                    border: ${dc["width-010"]} ${dc.solid}
                        ${sc.border};
                    color: ${sc["text-primary"]};

                    :hover {
                        background-color: ${sc["bg-hover-neutral"]};
                    }
                `;default:return F`
                    background-color: ${sc["bg-primary"]};
                    border: none;
                    color: ${sc["text-inverse"]};

                    :hover {
                        background-color: ${sc["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${sc["bg-disabled"]};
        border: ${dc["width-010"]} ${dc.solid}
            ${sc["border-disabled"]};
        color: ${sc["text-disabled"]};
        cursor: not-allowed;
    }
`,Hp=i.forwardRef(((t,r)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=dt(t,["data-testid","styleType","children","sizeType","type"]);return e(Wp,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),Yp=T(Hp)`
    margin: ${uc["spacing-8"]};
`,Vp=T.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${sc["bg-strong"]};
    border-radius: ${hc.sm};
`,Up=T(qc.Default)`
    color: ${e=>e.$enableDateClick?sc["text-primary"]:sc.text};
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
`,Xp=r=>{var{selectedDate:n,minDate:i,maxDate:o,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:c,onLeftArrowClick:d,onRightArrowClick:u,onCalendarDateSelect:h}=r,g=dt(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const p=iu.toDayjs(n),f=iu.toDayjs(n).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),m=iu.isSame(n,Ld())&&c?"Today":p.format(l?"ddd":"dddd"),[b,v]=a(!1),y=e=>{h&&h(e),v(!b)},x=()=>{v(!1),d(n)},$=()=>{v(!1),u(n)};return e(_p,{enabled:!s,isOpen:b,renderElement:()=>t(Vp,Object.assign({},g,{children:[e(Yp,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!i&&(Qd.isDisabledDay(p,void 0,i)||iu.isSame(p,i)),"aria-label":"Previous day",onClick:x,styleType:"light",sizeType:"small"},{children:e(Eu,{})})),e(Up,Object.assign({onClick:()=>!!h&&!s&&v(!b),$enableDateClick:!!h&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!h||s},{children:`${f}, ${m}`})),e(Yp,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!o&&(Qd.isDisabledDay(p,void 0,void 0,o)||iu.isSame(p,o)),"aria-label":"Next day",onClick:$,styleType:"light",sizeType:"small"},{children:e(_u,{})}))]})),renderDropdown:({elementWidth:t})=>e($h,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:o,onSelect:y,width:t}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8})},Kp=T.div`
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
                        100% - ${lc.Spec["body-size-baseline"]} -
                            ${uc["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${uc["spacing-8"]};
                }
            `}}
`,qp=T.div`
    width: 100%; // Force next flex item to break to next line
`,Gp=T.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Zp=T(q)`
    color: ${sc.icon};
    width: ${lc.Spec["body-size-baseline"]};
    height: ${lc.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${uc["spacing-8"]};
    align-self: center;
`,Qp=T.div`
    position: absolute;
    background: ${e=>e.$error?sc["border-error-focus-strong"]:sc["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${uc["spacing-8"]} - (${lc.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${cc["duration-350"]} ${cc["ease-standard"]},
        opacity ${cc["duration-350"]} ${cc["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + ${uc["spacing-16"]});
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,Jp=({children:r,currentActive:n,error:i,className:o,wrap:a})=>{const[s,l]=r;return t(Kp,Object.assign({className:o,$wrap:a},{children:[e(Gp,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),e(Zp,{}),a&&e(qp,{}),e(Gp,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),e(Qp,{"data-id":"range-container-indicator",$position:n,$error:i,$wrap:a})]}))},ef=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},tf=T(Yg)`
    ${e=>e.$wrap&&F`
            padding: ${uc["spacing-12"]} ${uc["spacing-16"]};
        `}
`,rf=T.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&F`
            height: fit-content;
        `}
`,nf={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},of=r=>{var{minDate:n,maxDate:i,disabled:s,disabledDates:l,error:c,hideInputKeyboard:d,value:h,valueEnd:g,onChange:f,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:$="range",numberOfDays:w=7,readOnly:C,id:S,allowDisabledSelection:k,zIndex:O}=r,D=dt(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[j,E]=a(),[_,T]=a(void 0),[F,M]=a(!1),[A,B]=a(!1),I="week"===$,z="fixed-range"===$,[{selectedStart:R,selectedEnd:P,currentFocus:L,calendarOpen:N,isStartDirty:W,isEndDirty:H,focused:Y},V]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[i,o]=x(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&ef(r,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:nf,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:I?"none":z?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=o(!1),X=o(),K=o(),q=o(),G=o(),Z=(({maxWidth:e,targetRef:t})=>{const[r,n]=a(!1);return cr({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:X});u((()=>{V.resetRange({start:ou.sanitizeInput(h),end:ou.sanitizeInput(g)})}),[h,g]),u((()=>{"start"===L?E(R):"end"===L&&E(P)}),[L]);const Q=e=>{"Enter"!==e.code||y||(R&&P?(V.done({start:R,end:P}),null==f||f(R,P)):(V.dismiss(),X.current.focus(),q.current.resetPlaceholder(),G.current.resetPlaceholder()))},J=e=>{if(he(e))return void(U.current=!0);if(V.changeStart(e),K.current.setCalendarDate(e),U.current=!1,!e)return void(y||P||!H||(V.resetRange({start:"",end:""}),null==f||f("","")));if(!P)return void V.focus("end");if(Ld(e).isAfter(P,"day"))V.reselectEnd();else{if(H)return y?void 0:(V.done({start:e,end:P}),void(null==f||f(e,P)));V.focus("end")}},ee=e=>{if(he(e))return void(U.current=!0);if(Ld(e).isBefore(R,"day"))return V.changeStart(e),K.current.setCalendarDate(e),void V.reselectEnd();if(V.changeEnd(e),K.current.setCalendarDate(e),e){if(R)return y?void 0:(V.done({start:R,end:e}),void(null==f||f(R,e)));V.focus("start")}else y||R||!W||(V.resetRange({start:"",end:""}),null==f||f("",""))},te=e=>{if(he(e))return void(U.current=!0);if(V.changeStart(e),K.current.setCalendarDate(e),U.current=!1,!e)return void(y?V.changeEnd(""):(V.resetRange({start:"",end:""}),null==f||f("","")));const t=Ld(e).format("YYYY-MM-DD"),r=Ld(t).add(w-1,"day").format("YYYY-MM-DD");return V.changeStart(t),V.changeEnd(r),U.current=!1,y?void 0:(V.done({start:t,end:r}),void(null==f||f(t,r)))},re=()=>{C||s||Y||(V.focus("start"),null==m||m())},ne=e=>{!Y||N||X.current.contains(e.relatedTarget)||(V.blur(),M(!1),B(!1),q.current.resetPlaceholder(),G.current.resetPlaceholder(),null==b||b())},ie=e=>t=>{t.stopPropagation(),C||(V.focus(e),oe(),ae(),Y||null==m||m())},oe=()=>{if(I){const e=iu.toDayjs(R).startOf("week").format("YYYY-MM-DD");M(!0),B(!0),E(e)}},ae=()=>{z&&(B(!0),E(R))},se=e=>{e&&!U.current||(V.resetStart(),q.current.resetInput())},le=e=>{e&&!U.current||(V.resetEnd(),G.current.resetInput())},ce=e=>{switch($){case"week":(e=>{const t=Ld(e).startOf("week").format("YYYY-MM-DD"),r=Ld(e).endOf("week").format("YYYY-MM-DD");if(V.changeStart(t),V.changeEnd(r),U.current=!1,!y)V.done({start:t,end:r}),null==f||f(t,r)})(e);break;case"fixed-range":te(e);break;default:"start"===L?J(e):"end"===L&&ee(e)}},de=e=>{switch(X.current.focus(),e){case"reset":V.cancel();break;case"confirmed":V.done({start:R,end:P}),null==f||f(R,P)}},ue=e=>{T(e)},he=e=>!k&&e&&ou.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:i}),ge=e=>{let t={start:void 0,end:void 0};switch($){case"range":t={start:"start"===L?_:void 0,end:"end"===L?_:void 0};break;case"week":if(!_)return;t={start:Ld(_).startOf("week").format("YYYY-MM-DD"),end:Ld(_).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!_)return;t={start:Ld(_).format("YYYY-MM-DD"),end:Ld(_).add(w-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(_p,{enabled:!C&&!s,isOpen:N,onClose:()=>{V.blur(),M(!1),B(!1),q.current.resetPlaceholder(),G.current.resetPlaceholder(),null==b||b()},onDismiss:()=>{V.dismiss(),X.current.focus(),q.current.resetPlaceholder(),G.current.resetPlaceholder()},renderElement:()=>e(tf,Object.assign({ref:X,tabIndex:-1,onFocus:re,onBlur:ne,$focused:Y,$disabled:s,$readOnly:C,$error:c,$wrap:Z,id:S,"data-testid":D["data-testid"],onKeyDown:Q},D,{children:t(Jp,Object.assign({currentActive:L,wrap:Z,error:c},{children:[e(rf,Object.assign({$wrap:Z},{children:e(Pp,{ref:q,placeholder:"From",names:["start-day","start-month","start-year"],value:R,disabled:s,readOnly:F||C,focused:"start"===L,hoverValue:ge("start"),onChange:z?te:J,onFocus:ie("start"),onBlur:se,hideInputKeyboard:d})})),e(rf,Object.assign({$wrap:Z},{children:e(Pp,{ref:G,placeholder:"To",names:["end-day","end-month","end-year"],value:P,disabled:s,readOnly:A||C,focused:"end"===L,hoverValue:ge("end"),onChange:ee,onFocus:ie("end"),onBlur:le,hideInputKeyboard:d})}))]}))})),renderDropdown:({elementWidth:t})=>e($h,{ref:K,variant:$,initialCalendarDate:j,withButton:y,value:R,endValue:P,selectWithinRange:W||H,currentFocus:L,disabledDates:l,minDate:n,maxDate:i,allowDisabledSelection:k,onSelect:ce,onDismiss:de,onHover:ue,onYearMonthDisplayChange:v,numberOfDays:w,width:t}),customZIndex:O,offset:16})},af=T.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:i,$lgStart:o,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:h,$xxsStart:g,$xxsSpan:p}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Vl.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${i||1};
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
`,sf=i.forwardRef(((t,r)=>{const n=A(),{xxlCols:i,xlCols:o,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=dt(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(af,Object.assign({ref:r},(()=>{const e=Hl["xxl-column"]({theme:n}),t=Hl["xl-column"]({theme:n}),r=Hl["lg-column"]({theme:n}),u=Hl["md-column"]({theme:n}),g=Hl["sm-column"]({theme:n}),p=Hl["xs-column"]({theme:n}),f=Hl["xxs-column"]({theme:n}),m=h(i||o||a||s||l||c||d,e,"xxl"),b=h(o||a||s||l||c||d,t,"xl"),v=h(a||s||l||c||d,r,"lg"),y=h(s||l||c||d,u,"md"),x=h(l||c||d,g,"sm"),$=h(c||d,p,"xs"),w=h(d,f,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:$.start,$xsSpan:$.span,$xxsStart:w.start,$xxsSpan:w.span}})(),u))})),lf={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},cf=e=>Object.keys(lf).reduce(((t,r)=>{const n=lf[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),df={MaxWidth:cf("max-width"),MinWidth:cf("min-width")},uf=lf,hf=T.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:i,$mobileStart:o,$mobileSpan:a}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${df.MaxWidth.tablet} {
                grid-column: ${n||"auto"} / span
                    ${i||1};
            }

            ${df.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${a||1};
            }
        `}}
`,gf=i.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:i,desktopCols:o}=t,a=dt(t,["mobileCols","tabletCols","desktopCols"]);return e(hf,Object.assign({ref:r},(()=>{const e=i||n,t=n,r=pf(o||i||n),a=pf(e),s=pf(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),pf=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let o;return o=i===n?1:i-n,{start:n,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},ff=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||sc.border(e);const r=encodeURIComponent(t),n=e.$thickness||1;return F`
        background-color: transparent;
        height: ${n}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${n}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${r}" stroke-width="${n+1}" stroke-dasharray="4 4" /></svg>');
    `},mf=T.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return F`
                    ${ff}
                `;case"solid":return F`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||sc.border};
                `}}}
`,bf=t=>{var{thickness:r=1,lineStyle:n="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:c,mdCols:d,lgCols:u,xlCols:h,xxlCols:g,mobileCols:p,tabletCols:f,desktopCols:m}=t,b=dt(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==p||void 0!==f||void 0!==m;switch(i){case"flex":return e(mf,Object.assign({className:a,$thickness:r,$lineStyle:n,$color:o},b));case"grid":return v?e(gf,Object.assign({className:a,mobileCols:p,tabletCols:f,desktopCols:m},b,{children:e(mf,{$thickness:r,$lineStyle:n,$color:o})})):e(sf,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,r=c||t,n=d||r,i=u||n,o=h||i;return{xxlCols:g||o,xlCols:o,lgCols:i,mdCols:n,smCols:r,xsCols:t,xxsCols:e}})(),b,{children:e(mf,{$thickness:r,$lineStyle:n,$color:o})}))}},vf=T.div`
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
`,yf=T.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?sc["overlay-subtle"]:sc["overlay-strong"]};
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
`,xf=({show:t=!1,rootId:r,onOverlayClick:n,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:g,id:p})=>{const[f,m]=a(null),[b,v]=a(),[y]=a((()=>au.generate())),x=Me(),$=o(),w=o(null),C=s&&i.cloneElement(s,{ref:w}),S=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",k=null!=g?g:b?99999:99998;(e=>{const t=ve();u((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Op.Change,r)}),[t,e]),u((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Op.Change,r)};return null==t||t.events.on(Op.Ready,r),()=>null==t?void 0:t.events.off(Op.Ready,r)}),[t,e])})(k),u((()=>(_(),m(j()),()=>{A(),F().length<1&&T("remove")})),[]),u((()=>{if(t){const e=E();D(e),M();const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{F().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[t]);const D=e=>{$.current=e,v(e)},j=()=>document&&r?document.getElementById(r):document?document.body:null,E=()=>F().length>0,_=()=>{if(!document.getElementById(wf)){const e=document.createElement("style");e.id=wf;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Cf} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Cf}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(Cf);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Cf):document.body.classList.add(Cf)},F=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=F();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=F();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},B=e=>{var t;const r=null===(t=w.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&h&&(e.preventDefault(),n())};return f?O.createPortal(e(vf,Object.assign({id:S,"data-testid":S,$show:t,$zIndex:k},{children:s&&e(Ae,Object.assign({id:x},{children:e(yf,Object.assign({"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:c,$disableTransition:d,onClick:B},{children:C}))}))})),f):null},$f=t=>e(Fe,{children:e(xf,Object.assign({},t))}),wf="lifesg-ds-overlay-stylesheet",Cf="lifesg-ds-overlay-open",Sf=T.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${sc.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${sc.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?F`
            right: 0;
            transition: all ${cc["duration-800"]} ${cc["ease-exit"]};
        `:F`
        right: -100%;
        transition: all ${cc["duration-800"]} ${cc["ease-default"]};
    `}

    width: 40%;
    border-top-left-radius: ${hc.md};
    border-bottom-left-radius: ${hc.md};
    overflow: hidden;

    ${pc.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${pc.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,kf=T.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${uc["spacing-16"]};
    padding: ${uc["spacing-32"]} ${uc["spacing-16"]}
        ${uc["spacing-16"]};
    background-color: ${sc.bg};
    border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};

    ${pc.MaxWidth.lg} {
        gap: ${uc["spacing-8"]};
        padding: ${uc["spacing-32"]} ${uc["spacing-20"]}
            ${uc["spacing-16"]};
    }
`,Of=T(wc)`
    color: ${sc.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${sc["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Df=T(kc.HeaderMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,jf=T.div`
    flex: 1;
    overflow-y: auto;
`,Ef=r=>{var{children:n,heading:i,show:s,onClose:l,onOverlayClick:c}=r,d=dt(r,["children","heading","show","onClose","onOverlayClick"]);const[h,g]=a(s),[p]=a((()=>au.generate())),f=o();u((()=>{if(!s){const e=setTimeout((()=>g(!1)),500);return()=>clearTimeout(e)}g(!0)}),[s]);return e($f,Object.assign({show:h,enableOverlayClick:!0,onOverlayClick:c},{children:t(Sf,Object.assign({$show:s,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":p,onTransitionEnd:e=>{"visibility"===e.propertyName&&s&&f.current.focus()}},d,{children:[t(kf,{children:[e(Df,Object.assign({id:p,ref:f,tabIndex:-1,weight:"bold"},{children:i})),e(Of,Object.assign({"aria-label":"Close drawer",onClick:l,focusHighlight:!1},{children:e(Ie,{"aria-hidden":!0})}))]}),e(jf,{children:n})]}))}))},_f=({className:t,progress:r,color:n,"data-testid":i})=>e(Tf,Object.assign({className:t,$innerWidth:r,$color:n,"data-testid":i},{children:e("progress",{value:100*r,max:100})})),Tf=T.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):sc["icon-primary-subtle"](e),F`
            border: ${dc["width-010"]} ${dc.solid} ${r};
            border-radius: ${hc.sm};

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
`,Ff=T.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${pc.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Mf=t=>{var{id:r="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=t,g=dt(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,f]=a(),[m,b]=a();u((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{window.visualViewport.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),u((()=>{var e,t;n&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const v=()=>{const e=.01*window.innerHeight;f(e)},y=()=>{const e=.01*window.visualViewport.height;f(e),b(window.visualViewport.offsetTop)};return e($f,Object.assign({"data-testid":`${r}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:l,zIndex:c},{children:e(Ff,Object.assign({show:n,animationFrom:i,"data-testid":r,verticalHeight:p,offsetTop:m},g,{children:o}))}))},Af=T.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${sc.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${pc.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Bf=T(wc)`
    position: absolute;
    top: var(--close-button-top-inset, ${uc["spacing-16"]});
    right: var(--close-button-right-inset, ${uc["spacing-16"]});
    padding: 0;
    color: ${sc.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${pc.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${uc["spacing-20"]});
    }
`,If=r=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=r,s=dt(r,["id","children","onClose","showCloseButton"]);return t(Af,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&e(Bf,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser"},{children:e(Ie,{})})),i]}))},zf=Object.assign(Mf,{Box:If}),Rf=F`
    ${e=>`\n        ${pc.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${gc["sm-max"](e)}px)\n    `}
`,Pf=F`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${gc["sm-max"](e)}px)\n    `}
`,Lf=T.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>F`
            ${dc["dashed-default"]({radius:hc.sm,thickness:dc["width-040"],colour:e.$disabled?sc["border-disabled"]:sc.border})}

            background-color: ${e.$disabled?sc["bg-disabled"]:sc.bg};
        `}
    height: 14.125rem;
`,Nf=T(qc.Default)`
    width: fit-content;
    margin: 0 ${uc["spacing-20"]};

    :disabled {
        border-color: ${sc["border-strong"]};
    }
`,Wf=T(Hp)`
    position: absolute;
    top: ${uc["spacing-16"]};
    right: ${uc["spacing-16"]};

    :disabled {
        border-color: ${sc["border-strong"]};
    }
`,Hf=T.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${uc["spacing-16"]}) * 2);
    height: 100%;
`,Yf=T.div`
    background: ${sc["bg-primary-subtlest"]};
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};
    margin: 0 ${uc["spacing-20"]};
    padding: ${uc["spacing-16"]};
    display: flex;
    gap: ${uc["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Vf=T(kc.BodySM)`
    margin-top: ${uc["spacing-16"]};
`,Uf=T(zf)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Xf=T.div`
    width: 100%;
    margin: auto;
    padding: ${uc["layout-xxl"]} ${uc["layout-sm"]};

    ${Rf} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Kf=T(zf.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${uc["spacing-16"]};

    ${Rf} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${uc["spacing-8"]};
        --close-button-right-inset: ${uc["spacing-20"]};
    }
`,qf=T.h2`
    ${lc["body-baseline-semibold"]}
    color: ${sc.text};
    margin-bottom: ${uc["spacing-16"]};
    text-align: center;

    ${Rf} {
        ${lc["body-md-semibold"]}
        margin: ${uc["spacing-12"]} 0;
    }
`,Gf=T.div`
    width: 100%;
    height: 20rem;
    border-radius: ${hc.lg};
    overflow: hidden;

    ${Rf} {
        border-radius: 0;
        flex: 1;
    }

    ${Pf} {
        background: ${sc["bg-strong"]};
    }
`,Zf=T.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${sc["bg-stronger"]};
    margin: auto;

    ${Rf} {
        aspect-ratio: 4/3;
    }
    ${pc.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Pf} {
        width: auto;
        height: 100%;
    }
`,Qf=T.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${sc["border-strong"]};
    pointer-events: none;

    ${Rf} {
        width: calc(100% - ${uc["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Jf=T.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${uc["spacing-16"]};

    ${pc.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${uc["spacing-16"]} ${uc["spacing-24"]}
            ${uc["spacing-48"]};
        gap: ${uc["spacing-16"]};
    }

    ${Pf} {
        flex-direction: row;
        margin: ${uc["spacing-16"]} ${uc["spacing-20"]};
    }
`,em=T(qc.Default)`
    width: 8.5rem;
    ${pc.MaxWidth.sm} {
        width: 100%;
    }
    ${Pf} {
        height: 2.5rem;
    }
`,tm=T.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,rm=T.canvas`
    cursor: crosshair;
`,nm=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.94b87627.js")).ESignatureCanvas}})))),im=n=>{const{description:i,id:s,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:h,disabled:g}=n,p=dt(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[f,m]=a(!1),b=o(null),[v,x]=a(h),$=A(),w=gc["sm-max"]({theme:$}),C=Sd.useMediaQuery({maxWidth:w}),S=Sd.useMediaQuery({maxHeight:w,orientation:"landscape"}),k=()=>{b.current.clear()},O=()=>{const e=b.current.export();x(e),m(!1),null==d||d(e)};u((()=>{x(h)}),[h]);return t("div",Object.assign({},p,{children:[e(Lf,Object.assign({$disabled:g},{children:isNaN(l)?v?t(r,{children:[e(Hf,{src:v,alt:"Signature preview"}),e(Wf,Object.assign({styleType:"light",onClick:()=>m(!0),id:s,"aria-label":"Edit signature",disabled:g},{children:e(G,{})}))]}):e(Nf,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:s,onClick:()=>m(!0),disabled:g},{children:"Add signature"})):t(Yf,{children:[c&&e(kc.BodyMD,{children:c}),e(_f,{progress:l,"data-testid":`${s||"e-signature"}-progress-bar`})]})})),e(Uf,Object.assign({"data-testid":"signature-modal",show:f},{children:e(Xf,{children:t(Kf,Object.assign({onClose:()=>m(!1)},{children:[e(qf,{children:"Signature"}),e(Gf,{children:t(Zf,{children:[e(Qf,{}),e(y,Object.assign({fallback:null},{children:f&&e(nm,{ref:b,baseImageDataURL:v})}))]})}),t(Jf,{children:[e(em,Object.assign({as:S?Ou.Small:Ou.Default,type:"button",styleType:C&&!S?"light":"link",icon:e(Z,{}),onClick:k},{children:"Clear"})),e(em,Object.assign({as:S?qc.Small:qc.Default,type:"button",onClick:O},{children:"Save"}))]})]}))})})),i?e(Vf,{children:i}):null]}))},om="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",am="Submit",sm="Rate your experience",lm=5,cm=T.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,dm=F`
    width: 2.75rem;
    height: 2.75rem;
    color: ${sc["icon-primary"]};
    ${cm}:focus-visible + & {
        outline: ${dc["width-020"]} ${dc.solid}
            ${sc["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${hc.sm};
    }
`,um=T(ze)`
    ${dm}
`,hm=T(Re)`
    ${dm}
`,gm=T.label`
    margin: 0 ${uc["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${pc.MaxWidth.md} {
        margin: 0 ${uc["spacing-8"]};
    }
`,pm=T.div`
    display: flex;
    justify-content: center;
    margin: ${uc["spacing-8"]} ${uc["spacing-16"]};
`,fm=r=>{const{description:n,rating:i,onRatingChange:o}=r,a=t=>{const r=`${t} star${1===t?"":"s"}`;return e(t<=i?hm:um,{"aria-label":r})};return e(pm,Object.assign({role:"radiogroup","aria-label":n},{children:[...Array(lm)].map(((r,n)=>{const s=n+1;return t(gm,{children:[e(cm,{type:"radio",name:"star",checked:s===i,onChange:()=>(e=>{o(e)})(s)}),a(s)]},s)}))}))},mm=T.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${pc.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,bm=T.div`
    border-top: 1px solid ${sc.border};
    border-bottom: 1px solid ${sc.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${pc.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,vm=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${pc.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,ym=T(qc.Default)`
    margin-top: 1rem;
    width: 100%;
`,xm=r=>{const{imgSrc:n,buttonLabel:i,description:o,rating:a,onRatingChange:s,onSubmit:l}=r,c=dt(r,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=n?n:om,u=null!=o?o:sm;return t(bm,Object.assign({},c,{children:[d&&e(mm,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),t(vm,{children:[e(kc.HeaderSM,Object.assign({as:"div",weight:"semibold"},{children:u})),e(fm,{description:u,rating:a,onRatingChange:s}),e(ym,Object.assign({disabled:!a,onClick:l,type:"button"},{children:null!=i?i:am}))]})]}))},$m=T.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return F`
                ${dc["dashed-default"]({radius:hc.sm,thickness:dc["width-040"],colour:sc.border})}
                padding: ${uc["spacing-32"]};

                ${pc.MaxWidth.sm} {
                    padding: ${uc["spacing-32"]} ${uc["spacing-20"]};
                }
            `}}
`,wm=T.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${uc["spacing-32"]};
`,Cm=T.p`
    ${lc["header-xs-regular"]}
    color: ${sc.text};
    margin-bottom: ${uc["spacing-8"]};
`,Sm=T.div`
    ${td({textSize:"header-xs"})}
    color: ${sc.text};
`,km=T.p`
    ${lc["body-md-regular"]}
    color: ${sc["text-subtler"]};
`,Om=T.div`
    ${td({textSize:"body-md"})}
    color: ${sc["text-subtler"]};
`,Dm=T.ul`
    list-style-type: none;
`;var jm;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(jm||(jm={}));const Em=({src:t,alt:r,className:n,"data-testid":i})=>e("img",{src:t,alt:r||"",className:n,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),_m=T.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${uc["spacing-16"]};
    }
`,Tm=T.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${uc["spacing-16"]} ${uc["spacing-32"]};
    cursor: pointer;

    background: ${sc["bg-primary-subtlest"]};
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};

    ${pc.MaxWidth.lg} {
        padding: ${uc["spacing-16"]};
    }

    :hover {
        background: ${sc["bg-hover"]};
    }
`,Fm=T.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${pc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return F`
                ${pc.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,Mm=T.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,Am=T.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${pc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,Bm=T.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${uc["spacing-8"]};

    ${lc["body-md-regular"]}
    color: ${sc.text};

    ${pc.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${uc["spacing-8"]};

        ${Xg(2)}
    }
`,Im=T.div`
    ${lc["body-md-regular"]}
    color: ${sc.text};

    ${pc.MaxWidth.lg} {
        ${Xg(2)}
    }
`;T(Im)`
    ${lc["body-md-regular"]}
    margin-top: ${uc["spacing-4"]};
`;const zm=T.div`
    ${lc["body-sm-semibold"]}
    color: ${sc["text-error"]};
`,Rm=T(zm)`
    margin-top: ${uc["spacing-4"]};
    ${pc.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,Pm=T(zm)`
    display: none;
    visibility: hidden;
    ${pc.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${uc["spacing-8"]};
    }
`,Lm=T(Hc)`
    color: ${sc["icon-primary"]};
`,Nm=T.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${uc["spacing-32"]};

    ${pc.MaxWidth.lg} {
        margin-left: ${uc["spacing-16"]};
    }
`,Wm=T(Hp)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${uc["spacing-16"]};
    }
`,Hm=T.div`
    width: auto;
    margin-right: ${uc["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${pc.MaxWidth.lg} {
        margin-right: ${uc["spacing-16"]};
    }
`,Ym=T(Em)`
    border-radius: ${hc.sm};
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${pc.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,Vm=$((({fileItem:n,onDownload:i})=>{const{id:s,name:l,size:c,errorMessage:d,thumbnailImageDataUrl:h,truncateText:g=!0,ready:p=!0}=n,[f,m]=a(!1),[b,v]=a(!1),y=jm.formatFileSizeDisplay(c),x=A(),$=gc["sm-max"]({theme:x}),w=Sd.useMediaQuery({maxWidth:$}),[C,S]=a(),k=o();u((()=>{k.current&&S(w?O(l):l)}),[l,w]);const O=e=>{if(!g)return e;const t=k&&k.current?k.current.getBoundingClientRect().width:0;return su.truncateTwoLines(e,t,16,1.5)},D=()=>t(r,{children:[e(Im,Object.assign({ref:k},{children:C})),b&&e(Rm,{children:d||"Something went wrong"})]});return e(_m,Object.assign({"data-testid":s},{children:t(Tm,Object.assign({onClick:()=>ut(void 0,void 0,void 0,(function*(){if(p&&!f){m(!0);try{v(!1),yield i(n)}catch(e){v(!0)}finally{m(!1)}}}))},{children:[(()=>{let n;return n=t(r,h?{children:[e(Hm,Object.assign({"data-testid":`${s}-thumbnail`},{children:e(Ym,{"data-testid":`${s}-thumbnail-image`,src:h})})),t(Am,{children:[e(Mm,{children:D()}),e(Bm,{children:y||"-"}),b&&e(Pm,{children:d||"Something went wrong"})]})]}:{children:[e(Mm,{children:D()}),e(Bm,{children:y||"-"}),b&&e(Pm,{children:d||"Something went wrong"})]}),e(Fm,Object.assign({$hasThumbnail:!!h},{children:n}))})(),e(Nm,{children:e(Wm,Object.assign({"data-testid":`${s}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${l}`},{children:f||!p?e(Lm,{size:16,"aria-hidden":!0}):e(Q,{"aria-hidden":!0})}))})]}))}))})),Um=({id:r,fileItems:n,title:i,description:o,onDownload:a,"data-testid":s,className:l,styleType:c="bordered"})=>{const d=e=>ut(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return t($m,Object.assign({id:r?`${r}-file-download`:"file-download",className:l,"data-testid":s,$border:"bordered"===c},{children:[(i||o)&&t(wm,{children:[i?e("string"==typeof i?Cm:Sm,{children:i}):null,o?e("string"==typeof o?km:Om,{children:o}):null]}),e(Dm,{children:n&&n.length>0&&n.map((t=>e(Vm,{fileItem:t,onDownload:d},t.id)))})]}))},Xm=w({activeId:void 0,setActiveId:void 0});var Km,qm={exports:{}},Gm={exports:{}},Zm={};var Qm,Jm,eb,tb,rb,nb,ib,ob,ab,sb,lb,cb,db,ub,hb={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function gb(){return Jm||(Jm=1,"production"===process.env.NODE_ENV?Gm.exports=function(){if(Km)return Zm;Km=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:switch(e=e.type){case l:case c:case n:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case g:case a:return e;default:return h}}case r:return h}}}function x(e){return y(e)===c}return Zm.AsyncMode=l,Zm.ConcurrentMode=c,Zm.ContextConsumer=s,Zm.ContextProvider=a,Zm.Element=t,Zm.ForwardRef=d,Zm.Fragment=n,Zm.Lazy=p,Zm.Memo=g,Zm.Portal=r,Zm.Profiler=o,Zm.StrictMode=i,Zm.Suspense=u,Zm.isAsyncMode=function(e){return x(e)||y(e)===l},Zm.isConcurrentMode=x,Zm.isContextConsumer=function(e){return y(e)===s},Zm.isContextProvider=function(e){return y(e)===a},Zm.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Zm.isForwardRef=function(e){return y(e)===d},Zm.isFragment=function(e){return y(e)===n},Zm.isLazy=function(e){return y(e)===p},Zm.isMemo=function(e){return y(e)===g},Zm.isPortal=function(e){return y(e)===r},Zm.isProfiler=function(e){return y(e)===o},Zm.isStrictMode=function(e){return y(e)===i},Zm.isSuspense=function(e){return y(e)===u},Zm.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},Zm.typeOf=y,Zm}():Gm.exports=(Qm||(Qm=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:var f=e.type;switch(f){case l:case c:case n:case o:case i:case u:return f;default:var m=f&&f.$$typeof;switch(m){case s:case d:case p:case g:case a:return m;default:return h}}case r:return h}}}var x=l,$=c,w=s,C=a,S=t,k=d,O=n,D=p,j=g,E=r,_=o,T=i,F=u,M=!1;function A(e){return y(e)===c}hb.AsyncMode=x,hb.ConcurrentMode=$,hb.ContextConsumer=w,hb.ContextProvider=C,hb.Element=S,hb.ForwardRef=k,hb.Fragment=O,hb.Lazy=D,hb.Memo=j,hb.Portal=E,hb.Profiler=_,hb.StrictMode=T,hb.Suspense=F,hb.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},hb.isConcurrentMode=A,hb.isContextConsumer=function(e){return y(e)===s},hb.isContextProvider=function(e){return y(e)===a},hb.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},hb.isForwardRef=function(e){return y(e)===d},hb.isFragment=function(e){return y(e)===n},hb.isLazy=function(e){return y(e)===p},hb.isMemo=function(e){return y(e)===g},hb.isPortal=function(e){return y(e)===r},hb.isProfiler=function(e){return y(e)===o},hb.isStrictMode=function(e){return y(e)===i},hb.isSuspense=function(e){return y(e)===u},hb.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},hb.typeOf=y}()),hb)),Gm.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function pb(){if(tb)return eb;tb=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return eb=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(n,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},eb}function fb(){if(nb)return rb;nb=1;return rb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function mb(){return ob?ib:(ob=1,ib=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var bb=gb();qm.exports=function(){if(cb)return lb;cb=1;var e=gb(),t=pb(),r=fb(),n=mb(),i=function(){if(sb)return ab;sb=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=fb(),r={},n=mb();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(n(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var h=l?l():"";e("Failed "+a+" type: "+d.message+(null!=h?h:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},ab=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),lb=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:f(a),arrayOf:function(e){return f((function(t,n,i,o,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+o+" `"+a+"` of type `"+y(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:f((function(e,t,r,n,i){var o=e[t];return s(o)?null:new p("Invalid "+n+" `"+i+"` of type `"+y(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:f((function(t,r,n,i,o){var a=t[r];return e.isValidElementType(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:f((function(e,t,r,n,i){return v(e[t])?null:new p("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,i,o,a,s){if("function"!=typeof e)return new p("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=y(l);if("object"!==c)return new p("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,o,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?f((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(g(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(i)+" at index "+t+"."),a}return f((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return f((function(t,n,i,o,a){var s=t[n],l=y(s);if("object"!==l)return new p("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(i,o,a,c,x(d));var u=d(s,c,i,o,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return f((function(i,o,a,s,l){var c=i[o],d=y(c);if("object"!==d)return new p("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var h in u){var g=e[h];if(n(e,h)&&"function"!=typeof g)return b(a,s,l,h,x(g));if(!g)return new p("Invalid "+s+" `"+l+"` key `"+h+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=g(c,h,a,s,l+"."+h,r);if(f)return f}return null}))}};function g(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function f(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function i(i,a,s,c,d,h,g){if(c=c||u,h=h||s,g!==r){if(l){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(o("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?i?null===a[s]?new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,d,h)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function m(e){return f((function(t,r,n,i,o,a){var s=t[r];return y(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e[d]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!v(r.value))return!1}else for(;!(r=n.next()).done;){var i=r.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=i,h.resetWarningCache=i.resetWarningCache,h.PropTypes=h,h},lb}()(bb.isElement,!0)}else qm.exports=function(){if(ub)return db;ub=1;var e=fb();function t(){}function r(){}return r.resetWarningCache=t,db=function(){function n(t,r,n,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o}}()();var vb=Uo(qm.exports),yb=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function xb(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=yb.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var $b=[".DS_Store","Thumbs.db"];function wb(e){return"object"==typeof e&&null!==e}function Cb(e){return Db(e.target.files).map((function(e){return xb(e)}))}function Sb(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return xb(e)}))]}}))}))}function kb(e,t){return ut(this,void 0,void 0,(function(){var r;return ht(this,(function(n){switch(n.label){case 0:return e.items?(r=Db(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(jb))]):[3,2];case 1:return[2,Ob(Eb(n.sent()))];case 2:return[2,Ob(Db(e.files).map((function(e){return xb(e)})))]}}))}))}function Ob(e){return e.filter((function(e){return-1===$b.indexOf(e.name)}))}function Db(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function jb(e){if("function"!=typeof e.webkitGetAsEntry)return _b(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Fb(t):_b(e)}function Eb(e){return e.reduce((function(e,t){return pt(pt([],gt(e),!1),gt(Array.isArray(t)?Eb(t):[t]),!1)}),[])}function _b(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=xb(t);return Promise.resolve(r)}function Tb(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){return[2,e.isDirectory?Fb(e):Mb(e)]}))}))}function Fb(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function i(){var o=this;t.readEntries((function(t){return ut(o,void 0,void 0,(function(){var o,a,s;return ht(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(Tb)),n.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function Mb(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=xb(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}var Ab=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0};function Bb(e){return function(e){if(Array.isArray(e))return Nb(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Lb(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ib(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function zb(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ib(Object(r),!0).forEach((function(t){Rb(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ib(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Rb(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Pb(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||Lb(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Lb(e,t){if(e){if("string"==typeof e)return Nb(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Nb(e,t):void 0}}function Nb(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Wb=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Hb=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Yb=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Vb={code:"too-many-files",message:"Too many files"};function Ub(e,t){var r="application/x-moz-file"===e.type||Ab(e,t);return[r,r?null:Wb(t)]}function Xb(e,t,r){if(Kb(e.size))if(Kb(t)&&Kb(r)){if(e.size>r)return[!1,Hb(r)];if(e.size<t)return[!1,Yb(t)]}else{if(Kb(t)&&e.size<t)return[!1,Yb(t)];if(Kb(r)&&e.size>r)return[!1,Hb(r)]}return[!0,null]}function Kb(e){return null!=e}function qb(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Gb(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Zb(e){e.preventDefault()}function Qb(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return t.some((function(t){return!qb(e)&&t&&t.apply(void 0,[e].concat(n)),qb(e)}))}}function Jb(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function ev(e){return/^.*\.[\w]+$/.test(e)}var tv=["children"],rv=["open"],nv=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],iv=["refKey","onChange","onClick"];function ov(e){return function(e){if(Array.isArray(e))return lv(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||sv(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function av(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||sv(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function sv(e,t){if(e){if("string"==typeof e)return lv(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?lv(e,t):void 0}}function lv(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function cv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function dv(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?cv(Object(r),!0).forEach((function(t){uv(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cv(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function uv(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function hv(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var gv=g((function(e,t){var r=e.children,n=mv(hv(e,tv)),o=n.open,a=hv(n,rv);return b(t,(function(){return{open:o}}),[o]),i.createElement(C,null,r(dv(dv({},a),{},{open:o})))}));gv.displayName="Dropzone";var pv={disabled:!1,getFilesFromEvent:function(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){return wb(e)&&wb(e.dataTransfer)?[2,kb(e.dataTransfer,e.type)]:function(e){return wb(e)&&wb(e.target)}(e)?[2,Cb(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,Sb(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};gv.defaultProps=pv,gv.propTypes={children:vb.func,accept:vb.objectOf(vb.arrayOf(vb.string)),multiple:vb.bool,preventDropOnDocument:vb.bool,noClick:vb.bool,noKeyboard:vb.bool,noDrag:vb.bool,noDragEventsBubbling:vb.bool,minSize:vb.number,maxSize:vb.number,maxFiles:vb.number,disabled:vb.bool,getFilesFromEvent:vb.func,onFileDialogCancel:vb.func,onFileDialogOpen:vb.func,useFsAccessApi:vb.bool,autoFocus:vb.bool,onDragEnter:vb.func,onDragLeave:vb.func,onDragOver:vb.func,onDrop:vb.func,onDropAccepted:vb.func,onDropRejected:vb.func,onError:vb.func,validator:vb.func};var fv={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function mv(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=dv(dv({},pv),e),r=t.accept,n=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,s=t.minSize,l=t.multiple,c=t.maxFiles,d=t.onDragEnter,h=t.onDragLeave,g=t.onDragOver,f=t.onDrop,b=t.onDropAccepted,v=t.onDropRejected,y=t.onFileDialogCancel,$=t.onFileDialogOpen,w=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,k=t.noClick,O=t.noKeyboard,D=t.noDrag,j=t.noDragEventsBubbling,E=t.onError,_=t.validator,T=m((function(){return function(e){if(Kb(e))return Object.entries(e).reduce((function(e,t){var r=Pb(t,2),n=r[0],i=r[1];return[].concat(Bb(e),[n],Bb(i))}),[]).filter((function(e){return Jb(e)||ev(e)})).join(",")}(r)}),[r]),F=m((function(){return function(e){return Kb(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Pb(e,2),r=t[0],n=t[1],i=!0;return Jb(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(n)&&n.every(ev)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var r=Pb(t,2),n=r[0],i=r[1];return zb(zb({},e),{},Rb({},n,i))}),{})}]:e}(r)}),[r]),M=m((function(){return"function"==typeof $?$:vv}),[$]),A=m((function(){return"function"==typeof y?y:vv}),[y]),B=o(null),I=o(null),z=av(x(bv,fv),2),R=z[0],P=z[1],L=R.isFocused,N=R.isFileDialogActive,W=o("undefined"!=typeof window&&window.isSecureContext&&w&&"showOpenFilePicker"in window),H=function(){!W.current&&N&&setTimeout((function(){I.current&&(I.current.files.length||(P({type:"closeDialog"}),A()))}),300)};u((function(){return window.addEventListener("focus",H,!1),function(){window.removeEventListener("focus",H,!1)}}),[I,N,A,W]);var Y=o([]),V=function(e){B.current&&B.current.contains(e.target)||(e.preventDefault(),Y.current=[])};u((function(){return S&&(document.addEventListener("dragover",Zb,!1),document.addEventListener("drop",V,!1)),function(){S&&(document.removeEventListener("dragover",Zb),document.removeEventListener("drop",V))}}),[B,S]),u((function(){return!n&&C&&B.current&&B.current.focus(),function(){}}),[B,C,n]);var U=p((function(e){E?E(e):console.error(e)}),[E]),X=p((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[].concat(ov(Y.current),[e.target]),Gb(e)&&Promise.resolve(i(e)).then((function(t){if(!qb(e)||j){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=Pb(Ub(e,r),1)[0],o=Pb(Xb(e,n,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:T,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:_});P({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return U(e)}))}),[i,d,U,j,T,s,a,l,c,_]),K=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=Gb(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&g&&g(e),!1}),[g,j]),q=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=Y.current.filter((function(e){return B.current&&B.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),Y.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Gb(e)&&h&&h(e))}),[B,h,j]),G=p((function(e,t){var r=[],n=[];e.forEach((function(e){var t=av(Ub(e,T),2),i=t[0],o=t[1],l=av(Xb(e,s,a),2),c=l[0],d=l[1],u=_?_(e):null;if(i&&c&&!u)r.push(e);else{var h=[o,d];u&&(h=h.concat(u)),n.push({file:e,errors:h.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&c>=1&&r.length>c)&&(r.forEach((function(e){n.push({file:e,errors:[Vb]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:n,type:"setFiles"}),f&&f(r,n,t),n.length>0&&v&&v(n,t),r.length>0&&b&&b(r,t)}),[P,l,T,s,a,c,f,b,v,_]),Z=p((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[],Gb(e)&&Promise.resolve(i(e)).then((function(t){qb(e)&&!j||G(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[i,G,U,j]),Q=p((function(){if(W.current){P({type:"openDialog"}),M();var e={multiple:l,types:F};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){G(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(W.current=!1,I.current?(I.current.value=null,I.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else I.current&&(P({type:"openDialog"}),M(),I.current.value=null,I.current.click())}),[P,M,A,w,G,U,F,l]),J=p((function(e){B.current&&B.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),Q()))}),[B,Q]),ee=p((function(){P({type:"focus"})}),[]),te=p((function(){P({type:"blur"})}),[]),re=p((function(){k||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?Q():setTimeout(Q,0))}),[k,Q]),ne=function(e){return n?null:e},ie=function(e){return O?null:ne(e)},oe=function(e){return D?null:ne(e)},ae=function(e){j&&e.stopPropagation()},se=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,i=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,h=e.onDrop,g=hv(e,nv);return dv(dv(uv({onKeyDown:ie(Qb(o,J)),onFocus:ie(Qb(a,ee)),onBlur:ie(Qb(s,te)),onClick:ne(Qb(l,re)),onDragEnter:oe(Qb(c,X)),onDragOver:oe(Qb(d,K)),onDragLeave:oe(Qb(u,q)),onDrop:oe(Qb(h,Z)),role:"string"==typeof i&&""!==i?i:"presentation"},r,B),n||O?{}:{tabIndex:0}),g)}}),[B,J,ee,te,re,X,K,q,Z,O,D,n]),le=p((function(e){e.stopPropagation()}),[]),ce=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,i=e.onClick,o=hv(e,iv);return dv(dv({},uv({accept:T,multiple:l,type:"file",style:{display:"none"},onChange:ne(Qb(n,Z)),onClick:ne(Qb(i,le)),tabIndex:-1},r,I)),o)}}),[I,r,l,Z,n]);return dv(dv({},R),{},{isFocused:L&&!n,getRootProps:se,getInputProps:ce,rootRef:B,inputRef:I,open:ne(Q)})}function bv(e,t){switch(t.type){case"focus":return dv(dv({},e),{},{isFocused:!0});case"blur":return dv(dv({},e),{},{isFocused:!1});case"openDialog":return dv(dv({},fv),{},{isFileDialogActive:!0});case"closeDialog":return dv(dv({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return dv(dv({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return dv(dv({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return dv({},fv);default:return e}}function vv(){}const yv=T.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return F`
                ${dc["dashed-default"]({radius:hc.sm,thickness:dc["width-040"],colour:sc.border})}
                padding: ${uc["spacing-32"]};

                ${pc.MaxWidth.sm} {
                    padding: ${uc["spacing-32"]} ${uc["spacing-20"]};
                }
            `}}
`,xv=T.input`
    display: none;
`,$v=T.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${sc["bg-primary-subtler"]};
    ${dc["dashed-default"]({radius:hc.sm,thickness:dc["width-040"],colour:sc["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,wv=T(kc.BodyMD)`
    color: ${sc["text-primary"]};
    text-align: center;
`,Cv=T(Pe)`
    color: ${sc["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Sv=g((({children:r,accept:n,capture:i,multiple:a,id:s,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":g},p)=>{const f=o(),{getRootProps:m,isDragActive:v}=mv({onDrop:h,noClick:!0,disabled:u});b(p,(()=>Object.assign(Object.assign({},f.current),{openFileDialog:()=>{var e;f.current.value=null,null===(e=f.current)||void 0===e||e.click()}})));return t(yv,Object.assign({id:s,"data-testid":g||"dropzone",$border:d,className:l},m(),{children:[e(xv,{type:"file",name:c,ref:f,tabIndex:-1,"aria-hidden":!0,accept:n,capture:i,multiple:a,"data-testid":g?`${g}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),r,v&&t($v,{children:[e(Cv,{}),e(wv,Object.assign({weight:"semibold"},{children:"Drop files here"}))]})]}))}));const kv="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Ov(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Dv(e){return"nodeType"in e}function jv(e){var t,r;return e?Ov(e)?e:Dv(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Ev(e){const{Document:t}=jv(e);return e instanceof t}function _v(e){return!Ov(e)&&e instanceof jv(e).HTMLElement}function Tv(e){return e instanceof jv(e).SVGElement}function Fv(e){return e?Ov(e)?e.document:Dv(e)?Ev(e)?e:_v(e)||Tv(e)?e.ownerDocument:document:document:document}const Mv=kv?h:u;function Av(e){const t=o(e);return Mv((()=>{t.current=e})),p((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function Bv(e,t){void 0===t&&(t=[e]);const r=o(e);return Mv((()=>{r.current!==e&&(r.current=e)}),t),r}function Iv(e,t){const r=o();return m((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function zv(e){const t=Av(e),r=o(null),n=p((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function Rv(e){const t=o();return u((()=>{t.current=e}),[e]),t.current}let Pv={};function Lv(e,t){return m((()=>{if(t)return t;const r=null==Pv[e]?0:Pv[e]+1;return Pv[e]=r,e+"-"+r}),[e,t])}function Nv(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,i]of n){const n=t[r];null!=n&&(t[r]=n+e*i)}return t}),{...t})}}const Wv=Nv(1),Hv=Nv(-1);function Yv(e){if(!e)return!1;const{KeyboardEvent:t}=jv(e.target);return t&&e instanceof t}function Vv(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=jv(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Uv=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[Uv.Translate.toString(e),Uv.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),Xv="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Kv(e){return e.matches(Xv)?e:e.querySelector(Xv)}const qv={display:"none"};function Gv(e){let{id:t,value:r}=e;return i.createElement("div",{id:t,style:qv},r)}function Zv(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return i.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const Qv=w(null);const Jv={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},ey={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function ty(e){let{announcements:t=ey,container:r,hiddenTextDescribedById:n,screenReaderInstructions:o=Jv}=e;const{announce:s,announcement:l}=function(){const[e,t]=a("");return{announce:p((e=>{null!=e&&t(e)}),[]),announcement:e}}(),c=Lv("DndLiveRegion"),[d,h]=a(!1);if(u((()=>{h(!0)}),[]),function(e){const t=f(Qv);u((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(m((()=>({onDragStart(e){let{active:r}=e;s(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&s(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;s(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;s(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;s(t.onDragCancel({active:r,over:n}))}})),[s,t])),!d)return null;const g=i.createElement(i.Fragment,null,i.createElement(Gv,{id:n,value:o.draggable}),i.createElement(Zv,{id:c,announcement:l}));return r?E(g,r):g}var ry;function ny(){}function iy(e,t){return m((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(ry||(ry={}));const oy=Object.freeze({x:0,y:0});function ay(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function sy(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function ly(e){let{left:t,top:r,height:n,width:i}=e;return[{x:t,y:r},{x:t+i,y:r},{x:t,y:r+n},{x:t+i,y:r+n}]}function cy(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function dy(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-n,s=o-r;if(n<i&&r<o){const r=t.width*t.height,n=e.width*e.height,i=a*s;return Number((i/(r+n-i)).toFixed(4))}return 0}const uy=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=[];for(const e of n){const{id:n}=e,o=r.get(n);if(o){const r=dy(o,t);r>0&&i.push({id:n,data:{droppableContainer:e,value:r}})}}return i.sort(sy)};function hy(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:oy}function gy(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const py=gy(1);const fy={ignoreTransform:!1};function my(e,t){void 0===t&&(t=fy);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=jv(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:i,scaleY:o,x:a,y:s}=n,l=e.left-a-(1-i)*parseFloat(r),c=e.top-s-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:i,width:o,height:a,bottom:s,right:l}=r;return{top:n,left:i,width:o,height:a,bottom:s,right:l}}function by(e){return my(e,{ignoreTransform:!0})}function vy(e,t){const r=[];return e?function n(i){if(null!=t&&r.length>=t)return r;if(!i)return r;if(Ev(i)&&null!=i.scrollingElement&&!r.includes(i.scrollingElement))return r.push(i.scrollingElement),r;if(!_v(i)||Tv(i))return r;if(r.includes(i))return r;const o=jv(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=jv(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(i,o)&&r.push(i),function(e,t){return void 0===t&&(t=jv(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?r:n(i.parentNode)}(e):r}function yy(e){const[t]=vy(e,1);return null!=t?t:null}function xy(e){return kv&&e?Ov(e)?e:Dv(e)?Ev(e)||e===Fv(e).scrollingElement?window:_v(e)?e:null:null:null}function $y(e){return Ov(e)?e.scrollX:e.scrollLeft}function wy(e){return Ov(e)?e.scrollY:e.scrollTop}function Cy(e){return{x:$y(e),y:wy(e)}}var Sy;function ky(e){return!(!kv||!e)&&e===document.scrollingElement}function Oy(e){const t={x:0,y:0},r=ky(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Sy||(Sy={}));const Dy={x:.2,y:.2};function jy(e,t,r,n,i){let{top:o,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===i&&(i=Dy);const{isTop:c,isBottom:d,isLeft:u,isRight:h}=Oy(e),g={x:0,y:0},p={x:0,y:0},f=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+f?(g.y=Sy.Backward,p.y=n*Math.abs((t.top+f-o)/f)):!d&&l>=t.bottom-f&&(g.y=Sy.Forward,p.y=n*Math.abs((t.bottom-f-l)/f)),!h&&s>=t.right-m?(g.x=Sy.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(g.x=Sy.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:g,speed:p}}function Ey(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:i}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:i,width:e.clientWidth,height:e.clientHeight}}function _y(e){return e.reduce(((e,t)=>Wv(e,Cy(t))),oy)}const Ty=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+$y(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+wy(t)),0)}]];class Fy{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=vy(t),n=_y(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of Ty)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(r),a=n[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class My{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function Ay(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var By,Iy;function zy(e){e.preventDefault()}function Ry(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(By||(By={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(Iy||(Iy={}));const Py={start:[Iy.Space,Iy.Enter],cancel:[Iy.Esc],end:[Iy.Space,Iy.Enter]},Ly=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case Iy.Right:return{...r,x:r.x+25};case Iy.Left:return{...r,x:r.x-25};case Iy.Down:return{...r,y:r.y+25};case Iy.Up:return{...r,y:r.y-25}}};let Ny=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new My(Fv(t)),this.windowListeners=new My(jv(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(By.Resize,this.handleCancel),this.windowListeners.add(By.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(By.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=my),!e)return;const{top:r,left:n,bottom:i,right:o}=t(e);yy(e)&&(i<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(oy)}handleKeyDown(e){if(Yv(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:i=Py,coordinateGetter:o=Ly,scrollBehavior:a="smooth"}=n,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:oy;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=Hv(d,c),n={x:0,y:0},{scrollableAncestors:i}=r.current;for(const r of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:h}=Oy(r),g=Ey(r),p={x:Math.min(i===Iy.Right?g.right-g.width/2:g.right,Math.max(i===Iy.Right?g.left:g.left+g.width/2,d.x)),y:Math.min(i===Iy.Down?g.bottom-g.height/2:g.bottom,Math.max(i===Iy.Down?g.top:g.top+g.height/2,d.y))},f=i===Iy.Right&&!s||i===Iy.Left&&!l,m=i===Iy.Down&&!c||i===Iy.Up&&!o;if(f&&p.x!==d.x){const e=r.scrollLeft+t.x,o=i===Iy.Right&&e<=u.x||i===Iy.Left&&e>=h.x;if(o&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=o?r.scrollLeft-e:i===Iy.Right?r.scrollLeft-u.x:r.scrollLeft-h.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==d.y){const e=r.scrollTop+t.y,o=i===Iy.Down&&e<=u.y||i===Iy.Up&&e>=h.y;if(o&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=o?r.scrollTop-e:i===Iy.Down?r.scrollTop-u.y:r.scrollTop-h.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,Wv(Hv(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Wy(e){return Boolean(e&&"distance"in e)}function Hy(e){return Boolean(e&&"delay"in e)}Ny.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=Py,onActivation:i}=t,{active:o}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class Yy{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=jv(e);return e instanceof t?e:Fv(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=Fv(o),this.documentListeners=new My(this.document),this.listeners=new My(r),this.windowListeners=new My(jv(o)),this.initialCoordinates=null!=(n=Vv(i))?n:oy,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(By.Resize,this.handleCancel),this.windowListeners.add(By.DragStart,zy),this.windowListeners.add(By.VisibilityChange,this.handleCancel),this.windowListeners.add(By.ContextMenu,zy),this.documentListeners.add(By.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Hy(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Wy(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(By.Click,Ry,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(By.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!n)return;const s=null!=(t=Vv(e))?t:oy,l=Hv(n,s);if(!r&&a){if(Wy(a)){if(null!=a.tolerance&&Ay(l,a.tolerance))return this.handleCancel();if(Ay(l,a.distance))return this.handleStart()}return Hy(a)&&Ay(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Iy.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Vy={move:{name:"pointermove"},end:{name:"pointerup"}};class Uy extends Yy{constructor(e){const{event:t}=e,r=Fv(t.target);super(e,Vy,r)}}Uy.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const Xy={move:{name:"mousemove"},end:{name:"mouseup"}};var Ky;!function(e){e[e.RightClick=2]="RightClick"}(Ky||(Ky={}));let qy=class extends Yy{constructor(e){super(e,Xy,Fv(e.event.target))}};qy.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==Ky.RightClick&&(null==n||n({event:r}),!0)}}];const Gy={move:{name:"touchmove"},end:{name:"touchend"}};class Zy extends Yy{constructor(e){super(e,Gy)}static setup(){return window.addEventListener(Gy.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Gy.move.name,e)};function e(){}}}var Qy,Jy;function ex(e){let{acceleration:t,activator:r=Qy.Pointer,canScroll:n,draggingRect:i,enabled:a,interval:s=5,order:l=Jy.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:h,delta:g,threshold:f}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=Rv(t);return Iv((e=>{if(r||!n||!e)return tx;const i={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[Sy.Backward]:e.x[Sy.Backward]||-1===i.x,[Sy.Forward]:e.x[Sy.Forward]||1===i.x},y:{[Sy.Backward]:e.y[Sy.Backward]||-1===i.y,[Sy.Forward]:e.y[Sy.Forward]||1===i.y}}}),[r,t,n])}({delta:g,disabled:!a}),[v,y]=function(){const e=o(null);return[p(((t,r)=>{e.current=setInterval(t,r)}),[]),p((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=o({x:0,y:0}),$=o({x:0,y:0}),w=m((()=>{switch(r){case Qy.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Qy.DraggableRect:return i}}),[r,i,c]),C=o(null),S=p((()=>{const e=C.current;if(!e)return;const t=x.current.x*$.current.x,r=x.current.y*$.current.y;e.scrollBy(t,r)}),[]),k=m((()=>l===Jy.TreeOrder?[...d].reverse():d),[l,d]);u((()=>{if(a&&d.length&&w){for(const e of k){if(!1===(null==n?void 0:n(e)))continue;const r=d.indexOf(e),i=h[r];if(!i)continue;const{direction:o,speed:a}=jy(e,i,w,t,f);for(const e of["x","y"])b[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,s),x.current=a,void($.current=o)}x.current={x:0,y:0},$.current={x:0,y:0},y()}else y()}),[t,S,n,y,a,s,JSON.stringify(w),JSON.stringify(b),v,d,k,h,JSON.stringify(f)])}Zy.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:i}=r;return!(i.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Qy||(Qy={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Jy||(Jy={}));const tx={x:{[Sy.Backward]:!1,[Sy.Forward]:!1},y:{[Sy.Backward]:!1,[Sy.Forward]:!1}};var rx,nx;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(rx||(rx={})),function(e){e.Optimized="optimized"}(nx||(nx={}));const ix=new Map;function ox(e,t){return Iv((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function ax(e){let{callback:t,disabled:r}=e;const n=Av(t),i=m((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}function sx(e){return new Fy(my(e),e)}function lx(e,t,r){void 0===t&&(t=sx);const[n,i]=x((function(n){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=n?n:r)?i:null;const o=t(e);if(JSON.stringify(n)===JSON.stringify(o))return n;return o}),null),o=function(e){let{callback:t,disabled:r}=e;const n=Av(t),i=m((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){i();break}}}}),a=ax({callback:i});return Mv((()=>{i(),e?(null==a||a.observe(e),null==o||o.observe(document.body,{childList:!0,subtree:!0})):(null==a||a.disconnect(),null==o||o.disconnect())}),[e]),n}const cx=[];function dx(e,t){void 0===t&&(t=[]);const r=o(null);return u((()=>{r.current=null}),t),u((()=>{const t=e!==oy;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?Hv(e,r.current):oy}function ux(e){return m((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const hx=[];function gx(e){let{measure:t}=e;const[r,n]=a(null),i=p((e=>{for(const{target:r}of e)if(_v(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),o=ax({callback:i}),s=p((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return _v(t)?t:e}(e);null==o||o.disconnect(),r&&(null==o||o.observe(r)),n(r?t(r):null)}),[t,o]),[l,c]=zv(s);return m((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const px=[{sensor:Uy,options:{}},{sensor:Ny,options:{}}],fx={current:{}},mx={draggable:{measure:by},droppable:{measure:by,strategy:rx.WhileDragging,frequency:nx.Optimized},dragOverlay:{measure:my}};class bx extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const vx={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new bx,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ny},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:mx,measureDroppableContainers:ny,windowRect:null,measuringScheduled:!1},yx=w({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ny,draggableNodes:new Map,over:null,measureDroppableContainers:ny}),xx=w(vx);function $x(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new bx}}}function wx(e,t){switch(t.type){case ry.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case ry.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case ry.DragEnd:case ry.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case ry.RegisterDroppable:{const{element:r}=t,{id:n}=r,i=new bx(e.droppable.containers);return i.set(n,r),{...e,droppable:{...e.droppable,containers:i}}}case ry.SetDroppableDisabled:{const{id:r,key:n,disabled:i}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const a=new bx(e.droppable.containers);return a.set(r,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case ry.UnregisterDroppable:{const{id:r,key:n}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const o=new bx(e.droppable.containers);return o.delete(r),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Cx(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:i}=f(yx),o=Rv(n),a=Rv(null==r?void 0:r.id);return u((()=>{if(!t&&!n&&o&&null!=a){if(!Yv(o))return;if(document.activeElement===o.target)return;const e=i.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=Kv(e);if(t){t.focus();break}}}))}}),[n,t,i,a,o]),null}const Sx=w({...oy,scaleX:1,scaleY:1});var kx;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(kx||(kx={}));const Ox=$((function(e){var t,r,n,s;let{id:l,accessibility:c,autoScroll:d=!0,children:h,sensors:g=px,collisionDetection:f=uy,measuring:b,modifiers:v,...y}=e;const $=x(wx,void 0,$x),[w,C]=$,[S,k]=function(){const[e]=a((()=>new Set)),t=p((t=>(e.add(t),()=>e.delete(t))),[e]);return[p((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[O,D]=a(kx.Uninitialized),E=O===kx.Initialized,{draggable:{active:_,nodes:T,translate:F},droppable:{containers:M}}=w,A=_?T.get(_):null,B=o({initial:null,translated:null}),I=m((()=>{var e;return null!=_?{id:_,data:null!=(e=null==A?void 0:A.data)?e:fx,rect:B}:null}),[_,A]),z=o(null),[R,P]=a(null),[L,N]=a(null),W=Bv(y,Object.values(y)),H=Lv("DndDescribedBy",l),Y=m((()=>M.getEnabled()),[M]),V=function(e){return m((()=>({draggable:{...mx.draggable,...null==e?void 0:e.draggable},droppable:{...mx.droppable,...null==e?void 0:e.droppable},dragOverlay:{...mx.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(b),{droppableRects:U,measureDroppableContainers:X,measuringScheduled:K}=function(e,t){let{dragging:r,dependencies:n,config:i}=t;const[s,l]=a(null),{frequency:c,measure:d,strategy:h}=i,g=o(e),f=function(){switch(h){case rx.Always:return!1;case rx.BeforeDragging:return r;default:return!r}}(),m=Bv(f),b=p((function(e){void 0===e&&(e=[]),m.current||l((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=o(null),y=Iv((t=>{if(f&&!r)return ix;if(!t||t===ix||g.current!==e||null!=s){const t=new Map;for(let r of e){if(!r)continue;if(s&&s.length>0&&!s.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new Fy(d(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,s,r,f,d]);return u((()=>{g.current=e}),[e]),u((()=>{f||b()}),[r,f]),u((()=>{s&&s.length>0&&l(null)}),[JSON.stringify(s)]),u((()=>{f||"number"!=typeof c||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),c))}),[c,f,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=s}}(Y,{dragging:E,dependencies:[F.x,F.y],config:V.droppable}),q=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return Iv((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(T,_),G=m((()=>L?Vv(L):null),[L]),Z=function(){const e=!1===(null==R?void 0:R.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,r=E&&!e&&!t;if("object"==typeof d)return{...d,enabled:r};return{enabled:r}}(),Q=function(e,t){return ox(e,t)}(q,V.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:i=!0}=e;const a=o(!1),{x:s,y:l}="boolean"==typeof i?{x:i,y:i}:i;Mv((()=>{if(!s&&!l||!t)return void(a.current=!1);if(a.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const i=hy(r(e),n);if(s||(i.x=0),l||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){const t=yy(e);t&&t.scrollBy({top:i.y,left:i.x})}}),[t,s,l,n,r])}({activeNode:_?T.get(_):null,config:Z.layoutShiftCompensation,initialRect:Q,measure:V.draggable.measure});const J=lx(q,V.draggable.measure,Q),ee=lx(q?q.parentElement:null),te=o({activatorEvent:null,active:null,activeNode:q,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:M,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=M.getNodeFor(null==(t=te.current.over)?void 0:t.id),ne=gx({measure:V.dragOverlay.measure}),ie=null!=(r=ne.nodeRef.current)?r:q,oe=E?null!=(n=ne.rect)?n:J:null,ae=Boolean(ne.nodeRef.current&&ne.rect),se=hy(le=ae?null:J,ox(le));var le;const ce=ux(ie?jv(ie):null),de=function(e){const t=o(e),r=Iv((r=>e?r&&r!==cx&&e&&t.current&&e.parentNode===t.current.parentNode?r:vy(e):cx),[e]);return u((()=>{t.current=e}),[e]),r}(E?null!=re?re:q:null),ue=function(e,t){void 0===t&&(t=my);const[r]=e,n=ux(r?jv(r):null),[i,o]=x((function(){return e.length?e.map((e=>ky(e)?n:new Fy(t(e),e))):hx}),hx),a=ax({callback:o});return e.length>0&&i===hx&&o(),Mv((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),o())}),[e]),i}(de),he=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(v,{transform:{x:F.x-se.x,y:F.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:I,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:oe,over:te.current.over,overlayNodeRect:ne.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),ge=G?Wv(G,F):null,pe=function(e){const[t,r]=a(null),n=o(e),i=p((e=>{const t=xy(e.target);t&&r((e=>e?(e.set(t,Cy(t)),new Map(e)):null))}),[]);return u((()=>{const t=n.current;if(e!==t){o(t);const a=e.map((e=>{const t=xy(e);return t?(t.addEventListener("scroll",i,{passive:!0}),[t,Cy(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{o(e),o(t)};function o(e){e.forEach((e=>{const t=xy(e);null==t||t.removeEventListener("scroll",i)}))}}),[i,e]),m((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>Wv(e,t)),oy):_y(e):oy),[e,t])}(de),fe=dx(pe),me=dx(pe,[J]),be=Wv(he,fe),ve=oe?py(oe,he):null,ye=I&&ve?f({active:I,collisionRect:ve,droppableRects:U,droppableContainers:Y,pointerCoordinates:ge}):null,xe=cy(ye,"id"),[$e,we]=a(null),Ce=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(ae?he:Wv(he,me),null!=(s=null==$e?void 0:$e.rect)?s:null,J),Se=p(((e,t)=>{let{sensor:r,options:n}=t;if(null==z.current)return;const i=T.get(z.current);if(!i)return;const o=e.nativeEvent,a=new r({active:z.current,activeNode:i,event:o,options:n,context:te,onStart(e){const t=z.current;if(null==t)return;const r=T.get(t);if(!r)return;const{onDragStart:n}=W.current,i={active:{id:t,data:r.data,rect:B}};j((()=>{null==n||n(i),D(kx.Initializing),C({type:ry.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:i})}))},onMove(e){C({type:ry.DragMove,coordinates:e})},onEnd:s(ry.DragEnd),onCancel:s(ry.DragCancel)});function s(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:i}=te.current;let a=null;if(t&&i){const{cancelDrop:s}=W.current;if(a={activatorEvent:o,active:t,collisions:r,delta:i,over:n},e===ry.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=ry.DragCancel)}}z.current=null,j((()=>{C({type:e}),D(kx.Uninitialized),we(null),P(null),N(null);const t=e===ry.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=W.current[t];null==e||e(a),S({type:t,event:a})}}))}}j((()=>{P(a),N(e.nativeEvent)}))}),[T]),ke=p(((e,t)=>(r,n)=>{const i=r.nativeEvent,o=T.get(n);if(null!==z.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(r,t.options,a)&&(i.dndKit={capturedBy:t.sensor},z.current=n,Se(r,t))}),[T,Se]),Oe=function(e,t){return m((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(g,ke);!function(e){u((()=>{if(!kv)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(g),Mv((()=>{J&&O===kx.Initializing&&D(kx.Initialized)}),[J,O]),u((()=>{const{onDragMove:e}=W.current,{active:t,activatorEvent:r,collisions:n,over:i}=te.current;if(!t||!r)return;const o={active:t,activatorEvent:r,collisions:n,delta:{x:be.x,y:be.y},over:i};j((()=>{null==e||e(o),S({type:"onDragMove",event:o})}))}),[be.x,be.y]),u((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:i}=te.current;if(!e||null==z.current||!t||!i)return;const{onDragOver:o}=W.current,a=n.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:r,delta:{x:i.x,y:i.y},over:s};j((()=>{we(s),null==o||o(l),S({type:"onDragOver",event:l})}))}),[xe]),Mv((()=>{te.current={activatorEvent:L,active:I,activeNode:q,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:T,draggingNode:ie,draggingNodeRect:oe,droppableContainers:M,over:$e,scrollableAncestors:de,scrollAdjustedTranslate:be},B.current={initial:oe,translated:ve}}),[I,q,ye,ve,T,ie,oe,U,M,$e,de,be]),ex({...Z,delta:F,draggingRect:ve,pointerCoordinates:ge,scrollableAncestors:de,scrollableAncestorRects:ue});const De=m((()=>({active:I,activeNode:q,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:ne,draggableNodes:T,droppableContainers:M,droppableRects:U,over:$e,measureDroppableContainers:X,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:V,measuringScheduled:K,windowRect:ce})),[I,q,J,L,ye,ee,ne,T,M,U,$e,X,de,ue,V,K,ce]),je=m((()=>({activatorEvent:L,activators:Oe,active:I,activeNodeRect:J,ariaDescribedById:{draggable:H},dispatch:C,draggableNodes:T,over:$e,measureDroppableContainers:X})),[L,Oe,I,J,C,H,T,$e,X]);return i.createElement(Qv.Provider,{value:k},i.createElement(yx.Provider,{value:je},i.createElement(xx.Provider,{value:De},i.createElement(Sx.Provider,{value:Ce},h)),i.createElement(Cx,{disabled:!1===(null==c?void 0:c.restoreFocus)})),i.createElement(ty,{...c,hiddenTextDescribedById:H}))})),Dx=w(null),jx="button",Ex="Droppable";function _x(e){let{id:t,data:r,disabled:n=!1,attributes:i}=e;const o=Lv(Ex),{activators:a,activatorEvent:s,active:l,activeNodeRect:c,ariaDescribedById:d,draggableNodes:u,over:h}=f(yx),{role:g=jx,roleDescription:p="draggable",tabIndex:b=0}=null!=i?i:{},v=(null==l?void 0:l.id)===t,y=f(v?Sx:Dx),[x,$]=zv(),[w,C]=zv(),S=function(e,t){return m((()=>e.reduce(((e,r)=>{let{eventName:n,handler:i}=r;return e[n]=e=>{i(e,t)},e}),{})),[e,t])}(a,t),k=Bv(r);Mv((()=>(u.set(t,{id:t,key:o,node:x,activatorNode:w,data:k}),()=>{const e=u.get(t);e&&e.key===o&&u.delete(t)})),[u,t]);return{active:l,activatorEvent:s,activeNodeRect:c,attributes:m((()=>({role:g,tabIndex:b,"aria-disabled":n,"aria-pressed":!(!v||g!==jx)||void 0,"aria-roledescription":p,"aria-describedby":d.draggable})),[n,g,b,v,p,d.draggable]),isDragging:v,listeners:n?void 0:S,node:x,over:h,setNodeRef:$,setActivatorNodeRef:C,transform:y}}const Tx="Droppable",Fx={timeout:25};function Mx(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function Ax(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function Bx(e){return null!==e&&e>=0}const Ix=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const o=Mx(t,n,r),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},zx={scaleX:1,scaleY:1},Rx=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[r])?t:n;if(!s)return null;if(i===r){const e=o[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...zx}:null}const l=function(e,t,r){const n=e[t],i=e[t-1],o=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):o?o.top-(n.top+n.height):0;return o?o.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(o,i,r);return i>r&&i<=a?{x:0,y:-s.height-l,...zx}:i<r&&i>=a?{x:0,y:s.height+l,...zx}:{x:0,y:0,...zx}};const Px="Sortable",Lx=i.createContext({activeIndex:-1,containerId:Px,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ix,disabled:{draggable:!1,droppable:!1}});function Nx(e){let{children:t,id:r,items:n,strategy:a=Ix,disabled:s=!1}=e;const{active:l,dragOverlay:c,droppableRects:d,over:h,measureDroppableContainers:g}=f(xx),p=Lv(Px,r),b=Boolean(null!==c.rect),v=m((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=l,x=l?v.indexOf(l.id):-1,$=h?v.indexOf(h.id):-1,w=o(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,w.current),S=-1!==$&&-1===x||C,k=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(s);Mv((()=>{C&&y&&g(v)}),[C,v,y,g]),u((()=>{w.current=v}),[v]);const O=m((()=>({activeIndex:x,containerId:p,disabled:k,disableTransforms:S,items:v,overIndex:$,useDragOverlay:b,sortedRects:Ax(v,d),strategy:a})),[x,p,k.draggable,k.droppable,S,v,$,d,b,a]);return i.createElement(Lx.Provider,{value:O},t)}const Wx=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return Mx(r,n,i).indexOf(t)},Hx=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===o||i!==a)&&(!!r||a!==i&&t===l))},Yx={duration:200,easing:"ease"},Vx="transform",Ux=Uv.Transition.toString({property:Vx,duration:0,easing:"linear"}),Xx={roleDescription:"sortable"};function Kx(e){let{animateLayoutChanges:t=Hx,attributes:r,disabled:n,data:i,getNewIndex:s=Wx,id:l,strategy:c,resizeObserverConfig:d,transition:h=Yx}=e;const{items:g,containerId:b,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:$,overIndex:w,useDragOverlay:C,strategy:S}=f(Lx),k=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),O=g.indexOf(l),D=m((()=>({sortable:{containerId:b,index:O,items:g},...i})),[b,i,O,g]),j=m((()=>g.slice(g.indexOf(l))),[g,l]),{rect:E,node:_,isOver:T,setNodeRef:F}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:i}=e;const a=Lv(Tx),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=f(yx),h=o({disabled:r}),g=o(!1),m=o(null),b=o(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...Fx,...i},$=Bv(null!=y?y:n),w=ax({callback:p((()=>{g.current?(null!=b.current&&clearTimeout(b.current),b.current=setTimeout((()=>{d(Array.isArray($.current)?$.current:[$.current]),b.current=null}),x)):g.current=!0}),[x]),disabled:v||!s}),C=p(((e,t)=>{w&&(t&&(w.unobserve(t),g.current=!1),e&&w.observe(e))}),[w]),[S,k]=zv(C),O=Bv(t);return u((()=>{w&&S.current&&(w.disconnect(),g.current=!1,w.observe(S.current))}),[S,w]),Mv((()=>(l({type:ry.RegisterDroppable,element:{id:n,key:a,disabled:r,node:S,rect:m,data:O}}),()=>l({type:ry.UnregisterDroppable,key:a,id:n}))),[n]),u((()=>{r!==h.current.disabled&&(l({type:ry.SetDroppableDisabled,id:n,key:a,disabled:r}),h.current.disabled=r)}),[n,a,r,l]),{active:s,rect:m,isOver:(null==c?void 0:c.id)===n,node:S,over:c,setNodeRef:k}}({id:l,data:D,disabled:k.droppable,resizeObserverConfig:{updateMeasurementsFor:j,...d}}),{active:M,activatorEvent:A,activeNodeRect:B,attributes:I,setNodeRef:z,listeners:R,isDragging:P,over:L,setActivatorNodeRef:N,transform:W}=_x({id:l,data:D,attributes:{...Xx,...r},disabled:k.draggable}),H=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m((()=>e=>{t.forEach((t=>t(e)))}),t)}(F,z),Y=Boolean(M),V=Y&&!x&&Bx(v)&&Bx(w),U=!C&&P,X=U&&V?W:null,K=V?null!=X?X:(null!=c?c:S)({rects:$,activeNodeRect:B,activeIndex:v,overIndex:w,index:O}):null,q=Bx(v)&&Bx(w)?s({id:l,items:g,activeIndex:v,overIndex:w}):O,G=null==M?void 0:M.id,Z=o({activeId:G,items:g,newIndex:q,containerId:b}),Q=g!==Z.current.items,J=t({active:M,containerId:b,isDragging:P,isSorting:Y,id:l,index:O,items:g,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:i}=e;const[s,l]=a(null),c=o(r);return Mv((()=>{if(!t&&r!==c.current&&n.current){const e=i.current;if(e){const t=my(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&l(r)}}r!==c.current&&(c.current=r)}),[t,r,n,i]),u((()=>{s&&l(null)}),[s]),s}({disabled:!J,index:O,node:_,rect:E});return u((()=>{Y&&Z.current.newIndex!==q&&(Z.current.newIndex=q),b!==Z.current.containerId&&(Z.current.containerId=b),g!==Z.current.items&&(Z.current.items=g)}),[Y,q,b,g]),u((()=>{if(G===Z.current.activeId)return;if(G&&!Z.current.activeId)return void(Z.current.activeId=G);const e=setTimeout((()=>{Z.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:M,activeIndex:v,attributes:I,data:D,rect:E,index:O,newIndex:q,items:g,isOver:T,isSorting:Y,isDragging:P,listeners:R,node:_,overIndex:w,over:L,setNodeRef:H,setActivatorNodeRef:N,setDroppableNodeRef:F,setDraggableNodeRef:z,transform:null!=ee?ee:K,transition:function(){if(ee||Q&&Z.current.newIndex===O)return Ux;if(U&&!Yv(A)||!h)return;if(Y||J)return Uv.Transition.toString({...h,property:Vx});return}()}}function qx(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Gx=[Iy.Down,Iy.Right,Iy.Up,Iy.Left],Zx=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(Gx.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];o.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const o=i.get(r.id);if(o)switch(e.code){case Iy.Down:n.top<o.top&&t.push(r);break;case Iy.Up:n.top>o.top&&t.push(r);break;case Iy.Left:n.left>o.left&&t.push(r);break;case Iy.Right:n.left<o.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=ly(t),o=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=ly(n),a=i.reduce(((e,t,n)=>{return e+(i=r[n],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(ay)})({active:r,collisionRect:n,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=cy(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(r.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=vy(l).some(((e,t)=>s[t]!==e)),i=Qx(e,t),o=function(e,t){if(!qx(e)||!qx(t))return!1;if(!Qx(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!i?{x:0,y:0}:{x:o?n.width-a.width:0,y:o?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:Hv(d,c)}}}};function Qx(e,t){return!(!qx(e)||!qx(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class Jx extends qy{}Jx.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>e$(e.target)}];function e$(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Ny{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>e$(e.target)}];const t$=T.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,r$=T(kh)`
    color: ${sc.text};
    ${td({textSize:"body-md"})}

    ${pc.MaxWidth.sm} {
        display: none;
    }
`,n$=T(If)`
    padding: 3.5rem 1.25rem 2.5rem;
`,i$=T.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${sc.text};
    ${td({textSize:"body-md"})}
`,o$=n=>{var{children:i,visible:o,onMobileClose:a}=n,s=dt(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=A(),d=gc["sm-max"]({theme:c}),u=Sd.useMediaQuery({maxWidth:d}),h=()=>{a&&a()},g=()=>"string"==typeof i?e(kc.BodyMD,{children:i}):i;return t(r,{children:[o&&e(t$,Object.assign({"data-testid":l},s,{children:e(r$,{children:g()})})),u&&e(Mf,Object.assign({show:o,onOverlayClick:h},{children:e(n$,Object.assign({onClose:h},{children:e(i$,{children:g()})}))}))]})},a$=T.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,s$=n=>{var i,s,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:h,rootNode:g,customOffset:p,delay:f,onPopoverAppear:m,onPopoverDismiss:b}=n,v=dt(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=a(!1),$=o(),w=o(),C=A(),S=gc["sm-max"]({theme:C}),k=Sd.useMediaQuery({maxWidth:S}),{refs:O,floatingStyles:D,context:j}=ye({open:y,placement:u,whileElementsMounted:xe,middleware:[$e(null!=p?p:16),we(),Ce({limiter:Se()})],onOpenChange:e=>{x(e),y!==e&&R(e)}}),E=Dp(),_=k?"click":d,T=De(j,{ignoreMouse:"hover"===_}),F=je(j),M=Be(j,{enabled:"hover"===_,delay:{open:null!==(i=null==f?void 0:f.open)&&void 0!==i?i:0,close:null!==(s=null==f?void 0:f.close)&&void 0!==s?s:500}}),{getReferenceProps:B,getFloatingProps:I}=Ee([T,F,M]),z=()=>{x(!1),R(!1)},R=e=>{e&&m&&m(),!e&&b&&b()};return t(r,{children:[e(a$,Object.assign({ref:e=>{$.current=e,O.setReference(e)}},B({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:l})),y&&e(_e,Object.assign({root:g},{children:e(Te,Object.assign({context:j},{children:e("div",Object.assign({ref:e=>{w.current=e,O.setFloating(e)},style:Object.assign(Object.assign({},D),{outline:"none",zIndex:null!=h?h:E})},I(),{children:"function"==typeof c?c():e(o$,Object.assign({visible:!0,onMobileClose:z},{children:c}))}))}))}))]})},l$=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},c$=T.span`
    color: ${sc["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>l$(e)}

    &:hover,
    &:focus-visible {
        color: ${sc["text-hover"]};
        ${({$hoverStyle:e})=>l$(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,d$=T.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,u$=r=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=dt(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!i;return e(s$,Object.assign({},l,{children:t(c$,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info"},{children:[i,o&&e(d$,Object.assign({$standalone:!c},{children:o}))]}))}))},h$=T.div`
    padding-left: ${uc["spacing-4"]};
    display: inline;
`,g$=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e(h$,{children:e(u$,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=o?o:e(P,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},p$=T.label`
    color: ${sc["text-subtle"]};
    margin-bottom: ${uc["spacing-8"]};
    display: inline-block;

    ${td({textSize:"body-md"})}
    font-weight: ${lc.Spec["weight-semibold"]};
`,f$=T.p`
    ${lc["body-sm-semibold"]}
    color: ${sc["text-error"]};
    margin-top: ${uc["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,m$=T.span`
    ${lc["body-sm-regular"]}
    color: ${sc["text-subtler"]};
    display: block;
`,b$=r=>{var{children:n,addon:i,subtitle:o,"data-testid":a}=r,s=dt(r,["children","addon","subtitle","data-testid"]);return t(p$,Object.assign({},s,{children:[n,i&&i.type&&("popover"===i.type?e(g$,{addon:i}):null),"string"==typeof o?e(m$,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},v$=t=>e(f$,Object.assign({},t)),y$=F`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${uc["spacing-32"]};
    }
`,x$=T.div`
    ${y$}
`,$$=T(sf)`
    ${y$}
`,w$=T(gf)`
    ${y$}
`,C$=({label:r,errorMessage:n,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,"data-error-testid":y})=>{const x=!s&&(l||d||u)?"v2-grid":!s&&(h||g||p||f||m||b||v)?"grid":s||"flex",$=()=>y||(i?`${i}-error-message`:"error-message"),w=()=>!!n;const C=(e=>{switch(e){case"v2-grid":return w$;case"grid":return $$;case"flex":return x$}})(x);return t(C,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:d,desktopCols:u};case"grid":return{xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v};case"flex":return}})(x),{children:[r&&e(b$,"string"==typeof r?Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},{children:r}):Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},r)),(()=>{const e={"aria-invalid":w(),"aria-describedby":w()&&$()};return S.map(a,(t=>c(t,e)))})(),n&&e(f$,Object.assign({id:$(),tabIndex:0,"data-testid":$()},{children:n}))]}))};function S$(e,t){return S$=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S$(e,t)}function k$(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function O$(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function D$(e){return null!==e&&1===e.length?e[0]:e.slice()}function j$(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function E$(e,t){return _$(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function _$(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let T$=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),j$(r.getMouseEventMap())}))}k$(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=E$(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),j$(r.getKeyDownEventMap()),k$(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),j$(r.getMouseEventMap()),k$(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),j$(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:D$(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:D$(r.state.value)};return r.props.renderTrack(i,o)};let n=O$(t.value);n.length||(n=O$(t.defaultValue)),r.pendingResizeTimeouts=[];const o=[];for(let e=0;e<n.length;e+=1)n[e]=E$(n[e],t),o.push(e);return r.resizeObserver=null,r.resizeElementRef=i.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:o},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,S$(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=O$(e.value);return r.length?t.pending?null:{value:r.map((t=>E$(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return D$(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),a=Math.abs(e-i);a<t&&(t=a,r=o)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return E$(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),i=e[r],o=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],i=r[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),i=E$(this.calcValue(r),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=E$(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=E$(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,i=t[r];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,o&&n>1&&(e>i?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const o=n-i*r;t[e-1-i]>o&&(t[e-1-i]=o)}}(n,t,l,a)):e<i&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const e=n+i*r;t[i]<e&&(t[i]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,i;for(n=r,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=_$(i,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=_$(i,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](D$(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,o,a)},t}(i.Component);T$.displayName="ReactSlider",T$.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var F$=T$;const M$=T.div`
    isolation: isolate;
`,A$=T.div`
    margin-top: ${uc["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${uc["spacing-8"]};
`,B$=T.div`
    margin-bottom: ${uc["spacing-8"]};
`,I$=T(kc.BodyBL)`
    overflow-wrap: anywhere;
`,z$=T(F$)`
    height: 0.875rem;
`,R$=T.div`
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

        background-color: ${sc.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${dc["width-010"]} ${dc.solid}
            ${e=>e.$disabled?sc["border-selected-disabled"]:sc["border-strong"]};
        border-radius: 50%;
    }
`,P$=T.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${R$}:after {
        outline-offset: -1px;
        outline: ${dc["width-040"]} ${dc.solid}
            ${sc["border-selected"]};
    }
`,L$=T.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${hc.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||sc["border-strong"](e)};
`,N$=r=>{var{value:n,min:i=0,max:o=100,step:s=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:h,readOnly:g,ariaLabels:p,showSliderLabels:f,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:$,onChange:w,onChangeEnd:C}=r,S=dt(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[k,O]=a(j()),D=function(){const e=function(){const e=h||g?sc["border-disabled"]:sc["border-strong"],t=h||g?sc["border-selected-disabled"]:sc["border-selected"];if(1===c)return[t,e];const r=[];r.push(e);for(let e=0;e<c-1;e++)r.push(t);return r.push(e),r}();return new Array(c+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();u((()=>{n!==k&&O(j())}),[n]);function j(){if(n&&n.length===c)return n;const e=[];for(let t=0;t<c;t++)e.push(i+s*t);return e}const E=e=>$?$(e):t(I$,{children:[m,e,b]});return t(M$,Object.assign({},S,{children:[v&&e(B$,{children:(()=>{let e="";if(1===k.length)e=`${k[0]}`;else if(2===k.length)e=`${k[0]} - ${k[1]}`;else if(k.length>2){e=`${Math.min(...k)} - ${Math.max(...k)}`}return t(I$,{children:[y,e,x]})})()}),e(z$,{step:s,min:i,max:o,value:k,disabled:h||g,onChange:(e,t)=>{if("number"==typeof e){const t=[e];O(t),null==w||w(t)}else{if(t>-1&&k[t]===e[t])return;O(e),null==w||w(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];O(t),null==C||C(t)}else O(e),null==C||C(e)},minDistance:l,ariaLabel:p,renderThumb:(t,r)=>e(P$,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:h?void 0:t.tabIndex},{children:e(R$,{$disabled:h,$readOnly:g})})),renderTrack:(t,r)=>e(L$,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:D[r.index]}))}),f&&t(A$,{children:[e("div",{children:E(i)}),e("div",{children:E(o)})]})]}))},W$=T.div`
    display: flex;
    margin-bottom: ${uc["spacing-16"]};
    align-items: baseline;
`,H$=T.div`
    margin: 0 0.5rem;
`,Y$=T.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,V$=T.div`
    flex: 1;
    border-radius: ${hc.sm} ${hc.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=sc["bg-strongest"];return e.$disabled&&e.$selected?t=sc["bg-selected-stronger-disabled"]:e.$disabled?t=sc["bg-disabled"]:e.$selected&&(t=sc["bg-selected-stronger"]),F`
            background-color: ${t};
        `}}
`,U$=T(N$)`
    margin-top: -0.3125rem;
`,X$=n=>{var{bins:i=[],interval:o,disabled:s,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:h,rangeLabelSuffix:g,ariaLabels:p,onChange:f,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=dt(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const $=i.map((e=>e.count)),w=Math.max(...$),C=i.map((e=>e.minValue)),S=Math.max(...C),k=Math.min(...C),[O,D]=a(T()),j=m((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(S-k)/o+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===k+o*n));t?r.push(t):r.push({count:0,minValue:k+o*n})}return r}),[i,o]);u((()=>{c!==O&&D(T())}),[c]);const E=e=>{D(e),null==f||f(e)},_=e=>{D(e),null==b||b(e)};function T(){return null!=c?c:[k,k+o]}const F=e=>y?y(e):t(kc.BodyBL,{children:[h,e,g]});return t("div",Object.assign({},x,{children:[d&&t(W$,{children:[F(O[0]),e(H$,{children:"-"}),F(O[1])]}),j.every((e=>0===e.count))&&v?v():t(r,{children:[e(Y$,{children:j.map(((t,r)=>{const n=t.count/w;return e(V$,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=O[0]&&t.minValue<O[1],$disabled:s||l},r)}))}),e(U$,{min:k,max:S+o,step:o,minRange:o,numOfThumbs:2,value:O,disabled:s,readOnly:l,ariaLabels:p,onChange:E,onChangeEnd:_})]})]}))},K$=T(Vg)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${uc["spacing-16"]};
            padding-right: ${e.$showClear?0:uc["spacing-16"]};
        `}
`,q$=T(Ug)`
    height: auto;
    padding: ${uc["spacing-12"]} ${uc["spacing-16"]};

    cursor: pointer;
    color: ${sc.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${uc["spacing-12"]};
        `}
`,G$=T(Ie)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Z$=T.div`
    display: flex;
    width: 100%;
`,Q$=T(Hg)`
    display: flex;
    align-items: center;
    width: 100%;
`,J$=i.forwardRef(((n,i)=>{var{value:a,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:g,allowClear:p=!1,className:f,styleType:m="bordered"}=n,v=dt(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=o();b(i,(()=>y.current),[]);const x=hu({ref:y,formatter:e=>su.transformWithSpaces(e,s)}),$=e=>{h&&(C()?S(e):h(e))},w=()=>{g&&g(),y&&y.current&&y.current.focus()},C=()=>"tel"===l&&s,S=e=>{const{nextValue:t,updateCaretPosition:r}=x(),n=t.replace(/\s/g,"");e.target.value=n,h(e),r()},k=a?(e=>e?C()?su.transformWithSpaces(e,s):e:"")(a):a,O=p&&!d&&!u&&!!a,D=()=>t(r,{children:[e(K$,Object.assign({"data-testid":"input",ref:y,disabled:d,value:k,onChange:$,type:l,readOnly:u,$showClear:O,$styleType:m},v)),O&&e(q$,Object.assign({onClick:w,type:"button",$styleType:m},{children:e(G$,{"aria-hidden":!0})}))]});return e(r,{children:"no-border"===m?e(Z$,Object.assign({className:f},{children:D()})):e(Q$,Object.assign({$disabled:d,$error:c,$readOnly:u,className:f},{children:D()}))})})),ew=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v},{children:e(J$,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:r,error:!!i},y))}))}));var tw=js;var rw=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var nw=function(e){return this.__data__.get(e)};var iw=function(e){return this.__data__.has(e)},ow=js,aw=Es,sw=qs;var lw=function(e,t){var r=this.__data__;if(r instanceof ow){var n=r.__data__;if(!aw||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new sw(n)}return r.set(e,t),this.size=r.size,this},cw=js,dw=function(){this.__data__=new tw,this.size=0},uw=rw,hw=nw,gw=iw,pw=lw;function fw(e){var t=this.__data__=new cw(e);this.size=t.size}fw.prototype.clear=dw,fw.prototype.delete=uw,fw.prototype.get=hw,fw.prototype.has=gw,fw.prototype.set=pw;var mw=fw;var bw=qs,vw=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},yw=function(e){return this.__data__.has(e)};function xw(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new bw;++t<r;)this.add(e[t])}xw.prototype.add=xw.prototype.push=vw,xw.prototype.has=yw;var $w=function(e,t){return e.has(t)},ww=xw,Cw=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Sw=$w;var kw=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,g=2&r?new ww:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var p=e[u],f=t[u];if(n)var m=a?n(f,p,u,t,e,o):n(p,f,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(g){if(!Cw(t,(function(e,t){if(!Sw(g,t)&&(p===e||i(p,e,r,n,o)))return g.push(t)}))){h=!1;break}}else if(p!==f&&!i(p,f,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Ow=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Dw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},jw=Qo.Uint8Array,Ew=ds,_w=kw,Tw=Ow,Fw=Dw,Mw=Jo?Jo.prototype:void 0,Aw=Mw?Mw.valueOf:void 0;var Bw=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new jw(e),new jw(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ew(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Tw;case"[object Set]":var l=1&n;if(s||(s=Fw),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=_w(s(e),s(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(Aw)return Aw.call(e)==Aw.call(t)}return!1};var Iw=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},zw=Iw,Rw=Ko;var Pw=function(e,t,r){var n=t(e);return Rw(e)?n:zw(n,r(e))};var Lw=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},Nw=function(){return[]},Ww=Object.prototype.propertyIsEnumerable,Hw=Object.getOwnPropertySymbols,Yw=Hw?function(e){return null==e?[]:(e=Object(e),Lw(Hw(e),(function(t){return Ww.call(e,t)})))}:Nw;var Vw=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Uw=da,Xw=ua;var Kw=function(e){return Xw(e)&&"[object Arguments]"==Uw(e)},qw=ua,Gw=Object.prototype,Zw=Gw.hasOwnProperty,Qw=Gw.propertyIsEnumerable,Jw=Kw(function(){return arguments}())?Kw:function(e){return qw(e)&&Zw.call(e,"callee")&&!Qw.call(e,"callee")},eC={exports:{}};var tC=function(){return!1};!function(e,t){var r=Qo,n=tC,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(eC,eC.exports);var rC=eC.exports,nC=/^(?:0|[1-9]\d*)$/;var iC=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&nC.test(e))&&e>-1&&e%1==0&&e<t};var oC=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},aC=da,sC=oC,lC=ua,cC={};cC["[object Float32Array]"]=cC["[object Float64Array]"]=cC["[object Int8Array]"]=cC["[object Int16Array]"]=cC["[object Int32Array]"]=cC["[object Uint8Array]"]=cC["[object Uint8ClampedArray]"]=cC["[object Uint16Array]"]=cC["[object Uint32Array]"]=!0,cC["[object Arguments]"]=cC["[object Array]"]=cC["[object ArrayBuffer]"]=cC["[object Boolean]"]=cC["[object DataView]"]=cC["[object Date]"]=cC["[object Error]"]=cC["[object Function]"]=cC["[object Map]"]=cC["[object Number]"]=cC["[object Object]"]=cC["[object RegExp]"]=cC["[object Set]"]=cC["[object String]"]=cC["[object WeakMap]"]=!1;var dC=function(e){return lC(e)&&sC(e.length)&&!!cC[aC(e)]};var uC=function(e){return function(t){return e(t)}},hC={exports:{}};!function(e,t){var r=qo,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(hC,hC.exports);var gC=hC.exports,pC=dC,fC=uC,mC=gC&&gC.isTypedArray,bC=mC?fC(mC):pC,vC=Vw,yC=Jw,xC=Ko,$C=rC,wC=iC,CC=bC,SC=Object.prototype.hasOwnProperty;var kC=function(e,t){var r=xC(e),n=!r&&yC(e),i=!r&&!n&&$C(e),o=!r&&!n&&!i&&CC(e),a=r||n||i||o,s=a?vC(e.length,String):[],l=s.length;for(var c in e)!t&&!SC.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||wC(c,l))||s.push(c);return s},OC=Object.prototype;var DC=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||OC)};var jC=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),EC=DC,_C=jC,TC=Object.prototype.hasOwnProperty;var FC=function(e){if(!EC(e))return _C(e);var t=[];for(var r in Object(e))TC.call(e,r)&&"constructor"!=r&&t.push(r);return t},MC=Sa,AC=oC;var BC=function(e){return null!=e&&AC(e.length)&&!MC(e)},IC=kC,zC=FC,RC=BC;var PC=function(e){return RC(e)?IC(e):zC(e)},LC=Pw,NC=Yw,WC=PC;var HC=function(e){return LC(e,WC,NC)},YC=Object.prototype.hasOwnProperty;var VC=function(e,t,r,n,i,o){var a=1&r,s=HC(e),l=s.length;if(l!=HC(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:YC.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var g=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var f=e[d=s[c]],m=t[d];if(n)var b=a?n(m,f,d,t,e,o):n(f,m,d,e,t,o);if(!(void 0===b?f===m||i(f,m,r,n,o):b)){g=!1;break}p||(p="constructor"==d)}if(g&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(g=!1)}return o.delete(e),o.delete(t),g},UC=Ha(Qo,"DataView"),XC=Es,KC=Ha(Qo,"Promise"),qC=Ha(Qo,"Set"),GC=Ha(Qo,"WeakMap"),ZC=da,QC=Ea,JC="[object Map]",eS="[object Promise]",tS="[object Set]",rS="[object WeakMap]",nS="[object DataView]",iS=QC(UC),oS=QC(XC),aS=QC(KC),sS=QC(qC),lS=QC(GC),cS=ZC;(UC&&cS(new UC(new ArrayBuffer(1)))!=nS||XC&&cS(new XC)!=JC||KC&&cS(KC.resolve())!=eS||qC&&cS(new qC)!=tS||GC&&cS(new GC)!=rS)&&(cS=function(e){var t=ZC(e),r="[object Object]"==t?e.constructor:void 0,n=r?QC(r):"";if(n)switch(n){case iS:return nS;case oS:return JC;case aS:return eS;case sS:return tS;case lS:return rS}return t});var dS=cS,uS=mw,hS=kw,gS=Bw,pS=VC,fS=dS,mS=Ko,bS=rC,vS=bC,yS="[object Arguments]",xS="[object Array]",$S="[object Object]",wS=Object.prototype.hasOwnProperty;var CS=function(e,t,r,n,i,o){var a=mS(e),s=mS(t),l=a?xS:fS(e),c=s?xS:fS(t),d=(l=l==yS?$S:l)==$S,u=(c=c==yS?$S:c)==$S,h=l==c;if(h&&bS(e)){if(!bS(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new uS),a||vS(e)?hS(e,t,r,n,i,o):gS(e,t,l,r,n,i,o);if(!(1&r)){var g=d&&wS.call(e,"__wrapped__"),p=u&&wS.call(t,"__wrapped__");if(g||p){var f=g?e.value():e,m=p?t.value():t;return o||(o=new uS),i(f,m,r,n,o)}}return!!h&&(o||(o=new uS),pS(e,t,r,n,i,o))},SS=ua;var kS=function e(t,r,n,i,o){return t===r||(null==t||null==r||!SS(t)&&!SS(r)?t!=t&&r!=r:CS(t,r,n,i,e,o))},OS=mw,DS=kS;var jS=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new OS;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?DS(d,c,3,n,u):h))return!1}}return!0},ES=xa;var _S=function(e){return e==e&&!ES(e)},TS=_S,FS=PC;var MS=function(e){for(var t=FS(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,TS(i)]}return t};var AS=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},BS=jS,IS=MS,zS=AS;var RS=function(e,t){return null!=e&&t in Object(e)},PS=fl,LS=Jw,NS=Ko,WS=iC,HS=oC,YS=bl;var VS=function(e,t,r){for(var n=-1,i=(t=PS(t,e)).length,o=!1;++n<i;){var a=YS(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&HS(i)&&WS(a,i)&&(NS(e)||LS(e))},US=RS,XS=VS;var KS=kS,qS=wl,GS=function(e,t){return null!=e&&XS(e,t,US)},ZS=ya,QS=_S,JS=AS,ek=bl;var tk=function(e){return function(t){return null==t?void 0:t[e]}},rk=xl;var nk=tk,ik=function(e){return function(t){return rk(t,e)}},ok=ya,ak=bl;var sk=function(e){var t=IS(e);return 1==t.length&&t[0][2]?zS(t[0][0],t[0][1]):function(r){return r===e||BS(r,e,t)}},lk=function(e,t){return ZS(e)&&QS(t)?JS(ek(e),t):function(r){var n=qS(r,e);return void 0===n&&n===t?GS(r,e):KS(t,n,3)}},ck=function(e){return e},dk=Ko,uk=function(e){return ok(e)?nk(ak(e)):ik(e)};var hk=function(e){return"function"==typeof e?e:null==e?ck:"object"==typeof e?dk(e)?lk(e[0],e[1]):sk(e):uk(e)},gk=hk,pk=BC,fk=PC;var mk=function(e){return function(t,r,n){var i=Object(t);if(!pk(t)){var o=gk(r);t=fk(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var bk=Uh,vk=1/0;var yk=function(e){return e?(e=bk(e))===vk||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var xk=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},$k=hk,wk=function(e){var t=yk(e),r=t%1;return t==t?r?t-r:t:0},Ck=Math.max;var Sk=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:wk(r);return i<0&&(i=Ck(n+i,0)),xk(e,$k(t),i)},kk=Uo(Sk),Ok=Uo(mk(Sk)),Dk=kS;var jk=Uo((function(e,t){return Dk(e,t)}));const Ek=T(Yo.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,_k=T.ul`
    border-bottom-left-radius: ${hc.sm};
    border-bottom-right-radius: ${hc.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${uc["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${sc["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${pc.MaxWidth.sm} {
        max-height: 15rem;
    }
`,Tk=T.li`
    :hover,
    :focus,
    :active {
        background: ${sc["bg-hover"]};
    }
    ${e=>{if(e.$checked)return F`
                background: ${sc["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${sc["bg-selected-hover"]};
                }
            `}}
`,Fk=T.button`
    display: flex;
    ${e=>e.$multiSelect?F`
                padding: ${uc["spacing-8"]} ${uc["spacing-16"]};
            `:F`
                padding: 15px ${uc["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${uc["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${sc["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,Mk=F`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Ak=T.div`
    ${e=>"small"===e.$variant?lc["body-md-regular"]:lc["body-baseline-regular"]}
    color: ${sc.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Mk}
`,Bk=T.div`
    color: ${sc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Mk}

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${lc["body-md-semibold"]}
                `:F`
                    ${lc["body-baseline-regular"]}
                `}
`,Ik=T.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${Ak} {
                        display: inline;
                    }

                    ${Bk} {
                        display: inline;
                        margin-left: ${uc["spacing-8"]};
                    }
                `}}}
`,zk=T.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Rk=T.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Pk=T(Ah)`
    flex-shrink: 0;
    margin-right: ${uc["spacing-16"]};
`,Lk=T.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${uc["spacing-16"]} 0 ${uc["spacing-8"]} 0;
`,Nk=T.button`
    ${e=>"small"===e.$variant?lc["body-md-semibold"]:lc["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${sc["text-primary"]};
`,Wk=T.div`
    width: 100%;
    display: flex;
    padding: 15px ${uc["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?lc["body-md-regular"]:lc["body-baseline-regular"]}
`,Hk=T(z)`
    height: 1em;
    width: 1em;
    margin-right: ${uc["spacing-4"]};
    color: ${sc["icon-error"]};
`,Yk=T(Hc)`
    margin-right: ${uc["spacing-4"]};
    color: ${sc.icon};
`,Vk=e=>"small"===e?1:1.375,Uk=e=>F`
        height: ${Vk(e)}rem;
        width: ${Vk(e)}rem;
    `,Xk=T.li`
    background: ${sc["bg-strong"]};
    display: flex;
    border-radius: ${hc.sm};
    align-items: center;
`,Kk=T(Vg)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${uc["spacing-8"]} 0 0;
    width: 100%;
`,qk=T(Le)`
    ${e=>Uk(e.$variant)}
    margin: 0 ${uc["spacing-8"]};
    color: ${sc.icon};
`,Gk=T(wc)`
    ${e=>Uk(e.$variant)}
    padding: 0;
    margin: 0 ${uc["spacing-8"]};
    color: ${sc.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return F`
                svg {
                    ${Uk(e.$variant)}
                }
            `}}
`,Zk=g(((r,n)=>{const{onClear:i}=r,o=dt(r,["onClear"]);return t(Xk,{children:[e(qk,{$variant:r.variant}),e(Kk,Object.assign({ref:n,$variant:r.variant},o)),o.value&&e(Gk,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:r.variant},{children:e(J,{})}))]},"search")})),Qk=n=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:g,searchPlaceholder:p="Search",onSearch:f,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:$,onRetry:w,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:k=2,labelDisplayType:O="inline",renderListItem:D,onBlur:j,hideNoResultsDisplay:E,renderCustomCallToAction:_,variant:T="default"}=n,F=dt(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=a(0),[B,I]=a(""),[z,R]=a(i),[P,L]=a(0),N=Oo({height:P}),W=o(),H=o(),Y=o([]),V=o(),U=o(),X=o(M),K=o(z),q=e=>{X.current=e,A(e)},G=e=>{K.current=e,R(e)};u((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),u((()=>{ee(B)}),[B]),u((()=>{if(I(""),h){if(setTimeout((()=>{L(te())})),v)return;V&&V.current?(V.current.focus(),q(-1)):Y.current[M]&&Y.current[M].focus()}else L(0)}),[h]),u((()=>{if(h){const e=te();L(e)}}),[z,C]),u((()=>{G(i),I(""),q(0)}),[i]);const Z=e=>s?s(e):e.toString(),Q=e=>{if("inline"!==O)return!1;let t=0;H&&H.current&&(t=H.current.getBoundingClientRect().width-60);return su.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!Ok(x,(t=>jk(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var r;const n=Z(t),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));G(t)}},te=()=>(H&&H.current?H.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{if(W&&W.current.contains(e.target))switch(e.code){case"ArrowDown":if(X.current<K.current.length-1){const e=X.current+1;Y.current[e].focus(),q(e)}break;case"ArrowUp":if(X.current>0){const e=X.current-1;Y.current[e].focus(),q(X.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;I(t),f&&f()},oe=()=>{I(""),V.current.focus(),f&&f()},ae=()=>{w&&w()},se=()=>{j&&j()},le=n=>t(r,{children:[e(zk,Object.assign({$maxLines:k,"aria-hidden":!0},{children:n})),e(Rk,Object.assign({$maxLines:k,"aria-hidden":!0},{children:n}))]}),ce=r=>{const n=Z(r),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel,a=Q(i),s=o&&Q(o),l=a||s?"next-line":O;return t(Ik,Object.assign({$labelDisplayType:l},{children:[e(Ak,Object.assign({$truncateType:S,$maxLines:k,$variant:T,"aria-label":i},{children:"middle"===S&&a?le(i):i})),o&&e(Bk,Object.assign({$truncateType:S,$maxLines:k,$labelDisplayType:O,"aria-label":o},{children:"middle"===S&&s?le(o):o}))]}))},de=()=>{if(!w||w&&"success"===C)return z.map(((r,n)=>e(Tk,Object.assign({$checked:J(r)&&!y},{children:t(Fk,Object.assign({$hasNextLineLabel:"next-line"===O&&z.length>0&&s&&"string"!=typeof s(z[0]),onClick:e=>{ne(e,r)},ref:e=>Y.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:y,onBlur:se,$variant:T},{children:[y&&e(Pk,{checked:J(r),displaySize:"small"}),D?D(r,{selected:J(r)}):ce(r)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},ue=()=>{if(y&&z.length>0&&!B&&"success"===C)return e(Lk,{children:e(Nk,Object.assign({onClick:$,type:"button",$variant:T},{children:0===x.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!E&&(B||!g)&&0===z.length&&"success"===C)return t(Wk,Object.assign({"data-testid":"list-no-results",$variant:T},{children:[e(Hk,{"data-testid":"no-result-icon",$variant:T}),"No results found."]}),"noResults")},ge=()=>{if(w&&"loading"===C)return t(Wk,Object.assign({"data-testid":"list-loading",$variant:T},{children:[e(Yk,{}),"Loading..."]}),"loading")},pe=()=>{if(w&&"fail"===C)return t(Wk,Object.assign({"data-testid":"list-fail",$variant:T},{children:[e(Hk,{"data-testid":"load-error-icon",$variant:T}),"Failed to load. ",e(Nk,Object.assign({onClick:ae,type:"button",$variant:T},{children:"Try again."}))]}),"noResults")};return e(r,{children:t(Ek,Object.assign({style:N,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:W},{children:[(()=>{if(h)return t(_k,Object.assign({ref:H,"data-testid":"dropdown-list",width:d,role:"list"},F,{children:[(g||m)&&"success"===C?e(Zk,{ref:V,onChange:ie,value:B,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:T}):null,ue(),he(),ge(),pe(),de()]}))})(),(()=>{if(h&&_)return e("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:_(b,z)}))})()]}))})},Jk=T.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return F`
                border-bottom: ${dc["width-010"]} ${dc.solid}
                    ${sc.border};
            `}}

    ${e=>e.$readOnly?F`
                border: 0;
                margin: 0;
            `:"right"===e.$position?F`
                        flex-direction: row-reverse;
                        margin: 0 ${uc["spacing-16"]};
                    `:F`
                        flex-direction: row;
                        margin: 0 ${uc["spacing-16"]};
                    `}
`,eO=T(bp)`
    padding: 0;
    width: auto;
`,tO=T.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${uc["spacing-12"]};
`,rO=T.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${cc["duration-250"]} ${cc["ease-default"]};
    margin: 0 ${uc["spacing-12"]};
    display: flex;
    align-items: center;
`,nO=T(fe)`
    color: ${sc.icon};
    height: ${lc.Spec["body-size-baseline"]};
    width: ${lc.Spec["body-size-baseline"]};
`,iO=T.div`
    display: flex;
    flex: 1 1 auto;
`,oO=T(kc.BodyBL)`
    text-align: left;
    ${Xg(2)}
    text-overflow: ellipsis;
`,aO=T(oO)`
    color: ${sc["text-subtler"]};
`,sO=T.div`
    width: 1px;
    background: ${sc.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return F`
                display: none;
            `}}

    ${e=>"right"===e.$position?F`
                    margin: 0 ${uc["spacing-12"]};
                `:F`
                    margin: 0 ${uc["spacing-12"]} 0 0;
                `}
`,lO=T(Hg)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${uc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,cO=T(Hg)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${uc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,dO=T(J$)``,uO=T.div`
    position: relative;
    display: flex;
    align-items: center;

    ${lc["body-baseline-regular"]}
    color: ${sc.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return F`
                color: ${sc["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${e.$readOnly?uc["spacing-4"]:uc["spacing-12"]};
                `:F`
                    margin-right: ${e.$readOnly?uc["spacing-4"]:uc["spacing-12"]};
                `};
`,hO=i.forwardRef(((n,i)=>{var{addon:s,error:l,onChange:c,readOnly:d,className:h,onBlur:g}=n,p=dt(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:f,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:$,displayValueExtractor:w,selectedOption:C,onSelectOption:S,onHideOptions:k,onShowOptions:O,"data-selector-testid":D}=s.attributes,{position:j}=s,[E,_]=a(C),[T,F]=a(!1),M=o();u((()=>{_(C)}),[C]);const A=()=>w?w(E):x?x(E):E.toString(),B=e=>{!e&&k&&k(),e&&O&&O()},I=e=>{e.preventDefault(),p.disabled||(F(!T),B(!T))},z=(e,t)=>{_(e),F(!1),B(!1),M&&M.current.focus(),S&&S(e,t)},R=e=>{c&&c(e)},P=()=>{g&&g()},L=()=>{F(!1),B(!1),M&&M.current.focus()};return t(kp,Object.assign({className:h,show:T,error:l&&!T,disabled:p.disabled,readOnly:d,onBlur:()=>{F(!1),B(!1),P()}},{children:[t(Jk,Object.assign({$expanded:T,$readOnly:d,$position:j},{children:[d?E?e(tO,{children:e(oO,Object.assign({"data-testid":"selector-label"},{children:A()}))}):null:e(eO,Object.assign({ref:M,type:"button",disabled:p.disabled,"data-testid":D||"addon-selector",onClick:I},{children:t(r,{children:[t(iO,{children:[f&&!E&&e(aO,{children:f}),E&&e(oO,Object.assign({"data-testid":"selector-label"},{children:A()}))]}),e(rO,Object.assign({$expanded:T},{children:e(nO,{})}))]})})),e(sO,{$readOnly:d,$position:j}),e(dO,Object.assign({ref:i},p,{readOnly:d,error:l,onChange:R,"data-testid":p["data-testid"]||"input",onBlur:P,styleType:"no-border"}))]})),m&&m.length>0?e(Qk,{listItems:m,selectedItems:C?[C]:[],onSelectItem:z,valueExtractor:x,listExtractor:$,visible:T,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:L}):null]}))})),gO=i.forwardRef(((r,n)=>{var{addon:i,error:o,className:a}=r,s=dt(r,["addon","error","className"]);const l=()=>e(cO,Object.assign({$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a},{children:e(dO,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))}));if(!i)return l();{const{type:r="label",position:c="left"}=i,{allowClear:d}=s;switch(r){case"list":{const t=i.attributes;return t.options&&t.options.length>0?e(hO,Object.assign({ref:n,addon:i,error:o,className:a},s)):l()}case"custom":{const r=i.attributes;return r.children?t(lO,Object.assign({$error:o,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a},{children:[e(uO,Object.assign({"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:r.children})),e(dO,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]})):l()}default:{const r=i.attributes;return r.value?t(lO,Object.assign({$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a},{children:[e(uO,Object.assign({"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:r.value})),e(dO,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]})):l()}}}})),pO=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v},{children:e(gO,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},y))}))})),fO=T(gO)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":uc["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,mO=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=sc.icon,$activeColor:r=sc["icon-primary"]})=>e?t:r};
    padding: ${uc["spacing-12"]} ${uc["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,bO=T.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,vO=T(kc.BodyBL)`
    color: ${sc["text-subtler"]};
`,yO=T(Hc)`
    margin-right: ${uc["spacing-8"]};
    color: ${sc.icon};
`,xO=T.span`
    color: ${sc["text-primary"]};
    text-decoration: underline;
    font-weight: ${lc.Spec["weight-semibold"]};
`,$O=T.span`
    display: flex;
    align-items: center;
    margin-right: ${uc["spacing-8"]};
`,wO=T(He)`
    color: ${sc["icon-warning"]};
    margin-right: ${uc["spacing-8"]};
    height: 1em;
    width: 1em;
`,CO=T.span`
    color: ${sc["text-warning"]};
`,SO=T(Ug)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${lc["body-baseline-regular"]}

    :hover, :active, :focus {
        ${xO} {
            color: ${sc["text-hover"]};
        }
    }
`;var kO,OO,DO={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */kO=DO,OO=DO.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",i=16,o=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,g=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",i],["flip",512],["partial",o],["partialRight",a],["rearg",l]],p="[object Arguments]",f="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",$="[object Map]",w="[object Number]",C="[object Object]",S="[object Promise]",k="[object RegExp]",O="[object Set]",D="[object String]",j="[object Symbol]",E="[object WeakMap]",_="[object ArrayBuffer]",T="[object DataView]",F="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",I="[object Int32Array]",z="[object Uint8Array]",R="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,W=/\b(__p \+=) '' \+/g,H=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),X=RegExp(V.source),K=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,ie=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,oe=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,fe=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",$e="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",we="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",Oe="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",De="['’]",je="["+xe+"]",Ee="["+Oe+"]",_e="["+$e+"]",Te="\\d+",Fe="["+we+"]",Me="["+Ce+"]",Ae="[^"+xe+Oe+Te+we+Ce+Se+"]",Be="\\ud83c[\\udffb-\\udfff]",Ie="[^"+xe+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",Le="\\u200d",Ne="(?:"+Me+"|"+Ae+")",We="(?:"+Pe+"|"+Ae+")",He="(?:['’](?:d|ll|m|re|s|t|ve))?",Ye="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ve="(?:"+_e+"|"+Be+")?",Ue="["+ke+"]?",Xe=Ue+Ve+"(?:"+Le+"(?:"+[Ie,ze,Re].join("|")+")"+Ue+Ve+")*",Ke="(?:"+[Fe,ze,Re].join("|")+")"+Xe,qe="(?:"+[Ie+_e+"?",_e,ze,Re,je].join("|")+")",Ge=RegExp(De,"g"),Ze=RegExp(_e,"g"),Qe=RegExp(Be+"(?="+Be+")|"+qe+Xe,"g"),Je=RegExp([Pe+"?"+Me+"+"+He+"(?="+[Ee,Pe,"$"].join("|")+")",We+"+"+Ye+"(?="+[Ee,Pe+Ne,"$"].join("|")+")",Pe+"?"+Ne+"+"+He,Pe+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Te,Ke].join("|"),"g"),et=RegExp("["+Le+xe+$e+ke+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,rt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],nt=-1,it={};it[F]=it[M]=it[A]=it[B]=it[I]=it[z]=it[R]=it[P]=it[L]=!0,it[p]=it[f]=it[_]=it[m]=it[T]=it[b]=it[v]=it[y]=it[$]=it[w]=it[C]=it[k]=it[O]=it[D]=it[E]=!1;var ot={};ot[p]=ot[f]=ot[_]=ot[T]=ot[m]=ot[b]=ot[F]=ot[M]=ot[A]=ot[B]=ot[I]=ot[$]=ot[w]=ot[C]=ot[k]=ot[O]=ot[D]=ot[j]=ot[z]=ot[R]=ot[P]=ot[L]=!0,ot[v]=ot[y]=ot[E]=!1;var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,lt=parseInt,ct="object"==typeof Vo&&Vo&&Vo.Object===Object&&Vo,dt="object"==typeof self&&self&&self.Object===Object&&self,ut=ct||dt||Function("return this")(),ht=OO&&!OO.nodeType&&OO,gt=ht&&kO&&!kO.nodeType&&kO,pt=gt&&gt.exports===ht,ft=pt&&ct.process,mt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||ft&&ft.binding&&ft.binding("util")}catch(e){}}(),bt=mt&&mt.isArrayBuffer,vt=mt&&mt.isDate,yt=mt&&mt.isMap,xt=mt&&mt.isRegExp,$t=mt&&mt.isSet,wt=mt&&mt.isTypedArray;function Ct(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function St(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Ot(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Dt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function jt(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function Et(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function _t(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function Tt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Ft(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function Mt(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function At(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Bt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var It=Ht("length");function zt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Rt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):Rt(e,Nt,r)}function Lt(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Nt(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Ut(e,t)/r:u}function Ht(t){return function(r){return null==r?e:r[t]}}function Yt(t){return function(r){return null==t?e:t[r]}}function Vt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function Ut(t,r){for(var n,i=-1,o=t.length;++i<o;){var a=r(t[i]);a!==e&&(n=n===e?a:n+a)}return n}function Xt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Kt(e){return e?e.slice(0,ur(e)+1).replace(re,""):e}function qt(e){return function(t){return e(t)}}function Gt(e,t){return Tt(t,(function(t){return e[t]}))}function Zt(e,t){return e.has(t)}function Qt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function Jt(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var er=Yt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tr=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rr(e){return"\\"+at[e]}function nr(e){return et.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function or(e,t){return function(r){return e(t(r))}}function ar(e,t){for(var r=-1,i=e.length,o=0,a=[];++r<i;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[o++]=r)}return a}function sr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function cr(e){return nr(e)?function(e){for(var t=Qe.lastIndex=0;Qe.test(e);)++t;return t}(e):It(e)}function dr(e){return nr(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function ur(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var hr=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),gr=function ne(xe){var $e=(xe=null==xe?ut:gr.defaults(ut.Object(),xe,gr.pick(ut,rt))).Array,we=xe.Date,Ce=xe.Error,Se=xe.Function,ke=xe.Math,Oe=xe.Object,De=xe.RegExp,je=xe.String,Ee=xe.TypeError,_e=$e.prototype,Te=Se.prototype,Fe=Oe.prototype,Me=xe["__core-js_shared__"],Ae=Te.toString,Be=Fe.hasOwnProperty,Ie=0,ze=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Fe.toString,Pe=Ae.call(Oe),Le=ut._,Ne=De("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=pt?xe.Buffer:e,He=xe.Symbol,Ye=xe.Uint8Array,Ve=We?We.allocUnsafe:e,Ue=or(Oe.getPrototypeOf,Oe),Xe=Oe.create,Ke=Fe.propertyIsEnumerable,qe=_e.splice,Qe=He?He.isConcatSpreadable:e,et=He?He.iterator:e,at=He?He.toStringTag:e,ct=function(){try{var e=ho(Oe,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ut.clearTimeout&&xe.clearTimeout,ht=we&&we.now!==ut.Date.now&&we.now,gt=xe.setTimeout!==ut.setTimeout&&xe.setTimeout,ft=ke.ceil,mt=ke.floor,It=Oe.getOwnPropertySymbols,Yt=We?We.isBuffer:e,pr=xe.isFinite,fr=_e.join,mr=or(Oe.keys,Oe),br=ke.max,vr=ke.min,yr=we.now,xr=xe.parseInt,$r=ke.random,wr=_e.reverse,Cr=ho(xe,"DataView"),Sr=ho(xe,"Map"),kr=ho(xe,"Promise"),Or=ho(xe,"Set"),Dr=ho(xe,"WeakMap"),jr=ho(Oe,"create"),Er=Dr&&new Dr,_r={},Tr=Ro(Cr),Fr=Ro(Sr),Mr=Ro(kr),Ar=Ro(Or),Br=Ro(Dr),Ir=He?He.prototype:e,zr=Ir?Ir.valueOf:e,Rr=Ir?Ir.toString:e;function Pr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Hr)){if(e instanceof Wr)return e;if(Be.call(e,"__wrapped__"))return Po(e)}return new Wr(e)}var Lr=function(){function t(){}return function(r){if(!es(r))return{};if(Xe)return Xe(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Wr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Hr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Xr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function Kr(e){var t=this.__data__=new Vr(e);this.size=t.size}function qr(e,t){var r=Ya(e),n=!r&&Ha(e),i=!r&&!n&&Ka(e),o=!r&&!n&&!i&&cs(e),a=r||n||i||o,s=a?Xt(e.length,je):[],l=s.length;for(var c in e)!t&&!Be.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Gr(t){var r=t.length;return r?t[Kn(0,r-1)]:e}function Zr(e,t){return Bo(Ei(e),sn(t,0,e.length))}function Qr(e){return Bo(Ei(e))}function Jr(t,r,n){(n!==e&&!La(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var i=t[r];Be.call(t,r)&&La(i,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function nn(e,t){return e&&_i(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,i=r.length,o=$e(i),a=null==t;++n<i;)o[n]=a?e:Os(t,r[n]);return o}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,i,o,a){var s,l=1&r,c=2&r,d=4&r;if(n&&(s=o?n(t,i,o,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Ei(t,s)}else{var h=fo(t),g=h==y||h==x;if(Ka(t))return Ci(t,l);if(h==C||h==p||g&&!o){if(s=c||g?{}:bo(t),!l)return c?function(e,t){return _i(e,po(e),t)}(t,function(e,t){return e&&_i(t,Fs(t),e)}(s,t)):function(e,t){return _i(e,go(e),t)}(t,nn(s,t))}else{if(!ot[h])return o?t:{};s=function(e,t,r){var n,i=e.constructor;switch(t){case _:return Si(e);case m:case b:return new i(+e);case T:return function(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case F:case M:case A:case B:case I:case z:case R:case P:case L:return ki(e,r);case $:return new i;case w:case D:return new i(e);case k:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case O:return new i;case j:return n=e,zr?Oe(zr.call(n)):{}}}(t,h,l)}}a||(a=new Kr);var f=a.get(t);if(f)return f;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,i){s.set(i,ln(e,r,n,i,t,a))}));var v=u?e:(d?c?io:no:c?Fs:Ts)(t);return kt(v||t,(function(e,i){v&&(e=t[i=e]),en(s,i,ln(e,r,n,i,t,a))})),s}function cn(t,r,n){var i=n.length;if(null==t)return!i;for(t=Oe(t);i--;){var o=n[i],a=r[o],s=t[o];if(s===e&&!(o in t)||!a(s))return!1}return!0}function dn(r,n,i){if("function"!=typeof r)throw new Ee(t);return To((function(){r.apply(e,i)}),n)}function un(e,t,r,n){var i=-1,o=Et,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=Tt(t,qt(r))),n?(o=_t,a=!1):t.length>=200&&(o=Zt,a=!1,t=new Xr(t));e:for(;++i<s;){var d=e[i],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else o(t,u,n)||l.push(d)}return l}Pr.templateSettings={escape:K,evaluate:q,interpolate:G,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Yr.prototype.clear=function(){this.__data__=jr?jr(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(jr){var i=n[t];return i===r?e:i}return Be.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return jr?r[t]!==e:Be.call(r,t)},Yr.prototype.set=function(t,n){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=jr&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():qe.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return co(this,e).get(e)},Ur.prototype.has=function(e){return co(this,e).has(e)},Ur.prototype.set=function(e,t){var r=co(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Xr.prototype.add=Xr.prototype.push=function(e){return this.__data__.set(e,r),this},Xr.prototype.has=function(e){return this.__data__.has(e)},Kr.prototype.clear=function(){this.__data__=new Vr,this.size=0},Kr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Kr.prototype.get=function(e){return this.__data__.get(e)},Kr.prototype.has=function(e){return this.__data__.has(e)},Kr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Mi(xn),gn=Mi($n,!0);function pn(e,t){var r=!0;return hn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function fn(t,r,n){for(var i=-1,o=t.length;++i<o;){var a=t[i],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return hn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function bn(e,t,r,n,i){var o=-1,a=e.length;for(r||(r=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&r(s)?t>1?bn(s,t-1,r,n,i):Ft(i,s):n||(i[i.length]=s)}return i}var vn=Ai(),yn=Ai(!0);function xn(e,t){return e&&vn(e,t,Ts)}function $n(e,t){return e&&yn(e,t,Ts)}function wn(e,t){return jt(t,(function(t){return Za(e[t])}))}function Cn(t,r){for(var n=0,i=(r=yi(r,t)).length;null!=t&&n<i;)t=t[zo(r[n++])];return n&&n==i?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:Ft(n,r(e))}function kn(t){return null==t?t===e?"[object Undefined]":"[object Null]":at&&at in Oe(t)?function(t){var r=Be.call(t,at),n=t[at];try{t[at]=e;var i=!0}catch(e){}var o=Re.call(t);return i&&(r?t[at]=n:delete t[at]),o}(t):function(e){return Re.call(e)}(t)}function On(e,t){return e>t}function Dn(e,t){return null!=e&&Be.call(e,t)}function jn(e,t){return null!=e&&t in Oe(e)}function En(t,r,n){for(var i=n?_t:Et,o=t[0].length,a=t.length,s=a,l=$e(a),c=1/0,d=[];s--;){var u=t[s];s&&r&&(u=Tt(u,qt(r))),c=vr(u.length,c),l[s]=!n&&(r||o>=120&&u.length>=120)?new Xr(s&&u):e}u=t[0];var h=-1,g=l[0];e:for(;++h<o&&d.length<c;){var p=u[h],f=r?r(p):p;if(p=n||0!==p?p:0,!(g?Zt(g,f):i(d,f,n))){for(s=a;--s;){var m=l[s];if(!(m?Zt(m,f):i(t[s],f,n)))continue e}g&&g.push(f),d.push(p)}}return d}function _n(t,r,n){var i=null==(t=jo(t,r=yi(r,t)))?t:t[zo(Go(r))];return null==i?e:Ct(i,t,n)}function Tn(e){return ts(e)&&kn(e)==p}function Fn(t,r,n,i,o){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,i,o,a){var s=Ya(t),l=Ya(r),c=s?f:fo(t),d=l?f:fo(r),u=(c=c==p?C:c)==C,h=(d=d==p?C:d)==C,g=c==d;if(g&&Ka(t)){if(!Ka(r))return!1;s=!0,u=!1}if(g&&!u)return a||(a=new Kr),s||cs(t)?to(t,r,n,i,o,a):function(e,t,r,n,i,o,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!o(new Ye(e),new Ye(t)));case m:case b:case w:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case k:case D:return e==t+"";case $:var s=ir;case O:var l=1&n;if(s||(s=sr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=to(s(e),s(t),n,i,o,a);return a.delete(e),d;case j:if(zr)return zr.call(e)==zr.call(t)}return!1}(t,r,c,n,i,o,a);if(!(1&n)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,E=x?r.value():r;return a||(a=new Kr),o(S,E,n,i,a)}}return!!g&&(a||(a=new Kr),function(t,r,n,i,o,a){var s=1&n,l=no(t),c=l.length,d=no(r),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var g=l[h];if(!(s?g in r:Be.call(r,g)))return!1}var p=a.get(t),f=a.get(r);if(p&&f)return p==r&&f==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<c;){var v=t[g=l[h]],y=r[g];if(i)var x=s?i(y,v,g,r,t,a):i(v,y,g,t,r,a);if(!(x===e?v===y||o(v,y,n,i,a):x)){m=!1;break}b||(b="constructor"==g)}if(m&&!b){var $=t.constructor,w=r.constructor;$==w||!("constructor"in t)||!("constructor"in r)||"function"==typeof $&&$ instanceof $&&"function"==typeof w&&w instanceof w||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,i,o,a))}(t,r,n,i,Fn,o))}function Mn(t,r,n,i){var o=n.length,a=o,s=!i;if(null==t)return!a;for(t=Oe(t);o--;){var l=n[o];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++o<a;){var c=(l=n[o])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new Kr;if(i)var g=i(d,u,c,t,r,h);if(!(g===e?Fn(u,d,3,i,h):g))return!1}}return!0}function An(e){return!(!es(e)||(t=e,ze&&ze in t))&&(Za(e)?Ne:pe).test(Ro(e));var t}function Bn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Ln(e):hl(e)}function In(e){if(!So(e))return mr(e);var t=[];for(var r in Oe(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function zn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in Oe(e))t.push(r);return t}(e);var t=So(e),r=[];for(var n in e)("constructor"!=n||!t&&Be.call(e,n))&&r.push(n);return r}function Rn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?$e(e.length):[];return hn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Ln(e){var t=uo(e);return 1==t.length&&t[0][2]?Oo(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(t,r){return $o(t)&&ko(r)?Oo(zo(t),r):function(n){var i=Os(n,t);return i===e&&i===r?Ds(n,t):Fn(r,i,3)}}function Wn(t,r,n,i,o){t!==r&&vn(r,(function(a,s){if(o||(o=new Kr),es(a))!function(t,r,n,i,o,a,s){var l=Eo(t,n),c=Eo(r,n),d=s.get(c);if(d)Jr(t,n,d);else{var u=a?a(l,c,n+"",t,r,s):e,h=u===e;if(h){var g=Ya(c),p=!g&&Ka(c),f=!g&&!p&&cs(c);u=c,g||p||f?Ya(l)?u=l:Xa(l)?u=Ei(l):p?(h=!1,u=Ci(c,!0)):f?(h=!1,u=ki(c,!0)):u=[]:is(c)||Ha(c)?(u=l,Ha(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):h=!1}h&&(s.set(c,u),o(u,c,i,a,s),s.delete(c)),Jr(t,n,u)}}(t,r,s,n,Wn,i,o);else{var l=i?i(Eo(t,s),a,s+"",t,r,o):e;l===e&&(l=a),Jr(t,s,l)}}),Fs)}function Hn(t,r){var n=t.length;if(n)return yo(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?Tt(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Tt(t,qt(lo()));var i=Pn(e,(function(e,r,i){var o=Tt(t,(function(t){return t(e)}));return{criteria:o,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;++n<a;){var l=Oi(i[n],o[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(o,yi(a,e),s)}return o}function Un(e,t,r,n){var i=n?Lt:Pt,o=-1,a=t.length,s=e;for(e===t&&(t=Ei(t)),r&&(s=Tt(e,qt(r)));++o<a;)for(var l=0,c=t[o],d=r?r(c):c;(l=i(s,d,l,n))>-1;)s!==e&&qe.call(s,l,1),qe.call(e,l,1);return e}function Xn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;yo(i)?qe.call(e,i,1):ui(e,i)}}return e}function Kn(e,t){return e+mt($r()*(t-e+1))}function qn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Fo(Do(e,t,nl),e+"")}function Zn(e){return Gr(Ls(e))}function Qn(e,t){var r=Ls(e);return Bo(r,sn(t,0,r.length))}function Jn(t,r,n,i){if(!es(t))return t;for(var o=-1,a=(r=yi(r,t)).length,s=a-1,l=t;null!=l&&++o<a;){var c=zo(r[o]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=s){var u=l[c];(d=i?i(u,c,l):e)===e&&(d=es(u)?u:yo(r[o+1])?[]:{})}en(l,c,d),l=l[c]}return t}var ei=Er?function(e,t){return Er.set(e,t),e}:nl,ti=ct?function(e,t){return ct(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ri(e){return Bo(Ls(e))}function ni(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=$e(i);++n<i;)o[n]=e[n+t];return o}function ii(e,t){var r;return hn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function oi(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ai(e,t,nl,r)}function ai(t,r,n,i){var o=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),d=r===e;o<a;){var u=mt((o+a)/2),h=n(t[u]),g=h!==e,p=null===h,f=h==h,m=ls(h);if(s)var b=i||f;else b=d?f&&(i||g):l?f&&g&&(i||!p):c?f&&g&&!p&&(i||!m):!p&&!m&&(i?h<=r:h<r);b?o=u+1:a=u}return vr(a,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?u:+e}function ci(e){if("string"==typeof e)return e;if(Ya(e))return Tt(e,ci)+"";if(ls(e))return Rr?Rr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,r){var n=-1,i=Et,o=e.length,a=!0,s=[],l=s;if(r)a=!1,i=_t;else if(o>=200){var c=t?null:qi(e);if(c)return sr(c);a=!1,i=Zt,l=new Xr}else l=t?[]:s;e:for(;++n<o;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=jo(e,t=yi(t,e)))||delete e[zo(Go(t))]}function hi(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function gi(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ni(e,n?0:o,n?o+1:i):ni(e,n?o+1:0,n?i:o)}function pi(e,t){var r=e;return r instanceof Hr&&(r=r.value()),Mt(t,(function(e,t){return t.func.apply(t.thisArg,Ft([e],t.args))}),r)}function fi(e,t,r){var n=e.length;if(n<2)return n?di(e[0]):[];for(var i=-1,o=$e(n);++i<n;)for(var a=e[i],s=-1;++s<n;)s!=i&&(o[i]=un(o[i]||a,e[s],t,r));return di(bn(o,1),t,r)}function mi(t,r,n){for(var i=-1,o=t.length,a=r.length,s={};++i<o;){var l=i<a?r[i]:e;n(s,t[i],l)}return s}function bi(e){return Xa(e)?e:[]}function vi(e){return"function"==typeof e?e:nl}function yi(e,t){return Ya(e)?e:$o(e,t)?[e]:Io(vs(e))}var xi=Gn;function $i(t,r,n){var i=t.length;return n=n===e?i:n,!r&&n>=i?t:ni(t,r,n)}var wi=dt||function(e){return ut.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Si(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ki(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Oi(t,r){if(t!==r){var n=t!==e,i=null===t,o=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,d=ls(r);if(!l&&!d&&!a&&t>r||a&&s&&c&&!l&&!d||i&&s&&c||!n&&c||!o)return 1;if(!i&&!a&&!d&&t<r||d&&n&&o&&!i&&!a||l&&n&&o||!s&&o||!c)return-1}return 0}function Di(e,t,r,n){for(var i=-1,o=e.length,a=r.length,s=-1,l=t.length,c=br(o-a,0),d=$e(l+c),u=!n;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[r[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function ji(e,t,r,n){for(var i=-1,o=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(o-s,0),u=$e(d+c),h=!n;++i<d;)u[i]=e[i];for(var g=i;++l<c;)u[g+l]=t[l];for(;++a<s;)(h||i<o)&&(u[g+r[a]]=e[i++]);return u}function Ei(e,t){var r=-1,n=e.length;for(t||(t=$e(n));++r<n;)t[r]=e[r];return t}function _i(t,r,n,i){var o=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=i?i(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),o?on(n,l,c):en(n,l,c)}return n}function Ti(e,t){return function(r,n){var i=Ya(r)?St:rn,o=t?t():{};return i(r,e,lo(n,2),o)}}function Fi(t){return Gn((function(r,n){var i=-1,o=n.length,a=o>1?n[o-1]:e,s=o>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(o--,a):e,s&&xo(n[0],n[1],s)&&(a=o<3?e:a,o=1),r=Oe(r);++i<o;){var l=n[i];l&&t(r,l,i,a)}return r}))}function Mi(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Oe(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function Ai(e){return function(t,r,n){for(var i=-1,o=Oe(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}}function Bi(t){return function(r){var n=nr(r=vs(r))?dr(r):e,i=n?n[0]:r.charAt(0),o=n?$i(n,1).join(""):r.slice(1);return i[t]()+o}}function Ii(e){return function(t){return Mt(Zs(Hs(t).replace(Ge,"")),e,"")}}function zi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Ri(t){return function(r,n,i){var o=Oe(r);if(!Ua(r)){var a=lo(n,3);r=Ts(r),n=function(e){return a(o[e],e,o)}}var s=t(r,n,i);return s>-1?o[a?r[s]:s]:e}}function Pi(r){return ro((function(n){var i=n.length,o=i,a=Wr.prototype.thru;for(r&&n.reverse();o--;){var s=n[o];if("function"!=typeof s)throw new Ee(t);if(a&&!l&&"wrapper"==ao(s))var l=new Wr([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=n[o]),d="wrapper"==c?oo(s):e;l=d&&wo(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&wo(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,o=i?n[r].apply(this,e):t;++r<i;)o=n[r].call(this,o);return o}}))}function Li(t,r,n,i,o,a,l,c,d,u){var h=r&s,g=1&r,p=2&r,f=24&r,m=512&r,b=p?e:zi(t);return function s(){for(var v=arguments.length,y=$e(v),x=v;x--;)y[x]=arguments[x];if(f)var $=so(s),w=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,$);if(i&&(y=Di(y,i,o,f)),a&&(y=ji(y,a,l,f)),v-=w,f&&v<u){var C=ar(y,$);return Xi(t,r,Li,s.placeholder,n,y,C,c,d,u-v)}var S=g?n:this,k=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,i=vr(r.length,n),o=Ei(t);i--;){var a=r[i];t[i]=yo(a,n)?o[a]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ut&&this instanceof s&&(k=b||zi(k)),k.apply(S,y)}}function Ni(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function Wi(t,r){return function(n,i){var o;if(n===e&&i===e)return r;if(n!==e&&(o=n),i!==e){if(o===e)return i;"string"==typeof n||"string"==typeof i?(n=ci(n),i=ci(i)):(n=li(n),i=li(i)),o=t(n,i)}return o}}function Hi(e){return ro((function(t){return t=Tt(t,qt(lo())),Gn((function(r){var n=this;return e(t,(function(e){return Ct(e,n,r)}))}))}))}function Yi(t,r){var n=(r=r===e?" ":ci(r)).length;if(n<2)return n?qn(r,t):r;var i=qn(r,ft(t/cr(r)));return nr(r)?$i(dr(i),0,t).join(""):i.slice(0,t)}function Vi(t){return function(r,n,i){return i&&"number"!=typeof i&&xo(r,n,i)&&(n=i=e),r=gs(r),n===e?(n=r,r=0):n=gs(n),function(e,t,r,n){for(var i=-1,o=br(ft((t-e)/(r||1)),0),a=$e(o);o--;)a[n?o:++i]=e,e+=r;return a}(r,n,i=i===e?r<n?1:-1:gs(i),t)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Xi(t,r,n,i,s,l,c,d,u,h){var g=8&r;r|=g?o:a,4&(r&=~(g?a:o))||(r&=-4);var p=[t,r,s,g?l:e,g?c:e,g?e:l,g?e:c,d,u,h],f=n.apply(e,p);return wo(t)&&_o(f,p),f.placeholder=i,Mo(f,t,r)}function Ki(e){var t=ke[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&pr(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var qi=Or&&1/sr(new Or([,-0]))[1]==c?function(e){return new Or(e)}:ll;function Gi(e){return function(t){var r=fo(t);return r==$?ir(t):r==O?lr(t):function(e,t){return Tt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(r,c,d,u,h,g,p,f){var m=2&c;if(!m&&"function"!=typeof r)throw new Ee(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),p=p===e?p:br(ps(p),0),f=f===e?f:ps(f),b-=h?h.length:0,c&a){var v=u,y=h;u=h=e}var x=m?e:oo(r),$=[r,c,d,u,h,v,y,g,p,f];if(x&&function(e,t){var r=e[1],i=t[1],o=r|i,a=o<131,c=i==s&&8==r||i==s&&r==l&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&i&&(e[2]=t[2],o|=1&r?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Di(u,d,t[4]):d,e[4]=u?ar(e[3],n):t[4]}(d=t[5])&&(u=e[5],e[5]=u?ji(u,d,t[6]):d,e[6]=u?ar(e[5],n):t[6]),(d=t[7])&&(e[7]=d),i&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o}($,x),r=$[0],c=$[1],d=$[2],u=$[3],h=$[4],!(f=$[9]=$[9]===e?m?0:r.length:br($[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)w=8==c||c==i?function(t,r,n){var i=zi(t);return function o(){for(var a=arguments.length,s=$e(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:ar(s,c);return(a-=d.length)<n?Xi(t,r,Li,o.placeholder,e,s,d,e,e,n-a):Ct(this&&this!==ut&&this instanceof o?i:t,this,s)}}(r,c,f):c!=o&&33!=c||h.length?Li.apply(e,$):function(e,t,r,n){var i=1&t,o=zi(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=$e(c+s),u=this&&this!==ut&&this instanceof t?o:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return Ct(u,i?r:this,d)}}(r,c,d,u);else var w=function(e,t,r){var n=1&t,i=zi(e);return function t(){return(this&&this!==ut&&this instanceof t?i:e).apply(n?r:this,arguments)}}(r,c,d);return Mo((x?ei:_o)(w,$),r,c)}function Qi(t,r,n,i){return t===e||La(t,Fe[n])&&!Be.call(i,n)?r:t}function Ji(t,r,n,i,o,a){return es(t)&&es(r)&&(a.set(r,t),Wn(t,r,e,Ji,a),a.delete(r)),t}function eo(t){return is(t)?e:t}function to(t,r,n,i,o,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(r);if(d&&u)return d==r&&u==t;var h=-1,g=!0,p=2&n?new Xr:e;for(a.set(t,r),a.set(r,t);++h<l;){var f=t[h],m=r[h];if(i)var b=s?i(m,f,h,r,t,a):i(f,m,h,t,r,a);if(b!==e){if(b)continue;g=!1;break}if(p){if(!Bt(r,(function(e,t){if(!Zt(p,t)&&(f===e||o(f,e,n,i,a)))return p.push(t)}))){g=!1;break}}else if(f!==m&&!o(f,m,n,i,a)){g=!1;break}}return a.delete(t),a.delete(r),g}function ro(t){return Fo(Do(t,e,Vo),t+"")}function no(e){return Sn(e,Ts,go)}function io(e){return Sn(e,Fs,po)}var oo=Er?function(e){return Er.get(e)}:ll;function ao(e){for(var t=e.name+"",r=_r[t],n=Be.call(_r,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Be.call(Pr,"placeholder")?Pr:e).placeholder}function lo(){var e=Pr.iteratee||il;return e=e===il?Bn:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,ko(i)]}return t}function ho(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var go=It?function(e){return null==e?[]:(e=Oe(e),jt(It(e),(function(t){return Ke.call(e,t)})))}:fl,po=It?function(e){for(var t=[];e;)Ft(t,go(e)),e=Ue(e);return t}:fl,fo=kn;function mo(e,t,r){for(var n=-1,i=(t=yi(t,e)).length,o=!1;++n<i;){var a=zo(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Ya(e)||Ha(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Lr(Ue(e))}function vo(e){return Ya(e)||Ha(e)||!!(Qe&&e&&e[Qe])}function yo(e,t){var r=typeof e;return!!(t=null==t?d:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yo(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function $o(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||Q.test(e)||!Z.test(e)||null!=t&&e in Oe(t)}function wo(e){var t=ao(e),r=Pr[t];if("function"!=typeof r||!(t in Hr.prototype))return!1;if(e===r)return!0;var n=oo(r);return!!n&&e===n[0]}(Cr&&fo(new Cr(new ArrayBuffer(1)))!=T||Sr&&fo(new Sr)!=$||kr&&fo(kr.resolve())!=S||Or&&fo(new Or)!=O||Dr&&fo(new Dr)!=E)&&(fo=function(t){var r=kn(t),n=r==C?t.constructor:e,i=n?Ro(n):"";if(i)switch(i){case Tr:return T;case Fr:return $;case Mr:return S;case Ar:return O;case Br:return E}return r});var Co=Me?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Fe)}function ko(e){return e==e&&!es(e)}function Oo(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in Oe(n))}}function Do(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,i=-1,o=br(e.length-r,0),a=$e(o);++i<o;)a[i]=e[r+i];i=-1;for(var s=$e(r+1);++i<r;)s[i]=e[i];return s[r]=n(a),Ct(t,this,s)}}function jo(e,t){return t.length<2?e:Cn(e,ni(t,0,-1))}function Eo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var _o=Ao(ei),To=gt||function(e,t){return ut.setTimeout(e,t)},Fo=Ao(ti);function Mo(e,t,r){var n=t+"";return Fo(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ie,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(g,(function(r){var n="_."+r[0];t&r[1]&&!Et(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(oe);return t?t[1].split(ae):[]}(n),r)))}function Ao(t){var r=0,n=0;return function(){var i=yr(),o=16-(i-n);if(n=i,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Bo(t,r){var n=-1,i=t.length,o=i-1;for(r=r===e?i:r;++n<r;){var a=Kn(n,o),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var Io=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,i){t.push(n?i.replace(ce,"$1"):r||e)})),t}));function zo(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ro(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Hr)return e.clone();var t=new Wr(e.__wrapped__,e.__chain__);return t.__actions__=Ei(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gn((function(e,t){return Xa(e)?un(e,bn(t,1,Xa,!0)):[]})),No=Gn((function(t,r){var n=Go(r);return Xa(n)&&(n=e),Xa(t)?un(t,bn(r,1,Xa,!0),lo(n,2)):[]})),Wo=Gn((function(t,r){var n=Go(r);return Xa(n)&&(n=e),Xa(t)?un(t,bn(r,1,Xa,!0),e,n):[]}));function Ho(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),Rt(e,lo(t,3),i)}function Yo(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var o=i-1;return n!==e&&(o=ps(n),o=n<0?br(i+o,0):vr(o,i-1)),Rt(t,lo(r,3),o,!0)}function Vo(e){return null!=e&&e.length?bn(e,1):[]}function Uo(t){return t&&t.length?t[0]:e}var Xo=Gn((function(e){var t=Tt(e,bi);return t.length&&t[0]===e[0]?En(t):[]})),Ko=Gn((function(t){var r=Go(t),n=Tt(t,bi);return r===Go(n)?r=e:n.pop(),n.length&&n[0]===t[0]?En(n,lo(r,2)):[]})),qo=Gn((function(t){var r=Go(t),n=Tt(t,bi);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?En(n,e,r):[]}));function Go(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Zo=Gn(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Jo=ro((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Xn(e,Tt(t,(function(e){return yo(e,r)?+e:e})).sort(Oi)),n}));function ea(e){return null==e?e:wr.call(e)}var ta=Gn((function(e){return di(bn(e,1,Xa,!0))})),ra=Gn((function(t){var r=Go(t);return Xa(r)&&(r=e),di(bn(t,1,Xa,!0),lo(r,2))})),na=Gn((function(t){var r=Go(t);return r="function"==typeof r?r:e,di(bn(t,1,Xa,!0),e,r)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=jt(e,(function(e){if(Xa(e))return t=br(e.length,t),!0})),Xt(t,(function(t){return Tt(e,Ht(t))}))}function oa(t,r){if(!t||!t.length)return[];var n=ia(t);return null==r?n:Tt(n,(function(t){return Ct(r,e,t)}))}var aa=Gn((function(e,t){return Xa(e)?un(e,t):[]})),sa=Gn((function(e){return fi(jt(e,Xa))})),la=Gn((function(t){var r=Go(t);return Xa(r)&&(r=e),fi(jt(t,Xa),lo(r,2))})),ca=Gn((function(t){var r=Go(t);return r="function"==typeof r?r:e,fi(jt(t,Xa),e,r)})),da=Gn(ia),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,oa(t,n)}));function ha(e){var t=Pr(e);return t.__chain__=!0,t}function ga(e,t){return t(e)}var pa=ro((function(t){var r=t.length,n=r?t[0]:0,i=this.__wrapped__,o=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&i instanceof Hr&&yo(n)?((i=i.slice(n,+n+(r?1:0))).__actions__.push({func:ga,args:[o],thisArg:e}),new Wr(i,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(o)})),fa=Ti((function(e,t,r){Be.call(e,r)?++e[r]:on(e,r,1)})),ma=Ri(Ho),ba=Ri(Yo);function va(e,t){return(Ya(e)?kt:hn)(e,lo(t,3))}function ya(e,t){return(Ya(e)?Ot:gn)(e,lo(t,3))}var xa=Ti((function(e,t,r){Be.call(e,r)?e[r].push(t):on(e,r,[t])})),$a=Gn((function(e,t,r){var n=-1,i="function"==typeof t,o=Ua(e)?$e(e.length):[];return hn(e,(function(e){o[++n]=i?Ct(t,e,r):_n(e,t,r)})),o})),wa=Ti((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?Tt:Pn)(e,lo(t,3))}var Sa=Ti((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),ka=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xo(e,t[0],t[1])?t=[]:r>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),Oa=ht||function(){return ut.Date.now()};function Da(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Zi(t,s,e,e,e,e,r)}function ja(r,n){var i;if("function"!=typeof n)throw new Ee(t);return r=ps(r),function(){return--r>0&&(i=n.apply(this,arguments)),r<=1&&(n=e),i}}var Ea=Gn((function(e,t,r){var n=1;if(r.length){var i=ar(r,so(Ea));n|=o}return Zi(e,n,t,r,i)})),_a=Gn((function(e,t,r){var n=3;if(r.length){var i=ar(r,so(_a));n|=o}return Zi(t,n,e,r,i)}));function Ta(r,n,i){var o,a,s,l,c,d,u=0,h=!1,g=!1,p=!0;if("function"!=typeof r)throw new Ee(t);function f(t){var n=o,i=a;return o=a=e,u=t,l=r.apply(i,n)}function m(t){var r=t-d;return d===e||r>=n||r<0||g&&t-u>=s}function b(){var e=Oa();if(m(e))return v(e);c=To(b,function(e){var t=n-(e-d);return g?vr(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&o?f(t):(o=a=e,l)}function y(){var t=Oa(),r=m(t);if(o=arguments,a=this,d=t,r){if(c===e)return function(e){return u=e,c=To(b,n),h?f(e):l}(d);if(g)return wi(c),c=To(b,n),f(d)}return c===e&&(c=To(b,n)),l}return n=ms(n)||0,es(i)&&(h=!!i.leading,s=(g="maxWait"in i)?br(ms(i.maxWait)||0,n):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==e&&wi(c),u=0,o=d=a=c=e},y.flush=function(){return c===e?l:v(Oa())},y}var Fa=Gn((function(e,t){return dn(e,1,t)})),Ma=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Ee(t);var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return n.cache=o.set(i,a)||o,a};return n.cache=new(Aa.Cache||Ur),n}function Ba(e){if("function"!=typeof e)throw new Ee(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var Ia=xi((function(e,t){var r=(t=1==t.length&&Ya(t[0])?Tt(t[0],qt(lo())):Tt(bn(t,1),qt(lo()))).length;return Gn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return Ct(e,this,n)}))})),za=Gn((function(t,r){var n=ar(r,so(za));return Zi(t,o,e,r,n)})),Ra=Gn((function(t,r){var n=ar(r,so(Ra));return Zi(t,a,e,r,n)})),Pa=ro((function(t,r){return Zi(t,l,e,e,e,r)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(On),Wa=Ui((function(e,t){return e>=t})),Ha=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&Be.call(e,"callee")&&!Ke.call(e,"callee")},Ya=$e.isArray,Va=bt?qt(bt):function(e){return ts(e)&&kn(e)==_};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Xa(e){return ts(e)&&Ua(e)}var Ka=Yt||ml,qa=vt?qt(vt):function(e){return ts(e)&&kn(e)==b};function Ga(e){if(!ts(e))return!1;var t=kn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=kn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=yt?qt(yt):function(e){return ts(e)&&fo(e)==$};function ns(e){return"number"==typeof e||ts(e)&&kn(e)==w}function is(e){if(!ts(e)||kn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Pe}var os=xt?qt(xt):function(e){return ts(e)&&kn(e)==k},as=$t?qt($t):function(e){return ts(e)&&fo(e)==O};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&kn(e)==D}function ls(e){return"symbol"==typeof e||ts(e)&&kn(e)==j}var cs=wt?qt(wt):function(e){return ts(e)&&Ja(e.length)&&!!it[kn(e)]},ds=Ui(Rn),us=Ui((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?dr(e):Ei(e);if(et&&e[et])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[et]());var t=fo(e);return(t==$?ir:t==O?sr:Ls)(e)}function gs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=gs(e),r=t%1;return t==t?r?t-r:t:0}function fs(e){return e?sn(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Kt(e);var r=ge.test(e);return r||fe.test(e)?lt(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return _i(e,Fs(e))}function vs(e){return null==e?"":ci(e)}var ys=Fi((function(e,t){if(So(t)||Ua(t))_i(t,Ts(t),e);else for(var r in t)Be.call(t,r)&&en(e,r,t[r])})),xs=Fi((function(e,t){_i(t,Fs(t),e)})),$s=Fi((function(e,t,r,n){_i(t,Fs(t),e,n)})),ws=Fi((function(e,t,r,n){_i(t,Ts(t),e,n)})),Cs=ro(an),Ss=Gn((function(t,r){t=Oe(t);var n=-1,i=r.length,o=i>2?r[2]:e;for(o&&xo(r[0],r[1],o)&&(i=1);++n<i;)for(var a=r[n],s=Fs(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||La(u,Fe[d])&&!Be.call(t,d))&&(t[d]=a[d])}return t})),ks=Gn((function(t){return t.push(e,Ji),Ct(As,e,t)}));function Os(t,r,n){var i=null==t?e:Cn(t,r);return i===e?n:i}function Ds(e,t){return null!=e&&mo(e,t,jn)}var js=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=r}),el(nl)),Es=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),lo),_s=Gn(_n);function Ts(e){return Ua(e)?qr(e):In(e)}function Fs(e){return Ua(e)?qr(e,!0):zn(e)}var Ms=Fi((function(e,t,r){Wn(e,t,r)})),As=Fi((function(e,t,r,n){Wn(e,t,r,n)})),Bs=ro((function(e,t){var r={};if(null==e)return r;var n=!1;t=Tt(t,(function(t){return t=yi(t,e),n||(n=t.length>1),t})),_i(e,io(e),r),n&&(r=ln(r,7,eo));for(var i=t.length;i--;)ui(r,t[i]);return r})),Is=ro((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Ds(e,r)}))}(e,t)}));function zs(e,t){if(null==e)return{};var r=Tt(io(e),(function(e){return[e]}));return t=lo(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Rs=Gi(Ts),Ps=Gi(Fs);function Ls(e){return null==e?[]:Gt(e,Ts(e))}var Ns=Ii((function(e,t,r){return t=t.toLowerCase(),e+(r?Ws(t):t)}));function Ws(e){return Gs(vs(e).toLowerCase())}function Hs(e){return(e=vs(e))&&e.replace(be,er).replace(Ze,"")}var Ys=Ii((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=Ii((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Bi("toLowerCase"),Xs=Ii((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Ks=Ii((function(e,t,r){return e+(r?" ":"")+Gs(t)})),qs=Ii((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=Bi("toUpperCase");function Zs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return tt.test(e)}(t)?function(e){return e.match(Je)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Qs=Gn((function(t,r){try{return Ct(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ro((function(e,t){return kt(t,(function(t){t=zo(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),rl=Pi(!0);function nl(e){return e}function il(e){return Bn("function"==typeof e?e:ln(e,1))}var ol=Gn((function(e,t){return function(r){return _n(r,e,t)}})),al=Gn((function(e,t){return function(r){return _n(e,r,t)}}));function sl(e,t,r){var n=Ts(t),i=wn(t,n);null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=wn(t,Ts(t)));var o=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return kt(i,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=Ei(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Ft([this.value()],arguments))})})),e}function ll(){}var cl=Hi(Tt),dl=Hi(Dt),ul=Hi(Bt);function hl(e){return $o(e)?Ht(zo(e)):function(e){return function(t){return Cn(t,e)}}(e)}var gl=Vi(),pl=Vi(!0);function fl(){return[]}function ml(){return!1}var bl,vl=Wi((function(e,t){return e+t}),0),yl=Ki("ceil"),xl=Wi((function(e,t){return e/t}),1),$l=Ki("floor"),wl=Wi((function(e,t){return e*t}),1),Cl=Ki("round"),Sl=Wi((function(e,t){return e-t}),0);return Pr.after=function(e,r){if("function"!=typeof r)throw new Ee(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Pr.ary=Da,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=$s,Pr.assignWith=ws,Pr.at=Cs,Pr.before=ja,Pr.bind=Ea,Pr.bindAll=Js,Pr.bindKey=_a,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Pr.chain=ha,Pr.chunk=function(t,r,n){r=(n?xo(t,r,n):r===e)?1:br(ps(r),0);var i=null==t?0:t.length;if(!i||r<1)return[];for(var o=0,a=0,s=$e(ft(i/r));o<i;)s[a++]=ni(t,o,o+=r);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=$e(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Ft(Ya(r)?Ei(r):[r],bn(t,1))},Pr.cond=function(e){var r=null==e?0:e.length,n=lo();return e=r?Tt(e,(function(e){if("function"!=typeof e[1])throw new Ee(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var i=e[n];if(Ct(i[0],this,t))return Ct(i[1],this,t)}}))},Pr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=fa,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function t(r,n,i){var o=Zi(r,8,e,e,e,e,e,n=i?e:n);return o.placeholder=t.placeholder,o},Pr.curryRight=function t(r,n,o){var a=Zi(r,i,e,e,e,e,e,n=o?e:n);return a.placeholder=t.placeholder,a},Pr.debounce=Ta,Pr.defaults=Ss,Pr.defaultsDeep=ks,Pr.defer=Fa,Pr.delay=Ma,Pr.difference=Lo,Pr.differenceBy=No,Pr.differenceWith=Wo,Pr.drop=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,(r=n||r===e?1:ps(r))<0?0:r,i):[]},Pr.dropRight=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,0,(r=i-(r=n||r===e?1:ps(r)))<0?0:r):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0):[]},Pr.fill=function(t,r,n,i){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xo(t,r,n)&&(n=0,i=o),function(t,r,n,i){var o=t.length;for((n=ps(n))<0&&(n=-n>o?0:o+n),(i=i===e||i>o?o:ps(i))<0&&(i+=o),i=n>i?0:fs(i);n<i;)t[n++]=r;return t}(t,r,n,i)):[]},Pr.filter=function(e,t){return(Ya(e)?jt:mn)(e,lo(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Pr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Pr.flatten=Vo,Pr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Pr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Pr.flip=function(e){return Zi(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Pr.functions=function(e){return null==e?[]:wn(e,Ts(e))},Pr.functionsIn=function(e){return null==e?[]:wn(e,Fs(e))},Pr.groupBy=xa,Pr.initial=function(e){return null!=e&&e.length?ni(e,0,-1):[]},Pr.intersection=Xo,Pr.intersectionBy=Ko,Pr.intersectionWith=qo,Pr.invert=js,Pr.invertBy=Es,Pr.invokeMap=$a,Pr.iteratee=il,Pr.keyBy=wa,Pr.keys=Ts,Pr.keysIn=Fs,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,t(e,n,i),e)})),r},Pr.mapValues=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,n,t(e,n,i))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Aa,Pr.merge=Ms,Pr.mergeWith=As,Pr.method=ol,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=Ba,Pr.nthArg=function(e){return e=ps(e),Gn((function(t){return Hn(t,e)}))},Pr.omit=Bs,Pr.omitBy=function(e,t){return zs(e,Ba(lo(t)))},Pr.once=function(e){return ja(2,e)},Pr.orderBy=function(t,r,n,i){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=i?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Pr.over=cl,Pr.overArgs=Ia,Pr.overEvery=dl,Pr.overSome=ul,Pr.partial=za,Pr.partialRight=Ra,Pr.partition=Sa,Pr.pick=Is,Pr.pickBy=zs,Pr.property=hl,Pr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Pr.pull=Zo,Pr.pullAll=Qo,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,lo(r,2)):e},Pr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Pr.pullAt=Jo,Pr.range=gl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Ya(e)?jt:mn)(e,Ba(lo(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=lo(t,3);++n<o;){var a=e[n];t(a,n,e)&&(r.push(a),i.push(n))}return Xn(e,i),r},Pr.rest=function(r,n){if("function"!=typeof r)throw new Ee(t);return Gn(r,n=n===e?n:ps(n))},Pr.reverse=ea,Pr.sampleSize=function(t,r,n){return r=(n?xo(t,r,n):r===e)?1:ps(r),(Ya(t)?Zr:Qn)(t,r)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:Jn(t,r,n,i)},Pr.shuffle=function(e){return(Ya(e)?Qr:ri)(e)},Pr.slice=function(t,r,n){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xo(t,r,n)?(r=0,n=i):(r=null==r?0:ps(r),n=n===e?i:ps(n)),ni(t,r,n)):[]},Pr.sortBy=ka,Pr.sortedUniq=function(e){return e&&e.length?si(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Pr.split=function(t,r,n){return n&&"number"!=typeof n&&xo(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!os(r))&&!(r=ci(r))&&nr(t)?$i(dr(t),0,n):t.split(r,n):[]},Pr.spread=function(e,r){if("function"!=typeof e)throw new Ee(t);return r=null==r?0:br(ps(r),0),Gn((function(t){var n=t[r],i=$i(t,0,r);return n&&Ft(i,n),Ct(e,this,i)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?ni(e,1,t):[]},Pr.take=function(t,r,n){return t&&t.length?ni(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Pr.takeRight=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,(r=i-(r=n||r===e?1:ps(r)))<0?0:r,i):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?gi(e,lo(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,r,n){var i=!0,o=!0;if("function"!=typeof e)throw new Ee(t);return es(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ta(e,r,{leading:i,maxWait:r,trailing:o})},Pr.thru=ga,Pr.toArray=hs,Pr.toPairs=Rs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Ya(e)?Tt(e,zo):ls(e)?[e]:Ei(Io(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Ya(e),i=n||Ka(e)||cs(e);if(t=lo(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:es(e)&&Za(o)?Lr(Ue(e)):{}}return(i?kt:xn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Pr.unary=function(e){return Da(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?di(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Pr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?di(t,e,r):[]},Pr.unset=function(e,t){return null==e||ui(e,t)},Pr.unzip=ia,Pr.unzipWith=oa,Pr.update=function(e,t,r){return null==e?e:hi(e,t,vi(r))},Pr.updateWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:hi(t,r,vi(n),i)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Gt(e,Fs(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return za(vi(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=da,Pr.zipObject=function(e,t){return mi(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=Rs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=$s,sl(Pr,Pr),Pr.add=vl,Pr.attempt=Qs,Pr.camelCase=Ns,Pr.capitalize=Ws,Pr.ceil=yl,Pr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Pr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Ts(t))},Pr.deburr=Hs,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=xl,Pr.endsWith=function(t,r,n){t=vs(t),r=ci(r);var i=t.length,o=n=n===e?i:sn(ps(n),0,i);return(n-=r.length)>=0&&t.slice(n,o)==r},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&X.test(e)?e.replace(V,tr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Pr.every=function(t,r,n){var i=Ya(t)?Dt:pn;return n&&xo(t,r,n)&&(r=e),i(t,lo(r,3))},Pr.find=ma,Pr.findIndex=Ho,Pr.findKey=function(e,t){return zt(e,lo(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Yo,Pr.findLastKey=function(e,t){return zt(e,lo(t,3),$n)},Pr.floor=$l,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,lo(t,3),Fs)},Pr.forInRight=function(e,t){return null==e?e:yn(e,lo(t,3),Fs)},Pr.forOwn=function(e,t){return e&&xn(e,lo(t,3))},Pr.forOwnRight=function(e,t){return e&&$n(e,lo(t,3))},Pr.get=Os,Pr.gt=Na,Pr.gte=Wa,Pr.has=function(e,t){return null!=e&&mo(e,t,Dn)},Pr.hasIn=Ds,Pr.head=Uo,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var i=e.length;return r<0&&(r=br(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Pt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),Pt(e,t,i)},Pr.inRange=function(t,r,n){return r=gs(r),n===e?(n=r,r=0):n=gs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Pr.invoke=_s,Pr.isArguments=Ha,Pr.isArray=Ya,Pr.isArrayBuffer=Va,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Xa,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kn(e)==m},Pr.isBuffer=Ka,Pr.isDate=qa,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||Ka(e)||cs(e)||Ha(e)))return!e.length;var t=fo(e);if(t==$||t==O)return!e.size;if(So(e))return!In(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return Fn(e,t)},Pr.isEqualWith=function(t,r,n){var i=(n="function"==typeof n?n:e)?n(t,r):e;return i===e?Fn(t,r,e,n):!!i},Pr.isError=Ga,Pr.isFinite=function(e){return"number"==typeof e&&pr(e)},Pr.isFunction=Za,Pr.isInteger=Qa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||Mn(e,t,uo(t))},Pr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,uo(r),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=is,Pr.isRegExp=os,Pr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=d},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(t){return t===e},Pr.isWeakMap=function(e){return ts(e)&&fo(e)==E},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kn(e)},Pr.join=function(e,t){return null==e?"":fr.call(e,t)},Pr.kebabCase=Ys,Pr.last=Go,Pr.lastIndexOf=function(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var o=i;return n!==e&&(o=(o=ps(n))<0?br(i+o,0):vr(o,i-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,o):Rt(t,Nt,o,!0)},Pr.lowerCase=Vs,Pr.lowerFirst=Us,Pr.lt=ds,Pr.lte=us,Pr.max=function(t){return t&&t.length?fn(t,nl,On):e},Pr.maxBy=function(t,r){return t&&t.length?fn(t,lo(r,2),On):e},Pr.mean=function(e){return Wt(e,nl)},Pr.meanBy=function(e,t){return Wt(e,lo(t,2))},Pr.min=function(t){return t&&t.length?fn(t,nl,Rn):e},Pr.minBy=function(t,r){return t&&t.length?fn(t,lo(r,2),Rn):e},Pr.stubArray=fl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=wl,Pr.nth=function(t,r){return t&&t.length?Hn(t,ps(r)):e},Pr.noConflict=function(){return ut._===this&&(ut._=Le),this},Pr.noop=ll,Pr.now=Oa,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Yi(mt(i),r)+e+Yi(ft(i),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;return t&&n<t?e+Yi(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;return t&&n<t?Yi(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Pr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xo(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=gs(t),r===e?(r=t,t=0):r=gs(r)),t>r){var i=t;t=r,r=i}if(n||t%1||r%1){var o=$r();return vr(t+o*(r-t+st("1e-"+((o+"").length-1))),r)}return Kn(t,r)},Pr.reduce=function(e,t,r){var n=Ya(e)?Mt:Vt,i=arguments.length<3;return n(e,lo(t,4),r,i,hn)},Pr.reduceRight=function(e,t,r){var n=Ya(e)?At:Vt,i=arguments.length<3;return n(e,lo(t,4),r,i,gn)},Pr.repeat=function(t,r,n){return r=(n?xo(t,r,n):r===e)?1:ps(r),qn(vs(t),r)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(t,r,n){var i=-1,o=(r=yi(r,t)).length;for(o||(o=1,t=e);++i<o;){var a=null==t?e:t[zo(r[i])];a===e&&(i=o,a=n),t=Za(a)?a.call(t):a}return t},Pr.round=Cl,Pr.runInContext=ne,Pr.sample=function(e){return(Ya(e)?Gr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?cr(e):e.length;var t=fo(e);return t==$||t==O?e.size:In(e).length},Pr.snakeCase=Xs,Pr.some=function(t,r,n){var i=Ya(t)?Bt:ii;return n&&xo(t,r,n)&&(r=e),i(t,lo(r,3))},Pr.sortedIndex=function(e,t){return oi(e,t)},Pr.sortedIndexBy=function(e,t,r){return ai(e,t,lo(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=oi(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return oi(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ai(e,t,lo(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=oi(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=Ks,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=ci(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?Ut(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?Ut(e,lo(t,2)):0},Pr.template=function(t,r,n){var i=Pr.templateSettings;n&&xo(t,r,n)&&(r=e),t=vs(t),r=$s({},r,i,Qi);var o,a,s=$s({},r.imports,i.imports,Qi),l=Ts(s),c=Gt(s,l),d=0,u=r.interpolate||ve,h="__p += '",g=De((r.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++nt+"]")+"\n";t.replace(g,(function(e,r,n,i,s,l){return n||(n=i),h+=t.slice(d,l).replace(ye,rr),r&&(o=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var f=Be.call(r,"variable")&&r.variable;if(f){if(le.test(f))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(N,""):h).replace(W,"$1").replace(H,"$1;"),h="function("+(f||"obj")+") {\n"+(f?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Qs((function(){return Se(l,p+"return "+h).apply(e,c)}));if(m.source=h,Ga(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>d)return[];var r=h,n=vr(e,h);t=lo(t),e-=h;for(var i=Xt(n,t);++r<e;)t(r);return i},Pr.toFinite=gs,Pr.toInteger=ps,Pr.toLength=fs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,d):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Kt(t);if(!t||!(r=ci(r)))return t;var i=dr(t),o=dr(r);return $i(i,Qt(i,o),Jt(i,o)+1).join("")},Pr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,ur(t)+1);if(!t||!(r=ci(r)))return t;var i=dr(t);return $i(i,0,Jt(i,dr(r))+1).join("")},Pr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=ci(r)))return t;var i=dr(t);return $i(i,Qt(i,dr(r))).join("")},Pr.truncate=function(t,r){var n=30,i="...";if(es(r)){var o="separator"in r?r.separator:o;n="length"in r?ps(r.length):n,i="omission"in r?ci(r.omission):i}var a=(t=vs(t)).length;if(nr(t)){var s=dr(t);a=s.length}if(n>=a)return t;var l=n-cr(i);if(l<1)return i;var c=s?$i(s,0,l).join(""):t.slice(0,l);if(o===e)return c+i;if(s&&(l+=c.length-l),os(o)){if(t.slice(l).search(o)){var d,u=c;for(o.global||(o=De(o.source,vs(ue.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(ci(o),l)!=l){var g=c.lastIndexOf(o);g>-1&&(c=c.slice(0,g))}return c+i},Pr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,hr):e},Pr.uniqueId=function(e){var t=++Ie;return vs(e)+t},Pr.upperCase=qs,Pr.upperFirst=Gs,Pr.each=va,Pr.eachRight=ya,Pr.first=Uo,sl(Pr,(bl={},xn(Pr,(function(e,t){Be.call(Pr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Pr.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),kt(["drop","take"],(function(t,r){Hr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var i=this.__filtered__&&!r?new Hr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,h),type:t+(i.__dir__<0?"Right":"")}),i},Hr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Hr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Hr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Hr.prototype[e]=function(){return this.__filtered__?new Hr(this):this[r](1)}})),Hr.prototype.compact=function(){return this.filter(nl)},Hr.prototype.find=function(e){return this.filter(e).head()},Hr.prototype.findLast=function(e){return this.reverse().find(e)},Hr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Hr(this):this.map((function(r){return _n(r,e,t)}))})),Hr.prototype.reject=function(e){return this.filter(Ba(lo(e)))},Hr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Hr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Hr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Hr.prototype.toArray=function(){return this.take(h)},xn(Hr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),i=/^(?:head|last)$/.test(r),o=Pr[i?"take"+("last"==r?"Right":""):r],a=i||/^find/.test(r);o&&(Pr.prototype[r]=function(){var r=this.__wrapped__,s=i?[1]:arguments,l=r instanceof Hr,c=s[0],d=l||Ya(r),u=function(e){var t=o.apply(Pr,Ft([e],s));return i&&h?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,g=!!this.__actions__.length,p=a&&!h,f=l&&!g;if(!a&&d){r=f?r:new Hr(this);var m=t.apply(r,s);return m.__actions__.push({func:ga,args:[u],thisArg:e}),new Wr(m,h)}return p&&f?t.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=_e[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Ya(i)?i:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Hr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";Be.call(_r,n)||(_r[n]=[]),_r[n].push({name:t,func:r})}})),_r[Li(e,2).name]=[{name:"wrapper",func:e}],Hr.prototype.clone=function(){var e=new Hr(this.__wrapped__);return e.__actions__=Ei(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ei(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ei(this.__views__),e},Hr.prototype.reverse=function(){if(this.__filtered__){var e=new Hr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Hr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,i=r?e.length:0,o=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var o=r[n],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,h=0,g=vr(l,this.__takeCount__);if(!r||!n&&i==l&&g==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&h<g;){for(var f=-1,m=e[c+=t];++f<u;){var b=d[f],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return ha(this)},Pr.prototype.commit=function(){return new Wr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Pr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var i=Po(n);i.__index__=0,i.__values__=e,r?o.__wrapped__=i:r=i;var o=i;n=n.__wrapped__}return o.__wrapped__=t,r},Pr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Hr){var r=t;return this.__actions__.length&&(r=new Hr(this)),(r=r.reverse()).__actions__.push({func:ga,args:[ea],thisArg:e}),new Wr(r,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,et&&(Pr.prototype[et]=function(){return this}),Pr}();gt?((gt.exports=gr)._=gr,ht._=gr):ut._=gr}.call(Vo);var jO=DO.exports;const EO=i.forwardRef(((r,n)=>{var{value:i,readOnly:o,"data-testid":s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h,iconMask:g=e(We,{}),iconUnmask:p=e(Ne,{}),iconActiveColor:f,iconInactiveColor:m,maskChar:b="•",error:v,disableMask:y,transformInput:x,loadState:$,onMask:w,onUnmask:C,onChange:S,onFocus:k,onBlur:O,onTryAgain:D}=r,j=dt(r,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const E=o&&jO.isEmpty(i),[_,T]=a(!y),[F,M]=a(i||"");u((()=>{M(i)}),[i]);const A=e=>{P(!1),k&&k(e)},B=e=>{P(!0),O&&O(e)},I=e=>{let t=e.target.value;switch(x){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}M(t),e.target.value=t,S&&S(e)},z=()=>{o&&D&&D()},R=()=>{P(!_)},P=e=>{T(e),e?w&&w():C&&C()},L=()=>!(null==F?void 0:F.toString().length)||y,N=()=>{const t=L();return!E&&e(mO,Object.assign({"data-testid":"icon-"+(_?"masked":"unmasked"),onClick:t?void 0:R,$isDisabled:t,$inactiveColor:m,$activeColor:f},{children:_?p:g}))};return e("div",Object.assign({"aria-busy":"loading"===$,"aria-live":"polite"},{children:(()=>{if(o)switch($){case"fail":return t(SO,Object.assign({onClick:z,"data-testid":"try-again-button"},{children:[t($O,{children:[e(wO,{}),e(CO,{children:"Error"})]}),e(xO,{children:"Try again?"})]}));case"loading":return t(bO,{children:[e(yO,{}),e(vO,{children:"Retrieving..."})]})}return e(fO,Object.assign({ref:n,"data-testid":`${s||"masked-input"}${_?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:N()},position:"right"},onFocus:o?void 0:A,onBlur:o?void 0:B,onClick:o?R:void 0,onChange:I,value:E?"-":_&&!y?su.maskValue(null==F?void 0:F.toString(),{maskChar:b,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h}):F,readOnly:o,error:v,$isDisabled:L()},j))})()}))})),_O=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(C$,Object.assign({id:o,label:n,errorMessage:i,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(EO,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},h))}))})),TO=T.div`
    font-weight: ${e=>e.$bold?lc.Spec["weight-semibold"]:lc.Spec["weight-regular"]};
    color: ${e=>e.$selected?sc["text-selected"]:sc.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Xg(e.$maxLines||2)}
    overflow-wrap: break-word;
`,FO=T.div`
    color: ${sc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Xg(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${lc["body-md-semibold"]}
                `:F`
                    ${lc["body-baseline-regular"]}
                `}
`,MO=T.span`
    font-weight: ${lc.Spec["weight-semibold"]};
`,AO=T.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?lc["body-md-regular"]:lc["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${TO} {
                        display: inline;
                    }

                    ${FO} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,BO=T.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,IO=T.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,zO=({bold:n,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u})=>{const h=A(),g="small"===u?lc.Spec["body-size-md"]({theme:h}):lc.Spec["body-size-baseline"]({theme:h}),f=lc.Spec["font-family"]({theme:h}),{ref:b,width:v}=cr(),y=p((e=>{if("inline"!==i)return!1;return su.getTextWidth(e,`${g} '${f}'`)>v*s-50}),[v,i,g,f,s]),x=m((()=>y(o)),[y,o]),$=m((()=>c&&y(c)),[y,c]),w=x||$?"next-line":i,C=n=>{if(!a)return n;const i=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(i),l=s+a.length;return-1===s?n:t(r,{children:[o.slice(0,s),e(MO,Object.assign({$variant:u},{children:o.slice(s,l)})),o.slice(l)]})},S=n=>t(r,{children:[e(BO,Object.assign({$maxLines:s,"aria-hidden":!0},{children:C(n)})),e(IO,Object.assign({$maxLines:s,"aria-hidden":!0},{children:C(n)}))]});return t(AO,Object.assign({ref:b,$labelDisplayType:w,$variant:u},{children:[e(TO,Object.assign({"aria-label":o,$bold:n,$maxLines:s,$selected:l,$truncateType:d},{children:"middle"===d&&x?S(o):C(o)})),c&&e(FO,Object.assign({"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:i},{children:"middle"===d&&$?S(c):c}))]}))},RO=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),PO=({children:t})=>{const[r,n]=a(-1);return e(RO.Provider,Object.assign({value:{focusedIndex:r,setFocusedIndex:n}},{children:t}))},LO=T.div`
    overflow: hidden;
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};
    background: ${sc.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?lc["body-md-regular"]:lc["body-baseline-regular"]}

    ${pc.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${gc["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${pc.MaxWidth.xs} {
        width: calc(100vw - ${gc["xs-margin"]} * 2);
    }

    ${pc.MaxWidth.xxs} {
        width: calc(100vw - ${gc["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${sc["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,NO=T.div`
    background: transparent;
    padding: ${uc["spacing-8"]};
`,WO=T.ul`
    list-style-type: none;
`,HO=T.li`
    display: flex;
    align-items: flex-start;
    gap: ${uc["spacing-8"]};
    padding: ${uc["spacing-12"]} ${uc["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?F`
                background: ${sc["bg-hover"]};
            `:e.$active?F`
                background: ${sc["bg-hover-subtle"]};
            `:void 0}
`,YO=T(Ue)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${sc["icon-selected"]};
`,VO=T.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,UO=T(Ve)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${sc["icon-selected"]};
`,XO=T(Ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${sc["icon-primary-subtlest"]};
`,KO=T.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,qO=T(Ug)`
    cursor: pointer;
    overflow: hidden;
    color: ${sc["text-primary"]};
    font-size: inherit;
`,GO=T(qO)`
    ${lc["body-baseline-semibold"]}
`,ZO=T(qO)`
    ${lc["body-md-semibold"]}
    padding: ${uc["spacing-8"]} ${uc["spacing-8"]};
`,QO=T.div`
    width: 100%;
    display: flex;
    padding: ${uc["spacing-12"]} ${uc[16]};
    align-items: center;
`,JO=T(z)`
    margin-right: ${uc["spacing-4"]};
    color: ${sc["icon-error"]};
    height: 1em;
    width: 1em;
`,eD=T(Hc)`
    margin-right: ${uc["spacing-8"]};
    color: ${sc.icon};
`,tD=T.div`
    background: ${sc["bg-strong"]};
    border-radius: ${hc.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?lc["body-md-regular"]:lc["body-baseline-regular"]}
`,rD=T.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${uc["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${uc["spacing-8"]} ${uc["spacing-16"]}
              `:F`10px ${uc["spacing-16"]}`};
`,nD=T(Vg)`
    flex: 1;
`,iD=T(Le)`
    color: ${sc.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,oD=T(wc)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${uc["spacing-8"]};
    margin-left: -${uc["spacing-8"]};
    color: ${sc.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,aD=g(((r,n)=>{var{value:i,variant:o,onClear:a}=r,s=dt(r,["value","variant","onClear"]);return t(tD,Object.assign({$variant:o},{children:[t(rD,Object.assign({$variant:o},{children:[e(iD,{"aria-hidden":!0}),e(nD,Object.assign({ref:n,value:i,$variant:o},s))]})),i&&e(oD,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a},{children:e(Ie,{"aria-hidden":!0})}))]}))})),sD=({listItems:n,multiSelect:i,selectedItems:s,disableItemFocus:l,itemsLoadState:c="success",itemTruncationType:d="end",itemMaxLines:h=2,labelDisplayType:g="inline",variant:m="default",listboxId:b,width:v,topScrollItem:y,onSelectItem:x,onSelectAll:$,onDismiss:w,onRetry:C,valueExtractor:S,listExtractor:k,renderListItem:O,renderCustomCallToAction:D,enableSearch:j,hideNoResultsDisplay:E,searchPlaceholder:_="Search",searchFunction:T,onSearch:F})=>{const{focusedIndex:M,setFocusedIndex:A}=f(RO),[B,I]=a(""),[z,R]=a(n),P=gu(c),L=uu(),N=o(),W=o(),H=o([]),Y=o(),V=e=>k?k(e):e.toString(),U=p((e=>!!Ok(s,(t=>jk(t,e)))),[s]),X=lu((()=>T(B))),K=lu((()=>n.filter((e=>{var t;const r=V(e),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),i="string"==typeof r||null===(t=r.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),o=B.trim().toLowerCase();return n.includes(o)||i&&i.includes(o)})))),q=(e,t)=>{A(t),null==x||x(e,(e=>S?S(e):e)(e))},G=e=>{const t=e.target.value;I(t),null==F||F()},Z=()=>{var e;I(""),null===(e=Y.current)||void 0===e||e.focus(),null==F||F()},Q=()=>{null==C||C()};cu("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),M<z.length-1){const e=M+1;null===(t=H.current[e])||void 0===t||t.focus(),A(e)}break;case"ArrowUp":if(e.preventDefault(),M>0){const e=M-1;null===(r=H.current[e])||void 0===r||r.focus(),A(e)}else 0===M&&Y.current&&(Y.current.focus(),A(-1));break;case"Space":case"Enter":document.activeElement===H.current[M]&&(e.preventDefault(),z[M]&&q(z[M],M))}})),u((()=>{if(void 0===y)return;const e=setTimeout((()=>{var e;const t=n.indexOf(y),r=H.current[t];if(N.current){const t=null!==(e=null==r?void 0:r.offsetTop)&&void 0!==e?e:0;N.current.scrollTop=t-8}A(t)}),0);return()=>clearTimeout(e)}),[H,n,A,y]),u((()=>{if(L)return;if(l)return;const e=n.findIndex((e=>U(e)));Y.current?(A(-1),setTimeout((()=>{var e;return null===(e=Y.current)||void 0===e?void 0:e.focus()}),200)):H.current[M]?setTimeout((()=>{var e;return null===(e=H.current[M])||void 0===e?void 0:e.focus()}),200):H.current[e]?(A(e),setTimeout((()=>{var t;return null===(t=H.current[e])||void 0===t?void 0:t.focus()}),200)):(A(0),setTimeout((()=>{var e;return null===(e=H.current[0])||void 0===e?void 0:e.focus()}),200))}),[U,l,M,n,L,A]),u((()=>{L&&P&&(l||"success"===c&&Y.current&&(A(-1),Y.current.focus()))}),[L,P,c,A,l]),u((()=>{R(""===B?n:T?X():K())}),[X,K,n,T,B]);const J=t=>i?e(t?UO:XO,{"aria-hidden":!0}):t?e(YO,{"aria-hidden":!0}):e(VO,{}),ee=(t,r)=>{const n=V(t),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel;return e(zO,{displayType:g,label:i,maxLines:h,selected:r,sublabel:o,truncationType:d,variant:m})},te=()=>{if(!C||C&&"success"===c)return z.map(((n,o)=>{const a=U(n),s=o===M;return e(HO,Object.assign({"aria-selected":a,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>q(n,o),onMouseEnter:()=>(e=>{A(e)})(o),ref:e=>H.current[o]=e,role:"option",tabIndex:s?0:-1,$active:s,$selected:a},{children:O?O(n,{selected:a}):t(r,{children:[J(a),ee(n,a)]})}),((e,t)=>`item_${t}__${S?S(e):e}`)(n,o))}))},re=()=>{if((j||T)&&"success"===c)return e(aD,{ref:Y,onChange:G,value:B,placeholder:_,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Z,variant:m})},ne=()=>{if(i&&z.length>0&&!B&&"success"===c)return e(KO,{children:e(ZO,Object.assign({onClick:$,type:"button",$variant:m},{children:0===s.length?"Select all":"Clear all"}))})},ie=()=>{if(!E&&(B||!j)&&0===z.length&&"success"===c)return t(QO,Object.assign({"data-testid":"list-no-results"},{children:[e(JO,{"data-testid":"no-result-icon"}),"No results found."]}))},oe=()=>{if(C&&"loading"===c)return t(QO,Object.assign({"data-testid":"list-loading"},{children:[e(eD,{}),"Loading..."]}))},ae=()=>{if(C&&"fail"===c)return t(QO,Object.assign({"data-testid":"list-fail"},{children:[e(JO,{"data-testid":"load-error-icon"}),"Failed to load. ",e(GO,Object.assign({onClick:Q,type:"button",$variant:m},{children:"Try again."}))]}))};return t(LO,Object.assign({"data-testid":"dropdown-container",ref:N,$width:v,$variant:m},{children:[t(NO,Object.assign({ref:W,"data-testid":"dropdown-list"},{children:[re(),ne(),ie(),oe(),ae(),e(WO,Object.assign({role:"listbox",id:b},{children:te()}))]})),(()=>{if(D)return e("div",Object.assign({"data-testid":"custom-cta"},{children:D(w,z)}))})()]}))},lD=T(Ug)`
    display: flex;
    align-items: center;
    gap: ${uc["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${uc["spacing-16"]};

    ${e=>"small"===e.$variant?lc["body-md-regular"]:lc["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,cD=T.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${cc["duration-250"]} ${cc["ease-default"]};

    svg {
        color: ${sc.icon};
        height: 1em;
        width: 1em;
    }
`,dD=g((({children:r,disabled:n,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},c)=>t(lD,Object.assign({ref:c,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l},{children:[r,!s&&e(cD,Object.assign({$expanded:i,$variant:l},{children:e(fe,{"aria-hidden":!0})}))]}))));var uD=Symbol.for("immer-nothing"),hD=Symbol.for("immer-draftable"),gD=Symbol.for("immer-state"),pD="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function fD(e,...t){if("production"!==process.env.NODE_ENV){const r=pD[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var mD=Object.getPrototypeOf;function bD(e){return!!e&&!!e[gD]}function vD(e){return!!e&&(xD(e)||Array.isArray(e)||!!e[hD]||!!e.constructor?.[hD]||kD(e)||OD(e))}var yD=Object.prototype.constructor.toString();function xD(e){if(!e||"object"!=typeof e)return!1;const t=mD(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===yD}function $D(e,t){0===wD(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function wD(e){const t=e[gD];return t?t.type_:Array.isArray(e)?1:kD(e)?2:OD(e)?3:0}function CD(e,t){return 2===wD(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function SD(e,t,r){const n=wD(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function kD(e){return e instanceof Map}function OD(e){return e instanceof Set}function DD(e){return e.copy_||e.base_}function jD(e,t){if(kD(e))return new Map(e);if(OD(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=xD(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[gD];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(mD(e),t)}{const t=mD(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function ED(e,t=!1){return TD(e)||bD(e)||!vD(e)||(wD(e)>1&&(e.set=e.add=e.clear=e.delete=_D),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>ED(t,!0)))),e}function _D(){fD(2)}function TD(e){return Object.isFrozen(e)}var FD,MD={};function AD(e){const t=MD[e];return t||fD(0,e),t}function BD(){return FD}function ID(e,t){t&&(AD("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function zD(e){RD(e),e.drafts_.forEach(LD),e.drafts_=null}function RD(e){e===FD&&(FD=e.parent_)}function PD(e){return FD={drafts_:[],parent_:FD,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function LD(e){const t=e[gD];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function ND(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[gD].modified_&&(zD(t),fD(4)),vD(e)&&(e=WD(t,e),t.parent_||YD(t,e)),t.patches_&&AD("Patches").generateReplacementPatches_(r[gD].base_,e,t.patches_,t.inversePatches_)):e=WD(t,r,[]),zD(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==uD?e:void 0}function WD(e,t,r){if(TD(t))return t;const n=t[gD];if(!n)return $D(t,((i,o)=>HD(e,n,t,i,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return YD(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),$D(i,((i,a)=>HD(e,n,t,i,a,r,o))),YD(e,t,!1),r&&e.patches_&&AD("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function HD(e,t,r,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===r&&fD(5),bD(i)){const a=WD(e,i,o&&t&&3!==t.type_&&!CD(t.assigned_,n)?o.concat(n):void 0);if(SD(r,n,a),!bD(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(vD(i)&&!TD(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;WD(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||YD(e,i)}}function YD(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ED(t,r)}var VD={get(e,t){if(t===gD)return e;const r=DD(e);if(!CD(r,t))return function(e,t,r){const n=KD(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!vD(n)?n:n===XD(e.base_,t)?(GD(e),e.copy_[t]=ZD(n,e)):n},has:(e,t)=>t in DD(e),ownKeys:e=>Reflect.ownKeys(DD(e)),set(e,t,r){const n=KD(DD(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=XD(DD(e),t),a=n?.[gD];if(a&&a.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((i=r)===(o=n)?0!==i||1/i==1/o:i!=i&&o!=o)&&(void 0!==r||CD(e.base_,t)))return!0;GD(e),qD(e)}var i,o;return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==XD(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,GD(e),qD(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=DD(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){fD(11)},getPrototypeOf:e=>mD(e.base_),setPrototypeOf(){fD(12)}},UD={};function XD(e,t){const r=e[gD];return(r?DD(r):e)[t]}function KD(e,t){if(!(t in e))return;let r=mD(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=mD(r)}}function qD(e){e.modified_||(e.modified_=!0,e.parent_&&qD(e.parent_))}function GD(e){e.copy_||(e.copy_=jD(e.base_,e.scope_.immer_.useStrictShallowCopy_))}$D(VD,((e,t)=>{UD[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),UD.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&fD(13),UD.set.call(this,e,t,void 0)},UD.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&fD(14),VD.set.call(this,e[0],t,r,e[0])};function ZD(e,t){const r=kD(e)?AD("MapSet").proxyMap_(e,t):OD(e)?AD("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:BD(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=VD;r&&(i=[n],o=UD);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:BD()).drafts_.push(r),r}function QD(e){if(!vD(e)||TD(e))return e;const t=e[gD];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=jD(e,t.scope_.immer_.useStrictShallowCopy_)}else r=jD(e,!0);return $D(r,((e,t)=>{SD(r,e,QD(t))})),t&&(t.finalized_=!1),r}var JD=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&fD(6),void 0!==r&&"function"!=typeof r&&fD(7),vD(e)){const i=PD(this),o=ZD(e,void 0);let a=!0;try{n=t(o),a=!1}finally{a?zD(i):RD(i)}return ID(i,r),ND(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===uD&&(n=void 0),this.autoFreeze_&&ED(n,!0),r){const t=[],i=[];AD("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}fD(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const i=this.produce(e,t,((e,t)=>{r=e,n=t}));return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){vD(e)||fD(8),bD(e)&&(e=function(e){bD(e)||fD(10,e);return QD(e)}(e));const t=PD(this),r=ZD(e,void 0);return r[gD].isManual_=!0,RD(t),r}finishDraft(e,t){const r=e&&e[gD];r&&r.isManual_||fD(9);const{scope_:n}=r;return ID(n,t),ND(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=AD("Patches").applyPatches_;return bD(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},ej=JD.produce;JD.produceWithPatches.bind(JD),JD.setAutoFreeze.bind(JD),JD.setUseStrictShallowCopy.bind(JD),JD.applyPatches.bind(JD),JD.createDraft.bind(JD),JD.finishDraft.bind(JD);var tj=FC,rj=dS,nj=Jw,ij=Ko,oj=BC,aj=rC,sj=DC,lj=bC,cj=Object.prototype.hasOwnProperty;var dj=function(e){if(null==e)return!0;if(oj(e)&&(ij(e)||"string"==typeof e||"function"==typeof e.splice||aj(e)||lj(e)||nj(e)))return!e.length;var t=rj(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(sj(e))return!tj(e).length;for(var r in e)if(cj.call(e,r))return!1;return!0},uj=Uo(dj);const hj=(e,t,r)=>ej(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n];if(i.checked=!!t.find((e=>jk(e,i.keyPath))),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}})),gj=(e,t)=>{const[r,...n]=t;if(uj(e)||uj(r))return;const i=e.find((e=>e.key===r));return i&&n.length?gj(i.subItems,n):i},pj=T.li`
    display: ${e=>e.$visible?"flex":"none"};
`,fj=T.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${uc["spacing-8"]};
    padding: ${uc["spacing-12"]} ${uc["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&F`
            background: ${sc["bg-hover"]};
        `}
`,mj=T.div`
    height: 1px;
    width: calc((1lh + ${uc["spacing-8"]}) * ${e=>e.$level});
`,bj=T.div`
    width: 1lh;
    height: 1lh;
    color: ${sc["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${cc["duration-350"]}
            ${cc["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,vj=T.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${uc["spacing-8"]};
`,yj=T.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":uc["spacing-16"]};

    display: flex;
    justify-content: center;
`,xj=T(Ke)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${sc["icon-selected"]};
`,$j=({listItems:r,multiSelect:n,selectedKeyPaths:i,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:c=2,variant:d="default",listboxId:h,width:g,mode:p="default",selectableCategory:f,onSelectItem:b,onSelectAll:v,onRetry:y,enableSearch:x,hideNoResultsDisplay:$,searchPlaceholder:w="Search",onSearch:C})=>{const S=n||f,[k,O]=a(""),D=k.toLowerCase().trim(),[j,E]=a(!1),_=o(),T=o(),F=o([]),M=o(),A=uu(),[B,I]=a([]),[z,R]=a([]),P=m((()=>{let e=0;for(const t of B)t.level>e&&(e=t.level);return e}),[B]),[L,N]=a(0),W=e=>{const t=e.target.value;O(t),""===t?E(!1):t.trim().length>=3&&E(!0),null==C||C()},H=()=>{O(""),E(!1),M.current.focus(),null==C||C()},Y=()=>{null==y||y()},V=()=>{if(0===i.length){const e=[],t=[];B.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==v||v(e,t)}else null==v||v([],[])},U=lu(((e,t)=>((e,t,r,n,i)=>{const o=[],a=(e,s)=>{var l,c;const d=[],u=!!e.find((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));for(let h=0;h<e.length;h++){const g=e[h],p=s?s.level+1:0,f={item:g,index:o.length,indexInParent:h,parentSetSize:e.length,keyPath:s?[...s.keyPath,g.key]:[g.key],parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||s.expanded,expanded:i,checked:!1,hasSubItems:!!(null===(l=g.subItems)||void 0===l?void 0:l.length),subItemIndexes:[],hasNestedSiblings:u,matched:!!n&&-1!==g.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(f.checked=!!t.find((e=>jk(e,f.keyPath))),d.push(f),o.push(f),null===(c=g.subItems)||void 0===c?void 0:c.length){const e=a(g.subItems,f);if(r&&!0!==f.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?f.checked=!0:r&&(f.checked="mixed")}f.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),f.subItemIndexes=e.map((e=>e.index))}}return d};return a(e,void 0),o})(e,i,n,D,t))),X=lu((e=>{return i.length?(t=U(e,!1),ej(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>ej(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),o=e[r].keyPath.slice(0,i.length);jk(i,o)&&(n.visible=!0)}return e})))(U(e,!1));var t})),K=lu((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(D))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),q=lu((()=>{I((e=>hj(e,i,n))),j&&R((e=>hj(e,i,n)))})),G=(e,t)=>{const r=((e,t,r)=>ej(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!jk(n,a))break;t.visible=r&&o.expanded&&o.visible}})))(j?z:B,e,t);N(e),j?R(r):I(r)};cu("keydown",(e=>{const t=j?z:B;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return n;return-1})(t,(e=>e.visible),L+1);r>=0&&(N(r),F.current[r].focus());break}case"ArrowUp":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return n;return-1})(t,(e=>e.visible),L-1);r>=0?(N(r),F.current[r].focus()):0===L&&M.current&&(M.current.focus(),N(-1));break}case"ArrowRight":e.preventDefault(),G(L,!0);break;case"ArrowLeft":e.preventDefault(),G(L,!1);break;case"Space":if(document.activeElement===F.current[L]){e.preventDefault();const r=t[L];if(r.hasSubItems&&!S)return;null==b||b(r)}}})),u((()=>{let e;"default"===p?e=X(r):"expand"===p?e=U(r,!0):"collapse"===p&&(e=U(r,!1)),I(e)}),[U,X,r,p]),u((()=>{q()}),[n,i,q]),u((()=>{if(j&&k.trim().length>=3){const e=K(r),t=(e=>ej(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(U(e,!1));R(t)}}),[K,U,r,j,k]),u((()=>{A||(M.current?(N(-1),setTimeout((()=>{var e;return null===(e=M.current)||void 0===e?void 0:e.focus()}),200)):F.current[L]?setTimeout((()=>{var e;return null===(e=F.current[L])||void 0===e?void 0:e.focus()}),200):(N(0),setTimeout((()=>{var e;return null===(e=F.current[0])||void 0===e?void 0:e.focus()}),200)))}),[L,A,N]);const Z=()=>{if(x&&"success"===s)return e(aD,{ref:M,onChange:W,value:k,placeholder:w,"data-testid":"search-input","aria-label":"Enter text to search",onClear:H,variant:d})},Q=()=>{if(n&&!j&&B.length>0&&"success"===s)return e(KO,{children:e(ZO,Object.assign({onClick:V,type:"button",$variant:d},{children:0===i.length?"Select all":"Clear all"}))})},J=()=>{if(!$&&j&&0===z.length&&"success"===s)return t(QO,Object.assign({"data-testid":"list-no-results"},{children:[e(JO,{"data-testid":"no-result-icon"}),"No results found."]}))},ee=()=>{if(y&&"loading"===s)return t(QO,Object.assign({"data-testid":"list-loading"},{children:[e(Vc,{}),"Loading..."]}))},te=()=>{if(y&&"fail"===s)return t(QO,Object.assign({"data-testid":"list-fail"},{children:[e(JO,{"data-testid":"load-error-icon"}),"Failed to load. ",e(GO,Object.assign({onClick:Y,type:"button",$variant:d},{children:"Try again."}))]}))},re=t=>{if(n)switch(t.checked){case"mixed":return e(xj,{"aria-hidden":!0});case!0:return e(UO,{"aria-hidden":!0});default:return e(XO,{"aria-hidden":!0})}if(!t.hasSubItems)return e(yj,Object.assign({$hasNestedSiblings:t.hasNestedSiblings||0===t.level},{children:t.checked&&e(YO,{"aria-hidden":!0})}))},ne=()=>(j?z:B).map(((r,i)=>{const{item:o,level:a,visible:s,expanded:d,keyPath:u,checked:h,hasSubItems:g,indexInParent:p,parentSetSize:f}=r,m=L===i,v=g&&!S;return t(pj,Object.assign({$visible:s},{children:[P>0&&e(mj,{$level:a}),P>0&&!g&&n&&e(vj,{}),t(fj,Object.assign({"aria-checked":h,"aria-selected":!!h,"aria-expanded":g?d:void 0,"aria-level":a+1,"aria-posinset":p+1,"aria-setsize":f,"data-testid":"list-item",onClick:e=>{var t;e.stopPropagation(),v?G(i,!d):(N(t=i),null==b||b((j?z:B)[t]))},onMouseEnter:()=>{N(i)},ref:e=>F.current[i]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:v},{children:[g&&e(bj,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),G(i,!d)},$expanded:d},{children:e(Xe,{})})),re(r),e(zO,{bold:g,searchTerm:j?D:void 0,label:o.label,selected:!!h,truncationType:l,maxLines:c})]}))]}),`[${u.join("---")}]`)}));return e(LO,Object.assign({"data-testid":"dropdown-container",ref:_,$width:g,$variant:d},{children:t(NO,Object.assign({"data-testid":"nested-dropdown-list"},{children:[Z(),Q(),J(),ee(),te(),e("div",Object.assign({"aria-multiselectable":n,id:h,ref:T,role:"tree"},{children:ne()}))]}))}))},wj=({selectedOptions:t,placeholder:r="Select",options:n,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:g,searchPlaceholder:p,valueExtractor:f,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:$="success",optionTruncationType:w="end",renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:k,onBlur:O,variant:D="default",readOnly:j,alignment:E,dropdownZIndex:_})=>{const[T,F]=a(t||[]),[M,A]=a(!1),[B,I]=a(!1),[z]=a((()=>au.generate())),R=o(),P=o();u((()=>{F(t||[])}),[t]);const L=()=>{T&&T.length>0?(F([]),U([])):(F(n),U(n))},N=(e,t)=>{const r=[...T],n=kk(T,(e=>(f?f(e):e)===t));n>-1?r.splice(n,1):r.push(e),F(r),U(r)},W=()=>{M&&(A(!1),V(!1))},H=()=>{B||M||I(!0)},Y=e=>{!B||M||R.current.contains(e.relatedTarget)||(I(!1),null==O||O())},V=e=>{!e&&y&&y(),e&&v&&v()},U=e=>{b&&b(e)};return e(PO,{children:e(_p,{enabled:!j&&!i,isOpen:M,renderElement:()=>e(Hg,Object.assign({className:l,"data-testid":c,id:d,ref:R,tabIndex:-1,onFocus:H,onBlur:Y,$focused:B,$disabled:i,$readOnly:j,$error:s},{children:e(dD,Object.assign({ref:P,disabled:i,expanded:M,listboxId:z,popupRole:"listbox",readOnly:j,variant:D},{children:e(wp,Object.assign({$disabled:i},{children:T&&0!==T.length?e(Cp,Object.assign({$variant:D},{children:n&&T.length===n.length?"All selected":`${T.length} selected`})):e(Sp,Object.assign({truncateType:w,$variant:D},{children:r}))}))}))})),renderDropdown:({elementWidth:t})=>e(sD,{listboxId:z,listItems:n,onSelectItem:N,onDismiss:W,valueExtractor:f,listExtractor:m,enableSearch:h,searchFunction:g,searchPlaceholder:p,multiSelect:!0,selectedItems:T,onSelectAll:L,onRetry:x,itemsLoadState:$,itemTruncationType:w,renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:k,variant:D,width:t}),onOpen:()=>{A(!0),V(!0),I(!0)},onClose:e=>{A(!1),V(!1),"click"!==e&&(I(!1),null==O||O())},onDismiss:()=>{P.current.focus(),A(!1),V(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:_})})},Cj=(e,t)=>{const[r,...n]=t;if(uj(e)||!r)return;const i=e.find((e=>e.key===r));return i?n.length?Cj(i.subItems,n):i:void 0},Sj=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...Sj(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},kj=({placeholder:t="Select",options:r,disabled:n,error:i,className:s,"data-testid":l,id:c,selectedKeyPaths:d,mode:h,valueToStringFunction:g,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,readOnly:b,onSearch:v,onSelectOptions:y,onShowOptions:x,onHideOptions:$,onRetry:w,onBlur:C,optionsLoadState:S="success",optionTruncationType:k="end",variant:O,alignment:D,dropdownZIndex:j})=>{const E=r,[_,T]=a(d||[]),[F,M]=a([]),[A,B]=a(!1),[I,z]=a(!1),[R]=a((()=>au.generate())),P=o(),L=o(),N=o();u((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const i=t[n],o=Cj(e,i);o&&r.push({value:o.value,label:o.label,keyPath:i})}return r})(E,e);T(e),M(t)}),[d,E]);const W=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));T(e),M(r),q(e,r)},H=e=>{const t=G(e),r=t.map((e=>e.keyPath));M(t),T(r),q(r,t)},Y=()=>{I||A||z(!0)},V=e=>{!I||A||P.current.contains(e.relatedTarget)||(z(!1),null==C||C())},U=()=>{const{label:e,value:t}=F[0];return F.length>1?`${F.length} selected`:g?g(t)||t.toString():e},X=e=>{if("middle"===k){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),su.truncateOneLine(e,t,120,6)}return e},K=e=>{!e&&$&&$(),e&&x&&x()},q=(e,t)=>{if(y){const r=t.map((e=>e.value));y(e,r)}},G=e=>{if(!0===e.checked)return F.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!jk(e.keyPath,r)}));{const t=[...F],r=e.hasSubItems?((e,t)=>{const r=Cj(e,t);return r&&r.subItems?Sj(r.subItems,t):[]})(E,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{F.find((t=>jk(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(_p,{enabled:!b&&!n,isOpen:A,renderElement:()=>e(Hg,Object.assign({className:s,"data-testid":l,id:c,ref:P,tabIndex:-1,onFocus:Y,onBlur:V,$focused:I,$disabled:n,$readOnly:b,$error:i},{children:e(dD,Object.assign({ref:L,disabled:n,expanded:A,listboxId:R,popupRole:"tree",readOnly:b,variant:O},{children:e(wp,Object.assign({ref:N,$disabled:n},{children:uj(F)?e(Sp,Object.assign({truncateType:k},{children:t})):e(Cp,Object.assign({truncateType:k},{children:X(U())}))}))}))})),renderDropdown:({elementWidth:t})=>e($j,{listboxId:R,listItems:E,multiSelect:!0,selectedKeyPaths:_,itemsLoadState:S,itemTruncationType:k,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,onSelectItem:H,onSelectAll:W,onRetry:w,onSearch:v,variant:O,mode:h,width:t}),onOpen:()=>{B(!0),K(!0),z(!0)},onClose:e=>{B(!1),K(!1),"click"!==e&&(z(!1),null==C||C())},onDismiss:()=>{L.current.focus(),B(!1),K(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:j})},Oj=({placeholder:t="Select",options:r,disabled:n,error:i,className:s,"data-testid":l,id:c,selectedKeyPath:d,mode:h,valueToStringFunction:g,enableSearch:p,searchPlaceholder:f,selectableCategory:m,hideNoResultsDisplay:b,readOnly:v,onBlur:y,onSearch:x,onSelectOption:$,onShowOptions:w,onHideOptions:C,onRetry:S,optionsLoadState:k="success",optionTruncationType:O="end",variant:D,alignment:j,dropdownZIndex:E})=>{const _=r,[T,F]=a(d?[d]:[]),[M,A]=a(),[B,I]=a(!1),[z,R]=a(!1),[P]=a((()=>au.generate())),L=o(),N=o(),W=o();u((()=>{F(d?[d]:[]);const e=gj(_,d||[]);A(null!=e?e:void 0)}),[d,_]);const H=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;F([r]),A({label:n,value:i}),I(!1),K(!1),null===(t=N.current)||void 0===t||t.focus(),null==$||$(r,i)},Y=()=>{z||B||R(!0)},V=e=>{!z||B||L.current.contains(e.relatedTarget)||(R(!1),null==y||y())},U=()=>{const{label:e,value:t}=M;return g?g(t)||t.toString():e},X=e=>{if("middle"===O){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),su.truncateOneLine(e,t,120,6)}return e},K=e=>{!e&&C&&C(),e&&w&&w()};return e(_p,{enabled:!v&&!n,isOpen:B,renderElement:()=>e(Hg,Object.assign({className:s,"data-testid":l,id:c,ref:L,tabIndex:-1,onFocus:Y,onBlur:V,$focused:z,$disabled:n,$readOnly:v,$error:i},{children:e(dD,Object.assign({ref:N,disabled:n,expanded:B,listboxId:P,popupRole:"tree",readOnly:v,variant:D},{children:e(wp,Object.assign({ref:W,$disabled:n},{children:uj(M)?e(Sp,Object.assign({truncateType:O},{children:t})):e(Cp,Object.assign({truncateType:O},{children:X(U())}))}))}))})),renderDropdown:({elementWidth:t})=>e($j,{listboxId:P,listItems:_,selectedKeyPaths:T,selectableCategory:m,itemsLoadState:k,itemTruncationType:O,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:b,onSelectItem:H,onRetry:S,onSearch:x,variant:D,mode:h,width:t}),onOpen:()=>{I(!0),K(!0),R(!0)},onClose:e=>{I(!1),K(!1),"click"!==e&&(R(!1),null==y||y())},onDismiss:()=>{N.current.focus(),I(!1),K(!1)},clickToToggle:!0,offset:8,alignment:j,fitAvailableHeight:!0,customZIndex:E})};var Dj=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r};var jj=function(e){return function(t,r,n){for(var i=-1,o=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}},Ej=jj(),_j=PC;var Tj=BC;var Fj=function(e,t){return function(r,n){if(null==r)return r;if(!Tj(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Object(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}((function(e,t){return e&&Ej(e,t,_j)}));var Mj=Dj,Aj=Fj,Bj=hk,Ij=function(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r},zj=Ko;var Rj=Uo((function(e,t,r){var n=zj(e)?Mj:Ij,i=arguments.length<3;return n(e,Bj(t),r,i,Aj)}));const Pj=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],Lj=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var Nj;!function(e){e.getCountries=()=>[].concat(...Pj.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:Lj("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,i=n.split(" ");i.shift();const o=i.join(" ");return Rj(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[r,...n]=e.remainingText;return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(Nj||(Nj={}));const Wj=t=>{var{onChange:r,value:n,allowClear:i,onClear:s,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:g,enableSearch:p,onHideOptions:f,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=dt(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=a(Nj.getCountries()),[$,w]=a(void 0),[C,S]=a(""),k=o(),O=hu({ref:k,formatter:e=>Nj.formatNumber(e.replace(/[^0-9]/g,""),$)});u((()=>{const e=x.filter((e=>e.countryCode===Hj(null==n?void 0:n.countryCode)))[0];w(e),S(Nj.formatNumber(null==n?void 0:n.number,e))}),[n]);const D=e=>{E(C,e),r&&j(C,e)},j=(e,t)=>{const n=Nj.formatNumber(e,t);r({number:n.replace(/[\s()]+/g,""),countryCode:t&&Yj(t.countryCode)})},E=(e,t)=>{S(Nj.formatNumber(e,t)),w(t)};return e(gO,Object.assign({ref:k,value:C,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=O();t(),E(e,$),r&&j(e,$)},allowClear:i&&!!C,onClear:()=>{s?s():S("")},onBlur:l,error:c,placeholder:b,addon:d?{type:"label",attributes:{value:Yj(null==$?void 0:$.countryCode)}}:{type:"list",attributes:{placeholder:h,options:x,selectedOption:$,enableSearch:p,searchPlaceholder:g,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:Yj(e.countryCode)}),onSelectOption:D,onHideOptions:f,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},Hj=e=>e?e.replace("+",""):"",Yj=e=>e?e.includes("+")?e:`+${e}`:"",Vj=({className:n,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:h=!1,disabled:g=!1,error:f,valueExtractor:m,listExtractor:b,displayValueExtractor:v=(e=>e.toString()),onSelectOption:y})=>{const x=s&&v(s),[$,w]=a(x||""),[C,S]=a(x||""),[k,O]=a([]),[D,j]=a(!0),[E,_]=a(!1),[T,F]=a(!!s),[M,A]=a(s),B=o(c),I=e=>ut(void 0,void 0,void 0,(function*(){_(!1),j(!0);try{const t=yield B.current(e);S(e),O(t),j(!1)}catch(e){_(!0)}})),z=p(Jh((e=>I(e)),500,{leading:!1,trailing:!0}),[]);u((()=>{B.current=c}),[c]),u((()=>{$&&$.length>=l&&$!==C?z($):z.cancel(),""===$&&M&&(y&&y(void 0,void 0),L(),A(void 0)),s&&$!==v(s)&&F(!1)}),[$,s]),u((()=>{w(s?v(s):""),L(s),A(s)}),[s]);const R=e=>{w(e.target.value)},P=(e,t)=>{y&&y(e,t)},L=e=>{S(e?v(e):""),F(!!e),O([]),j(!0)},N=()=>{w(""),y&&y(void 0,void 0),L()},W=()=>{T||M?(L(M),w(v(M)),y&&y(M,Y(M)),A(M)):N()},H=()=>$&&$.length>=l&&!T,Y=e=>m?m(e):e,V=()=>e(J$,{type:"text",value:$,onChange:R,placeholder:d,readOnly:h,disabled:g,allowClear:!0,onClear:N,styleType:"no-border",onBlur:$.length<l?W:void 0});return t(kp,Object.assign({className:n,show:H(),error:f&&!H(),disabled:g,readOnly:h,testId:i,onBlur:W},{children:[e(h?r:vp,{children:V()}),!h&&H()&&e($p,{}),e(Qk,{listItems:k,onSelectItem:P,valueExtractor:m,listExtractor:b,itemsLoadState:E?"fail":D?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>I($),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))},Uj=T.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,Xj=T(q$)`
    position: absolute;
    right: 0;
    padding-left: ${uc["spacing-8"]};
    margin-right: 0;
`,Kj=T(bp)`
    // space for clear icon
    padding-right: calc(1.25rem + ${uc["spacing-16"]});
`,qj=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:s,disabled:l,className:c,readOnly:d,error:h,"data-testid":g,id:p,enableSearch:f=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:$,onSelectOption:w,listStyleWidth:C,onShowOptions:S,onHideOptions:k,onRetry:O,optionsLoadState:D={from:"success",to:"success"},optionTruncationType:j="middle",renderCustomSelectedOption:E,renderListItem:_,renderCustomCallToAction:T}=r,F=dt(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=a(),[B,I]=a(),z=o(),R={from:o(),to:o()},[P,L]=a("none");u((()=>{A(null==n?void 0:n.from),I(null==n?void 0:n.to)}),[n]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||L("from"===e?"from":"to"===e&&M?"to":"from")},W=e=>{const t="from"===e?M:B;return $?$(t):v?v(t):null==t?void 0:t.toString()},H=(e,t)=>{if("middle"===j){let r=0;return R[e]&&R[e].current&&(r=R[e].current.getBoundingClientRect().width),su.truncateOneLine((e=>"string"==typeof e?e:y(e)||e.toString())(t),r,120,8)}return t},Y=e=>{!e&&k&&k(),e&&S&&S()},V=t=>{const r="from"===t?M:B;return r?E?E(r):e(Cp,Object.assign({truncateType:j},{children:H(t,W(t))})):e(Sp,Object.assign({truncateType:j},{children:H(t,i[t])}))},U=t=>e(wp,Object.assign({onClick:N(t),ref:R[t],$disabled:l},{children:V(t)}));return t(kp,Object.assign({show:"none"!==P,"data-testid":F["data-testid"],error:h&&!("none"!==P),disabled:l,readOnly:d,testId:g,onBlur:()=>{Y(!1),L("none"),M&&B||(I(void 0),A(void 0))},className:c},{children:[t(Uj,{children:[e(Kj,Object.assign({type:"button","data-testid":p||"selector",disabled:l,ref:z,onClick:N()},F,{children:t(Jp,Object.assign({currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})()},{children:[U("from"),U("to")]}))})),"none"===P&&M&&B&&!d&&!l&&e(Xj,Object.assign({onClick:e=>{e.stopPropagation(),A(void 0),I(void 0),w&&w({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:e(G$,{"aria-hidden":!0})}))]}),"none"!==P&&e($p,{}),(()=>{if("none"===P)return null;const t=s[P];if(t&&t.length>0){const r="from"===P?M:B;return e(Qk,{listItems:t,onSelectItem:(e,t)=>{return r=e,n=t,"from"===(i=P)?A(r):I(r),Y(!1),z&&z.current.focus(),w&&w({[i]:r},n),void("from"===i?(I(void 0),L("to"),Y(!0)):L("none"));var r,n,i},onDismiss:()=>(L("none"),Y(!1),z&&z.current.focus(),void(M&&B||(I(void 0),A(void 0)))),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:f,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:r?[r]:[],onRetry:O,itemsLoadState:D[P],itemTruncationType:j,renderListItem:_,renderCustomCallToAction:T})}return null})()]}))},Gj=({selectedOption:t,placeholder:r="Select",options:n,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:g,searchPlaceholder:p,valueExtractor:f,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:$,onRetry:w,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:k,renderListItem:O,hideNoResultsDisplay:D,renderCustomCallToAction:j,onBlur:E,variant:_="default",readOnly:T,alignment:F,dropdownZIndex:M})=>{const[A,B]=a(t),[I,z]=a(!1),[R,P]=a(!1),[L]=a((()=>au.generate())),N=o(),W=o(),H=o();u((()=>{B(t)}),[t]);const Y=(e,t)=>{W.current.focus(),B(e),z(!1),q(!1),null==y||y(e,t)},V=()=>{I&&(z(!1),q(!1))},U=()=>{R||I||P(!0)},X=e=>{!R||I||N.current.contains(e.relatedTarget)||(P(!1),null==E||E())},K=e=>{if("middle"===S){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),su.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),t,120,8)}return e},q=e=>{e?null==x||x():null==$||$()};return e(PO,{children:e(_p,{enabled:!T&&!i,isOpen:I,renderElement:()=>e(Hg,Object.assign({className:l,"data-testid":c,id:d,ref:N,tabIndex:-1,onFocus:U,onBlur:X,$focused:R,$disabled:i,$readOnly:T,$error:s},{children:e(dD,Object.assign({ref:W,disabled:i,expanded:I,listboxId:L,popupRole:"listbox",readOnly:T,variant:_},{children:e(wp,Object.assign({ref:H,$disabled:i},{children:A?k?k(A):e(Cp,Object.assign({truncateType:S,$variant:_},{children:K(v?v(A):f?f(A):A.toString())})):e(Sp,Object.assign({truncateType:S,$variant:_},{children:r}))}))}))})),renderDropdown:({elementWidth:t})=>e(sD,{listboxId:L,listItems:n,onSelectItem:Y,onDismiss:V,valueExtractor:f,listExtractor:b,enableSearch:h,searchPlaceholder:p,searchFunction:g,selectedItems:A?[A]:[],onRetry:w,itemsLoadState:C,itemTruncationType:S,renderListItem:O,hideNoResultsDisplay:D,renderCustomCallToAction:j,variant:_,width:t}),onOpen:()=>{z(!0),q(!0),P(!0)},onClose:e=>{z(!1),q(!1),"click"!==e&&(P(!1),null==E||E())},onDismiss:()=>{W.current.focus(),z(!1),q(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:M})})},Zj=T.div`
    overflow: hidden;
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};
    background: ${sc.bg};
    padding: ${uc["spacing-16"]};
    min-width: 23rem;

    ${pc.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${gc["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${pc.MaxWidth.xs} {
        width: calc(100vw - ${gc["xs-margin"]} * 2);
    }

    ${pc.MaxWidth.xxs} {
        width: calc(100vw - ${gc["xxs-margin"]} * 2);
    }
`,Qj=T.div`
    display: flex;
    align-items: baseline;
`,Jj=T.div`
    margin: 0 0.5rem;
`,eE=T.div`
    ${e=>"small"===e.$variant?lc["body-md-regular"]:lc["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return F`
                    ${Xg(1)}
                `}}
    overflow: hidden;
`,tE=T(eE)`
    color: ${sc["text-subtler"]};
`,rE=r=>{var{alignment:n="left",className:i,disabled:s,dropdownZIndex:l,error:c,histogramSlider:d,id:h,onBlur:g,onChange:p,onChangeEnd:f,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:$,value:w}=r,C=dt(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:S,bins:k=[],renderEmptyView:O,ariaLabels:D}=d,[j,E]=a(V()),[_,T]=a(!1),[F,M]=a(!1),[A]=a((()=>au.generate())),B=k.map((e=>e.minValue)),I=Math.min(...B),z=o(),R=o(),P=o(),L=C["data-testid"]||"select-histogram";u((()=>{w!==j&&E(V())}),[w]);const N=e=>{E(e),null==p||p(e)},W=e=>{E(e),null==f||f(e)},H=()=>{F||_||M(!0)},Y=e=>{!F||_||z.current.contains(e.relatedTarget)||(M(!1),null==g||g())};function V(){return null!=w?w:[I,I+S]}const U=e=>$?$(e):t(kc.BodyBL,{children:[v,e,y]});return e(PO,{children:e(_p,{enabled:!x&&!s,isOpen:_,renderElement:()=>e(Hg,Object.assign({className:i,"data-testid":L,id:h,ref:z,tabIndex:-1,onFocus:H,onBlur:Y,$focused:F,$disabled:s,$readOnly:x,$error:c},{children:e(dD,Object.assign({ref:R,disabled:s,expanded:_,listboxId:A,popupRole:"dialog",readOnly:x,variant:"default"},{children:e(wp,Object.assign({ref:P,$disabled:s},{children:B&&0!==B.length?t(Qj,{children:[U(j[0]),e(Jj,{children:"-"}),U(j[1])]}):e(tE,Object.assign({truncateType:m,$variant:"default"},{children:b}))}))}))})),renderDropdown:({elementWidth:t})=>e(Zj,Object.assign({style:{width:t}},{children:e(X$,{interval:S,value:j,bins:k,onChange:N,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:O,ariaLabels:D})})),onOpen:()=>{T(!0)},onClose:()=>{T(!1)},onDismiss:()=>{R.current.focus(),T(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:l})})},nE=t=>{var{value:r,ariaLabel:n,onChange:i,onChangeEnd:o}=t,s=dt(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=a(d());u((()=>{r!==l[0]&&c(d())}),[r]);function d(){return null!=r?[r]:[0]}return e(N$,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==i||i(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:n?[n]:void 0}))},iE=T.p`
    text-align: right;
    ${lc["body-sm-semibold"]}
    color: ${sc["text-subtler"]};
`,oE=({value:t,maxLength:n,renderCustomCounter:o})=>{const[s,l]=a("");u((()=>{l(c(`${t||""}`))}),[t,n]);const c=e=>{if(o)return o(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:i.isValidElement(s)?s:e(iE,Object.assign({"data-testid":"counter-label"},{children:s}))})},aE=T.div`
    display: flex;
    flex-direction: column;
`,sE=T.textarea`
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};
    background: ${sc.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${uc["spacing-12"]} ${uc["spacing-16"]};
    width: 100%;

    ${lc["body-baseline-regular"]}
    color: ${sc.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${dc["width-020"]} ${dc.solid}
            ${sc["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${sc["text-subtler"]};
    }

    ${e=>e.readOnly?F`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${sc["border-focus"]};
                }
            `:e.disabled?F`
                background: ${sc["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${sc["border-disabled"]};
                }
            `:e.$error?F`
                border-color: ${sc["border-error"]};

                :focus,
                :active {
                    outline-color: ${sc["border-error-focus"]};
                }
            `:void 0}
`,lE=i.forwardRef(((t,r)=>{var{value:n,disabled:i,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:h}=t,g=dt(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[p,f]=a(n);u((()=>{f(n)}),[n]);return e(sE,Object.assign({ref:r,disabled:i,value:l?l+(null!=p?p:""):p,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=c?c(r):r;if(f(n),e.target.value=l+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=c?c(null!=t?t:""):t;f(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:o,rows:s,maxLength:l?l.length+h:h},g))})),cE=i.forwardRef(((r,n)=>{var{value:i,disabled:o,rows:s=5,onChange:l,transformValue:c,prefix:d,maxLength:h,renderCustomCounter:g}=r,p=dt(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[f,m]=a(i);u((()=>{m(i)}),[i]);return t(aE,{children:[e(lE,Object.assign({ref:n,disabled:o,value:f,rows:s||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:d,transformValue:c,maxLength:h},p)),h&&e(oE,{value:f,maxLength:h,renderCustomCounter:g})]})})),dE=T.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${uc["spacing-4"]};
`,uE=T.div`
    display: flex;
    flex: 1;
    margin-right: ${uc["spacing-12"]};
`,hE=T(f$)`
    margin-top: 0;
`,gE=i.forwardRef(((n,i)=>{const{label:o,value:s,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":h,onChange:g,layoutType:p,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:$,lgCols:w,xlCols:C,xxlCols:S,transformValue:k,prefix:O=""}=n,D=dt(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[j,E]=a(s);u((()=>{E(s)}),[s]);return t(C$,Object.assign({id:c,label:o,disabled:D.disabled,layoutType:p,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:$,lgCols:w,xlCols:C,xxlCols:S},{children:[e(lE,Object.assign({id:`${c}-base`,"data-testid":h||c,value:j,error:!!l,onChange:e=>{const t=e.target.value;E(t),g&&g(e)},ref:i,prefix:O,transformValue:k},D)),l||D.maxLength?t(dE,{children:[l&&e(uE,{children:e(hE,Object.assign({"data-testid":d||(c?`${c}-error-message`:"error-message")},{children:l}))}),D.maxLength&&e(oE,{value:j,maxLength:D.maxLength,renderCustomCounter:D.renderCustomCounter})]}):e(r,{})]}))})),pE=T.div`
    position: relative;
`,fE=T(Yg)`
    height: 3rem;
    gap: ${uc["spacing-8"]};
`,mE=T(Vg)`
    display: block;
    width: 100%;
    flex: 1;
`,bE=T.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?F`
                    color: ${sc["icon-selected-disabled"]};
                `:F`
                    color: ${sc["icon-disabled-subtle"]};
                `:e.$active?F`
                color: ${sc["icon-selected"]};
            `:F`
            color: ${sc["icon-subtle"]};
        `};
`,vE=F`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${lc.Spec["weight-regular"]};
        ${e=>e.$size&&lc[`${e.$size}-regular`]}
        color: ${sc.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,yE=T.ol`
    ${vE}

    margin-left: 3rem;

    ${pc.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return F`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return F`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,xE=T.ul`
    ${vE}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,$E=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,a=dt(t,["size","bulletType","bottomMargin","children"]);return e(xE,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},a,{children:o}))};$E.displayName="TextList.Ul";const wE=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=t,s=dt(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(yE,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};wE.displayName="TextList.Ol";const CE=$E,SE=T.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${sc.bg};

    ${e=>{if(!e.$indicator)return F`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return F`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?F`
                            border-color: ${sc["border-error"]};
                        `:F`
                            border-color: ${sc["border-error"]};

                            &:has(${EE}:hover) {
                                background: ${sc["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?F`
                            border: none;
                            background: ${sc["bg-selected-disabled"]};
                        `:F`
                            border: none;
                        `:e.$selected?F`
                        border: none;
                        background: ${sc["bg-selected"]};

                        &:has(${EE}:hover) {
                            background: ${sc["bg-selected-hover"]};

                            & ${OE} {
                                color: ${sc["text-selected-hover"]};
                            }

                            & ${RE} {
                                color: ${sc["icon-selected-hover"]};
                            }
                        }
                    `:F`
                    border: none;

                    &:has(${EE}:hover) {
                        background: ${sc["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?F`
                            border-color: ${sc["border-error"]};
                        `:F`
                            border-color: ${sc["border-error"]};

                            &:has(${EE}:hover) {
                                background: ${sc["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?F`
                            border-color: ${sc["border-selected-disabled"]};
                            background: ${sc["bg-selected-disabled"]};
                        `:F`
                            border-color: ${sc["border-disabled"]};
                            background: ${sc["bg-disabled"]};
                        `:e.$selected?F`
                        border-color: ${sc["border-selected"]};
                        background: ${sc["bg-selected"]};

                        &:has(${EE}:hover) {
                            background: ${sc["bg-selected-hover"]};

                            & ${OE} {
                                color: ${sc["text-selected-hover"]};
                            }

                            & ${RE} {
                                color: ${sc["icon-selected-hover"]};
                            }
                        }
                    `:F`
                    border-color: ${sc.border};

                    &:has(${EE}:hover) {
                        background: ${sc["bg-hover-subtle"]};
                    }
                `}
`,kE=T.input`
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
`,OE=T.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?F`
                    color: ${sc["text-selected-disabled"]};
                `:F`
                    color: ${sc["text-disabled"]};
                `:e.$selected?F`
                color: ${sc["text-selected"]};
            `:F`
            color: ${sc.text};
        `}
`,DE=T.label`
    ${lc["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${pc.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${pc.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,jE=T.div`
    ${lc["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${lc["body-md-semibold"]}
    }
`,EE=T.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,_E=T.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,TE=T.button`
    color: ${e=>e.$disabled?sc["text-disabled"]:sc["text-error"]};
    white-space: nowrap;
    ${lc["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,FE=T.button`
    color: ${e=>e.disabled?sc["text-disabled"]:sc["text-primary"]};
    ${lc["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${sc.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,ME=T.div`
    width: 100%;
    color: ${e=>e.$disabled?sc["text-disabled"]:sc["text-error"]};
    border: none;
    background: ${sc.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,AE=T(cd)`
    width: 100%;
    user-select: none;
`,BE=T.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${sc.bg};
    ${td({textSize:"body-md"})}

    ${e=>e.$disabled?F`
                color: ${sc["text-disabled"]};
            `:e.$selected?F`
                color: ${sc["text-selected"]};
            `:F`
                color: ${sc.text};
            `}
`,IE=T(kc.BodyMD)`
    color: ${e=>e.$disabled?sc["text-disabled"]:sc["text-error"]};
`,zE=T(CE)`
    color: ${e=>e.$disabled?sc["text-disabled"]:sc["text-error"]};
`,RE=T((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=e(r?Ve:Ye,{});break;case"radio":o=e(r?Ge:qe,{});break;case"tick":o=e(Ue,{});break;case"cross":o=e(Ie,{});break;default:o=null}return e(bE,Object.assign({className:i,$active:r,$disabled:n},{children:o}))}))`
    ${e=>e.$disabled?e.$selected?F`
                    color: ${sc["icon-selected-disabled"]};
                `:F`
                    color: ${sc["icon-disabled-subtle"]};
                `:e.$selected?F`
                color: ${sc["icon-selected"]};
            `:F`
            color: ${sc["icon-subtle"]};
        `};
`,PE=({type:n="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:d,subLabel:h,disabled:g,error:p,name:f,id:b,className:v,compositeSection:y,removable:x,onRemove:$,"data-testid":w,onChange:C,useContentWidth:S})=>{const{collapsible:k=!0,errors:O,children:D,initialExpanded:j}=y||{},[E,T]=a(s),[F,M]=a(j),A=m((()=>{const e=Array.isArray(O)&&(null==O?void 0:O.length)>0,t=!Array.isArray(O)&&!!O;return e||t}),[O]),[B]=a(au.generate()),I=b?`${b}`:`tg-${B}`,z=o();u((()=>{T(s)}),[s]),u((()=>{E&&M(null==j||j)}),[E]);const R=e=>{if(!g){if(C)return void C(e);switch(n){case"checkbox":T((e=>!e));break;case"radio":case"yes":case"no":E||T(!0)}}},P=()=>{g||M(!F)},L=()=>{g||!$||$()},N=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e(RE,{type:t,active:E,disabled:g,$selected:E,$disabled:g})},W=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(jE,Object.assign({"data-id":"toggle-sublabel"},{children:t}))},H=()=>{const r=!F&&!A;return k&&t(FE,Object.assign({$paddingTopRequired:r,disabled:g,onClick:P,"data-testid":F?"collapse-button":"expand-button"},{children:[F?"Show less":"Show more",e(F?_:fe,{"aria-hidden":!0})]}))},Y=n=>t(r,{children:[e(IE,Object.assign({weight:"semibold",$disabled:g},{children:"Error"})),e(zE,Object.assign({$disabled:g},{children:null==n?void 0:n.map(((t,r)=>e("li",Object.assign({id:`${I}-error-list-item-${r}`},{children:e(IE,Object.assign({weight:"semibold",$disabled:g},{children:t}))}),r)))}))]});return t(SE,Object.assign({$selected:E,$disabled:g,className:v,$styleType:l,$error:p,$indicator:i,$useContentWidth:S,id:b,"data-testid":w},{children:[t(EE,Object.assign({id:`${I}-header-container`,$disabled:g,$error:p,$selected:E,$indicator:i,$styleType:l},{children:[t(_E,Object.assign({$addPadding:x},{children:[e(kE,{ref:z,name:f,id:`${I}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:R,checked:E}),i&&N(),t(OE,Object.assign({$selected:E,$disabled:g},{children:[e(DE,Object.assign({htmlFor:`${I}-input`,"data-testid":`${I}-toggle-label`,$maxLines:d},{children:c})),h&&W()]}))]})),x&&e(TE,Object.assign({type:"button",$disabled:g,onClick:L,id:`${I}-remove-button`},{children:"Remove"}))]})),D&&t("div",{children:[(!k||F)&&e(BE,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g},{children:D})),k&&!F&&A&&e(ME,Object.assign({$disabled:g,onClick:P,id:`${I}-error-alert`},{children:e(AE,Object.assign({type:g?"description":"error",className:v,showIcon:!0},{children:Array.isArray(O)?Y(O):O}))})),H()]})]}))},LE=T(Yo.div)`
    position: absolute;
    top: calc(3rem + ${uc["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${pc.MaxWidth.xxs} {
        max-width: 100%;
    }
`,NE=T.div`
    position: relative;
    width: 100%;
    padding: ${uc["spacing-8"]} ${uc["spacing-20"]}
        ${uc["spacing-24"]} ${uc["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${sc.bg};
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};
`,WE=T.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${pc.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,HE=T.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${uc["spacing-16"]};
    gap: ${uc["spacing-8"]} ${uc["spacing-16"]};

    ${pc.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${uc["spacing-32"]};
    }
`,YE=T.div`
    display: flex;
    align-items: center;
    margin-right: ${uc["spacing-32"]};

    ${pc.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,VE=T.div`
    display: flex;
    gap: ${uc["spacing-8"]};

    ${pc.MaxWidth.lg} {
        flex-direction: column;
    }

    ${pc.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,UE=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${pc.MaxWidth.xxs} {
        width: 6rem;
    }
`,XE=T(wc)`
    width: 5rem;
    padding: ${uc["spacing-16"]} 0;
    color: ${sc.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${sc["icon-hover"]};
    }
`,KE=T(kc.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,qE=T(Hg)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${pc.MaxWidth.xxs} {
        width: 100%;
    }
`,GE=T(Vg)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,ZE=T(PE)`
    min-width: 5rem;
    flex: 1;
`,QE=T(qc.Small)`
    width: 7rem;

    ${pc.MaxWidth.sm} {
        flex: 1;
    }

    ${pc.MaxWidth.xxs} {
        width: 100%;
    }
`;var JE,e_,t_;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(JE||(JE={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(e_||(e_={})),function(e){e.AM="am",e.PM="pm"}(t_||(t_={}));const r_=({id:r,value:n,show:i,format:s,onChange:l,onCancel:c})=>{const d=ng.getTimeValues(s,n),[h,g]=a(d.hour),[f,m]=a(d.minute),[b,v]=a(d.period),y=o(),x=o(),$=cr();u((()=>{if(i&&y.current&&y.current.focus(),i){const{hour:e,minute:t,period:r}=ng.getTimeValues(s,n);g(e),m(t),v(r)}}),[i,n,s]),u((()=>{const e=y.current,t=x.current;return e&&e.addEventListener("keydown",w),t&&t.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),t&&t.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},C=p((e=>{switch(e.currentTarget.name){case JE.MINUTE_UP:m(ng.updateMinutes(f,"add"));break;case JE.MINUTE_DOWN:m(ng.updateMinutes(f,"minus"));break;case JE.HOUR_UP:g(ng.updateHours(h,"add"));break;case JE.HOUR_DOWN:g(ng.updateHours(h,"minus"))}}),[h,f]),S=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case e_.HOUR:t.length<=2&&g(t);break;case e_.MINUTE:t.length<=2&&m(t)}},O=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case e_.HOUR:{const r=t>23||t<0?d.hour:ng.convertHourTo12HourFormat(e.target.value);g(r);break}case e_.MINUTE:{const r=t>59||t<0?d.minute:e.target.value;m(su.padValue(r));break}}},D=e=>{switch(e.target.name){case t_.AM:v(rg.AM);break;case t_.PM:v(rg.PM)}},j=e=>r?`${r}-${e}`:e,E=Oo({opacity:i?1:0,height:i?$.height+32+2:0});return e(LE,Object.assign({"data-testid":"animated-dropdown-wrapper",style:E},{children:t(NE,Object.assign({ref:$.ref,"data-testid":j("timepicker-dropdown"),inert:i?void 0:""},{children:[t(WE,{children:[t(YE,{children:[t(UE,{children:[e(XE,Object.assign({"aria-label":"increase hour",name:JE.HOUR_UP,tabIndex:-1,onClick:C,"data-testid":j("hour-increment-button")},{children:e(_,{})})),e(qE,{children:e(GE,{"aria-label":"hour",type:"number",name:e_.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:y,value:h,onFocus:S,onChange:k,onBlur:O,min:1,max:12,placeholder:"HH","data-testid":j("hour-input")})}),e(XE,Object.assign({"aria-label":"decrease hour",name:JE.HOUR_DOWN,tabIndex:-1,onClick:C,"data-testid":j("hour-decrement-button")},{children:e(fe,{})}))]}),e(KE,{children:":"}),t(UE,{children:[e(XE,Object.assign({"aria-label":"increase minute",name:JE.MINUTE_UP,tabIndex:-1,onClick:C,"data-testid":j("minute-increment-button")},{children:e(_,{})})),e(qE,{children:e(GE,{"aria-label":"minute",type:"number",name:e_.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:f,onChange:k,onBlur:O,onFocus:S,min:0,max:59,placeholder:"MM","data-testid":j("minute-input")})}),e(XE,Object.assign({"aria-label":"decrease minute",name:JE.MINUTE_DOWN,tabIndex:-1,onClick:C,"data-testid":j("minute-decrement-button")},{children:e(fe,{})}))]})]}),t(VE,{children:[e(ZE,Object.assign({checked:b===rg.AM,name:t_.AM,type:"radio",onChange:D,"data-testid":j("am-toggle"),"aria-label":"AM"},{children:"AM"})),e(ZE,Object.assign({checked:b===rg.PM,name:t_.PM,type:"radio",onChange:D,"data-testid":j("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),t(HE,{children:[e(QE,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":j("cancel-button")},{children:"Cancel"})),e(QE,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?ng.convertTo24HourFormat({hour:h,minute:f,period:b}):`${h}:${f}${b}`,l(e)},disabled:""===h||""===f,"data-testid":j("confirm-button")},{children:"Done"}))]})]}))}))},n_=r=>{var{id:n,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:h,onFocus:g,onBlur:p}=r,f=dt(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=a(!1),[v,y]=a(!1),[x,$]=a(""),[w,C]=a(""),S=o();u((()=>{l&&($(l.start),C(l.end))}),[]),cu("mousedown",(function(e){i||j(e)}),"document"),cu("keyup",(function(e){if("Tab"===e.code)j(e)}),"document");const k=()=>{D()},O=()=>{m||v||g&&g()},D=()=>{b(!1),y(!1),p&&p()},j=e=>{S&&!S.current.contains(e.target)&&(v||m)&&D()};return e(pE,Object.assign({ref:S,id:n},f,{children:t(fE,Object.assign({$disabled:i,$error:s,$readOnly:d},{children:[t(Jp,Object.assign({error:s,currentActive:m?"start":v?"end":"none"},{children:[e(mE,{onFocus:()=>{i||d||m||(y(!1),b(!0),O())},readOnly:!0,placeholder:"From",value:ng.formatDisplayValue(x,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(mE,{onFocus:()=>{i||d||v||(b(!1),y(!0),O())},readOnly:!0,placeholder:"To",value:ng.formatDisplayValue(w,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),e(r_,{id:n,show:m,value:x,format:c,onCancel:k,onChange:e=>{b(!1),y(!0),$(e);h&&h({start:e,end:w})}}),e(r_,{id:n,show:v,value:w,format:c,onCancel:k,onChange:e=>{y(!1),C(e);h&&h({start:x,end:e}),""==x?b(!0):p&&p()}})]}))}))},i_=T(Yg)`
    height: 3rem;
    gap: ${uc["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${uc["spacing-20"]});
`,o_=r=>{var{id:n,disabled:i=!1,error:s,value:l,format:c="12hr",readOnly:d,onChange:h,onFocus:g,onBlur:f,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:$=15}=r,w=dt(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=a((()=>au.generate())),[S,k]=a(null),[O,D]=a(!1),[j,E]=a(""),[_,T]=a(""),[F,M]=a(""),[A,B]=a(""),[I,z]=a(""),R=o(),P=o(),L=o(),N=m((()=>ng.generateTimings($,c,y,x)),[$,c,y,x]),W=m((()=>{if(""===A)return N;const e=ng.findClosestFlooredTime(A,N);return N.slice(N.indexOf(e))}),[N,A]),H=p((e=>ng.parseInput(e,c)),[c]);u((()=>{var e,t;if(l){const r=null!==(e=H(l.start))&&void 0!==e?e:"",n=null!==(t=H(l.end))&&void 0!==t?t:"";T(r),M(n),B(r),z(n)}}),[l,H]),u((()=>{if(s)return void D(!1);const e=H(_),t=H(F);if(void 0===e)E("Invalid start time");else if(void 0===t)E("Invalid end time");else{if(!(""!==e&&""!==t&&ng.to24Hour(t)<ng.to24Hour(e)))return E(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||D(!0));E("End time must be after start time")}D(!1)}),[_,F,H,s]);const Y=e=>{i||d||(S||O||null==g||g(),k(e),D(!0))},V=e=>{i||d||(k(e),D(!0),("start"===e?P:L).current.select())};function U(e){switch(e.code){case"Enter":"start"===S?X(_):"end"===S&&(O&&K(F),L.current.blur());break;case"Tab":q(_,F,{})}}const X=e=>{q(e,F,{goToNextInput:!0})},K=e=>{q(_,e,{triggerOnBlur:!0})},q=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,o;const a=null!==(i=H(e))&&void 0!==i?i:A,s=null!==(o=H(t))&&void 0!==o?o:I;T(a),M(s);a===A&&s===I||null==h||h({start:a,end:s}),r&&void 0!==H(e)&&(k("end"),L.current.select()),n&&(k(null),D(!1),null==f||f()),B(a),z(s)},G=e=>{e.stopPropagation(),T(""),M(""),B(""),z("");null==h||h({start:"",end:""}),k(null),D(!1)},Z=e=>{R.current&&!R.current.contains(e.relatedTarget)&&S&&!O&&q(_,F,{triggerOnBlur:!0})},Q=()=>{if(!d&&!i&&((null==_?void 0:_.length)>0||(null==F?void 0:F.length)>0))return e(Xj,Object.assign({onClick:G,type:"button","aria-label":"Clear"},{children:e(G$,{"aria-hidden":!0})}))};return t(pE,Object.assign({id:n},w,{children:[e(PO,{children:e(_p,{enabled:!d&&!i,isOpen:O,renderElement:()=>t(i_,Object.assign({ref:R,$disabled:i,$error:s||!!j,$readOnly:d,onBlur:Z},{children:[t(Jp,Object.assign({error:s||!!j,currentActive:null===S?"none":S},{children:[e(mE,{ref:P,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>T(e.target.value),value:_,disabled:i,readOnly:d,"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":O,"aria-controls":C,"aria-autocomplete":"list"}),e(mE,{ref:L,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:F,disabled:i,readOnly:d,"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":O,"aria-controls":C,"aria-autocomplete":"list"})]})),Q()]})),renderDropdown:()=>{if(O)return e(sD,"start"===S?{listItems:N,onSelectItem:X,selectedItems:[_],disableItemFocus:!0,topScrollItem:ng.findClosestFlooredTime(H(_),N),listboxId:C}:{listItems:W,onSelectItem:K,selectedItems:[F],disableItemFocus:!0,topScrollItem:ng.findClosestFlooredTime(H(F),W),listboxId:C})},onClose:e=>{"outside-press"===e?(k(null),D(!1),null==f||f()):q(_,F,{triggerOnBlur:!0})},onDismiss:()=>{("start"===S?P:L).current.focus(),D(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!s&&j&&e(f$,Object.assign({id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message"},{children:j}))]}))},a_=t=>{var{variant:r="dial"}=t,n=dt(t,["variant"]);return"dial"===r?e(n_,Object.assign({},n)):"combobox"===r?e(o_,Object.assign({},n)):void 0};T.div`
    position: relative;
`;const s_=T(Vg)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,l_=r=>{var{id:n,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:g,onBlur:f}=r,m=dt(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=a(!1),y=o();cu("mousedown",(function(e){i||s||w(e)}),"document"),cu("keyup",(function(e){if("Tab"===e.code)w(e)}),"document");const x=()=>{i||s||b||(v(!0),g&&g())};const $=()=>{v(!1),f&&f()},w=e=>{y&&!y.current.contains(e.target)&&b&&$()},C=p((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(Yg,Object.assign({ref:y,id:n,$readOnly:s,$disabled:i,$error:l},m,{children:[e(s_,{onFocus:x,focused:b,readOnly:!0,placeholder:d||C(),value:ng.formatDisplayValue(c,u),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(r_,{id:n,show:b,value:c,format:u,onCancel:()=>{$()},onChange:e=>{h&&h(e),$()}})]}))},c_=T(uO)`
    margin-right: 0.5rem;
`,d_=T(J$)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,u_=T(d_)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,h_=T(kc.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return F`
                color: ${sc["text-disabled"]};
            `}}
`,g_=T.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,p_=T(kc.BodyBL)``,f_=n=>{var{disabled:i,error:s,value:l,onChange:c,onBlur:d,onChangeRaw:h,onBlurRaw:g,readOnly:p,placeholder:f="00-8888",autoComplete:m}=n,b=dt(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=a(""),[x,$]=a(""),[w,C]=a("none"),S=o(null),k=o(null),O=o(null),D=o(v),j=o(x),E=o(w),_=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),T=hu({ref:k,formatter:_}),F=hu({ref:O,formatter:_}),M=e=>{D.current=e,y(e)},A=e=>{j.current=e,$(e)},B=e=>{E.current=e,C(e)};u((()=>{"floor"===w&&3===v.length&&O.current&&O.current.focus()}),[v]),u((()=>{N(l)}),[l]);const I=e=>{B(e.target.name),e.target.select()},z=e=>{const t=e.target.name,r=e.target.value,n=L(r);"floor"===t?(M(n),n!==v&&W(n,t)):(A(n),n!==x&&W(n,t))},R=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:r}=T();r(),M(e),W(e,t)}else{const{nextValue:e,updateCaretPosition:r}=F();r(),A(e),W(e,t)}},P=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===w&&0===x.length&&k.current.focus()},L=e=>/^[0-9]$/.test(e)?su.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==m_)if(void 0===e||0===e.length)M(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];M("floor"===w?e:L(e)),A("unit"===w?r:L(r))}}},W=(e,t)=>{if(!c&&!h)return;const r={floor:D.current,unit:j.current};if(r[t]=e,c){const e=Y(r);c(e)}h&&h([r.floor,r.unit])},H=()=>{if(!d&&!g)return;const e={floor:L(D.current),unit:L(j.current)};if(d){const t=Y(e);d(t)}g&&g([e.floor,e.unit])},Y=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":m_},V=e=>e.split("-");return t(Yg,Object.assign({},b,{ref:S,onClick:()=>{"none"===w&&k.current&&k.current.focus()},$disabled:i,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==E.current&&(B("none"),H())}},{children:[e(c_,Object.assign({"data-testid":"addon",$disabled:i,$readOnly:p},{children:"#"})),p&&l?(()=>{const r=l.split("-");return t(g_,{children:[e(p_,{children:r[0]}),e(h_,{children:"-"}),e(p_,{children:r[1]})]})})():t(r,{children:[e(d_,{name:"floor",maxLength:3,value:v,ref:k,onFocus:I,onBlur:z,onChange:R,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==w||p?V(f)[0]:"",autoComplete:m,styleType:"no-border"}),e(h_,Object.assign({$inactive:0===v.length},{children:"-"})),e(u_,{name:"unit",maxLength:5,value:x,ref:O,onFocus:I,onBlur:z,onChange:R,onKeyDown:P,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==w||p?V(f)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},m_="Invalid unit number",b_={DateInput:t=>{var{label:r,errorMessage:n,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(Np,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))}))},DateRangeInput:t=>{var{label:r,errorMessage:n,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(of,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))}))},ESignature:t=>{const{label:r,errorMessage:n,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(im,Object.assign({id:`${i}-base`,"data-testid":a||i},v))}))},HistogramSlider:t=>{var{label:r,errorMessage:n,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(X$,Object.assign({id:`${i}-base`,"data-testid":a||i},v))}))},Input:ew,InputGroup:pO,MaskedInput:_O,Label:b$,MultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=dt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v},{children:e(wj,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))}))},NestedSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(Oj,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))}))},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(kj,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))}))},Select:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=dt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v},{children:e(Gj,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))}))},SelectHistogram:t=>{var{label:r,errorMessage:n,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(rE,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||i,id:`${i}-base`},y))}))},Slider:t=>{var{label:r,errorMessage:n,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(nE,Object.assign({id:`${i}-base`,"data-testid":a||i},v))}))},RangeSlider:t=>{var{label:r,errorMessage:n,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(N$,Object.assign({id:`${i}-base`,"data-testid":a||i},v))}))},RangeSelect:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v},{children:e(qj,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s},y))}))},Textarea:gE,Timepicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(l_,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))}))},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(a_,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))}))},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:i}=t,o=dt(t,["id","data-error-testid","children"]);return e(C$,Object.assign({id:r,"data-error-testid":n},o,{children:i}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(f_,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))}))},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(Wj,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))}))},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(C$,Object.assign({id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b},{children:e(Vj,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))}))}},v_=T.li`
    display: flex;
    flex-direction: column;
    padding: ${uc["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};
    }
`,y_=T.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${uc["spacing-16"]};
    width: 100%;
`,x_=T.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,$_=T.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${uc["spacing-16"]};

    ${pc.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,w_=T(kc.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${uc["spacing-16"]};

    ${pc.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${uc["spacing-8"]};
    }
`,C_=T(kc.BodyMD)``,S_=T.div`
    display: flex;
    ${pc.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return F`
                margin-left: calc(
                    96px + ${uc["spacing-32"]}
                ); // thumbnail width + right margin

                ${pc.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,k_=T(qc.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${uc["spacing-16"]};
    }

    ${pc.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${uc["spacing-16"]};
        }
    }
`,O_=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:i,onReplaceClick:o})=>t(D_,Object.assign({"data-testid":n},{children:[e(j_,{"data-testid":n?`${n}-image`:void 0,src:r}),i&&e(E_,Object.assign({type:"button",onClick:()=>{o&&o()}},{children:"Replace"}))]})),D_=T.div`
    width: auto;
    margin-right: ${uc["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,j_=T(Em)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${hc.sm};
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    object-fit: cover;

    ${pc.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,E_=T.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${uc["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${lc["body-md-semibold"]}
    color: ${sc["text-primary"]};

    :hover {
        color: ${sc["text-hover"]};
    }
`,__=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:i,onSave:s,onCancel:l,onBlur:c})=>{const{id:d,name:h,size:g,truncateText:p=!0,thumbnailImageDataUrl:f}=r,[m,b]=a(),[v,y]=a(""),x=o(),$=o();u((()=>{b(w(h))}),[i]),u((()=>{y(r.description||"")}),[r]);const w=e=>{if(!p)return e;const t=$&&$.current?$.current.getBoundingClientRect().width:0;return su.truncateOneLine(e,t,t/2,t/2/8,16)};return t(v_,Object.assign({"data-testid":`${d}-edit-display`},{children:[t(y_,{children:[f&&e(O_,{thumbnailImageDataUrl:f}),t(x_,{children:[t($_,Object.assign({ref:$},{children:[e(w_,Object.assign({weight:"semibold"},{children:m})),e(C_,{children:jm.formatFileSizeDisplay(g)})]})),e(b_.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{c(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(S_,Object.assign({$thumbnail:!!f},{children:[e(k_,Object.assign({"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{s(x.current.value.trim())}},{children:"Save"})),e(k_,Object.assign({type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:l},{children:"Cancel"}))]}))]}))},T_=T.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${uc["spacing-16"]};
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
`,F_=T(Je)`
    margin-right: ${uc["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${sc.icon};

    ${e=>e.$active?F`
                color: ${sc["icon-primary"]};
            `:e.$disabled?F`
                color: ${sc["icon-disabled"]};
            `:void 0};
`,M_=T.div`
    background: ${sc["bg-primary-subtlest"]};
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.sm};
    padding: ${uc["spacing-16"]} ${uc["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${pc.MaxWidth.sm} {
        padding: ${uc["spacing-16"]};
    }

    ${e=>e.$focused?F`
                border-color: ${sc["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${sc["border-focus"]} r g b / 50%);
            `:e.$disabled?F`
                border-color: ${sc["border-disabled"]};
            `:e.$error?F`
                background: ${sc["bg-error"]};
                border-color: ${sc["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return F`
                ${pc.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,A_=T.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${pc.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return F`
                ${pc.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,B_=T.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,I_=T.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${pc.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,z_=T.div`
    display: flex;
    width: 5rem;
    margin-left: ${uc["spacing-8"]};
    justify-content: flex-end;

    ${pc.MaxWidth.sm} {
        ${e=>e.$hideInMobile?F`
                    display: none;
                    visibility: hidden;
                `:F`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${uc["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,R_=T(kc.BodyMD)``,P_=T(R_)`
    margin-top: ${uc["spacing-4"]};
`,L_=T(kc.BodySM)`
    color: ${sc["text-error"]};
`,N_=T(L_)`
    margin-top: ${uc["spacing-4"]};
    ${pc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,W_=T(L_)`
    display: none;
    visibility: hidden;
    ${pc.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${uc["spacing-8"]};
    }
`,H_=T.div`
    width: 6rem;
    margin-left: ${uc["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${pc.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?F`
                    margin-left: 0;
                    margin-top: ${uc["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?F`
                    margin-left: 0;
                    margin-top: ${uc["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,Y_=T(Hp)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${uc["spacing-16"]};
    }
`,V_=T(wc)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${sc.icon};
    }
`,U_=$((({fileItem:n,editable:i,sortable:s,wrapperWidth:l,disabled:c,readOnly:d,onDelete:h,onEditClick:g})=>{const{id:p,name:m,size:b,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:$,truncateText:w=!0}=n,[C,S]=a(),{activeId:k}=f(Xm),{attributes:O,listeners:D,setNodeRef:j,transform:E,transition:_}=Kx({id:p}),T=o(),F={transform:Uv.Translate.toString(E),transition:_},M=Object.assign(Object.assign({style:F},O),D),A=y<1,B=jm.formatFileSizeDisplay(b),I=k?k===p?"self":"others":"none";u((()=>{S(L(m))}),[l]);const z=()=>{h()},R=()=>{g&&g()},P=e=>{s&&e.stopPropagation()},L=e=>{if(!w)return e;const t=T&&T.current?T.current.getBoundingClientRect().width:0;return su.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>c||!!k,W=()=>s&&!d,H=()=>t(r,{children:[e(R_,Object.assign({weight:v?"semibold":"regular"},{children:C})),v&&e(P_,{children:v})]});return t(T_,Object.assign({id:p,ref:j,$sortable:W(),$disabled:N(),$focusType:I},W()?M:{},{children:[W()&&e(F_,{"data-testid":`${p}-drag-handle`,$disabled:N(),$active:"self"===I}),t(M_,Object.assign({$focused:"self"===I,$error:!!x,$loading:A,$disabled:N(),$editable:i},{children:[(()=>{let n;return n=t(r,x?{children:[t(B_,Object.assign({ref:T},{children:[H(),x&&e(N_,Object.assign({weight:"semibold"},{children:x}))]})),e(z_,{children:e(R_,{children:B})}),x&&e(W_,Object.assign({weight:"semibold"},{children:x}))]}:$?{children:[e(O_,{thumbnailImageDataUrl:$,"data-testid":`${p}-thumbnail`}),t(I_,{children:[e(B_,Object.assign({ref:T},{children:H()})),e(z_,{children:e(R_,{children:B})})]})]}:{children:[e(B_,Object.assign({ref:T},{children:H()})),e(z_,Object.assign({$hideInMobile:A},{children:e(R_,{children:B})}))]}),e(A_,Object.assign({$hasThumbnail:!!$},{children:n}))})(),!d&&(()=>{let n;return n=x?e(V_,Object.assign({onClick:z,"data-testid":`${p}-error-delete-button`,"aria-label":`delete-${m}`},{children:e(Ie,{"aria-hidden":!0})})):A?e(_f,{progress:y,"data-testid":`${p}-progress-bar`}):t(r,{children:[i&&e(Y_,Object.assign({"data-testid":`${p}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${m}`,disabled:N(),onClick:R,onKeyDown:P},{children:e(Qe,{"aria-hidden":!0})}),"edit"),e(Y_,Object.assign({"data-testid":`${p}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${m}`,disabled:N(),onClick:z,onKeyDown:P},{children:e(Ze,{"aria-hidden":!0})}),"delete")]}),e(H_,Object.assign({$editable:i,$error:!!x,$loading:A},{children:n}))})()]}))]}))})),X_=T.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":uc["spacing-32"]};
`,K_=T.li`
    border-top: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};

    :not(:last-child) {
        margin-bottom: ${uc["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${uc["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,q_=({fileItems:t,editableFileItems:r,fileDescriptionMaxLength:n,sortable:i,disabled:s,readOnly:l,onItemUpdate:c,onItemDelete:d,onSort:h})=>{const[g,p]=a({}),{setActiveId:b}=f(Xm),{width:v,ref:y}=cr(),x=o({}),$=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m((()=>[...t].filter((e=>null!=e))),[...t])}(iy(Jx,{activationConstraint:{distance:8}}),iy(Zy,{activationConstraint:{delay:150,tolerance:5}}),iy(Ny,{coordinateGetter:Zx})),w=e=>{delete x.current[e]};u((()=>{p(F(t))}),[t]);const C=e=>t=>{M(e.id,"display"),w(e.id);const r=Object.assign(Object.assign({},e),{description:t});c(r)},S=e=>t=>{x.current[e.id]=t},k=e=>()=>{e.description&&0!==e.description.length?M(e.id,"display"):d(e),w(e.id)},O=e=>()=>{M(e.id,"edit")},D=e=>()=>{d(e)},j=e=>{if(h){const{active:r,over:n}=e;if(n&&r.id!==n.id){const e=t.findIndex((e=>e.id===r.id)),i=t.findIndex((e=>e.id===n.id)),o=Mx(t,e,i);h(o)}}b(void 0)},E=e=>{const{active:t}=e;b(t.id)},_=e=>r&&jm.isSupportedImageType(e.type),T=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&_(e)&&!e.description,F=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":g[r.id]?t[r.id]=g[r.id]:t[r.id]=T(r)?"edit":"display";return t},M=(e,t)=>{p((r=>Object.assign(Object.assign({},r),{[e]:t})))},A=()=>t&&t.length>1&&i&&Object.values(g).every((e=>"display"===e)),B=()=>{const r=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(t,g);return 0===r.length?null:r.map(((t,r)=>Array.isArray(t)?((t,r)=>{const i=t.map((t=>{const r=Object.assign({},t);return void 0!==x.current[t.id]&&(r.description=x.current[t.id]),e(__,{fileItem:r,wrapperWidth:v,fileDescriptionMaxLength:n,onSave:C(t),onCancel:k(t),onBlur:S(t)},t.id)}));return e(K_,{children:e("ul",{children:i})},`editable-${r}`)})(t,r):e(U_,{fileItem:t,editable:_(t),wrapperWidth:v,sortable:A(),disabled:s,readOnly:l,onDelete:D(t),onEditClick:O(t)},t.id)))};return t&&0!==t.length?s||l||!A()?e(X_,Object.assign({$readOnly:l,ref:y},{children:B()})):e(Ox,Object.assign({sensors:$,onDragEnd:j,onDragStart:E},{children:e(Nx,Object.assign({items:t,strategy:Rx},{children:e(X_,Object.assign({$readOnly:l,ref:y},{children:B()}))}))})):null},G_=T.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${uc["spacing-32"]};
    gap: ${uc["spacing-8"]};
`,Z_=T(kc.BodyBL)``,Q_=T.div`
    color: ${sc.text};
    ${td({textSize:"body-baseline"})}
`,J_=T(kc.BodyMD)`
    color: ${sc["text-subtler"]};
`,eT=T.div`
    color: ${sc.text};
    ${td({textSize:"body-md"})}
`,tT=T(cd)`
    margin-bottom: ${uc["spacing-32"]};
`,rT=T.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${pc.MaxWidth.sm} {
        align-items: flex-start;
    }
`,nT=T(qc.Small)`
    width: 10rem;

    ${pc.MaxWidth.sm} {
        width: 100%;
    }
`,iT=T.label`
    ${lc["body-md-semibold"]}
    color: ${sc["text-subtler"]};
    margin-top: ${uc["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${pc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,oT=T(cd)`
    margin-bottom: ${uc["spacing-32"]};
`,aT=({styleType:r="bordered",fileItems:n,title:i,description:s,maxFiles:l,warning:c,className:d,name:u,id:h,"data-testid":g,accept:p,capture:f,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:$,readOnly:w,onChange:C,onDelete:S,onEdit:k,onSort:O})=>{const D=o(),[j,E]=a(),_=()=>!!l&&n.length>=l;return e(Xm.Provider,Object.assign({value:{activeId:j,setActiveId:E}},{children:t(Sv,Object.assign({ref:D,onChange:e=>{!b&&C&&C(e)},id:h?`${h}-dropzone`:"dropzone",accept:p,capture:f,border:"bordered"===r,className:d,"data-testid":g,name:u,multiple:m,disabled:b||_()||w},{children:[(i||s)&&t(G_,{children:[i?e("string"==typeof i?Z_:Q_,{children:i}):null,s?e("string"==typeof s?J_:eT,{children:s}):null]}),c&&e(tT,Object.assign({type:"warning"},{children:c})),e(q_,{fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:w,onItemDelete:e=>{S&&S(e)},onItemUpdate:e=>{k&&k(e)},onSort:e=>{O&&O(e)}}),$&&e(oT,Object.assign({type:"error"},{children:$})),!w&&t(rT,{children:[e(nT,Object.assign({type:"button",styleType:"secondary",disabled:!!j||b||_(),onClick:e=>{b||(e.preventDefault(),D.current&&D.current.openFileDialog())}},{children:"Upload files"})),e(iT,{children:"or drop them here"})]})]}))}))},sT=i.createContext({mode:"default",rootNode:null});var lT=Uo((function(e){return null==e}));const cT=T.div`
    background-color: ${e=>e.$collapsible?sc["bg-strong"]:sc.bg};
    ${pc.MaxWidth.lg} {
        background-color: ${sc["bg-strong"]};
    }
`,dT=T.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${sc.border};

    ${pc.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${uc["spacing-16"]};
    }
`,uT=T.div`
    display: flex;
    align-items: center;

    background-color: ${sc.bg};

    ${pc.MaxWidth.lg} {
        background-color: transparent;
    }
`,hT=T(wc)`
    margin: 0 0 0 auto;

    color: ${sc.icon};
    &:hover {
        color: ${sc["icon-hover"]};
    }
`,gT=T(fe)`
    height: ${lc.Spec["body-size-baseline"]};
    width: ${lc.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${cc["duration-350"]} ${cc["ease-standard"]};
`,pT=T.p`
    ${lc["header-xs-semibold"]}
    color: ${sc.text};

    margin: ${uc["spacing-24"]} 0 ${uc["spacing-24"]}
        ${uc["spacing-20"]};

    ${pc.MaxWidth.lg} {
        ${lc["body-md-semibold"]}
        color: ${sc["text-subtle"]};

        margin: ${uc["spacing-24"]} ${uc["spacing-20"]} 0
            ${uc["spacing-20"]};
    }
`,fT=T(Yo.div)`
    overflow: hidden;
`,mT=T.div`
    padding: ${uc["spacing-24"]} ${uc["spacing-20"]};
`,bT=T(Yo.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,vT=T(qc.Small)`
    height: fit-content;
    padding: 0;
    margin: ${uc["spacing-16"]} 0 0 0;
`,yT=r=>{var{collapsible:n=!0,initialExpanded:i=!1,expanded:o,onExpandChange:s,minimisable:l=!1,minimisedHeight:c,showDivider:d=!0,showMobileDivider:h=!0,title:g,addon:p,children:m}=r,b=dt(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:v,rootNode:y}=f(sT),x="mobile"===v,[$,w]=a(_()),[C,S]=a(l),k=!x&&n,O=cr(),D=cr(),j=Oo({height:$?O.height:0}),E=C?null!=c?c:Math.min(.5*D.height,216):D.height;u((()=>{w(_())}),[n,o]);function _(){return!!x||(lT(o)?!n||i:o)}return t(cT,Object.assign({$collapsible:k},{children:[e(dT,{$showDivider:d,$showMobileDivider:h}),(g||k)&&t(uT,{children:[g&&t(pT,{children:[g," ",p&&("popover"===p.type?e(g$,{addon:p,rootNode:x?y:void 0}):null)]}),k&&e(hT,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!$;lT(o)&&w(e),s&&s(e)},"aria-label":$?"Collapse":"Expand"},{children:e(gT,{$expanded:$})}))]}),e(fT,Object.assign({"data-testid":"expandable-container","data-expanded":$,style:j},{children:e("div",Object.assign({ref:O.ref},{children:t(mT,Object.assign({},b,{children:[e(bT,Object.assign({"data-testid":"minimisable-container",$height:E,$minimisable:l},{children:e("div",Object.assign({ref:D.ref},{children:e("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof m?m(v,{minimised:C}):m}))}))})),l&&t(vT,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{S(!C)}},{children:["View ",C?"more":"less"]}))]}))}))}))]}))};yT.displayName="Filter.Item";const xT=T(yT)`
    padding: 0 0 ${uc["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${uc["spacing-8"]} ${uc["spacing-8"]} 0;

        ${pc.MaxWidth.lg} {
            padding: ${uc["spacing-16"]} ${uc["spacing-20"]}
                ${uc["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${uc["spacing-8"]} ${uc["spacing-20"]} 0;
    }
`,$T=T.div`
    display: flex;
    flex-direction: column;

    ${pc.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${uc["spacing-16"]};
    }
`,wT=T.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${uc["spacing-8"]} ${uc["spacing-12"]};

    cursor: pointer;
    ${lc["body-md-regular"]}
    color: ${sc.text};
    ${e=>e.$selected&&F`
            color: ${sc["text-selected"]};
        `}

    ${pc.MaxWidth.lg} {
        padding: ${uc["spacing-8"]};
    }
`,CT=T(Ah)`
    flex-shrink: 0;
    margin-right: ${uc["spacing-8"]};
`,ST=T(PE)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,kT=T(qc.Small)`
    height: fit-content;
    padding: 0;
    margin: ${uc["spacing-16"]} 0 ${uc["spacing-8"]}
        ${uc["spacing-12"]};

    ${pc.MaxWidth.lg} {
        margin: 0 0 ${uc["spacing-16"]} 0;
    }
`,OT=n=>{var{selectedOptions:i,options:s,onSelect:l,labelExtractor:c,valueExtractor:d,useToggleContentWidth:h}=n,g=dt(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:m}=f(sT),[b,v]=a(i||[]),[y,x]=a(),[$,w]=a(s.length),C=o(),S=o(),k=e=>()=>{const t=[...b],r=b.findIndex((t=>j(t)===j(e)));r>=0?t.splice(r,1):t.push(e),v(t),null==l||l(t)},O=()=>{const e=b.length?[]:s;v(e),null==l||l(e)},D=e=>{var t;return c?c(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},j=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},E=p((()=>{if(!C.current)return void x(void 0);const e=Array.from(C.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}w(t),x(r>2?n-8:void 0)}),[]);u((()=>{i!==b&&v(i||[])}),[i]),u((()=>{"default"===m?(()=>{const e=S.current?S.current.offsetTop+S.current.clientHeight:void 0;x(e)})():E()}),[s]),cr({handleWidth:"mobile"===m,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:C,onResize:E});return e(xT,Object.assign({minimisable:s.length>5,minimisedHeight:y},g,{children:(n,{minimised:i})=>t(r,{children:[s.length<3?null:e(kT,Object.assign({styleType:"link",type:"button",onClick:O},{children:b.length?"Clear all":"Select all"})),e($T,Object.assign({role:"group","aria-label":g.title,ref:C},{children:s.map(((r,o)=>"default"===n?((r,n,i)=>{const o=D(r),a=j(r),s=!!b.find((e=>j(e)===a));return t(wT,Object.assign({$visible:!i||n<5,$selected:s,ref:4===n?S:void 0},{children:[e(CT,{displaySize:"small",checked:s,onChange:k(r)}),o]}),a)})(r,o,i):((t,r,n)=>{const i=D(t),o=j(t),a=!!b.find((e=>j(e)===o));return e(ST,Object.assign({type:"checkbox",checked:a,$visible:!n||y&&r<=$,onChange:k(t),useContentWidth:h},{children:i}),o)})(r,o,i)))}))]})}))};OT.displayName="Filter.Checkbox";const DT=T.div`
    background-color: ${sc.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,jT=T.div`
    background-color: ${sc.bg};
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-radius: ${hc.md};
    overflow: hidden;
    width: 100%;
`,ET=T.div`
    background-color: ${sc["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,_T=T.div`
    background-color: ${sc.bg};
    height: 100%;
    width: 100%;
`,TT=T.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,FT=T.div`
    display: flex;
    align-items: center;

    background-color: ${sc.bg};

    ${pc.MaxWidth.lg} {
        border-bottom: ${dc["width-010"]} ${dc.solid}
            ${sc.border};
    }
`,MT=T(kc.HeaderXS).attrs({as:"p"})`
    flex: 1;
    margin: ${uc["spacing-24"]} 0 ${uc["spacing-24"]}
        ${uc["spacing-20"]};

    ${pc.MaxWidth.lg} {
        text-align: center;
        margin: ${uc["spacing-24"]} 0;
    }
`,AT=T(wc)`
    padding: ${uc["spacing-24"]} ${uc["spacing-20"]};
    margin-right: auto;
    color: ${sc.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${sc["icon-hover"]};
    }
`,BT=T(qc.Small)`
    background-color: transparent;
    padding-right: ${uc["spacing-20"]};
    padding-left: ${uc["spacing-20"]};
    height: 100%;

    ${pc.MaxWidth.lg} {
        padding: ${uc["spacing-24"]} ${uc["spacing-20"]};
    }
`,IT=T(Ou.Default)`
    width: 100%;
`,zT=T.div`
    padding: ${uc["spacing-24"]} ${uc["spacing-20"]};
    background-color: ${sc.bg};
    border-top: ${dc["width-010"]} ${dc.solid} ${sc.border};
`,RT=T(qc.Default)`
    width: 100%;
`,PT=({onDismiss:r,onDone:n,children:i})=>t(DT,{children:[e(AT,Object.assign({onClick:r,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(be,{})})),e(TT,{children:i}),e(zT,{children:e(RT,Object.assign({onClick:n,type:"button"},{children:"Done"}))})]});PT.displayName="Filter.Page";const LT=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:d,onDismiss:h,onDone:g,children:p}=n,f=dt(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[m,b]=a(!1),v=o(null),y=o(null),x=A(),$=gc["lg-max"]({theme:x}),w=Sd.useMediaQuery({maxWidth:$});u((()=>{w||S()}),[w]);const C=()=>{b(!0)},S=()=>{b(!1),h&&h()},k=()=>{b(!1),g&&g()},O=()=>{d&&d()},D=e=>"function"==typeof p?p(e):p,j=r=>t(FT,{children:["mobile"===r&&e(AT,Object.assign({onClick:S,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(J,{})})),e(MT,Object.assign({weight:"semibold"},{children:l})),e(BT,Object.assign({styleType:"link",type:"button",onClick:O,disabled:c},{children:"Clear"}))]});return e("div",Object.assign({},f,{children:e(sT.Provider,w?Object.assign({value:{mode:"mobile",rootNode:v}},{children:t(r,{children:[e(IT,Object.assign({"data-testid":"filter-show-button",styleType:s,onClick:C,type:"button",icon:e(ee,{})},{children:i})),e($f,Object.assign({show:m,disableTransition:!0},{children:e(_T,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:t(ET,Object.assign({ref:v},{children:[j("mobile"),e(TT,{children:D("mobile")}),e(zT,{children:e(RT,Object.assign({onClick:k,type:"button"},{children:"Done"}))})]}))}))}))]})}):Object.assign({value:{mode:"default",rootNode:y}},{children:t(jT,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:y},{children:[j("default"),D("default")]}))}))}))};LT.displayName="Filter";const NT=Object.assign(LT,{Item:yT,Page:PT,Checkbox:OT}),WT=T.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${pc.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,HT=T(kc.BodyMD)`
    margin-bottom: ${uc["spacing-16"]};
`,YT=T.div`
    display: flex;
    align-items: flex-start;
`,VT=T.a`
    &:not(:last-child) {
        margin-right: ${uc["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${pc.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${uc["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,UT=()=>t(WT,Object.assign({"data-testid":"download-app-section"},{children:[e(HT,Object.assign({weight:"semibold"},{children:"Download the app"})),t(YT,{children:[e(VT,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(VT,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})),XT={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},KT={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},qT={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var GT;!function(e){e.getCopyrightInfo=(e=new Date,r)=>{const n=t(r);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${Ld(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const r=(e=>{switch(e){case"bookingsg":return KT;case"mylegacy":return qT;default:return XT}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},r.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},r.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},r.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(GT||(GT={}));const ZT=T.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?F`
                padding: 0 ${gc["xxl-margin"]}px;
            `:F`
                padding: 0 ${gc["xxl-margin"]}px;
                max-width: 1440px;

                ${pc.MaxWidth.xl} {
                    padding: 0 ${gc["xl-margin"]}px;
                }

                ${pc.MaxWidth.lg} {
                    padding: 0 ${gc["lg-margin"]}px;
                }

                ${pc.MaxWidth.md} {
                    padding: 0 ${gc["md-margin"]}px;
                }

                ${pc.MaxWidth.sm} {
                    padding: 0 ${gc["sm-margin"]}px;
                }

                ${pc.MaxWidth.xs} {
                    padding: 0 ${gc["xs-margin"]}px;
                }

                ${pc.MaxWidth.xxs} {
                    padding: 0 ${gc["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return F`
                    column-gap: ${gc["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${gc["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${pc.MaxWidth.xl} {
                        column-gap: ${gc["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${gc["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${pc.MaxWidth.lg} {
                        column-gap: ${gc["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${gc["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${pc.MaxWidth.md} {
                        column-gap: ${gc["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${gc["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${pc.MaxWidth.sm} {
                        column-gap: ${gc["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${gc["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${pc.MaxWidth.xs} {
                        column-gap: ${gc["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${gc["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${pc.MaxWidth.xxs} {
                        column-gap: ${gc["xss-gutter"]}px;
                        grid-template-columns: repeat(
                            ${gc["xss-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return F`
                    display: flex;
                    flex-direction: column;
                `;default:return F`
                    display: flex;
                `}}}
`,QT=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=dt(t,["children","data-testid","type","stretch"]);return e(ZT,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),JT=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=dt(t,["children","data-testid","stretch"]);return e(eF,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),eF=T.section`
    display: block;
    position: relative;
`,tF=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=dt(t,["children","data-testid","className","type","stretch"]);return e(JT,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e(QT,Object.assign({"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s},{children:n}))}))})),rF={Section:JT,Container:QT,Content:tF,ColDiv:sf},nF=T.footer`
    background: ${sc["bg-strong"]};
`,iF=T(kc.LinkSM)`
    color: ${sc.text};
`,oF=T(bf)`
    width: 100%;
`,aF=T(rF.Content)`
    padding: ${uc["spacing-64"]} 0;

    ${pc.MaxWidth.lg} {
        padding: ${uc["spacing-32"]} 0;
    }
`,sF=T.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${pc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${uc["spacing-32"]};
    }

    ${pc.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${uc["spacing-32"]};
    }
`,lF=T.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${uc["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${pc.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${pc.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,cF=T.div`
    grid-column: 13 / span 6;

    ${pc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${uc["spacing-32"]};
    }

    ${pc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,dF=T(rF.Content)`
    padding: ${uc["spacing-20"]} 0;

    ${pc.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${uc["spacing-16"]} 0;
    }
`,uF=T.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${uc["spacing-16"]};
    }

    ${pc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${pc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,hF=T(uF)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${pc.MaxWidth.lg} {
        margin-top: ${uc["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${pc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,gF=T(kc.LinkXS)`
    color: ${sc.text};
    &:not(:last-child) {
        margin-right: ${uc["spacing-16"]};
    }

    svg {
        color: ${sc.icon};
    }

    &:hover {
        color: ${sc["text-subtler"]};
        svg {
            color: ${sc["icon-subtle"]};
        }
    }

    ${pc.MaxWidth.lg} {
        margin-bottom: ${uc["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${pc.MaxWidth.lg} {
        margin-bottom: ${uc["spacing-8"]};
    }
`,pF=n=>{var{children:i,links:o,lastUpdated:a,disclaimerLinks:s,showDownloadAddon:l,logoSrc:c,copyrightInfo:d,onFooterLinkClick:u,layout:h="default"}=n,g=dt(n,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const p="stretch"===h,f=A(),m=t=>t.map(((t,r)=>{const n=dt(t,["data-options"]);return e("li",{children:e(iF,Object.assign({},n,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):u&&(e.preventDefault(),u(t))})(e,t)}))},r)}));return t(nF,Object.assign({},g,{children:[(()=>{let n=null;return i||((o||l)&&(n=t(r,{children:[e(sF,Object.assign({"data-testid":"logo-section"},{children:e("img",{src:c||GT.getFooterLogo(null==f?void 0:f.resourceScheme),alt:"LifeSG","data-testid":"logo"})})),(null==o?void 0:o[0])&&e(lF,Object.assign({"data-testid":"link-col-1"},{children:m(o[0])}),"link-col-1"),(null==o?void 0:o[1])&&e(lF,Object.assign({"data-testid":"link-col-2"},{children:m(o[1])}),"link-col-2"),l&&e(cF,{children:e(UT,{})})]})),n?t(r,{children:[e(aF,Object.assign({type:"grid",stretch:p},{children:n})),e(oF,{})]}):null)})(),t(dF,Object.assign({type:"grid",stretch:p},{children:[e(uF,{children:(()=>{const t=GT.getDisclaimerLinks(null==f?void 0:f.resourceScheme,s);return Object.keys(t).map((r=>e(gF,Object.assign({},t[r]),r)))})()},"disclaimer"),e(hF,{children:e(kc.BodyXS,Object.assign({"data-testid":"copyright-text"},{children:d||t(r,{children:["©"," ",GT.getCopyrightInfo(a,null==f?void 0:f.resourceScheme)]})}))},"copyright")]}))]}))};var fF=function(e,t){return Number(e.toFixed(t))},mF=function(e,t,r){r&&"function"==typeof r&&r(e,t)},bF={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},vF=function(e){"number"==typeof e&&cancelAnimationFrame(e)},yF=function(e){e.mounted&&(vF(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function xF(e,t,r,n){if(e.mounted){var i=(new Date).getTime();yF(e),e.animation=function(){if(!e.mounted)return vF(e.animation);var o=(new Date).getTime()-i,a=o/r,s=(0,bF[t])(a);o>=r?(n(1),e.animation=null):e.animation&&(n(s),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function $F(e,t,r,n){var i=function(e){var t=e.scale,r=e.positionX,n=e.positionY;return!(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,h=t.positionY-c;0===r?o(t.scale,t.positionX,t.positionY):xF(e,n,r,(function(e){o(s+d*e,l+u*e,c+h*e)}))}}var wF=function(e,t){var r=e.wrapperComponent,n=e.contentComponent,i=e.setup.centerZoomedOut;if(!r||!n)throw new Error("Components are not mounted");var o=function(e,t,r){var n=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*r,a=t.offsetHeight*r;return{wrapperWidth:n,wrapperHeight:i,newContentWidth:o,newDiffWidth:n-o,newContentHeight:a,newDiffHeight:i-a}}(r,n,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,r,n,i,o,a){var s=e>t?r*(a?1:.5):0,l=n>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:n-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},CF=function(e,t,r,n){return fF(n?e<t?t:e>r?r:e:e,2)},SF=function(e,t){var r=wF(e,t);return e.bounds=r,r};function kF(e,t,r,n,i,o,a){var s=r.minPositionX,l=r.minPositionY,c=r.maxPositionX,d=r.maxPositionY,u=0,h=0;return a&&(u=i,h=o),{x:CF(e,s-u,c+u,n),y:CF(t,l-h,d+h,n)}}function OF(e,t,r,n,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=n-s;return"number"!=typeof t||"number"!=typeof r?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):kF(l-t*d,c-r*d,i,o,0,0,null)}function DF(e,t,r,n,i){var o=t-(i?n:0);return!Number.isNaN(r)&&e>=r?r:!Number.isNaN(t)&&e<=o?o:e}var jF=function(e,t){var r=e.setup.panning.excluded,n=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(n&&o&&a)&&!lM(o,r)},EF=function(e){var t=e.isInitialized,r=e.isPanning,n=e.setup.panning.disabled;return!(!t||!r||n)};function _F(e,t,r,n,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||r!==u)){var h=kF(t,r,s,o,n,i,a),g=h.x,p=h.y;e.setTransformState(c,g,p)}}var TF=function(e,t){var r=e.setup,n=e.transformState.scale,i=r.minScale,o=r.disablePadding;return t>0&&n>=i&&!o?t:0},FF=function(e){var t=e.mounted,r=e.setup,n=r.disabled,i=r.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&n&&!t)},MF=function(e){var t=e.mounted,r=e.velocity,n=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t)&&!(!r||!n)};function AF(e,t,r,n,i,o,a,s,l,c){if(i){var d;if(t>a&&r>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&r<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return n?t:CF(e,o,a,i)}function BF(e,t){if(FF(e)){var r=e.lastMousePosition,n=e.velocityTime,i=e.setup,o=e.wrapperComponent,a=i.velocityAnimation.equalToMove,s=Date.now();if(r&&n&&o){var l=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(o,a),c=t.x-r.x,d=t.y-r.y,u=c/l,h=d/l,g=s-n,p=c*c+d*d,f=Math.sqrt(p)/g;e.velocity={velocityX:u,velocityY:h,total:f}}e.lastMousePosition=t,e.velocityTime=s}}function IF(e,t){var r=e.transformState.scale;yF(e),SF(e,r),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var r=t.touches,n=e.transformState,i=n.positionX,o=n.positionY;if(e.isPanning=!0,1===r.length){var a=r[0].clientX,s=r[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var r=e.transformState,n=r.positionX,i=r.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-n,y:a-i}}(e,t)}function zF(e){var t=e.transformState.scale,r=e.setup,n=r.minScale,i=r.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<n||!a&&!s)){var d=function(e){var t=e.transformState,r=t.positionX,n=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,h=d.minPositionX,g=d.maxPositionY,p=d.minPositionY,f=r>u||r<h,m=n>g||n<p,b=OF(e,r>u?c.offsetWidth:e.setup.minPositionX||0,n>g?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:f?v:r,positionY:m?y:n}}}(e);d&&$F(e,d,l,c)}}function RF(e,t,r){var n=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(n){var s=function(e,t,r){var n=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!n)return{x:l,y:c};var d=t-n.x,u=r-n.y;return{x:a?l:d,y:s?c:u}}(e,t,r),l=s.x,c=s.y,d=TF(e,o),u=TF(e,a);BF(e,{x:l,y:c}),_F(e,l,c,d,u)}}function PF(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,r=e.velocity,n=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==n?void 0:n.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&r&&(null==r?void 0:r.total)>.1&&u?function(e){var t=e.velocity,r=e.bounds,n=e.setup,i=e.wrapperComponent;if(MF(e)&&t&&r&&i){var o=t.velocityX,a=t.velocityY,s=t.total,l=r.maxPositionX,c=r.minPositionX,d=r.maxPositionY,u=r.minPositionY,h=n.limitToBounds,g=n.alignmentAnimation,p=n.zoomAnimation,f=n.panning,m=f.lockAxisY,b=f.lockAxisX,v=p.animationType,y=g.sizeX,x=g.sizeY,$=g.velocityAlignmentTime,w=function(e,t){var r=e.setup.velocityAnimation,n=r.equalToMove,i=r.animationTime,o=r.sensitivity;return n?i*t*o:i}(e,s),C=Math.max(w,$),S=TF(e,y),k=TF(e,x),O=S*i.offsetWidth/100,D=k*i.offsetHeight/100,j=l+O,E=c-O,_=d+D,T=u-D,F=e.transformState,M=(new Date).getTime();xF(e,v,C,(function(t){var r=e.transformState,n=r.scale,i=r.positionX,s=r.positionY,p=((new Date).getTime()-M)/$,f=1-(0,bF[g.animationType])(Math.min(1,p)),v=1-t,y=i+o*v,x=s+a*v,w=AF(y,F.positionX,i,b,h,c,l,E,j,f),C=AF(x,F.positionY,s,m,h,u,d,T,_,f);i===y&&s===x||e.setTransformState(n,w,C)}))}}(e):zF(e)}}function LF(e,t,r,n){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=DF(fF(t,2),o,a,0,!1),c=OF(e,r,n,l,SF(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function NF(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,h=c||n>=a;if((n>=1||s)&&zF(e),!h&&i&&e.mounted){var g=LF(e,a,t||i.offsetWidth/2,r||i.offsetHeight/2);g&&$F(e,g,d,u)}}var WF=function(){return WF=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},WF.apply(this,arguments)};function HF(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var YF=1,VF=0,UF=0,XF={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},KF=function(e){var t,r,n,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:YF,scale:null!==(r=e.initialScale)&&void 0!==r?r:YF,positionX:null!==(n=e.initialPositionX)&&void 0!==n?n:VF,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:UF}},qF=function(e){var t=WF({},XF);return Object.keys(e).forEach((function(r){var n=void 0!==e[r];if(void 0!==XF[r]&&n){var i=Object.prototype.toString.call(XF[r]),o="[object Object]"===i,a="[object Array]"===i;t[r]=o?WF(WF({},XF[r]),e[r]):a?HF(HF([],XF[r],!0),e[r],!0):e[r]}})),t},GF=function(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?n*Math.exp(t*r):n+t*r;return DF(fF(u,3),s,a,d,!1)};function ZF(e,t,r,n,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,h=LF(e,GF(e,t,r),d,u);if(!h)return console.error("Error during zoom event. New transformation state was not calculated.");$F(e,h,n,i)}function QF(e,t,r,n){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=KF(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var h=wF(e,s.scale),g=kF(s.positionX,s.positionY,h,a,0,0,o),p={scale:s.scale,positionX:g.x,positionY:g.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==n||n(),$F(e,p,t,r))}}var JF=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),ZF(e,1,t,r,n)}},eM=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),ZF(e,-1,t,r,n)}},tM=function(e){return function(t,r,n,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var h={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(r)?l:r,scale:Number.isNaN(n)?c:n};$F(e,h,i,o)}}},rM=function(e){return function(t,r){void 0===t&&(t=200),void 0===r&&(r="easeOut"),QF(e,t,r)}},nM=function(e){return function(t,r,n){void 0===r&&(r=200),void 0===n&&(n="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=dM(t||i.scale,o,a);$F(e,s,r,n)}}},iM=function(e){return function(t,r,n,i){void 0===n&&(n=600),void 0===i&&(i="easeOut"),yF(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,r){var n=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!n||!i)return o;var d=n.getBoundingClientRect(),u=t.getBoundingClientRect(),h=function(e,t,r,n){var i=e.getBoundingClientRect(),o=t.getBoundingClientRect(),a=r.getBoundingClientRect(),s=o.x*n.scale,l=o.y*n.scale;return{x:(i.x-a.x+s)/n.scale,y:(i.y-a.y+l)/n.scale}}(t,n,i,o),g=h.x,p=h.y,f=u.width/o.scale,m=u.height/o.scale,b=n.offsetWidth/f,v=n.offsetHeight/m,y=DF(r||Math.min(b,v),l,c,0,!1),x=(d.width-f*y)/2,$=(d.height-m*y)/2,w=kF((d.left-g)*y+x,(d.top-p)*y+$,wF(e,y),s,0,0,n);return{positionX:w.x,positionY:w.y,scale:y}}(e,a,r);$F(e,s,n,i)}}},oM=function(e){return{instance:e,zoomIn:JF(e),zoomOut:eM(e),setTransform:tM(e),resetTransform:rM(e),centerView:nM(e),zoomToElement:iM(e)}},aM=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,oM(e)),t};function sM(){try{return{get passive(){return!0,!1}}}catch(e){return!1}}var lM=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},cM=function(e){e&&clearTimeout(e)},dM=function(e,t,r){var n=r.offsetWidth*e,i=r.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-n)/2,positionY:(t.offsetHeight-i)/2}};function uM(e,t,r){var n=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-n.left)/r,o=(e.clientY-n.top)/r;else{var a=e.touches[0];i=(a.clientX-n.left)/r,o=(a.clientY-n.top)/r}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var hM=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},gM=function(e,t){var r=e.props,n=r.onWheel,i=r.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,h=a.disablePadding,g=a.smooth,p=d.size,f=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var r=function(e){return e?e.deltaY<0?1:-1:0}(e),n=function(e,t){return"number"==typeof e?e:t}(t,r);return n}(t,null),y=function(e,t,r,n,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,h=d.size,g=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var p=o+t*r;if(i)return p;var f=!n&&!g;return DF(fF(p,3),c,l,h,f&&!u)}(e,v,g?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=SF(e,y),$=uM(t,o,s),w=l&&(f||0===p||c||h),C=OF(e,$.x,$.y,y,x,w),S=C.x,k=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,k),mF(aM(e),t,n),mF(aM(e),t,i)}},pM=function(e,t){var r=e.props,n=r.onWheelStop,i=r.onZoomStop;cM(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(NF(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var r=e.previousWheelEvent,n=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!r&&(n<o||n>a||Math.sign(r.deltaY)!==Math.sign(t.deltaY)||r.deltaY>0&&r.deltaY<t.deltaY||r.deltaY<0&&r.deltaY>t.deltaY||Math.sign(r.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(cM(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,mF(aM(e),t,n),mF(aM(e),t,i))}),160))},fM=function(e,t){var r=e.contentComponent,n=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==n&&r){var u=function(e,t,r){var n=r.getBoundingClientRect(),i=e.touches,o=fF(i[0].clientX-n.left,5),a=fF(i[0].clientY-n.top,5);return{x:(o+fF(i[1].clientX-n.left,5))/2/t,y:(a+fF(i[1].clientY-n.top,5))/2/t}}(t,i,r);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var h=hM(t),g=function(e,t){var r=e.pinchStartScale,n=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!r||null===n||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:DF(fF(t/n*r,2),a,o,c,!d&&!l)}(e,h);if(g!==i){var p=SF(e,g),f=a&&(c||0===d||s),m=OF(e,u.x,u.y,g,p,f),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=h,e.setTransformState(g,b,v)}}}},mM=function(e,t){var r=e.props.onZoomStop,n=e.setup.doubleClick.animationTime;cM(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,mF(aM(e),t,r)}),n)};function bM(e,t){var r=e.setup,n=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=r.doubleClick,u=d.disabled,h=d.mode,g=d.step,p=d.animationTime,f=d.animationType;if(!u&&!n){if("reset"===h)return function(e,t){var r=e.props,n=r.onZoomStart,i=r.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;mF(aM(e),t,n),QF(e,a,s,(function(){return mF(aM(e),t,i)})),mM(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(h,e.transformState.scale),b=GF(e,m,g);if(a!==b){mF(aM(e),t,l);var v=uM(t,o,a),y=LF(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");mF(aM(e),t,c),$F(e,y,p,f),mM(e,t)}}}var vM=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,SF(t,t.transformState.scale),t.setup=qF(e)},this.initializeWindowEvents=function(){var e,r,n=sM(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(r=t.wrapperComponent)||void 0===r||r.addEventListener("wheel",t.onWheelPanning,n),null==o||o.addEventListener("mousedown",t.onPanningStart,n),null==o||o.addEventListener("mousemove",t.onPanning,n),null==o||o.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==o||o.addEventListener("keyup",t.setKeyUnPressed,n),null==o||o.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,r,n=sM(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,n),null==o||o.removeEventListener("mousemove",t.onPanning,n),null==o||o.removeEventListener("mouseup",t.onPanningStop,n),null==i||i.removeEventListener("mouseleave",t.clearPanning,n),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,n),null==o||o.removeEventListener("keydown",t.setKeyPressed,n),document.removeEventListener("mouseleave",t.clearPanning,n),yF(t),null===(r=t.observer)||void 0===r||r.disconnect()},this.handleInitializeWrapperEvents=function(e){var r=sM();e.addEventListener("wheel",t.onWheelZoom,r),e.addEventListener("dblclick",t.onDoubleClick,r),e.addEventListener("touchstart",t.onTouchPanningStart,r),e.addEventListener("touchmove",t.onTouchPanning,r),e.addEventListener("touchend",t.onTouchPanningStop,r)},this.handleInitialize=function(e){var r=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(aM(t))})),r&&(t.setCenter(),t.observer=new ResizeObserver((function(){var r,n=e.offsetWidth,i=e.offsetHeight;(n>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(aM(t))})),t.setCenter(),null===(r=t.observer)||void 0===r||r.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.setup.wheel,n=r.disabled,i=r.wheelDisabled,o=r.touchPadDisabled,a=r.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||n||!c||i&&!t.ctrlKey||o&&t.ctrlKey||lM(c,a))}(t,e);r&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var r=e.props,n=r.onWheelStart,i=r.onZoomStart;e.wheelStopEventTimer||(yF(e),mF(aM(e),t,n),mF(aM(e),t,i))}(t,e),gM(t,e),pM(t,e))}},this.onWheelPanning=function(e){var r=t.setup,n=r.disabled,i=r.wheel,o=r.panning;if(t.wrapperComponent&&t.contentComponent&&!n&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,h=o.lockAxisY?l:d,g=t.setup.alignmentAnimation,p=g.sizeX,f=g.sizeY,m=TF(t,p),b=TF(t,f);u===s&&h===l||_F(t,u,h,m,b)}},this.onPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;r||jF(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),yF(t),IF(t,e),mF(aM(t),e,n))},this.onPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;r||EF(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),RF(t,e.clientX,e.clientY),mF(aM(t),e,n))},this.onPanningStop=function(e){var r=t.props.onPanningStop;t.isPanning&&(PF(t),mF(aM(t),e,r))},this.onPinchStart=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinchingStart,o=n.onZoomStart;if(!r){var a=function(e,t){var r=e.setup.pinch,n=r.disabled,i=r.excluded,o=e.isInitialized,a=t.target;return!(!o||n||!a||lM(a,i))}(t,e);a&&(function(e,t){var r=hM(t);e.pinchStartDistance=r,e.lastDistance=r,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,yF(e)}(t,e),yF(t),mF(aM(t),e,i),mF(aM(t),e,o))}},this.onPinch=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinching,o=n.onZoom;if(!r){var a=function(e){var t=e.setup.pinch.disabled,r=e.isInitialized,n=e.pinchStartDistance;return!(!r||t||!n)}(t);a&&(e.preventDefault(),e.stopPropagation(),fM(t,e),mF(aM(t),e,i),mF(aM(t),e,o))}},this.onPinchStop=function(e){var r,n,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(n=(r=t).pinchMidpoint,r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,NF(r,null==n?void 0:n.x,null==n?void 0:n.y),mF(aM(t),e,o),mF(aM(t),e,a))},this.onTouchPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;if(!r&&jF(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,yF(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(yF(t),IF(t,e),mF(aM(t),e,n)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(r)return;if(!EF(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];RF(t,i.clientX,i.clientY),mF(aM(t),e,n)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.isInitialized,n=e.setup,i=e.wrapperComponent,o=n.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(r&&l&&c)||a||lM(l,s))}(t,e);r&&bM(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,r,n){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(n))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=r,t.transformState.positionY=n,t.applyTransformation();var o=aM(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),mF(o,{scale:e,positionX:r,positionY:n},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=dM(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,r,n){return t.props.customTransform?t.props.customTransform(e,r,n):function(e,t,r){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(r,")")}(e,r,n)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,r=e.scale,n=e.positionX,i=e.positionY,o=t.handleTransformStyles(n,i,r);t.contentComponent.style.transform=o}},this.getContext=function(){return aM(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,r){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=r,SF(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(r),t.initializeWindowEvents(),t.isInitialized=!0;var n=aM(t);mF(n,void 0,t.props.onInit)},this.props=e,this.setup=qF(this.props),this.transformState=KF(this.props)},yM=i.createContext(null),xM=i.forwardRef((function(e,t){var r=o(new vM(e)).current,n=function(e,t){return"function"==typeof e?e(t):e}(e.children,oM(r));return b(t,(function(){return oM(r)}),[r]),u((function(){r.update(e)}),[r,e]),i.createElement(yM.Provider,{value:r},n)}));i.forwardRef((function(e,t){var r,n=o(null),a=f(yM);return u((function(){return a.onChange((function(e){if(n.current){n.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),i.createElement("div",WF({},e,{ref:(r=[n,t],function(e){r.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var $M="transform-component-module_wrapper__SPB86",wM="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var CM=function(e){var t=e.children,r=e.wrapperClass,n=void 0===r?"":r,a=e.contentClass,s=void 0===a?"":a,l=e.wrapperStyle,c=e.contentStyle,d=e.wrapperProps,h=void 0===d?{}:d,g=e.contentProps,p=void 0===g?{}:g,m=f(yM),b=m.init,v=m.cleanupWindowEvents,y=o(null),x=o(null);return u((function(){var e=y.current,t=x.current;return null!==e&&null!==t&&b&&(null==b||b(e,t)),function(){null==v||v()}}),[]),i.createElement("div",WF({},h,{ref:y,className:"react-transform-wrapper ".concat($M," ").concat(n),style:l}),i.createElement("div",WF({},p,{ref:x,className:"react-transform-component ".concat(wM," ").concat(s),style:c}),t))};const SM=T.div`
    background-color: ${sc["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${sc["icon-subtle"]};
    }
`,kM=t=>e(SM,Object.assign({},t,{children:e(te,{})})),OM=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,DM=T.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,jM=T(kM)`
    width: 100%;
    height: 100%;
`,EM=({src:t,className:r,alt:n,fit:i,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=a(!0),[h,g]=a();u((()=>{d(!0),g(void 0);const e=new Image;e.src=t,e.onload=()=>{s&&l({src:t,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),g(e)}}),[t]);return e(OM,Object.assign({className:r},{children:h?null!=o?o:e(jM,{}):c?e(fd,{}):e(DM,{src:t,alt:n,$fit:i})}))},_M=T(wc)`
    padding: 0;
    border-radius: 100%;
    background: ${sc.bg};
    color: ${sc["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,TM=T(_M)`
    position: absolute;
    top: ${uc["spacing-48"]};
    right: ${uc["spacing-48"]};
    z-index: 5;

    ${pc.MaxWidth.sm} {
        top: ${uc["spacing-20"]};
        right: ${uc["spacing-20"]};
    }
`,FM=T(_M)`
    position: absolute;
    top: ${uc["spacing-48"]};
    right: calc(
        2.5rem + ${uc["spacing-48"]} + ${uc["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${pc.MaxWidth.sm} {
        top: ${uc["spacing-20"]};
        right: calc(
            2.5rem + ${uc["spacing-20"]} + ${uc["spacing-16"]}
        );
    }
`,MM=T(_M)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&F`
            left: ${uc["spacing-48"]};
            ${pc.MaxWidth.sm} {
                left: ${uc["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&F`
            right: ${uc["spacing-48"]};
            ${pc.MaxWidth.sm} {
                right: ${uc["spacing-20"]};
            }
        `}
`,AM=T.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,BM=T.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,IM=T.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,zM=T.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,RM=T.div`
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
`,PM=T(EM)`
    height: 100%;
    width: 100%;
`,LM=T(kM)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,NM=T.div`
    display: flex;
    justify-content: center;
    padding: ${uc["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,WM=T(kc.BodyXS)`
    display: inline-flex;
    padding: ${uc["spacing-4"]} ${uc["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${hc.full};
    background-color: ${sc.bg};
    text-align: center;
`,HM=T.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${sc["bg-inverse"]};
    padding: ${uc["spacing-24"]} ${uc["spacing-16"]};

    ${pc.MaxWidth.sm} {
        padding: ${uc["spacing-16"]} ${uc["spacing-20"]};
    }
`,YM=T.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${uc["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,VM=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${pc.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,UM=T.div`
    cursor: pointer;
    background-color: ${sc["bg-inverse"]};
    border-radius: ${hc.md};
    border: ${dc.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${pc.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${e=>e.$active?F`
                  border-width: ${dc["width-040"]};
                  border-color: ${sc["border-selected"]};

                  ${pc.MaxWidth.sm} {
                      border-width: ${dc["width-020"]};
                  }

                  :hover {
                      border-color: ${sc["border-selected-hover"]};
                  }
              `:F`
                  border-width: ${dc["width-010"]};

                  :hover {
                      border-color: ${sc["border-hover"]};
                  }
              `};
`,XM=T(EM)`
    height: 100%;
    width: 100%;
`,KM=(n,i)=>{var{items:s,initialActiveItemIndex:l,hideThumbnail:c=!1,hideNavigation:d=!1,hideCounter:h=!1,hideMagnifier:g=!1,onClose:p}=n,f=dt(n,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[m,v]=a(null!=l?l:0),[y,x]=a({}),[$,w]=a(1),[C,S]=a(null),[k,O]=a(null),D=o(null),j=o([]),E=o([]),_=C&&k?C-k:0;b(i,(()=>({currentItemIndex:m,setCurrentItem:I,goToPrevItem:A,goToNextItem:B}))),cu("keydown",(function(e){"ArrowRight"===e.key?B():"ArrowLeft"===e.key?A():"Escape"===e.key&&p&&p()}),"document"),u((()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[m])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),w(1)}),[m]);const T=e=>{w(e.state.scale)};const F=({src:e,height:t,width:r})=>{x((n=>Object.assign(Object.assign({},n),{[e]:{height:t,width:r}})))},M=()=>{const e=y[s[m].src];if((null==D?void 0:D.current)&&e){const{clientHeight:t,clientWidth:r}=D.current,{width:n,height:i}=e,o=i/n<t/r;return n<r&&i<t?o?r/n:t/i:o?t/(i/(n/r)):r/(n/(i/t))}},A=()=>{var e,t;null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>0===e?s.length-1:e-1))},B=()=>{var e,t;null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>e===s.length-1?0:e+1))},I=e=>{var t,r;null===(r=null===(t=E.current)||void 0===t?void 0:t[m])||void 0===r||r.resetTransform(),v(e)};return t(zf,Object.assign({},f,{"data-testid":"image-carousel-modal"},{children:[e(TM,Object.assign({"aria-label":"Close image carousel",onClick:p,focusHighlight:!1},{children:e(J,{"aria-hidden":!0})})),!g&&e(FM,Object.assign({"aria-label":1===$?"Zoom in":"Zoom out",onClick:()=>{var e,t,r,n;if(1===$){const r=M();null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.centerView(r),w(r)}else w(1),null===(n=null===(r=E.current)||void 0===r?void 0:r[m])||void 0===n||n.resetTransform()},focusHighlight:!1},{children:e(1===$?re:ne,{"aria-hidden":!0})})),t(AM,{children:[t(BM,{children:[!d&&t(r,{children:[e(MM,Object.assign({"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:A},{children:e(ie,{"aria-hidden":!0})})),e(MM,Object.assign({"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:B},{children:e(oe,{"aria-hidden":!0})}))]}),e(IM,Object.assign({ref:D,onTouchStart:e=>{$<=1&&S(e.touches[0].clientX)},onTouchMove:e=>{!C||$>1||O(e.touches[0].clientX)},onTouchEnd:()=>{Math.abs(_)>D.current.offsetWidth/3&&(_>0?B():A()),S(null),O(null)}},{children:e(zM,Object.assign({style:{transform:`translateX(calc(${100*-m}% - ${_}px))`}},{children:s.map(((t,r)=>{var n;return e(RM,Object.assign({"data-testid":"slide-item"},{children:e(xM,Object.assign({ref:e=>E.current[r]=e,panning:{disabled:$<=1},initialScale:1,onZoom:T,onZoomStop:T,onWheel:T},{children:e(CM,{children:e(PM,{src:t.src,alt:null!==(n=t.alt)&&void 0!==n?n:`Image ${r+1}`,placeholder:e(LM,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:F})})}))}),r)}))}))})),!h&&e(NM,{children:e(WM,Object.assign({weight:"semibold"},{children:`${m+1}/${s.length}`}))})]}),!c&&e(HM,{children:e(YM,{children:s.map(((t,r)=>{var n;const i=null!==(n=t.thumbnailSrc)&&void 0!==n?n:t.src;return e(VM,{children:e(UM,Object.assign({"data-testid":"thumbnail-item",$active:r===m,onClick:()=>I(r),ref:e=>j.current[r]=e},{children:e(XM,{src:i,alt:`Thumbnail ${r+1}`,fit:"cover"})}))},r)}))})})]})]}))},qM=g(KM),GM=T.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${sc.bg};
    border: ${dc["width-010"]} ${dc.solid} transparent;
    border-radius: ${hc.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${cc["duration-250"]} ${cc["ease-default"]};
    ${lc["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?sc["text-primary"]:sc.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${pc.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${lc["body-md-semibold"]}
    }

    ${e=>e.$error?F`
                background: ${sc.bg};
                border: ${dc["width-010"]} ${dc.solid}
                    ${sc["border-error"]};
            `:e.$selected?F`
                background: ${sc["bg-selected"]};
                border: ${dc["width-010"]} ${dc.solid}
                    ${sc["border-selected"]};

                &:hover {
                    background: ${sc["bg-selected-hover"]};
                    border: ${dc["width-010"]} ${dc.solid}
                        ${sc["border-selected-hover"]};
                }
            `:F`
                &:hover {
                    border: ${dc["width-010"]} ${dc.solid}
                        ${sc["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${dc["width-010"]} ${dc.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${sc["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,ZM=i.forwardRef(((r,n)=>{var{children:i,imgSrc:o,selected:a,error:s,type:l="button"}=r,c=dt(r,["children","imgSrc","selected","error","type"]);return t(GM,Object.assign({ref:n,$selected:a,$error:s,type:l},c,{children:[e(Em,{src:o}),i]}))})),QM=F`
    height: 1.125rem;
    width: 1.125rem;
    color: ${sc["icon-primary"]};
`,JM=T.div`
    border-top: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};
`,eA=T(kc.HeaderSM).attrs({as:"div"})`
    color: ${sc["text-primary"]};
    margin-bottom: 0.5rem;
`,tA=T(kc.HeaderXS).attrs({as:"div"})`
    color: ${sc["text-primary"]};
`,rA=T(me)`
    ${QM}
`,nA=T.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};
    }

    :hover {
        ${eA},
        ${tA},
        ${rA} {
            color: ${sc["text-hover"]};
        }
    }
`,iA=T.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,oA=T(kc.BodyMD)`
    margin-top: 0.25rem;
`,aA=T(Yo.div)`
    overflow: hidden;
`,sA=T.div`
    border-top: ${dc["width-010"]} ${dc.solid} ${sc.border};
`,lA=T(kc.BodyMD).attrs({as:"span"})`
    color: ${sc["text-primary"]};
    margin-right: 1rem;
`,cA=T(tt)`
    ${QM}
`,dA=T(et)`
    ${QM}
`,uA=T.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${dc["width-010"]} ${dc.solid} ${sc.border};

    :hover {
        ${lA},
        ${cA},
        ${dA} {
            color: ${sc["text-hover"]};
        }
    }
`,hA=n=>{var{items:i,maxShown:o,style:s="default",onItemClick:l}=n,c=dt(n,["items","maxShown","style","onItemClick"]);const[d,u]=a(!o||o>=i.length),h=o?i.slice(0,o):i,g=o?i.slice(o):[],p=cr(),f=p.ref,m=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):l&&(e.preventDefault(),l(t,e))},b=()=>{u(!d)},v=(n,i,o,a)=>t(r,{children:[t(iA,{children:[e("small"===s?tA:eA,Object.assign({"data-testid":`link-title-${n}`,weight:"semibold"},{children:i})),o&&e(oA,Object.assign({"data-testid":`link-description-${n}`},{children:o})),a]}),e(rA,{})]}),y=Oo({height:d?p.height:0});return t(JM,Object.assign({},c,{children:[h.map(((t,r)=>{const{title:n,description:i,secondaryDescription:o,onClick:a}=t,s=dt(t,["title","description","secondaryDescription","onClick"]);return e(nA,Object.assign({"data-testid":`list-item-shown-${r}`,onClick:e=>m(e,t)},s,{children:v(r,n,i,o)}),`list-item-shown-${r}`)})),g.length>0&&e(aA,Object.assign({style:y,"data-testid":"minimised-content"},{children:e(sA,Object.assign({ref:f},{children:g.map(((t,r)=>{const{title:n,description:i,onClick:o,secondaryDescription:a}=t,s=dt(t,["title","description","onClick","secondaryDescription"]);return e(nA,Object.assign({"data-testid":`list-item-minimised-${r}`,onClick:e=>m(e,t)},s,{children:v(r,n,i,a)}),`list-item-minimised-${r}`)}))}))})),g.length>0&&t(uA,Object.assign({type:"button",onClick:b,"data-testid":"toggle-button",$showMinimised:d},{children:[e(lA,Object.assign({weight:"semibold","data-testid":"toggle-button-label"},{children:d?"View less":"View more"})),e(d?dA:cA,{})]}))]}))},gA=T.div`
    ${e=>td({textSize:e.$textSize})}
    ${e=>e.color&&F`
            color: ${e.color};
        `}
`,pA=g(((t,r)=>{const{baseTextColor:n,baseTextSize:i,inline:o}=t,a=dt(t,["baseTextColor","baseTextSize","inline"]);return e(gA,Object.assign({ref:r,as:o?"span":"div",$textSize:i,$textColor:n},a))})),fA=T.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,n=t.sm?t.sm<=2?t.sm:2:void 0,i=t.md||t.sm||2;return F`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${df.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/i}% - 2rem), 1fr)
                );
            }

            ${df.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${n||"auto-fill"},
                    minmax(calc(${100/(n||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,mA=T.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:n,colsMd:i,startSm:o,colsSm:a}=e;return F`
            grid-column: ${t||n||"auto"} / span
                ${r||i||1};

            ${df.MaxWidth.tablet} {
                grid-column: ${n||o||"auto"} / span
                    ${i||a||1};
            }

            ${df.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span ${a||1};
            }
        `}}
`,bA={Grid:i.forwardRef(((t,r)=>{const{children:n}=t,i=dt(t,["children"]);return e(fA,Object.assign({ref:r},i,{children:n}))})),Tile:i.forwardRef(((t,r)=>{const{children:n}=t,i=dt(t,["children"]);return e(mA,Object.assign({ref:r},i,{children:n}))}))},vA=T.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${pc.MaxWidth.sm} {
        padding: 0;
    }
`,yA=()=>{u((()=>{t()||r()}),[]);const t=()=>document.getElementById(xA),r=()=>{if(!document.getElementById(xA)){const e=document.createElement("script");e.id=xA,e.type="module",e.src=$A,document.head.appendChild(e)}};return e(vA,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},xA="lifesg-ds-masthead-script",$A="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",wA={notCompress:6,compress:4},CA=T.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,SA=T.nav`
    height: ${e=>e.$compress?wA.compress:wA.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${cc["duration-350"]} ${cc["ease-standard"]};

    ${pc.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,kA=T.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${pc.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,OA=T(wc)`
    display: none;

    ${pc.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,DA=T(rt)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${sc.icon};
`,jA=T.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${pc.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${pc.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,EA=T.div`
    display: flex;
    background-color: ${sc.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${pc.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${pc.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,_A=T.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${cc["duration-150"]} ${cc["ease-default"]};
        object-fit: contain;
    }
`,TA=({resources:t,onClick:r,"data-id":n,"data-testid":i="navbar-brand",type:o})=>e(_A,Object.assign({role:"link",onClick:e=>{r&&r(e,o)},tabIndex:0,"data-id":n,"data-testid":i,$type:o},{children:e(Em,{src:t.logoSrc,alt:t.brandName})})),FA=T.div`
    display: none;

    ${pc.MaxWidth.lg} {
        display: flex;
    }
`,MA=T.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${uc["spacing-16"]};
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?F`
            right: 0;
            transition: all 300ms ${cc["ease-entrance"]};
            transition-delay: 200ms;
        `:F`
        right: -100%;
        transition: all 300ms ${cc["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return F`
            height: calc(${t} * 100);
        `}}

	${pc.MaxWidth.lg} {
        width: 75%;
    }

    ${pc.MaxWidth.sm} {
        width: 100%;
    }
`,AA=T.div`
    display: flex;
    flex-direction: column;
`,BA=T.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${uc["spacing-40"]} ${uc["spacing-20"]}
        ${uc["spacing-32"]};
`,IA=T(Ie)`
    height: 1.5rem;
    width: 1.5rem;
`,zA=T(wc)`
    position: absolute;
    right: -${uc["spacing-4"]};
    color: ${sc.icon};

    :active,
    :focus {
        color: ${sc["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,RA=i.forwardRef(((n,i)=>{const{show:o,resources:s,children:l,hideNavBranding:c,onClose:d,onBrandClick:h}=n,[g,p]=a(0),{primary:f,secondary:m}=s;u((()=>(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=()=>{if(window){const e=.01*window.innerHeight;p(e)}};return e(FA,Object.assign({ref:i,"data-testid":"drawer"},{children:e(MA,Object.assign({$show:o,$viewHeight:g},{children:t(AA,{children:[t(BA,{children:[e(jA,Object.assign({"data-id":"drawer-brand-container"},{children:!c&&t(r,{children:[e(TA,{resources:f,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&t(r,{children:[e(EA,{}),e(TA,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),e(zA,Object.assign({onClick:d,focusHighlight:!1,"aria-label":"Close nav menu"},{children:e(IA,{})}))]}),l]})}))}))})),PA=T.ul`
    display: flex;
    list-style: none;
    margin-left: ${uc["spacing-64"]};
    flex-shrink: 0;

    ${pc.MaxWidth.lg} {
        display: none;
    }
`,LA=T.ul`
    display: none;

    ${pc.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${uc["spacing-64"]};
        flex-shrink: 0;
    }
`,NA=T.ul`
    display: none;
    list-style: none;

    ${pc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${uc["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${pc.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,WA=T.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${uc["spacing-16"]};
    }

    ${pc.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${uc["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?uc["spacing-16"]:"0"};
        }
    }

    ${pc.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return F`
                    padding: 0 ${uc["spacing-16"]};
                `}}
    }
`,HA=T(qc.Small)`
    ${pc.MaxWidth.lg} {
        width: 100%;
    }
`,YA=T.div`
    display: none;

    ${pc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${uc["spacing-40"]};
    }
`,VA=T(kc.BodyMD)`
    margin-bottom: ${uc["spacing-8"]};
`,UA=T.div`
    display: flex;
`,XA=T.a`
    :not(:last-child) {
        margin-right: ${uc["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${pc.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${pc.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,KA=({actionButtons:n,mobile:i=!1,onActionButtonClick:o})=>{const a=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(t,e)},l=(r,n)=>{const i=r?(e=>{const t=kk(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(n):n;return i.map(((n,i)=>{let o;switch(n.type){case"download":o=r?(l=n.args,t(YA,{children:[e(VA,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),t(UA,{children:[e(XA,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(XA,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):e(HA,Object.assign({},n.args,{type:"button",onClick:s(n),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const t=n.args["data-testid"]?`action-button__${n.args["data-testid"]}`:`action-button__button-${r?"mobile-":""}${i+1}`;o=e(HA,Object.assign({},n.args,{type:"button",onClick:s(n),"data-testid":t}));break}case"component":{const e=n.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return e(WA,Object.assign({$mobile:r},{children:o}),`action-button-${i+1}`)}))};if(n){const o=(null==n?void 0:n.mobile)||n.desktop,a=o.filter((e=>!!e.uncollapsible)),s=o.filter((e=>!e.uncollapsible));return i?e(r,{children:s.length>0&&e(NA,{children:l(i,s)})}):t(r,{children:[a.length>0&&e(LA,{children:l(!1,a)}),n.desktop.length>0&&e(PA,{children:l(i,n.desktop)})]})}return e(r,{})},qA=T.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${uc["spacing-8"]} 0;

    background: ${sc.bg};
    border-radius: ${hc.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${sc.Primitive["neutral-50"]} r g b / 25%);
`,GA=T.ul`
    display: none;
    list-style: none;

    ${pc.MaxWidth.lg} {
        border-left: ${dc["width-040"]} solid ${sc["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,ZA=T(kc.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${sc.text};

    margin: 0 ${uc["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${dc.solid} transparent;
    border-width: ${uc["spacing-12"]} ${uc["spacing-8"]};

    border-radius: ${hc.md};

    ${Xg(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${sc["bg-hover"]};
        color: ${sc.text};
    }

    ${pc.MaxWidth.lg} {
        ${lc["body-md-regular"]}
    }
`,QA=T.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,JA=({items:t,mobile:n=!1,onItemClick:i})=>{const o=e=>t=>{t.stopPropagation(),i(t,e)},a=(r=!1)=>t.map(((t,n)=>{const{children:i,options:a}=t,s=dt(t,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return e(QA,{children:e(ZA,Object.assign({"data-testid":l},s,{onClick:o(t)},a,{children:i}))},n)}));if(t&&t.length>0){return e(n?GA:qA,{children:a(n)})}return e(r,{})},eB=T.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${pc.MaxWidth.lg} {
        display: none;
    }
`,tB=T.ul`
    display: none;
    list-style: none;

    ${pc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,rB=T.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${pc.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,nB=T(kc.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${sc.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?sc["text-selected-hover"]:sc["text-hover"]};
    }

    ${pc.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,iB=T.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,oB=T.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${sc["border-selected"]};

    :hover {
        ${e=>e.$selected&&sc["border-selected-hover"]};
    }

    ${pc.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,aB=T.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,sB=T(wc)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,lB=T(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${sc.icon};
    :hover {
        ${e=>e.$selected?sc["icon-selected-hover"]:sc["icon-hover"]};
    }
`,cB=({items:n,selectedId:i,mobile:s=!1,hideNavBranding:l,onItemClick:c})=>{const[d,h]=a(-1),[g,p]=a(!1),f=o(null);u((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{p(!1)},b=(e,t)=>r=>{r.stopPropagation(),h(t),p(!0),c(r,e)},v=(e,t)=>{e.stopPropagation(),c(e,t),p(!1)},y=()=>n.map(((r,n)=>{if("component"===r.itemType){const t=r&&r.children||null;return e("li",{children:t},n)}{const o=(e=>{if(e.id===i)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(r),{children:a,options:c}=r,u=dt(r,["children","options"]),h=o?s?"bold":"semibold":"regular",p=s?`link__mobile-${n+1}`:`link__${n+1}`,f=d>=0&&d===n&&g;return t(rB,Object.assign({$hiddenBranding:l},{children:[t(nB,Object.assign({"data-testid":p,weight:h,$selected:o},u,{onClick:b(r,n)},c,{children:[e(iB,{children:a}),o&&e(oB,{"data-testid":`${p}-indicator`,$selected:o}),s&&r.subMenu&&e(aB,{children:e(sB,Object.assign({"data-testid":`${p}-expand-collapse-button`,$selected:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand"},{children:e(lB,{$selected:o})}))})]})),f&&e(JA,{items:r.subMenu,mobile:s,onItemClick:v})]}),n)}}));return n&&n.length>0?s?e(tB,Object.assign({ref:f},{children:y()})):e(eB,Object.assign({ref:f,$alignLeft:l},{children:y()})):e(r,{})},dB={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},uB={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},hB={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},gB={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},pB=g(((n,i)=>{var{items:s,className:l,id:c,selectedId:d,compress:h=!1,fixed:g=!0,resources:p,hideNavElements:f=!1,hideNavBranding:m=!1,drawerDismissalExclusions:v=[],actionButtons:y,onItemClick:x,onActionButtonClick:$,onBrandClick:w,masthead:C=!0,layout:S="default"}=n,k=dt(n,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[O,D]=a(!1),[j,E]=a(!1),_="stretch"===S,T=o(),F=A(),M=(e=>{switch(e){case"bookingsg":return uB;case"mylegacy":return gB;case"ccube":return hB;default:return dB}})(null==F?void 0:F.resourceScheme),B=gc["lg-max"]({theme:F}),I=(null==p?void 0:p.primary)||M.primary,z=null==p?void 0:p.secondary;b(i,(()=>Object.assign(T.current,{dismissDrawer:()=>{R()}})),[O]),u((()=>(L(),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)})),[]);const R=()=>{D(!1),setTimeout((()=>{E(!1)}),550)},P=e=>O&&-1===v.indexOf(e),L=()=>{window.innerWidth<=B&&O&&R()},N=(e,t)=>{w&&(e.preventDefault(),w(t)),P("brand-click")&&R()},W=(e,t)=>{t.onClick?t.onClick(e):x&&(e.preventDefault(),x(t)),!(null==t?void 0:t.subMenu)&&P("item-click")&&R()},H=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):$&&(e.preventDefault(),$(t)),P("item-click")&&R()},Y=()=>{D(!0),E(!0)},V=()=>{P("close-button-click")&&R()},U=()=>{const t=s.mobile||s.desktop;return t&&t.length>0||y&&(()=>{const e=y.mobile||y.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?e(OA,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:Y,focusHighlight:!1},{children:e(DA,{})})):null};return t(CA,Object.assign({ref:T,$fixed:g,className:l,id:c||"navbar-wrapper","data-testid":k["data-testid"]||"navbar-wrapper"},{children:[C&&e(yA,{}),t(rF.Content,Object.assign({stretch:_},{children:[t(SA,Object.assign({$compress:h},{children:[!m&&t(jA,Object.assign({$compress:h,"data-id":"brand-container"},{children:[e(TA,{resources:I,onClick:N,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),z&&t(r,{children:[e(EA,{$compress:h}),e(TA,{resources:z,onClick:N,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!f&&t(kA,Object.assign({$hideNavBranding:m},{children:[e(cB,{items:s.desktop,onItemClick:W,selectedId:d,hideNavBranding:m}),e(KA,{actionButtons:y,onActionButtonClick:H}),U()]}))]})),!f&&e($f,Object.assign({show:j,enableOverlayClick:!0,onOverlayClick:V},{children:t(RA,Object.assign({show:O,resources:{primary:I,secondary:z},onClose:V,onBrandClick:N,actionButtons:y,hideNavBranding:m},{children:[e(cB,{items:s.mobile||s.desktop,onItemClick:W,selectedId:d,mobile:!0}),e(KA,{actionButtons:y,onActionButtonClick:H,mobile:!0})]}))}))]}))]}))})),fB=wA,mB=3.5,bB=F`
    color: ${sc["hyperlink-inverse"]};

    svg {
        color: ${sc["icon-primary-inverse"]};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${sc["hyperlink-inverse"]};
        svg {
            color: ${sc["icon-primary-inverse"]};
        }
    }
`,vB=T.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${cc["duration-800"]} ${cc["ease-default"]};
    background: ${sc["bg-inverse-subtle"]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,yB=T(rF.Content)`
    display: flex;
`,xB=T.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,$B=T.div`
    display: inline-block;
    width: 100%;

    ${lc["body-baseline-regular"]}
    color: ${sc["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${lc["body-baseline-semibold"]}
        color: ${sc["text-inverse"]};
    }

    a {
        ${lc["body-baseline-regular"]}
        ${bB}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return F`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,wB=T(kc.LinkBL)`
    position: relative;

    ${bB}
`,CB=T(wc)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,SB=T(Ie)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${sc["icon-inverse"]};
`,kB=T.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${sc["hyperlink-inverse"]};
    ${lc["body-md-semibold"]};

    cursor: pointer;
`,OB=T.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,DB=r=>{var{children:n,visible:i=!0,dismissible:o=!0,sticky:s=!0,onDismiss:l,id:c,forwardedRef:d,maxCollapsedHeight:h,onClick:g,actionButton:p}=r,f=dt(r,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const m=f["data-testid"],[b,v]=a(i),{height:y,ref:x}=cr();u((()=>{v(i)}),[i]);const $=e=>{e.stopPropagation(),v(!1),o&&l&&l()},w=e=>{p.onClick&&(e.stopPropagation(),p.onClick(e))};if(!b)return null;return t(vB,Object.assign({ref:d,$sticky:s,$clickable:!!g,onClick:g},f,{children:[t(yB,Object.assign({id:jB("container",c)},{children:[t(xB,{children:[e($B,Object.assign({"data-testid":jB("text-content",m),$maxCollapsedHeight:h&&y>h?h:void 0},{children:e("div",Object.assign({ref:x},{children:n}))})),p&&e(kB,Object.assign({id:jB("action-button",c),"data-testid":jB("action-button",m),type:"button"},p,{onClick:w},{children:p.children}))]}),o&&e(CB,Object.assign({onClick:$,id:jB("dismiss-button",c),"data-testid":jB("dismiss-button",m),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e(SB,{"aria-hidden":!0})}))]})),g&&e(OB,{"aria-label":"Clickable banner",type:"button"})]}))},jB=(e,t="wrapper")=>`${t}-${e}`,EB=i.forwardRef(((t,r)=>e(DB,Object.assign({},t,{forwardedRef:r}))));EB.displayName="NotificationBanner";const _B=Object.assign(EB,{Link:wB});var TB={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */TB.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,r){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,r)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function n(e,i,o){return n=r()?Reflect.construct:function(e,r,n){var i=[null];i.push.apply(i,r);var o=new(Function.bind.apply(e,i));return n&&t(o,n.prototype),o},n.apply(null,arguments)}function i(e){return o(e)||a(e)||s(e)||c()}function o(e){if(Array.isArray(e))return l(e)}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=Object.hasOwnProperty,u=Object.setPrototypeOf,h=Object.isFrozen,g=Object.getPrototypeOf,p=Object.getOwnPropertyDescriptor,f=Object.freeze,m=Object.seal,b=Object.create,v="undefined"!=typeof Reflect&&Reflect,y=v.apply,x=v.construct;y||(y=function(e,t,r){return e.apply(t,r)}),f||(f=function(e){return e}),m||(m=function(e){return e}),x||(x=function(e,t){return n(e,i(t))});var $=F(Array.prototype.forEach),w=F(Array.prototype.pop),C=F(Array.prototype.push),S=F(String.prototype.toLowerCase),k=F(String.prototype.toString),O=F(String.prototype.match),D=F(String.prototype.replace),j=F(String.prototype.indexOf),E=F(String.prototype.trim),_=F(RegExp.prototype.test),T=M(TypeError);function F(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return y(e,t,n)}}function M(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return x(e,r)}}function A(e,t,r){var n;r=null!==(n=r)&&void 0!==n?n:S,u&&u(e,null);for(var i=t.length;i--;){var o=t[i];if("string"==typeof o){var a=r(o);a!==o&&(h(t)||(t[i]=a),o=a)}e[o]=!0}return e}function B(e){var t,r=b(null);for(t in e)!0===y(d,e,[t])&&(r[t]=e[t]);return r}function I(e,t){for(;null!==e;){var r=p(e,t);if(r){if(r.get)return F(r.get);if("function"==typeof r.value)return F(r.value)}e=g(e)}function n(e){return console.warn("fallback value for",e),null}return n}var z=f(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=f(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),P=f(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),L=f(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),N=f(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),W=f(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=f(["#text"]),Y=f(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),V=f(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=f(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),X=f(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),K=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),q=m(/<%[\w\W]*|[\w\W]*%>/gm),G=m(/\${[\w\W]*}/gm),Z=m(/^data-[\-\w.\u00B7-\uFFFF]/),Q=m(/^aria-[\-\w]+$/),J=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=m(/^(?:\w+script|data):/i),te=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),re=m(/^html$/i),ne=m(/^[a-z][.\w]*(-[.\w]+)+$/i),ie=function(){return"undefined"==typeof window?null:window},oe=function(t,r){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var n=null,i="data-tt-policy-suffix";r.currentScript&&r.currentScript.hasAttribute(i)&&(n=r.currentScript.getAttribute(i));var o="dompurify"+(n?"#"+n:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),r=function(e){return ae(e)};if(r.version="2.5.5",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var n=t.document,o=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,l=t.Node,c=t.Element,d=t.NodeFilter,u=t.NamedNodeMap,h=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,g=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,b=c.prototype,v=I(b,"cloneNode"),y=I(b,"nextSibling"),x=I(b,"childNodes"),F=I(b,"parentNode");if("function"==typeof s){var M=o.createElement("template");M.content&&M.content.ownerDocument&&(o=M.content.ownerDocument)}var se=oe(m,n),le=se?se.createHTML(""):"",ce=o,de=ce.implementation,ue=ce.createNodeIterator,he=ce.createDocumentFragment,ge=ce.getElementsByTagName,pe=n.importNode,fe={};try{fe=B(o).documentMode?o.documentMode:{}}catch(e){}var me={};r.isSupported="function"==typeof F&&de&&void 0!==de.createHTMLDocument&&9!==fe;var be,ve,ye=K,xe=q,$e=G,we=Z,Ce=Q,Se=ee,ke=te,Oe=ne,De=J,je=null,Ee=A({},[].concat(i(z),i(R),i(P),i(N),i(H))),_e=null,Te=A({},[].concat(i(Y),i(V),i(U),i(X))),Fe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Me=null,Ae=null,Be=!0,Ie=!0,ze=!1,Re=!0,Pe=!1,Le=!0,Ne=!1,We=!1,He=!1,Ye=!1,Ve=!1,Ue=!1,Xe=!0,Ke=!1,qe="user-content-",Ge=!0,Ze=!1,Qe={},Je=null,et=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,rt=A({},["audio","video","img","source","image","track"]),nt=null,it=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ot="http://www.w3.org/1998/Math/MathML",at="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml",lt=st,ct=!1,dt=null,ut=A({},[ot,at,st],k),ht=["application/xhtml+xml","text/html"],gt="text/html",pt=null,ft=o.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},bt=function(t){pt&&pt===t||(t&&"object"===e(t)||(t={}),t=B(t),be=be=-1===ht.indexOf(t.PARSER_MEDIA_TYPE)?gt:t.PARSER_MEDIA_TYPE,ve="application/xhtml+xml"===be?k:S,je="ALLOWED_TAGS"in t?A({},t.ALLOWED_TAGS,ve):Ee,_e="ALLOWED_ATTR"in t?A({},t.ALLOWED_ATTR,ve):Te,dt="ALLOWED_NAMESPACES"in t?A({},t.ALLOWED_NAMESPACES,k):ut,nt="ADD_URI_SAFE_ATTR"in t?A(B(it),t.ADD_URI_SAFE_ATTR,ve):it,tt="ADD_DATA_URI_TAGS"in t?A(B(rt),t.ADD_DATA_URI_TAGS,ve):rt,Je="FORBID_CONTENTS"in t?A({},t.FORBID_CONTENTS,ve):et,Me="FORBID_TAGS"in t?A({},t.FORBID_TAGS,ve):{},Ae="FORBID_ATTR"in t?A({},t.FORBID_ATTR,ve):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Be=!1!==t.ALLOW_ARIA_ATTR,Ie=!1!==t.ALLOW_DATA_ATTR,ze=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Pe=t.SAFE_FOR_TEMPLATES||!1,Le=!1!==t.SAFE_FOR_XML,Ne=t.WHOLE_DOCUMENT||!1,Ye=t.RETURN_DOM||!1,Ve=t.RETURN_DOM_FRAGMENT||!1,Ue=t.RETURN_TRUSTED_TYPE||!1,He=t.FORCE_BODY||!1,Xe=!1!==t.SANITIZE_DOM,Ke=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,De=t.ALLOWED_URI_REGEXP||De,lt=t.NAMESPACE||st,Fe=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Fe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Fe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Fe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(Ie=!1),Ve&&(Ye=!0),Qe&&(je=A({},i(H)),_e=[],!0===Qe.html&&(A(je,z),A(_e,Y)),!0===Qe.svg&&(A(je,R),A(_e,V),A(_e,X)),!0===Qe.svgFilters&&(A(je,P),A(_e,V),A(_e,X)),!0===Qe.mathMl&&(A(je,N),A(_e,U),A(_e,X))),t.ADD_TAGS&&(je===Ee&&(je=B(je)),A(je,t.ADD_TAGS,ve)),t.ADD_ATTR&&(_e===Te&&(_e=B(_e)),A(_e,t.ADD_ATTR,ve)),t.ADD_URI_SAFE_ATTR&&A(nt,t.ADD_URI_SAFE_ATTR,ve),t.FORBID_CONTENTS&&(Je===et&&(Je=B(Je)),A(Je,t.FORBID_CONTENTS,ve)),Ge&&(je["#text"]=!0),Ne&&A(je,["html","head","body"]),je.table&&(A(je,["tbody"]),delete Me.tbody),f&&f(t),pt=t)},vt=A({},["mi","mo","mn","ms","mtext"]),yt=A({},["foreignobject","annotation-xml"]),xt=A({},["title","style","font","a","script"]),$t=A({},R);A($t,P),A($t,L);var wt=A({},N);A(wt,W);var Ct=function(e){var t=F(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var r=S(e.tagName),n=S(t.tagName);return!!dt[e.namespaceURI]&&(e.namespaceURI===at?t.namespaceURI===st?"svg"===r:t.namespaceURI===ot?"svg"===r&&("annotation-xml"===n||vt[n]):Boolean($t[r]):e.namespaceURI===ot?t.namespaceURI===st?"math"===r:t.namespaceURI===at?"math"===r&&yt[n]:Boolean(wt[r]):e.namespaceURI===st?!(t.namespaceURI===at&&!yt[n])&&!(t.namespaceURI===ot&&!vt[n])&&!wt[r]&&(xt[r]||!$t[r]):!("application/xhtml+xml"!==be||!dt[e.namespaceURI]))},St=function(e){C(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=le}catch(t){e.remove()}}},kt=function(e,t){try{C(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){C(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(Ye||Ve)try{St(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ot=function(e){var t,r;if(He)e="<remove></remove>"+e;else{var n=O(e,/^[\r\n\t ]+/);r=n&&n[0]}"application/xhtml+xml"===be&&lt===st&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=se?se.createHTML(e):e;if(lt===st)try{t=(new p).parseFromString(i,be)}catch(e){}if(!t||!t.documentElement){t=de.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?le:i}catch(e){}}var a=t.body||t.documentElement;return e&&r&&a.insertBefore(o.createTextNode(r),a.childNodes[0]||null),lt===st?ge.call(t,Ne?"html":"body")[0]:Ne?t.documentElement:a},Dt=function(e){return ue.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},jt=function(e){return e instanceof g&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof h)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Et=function(t){return"object"===e(l)?t instanceof l:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},_t=function(e,t,n){me[e]&&$(me[e],(function(e){e.call(r,t,n,pt)}))},Tt=function(e){var t;if(_t("beforeSanitizeElements",e,null),jt(e))return St(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return St(e),!0;var n=ve(e.nodeName);if(_t("uponSanitizeElement",e,{tagName:n,allowedTags:je}),e.hasChildNodes()&&!Et(e.firstElementChild)&&(!Et(e.content)||!Et(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return St(e),!0;if("select"===n&&_(/<template/i,e.innerHTML))return St(e),!0;if(7===e.nodeType)return St(e),!0;if(Le&&8===e.nodeType&&_(/<[/\w]/g,e.data))return St(e),!0;if(!je[n]||Me[n]){if(!Me[n]&&Mt(n)){if(Fe.tagNameCheck instanceof RegExp&&_(Fe.tagNameCheck,n))return!1;if(Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(n))return!1}if(Ge&&!Je[n]){var i=F(e)||e.parentNode,o=x(e)||e.childNodes;if(o&&i)for(var a=o.length-1;a>=0;--a){var s=v(o[a],!0);s.__removalCount=(e.__removalCount||0)+1,i.insertBefore(s,y(e))}}return St(e),!0}return e instanceof c&&!Ct(e)?(St(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!_(/<\/no(script|embed|frames)/i,e.innerHTML)?(Pe&&3===e.nodeType&&(t=e.textContent,t=D(t,ye," "),t=D(t,xe," "),t=D(t,$e," "),e.textContent!==t&&(C(r.removed,{element:e.cloneNode()}),e.textContent=t)),_t("afterSanitizeElements",e,null),!1):(St(e),!0)},Ft=function(e,t,r){if(Xe&&("id"===t||"name"===t)&&(r in o||r in ft))return!1;if(Ie&&!Ae[t]&&_(we,t));else if(Be&&_(Ce,t));else if(!_e[t]||Ae[t]){if(!(Mt(e)&&(Fe.tagNameCheck instanceof RegExp&&_(Fe.tagNameCheck,e)||Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(e))&&(Fe.attributeNameCheck instanceof RegExp&&_(Fe.attributeNameCheck,t)||Fe.attributeNameCheck instanceof Function&&Fe.attributeNameCheck(t))||"is"===t&&Fe.allowCustomizedBuiltInElements&&(Fe.tagNameCheck instanceof RegExp&&_(Fe.tagNameCheck,r)||Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(r))))return!1}else if(nt[t]);else if(_(De,D(r,ke,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==j(r,"data:")||!tt[e])if(ze&&!_(Se,D(r,ke,"")));else if(r)return!1;return!0},Mt=function(e){return"annotation-xml"!==e&&O(e,Oe)},At=function(t){var n,i,o,a;_t("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(a=s.length;a--;){var c=n=s[a],d=c.name,u=c.namespaceURI;if(i="value"===d?n.value:E(n.value),o=ve(d),l.attrName=o,l.attrValue=i,l.keepAttr=!0,l.forceKeepAttr=void 0,_t("uponSanitizeAttribute",t,l),i=l.attrValue,!l.forceKeepAttr&&(kt(d,t),l.keepAttr))if(Re||!_(/\/>/i,i))if(Le&&_(/((--!?|])>)|<\/(style|title)/i,i))kt(d,t);else{Pe&&(i=D(i,ye," "),i=D(i,xe," "),i=D(i,$e," "));var h=ve(t.nodeName);if(Ft(h,o,i)){if(!Ke||"id"!==o&&"name"!==o||(kt(d,t),i=qe+i),se&&"object"===e(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(h,o)){case"TrustedHTML":i=se.createHTML(i);break;case"TrustedScriptURL":i=se.createScriptURL(i)}try{u?t.setAttributeNS(u,d,i):t.setAttribute(d,i),jt(t)?St(t):w(r.removed)}catch(e){}}}else kt(d,t)}_t("afterSanitizeAttributes",t,null)}},Bt=function e(t){var r,n=Dt(t);for(_t("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)_t("uponSanitizeShadowNode",r,null),Tt(r)||(r.content instanceof a&&e(r.content),At(r));_t("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(i){var o,s,c,d,u,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!Et(i)){if("function"!=typeof i.toString)throw T("toString is not a function");if("string"!=typeof(i=i.toString()))throw T("dirty is not a string, aborting")}if(!r.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof i)return t.toStaticHTML(i);if(Et(i))return t.toStaticHTML(i.outerHTML)}return i}if(We||bt(h),r.removed=[],"string"==typeof i&&(Ze=!1),Ze){if(i.nodeName){var g=ve(i.nodeName);if(!je[g]||Me[g])throw T("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof l)1===(s=(o=Ot("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?o=s:o.appendChild(s);else{if(!Ye&&!Pe&&!Ne&&-1===i.indexOf("<"))return se&&Ue?se.createHTML(i):i;if(!(o=Ot(i)))return Ye?null:Ue?le:""}o&&He&&St(o.firstChild);for(var p=Dt(Ze?i:o);c=p.nextNode();)3===c.nodeType&&c===d||Tt(c)||(c.content instanceof a&&Bt(c.content),At(c),d=c);if(d=null,Ze)return i;if(Ye){if(Ve)for(u=he.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(_e.shadowroot||_e.shadowrootmod)&&(u=pe.call(n,u,!0)),u}var f=Ne?o.outerHTML:o.innerHTML;return Ne&&je["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&_(re,o.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+f),Pe&&(f=D(f,ye," "),f=D(f,xe," "),f=D(f,$e," ")),se&&Ue?se.createHTML(f):f},r.setConfig=function(e){bt(e),We=!0},r.clearConfig=function(){pt=null,We=!1},r.isValidAttribute=function(e,t,r){pt||bt({});var n=ve(e),i=ve(t);return Ft(n,i,r)},r.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],C(me[e],t))},r.removeHook=function(e){if(me[e])return w(me[e])},r.removeHooks=function(e){me[e]&&(me[e]=[])},r.removeAllHooks=function(){me={}},r}var se=ae();return se}();var FB=Uo(TB.exports);const MB=t=>i.forwardRef(((r,n)=>e(DB,Object.assign({forwardedRef:n},r,{children:t.length>0?t.map(((t,r)=>{if("text"===t.type){const n=t.otherAttributes,i=FB.sanitize(t.content);return e("p",Object.assign({},n,{dangerouslySetInnerHTML:{__html:i}}),r)}{const n=t.otherAttributes;return e(_B.Link,Object.assign({},n,{children:t.content}),r)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),AB=T.div`
    display: flex;
    flex-direction: column;
`,BB=T.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${uc["spacing-8"]};
`,IB=T(J$)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${pc.MaxWidth.xs} {
            padding: 0 ${uc["spacing-8"]};
        }
    }
`,zB=T(qc.Small)`
    margin: ${uc["spacing-32"]} 0;
`,RB=r=>{var{id:n,value:i=[],"data-testid":s,className:l,cooldownDuration:c,actionButtonProps:d,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:f,onCooldownEnd:m}=r,b=dt(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=d?d:{},{disabled:y,onClick:x,styleType:$="secondary"}=v,w=dt(v,["disabled","onClick","styleType"]),C=o([]),S=o(p),[k,O]=a(new Array(g).fill("")),[D,j]=a(c),[E,_]=a(new Date);u((()=>{var e;return null===(e=null==C?void 0:C.current[0])||void 0===e||e.focus(),document.addEventListener("paste",M),()=>document.removeEventListener("paste",M)}),[]),u((()=>{if(0!==c){f&&f();const e=I();return()=>e()}}),[E]),u((()=>{S.current=p}),[p]),u((()=>{i.length===g&&O(i)}),[i]);const T=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(A(n)){const t=[...k];t[e]=n.substring(n.length-1),null===(r=C.current[e+1])||void 0===r||r.focus(),O(t),p&&p(t)}},F=e=>t=>{var r;const{key:n,code:i}=t;if("Backspace"===n||"Backspace"===i){const t=[...k];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=C.current[e-1])||void 0===r||r.focus()),O(t),p&&p(t)}},M=e=>{const t=e.clipboardData.getData("text"),r=t.split("");t&&A(t,g)?(O(r),S.current&&S.current(r)):e.preventDefault()},A=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),B=()=>{const e=Date.now(),t=1e3*c;return e<E.valueOf()+t},I=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*c,n=Math.ceil((E.valueOf()+r-t)/1e3);j(n),n<=0&&(m&&m(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},z=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`;return t(AB,Object.assign({id:n,"data-testid":s,className:l},{children:[e(BB,{children:k.map(((t,r)=>e(IB,Object.assign({id:z(r,"otp-input",n),"data-testid":z(r,"otp-input",s),"aria-label":`Enter OTP character ${r+1}`,ref:e=>C.current[r]=e,type:"text",inputMode:"numeric",value:t,error:!!h,onChange:T(r),onKeyDown:F(r),autoComplete:"off"},b),r)))}),h&&e(v$,{children:h}),e(zB,Object.assign({styleType:$,type:"button"},w,{onClick:e=>{O(new Array(g).fill("")),B()||(_(new Date),j(c)),x&&x(e)},disabled:y||B()},{children:w.children?w.children:"Resend OTP"+(D?` in ${D} second${D>1?"s":""}`:"")}))]}))},PB=T.nav`
    display: flex;
`,LB=T.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${pc.MaxWidth.lg} {
        align-self: center;
    }
`,NB=T.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,WB=T(wc)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${hc.sm};
    color: ${sc["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${sc["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${sc["bg-hover"]};
    }
`,HB=T(wc)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${hc.sm};
    color: ${sc["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${sc["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${sc["bg-hover"]};
    }

    ${e=>"left"===e.$position?F`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:F`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${pc.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,YB=T.button`
    background: ${e=>e.$selected?sc["bg-primary"]:sc.bg};
    border: ${dc["width-010"]} ${dc.solid}
        ${e=>F`
                ${e.$selected?sc["bg-primary"]:sc.border}
            `};
    color: ${e=>e.$selected?sc["text-inverse"]:sc.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${hc.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?F`
                  ${lc["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${sc["bg-selected-strongest-hover"]};
                      background-color: ${sc["bg-selected-strongest-hover"]};
                      color: ${sc["text-inverse"]};
                  }
              `:F`
                  ${lc["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${sc["bg-hover"]};
                      background-color: ${sc["bg-hover"]};
                      color: ${sc["text-hover"]};
                      ${lc["body-baseline-semibold"]};
                  }
              `}
`;T(wc)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${sc["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${hc.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${sc["icon-hover"]};
        }
    }
`;const VB=T.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${hc.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,UB=T.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${sc.text};

    display: flex;
    justify-content: center;
`,XB=T(kc.BodyBL)`
    white-space: nowrap;
`,KB=T(kc.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,qB=T(J$)`
    ${lc["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${hc.sm};
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${lc["body-xs-regular"]}
        }
    }
`,GB=T.div`
    ${lc["body-xs-regular"]}
    background-color: ${sc["bg-hover"]};
    border: none;
    border-radius: ${hc.sm};
    color: ${sc["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,ZB=T.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,QB=i.forwardRef((({id:r,"data-testid":n,className:i,pageSize:o=10,totalItems:s,activePage:l,pageSizeOptions:c=JB,showFirstAndLastNav:d,showPageSizeChanger:h=!1,onPageChange:g,onPageSizeChange:p},f)=>{const m=A(),b=gc["sm-max"]({theme:m}),v=Sd.useMediaQuery({maxWidth:b}),y=c,[x,$]=a(!1),[w,C]=a(!1),[S,k]=a(""),[O,D]=a(y&&y.length>=1?y[0]:null),[j,E]=a(!v&&h&&O?O.value:o),_=Math.ceil(s/j),T=1===l,F=l===_,M=l>1?()=>W(1):void 0,B=l<_?()=>W(_):void 0,I=l>1?()=>W(l-1):void 0,z=l<_?()=>W(parseInt(l.toString())+1):void 0,R=e=>e?()=>q():()=>X(),P=e=>e?()=>G():()=>K();u((()=>{l&&L(l)}),[l]),u((()=>{var e;E(o),D(null!==(e=y.find((e=>e.value===o)))&&void 0!==e?e:null)}),[o]);const L=e=>{k(e.toString())},N=()=>{$(!1),C(!1)},W=e=>{g&&(g(e),L(e))},H=()=>{const e=Math.min(_,l+5);W(e),L(e),$(!0),C(!1)},Y=()=>{const e=Math.max(1,l-5);W(e),L(e),$(!1),C(!0)},V=e=>{const t=e.target.value;if(void 0===t||0===t.length)k("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));L(Math.max(1,Math.min(_,e)))}else k(t.replace(/[^0-9]/g,""))},U=e=>{e.preventDefault(),S&&g(parseInt(S))},X=()=>{$(!0)},K=()=>{$(!1)},q=()=>{C(!0)},G=()=>{C(!1)},Z=(r,n,i)=>t(VB,{children:[e(WB,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":r?"Previous 5 pages":"Next 5 pages",onMouseOver:R(r),onMouseOut:P(r),onFocus:R(r),onBlur:P(r),onClick:r?Y:H},{children:e(r&&w?nt:n&&x?it:st,{"aria-hidden":!0})})),r&&w&&e(GB,{children:"Previous 5 pages"}),n&&x&&e(GB,{children:"Next 5 pages"})]},i);return t(PB,Object.assign({className:i,ref:f,id:r||"pagination-wrapper","data-testid":n||"pagination","aria-label":"Pagination"},{children:[e(LB,{children:t(NB,{children:[d&&e(HB,Object.assign({onClick:M,disabled:T,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:e(ot,{"aria-hidden":!0})})),e(HB,Object.assign({onClick:I,disabled:T,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:e(be,{"aria-hidden":!0})})),v?t(UB,{children:[e("form",Object.assign({onSubmit:U},{children:e(qB,{value:S,onChange:V,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(n||"pagination")+"-input"})})),e(KB,{children:"/"}),e(XB,{children:_})]}):[...Array(_)].map(((t,r)=>{const n=r+1,i=_-5,o=l===n;if(_<=7)return e(YB,Object.assign({onClick:()=>W(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:N,onFocus:N},{children:n}),n);const a=l+1>5&&2===n,s=l-1<=i&&n===_-1-1;return a||s?Z(a,s,n):n<=5&&l+1<=5||n<=1||n===l||n<=l+1&&n>=l-1-1||n>i&&l-1>i||n>_-1?e(YB,Object.assign({onClick:()=>W(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:N,onFocus:N},{children:n}),n):null})),e(HB,Object.assign({onClick:z,disabled:F,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:e(me,{"aria-hidden":!0})})),d&&e(HB,Object.assign({onClick:B,disabled:F,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:e(at,{"aria-hidden":!0})}))]})}),h&&!v&&e(ZB,{children:e(Gj,{options:y,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:O,onSelectOption:e=>{D(e);const t=e.value,r=Math.ceil(s/t);E(t);p&&p(l>=r?r:l,t)}})})]}))})),JB=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],eI=T.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${lc["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n;if("solid"===e.$type)switch(n=sc["text-inverse"],e.$color){case"grey":t=sc["bg-inverse-subtler"];break;case"green":t=sc["bg-success-strong"];break;case"yellow":t=sc["bg-warning-strong"];break;case"red":t=sc["bg-error-strong"];break;case"blue":t=sc["bg-info-strong"];break;default:t=sc["bg-inverse"]}else switch(e.$color){case"grey":t=sc["bg-stronger"],r=sc["border-strong"],n=sc["text-subtler"];break;case"green":t=sc["bg-success"],r=sc["border-success"],n=sc["text-success"];break;case"yellow":t=sc["bg-warning"],r=sc["border-warning"],n=sc["text-warning"];break;case"red":t=sc["bg-error"],r=sc["border-error"],n=sc["text-error"];break;case"blue":t=sc["bg-info"],r=sc["border-info"],n=sc["text-info"];break;default:t=sc.bg,r=sc.border,n=sc.text}return F`
            background: ${t};
            border: ${dc["width-010"]} ${dc.solid} ${r};
            color: ${n};
        `}}
`,tI=T.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,rI=r=>{var{type:n,colorType:i="black",children:o,icon:a}=r,s=dt(r,["type","colorType","children","icon"]);return t(eI,Object.assign({$type:n,$color:i},s,{children:[a,e(tI,{children:o})]}))},nI=(e,t,r)=>t?Cl(r,t)||Cl(e,t):r||e,iI=(e,t)=>{const r=t||e.defaultValue;return Cl(e.collections,r)};var oI;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(oI||(oI={}));const aI={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},sI=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=iI(aI,null==n?void 0:n[oI.colorScheme]);return n.options&&n.options.color?nI(i,e,n.options.color):nI(i,e)},lI={Brand:{1:sI("Brand.1"),2:sI("Brand.2"),3:sI("Brand.3"),4:sI("Brand.4"),5:sI("Brand.5"),6:sI("Brand.6")},Primary:sI("Primary"),PrimaryDark:sI("PrimaryDark"),Secondary:sI("Secondary"),Accent:{Light:{1:sI("Accent.Light.1"),2:sI("Accent.Light.2"),3:sI("Accent.Light.3"),4:sI("Accent.Light.4"),5:sI("Accent.Light.5"),6:sI("Accent.Light.6")},Dark:{1:sI("Accent.Dark.1"),2:sI("Accent.Dark.2"),3:sI("Accent.Dark.3")}},Neutral:{1:sI("Neutral.1"),2:sI("Neutral.2"),3:sI("Neutral.3"),4:sI("Neutral.4"),5:sI("Neutral.5"),6:sI("Neutral.6"),7:sI("Neutral.7"),8:sI("Neutral.8")},Validation:{Green:{Text:sI("Validation.Green.Text"),Icon:sI("Validation.Green.Icon"),Border:sI("Validation.Green.Border"),Background:sI("Validation.Green.Background")},Orange:{Text:sI("Validation.Orange.Text"),Icon:sI("Validation.Orange.Icon"),Border:sI("Validation.Orange.Border"),Background:sI("Validation.Orange.Background"),Badge:sI("Validation.Orange.Badge")},Red:{Text:sI("Validation.Red.Text"),Icon:sI("Validation.Red.Icon"),Border:sI("Validation.Red.Border"),Background:sI("Validation.Red.Background")},Blue:{Text:sI("Validation.Blue.Text"),Icon:sI("Validation.Blue.Icon"),Border:sI("Validation.Blue.Border"),Background:sI("Validation.Blue.Background")}},Shadow:{Accent:sI("Shadow.Accent"),Red:sI("Shadow.Red"),Elevation:sI("Shadow.Elevation")}},cI={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},dI={D1:{fontFamily:cI.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:cI.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:cI.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:cI.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:cI.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:cI.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:cI.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:cI.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:cI.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:cI.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:cI.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:cI.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:cI.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:cI.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},uI={D1:{fontFamily:cI.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:cI.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:cI.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:cI.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:cI.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:cI.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:cI.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:cI.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:cI.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:cI.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:cI.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:cI.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:cI.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:cI.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},hI={collections:{base:dI,oneservice:{D1:{fontFamily:cI.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:cI.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:cI.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:cI.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:cI.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:cI.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:cI.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:cI.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:cI.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:cI.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:cI.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:cI.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:cI.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:cI.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:uI},defaultValue:"base"},gI=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=iI(hI,null==n?void 0:n[oI.textStyleScheme]);return n.options&&n.options.textStyle?nI(i,e,n.options.textStyle):nI(i,e)},pI={D1:{fontFamily:gI("D1.fontFamily"),fontSize:gI("D1.fontSize"),fontWeight:gI("D1.fontWeight"),lineHeight:gI("D1.lineHeight"),letterSpacing:gI("D1.letterSpacing")},D2:{fontFamily:gI("D2.fontFamily"),fontSize:gI("D2.fontSize"),fontWeight:gI("D2.fontWeight"),lineHeight:gI("D2.lineHeight"),letterSpacing:gI("D2.letterSpacing")},D3:{fontFamily:gI("D3.fontFamily"),fontSize:gI("D3.fontSize"),fontWeight:gI("D3.fontWeight"),lineHeight:gI("D3.lineHeight"),letterSpacing:gI("D3.letterSpacing")},D4:{fontFamily:gI("D4.fontFamily"),fontSize:gI("D4.fontSize"),fontWeight:gI("D4.fontWeight"),lineHeight:gI("D4.lineHeight"),letterSpacing:gI("D4.letterSpacing")},DBody:{fontFamily:gI("DBody.fontFamily"),fontSize:gI("DBody.fontSize"),fontWeight:gI("DBody.fontWeight"),lineHeight:gI("DBody.lineHeight"),letterSpacing:gI("DBody.letterSpacing")},H1:{fontFamily:gI("H1.fontFamily"),fontSize:gI("H1.fontSize"),fontWeight:gI("H1.fontWeight"),lineHeight:gI("H1.lineHeight"),letterSpacing:gI("H1.letterSpacing")},H2:{fontFamily:gI("H2.fontFamily"),fontSize:gI("H2.fontSize"),fontWeight:gI("H2.fontWeight"),lineHeight:gI("H2.lineHeight"),letterSpacing:gI("H2.letterSpacing")},H3:{fontFamily:gI("H3.fontFamily"),fontSize:gI("H3.fontSize"),fontWeight:gI("H3.fontWeight"),lineHeight:gI("H3.lineHeight"),letterSpacing:gI("H3.letterSpacing")},H4:{fontFamily:gI("H4.fontFamily"),fontSize:gI("H4.fontSize"),fontWeight:gI("H4.fontWeight"),lineHeight:gI("H4.lineHeight"),letterSpacing:gI("H4.letterSpacing")},H5:{fontFamily:gI("H5.fontFamily"),fontSize:gI("H5.fontSize"),fontWeight:gI("H5.fontWeight"),lineHeight:gI("H5.lineHeight"),letterSpacing:gI("H5.letterSpacing")},H6:{fontFamily:gI("H6.fontFamily"),fontSize:gI("H6.fontSize"),fontWeight:gI("H6.fontWeight"),lineHeight:gI("H6.lineHeight"),letterSpacing:gI("H6.letterSpacing")},Body:{fontFamily:gI("Body.fontFamily"),fontSize:gI("Body.fontSize"),fontWeight:gI("Body.fontWeight"),lineHeight:gI("Body.lineHeight"),letterSpacing:gI("Body.letterSpacing")},BodySmall:{fontFamily:gI("BodySmall.fontFamily"),fontSize:gI("BodySmall.fontSize"),fontWeight:gI("BodySmall.fontWeight"),lineHeight:gI("BodySmall.lineHeight"),letterSpacing:gI("BodySmall.letterSpacing")},XSmall:{fontFamily:gI("XSmall.fontFamily"),fontSize:gI("XSmall.fontSize"),fontWeight:gI("XSmall.fontWeight"),lineHeight:gI("XSmall.lineHeight"),letterSpacing:gI("XSmall.letterSpacing")}},fI=[cI.OpenSans,cI.PlusJakartaSans],mI=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},bI=(e,t)=>r=>{var n;const i=pI[e].fontFamily(r),o=pI[e].fontWeight(r),a=fI.find((e=>Object.values(e).includes(i)));return a?F`
                font-family: ${mI(a,t)||mI(a,o)||i};
                font-weight: normal !important;
            `:F`
            font-family: ${i};
            font-weight: ${null!==(n=vI(t)||o)&&void 0!==n?n:"normal"};
        `},vI=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},yI=e=>{if(e>0)return F`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},xI={getFontFamily:bI,getTextStyle:(e,t,r=!1)=>n=>{const i=pI[e],o=i.fontSize(n);return F`
            ${bI(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${F`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,t=!1,r=void 0)=>t?F`
            display: block;
            ${yI(r)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${yI(r)}
        `};var $I;!function(e){e.D1=T.h1`
        ${e=>F`
                ${xI.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=T.h1`
        ${e=>F`
                ${xI.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=T.h1`
        ${e=>F`
                ${xI.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=T.h1`
        ${e=>F`
                ${xI.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=T.h1`
        ${e=>F`
                ${xI.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=T.h1`
        ${e=>F`
                ${xI.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=T.h2`
        ${e=>F`
                ${xI.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=T.h3`
        ${e=>F`
                ${xI.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=T.h4`
        ${e=>F`
                ${xI.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=T.h5`
        ${e=>F`
                ${xI.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=T.h6`
        ${e=>F`
                ${xI.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=T.p`
        ${e=>F`
                ${xI.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=T.p`
        ${e=>F`
                ${xI.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=T.span`
        ${e=>F`
                ${xI.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${lI.Neutral[1]};
                ${xI.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>SI(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>SI(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}($I||($I={}));const wI=T.a`
    ${e=>F`
            ${xI.getTextStyle(e.textStyle,e.weight)}
            color: ${lI.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${lI.Secondary};

                svg {
                    color: ${lI.Secondary};
                }
            }
        `}
`,CI=T(B)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,SI=r=>{var{external:n=!1,children:i}=r,o=dt(r,["external","children"]);return t(wI,Object.assign({},o,{children:[i,n&&e(CI,{})]}))},kI={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},OI=T.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?F`
            visibility: visible;
            opacity: 1;
            transition: ${kI.Base};
            z-index: 50;
        `:F`
            visibility: hidden;
            opacity: 0;
            transition: ${kI.Base};
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

	${df.MaxWidth.mobileL} {
        display: none;
    }
`,DI=T(If)`
    padding: 3.5rem 1.25rem 2.5rem;
`,jI=T.div`
    position: relative;
    width: fit-content;
`,EI=T.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,_I=T.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,TI=n=>{var{children:i,visible:s,onMobileClose:l}=n,c=dt(n,["children","visible","onMobileClose"]);const d=c["data-testid"]||"popover",[h,g]=a("none"),p=o(null),f=Sd.useMediaQuery({maxWidth:lf.mobileL}),m=o(h);u((()=>(y(),window.addEventListener("resize",Jh(b,300)),()=>{window.removeEventListener("resize",Jh(b,300))})),[]);const b=()=>{y()},v=()=>{l&&l()},y=()=>{const e=x();var t;e&&(t=e,m.current=t,g(t))},x=()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},$=()=>"string"==typeof i?e($I.BodySmall,{children:i}):i;return t(r,{children:[e(OI,Object.assign({ref:p,"data-testid":d,$visible:s,$offset:h},c,{children:e(kh,{children:$()})})),f&&e(Mf,Object.assign({show:s,onOverlayClick:v},{children:e(DI,Object.assign({onClose:v},{children:e(_I,{children:$()})}))}))]})},FI=(r,n)=>i=>{const{onPopoverAppear:s,onPopoverDismiss:l}=i,c=dt(i,["onPopoverAppear","onPopoverDismiss"]),d=n.trigger||"click",h=c,[g,p]=a(!1),f=o(),m=Sd.useMediaQuery({maxWidth:lf.mobileL});u((()=>{if(!m)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[g]);const b=e=>{f&&!f.current.contains(e.target)&&(g&&p(!1),l&&l())};return t(jI,Object.assign({id:"popover-hoc-wrapper",ref:f},{children:[e(EI,Object.assign({id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||m)&&(p(!g),!g&&s&&s(),g&&l&&l())},onMouseEnter:()=>{"hover"!==d||m||p(!0)},onMouseLeave:()=>{"hover"===d&&g&&!m&&p(!1)},"aria-label":"popover-button"},{children:e(r,Object.assign({},h))})),e(TI,Object.assign({visible:g,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{p(!1)}},{children:n.content}))]}))},MI=T.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${pc.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${pc.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,AI=T.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,BI=T.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?sc["bg-primary-subtle"]:sc["bg-disabled"])(e)};\n        `}};
`,II=T(kc.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?sc["text-primary"]:sc["text-disabled"])(e)};`}};
`,zI=T(kc.BodyMD)`
    overflow-wrap: anywhere;
    color: ${sc.text};
`,RI=T.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var PI=function(e){return function(t){return null==e?void 0:e[t]}},LI=PI({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),NI=dl,WI=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,HI=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var YI=function(e){return(e=NI(e))&&e.replace(WI,LI).replace(HI,"")},VI=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var UI=function(e){return e.match(VI)||[]},XI=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var KI=function(e){return XI.test(e)},qI="\\ud800-\\udfff",GI="\\u2700-\\u27bf",ZI="a-z\\xdf-\\xf6\\xf8-\\xff",QI="A-Z\\xc0-\\xd6\\xd8-\\xde",JI="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ez="["+JI+"]",tz="\\d+",rz="["+GI+"]",nz="["+ZI+"]",iz="[^"+qI+JI+tz+GI+ZI+QI+"]",oz="(?:\\ud83c[\\udde6-\\uddff]){2}",az="[\\ud800-\\udbff][\\udc00-\\udfff]",sz="["+QI+"]",lz="(?:"+nz+"|"+iz+")",cz="(?:"+sz+"|"+iz+")",dz="(?:['’](?:d|ll|m|re|s|t|ve))?",uz="(?:['’](?:D|LL|M|RE|S|T|VE))?",hz="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",gz="[\\ufe0e\\ufe0f]?",pz=gz+hz+("(?:\\u200d(?:"+["[^"+qI+"]",oz,az].join("|")+")"+gz+hz+")*"),fz="(?:"+[rz,oz,az].join("|")+")"+pz,mz=RegExp([sz+"?"+nz+"+"+dz+"(?="+[ez,sz,"$"].join("|")+")",cz+"+"+uz+"(?="+[ez,sz+lz,"$"].join("|")+")",sz+"?"+lz+"+"+dz,sz+"+"+uz,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tz,fz].join("|"),"g");var bz=UI,vz=KI,yz=dl,xz=function(e){return e.match(mz)||[]};var $z=Dj,wz=YI,Cz=function(e,t,r){return e=yz(e),void 0===(t=r?void 0:t)?vz(e)?xz(e):bz(e):e.match(t)||[]},Sz=RegExp("['’]","g");var kz=Uo(function(e){return function(t){return $z(Cz(wz(t).replace(Sz,"")),e,"")}}((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})));const Oz=r=>{var{steps:n,currentIndex:i,displayExtractor:o,fadeColor:a,fadePosition:s}=r,l=dt(r,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=A(),d=gc["lg-max"]({theme:c}),u=Sd.useMediaQuery({maxWidth:d}),h=e=>o?o(e):e.toString(),g=(e,t)=>kz(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!n.length)return null;return t(MI,Object.assign({},l,{children:[e(AI,{children:n.map(((t,r)=>{const n=r<=i;return e(RI,Object.assign({id:g(r,i)},{children:e(BI,{highlighted:n})}),r)}))}),e(AI,{children:u?t(RI,Object.assign({id:g(i,i)},{children:[t(zI,Object.assign({weight:"semibold",id:`${g(i,i)}-counter`},{children:["Step ",i+1," of ",n.length]})),e(zI,Object.assign({weight:"regular",id:`${g(i,i)}-title`},{children:h(n[i])}))]}),i):n.map(((t,r)=>{const n=r<=i,o=r===i,a=o?"bold":"regular";return e(RI,Object.assign({id:`${g(r,i)}-title`},{children:e(II,Object.assign({highlighted:n,weight:a,"aria-current":o},{children:h(t)}))}),r)}))})]}))},Dz=T.div`
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
`,jz=T(ae)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?sc["icon-disabled-subtle"](e):sc["icon-subtle"](e)};
    transition: ${cc["duration-150"]} ${cc["ease-default"]};
`,Ez=T(se)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?sc["icon-selected-disabled"](e):sc["icon-selected"](e)};

    transition: ${cc["duration-150"]} ${cc["ease-default"]};
`,_z=T.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${jz}, &:hover + ${Ez} {
        color: ${e=>!e.disabled&&sc["icon-hover"](e)};
    }
`,Tz=r=>{var{className:n,checked:i,disabled:o,displaySize:a="default",onChange:s}=r,l=dt(r,["className","checked","disabled","displaySize","onChange"]);return t(Dz,Object.assign({$selected:i,$disabled:o,className:n,$displaySize:a,"data-testid":"radio-button"},{children:[e(_z,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{o||null==s||s(e)},checked:i,disabled:o},l)),i?e(Ez,{"data-testid":"radio-checked",$disabled:o}):e(jz,{"data-testid":"radio-unchecked",$disabled:o})]}))},Fz=T.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,Mz=T.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};
    background-color: ${sc["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,Az=T(Mz)`
    height: 100vh;
    left: 0;
    top: 0;
    ${pc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,Bz=T(Mz)`
    display: none;
    visibility: hidden;
    ${pc.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,Iz=T(Yo.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${sc["bg-primary-subtlest"]};
    border-top-right-radius: ${hc.md};
    border-bottom-right-radius: ${hc.md};
    border: ${dc["width-010"]} ${dc.solid} ${sc.border};

    ${e=>e.$showDrawer?F`
                  box-shadow: 0 0 4px
                      rgb(from ${sc.Primitive["neutral-20"]} r g b / 25%);
              `:F`
                  border: 0;
                  padding: 0;
              `};
`,zz=T.li`
    width: 100%;
`,Rz=T.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${hc.md};
    color: ${sc["icon-primary"]};
    transition: ${cc["duration-250"]} ${cc["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,Pz=T(kc.BodyXS)`
    ${Xg(2)}
    margin-top: 0.25rem;
    transition: ${cc["duration-250"]} ${cc["ease-default"]};
`,Lz=T(Ug)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${Rz} {
            background-color: ${sc["bg-hover"]};
        }

        ${Pz} {
            ${lc["body-xs-semibold"]}
            color: ${sc["text-hover"]};
        }
    }

    ${e=>e.$highlight&&F`
            ${Rz} {
                background-color: ${sc["bg-hover"]};
            }

            ${Pz} {
                ${lc["body-xs-semibold"]}
                color: ${sc["text-selected"]};
            }
        `}
`,Nz=w({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),Wz=T.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,Hz=T.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${sc.border};
`,Yz=T(Yo.li)``,Vz=T(Ug)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${hc.md};

    ${lc["body-md-semibold"]}
    color: ${sc.text};

    ${e=>e.$noChildren?F`
                  :hover,
                  :focus {
                      background: ${sc["bg-hover"]};
                      color: ${sc["text-hover"]};
                  }
              `:F`
                  :hover,
                  :focus {
                      background: ${sc["bg-hover-strong"]};
                  }
              `}
`,Uz=T(Yo.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,Xz=T(_)`
    flex-shrink: 0;
    color: ${sc.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${cc["duration-150"]} ${cc["ease-default"]};
`,Kz=T.span`
    ${Xg(2)}
    text-align: left;
`,qz=T(Yo.ul)``,Gz=T.li``,Zz=T(Ug)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${hc.md};

    ${lc["body-md-regular"]}
    color: ${sc.text};
    ${Xg(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${sc["bg-hover"]};
        color: ${sc["text-hover"]};
    }
`,Qz=Object.assign((r=>{var{fixed:n=!0,children:i}=r,s=dt(r,["fixed","children"]);const l=o(null),[c,d]=a(void 0),[h,g]=a(void 0),[p,f]=a(void 0),[b,v]=a(!1),y=m((()=>({currentItem:c,selectedItem:h,previouslySelectedItemId:p,setCurrentItem:d,setSelectedItem:g,setPreviouslySelectedItemId:f})),[c,h,p,d,g,f]),x=Oo({width:b?240:0,borderRightWidth:b?1:0,borderTopWidth:b?1:0,borderBottomWidth:b?1:0,borderLeftWidth:0});return cu("click",(e=>{l.current&&!l.current.contains(e.target)&&(g({itemId:p||(h?h.itemId:void 0),content:void 0}),f(void 0),d(void 0))}),"window",!0),u((()=>{v(h&&!!h.content||c&&!!c.content)}),[c,h]),e(Nz.Provider,Object.assign({value:y},{children:t(Fz,Object.assign({$fixed:n},s,{ref:l,onMouseLeave:()=>{d(void 0)}},{children:[e(Az,{children:i}),e(Iz,Object.assign({style:x,$showDrawer:b,"data-testid":"sidenav-drawer"},{children:c&&c.content||h&&h.content})),e(Bz,{})]}))}))}),{Group:r=>{var{separator:n,children:i}=r,o=dt(r,["separator","children"]);return t(Wz,Object.assign({},o,{children:[i,n&&e(Hz,{"data-testid":"divider"})]}))},Item:r=>{var{children:n,icon:i,title:o,onClick:a}=r,s=dt(r,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:h,setCurrentItem:g,setPreviouslySelectedItemId:p,setSelectedItem:m}=f(Nz);u((()=>{s.selected&&m({itemId:l,content:void 0})}),[s.selected]);return e(zz,{children:t(Lz,Object.assign({type:"button",onClick:()=>{p((()=>{if(n&&h)return d||h.itemId})()),g({itemId:l,content:n}),m({itemId:l,content:n}),a&&!n&&a(l)},onMouseEnter:()=>{g({itemId:l,content:n})}},s,{$highlight:h&&h.itemId===l||c&&c.itemId===l},{children:[e(Rz,{children:i}),e(Pz,{children:o})]}))})},DrawerItem:r=>{var{id:n,title:i,onClick:o,children:s}=r,l=dt(r,["id","title","onClick","children"]);const[c,d]=a(!0),[u,h]=a(!1),{currentItem:g,setSelectedItem:p,setPreviouslySelectedItemId:m,setCurrentItem:b}=f(Nz),v=Oo({from:{opacity:0},to:{opacity:1}}),y=cr(),x=y.ref,$=Oo({height:s&&c?y.height:0});return t(Yz,Object.assign({onMouseEnter:()=>{h(!0)},onMouseLeave:()=>{h(!1)}},l,{style:v},{children:[t(Vz,Object.assign({type:"button",onClick:()=>{s?d(!c):(p({itemId:g.itemId,content:void 0}),b(void 0),m(void 0),o&&o(n))},$highlight:u&&c,$noChildren:!s},{children:[e(Kz,{children:i}),s&&e(Xz,{"aria-hidden":!0,$expanded:c})]})),e(Uz,Object.assign({style:$},{children:e(qz,Object.assign({ref:x},{children:s}))}))]}))},DrawerSubitem:t=>{var{id:r,title:n,onClick:i}=t,o=dt(t,["id","title","onClick"]);const{currentItem:a,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=f(Nz);return e(Gz,Object.assign({},o,{children:e(Zz,Object.assign({type:"button",onClick:()=>{i&&i(r),s({itemId:a.itemId,content:void 0}),l(void 0),c(void 0)}},{children:n}))}))}}),Jz=M`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,eR=T.div`
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
    background: ${sc.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${hc.md};
    ${e=>{if(e.$isAnimated)return F`
                animation: ${Jz} 0.3s;
            `}}
`,tR=T.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,rR=T(wc)`
    padding: 0;
`,nR=T(Ie)`
    color: ${sc.icon};
    height: 1.25rem;
    width: 1.25rem;
`,iR=T.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,oR=T.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${pc.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,aR=T.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,sR=T.div`
    max-width: 30%;
`,lR=T(qc.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${lc["body-xs-semibold"]}
    }
`,cR=T(kc.BodySM)`
    font-weight: ${lc.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${pc.MaxWidth.xs} {
        ${lc["body-xs-bold"]}
    }
`,dR=T(kc.BodyXS)`
    overflow-wrap: anywhere;
`,uR=T.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,hR=F`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,gR=T(Re)`
    ${hR}
`,pR=T(lt)`
    ${hR}
`,fR=T(ze)`
    ${hR}
`,mR="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",bR="smart-app-banner";const vR=i.forwardRef((function(n,i){const{className:o,show:a,href:s,content:l,offset:c=0,icon:d=mR,animated:u=!1,onDismiss:h,onClick:g}=n,{title:p,message:f,buttonLabel:m,buttonAriaLabel:b,numberOfStars:v}=l,y=e=>{e.stopPropagation(),window.open(s,"_blank","noreferrer"),null==g||g()};return e(r,{children:a&&t(eR,Object.assign({ref:i,$isAnimated:u,$offset:c,className:o},{children:[e(tR,Object.assign({onClick:h,id:`${bR}-dismiss`,"data-testid":`${bR}-dismiss-container`},{children:e(rR,Object.assign({"aria-label":"Dismiss"},{children:e(nR,{})}))})),t(iR,Object.assign({onClick:y,id:`${bR}-proceed`,"data-testid":`${bR}-proceed-container`},{children:[e(aR,{src:d,alt:"lifesg-app-icon"}),t(oR,{children:[e(cR,{children:p}),e(dR,{children:f}),(()=>{if(isNaN(v)||v<0)return;const t=[],r=v-Math.floor(v)>=.4;for(let r=0;r<Math.floor(v);r++)t.push(e(gR,{},`star${r}`));if(r&&t.push(e(pR,{},"halfstar")),t.length<5){const r=5-t.length;for(let n=0;n<r;n++)t.push(e(fR,{},`emptystar${n}`))}return e(uR,{children:t.slice(0,5)})})()]}),e(sR,{children:e(lR,Object.assign({type:"button",onClick:y,"aria-label":b},{children:m}))})]}))]}))})})),yR=i.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),xR=T.div`
    position: relative;
    width: 100%;
`,$R=T.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${r}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${r}\n                );\n            `,F`
            ${pc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,wR=T.div`
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
`,CR=T(wc)`
    display: none;

    ${pc.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?F`
                    justify-content: left;
                    padding-left: ${uc["spacing-8"]};
                `:F`
                    justify-content: right;
                    padding-right: ${uc["spacing-8"]};
                `}

        svg {
            color: ${sc.icon};
        }
    }
`,SR=g(((n,i)=>{var{children:s,fadeColor:l,fadePosition:c="both",showIndicator:d=!1,onResize:h}=n,g=dt(n,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[p,f]=a("left"===c||"both"===c),[m,v]=a("right"===c||"both"===c),y=o(null),x=o(null),$=ig(w,50);function w(){const e=y.current,t=x.current;e&&t&&t.scrollWidth>e.offsetWidth?(v(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),f(t.scrollLeft>=1)):(v(!1),f(!1))}function C(){w(),h&&h({content:x.current,wrapper:y.current})}cr({onResize:C,targetRef:y,refreshMode:"debounce",refreshRate:50}),b(i,(()=>({resize(){C()}}))),u((()=>{const e=x.current;return w(),e&&e.addEventListener("scroll",$),()=>{e&&e.removeEventListener("scroll",$)}}),[]);return t(xR,Object.assign({ref:y},g,{children:[e(wR,Object.assign({ref:x},{children:s})),(()=>{let n;return n=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(r,{children:[p&&e($R,Object.assign({$backgroundColor:n.left,$position:"left",$showIndicator:d,"data-id":"left-fade"},{children:d&&e(CR,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e(be,{})}))})),m&&e($R,Object.assign({$backgroundColor:n.right,$position:"right",$showIndicator:d,"data-id":"right-fade"},{children:d&&e(CR,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e(me,{})}))}))]})})()]}))})),kR=T.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;
`,OR=T.li`
    display: flex;
    flex-shrink: 0;
    border-bottom: ${dc["width-040"]} ${dc.solid} ${sc.border};

    ${e=>{if(e.$active)return F`
                border-color: ${sc["border-primary"]};
            `}}

    ${pc.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,DR=T.button`
    position: relative;
    padding: ${uc["spacing-16"]} ${uc["spacing-16"]}
        ${uc["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,jR=T(kc.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${sc["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return F`
                opacity: 0;
            `}}
`,ER=T(kc.BodyBL)`
    color: ${sc["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return F`
                opacity: 1;
            `}}
`,_R=T(SR)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${uc["spacing-4"]};
    }
`,TR=({controlledMode:r,"data-testid":n,onTabClick:i})=>{const{setCurrentActiveIndex:a,currentActiveIndex:s,tabLinks:l}=f(yR),c=A(),d=gc["md-max"]({theme:c}),u=Sd.useMediaQuery({maxWidth:d}),h=gc["lg-max"]({theme:c}),g=o(null),p=e=>t=>{t.preventDefault(),r||a(e),i&&i(l[e].title,e)},m=e=>u&&e.length>20?`${e.substring(0,20)}...`:e;return e(_R,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=h&&g&&(e.scrollLeft=g.current.getBoundingClientRect().left)},"data-testid":n},{children:e(kR,Object.assign({role:"tablist"},{children:l.map(((r,i)=>{const o=s===i;return e(OR,Object.assign({role:"none",$active:o,ref:o?g:null},{children:t(DR,Object.assign({role:"tab",type:"button","aria-selected":o,onClick:p(i),"data-testid":`${n}-link-${i}`},{children:[e(jR,Object.assign({$active:o,weight:"regular"},{children:m(r.title)})),e(ER,Object.assign({$active:o,weight:"semibold","aria-hidden":"true"},{children:m(r.title)}))]}))}),i)}))}))}))},FR=T.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,MR=Object.assign((r=>{var{children:n,currentActive:i,initialActive:o=0,onTabClick:s,"data-testid":l}=r,d=dt(r,["children","currentActive","initialActive","onTabClick","data-testid"]);const[h,g]=a(i||o),[p,f]=a([]);u((()=>{const e=S.toArray(n).filter(Boolean);m(e)}),[n]),u((()=>{"number"==typeof i&&g(i)}),[i]);const m=e=>{const t=e.map((e=>({title:e.props.title})));f(t)};return e(FR,Object.assign({"data-testid":l},d,{children:t(yR.Provider,Object.assign({value:{tabLinks:p,currentActiveIndex:h,setCurrentActiveIndex:g}},{children:[e(TR,{controlledMode:"number"==typeof i,onTabClick:s,"data-testid":`${l}-tabs`}),S.toArray(n).filter(Boolean).map(((e,t)=>c(e,{key:t,index:t})))]}))}))}),{Item:t=>{var{index:r,children:n}=t,i=dt(t,["index","children"]);const{currentActiveIndex:o}=f(yR);return o===r?e("div",Object.assign({role:"tabpanel"},i,{children:n})):null}}),AR=T.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${lc["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n,i,o;if("solid"===e.$type)switch(n=sc["text-inverse"],e.$color){case"grey":t=sc["bg-inverse-subtler"],i=sc["bg-inverse-hover"];break;case"green":t=sc["bg-success-strong"],i=sc["bg-success-strong-hover"];break;case"yellow":t=sc["bg-warning-strong"],i=sc["bg-warning-strong-hover"];break;case"red":t=sc["bg-error-strong"],i=sc["bg-error-strong-hover"];break;case"blue":t=sc["bg-info-strong"],i=sc["bg-info-strong-hover"];break;default:t=sc["bg-inverse"],i=sc["bg-inverse-hover"]}else switch(e.$color){case"grey":t=sc["bg-strong"],r=sc["border-strong"],n=sc["text-subtle"],i=sc["bg-hover-neutral-strong"];break;case"green":t=sc["bg-success"],r=sc["border-success"],n=sc["text-success"],i=sc["bg-success-hover"];break;case"yellow":t=sc["bg-warning"],r=sc["border-warning"],n=sc["text-warning"],i=sc["bg-warning-hover"];break;case"red":t=sc["bg-error"],r=sc["border-error"],n=sc["text-error"],i=sc["bg-error-hover"];break;case"blue":t=sc["bg-info"],r=sc["border-info"],n=sc["text-info"],i=sc["bg-info-hover"];break;default:t=sc.bg,r=sc.border,n=sc.text,i=sc["bg-hover-neutral"]}return F`
            background: ${t};
            border: ${dc["width-010"]} ${dc.solid} ${r};
            color: ${n};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&i&&`background: ${i(e)};`}
                    ${e.$interactive&&o}
                }
            }
        `}}

    ${pc.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return F`
                    ${lc["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,BR=T.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,IR=r=>{var{type:n,colorType:i="black",children:o,interactive:a=!1,icon:s,iconPosition:l="left"}=r,c=dt(r,["type","colorType","children","interactive","icon","iconPosition"]);return t(AR,Object.assign({as:a?"button":"div",$type:n,$color:i,$interactive:a},c,{children:["left"===l&&s,e(BR,{children:o}),"right"===l&&s]}))};var zR;Ld.extend(Wd),function(e){e.formatHourlyDisplay=e=>Ld(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>iu.getTimeDiffInMinutes(e,t)/15*(r/2)}(zR||(zR={}));const RR=1.25,PR=e=>"minified"===e?12:40,LR=e=>"minified"===e?12:40,NR=T.div`
    position: relative;
    display: flex;
    align-items: center;
`,WR=T(wc)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${sc.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${sc.Primitive["neutral-50"]} r g b / 50%);
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
`,HR=T(me)`
    width: 1rem;
    height: 1rem;
    color: ${sc["icon-primary"]};
`,YR=T(be)`
    font-size: 1rem;
    color: ${sc["icon-primary"]};
`,VR=T.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+LR(e)}px`};
`,UR=T.div`
    position: relative;
    white-space: nowrap;
    height: ${RR}rem;
`,XR=T.div`
    display: flex;
    white-space: nowrap;
`,KR=T.div`
    display: inline-block;
    width: ${({$variant:e})=>`${PR(e)}px`};
    position: relative;
    border-left: ${dc["width-010"]} ${dc.solid}
        ${sc["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?RR:.625;break;case"minified":t=e.$isLongMarker?RR:0;break;default:t=0}return F`
            height: ${t}rem;
        `}}
`,qR=T(kc.BodyXS)`
    color: ${sc["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,GR=T.div`
    ${e=>"vertical"===e.$type?F`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:F`
                position: absolute;
                height: ${LR(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&F`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||sc["bg-strongest"]} 0px,
                ${e.$bgColor2||sc["bg-strongest"]} 10px,
                ${e.$bgColor||sc["bg-stronger"]} 10px,
                ${e.$bgColor||sc["bg-stronger"]} 20px
            );
        `}
`,ZR=T.div`
    position: absolute;
    top: ${RR}rem;
    height: ${({$variant:e})=>`${LR(e)}px`};
    z-index: 1;
    border-right: ${dc["width-010"]} ${dc.solid}
        ${sc["border-stronger"]};
`,QR=T(kc.BodyXS)`
    color: ${e=>e.$color||sc.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,JR=({"data-testid":n,className:i,variant:s="default",startTime:l,endTime:c,slots:d,onSlotClick:h,onClick:g,styleAttributes:p})=>{const f=o(null),[m,b]=a(0),[v,y]=a(0),x=PR(s),$=2.5*x;u((()=>{const e=f.current;return e&&e.addEventListener("scroll",w),()=>{e&&e.removeEventListener("scroll",w)}}),[]);const w=()=>{f.current&&b(f.current.scrollLeft)},C=e=>{f.current&&f.current.scrollBy({left:"left"===e?-$:$,behavior:"smooth"})};cr({onResize:()=>{f.current&&y(f.current.clientWidth)},targetRef:f,refreshMode:"debounce",refreshRate:50});const S=e=>e<=x/2,k=e=>{if(n)return`${n}-${e}`},O=(e,t,r)=>{const n=0===e.minute();if("default"===r)return n;return n&&(t?e.hour()%2==0:e.hour()%2==1)};return t(NR,Object.assign({className:i},{children:[t(VR,Object.assign({"data-testid":n,ref:f,$variant:s},{children:[e(UR,Object.assign({"data-testid":k("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const t=[],r=Ld(l,"HH:mm"),n=Ld(c,"HH:mm"),i=r.hour()%2==0;for(let o=r;o.isBefore(n);o=o.add(30,"minute")){const r=O(o,i,s);t.push(e(KR,Object.assign({$isLongMarker:r,$variant:s},{children:r&&e(qR,Object.assign({weight:"semibold"},{children:zR.formatHourlyDisplay(o.format("HH:mm"))}))}),o.format("HH:mm")))}return t})()})),t(XR,Object.assign({"data-testid":k("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[p&&(()=>{const{backgroundColor:n,backgroundColor2:i,styleType:o="default"}=p,a=zR.calculateWidth(l,c,x),d=!!g&&"default"===s;return t(r,{children:[e(ZR,{$variant:s}),e(GR,{"data-testid":k("default-timeslot"),$width:a,$variant:s,$left:0,$styleType:o,$bgColor:n,$bgColor2:i,$clickable:d,onClick:d?g:void 0},"default-timeslot")]})})(),d.map((r=>{const{id:n,startTime:i,endTime:o,label:a,clickable:d=!0,styleAttributes:u}=r,{color:g,styleType:p="default",backgroundColor:f,backgroundColor2:m}=u,b=zR.calculateWidth(i,o,x),v=zR.calculateWidth(l,i,x),y=d&&"default"===s;return t("div",{children:[e(ZR,{$variant:s,style:{left:`${v}px`}}),e(GR,Object.assign({"data-testid":k(`${n}-timeslot`),$width:b,$left:v,$styleType:p,$variant:s,$bgColor:f,$bgColor2:m,$clickable:y,onClick:()=>y&&h(r)},{children:a&&"default"===s&&e(QR,Object.assign({$slotWidth:b,$color:g,weight:"semibold"},{children:S(b)?"...":a}))})),c!==o&&e(ZR,{$variant:s,style:{left:`${v+b}px`}})]},n)}))]}))]})),e(r,{children:m>0&&e(WR,Object.assign({"data-testid":k("arrow-left"),$direction:"left",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("left")}},{children:e(YR,{})}))}),m+v<zR.calculateWidth(l,c,x)?e(WR,Object.assign({"data-testid":k("arrow-right"),$direction:"right",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("right")}},{children:e(HR,{})})):e(r,{})]}))},eP=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${uc["spacing-8"]};
    flex: 1;
`,tP=T(kc.BodyXS)`
    ${e=>e.$disabled&&F`
            color: ${sc["text-disabled-subtlest"]};
        `}
`,rP=T.div`
    grid-column: 2 / -1;
    display: flex;
`,nP=T.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${uc["spacing-4"]};
`,iP=T(Yo.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,oP=T.div`
    display: flex;
    gap: ${uc["spacing-4"]};
    transition: all ${cc["duration-250"]} ${cc["ease-default"]};
    overflow: hidden;
`,aP=T.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${uc["spacing-4"]};
    width: 1.375rem;
    transition: all ${cc["duration-250"]} ${cc["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,sP=T.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,lP=T.div`
    ${lc["body-xs-bold"]}
    color: ${sc["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${lc.Spec["body-size-sm"]};
    }
`,cP=T.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${uc["spacing-4"]};
`,dP=T.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${uc["spacing-8"]};
`,uP=T(qc.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${uc["spacing-8"]};
    }
`,hP=T(le)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${cc["duration-250"]} ${cc["ease-default"]};
`,gP=T(GR)`
    ${e=>{if("vertical"===e.$type)return F`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${hc.xs};
            `}}

    ${e=>e.$halfFill?F`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${sc["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||sc["bg-strongest"]} 0px,\n                            ${e.$bgColor2||sc["bg-strongest"]} 10px,\n                            ${e.$bgColor||sc["bg-stronger"]} 10px,\n                            ${e.$bgColor||sc["bg-stronger"]} 20px\n                        )`};
            `:F`
                background-color: ${e.$bgColor};
            `}
`;var pP=pa;var fP=function(e,t,r){for(var n=-1,i=e.length;++n<i;){var o=e[n],a=t(o);if(null!=a&&(void 0===s?a==a&&!pP(a):r(a,s)))var s=a,l=o}return l};var mP=fP,bP=hk,vP=function(e,t){return e<t};var yP=Uo((function(e,t){return e&&e.length?mP(e,bP(t),vP):void 0}));var xP=fP,$P=function(e,t){return e>t},wP=hk;var CP=Uo((function(e,t){return e&&e.length?xP(e,wP(t),$P):void 0}));const SP=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:s,maxDate:l,startTime:c,endTime:d,maxVisibleCellHeight:u,slots:h,interval:g=30,variant:p="flexible",enableSelection:f=!0,onSlotClick:b})=>{var v,y,x,$;const w="YYYY-MM-DD",[C,S]=a(!1),[k,O]=a(),D=m((()=>Qd.generateDaysForCurrentWeek(r)),[r]),j=Object.values(null!=h?h:{}).flat(),E=null!==(y=null!=c?c:null===(v=yP(j,"startTime"))||void 0===v?void 0:v.startTime)&&void 0!==y?y:"00:00",_=null!==($=null!=d?d:null===(x=CP(j,"endTime"))||void 0===x?void 0:x.endTime)&&void 0!==$?$:"24:00",T=Math.ceil(iu.getTimeDiffInMinutes(E,_)/g),{height:F,ref:M}=cr(),A=u?F<u||C?F:u:F,B=Oo({height:A}),I=m((()=>{if(h){const e={};return Object.entries(h).forEach((([t,r])=>{const n=function(e){const t=Array(T).fill({});return e.forEach((e=>{const r=Math.max(0,iu.getTimeDiffInMinutes(E,e.startTime)/g),n=Math.min(T,iu.getTimeDiffInMinutes(E,e.endTime)/g),i=Math.ceil(n)-Math.floor(r);switch(p){case"fixed":t[Math.floor(r)]=Object.assign(Object.assign({},e),{cellLength:n-r});break;case"flexible":for(let o=0;o<i;o++){const a=iu.addMinutesToTime(E,Math.floor(r+o)*g),s=iu.addMinutesToTime(a,g);let l;uj(t[Math.floor(r+o)])?0===o&&r%1!=0?l="top":o===i-1&&n%1!=0&&(l="bottom"):l=void 0,t[Math.floor(r+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(r);e[t]=function(e){var t,r,n,i;let o=0;switch(p){case"fixed":for(e=e.reduce(((e,t)=>{const r=e.length>0?e[e.length-1]:e[0];return uj(t)&&uj(r)?e:[...e,t]}),[{}]);o<e.length;){if(uj(e[o])){const a=null!==(r=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==r?r:E,s=null!==(i=null===(n=e[o+1])||void 0===n?void 0:n.startTime)&&void 0!==i?i:_;if(a!==s){const t=iu.getTimeDiffInMinutes(a,s)/g;e[o]=Object.assign(Object.assign({},N(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)uj(e[o])?(e[o]=N(o),o++):o+=e[o].cellLength}return e.filter((e=>!uj(e)&&e.cellLength>0))}(n)})),e}return{}}),[h]),z=e=>{O(e)},R=()=>{O(void 0)},P=e=>{e.preventDefault(),S((e=>!e))},L=e=>{var t;const r=Qd.isWithinRange(e,s?Ld(s):void 0,l?Ld(l):void 0),i=null!==(t=n&&n.includes(e.format(w)))&&void 0!==t&&t;return!r||i};function N(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:sc["bg-stronger"]},cellLength:t}}return t(nP,{children:[e(rP,{children:D.map(((t,r)=>{const n=(e=>{const t=e.format(w),r=L(e),n={},o=f&&!r;r&&(n.disabled=!0),n.interactive=f?o:null;const a=o&&k&&e.isSame(k,"day"),s=[i].includes(t);return s&&a?(n.labelType="selected-hover",n.circleLeft="selected-hover-outline",n.circleRight="selected-hover-outline"):s?(n.labelType="selected",n.circleLeft="selected-outline",n.circleRight="selected-outline"):a&&(n.labelType="hover",n.circleLeft="hover-subtle",n.circleRight="hover-subtle"),n})(t);return e(dh,Object.assign({date:t,calendarDate:Ld(i),onSelect:()=>{((e,t)=>{!t&&f&&o(e)})(t,!n.interactive)},onHover:z,onHoverEnd:R},n),`day-${r}`)}))}),e(rP,{children:D.map(((t,r)=>e(eP,{children:e(tP,Object.assign({weight:"semibold",$disabled:L(t)},{children:Ld(t).format("ddd")}))},`week-day-${r}`)))}),(()=>{let t=!1;const r=e=>{const r=Ld(E,"HH:mm").add(4*e*g,"minutes"),n=r.format("h"),i=r.format("mm"),o=r.format("a");let a=`${n}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e(aP,Object.assign({$height:A},{children:Array(Math.ceil(T/4)).fill(void 0).map(((t,n)=>e(sP,{children:e(lP,{children:r(n)})},`time-${n}`)))}))})(),e(iP,Object.assign({style:B},{children:e(oP,Object.assign({ref:M},{children:D.map(((t,r)=>{var n;const i=t.format(w),o=null!==(n=I[i])&&void 0!==n?n:Array("flexible"===p?T:1).fill(void 0).map(((e,t)=>N(t,"fixed"===p?T:void 0)));return e(cP,{children:o.map((t=>{const{id:r,clickable:n=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e(gP,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:n,$height:"fixed"===p?12*a+4*(a-1):12,onClick:()=>n&&((e,t)=>{b&&b(e,t)})(i,t)},r)}))},`wrapper-${r}`)}))}),`week-cell-${r.format(w)}`)})),(()=>{if(u&&M.current&&!(F&&F<u))return e(dP,{children:t(uP,Object.assign({"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:P},{children:[e(hP,{$isExpanded:C}),(C?"Hide":"Show")+" later times"]}))})})()]})},kP=T.div`
    --header-bottom-spacing: 0.5rem;

    ${pc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,OP="YYYY-MM-DD",DP=t=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:i,value:s,minDate:l,maxDate:c,startTime:d,endTime:h,slots:g,interval:p,variant:f,maxVisibleCellHeight:m,showNavigationHeader:b=!0,enableSelection:v,onSlotClick:y,currentCalendarDate:x}=t,$=dt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[w,C]=a(s),S=o(),k=o(void 0);u((()=>{C(s)}),[s]);const O=e=>{const t=e.format(OP);C(t),i&&i(t)},D=(e,t)=>{y&&y(e,t)},j=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format(OP),lastDayOfWeek:e.endOf("week").format(OP)},month:e.month()+1,year:e.year()};n(t)}};return e(kP,Object.assign({},$,{children:e(Gu,Object.assign({ref:S,dynamicHeight:!0,initialCalendarDate:iu.toDayjs(w||x).endOf("week").format(OP),selectedStartDate:w,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>l&&Ld(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>c&&Ld(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{k.current&&k.current.isSame(e,"week")||j(e),k.current=e},showNavigationHeader:b,minDate:l,maxDate:c,getMonthHeaderLabel:e=>Ld(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Ld(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>(t=>e(SP,{calendarDate:t,disabledDates:r,selectedDate:w,minDate:l,maxDate:c,startTime:d,endTime:h,onSelect:O,slots:g,interval:p,variant:f,maxVisibleCellHeight:m,enableSelection:v,onSlotClick:D}))(t)}))}))},jP=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,EP=T.div`
    ${lc["body-xs-semibold"]}
    color:${sc.text};

    ${e=>e.$disabled&&F`
            color: ${sc["text-disabled-subtlest"]};
        `};
`,_P=T.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,TP=T.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,FP=T.div`
    ${lc["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${sc.text};
    span {
        display: block;
    }
`,MP=T.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;Ld.extend(Yd);const AP="YYYY-MM-DD",BP={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:sc["bg-stronger"],backgroundColor2:sc["bg-strongest"]}},IP=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:s,maxDate:l,slots:c,enableSelection:d=!0,onSlotClick:u})=>{const h=m((()=>Qd.generateDaysForCurrentWeek(r)),[r]),[g,p]=a(),f=e=>{p(e)},b=()=>{p(void 0)},v=e=>{const t=e.format(AP),r=(e=>{const t=Qd.isWithinRange(e,s?Ld(s):void 0,l?Ld(l):void 0),r=n&&n.includes(e.format(AP));return!t||r})(e),o=d&&!r,a=o&&g&&e.isSame(g,"day"),c=[i].includes(t),u={labelType:"available",interactive:d?o:null};return r&&(u.disabled=!0,u.labelType="unavailable"),c&&a?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):c?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):a&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return t(_P,{children:[h.map(((r,n)=>{const a=v(r);return t(jP,{children:[e(dh,Object.assign({date:r,calendarDate:Ld(i),onSelect:()=>{((e,t)=>{!t&&d&&o(e)})(r,!a.interactive)},onHover:f,onHoverEnd:b},a),`day-${n}`),e(EP,Object.assign({$disabled:a.disabled},{children:Ld(r).format("ddd")}))]},`week-day-${n}`)})),e(TP,{children:h.map(((r,n)=>{const i=r.format(AP),o=c&&(c[i]?c[i]:[BP]);return e(MP,{children:o&&o.map((r=>{const{id:n,startTime:o,endTime:a,clickable:s=!0,styleAttributes:l}=r,{color:c,styleType:d="default",backgroundColor:h,backgroundColor2:g}=l;return e(GR,Object.assign({$type:"vertical",$variant:"default",$styleType:d,$bgColor:h,$bgColor2:g,$clickable:s,onClick:()=>s&&((e,t)=>{u(e,t)})(i,r)},{children:t(FP,Object.assign({style:{color:c}},{children:[e("span",{children:Qd.convertTo12HourFormat(o)}),a&&o&&e("span",{children:"-"}),e("span",{children:Qd.convertTo12HourFormat(a)})]}))}),n)}))},`wrapper-${n}`)}))},`week-cell-${r.format(AP)}`)]})},zP=T.div`
    --header-bottom-spacing: 0.5rem;

    ${pc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,RP="YYYY-MM-DD",PP=t=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:i,value:s,minDate:l,maxDate:c,slots:d,showNavigationHeader:h=!0,enableSelection:g,onSlotClick:p,currentCalendarDate:f}=t,m=dt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[b,v]=a(s),y=o(),x=o(void 0);u((()=>{v(s)}),[s]);const $=e=>{const t=e.format(RP);v(t),i&&i(t)},w=(e,t)=>{p&&p(e,t)},C=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format(RP),lastDayOfWeek:e.endOf("week").format(RP)},month:e.month()+1,year:e.year()};n(t)}};return e(zP,Object.assign({},m,{children:e(Gu,Object.assign({ref:y,dynamicHeight:!0,initialCalendarDate:iu.toDayjs(b||f).endOf("week").format(RP),selectedStartDate:b,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>l&&Ld(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>c&&Ld(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"week")||C(e),x.current=e},showNavigationHeader:h,minDate:l,maxDate:c,getMonthHeaderLabel:e=>Ld(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Ld(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>e(IP,{calendarDate:t,disabledDates:r,selectedDate:b,minDate:l,maxDate:c,onSelect:$,slots:d,enableSelection:g,onSlotClick:w})}))}))},LP=T.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return F`
                    border: 4px solid ${sc["icon-primary-subtle"]};
                `;case"upcoming-inactive":return F`
                    border: 4px solid ${sc["icon-subtle"]};
                `;case"disabled":return F`
                    background-color: ${sc["icon-disabled-subtle"]};
                `;case"completed":return F`
                    background-color: ${sc["icon-success"]};
                    svg {
                        color: ${sc["icon-inverse"]};
                    }
                `;case"error":return F`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${sc["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,NP=T.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return F`
                    background-color: ${sc["icon-primary-subtle"]};
                `;case"upcoming-inactive":return F`
                    background-color: ${sc["icon-subtle"]};
                `;case"disabled":return F`
                    background-color: ${sc["icon-disabled-subtle"]};
                `;case"completed":return F`
                    background-color: ${sc["icon-success"]};
                `;case"error":return F`
                    margin-left: -0.15rem;
                    background-color: ${sc["icon-error"]};
                `}}}
`,WP=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,HP=T.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${pc.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${pc.MaxWidth.sm} {
        grid-column: span 8;
    }
`,YP=T(kc.HeaderSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${pc.MaxWidth.md} {
        margin-bottom: 1.5rem;
    }
`,VP=T(kc.HeaderXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,UP=T.div`
    display: flex;

    :last-of-type ${NP} {
        margin-bottom: 0;
    }
`,XP=T.div`
    margin-bottom: 2rem;
    width: 100%;
`,KP=T.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,qP=T(rI)`
    padding: 0.125rem 0.5rem;
`,GP=({items:n,className:i,id:o,title:a,startCol:s,colSpan:l,"data-base-indicator-testid":c,"data-testid":d="timeline"})=>{const u=t=>"string"==typeof t?e(kc.BodyMD,Object.assign({className:"timeline-item-content-text"},{children:t})):e(r,{children:t}),h=t=>"string"==typeof t?e(VP,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):e(r,{children:t}),g=e=>e.slice(0,2).map(((e,t)=>k(qP,Object.assign({},e,{type:e.type,key:`status-pill-${t}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),p=t=>{switch(t){case"completed":return e(de,{});case"error":return e(ce,{});default:return null}};return t(HP,Object.assign({className:i,id:o,"data-testid":d,$startCol:s,$colSpan:l},{children:[e(YP,Object.assign({"data-testid":"timeline-title",weight:"bold"},{children:a})),n.map(((r,n)=>{const{title:i,content:o,statuses:a,variant:s}=r,l=c?`circleindicator${n+1}_div_${c}`:"circleindicator",d=s||(0===n?"current":"upcoming-active");return t(UP,{children:[t(WP,{children:[e(LP,Object.assign({"data-testid":l,$variant:d},{children:p(d)})),e(NP,{$variant:d})]}),t(XP,Object.assign({className:"timeline-item-content"},{children:[h(i),a&&e(KP,{children:g(a)}),u(o)]}))]},`timeline-item-${n}`)}))]}))},ZP=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],QP=252,JP=M`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,eL=T(Hp)`
    color: ${sc.icon};
    svg {
        ${e=>{if(e.$loading)return F`
                    animation: ${JP} 4s linear infinite;
                `}}
    }
`,tL=T.div`
    display: flex;
    padding-bottom: ${uc["spacing-16"]};
    justify-content: space-between;
    gap: ${uc["spacing-8"]};
`,rL=T.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${uc["spacing-8"]};
`,nL=T(kc.BodySM)`
    color: ${sc["text-subtler"]};
`,iL=T(Xp)`
    width: 400px;
`,oL=n=>{var{selectedDate:i,loading:o,tableContainerRef:a,totalRecords:s,onPreviousDayClick:l,onNextDayClick:c,onRefresh:d,onCalendarDateSelect:u}=n,h=dt(n,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const g=()=>{a.current&&(a.current.scrollTop=0)},p=()=>{d&&(g(),d())};return t(tL,{children:[e(iL,Object.assign({selectedDate:i,loading:o},h,{onRightArrowClick:e=>{g(),c(e)},onLeftArrowClick:e=>{g(),l(e)},onCalendarDateSelect:u})),void 0===s?e(r,{}):t(rL,{children:[t(nL,Object.assign({"data-testid":"timetable-records-results",weight:"semibold"},{children:[s," results found"]})),d&&e(eL,Object.assign({"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:o,onClick:p,$loading:o},{children:e(ue,{})}))]})]})},aL=T.div`
    display: flex;
    width: 100%;
`,sL=T.div`
    border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};
    ${e=>{if(e.$isOnTheHour)return F`
                box-shadow: inset -0.5px 0px ${sc["border-primary"]};
            `}}
`,lL=T.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,cL=T.div`
    width: 2px;
    height: 100%;
`,dL=T.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${hc.sm};
    box-sizing: border-box;
    padding: ${uc["spacing-4"]};
    ${({$status:e,$bgColour:t,$isClickable:r})=>{switch(e){case"blocked":return F`
                    background: repeating-linear-gradient(
                        135deg,
                        ${sc["bg-stronger"]} 0px 6px,
                        ${sc["bg-strongest"]} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"filled":return F`
                    background: ${t};
                    &:hover {
                        cursor: ${r?"pointer":"default"};
                    }
                `;case"disabled":return F`
                    background: ${sc["bg-disabled"]};
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;default:return F`
                    &:hover {
                        background-color: ${r?sc["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,uL=T(kc.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,hL=T(kc.BodyXS)`
    color: ${sc["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,gL=i.memo((({id:r,startTime:n,endTime:i,title:o,subtitle:a,status:s,intervalWidth:l,rowBarColor:c,containerRef:d,customPopover:u,onClick:h})=>{const g=0===Ld(i,"HH:mm").get("minutes"),p=iu.getTimeDiffInMinutes(n,i)/15*l-2,f=!!h||u&&"click"===u.trigger;return e((({wrapper:e,children:t})=>u?e(t):t),Object.assign({wrapper:t=>(t=>{const r={position:"bottom-start",rootNode:d,customOffset:u.offset,children:t,trigger:u.trigger,delay:u.delay,popoverContent:u.content};return e(s$,Object.assign({},r,{children:t}))})(t)},{children:e(sL,Object.assign({"data-testid":"block-container",$isOnTheHour:g},{children:t(lL,{children:[t(dL,Object.assign({$width:p,$status:s,$bgColour:c,$isClickable:f,onClick:e=>{h&&h({id:r,startTime:n,endTime:i,status:s,title:o,subtitle:a,customPopover:u},e)}},{children:[o&&e(uL,Object.assign({weight:"semibold"},{children:o})),a&&e(hL,Object.assign({weight:"bold"},{children:a}))]})),e(cL,{})]})}),"block-container-key")}))})),pL=t=>{var{id:r,timetableMinTime:n,timetableMaxTime:i,rowMinTime:o=n,rowMaxTime:a=i,rowCells:s,rowBarColor:l,intervalWidth:c,containerRef:d,outOfRangeCellPopover:u}=t,h=dt(t,["id","timetableMinTime","timetableMaxTime","rowMinTime","rowMaxTime","rowCells","rowBarColor","intervalWidth","containerRef","outOfRangeCellPopover"]);const g=h["data-testid"]||"timetable-row",p=m((()=>{const e=[];Ld(n,"HH:mm").isBefore(Ld(o,"HH:mm"))&&e.push({id:r,startTime:n,endTime:o,status:"blocked",customPopover:u});const t=[...s].sort(((e,t)=>{const r=Ld(e.startTime,"HH:mm"),n=Ld(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0}));return t.forEach(((t,n)=>{var i;const{endTime:o}=t;e.push(t);const l=Ld((null===(i=s[n+1])||void 0===i?void 0:i.startTime)||a,"HH:mm");let c=Ld(o,"HH:mm");for(;c.isBefore(l);)if(d=l,c.get("hour")!=d.get("hour")){const t=c.add(1,"hour").startOf("hour");e.push({id:r,startTime:c.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),c=t}else e.push({id:r,startTime:c.format("HH:mm").toString(),endTime:l.format("HH:mm").toString(),status:"disabled"}),c=l;var d})),Ld(i,"HH:mm").isAfter(Ld(a,"HH:mm"))&&e.push({id:r,startTime:a,endTime:i,status:"blocked",customPopover:u}),e}),[r,n,i,o,a,s,u]);return e(aL,Object.assign({"data-testid":g},h,{children:p.map(((t,r)=>e(gL,Object.assign({},t,{intervalWidth:c,rowBarColor:l,containerRef:d}),`${r}-row-cell-key`)))}))},fL=T.div``,mL=T.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${QP}px auto;
`,bL=T.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${QP}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return F`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,vL=T.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${sc.bg};
    width: ${QP}px;
    z-index: 2;
    border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?F`
                box-shadow: 2px 2px 8px
                    rgb(from ${sc.Primitive["neutral-20"]} r g b / 25%);
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
`,yL=T.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${sc.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,xL=T.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${sc.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return F`
                box-shadow: 2px 2px 8px
                    rgb(from ${sc.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,$L=T.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${uc["spacing-4"]};
`,wL=T(kc.BodySM)`
    color: ${sc["text-subtler"]};
`,CL=T.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,SL=T.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${sc.bg};
    width: ${QP}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${uc["spacing-16"]} 0 ${uc["spacing-32"]};
    border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};
    border-left: ${dc["width-010"]} ${dc.solid}
        ${sc["border-primary"]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?F`
                box-shadow: 2px 2px 8px
                    rgb(from ${sc.Primitive["neutral-20"]} r g b / 25%);
            `:F`
                box-shadow: inset -0.5px 0px ${sc["border-primary"]};
            `};
`,kL=T(kc.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${sc["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,OL=T(kc.BodyXS)`
    display: inline-flex;
    gap: ${uc["spacing-4"]};
    align-items: center;
    color: ${sc["text-subtler"]};
    ${e=>{if(!e.$show)return F`
                display: none;
            `}}
`,DL=T(yd)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,jL=T(Rg)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${uc["spacing-72"]} 0;
`,EL=T.div`
    display: flex;
    border-bottom: ${dc["width-010"]} ${dc.solid} ${sc.border};
`,_L=T.div`
    border-right: ${dc["width-005"]} ${dc.solid}
        ${sc["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${uc["spacing-20"]} ${uc["spacing-12"]};
`,TL=M`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,FL=T.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${sc.Primitive["neutral-95"]} 8%,
        ${sc.Primitive["neutral-100"]} 18%,
        ${sc.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${TL} 1.5s forwards infinite;
`,ML=T(s$)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,AL=n=>{var{date:i,emptyContentMessage:s,rowData:l,loading:c,minTime:d="00:00",maxTime:h="23:00",minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPage:v,onRefresh:y,onNextDayClick:x,onPreviousDayClick:$,onCalendarDateSelect:w}=n,C=dt(n,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const S=C["data-testid"]||"timetable",O=ng.roundToNearestHour(d),D=ng.roundToNearestHour(h,!0),j=ng.generateHourlyIntervals(O,D),E=0===f||jO.isEmpty(l),_=E||l.length===f,T=o(null),F=o(null),[M,A]=a(!1),[B,I]=a(!1),[z,R]=a(0),[P,L]=a(!1);u((()=>{const e=jO.throttle((()=>{if(T.current&&(A(T.current.scrollLeft>0),I(T.current.scrollTop>0)),P)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=T.current;Math.ceil(e+t)>=r-1&&!_&&v&&!c&&(L(!0),v())}),100),t=T.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[_,P,c,v]),u((()=>{L(!1)}),[l]);cr({onResize:()=>{if(T.current){const e=Math.ceil(60*j.length/15),t=(T.current.clientWidth-QP)/e;R(t>21?t:21)}},targetRef:T,refreshMode:"debounce",refreshRate:50});const N=(()=>{let e=0;const t=ZP.length;return()=>{const r=ZP[e];return e=(e+1)%t,r}})(),W=({wrapper:e,children:t})=>e(t),H=()=>{if(!c&&P)return e(SL,Object.assign({$isScrolled:M},{children:e(FL,{})}))},Y=()=>{if(!c&&P)return e(EL,Object.assign({"data-testid":"lazy-loader"},{children:j.map(((t,r)=>e(_L,Object.assign({$width:4*z},{children:e(FL,{})}),`lazy-load-cell-${r}`)))}))};return t(fL,E?Object.assign({},C,{"data-testid":S},{children:[e(oL,{selectedDate:i,loading:c||P,tableContainerRef:T,minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:$,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:w}),e(mL,Object.assign({className:"empty-container"},{children:c?e(DL,{$isEmptyContent:E}):e(jL,{type:"no-item-found",description:s})}))]}):Object.assign({},C,{"data-testid":S},{children:[e(oL,{"data-id":"timetable-date-navigator",selectedDate:i,loading:c||P,tableContainerRef:T,minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:$,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:w}),t(bL,Object.assign({"data-id":"timetable-container","data-testid":"timetable-container",ref:T,$loading:c,$allRecordsLoaded:_||!v},{children:[e(vL,{$isScrolledY:B,$isScrolledX:M}),e(yL,Object.assign({$numOfRows:l.length,$isScrolled:M,"data-testid":"row-header-column-id"},{children:t(r,{children:[l.map(((r,n)=>e(W,Object.assign({wrapper:e=>((e,t)=>{if(!e.rowHeaderPopover)return t;const r={position:"bottom-start",rootNode:T,customOffset:e.rowHeaderPopover.offset,children:t,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return k(ML,Object.assign({},r,{key:`${e.id}-popover-trigger`,zIndex:2}),t)})(r,e)},{children:t(SL,Object.assign({$isScrolled:M},{children:[e(kL,Object.assign({$isClickable:!!r.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(r,e),weight:"semibold","data-testid":`${r.id}-row-header-title`},{children:r.name})),e(OL,Object.assign({weight:"bold",$show:!!r.subtitle,"data-testid":`${r.id}-row-header-subtitle`},{children:r.subtitle}))]}),`${r.id}-row-header`)}),n))),H()]})})),e(xL,Object.assign({$numOfColumns:j.length,$isScrolled:B},{children:j.map((t=>e($L,Object.assign({"data-testid":`${t}-column`},{children:e(wL,Object.assign({weight:"semibold"},{children:t}))}),`${t}-column-key`)))})),c?e(DL,{$isEmptyContent:E}):t(CL,Object.assign({"data-testid":"content-container-id",ref:F,$numOfRows:l.length},{children:[l.map(((t,r)=>e(pL,Object.assign({timetableMinTime:O,timetableMaxTime:D,rowBarColor:N(),intervalWidth:z,containerRef:F},t),`${r}-row-bar`))),Y()]}))]}))]}))},BL=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:sc[t.Background],Border:sc[t.Border],Text:sc[t.Text],Icon:sc[t.Icon]}},IL=T(Yo.div)`
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

    ${pc.MaxWidth.lg} {
        left: 0;
    }

    ${e=>F`
            background: ${BL(e).Background};
            border: 1px solid ${BL(e).Border};
            color: ${BL(e).Text};
        `};
`,zL=T.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${pc.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,RL=T.div`
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
                color: ${BL(e).Icon};
            }
        `};
`,PL=T.div`
    display: flex;
    flex-direction: column;
`,LL=T(kc.HeaderXS)`
    display: flex;

    ${e=>F`
            color: ${BL(e).Text};
        `}
`,NL=T.div`
    ${e=>F`
            p {
                color: ${BL(e).Text};
            }
        `}
`,WL=T(qc.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${pc.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,HL=T(wc)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>F`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${BL(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${pc.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,YL=4e3,VL=r=>{var{type:n="success",title:o,label:s,autoDismiss:l,autoDismissTime:c=YL,onDismiss:d,fixed:h=!0,actionButton:g}=r,p=dt(r,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[f,m]=a(!1),b=A(),v=gc["lg-max"]({theme:b}),y=Sd.useMediaQuery({maxWidth:v});u((()=>{m(!0)}),[]),u((()=>{if(!l)return;const e=setTimeout((()=>{m(!1)}),c);return()=>clearTimeout(e)}),[l]);const x=Oo({opacity:f?1:0,transform:f?y?"translateY(0%)":"translateX(0%)":y?"translateY(-1500%)":"translateX(150%)",config:{easing:On.easeInOutQuart,duration:1e3},onRest:()=>{f||null==d||d()}});return t(IL,Object.assign({style:x,$type:n,$fixed:h},p,{children:[t(zL,{children:[t(RL,Object.assign({$type:n},{children:[(()=>{switch(n){case"success":return e(pe,{});case"warning":return e(ge,{});case"error":return e(ce,{});case"info":return e(he,{});default:return null}})(),t(PL,{children:[o&&(i.isValidElement(o)?o:e(LL,Object.assign({$type:n,weight:"semibold"},{children:o}))),s&&e(NL,Object.assign({$type:n},{children:i.isValidElement(s)?s:e(o?kc.BodyMD:kc.BodyBL,{children:s})}))]})]})),g&&e(WL,Object.assign({styleType:"light",onClick:g.onClick},{children:g.label}))]}),e(HL,Object.assign({$type:n,onClick:()=>{m(!1)}},{children:e(J,{})}))]}))},UL=T.div`
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

                ${df.MaxWidth.mobileL} {
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

                ${df.MaxWidth.mobileL} {
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

                ${df.MaxWidth.mobileL} {
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

                ${df.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?F`
            visibility: "visible";
            opacity: 1;
            transition: ${kI.Base};
            z-index: 2;
        `:F`
            visibility: "hidden";
            opacity: 0;
            transition: ${kI.Base};
            z-index: -1;
        `}
`,XL=T(kh)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,KL=T.div`
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
                        border-color: ${lI.Neutral[8]} transparent
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
                        border-color: transparent ${lI.Neutral[8]}
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
                            ${lI.Neutral[8]};
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
                            ${lI.Neutral[8]} transparent;
                    }
                `}}}
`,qL=T.div`
    position: relative;
`,GL=r=>{var{visible:n,position:i="top",children:s}=r,l=dt(r,["visible","position","children"]);const c=l["data-testid"]||"tooltip",[d,h]=a(i),g=o(null);u((()=>(f(),window.addEventListener("resize",Jh(p,300)),()=>{window.removeEventListener("resize",Jh(p,300))})),[]);const p=()=>{f()},f=()=>{if(g.current){const e=g.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":h("right");break;case"right":h("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":h("left");break;case"left":h("top")}else h(i)}};return t(UL,Object.assign({position:d,"data-testid":c,visible:n,ref:g},l,{children:[e(XL,{children:"string"==typeof s?e($I.BodySmall,{children:s}):s}),e(KL,{position:d})]}))},ZL=(r,n)=>i=>{const{tooltipVisible:o,position:a}=i,s=dt(i,["tooltipVisible","position"]);return t(qL,{children:[e(r,Object.assign({},s)),e(GL,Object.assign({visible:o,position:a},{children:n.content}))]})},QL=F`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${pc.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,JL=T(rF.Content)`
    background: ${({$background:e})=>e?sc["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,eN=T(kc.HeaderSM)`
    margin-bottom: 1rem;
    ${QL}
`,tN=T(kc.BodyBL)`
    margin-bottom: 2rem;
    ${QL}
`,rN=T.div`
    ${QL}
`,nN=T.ul`
    ${QL}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${pc.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${pc.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,iN=i.forwardRef(((t,r)=>{var{stretch:n}=t,i=dt(t,["stretch"]);return e(nN,Object.assign({ref:r,$stretch:n},i))})),oN=T.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return F`
                    grid-column: auto / span 4;
                `;case"full":return F`
                    grid-column: auto / span 8;
                `}}}

    ${pc.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,aN=T.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${sc["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${lc.Spec["body-size-baseline"]};
        height: ${lc.Spec["body-size-baseline"]};
    }
`,sN=T.button`
    ${lc["body-baseline-regular"]}
    color: ${sc.text};
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
`,lN=T.span`
    color: ${sc["text-disabled"]};
`,cN=T(Hc)`
    margin-right: 0.5rem;
    color: ${sc["text-disabled"]};
`,dN=T(He)`
    color: ${sc["icon-warning"]};
    margin-right: 0.5rem;
    height: ${lc.Spec["body-size-baseline"]};
    width: ${lc.Spec["body-size-baseline"]};
`,uN=T.span`
    color: ${sc["text-warning"]};
`,hN=T.span`
    ${lc["body-baseline-semibold"]}
    color: ${sc.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,gN=T(cd)`
    margin-top: 0.5rem;
`,pN=({label:n,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:c="•",maskRange:d,unmaskRange:h,maskRegex:g,disableMaskUnmask:p,alert:f,maskTransformer:m,onMask:b,onUnmask:v,onTryAgain:y})=>{const[x,$]=a(s);u((()=>{$(s)}),[s]);const w=()=>{switch("fail"===l&&y&&y(),x){case"masked":v&&v(),$("unmasked");break;case"unmasked":b&&b(),$("masked")}},C=()=>"string"!=typeof i?i:"masked"===x?su.maskValue(i,{maskChar:c,maskRange:d,unmaskRange:h,maskRegex:g,maskTransformer:m}):i,S=()=>{switch(l){case"fail":return t(r,{children:[e(dN,{}),e(uN,{children:"Error"}),e(hN,{children:"Try again?"})]});case"loading":return t(r,{children:[e(cN,{}),e(lN,{children:"Retrieving..."})]});default:return t(r,{children:[C(),e(aN,{children:"masked"===x?e(Ne,{"data-testid":"masked-icon"}):e(We,{"data-testid":"unmasked-icon"})})]})}};return t(oN,Object.assign({$widthStyle:o},{children:[e(b$,{children:n}),"string"!=typeof i?i:x?p?e(kc.BodyBL,{children:C()}):e(sN,Object.assign({"data-testid":"clickable-label",onClick:w,"aria-busy":"loading"===l,"aria-live":"polite",type:"button"},{children:S()})):e(kc.BodyBL,{children:i}),f&&e(gN,Object.assign({sizeType:"small"},f))]}))},fN=Object.assign((n=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:c,background:d=!0,stretch:u,onMask:h,onUnmask:g,onTryAgain:p}=n,f=dt(n,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{h&&h(e)},b=e=>()=>{g&&g(e)},v=e=>()=>{p&&p(e)},y=()=>{if(i&&i.length>0){const t=i.map(((t,r)=>e(pN,Object.assign({},t,{onMask:m(t),onUnmask:b(t),onTryAgain:v(t)}),r)));return e(nN,Object.assign({$stretch:u},{children:t}))}return null};return e(JL,Object.assign({$background:d},f,{type:"grid"},{children:c||t(r,{children:[o&&e(eN,Object.assign({weight:"semibold",$stretch:u},{children:o})),a&&e(tN,Object.assign({$stretch:u},{children:a})),s&&e(rN,Object.assign({"data-id":"top-section",$stretch:u},{children:s})),y(),l&&e(rN,Object.assign({"data-id":"bottom-section",$stretch:u},{children:l}))]})}))}),{ItemSection:iN,Item:pN}),mN={collections:{base:{InputBoxShadow:F`
        inset 0 0 4px 0px ${lI.Shadow.Accent}
    `,InputErrorBoxShadow:F`
        inset 0 0 4px 0px ${lI.Shadow.Red}
    `,ElevationBoxShadow:F`
      0px 2px 8px ${lI.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:F`
        inset 0 0 3px 0px ${lI.Shadow.Accent}
    `,InputErrorBoxShadow:F`
        inset 0 0 3px 0px ${lI.Shadow.Red}
    `,ElevationBoxShadow:F`
      0px 2px 8px ${lI.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},bN=e=>t=>{var r,n;const i=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,o=iI(mN,null==i?void 0:i[oI.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?nI(o,e,i.options.designToken):nI(o,e)},vN={InputBoxShadow:bN("InputBoxShadow"),InputErrorBoxShadow:bN("InputErrorBoxShadow"),ElevationBoxShadow:bN("ElevationBoxShadow"),Table:{Header:bN("Table.Header"),Cell:{Primary:bN("Table.Cell.Primary"),Secondary:bN("Table.Cell.Secondary"),Selected:bN("Table.Cell.Selected"),Hover:bN("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:bN("Button.Danger.BackgroundColor"),Hover:bN("Button.Danger.Hover"),Primary:bN("Button.Danger.Primary"),Border:bN("Button.Danger.Border")}}},yN=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=dt(t,["children","data-testid","type","stretch"]);return e(xN,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),xN=T.div`
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

                ${df.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${df.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${df.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return F`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${df.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${df.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return F`
                    display: flex;
                    flex-direction: column;
                `;default:return F`
                    display: flex;
                `}}}
`,$N=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=dt(t,["children","data-testid","stretch"]);return e(wN,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),wN=T.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?F`
                ${df.MaxWidth.tablet} {
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
`,CN=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=dt(t,["children","data-testid","className","type","stretch"]);return e($N,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e(yN,Object.assign({"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s},{children:n}))}))})),SN={Section:$N,Container:yN,Content:CN,ColDiv:gf};var kN;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(kN||(kN={}));const ON=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,DN=T.ol`
    ${e=>ON(e.bottomMargin)}
    margin-left: ${3}rem;

    ${df.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>xI.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${lI.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",n=e.counterSeparator||")";return F`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return F`
                counter-reset: list ${t?r+1:r-1};
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
`,jN=T.ul`
    ${e=>ON(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>xI.getTextStyle(e.size,"regular")}
        color: ${lI.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,EN={Ul:t=>{var{size:r="Body",children:n}=t,i=dt(t,["size","children"]);return e(jN,Object.assign({size:r},i,{children:n}))},Ol:t=>{var{size:r="Body",children:n}=t,i=dt(t,["size","children"]);return e(DN,Object.assign({size:r},i,{children:n}))}},_N={[oI.colorScheme]:"base",[oI.textStyleScheme]:"base",[oI.designTokenScheme]:"base",[oI.resourceScheme]:"base"},TN={[oI.colorScheme]:"bookingsg",[oI.textStyleScheme]:"base",[oI.designTokenScheme]:"base",[oI.resourceScheme]:"bookingsg"},FN={[oI.colorScheme]:"rbs",[oI.textStyleScheme]:"base",[oI.designTokenScheme]:"rbs",[oI.resourceScheme]:"rbs"},MN={[oI.colorScheme]:"mylegacy",[oI.textStyleScheme]:"base",[oI.designTokenScheme]:"base",[oI.resourceScheme]:"mylegacy"},AN={[oI.colorScheme]:"ccube",[oI.textStyleScheme]:"base",[oI.designTokenScheme]:"base",[oI.resourceScheme]:"ccube"},BN={[oI.colorScheme]:"oneservice",[oI.textStyleScheme]:"oneservice",[oI.designTokenScheme]:"base",[oI.resourceScheme]:"base"};export{bA as $,ed as A,Rd as B,sc as C,gp as D,im as E,xm as F,qM as G,X$ as H,Hp as I,ZM as J,J$ as K,ud as L,gO as M,wj as N,kj as O,Oj as P,qj as Q,N$ as R,tm as S,Gj as T,nE as U,cE as V,rF as W,hA as X,pA as Y,EO as Z,ut as _,rm as a,EN as a$,yA as a0,zf as a1,fB as a2,mB as a3,pB as a4,DB as a5,_B as a6,MB as a7,RB as a8,$f as a9,vc as aA,yc as aB,xc as aC,a_ as aD,JR as aE,DP as aF,PP as aG,GP as aH,l_ as aI,AL as aJ,VL as aK,PE as aL,GL as aM,ZL as aN,kI as aO,kc as aP,fN as aQ,f_ as aR,lI as aS,vN as aT,SN as aU,df as aV,uf as aW,xI as aX,pI as aY,$I as aZ,kN as a_,QB as aa,Wj as ab,rI as ac,FI as ad,TI as ae,o$ as af,u$ as ag,s$ as ah,Vj as ai,Oz as aj,Tz as ak,rE as al,Qz as am,vR as an,MR as ao,IR as ap,lc as aq,cc as ar,dc as as,uc as at,hc as au,gc as av,pc as aw,fc as ax,mc as ay,bc as az,cd as b,_N as b0,TN as b1,FN as b2,MN as b3,AN as b4,BN as b5,oI as b6,Vo as c,fd as d,yd as e,wu as f,Xo as g,qc as h,Ou as i,wh as j,kh as k,Ah as l,Cg as m,Np as n,Xp as o,of as p,bf as q,Ef as r,Rg as s,kg as t,Um as u,aT as v,NT as w,pF as x,b_ as y,KM as z};
//# sourceMappingURL=index.4a12eb4f.js.map
