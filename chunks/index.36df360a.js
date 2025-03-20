import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,forwardRef as p,useCallback as g,useContext as f,useMemo as m,useImperativeHandle as b,lazy as v,Suspense as y,useReducer as x,memo as w,createContext as $,Fragment as C,Children as S,createElement as k}from"react";import D,{findDOMNode as T,unstable_batchedUpdates as O,createPortal as E}from"react-dom";import{ChevronUpIcon as _}from"@lifesg/react-icons/chevron-up";import M,{css as F,keyframes as I,useTheme as A}from"styled-components";import{ExternalIcon as B}from"@lifesg/react-icons/external";import{ArrowRightIcon as j}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as z}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as R}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as P}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as L}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as N,SquareIcon as H,SquareFillIcon as W,SquareTickFillIcon as Y,MinusSquareFillIcon as V,ClockIcon as U,ArrowUpIcon as K,ArrowDownIcon as X,ArrowRightIcon as q,PencilIcon as G,EraserIcon as Z,DownloadIcon as Q,CrossIcon as J,FilterIcon as ee,PlaceholderImageIcon as te,MagnifierPlusIcon as re,MagnifierMinusIcon as ne,ChevronLeftIcon as ie,ChevronRightIcon as oe,CircleIcon as ae,CircleDotIcon as se,ChevronUpIcon as le,ExclamationCircleFillIcon as ce,TickIcon as de,RefreshIcon as ue,ICircleFillIcon as he,ExclamationTriangleFillIcon as pe,TickCircleFillIcon as ge}from"@lifesg/react-icons";import{ChevronDownIcon as fe}from"@lifesg/react-icons/chevron-down";import{ChevronRightIcon as me}from"@lifesg/react-icons/chevron-right";import{ChevronLeftIcon as be}from"@lifesg/react-icons/chevron-left";import{useFloatingTree as ve,useFloating as ye,autoUpdate as xe,offset as we,flip as $e,shift as Ce,limitShift as Se,size as ke,useTransitionStyles as De,useClick as Te,useDismiss as Oe,useInteractions as Ee,FloatingPortal as _e,FloatingFocusManager as Me,FloatingTree as Fe,useFloatingNodeId as Ie,FloatingNode as Ae,useHover as Be}from"@floating-ui/react";import{CrossIcon as je}from"@lifesg/react-icons/cross";import{StarIcon as ze}from"@lifesg/react-icons/star";import{StarFillIcon as Re}from"@lifesg/react-icons/star-fill";import{CloudArrowUpFillIcon as Pe}from"@lifesg/react-icons/cloud-arrow-up-fill";import{MagnifierIcon as Le}from"@lifesg/react-icons/magnifier";import{EyeIcon as Ne}from"@lifesg/react-icons/eye";import{EyeSlashIcon as He}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as We}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as Ye}from"@lifesg/react-icons/square";import{SquareTickFillIcon as Ve}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Ue}from"@lifesg/react-icons/tick";import{CaretRightIcon as Ke}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Xe}from"@lifesg/react-icons/minus-square-fill";import{CircleIcon as qe}from"@lifesg/react-icons/circle";import{CircleDotIcon as Ge}from"@lifesg/react-icons/circle-dot";import{BinIcon as Ze}from"@lifesg/react-icons/bin";import{PencilIcon as Qe}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Je}from"@lifesg/react-icons/drag-handle";import{MinusIcon as et}from"@lifesg/react-icons/minus";import{PlusIcon as tt}from"@lifesg/react-icons/plus";import{MenuIcon as rt}from"@lifesg/react-icons/menu";import{Chevron2LeftIcon as nt}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as it}from"@lifesg/react-icons/chevron-2-right";import{ChevronLineLeftIcon as ot}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as at}from"@lifesg/react-icons/chevron-line-right";import{EllipsisHorizontalIcon as st}from"@lifesg/react-icons/ellipsis-horizontal";import{StarHalfIcon as lt}from"@lifesg/react-icons/star-half";const ct=i.createContext(!1);function dt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function ut(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function ht(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function pt(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function gt(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ft=function(e,t){return ft=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},ft(e,t)};var mt=function(){return mt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},mt.apply(this,arguments)};var bt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var vt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},yt="object"==typeof bt&&bt&&bt.Object===Object&&bt,xt="object"==typeof self&&self&&self.Object===Object&&self,wt=yt||xt||Function("return this")(),$t=wt,Ct=function(){return $t.Date.now()},St=/\s/;var kt=function(e){for(var t=e.length;t--&&St.test(e.charAt(t)););return t},Dt=/^\s+/;var Tt=function(e){return e?e.slice(0,kt(e)+1).replace(Dt,""):e},Ot=wt.Symbol,Et=Ot,_t=Object.prototype,Mt=_t.hasOwnProperty,Ft=_t.toString,It=Et?Et.toStringTag:void 0;var At=function(e){var t=Mt.call(e,It),r=e[It];try{e[It]=void 0;var n=!0}catch(e){}var i=Ft.call(e);return n&&(t?e[It]=r:delete e[It]),i},Bt=Object.prototype.toString;var jt=At,zt=function(e){return Bt.call(e)},Rt=Ot?Ot.toStringTag:void 0;var Pt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Rt&&Rt in Object(e)?jt(e):zt(e)},Lt=function(e){return null!=e&&"object"==typeof e};var Nt=Tt,Ht=vt,Wt=function(e){return"symbol"==typeof e||Lt(e)&&"[object Symbol]"==Pt(e)},Yt=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,Ut=/^0o[0-7]+$/i,Kt=parseInt;var Xt=vt,qt=Ct,Gt=function(e){if("number"==typeof e)return e;if(Wt(e))return NaN;if(Ht(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ht(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Nt(e);var r=Vt.test(e);return r||Ut.test(e)?Kt(e.slice(2),r?2:8):Yt.test(e)?NaN:+e},Zt=Math.max,Qt=Math.min;var Jt=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function f(){var e=qt();if(g(e))return m(e);s=setTimeout(f,function(e){var r=t-(e-l);return u?Qt(r,o-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?p(e):(n=i=void 0,a)}function b(){var e=qt(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?p(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),p(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=Gt(t)||0,Xt(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Zt(Gt(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(qt())},b},er=Jt,tr=vt;var rr=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return tr(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),er(e,t,{leading:n,maxWait:t,trailing:i})},nr=function(e,t,r,n){switch(t){case"debounce":return Jt(e,r,n);case"throttle":return rr(e,r,n);default:return e}},ir=function(e){return"function"==typeof e},or=function(){return"undefined"==typeof window},ar=function(e){return e instanceof Element||e instanceof HTMLDocument},sr=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&ir(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!or()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(or())return null;if(t)return document.querySelector(t);if(n&&ar(n))return n;if(r.targetRef&&ar(r.targetRef.current))return r.targetRef.current;var i=T(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=sr(s,r.setState.bind(r),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!or()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return ir(t)?"renderProp":ir(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,c=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=l(),r.observableElement=null,or()||(r.resizeHandler=nr(r.createResizeHandler,i,a,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}ft(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){or()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(d);var lr=or()?u:h;function cr(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,p=e.targetRef,g=e.observerOptions,f=e.onResize,m=o(r),b=o(null),v=null!=p?p:b,y=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return lr((function(){if(!or()){var e=sr(f,$,d,h);y.current=nr((function(t){(d||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!or()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,g),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,d,h,f,g,v.current]),mt({ref:v},w)}var dr=Object.defineProperty,ur={};((e,t)=>{for(var r in t)dr(e,r,{get:t[r],enumerable:!0})})(ur,{assign:()=>Yr,colors:()=>Nr,createStringInterpolator:()=>zr,skipAnimation:()=>Hr,to:()=>Rr,willAdvance:()=>Wr});var hr=Or(),pr=e=>Sr(e,hr),gr=Or();pr.write=e=>Sr(e,gr);var fr=Or();pr.onStart=e=>Sr(e,fr);var mr=Or();pr.onFrame=e=>Sr(e,mr);var br=Or();pr.onFinish=e=>Sr(e,br);var vr=[];pr.setTimeout=(e,t)=>{const r=pr.now()+t,n=()=>{const e=vr.findIndex((e=>e.cancel==n));~e&&vr.splice(e,1),$r-=~e?1:0},i={time:r,handler:e,cancel:n};return vr.splice(yr(r),0,i),$r+=1,kr(),i};var yr=e=>~(~vr.findIndex((t=>t.time>e))||~vr.length);pr.cancel=e=>{fr.delete(e),mr.delete(e),br.delete(e),hr.delete(e),gr.delete(e)},pr.sync=e=>{Cr=!0,pr.batchedUpdates(e),Cr=!1},pr.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,pr.onStart(r)}return n.handler=e,n.cancel=()=>{fr.delete(r),t=null},n};var xr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};pr.use=e=>xr=e,pr.now="undefined"!=typeof performance?()=>performance.now():Date.now,pr.batchedUpdates=e=>e(),pr.catch=console.error,pr.frameLoop="always",pr.advance=()=>{"demand"!==pr.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Tr()};var wr=-1,$r=0,Cr=!1;function Sr(e,t){Cr?(t.delete(e),e(0)):(t.add(e),kr())}function kr(){wr<0&&(wr=0,"demand"!==pr.frameLoop&&xr(Dr))}function Dr(){~wr&&(xr(Dr),pr.batchedUpdates(Tr))}function Tr(){const e=wr;wr=pr.now();const t=yr(wr);t&&(Er(vr.splice(0,t),(e=>e.handler())),$r-=t),$r?(fr.flush(),hr.flush(e?Math.min(64,wr-e):16.667),mr.flush(),gr.flush(),br.flush()):wr=-1}function Or(){let e=new Set,t=e;return{add(r){$r+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>($r-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,$r-=t.size,Er(t,(t=>t(r)&&e.add(t))),$r+=e.size,t=e)}}}function Er(e,t){e.forEach((e=>{try{t(e)}catch(e){pr.catch(e)}}))}function _r(){}var Mr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Fr(e,t){if(Mr.arr(e)){if(!Mr.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Ir=(e,t)=>e.forEach(t);function Ar(e,t,r){if(Mr.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Br=e=>Mr.und(e)?[]:Mr.arr(e)?e:[e];function jr(e,t){if(e.size){const r=Array.from(e);e.clear(),Ir(r,t)}}var zr,Rr,Pr=(e,...t)=>jr(e,(e=>e(...t))),Lr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Nr=null,Hr=!1,Wr=_r,Yr=e=>{e.to&&(Rr=e.to),e.now&&(pr.now=e.now),void 0!==e.colors&&(Nr=e.colors),null!=e.skipAnimation&&(Hr=e.skipAnimation),e.createStringInterpolator&&(zr=e.createStringInterpolator),e.requestAnimationFrame&&pr.use(e.requestAnimationFrame),e.batchedUpdates&&(pr.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Wr=e.willAdvance),e.frameLoop&&(pr.frameLoop=e.frameLoop)},Vr=new Set,Ur=[],Kr=[],Xr=0,qr={get idle(){return!Vr.size&&!Ur.length},start(e){Xr>e.priority?(Vr.add(e),pr.onStart(Gr)):(Zr(e),pr(Jr))},advance:Jr,sort(e){if(Xr)pr.onFrame((()=>qr.sort(e)));else{const t=Ur.indexOf(e);~t&&(Ur.splice(t,1),Qr(e))}},clear(){Ur=[],Vr.clear()}};function Gr(){Vr.forEach(Zr),Vr.clear(),pr(Jr)}function Zr(e){Ur.includes(e)||Qr(e)}function Qr(e){Ur.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Ur,(t=>t.priority>e.priority)),0,e)}function Jr(e){const t=Kr;for(let r=0;r<Ur.length;r++){const n=Ur[r];Xr=n.priority,n.idle||(Wr(n),n.advance(e),n.idle||t.push(n))}return Xr=0,(Kr=Ur).length=0,(Ur=t).length>0}var en="[-+]?\\d*\\.?\\d+",tn=en+"%";function rn(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var nn=new RegExp("rgb"+rn(en,en,en)),on=new RegExp("rgba"+rn(en,en,en,en)),an=new RegExp("hsl"+rn(en,tn,tn)),sn=new RegExp("hsla"+rn(en,tn,tn,en)),ln=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,cn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,dn=/^#([0-9a-fA-F]{6})$/,un=/^#([0-9a-fA-F]{8})$/;function hn(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function pn(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=hn(i,n,e+1/3),a=hn(i,n,e),s=hn(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function gn(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function fn(e){return(parseFloat(e)%360+360)%360/360}function mn(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function bn(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function vn(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=dn.exec(e))?parseInt(t[1]+"ff",16)>>>0:Nr&&void 0!==Nr[e]?Nr[e]:(t=nn.exec(e))?(gn(t[1])<<24|gn(t[2])<<16|gn(t[3])<<8|255)>>>0:(t=on.exec(e))?(gn(t[1])<<24|gn(t[2])<<16|gn(t[3])<<8|mn(t[4]))>>>0:(t=ln.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=un.exec(e))?parseInt(t[1],16)>>>0:(t=cn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=an.exec(e))?(255|pn(fn(t[1]),bn(t[2]),bn(t[3])))>>>0:(t=sn.exec(e))?(pn(fn(t[1]),bn(t[2]),bn(t[3]))|mn(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var yn=(e,t,r)=>{if(Mr.fun(e))return e;if(Mr.arr(e))return yn({range:e,output:t,extrapolate:r});if(Mr.str(e.output[0]))return zr(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var xn=1.70158,wn=1.525*xn,$n=xn+1,Cn=2*Math.PI/3,Sn=2*Math.PI/4.5,kn=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Dn={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>$n*e*e*e-xn*e*e,easeOutBack:e=>1+$n*Math.pow(e-1,3)+xn*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-wn)/2:(Math.pow(2*e-2,2)*((wn+1)*(2*e-2)+wn)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Cn),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Cn)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Sn)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Sn)/2+1,easeInBounce:e=>1-kn(1-e),easeOutBounce:kn,easeInOutBounce:e=>e<.5?(1-kn(1-2*e))/2:(1+kn(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Tn=Symbol.for("FluidValue.get"),On=Symbol.for("FluidValue.observers"),En=e=>Boolean(e&&e[Tn]),_n=e=>e&&e[Tn]?e[Tn]():e,Mn=e=>e[On]||null;function Fn(e,t){const r=e[On];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var In=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");An(this,e)}},An=(e,t)=>Rn(e,Tn,t);function Bn(e,t){if(e[Tn]){let r=e[On];r||Rn(e,On,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function jn(e,t){const r=e[On];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[On]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var zn,Rn=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Pn=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ln=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Nn=new RegExp(`(${Pn.source})(%|[a-z]+)`,"i"),Hn=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Wn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Yn=e=>{const[t,r]=Vn(e);if(!t||Lr())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Wn.test(r)?Yn(r):r||e},Vn=e=>{const t=Wn.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Un=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Kn=e=>{zn||(zn=Nr?new RegExp(`(${Object.keys(Nr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>_n(e).replace(Wn,Yn).replace(Ln,vn).replace(zn,vn))),r=t.map((e=>e.match(Pn).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=n.map((t=>yn({...e,output:t})));return e=>{const r=!Nn.test(t[0])&&t.find((e=>Nn.test(e)))?.replace(Pn,"");let n=0;return t[0].replace(Pn,(()=>`${i[n++](e)}${r||""}`)).replace(Hn,Un)}},Xn="react-spring: ",qn=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Xn}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Gn=qn(console.warn);var Zn=qn(console.warn);function Qn(e){return Mr.str(e)&&("#"==e[0]||/\d/.test(e)||!Lr()&&Wn.test(e)||e in(Nr||{}))}var Jn=Lr()?u:h,ei=()=>{const e=o(!1);return Jn((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ti(){const e=a()[1],t=ei();return()=>{t.current&&e(Math.random())}}var ri=e=>u(e,ni),ni=[];function ii(e){const t=o();return u((()=>{t.current=e})),t.current}var oi=Symbol.for("Animated:node"),ai=e=>e&&e[oi],si=(e,t)=>{return r=e,n=oi,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},li=e=>e&&e[oi]&&e[oi].getPayload(),ci=class{constructor(){si(this,this)}getPayload(){return this.payload||[]}},di=class extends ci{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Mr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new di(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Mr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Mr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ui=class extends di{constructor(e){super(0),this._string=null,this._toString=yn({output:[e,e]})}static create(e){return new ui(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Mr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=yn({output:[this.getValue(),e]})),this._value=0,super.reset()}},hi={dependencies:null},pi=class extends ci{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ar(this.source,((r,n)=>{var i;(i=r)&&i[oi]===i?t[n]=r.getValue(e):En(r)?t[n]=_n(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ir(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ar(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){hi.dependencies&&En(e)&&hi.dependencies.add(e);const t=li(e);t&&Ir(t,(e=>this.add(e)))}},gi=class extends pi{constructor(e){super(e)}static create(e){return new gi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(fi)),!0)}};function fi(e){return(Qn(e)?ui:di).create(e)}function mi(e){const t=ai(e);return t?t.constructor:Mr.arr(e)?gi:Qn(e)?ui:di}var bi=(e,t)=>{const r=!Mr.fun(e)||e.prototype&&e.prototype.isReactComponent;return p(((i,a)=>{const s=o(null),l=r&&g((e=>{s.current=function(e,t){e&&(Mr.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,d]=function(e,t){const r=new Set;hi.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new pi(e),hi.dependencies=null,[e,r]}(i,t),h=ti(),p=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new vi(p,d),m=o();Jn((()=>(m.current=f,Ir(d,(e=>Bn(e,f))),()=>{m.current&&(Ir(m.current.deps,(e=>jn(e,m.current))),pr.cancel(m.current.update))}))),u(p,[]),ri((()=>()=>{const e=m.current;Ir(e.deps,(t=>jn(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:l})}))},vi=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&pr.write(this.update)}};var yi=Symbol.for("AnimatedComponent"),xi=e=>Mr.str(e)?e:e&&Mr.str(e.displayName)?e.displayName:Mr.fun(e)&&e.name||null;function wi(e,...t){return Mr.fun(e)?e(...t):e}var $i=(e,t)=>!0===e||!!(t&&e&&(Mr.fun(e)?e(t):Br(e).includes(t))),Ci=(e,t)=>Mr.obj(e)?t&&e[t]:e,Si=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ki=e=>e,Di=(e,t=ki)=>{let r=Ti;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Mr.und(r)||(n[i]=r)}return n},Ti=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Oi={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ei(e){const t=function(e){const t={};let r=0;if(Ar(e,((e,n)=>{Oi[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ar(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function _i(e){return e=_n(e),Mr.arr(e)?e.map(_i):Qn(e)?ur.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Mi(e){return Mr.fun(e)||Mr.arr(e)&&Mr.obj(e[0])}var Fi={tension:170,friction:26,mass:1,damping:1,easing:Dn.linear,clamp:!1},Ii=class{constructor(){this.velocity=0,Object.assign(this,Fi)}};function Ai(e,t){if(Mr.und(t.decay)){const r=!Mr.und(t.tension)||!Mr.und(t.friction);!r&&Mr.und(t.frequency)&&Mr.und(t.damping)&&Mr.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Bi=[],ji=class{constructor(){this.changed=!1,this.values=Bi,this.toValues=null,this.fromValues=Bi,this.config=new Ii,this.immediate=!1}};function zi(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=$i(r.cancel??n?.cancel,t);if(d)p();else{Mr.und(r.pause)||(i.paused=$i(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||$i(e,t)),l=wi(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-pr.now()}function h(){l>0&&!ur.skipAnimation?(i.delayed=!0,c=pr.setTimeout(p,l),i.pauseQueue.add(u),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Ri=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ni(e.get()):t.every((e=>e.noop))?Pi(e.get()):Li(e.get(),t.every((e=>e.finished))),Pi=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Li=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ni=e=>({value:e,cancelled:!0,finished:!1});function Hi(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Di(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),p=e=>{const t=i<=(r.cancelId||0)&&Ni(n)||i!==r.asyncId&&Li(n,!1);if(t)throw e.result=t,u(e),e},g=(e,t)=>{const o=new Yi,a=new Vi;return(async()=>{if(ur.skipAnimation)throw Wi(r),a.result=Li(n,!1),u(a),a;p(o);const s=Mr.obj(e)?{...e}:{...t,to:e};s.parentId=i,Ar(c,((e,t)=>{Mr.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(ur.skipAnimation)return Wi(r),Li(n,!1);try{let t;t=Mr.arr(e)?(async e=>{for(const t of e)await g(t)})(e):Promise.resolve(e(g,n.stop.bind(n))),await Promise.all([t.then(d),h]),f=Li(n.get(),!0,!1)}catch(e){if(e instanceof Yi)f=e.result;else{if(!(e instanceof Vi))throw e;f=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Mr.fun(a)&&pr.batchedUpdates((()=>{a(f,n,n.item)})),f})():l}function Wi(e,t){jr(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Yi=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Vi=class extends Error{constructor(){super("SkipAnimationSignal")}},Ui=e=>e instanceof Xi,Ki=1,Xi=class extends In{constructor(){super(...arguments),this.id=Ki++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ai(this);return e&&e.getValue()}to(...e){return ur.to(this,e)}interpolate(...e){return Gn(`${Xn}The "interpolate" function is deprecated in v9 (use "to" instead)`),ur.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Fn(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||qr.sort(this),Fn(this,{type:"priority",parent:this,priority:e})}},qi=Symbol.for("SpringPhase"),Gi=e=>(1&e[qi])>0,Zi=e=>(2&e[qi])>0,Qi=e=>(4&e[qi])>0,Ji=(e,t)=>t?e[qi]|=3:e[qi]&=-3,eo=(e,t)=>t?e[qi]|=4:e[qi]&=-5,to=class extends Xi{constructor(e,t){if(super(),this.animation=new ji,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Mr.und(e)||!Mr.und(t)){const r=Mr.obj(e)?{...e}:{...t,from:e};Mr.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Zi(this)||this._state.asyncTo)||Qi(this)}get goal(){return _n(this.animation.to)}get velocity(){const e=ai(this);return e instanceof di?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Gi(this)}get isAnimating(){return Zi(this)}get isPaused(){return Qi(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=li(n.to);!a&&En(n.to)&&(i=Br(_n(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ui?1:a?a[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Mr.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Mr.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Mr.und(n),p=r==c?s.v0>0:r<c;let g,f=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(g=Math.abs(a)>t,g||(d=Math.abs(c-u)<=h,!d));++e){l&&(f=u==c||u>c==p,f&&(a=-a*n,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=ai(this),l=s.getValue();if(t){const e=_n(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return pr.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Zi(this)){const{to:e,config:t}=this.animation;pr.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Mr.und(e)?(r=this.queue||[],this.queue=[]):r=[Mr.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Ri(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Wi(this._state,e&&this._lastCallId),pr.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Mr.obj(r)?r[t]:r,(null==r||Mi(r))&&(r=void 0),n=Mr.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Gi(this)||(e.reverse&&([r,n]=[n,r]),n=_n(n),Mr.und(n)?ai(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Di(e,((e,t)=>/^on/.test(t)?Ci(e,r):e))),lo(this,e,"onProps"),co(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return zi(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{Qi(this)||(eo(this,!0),Pr(o.pauseQueue),co(this,"onPause",Li(this,ro(this,this.animation.to)),this))},resume:()=>{Qi(this)&&(eo(this,!1),Zi(this)&&this._resume(),Pr(o.resumeQueue),co(this,"onResume",Li(this,ro(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=no(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ni(this));const n=!Mr.und(e.to),i=!Mr.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Ni(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||n||t.default&&!Mr.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!Fr(u,c);h&&(s.from=u),u=_n(u);const p=!Fr(d,l);p&&this._focus(d);const g=Mi(t.to),{config:f}=s,{decay:m,velocity:b}=f;(n||i)&&(f.velocity=0),t.config&&!g&&function(e,t,r){r&&(Ai(r={...r},t),t={...r,...t}),Ai(e,t),Object.assign(e,t);for(const t in Fi)null==e[t]&&(e[t]=Fi[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Mr.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(f,wi(t.config,o),t.config!==a.config?wi(a.config,o):void 0);let v=ai(this);if(!v||Mr.und(d))return r(Li(this,!0));const y=Mr.und(t.reset)?i&&!t.default:!Mr.und(u)&&$i(t.reset,o),x=y?u:this.get(),w=_i(d),$=Mr.num(w)||Mr.arr(w)||Qn(w),C=!g&&(!$||$i(a.immediate||t.immediate,o));if(p){const e=mi(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let k=En(d),D=!1;if(!k){const e=y||!Gi(this)&&h;(p||e)&&(D=Fr(_i(x),w),k=!D),(Fr(s.immediate,C)||C)&&Fr(f.decay,m)&&Fr(f.velocity,b)||(k=!0)}if(D&&Zi(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!g&&((k||En(l))&&(s.values=v.getPayload(),s.toValues=En(d)?null:S==ui?[1]:Br(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),k)){const{onRest:e}=s;Ir(so,(e=>lo(this,t,e)));const n=Li(this,ro(this,l));Pr(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&pr.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?wi(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),g?r(Hi(t.to,t,this._state,this)):k?this._start():Zi(this)&&!p?this._pendingCalls.add(r):r(Pi(x))}_focus(e){const t=this.animation;e!==t.to&&(Mn(this)&&this._detach(),t.to=e,Mn(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;En(t)&&(Bn(t,this),Ui(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;En(e)&&jn(e,this)}_set(e,t=!0){const r=_n(e);if(!Mr.und(r)){const e=ai(this);if(!e||!Fr(r,e.getValue())){const n=mi(r);e&&e.constructor==n?e.setValue(r):si(this,n.create(r)),e&&pr.batchedUpdates((()=>{this._onChange(r,t)}))}}return ai(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,co(this,"onStart",Li(this,ro(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),wi(this.animation.onChange,e,this)),wi(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ai(this).reset(_n(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Zi(this)||(Ji(this,!0),Qi(this)||this._resume())}_resume(){ur.skipAnimation?this.finish():qr.start(this)}_stop(e,t){if(Zi(this)){Ji(this,!1);const r=this.animation;Ir(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Fn(this,{type:"idle",parent:this});const n=t?Ni(this.get()):Li(this.get(),ro(this,e??r.to));Pr(this._pendingCalls,n),r.changed&&(r.changed=!1,co(this,"onRest",n,this))}}};function ro(e,t){const r=_i(t);return Fr(_i(e.get()),r)}function no(e,t=e.loop,r=e.to){const n=wi(t);if(n){const i=!0!==n&&Ei(n),o=(i||e).reverse,a=!i||i.reset;return io({...e,loop:t,default:!1,pause:void 0,to:!o||Mi(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function io(e){const{to:t,from:r}=e=Ei(e),n=new Set;return Mr.obj(t)&&ao(t,n),Mr.obj(r)&&ao(r,n),e.keys=n.size?Array.from(n):null,e}function oo(e){const t=io(e);return Mr.und(t.default)&&(t.default=Di(t)),t}function ao(e,t){Ar(e,((e,r)=>null!=e&&t.add(r)))}var so=["onStart","onRest","onChange","onPause","onResume"];function lo(e,t,r){e.animation[r]=t[r]!==Si(t,r)?Ci(t[r],e.key):void 0}function co(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var uo=["onStart","onChange","onRest"],ho=1,po=class{constructor(e,t){this.id=ho++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Mr.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(io(e)),this}start(e){let{queue:t}=this;return e?t=Br(e).map(io):this.queue=[],this._flush?this._flush(this,t):(xo(this,t),go(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ir(Br(t),(t=>r[t].stop(!!e)))}else Wi(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Mr.und(e))this.start({pause:!0});else{const t=this.springs;Ir(Br(e),(e=>t[e].pause()))}return this}resume(e){if(Mr.und(e))this.start({pause:!1});else{const t=this.springs;Ir(Br(e),(e=>t[e].resume()))}return this}each(e){Ar(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,jr(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&jr(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,jr(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}pr.onFrame(this._onFrame)}};function go(e,t){return Promise.all(t.map((t=>fo(e,t)))).then((t=>Ri(e,t)))}async function fo(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Mr.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=Mr.arr(i)||Mr.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Ir(uo,(r=>{const n=t[r];if(Mr.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Pr(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===Si(t,"cancel");(d||p&&u.asyncId)&&h.push(zi(++e._lastAsyncId,{props:t,state:u,actions:{pause:_r,resume:_r,start(t,r){p?(Wi(u,e._lastAsyncId),r(Ni(e))):(t.onRest=s,r(Hi(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const g=Ri(e,await Promise.all(h));if(a&&g.finished&&(!r||!g.noop)){const r=no(t,a,i);if(r)return xo(e,[r]),fo(e,r,!0)}return l&&pr.batchedUpdates((()=>l(g,e,e.item))),g}function mo(e,t){const r={...e.springs};return t&&Ir(Br(t),(e=>{Mr.und(e.keys)&&(e=io(e)),Mr.obj(e.to)||(e={...e,to:void 0}),yo(r,e,(e=>vo(e)))})),bo(e,r),r}function bo(e,t){Ar(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Bn(t,e))}))}function vo(e,t){const r=new to;return r.key=e,t&&Bn(r,t),r}function yo(e,t,r){t.keys&&Ir(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function xo(e,t){Ir(t,(t=>{yo(e.springs,t,(t=>vo(t,e)))}))}var wo,$o,Co=({children:e,...t})=>{const r=f(So),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=o(),i=n.current;let s=i;if(s){const r=Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs));r||(s={inputs:t,result:e()})}else s=r;return u((()=>{n.current=s,i==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=So;return n.createElement(l,{value:t},e)},So=(wo=Co,$o={},Object.assign(wo,n.createContext($o)),wo.Provider._context=wo,wo.Consumer._context=wo,wo);Co.Provider=So.Provider,Co.Consumer=So.Consumer;var ko=()=>{const e=[],t=function(t){Zn(`${Xn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ir(e,((e,i)=>{if(Mr.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ir(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ir(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ir(e,((e,r)=>{const n=Mr.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Ir(e,((e,n)=>{if(Mr.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Ir(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ir(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Mr.fun(e)?e(r,t):e};return t._getProps=r,t};function Do(e,t){const r=Mr.fun(e),[[n],i]=function(e,t,r){const n=Mr.fun(t)&&t;n&&!r&&(r=[]);const i=m((()=>n||3==arguments.length?ko():void 0),[]),a=o(0),s=ti(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const r=mo(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?go(e,t):new Promise((n=>{bo(e,r),l.queue.push((()=>{n(go(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),d=[],u=ii(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new po(null,l.flush)),r=n?n(i,e):t[i];r&&(d[i]=oo(r))}}m((()=>{Ir(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),m((()=>{h(0,Math.min(u,e))}),r);const p=c.current.map(((e,t)=>mo(e,d[t]))),g=f(Co),b=ii(g),v=g!==b&&function(e){for(const t in e)return!0;return!1}(g);Jn((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Ir(e,(e=>e()))),Ir(c.current,((e,t)=>{i?.add(e),v&&e.start({default:g});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ri((()=>()=>{Ir(l.ctrls,(e=>e.stop(!0)))}));const y=p.map((e=>({...e})));return i?[y,i]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var To=class extends Xi{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=yn(...t);const r=this._get(),n=mi(r);si(this,n.create(r))}advance(e){const t=this._get();Fr(t,this.get())||(ai(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Eo(this._active)&&_o(this)}_get(){const e=Mr.arr(this.source)?this.source.map(_n):Br(_n(this.source));return this.calc(...e)}_start(){this.idle&&!Eo(this._active)&&(this.idle=!1,Ir(li(this),(e=>{e.done=!1})),ur.skipAnimation?(pr.batchedUpdates((()=>this.advance())),_o(this)):qr.start(this))}_attach(){let e=1;Ir(Br(this.source),(t=>{En(t)&&Bn(t,this),Ui(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ir(Br(this.source),(e=>{En(e)&&jn(e,this)})),this._active.clear(),_o(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Br(this.source).reduce(((e,t)=>Math.max(e,(Ui(t)?t.priority:0)+1)),0))}};function Oo(e){return!1!==e.idle}function Eo(e){return!e.size||Array.from(e).every(Oo)}function _o(e){e.idle||(e.idle=!0,Ir(li(e),(e=>{e.done=!0})),Fn(e,{type:"idle",parent:e}))}ur.assign({createStringInterpolator:Kn,to:(e,t)=>new To(e,t)});var Mo=/^--/;function Fo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Mo.test(e)||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}var Io={};var Ao={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bo=["Webkit","Ms","Moz","O"];Ao=Object.keys(Ao).reduce(((e,t)=>(Bo.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Ao);var jo=/^(matrix|translate|scale|rotate|skew)/,zo=/^(translate)/,Ro=/^(rotate|skew)/,Po=(e,t)=>Mr.num(e)&&0!==e?e+t:e,Lo=(e,t)=>Mr.arr(e)?e.every((e=>Lo(e,t))):Mr.num(e)?e===t:parseFloat(e)===t,No=class extends pi{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Po(e,"px"))).join(",")})`,Lo(e,0)]))),Ar(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(jo.test(t)){if(delete n[t],Mr.und(e))return;const r=zo.test(t)?"px":Ro.test(t)?"deg":"";i.push(Br(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Po(i,r)})`,Lo(i,0)]:e=>[`${t}(${e.map((e=>Po(e,r))).join(",")})`,Lo(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Ho(i,o)),super(n)}},Ho=class extends In{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ir(this.inputs,((r,n)=>{const i=_n(r[0]),[o,a]=this.transforms[n](Mr.arr(i)?i:r.map(_n));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ir(this.inputs,(e=>Ir(e,(e=>En(e)&&Bn(e,this)))))}observerRemoved(e){0==e&&Ir(this.inputs,(e=>Ir(e,(e=>En(e)&&jn(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Fn(this,e)}};ur.assign({batchedUpdates:O,createStringInterpolator:Kn,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Wo=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new pi(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=xi(e)||"Anonymous";return(e=Mr.str(e)?o[e]||(o[e]=bi(e,i)):e[yi]||(e[yi]=bi(e,i))).displayName=`Animated(${t})`,e};return Ar(e,((t,r)=>{Mr.arr(e)&&(r=xi(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Io[t]||(Io[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Fo(t,n[t]);Mo.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new No(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Yo=Wo.animated,Vo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Uo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ko(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var Xo=Array.isArray,qo="object"==typeof Vo&&Vo&&Vo.Object===Object&&Vo,Go=qo,Zo="object"==typeof self&&self&&self.Object===Object&&self,Qo=Go||Zo||Function("return this")(),Jo=Qo.Symbol,ea=Jo,ta=Object.prototype,ra=ta.hasOwnProperty,na=ta.toString,ia=ea?ea.toStringTag:void 0;var oa=function(e){var t=ra.call(e,ia),r=e[ia];try{e[ia]=void 0;var n=!0}catch(e){}var i=na.call(e);return n&&(t?e[ia]=r:delete e[ia]),i},aa=Object.prototype.toString;var sa=oa,la=function(e){return aa.call(e)},ca=Jo?Jo.toStringTag:void 0;var da=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ca&&ca in Object(e)?sa(e):la(e)};var ua=function(e){return null!=e&&"object"==typeof e},ha=da,pa=ua;var ga=function(e){return"symbol"==typeof e||pa(e)&&"[object Symbol]"==ha(e)},fa=Xo,ma=ga,ba=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,va=/^\w*$/;var ya=function(e,t){if(fa(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ma(e))||(va.test(e)||!ba.test(e)||null!=t&&e in Object(t))};var xa=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},wa=da,$a=xa;var Ca,Sa=function(e){if(!$a(e))return!1;var t=wa(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ka=Qo["__core-js_shared__"],Da=(Ca=/[^.]+$/.exec(ka&&ka.keys&&ka.keys.IE_PROTO||""))?"Symbol(src)_1."+Ca:"";var Ta=function(e){return!!Da&&Da in e},Oa=Function.prototype.toString;var Ea=function(e){if(null!=e){try{return Oa.call(e)}catch(e){}try{return e+""}catch(e){}}return""},_a=Sa,Ma=Ta,Fa=xa,Ia=Ea,Aa=/^\[object .+?Constructor\]$/,Ba=Function.prototype,ja=Object.prototype,za=Ba.toString,Ra=ja.hasOwnProperty,Pa=RegExp("^"+za.call(Ra).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var La=function(e,t){return null==e?void 0:e[t]},Na=function(e){return!(!Fa(e)||Ma(e))&&(_a(e)?Pa:Aa).test(Ia(e))},Ha=La;var Wa=function(e,t){var r=Ha(e,t);return Na(r)?r:void 0},Ya=Wa(Object,"create"),Va=Ya;var Ua=function(){this.__data__=Va?Va(null):{},this.size=0};var Ka=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Xa=Ya,qa=Object.prototype.hasOwnProperty;var Ga=function(e){var t=this.__data__;if(Xa){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return qa.call(t,e)?t[e]:void 0},Za=Ya,Qa=Object.prototype.hasOwnProperty;var Ja=function(e){var t=this.__data__;return Za?void 0!==t[e]:Qa.call(t,e)},es=Ya;var ts=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=es&&void 0===t?"__lodash_hash_undefined__":t,this},rs=Ua,ns=Ka,is=Ga,os=Ja,as=ts;function ss(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ss.prototype.clear=rs,ss.prototype.delete=ns,ss.prototype.get=is,ss.prototype.has=os,ss.prototype.set=as;var ls=ss;var cs=function(){this.__data__=[],this.size=0};var ds=function(e,t){return e===t||e!=e&&t!=t},us=ds;var hs=function(e,t){for(var r=e.length;r--;)if(us(e[r][0],t))return r;return-1},ps=hs,gs=Array.prototype.splice;var fs=function(e){var t=this.__data__,r=ps(t,e);return!(r<0)&&(r==t.length-1?t.pop():gs.call(t,r,1),--this.size,!0)},ms=hs;var bs=function(e){var t=this.__data__,r=ms(t,e);return r<0?void 0:t[r][1]},vs=hs;var ys=function(e){return vs(this.__data__,e)>-1},xs=hs;var ws=function(e,t){var r=this.__data__,n=xs(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},$s=cs,Cs=fs,Ss=bs,ks=ys,Ds=ws;function Ts(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ts.prototype.clear=$s,Ts.prototype.delete=Cs,Ts.prototype.get=Ss,Ts.prototype.has=ks,Ts.prototype.set=Ds;var Os=Ts,Es=Wa(Qo,"Map"),_s=ls,Ms=Os,Fs=Es;var Is=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var As=function(e,t){var r=e.__data__;return Is(t)?r["string"==typeof t?"string":"hash"]:r.map},Bs=As;var js=function(e){var t=Bs(this,e).delete(e);return this.size-=t?1:0,t},zs=As;var Rs=function(e){return zs(this,e).get(e)},Ps=As;var Ls=function(e){return Ps(this,e).has(e)},Ns=As;var Hs=function(e,t){var r=Ns(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Ws=function(){this.size=0,this.__data__={hash:new _s,map:new(Fs||Ms),string:new _s}},Ys=js,Vs=Rs,Us=Ls,Ks=Hs;function Xs(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Xs.prototype.clear=Ws,Xs.prototype.delete=Ys,Xs.prototype.get=Vs,Xs.prototype.has=Us,Xs.prototype.set=Ks;var qs=Xs,Gs=qs;function Zs(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Zs.Cache||Gs),r}Zs.Cache=Gs;var Qs=Zs;var Js=function(e){var t=Qs(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},el=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tl=/\\(\\)?/g,rl=Js((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(el,(function(e,r,n,i){t.push(n?i.replace(tl,"$1"):r||e)})),t}));var nl=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},il=Xo,ol=ga,al=Jo?Jo.prototype:void 0,sl=al?al.toString:void 0;var ll=function e(t){if("string"==typeof t)return t;if(il(t))return nl(t,e)+"";if(ol(t))return sl?sl.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},cl=ll;var dl=function(e){return null==e?"":cl(e)},ul=Xo,hl=ya,pl=rl,gl=dl;var fl=function(e,t){return ul(e)?e:hl(e,t)?[e]:pl(gl(e))},ml=ga;var bl=function(e){if("string"==typeof e||ml(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},vl=fl,yl=bl;var xl=function(e,t){for(var r=0,n=(t=vl(t,e)).length;null!=e&&r<n;)e=e[yl(t[r++])];return r&&r==n?e:void 0},wl=xl;var $l=function(e,t,r){var n=null==e?void 0:wl(e,t);return void 0===n?r:n},Cl=Uo($l);const Sl=(e,t,r)=>Cl(r,t)||Cl(e,t),kl=(e,t)=>{const r=t||e.defaultValue;return Cl(e.collections,r)},Dl={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Tl=e=>t=>{var r;const n=t.theme,i=kl(Dl,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Sl(i,e,n.overrides.border)}px`:`${i[e]}px`},Ol={"width-005":Tl("width-005"),"width-010":Tl("width-010"),"width-020":Tl("width-020"),"width-040":Tl("width-040"),solid:(El="solid",e=>{var t;const r=e.theme,n=kl(Dl,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Sl(n,El,r.overrides.border):n[El];return"function"==typeof i?i(e):i})};var El;const _l={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Ml=e=>t=>{var r;const n=t.theme,i=kl(_l,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?Sl(i,e,n.overrides.primitiveColour):i[e]},Fl={"brand-10":Ml("brand-10"),"brand-20":Ml("brand-20"),"brand-30":Ml("brand-30"),"brand-40":Ml("brand-40"),"brand-50":Ml("brand-50"),"brand-60":Ml("brand-60"),"brand-70":Ml("brand-70"),"brand-80":Ml("brand-80"),"brand-90":Ml("brand-90"),"brand-95":Ml("brand-95"),"brand-100":Ml("brand-100"),"primary-10":Ml("primary-10"),"primary-20":Ml("primary-20"),"primary-30":Ml("primary-30"),"primary-40":Ml("primary-40"),"primary-50":Ml("primary-50"),"primary-60":Ml("primary-60"),"primary-70":Ml("primary-70"),"primary-80":Ml("primary-80"),"primary-90":Ml("primary-90"),"primary-95":Ml("primary-95"),"primary-100":Ml("primary-100"),"secondary-10":Ml("secondary-10"),"secondary-20":Ml("secondary-20"),"secondary-30":Ml("secondary-30"),"secondary-40":Ml("secondary-40"),"secondary-50":Ml("secondary-50"),"secondary-60":Ml("secondary-60"),"secondary-70":Ml("secondary-70"),"secondary-80":Ml("secondary-80"),"secondary-90":Ml("secondary-90"),"secondary-95":Ml("secondary-95"),"secondary-100":Ml("secondary-100"),"neutral-10":Ml("neutral-10"),"neutral-20":Ml("neutral-20"),"neutral-30":Ml("neutral-30"),"neutral-40":Ml("neutral-40"),"neutral-50":Ml("neutral-50"),"neutral-60":Ml("neutral-60"),"neutral-70":Ml("neutral-70"),"neutral-80":Ml("neutral-80"),"neutral-90":Ml("neutral-90"),"neutral-95":Ml("neutral-95"),"neutral-100":Ml("neutral-100"),"success-10":Ml("success-10"),"success-20":Ml("success-20"),"success-30":Ml("success-30"),"success-40":Ml("success-40"),"success-50":Ml("success-50"),"success-60":Ml("success-60"),"success-70":Ml("success-70"),"success-80":Ml("success-80"),"success-90":Ml("success-90"),"success-95":Ml("success-95"),"success-100":Ml("success-100"),"warning-10":Ml("warning-10"),"warning-20":Ml("warning-20"),"warning-30":Ml("warning-30"),"warning-40":Ml("warning-40"),"warning-50":Ml("warning-50"),"warning-60":Ml("warning-60"),"warning-70":Ml("warning-70"),"warning-80":Ml("warning-80"),"warning-90":Ml("warning-90"),"warning-95":Ml("warning-95"),"warning-100":Ml("warning-100"),"error-10":Ml("error-10"),"error-20":Ml("error-20"),"error-30":Ml("error-30"),"error-40":Ml("error-40"),"error-50":Ml("error-50"),"error-60":Ml("error-60"),"error-70":Ml("error-70"),"error-80":Ml("error-80"),"error-90":Ml("error-90"),"error-95":Ml("error-95"),"error-100":Ml("error-100"),"info-10":Ml("info-10"),"info-20":Ml("info-20"),"info-30":Ml("info-30"),"info-40":Ml("info-40"),"info-50":Ml("info-50"),"info-60":Ml("info-60"),"info-70":Ml("info-70"),"info-80":Ml("info-80"),"info-90":Ml("info-90"),"info-95":Ml("info-95"),"info-100":Ml("info-100"),white:Ml("white"),black:Ml("black"),"primary-inverse":Ml("primary-inverse")},Il={text:Ml("neutral-20"),"text-subtle":Ml("neutral-30"),"text-subtler":Ml("neutral-50"),"text-subtlest":Ml("neutral-60"),"text-primary":Ml("primary-50"),"text-hover":Ml("primary-40"),"text-selected":Ml("primary-50"),"text-selected-hover":Ml("primary-40"),"text-disabled":Ml("neutral-50"),"text-disabled-subtle":Ml("neutral-60"),"text-disabled-subtlest":Ml("neutral-80"),"text-selected-disabled":Ml("neutral-20"),"text-success":Ml("success-40"),"text-warning":Ml("warning-40"),"text-error":Ml("error-40"),"text-info":Ml("info-40"),"text-inverse":Ml("white"),icon:Ml("neutral-50"),"icon-subtle":Ml("neutral-60"),"icon-strongest":Ml("neutral-20"),"icon-primary":Ml("primary-50"),"icon-primary-subtle":Ml("primary-60"),"icon-primary-subtlest":Ml("primary-70"),"icon-hover":Ml("primary-40"),"icon-selected":Ml("primary-50"),"icon-selected-hover":Ml("primary-40"),"icon-disabled":Ml("neutral-50"),"icon-disabled-subtle":Ml("neutral-60"),"icon-selected-disabled":Ml("neutral-60"),"icon-success":Ml("success-50"),"icon-warning":Ml("warning-60"),"icon-error":Ml("error-50"),"icon-error-strong":Ml("error-40"),"icon-info":Ml("info-50"),"icon-inverse":Ml("white"),"icon-primary-inverse":Ml("primary-inverse"),border:Ml("neutral-90"),"border-strong":Ml("neutral-70"),"border-stronger":Ml("neutral-50"),"border-primary":Ml("primary-50"),"border-primary-subtle":Ml("primary-60"),"border-hover":Ml("primary-90"),"border-hover-strong":Ml("primary-60"),"border-selected":Ml("primary-50"),"border-selected-subtle":Ml("primary-70"),"border-selected-subtlest":Ml("primary-90"),"border-selected-hover":Ml("primary-40"),"border-focus":Ml("primary-60"),"border-focus-strong":Ml("primary-50"),"border-disabled":Ml("neutral-90"),"border-selected-disabled":Ml("neutral-70"),"border-success":Ml("success-60"),"border-warning":Ml("warning-60"),"border-error":Ml("error-60"),"border-error-focus":Ml("error-60"),"border-error-focus-strong":Ml("error-40"),"border-error-strong":Ml("error-40"),"border-info":Ml("info-60"),bg:Ml("white"),"bg-strong":Ml("neutral-100"),"bg-stronger":Ml("neutral-95"),"bg-strongest":Ml("neutral-90"),"bg-hover":Ml("primary-95"),"bg-hover-strong":Ml("primary-90"),"bg-hover-subtle":Ml("primary-100"),"bg-hover-neutral":Ml("neutral-100"),"bg-hover-neutral-strong":Ml("neutral-90"),"bg-selected":Ml("primary-95"),"bg-selected-hover":Ml("primary-90"),"bg-selected-strong":Ml("primary-90"),"bg-selected-stronger":Ml("primary-70"),"bg-selected-strongest":Ml("primary-50"),"bg-selected-strongest-hover":Ml("primary-40"),"bg-disabled":Ml("neutral-95"),"bg-selected-disabled":Ml("neutral-95"),"bg-selected-stronger-disabled":Ml("neutral-70"),"bg-success":Ml("success-100"),"bg-success-hover":Ml("success-95"),"bg-success-strong":Ml("success-50"),"bg-success-strong-hover":Ml("success-40"),"bg-warning":Ml("warning-100"),"bg-warning-hover":Ml("warning-95"),"bg-warning-strong":Ml("warning-50"),"bg-warning-strong-hover":Ml("warning-40"),"bg-info":Ml("info-100"),"bg-info-hover":Ml("info-95"),"bg-info-strong":Ml("info-50"),"bg-info-strong-hover":Ml("info-40"),"bg-error":Ml("error-100"),"bg-error-hover":Ml("error-95"),"bg-error-strong":Ml("error-50"),"bg-error-strong-hover":Ml("error-40"),"bg-inverse":Ml("neutral-20"),"bg-inverse-subtle":Ml("neutral-30"),"bg-inverse-subtler":Ml("neutral-50"),"bg-inverse-subtlest":Ml("neutral-60"),"bg-inverse-hover":Ml("neutral-40"),"bg-primary":Ml("primary-50"),"bg-primary-subtle":Ml("primary-60"),"bg-primary-subtler":Ml("primary-95"),"bg-primary-subtlest":Ml("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ml("primary-40"),"bg-primary-subtlest-hover":Ml("primary-90"),"bg-primary-subtlest-selected":Ml("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ml("primary-50"),"hyperlink-hover":Ml("primary-40"),"hyperlink-visited":Ml("primary-40"),"hyperlink-inverse":Ml("primary-inverse"),"focus-ring":Ml("black"),"focus-ring-inverse":Ml("white")},Al={collections:{lifesg:Il,bookingsg:Il,rbs:Il,mylegacy:Il,ccube:Il,pa:{text:Ml("neutral-30"),"text-subtle":Ml("neutral-40"),"text-subtler":Ml("neutral-50"),"text-subtlest":Ml("neutral-70"),"text-primary":Ml("neutral-10"),"text-hover":Ml("neutral-70"),"text-selected":Ml("neutral-20"),"text-selected-hover":Ml("neutral-10"),"text-disabled":Ml("neutral-50"),"text-disabled-subtle":Ml("neutral-60"),"text-disabled-subtlest":Ml("neutral-80"),"text-selected-disabled":Ml("neutral-40"),"text-success":Ml("success-40"),"text-warning":Ml("warning-40"),"text-error":Ml("brand-30"),"text-info":Ml("neutral-40"),"text-inverse":Ml("neutral-100"),icon:Ml("neutral-40"),"icon-subtle":Ml("neutral-50"),"icon-strongest":Ml("neutral-10"),"icon-primary":Ml("neutral-10"),"icon-primary-subtle":Ml("neutral-30"),"icon-primary-subtlest":Ml("neutral-60"),"icon-hover":Ml("neutral-70"),"icon-selected":Ml("brand-20"),"icon-selected-hover":Ml("brand-10"),"icon-disabled":Ml("neutral-50"),"icon-disabled-subtle":Ml("neutral-60"),"icon-selected-disabled":Ml("neutral-40"),"icon-success":Ml("success-40"),"icon-warning":Ml("warning-60"),"icon-error":Ml("brand-30"),"icon-error-strong":Ml("brand-10"),"icon-info":Ml("neutral-40"),"icon-inverse":Ml("neutral-100"),"icon-primary-inverse":"#F9B371",border:Ml("neutral-90"),"border-strong":Ml("neutral-30"),"border-stronger":Ml("neutral-20"),"border-primary":Ml("neutral-40"),"border-primary-subtle":Ml("neutral-60"),"border-hover":Ml("neutral-80"),"border-hover-strong":Ml("neutral-10"),"border-selected":Ml("neutral-20"),"border-selected-subtle":Ml("neutral-40"),"border-selected-subtlest":Ml("neutral-70"),"border-selected-hover":Ml("neutral-10"),"border-focus":Ml("brand-60"),"border-focus-strong":Ml("brand-40"),"border-disabled":Ml("neutral-90"),"border-selected-disabled":Ml("neutral-80"),"border-success":Ml("success-40"),"border-warning":Ml("warning-60"),"border-error":Ml("brand-30"),"border-error-focus":Ml("brand-20"),"border-error-focus-strong":Ml("brand-10"),"border-error-strong":Ml("brand-20"),"border-info":Ml("neutral-40"),bg:Ml("neutral-100"),"bg-strong":Ml("neutral-95"),"bg-stronger":Ml("neutral-90"),"bg-strongest":Ml("neutral-80"),"bg-hover":Ml("brand-90"),"bg-hover-strong":Ml("brand-80"),"bg-hover-subtle":Ml("neutral-90"),"bg-hover-neutral":Ml("neutral-90"),"bg-hover-neutral-strong":Ml("neutral-90"),"bg-selected":Ml("brand-50"),"bg-selected-hover":Ml("brand-70"),"bg-selected-strong":Ml("brand-90"),"bg-selected-stronger":Ml("brand-40"),"bg-selected-strongest":Ml("brand-20"),"bg-selected-strongest-hover":Ml("brand-10"),"bg-disabled":Ml("neutral-90"),"bg-selected-disabled":Ml("neutral-90"),"bg-selected-stronger-disabled":Ml("neutral-80"),"bg-success":Ml("success-100"),"bg-success-hover":Ml("success-95"),"bg-success-strong":Ml("success-50"),"bg-success-strong-hover":Ml("success-40"),"bg-warning":Ml("warning-100"),"bg-warning-hover":Ml("warning-95"),"bg-warning-strong":Ml("warning-50"),"bg-warning-strong-hover":Ml("warning-40"),"bg-info":Ml("neutral-95"),"bg-info-hover":Ml("info-95"),"bg-info-strong":Ml("info-50"),"bg-info-strong-hover":Ml("info-40"),"bg-error":Ml("brand-100"),"bg-error-hover":Ml("error-95"),"bg-error-strong":Ml("error-50"),"bg-error-strong-hover":Ml("error-40"),"bg-inverse":Ml("neutral-40"),"bg-inverse-subtle":Ml("neutral-60"),"bg-inverse-subtler":Ml("neutral-70"),"bg-inverse-subtlest":Ml("neutral-80"),"bg-inverse-hover":Ml("neutral-30"),"bg-primary":Ml("brand-20"),"bg-primary-subtle":Ml("brand-60"),"bg-primary-subtler":Ml("brand-80"),"bg-primary-subtlest":Ml("brand-100"),"bg-available":Ml("success-60"),"bg-primary-hover":Ml("brand-10"),"bg-primary-subtlest-hover":Ml("brand-80"),"bg-primary-subtlest-selected":Ml("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Ml("neutral-10"),"hyperlink-hover":Ml("neutral-40"),"hyperlink-visited":Ml("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Ml("black"),"focus-ring-inverse":Ml("white")}},defaultValue:"lifesg"},Bl=e=>t=>{var r;const n=t.theme,i=kl(Al,null==n?void 0:n.colourScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?Sl(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},jl={text:Bl("text"),"text-subtle":Bl("text-subtle"),"text-subtler":Bl("text-subtler"),"text-subtlest":Bl("text-subtlest"),"text-primary":Bl("text-primary"),"text-hover":Bl("text-hover"),"text-selected":Bl("text-selected"),"text-selected-hover":Bl("text-selected-hover"),"text-disabled":Bl("text-disabled"),"text-disabled-subtle":Bl("text-disabled-subtle"),"text-disabled-subtlest":Bl("text-disabled-subtlest"),"text-selected-disabled":Bl("text-selected-disabled"),"text-success":Bl("text-success"),"text-warning":Bl("text-warning"),"text-error":Bl("text-error"),"text-info":Bl("text-info"),"text-inverse":Bl("text-inverse"),icon:Bl("icon"),"icon-subtle":Bl("icon-subtle"),"icon-strongest":Bl("icon-strongest"),"icon-primary":Bl("icon-primary"),"icon-primary-subtle":Bl("icon-primary-subtle"),"icon-primary-subtlest":Bl("icon-primary-subtlest"),"icon-hover":Bl("icon-hover"),"icon-selected":Bl("icon-selected"),"icon-selected-hover":Bl("icon-selected-hover"),"icon-disabled":Bl("icon-disabled"),"icon-disabled-subtle":Bl("icon-disabled-subtle"),"icon-selected-disabled":Bl("icon-selected-disabled"),"icon-success":Bl("icon-success"),"icon-warning":Bl("icon-warning"),"icon-error":Bl("icon-error"),"icon-error-strong":Bl("icon-error-strong"),"icon-info":Bl("icon-info"),"icon-inverse":Bl("icon-inverse"),"icon-primary-inverse":Bl("icon-primary-inverse"),border:Bl("border"),"border-strong":Bl("border-strong"),"border-stronger":Bl("border-stronger"),"border-primary":Bl("border-primary"),"border-primary-subtle":Bl("border-primary-subtle"),"border-hover":Bl("border-hover"),"border-hover-strong":Bl("border-hover-strong"),"border-selected":Bl("border-selected"),"border-selected-subtle":Bl("border-selected-subtle"),"border-selected-subtlest":Bl("border-selected-subtlest"),"border-selected-hover":Bl("border-selected-hover"),"border-focus":Bl("border-focus"),"border-focus-strong":Bl("border-focus-strong"),"border-disabled":Bl("border-disabled"),"border-selected-disabled":Bl("border-selected-disabled"),"border-success":Bl("border-success"),"border-warning":Bl("border-warning"),"border-error":Bl("border-error"),"border-error-focus":Bl("border-error-focus"),"border-error-focus-strong":Bl("border-error-focus-strong"),"border-error-strong":Bl("border-error-strong"),"border-info":Bl("border-info"),bg:Bl("bg"),"bg-strong":Bl("bg-strong"),"bg-stronger":Bl("bg-stronger"),"bg-strongest":Bl("bg-strongest"),"bg-hover":Bl("bg-hover"),"bg-hover-strong":Bl("bg-hover-strong"),"bg-hover-subtle":Bl("bg-hover-subtle"),"bg-hover-neutral":Bl("bg-hover-neutral"),"bg-hover-neutral-strong":Bl("bg-hover-neutral-strong"),"bg-selected":Bl("bg-selected"),"bg-selected-hover":Bl("bg-selected-hover"),"bg-selected-strong":Bl("bg-selected-strong"),"bg-selected-stronger":Bl("bg-selected-stronger"),"bg-selected-strongest":Bl("bg-selected-strongest"),"bg-selected-strongest-hover":Bl("bg-selected-strongest-hover"),"bg-disabled":Bl("bg-disabled"),"bg-selected-disabled":Bl("bg-selected-disabled"),"bg-selected-stronger-disabled":Bl("bg-selected-stronger-disabled"),"bg-success":Bl("bg-success"),"bg-success-hover":Bl("bg-success-hover"),"bg-success-strong":Bl("bg-success-strong"),"bg-success-strong-hover":Bl("bg-success-strong-hover"),"bg-warning":Bl("bg-warning"),"bg-warning-hover":Bl("bg-warning-hover"),"bg-warning-strong":Bl("bg-warning-strong"),"bg-warning-strong-hover":Bl("bg-warning-strong-hover"),"bg-info":Bl("bg-info"),"bg-info-hover":Bl("bg-info-hover"),"bg-info-strong":Bl("bg-info-strong"),"bg-info-strong-hover":Bl("bg-info-strong-hover"),"bg-error":Bl("bg-error"),"bg-error-hover":Bl("bg-error-hover"),"bg-error-strong":Bl("bg-error-strong"),"bg-error-strong-hover":Bl("bg-error-strong-hover"),"bg-inverse":Bl("bg-inverse"),"bg-inverse-subtle":Bl("bg-inverse-subtle"),"bg-inverse-subtler":Bl("bg-inverse-subtler"),"bg-inverse-subtlest":Bl("bg-inverse-subtlest"),"bg-inverse-hover":Bl("bg-inverse-hover"),"bg-primary":Bl("bg-primary"),"bg-primary-subtle":Bl("bg-primary-subtle"),"bg-primary-subtler":Bl("bg-primary-subtler"),"bg-primary-subtlest":Bl("bg-primary-subtlest"),"bg-available":Bl("bg-available"),"bg-primary-hover":Bl("bg-primary-hover"),"bg-primary-subtlest-hover":Bl("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Bl("bg-primary-subtlest-selected"),"overlay-strong":Bl("overlay-strong"),"overlay-subtle":Bl("overlay-subtle"),hyperlink:Bl("hyperlink"),"hyperlink-hover":Bl("hyperlink-hover"),"hyperlink-visited":Bl("hyperlink-visited"),"hyperlink-inverse":Bl("hyperlink-inverse"),"focus-ring":Bl("focus-ring"),"focus-ring-inverse":Bl("focus-ring-inverse")},zl={collections:{default:{solid:e=>t=>{var r,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:Ol["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:jl.border(t),u=Ol.solid;return F`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:Ol["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:jl.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},Rl=e=>1===e.length&&"theme"in e[0],Pl=e=>(...t)=>r=>{const n=Rl(t)?[]:t,i=Rl(t)?t[0]:r,o=i.theme;return(0,kl(zl,null==o?void 0:o.borderScheme)[e])(...n)(i)},Ll={solid:Pl("solid"),"dashed-default":Pl("dashed-default")},Nl={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Hl=e=>t=>{var r;const n=t.theme,i=kl(Nl,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Sl(i,e,n.overrides.breakpoint):i[e],o},Wl={"xxs-min":Hl("xxs-min"),"xxs-max":Hl("xxs-max"),"xs-min":Hl("xs-min"),"xs-max":Hl("xs-max"),"sm-min":Hl("sm-min"),"sm-max":Hl("sm-max"),"md-min":Hl("md-min"),"md-max":Hl("md-max"),"lg-min":Hl("lg-min"),"lg-max":Hl("lg-max"),"xl-min":Hl("xl-min"),"xl-max":Hl("xl-max"),"xxl-min":Hl("xxl-min"),"xxs-column":Hl("xxs-column"),"xs-column":Hl("xs-column"),"sm-column":Hl("sm-column"),"md-column":Hl("md-column"),"lg-column":Hl("lg-column"),"xl-column":Hl("xl-column"),"xxl-column":Hl("xxl-column"),"xxs-gutter":Hl("xxs-gutter"),"xs-gutter":Hl("xs-gutter"),"sm-gutter":Hl("sm-gutter"),"md-gutter":Hl("md-gutter"),"lg-gutter":Hl("lg-gutter"),"xl-gutter":Hl("xl-gutter"),"xxl-gutter":Hl("xxl-gutter"),"xxs-margin":Hl("xxs-margin"),"xs-margin":Hl("xs-margin"),"sm-margin":Hl("sm-margin"),"md-margin":Hl("md-margin"),"lg-margin":Hl("lg-margin"),"xl-margin":Hl("xl-margin"),"xxl-margin":Hl("xxl-margin")},Yl=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Wl["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Vl={MaxWidth:Yl("max-width"),MinWidth:Yl("min-width")},Ul={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},Kl={collections:{lifesg:Ul,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},rbs:Ul,mylegacy:Ul,ccube:Ul,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"0rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"lifesg"},Xl=e=>t=>{var r;const n=t.theme,i=kl(Kl,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Sl(i,e,n.overrides.fontSpec):i[e]},ql={"header-size-xxl":Xl("header-size-xxl"),"header-size-xl":Xl("header-size-xl"),"header-size-lg":Xl("header-size-lg"),"header-size-md":Xl("header-size-md"),"header-size-sm":Xl("header-size-sm"),"header-size-xs":Xl("header-size-xs"),"header-lh-xxl":Xl("header-lh-xxl"),"header-lh-xl":Xl("header-lh-xl"),"header-lh-lg":Xl("header-lh-lg"),"header-lh-md":Xl("header-lh-md"),"header-lh-sm":Xl("header-lh-sm"),"header-lh-xs":Xl("header-lh-xs"),"header-ls-xxl":Xl("header-ls-xxl"),"header-ls-xl":Xl("header-ls-xl"),"header-ls-lg":Xl("header-ls-lg"),"header-ls-md":Xl("header-ls-md"),"header-ls-sm":Xl("header-ls-sm"),"header-ls-xs":Xl("header-ls-xs"),"weight-light":Xl("weight-light"),"weight-regular":Xl("weight-regular"),"weight-semibold":Xl("weight-semibold"),"weight-bold":Xl("weight-bold"),"font-family":Xl("font-family"),"body-size-baseline":Xl("body-size-baseline"),"body-size-md":Xl("body-size-md"),"body-size-sm":Xl("body-size-sm"),"body-size-xs":Xl("body-size-xs"),"body-lh-baseline":Xl("body-lh-baseline"),"body-lh-md":Xl("body-lh-md"),"body-lh-sm":Xl("body-lh-sm"),"body-lh-xs":Xl("body-lh-xs"),"body-ls-baseline":Xl("body-ls-baseline"),"body-ls-md":Xl("body-ls-md"),"body-ls-sm":Xl("body-ls-sm"),"body-ls-xs":Xl("body-ls-xs"),"form-label-size":Xl("form-label-size"),"form-description-size":Xl("form-description-size"),"form-label-lh":Xl("form-label-lh"),"form-description-lh":Xl("form-description-lh"),"form-label-ls":Xl("form-label-ls"),"form-description-ls":Xl("form-description-ls")},Gl=(e,t,r,n)=>F`
    font-family: ${Xl("font-family")};
    font-size: ${Xl(e)};
    font-weight: ${Xl(t)};
    line-height: ${Xl(r)};
    letter-spacing: ${Xl(n)};
`,Zl={"header-xxl-light":Gl("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Gl("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Gl("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Gl("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Gl("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Gl("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Gl("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Gl("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Gl("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Gl("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Gl("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Gl("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Gl("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Gl("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Gl("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Gl("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Gl("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Gl("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Gl("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Gl("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Gl("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Gl("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Gl("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Gl("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Gl("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Gl("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Gl("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Gl("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Gl("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Gl("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Gl("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Gl("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Gl("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Gl("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Gl("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Gl("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Gl("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Gl("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Gl("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Gl("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"form-label":Gl("form-label-size","weight-semibold","form-label-lh","form-label-ls"),"form-description":Gl("form-description-size","weight-regular","form-description-lh","form-description-ls")},Ql={collections:{lifesg:Zl,bookingsg:Zl,rbs:Zl,mylegacy:Zl,ccube:Zl,pa:Zl},defaultValue:"lifesg"},Jl=e=>t=>{var r;const n=t.theme,i=kl(Ql,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Sl(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},ec={"header-xxl-light":Jl("header-xxl-light"),"header-xxl-regular":Jl("header-xxl-regular"),"header-xxl-semibold":Jl("header-xxl-semibold"),"header-xxl-bold":Jl("header-xxl-bold"),"header-xl-light":Jl("header-xl-light"),"header-xl-regular":Jl("header-xl-regular"),"header-xl-semibold":Jl("header-xl-semibold"),"header-xl-bold":Jl("header-xl-bold"),"header-lg-light":Jl("header-lg-light"),"header-lg-regular":Jl("header-lg-regular"),"header-lg-semibold":Jl("header-lg-semibold"),"header-lg-bold":Jl("header-lg-bold"),"header-md-light":Jl("header-md-light"),"header-md-regular":Jl("header-md-regular"),"header-md-semibold":Jl("header-md-semibold"),"header-md-bold":Jl("header-md-bold"),"header-sm-light":Jl("header-sm-light"),"header-sm-regular":Jl("header-sm-regular"),"header-sm-semibold":Jl("header-sm-semibold"),"header-sm-bold":Jl("header-sm-bold"),"header-xs-light":Jl("header-xs-light"),"header-xs-regular":Jl("header-xs-regular"),"header-xs-semibold":Jl("header-xs-semibold"),"header-xs-bold":Jl("header-xs-bold"),"body-baseline-light":Jl("body-baseline-light"),"body-baseline-regular":Jl("body-baseline-regular"),"body-baseline-semibold":Jl("body-baseline-semibold"),"body-baseline-bold":Jl("body-baseline-bold"),"body-md-light":Jl("body-md-light"),"body-md-regular":Jl("body-md-regular"),"body-md-semibold":Jl("body-md-semibold"),"body-md-bold":Jl("body-md-bold"),"body-sm-light":Jl("body-sm-light"),"body-sm-regular":Jl("body-sm-regular"),"body-sm-semibold":Jl("body-sm-semibold"),"body-sm-bold":Jl("body-sm-bold"),"body-xs-light":Jl("body-xs-light"),"body-xs-regular":Jl("body-xs-regular"),"body-xs-semibold":Jl("body-xs-semibold"),"body-xs-bold":Jl("body-xs-bold"),"form-label":Jl("form-label"),"form-description":Jl("form-description")},tc={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},rc=e=>t=>{var r;const n=t.theme,i=kl(tc,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Sl(i,e,n.overrides.motion):i[e]},nc={"duration-150":rc("duration-150"),"duration-250":rc("duration-250"),"duration-350":rc("duration-350"),"duration-500":rc("duration-500"),"duration-800":rc("duration-800"),"duration-1000":rc("duration-1000"),"ease-default":rc("ease-default"),"ease-standard":rc("ease-standard"),"ease-entrance":rc("ease-entrance"),"ease-exit":rc("ease-exit")},ic={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},oc=e=>t=>{var r;const n=t.theme,i=kl(ic,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Sl(i,e,n.overrides.radius)}px`:`${i[e]}px`},ac={none:oc("none"),xs:oc("xs"),sm:oc("sm"),md:oc("md"),lg:oc("lg"),full:oc("full")},sc={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},lc=e=>t=>{var r;const n=t.theme,i=kl(sc,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Sl(i,e,n.overrides.spacing)}px`:`${i[e]}px`},cc={"spacing-0":lc("spacing-0"),"spacing-4":lc("spacing-4"),"spacing-8":lc("spacing-8"),"spacing-12":lc("spacing-12"),"spacing-16":lc("spacing-16"),"spacing-20":lc("spacing-20"),"spacing-24":lc("spacing-24"),"spacing-32":lc("spacing-32"),"spacing-40":lc("spacing-40"),"spacing-48":lc("spacing-48"),"spacing-64":lc("spacing-64"),"spacing-72":lc("spacing-72"),"layout-xs":lc("layout-xs"),"layout-sm":lc("layout-sm"),"layout-md":lc("layout-md"),"layout-lg":lc("layout-lg"),"layout-xl":lc("layout-xl"),"layout-xxl":lc("layout-xxl"),"layout-xxxl":lc("layout-xxxl")},dc=Object.assign(Object.assign({},jl),{Primitive:Fl}),uc=Object.assign(Object.assign({},ec),{Spec:ql}),hc=nc,pc=Object.assign(Object.assign({},Ol),{Util:Ll}),gc=cc,fc=ac,mc=Wl,bc=Vl,vc={colourScheme:"lifesg",fontScheme:"lifesg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},yc={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},xc={colourScheme:"ccube",fontScheme:"ccube",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},wc={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},$c={colourScheme:"rbs",fontScheme:"rbs",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Cc={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa"},Sc=M.button`
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
                background-color: ${dc["bg-hover-neutral"]};
            `}
    }
`,kc=i.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=dt(t,["children","focusHighlight","focusOutline","type"]);return e(Sc,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),Dc=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Tc=(e,t,r=!1)=>F`
        ${uc[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Oc=e=>{if(e)return F`
            ${Dc(e)}
        `},Ec=(e,t)=>F`
    ${Tc(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?F`
            display: block;
            ${Oc(r)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${Oc(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${dc.text};
`;var _c;!function(r){const n=(e,t,r)=>{const n=M(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Ec(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeaderXXL=n("h1","header-xxl","HeaderXXL"),r.HeaderXL=n("h2","header-xl","HeaderXL"),r.HeaderLG=n("h3","header-lg","HeaderLG"),r.HeaderMD=n("h4","header-md","HeaderMD"),r.HeaderSM=n("h5","header-sm","HeaderSM"),r.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,t)=>{const r=M.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>Ec(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const o=(r,n)=>{const i=M.a`
            ${e=>F`
                ${Tc(r,e.weight||"regular")}
                color: ${dc.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${dc["text-hover"]};
                }
            `}
        `,o=r=>{var{external:n=!1,children:o}=r,a=dt(r,["external","children"]);return t(i,Object.assign({},a,{children:[o,n&&e(Mc,{})]}))};return o.displayName=`Typography.${n}`,o};r.LinkBL=o("body-baseline","LinkBL"),r.LinkMD=o("body-md","LinkMD"),r.LinkSM=o("body-sm","LinkSM"),r.LinkXS=o("body-xs","LinkXS")}(_c||(_c={}));const Mc=M(B)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Fc=M.div`
    background-color: ${dc.bg} !important;
    border-top: ${pc["width-010"]} ${pc.solid} ${dc.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${bc.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,Ic=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Ac=e=>F`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${hc["duration-250"]} ${hc["ease-standard"]};
`,Bc=M(_c.HeaderSM)`
    ${e=>Ac(e.$isCollapsed)}
`,jc=M(_c.HeaderXS)`
    ${e=>Ac(e.$isCollapsed)}
`,zc=M(kc)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${hc["duration-250"]} ${hc["ease-default"]};
    margin: auto -1rem auto 0;
`,Rc=M(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${dc["icon-primary"]};
`,Pc=M(Yo.div)`
    overflow: hidden;
`,Lc=M.div`
    display: inline-block;
    padding-right: 4rem;

    ${bc.MaxWidth.lg} {
        padding-right: 0;
    }
`;const Nc=p((function(r,n){var{title:i,children:s,expanded:l,type:c="default",collapsible:d=!0}=r,h=dt(r,["title","children","expanded","type","collapsible"]);const p=o(null),g=f(ct),[m,v]=a(!d||(null!=l?l:g)),[y,x]=a(!1),w=h["data-testid"]||"accordion-item",$=cr(),C=$.ref;b(n,(()=>Object.assign(p.current,{expand(){v(!0)},collapse(){v(!1)},isExpanded:()=>m})),[m]),u((()=>{y&&v(!d||g)}),[g]),u((()=>{y&&v(!!l)}),[l]),u((()=>{x(!0)}),[]);const S={height:m?$.height:0},k=Do(S);return t(Fc,{"data-testid":w,className:h.className,$isCollapsed:m,ref:p,children:[t(Ic,{$isCollapsed:d,onClick:d?e=>{e.preventDefault(),v((e=>!e))}:void 0,children:["string"!=typeof i?i:e("small"===c?jc:Bc,{weight:"bold","data-testid":`${w}-title`,$isCollapsed:m,children:i}),d&&e(zc,{"data-testid":`${w}-expand-collapse-button`,$isCollapsed:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand",children:e(Rc,{})})]}),e(Pc,{style:y?k:S,$isCollapsed:m,"data-testid":`${w}-expandable-container`,children:e(Lc,{ref:C,id:"content-container",children:s})})]})})),Hc=M.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Wc=I`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Yc=M.div`
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
    animation: ${Wc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Vc=M(Yc)`
    animation-delay: -0.45s;
`,Uc=M(Yc)`
    animation-delay: -0.3s;
`,Kc=M(Yc)`
    animation-delay: -0.15s;
`,Xc=({color:r,className:n,size:i})=>t(Hc,{className:n,$size:i,$color:r,children:[e(Yc,{id:"inner1"}),e(Vc,{id:"inner2"}),e(Uc,{id:"inner3"}),e(Kc,{id:"inner4"})]}),qc=M.button`
    padding: ${gc["spacing-8"]} ${gc["spacing-16"]};
    min-width: 4rem;
    border: ${pc["width-010"]} ${pc.solid} transparent;
    border-radius: ${fc.sm};
    transition: all ${hc["duration-250"]} ${hc["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${dc.Primitive.white};
                    border-color: ${e.$buttonIsDanger?dc["border-error-strong"]:dc["border-primary"]};

                    color: ${e.$buttonIsDanger?dc["text-error"]:dc["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${dc["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${dc.bg};
                    border-color: ${dc.border};

                    color: ${e.$buttonIsDanger?dc["text-error"]:dc["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${dc["bg-hover-neutral"]};
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?dc["text-error"]:dc["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${dc["bg-hover-neutral"]};
                    }
                `;case"disabled":return F`
                    background-color: ${dc["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${dc["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?dc["bg-error-strong"]:dc["bg-primary"]};

                    ${bc.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${dc["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?dc["bg-error-strong-hover"]:dc["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${uc["body-md-semibold"]}

                    ${bc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${uc["header-md-semibold"]}

                    ${bc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${uc["header-xs-semibold"]}

                    ${bc.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Gc=M(Xc)`
    margin-right: 0.5rem;
`,Zc=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=dt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(qc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Gc,{}),e("span",{children:i})]}))};Zc.displayName="Button.Default";const Qc=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=dt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(qc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Gc,{}),e("span",{children:i})]}))};Qc.displayName="Button.Small";const Jc=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=dt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(qc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Gc,{}),e("span",{children:i})]}))};Jc.displayName="Button.Large";const ed={Default:i.forwardRef(Zc),Small:i.forwardRef(Qc),Large:i.forwardRef(Jc)},td=M.div`
    width: 100%;
    border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};
`,rd=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${bc.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return F`
                ${bc.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,nd=M(_c.HeaderMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${bc.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return F`
                ${bc.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,id=M(ed.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,od=Object.assign((({children:r,title:n,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:s=!1,className:l})=>{const[c,d]=a("expand-all"===o),u=e=>{e.preventDefault(),d((e=>!e))};return e(ct.Provider,{value:c,children:t(td,{className:l,children:[n||i?t(rd,{$showTitleInMobile:s,$hasExpandAll:i,children:[n&&e(nd,{weight:"bold",$showInMobile:s,"data-testid":"accordion-title",children:n}),i&&e(id,{"data-testid":"accordion-expand-collapse-button",onClick:u,styleType:"link",type:"button",children:c?"Hide all":"Show all"})]}):null,r]})})}),{Item:Nc}),ad=e=>{const{textSize:t}=e||{};return F`
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
    `},sd=M.div`
    padding: ${gc["spacing-8"]} ${gc["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=dc["bg-error"](e),r=dc["border-error"](e);break;case"success":t=dc["bg-success"](e),r=dc["border-success"](e);break;case"warning":default:t=dc["bg-warning"](e),r=dc["border-warning"](e);break;case"info":t=dc["bg-info"](e),r=dc["border-info"](e);break;case"description":t=dc["bg-strong"](e),r=dc["border-strong"](e)}return F`
            background: ${t};
            border-left: ${pc["width-020"]} ${pc.solid}
                ${r};
        `}}

    color: ${dc.text};
    ${e=>"small"===e.$sizeType?ad({textSize:"body-sm"}):ad({textSize:"body-md"})}
`,ld=M.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${gc["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=dc["icon-error"](e);break;case"success":t=dc["icon-success"](e);break;case"warning":default:t=dc["icon-warning"](e);break;case"info":t=dc["icon-info"](e);break;case"description":t=dc["icon-subtle"](e)}return F`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,cd=M(_c.LinkSM)`
    ${e=>"small"===e.$sizeType?F`
                ${uc["body-sm-semibold"]}
                margin-top: ${gc["spacing-4"]};
            `:F`
                ${uc["body-md-semibold"]}
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
`,dd=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,ud=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return F`
                margin-bottom: ${gc["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,hd=M.button`
    ${e=>"small"===e.$sizeType?F`
                ${uc["body-sm-semibold"]}
            `:F`
                ${uc["body-md-semibold"]}
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

    color: ${dc["text-primary"]};
`,pd=M(N)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${hc["duration-350"]} ${hc["ease-standard"]};
`,gd=r=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:p}=r,g=dt(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,m]=a(!1),[b,v]=a(!1),{height:y,ref:x}=cr();u((()=>{w()}),[p,y]);const w=()=>{m(!p),v($())},$=()=>!(!y||!p)&&y>p;return t(sd,{className:i,$type:n,$sizeType:c,"data-testid":g["data-testid"],children:[d&&e(ld,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return e(L,{});case"warning":return e(R,{});case"error":return e(z,{});case"info":case"description":return e(P,{});default:return null}})()}),t(dd,{children:[t(ud,{$maxCollapsedHeight:$()?p:void 0,$showMore:f,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?t(cd,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},s,{children:[s.children,l||e(j,{})]})):null]}),b&&t(hd,{$sizeType:c,$type:n,type:"button",onClick:()=>m(!f),children:["Show ",f?"less":"more",e(pd,{$expanded:f})]})]})]})},fd=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.838562a8.js")).LottieSpinner}})))),md=t=>e(vd,Object.assign({},t,{children:e(y,{fallback:e(bd,{}),children:e(fd,{})})})),bd=()=>e("div",{style:{height:"200px",width:"200px"}}),vd=M.div`
    margin: 0 auto;
    padding: ${gc["spacing-32"]} ${gc["spacing-16"]};
`,yd=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.fb1f08b3.js")).LottieLoadingDots}})))),xd=t=>e($d,Object.assign({},t,{children:e(y,{fallback:e(wd,{}),children:e(yd,{})})})),wd=()=>e("div",{style:{height:"16px",width:"64px"}}),$d=M.div`
    margin: 0 auto;
`,Cd=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.e687ee5a.js")).LottieLoadingDotsSpinner}})))),Sd=t=>{var{color:r}=t,n=dt(t,["color"]);const i=A(),o=r||dc["icon-primary"]({theme:i});return e(Dd,Object.assign({},n,{children:e(y,{fallback:e(kd,{}),children:e(Cd,{color:o})})}))},kd=()=>e("div",{style:{height:"200px",width:"200px"}}),Dd=M.div`
    margin: 0 auto;
`;var Td,Od={exports:{}};Td=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:f(c),arrayOf:function(e){return f((function(t,r,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new g("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:f((function(t,r,n,i,o){var a=t[r];return e(a)?null:new g("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:f((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new g("Invalid "+n+" `"+o+"` of type `"+y(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||u;return new g("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:f((function(e,t,r,n,i){return v(e[t])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,r,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=y(l);if("object"!==c)return new g("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,i,o+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?f((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(p(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new g("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),c}return f((function(t,r,n,i,o){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,i,o,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new g("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return f((function(t,r,n,i,o){var s=t[r],l=y(s);if("object"!==l)return new g("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(n,i,o,c,x(d));var u=d(s,c,n,i,o+"."+c,a);if(u)return u}return null}))},exact:function(e){return f((function(t,r,n,i,l){var c=t[r],d=y(c);if("object"!==d)return new g("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=o({},t[r],e);for(var h in u){var p=e[h];if(s(e,h)&&"function"!=typeof p)return b(n,i,l,h,x(p));if(!p)return new g("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=p(c,h,n,i,l+"."+h,a);if(f)return f}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function f(e){var r={},i=0;function o(o,s,l,c,d,h,p){if(c=c||u,h=h||l,p!==a){if(t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new g("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new g("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function m(e){return f((function(t,r,n,i,o,a){var s=t[r];return y(s)!==e?new g("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new g((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[d]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case c:case d:case i:case a:case o:case h:return p;default:var m=p&&p.$$typeof;switch(m){case l:case u:case f:case g:case s:return m;default:return t}}case n:return t}}}var w=c,$=d,C=l,S=s,k=r,D=u,T=i,O=f,E=g,_=n,M=a,F=o,I=h,A=!1;function B(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=k,t.ForwardRef=D,t.Fragment=T,t.Lazy=O,t.Memo=E,t.Portal=_,t.Profiler=M,t.StrictMode=F,t.Suspense=I,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===c},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===f},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===h||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===g||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(c.default),r=function(){return d(e)||d(t)},n=(0,i.useState)(r),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),p=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),g=u();return(0,i.useEffect)((function(){g&&r&&r(p)}),[p]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Ed=Od.exports=Td(i);const _d=M.div`
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.sm};
    margin-bottom: ${gc["spacing-32"]};
`,Md=M(Yo.div)`
    overflow: hidden;
`,Fd=M.div`
    height: max-content;
`,Id=M.div`
    border-top: ${pc["width-010"]} ${pc.solid} ${dc.border};
`,Ad=M.div`
    padding: ${gc["spacing-16"]} ${gc["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${bc.MaxWidth.sm} {
        padding: ${gc["spacing-16"]} ${gc["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return F`
                cursor: pointer;
            `}}
`,Bd=M.div`
    ${uc["header-sm-semibold"]}
    color: ${dc.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${gc["spacing-16"]};
`,jd=M.div`
    display: flex;
`,zd=M.span`
    display: flex;
    align-items: center;
    margin-right: ${gc["spacing-40"]};

    ${bc.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return F`
                    color: ${dc["icon-error"]};
                `;case"warning":return F`
                    color: ${dc["icon-warning"]};
                `}}}
`,Rd=M(z)`
    height: ${uc.Spec["header-size-sm"]};
    width: ${uc.Spec["header-size-sm"]};
`,Pd=M.div`
    display: flex;
    margin-left: auto;
    ${bc.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return F`
                margin-right: ${gc["spacing-40"]};
                ${bc.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${gc["spacing-16"]};
                }
            `}}
`,Ld=M.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${gc["spacing-16"]};
    margin: -${gc["spacing-16"]};
    display: flex;
    align-items: center;

    ${bc.MaxWidth.sm} {
        margin: -${gc["spacing-16"]} -${gc["spacing-16"]} -${gc["spacing-16"]} 0;
        margin-left: auto;
    }
`,Nd=M.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${hc["duration-250"]} ${hc["ease-default"]};
`,Hd=M(fe)`
    color: ${dc.icon};
    height: ${uc.Spec["header-size-sm"]};
    width: ${uc.Spec["header-size-sm"]};
`,Wd=r=>{var{children:n,title:i,collapsible:o=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=r,h=dt(r,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[p,g]=a(!o||s),f=cr(),m=f.ref,b=A(),v=mc["sm-max"]({theme:b}),y=Ed.useMediaQuery({maxWidth:v}),x=u&&o,w=e=>{e.stopPropagation(),g(!p)},$=Do({height:p?f.height:0}),C=()=>o&&e(Ld,{onClick:w,type:"button","aria-label":p?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle",children:e(Nd,{$expanded:p,children:e(Hd,{"aria-hidden":!0})})});return t(_d,Object.assign({},h,{children:[t(Ad,{"data-testid":"header",onClick:x?w:void 0,$interactive:x,children:[t(jd,{children:[e(Bd,{"data-testid":(null==d?void 0:d.title)||"title",children:i}),(()=>{switch(c){case"error":case"warning":return e(zd,{$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`,children:e(Rd,{})});default:return null}})(),y&&C()]}),l&&e(Pd,{$collapsible:o,"data-testid":"call-to-action-container",children:l}),!y&&C()]}),o?e(Md,{style:$,"data-testid":"expandable-container",children:e(Id,{ref:m,children:n})}):e(Fd,{"data-testid":"non-expandable-container",children:e(Id,{children:n})})]}))};var Yd={exports:{}};Yd.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",p="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},C=function e(t,r,n){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(y=i),i||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},k=v;k.l=C,k.i=$,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===p)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return k.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!k.u(t)||t,d=k.p(e),p=function(e,t){var i=k.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return k.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?p(1,0):p(31,11);case c:return n?p(1,m):p(0,m+1);case l:var y=this.$locale().weekStart||0,x=(f<y?f+7:f)-y;return p(n?b-x:b+(6-x),m);case s:case h:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=k.p(e),d="set"+(this.$u?"UTC":""),p=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[o]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var f=this.clone().set(h,1);f.$d[p](g),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else p&&this.$d[p](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(n,d){var h,p=this;n=Number(n);var g=k.p(d),f=function(e){var t=S(p);return k.w(t.date(t.date()+Math.round(e*n)),p)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return f(1);if(g===l)return f(7);var m=(h={},h[o]=t,h[a]=r,h[i]=e,h)[g]||1,b=this.$d.getTime()+n*m;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||p;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},h=function(e){return k.s(o%12||12,e,"0")},g=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return k.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,p){var g,f=this,m=k.p(h),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return k.m(f,b)};switch(m){case u:g=x()/12;break;case c:g=x();break;case d:g=x()/3;break;case l:g=(y-v)/6048e5;break;case s:g=(y-v)/864e5;break;case a:g=y/r;break;case o:g=y/t;break;case i:g=y/e;break;default:g=y}return p?g:k.a(g)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),T=D.prototype;return S.prototype=T,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,D,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Vd=Uo(Yd.exports),Ud={exports:{}};Ud.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],p=d&&d[1];a[l]=p?{regex:h,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,p=new Date,g=a||(i||o?1:p.getDate()),f=i||p.getFullYear(),m=0;i&&!o||(m=o>0?o-1:p.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(f,m,g,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(f,m,g,b,v,y,x)):new Date(f,m,g,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var p=s.length,g=1;g<=p;g+=1){a[1]=s[g-1];var f=r.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}g===p&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Kd=Uo(Ud.exports),Xd={exports:{}};Xd.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var qd=Uo(Xd.exports),Gd={exports:{}};Gd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Zd=Uo(Gd.exports),Qd={exports:{}};Qd.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Jd,eu,tu=Uo(Qd.exports),ru={exports:{}};ru.exports=(Jd={year:0,month:1,day:2,hour:3,minute:4,second:5},eu={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=eu[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),eu[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=Jd[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,p=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(r.utc(p).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var nu,iu=Uo(ru.exports);Vd.extend(qd),Vd.extend(tu),Vd.extend(Zd),Vd.extend(Kd),Vd.extend(iu),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Vd(t).startOf("week");return ou(r).map((e=>au(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return au(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Vd(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Vd(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Vd(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?Vd(n):void 0,i?Vd(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(nu||(nu={}));const ou=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},au=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},su=[1,3,5,7,8,10,12],lu=[4,6,9,11];var cu,du,uu,hu;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":su.includes(o)?Math.min(i,31).toString():lu.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Vd(e,r);return Vd(t,r).diff(n,"minute")},e.toDayjs=e=>e?Vd(e):Vd(),e.addMinutesToTime=(e,t,r="HH:mm")=>Vd(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Vd(e).isSame(Vd(t),r)}(cu||(cu={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Vd(e).isBefore(n,"day"))||!(!i||!Vd(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Vd(e).isValid())return e}return""}}(du||(du={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(uu||(uu={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(hu||(hu={}));function pu(e){const t=o(null);return h((()=>{t.current=e}),[e]),g(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const gu=(e,t,r="window",n)=>{const i=o();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.call(i,e)};return t.addEventListener(e,o,n),()=>{null==t||t.removeEventListener(e,o,n)}}),[e,r])},fu="undefined"!=typeof window?h:u,mu=()=>{const[e,t]=a(!1);return u((()=>{t(!0)}),[]),e};function bu({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const i=n.value,o=t(i),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=i.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:o,updateCaretPosition:()=>{n.value=o,n.setSelectionRange(d,d)}}}}const vu=e=>{const t=(e=>{const t=o(e),r=o();return u((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},yu=e=>{const[t,r]=a(e),n=o(e);return[t,g((e=>{n.current=e,r(e)}),[]),n]},xu=M.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${gc["spacing-32"]} 0;

    ${bc.MaxWidth.xl} {
        margin: ${gc["spacing-24"]} 0;
    }

    ${bc.MaxWidth.lg} {
        margin: ${gc["spacing-16"]} 0;
    }
`,wu=M.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${gc["spacing-8"]};
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
`,$u=M.div`
    width: ${gc["spacing-64"]};
    height: calc(1lh + ${gc["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,F`
            ${bc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,Cu=M.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Su=M(me)`
    margin: ${gc["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${dc["icon-subtle"]};
`,ku=M(_c.BodyMD)`
    margin: ${gc["spacing-8"]} !important;
`,Du=M(_c.LinkMD)`
    margin: ${gc["spacing-8"]} !important;
`,Tu=n=>{var{links:i,fadeColor:s,fadePosition:l="both",itemStyle:c,id:d}=n,u=dt(n,["links","fadeColor","fadePosition","itemStyle","id"]);const[h,p]=a(!1),[g,f]=a(!1),[m,b]=a(!1),v="left"===l||"both"===l,y="right"===l||"both"===l,x=o(null),w=o(null),$=A(),C=mc["lg-max"]({theme:$}),S=pu((()=>{const e=w.current,t=x.current;e&&t&&i&&i.length>1&&window.innerWidth<=C&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),k=pu((()=>{const e=window.innerWidth<=C;p(e);const t=w.current,r=x.current;if(t&&r&&e&&t.scrollWidth>r.offsetWidth)return f(t.scrollLeft>=1),void b(t.scrollWidth-t.scrollLeft-1>r.offsetWidth);f(!1),b(!1)}));if(gu("resize",k),gu("scroll",k,w.current),fu((()=>{S(),k()}),[S,k]),cr({onResize:S,targetRef:x,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!i)return null;return t(xu,Object.assign({ref:x,id:d||"breadcrumb"},u,{children:[e("nav",{children:e(wu,{ref:w,children:i.map(((r,n)=>{let o;return r.children?(o=n!==i.length-1&&r.href?e(Du,Object.assign({},r,{weight:"semibold"})):e(ku,{weight:"semibold",children:r.children}),t(Cu,{$styleProps:c,children:[o,n<i.length-1&&e(Su,{})]},n)):null}))})}),h&&(()=>{let n;return n=Array.isArray(s)&&s.length>0?{left:s,right:s}:s||{left:void 0,right:void 0},t(r,{children:[g&&v&&e($u,{$backgroundColor:n.left,$position:"left"}),m&&y&&e($u,{$backgroundColor:n.right,$position:"right"})]})})()]}))},Ou=M(qc)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Eu=(r,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=r,d=dt(r,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return t(Ou,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:o},u,d,{children:[l,e("span",{children:i})]}))};Eu.displayName="ButtonWithIcon.Default";const _u=(r,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=r,d=dt(r,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return t(Ou,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:o},u,d,{children:[l,e("span",{children:i})]}))};_u.displayName="ButtonWithIcon.Small";const Mu={Default:i.forwardRef(Eu),Small:i.forwardRef(_u)},Fu=M.div`
    --vertical-inset: ${gc["spacing-24"]};
    --horizontal-inset: ${gc["spacing-20"]};
    --header-bottom-spacing: ${gc["spacing-4"]};

    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${bc.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,Iu=F`
    color: ${dc.icon};
    height: 1rem;
    width: 1rem;
`,Au=M(be)`
    ${Iu}
`,Bu=M(me)`
    ${Iu}
`,ju=M(fe)`
    ${Iu}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,zu=M.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Ru=M.div`
    display: flex;
    flex: 1;
    position: relative;
`,Pu=M.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Lu=M.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${dc.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return F`
                display: none;
            `}}
`,Nu=M.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Hu=M.div`
    display: flex;
`,Wu=M.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?F`
                display: none;
            `:e.$expanded?F`
                ${ju} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Yu=M.span`
    ${uc["body-md-regular"]}
    color: ${dc.text};
`,Vu=M.div`
    display: flex;
`,Uu=M(kc)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ku=M.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Xu=M(ed.Small)`
    flex: 1;
`,qu=M.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Gu=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${fc.md};
    margin: 0 0.5rem;
    transition: ${hc["duration-150"]} ${hc["ease-default"]};

    // default styles
    ${uc["body-md-regular"]}
    border-radius: ${fc.md};
    border: ${pc["width-010"]} ${pc.solid} transparent;
    background-clip: border-box;
    color: ${dc.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?F`
                cursor: pointer;
            `:e.$disabledDisplay?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?F`
                background: ${dc["bg-selected"]};
                border-color: ${dc["border-selected"]};
                color: ${dc["text-selected"]};
                font-weight: ${uc.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${dc["bg-selected-hover"]};
                        border-color: ${dc["border-selected-hover"]};
                        color: ${dc["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?F`
                color: ${dc["text-primary"]};
                font-weight: ${uc.Spec["weight-semibold"]};
            `:r?F`
                color: ${dc["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?F`
                &:hover {
                    background: ${dc["bg-selected-hover"]};
                    border-color: ${dc["border-selected-hover"]};
                    color: ${dc["text-selected-hover"]};
                    font-weight: ${uc.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${dc["bg-hover"]};
                color: ${dc["text-hover"]};
                font-weight: ${uc.Spec["weight-semibold"]};
            }
        `}}
`,Zu=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,isNewSelection:a,minDate:s,maxDate:l,allowDisabledSelection:c,onMonthSelect:d})=>{const u=m((()=>nu.generateMonths(Vd(t))),[t]),h=e=>{const t="start"===r&&i&&e.isAfter(i,"month")&&a,o="end"===r&&n&&e.isBefore(n,"month")&&a;return!(!t&&!o)},p=e=>{const t=e.format("MMMM"),r=(n=e,!nu.isWithinRange(n,s?Vd(s):void 0,l?Vd(l):void 0,"month"));var n;const i=o.isSame(e,"month")?"selected-month":Vd().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||h(e),interactive:!r||c,month:t,variant:i}};return u.length?e(qu,{children:u.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,month:o}=p(t);return e(Gu,{$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||d(e)})(t,!n),children:o},o)}))}):null},Qu=M.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Ju=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${hc["duration-150"]} ${hc["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${uc["body-md-regular"]}
    border-radius: ${fc.md};
    border: ${pc["width-010"]} ${pc.solid} transparent;
    background-clip: border-box;
    color: ${dc.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?F`
                cursor: pointer;
            `:t?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?F`
                background: ${dc["bg-selected"]};
                border-color: ${dc["border-selected"]};
                color: ${dc["text-selected"]};
                font-weight: ${uc.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${dc["bg-selected-hover"]};
                        border-color: ${dc["border-selected-hover"]};
                        color: ${dc["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?F`
                color: ${dc["text-primary"]};
                font-weight: ${uc.Spec["weight-semibold"]};
            `:"other-decade"===e||r?F`
                color: ${dc["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?F`
                &:hover {
                    background: ${dc["bg-selected-hover"]};
                    border-color: ${dc["border-selected-hover"]};
                    color: ${dc["text-selected-hover"]};
                    font-weight: ${uc.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${dc["bg-hover"]};
                color: ${dc["text-hover"]};
                font-weight: ${uc.Spec["weight-semibold"]};
            }
        `}}
`,eh=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,isNewSelection:a,minDate:s,maxDate:l,allowDisabledSelection:c,onYearSelect:d})=>{const u=m((()=>nu.generateDecadeOfYears(Vd(t))),[t]),h=e=>{const t="start"===r&&i&&e.isAfter(i,"year")&&a,o="end"===r&&n&&e.isBefore(n,"year")&&a;return!(!t&&!o)},p=e=>{const t=[0,11].includes(u.indexOf(e)),r=e.year(),n=(i=e,!nu.isWithinRange(i,s?Vd(s):void 0,l?Vd(l):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":Vd().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||c,year:r,variant:a}};return u.length?e(Qu,{children:u.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,year:o}=p(t);return e(Ju,{$variant:i,$disabledDisplay:r,$interactive:!!n,onClick:()=>((e,t)=>{t||d(e)})(t,!n),children:o},o)}))}):null},th=i.forwardRef(((n,i)=>{var{children:s,initialCalendarDate:l,minDate:c,maxDate:d,currentFocus:h,selectedStartDate:p,selectedEndDate:g,selectWithinRange:f,dynamicHeight:m=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:k,isLeftArrowDisabled:D,isRightArrowDisabled:T,getMonthHeaderLabel:O,getYearHeaderLabel:E}=n,_=dt(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[M,F]=a(cu.toDayjs(l)),[I,A]=a(cu.toDayjs(l)),[B,j]=a("default"),z=o(null),R=o(null),P=o(null);b(i,(()=>({defaultView(){j("default")},resetView(){const e=cu.toDayjs(l);F(e),A(e),j("default")},setCalendarDate(e){const t=cu.toDayjs(e);F(t),A(t)}}))),u((()=>{const e=cu.toDayjs(l);F(e),A(e)}),[l]),u((()=>{U(I)}),[I]);const L=()=>{var e;"month-options"!==B?(j("month-options"),null===(e=P.current)||void 0===e||e.focus()):(j("default"),F(I))},N=()=>{"default"!==B?(j("default"),F(I)):j("year-options")},H=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(M):M.subtract(1,"month");switch(B){case"default":A(t),F(t);break;case"month-options":F((e=>e.subtract(1,"year")));break;case"year-options":F((e=>e.subtract(10,"year")))}},W=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=k?k(M):M.add(1,"month");switch(B){case"default":A(t),F(t);break;case"month-options":F((e=>e.add(1,"year")));break;case"year-options":F((e=>e.add(10,"year")))}},Y=e=>{F(e),A(e),x||j("default")},V=()=>{const e=cu.toDayjs(l);F(e),A(e),"default"===B?K("reset"):j("default")},U=e=>{y&&y(e)},K=e=>{$&&$(e)},X=()=>{if(!c||v)return!1;const e=Vd(c);return"month-options"===B?!nu.isPreviousYearWithinRange(M,e):"year-options"===B?!nu.isPreviousDecadeWithinRange(M,e):D?D(M):!nu.isPreviousMonthWithinRange(M,e)},q=()=>{if(!d||v)return!1;const e=Vd(d);return"month-options"===B?!nu.isNextYearWithinRange(M,e):"year-options"===B?!nu.isNextDecadeWithinRange(M,e):T?T(M):!nu.isNextMonthWithinRange(M,e)},G=()=>{if("year-options"===B){const{beginDecade:e,endDecade:t}=nu.getStartEndDecade(M);return`${e} to ${t}`}return E?E(M):M.format("YYYY")},Z=()=>{const n=O?O(M):M.format("MMM");return t(r,{children:[t(Wu,{type:"button",tabIndex:-1,$expanded:"month-options"===B,$visible:"default"===B,id:"month-dropdown",onClick:L,children:[e(Yu,{children:n}),e(ju,{})]}),t(Wu,{type:"button",tabIndex:-1,$expanded:"default"!==B,id:"year-dropdown",onClick:N,children:[e(Yu,{children:G()}),e(ju,{})]})]})},Q=()=>{switch(B){case"month-options":return e(Zu,{calendarDate:M,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:p,selectedEndDate:g,viewCalendarDate:I,isNewSelection:!!f,onMonthSelect:Y,allowDisabledSelection:v});case"year-options":return e(eh,{calendarDate:M,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:p,selectedEndDate:g,viewCalendarDate:I,isNewSelection:!!f,onYearSelect:Y,allowDisabledSelection:v});default:return null}};return t(zu,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container"},_,{children:[C&&t(Nu,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Hu,{children:Z()}),t(Vu,{children:[e(Uu,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:H,children:e(Au,{})}),e(Uu,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:W,children:e(Bu,{})})]})]}),e(Ru,{children:(()=>{const n="function"==typeof s?s({calendarDate:I,currentView:B}):s;return t(r,m?{children:["default"===B&&n,Q()]}:{children:[e(Pu,{children:n}),e(Lu,{$visible:"default"!==B,children:Q()})]})})()}),(()=>{if(!x)return;const r=!!("default"===B)&&w;return t(Ku,{children:[e(Xu,{ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:V,children:"Cancel"}),e(Xu,{"data-testid":"done-button",ref:z,type:"button",onClick:()=>{r||(F(I),"default"===B?K("confirmed"):j("default"))},disabled:r,children:"Done"})]})})()]}))})),rh=M.div`
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

    ${uc["body-sm-semibold"]};
    color: ${dc.text};
`,ih=M.div`
    grid-column: 1 / -1;
    display: flex;
`,oh=e=>{let t=dc.bg,r="transparent";switch(e.$type){case"hover-subtle":t=dc["bg-hover"],r=dc["bg-hover"];break;case"hover":t=dc["bg-hover-strong"],r=dc["bg-hover-strong"];break;case"hover-outline":t=dc["bg-hover-subtle"],r=dc["border-hover"];break;case"selected-outline":t=dc["bg-selected"],r=dc["border-selected"];break;case"selected-outline-subtle":t=dc["bg-selected"],r=dc["border-selected-subtle"];break;case"selected-hover":t=dc["bg-selected-hover"];break;case"selected-hover-outline":t=dc["bg-selected-hover"],r=dc["border-selected-hover"]}return{color:t,borderColor:r}},ah=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,sh=M.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${hc["duration-150"]} ${hc["ease-default"]};
    border: ${pc["width-010"]} ${pc.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=oh(e);return F`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,lh=M(sh)`
    left: 0;
`,ch=M(sh)`
    right: 0;
`,dh=M.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${hc["duration-150"]} ${hc["ease-default"]};

    border: ${pc["width-010"]} ${pc.solid} transparent;
    border-radius: ${fc.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=oh(e);return F`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,uh=M(dh)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,hh=M(dh)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,ph=M.div`
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

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?F`
                    visibility: hidden;
                `:F`
                color: ${dc["text-disabled-subtlest"]};
            `;switch(r){case"selected":return F`
                    font-weight: ${uc.Spec["weight-semibold"]};
                    color: ${dc["text-selected"]};
                `;case"selected-hover":return F`
                    font-weight: ${uc.Spec["weight-semibold"]};
                    color: ${dc["text-selected-hover"]};
                `;case"current":return F`
                    font-weight: ${uc.Spec["weight-semibold"]};
                    color: ${dc["text-primary"]};
                `;case"hover":return F`
                    font-weight: ${uc.Spec["weight-semibold"]};
                    color: ${dc["text-hover"]};
                `;case"unavailable":return F`
                    color: ${dc["text-disabled-subtlest"]};
                `;case"hidden":return F`
                    visibility: hidden;
                `;default:return F`
                    color: ${dc.text};
                `}}}
`,gh=M.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,fh=({bgLeft:r,bgRight:n,circleLeft:i,circleRight:o,labelType:a,disabled:s,interactive:l,currentDateIndicator:c,date:d,onSelect:u,onHover:h,onHoverEnd:p})=>{const g=Vd().isSame(d,"day");return t(ah,{children:[e(lh,{$type:r}),e(uh,{$type:i}),e(ch,{$type:n}),e(hh,{$type:o}),t(ph,{$type:a,$disabled:s,$interactive:l,onClick:()=>{u(d)},onMouseEnter:()=>{h(d)},onMouseLeave:()=>{p&&p(d)},children:[d.date(),c&&g&&e(gh,{$disabled:s})]})]})},mh=({date:t,calendarDate:r,startDate:n,endDate:i,currentFocus:o,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:p,onHover:g})=>{const f=nu.isDisabledDay(t,c,s,l),m=!f||d,b=()=>{const e=Vd(a),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===o&&i&&t&&(n&&r?(c=a,d=i):(s=a,l=n||i)),"end"===o&&n&&r&&(i&&t?(c=n,d=a):(s=i||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:r,disabled:f,interactive:m,currentDateIndicator:!0,onSelect:()=>{p(t,!m)},onHover:()=>{g(t.format("YYYY-MM-DD"),!m)}};return e(fh,Object.assign({},v,(()=>{const e={};if(r.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(Vd().isSame(t,"day")&&!f)e.labelType="current";else if(u){const r="end"===o&&n&&t.isBefore(n),a="start"===o&&i&&t.isAfter(i);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(n,"day"),a=t.isSame(i,"day");return h&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&i&&t.isBetween(n,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:c}=b();if(r){const r=t.isSame(n,"day"),o=t.isSame(i,"day");r||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const r=t.isSame(o,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Vd.extend(qd);const bh=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:o,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:d,minDate:u,maxDate:h,allowDisabledSelection:p,showActiveMonthDaysOnly:g})=>{const f=m((()=>nu.generateDays(r)),[r]),[b,v]=a(""),y=(e,t)=>{t&&!p||l(e)},x=(e,t)=>{t&&!p||(v(e),c(e))},w=()=>{v(""),c("")};return t(rh,{"data-testid":"calendar-content",children:[f[0].map(((t,r)=>e(nh,{children:Vd(t).format("ddd")},`week-day-${r}`))),f.map(((t,a)=>e(ih,{onMouseLeave:w,children:t.map(((t,a)=>e(mh,{date:t,calendarDate:r,startDate:o,endDate:s,hoverDate:b,currentFocus:n,minDate:u,maxDate:h,disabledDates:i,allowDisabledSelection:p,isNewSelection:d,showActiveMonthDaysOnly:g,onSelect:y,onHover:x},`day-${a}`)))},a)))]})},vh=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:d,onHover:u})=>{const h=nu.isDisabledDay(t,s,o,a),p=!h||l,{start:g,end:f}=n?nu.getFixedRangeStartEnd(cu.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=i?nu.getFixedRangeStartEnd(cu.toDayjs(i),c):{start:void 0,end:void 0},v=!!n&&t.isBetween(g,f,"day","[]"),y=!!i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(g,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(f,"day")||y&&t.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:t,calendarDate:r,disabled:h,interactive:p,currentDateIndicator:!0,onSelect:()=>{d(t,!p)},onHover:()=>{u(t.format("YYYY-MM-DD"),!p)}};return e(fh,Object.assign({},C,(()=>{const e={};return v||y?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":Vd().isSame(t,"day")&&!h&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return y&&$(e,"hover",r===m,r===b),v&&$(e,"selected-outline",r===g,r===f),v&&y&&($(e,"selected-hover-outline",x,w),r===m&&r!==g&&(e.circleLeft="selected-hover")),e})()))},yh=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=m((()=>nu.generateDays(r)),[r]),[p,g]=a(""),f=(e,t)=>{t&&!d||(o(e),e&&!Vd(e).isSame(e,"month")&&g(""))},b=(e,t)=>{t&&!d||(g(e),s(e))},v=()=>{g(""),s("")};return t(rh,{"data-testid":"calendar-content",children:[h[0].map(((t,r)=>e(nh,{children:Vd(t).format("ddd")},`week-day-${r}`))),h.map(((t,o)=>e(ih,{onMouseLeave:v,children:t.map(((t,o)=>e(vh,{date:t,calendarDate:r,selectedDate:i,hoverDate:p,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,onSelect:f,onHover:b,numberOfDays:u},`day-${o}`)))},o)))]})},xh=M.div`
    width: 100%;
    background: ${dc.bg};
`,wh=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const h=nu.isDisabledDay(t,s,o,a),p=!h||l,g={date:t,calendarDate:r,disabled:h,interactive:p,currentDateIndicator:!0,onSelect:()=>{d(t,!p)},onHover:()=>{u(t.format("YYYY-MM-DD"),!p)}};return e(fh,Object.assign({},g,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":Vd().isSame(t,"day")&&!h&&(e.labelType="current");const o=t.isSame(n,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Vd.extend(qd);const $h=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,showActiveMonthDaysOnly:u})=>{const h=m((()=>nu.generateDays(r)),[r]),[p,g]=a(""),f=(e,t)=>{t&&!d||o(e)},b=(e,t)=>{t&&!d||(g(e),s(e))},v=()=>{g(""),s("")};return t(rh,{"data-testid":"calendar-content",children:[h[0].map(((t,r)=>e(nh,{children:Vd(t).format("ddd")},`week-day-${r}`))),h.map(((t,o)=>e(ih,{onMouseLeave:v,children:t.map(((t,o)=>e(wh,{date:t,calendarDate:r,selectedDate:i,hoverDate:p,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,showActiveMonthDaysOnly:u,onSelect:f,onHover:b},`day-${o}`)))},o)))]})},Ch=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=nu.isDisabledDay(t,s,o,a),h=!u||l,{start:p,end:g}=nu.getWeekStartEnd(cu.toDayjs(n)),{start:f,end:m}=nu.getWeekStartEnd(cu.toDayjs(i)),b=n&&t.isBetween(p,g,"day","[]"),v=i&&t.isBetween(f,m,"day","[]"),y=b&&t.isSame(p)||v&&t.isSame(f),x=b&&t.isSame(g)||v&&t.isSame(m),w={date:t,calendarDate:r,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(t,!h)},onHover:()=>{d(t.format("YYYY-MM-DD"),!h)}};return e(fh,Object.assign({},w,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":Vd().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},Sh=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const u=m((()=>nu.generateDays(r)),[r]),[h,p]=a(""),g=(e,t)=>{if(t&&!d)return;const r=e.startOf("week");o(r),e&&!Vd(e).isSame(r,"month")&&p("")},f=(e,t)=>{t&&!d||(p(e),s(e))},b=()=>{p(""),s("")};return t(rh,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e(nh,{children:Vd(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e(ih,{onMouseLeave:b,children:t.map(((t,o)=>e(Ch,{date:t,calendarDate:r,selectedDate:i,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,onSelect:g,onHover:f},`day-${o}`)))},o)))]})},kh=i.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:i,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:p,allowDisabledSelection:g,selectWithinRange:f=!0,initialCalendarDate:m,numberOfDays:v,showActiveMonthDaysOnly:y=!1},x)=>{const w=o(null),$=o(void 0);b(x,(()=>({reset(){var e;null===(e=w.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=w.current)||void 0===t||t.setCalendarDate(e)}})));const C=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=w.current)||void 0===t||t.setCalendarDate(r),k(r)},S=e=>{D(e)},k=e=>{n&&n(e)},D=e=>{i&&i(e)},T=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(xh,{children:e(th,{ref:w,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:h,maxDate:p,selectWithinRange:f,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||T(e),$.current=e},initialCalendarDate:m,children:({calendarDate:r})=>(r=>{switch(u){case"week":return e(Sh,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:C,onHover:S});case"fixed-range":return e(yh,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:C,onHover:S,numberOfDays:v});case"single":return e($h,{calendarDate:r,disabledDates:t,selectedDate:s,minDate:h,maxDate:p,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:C,onHover:S});default:return e(bh,{calendarDate:r,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:p,isNewSelection:f,allowDisabledSelection:g,showActiveMonthDaysOnly:y,onSelect:C,onHover:S})}})(r)})})})),Dh=i.forwardRef(((t,r)=>{var{width:n}=t,i=dt(t,["width"]);return e(Fu,{$width:n,"data-testid":"calendar-dropdown",children:e(kh,Object.assign({ref:r},i))})})),Th=t=>{var{className:r,styleType:n="bordered",value:i,onSelect:o}=t,s=dt(t,["className","styleType","value","onSelect"]);const[l,c]=a(i);return u((()=>{c(i)}),[i]),e(Oh,{className:r,$hasBorder:"bordered"===n,children:e(kh,Object.assign({value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==o||o(e)}},s))})},Oh=M.div`
    --vertical-inset: ${gc["spacing-24"]};
    --horizontal-inset: ${gc["spacing-32"]};
    --header-bottom-spacing: ${gc["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return F`
                border: ${pc["width-010"]} ${pc.solid} ${dc.border};
                border-radius: ${fc.lg};
                overflow: hidden;
            `}}
`,Eh=M.div`
    border-radius: ${fc.md};
    background: ${dc.bg};
    padding: ${gc["spacing-16"]} ${gc["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,_h=t=>{var{children:r}=t,n=dt(t,["children"]);const i=n["data-testid"]||"card";return e(Eh,Object.assign({},n,{"data-testid":i,children:"string"==typeof r?e(_c.BodyBL,{children:r}):r}))},Mh=I`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Fh=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>F`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,Ih=F`
    animation: ${hc["duration-150"]} ${hc["ease-default"]} ${Mh};
    width: 100%;
    height: 100%;
    transition: color ${hc["duration-150"]} ${hc["ease-default"]};
`,Ah=M(H)`
    ${Ih}
    color: ${dc["icon-primary-subtlest"]};
`,Bh=M(W)`
    ${Ih}
    color: ${dc["icon-disabled-subtle"]};
`,jh=M(Y)`
    ${Ih}
    color: ${e=>e.$disabled?dc["icon-disabled-subtle"](e):dc["icon-selected"](e)};
`,zh=M(V)`
    ${Ih}
    color: ${e=>e.$disabled?dc["icon-disabled-subtle"](e):dc["icon-selected"](e)};
`,Rh=M.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Ah},
        &:hover
        + ${jh},
        &:hover
        + ${zh} {
        color: ${e=>!e.disabled&&dc["icon-hover"](e)};
    }
`,Ph=r=>{var{className:n,checked:i,disabled:a,indeterminate:s,onChange:l,onKeyPress:c,displaySize:d="default"}=r,h=dt(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=o(null);u((()=>{p.current&&(p.current.indeterminate=null!=s&&s)}),[s]);const g=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(Fh,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:g,$displaySize:d,$disabled:a,$unchecked:!(s||i||a),children:[e(Rh,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:g,disabled:a},h)),s?e(zh,{$disabled:a,"data-testid":"indeterminate"}):i?e(jh,{$disabled:a,"data-testid":"checkmark"}):a?e(Bh,{"data-testid":"empty-disabled-checkbox"}):e(Ah,{$disabled:a,"data-testid":"empty-checkbox"})]})};var Lh=Qo,Nh=/\s/;var Hh=function(e){for(var t=e.length;t--&&Nh.test(e.charAt(t)););return t},Wh=/^\s+/;var Yh=function(e){return e?e.slice(0,Hh(e)+1).replace(Wh,""):e},Vh=xa,Uh=ga,Kh=/^[-+]0x[0-9a-f]+$/i,Xh=/^0b[01]+$/i,qh=/^0o[0-7]+$/i,Gh=parseInt;var Zh=function(e){if("number"==typeof e)return e;if(Uh(e))return NaN;if(Vh(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Vh(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Yh(e);var r=Xh.test(e);return r||qh.test(e)?Gh(e.slice(2),r?2:8):Kh.test(e)?NaN:+e},Qh=xa,Jh=function(){return Lh.Date.now()},ep=Zh,tp=Math.max,rp=Math.min;var np=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function f(){var e=Jh();if(g(e))return m(e);s=setTimeout(f,function(e){var r=t-(e-l);return u?rp(r,o-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?p(e):(n=i=void 0,a)}function b(){var e=Jh(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?p(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),p(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=ep(t)||0,Qh(r)&&(d=!!r.leading,o=(u="maxWait"in r)?tp(ep(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Jh())},b},ip=Uo(np),op=np,ap=xa;var sp,lp,cp=Uo((function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ap(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),op(e,t,{leading:n,maxWait:t,trailing:i})})),dp=new Map,up=new WeakMap,hp=0,pp=void 0;function gp(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(up.has(e)||(hp+=1,up.set(e,hp.toString())),up.get(e)):"0"}(e.root):e[t]}`)).toString()}function fp(e,t,r={},n=pp){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=gp(e);let r=dp.get(t);if(!r){const n=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},dp.set(t,r)}return r}(r),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),dp.delete(i))}}function mp({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var u;const[h,p]=n.useState(null),g=n.useRef(),[f,m]=n.useState({inView:!!l,entry:void 0});g.current=d,n.useEffect((()=>{if(s||!h)return;let n;return n=fp(h,((e,t)=>{m({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&a&&n&&(n(),n=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:r,delay:t},c),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,h,o,i,a,s,r,c,t]);const b=null==(u=f.entry)?void 0:u.target,v=n.useRef();h||!b||a||s||v.current===b||(v.current=b,m({inView:!!l,entry:void 0}));const y=[p,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}!function(e){e.AM="AM",e.PM="PM"}(sp||(sp={})),function(e){e.roundToNearestHour=(e,t)=>{const r=Vd(e,"HH:mm");return(0===r.minute()?r:t?r.minute(0).add(1,"hour"):r.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=Vd(e,n),o=Vd(t,n);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(r)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:sp.AM};if(!t)return r;try{if("24hr"===e){const n=yp(t,e);r.minute=hu.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=sp.AM,r.hour=0===i?"12":hu.padValue(i.toString())):(r.period=sp.PM,r.hour=12===i?i.toString():hu.padValue((i-12).toString()))}else{const{hour:n,minute:i,period:o=""}=yp(t,e);r.hour=hu.padValue(n),r.minute=hu.padValue(i),r.period="am"===o.toLowerCase()?sp.AM:sp.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?hu.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return hu.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?hu.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?hu.padValue(n.toString()):13===n?hu.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===sp.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return hu.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:i=""}=yp(e,t),o=hu.padValue(r);let a=`${o}:${hu.padValue(n)}`;return"12hr"===t?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&o<12&&(o+=12),"am"===r&&12===o&&(o=0),xp(o,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const o=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=xp(e,n,t);o.push(r)}else{const t=xp(e,n);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const o=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),xp(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return xp(i,o,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",o=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<o)o=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&12!==o&&(o+=12),"am"===r&&12===o&&(o=0),60*o+i}}(lp||(lp={}));const bp=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},vp=e=>{const t=parseInt(e);return t>=0&&t<=59},yp=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!bp(r[0],t)||!vp(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!bp(r[0],t)||!vp(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},xp=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,wp=M.div`
    width: 100%;
`,$p=M.div`
    ${uc["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${gc["spacing-8"]} ${gc["spacing-16"]};
    border-radius: ${fc.sm};
    color: ${dc["text-primary"]};
    border: ${pc["width-010"]} ${pc.solid};
    border-color: ${dc["border-primary"]};
    background-color: ${dc.bg};

    ${bc.MaxWidth.sm} {
        padding: ${gc["spacing-16"]};
    }

    ${e=>{if(e.$warn)return F`
                color: ${dc["text-error"]};
                border-color: ${dc["border-error"]};
            `}}
`,Cp=M($p)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,Sp=M($p)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:r,$right:n,$warn:i}=e;return F`
            /* style object will be converted to px */
            ${{top:t,left:r,right:n}}

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
`,kp=M.div`
    font-weight: ${uc.Spec["weight-bold"]};
    margin-left: ${gc["spacing-8"]};
    margin-right: ${gc["spacing-24"]};

    ${bc.MaxWidth.sm} {
        margin-right: ${gc["spacing-48"]};
    }
`,Dp=M.div`
    font-weight: ${uc.Spec["weight-semibold"]};
    margin-left: auto;
`,Tp=M(U)`
    color: ${e=>e.$warn?dc["icon-error"]:dc["icon-primary"]};
`,Op=(e,t)=>t||Date.now()+1e3*(null!=e?e:0),Ep=e=>Math.max(Math.round(e/1e3),0),_p=n=>{var{className:i,align:s="right",timer:l,timestamp:c,notifyTimer:d,offset:h,mobileOffset:p,show:g,fixed:f=!0,"data-testid":m,onFinish:b,onNotify:v,onTick:y}=n,x=dt(n,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const w=o(null),$=o(!1),[C,S]=a(0),[k,D]=a(0),[T,O]=a(0),[E,_]=a(!1),[M]=((e,t,r)=>{const[n,i]=a((()=>{const r=Op(e,t)-Date.now();return Ep(r)}));u((()=>{if(!r)return;const n=Op(e,t),i=o(n);return()=>clearTimeout(i)}),[t,r,e]);const o=e=>{const t=()=>{const r=e-Date.now(),n=r%1e3,o=Ep(r);if(i(o),0!==o)return setTimeout(t,n>500?n:n+1e3)};return t()};return[n]})(l,c,E),{ref:F,inView:I}=mp({threshold:1,rootMargin:-1*C+"px 0px 0px 0px",initialInView:!0}),B=!f||I,j="number"==typeof d&&M<=d,z=A(),R=mc["sm-max"]({theme:z}),P=Ed.useMediaQuery({maxWidth:R});u((()=>{_(g)}),[g]),u((()=>{0===M?W():"number"==typeof d&&M<=d&&(N(),H())}),[M]),u((()=>{const e=function(){var e,t;const r=null!==(e=null==h?void 0:h.top)&&void 0!==e?e:168,n=null!==(t=null==p?void 0:p.top)&&void 0!==t?t:80,i=P?n:r;return i}();S(e)}),[P,null==h?void 0:h.top,null==p?void 0:p.top]),u((()=>{if(w.current){const e=cp(L,300);return L(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[w.current]),u((()=>{$.current=!1}),[l,g]);const L=()=>{if(!w.current)return;const e=w.current.getBoundingClientRect();O(e.x),D(e.right)},N=()=>{y&&y(M)},H=()=>{v&&!$.current&&($.current=!0,v())},W=()=>{_(!1),b&&b()};const Y=()=>{const{minutes:n,seconds:i}=lp.toMinutesSeconds(M),o=1!==n?"mins":"min",a=1!==i?"secs":"sec";return t(r,{children:[e(Tp,{$warn:j}),e(kp,{children:"Time left:"}),t(Dp,{children:[n," ",o," ",String(i).padStart(2,"0")," ",a]})]})};return E||0===M?t(wp,Object.assign({className:i},x,{children:[e("div",{ref:F}),e(Cp,{"data-testid":m,"data-id":"countdown-wrapper",ref:w,inert:B?void 0:"",$visible:B,$warn:j,children:Y()}),w.current&&!B&&(()=>{var t,r;const n=null!==(t=null==h?void 0:h.left)&&void 0!==t?t:"left"===s?T:void 0,i=null!==(r=null==h?void 0:h.right)&&void 0!==r?r:"right"===s?Math.floor(document.body.clientWidth-k):void 0;return e(Sp,{"data-testid":m,"data-id":"fixed-countdown-wrapper",$warn:j,$top:C,$left:n,$right:i,children:Y()})})()]})):e(r,{})},Mp=n=>i=>{switch(n){case"maintenance":return t(r,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const n=i,o=Math.floor(n.secondsLeft/60),a=n.secondsLeft%60;return t(r,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",o," minutes"," ",a," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var Fp;!function(e){e.imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:o,height:a}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${mc["sm-max"]({theme:t})}px) 400px, (max-width: ${mc["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}}}(Fp||(Fp={}));const{imgAttributeHelper:Ip}=Fp,Ap={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},Bp={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},jp=Object.assign(Object.assign({},Ap),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),zp=Object.assign(Object.assign({},Ap),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Rp=(e,t)=>new Map([["400",{img:Ip(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Ip(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Ip(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Ip(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Ip(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Ip(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Ip(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Ip(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Ip(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Ip(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Ip(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Ip(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Ip(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:Mp("inactivity")}],["maintenance",{img:Ip(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:Mp("maintenance")}],["no-item-found",{img:Ip(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Ip(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Ip(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Ip(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Ip(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Ip(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),Pp=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Lp=M.img`
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
`,Np=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,Hp=M(_c.HeaderMD)`
    margin: ${gc["spacing-32"]} 0 ${gc["spacing-16"]};
    text-align: center;
`,Wp=M.div`
    color: ${dc.text};
    text-align: center;

    ${ad({textSize:"body-baseline"})}
`,Yp=M(ed.Default)`
    margin: ${gc["spacing-32"]} auto 0;
    width: 21rem;

    ${bc.MaxWidth.sm} {
        width: 100%;
    }
`,Vp=r=>{var{type:n,img:i,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=r,u=dt(r,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=A(),p=((e,t,r)=>{switch(t){case"bookingsg":return Rp(Bp,r).get(e);case"ccube":return Rp(jp,r).get(e);case"mylegacy":return Rp(zp,r).get(e);default:return Rp(Ap,r).get(e)}})(n,d||(h||vc).resourceScheme,h),g=u["data-testid"]||"error-display",f=()=>{var e,t;switch(n){case"maintenance":{const t=l;return l&&t.dateString?null===(e=null==p?void 0:p.renderDescription)||void 0===e?void 0:e.call(p,t):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(t=null==p?void 0:p.renderDescription)||void 0===t?void 0:t.call(p,e):a||void 0}default:return a||void 0}};if(!p)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},p),i&&{img:i}),o&&{title:o}),f()&&{description:f()});return t(Pp,Object.assign({},u,{"data-testid":g,children:[e(Lp,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?t(Np,{children:[m.title&&("string"==typeof m.title?e(Hp,{"data-testid":`${g}--title`,"data-id":"error-display-title",weight:"semibold",children:m.title}):m.title),m.description&&e(Wp,{"data-testid":`${g}--description`,"data-id":"error-display-description",children:"string"==typeof m.description?e("p",{children:m.description}):m.description})]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e(Yp,Object.assign({},t))})()]}))},Up=F`
    outline-offset: -1px;
    outline: ${pc["width-020"]} ${pc.solid} ${dc["border-focus"]};
`,Kp=F`
    outline-color: ${dc["border-focus"]};
`,Xp=F`
    outline-color: ${dc["border-disabled"]};
`,qp=F`
    outline-color: ${dc["border-error-focus"]};
`,Gp=M.div`
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.sm};
    background: ${dc.bg};

    :focus-within {
        ${Up}
    }
    ${e=>e.$focused&&Up}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Kp}
                }
                ${e.$focused&&Kp}
            `:e.$disabled?F`
                background: ${dc["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Xp}
                }
                ${e.$focused&&Xp}
            `:e.$error?F`
                border-color: ${dc["border-error"]};

                :focus-within {
                    ${qp}
                }
                ${e.$focused&&qp}
            `:void 0}
`,Zp=M(Gp)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${gc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Qp=M.input`
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
`,Jp=M.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${pc["width-010"]} ${pc.solid}
            ${dc["border-focus"]};
        border-radius: ${fc.sm};
    }
`,eg=dc.border,tg=dc.text,rg=M.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${pc["width-010"]} ${pc.solid} ${eg};
    border-radius: ${fc.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,ng=M.div`
    flex: 1;
`,ig=M.table`
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
`,og=M.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${pc["width-010"]} ${pc.solid} ${eg}`:"none"};
        }
    }
`,ag=M.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return F`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return F`
                position: sticky;
                left: 0;
            `}};
`,sg=M(Jp)`
    ${uc["body-md-semibold"]}
    cursor: pointer;
    color: ${dc["text-primary"]};
    transition: ${hc["duration-150"]} ${hc["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${dc["text-hover"]};
    }
`,lg=M.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&F`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${fc.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${pc["width-010"]} ${pc.solid} ${eg};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${pc["width-010"]} ${pc.solid} ${eg};
    border-radius: 0 0 ${fc.sm} ${fc.sm};
    background-color: ${dc["bg-selected"]};
    transition: all 300ms ease;
`,cg=M.tr`
    background-color: ${dc["bg-stronger"]};
    height: 6rem;
    border-bottom: ${pc["width-010"]} ${pc.solid} ${eg};
`,dg=M.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${tg};
    border-bottom: ${pc["width-010"]} ${pc.solid} ${eg};
    ${e=>{if(e.$isCheckbox)return F`
                width: 4rem;
            `}};
`,ug=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${tg};
        margin-left: 0.5rem;
    }
`,hg=M.tr`
    background-color: ${e=>e.$isSelected?F`
                ${dc["bg-selected"]};
            `:e.$alternating?F`
                ${dc["bg-strong"]};
            `:F`
                ${dc.bg};
            `};
    border-top: ${pc["width-010"]} ${pc.solid} ${eg};
    &:hover {
        ${e=>{if(e.$isSelectable)return F`
                    background-color: ${dc["bg-hover-strong"]};
                `}};
    }
`,pg=M.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${tg};
    border-bottom: ${pc["width-010"]} ${pc.solid} ${eg};
`,gg=M(_c.BodyBL)`
    ${Dc(2)}
    text-overflow: ellipsis;
`,fg=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,mg=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,bg=M(_c.HeaderSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,vg=M.td`
    padding: 4rem 0;
`,yg=n=>{var{id:i,headers:s,rows:l,className:c,sortIndicators:d,alternatingRows:h,loadState:p="success",enableMultiSelect:f,selectedIds:m,disabledIds:b,enableActionBar:v,enableSelectAll:y,enableStickyHeader:x,emptyView:w,actionBarContent:$,renderCustomEmptyView:C,onHeaderClick:S,onSelect:k,onSelectAll:D,onClearSelectionClick:T}=n,O=dt(n,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const E=o(null),_=o(null),M=o(null),F=o(null),I=o(null),[A,B]=a(!1),[j,z]=a(!1),[R,P]=a(!1),[L,N]=a(!1),[H,W]=a(!1),{ref:Y,inView:V}=mp(),U=g((()=>{if(!I.current||!F.current)return;const e=I.current.scrollHeight>I.current.clientHeight;B(e),e?F.current.style.transform="translateY(0)":re()}),[]);u((()=>{U()}),[]),cr({onResize:U});gu("scroll",(()=>{requestAnimationFrame((()=>{A?te():re()})),I.current&&P(I.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),u((()=>{ne()}),[l]);const q=()=>(null==m?void 0:m.length)===(null==l?void 0:l.length),G=e=>!!(null==m?void 0:m.includes(e)),Z=e=>!!h&&e%2==1,Q=e=>!!(null==b?void 0:b.includes(e)),J=e=>{if(O["data-testid"])return`${O["data-testid"]}-${e}`},ee=()=>s.length+(f?1:0),te=()=>{if(!I.current)return;const e=I.current.getBoundingClientRect();N(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},re=()=>{if(!(E.current&&_.current&&I.current&&F.current&&M.current))return;const e=_.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=E.current.getBoundingClientRect().height-M.current.clientHeight-32,n=Math.min(t,r);F.current.style.transform=`translateY(-${n}px)`}else F.current.style.transform="translateY(0)"},ne=()=>{E.current&&I.current&&W(E.current.clientHeight+(v?56:0)<I.current.clientHeight)},ie=r=>{const{fieldKey:n,label:i,clickable:o=!1,style:a}="string"==typeof r?{fieldKey:r,label:r,style:void 0}:r;return e(dg,{"data-testid":J(`header-${n}`),$clickable:o,onClick:()=>o&&(null==S?void 0:S(n)),style:a,$isCheckbox:!1,children:t(ug,{children:["string"==typeof i?e(_c.BodyBL,{weight:"bold",children:i}):i,oe(n)]})},n)},oe=t=>{const n=null==d?void 0:d[t];return n?"asc"===n?e(K,{"data-testid":J(`header-${t}-arrowup`)}):e(X,{"data-testid":J(`header-${t}-arrowdown`)}):e(r,{})},ae=()=>e(dg,{"data-testid":J("header-selection"),$clickable:!1,$isCheckbox:!0,children:e(fg,{children:y&&e(Ph,{checked:q(),indeterminate:!!m&&0!==m.length&&!q(),onClick:()=>{D&&D(q())}})})}),se=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=r.id.toString(),a=r[i],s=`${o}-${i}`;return e(pg,{"data-testid":J(`row-${s}`),style:n,$isCheckbox:!1,children:"string"==typeof a||"number"==typeof a?e(gg,{children:a}):"function"==typeof a?a(r,{isSelected:G(o)}):a},s)},le=t=>e(pg,{"data-testid":J(`row-${t}-selection`),$isCheckbox:!0,children:e(fg,{children:e(Ph,{checked:G(t),onClick:()=>{k&&k(t,!G(t))},disabled:Q(t)})})}),ce=()=>e(Vp,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(bg,{weight:"bold",children:w.title}):w.title:e(bg,{weight:"bold",children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(rg,{id:i||"table-wrapper","data-testid":O["data-testid"]||"table",className:c,ref:I,onScroll:()=>{A&&I.current&&z(I.current.scrollTop+I.current.clientHeight>=I.current.scrollHeight)},children:[e(ng,{children:t(ig,{$end:R,$scrollable:A,ref:E,$stickyHeader:x,children:[e("thead",{ref:M,children:t(cg,{children:[f&&ae(),s.map(ie)]})}),e(og,{$showLastRowBottomBorder:H,children:"success"===p?!l||l.length<1?e("tr",{children:e(vg,{colSpan:ee(),children:C?C():ce()})}):e(r,{children:null==l?void 0:l.map(((e,r)=>t(hg,{"data-testid":J(`row-${e.id.toString()}`),$alternating:Z(r),$isSelectable:f,$isSelected:G(e.id.toString()),children:[f&&le(e.id.toString()),s.map((t=>se(t,e)))]},e.id.toString())))}):e("tr",{children:e("td",{colSpan:ee(),children:e(mg,{children:"loading"===p&&e(Sd,{})})})})})]})}),v&&m&&m.length>0&&(()=>{var r,n,i,o;const a=null!==(r=null==m?void 0:m.length)&&void 0!==r?r:0;return e(ag,{ref:F,$fixed:L,$left:null===(i=null===(n=null==E?void 0:E.current)||void 0===n?void 0:n.getBoundingClientRect())||void 0===i?void 0:i.left,$width:null===(o=null==E?void 0:E.current)||void 0===o?void 0:o.clientWidth,children:t(lg,{$float:(A?!j:!V)||L,$scrollable:A,children:[e(_c.BodyMD,{weight:"semibold",children:`${a} item${a>1?"s":""} selected`}),e(sg,{type:"button",onClick:T,children:"Clear selection"}),$]})})})(),e("div",{ref:e=>{_.current=e,Y(e)}})]})},xg=e=>"small"===e?2.5:3,wg=M.div`
    position: relative;
    width: 100%;
    ${e=>{const t=xg(e.$variant);return F`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,$g=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${gc["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>xg(e.$variant)}rem - 2px);
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
`,Cg=M.button`
    ${$g}
    cursor: pointer;
`,Sg=M.div`
    ${$g}
`,kg=I`
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
`,Dg=M.div`
    position: relative;
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.sm};
    background: ${dc.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${dc["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${dc["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${kg} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?F`
                background: ${dc["bg-disabled"]};

                ${Cg} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${dc.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${Cg} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?F`
                border-color: ${dc["border-error"]};

                :focus-within {
                    border-color: ${dc["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${dc["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;M.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${hc["duration-250"]} ${hc["ease-default"]};
    margin-left: ${gc["spacing-16"]};
`,M(fe)`
    color: ${dc.icon};
`;const Tg=M.div`
    height: 1px;
    background: ${dc.border};
    margin: 0 ${gc["spacing-8"]};
`,Og=M.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${dc["text-disabled"]};
            `}}
`,Eg=M.div`
    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return F`
                    ${Dc(1)}
                `}}
    overflow: hidden;
`,_g=M(Eg)`
    color: ${dc["text-subtler"]};
`,Mg=({children:t,show:r,error:n,disabled:i,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=o(null);return gu("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;r&&s()}}),"document"),e(wg,{className:c,$variant:d,children:e(Dg,{ref:u,error:n&&!r,disabled:i,$readOnly:l,expanded:r,"data-testid":a,children:t})})};var Fg;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Fg||(Fg={}));const Ig=()=>{const[e,t]=a(void 0),r=ve();return u((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Fg.Change,e),r.events.emit(Fg.Ready),()=>r.events.off(Fg.Change,e)}),[r]),e},Ag=M.div`
    display: flex;
    flex-direction: column;
`,Bg=e=>"right"===e?"bottom-end":"bottom-start",jg=({enabled:n,isOpen:i,onOpen:a,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:p=0,alignment:g="left",fitAvailableHeight:f})=>{var m;const b=A(),v=mc["sm-max"]({theme:b}),y=o(null),x=o(null),{width:w=0}=cr({targetRef:y,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<v;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:C,floatingStyles:S,context:k}=ye({open:i,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!i?null==a||a():!e&&i&&(null==s||s(r))},whileElementsMounted:xe,placement:Bg(g),middleware:[we(p),$e(),Ce({limiter:Se()}),ke({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),$]}),D=Ig(),{isMounted:T,styles:O}=De(k,{initial:{opacity:0},open:{opacity:1},duration:300}),E=Te(k,{enabled:n,toggle:h}),_=Oe(k,{enabled:n}),{getReferenceProps:M,getFloatingProps:F}=Ee([E,_]);return t(r,{children:[e("div",Object.assign({ref:e=>{y.current=e,C.setReference(e)}},M(),{children:c()})),T&&e(_e,{children:e(Me,{context:k,modal:!1,initialFocus:x,returnFocus:!1,children:e("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(m=null!=u?u:D)&&void 0!==m?m:50})},F(),{children:e(Ag,{ref:x,style:Object.assign({},O),inert:O.opacity<1?"":void 0,children:d({elementWidth:w})})}))})})]})},zg=M.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Rg=M.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return F`
                ${Pg}, ${Wg} {
                    color: ${dc["text-subtler"]};
                }
            `}}
`,Pg=M(Qp)`
    background: transparent;
    text-align: center;
`,Lg=M(Pg)`
    width: 2rem;
    margin-right: ${gc["spacing-4"]};
`,Ng=M(Pg)`
    width: 2.5rem;
`,Hg=M(Pg)`
    width: 3rem;
    margin-left: ${gc["spacing-4"]};
`,Wg=M.span`
    ${uc["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return F`
                color: ${dc.text};
            `}}
`,Yg=M.div`
    ${uc["body-baseline-regular"]}
    background-color: ${dc.bg};
    color: ${dc["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?F`
                background-color: ${dc["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?F`
                display: none;
            `:void 0}
`;Vd.extend(Kd);const Vg=i.forwardRef((({disabled:r,readOnly:n,names:i,value:s,focused:l,hoverValue:c,placeholder:d,label:h,onChange:p,onFocus:g,onBlur:f,hideInputKeyboard:m},v)=>{const y=m?"none":"numeric",[x,w,$]=yu(""),[C,S,k]=yu(""),[D,T,O]=yu(""),[E,_]=a("none"),[M,F]=a(!1),I=o(null),A=o(null),B=o(null),j=o(null),[z,R,P]=V(c);u((()=>{var e;const[t="",r="",n=""]=V(s);w(t),S(r),T(n),t||r||n||!I.current||!I.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||_("none"),l&&(F(!0),I.current&&!I.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))}),[l]),b(v,(()=>({ref:I,resetPlaceholder(){F(!1)},resetInput(){const[e="",t="",r=""]=V(s);w(e),S(t),T(r)}})),[s]);const L=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;_(t)},H=e=>{const[t,r,n]=i,o={[t]:$.current,[r]:k.current,[n]:O.current},a=e.target.name,s=o[a],l=a!==n?hu.padValue(s,!0):s;switch(a){case t:o[t]=l,w(l);break;case r:o[r]=l,S(l)}const c=`${o[n]}-${o[r]}-${o[t]}`,d=Vd(c,"YYYY-MM-DD",!0).isValid(),u=!o[t]&&!o[r]&&!o[n];d&&s!==l&&p(c),I.current&&!I.current.contains(e.relatedTarget)&&(_("none"),null==f||f(u||d))},W=e=>{var t,r;if(c)return;const n=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),a={day:x,month:C,year:D};switch(n){case i[0]:a.day=o,w(o),2===o.length&&(null===(t=B.current)||void 0===t||t.focus());break;case i[1]:a.month=o,S(o),2===o.length&&(null===(r=j.current)||void 0===r||r.focus());break;case i[2]:a.year=o,T(o)}if(!a.day&&!a.month&&!a.year)return void p("");const s=`${a.year}-${a.month}-${a.day}`;Vd(s,"YYYY-MM-DD",!0).isValid()&&p(s)},Y=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(E===i[1]&&0===C.length&&(null===(t=A.current)||void 0===t||t.focus()),E===i[2]&&0===D.length&&(null===(r=B.current)||void 0===r||r.focus()))};function V(e){if(e){const t=Vd(new Date(e));return t.isValid()?[hu.padValue(t.date().toString()),hu.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(zg,{role:"group","aria-label":h,onClick:()=>{var e;r||n||(F(!0),I.current&&!I.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))},onFocus:e=>{r||(F(!0),l||null==g||g(e))},children:[t(Rg,{ref:I,$hover:!!c,children:[e(Lg,{ref:A,name:i[0],maxLength:2,value:null!=z?z:x,onFocus:N,onBlur:H,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==i[0]||n?"DD":""}),e(Wg,{$inactive:0===x.length,children:"/"}),e(Ng,{ref:B,name:i[1],maxLength:2,value:null!=R?R:C,onFocus:N,onBlur:H,onChange:W,onKeyDown:Y,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==i[1]||n?"MM":""}),e(Wg,{$inactive:0===C.length,children:"/"}),e(Hg,{ref:j,name:i[2],maxLength:4,value:null!=P?P:D,onFocus:N,onBlur:H,onChange:W,onKeyDown:Y,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:E!==i[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&d)return e(Yg,{$hide:M,$disabled:r,onMouseDown:L,children:d})})()]})})),Ug=M(Zp)`
    height: 3rem;
`,Kg=t=>{var{minDate:r,maxDate:n,disabled:i,disabledDates:s,error:l,hideInputKeyboard:c,value:d,onChange:h,onFocus:p,onBlur:g,onYearMonthDisplayChange:f,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x}=t,w=dt(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[$,C]=a(du.sanitizeInput(d)),[S,k]=a(du.sanitizeInput(d)),[D,T]=a(void 0),[O,E]=a(!1),[_,M]=a(!1),F=o(null),I=o(null);u((()=>{const e=du.sanitizeInput(d);C(e),k(e)}),[d]);const A=e=>{!y&&du.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:n})||(k(e),m||(L(e),C(e),e&&E(!1)))},B=e=>{var t;k(e),m||(L(e),C(e),e&&(null===(t=F.current)||void 0===t||t.focus(),E(!1)),D&&T(void 0))},j=()=>{b||i||(E(!0),_||(M(!0),p&&p()))},z=e=>{var t;_&&!O&&F.current&&!F.current.contains(e.relatedTarget)&&(null===(t=I.current)||void 0===t||t.resetInput(),k($),M(!1),N())},R=e=>{T(e)},P=e=>{var t;switch(e){case"reset":k($);break;case"confirmed":C(S),L(S)}null===(t=F.current)||void 0===t||t.focus(),E(!1)},L=e=>{h&&h(e)},N=()=>{g&&g()};return e(jg,{enabled:!b&&!i,isOpen:O,renderElement:()=>e(Ug,Object.assign({tabIndex:-1,ref:F,onBlur:z,onFocus:j,$disabled:i,$readOnly:b,$focused:_,$error:l,id:v,"data-testid":w["data-testid"]},w,{children:e(Vg,{ref:I,disabled:i,onChange:A,readOnly:b,focused:O,names:["start-day","start-month","start-year"],value:S,hoverValue:D,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e(Dh,{variant:"single",initialCalendarDate:S,withButton:m,value:S,disabledDates:s,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:R,onSelect:B,onDismiss:P,onYearMonthDisplayChange:f,width:t}),onClose:()=>{var e;null===(e=I.current)||void 0===e||e.resetInput(),k($),E(!1),M(!1),N()},onDismiss:()=>{var e,t;null===(e=I.current)||void 0===e||e.resetInput(),null===(t=F.current)||void 0===t||t.focus(),k($),E(!1)},customZIndex:x,offset:16})},Xg=M.button`
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
                    background-color: ${dc.bg};
                    border: ${pc["width-010"]} ${pc.solid}
                        ${dc["border-primary"]};
                    color: ${dc["text-primary"]};

                    :hover {
                        background-color: ${dc["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${dc.bg};
                    border: ${pc["width-010"]} ${pc.solid}
                        ${dc.border};
                    color: ${dc["text-primary"]};

                    :hover {
                        background-color: ${dc["bg-hover-neutral"]};
                    }
                `;default:return F`
                    background-color: ${dc["bg-primary"]};
                    border: none;
                    color: ${dc["text-inverse"]};

                    :hover {
                        background-color: ${dc["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${dc["bg-disabled"]};
        border: ${pc["width-010"]} ${pc.solid}
            ${dc["border-disabled"]};
        color: ${dc["text-disabled"]};
        cursor: not-allowed;
    }
`,qg=i.forwardRef(((t,r)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=dt(t,["data-testid","styleType","children","sizeType","type"]);return e(Xg,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),Gg=M(qg)`
    margin: ${gc["spacing-8"]};
`,Zg=M.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${dc["bg-strong"]};
    border-radius: ${fc.sm};
`,Qg=M(ed.Default)`
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

    ${e=>{if(e.$enableDateClick)return F`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,Jg=r=>{var{selectedDate:n,minDate:i,maxDate:o,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:c,onLeftArrowClick:d,onRightArrowClick:u,onCalendarDateSelect:h}=r,p=dt(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const g=cu.toDayjs(n),f=cu.toDayjs(n).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),m=cu.isSame(n,Vd())&&c?"Today":g.format(l?"ddd":"dddd"),[b,v]=a(!1),y=e=>{h&&h(e),v(!b)},x=()=>{v(!1),d(n)},w=()=>{v(!1),u(n)};return e(jg,{enabled:!s,isOpen:b,renderElement:()=>t(Zg,Object.assign({},p,{children:[e(Gg,{"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!i&&(nu.isDisabledDay(g,void 0,i)||cu.isSame(g,i)),"aria-label":"Previous day",onClick:x,styleType:"light",sizeType:"small",children:e(Au,{})}),e(Qg,{onClick:()=>!!h&&!s&&v(!b),$enableDateClick:!!h&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!h||s,children:`${f}, ${m}`}),e(Gg,{"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!o&&(nu.isDisabledDay(g,void 0,void 0,o)||cu.isSame(g,o)),"aria-label":"Next day",onClick:w,styleType:"light",sizeType:"small",children:e(Bu,{})})]})),renderDropdown:({elementWidth:t})=>e(Dh,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:o,onSelect:y,width:t}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8})},ef=M.div`
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
                        100% - ${uc.Spec["body-size-baseline"]} -
                            ${gc["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${gc["spacing-8"]};
                }
            `}}
`,tf=M.div`
    width: 100%; // Force next flex item to break to next line
`,rf=M.div`
    display: flex;
    flex: 1;
    align-items: center;
`,nf=M(q)`
    color: ${dc.icon};
    width: ${uc.Spec["body-size-baseline"]};
    height: ${uc.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${gc["spacing-8"]};
    align-self: center;
`,of=M.div`
    position: absolute;
    background: ${e=>e.$error?dc["border-error-focus-strong"]:dc["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${gc["spacing-8"]} - (${uc.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${hc["duration-350"]} ${hc["ease-standard"]},
        opacity ${hc["duration-350"]} ${hc["ease-standard"]};
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
`,af=({children:r,currentActive:n,error:i,className:o,wrap:a})=>{const[s,l]=r;return t(ef,{className:o,$wrap:a,children:[e(rf,{"data-id":"range-container-elem1-container",children:s}),e(nf,{}),a&&e(tf,{}),e(rf,{"data-id":"range-container-elem2-container",children:l}),e(of,{"data-id":"range-container-indicator",$position:n,$error:i,$wrap:a})]})},sf=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},lf=M(Zp)`
    ${e=>e.$wrap&&F`
            padding: ${gc["spacing-12"]} ${gc["spacing-16"]};
        `}
`,cf=M.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&F`
            height: fit-content;
        `}
`,df={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},uf=r=>{var{minDate:n,maxDate:i,disabled:s,disabledDates:l,error:c,hideInputKeyboard:d,value:h,valueEnd:p,onChange:f,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:k,zIndex:D}=r,T=dt(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[O,E]=a(),[_,M]=a(void 0),[F,I]=a(!1),[A,B]=a(!1),j="week"===w,z="fixed-range"===w,[{selectedStart:R,selectedEnd:P,currentFocus:L,calendarOpen:N,isStartDirty:H,isEndDirty:W,focused:Y},V]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[i,o]=x(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&sf(r,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:df,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:j?"none":z?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=o(!1),K=o(null),X=o(null),q=o(null),G=o(null),Z=(({maxWidth:e,targetRef:t})=>{const[r,n]=a(!1);return cr({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:g((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:K});u((()=>{V.resetRange({start:du.sanitizeInput(h),end:du.sanitizeInput(p)})}),[h,p]),u((()=>{"start"===L?E(R):"end"===L&&E(P)}),[L]);const Q=e=>{var t,r,n;"Enter"!==e.code||y||(R&&P?(V.done({start:R,end:P}),null==f||f(R,P)):(V.dismiss(),null===(t=K.current)||void 0===t||t.focus(),null===(r=q.current)||void 0===r||r.resetPlaceholder(),null===(n=G.current)||void 0===n||n.resetPlaceholder()))},J=e=>{var t;if(he(e))return void(U.current=!0);if(V.changeStart(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(y||P||!W||(V.resetRange({start:"",end:""}),null==f||f("","")));if(!P)return void V.focus("end");if(Vd(e).isAfter(P,"day"))V.reselectEnd();else{if(W)return y?void 0:(V.done({start:e,end:P}),void(null==f||f(e,P)));V.focus("end")}},ee=e=>{var t,r;if(he(e))return void(U.current=!0);if(Vd(e).isBefore(R,"day"))return V.changeStart(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),void V.reselectEnd();if(V.changeEnd(e),null===(r=X.current)||void 0===r||r.setCalendarDate(e),e){if(R)return y?void 0:(V.done({start:R,end:e}),void(null==f||f(R,e)));V.focus("start")}else y||R||!H||(V.resetRange({start:"",end:""}),null==f||f("",""))},te=e=>{var t;if(he(e))return void(U.current=!0);if(V.changeStart(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(y?V.changeEnd(""):(V.resetRange({start:"",end:""}),null==f||f("","")));const r=Vd(e).format("YYYY-MM-DD"),n=Vd(r).add($-1,"day").format("YYYY-MM-DD");return V.changeStart(r),V.changeEnd(n),U.current=!1,y?void 0:(V.done({start:r,end:n}),void(null==f||f(r,n)))},re=()=>{C||s||Y||(V.focus("start"),null==m||m())},ne=e=>{var t,r;Y&&!N&&K.current&&K.current.contains(e.relatedTarget)&&(V.blur(),I(!1),B(!1),null===(t=q.current)||void 0===t||t.resetPlaceholder(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null==b||b())},ie=e=>t=>{t.stopPropagation(),C||(V.focus(e),oe(),ae(),Y||null==m||m())},oe=()=>{if(j){const e=cu.toDayjs(R).startOf("week").format("YYYY-MM-DD");I(!0),B(!0),E(e)}},ae=()=>{z&&(B(!0),E(R))},se=e=>{var t;e&&!U.current||(V.resetStart(),null===(t=q.current)||void 0===t||t.resetInput())},le=e=>{var t;e&&!U.current||(V.resetEnd(),null===(t=G.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{const t=Vd(e).startOf("week").format("YYYY-MM-DD"),r=Vd(e).endOf("week").format("YYYY-MM-DD");if(V.changeStart(t),V.changeEnd(r),U.current=!1,!y)V.done({start:t,end:r}),null==f||f(t,r)})(e);break;case"fixed-range":te(e);break;default:"start"===L?J(e):"end"===L&&ee(e)}},de=e=>{var t;switch(null===(t=K.current)||void 0===t||t.focus(),e){case"reset":V.cancel();break;case"confirmed":V.done({start:R,end:P}),null==f||f(R,P)}},ue=e=>{M(e)},he=e=>!k&&e&&du.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:i}),pe=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===L?_:void 0,end:"end"===L?_:void 0};break;case"week":if(!_)return;t={start:Vd(_).startOf("week").format("YYYY-MM-DD"),end:Vd(_).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!_)return;t={start:Vd(_).format("YYYY-MM-DD"),end:Vd(_).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(jg,{enabled:!C&&!s,isOpen:N,onClose:()=>{var e,t;V.blur(),I(!1),B(!1),null===(e=q.current)||void 0===e||e.resetPlaceholder(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null==b||b()},onDismiss:()=>{var e,t,r;V.dismiss(),null===(e=K.current)||void 0===e||e.focus(),null===(t=q.current)||void 0===t||t.resetPlaceholder(),null===(r=G.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(lf,Object.assign({ref:K,tabIndex:-1,onFocus:re,onBlur:ne,$focused:Y,$disabled:s,$readOnly:C,$error:c,$wrap:Z,id:S,"data-testid":T["data-testid"],onKeyDown:Q},T,{children:t(af,{currentActive:L,wrap:Z,error:c,children:[e(cf,{$wrap:Z,children:e(Vg,{ref:q,placeholder:"From",names:["start-day","start-month","start-year"],value:R,disabled:s,readOnly:F||C,focused:"start"===L,hoverValue:pe("start"),onChange:z?te:J,onFocus:ie("start"),onBlur:se,hideInputKeyboard:d})}),e(cf,{$wrap:Z,children:e(Vg,{ref:G,placeholder:"To",names:["end-day","end-month","end-year"],value:P,disabled:s,readOnly:A||C,focused:"end"===L,hoverValue:pe("end"),onChange:ee,onFocus:ie("end"),onBlur:le,hideInputKeyboard:d})})]})})),renderDropdown:({elementWidth:t})=>e(Dh,{ref:X,variant:w,initialCalendarDate:O,withButton:y,value:R,endValue:P,selectWithinRange:H||W,currentFocus:L,disabledDates:l,minDate:n,maxDate:i,allowDisabledSelection:k,onSelect:ce,onDismiss:de,onHover:ue,onYearMonthDisplayChange:v,numberOfDays:$,width:t}),customZIndex:D,offset:16})},hf=M.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:i,$lgStart:o,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:h,$xxsStart:p,$xxsSpan:g}=e;return F`
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
                grid-column: ${p||"auto"} / span ${g||1};
            }
        `}}
`,pf=i.forwardRef(((t,r)=>{const n=A(),{xxlCols:i,xlCols:o,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=dt(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(hf,Object.assign({ref:r},(()=>{const e=Wl["xxl-column"]({theme:n}),t=Wl["xl-column"]({theme:n}),r=Wl["lg-column"]({theme:n}),u=Wl["md-column"]({theme:n}),p=Wl["sm-column"]({theme:n}),g=Wl["xs-column"]({theme:n}),f=Wl["xxs-column"]({theme:n}),m=h(i||o||a||s||l||c||d,e,"xxl"),b=h(o||a||s||l||c||d,t,"xl"),v=h(a||s||l||c||d,r,"lg"),y=h(s||l||c||d,u,"md"),x=h(l||c||d,p,"sm"),w=h(c||d,g,"xs"),$=h(d,f,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),gf={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ff=e=>Object.keys(gf).reduce(((t,r)=>{const n=gf[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),mf={MaxWidth:ff("max-width"),MinWidth:ff("min-width")},bf=gf,vf=M.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:i,$mobileStart:o,$mobileSpan:a}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${mf.MaxWidth.tablet} {
                grid-column: ${n||"auto"} / span
                    ${i||1};
            }

            ${mf.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${a||1};
            }
        `}}
`,yf=i.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:i,desktopCols:o}=t,a=dt(t,["mobileCols","tabletCols","desktopCols"]);return e(vf,Object.assign({ref:r},(()=>{const e=i||n,t=n,r=xf(o||i||n),a=xf(e),s=xf(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),xf=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let o;return o=i===n?1:i-n,{start:n,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},wf=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||dc.border(e);const r=encodeURIComponent(t),n=e.$thickness||1;return F`
        background-color: transparent;
        height: ${n}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${n}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${r}" stroke-width="${n+1}" stroke-dasharray="4 4" /></svg>');
    `},$f=M.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return F`
                    ${wf}
                `;case"solid":return F`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||dc.border};
                `}}}
`,Cf=t=>{var{thickness:r=1,lineStyle:n="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:c,mdCols:d,lgCols:u,xlCols:h,xxlCols:p,mobileCols:g,tabletCols:f,desktopCols:m}=t,b=dt(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==g||void 0!==f||void 0!==m;switch(i){case"flex":return e($f,Object.assign({className:a,$thickness:r,$lineStyle:n,$color:o},b));case"grid":return v?e(yf,Object.assign({className:a,mobileCols:g,tabletCols:f,desktopCols:m},b,{children:e($f,{$thickness:r,$lineStyle:n,$color:o})})):e(pf,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,r=c||t,n=d||r,i=u||n,o=h||i;return{xxlCols:p||o,xlCols:o,lgCols:i,mdCols:n,smCols:r,xsCols:t,xxsCols:e}})(),b,{children:e($f,{$thickness:r,$lineStyle:n,$color:o})}))}},Sf=M.div`
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
`,kf=M.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?dc["overlay-subtle"]:dc["overlay-strong"]};
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
`,Df=({show:t=!1,rootId:r,onOverlayClick:n,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:p,id:g})=>{const[f,m]=a(null),[b,v]=a(),[y]=a((()=>uu.generate())),x=Ie(),w=o(),$=o(null),C=s&&i.cloneElement(s,{ref:$}),S=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root",k=null!=p?p:b?99999:99998;(e=>{const t=ve();u((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Fg.Change,r)}),[t,e]),u((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Fg.Change,r)};return null==t||t.events.on(Fg.Ready,r),()=>null==t?void 0:t.events.off(Fg.Ready,r)}),[t,e])})(k),u((()=>(_(),m(O()),()=>{A(),F().length<1&&M("remove")})),[]),u((()=>{if(t){const e=E();T(e),I();const t=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{F().length<1&&M("remove")}),200);return()=>clearTimeout(e)}}),[t]);const T=e=>{w.current=e,v(e)},O=()=>document&&r?document.getElementById(r):document?document.body:null,E=()=>F().length>0,_=()=>{if(!document.getElementById(Of)){const e=document.createElement("style");e.id=Of;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Ef} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ef}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const t=document.body.classList.contains(Ef);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Ef):document.body.classList.add(Ef)},F=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},I=()=>{const e=F();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=F();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},B=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&h&&(e.preventDefault(),n())};return f?D.createPortal(e(Sf,{id:S,"data-testid":S,$show:t,$zIndex:k,children:s&&e(Ae,{id:x,children:e(kf,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:c,$disableTransition:d,onClick:B,children:C})})}),f):null},Tf=t=>e(Fe,{children:e(Df,Object.assign({},t))}),Of="lifesg-ds-overlay-stylesheet",Ef="lifesg-ds-overlay-open",_f=M.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${dc.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${dc.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?F`
            right: 0;
            transition: all ${hc["duration-800"]} ${hc["ease-exit"]};
        `:F`
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
`,Mf=M.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${gc["spacing-16"]};
    padding: ${gc["spacing-32"]} ${gc["spacing-16"]}
        ${gc["spacing-16"]};
    background-color: ${dc.bg};
    border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};

    ${bc.MaxWidth.lg} {
        gap: ${gc["spacing-8"]};
        padding: ${gc["spacing-32"]} ${gc["spacing-20"]}
            ${gc["spacing-16"]};
    }
`,Ff=M(kc)`
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
`,If=M(_c.HeaderMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Af=M.div`
    flex: 1;
    overflow-y: auto;
`,Bf=r=>{var{children:n,heading:i,show:s,onClose:l,onOverlayClick:c}=r,d=dt(r,["children","heading","show","onClose","onOverlayClick"]);const[h,p]=a(s),[g]=a((()=>uu.generate())),f=o(null);u((()=>{if(!s){const e=setTimeout((()=>p(!1)),500);return()=>clearTimeout(e)}p(!0)}),[s]);return e(Tf,{show:h,enableOverlayClick:!0,onOverlayClick:c,children:t(_f,Object.assign({$show:s,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":g,onTransitionEnd:e=>{var t;"visibility"===e.propertyName&&s&&(null===(t=f.current)||void 0===t||t.focus())}},d,{children:[t(Mf,{children:[e(If,{id:g,ref:f,tabIndex:-1,weight:"bold",children:i}),e(Ff,{"aria-label":"Close drawer",onClick:l,focusHighlight:!1,children:e(je,{"aria-hidden":!0})})]}),e(Af,{children:n})]}))})},jf=({className:t,progress:r,color:n,"data-testid":i})=>e(zf,{className:t,$innerWidth:r,$color:n,"data-testid":i,children:e("progress",{value:100*r,max:100})}),zf=M.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):dc["icon-primary-subtle"](e),F`
            border: ${pc["width-010"]} ${pc.solid} ${r};
            border-radius: ${fc.sm};

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
`,Rf=M.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${bc.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Pf=t=>{var{id:r="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=t,p=dt(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[g,f]=a(),[m,b]=a();u((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),u((()=>{var e,t;n&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const v=()=>{const e=.01*window.innerHeight;f(e)},y=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;f(e),b(window.visualViewport.offsetTop)}};return e(Tf,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:l,zIndex:c,children:e(Rf,Object.assign({show:n,animationFrom:i,"data-testid":r,verticalHeight:g,offsetTop:m},p,{children:o}))})},Lf=M.div`
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
`,Nf=M(kc)`
    position: absolute;
    top: var(--close-button-top-inset, ${gc["spacing-16"]});
    right: var(--close-button-right-inset, ${gc["spacing-16"]});
    padding: 0;
    color: ${dc.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${bc.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${gc["spacing-20"]});
    }
`,Hf=r=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=r,s=dt(r,["id","children","onClose","showCloseButton"]);return t(Lf,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Nf,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(je,{})}),i]}))},Wf=Object.assign(Pf,{Box:Hf}),Yf=F`
    ${e=>`\n        ${bc.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${mc["sm-max"](e)}px)\n    `}
`,Vf=F`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${mc["sm-max"](e)}px)\n    `}
`,Uf=M.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>F`
            ${pc.Util["dashed-default"]({radius:fc.sm,thickness:pc["width-040"],colour:e.$disabled?dc["border-disabled"]:dc.border})}

            background-color: ${e.$disabled?dc["bg-disabled"]:dc.bg};
        `}
    height: 14.125rem;
`,Kf=M(ed.Default)`
    width: fit-content;
    margin: 0 ${gc["spacing-20"]};

    :disabled {
        border-color: ${dc["border-strong"]};
    }
`,Xf=M(qg)`
    position: absolute;
    top: ${gc["spacing-16"]};
    right: ${gc["spacing-16"]};

    :disabled {
        border-color: ${dc["border-strong"]};
    }
`,qf=M.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${gc["spacing-16"]}) * 2);
    height: 100%;
`,Gf=M.div`
    background: ${dc["bg-primary-subtlest"]};
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.sm};
    margin: 0 ${gc["spacing-20"]};
    padding: ${gc["spacing-16"]};
    display: flex;
    gap: ${gc["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Zf=M(_c.BodySM)`
    margin-top: ${gc["spacing-16"]};
`,Qf=M(Wf)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Jf=M.div`
    width: 100%;
    margin: auto;
    padding: ${gc["layout-xxl"]} ${gc["layout-sm"]};

    ${Yf} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,em=M(Wf.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${gc["spacing-16"]};

    ${Yf} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${gc["spacing-8"]};
        --close-button-right-inset: ${gc["spacing-20"]};
    }
`,tm=M.h2`
    ${uc["body-baseline-semibold"]}
    color: ${dc.text};
    margin-bottom: ${gc["spacing-16"]};
    text-align: center;

    ${Yf} {
        ${uc["body-md-semibold"]}
        margin: ${gc["spacing-12"]} 0;
    }
`,rm=M.div`
    width: 100%;
    height: 20rem;
    border-radius: ${fc.lg};
    overflow: hidden;

    ${Yf} {
        border-radius: 0;
        flex: 1;
    }

    ${Vf} {
        background: ${dc["bg-strong"]};
    }
`,nm=M.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${dc["bg-stronger"]};
    margin: auto;

    ${Yf} {
        aspect-ratio: 4/3;
    }
    ${bc.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Vf} {
        width: auto;
        height: 100%;
    }
`,im=M.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${dc["border-strong"]};
    pointer-events: none;

    ${Yf} {
        width: calc(100% - ${gc["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,om=M.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${gc["spacing-16"]};

    ${bc.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${gc["spacing-16"]} ${gc["spacing-24"]}
            ${gc["spacing-48"]};
        gap: ${gc["spacing-16"]};
    }

    ${Vf} {
        flex-direction: row;
        margin: ${gc["spacing-16"]} ${gc["spacing-20"]};
    }
`,am=M(ed.Default)`
    width: 8.5rem;
    ${bc.MaxWidth.sm} {
        width: 100%;
    }
    ${Vf} {
        height: 2.5rem;
    }
`,sm=M.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,lm=M.canvas`
    cursor: crosshair;
`,cm=v((()=>ut(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.066efe78.js")).ESignatureCanvas}})))),dm=n=>{const{description:i,id:s,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:h,disabled:p}=n,g=dt(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[f,m]=a(!1),b=o(null),[v,x]=a(h),w=A(),$=mc["sm-max"]({theme:w}),C=Ed.useMediaQuery({maxWidth:$}),S=Ed.useMediaQuery({maxHeight:$,orientation:"landscape"}),k=()=>{var e;null===(e=b.current)||void 0===e||e.clear()},D=()=>{if(b.current){const e=b.current.export();x(e),m(!1),null==d||d(e)}};u((()=>{x(h)}),[h]);return t("div",Object.assign({},g,{children:[e(Uf,{$disabled:p,children:"number"==typeof l?t(Gf,{children:[c&&e(_c.BodyMD,{children:c}),e(jf,{progress:null!=l?l:0,"data-testid":`${s||"e-signature"}-progress-bar`})]}):v?t(r,{children:[e(qf,{src:v,alt:"Signature preview"}),e(Xf,{styleType:"light",onClick:()=>m(!0),id:s,"aria-label":"Edit signature",disabled:p,children:e(G,{})})]}):e(Kf,{type:"button",styleType:"secondary","aria-label":"Add signature",id:s,onClick:()=>m(!0),disabled:p,children:"Add signature"})}),e(Qf,{"data-testid":"signature-modal",show:f,children:e(Jf,{children:t(em,{onClose:()=>m(!1),children:[e(tm,{children:"Signature"}),e(rm,{children:t(nm,{children:[e(im,{}),e(y,{fallback:null,children:f&&e(cm,{ref:b,baseImageDataURL:v})})]})}),t(om,{children:[e(am,{as:S?Mu.Small:Mu.Default,type:"button",styleType:C&&!S?"light":"link",icon:e(Z,{}),onClick:k,children:"Clear"}),e(am,{as:S?ed.Small:ed.Default,type:"button",onClick:D,children:"Save"})]})]})})}),i?e(Zf,{children:i}):null]}))},um="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",hm="Submit",pm="Rate your experience",gm=5,fm=M.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,mm=F`
    width: 2.75rem;
    height: 2.75rem;
    color: ${dc["icon-primary"]};
    ${fm}:focus-visible + & {
        outline: ${pc["width-020"]} ${pc.solid}
            ${dc["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${fc.sm};
    }
`,bm=M(ze)`
    ${mm}
`,vm=M(Re)`
    ${mm}
`,ym=M.label`
    margin: 0 ${gc["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${bc.MaxWidth.md} {
        margin: 0 ${gc["spacing-8"]};
    }
`,xm=M.div`
    display: flex;
    justify-content: center;
    margin: ${gc["spacing-8"]} ${gc["spacing-16"]};
`,wm=r=>{const{description:n,rating:i,onRatingChange:o}=r,a=t=>{const r=`${t} star${1===t?"":"s"}`;return e(t<=i?vm:bm,{"aria-label":r})};return e(xm,{role:"radiogroup","aria-label":n,children:[...Array(gm)].map(((r,n)=>{const s=n+1;return t(ym,{children:[e(fm,{type:"radio",name:"star",checked:s===i,onChange:()=>(e=>{o(e)})(s)}),a(s)]},s)}))})},$m=M.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${bc.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Cm=M.div`
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
`,Sm=M.div`
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
`,km=M(ed.Default)`
    margin-top: 1rem;
    width: 100%;
`,Dm=r=>{const{imgSrc:n,buttonLabel:i,description:o,rating:a,onRatingChange:s,onSubmit:l}=r,c=dt(r,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=n?n:um,u=null!=o?o:pm;return t(Cm,Object.assign({},c,{children:[d&&e($m,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),t(Sm,{children:[e(_c.HeaderSM,{as:"div",weight:"semibold",children:u}),e(wm,{description:u,rating:a,onRatingChange:s}),e(km,{disabled:!a,onClick:l,type:"button",children:null!=i?i:hm})]})]}))},Tm=M.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return F`
                ${pc.Util["dashed-default"]({radius:fc.sm,thickness:pc["width-040"],colour:dc.border})}
                padding: ${gc["spacing-32"]};

                ${bc.MaxWidth.sm} {
                    padding: ${gc["spacing-32"]} ${gc["spacing-20"]};
                }
            `}}
`,Om=M.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${gc["spacing-32"]};
`,Em=M.p`
    ${uc["header-xs-regular"]}
    color: ${dc.text};
    margin-bottom: ${gc["spacing-8"]};
`,_m=M.div`
    ${ad({textSize:"header-xs"})}
    color: ${dc.text};
`,Mm=M.p`
    ${uc["body-md-regular"]}
    color: ${dc["text-subtler"]};
`,Fm=M.div`
    ${ad({textSize:"body-md"})}
    color: ${dc["text-subtler"]};
`,Im=M.ul`
    list-style-type: none;
`;var Am;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Am||(Am={}));const Bm=({src:t,alt:r,className:n,"data-testid":i})=>e("img",{src:t,alt:r||"",className:n,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),jm=M.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${gc["spacing-16"]};
    }
`,zm=M.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${gc["spacing-16"]} ${gc["spacing-32"]};
    cursor: pointer;

    background: ${dc["bg-primary-subtlest"]};
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.sm};

    ${bc.MaxWidth.lg} {
        padding: ${gc["spacing-16"]};
    }

    :hover {
        background: ${dc["bg-hover"]};
    }
`,Rm=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${bc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return F`
                ${bc.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,Pm=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,Lm=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${bc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,Nm=M.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${gc["spacing-8"]};

    ${uc["body-md-regular"]}
    color: ${dc.text};

    ${bc.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${gc["spacing-8"]};

        ${Dc(2)}
    }
`,Hm=M.div`
    ${uc["body-md-regular"]}
    color: ${dc.text};

    ${bc.MaxWidth.lg} {
        ${Dc(2)}
    }
`;M(Hm)`
    ${uc["body-md-regular"]}
    margin-top: ${gc["spacing-4"]};
`;const Wm=M.div`
    ${uc["body-sm-semibold"]}
    color: ${dc["text-error"]};
`,Ym=M(Wm)`
    margin-top: ${gc["spacing-4"]};
    ${bc.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,Vm=M(Wm)`
    display: none;
    visibility: hidden;
    ${bc.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${gc["spacing-8"]};
    }
`,Um=M(Xc)`
    color: ${dc["icon-primary"]};
`,Km=M.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${gc["spacing-32"]};

    ${bc.MaxWidth.lg} {
        margin-left: ${gc["spacing-16"]};
    }
`,Xm=M(qg)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${gc["spacing-16"]};
    }
`,qm=M.div`
    width: auto;
    margin-right: ${gc["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${bc.MaxWidth.lg} {
        margin-right: ${gc["spacing-16"]};
    }
`,Gm=M(Bm)`
    border-radius: ${fc.sm};
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${bc.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,Zm=w((({fileItem:n,onDownload:i})=>{const{id:s,name:l,size:c,errorMessage:d,thumbnailImageDataUrl:h,truncateText:p=!0,ready:g=!0}=n,[f,m]=a(!1),[b,v]=a(!1),y=Am.formatFileSizeDisplay(c),x=A(),w=mc["sm-max"]({theme:x}),$=Ed.useMediaQuery({maxWidth:w}),[C,S]=a(),k=o(null);u((()=>{k.current&&S($?D(l):l)}),[l,$]);const D=e=>{if(!p)return e;const t=k&&k.current?k.current.getBoundingClientRect().width:0;return hu.truncateTwoLines(e,t,16,1.5)},T=()=>t(r,{children:[e(Hm,{ref:k,children:C}),b&&e(Ym,{children:d||"Something went wrong"})]});return e(jm,{"data-testid":s,children:t(zm,{onClick:()=>ut(void 0,void 0,void 0,(function*(){if(g&&!f){m(!0);try{v(!1),yield i(n)}catch(e){v(!0)}finally{m(!1)}}})),children:[(()=>{let n;return n=t(r,h?{children:[e(qm,{"data-testid":`${s}-thumbnail`,children:e(Gm,{"data-testid":`${s}-thumbnail-image`,src:h})}),t(Lm,{children:[e(Pm,{children:T()}),e(Nm,{children:y||"-"}),b&&e(Vm,{children:d||"Something went wrong"})]})]}:{children:[e(Pm,{children:T()}),e(Nm,{children:y||"-"}),b&&e(Vm,{children:d||"Something went wrong"})]}),e(Rm,{$hasThumbnail:!!h,children:n})})(),e(Km,{children:e(Xm,{"data-testid":`${s}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${l}`,children:f||!g?e(Um,{size:16,"aria-hidden":!0}):e(Q,{"aria-hidden":!0})})})]})})})),Qm=({id:r,fileItems:n,title:i,description:o,onDownload:a,"data-testid":s,className:l,styleType:c="bordered"})=>{const d=e=>ut(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return t(Tm,{id:r?`${r}-file-download`:"file-download",className:l,"data-testid":s,$border:"bordered"===c,children:[(i||o)&&t(Om,{children:[i?e("string"==typeof i?Em:_m,{children:i}):null,o?e("string"==typeof o?Mm:Fm,{children:o}):null]}),e(Im,{children:n&&n.length>0&&n.map((t=>e(Zm,{fileItem:t,onDownload:d},t.id)))})]})},Jm=$({activeId:void 0,setActiveId:()=>{}});var eb,tb={exports:{}},rb={exports:{}},nb={};var ib,ob,ab,sb,lb,cb,db,ub,hb,pb,gb,fb,mb,bb,vb={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function yb(){return ob||(ob=1,"production"===process.env.NODE_ENV?rb.exports=function(){if(eb)return nb;eb=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:switch(e=e.type){case l:case c:case n:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case g:case p:case a:return e;default:return h}}case r:return h}}}function x(e){return y(e)===c}return nb.AsyncMode=l,nb.ConcurrentMode=c,nb.ContextConsumer=s,nb.ContextProvider=a,nb.Element=t,nb.ForwardRef=d,nb.Fragment=n,nb.Lazy=g,nb.Memo=p,nb.Portal=r,nb.Profiler=o,nb.StrictMode=i,nb.Suspense=u,nb.isAsyncMode=function(e){return x(e)||y(e)===l},nb.isConcurrentMode=x,nb.isContextConsumer=function(e){return y(e)===s},nb.isContextProvider=function(e){return y(e)===a},nb.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},nb.isForwardRef=function(e){return y(e)===d},nb.isFragment=function(e){return y(e)===n},nb.isLazy=function(e){return y(e)===g},nb.isMemo=function(e){return y(e)===p},nb.isPortal=function(e){return y(e)===r},nb.isProfiler=function(e){return y(e)===o},nb.isStrictMode=function(e){return y(e)===i},nb.isSuspense=function(e){return y(e)===u},nb.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},nb.typeOf=y,nb}():rb.exports=(ib||(ib=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:var f=e.type;switch(f){case l:case c:case n:case o:case i:case u:return f;default:var m=f&&f.$$typeof;switch(m){case s:case d:case g:case p:case a:return m;default:return h}}case r:return h}}}var x=l,w=c,$=s,C=a,S=t,k=d,D=n,T=g,O=p,E=r,_=o,M=i,F=u,I=!1;function A(e){return y(e)===c}vb.AsyncMode=x,vb.ConcurrentMode=w,vb.ContextConsumer=$,vb.ContextProvider=C,vb.Element=S,vb.ForwardRef=k,vb.Fragment=D,vb.Lazy=T,vb.Memo=O,vb.Portal=E,vb.Profiler=_,vb.StrictMode=M,vb.Suspense=F,vb.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},vb.isConcurrentMode=A,vb.isContextConsumer=function(e){return y(e)===s},vb.isContextProvider=function(e){return y(e)===a},vb.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},vb.isForwardRef=function(e){return y(e)===d},vb.isFragment=function(e){return y(e)===n},vb.isLazy=function(e){return y(e)===g},vb.isMemo=function(e){return y(e)===p},vb.isPortal=function(e){return y(e)===r},vb.isProfiler=function(e){return y(e)===o},vb.isStrictMode=function(e){return y(e)===i},vb.isSuspense=function(e){return y(e)===u},vb.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},vb.typeOf=y}()),vb)),rb.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function xb(){if(sb)return ab;sb=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return ab=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(n,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},ab}function wb(){if(cb)return lb;cb=1;return lb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function $b(){return ub?db:(ub=1,db=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var Cb=yb();tb.exports=function(){if(fb)return gb;fb=1;var e=yb(),t=xb(),r=wb(),n=$b(),i=function(){if(pb)return hb;pb=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=wb(),r={},n=$b();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(n(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var h=l?l():"";e("Failed "+a+" type: "+d.message+(null!=h?h:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},hb=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),gb=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:f(a),arrayOf:function(e){return f((function(t,n,i,o,a){if("function"!=typeof e)return new g("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new g("Invalid "+o+" `"+a+"` of type `"+y(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:f((function(e,t,r,n,i){var o=e[t];return s(o)?null:new g("Invalid "+n+" `"+i+"` of type `"+y(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:f((function(t,r,n,i,o){var a=t[r];return e.isValidElementType(a)?null:new g("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||u;return new g("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:f((function(e,t,r,n,i){return v(e[t])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,i,o,a,s){if("function"!=typeof e)return new g("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=y(l);if("object"!==c)return new g("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,o,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?f((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(p(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new g("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(i)+" at index "+t+"."),a}return f((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new g("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return f((function(t,n,i,o,a){var s=t[n],l=y(s);if("object"!==l)return new g("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(i,o,a,c,x(d));var u=d(s,c,i,o,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return f((function(i,o,a,s,l){var c=i[o],d=y(c);if("object"!==d)return new g("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var h in u){var p=e[h];if(n(e,h)&&"function"!=typeof p)return b(a,s,l,h,x(p));if(!p)return new g("Invalid "+s+" `"+l+"` key `"+h+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=p(c,h,a,s,l+"."+h,r);if(f)return f}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function f(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function i(i,a,s,c,d,h,p){if(c=c||u,h=h||s,p!==r){if(l){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(o("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?i?null===a[s]?new g("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new g("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,d,h)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function m(e){return f((function(t,r,n,i,o,a){var s=t[r];return y(s)!==e?new g("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new g((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e[d]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!v(r.value))return!1}else for(;!(r=n.next()).done;){var i=r.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,h.checkPropTypes=i,h.resetWarningCache=i.resetWarningCache,h.PropTypes=h,h},gb}()(Cb.isElement,!0)}else tb.exports=function(){if(bb)return mb;bb=1;var e=wb();function t(){}function r(){}return r.resetWarningCache=t,mb=function(){function n(t,r,n,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o}}()();var Sb=Uo(tb.exports),kb=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Db(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=kb.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var Tb=[".DS_Store","Thumbs.db"];function Ob(e){return"object"==typeof e&&null!==e}function Eb(e){return Ib(e.target.files).map((function(e){return Db(e)}))}function _b(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return Db(e)}))]}}))}))}function Mb(e,t){return ut(this,void 0,void 0,(function(){var r;return ht(this,(function(n){switch(n.label){case 0:return e.items?(r=Ib(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Ab))]):[3,2];case 1:return[2,Fb(Bb(n.sent()))];case 2:return[2,Fb(Ib(e.files).map((function(e){return Db(e)})))]}}))}))}function Fb(e){return e.filter((function(e){return-1===Tb.indexOf(e.name)}))}function Ib(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Ab(e){if("function"!=typeof e.webkitGetAsEntry)return jb(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Rb(t):jb(e)}function Bb(e){return e.reduce((function(e,t){return gt(gt([],pt(e),!1),pt(Array.isArray(t)?Bb(t):[t]),!1)}),[])}function jb(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=Db(t);return Promise.resolve(r)}function zb(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){return[2,e.isDirectory?Rb(e):Pb(e)]}))}))}function Rb(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function i(){var o=this;t.readEntries((function(t){return ut(o,void 0,void 0,(function(){var o,a,s;return ht(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(zb)),n.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function Pb(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=Db(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}var Lb=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0};function Nb(e){return function(e){if(Array.isArray(e))return Kb(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Ub(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Hb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Wb(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Hb(Object(r),!0).forEach((function(t){Yb(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Hb(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Yb(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Vb(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||Ub(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ub(e,t){if(e){if("string"==typeof e)return Kb(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Kb(e,t):void 0}}function Kb(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Xb=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},qb=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Gb=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Zb={code:"too-many-files",message:"Too many files"};function Qb(e,t){var r="application/x-moz-file"===e.type||Lb(e,t);return[r,r?null:Xb(t)]}function Jb(e,t,r){if(ev(e.size))if(ev(t)&&ev(r)){if(e.size>r)return[!1,qb(r)];if(e.size<t)return[!1,Gb(t)]}else{if(ev(t)&&e.size<t)return[!1,Gb(t)];if(ev(r)&&e.size>r)return[!1,qb(r)]}return[!0,null]}function ev(e){return null!=e}function tv(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function rv(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function nv(e){e.preventDefault()}function iv(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return t.some((function(t){return!tv(e)&&t&&t.apply(void 0,[e].concat(n)),tv(e)}))}}function ov(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function av(e){return/^.*\.[\w]+$/.test(e)}var sv=["children"],lv=["open"],cv=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],dv=["refKey","onChange","onClick"];function uv(e){return function(e){if(Array.isArray(e))return gv(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||pv(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function hv(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||pv(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pv(e,t){if(e){if("string"==typeof e)return gv(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?gv(e,t):void 0}}function gv(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function mv(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fv(Object(r),!0).forEach((function(t){bv(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fv(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function bv(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function vv(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var yv=p((function(e,t){var r=e.children,n=$v(vv(e,sv)),o=n.open,a=vv(n,lv);return b(t,(function(){return{open:o}}),[o]),i.createElement(C,null,r(mv(mv({},a),{},{open:o})))}));yv.displayName="Dropzone";var xv={disabled:!1,getFilesFromEvent:function(e){return ut(this,void 0,void 0,(function(){return ht(this,(function(t){return Ob(e)&&Ob(e.dataTransfer)?[2,Mb(e.dataTransfer,e.type)]:function(e){return Ob(e)&&Ob(e.target)}(e)?[2,Eb(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,_b(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};yv.defaultProps=xv,yv.propTypes={children:Sb.func,accept:Sb.objectOf(Sb.arrayOf(Sb.string)),multiple:Sb.bool,preventDropOnDocument:Sb.bool,noClick:Sb.bool,noKeyboard:Sb.bool,noDrag:Sb.bool,noDragEventsBubbling:Sb.bool,minSize:Sb.number,maxSize:Sb.number,maxFiles:Sb.number,disabled:Sb.bool,getFilesFromEvent:Sb.func,onFileDialogCancel:Sb.func,onFileDialogOpen:Sb.func,useFsAccessApi:Sb.bool,autoFocus:Sb.bool,onDragEnter:Sb.func,onDragLeave:Sb.func,onDragOver:Sb.func,onDrop:Sb.func,onDropAccepted:Sb.func,onDropRejected:Sb.func,onError:Sb.func,validator:Sb.func};var wv={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function $v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=mv(mv({},xv),e),r=t.accept,n=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,s=t.minSize,l=t.multiple,c=t.maxFiles,d=t.onDragEnter,h=t.onDragLeave,p=t.onDragOver,f=t.onDrop,b=t.onDropAccepted,v=t.onDropRejected,y=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,k=t.noClick,D=t.noKeyboard,T=t.noDrag,O=t.noDragEventsBubbling,E=t.onError,_=t.validator,M=m((function(){return function(e){if(ev(e))return Object.entries(e).reduce((function(e,t){var r=Vb(t,2),n=r[0],i=r[1];return[].concat(Nb(e),[n],Nb(i))}),[]).filter((function(e){return ov(e)||av(e)})).join(",")}(r)}),[r]),F=m((function(){return function(e){return ev(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Vb(e,2),r=t[0],n=t[1],i=!0;return ov(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(n)&&n.every(av)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var r=Vb(t,2),n=r[0],i=r[1];return Wb(Wb({},e),{},Yb({},n,i))}),{})}]:e}(r)}),[r]),I=m((function(){return"function"==typeof w?w:Sv}),[w]),A=m((function(){return"function"==typeof y?y:Sv}),[y]),B=o(null),j=o(null),z=hv(x(Cv,wv),2),R=z[0],P=z[1],L=R.isFocused,N=R.isFileDialogActive,H=o("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){j.current&&(j.current.files.length||(P({type:"closeDialog"}),A()))}),300)};u((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[j,N,A,H]);var Y=o([]),V=function(e){B.current&&B.current.contains(e.target)||(e.preventDefault(),Y.current=[])};u((function(){return S&&(document.addEventListener("dragover",nv,!1),document.addEventListener("drop",V,!1)),function(){S&&(document.removeEventListener("dragover",nv),document.removeEventListener("drop",V))}}),[B,S]),u((function(){return!n&&C&&B.current&&B.current.focus(),function(){}}),[B,C,n]);var U=g((function(e){E?E(e):console.error(e)}),[E]),K=g((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[].concat(uv(Y.current),[e.target]),rv(e)&&Promise.resolve(i(e)).then((function(t){if(!tv(e)||O){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=Vb(Qb(e,r),1)[0],o=Vb(Jb(e,n,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:M,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:_});P({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return U(e)}))}),[i,d,U,O,M,s,a,l,c,_]),X=g((function(e){e.preventDefault(),e.persist(),ae(e);var t=rv(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&p&&p(e),!1}),[p,O]),q=g((function(e){e.preventDefault(),e.persist(),ae(e);var t=Y.current.filter((function(e){return B.current&&B.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),Y.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),rv(e)&&h&&h(e))}),[B,h,O]),G=g((function(e,t){var r=[],n=[];e.forEach((function(e){var t=hv(Qb(e,M),2),i=t[0],o=t[1],l=hv(Jb(e,s,a),2),c=l[0],d=l[1],u=_?_(e):null;if(i&&c&&!u)r.push(e);else{var h=[o,d];u&&(h=h.concat(u)),n.push({file:e,errors:h.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&c>=1&&r.length>c)&&(r.forEach((function(e){n.push({file:e,errors:[Zb]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:n,type:"setFiles"}),f&&f(r,n,t),n.length>0&&v&&v(n,t),r.length>0&&b&&b(r,t)}),[P,l,M,s,a,c,f,b,v,_]),Z=g((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[],rv(e)&&Promise.resolve(i(e)).then((function(t){tv(e)&&!O||G(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[i,G,U,O]),Q=g((function(){if(H.current){P({type:"openDialog"}),I();var e={multiple:l,types:F};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){G(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,j.current?(j.current.value=null,j.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else j.current&&(P({type:"openDialog"}),I(),j.current.value=null,j.current.click())}),[P,I,A,$,G,U,F,l]),J=g((function(e){B.current&&B.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),Q()))}),[B,Q]),ee=g((function(){P({type:"focus"})}),[]),te=g((function(){P({type:"blur"})}),[]),re=g((function(){k||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?Q():setTimeout(Q,0))}),[k,Q]),ne=function(e){return n?null:e},ie=function(e){return D?null:ne(e)},oe=function(e){return T?null:ne(e)},ae=function(e){O&&e.stopPropagation()},se=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,i=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,h=e.onDrop,p=vv(e,cv);return mv(mv(bv({onKeyDown:ie(iv(o,J)),onFocus:ie(iv(a,ee)),onBlur:ie(iv(s,te)),onClick:ne(iv(l,re)),onDragEnter:oe(iv(c,K)),onDragOver:oe(iv(d,X)),onDragLeave:oe(iv(u,q)),onDrop:oe(iv(h,Z)),role:"string"==typeof i&&""!==i?i:"presentation"},r,B),n||D?{}:{tabIndex:0}),p)}}),[B,J,ee,te,re,K,X,q,Z,D,T,n]),le=g((function(e){e.stopPropagation()}),[]),ce=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,i=e.onClick,o=vv(e,dv);return mv(mv({},bv({accept:M,multiple:l,type:"file",style:{display:"none"},onChange:ne(iv(n,Z)),onClick:ne(iv(i,le)),tabIndex:-1},r,j)),o)}}),[j,r,l,Z,n]);return mv(mv({},R),{},{isFocused:L&&!n,getRootProps:se,getInputProps:ce,rootRef:B,inputRef:j,open:ne(Q)})}function Cv(e,t){switch(t.type){case"focus":return mv(mv({},e),{},{isFocused:!0});case"blur":return mv(mv({},e),{},{isFocused:!1});case"openDialog":return mv(mv({},wv),{},{isFileDialogActive:!0});case"closeDialog":return mv(mv({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return mv(mv({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return mv(mv({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return mv({},wv);default:return e}}function Sv(){}const kv=M.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return F`
                ${pc.Util["dashed-default"]({radius:fc.sm,thickness:pc["width-040"],colour:dc.border})}
                padding: ${gc["spacing-32"]};

                ${bc.MaxWidth.sm} {
                    padding: ${gc["spacing-32"]} ${gc["spacing-20"]};
                }
            `}}
`,Dv=M.input`
    display: none;
`,Tv=M.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${dc["bg-primary-subtler"]};
    ${pc.Util["dashed-default"]({radius:fc.sm,thickness:pc["width-040"],colour:dc["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Ov=M(_c.BodyMD)`
    color: ${dc["text-primary"]};
    text-align: center;
`,Ev=M(Pe)`
    color: ${dc["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,_v=p((({children:r,accept:n,capture:i,multiple:a,id:s,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":p},g)=>{const f=o(null),{getRootProps:m,isDragActive:v}=$v({onDrop:h,noClick:!0,disabled:u});b(g,(()=>Object.assign(Object.assign({},f.current),{openFileDialog:()=>{f.current&&(f.current.value="",f.current.click())}})));return t(kv,Object.assign({id:s,"data-testid":p||"dropzone",$border:d,className:l},m(),{children:[e(Dv,{type:"file",name:c,ref:f,tabIndex:-1,"aria-hidden":!0,accept:n,capture:i,multiple:a,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),r,v&&t(Tv,{children:[e(Ev,{}),e(Ov,{weight:"semibold",children:"Drop files here"})]})]}))}));const Mv="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Fv(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Iv(e){return"nodeType"in e}function Av(e){var t,r;return e?Fv(e)?e:Iv(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Bv(e){const{Document:t}=Av(e);return e instanceof t}function jv(e){return!Fv(e)&&e instanceof Av(e).HTMLElement}function zv(e){return e instanceof Av(e).SVGElement}function Rv(e){return e?Fv(e)?e.document:Iv(e)?Bv(e)?e:jv(e)||zv(e)?e.ownerDocument:document:document:document}const Pv=Mv?h:u;function Lv(e){const t=o(e);return Pv((()=>{t.current=e})),g((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function Nv(e,t){void 0===t&&(t=[e]);const r=o(e);return Pv((()=>{r.current!==e&&(r.current=e)}),t),r}function Hv(e,t){const r=o();return m((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function Wv(e){const t=Lv(e),r=o(null),n=g((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function Yv(e){const t=o();return u((()=>{t.current=e}),[e]),t.current}let Vv={};function Uv(e,t){return m((()=>{if(t)return t;const r=null==Vv[e]?0:Vv[e]+1;return Vv[e]=r,e+"-"+r}),[e,t])}function Kv(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,i]of n){const n=t[r];null!=n&&(t[r]=n+e*i)}return t}),{...t})}}const Xv=Kv(1),qv=Kv(-1);function Gv(e){if(!e)return!1;const{KeyboardEvent:t}=Av(e.target);return t&&e instanceof t}function Zv(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Av(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Qv=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[Qv.Translate.toString(e),Qv.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),Jv="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function ey(e){return e.matches(Jv)?e:e.querySelector(Jv)}const ty={display:"none"};function ry(e){let{id:t,value:r}=e;return i.createElement("div",{id:t,style:ty},r)}function ny(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return i.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const iy=$(null);const oy={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},ay={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function sy(e){let{announcements:t=ay,container:r,hiddenTextDescribedById:n,screenReaderInstructions:o=oy}=e;const{announce:s,announcement:l}=function(){const[e,t]=a("");return{announce:g((e=>{null!=e&&t(e)}),[]),announcement:e}}(),c=Uv("DndLiveRegion"),[d,h]=a(!1);if(u((()=>{h(!0)}),[]),function(e){const t=f(iy);u((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(m((()=>({onDragStart(e){let{active:r}=e;s(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&s(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;s(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;s(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;s(t.onDragCancel({active:r,over:n}))}})),[s,t])),!d)return null;const p=i.createElement(i.Fragment,null,i.createElement(ry,{id:n,value:o.draggable}),i.createElement(ny,{id:c,announcement:l}));return r?E(p,r):p}var ly;function cy(){}function dy(e,t){return m((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(ly||(ly={}));const uy=Object.freeze({x:0,y:0});function hy(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function py(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function gy(e){let{left:t,top:r,height:n,width:i}=e;return[{x:t,y:r},{x:t+i,y:r},{x:t,y:r+n},{x:t+i,y:r+n}]}function fy(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function my(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-n,s=o-r;if(n<i&&r<o){const r=t.width*t.height,n=e.width*e.height,i=a*s;return Number((i/(r+n-i)).toFixed(4))}return 0}const by=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=[];for(const e of n){const{id:n}=e,o=r.get(n);if(o){const r=my(o,t);r>0&&i.push({id:n,data:{droppableContainer:e,value:r}})}}return i.sort(py)};function vy(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:uy}function yy(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const xy=yy(1);const wy={ignoreTransform:!1};function $y(e,t){void 0===t&&(t=wy);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Av(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:i,scaleY:o,x:a,y:s}=n,l=e.left-a-(1-i)*parseFloat(r),c=e.top-s-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:i,width:o,height:a,bottom:s,right:l}=r;return{top:n,left:i,width:o,height:a,bottom:s,right:l}}function Cy(e){return $y(e,{ignoreTransform:!0})}function Sy(e,t){const r=[];return e?function n(i){if(null!=t&&r.length>=t)return r;if(!i)return r;if(Bv(i)&&null!=i.scrollingElement&&!r.includes(i.scrollingElement))return r.push(i.scrollingElement),r;if(!jv(i)||zv(i))return r;if(r.includes(i))return r;const o=Av(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Av(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(i,o)&&r.push(i),function(e,t){return void 0===t&&(t=Av(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?r:n(i.parentNode)}(e):r}function ky(e){const[t]=Sy(e,1);return null!=t?t:null}function Dy(e){return Mv&&e?Fv(e)?e:Iv(e)?Bv(e)||e===Rv(e).scrollingElement?window:jv(e)?e:null:null:null}function Ty(e){return Fv(e)?e.scrollX:e.scrollLeft}function Oy(e){return Fv(e)?e.scrollY:e.scrollTop}function Ey(e){return{x:Ty(e),y:Oy(e)}}var _y;function My(e){return!(!Mv||!e)&&e===document.scrollingElement}function Fy(e){const t={x:0,y:0},r=My(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(_y||(_y={}));const Iy={x:.2,y:.2};function Ay(e,t,r,n,i){let{top:o,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===i&&(i=Iy);const{isTop:c,isBottom:d,isLeft:u,isRight:h}=Fy(e),p={x:0,y:0},g={x:0,y:0},f=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+f?(p.y=_y.Backward,g.y=n*Math.abs((t.top+f-o)/f)):!d&&l>=t.bottom-f&&(p.y=_y.Forward,g.y=n*Math.abs((t.bottom-f-l)/f)),!h&&s>=t.right-m?(p.x=_y.Forward,g.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(p.x=_y.Backward,g.x=n*Math.abs((t.left+m-a)/m)),{direction:p,speed:g}}function By(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:i}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:i,width:e.clientWidth,height:e.clientHeight}}function jy(e){return e.reduce(((e,t)=>Xv(e,Ey(t))),uy)}const zy=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Ty(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Oy(t)),0)}]];class Ry{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Sy(t),n=jy(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of zy)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(r),a=n[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Py{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function Ly(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var Ny,Hy;function Wy(e){e.preventDefault()}function Yy(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(Ny||(Ny={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(Hy||(Hy={}));const Vy={start:[Hy.Space,Hy.Enter],cancel:[Hy.Esc],end:[Hy.Space,Hy.Enter]},Uy=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case Hy.Right:return{...r,x:r.x+25};case Hy.Left:return{...r,x:r.x-25};case Hy.Down:return{...r,y:r.y+25};case Hy.Up:return{...r,y:r.y-25}}};let Ky=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Py(Rv(t)),this.windowListeners=new Py(Av(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ny.Resize,this.handleCancel),this.windowListeners.add(Ny.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(Ny.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=$y),!e)return;const{top:r,left:n,bottom:i,right:o}=t(e);ky(e)&&(i<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(uy)}handleKeyDown(e){if(Gv(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:i=Vy,coordinateGetter:o=Uy,scrollBehavior:a="smooth"}=n,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:uy;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=qv(d,c),n={x:0,y:0},{scrollableAncestors:i}=r.current;for(const r of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:h}=Fy(r),p=By(r),g={x:Math.min(i===Hy.Right?p.right-p.width/2:p.right,Math.max(i===Hy.Right?p.left:p.left+p.width/2,d.x)),y:Math.min(i===Hy.Down?p.bottom-p.height/2:p.bottom,Math.max(i===Hy.Down?p.top:p.top+p.height/2,d.y))},f=i===Hy.Right&&!s||i===Hy.Left&&!l,m=i===Hy.Down&&!c||i===Hy.Up&&!o;if(f&&g.x!==d.x){const e=r.scrollLeft+t.x,o=i===Hy.Right&&e<=u.x||i===Hy.Left&&e>=h.x;if(o&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=o?r.scrollLeft-e:i===Hy.Right?r.scrollLeft-u.x:r.scrollLeft-h.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&g.y!==d.y){const e=r.scrollTop+t.y,o=i===Hy.Down&&e<=u.y||i===Hy.Up&&e>=h.y;if(o&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=o?r.scrollTop-e:i===Hy.Down?r.scrollTop-u.y:r.scrollTop-h.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,Xv(qv(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Xy(e){return Boolean(e&&"distance"in e)}function qy(e){return Boolean(e&&"delay"in e)}Ky.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=Vy,onActivation:i}=t,{active:o}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class Gy{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Av(e);return e instanceof t?e:Rv(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=Rv(o),this.documentListeners=new Py(this.document),this.listeners=new Py(r),this.windowListeners=new Py(Av(o)),this.initialCoordinates=null!=(n=Zv(i))?n:uy,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Ny.Resize,this.handleCancel),this.windowListeners.add(Ny.DragStart,Wy),this.windowListeners.add(Ny.VisibilityChange,this.handleCancel),this.windowListeners.add(Ny.ContextMenu,Wy),this.documentListeners.add(Ny.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(qy(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Xy(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Ny.Click,Yy,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ny.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!n)return;const s=null!=(t=Zv(e))?t:uy,l=qv(n,s);if(!r&&a){if(Xy(a)){if(null!=a.tolerance&&Ly(l,a.tolerance))return this.handleCancel();if(Ly(l,a.distance))return this.handleStart()}return qy(a)&&Ly(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Hy.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Zy={move:{name:"pointermove"},end:{name:"pointerup"}};class Qy extends Gy{constructor(e){const{event:t}=e,r=Rv(t.target);super(e,Zy,r)}}Qy.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const Jy={move:{name:"mousemove"},end:{name:"mouseup"}};var ex;!function(e){e[e.RightClick=2]="RightClick"}(ex||(ex={}));let tx=class extends Gy{constructor(e){super(e,Jy,Rv(e.event.target))}};tx.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==ex.RightClick&&(null==n||n({event:r}),!0)}}];const rx={move:{name:"touchmove"},end:{name:"touchend"}};class nx extends Gy{constructor(e){super(e,rx)}static setup(){return window.addEventListener(rx.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(rx.move.name,e)};function e(){}}}var ix,ox;function ax(e){let{acceleration:t,activator:r=ix.Pointer,canScroll:n,draggingRect:i,enabled:a,interval:s=5,order:l=ox.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:h,delta:p,threshold:f}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=Yv(t);return Hv((e=>{if(r||!n||!e)return sx;const i={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[_y.Backward]:e.x[_y.Backward]||-1===i.x,[_y.Forward]:e.x[_y.Forward]||1===i.x},y:{[_y.Backward]:e.y[_y.Backward]||-1===i.y,[_y.Forward]:e.y[_y.Forward]||1===i.y}}}),[r,t,n])}({delta:p,disabled:!a}),[v,y]=function(){const e=o(null);return[g(((t,r)=>{e.current=setInterval(t,r)}),[]),g((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=o({x:0,y:0}),w=o({x:0,y:0}),$=m((()=>{switch(r){case ix.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case ix.DraggableRect:return i}}),[r,i,c]),C=o(null),S=g((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,r=x.current.y*w.current.y;e.scrollBy(t,r)}),[]),k=m((()=>l===ox.TreeOrder?[...d].reverse():d),[l,d]);u((()=>{if(a&&d.length&&$){for(const e of k){if(!1===(null==n?void 0:n(e)))continue;const r=d.indexOf(e),i=h[r];if(!i)continue;const{direction:o,speed:a}=Ay(e,i,$,t,f);for(const e of["x","y"])b[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,s),x.current=a,void(w.current=o)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,n,y,a,s,JSON.stringify($),JSON.stringify(b),v,d,k,h,JSON.stringify(f)])}nx.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:i}=r;return!(i.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(ix||(ix={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(ox||(ox={}));const sx={x:{[_y.Backward]:!1,[_y.Forward]:!1},y:{[_y.Backward]:!1,[_y.Forward]:!1}};var lx,cx;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(lx||(lx={})),function(e){e.Optimized="optimized"}(cx||(cx={}));const dx=new Map;function ux(e,t){return Hv((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function hx(e){let{callback:t,disabled:r}=e;const n=Lv(t),i=m((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}function px(e){return new Ry($y(e),e)}function gx(e,t,r){void 0===t&&(t=px);const[n,i]=x((function(n){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=n?n:r)?i:null;const o=t(e);if(JSON.stringify(n)===JSON.stringify(o))return n;return o}),null),o=function(e){let{callback:t,disabled:r}=e;const n=Lv(t),i=m((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){i();break}}}}),a=hx({callback:i});return Pv((()=>{i(),e?(null==a||a.observe(e),null==o||o.observe(document.body,{childList:!0,subtree:!0})):(null==a||a.disconnect(),null==o||o.disconnect())}),[e]),n}const fx=[];function mx(e,t){void 0===t&&(t=[]);const r=o(null);return u((()=>{r.current=null}),t),u((()=>{const t=e!==uy;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?qv(e,r.current):uy}function bx(e){return m((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const vx=[];function yx(e){let{measure:t}=e;const[r,n]=a(null),i=g((e=>{for(const{target:r}of e)if(jv(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),o=hx({callback:i}),s=g((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return jv(t)?t:e}(e);null==o||o.disconnect(),r&&(null==o||o.observe(r)),n(r?t(r):null)}),[t,o]),[l,c]=Wv(s);return m((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const xx=[{sensor:Qy,options:{}},{sensor:Ky,options:{}}],wx={current:{}},$x={draggable:{measure:Cy},droppable:{measure:Cy,strategy:lx.WhileDragging,frequency:cx.Optimized},dragOverlay:{measure:$y}};class Cx extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const Sx={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Cx,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:cy},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:$x,measureDroppableContainers:cy,windowRect:null,measuringScheduled:!1},kx=$({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:cy,draggableNodes:new Map,over:null,measureDroppableContainers:cy}),Dx=$(Sx);function Tx(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Cx}}}function Ox(e,t){switch(t.type){case ly.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case ly.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case ly.DragEnd:case ly.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case ly.RegisterDroppable:{const{element:r}=t,{id:n}=r,i=new Cx(e.droppable.containers);return i.set(n,r),{...e,droppable:{...e.droppable,containers:i}}}case ly.SetDroppableDisabled:{const{id:r,key:n,disabled:i}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const a=new Cx(e.droppable.containers);return a.set(r,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case ly.UnregisterDroppable:{const{id:r,key:n}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const o=new Cx(e.droppable.containers);return o.delete(r),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Ex(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:i}=f(kx),o=Yv(n),a=Yv(null==r?void 0:r.id);return u((()=>{if(!t&&!n&&o&&null!=a){if(!Gv(o))return;if(document.activeElement===o.target)return;const e=i.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=ey(e);if(t){t.focus();break}}}))}}),[n,t,i,a,o]),null}const _x=$({...uy,scaleX:1,scaleY:1});var Mx;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(Mx||(Mx={}));const Fx=w((function(e){var t,r,n,s;let{id:l,accessibility:c,autoScroll:d=!0,children:h,sensors:p=xx,collisionDetection:f=by,measuring:b,modifiers:v,...y}=e;const w=x(Ox,void 0,Tx),[$,C]=w,[S,k]=function(){const[e]=a((()=>new Set)),t=g((t=>(e.add(t),()=>e.delete(t))),[e]);return[g((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[D,T]=a(Mx.Uninitialized),E=D===Mx.Initialized,{draggable:{active:_,nodes:M,translate:F},droppable:{containers:I}}=$,A=_?M.get(_):null,B=o({initial:null,translated:null}),j=m((()=>{var e;return null!=_?{id:_,data:null!=(e=null==A?void 0:A.data)?e:wx,rect:B}:null}),[_,A]),z=o(null),[R,P]=a(null),[L,N]=a(null),H=Nv(y,Object.values(y)),W=Uv("DndDescribedBy",l),Y=m((()=>I.getEnabled()),[I]),V=function(e){return m((()=>({draggable:{...$x.draggable,...null==e?void 0:e.draggable},droppable:{...$x.droppable,...null==e?void 0:e.droppable},dragOverlay:{...$x.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(b),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:X}=function(e,t){let{dragging:r,dependencies:n,config:i}=t;const[s,l]=a(null),{frequency:c,measure:d,strategy:h}=i,p=o(e),f=function(){switch(h){case lx.Always:return!1;case lx.BeforeDragging:return r;default:return!r}}(),m=Nv(f),b=g((function(e){void 0===e&&(e=[]),m.current||l((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=o(null),y=Hv((t=>{if(f&&!r)return dx;if(!t||t===dx||p.current!==e||null!=s){const t=new Map;for(let r of e){if(!r)continue;if(s&&s.length>0&&!s.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new Ry(d(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,s,r,f,d]);return u((()=>{p.current=e}),[e]),u((()=>{f||b()}),[r,f]),u((()=>{s&&s.length>0&&l(null)}),[JSON.stringify(s)]),u((()=>{f||"number"!=typeof c||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),c))}),[c,f,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=s}}(Y,{dragging:E,dependencies:[F.x,F.y],config:V.droppable}),q=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return Hv((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(M,_),G=m((()=>L?Zv(L):null),[L]),Z=function(){const e=!1===(null==R?void 0:R.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,r=E&&!e&&!t;if("object"==typeof d)return{...d,enabled:r};return{enabled:r}}(),Q=function(e,t){return ux(e,t)}(q,V.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:i=!0}=e;const a=o(!1),{x:s,y:l}="boolean"==typeof i?{x:i,y:i}:i;Pv((()=>{if(!s&&!l||!t)return void(a.current=!1);if(a.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const i=vy(r(e),n);if(s||(i.x=0),l||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){const t=ky(e);t&&t.scrollBy({top:i.y,left:i.x})}}),[t,s,l,n,r])}({activeNode:_?M.get(_):null,config:Z.layoutShiftCompensation,initialRect:Q,measure:V.draggable.measure});const J=gx(q,V.draggable.measure,Q),ee=gx(q?q.parentElement:null),te=o({activatorEvent:null,active:null,activeNode:q,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:M,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=I.getNodeFor(null==(t=te.current.over)?void 0:t.id),ne=yx({measure:V.dragOverlay.measure}),ie=null!=(r=ne.nodeRef.current)?r:q,oe=E?null!=(n=ne.rect)?n:J:null,ae=Boolean(ne.nodeRef.current&&ne.rect),se=vy(le=ae?null:J,ux(le));var le;const ce=bx(ie?Av(ie):null),de=function(e){const t=o(e),r=Hv((r=>e?r&&r!==fx&&e&&t.current&&e.parentNode===t.current.parentNode?r:Sy(e):fx),[e]);return u((()=>{t.current=e}),[e]),r}(E?null!=re?re:q:null),ue=function(e,t){void 0===t&&(t=$y);const[r]=e,n=bx(r?Av(r):null),[i,o]=x((function(){return e.length?e.map((e=>My(e)?n:new Ry(t(e),e))):vx}),vx),a=hx({callback:o});return e.length>0&&i===vx&&o(),Pv((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),o())}),[e]),i}(de),he=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(v,{transform:{x:F.x-se.x,y:F.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:j,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:oe,over:te.current.over,overlayNodeRect:ne.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),pe=G?Xv(G,F):null,ge=function(e){const[t,r]=a(null),n=o(e),i=g((e=>{const t=Dy(e.target);t&&r((e=>e?(e.set(t,Ey(t)),new Map(e)):null))}),[]);return u((()=>{const t=n.current;if(e!==t){o(t);const a=e.map((e=>{const t=Dy(e);return t?(t.addEventListener("scroll",i,{passive:!0}),[t,Ey(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{o(e),o(t)};function o(e){e.forEach((e=>{const t=Dy(e);null==t||t.removeEventListener("scroll",i)}))}}),[i,e]),m((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>Xv(e,t)),uy):jy(e):uy),[e,t])}(de),fe=mx(ge),me=mx(ge,[J]),be=Xv(he,fe),ve=oe?xy(oe,he):null,ye=j&&ve?f({active:j,collisionRect:ve,droppableRects:U,droppableContainers:Y,pointerCoordinates:pe}):null,xe=fy(ye,"id"),[we,$e]=a(null),Ce=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(ae?he:Xv(he,me),null!=(s=null==we?void 0:we.rect)?s:null,J),Se=g(((e,t)=>{let{sensor:r,options:n}=t;if(null==z.current)return;const i=M.get(z.current);if(!i)return;const o=e.nativeEvent,a=new r({active:z.current,activeNode:i,event:o,options:n,context:te,onStart(e){const t=z.current;if(null==t)return;const r=M.get(t);if(!r)return;const{onDragStart:n}=H.current,i={active:{id:t,data:r.data,rect:B}};O((()=>{null==n||n(i),T(Mx.Initializing),C({type:ly.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:i})}))},onMove(e){C({type:ly.DragMove,coordinates:e})},onEnd:s(ly.DragEnd),onCancel:s(ly.DragCancel)});function s(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:i}=te.current;let a=null;if(t&&i){const{cancelDrop:s}=H.current;if(a={activatorEvent:o,active:t,collisions:r,delta:i,over:n},e===ly.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=ly.DragCancel)}}z.current=null,O((()=>{C({type:e}),T(Mx.Uninitialized),$e(null),P(null),N(null);const t=e===ly.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),S({type:t,event:a})}}))}}O((()=>{P(a),N(e.nativeEvent)}))}),[M]),ke=g(((e,t)=>(r,n)=>{const i=r.nativeEvent,o=M.get(n);if(null!==z.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(r,t.options,a)&&(i.dndKit={capturedBy:t.sensor},z.current=n,Se(r,t))}),[M,Se]),De=function(e,t){return m((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(p,ke);!function(e){u((()=>{if(!Mv)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(p),Pv((()=>{J&&D===Mx.Initializing&&T(Mx.Initialized)}),[J,D]),u((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:r,collisions:n,over:i}=te.current;if(!t||!r)return;const o={active:t,activatorEvent:r,collisions:n,delta:{x:be.x,y:be.y},over:i};O((()=>{null==e||e(o),S({type:"onDragMove",event:o})}))}),[be.x,be.y]),u((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:i}=te.current;if(!e||null==z.current||!t||!i)return;const{onDragOver:o}=H.current,a=n.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:r,delta:{x:i.x,y:i.y},over:s};O((()=>{$e(s),null==o||o(l),S({type:"onDragOver",event:l})}))}),[xe]),Pv((()=>{te.current={activatorEvent:L,active:j,activeNode:q,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:M,draggingNode:ie,draggingNodeRect:oe,droppableContainers:I,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},B.current={initial:oe,translated:ve}}),[j,q,ye,ve,M,ie,oe,U,I,we,de,be]),ax({...Z,delta:F,draggingRect:ve,pointerCoordinates:pe,scrollableAncestors:de,scrollableAncestorRects:ue});const Te=m((()=>({active:j,activeNode:q,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:ne,draggableNodes:M,droppableContainers:I,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:V,measuringScheduled:X,windowRect:ce})),[j,q,J,L,ye,ee,ne,M,I,U,we,K,de,ue,V,X,ce]),Oe=m((()=>({activatorEvent:L,activators:De,active:j,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:M,over:we,measureDroppableContainers:K})),[L,De,j,J,C,W,M,we,K]);return i.createElement(iy.Provider,{value:k},i.createElement(kx.Provider,{value:Oe},i.createElement(Dx.Provider,{value:Te},i.createElement(_x.Provider,{value:Ce},h)),i.createElement(Ex,{disabled:!1===(null==c?void 0:c.restoreFocus)})),i.createElement(sy,{...c,hiddenTextDescribedById:W}))})),Ix=$(null),Ax="button",Bx="Droppable";function jx(e){let{id:t,data:r,disabled:n=!1,attributes:i}=e;const o=Uv(Bx),{activators:a,activatorEvent:s,active:l,activeNodeRect:c,ariaDescribedById:d,draggableNodes:u,over:h}=f(kx),{role:p=Ax,roleDescription:g="draggable",tabIndex:b=0}=null!=i?i:{},v=(null==l?void 0:l.id)===t,y=f(v?_x:Ix),[x,w]=Wv(),[$,C]=Wv(),S=function(e,t){return m((()=>e.reduce(((e,r)=>{let{eventName:n,handler:i}=r;return e[n]=e=>{i(e,t)},e}),{})),[e,t])}(a,t),k=Nv(r);Pv((()=>(u.set(t,{id:t,key:o,node:x,activatorNode:$,data:k}),()=>{const e=u.get(t);e&&e.key===o&&u.delete(t)})),[u,t]);return{active:l,activatorEvent:s,activeNodeRect:c,attributes:m((()=>({role:p,tabIndex:b,"aria-disabled":n,"aria-pressed":!(!v||p!==Ax)||void 0,"aria-roledescription":g,"aria-describedby":d.draggable})),[n,p,b,v,g,d.draggable]),isDragging:v,listeners:n?void 0:S,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const zx="Droppable",Rx={timeout:25};function Px(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function Lx(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function Nx(e){return null!==e&&e>=0}const Hx=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const o=Px(t,n,r),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},Wx={scaleX:1,scaleY:1},Yx=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[r])?t:n;if(!s)return null;if(i===r){const e=o[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...Wx}:null}const l=function(e,t,r){const n=e[t],i=e[t-1],o=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):o?o.top-(n.top+n.height):0;return o?o.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(o,i,r);return i>r&&i<=a?{x:0,y:-s.height-l,...Wx}:i<r&&i>=a?{x:0,y:s.height+l,...Wx}:{x:0,y:0,...Wx}};const Vx="Sortable",Ux=i.createContext({activeIndex:-1,containerId:Vx,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Hx,disabled:{draggable:!1,droppable:!1}});function Kx(e){let{children:t,id:r,items:n,strategy:a=Hx,disabled:s=!1}=e;const{active:l,dragOverlay:c,droppableRects:d,over:h,measureDroppableContainers:p}=f(Dx),g=Uv(Vx,r),b=Boolean(null!==c.rect),v=m((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=l,x=l?v.indexOf(l.id):-1,w=h?v.indexOf(h.id):-1,$=o(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,k=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(s);Pv((()=>{C&&y&&p(v)}),[C,v,y,p]),u((()=>{$.current=v}),[v]);const D=m((()=>({activeIndex:x,containerId:g,disabled:k,disableTransforms:S,items:v,overIndex:w,useDragOverlay:b,sortedRects:Lx(v,d),strategy:a})),[x,g,k.draggable,k.droppable,S,v,w,d,b,a]);return i.createElement(Ux.Provider,{value:D},t)}const Xx=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return Px(r,n,i).indexOf(t)},qx=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===o||i!==a)&&(!!r||a!==i&&t===l))},Gx={duration:200,easing:"ease"},Zx="transform",Qx=Qv.Transition.toString({property:Zx,duration:0,easing:"linear"}),Jx={roleDescription:"sortable"};function ew(e){let{animateLayoutChanges:t=qx,attributes:r,disabled:n,data:i,getNewIndex:s=Xx,id:l,strategy:c,resizeObserverConfig:d,transition:h=Gx}=e;const{items:p,containerId:b,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=f(Ux),k=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),D=p.indexOf(l),T=m((()=>({sortable:{containerId:b,index:D,items:p},...i})),[b,i,D,p]),O=m((()=>p.slice(p.indexOf(l))),[p,l]),{rect:E,node:_,isOver:M,setNodeRef:F}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:i}=e;const a=Uv(zx),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=f(kx),h=o({disabled:r}),p=o(!1),m=o(null),b=o(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...Rx,...i},w=Nv(null!=y?y:n),$=hx({callback:g((()=>{p.current?(null!=b.current&&clearTimeout(b.current),b.current=setTimeout((()=>{d(Array.isArray(w.current)?w.current:[w.current]),b.current=null}),x)):p.current=!0}),[x]),disabled:v||!s}),C=g(((e,t)=>{$&&(t&&($.unobserve(t),p.current=!1),e&&$.observe(e))}),[$]),[S,k]=Wv(C),D=Nv(t);return u((()=>{$&&S.current&&($.disconnect(),p.current=!1,$.observe(S.current))}),[S,$]),Pv((()=>(l({type:ly.RegisterDroppable,element:{id:n,key:a,disabled:r,node:S,rect:m,data:D}}),()=>l({type:ly.UnregisterDroppable,key:a,id:n}))),[n]),u((()=>{r!==h.current.disabled&&(l({type:ly.SetDroppableDisabled,id:n,key:a,disabled:r}),h.current.disabled=r)}),[n,a,r,l]),{active:s,rect:m,isOver:(null==c?void 0:c.id)===n,node:S,over:c,setNodeRef:k}}({id:l,data:T,disabled:k.droppable,resizeObserverConfig:{updateMeasurementsFor:O,...d}}),{active:I,activatorEvent:A,activeNodeRect:B,attributes:j,setNodeRef:z,listeners:R,isDragging:P,over:L,setActivatorNodeRef:N,transform:H}=jx({id:l,data:T,attributes:{...Jx,...r},disabled:k.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m((()=>e=>{t.forEach((t=>t(e)))}),t)}(F,z),Y=Boolean(I),V=Y&&!x&&Nx(v)&&Nx($),U=!C&&P,K=U&&V?H:null,X=V?null!=K?K:(null!=c?c:S)({rects:w,activeNodeRect:B,activeIndex:v,overIndex:$,index:D}):null,q=Nx(v)&&Nx($)?s({id:l,items:p,activeIndex:v,overIndex:$}):D,G=null==I?void 0:I.id,Z=o({activeId:G,items:p,newIndex:q,containerId:b}),Q=p!==Z.current.items,J=t({active:I,containerId:b,isDragging:P,isSorting:Y,id:l,index:D,items:p,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:i}=e;const[s,l]=a(null),c=o(r);return Pv((()=>{if(!t&&r!==c.current&&n.current){const e=i.current;if(e){const t=$y(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&l(r)}}r!==c.current&&(c.current=r)}),[t,r,n,i]),u((()=>{s&&l(null)}),[s]),s}({disabled:!J,index:D,node:_,rect:E});return u((()=>{Y&&Z.current.newIndex!==q&&(Z.current.newIndex=q),b!==Z.current.containerId&&(Z.current.containerId=b),p!==Z.current.items&&(Z.current.items=p)}),[Y,q,b,p]),u((()=>{if(G===Z.current.activeId)return;if(G&&!Z.current.activeId)return void(Z.current.activeId=G);const e=setTimeout((()=>{Z.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:I,activeIndex:v,attributes:j,data:T,rect:E,index:D,newIndex:q,items:p,isOver:M,isSorting:Y,isDragging:P,listeners:R,node:_,overIndex:$,over:L,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:F,setDraggableNodeRef:z,transform:null!=ee?ee:X,transition:function(){if(ee||Q&&Z.current.newIndex===D)return Qx;if(U&&!Gv(A)||!h)return;if(Y||J)return Qv.Transition.toString({...h,property:Zx});return}()}}function tw(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const rw=[Hy.Down,Hy.Right,Hy.Up,Hy.Left],nw=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(rw.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];o.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const o=i.get(r.id);if(o)switch(e.code){case Hy.Down:n.top<o.top&&t.push(r);break;case Hy.Up:n.top>o.top&&t.push(r);break;case Hy.Left:n.left>o.left&&t.push(r);break;case Hy.Right:n.left<o.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=gy(t),o=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=gy(n),a=i.reduce(((e,t,n)=>{return e+(i=r[n],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(hy)})({active:r,collisionRect:n,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=fy(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(r.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=Sy(l).some(((e,t)=>s[t]!==e)),i=iw(e,t),o=function(e,t){if(!tw(e)||!tw(t))return!1;if(!iw(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!i?{x:0,y:0}:{x:o?n.width-a.width:0,y:o?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:qv(d,c)}}}};function iw(e,t){return!(!tw(e)||!tw(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class ow extends tx{}ow.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>aw(e.target)}];function aw(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Ky{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>aw(e.target)}];const sw=M.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,lw=M(_h)`
    color: ${dc.text};
    ${ad({textSize:"body-md"})}

    ${bc.MaxWidth.sm} {
        display: none;
    }
`,cw=M(Hf)`
    padding: 3.5rem 1.25rem 2.5rem;
`,dw=M.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${dc.text};
    ${ad({textSize:"body-md"})}
`,uw=n=>{var{children:i,visible:o,onMobileClose:a}=n,s=dt(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=A(),d=mc["sm-max"]({theme:c}),u=Ed.useMediaQuery({maxWidth:d}),h=()=>{a&&a()},p=()=>"string"==typeof i?e(_c.BodyMD,{children:i}):i;return t(r,{children:[o&&e(sw,Object.assign({"data-testid":l},s,{children:e(lw,{children:p()})})),u&&e(Pf,{show:null!=o&&o,onOverlayClick:h,children:e(cw,{onClose:h,children:e(dw,{children:p()})})})]})},hw=M.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,pw=n=>{var i,s,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:h,rootNode:p,customOffset:g,delay:f,onPopoverAppear:m,onPopoverDismiss:b}=n,v=dt(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=a(!1),w=o(null),$=o(null),C=A(),S=mc["sm-max"]({theme:C}),k=Ed.useMediaQuery({maxWidth:S}),{refs:D,floatingStyles:T,context:O}=ye({open:y,placement:u,whileElementsMounted:xe,middleware:[we(null!=g?g:16),$e(),Ce({limiter:Se()})],onOpenChange:e=>{x(e),y!==e&&R(e)}}),E=Ig(),_=k?"click":d,M=Te(O,{ignoreMouse:"hover"===_}),F=Oe(O),I=Be(O,{enabled:"hover"===_,delay:{open:null!==(i=null==f?void 0:f.open)&&void 0!==i?i:0,close:null!==(s=null==f?void 0:f.close)&&void 0!==s?s:500}}),{getReferenceProps:B,getFloatingProps:j}=Ee([M,F,I]),z=()=>{x(!1),R(!1)},R=e=>{e&&m&&m(),!e&&b&&b()};return t(r,{children:[e(hw,Object.assign({ref:e=>{w.current=e,D.setReference(e)}},B({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:l})),y&&e(_e,{root:p,children:e(Me,{context:O,children:e("div",Object.assign({ref:e=>{$.current=e,D.setFloating(e)},style:Object.assign(Object.assign({},T),{outline:"none",zIndex:null!=h?h:E})},j(),{children:"function"==typeof c?c():e(uw,{visible:!0,onMobileClose:z,children:c})}))})})]})},gw=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},fw=M.span`
    color: ${dc["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>gw(e)}

    &:hover,
    &:focus-visible {
        color: ${dc["text-hover"]};
        ${({$hoverStyle:e})=>gw(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,mw=M.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,bw=r=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=dt(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!i;return e(pw,Object.assign({},l,{children:t(fw,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info",children:[i,o&&e(mw,{$standalone:!c,children:o})]})}))},vw=M.div`
    padding-left: ${gc["spacing-4"]};
    display: inline;
`,yw=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e(vw,{children:e(bw,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=o?o:e(P,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},xw=M.label`
    color: ${dc["text-subtle"]};
    margin-bottom: ${gc["spacing-8"]};
    display: inline-block;

    ${uc["form-label"]}
    ${ad()}
    font-weight: ${uc.Spec["weight-semibold"]};
`,ww=M.p`
    ${uc["body-sm-semibold"]}
    color: ${dc["text-error"]};
    margin-top: ${gc["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,$w=M.span`
    ${uc["form-description"]}
    color: ${dc["text-subtler"]};
    display: block;
`,Cw=r=>{var{children:n,addon:i,subtitle:o,"data-testid":a}=r,s=dt(r,["children","addon","subtitle","data-testid"]);return t(xw,Object.assign({},s,{children:[n,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(yw,{addon:i}):null),"string"==typeof o?e($w,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},Sw=t=>e(ww,Object.assign({},t)),kw=F`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${gc["spacing-32"]};
    }
`,Dw=M.div`
    ${kw}
`,Tw=M(pf)`
    ${kw}
`,Ow=M(yf)`
    ${kw}
`,Ew=({label:r,errorMessage:n,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,"data-error-testid":y})=>{const x=!s&&(l||d||u)?"v2-grid":!s&&(h||p||g||f||m||b||v)?"grid":s||"flex",w=()=>y||(i?`${i}-error-message`:"error-message"),$=()=>!!n;const C=(e=>{switch(e){case"v2-grid":return Ow;case"grid":return Tw;case"flex":return Dw}})(x);return t(C,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:d,desktopCols:u};case"grid":return{xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v};case"flex":return}})(x),{children:[r&&e(Cw,"string"==typeof r?{htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o,children:r}:Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},r)),(()=>{const e={"aria-invalid":$(),"aria-describedby":$()&&w()};return S.map(a,(t=>c(t,e)))})(),n&&e(ww,{id:w(),tabIndex:0,"data-testid":w(),children:n})]}))};function _w(e,t){return _w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_w(e,t)}function Mw(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Fw(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Iw(e){return null!==e&&1===e.length?e[0]:e.slice()}function Aw(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Bw(e,t){return jw(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function jw(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let zw=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Aw(r.getMouseEventMap())}))}Mw(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Bw(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Aw(r.getKeyDownEventMap()),Mw(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Aw(r.getMouseEventMap()),Mw(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Aw(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:Iw(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:Iw(r.state.value)};return r.props.renderTrack(i,o)};let n=Fw(t.value);n.length||(n=Fw(t.defaultValue)),r.pendingResizeTimeouts=[];const o=[];for(let e=0;e<n.length;e+=1)n[e]=Bw(n[e],t),o.push(e);return r.resizeObserver=null,r.resizeElementRef=i.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:o},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_w(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Fw(e.value);return r.length?t.pending?null:{value:r.map((t=>Bw(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Iw(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),a=Math.abs(e-i);a<t&&(t=a,r=o)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Bw(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),i=e[r],o=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],i=r[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),i=Bw(this.calcValue(r),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Bw(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Bw(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,i=t[r];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,o&&n>1&&(e>i?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const o=n-i*r;t[e-1-i]>o&&(t[e-1-i]=o)}}(n,t,l,a)):e<i&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const e=n+i*r;t[i]<e&&(t[i]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,i;for(n=r,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=jw(i,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=jw(i,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Iw(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,o,a)},t}(i.Component);zw.displayName="ReactSlider",zw.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Rw=zw;const Pw=M.div`
    isolation: isolate;
`,Lw=M.div`
    margin-top: ${gc["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${gc["spacing-8"]};
`,Nw=M.div`
    margin-bottom: ${gc["spacing-8"]};
`,Hw=M(_c.BodyBL)`
    overflow-wrap: anywhere;
`,Ww=M(Rw)`
    height: 0.875rem;
`,Yw=M.div`
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

        background-color: ${dc.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${pc["width-010"]} ${pc.solid}
            ${e=>e.$disabled?dc["border-selected-disabled"]:dc["border-strong"]};
        border-radius: 50%;
    }
`,Vw=M.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${Yw}:after {
        outline-offset: -1px;
        outline: ${pc["width-040"]} ${pc.solid}
            ${dc["border-selected"]};
    }
`,Uw=M.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${fc.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||dc["border-strong"](e)};
`,Kw=r=>{var{value:n,min:i=0,max:o=100,step:s=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:h,readOnly:p,ariaLabels:g,showSliderLabels:f,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=dt(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[k,D]=a(O()),T=function(){const e=function(){const e=h||p?dc["border-disabled"]:dc["border-strong"],t=h||p?dc["border-selected-disabled"]:dc["border-selected"];if(1===c)return[t,e];const r=[];r.push(e);for(let e=0;e<c-1;e++)r.push(t);return r.push(e),r}();return new Array(c+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();u((()=>{n!==k&&D(O())}),[n]);function O(){if(n&&n.length===c)return n;const e=[];for(let t=0;t<c;t++)e.push(i+s*t);return e}const E=e=>w?w(e):t(Hw,{children:[m,e,b]});return t(Pw,Object.assign({},S,{children:[v&&e(Nw,{children:(()=>{let e="";if(1===k.length)e=`${k[0]}`;else if(2===k.length)e=`${k[0]} - ${k[1]}`;else if(k.length>2){e=`${Math.min(...k)} - ${Math.max(...k)}`}return t(Hw,{children:[y,e,x]})})()}),e(Ww,{step:s,min:i,max:o,value:k,disabled:h||p,onChange:(e,t)=>{if("number"==typeof e){const t=[e];D(t),null==$||$(t)}else{if(t>-1&&k[t]===e[t])return;const r=[...e];D(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];D(t),null==C||C(t)}else{const t=[...e];D(t),null==C||C(t)}},minDistance:l,ariaLabel:g,renderThumb:(t,r)=>e(Vw,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:h?void 0:t.tabIndex,children:e(Yw,{$disabled:h,$readOnly:p})})),renderTrack:(t,r)=>e(Uw,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:T[r.index]}))}),f&&t(Lw,{children:[e("div",{children:E(i)}),e("div",{children:E(o)})]})]}))},Xw=M.div`
    display: flex;
    margin-bottom: ${gc["spacing-16"]};
    align-items: baseline;
`,qw=M.div`
    margin: 0 0.5rem;
`,Gw=M.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Zw=M.div`
    flex: 1;
    border-radius: ${fc.sm} ${fc.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=dc["bg-strongest"];return e.$disabled&&e.$selected?t=dc["bg-selected-stronger-disabled"]:e.$disabled?t=dc["bg-disabled"]:e.$selected&&(t=dc["bg-selected-stronger"]),F`
            background-color: ${t};
        `}}
`,Qw=M(Kw)`
    margin-top: -0.3125rem;
`,Jw=n=>{var{bins:i=[],interval:o,disabled:s,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:h,rangeLabelSuffix:p,ariaLabels:g,onChange:f,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=dt(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),$=Math.max(...w),C=i.map((e=>e.minValue)),S=Math.max(...C),k=Math.min(...C),[D,T]=a(M()),O=m((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(S-k)/o+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===k+o*n));t?r.push(t):r.push({count:0,minValue:k+o*n})}return r}),[i,o]);u((()=>{c!==D&&T(M())}),[c]);const E=e=>{const[t,r]=e,n=[t,r];T(n),null==f||f(n)},_=e=>{const[t,r]=e,n=[t,r];T(n),null==b||b(n)};function M(){return null!=c?c:[k,k+o]}const F=e=>y?y(e):t(_c.BodyBL,{children:[h,e,p]});return t("div",Object.assign({},x,{children:[d&&t(Xw,{children:[F(D[0]),e(qw,{children:"-"}),F(D[1])]}),O.every((e=>0===e.count))&&v?v():t(r,{children:[e(Gw,{children:O.map(((t,r)=>{const n=t.count/$;return e(Zw,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=D[0]&&t.minValue<D[1],$disabled:s||l},r)}))}),e(Qw,{min:k,max:S+o,step:o,minRange:o,numOfThumbs:2,value:D,disabled:s,readOnly:l,ariaLabels:g,onChange:E,onChangeEnd:_})]})]}))},e$=M(Qp)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${gc["spacing-16"]};
            padding-right: ${e.$showClear?0:gc["spacing-16"]};
        `}
`,t$=M(Jp)`
    height: auto;
    padding: ${gc["spacing-12"]} ${gc["spacing-16"]};

    cursor: pointer;
    color: ${dc.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${gc["spacing-12"]};
        `}
`,r$=M(je)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,n$=M.div`
    display: flex;
    width: 100%;
`,i$=M(Gp)`
    display: flex;
    align-items: center;
    width: 100%;
`,o$=i.forwardRef(((n,i)=>{var{value:a,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:p,allowClear:g=!1,className:f,styleType:m="bordered"}=n,v=dt(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,s),x=o(null);b(i,(()=>x.current),[]);const w=bu({ref:x,formatter:e=>y?hu.transformWithSpaces(e,s):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{p&&p(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,i=r.replace(/\s/g,"");e.target.value=i,null==h||h(e),n()},k=a?(e=>e?y?hu.transformWithSpaces(e,s):e:"")(a):a,D=g&&!d&&!u&&!!a,T=()=>t(r,{children:[e(e$,Object.assign({"data-testid":"input",ref:x,disabled:d,value:k,onChange:$,type:l,readOnly:u,$showClear:D,$styleType:m},v)),D&&e(t$,{onClick:C,type:"button",$styleType:m,children:e(r$,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===m?e(n$,{className:f,children:T()}):e(i$,{$disabled:d,$error:c,$readOnly:u,className:f,children:T()})})})),a$=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(o$,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:r,error:!!i},y))})}));var s$=Os;var l$=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var c$=function(e){return this.__data__.get(e)};var d$=function(e){return this.__data__.has(e)},u$=Os,h$=Es,p$=qs;var g$=function(e,t){var r=this.__data__;if(r instanceof u$){var n=r.__data__;if(!h$||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new p$(n)}return r.set(e,t),this.size=r.size,this},f$=Os,m$=function(){this.__data__=new s$,this.size=0},b$=l$,v$=c$,y$=d$,x$=g$;function w$(e){var t=this.__data__=new f$(e);this.size=t.size}w$.prototype.clear=m$,w$.prototype.delete=b$,w$.prototype.get=v$,w$.prototype.has=y$,w$.prototype.set=x$;var $$=w$;var C$=qs,S$=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},k$=function(e){return this.__data__.has(e)};function D$(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new C$;++t<r;)this.add(e[t])}D$.prototype.add=D$.prototype.push=S$,D$.prototype.has=k$;var T$=function(e,t){return e.has(t)},O$=D$,E$=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},_$=T$;var M$=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,p=2&r?new O$:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var g=e[u],f=t[u];if(n)var m=a?n(f,g,u,t,e,o):n(g,f,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!E$(t,(function(e,t){if(!_$(p,t)&&(g===e||i(g,e,r,n,o)))return p.push(t)}))){h=!1;break}}else if(g!==f&&!i(g,f,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var F$=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var I$=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},A$=Qo.Uint8Array,B$=ds,j$=M$,z$=F$,R$=I$,P$=Jo?Jo.prototype:void 0,L$=P$?P$.valueOf:void 0;var N$=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new A$(e),new A$(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return B$(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=z$;case"[object Set]":var l=1&n;if(s||(s=R$),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=j$(s(e),s(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(L$)return L$.call(e)==L$.call(t)}return!1};var H$=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},W$=H$,Y$=Xo;var V$=function(e,t,r){var n=t(e);return Y$(e)?n:W$(n,r(e))};var U$=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},K$=function(){return[]},X$=Object.prototype.propertyIsEnumerable,q$=Object.getOwnPropertySymbols,G$=q$?function(e){return null==e?[]:(e=Object(e),U$(q$(e),(function(t){return X$.call(e,t)})))}:K$;var Z$=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Q$=da,J$=ua;var eC=function(e){return J$(e)&&"[object Arguments]"==Q$(e)},tC=ua,rC=Object.prototype,nC=rC.hasOwnProperty,iC=rC.propertyIsEnumerable,oC=eC(function(){return arguments}())?eC:function(e){return tC(e)&&nC.call(e,"callee")&&!iC.call(e,"callee")},aC={exports:{}};var sC=function(){return!1};!function(e,t){var r=Qo,n=sC,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(aC,aC.exports);var lC=aC.exports,cC=/^(?:0|[1-9]\d*)$/;var dC=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&cC.test(e))&&e>-1&&e%1==0&&e<t};var uC=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},hC=da,pC=uC,gC=ua,fC={};fC["[object Float32Array]"]=fC["[object Float64Array]"]=fC["[object Int8Array]"]=fC["[object Int16Array]"]=fC["[object Int32Array]"]=fC["[object Uint8Array]"]=fC["[object Uint8ClampedArray]"]=fC["[object Uint16Array]"]=fC["[object Uint32Array]"]=!0,fC["[object Arguments]"]=fC["[object Array]"]=fC["[object ArrayBuffer]"]=fC["[object Boolean]"]=fC["[object DataView]"]=fC["[object Date]"]=fC["[object Error]"]=fC["[object Function]"]=fC["[object Map]"]=fC["[object Number]"]=fC["[object Object]"]=fC["[object RegExp]"]=fC["[object Set]"]=fC["[object String]"]=fC["[object WeakMap]"]=!1;var mC=function(e){return gC(e)&&pC(e.length)&&!!fC[hC(e)]};var bC=function(e){return function(t){return e(t)}},vC={exports:{}};!function(e,t){var r=qo,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(vC,vC.exports);var yC=vC.exports,xC=mC,wC=bC,$C=yC&&yC.isTypedArray,CC=$C?wC($C):xC,SC=Z$,kC=oC,DC=Xo,TC=lC,OC=dC,EC=CC,_C=Object.prototype.hasOwnProperty;var MC=function(e,t){var r=DC(e),n=!r&&kC(e),i=!r&&!n&&TC(e),o=!r&&!n&&!i&&EC(e),a=r||n||i||o,s=a?SC(e.length,String):[],l=s.length;for(var c in e)!t&&!_C.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||OC(c,l))||s.push(c);return s},FC=Object.prototype;var IC=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||FC)};var AC=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),BC=IC,jC=AC,zC=Object.prototype.hasOwnProperty;var RC=function(e){if(!BC(e))return jC(e);var t=[];for(var r in Object(e))zC.call(e,r)&&"constructor"!=r&&t.push(r);return t},PC=Sa,LC=uC;var NC=function(e){return null!=e&&LC(e.length)&&!PC(e)},HC=MC,WC=RC,YC=NC;var VC=function(e){return YC(e)?HC(e):WC(e)},UC=V$,KC=G$,XC=VC;var qC=function(e){return UC(e,XC,KC)},GC=Object.prototype.hasOwnProperty;var ZC=function(e,t,r,n,i,o){var a=1&r,s=qC(e),l=s.length;if(l!=qC(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:GC.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var g=a;++c<l;){var f=e[d=s[c]],m=t[d];if(n)var b=a?n(m,f,d,t,e,o):n(f,m,d,e,t,o);if(!(void 0===b?f===m||i(f,m,r,n,o):b)){p=!1;break}g||(g="constructor"==d)}if(p&&!g){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(p=!1)}return o.delete(e),o.delete(t),p},QC=Wa(Qo,"DataView"),JC=Es,eS=Wa(Qo,"Promise"),tS=Wa(Qo,"Set"),rS=Wa(Qo,"WeakMap"),nS=da,iS=Ea,oS="[object Map]",aS="[object Promise]",sS="[object Set]",lS="[object WeakMap]",cS="[object DataView]",dS=iS(QC),uS=iS(JC),hS=iS(eS),pS=iS(tS),gS=iS(rS),fS=nS;(QC&&fS(new QC(new ArrayBuffer(1)))!=cS||JC&&fS(new JC)!=oS||eS&&fS(eS.resolve())!=aS||tS&&fS(new tS)!=sS||rS&&fS(new rS)!=lS)&&(fS=function(e){var t=nS(e),r="[object Object]"==t?e.constructor:void 0,n=r?iS(r):"";if(n)switch(n){case dS:return cS;case uS:return oS;case hS:return aS;case pS:return sS;case gS:return lS}return t});var mS=fS,bS=$$,vS=M$,yS=N$,xS=ZC,wS=mS,$S=Xo,CS=lC,SS=CC,kS="[object Arguments]",DS="[object Array]",TS="[object Object]",OS=Object.prototype.hasOwnProperty;var ES=function(e,t,r,n,i,o){var a=$S(e),s=$S(t),l=a?DS:wS(e),c=s?DS:wS(t),d=(l=l==kS?TS:l)==TS,u=(c=c==kS?TS:c)==TS,h=l==c;if(h&&CS(e)){if(!CS(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new bS),a||SS(e)?vS(e,t,r,n,i,o):yS(e,t,l,r,n,i,o);if(!(1&r)){var p=d&&OS.call(e,"__wrapped__"),g=u&&OS.call(t,"__wrapped__");if(p||g){var f=p?e.value():e,m=g?t.value():t;return o||(o=new bS),i(f,m,r,n,o)}}return!!h&&(o||(o=new bS),xS(e,t,r,n,i,o))},_S=ua;var MS=function e(t,r,n,i,o){return t===r||(null==t||null==r||!_S(t)&&!_S(r)?t!=t&&r!=r:ES(t,r,n,i,e,o))},FS=$$,IS=MS;var AS=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new FS;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?IS(d,c,3,n,u):h))return!1}}return!0},BS=xa;var jS=function(e){return e==e&&!BS(e)},zS=jS,RS=VC;var PS=function(e){for(var t=RS(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,zS(i)]}return t};var LS=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},NS=AS,HS=PS,WS=LS;var YS=function(e,t){return null!=e&&t in Object(e)},VS=fl,US=oC,KS=Xo,XS=dC,qS=uC,GS=bl;var ZS=function(e,t,r){for(var n=-1,i=(t=VS(t,e)).length,o=!1;++n<i;){var a=GS(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&qS(i)&&XS(a,i)&&(KS(e)||US(e))},QS=YS,JS=ZS;var ek=MS,tk=$l,rk=function(e,t){return null!=e&&JS(e,t,QS)},nk=ya,ik=jS,ok=LS,ak=bl;var sk=function(e){return function(t){return null==t?void 0:t[e]}},lk=xl;var ck=sk,dk=function(e){return function(t){return lk(t,e)}},uk=ya,hk=bl;var pk=function(e){var t=HS(e);return 1==t.length&&t[0][2]?WS(t[0][0],t[0][1]):function(r){return r===e||NS(r,e,t)}},gk=function(e,t){return nk(e)&&ik(t)?ok(ak(e),t):function(r){var n=tk(r,e);return void 0===n&&n===t?rk(r,e):ek(t,n,3)}},fk=function(e){return e},mk=Xo,bk=function(e){return uk(e)?ck(hk(e)):dk(e)};var vk=function(e){return"function"==typeof e?e:null==e?fk:"object"==typeof e?mk(e)?gk(e[0],e[1]):pk(e):bk(e)},yk=vk,xk=NC,wk=VC;var $k=function(e){return function(t,r,n){var i=Object(t);if(!xk(t)){var o=yk(r);t=wk(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var Ck=Zh,Sk=1/0;var kk=function(e){return e?(e=Ck(e))===Sk||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Dk=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Tk=vk,Ok=function(e){var t=kk(e),r=t%1;return t==t?r?t-r:t:0},Ek=Math.max;var _k=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:Ok(r);return i<0&&(i=Ek(n+i,0)),Dk(e,Tk(t),i)},Mk=Uo(_k),Fk=Uo($k(_k)),Ik=MS;var Ak=Uo((function(e,t){return Ik(e,t)}));const Bk=M(Yo.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,jk=M.ul`
    border-bottom-left-radius: ${fc.sm};
    border-bottom-right-radius: ${fc.sm};
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
        background: ${dc["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${bc.MaxWidth.sm} {
        max-height: 15rem;
    }
`,zk=M.li`
    :hover,
    :focus,
    :active {
        background: ${dc["bg-hover"]};
    }
    ${e=>{if(e.$checked)return F`
                background: ${dc["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${dc["bg-selected-hover"]};
                }
            `}}
`,Rk=M.button`
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
        outline-color: ${dc["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,Pk=F`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Lk=M.div`
    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
    color: ${dc.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Pk}
`,Nk=M.div`
    color: ${dc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Pk}

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${uc["body-md-semibold"]}
                `:F`
                    ${uc["body-baseline-regular"]}
                `}
`,Hk=M.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${Lk} {
                        display: inline;
                    }

                    ${Nk} {
                        display: inline;
                        margin-left: ${gc["spacing-8"]};
                    }
                `}}}
`,Wk=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Yk=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Vk=M(Ph)`
    flex-shrink: 0;
    margin-right: ${gc["spacing-16"]};
`,Uk=M.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${gc["spacing-16"]} 0 ${gc["spacing-8"]} 0;
`,Kk=M.button`
    ${e=>"small"===e.$variant?uc["body-md-semibold"]:uc["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${dc["text-primary"]};
`,Xk=M.div`
    width: 100%;
    display: flex;
    padding: 15px ${gc["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
`,qk=M(z)`
    height: 1em;
    width: 1em;
    margin-right: ${gc["spacing-4"]};
    color: ${dc["icon-error"]};
`,Gk=M(Xc)`
    margin-right: ${gc["spacing-4"]};
    color: ${dc.icon};
`,Zk=e=>"small"===e?1:1.375,Qk=e=>F`
        height: ${Zk(e)}rem;
        width: ${Zk(e)}rem;
    `,Jk=M.li`
    background: ${dc["bg-strong"]};
    display: flex;
    border-radius: ${fc.sm};
    align-items: center;
`,eD=M(Qp)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${gc["spacing-8"]} 0 0;
    width: 100%;
`,tD=M(Le)`
    ${e=>Qk(e.$variant)}
    margin: 0 ${gc["spacing-8"]};
    color: ${dc.icon};
`,rD=M(kc)`
    ${e=>Qk(e.$variant)}
    padding: 0;
    margin: 0 ${gc["spacing-8"]};
    color: ${dc.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return F`
                svg {
                    ${Qk(e.$variant)}
                }
            `}}
`,nD=p(((r,n)=>{const{onClear:i}=r,o=dt(r,["onClear"]);return t(Jk,{children:[e(tD,{$variant:r.variant}),e(eD,Object.assign({ref:n,$variant:r.variant},o)),o.value&&e(rD,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:r.variant,children:e(J,{})})]},"search")})),iD=n=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:g="Search",onSearch:f,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:k=2,labelDisplayType:D="inline",renderListItem:T,onBlur:O,hideNoResultsDisplay:E,renderCustomCallToAction:_,variant:M="default"}=n,F=dt(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[I,A]=a(0),[B,j]=a(""),[z,R]=a(null!=i?i:[]),[P,L]=a(0),N=Do({height:P}),H=o(null),W=o(null),Y=o([]),V=o(null),U=o(null),K=o(I),X=o(z),q=e=>{K.current=e,A(e)},G=e=>{X.current=e,R(e)};u((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),u((()=>{ee(B)}),[B]),u((()=>{if(j(""),h){if(setTimeout((()=>{L(te())})),v)return;V&&V.current?(V.current.focus(),q(-1)):Y.current[I]&&Y.current[I].focus()}else L(0)}),[h]),u((()=>{if(h){const e=te();L(e)}}),[z,C]),u((()=>{G(null!=i?i:[]),j(""),q(0)}),[i]);const Z=e=>{const t=s?s(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=e=>{if("inline"!==D)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return hu.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!Fk(x,(t=>Ak(t,e))),ee=e=>{if(""===e)G(null!=i?i:[]);else if(m){const t=m(e);G(t)}else{const t=null==i?void 0:i.filter((t=>{const{title:r,secondaryLabel:n}=Z(t),i=e.trim().toLowerCase();return r.includes(i)||n&&n.includes(i)}));G(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<X.current.length-1){const e=K.current+1;null===(t=Y.current[e])||void 0===t||t.focus(),q(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(r=Y.current[e])||void 0===r||r.focus(),q(K.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;j(t),f&&f()},oe=()=>{var e;j(""),null===(e=V.current)||void 0===e||e.focus(),f&&f()},ae=()=>{$&&$()},se=()=>{O&&O()},le=n=>t(r,{children:[e(Wk,{$maxLines:k,"aria-hidden":!0,children:n}),e(Yk,{$maxLines:k,"aria-hidden":!0,children:n})]}),ce=r=>{const{title:n,secondaryLabel:i}=Z(r),o=Q(n),a=i&&Q(i);return t(Hk,{$labelDisplayType:o||a?"next-line":D,children:[e(Lk,{$truncateType:S,$maxLines:k,$variant:M,"aria-label":n,children:"middle"===S&&o?le(n):n}),i&&e(Nk,{$truncateType:S,$maxLines:k,$labelDisplayType:D,"aria-label":i,children:"middle"===S&&a?le(i):i})]})},de=()=>{if(!$||"success"===C)return z.map(((r,n)=>e(zk,{$checked:J(r)&&!y,children:t(Rk,{$hasNextLineLabel:"next-line"===D&&z.length>0&&s&&"string"!=typeof s(z[0]),onClick:e=>{ne(e,r)},ref:e=>Y.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:y,onBlur:se,$variant:M,children:[y&&e(Vk,{checked:J(r),displaySize:"small"}),T?T(r,{selected:J(r)}):ce(r)]})},((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},ue=()=>{if(x&&y&&z.length>0&&!B&&"success"===C)return e(Uk,{children:e(Kk,{onClick:w,type:"button",$variant:M,children:0===x.length?"Select all":"Clear all"})},"selectAll")},he=()=>{if(!E&&(B||!p)&&0===z.length&&"success"===C)return t(Xk,{"data-testid":"list-no-results",$variant:M,children:[e(qk,{"data-testid":"no-result-icon",$variant:M}),"No results found."]},"noResults")},pe=()=>{if($&&"loading"===C)return t(Xk,{"data-testid":"list-loading",$variant:M,children:[e(Gk,{}),"Loading..."]},"loading")},ge=()=>{if($&&"fail"===C)return t(Xk,{"data-testid":"list-fail",$variant:M,children:[e(qk,{"data-testid":"load-error-icon",$variant:M}),"Failed to load. ",e(Kk,{onClick:ae,type:"button",$variant:M,children:"Try again."})]},"noResults")};return e(r,{children:t(Bk,{style:N,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(h)return t(jk,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},F,{children:[(p||m)&&"success"===C?e(nD,{ref:V,onChange:ie,value:B,placeholder:g,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:M}):null,ue(),he(),pe(),ge(),de()]}))})(),(()=>{if(h&&_)return e("div",{ref:U,"data-testid":"custom-cta",children:_(b,z)})})()]})})},oD=M.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return F`
                border-bottom: ${pc["width-010"]} ${pc.solid}
                    ${dc.border};
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
`,aD=M(Cg)`
    padding: 0;
    width: auto;
`,sD=M.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${gc["spacing-12"]};
`,lD=M.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${hc["duration-250"]} ${hc["ease-default"]};
    margin: 0 ${gc["spacing-12"]};
    display: flex;
    align-items: center;
`,cD=M(fe)`
    color: ${dc.icon};
    height: ${uc.Spec["body-size-baseline"]};
    width: ${uc.Spec["body-size-baseline"]};
`,dD=M.div`
    display: flex;
    flex: 1 1 auto;
`,uD=M(_c.BodyBL)`
    text-align: left;
    ${Dc(2)}
    text-overflow: ellipsis;
`,hD=M(uD)`
    color: ${dc["text-subtler"]};
`,pD=M.div`
    width: 1px;
    background: ${dc.border};
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
`,gD=M(Gp)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${gc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,fD=M(Gp)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${gc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,mD=M(o$)``,bD=M.div`
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

    ${e=>{if(e.$disabled)return F`
                color: ${dc["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${e.$readOnly?gc["spacing-4"]:gc["spacing-12"]};
                `:F`
                    margin-right: ${e.$readOnly?gc["spacing-4"]:gc["spacing-12"]};
                `};
`,vD=i.forwardRef(((n,i)=>{var{addon:s,error:l,onChange:c,readOnly:d,className:h,onBlur:p}=n,g=dt(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:f,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:C,onSelectOption:S,onHideOptions:k,onShowOptions:D,"data-selector-testid":T}=s.attributes,{position:O}=s,[E,_]=a(C),[M,F]=a(!1),I=o(null);u((()=>{_(C)}),[C]);const A=()=>{if(E)return $?$(E):x?x(E):E.toString()},B=e=>{!e&&k&&k(),e&&D&&D()},j=e=>{e.preventDefault(),g.disabled||(F(!M),B(!M))},z=(e,t)=>{var r;_(e),F(!1),B(!1),I&&(null===(r=I.current)||void 0===r||r.focus()),S&&S(e,t)},R=e=>{c&&c(e)},P=()=>{p&&p()},L=()=>{var e;F(!1),B(!1),I&&(null===(e=I.current)||void 0===e||e.focus())};return t(Mg,{className:h,show:M,error:l&&!M,disabled:g.disabled,readOnly:d,onBlur:()=>{F(!1),B(!1),P()},children:[t(oD,{$expanded:M,$readOnly:d,$position:O,children:[d?E?e(sD,{children:e(uD,{"data-testid":"selector-label",children:A()})}):null:e(aD,{ref:I,type:"button",disabled:g.disabled,"data-testid":T||"addon-selector",onClick:j,children:t(r,{children:[t(dD,{children:[f&&!E&&e(hD,{children:f}),E&&e(uD,{"data-testid":"selector-label",children:A()})]}),e(lD,{$expanded:M,children:e(cD,{})})]})}),e(pD,{$readOnly:d,$position:O}),e(mD,Object.assign({ref:i},g,{readOnly:d,error:l,onChange:R,"data-testid":g["data-testid"]||"input",onBlur:P,styleType:"no-border"}))]}),m&&m.length>0?e(iD,{listItems:m,selectedItems:C?[C]:[],onSelectItem:z,valueExtractor:x,listExtractor:w,visible:M,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:L}):e(r,{})]})})),yD=i.forwardRef(((r,n)=>{var{addon:i,error:o,className:a}=r,s=dt(r,["addon","error","className"]);const l=()=>e(fD,{$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:e(mD,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!i)return l();{const{type:r="label",position:c="left"}=i,{allowClear:d}=s;switch(r){case"list":{const t=i.attributes;return t.options&&t.options.length>0?e(vD,Object.assign({ref:n,addon:i,error:o,className:a},s)):l()}case"custom":{const r=i.attributes;return r.children?t(gD,{$error:o,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(bD,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),e(mD,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=i.attributes;return r.value?t(gD,{$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(bD,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),e(mD,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),xD=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(yD,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},y))})})),wD=M(yD)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":gc["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,$D=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=dc.icon,$activeColor:r=dc["icon-primary"]})=>e?t:r};
    padding: ${gc["spacing-12"]} ${gc["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,CD=M.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,SD=M(_c.BodyBL)`
    color: ${dc["text-subtler"]};
`,kD=M(Xc)`
    margin-right: ${gc["spacing-8"]};
    color: ${dc.icon};
`,DD=M.span`
    color: ${dc["text-primary"]};
    text-decoration: underline;
    font-weight: ${uc.Spec["weight-semibold"]};
`,TD=M.span`
    display: flex;
    align-items: center;
    margin-right: ${gc["spacing-8"]};
`,OD=M(We)`
    color: ${dc["icon-warning"]};
    margin-right: ${gc["spacing-8"]};
    height: 1em;
    width: 1em;
`,ED=M.span`
    color: ${dc["text-warning"]};
`,_D=M(Jp)`
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
        ${DD} {
            color: ${dc["text-hover"]};
        }
    }
`;var MD,FD,ID={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */MD=ID,FD=ID.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",i=16,o=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,p=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",i],["flip",512],["partial",o],["partialRight",a],["rearg",l]],g="[object Arguments]",f="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",k="[object RegExp]",D="[object Set]",T="[object String]",O="[object Symbol]",E="[object WeakMap]",_="[object ArrayBuffer]",M="[object DataView]",F="[object Float32Array]",I="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",j="[object Int32Array]",z="[object Uint8Array]",R="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),X=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,ie=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,oe=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,ge=/^\[object .+?Constructor\]$/,fe=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",De="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="['’]",Oe="["+xe+"]",Ee="["+De+"]",_e="["+we+"]",Me="\\d+",Fe="["+$e+"]",Ie="["+Ce+"]",Ae="[^"+xe+De+Me+$e+Ce+Se+"]",Be="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",Le="\\u200d",Ne="(?:"+Ie+"|"+Ae+")",He="(?:"+Pe+"|"+Ae+")",We="(?:['’](?:d|ll|m|re|s|t|ve))?",Ye="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ve="(?:"+_e+"|"+Be+")?",Ue="["+ke+"]?",Ke=Ue+Ve+"(?:"+Le+"(?:"+[je,ze,Re].join("|")+")"+Ue+Ve+")*",Xe="(?:"+[Fe,ze,Re].join("|")+")"+Ke,qe="(?:"+[je+_e+"?",_e,ze,Re,Oe].join("|")+")",Ge=RegExp(Te,"g"),Ze=RegExp(_e,"g"),Qe=RegExp(Be+"(?="+Be+")|"+qe+Ke,"g"),Je=RegExp([Pe+"?"+Ie+"+"+We+"(?="+[Ee,Pe,"$"].join("|")+")",He+"+"+Ye+"(?="+[Ee,Pe+Ne,"$"].join("|")+")",Pe+"?"+Ne+"+"+We,Pe+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Xe].join("|"),"g"),et=RegExp("["+Le+xe+we+ke+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,rt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],nt=-1,it={};it[F]=it[I]=it[A]=it[B]=it[j]=it[z]=it[R]=it[P]=it[L]=!0,it[g]=it[f]=it[_]=it[m]=it[M]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[k]=it[D]=it[T]=it[E]=!1;var ot={};ot[g]=ot[f]=ot[_]=ot[M]=ot[m]=ot[b]=ot[F]=ot[I]=ot[A]=ot[B]=ot[j]=ot[w]=ot[$]=ot[C]=ot[k]=ot[D]=ot[T]=ot[O]=ot[z]=ot[R]=ot[P]=ot[L]=!0,ot[v]=ot[y]=ot[E]=!1;var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,lt=parseInt,ct="object"==typeof Vo&&Vo&&Vo.Object===Object&&Vo,dt="object"==typeof self&&self&&self.Object===Object&&self,ut=ct||dt||Function("return this")(),ht=FD&&!FD.nodeType&&FD,pt=ht&&MD&&!MD.nodeType&&MD,gt=pt&&pt.exports===ht,ft=gt&&ct.process,mt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||ft&&ft.binding&&ft.binding("util")}catch(e){}}(),bt=mt&&mt.isArrayBuffer,vt=mt&&mt.isDate,yt=mt&&mt.isMap,xt=mt&&mt.isRegExp,wt=mt&&mt.isSet,$t=mt&&mt.isTypedArray;function Ct(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function St(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Dt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Tt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function Et(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function _t(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function Mt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Ft(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function It(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function At(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Bt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var jt=Wt("length");function zt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Rt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):Rt(e,Nt,r)}function Lt(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Nt(e){return e!=e}function Ht(e,t){var r=null==e?0:e.length;return r?Ut(e,t)/r:u}function Wt(t){return function(r){return null==r?e:r[t]}}function Yt(t){return function(r){return null==t?e:t[r]}}function Vt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function Ut(t,r){for(var n,i=-1,o=t.length;++i<o;){var a=r(t[i]);a!==e&&(n=n===e?a:n+a)}return n}function Kt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Xt(e){return e?e.slice(0,ur(e)+1).replace(re,""):e}function qt(e){return function(t){return e(t)}}function Gt(e,t){return Mt(t,(function(t){return e[t]}))}function Zt(e,t){return e.has(t)}function Qt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function Jt(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var er=Yt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tr=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rr(e){return"\\"+at[e]}function nr(e){return et.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function or(e,t){return function(r){return e(t(r))}}function ar(e,t){for(var r=-1,i=e.length,o=0,a=[];++r<i;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[o++]=r)}return a}function sr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function cr(e){return nr(e)?function(e){for(var t=Qe.lastIndex=0;Qe.test(e);)++t;return t}(e):jt(e)}function dr(e){return nr(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function ur(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var hr=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ut:pr.defaults(ut.Object(),xe,pr.pick(ut,rt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,ke=xe.Math,De=xe.Object,Te=xe.RegExp,Oe=xe.String,Ee=xe.TypeError,_e=we.prototype,Me=Se.prototype,Fe=De.prototype,Ie=xe["__core-js_shared__"],Ae=Me.toString,Be=Fe.hasOwnProperty,je=0,ze=function(){var e=/[^.]+$/.exec(Ie&&Ie.keys&&Ie.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Fe.toString,Pe=Ae.call(De),Le=ut._,Ne=Te("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=He?He.allocUnsafe:e,Ue=or(De.getPrototypeOf,De),Ke=De.create,Xe=Fe.propertyIsEnumerable,qe=_e.splice,Qe=We?We.isConcatSpreadable:e,et=We?We.iterator:e,at=We?We.toStringTag:e,ct=function(){try{var e=ho(De,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ut.clearTimeout&&xe.clearTimeout,ht=$e&&$e.now!==ut.Date.now&&$e.now,pt=xe.setTimeout!==ut.setTimeout&&xe.setTimeout,ft=ke.ceil,mt=ke.floor,jt=De.getOwnPropertySymbols,Yt=He?He.isBuffer:e,gr=xe.isFinite,fr=_e.join,mr=or(De.keys,De),br=ke.max,vr=ke.min,yr=$e.now,xr=xe.parseInt,wr=ke.random,$r=_e.reverse,Cr=ho(xe,"DataView"),Sr=ho(xe,"Map"),kr=ho(xe,"Promise"),Dr=ho(xe,"Set"),Tr=ho(xe,"WeakMap"),Or=ho(De,"create"),Er=Tr&&new Tr,_r={},Mr=Ro(Cr),Fr=Ro(Sr),Ir=Ro(kr),Ar=Ro(Dr),Br=Ro(Tr),jr=We?We.prototype:e,zr=jr?jr.valueOf:e,Rr=jr?jr.toString:e;function Pr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Be.call(e,"__wrapped__"))return Po(e)}return new Hr(e)}var Lr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function Xr(e){var t=this.__data__=new Vr(e);this.size=t.size}function qr(e,t){var r=Ya(e),n=!r&&Wa(e),i=!r&&!n&&Xa(e),o=!r&&!n&&!i&&cs(e),a=r||n||i||o,s=a?Kt(e.length,Oe):[],l=s.length;for(var c in e)!t&&!Be.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Gr(t){var r=t.length;return r?t[Xn(0,r-1)]:e}function Zr(e,t){return Bo(Ei(e),sn(t,0,e.length))}function Qr(e){return Bo(Ei(e))}function Jr(t,r,n){(n!==e&&!La(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var i=t[r];Be.call(t,r)&&La(i,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function nn(e,t){return e&&_i(t,Ms(t),e)}function on(e,t,r){"__proto__"==t&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,i=r.length,o=we(i),a=null==t;++n<i;)o[n]=a?e:Ds(t,r[n]);return o}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,i,o,a){var s,l=1&r,c=2&r,d=4&r;if(n&&(s=o?n(t,i,o,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Ei(t,s)}else{var h=fo(t),p=h==y||h==x;if(Xa(t))return Ci(t,l);if(h==C||h==g||p&&!o){if(s=c||p?{}:bo(t),!l)return c?function(e,t){return _i(e,go(e),t)}(t,function(e,t){return e&&_i(t,Fs(t),e)}(s,t)):function(e,t){return _i(e,po(e),t)}(t,nn(s,t))}else{if(!ot[h])return o?t:{};s=function(e,t,r){var n,i=e.constructor;switch(t){case _:return Si(e);case m:case b:return new i(+e);case M:return function(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case F:case I:case A:case B:case j:case z:case R:case P:case L:return ki(e,r);case w:return new i;case $:case T:return new i(e);case k:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case D:return new i;case O:return n=e,zr?De(zr.call(n)):{}}}(t,h,l)}}a||(a=new Xr);var f=a.get(t);if(f)return f;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,i){s.set(i,ln(e,r,n,i,t,a))}));var v=u?e:(d?c?io:no:c?Fs:Ms)(t);return kt(v||t,(function(e,i){v&&(e=t[i=e]),en(s,i,ln(e,r,n,i,t,a))})),s}function cn(t,r,n){var i=n.length;if(null==t)return!i;for(t=De(t);i--;){var o=n[i],a=r[o],s=t[o];if(s===e&&!(o in t)||!a(s))return!1}return!0}function dn(r,n,i){if("function"!=typeof r)throw new Ee(t);return Mo((function(){r.apply(e,i)}),n)}function un(e,t,r,n){var i=-1,o=Et,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=Mt(t,qt(r))),n?(o=_t,a=!1):t.length>=200&&(o=Zt,a=!1,t=new Kr(t));e:for(;++i<s;){var d=e[i],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else o(t,u,n)||l.push(d)}return l}Pr.templateSettings={escape:X,evaluate:q,interpolate:G,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=Or?Or(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(Or){var i=n[t];return i===r?e:i}return Be.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return Or?r[t]!==e:Be.call(r,t)},Yr.prototype.set=function(t,n){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=Or&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():qe.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return co(this,e).get(e)},Ur.prototype.has=function(e){return co(this,e).has(e)},Ur.prototype.set=function(e,t){var r=co(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},Xr.prototype.clear=function(){this.__data__=new Vr,this.size=0},Xr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Xr.prototype.get=function(e){return this.__data__.get(e)},Xr.prototype.has=function(e){return this.__data__.has(e)},Xr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Ii(xn),pn=Ii(wn,!0);function gn(e,t){var r=!0;return hn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function fn(t,r,n){for(var i=-1,o=t.length;++i<o;){var a=t[i],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return hn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function bn(e,t,r,n,i){var o=-1,a=e.length;for(r||(r=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&r(s)?t>1?bn(s,t-1,r,n,i):Ft(i,s):n||(i[i.length]=s)}return i}var vn=Ai(),yn=Ai(!0);function xn(e,t){return e&&vn(e,t,Ms)}function wn(e,t){return e&&yn(e,t,Ms)}function $n(e,t){return Ot(t,(function(t){return Za(e[t])}))}function Cn(t,r){for(var n=0,i=(r=yi(r,t)).length;null!=t&&n<i;)t=t[zo(r[n++])];return n&&n==i?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:Ft(n,r(e))}function kn(t){return null==t?t===e?"[object Undefined]":"[object Null]":at&&at in De(t)?function(t){var r=Be.call(t,at),n=t[at];try{t[at]=e;var i=!0}catch(e){}var o=Re.call(t);return i&&(r?t[at]=n:delete t[at]),o}(t):function(e){return Re.call(e)}(t)}function Dn(e,t){return e>t}function Tn(e,t){return null!=e&&Be.call(e,t)}function On(e,t){return null!=e&&t in De(e)}function En(t,r,n){for(var i=n?_t:Et,o=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&r&&(u=Mt(u,qt(r))),c=vr(u.length,c),l[s]=!n&&(r||o>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var h=-1,p=l[0];e:for(;++h<o&&d.length<c;){var g=u[h],f=r?r(g):g;if(g=n||0!==g?g:0,!(p?Zt(p,f):i(d,f,n))){for(s=a;--s;){var m=l[s];if(!(m?Zt(m,f):i(t[s],f,n)))continue e}p&&p.push(f),d.push(g)}}return d}function _n(t,r,n){var i=null==(t=Oo(t,r=yi(r,t)))?t:t[zo(Go(r))];return null==i?e:Ct(i,t,n)}function Mn(e){return ts(e)&&kn(e)==g}function Fn(t,r,n,i,o){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,i,o,a){var s=Ya(t),l=Ya(r),c=s?f:fo(t),d=l?f:fo(r),u=(c=c==g?C:c)==C,h=(d=d==g?C:d)==C,p=c==d;if(p&&Xa(t)){if(!Xa(r))return!1;s=!0,u=!1}if(p&&!u)return a||(a=new Xr),s||cs(t)?to(t,r,n,i,o,a):function(e,t,r,n,i,o,a){switch(r){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!o(new Ye(e),new Ye(t)));case m:case b:case $:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case k:case T:return e==t+"";case w:var s=ir;case D:var l=1&n;if(s||(s=sr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=to(s(e),s(t),n,i,o,a);return a.delete(e),d;case O:if(zr)return zr.call(e)==zr.call(t)}return!1}(t,r,c,n,i,o,a);if(!(1&n)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,E=x?r.value():r;return a||(a=new Xr),o(S,E,n,i,a)}}return!!p&&(a||(a=new Xr),function(t,r,n,i,o,a){var s=1&n,l=no(t),c=l.length,d=no(r),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var p=l[h];if(!(s?p in r:Be.call(r,p)))return!1}var g=a.get(t),f=a.get(r);if(g&&f)return g==r&&f==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<c;){var v=t[p=l[h]],y=r[p];if(i)var x=s?i(y,v,p,r,t,a):i(v,y,p,t,r,a);if(!(x===e?v===y||o(v,y,n,i,a):x)){m=!1;break}b||(b="constructor"==p)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,i,o,a))}(t,r,n,i,Fn,o))}function In(t,r,n,i){var o=n.length,a=o,s=!i;if(null==t)return!a;for(t=De(t);o--;){var l=n[o];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++o<a;){var c=(l=n[o])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new Xr;if(i)var p=i(d,u,c,t,r,h);if(!(p===e?Fn(u,d,3,i,h):p))return!1}}return!0}function An(e){return!(!es(e)||(t=e,ze&&ze in t))&&(Za(e)?Ne:ge).test(Ro(e));var t}function Bn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Ln(e):hl(e)}function jn(e){if(!So(e))return mr(e);var t=[];for(var r in De(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function zn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in De(e))t.push(r);return t}(e);var t=So(e),r=[];for(var n in e)("constructor"!=n||!t&&Be.call(e,n))&&r.push(n);return r}function Rn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return hn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Ln(e){var t=uo(e);return 1==t.length&&t[0][2]?Do(t[0][0],t[0][1]):function(r){return r===e||In(r,e,t)}}function Nn(t,r){return wo(t)&&ko(r)?Do(zo(t),r):function(n){var i=Ds(n,t);return i===e&&i===r?Ts(n,t):Fn(r,i,3)}}function Hn(t,r,n,i,o){t!==r&&vn(r,(function(a,s){if(o||(o=new Xr),es(a))!function(t,r,n,i,o,a,s){var l=Eo(t,n),c=Eo(r,n),d=s.get(c);if(d)Jr(t,n,d);else{var u=a?a(l,c,n+"",t,r,s):e,h=u===e;if(h){var p=Ya(c),g=!p&&Xa(c),f=!p&&!g&&cs(c);u=c,p||g||f?Ya(l)?u=l:Ka(l)?u=Ei(l):g?(h=!1,u=Ci(c,!0)):f?(h=!1,u=ki(c,!0)):u=[]:is(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):h=!1}h&&(s.set(c,u),o(u,c,i,a,s),s.delete(c)),Jr(t,n,u)}}(t,r,s,n,Hn,i,o);else{var l=i?i(Eo(t,s),a,s+"",t,r,o):e;l===e&&(l=a),Jr(t,s,l)}}),Fs)}function Wn(t,r){var n=t.length;if(n)return yo(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?Mt(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Mt(t,qt(lo()));var i=Pn(e,(function(e,r,i){var o=Mt(t,(function(t){return t(e)}));return{criteria:o,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;++n<a;){var l=Di(i[n],o[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(o,yi(a,e),s)}return o}function Un(e,t,r,n){var i=n?Lt:Pt,o=-1,a=t.length,s=e;for(e===t&&(t=Ei(t)),r&&(s=Mt(e,qt(r)));++o<a;)for(var l=0,c=t[o],d=r?r(c):c;(l=i(s,d,l,n))>-1;)s!==e&&qe.call(s,l,1),qe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;yo(i)?qe.call(e,i,1):ui(e,i)}}return e}function Xn(e,t){return e+mt(wr()*(t-e+1))}function qn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Fo(To(e,t,nl),e+"")}function Zn(e){return Gr(Ls(e))}function Qn(e,t){var r=Ls(e);return Bo(r,sn(t,0,r.length))}function Jn(t,r,n,i){if(!es(t))return t;for(var o=-1,a=(r=yi(r,t)).length,s=a-1,l=t;null!=l&&++o<a;){var c=zo(r[o]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=s){var u=l[c];(d=i?i(u,c,l):e)===e&&(d=es(u)?u:yo(r[o+1])?[]:{})}en(l,c,d),l=l[c]}return t}var ei=Er?function(e,t){return Er.set(e,t),e}:nl,ti=ct?function(e,t){return ct(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ri(e){return Bo(Ls(e))}function ni(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=we(i);++n<i;)o[n]=e[n+t];return o}function ii(e,t){var r;return hn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function oi(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ai(e,t,nl,r)}function ai(t,r,n,i){var o=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),d=r===e;o<a;){var u=mt((o+a)/2),h=n(t[u]),p=h!==e,g=null===h,f=h==h,m=ls(h);if(s)var b=i||f;else b=d?f&&(i||p):l?f&&p&&(i||!g):c?f&&p&&!g&&(i||!m):!g&&!m&&(i?h<=r:h<r);b?o=u+1:a=u}return vr(a,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?u:+e}function ci(e){if("string"==typeof e)return e;if(Ya(e))return Mt(e,ci)+"";if(ls(e))return Rr?Rr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,r){var n=-1,i=Et,o=e.length,a=!0,s=[],l=s;if(r)a=!1,i=_t;else if(o>=200){var c=t?null:qi(e);if(c)return sr(c);a=!1,i=Zt,l=new Kr}else l=t?[]:s;e:for(;++n<o;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Oo(e,t=yi(t,e)))||delete e[zo(Go(t))]}function hi(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function pi(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ni(e,n?0:o,n?o+1:i):ni(e,n?o+1:0,n?i:o)}function gi(e,t){var r=e;return r instanceof Wr&&(r=r.value()),It(t,(function(e,t){return t.func.apply(t.thisArg,Ft([e],t.args))}),r)}function fi(e,t,r){var n=e.length;if(n<2)return n?di(e[0]):[];for(var i=-1,o=we(n);++i<n;)for(var a=e[i],s=-1;++s<n;)s!=i&&(o[i]=un(o[i]||a,e[s],t,r));return di(bn(o,1),t,r)}function mi(t,r,n){for(var i=-1,o=t.length,a=r.length,s={};++i<o;){var l=i<a?r[i]:e;n(s,t[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:nl}function yi(e,t){return Ya(e)?e:wo(e,t)?[e]:jo(vs(e))}var xi=Gn;function wi(t,r,n){var i=t.length;return n=n===e?i:n,!r&&n>=i?t:ni(t,r,n)}var $i=dt||function(e){return ut.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Si(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ki(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Di(t,r){if(t!==r){var n=t!==e,i=null===t,o=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,d=ls(r);if(!l&&!d&&!a&&t>r||a&&s&&c&&!l&&!d||i&&s&&c||!n&&c||!o)return 1;if(!i&&!a&&!d&&t<r||d&&n&&o&&!i&&!a||l&&n&&o||!s&&o||!c)return-1}return 0}function Ti(e,t,r,n){for(var i=-1,o=e.length,a=r.length,s=-1,l=t.length,c=br(o-a,0),d=we(l+c),u=!n;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[r[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Oi(e,t,r,n){for(var i=-1,o=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(o-s,0),u=we(d+c),h=!n;++i<d;)u[i]=e[i];for(var p=i;++l<c;)u[p+l]=t[l];for(;++a<s;)(h||i<o)&&(u[p+r[a]]=e[i++]);return u}function Ei(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function _i(t,r,n,i){var o=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=i?i(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),o?on(n,l,c):en(n,l,c)}return n}function Mi(e,t){return function(r,n){var i=Ya(r)?St:rn,o=t?t():{};return i(r,e,lo(n,2),o)}}function Fi(t){return Gn((function(r,n){var i=-1,o=n.length,a=o>1?n[o-1]:e,s=o>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(o--,a):e,s&&xo(n[0],n[1],s)&&(a=o<3?e:a,o=1),r=De(r);++i<o;){var l=n[i];l&&t(r,l,i,a)}return r}))}function Ii(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=De(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function Ai(e){return function(t,r,n){for(var i=-1,o=De(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}}function Bi(t){return function(r){var n=nr(r=vs(r))?dr(r):e,i=n?n[0]:r.charAt(0),o=n?wi(n,1).join(""):r.slice(1);return i[t]()+o}}function ji(e){return function(t){return It(Zs(Ws(t).replace(Ge,"")),e,"")}}function zi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Ri(t){return function(r,n,i){var o=De(r);if(!Ua(r)){var a=lo(n,3);r=Ms(r),n=function(e){return a(o[e],e,o)}}var s=t(r,n,i);return s>-1?o[a?r[s]:s]:e}}function Pi(r){return ro((function(n){var i=n.length,o=i,a=Hr.prototype.thru;for(r&&n.reverse();o--;){var s=n[o];if("function"!=typeof s)throw new Ee(t);if(a&&!l&&"wrapper"==ao(s))var l=new Hr([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=n[o]),d="wrapper"==c?oo(s):e;l=d&&$o(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&$o(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,o=i?n[r].apply(this,e):t;++r<i;)o=n[r].call(this,o);return o}}))}function Li(t,r,n,i,o,a,l,c,d,u){var h=r&s,p=1&r,g=2&r,f=24&r,m=512&r,b=g?e:zi(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(f)var w=so(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(i&&(y=Ti(y,i,o,f)),a&&(y=Oi(y,a,l,f)),v-=$,f&&v<u){var C=ar(y,w);return Ki(t,r,Li,s.placeholder,n,y,C,c,d,u-v)}var S=p?n:this,k=g?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,i=vr(r.length,n),o=Ei(t);i--;){var a=r[i];t[i]=yo(a,n)?o[a]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ut&&this instanceof s&&(k=b||zi(k)),k.apply(S,y)}}function Ni(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function Hi(t,r){return function(n,i){var o;if(n===e&&i===e)return r;if(n!==e&&(o=n),i!==e){if(o===e)return i;"string"==typeof n||"string"==typeof i?(n=ci(n),i=ci(i)):(n=li(n),i=li(i)),o=t(n,i)}return o}}function Wi(e){return ro((function(t){return t=Mt(t,qt(lo())),Gn((function(r){var n=this;return e(t,(function(e){return Ct(e,n,r)}))}))}))}function Yi(t,r){var n=(r=r===e?" ":ci(r)).length;if(n<2)return n?qn(r,t):r;var i=qn(r,ft(t/cr(r)));return nr(r)?wi(dr(i),0,t).join(""):i.slice(0,t)}function Vi(t){return function(r,n,i){return i&&"number"!=typeof i&&xo(r,n,i)&&(n=i=e),r=ps(r),n===e?(n=r,r=0):n=ps(n),function(e,t,r,n){for(var i=-1,o=br(ft((t-e)/(r||1)),0),a=we(o);o--;)a[n?o:++i]=e,e+=r;return a}(r,n,i=i===e?r<n?1:-1:ps(i),t)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Ki(t,r,n,i,s,l,c,d,u,h){var p=8&r;r|=p?o:a,4&(r&=~(p?a:o))||(r&=-4);var g=[t,r,s,p?l:e,p?c:e,p?e:l,p?e:c,d,u,h],f=n.apply(e,g);return $o(t)&&_o(f,g),f.placeholder=i,Io(f,t,r)}function Xi(e){var t=ke[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(gs(r),292))&&gr(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var qi=Dr&&1/sr(new Dr([,-0]))[1]==c?function(e){return new Dr(e)}:ll;function Gi(e){return function(t){var r=fo(t);return r==w?ir(t):r==D?lr(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(r,c,d,u,h,p,g,f){var m=2&c;if(!m&&"function"!=typeof r)throw new Ee(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),g=g===e?g:br(gs(g),0),f=f===e?f:gs(f),b-=h?h.length:0,c&a){var v=u,y=h;u=h=e}var x=m?e:oo(r),w=[r,c,d,u,h,v,y,p,g,f];if(x&&function(e,t){var r=e[1],i=t[1],o=r|i,a=o<131,c=i==s&&8==r||i==s&&r==l&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&i&&(e[2]=t[2],o|=1&r?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Ti(u,d,t[4]):d,e[4]=u?ar(e[3],n):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Oi(u,d,t[6]):d,e[6]=u?ar(e[5],n):t[6]),(d=t[7])&&(e[7]=d),i&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o}(w,x),r=w[0],c=w[1],d=w[2],u=w[3],h=w[4],!(f=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==i?function(t,r,n){var i=zi(t);return function o(){for(var a=arguments.length,s=we(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:ar(s,c);return(a-=d.length)<n?Ki(t,r,Li,o.placeholder,e,s,d,e,e,n-a):Ct(this&&this!==ut&&this instanceof o?i:t,this,s)}}(r,c,f):c!=o&&33!=c||h.length?Li.apply(e,w):function(e,t,r,n){var i=1&t,o=zi(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=we(c+s),u=this&&this!==ut&&this instanceof t?o:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return Ct(u,i?r:this,d)}}(r,c,d,u);else var $=function(e,t,r){var n=1&t,i=zi(e);return function t(){return(this&&this!==ut&&this instanceof t?i:e).apply(n?r:this,arguments)}}(r,c,d);return Io((x?ei:_o)($,w),r,c)}function Qi(t,r,n,i){return t===e||La(t,Fe[n])&&!Be.call(i,n)?r:t}function Ji(t,r,n,i,o,a){return es(t)&&es(r)&&(a.set(r,t),Hn(t,r,e,Ji,a),a.delete(r)),t}function eo(t){return is(t)?e:t}function to(t,r,n,i,o,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(r);if(d&&u)return d==r&&u==t;var h=-1,p=!0,g=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++h<l;){var f=t[h],m=r[h];if(i)var b=s?i(m,f,h,r,t,a):i(f,m,h,t,r,a);if(b!==e){if(b)continue;p=!1;break}if(g){if(!Bt(r,(function(e,t){if(!Zt(g,t)&&(f===e||o(f,e,n,i,a)))return g.push(t)}))){p=!1;break}}else if(f!==m&&!o(f,m,n,i,a)){p=!1;break}}return a.delete(t),a.delete(r),p}function ro(t){return Fo(To(t,e,Vo),t+"")}function no(e){return Sn(e,Ms,po)}function io(e){return Sn(e,Fs,go)}var oo=Er?function(e){return Er.get(e)}:ll;function ao(e){for(var t=e.name+"",r=_r[t],n=Be.call(_r,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Be.call(Pr,"placeholder")?Pr:e).placeholder}function lo(){var e=Pr.iteratee||il;return e=e===il?Bn:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Ms(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,ko(i)]}return t}function ho(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var po=jt?function(e){return null==e?[]:(e=De(e),Ot(jt(e),(function(t){return Xe.call(e,t)})))}:fl,go=jt?function(e){for(var t=[];e;)Ft(t,po(e)),e=Ue(e);return t}:fl,fo=kn;function mo(e,t,r){for(var n=-1,i=(t=yi(t,e)).length,o=!1;++n<i;){var a=zo(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Ya(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Lr(Ue(e))}function vo(e){return Ya(e)||Wa(e)||!!(Qe&&e&&e[Qe])}function yo(e,t){var r=typeof e;return!!(t=null==t?d:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yo(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wo(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||Q.test(e)||!Z.test(e)||null!=t&&e in De(t)}function $o(e){var t=ao(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=oo(r);return!!n&&e===n[0]}(Cr&&fo(new Cr(new ArrayBuffer(1)))!=M||Sr&&fo(new Sr)!=w||kr&&fo(kr.resolve())!=S||Dr&&fo(new Dr)!=D||Tr&&fo(new Tr)!=E)&&(fo=function(t){var r=kn(t),n=r==C?t.constructor:e,i=n?Ro(n):"";if(i)switch(i){case Mr:return M;case Fr:return w;case Ir:return S;case Ar:return D;case Br:return E}return r});var Co=Ie?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Fe)}function ko(e){return e==e&&!es(e)}function Do(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in De(n))}}function To(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,i=-1,o=br(e.length-r,0),a=we(o);++i<o;)a[i]=e[r+i];i=-1;for(var s=we(r+1);++i<r;)s[i]=e[i];return s[r]=n(a),Ct(t,this,s)}}function Oo(e,t){return t.length<2?e:Cn(e,ni(t,0,-1))}function Eo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var _o=Ao(ei),Mo=pt||function(e,t){return ut.setTimeout(e,t)},Fo=Ao(ti);function Io(e,t,r){var n=t+"";return Fo(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ie,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(p,(function(r){var n="_."+r[0];t&r[1]&&!Et(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(oe);return t?t[1].split(ae):[]}(n),r)))}function Ao(t){var r=0,n=0;return function(){var i=yr(),o=16-(i-n);if(n=i,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Bo(t,r){var n=-1,i=t.length,o=i-1;for(r=r===e?i:r;++n<r;){var a=Xn(n,o),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var jo=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,i){t.push(n?i.replace(ce,"$1"):r||e)})),t}));function zo(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ro(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Ei(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),No=Gn((function(t,r){var n=Go(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),lo(n,2)):[]})),Ho=Gn((function(t,r){var n=Go(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wo(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:gs(r);return i<0&&(i=br(n+i,0)),Rt(e,lo(t,3),i)}function Yo(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var o=i-1;return n!==e&&(o=gs(n),o=n<0?br(i+o,0):vr(o,i-1)),Rt(t,lo(r,3),o,!0)}function Vo(e){return null!=e&&e.length?bn(e,1):[]}function Uo(t){return t&&t.length?t[0]:e}var Ko=Gn((function(e){var t=Mt(e,bi);return t.length&&t[0]===e[0]?En(t):[]})),Xo=Gn((function(t){var r=Go(t),n=Mt(t,bi);return r===Go(n)?r=e:n.pop(),n.length&&n[0]===t[0]?En(n,lo(r,2)):[]})),qo=Gn((function(t){var r=Go(t),n=Mt(t,bi);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?En(n,e,r):[]}));function Go(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Zo=Gn(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Jo=ro((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,Mt(t,(function(e){return yo(e,r)?+e:e})).sort(Di)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return di(bn(e,1,Ka,!0))})),ra=Gn((function(t){var r=Go(t);return Ka(r)&&(r=e),di(bn(t,1,Ka,!0),lo(r,2))})),na=Gn((function(t){var r=Go(t);return r="function"==typeof r?r:e,di(bn(t,1,Ka,!0),e,r)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),Kt(t,(function(t){return Mt(e,Wt(t))}))}function oa(t,r){if(!t||!t.length)return[];var n=ia(t);return null==r?n:Mt(n,(function(t){return Ct(r,e,t)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return fi(Ot(e,Ka))})),la=Gn((function(t){var r=Go(t);return Ka(r)&&(r=e),fi(Ot(t,Ka),lo(r,2))})),ca=Gn((function(t){var r=Go(t);return r="function"==typeof r?r:e,fi(Ot(t,Ka),e,r)})),da=Gn(ia),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,oa(t,n)}));function ha(e){var t=Pr(e);return t.__chain__=!0,t}function pa(e,t){return t(e)}var ga=ro((function(t){var r=t.length,n=r?t[0]:0,i=this.__wrapped__,o=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&i instanceof Wr&&yo(n)?((i=i.slice(n,+n+(r?1:0))).__actions__.push({func:pa,args:[o],thisArg:e}),new Hr(i,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(o)})),fa=Mi((function(e,t,r){Be.call(e,r)?++e[r]:on(e,r,1)})),ma=Ri(Wo),ba=Ri(Yo);function va(e,t){return(Ya(e)?kt:hn)(e,lo(t,3))}function ya(e,t){return(Ya(e)?Dt:pn)(e,lo(t,3))}var xa=Mi((function(e,t,r){Be.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,i="function"==typeof t,o=Ua(e)?we(e.length):[];return hn(e,(function(e){o[++n]=i?Ct(t,e,r):_n(e,t,r)})),o})),$a=Mi((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?Mt:Pn)(e,lo(t,3))}var Sa=Mi((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),ka=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xo(e,t[0],t[1])?t=[]:r>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),Da=ht||function(){return ut.Date.now()};function Ta(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Zi(t,s,e,e,e,e,r)}function Oa(r,n){var i;if("function"!=typeof n)throw new Ee(t);return r=gs(r),function(){return--r>0&&(i=n.apply(this,arguments)),r<=1&&(n=e),i}}var Ea=Gn((function(e,t,r){var n=1;if(r.length){var i=ar(r,so(Ea));n|=o}return Zi(e,n,t,r,i)})),_a=Gn((function(e,t,r){var n=3;if(r.length){var i=ar(r,so(_a));n|=o}return Zi(t,n,e,r,i)}));function Ma(r,n,i){var o,a,s,l,c,d,u=0,h=!1,p=!1,g=!0;if("function"!=typeof r)throw new Ee(t);function f(t){var n=o,i=a;return o=a=e,u=t,l=r.apply(i,n)}function m(t){var r=t-d;return d===e||r>=n||r<0||p&&t-u>=s}function b(){var e=Da();if(m(e))return v(e);c=Mo(b,function(e){var t=n-(e-d);return p?vr(t,s-(e-u)):t}(e))}function v(t){return c=e,g&&o?f(t):(o=a=e,l)}function y(){var t=Da(),r=m(t);if(o=arguments,a=this,d=t,r){if(c===e)return function(e){return u=e,c=Mo(b,n),h?f(e):l}(d);if(p)return $i(c),c=Mo(b,n),f(d)}return c===e&&(c=Mo(b,n)),l}return n=ms(n)||0,es(i)&&(h=!!i.leading,s=(p="maxWait"in i)?br(ms(i.maxWait)||0,n):s,g="trailing"in i?!!i.trailing:g),y.cancel=function(){c!==e&&$i(c),u=0,o=d=a=c=e},y.flush=function(){return c===e?l:v(Da())},y}var Fa=Gn((function(e,t){return dn(e,1,t)})),Ia=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Ee(t);var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return n.cache=o.set(i,a)||o,a};return n.cache=new(Aa.Cache||Ur),n}function Ba(e){if("function"!=typeof e)throw new Ee(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var ja=xi((function(e,t){var r=(t=1==t.length&&Ya(t[0])?Mt(t[0],qt(lo())):Mt(bn(t,1),qt(lo()))).length;return Gn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return Ct(e,this,n)}))})),za=Gn((function(t,r){var n=ar(r,so(za));return Zi(t,o,e,r,n)})),Ra=Gn((function(t,r){var n=ar(r,so(Ra));return Zi(t,a,e,r,n)})),Pa=ro((function(t,r){return Zi(t,l,e,e,e,r)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(Dn),Ha=Ui((function(e,t){return e>=t})),Wa=Mn(function(){return arguments}())?Mn:function(e){return ts(e)&&Be.call(e,"callee")&&!Xe.call(e,"callee")},Ya=we.isArray,Va=bt?qt(bt):function(e){return ts(e)&&kn(e)==_};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var Xa=Yt||ml,qa=vt?qt(vt):function(e){return ts(e)&&kn(e)==b};function Ga(e){if(!ts(e))return!1;var t=kn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=kn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==gs(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=yt?qt(yt):function(e){return ts(e)&&fo(e)==w};function ns(e){return"number"==typeof e||ts(e)&&kn(e)==$}function is(e){if(!ts(e)||kn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Pe}var os=xt?qt(xt):function(e){return ts(e)&&kn(e)==k},as=wt?qt(wt):function(e){return ts(e)&&fo(e)==D};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&kn(e)==T}function ls(e){return"symbol"==typeof e||ts(e)&&kn(e)==O}var cs=$t?qt($t):function(e){return ts(e)&&Ja(e.length)&&!!it[kn(e)]},ds=Ui(Rn),us=Ui((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?dr(e):Ei(e);if(et&&e[et])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[et]());var t=fo(e);return(t==w?ir:t==D?sr:Ls)(e)}function ps(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function gs(e){var t=ps(e),r=t%1;return t==t?r?t-r:t:0}function fs(e){return e?sn(gs(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xt(e);var r=pe.test(e);return r||fe.test(e)?lt(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return _i(e,Fs(e))}function vs(e){return null==e?"":ci(e)}var ys=Fi((function(e,t){if(So(t)||Ua(t))_i(t,Ms(t),e);else for(var r in t)Be.call(t,r)&&en(e,r,t[r])})),xs=Fi((function(e,t){_i(t,Fs(t),e)})),ws=Fi((function(e,t,r,n){_i(t,Fs(t),e,n)})),$s=Fi((function(e,t,r,n){_i(t,Ms(t),e,n)})),Cs=ro(an),Ss=Gn((function(t,r){t=De(t);var n=-1,i=r.length,o=i>2?r[2]:e;for(o&&xo(r[0],r[1],o)&&(i=1);++n<i;)for(var a=r[n],s=Fs(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||La(u,Fe[d])&&!Be.call(t,d))&&(t[d]=a[d])}return t})),ks=Gn((function(t){return t.push(e,Ji),Ct(As,e,t)}));function Ds(t,r,n){var i=null==t?e:Cn(t,r);return i===e?n:i}function Ts(e,t){return null!=e&&mo(e,t,On)}var Os=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=r}),el(nl)),Es=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),lo),_s=Gn(_n);function Ms(e){return Ua(e)?qr(e):jn(e)}function Fs(e){return Ua(e)?qr(e,!0):zn(e)}var Is=Fi((function(e,t,r){Hn(e,t,r)})),As=Fi((function(e,t,r,n){Hn(e,t,r,n)})),Bs=ro((function(e,t){var r={};if(null==e)return r;var n=!1;t=Mt(t,(function(t){return t=yi(t,e),n||(n=t.length>1),t})),_i(e,io(e),r),n&&(r=ln(r,7,eo));for(var i=t.length;i--;)ui(r,t[i]);return r})),js=ro((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Ts(e,r)}))}(e,t)}));function zs(e,t){if(null==e)return{};var r=Mt(io(e),(function(e){return[e]}));return t=lo(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Rs=Gi(Ms),Ps=Gi(Fs);function Ls(e){return null==e?[]:Gt(e,Ms(e))}var Ns=ji((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,er).replace(Ze,"")}var Ys=ji((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=ji((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Bi("toLowerCase"),Ks=ji((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Xs=ji((function(e,t,r){return e+(r?" ":"")+Gs(t)})),qs=ji((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=Bi("toUpperCase");function Zs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return tt.test(e)}(t)?function(e){return e.match(Je)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Qs=Gn((function(t,r){try{return Ct(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ro((function(e,t){return kt(t,(function(t){t=zo(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),rl=Pi(!0);function nl(e){return e}function il(e){return Bn("function"==typeof e?e:ln(e,1))}var ol=Gn((function(e,t){return function(r){return _n(r,e,t)}})),al=Gn((function(e,t){return function(r){return _n(e,r,t)}}));function sl(e,t,r){var n=Ms(t),i=$n(t,n);null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=$n(t,Ms(t)));var o=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return kt(i,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=Ei(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Ft([this.value()],arguments))})})),e}function ll(){}var cl=Wi(Mt),dl=Wi(Tt),ul=Wi(Bt);function hl(e){return wo(e)?Wt(zo(e)):function(e){return function(t){return Cn(t,e)}}(e)}var pl=Vi(),gl=Vi(!0);function fl(){return[]}function ml(){return!1}var bl,vl=Hi((function(e,t){return e+t}),0),yl=Xi("ceil"),xl=Hi((function(e,t){return e/t}),1),wl=Xi("floor"),$l=Hi((function(e,t){return e*t}),1),Cl=Xi("round"),Sl=Hi((function(e,t){return e-t}),0);return Pr.after=function(e,r){if("function"!=typeof r)throw new Ee(t);return e=gs(e),function(){if(--e<1)return r.apply(this,arguments)}},Pr.ary=Ta,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Oa,Pr.bind=Ea,Pr.bindAll=Js,Pr.bindKey=_a,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Pr.chain=ha,Pr.chunk=function(t,r,n){r=(n?xo(t,r,n):r===e)?1:br(gs(r),0);var i=null==t?0:t.length;if(!i||r<1)return[];for(var o=0,a=0,s=we(ft(i/r));o<i;)s[a++]=ni(t,o,o+=r);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Ft(Ya(r)?Ei(r):[r],bn(t,1))},Pr.cond=function(e){var r=null==e?0:e.length,n=lo();return e=r?Mt(e,(function(e){if("function"!=typeof e[1])throw new Ee(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var i=e[n];if(Ct(i[0],this,t))return Ct(i[1],this,t)}}))},Pr.conforms=function(e){return function(e){var t=Ms(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=fa,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function t(r,n,i){var o=Zi(r,8,e,e,e,e,e,n=i?e:n);return o.placeholder=t.placeholder,o},Pr.curryRight=function t(r,n,o){var a=Zi(r,i,e,e,e,e,e,n=o?e:n);return a.placeholder=t.placeholder,a},Pr.debounce=Ma,Pr.defaults=Ss,Pr.defaultsDeep=ks,Pr.defer=Fa,Pr.delay=Ia,Pr.difference=Lo,Pr.differenceBy=No,Pr.differenceWith=Ho,Pr.drop=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,(r=n||r===e?1:gs(r))<0?0:r,i):[]},Pr.dropRight=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,0,(r=i-(r=n||r===e?1:gs(r)))<0?0:r):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?pi(e,lo(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?pi(e,lo(t,3),!0):[]},Pr.fill=function(t,r,n,i){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xo(t,r,n)&&(n=0,i=o),function(t,r,n,i){var o=t.length;for((n=gs(n))<0&&(n=-n>o?0:o+n),(i=i===e||i>o?o:gs(i))<0&&(i+=o),i=n>i?0:fs(i);n<i;)t[n++]=r;return t}(t,r,n,i)):[]},Pr.filter=function(e,t){return(Ya(e)?Ot:mn)(e,lo(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Pr.flatMapDepth=function(t,r,n){return n=n===e?1:gs(n),bn(Ca(t,r),n)},Pr.flatten=Vo,Pr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Pr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:gs(r)):[]},Pr.flip=function(e){return Zi(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Ms(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Fs(e))},Pr.groupBy=xa,Pr.initial=function(e){return null!=e&&e.length?ni(e,0,-1):[]},Pr.intersection=Ko,Pr.intersectionBy=Xo,Pr.intersectionWith=qo,Pr.invert=Os,Pr.invertBy=Es,Pr.invokeMap=wa,Pr.iteratee=il,Pr.keyBy=$a,Pr.keys=Ms,Pr.keysIn=Fs,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,t(e,n,i),e)})),r},Pr.mapValues=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,n,t(e,n,i))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Aa,Pr.merge=Is,Pr.mergeWith=As,Pr.method=ol,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=Ba,Pr.nthArg=function(e){return e=gs(e),Gn((function(t){return Wn(t,e)}))},Pr.omit=Bs,Pr.omitBy=function(e,t){return zs(e,Ba(lo(t)))},Pr.once=function(e){return Oa(2,e)},Pr.orderBy=function(t,r,n,i){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=i?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Pr.over=cl,Pr.overArgs=ja,Pr.overEvery=dl,Pr.overSome=ul,Pr.partial=za,Pr.partialRight=Ra,Pr.partition=Sa,Pr.pick=js,Pr.pickBy=zs,Pr.property=hl,Pr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Pr.pull=Zo,Pr.pullAll=Qo,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,lo(r,2)):e},Pr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Pr.pullAt=Jo,Pr.range=pl,Pr.rangeRight=gl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Ya(e)?Ot:mn)(e,Ba(lo(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=lo(t,3);++n<o;){var a=e[n];t(a,n,e)&&(r.push(a),i.push(n))}return Kn(e,i),r},Pr.rest=function(r,n){if("function"!=typeof r)throw new Ee(t);return Gn(r,n=n===e?n:gs(n))},Pr.reverse=ea,Pr.sampleSize=function(t,r,n){return r=(n?xo(t,r,n):r===e)?1:gs(r),(Ya(t)?Zr:Qn)(t,r)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:Jn(t,r,n,i)},Pr.shuffle=function(e){return(Ya(e)?Qr:ri)(e)},Pr.slice=function(t,r,n){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xo(t,r,n)?(r=0,n=i):(r=null==r?0:gs(r),n=n===e?i:gs(n)),ni(t,r,n)):[]},Pr.sortBy=ka,Pr.sortedUniq=function(e){return e&&e.length?si(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Pr.split=function(t,r,n){return n&&"number"!=typeof n&&xo(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!os(r))&&!(r=ci(r))&&nr(t)?wi(dr(t),0,n):t.split(r,n):[]},Pr.spread=function(e,r){if("function"!=typeof e)throw new Ee(t);return r=null==r?0:br(gs(r),0),Gn((function(t){var n=t[r],i=wi(t,0,r);return n&&Ft(i,n),Ct(e,this,i)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?ni(e,1,t):[]},Pr.take=function(t,r,n){return t&&t.length?ni(t,0,(r=n||r===e?1:gs(r))<0?0:r):[]},Pr.takeRight=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,(r=i-(r=n||r===e?1:gs(r)))<0?0:r,i):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?pi(e,lo(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?pi(e,lo(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,r,n){var i=!0,o=!0;if("function"!=typeof e)throw new Ee(t);return es(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ma(e,r,{leading:i,maxWait:r,trailing:o})},Pr.thru=pa,Pr.toArray=hs,Pr.toPairs=Rs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Ya(e)?Mt(e,zo):ls(e)?[e]:Ei(jo(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Ya(e),i=n||Xa(e)||cs(e);if(t=lo(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:es(e)&&Za(o)?Lr(Ue(e)):{}}return(i?kt:xn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Pr.unary=function(e){return Ta(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?di(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Pr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?di(t,e,r):[]},Pr.unset=function(e,t){return null==e||ui(e,t)},Pr.unzip=ia,Pr.unzipWith=oa,Pr.update=function(e,t,r){return null==e?e:hi(e,t,vi(r))},Pr.updateWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:hi(t,r,vi(n),i)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Gt(e,Fs(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return za(vi(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=da,Pr.zipObject=function(e,t){return mi(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=Rs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=vl,Pr.attempt=Qs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=yl,Pr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Pr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Ms(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=xl,Pr.endsWith=function(t,r,n){t=vs(t),r=ci(r);var i=t.length,o=n=n===e?i:sn(gs(n),0,i);return(n-=r.length)>=0&&t.slice(n,o)==r},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,tr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Pr.every=function(t,r,n){var i=Ya(t)?Tt:gn;return n&&xo(t,r,n)&&(r=e),i(t,lo(r,3))},Pr.find=ma,Pr.findIndex=Wo,Pr.findKey=function(e,t){return zt(e,lo(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Yo,Pr.findLastKey=function(e,t){return zt(e,lo(t,3),wn)},Pr.floor=wl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,lo(t,3),Fs)},Pr.forInRight=function(e,t){return null==e?e:yn(e,lo(t,3),Fs)},Pr.forOwn=function(e,t){return e&&xn(e,lo(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,lo(t,3))},Pr.get=Ds,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mo(e,t,Tn)},Pr.hasIn=Ts,Pr.head=Uo,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?gs(r):0;var i=e.length;return r<0&&(r=br(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Pt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:gs(r);return i<0&&(i=br(n+i,0)),Pt(e,t,i)},Pr.inRange=function(t,r,n){return r=ps(r),n===e?(n=r,r=0):n=ps(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Pr.invoke=_s,Pr.isArguments=Wa,Pr.isArray=Ya,Pr.isArrayBuffer=Va,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kn(e)==m},Pr.isBuffer=Xa,Pr.isDate=qa,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||Xa(e)||cs(e)||Wa(e)))return!e.length;var t=fo(e);if(t==w||t==D)return!e.size;if(So(e))return!jn(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return Fn(e,t)},Pr.isEqualWith=function(t,r,n){var i=(n="function"==typeof n?n:e)?n(t,r):e;return i===e?Fn(t,r,e,n):!!i},Pr.isError=Ga,Pr.isFinite=function(e){return"number"==typeof e&&gr(e)},Pr.isFunction=Za,Pr.isInteger=Qa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||In(e,t,uo(t))},Pr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,In(t,r,uo(r),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=is,Pr.isRegExp=os,Pr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=d},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(t){return t===e},Pr.isWeakMap=function(e){return ts(e)&&fo(e)==E},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kn(e)},Pr.join=function(e,t){return null==e?"":fr.call(e,t)},Pr.kebabCase=Ys,Pr.last=Go,Pr.lastIndexOf=function(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var o=i;return n!==e&&(o=(o=gs(n))<0?br(i+o,0):vr(o,i-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,o):Rt(t,Nt,o,!0)},Pr.lowerCase=Vs,Pr.lowerFirst=Us,Pr.lt=ds,Pr.lte=us,Pr.max=function(t){return t&&t.length?fn(t,nl,Dn):e},Pr.maxBy=function(t,r){return t&&t.length?fn(t,lo(r,2),Dn):e},Pr.mean=function(e){return Ht(e,nl)},Pr.meanBy=function(e,t){return Ht(e,lo(t,2))},Pr.min=function(t){return t&&t.length?fn(t,nl,Rn):e},Pr.minBy=function(t,r){return t&&t.length?fn(t,lo(r,2),Rn):e},Pr.stubArray=fl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(t,r){return t&&t.length?Wn(t,gs(r)):e},Pr.noConflict=function(){return ut._===this&&(ut._=Le),this},Pr.noop=ll,Pr.now=Da,Pr.pad=function(e,t,r){e=vs(e);var n=(t=gs(t))?cr(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Yi(mt(i),r)+e+Yi(ft(i),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=gs(t))?cr(e):0;return t&&n<t?e+Yi(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=gs(t))?cr(e):0;return t&&n<t?Yi(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Pr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xo(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=ps(t),r===e?(r=t,t=0):r=ps(r)),t>r){var i=t;t=r,r=i}if(n||t%1||r%1){var o=wr();return vr(t+o*(r-t+st("1e-"+((o+"").length-1))),r)}return Xn(t,r)},Pr.reduce=function(e,t,r){var n=Ya(e)?It:Vt,i=arguments.length<3;return n(e,lo(t,4),r,i,hn)},Pr.reduceRight=function(e,t,r){var n=Ya(e)?At:Vt,i=arguments.length<3;return n(e,lo(t,4),r,i,pn)},Pr.repeat=function(t,r,n){return r=(n?xo(t,r,n):r===e)?1:gs(r),qn(vs(t),r)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(t,r,n){var i=-1,o=(r=yi(r,t)).length;for(o||(o=1,t=e);++i<o;){var a=null==t?e:t[zo(r[i])];a===e&&(i=o,a=n),t=Za(a)?a.call(t):a}return t},Pr.round=Cl,Pr.runInContext=ne,Pr.sample=function(e){return(Ya(e)?Gr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?cr(e):e.length;var t=fo(e);return t==w||t==D?e.size:jn(e).length},Pr.snakeCase=Ks,Pr.some=function(t,r,n){var i=Ya(t)?Bt:ii;return n&&xo(t,r,n)&&(r=e),i(t,lo(r,3))},Pr.sortedIndex=function(e,t){return oi(e,t)},Pr.sortedIndexBy=function(e,t,r){return ai(e,t,lo(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=oi(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return oi(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ai(e,t,lo(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=oi(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=Xs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(gs(r),0,e.length),t=ci(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?Ut(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?Ut(e,lo(t,2)):0},Pr.template=function(t,r,n){var i=Pr.templateSettings;n&&xo(t,r,n)&&(r=e),t=vs(t),r=ws({},r,i,Qi);var o,a,s=ws({},r.imports,i.imports,Qi),l=Ms(s),c=Gt(s,l),d=0,u=r.interpolate||ve,h="__p += '",p=Te((r.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),g="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++nt+"]")+"\n";t.replace(p,(function(e,r,n,i,s,l){return n||(n=i),h+=t.slice(d,l).replace(ye,rr),r&&(o=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var f=Be.call(r,"variable")&&r.variable;if(f){if(le.test(f))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(N,""):h).replace(H,"$1").replace(W,"$1;"),h="function("+(f||"obj")+") {\n"+(f?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Qs((function(){return Se(l,g+"return "+h).apply(e,c)}));if(m.source=h,Ga(m))throw m;return m},Pr.times=function(e,t){if((e=gs(e))<1||e>d)return[];var r=h,n=vr(e,h);t=lo(t),e-=h;for(var i=Kt(n,t);++r<e;)t(r);return i},Pr.toFinite=ps,Pr.toInteger=gs,Pr.toLength=fs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(gs(e),-9007199254740991,d):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Xt(t);if(!t||!(r=ci(r)))return t;var i=dr(t),o=dr(r);return wi(i,Qt(i,o),Jt(i,o)+1).join("")},Pr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,ur(t)+1);if(!t||!(r=ci(r)))return t;var i=dr(t);return wi(i,0,Jt(i,dr(r))+1).join("")},Pr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=ci(r)))return t;var i=dr(t);return wi(i,Qt(i,dr(r))).join("")},Pr.truncate=function(t,r){var n=30,i="...";if(es(r)){var o="separator"in r?r.separator:o;n="length"in r?gs(r.length):n,i="omission"in r?ci(r.omission):i}var a=(t=vs(t)).length;if(nr(t)){var s=dr(t);a=s.length}if(n>=a)return t;var l=n-cr(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):t.slice(0,l);if(o===e)return c+i;if(s&&(l+=c.length-l),os(o)){if(t.slice(l).search(o)){var d,u=c;for(o.global||(o=Te(o.source,vs(ue.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(ci(o),l)!=l){var p=c.lastIndexOf(o);p>-1&&(c=c.slice(0,p))}return c+i},Pr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,hr):e},Pr.uniqueId=function(e){var t=++je;return vs(e)+t},Pr.upperCase=qs,Pr.upperFirst=Gs,Pr.each=va,Pr.eachRight=ya,Pr.first=Uo,sl(Pr,(bl={},xn(Pr,(function(e,t){Be.call(Pr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Pr.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(gs(n),0);var i=this.__filtered__&&!r?new Wr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,h),type:t+(i.__dir__<0?"Right":"")}),i},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return _n(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Ba(lo(e)))},Wr.prototype.slice=function(t,r){t=gs(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=gs(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(h)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),i=/^(?:head|last)$/.test(r),o=Pr[i?"take"+("last"==r?"Right":""):r],a=i||/^find/.test(r);o&&(Pr.prototype[r]=function(){var r=this.__wrapped__,s=i?[1]:arguments,l=r instanceof Wr,c=s[0],d=l||Ya(r),u=function(e){var t=o.apply(Pr,Ft([e],s));return i&&h?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,p=!!this.__actions__.length,g=a&&!h,f=l&&!p;if(!a&&d){r=f?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:pa,args:[u],thisArg:e}),new Hr(m,h)}return g&&f?t.apply(this,s):(m=this.thru(u),g?i?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=_e[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Ya(i)?i:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";Be.call(_r,n)||(_r[n]=[]),_r[n].push({name:t,func:r})}})),_r[Li(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Ei(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ei(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ei(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,i=r?e.length:0,o=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var o=r[n],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,h=0,p=vr(l,this.__takeCount__);if(!r||!n&&i==l&&p==l)return gi(e,this.__actions__);var g=[];e:for(;l--&&h<p;){for(var f=-1,m=e[c+=t];++f<u;){var b=d[f],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}g[h++]=m}return g},Pr.prototype.at=ga,Pr.prototype.chain=function(){return ha(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Pr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var i=Po(n);i.__index__=0,i.__values__=e,r?o.__wrapped__=i:r=i;var o=i;n=n.__wrapped__}return o.__wrapped__=t,r},Pr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:pa,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return gi(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,et&&(Pr.prototype[et]=function(){return this}),Pr}();pt?((pt.exports=pr)._=pr,ht._=pr):ut._=pr}.call(Vo);var AD=ID.exports;const BD=i.forwardRef(((n,i)=>{var{value:o,readOnly:s,"data-testid":l,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:p,iconMask:g=e(He,{}),iconUnmask:f=e(Ne,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:k,onFocus:D,onBlur:T,onTryAgain:O}=n,E=dt(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const _=s&&AD.isEmpty(o),[M,F]=a(!x),[I,A]=a(o||"");u((()=>{A(o||"")}),[o]);const B=e=>{L(!1),D&&D(e)},j=e=>{L(!0),T&&T(e)},z=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,k&&k(e)},R=()=>{s&&O&&O()},P=()=>{L(!M)},L=e=>{F(e),e?C&&C():S&&S()},N=()=>!(null==I?void 0:I.toString().length)||x,H=()=>{if(_)return e(r,{});const t=N();return e($D,{"data-testid":"icon-"+(M?"masked":"unmasked"),onClick:t?void 0:P,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:M?f:g})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(s)switch($){case"fail":return t(_D,{onClick:R,"data-testid":"try-again-button",children:[t(TD,{children:[e(OD,{}),e(ED,{children:"Error"})]}),e(DD,{children:"Try again?"})]});case"loading":return t(CD,{children:[e(kD,{}),e(SD,{children:"Retrieving..."})]})}return e(wD,Object.assign({ref:i,"data-testid":`${l||"masked-input"}${M?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:s?void 0:B,onBlur:s?void 0:j,onClick:s?P:void 0,onChange:z,value:_?"-":M&&!x?hu.maskValue(I,{maskChar:v,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:p}):I,readOnly:s,error:y,$isDisabled:N()},E))})()})})),jD=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ew,{id:o,label:n,errorMessage:i,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e(BD,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},h))})})),zD=M.div`
    font-weight: ${e=>e.$bold?uc.Spec["weight-semibold"]:uc.Spec["weight-regular"]};
    color: ${e=>e.$selected?dc["text-selected"]:dc.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Dc(e.$maxLines||2)}
    overflow-wrap: break-word;
`,RD=M.div`
    color: ${dc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Dc(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${uc["body-md-semibold"]}
                `:F`
                    ${uc["body-baseline-regular"]}
                `}
`,PD=M.span`
    font-weight: ${uc.Spec["weight-semibold"]};
`,LD=M.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${zD} {
                        display: inline;
                    }

                    ${RD} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,ND=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,HD=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,WD=({bold:n,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u="default"})=>{const h=A(),p="small"===u?uc.Spec["body-size-md"]({theme:h}):uc.Spec["body-size-baseline"]({theme:h}),f=uc.Spec["font-family"]({theme:h}),{ref:b,width:v}=cr(),y=g((e=>{if("inline"!==i||!v)return!1;return hu.getTextWidth(e,`${p} '${f}'`)>v*s-50}),[v,i,p,f,s]),x=m((()=>y(o)),[y,o]),w=m((()=>c&&y(c)),[y,c]),$=n=>{if(!a)return n;const i=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(i),l=s+a.length;return-1===s?n:t(r,{children:[o.slice(0,s),e(PD,{$variant:u,children:o.slice(s,l)}),o.slice(l)]})},C=n=>t(r,{children:[e(ND,{$maxLines:s,"aria-hidden":!0,children:$(n)}),e(HD,{$maxLines:s,"aria-hidden":!0,children:$(n)})]});return t(LD,{ref:b,$labelDisplayType:x||w?"next-line":i,$variant:u,children:[e(zD,{"aria-label":o,$bold:n,$maxLines:s,$selected:l,$truncateType:d,children:"middle"===d&&x?C(o):$(o)}),c&&e(RD,{"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:i,children:"middle"===d&&w?C(c):c})]})},YD=0,VD=1,UD=2,KD=4;function XD(e){return()=>e}function qD(e){e()}function GD(e,t){return r=>e(t(r))}function ZD(e,t){return()=>e(t)}function QD(e,t){return r=>e(t,r)}function JD(e){return void 0!==e}function eT(){}function tT(e,t){return t(e),e}function rT(e,t){return t(e)}function nT(...e){return e}function iT(e,t){return e(VD,t)}function oT(e,t){e(YD,t)}function aT(e){e(UD)}function sT(e){return e(KD)}function lT(e,t){return iT(e,QD(t,YD))}function cT(e,t){const r=e(VD,(e=>{r(),t(e)}));return r}function dT(e){let t,r;return n=>i=>{t=i,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function uT(e,t){return e===t}function hT(e=uT){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function pT(e){return t=>r=>{e(r)&&t(r)}}function gT(e){return t=>GD(t,e)}function fT(e){return t=>()=>{t(e)}}function mT(e,...t){const r=function(...e){return t=>e.reduceRight(rT,t)}(...t);return(t,n)=>{switch(t){case UD:return void aT(e);case VD:return iT(e,r(n))}}}function bT(e,t){return r=>n=>{r(t=e(t,n))}}function vT(e){return t=>r=>{e>0?e--:t(r)}}function yT(e){let t,r=null;return n=>i=>{r=i,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function xT(...e){const t=new Array(e.length);let r=0,n=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);iT(e,(e=>{const s=r;r|=a,t[o]=e,s!==i&&r===i&&n&&(n(),n=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};r===i?a():n=a}}function wT(e){let t=e;const r=CT();return(e,n)=>{switch(e){case YD:t=n;break;case VD:n(t);break;case KD:return t}return r(e,n)}}function $T(e,t){return tT(wT(t),(t=>lT(e,t)))}function CT(){const e=[];return(t,r)=>{switch(t){case YD:return void e.slice().forEach((e=>{e(r)}));case UD:return void e.splice(0,e.length);case VD:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function ST(e){return tT(CT(),(t=>lT(e,t)))}function kT(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:DT(),singleton:r}}const DT=()=>Symbol();function TT(...e){const t=CT(),r=new Array(e.length);let n=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);iT(e,(e=>{r[o]=e,n|=a,n===i&&oT(t,r)}))})),function(e,o){switch(e){case UD:return void aT(t);case VD:return n===i&&o(r),iT(t,o)}}}function OT(e,t=uT){return mT(e,hT(t))}function ET(...e){return function(t,r){switch(t){case UD:return;case VD:return function(...e){return()=>{e.map(qD)}}(...e.map((e=>iT(e,r))))}}}var _T=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(_T||{});const MT={0:"debug",3:"error",1:"log",2:"warn"},FT=kT((()=>{const e=wT(3);return{log:wT(((t,r,n=1)=>{var i;n>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:sT(e))&&console[MT[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function IT(e,t,r){return AT(e,t,r).callbackRef}function AT(e,t,r){const n=i.useRef(null);let o=e=>{};if(typeof ResizeObserver<"u"){const a=i.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);o=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:o,ref:n}}function BT(e,t,r,n,o,a,s,l,c){const d=i.useCallback((r=>{const i=function(e,t,r,n){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,r);if(0===c&&n("Zero-sized element, this should not happen",{child:i},_T.ERROR),c===l)continue;const d=o[o.length-1];0===o.length||d.size!==c||d.endIndex!==s-1?o.push({endIndex:s,size:c,startIndex:s}):o[o.length-1].endIndex++}return o}(r.children,t,l?"offsetWidth":"offsetHeight",o);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,p=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:p}),null==a||a(l?jT("column-gap",getComputedStyle(r).columnGap,o):jT("row-gap",getComputedStyle(r).rowGap,o)),null!==i&&e(i)}),[e,t,o,a,s,n]);return AT(d,r,c)}function jT(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,_T.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function zT(e,t,r){const n=i.useRef(null),o=i.useCallback((r=>{if(null==r||!r.offsetParent)return;const i=r.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=i.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=AT(o,!0,r),l=i.useCallback((()=>{o(s.current)}),[o,s]);return i.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const RT=kT((()=>{const e=CT(),t=CT(),r=wT(0),n=CT(),i=wT(0),o=CT(),a=CT(),s=wT(0),l=wT(0),c=wT(0),d=wT(0),u=CT(),h=CT(),p=wT(!1),g=wT(!1),f=wT(!1);return lT(mT(e,gT((({scrollTop:e})=>e))),t),lT(mT(e,gT((({scrollHeight:e})=>e))),a),lT(t,i),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:g,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:p,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:n,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),PT={lvl:0};function LT(e,t){const r=e.length;if(0===r)return[];let{index:n,value:i}=t(e[0]);const o=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);o.push({end:r-1,start:n,value:i}),n=r,i=s}return o.push({end:1/0,start:n,value:i}),o}function NT(e){return e===PT}function HT(e,t){if(!NT(e))return t===e.k?e.v:t<e.k?HT(e.l,t):HT(e.r,t)}function WT(e,t,r="k"){if(NT(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=WT(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return WT(e.l,t,r)}function YT(e,t,r){return NT(e)?tO(t,r,1):t===e.k?ZT(e,{k:t,v:r}):t<e.k?rO(ZT(e,{l:YT(e.l,t,r)})):rO(ZT(e,{r:YT(e.r,t,r)}))}function VT(){return PT}function UT(e,t,r){if(NT(e))return[];return function(e){return LT(e,(({k:e,v:t})=>({index:e,value:t})))}(qT(e,WT(e,t)[0],r))}function KT(e,t){if(NT(e))return PT;const{k:r,l:n,r:i}=e;if(t===r){if(NT(n))return i;if(NT(i))return n;{const[t,r]=eO(n);return GT(ZT(e,{k:t,l:QT(n),v:r}))}}return GT(ZT(e,t<r?{l:KT(n,t)}:{r:KT(i,t)}))}function XT(e){return NT(e)?[]:[...XT(e.l),{k:e.k,v:e.v},...XT(e.r)]}function qT(e,t,r){if(NT(e))return[];const{k:n,l:i,r:o,v:a}=e;let s=[];return n>t&&(s=s.concat(qT(i,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(qT(o,t,r))),s}function GT(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(JT(t))return nO(ZT(e,{lvl:r-1}));if(!NT(t)&&!NT(t.r))return ZT(t.r,{l:ZT(t,{r:t.r.l}),lvl:r,r:ZT(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(JT(e))return iO(ZT(e,{lvl:r-1}));if(NT(n)||NT(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,i=JT(t)?n.lvl-1:n.lvl;return ZT(t,{l:ZT(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:iO(ZT(n,{l:t.r,lvl:i}))})}}function ZT(e,t){return tO(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function QT(e){return NT(e.r)?e.l:GT(ZT(e,{r:QT(e.r)}))}function JT(e){return NT(e)||e.lvl>e.r.lvl}function eO(e){return NT(e.r)?[e.k,e.v]:eO(e.r)}function tO(e,t,r,n=PT,i=PT){return{k:e,l:n,lvl:r,r:i,v:t}}function rO(e){return iO(nO(e))}function nO(e){const{l:t}=e;return NT(t)||t.lvl!==e.lvl?e:ZT(t,{r:ZT(e,{l:t.r})})}function iO(e){const{lvl:t,r:r}=e;return NT(r)||NT(r.r)||r.lvl!==t||r.r.lvl!==t?e:ZT(r,{l:ZT(e,{r:r.l}),lvl:t+1})}function oO(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function aO(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const sO=kT((()=>({recalcInProgress:wT(!1)})),[],{singleton:!0});function lO(e,t,r){return e[cO(e,t,r)]}function cO(e,t,r,n=0){let i=e.length-1;for(;n<=i;){const o=Math.floor((n+i)/2),a=r(e[o],t);if(0===a)return o;if(-1===a){if(i-n<2)return o-1;i=o-1}else{if(i===n)return o;n=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function dO(e,t){return Math.round(e.getBoundingClientRect()[t])}function uO(e){return!NT(e.groupOffsetTree)}function hO({index:e},t){return t===e?0:t<e?-1:1}function pO({offset:e},t){return t===e?0:t<e?-1:1}function gO(e,t,r){if(0===t.length)return 0;const{index:n,offset:i,size:o}=lO(t,e,hO),a=e-n,s=o*a+(a-1)*r+i;return s>0?s+r:s}function fO(e,t){if(!uO(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function mO(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=fO("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function bO(e,t,r,n=0){return n>0&&(t=Math.max(t,lO(e,n,hO).offset)),LT(function(e,t,r,n){const i=cO(e,t,n),o=cO(e,r,n,i);return e.slice(i,o+1)}(e,t,r,pO),wO)}function vO(e,[t,r,n,i]){t.length>0&&n("received item sizes",t,_T.DEBUG);const o=e.sizeTree;let a=o,s=0;if(r.length>0&&NT(o)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>YT(YT(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=NT(e)?0:1/0;for(const n of t){const{endIndex:t,size:i,startIndex:o}=n;if(r=Math.min(r,o),NT(e)){e=YT(e,0,i);continue}const a=UT(e,o-1,t+1);if(a.some($O(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:o}of a)s?(t>=n||i===o)&&(e=KT(e,n)):(l=o!==i,s=!0),r>t&&t>=n&&o!==i&&(e=YT(e,t+1,o));l&&(e=YT(e,o,i))}return[e,r]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=xO(e.offsetTree,s,a,i);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>YT(e,t,gO(t,u,i))),VT()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function yO(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function xO(e,t,r,n){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=cO(i,t-1,hO),s=i[l].offset;const e=WT(r,t-1);o=e[0],a=e[1],i.length&&i[l].size===WT(r,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of UT(r,t,1/0)){const t=e-o,r=t*a+s+t*n;i.push({index:e,offset:r,size:l}),o=e,s=r,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function wO(e){return{index:e.index,value:e}}function $O(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const CO={offsetHeight:"height",offsetWidth:"width"},SO=kT((([{log:e},{recalcInProgress:t}])=>{const r=CT(),n=CT(),i=$T(n,0),o=CT(),a=CT(),s=wT(0),l=wT([]),c=wT(void 0),d=wT(void 0),u=wT(((e,t)=>dO(e,CO[t]))),h=wT(void 0),p=wT(0),g={groupIndices:[],groupOffsetTree:VT(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:VT()},f=$T(mT(r,xT(l,e,p),bT(vO,g),hT()),g),m=$T(mT(l,hT(),bT(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),gT((({prev:e})=>e))),[]);lT(mT(l,pT((e=>e.length>0)),xT(f,p),gT((([e,t,r])=>{const n=e.reduce(((e,n,i)=>YT(e,n,gO(n,t.offsetTree,r)||i)),VT());return{...t,groupIndices:e,groupOffsetTree:n}}))),f),lT(mT(n,xT(f),pT((([e,{lastIndex:t}])=>e<t)),gT((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),lT(c,d);const b=$T(mT(c,gT((e=>void 0===e))),!0);lT(mT(d,pT((e=>void 0!==e&&NT(sT(f).sizeTree))),gT((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=ST(mT(r,xT(f),bT((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:g}),gT((e=>e.changed))));iT(mT(s,bT(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),gT((e=>e.diff))),(e=>{const{groupIndices:r}=sT(f);if(e>0)oT(t,!0),oT(o,e+yO(e,r));else if(e<0){const t=sT(m);t.length>0&&(e-=yO(-e,t)),oT(a,e)}})),iT(mT(s,xT(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},_T.ERROR)}));const y=ST(o);lT(mT(o,xT(f),gT((([e,t])=>{const r=t.groupIndices.length>0,n=[],i=t.lastSize;if(r){const r=HT(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=XT(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:i}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return XT(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),r);const x=ST(mT(a,xT(f,p),gT((([e,{offsetTree:t},r])=>gO(-e,t,r)))));return lT(mT(a,xT(f,p),gT((([e,t,r])=>{if(t.groupIndices.length>0){if(NT(t.sizeTree))return t;let n=VT();const i=sT(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(n=XT(t.sizeTree).reduce(((t,{k:r,v:n})=>YT(t,Math.max(0,r+e),n)),n),o!==-e){n=YT(n,0,HT(t.sizeTree,s));n=YT(n,1,WT(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...xO(t.offsetTree,0,n,r)}}{const n=XT(t.sizeTree).reduce(((t,{k:r,v:n})=>YT(t,Math.max(0,r+e),n)),VT());return{...t,sizeTree:n,...xO(t.offsetTree,0,n,r)}}}))),f),{beforeUnshiftWith:y,data:h,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:p,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:f,statefulTotalCount:i,totalCount:n,trackItemSizes:b,unshiftWith:o}}),nT(FT,sO),{singleton:!0});function kO(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const DO=kT((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:i}])=>{const o=CT(),a=CT(),s=ST(mT(o,gT(kO)));return lT(mT(s,gT((e=>e.totalCount))),r),lT(mT(s,gT((e=>e.groupIndices))),e),lT(mT(TT(i,t,n),pT((([e,t])=>uO(t))),gT((([e,t,r])=>WT(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),hT(),gT((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),nT(SO,RT)),TO=kT((([{log:e}])=>{const t=wT(!1),r=ST(mT(t,pT((e=>e)),hT()));return iT(t,(t=>{t&&sT(e)("props updated",{},_T.DEBUG)})),{didMount:r,propsReady:t}}),nT(FT),{singleton:!0}),OO=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function EO(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!OO)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const _O=kT((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:h}])=>{const p=CT(),g=CT(),f=wT(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),oT(l,!1)}return lT(mT(p,xT(r,u,n,f,s,a,h),xT(e,o,i),gT((([[e,r,n,i,o,a,s,c],u,h,f])=>{const x=EO(e),{align:w,behavior:$,offset:C}=x,S=i-1,k=mO(x,r,S);let D=gO(k,r.offsetTree,u)+a;"end"===w?(D+=h+WT(r.sizeTree,k)[1]-n+f,k===S&&(D+=s)):"center"===w?D+=(h+WT(r.sizeTree,k)[1]-n+f)/2:D-=o,C&&(D+=C);const T=t=>{y(),t?(c("retrying to scroll to",{location:e},_T.DEBUG),oT(p,e)):(oT(g,!0),c("list did not change, scroll successful",{},_T.DEBUG))};if(y(),"smooth"===$){let e=!1;v=iT(t,(t=>{e=e||t})),m=cT(d,(()=>{T(e)}))}else m=cT(mT(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),T);return b=setTimeout((()=>{y()}),1200),oT(l,!0),c("scrolling from index to",{behavior:$,index:k,top:D},_T.DEBUG),{behavior:$,top:D}}))),c),{scrollTargetReached:g,scrollToIndex:p,topListHeight:f}}),nT(SO,RT,FT),{singleton:!0});function MO(e,t){0==e?t():requestAnimationFrame((()=>{MO(e-1,t)}))}function FO(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const IO=kT((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=wT(!0),l=wT(0),c=wT(!0);return lT(mT(a,xT(l),pT((([e,t])=>!!t)),fT(!1)),s),lT(mT(a,xT(l),pT((([e,t])=>!!t)),fT(!1)),c),iT(mT(TT(t,a),xT(s,r,e,c),pT((([[,e],t,{sizeTree:r},n,i])=>e&&(!NT(r)||JD(n))&&!t&&!i)),xT(l)),(([,e])=>{cT(i,(()=>{oT(c,!0)})),MO(4,(()=>{cT(n,(()=>{oT(s,!0)})),oT(o,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),nT(SO,RT,_O,TO),{singleton:!0});function AO(e,t){return Math.abs(e-t)<1.01}const BO="up",jO="down",zO={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},RO=kT((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:i,viewportHeight:o}])=>{const a=wT(!1),s=wT(!0),l=CT(),c=CT(),d=wT(4),u=wT(0),h=$T(mT(ET(mT(OT(i),vT(1),fT(!0)),mT(OT(i),vT(1),fT(!1),dT(100))),hT()),!1),p=$T(mT(ET(mT(r,fT(!0)),mT(r,fT(!1),dT(200))),hT()),!1);lT(mT(TT(OT(i),OT(u)),gT((([e,t])=>e<=t)),hT()),s),lT(mT(s,yT(50)),c);const g=ST(mT(TT(n,OT(o),OT(t),OT(e),OT(d)),bT(((e,[{scrollHeight:t,scrollTop:r},n,i,o,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),zO),hT(((e,t)=>e&&e.atBottom===t.atBottom)))),f=$T(mT(n,bT(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(AO(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const i=t-(r+n)<1;return e.scrollTop!==r&&i?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),pT((e=>e.changed)),gT((e=>e.jump))),0);lT(mT(g,gT((e=>e.atBottom))),a),lT(mT(a,yT(50)),l);const m=wT(jO);lT(mT(n,gT((({scrollTop:e})=>e)),hT(),bT(((e,t)=>sT(p)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?BO:jO,prevScrollTop:t}),{direction:jO,prevScrollTop:0}),gT((e=>e.direction))),m),lT(mT(n,yT(50),fT("none")),m);const b=wT(0);return lT(mT(h,pT((e=>!e)),fT(0)),b),lT(mT(i,yT(100),xT(h),pT((([e,t])=>!!t)),bT((([e,t],[r])=>[t,r]),[0,0]),gT((([e,t])=>t-e))),b),{atBottomState:g,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:f,scrollDirection:m,scrollVelocity:b}}),nT(RT)),PO="top",LO="bottom",NO="none";function HO(e,t,r){return"number"==typeof e?r===BO&&t===PO||r===jO&&t===LO?e:0:r===BO?t===PO?e.main:e.reverse:t===LO?e.main:e.reverse}function WO(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const YO=kT((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:i}])=>{const o=CT(),a=wT(0),s=wT(0),l=wT(0),c=$T(mT(TT(OT(n),OT(i),OT(r),OT(o,aO),OT(l),OT(a),OT(t),OT(e),OT(s)),gT((([e,t,r,[n,i],o,a,s,l,c])=>{const d=e-l,u=a+s,h=Math.max(r-d,0);let p=NO;const g=WO(c,PO),f=WO(c,LO);return n-=l,i+=r+s,(n+=r+s)>e+u-g&&(p=BO),(i-=l)<e-h+t+f&&(p=jO),p!==NO?[Math.max(d-r-HO(o,PO,p)-g,0),d-h-s+t+HO(o,LO,p)+f]:null})),pT((e=>null!=e)),hT(aO)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:c}}),nT(RT),{singleton:!0});const VO={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function UO(e,t,r,n,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,h=c,p=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:o,items:XO(e,i,o),offsetBottom:p,offsetTop:c,top:h,topItems:XO(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function KO(e,t,r,n,i,o){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=FO(t,s);return UO(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,r,n)}function XO(e,t,r){if(0===e.length)return[];if(!uO(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,i=e[e.length-1].index,o=[],a=UT(t.groupOffsetTree,n,i);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},o.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return o}const qO=kT((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},h,{didMount:p},{recalcInProgress:g}])=>{const f=wT([]),m=wT(0),b=CT();lT(o.topItemsIndexes,f);const v=$T(mT(TT(p,g,OT(l,aO),OT(i),OT(n),OT(c),d,OT(f),OT(t),OT(r),e),pT((([e,t,,r,,,,,,,n])=>{const i=n&&n.length!==r;return e&&!t&&!i})),gT((([,,[e,t],r,n,i,o,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:h}=d,p=sT(m);if(0===r)return{...VO,totalCount:r};if(0===e&&0===t)return 0===p?{...VO,totalCount:r}:KO(p,i,n,s,l,c||[]);if(NT(h))return p>0?null:UO(function(e,t,r){if(uO(t)){const n=fO(e,t);return[{index:WT(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(FO(i,r),d,c),[],r,l,d,s);const g=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of UT(h,e,t)){const i=n.value,o=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=o;e<=a;e++)g.push({data:null==c?void 0:c[e],index:e,offset:r,size:i}),r+=i}}if(!o)return UO([],g,r,l,d,s);const f=a.length>0?a[a.length-1]+1:0,b=bO(u,e,t,f);if(0===b.length)return null;const v=r-1;return UO(tT([],(r=>{for(const n of b){const i=n.value;let o=i.offset,a=n.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-n.start;o+=t*s+t*l}a<f&&(o+=(f-a)*s,a=f);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(o>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:o,size:s}),o+=s+l}})),g,r,l,d,s)})),pT((e=>null!==e)),hT()),VO);lT(mT(e,pT(JD),gT((e=>null==e?void 0:e.length))),i),lT(mT(v,gT((e=>e.topListHeight))),u),lT(u,s),lT(mT(v,gT((e=>[e.top,e.bottom]))),a),lT(mT(v,gT((e=>e.items))),b);const y=ST(mT(v,pT((({items:e})=>e.length>0)),xT(i,e),pT((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),gT((([,e,t])=>[e-1,t])),hT(aO),gT((([e])=>e)))),x=ST(mT(v,yT(200),pT((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),gT((({items:e})=>e[0].index)),hT())),w=ST(mT(v,pT((({items:e})=>e.length>0)),gT((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),hT(oO)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:f,...h}}),nT(SO,DO,YO,IO,_O,RO,TO,sO),{singleton:!0}),GO=kT((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:i}])=>{const o=CT(),a=$T(mT(TT(r,e,n,t,i),gT((([e,t,r,n,i])=>e+t+r+n+i.offsetBottom+i.bottom))),0);return lT(OT(a),o),{totalListHeight:a,totalListHeightChanged:o}}),nT(RT,qO),{singleton:!0}),ZO=kT((([{viewportHeight:e},{totalListHeight:t}])=>{const r=wT(!1),n=$T(mT(TT(r,e,t),pT((([e])=>e)),gT((([,e,t])=>Math.max(0,e-t))),yT(0),hT()),0);return{alignToBottom:r,paddingTopAddition:n}}),nT(RT,GO),{singleton:!0});function QO(e){return!!e&&("smooth"===e?"smooth":"auto")}const JO=kT((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=wT(!1),u=CT();let h=null;function p(e){oT(i,{align:"end",behavior:e,index:"LAST"})}function g(e){const t=cT(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(sT(l)("scrolling to bottom due to increased size",{},_T.DEBUG),p("auto"))}));setTimeout(t,100)}return iT(mT(TT(mT(OT(t),vT(1)),a),xT(OT(d),n,o,c),gT((([[e,t],r,n,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?QO(e(t)):t&&QO(e))(r,n||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),pT((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=cT(e,(()=>{sT(l)("following output to ",{totalCount:r},_T.DEBUG),p(t),h=null}))})),iT(mT(TT(OT(d),t,s),pT((([e,,t])=>e&&t)),bT((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),pT((({refreshed:e})=>e)),xT(d,t)),(([,e])=>{sT(o)&&g(!1!==e)})),iT(u,(()=>{g(!1!==sT(d))})),iT(TT(OT(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&p("auto")})),{autoscrollToBottom:u,followOutput:d}}),nT(SO,RO,_O,IO,TO,FT,RT)),eE=kT((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(lT(mT(s,xT(o),pT((([,e])=>0!==e)),xT(i,n,t,r,e),gT((([[,e],t,r,n,i,o=[]])=>KO(e,t,r,n,i,o)))),a),{})),nT(SO,IO,qO,TO),{singleton:!0}),tE=kT((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=wT(0);return iT(mT(e,xT(n),pT((([,e])=>0!==e)),gT((([,e])=>({top:e})))),(e=>{cT(mT(r,vT(1),pT((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{oT(t,e)}))}))})),{initialScrollTop:n}}),nT(TO,RT,qO),{singleton:!0}),rE=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=r?r:"start",behavior:n}:e>o?{...i,align:null!=r?r:"end",behavior:n}:null,nE=kT((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=CT();return lT(mT(d,xT(t,l,r,o,i,n,s),xT(e),gT((([[e,t,r,n,i,o,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:h=rE,done:p,...g}=e,f=mO(e,t,n-1),m=gO(f,t.offsetTree,c)+i+o,b=h({itemBottom:m+WT(t.sizeTree,f)[1],itemTop:m,locationParams:{align:d,behavior:u,...g},viewportBottom:l+r-s,viewportTop:l+o});return b?p&&cT(mT(a,pT((e=>!e)),vT(sT(a)?1:2)),p):p&&p(),b})),pT((e=>null!==e))),c),{scrollIntoView:d}}),nT(SO,RT,_O,qO,FT),{singleton:!0}),iE=kT((([{scrollVelocity:e}])=>{const t=wT(!1),r=CT(),n=wT(!1);return lT(mT(e,xT(n,t,r),pT((([e,t])=>!!t)),gT((([e,t,r,n])=>{const{enter:i,exit:o}=t;if(r){if(o(e,n))return!1}else if(i(e,n))return!0;return r})),hT()),t),iT(mT(TT(t,e,r),xT(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),nT(RO),{singleton:!0}),oE=kT((([{scrollContainerState:e,scrollTo:t}])=>{const r=CT(),n=CT(),i=CT(),o=wT(!1),a=wT(void 0);return lT(mT(TT(r,n),gT((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),lT(mT(t,xT(n),gT((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:r,windowScrollTo:i,windowViewportRect:n}}),nT(RT)),aE=kT((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=CT(),d=wT(void 0),u=wT(null),h=wT(null);return lT(s,u),lT(l,h),iT(mT(c,xT(t,n,a,u,h,r)),(([e,t,r,n,i,o,a])=>{const s=function(e){return XT(e).map((({k:e,v:t},r,n)=>{const i=n[r+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==i&&null!==o&&(r=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:r-=a})})),lT(mT(d,pT(JD),gT(sE)),i),lT(mT(o,xT(d),pT((([,e])=>void 0!==e)),hT(),gT((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),nT(SO,RT,IO,TO,oE));function sE(e){return{align:"start",index:0,offset:e.scrollTop}}const lE=kT((([{topItemsIndexes:e}])=>{const t=wT(0);return lT(mT(t,pT((e=>e>=0)),gT((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),nT(qO));function cE(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const dE=cE((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),uE=kT((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:h},{log:p},{recalcInProgress:g}])=>{const f=ST(mT(l,xT(a),bT((([,e,t,r],[{bottom:n,items:i,offsetBottom:o,totalCount:a},s])=>{const l=n+o;let c=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,i,a,l]}),[0,[],0,0]),pT((([e])=>0!==e)),xT(n,s,r,i,p,g),pT((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===BO)),gT((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},_T.DEBUG),e)))));function m(r){r>0?(oT(t,{behavior:"auto",top:-r}),oT(e,0)):(oT(e,0),oT(t,{behavior:"auto",top:-r}))}return iT(mT(f,xT(e,o)),(([t,r,n])=>{n&&dE()?oT(e,r-t):m(-t)})),iT(mT(TT($T(o,!1),e,g),pT((([e,t,r])=>!e&&!r&&0!==t)),gT((([e,t])=>t)),yT(1)),m),lT(mT(u,gT((e=>({top:-e})))),t),iT(mT(c,xT(h,d),gT((([e,{groupIndices:t,lastSize:r,sizeTree:n},i])=>{function o(e){return e*(r+i)}if(0===t.length)return o(e);{let r=0;const i=HT(n,0);let a=0,s=0;for(;a<e;){a++,r+=i;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=i,n=e-a+1),a+=n,r+=o(n),s++}return r}}))),(r=>{oT(e,r),requestAnimationFrame((()=>{oT(t,{top:r}),requestAnimationFrame((()=>{oT(e,0),oT(g,!1)}))}))})),{deviation:e}}),nT(RT,RO,qO,SO,FT,sO)),hE=kT((([e,t,r,n,i,o,a,s,l,c])=>({...e,...t,...r,...n,...i,...o,...a,...s,...l,...c})),nT(YO,eE,TO,iE,GO,tE,ZO,oE,nE,FT)),pE=kT((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:p,scrolledToInitialItem:g},f,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},k])=>(lT(x.rangeChanged,k.scrollSeekRangeChanged),lT(mT(k.windowViewportRect,gT((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:i,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:p,scrolledToInitialItem:g,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...k,...f,sizes:l,...m})),nT(SO,IO,RT,aE,JO,qO,_O,uE,lE,DO,hE));function gE(e,t){const r={},n={};let i=0;const o=e.length;for(;i<o;)n[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const fE=typeof document<"u"?i.useLayoutEffect:i.useEffect;function mE(t,r,n){const o=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=i.createContext({});function d(e,t){e.propsReady&&oT(e.propsReady,!1);for(const n of o){oT(e[r.required[n]],t[n])}for(const n of a)if(n in t){oT(e[r.optional[n]],t[n])}e.propsReady&&oT(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(i,o){switch(i){case VD:return o?r===o?void 0:(n(),r=o,t=iT(e,o),t):(n(),eT);case UD:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=i.forwardRef(((h,p)=>{const{children:g,...f}=h,[m]=i.useState((()=>tT(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(n.map((e=>r(e))));return o&&t.set(i,a),a};return r(e)}(t),(e=>{d(e,f)})))),[b]=i.useState(ZD(u,m));fE((()=>{for(const e of l)e in f&&iT(b[e],f[e]);return()=>{Object.values(b).map(aT)}}),[f,b,m]),fE((()=>{d(m,f)})),i.useImperativeHandle(p,XD(function(e){return s.reduce(((t,n)=>(t[n]=t=>{oT(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(c.Provider,{value:m,children:n?e(v,{...gE([...o,...a,...l],f),children:g}):g})})),p=i.version.startsWith("18")?e=>{const t=i.useContext(c)[e],r=i.useCallback((e=>iT(t,e)),[t]);return i.useSyncExternalStore(r,(()=>sT(t)),(()=>sT(t)))}:e=>{const t=i.useContext(c)[e],[r,n]=i.useState(ZD(sT,t));return fE((()=>iT(t,(e=>{e!==r&&n(XD(e))}))),[t,r]),r};return{Component:h,useEmitter:(e,t)=>{const r=i.useContext(c)[e];fE((()=>iT(r,t)),[t,r])},useEmitterValue:p,usePublisher:e=>i.useCallback(QD(oT,i.useContext(c)[e]),[e])}}const bE=i.createContext(void 0),vE=i.createContext(void 0),yE=typeof document<"u"?i.useLayoutEffect:i.useEffect;function xE(e,t,r,n=eT,o,a){const s=i.useRef(null),l=i.useRef(null),c=i.useRef(null),d=i.useCallback((r=>{const n=r.target,i=n===window||n===document,o=a?i?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?i?document.documentElement.scrollWidth:n.scrollWidth:i?document.documentElement.scrollHeight:n.scrollHeight,d=a?i?window.innerWidth:n.offsetWidth:i?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(o,0),viewportHeight:d})};r.suppressFlushSync?u():D.flushSync(u),null!==l.current&&(o===l.current||o<=0||o===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return i.useEffect((()=>{const e=o||s.current;return n(o||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[s,d,r,n,o]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const i="smooth"===r.behavior;let o,d,u;n===window?(d=Math.max(dO(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),o=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[a?"scrollWidth":"scrollHeight"],o=dO(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const h=d-o;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),AO(o,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:o}),void(i&&t(!0));i?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const wE="-webkit-sticky",$E="sticky",CE=cE((()=>{if(typeof document>"u")return $E;const e=document.createElement("div");return e.style.position=wE,e.style.position===wE?wE:$E}));function SE(e){return e}const kE=kT((()=>{const e=wT((e=>`Item ${e}`)),t=wT(null),r=wT((e=>`Group ${e}`)),n=wT({}),i=wT(SE),o=wT("div"),a=wT(eT),s=(e,t=null)=>$T(mT(n,gT((t=>t[e])),hT()),t);return{components:n,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),DE=kT((([e,t])=>({...e,...t})),nT(pE,kE)),TE=({height:t})=>e("div",{style:{height:t}}),OE={overflowAnchor:"none",position:CE(),zIndex:1},EE={overflowAnchor:"none"},_E={...EE,display:"inline-block",height:"100%"},ME=i.memo((function({showTopList:t=!1}){const r=XE("listState"),n=qE("sizeRanges"),o=XE("useWindowScroll"),a=XE("customScrollParent"),s=qE("windowScrollContainerState"),l=qE("scrollContainerState"),c=a||o?s:l,d=XE("itemContent"),u=XE("context"),h=XE("groupContent"),p=XE("trackItemSizes"),g=XE("itemSize"),f=XE("log"),m=qE("gap"),b=XE("horizontalDirection"),{callbackRef:v}=BT(n,g,p,t?eT:c,f,m,a,b,XE("skipAnimationFrameInResizeObserver")),[y,x]=i.useState(0);KE("deviation",(e=>{y!==e&&x(e)}));const w=XE("EmptyPlaceholder"),$=XE("ScrollSeekPlaceholder")||TE,C=XE("ListComponent"),S=XE("ItemComponent"),D=XE("GroupComponent"),T=XE("computeItemKey"),O=XE("isSeeking"),E=XE("groupIndices").length>0,_=XE("alignToBottom"),M=XE("initialItemFinalLocationReached"),F=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:_?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:_?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...M?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...jE(w,u)}):e(C,{...jE(C,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:F,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=T(t+r.firstItemIndex,e.data,u);return O?k($,{...jE($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?k(D,{...jE(D,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:OE},h(e.index,u)):k(S,{...jE(S,u),...zE(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?_E:EE},E?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),FE={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},IE={outline:"none",overflowX:"auto",position:"relative"},AE=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),BE={position:CE(),top:0,width:"100%",zIndex:1};function jE(e,t){if("string"!=typeof e)return{context:t}}function zE(e,t){return{item:"string"==typeof e?void 0:t}}const RE=i.memo((function(){const t=XE("HeaderComponent"),r=qE("headerHeight"),n=XE("HeaderFooterTag"),o=IT(i.useMemo((()=>e=>{r(dO(e,"height"))}),[r]),!0,XE("skipAnimationFrameInResizeObserver")),a=XE("context");return t?e(n,{ref:o,children:e(t,{...jE(t,a)})}):null})),PE=i.memo((function(){const t=XE("FooterComponent"),r=qE("footerHeight"),n=XE("HeaderFooterTag"),o=IT(i.useMemo((()=>e=>{r(dO(e,"height"))}),[r]),!0,XE("skipAnimationFrameInResizeObserver")),a=XE("context");return t?e(n,{ref:o,children:e(t,{...jE(t,a)})}):null}));function LE({useEmitter:t,useEmitterValue:r,usePublisher:n}){return i.memo((function({children:i,style:o,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:p,scrollerRef:g,scrollToCallback:f}=xE(s,c,l,d,void 0,h);return t("scrollTo",f),t("scrollBy",p),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:g,style:{...h?IE:FE,...o},tabIndex:0,...a,...jE(l,u),children:i})}))}function NE({useEmitter:t,useEmitterValue:r,usePublisher:n}){return i.memo((function({children:i,style:o,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),p=r("context"),{scrollByCallback:g,scrollerRef:f,scrollToCallback:m}=xE(s,c,l,eT,h);return yE((()=>(f.current=h||window,()=>{f.current=null})),[f,h]),t("windowScrollTo",m),t("scrollBy",g),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==d?{height:d+u}:{}},...a,...jE(l,p),children:i})}))}const HE=({children:t})=>{const r=i.useContext(bE),n=qE("viewportHeight"),o=qE("fixedItemHeight"),a=XE("alignToBottom"),s=XE("horizontalDirection"),l=IT(i.useMemo((()=>GD(n,(e=>dO(e,s?"width":"height")))),[n,s]),!0,XE("skipAnimationFrameInResizeObserver"));return i.useEffect((()=>{r&&(n(r.viewportHeight),o(r.itemHeight))}),[r,n,o]),e("div",{"data-viewport-type":"element",ref:l,style:AE(a),children:t})},WE=({children:t})=>{const r=i.useContext(bE),n=qE("windowViewportRect"),o=qE("fixedItemHeight"),a=XE("customScrollParent"),s=zT(n,a,XE("skipAnimationFrameInResizeObserver")),l=XE("alignToBottom");return i.useEffect((()=>{r&&(o(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,o]),e("div",{"data-viewport-type":"window",ref:s,style:AE(l),children:t})},YE=({children:t})=>{const r=XE("TopItemListComponent")||"div",n=XE("headerHeight"),i={...BE,marginTop:`${n}px`},o=XE("context");return e(r,{style:i,...jE(r,o),children:t})},VE=i.memo((function(r){const n=XE("useWindowScroll"),i=XE("topItemsIndexes").length>0,o=XE("customScrollParent"),a=XE("context"),s=o||n?ZE:GE,l=o||n?WE:HE;return t(s,{...r,...jE(s,a),children:[i&&e(YE,{children:e(ME,{showTopList:!0})}),t(l,{children:[e(RE,{}),e(ME,{}),e(PE,{})]})]})})),{Component:UE,useEmitter:KE,useEmitterValue:XE,usePublisher:qE}=mE(DE,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},VE),GE=LE({useEmitter:KE,useEmitterValue:XE,usePublisher:qE}),ZE=NE({useEmitter:KE,useEmitterValue:XE,usePublisher:qE}),QE=UE,JE={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},e_={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:t_,floor:r_,max:n_,min:i_,round:o_}=Math;function a_(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function s_(e,t){return e&&e.width===t.width&&e.height===t.height}function l_(e,t){return e&&e.column===t.column&&e.row===t.row}const c_=kT((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},h,p,{didMount:g,propsReady:f},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=wT(0),C=wT(0),S=wT(JE),k=wT({height:0,width:0}),D=wT({height:0,width:0}),T=CT(),O=CT(),E=wT(0),_=wT(null),M=wT({column:0,row:0}),F=CT(),I=CT(),A=wT(!1),B=wT(0),j=wT(!0),z=wT(!1),R=wT(!1);iT(mT(g,xT(B),pT((([e,t])=>!!t))),(()=>{oT(j,!1)})),iT(mT(TT(g,j,D,k,B,z),pT((([e,t,r,n,,i])=>e&&!t&&0!==r.height&&0!==n.height&&!i))),(([,,,,e])=>{oT(z,!0),MO(1,(()=>{oT(T,e)})),cT(mT(c),(()=>{oT(t,[0,0]),oT(j,!0)}))})),lT(mT(I,pT((e=>null!=e&&e.scrollTop>0)),fT(0)),C),iT(mT(g,xT(I),pT((([,e])=>null!=e))),(([,e])=>{e&&(oT(k,e.viewport),oT(D,e.item),oT(M,e.gap),e.scrollTop>0&&(oT(A,!0),cT(mT(c,vT(1)),(e=>{oT(A,!1)})),oT(l,{top:e.scrollTop})))})),lT(mT(k,gT((({height:e})=>e))),u),lT(mT(TT(OT(k,s_),OT(D,s_),OT(M,((e,t)=>e&&e.column===t.column&&e.row===t.row)),OT(c)),gT((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),F),lT(mT(TT(OT($),n,OT(M,l_),OT(D,s_),OT(k,s_),OT(_),OT(C),OT(A),OT(j),OT(B)),pT((([,,,,,,,e])=>!e)),gT((([e,[t,r],n,i,o,a,s,,l,c])=>{const{column:d,row:u}=n,{height:h,width:p}=i,{width:g}=o;if(0===s&&(0===e||0===g))return JE;if(0===p){const t=FO(c,e);return function(e){return{...e_,items:e}}(a_(t,t+Math.max(s-1,0),a))}const f=d_(g,p,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=f*r_((t+u)/(h+u)),b=f*t_((r+u)/(h+u))-1,b=i_(e-1,n_(b,f-1)),m=i_(b,n_(0,m))):(m=0,b=-1);const v=a_(m,b,a),{bottom:y,top:x}=u_(o,n,i,v),w=t_(e/f);return{bottom:y,itemHeight:h,items:v,itemWidth:p,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),lT(mT(_,pT((e=>null!==e)),gT((e=>e.length))),$),lT(mT(TT(k,D,S,M),pT((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),gT((([e,t,{items:r},n])=>{const{bottom:i,top:o}=u_(e,n,t,r);return[o,i]})),hT(aO)),t);const P=wT(!1);lT(mT(c,xT(P),gT((([e,t])=>t||0!==e))),P);const L=ST(mT(TT(S,$),pT((([{items:e}])=>e.length>0)),xT(P),pT((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),gT((([[,e]])=>e-1)),hT())),N=ST(mT(OT(S),pT((({items:e})=>e.length>0&&0===e[0].index)),fT(0),hT())),H=ST(mT(OT(S),xT(A),pT((([{items:e},t])=>e.length>0&&!t)),gT((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),hT(oO),yT(0)));lT(H,p.scrollSeekRangeChanged),lT(mT(T,xT(k,D,$,M),gT((([e,t,r,n,i])=>{const o=EO(e),{align:a,behavior:s,offset:l}=o;let c=o.index;"LAST"===c&&(c=n-1),c=n_(0,c,i_(n-1,c));let d=h_(t,i,r,c);return"end"===a?d=o_(d-t.height+r.height):"center"===a&&(d=o_(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=$T(mT(S,gT((e=>e.offsetBottom+e.bottom))),0);return lT(mT(x,gT((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:m,data:_,deviation:E,footerHeight:i,gap:M,headerHeight:o,increaseViewportBy:e,initialItemCount:C,itemDimensions:D,overscan:r,restoreStateFrom:I,scrollBy:a,scrollContainerState:s,scrollHeight:O,scrollTo:l,scrollToIndex:T,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:k,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...p,gridState:S,horizontalDirection:R,initialTopMostItemIndex:B,totalListHeight:W,...h,endReached:L,propsReady:f,rangeChanged:H,startReached:N,stateChanged:F,stateRestoreInProgress:A,...w}}),nT(YO,RT,RO,iE,TO,oE,FT));function d_(e,t,r){return n_(1,r_((e+r)/(r_(t)+r)))}function u_(e,t,r,n){const{height:i}=r;if(void 0===i||0===n.length)return{bottom:0,top:0};const o=h_(e,t,r,n[0].index);return{bottom:h_(e,t,r,n[n.length-1].index)+i,top:o}}function h_(e,t,r,n){const i=d_(e.width,r.width,t.column),o=r_(n/i),a=o*r.height+n_(0,o-1)*t.row;return a>0?a+t.row:a}const p_=kT((()=>{const e=wT((e=>`Item ${e}`)),t=wT({}),r=wT(null),n=wT("virtuoso-grid-item"),i=wT("virtuoso-grid-list"),o=wT(SE),a=wT("div"),s=wT(eT),l=(e,r=null)=>$T(mT(t,gT((t=>t[e])),hT()),r),c=wT(!1),d=wT(!1);return lT(OT(d),c),{components:t,computeItemKey:o,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),g_=kT((([e,t])=>({...e,...t})),nT(c_,p_)),f_=i.memo((function(){const t=C_("gridState"),r=C_("listClassName"),n=C_("itemClassName"),o=C_("itemContent"),a=C_("computeItemKey"),s=C_("isSeeking"),l=S_("scrollHeight"),c=C_("ItemComponent"),d=C_("ListComponent"),u=C_("ScrollSeekPlaceholder"),h=C_("context"),p=S_("itemDimensions"),g=S_("gap"),f=C_("log"),m=C_("stateRestoreInProgress"),b=S_("reportReadyState"),v=IT(i.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();p({height:e,width:t})}g({column:T_("column-gap",getComputedStyle(e).columnGap,f),row:T_("row-gap",getComputedStyle(e).rowGap,f)})}),[l,p,g,f]),!0,!1);return yE((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:r,ref:v,...jE(d,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const i=a(r.index,r.data,h);return s?e(u,{...jE(u,h),height:t.itemHeight,index:r.index,width:t.itemWidth},i):k(c,{...jE(c,h),className:n,"data-index":r.index,key:i},o(r.index,r.data,h))}))})})),m_=i.memo((function(){const t=C_("HeaderComponent"),r=S_("headerHeight"),n=C_("headerFooterTag"),o=IT(i.useMemo((()=>e=>{r(dO(e,"height"))}),[r]),!0,!1),a=C_("context");return t?e(n,{ref:o,children:e(t,{...jE(t,a)})}):null})),b_=i.memo((function(){const t=C_("FooterComponent"),r=S_("footerHeight"),n=C_("headerFooterTag"),o=IT(i.useMemo((()=>e=>{r(dO(e,"height"))}),[r]),!0,!1),a=C_("context");return t?e(n,{ref:o,children:e(t,{...jE(t,a)})}):null})),v_=({children:t})=>{const r=i.useContext(vE),n=S_("itemDimensions"),o=S_("viewportDimensions"),a=IT(i.useMemo((()=>e=>{o(e.getBoundingClientRect())}),[o]),!0,!1);return i.useEffect((()=>{r&&(o({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,o,n]),e("div",{ref:a,style:AE(!1),children:t})},y_=({children:t})=>{const r=i.useContext(vE),n=S_("windowViewportRect"),o=S_("itemDimensions"),a=C_("customScrollParent"),s=zT(n,a,!1);return i.useEffect((()=>{r&&(o({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,o]),e("div",{ref:s,style:AE(!1),children:t})},x_=i.memo((function({...r}){const n=C_("useWindowScroll"),i=C_("customScrollParent"),o=i||n?D_:k_,a=i||n?y_:v_,s=C_("context");return e(o,{...r,...jE(o,s),children:t(a,{children:[e(m_,{}),e(f_,{}),e(b_,{})]})})})),{Component:w_,useEmitter:$_,useEmitterValue:C_,usePublisher:S_}=mE(g_,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},x_),k_=LE({useEmitter:$_,useEmitterValue:C_,usePublisher:S_}),D_=NE({useEmitter:$_,useEmitterValue:C_,usePublisher:S_});function T_(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,_T.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const O_=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),E_=({children:t})=>{const[r,n]=a(-1);return e(O_.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},__=M.div`
    overflow: hidden;
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
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
`,M_=M.div`
    background: transparent;
    padding: ${gc["spacing-8"]};
`,F_=M.ul`
    list-style-type: none;
`,I_=M.li`
    display: flex;
    align-items: flex-start;
    gap: ${gc["spacing-8"]};
    padding: ${gc["spacing-12"]} ${gc["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?F`
                background: ${dc["bg-hover"]};
            `:e.$active?F`
                background: ${dc["bg-hover-subtle"]};
            `:void 0}
`,A_=M(Ue)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${dc["icon-selected"]};
`,B_=M.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,j_=M(Ve)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${dc["icon-selected"]};
`,z_=M(Ye)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${dc["icon-primary-subtlest"]};
`,R_=M.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,P_=M(Jp)`
    cursor: pointer;
    overflow: hidden;
    color: ${dc["text-primary"]};
    font-size: inherit;
`,L_=M(P_)`
    ${uc["body-baseline-semibold"]}
`,N_=M(P_)`
    ${uc["body-md-semibold"]}
    padding: ${gc["spacing-8"]} ${gc["spacing-8"]};
`,H_=M.div`
    width: 100%;
    display: flex;
    padding: ${gc["spacing-12"]} ${gc["spacing-16"]};
    align-items: center;
`,W_=M(z)`
    margin-right: ${gc["spacing-4"]};
    color: ${dc["icon-error"]};
    height: 1em;
    width: 1em;
`,Y_=M(Xc)`
    margin-right: ${gc["spacing-8"]};
    color: ${dc.icon};
`,V_=M.div`
    background: ${dc["bg-strong"]};
    border-radius: ${fc.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
`,U_=M.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${gc["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${gc["spacing-8"]} ${gc["spacing-16"]}
              `:F`10px ${gc["spacing-16"]}`};
`,K_=M(Qp)`
    flex: 1;
`,X_=M(Le)`
    color: ${dc.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,q_=M(kc)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${gc["spacing-8"]};
    margin-left: -${gc["spacing-8"]};
    color: ${dc.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,G_=p(((r,n)=>{var{value:i,variant:o,onClear:a}=r,s=dt(r,["value","variant","onClear"]);return t(V_,{$variant:o,children:[t(U_,{$variant:o,children:[e(X_,{"aria-hidden":!0}),e(K_,Object.assign({ref:n,value:i,$variant:o},s))]}),i&&e(q_,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(je,{"aria-hidden":!0})})]})})),Z_=({listItems:n,multiSelect:i,selectedItems:s,disableItemFocus:l,itemsLoadState:c="success",itemTruncationType:d="end",itemMaxLines:h=2,labelDisplayType:p="inline",variant:m="default",listboxId:b,width:v,topScrollItem:y,onSelectItem:x,onSelectAll:w,onDismiss:$,onRetry:C,valueExtractor:S,listExtractor:k,renderListItem:D,renderCustomCallToAction:T,enableSearch:O,hideNoResultsDisplay:E,searchPlaceholder:_="Search",searchFunction:M,onSearch:F})=>{const{focusedIndex:I,setFocusedIndex:A}=f(O_),[B,j]=a(""),[z,R]=a(null!=n?n:[]),P=vu(c),L=mu(),N=o(null),H=o(null),W=o([]),Y=o(null),V=o(null),U=e=>{const t=k?k(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},K=g((e=>!!Fk(s,(t=>Ak(t,e)))),[s]),X=pu((()=>null==M?void 0:M(B))),q=pu((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=U(e),n=B.trim().toLowerCase();return t.includes(n)||r&&r.includes(n)})))),G=(e,t)=>{A(t),null==x||x(e,(e=>S?S(e):e)(e))},Z=e=>{const t=e.target.value;j(t),null==F||F()},Q=()=>{var e;j(""),null===(e=Y.current)||void 0===e||e.focus(),null==F||F()},J=()=>{null==C||C()};gu("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),I<z.length-1){const e=I+1;null===(t=W.current[e])||void 0===t||t.focus(),A(e)}break;case"ArrowUp":if(e.preventDefault(),I>0){const e=I-1;null===(r=W.current[e])||void 0===r||r.focus(),A(e)}else 0===I&&Y.current&&(Y.current.focus(),A(-1));break;case"Space":case"Enter":document.activeElement===W.current[I]&&(e.preventDefault(),z[I]&&G(z[I],I))}})),u((()=>{var e;if(!y)return void(null===(e=V.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(y);V.current&&-1!==e&&(V.current.scrollToIndex({index:e}),A(e))}),0);return()=>clearTimeout(t)}),[W,n,A,y]),u((()=>{var e,t,r;if(L)return;if(l||!n)return;const i=n.findIndex((e=>K(e)));Y.current?(A(-1),setTimeout((()=>{var e;return null===(e=Y.current)||void 0===e?void 0:e.focus()}),200)):I>0?(null===(e=V.current)||void 0===e||e.scrollToIndex({index:I,align:"center"}),setTimeout((()=>{var e;return null===(e=W.current[I])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=V.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),A(i),setTimeout((()=>{var e;return null===(e=W.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(r=V.current)||void 0===r||r.scrollToIndex({index:0}),A(0),setTimeout((()=>{var e;return null===(e=W.current[0])||void 0===e?void 0:e.focus()}),200))}),[K,l,I,n,L,A]),u((()=>{L&&P&&(l||"success"===c&&Y.current&&(A(-1),Y.current.focus()))}),[L,P,c,A,l]),u((()=>{var e;R(null!==(e=""===B?n:M?X():q())&&void 0!==e?e:[])}),[X,q,n,M,B]);const ee=t=>i?e(t?j_:z_,{"aria-hidden":!0}):t?e(A_,{"aria-hidden":!0}):e(B_,{}),te=(t,r)=>{const{title:n,secondaryLabel:i}=U(t);return e(WD,{displayType:p,label:n,maxLines:h,selected:r,sublabel:i,truncationType:d,variant:m})},re=(n,o)=>{if(!C||"success"===c){const a=K(n),s=o===I;return e(I_,{"aria-selected":a,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>G(n,o),onMouseEnter:()=>(e=>{A(e)})(o),ref:e=>{W.current[o]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,children:D?D(n,{selected:a}):t(r,{children:[ee(a),te(n,a)]})},((e,t)=>`item_${t}__${S?S(e):e}`)(n,o))}},ne=()=>{if(s&&i&&z.length>0&&!B&&"success"===c)return e(R_,{children:e(N_,{onClick:w,type:"button",$variant:m,children:0===s.length?"Select all":"Clear all"})})},ie=()=>{if(!E&&(B||!O)&&0===z.length&&"success"===c)return t(H_,{"data-testid":"list-no-results",children:[e(W_,{"data-testid":"no-result-icon"}),"No results found."]})},oe=()=>{if(C&&"loading"===c)return t(H_,{"data-testid":"list-loading",children:[e(Y_,{}),"Loading..."]})},ae=()=>{if(C&&"fail"===c)return t(H_,{"data-testid":"list-fail",children:[e(W_,{"data-testid":"load-error-icon"}),"Failed to load. ",e(L_,{onClick:J,type:"button",$variant:m,children:"Try again."})]})};return t(__,{"data-testid":"dropdown-container",ref:N,$width:v,$variant:m,children:[t(M_,{ref:H,"data-testid":"dropdown-list",children:[(()=>{if((O||M)&&"success"===c)return e(G_,{ref:Y,onChange:Z,value:B,placeholder:_,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Q,variant:m})})(),ne(),ie(),oe(),ae(),e(F_,{role:"listbox",id:b,children:e(QE,{ref:V,style:{height:"100%"},data:z,customScrollParent:null!==(se=N.current)&&void 0!==se?se:void 0,itemContent:(e,t)=>re(t,e)})})]}),(()=>{if(T)return e("div",{"data-testid":"custom-cta",children:T($,z)})})()]});var se},Q_=M(Jp)`
    display: flex;
    align-items: center;
    gap: ${gc["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${gc["spacing-16"]};

    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,J_=M.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${hc["duration-250"]} ${hc["ease-default"]};

    svg {
        color: ${dc.icon};
        height: 1em;
        width: 1em;
    }
`,eM=p((({children:r,disabled:n,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},c)=>t(Q_,{ref:c,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l,children:[r,!s&&e(J_,{$expanded:i,$variant:l,children:e(fe,{"aria-hidden":!0})})]})));var tM=Symbol.for("immer-nothing"),rM=Symbol.for("immer-draftable"),nM=Symbol.for("immer-state"),iM="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function oM(e,...t){if("production"!==process.env.NODE_ENV){const r=iM[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var aM=Object.getPrototypeOf;function sM(e){return!!e&&!!e[nM]}function lM(e){return!!e&&(dM(e)||Array.isArray(e)||!!e[rM]||!!e.constructor?.[rM]||fM(e)||mM(e))}var cM=Object.prototype.constructor.toString();function dM(e){if(!e||"object"!=typeof e)return!1;const t=aM(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===cM}function uM(e,t){0===hM(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function hM(e){const t=e[nM];return t?t.type_:Array.isArray(e)?1:fM(e)?2:mM(e)?3:0}function pM(e,t){return 2===hM(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function gM(e,t,r){const n=hM(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function fM(e){return e instanceof Map}function mM(e){return e instanceof Set}function bM(e){return e.copy_||e.base_}function vM(e,t){if(fM(e))return new Map(e);if(mM(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=dM(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[nM];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(aM(e),t)}{const t=aM(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function yM(e,t=!1){return wM(e)||sM(e)||!lM(e)||(hM(e)>1&&(e.set=e.add=e.clear=e.delete=xM),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>yM(t,!0)))),e}function xM(){oM(2)}function wM(e){return Object.isFrozen(e)}var $M,CM={};function SM(e){const t=CM[e];return t||oM(0,e),t}function kM(){return $M}function DM(e,t){t&&(SM("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function TM(e){OM(e),e.drafts_.forEach(_M),e.drafts_=null}function OM(e){e===$M&&($M=e.parent_)}function EM(e){return $M={drafts_:[],parent_:$M,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function _M(e){const t=e[nM];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function MM(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[nM].modified_&&(TM(t),oM(4)),lM(e)&&(e=FM(t,e),t.parent_||AM(t,e)),t.patches_&&SM("Patches").generateReplacementPatches_(r[nM].base_,e,t.patches_,t.inversePatches_)):e=FM(t,r,[]),TM(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==tM?e:void 0}function FM(e,t,r){if(wM(t))return t;const n=t[nM];if(!n)return uM(t,((i,o)=>IM(e,n,t,i,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return AM(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),uM(i,((i,a)=>IM(e,n,t,i,a,r,o))),AM(e,t,!1),r&&e.patches_&&SM("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function IM(e,t,r,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===r&&oM(5),sM(i)){const a=FM(e,i,o&&t&&3!==t.type_&&!pM(t.assigned_,n)?o.concat(n):void 0);if(gM(r,n,a),!sM(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(lM(i)&&!wM(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;FM(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||AM(e,i)}}function AM(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&yM(t,r)}var BM={get(e,t){if(t===nM)return e;const r=bM(e);if(!pM(r,t))return function(e,t,r){const n=RM(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!lM(n)?n:n===zM(e.base_,t)?(LM(e),e.copy_[t]=NM(n,e)):n},has:(e,t)=>t in bM(e),ownKeys:e=>Reflect.ownKeys(bM(e)),set(e,t,r){const n=RM(bM(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=zM(bM(e),t),i=n?.[nM];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||pM(e.base_,t)))return!0;LM(e),PM(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==zM(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,LM(e),PM(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=bM(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){oM(11)},getPrototypeOf:e=>aM(e.base_),setPrototypeOf(){oM(12)}},jM={};function zM(e,t){const r=e[nM];return(r?bM(r):e)[t]}function RM(e,t){if(!(t in e))return;let r=aM(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=aM(r)}}function PM(e){e.modified_||(e.modified_=!0,e.parent_&&PM(e.parent_))}function LM(e){e.copy_||(e.copy_=vM(e.base_,e.scope_.immer_.useStrictShallowCopy_))}uM(BM,((e,t)=>{jM[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),jM.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&oM(13),jM.set.call(this,e,t,void 0)},jM.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&oM(14),BM.set.call(this,e[0],t,r,e[0])};function NM(e,t){const r=fM(e)?SM("MapSet").proxyMap_(e,t):mM(e)?SM("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:kM(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=BM;r&&(i=[n],o=jM);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:kM()).drafts_.push(r),r}function HM(e){if(!lM(e)||wM(e))return e;const t=e[nM];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=vM(e,t.scope_.immer_.useStrictShallowCopy_)}else r=vM(e,!0);return uM(r,((e,t)=>{gM(r,e,HM(t))})),t&&(t.finalized_=!1),r}var WM=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&oM(6),void 0!==r&&"function"!=typeof r&&oM(7),lM(e)){const i=EM(this),o=NM(e,void 0);let a=!0;try{n=t(o),a=!1}finally{a?TM(i):OM(i)}return DM(i,r),MM(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===tM&&(n=void 0),this.autoFreeze_&&yM(n,!0),r){const t=[],i=[];SM("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}oM(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const i=this.produce(e,t,((e,t)=>{r=e,n=t}));return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){lM(e)||oM(8),sM(e)&&(e=function(e){sM(e)||oM(10,e);return HM(e)}(e));const t=EM(this),r=NM(e,void 0);return r[nM].isManual_=!0,OM(t),r}finishDraft(e,t){const r=e&&e[nM];r&&r.isManual_||oM(9);const{scope_:n}=r;return DM(n,t),MM(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=SM("Patches").applyPatches_;return sM(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},YM=WM.produce;WM.produceWithPatches.bind(WM),WM.setAutoFreeze.bind(WM),WM.setUseStrictShallowCopy.bind(WM),WM.applyPatches.bind(WM),WM.createDraft.bind(WM),WM.finishDraft.bind(WM);var VM=RC,UM=mS,KM=oC,XM=Xo,qM=NC,GM=lC,ZM=IC,QM=CC,JM=Object.prototype.hasOwnProperty;var eF=function(e){if(null==e)return!0;if(qM(e)&&(XM(e)||"string"==typeof e||"function"==typeof e.splice||GM(e)||QM(e)||KM(e)))return!e.length;var t=UM(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(ZM(e))return!VM(e).length;for(var r in e)if(JM.call(e,r))return!1;return!0},tF=Uo(eF);const rF=(e,t,r)=>{const n=YM(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n],o=iF(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}}));return n},nF=(e,t)=>{const[r,...n]=t;if(tF(e)||tF(r))return;const i=e.find((e=>e.key===r));return i&&n.length?nF(i.subItems,n):i},iF=e=>e.join(","),oF=e=>new Set(e.map((e=>e.join(",")))),aF=M.li`
    display: ${e=>e.$visible?"flex":"none"};
`,sF=M.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${gc["spacing-8"]};
    padding: ${gc["spacing-12"]} ${gc["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&F`
            background: ${dc["bg-hover"]};
        `}
`,lF=M.div`
    height: 1px;
    width: calc((1lh + ${gc["spacing-8"]}) * ${e=>e.$level});
`,cF=M.div`
    width: 1lh;
    height: 1lh;
    color: ${dc["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${hc["duration-350"]}
            ${hc["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,dF=M.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${gc["spacing-8"]};
`,uF=M.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":gc["spacing-16"]};

    display: flex;
    justify-content: center;
`,hF=M(Xe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${dc["icon-selected"]};
`,pF=({listItems:r,multiSelect:n=!1,selectedKeyPaths:i,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:c=2,variant:d="default",listboxId:h,width:p,mode:g="default",selectableCategory:f,onSelectItem:b,onSelectAll:v,onRetry:y,enableSearch:x,hideNoResultsDisplay:w,searchPlaceholder:$="Search",onSearch:C})=>{const S=n||f,[k,D]=a(""),T=k.toLowerCase().trim(),[O,E]=a(!1),_=o(null),M=o(null),F=o([]),I=o(null),A=mu(),[B,j]=a([]),[z,R]=a([]),P=O?z:B,L=m((()=>{let e=0;for(const t of B)t.level>e&&(e=t.level);return e}),[B]),[N,H]=a(0),[W,Y]=a([]),[V,U]=a(0),K=e=>{const t=e.target.value;D(t),""===t?E(!1):t.trim().length>=3&&E(!0),null==C||C()},X=()=>{var e;D(""),E(!1),null===(e=I.current)||void 0===e||e.focus(),null==C||C()},q=()=>{null==y||y()},G=()=>{if(0===i.size){const e=[],t=[];B.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==v||v(e,t)}else null==v||v([],[])},Z=pu(((e,t)=>((e,t,r,n,i)=>{const o=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var h,p;const g=s?s.level+1:0,f=s?[...s.keyPath,d.key]:[d.key],m=iF(f),b={item:d,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:f,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:g,visible:0===g||i||(null==s?void 0:s.expanded)||!1,expanded:i,checked:t.has(m),hasSubItems:!!(null===(h=d.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(p=d.subItems)||void 0===p?void 0:p.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,i,n,T,t))),Q=pu((e=>{return i.size?(t=Z(e,!1),YM(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>YM(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),o=e[r].keyPath.slice(0,i.length);Ak(i,o)&&(n.visible=!0)}return e})))(Z(e,!1));var t})),J=pu((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(T))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),ee=pu((()=>{j((e=>rF(e,i,n))),O&&R((e=>rF(e,i,n)))})),te=(e,t,r)=>{const n=((e,t,r)=>YM(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!Ak(n,a))break;t.visible=r&&o.expanded&&o.visible}})))(P,e,t);H(e),U(r),O?R(n):j(n)};gu("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(P,(e=>e.visible),N+1);r&&(U((e=>e+1)),H(r.index),null===(t=F.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(P,(e=>e.visible),N-1);t?(U((e=>e-1)),H(t.index),null===(r=F.current[t.index])||void 0===r||r.focus()):0===V&&I.current&&(I.current.focus(),U(-1),H(-1));break}case"ArrowRight":e.preventDefault(),te(N,!0,V);break;case"ArrowLeft":e.preventDefault(),te(N,!1,V);break;case"Space":if(document.activeElement===F.current[N]){e.preventDefault();const t=P[N];if(t.hasSubItems&&!S)return;null==b||b(t)}}})),u((()=>{let e=[];"default"===g?e=Q(r):"expand"===g?e=Z(r,!0):"collapse"===g&&(e=Z(r,!1)),j(e)}),[Z,Q,r,g]),u((()=>{Y(P.filter((e=>e.visible)))}),[O,P]),u((()=>{ee()}),[n,i,ee]),u((()=>{if(O&&k.trim().length>=3){const e=J(r),t=(e=>YM(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(Z(e,!1));R(t)}}),[J,Z,r,O,k]),u((()=>{A||(I.current?(H(-1),U(-1),setTimeout((()=>{var e;return null===(e=I.current)||void 0===e?void 0:e.focus()}),200)):F.current[N]?setTimeout((()=>{var e;return null===(e=F.current[N])||void 0===e?void 0:e.focus()}),200):(H(0),U(0),setTimeout((()=>{var e;return null===(e=F.current[0])||void 0===e?void 0:e.focus()}),200)))}),[N,V,A]);const re=()=>{if(x&&"success"===s)return e(G_,{ref:I,onChange:K,value:k,placeholder:$,"data-testid":"search-input","aria-label":"Enter text to search",onClear:X,variant:d})},ne=()=>{if(n&&!O&&B.length>0&&"success"===s)return e(R_,{children:e(N_,{onClick:G,type:"button",$variant:d,children:0===i.size?"Select all":"Clear all"})})},ie=()=>{if(!w&&O&&0===z.length&&"success"===s)return t(H_,{"data-testid":"list-no-results",children:[e(W_,{"data-testid":"no-result-icon"}),"No results found."]})},oe=()=>{if(y&&"loading"===s)return t(H_,{"data-testid":"list-loading",children:[e(Gc,{}),"Loading..."]})},ae=()=>{if(y&&"fail"===s)return t(H_,{"data-testid":"list-fail",children:[e(W_,{"data-testid":"load-error-icon"}),"Failed to load. ",e(L_,{onClick:q,type:"button",$variant:d,children:"Try again."})]})},se=t=>{if(n)switch(t.checked){case"mixed":return e(hF,{"aria-hidden":!0});case!0:return e(j_,{"aria-hidden":!0});default:return e(z_,{"aria-hidden":!0})}if(!t.hasSubItems)return e(uF,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(A_,{"aria-hidden":!0})})},le=(r,i)=>{const{level:o,visible:a,expanded:s,keyPath:d,checked:u,hasSubItems:h,indexInParent:p,parentSetSize:g}=r,f=r.index,m=V===i,v=h&&!S;return t(aF,{$visible:a,children:[L>0&&e(lF,{$level:o}),L>0&&!h&&n&&e(dF,{}),t(sF,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":o+1,"aria-posinset":p+1,"aria-setsize":g,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),v?te(f,!s,i):((e,t)=>{U(t),H(e),null==b||b(P[e])})(f,i)},onMouseEnter:()=>((e,t)=>{H(t.index),U(e)})(i,r),ref:e=>F.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:v,children:[h&&e(cF,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),te(f,!s,i)},$expanded:s,children:e(Ke,{})}),se(r),e(WD,{bold:h,searchTerm:O?T:void 0,label:r.item.label,selected:!!u,truncationType:l,maxLines:c})]})]},`[${d.join("---")}]`)};return e(__,{"data-testid":"dropdown-container",ref:_,$width:p,$variant:d,children:t(M_,{"data-testid":"nested-dropdown-list",children:[re(),ne(),ie(),oe(),ae(),e("div",{"aria-multiselectable":n,id:h,ref:M,role:"tree",children:e(QE,{style:{height:"100%"},customScrollParent:null!==(ce=_.current)&&void 0!==ce?ce:void 0,data:W,itemContent:(e,t)=>le(t,e)})})]})});var ce},gF=({selectedOptions:t,placeholder:r="Select",options:n,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:p,searchPlaceholder:g,valueExtractor:f,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:k,onBlur:D,variant:T="default",readOnly:O,alignment:E,dropdownZIndex:_})=>{const[M,F]=a(t||[]),[I,A]=a(!1),[B,j]=a(!1),[z]=a((()=>uu.generate())),R=o(null),P=o(null);u((()=>{F(t||[])}),[t]);const L=()=>{M&&M.length>0?(F([]),U([])):(F(n),U(n))},N=(e,t)=>{const r=[...M],n=Mk(M,(e=>(f?f(e):e)===t));n>-1?r.splice(n,1):r.push(e),F(r),U(r)},H=()=>{I&&(A(!1),V(!1))},W=()=>{B||I||j(!0)},Y=e=>{B&&!I&&R.current&&!R.current.contains(e.relatedTarget)&&(j(!1),null==D||D())},V=e=>{!e&&y&&y(),e&&v&&v()},U=e=>{b&&b(e)};return e(E_,{children:e(jg,{enabled:!O&&!i,isOpen:I,renderElement:()=>e(Gp,{className:l,"data-testid":c,id:d,ref:R,tabIndex:-1,onFocus:W,onBlur:Y,$focused:B,$disabled:i,$readOnly:O,$error:s,children:e(eM,{ref:P,disabled:i,expanded:I,listboxId:z,popupRole:"listbox",readOnly:O,variant:T,children:e(Og,{$disabled:i,children:M&&0!==M.length?e(Eg,{$variant:T,children:n&&M.length===n.length?"All selected":`${M.length} selected`}):e(_g,{truncateType:$,$variant:T,children:r})})})}),renderDropdown:({elementWidth:t})=>e(Z_,{listboxId:z,listItems:n,onSelectItem:N,onDismiss:H,valueExtractor:f,listExtractor:m,enableSearch:h,searchFunction:p,searchPlaceholder:g,multiSelect:!0,selectedItems:M,onSelectAll:L,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:k,variant:T,width:t}),onOpen:()=>{A(!0),V(!0),j(!0)},onClose:e=>{A(!1),V(!1),"click"!==e&&(j(!1),null==D||D())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1),V(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:_})})},fF=(e,t)=>{const[r,...n]=t;if(tF(e)||!r)return;const i=e.find((e=>e.key===r));return i?n.length?fF(i.subItems,n):i:void 0},mF=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...mF(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},bF=({placeholder:t="Select",options:r,disabled:n,error:i,className:s,"data-testid":l,id:c,selectedKeyPaths:d,mode:h,valueToStringFunction:p,enableSearch:g,searchPlaceholder:f,hideNoResultsDisplay:m,readOnly:b,onSearch:v,onSelectOptions:y,onShowOptions:x,onHideOptions:w,onRetry:$,onBlur:C,optionsLoadState:S="success",optionTruncationType:k="end",variant:D="default",alignment:T,dropdownZIndex:O})=>{const E=r,[_,M]=a(d?oF(d):new Set),[F,I]=a([]),[A,B]=a(!1),[j,z]=a(!1),[R]=a((()=>uu.generate())),P=o(null),L=o(null),N=o(null);u((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const i=t[n],o=fF(e,i);o&&r.push({value:o.value,label:o.label,keyPath:i})}return r})(E,e);M(oF(e)),I(t)}),[d,E]);const H=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));M(oF(e)),I(r),q(e,r)},W=e=>{const t=G(e),r=t.map((e=>e.keyPath));I(t),M(oF(r)),q(r,t)},Y=()=>{j||A||z(!0)},V=e=>{j&&!A&&P.current&&!P.current.contains(e.relatedTarget)&&(z(!1),null==C||C())},U=()=>{if(F.length>1)return`${F.length} selected`;const{label:e,value:t}=F[0];return p?p(t):e},K=e=>{if("middle"===k){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),hu.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&w&&w(),e&&x&&x()},q=(e,t)=>{if(y){const r=t.map((e=>e.value));y(e,r)}},G=e=>{if(!0===e.checked)return F.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!Ak(e.keyPath,r)}));{const t=[...F],r=e.hasSubItems?((e,t)=>{const r=fF(e,t);return r&&r.subItems?mF(r.subItems,t):[]})(E,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{F.find((t=>Ak(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(jg,{enabled:!b&&!n,isOpen:A,renderElement:()=>e(Gp,{className:s,"data-testid":l,id:c,ref:P,tabIndex:-1,onFocus:Y,onBlur:V,$focused:j,$disabled:n,$readOnly:b,$error:i,children:e(eM,{ref:L,disabled:n,expanded:A,listboxId:R,popupRole:"tree",readOnly:b,variant:D,children:e(Og,{ref:N,$disabled:n,children:tF(F)?e(_g,{truncateType:k,children:t}):e(Eg,{truncateType:k,children:K(U())})})})}),renderDropdown:({elementWidth:t})=>e(pF,{listboxId:R,listItems:E,multiSelect:!0,selectedKeyPaths:_,itemsLoadState:S,itemTruncationType:k,enableSearch:g,searchPlaceholder:f,hideNoResultsDisplay:m,onSelectItem:W,onSelectAll:H,onRetry:$,onSearch:v,variant:D,mode:h,width:t}),onOpen:()=>{B(!0),X(!0),z(!0)},onClose:e=>{B(!1),X(!1),"click"!==e&&(z(!1),null==C||C())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),B(!1),X(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:O})},vF=({placeholder:t="Select",options:r,disabled:n,error:i,className:s,"data-testid":l,id:c,selectedKeyPath:d,mode:h,valueToStringFunction:p,enableSearch:g,searchPlaceholder:f,selectableCategory:m,hideNoResultsDisplay:b,readOnly:v,onBlur:y,onSearch:x,onSelectOption:w,onShowOptions:$,onHideOptions:C,onRetry:S,optionsLoadState:k="success",optionTruncationType:D="end",variant:T="default",alignment:O,dropdownZIndex:E})=>{const _=r,[M,F]=a(d?oF([d]):new Set),[I,A]=a(),[B,j]=a(!1),[z,R]=a(!1),[P]=a((()=>uu.generate())),L=o(null),N=o(null),H=o(null);u((()=>{F(d?oF([d]):new Set);const e=nF(_,d||[]);A(null!=e?e:void 0)}),[d,_]);const W=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;F(oF([r])),A({label:n,value:i}),j(!1),X(!1),null===(t=N.current)||void 0===t||t.focus(),null==w||w(r,i)},Y=()=>{z||B||R(!0)},V=e=>{z&&!B&&L.current&&!L.current.contains(e.relatedTarget)&&(R(!1),null==y||y())},U=()=>{if(!I)return"";const{label:e,value:t}=I;return p?p(t):e},K=e=>{if("middle"===D){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),hu.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&C&&C(),e&&$&&$()};return e(jg,{enabled:!v&&!n,isOpen:B,renderElement:()=>e(Gp,{className:s,"data-testid":l,id:c,ref:L,tabIndex:-1,onFocus:Y,onBlur:V,$focused:z,$disabled:n,$readOnly:v,$error:i,children:e(eM,{ref:N,disabled:n,expanded:B,listboxId:P,popupRole:"tree",readOnly:v,variant:T,children:e(Og,{ref:H,$disabled:n,children:tF(I)?e(_g,{truncateType:D,children:t}):e(Eg,{truncateType:D,children:K(U())})})})}),renderDropdown:({elementWidth:t})=>e(pF,{listboxId:P,listItems:_,selectedKeyPaths:M,selectableCategory:m,itemsLoadState:k,itemTruncationType:D,enableSearch:g,searchPlaceholder:f,hideNoResultsDisplay:b,onSelectItem:W,onRetry:S,onSearch:x,variant:T,mode:h,width:t}),onOpen:()=>{j(!0),X(!0),R(!0)},onClose:e=>{j(!1),X(!1),"click"!==e&&(R(!1),null==y||y())},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),j(!1),X(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:E})};var yF=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r};var xF=function(e){return function(t,r,n){for(var i=-1,o=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}},wF=xF(),$F=VC;var CF=NC;var SF=function(e,t){return function(r,n){if(null==r)return r;if(!CF(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Object(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}((function(e,t){return e&&wF(e,t,$F)}));var kF=yF,DF=SF,TF=vk,OF=function(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r},EF=Xo;var _F=Uo((function(e,t,r){var n=EF(e)?kF:OF,i=arguments.length<3;return n(e,TF(t),r,i,DF)}));const MF=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],FF=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var IF;!function(e){e.getCountries=()=>[].concat(...MF.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:FF("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,i=n.split(" ");i.shift();const o=i.join(" ");return _F(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(IF||(IF={}));const AF=t=>{var{onChange:r,value:n,allowClear:i,onClear:s,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:p,enableSearch:g,onHideOptions:f,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=dt(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=a(IF.getCountries()),[w,$]=a(void 0),[C,S]=a(""),k=o(null),D=bu({ref:k,formatter:e=>IF.formatNumber(e.replace(/[^0-9]/g,""),w)});u((()=>{const e=x.filter((e=>e.countryCode===BF(null==n?void 0:n.countryCode)))[0];$(e),S(IF.formatNumber(null==n?void 0:n.number,e))}),[n]);const T=e=>{E(C,e),r&&O(C,e)},O=(e,t)=>{const n=IF.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&jF(t.countryCode)})},E=(e,t)=>{S(IF.formatNumber(e,t)),$(t)};return e(yD,Object.assign({ref:k,value:C,onChange:()=>{const e=D();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),E(t,w),r&&O(t,w)},allowClear:i&&!!C,onClear:()=>{s?s():S("")},onBlur:l,error:c,placeholder:b,addon:d?{type:"label",attributes:{value:jF(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:h,options:x,selectedOption:w,enableSearch:g,searchPlaceholder:p,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:jF(e.countryCode)}),onSelectOption:T,onHideOptions:f,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},BF=e=>e?e.replace("+",""):"",jF=e=>e?e.includes("+")?e:`+${e}`:"",zF=({className:n,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:h=!1,disabled:p=!1,error:f,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=a((()=>s?W(s):"")),[$,C]=a((()=>s?W(s):"")),[S,k]=a([]),[D,T]=a(!0),[O,E]=a(!1),[_,M]=a(!!s),[F,I]=a(s),A=o(c),B=e=>ut(void 0,void 0,void 0,(function*(){E(!1),T(!0);try{const t=yield A.current(e);C(e),k(t),T(!1)}catch(e){E(!0)}})),j=g(ip((e=>B(e)),500,{leading:!1,trailing:!0}),[]);u((()=>{A.current=c}),[c]),u((()=>{x&&x.length>=l&&x!==$?j(x):j.cancel(),""===x&&F&&(y&&y(void 0,void 0),P(),I(void 0)),s&&x!==W(s)&&M(!1)}),[x,s]),u((()=>{w(s?W(s):""),P(s),I(s)}),[s]);const z=e=>{w(e.target.value)},R=(e,t)=>{y&&y(e,t)},P=e=>{C(e?W(e):""),M(!!e),k([]),T(!0)},L=()=>{w(""),y&&y(void 0,void 0),P()},N=()=>{_||F?(P(F),w(W(F)),y&&y(F,Y(F)),I(F)):L()},H=()=>!!x&&x.length>=l&&!_,W=e=>e?v?v(e):e.toString():"",Y=e=>{if(e)return m?m(e):e},V=()=>e(o$,{type:"text",value:x,onChange:z,placeholder:d,readOnly:h,disabled:p,allowClear:!0,onClear:L,styleType:"no-border",onBlur:x.length<l?N:void 0});return t(Mg,{className:n,show:H(),error:f&&!H(),disabled:p,readOnly:h,testId:i,onBlur:N,children:[e(h?r:Sg,{children:V()}),!h&&H()&&e(Tg,{}),e(iD,{listItems:S,onSelectItem:R,valueExtractor:m,listExtractor:b,itemsLoadState:O?"fail":D?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>B(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},RF=M.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,PF=M(t$)`
    position: absolute;
    right: 0;
    padding-left: ${gc["spacing-8"]};
    margin-right: 0;
`,LF=M(Cg)`
    // space for clear icon
    padding-right: calc(1.25rem + ${gc["spacing-16"]});
`,NF=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:s,disabled:l,className:c,readOnly:d,error:h,"data-testid":p,id:g,enableSearch:f=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:k,onRetry:D,optionsLoadState:T={from:"success",to:"success"},optionTruncationType:O="middle",renderCustomSelectedOption:E,renderListItem:_,renderCustomCallToAction:M}=r,F=dt(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[I,A]=a(),[B,j]=a(),z=o(null),R={from:o(null),to:o(null)},[P,L]=a("none");u((()=>{A(null==n?void 0:n.from),j(null==n?void 0:n.to)}),[n]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||L("from"===e?"from":"to"===e&&I?"to":"from")},H=e=>{var t;const r="from"===e?I:B;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===O){let r=0;return R[e]&&R[e].current&&(r=R[e].current.getBoundingClientRect().width),hu.truncateOneLine(t,r,120,8)}return t},Y=e=>{!e&&k&&k(),e&&S&&S()},V=t=>{const r="from"===t?I:B;return r?E?E(r):e(Eg,{truncateType:O,children:W(t,H(t))}):e(_g,{truncateType:O,children:W(t,i[t]||"")})},U=t=>e(Og,{onClick:N(t),ref:R[t],$disabled:l,children:V(t)});return t(Mg,{show:"none"!==P,error:h&&!("none"!==P),disabled:l,readOnly:d,testId:p,onBlur:()=>{Y(!1),L("none"),I&&B||(j(void 0),A(void 0))},className:c,children:[t(RF,{children:[e(LF,Object.assign({type:"button","data-testid":g||"selector",disabled:l,ref:z,onClick:N()},F,{children:t(af,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[U("from"),U("to")]})})),"none"===P&&I&&B&&!d&&!l&&e(PF,{onClick:e=>{e.stopPropagation(),A(void 0),j(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e(r$,{"aria-hidden":!0})})]}),"none"!==P&&e(Tg,{}),(()=>{if("none"===P)return null;const t=s[P];if(t&&t.length>0){const r="from"===P?I:B;return e(iD,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):j(e),Y(!1),z&&(null===(n=z.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(j(void 0),L("to"),Y(!0)):L("none")})(e,t,P),onDismiss:()=>(()=>{var e;L("none"),Y(!1),z&&(null===(e=z.current)||void 0===e||e.focus()),I&&B||(j(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:f,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:r?[r]:[],onRetry:D,itemsLoadState:T[P],itemTruncationType:O,renderListItem:_,renderCustomCallToAction:M})}return null})()]})},HF=({selectedOption:t,placeholder:r="Select",options:n,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:p,searchPlaceholder:g,valueExtractor:f,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:k,renderListItem:D,hideNoResultsDisplay:T,renderCustomCallToAction:O,onBlur:E,variant:_="default",readOnly:M,alignment:F,dropdownZIndex:I})=>{const[A,B]=a(t),[j,z]=a(!1),[R,P]=a(!1),[L]=a((()=>uu.generate())),N=o(null),H=o(null),W=o(null);u((()=>{B(t)}),[t]);const Y=(e,t)=>{var r;null===(r=H.current)||void 0===r||r.focus(),B(e),z(!1),G(!1),null==y||y(e,t)},V=()=>{j&&(z(!1),G(!1))},U=()=>{R||j||P(!0)},K=e=>{R&&!j&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==E||E())},X=()=>{var e;if(!A)return"";if(v)return v(A);if(f){const t=f(A);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return A.toString()},q=e=>{if("middle"===S){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),hu.truncateOneLine(e,t,120,8)}return e},G=e=>{e?null==x||x():null==w||w()};return e(E_,{children:e(jg,{enabled:!M&&!i,isOpen:j,renderElement:()=>e(Gp,{className:l,"data-testid":c,id:d,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:R,$disabled:i,$readOnly:M,$error:s,children:e(eM,{ref:H,disabled:i,expanded:j,listboxId:L,popupRole:"listbox",readOnly:M,variant:_,children:e(Og,{ref:W,$disabled:i,children:A?k?k(A):e(Eg,{truncateType:S,$variant:_,children:q(X())}):e(_g,{truncateType:S,$variant:_,children:r})})})}),renderDropdown:({elementWidth:t})=>e(Z_,{listboxId:L,listItems:n,onSelectItem:Y,onDismiss:V,valueExtractor:f,listExtractor:b,enableSearch:h,searchPlaceholder:g,searchFunction:p,selectedItems:A?[A]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:D,hideNoResultsDisplay:T,renderCustomCallToAction:O,variant:_,width:t}),onOpen:()=>{z(!0),G(!0),P(!0)},onClose:e=>{z(!1),G(!1),"click"!==e&&(P(!1),null==E||E())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),z(!1),G(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:I})})},WF=M.div`
    overflow: hidden;
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.sm};
    background: ${dc.bg};
    padding: ${gc["spacing-16"]};
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
`,YF=M.div`
    display: flex;
    align-items: baseline;
`,VF=M.div`
    margin: 0 0.5rem;
`,UF=M.div`
    ${e=>"small"===e.$variant?uc["body-md-regular"]:uc["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return F`
                    ${Dc(1)}
                `}}
    overflow: hidden;
`,KF=M(UF)`
    color: ${dc["text-subtler"]};
`,XF=r=>{var{alignment:n="left",className:i,disabled:s,dropdownZIndex:l,error:c,histogramSlider:d,id:h,onBlur:p,onChange:g,onChangeEnd:f,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$}=r,C=dt(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:S,bins:k=[],renderEmptyView:D,ariaLabels:T}=d,[O,E]=a(V()),[_,M]=a(!1),[F,I]=a(!1),[A]=a((()=>uu.generate())),B=k.map((e=>e.minValue)),j=Math.min(...B),z=o(null),R=o(null),P=o(null),L=C["data-testid"]||"select-histogram";u((()=>{$!==O&&E(V())}),[$]);const N=e=>{E(e),null==g||g(e)},H=e=>{E(e),null==f||f(e)},W=()=>{F||_||I(!0)},Y=e=>{F&&!_&&z.current&&!z.current.contains(e.relatedTarget)&&(I(!1),null==p||p())};function V(){return null!=$?$:[j,j+S]}const U=e=>w?w(e):t(_c.BodyBL,{children:[v,e,y]});return e(E_,{children:e(jg,{enabled:!x&&!s,isOpen:_,renderElement:()=>e(Gp,{className:i,"data-testid":L,id:h,ref:z,tabIndex:-1,onFocus:W,onBlur:Y,$focused:F,$disabled:s,$readOnly:x,$error:c,children:e(eM,{ref:R,disabled:s,expanded:_,listboxId:A,popupRole:"dialog",readOnly:x,variant:"default",children:e(Og,{ref:P,$disabled:s,children:B&&0!==B.length?t(YF,{children:[U(O[0]),e(VF,{children:"-"}),U(O[1])]}):e(KF,{truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:t})=>e(WF,{style:{width:t},children:e(Jw,{interval:S,value:O,bins:k,onChange:N,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:D,ariaLabels:T})}),onOpen:()=>{M(!0)},onClose:()=>{M(!1)},onDismiss:()=>{var e;null===(e=R.current)||void 0===e||e.focus(),M(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:l})})},qF=t=>{var{value:r,ariaLabel:n,onChange:i,onChangeEnd:o}=t,s=dt(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=a(d());u((()=>{r!==l[0]&&c(d())}),[r]);function d(){return null!=r?[r]:[0]}return e(Kw,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==i||i(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:n?[n]:void 0}))},GF=M.p`
    text-align: right;
    ${uc["body-sm-semibold"]}
    color: ${dc["text-subtler"]};
`,ZF=({value:t,maxLength:n,renderCustomCounter:o})=>{const[s,l]=a("");u((()=>{l(c(`${t||""}`))}),[t,n]);const c=e=>{if(o)return o(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:i.isValidElement(s)?s:e(GF,{"data-testid":"counter-label",children:s})})},QF=M.div`
    display: flex;
    flex-direction: column;
`,JF=M.textarea`
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.sm};
    background: ${dc.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${gc["spacing-12"]} ${gc["spacing-16"]};
    width: 100%;

    ${uc["body-baseline-regular"]}
    color: ${dc.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${pc["width-020"]} ${pc.solid}
            ${dc["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${dc["text-subtler"]};
    }

    ${e=>e.readOnly?F`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${dc["border-focus"]};
                }
            `:e.disabled?F`
                background: ${dc["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${dc["border-disabled"]};
                }
            `:e.$error?F`
                border-color: ${dc["border-error"]};

                :focus,
                :active {
                    outline-color: ${dc["border-error-focus"]};
                }
            `:void 0}
`,eI=i.forwardRef(((t,r)=>{var{value:n,disabled:i,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:h}=t,p=dt(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[g,f]=a(n);u((()=>{f(n)}),[n]);return e(JF,Object.assign({ref:r,disabled:i,value:l?l+(null!=g?g:""):g,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=c?c(r):r;if(f(n),e.target.value=l+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=c?c(null!=t?t:""):t;f(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:o,rows:s,maxLength:l&&h?l.length+h:h},p))})),tI=i.forwardRef(((r,n)=>{var{value:i,disabled:o,rows:s=5,onChange:l,transformValue:c,prefix:d,maxLength:h,renderCustomCounter:p}=r,g=dt(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[f,m]=a(i);u((()=>{m(i)}),[i]);return t(QF,{children:[e(eI,Object.assign({ref:n,disabled:o,value:f,rows:s||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:d,transformValue:c,maxLength:h},g)),h&&e(ZF,{value:f,maxLength:h,renderCustomCounter:p})]})})),rI=M.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${gc["spacing-4"]};
`,nI=M.div`
    display: flex;
    flex: 1;
    margin-right: ${gc["spacing-12"]};
`,iI=M(ww)`
    margin-top: 0;
`,oI=i.forwardRef(((n,i)=>{const{label:o,value:s,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":h,onChange:p,layoutType:g,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:k,prefix:D=""}=n,T=dt(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[O,E]=a(s);u((()=>{E(s)}),[s]);return t(Ew,{id:c,label:o,disabled:T.disabled,layoutType:g,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(eI,Object.assign({id:`${c}-base`,"data-testid":h||c,value:O,error:!!l,onChange:e=>{const t=e.target.value;E(t),p&&p(e)},ref:i,prefix:D,transformValue:k},T)),l||T.maxLength?t(rI,{children:[l&&e(nI,{children:e(iI,{"data-testid":d||(c?`${c}-error-message`:"error-message"),children:l})}),T.maxLength&&e(ZF,{value:O,maxLength:T.maxLength,renderCustomCounter:T.renderCustomCounter})]}):e(r,{})]})})),aI=M.div`
    position: relative;
`,sI=M(Zp)`
    height: 3rem;
    gap: ${gc["spacing-8"]};
`,lI=M(Qp)`
    display: block;
    width: 100%;
    flex: 1;
`,cI=M.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?F`
                    color: ${dc["icon-selected-disabled"]};
                `:F`
                    color: ${dc["icon-disabled-subtle"]};
                `:e.$active?F`
                color: ${dc["icon-selected"]};
            `:F`
            color: ${dc["icon-subtle"]};
        `};
`,dI=F`
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
`,uI=M.ol`
    ${dI}

    margin-left: 3rem;

    ${bc.MaxWidth.lg} {
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
`,hI=M.ul`
    ${dI}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,pI=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,a=dt(t,["size","bulletType","bottomMargin","children"]);return e(hI,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},a,{children:o}))};pI.displayName="TextList.Ul";const gI=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=t,s=dt(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(uI,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};gI.displayName="TextList.Ol";const fI=pI,mI=M.div`
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

    ${e=>{if(!e.$indicator)return F`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return F`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?F`
                            border-color: ${dc["border-error"]};
                        `:F`
                            border-color: ${dc["border-error"]};

                            &:has(${wI}:hover) {
                                background: ${dc["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?F`
                            border: none;
                            background: ${dc["bg-selected-disabled"]};
                        `:F`
                            border: none;
                        `:e.$selected?F`
                        border: none;
                        background: ${dc["bg-selected"]};

                        &:has(${wI}:hover) {
                            background: ${dc["bg-selected-hover"]};

                            & ${vI} {
                                color: ${dc["text-selected-hover"]};
                            }

                            & ${_I} {
                                color: ${dc["icon-selected-hover"]};
                            }
                        }
                    `:F`
                    border: none;

                    &:has(${wI}:hover) {
                        background: ${dc["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?F`
                            border-color: ${dc["border-error"]};
                        `:F`
                            border-color: ${dc["border-error"]};

                            &:has(${wI}:hover) {
                                background: ${dc["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?F`
                            border-color: ${dc["border-selected-disabled"]};
                            background: ${dc["bg-selected-disabled"]};
                        `:F`
                            border-color: ${dc["border-disabled"]};
                            background: ${dc["bg-disabled"]};
                        `:e.$selected?F`
                        border-color: ${dc["border-selected"]};
                        background: ${dc["bg-selected"]};

                        &:has(${wI}:hover) {
                            background: ${dc["bg-selected-hover"]};

                            & ${vI} {
                                color: ${dc["text-selected-hover"]};
                            }

                            & ${_I} {
                                color: ${dc["icon-selected-hover"]};
                            }
                        }
                    `:F`
                    border-color: ${dc.border};

                    &:has(${wI}:hover) {
                        background: ${dc["bg-hover-subtle"]};
                    }
                `}
`,bI=M.input`
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
`,vI=M.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?F`
                    color: ${dc["text-selected-disabled"]};
                `:F`
                    color: ${dc["text-disabled"]};
                `:e.$selected?F`
                color: ${dc["text-selected"]};
            `:F`
            color: ${dc.text};
        `}
`,yI=M.label`
    ${uc["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${bc.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${bc.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,xI=M.div`
    ${uc["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${uc["body-md-semibold"]}
    }
`,wI=M.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,$I=M.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,CI=M.button`
    color: ${e=>e.$disabled?dc["text-disabled"]:dc["text-error"]};
    white-space: nowrap;
    ${uc["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,SI=M.button`
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
`,kI=M.div`
    width: 100%;
    color: ${e=>e.$disabled?dc["text-disabled"]:dc["text-error"]};
    border: none;
    background: ${dc.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,DI=M(gd)`
    width: 100%;
    user-select: none;
`,TI=M.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${dc.bg};
    ${ad({textSize:"body-md"})}

    ${e=>e.$disabled?F`
                color: ${dc["text-disabled"]};
            `:e.$selected?F`
                color: ${dc["text-selected"]};
            `:F`
                color: ${dc.text};
            `}
`,OI=M(_c.BodyMD)`
    color: ${e=>e.$disabled?dc["text-disabled"]:dc["text-error"]};
`,EI=M(fI)`
    color: ${e=>e.$disabled?dc["text-disabled"]:dc["text-error"]};
`,_I=M((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=e(r?Ve:Ye,{});break;case"radio":o=e(r?Ge:qe,{});break;case"tick":o=e(Ue,{});break;case"cross":o=e(je,{});break;default:o=null}return e(cI,{className:i,$active:r,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?F`
                    color: ${dc["icon-selected-disabled"]};
                `:F`
                    color: ${dc["icon-disabled-subtle"]};
                `:e.$selected?F`
                color: ${dc["icon-selected"]};
            `:F`
            color: ${dc["icon-subtle"]};
        `};
`,MI=({type:n="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:d,subLabel:h,disabled:p,error:g,name:f,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:C,useContentWidth:S})=>{const{collapsible:k=!0,errors:D,children:T,initialExpanded:O}=y||{},[E,M]=a(s),[F,I]=a(!!O),A=m((()=>{const e=Array.isArray(D)&&(null==D?void 0:D.length)>0,t=!Array.isArray(D)&&!!D;return e||t}),[D]),[B]=a(uu.generate()),j=b?`${b}`:`tg-${B}`,z=o(null);u((()=>{M(s)}),[s]),u((()=>{E&&I(null==O||O)}),[E]);const R=()=>{p||I(!F)},P=()=>{p||!w||w()},L=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e(_I,{type:t,active:E,disabled:p,$selected:E,$disabled:p})},N=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(xI,{"data-id":"toggle-sublabel",children:t})},H=n=>t(r,{children:[e(OI,{weight:"semibold",$disabled:p,children:"Error"}),e(EI,{$disabled:p,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${j}-error-list-item-${r}`,children:e(OI,{weight:"semibold",$disabled:p,children:t})},r)))})]});return t(mI,{$selected:E,$disabled:p,className:v,$styleType:l,$error:g,$indicator:i,$useContentWidth:S,id:b,"data-testid":$,children:[t(wI,{id:`${j}-header-container`,$disabled:p,$error:g,$selected:E,$indicator:i,$styleType:l,children:[t($I,{$addPadding:x,children:[e(bI,{ref:z,name:f,id:`${j}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:e=>{if(!p){if(C)return void C(e);switch(n){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":E||M(!0)}}},checked:E}),i&&L(),t(vI,{$selected:E,$disabled:p,children:[e(yI,{htmlFor:`${j}-input`,"data-testid":`${j}-toggle-label`,$maxLines:d,children:c}),h&&N()]})]}),x&&e(CI,{type:"button",$disabled:p,onClick:P,id:`${j}-remove-button`,children:"Remove"})]}),T&&t("div",{children:[(!k||F)&&e(TI,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:p,children:T}),k&&!F&&A&&e(kI,{$disabled:p,onClick:R,id:`${j}-error-alert`,children:e(DI,{type:p?"description":"error",className:v,showIcon:!0,children:Array.isArray(D)?H(D):D})}),k&&t(SI,{$paddingTopRequired:!F&&!A,disabled:p,onClick:R,"data-testid":F?"collapse-button":"expand-button",children:[F?"Show less":"Show more",e(F?_:fe,{"aria-hidden":!0})]})]})]})},FI=M(Yo.div)`
    position: absolute;
    top: calc(3rem + ${gc["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${bc.MaxWidth.xxs} {
        max-width: 100%;
    }
`,II=M.div`
    position: relative;
    width: 100%;
    padding: ${gc["spacing-8"]} ${gc["spacing-20"]}
        ${gc["spacing-24"]} ${gc["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${dc.bg};
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.sm};
`,AI=M.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${bc.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,BI=M.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${gc["spacing-16"]};
    gap: ${gc["spacing-8"]} ${gc["spacing-16"]};

    ${bc.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${gc["spacing-32"]};
    }
`,jI=M.div`
    display: flex;
    align-items: center;
    margin-right: ${gc["spacing-32"]};

    ${bc.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,zI=M.div`
    display: flex;
    gap: ${gc["spacing-8"]};

    ${bc.MaxWidth.lg} {
        flex-direction: column;
    }

    ${bc.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,RI=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${bc.MaxWidth.xxs} {
        width: 6rem;
    }
`,PI=M(kc)`
    width: 5rem;
    padding: ${gc["spacing-16"]} 0;
    color: ${dc.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${dc["icon-hover"]};
    }
`,LI=M(_c.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,NI=M(Gp)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${bc.MaxWidth.xxs} {
        width: 100%;
    }
`,HI=M(Qp)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,WI=M(MI)`
    min-width: 5rem;
    flex: 1;
`,YI=M(ed.Small)`
    width: 7rem;

    ${bc.MaxWidth.sm} {
        flex: 1;
    }

    ${bc.MaxWidth.xxs} {
        width: 100%;
    }
`;var VI,UI,KI;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(VI||(VI={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(UI||(UI={})),function(e){e.AM="am",e.PM="pm"}(KI||(KI={}));const XI=({id:r,value:n,show:i,format:s,onChange:l,onCancel:c})=>{var d;const h=lp.getTimeValues(s,n),[p,f]=a(h.hour),[m,b]=a(h.minute),[v,y]=a(h.period),x=o(null),w=o(null),$=cr();u((()=>{if(i&&x.current&&x.current.focus(),i){const{hour:e,minute:t,period:r}=lp.getTimeValues(s,n);f(e),b(t),y(r)}}),[i,n,s]),u((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=g((e=>{switch(e.currentTarget.name){case VI.MINUTE_UP:b(lp.updateMinutes(m,"add"));break;case VI.MINUTE_DOWN:b(lp.updateMinutes(m,"minus"));break;case VI.HOUR_UP:f(lp.updateHours(p,"add"));break;case VI.HOUR_DOWN:f(lp.updateHours(p,"minus"))}}),[p,m]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case UI.HOUR:t.length<=2&&f(t);break;case UI.MINUTE:t.length<=2&&b(t)}},T=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case UI.HOUR:{const r=t>23||t<0?h.hour:lp.convertHourTo12HourFormat(e.target.value);f(r);break}case UI.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(hu.padValue(r));break}}},O=e=>{switch(e.target.name){case KI.AM:y(sp.AM);break;case KI.PM:y(sp.PM)}},E=e=>r?`${r}-${e}`:e,M=Do({opacity:i?1:0,height:i?(null!==(d=$.height)&&void 0!==d?d:0)+32+2:0});return e(FI,{"data-testid":"animated-dropdown-wrapper",style:M,children:t(II,{ref:$.ref,"data-testid":E("timepicker-dropdown"),inert:i?void 0:"",children:[t(AI,{children:[t(jI,{children:[t(RI,{children:[e(PI,{"aria-label":"increase hour",name:VI.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":E("hour-increment-button"),children:e(_,{})}),e(NI,{children:e(HI,{"aria-label":"hour",type:"number",name:UI.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:p,onFocus:k,onChange:D,onBlur:T,min:1,max:12,placeholder:"HH","data-testid":E("hour-input")})}),e(PI,{"aria-label":"decrease hour",name:VI.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":E("hour-decrement-button"),children:e(fe,{})})]}),e(LI,{children:":"}),t(RI,{children:[e(PI,{"aria-label":"increase minute",name:VI.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":E("minute-increment-button"),children:e(_,{})}),e(NI,{children:e(HI,{"aria-label":"minute",type:"number",name:UI.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:D,onBlur:T,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":E("minute-input")})}),e(PI,{"aria-label":"decrease minute",name:VI.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":E("minute-decrement-button"),children:e(fe,{})})]})]}),t(zI,{children:[e(WI,{checked:v===sp.AM,name:KI.AM,type:"radio",onChange:O,"data-testid":E("am-toggle"),"aria-label":"AM",children:"AM"}),e(WI,{checked:v===sp.PM,name:KI.PM,type:"radio",onChange:O,"data-testid":E("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(BI,{children:[e(YI,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":E("cancel-button"),children:"Cancel"}),e(YI,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?lp.convertTo24HourFormat({hour:p,minute:m,period:v}):`${p}:${m}${v}`,l(e)},disabled:""===p||""===m,"data-testid":E("confirm-button"),children:"Done"})]})]})})},qI=r=>{var{id:n,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:h,onFocus:p,onBlur:g}=r,f=dt(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=a(!1),[v,y]=a(!1),[x,w]=a(""),[$,C]=a(""),S=o(null);u((()=>{l&&(w(l.start),C(l.end))}),[l]),gu("mousedown",(function(e){i||O(e)}),"document"),gu("keyup",(function(e){if("Tab"===e.code)O(e)}),"document");const k=()=>{T()},D=()=>{m||v||p&&p()},T=()=>{b(!1),y(!1),g&&g()},O=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&T()};return e(aI,Object.assign({ref:S,id:n},f,{children:t(sI,{$disabled:i,$error:s,$readOnly:d,children:[t(af,{error:s,currentActive:m?"start":v?"end":"none",children:[e(lI,{onFocus:()=>{i||d||m||(y(!1),b(!0),D())},readOnly:!0,placeholder:"From",value:lp.formatDisplayValue(x,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(lI,{onFocus:()=>{i||d||v||(b(!1),y(!0),D())},readOnly:!0,placeholder:"To",value:lp.formatDisplayValue($,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(XI,{id:n,show:m,value:x,format:c,onCancel:k,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),e(XI,{id:n,show:v,value:$,format:c,onCancel:k,onChange:e=>{y(!1),C(e);h&&h({start:x,end:e}),""==x?b(!0):g&&g()}})]})}))},GI=M(Zp)`
    height: 3rem;
    gap: ${gc["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${gc["spacing-20"]});
`,ZI=r=>{var{id:n,disabled:i=!1,error:s,value:l,format:c="12hr",readOnly:d,onChange:h,onFocus:p,onBlur:f,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=dt(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=a((()=>uu.generate())),[S,k]=a(null),[D,T]=a(!1),[O,E]=a(""),[_,M]=a(""),[F,I]=a(""),[A,B]=a(""),[j,z]=a(""),R=o(null),P=o(null),L=o(null),N=m((()=>lp.generateTimings(w,c,y,x)),[w,c,y,x]),H=m((()=>{if(""===A)return N;const e=lp.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=g((e=>lp.parseInput(e,c)),[c]);u((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";M(r),I(n),B(r),z(n)}}),[l,W]),u((()=>{if(s)return void T(!1);const e=W(_),t=W(F);if(void 0===e)E("Invalid start time");else if(void 0===t)E("Invalid end time");else{if(!(""!==e&&""!==t&&lp.to24Hour(t)<lp.to24Hour(e)))return E(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||T(!0));E("End time must be after start time")}T(!1)}),[_,F,W,s]);const Y=e=>{i||d||(S||D||null==p||p(),k(e),T(!0))},V=e=>{var t;i||d||(k(e),T(!0),null===(t=("start"===e?P:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(_):"end"===S&&(D&&X(F),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":q(_,F,{})}}const K=e=>{q(e,F,{goToNextInput:!0})},X=e=>{q(_,e,{triggerOnBlur:!0})},q=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,o,a;const s=null!==(i=W(e))&&void 0!==i?i:A,l=null!==(o=W(t))&&void 0!==o?o:j;M(s),I(l);s===A&&l===j||null==h||h({start:s,end:l}),r&&void 0!==W(e)&&(k("end"),null===(a=L.current)||void 0===a||a.select()),n&&(k(null),T(!1),null==f||f()),B(s),z(l)},G=e=>{e.stopPropagation(),M(""),I(""),B(""),z("");null==h||h({start:"",end:""}),k(null),T(!1)},Z=e=>{R.current&&!R.current.contains(e.relatedTarget)&&S&&!D&&q(_,F,{triggerOnBlur:!0})},Q=()=>{if(!d&&!i&&((null==_?void 0:_.length)>0||(null==F?void 0:F.length)>0))return e(PF,{onClick:G,type:"button","aria-label":"Clear",children:e(r$,{"aria-hidden":!0})})};return t(aI,Object.assign({id:n},$,{children:[e(E_,{children:e(jg,{enabled:!d&&!i,isOpen:D,renderElement:()=>t(GI,{ref:R,$disabled:i,$error:s||!!O,$readOnly:d,onBlur:Z,children:[t(af,{error:s||!!O,currentActive:null===S?"none":S,children:[e(lI,{ref:P,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>M(e.target.value),value:_,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"}),e(lI,{ref:L,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>I(e.target.value),value:F,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"})]}),Q()]}),renderDropdown:()=>{if(D)return e(Z_,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[_],disableItemFocus:!0,topScrollItem:lp.findClosestFlooredTime(W(_),N),listboxId:C}:{listItems:H,onSelectItem:X,selectedItems:[F],disableItemFocus:!0,topScrollItem:lp.findClosestFlooredTime(W(F),H),listboxId:C})},onClose:e=>{"outside-press"===e?(k(null),T(!1),null==f||f()):q(_,F,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:L).current)||void 0===e||e.focus(),T(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!s&&O&&e(ww,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:O})]}))},QI=t=>{var{variant:r="dial"}=t,n=dt(t,["variant"]);return e("combobox"===r?ZI:qI,Object.assign({},n))};M.div`
    position: relative;
`;const JI=M(Qp)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,eA=r=>{var{id:n,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:p,onBlur:f}=r,m=dt(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=a(!1),y=o(null);gu("mousedown",(function(e){i||s||$(e)}),"document"),gu("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{i||s||b||(v(!0),p&&p())};const w=()=>{v(!1),f&&f()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=g((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(Zp,Object.assign({ref:y,id:n,$readOnly:s,$disabled:i,$error:l},m,{children:[e(JI,{onFocus:x,focused:b,readOnly:!0,placeholder:d||C(),value:lp.formatDisplayValue(c,u),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(XI,{id:n,show:b,value:c,format:u,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))},tA=M(bD)`
    margin-right: 0.5rem;
`,rA=M(o$)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,nA=M(rA)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,iA=M(_c.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return F`
                color: ${dc["text-disabled"]};
            `}}
`,oA=M.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,aA=M(_c.BodyBL)``,sA=n=>{var{disabled:i,error:s,value:l,onChange:c,onBlur:d,onChangeRaw:h,onBlurRaw:p,readOnly:g,placeholder:f="00-8888",autoComplete:m}=n,b=dt(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=a(""),[x,w]=a(""),[$,C]=a("none"),S=o(null),k=o(null),D=o(null),T=o(v),O=o(x),E=o($),_=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),M=bu({ref:k,formatter:_}),F=bu({ref:D,formatter:_}),I=e=>{T.current=e,y(e)},A=e=>{O.current=e,w(e)},B=e=>{E.current=e,C(e)};u((()=>{"floor"===$&&3===v.length&&D.current&&D.current.focus()}),[v]),u((()=>{N(l)}),[l]);const j=e=>{B(e.target.name),e.target.select()},z=e=>{const t=e.target.name,r=e.target.value,n=L(r);"floor"===t?(I(n),n!==v&&H(n,t)):"unit"===t&&(A(n),n!==x&&H(n,t))},R=e=>{const t=e.target.name;if("floor"===t){const e=M();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),I(r),H(r,t)}else if("unit"===t){const e=F();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),A(r),H(r,t)}},P=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=k.current)||void 0===t||t.focus())},L=e=>/^[0-9]$/.test(e)?hu.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==lA)if(void 0===e||0===e.length)I(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];I("floor"===$?e:L(e)),A("unit"===$?r:L(r))}}},H=(e,t)=>{if(!c&&!h)return;const r={floor:T.current,unit:O.current};if(r[t]=e,c){const e=Y(r);c(e)}h&&h([r.floor,r.unit])},W=()=>{if(!d&&!p)return;const e={floor:L(T.current),unit:L(O.current)};if(d){const t=Y(e);d(t)}p&&p([e.floor,e.unit])},Y=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":lA},V=e=>e.split("-");return t(Zp,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&k.current&&k.current.focus()},$disabled:i,$error:s,$readOnly:g,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==E.current&&(B("none"),W())},children:[e(tA,{"data-testid":"addon",$disabled:i,$readOnly:g,children:"#"}),g&&l?(r=>{const n=r.split("-");return t(oA,{children:[e(aA,{children:n[0]}),e(iA,{children:"-"}),e(aA,{children:n[1]})]})})(l):t(r,{children:[e(rA,{name:"floor",maxLength:3,value:v,ref:k,onFocus:j,onBlur:z,onChange:R,disabled:i,readOnly:g,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||g?V(f)[0]:"",autoComplete:m,styleType:"no-border"}),e(iA,{$inactive:0===v.length,children:"-"}),e(nA,{name:"unit",maxLength:5,value:x,ref:D,onFocus:j,onBlur:z,onChange:R,onKeyDown:P,disabled:i,readOnly:g,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||g?V(f)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},lA="Invalid unit number",cA={DateInput:t=>{var{label:r,errorMessage:n,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(Kg,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(uf,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},ESignature:t=>{const{label:r,errorMessage:n,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(dm,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(Jw,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},Input:a$,InputGroup:xD,MaskedInput:jD,Label:Cw,MultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=dt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(gF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(vF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(bF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=dt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(HF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(XF,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||i,id:`${i}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(qF,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(Kw,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=dt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:p,smCols:g,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(NF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s},y))})},Textarea:oI,Timepicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(eA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(QI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:i}=t,o=dt(t,["id","data-error-testid","children"]);return e(Ew,Object.assign({id:r,"data-error-testid":n},o,{children:i}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(sA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(AF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b}=t,v=dt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Ew,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:p,mdCols:g,lgCols:f,xlCols:m,xxlCols:b,children:e(zF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})}},dA=M.li`
    display: flex;
    flex-direction: column;
    padding: ${gc["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};
    }
`,uA=M.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${gc["spacing-16"]};
    width: 100%;
`,hA=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,pA=M.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${gc["spacing-16"]};

    ${bc.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,gA=M(_c.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${gc["spacing-16"]};

    ${bc.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${gc["spacing-8"]};
    }
`,fA=M(_c.BodyMD)``,mA=M.div`
    display: flex;
    ${bc.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return F`
                margin-left: calc(
                    96px + ${gc["spacing-32"]}
                ); // thumbnail width + right margin

                ${bc.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,bA=M(ed.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${gc["spacing-16"]};
    }

    ${bc.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${gc["spacing-16"]};
        }
    }
`,vA=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:i,onReplaceClick:o})=>t(yA,{"data-testid":n,children:[e(xA,{"data-testid":n?`${n}-image`:void 0,src:r}),i&&e(wA,{type:"button",onClick:()=>{o&&o()},children:"Replace"})]}),yA=M.div`
    width: auto;
    margin-right: ${gc["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,xA=M(Bm)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${fc.sm};
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    object-fit: cover;

    ${bc.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,wA=M.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${gc["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${uc["body-md-semibold"]}
    color: ${dc["text-primary"]};

    :hover {
        color: ${dc["text-hover"]};
    }
`,$A=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:i,onSave:s,onCancel:l,onBlur:c})=>{const{id:d,name:h,size:p,truncateText:g=!0,thumbnailImageDataUrl:f}=r,[m,b]=a(),[v,y]=a(""),x=o(null),w=o(null);u((()=>{b($(h))}),[i]),u((()=>{y(r.description||"")}),[r]);const $=e=>{if(!g)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return hu.truncateOneLine(e,t,t/2,t/2/8,16)};return t(dA,{"data-testid":`${d}-edit-display`,children:[t(uA,{children:[f&&e(vA,{thumbnailImageDataUrl:f}),t(hA,{children:[t(pA,{ref:w,children:[e(gA,{weight:"semibold",children:m}),e(fA,{children:Am.formatFileSizeDisplay(p)})]}),e(cA.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{c(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(mA,{$thumbnail:!!f,children:[e(bA,{"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&s(x.current.value.trim())},children:"Save"}),e(bA,{type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:l,children:"Cancel"})]})]})},CA=M.li`
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
`,SA=M(Je)`
    margin-right: ${gc["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${dc.icon};

    ${e=>e.$active?F`
                color: ${dc["icon-primary"]};
            `:e.$disabled?F`
                color: ${dc["icon-disabled"]};
            `:void 0};
`,kA=M.div`
    background: ${dc["bg-primary-subtlest"]};
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.sm};
    padding: ${gc["spacing-16"]} ${gc["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${bc.MaxWidth.sm} {
        padding: ${gc["spacing-16"]};
    }

    ${e=>e.$focused?F`
                border-color: ${dc["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${dc["border-focus"]} r g b / 50%);
            `:e.$disabled?F`
                border-color: ${dc["border-disabled"]};
            `:e.$error?F`
                background: ${dc["bg-error"]};
                border-color: ${dc["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return F`
                ${bc.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,DA=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${bc.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return F`
                ${bc.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,TA=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,OA=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${bc.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,EA=M.div`
    display: flex;
    width: 5rem;
    margin-left: ${gc["spacing-8"]};
    justify-content: flex-end;

    ${bc.MaxWidth.sm} {
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
`,_A=M(_c.BodyMD)``,MA=M(_A)`
    margin-top: ${gc["spacing-4"]};
`,FA=M(_c.BodySM)`
    color: ${dc["text-error"]};
`,IA=M(FA)`
    margin-top: ${gc["spacing-4"]};
    ${bc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,AA=M(FA)`
    display: none;
    visibility: hidden;
    ${bc.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${gc["spacing-8"]};
    }
`,BA=M.div`
    width: 6rem;
    margin-left: ${gc["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${bc.MaxWidth.sm} {
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
`,jA=M(qg)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${gc["spacing-16"]};
    }
`,zA=M(kc)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${dc.icon};
    }
`,RA=w((({fileItem:n,editable:i,sortable:s,wrapperWidth:l,disabled:c,readOnly:d,onDelete:h,onEditClick:p})=>{const{id:g,name:m,size:b,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=n,[C,S]=a(),{activeId:k}=f(Jm),{attributes:D,listeners:T,setNodeRef:O,transform:E,transition:_}=ew({id:g}),M=o(null),F={transform:Qv.Translate.toString(E),transition:_},I=Object.assign(Object.assign({style:F},D),T),A=y<1,B=Am.formatFileSizeDisplay(b),j=k?k===g?"self":"others":"none";u((()=>{S(L(m))}),[l]);const z=()=>{h()},R=()=>{p&&p()},P=e=>{s&&e.stopPropagation()},L=e=>{if(!$)return e;const t=M&&M.current?M.current.getBoundingClientRect().width:0;return hu.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>c||!!k,H=()=>!!s&&!d,W=()=>t(r,{children:[e(_A,{weight:v?"semibold":"regular",children:C}),v&&e(MA,{children:v})]});return t(CA,Object.assign({id:g,ref:O,$sortable:H(),$disabled:N(),$focusType:j},H()?I:{},{children:[H()&&e(SA,{"data-testid":`${g}-drag-handle`,$disabled:N(),$active:"self"===j}),t(kA,{$focused:"self"===j,$error:!!x,$loading:A,$disabled:N(),$editable:i,children:[(()=>{let n;return n=x?t(r,{children:[t(TA,{ref:M,children:[W(),x&&e(IA,{weight:"semibold",children:x})]}),e(EA,{children:e(_A,{children:B})}),x&&e(AA,{weight:"semibold",children:x})]}):w?(n=>t(r,{children:[e(vA,{thumbnailImageDataUrl:n,"data-testid":`${g}-thumbnail`}),t(OA,{children:[e(TA,{ref:M,children:W()}),e(EA,{children:e(_A,{children:B})})]})]}))(w):t(r,{children:[e(TA,{ref:M,children:W()}),e(EA,{$hideInMobile:A,children:e(_A,{children:B})})]}),e(DA,{$hasThumbnail:!!w,children:n})})(),!d&&(()=>{let n;return n=x?e(zA,{onClick:z,"data-testid":`${g}-error-delete-button`,"aria-label":`delete-${m}`,children:e(je,{"aria-hidden":!0})}):A?e(jf,{progress:y,"data-testid":`${g}-progress-bar`}):t(r,{children:[i&&e(jA,{"data-testid":`${g}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${m}`,disabled:N(),onClick:R,onKeyDown:P,children:e(Qe,{"aria-hidden":!0})},"edit"),e(jA,{"data-testid":`${g}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${m}`,disabled:N(),onClick:z,onKeyDown:P,children:e(Ze,{"aria-hidden":!0})},"delete")]}),e(BA,{$editable:i,$error:!!x,$loading:A,children:n})})()]})]}))})),PA=M.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":gc["spacing-32"]};
`,LA=M.li`
    border-top: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};

    :not(:last-child) {
        margin-bottom: ${gc["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${gc["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,NA=({fileItems:t,editableFileItems:r,fileDescriptionMaxLength:n,sortable:i,disabled:s,readOnly:l,onItemUpdate:c,onItemDelete:d,onSort:h})=>{const[p,g]=a({}),{setActiveId:b}=f(Jm),{width:v=0,ref:y}=cr(),x=o({}),w=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m((()=>[...t].filter((e=>null!=e))),[...t])}(dy(ow,{activationConstraint:{distance:8}}),dy(nx,{activationConstraint:{delay:150,tolerance:5}}),dy(Ky,{coordinateGetter:nw})),$=e=>{delete x.current[e]};u((()=>{g(F(t))}),[t]);const C=e=>t=>{I(e.id,"display"),$(e.id);const r=Object.assign(Object.assign({},e),{description:t});c(r)},S=e=>t=>{x.current[e.id]=t},k=e=>()=>{e.description&&0!==e.description.length?I(e.id,"display"):d(e),$(e.id)},D=e=>()=>{I(e.id,"edit")},T=e=>()=>{d(e)},O=e=>{if(h&&t){const{active:r,over:n}=e;if(n&&r.id!==n.id){const e=t.findIndex((e=>e.id===r.id)),i=t.findIndex((e=>e.id===n.id)),o=Px(t,e,i);h(o)}}b(void 0)},E=e=>{const{active:t}=e;b(t.id)},_=e=>r&&Am.isSupportedImageType(e.type),M=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&_(e)&&!e.description,F=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":p[r.id]?t[r.id]=p[r.id]:t[r.id]=M(r)?"edit":"display";return t},I=(e,t)=>{g((r=>Object.assign(Object.assign({},r),{[e]:t})))},A=()=>t&&t.length>1&&i&&Object.values(p).every((e=>"display"===e)),B=()=>{const r=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(t,p);return 0===r.length?null:r.map(((t,r)=>Array.isArray(t)?((t,r)=>{const i=t.map((t=>{const r=Object.assign({},t);return void 0!==x.current[t.id]&&(r.description=x.current[t.id]),e($A,{fileItem:r,wrapperWidth:v,fileDescriptionMaxLength:n,onSave:C(t),onCancel:k(t),onBlur:S(t)},t.id)}));return e(LA,{children:e("ul",{children:i})},`editable-${r}`)})(t,r):e(RA,{fileItem:t,editable:_(t),wrapperWidth:v,sortable:A(),disabled:s,readOnly:l,onDelete:T(t),onEditClick:D(t)},t.id)))};return t&&0!==t.length?s||l||!A()?e(PA,{$readOnly:l,ref:y,children:B()}):e(Fx,{sensors:w,onDragEnd:O,onDragStart:E,children:e(Kx,{items:t,strategy:Yx,children:e(PA,{$readOnly:l,ref:y,children:B()})})}):null},HA=M.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${gc["spacing-32"]};
    gap: ${gc["spacing-8"]};
`,WA=M(_c.BodyBL)``,YA=M.div`
    color: ${dc.text};
    ${ad({textSize:"body-baseline"})}
`,VA=M(_c.BodyMD)`
    color: ${dc["text-subtler"]};
`,UA=M.div`
    color: ${dc.text};
    ${ad({textSize:"body-md"})}
`,KA=M(gd)`
    margin-bottom: ${gc["spacing-32"]};
`,XA=M.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${bc.MaxWidth.sm} {
        align-items: flex-start;
    }
`,qA=M(ed.Small)`
    width: 10rem;

    ${bc.MaxWidth.sm} {
        width: 100%;
    }
`,GA=M.label`
    ${uc["body-md-semibold"]}
    color: ${dc["text-subtler"]};
    margin-top: ${gc["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${bc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,ZA=M(gd)`
    margin-bottom: ${gc["spacing-32"]};
`,QA=({styleType:r="bordered",fileItems:n,title:i,description:s,maxFiles:l,warning:c,className:d,name:u,id:h,"data-testid":p,accept:g,capture:f,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:C,onDelete:S,onEdit:k,onSort:D})=>{const T=o(null),[O,E]=a(),_=()=>!(!l||!n)&&n.length>=l;return e(Jm.Provider,{value:{activeId:O,setActiveId:E},children:t(_v,{ref:T,onChange:e=>{!b&&C&&C(e)},id:h?`${h}-dropzone`:"dropzone",accept:g,capture:f,border:"bordered"===r,className:d,"data-testid":p,name:u,multiple:m,disabled:b||_()||$,children:[!(!i&&!s)&&t(HA,{children:[i?e("string"==typeof i?WA:YA,{children:i}):null,s?e("string"==typeof s?VA:UA,{children:s}):null]}),!!c&&e(KA,{type:"warning",children:c}),e(NA,{fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{S&&S(e)},onItemUpdate:e=>{k&&k(e)},onSort:e=>{D&&D(e)}}),w&&e(ZA,{type:"error",children:w}),!$&&t(XA,{children:[e(qA,{type:"button",styleType:"secondary",disabled:!!O||b||_(),onClick:e=>{b||(e.preventDefault(),T.current&&T.current.openFileDialog())},children:"Upload files"}),e(GA,{children:"or drop them here"})]})]})})},JA=i.createContext({mode:"default",rootNode:{current:null}});var eB=Uo((function(e){return null==e}));const tB=M.div`
    background-color: ${e=>e.$collapsible?dc["bg-strong"]:dc.bg};
    ${bc.MaxWidth.lg} {
        background-color: ${dc["bg-strong"]};
    }
`,rB=M.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${dc.border};

    ${bc.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${gc["spacing-16"]};
    }
`,nB=M.div`
    display: flex;
    align-items: center;

    background-color: ${dc.bg};

    ${bc.MaxWidth.lg} {
        background-color: transparent;
    }
`,iB=M(kc)`
    margin: 0 0 0 auto;

    color: ${dc.icon};
    &:hover {
        color: ${dc["icon-hover"]};
    }
`,oB=M(fe)`
    height: ${uc.Spec["body-size-baseline"]};
    width: ${uc.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${hc["duration-350"]} ${hc["ease-standard"]};
`,aB=M.p`
    ${uc["header-xs-semibold"]}
    color: ${dc.text};

    margin: ${gc["spacing-24"]} 0 ${gc["spacing-24"]}
        ${gc["spacing-20"]};

    ${bc.MaxWidth.lg} {
        ${uc["body-md-semibold"]}
        color: ${dc["text-subtle"]};

        margin: ${gc["spacing-24"]} ${gc["spacing-20"]} 0
            ${gc["spacing-20"]};
    }
`,sB=M(Yo.div)`
    overflow: hidden;
`,lB=M.div`
    padding: ${gc["spacing-24"]} ${gc["spacing-20"]};
`,cB=M(Yo.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,dB=M(ed.Small)`
    height: fit-content;
    padding: 0;
    margin: ${gc["spacing-16"]} 0 0 0;
`,uB=r=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:l,minimisable:c=!1,minimisedHeight:d,showDivider:h=!0,showMobileDivider:p=!0,title:g,addon:m,children:b}=r,v=dt(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:y,rootNode:x}=f(JA),w="mobile"===y,[$,C]=a(M()),[S,k]=a(c),D=!w&&i,T=cr(),O=cr(),E=Do({height:$?T.height:0}),_=S?null!=d?d:Math.min(.5*(null!==(n=O.height)&&void 0!==n?n:0),216):O.height;u((()=>{C(M())}),[i,s]);function M(){return!!w||(eB(s)?!i||o:s)}return t(tB,{$collapsible:D,children:[e(rB,{$showDivider:h,$showMobileDivider:p}),(g||D)&&t(nB,{children:[g&&t(aB,{children:[g," ",m&&("popover"===(null==m?void 0:m.type)?e(yw,{addon:m,rootNode:w?x:void 0}):null)]}),D&&e(iB,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!$;eB(s)&&C(e),l&&l(e)},"aria-label":$?"Collapse":"Expand",children:e(oB,{$expanded:$})})]}),e(sB,{"data-testid":"expandable-container","data-expanded":$,style:E,children:e("div",{ref:T.ref,children:t(lB,Object.assign({},v,{children:[e(cB,{"data-testid":"minimisable-container",$height:_,$minimisable:c,children:e("div",{ref:O.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof b?b(y,{minimised:S}):b})})}),c&&t(dB,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{k(!S)},children:["View ",S?"more":"less"]})]}))})})]})};uB.displayName="Filter.Item";const hB=M(uB)`
    padding: 0 0 ${gc["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${gc["spacing-8"]} ${gc["spacing-8"]} 0;

        ${bc.MaxWidth.lg} {
            padding: ${gc["spacing-16"]} ${gc["spacing-20"]}
                ${gc["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${gc["spacing-8"]} ${gc["spacing-20"]} 0;
    }
`,pB=M.div`
    display: flex;
    flex-direction: column;

    ${bc.MaxWidth.lg} {
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
    ${uc["body-md-regular"]}
    color: ${dc.text};
    ${e=>e.$selected&&F`
            color: ${dc["text-selected"]};
        `}

    ${bc.MaxWidth.lg} {
        padding: ${gc["spacing-8"]};
    }
`,fB=M(Ph)`
    flex-shrink: 0;
    margin-right: ${gc["spacing-8"]};
`,mB=M(MI)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,bB=M(ed.Small)`
    height: fit-content;
    padding: 0;
    margin: ${gc["spacing-16"]} 0 ${gc["spacing-8"]}
        ${gc["spacing-12"]};

    ${bc.MaxWidth.lg} {
        margin: 0 0 ${gc["spacing-16"]} 0;
    }
`,vB=n=>{var{selectedOptions:i,options:s,onSelect:l,labelExtractor:c,valueExtractor:d,useToggleContentWidth:h}=n,p=dt(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:m}=f(JA),[b,v]=a(i||[]),[y,x]=a(),[w,$]=a(s.length),C=o(null),S=o(null),k=e=>()=>{const t=[...b],r=b.findIndex((t=>O(t)===O(e)));r>=0?t.splice(r,1):t.push(e),v(t),null==l||l(t)},D=()=>{const e=b.length?[]:s;v(e),null==l||l(e)},T=e=>{var t;return c?c(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},O=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},E=g((()=>{if(!C.current)return void x(void 0);const e=Array.from(C.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}$(t),x(r>2?n-8:void 0)}),[]);u((()=>{i!==b&&v(i||[])}),[i]),u((()=>{"default"===m?(()=>{const e=S.current?S.current.offsetTop+S.current.clientHeight:void 0;x(e)})():E()}),[s]),cr({handleWidth:"mobile"===m,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:C,onResize:E});return e(hB,Object.assign({minimisable:s.length>5,minimisedHeight:y},p,{children:(n,{minimised:i})=>t(r,{children:[s.length<3?null:e(bB,{styleType:"link",type:"button",onClick:D,children:b.length?"Clear all":"Select all"}),e(pB,{role:"group","aria-label":p.title,ref:C,children:s.map(((r,o)=>"default"===n?((r,n,i)=>{const o=T(r),a=O(r),s=!!b.find((e=>O(e)===a));return t(gB,{$visible:!i||n<5,$selected:s,ref:4===n?S:void 0,children:[e(fB,{displaySize:"small",checked:s,onChange:k(r)}),o]},a)})(r,o,i):((t,r,n)=>{const i=T(t),o=O(t),a=!!b.find((e=>O(e)===o));return e(mB,{type:"checkbox",checked:a,$visible:!n||!!y&&r<=w,onChange:k(t),useContentWidth:h,children:i},o)})(r,o,i)))})]})}))};vB.displayName="Filter.Checkbox";const yB=M.div`
    background-color: ${dc.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,xB=M.div`
    background-color: ${dc.bg};
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-radius: ${fc.md};
    overflow: hidden;
    width: 100%;
`,wB=M.div`
    background-color: ${dc["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,$B=M.div`
    background-color: ${dc.bg};
    height: 100%;
    width: 100%;
`,CB=M.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,SB=M.div`
    display: flex;
    align-items: center;

    background-color: ${dc.bg};

    ${bc.MaxWidth.lg} {
        border-bottom: ${pc["width-010"]} ${pc.solid}
            ${dc.border};
    }
`,kB=M(_c.HeaderXS).attrs({as:"p"})`
    flex: 1;
    margin: ${gc["spacing-24"]} 0 ${gc["spacing-24"]}
        ${gc["spacing-20"]};

    ${bc.MaxWidth.lg} {
        text-align: center;
        margin: ${gc["spacing-24"]} 0;
    }
`,DB=M(kc)`
    padding: ${gc["spacing-24"]} ${gc["spacing-20"]};
    margin-right: auto;
    color: ${dc.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${dc["icon-hover"]};
    }
`,TB=M(ed.Small)`
    background-color: transparent;
    padding-right: ${gc["spacing-20"]};
    padding-left: ${gc["spacing-20"]};
    height: 100%;

    ${bc.MaxWidth.lg} {
        padding: ${gc["spacing-24"]} ${gc["spacing-20"]};
    }
`,OB=M(Mu.Default)`
    width: 100%;
`,EB=M.div`
    padding: ${gc["spacing-24"]} ${gc["spacing-20"]};
    background-color: ${dc.bg};
    border-top: ${pc["width-010"]} ${pc.solid} ${dc.border};
`,_B=M(ed.Default)`
    width: 100%;
`,MB=({onDismiss:r,onDone:n,children:i})=>t(yB,{children:[e(DB,{onClick:r,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(be,{})}),e(CB,{children:i}),e(EB,{children:e(_B,{onClick:n,type:"button",children:"Done"})})]});MB.displayName="Filter.Page";const FB=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:d,onDismiss:h,onDone:p,children:g}=n,f=dt(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[m,b]=a(!1),v=o(null),y=o(null),x=A(),w=mc["lg-max"]({theme:x}),$=Ed.useMediaQuery({maxWidth:w});u((()=>{$||S()}),[$]);const C=()=>{b(!0)},S=()=>{b(!1),h&&h()},k=()=>{b(!1),p&&p()},D=()=>{d&&d()},T=e=>"function"==typeof g?g(e):g,O=r=>t(SB,{children:["mobile"===r&&e(DB,{onClick:S,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(J,{})}),e(kB,{weight:"semibold",children:l}),e(TB,{styleType:"link",type:"button",onClick:D,disabled:c,children:"Clear"})]});return e("div",Object.assign({},f,{children:e(JA.Provider,$?{value:{mode:"mobile",rootNode:v},children:t(r,{children:[e(OB,{"data-testid":"filter-show-button",styleType:s,onClick:C,type:"button",icon:e(ee,{}),children:i}),e(Tf,{show:m,disableTransition:!0,children:e($B,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:t(wB,{ref:v,children:[O("mobile"),e(CB,{children:T("mobile")}),e(EB,{children:e(_B,{onClick:k,type:"button",children:"Done"})})]})})})]})}:{value:{mode:"default",rootNode:y},children:t(xB,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:y,children:[O("default"),T("default")]})})}))};FB.displayName="Filter";const IB=Object.assign(FB,{Item:uB,Page:MB,Checkbox:vB}),AB=M.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${bc.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,BB=M(_c.BodyMD)`
    margin-bottom: ${gc["spacing-16"]};
`,jB=M.div`
    display: flex;
    align-items: flex-start;
`,zB=M.a`
    &:not(:last-child) {
        margin-right: ${gc["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${bc.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${gc["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,RB=()=>t(AB,{"data-testid":"download-app-section",children:[e(BB,{weight:"semibold",children:"Download the app"}),t(jB,{children:[e(zB,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(zB,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]}),PB={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},LB={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},NB={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var HB;!function(e){e.getCopyrightInfo=(e=new Date,r)=>{const n=t(r);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${Vd(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const r=(e=>{switch(e){case"bookingsg":return LB;case"mylegacy":return NB;default:return PB}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},r.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},r.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},r.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(HB||(HB={}));const WB=M.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?F`
                padding: 0 ${mc["xxl-margin"]}px;
            `:F`
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

    ${e=>{switch(e.$type){case"grid":return F`
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
                `;case"flex-column":return F`
                    display: flex;
                    flex-direction: column;
                `;default:return F`
                    display: flex;
                `}}}
`,YB=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=dt(t,["children","data-testid","type","stretch"]);return e(WB,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),VB=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=dt(t,["children","data-testid","stretch"]);return e(UB,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),UB=M.section`
    display: block;
    position: relative;
`,KB=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=dt(t,["children","data-testid","className","type","stretch"]);return e(VB,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e(YB,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),XB={Section:VB,Container:YB,Content:KB,ColDiv:pf},qB=M.footer`
    background: ${dc["bg-strong"]};
`,GB=M(_c.LinkSM)`
    color: ${dc.text};
`,ZB=M(Cf)`
    width: 100%;
`,QB=M(XB.Content)`
    padding: ${gc["spacing-64"]} 0;

    ${bc.MaxWidth.lg} {
        padding: ${gc["spacing-32"]} 0;
    }
`,JB=M.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${bc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${gc["spacing-32"]};
    }

    ${bc.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${gc["spacing-32"]};
    }
`,ej=M.ul`
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
`,tj=M.div`
    grid-column: 13 / span 6;

    ${bc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${gc["spacing-32"]};
    }

    ${bc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,rj=M(XB.Content)`
    padding: ${gc["spacing-20"]} 0;

    ${bc.MaxWidth.lg} {
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
`,ij=M(nj)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${bc.MaxWidth.lg} {
        margin-top: ${gc["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${bc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,oj=M(_c.LinkXS)`
    color: ${dc.text};
    &:not(:last-child) {
        margin-right: ${gc["spacing-16"]};
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
        margin-bottom: ${gc["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${bc.MaxWidth.lg} {
        margin-bottom: ${gc["spacing-8"]};
    }
`,aj=n=>{var{children:i,links:o,lastUpdated:a,disclaimerLinks:s,showDownloadAddon:l,logoSrc:c,copyrightInfo:d,onFooterLinkClick:u,layout:h="default"}=n,p=dt(n,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const g="stretch"===h,f=A(),m=t=>t.map(((t,r)=>{const n=dt(t,["data-options"]);return e("li",{children:e(GB,Object.assign({},n,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):u&&(e.preventDefault(),u(t))})(e,t)}))},r)}));return t(qB,Object.assign({},p,{children:[(()=>{let n=null;return i||((o||l)&&(n=t(r,{children:[e(JB,{"data-testid":"logo-section",children:e("img",{src:c||HB.getFooterLogo(null==f?void 0:f.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==o?void 0:o[0])&&e(ej,{"data-testid":"link-col-1",children:m(o[0])},"link-col-1"),(null==o?void 0:o[1])&&e(ej,{"data-testid":"link-col-2",children:m(o[1])},"link-col-2"),l&&e(tj,{children:e(RB,{})})]})),n?t(r,{children:[e(QB,{type:"grid",stretch:g,children:n}),e(ZB,{})]}):null)})(),t(rj,{type:"grid",stretch:g,children:[e(nj,{children:(()=>{const t=HB.getDisclaimerLinks(null==f?void 0:f.resourceScheme,s);return Object.keys(t).map((r=>e(oj,Object.assign({},t[r]),r)))})()},"disclaimer"),e(ij,{children:e(_c.BodyXS,{"data-testid":"copyright-text",children:d||t(r,{children:["©"," ",HB.getCopyrightInfo(a,null==f?void 0:f.resourceScheme)]})})},"copyright")]})]}))};var sj=function(e,t){return Number(e.toFixed(t))},lj=function(e,t,r){r&&"function"==typeof r&&r(e,t)},cj={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},dj=function(e){"number"==typeof e&&cancelAnimationFrame(e)},uj=function(e){e.mounted&&(dj(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function hj(e,t,r,n){if(e.mounted){var i=(new Date).getTime();uj(e),e.animation=function(){if(!e.mounted)return dj(e.animation);var o=(new Date).getTime()-i,a=o/r,s=(0,cj[t])(a);o>=r?(n(1),e.animation=null):e.animation&&(n(s),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function pj(e,t,r,n){var i=function(e){var t=e.scale,r=e.positionX,n=e.positionY;return!(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,h=t.positionY-c;0===r?o(t.scale,t.positionX,t.positionY):hj(e,n,r,(function(e){o(s+d*e,l+u*e,c+h*e)}))}}var gj=function(e,t){var r=e.wrapperComponent,n=e.contentComponent,i=e.setup.centerZoomedOut;if(!r||!n)throw new Error("Components are not mounted");var o=function(e,t,r){var n=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*r,a=t.offsetHeight*r;return{wrapperWidth:n,wrapperHeight:i,newContentWidth:o,newDiffWidth:n-o,newContentHeight:a,newDiffHeight:i-a}}(r,n,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,r,n,i,o,a){var s=e>t?r*(a?1:.5):0,l=n>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:n-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},fj=function(e,t,r,n){return sj(n?e<t?t:e>r?r:e:e,2)},mj=function(e,t){var r=gj(e,t);return e.bounds=r,r};function bj(e,t,r,n,i,o,a){var s=r.minPositionX,l=r.minPositionY,c=r.maxPositionX,d=r.maxPositionY,u=0,h=0;return a&&(u=i,h=o),{x:fj(e,s-u,c+u,n),y:fj(t,l-h,d+h,n)}}function vj(e,t,r,n,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=n-s;return"number"!=typeof t||"number"!=typeof r?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):bj(l-t*d,c-r*d,i,o,0,0,null)}function yj(e,t,r,n,i){var o=t-(i?n:0);return!Number.isNaN(r)&&e>=r?r:!Number.isNaN(t)&&e<=o?o:e}var xj=function(e,t){var r=e.setup.panning.excluded,n=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(n&&o&&a)&&!ez(o,r)},wj=function(e){var t=e.isInitialized,r=e.isPanning,n=e.setup.panning.disabled;return!(!t||!r||n)};function $j(e,t,r,n,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||r!==u)){var h=bj(t,r,s,o,n,i,a),p=h.x,g=h.y;e.setTransformState(c,p,g)}}var Cj=function(e,t){var r=e.setup,n=e.transformState.scale,i=r.minScale,o=r.disablePadding;return t>0&&n>=i&&!o?t:0},Sj=function(e){var t=e.mounted,r=e.setup,n=r.disabled,i=r.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&n&&!t)},kj=function(e){var t=e.mounted,r=e.velocity,n=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t)&&!(!r||!n)};function Dj(e,t,r,n,i,o,a,s,l,c){if(i){var d;if(t>a&&r>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&r<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return n?t:fj(e,o,a,i)}function Tj(e,t){if(Sj(e)){var r=e.lastMousePosition,n=e.velocityTime,i=e.setup,o=e.wrapperComponent,a=i.velocityAnimation.equalToMove,s=Date.now();if(r&&n&&o){var l=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(o,a),c=t.x-r.x,d=t.y-r.y,u=c/l,h=d/l,p=s-n,g=c*c+d*d,f=Math.sqrt(g)/p;e.velocity={velocityX:u,velocityY:h,total:f}}e.lastMousePosition=t,e.velocityTime=s}}function Oj(e,t){var r=e.transformState.scale;uj(e),mj(e,r),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var r=t.touches,n=e.transformState,i=n.positionX,o=n.positionY;if(e.isPanning=!0,1===r.length){var a=r[0].clientX,s=r[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var r=e.transformState,n=r.positionX,i=r.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-n,y:a-i}}(e,t)}function Ej(e){var t=e.transformState.scale,r=e.setup,n=r.minScale,i=r.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<n||!a&&!s)){var d=function(e){var t=e.transformState,r=t.positionX,n=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,h=d.minPositionX,p=d.maxPositionY,g=d.minPositionY,f=r>u||r<h,m=n>p||n<g,b=vj(e,r>u?c.offsetWidth:e.setup.minPositionX||0,n>p?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:f?v:r,positionY:m?y:n}}}(e);d&&pj(e,d,l,c)}}function _j(e,t,r){var n=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(n){var s=function(e,t,r){var n=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!n)return{x:l,y:c};var d=t-n.x,u=r-n.y;return{x:a?l:d,y:s?c:u}}(e,t,r),l=s.x,c=s.y,d=Cj(e,o),u=Cj(e,a);Tj(e,{x:l,y:c}),$j(e,l,c,d,u)}}function Mj(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,r=e.velocity,n=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==n?void 0:n.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&r&&(null==r?void 0:r.total)>.1&&u?function(e){var t=e.velocity,r=e.bounds,n=e.setup,i=e.wrapperComponent;if(kj(e)&&t&&r&&i){var o=t.velocityX,a=t.velocityY,s=t.total,l=r.maxPositionX,c=r.minPositionX,d=r.maxPositionY,u=r.minPositionY,h=n.limitToBounds,p=n.alignmentAnimation,g=n.zoomAnimation,f=n.panning,m=f.lockAxisY,b=f.lockAxisX,v=g.animationType,y=p.sizeX,x=p.sizeY,w=p.velocityAlignmentTime,$=function(e,t){var r=e.setup.velocityAnimation,n=r.equalToMove,i=r.animationTime,o=r.sensitivity;return n?i*t*o:i}(e,s),C=Math.max($,w),S=Cj(e,y),k=Cj(e,x),D=S*i.offsetWidth/100,T=k*i.offsetHeight/100,O=l+D,E=c-D,_=d+T,M=u-T,F=e.transformState,I=(new Date).getTime();hj(e,v,C,(function(t){var r=e.transformState,n=r.scale,i=r.positionX,s=r.positionY,g=((new Date).getTime()-I)/w,f=1-(0,cj[p.animationType])(Math.min(1,g)),v=1-t,y=i+o*v,x=s+a*v,$=Dj(y,F.positionX,i,b,h,c,l,E,O,f),C=Dj(x,F.positionY,s,m,h,u,d,M,_,f);i===y&&s===x||e.setTransformState(n,$,C)}))}}(e):Ej(e)}}function Fj(e,t,r,n){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=yj(sj(t,2),o,a,0,!1),c=vj(e,r,n,l,mj(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function Ij(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,h=c||n>=a;if((n>=1||s)&&Ej(e),!h&&i&&e.mounted){var p=Fj(e,a,t||i.offsetWidth/2,r||i.offsetHeight/2);p&&pj(e,p,d,u)}}var Aj=function(){return Aj=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Aj.apply(this,arguments)};function Bj(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var jj=1,zj=0,Rj=0,Pj={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},Lj=function(e){var t,r,n,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:jj,scale:null!==(r=e.initialScale)&&void 0!==r?r:jj,positionX:null!==(n=e.initialPositionX)&&void 0!==n?n:zj,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:Rj}},Nj=function(e){var t=Aj({},Pj);return Object.keys(e).forEach((function(r){var n=void 0!==e[r];if(void 0!==Pj[r]&&n){var i=Object.prototype.toString.call(Pj[r]),o="[object Object]"===i,a="[object Array]"===i;t[r]=o?Aj(Aj({},Pj[r]),e[r]):a?Bj(Bj([],Pj[r],!0),e[r],!0):e[r]}})),t},Hj=function(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?n*Math.exp(t*r):n+t*r;return yj(sj(u,3),s,a,d,!1)};function Wj(e,t,r,n,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,h=Fj(e,Hj(e,t,r),d,u);if(!h)return console.error("Error during zoom event. New transformation state was not calculated.");pj(e,h,n,i)}function Yj(e,t,r,n){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=Lj(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var h=gj(e,s.scale),p=bj(s.positionX,s.positionY,h,a,0,0,o),g={scale:s.scale,positionX:p.x,positionY:p.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==n||n(),pj(e,g,t,r))}}var Vj=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),Wj(e,1,t,r,n)}},Uj=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),Wj(e,-1,t,r,n)}},Kj=function(e){return function(t,r,n,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var h={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(r)?l:r,scale:Number.isNaN(n)?c:n};pj(e,h,i,o)}}},Xj=function(e){return function(t,r){void 0===t&&(t=200),void 0===r&&(r="easeOut"),Yj(e,t,r)}},qj=function(e){return function(t,r,n){void 0===r&&(r=200),void 0===n&&(n="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=rz(t||i.scale,o,a);pj(e,s,r,n)}}},Gj=function(e){return function(t,r,n,i){void 0===n&&(n=600),void 0===i&&(i="easeOut"),uj(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,r){var n=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!n||!i)return o;var d=n.getBoundingClientRect(),u=t.getBoundingClientRect(),h=function(e,t,r,n){var i=e.getBoundingClientRect(),o=t.getBoundingClientRect(),a=r.getBoundingClientRect(),s=o.x*n.scale,l=o.y*n.scale;return{x:(i.x-a.x+s)/n.scale,y:(i.y-a.y+l)/n.scale}}(t,n,i,o),p=h.x,g=h.y,f=u.width/o.scale,m=u.height/o.scale,b=n.offsetWidth/f,v=n.offsetHeight/m,y=yj(r||Math.min(b,v),l,c,0,!1),x=(d.width-f*y)/2,w=(d.height-m*y)/2,$=bj((d.left-p)*y+x,(d.top-g)*y+w,gj(e,y),s,0,0,n);return{positionX:$.x,positionY:$.y,scale:y}}(e,a,r);pj(e,s,n,i)}}},Zj=function(e){return{instance:e,zoomIn:Vj(e),zoomOut:Uj(e),setTransform:Kj(e),resetTransform:Xj(e),centerView:qj(e),zoomToElement:Gj(e)}},Qj=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,Zj(e)),t};function Jj(){try{return{get passive(){return!0,!1}}}catch(e){return!1}}var ez=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},tz=function(e){e&&clearTimeout(e)},rz=function(e,t,r){var n=r.offsetWidth*e,i=r.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-n)/2,positionY:(t.offsetHeight-i)/2}};function nz(e,t,r){var n=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-n.left)/r,o=(e.clientY-n.top)/r;else{var a=e.touches[0];i=(a.clientX-n.left)/r,o=(a.clientY-n.top)/r}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var iz=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},oz=function(e,t){var r=e.props,n=r.onWheel,i=r.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,h=a.disablePadding,p=a.smooth,g=d.size,f=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var r=function(e){return e?e.deltaY<0?1:-1:0}(e),n=function(e,t){return"number"==typeof e?e:t}(t,r);return n}(t,null),y=function(e,t,r,n,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,h=d.size,p=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var g=o+t*r;if(i)return g;var f=!n&&!p;return yj(sj(g,3),c,l,h,f&&!u)}(e,v,p?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=mj(e,y),w=nz(t,o,s),$=l&&(f||0===g||c||h),C=vj(e,w.x,w.y,y,x,$),S=C.x,k=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,k),lj(Qj(e),t,n),lj(Qj(e),t,i)}},az=function(e,t){var r=e.props,n=r.onWheelStop,i=r.onZoomStop;tz(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(Ij(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var r=e.previousWheelEvent,n=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!r&&(n<o||n>a||Math.sign(r.deltaY)!==Math.sign(t.deltaY)||r.deltaY>0&&r.deltaY<t.deltaY||r.deltaY<0&&r.deltaY>t.deltaY||Math.sign(r.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(tz(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,lj(Qj(e),t,n),lj(Qj(e),t,i))}),160))},sz=function(e,t){var r=e.contentComponent,n=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==n&&r){var u=function(e,t,r){var n=r.getBoundingClientRect(),i=e.touches,o=sj(i[0].clientX-n.left,5),a=sj(i[0].clientY-n.top,5);return{x:(o+sj(i[1].clientX-n.left,5))/2/t,y:(a+sj(i[1].clientY-n.top,5))/2/t}}(t,i,r);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var h=iz(t),p=function(e,t){var r=e.pinchStartScale,n=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!r||null===n||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:yj(sj(t/n*r,2),a,o,c,!d&&!l)}(e,h);if(p!==i){var g=mj(e,p),f=a&&(c||0===d||s),m=vj(e,u.x,u.y,p,g,f),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=h,e.setTransformState(p,b,v)}}}},lz=function(e,t){var r=e.props.onZoomStop,n=e.setup.doubleClick.animationTime;tz(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,lj(Qj(e),t,r)}),n)};function cz(e,t){var r=e.setup,n=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=r.doubleClick,u=d.disabled,h=d.mode,p=d.step,g=d.animationTime,f=d.animationType;if(!u&&!n){if("reset"===h)return function(e,t){var r=e.props,n=r.onZoomStart,i=r.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;lj(Qj(e),t,n),Yj(e,a,s,(function(){return lj(Qj(e),t,i)})),lz(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(h,e.transformState.scale),b=Hj(e,m,p);if(a!==b){lj(Qj(e),t,l);var v=nz(t,o,a),y=Fj(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");lj(Qj(e),t,c),pj(e,y,g,f),lz(e,t)}}}var dz=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,mj(t,t.transformState.scale),t.setup=Nj(e)},this.initializeWindowEvents=function(){var e,r,n=Jj(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(r=t.wrapperComponent)||void 0===r||r.addEventListener("wheel",t.onWheelPanning,n),null==o||o.addEventListener("mousedown",t.onPanningStart,n),null==o||o.addEventListener("mousemove",t.onPanning,n),null==o||o.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==o||o.addEventListener("keyup",t.setKeyUnPressed,n),null==o||o.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,r,n=Jj(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,n),null==o||o.removeEventListener("mousemove",t.onPanning,n),null==o||o.removeEventListener("mouseup",t.onPanningStop,n),null==i||i.removeEventListener("mouseleave",t.clearPanning,n),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,n),null==o||o.removeEventListener("keydown",t.setKeyPressed,n),document.removeEventListener("mouseleave",t.clearPanning,n),uj(t),null===(r=t.observer)||void 0===r||r.disconnect()},this.handleInitializeWrapperEvents=function(e){var r=Jj();e.addEventListener("wheel",t.onWheelZoom,r),e.addEventListener("dblclick",t.onDoubleClick,r),e.addEventListener("touchstart",t.onTouchPanningStart,r),e.addEventListener("touchmove",t.onTouchPanning,r),e.addEventListener("touchend",t.onTouchPanningStop,r)},this.handleInitialize=function(e){var r=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(Qj(t))})),r&&(t.setCenter(),t.observer=new ResizeObserver((function(){var r,n=e.offsetWidth,i=e.offsetHeight;(n>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(Qj(t))})),t.setCenter(),null===(r=t.observer)||void 0===r||r.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.setup.wheel,n=r.disabled,i=r.wheelDisabled,o=r.touchPadDisabled,a=r.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||n||!c||i&&!t.ctrlKey||o&&t.ctrlKey||ez(c,a))}(t,e);r&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var r=e.props,n=r.onWheelStart,i=r.onZoomStart;e.wheelStopEventTimer||(uj(e),lj(Qj(e),t,n),lj(Qj(e),t,i))}(t,e),oz(t,e),az(t,e))}},this.onWheelPanning=function(e){var r=t.setup,n=r.disabled,i=r.wheel,o=r.panning;if(t.wrapperComponent&&t.contentComponent&&!n&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,h=o.lockAxisY?l:d,p=t.setup.alignmentAnimation,g=p.sizeX,f=p.sizeY,m=Cj(t,g),b=Cj(t,f);u===s&&h===l||$j(t,u,h,m,b)}},this.onPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;r||xj(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),uj(t),Oj(t,e),lj(Qj(t),e,n))},this.onPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;r||wj(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),_j(t,e.clientX,e.clientY),lj(Qj(t),e,n))},this.onPanningStop=function(e){var r=t.props.onPanningStop;t.isPanning&&(Mj(t),lj(Qj(t),e,r))},this.onPinchStart=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinchingStart,o=n.onZoomStart;if(!r){var a=function(e,t){var r=e.setup.pinch,n=r.disabled,i=r.excluded,o=e.isInitialized,a=t.target;return!(!o||n||!a||ez(a,i))}(t,e);a&&(function(e,t){var r=iz(t);e.pinchStartDistance=r,e.lastDistance=r,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,uj(e)}(t,e),uj(t),lj(Qj(t),e,i),lj(Qj(t),e,o))}},this.onPinch=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinching,o=n.onZoom;if(!r){var a=function(e){var t=e.setup.pinch.disabled,r=e.isInitialized,n=e.pinchStartDistance;return!(!r||t||!n)}(t);a&&(e.preventDefault(),e.stopPropagation(),sz(t,e),lj(Qj(t),e,i),lj(Qj(t),e,o))}},this.onPinchStop=function(e){var r,n,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(n=(r=t).pinchMidpoint,r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,Ij(r,null==n?void 0:n.x,null==n?void 0:n.y),lj(Qj(t),e,o),lj(Qj(t),e,a))},this.onTouchPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;if(!r&&xj(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,uj(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(uj(t),Oj(t,e),lj(Qj(t),e,n)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(r)return;if(!wj(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];_j(t,i.clientX,i.clientY),lj(Qj(t),e,n)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.isInitialized,n=e.setup,i=e.wrapperComponent,o=n.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(r&&l&&c)||a||ez(l,s))}(t,e);r&&cz(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,r,n){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(n))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=r,t.transformState.positionY=n,t.applyTransformation();var o=Qj(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),lj(o,{scale:e,positionX:r,positionY:n},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=rz(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,r,n){return t.props.customTransform?t.props.customTransform(e,r,n):function(e,t,r){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(r,")")}(e,r,n)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,r=e.scale,n=e.positionX,i=e.positionY,o=t.handleTransformStyles(n,i,r);t.contentComponent.style.transform=o}},this.getContext=function(){return Qj(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,r){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=r,mj(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(r),t.initializeWindowEvents(),t.isInitialized=!0;var n=Qj(t);lj(n,void 0,t.props.onInit)},this.props=e,this.setup=Nj(this.props),this.transformState=Lj(this.props)},uz=i.createContext(null),hz=i.forwardRef((function(e,t){var r=o(new dz(e)).current,n=function(e,t){return"function"==typeof e?e(t):e}(e.children,Zj(r));return b(t,(function(){return Zj(r)}),[r]),u((function(){r.update(e)}),[r,e]),i.createElement(uz.Provider,{value:r},n)}));i.forwardRef((function(e,t){var r,n=o(null),a=f(uz);return u((function(){return a.onChange((function(e){if(n.current){n.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),i.createElement("div",Aj({},e,{ref:(r=[n,t],function(e){r.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var pz="transform-component-module_wrapper__SPB86",gz="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var fz=function(e){var t=e.children,r=e.wrapperClass,n=void 0===r?"":r,a=e.contentClass,s=void 0===a?"":a,l=e.wrapperStyle,c=e.contentStyle,d=e.wrapperProps,h=void 0===d?{}:d,p=e.contentProps,g=void 0===p?{}:p,m=f(uz),b=m.init,v=m.cleanupWindowEvents,y=o(null),x=o(null);return u((function(){var e=y.current,t=x.current;return null!==e&&null!==t&&b&&(null==b||b(e,t)),function(){null==v||v()}}),[]),i.createElement("div",Aj({},h,{ref:y,className:"react-transform-wrapper ".concat(pz," ").concat(n),style:l}),i.createElement("div",Aj({},g,{ref:x,className:"react-transform-component ".concat(gz," ").concat(s),style:c}),t))};const mz=M.div`
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
`,bz=t=>e(mz,Object.assign({},t,{children:e(te,{})})),vz=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,yz=M.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,xz=M(bz)`
    width: 100%;
    height: 100%;
`,wz=({src:t,className:r,alt:n,fit:i,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=a(!0),[h,p]=a();u((()=>{d(!0),p(void 0);const e=new Image;e.src=t,e.onload=()=>{s&&l&&l({src:t,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),p(e)}}),[t]);return e(vz,{className:r,children:h?null!=o?o:e(xz,{}):c?e(xd,{}):e(yz,{src:t,alt:n,$fit:i})})},$z=M(kc)`
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
`,Cz=M($z)`
    position: absolute;
    top: ${gc["spacing-48"]};
    right: ${gc["spacing-48"]};
    z-index: 5;

    ${bc.MaxWidth.sm} {
        top: ${gc["spacing-20"]};
        right: ${gc["spacing-20"]};
    }
`,Sz=M($z)`
    position: absolute;
    top: ${gc["spacing-48"]};
    right: calc(
        2.5rem + ${gc["spacing-48"]} + ${gc["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${bc.MaxWidth.sm} {
        top: ${gc["spacing-20"]};
        right: calc(
            2.5rem + ${gc["spacing-20"]} + ${gc["spacing-16"]}
        );
    }
`,kz=M($z)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&F`
            left: ${gc["spacing-48"]};
            ${bc.MaxWidth.sm} {
                left: ${gc["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&F`
            right: ${gc["spacing-48"]};
            ${bc.MaxWidth.sm} {
                right: ${gc["spacing-20"]};
            }
        `}
`,Dz=M.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,Tz=M.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,Oz=M.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,Ez=M.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,_z=M.div`
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
`,Mz=M(wz)`
    height: 100%;
    width: 100%;
`,Fz=M(bz)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,Iz=M.div`
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
`,Az=M(_c.BodyXS)`
    display: inline-flex;
    padding: ${gc["spacing-4"]} ${gc["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${fc.full};
    background-color: ${dc.bg};
    text-align: center;
`,Bz=M.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${dc["bg-inverse"]};
    padding: ${gc["spacing-24"]} ${gc["spacing-16"]};

    ${bc.MaxWidth.sm} {
        padding: ${gc["spacing-16"]} ${gc["spacing-20"]};
    }
`,jz=M.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${gc["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,zz=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${bc.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,Rz=M.div`
    cursor: pointer;
    background-color: ${dc["bg-inverse"]};
    border-radius: ${fc.md};
    border: ${pc.solid} transparent;
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

    ${e=>e.$active?F`
                  border-width: ${pc["width-040"]};
                  border-color: ${dc["border-selected"]};

                  ${bc.MaxWidth.sm} {
                      border-width: ${pc["width-020"]};
                  }

                  :hover {
                      border-color: ${dc["border-selected-hover"]};
                  }
              `:F`
                  border-width: ${pc["width-010"]};

                  :hover {
                      border-color: ${dc["border-hover"]};
                  }
              `};
`,Pz=M(wz)`
    height: 100%;
    width: 100%;
`,Lz=(n,i)=>{var{items:s,initialActiveItemIndex:l,hideThumbnail:c=!1,hideNavigation:d=!1,hideCounter:h=!1,hideMagnifier:p=!1,onClose:g}=n,f=dt(n,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[m,v]=a(null!=l?l:0),[y,x]=a({}),[w,$]=a(1),[C,S]=a(),[k,D]=a(),T=o(null),O=o([]),E=o([]),_=C&&k?C-k:0;b(i,(()=>({currentItemIndex:m,setCurrentItem:j,goToPrevItem:A,goToNextItem:B}))),gu("keydown",(function(e){"ArrowRight"===e.key?B():"ArrowLeft"===e.key?A():"Escape"===e.key&&g&&g()}),"document"),u((()=>{var e,t;null===(t=null===(e=O.current)||void 0===e?void 0:e[m])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),$(1)}),[m]);const M=e=>{$(e.state.scale)};const F=({src:e,height:t,width:r})=>{x((n=>Object.assign(Object.assign({},n),{[e]:{height:t,width:r}})))},I=()=>{const e=y[s[m].src];if(T.current&&e){const{clientHeight:t,clientWidth:r}=T.current,{width:n,height:i}=e,o=i/n<t/r;return n<r&&i<t?o?r/n:t/i:o?t/(i/(n/r)):r/(n/(i/t))}},A=()=>{var e,t;null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>0===e?s.length-1:e-1))},B=()=>{var e,t;null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>e===s.length-1?0:e+1))},j=e=>{var t,r;null===(r=null===(t=E.current)||void 0===t?void 0:t[m])||void 0===r||r.resetTransform(),v(e)};return t(Wf,Object.assign({},f,{"data-testid":"image-carousel-modal",children:[e(Cz,{"aria-label":"Close image carousel",onClick:g,focusHighlight:!1,children:e(J,{"aria-hidden":!0})}),!p&&e(Sz,{"aria-label":1===w?"Zoom in":"Zoom out",onClick:()=>{var e,t,r,n;if(1===w){const r=I();null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.centerView(r),$(null!=r?r:1)}else $(1),null===(n=null===(r=E.current)||void 0===r?void 0:r[m])||void 0===n||n.resetTransform()},focusHighlight:!1,children:e(1===w?re:ne,{"aria-hidden":!0})}),t(Dz,{children:[t(Tz,{children:[!d&&t(r,{children:[e(kz,{"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:A,children:e(ie,{"aria-hidden":!0})}),e(kz,{"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:B,children:e(oe,{"aria-hidden":!0})})]}),e(Oz,{ref:T,onTouchStart:e=>{w<=1&&S(e.touches[0].clientX)},onTouchMove:e=>{!C||w>1||D(e.touches[0].clientX)},onTouchEnd:()=>{T.current&&(Math.abs(_)>T.current.offsetWidth/3&&(_>0?B():A()),S(void 0),D(void 0))},children:e(Ez,{style:{transform:`translateX(calc(${100*-m}% - ${_}px))`},children:s.map(((t,r)=>{var n;return e(_z,{"data-testid":"slide-item",children:e(hz,{ref:e=>E.current[r]=e,panning:{disabled:w<=1},initialScale:1,onZoom:M,onZoomStop:M,onWheel:M,children:e(fz,{children:e(Mz,{src:t.src,alt:null!==(n=t.alt)&&void 0!==n?n:`Image ${r+1}`,placeholder:e(Fz,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:F})})})},r)}))})}),!h&&e(Iz,{children:e(Az,{weight:"semibold",children:`${m+1}/${s.length}`})})]}),!c&&e(Bz,{children:e(jz,{children:s.map(((t,r)=>{var n;const i=null!==(n=t.thumbnailSrc)&&void 0!==n?n:t.src;return e(zz,{children:e(Rz,{"data-testid":"thumbnail-item",$active:r===m,onClick:()=>j(r),ref:e=>O.current[r]=e,children:e(Pz,{src:i,alt:`Thumbnail ${r+1}`,fit:"cover"})})},r)}))})})]})]}))},Nz=p(Lz),Hz=M.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${dc.bg};
    border: ${pc["width-010"]} ${pc.solid} transparent;
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

    ${e=>e.$error?F`
                background: ${dc.bg};
                border: ${pc["width-010"]} ${pc.solid}
                    ${dc["border-error"]};
            `:e.$selected?F`
                background: ${dc["bg-selected"]};
                border: ${pc["width-010"]} ${pc.solid}
                    ${dc["border-selected"]};

                &:hover {
                    background: ${dc["bg-selected-hover"]};
                    border: ${pc["width-010"]} ${pc.solid}
                        ${dc["border-selected-hover"]};
                }
            `:F`
                &:hover {
                    border: ${pc["width-010"]} ${pc.solid}
                        ${dc["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${pc["width-010"]} ${pc.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${dc["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,Wz=i.forwardRef(((r,n)=>{var{children:i,imgSrc:o,selected:a,error:s,type:l="button"}=r,c=dt(r,["children","imgSrc","selected","error","type"]);return t(Hz,Object.assign({ref:n,$selected:a,$error:s,type:l},c,{children:[e(Bm,{src:o}),i]}))})),Yz=F`
    height: 1.125rem;
    width: 1.125rem;
    color: ${dc["icon-primary"]};
`,Vz=M.div`
    border-top: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};
`,Uz=M(_c.HeaderSM).attrs({as:"div"})`
    color: ${dc["text-primary"]};
    margin-bottom: 0.5rem;
`,Kz=M(_c.HeaderXS).attrs({as:"div"})`
    color: ${dc["text-primary"]};
`,Xz=M(me)`
    ${Yz}
`,qz=M.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};
    }

    :hover {
        ${Uz},
        ${Kz},
        ${Xz} {
            color: ${dc["text-hover"]};
        }
    }
`,Gz=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,Zz=M(_c.BodyMD)`
    margin-top: 0.25rem;
`,Qz=M(Yo.div)`
    overflow: hidden;
`,Jz=M.div`
    border-top: ${pc["width-010"]} ${pc.solid} ${dc.border};
`,eR=M(_c.BodyMD).attrs({as:"span"})`
    color: ${dc["text-primary"]};
    margin-right: 1rem;
`,tR=M(tt)`
    ${Yz}
`,rR=M(et)`
    ${Yz}
`,nR=M.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${pc["width-010"]} ${pc.solid} ${dc.border};

    :hover {
        ${eR},
        ${tR},
        ${rR} {
            color: ${dc["text-hover"]};
        }
    }
`,iR=n=>{var{items:i,maxShown:o,style:s="default",onItemClick:l}=n,c=dt(n,["items","maxShown","style","onItemClick"]);const[d,u]=a(!o||o>=i.length),h=o?i.slice(0,o):i,p=o?i.slice(o):[],g=cr(),f=g.ref,m=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):l&&(e.preventDefault(),l(t,e))},b=()=>{u(!d)},v=(n,i,o,a)=>t(r,{children:[t(Gz,{children:[e("small"===s?Kz:Uz,{"data-testid":`link-title-${n}`,weight:"semibold",children:i}),o&&e(Zz,{"data-testid":`link-description-${n}`,children:o}),a]}),e(Xz,{})]}),y=Do({height:d?g.height:0});return t(Vz,Object.assign({},c,{children:[h.map(((t,r)=>{const{title:n,description:i,secondaryDescription:o,onClick:a}=t,s=dt(t,["title","description","secondaryDescription","onClick"]);return e(qz,Object.assign({"data-testid":`list-item-shown-${r}`,onClick:e=>m(e,t)},s,{children:v(r,n,i,o)}),`list-item-shown-${r}`)})),p.length>0&&e(Qz,{style:y,"data-testid":"minimised-content",children:e(Jz,{ref:f,children:p.map(((t,r)=>{const{title:n,description:i,onClick:o,secondaryDescription:a}=t,s=dt(t,["title","description","onClick","secondaryDescription"]);return e(qz,Object.assign({"data-testid":`list-item-minimised-${r}`,onClick:e=>m(e,t)},s,{children:v(r,n,i,a)}),`list-item-minimised-${r}`)}))})}),p.length>0&&t(nR,{type:"button",onClick:b,"data-testid":"toggle-button",$showMinimised:d,children:[e(eR,{weight:"semibold","data-testid":"toggle-button-label",children:d?"View less":"View more"}),e(d?rR:tR,{})]})]}))},oR=M.div`
    ${e=>ad({textSize:e.$textSize})}
    ${e=>e.color&&F`
            color: ${e.color};
        `}
`,aR=p(((t,r)=>{const{baseTextColor:n,baseTextSize:i,inline:o}=t,a=dt(t,["baseTextColor","baseTextSize","inline"]);return e(oR,Object.assign({ref:r,as:o?"span":"div",$textSize:i,$textColor:n},a))})),sR=M.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,n=t.sm?t.sm<=2?t.sm:2:void 0,i=t.md||t.sm||2;return F`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${mf.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/i}% - 2rem), 1fr)
                );
            }

            ${mf.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${n||"auto-fill"},
                    minmax(calc(${100/(n||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,lR=M.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:n,colsMd:i,startSm:o,colsSm:a}=e;return F`
            grid-column: ${t||n||"auto"} / span
                ${r||i||1};

            ${mf.MaxWidth.tablet} {
                grid-column: ${n||o||"auto"} / span
                    ${i||a||1};
            }

            ${mf.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span ${a||1};
            }
        `}}
`,cR={Grid:i.forwardRef(((t,r)=>{const{children:n}=t,i=dt(t,["children"]);return e(sR,Object.assign({ref:r},i,{children:n}))})),Tile:i.forwardRef(((t,r)=>{const{children:n}=t,i=dt(t,["children"]);return e(lR,Object.assign({ref:r},i,{children:n}))}))},dR=M.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${bc.MaxWidth.sm} {
        padding: 0;
    }
`,uR=()=>{u((()=>{t()||r()}),[]);const t=()=>document.getElementById(hR),r=()=>{if(!document.getElementById(hR)){const e=document.createElement("script");e.id=hR,e.type="module",e.src=pR,document.head.appendChild(e)}};return e(dR,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},hR="lifesg-ds-masthead-script",pR="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",gR={notCompress:6,compress:4},fR=M.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,mR=M.nav`
    height: ${e=>e.$compress?gR.compress:gR.notCompress}rem;
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
`,bR=M.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${bc.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,vR=M(kc)`
    display: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,yR=M(rt)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${dc.icon};
`,xR=M.div`
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
`,wR=M.div`
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
`,$R=M.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${hc["duration-150"]} ${hc["ease-default"]};
        object-fit: contain;
    }
`,CR=({resources:t,onClick:r,"data-id":n,"data-testid":i="navbar-brand",type:o})=>e($R,{role:"link",onClick:e=>{r&&r(e,o)},tabIndex:0,"data-id":n,"data-testid":i,$type:o,children:e(Bm,{src:t.logoSrc,alt:t.brandName})}),SR=M.div`
    display: none;

    ${bc.MaxWidth.lg} {
        display: flex;
    }
`,kR=M.div`
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
            transition: all 300ms ${hc["ease-entrance"]};
            transition-delay: 200ms;
        `:F`
        right: -100%;
        transition: all 300ms ${hc["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return F`
            height: calc(${t} * 100);
        `}}

	${bc.MaxWidth.lg} {
        width: 75%;
    }

    ${bc.MaxWidth.sm} {
        width: 100%;
    }
`,DR=M.div`
    display: flex;
    flex-direction: column;
`,TR=M.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${gc["spacing-40"]} ${gc["spacing-20"]}
        ${gc["spacing-32"]};
`,OR=M(je)`
    height: 1.5rem;
    width: 1.5rem;
`,ER=M(kc)`
    position: absolute;
    right: -${gc["spacing-4"]};
    color: ${dc.icon};

    :active,
    :focus {
        color: ${dc["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,_R=i.forwardRef(((n,i)=>{const{show:o,resources:s={},children:l,hideNavBranding:c,onClose:d,onBrandClick:h}=n,[p,g]=a(0),{primary:f,secondary:m}=s;u((()=>(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=()=>{if(window){const e=.01*window.innerHeight;g(e)}};return e(SR,{ref:i,"data-testid":"drawer",children:e(kR,{$show:o,$viewHeight:p,children:t(DR,{children:[t(TR,{children:[e(xR,{"data-id":"drawer-brand-container",children:!c&&t(r,{children:[f&&e(CR,{resources:f,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&t(r,{children:[e(wR,{}),e(CR,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e(ER,{onClick:d,focusHighlight:!1,"aria-label":"Close nav menu",children:e(OR,{})})]}),l]})})})})),MR=M.ul`
    display: flex;
    list-style: none;
    margin-left: ${gc["spacing-64"]};
    flex-shrink: 0;

    ${bc.MaxWidth.lg} {
        display: none;
    }
`,FR=M.ul`
    display: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${gc["spacing-64"]};
        flex-shrink: 0;
    }
`,IR=M.ul`
    display: none;
    list-style: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${gc["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${bc.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,AR=M.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${gc["spacing-16"]};
    }

    ${bc.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${gc["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?gc["spacing-16"]:"0"};
        }
    }

    ${bc.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return F`
                    padding: 0 ${gc["spacing-16"]};
                `}}
    }
`,BR=M(ed.Small)`
    ${bc.MaxWidth.lg} {
        width: 100%;
    }
`,jR=M.div`
    display: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${gc["spacing-40"]};
    }
`,zR=M(_c.BodyMD)`
    margin-bottom: ${gc["spacing-8"]};
`,RR=M.div`
    display: flex;
`,PR=M.a`
    :not(:last-child) {
        margin-right: ${gc["spacing-16"]};
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
`,LR=({actionButtons:n,mobile:i=!1,onActionButtonClick:o})=>{const a=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(t,e)},l=(r,n)=>{const i=r?(e=>{const t=Mk(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(n):n;return i.map(((n,i)=>{let o;switch(n.type){case"download":o=r?(l=n.args,t(jR,{children:[e(zR,{weight:"semibold",children:l&&l.children||"Download the app"}),t(RR,{children:[e(PR,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(PR,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e(BR,Object.assign({},n.args,{type:"button",onClick:s(n),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const t=n.args["data-testid"]?`action-button__${n.args["data-testid"]}`:`action-button__button-${r?"mobile-":""}${i+1}`;o=e(BR,Object.assign({},n.args,{type:"button",onClick:s(n),"data-testid":t}));break}case"component":{const e=n.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return e(AR,{$mobile:r,children:o},`action-button-${i+1}`)}))};if(n){const o=(null==n?void 0:n.mobile)||n.desktop,a=o.filter((e=>!!e.uncollapsible)),s=o.filter((e=>!e.uncollapsible));return i?e(r,{children:s.length>0&&e(IR,{children:l(i,s)})}):t(r,{children:[a.length>0&&e(FR,{children:l(!1,a)}),n.desktop.length>0&&e(MR,{children:l(i,n.desktop)})]})}return e(r,{})};var NR;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const t=e;return!t.itemType||"link"===t.itemType}}(NR||(NR={}));const HR=M.ul`
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

    background: ${dc.bg};
    border-radius: ${fc.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${dc.Primitive["neutral-50"]} r g b / 25%);
`,WR=M.ul`
    display: none;
    list-style: none;

    ${bc.MaxWidth.lg} {
        border-left: ${pc["width-040"]} solid ${dc["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,YR=M(_c.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${dc.text};

    margin: 0 ${gc["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${pc.solid} transparent;
    border-width: ${gc["spacing-12"]} ${gc["spacing-8"]};

    border-radius: ${fc.md};

    ${Dc(2)}
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
`,VR=M.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,UR=({items:t,mobile:n=!1,onItemClick:i})=>{const o=e=>t=>{t.stopPropagation(),i(t,e)},a=(r=!1)=>t.map(((t,n)=>{const{children:i,options:a}=t,s=dt(t,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return e(VR,{children:e(YR,Object.assign({"data-testid":l},s,{onClick:o(t)},a,{children:i}))},n)}));if(t&&t.length>0){return e(n?WR:HR,{children:a(n)})}return e(r,{})},KR=M.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${bc.MaxWidth.lg} {
        display: none;
    }
`,XR=M.ul`
    display: none;
    list-style: none;

    ${bc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,qR=M.li`
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
`,GR=M(_c.LinkMD)`
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
`,ZR=M.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,QR=M.div`
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
`,JR=M.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,eP=M(kc)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,tP=M(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${dc.icon};
    :hover {
        ${e=>e.$selected?dc["icon-selected-hover"]:dc["icon-hover"]};
    }
`,rP=({items:n,selectedId:i,mobile:s=!1,hideNavBranding:l,onItemClick:c})=>{const[d,h]=a(-1),[p,g]=a(!1),f=o(null);u((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{g(!1)},b=(e,t)=>r=>{r.stopPropagation(),h(t),g(!0),c(r,e)},v=(e,t)=>{e.stopPropagation(),c(e,t),g(!1)},y=()=>n.map(((r,n)=>{if("component"===r.itemType){const t=r&&r.children||null;return e("li",{children:t},n)}{const o=(e=>{if(e.id===i)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(r),{children:a,options:c}=r,u=dt(r,["children","options"]),h=o?s?"bold":"semibold":"regular",g=s?`link__mobile-${n+1}`:`link__${n+1}`,f=d>=0&&d===n&&p;return t(qR,{$hiddenBranding:l,children:[t(GR,Object.assign({"data-testid":g,weight:h,$selected:o},u,{onClick:b(r,n)},c,{children:[e(ZR,{children:a}),o&&e(QR,{"data-testid":`${g}-indicator`,$selected:o}),s&&r.subMenu&&e(JR,{children:e(eP,{"data-testid":`${g}-expand-collapse-button`,$selected:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand",children:e(tP,{$selected:o})})})]})),f&&r.subMenu&&e(UR,{items:r.subMenu,mobile:s,onItemClick:v})]},n)}}));return n&&n.length>0?s?e(XR,{ref:f,children:y()}):e(KR,{ref:f,$alignLeft:l,children:y()}):e(r,{})},nP={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},iP={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},oP={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},aP={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},sP=p(((n,i)=>{var{items:s,className:l,id:c,selectedId:d,compress:h=!1,fixed:p=!0,resources:g,hideNavElements:f=!1,hideNavBranding:m=!1,drawerDismissalExclusions:v=[],actionButtons:y,onItemClick:x,onActionButtonClick:w,onBrandClick:$,masthead:C=!0,layout:S="default"}=n,k=dt(n,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[D,T]=a(!1),[O,E]=a(!1),_="stretch"===S,M=o(null),F=A(),I=(e=>{switch(e){case"bookingsg":return iP;case"mylegacy":return aP;case"ccube":return oP;default:return nP}})(null==F?void 0:F.resourceScheme),B=mc["lg-max"]({theme:F}),j=(null==g?void 0:g.primary)||I.primary,z=null==g?void 0:g.secondary;b(i,(()=>Object.assign(M.current,{dismissDrawer:()=>{R()}})),[D]),u((()=>(L(),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)})),[]);const R=()=>{T(!1),setTimeout((()=>{E(!1)}),550)},P=e=>D&&-1===v.indexOf(e),L=()=>{window.innerWidth<=B&&D&&R()},N=(e,t)=>{$&&(e.preventDefault(),$(t)),P("brand-click")&&R()},H=(e,t)=>{NR.isNavItemCommon(t)&&t.onClick?t.onClick(e):x&&(e.preventDefault(),x(t)),NR.isNavItemLink(t)&&!t.subMenu&&P("item-click")&&R()},W=(e,t)=>{var r;"button"!==t.type&&"download"!==t.type||!(null===(r=t.args)||void 0===r?void 0:r.onClick)?w&&(e.preventDefault(),w(t)):t.args.onClick(e),P("item-click")&&R()},Y=()=>{T(!0),E(!0)},V=()=>{P("close-button-click")&&R()},U=()=>{const t=s.mobile||s.desktop;return t&&t.length>0||y&&(e=>{const t=e.mobile||e.desktop;return!!t&&t.length&&t.some((e=>!e.uncollapsible))})(y)?e(vR,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:Y,focusHighlight:!1,children:e(yR,{})}):null};return t(fR,{ref:M,$fixed:p,className:l,id:c||"navbar-wrapper","data-testid":k["data-testid"]||"navbar-wrapper",children:[C&&e(uR,{}),t(XB.Content,{stretch:_,children:[t(mR,{$compress:h,children:[!m&&t(xR,{$compress:h,"data-id":"brand-container",children:[j&&e(CR,{resources:j,onClick:N,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),z&&t(r,{children:[e(wR,{$compress:h}),e(CR,{resources:z,onClick:N,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!f&&t(bR,{$hideNavBranding:m,children:[e(rP,{items:s.desktop,onItemClick:H,selectedId:d,hideNavBranding:m}),e(LR,{actionButtons:y,onActionButtonClick:W}),U()]})]}),!f&&e(Tf,{show:O,enableOverlayClick:!0,onOverlayClick:V,children:t(_R,{show:D,resources:{primary:j,secondary:z},onClose:V,onBrandClick:N,actionButtons:y,hideNavBranding:m,children:[e(rP,{items:s.mobile||s.desktop,onItemClick:H,selectedId:d,mobile:!0}),e(LR,{actionButtons:y,onActionButtonClick:W,mobile:!0})]})})]})]})})),lP=gR,cP=3.5,dP=F`
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
`,uP=M.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${hc["duration-800"]} ${hc["ease-default"]};
    background: ${dc["bg-inverse-subtle"]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,hP=M(XB.Content)`
    display: flex;
`,pP=M.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,gP=M.div`
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
        ${dP}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return F`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,fP=M(_c.LinkBL)`
    position: relative;

    ${dP}
`,mP=M(kc)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,bP=M(je)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${dc["icon-inverse"]};
`,vP=M.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${dc["hyperlink-inverse"]};
    ${uc["body-md-semibold"]};

    cursor: pointer;
`,yP=M.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,xP=r=>{var{children:n,visible:i=!0,dismissible:o=!0,sticky:s=!0,onDismiss:l,id:c,forwardedRef:d,maxCollapsedHeight:h,onClick:p,actionButton:g}=r,f=dt(r,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const m=f["data-testid"],[b,v]=a(i),{height:y=0,ref:x}=cr();u((()=>{v(i)}),[i]);const w=e=>{e.stopPropagation(),v(!1),o&&l&&l()},$=e=>{(null==g?void 0:g.onClick)&&(e.stopPropagation(),g.onClick(e))};if(!b)return null;return t(uP,Object.assign({ref:d,$sticky:s,$clickable:!!p,onClick:p},f,{children:[t(hP,{id:wP("container",c),children:[t(pP,{children:[e(gP,{"data-testid":wP("text-content",m),$maxCollapsedHeight:h&&y>h?h:void 0,children:e("div",{ref:x,children:n})}),g?e(vP,Object.assign({id:wP("action-button",c),"data-testid":wP("action-button",m),type:"button"},g,{onClick:$,children:g.children})):null]}),o&&e(mP,{onClick:w,id:wP("dismiss-button",c),"data-testid":wP("dismiss-button",m),focusHighlight:!1,type:"button","aria-label":"Dismiss notification",children:e(bP,{"aria-hidden":!0})})]}),p&&e(yP,{"aria-label":"Clickable banner",type:"button"})]}))},wP=(e,t="wrapper")=>`${t}-${e}`,$P=i.forwardRef(((t,r)=>e(xP,Object.assign({},t,{forwardedRef:r}))));$P.displayName="NotificationBanner";const CP=Object.assign($P,{Link:fP});var SP={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */SP.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,r){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,r)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function n(e,i,o){return n=r()?Reflect.construct:function(e,r,n){var i=[null];i.push.apply(i,r);var o=new(Function.bind.apply(e,i));return n&&t(o,n.prototype),o},n.apply(null,arguments)}function i(e){return o(e)||a(e)||s(e)||c()}function o(e){if(Array.isArray(e))return l(e)}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=Object.hasOwnProperty,u=Object.setPrototypeOf,h=Object.isFrozen,p=Object.getPrototypeOf,g=Object.getOwnPropertyDescriptor,f=Object.freeze,m=Object.seal,b=Object.create,v="undefined"!=typeof Reflect&&Reflect,y=v.apply,x=v.construct;y||(y=function(e,t,r){return e.apply(t,r)}),f||(f=function(e){return e}),m||(m=function(e){return e}),x||(x=function(e,t){return n(e,i(t))});var w=F(Array.prototype.forEach),$=F(Array.prototype.pop),C=F(Array.prototype.push),S=F(String.prototype.toLowerCase),k=F(String.prototype.toString),D=F(String.prototype.match),T=F(String.prototype.replace),O=F(String.prototype.indexOf),E=F(String.prototype.trim),_=F(RegExp.prototype.test),M=I(TypeError);function F(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return y(e,t,n)}}function I(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return x(e,r)}}function A(e,t,r){var n;r=null!==(n=r)&&void 0!==n?n:S,u&&u(e,null);for(var i=t.length;i--;){var o=t[i];if("string"==typeof o){var a=r(o);a!==o&&(h(t)||(t[i]=a),o=a)}e[o]=!0}return e}function B(e){var t,r=b(null);for(t in e)!0===y(d,e,[t])&&(r[t]=e[t]);return r}function j(e,t){for(;null!==e;){var r=g(e,t);if(r){if(r.get)return F(r.get);if("function"==typeof r.value)return F(r.value)}e=p(e)}function n(e){return console.warn("fallback value for",e),null}return n}var z=f(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=f(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),P=f(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),L=f(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),N=f(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=f(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),W=f(["#text"]),Y=f(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),V=f(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=f(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=f(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),X=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),q=m(/<%[\w\W]*|[\w\W]*%>/gm),G=m(/\${[\w\W]*}/gm),Z=m(/^data-[\-\w.\u00B7-\uFFFF]/),Q=m(/^aria-[\-\w]+$/),J=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=m(/^(?:\w+script|data):/i),te=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),re=m(/^html$/i),ne=m(/^[a-z][.\w]*(-[.\w]+)+$/i),ie=function(){return"undefined"==typeof window?null:window},oe=function(t,r){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var n=null,i="data-tt-policy-suffix";r.currentScript&&r.currentScript.hasAttribute(i)&&(n=r.currentScript.getAttribute(i));var o="dompurify"+(n?"#"+n:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),r=function(e){return ae(e)};if(r.version="2.5.5",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var n=t.document,o=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,l=t.Node,c=t.Element,d=t.NodeFilter,u=t.NamedNodeMap,h=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,p=t.HTMLFormElement,g=t.DOMParser,m=t.trustedTypes,b=c.prototype,v=j(b,"cloneNode"),y=j(b,"nextSibling"),x=j(b,"childNodes"),F=j(b,"parentNode");if("function"==typeof s){var I=o.createElement("template");I.content&&I.content.ownerDocument&&(o=I.content.ownerDocument)}var se=oe(m,n),le=se?se.createHTML(""):"",ce=o,de=ce.implementation,ue=ce.createNodeIterator,he=ce.createDocumentFragment,pe=ce.getElementsByTagName,ge=n.importNode,fe={};try{fe=B(o).documentMode?o.documentMode:{}}catch(e){}var me={};r.isSupported="function"==typeof F&&de&&void 0!==de.createHTMLDocument&&9!==fe;var be,ve,ye=X,xe=q,we=G,$e=Z,Ce=Q,Se=ee,ke=te,De=ne,Te=J,Oe=null,Ee=A({},[].concat(i(z),i(R),i(P),i(N),i(W))),_e=null,Me=A({},[].concat(i(Y),i(V),i(U),i(K))),Fe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ie=null,Ae=null,Be=!0,je=!0,ze=!1,Re=!0,Pe=!1,Le=!0,Ne=!1,He=!1,We=!1,Ye=!1,Ve=!1,Ue=!1,Ke=!0,Xe=!1,qe="user-content-",Ge=!0,Ze=!1,Qe={},Je=null,et=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,rt=A({},["audio","video","img","source","image","track"]),nt=null,it=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ot="http://www.w3.org/1998/Math/MathML",at="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml",lt=st,ct=!1,dt=null,ut=A({},[ot,at,st],k),ht=["application/xhtml+xml","text/html"],pt="text/html",gt=null,ft=o.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},bt=function(t){gt&&gt===t||(t&&"object"===e(t)||(t={}),t=B(t),be=be=-1===ht.indexOf(t.PARSER_MEDIA_TYPE)?pt:t.PARSER_MEDIA_TYPE,ve="application/xhtml+xml"===be?k:S,Oe="ALLOWED_TAGS"in t?A({},t.ALLOWED_TAGS,ve):Ee,_e="ALLOWED_ATTR"in t?A({},t.ALLOWED_ATTR,ve):Me,dt="ALLOWED_NAMESPACES"in t?A({},t.ALLOWED_NAMESPACES,k):ut,nt="ADD_URI_SAFE_ATTR"in t?A(B(it),t.ADD_URI_SAFE_ATTR,ve):it,tt="ADD_DATA_URI_TAGS"in t?A(B(rt),t.ADD_DATA_URI_TAGS,ve):rt,Je="FORBID_CONTENTS"in t?A({},t.FORBID_CONTENTS,ve):et,Ie="FORBID_TAGS"in t?A({},t.FORBID_TAGS,ve):{},Ae="FORBID_ATTR"in t?A({},t.FORBID_ATTR,ve):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Be=!1!==t.ALLOW_ARIA_ATTR,je=!1!==t.ALLOW_DATA_ATTR,ze=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Pe=t.SAFE_FOR_TEMPLATES||!1,Le=!1!==t.SAFE_FOR_XML,Ne=t.WHOLE_DOCUMENT||!1,Ye=t.RETURN_DOM||!1,Ve=t.RETURN_DOM_FRAGMENT||!1,Ue=t.RETURN_TRUSTED_TYPE||!1,We=t.FORCE_BODY||!1,Ke=!1!==t.SANITIZE_DOM,Xe=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,Te=t.ALLOWED_URI_REGEXP||Te,lt=t.NAMESPACE||st,Fe=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Fe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Fe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Fe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(je=!1),Ve&&(Ye=!0),Qe&&(Oe=A({},i(W)),_e=[],!0===Qe.html&&(A(Oe,z),A(_e,Y)),!0===Qe.svg&&(A(Oe,R),A(_e,V),A(_e,K)),!0===Qe.svgFilters&&(A(Oe,P),A(_e,V),A(_e,K)),!0===Qe.mathMl&&(A(Oe,N),A(_e,U),A(_e,K))),t.ADD_TAGS&&(Oe===Ee&&(Oe=B(Oe)),A(Oe,t.ADD_TAGS,ve)),t.ADD_ATTR&&(_e===Me&&(_e=B(_e)),A(_e,t.ADD_ATTR,ve)),t.ADD_URI_SAFE_ATTR&&A(nt,t.ADD_URI_SAFE_ATTR,ve),t.FORBID_CONTENTS&&(Je===et&&(Je=B(Je)),A(Je,t.FORBID_CONTENTS,ve)),Ge&&(Oe["#text"]=!0),Ne&&A(Oe,["html","head","body"]),Oe.table&&(A(Oe,["tbody"]),delete Ie.tbody),f&&f(t),gt=t)},vt=A({},["mi","mo","mn","ms","mtext"]),yt=A({},["foreignobject","annotation-xml"]),xt=A({},["title","style","font","a","script"]),wt=A({},R);A(wt,P),A(wt,L);var $t=A({},N);A($t,H);var Ct=function(e){var t=F(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var r=S(e.tagName),n=S(t.tagName);return!!dt[e.namespaceURI]&&(e.namespaceURI===at?t.namespaceURI===st?"svg"===r:t.namespaceURI===ot?"svg"===r&&("annotation-xml"===n||vt[n]):Boolean(wt[r]):e.namespaceURI===ot?t.namespaceURI===st?"math"===r:t.namespaceURI===at?"math"===r&&yt[n]:Boolean($t[r]):e.namespaceURI===st?!(t.namespaceURI===at&&!yt[n])&&!(t.namespaceURI===ot&&!vt[n])&&!$t[r]&&(xt[r]||!wt[r]):!("application/xhtml+xml"!==be||!dt[e.namespaceURI]))},St=function(e){C(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=le}catch(t){e.remove()}}},kt=function(e,t){try{C(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){C(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(Ye||Ve)try{St(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Dt=function(e){var t,r;if(We)e="<remove></remove>"+e;else{var n=D(e,/^[\r\n\t ]+/);r=n&&n[0]}"application/xhtml+xml"===be&&lt===st&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=se?se.createHTML(e):e;if(lt===st)try{t=(new g).parseFromString(i,be)}catch(e){}if(!t||!t.documentElement){t=de.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?le:i}catch(e){}}var a=t.body||t.documentElement;return e&&r&&a.insertBefore(o.createTextNode(r),a.childNodes[0]||null),lt===st?pe.call(t,Ne?"html":"body")[0]:Ne?t.documentElement:a},Tt=function(e){return ue.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},Ot=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof h)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Et=function(t){return"object"===e(l)?t instanceof l:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},_t=function(e,t,n){me[e]&&w(me[e],(function(e){e.call(r,t,n,gt)}))},Mt=function(e){var t;if(_t("beforeSanitizeElements",e,null),Ot(e))return St(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return St(e),!0;var n=ve(e.nodeName);if(_t("uponSanitizeElement",e,{tagName:n,allowedTags:Oe}),e.hasChildNodes()&&!Et(e.firstElementChild)&&(!Et(e.content)||!Et(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return St(e),!0;if("select"===n&&_(/<template/i,e.innerHTML))return St(e),!0;if(7===e.nodeType)return St(e),!0;if(Le&&8===e.nodeType&&_(/<[/\w]/g,e.data))return St(e),!0;if(!Oe[n]||Ie[n]){if(!Ie[n]&&It(n)){if(Fe.tagNameCheck instanceof RegExp&&_(Fe.tagNameCheck,n))return!1;if(Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(n))return!1}if(Ge&&!Je[n]){var i=F(e)||e.parentNode,o=x(e)||e.childNodes;if(o&&i)for(var a=o.length-1;a>=0;--a){var s=v(o[a],!0);s.__removalCount=(e.__removalCount||0)+1,i.insertBefore(s,y(e))}}return St(e),!0}return e instanceof c&&!Ct(e)?(St(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!_(/<\/no(script|embed|frames)/i,e.innerHTML)?(Pe&&3===e.nodeType&&(t=e.textContent,t=T(t,ye," "),t=T(t,xe," "),t=T(t,we," "),e.textContent!==t&&(C(r.removed,{element:e.cloneNode()}),e.textContent=t)),_t("afterSanitizeElements",e,null),!1):(St(e),!0)},Ft=function(e,t,r){if(Ke&&("id"===t||"name"===t)&&(r in o||r in ft))return!1;if(je&&!Ae[t]&&_($e,t));else if(Be&&_(Ce,t));else if(!_e[t]||Ae[t]){if(!(It(e)&&(Fe.tagNameCheck instanceof RegExp&&_(Fe.tagNameCheck,e)||Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(e))&&(Fe.attributeNameCheck instanceof RegExp&&_(Fe.attributeNameCheck,t)||Fe.attributeNameCheck instanceof Function&&Fe.attributeNameCheck(t))||"is"===t&&Fe.allowCustomizedBuiltInElements&&(Fe.tagNameCheck instanceof RegExp&&_(Fe.tagNameCheck,r)||Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(r))))return!1}else if(nt[t]);else if(_(Te,T(r,ke,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==O(r,"data:")||!tt[e])if(ze&&!_(Se,T(r,ke,"")));else if(r)return!1;return!0},It=function(e){return"annotation-xml"!==e&&D(e,De)},At=function(t){var n,i,o,a;_t("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(a=s.length;a--;){var c=n=s[a],d=c.name,u=c.namespaceURI;if(i="value"===d?n.value:E(n.value),o=ve(d),l.attrName=o,l.attrValue=i,l.keepAttr=!0,l.forceKeepAttr=void 0,_t("uponSanitizeAttribute",t,l),i=l.attrValue,!l.forceKeepAttr&&(kt(d,t),l.keepAttr))if(Re||!_(/\/>/i,i))if(Le&&_(/((--!?|])>)|<\/(style|title)/i,i))kt(d,t);else{Pe&&(i=T(i,ye," "),i=T(i,xe," "),i=T(i,we," "));var h=ve(t.nodeName);if(Ft(h,o,i)){if(!Xe||"id"!==o&&"name"!==o||(kt(d,t),i=qe+i),se&&"object"===e(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(h,o)){case"TrustedHTML":i=se.createHTML(i);break;case"TrustedScriptURL":i=se.createScriptURL(i)}try{u?t.setAttributeNS(u,d,i):t.setAttribute(d,i),Ot(t)?St(t):$(r.removed)}catch(e){}}}else kt(d,t)}_t("afterSanitizeAttributes",t,null)}},Bt=function e(t){var r,n=Tt(t);for(_t("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)_t("uponSanitizeShadowNode",r,null),Mt(r)||(r.content instanceof a&&e(r.content),At(r));_t("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(i){var o,s,c,d,u,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!Et(i)){if("function"!=typeof i.toString)throw M("toString is not a function");if("string"!=typeof(i=i.toString()))throw M("dirty is not a string, aborting")}if(!r.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof i)return t.toStaticHTML(i);if(Et(i))return t.toStaticHTML(i.outerHTML)}return i}if(He||bt(h),r.removed=[],"string"==typeof i&&(Ze=!1),Ze){if(i.nodeName){var p=ve(i.nodeName);if(!Oe[p]||Ie[p])throw M("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof l)1===(s=(o=Dt("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?o=s:o.appendChild(s);else{if(!Ye&&!Pe&&!Ne&&-1===i.indexOf("<"))return se&&Ue?se.createHTML(i):i;if(!(o=Dt(i)))return Ye?null:Ue?le:""}o&&We&&St(o.firstChild);for(var g=Tt(Ze?i:o);c=g.nextNode();)3===c.nodeType&&c===d||Mt(c)||(c.content instanceof a&&Bt(c.content),At(c),d=c);if(d=null,Ze)return i;if(Ye){if(Ve)for(u=he.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(_e.shadowroot||_e.shadowrootmod)&&(u=ge.call(n,u,!0)),u}var f=Ne?o.outerHTML:o.innerHTML;return Ne&&Oe["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&_(re,o.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+f),Pe&&(f=T(f,ye," "),f=T(f,xe," "),f=T(f,we," ")),se&&Ue?se.createHTML(f):f},r.setConfig=function(e){bt(e),He=!0},r.clearConfig=function(){gt=null,He=!1},r.isValidAttribute=function(e,t,r){gt||bt({});var n=ve(e),i=ve(t);return Ft(n,i,r)},r.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],C(me[e],t))},r.removeHook=function(e){if(me[e])return $(me[e])},r.removeHooks=function(e){me[e]&&(me[e]=[])},r.removeAllHooks=function(){me={}},r}var se=ae();return se}();var kP=Uo(SP.exports);const DP=t=>i.forwardRef(((r,n)=>e(xP,Object.assign({forwardedRef:n},r,{children:t.length>0?t.map(((t,r)=>{if("text"===t.type){const n=t.otherAttributes,i=kP.sanitize(t.content);return e("p",Object.assign({},n,{dangerouslySetInnerHTML:{__html:i}}),r)}{const n=t.otherAttributes;return e(CP.Link,Object.assign({},n,{children:t.content}),r)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),TP=M.div`
    display: flex;
    flex-direction: column;
`,OP=M.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${gc["spacing-8"]};
`,EP=M(o$)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${bc.MaxWidth.xs} {
            padding: 0 ${gc["spacing-8"]};
        }
    }
`,_P=M(ed.Small)`
    margin: ${gc["spacing-32"]} 0;
`,MP=r=>{var{id:n,value:i=[],"data-testid":s,className:l,cooldownDuration:c,actionButtonProps:d,errorMessage:h,numOfInput:p,onChange:g,onCooldownStart:f,onCooldownEnd:m}=r,b=dt(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=d?d:{},{disabled:y,onClick:x,styleType:w="secondary"}=v,$=dt(v,["disabled","onClick","styleType"]),C=o([]),S=o(g),[k,D]=a(new Array(p).fill("")),[T,O]=a(c),[E,_]=a(new Date);u((()=>{var e;return null===(e=null==C?void 0:C.current[0])||void 0===e||e.focus(),document.addEventListener("paste",I),()=>document.removeEventListener("paste",I)}),[]),u((()=>{if(0!==c){f&&f();const e=j();return()=>e()}}),[E]),u((()=>{S.current=g}),[g]),u((()=>{i.length===p&&D(i)}),[i]);const M=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(A(n)){const t=[...k];t[e]=n.substring(n.length-1),null===(r=C.current[e+1])||void 0===r||r.focus(),D(t),g&&g(t)}},F=e=>t=>{var r;const{key:n,code:i}=t;if("Backspace"===n||"Backspace"===i){const t=[...k];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=C.current[e-1])||void 0===r||r.focus()),D(t),g&&g(t)}},I=e=>{if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),r=t.split("");t&&A(t,p)?(D(r),S.current&&S.current(r)):e.preventDefault()},A=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),B=()=>{const e=Date.now(),t=1e3*c;return e<E.valueOf()+t},j=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*c,n=Math.ceil((E.valueOf()+r-t)/1e3);O(n),n<=0&&(m&&m(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},z=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`;return t(TP,{id:n,"data-testid":s,className:l,children:[e(OP,{children:k.map(((t,r)=>e(EP,Object.assign({id:z(r,"otp-input",n),"data-testid":z(r,"otp-input",s),"aria-label":`Enter OTP character ${r+1}`,ref:e=>C.current[r]=e,type:"text",inputMode:"numeric",value:t,error:!!h,onChange:M(r),onKeyDown:F(r),autoComplete:"off"},b),r)))}),h&&e(Sw,{children:h}),e(_P,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{D(new Array(p).fill("")),B()||(_(new Date),O(c)),x&&x(e)},disabled:y||B(),children:$.children?$.children:"Resend OTP"+(T?` in ${T} second${T>1?"s":""}`:"")}))]})},FP=M.nav`
    display: flex;
`,IP=M.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${bc.MaxWidth.lg} {
        align-self: center;
    }
`,AP=M.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,BP=M(kc)`
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
`,jP=M(kc)`
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

    ${e=>"left"===e.$position?F`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:F`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${bc.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,zP=M.button`
    background: ${e=>e.$selected?dc["bg-primary"]:dc.bg};
    border: ${pc["width-010"]} ${pc.solid}
        ${e=>F`
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

    ${e=>e.$selected?F`
                  ${uc["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${dc["bg-selected-strongest-hover"]};
                      background-color: ${dc["bg-selected-strongest-hover"]};
                      color: ${dc["text-inverse"]};
                  }
              `:F`
                  ${uc["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${dc["bg-hover"]};
                      background-color: ${dc["bg-hover"]};
                      color: ${dc["text-hover"]};
                      ${uc["body-baseline-semibold"]};
                  }
              `}
`;M(kc)`
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
`;const RP=M.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${fc.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,PP=M.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${dc.text};

    display: flex;
    justify-content: center;
`,LP=M(_c.BodyBL)`
    white-space: nowrap;
`,NP=M(_c.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,HP=M(o$)`
    ${uc["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${fc.sm};
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${uc["body-xs-regular"]}
        }
    }
`,WP=M.div`
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
`,YP=M.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,VP=i.forwardRef((({id:r,"data-testid":n,className:i,pageSize:o=10,totalItems:s,activePage:l,pageSizeOptions:c=UP,showFirstAndLastNav:d,showPageSizeChanger:h=!1,onPageChange:p,onPageSizeChange:g},f)=>{const m=A(),b=mc["sm-max"]({theme:m}),v=Ed.useMediaQuery({maxWidth:b}),[y,x]=a(!1),[w,$]=a(!1),[C,S]=a(""),[k,D]=a(c[0]),[T,O]=a(!v&&h&&k?k.value:o),E=Math.ceil(s/T),_=1===l,M=l===E,F=l>1?()=>N(1):void 0,I=l<E?()=>N(E):void 0,B=l>1?()=>N(l-1):void 0,j=l<E?()=>N(parseInt(l.toString())+1):void 0,z=e=>e?()=>X():()=>U(),R=e=>e?()=>q():()=>K();u((()=>{l&&P(l)}),[l]),u((()=>{O(o),D(c.find((e=>e.value===o)))}),[o]);const P=e=>{S(e.toString())},L=()=>{x(!1),$(!1)},N=e=>{p&&(p(e),P(e))},H=()=>{const e=Math.min(E,l+5);N(e),P(e),x(!0),$(!1)},W=()=>{const e=Math.max(1,l-5);N(e),P(e),x(!1),$(!0)},Y=e=>{const t=e.target.value;if(void 0===t||0===t.length)S("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));P(Math.max(1,Math.min(E,e)))}else S(t.replace(/[^0-9]/g,""))},V=e=>{e.preventDefault(),C&&(null==p||p(parseInt(C)))},U=()=>{x(!0)},K=()=>{x(!1)},X=()=>{$(!0)},q=()=>{$(!1)},G=(r,n,i)=>t(RP,{children:[e(BP,{focusHighlight:!1,focusOutline:"browser","aria-label":r?"Previous 5 pages":"Next 5 pages",onMouseOver:z(r),onMouseOut:R(r),onFocus:z(r),onBlur:R(r),onClick:r?W:H,children:e(r&&w?nt:n&&y?it:st,{"aria-hidden":!0})}),r&&w&&e(WP,{children:"Previous 5 pages"}),n&&y&&e(WP,{children:"Next 5 pages"})]},i);return t(FP,{className:i,ref:f,id:r||"pagination-wrapper","data-testid":n||"pagination","aria-label":"Pagination",children:[e(IP,{children:t(AP,{children:[d&&e(jP,{onClick:F,disabled:_,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:e(ot,{"aria-hidden":!0})}),e(jP,{onClick:B,disabled:_,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:e(be,{"aria-hidden":!0})}),v?t(PP,{children:[e("form",{onSubmit:V,children:e(HP,{value:C,onChange:Y,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(n||"pagination")+"-input"})}),e(NP,{children:"/"}),e(LP,{children:E})]}):[...Array(E)].map(((t,r)=>{const n=r+1,i=E-5,o=l===n;if(E<=7)return e(zP,{onClick:()=>N(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:L,onFocus:L,children:n},n);const a=l+1>5&&2===n,s=l-1<=i&&n===E-1-1;return a||s?G(a,s,n):n<=5&&l+1<=5||n<=1||n===l||n<=l+1&&n>=l-1-1||n>i&&l-1>i||n>E-1?e(zP,{onClick:()=>N(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:L,onFocus:L,children:n},n):null})),e(jP,{onClick:j,disabled:M,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:e(me,{"aria-hidden":!0})}),d&&e(jP,{onClick:I,disabled:M,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:e(at,{"aria-hidden":!0})})]})}),h&&!v&&e(YP,{children:e(HF,{options:c,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{D(e);const t=e.value,r=Math.ceil(s/t);O(t);g&&g(l>=r?r:l,t)}})})]})})),UP=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],KP=M.div`
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

    ${e=>{let t,r,n;if("solid"===e.$type)switch(n=dc["text-inverse"],e.$color){case"grey":t=dc["bg-inverse-subtler"];break;case"green":t=dc["bg-success-strong"];break;case"yellow":t=dc["bg-warning-strong"];break;case"red":t=dc["bg-error-strong"];break;case"blue":t=dc["bg-info-strong"];break;default:t=dc["bg-inverse"]}else switch(e.$color){case"grey":t=dc["bg-stronger"],r=dc["border-strong"],n=dc["text-subtler"];break;case"green":t=dc["bg-success"],r=dc["border-success"],n=dc["text-success"];break;case"yellow":t=dc["bg-warning"],r=dc["border-warning"],n=dc["text-warning"];break;case"red":t=dc["bg-error"],r=dc["border-error"],n=dc["text-error"];break;case"blue":t=dc["bg-info"],r=dc["border-info"],n=dc["text-info"];break;default:t=dc.bg,r=dc.border,n=dc.text}return F`
            background: ${t};
            border: ${pc["width-010"]} ${pc.solid} ${r};
            color: ${n};
        `}}
`,XP=M.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,qP=r=>{var{type:n,colorType:i="black",children:o,icon:a}=r,s=dt(r,["type","colorType","children","icon"]);return t(KP,Object.assign({$type:n,$color:i},s,{children:[a,e(XP,{children:o})]}))},GP=(e,t,r)=>t?Cl(r,t)||Cl(e,t):r||e,ZP=(e,t)=>{const r=t||e.defaultValue;return Cl(e.collections,r)};var QP;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(QP||(QP={}));const JP={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},eL=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=ZP(JP,null==n?void 0:n[QP.colorScheme]);return n.options&&n.options.color?GP(i,e,n.options.color):GP(i,e)},tL={Brand:{1:eL("Brand.1"),2:eL("Brand.2"),3:eL("Brand.3"),4:eL("Brand.4"),5:eL("Brand.5"),6:eL("Brand.6")},Primary:eL("Primary"),PrimaryDark:eL("PrimaryDark"),Secondary:eL("Secondary"),Accent:{Light:{1:eL("Accent.Light.1"),2:eL("Accent.Light.2"),3:eL("Accent.Light.3"),4:eL("Accent.Light.4"),5:eL("Accent.Light.5"),6:eL("Accent.Light.6")},Dark:{1:eL("Accent.Dark.1"),2:eL("Accent.Dark.2"),3:eL("Accent.Dark.3")}},Neutral:{1:eL("Neutral.1"),2:eL("Neutral.2"),3:eL("Neutral.3"),4:eL("Neutral.4"),5:eL("Neutral.5"),6:eL("Neutral.6"),7:eL("Neutral.7"),8:eL("Neutral.8")},Validation:{Green:{Text:eL("Validation.Green.Text"),Icon:eL("Validation.Green.Icon"),Border:eL("Validation.Green.Border"),Background:eL("Validation.Green.Background")},Orange:{Text:eL("Validation.Orange.Text"),Icon:eL("Validation.Orange.Icon"),Border:eL("Validation.Orange.Border"),Background:eL("Validation.Orange.Background"),Badge:eL("Validation.Orange.Badge")},Red:{Text:eL("Validation.Red.Text"),Icon:eL("Validation.Red.Icon"),Border:eL("Validation.Red.Border"),Background:eL("Validation.Red.Background")},Blue:{Text:eL("Validation.Blue.Text"),Icon:eL("Validation.Blue.Icon"),Border:eL("Validation.Blue.Border"),Background:eL("Validation.Blue.Background")}},Shadow:{Accent:eL("Shadow.Accent"),Red:eL("Shadow.Red"),Elevation:eL("Shadow.Elevation")}},rL={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},nL={D1:{fontFamily:rL.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:rL.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:rL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:rL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:rL.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:rL.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:rL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:rL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:rL.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:rL.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:rL.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:rL.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:rL.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:rL.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},iL={D1:{fontFamily:rL.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:rL.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:rL.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:rL.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:rL.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:rL.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:rL.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:rL.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:rL.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:rL.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:rL.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:rL.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:rL.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:rL.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oL={collections:{base:nL,oneservice:{D1:{fontFamily:rL.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:rL.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:rL.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:rL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:rL.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:rL.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:rL.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:rL.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:rL.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:rL.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:rL.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:rL.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:rL.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:rL.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:iL},defaultValue:"base"},aL=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=ZP(oL,null==n?void 0:n[QP.textStyleScheme]);return n.options&&n.options.textStyle?GP(i,e,n.options.textStyle):GP(i,e)},sL={D1:{fontFamily:aL("D1.fontFamily"),fontSize:aL("D1.fontSize"),fontWeight:aL("D1.fontWeight"),lineHeight:aL("D1.lineHeight"),letterSpacing:aL("D1.letterSpacing")},D2:{fontFamily:aL("D2.fontFamily"),fontSize:aL("D2.fontSize"),fontWeight:aL("D2.fontWeight"),lineHeight:aL("D2.lineHeight"),letterSpacing:aL("D2.letterSpacing")},D3:{fontFamily:aL("D3.fontFamily"),fontSize:aL("D3.fontSize"),fontWeight:aL("D3.fontWeight"),lineHeight:aL("D3.lineHeight"),letterSpacing:aL("D3.letterSpacing")},D4:{fontFamily:aL("D4.fontFamily"),fontSize:aL("D4.fontSize"),fontWeight:aL("D4.fontWeight"),lineHeight:aL("D4.lineHeight"),letterSpacing:aL("D4.letterSpacing")},DBody:{fontFamily:aL("DBody.fontFamily"),fontSize:aL("DBody.fontSize"),fontWeight:aL("DBody.fontWeight"),lineHeight:aL("DBody.lineHeight"),letterSpacing:aL("DBody.letterSpacing")},H1:{fontFamily:aL("H1.fontFamily"),fontSize:aL("H1.fontSize"),fontWeight:aL("H1.fontWeight"),lineHeight:aL("H1.lineHeight"),letterSpacing:aL("H1.letterSpacing")},H2:{fontFamily:aL("H2.fontFamily"),fontSize:aL("H2.fontSize"),fontWeight:aL("H2.fontWeight"),lineHeight:aL("H2.lineHeight"),letterSpacing:aL("H2.letterSpacing")},H3:{fontFamily:aL("H3.fontFamily"),fontSize:aL("H3.fontSize"),fontWeight:aL("H3.fontWeight"),lineHeight:aL("H3.lineHeight"),letterSpacing:aL("H3.letterSpacing")},H4:{fontFamily:aL("H4.fontFamily"),fontSize:aL("H4.fontSize"),fontWeight:aL("H4.fontWeight"),lineHeight:aL("H4.lineHeight"),letterSpacing:aL("H4.letterSpacing")},H5:{fontFamily:aL("H5.fontFamily"),fontSize:aL("H5.fontSize"),fontWeight:aL("H5.fontWeight"),lineHeight:aL("H5.lineHeight"),letterSpacing:aL("H5.letterSpacing")},H6:{fontFamily:aL("H6.fontFamily"),fontSize:aL("H6.fontSize"),fontWeight:aL("H6.fontWeight"),lineHeight:aL("H6.lineHeight"),letterSpacing:aL("H6.letterSpacing")},Body:{fontFamily:aL("Body.fontFamily"),fontSize:aL("Body.fontSize"),fontWeight:aL("Body.fontWeight"),lineHeight:aL("Body.lineHeight"),letterSpacing:aL("Body.letterSpacing")},BodySmall:{fontFamily:aL("BodySmall.fontFamily"),fontSize:aL("BodySmall.fontSize"),fontWeight:aL("BodySmall.fontWeight"),lineHeight:aL("BodySmall.lineHeight"),letterSpacing:aL("BodySmall.letterSpacing")},XSmall:{fontFamily:aL("XSmall.fontFamily"),fontSize:aL("XSmall.fontSize"),fontWeight:aL("XSmall.fontWeight"),lineHeight:aL("XSmall.lineHeight"),letterSpacing:aL("XSmall.letterSpacing")}},lL=[rL.OpenSans,rL.PlusJakartaSans],cL=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},dL=(e,t)=>r=>{var n,i,o,a,s;const l=null===(i=(n=sL[e]).fontFamily)||void 0===i?void 0:i.call(n,r),c=null===(a=(o=sL[e]).fontWeight)||void 0===a?void 0:a.call(o,r),d=lL.find((e=>Object.values(e).includes(l)));return d?F`
                font-family: ${cL(d,t)||cL(d,c)||l};
                font-weight: normal !important;
            `:F`
            font-family: ${l};
            font-weight: ${null!==(s=uL(t)||c)&&void 0!==s?s:"normal"};
        `},uL=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},hL=e=>{if(e)return F`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},pL={getFontFamily:dL,getTextStyle:(e,t,r=!1)=>n=>{var i,o;const a=sL[e],s=(null===(i=a.fontSize)||void 0===i?void 0:i.call(a,n))||1;return F`
            ${dL(e,t)}
            font-size: ${s}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${(null===(o=a.letterSpacing)||void 0===o?void 0:o.call(a,n))||0}rem !important;
            ${F`
                margin-bottom: ${s*(r?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,t=!1,r=void 0)=>t?F`
            display: block;
            ${hL(r)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${hL(r)}
        `};var gL;!function(e){e.D1=M.h1`
        ${e=>F`
                ${pL.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=M.h1`
        ${e=>F`
                ${pL.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=M.h1`
        ${e=>F`
                ${pL.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=M.h1`
        ${e=>F`
                ${pL.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=M.h1`
        ${e=>F`
                ${pL.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=M.h1`
        ${e=>F`
                ${pL.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=M.h2`
        ${e=>F`
                ${pL.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=M.h3`
        ${e=>F`
                ${pL.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=M.h4`
        ${e=>F`
                ${pL.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=M.h5`
        ${e=>F`
                ${pL.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=M.h6`
        ${e=>F`
                ${pL.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=M.p`
        ${e=>F`
                ${pL.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=M.p`
        ${e=>F`
                ${pL.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=M.span`
        ${e=>F`
                ${pL.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${tL.Neutral[1]};
                ${pL.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>bL(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>bL(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(gL||(gL={}));const fL=M.a`
    ${e=>F`
            ${pL.getTextStyle(e.textStyle,e.weight)}
            color: ${tL.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${tL.Secondary};

                svg {
                    color: ${tL.Secondary};
                }
            }
        `}
`,mL=M(B)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,bL=r=>{var{external:n=!1,children:i}=r,o=dt(r,["external","children"]);return t(fL,Object.assign({},o,{children:[i,n&&e(mL,{})]}))},vL={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},yL=M.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?F`
            visibility: visible;
            opacity: 1;
            transition: ${vL.Base};
            z-index: 50;
        `:F`
            visibility: hidden;
            opacity: 0;
            transition: ${vL.Base};
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

	${mf.MaxWidth.mobileL} {
        display: none;
    }
`,xL=M(Hf)`
    padding: 3.5rem 1.25rem 2.5rem;
`,wL=M.div`
    position: relative;
    width: fit-content;
`,$L=M.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,CL=M.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,SL=n=>{var{children:i,visible:s,onMobileClose:l}=n,c=dt(n,["children","visible","onMobileClose"]);const d=c["data-testid"]||"popover",[h,p]=a("none"),g=o(null),f=Ed.useMediaQuery({maxWidth:gf.mobileL}),m=o(h);u((()=>(y(),window.addEventListener("resize",ip(b,300)),()=>{window.removeEventListener("resize",ip(b,300))})),[]);const b=()=>{y()},v=()=>{l&&l()},y=()=>{const e=x();var t;e&&(t=e,m.current=t,p(t))},x=()=>{if(g.current){const e=g.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},w=()=>"string"==typeof i?e(gL.BodySmall,{children:i}):i;return t(r,{children:[e(yL,Object.assign({ref:g,"data-testid":d,$visible:s,$offset:h},c,{children:e(_h,{children:w()})})),f&&e(Pf,{show:null!=s&&s,onOverlayClick:v,children:e(xL,{onClose:v,children:e(CL,{children:w()})})})]})},kL=(r,n)=>i=>{const{onPopoverAppear:s,onPopoverDismiss:l}=i,c=dt(i,["onPopoverAppear","onPopoverDismiss"]),d=n.trigger||"click",h=c,[p,g]=a(!1),f=o(null),m=Ed.useMediaQuery({maxWidth:gf.mobileL});u((()=>{if(!m)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[p]);const b=e=>{f&&!f.current.contains(e.target)&&(p&&g(!1),l&&l())};return t(wL,{id:"popover-hoc-wrapper",ref:f,children:[e($L,{id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||m)&&(g(!p),!p&&s&&s(),p&&l&&l())},onMouseEnter:()=>{"hover"!==d||m||g(!0)},onMouseLeave:()=>{"hover"===d&&p&&!m&&g(!1)},"aria-label":"popover-button",children:e(r,Object.assign({},h))}),e(SL,{visible:p,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{g(!1)},children:n.content})]})},DL=M.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${bc.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${bc.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,TL=M.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,OL=M.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?dc["bg-primary-subtle"]:dc["bg-disabled"])(e)};\n        `}};
`,EL=M(_c.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?dc["text-primary"]:dc["text-disabled"])(e)};`}};
`,_L=M(_c.BodyMD)`
    overflow-wrap: anywhere;
    color: ${dc.text};
`,ML=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var FL=function(e){return function(t){return null==e?void 0:e[t]}},IL=FL({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),AL=dl,BL=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jL=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var zL=function(e){return(e=AL(e))&&e.replace(BL,IL).replace(jL,"")},RL=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var PL=function(e){return e.match(RL)||[]},LL=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var NL=function(e){return LL.test(e)},HL="\\ud800-\\udfff",WL="\\u2700-\\u27bf",YL="a-z\\xdf-\\xf6\\xf8-\\xff",VL="A-Z\\xc0-\\xd6\\xd8-\\xde",UL="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",KL="["+UL+"]",XL="\\d+",qL="["+WL+"]",GL="["+YL+"]",ZL="[^"+HL+UL+XL+WL+YL+VL+"]",QL="(?:\\ud83c[\\udde6-\\uddff]){2}",JL="[\\ud800-\\udbff][\\udc00-\\udfff]",eN="["+VL+"]",tN="(?:"+GL+"|"+ZL+")",rN="(?:"+eN+"|"+ZL+")",nN="(?:['’](?:d|ll|m|re|s|t|ve))?",iN="(?:['’](?:D|LL|M|RE|S|T|VE))?",oN="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",aN="[\\ufe0e\\ufe0f]?",sN=aN+oN+("(?:\\u200d(?:"+["[^"+HL+"]",QL,JL].join("|")+")"+aN+oN+")*"),lN="(?:"+[qL,QL,JL].join("|")+")"+sN,cN=RegExp([eN+"?"+GL+"+"+nN+"(?="+[KL,eN,"$"].join("|")+")",rN+"+"+iN+"(?="+[KL,eN+tN,"$"].join("|")+")",eN+"?"+tN+"+"+nN,eN+"+"+iN,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",XL,lN].join("|"),"g");var dN=PL,uN=NL,hN=dl,pN=function(e){return e.match(cN)||[]};var gN=yF,fN=zL,mN=function(e,t,r){return e=hN(e),void 0===(t=r?void 0:t)?uN(e)?pN(e):dN(e):e.match(t)||[]},bN=RegExp("['’]","g");var vN=Uo(function(e){return function(t){return gN(mN(fN(t).replace(bN,"")),e,"")}}((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})));const yN=r=>{var{steps:n,currentIndex:i,displayExtractor:o,fadeColor:a,fadePosition:s}=r,l=dt(r,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=A(),d=mc["lg-max"]({theme:c}),u=Ed.useMediaQuery({maxWidth:d}),h=e=>{var t;return o?o(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""},p=(e,t)=>vN(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!n.length)return null;return t(DL,Object.assign({},l,{children:[e(TL,{children:n.map(((t,r)=>{const n=r<=i;return e(ML,{id:p(r,i),children:e(OL,{highlighted:n})},r)}))}),e(TL,{children:u?t(ML,{id:p(i,i),children:[t(_L,{weight:"semibold",id:`${p(i,i)}-counter`,children:["Step ",i+1," of ",n.length]}),e(_L,{weight:"regular",id:`${p(i,i)}-title`,children:h(n[i])})]},i):n.map(((t,r)=>{const n=r<=i,o=r===i,a=o?"bold":"regular";return e(ML,{id:`${p(r,i)}-title`,children:e(EL,{highlighted:n,weight:a,"aria-current":o,children:h(t)})},r)}))})]}))},xN=M.div`
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
`,wN=M(ae)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?dc["icon-disabled-subtle"](e):dc["icon-subtle"](e)};
    transition: ${hc["duration-150"]} ${hc["ease-default"]};
`,$N=M(se)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?dc["icon-selected-disabled"](e):dc["icon-selected"](e)};

    transition: ${hc["duration-150"]} ${hc["ease-default"]};
`,CN=M.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${wN}, &:hover + ${$N} {
        color: ${e=>!e.disabled&&dc["icon-hover"](e)};
    }
`,SN=r=>{var{className:n,checked:i,disabled:o,displaySize:a="default",onChange:s}=r,l=dt(r,["className","checked","disabled","displaySize","onChange"]);return t(xN,{$selected:i,$disabled:o,className:n,$displaySize:a,"data-testid":"radio-button",children:[e(CN,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{o||null==s||s(e)},checked:i,disabled:o},l)),i?e($N,{"data-testid":"radio-checked",$disabled:o}):e(wN,{"data-testid":"radio-unchecked",$disabled:o})]})},kN=M.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,DN=M.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};
    background-color: ${dc["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,TN=M(DN)`
    height: 100vh;
    left: 0;
    top: 0;
    ${bc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,ON=M(DN)`
    display: none;
    visibility: hidden;
    ${bc.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,EN=M(Yo.ul)`
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
    border: ${pc["width-010"]} ${pc.solid} ${dc.border};

    ${e=>e.$showDrawer?F`
                  box-shadow: 0 0 4px
                      rgb(from ${dc.Primitive["neutral-20"]} r g b / 25%);
              `:F`
                  border: 0;
                  padding: 0;
              `};
`,_N=M.li`
    width: 100%;
`,MN=M.span`
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
`,FN=M(_c.BodyXS)`
    ${Dc(2)}
    margin-top: 0.25rem;
    transition: ${hc["duration-250"]} ${hc["ease-default"]};
`,IN=M(Jp)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${MN} {
            background-color: ${dc["bg-hover"]};
        }

        ${FN} {
            ${uc["body-xs-semibold"]}
            color: ${dc["text-hover"]};
        }
    }

    ${e=>e.$highlight&&F`
            ${MN} {
                background-color: ${dc["bg-hover"]};
            }

            ${FN} {
                ${uc["body-xs-semibold"]}
                color: ${dc["text-selected"]};
            }
        `}
`,AN=$({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),BN=M.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,jN=M.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${dc.border};
`,zN=M(Yo.li)``,RN=M(Jp)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${fc.md};

    ${uc["body-md-semibold"]}
    color: ${dc.text};

    ${e=>e.$noChildren?F`
                  :hover,
                  :focus {
                      background: ${dc["bg-hover"]};
                      color: ${dc["text-hover"]};
                  }
              `:F`
                  :hover,
                  :focus {
                      background: ${dc["bg-hover-strong"]};
                  }
              `}
`,PN=M(Yo.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,LN=M(_)`
    flex-shrink: 0;
    color: ${dc.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${hc["duration-150"]} ${hc["ease-default"]};
`,NN=M.span`
    ${Dc(2)}
    text-align: left;
`,HN=M(Yo.ul)``,WN=M.li``,YN=M(Jp)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${fc.md};

    ${uc["body-md-regular"]}
    color: ${dc.text};
    ${Dc(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${dc["bg-hover"]};
        color: ${dc["text-hover"]};
    }
`,VN=Object.assign((r=>{var{fixed:n=!0,children:i}=r,s=dt(r,["fixed","children"]);const l=o(null),[c,d]=a(void 0),[h,p]=a(void 0),[g,f]=a(void 0),[b,v]=a(!1),y=m((()=>({currentItem:c,selectedItem:h,previouslySelectedItemId:g,setCurrentItem:d,setSelectedItem:p,setPreviouslySelectedItemId:f})),[c,h,g,d,p,f]),x=Do({width:b?240:0,borderRightWidth:b?1:0,borderTopWidth:b?1:0,borderBottomWidth:b?1:0,borderLeftWidth:0});return gu("click",(e=>{l.current&&!l.current.contains(e.target)&&(p({itemId:g||(h?h.itemId:void 0),content:void 0}),f(void 0),d(void 0))}),"window",!0),u((()=>{v(!!(null==h?void 0:h.content)||!!(null==c?void 0:c.content))}),[c,h]),e(AN.Provider,{value:y,children:t(kN,Object.assign({$fixed:n},s,{ref:l,onMouseLeave:()=>{d(void 0)},children:[e(TN,{children:i}),e(EN,{style:x,$showDrawer:b,"data-testid":"sidenav-drawer",children:c&&c.content||h&&h.content}),e(ON,{})]}))})}),{Group:r=>{var{separator:n,children:i}=r,o=dt(r,["separator","children"]);return t(BN,Object.assign({},o,{children:[i,n&&e(jN,{"data-testid":"divider"})]}))},Item:r=>{var{children:n,icon:i,title:o,onClick:a}=r,s=dt(r,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:h,setCurrentItem:p,setPreviouslySelectedItemId:g,setSelectedItem:m}=f(AN);u((()=>{s.selected&&m({itemId:l,content:void 0})}),[s.selected]);return e(_N,{children:t(IN,Object.assign({type:"button",onClick:()=>{g((()=>{if(n&&h)return d||h.itemId})()),p({itemId:l,content:n}),m({itemId:l,content:n}),a&&!n&&a(l)},onMouseEnter:()=>{p({itemId:l,content:n})}},s,{$highlight:!!h&&h.itemId===l||!!c&&c.itemId===l,children:[e(MN,{children:i}),e(FN,{children:o})]}))})},DrawerItem:r=>{var{id:n,title:i,onClick:o,children:s}=r,l=dt(r,["id","title","onClick","children"]);const[c,d]=a(!0),[u,h]=a(!1),{currentItem:p,setSelectedItem:g,setPreviouslySelectedItemId:m,setCurrentItem:b}=f(AN),v=Do({from:{opacity:0},to:{opacity:1}}),y=cr(),x=y.ref,w=Do({height:s&&c?y.height:0});return t(zN,Object.assign({onMouseEnter:()=>{h(!0)},onMouseLeave:()=>{h(!1)}},l,{style:v,children:[t(RN,{type:"button",onClick:()=>{s?d(!c):(g({itemId:null==p?void 0:p.itemId,content:void 0}),b(void 0),m(void 0),o&&o(n))},$highlight:u&&c,$noChildren:!s,children:[e(NN,{children:i}),s&&e(LN,{"aria-hidden":!0,$expanded:c})]}),e(PN,{style:w,children:e(HN,{ref:x,children:s})})]}))},DrawerSubitem:t=>{var{id:r,title:n,onClick:i}=t,o=dt(t,["id","title","onClick"]);const{currentItem:a,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=f(AN);return e(WN,Object.assign({},o,{children:e(YN,{type:"button",onClick:()=>{i&&i(r),s({itemId:null==a?void 0:a.itemId,content:void 0}),l(void 0),c(void 0)},children:n})}))}}),UN=I`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,KN=M.div`
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
    ${e=>{if(e.$isAnimated)return F`
                animation: ${UN} 0.3s;
            `}}
`,XN=M.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,qN=M(kc)`
    padding: 0;
`,GN=M(je)`
    color: ${dc.icon};
    height: 1.25rem;
    width: 1.25rem;
`,ZN=M.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,QN=M.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${bc.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,JN=M.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,eH=M.div`
    max-width: 30%;
`,tH=M(ed.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${uc["body-xs-semibold"]}
    }
`,rH=M(_c.BodySM)`
    font-weight: ${uc.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${bc.MaxWidth.xs} {
        ${uc["body-xs-bold"]}
    }
`,nH=M(_c.BodyXS)`
    overflow-wrap: anywhere;
`,iH=M.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,oH=F`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,aH=M(Re)`
    ${oH}
`,sH=M(lt)`
    ${oH}
`,lH=M(ze)`
    ${oH}
`,cH="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",dH="smart-app-banner";const uH=i.forwardRef((function(n,i){const{className:o,show:a,href:s,content:l,offset:c=0,icon:d=cH,animated:u=!1,onDismiss:h,onClick:p}=n,{title:g,message:f,buttonLabel:m,buttonAriaLabel:b,numberOfStars:v}=l,y=e=>{e.stopPropagation(),window.open(s,"_blank","noreferrer"),null==p||p()};return e(r,{children:a&&t(KN,{ref:i,$isAnimated:u,$offset:c,className:o,children:[e(XN,{onClick:h,id:`${dH}-dismiss`,"data-testid":`${dH}-dismiss-container`,children:e(qN,{"aria-label":"Dismiss",children:e(GN,{})})}),t(ZN,{onClick:y,id:`${dH}-proceed`,"data-testid":`${dH}-proceed-container`,children:[e(JN,{src:d,alt:"lifesg-app-icon"}),t(QN,{children:[e(rH,{children:g}),e(nH,{children:f}),(()=>{if(isNaN(v)||v<0)return;const t=[],r=v-Math.floor(v)>=.4;for(let r=0;r<Math.floor(v);r++)t.push(e(aH,{},`star${r}`));if(r&&t.push(e(sH,{},"halfstar")),t.length<5){const r=5-t.length;for(let n=0;n<r;n++)t.push(e(lH,{},`emptystar${n}`))}return e(iH,{children:t.slice(0,5)})})()]}),e(eH,{children:e(tH,{type:"button",onClick:y,"aria-label":b,children:m})})]})]})})})),hH=i.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),pH=M.div`
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

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${r}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${r}\n                );\n            `,F`
            ${bc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,fH=M.div`
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
`,mH=M(kc)`
    display: none;

    ${bc.MaxWidth.lg} {
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
            color: ${dc.icon};
        }
    }
`,bH=p(((n,i)=>{var{children:s,fadeColor:l,fadePosition:c="both",showIndicator:d=!1,onResize:h}=n,p=dt(n,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[g,f]=a("left"===c||"both"===c),[m,v]=a("right"===c||"both"===c),y=o(null),x=o(null),w=cp($,50);function $(){const e=y.current,t=x.current;e&&t&&t.scrollWidth>e.offsetWidth?(v(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),f(t.scrollLeft>=1)):(v(!1),f(!1))}function C(){$(),h&&h({content:x.current,wrapper:y.current})}cr({onResize:C,targetRef:y,refreshMode:"debounce",refreshRate:50}),b(i,(()=>({resize(){C()}}))),u((()=>{const e=x.current;return $(),e&&e.addEventListener("scroll",w),()=>{e&&e.removeEventListener("scroll",w)}}),[]);return t(pH,Object.assign({ref:y},p,{children:[e(fH,{ref:x,children:s}),(()=>{let n;return n=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(r,{children:[g&&e(gH,{$backgroundColor:n.left,$position:"left",$showIndicator:d,"data-id":"left-fade",children:d&&e(mH,{$position:"left","data-id":"left-fade-indicator-button",children:e(be,{})})}),m&&e(gH,{$backgroundColor:n.right,$position:"right",$showIndicator:d,"data-id":"right-fade",children:d&&e(mH,{$position:"right","data-id":"right-fade-indicator-button",children:e(me,{})})})]})})()]}))})),vH=M.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return F`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${pc["width-040"]} ${pc.solid}
                        ${dc.border};
                }
            `}}
`,yH=M.li`
    display: flex;
    flex-shrink: 0;
    border-bottom: ${pc["width-040"]} ${pc.solid} ${dc.border};

    ${e=>{if(e.$active)return F`
                border-color: ${dc["border-primary"]};
            `}}

    ${bc.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,xH=M.button`
    position: relative;
    padding: ${gc["spacing-16"]} ${gc["spacing-16"]}
        ${gc["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,wH=M(_c.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${dc["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return F`
                opacity: 0;
            `}}
`,$H=M(_c.BodyBL)`
    color: ${dc["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return F`
                opacity: 1;
            `}}
`,CH=M(bH)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${gc["spacing-4"]};
    }
`,SH=({controlledMode:r,"data-testid":n,onTabClick:i,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:c}=f(hH),d=A(),u=mc["md-max"]({theme:d}),h=Ed.useMediaQuery({maxWidth:u}),p=mc["lg-max"]({theme:d}),g=o(null),m=e=>t=>{t.preventDefault(),r||s(e),i&&i(c[e].title,e)},b=e=>h&&e.length>20?`${e.substring(0,20)}...`:e;return e(CH,{onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=p&&g.current&&(e.scrollLeft=g.current.getBoundingClientRect().left)},"data-testid":n,children:e(vH,{role:"tablist",$fullWidthIndicatorLine:a,children:c.map(((r,i)=>{const o=l===i;return e(yH,{role:"none",$active:o,ref:o?g:null,children:t(xH,{role:"tab",type:"button","aria-selected":o,onClick:m(i),"data-testid":`${n}-link-${i}`,children:[e(wH,{$active:o,weight:"regular",children:b(r.title)}),e($H,{$active:o,weight:"semibold","aria-hidden":"true",children:b(r.title)})]})},i)}))})})},kH=M.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,DH=Object.assign((r=>{var{children:n,currentActive:i,initialActive:o=0,onTabClick:s,"data-testid":l,fullWidthIndicatorLine:d}=r,h=dt(r,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[p,g]=a(i||o),[f,m]=a([]);u((()=>{const e=S.toArray(n).filter(Boolean);b(e)}),[n]),u((()=>{"number"==typeof i&&g(i)}),[i]);const b=e=>{const t=e.map((e=>({title:e.props.title})));m(t)};return e(kH,Object.assign({"data-testid":l},h,{children:t(hH.Provider,{value:{tabLinks:f,currentActiveIndex:p,setCurrentActiveIndex:g},children:[e(SH,{controlledMode:"number"==typeof i,onTabClick:s,"data-testid":`${l}-tabs`,fullWidthIndicatorLine:d}),S.toArray(n).filter(Boolean).map(((e,t)=>c(e,{key:t,index:t})))]})}))}),{Item:t=>{var{index:r,children:n}=t,i=dt(t,["index","children"]);const{currentActiveIndex:o}=f(hH);return o===r?e("div",Object.assign({role:"tabpanel"},i,{children:n})):null}}),TH=M.div`
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

    ${e=>{let t,r,n,i,o;if("solid"===e.$type)switch(n=dc["text-inverse"],e.$color){case"grey":t=dc["bg-inverse-subtler"],i=dc["bg-inverse-hover"];break;case"green":t=dc["bg-success-strong"],i=dc["bg-success-strong-hover"];break;case"yellow":t=dc["bg-warning-strong"],i=dc["bg-warning-strong-hover"];break;case"red":t=dc["bg-error-strong"],i=dc["bg-error-strong-hover"];break;case"blue":t=dc["bg-info-strong"],i=dc["bg-info-strong-hover"];break;default:t=dc["bg-inverse"],i=dc["bg-inverse-hover"]}else switch(e.$color){case"grey":t=dc["bg-strong"],r=dc["border-strong"],n=dc["text-subtle"],i=dc["bg-hover-neutral-strong"];break;case"green":t=dc["bg-success"],r=dc["border-success"],n=dc["text-success"],i=dc["bg-success-hover"];break;case"yellow":t=dc["bg-warning"],r=dc["border-warning"],n=dc["text-warning"],i=dc["bg-warning-hover"];break;case"red":t=dc["bg-error"],r=dc["border-error"],n=dc["text-error"],i=dc["bg-error-hover"];break;case"blue":t=dc["bg-info"],r=dc["border-info"],n=dc["text-info"],i=dc["bg-info-hover"];break;default:t=dc.bg,r=dc.border,n=dc.text,i=dc["bg-hover-neutral"]}return F`
            background: ${t};
            border: ${pc["width-010"]} ${pc.solid} ${r};
            color: ${n};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&i&&`background: ${i(e)};`}
                    ${e.$interactive&&o}
                }
            }
        `}}

    ${bc.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return F`
                    ${uc["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,OH=M.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,EH=r=>{var{type:n,colorType:i="black",children:o,interactive:a=!1,icon:s,iconPosition:l="left"}=r,c=dt(r,["type","colorType","children","interactive","icon","iconPosition"]);return t(TH,Object.assign({as:a?"button":"div",$type:n,$color:i,$interactive:a},c,{children:["left"===l&&s,e(OH,{children:o}),"right"===l&&s]}))};var _H;Vd.extend(Kd),function(e){e.formatHourlyDisplay=e=>Vd(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>cu.getTimeDiffInMinutes(e,t)/15*(r/2)}(_H||(_H={}));const MH=1.25,FH=e=>"minified"===e?12:40,IH=e=>"minified"===e?12:40,AH=M.div`
    position: relative;
    display: flex;
    align-items: center;
`,BH=M(kc)`
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
`,jH=M(me)`
    width: 1rem;
    height: 1rem;
    color: ${dc["icon-primary"]};
`,zH=M(be)`
    font-size: 1rem;
    color: ${dc["icon-primary"]};
`,RH=M.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+IH(e)}px`};
`,PH=M.div`
    position: relative;
    white-space: nowrap;
    height: ${MH}rem;
`,LH=M.div`
    display: flex;
    white-space: nowrap;
`,NH=M.div`
    display: inline-block;
    width: ${({$variant:e})=>`${FH(e)}px`};
    position: relative;
    border-left: ${pc["width-010"]} ${pc.solid}
        ${dc["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?MH:.625;break;case"minified":t=e.$isLongMarker?MH:0;break;default:t=0}return F`
            height: ${t}rem;
        `}}
`,HH=M(_c.BodyXS)`
    color: ${dc["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,WH=M.div`
    ${e=>"vertical"===e.$type?F`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:F`
                position: absolute;
                height: ${IH(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&F`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||dc["bg-strongest"]} 0px,
                ${e.$bgColor2||dc["bg-strongest"]} 10px,
                ${e.$bgColor||dc["bg-stronger"]} 10px,
                ${e.$bgColor||dc["bg-stronger"]} 20px
            );
        `}
`,YH=M.div`
    position: absolute;
    top: ${MH}rem;
    height: ${({$variant:e})=>`${IH(e)}px`};
    z-index: 1;
    border-right: ${pc["width-010"]} ${pc.solid}
        ${dc["border-stronger"]};
`,VH=M(_c.BodyXS)`
    color: ${e=>e.$color||dc.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,UH=({"data-testid":n,className:i,variant:s="default",startTime:l,endTime:c,slots:d,onSlotClick:h,onClick:p,styleAttributes:g})=>{const f=o(null),[m,b]=a(0),[v,y]=a(0),x=FH(s),w=2.5*x;u((()=>{const e=f.current;return e&&e.addEventListener("scroll",$),()=>{e&&e.removeEventListener("scroll",$)}}),[]);const $=()=>{f.current&&b(f.current.scrollLeft)},C=e=>{f.current&&f.current.scrollBy({left:"left"===e?-w:w,behavior:"smooth"})};cr({onResize:()=>{f.current&&y(f.current.clientWidth)},targetRef:f,refreshMode:"debounce",refreshRate:50});const S=e=>e<=x/2,k=e=>{if(n)return`${n}-${e}`},D=(e,t,r)=>{const n=0===e.minute();if("default"===r)return n;return n&&(t?e.hour()%2==0:e.hour()%2==1)};return t(AH,{className:i,children:[t(RH,{"data-testid":n,ref:f,$variant:s,children:[e(PH,{"data-testid":k("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const t=[],r=Vd(l,"HH:mm"),n=Vd(c,"HH:mm"),i=r.hour()%2==0;for(let o=r;o.isBefore(n);o=o.add(30,"minute")){const r=D(o,i,s);t.push(e(NH,{$isLongMarker:r,$variant:s,children:r&&e(HH,{weight:"semibold",children:_H.formatHourlyDisplay(o.format("HH:mm"))})},o.format("HH:mm")))}return t})()}),t(LH,{"data-testid":k("time-slot-wrapper"),"data-id":"slot-wrapper",children:[(()=>{if(!g)return;const{backgroundColor:n,backgroundColor2:i,styleType:o="default"}=g,a=_H.calculateWidth(l,c,x),d=!!p&&"default"===s;return t(r,{children:[e(YH,{$variant:s}),e(WH,{"data-testid":k("default-timeslot"),$width:a,$variant:s,$left:0,$styleType:o,$bgColor:n,$bgColor2:i,$clickable:d,onClick:d?p:void 0},"default-timeslot")]})})(),d.map((r=>{const{id:n,startTime:i,endTime:o,label:a,clickable:d=!0,styleAttributes:u}=r,{color:p,styleType:g="default",backgroundColor:f,backgroundColor2:m}=u,b=_H.calculateWidth(i,o,x),v=_H.calculateWidth(l,i,x),y=d&&"default"===s;return t("div",{children:[e(YH,{$variant:s,style:{left:`${v}px`}}),e(WH,{"data-testid":k(`${n}-timeslot`),$width:b,$left:v,$styleType:g,$variant:s,$bgColor:f,$bgColor2:m,$clickable:y,onClick:()=>y&&h(r),children:a&&"default"===s&&e(VH,{$slotWidth:b,$color:p,weight:"semibold",children:S(b)?"...":a})}),c!==o&&e(YH,{$variant:s,style:{left:`${v+b}px`}})]},n)}))]})]}),e(r,{children:m>0&&e(BH,{"data-testid":k("arrow-left"),$direction:"left",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("left")},children:e(zH,{})})}),m+v<_H.calculateWidth(l,c,x)?e(BH,{"data-testid":k("arrow-right"),$direction:"right",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("right")},children:e(jH,{})}):e(r,{})]})},KH=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${gc["spacing-8"]};
    flex: 1;
`,XH=M(_c.BodyXS)`
    ${e=>e.$disabled&&F`
            color: ${dc["text-disabled-subtlest"]};
        `}
`,qH=M.div`
    grid-column: 2 / -1;
    display: flex;
`,GH=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${gc["spacing-4"]};
`,ZH=M(Yo.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,QH=M.div`
    display: flex;
    gap: ${gc["spacing-4"]};
    transition: all ${hc["duration-250"]} ${hc["ease-default"]};
    overflow: hidden;
`,JH=M.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${gc["spacing-4"]};
    width: 1.375rem;
    transition: all ${hc["duration-250"]} ${hc["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,eW=M.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,tW=M.div`
    ${uc["body-xs-bold"]}
    color: ${dc["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${uc.Spec["body-size-sm"]};
    }
`,rW=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${gc["spacing-4"]};
`,nW=M.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${gc["spacing-8"]};
`,iW=M(ed.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${gc["spacing-8"]};
    }
`,oW=M(le)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${hc["duration-250"]} ${hc["ease-default"]};
`,aW=M(WH)`
    ${e=>{if("vertical"===e.$type)return F`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${fc.xs};
            `}}

    ${e=>e.$halfFill?F`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${dc["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||dc["bg-strongest"]} 0px,\n                            ${e.$bgColor2||dc["bg-strongest"]} 10px,\n                            ${e.$bgColor||dc["bg-stronger"]} 10px,\n                            ${e.$bgColor||dc["bg-stronger"]} 20px\n                        )`};
            `:F`
                background-color: ${e.$bgColor};
            `}
`;var sW=ga;var lW=function(e,t,r){for(var n=-1,i=e.length;++n<i;){var o=e[n],a=t(o);if(null!=a&&(void 0===s?a==a&&!sW(a):r(a,s)))var s=a,l=o}return l};var cW=lW,dW=vk,uW=function(e,t){return e<t};var hW=Uo((function(e,t){return e&&e.length?cW(e,dW(t),uW):void 0}));var pW=lW,gW=function(e,t){return e>t},fW=vk;var mW=Uo((function(e,t){return e&&e.length?pW(e,fW(t),gW):void 0}));const bW=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:s,maxDate:l,startTime:c,endTime:d,maxVisibleCellHeight:u,slots:h,interval:p=30,variant:g="flexible",enableSelection:f=!0,onSlotClick:b})=>{var v,y,x,w;const $="YYYY-MM-DD",[C,S]=a(!1),[k,D]=a(),T=m((()=>nu.generateDaysForCurrentWeek(r)),[r]),O=Object.values(null!=h?h:{}).flat(),E=null!==(y=null!=c?c:null===(v=hW(O,"startTime"))||void 0===v?void 0:v.startTime)&&void 0!==y?y:"00:00",_=null!==(w=null!=d?d:null===(x=mW(O,"endTime"))||void 0===x?void 0:x.endTime)&&void 0!==w?w:"24:00",M=Math.ceil(cu.getTimeDiffInMinutes(E,_)/p),{height:F=0,ref:I}=cr(),A=u?F<u||C?F:u:F,B=Do({height:A}),j=m((()=>{if(h){const e={};return Object.entries(h).forEach((([t,r])=>{const n=function(e){const t=Array(M).fill({});return e.forEach((e=>{const r=Math.max(0,cu.getTimeDiffInMinutes(E,e.startTime)/p),n=Math.min(M,cu.getTimeDiffInMinutes(E,e.endTime)/p),i=Math.ceil(n)-Math.floor(r);switch(g){case"fixed":t[Math.floor(r)]=Object.assign(Object.assign({},e),{cellLength:n-r});break;case"flexible":for(let o=0;o<i;o++){const a=cu.addMinutesToTime(E,Math.floor(r+o)*p),s=cu.addMinutesToTime(a,p);let l;tF(t[Math.floor(r+o)])?0===o&&r%1!=0?l="top":o===i-1&&n%1!=0&&(l="bottom"):l=void 0,t[Math.floor(r+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(r);e[t]=function(e){var t,r,n,i;let o=0;switch(g){case"fixed":for(e=e.reduce(((e,t)=>{const r=e.length>0?e[e.length-1]:e[0];return tF(t)&&tF(r)?e:[...e,t]}),[{}]);o<e.length;){if(tF(e[o])){const a=null!==(r=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==r?r:E,s=null!==(i=null===(n=e[o+1])||void 0===n?void 0:n.startTime)&&void 0!==i?i:_;if(a!==s){const t=cu.getTimeDiffInMinutes(a,s)/p;e[o]=Object.assign(Object.assign({},N(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)tF(e[o])?(e[o]=N(o),o++):o+=e[o].cellLength}return e.filter((e=>!tF(e)&&e.cellLength>0))}(n)})),e}return{}}),[h]),z=e=>{D(e)},R=()=>{D(void 0)},P=e=>{e.preventDefault(),S((e=>!e))},L=e=>{var t;const r=nu.isWithinRange(e,s?Vd(s):void 0,l?Vd(l):void 0),i=null!==(t=n&&n.includes(e.format($)))&&void 0!==t&&t;return!r||i};function N(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:dc["bg-stronger"]},cellLength:t}}return t(GH,{children:[e(qH,{children:T.map(((t,r)=>{const n=(e=>{const t=e.format($),r=L(e),n={},o=f&&!r;r&&(n.disabled=!0),n.interactive=f?o:null;const a=o&&k&&e.isSame(k,"day"),s=[i].includes(t);return s&&a?(n.labelType="selected-hover",n.circleLeft="selected-hover-outline",n.circleRight="selected-hover-outline"):s?(n.labelType="selected",n.circleLeft="selected-outline",n.circleRight="selected-outline"):a&&(n.labelType="hover",n.circleLeft="hover-subtle",n.circleRight="hover-subtle"),n})(t);return e(fh,Object.assign({date:t,calendarDate:Vd(i),onSelect:()=>{((e,t)=>{!t&&f&&o(e)})(t,!n.interactive)},onHover:z,onHoverEnd:R},n),`day-${r}`)}))}),e(qH,{children:T.map(((t,r)=>e(KH,{children:e(XH,{weight:"semibold",$disabled:L(t),children:Vd(t).format("ddd")})},`week-day-${r}`)))}),(()=>{let t=!1;const r=e=>{const r=Vd(E,"HH:mm").add(4*e*p,"minutes"),n=r.format("h"),i=r.format("mm"),o=r.format("a");let a=`${n}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e(JH,{$height:A,children:Array(Math.ceil(M/4)).fill(void 0).map(((t,n)=>e(eW,{children:e(tW,{children:r(n)})},`time-${n}`)))})})(),e(ZH,{style:B,children:e(QH,{ref:I,children:T.map(((t,r)=>{var n;const i=t.format($),o=null!==(n=j[i])&&void 0!==n?n:Array("flexible"===g?M:1).fill(void 0).map(((e,t)=>N(t,"fixed"===g?M:void 0)));return e(rW,{children:o.map((t=>{const{id:r,clickable:n=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e(aW,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:n,$height:"fixed"===g?12*a+4*(a-1):12,onClick:()=>n&&((e,t)=>{b&&b(e,t)})(i,t)},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format($)}`)}),(()=>{if(u&&I.current&&!(F&&F<u))return e(nW,{children:t(iW,{"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:P,children:[e(oW,{$isExpanded:C}),(C?"Hide":"Show")+" later times"]})})})()]})},vW=M.div`
    --header-bottom-spacing: 0.5rem;

    ${bc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,yW="YYYY-MM-DD",xW=t=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:i,value:s,minDate:l,maxDate:c,startTime:d,endTime:h,slots:p,interval:g,variant:f,maxVisibleCellHeight:m,showNavigationHeader:b=!0,enableSelection:v,onSlotClick:y,currentCalendarDate:x}=t,w=dt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[$,C]=a(s),S=o(null),k=o(void 0);u((()=>{C(s)}),[s]);const D=e=>{const t=e.format(yW);C(t),i&&i(t)},T=(e,t)=>{y&&y(e,t)},O=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format(yW),lastDayOfWeek:e.endOf("week").format(yW)},month:e.month()+1,year:e.year()};n(t)}};return e(vW,Object.assign({},w,{children:e(th,{ref:S,dynamicHeight:!0,initialCalendarDate:cu.toDayjs($||x).endOf("week").format(yW),selectedStartDate:$,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!l&&Vd(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>!!c&&Vd(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{k.current&&k.current.isSame(e,"week")||O(e),k.current=e},showNavigationHeader:b,minDate:l,maxDate:c,getMonthHeaderLabel:e=>Vd(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Vd(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>(t=>e(bW,{calendarDate:t,disabledDates:r,selectedDate:$,minDate:l,maxDate:c,startTime:d,endTime:h,onSelect:D,slots:p,interval:g,variant:f,maxVisibleCellHeight:m,enableSelection:v,onSlotClick:T}))(t)})}))},wW=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,$W=M.div`
    ${uc["body-xs-semibold"]}
    color:${dc.text};

    ${e=>e.$disabled&&F`
            color: ${dc["text-disabled-subtlest"]};
        `};
`,CW=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,SW=M.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,kW=M.div`
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
`,DW=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;Vd.extend(qd);const TW="YYYY-MM-DD",OW={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:dc["bg-stronger"],backgroundColor2:dc["bg-strongest"]}},EW=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:s,maxDate:l,slots:c,enableSelection:d=!0,onSlotClick:u})=>{const h=m((()=>nu.generateDaysForCurrentWeek(r)),[r]),[p,g]=a(),f=e=>{g(e)},b=()=>{g(void 0)},v=e=>{const t=e.format(TW),r=(e=>{const t=nu.isWithinRange(e,s?Vd(s):void 0,l?Vd(l):void 0),r=!!n&&n.includes(e.format(TW));return!t||r})(e),o=d&&!r,a=o&&p&&e.isSame(p,"day"),c=[i].includes(t),u={labelType:"available",interactive:d?o:null};return r&&(u.disabled=!0,u.labelType="unavailable"),c&&a?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):c?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):a&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return t(CW,{children:[h.map(((r,n)=>{const a=v(r);return t(wW,{children:[e(fh,Object.assign({date:r,calendarDate:Vd(i),onSelect:()=>{((e,t)=>{!t&&d&&o(e)})(r,!a.interactive)},onHover:f,onHoverEnd:b},a),`day-${n}`),e($W,{$disabled:a.disabled,children:Vd(r).format("ddd")})]},`week-day-${n}`)})),e(SW,{children:h.map(((r,n)=>{const i=r.format(TW),o=c&&(c[i]?c[i]:[OW]);return e(DW,{children:o&&o.map((r=>{const{id:n,startTime:o,endTime:a,clickable:s=!0,styleAttributes:l}=r,{color:c,styleType:d="default",backgroundColor:h,backgroundColor2:p}=l;return e(WH,{$type:"vertical",$variant:"default",$styleType:d,$bgColor:h,$bgColor2:p,$clickable:s,onClick:()=>s&&((e,t)=>{null==u||u(e,t)})(i,r),children:t(kW,{style:{color:c},children:[e("span",{children:nu.convertTo12HourFormat(o)}),a&&o&&e("span",{children:"-"}),e("span",{children:nu.convertTo12HourFormat(a)})]})},n)}))},`wrapper-${n}`)}))},`week-cell-${r.format(TW)}`)]})},_W=M.div`
    --header-bottom-spacing: 0.5rem;

    ${bc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,MW="YYYY-MM-DD",FW=t=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:i,value:s,minDate:l,maxDate:c,slots:d,showNavigationHeader:h=!0,enableSelection:p,onSlotClick:g,currentCalendarDate:f}=t,m=dt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[b,v]=a(s),y=o(null),x=o(void 0);u((()=>{v(s)}),[s]);const w=e=>{const t=e.format(MW);v(t),i&&i(t)},$=(e,t)=>{g&&g(e,t)},C=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format(MW),lastDayOfWeek:e.endOf("week").format(MW)},month:e.month()+1,year:e.year()};n(t)}};return e(_W,Object.assign({},m,{children:e(th,{ref:y,dynamicHeight:!0,initialCalendarDate:cu.toDayjs(b||f).endOf("week").format(MW),selectedStartDate:b,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!l&&Vd(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>!!c&&Vd(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"week")||C(e),x.current=e},showNavigationHeader:h,minDate:l,maxDate:c,getMonthHeaderLabel:e=>Vd(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Vd(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>e(EW,{calendarDate:t,disabledDates:r,selectedDate:b,minDate:l,maxDate:c,onSelect:w,slots:d,enableSelection:p,onSlotClick:$})})}))},IW=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return F`
                    border: 4px solid ${dc["icon-primary-subtle"]};
                `;case"upcoming-inactive":return F`
                    border: 4px solid ${dc["icon-subtle"]};
                `;case"disabled":return F`
                    background-color: ${dc["icon-disabled-subtle"]};
                `;case"completed":return F`
                    background-color: ${dc["icon-success"]};
                    svg {
                        color: ${dc["icon-inverse"]};
                    }
                `;case"error":return F`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${dc["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,AW=M.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return F`
                    background-color: ${dc["icon-primary-subtle"]};
                `;case"upcoming-inactive":return F`
                    background-color: ${dc["icon-subtle"]};
                `;case"disabled":return F`
                    background-color: ${dc["icon-disabled-subtle"]};
                `;case"completed":return F`
                    background-color: ${dc["icon-success"]};
                `;case"error":return F`
                    margin-left: -0.15rem;
                    background-color: ${dc["icon-error"]};
                `}}}
`,BW=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,jW=M.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${bc.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${bc.MaxWidth.sm} {
        grid-column: span 8;
    }
`,zW=M(_c.HeaderSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${bc.MaxWidth.md} {
        margin-bottom: 1.5rem;
    }
`,RW=M(_c.HeaderXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,PW=M.div`
    display: flex;

    :last-of-type ${AW} {
        margin-bottom: 0;
    }
`,LW=M.div`
    margin-bottom: 2rem;
    width: 100%;
`,NW=M.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,HW=M(qP)`
    padding: 0.125rem 0.5rem;
`,WW=({items:n,className:i,id:o,title:a,startCol:s,colSpan:l,"data-base-indicator-testid":c,"data-testid":d="timeline"})=>{const u=t=>"string"==typeof t?e(_c.BodyMD,{className:"timeline-item-content-text",children:t}):e(r,{children:t}),h=t=>"string"==typeof t?e(RW,{weight:"semibold",className:"timeline-item-title",children:t}):e(r,{children:t}),p=e=>e.slice(0,2).map(((e,t)=>k(HW,Object.assign({},e,{type:e.type,key:`status-pill-${t}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),g=t=>{switch(t){case"completed":return e(de,{});case"error":return e(ce,{});default:return null}};return t(jW,{className:i,id:o,"data-testid":d,$startCol:s,$colSpan:l,children:[e(zW,{"data-testid":"timeline-title",weight:"bold",children:a}),n.map(((r,n)=>{const{title:i,content:o,statuses:a,variant:s}=r,l=s||(0===n?"current":"upcoming-active");return t(PW,{children:[t(BW,{children:[e(IW,{"data-testid":c?`circleindicator${n+1}_div_${c}`:"circleindicator",$variant:l,children:g(l)}),e(AW,{$variant:l})]}),t(LW,{className:"timeline-item-content",children:[h(i),a&&e(NW,{children:p(a)}),u(o)]})]},`timeline-item-${n}`)}))]})},YW=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],VW=252,UW=I`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,KW=M(qg)`
    color: ${dc.icon};
    svg {
        ${e=>{if(e.$loading)return F`
                    animation: ${UW} 4s linear infinite;
                `}}
    }
`,XW=M.div`
    display: flex;
    padding-bottom: ${gc["spacing-16"]};
    justify-content: space-between;
    gap: ${gc["spacing-8"]};
`,qW=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${gc["spacing-8"]};
`,GW=M(_c.BodySM)`
    color: ${dc["text-subtler"]};
`,ZW=M(Jg)`
    width: 400px;
`,QW=n=>{var{selectedDate:i,loading:o,tableContainerRef:a,totalRecords:s,onPreviousDayClick:l,onNextDayClick:c,onRefresh:d,onCalendarDateSelect:u}=n,h=dt(n,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const p=()=>{a.current&&(a.current.scrollTop=0)},g=()=>{d&&(p(),d())};return t(XW,{children:[e(ZW,Object.assign({selectedDate:i,loading:o},h,{onRightArrowClick:e=>{p(),c(e)},onLeftArrowClick:e=>{p(),l(e)},onCalendarDateSelect:u})),void 0===s?e(r,{}):t(qW,{children:[t(GW,{"data-testid":"timetable-records-results",weight:"semibold",children:[s," results found"]}),d&&e(KW,{"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:o,onClick:g,$loading:o,children:e(ue,{})})]})]})},JW=M.div`
    display: flex;
    width: 100%;
`,eY=M.div`
    border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};
    ${e=>{if(e.$isOnTheHour)return F`
                box-shadow: inset -0.5px 0px ${dc["border-primary"]};
            `}}
`,tY=M.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,rY=M.div`
    width: 2px;
    height: 100%;
`,nY=M.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${fc.sm};
    box-sizing: border-box;
    padding: ${gc["spacing-4"]};
    ${({$status:e,$bgColour:t,$isClickable:r})=>{switch(e){case"blocked":return F`
                    background: repeating-linear-gradient(
                        135deg,
                        ${dc["bg-stronger"]} 0px 6px,
                        ${dc["bg-strongest"]} 6px 12px
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
                    background: ${dc["bg-disabled"]};
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;default:return F`
                    &:hover {
                        background-color: ${r?dc["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,iY=M(_c.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,oY=M(_c.BodyXS)`
    color: ${dc["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,aY=({containerRef:t,children:r,customPopover:n})=>{if(!n)return r;const i={position:"bottom-start",rootNode:t,customOffset:n.offset,children:r,trigger:n.trigger,delay:n.delay,popoverContent:n.content};return e(pw,Object.assign({},i))},sY=i.memo((({id:r,startTime:n,endTime:i,title:o,subtitle:a,status:s,intervalWidth:l,rowBarColor:c,containerRef:d,customPopover:u,onClick:h})=>{const p=0===Vd(i,"HH:mm").get("minutes"),g=cu.getTimeDiffInMinutes(n,i)/15*l-2,f=!!h||u&&"click"===u.trigger;return e(aY,{containerRef:d,customPopover:u,children:e(eY,{"data-testid":"block-container",$isOnTheHour:p,children:t(tY,{children:[t(nY,{$width:g,$status:s,$bgColour:c,$isClickable:f,onClick:e=>{h&&h({id:r,startTime:n,endTime:i,status:s,title:o,subtitle:a,customPopover:u},e)},children:[o&&e(iY,{weight:"semibold",children:o}),a&&e(oY,{weight:"bold",children:a})]}),e(rY,{})]})},"block-container-key")})})),lY=({id:t,timetableMinTime:r,timetableMaxTime:n,rowMinTime:i=r,rowMaxTime:o=n,rowCells:a,rowBarColor:s,intervalWidth:l,containerRef:c,outOfRangeCellPopover:d})=>{const u=m((()=>{const e=[];Vd(r,"HH:mm").isBefore(Vd(i,"HH:mm"))&&e.push({id:t,startTime:r,endTime:i,status:"blocked",customPopover:d});const s=[...a].sort(((e,t)=>{const r=Vd(e.startTime,"HH:mm"),n=Vd(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0}));return s.forEach(((r,n)=>{var i;const{endTime:s}=r;e.push(r);const l=Vd((null===(i=a[n+1])||void 0===i?void 0:i.startTime)||o,"HH:mm");let c=Vd(s,"HH:mm");for(;c.isBefore(l);)if(d=l,c.get("hour")!=d.get("hour")){const r=c.add(1,"hour").startOf("hour");e.push({id:t,startTime:c.format("HH:mm").toString(),endTime:r.format("HH:mm").toString(),status:"disabled"}),c=r}else e.push({id:t,startTime:c.format("HH:mm").toString(),endTime:l.format("HH:mm").toString(),status:"disabled"}),c=l;var d})),Vd(n,"HH:mm").isAfter(Vd(o,"HH:mm"))&&e.push({id:t,startTime:o,endTime:n,status:"blocked",customPopover:d}),e}),[t,r,n,i,o,a,d]);return e(JW,{"data-testid":"timetable-row",children:u.map(((t,r)=>e(sY,Object.assign({},t,{intervalWidth:l,rowBarColor:s,containerRef:c}),`${r}-row-cell-key`)))})},cY=M.div``,dY=M.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${VW}px auto;
`,uY=M.div`
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
`,hY=M.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${dc.bg};
    width: ${VW}px;
    z-index: 2;
    border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?F`
                box-shadow: 2px 2px 8px
                    rgb(from ${dc.Primitive["neutral-20"]} r g b / 25%);
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
`,pY=M.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${dc.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,gY=M.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${dc.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return F`
                box-shadow: 2px 2px 8px
                    rgb(from ${dc.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,fY=M.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${gc["spacing-4"]};
`,mY=M(_c.BodySM)`
    color: ${dc["text-subtler"]};
`,bY=M.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,vY=M.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${dc.bg};
    width: ${VW}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${gc["spacing-16"]} 0 ${gc["spacing-32"]};
    border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};
    border-left: ${pc["width-010"]} ${pc.solid}
        ${dc["border-primary"]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?F`
                box-shadow: 2px 2px 8px
                    rgb(from ${dc.Primitive["neutral-20"]} r g b / 25%);
            `:F`
                box-shadow: inset -0.5px 0px ${dc["border-primary"]};
            `};
`,yY=M(_c.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${dc["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,xY=M(_c.BodyXS)`
    display: inline-flex;
    gap: ${gc["spacing-4"]};
    align-items: center;
    color: ${dc["text-subtler"]};
    ${e=>{if(!e.$show)return F`
                display: none;
            `}}
`,wY=M(Sd)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,$Y=M(Vp)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${gc["spacing-72"]} 0;
`,CY=M.div`
    display: flex;
    border-bottom: ${pc["width-010"]} ${pc.solid} ${dc.border};
`,SY=M.div`
    border-right: ${pc["width-005"]} ${pc.solid}
        ${dc["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${gc["spacing-20"]} ${gc["spacing-12"]};
`,kY=I`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,DY=M.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${dc.Primitive["neutral-95"]} 8%,
        ${dc.Primitive["neutral-100"]} 18%,
        ${dc.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${kY} 1.5s forwards infinite;
`,TY=M(pw)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,OY=n=>{var{date:i,emptyContentMessage:s,rowData:l,loading:c,minTime:d="00:00",maxTime:h="23:00",minDate:p,maxDate:g,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPage:v,onRefresh:y,onNextDayClick:x,onPreviousDayClick:w,onCalendarDateSelect:$}=n,C=dt(n,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const S=C["data-testid"]||"timetable",D=lp.roundToNearestHour(d),T=lp.roundToNearestHour(h,!0),O=lp.generateHourlyIntervals(D,T),E=0===f||AD.isEmpty(l),_=E||l.length===f,M=o(null),F=o(null),[I,A]=a(!1),[B,j]=a(!1),[z,R]=a(0),[P,L]=a(!1);u((()=>{const e=AD.throttle((()=>{if(M.current&&(A(M.current.scrollLeft>0),j(M.current.scrollTop>0)),P||!M.current)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=M.current;Math.ceil(e+t)>=r-1&&!_&&v&&!c&&(L(!0),v())}),100),t=M.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[_,P,c,v]),u((()=>{L(!1)}),[l]);cr({onResize:()=>{if(M.current){const e=Math.ceil(60*O.length/15),t=(M.current.clientWidth-VW)/e;R(t>21?t:21)}},targetRef:M,refreshMode:"debounce",refreshRate:50});const N=(()=>{let e=0;const t=YW.length;return()=>{const r=YW[e];return e=(e+1)%t,r}})(),H=({wrapper:e,children:t})=>e(t),W=()=>{if(!c&&P)return e(vY,{$isScrolled:I,children:e(DY,{})})},Y=()=>{if(!c&&P)return e(CY,{"data-testid":"lazy-loader",children:O.map(((t,r)=>e(SY,{$width:4*z,children:e(DY,{})},`lazy-load-cell-${r}`)))})};return t(cY,E?Object.assign({},C,{"data-testid":S,children:[e(QW,{selectedDate:i,loading:c||P,tableContainerRef:M,minDate:p,maxDate:g,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),e(dY,{className:"empty-container",children:c?e(wY,{$isEmptyContent:E}):e($Y,{type:"no-item-found",description:s})})]}):Object.assign({},C,{"data-testid":S,children:[e(QW,{"data-id":"timetable-date-navigator",selectedDate:i,loading:c||P,tableContainerRef:M,minDate:p,maxDate:g,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),t(uY,{"data-id":"timetable-container","data-testid":"timetable-container",ref:M,$loading:c,$allRecordsLoaded:_||!v,children:[e(hY,{$isScrolledY:B,$isScrolledX:I}),e(pY,{$numOfRows:l.length,$isScrolled:I,"data-testid":"row-header-column-id",children:t(r,{children:[l.map(((r,n)=>e(H,{wrapper:e=>((e,t)=>{if(!e.rowHeaderPopover)return t;const r={position:"bottom-start",rootNode:M,customOffset:e.rowHeaderPopover.offset,children:t,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return k(TY,Object.assign({},r,{key:`${e.id}-popover-trigger`,zIndex:2}),t)})(r,e),children:t(vY,{$isScrolled:I,children:[e(yY,{$isClickable:!!r.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(r,e),weight:"semibold","data-testid":`${r.id}-row-header-title`,children:r.name}),e(xY,{weight:"bold",$show:!!r.subtitle,"data-testid":`${r.id}-row-header-subtitle`,children:r.subtitle})]},`${r.id}-row-header`)},n))),W()]})}),e(gY,{$numOfColumns:O.length,$isScrolled:B,children:O.map((t=>e(fY,{"data-testid":`${t}-column`,children:e(mY,{weight:"semibold",children:t})},`${t}-column-key`)))}),c?e(wY,{$isEmptyContent:E}):t(bY,{"data-testid":"content-container-id",ref:F,$numOfRows:l.length,children:[l.map(((t,r)=>e(lY,Object.assign({timetableMinTime:D,timetableMaxTime:T,rowBarColor:N(),intervalWidth:z,containerRef:F},t),`${r}-row-bar`))),Y()]})]})]}))},EY=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:dc[t.Background],Border:dc[t.Border],Text:dc[t.Text],Icon:dc[t.Icon]}},_Y=M(Yo.div)`
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

    ${e=>F`
            background: ${EY(e).Background};
            border: 1px solid ${EY(e).Border};
            color: ${EY(e).Text};
        `};
`,MY=M.div`
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
`,FY=M.div`
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
                color: ${EY(e).Icon};
            }
        `};
`,IY=M.div`
    display: flex;
    flex-direction: column;
`,AY=M(_c.HeaderXS)`
    display: flex;

    ${e=>F`
            color: ${EY(e).Text};
        `}
`,BY=M.div`
    ${e=>F`
            p {
                color: ${EY(e).Text};
            }
        `}
`,jY=M(ed.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${bc.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,zY=M(kc)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>F`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${EY(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${bc.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,RY=4e3,PY=r=>{var{type:n="success",title:o,label:s,autoDismiss:l,autoDismissTime:c=RY,onDismiss:d,fixed:h=!0,actionButton:p}=r,g=dt(r,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[f,m]=a(!1),b=A(),v=mc["lg-max"]({theme:b}),y=Ed.useMediaQuery({maxWidth:v});u((()=>{m(!0)}),[]),u((()=>{if(!l)return;const e=setTimeout((()=>{m(!1)}),c);return()=>clearTimeout(e)}),[l]);const x=Do({opacity:f?1:0,transform:f?y?"translateY(0%)":"translateX(0%)":y?"translateY(-1500%)":"translateX(150%)",config:{easing:Dn.easeInOutQuart,duration:1e3},onRest:()=>{f||null==d||d()}});return t(_Y,Object.assign({style:x,$type:n,$fixed:h},g,{children:[t(MY,{children:[t(FY,{$type:n,children:[(()=>{switch(n){case"success":return e(ge,{});case"warning":return e(pe,{});case"error":return e(ce,{});case"info":return e(he,{});default:return null}})(),t(IY,{children:[o&&(i.isValidElement(o)?o:e(AY,{$type:n,weight:"semibold",children:o})),s&&e(BY,{$type:n,children:i.isValidElement(s)?s:e(o?_c.BodyMD:_c.BodyBL,{children:s})})]})]}),p&&e(jY,{styleType:"light",onClick:p.onClick,children:p.label})]}),e(zY,{$type:n,onClick:()=>{m(!1)},children:e(J,{})})]}))},LY=M.div`
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

                ${mf.MaxWidth.mobileL} {
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

                ${mf.MaxWidth.mobileL} {
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

                ${mf.MaxWidth.mobileL} {
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

                ${mf.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?F`
            visibility: "visible";
            opacity: 1;
            transition: ${vL.Base};
            z-index: 2;
        `:F`
            visibility: "hidden";
            opacity: 0;
            transition: ${vL.Base};
            z-index: -1;
        `}
`,NY=M(_h)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,HY=M.div`
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
                        border-color: ${tL.Neutral[8]} transparent
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
                        border-color: transparent ${tL.Neutral[8]}
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
                            ${tL.Neutral[8]};
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
                            ${tL.Neutral[8]} transparent;
                    }
                `}}}
`,WY=M.div`
    position: relative;
`,YY=r=>{var{visible:n,position:i="top",children:s}=r,l=dt(r,["visible","position","children"]);const c=l["data-testid"]||"tooltip",[d,h]=a(i),p=o(null);u((()=>(f(),window.addEventListener("resize",ip(g,300)),()=>{window.removeEventListener("resize",ip(g,300))})),[]);const g=()=>{f()},f=()=>{if(p.current){const e=p.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":h("right");break;case"right":h("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":h("left");break;case"left":h("top")}else h(i)}};return t(LY,Object.assign({position:d,"data-testid":c,visible:n,ref:p},l,{children:[e(NY,{children:"string"==typeof s?e(gL.BodySmall,{children:s}):s}),e(HY,{position:d})]}))},VY=(r,n)=>i=>{const{tooltipVisible:o,position:a}=i,s=dt(i,["tooltipVisible","position"]);return t(WY,{children:[e(r,Object.assign({},s)),e(YY,{visible:o,position:a,children:n.content})]})},UY=F`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${bc.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,KY=M(XB.Content)`
    background: ${({$background:e})=>e?dc["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,XY=M(_c.HeaderSM)`
    margin-bottom: 1rem;
    ${UY}
`,qY=M(_c.BodyBL)`
    margin-bottom: 2rem;
    ${UY}
`,GY=M.div`
    ${UY}
`,ZY=M.ul`
    ${UY}
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
`,QY=i.forwardRef(((t,r)=>{var{stretch:n}=t,i=dt(t,["stretch"]);return e(ZY,Object.assign({ref:r,$stretch:n},i))})),JY=M.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return F`
                    grid-column: auto / span 4;
                `;case"full":return F`
                    grid-column: auto / span 8;
                `}}}

    ${bc.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,eV=M.div`
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
`,tV=M.button`
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
`,rV=M.span`
    color: ${dc["text-disabled"]};
`,nV=M(Xc)`
    margin-right: 0.5rem;
    color: ${dc["text-disabled"]};
`,iV=M(We)`
    color: ${dc["icon-warning"]};
    margin-right: 0.5rem;
    height: ${uc.Spec["body-size-baseline"]};
    width: ${uc.Spec["body-size-baseline"]};
`,oV=M.span`
    color: ${dc["text-warning"]};
`,aV=M.span`
    ${uc["body-baseline-semibold"]}
    color: ${dc.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,sV=M(gd)`
    margin-top: 0.5rem;
`,lV=({label:n,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:c="•",maskRange:d,unmaskRange:h,maskRegex:p,disableMaskUnmask:g,alert:f,maskTransformer:m,onMask:b,onUnmask:v,onTryAgain:y})=>{const[x,w]=a(s);u((()=>{w(s)}),[s]);const $=()=>{switch("fail"===l&&y&&y(),x){case"masked":v&&v(),w("unmasked");break;case"unmasked":b&&b(),w("masked")}},C=()=>"string"!=typeof i?i:"masked"===x?hu.maskValue(i,{maskChar:c,maskRange:d,unmaskRange:h,maskRegex:p,maskTransformer:m}):i,S=()=>{switch(l){case"fail":return t(r,{children:[e(iV,{}),e(oV,{children:"Error"}),e(aV,{children:"Try again?"})]});case"loading":return t(r,{children:[e(nV,{}),e(rV,{children:"Retrieving..."})]});default:return t(r,{children:[C(),e(eV,{children:"masked"===x?e(Ne,{"data-testid":"masked-icon"}):e(He,{"data-testid":"unmasked-icon"})})]})}};return t(JY,{$widthStyle:o,children:[e(Cw,{children:n}),"string"!=typeof i?i:x?g?e(_c.BodyBL,{children:C()}):e(tV,{"data-testid":"clickable-label",onClick:$,"aria-busy":"loading"===l,"aria-live":"polite",type:"button",children:S()}):e(_c.BodyBL,{children:i}),f&&e(sV,Object.assign({sizeType:"small"},f))]})},cV=Object.assign((n=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:c,background:d=!0,stretch:u,onMask:h,onUnmask:p,onTryAgain:g}=n,f=dt(n,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{h&&h(e)},b=e=>()=>{p&&p(e)},v=e=>()=>{g&&g(e)},y=()=>{if(i&&i.length>0){const t=i.map(((t,r)=>e(lV,Object.assign({},t,{onMask:m(t),onUnmask:b(t),onTryAgain:v(t)}),r)));return e(ZY,{$stretch:u,children:t})}return null};return e(KY,Object.assign({$background:d},f,{type:"grid",children:c||t(r,{children:[o&&e(XY,{weight:"semibold",$stretch:u,children:o}),a&&e(qY,{$stretch:u,children:a}),s&&e(GY,{"data-id":"top-section",$stretch:u,children:s}),y(),l&&e(GY,{"data-id":"bottom-section",$stretch:u,children:l})]})}))}),{ItemSection:QY,Item:lV}),dV={collections:{base:{InputBoxShadow:F`
        inset 0 0 4px 0px ${tL.Shadow.Accent}
    `,InputErrorBoxShadow:F`
        inset 0 0 4px 0px ${tL.Shadow.Red}
    `,ElevationBoxShadow:F`
      0px 2px 8px ${tL.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:F`
        inset 0 0 3px 0px ${tL.Shadow.Accent}
    `,InputErrorBoxShadow:F`
        inset 0 0 3px 0px ${tL.Shadow.Red}
    `,ElevationBoxShadow:F`
      0px 2px 8px ${tL.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},uV=e=>t=>{var r,n;const i=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,o=ZP(dV,null==i?void 0:i[QP.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?GP(o,e,i.options.designToken):GP(o,e)},hV={InputBoxShadow:uV("InputBoxShadow"),InputErrorBoxShadow:uV("InputErrorBoxShadow"),ElevationBoxShadow:uV("ElevationBoxShadow"),Table:{Header:uV("Table.Header"),Cell:{Primary:uV("Table.Cell.Primary"),Secondary:uV("Table.Cell.Secondary"),Selected:uV("Table.Cell.Selected"),Hover:uV("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:uV("Button.Danger.BackgroundColor"),Hover:uV("Button.Danger.Hover"),Primary:uV("Button.Danger.Primary"),Border:uV("Button.Danger.Border")}}},pV=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=dt(t,["children","data-testid","type","stretch"]);return e(gV,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),gV=M.div`
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

                ${mf.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${mf.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${mf.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return F`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${mf.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${mf.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return F`
                    display: flex;
                    flex-direction: column;
                `;default:return F`
                    display: flex;
                `}}}
`,fV=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=dt(t,["children","data-testid","stretch"]);return e(mV,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),mV=M.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?F`
                ${mf.MaxWidth.tablet} {
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
`,bV=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=dt(t,["children","data-testid","className","type","stretch"]);return e(fV,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e(pV,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),vV={Section:fV,Container:pV,Content:bV,ColDiv:yf};var yV;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(yV||(yV={}));const xV=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,wV=M.ol`
    ${e=>xV(e.bottomMargin)}
    margin-left: ${3}rem;

    ${mf.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>pL.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${tL.Neutral[1]};
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
`,$V=M.ul`
    ${e=>xV(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>pL.getTextStyle(e.size,"regular")}
        color: ${tL.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,CV={Ul:t=>{var{size:r="Body",children:n}=t,i=dt(t,["size","children"]);return e($V,Object.assign({size:r},i,{children:n}))},Ol:t=>{var{size:r="Body",children:n}=t,i=dt(t,["size","children"]);return e(wV,Object.assign({size:r},i,{children:n}))}},SV={[QP.colorScheme]:"base",[QP.textStyleScheme]:"base",[QP.designTokenScheme]:"base",[QP.resourceScheme]:"base"},kV={[QP.colorScheme]:"bookingsg",[QP.textStyleScheme]:"base",[QP.designTokenScheme]:"base",[QP.resourceScheme]:"bookingsg"},DV={[QP.colorScheme]:"rbs",[QP.textStyleScheme]:"base",[QP.designTokenScheme]:"rbs",[QP.resourceScheme]:"rbs"},TV={[QP.colorScheme]:"mylegacy",[QP.textStyleScheme]:"base",[QP.designTokenScheme]:"base",[QP.resourceScheme]:"mylegacy"},OV={[QP.colorScheme]:"ccube",[QP.textStyleScheme]:"base",[QP.designTokenScheme]:"base",[QP.resourceScheme]:"ccube"},EV={[QP.colorScheme]:"oneservice",[QP.textStyleScheme]:"oneservice",[QP.designTokenScheme]:"base",[QP.resourceScheme]:"base"};export{cR as $,od as A,Wd as B,dc as C,yg as D,dm as E,Dm as F,Nz as G,Jw as H,qg as I,Wz as J,o$ as K,md as L,yD as M,gF as N,bF as O,vF as P,NF as Q,Kw as R,sm as S,HF as T,qF as U,tI as V,XB as W,iR as X,aR as Y,BD as Z,ut as _,lm as a,CV as a$,uR as a0,Wf as a1,lP as a2,cP as a3,sP as a4,xP as a5,CP as a6,DP as a7,MP as a8,Tf as a9,wc as aA,$c as aB,Cc as aC,QI as aD,UH as aE,xW as aF,FW as aG,WW as aH,eA as aI,OY as aJ,PY as aK,MI as aL,YY as aM,VY as aN,vL as aO,_c as aP,cV as aQ,sA as aR,tL as aS,hV as aT,vV as aU,mf as aV,bf as aW,pL as aX,sL as aY,gL as aZ,yV as a_,VP as aa,AF as ab,qP as ac,kL as ad,SL as ae,uw as af,bw as ag,pw as ah,zF as ai,yN as aj,SN as ak,XF as al,VN as am,uH as an,DH as ao,EH as ap,uc as aq,hc as ar,pc as as,gc as at,fc as au,mc as av,bc as aw,vc as ax,yc as ay,xc as az,gd as b,SV as b0,kV as b1,DV as b2,TV as b3,OV as b4,EV as b5,QP as b6,Vo as c,xd as d,Sd as e,Tu as f,Ko as g,ed as h,Mu as i,Th as j,_h as k,Ph as l,_p as m,Kg as n,Jg as o,uf as p,Cf as q,Bf as r,Vp as s,Fp as t,Qm as u,QA as v,IB as w,aj as x,cA as y,Lz as z};
//# sourceMappingURL=index.36df360a.js.map
