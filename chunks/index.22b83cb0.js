import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,forwardRef as g,useCallback as p,useContext as f,useMemo as m,useImperativeHandle as b,lazy as v,Suspense as y,useReducer as x,memo as w,createContext as $,Fragment as C,Children as S,createElement as k}from"react";import D,{findDOMNode as T,unstable_batchedUpdates as E,createPortal as O}from"react-dom";import{ChevronUpIcon as F}from"@lifesg/react-icons/chevron-up";import _,{css as M,ThemeContext as I,ThemeProvider as A,keyframes as B,useTheme as j}from"styled-components";import{ExternalIcon as R}from"@lifesg/react-icons/external";import{ArrowRightIcon as z}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as P}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as L}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as N}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as H}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as W,SquareIcon as Y,SquareFillIcon as V,SquareTickFillIcon as U,MinusSquareFillIcon as K,ClockIcon as X,ArrowUpIcon as q,ArrowDownIcon as G,ArrowRightIcon as Z,PencilIcon as Q,EraserIcon as J,DownloadIcon as ee,CrossIcon as te,FilterIcon as re,PlaceholderImageIcon as ne,MagnifierPlusIcon as ie,MagnifierMinusIcon as oe,ChevronLeftIcon as ae,ChevronRightIcon as se,CircleIcon as le,CircleDotIcon as ce,ChevronUpIcon as de,ExclamationCircleFillIcon as ue,TickIcon as he,RefreshIcon as ge,ICircleFillIcon as pe,ExclamationTriangleFillIcon as fe,TickCircleFillIcon as me}from"@lifesg/react-icons";import{ChevronDownIcon as be}from"@lifesg/react-icons/chevron-down";import{ChevronRightIcon as ve}from"@lifesg/react-icons/chevron-right";import{ChevronLeftIcon as ye}from"@lifesg/react-icons/chevron-left";import{useFloatingTree as xe,useFloating as we,autoUpdate as $e,offset as Ce,flip as Se,shift as ke,limitShift as De,size as Te,useTransitionStyles as Ee,useClick as Oe,useDismiss as Fe,useInteractions as _e,FloatingPortal as Me,FloatingFocusManager as Ie,FloatingTree as Ae,useFloatingNodeId as Be,FloatingNode as je,useHover as Re}from"@floating-ui/react";import{CrossIcon as ze}from"@lifesg/react-icons/cross";import{StarIcon as Pe}from"@lifesg/react-icons/star";import{StarFillIcon as Le}from"@lifesg/react-icons/star-fill";import{CloudArrowUpFillIcon as Ne}from"@lifesg/react-icons/cloud-arrow-up-fill";import{MagnifierIcon as He}from"@lifesg/react-icons/magnifier";import{EyeIcon as We}from"@lifesg/react-icons/eye";import{EyeSlashIcon as Ye}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as Ve}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as Ue}from"@lifesg/react-icons/square";import{SquareFillIcon as Ke}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as Xe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as qe}from"@lifesg/react-icons/tick";import{CaretRightIcon as Ge}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Ze}from"@lifesg/react-icons/minus-square-fill";import{CircleIcon as Qe}from"@lifesg/react-icons/circle";import{CircleDotIcon as Je}from"@lifesg/react-icons/circle-dot";import{BinIcon as et}from"@lifesg/react-icons/bin";import{PencilIcon as tt}from"@lifesg/react-icons/pencil";import{DragHandleIcon as rt}from"@lifesg/react-icons/drag-handle";import{MinusIcon as nt}from"@lifesg/react-icons/minus";import{PlusIcon as it}from"@lifesg/react-icons/plus";import{MenuIcon as ot}from"@lifesg/react-icons/menu";import{Chevron2LeftIcon as at}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as st}from"@lifesg/react-icons/chevron-2-right";import{ChevronLineLeftIcon as lt}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as ct}from"@lifesg/react-icons/chevron-line-right";import{EllipsisHorizontalIcon as dt}from"@lifesg/react-icons/ellipsis-horizontal";import{StarHalfIcon as ut}from"@lifesg/react-icons/star-half";const ht=i.createContext(!1);function gt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function pt(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function ft(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function mt(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function bt(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var vt=function(e,t){return vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},vt(e,t)};var yt=function(){return yt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},yt.apply(this,arguments)};var xt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var wt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},$t="object"==typeof xt&&xt&&xt.Object===Object&&xt,Ct="object"==typeof self&&self&&self.Object===Object&&self,St=$t||Ct||Function("return this")(),kt=St,Dt=function(){return kt.Date.now()},Tt=/\s/;var Et=function(e){for(var t=e.length;t--&&Tt.test(e.charAt(t)););return t},Ot=/^\s+/;var Ft=function(e){return e?e.slice(0,Et(e)+1).replace(Ot,""):e},_t=St.Symbol,Mt=_t,It=Object.prototype,At=It.hasOwnProperty,Bt=It.toString,jt=Mt?Mt.toStringTag:void 0;var Rt=function(e){var t=At.call(e,jt),r=e[jt];try{e[jt]=void 0;var n=!0}catch(e){}var i=Bt.call(e);return n&&(t?e[jt]=r:delete e[jt]),i},zt=Object.prototype.toString;var Pt=Rt,Lt=function(e){return zt.call(e)},Nt=_t?_t.toStringTag:void 0;var Ht=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Nt&&Nt in Object(e)?Pt(e):Lt(e)},Wt=function(e){return null!=e&&"object"==typeof e};var Yt=Ft,Vt=wt,Ut=function(e){return"symbol"==typeof e||Wt(e)&&"[object Symbol]"==Ht(e)},Kt=/^[-+]0x[0-9a-f]+$/i,Xt=/^0b[01]+$/i,qt=/^0o[0-7]+$/i,Gt=parseInt;var Zt=wt,Qt=Dt,Jt=function(e){if("number"==typeof e)return e;if(Ut(e))return NaN;if(Vt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Vt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Yt(e);var r=Xt.test(e);return r||qt.test(e)?Gt(e.slice(2),r?2:8):Kt.test(e)?NaN:+e},er=Math.max,tr=Math.min;var rr=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function f(){var e=Qt();if(p(e))return m(e);s=setTimeout(f,function(e){var r=t-(e-l);return u?tr(r,o-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?g(e):(n=i=void 0,a)}function b(){var e=Qt(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),g(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=Jt(t)||0,Zt(r)&&(d=!!r.leading,o=(u="maxWait"in r)?er(Jt(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Qt())},b},nr=rr,ir=wt;var or=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ir(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),nr(e,t,{leading:n,maxWait:t,trailing:i})},ar=function(e,t,r,n){switch(t){case"debounce":return rr(e,r,n);case"throttle":return or(e,r,n);default:return e}},sr=function(e){return"function"==typeof e},lr=function(){return"undefined"==typeof window},cr=function(e){return e instanceof Element||e instanceof HTMLDocument},dr=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&sr(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!lr()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(lr())return null;if(t)return document.querySelector(t);if(n&&cr(n))return n;if(r.targetRef&&cr(r.targetRef.current))return r.targetRef.current;var i=T(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=dr(s,r.setState.bind(r),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!lr()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return sr(t)?"renderProp":sr(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,c=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=l(),r.observableElement=null,lr()||(r.resizeHandler=ar(r.createResizeHandler,i,a,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}vt(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){lr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(d);var ur=lr()?u:h;function hr(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,p=e.observerOptions,f=e.onResize,m=o(r),b=o(null),v=null!=g?g:b,y=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return ur((function(){if(!lr()){var e=dr(f,$,d,h);y.current=ar((function(t){(d||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!lr()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,d,h,f,p,v.current]),yt({ref:v},w)}var gr=Object.defineProperty,pr={};((e,t)=>{for(var r in t)gr(e,r,{get:t[r],enumerable:!0})})(pr,{assign:()=>Kr,colors:()=>Yr,createStringInterpolator:()=>Lr,skipAnimation:()=>Vr,to:()=>Nr,willAdvance:()=>Ur});var fr=_r(),mr=e=>Tr(e,fr),br=_r();mr.write=e=>Tr(e,br);var vr=_r();mr.onStart=e=>Tr(e,vr);var yr=_r();mr.onFrame=e=>Tr(e,yr);var xr=_r();mr.onFinish=e=>Tr(e,xr);var wr=[];mr.setTimeout=(e,t)=>{const r=mr.now()+t,n=()=>{const e=wr.findIndex((e=>e.cancel==n));~e&&wr.splice(e,1),kr-=~e?1:0},i={time:r,handler:e,cancel:n};return wr.splice($r(r),0,i),kr+=1,Er(),i};var $r=e=>~(~wr.findIndex((t=>t.time>e))||~wr.length);mr.cancel=e=>{vr.delete(e),yr.delete(e),xr.delete(e),fr.delete(e),br.delete(e)},mr.sync=e=>{Dr=!0,mr.batchedUpdates(e),Dr=!1},mr.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,mr.onStart(r)}return n.handler=e,n.cancel=()=>{vr.delete(r),t=null},n};var Cr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};mr.use=e=>Cr=e,mr.now="undefined"!=typeof performance?()=>performance.now():Date.now,mr.batchedUpdates=e=>e(),mr.catch=console.error,mr.frameLoop="always",mr.advance=()=>{"demand"!==mr.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Fr()};var Sr=-1,kr=0,Dr=!1;function Tr(e,t){Dr?(t.delete(e),e(0)):(t.add(e),Er())}function Er(){Sr<0&&(Sr=0,"demand"!==mr.frameLoop&&Cr(Or))}function Or(){~Sr&&(Cr(Or),mr.batchedUpdates(Fr))}function Fr(){const e=Sr;Sr=mr.now();const t=$r(Sr);t&&(Mr(wr.splice(0,t),(e=>e.handler())),kr-=t),kr?(vr.flush(),fr.flush(e?Math.min(64,Sr-e):16.667),yr.flush(),br.flush(),xr.flush()):Sr=-1}function _r(){let e=new Set,t=e;return{add(r){kr+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(kr-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,kr-=t.size,Mr(t,(t=>t(r)&&e.add(t))),kr+=e.size,t=e)}}}function Mr(e,t){e.forEach((e=>{try{t(e)}catch(e){mr.catch(e)}}))}function Ir(){}var Ar={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Br(e,t){if(Ar.arr(e)){if(!Ar.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var jr=(e,t)=>e.forEach(t);function Rr(e,t,r){if(Ar.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var zr=e=>Ar.und(e)?[]:Ar.arr(e)?e:[e];function Pr(e,t){if(e.size){const r=Array.from(e);e.clear(),jr(r,t)}}var Lr,Nr,Hr=(e,...t)=>Pr(e,(e=>e(...t))),Wr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Yr=null,Vr=!1,Ur=Ir,Kr=e=>{e.to&&(Nr=e.to),e.now&&(mr.now=e.now),void 0!==e.colors&&(Yr=e.colors),null!=e.skipAnimation&&(Vr=e.skipAnimation),e.createStringInterpolator&&(Lr=e.createStringInterpolator),e.requestAnimationFrame&&mr.use(e.requestAnimationFrame),e.batchedUpdates&&(mr.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ur=e.willAdvance),e.frameLoop&&(mr.frameLoop=e.frameLoop)},Xr=new Set,qr=[],Gr=[],Zr=0,Qr={get idle(){return!Xr.size&&!qr.length},start(e){Zr>e.priority?(Xr.add(e),mr.onStart(Jr)):(en(e),mr(rn))},advance:rn,sort(e){if(Zr)mr.onFrame((()=>Qr.sort(e)));else{const t=qr.indexOf(e);~t&&(qr.splice(t,1),tn(e))}},clear(){qr=[],Xr.clear()}};function Jr(){Xr.forEach(en),Xr.clear(),mr(rn)}function en(e){qr.includes(e)||tn(e)}function tn(e){qr.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(qr,(t=>t.priority>e.priority)),0,e)}function rn(e){const t=Gr;for(let r=0;r<qr.length;r++){const n=qr[r];Zr=n.priority,n.idle||(Ur(n),n.advance(e),n.idle||t.push(n))}return Zr=0,(Gr=qr).length=0,(qr=t).length>0}var nn="[-+]?\\d*\\.?\\d+",on=nn+"%";function an(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var sn=new RegExp("rgb"+an(nn,nn,nn)),ln=new RegExp("rgba"+an(nn,nn,nn,nn)),cn=new RegExp("hsl"+an(nn,on,on)),dn=new RegExp("hsla"+an(nn,on,on,nn)),un=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,gn=/^#([0-9a-fA-F]{6})$/,pn=/^#([0-9a-fA-F]{8})$/;function fn(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function mn(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=fn(i,n,e+1/3),a=fn(i,n,e),s=fn(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function bn(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function vn(e){return(parseFloat(e)%360+360)%360/360}function yn(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function xn(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function wn(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=gn.exec(e))?parseInt(t[1]+"ff",16)>>>0:Yr&&void 0!==Yr[e]?Yr[e]:(t=sn.exec(e))?(bn(t[1])<<24|bn(t[2])<<16|bn(t[3])<<8|255)>>>0:(t=ln.exec(e))?(bn(t[1])<<24|bn(t[2])<<16|bn(t[3])<<8|yn(t[4]))>>>0:(t=un.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=pn.exec(e))?parseInt(t[1],16)>>>0:(t=hn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=cn.exec(e))?(255|mn(vn(t[1]),xn(t[2]),xn(t[3])))>>>0:(t=dn.exec(e))?(mn(vn(t[1]),xn(t[2]),xn(t[3]))|yn(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var $n=(e,t,r)=>{if(Ar.fun(e))return e;if(Ar.arr(e))return $n({range:e,output:t,extrapolate:r});if(Ar.str(e.output[0]))return Lr(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var Cn=1.70158,Sn=1.525*Cn,kn=Cn+1,Dn=2*Math.PI/3,Tn=2*Math.PI/4.5,En=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},On={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>kn*e*e*e-Cn*e*e,easeOutBack:e=>1+kn*Math.pow(e-1,3)+Cn*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Sn)/2:(Math.pow(2*e-2,2)*((Sn+1)*(2*e-2)+Sn)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Dn),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Dn)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Tn)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Tn)/2+1,easeInBounce:e=>1-En(1-e),easeOutBounce:En,easeInOutBounce:e=>e<.5?(1-En(1-2*e))/2:(1+En(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Fn=Symbol.for("FluidValue.get"),_n=Symbol.for("FluidValue.observers"),Mn=e=>Boolean(e&&e[Fn]),In=e=>e&&e[Fn]?e[Fn]():e,An=e=>e[_n]||null;function Bn(e,t){const r=e[_n];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var jn=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Rn(this,e)}},Rn=(e,t)=>Nn(e,Fn,t);function zn(e,t){if(e[Fn]){let r=e[_n];r||Nn(e,_n,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Pn(e,t){const r=e[_n];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[_n]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Ln,Nn=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Hn=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Wn=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Yn=new RegExp(`(${Hn.source})(%|[a-z]+)`,"i"),Vn=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Un=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Kn=e=>{const[t,r]=Xn(e);if(!t||Wr())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Un.test(r)?Kn(r):r||e},Xn=e=>{const t=Un.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},qn=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Gn=e=>{Ln||(Ln=Yr?new RegExp(`(${Object.keys(Yr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>In(e).replace(Un,Kn).replace(Wn,wn).replace(Ln,wn))),r=t.map((e=>e.match(Hn).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=n.map((t=>$n({...e,output:t})));return e=>{const r=!Yn.test(t[0])&&t.find((e=>Yn.test(e)))?.replace(Hn,"");let n=0;return t[0].replace(Hn,(()=>`${i[n++](e)}${r||""}`)).replace(Vn,qn)}},Zn="react-spring: ",Qn=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Zn}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Jn=Qn(console.warn);var ei=Qn(console.warn);function ti(e){return Ar.str(e)&&("#"==e[0]||/\d/.test(e)||!Wr()&&Un.test(e)||e in(Yr||{}))}var ri=Wr()?u:h;function ni(){const e=a()[1],t=(()=>{const e=o(!1);return ri((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var ii=e=>u(e,oi),oi=[];function ai(e){const t=o();return u((()=>{t.current=e})),t.current}var si=Symbol.for("Animated:node"),li=e=>e&&e[si],ci=(e,t)=>{return r=e,n=si,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},di=e=>e&&e[si]&&e[si].getPayload(),ui=class{constructor(){ci(this,this)}getPayload(){return this.payload||[]}},hi=class extends ui{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Ar.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new hi(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ar.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ar.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},gi=class extends hi{constructor(e){super(0),this._string=null,this._toString=$n({output:[e,e]})}static create(e){return new gi(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ar.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=$n({output:[this.getValue(),e]})),this._value=0,super.reset()}},pi={dependencies:null},fi=class extends ui{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Rr(this.source,((r,n)=>{var i;(i=r)&&i[si]===i?t[n]=r.getValue(e):Mn(r)?t[n]=In(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&jr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Rr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){pi.dependencies&&Mn(e)&&pi.dependencies.add(e);const t=di(e);t&&jr(t,(e=>this.add(e)))}},mi=class extends fi{constructor(e){super(e)}static create(e){return new mi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(bi)),!0)}};function bi(e){return(ti(e)?gi:hi).create(e)}function vi(e){const t=li(e);return t?t.constructor:Ar.arr(e)?mi:ti(e)?gi:hi}var yi=(e,t)=>{const r=!Ar.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((i,a)=>{const s=o(null),l=r&&p((e=>{s.current=function(e,t){e&&(Ar.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,d]=function(e,t){const r=new Set;pi.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new fi(e),pi.dependencies=null,[e,r]}(i,t),h=ni(),g=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new xi(g,d),m=o();ri((()=>(m.current=f,jr(d,(e=>zn(e,f))),()=>{m.current&&(jr(m.current.deps,(e=>Pn(e,m.current))),mr.cancel(m.current.update))}))),u(g,[]),ii((()=>()=>{const e=m.current;jr(e.deps,(t=>Pn(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:l})}))},xi=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&mr.write(this.update)}};var wi=Symbol.for("AnimatedComponent"),$i=e=>Ar.str(e)?e:e&&Ar.str(e.displayName)?e.displayName:Ar.fun(e)&&e.name||null;function Ci(e,...t){return Ar.fun(e)?e(...t):e}var Si=(e,t)=>!0===e||!!(t&&e&&(Ar.fun(e)?e(t):zr(e).includes(t))),ki=(e,t)=>Ar.obj(e)?t&&e[t]:e,Di=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ti=e=>e,Ei=(e,t=Ti)=>{let r=Oi;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Ar.und(r)||(n[i]=r)}return n},Oi=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Fi={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function _i(e){const t=function(e){const t={};let r=0;if(Rr(e,((e,n)=>{Fi[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Rr(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Mi(e){return e=In(e),Ar.arr(e)?e.map(Mi):ti(e)?pr.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ii(e){return Ar.fun(e)||Ar.arr(e)&&Ar.obj(e[0])}var Ai={tension:170,friction:26,mass:1,damping:1,easing:On.linear,clamp:!1},Bi=class{constructor(){this.velocity=0,Object.assign(this,Ai)}};function ji(e,t){if(Ar.und(t.decay)){const r=!Ar.und(t.tension)||!Ar.und(t.friction);!r&&Ar.und(t.frequency)&&Ar.und(t.damping)&&Ar.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Ri=[],zi=class{constructor(){this.changed=!1,this.values=Ri,this.toValues=null,this.fromValues=Ri,this.config=new Bi,this.immediate=!1}};function Pi(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=Si(r.cancel??n?.cancel,t);if(d)g();else{Ar.und(r.pause)||(i.paused=Si(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||Si(e,t)),l=Ci(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-mr.now()}function h(){l>0&&!pr.skipAnimation?(i.delayed=!0,c=mr.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(c)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Li=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Wi(e.get()):t.every((e=>e.noop))?Ni(e.get()):Hi(e.get(),t.every((e=>e.finished))),Ni=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Hi=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Wi=e=>({value:e,cancelled:!0,finished:!1});function Yi(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Ei(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),g=e=>{const t=i<=(r.cancelId||0)&&Wi(n)||i!==r.asyncId&&Hi(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new Ui,a=new Ki;return(async()=>{if(pr.skipAnimation)throw Vi(r),a.result=Hi(n,!1),u(a),a;g(o);const s=Ar.obj(e)?{...e}:{...t,to:e};s.parentId=i,Rr(c,((e,t)=>{Ar.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return g(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(pr.skipAnimation)return Vi(r),Hi(n,!1);try{let t;t=Ar.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),h]),f=Hi(n.get(),!0,!1)}catch(e){if(e instanceof Ui)f=e.result;else{if(!(e instanceof Ki))throw e;f=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Ar.fun(a)&&mr.batchedUpdates((()=>{a(f,n,n.item)})),f})():l}function Vi(e,t){Pr(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Ui=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Ki=class extends Error{constructor(){super("SkipAnimationSignal")}},Xi=e=>e instanceof Gi,qi=1,Gi=class extends jn{constructor(){super(...arguments),this.id=qi++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=li(this);return e&&e.getValue()}to(...e){return pr.to(this,e)}interpolate(...e){return Jn(`${Zn}The "interpolate" function is deprecated in v9 (use "to" instead)`),pr.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Bn(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Qr.sort(this),Bn(this,{type:"priority",parent:this,priority:e})}},Zi=Symbol.for("SpringPhase"),Qi=e=>(1&e[Zi])>0,Ji=e=>(2&e[Zi])>0,eo=e=>(4&e[Zi])>0,to=(e,t)=>t?e[Zi]|=3:e[Zi]&=-3,ro=(e,t)=>t?e[Zi]|=4:e[Zi]&=-5,no=class extends Gi{constructor(e,t){if(super(),this.animation=new zi,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ar.und(e)||!Ar.und(t)){const r=Ar.obj(e)?{...e}:{...t,from:e};Ar.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Ji(this)||this._state.asyncTo)||eo(this)}get goal(){return In(this.animation.to)}get velocity(){const e=li(this);return e instanceof hi?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Qi(this)}get isAnimating(){return Ji(this)}get isPaused(){return eo(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=di(n.to);!a&&Mn(n.to)&&(i=zr(In(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==gi?1:a?a[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Ar.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Ar.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Ar.und(n),g=r==c?s.v0>0:r<c;let p,f=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(f=u==c||u>c==g,f&&(a=-a*n,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=li(this),l=s.getValue();if(t){const e=In(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return mr.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ji(this)){const{to:e,config:t}=this.animation;mr.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ar.und(e)?(r=this.queue||[],this.queue=[]):r=[Ar.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Li(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Vi(this._state,e&&this._lastCallId),mr.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ar.obj(r)?r[t]:r,(null==r||Ii(r))&&(r=void 0),n=Ar.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Qi(this)||(e.reverse&&([r,n]=[n,r]),n=In(n),Ar.und(n)?li(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Ei(e,((e,t)=>/^on/.test(t)?ki(e,r):e))),uo(this,e,"onProps"),ho(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Pi(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{eo(this)||(ro(this,!0),Hr(o.pauseQueue),ho(this,"onPause",Hi(this,io(this,this.animation.to)),this))},resume:()=>{eo(this)&&(ro(this,!1),Ji(this)&&this._resume(),Hr(o.resumeQueue),ho(this,"onResume",Hi(this,io(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=oo(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Wi(this));const n=!Ar.und(e.to),i=!Ar.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Wi(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||n||t.default&&!Ar.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!Br(u,c);h&&(s.from=u),u=In(u);const g=!Br(d,l);g&&this._focus(d);const p=Ii(t.to),{config:f}=s,{decay:m,velocity:b}=f;(n||i)&&(f.velocity=0),t.config&&!p&&function(e,t,r){r&&(ji(r={...r},t),t={...r,...t}),ji(e,t),Object.assign(e,t);for(const t in Ai)null==e[t]&&(e[t]=Ai[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Ar.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(f,Ci(t.config,o),t.config!==a.config?Ci(a.config,o):void 0);let v=li(this);if(!v||Ar.und(d))return r(Hi(this,!0));const y=Ar.und(t.reset)?i&&!t.default:!Ar.und(u)&&Si(t.reset,o),x=y?u:this.get(),w=Mi(d),$=Ar.num(w)||Ar.arr(w)||ti(w),C=!p&&(!$||Si(a.immediate||t.immediate,o));if(g){const e=vi(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let k=Mn(d),D=!1;if(!k){const e=y||!Qi(this)&&h;(g||e)&&(D=Br(Mi(x),w),k=!D),(Br(s.immediate,C)||C)&&Br(f.decay,m)&&Br(f.velocity,b)||(k=!0)}if(D&&Ji(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||Mn(l))&&(s.values=v.getPayload(),s.toValues=Mn(d)?null:S==gi?[1]:zr(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),k)){const{onRest:e}=s;jr(co,(e=>uo(this,t,e)));const n=Hi(this,io(this,l));Hr(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&mr.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?Ci(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(Yi(t.to,t,this._state,this)):k?this._start():Ji(this)&&!g?this._pendingCalls.add(r):r(Ni(x))}_focus(e){const t=this.animation;e!==t.to&&(An(this)&&this._detach(),t.to=e,An(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Mn(t)&&(zn(t,this),Xi(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Mn(e)&&Pn(e,this)}_set(e,t=!0){const r=In(e);if(!Ar.und(r)){const e=li(this);if(!e||!Br(r,e.getValue())){const n=vi(r);e&&e.constructor==n?e.setValue(r):ci(this,n.create(r)),e&&mr.batchedUpdates((()=>{this._onChange(r,t)}))}}return li(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ho(this,"onStart",Hi(this,io(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ci(this.animation.onChange,e,this)),Ci(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;li(this).reset(In(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ji(this)||(to(this,!0),eo(this)||this._resume())}_resume(){pr.skipAnimation?this.finish():Qr.start(this)}_stop(e,t){if(Ji(this)){to(this,!1);const r=this.animation;jr(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Bn(this,{type:"idle",parent:this});const n=t?Wi(this.get()):Hi(this.get(),io(this,e??r.to));Hr(this._pendingCalls,n),r.changed&&(r.changed=!1,ho(this,"onRest",n,this))}}};function io(e,t){const r=Mi(t);return Br(Mi(e.get()),r)}function oo(e,t=e.loop,r=e.to){const n=Ci(t);if(n){const i=!0!==n&&_i(n),o=(i||e).reverse,a=!i||i.reset;return ao({...e,loop:t,default:!1,pause:void 0,to:!o||Ii(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function ao(e){const{to:t,from:r}=e=_i(e),n=new Set;return Ar.obj(t)&&lo(t,n),Ar.obj(r)&&lo(r,n),e.keys=n.size?Array.from(n):null,e}function so(e){const t=ao(e);return Ar.und(t.default)&&(t.default=Ei(t)),t}function lo(e,t){Rr(e,((e,r)=>null!=e&&t.add(r)))}var co=["onStart","onRest","onChange","onPause","onResume"];function uo(e,t,r){e.animation[r]=t[r]!==Di(t,r)?ki(t[r],e.key):void 0}function ho(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var go=["onStart","onChange","onRest"],po=1,fo=class{constructor(e,t){this.id=po++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ar.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(ao(e)),this}start(e){let{queue:t}=this;return e?t=zr(e).map(ao):this.queue=[],this._flush?this._flush(this,t):($o(this,t),mo(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;jr(zr(t),(t=>r[t].stop(!!e)))}else Vi(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ar.und(e))this.start({pause:!0});else{const t=this.springs;jr(zr(e),(e=>t[e].pause()))}return this}resume(e){if(Ar.und(e))this.start({pause:!1});else{const t=this.springs;jr(zr(e),(e=>t[e].resume()))}return this}each(e){Rr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Pr(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Pr(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Pr(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}mr.onFrame(this._onFrame)}};function mo(e,t){return Promise.all(t.map((t=>bo(e,t)))).then((t=>Li(e,t)))}async function bo(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Ar.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=Ar.arr(i)||Ar.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):jr(go,(r=>{const n=t[r];if(Ar.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Hr(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===Di(t,"cancel");(d||g&&u.asyncId)&&h.push(Pi(++e._lastAsyncId,{props:t,state:u,actions:{pause:Ir,resume:Ir,start(t,r){g?(Vi(u,e._lastAsyncId),r(Wi(e))):(t.onRest=s,r(Yi(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Li(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=oo(t,a,i);if(r)return $o(e,[r]),bo(e,r,!0)}return l&&mr.batchedUpdates((()=>l(p,e,e.item))),p}function vo(e,t){const r={...e.springs};return t&&jr(zr(t),(e=>{Ar.und(e.keys)&&(e=ao(e)),Ar.obj(e.to)||(e={...e,to:void 0}),wo(r,e,(e=>xo(e)))})),yo(e,r),r}function yo(e,t){Rr(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,zn(t,e))}))}function xo(e,t){const r=new no;return r.key=e,t&&zn(r,t),r}function wo(e,t,r){t.keys&&jr(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function $o(e,t){jr(t,(t=>{wo(e.springs,t,(t=>xo(t,e)))}))}var Co,So,ko=({children:e,...t})=>{const r=f(Do),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=o(),i=n.current;let s=i;if(s){const r=Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs));r||(s={inputs:t,result:e()})}else s=r;return u((()=>{n.current=s,i==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=Do;return n.createElement(l,{value:t},e)},Do=(Co=ko,So={},Object.assign(Co,n.createContext(So)),Co.Provider._context=Co,Co.Consumer._context=Co,Co);ko.Provider=Do.Provider,ko.Consumer=Do.Consumer;var To=()=>{const e=[],t=function(t){ei(`${Zn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return jr(e,((e,i)=>{if(Ar.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return jr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return jr(e,(e=>e.resume(...arguments))),this},t.set=function(t){jr(e,((e,r)=>{const n=Ar.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return jr(e,((e,n)=>{if(Ar.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return jr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return jr(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ar.fun(e)?e(r,t):e};return t._getProps=r,t};function Eo(e,t){const r=Ar.fun(e),[[n],i]=function(e,t,r){const n=Ar.fun(t)&&t;n&&!r&&(r=[]);const i=m((()=>n||3==arguments.length?To():void 0),[]),a=o(0),s=ni(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const r=vo(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?mo(e,t):new Promise((n=>{yo(e,r),l.queue.push((()=>{n(mo(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),d=[],u=ai(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new fo(null,l.flush)),r=n?n(i,e):t[i];r&&(d[i]=so(r))}}m((()=>{jr(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),m((()=>{h(0,Math.min(u,e))}),r);const g=c.current.map(((e,t)=>vo(e,d[t]))),p=f(ko),b=ai(p),v=p!==b&&function(e){for(const t in e)return!0;return!1}(p);ri((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],jr(e,(e=>e()))),jr(c.current,((e,t)=>{i?.add(e),v&&e.start({default:p});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ii((()=>()=>{jr(l.ctrls,(e=>e.stop(!0)))}));const y=g.map((e=>({...e})));return i?[y,i]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Oo=class extends Gi{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=$n(...t);const r=this._get(),n=vi(r);ci(this,n.create(r))}advance(e){const t=this._get();Br(t,this.get())||(li(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&_o(this._active)&&Mo(this)}_get(){const e=Ar.arr(this.source)?this.source.map(In):zr(In(this.source));return this.calc(...e)}_start(){this.idle&&!_o(this._active)&&(this.idle=!1,jr(di(this),(e=>{e.done=!1})),pr.skipAnimation?(mr.batchedUpdates((()=>this.advance())),Mo(this)):Qr.start(this))}_attach(){let e=1;jr(zr(this.source),(t=>{Mn(t)&&zn(t,this),Xi(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){jr(zr(this.source),(e=>{Mn(e)&&Pn(e,this)})),this._active.clear(),Mo(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=zr(this.source).reduce(((e,t)=>Math.max(e,(Xi(t)?t.priority:0)+1)),0))}};function Fo(e){return!1!==e.idle}function _o(e){return!e.size||Array.from(e).every(Fo)}function Mo(e){e.idle||(e.idle=!0,jr(di(e),(e=>{e.done=!0})),Bn(e,{type:"idle",parent:e}))}pr.assign({createStringInterpolator:Gn,to:(e,t)=>new Oo(e,t)});var Io=/^--/;function Ao(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Io.test(e)||jo.hasOwnProperty(e)&&jo[e]?(""+t).trim():t+"px"}var Bo={};var jo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ro=["Webkit","Ms","Moz","O"];jo=Object.keys(jo).reduce(((e,t)=>(Ro.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),jo);var zo=/^(matrix|translate|scale|rotate|skew)/,Po=/^(translate)/,Lo=/^(rotate|skew)/,No=(e,t)=>Ar.num(e)&&0!==e?e+t:e,Ho=(e,t)=>Ar.arr(e)?e.every((e=>Ho(e,t))):Ar.num(e)?e===t:parseFloat(e)===t,Wo=class extends fi{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>No(e,"px"))).join(",")})`,Ho(e,0)]))),Rr(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(zo.test(t)){if(delete n[t],Ar.und(e))return;const r=Po.test(t)?"px":Lo.test(t)?"deg":"";i.push(zr(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${No(i,r)})`,Ho(i,0)]:e=>[`${t}(${e.map((e=>No(e,r))).join(",")})`,Ho(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Yo(i,o)),super(n)}},Yo=class extends jn{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return jr(this.inputs,((r,n)=>{const i=In(r[0]),[o,a]=this.transforms[n](Ar.arr(i)?i:r.map(In));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&jr(this.inputs,(e=>jr(e,(e=>Mn(e)&&zn(e,this)))))}observerRemoved(e){0==e&&jr(this.inputs,(e=>jr(e,(e=>Mn(e)&&Pn(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Bn(this,e)}};pr.assign({batchedUpdates:E,createStringInterpolator:Gn,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Vo=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new fi(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=$i(e)||"Anonymous";return(e=Ar.str(e)?o[e]||(o[e]=yi(e,i)):e[wi]||(e[wi]=yi(e,i))).displayName=`Animated(${t})`,e};return Rr(e,((t,r)=>{Ar.arr(e)&&(r=$i(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Bo[t]||(Bo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Ao(t,n[t]);Io.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Wo(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Uo=Vo.animated,Ko="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Xo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function qo(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var Go=Array.isArray,Zo="object"==typeof Ko&&Ko&&Ko.Object===Object&&Ko,Qo=Zo,Jo="object"==typeof self&&self&&self.Object===Object&&self,ea=Qo||Jo||Function("return this")(),ta=ea.Symbol,ra=ta,na=Object.prototype,ia=na.hasOwnProperty,oa=na.toString,aa=ra?ra.toStringTag:void 0;var sa=function(e){var t=ia.call(e,aa),r=e[aa];try{e[aa]=void 0;var n=!0}catch(e){}var i=oa.call(e);return n&&(t?e[aa]=r:delete e[aa]),i},la=Object.prototype.toString;var ca=sa,da=function(e){return la.call(e)},ua=ta?ta.toStringTag:void 0;var ha=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ua&&ua in Object(e)?ca(e):da(e)};var ga=function(e){return null!=e&&"object"==typeof e},pa=ha,fa=ga;var ma=function(e){return"symbol"==typeof e||fa(e)&&"[object Symbol]"==pa(e)},ba=Go,va=ma,ya=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xa=/^\w*$/;var wa=function(e,t){if(ba(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!va(e))||(xa.test(e)||!ya.test(e)||null!=t&&e in Object(t))};var $a=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ca=ha,Sa=$a;var ka,Da=function(e){if(!Sa(e))return!1;var t=Ca(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ta=ea["__core-js_shared__"],Ea=(ka=/[^.]+$/.exec(Ta&&Ta.keys&&Ta.keys.IE_PROTO||""))?"Symbol(src)_1."+ka:"";var Oa=function(e){return!!Ea&&Ea in e},Fa=Function.prototype.toString;var _a=function(e){if(null!=e){try{return Fa.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ma=Da,Ia=Oa,Aa=$a,Ba=_a,ja=/^\[object .+?Constructor\]$/,Ra=Function.prototype,za=Object.prototype,Pa=Ra.toString,La=za.hasOwnProperty,Na=RegExp("^"+Pa.call(La).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ha=function(e,t){return null==e?void 0:e[t]},Wa=function(e){return!(!Aa(e)||Ia(e))&&(Ma(e)?Na:ja).test(Ba(e))},Ya=Ha;var Va=function(e,t){var r=Ya(e,t);return Wa(r)?r:void 0},Ua=Va(Object,"create"),Ka=Ua;var Xa=function(){this.__data__=Ka?Ka(null):{},this.size=0};var qa=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ga=Ua,Za=Object.prototype.hasOwnProperty;var Qa=function(e){var t=this.__data__;if(Ga){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Za.call(t,e)?t[e]:void 0},Ja=Ua,es=Object.prototype.hasOwnProperty;var ts=function(e){var t=this.__data__;return Ja?void 0!==t[e]:es.call(t,e)},rs=Ua;var ns=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=rs&&void 0===t?"__lodash_hash_undefined__":t,this},is=Xa,os=qa,as=Qa,ss=ts,ls=ns;function cs(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}cs.prototype.clear=is,cs.prototype.delete=os,cs.prototype.get=as,cs.prototype.has=ss,cs.prototype.set=ls;var ds=cs;var us=function(){this.__data__=[],this.size=0};var hs=function(e,t){return e===t||e!=e&&t!=t},gs=hs;var ps=function(e,t){for(var r=e.length;r--;)if(gs(e[r][0],t))return r;return-1},fs=ps,ms=Array.prototype.splice;var bs=function(e){var t=this.__data__,r=fs(t,e);return!(r<0)&&(r==t.length-1?t.pop():ms.call(t,r,1),--this.size,!0)},vs=ps;var ys=function(e){var t=this.__data__,r=vs(t,e);return r<0?void 0:t[r][1]},xs=ps;var ws=function(e){return xs(this.__data__,e)>-1},$s=ps;var Cs=function(e,t){var r=this.__data__,n=$s(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ss=us,ks=bs,Ds=ys,Ts=ws,Es=Cs;function Os(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Os.prototype.clear=Ss,Os.prototype.delete=ks,Os.prototype.get=Ds,Os.prototype.has=Ts,Os.prototype.set=Es;var Fs=Os,_s=Va(ea,"Map"),Ms=ds,Is=Fs,As=_s;var Bs=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var js=function(e,t){var r=e.__data__;return Bs(t)?r["string"==typeof t?"string":"hash"]:r.map},Rs=js;var zs=function(e){var t=Rs(this,e).delete(e);return this.size-=t?1:0,t},Ps=js;var Ls=function(e){return Ps(this,e).get(e)},Ns=js;var Hs=function(e){return Ns(this,e).has(e)},Ws=js;var Ys=function(e,t){var r=Ws(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Vs=function(){this.size=0,this.__data__={hash:new Ms,map:new(As||Is),string:new Ms}},Us=zs,Ks=Ls,Xs=Hs,qs=Ys;function Gs(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Gs.prototype.clear=Vs,Gs.prototype.delete=Us,Gs.prototype.get=Ks,Gs.prototype.has=Xs,Gs.prototype.set=qs;var Zs=Gs,Qs=Zs;function Js(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Js.Cache||Qs),r}Js.Cache=Qs;var el=Js;var tl=function(e){var t=el(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},rl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nl=/\\(\\)?/g,il=tl((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rl,(function(e,r,n,i){t.push(n?i.replace(nl,"$1"):r||e)})),t}));var ol=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},al=Go,sl=ma,ll=ta?ta.prototype:void 0,cl=ll?ll.toString:void 0;var dl=function e(t){if("string"==typeof t)return t;if(al(t))return ol(t,e)+"";if(sl(t))return cl?cl.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ul=dl;var hl=function(e){return null==e?"":ul(e)},gl=Go,pl=wa,fl=il,ml=hl;var bl=function(e,t){return gl(e)?e:pl(e,t)?[e]:fl(ml(e))},vl=ma;var yl=function(e){if("string"==typeof e||vl(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},xl=bl,wl=yl;var $l=function(e,t){for(var r=0,n=(t=xl(t,e)).length;null!=e&&r<n;)e=e[wl(t[r++])];return r&&r==n?e:void 0},Cl=$l;var Sl=function(e,t,r){var n=null==e?void 0:Cl(e,t);return void 0===n?r:n},kl=Xo(Sl);const Dl=(e,t,r)=>kl(r,t)||kl(e,t),Tl=(e,t)=>{const r=t||e.defaultValue;return kl(e.collections,r)},El={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Ol=e=>t=>{var r;const n=t.theme,i=Tl(El,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Dl(i,e,n.overrides.border)}px`:`${i[e]}px`},Fl={"width-005":Ol("width-005"),"width-010":Ol("width-010"),"width-020":Ol("width-020"),"width-040":Ol("width-040"),solid:(_l="solid",e=>{var t;const r=e.theme,n=Tl(El,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Dl(n,_l,r.overrides.border):n[_l];return"function"==typeof i?i(e):i})};var _l;const Ml={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Il={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Al={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Bl={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},jl={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Rl={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},zl={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Pl={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ll={collections:{lifesg:Al,bookingsg:Ml,rbs:zl,mylegacy:Bl,ccube:Il,oneservice:jl,pa:Rl,a11yplayground:Pl},defaultValue:"lifesg"},Nl={collections:{lifesg:Al,bookingsg:Ml,rbs:zl,mylegacy:Bl,ccube:Il,oneservice:jl,pa:Rl,a11yplayground:Pl},defaultValue:"lifesg"},Hl=e=>t=>{var r;const n=t.theme,i="dark"===(null==n?void 0:n.colourMode),o=Tl(i?Nl:Ll,null==n?void 0:n.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?Dl(o,e,s):o[e]},Wl={"brand-10":Hl("brand-10"),"brand-20":Hl("brand-20"),"brand-30":Hl("brand-30"),"brand-40":Hl("brand-40"),"brand-50":Hl("brand-50"),"brand-60":Hl("brand-60"),"brand-70":Hl("brand-70"),"brand-80":Hl("brand-80"),"brand-90":Hl("brand-90"),"brand-95":Hl("brand-95"),"brand-100":Hl("brand-100"),"primary-10":Hl("primary-10"),"primary-20":Hl("primary-20"),"primary-30":Hl("primary-30"),"primary-40":Hl("primary-40"),"primary-50":Hl("primary-50"),"primary-60":Hl("primary-60"),"primary-70":Hl("primary-70"),"primary-80":Hl("primary-80"),"primary-90":Hl("primary-90"),"primary-95":Hl("primary-95"),"primary-100":Hl("primary-100"),"secondary-10":Hl("secondary-10"),"secondary-20":Hl("secondary-20"),"secondary-30":Hl("secondary-30"),"secondary-40":Hl("secondary-40"),"secondary-50":Hl("secondary-50"),"secondary-60":Hl("secondary-60"),"secondary-70":Hl("secondary-70"),"secondary-80":Hl("secondary-80"),"secondary-90":Hl("secondary-90"),"secondary-95":Hl("secondary-95"),"secondary-100":Hl("secondary-100"),"neutral-10":Hl("neutral-10"),"neutral-20":Hl("neutral-20"),"neutral-30":Hl("neutral-30"),"neutral-40":Hl("neutral-40"),"neutral-50":Hl("neutral-50"),"neutral-60":Hl("neutral-60"),"neutral-70":Hl("neutral-70"),"neutral-80":Hl("neutral-80"),"neutral-90":Hl("neutral-90"),"neutral-95":Hl("neutral-95"),"neutral-100":Hl("neutral-100"),"success-10":Hl("success-10"),"success-20":Hl("success-20"),"success-30":Hl("success-30"),"success-40":Hl("success-40"),"success-50":Hl("success-50"),"success-60":Hl("success-60"),"success-70":Hl("success-70"),"success-80":Hl("success-80"),"success-90":Hl("success-90"),"success-95":Hl("success-95"),"success-100":Hl("success-100"),"warning-10":Hl("warning-10"),"warning-20":Hl("warning-20"),"warning-30":Hl("warning-30"),"warning-40":Hl("warning-40"),"warning-50":Hl("warning-50"),"warning-60":Hl("warning-60"),"warning-70":Hl("warning-70"),"warning-80":Hl("warning-80"),"warning-90":Hl("warning-90"),"warning-95":Hl("warning-95"),"warning-100":Hl("warning-100"),"error-10":Hl("error-10"),"error-20":Hl("error-20"),"error-30":Hl("error-30"),"error-40":Hl("error-40"),"error-50":Hl("error-50"),"error-60":Hl("error-60"),"error-70":Hl("error-70"),"error-80":Hl("error-80"),"error-90":Hl("error-90"),"error-95":Hl("error-95"),"error-100":Hl("error-100"),"info-10":Hl("info-10"),"info-20":Hl("info-20"),"info-30":Hl("info-30"),"info-40":Hl("info-40"),"info-50":Hl("info-50"),"info-60":Hl("info-60"),"info-70":Hl("info-70"),"info-80":Hl("info-80"),"info-90":Hl("info-90"),"info-95":Hl("info-95"),"info-100":Hl("info-100"),white:Hl("white"),black:Hl("black"),"primary-inverse":Hl("primary-inverse")},Yl={text:Hl("neutral-20"),"text-subtle":Hl("neutral-30"),"text-subtler":Hl("neutral-50"),"text-subtlest":Hl("neutral-60"),"text-primary":Hl("primary-50"),"text-hover":Hl("primary-40"),"text-selected":Hl("primary-50"),"text-selected-hover":Hl("primary-40"),"text-disabled":Hl("neutral-50"),"text-disabled-subtle":Hl("neutral-60"),"text-disabled-subtlest":Hl("neutral-80"),"text-selected-disabled":Hl("neutral-20"),"text-success":Hl("success-40"),"text-warning":Hl("warning-40"),"text-error":Hl("error-40"),"text-info":Hl("info-40"),"text-inverse":Hl("white"),icon:Hl("neutral-50"),"icon-subtle":Hl("neutral-60"),"icon-strongest":Hl("neutral-20"),"icon-primary":Hl("primary-50"),"icon-primary-subtle":Hl("primary-60"),"icon-primary-subtlest":Hl("primary-70"),"icon-hover":Hl("primary-40"),"icon-selected":Hl("primary-50"),"icon-selected-hover":Hl("primary-40"),"icon-disabled":Hl("neutral-50"),"icon-disabled-subtle":Hl("neutral-60"),"icon-selected-disabled":Hl("neutral-60"),"icon-success":Hl("success-50"),"icon-warning":Hl("warning-60"),"icon-error":Hl("error-50"),"icon-error-strong":Hl("error-40"),"icon-info":Hl("info-50"),"icon-inverse":Hl("white"),"icon-primary-inverse":Hl("primary-inverse"),border:Hl("neutral-90"),"border-strong":Hl("neutral-70"),"border-stronger":Hl("neutral-50"),"border-primary":Hl("primary-50"),"border-primary-subtle":Hl("primary-60"),"border-hover":Hl("primary-90"),"border-hover-strong":Hl("primary-60"),"border-selected":Hl("primary-50"),"border-selected-subtle":Hl("primary-70"),"border-selected-subtlest":Hl("primary-90"),"border-selected-hover":Hl("primary-40"),"border-focus":Hl("primary-60"),"border-focus-strong":Hl("primary-50"),"border-disabled":Hl("neutral-90"),"border-selected-disabled":Hl("neutral-70"),"border-success":Hl("success-60"),"border-warning":Hl("warning-60"),"border-error":Hl("error-60"),"border-error-focus":Hl("error-60"),"border-error-focus-strong":Hl("error-40"),"border-error-strong":Hl("error-40"),"border-info":Hl("info-60"),bg:Hl("white"),"bg-strong":Hl("neutral-100"),"bg-stronger":Hl("neutral-95"),"bg-strongest":Hl("neutral-90"),"bg-hover":Hl("primary-95"),"bg-hover-strong":Hl("primary-90"),"bg-hover-subtle":Hl("primary-100"),"bg-hover-neutral":Hl("neutral-100"),"bg-hover-neutral-strong":Hl("neutral-90"),"bg-selected":Hl("primary-95"),"bg-selected-hover":Hl("primary-90"),"bg-selected-strong":Hl("primary-90"),"bg-selected-stronger":Hl("primary-70"),"bg-selected-strongest":Hl("primary-50"),"bg-selected-strongest-hover":Hl("primary-40"),"bg-disabled":Hl("neutral-95"),"bg-selected-disabled":Hl("neutral-95"),"bg-selected-stronger-disabled":Hl("neutral-70"),"bg-success":Hl("success-100"),"bg-success-hover":Hl("success-95"),"bg-success-strong":Hl("success-50"),"bg-success-strong-hover":Hl("success-40"),"bg-warning":Hl("warning-100"),"bg-warning-hover":Hl("warning-95"),"bg-warning-strong":Hl("warning-50"),"bg-warning-strong-hover":Hl("warning-40"),"bg-info":Hl("info-100"),"bg-info-hover":Hl("info-95"),"bg-info-strong":Hl("info-50"),"bg-info-strong-hover":Hl("info-40"),"bg-error":Hl("error-100"),"bg-error-hover":Hl("error-95"),"bg-error-strong":Hl("error-50"),"bg-error-strong-hover":Hl("error-40"),"bg-inverse":Hl("neutral-20"),"bg-inverse-subtle":Hl("neutral-30"),"bg-inverse-subtler":Hl("neutral-50"),"bg-inverse-subtlest":Hl("neutral-60"),"bg-inverse-hover":Hl("neutral-40"),"bg-primary":Hl("primary-50"),"bg-primary-subtle":Hl("primary-60"),"bg-primary-subtler":Hl("primary-95"),"bg-primary-subtlest":Hl("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Hl("primary-40"),"bg-primary-subtlest-hover":Hl("primary-90"),"bg-primary-subtlest-selected":Hl("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Hl("primary-50"),"hyperlink-hover":Hl("primary-40"),"hyperlink-visited":Hl("primary-40"),"hyperlink-inverse":Hl("primary-inverse"),"focus-ring":Hl("black"),"focus-ring-inverse":Hl("white")},Vl={text:Hl("neutral-100"),"text-subtle":Hl("neutral-80"),"text-subtler":Hl("neutral-60"),"text-subtlest":Hl("neutral-50"),"text-primary":Hl("primary-60"),"text-hover":Hl("primary-70"),"text-selected":Hl("primary-60"),"text-selected-hover":Hl("primary-70"),"text-disabled":Hl("neutral-60"),"text-disabled-subtle":Hl("neutral-50"),"text-disabled-subtlest":Hl("neutral-30"),"text-selected-disabled":Hl("neutral-90"),"text-success":Hl("success-70"),"text-warning":Hl("warning-70"),"text-error":Hl("error-70"),"text-info":Hl("info-70"),"text-inverse":Hl("black"),icon:Hl("neutral-60"),"icon-subtle":Hl("neutral-50"),"icon-strongest":Hl("neutral-90"),"icon-primary":Hl("primary-60"),"icon-primary-subtle":Hl("primary-50"),"icon-primary-subtlest":Hl("primary-40"),"icon-hover":Hl("primary-70"),"icon-selected":Hl("primary-60"),"icon-selected-hover":Hl("primary-70"),"icon-disabled":Hl("neutral-60"),"icon-disabled-subtle":Hl("neutral-50"),"icon-selected-disabled":Hl("neutral-50"),"icon-success":Hl("success-60"),"icon-warning":Hl("warning-50"),"icon-error":Hl("error-60"),"icon-error-strong":Hl("error-70"),"icon-info":Hl("info-60"),"icon-inverse":Hl("black"),"icon-primary-inverse":Hl("primary-inverse"),border:Hl("neutral-20"),"border-strong":Hl("neutral-40"),"border-stronger":Hl("neutral-60"),"border-primary":Hl("primary-60"),"border-primary-subtle":Hl("primary-50"),"border-hover":Hl("primary-20"),"border-hover-strong":Hl("primary-50"),"border-selected":Hl("primary-60"),"border-selected-subtle":Hl("primary-40"),"border-selected-subtlest":Hl("primary-20"),"border-selected-hover":Hl("primary-70"),"border-focus":Hl("primary-50"),"border-focus-strong":Hl("primary-60"),"border-disabled":Hl("neutral-20"),"border-selected-disabled":Hl("neutral-40"),"border-success":Hl("success-50"),"border-warning":Hl("warning-50"),"border-error":Hl("error-50"),"border-error-focus":Hl("error-50"),"border-error-focus-strong":Hl("error-70"),"border-error-strong":Hl("error-70"),"border-info":Hl("info-50"),bg:Hl("black"),"bg-strong":Hl("neutral-10"),"bg-stronger":Hl("neutral-20"),"bg-strongest":Hl("neutral-20"),"bg-hover":Hl("primary-20"),"bg-hover-strong":Hl("primary-20"),"bg-hover-subtle":Hl("primary-10"),"bg-hover-neutral":Hl("neutral-10"),"bg-hover-neutral-strong":Hl("neutral-20"),"bg-selected":Hl("primary-20"),"bg-selected-hover":Hl("primary-20"),"bg-selected-strong":Hl("primary-20"),"bg-selected-stronger":Hl("primary-40"),"bg-selected-strongest":Hl("primary-60"),"bg-selected-strongest-hover":Hl("primary-70"),"bg-disabled":Hl("neutral-20"),"bg-selected-disabled":Hl("neutral-20"),"bg-selected-stronger-disabled":Hl("neutral-40"),"bg-success":Hl("success-10"),"bg-success-hover":Hl("success-20"),"bg-success-strong":Hl("success-60"),"bg-success-strong-hover":Hl("success-70"),"bg-warning":Hl("warning-10"),"bg-warning-hover":Hl("warning-20"),"bg-warning-strong":Hl("warning-60"),"bg-warning-strong-hover":Hl("warning-70"),"bg-info":Hl("info-10"),"bg-info-hover":Hl("info-20"),"bg-info-strong":Hl("info-60"),"bg-info-strong-hover":Hl("info-70"),"bg-error":Hl("error-10"),"bg-error-hover":Hl("error-20"),"bg-error-strong":Hl("error-60"),"bg-error-strong-hover":Hl("error-70"),"bg-inverse":Hl("neutral-90"),"bg-inverse-subtle":Hl("neutral-80"),"bg-inverse-subtler":Hl("neutral-60"),"bg-inverse-subtlest":Hl("neutral-50"),"bg-inverse-hover":Hl("neutral-70"),"bg-primary":Hl("primary-60"),"bg-primary-subtle":Hl("primary-50"),"bg-primary-subtler":Hl("primary-20"),"bg-primary-subtlest":Hl("primary-10"),"bg-available":"#185339","bg-primary-hover":Hl("primary-70"),"bg-primary-subtlest-hover":Hl("primary-20"),"bg-primary-subtlest-selected":Hl("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Hl("primary-60"),"hyperlink-hover":Hl("primary-70"),"hyperlink-visited":Hl("primary-70"),"hyperlink-inverse":Hl("primary-inverse"),"focus-ring":Hl("primary-60"),"focus-ring-inverse":Hl("black")},Ul={text:Hl("neutral-30"),"text-subtle":Hl("neutral-40"),"text-subtler":Hl("neutral-50"),"text-subtlest":Hl("neutral-70"),"text-primary":Hl("neutral-10"),"text-hover":Hl("neutral-70"),"text-selected":Hl("neutral-20"),"text-selected-hover":Hl("neutral-10"),"text-disabled":Hl("neutral-50"),"text-disabled-subtle":Hl("neutral-60"),"text-disabled-subtlest":Hl("neutral-80"),"text-selected-disabled":Hl("neutral-40"),"text-success":Hl("success-40"),"text-warning":Hl("warning-40"),"text-error":Hl("brand-30"),"text-info":Hl("neutral-40"),"text-inverse":Hl("neutral-100"),icon:Hl("neutral-40"),"icon-subtle":Hl("neutral-50"),"icon-strongest":Hl("neutral-10"),"icon-primary":Hl("neutral-10"),"icon-primary-subtle":Hl("neutral-30"),"icon-primary-subtlest":Hl("neutral-60"),"icon-hover":Hl("neutral-70"),"icon-selected":Hl("brand-20"),"icon-selected-hover":Hl("brand-10"),"icon-disabled":Hl("neutral-50"),"icon-disabled-subtle":Hl("neutral-60"),"icon-selected-disabled":Hl("neutral-40"),"icon-success":Hl("success-40"),"icon-warning":Hl("warning-60"),"icon-error":Hl("brand-30"),"icon-error-strong":Hl("brand-10"),"icon-info":Hl("neutral-40"),"icon-inverse":Hl("neutral-100"),"icon-primary-inverse":"#F9B371",border:Hl("neutral-90"),"border-strong":Hl("neutral-30"),"border-stronger":Hl("neutral-20"),"border-primary":Hl("neutral-40"),"border-primary-subtle":Hl("neutral-60"),"border-hover":Hl("neutral-80"),"border-hover-strong":Hl("neutral-10"),"border-selected":Hl("brand-20"),"border-selected-subtle":Hl("neutral-40"),"border-selected-subtlest":Hl("neutral-70"),"border-selected-hover":Hl("neutral-10"),"border-focus":Hl("neutral-20"),"border-focus-strong":Hl("neutral-10"),"border-disabled":Hl("neutral-90"),"border-selected-disabled":Hl("neutral-80"),"border-success":Hl("success-40"),"border-warning":Hl("warning-60"),"border-error":Hl("brand-30"),"border-error-focus":Hl("brand-20"),"border-error-focus-strong":Hl("brand-10"),"border-error-strong":Hl("brand-20"),"border-info":Hl("neutral-40"),bg:Hl("neutral-100"),"bg-strong":Hl("neutral-95"),"bg-stronger":Hl("neutral-90"),"bg-strongest":Hl("neutral-80"),"bg-hover":Hl("brand-90"),"bg-hover-strong":Hl("brand-80"),"bg-hover-subtle":Hl("neutral-90"),"bg-hover-neutral":Hl("neutral-90"),"bg-hover-neutral-strong":Hl("neutral-90"),"bg-selected":Hl("brand-100"),"bg-selected-hover":Hl("brand-30"),"bg-selected-strong":Hl("brand-50"),"bg-selected-stronger":Hl("brand-40"),"bg-selected-strongest":Hl("brand-20"),"bg-selected-strongest-hover":Hl("brand-10"),"bg-disabled":Hl("neutral-90"),"bg-selected-disabled":Hl("neutral-90"),"bg-selected-stronger-disabled":Hl("neutral-80"),"bg-success":Hl("success-100"),"bg-success-hover":Hl("success-95"),"bg-success-strong":Hl("success-50"),"bg-success-strong-hover":Hl("success-40"),"bg-warning":Hl("warning-100"),"bg-warning-hover":Hl("warning-95"),"bg-warning-strong":Hl("warning-50"),"bg-warning-strong-hover":Hl("warning-40"),"bg-info":Hl("neutral-95"),"bg-info-hover":Hl("info-95"),"bg-info-strong":Hl("info-50"),"bg-info-strong-hover":Hl("info-40"),"bg-error":Hl("brand-100"),"bg-error-hover":Hl("error-95"),"bg-error-strong":Hl("error-50"),"bg-error-strong-hover":Hl("error-40"),"bg-inverse":Hl("neutral-40"),"bg-inverse-subtle":Hl("neutral-60"),"bg-inverse-subtler":Hl("neutral-70"),"bg-inverse-subtlest":Hl("neutral-80"),"bg-inverse-hover":Hl("neutral-30"),"bg-primary":Hl("brand-20"),"bg-primary-subtle":Hl("brand-60"),"bg-primary-subtler":Hl("brand-80"),"bg-primary-subtlest":Hl("brand-100"),"bg-available":Hl("success-60"),"bg-primary-hover":Hl("brand-10"),"bg-primary-subtlest-hover":Hl("brand-80"),"bg-primary-subtlest-selected":Hl("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Hl("neutral-10"),"hyperlink-hover":Hl("neutral-40"),"hyperlink-visited":Hl("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Hl("black"),"focus-ring-inverse":Hl("white")},Kl={text:Hl("neutral-20"),"text-subtle":Hl("neutral-30"),"text-subtler":Hl("neutral-50"),"text-subtlest":Hl("neutral-60"),"text-primary":Hl("primary-50"),"text-hover":Hl("primary-40"),"text-selected":Hl("primary-50"),"text-selected-hover":Hl("primary-40"),"text-disabled":Hl("neutral-50"),"text-disabled-subtle":Hl("neutral-60"),"text-disabled-subtlest":Hl("neutral-80"),"text-selected-disabled":Hl("neutral-20"),"text-success":Hl("success-40"),"text-warning":Hl("warning-40"),"text-error":Hl("error-40"),"text-info":Hl("info-40"),"text-inverse":Hl("white"),icon:Hl("neutral-50"),"icon-subtle":Hl("neutral-60"),"icon-strongest":Hl("neutral-20"),"icon-primary":Hl("primary-50"),"icon-primary-subtle":Hl("primary-60"),"icon-primary-subtlest":Hl("primary-70"),"icon-hover":Hl("primary-40"),"icon-selected":Hl("primary-50"),"icon-selected-hover":Hl("primary-40"),"icon-disabled":Hl("neutral-50"),"icon-disabled-subtle":Hl("neutral-60"),"icon-selected-disabled":Hl("neutral-60"),"icon-success":Hl("success-50"),"icon-warning":Hl("warning-60"),"icon-error":Hl("error-50"),"icon-error-strong":Hl("error-40"),"icon-info":Hl("info-50"),"icon-inverse":Hl("white"),"icon-primary-inverse":Hl("primary-inverse"),border:Hl("neutral-90"),"border-strong":Hl("neutral-70"),"border-stronger":Hl("neutral-50"),"border-primary":Hl("primary-50"),"border-primary-subtle":Hl("primary-60"),"border-hover":Hl("primary-90"),"border-hover-strong":Hl("primary-60"),"border-selected":Hl("primary-50"),"border-selected-subtle":Hl("primary-70"),"border-selected-subtlest":Hl("primary-90"),"border-selected-hover":Hl("primary-40"),"border-focus":Hl("primary-60"),"border-focus-strong":Hl("primary-50"),"border-disabled":Hl("neutral-90"),"border-selected-disabled":Hl("neutral-70"),"border-success":Hl("success-60"),"border-warning":Hl("warning-60"),"border-error":Hl("error-60"),"border-error-focus":Hl("error-60"),"border-error-focus-strong":Hl("error-40"),"border-error-strong":Hl("error-40"),"border-info":Hl("info-60"),bg:Hl("white"),"bg-strong":Hl("neutral-100"),"bg-stronger":Hl("neutral-95"),"bg-strongest":Hl("neutral-90"),"bg-hover":Hl("primary-95"),"bg-hover-strong":Hl("primary-90"),"bg-hover-subtle":Hl("primary-100"),"bg-hover-neutral":Hl("neutral-100"),"bg-hover-neutral-strong":Hl("neutral-90"),"bg-selected":Hl("primary-95"),"bg-selected-hover":Hl("primary-90"),"bg-selected-strong":Hl("primary-90"),"bg-selected-stronger":Hl("primary-70"),"bg-selected-strongest":Hl("primary-50"),"bg-selected-strongest-hover":Hl("primary-40"),"bg-disabled":Hl("neutral-95"),"bg-selected-disabled":Hl("neutral-95"),"bg-selected-stronger-disabled":Hl("neutral-70"),"bg-success":Hl("success-100"),"bg-success-hover":Hl("success-95"),"bg-success-strong":Hl("success-50"),"bg-success-strong-hover":Hl("success-40"),"bg-warning":Hl("warning-100"),"bg-warning-hover":Hl("warning-95"),"bg-warning-strong":Hl("warning-50"),"bg-warning-strong-hover":Hl("warning-40"),"bg-info":Hl("info-100"),"bg-info-hover":Hl("info-95"),"bg-info-strong":Hl("info-50"),"bg-info-strong-hover":Hl("info-40"),"bg-error":Hl("error-100"),"bg-error-hover":Hl("error-95"),"bg-error-strong":Hl("error-50"),"bg-error-strong-hover":Hl("error-40"),"bg-inverse":Hl("neutral-20"),"bg-inverse-subtle":Hl("neutral-30"),"bg-inverse-subtler":Hl("neutral-50"),"bg-inverse-subtlest":Hl("neutral-60"),"bg-inverse-hover":Hl("neutral-40"),"bg-primary":Hl("primary-50"),"bg-primary-subtle":Hl("primary-60"),"bg-primary-subtler":Hl("primary-95"),"bg-primary-subtlest":Hl("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Hl("primary-40"),"bg-primary-subtlest-hover":Hl("primary-90"),"bg-primary-subtlest-selected":Hl("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Hl("primary-50"),"hyperlink-hover":Hl("primary-40"),"hyperlink-visited":Hl("primary-40"),"hyperlink-inverse":Hl("primary-inverse"),"focus-ring":Hl("black"),"focus-ring-inverse":Hl("white")},Xl={text:Hl("neutral-100"),"text-subtle":Hl("neutral-80"),"text-subtler":Hl("neutral-60"),"text-subtlest":Hl("neutral-50"),"text-primary":Hl("primary-60"),"text-hover":Hl("primary-70"),"text-selected":Hl("primary-60"),"text-selected-hover":Hl("primary-70"),"text-disabled":Hl("neutral-60"),"text-disabled-subtle":Hl("neutral-50"),"text-disabled-subtlest":Hl("neutral-30"),"text-selected-disabled":Hl("neutral-90"),"text-success":Hl("success-70"),"text-warning":Hl("warning-70"),"text-error":Hl("error-70"),"text-info":Hl("info-70"),"text-inverse":Hl("black"),icon:Hl("neutral-60"),"icon-subtle":Hl("neutral-50"),"icon-strongest":Hl("neutral-90"),"icon-primary":Hl("primary-60"),"icon-primary-subtle":Hl("primary-50"),"icon-primary-subtlest":Hl("primary-40"),"icon-hover":Hl("primary-70"),"icon-selected":Hl("primary-60"),"icon-selected-hover":Hl("primary-70"),"icon-disabled":Hl("neutral-60"),"icon-disabled-subtle":Hl("neutral-50"),"icon-selected-disabled":Hl("neutral-50"),"icon-success":Hl("success-60"),"icon-warning":Hl("warning-50"),"icon-error":Hl("error-60"),"icon-error-strong":Hl("error-70"),"icon-info":Hl("info-60"),"icon-inverse":Hl("black"),"icon-primary-inverse":Hl("primary-inverse"),border:Hl("neutral-20"),"border-strong":Hl("neutral-40"),"border-stronger":Hl("neutral-60"),"border-primary":Hl("primary-60"),"border-primary-subtle":Hl("primary-50"),"border-hover":Hl("primary-20"),"border-hover-strong":Hl("primary-50"),"border-selected":Hl("primary-60"),"border-selected-subtle":Hl("primary-40"),"border-selected-subtlest":Hl("primary-20"),"border-selected-hover":Hl("primary-70"),"border-focus":Hl("primary-50"),"border-focus-strong":Hl("primary-60"),"border-disabled":Hl("neutral-20"),"border-selected-disabled":Hl("neutral-40"),"border-success":Hl("success-50"),"border-warning":Hl("warning-50"),"border-error":Hl("error-50"),"border-error-focus":Hl("error-50"),"border-error-focus-strong":Hl("error-70"),"border-error-strong":Hl("error-70"),"border-info":Hl("info-50"),bg:Hl("black"),"bg-strong":Hl("neutral-10"),"bg-stronger":Hl("neutral-20"),"bg-strongest":Hl("neutral-20"),"bg-hover":Hl("primary-20"),"bg-hover-strong":Hl("primary-20"),"bg-hover-subtle":Hl("primary-10"),"bg-hover-neutral":Hl("neutral-10"),"bg-hover-neutral-strong":Hl("neutral-20"),"bg-selected":Hl("primary-20"),"bg-selected-hover":Hl("primary-20"),"bg-selected-strong":Hl("primary-20"),"bg-selected-stronger":Hl("primary-40"),"bg-selected-strongest":Hl("primary-60"),"bg-selected-strongest-hover":Hl("primary-70"),"bg-disabled":Hl("neutral-20"),"bg-selected-disabled":Hl("neutral-20"),"bg-selected-stronger-disabled":Hl("neutral-40"),"bg-success":Hl("success-10"),"bg-success-hover":Hl("success-20"),"bg-success-strong":Hl("success-60"),"bg-success-strong-hover":Hl("success-70"),"bg-warning":Hl("warning-10"),"bg-warning-hover":Hl("warning-20"),"bg-warning-strong":Hl("warning-60"),"bg-warning-strong-hover":Hl("warning-70"),"bg-info":Hl("info-10"),"bg-info-hover":Hl("info-20"),"bg-info-strong":Hl("info-60"),"bg-info-strong-hover":Hl("info-70"),"bg-error":Hl("error-10"),"bg-error-hover":Hl("error-20"),"bg-error-strong":Hl("error-60"),"bg-error-strong-hover":Hl("error-70"),"bg-inverse":Hl("neutral-90"),"bg-inverse-subtle":Hl("neutral-80"),"bg-inverse-subtler":Hl("neutral-60"),"bg-inverse-subtlest":Hl("neutral-50"),"bg-inverse-hover":Hl("neutral-70"),"bg-primary":Hl("primary-60"),"bg-primary-subtle":Hl("primary-50"),"bg-primary-subtler":Hl("primary-20"),"bg-primary-subtlest":Hl("primary-10"),"bg-available":"#185339","bg-primary-hover":Hl("primary-70"),"bg-primary-subtlest-hover":Hl("primary-20"),"bg-primary-subtlest-selected":Hl("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Hl("primary-60"),"hyperlink-hover":Hl("primary-70"),"hyperlink-visited":Hl("primary-70"),"hyperlink-inverse":Hl("primary-inverse"),"focus-ring":Hl("primary-60"),"focus-ring-inverse":Hl("black")},ql={collections:{lifesg:Yl,bookingsg:Yl,rbs:Yl,mylegacy:Yl,ccube:Yl,oneservice:Yl,pa:Ul,a11yplayground:Kl},defaultValue:"lifesg"},Gl={collections:{lifesg:Vl,bookingsg:Vl,rbs:Vl,mylegacy:Vl,ccube:Vl,oneservice:Vl,pa:Vl,a11yplayground:Xl},defaultValue:"lifesg"},Zl=e=>t=>{var r;const n=t.theme,i="dark"===(null==n?void 0:n.colourMode),o=Tl(i?Gl:ql,null==n?void 0:n.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?Dl(o,e,s):o[e];return"function"==typeof l?l(t):l},Ql={text:Zl("text"),"text-subtle":Zl("text-subtle"),"text-subtler":Zl("text-subtler"),"text-subtlest":Zl("text-subtlest"),"text-primary":Zl("text-primary"),"text-hover":Zl("text-hover"),"text-selected":Zl("text-selected"),"text-selected-hover":Zl("text-selected-hover"),"text-disabled":Zl("text-disabled"),"text-disabled-subtle":Zl("text-disabled-subtle"),"text-disabled-subtlest":Zl("text-disabled-subtlest"),"text-selected-disabled":Zl("text-selected-disabled"),"text-success":Zl("text-success"),"text-warning":Zl("text-warning"),"text-error":Zl("text-error"),"text-info":Zl("text-info"),"text-inverse":Zl("text-inverse"),icon:Zl("icon"),"icon-subtle":Zl("icon-subtle"),"icon-strongest":Zl("icon-strongest"),"icon-primary":Zl("icon-primary"),"icon-primary-subtle":Zl("icon-primary-subtle"),"icon-primary-subtlest":Zl("icon-primary-subtlest"),"icon-hover":Zl("icon-hover"),"icon-selected":Zl("icon-selected"),"icon-selected-hover":Zl("icon-selected-hover"),"icon-disabled":Zl("icon-disabled"),"icon-disabled-subtle":Zl("icon-disabled-subtle"),"icon-selected-disabled":Zl("icon-selected-disabled"),"icon-success":Zl("icon-success"),"icon-warning":Zl("icon-warning"),"icon-error":Zl("icon-error"),"icon-error-strong":Zl("icon-error-strong"),"icon-info":Zl("icon-info"),"icon-inverse":Zl("icon-inverse"),"icon-primary-inverse":Zl("icon-primary-inverse"),border:Zl("border"),"border-strong":Zl("border-strong"),"border-stronger":Zl("border-stronger"),"border-primary":Zl("border-primary"),"border-primary-subtle":Zl("border-primary-subtle"),"border-hover":Zl("border-hover"),"border-hover-strong":Zl("border-hover-strong"),"border-selected":Zl("border-selected"),"border-selected-subtle":Zl("border-selected-subtle"),"border-selected-subtlest":Zl("border-selected-subtlest"),"border-selected-hover":Zl("border-selected-hover"),"border-focus":Zl("border-focus"),"border-focus-strong":Zl("border-focus-strong"),"border-disabled":Zl("border-disabled"),"border-selected-disabled":Zl("border-selected-disabled"),"border-success":Zl("border-success"),"border-warning":Zl("border-warning"),"border-error":Zl("border-error"),"border-error-focus":Zl("border-error-focus"),"border-error-focus-strong":Zl("border-error-focus-strong"),"border-error-strong":Zl("border-error-strong"),"border-info":Zl("border-info"),bg:Zl("bg"),"bg-strong":Zl("bg-strong"),"bg-stronger":Zl("bg-stronger"),"bg-strongest":Zl("bg-strongest"),"bg-hover":Zl("bg-hover"),"bg-hover-strong":Zl("bg-hover-strong"),"bg-hover-subtle":Zl("bg-hover-subtle"),"bg-hover-neutral":Zl("bg-hover-neutral"),"bg-hover-neutral-strong":Zl("bg-hover-neutral-strong"),"bg-selected":Zl("bg-selected"),"bg-selected-hover":Zl("bg-selected-hover"),"bg-selected-strong":Zl("bg-selected-strong"),"bg-selected-stronger":Zl("bg-selected-stronger"),"bg-selected-strongest":Zl("bg-selected-strongest"),"bg-selected-strongest-hover":Zl("bg-selected-strongest-hover"),"bg-disabled":Zl("bg-disabled"),"bg-selected-disabled":Zl("bg-selected-disabled"),"bg-selected-stronger-disabled":Zl("bg-selected-stronger-disabled"),"bg-success":Zl("bg-success"),"bg-success-hover":Zl("bg-success-hover"),"bg-success-strong":Zl("bg-success-strong"),"bg-success-strong-hover":Zl("bg-success-strong-hover"),"bg-warning":Zl("bg-warning"),"bg-warning-hover":Zl("bg-warning-hover"),"bg-warning-strong":Zl("bg-warning-strong"),"bg-warning-strong-hover":Zl("bg-warning-strong-hover"),"bg-info":Zl("bg-info"),"bg-info-hover":Zl("bg-info-hover"),"bg-info-strong":Zl("bg-info-strong"),"bg-info-strong-hover":Zl("bg-info-strong-hover"),"bg-error":Zl("bg-error"),"bg-error-hover":Zl("bg-error-hover"),"bg-error-strong":Zl("bg-error-strong"),"bg-error-strong-hover":Zl("bg-error-strong-hover"),"bg-inverse":Zl("bg-inverse"),"bg-inverse-subtle":Zl("bg-inverse-subtle"),"bg-inverse-subtler":Zl("bg-inverse-subtler"),"bg-inverse-subtlest":Zl("bg-inverse-subtlest"),"bg-inverse-hover":Zl("bg-inverse-hover"),"bg-primary":Zl("bg-primary"),"bg-primary-subtle":Zl("bg-primary-subtle"),"bg-primary-subtler":Zl("bg-primary-subtler"),"bg-primary-subtlest":Zl("bg-primary-subtlest"),"bg-available":Zl("bg-available"),"bg-primary-hover":Zl("bg-primary-hover"),"bg-primary-subtlest-hover":Zl("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Zl("bg-primary-subtlest-selected"),"overlay-strong":Zl("overlay-strong"),"overlay-subtle":Zl("overlay-subtle"),hyperlink:Zl("hyperlink"),"hyperlink-hover":Zl("hyperlink-hover"),"hyperlink-visited":Zl("hyperlink-visited"),"hyperlink-inverse":Zl("hyperlink-inverse"),"focus-ring":Zl("focus-ring"),"focus-ring-inverse":Zl("focus-ring-inverse")},Jl={collections:{default:{solid:e=>t=>{var r,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:Fl["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:Ql.border(t),u=Fl.solid;return M`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:Fl["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:Ql.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return M`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},ec=e=>1===e.length&&"theme"in e[0],tc=e=>(...t)=>r=>{const n=ec(t)?[]:t,i=ec(t)?t[0]:r,o=i.theme;return(0,Tl(Jl,null==o?void 0:o.borderScheme)[e])(...n)(i)},rc={solid:tc("solid"),"dashed-default":tc("dashed-default")},nc={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},ic=e=>t=>{var r;const n=t.theme,i=Tl(nc,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Dl(i,e,n.overrides.breakpoint):i[e],o},oc={"xxs-min":ic("xxs-min"),"xxs-max":ic("xxs-max"),"xs-min":ic("xs-min"),"xs-max":ic("xs-max"),"sm-min":ic("sm-min"),"sm-max":ic("sm-max"),"md-min":ic("md-min"),"md-max":ic("md-max"),"lg-min":ic("lg-min"),"lg-max":ic("lg-max"),"xl-min":ic("xl-min"),"xl-max":ic("xl-max"),"xxl-min":ic("xxl-min"),"xxs-column":ic("xxs-column"),"xs-column":ic("xs-column"),"sm-column":ic("sm-column"),"md-column":ic("md-column"),"lg-column":ic("lg-column"),"xl-column":ic("xl-column"),"xxl-column":ic("xxl-column"),"xxs-gutter":ic("xxs-gutter"),"xs-gutter":ic("xs-gutter"),"sm-gutter":ic("sm-gutter"),"md-gutter":ic("md-gutter"),"lg-gutter":ic("lg-gutter"),"xl-gutter":ic("xl-gutter"),"xxl-gutter":ic("xxl-gutter"),"xxs-margin":ic("xxs-margin"),"xs-margin":ic("xs-margin"),"sm-margin":ic("sm-margin"),"md-margin":ic("md-margin"),"lg-margin":ic("lg-margin"),"xl-margin":ic("xl-margin"),"xxl-margin":ic("xxl-margin")},ac=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=oc["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),sc={MaxWidth:ac("max-width"),MinWidth:ac("min-width")},lc={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},cc=e=>t=>{var r;const n=t.theme,i=Tl(lc,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Dl(i,e,n.overrides.fontSpec):i[e]},dc={"heading-size-xxl":cc("heading-size-xxl"),"heading-size-xl":cc("heading-size-xl"),"heading-size-lg":cc("heading-size-lg"),"heading-size-md":cc("heading-size-md"),"heading-size-sm":cc("heading-size-sm"),"heading-size-xs":cc("heading-size-xs"),"heading-lh-xxl":cc("heading-lh-xxl"),"heading-lh-xl":cc("heading-lh-xl"),"heading-lh-lg":cc("heading-lh-lg"),"heading-lh-md":cc("heading-lh-md"),"heading-lh-sm":cc("heading-lh-sm"),"heading-lh-xs":cc("heading-lh-xs"),"heading-ls-xxl":cc("heading-ls-xxl"),"heading-ls-xl":cc("heading-ls-xl"),"heading-ls-lg":cc("heading-ls-lg"),"heading-ls-md":cc("heading-ls-md"),"heading-ls-sm":cc("heading-ls-sm"),"heading-ls-xs":cc("heading-ls-xs"),"weight-light":cc("weight-light"),"weight-regular":cc("weight-regular"),"weight-semibold":cc("weight-semibold"),"weight-bold":cc("weight-bold"),"font-family":cc("font-family"),"body-size-baseline":cc("body-size-baseline"),"body-size-md":cc("body-size-md"),"body-size-sm":cc("body-size-sm"),"body-size-xs":cc("body-size-xs"),"body-lh-baseline":cc("body-lh-baseline"),"body-lh-md":cc("body-lh-md"),"body-lh-sm":cc("body-lh-sm"),"body-lh-xs":cc("body-lh-xs"),"body-ls-baseline":cc("body-ls-baseline"),"body-ls-md":cc("body-ls-md"),"body-ls-sm":cc("body-ls-sm"),"body-ls-xs":cc("body-ls-xs"),"form-label-size":cc("form-label-size"),"form-description-size":cc("form-description-size"),"form-label-lh":cc("form-label-lh"),"form-description-lh":cc("form-description-lh"),"form-label-ls":cc("form-label-ls"),"form-description-ls":cc("form-description-ls")},uc=(e,t,r,n,i)=>{const{disableLigatures:o}=i||{};return M`
        font-family: ${cc("font-family")};
        font-size: ${cc(e)};
        font-weight: ${cc(t)};
        line-height: ${cc(r)};
        letter-spacing: ${cc(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},hc=(e={})=>({"heading-xxl-light":uc("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":uc("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":uc("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":uc("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":uc("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":uc("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":uc("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":uc("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":uc("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":uc("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":uc("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":uc("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":uc("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":uc("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":uc("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":uc("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":uc("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":uc("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":uc("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":uc("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":uc("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":uc("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":uc("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":uc("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":uc("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":uc("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":uc("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":uc("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":uc("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":uc("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":uc("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":uc("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":uc("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":uc("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":uc("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":uc("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":uc("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":uc("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":uc("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":uc("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":uc("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":uc("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),gc=hc({disableLigatures:!0}),pc={collections:{default:hc(),bookingsg:gc,pa:hc({disableLigatures:!0}),a11yplayground:hc({disableLigatures:!0})},defaultValue:"default"},fc=e=>t=>{var r;const n=t.theme,i=Tl(pc,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Dl(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},mc={"heading-xxl-light":fc("heading-xxl-light"),"heading-xxl-regular":fc("heading-xxl-regular"),"heading-xxl-semibold":fc("heading-xxl-semibold"),"heading-xxl-bold":fc("heading-xxl-bold"),"heading-xl-light":fc("heading-xl-light"),"heading-xl-regular":fc("heading-xl-regular"),"heading-xl-semibold":fc("heading-xl-semibold"),"heading-xl-bold":fc("heading-xl-bold"),"heading-lg-light":fc("heading-lg-light"),"heading-lg-regular":fc("heading-lg-regular"),"heading-lg-semibold":fc("heading-lg-semibold"),"heading-lg-bold":fc("heading-lg-bold"),"heading-md-light":fc("heading-md-light"),"heading-md-regular":fc("heading-md-regular"),"heading-md-semibold":fc("heading-md-semibold"),"heading-md-bold":fc("heading-md-bold"),"heading-sm-light":fc("heading-sm-light"),"heading-sm-regular":fc("heading-sm-regular"),"heading-sm-semibold":fc("heading-sm-semibold"),"heading-sm-bold":fc("heading-sm-bold"),"heading-xs-light":fc("heading-xs-light"),"heading-xs-regular":fc("heading-xs-regular"),"heading-xs-semibold":fc("heading-xs-semibold"),"heading-xs-bold":fc("heading-xs-bold"),"body-baseline-light":fc("body-baseline-light"),"body-baseline-regular":fc("body-baseline-regular"),"body-baseline-semibold":fc("body-baseline-semibold"),"body-baseline-bold":fc("body-baseline-bold"),"body-md-light":fc("body-md-light"),"body-md-regular":fc("body-md-regular"),"body-md-semibold":fc("body-md-semibold"),"body-md-bold":fc("body-md-bold"),"body-sm-light":fc("body-sm-light"),"body-sm-regular":fc("body-sm-regular"),"body-sm-semibold":fc("body-sm-semibold"),"body-sm-bold":fc("body-sm-bold"),"body-xs-light":fc("body-xs-light"),"body-xs-regular":fc("body-xs-regular"),"body-xs-semibold":fc("body-xs-semibold"),"body-xs-bold":fc("body-xs-bold"),"form-label":fc("form-label"),"form-description":fc("form-description")},bc={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},vc=e=>t=>{var r;const n=t.theme,i=Tl(bc,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Dl(i,e,n.overrides.motion):i[e]},yc={"duration-150":vc("duration-150"),"duration-250":vc("duration-250"),"duration-350":vc("duration-350"),"duration-500":vc("duration-500"),"duration-800":vc("duration-800"),"duration-1000":vc("duration-1000"),"ease-default":vc("ease-default"),"ease-standard":vc("ease-standard"),"ease-entrance":vc("ease-entrance"),"ease-exit":vc("ease-exit")},xc={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},wc=e=>t=>{var r;const n=t.theme,i=Tl(xc,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Dl(i,e,n.overrides.radius)}px`:`${i[e]}px`},$c={none:wc("none"),xs:wc("xs"),sm:wc("sm"),md:wc("md"),lg:wc("lg"),full:wc("full")},Cc={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Sc=e=>t=>{var r;const n=t.theme,i=Tl(Cc,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Dl(i,e,n.overrides.spacing)}px`:`${i[e]}px`},kc={"spacing-0":Sc("spacing-0"),"spacing-4":Sc("spacing-4"),"spacing-8":Sc("spacing-8"),"spacing-12":Sc("spacing-12"),"spacing-16":Sc("spacing-16"),"spacing-20":Sc("spacing-20"),"spacing-24":Sc("spacing-24"),"spacing-32":Sc("spacing-32"),"spacing-40":Sc("spacing-40"),"spacing-48":Sc("spacing-48"),"spacing-64":Sc("spacing-64"),"spacing-72":Sc("spacing-72"),"layout-xs":Sc("layout-xs"),"layout-sm":Sc("layout-sm"),"layout-md":Sc("layout-md"),"layout-lg":Sc("layout-lg"),"layout-xl":Sc("layout-xl"),"layout-xxl":Sc("layout-xxl"),"layout-xxxl":Sc("layout-xxxl")},Dc=()=>{const e=f(I);return e?{colourMode:e.colourMode||"light",theme:e}:(console.warn("useDSTheme must be used within a DSThemeProvider or ThemeProvider"),{colourMode:"light",theme:null})},Tc=()=>"undefined"!=typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",Ec=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),Oc=({theme:t,children:r})=>{const[n,i]=a(null==t?void 0:t.colourMode);u((()=>{if(!t)return void i("light");if(t.colourMode)return void i(t.colourMode);const e=Tc();if(i(e),"undefined"!=typeof window&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)"),r=e=>{t.colourMode||i(e.matches?"dark":"light")};return e.addEventListener?(e.addEventListener("change",r),()=>e.removeEventListener("change",r)):(e.addListener(r),()=>e.removeListener(r))}}),[null==t?void 0:t.colourMode]);const o=Object.assign(Object.assign({},t),{colourMode:n||"light"});return e(A,{theme:o,children:r})},Fc=Object.assign(Object.assign({},Ql),{Primitive:Wl}),_c=Object.assign(Object.assign({},mc),{Spec:dc}),Mc=yc,Ic=Object.assign(Object.assign({},Fl),{Util:rc}),Ac=kc,Bc=$c,jc=oc,Rc=sc,zc={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Pc={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Lc={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Nc={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Hc={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Wc={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Yc={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Vc={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"default"},Uc=Object.assign(Object.assign({},zc),{light:Ec(zc,"light"),dark:Ec(zc,"dark")}),Kc=Object.assign(Object.assign({},Pc),{light:Ec(Pc,"light"),dark:Ec(Pc,"dark")}),Xc=Object.assign(Object.assign({},Lc),{light:Ec(Lc,"light"),dark:Ec(Lc,"dark")}),qc=Object.assign(Object.assign({},Nc),{light:Ec(Nc,"light"),dark:Ec(Nc,"dark")}),Gc=Object.assign(Object.assign({},Hc),{light:Ec(Hc,"light"),dark:Ec(Hc,"dark")}),Zc=Object.assign(Object.assign({},Wc),{light:Ec(Wc,"light"),dark:Ec(Wc,"dark")}),Qc=Object.assign(Object.assign({},Yc),{light:Ec(Yc,"light"),dark:Ec(Yc,"dark")}),Jc=Object.assign(Object.assign({},Vc),{light:Ec(Vc,"light"),dark:Ec(Vc,"dark")}),ed=_.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Ac["spacing-24"]};
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

        ${({$highlight:e})=>e&&M`
                background-color: ${Fc["bg-hover-neutral"]};
            `}
    }
`,td=i.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=gt(t,["children","focusHighlight","focusOutline","type"]);return e(ed,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),rd=e=>M`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,nd=(e,t,r=!1)=>M`
        ${_c[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,id=e=>{if(e)return M`
            ${rd(e)}
        `},od=(e,t)=>M`
    ${nd(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?M`
            display: block;
            ${id(r)}
        `:e?M`
            display: inline;
        `:M`
            display: block;
            ${id(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Fc.text};
`;var ad;!function(r){const n=(e,t,r)=>{const n=_(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>od(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const r=_.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>od(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const o=(r,n)=>{const i=_.a`
            ${e=>M`
                ${nd(r,e.weight||"regular")}
                color: ${Fc.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Fc["text-hover"]};
                }
            `}
        `,o=r=>{var{external:n=!1,children:o}=r,a=gt(r,["external","children"]);return t(i,Object.assign({},a,{children:[o,n&&e(sd,{})]}))};return o.displayName=`Typography.${n}`,o};r.LinkBL=o("body-baseline","LinkBL"),r.LinkMD=o("body-md","LinkMD"),r.LinkSM=o("body-sm","LinkSM"),r.LinkXS=o("body-xs","LinkXS")}(ad||(ad={}));const sd=_(R)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,ld=_.div`
    background-color: ${Fc.bg} !important;
    border-top: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${Rc.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,cd=_.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,dd=e=>M`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${Mc["duration-250"]} ${Mc["ease-standard"]};
`,ud=_(ad.HeadingSM)`
    ${e=>dd(e.$isCollapsed)}
`,hd=_(ad.HeadingXS)`
    ${e=>dd(e.$isCollapsed)}
`,gd=_(td)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${Mc["duration-250"]} ${Mc["ease-default"]};
    margin: auto -1rem auto 0;
`,pd=_(F)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Fc["icon-primary"]};
`,fd=_(Uo.div)`
    overflow: hidden;
`,md=_.div`
    display: inline-block;
    padding-right: 4rem;

    ${Rc.MaxWidth.lg} {
        padding-right: 0;
    }
`;const bd=g((function(r,n){var{title:i,children:s,expanded:l,type:c="default",collapsible:d=!0}=r,h=gt(r,["title","children","expanded","type","collapsible"]);const g=o(null),p=f(ht),[m,v]=a(!d||(null!=l?l:p)),[y,x]=a(!1),w=h["data-testid"]||"accordion-item",$=hr(),C=$.ref;b(n,(()=>Object.assign(g.current,{expand(){v(!0)},collapse(){v(!1)},isExpanded:()=>m})),[m]),u((()=>{y&&v(!d||p)}),[p]),u((()=>{y&&v(!!l)}),[l]),u((()=>{x(!0)}),[]);const S={height:m?$.height:0},k=Eo(S);return t(ld,{"data-testid":w,className:h.className,$isCollapsed:m,ref:g,children:[t(cd,{$isCollapsed:d,onClick:d?e=>{e.preventDefault(),v((e=>!e))}:void 0,children:["string"!=typeof i?i:e("small"===c?hd:ud,{weight:"bold","data-testid":`${w}-title`,$isCollapsed:m,children:i}),d&&e(gd,{"data-testid":`${w}-expand-collapse-button`,$isCollapsed:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand",children:e(pd,{})})]}),e(fd,{style:y?k:S,$isCollapsed:m,"data-testid":`${w}-expandable-container`,children:e(md,{ref:C,id:"content-container",children:s})})]})})),vd=_.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,yd=B`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,xd=_.div`
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
    animation: ${yd} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,wd=_(xd)`
    animation-delay: -0.45s;
`,$d=_(xd)`
    animation-delay: -0.3s;
`,Cd=_(xd)`
    animation-delay: -0.15s;
`,Sd=({color:r,className:n,size:i})=>t(vd,{className:n,$size:i,$color:r,"data-testid":"component-loading-spinner",children:[e(xd,{id:"inner1"}),e(wd,{id:"inner2"}),e($d,{id:"inner3"}),e(Cd,{id:"inner4"})]}),kd={collections:{default:{Button:{"button-radius":$c.sm,"button-default-colour-bg":Ql["bg-primary"],"button-default-colour-bg-hover":Ql["bg-primary-hover"],"button-default-colour-text":Ql["text-inverse"],"button-secondary-colour-border":Ql["border-primary"],"button-secondary-colour-text":Ql["text-primary"],"button-light-colour-text":Ql["text-primary"],"button-link-colour-text":Ql["text-primary"]}},pa:{Button:{"button-radius":$c.full,"button-default-colour-bg":Ql["bg-primary"],"button-default-colour-bg-hover":Ql["bg-primary-hover"],"button-default-colour-text":Ql["text-inverse"],"button-secondary-colour-border":Ql["border-primary"],"button-secondary-colour-text":Ql["text-primary"],"button-light-colour-text":Ql["text-primary"],"button-link-colour-text":Ql["text-primary"]}}},defaultValue:"default"},Dd=(e,t)=>r=>{var n,i;const o=r.theme,a=Tl(kd,null==o?void 0:o.componentScheme);return Td((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[t])||a[e][t],r)},Td=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},Ed=Dd("Button","button-radius"),Od=Dd("Button","button-default-colour-bg"),Fd=Dd("Button","button-default-colour-bg-hover"),_d=Dd("Button","button-default-colour-text"),Md=Dd("Button","button-secondary-colour-border"),Id=Dd("Button","button-secondary-colour-text"),Ad=Dd("Button","button-light-colour-text"),Bd=Dd("Button","button-link-colour-text"),jd=_.button`
    padding: ${Ac["spacing-8"]} ${Ac["spacing-16"]};
    min-width: 4rem;
    border: ${Ic["width-010"]} ${Ic.solid} transparent;
    transition: all ${Mc["duration-250"]} ${Mc["ease-default"]};
    border-radius: ${Ed};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return M`
                    background-color: ${Fc.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Fc["border-error-strong"]:Md};

                    color: ${e.$buttonIsDanger?Fc["text-error"]:Id};

                    &:hover,
                    &:active {
                        background-color: ${Fc["bg-hover-neutral"]};
                    }
                `;case"light":return M`
                    background-color: ${Fc.bg};
                    border-color: ${Fc.border};

                    color: ${e.$buttonIsDanger?Fc["text-error"]:Ad};

                    &:hover,
                    &:active {
                        background-color: ${Fc["bg-hover-neutral"]};
                    }
                `;case"link":return M`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Fc["text-error"]:Bd};
                    &:hover,
                    &:active {
                        background-color: ${Fc["bg-hover-neutral"]};
                    }
                `;case"disabled":return M`
                    background-color: ${Fc["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Fc["text-disabled"]};
                `;default:return M`
                    background-color: ${e.$buttonIsDanger?Fc["bg-error-strong"]:Od};};

                    ${Rc.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${_d}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Fc["bg-error-strong-hover"]:Fd}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return M`
                    height: 2.5rem;
                    ${_c["body-md-semibold"]}

                    ${Rc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return M`
                    height: 4rem;
                    ${_c["heading-md-semibold"]}

                    ${Rc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return M`
                    height: 3rem;
                    ${_c["heading-xs-semibold"]}

                    ${Rc.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Rd=_(Sd)`
    margin-right: 0.5rem;
`,zd=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=gt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(jd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Rd,{}),e("span",{children:i})]}))};zd.displayName="Button.Default";const Pd=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=gt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(jd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Rd,{}),e("span",{children:i})]}))};Pd.displayName="Button.Small";const Ld=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=gt(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(jd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Rd,{}),e("span",{children:i})]}))};Ld.displayName="Button.Large";const Nd={Default:i.forwardRef(zd),Small:i.forwardRef(Pd),Large:i.forwardRef(Ld)},Hd=_.div`
    width: 100%;
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
`,Wd=_.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${Rc.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return M`
                ${Rc.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,Yd=_(ad.HeadingMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${Rc.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return M`
                ${Rc.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,Vd=_(Nd.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,Ud=Object.assign((({children:r,title:n,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:s=!1,className:l})=>{const[c,d]=a("expand-all"===o),u=e=>{e.preventDefault(),d((e=>!e))};return e(ht.Provider,{value:c,children:t(Hd,{className:l,children:[n||i?t(Wd,{$showTitleInMobile:s,$hasExpandAll:i,children:[n&&e(Yd,{weight:"bold",$showInMobile:s,"data-testid":"accordion-title",children:n}),i&&e(Vd,{"data-testid":"accordion-expand-collapse-button",onClick:u,styleType:"link",type:"button",children:c?"Hide all":"Show all"})]}):null,r]})})}),{Item:bd}),Kd=e=>{const{textSize:t}=e||{};return M`
        // Text styling
        ${t&&_c[`${t}-regular`]}

        strong {
            font-weight: ${_c.Spec["weight-semibold"]};
            ${t&&_c[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${_c.Spec["weight-semibold"]};
            ${t&&_c[`${t}-semibold`]}
            color: ${Fc.hyperlink};
            text-decoration: none;

            svg {
                color: ${Fc["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Fc["hyperlink-hover"]};

                svg {
                    color: ${Fc["icon-hover"]};
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
    `},Xd=_.div`
    padding: ${Ac["spacing-8"]} ${Ac["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Fc["bg-error"](e),r=Fc["border-error"](e);break;case"success":t=Fc["bg-success"](e),r=Fc["border-success"](e);break;case"warning":default:t=Fc["bg-warning"](e),r=Fc["border-warning"](e);break;case"info":t=Fc["bg-info"](e),r=Fc["border-info"](e);break;case"description":t=Fc["bg-strong"](e),r=Fc["border-strong"](e)}return M`
            background: ${t};
            border-left: ${Ic["width-020"]} ${Ic.solid}
                ${r};
        `}}

    color: ${Fc.text};
    ${e=>"small"===e.$sizeType?Kd({textSize:"body-sm"}):Kd({textSize:"body-md"})}
`,qd=_.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Ac["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Fc["icon-error"](e);break;case"success":t=Fc["icon-success"](e);break;case"warning":default:t=Fc["icon-warning"](e);break;case"info":t=Fc["icon-info"](e);break;case"description":t=Fc["icon-subtle"](e)}return M`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Gd=_(ad.LinkSM)`
    ${e=>"small"===e.$sizeType?M`
                ${_c["body-sm-semibold"]}
                margin-top: ${Ac["spacing-4"]};
            `:M`
                ${_c["body-md-semibold"]}
                margin-top: ${Ac["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Ac["spacing-4"]};
    }
`,Zd=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Qd=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return M`
                margin-bottom: ${Ac["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Jd=_.button`
    ${e=>"small"===e.$sizeType?M`
                ${_c["body-sm-semibold"]}
            `:M`
                ${_c["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Ac["spacing-4"]};
    margin-top: ${Ac["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Fc["text-primary"]};
`,eu=_(W)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Mc["duration-350"]} ${Mc["ease-standard"]};
`,tu=r=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:g}=r,p=gt(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,m]=a(!1),[b,v]=a(!1),{height:y,ref:x}=hr();u((()=>{w()}),[g,y]);const w=()=>{m(!g),v($())},$=()=>!(!y||!g)&&y>g;return t(Xd,{className:i,$type:n,$sizeType:c,"data-testid":p["data-testid"],children:[d&&e(qd,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return e(H,{});case"warning":return e(L,{});case"error":return e(P,{});case"info":case"description":return e(N,{});default:return null}})()}),t(Zd,{children:[t(Qd,{$maxCollapsedHeight:$()?g:void 0,$showMore:f,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?t(Gd,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},s,{children:[s.children,l||e(z,{})]})):null]}),b&&t(Jd,{$sizeType:c,$type:n,type:"button",onClick:()=>m(!f),children:["Show ",f?"less":"more",e(eu,{$expanded:f})]})]})]})},ru=v((()=>pt(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.e29c7f00.js")).LottieSpinner}})))),nu=t=>e(ou,Object.assign({},t,{children:e(y,{fallback:e(iu,{}),children:e(ru,{})})})),iu=()=>e("div",{style:{height:"200px",width:"200px"}}),ou=_.div`
    margin: 0 auto;
    padding: ${Ac["spacing-32"]} ${Ac["spacing-16"]};
`,au=v((()=>pt(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.abc77506.js")).LottieLoadingDots}})))),su=t=>e(cu,Object.assign({},t,{children:e(y,{fallback:e(lu,{}),children:e(au,{})})})),lu=()=>e("div",{style:{height:"16px",width:"64px"}}),cu=_.div`
    margin: 0 auto;
`,du=v((()=>pt(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.061b6a8e.js")).LottieLoadingDotsSpinner}})))),uu=t=>{var{color:r}=t,n=gt(t,["color"]);const i=j(),o=r||Fc["icon-primary"]({theme:i});return e(gu,Object.assign({},n,{children:e(y,{fallback:e(hu,{}),children:e(du,{color:o})})}))},hu=()=>e("div",{style:{height:"200px",width:"200px"}}),gu=_.div`
    margin: 0 auto;
`,pu=t=>{const r=j();return"lifesg"===(null==r?void 0:r.resourceScheme)?e(nu,Object.assign({},t)):e(uu,Object.assign({},t))};var fu,mu={exports:{}};fu=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:p(c),arrayOf:function(e){return p((function(t,r,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new g("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:p((function(t,r,n,i,o){var a=t[r];return e(a)?null:new g("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new g("Invalid "+n+" `"+o+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||d;return new g("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,i){return b(e[t])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,i,o){if("function"!=typeof e)return new g("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=v(l);if("object"!==c)return new g("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,i,o+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new g("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),c}return p((function(t,r,n,i,o){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,i,o,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new g("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,i,o){var s=t[r],l=v(s);if("object"!==l)return new g("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(n,i,o,c,y(d));var u=d(s,c,n,i,o+"."+c,a);if(u)return u}return null}))},exact:function(e){return p((function(t,r,n,i,l){var c=t[r],d=v(c);if("object"!==d)return new g("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=o({},t[r],e);for(var h in u){var p=e[h];if(s(e,h)&&"function"!=typeof p)return m(n,i,l,h,y(p));if(!p)return new g("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=p(c,h,n,i,l+"."+h,a);if(f)return f}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},i=0;function o(o,s,l,c,u,h,p){if(c=c||d,h=h||l,p!==a){if(t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new g("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new g("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function f(e){return p((function(t,r,n,i,o,a){var s=t[r];return v(s)!==e?new g("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,i){return new g((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!b(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var g=e.type;switch(g){case c:case d:case i:case a:case o:case h:return g;default:var m=g&&g.$$typeof;switch(m){case l:case u:case f:case p:case s:return m;default:return t}}case n:return t}}}var w=c,$=d,C=l,S=s,k=r,D=u,T=i,E=f,O=p,F=n,_=a,M=o,I=h,A=!1;function B(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=k,t.ForwardRef=D,t.Fragment=T,t.Lazy=E,t.Memo=O,t.Portal=F,t.Profiler=_,t.StrictMode=M,t.Suspense=I,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===c},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===f},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var bu=mu.exports=fu(i);const vu=_.div`
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};
    margin-bottom: ${Ac["spacing-32"]};
`,yu=_(Uo.div)`
    overflow: hidden;
`,xu=_.div`
    height: max-content;
`,wu=_.div`
    border-top: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
`,$u=_.div`
    padding: ${Ac["spacing-16"]} ${Ac["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Rc.MaxWidth.sm} {
        padding: ${Ac["spacing-16"]} ${Ac["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return M`
                cursor: pointer;
            `}}
`,Cu=_.div`
    ${_c["heading-sm-semibold"]}
    color: ${Fc.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${Ac["spacing-16"]};
`,Su=_.div`
    display: flex;
`,ku=_.span`
    display: flex;
    align-items: center;
    margin-right: ${Ac["spacing-40"]};

    ${Rc.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return M`
                    color: ${Fc["icon-error"]};
                `;case"warning":return M`
                    color: ${Fc["icon-warning"]};
                `}}}
`,Du=_(P)`
    height: ${_c.Spec["heading-size-sm"]};
    width: ${_c.Spec["heading-size-sm"]};
`,Tu=_.div`
    display: flex;
    margin-left: auto;
    ${Rc.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return M`
                margin-right: ${Ac["spacing-40"]};
                ${Rc.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${Ac["spacing-16"]};
                }
            `}}
`,Eu=_.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${Ac["spacing-16"]};
    margin: -${Ac["spacing-16"]};
    display: flex;
    align-items: center;

    ${Rc.MaxWidth.sm} {
        margin: -${Ac["spacing-16"]} -${Ac["spacing-16"]} -${Ac["spacing-16"]} 0;
        margin-left: auto;
    }
`,Ou=_.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Mc["duration-250"]} ${Mc["ease-default"]};
`,Fu=_(be)`
    color: ${Fc.icon};
    height: ${_c.Spec["heading-size-sm"]};
    width: ${_c.Spec["heading-size-sm"]};
`,_u=r=>{var{children:n,title:i,collapsible:o=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=r,h=gt(r,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[g,p]=a(!o||s),f=hr(),m=f.ref,b=j(),v=jc["sm-max"]({theme:b}),y=bu.useMediaQuery({maxWidth:v}),x=u&&o,w=e=>{e.stopPropagation(),p(!g)},$=Eo({height:g?f.height:0}),C=()=>o&&e(Eu,{onClick:w,type:"button","aria-label":g?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle",children:e(Ou,{$expanded:g,children:e(Fu,{"aria-hidden":!0})})});return t(vu,Object.assign({},h,{children:[t($u,{"data-testid":"header",onClick:x?w:void 0,$interactive:x,children:[t(Su,{children:[e(Cu,{"data-testid":(null==d?void 0:d.title)||"title",children:i}),(()=>{switch(c){case"error":case"warning":return e(ku,{$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`,children:e(Du,{})});default:return null}})(),y&&C()]}),l&&e(Tu,{$collapsible:o,"data-testid":"call-to-action-container",children:l}),!y&&C()]}),o?e(yu,{style:$,"data-testid":"expandable-container",children:e(wu,{ref:m,children:n})}):e(xu,{"data-testid":"non-expandable-container",children:e(wu,{children:n})})]}))};var Mu={exports:{}};Mu.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",g="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},C=function e(t,r,n){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(y=i),i||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},k=v;k.l=C,k.i=$,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return k.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!k.u(t)||t,d=k.p(e),g=function(e,t){var i=k.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return k.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?g(1,0):g(31,11);case c:return n?g(1,m):g(0,m+1);case l:var y=this.$locale().weekStart||0,x=(f<y?f+7:f)-y;return g(n?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=k.p(e),d="set"+(this.$u?"UTC":""),g=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[o]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var f=this.clone().set(h,1);f.$d[g](p),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(n,d){var h,g=this;n=Number(n);var p=k.p(d),f=function(e){var t=S(g);return k.w(t.date(t.date()+Math.round(e*n)),g)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return f(1);if(p===l)return f(7);var m=(h={},h[o]=t,h[a]=r,h[i]=e,h)[p]||1,b=this.$d.getTime()+n*m;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},h=function(e){return k.s(o%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return k.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var p,f=this,m=k.p(h),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return k.m(f,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case o:p=y/t;break;case i:p=y/e;break;default:p=y}return g?p:k.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),T=D.prototype;return S.prototype=T,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,D,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Iu=Xo(Mu.exports),Au={exports:{}};Au.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],g=d&&d[1];a[l]=g?{regex:h,parser:g}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,g=new Date,p=a||(i||o?1:g.getDate()),f=i||g.getFullYear(),m=0;i&&!o||(m=o>0?o-1:g.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(f,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(f,m,p,b,v,y,x)):new Date(f,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var g=s.length,p=1;p<=g;p+=1){a[1]=s[p-1];var f=r.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}p===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Bu=Xo(Au.exports),ju={exports:{}};ju.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Ru=Xo(ju.exports),zu={exports:{}};zu.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Pu=Xo(zu.exports),Lu={exports:{}};Lu.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Nu,Hu,Wu=Xo(Lu.exports),Yu={exports:{}};Yu.exports=(Nu={year:0,month:1,day:2,hour:3,minute:4,second:5},Hu={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Hu[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Hu[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=Nu[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(g).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Vu,Uu=Xo(Yu.exports);Iu.extend(Ru),Iu.extend(Wu),Iu.extend(Pu),Iu.extend(Bu),Iu.extend(Uu),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Iu(t).startOf("week");return Ku(r).map((e=>Xu(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Xu(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Iu(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Iu(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Iu(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?Iu(n):void 0,i?Iu(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Vu||(Vu={}));const Ku=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Xu=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},qu=[1,3,5,7,8,10,12],Gu=[4,6,9,11];var Zu,Qu,Ju,eh;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":qu.includes(o)?Math.min(i,31).toString():Gu.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Iu(e,r);return Iu(t,r).diff(n,"minute")},e.toDayjs=e=>e?Iu(e):Iu(),e.addMinutesToTime=(e,t,r="HH:mm")=>Iu(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Iu(e).isSame(Iu(t),r)}(Zu||(Zu={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Iu(e).isBefore(n,"day"))||!(!i||!Iu(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Iu(e).isValid())return e}return""}}(Qu||(Qu={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ju||(Ju={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(eh||(eh={}));function th(e){const t=o(null);return h((()=>{t.current=e}),[e]),p(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const rh=(e,t,r="window",n)=>{const i=o();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.call(i,e)};return t.addEventListener(e,o,n),()=>{null==t||t.removeEventListener(e,o,n)}}),[e,r])},nh="undefined"!=typeof window?h:u,ih=()=>{const[e,t]=a(!1);return u((()=>{t(!0)}),[]),e};function oh({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const i=n.value,o=t(i),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=i.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:o,updateCaretPosition:()=>{n.value=o,n.setSelectionRange(d,d)}}}}const ah=e=>{const t=(e=>{const t=o(e),r=o();return u((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},sh=e=>{const[t,r]=a(e),n=o(e);return[t,p((e=>{n.current=e,r(e)}),[]),n]},lh=_.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${Ac["spacing-32"]} 0;

    ${Rc.MaxWidth.xl} {
        margin: ${Ac["spacing-24"]} 0;
    }

    ${Rc.MaxWidth.lg} {
        margin: ${Ac["spacing-16"]} 0;
    }
`,ch=_.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${Ac["spacing-8"]};
    font-size: ${_c.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${Rc.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,dh=_.div`
    width: ${Ac["spacing-64"]};
    height: calc(1lh + ${Ac["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const r="rgba(255,255,255,0.001)",n=Fc.bg(e);return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||n}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||n},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,M`
            ${Rc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,uh=_.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,hh=_(ve)`
    margin: ${Ac["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${Fc["icon-subtle"]};
`,gh=_(ad.BodyMD)`
    margin: ${Ac["spacing-8"]} !important;
`,ph=_(ad.LinkMD)`
    margin: ${Ac["spacing-8"]} !important;
`,fh=n=>{var{links:i,fadeColor:s,fadePosition:l="both",itemStyle:c,id:d}=n,u=gt(n,["links","fadeColor","fadePosition","itemStyle","id"]);const[h,g]=a(!1),[p,f]=a(!1),[m,b]=a(!1),v="left"===l||"both"===l,y="right"===l||"both"===l,x=o(null),w=o(null),$=j(),C=jc["lg-max"]({theme:$}),S=th((()=>{const e=w.current,t=x.current;e&&t&&i&&i.length>1&&window.innerWidth<=C&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),k=th((()=>{const e=window.innerWidth<=C;g(e);const t=w.current,r=x.current;if(t&&r&&e&&t.scrollWidth>r.offsetWidth)return f(t.scrollLeft>=1),void b(t.scrollWidth-t.scrollLeft-1>r.offsetWidth);f(!1),b(!1)}));if(rh("resize",k),rh("scroll",k,w.current),nh((()=>{S(),k()}),[S,k]),hr({onResize:S,targetRef:x,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!i)return null;return t(lh,Object.assign({ref:x,id:d||"breadcrumb"},u,{children:[e("nav",{children:e(ch,{ref:w,children:i.map(((r,n)=>{let o;return r.children?(o=n!==i.length-1&&r.href?e(ph,Object.assign({},r,{weight:"semibold"})):e(gh,{weight:"semibold",children:r.children}),t(uh,{$styleProps:c,children:[o,n<i.length-1&&e(hh,{})]},n)):null}))})}),h&&(()=>{let n;return n=Array.isArray(s)&&s.length>0?{left:s,right:s}:s||{left:void 0,right:void 0},t(r,{children:[p&&v&&e(dh,{$backgroundColor:n.left,$position:"left"}),m&&y&&e(dh,{$backgroundColor:n.right,$position:"right"})]})})()]}))},mh=_(jd)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,bh=(r,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=r,u=gt(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return t(mh,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[d?e(Sd,{}):l,e("span",{children:i})]}))};bh.displayName="ButtonWithIcon.Default";const vh=(r,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=r,u=gt(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return t(mh,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[d?e(Sd,{}):l,e("span",{children:i})]}))};vh.displayName="ButtonWithIcon.Small";const yh={Default:i.forwardRef(bh),Small:i.forwardRef(vh)},xh=_.div`
    --vertical-inset: ${Ac["spacing-24"]};
    --horizontal-inset: ${Ac["spacing-20"]};
    --header-bottom-spacing: ${Ac["spacing-4"]};

    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Rc.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,wh=M`
    color: ${Fc.icon};
    height: 1rem;
    width: 1rem;
`,$h=_(ye)`
    ${wh}
`,Ch=_(ve)`
    ${wh}
`,Sh=_(be)`
    ${wh}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,kh=_.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Dh=_.div`
    display: flex;
    flex: 1;
    position: relative;
`,Th=_.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Eh=_.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Fc.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return M`
                display: none;
            `}}
`,Oh=_.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Fh=_.div`
    display: flex;
`,_h=_.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?M`
                display: none;
            `:e.$expanded?M`
                ${Sh} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Mh=_.span`
    ${_c["body-md-regular"]}
    color: ${Fc.text};
`,Ih=_.div`
    display: flex;
`,Ah=_(td)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Bh=_.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,jh=_(Nd.Small)`
    flex: 1;
`,Rh=_.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,zh=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Bc.md};
    margin: 0 0.5rem;
    transition: ${Mc["duration-150"]} ${Mc["ease-default"]};

    // default styles
    ${_c["body-md-regular"]}
    border-radius: ${Bc.md};
    border: ${Ic["width-010"]} ${Ic.solid} transparent;
    background-clip: border-box;
    color: ${Fc.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?M`
                cursor: pointer;
            `:e.$disabledDisplay?M`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?M`
                background: ${Fc["bg-selected"]};
                border-color: ${Fc["border-selected"]};
                color: ${Fc["text-selected"]};
                font-weight: ${_c.Spec["weight-semibold"]};

                ${t&&M`
                    &:hover {
                        background: ${Fc["bg-selected-hover"]};
                        border-color: ${Fc["border-selected-hover"]};
                        color: ${Fc["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?M`
                color: ${Fc["text-primary"]};
                font-weight: ${_c.Spec["weight-semibold"]};
            `:r?M`
                color: ${Fc["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?M`
                &:hover {
                    background: ${Fc["bg-selected-hover"]};
                    border-color: ${Fc["border-selected-hover"]};
                    color: ${Fc["text-selected-hover"]};
                    font-weight: ${_c.Spec["weight-semibold"]};
                }
            `:M`
            &:hover {
                background: ${Fc["bg-hover"]};
                color: ${Fc["text-hover"]};
                font-weight: ${_c.Spec["weight-semibold"]};
            }
        `}}
`,Ph=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:h,onMonthSelect:g})=>{const p=m((()=>Vu.generateMonths(Iu(t))),[t]),f=o(new Array(p.length).fill(null)),[b,v]=a(p.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==b&&(null===(e=f.current[b])||void 0===e||e.focus())}),[b,p]);const y=(e,t)=>{t||g(e)},x=e=>{const t="start"===r&&i&&e.isAfter(i,"month")&&l,o="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!o)},w=e=>{const t=e.format("MMMM"),r=(n=e,!Vu.isWithinRange(n,c?Iu(c):void 0,d?Iu(d):void 0,"month"));var n;const i=s.isSame(e,"month"),o=i?"selected-month":Iu().isSame(e,"month")?"current-month":"default",a=s.isSame(e,"year")?i?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||h,month:t,variant:o,tabIndex:a}};return p.length?e(Rh,{onBlur:()=>{v(null)},children:p.map(((t,r)=>{const{disabledDisplay:n,interactive:i,variant:o,month:a,tabIndex:s}=w(t);return e(zh,{ref:e=>f.current[r]=e,tabIndex:s,role:"button","aria-disabled":!i,"aria-selected":"selected-month"===o,$variant:o,$disabledDisplay:n,$interactive:i,onClick:()=>y(t,!i),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let i;const o=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":i=o-1;break;case"ArrowRight":i=o+1;break;case"ArrowUp":i=o-2;break;case"ArrowDown":i=o+2}void 0!==i&&i>=0&&i<p.length&&(e.preventDefault(),v(i))})(e,t,!i)},children:a},a)}))}):null},Lh=_.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Nh=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Mc["duration-150"]} ${Mc["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${_c["body-md-regular"]}
    border-radius: ${Bc.md};
    border: ${Ic["width-010"]} ${Ic.solid} transparent;
    background-clip: border-box;
    color: ${Fc.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?M`
                cursor: pointer;
            `:t?M`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?M`
                background: ${Fc["bg-selected"]};
                border-color: ${Fc["border-selected"]};
                color: ${Fc["text-selected"]};
                font-weight: ${_c.Spec["weight-semibold"]};

                ${t&&M`
                    &:hover {
                        background: ${Fc["bg-selected-hover"]};
                        border-color: ${Fc["border-selected-hover"]};
                        color: ${Fc["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?M`
                color: ${Fc["text-primary"]};
                font-weight: ${_c.Spec["weight-semibold"]};
            `:"other-decade"===e||r?M`
                color: ${Fc["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?M`
                &:hover {
                    background: ${Fc["bg-selected-hover"]};
                    border-color: ${Fc["border-selected-hover"]};
                    color: ${Fc["text-selected-hover"]};
                    font-weight: ${_c.Spec["weight-semibold"]};
                }
            `:M`
            &:hover {
                background: ${Fc["bg-hover"]};
                color: ${Fc["text-hover"]};
                font-weight: ${_c.Spec["weight-semibold"]};
            }
        `}}
`,Hh=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:h,onYearSelect:g,setCalendarDate:p})=>{const f=m((()=>Vu.generateDecadeOfYears(Iu(t))),[t]),b=o(new Array(f.length).fill(null)),[v,y]=a(t);u((()=>{var e;if(null===v)return;const t=f.findIndex((e=>e.isSame(v,"year")));t>=0&&(null===(e=b.current[t])||void 0===e||e.focus())}),[v,f]);const x=(e,t)=>{t||g(e)},w=e=>{const t="start"===r&&i&&e.isAfter(i,"year")&&l,o="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!o)},$=e=>{const t=f.indexOf(e),r=[0,11].includes(t),n=e.year(),i=(o=e,!Vu.isWithinRange(o,c?Iu(c):void 0,d?Iu(d):void 0,"year"));var o;const a=r?"other-decade":s.isSame(e,"year")?"selected-year":Iu().isSame(e,"year")?"current-year":"default",l=s.year()>=f[0].year()&&s.year()<=f[f.length-1].year()?"selected-year"===a?0:-1:1===t?0:-1;return{disabledDisplay:i||w(e),interactive:!i||h,year:n,variant:a,tabIndex:l}};return f.length?e(Lh,{onBlur:()=>{y(null)},children:f.map(((t,r)=>{const{disabledDisplay:n,interactive:i,variant:o,year:a,tabIndex:s}=$(t);return e(Nh,{ref:e=>{b.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!i,"aria-selected":"selected-year"===o,$variant:o,$disabledDisplay:n,$interactive:!!i,onClick:()=>x(t,!i),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(e,t,!i)},children:a},a)}))}):null},Wh=i.forwardRef(((n,i)=>{var{children:s,initialCalendarDate:l,minDate:c,maxDate:d,currentFocus:h,selectedStartDate:g,selectedEndDate:p,selectWithinRange:f,dynamicHeight:m=!1,allowDisabledSelection:v,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:k,isLeftArrowDisabled:D,isRightArrowDisabled:T,getMonthHeaderLabel:E,getYearHeaderLabel:O,isFocusable:F=!1}=n,_=gt(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[M,I]=a(Zu.toDayjs(l)),[A,B]=a(Zu.toDayjs(l)),[j,R]=a("default"),z=o(null),P=o(null),L=o(null),N=o(null);b(i,(()=>({defaultView(){R("default")},resetView(){const e=Zu.toDayjs(l);I(e),B(e),R("default")},setCalendarDate(e){const t=Zu.toDayjs(e);I(t),B(t)}}))),u((()=>{const e=Zu.toDayjs(l);I(e),B(e)}),[l]),u((()=>{G(A)}),[A]);const H=()=>{var e;"month-options"!==j?(R("month-options"),null===(e=L.current)||void 0===e||e.focus()):(R("default"),I(A))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),H(),null===(t=N.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?M.subtract(1,"month"):M.add(1,"month");if(!Vu.isWithinRange(t,c?Iu(c):void 0,d?Iu(d):void 0,"month"))return;I(t),"default"===j&&B(t)}},Y=()=>{"default"!==j?(R("default"),I(A)):R("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===j?"ArrowUp"===e.key?M.subtract(10,"year"):M.add(10,"year"):"ArrowUp"===e.key?M.subtract(1,"year"):M.add(1,"year"),!Vu.isWithinRange(t,c?Iu(c):void 0,d?Iu(d):void 0,"year"))return;I(t),"default"===j&&B(t)}},U=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const t=S?S(M):M.subtract(1,"month");switch(j){case"default":B(t),I(t);break;case"month-options":I((e=>e.subtract(1,"year")));break;case"year-options":I((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const t=k?k(M):M.add(1,"month");switch(j){case"default":B(t),I(t);break;case"month-options":I((e=>e.add(1,"year")));break;case"year-options":I((e=>e.add(10,"year")))}},X=e=>{I(e),B(e),x||R("default")},q=()=>{const e=Zu.toDayjs(l);I(e),B(e),"default"===j?Z("reset"):R("default")},G=e=>{y&&y(e)},Z=e=>{$&&$(e)},Q=()=>{if(!c||v)return!1;const e=Iu(c);return"month-options"===j?!Vu.isPreviousYearWithinRange(M,e):"year-options"===j?!Vu.isPreviousDecadeWithinRange(M,e):D?D(M):!Vu.isPreviousMonthWithinRange(M,e)},J=()=>{if(!d||v)return!1;const e=Iu(d);return"month-options"===j?!Vu.isNextYearWithinRange(M,e):"year-options"===j?!Vu.isNextDecadeWithinRange(M,e):T?T(M):!Vu.isNextMonthWithinRange(M,e)},ee=()=>{const n=E?E(M):M.format("MMM"),i=Iu(n,"MMM").format("MMMM"),o=(()=>{if("year-options"===j){const{beginDecade:e,endDecade:t}=Vu.getStartEndDecade(M);return`${e} to ${t}`}return O?O(M):M.format("YYYY")})(),a={"month-options":`${o}, Close month selection`,"year-options":`${o}, Close year selection`,default:`${o}, Select year`};return t(r,{children:[t(_h,{"aria-label":`${i}, Select month`,type:"button",$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:H,onKeyDown:W,tabIndex:F?0:-1,children:[e(Mh,{children:n}),e(Sh,{})]}),t(_h,{ref:N,"aria-label":a[j],type:"button",$expanded:"default"!==j,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:F?0:-1,children:[e(Mh,{children:o}),e(Sh,{})]})]})},te=()=>{switch(j){case"month-options":return e(Ph,{calendarDate:M,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:g,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!f,onMonthSelect:X,allowDisabledSelection:v});case"year-options":return e(Hh,{setCalendarDate:I,calendarDate:M,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:g,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!f,onYearSelect:X,allowDisabledSelection:v});default:return null}};return t(kh,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},_,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[j];return t(Oh,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Fh,{children:ee()}),t(Ih,{children:[e(Ah,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:Q(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:F?0:-1,children:e($h,{})}),e(Ah,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:F?0:-1,children:e(Ch,{})})]})]})})(),e(Dh,{children:(()=>{const n="function"==typeof s?s({calendarDate:A,currentView:j}):s;if(m)return t(r,{children:["default"===j&&n,te()]});{const i="default"===j;return t(r,{children:[e(Th,{inert:i?void 0:"",children:n}),e(Eh,{$visible:!i,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===j)&&w;return t(Bh,{children:[e(jh,{ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q,children:"Cancel"}),e(jh,{"data-testid":"done-button",ref:z,type:"button",onClick:()=>{r||(I(A),"default"===j?Z("confirmed"):R("default"))},disabled:r,children:"Done"})]})})()]}))})),Yh=_.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Vh=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${_c["body-sm-semibold"]};
    color: ${Fc.text};
`,Uh=_.div`
    grid-column: 1 / -1;
    display: flex;
`,Kh=e=>{let t=Fc.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Fc["bg-hover"],r=Fc["bg-hover"];break;case"hover":t=Fc["bg-hover-strong"],r=Fc["bg-hover-strong"];break;case"hover-outline":t=Fc["bg-hover-subtle"],r=Fc["border-hover"];break;case"selected-outline":t=Fc["bg-selected"],r=Fc["border-selected"];break;case"selected-outline-subtle":t=Fc["bg-selected"],r=Fc["border-selected-subtle"];break;case"selected-hover":t=Fc["bg-selected-hover"];break;case"selected-hover-outline":t=Fc["bg-selected-hover"],r=Fc["border-selected-hover"]}return{color:t,borderColor:r}},Xh=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,qh=_.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Mc["duration-150"]} ${Mc["ease-default"]};
    border: ${Ic["width-010"]} ${Ic.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Kh(e);return M`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,Gh=_(qh)`
    left: 0;
`,Zh=_(qh)`
    right: 0;
`,Qh=_.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Mc["duration-150"]} ${Mc["ease-default"]};

    border: ${Ic["width-010"]} ${Ic.solid} transparent;
    border-radius: ${Bc.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Kh(e);return M`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Jh=_(Qh)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,eg=_(Qh)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,tg=_.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,rg=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${_c["body-md-regular"]}
    transition: ${Mc["duration-150"]} ${Mc["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?M`
                    visibility: hidden;
                `:M`
                color: ${Fc["text-disabled-subtlest"]};
            `;switch(r){case"selected":return M`
                    font-weight: ${_c.Spec["weight-semibold"]};
                    color: ${Fc["text-selected"]};
                `;case"selected-hover":return M`
                    font-weight: ${_c.Spec["weight-semibold"]};
                    color: ${Fc["text-selected-hover"]};
                `;case"current":return M`
                    font-weight: ${_c.Spec["weight-semibold"]};
                    color: ${Fc["text-primary"]};
                `;case"hover":return M`
                    font-weight: ${_c.Spec["weight-semibold"]};
                    color: ${Fc["text-hover"]};
                `;case"unavailable":return M`
                    color: ${Fc["text-disabled-subtlest"]};
                `;case"hidden":return M`
                    visibility: hidden;
                `;default:return M`
                    color: ${Fc.text};
                `}}}

    &:focus {
        outline: none;
    }
`,ng=_.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,ig=({bgLeft:r,bgRight:n,circleLeft:i,circleRight:a,labelType:s,disabled:l,interactive:c,currentDateIndicator:d,date:h,onSelect:g,onHover:p,onFocus:f,onHoverEnd:m,onKeyDown:b,tabIndex:v=-1,role:y="button",focusDate:x})=>{const w=Iu().isSame(h,"day"),$=`${h.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,C=!!x&&x.isSame(h,"day"),S=o(null);u((()=>{var e;C&&S.current&&(null===(e=S.current)||void 0===e||e.focus())}),[C]);return t(Xh,{children:[e(Gh,{$type:r}),e(Jh,{$type:i}),e(Zh,{$type:n}),e(eg,{$type:a}),e(tg,{$interactive:c,children:t(rg,{ref:S,tabIndex:v,role:y,"aria-label":$,"aria-disabled":!c,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:c,onClick:()=>{g(h)},onKeyDown:e=>{b&&b(e)},onMouseEnter:()=>{p(h)},onMouseLeave:()=>{m&&m(h)},onFocus:()=>{f&&f(h)},children:[h.date(),d&&w&&e(ng,{$disabled:l})]})})]})},og=({date:t,calendarDate:r,startDate:n,endDate:i,currentFocus:o,hoverDate:a,focusDate:s,minDate:l,maxDate:c,disabledDates:d,allowDisabledSelection:u,isNewSelection:h,showActiveMonthDaysOnly:g,onSelect:p,onHover:f,onFocus:m,setFocusCell:b,tabIndex:v=-1})=>{const y=Vu.isDisabledDay(t,d,l,c),x=!y||u,w=()=>{p(t,!x)},$=()=>{const e=Iu(a),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===o&&i&&t&&(n&&r?(c=a,d=i):(s=a,l=n||i)),"end"===o&&n&&r&&(i&&t?(c=n,d=a):(s=i||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{f(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.add(1,"month"),PageDown:()=>e.shiftKey?t.subtract(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Iu(s),tabIndex:v};return e(ig,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=g?"hidden":"unavailable";else if(Iu().isSame(t,"day")&&!y)e.labelType="current";else if(h){const r="end"===o&&n&&t.isBefore(n),a="start"===o&&i&&t.isAfter(i);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(n,"day"),a=t.isSame(i,"day");return g&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&i&&t.isBetween(n,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:c}=$();if(r){const r=t.isSame(n,"day"),o=t.isSame(i,"day");r||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const r=t.isSame(o,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Iu.extend(Ru);const ag=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:s,selectedEndDate:l,onSelect:c,onHover:d,isNewSelection:h,minDate:g,maxDate:f,allowDisabledSelection:b,showActiveMonthDaysOnly:v,setCalendarDate:y})=>{const x=o(null);u((()=>{if(x.current){const e=x.current;x.current=null,D(e)}}),[r]);const w=p((()=>s&&Iu(s).isSame(r,"month")?Iu(s):l&&Iu(l).isSame(r,"month")?Iu(l):Iu().isSame(r,"month")?Iu():g&&r.isSame(Iu(g),"month")?Iu(g):Iu(r).startOf("month")),[s,r,l,g]),$=e=>{const t=Iu(e);if(Vu.isWithinRange(t,g?Iu(g):void 0,f?Iu(f):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);D(e)}},C=m((()=>Vu.generateDays(r)),[r]),S=m((()=>w()),[w]),[k,D]=a(""),[T,E]=a(""),O=(e,t)=>{t&&!b||c(e)},F=(e,t)=>{t&&!b||(E(e),d(e))},_=e=>{E(e),d(e)},M=()=>{E(""),d("")};return t(Yh,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(D(""),E(""),d(""))},children:[C[0].map(((t,r)=>e(Vh,{"aria-hidden":!0,children:Iu(t).format("ddd")},`week-day-${r}`))),C.map(((t,o)=>e(Uh,{role:"row","aria-label":`Week ${o+1}`,onMouseLeave:M,children:t.map(((t,o)=>e(og,{date:t,calendarDate:r,startDate:s,endDate:l,hoverDate:T,focusDate:k,currentFocus:n,minDate:g,maxDate:f,disabledDates:i,allowDisabledSelection:b,isNewSelection:h,showActiveMonthDaysOnly:v,onSelect:O,onHover:F,onFocus:_,setFocusCell:$,tabIndex:t.isSame(S,"day")?0:-1},`day-${o}`)))},o)))]})},sg=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:d,onHover:u})=>{const h=Vu.isDisabledDay(t,s,o,a),g=!h||l,{start:p,end:f}=n?Vu.getFixedRangeStartEnd(Zu.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=i?Vu.getFixedRangeStartEnd(Zu.toDayjs(i),c):{start:void 0,end:void 0},v=!!n&&t.isBetween(p,f,"day","[]"),y=!!i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(f,"day")||y&&t.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:t,calendarDate:r,disabled:h,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(t,!g)},onHover:()=>{u(t.format("YYYY-MM-DD"),!g)}};return e(ig,Object.assign({},C,(()=>{const e={};return v||y?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":Iu().isSame(t,"day")&&!h&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return y&&$(e,"hover",r===m,r===b),v&&$(e,"selected-outline",r===p,r===f),v&&y&&($(e,"selected-hover-outline",x,w),r===m&&r!==p&&(e.circleLeft="selected-hover")),e})()))},lg=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=m((()=>Vu.generateDays(r)),[r]),[g,p]=a(""),f=(e,t)=>{t&&!d||(o(e),e&&!Iu(e).isSame(e,"month")&&p(""))},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(Yh,{"data-testid":"calendar-content",children:[h[0].map(((t,r)=>e(Vh,{children:Iu(t).format("ddd")},`week-day-${r}`))),h.map(((t,o)=>e(Uh,{onMouseLeave:v,children:t.map(((t,o)=>e(sg,{date:t,calendarDate:r,selectedDate:i,hoverDate:g,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,onSelect:f,onHover:b,numberOfDays:u},`day-${o}`)))},o)))]})},cg=_.div`
    width: 100%;
    background: ${Fc.bg};
`,dg=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const h=Vu.isDisabledDay(t,s,o,a),g=!h||l,p={date:t,calendarDate:r,disabled:h,interactive:g,currentDateIndicator:!0,onSelect:()=>{d(t,!g)},onHover:()=>{u(t.format("YYYY-MM-DD"),!g)}};return e(ig,Object.assign({},p,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":Iu().isSame(t,"day")&&!h&&(e.labelType="current");const o=t.isSame(n,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Iu.extend(Ru);const ug=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,showActiveMonthDaysOnly:u})=>{const h=m((()=>Vu.generateDays(r)),[r]),[g,p]=a(""),f=(e,t)=>{t&&!d||o(e)},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(Yh,{"data-testid":"calendar-content",children:[h[0].map(((t,r)=>e(Vh,{children:Iu(t).format("ddd")},`week-day-${r}`))),h.map(((t,o)=>e(Uh,{onMouseLeave:v,children:t.map(((t,o)=>e(dg,{date:t,calendarDate:r,selectedDate:i,hoverDate:g,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,showActiveMonthDaysOnly:u,onSelect:f,onHover:b},`day-${o}`)))},o)))]})},hg=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Vu.isDisabledDay(t,s,o,a),h=!u||l,{start:g,end:p}=Vu.getWeekStartEnd(Zu.toDayjs(n)),{start:f,end:m}=Vu.getWeekStartEnd(Zu.toDayjs(i)),b=n&&t.isBetween(g,p,"day","[]"),v=i&&t.isBetween(f,m,"day","[]"),y=b&&t.isSame(g)||v&&t.isSame(f),x=b&&t.isSame(p)||v&&t.isSame(m),w={date:t,calendarDate:r,disabled:u,interactive:h,currentDateIndicator:!0,onSelect:()=>{c(t,!h)},onHover:()=>{d(t.format("YYYY-MM-DD"),!h)}};return e(ig,Object.assign({},w,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":Iu().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},gg=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const u=m((()=>Vu.generateDays(r)),[r]),[h,g]=a(""),p=(e,t)=>{if(t&&!d)return;const r=e.startOf("week");o(r),e&&!Iu(e).isSame(r,"month")&&g("")},f=(e,t)=>{t&&!d||(g(e),s(e))},b=()=>{g(""),s("")};return t(Yh,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e(Vh,{children:Iu(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e(Uh,{onMouseLeave:b,children:t.map(((t,o)=>e(hg,{date:t,calendarDate:r,selectedDate:i,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:d,onSelect:p,onHover:f},`day-${o}`)))},o)))]})},pg=i.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:i,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:g,allowDisabledSelection:p,selectWithinRange:f=!0,initialCalendarDate:m,numberOfDays:v,showActiveMonthDaysOnly:y=!1,isFocusable:x=!1},w)=>{const $=o(null),C=o(void 0);b(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)}})));const S=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),D(r)},k=e=>{T(e)},D=e=>{n&&n(e)},T=e=>{i&&i(e)},E=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(cg,{children:e(Wh,{ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:h,maxDate:g,selectWithinRange:f,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),E(e)),C.current=e},initialCalendarDate:m,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;switch(u){case"week":return e(gg,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,onSelect:S,onHover:k});case"fixed-range":return e(lg,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,onSelect:S,onHover:k,numberOfDays:v});case"single":return e(ug,{calendarDate:r,disabledDates:t,selectedDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:S,onHover:k});default:return e(ag,{calendarDate:r,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:g,isNewSelection:f,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:S,onHover:k,setCalendarDate:null===(n=$.current)||void 0===n?void 0:n.setCalendarDate})}})(r)})})})),fg=i.forwardRef(((t,r)=>{var{width:n}=t,i=gt(t,["width"]);return e(xh,{$width:n,"data-testid":"calendar-dropdown",children:e(pg,Object.assign({ref:r},i))})})),mg=t=>{var{className:r,styleType:n="bordered",value:i,onSelect:o}=t,s=gt(t,["className","styleType","value","onSelect"]);const[l,c]=a(i);return u((()=>{c(i)}),[i]),e(bg,{className:r,$hasBorder:"bordered"===n,children:e(pg,Object.assign({value:l,initialCalendarDate:l,isFocusable:!0,onSelect:e=>{c(e),null==o||o(e)}},s))})},bg=_.div`
    --vertical-inset: ${Ac["spacing-24"]};
    --horizontal-inset: ${Ac["spacing-32"]};
    --header-bottom-spacing: ${Ac["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return M`
                border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
                border-radius: ${Bc.lg};
                overflow: hidden;
            `}}
`,vg=_.div`
    border-radius: ${Bc.md};
    background: ${Fc.bg};
    padding: ${Ac["spacing-16"]} ${Ac["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,yg=t=>{var{children:r}=t,n=gt(t,["children"]);const i=n["data-testid"]||"card";return e(vg,Object.assign({},n,{"data-testid":i,children:"string"==typeof r?e(ad.BodyBL,{children:r}):r}))},xg=B`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,wg=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>M`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,$g=M`
    animation: ${Mc["duration-150"]} ${Mc["ease-default"]} ${xg};
    width: 100%;
    height: 100%;
    transition: color ${Mc["duration-150"]} ${Mc["ease-default"]};
`,Cg=_(Y)`
    ${$g}
    color: ${Fc["icon-primary-subtlest"]};
`,Sg=_(V)`
    ${$g}
    color: ${Fc["icon-disabled-subtle"]};
`,kg=_(U)`
    ${$g}
    color: ${e=>e.$disabled?Fc["icon-disabled-subtle"](e):Fc["icon-selected"](e)};
`,Dg=_(K)`
    ${$g}
    color: ${e=>e.$disabled?Fc["icon-disabled-subtle"](e):Fc["icon-selected"](e)};
`,Tg=_.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Cg},
        &:hover
        + ${kg},
        &:hover
        + ${Dg} {
        color: ${e=>!e.disabled&&Fc["icon-hover"](e)};
    }
`,Eg=r=>{var{className:n,checked:i,disabled:a,indeterminate:s,onChange:l,onKeyPress:c,displaySize:d="default"}=r,h=gt(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const g=o(null);u((()=>{g.current&&(g.current.indeterminate=null!=s&&s)}),[s]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(wg,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,$displaySize:d,$disabled:a,$unchecked:!(s||i||a),children:[e(Tg,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:g,tabIndex:-1,onChange:p,disabled:a},h)),s?e(Dg,{$disabled:a,"data-testid":"indeterminate"}):i?e(kg,{$disabled:a,"data-testid":"checkmark"}):a?e(Sg,{"data-testid":"empty-disabled-checkbox"}):e(Cg,{$disabled:a,"data-testid":"empty-checkbox"})]})};var Og=ea,Fg=/\s/;var _g=function(e){for(var t=e.length;t--&&Fg.test(e.charAt(t)););return t},Mg=/^\s+/;var Ig=function(e){return e?e.slice(0,_g(e)+1).replace(Mg,""):e},Ag=$a,Bg=ma,jg=/^[-+]0x[0-9a-f]+$/i,Rg=/^0b[01]+$/i,zg=/^0o[0-7]+$/i,Pg=parseInt;var Lg=function(e){if("number"==typeof e)return e;if(Bg(e))return NaN;if(Ag(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ag(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ig(e);var r=Rg.test(e);return r||zg.test(e)?Pg(e.slice(2),r?2:8):jg.test(e)?NaN:+e},Ng=$a,Hg=function(){return Og.Date.now()},Wg=Lg,Yg=Math.max,Vg=Math.min;var Ug=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function f(){var e=Hg();if(p(e))return m(e);s=setTimeout(f,function(e){var r=t-(e-l);return u?Vg(r,o-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?g(e):(n=i=void 0,a)}function b(){var e=Hg(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),g(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=Wg(t)||0,Ng(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Yg(Wg(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Hg())},b},Kg=Xo(Ug),Xg=Ug,qg=$a;var Gg,Zg,Qg=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return qg(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Xg(e,t,{leading:n,maxWait:t,trailing:i})},Jg=Xo(Qg),ep=new Map,tp=new WeakMap,rp=0;function np(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(tp.has(e)||(rp+=1,tp.set(e,rp.toString())),tp.get(e)):"0"}(e.root):e[t]}`)).toString()}function ip(e,t,r={},n=undefined){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=np(e);let r=ep.get(t);if(!r){const n=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},ep.set(t,r)}return r}(r),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),ep.delete(i))}}function op({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var u;const[h,g]=n.useState(null),p=n.useRef(),[f,m]=n.useState({inView:!!l,entry:void 0});p.current=d,n.useEffect((()=>{if(s||!h)return;let n;return n=ip(h,((e,t)=>{m({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&a&&n&&(n(),n=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:r,delay:t},c),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,h,o,i,a,s,r,c,t]);const b=null==(u=f.entry)?void 0:u.target,v=n.useRef();h||!b||a||s||v.current===b||(v.current=b,m({inView:!!l,entry:void 0}));const y=[g,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}!function(e){e.AM="AM",e.PM="PM"}(Gg||(Gg={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,i]=e.split(":"),o=parseInt(n,10),a=parseInt(i,10);if(isNaN(o)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*o+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=Iu(e,n),o=Iu(t,n);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(r)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Gg.AM};if(!t)return r;try{if("24hr"===e){const n=lp(t,e);r.minute=eh.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=Gg.AM,r.hour=0===i?"12":eh.padValue(i.toString())):(r.period=Gg.PM,r.hour=12===i?i.toString():eh.padValue((i-12).toString()))}else{const{hour:n,minute:i,period:o=""}=lp(t,e);r.hour=eh.padValue(n),r.minute=eh.padValue(i),r.period="am"===o.toLowerCase()?Gg.AM:Gg.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?eh.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return eh.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?eh.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?eh.padValue(n.toString()):13===n?eh.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Gg.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return eh.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:i=""}=lp(e,t),o=eh.padValue(r);let a=`${o}:${eh.padValue(n)}`;return"12hr"===t?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&o<12&&(o+=12),"am"===r&&12===o&&(o=0),cp(o,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const o=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=cp(e,n,t);o.push(r)}else{const t=cp(e,n);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const o=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),cp(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return cp(i,o,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",o=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<o)o=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&12!==o&&(o+=12),"am"===r&&12===o&&(o=0),60*o+i}}(Zg||(Zg={}));const ap=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},sp=e=>{const t=parseInt(e);return t>=0&&t<=59},lp=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!ap(r[0],t)||!sp(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!ap(r[0],t)||!sp(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},cp=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,dp=_.div`
    width: 100%;
`,up=_.div`
    ${_c["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${Ac["spacing-8"]} ${Ac["spacing-16"]};
    border-radius: ${Bc.sm};
    color: ${Fc["text-primary"]};
    border: ${Ic["width-010"]} ${Ic.solid};
    border-color: ${Fc["border-primary"]};
    background-color: ${Fc.bg};

    ${Rc.MaxWidth.sm} {
        padding: ${Ac["spacing-16"]};
    }

    ${e=>{if(e.$warn)return M`
                color: ${Fc["text-error"]};
                border-color: ${Fc["border-error"]};
            `}}
`,hp=_(up)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,gp=_(up)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:r,$right:n,$warn:i}=e;return M`
            /* style object will be converted to px */
            ${{top:t,left:r,right:n}}

            box-shadow: 0px 0px 4px 1px rgb(from ${i?Fc["border-error"]:Fc["border-primary-subtle"]} r g b / 50%);

            ${Rc.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,pp=_.div`
    font-weight: ${_c.Spec["weight-bold"]};
    margin-left: ${Ac["spacing-8"]};
    margin-right: ${Ac["spacing-24"]};

    ${Rc.MaxWidth.sm} {
        margin-right: ${Ac["spacing-48"]};
    }
`,fp=_.div`
    font-weight: ${_c.Spec["weight-semibold"]};
    margin-left: auto;
`,mp=_(X)`
    color: ${e=>e.$warn?Fc["icon-error"]:Fc["icon-primary"]};
`,bp=(e,t)=>t||Date.now()+1e3*(null!=e?e:0),vp=e=>Math.max(Math.round(e/1e3),0),yp=n=>{var{className:i,align:s="right",timer:l,timestamp:c,notifyTimer:d,offset:h,mobileOffset:g,show:p,fixed:f=!0,"data-testid":m,onFinish:b,onNotify:v,onTick:y}=n,x=gt(n,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const w=o(null),$=o(!1),[C,S]=a(0),[k,D]=a(0),[T,E]=a(0),[O,F]=a(!1),[_]=((e,t,r)=>{const[n,i]=a((()=>{const r=bp(e,t)-Date.now();return vp(r)}));u((()=>{if(!r)return;const n=bp(e,t),i=o(n);return()=>clearTimeout(i)}),[t,r,e]);const o=e=>{const t=()=>{const r=e-Date.now(),n=r%1e3,o=vp(r);if(i(o),0!==o)return setTimeout(t,n>500?n:n+1e3)};return t()};return[n]})(l,c,O),{ref:M,inView:I}=op({threshold:1,rootMargin:-1*C+"px 0px 0px 0px",initialInView:!0}),A=!f||I,B="number"==typeof d&&_<=d,R=j(),z=jc["sm-max"]({theme:R}),P=bu.useMediaQuery({maxWidth:z});u((()=>{F(p)}),[p]),u((()=>{0===_?W():"number"==typeof d&&_<=d&&(N(),H())}),[_]),u((()=>{const e=function(){var e,t;const r=null!==(e=null==h?void 0:h.top)&&void 0!==e?e:168,n=null!==(t=null==g?void 0:g.top)&&void 0!==t?t:80,i=P?n:r;return i}();S(e)}),[P,null==h?void 0:h.top,null==g?void 0:g.top]),u((()=>{if(w.current){const e=Jg(L,300);return L(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[w.current]),u((()=>{$.current=!1}),[l,p]);const L=()=>{if(!w.current)return;const e=w.current.getBoundingClientRect();E(e.x),D(e.right)},N=()=>{y&&y(_)},H=()=>{v&&!$.current&&($.current=!0,v())},W=()=>{F(!1),b&&b()};const Y=()=>{const{minutes:n,seconds:i}=Zg.toMinutesSeconds(_),o=1!==n?"mins":"min",a=1!==i?"secs":"sec";return t(r,{children:[e(mp,{$warn:B}),e(pp,{children:"Time left:"}),t(fp,{children:[n," ",o," ",String(i).padStart(2,"0")," ",a]})]})};return O||0===_?t(dp,Object.assign({className:i},x,{children:[e("div",{ref:M}),e(hp,{"data-testid":m,"data-id":"countdown-wrapper",ref:w,inert:A?void 0:"",$visible:A,$warn:B,children:Y()}),w.current&&!A&&(()=>{var t,r;const n=null!==(t=null==h?void 0:h.left)&&void 0!==t?t:"left"===s?T:void 0,i=null!==(r=null==h?void 0:h.right)&&void 0!==r?r:"right"===s?Math.floor(document.body.clientWidth-k):void 0;return e(gp,{"data-testid":m,"data-id":"fixed-countdown-wrapper",$warn:B,$top:C,$left:n,$right:i,children:Y()})})()]})):e(r,{})},xp=n=>i=>{switch(n){case"maintenance":return t(r,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const n=i,o=Math.floor(n.secondsLeft/60),a=n.secondsLeft%60;return t(r,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",o," minutes"," ",a," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var wp;!function(e){e.imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:o,height:a}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${jc["sm-max"]({theme:t})}px) 400px, (max-width: ${jc["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}}}(wp||(wp={}));const{imgAttributeHelper:$p}=wp,Cp={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},Sp={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},kp=Object.assign(Object.assign({},Cp),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),Dp=Object.assign(Object.assign({},Cp),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Tp=(e,t)=>new Map([["400",{img:$p(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:$p(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:$p(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:$p(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:$p(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:$p(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:$p(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:$p(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:$p(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:$p(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:$p(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:$p(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:$p(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:xp("inactivity")}],["maintenance",{img:$p(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:xp("maintenance")}],["no-item-found",{img:$p(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:$p(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:$p(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:$p(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:$p(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:$p(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),Ep=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Op=_.img`
    position: relative;
    width: 400px;
    height: auto;

    ${Rc.MaxWidth.sm} {
        width: 320px;
    }

    ${Rc.MaxWidth.xs} {
        width: 288px;
    }

    ${Rc.MaxWidth.xxs} {
        width: 240px;
    }
`,Fp=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,_p=_(ad.HeadingMD)`
    margin: ${Ac["spacing-32"]} 0 ${Ac["spacing-16"]};
    text-align: center;
`,Mp=_.div`
    color: ${Fc.text};
    text-align: center;

    ${Kd({textSize:"body-baseline"})}
`,Ip=_(Nd.Default)`
    margin: ${Ac["spacing-32"]} auto 0;
    width: 21rem;

    ${Rc.MaxWidth.sm} {
        width: 100%;
    }
`,Ap=r=>{var{type:n,img:i,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=r,u=gt(r,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=j(),g=((e,t,r)=>{switch(t){case"bookingsg":return Tp(Sp,r).get(e);case"ccube":return Tp(kp,r).get(e);case"mylegacy":return Tp(Dp,r).get(e);default:return Tp(Cp,r).get(e)}})(n,d||(h||Uc).resourceScheme,h),p=u["data-testid"]||"error-display",f=()=>{var e,t;switch(n){case"maintenance":{const t=l;return l&&t.dateString?null===(e=null==g?void 0:g.renderDescription)||void 0===e?void 0:e.call(g,t):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(t=null==g?void 0:g.renderDescription)||void 0===t?void 0:t.call(g,e):a||void 0}default:return a||void 0}};if(!g)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},g),i&&{img:i}),o&&{title:o}),f()&&{description:f()});return t(Ep,Object.assign({},u,{"data-testid":p,children:[e(Op,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?t(Fp,{children:[m.title&&("string"==typeof m.title?e(_p,{"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold",children:m.title}):m.title),m.description&&e(Mp,{"data-testid":`${p}--description`,"data-id":"error-display-description",children:"string"==typeof m.description?e("p",{children:m.description}):m.description})]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e(Ip,Object.assign({},t))})()]}))},Bp=M`
    outline-offset: -1px;
    outline: ${Ic["width-020"]} ${Ic.solid} ${Fc["border-focus"]};
`,jp=M`
    outline-color: ${Fc["border-focus"]};
`,Rp=M`
    outline-color: ${Fc["border-disabled"]};
`,zp=M`
    outline-color: ${Fc["border-error-focus"]};
`,Pp=_.div`
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};
    background: ${Fc.bg};

    :focus-within {
        ${Bp}
    }
    ${e=>e.$focused&&Bp}

    ${e=>e.$readOnly?M`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${jp}
                }
                ${e.$focused&&jp}
            `:e.$disabled?M`
                background: ${Fc["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Rp}
                }
                ${e.$focused&&Rp}
            `:e.$error?M`
                border-color: ${Fc["border-error"]};

                :focus-within {
                    ${zp}
                }
                ${e.$focused&&zp}
            `:void 0}
`,Lp=_(Pp)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Ac["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Np=_.input`
    ${e=>"small"===e.$variant?_c["body-md-regular"]:_c["body-baseline-regular"]}
    color: ${Fc.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Fc["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Fc["text-subtler"]};
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
`,Hp=_.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Ic["width-010"]} ${Ic.solid}
            ${Fc["border-focus"]};
        border-radius: ${Bc.sm};
    }
`,Wp=Fc.border,Yp=Fc.text,Vp=_.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${Ic["width-010"]} ${Ic.solid} ${Wp};
    border-radius: ${Bc.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Up=_.div`
    flex: 1;
`,Kp=_.table`
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

    ${e=>{if(e.$stickyHeader)return M`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,Xp=_.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${Ic["width-010"]} ${Ic.solid} ${Wp}`:"none"};
        }
    }
`,qp=_.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return M`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return M`
                position: sticky;
                left: 0;
            `}};
`,Gp=_(Hp)`
    ${_c["body-md-semibold"]}
    cursor: pointer;
    color: ${Fc["text-primary"]};
    transition: ${Mc["duration-150"]} ${Mc["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${Fc["text-hover"]};
    }
`,Zp=_.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&M`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${Bc.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${Ic["width-010"]} ${Ic.solid} ${Wp};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${Ic["width-010"]} ${Ic.solid} ${Wp};
    border-radius: 0 0 ${Bc.sm} ${Bc.sm};
    background-color: ${Fc["bg-selected"]};
    transition: all 300ms ease;
`,Qp=_.tr`
    background-color: ${Fc["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Wp};
`,Jp=_.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Yp};
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Wp};
    ${e=>{if(e.$isCheckbox)return M`
                width: 4rem;
            `}};
`,ef=_.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Yp};
        margin-left: 0.5rem;
    }
`,tf=_.tr`
    background-color: ${e=>e.$isSelected?M`
                ${Fc["bg-selected"]};
            `:e.$alternating?M`
                ${Fc["bg-strong"]};
            `:M`
                ${Fc.bg};
            `};
    border-top: ${Ic["width-010"]} ${Ic.solid} ${Wp};
    &:hover {
        ${e=>{if(e.$isSelectable)return M`
                    background-color: ${Fc["bg-hover-strong"]};
                `}};
    }
`,rf=_.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Yp};
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Wp};
`,nf=_(ad.BodyBL)`
    ${rd(2)}
    text-overflow: ellipsis;
`,of=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,af=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,sf=_(ad.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,lf=_.td`
    padding: 4rem 0;
`,cf=n=>{var{id:i,headers:s,rows:l,className:c,sortIndicators:d,alternatingRows:h,loadState:g="success",enableMultiSelect:f,selectedIds:m,disabledIds:b,enableActionBar:v,enableSelectAll:y,enableStickyHeader:x,emptyView:w,actionBarContent:$,renderCustomEmptyView:C,onHeaderClick:S,onSelect:k,onSelectAll:D,onClearSelectionClick:T}=n,E=gt(n,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const O=o(null),F=o(null),_=o(null),M=o(null),I=o(null),[A,B]=a(!1),[j,R]=a(!1),[z,P]=a(!1),[L,N]=a(!1),[H,W]=a(!1),{ref:Y,inView:V}=op(),U=p((()=>{if(!I.current||!M.current)return;const e=I.current.scrollHeight>I.current.clientHeight;B(e),e?M.current.style.transform="translateY(0)":re()}),[]);u((()=>{U()}),[]),hr({onResize:U});rh("scroll",(()=>{requestAnimationFrame((()=>{A?te():re()})),I.current&&P(I.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),u((()=>{ne()}),[l]);const K=()=>(null==m?void 0:m.length)===(null==l?void 0:l.length),X=e=>!!(null==m?void 0:m.includes(e)),Z=e=>!!h&&e%2==1,Q=e=>!!(null==b?void 0:b.includes(e)),J=e=>{if(E["data-testid"])return`${E["data-testid"]}-${e}`},ee=()=>s.length+(f?1:0),te=()=>{if(!I.current)return;const e=I.current.getBoundingClientRect();N(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},re=()=>{if(!(O.current&&F.current&&I.current&&M.current&&_.current))return;const e=F.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=O.current.getBoundingClientRect().height-_.current.clientHeight-32,n=Math.min(t,r);M.current.style.transform=`translateY(-${n}px)`}else M.current.style.transform="translateY(0)"},ne=()=>{O.current&&I.current&&W(O.current.clientHeight+(v?56:0)<I.current.clientHeight)},ie=r=>{const{fieldKey:n,label:i,clickable:o=!1,style:a}="string"==typeof r?{fieldKey:r,label:r,style:void 0}:r;return e(Jp,{"data-testid":J(`header-${n}`),$clickable:o,onClick:()=>o&&(null==S?void 0:S(n)),style:a,$isCheckbox:!1,children:t(ef,{children:["string"==typeof i?e(ad.BodyBL,{weight:"bold",children:i}):i,oe(n)]})},n)},oe=t=>{const n=null==d?void 0:d[t];return n?"asc"===n?e(q,{"data-testid":J(`header-${t}-arrowup`)}):e(G,{"data-testid":J(`header-${t}-arrowdown`)}):e(r,{})},ae=()=>e(Jp,{"data-testid":J("header-selection"),$clickable:!1,$isCheckbox:!0,children:e(of,{children:y&&e(Eg,{checked:K(),indeterminate:!!m&&0!==m.length&&!K(),onClick:()=>{D&&D(K())}})})}),se=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=r.id.toString(),a=r[i],s=`${o}-${i}`;return e(rf,{"data-testid":J(`row-${s}`),style:n,$isCheckbox:!1,children:"string"==typeof a||"number"==typeof a?e(nf,{children:a}):"function"==typeof a?a(r,{isSelected:X(o)}):a},s)},le=t=>e(rf,{"data-testid":J(`row-${t}-selection`),$isCheckbox:!0,children:e(of,{children:e(Eg,{checked:X(t),onClick:()=>{k&&k(t,!X(t))},disabled:Q(t)})})}),ce=()=>e(Ap,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(sf,{weight:"bold",children:w.title}):w.title:e(sf,{weight:"bold",children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(Vp,{id:i||"table-wrapper","data-testid":E["data-testid"]||"table",className:c,ref:I,onScroll:()=>{A&&I.current&&R(I.current.scrollTop+I.current.clientHeight>=I.current.scrollHeight)},children:[e(Up,{children:t(Kp,{$end:z,$scrollable:A,ref:O,$stickyHeader:x,children:[e("thead",{ref:_,children:t(Qp,{children:[f&&ae(),s.map(ie)]})}),e(Xp,{$showLastRowBottomBorder:H,children:"success"===g?!l||l.length<1?e("tr",{children:e(lf,{colSpan:ee(),children:C?C():ce()})}):e(r,{children:null==l?void 0:l.map(((e,r)=>t(tf,{"data-testid":J(`row-${e.id.toString()}`),$alternating:Z(r),$isSelectable:f,$isSelected:X(e.id.toString()),children:[f&&le(e.id.toString()),s.map((t=>se(t,e)))]},e.id.toString())))}):e("tr",{children:e("td",{colSpan:ee(),children:e(af,{children:"loading"===g&&e(uu,{})})})})})]})}),v&&m&&m.length>0&&(()=>{var r,n,i,o;const a=null!==(r=null==m?void 0:m.length)&&void 0!==r?r:0;return e(qp,{ref:M,$fixed:L,$left:null===(i=null===(n=null==O?void 0:O.current)||void 0===n?void 0:n.getBoundingClientRect())||void 0===i?void 0:i.left,$width:null===(o=null==O?void 0:O.current)||void 0===o?void 0:o.clientWidth,children:t(Zp,{$float:(A?!j:!V)||L,$scrollable:A,children:[e(ad.BodyMD,{weight:"semibold",children:`${a} item${a>1?"s":""} selected`}),e(Gp,{type:"button",onClick:T,children:"Clear selection"}),$]})})})(),e("div",{ref:e=>{F.current=e,Y(e)}})]})},df=e=>"small"===e?2.5:3,uf=_.div`
    position: relative;
    width: 100%;
    ${e=>{const t=df(e.$variant);return M`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,hf=M`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Ac["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>df(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Bc.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Fc["border-focus"]};
    }
`,gf=_.button`
    ${hf}
    cursor: pointer;
`,pf=_.div`
    ${hf}
`,ff=B`
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
`,mf=_.div`
    position: relative;
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};
    background: ${Fc.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Fc["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Fc["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?M`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:M`
                animation: ${ff} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?M`
                background: ${Fc["bg-disabled"]};

                ${gf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Fc.border};
                    box-shadow: none;
                }
            `:e.$readOnly?M`
                border: none;
                background: transparent !important;

                ${gf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?M`
                border-color: ${Fc["border-error"]};

                :focus-within {
                    border-color: ${Fc["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Fc["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;_.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Mc["duration-250"]} ${Mc["ease-default"]};
    margin-left: ${Ac["spacing-16"]};
`,_(be)`
    color: ${Fc.icon};
`;const bf=_.div`
    height: 1px;
    background: ${Fc.border};
    margin: 0 ${Ac["spacing-8"]};
`,vf=_.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return M`
                color: ${Fc["text-disabled"]};
            `}}
`,yf=_.div`
    ${e=>"small"===e.$variant?_c["body-md-regular"]:_c["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return M`
                    ${rd(1)}
                `}}
    overflow: hidden;
`,xf=_(yf)`
    color: ${Fc["text-subtler"]};
`,wf=({children:t,show:r,error:n,disabled:i,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=o(null);return rh("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;r&&s()}}),"document"),e(uf,{className:c,$variant:d,children:e(mf,{ref:u,error:n&&!r,disabled:i,$readOnly:l,expanded:r,"data-testid":a,children:t})})};var $f;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}($f||($f={}));const Cf=()=>{const[e,t]=a(void 0),r=xe();return u((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on($f.Change,e),r.events.emit($f.Ready),()=>r.events.off($f.Change,e)}),[r]),e},Sf=_.div`
    display: flex;
    flex-direction: column;
`,kf=e=>"right"===e?"bottom-end":"bottom-start",Df=({enabled:n,isOpen:i,onOpen:a,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:g=0,alignment:p="left",fitAvailableHeight:f,rootNode:m})=>{var b;const v=j(),y=jc["sm-max"]({theme:v}),x=o(null),w=o(null),{width:$=0}=hr({targetRef:x,handleHeight:!1}),C={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<y;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:k,context:D}=we({open:i,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!i?null==a||a():!e&&i&&(null==s||s(r))},whileElementsMounted:$e,placement:kf(p),middleware:[Ce(g),Se(),ke({limiter:De()}),Te({apply({availableHeight:e}){w.current&&Object.assign(w.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),C]}),T=Cf(),{isMounted:E,styles:O}=Ee(D,{initial:{opacity:0},open:{opacity:1},duration:300}),F=Oe(D,{enabled:n,toggle:h}),_=Fe(D,{enabled:n}),{getReferenceProps:M,getFloatingProps:I}=_e([F,_]);return t(r,{children:[e("div",Object.assign({ref:e=>{x.current=e,S.setReference(e)}},M(),{children:c()})),E&&e(Me,{root:m,children:e(Ie,{context:D,modal:!1,initialFocus:w,returnFocus:!1,children:e("div",Object.assign({ref:S.setFloating,style:Object.assign(Object.assign({},k),{zIndex:null!==(b=null!=u?u:T)&&void 0!==b?b:50})},I(),{children:e(Sf,{ref:w,style:Object.assign({},O),inert:O.opacity<1?"":void 0,children:d({elementWidth:$})})}))})})]})},Tf=_.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Ef=_.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return M`
                ${Of}, ${If} {
                    color: ${Fc["text-subtler"]};
                }
            `}}
`,Of=_(Np)`
    background: transparent;
    text-align: center;
`,Ff=_(Of)`
    width: 2rem;
    margin-right: ${Ac["spacing-4"]};
`,_f=_(Of)`
    width: 2.5rem;
`,Mf=_(Of)`
    width: 3rem;
    margin-left: ${Ac["spacing-4"]};
`,If=_.span`
    ${_c["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return M`
                color: ${Fc.text};
            `}}
`,Af=_.div`
    ${_c["body-baseline-regular"]}
    background-color: ${Fc.bg};
    color: ${Fc["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?M`
                background-color: ${Fc["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?M`
                display: none;
            `:void 0}
`;Iu.extend(Bu);const Bf=i.forwardRef((({disabled:r,readOnly:n,names:i,value:s,focused:l,hoverValue:c,placeholder:d,label:h,onChange:g,onFocus:p,onBlur:f,hideInputKeyboard:m},v)=>{const y=m?"none":"numeric",[x,w,$]=sh(""),[C,S,k]=sh(""),[D,T,E]=sh(""),[O,F]=a("none"),[_,M]=a(!1),I=o(null),A=o(null),B=o(null),j=o(null),[R,z,P]=V(c);u((()=>{var e;const[t="",r="",n=""]=V(s);w(t),S(r),T(n),t||r||n||!I.current||!I.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||F("none"),l&&(M(!0),I.current&&!I.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))}),[l]),b(v,(()=>({ref:I,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",r=""]=V(s);w(e),S(t),T(r)}})),[s]);const L=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;F(t)},H=e=>{const[t,r,n]=i,o={[t]:$.current,[r]:k.current,[n]:E.current},a=e.target.name,s=o[a],l=a!==n?eh.padValue(s,!0):s;switch(a){case t:o[t]=l,w(l);break;case r:o[r]=l,S(l)}const c=`${o[n]}-${o[r]}-${o[t]}`,d=Iu(c,"YYYY-MM-DD",!0).isValid(),u=!o[t]&&!o[r]&&!o[n];d&&s!==l&&g(c),I.current&&!I.current.contains(e.relatedTarget)&&(F("none"),null==f||f(u||d))},W=e=>{var t,r;if(c)return;const n=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),a={day:x,month:C,year:D};switch(n){case i[0]:a.day=o,w(o),2===o.length&&(null===(t=B.current)||void 0===t||t.focus());break;case i[1]:a.month=o,S(o),2===o.length&&(null===(r=j.current)||void 0===r||r.focus());break;case i[2]:a.year=o,T(o)}if(!a.day&&!a.month&&!a.year)return void g("");const s=`${a.year}-${a.month}-${a.day}`;Iu(s,"YYYY-MM-DD",!0).isValid()&&g(s)},Y=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(O===i[1]&&0===C.length&&(null===(t=A.current)||void 0===t||t.focus()),O===i[2]&&0===D.length&&(null===(r=B.current)||void 0===r||r.focus()))};function V(e){if(e){const t=Iu(new Date(e));return t.isValid()?[eh.padValue(t.date().toString()),eh.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(Tf,{role:"group","aria-label":h,onClick:()=>{var e;r||n||(M(!0),I.current&&!I.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),l||null==p||p(e))},children:[t(Ef,{ref:I,$hover:!!c,children:[e(Ff,{ref:A,name:i[0],maxLength:2,value:null!=R?R:x,onFocus:N,onBlur:H,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==i[0]||n?"DD":""}),e(If,{$inactive:0===x.length,children:"/"}),e(_f,{ref:B,name:i[1],maxLength:2,value:null!=z?z:C,onFocus:N,onBlur:H,onChange:W,onKeyDown:Y,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==i[1]||n?"MM":""}),e(If,{$inactive:0===C.length,children:"/"}),e(Mf,{ref:j,name:i[2],maxLength:4,value:null!=P?P:D,onFocus:N,onBlur:H,onChange:W,onKeyDown:Y,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==i[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&d)return e(Af,{$hide:_,$disabled:r,onMouseDown:L,children:d})})()]})})),jf=_(Lp)`
    height: 3rem;
`,Rf=t=>{var{minDate:r,maxDate:n,disabled:i,disabledDates:s,error:l,hideInputKeyboard:c,value:d,onChange:h,onFocus:g,onBlur:p,onYearMonthDisplayChange:f,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=gt(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=a(Qu.sanitizeInput(d)),[k,D]=a(Qu.sanitizeInput(d)),[T,E]=a(void 0),[O,F]=a(!1),[_,M]=a(!1),I=o(null),A=o(null);u((()=>{const e=Qu.sanitizeInput(d);S(e),D(e)}),[d]);const B=e=>{!y&&Qu.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:n})||(D(e),m||(N(e),S(e),e&&F(!1)))},j=e=>{var t;D(e),m||(N(e),S(e),e&&(null===(t=I.current)||void 0===t||t.focus(),F(!1)),T&&E(void 0))},R=()=>{b||i||(F(!0),_||(M(!0),g&&g()))},z=e=>{var t;_&&!O&&I.current&&!I.current.contains(e.relatedTarget)&&(null===(t=A.current)||void 0===t||t.resetInput(),D(C),M(!1),H())},P=e=>{E(e)},L=e=>{var t;switch(e){case"reset":D(C);break;case"confirmed":S(k),N(k)}null===(t=I.current)||void 0===t||t.focus(),F(!1)},N=e=>{h&&h(e)},H=()=>{p&&p()};return e(Df,{enabled:!b&&!i,isOpen:O,renderElement:()=>e(jf,Object.assign({tabIndex:-1,ref:I,onBlur:z,onFocus:R,$disabled:i,$readOnly:b,$focused:_,$error:l,id:v,"data-testid":$["data-testid"]},$,{children:e(Bf,{ref:A,disabled:i,onChange:B,readOnly:b,focused:O,names:["start-day","start-month","start-year"],value:k,hoverValue:T,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e(fg,{variant:"single",initialCalendarDate:k,withButton:m,value:k,disabledDates:s,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:P,onSelect:j,onDismiss:L,onYearMonthDisplayChange:f,width:t}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),D(C),F(!1),M(!1),H()},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=I.current)||void 0===t||t.focus(),D(C),F(!1)},customZIndex:x,offset:16,rootNode:w})},zf=_.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return M`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return M`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return M`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return M`
                    background-color: ${Fc.bg};
                    border: ${Ic["width-010"]} ${Ic.solid}
                        ${Fc["border-primary"]};
                    color: ${Fc["text-primary"]};

                    :hover {
                        background-color: ${Fc["bg-hover-neutral"]};
                    }
                `;case"light":return M`
                    background-color: ${Fc.bg};
                    border: ${Ic["width-010"]} ${Ic.solid}
                        ${Fc.border};
                    color: ${Fc["text-primary"]};

                    :hover {
                        background-color: ${Fc["bg-hover-neutral"]};
                    }
                `;default:return M`
                    background-color: ${Fc["bg-primary"]};
                    border: none;
                    color: ${Fc["text-inverse"]};

                    :hover {
                        background-color: ${Fc["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Fc["bg-disabled"]};
        border: ${Ic["width-010"]} ${Ic.solid}
            ${Fc["border-disabled"]};
        color: ${Fc["text-disabled"]};
        cursor: not-allowed;
    }
`,Pf=i.forwardRef(((t,r)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=gt(t,["data-testid","styleType","children","sizeType","type"]);return e(zf,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),Lf=_(Pf)`
    margin: ${Ac["spacing-8"]};
`,Nf=_.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Fc["bg-strong"]};
    border-radius: ${Bc.sm};
`,Hf=_(Nd.Default)`
    color: ${e=>e.$enableDateClick?Fc["text-primary"]:Fc.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${e=>{if(e.$enableDateClick)return M`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,Wf=r=>{var{selectedDate:n,minDate:i,maxDate:o,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:c,onLeftArrowClick:d,onRightArrowClick:u,onCalendarDateSelect:h,dropdownRootNode:g}=r,p=gt(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect","dropdownRootNode"]);const f=Zu.toDayjs(n),m=Zu.toDayjs(n).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),b=Zu.isSame(n,Iu())&&c?"Today":f.format(l?"ddd":"dddd"),[v,y]=a(!1),x=e=>{h&&h(e),y(!v)},w=()=>{y(!1),d(n)},$=()=>{y(!1),u(n)};return e(Df,{enabled:!s,isOpen:v,renderElement:()=>t(Nf,Object.assign({},p,{children:[e(Lf,{"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!i&&(Vu.isDisabledDay(f,void 0,i)||Zu.isSame(f,i)),"aria-label":"Previous day",onClick:w,styleType:"light",sizeType:"small",children:e($h,{})}),e(Hf,{onClick:()=>!!h&&!s&&y(!v),$enableDateClick:!!h&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!h||s,children:`${m}, ${b}`}),e(Lf,{"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!o&&(Vu.isDisabledDay(f,void 0,void 0,o)||Zu.isSame(f,o)),"aria-label":"Next day",onClick:$,styleType:"light",sizeType:"small",children:e(Ch,{})})]})),renderDropdown:({elementWidth:t})=>e(fg,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:o,onSelect:x,width:t}),onDismiss:()=>y(!1),onClose:()=>y(!1),offset:8,rootNode:g})},Yf=_.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return M`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${_c.Spec["body-size-baseline"]} -
                            ${Ac["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Ac["spacing-8"]};
                }
            `}}
`,Vf=_.div`
    width: 100%; // Force next flex item to break to next line
`,Uf=_.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Kf=_(Z)`
    color: ${Fc.icon};
    width: ${_c.Spec["body-size-baseline"]};
    height: ${_c.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Ac["spacing-8"]};
    align-self: center;
`,Xf=_.div`
    position: absolute;
    background: ${e=>e.$error?Fc["border-error-focus-strong"]:Fc["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Ac["spacing-8"]} - (${_c.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Mc["duration-350"]} ${Mc["ease-standard"]},
        opacity ${Mc["duration-350"]} ${Mc["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return M`
                    opacity: 1;
                `;case"end":return M`
                    left: calc(50% + ${Ac["spacing-16"]});
                    opacity: 1;
                `;case"none":return M`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return M`
                display: none;
            `}}
`,qf=({children:r,currentActive:n,error:i,className:o,wrap:a})=>{const[s,l]=r;return t(Yf,{className:o,$wrap:a,children:[e(Uf,{"data-id":"range-container-elem1-container",children:s}),e(Kf,{}),a&&e(Vf,{}),e(Uf,{"data-id":"range-container-elem2-container",children:l}),e(Xf,{"data-id":"range-container-indicator",$position:n,$error:i,$wrap:a})]})},Gf=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Zf=_(Lp)`
    ${e=>e.$wrap&&M`
            padding: ${Ac["spacing-12"]} ${Ac["spacing-16"]};
        `}
`,Qf=_.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&M`
            height: fit-content;
        `}
`,Jf={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},em=r=>{var{minDate:n,maxDate:i,disabled:s,disabledDates:l,error:c,hideInputKeyboard:d,value:h,valueEnd:g,onChange:f,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:k,zIndex:D,dropdownRootNode:T}=r,E=gt(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[O,F]=a(),[_,M]=a(void 0),[I,A]=a(!1),[B,j]=a(!1),R="week"===w,z="fixed-range"===w,[{selectedStart:P,selectedEnd:L,currentFocus:N,calendarOpen:H,isStartDirty:W,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[i,o]=x(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&Gf(r,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Jf,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:R?"none":z?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=o(!1),X=o(null),q=o(null),G=o(null),Z=o(null),Q=(({maxWidth:e,targetRef:t})=>{const[r,n]=a(!1);return hr({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:X});u((()=>{U.resetRange({start:Qu.sanitizeInput(h),end:Qu.sanitizeInput(g)})}),[h,g]),u((()=>{"start"===N?F(P):"end"===N&&F(L)}),[N]);const J=e=>{var t,r,n;"Enter"!==e.code||y||(P&&L?(U.done({start:P,end:L}),null==f||f(P,L)):(U.dismiss(),null===(t=X.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=Z.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(ge(e))return void(K.current=!0);if(U.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(y||L||!Y||(U.resetRange({start:"",end:""}),null==f||f("","")));if(!L)return void U.focus("end");if(Iu(e).isAfter(L,"day"))U.reselectEnd();else{if(Y)return y?void 0:(U.done({start:e,end:L}),void(null==f||f(e,L)));U.focus("end")}},te=e=>{var t,r;if(ge(e))return void(K.current=!0);if(Iu(e).isBefore(P,"day"))return U.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),null===(r=q.current)||void 0===r||r.setCalendarDate(e),e){if(P)return y?void 0:(U.done({start:P,end:e}),void(null==f||f(P,e)));U.focus("start")}else y||P||!W||(U.resetRange({start:"",end:""}),null==f||f("",""))},re=e=>{var t;if(ge(e))return void(K.current=!0);if(U.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(y?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==f||f("","")));const r=Iu(e).format("YYYY-MM-DD"),n=Iu(r).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(r),U.changeEnd(n),K.current=!1,y?void 0:(U.done({start:r,end:n}),void(null==f||f(r,n)))},ne=()=>{C||s||V||(U.focus("start"),null==m||m())},ie=e=>{var t,r;V&&!H&&X.current&&X.current.contains(e.relatedTarget)&&(U.blur(),A(!1),j(!1),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Z.current)||void 0===r||r.resetPlaceholder(),null==b||b())},oe=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),V||null==m||m())},ae=()=>{if(R){const e=Zu.toDayjs(P).startOf("week").format("YYYY-MM-DD");A(!0),j(!0),F(e)}},se=()=>{z&&(j(!0),F(P))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},ce=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=Z.current)||void 0===t||t.resetInput())},de=e=>{switch(w){case"week":(e=>{const t=Iu(e).startOf("week").format("YYYY-MM-DD"),r=Iu(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(t),U.changeEnd(r),K.current=!1,!y)U.done({start:t,end:r}),null==f||f(t,r)})(e);break;case"fixed-range":re(e);break;default:"start"===N?ee(e):"end"===N&&te(e)}},ue=e=>{var t;switch(null===(t=X.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":U.done({start:P,end:L}),null==f||f(P,L)}},he=e=>{M(e)},ge=e=>!k&&e&&Qu.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:i}),pe=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===N?_:void 0,end:"end"===N?_:void 0};break;case"week":if(!_)return;t={start:Iu(_).startOf("week").format("YYYY-MM-DD"),end:Iu(_).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!_)return;t={start:Iu(_).format("YYYY-MM-DD"),end:Iu(_).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Df,{enabled:!C&&!s,isOpen:H,onClose:()=>{var e,t;U.blur(),A(!1),j(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=Z.current)||void 0===t||t.resetPlaceholder(),null==b||b()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=X.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Z.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(Zf,Object.assign({ref:X,tabIndex:-1,onFocus:ne,onBlur:ie,$focused:V,$disabled:s,$readOnly:C,$error:c,$wrap:Q,id:S,"data-testid":E["data-testid"],onKeyDown:J},E,{children:t(qf,{currentActive:N,wrap:Q,error:c,children:[e(Qf,{$wrap:Q,children:e(Bf,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],value:P,disabled:s,readOnly:I||C,focused:"start"===N,hoverValue:pe("start"),onChange:z?re:ee,onFocus:oe("start"),onBlur:le,hideInputKeyboard:d})}),e(Qf,{$wrap:Q,children:e(Bf,{ref:Z,placeholder:"To",names:["end-day","end-month","end-year"],value:L,disabled:s,readOnly:B||C,focused:"end"===N,hoverValue:pe("end"),onChange:te,onFocus:oe("end"),onBlur:ce,hideInputKeyboard:d})})]})})),renderDropdown:({elementWidth:t})=>e(fg,{ref:q,variant:w,initialCalendarDate:O,withButton:y,value:P,endValue:L,selectWithinRange:W||Y,currentFocus:N,disabledDates:l,minDate:n,maxDate:i,allowDisabledSelection:k,onSelect:de,onDismiss:ue,onHover:he,onYearMonthDisplayChange:v,numberOfDays:$,width:t}),customZIndex:D,offset:16,rootNode:T})},tm=_.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:i,$lgStart:o,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:h,$xxsStart:g,$xxsSpan:p}=e;return M`
            grid-column: ${t||"auto"} / span ${r||1};

            ${sc.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${i||1};
            }

            ${sc.MaxWidth.lg} {
                grid-column: ${o||"auto"} / span ${a||1};
            }

            ${sc.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${sc.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${d||1};
            }

            ${sc.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${sc.MaxWidth.xxs} {
                grid-column: ${g||"auto"} / span ${p||1};
            }
        `}}
`,rm=i.forwardRef(((t,r)=>{const n=j(),{xxlCols:i,xlCols:o,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=gt(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(tm,Object.assign({ref:r},(()=>{const e=oc["xxl-column"]({theme:n}),t=oc["xl-column"]({theme:n}),r=oc["lg-column"]({theme:n}),u=oc["md-column"]({theme:n}),g=oc["sm-column"]({theme:n}),p=oc["xs-column"]({theme:n}),f=oc["xxs-column"]({theme:n}),m=h(i||o||a||s||l||c||d,e,"xxl"),b=h(o||a||s||l||c||d,t,"xl"),v=h(a||s||l||c||d,r,"lg"),y=h(s||l||c||d,u,"md"),x=h(l||c||d,g,"sm"),w=h(c||d,p,"xs"),$=h(d,f,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),nm={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},im=e=>Object.keys(nm).reduce(((t,r)=>{const n=nm[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),om={MaxWidth:im("max-width"),MinWidth:im("min-width")},am=nm,sm=_.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:i,$mobileStart:o,$mobileSpan:a}=e;return M`
            grid-column: ${t||"auto"} / span ${r||1};

            ${om.MaxWidth.tablet} {
                grid-column: ${n||"auto"} / span
                    ${i||1};
            }

            ${om.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${a||1};
            }
        `}}
`,lm=i.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:i,desktopCols:o}=t,a=gt(t,["mobileCols","tabletCols","desktopCols"]);return e(sm,Object.assign({ref:r},(()=>{const e=i||n,t=n,r=cm(o||i||n),a=cm(e),s=cm(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),cm=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let o;return o=i===n?1:i-n,{start:n,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},dm=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||Fc.border(e);const r=encodeURIComponent(t),n=e.$thickness||1;return M`
        background-color: transparent;
        height: ${n}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${n}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${r}" stroke-width="${n+1}" stroke-dasharray="4 4" /></svg>');
    `},um=_.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return M`
                    ${dm}
                `;case"solid":return M`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||Fc.border};
                `}}}
`,hm=t=>{var{thickness:r=1,lineStyle:n="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:c,mdCols:d,lgCols:u,xlCols:h,xxlCols:g,mobileCols:p,tabletCols:f,desktopCols:m}=t,b=gt(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==p||void 0!==f||void 0!==m;switch(i){case"flex":return e(um,Object.assign({className:a,$thickness:r,$lineStyle:n,$color:o},b));case"grid":return v?e(lm,Object.assign({className:a,mobileCols:p,tabletCols:f,desktopCols:m},b,{children:e(um,{$thickness:r,$lineStyle:n,$color:o})})):e(rm,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,r=c||t,n=d||r,i=u||n,o=h||i;return{xxlCols:g||o,xlCols:o,lgCols:i,mdCols:n,smCols:r,xsCols:t,xxsCols:e}})(),b,{children:e(um,{$thickness:r,$lineStyle:n,$color:o})}))}},gm=_.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return M`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,pm=_.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Fc["overlay-subtle"]:Fc["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=M`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=M`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=M`
                transition: none;
            `),t}}
`,fm=({show:t=!1,rootId:r,onOverlayClick:n,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:g,id:p})=>{const[f,m]=a(null),[b,v]=a(),[y]=a((()=>Ju.generate())),x=Be(),w=o(),$=o(null),C=s&&i.cloneElement(s,{ref:$}),S=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",k=null!=g?g:b?99999:99998;(e=>{const t=xe();u((()=>{if(!t)return;const r={zIndex:e};t.events.emit($f.Change,r)}),[t,e]),u((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit($f.Change,r)};return null==t||t.events.on($f.Ready,r),()=>null==t?void 0:t.events.off($f.Ready,r)}),[t,e])})(k),u((()=>(F(),m(E()),()=>{A(),M().length<1&&_("remove")})),[]),u((()=>{if(t){const e=O();T(e),I();const t=setTimeout((()=>{_("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{M().length<1&&_("remove")}),200);return()=>clearTimeout(e)}}),[t]);const T=e=>{w.current=e,v(e)},E=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>M().length>0,F=()=>{if(!document.getElementById(bm)){const e=document.createElement("style");e.id=bm;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${vm} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${vm}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},_=e=>{const t=document.body.classList.contains(vm);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(vm):document.body.classList.add(vm)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},I=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},B=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&h&&(e.preventDefault(),n())};return f?D.createPortal(e(gm,{id:S,"data-testid":S,$show:t,$zIndex:k,children:s&&e(je,{id:x,children:e(pm,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:c,$disableTransition:d,onClick:B,children:C})})}),f):null},mm=t=>e(Ae,{children:e(fm,Object.assign({},t))}),bm="lifesg-ds-overlay-stylesheet",vm="lifesg-ds-overlay-open",ym=_.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${Fc.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${Fc.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?M`
            right: 0;
            transition: all ${Mc["duration-800"]} ${Mc["ease-exit"]};
        `:M`
        right: -100%;
        transition: all ${Mc["duration-800"]} ${Mc["ease-default"]};
    `}

    width: 40%;
    border-top-left-radius: ${Bc.md};
    border-bottom-left-radius: ${Bc.md};
    overflow: hidden;

    ${Rc.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${Rc.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,xm=_.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${Ac["spacing-16"]};
    padding: ${Ac["spacing-32"]} ${Ac["spacing-16"]}
        ${Ac["spacing-16"]};
    background-color: ${Fc.bg};
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};

    ${Rc.MaxWidth.lg} {
        gap: ${Ac["spacing-8"]};
        padding: ${Ac["spacing-32"]} ${Ac["spacing-20"]}
            ${Ac["spacing-16"]};
    }
`,wm=_(td)`
    color: ${Fc.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${Fc["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,$m=_(ad.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Cm=_.div`
    flex: 1;
    overflow-y: auto;
`,Sm=r=>{var{children:n,heading:i,show:s,onClose:l,onOverlayClick:c}=r,d=gt(r,["children","heading","show","onClose","onOverlayClick"]);const[h,g]=a(s),[p]=a((()=>Ju.generate())),f=o(null);u((()=>{if(!s){const e=setTimeout((()=>g(!1)),500);return()=>clearTimeout(e)}g(!0)}),[s]);return e(mm,{show:h,enableOverlayClick:!0,onOverlayClick:c,children:t(ym,Object.assign({$show:s,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":p,onTransitionEnd:e=>{var t;"visibility"===e.propertyName&&s&&(null===(t=f.current)||void 0===t||t.focus())}},d,{children:[t(xm,{children:[e($m,{id:p,ref:f,tabIndex:-1,weight:"bold",children:i}),e(wm,{"aria-label":"Close drawer",onClick:l,focusHighlight:!1,children:e(ze,{"aria-hidden":!0})})]}),e(Cm,{children:n})]}))})},km=({className:t,progress:r,color:n,"data-testid":i})=>e(Dm,{className:t,$innerWidth:r,$color:n,"data-testid":i,children:e("progress",{value:100*r,max:100})}),Dm=_.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Fc["icon-primary-subtle"](e),M`
            border: ${Ic["width-010"]} ${Ic.solid} ${r};
            border-radius: ${Bc.sm};

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
`,Tm=_.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Rc.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Em=t=>{var{id:r="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=t,g=gt(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,f]=a(),[m,b]=a();u((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),u((()=>{var e,t;n&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const v=()=>{const e=.01*window.innerHeight;f(e)},y=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;f(e),b(window.visualViewport.offsetTop)}};return e(mm,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:l,zIndex:c,children:e(Tm,Object.assign({show:n,animationFrom:i,"data-testid":r,verticalHeight:p,offsetTop:m},g,{children:o}))})},Om=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Fc.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Rc.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Fm=_(td)`
    position: absolute;
    top: var(--close-button-top-inset, ${Ac["spacing-16"]});
    right: var(--close-button-right-inset, ${Ac["spacing-16"]});
    padding: 0;
    color: ${Fc.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Rc.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Ac["spacing-20"]});
    }
`,_m=r=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=r,s=gt(r,["id","children","onClose","showCloseButton"]);return t(Om,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Fm,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(ze,{})}),i]}))},Mm=Object.assign(Em,{Box:_m}),Im=M`
    ${e=>`\n        ${Rc.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${jc["sm-max"](e)}px)\n    `}
`,Am=M`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${jc["sm-max"](e)}px)\n    `}
`,Bm=_.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>M`
            ${Ic.Util["dashed-default"]({radius:Bc.sm,thickness:Ic["width-040"],colour:e.$disabled?Fc["border-disabled"]:Fc.border})}

            background-color: ${e.$disabled?Fc["bg-disabled"]:Fc.bg};
        `}
    height: 14.125rem;
`,jm=_(Nd.Default)`
    width: fit-content;
    margin: 0 ${Ac["spacing-20"]};

    :disabled {
        border-color: ${Fc["border-strong"]};
    }
`,Rm=_(Pf)`
    position: absolute;
    top: ${Ac["spacing-16"]};
    right: ${Ac["spacing-16"]};

    :disabled {
        border-color: ${Fc["border-strong"]};
    }
`,zm=_.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Ac["spacing-16"]}) * 2);
    height: 100%;
`,Pm=_.div`
    background: ${Fc["bg-primary-subtlest"]};
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};
    margin: 0 ${Ac["spacing-20"]};
    padding: ${Ac["spacing-16"]};
    display: flex;
    gap: ${Ac["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Lm=_(ad.BodySM)`
    margin-top: ${Ac["spacing-16"]};
`,Nm=_(Mm)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Hm=_.div`
    width: 100%;
    margin: auto;
    padding: ${Ac["layout-xxl"]} ${Ac["layout-sm"]};

    ${Im} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Wm=_(Mm.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Ac["spacing-16"]};

    ${Im} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Ac["spacing-8"]};
        --close-button-right-inset: ${Ac["spacing-20"]};
    }
`,Ym=_.h2`
    ${_c["body-baseline-semibold"]}
    color: ${Fc.text};
    margin-bottom: ${Ac["spacing-16"]};
    text-align: center;

    ${Im} {
        ${_c["body-md-semibold"]}
        margin: ${Ac["spacing-12"]} 0;
    }
`,Vm=_.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Bc.lg};
    overflow: hidden;

    ${Im} {
        border-radius: 0;
        flex: 1;
    }

    ${Am} {
        background: ${Fc["bg-strong"]};
    }
`,Um=_.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Fc["bg-stronger"]};
    margin: auto;

    ${Im} {
        aspect-ratio: 4/3;
    }
    ${Rc.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Am} {
        width: auto;
        height: 100%;
    }
`,Km=_.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Fc["border-strong"]};
    pointer-events: none;

    ${Im} {
        width: calc(100% - ${Ac["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Xm=_.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Ac["spacing-16"]};

    ${Rc.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Ac["spacing-16"]} ${Ac["spacing-24"]}
            ${Ac["spacing-48"]};
        gap: ${Ac["spacing-16"]};
    }

    ${Am} {
        flex-direction: row;
        margin: ${Ac["spacing-16"]} ${Ac["spacing-20"]};
    }
`,qm=_(Nd.Default)`
    width: 8.5rem;
    ${Rc.MaxWidth.sm} {
        width: 100%;
    }
    ${Am} {
        height: 2.5rem;
    }
`,Gm=_.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Zm=_.canvas`
    cursor: crosshair;
`,Qm=v((()=>pt(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.7aa9ea28.js")).ESignatureCanvas}})))),Jm=n=>{const{description:i,id:s,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:h,disabled:g}=n,p=gt(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[f,m]=a(!1),b=o(null),[v,x]=a(h),w=j(),$=jc["sm-max"]({theme:w}),C=bu.useMediaQuery({maxWidth:$}),S=bu.useMediaQuery({maxHeight:$,orientation:"landscape"}),k=()=>{var e;null===(e=b.current)||void 0===e||e.clear()},D=()=>{if(b.current){const e=b.current.export();x(e),m(!1),null==d||d(e)}};u((()=>{x(h)}),[h]);return t("div",Object.assign({},p,{children:[e(Bm,{$disabled:g,children:"number"==typeof l?t(Pm,{children:[c&&e(ad.BodyMD,{children:c}),e(km,{progress:null!=l?l:0,"data-testid":`${s||"e-signature"}-progress-bar`})]}):v?t(r,{children:[e(zm,{src:v,alt:"Signature preview"}),e(Rm,{styleType:"light",onClick:()=>m(!0),id:s,"aria-label":"Edit signature",disabled:g,children:e(Q,{})})]}):e(jm,{type:"button",styleType:"secondary","aria-label":"Add signature",id:s,onClick:()=>m(!0),disabled:g,children:"Add signature"})}),e(Nm,{"data-testid":"signature-modal",show:f,children:e(Hm,{children:t(Wm,{onClose:()=>m(!1),children:[e(Ym,{children:"Signature"}),e(Vm,{children:t(Um,{children:[e(Km,{}),e(y,{fallback:null,children:f&&e(Qm,{ref:b,baseImageDataURL:v})})]})}),t(Xm,{children:[e(qm,{as:S?yh.Small:yh.Default,type:"button",styleType:C&&!S?"light":"link",icon:e(J,{}),onClick:k,children:"Clear"}),e(qm,{as:S?Nd.Small:Nd.Default,type:"button",onClick:D,children:"Save"})]})]})})}),i?e(Lm,{children:i}):null]}))},eb="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",tb="Submit",rb="Rate your experience",nb=5,ib=_.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,ob=M`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Fc["icon-primary"]};
    ${ib}:focus-visible + & {
        outline: ${Ic["width-020"]} ${Ic.solid}
            ${Fc["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${Bc.sm};
    }
`,ab=_(Pe)`
    ${ob}
`,sb=_(Le)`
    ${ob}
`,lb=_.label`
    margin: 0 ${Ac["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${Rc.MaxWidth.md} {
        margin: 0 ${Ac["spacing-8"]};
    }
`,cb=_.div`
    display: flex;
    justify-content: center;
    margin: ${Ac["spacing-8"]} ${Ac["spacing-16"]};
`,db=r=>{const{description:n,rating:i,onRatingChange:o}=r,a=t=>{const r=`${t} star${1===t?"":"s"}`;return e(t<=i?sb:ab,{"aria-label":r})};return e(cb,{role:"radiogroup","aria-label":n,children:[...Array(nb)].map(((r,n)=>{const s=n+1;return t(lb,{children:[e(ib,{type:"radio",name:"star",checked:s===i,onChange:()=>(e=>{o(e)})(s)}),a(s)]},s)}))})},ub=_.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${Rc.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,hb=_.div`
    border-top: 1px solid ${Fc.border};
    border-bottom: 1px solid ${Fc.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${Rc.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,gb=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${Rc.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,pb=_(Nd.Default)`
    margin-top: 1rem;
    width: 100%;
`,fb=r=>{const{imgSrc:n,buttonLabel:i,description:o,rating:a,onRatingChange:s,onSubmit:l}=r,c=gt(r,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=n?n:eb,u=null!=o?o:rb;return t(hb,Object.assign({},c,{children:[d&&e(ub,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),t(gb,{children:[e(ad.HeadingSM,{as:"div",weight:"semibold",children:u}),e(db,{description:u,rating:a,onRatingChange:s}),e(pb,{disabled:!a,onClick:l,type:"button",children:null!=i?i:tb})]})]}))},mb=_.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return M`
                ${Ic.Util["dashed-default"]({radius:Bc.sm,thickness:Ic["width-040"],colour:Fc.border})}
                padding: ${Ac["spacing-32"]};

                ${Rc.MaxWidth.sm} {
                    padding: ${Ac["spacing-32"]} ${Ac["spacing-20"]};
                }
            `}}
`,bb=_.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Ac["spacing-32"]};
`,vb=_.p`
    ${_c["heading-xs-regular"]}
    color: ${Fc.text};
    margin-bottom: ${Ac["spacing-8"]};
`,yb=_.div`
    ${Kd({textSize:"heading-xs"})}
    color: ${Fc.text};
`,xb=_.p`
    ${_c["body-md-regular"]}
    color: ${Fc["text-subtler"]};
`,wb=_.div`
    ${Kd({textSize:"body-md"})}
    color: ${Fc["text-subtler"]};
`,$b=_.ul`
    list-style-type: none;
`;var Cb;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Cb||(Cb={}));const Sb=({src:t,alt:r,className:n,"data-testid":i})=>e("img",{src:t,alt:r||"",className:n,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),kb=_.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Ac["spacing-16"]};
    }
`,Db=_.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${Ac["spacing-16"]} ${Ac["spacing-32"]};
    cursor: pointer;

    background: ${Fc["bg-primary-subtlest"]};
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};

    ${Rc.MaxWidth.lg} {
        padding: ${Ac["spacing-16"]};
    }

    :hover {
        background: ${Fc["bg-hover"]};
    }
`,Tb=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Rc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return M`
                ${Rc.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,Eb=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,Ob=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Rc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,Fb=_.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${Ac["spacing-8"]};

    ${_c["body-md-regular"]}
    color: ${Fc.text};

    ${Rc.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${Ac["spacing-8"]};

        ${rd(2)}
    }
`,_b=_.div`
    ${_c["body-md-regular"]}
    color: ${Fc.text};

    ${Rc.MaxWidth.lg} {
        ${rd(2)}
    }
`;_(_b)`
    ${_c["body-md-regular"]}
    margin-top: ${Ac["spacing-4"]};
`;const Mb=_.div`
    ${_c["body-sm-semibold"]}
    color: ${Fc["text-error"]};
`,Ib=_(Mb)`
    margin-top: ${Ac["spacing-4"]};
    ${Rc.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,Ab=_(Mb)`
    display: none;
    visibility: hidden;
    ${Rc.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${Ac["spacing-8"]};
    }
`,Bb=_(Sd)`
    color: ${Fc["icon-primary"]};
`,jb=_.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${Ac["spacing-32"]};

    ${Rc.MaxWidth.lg} {
        margin-left: ${Ac["spacing-16"]};
    }
`,Rb=_(Pf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Ac["spacing-16"]};
    }
`,zb=_.div`
    width: auto;
    margin-right: ${Ac["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${Rc.MaxWidth.lg} {
        margin-right: ${Ac["spacing-16"]};
    }
`,Pb=_(Sb)`
    border-radius: ${Bc.sm};
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${Rc.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,Lb=w((({fileItem:n,onDownload:i})=>{const{id:s,name:l,size:c,errorMessage:d,thumbnailImageDataUrl:h,truncateText:g=!0,ready:p=!0}=n,[f,m]=a(!1),[b,v]=a(!1),y=Cb.formatFileSizeDisplay(c),x=j(),w=jc["sm-max"]({theme:x}),$=bu.useMediaQuery({maxWidth:w}),[C,S]=a(),k=o(null);u((()=>{k.current&&S($?D(l):l)}),[l,$]);const D=e=>{if(!g)return e;const t=k&&k.current?k.current.getBoundingClientRect().width:0;return eh.truncateTwoLines(e,t,16,1.5)},T=()=>t(r,{children:[e(_b,{ref:k,children:C}),b&&e(Ib,{children:d||"Something went wrong"})]});return e(kb,{"data-testid":s,children:t(Db,{onClick:()=>pt(void 0,void 0,void 0,(function*(){if(p&&!f){m(!0);try{v(!1),yield i(n)}catch(e){v(!0)}finally{m(!1)}}})),children:[(()=>{let n;return n=t(r,h?{children:[e(zb,{"data-testid":`${s}-thumbnail`,children:e(Pb,{"data-testid":`${s}-thumbnail-image`,src:h})}),t(Ob,{children:[e(Eb,{children:T()}),e(Fb,{children:y||"-"}),b&&e(Ab,{children:d||"Something went wrong"})]})]}:{children:[e(Eb,{children:T()}),e(Fb,{children:y||"-"}),b&&e(Ab,{children:d||"Something went wrong"})]}),e(Tb,{$hasThumbnail:!!h,children:n})})(),e(jb,{children:e(Rb,{"data-testid":`${s}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${l}`,children:f||!p?e(Bb,{size:16,"aria-hidden":!0}):e(ee,{"aria-hidden":!0})})})]})})})),Nb=({id:r,fileItems:n,title:i,description:o,onDownload:a,"data-testid":s,className:l,styleType:c="bordered"})=>{const d=e=>pt(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return t(mb,{id:r?`${r}-file-download`:"file-download",className:l,"data-testid":s,$border:"bordered"===c,children:[(i||o)&&t(bb,{children:[i?e("string"==typeof i?vb:yb,{children:i}):null,o?e("string"==typeof o?xb:wb,{children:o}):null]}),e($b,{children:n&&n.length>0&&n.map((t=>e(Lb,{fileItem:t,onDownload:d},t.id)))})]})},Hb=$({activeId:void 0,setActiveId:()=>{}});var Wb,Yb={exports:{}},Vb={exports:{}},Ub={};var Kb,Xb,qb,Gb,Zb,Qb,Jb,ev,tv,rv,nv,iv,ov,av,sv={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function lv(){return Xb||(Xb=1,"production"===process.env.NODE_ENV?Vb.exports=function(){if(Wb)return Ub;Wb=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:switch(e=e.type){case l:case c:case n:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case g:case a:return e;default:return h}}case r:return h}}}function x(e){return y(e)===c}return Ub.AsyncMode=l,Ub.ConcurrentMode=c,Ub.ContextConsumer=s,Ub.ContextProvider=a,Ub.Element=t,Ub.ForwardRef=d,Ub.Fragment=n,Ub.Lazy=p,Ub.Memo=g,Ub.Portal=r,Ub.Profiler=o,Ub.StrictMode=i,Ub.Suspense=u,Ub.isAsyncMode=function(e){return x(e)||y(e)===l},Ub.isConcurrentMode=x,Ub.isContextConsumer=function(e){return y(e)===s},Ub.isContextProvider=function(e){return y(e)===a},Ub.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Ub.isForwardRef=function(e){return y(e)===d},Ub.isFragment=function(e){return y(e)===n},Ub.isLazy=function(e){return y(e)===p},Ub.isMemo=function(e){return y(e)===g},Ub.isPortal=function(e){return y(e)===r},Ub.isProfiler=function(e){return y(e)===o},Ub.isStrictMode=function(e){return y(e)===i},Ub.isSuspense=function(e){return y(e)===u},Ub.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},Ub.typeOf=y,Ub}():Vb.exports=(Kb||(Kb=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:var f=e.type;switch(f){case l:case c:case n:case o:case i:case u:return f;default:var m=f&&f.$$typeof;switch(m){case s:case d:case p:case g:case a:return m;default:return h}}case r:return h}}}var x=l,w=c,$=s,C=a,S=t,k=d,D=n,T=p,E=g,O=r,F=o,_=i,M=u,I=!1;function A(e){return y(e)===c}sv.AsyncMode=x,sv.ConcurrentMode=w,sv.ContextConsumer=$,sv.ContextProvider=C,sv.Element=S,sv.ForwardRef=k,sv.Fragment=D,sv.Lazy=T,sv.Memo=E,sv.Portal=O,sv.Profiler=F,sv.StrictMode=_,sv.Suspense=M,sv.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},sv.isConcurrentMode=A,sv.isContextConsumer=function(e){return y(e)===s},sv.isContextProvider=function(e){return y(e)===a},sv.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},sv.isForwardRef=function(e){return y(e)===d},sv.isFragment=function(e){return y(e)===n},sv.isLazy=function(e){return y(e)===p},sv.isMemo=function(e){return y(e)===g},sv.isPortal=function(e){return y(e)===r},sv.isProfiler=function(e){return y(e)===o},sv.isStrictMode=function(e){return y(e)===i},sv.isSuspense=function(e){return y(e)===u},sv.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},sv.typeOf=y}()),sv)),Vb.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function cv(){if(Gb)return qb;Gb=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return qb=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(n,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},qb}function dv(){if(Qb)return Zb;Qb=1;return Zb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function uv(){return ev?Jb:(ev=1,Jb=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var hv=lv();Yb.exports=function(){if(iv)return nv;iv=1;var e=lv(),t=cv(),r=dv(),n=uv(),i=function(){if(rv)return tv;rv=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=dv(),r={},n=uv();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(n(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var h=l?l():"";e("Failed "+a+" type: "+d.message+(null!=h?h:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},tv=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),nv=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,i,o,a){if("function"!=typeof e)return new g("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new g("Invalid "+o+" `"+a+"` of type `"+v(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,i){var o=e[t];return s(o)?null:new g("Invalid "+n+" `"+i+"` of type `"+v(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,i,o){var a=t[r];return e.isValidElementType(a)?null:new g("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||d;return new g("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,i){return b(e[t])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,i,o,a,s){if("function"!=typeof e)return new g("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=v(l);if("object"!==c)return new g("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,o,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new g("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(i)+" at index "+t+"."),a}return p((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new g("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,i,o,a){var s=t[n],l=v(s);if("object"!==l)return new g("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(i,o,a,c,y(d));var u=d(s,c,i,o,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return p((function(i,o,a,s,l){var c=i[o],d=v(c);if("object"!==d)return new g("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var h in u){var p=e[h];if(n(e,h)&&"function"!=typeof p)return m(a,s,l,h,y(p));if(!p)return new g("Invalid "+s+" `"+l+"` key `"+h+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=p(c,h,a,s,l+"."+h,r);if(f)return f}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function i(i,a,s,c,u,h,p){if(c=c||d,h=h||s,p!==r){if(l){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(o("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?i?null===a[s]?new g("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new g("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,u,h)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function f(e){return p((function(t,r,n,i,o,a){var s=t[r];return v(s)!==e?new g("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,i){return new g((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var i=r.value;if(i&&!b(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,u.checkPropTypes=i,u.resetWarningCache=i.resetWarningCache,u.PropTypes=u,u},nv}()(hv.isElement,!0)}else Yb.exports=function(){if(av)return ov;av=1;var e=dv();function t(){}function r(){}return r.resetWarningCache=t,ov=function(){function n(t,r,n,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o}}()();var gv=Xo(Yb.exports),pv=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function fv(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=pv.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var mv=[".DS_Store","Thumbs.db"];function bv(e){return"object"==typeof e&&null!==e}function vv(e){return $v(e.target.files).map((function(e){return fv(e)}))}function yv(e){return pt(this,void 0,void 0,(function(){return ft(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return fv(e)}))]}}))}))}function xv(e,t){return pt(this,void 0,void 0,(function(){var r;return ft(this,(function(n){switch(n.label){case 0:return e.items?(r=$v(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Cv))]):[3,2];case 1:return[2,wv(Sv(n.sent()))];case 2:return[2,wv($v(e.files).map((function(e){return fv(e)})))]}}))}))}function wv(e){return e.filter((function(e){return-1===mv.indexOf(e.name)}))}function $v(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Cv(e){if("function"!=typeof e.webkitGetAsEntry)return kv(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Tv(t):kv(e)}function Sv(e){return e.reduce((function(e,t){return bt(bt([],mt(e),!1),mt(Array.isArray(t)?Sv(t):[t]),!1)}),[])}function kv(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=fv(t);return Promise.resolve(r)}function Dv(e){return pt(this,void 0,void 0,(function(){return ft(this,(function(t){return[2,e.isDirectory?Tv(e):Ev(e)]}))}))}function Tv(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function i(){var o=this;t.readEntries((function(t){return pt(o,void 0,void 0,(function(){var o,a,s;return ft(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(Dv)),n.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function Ev(e){return pt(this,void 0,void 0,(function(){return ft(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=fv(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function Ov(e){return function(e){if(Array.isArray(e))return Bv(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Av(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Fv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fv(Object(r),!0).forEach((function(t){Mv(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fv(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Mv(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Iv(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||Av(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Av(e,t){if(e){if("string"==typeof e)return Bv(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Bv(e,t):void 0}}function Bv(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var jv=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Rv=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},zv=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Pv={code:"too-many-files",message:"Too many files"};function Lv(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0}(e,t);return[r,r?null:jv(t)]}function Nv(e,t,r){if(Hv(e.size))if(Hv(t)&&Hv(r)){if(e.size>r)return[!1,Rv(r)];if(e.size<t)return[!1,zv(t)]}else{if(Hv(t)&&e.size<t)return[!1,zv(t)];if(Hv(r)&&e.size>r)return[!1,Rv(r)]}return[!0,null]}function Hv(e){return null!=e}function Wv(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Yv(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Vv(e){e.preventDefault()}function Uv(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return t.some((function(t){return!Wv(e)&&t&&t.apply(void 0,[e].concat(n)),Wv(e)}))}}function Kv(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Xv(e){return/^.*\.[\w]+$/.test(e)}var qv=["children"],Gv=["open"],Zv=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Qv=["refKey","onChange","onClick"];function Jv(e){return function(e){if(Array.isArray(e))return ry(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ty(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ey(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||ty(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ty(e,t){if(e){if("string"==typeof e)return ry(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ry(e,t):void 0}}function ry(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ny(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function iy(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ny(Object(r),!0).forEach((function(t){oy(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ny(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function oy(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ay(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var sy=g((function(e,t){var r=e.children,n=dy(ay(e,qv)),o=n.open,a=ay(n,Gv);return b(t,(function(){return{open:o}}),[o]),i.createElement(C,null,r(iy(iy({},a),{},{open:o})))}));sy.displayName="Dropzone";var ly={disabled:!1,getFilesFromEvent:function(e){return pt(this,void 0,void 0,(function(){return ft(this,(function(t){return bv(e)&&bv(e.dataTransfer)?[2,xv(e.dataTransfer,e.type)]:function(e){return bv(e)&&bv(e.target)}(e)?[2,vv(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,yv(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};sy.defaultProps=ly,sy.propTypes={children:gv.func,accept:gv.objectOf(gv.arrayOf(gv.string)),multiple:gv.bool,preventDropOnDocument:gv.bool,noClick:gv.bool,noKeyboard:gv.bool,noDrag:gv.bool,noDragEventsBubbling:gv.bool,minSize:gv.number,maxSize:gv.number,maxFiles:gv.number,disabled:gv.bool,getFilesFromEvent:gv.func,onFileDialogCancel:gv.func,onFileDialogOpen:gv.func,useFsAccessApi:gv.bool,autoFocus:gv.bool,onDragEnter:gv.func,onDragLeave:gv.func,onDragOver:gv.func,onDrop:gv.func,onDropAccepted:gv.func,onDropRejected:gv.func,onError:gv.func,validator:gv.func};var cy={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function dy(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=iy(iy({},ly),e),r=t.accept,n=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,s=t.minSize,l=t.multiple,c=t.maxFiles,d=t.onDragEnter,h=t.onDragLeave,g=t.onDragOver,f=t.onDrop,b=t.onDropAccepted,v=t.onDropRejected,y=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,k=t.noClick,D=t.noKeyboard,T=t.noDrag,E=t.noDragEventsBubbling,O=t.onError,F=t.validator,_=m((function(){return function(e){if(Hv(e))return Object.entries(e).reduce((function(e,t){var r=Iv(t,2),n=r[0],i=r[1];return[].concat(Ov(e),[n],Ov(i))}),[]).filter((function(e){return Kv(e)||Xv(e)})).join(",")}(r)}),[r]),M=m((function(){return function(e){return Hv(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Iv(e,2),r=t[0],n=t[1],i=!0;return Kv(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(n)&&n.every(Xv)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var r=Iv(t,2),n=r[0],i=r[1];return _v(_v({},e),{},Mv({},n,i))}),{})}]:e}(r)}),[r]),I=m((function(){return"function"==typeof w?w:hy}),[w]),A=m((function(){return"function"==typeof y?y:hy}),[y]),B=o(null),j=o(null),R=ey(x(uy,cy),2),z=R[0],P=R[1],L=z.isFocused,N=z.isFileDialogActive,H=o("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){j.current&&(j.current.files.length||(P({type:"closeDialog"}),A()))}),300)};u((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[j,N,A,H]);var Y=o([]),V=function(e){B.current&&B.current.contains(e.target)||(e.preventDefault(),Y.current=[])};u((function(){return S&&(document.addEventListener("dragover",Vv,!1),document.addEventListener("drop",V,!1)),function(){S&&(document.removeEventListener("dragover",Vv),document.removeEventListener("drop",V))}}),[B,S]),u((function(){return!n&&C&&B.current&&B.current.focus(),function(){}}),[B,C,n]);var U=p((function(e){O?O(e):console.error(e)}),[O]),K=p((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[].concat(Jv(Y.current),[e.target]),Yv(e)&&Promise.resolve(i(e)).then((function(t){if(!Wv(e)||E){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=Iv(Lv(e,r),1)[0],o=Iv(Nv(e,n,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:_,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:F});P({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return U(e)}))}),[i,d,U,E,_,s,a,l,c,F]),X=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=Yv(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&g&&g(e),!1}),[g,E]),q=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=Y.current.filter((function(e){return B.current&&B.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),Y.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Yv(e)&&h&&h(e))}),[B,h,E]),G=p((function(e,t){var r=[],n=[];e.forEach((function(e){var t=ey(Lv(e,_),2),i=t[0],o=t[1],l=ey(Nv(e,s,a),2),c=l[0],d=l[1],u=F?F(e):null;if(i&&c&&!u)r.push(e);else{var h=[o,d];u&&(h=h.concat(u)),n.push({file:e,errors:h.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&c>=1&&r.length>c)&&(r.forEach((function(e){n.push({file:e,errors:[Pv]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:n,type:"setFiles"}),f&&f(r,n,t),n.length>0&&v&&v(n,t),r.length>0&&b&&b(r,t)}),[P,l,_,s,a,c,f,b,v,F]),Z=p((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[],Yv(e)&&Promise.resolve(i(e)).then((function(t){Wv(e)&&!E||G(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[i,G,U,E]),Q=p((function(){if(H.current){P({type:"openDialog"}),I();var e={multiple:l,types:M};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){G(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,j.current?(j.current.value=null,j.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else j.current&&(P({type:"openDialog"}),I(),j.current.value=null,j.current.click())}),[P,I,A,$,G,U,M,l]),J=p((function(e){B.current&&B.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),Q()))}),[B,Q]),ee=p((function(){P({type:"focus"})}),[]),te=p((function(){P({type:"blur"})}),[]),re=p((function(){k||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?Q():setTimeout(Q,0))}),[k,Q]),ne=function(e){return n?null:e},ie=function(e){return D?null:ne(e)},oe=function(e){return T?null:ne(e)},ae=function(e){E&&e.stopPropagation()},se=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,i=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,h=e.onDrop,g=ay(e,Zv);return iy(iy(oy({onKeyDown:ie(Uv(o,J)),onFocus:ie(Uv(a,ee)),onBlur:ie(Uv(s,te)),onClick:ne(Uv(l,re)),onDragEnter:oe(Uv(c,K)),onDragOver:oe(Uv(d,X)),onDragLeave:oe(Uv(u,q)),onDrop:oe(Uv(h,Z)),role:"string"==typeof i&&""!==i?i:"presentation"},r,B),n||D?{}:{tabIndex:0}),g)}}),[B,J,ee,te,re,K,X,q,Z,D,T,n]),le=p((function(e){e.stopPropagation()}),[]),ce=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,i=e.onClick,o=ay(e,Qv);return iy(iy({},oy({accept:_,multiple:l,type:"file",style:{display:"none"},onChange:ne(Uv(n,Z)),onClick:ne(Uv(i,le)),tabIndex:-1},r,j)),o)}}),[j,r,l,Z,n]);return iy(iy({},z),{},{isFocused:L&&!n,getRootProps:se,getInputProps:ce,rootRef:B,inputRef:j,open:ne(Q)})}function uy(e,t){switch(t.type){case"focus":return iy(iy({},e),{},{isFocused:!0});case"blur":return iy(iy({},e),{},{isFocused:!1});case"openDialog":return iy(iy({},cy),{},{isFileDialogActive:!0});case"closeDialog":return iy(iy({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return iy(iy({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return iy(iy({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return iy({},cy);default:return e}}function hy(){}const gy=_.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return M`
                ${Ic.Util["dashed-default"]({radius:Bc.sm,thickness:Ic["width-040"],colour:Fc.border})}
                padding: ${Ac["spacing-32"]};

                ${Rc.MaxWidth.sm} {
                    padding: ${Ac["spacing-32"]} ${Ac["spacing-20"]};
                }
            `}}
`,py=_.input`
    display: none;
`,fy=_.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${Fc["bg-primary-subtler"]};
    ${Ic.Util["dashed-default"]({radius:Bc.sm,thickness:Ic["width-040"],colour:Fc["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,my=_(ad.BodyMD)`
    color: ${Fc["text-primary"]};
    text-align: center;
`,by=_(Ne)`
    color: ${Fc["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,vy=g((({children:r,accept:n,capture:i,multiple:a,id:s,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":g},p)=>{const f=o(null),{getRootProps:m,isDragActive:v}=dy({onDrop:h,noClick:!0,disabled:u});b(p,(()=>Object.assign(Object.assign({},f.current),{openFileDialog:()=>{f.current&&(f.current.value="",f.current.click())}})));return t(gy,Object.assign({id:s,"data-testid":g||"dropzone",$border:d,className:l},m(),{children:[e(py,{type:"file",name:c,ref:f,tabIndex:-1,"aria-hidden":!0,accept:n,capture:i,multiple:a,"data-testid":g?`${g}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),r,v&&t(fy,{children:[e(by,{}),e(my,{weight:"semibold",children:"Drop files here"})]})]}))}));const yy="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function xy(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function wy(e){return"nodeType"in e}function $y(e){var t,r;return e?xy(e)?e:wy(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Cy(e){const{Document:t}=$y(e);return e instanceof t}function Sy(e){return!xy(e)&&e instanceof $y(e).HTMLElement}function ky(e){return e instanceof $y(e).SVGElement}function Dy(e){return e?xy(e)?e.document:wy(e)?Cy(e)?e:Sy(e)||ky(e)?e.ownerDocument:document:document:document}const Ty=yy?h:u;function Ey(e){const t=o(e);return Ty((()=>{t.current=e})),p((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function Oy(e,t){void 0===t&&(t=[e]);const r=o(e);return Ty((()=>{r.current!==e&&(r.current=e)}),t),r}function Fy(e,t){const r=o();return m((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function _y(e){const t=Ey(e),r=o(null),n=p((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function My(e){const t=o();return u((()=>{t.current=e}),[e]),t.current}let Iy={};function Ay(e,t){return m((()=>{if(t)return t;const r=null==Iy[e]?0:Iy[e]+1;return Iy[e]=r,e+"-"+r}),[e,t])}function By(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,i]of n){const n=t[r];null!=n&&(t[r]=n+e*i)}return t}),{...t})}}const jy=By(1),Ry=By(-1);function zy(e){if(!e)return!1;const{KeyboardEvent:t}=$y(e.target);return t&&e instanceof t}function Py(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=$y(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Ly=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[Ly.Translate.toString(e),Ly.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),Ny="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Hy(e){return e.matches(Ny)?e:e.querySelector(Ny)}const Wy={display:"none"};function Yy(e){let{id:t,value:r}=e;return i.createElement("div",{id:t,style:Wy},r)}function Vy(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return i.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const Uy=$(null);const Ky={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Xy={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function qy(e){let{announcements:t=Xy,container:r,hiddenTextDescribedById:n,screenReaderInstructions:o=Ky}=e;const{announce:s,announcement:l}=function(){const[e,t]=a("");return{announce:p((e=>{null!=e&&t(e)}),[]),announcement:e}}(),c=Ay("DndLiveRegion"),[d,h]=a(!1);if(u((()=>{h(!0)}),[]),function(e){const t=f(Uy);u((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(m((()=>({onDragStart(e){let{active:r}=e;s(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&s(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;s(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;s(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;s(t.onDragCancel({active:r,over:n}))}})),[s,t])),!d)return null;const g=i.createElement(i.Fragment,null,i.createElement(Yy,{id:n,value:o.draggable}),i.createElement(Vy,{id:c,announcement:l}));return r?O(g,r):g}var Gy;function Zy(){}function Qy(e,t){return m((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Gy||(Gy={}));const Jy=Object.freeze({x:0,y:0});function ex(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function tx(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function rx(e){let{left:t,top:r,height:n,width:i}=e;return[{x:t,y:r},{x:t+i,y:r},{x:t,y:r+n},{x:t+i,y:r+n}]}function nx(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function ix(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-n,s=o-r;if(n<i&&r<o){const r=t.width*t.height,n=e.width*e.height,i=a*s;return Number((i/(r+n-i)).toFixed(4))}return 0}const ox=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=[];for(const e of n){const{id:n}=e,o=r.get(n);if(o){const r=ix(o,t);r>0&&i.push({id:n,data:{droppableContainer:e,value:r}})}}return i.sort(tx)};function ax(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Jy}function sx(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const lx=sx(1);const cx={ignoreTransform:!1};function dx(e,t){void 0===t&&(t=cx);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=$y(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:i,scaleY:o,x:a,y:s}=n,l=e.left-a-(1-i)*parseFloat(r),c=e.top-s-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:i,width:o,height:a,bottom:s,right:l}=r;return{top:n,left:i,width:o,height:a,bottom:s,right:l}}function ux(e){return dx(e,{ignoreTransform:!0})}function hx(e,t){const r=[];return e?function n(i){if(null!=t&&r.length>=t)return r;if(!i)return r;if(Cy(i)&&null!=i.scrollingElement&&!r.includes(i.scrollingElement))return r.push(i.scrollingElement),r;if(!Sy(i)||ky(i))return r;if(r.includes(i))return r;const o=$y(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=$y(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(i,o)&&r.push(i),function(e,t){return void 0===t&&(t=$y(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?r:n(i.parentNode)}(e):r}function gx(e){const[t]=hx(e,1);return null!=t?t:null}function px(e){return yy&&e?xy(e)?e:wy(e)?Cy(e)||e===Dy(e).scrollingElement?window:Sy(e)?e:null:null:null}function fx(e){return xy(e)?e.scrollX:e.scrollLeft}function mx(e){return xy(e)?e.scrollY:e.scrollTop}function bx(e){return{x:fx(e),y:mx(e)}}var vx;function yx(e){return!(!yy||!e)&&e===document.scrollingElement}function xx(e){const t={x:0,y:0},r=yx(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(vx||(vx={}));const wx={x:.2,y:.2};function $x(e,t,r,n,i){let{top:o,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===i&&(i=wx);const{isTop:c,isBottom:d,isLeft:u,isRight:h}=xx(e),g={x:0,y:0},p={x:0,y:0},f=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+f?(g.y=vx.Backward,p.y=n*Math.abs((t.top+f-o)/f)):!d&&l>=t.bottom-f&&(g.y=vx.Forward,p.y=n*Math.abs((t.bottom-f-l)/f)),!h&&s>=t.right-m?(g.x=vx.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(g.x=vx.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:g,speed:p}}function Cx(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:i}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Sx(e){return e.reduce(((e,t)=>jy(e,bx(t))),Jy)}const kx=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+fx(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+mx(t)),0)}]];class Dx{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=hx(t),n=Sx(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of kx)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(r),a=n[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Tx{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function Ex(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var Ox,Fx;function _x(e){e.preventDefault()}function Mx(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(Ox||(Ox={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(Fx||(Fx={}));const Ix={start:[Fx.Space,Fx.Enter],cancel:[Fx.Esc],end:[Fx.Space,Fx.Enter]},Ax=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case Fx.Right:return{...r,x:r.x+25};case Fx.Left:return{...r,x:r.x-25};case Fx.Down:return{...r,y:r.y+25};case Fx.Up:return{...r,y:r.y-25}}};let Bx=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Tx(Dy(t)),this.windowListeners=new Tx($y(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ox.Resize,this.handleCancel),this.windowListeners.add(Ox.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(Ox.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=dx),!e)return;const{top:r,left:n,bottom:i,right:o}=t(e);gx(e)&&(i<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(Jy)}handleKeyDown(e){if(zy(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:i=Ix,coordinateGetter:o=Ax,scrollBehavior:a="smooth"}=n,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:Jy;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=Ry(d,c),n={x:0,y:0},{scrollableAncestors:i}=r.current;for(const r of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:h}=xx(r),g=Cx(r),p={x:Math.min(i===Fx.Right?g.right-g.width/2:g.right,Math.max(i===Fx.Right?g.left:g.left+g.width/2,d.x)),y:Math.min(i===Fx.Down?g.bottom-g.height/2:g.bottom,Math.max(i===Fx.Down?g.top:g.top+g.height/2,d.y))},f=i===Fx.Right&&!s||i===Fx.Left&&!l,m=i===Fx.Down&&!c||i===Fx.Up&&!o;if(f&&p.x!==d.x){const e=r.scrollLeft+t.x,o=i===Fx.Right&&e<=u.x||i===Fx.Left&&e>=h.x;if(o&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=o?r.scrollLeft-e:i===Fx.Right?r.scrollLeft-u.x:r.scrollLeft-h.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==d.y){const e=r.scrollTop+t.y,o=i===Fx.Down&&e<=u.y||i===Fx.Up&&e>=h.y;if(o&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=o?r.scrollTop-e:i===Fx.Down?r.scrollTop-u.y:r.scrollTop-h.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,jy(Ry(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function jx(e){return Boolean(e&&"distance"in e)}function Rx(e){return Boolean(e&&"delay"in e)}Bx.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=Ix,onActivation:i}=t,{active:o}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class zx{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=$y(e);return e instanceof t?e:Dy(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=Dy(o),this.documentListeners=new Tx(this.document),this.listeners=new Tx(r),this.windowListeners=new Tx($y(o)),this.initialCoordinates=null!=(n=Py(i))?n:Jy,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Ox.Resize,this.handleCancel),this.windowListeners.add(Ox.DragStart,_x),this.windowListeners.add(Ox.VisibilityChange,this.handleCancel),this.windowListeners.add(Ox.ContextMenu,_x),this.documentListeners.add(Ox.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Rx(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(jx(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Ox.Click,Mx,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ox.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!n)return;const s=null!=(t=Py(e))?t:Jy,l=Ry(n,s);if(!r&&a){if(jx(a)){if(null!=a.tolerance&&Ex(l,a.tolerance))return this.handleCancel();if(Ex(l,a.distance))return this.handleStart()}return Rx(a)&&Ex(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Fx.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Px={move:{name:"pointermove"},end:{name:"pointerup"}};class Lx extends zx{constructor(e){const{event:t}=e,r=Dy(t.target);super(e,Px,r)}}Lx.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const Nx={move:{name:"mousemove"},end:{name:"mouseup"}};var Hx;!function(e){e[e.RightClick=2]="RightClick"}(Hx||(Hx={}));let Wx=class extends zx{constructor(e){super(e,Nx,Dy(e.event.target))}};Wx.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==Hx.RightClick&&(null==n||n({event:r}),!0)}}];const Yx={move:{name:"touchmove"},end:{name:"touchend"}};class Vx extends zx{constructor(e){super(e,Yx)}static setup(){return window.addEventListener(Yx.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Yx.move.name,e)};function e(){}}}var Ux,Kx;function Xx(e){let{acceleration:t,activator:r=Ux.Pointer,canScroll:n,draggingRect:i,enabled:a,interval:s=5,order:l=Kx.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:h,delta:g,threshold:f}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=My(t);return Fy((e=>{if(r||!n||!e)return qx;const i={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[vx.Backward]:e.x[vx.Backward]||-1===i.x,[vx.Forward]:e.x[vx.Forward]||1===i.x},y:{[vx.Backward]:e.y[vx.Backward]||-1===i.y,[vx.Forward]:e.y[vx.Forward]||1===i.y}}}),[r,t,n])}({delta:g,disabled:!a}),[v,y]=function(){const e=o(null);return[p(((t,r)=>{e.current=setInterval(t,r)}),[]),p((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=o({x:0,y:0}),w=o({x:0,y:0}),$=m((()=>{switch(r){case Ux.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Ux.DraggableRect:return i}}),[r,i,c]),C=o(null),S=p((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,r=x.current.y*w.current.y;e.scrollBy(t,r)}),[]),k=m((()=>l===Kx.TreeOrder?[...d].reverse():d),[l,d]);u((()=>{if(a&&d.length&&$){for(const e of k){if(!1===(null==n?void 0:n(e)))continue;const r=d.indexOf(e),i=h[r];if(!i)continue;const{direction:o,speed:a}=$x(e,i,$,t,f);for(const e of["x","y"])b[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,s),x.current=a,void(w.current=o)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,n,y,a,s,JSON.stringify($),JSON.stringify(b),v,d,k,h,JSON.stringify(f)])}Vx.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:i}=r;return!(i.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Ux||(Ux={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Kx||(Kx={}));const qx={x:{[vx.Backward]:!1,[vx.Forward]:!1},y:{[vx.Backward]:!1,[vx.Forward]:!1}};var Gx,Zx;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Gx||(Gx={})),function(e){e.Optimized="optimized"}(Zx||(Zx={}));const Qx=new Map;function Jx(e,t){return Fy((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function ew(e){let{callback:t,disabled:r}=e;const n=Ey(t),i=m((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}function tw(e){return new Dx(dx(e),e)}function rw(e,t,r){void 0===t&&(t=tw);const[n,i]=x((function(n){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=n?n:r)?i:null;const o=t(e);if(JSON.stringify(n)===JSON.stringify(o))return n;return o}),null),o=function(e){let{callback:t,disabled:r}=e;const n=Ey(t),i=m((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){i();break}}}}),a=ew({callback:i});return Ty((()=>{i(),e?(null==a||a.observe(e),null==o||o.observe(document.body,{childList:!0,subtree:!0})):(null==a||a.disconnect(),null==o||o.disconnect())}),[e]),n}const nw=[];function iw(e,t){void 0===t&&(t=[]);const r=o(null);return u((()=>{r.current=null}),t),u((()=>{const t=e!==Jy;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?Ry(e,r.current):Jy}function ow(e){return m((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const aw=[];function sw(e){let{measure:t}=e;const[r,n]=a(null),i=p((e=>{for(const{target:r}of e)if(Sy(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),o=ew({callback:i}),s=p((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Sy(t)?t:e}(e);null==o||o.disconnect(),r&&(null==o||o.observe(r)),n(r?t(r):null)}),[t,o]),[l,c]=_y(s);return m((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const lw=[{sensor:Lx,options:{}},{sensor:Bx,options:{}}],cw={current:{}},dw={draggable:{measure:ux},droppable:{measure:ux,strategy:Gx.WhileDragging,frequency:Zx.Optimized},dragOverlay:{measure:dx}};class uw extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const hw={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new uw,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Zy},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:dw,measureDroppableContainers:Zy,windowRect:null,measuringScheduled:!1},gw=$({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Zy,draggableNodes:new Map,over:null,measureDroppableContainers:Zy}),pw=$(hw);function fw(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new uw}}}function mw(e,t){switch(t.type){case Gy.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Gy.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Gy.DragEnd:case Gy.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Gy.RegisterDroppable:{const{element:r}=t,{id:n}=r,i=new uw(e.droppable.containers);return i.set(n,r),{...e,droppable:{...e.droppable,containers:i}}}case Gy.SetDroppableDisabled:{const{id:r,key:n,disabled:i}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const a=new uw(e.droppable.containers);return a.set(r,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case Gy.UnregisterDroppable:{const{id:r,key:n}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const o=new uw(e.droppable.containers);return o.delete(r),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function bw(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:i}=f(gw),o=My(n),a=My(null==r?void 0:r.id);return u((()=>{if(!t&&!n&&o&&null!=a){if(!zy(o))return;if(document.activeElement===o.target)return;const e=i.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=Hy(e);if(t){t.focus();break}}}))}}),[n,t,i,a,o]),null}const vw=$({...Jy,scaleX:1,scaleY:1});var yw;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(yw||(yw={}));const xw=w((function(e){var t,r,n,s;let{id:l,accessibility:c,autoScroll:d=!0,children:h,sensors:g=lw,collisionDetection:f=ox,measuring:b,modifiers:v,...y}=e;const w=x(mw,void 0,fw),[$,C]=w,[S,k]=function(){const[e]=a((()=>new Set)),t=p((t=>(e.add(t),()=>e.delete(t))),[e]);return[p((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[D,T]=a(yw.Uninitialized),O=D===yw.Initialized,{draggable:{active:F,nodes:_,translate:M},droppable:{containers:I}}=$,A=F?_.get(F):null,B=o({initial:null,translated:null}),j=m((()=>{var e;return null!=F?{id:F,data:null!=(e=null==A?void 0:A.data)?e:cw,rect:B}:null}),[F,A]),R=o(null),[z,P]=a(null),[L,N]=a(null),H=Oy(y,Object.values(y)),W=Ay("DndDescribedBy",l),Y=m((()=>I.getEnabled()),[I]),V=function(e){return m((()=>({draggable:{...dw.draggable,...null==e?void 0:e.draggable},droppable:{...dw.droppable,...null==e?void 0:e.droppable},dragOverlay:{...dw.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(b),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:X}=function(e,t){let{dragging:r,dependencies:n,config:i}=t;const[s,l]=a(null),{frequency:c,measure:d,strategy:h}=i,g=o(e),f=function(){switch(h){case Gx.Always:return!1;case Gx.BeforeDragging:return r;default:return!r}}(),m=Oy(f),b=p((function(e){void 0===e&&(e=[]),m.current||l((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=o(null),y=Fy((t=>{if(f&&!r)return Qx;if(!t||t===Qx||g.current!==e||null!=s){const t=new Map;for(let r of e){if(!r)continue;if(s&&s.length>0&&!s.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new Dx(d(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,s,r,f,d]);return u((()=>{g.current=e}),[e]),u((()=>{f||b()}),[r,f]),u((()=>{s&&s.length>0&&l(null)}),[JSON.stringify(s)]),u((()=>{f||"number"!=typeof c||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),c))}),[c,f,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=s}}(Y,{dragging:O,dependencies:[M.x,M.y],config:V.droppable}),q=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return Fy((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(_,F),G=m((()=>L?Py(L):null),[L]),Z=function(){const e=!1===(null==z?void 0:z.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,r=O&&!e&&!t;if("object"==typeof d)return{...d,enabled:r};return{enabled:r}}(),Q=function(e,t){return Jx(e,t)}(q,V.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:i=!0}=e;const a=o(!1),{x:s,y:l}="boolean"==typeof i?{x:i,y:i}:i;Ty((()=>{if(!s&&!l||!t)return void(a.current=!1);if(a.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const i=ax(r(e),n);if(s||(i.x=0),l||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){const t=gx(e);t&&t.scrollBy({top:i.y,left:i.x})}}),[t,s,l,n,r])}({activeNode:F?_.get(F):null,config:Z.layoutShiftCompensation,initialRect:Q,measure:V.draggable.measure});const J=rw(q,V.draggable.measure,Q),ee=rw(q?q.parentElement:null),te=o({activatorEvent:null,active:null,activeNode:q,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:_,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=I.getNodeFor(null==(t=te.current.over)?void 0:t.id),ne=sw({measure:V.dragOverlay.measure}),ie=null!=(r=ne.nodeRef.current)?r:q,oe=O?null!=(n=ne.rect)?n:J:null,ae=Boolean(ne.nodeRef.current&&ne.rect),se=ax(le=ae?null:J,Jx(le));var le;const ce=ow(ie?$y(ie):null),de=function(e){const t=o(e),r=Fy((r=>e?r&&r!==nw&&e&&t.current&&e.parentNode===t.current.parentNode?r:hx(e):nw),[e]);return u((()=>{t.current=e}),[e]),r}(O?null!=re?re:q:null),ue=function(e,t){void 0===t&&(t=dx);const[r]=e,n=ow(r?$y(r):null),[i,o]=x((function(){return e.length?e.map((e=>yx(e)?n:new Dx(t(e),e))):aw}),aw),a=ew({callback:o});return e.length>0&&i===aw&&o(),Ty((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),o())}),[e]),i}(de),he=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(v,{transform:{x:M.x-se.x,y:M.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:j,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:oe,over:te.current.over,overlayNodeRect:ne.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),ge=G?jy(G,M):null,pe=function(e){const[t,r]=a(null),n=o(e),i=p((e=>{const t=px(e.target);t&&r((e=>e?(e.set(t,bx(t)),new Map(e)):null))}),[]);return u((()=>{const t=n.current;if(e!==t){o(t);const a=e.map((e=>{const t=px(e);return t?(t.addEventListener("scroll",i,{passive:!0}),[t,bx(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{o(e),o(t)};function o(e){e.forEach((e=>{const t=px(e);null==t||t.removeEventListener("scroll",i)}))}}),[i,e]),m((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>jy(e,t)),Jy):Sx(e):Jy),[e,t])}(de),fe=iw(pe),me=iw(pe,[J]),be=jy(he,fe),ve=oe?lx(oe,he):null,ye=j&&ve?f({active:j,collisionRect:ve,droppableRects:U,droppableContainers:Y,pointerCoordinates:ge}):null,xe=nx(ye,"id"),[we,$e]=a(null),Ce=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(ae?he:jy(he,me),null!=(s=null==we?void 0:we.rect)?s:null,J),Se=p(((e,t)=>{let{sensor:r,options:n}=t;if(null==R.current)return;const i=_.get(R.current);if(!i)return;const o=e.nativeEvent,a=new r({active:R.current,activeNode:i,event:o,options:n,context:te,onStart(e){const t=R.current;if(null==t)return;const r=_.get(t);if(!r)return;const{onDragStart:n}=H.current,i={active:{id:t,data:r.data,rect:B}};E((()=>{null==n||n(i),T(yw.Initializing),C({type:Gy.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:i})}))},onMove(e){C({type:Gy.DragMove,coordinates:e})},onEnd:s(Gy.DragEnd),onCancel:s(Gy.DragCancel)});function s(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:i}=te.current;let a=null;if(t&&i){const{cancelDrop:s}=H.current;if(a={activatorEvent:o,active:t,collisions:r,delta:i,over:n},e===Gy.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=Gy.DragCancel)}}R.current=null,E((()=>{C({type:e}),T(yw.Uninitialized),$e(null),P(null),N(null);const t=e===Gy.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),S({type:t,event:a})}}))}}E((()=>{P(a),N(e.nativeEvent)}))}),[_]),ke=p(((e,t)=>(r,n)=>{const i=r.nativeEvent,o=_.get(n);if(null!==R.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(r,t.options,a)&&(i.dndKit={capturedBy:t.sensor},R.current=n,Se(r,t))}),[_,Se]),De=function(e,t){return m((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(g,ke);!function(e){u((()=>{if(!yy)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(g),Ty((()=>{J&&D===yw.Initializing&&T(yw.Initialized)}),[J,D]),u((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:r,collisions:n,over:i}=te.current;if(!t||!r)return;const o={active:t,activatorEvent:r,collisions:n,delta:{x:be.x,y:be.y},over:i};E((()=>{null==e||e(o),S({type:"onDragMove",event:o})}))}),[be.x,be.y]),u((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:i}=te.current;if(!e||null==R.current||!t||!i)return;const{onDragOver:o}=H.current,a=n.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:r,delta:{x:i.x,y:i.y},over:s};E((()=>{$e(s),null==o||o(l),S({type:"onDragOver",event:l})}))}),[xe]),Ty((()=>{te.current={activatorEvent:L,active:j,activeNode:q,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:_,draggingNode:ie,draggingNodeRect:oe,droppableContainers:I,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},B.current={initial:oe,translated:ve}}),[j,q,ye,ve,_,ie,oe,U,I,we,de,be]),Xx({...Z,delta:M,draggingRect:ve,pointerCoordinates:ge,scrollableAncestors:de,scrollableAncestorRects:ue});const Te=m((()=>({active:j,activeNode:q,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:ne,draggableNodes:_,droppableContainers:I,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:V,measuringScheduled:X,windowRect:ce})),[j,q,J,L,ye,ee,ne,_,I,U,we,K,de,ue,V,X,ce]),Ee=m((()=>({activatorEvent:L,activators:De,active:j,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:_,over:we,measureDroppableContainers:K})),[L,De,j,J,C,W,_,we,K]);return i.createElement(Uy.Provider,{value:k},i.createElement(gw.Provider,{value:Ee},i.createElement(pw.Provider,{value:Te},i.createElement(vw.Provider,{value:Ce},h)),i.createElement(bw,{disabled:!1===(null==c?void 0:c.restoreFocus)})),i.createElement(qy,{...c,hiddenTextDescribedById:W}))})),ww=$(null),$w="button";function Cw(e){let{id:t,data:r,disabled:n=!1,attributes:i}=e;const o=Ay("Droppable"),{activators:a,activatorEvent:s,active:l,activeNodeRect:c,ariaDescribedById:d,draggableNodes:u,over:h}=f(gw),{role:g=$w,roleDescription:p="draggable",tabIndex:b=0}=null!=i?i:{},v=(null==l?void 0:l.id)===t,y=f(v?vw:ww),[x,w]=_y(),[$,C]=_y(),S=function(e,t){return m((()=>e.reduce(((e,r)=>{let{eventName:n,handler:i}=r;return e[n]=e=>{i(e,t)},e}),{})),[e,t])}(a,t),k=Oy(r);Ty((()=>(u.set(t,{id:t,key:o,node:x,activatorNode:$,data:k}),()=>{const e=u.get(t);e&&e.key===o&&u.delete(t)})),[u,t]);return{active:l,activatorEvent:s,activeNodeRect:c,attributes:m((()=>({role:g,tabIndex:b,"aria-disabled":n,"aria-pressed":!(!v||g!==$w)||void 0,"aria-roledescription":p,"aria-describedby":d.draggable})),[n,g,b,v,p,d.draggable]),isDragging:v,listeners:n?void 0:S,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const Sw={timeout:25};function kw(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function Dw(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function Tw(e){return null!==e&&e>=0}const Ew=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const o=kw(t,n,r),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},Ow={scaleX:1,scaleY:1},Fw=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[r])?t:n;if(!s)return null;if(i===r){const e=o[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...Ow}:null}const l=function(e,t,r){const n=e[t],i=e[t-1],o=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):o?o.top-(n.top+n.height):0;return o?o.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(o,i,r);return i>r&&i<=a?{x:0,y:-s.height-l,...Ow}:i<r&&i>=a?{x:0,y:s.height+l,...Ow}:{x:0,y:0,...Ow}};const _w="Sortable",Mw=i.createContext({activeIndex:-1,containerId:_w,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ew,disabled:{draggable:!1,droppable:!1}});function Iw(e){let{children:t,id:r,items:n,strategy:a=Ew,disabled:s=!1}=e;const{active:l,dragOverlay:c,droppableRects:d,over:h,measureDroppableContainers:g}=f(pw),p=Ay(_w,r),b=Boolean(null!==c.rect),v=m((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=l,x=l?v.indexOf(l.id):-1,w=h?v.indexOf(h.id):-1,$=o(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,k=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(s);Ty((()=>{C&&y&&g(v)}),[C,v,y,g]),u((()=>{$.current=v}),[v]);const D=m((()=>({activeIndex:x,containerId:p,disabled:k,disableTransforms:S,items:v,overIndex:w,useDragOverlay:b,sortedRects:Dw(v,d),strategy:a})),[x,p,k.draggable,k.droppable,S,v,w,d,b,a]);return i.createElement(Mw.Provider,{value:D},t)}const Aw=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return kw(r,n,i).indexOf(t)},Bw=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===o||i!==a)&&(!!r||a!==i&&t===l))},jw={duration:200,easing:"ease"},Rw="transform",zw=Ly.Transition.toString({property:Rw,duration:0,easing:"linear"}),Pw={roleDescription:"sortable"};function Lw(e){let{animateLayoutChanges:t=Bw,attributes:r,disabled:n,data:i,getNewIndex:s=Aw,id:l,strategy:c,resizeObserverConfig:d,transition:h=jw}=e;const{items:g,containerId:b,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=f(Mw),k=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),D=g.indexOf(l),T=m((()=>({sortable:{containerId:b,index:D,items:g},...i})),[b,i,D,g]),E=m((()=>g.slice(g.indexOf(l))),[g,l]),{rect:O,node:F,isOver:_,setNodeRef:M}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:i}=e;const a=Ay("Droppable"),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=f(gw),h=o({disabled:r}),g=o(!1),m=o(null),b=o(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...Sw,...i},w=Oy(null!=y?y:n),$=ew({callback:p((()=>{g.current?(null!=b.current&&clearTimeout(b.current),b.current=setTimeout((()=>{d(Array.isArray(w.current)?w.current:[w.current]),b.current=null}),x)):g.current=!0}),[x]),disabled:v||!s}),C=p(((e,t)=>{$&&(t&&($.unobserve(t),g.current=!1),e&&$.observe(e))}),[$]),[S,k]=_y(C),D=Oy(t);return u((()=>{$&&S.current&&($.disconnect(),g.current=!1,$.observe(S.current))}),[S,$]),Ty((()=>(l({type:Gy.RegisterDroppable,element:{id:n,key:a,disabled:r,node:S,rect:m,data:D}}),()=>l({type:Gy.UnregisterDroppable,key:a,id:n}))),[n]),u((()=>{r!==h.current.disabled&&(l({type:Gy.SetDroppableDisabled,id:n,key:a,disabled:r}),h.current.disabled=r)}),[n,a,r,l]),{active:s,rect:m,isOver:(null==c?void 0:c.id)===n,node:S,over:c,setNodeRef:k}}({id:l,data:T,disabled:k.droppable,resizeObserverConfig:{updateMeasurementsFor:E,...d}}),{active:I,activatorEvent:A,activeNodeRect:B,attributes:j,setNodeRef:R,listeners:z,isDragging:P,over:L,setActivatorNodeRef:N,transform:H}=Cw({id:l,data:T,attributes:{...Pw,...r},disabled:k.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m((()=>e=>{t.forEach((t=>t(e)))}),t)}(M,R),Y=Boolean(I),V=Y&&!x&&Tw(v)&&Tw($),U=!C&&P,K=U&&V?H:null,X=V?null!=K?K:(null!=c?c:S)({rects:w,activeNodeRect:B,activeIndex:v,overIndex:$,index:D}):null,q=Tw(v)&&Tw($)?s({id:l,items:g,activeIndex:v,overIndex:$}):D,G=null==I?void 0:I.id,Z=o({activeId:G,items:g,newIndex:q,containerId:b}),Q=g!==Z.current.items,J=t({active:I,containerId:b,isDragging:P,isSorting:Y,id:l,index:D,items:g,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:i}=e;const[s,l]=a(null),c=o(r);return Ty((()=>{if(!t&&r!==c.current&&n.current){const e=i.current;if(e){const t=dx(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&l(r)}}r!==c.current&&(c.current=r)}),[t,r,n,i]),u((()=>{s&&l(null)}),[s]),s}({disabled:!J,index:D,node:F,rect:O});return u((()=>{Y&&Z.current.newIndex!==q&&(Z.current.newIndex=q),b!==Z.current.containerId&&(Z.current.containerId=b),g!==Z.current.items&&(Z.current.items=g)}),[Y,q,b,g]),u((()=>{if(G===Z.current.activeId)return;if(G&&!Z.current.activeId)return void(Z.current.activeId=G);const e=setTimeout((()=>{Z.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:I,activeIndex:v,attributes:j,data:T,rect:O,index:D,newIndex:q,items:g,isOver:_,isSorting:Y,isDragging:P,listeners:z,node:F,overIndex:$,over:L,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:M,setDraggableNodeRef:R,transform:null!=ee?ee:X,transition:function(){if(ee||Q&&Z.current.newIndex===D)return zw;if(U&&!zy(A)||!h)return;if(Y||J)return Ly.Transition.toString({...h,property:Rw});return}()}}function Nw(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Hw=[Fx.Down,Fx.Right,Fx.Up,Fx.Left],Ww=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(Hw.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];o.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const o=i.get(r.id);if(o)switch(e.code){case Fx.Down:n.top<o.top&&t.push(r);break;case Fx.Up:n.top>o.top&&t.push(r);break;case Fx.Left:n.left>o.left&&t.push(r);break;case Fx.Right:n.left<o.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=rx(t),o=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=rx(n),a=i.reduce(((e,t,n)=>{return e+(i=r[n],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(ex)})({active:r,collisionRect:n,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=nx(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(r.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=hx(l).some(((e,t)=>s[t]!==e)),i=Yw(e,t),o=function(e,t){if(!Nw(e)||!Nw(t))return!1;if(!Yw(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!i?{x:0,y:0}:{x:o?n.width-a.width:0,y:o?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:Ry(d,c)}}}};function Yw(e,t){return!(!Nw(e)||!Nw(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class Vw extends Wx{}Vw.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Uw(e.target)}];function Uw(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Bx{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Uw(e.target)}];const Kw=_.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Xw=_(yg)`
    color: ${Fc.text};
    ${Kd({textSize:"body-md"})}

    ${Rc.MaxWidth.sm} {
        display: none;
    }
`,qw=_(_m)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Gw=_.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Fc.text};
    ${Kd({textSize:"body-md"})}
`,Zw=n=>{var{children:i,visible:o,onMobileClose:a}=n,s=gt(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=j(),d=jc["sm-max"]({theme:c}),u=bu.useMediaQuery({maxWidth:d}),h=()=>{a&&a()},g=()=>"string"==typeof i?e(ad.BodyMD,{children:i}):i;return t(r,{children:[o&&e(Kw,Object.assign({"data-testid":l},s,{children:e(Xw,{children:g()})})),u&&e(Em,{show:null!=o&&o,onOverlayClick:h,children:e(qw,{onClose:h,children:e(Gw,{children:g()})})})]})},Qw=_.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Jw=n=>{var i,s,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:h,rootNode:g,customOffset:p,delay:f,onPopoverAppear:m,onPopoverDismiss:b}=n,v=gt(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=a(!1),w=o(null),$=o(null),C=j(),S=jc["sm-max"]({theme:C}),k=bu.useMediaQuery({maxWidth:S}),{refs:D,floatingStyles:T,context:E}=we({open:y,placement:u,whileElementsMounted:$e,middleware:[Ce(null!=p?p:16),Se(),ke({limiter:De()})],onOpenChange:e=>{x(e),y!==e&&z(e)}}),O=Cf(),F=k?"click":d,_=Oe(E,{ignoreMouse:"hover"===F}),M=Fe(E),I=Re(E,{enabled:"hover"===F,delay:{open:null!==(i=null==f?void 0:f.open)&&void 0!==i?i:0,close:null!==(s=null==f?void 0:f.close)&&void 0!==s?s:500}}),{getReferenceProps:A,getFloatingProps:B}=_e([_,M,I]),R=()=>{x(!1),z(!1)},z=e=>{e&&m&&m(),!e&&b&&b()};return t(r,{children:[e(Qw,Object.assign({ref:e=>{w.current=e,D.setReference(e)}},A({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:l})),y&&e(Me,{root:g,children:e(Ie,{context:E,children:e("div",Object.assign({ref:e=>{$.current=e,D.setFloating(e)},style:Object.assign(Object.assign({},T),{outline:"none",zIndex:null!=h?h:O})},B(),{children:"function"==typeof c?c():e(Zw,{visible:!0,onMobileClose:R,children:c})}))})})]})},e$=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},t$=_.span`
    color: ${Fc["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>e$(e)}

    &:hover,
    &:focus-visible {
        color: ${Fc["text-hover"]};
        ${({$hoverStyle:e})=>e$(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,r$=_.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,n$=r=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=gt(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!i;return e(Jw,Object.assign({},l,{children:t(t$,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info",children:[i,o&&e(r$,{$standalone:!c,children:o})]})}))},i$=_.div`
    padding-left: ${Ac["spacing-4"]};
    display: inline;
`,o$=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e(i$,{children:e(n$,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=o?o:e(N,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},a$=_.label`
    color: ${Fc["text-subtle"]};
    margin-bottom: ${Ac["spacing-8"]};
    display: inline-block;

    ${_c["form-label"]}
    ${Kd()}
    font-weight: ${_c.Spec["weight-semibold"]};
`,s$=_.p`
    ${_c["body-sm-semibold"]}
    color: ${Fc["text-error"]};
    margin-top: ${Ac["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,l$=_.span`
    ${_c["form-description"]}
    color: ${Fc["text-subtler"]};
    display: block;
`,c$=r=>{var{children:n,addon:i,subtitle:o,"data-testid":a}=r,s=gt(r,["children","addon","subtitle","data-testid"]);return t(a$,Object.assign({},s,{children:[n,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(o$,{addon:i}):null),"string"==typeof o?e(l$,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},d$=t=>e(s$,Object.assign({},t)),u$=M`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Ac["spacing-32"]};
    }
`,h$=_.div`
    ${u$}
`,g$=_(rm)`
    ${u$}
`,p$=_(lm)`
    ${u$}
`,f$=({label:r,errorMessage:n,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,"data-error-testid":y})=>{const x=!s&&(l||d||u)?"v2-grid":!s&&(h||g||p||f||m||b||v)?"grid":s||"flex",w=()=>y||(i?`${i}-error-message`:"error-message"),$=()=>!!n;const C=(e=>{switch(e){case"v2-grid":return p$;case"grid":return g$;case"flex":return h$}})(x);return t(C,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:d,desktopCols:u};case"grid":return{xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v};case"flex":return}})(x),{children:[r&&e(c$,"string"==typeof r?{htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o,children:r}:Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},r)),(()=>{const e={"aria-invalid":$(),"aria-describedby":$()&&w()};return S.map(a,(t=>c(t,e)))})(),n&&e(s$,{id:w(),tabIndex:0,"data-testid":w(),children:n})]}))};function m$(e,t){return m$=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m$(e,t)}function b$(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function v$(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function y$(e){return null!==e&&1===e.length?e[0]:e.slice()}function x$(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function w$(e,t){return $$(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function $$(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let C$=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),x$(r.getMouseEventMap())}))}b$(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=w$(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),x$(r.getKeyDownEventMap()),b$(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),x$(r.getMouseEventMap()),b$(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),x$(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:y$(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:y$(r.state.value)};return r.props.renderTrack(i,o)};let n=v$(t.value);n.length||(n=v$(t.defaultValue)),r.pendingResizeTimeouts=[];const o=[];for(let e=0;e<n.length;e+=1)n[e]=w$(n[e],t),o.push(e);return r.resizeObserver=null,r.resizeElementRef=i.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:o},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,m$(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=v$(e.value);return r.length?t.pending?null:{value:r.map((t=>w$(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return y$(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),a=Math.abs(e-i);a<t&&(t=a,r=o)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return w$(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),i=e[r],o=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],i=r[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),i=w$(this.calcValue(r),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=w$(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=w$(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,i=t[r];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,o&&n>1&&(e>i?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const o=n-i*r;t[e-1-i]>o&&(t[e-1-i]=o)}}(n,t,l,a)):e<i&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const e=n+i*r;t[i]<e&&(t[i]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,i;for(n=r,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=$$(i,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=$$(i,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](y$(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,o,a)},t}(i.Component);C$.displayName="ReactSlider",C$.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var S$=C$;const k$=_.div`
    isolation: isolate;
`,D$=_.div`
    margin-top: ${Ac["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Ac["spacing-8"]};
`,T$=_.div`
    margin-bottom: ${Ac["spacing-8"]};
`,E$=_(ad.BodyBL)`
    overflow-wrap: anywhere;
`,O$=_(S$)`
    height: 0.875rem;
`,F$=_.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?M`
                cursor: not-allowed;
            `:e.$readOnly?void 0:M`
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

        background-color: ${Fc.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${Ic["width-010"]} ${Ic.solid}
            ${e=>e.$disabled?Fc["border-selected-disabled"]:Fc["border-strong"]};
        border-radius: 50%;
    }
`,_$=_.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${F$}:after {
        outline-offset: -1px;
        outline: ${Ic["width-040"]} ${Ic.solid}
            ${Fc["border-selected"]};
    }
`,M$=_.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Bc.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Fc["border-strong"](e)};
`,I$=r=>{var{value:n,min:i=0,max:o=100,step:s=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:h,readOnly:g,ariaLabels:p,showSliderLabels:f,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=gt(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[k,D]=a(E()),T=function(){const e=function(){const e=h||g?Fc["border-disabled"]:Fc["border-strong"],t=h||g?Fc["border-selected-disabled"]:Fc["border-selected"];if(1===c)return[t,e];const r=[];r.push(e);for(let e=0;e<c-1;e++)r.push(t);return r.push(e),r}();return new Array(c+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();u((()=>{n!==k&&D(E())}),[n]);function E(){if(n&&n.length===c)return n;const e=[];for(let t=0;t<c;t++)e.push(i+s*t);return e}const O=e=>w?w(e):t(E$,{children:[m,e,b]});return t(k$,Object.assign({},S,{children:[v&&e(T$,{children:(()=>{let e="";if(1===k.length)e=`${k[0]}`;else if(2===k.length)e=`${k[0]} - ${k[1]}`;else if(k.length>2){e=`${Math.min(...k)} - ${Math.max(...k)}`}return t(E$,{children:[y,e,x]})})()}),e(O$,{step:s,min:i,max:o,value:k,disabled:h||g,onChange:(e,t)=>{if("number"==typeof e){const t=[e];D(t),null==$||$(t)}else{if(t>-1&&k[t]===e[t])return;const r=[...e];D(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];D(t),null==C||C(t)}else{const t=[...e];D(t),null==C||C(t)}},minDistance:l,ariaLabel:p,renderThumb:(t,r)=>e(_$,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:h?void 0:t.tabIndex,children:e(F$,{$disabled:h,$readOnly:g})})),renderTrack:(t,r)=>e(M$,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:T[r.index]}))}),f&&t(D$,{children:[e("div",{children:O(i)}),e("div",{children:O(o)})]})]}))},A$=_.div`
    display: flex;
    margin-bottom: ${Ac["spacing-16"]};
    align-items: baseline;
`,B$=_.div`
    margin: 0 0.5rem;
`,j$=_.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,R$=_.div`
    flex: 1;
    border-radius: ${Bc.sm} ${Bc.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Fc["bg-strongest"];return e.$disabled&&e.$selected?t=Fc["bg-selected-stronger-disabled"]:e.$disabled?t=Fc["bg-disabled"]:e.$selected&&(t=Fc["bg-selected-stronger"]),M`
            background-color: ${t};
        `}}
`,z$=_(I$)`
    margin-top: -0.3125rem;
`,P$=n=>{var{bins:i=[],interval:o,disabled:s,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:h,rangeLabelSuffix:g,ariaLabels:p,onChange:f,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=gt(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),$=Math.max(...w),C=i.map((e=>e.minValue)),S=Math.max(...C),k=Math.min(...C),[D,T]=a(_()),E=m((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(S-k)/o+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===k+o*n));t?r.push(t):r.push({count:0,minValue:k+o*n})}return r}),[i,o]);u((()=>{c!==D&&T(_())}),[c]);const O=e=>{const[t,r]=e,n=[t,r];T(n),null==f||f(n)},F=e=>{const[t,r]=e,n=[t,r];T(n),null==b||b(n)};function _(){return null!=c?c:[k,k+o]}const M=e=>y?y(e):t(ad.BodyBL,{children:[h,e,g]});return t("div",Object.assign({},x,{children:[d&&t(A$,{children:[M(D[0]),e(B$,{children:"-"}),M(D[1])]}),E.every((e=>0===e.count))&&v?v():t(r,{children:[e(j$,{children:E.map(((t,r)=>{const n=t.count/$;return e(R$,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=D[0]&&t.minValue<D[1],$disabled:s||l},r)}))}),e(z$,{min:k,max:S+o,step:o,minRange:o,numOfThumbs:2,value:D,disabled:s,readOnly:l,ariaLabels:p,onChange:O,onChangeEnd:F})]})]}))},L$=_(Np)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&M`
            padding-left: ${Ac["spacing-16"]};
            padding-right: ${e.$showClear?0:Ac["spacing-16"]};
        `}
`,N$=_(Hp)`
    height: auto;
    padding: ${Ac["spacing-12"]} ${Ac["spacing-16"]};

    cursor: pointer;
    color: ${Fc.icon};

    ${e=>"no-border"===e.$styleType&&M`
            margin-right: -${Ac["spacing-12"]};
        `}
`,H$=_(ze)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,W$=_.div`
    display: flex;
    width: 100%;
`,Y$=_(Pp)`
    display: flex;
    align-items: center;
    width: 100%;
`,V$=i.forwardRef(((n,i)=>{var{value:a,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:g,allowClear:p=!1,className:f,styleType:m="bordered"}=n,v=gt(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,s),x=o(null);b(i,(()=>x.current),[]);const w=oh({ref:x,formatter:e=>y?eh.transformWithSpaces(e,s):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{g&&g(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,i=r.replace(/\s/g,"");e.target.value=i,null==h||h(e),n()},k=a?(e=>e?y?eh.transformWithSpaces(e,s):e:"")(a):a,D=p&&!d&&!u&&!!a,T=()=>t(r,{children:[e(L$,Object.assign({"data-testid":"input",ref:x,disabled:d,value:k,onChange:$,type:l,readOnly:u,$showClear:D,$styleType:m},v)),D&&e(N$,{onClick:C,type:"button",$styleType:m,children:e(H$,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===m?e(W$,{className:f,children:T()}):e(Y$,{$disabled:d,$error:c,$readOnly:u,className:f,children:T()})})})),U$=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(V$,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:r,error:!!i},y))})}));var K$=Fs;var X$=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var q$=function(e){return this.__data__.get(e)};var G$=function(e){return this.__data__.has(e)},Z$=Fs,Q$=_s,J$=Zs;var eC=function(e,t){var r=this.__data__;if(r instanceof Z$){var n=r.__data__;if(!Q$||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new J$(n)}return r.set(e,t),this.size=r.size,this},tC=Fs,rC=function(){this.__data__=new K$,this.size=0},nC=X$,iC=q$,oC=G$,aC=eC;function sC(e){var t=this.__data__=new tC(e);this.size=t.size}sC.prototype.clear=rC,sC.prototype.delete=nC,sC.prototype.get=iC,sC.prototype.has=oC,sC.prototype.set=aC;var lC=sC;var cC=Zs,dC=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},uC=function(e){return this.__data__.has(e)};function hC(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new cC;++t<r;)this.add(e[t])}hC.prototype.add=hC.prototype.push=dC,hC.prototype.has=uC;var gC=function(e,t){return e.has(t)},pC=hC,fC=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},mC=gC;var bC=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,g=2&r?new pC:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var p=e[u],f=t[u];if(n)var m=a?n(f,p,u,t,e,o):n(p,f,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(g){if(!fC(t,(function(e,t){if(!mC(g,t)&&(p===e||i(p,e,r,n,o)))return g.push(t)}))){h=!1;break}}else if(p!==f&&!i(p,f,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var vC=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var yC=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},xC=ea.Uint8Array,wC=hs,$C=bC,CC=vC,SC=yC,kC=ta?ta.prototype:void 0,DC=kC?kC.valueOf:void 0;var TC=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new xC(e),new xC(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return wC(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=CC;case"[object Set]":var l=1&n;if(s||(s=SC),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=$C(s(e),s(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(DC)return DC.call(e)==DC.call(t)}return!1};var EC=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},OC=EC,FC=Go;var _C=function(e,t,r){var n=t(e);return FC(e)?n:OC(n,r(e))};var MC=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},IC=function(){return[]},AC=Object.prototype.propertyIsEnumerable,BC=Object.getOwnPropertySymbols,jC=BC?function(e){return null==e?[]:(e=Object(e),MC(BC(e),(function(t){return AC.call(e,t)})))}:IC;var RC=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},zC=ha,PC=ga;var LC=function(e){return PC(e)&&"[object Arguments]"==zC(e)},NC=ga,HC=Object.prototype,WC=HC.hasOwnProperty,YC=HC.propertyIsEnumerable,VC=LC(function(){return arguments}())?LC:function(e){return NC(e)&&WC.call(e,"callee")&&!YC.call(e,"callee")},UC={exports:{}};var KC=function(){return!1};!function(e,t){var r=ea,n=KC,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(UC,UC.exports);var XC=UC.exports,qC=/^(?:0|[1-9]\d*)$/;var GC=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&qC.test(e))&&e>-1&&e%1==0&&e<t};var ZC=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},QC=ha,JC=ZC,eS=ga,tS={};tS["[object Float32Array]"]=tS["[object Float64Array]"]=tS["[object Int8Array]"]=tS["[object Int16Array]"]=tS["[object Int32Array]"]=tS["[object Uint8Array]"]=tS["[object Uint8ClampedArray]"]=tS["[object Uint16Array]"]=tS["[object Uint32Array]"]=!0,tS["[object Arguments]"]=tS["[object Array]"]=tS["[object ArrayBuffer]"]=tS["[object Boolean]"]=tS["[object DataView]"]=tS["[object Date]"]=tS["[object Error]"]=tS["[object Function]"]=tS["[object Map]"]=tS["[object Number]"]=tS["[object Object]"]=tS["[object RegExp]"]=tS["[object Set]"]=tS["[object String]"]=tS["[object WeakMap]"]=!1;var rS=function(e){return eS(e)&&JC(e.length)&&!!tS[QC(e)]};var nS=function(e){return function(t){return e(t)}},iS={exports:{}};!function(e,t){var r=Zo,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(iS,iS.exports);var oS=iS.exports,aS=rS,sS=nS,lS=oS&&oS.isTypedArray,cS=lS?sS(lS):aS,dS=RC,uS=VC,hS=Go,gS=XC,pS=GC,fS=cS,mS=Object.prototype.hasOwnProperty;var bS=function(e,t){var r=hS(e),n=!r&&uS(e),i=!r&&!n&&gS(e),o=!r&&!n&&!i&&fS(e),a=r||n||i||o,s=a?dS(e.length,String):[],l=s.length;for(var c in e)!t&&!mS.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||pS(c,l))||s.push(c);return s},vS=Object.prototype;var yS=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||vS)};var xS=function(e,t){return function(r){return e(t(r))}},wS=xS(Object.keys,Object),$S=yS,CS=wS,SS=Object.prototype.hasOwnProperty;var kS=function(e){if(!$S(e))return CS(e);var t=[];for(var r in Object(e))SS.call(e,r)&&"constructor"!=r&&t.push(r);return t},DS=Da,TS=ZC;var ES=function(e){return null!=e&&TS(e.length)&&!DS(e)},OS=bS,FS=kS,_S=ES;var MS=function(e){return _S(e)?OS(e):FS(e)},IS=_C,AS=jC,BS=MS;var jS=function(e){return IS(e,BS,AS)},RS=Object.prototype.hasOwnProperty;var zS=function(e,t,r,n,i,o){var a=1&r,s=jS(e),l=s.length;if(l!=jS(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:RS.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var g=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var f=e[d=s[c]],m=t[d];if(n)var b=a?n(m,f,d,t,e,o):n(f,m,d,e,t,o);if(!(void 0===b?f===m||i(f,m,r,n,o):b)){g=!1;break}p||(p="constructor"==d)}if(g&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(g=!1)}return o.delete(e),o.delete(t),g},PS=Va(ea,"DataView"),LS=_s,NS=Va(ea,"Promise"),HS=Va(ea,"Set"),WS=Va(ea,"WeakMap"),YS=ha,VS=_a,US="[object Map]",KS="[object Promise]",XS="[object Set]",qS="[object WeakMap]",GS="[object DataView]",ZS=VS(PS),QS=VS(LS),JS=VS(NS),ek=VS(HS),tk=VS(WS),rk=YS;(PS&&rk(new PS(new ArrayBuffer(1)))!=GS||LS&&rk(new LS)!=US||NS&&rk(NS.resolve())!=KS||HS&&rk(new HS)!=XS||WS&&rk(new WS)!=qS)&&(rk=function(e){var t=YS(e),r="[object Object]"==t?e.constructor:void 0,n=r?VS(r):"";if(n)switch(n){case ZS:return GS;case QS:return US;case JS:return KS;case ek:return XS;case tk:return qS}return t});var nk=rk,ik=lC,ok=bC,ak=TC,sk=zS,lk=nk,ck=Go,dk=XC,uk=cS,hk="[object Arguments]",gk="[object Array]",pk="[object Object]",fk=Object.prototype.hasOwnProperty;var mk=function(e,t,r,n,i,o){var a=ck(e),s=ck(t),l=a?gk:lk(e),c=s?gk:lk(t),d=(l=l==hk?pk:l)==pk,u=(c=c==hk?pk:c)==pk,h=l==c;if(h&&dk(e)){if(!dk(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new ik),a||uk(e)?ok(e,t,r,n,i,o):ak(e,t,l,r,n,i,o);if(!(1&r)){var g=d&&fk.call(e,"__wrapped__"),p=u&&fk.call(t,"__wrapped__");if(g||p){var f=g?e.value():e,m=p?t.value():t;return o||(o=new ik),i(f,m,r,n,o)}}return!!h&&(o||(o=new ik),sk(e,t,r,n,i,o))},bk=ga;var vk=function e(t,r,n,i,o){return t===r||(null==t||null==r||!bk(t)&&!bk(r)?t!=t&&r!=r:mk(t,r,n,i,e,o))},yk=lC,xk=vk;var wk=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new yk;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?xk(d,c,3,n,u):h))return!1}}return!0},$k=$a;var Ck=function(e){return e==e&&!$k(e)},Sk=Ck,kk=MS;var Dk=function(e){for(var t=kk(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Sk(i)]}return t};var Tk=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ek=wk,Ok=Dk,Fk=Tk;var _k=function(e,t){return null!=e&&t in Object(e)},Mk=bl,Ik=VC,Ak=Go,Bk=GC,jk=ZC,Rk=yl;var zk=function(e,t,r){for(var n=-1,i=(t=Mk(t,e)).length,o=!1;++n<i;){var a=Rk(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&jk(i)&&Bk(a,i)&&(Ak(e)||Ik(e))},Pk=_k,Lk=zk;var Nk=vk,Hk=Sl,Wk=function(e,t){return null!=e&&Lk(e,t,Pk)},Yk=wa,Vk=Ck,Uk=Tk,Kk=yl;var Xk=function(e){return function(t){return null==t?void 0:t[e]}},qk=$l;var Gk=Xk,Zk=function(e){return function(t){return qk(t,e)}},Qk=wa,Jk=yl;var eD=function(e){var t=Ok(e);return 1==t.length&&t[0][2]?Fk(t[0][0],t[0][1]):function(r){return r===e||Ek(r,e,t)}},tD=function(e,t){return Yk(e)&&Vk(t)?Uk(Kk(e),t):function(r){var n=Hk(r,e);return void 0===n&&n===t?Wk(r,e):Nk(t,n,3)}},rD=function(e){return e},nD=Go,iD=function(e){return Qk(e)?Gk(Jk(e)):Zk(e)};var oD=function(e){return"function"==typeof e?e:null==e?rD:"object"==typeof e?nD(e)?tD(e[0],e[1]):eD(e):iD(e)},aD=oD,sD=ES,lD=MS;var cD=function(e){return function(t,r,n){var i=Object(t);if(!sD(t)){var o=aD(r);t=lD(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var dD=Lg,uD=1/0;var hD=function(e){return e?(e=dD(e))===uD||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var gD=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},pD=oD,fD=function(e){var t=hD(e),r=t%1;return t==t?r?t-r:t:0},mD=Math.max;var bD=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:fD(r);return i<0&&(i=mD(n+i,0)),gD(e,pD(t),i)},vD=Xo(bD),yD=Xo(cD(bD)),xD=vk;var wD=Xo((function(e,t){return xD(e,t)}));const $D=_(Uo.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,CD=_.ul`
    border-bottom-left-radius: ${Bc.sm};
    border-bottom-right-radius: ${Bc.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${Ac["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Fc["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${Rc.MaxWidth.sm} {
        max-height: 15rem;
    }
`,SD=_.li`
    :hover,
    :focus,
    :active {
        background: ${Fc["bg-hover"]};
    }
    ${e=>{if(e.$checked)return M`
                background: ${Fc["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${Fc["bg-selected-hover"]};
                }
            `}}
`,kD=_.button`
    display: flex;
    ${e=>e.$multiSelect?M`
                padding: ${Ac["spacing-8"]} ${Ac["spacing-16"]};
            `:M`
                padding: 15px ${Ac["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${Ac["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Fc["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,DD=M`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,TD=_.div`
    ${e=>"small"===e.$variant?_c["body-md-regular"]:_c["body-baseline-regular"]}
    color: ${Fc.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&DD}
`,ED=_.div`
    color: ${Fc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&DD}

    ${e=>"next-line"===e.$labelDisplayType?M`
                    ${_c["body-md-semibold"]}
                `:M`
                    ${_c["body-baseline-regular"]}
                `}
`,OD=_.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return M`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return M`
                    ${TD} {
                        display: inline;
                    }

                    ${ED} {
                        display: inline;
                        margin-left: ${Ac["spacing-8"]};
                    }
                `}}}
`,FD=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,_D=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,MD=_(Eg)`
    flex-shrink: 0;
    margin-right: ${Ac["spacing-16"]};
`,ID=_.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Ac["spacing-16"]} 0 ${Ac["spacing-8"]} 0;
`,AD=_.button`
    ${e=>"small"===e.$variant?_c["body-md-semibold"]:_c["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Fc["text-primary"]};
`,BD=_.div`
    width: 100%;
    display: flex;
    padding: 15px ${Ac["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?_c["body-md-regular"]:_c["body-baseline-regular"]}
`,jD=_(P)`
    height: 1em;
    width: 1em;
    margin-right: ${Ac["spacing-4"]};
    color: ${Fc["icon-error"]};
`,RD=_(Sd)`
    margin-right: ${Ac["spacing-4"]};
    color: ${Fc.icon};
`,zD=e=>"small"===e?1:1.375,PD=e=>M`
        height: ${zD(e)}rem;
        width: ${zD(e)}rem;
    `,LD=_.li`
    background: ${Fc["bg-strong"]};
    display: flex;
    border-radius: ${Bc.sm};
    align-items: center;
`,ND=_(Np)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${Ac["spacing-8"]} 0 0;
    width: 100%;
`,HD=_(He)`
    ${e=>PD(e.$variant)}
    margin: 0 ${Ac["spacing-8"]};
    color: ${Fc.icon};
`,WD=_(td)`
    ${e=>PD(e.$variant)}
    padding: 0;
    margin: 0 ${Ac["spacing-8"]};
    color: ${Fc.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return M`
                svg {
                    ${PD(e.$variant)}
                }
            `}}
`,YD=g(((r,n)=>{const{onClear:i}=r,o=gt(r,["onClear"]);return t(LD,{children:[e(HD,{$variant:r.variant}),e(ND,Object.assign({ref:n,$variant:r.variant},o)),o.value&&e(WD,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:r.variant,children:e(te,{})})]},"search")})),VD=n=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:g,searchPlaceholder:p="Search",onSearch:f,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:k=2,labelDisplayType:D="inline",renderListItem:T,onBlur:E,hideNoResultsDisplay:O,renderCustomCallToAction:F,variant:_="default"}=n,M=gt(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[I,A]=a(0),[B,j]=a(""),[R,z]=a(null!=i?i:[]),[P,L]=a(0),N=Eo({height:P}),H=o(null),W=o(null),Y=o([]),V=o(null),U=o(null),K=o(I),X=o(R),q=e=>{K.current=e,A(e)},G=e=>{X.current=e,z(e)};u((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),u((()=>{ee(B)}),[B]),u((()=>{if(j(""),h){if(setTimeout((()=>{L(te())})),v)return;V&&V.current?(V.current.focus(),q(-1)):Y.current[I]&&Y.current[I].focus()}else L(0)}),[h]),u((()=>{if(h){const e=te();L(e)}}),[R,C]),u((()=>{G(null!=i?i:[]),j(""),q(0)}),[i]);const Z=e=>{const t=s?s(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=e=>{if("inline"!==D)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return eh.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!yD(x,(t=>wD(t,e))),ee=e=>{if(""===e)G(null!=i?i:[]);else if(m){const t=m(e);G(t)}else{const t=null==i?void 0:i.filter((t=>{const{title:r,secondaryLabel:n}=Z(t),i=e.trim().toLowerCase();return r.includes(i)||n&&n.includes(i)}));G(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<X.current.length-1){const e=K.current+1;null===(t=Y.current[e])||void 0===t||t.focus(),q(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(r=Y.current[e])||void 0===r||r.focus(),q(K.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;j(t),f&&f()},oe=()=>{var e;j(""),null===(e=V.current)||void 0===e||e.focus(),f&&f()},ae=()=>{$&&$()},se=()=>{E&&E()},le=n=>t(r,{children:[e(FD,{$maxLines:k,"aria-hidden":!0,children:n}),e(_D,{$maxLines:k,"aria-hidden":!0,children:n})]}),ce=r=>{const{title:n,secondaryLabel:i}=Z(r),o=Q(n),a=i&&Q(i);return t(OD,{$labelDisplayType:o||a?"next-line":D,children:[e(TD,{$truncateType:S,$maxLines:k,$variant:_,"aria-label":n,children:"middle"===S&&o?le(n):n}),i&&e(ED,{$truncateType:S,$maxLines:k,$labelDisplayType:D,"aria-label":i,children:"middle"===S&&a?le(i):i})]})},de=()=>{if(!$||"success"===C)return R.map(((r,n)=>e(SD,{$checked:J(r)&&!y,children:t(kD,{$hasNextLineLabel:"next-line"===D&&R.length>0&&s&&"string"!=typeof s(R[0]),onClick:e=>{ne(e,r)},ref:e=>Y.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:y,onBlur:se,$variant:_,children:[y&&e(MD,{checked:J(r),displaySize:"small"}),T?T(r,{selected:J(r)}):ce(r)]})},((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},ue=()=>{if(x&&y&&R.length>0&&!B&&"success"===C)return e(ID,{children:e(AD,{onClick:w,type:"button",$variant:_,children:0===x.length?"Select all":"Clear all"})},"selectAll")},he=()=>{if(!O&&(B||!g)&&0===R.length&&"success"===C)return t(BD,{"data-testid":"list-no-results",$variant:_,children:[e(jD,{"data-testid":"no-result-icon",$variant:_}),"No results found."]},"noResults")},ge=()=>{if($&&"loading"===C)return t(BD,{"data-testid":"list-loading",$variant:_,children:[e(RD,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return t(BD,{"data-testid":"list-fail",$variant:_,children:[e(jD,{"data-testid":"load-error-icon",$variant:_}),"Failed to load. ",e(AD,{onClick:ae,type:"button",$variant:_,children:"Try again."})]},"noResults")};return e(r,{children:t($D,{style:N,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(h)return t(CD,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},M,{children:[(g||m)&&"success"===C?e(YD,{ref:V,onChange:ie,value:B,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:_}):null,ue(),he(),ge(),pe(),de()]}))})(),(()=>{if(h&&F)return e("div",{ref:U,"data-testid":"custom-cta",children:F(b,R)})})()]})})},UD=_.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return M`
                border-bottom: ${Ic["width-010"]} ${Ic.solid}
                    ${Fc.border};
            `}}

    ${e=>e.$readOnly?M`
                border: 0;
                margin: 0;
            `:"right"===e.$position?M`
                        flex-direction: row-reverse;
                        margin: 0 ${Ac["spacing-16"]};
                    `:M`
                        flex-direction: row;
                        margin: 0 ${Ac["spacing-16"]};
                    `}
`,KD=_(gf)`
    padding: 0;
    width: auto;
`,XD=_.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Ac["spacing-12"]};
`,qD=_.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Mc["duration-250"]} ${Mc["ease-default"]};
    margin: 0 ${Ac["spacing-12"]};
    display: flex;
    align-items: center;
`,GD=_(be)`
    color: ${Fc.icon};
    height: ${_c.Spec["body-size-baseline"]};
    width: ${_c.Spec["body-size-baseline"]};
`,ZD=_.div`
    display: flex;
    flex: 1 1 auto;
`,QD=_(ad.BodyBL)`
    text-align: left;
    ${rd(2)}
    text-overflow: ellipsis;
`,JD=_(QD)`
    color: ${Fc["text-subtler"]};
`,eT=_.div`
    width: 1px;
    background: ${Fc.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return M`
                display: none;
            `}}

    ${e=>"right"===e.$position?M`
                    margin: 0 ${Ac["spacing-12"]};
                `:M`
                    margin: 0 ${Ac["spacing-12"]} 0 0;
                `}
`,tT=_(Pp)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Ac["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,rT=_(Pp)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Ac["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,nT=_(V$)``,iT=_.div`
    position: relative;
    display: flex;
    align-items: center;

    ${_c["body-baseline-regular"]}
    color: ${Fc.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return M`
                color: ${Fc["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?M`
                    margin-left: ${e.$readOnly?Ac["spacing-4"]:Ac["spacing-12"]};
                `:M`
                    margin-right: ${e.$readOnly?Ac["spacing-4"]:Ac["spacing-12"]};
                `};
`,oT=i.forwardRef(((n,i)=>{var{addon:s,error:l,onChange:c,readOnly:d,className:h,onBlur:g}=n,p=gt(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:f,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:C,onSelectOption:S,onHideOptions:k,onShowOptions:D,"data-selector-testid":T}=s.attributes,{position:E}=s,[O,F]=a(C),[_,M]=a(!1),I=o(null);u((()=>{F(C)}),[C]);const A=()=>{if(O)return $?$(O):x?x(O):O.toString()},B=e=>{!e&&k&&k(),e&&D&&D()},j=e=>{e.preventDefault(),p.disabled||(M(!_),B(!_))},R=(e,t)=>{var r;F(e),M(!1),B(!1),I&&(null===(r=I.current)||void 0===r||r.focus()),S&&S(e,t)},z=e=>{c&&c(e)},P=()=>{g&&g()},L=()=>{var e;M(!1),B(!1),I&&(null===(e=I.current)||void 0===e||e.focus())};return t(wf,{className:h,show:_,error:l&&!_,disabled:p.disabled,readOnly:d,onBlur:()=>{M(!1),B(!1),P()},children:[t(UD,{$expanded:_,$readOnly:d,$position:E,children:[d?O?e(XD,{children:e(QD,{"data-testid":"selector-label",children:A()})}):null:e(KD,{ref:I,type:"button",disabled:p.disabled,"data-testid":T||"addon-selector",onClick:j,children:t(r,{children:[t(ZD,{children:[f&&!O&&e(JD,{children:f}),O&&e(QD,{"data-testid":"selector-label",children:A()})]}),e(qD,{$expanded:_,children:e(GD,{})})]})}),e(eT,{$readOnly:d,$position:E}),e(nT,Object.assign({ref:i},p,{readOnly:d,error:l,onChange:z,"data-testid":p["data-testid"]||"input",onBlur:P,styleType:"no-border"}))]}),m&&m.length>0?e(VD,{listItems:m,selectedItems:C?[C]:[],onSelectItem:R,valueExtractor:x,listExtractor:w,visible:_,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:L}):e(r,{})]})})),aT=i.forwardRef(((r,n)=>{var{addon:i,error:o,className:a}=r,s=gt(r,["addon","error","className"]);const l=()=>e(rT,{$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:e(nT,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!i)return l();{const{type:r="label",position:c="left"}=i,{allowClear:d}=s;switch(r){case"list":{const t=i.attributes;return t.options&&t.options.length>0?e(oT,Object.assign({ref:n,addon:i,error:o,className:a},s)):l()}case"custom":{const r=i.attributes;return r.children?t(tT,{$error:o,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(iT,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),e(nT,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=i.attributes;return r.value?t(tT,{$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(iT,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),e(nT,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),sT=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(aT,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},y))})})),lT=_(aT)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Ac["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,cT=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Fc.icon,$activeColor:r=Fc["icon-primary"]})=>e?t:r};
    padding: ${Ac["spacing-12"]} ${Ac["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,dT=_.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,uT=_(ad.BodyBL)`
    color: ${Fc["text-subtler"]};
`,hT=_(Sd)`
    margin-right: ${Ac["spacing-8"]};
    color: ${Fc.icon};
`,gT=_.span`
    color: ${Fc["text-primary"]};
    text-decoration: underline;
    font-weight: ${_c.Spec["weight-semibold"]};
`,pT=_.span`
    display: flex;
    align-items: center;
    margin-right: ${Ac["spacing-8"]};
`,fT=_(Ve)`
    color: ${Fc["icon-warning"]};
    margin-right: ${Ac["spacing-8"]};
    height: 1em;
    width: 1em;
`,mT=_.span`
    color: ${Fc["text-warning"]};
`,bT=_(Hp)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${_c["body-baseline-regular"]}

    :hover, :active, :focus {
        ${gT} {
            color: ${Fc["text-hover"]};
        }
    }
`;var vT,yT,xT={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */vT=xT,yT=xT.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",i=16,o=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,g=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",i],["flip",512],["partial",o],["partialRight",a],["rearg",l]],p="[object Arguments]",f="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",k="[object RegExp]",D="[object Set]",T="[object String]",E="[object Symbol]",O="[object WeakMap]",F="[object ArrayBuffer]",_="[object DataView]",M="[object Float32Array]",I="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",j="[object Int32Array]",R="[object Uint8Array]",z="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),X=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,ie=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,oe=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,fe=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",De="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="['’]",Ee="["+xe+"]",Oe="["+De+"]",Fe="["+we+"]",_e="\\d+",Me="["+$e+"]",Ie="["+Ce+"]",Ae="[^"+xe+De+_e+$e+Ce+Se+"]",Be="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",ze="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",Le="\\u200d",Ne="(?:"+Ie+"|"+Ae+")",He="(?:"+Pe+"|"+Ae+")",We="(?:['’](?:d|ll|m|re|s|t|ve))?",Ye="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ve="(?:"+Fe+"|"+Be+")?",Ue="["+ke+"]?",Ke=Ue+Ve+"(?:"+Le+"(?:"+[je,Re,ze].join("|")+")"+Ue+Ve+")*",Xe="(?:"+[Me,Re,ze].join("|")+")"+Ke,qe="(?:"+[je+Fe+"?",Fe,Re,ze,Ee].join("|")+")",Ge=RegExp(Te,"g"),Ze=RegExp(Fe,"g"),Qe=RegExp(Be+"(?="+Be+")|"+qe+Ke,"g"),Je=RegExp([Pe+"?"+Ie+"+"+We+"(?="+[Oe,Pe,"$"].join("|")+")",He+"+"+Ye+"(?="+[Oe,Pe+Ne,"$"].join("|")+")",Pe+"?"+Ne+"+"+We,Pe+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_e,Xe].join("|"),"g"),et=RegExp("["+Le+xe+we+ke+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,rt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],nt=-1,it={};it[M]=it[I]=it[A]=it[B]=it[j]=it[R]=it[z]=it[P]=it[L]=!0,it[p]=it[f]=it[F]=it[m]=it[_]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[k]=it[D]=it[T]=it[O]=!1;var ot={};ot[p]=ot[f]=ot[F]=ot[_]=ot[m]=ot[b]=ot[M]=ot[I]=ot[A]=ot[B]=ot[j]=ot[w]=ot[$]=ot[C]=ot[k]=ot[D]=ot[T]=ot[E]=ot[R]=ot[z]=ot[P]=ot[L]=!0,ot[v]=ot[y]=ot[O]=!1;var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,lt=parseInt,ct="object"==typeof Ko&&Ko&&Ko.Object===Object&&Ko,dt="object"==typeof self&&self&&self.Object===Object&&self,ut=ct||dt||Function("return this")(),ht=yT&&!yT.nodeType&&yT,gt=ht&&vT&&!vT.nodeType&&vT,pt=gt&&gt.exports===ht,ft=pt&&ct.process,mt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||ft&&ft.binding&&ft.binding("util")}catch(e){}}(),bt=mt&&mt.isArrayBuffer,vt=mt&&mt.isDate,yt=mt&&mt.isMap,xt=mt&&mt.isRegExp,wt=mt&&mt.isSet,$t=mt&&mt.isTypedArray;function Ct(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function St(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Dt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Tt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Et(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function Ot(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function Ft(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function _t(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Mt(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function It(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function At(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Bt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var jt=Wt("length");function Rt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function zt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):zt(e,Nt,r)}function Lt(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Nt(e){return e!=e}function Ht(e,t){var r=null==e?0:e.length;return r?Ut(e,t)/r:u}function Wt(t){return function(r){return null==r?e:r[t]}}function Yt(t){return function(r){return null==t?e:t[r]}}function Vt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function Ut(t,r){for(var n,i=-1,o=t.length;++i<o;){var a=r(t[i]);a!==e&&(n=n===e?a:n+a)}return n}function Kt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Xt(e){return e?e.slice(0,ur(e)+1).replace(re,""):e}function qt(e){return function(t){return e(t)}}function Gt(e,t){return _t(t,(function(t){return e[t]}))}function Zt(e,t){return e.has(t)}function Qt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function Jt(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var er=Yt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tr=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rr(e){return"\\"+at[e]}function nr(e){return et.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function or(e,t){return function(r){return e(t(r))}}function ar(e,t){for(var r=-1,i=e.length,o=0,a=[];++r<i;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[o++]=r)}return a}function sr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function cr(e){return nr(e)?function(e){for(var t=Qe.lastIndex=0;Qe.test(e);)++t;return t}(e):jt(e)}function dr(e){return nr(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function ur(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var hr=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),gr=function ne(xe){var we=(xe=null==xe?ut:gr.defaults(ut.Object(),xe,gr.pick(ut,rt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,ke=xe.Math,De=xe.Object,Te=xe.RegExp,Ee=xe.String,Oe=xe.TypeError,Fe=we.prototype,_e=Se.prototype,Me=De.prototype,Ie=xe["__core-js_shared__"],Ae=_e.toString,Be=Me.hasOwnProperty,je=0,Re=function(){var e=/[^.]+$/.exec(Ie&&Ie.keys&&Ie.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ze=Me.toString,Pe=Ae.call(De),Le=ut._,Ne=Te("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=pt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=He?He.allocUnsafe:e,Ue=or(De.getPrototypeOf,De),Ke=De.create,Xe=Me.propertyIsEnumerable,qe=Fe.splice,Qe=We?We.isConcatSpreadable:e,et=We?We.iterator:e,at=We?We.toStringTag:e,ct=function(){try{var e=ho(De,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ut.clearTimeout&&xe.clearTimeout,ht=$e&&$e.now!==ut.Date.now&&$e.now,gt=xe.setTimeout!==ut.setTimeout&&xe.setTimeout,ft=ke.ceil,mt=ke.floor,jt=De.getOwnPropertySymbols,Yt=He?He.isBuffer:e,pr=xe.isFinite,fr=Fe.join,mr=or(De.keys,De),br=ke.max,vr=ke.min,yr=$e.now,xr=xe.parseInt,wr=ke.random,$r=Fe.reverse,Cr=ho(xe,"DataView"),Sr=ho(xe,"Map"),kr=ho(xe,"Promise"),Dr=ho(xe,"Set"),Tr=ho(xe,"WeakMap"),Er=ho(De,"create"),Or=Tr&&new Tr,Fr={},_r=zo(Cr),Mr=zo(Sr),Ir=zo(kr),Ar=zo(Dr),Br=zo(Tr),jr=We?We.prototype:e,Rr=jr?jr.valueOf:e,zr=jr?jr.toString:e;function Pr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Be.call(e,"__wrapped__"))return Po(e)}return new Hr(e)}var Lr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function Xr(e){var t=this.__data__=new Vr(e);this.size=t.size}function qr(e,t){var r=Ya(e),n=!r&&Wa(e),i=!r&&!n&&Xa(e),o=!r&&!n&&!i&&cs(e),a=r||n||i||o,s=a?Kt(e.length,Ee):[],l=s.length;for(var c in e)!t&&!Be.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Gr(t){var r=t.length;return r?t[Xn(0,r-1)]:e}function Zr(e,t){return Bo(Oi(e),sn(t,0,e.length))}function Qr(e){return Bo(Oi(e))}function Jr(t,r,n){(n!==e&&!La(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var i=t[r];Be.call(t,r)&&La(i,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function nn(e,t){return e&&Fi(t,_s(t),e)}function on(e,t,r){"__proto__"==t&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,i=r.length,o=we(i),a=null==t;++n<i;)o[n]=a?e:Ds(t,r[n]);return o}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,i,o,a){var s,l=1&r,c=2&r,d=4&r;if(n&&(s=o?n(t,i,o,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Oi(t,s)}else{var h=fo(t),g=h==y||h==x;if(Xa(t))return Ci(t,l);if(h==C||h==p||g&&!o){if(s=c||g?{}:bo(t),!l)return c?function(e,t){return Fi(e,po(e),t)}(t,function(e,t){return e&&Fi(t,Ms(t),e)}(s,t)):function(e,t){return Fi(e,go(e),t)}(t,nn(s,t))}else{if(!ot[h])return o?t:{};s=function(e,t,r){var n,i=e.constructor;switch(t){case F:return Si(e);case m:case b:return new i(+e);case _:return function(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case M:case I:case A:case B:case j:case R:case z:case P:case L:return ki(e,r);case w:return new i;case $:case T:return new i(e);case k:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case D:return new i;case E:return n=e,Rr?De(Rr.call(n)):{}}}(t,h,l)}}a||(a=new Xr);var f=a.get(t);if(f)return f;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,i){s.set(i,ln(e,r,n,i,t,a))}));var v=u?e:(d?c?io:no:c?Ms:_s)(t);return kt(v||t,(function(e,i){v&&(e=t[i=e]),en(s,i,ln(e,r,n,i,t,a))})),s}function cn(t,r,n){var i=n.length;if(null==t)return!i;for(t=De(t);i--;){var o=n[i],a=r[o],s=t[o];if(s===e&&!(o in t)||!a(s))return!1}return!0}function dn(r,n,i){if("function"!=typeof r)throw new Oe(t);return _o((function(){r.apply(e,i)}),n)}function un(e,t,r,n){var i=-1,o=Ot,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=_t(t,qt(r))),n?(o=Ft,a=!1):t.length>=200&&(o=Zt,a=!1,t=new Kr(t));e:for(;++i<s;){var d=e[i],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else o(t,u,n)||l.push(d)}return l}Pr.templateSettings={escape:X,evaluate:q,interpolate:G,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=Er?Er(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(Er){var i=n[t];return i===r?e:i}return Be.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return Er?r[t]!==e:Be.call(r,t)},Yr.prototype.set=function(t,n){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=Er&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():qe.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return co(this,e).get(e)},Ur.prototype.has=function(e){return co(this,e).has(e)},Ur.prototype.set=function(e,t){var r=co(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},Xr.prototype.clear=function(){this.__data__=new Vr,this.size=0},Xr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Xr.prototype.get=function(e){return this.__data__.get(e)},Xr.prototype.has=function(e){return this.__data__.has(e)},Xr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Ii(xn),gn=Ii(wn,!0);function pn(e,t){var r=!0;return hn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function fn(t,r,n){for(var i=-1,o=t.length;++i<o;){var a=t[i],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return hn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function bn(e,t,r,n,i){var o=-1,a=e.length;for(r||(r=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&r(s)?t>1?bn(s,t-1,r,n,i):Mt(i,s):n||(i[i.length]=s)}return i}var vn=Ai(),yn=Ai(!0);function xn(e,t){return e&&vn(e,t,_s)}function wn(e,t){return e&&yn(e,t,_s)}function $n(e,t){return Et(t,(function(t){return Za(e[t])}))}function Cn(t,r){for(var n=0,i=(r=yi(r,t)).length;null!=t&&n<i;)t=t[Ro(r[n++])];return n&&n==i?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:Mt(n,r(e))}function kn(t){return null==t?t===e?"[object Undefined]":"[object Null]":at&&at in De(t)?function(t){var r=Be.call(t,at),n=t[at];try{t[at]=e;var i=!0}catch(e){}var o=ze.call(t);return i&&(r?t[at]=n:delete t[at]),o}(t):function(e){return ze.call(e)}(t)}function Dn(e,t){return e>t}function Tn(e,t){return null!=e&&Be.call(e,t)}function En(e,t){return null!=e&&t in De(e)}function On(t,r,n){for(var i=n?Ft:Ot,o=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&r&&(u=_t(u,qt(r))),c=vr(u.length,c),l[s]=!n&&(r||o>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var h=-1,g=l[0];e:for(;++h<o&&d.length<c;){var p=u[h],f=r?r(p):p;if(p=n||0!==p?p:0,!(g?Zt(g,f):i(d,f,n))){for(s=a;--s;){var m=l[s];if(!(m?Zt(m,f):i(t[s],f,n)))continue e}g&&g.push(f),d.push(p)}}return d}function Fn(t,r,n){var i=null==(t=Eo(t,r=yi(r,t)))?t:t[Ro(Go(r))];return null==i?e:Ct(i,t,n)}function _n(e){return ts(e)&&kn(e)==p}function Mn(t,r,n,i,o){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,i,o,a){var s=Ya(t),l=Ya(r),c=s?f:fo(t),d=l?f:fo(r),u=(c=c==p?C:c)==C,h=(d=d==p?C:d)==C,g=c==d;if(g&&Xa(t)){if(!Xa(r))return!1;s=!0,u=!1}if(g&&!u)return a||(a=new Xr),s||cs(t)?to(t,r,n,i,o,a):function(e,t,r,n,i,o,a){switch(r){case _:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case F:return!(e.byteLength!=t.byteLength||!o(new Ye(e),new Ye(t)));case m:case b:case $:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case k:case T:return e==t+"";case w:var s=ir;case D:var l=1&n;if(s||(s=sr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=to(s(e),s(t),n,i,o,a);return a.delete(e),d;case E:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(t,r,c,n,i,o,a);if(!(1&n)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,O=x?r.value():r;return a||(a=new Xr),o(S,O,n,i,a)}}return!!g&&(a||(a=new Xr),function(t,r,n,i,o,a){var s=1&n,l=no(t),c=l.length,d=no(r),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var g=l[h];if(!(s?g in r:Be.call(r,g)))return!1}var p=a.get(t),f=a.get(r);if(p&&f)return p==r&&f==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<c;){var v=t[g=l[h]],y=r[g];if(i)var x=s?i(y,v,g,r,t,a):i(v,y,g,t,r,a);if(!(x===e?v===y||o(v,y,n,i,a):x)){m=!1;break}b||(b="constructor"==g)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,i,o,a))}(t,r,n,i,Mn,o))}function In(t,r,n,i){var o=n.length,a=o,s=!i;if(null==t)return!a;for(t=De(t);o--;){var l=n[o];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++o<a;){var c=(l=n[o])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new Xr;if(i)var g=i(d,u,c,t,r,h);if(!(g===e?Mn(u,d,3,i,h):g))return!1}}return!0}function An(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Za(e)?Ne:pe).test(zo(e));var t}function Bn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Ln(e):hl(e)}function jn(e){if(!So(e))return mr(e);var t=[];for(var r in De(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in De(e))t.push(r);return t}(e);var t=So(e),r=[];for(var n in e)("constructor"!=n||!t&&Be.call(e,n))&&r.push(n);return r}function zn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return hn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Ln(e){var t=uo(e);return 1==t.length&&t[0][2]?Do(t[0][0],t[0][1]):function(r){return r===e||In(r,e,t)}}function Nn(t,r){return wo(t)&&ko(r)?Do(Ro(t),r):function(n){var i=Ds(n,t);return i===e&&i===r?Ts(n,t):Mn(r,i,3)}}function Hn(t,r,n,i,o){t!==r&&vn(r,(function(a,s){if(o||(o=new Xr),es(a))!function(t,r,n,i,o,a,s){var l=Oo(t,n),c=Oo(r,n),d=s.get(c);if(d)Jr(t,n,d);else{var u=a?a(l,c,n+"",t,r,s):e,h=u===e;if(h){var g=Ya(c),p=!g&&Xa(c),f=!g&&!p&&cs(c);u=c,g||p||f?Ya(l)?u=l:Ka(l)?u=Oi(l):p?(h=!1,u=Ci(c,!0)):f?(h=!1,u=ki(c,!0)):u=[]:is(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):h=!1}h&&(s.set(c,u),o(u,c,i,a,s),s.delete(c)),Jr(t,n,u)}}(t,r,s,n,Hn,i,o);else{var l=i?i(Oo(t,s),a,s+"",t,r,o):e;l===e&&(l=a),Jr(t,s,l)}}),Ms)}function Wn(t,r){var n=t.length;if(n)return yo(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?_t(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=_t(t,qt(lo()));var i=Pn(e,(function(e,r,i){var o=_t(t,(function(t){return t(e)}));return{criteria:o,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;++n<a;){var l=Di(i[n],o[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(o,yi(a,e),s)}return o}function Un(e,t,r,n){var i=n?Lt:Pt,o=-1,a=t.length,s=e;for(e===t&&(t=Oi(t)),r&&(s=_t(e,qt(r)));++o<a;)for(var l=0,c=t[o],d=r?r(c):c;(l=i(s,d,l,n))>-1;)s!==e&&qe.call(s,l,1),qe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;yo(i)?qe.call(e,i,1):ui(e,i)}}return e}function Xn(e,t){return e+mt(wr()*(t-e+1))}function qn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Mo(To(e,t,nl),e+"")}function Zn(e){return Gr(Ls(e))}function Qn(e,t){var r=Ls(e);return Bo(r,sn(t,0,r.length))}function Jn(t,r,n,i){if(!es(t))return t;for(var o=-1,a=(r=yi(r,t)).length,s=a-1,l=t;null!=l&&++o<a;){var c=Ro(r[o]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=s){var u=l[c];(d=i?i(u,c,l):e)===e&&(d=es(u)?u:yo(r[o+1])?[]:{})}en(l,c,d),l=l[c]}return t}var ei=Or?function(e,t){return Or.set(e,t),e}:nl,ti=ct?function(e,t){return ct(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ri(e){return Bo(Ls(e))}function ni(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=we(i);++n<i;)o[n]=e[n+t];return o}function ii(e,t){var r;return hn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function oi(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ai(e,t,nl,r)}function ai(t,r,n,i){var o=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),d=r===e;o<a;){var u=mt((o+a)/2),h=n(t[u]),g=h!==e,p=null===h,f=h==h,m=ls(h);if(s)var b=i||f;else b=d?f&&(i||g):l?f&&g&&(i||!p):c?f&&g&&!p&&(i||!m):!p&&!m&&(i?h<=r:h<r);b?o=u+1:a=u}return vr(a,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?u:+e}function ci(e){if("string"==typeof e)return e;if(Ya(e))return _t(e,ci)+"";if(ls(e))return zr?zr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,r){var n=-1,i=Ot,o=e.length,a=!0,s=[],l=s;if(r)a=!1,i=Ft;else if(o>=200){var c=t?null:qi(e);if(c)return sr(c);a=!1,i=Zt,l=new Kr}else l=t?[]:s;e:for(;++n<o;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Eo(e,t=yi(t,e)))||delete e[Ro(Go(t))]}function hi(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function gi(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ni(e,n?0:o,n?o+1:i):ni(e,n?o+1:0,n?i:o)}function pi(e,t){var r=e;return r instanceof Wr&&(r=r.value()),It(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function fi(e,t,r){var n=e.length;if(n<2)return n?di(e[0]):[];for(var i=-1,o=we(n);++i<n;)for(var a=e[i],s=-1;++s<n;)s!=i&&(o[i]=un(o[i]||a,e[s],t,r));return di(bn(o,1),t,r)}function mi(t,r,n){for(var i=-1,o=t.length,a=r.length,s={};++i<o;){var l=i<a?r[i]:e;n(s,t[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:nl}function yi(e,t){return Ya(e)?e:wo(e,t)?[e]:jo(vs(e))}var xi=Gn;function wi(t,r,n){var i=t.length;return n=n===e?i:n,!r&&n>=i?t:ni(t,r,n)}var $i=dt||function(e){return ut.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Si(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ki(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Di(t,r){if(t!==r){var n=t!==e,i=null===t,o=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,d=ls(r);if(!l&&!d&&!a&&t>r||a&&s&&c&&!l&&!d||i&&s&&c||!n&&c||!o)return 1;if(!i&&!a&&!d&&t<r||d&&n&&o&&!i&&!a||l&&n&&o||!s&&o||!c)return-1}return 0}function Ti(e,t,r,n){for(var i=-1,o=e.length,a=r.length,s=-1,l=t.length,c=br(o-a,0),d=we(l+c),u=!n;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[r[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Ei(e,t,r,n){for(var i=-1,o=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(o-s,0),u=we(d+c),h=!n;++i<d;)u[i]=e[i];for(var g=i;++l<c;)u[g+l]=t[l];for(;++a<s;)(h||i<o)&&(u[g+r[a]]=e[i++]);return u}function Oi(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function Fi(t,r,n,i){var o=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=i?i(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),o?on(n,l,c):en(n,l,c)}return n}function _i(e,t){return function(r,n){var i=Ya(r)?St:rn,o=t?t():{};return i(r,e,lo(n,2),o)}}function Mi(t){return Gn((function(r,n){var i=-1,o=n.length,a=o>1?n[o-1]:e,s=o>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(o--,a):e,s&&xo(n[0],n[1],s)&&(a=o<3?e:a,o=1),r=De(r);++i<o;){var l=n[i];l&&t(r,l,i,a)}return r}))}function Ii(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=De(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function Ai(e){return function(t,r,n){for(var i=-1,o=De(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}}function Bi(t){return function(r){var n=nr(r=vs(r))?dr(r):e,i=n?n[0]:r.charAt(0),o=n?wi(n,1).join(""):r.slice(1);return i[t]()+o}}function ji(e){return function(t){return It(Zs(Ws(t).replace(Ge,"")),e,"")}}function Ri(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function zi(t){return function(r,n,i){var o=De(r);if(!Ua(r)){var a=lo(n,3);r=_s(r),n=function(e){return a(o[e],e,o)}}var s=t(r,n,i);return s>-1?o[a?r[s]:s]:e}}function Pi(r){return ro((function(n){var i=n.length,o=i,a=Hr.prototype.thru;for(r&&n.reverse();o--;){var s=n[o];if("function"!=typeof s)throw new Oe(t);if(a&&!l&&"wrapper"==ao(s))var l=new Hr([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=n[o]),d="wrapper"==c?oo(s):e;l=d&&$o(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&$o(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,o=i?n[r].apply(this,e):t;++r<i;)o=n[r].call(this,o);return o}}))}function Li(t,r,n,i,o,a,l,c,d,u){var h=r&s,g=1&r,p=2&r,f=24&r,m=512&r,b=p?e:Ri(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(f)var w=so(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(i&&(y=Ti(y,i,o,f)),a&&(y=Ei(y,a,l,f)),v-=$,f&&v<u){var C=ar(y,w);return Ki(t,r,Li,s.placeholder,n,y,C,c,d,u-v)}var S=g?n:this,k=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,i=vr(r.length,n),o=Oi(t);i--;){var a=r[i];t[i]=yo(a,n)?o[a]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ut&&this instanceof s&&(k=b||Ri(k)),k.apply(S,y)}}function Ni(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function Hi(t,r){return function(n,i){var o;if(n===e&&i===e)return r;if(n!==e&&(o=n),i!==e){if(o===e)return i;"string"==typeof n||"string"==typeof i?(n=ci(n),i=ci(i)):(n=li(n),i=li(i)),o=t(n,i)}return o}}function Wi(e){return ro((function(t){return t=_t(t,qt(lo())),Gn((function(r){var n=this;return e(t,(function(e){return Ct(e,n,r)}))}))}))}function Yi(t,r){var n=(r=r===e?" ":ci(r)).length;if(n<2)return n?qn(r,t):r;var i=qn(r,ft(t/cr(r)));return nr(r)?wi(dr(i),0,t).join(""):i.slice(0,t)}function Vi(t){return function(r,n,i){return i&&"number"!=typeof i&&xo(r,n,i)&&(n=i=e),r=gs(r),n===e?(n=r,r=0):n=gs(n),function(e,t,r,n){for(var i=-1,o=br(ft((t-e)/(r||1)),0),a=we(o);o--;)a[n?o:++i]=e,e+=r;return a}(r,n,i=i===e?r<n?1:-1:gs(i),t)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Ki(t,r,n,i,s,l,c,d,u,h){var g=8&r;r|=g?o:a,4&(r&=~(g?a:o))||(r&=-4);var p=[t,r,s,g?l:e,g?c:e,g?e:l,g?e:c,d,u,h],f=n.apply(e,p);return $o(t)&&Fo(f,p),f.placeholder=i,Io(f,t,r)}function Xi(e){var t=ke[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&pr(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var qi=Dr&&1/sr(new Dr([,-0]))[1]==c?function(e){return new Dr(e)}:ll;function Gi(e){return function(t){var r=fo(t);return r==w?ir(t):r==D?lr(t):function(e,t){return _t(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(r,c,d,u,h,g,p,f){var m=2&c;if(!m&&"function"!=typeof r)throw new Oe(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),p=p===e?p:br(ps(p),0),f=f===e?f:ps(f),b-=h?h.length:0,c&a){var v=u,y=h;u=h=e}var x=m?e:oo(r),w=[r,c,d,u,h,v,y,g,p,f];if(x&&function(e,t){var r=e[1],i=t[1],o=r|i,a=o<131,c=i==s&&8==r||i==s&&r==l&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&i&&(e[2]=t[2],o|=1&r?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Ti(u,d,t[4]):d,e[4]=u?ar(e[3],n):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Ei(u,d,t[6]):d,e[6]=u?ar(e[5],n):t[6]),(d=t[7])&&(e[7]=d),i&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o}(w,x),r=w[0],c=w[1],d=w[2],u=w[3],h=w[4],!(f=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==i?function(t,r,n){var i=Ri(t);return function o(){for(var a=arguments.length,s=we(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:ar(s,c);return(a-=d.length)<n?Ki(t,r,Li,o.placeholder,e,s,d,e,e,n-a):Ct(this&&this!==ut&&this instanceof o?i:t,this,s)}}(r,c,f):c!=o&&33!=c||h.length?Li.apply(e,w):function(e,t,r,n){var i=1&t,o=Ri(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=we(c+s),u=this&&this!==ut&&this instanceof t?o:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return Ct(u,i?r:this,d)}}(r,c,d,u);else var $=function(e,t,r){var n=1&t,i=Ri(e);return function t(){return(this&&this!==ut&&this instanceof t?i:e).apply(n?r:this,arguments)}}(r,c,d);return Io((x?ei:Fo)($,w),r,c)}function Qi(t,r,n,i){return t===e||La(t,Me[n])&&!Be.call(i,n)?r:t}function Ji(t,r,n,i,o,a){return es(t)&&es(r)&&(a.set(r,t),Hn(t,r,e,Ji,a),a.delete(r)),t}function eo(t){return is(t)?e:t}function to(t,r,n,i,o,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(r);if(d&&u)return d==r&&u==t;var h=-1,g=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++h<l;){var f=t[h],m=r[h];if(i)var b=s?i(m,f,h,r,t,a):i(f,m,h,t,r,a);if(b!==e){if(b)continue;g=!1;break}if(p){if(!Bt(r,(function(e,t){if(!Zt(p,t)&&(f===e||o(f,e,n,i,a)))return p.push(t)}))){g=!1;break}}else if(f!==m&&!o(f,m,n,i,a)){g=!1;break}}return a.delete(t),a.delete(r),g}function ro(t){return Mo(To(t,e,Vo),t+"")}function no(e){return Sn(e,_s,go)}function io(e){return Sn(e,Ms,po)}var oo=Or?function(e){return Or.get(e)}:ll;function ao(e){for(var t=e.name+"",r=Fr[t],n=Be.call(Fr,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Be.call(Pr,"placeholder")?Pr:e).placeholder}function lo(){var e=Pr.iteratee||il;return e=e===il?Bn:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=_s(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,ko(i)]}return t}function ho(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var go=jt?function(e){return null==e?[]:(e=De(e),Et(jt(e),(function(t){return Xe.call(e,t)})))}:fl,po=jt?function(e){for(var t=[];e;)Mt(t,go(e)),e=Ue(e);return t}:fl,fo=kn;function mo(e,t,r){for(var n=-1,i=(t=yi(t,e)).length,o=!1;++n<i;){var a=Ro(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Ya(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Lr(Ue(e))}function vo(e){return Ya(e)||Wa(e)||!!(Qe&&e&&e[Qe])}function yo(e,t){var r=typeof e;return!!(t=null==t?d:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yo(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wo(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||Q.test(e)||!Z.test(e)||null!=t&&e in De(t)}function $o(e){var t=ao(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=oo(r);return!!n&&e===n[0]}(Cr&&fo(new Cr(new ArrayBuffer(1)))!=_||Sr&&fo(new Sr)!=w||kr&&fo(kr.resolve())!=S||Dr&&fo(new Dr)!=D||Tr&&fo(new Tr)!=O)&&(fo=function(t){var r=kn(t),n=r==C?t.constructor:e,i=n?zo(n):"";if(i)switch(i){case _r:return _;case Mr:return w;case Ir:return S;case Ar:return D;case Br:return O}return r});var Co=Ie?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Me)}function ko(e){return e==e&&!es(e)}function Do(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in De(n))}}function To(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,i=-1,o=br(e.length-r,0),a=we(o);++i<o;)a[i]=e[r+i];i=-1;for(var s=we(r+1);++i<r;)s[i]=e[i];return s[r]=n(a),Ct(t,this,s)}}function Eo(e,t){return t.length<2?e:Cn(e,ni(t,0,-1))}function Oo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Fo=Ao(ei),_o=gt||function(e,t){return ut.setTimeout(e,t)},Mo=Ao(ti);function Io(e,t,r){var n=t+"";return Mo(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ie,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(g,(function(r){var n="_."+r[0];t&r[1]&&!Ot(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(oe);return t?t[1].split(ae):[]}(n),r)))}function Ao(t){var r=0,n=0;return function(){var i=yr(),o=16-(i-n);if(n=i,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Bo(t,r){var n=-1,i=t.length,o=i-1;for(r=r===e?i:r;++n<r;){var a=Xn(n,o),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var jo=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,i){t.push(n?i.replace(ce,"$1"):r||e)})),t}));function Ro(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function zo(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Oi(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),No=Gn((function(t,r){var n=Go(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),lo(n,2)):[]})),Ho=Gn((function(t,r){var n=Go(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wo(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),zt(e,lo(t,3),i)}function Yo(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var o=i-1;return n!==e&&(o=ps(n),o=n<0?br(i+o,0):vr(o,i-1)),zt(t,lo(r,3),o,!0)}function Vo(e){return null!=e&&e.length?bn(e,1):[]}function Uo(t){return t&&t.length?t[0]:e}var Ko=Gn((function(e){var t=_t(e,bi);return t.length&&t[0]===e[0]?On(t):[]})),Xo=Gn((function(t){var r=Go(t),n=_t(t,bi);return r===Go(n)?r=e:n.pop(),n.length&&n[0]===t[0]?On(n,lo(r,2)):[]})),qo=Gn((function(t){var r=Go(t),n=_t(t,bi);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?On(n,e,r):[]}));function Go(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Zo=Gn(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Jo=ro((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,_t(t,(function(e){return yo(e,r)?+e:e})).sort(Di)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return di(bn(e,1,Ka,!0))})),ra=Gn((function(t){var r=Go(t);return Ka(r)&&(r=e),di(bn(t,1,Ka,!0),lo(r,2))})),na=Gn((function(t){var r=Go(t);return r="function"==typeof r?r:e,di(bn(t,1,Ka,!0),e,r)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Et(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),Kt(t,(function(t){return _t(e,Wt(t))}))}function oa(t,r){if(!t||!t.length)return[];var n=ia(t);return null==r?n:_t(n,(function(t){return Ct(r,e,t)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return fi(Et(e,Ka))})),la=Gn((function(t){var r=Go(t);return Ka(r)&&(r=e),fi(Et(t,Ka),lo(r,2))})),ca=Gn((function(t){var r=Go(t);return r="function"==typeof r?r:e,fi(Et(t,Ka),e,r)})),da=Gn(ia),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,oa(t,n)}));function ha(e){var t=Pr(e);return t.__chain__=!0,t}function ga(e,t){return t(e)}var pa=ro((function(t){var r=t.length,n=r?t[0]:0,i=this.__wrapped__,o=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&i instanceof Wr&&yo(n)?((i=i.slice(n,+n+(r?1:0))).__actions__.push({func:ga,args:[o],thisArg:e}),new Hr(i,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(o)})),fa=_i((function(e,t,r){Be.call(e,r)?++e[r]:on(e,r,1)})),ma=zi(Wo),ba=zi(Yo);function va(e,t){return(Ya(e)?kt:hn)(e,lo(t,3))}function ya(e,t){return(Ya(e)?Dt:gn)(e,lo(t,3))}var xa=_i((function(e,t,r){Be.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,i="function"==typeof t,o=Ua(e)?we(e.length):[];return hn(e,(function(e){o[++n]=i?Ct(t,e,r):Fn(e,t,r)})),o})),$a=_i((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?_t:Pn)(e,lo(t,3))}var Sa=_i((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),ka=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xo(e,t[0],t[1])?t=[]:r>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),Da=ht||function(){return ut.Date.now()};function Ta(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Zi(t,s,e,e,e,e,r)}function Ea(r,n){var i;if("function"!=typeof n)throw new Oe(t);return r=ps(r),function(){return--r>0&&(i=n.apply(this,arguments)),r<=1&&(n=e),i}}var Oa=Gn((function(e,t,r){var n=1;if(r.length){var i=ar(r,so(Oa));n|=o}return Zi(e,n,t,r,i)})),Fa=Gn((function(e,t,r){var n=3;if(r.length){var i=ar(r,so(Fa));n|=o}return Zi(t,n,e,r,i)}));function _a(r,n,i){var o,a,s,l,c,d,u=0,h=!1,g=!1,p=!0;if("function"!=typeof r)throw new Oe(t);function f(t){var n=o,i=a;return o=a=e,u=t,l=r.apply(i,n)}function m(t){var r=t-d;return d===e||r>=n||r<0||g&&t-u>=s}function b(){var e=Da();if(m(e))return v(e);c=_o(b,function(e){var t=n-(e-d);return g?vr(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&o?f(t):(o=a=e,l)}function y(){var t=Da(),r=m(t);if(o=arguments,a=this,d=t,r){if(c===e)return function(e){return u=e,c=_o(b,n),h?f(e):l}(d);if(g)return $i(c),c=_o(b,n),f(d)}return c===e&&(c=_o(b,n)),l}return n=ms(n)||0,es(i)&&(h=!!i.leading,s=(g="maxWait"in i)?br(ms(i.maxWait)||0,n):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==e&&$i(c),u=0,o=d=a=c=e},y.flush=function(){return c===e?l:v(Da())},y}var Ma=Gn((function(e,t){return dn(e,1,t)})),Ia=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Oe(t);var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return n.cache=o.set(i,a)||o,a};return n.cache=new(Aa.Cache||Ur),n}function Ba(e){if("function"!=typeof e)throw new Oe(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var ja=xi((function(e,t){var r=(t=1==t.length&&Ya(t[0])?_t(t[0],qt(lo())):_t(bn(t,1),qt(lo()))).length;return Gn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return Ct(e,this,n)}))})),Ra=Gn((function(t,r){var n=ar(r,so(Ra));return Zi(t,o,e,r,n)})),za=Gn((function(t,r){var n=ar(r,so(za));return Zi(t,a,e,r,n)})),Pa=ro((function(t,r){return Zi(t,l,e,e,e,r)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(Dn),Ha=Ui((function(e,t){return e>=t})),Wa=_n(function(){return arguments}())?_n:function(e){return ts(e)&&Be.call(e,"callee")&&!Xe.call(e,"callee")},Ya=we.isArray,Va=bt?qt(bt):function(e){return ts(e)&&kn(e)==F};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var Xa=Yt||ml,qa=vt?qt(vt):function(e){return ts(e)&&kn(e)==b};function Ga(e){if(!ts(e))return!1;var t=kn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=kn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=yt?qt(yt):function(e){return ts(e)&&fo(e)==w};function ns(e){return"number"==typeof e||ts(e)&&kn(e)==$}function is(e){if(!ts(e)||kn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Pe}var os=xt?qt(xt):function(e){return ts(e)&&kn(e)==k},as=wt?qt(wt):function(e){return ts(e)&&fo(e)==D};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&kn(e)==T}function ls(e){return"symbol"==typeof e||ts(e)&&kn(e)==E}var cs=$t?qt($t):function(e){return ts(e)&&Ja(e.length)&&!!it[kn(e)]},ds=Ui(zn),us=Ui((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?dr(e):Oi(e);if(et&&e[et])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[et]());var t=fo(e);return(t==w?ir:t==D?sr:Ls)(e)}function gs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=gs(e),r=t%1;return t==t?r?t-r:t:0}function fs(e){return e?sn(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xt(e);var r=ge.test(e);return r||fe.test(e)?lt(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return Fi(e,Ms(e))}function vs(e){return null==e?"":ci(e)}var ys=Mi((function(e,t){if(So(t)||Ua(t))Fi(t,_s(t),e);else for(var r in t)Be.call(t,r)&&en(e,r,t[r])})),xs=Mi((function(e,t){Fi(t,Ms(t),e)})),ws=Mi((function(e,t,r,n){Fi(t,Ms(t),e,n)})),$s=Mi((function(e,t,r,n){Fi(t,_s(t),e,n)})),Cs=ro(an),Ss=Gn((function(t,r){t=De(t);var n=-1,i=r.length,o=i>2?r[2]:e;for(o&&xo(r[0],r[1],o)&&(i=1);++n<i;)for(var a=r[n],s=Ms(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||La(u,Me[d])&&!Be.call(t,d))&&(t[d]=a[d])}return t})),ks=Gn((function(t){return t.push(e,Ji),Ct(As,e,t)}));function Ds(t,r,n){var i=null==t?e:Cn(t,r);return i===e?n:i}function Ts(e,t){return null!=e&&mo(e,t,En)}var Es=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),e[t]=r}),el(nl)),Os=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),lo),Fs=Gn(Fn);function _s(e){return Ua(e)?qr(e):jn(e)}function Ms(e){return Ua(e)?qr(e,!0):Rn(e)}var Is=Mi((function(e,t,r){Hn(e,t,r)})),As=Mi((function(e,t,r,n){Hn(e,t,r,n)})),Bs=ro((function(e,t){var r={};if(null==e)return r;var n=!1;t=_t(t,(function(t){return t=yi(t,e),n||(n=t.length>1),t})),Fi(e,io(e),r),n&&(r=ln(r,7,eo));for(var i=t.length;i--;)ui(r,t[i]);return r})),js=ro((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Ts(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=_t(io(e),(function(e){return[e]}));return t=lo(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var zs=Gi(_s),Ps=Gi(Ms);function Ls(e){return null==e?[]:Gt(e,_s(e))}var Ns=ji((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,er).replace(Ze,"")}var Ys=ji((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=ji((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Bi("toLowerCase"),Ks=ji((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Xs=ji((function(e,t,r){return e+(r?" ":"")+Gs(t)})),qs=ji((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=Bi("toUpperCase");function Zs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return tt.test(e)}(t)?function(e){return e.match(Je)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Qs=Gn((function(t,r){try{return Ct(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ro((function(e,t){return kt(t,(function(t){t=Ro(t),on(e,t,Oa(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),rl=Pi(!0);function nl(e){return e}function il(e){return Bn("function"==typeof e?e:ln(e,1))}var ol=Gn((function(e,t){return function(r){return Fn(r,e,t)}})),al=Gn((function(e,t){return function(r){return Fn(e,r,t)}}));function sl(e,t,r){var n=_s(t),i=$n(t,n);null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=$n(t,_s(t)));var o=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return kt(i,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=Oi(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Wi(_t),dl=Wi(Tt),ul=Wi(Bt);function hl(e){return wo(e)?Wt(Ro(e)):function(e){return function(t){return Cn(t,e)}}(e)}var gl=Vi(),pl=Vi(!0);function fl(){return[]}function ml(){return!1}var bl,vl=Hi((function(e,t){return e+t}),0),yl=Xi("ceil"),xl=Hi((function(e,t){return e/t}),1),wl=Xi("floor"),$l=Hi((function(e,t){return e*t}),1),Cl=Xi("round"),Sl=Hi((function(e,t){return e-t}),0);return Pr.after=function(e,r){if("function"!=typeof r)throw new Oe(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Pr.ary=Ta,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Ea,Pr.bind=Oa,Pr.bindAll=Js,Pr.bindKey=Fa,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Pr.chain=ha,Pr.chunk=function(t,r,n){r=(n?xo(t,r,n):r===e)?1:br(ps(r),0);var i=null==t?0:t.length;if(!i||r<1)return[];for(var o=0,a=0,s=we(ft(i/r));o<i;)s[a++]=ni(t,o,o+=r);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Ya(r)?Oi(r):[r],bn(t,1))},Pr.cond=function(e){var r=null==e?0:e.length,n=lo();return e=r?_t(e,(function(e){if("function"!=typeof e[1])throw new Oe(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var i=e[n];if(Ct(i[0],this,t))return Ct(i[1],this,t)}}))},Pr.conforms=function(e){return function(e){var t=_s(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=fa,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function t(r,n,i){var o=Zi(r,8,e,e,e,e,e,n=i?e:n);return o.placeholder=t.placeholder,o},Pr.curryRight=function t(r,n,o){var a=Zi(r,i,e,e,e,e,e,n=o?e:n);return a.placeholder=t.placeholder,a},Pr.debounce=_a,Pr.defaults=Ss,Pr.defaultsDeep=ks,Pr.defer=Ma,Pr.delay=Ia,Pr.difference=Lo,Pr.differenceBy=No,Pr.differenceWith=Ho,Pr.drop=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,(r=n||r===e?1:ps(r))<0?0:r,i):[]},Pr.dropRight=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,0,(r=i-(r=n||r===e?1:ps(r)))<0?0:r):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0):[]},Pr.fill=function(t,r,n,i){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xo(t,r,n)&&(n=0,i=o),function(t,r,n,i){var o=t.length;for((n=ps(n))<0&&(n=-n>o?0:o+n),(i=i===e||i>o?o:ps(i))<0&&(i+=o),i=n>i?0:fs(i);n<i;)t[n++]=r;return t}(t,r,n,i)):[]},Pr.filter=function(e,t){return(Ya(e)?Et:mn)(e,lo(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Pr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Pr.flatten=Vo,Pr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Pr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Pr.flip=function(e){return Zi(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,_s(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Ms(e))},Pr.groupBy=xa,Pr.initial=function(e){return null!=e&&e.length?ni(e,0,-1):[]},Pr.intersection=Ko,Pr.intersectionBy=Xo,Pr.intersectionWith=qo,Pr.invert=Es,Pr.invertBy=Os,Pr.invokeMap=wa,Pr.iteratee=il,Pr.keyBy=$a,Pr.keys=_s,Pr.keysIn=Ms,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,t(e,n,i),e)})),r},Pr.mapValues=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,n,t(e,n,i))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Aa,Pr.merge=Is,Pr.mergeWith=As,Pr.method=ol,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=Ba,Pr.nthArg=function(e){return e=ps(e),Gn((function(t){return Wn(t,e)}))},Pr.omit=Bs,Pr.omitBy=function(e,t){return Rs(e,Ba(lo(t)))},Pr.once=function(e){return Ea(2,e)},Pr.orderBy=function(t,r,n,i){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=i?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Pr.over=cl,Pr.overArgs=ja,Pr.overEvery=dl,Pr.overSome=ul,Pr.partial=Ra,Pr.partialRight=za,Pr.partition=Sa,Pr.pick=js,Pr.pickBy=Rs,Pr.property=hl,Pr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Pr.pull=Zo,Pr.pullAll=Qo,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,lo(r,2)):e},Pr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Pr.pullAt=Jo,Pr.range=gl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Ya(e)?Et:mn)(e,Ba(lo(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=lo(t,3);++n<o;){var a=e[n];t(a,n,e)&&(r.push(a),i.push(n))}return Kn(e,i),r},Pr.rest=function(r,n){if("function"!=typeof r)throw new Oe(t);return Gn(r,n=n===e?n:ps(n))},Pr.reverse=ea,Pr.sampleSize=function(t,r,n){return r=(n?xo(t,r,n):r===e)?1:ps(r),(Ya(t)?Zr:Qn)(t,r)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:Jn(t,r,n,i)},Pr.shuffle=function(e){return(Ya(e)?Qr:ri)(e)},Pr.slice=function(t,r,n){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xo(t,r,n)?(r=0,n=i):(r=null==r?0:ps(r),n=n===e?i:ps(n)),ni(t,r,n)):[]},Pr.sortBy=ka,Pr.sortedUniq=function(e){return e&&e.length?si(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Pr.split=function(t,r,n){return n&&"number"!=typeof n&&xo(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!os(r))&&!(r=ci(r))&&nr(t)?wi(dr(t),0,n):t.split(r,n):[]},Pr.spread=function(e,r){if("function"!=typeof e)throw new Oe(t);return r=null==r?0:br(ps(r),0),Gn((function(t){var n=t[r],i=wi(t,0,r);return n&&Mt(i,n),Ct(e,this,i)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?ni(e,1,t):[]},Pr.take=function(t,r,n){return t&&t.length?ni(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Pr.takeRight=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,(r=i-(r=n||r===e?1:ps(r)))<0?0:r,i):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?gi(e,lo(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,r,n){var i=!0,o=!0;if("function"!=typeof e)throw new Oe(t);return es(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),_a(e,r,{leading:i,maxWait:r,trailing:o})},Pr.thru=ga,Pr.toArray=hs,Pr.toPairs=zs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Ya(e)?_t(e,Ro):ls(e)?[e]:Oi(jo(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Ya(e),i=n||Xa(e)||cs(e);if(t=lo(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:es(e)&&Za(o)?Lr(Ue(e)):{}}return(i?kt:xn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Pr.unary=function(e){return Ta(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?di(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Pr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?di(t,e,r):[]},Pr.unset=function(e,t){return null==e||ui(e,t)},Pr.unzip=ia,Pr.unzipWith=oa,Pr.update=function(e,t,r){return null==e?e:hi(e,t,vi(r))},Pr.updateWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:hi(t,r,vi(n),i)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Gt(e,Ms(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return Ra(vi(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=da,Pr.zipObject=function(e,t){return mi(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=zs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=vl,Pr.attempt=Qs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=yl,Pr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Pr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,_s(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=xl,Pr.endsWith=function(t,r,n){t=vs(t),r=ci(r);var i=t.length,o=n=n===e?i:sn(ps(n),0,i);return(n-=r.length)>=0&&t.slice(n,o)==r},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,tr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Pr.every=function(t,r,n){var i=Ya(t)?Tt:pn;return n&&xo(t,r,n)&&(r=e),i(t,lo(r,3))},Pr.find=ma,Pr.findIndex=Wo,Pr.findKey=function(e,t){return Rt(e,lo(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Yo,Pr.findLastKey=function(e,t){return Rt(e,lo(t,3),wn)},Pr.floor=wl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,lo(t,3),Ms)},Pr.forInRight=function(e,t){return null==e?e:yn(e,lo(t,3),Ms)},Pr.forOwn=function(e,t){return e&&xn(e,lo(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,lo(t,3))},Pr.get=Ds,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mo(e,t,Tn)},Pr.hasIn=Ts,Pr.head=Uo,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var i=e.length;return r<0&&(r=br(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Pt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),Pt(e,t,i)},Pr.inRange=function(t,r,n){return r=gs(r),n===e?(n=r,r=0):n=gs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Pr.invoke=Fs,Pr.isArguments=Wa,Pr.isArray=Ya,Pr.isArrayBuffer=Va,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kn(e)==m},Pr.isBuffer=Xa,Pr.isDate=qa,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||Xa(e)||cs(e)||Wa(e)))return!e.length;var t=fo(e);if(t==w||t==D)return!e.size;if(So(e))return!jn(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return Mn(e,t)},Pr.isEqualWith=function(t,r,n){var i=(n="function"==typeof n?n:e)?n(t,r):e;return i===e?Mn(t,r,e,n):!!i},Pr.isError=Ga,Pr.isFinite=function(e){return"number"==typeof e&&pr(e)},Pr.isFunction=Za,Pr.isInteger=Qa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||In(e,t,uo(t))},Pr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,In(t,r,uo(r),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=is,Pr.isRegExp=os,Pr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=d},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(t){return t===e},Pr.isWeakMap=function(e){return ts(e)&&fo(e)==O},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kn(e)},Pr.join=function(e,t){return null==e?"":fr.call(e,t)},Pr.kebabCase=Ys,Pr.last=Go,Pr.lastIndexOf=function(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var o=i;return n!==e&&(o=(o=ps(n))<0?br(i+o,0):vr(o,i-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,o):zt(t,Nt,o,!0)},Pr.lowerCase=Vs,Pr.lowerFirst=Us,Pr.lt=ds,Pr.lte=us,Pr.max=function(t){return t&&t.length?fn(t,nl,Dn):e},Pr.maxBy=function(t,r){return t&&t.length?fn(t,lo(r,2),Dn):e},Pr.mean=function(e){return Ht(e,nl)},Pr.meanBy=function(e,t){return Ht(e,lo(t,2))},Pr.min=function(t){return t&&t.length?fn(t,nl,zn):e},Pr.minBy=function(t,r){return t&&t.length?fn(t,lo(r,2),zn):e},Pr.stubArray=fl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Pr.noConflict=function(){return ut._===this&&(ut._=Le),this},Pr.noop=ll,Pr.now=Da,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Yi(mt(i),r)+e+Yi(ft(i),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;return t&&n<t?e+Yi(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;return t&&n<t?Yi(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Pr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xo(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=gs(t),r===e?(r=t,t=0):r=gs(r)),t>r){var i=t;t=r,r=i}if(n||t%1||r%1){var o=wr();return vr(t+o*(r-t+st("1e-"+((o+"").length-1))),r)}return Xn(t,r)},Pr.reduce=function(e,t,r){var n=Ya(e)?It:Vt,i=arguments.length<3;return n(e,lo(t,4),r,i,hn)},Pr.reduceRight=function(e,t,r){var n=Ya(e)?At:Vt,i=arguments.length<3;return n(e,lo(t,4),r,i,gn)},Pr.repeat=function(t,r,n){return r=(n?xo(t,r,n):r===e)?1:ps(r),qn(vs(t),r)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(t,r,n){var i=-1,o=(r=yi(r,t)).length;for(o||(o=1,t=e);++i<o;){var a=null==t?e:t[Ro(r[i])];a===e&&(i=o,a=n),t=Za(a)?a.call(t):a}return t},Pr.round=Cl,Pr.runInContext=ne,Pr.sample=function(e){return(Ya(e)?Gr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?cr(e):e.length;var t=fo(e);return t==w||t==D?e.size:jn(e).length},Pr.snakeCase=Ks,Pr.some=function(t,r,n){var i=Ya(t)?Bt:ii;return n&&xo(t,r,n)&&(r=e),i(t,lo(r,3))},Pr.sortedIndex=function(e,t){return oi(e,t)},Pr.sortedIndexBy=function(e,t,r){return ai(e,t,lo(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=oi(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return oi(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ai(e,t,lo(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=oi(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=Xs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=ci(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?Ut(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?Ut(e,lo(t,2)):0},Pr.template=function(t,r,n){var i=Pr.templateSettings;n&&xo(t,r,n)&&(r=e),t=vs(t),r=ws({},r,i,Qi);var o,a,s=ws({},r.imports,i.imports,Qi),l=_s(s),c=Gt(s,l),d=0,u=r.interpolate||ve,h="__p += '",g=Te((r.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++nt+"]")+"\n";t.replace(g,(function(e,r,n,i,s,l){return n||(n=i),h+=t.slice(d,l).replace(ye,rr),r&&(o=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var f=Be.call(r,"variable")&&r.variable;if(f){if(le.test(f))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(N,""):h).replace(H,"$1").replace(W,"$1;"),h="function("+(f||"obj")+") {\n"+(f?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Qs((function(){return Se(l,p+"return "+h).apply(e,c)}));if(m.source=h,Ga(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>d)return[];var r=h,n=vr(e,h);t=lo(t),e-=h;for(var i=Kt(n,t);++r<e;)t(r);return i},Pr.toFinite=gs,Pr.toInteger=ps,Pr.toLength=fs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,d):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Xt(t);if(!t||!(r=ci(r)))return t;var i=dr(t),o=dr(r);return wi(i,Qt(i,o),Jt(i,o)+1).join("")},Pr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,ur(t)+1);if(!t||!(r=ci(r)))return t;var i=dr(t);return wi(i,0,Jt(i,dr(r))+1).join("")},Pr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=ci(r)))return t;var i=dr(t);return wi(i,Qt(i,dr(r))).join("")},Pr.truncate=function(t,r){var n=30,i="...";if(es(r)){var o="separator"in r?r.separator:o;n="length"in r?ps(r.length):n,i="omission"in r?ci(r.omission):i}var a=(t=vs(t)).length;if(nr(t)){var s=dr(t);a=s.length}if(n>=a)return t;var l=n-cr(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):t.slice(0,l);if(o===e)return c+i;if(s&&(l+=c.length-l),os(o)){if(t.slice(l).search(o)){var d,u=c;for(o.global||(o=Te(o.source,vs(ue.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(ci(o),l)!=l){var g=c.lastIndexOf(o);g>-1&&(c=c.slice(0,g))}return c+i},Pr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,hr):e},Pr.uniqueId=function(e){var t=++je;return vs(e)+t},Pr.upperCase=qs,Pr.upperFirst=Gs,Pr.each=va,Pr.eachRight=ya,Pr.first=Uo,sl(Pr,(bl={},xn(Pr,(function(e,t){Be.call(Pr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Pr.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var i=this.__filtered__&&!r?new Wr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,h),type:t+(i.__dir__<0?"Right":"")}),i},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return Fn(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Ba(lo(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(h)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),i=/^(?:head|last)$/.test(r),o=Pr[i?"take"+("last"==r?"Right":""):r],a=i||/^find/.test(r);o&&(Pr.prototype[r]=function(){var r=this.__wrapped__,s=i?[1]:arguments,l=r instanceof Wr,c=s[0],d=l||Ya(r),u=function(e){var t=o.apply(Pr,Mt([e],s));return i&&h?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,g=!!this.__actions__.length,p=a&&!h,f=l&&!g;if(!a&&d){r=f?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:ga,args:[u],thisArg:e}),new Hr(m,h)}return p&&f?t.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Fe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Ya(i)?i:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";Be.call(Fr,n)||(Fr[n]=[]),Fr[n].push({name:t,func:r})}})),Fr[Li(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Oi(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Oi(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Oi(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,i=r?e.length:0,o=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var o=r[n],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,h=0,g=vr(l,this.__takeCount__);if(!r||!n&&i==l&&g==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&h<g;){for(var f=-1,m=e[c+=t];++f<u;){var b=d[f],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return ha(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Pr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var i=Po(n);i.__index__=0,i.__values__=e,r?o.__wrapped__=i:r=i;var o=i;n=n.__wrapped__}return o.__wrapped__=t,r},Pr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:ga,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,et&&(Pr.prototype[et]=function(){return this}),Pr}();gt?((gt.exports=gr)._=gr,ht._=gr):ut._=gr}.call(Ko);var wT=xT.exports;const $T=i.forwardRef(((n,i)=>{var{value:o,readOnly:s,"data-testid":l,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:g,iconMask:p=e(Ye,{}),iconUnmask:f=e(We,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:k,onFocus:D,onBlur:T,onTryAgain:E}=n,O=gt(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const F=s&&wT.isEmpty(o),[_,M]=a(!x),[I,A]=a(o||"");u((()=>{A(o||"")}),[o]);const B=e=>{L(!1),D&&D(e)},j=e=>{L(!0),T&&T(e)},R=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,k&&k(e)},z=()=>{s&&E&&E()},P=()=>{L(!_)},L=e=>{M(e),e?C&&C():S&&S()},N=()=>!(null==I?void 0:I.toString().length)||x,H=()=>{if(F)return e(r,{});const t=N();return e(cT,{"data-testid":"icon-"+(_?"masked":"unmasked"),onClick:t?void 0:P,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:_?f:p})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(s)switch($){case"fail":return t(bT,{onClick:z,"data-testid":"try-again-button",children:[t(pT,{children:[e(fT,{}),e(mT,{children:"Error"})]}),e(gT,{children:"Try again?"})]});case"loading":return t(dT,{children:[e(hT,{}),e(uT,{children:"Retrieving..."})]})}return e(lT,Object.assign({ref:i,"data-testid":`${l||"masked-input"}${_?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:s?void 0:B,onBlur:s?void 0:j,onClick:s?P:void 0,onChange:R,value:F?"-":_&&!x?eh.maskValue(I,{maskChar:v,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:g}):I,readOnly:s,error:y,$isDisabled:N()},O))})()})})),CT=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(f$,{id:o,label:n,errorMessage:i,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e($T,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},h))})})),ST=_.div`
    font-weight: ${e=>e.$bold?_c.Spec["weight-semibold"]:_c.Spec["weight-regular"]};

    ${e=>e.$disabled?M`
                color: ${Fc["text-disabled"]};
            `:e.$selected?M`
                color: ${Fc["text-selected"]};
            `:M`
                color: ${Fc.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&rd(e.$maxLines||2)}
    overflow-wrap: break-word;
`,kT=_.div`
    color: ${Fc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&rd(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?M`
                    ${_c["body-md-semibold"]}
                `:M`
                    ${_c["body-baseline-regular"]}
                `}
`,DT=_.span`
    font-weight: ${_c.Spec["weight-semibold"]};
`,TT=_.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?_c["body-md-regular"]:_c["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return M`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return M`
                    ${ST} {
                        display: inline;
                    }

                    ${kT} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,ET=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,OT=_.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,FT=({bold:n,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,disabled:c,sublabel:d,truncationType:u="middle",variant:h="default"})=>{const g=j(),f="small"===h?_c.Spec["body-size-md"]({theme:g}):_c.Spec["body-size-baseline"]({theme:g}),b=_c.Spec["font-family"]({theme:g}),{ref:v,width:y}=hr(),x=p((e=>{if("inline"!==i||!y)return!1;return eh.getTextWidth(e,`${f} '${b}'`)>y*s-50}),[y,i,f,b,s]),w=m((()=>x(o)),[x,o]),$=m((()=>d&&x(d)),[x,d]),C=n=>{if(!a)return n;const i=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(i),l=s+a.length;return-1===s?n:t(r,{children:[o.slice(0,s),e(DT,{$variant:h,children:o.slice(s,l)}),o.slice(l)]})},S=n=>t(r,{children:[e(ET,{$maxLines:s,"aria-hidden":!0,children:C(n)}),e(OT,{$maxLines:s,"aria-hidden":!0,children:C(n)})]});return t(TT,{ref:v,$labelDisplayType:w||$?"next-line":i,$variant:h,children:[e(ST,{"aria-label":o,$bold:n,$maxLines:s,$selected:l,$disabled:c,$truncateType:u,children:"middle"===u&&w?S(o):C(o)}),d&&e(kT,{"aria-label":d,$maxLines:s,$truncateType:u,$labelDisplayType:i,children:"middle"===u&&$?S(d):d})]})};function _T(e){return()=>e}function MT(e){e()}function IT(e,t){return r=>e(t(r))}function AT(e,t){return()=>e(t)}function BT(e,t){return r=>e(t,r)}function jT(e){return void 0!==e}function RT(){}function zT(e,t){return t(e),e}function PT(e,t){return t(e)}function LT(...e){return e}function NT(e,t){return e(1,t)}function HT(e,t){e(0,t)}function WT(e){e(2)}function YT(e){return e(4)}function VT(e,t){return NT(e,BT(t,0))}function UT(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function KT(e){let t,r;return n=>i=>{t=i,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function XT(e,t){return e===t}function qT(e=XT){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function GT(e){return t=>r=>{e(r)&&t(r)}}function ZT(e){return t=>IT(t,e)}function QT(e){return t=>()=>{t(e)}}function JT(e,...t){const r=function(...e){return t=>e.reduceRight(PT,t)}(...t);return(t,n)=>{switch(t){case 2:return void WT(e);case 1:return NT(e,r(n))}}}function eE(e,t){return r=>n=>{r(t=e(t,n))}}function tE(e){return t=>r=>{e>0?e--:t(r)}}function rE(e){let t,r=null;return n=>i=>{r=i,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function nE(...e){const t=new Array(e.length);let r=0,n=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);NT(e,(e=>{const s=r;r|=a,t[o]=e,s!==i&&r===i&&n&&(n(),n=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};r===i?a():n=a}}function iE(e){let t=e;const r=aE();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function oE(e,t){return zT(iE(t),(t=>VT(e,t)))}function aE(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function sE(e){return zT(aE(),(t=>VT(e,t)))}function lE(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:cE(),singleton:r}}const cE=()=>Symbol();function dE(...e){const t=aE(),r=new Array(e.length);let n=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);NT(e,(e=>{r[o]=e,n|=a,n===i&&HT(t,r)}))})),function(e,o){switch(e){case 2:return void WT(t);case 1:return n===i&&o(r),NT(t,o)}}}function uE(e,t=XT){return JT(e,qT(t))}function hE(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(MT)}}(...e.map((e=>NT(e,r))))}}}var gE=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(gE||{});const pE={0:"debug",3:"error",1:"log",2:"warn"},fE=lE((()=>{const e=iE(3);return{log:iE(((t,r,n=1)=>{var i;n>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:YT(e))&&console[pE[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function mE(e,t,r){return bE(e,t,r).callbackRef}function bE(e,t,r){const n=i.useRef(null);let o=e=>{};if(typeof ResizeObserver<"u"){const a=i.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);o=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:o,ref:n}}function vE(e,t,r,n,o,a,s,l,c){const d=i.useCallback((r=>{const i=function(e,t,r,n){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,r);if(0===c&&n("Zero-sized element, this should not happen",{child:i},gE.ERROR),c===l)continue;const d=o[o.length-1];0===o.length||d.size!==c||d.endIndex!==s-1?o.push({endIndex:s,size:c,startIndex:s}):o[o.length-1].endIndex++}return o}(r.children,t,l?"offsetWidth":"offsetHeight",o);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,g=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==a||a(l?yE("column-gap",getComputedStyle(r).columnGap,o):yE("row-gap",getComputedStyle(r).rowGap,o)),null!==i&&e(i)}),[e,t,o,a,s,n]);return bE(d,r,c)}function yE(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,gE.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function xE(e,t,r){const n=i.useRef(null),o=i.useCallback((r=>{if(null==r||!r.offsetParent)return;const i=r.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=i.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=bE(o,!0,r),l=i.useCallback((()=>{o(s.current)}),[o,s]);return i.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const wE=lE((()=>{const e=aE(),t=aE(),r=iE(0),n=aE(),i=iE(0),o=aE(),a=aE(),s=iE(0),l=iE(0),c=iE(0),d=iE(0),u=aE(),h=aE(),g=iE(!1),p=iE(!1),f=iE(!1);return VT(JT(e,ZT((({scrollTop:e})=>e))),t),VT(JT(e,ZT((({scrollHeight:e})=>e))),a),VT(t,i),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:n,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),$E={lvl:0};function CE(e,t){const r=e.length;if(0===r)return[];let{index:n,value:i}=t(e[0]);const o=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);o.push({end:r-1,start:n,value:i}),n=r,i=s}return o.push({end:1/0,start:n,value:i}),o}function SE(e){return e===$E}function kE(e,t){if(!SE(e))return t===e.k?e.v:t<e.k?kE(e.l,t):kE(e.r,t)}function DE(e,t,r="k"){if(SE(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=DE(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return DE(e.l,t,r)}function TE(e,t,r){return SE(e)?zE(t,r,1):t===e.k?AE(e,{k:t,v:r}):t<e.k?PE(AE(e,{l:TE(e.l,t,r)})):PE(AE(e,{r:TE(e.r,t,r)}))}function EE(){return $E}function OE(e,t,r){if(SE(e))return[];return function(e){return CE(e,(({k:e,v:t})=>({index:e,value:t})))}(ME(e,DE(e,t)[0],r))}function FE(e,t){if(SE(e))return $E;const{k:r,l:n,r:i}=e;if(t===r){if(SE(n))return i;if(SE(i))return n;{const[t,r]=RE(n);return IE(AE(e,{k:t,l:BE(n),v:r}))}}return IE(AE(e,t<r?{l:FE(n,t)}:{r:FE(i,t)}))}function _E(e){return SE(e)?[]:[..._E(e.l),{k:e.k,v:e.v},..._E(e.r)]}function ME(e,t,r){if(SE(e))return[];const{k:n,l:i,r:o,v:a}=e;let s=[];return n>t&&(s=s.concat(ME(i,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(ME(o,t,r))),s}function IE(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(jE(t))return LE(AE(e,{lvl:r-1}));if(!SE(t)&&!SE(t.r))return AE(t.r,{l:AE(t,{r:t.r.l}),lvl:r,r:AE(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(jE(e))return NE(AE(e,{lvl:r-1}));if(SE(n)||SE(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,i=jE(t)?n.lvl-1:n.lvl;return AE(t,{l:AE(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:NE(AE(n,{l:t.r,lvl:i}))})}}function AE(e,t){return zE(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function BE(e){return SE(e.r)?e.l:IE(AE(e,{r:BE(e.r)}))}function jE(e){return SE(e)||e.lvl>e.r.lvl}function RE(e){return SE(e.r)?[e.k,e.v]:RE(e.r)}function zE(e,t,r,n=$E,i=$E){return{k:e,l:n,lvl:r,r:i,v:t}}function PE(e){return NE(LE(e))}function LE(e){const{l:t}=e;return SE(t)||t.lvl!==e.lvl?e:AE(t,{r:AE(e,{l:t.r})})}function NE(e){const{lvl:t,r:r}=e;return SE(r)||SE(r.r)||r.lvl!==t||r.r.lvl!==t?e:AE(r,{l:AE(e,{r:r.l}),lvl:t+1})}function HE(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function WE(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const YE=lE((()=>({recalcInProgress:iE(!1)})),[],{singleton:!0});function VE(e,t,r){return e[UE(e,t,r)]}function UE(e,t,r,n=0){let i=e.length-1;for(;n<=i;){const o=Math.floor((n+i)/2),a=r(e[o],t);if(0===a)return o;if(-1===a){if(i-n<2)return o-1;i=o-1}else{if(i===n)return o;n=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function KE(e,t){return Math.round(e.getBoundingClientRect()[t])}function XE(e){return!SE(e.groupOffsetTree)}function qE({index:e},t){return t===e?0:t<e?-1:1}function GE({offset:e},t){return t===e?0:t<e?-1:1}function ZE(e,t,r){if(0===t.length)return 0;const{index:n,offset:i,size:o}=VE(t,e,qE),a=e-n,s=o*a+(a-1)*r+i;return s>0?s+r:s}function QE(e,t){if(!XE(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function JE(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=QE("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function eO(e,t,r,n=0){return n>0&&(t=Math.max(t,VE(e,n,qE).offset)),CE(function(e,t,r,n){const i=UE(e,t,n),o=UE(e,r,n,i);return e.slice(i,o+1)}(e,t,r,GE),iO)}function tO(e,[t,r,n,i]){t.length>0&&n("received item sizes",t,gE.DEBUG);const o=e.sizeTree;let a=o,s=0;if(r.length>0&&SE(o)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>TE(TE(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=SE(e)?0:1/0;for(const n of t){const{endIndex:t,size:i,startIndex:o}=n;if(r=Math.min(r,o),SE(e)){e=TE(e,0,i);continue}const a=OE(e,o-1,t+1);if(a.some(oO(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:o}of a)s?(t>=n||i===o)&&(e=FE(e,n)):(l=o!==i,s=!0),r>t&&t>=n&&o!==i&&(e=TE(e,t+1,o));l&&(e=TE(e,o,i))}return[e,r]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=nO(e.offsetTree,s,a,i);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>TE(e,t,ZE(t,u,i))),EE()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function rO(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function nO(e,t,r,n){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=UE(i,t-1,qE),s=i[l].offset;const e=DE(r,t-1);o=e[0],a=e[1],i.length&&i[l].size===DE(r,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of OE(r,t,1/0)){const t=e-o,r=t*a+s+t*n;i.push({index:e,offset:r,size:l}),o=e,s=r,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function iO(e){return{index:e.index,value:e}}function oO(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const aO={offsetHeight:"height",offsetWidth:"width"},sO=lE((([{log:e},{recalcInProgress:t}])=>{const r=aE(),n=aE(),i=oE(n,0),o=aE(),a=aE(),s=iE(0),l=iE([]),c=iE(void 0),d=iE(void 0),u=iE(((e,t)=>KE(e,aO[t]))),h=iE(void 0),g=iE(0),p={groupIndices:[],groupOffsetTree:EE(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:EE()},f=oE(JT(r,nE(l,e,g),eE(tO,p),qT()),p),m=oE(JT(l,qT(),eE(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),ZT((({prev:e})=>e))),[]);VT(JT(l,GT((e=>e.length>0)),nE(f,g),ZT((([e,t,r])=>{const n=e.reduce(((e,n,i)=>TE(e,n,ZE(n,t.offsetTree,r)||i)),EE());return{...t,groupIndices:e,groupOffsetTree:n}}))),f),VT(JT(n,nE(f),GT((([e,{lastIndex:t}])=>e<t)),ZT((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),VT(c,d);const b=oE(JT(c,ZT((e=>void 0===e))),!0);VT(JT(d,GT((e=>void 0!==e&&SE(YT(f).sizeTree))),ZT((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=sE(JT(r,nE(f),eE((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),ZT((e=>e.changed))));NT(JT(s,eE(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),ZT((e=>e.diff))),(e=>{const{groupIndices:r}=YT(f);if(e>0)HT(t,!0),HT(o,e+rO(e,r));else if(e<0){const t=YT(m);t.length>0&&(e-=rO(-e,t)),HT(a,e)}})),NT(JT(s,nE(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},gE.ERROR)}));const y=sE(o);VT(JT(o,nE(f),ZT((([e,t])=>{const r=t.groupIndices.length>0,n=[],i=t.lastSize;if(r){const r=kE(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=_E(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:i}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return _E(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),r);const x=sE(JT(a,nE(f,g),ZT((([e,{offsetTree:t},r])=>ZE(-e,t,r)))));return VT(JT(a,nE(f,g),ZT((([e,t,r])=>{if(t.groupIndices.length>0){if(SE(t.sizeTree))return t;let n=EE();const i=YT(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(n=_E(t.sizeTree).reduce(((t,{k:r,v:n})=>TE(t,Math.max(0,r+e),n)),n),o!==-e){n=TE(n,0,kE(t.sizeTree,s));n=TE(n,1,DE(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...nO(t.offsetTree,0,n,r)}}{const n=_E(t.sizeTree).reduce(((t,{k:r,v:n})=>TE(t,Math.max(0,r+e),n)),EE());return{...t,sizeTree:n,...nO(t.offsetTree,0,n,r)}}}))),f),{beforeUnshiftWith:y,data:h,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:g,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:f,statefulTotalCount:i,totalCount:n,trackItemSizes:b,unshiftWith:o}}),LT(fE,YE),{singleton:!0});function lO(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const cO=lE((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:i}])=>{const o=aE(),a=aE(),s=sE(JT(o,ZT(lO)));return VT(JT(s,ZT((e=>e.totalCount))),r),VT(JT(s,ZT((e=>e.groupIndices))),e),VT(JT(dE(i,t,n),GT((([e,t])=>XE(t))),ZT((([e,t,r])=>DE(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),qT(),ZT((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),LT(sO,wE)),dO=lE((([{log:e}])=>{const t=iE(!1),r=sE(JT(t,GT((e=>e)),qT()));return NT(t,(t=>{t&&YT(e)("props updated",{},gE.DEBUG)})),{didMount:r,propsReady:t}}),LT(fE),{singleton:!0}),uO=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function hO(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!uO)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const gO=lE((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:h}])=>{const g=aE(),p=aE(),f=iE(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),HT(l,!1)}return VT(JT(g,nE(r,u,n,f,s,a,h),nE(e,o,i),ZT((([[e,r,n,i,o,a,s,c],u,h,f])=>{const x=hO(e),{align:w,behavior:$,offset:C}=x,S=i-1,k=JE(x,r,S);let D=ZE(k,r.offsetTree,u)+a;"end"===w?(D+=h+DE(r.sizeTree,k)[1]-n+f,k===S&&(D+=s)):"center"===w?D+=(h+DE(r.sizeTree,k)[1]-n+f)/2:D-=o,C&&(D+=C);const T=t=>{y(),t?(c("retrying to scroll to",{location:e},gE.DEBUG),HT(g,e)):(HT(p,!0),c("list did not change, scroll successful",{},gE.DEBUG))};if(y(),"smooth"===$){let e=!1;v=NT(t,(t=>{e=e||t})),m=UT(d,(()=>{T(e)}))}else m=UT(JT(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),T);return b=setTimeout((()=>{y()}),1200),HT(l,!0),c("scrolling from index to",{behavior:$,index:k,top:D},gE.DEBUG),{behavior:$,top:D}}))),c),{scrollTargetReached:p,scrollToIndex:g,topListHeight:f}}),LT(sO,wE,fE),{singleton:!0});function pO(e,t){0==e?t():requestAnimationFrame((()=>{pO(e-1,t)}))}function fO(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const mO=lE((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=iE(!0),l=iE(0),c=iE(!0);return VT(JT(a,nE(l),GT((([e,t])=>!!t)),QT(!1)),s),VT(JT(a,nE(l),GT((([e,t])=>!!t)),QT(!1)),c),NT(JT(dE(t,a),nE(s,r,e,c),GT((([[,e],t,{sizeTree:r},n,i])=>e&&(!SE(r)||jT(n))&&!t&&!i)),nE(l)),(([,e])=>{UT(i,(()=>{HT(c,!0)})),pO(4,(()=>{UT(n,(()=>{HT(s,!0)})),HT(o,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),LT(sO,wE,gO,dO),{singleton:!0});function bO(e,t){return Math.abs(e-t)<1.01}const vO="up",yO="down",xO={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},wO=lE((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:i,viewportHeight:o}])=>{const a=iE(!1),s=iE(!0),l=aE(),c=aE(),d=iE(4),u=iE(0),h=oE(JT(hE(JT(uE(i),tE(1),QT(!0)),JT(uE(i),tE(1),QT(!1),KT(100))),qT()),!1),g=oE(JT(hE(JT(r,QT(!0)),JT(r,QT(!1),KT(200))),qT()),!1);VT(JT(dE(uE(i),uE(u)),ZT((([e,t])=>e<=t)),qT()),s),VT(JT(s,rE(50)),c);const p=sE(JT(dE(n,uE(o),uE(t),uE(e),uE(d)),eE(((e,[{scrollHeight:t,scrollTop:r},n,i,o,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),xO),qT(((e,t)=>e&&e.atBottom===t.atBottom)))),f=oE(JT(n,eE(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(bO(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const i=t-(r+n)<1;return e.scrollTop!==r&&i?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),GT((e=>e.changed)),ZT((e=>e.jump))),0);VT(JT(p,ZT((e=>e.atBottom))),a),VT(JT(a,rE(50)),l);const m=iE(yO);VT(JT(n,ZT((({scrollTop:e})=>e)),qT(),eE(((e,t)=>YT(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?vO:yO,prevScrollTop:t}),{direction:yO,prevScrollTop:0}),ZT((e=>e.direction))),m),VT(JT(n,rE(50),QT("none")),m);const b=iE(0);return VT(JT(h,GT((e=>!e)),QT(0)),b),VT(JT(i,rE(100),nE(h),GT((([e,t])=>!!t)),eE((([e,t],[r])=>[t,r]),[0,0]),ZT((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:f,scrollDirection:m,scrollVelocity:b}}),LT(wE)),$O="top",CO="bottom",SO="none";function kO(e,t,r){return"number"==typeof e?r===vO&&t===$O||r===yO&&t===CO?e:0:r===vO?t===$O?e.main:e.reverse:t===CO?e.main:e.reverse}function DO(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const TO=lE((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:i}])=>{const o=aE(),a=iE(0),s=iE(0),l=iE(0),c=oE(JT(dE(uE(n),uE(i),uE(r),uE(o,WE),uE(l),uE(a),uE(t),uE(e),uE(s)),ZT((([e,t,r,[n,i],o,a,s,l,c])=>{const d=e-l,u=a+s,h=Math.max(r-d,0);let g=SO;const p=DO(c,$O),f=DO(c,CO);return n-=l,i+=r+s,(n+=r+s)>e+u-p&&(g=vO),(i-=l)<e-h+t+f&&(g=yO),g!==SO?[Math.max(d-r-kO(o,$O,g)-p,0),d-h-s+t+kO(o,CO,g)+f]:null})),GT((e=>null!=e)),qT(WE)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:c}}),LT(wE),{singleton:!0});const EO={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function OO(e,t,r,n,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,h=c,g=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:o,items:_O(e,i,o),offsetBottom:g,offsetTop:c,top:h,topItems:_O(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function FO(e,t,r,n,i,o){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=fO(t,s);return OO(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,r,n)}function _O(e,t,r){if(0===e.length)return[];if(!XE(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,i=e[e.length-1].index,o=[],a=OE(t.groupOffsetTree,n,i);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},o.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return o}const MO=lE((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},h,{didMount:g},{recalcInProgress:p}])=>{const f=iE([]),m=iE(0),b=aE();VT(o.topItemsIndexes,f);const v=oE(JT(dE(g,p,uE(l,WE),uE(i),uE(n),uE(c),d,uE(f),uE(t),uE(r),e),GT((([e,t,,r,,,,,,,n])=>{const i=n&&n.length!==r;return e&&!t&&!i})),ZT((([,,[e,t],r,n,i,o,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:h}=d,g=YT(m);if(0===r)return{...EO,totalCount:r};if(0===e&&0===t)return 0===g?{...EO,totalCount:r}:FO(g,i,n,s,l,c||[]);if(SE(h))return g>0?null:OO(function(e,t,r){if(XE(t)){const n=QE(e,t);return[{index:DE(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(fO(i,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of OE(h,e,t)){const i=n.value,o=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=o;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:i}),r+=i}}if(!o)return OO([],p,r,l,d,s);const f=a.length>0?a[a.length-1]+1:0,b=eO(u,e,t,f);if(0===b.length)return null;const v=r-1;return OO(zT([],(r=>{for(const n of b){const i=n.value;let o=i.offset,a=n.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-n.start;o+=t*s+t*l}a<f&&(o+=(f-a)*s,a=f);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(o>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:o,size:s}),o+=s+l}})),p,r,l,d,s)})),GT((e=>null!==e)),qT()),EO);VT(JT(e,GT(jT),ZT((e=>null==e?void 0:e.length))),i),VT(JT(v,ZT((e=>e.topListHeight))),u),VT(u,s),VT(JT(v,ZT((e=>[e.top,e.bottom]))),a),VT(JT(v,ZT((e=>e.items))),b);const y=sE(JT(v,GT((({items:e})=>e.length>0)),nE(i,e),GT((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),ZT((([,e,t])=>[e-1,t])),qT(WE),ZT((([e])=>e)))),x=sE(JT(v,rE(200),GT((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),ZT((({items:e})=>e[0].index)),qT())),w=sE(JT(v,GT((({items:e})=>e.length>0)),ZT((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),qT(HE)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:f,...h}}),LT(sO,cO,TO,mO,gO,wO,dO,YE),{singleton:!0}),IO=lE((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:i}])=>{const o=aE(),a=oE(JT(dE(r,e,n,t,i),ZT((([e,t,r,n,i])=>e+t+r+n+i.offsetBottom+i.bottom))),0);return VT(uE(a),o),{totalListHeight:a,totalListHeightChanged:o}}),LT(wE,MO),{singleton:!0}),AO=lE((([{viewportHeight:e},{totalListHeight:t}])=>{const r=iE(!1),n=oE(JT(dE(r,e,t),GT((([e])=>e)),ZT((([,e,t])=>Math.max(0,e-t))),rE(0),qT()),0);return{alignToBottom:r,paddingTopAddition:n}}),LT(wE,IO),{singleton:!0});function BO(e){return!!e&&("smooth"===e?"smooth":"auto")}const jO=lE((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=iE(!1),u=aE();let h=null;function g(e){HT(i,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=UT(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(YT(l)("scrolling to bottom due to increased size",{},gE.DEBUG),g("auto"))}));setTimeout(t,100)}return NT(JT(dE(JT(uE(t),tE(1)),a),nE(uE(d),n,o,c),ZT((([[e,t],r,n,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?BO(e(t)):t&&BO(e))(r,n||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),GT((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=UT(e,(()=>{YT(l)("following output to ",{totalCount:r},gE.DEBUG),g(t),h=null}))})),NT(JT(dE(uE(d),t,s),GT((([e,,t])=>e&&t)),eE((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),GT((({refreshed:e})=>e)),nE(d,t)),(([,e])=>{YT(o)&&p(!1!==e)})),NT(u,(()=>{p(!1!==YT(d))})),NT(dE(uE(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:d}}),LT(sO,wO,gO,mO,dO,fE,wE)),RO=lE((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(VT(JT(s,nE(o),GT((([,e])=>0!==e)),nE(i,n,t,r,e),ZT((([[,e],t,r,n,i,o=[]])=>FO(e,t,r,n,i,o)))),a),{})),LT(sO,mO,MO,dO),{singleton:!0}),zO=lE((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=iE(0);return NT(JT(e,nE(n),GT((([,e])=>0!==e)),ZT((([,e])=>({top:e})))),(e=>{UT(JT(r,tE(1),GT((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{HT(t,e)}))}))})),{initialScrollTop:n}}),LT(dO,wE,MO),{singleton:!0}),PO=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=r?r:"start",behavior:n}:e>o?{...i,align:null!=r?r:"end",behavior:n}:null,LO=lE((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=aE();return VT(JT(d,nE(t,l,r,o,i,n,s),nE(e),ZT((([[e,t,r,n,i,o,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:h=PO,done:g,...p}=e,f=JE(e,t,n-1),m=ZE(f,t.offsetTree,c)+i+o,b=h({itemBottom:m+DE(t.sizeTree,f)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+o});return b?g&&UT(JT(a,GT((e=>!e)),tE(YT(a)?1:2)),g):g&&g(),b})),GT((e=>null!==e))),c),{scrollIntoView:d}}),LT(sO,wE,gO,MO,fE),{singleton:!0}),NO=lE((([{scrollVelocity:e}])=>{const t=iE(!1),r=aE(),n=iE(!1);return VT(JT(e,nE(n,t,r),GT((([e,t])=>!!t)),ZT((([e,t,r,n])=>{const{enter:i,exit:o}=t;if(r){if(o(e,n))return!1}else if(i(e,n))return!0;return r})),qT()),t),NT(JT(dE(t,e,r),nE(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),LT(wO),{singleton:!0}),HO=lE((([{scrollContainerState:e,scrollTo:t}])=>{const r=aE(),n=aE(),i=aE(),o=iE(!1),a=iE(void 0);return VT(JT(dE(r,n),ZT((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),VT(JT(t,nE(n),ZT((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:r,windowScrollTo:i,windowViewportRect:n}}),LT(wE)),WO=lE((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=aE(),d=iE(void 0),u=iE(null),h=iE(null);return VT(s,u),VT(l,h),NT(JT(c,nE(t,n,a,u,h,r)),(([e,t,r,n,i,o,a])=>{const s=function(e){return _E(e).map((({k:e,v:t},r,n)=>{const i=n[r+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==i&&null!==o&&(r=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:r-=a})})),VT(JT(d,GT(jT),ZT(YO)),i),VT(JT(o,nE(d),GT((([,e])=>void 0!==e)),qT(),ZT((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),LT(sO,wE,mO,dO,HO));function YO(e){return{align:"start",index:0,offset:e.scrollTop}}const VO=lE((([{topItemsIndexes:e}])=>{const t=iE(0);return VT(JT(t,GT((e=>e>=0)),ZT((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),LT(MO));function UO(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const KO=UO((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),XO=lE((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:p}])=>{const f=sE(JT(l,nE(a),eE((([,e,t,r],[{bottom:n,items:i,offsetBottom:o,totalCount:a},s])=>{const l=n+o;let c=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,i,a,l]}),[0,[],0,0]),GT((([e])=>0!==e)),nE(n,s,r,i,g,p),GT((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===vO)),ZT((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},gE.DEBUG),e)))));function m(r){r>0?(HT(t,{behavior:"auto",top:-r}),HT(e,0)):(HT(e,0),HT(t,{behavior:"auto",top:-r}))}return NT(JT(f,nE(e,o)),(([t,r,n])=>{n&&KO()?HT(e,r-t):m(-t)})),NT(JT(dE(oE(o,!1),e,p),GT((([e,t,r])=>!e&&!r&&0!==t)),ZT((([e,t])=>t)),rE(1)),m),VT(JT(u,ZT((e=>({top:-e})))),t),NT(JT(c,nE(h,d),ZT((([e,{groupIndices:t,lastSize:r,sizeTree:n},i])=>{function o(e){return e*(r+i)}if(0===t.length)return o(e);{let r=0;const i=kE(n,0);let a=0,s=0;for(;a<e;){a++,r+=i;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=i,n=e-a+1),a+=n,r+=o(n),s++}return r}}))),(r=>{HT(e,r),requestAnimationFrame((()=>{HT(t,{top:r}),requestAnimationFrame((()=>{HT(e,0),HT(p,!1)}))}))})),{deviation:e}}),LT(wE,wO,MO,sO,fE,YE)),qO=lE((([e,t,r,n,i,o,a,s,l,c])=>({...e,...t,...r,...n,...i,...o,...a,...s,...l,...c})),LT(TO,RO,dO,NO,IO,zO,AO,HO,LO,fE)),GO=lE((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:p},f,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},k])=>(VT(x.rangeChanged,k.scrollSeekRangeChanged),VT(JT(k.windowViewportRect,ZT((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:i,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...k,...f,sizes:l,...m})),LT(sO,mO,wE,WO,jO,MO,gO,XO,VO,cO,qO));function ZO(e,t){const r={},n={};let i=0;const o=e.length;for(;i<o;)n[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const QO=typeof document<"u"?i.useLayoutEffect:i.useEffect;function JO(t,r,n){const o=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=i.createContext({});function d(e,t){e.propsReady&&HT(e.propsReady,!1);for(const n of o){HT(e[r.required[n]],t[n])}for(const n of a)if(n in t){HT(e[r.optional[n]],t[n])}e.propsReady&&HT(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(i,o){switch(i){case 1:return o?r===o?void 0:(n(),r=o,t=NT(e,o),t):(n(),RT);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=i.forwardRef(((h,g)=>{const{children:p,...f}=h,[m]=i.useState((()=>zT(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(n.map((e=>r(e))));return o&&t.set(i,a),a};return r(e)}(t),(e=>{d(e,f)})))),[b]=i.useState(AT(u,m));QO((()=>{for(const e of l)e in f&&NT(b[e],f[e]);return()=>{Object.values(b).map(WT)}}),[f,b,m]),QO((()=>{d(m,f)})),i.useImperativeHandle(g,_T(function(e){return s.reduce(((t,n)=>(t[n]=t=>{HT(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(c.Provider,{value:m,children:n?e(v,{...ZO([...o,...a,...l],f),children:p}):p})})),g=i.version.startsWith("18")?e=>{const t=i.useContext(c)[e],r=i.useCallback((e=>NT(t,e)),[t]);return i.useSyncExternalStore(r,(()=>YT(t)),(()=>YT(t)))}:e=>{const t=i.useContext(c)[e],[r,n]=i.useState(AT(YT,t));return QO((()=>NT(t,(e=>{e!==r&&n(_T(e))}))),[t,r]),r};return{Component:h,useEmitter:(e,t)=>{const r=i.useContext(c)[e];QO((()=>NT(r,t)),[t,r])},useEmitterValue:g,usePublisher:e=>i.useCallback(BT(HT,i.useContext(c)[e]),[e])}}const eF=i.createContext(void 0),tF=i.createContext(void 0),rF=typeof document<"u"?i.useLayoutEffect:i.useEffect;function nF(e,t,r,n=RT,o,a){const s=i.useRef(null),l=i.useRef(null),c=i.useRef(null),d=i.useCallback((r=>{const n=r.target,i=n===window||n===document,o=a?i?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?i?document.documentElement.scrollWidth:n.scrollWidth:i?document.documentElement.scrollHeight:n.scrollHeight,d=a?i?window.innerWidth:n.offsetWidth:i?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(o,0),viewportHeight:d})};r.suppressFlushSync?u():D.flushSync(u),null!==l.current&&(o===l.current||o<=0||o===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return i.useEffect((()=>{const e=o||s.current;return n(o||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[s,d,r,n,o]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const i="smooth"===r.behavior;let o,d,u;n===window?(d=Math.max(KE(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),o=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[a?"scrollWidth":"scrollHeight"],o=KE(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const h=d-o;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),bO(o,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:o}),void(i&&t(!0));i?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const iF="-webkit-sticky",oF="sticky",aF=UO((()=>{if(typeof document>"u")return oF;const e=document.createElement("div");return e.style.position=iF,e.style.position===iF?iF:oF}));function sF(e){return e}const lF=lE((()=>{const e=iE((e=>`Item ${e}`)),t=iE(null),r=iE((e=>`Group ${e}`)),n=iE({}),i=iE(sF),o=iE("div"),a=iE(RT),s=(e,t=null)=>oE(JT(n,ZT((t=>t[e])),qT()),t);return{components:n,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),cF=lE((([e,t])=>({...e,...t})),LT(GO,lF)),dF=({height:t})=>e("div",{style:{height:t}}),uF={overflowAnchor:"none",position:aF(),zIndex:1},hF={overflowAnchor:"none"},gF={...hF,display:"inline-block",height:"100%"},pF=i.memo((function({showTopList:t=!1}){const r=_F("listState"),n=MF("sizeRanges"),o=_F("useWindowScroll"),a=_F("customScrollParent"),s=MF("windowScrollContainerState"),l=MF("scrollContainerState"),c=a||o?s:l,d=_F("itemContent"),u=_F("context"),h=_F("groupContent"),g=_F("trackItemSizes"),p=_F("itemSize"),f=_F("log"),m=MF("gap"),b=_F("horizontalDirection"),{callbackRef:v}=vE(n,p,g,t?RT:c,f,m,a,b,_F("skipAnimationFrameInResizeObserver")),[y,x]=i.useState(0);FF("deviation",(e=>{y!==e&&x(e)}));const w=_F("EmptyPlaceholder"),$=_F("ScrollSeekPlaceholder")||dF,C=_F("ListComponent"),S=_F("ItemComponent"),D=_F("GroupComponent"),T=_F("computeItemKey"),E=_F("isSeeking"),O=_F("groupIndices").length>0,F=_F("alignToBottom"),_=_F("initialItemFinalLocationReached"),M=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:F?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:F?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},..._?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...yF(w,u)}):e(C,{...yF(C,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:M,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=T(t+r.firstItemIndex,e.data,u);return E?k($,{...yF($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?k(D,{...yF(D,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:uF},h(e.index,u)):k(S,{...yF(S,u),...xF(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?gF:hF},O?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),fF={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},mF={outline:"none",overflowX:"auto",position:"relative"},bF=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),vF={position:aF(),top:0,width:"100%",zIndex:1};function yF(e,t){if("string"!=typeof e)return{context:t}}function xF(e,t){return{item:"string"==typeof e?void 0:t}}const wF=i.memo((function(){const t=_F("HeaderComponent"),r=MF("headerHeight"),n=_F("HeaderFooterTag"),o=mE(i.useMemo((()=>e=>{r(KE(e,"height"))}),[r]),!0,_F("skipAnimationFrameInResizeObserver")),a=_F("context");return t?e(n,{ref:o,children:e(t,{...yF(t,a)})}):null})),$F=i.memo((function(){const t=_F("FooterComponent"),r=MF("footerHeight"),n=_F("HeaderFooterTag"),o=mE(i.useMemo((()=>e=>{r(KE(e,"height"))}),[r]),!0,_F("skipAnimationFrameInResizeObserver")),a=_F("context");return t?e(n,{ref:o,children:e(t,{...yF(t,a)})}):null}));function CF({useEmitter:t,useEmitterValue:r,usePublisher:n}){return i.memo((function({children:i,style:o,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:p,scrollToCallback:f}=nF(s,c,l,d,void 0,h);return t("scrollTo",f),t("scrollBy",g),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?mF:fF,...o},tabIndex:0,...a,...yF(l,u),children:i})}))}function SF({useEmitter:t,useEmitterValue:r,usePublisher:n}){return i.memo((function({children:i,style:o,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),g=r("context"),{scrollByCallback:p,scrollerRef:f,scrollToCallback:m}=nF(s,c,l,RT,h);return rF((()=>(f.current=h||window,()=>{f.current=null})),[f,h]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==d?{height:d+u}:{}},...a,...yF(l,g),children:i})}))}const kF=({children:t})=>{const r=i.useContext(eF),n=MF("viewportHeight"),o=MF("fixedItemHeight"),a=_F("alignToBottom"),s=_F("horizontalDirection"),l=mE(i.useMemo((()=>IT(n,(e=>KE(e,s?"width":"height")))),[n,s]),!0,_F("skipAnimationFrameInResizeObserver"));return i.useEffect((()=>{r&&(n(r.viewportHeight),o(r.itemHeight))}),[r,n,o]),e("div",{"data-viewport-type":"element",ref:l,style:bF(a),children:t})},DF=({children:t})=>{const r=i.useContext(eF),n=MF("windowViewportRect"),o=MF("fixedItemHeight"),a=_F("customScrollParent"),s=xE(n,a,_F("skipAnimationFrameInResizeObserver")),l=_F("alignToBottom");return i.useEffect((()=>{r&&(o(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,o]),e("div",{"data-viewport-type":"window",ref:s,style:bF(l),children:t})},TF=({children:t})=>{const r=_F("TopItemListComponent")||"div",n=_F("headerHeight"),i={...vF,marginTop:`${n}px`},o=_F("context");return e(r,{style:i,...yF(r,o),children:t})},EF=i.memo((function(r){const n=_F("useWindowScroll"),i=_F("topItemsIndexes").length>0,o=_F("customScrollParent"),a=_F("context"),s=o||n?AF:IF,l=o||n?DF:kF;return t(s,{...r,...yF(s,a),children:[i&&e(TF,{children:e(pF,{showTopList:!0})}),t(l,{children:[e(wF,{}),e(pF,{}),e($F,{})]})]})})),{Component:OF,useEmitter:FF,useEmitterValue:_F,usePublisher:MF}=JO(cF,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},EF),IF=CF({useEmitter:FF,useEmitterValue:_F,usePublisher:MF}),AF=SF({useEmitter:FF,useEmitterValue:_F,usePublisher:MF}),BF=OF,jF={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},RF={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:zF,floor:PF,max:LF,min:NF,round:HF}=Math;function WF(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function YF(e,t){return e&&e.width===t.width&&e.height===t.height}function VF(e,t){return e&&e.column===t.column&&e.row===t.row}const UF=lE((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},h,g,{didMount:p,propsReady:f},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=iE(0),C=iE(0),S=iE(jF),k=iE({height:0,width:0}),D=iE({height:0,width:0}),T=aE(),E=aE(),O=iE(0),F=iE(null),_=iE({column:0,row:0}),M=aE(),I=aE(),A=iE(!1),B=iE(0),j=iE(!0),R=iE(!1),z=iE(!1);NT(JT(p,nE(B),GT((([e,t])=>!!t))),(()=>{HT(j,!1)})),NT(JT(dE(p,j,D,k,B,R),GT((([e,t,r,n,,i])=>e&&!t&&0!==r.height&&0!==n.height&&!i))),(([,,,,e])=>{HT(R,!0),pO(1,(()=>{HT(T,e)})),UT(JT(c),(()=>{HT(t,[0,0]),HT(j,!0)}))})),VT(JT(I,GT((e=>null!=e&&e.scrollTop>0)),QT(0)),C),NT(JT(p,nE(I),GT((([,e])=>null!=e))),(([,e])=>{e&&(HT(k,e.viewport),HT(D,e.item),HT(_,e.gap),e.scrollTop>0&&(HT(A,!0),UT(JT(c,tE(1)),(e=>{HT(A,!1)})),HT(l,{top:e.scrollTop})))})),VT(JT(k,ZT((({height:e})=>e))),u),VT(JT(dE(uE(k,YF),uE(D,YF),uE(_,((e,t)=>e&&e.column===t.column&&e.row===t.row)),uE(c)),ZT((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),M),VT(JT(dE(uE($),n,uE(_,VF),uE(D,YF),uE(k,YF),uE(F),uE(C),uE(A),uE(j),uE(B)),GT((([,,,,,,,e])=>!e)),ZT((([e,[t,r],n,i,o,a,s,,l,c])=>{const{column:d,row:u}=n,{height:h,width:g}=i,{width:p}=o;if(0===s&&(0===e||0===p))return jF;if(0===g){const t=fO(c,e);return function(e){return{...RF,items:e}}(WF(t,t+Math.max(s-1,0),a))}const f=KF(p,g,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=f*PF((t+u)/(h+u)),b=f*zF((r+u)/(h+u))-1,b=NF(e-1,LF(b,f-1)),m=NF(b,LF(0,m))):(m=0,b=-1);const v=WF(m,b,a),{bottom:y,top:x}=XF(o,n,i,v),w=zF(e/f);return{bottom:y,itemHeight:h,items:v,itemWidth:g,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),VT(JT(F,GT((e=>null!==e)),ZT((e=>e.length))),$),VT(JT(dE(k,D,S,_),GT((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),ZT((([e,t,{items:r},n])=>{const{bottom:i,top:o}=XF(e,n,t,r);return[o,i]})),qT(WE)),t);const P=iE(!1);VT(JT(c,nE(P),ZT((([e,t])=>t||0!==e))),P);const L=sE(JT(dE(S,$),GT((([{items:e}])=>e.length>0)),nE(P),GT((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),ZT((([[,e]])=>e-1)),qT())),N=sE(JT(uE(S),GT((({items:e})=>e.length>0&&0===e[0].index)),QT(0),qT())),H=sE(JT(uE(S),nE(A),GT((([{items:e},t])=>e.length>0&&!t)),ZT((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),qT(HE),rE(0)));VT(H,g.scrollSeekRangeChanged),VT(JT(T,nE(k,D,$,_),ZT((([e,t,r,n,i])=>{const o=hO(e),{align:a,behavior:s,offset:l}=o;let c=o.index;"LAST"===c&&(c=n-1),c=LF(0,c,NF(n-1,c));let d=qF(t,i,r,c);return"end"===a?d=HF(d-t.height+r.height):"center"===a&&(d=HF(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=oE(JT(S,ZT((e=>e.offsetBottom+e.bottom))),0);return VT(JT(x,ZT((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:m,data:F,deviation:O,footerHeight:i,gap:_,headerHeight:o,increaseViewportBy:e,initialItemCount:C,itemDimensions:D,overscan:r,restoreStateFrom:I,scrollBy:a,scrollContainerState:s,scrollHeight:E,scrollTo:l,scrollToIndex:T,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:k,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...g,gridState:S,horizontalDirection:z,initialTopMostItemIndex:B,totalListHeight:W,...h,endReached:L,propsReady:f,rangeChanged:H,startReached:N,stateChanged:M,stateRestoreInProgress:A,...w}}),LT(TO,wE,wO,NO,dO,HO,fE));function KF(e,t,r){return LF(1,PF((e+r)/(PF(t)+r)))}function XF(e,t,r,n){const{height:i}=r;if(void 0===i||0===n.length)return{bottom:0,top:0};const o=qF(e,t,r,n[0].index);return{bottom:qF(e,t,r,n[n.length-1].index)+i,top:o}}function qF(e,t,r,n){const i=KF(e.width,r.width,t.column),o=PF(n/i),a=o*r.height+LF(0,o-1)*t.row;return a>0?a+t.row:a}const GF=lE((()=>{const e=iE((e=>`Item ${e}`)),t=iE({}),r=iE(null),n=iE("virtuoso-grid-item"),i=iE("virtuoso-grid-list"),o=iE(sF),a=iE("div"),s=iE(RT),l=(e,r=null)=>oE(JT(t,ZT((t=>t[e])),qT()),r),c=iE(!1),d=iE(!1);return VT(uE(d),c),{components:t,computeItemKey:o,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),ZF=lE((([e,t])=>({...e,...t})),LT(UF,GF)),QF=i.memo((function(){const t=a_("gridState"),r=a_("listClassName"),n=a_("itemClassName"),o=a_("itemContent"),a=a_("computeItemKey"),s=a_("isSeeking"),l=s_("scrollHeight"),c=a_("ItemComponent"),d=a_("ListComponent"),u=a_("ScrollSeekPlaceholder"),h=a_("context"),g=s_("itemDimensions"),p=s_("gap"),f=a_("log"),m=a_("stateRestoreInProgress"),b=s_("reportReadyState"),v=mE(i.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();g({height:e,width:t})}p({column:d_("column-gap",getComputedStyle(e).columnGap,f),row:d_("row-gap",getComputedStyle(e).rowGap,f)})}),[l,g,p,f]),!0,!1);return rF((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:r,ref:v,...yF(d,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const i=a(r.index,r.data,h);return s?e(u,{...yF(u,h),height:t.itemHeight,index:r.index,width:t.itemWidth},i):k(c,{...yF(c,h),className:n,"data-index":r.index,key:i},o(r.index,r.data,h))}))})})),JF=i.memo((function(){const t=a_("HeaderComponent"),r=s_("headerHeight"),n=a_("headerFooterTag"),o=mE(i.useMemo((()=>e=>{r(KE(e,"height"))}),[r]),!0,!1),a=a_("context");return t?e(n,{ref:o,children:e(t,{...yF(t,a)})}):null})),e_=i.memo((function(){const t=a_("FooterComponent"),r=s_("footerHeight"),n=a_("headerFooterTag"),o=mE(i.useMemo((()=>e=>{r(KE(e,"height"))}),[r]),!0,!1),a=a_("context");return t?e(n,{ref:o,children:e(t,{...yF(t,a)})}):null})),t_=({children:t})=>{const r=i.useContext(tF),n=s_("itemDimensions"),o=s_("viewportDimensions"),a=mE(i.useMemo((()=>e=>{o(e.getBoundingClientRect())}),[o]),!0,!1);return i.useEffect((()=>{r&&(o({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,o,n]),e("div",{ref:a,style:bF(!1),children:t})},r_=({children:t})=>{const r=i.useContext(tF),n=s_("windowViewportRect"),o=s_("itemDimensions"),a=a_("customScrollParent"),s=xE(n,a,!1);return i.useEffect((()=>{r&&(o({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,o]),e("div",{ref:s,style:bF(!1),children:t})},n_=i.memo((function({...r}){const n=a_("useWindowScroll"),i=a_("customScrollParent"),o=i||n?c_:l_,a=i||n?r_:t_,s=a_("context");return e(o,{...r,...yF(o,s),children:t(a,{children:[e(JF,{}),e(QF,{}),e(e_,{})]})})})),{Component:i_,useEmitter:o_,useEmitterValue:a_,usePublisher:s_}=JO(ZF,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},n_),l_=CF({useEmitter:o_,useEmitterValue:a_,usePublisher:s_}),c_=SF({useEmitter:o_,useEmitterValue:a_,usePublisher:s_});function d_(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,gE.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const u_=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),h_=({children:t})=>{const[r,n]=a(-1);return e(u_.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},g_=_.div`
    overflow: hidden;
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};
    background: ${Fc.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?_c["body-md-regular"]:_c["body-baseline-regular"]}

    ${Rc.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${jc["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Rc.MaxWidth.xs} {
        width: calc(100vw - ${jc["xs-margin"]} * 2);
    }

    ${Rc.MaxWidth.xxs} {
        width: calc(100vw - ${jc["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Fc["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,p_=_.div`
    background: transparent;
    padding: ${Ac["spacing-8"]};
`,f_=_.ul`
    list-style-type: none;
`,m_=_.li`
    display: flex;
    align-items: flex-start;
    gap: ${Ac["spacing-8"]};
    padding: ${Ac["spacing-12"]} ${Ac["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$disabled?M`
                cursor: not-allowed;
            `:e.$active&&e.$selected?M`
                background: ${Fc["bg-hover"]};
            `:e.$active?M`
                background: ${Fc["bg-hover-subtle"]};
            `:void 0}
`,b_=_(qe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Fc["icon-selected"]};
`,v_=_.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,y_=_(Xe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Fc["icon-selected"]};
`,x_=_(Ue)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Fc["icon-primary-subtlest"]};
`,w_=_(Ke)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Fc["icon-disabled-subtle"]};
`,$_=_.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,C_=_(Hp)`
    cursor: pointer;
    overflow: hidden;
    color: ${Fc["text-primary"]};
    font-size: inherit;
`,S_=_(C_)`
    ${_c["body-baseline-semibold"]}
`,k_=_(C_)`
    ${_c["body-md-semibold"]}
    padding: ${Ac["spacing-8"]} ${Ac["spacing-8"]};
`,D_=_.div`
    width: 100%;
    display: flex;
    padding: ${Ac["spacing-12"]} ${Ac["spacing-16"]};
    align-items: center;
`,T_=_(P)`
    margin-right: ${Ac["spacing-4"]};
    color: ${Fc["icon-error"]};
    height: 1em;
    width: 1em;
`,E_=_(Sd)`
    margin-right: ${Ac["spacing-8"]};
    color: ${Fc.icon};
`,O_=_.div`
    ${Kd()}
    color: ${Fc["text-subtle"]};
    padding: 0 ${Ac["spacing-16"]} ${Ac["spacing-12"]}
        ${Ac["spacing-16"]};
`,F_=_.div`
    background: ${Fc["bg-strong"]};
    border-radius: ${Bc.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?_c["body-md-regular"]:_c["body-baseline-regular"]}
`,__=_.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Ac["spacing-8"]};
    padding: ${e=>"small"===e.$variant?M`
                  ${Ac["spacing-8"]} ${Ac["spacing-16"]}
              `:M`10px ${Ac["spacing-16"]}`};
`,M_=_(Np)`
    flex: 1;
`,I_=_(He)`
    color: ${Fc.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,A_=_(td)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Ac["spacing-8"]};
    margin-left: -${Ac["spacing-8"]};
    color: ${Fc.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,B_=g(((r,n)=>{var{value:i,variant:o,onClear:a}=r,s=gt(r,["value","variant","onClear"]);return t(F_,{$variant:o,children:[t(__,{$variant:o,children:[e(I_,{"aria-hidden":!0}),e(M_,Object.assign({ref:n,value:i,$variant:o},s))]}),i&&e(A_,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(ze,{"aria-hidden":!0})})]})})),j_=({listItems:n,multiSelect:i,maxSelectable:s,selectedItems:l,disableItemFocus:c,itemsLoadState:d="success",itemTruncationType:h="end",itemMaxLines:g=2,labelDisplayType:m="inline",variant:b="default",listboxId:v,width:y,topScrollItem:x,onSelectItem:w,onSelectAll:$,onDismiss:C,onRetry:S,valueExtractor:k,listExtractor:D,renderListItem:T,renderCustomCallToAction:E,enableSearch:O,hideNoResultsDisplay:F,noResultsDescription:_,searchPlaceholder:M="Search",searchFunction:I,onSearch:A})=>{const{focusedIndex:B,setFocusedIndex:j}=f(u_),[R,z]=a(""),[P,L]=a(null!=n?n:[]),N=ah(d),H=ih(),W=o(null),Y=o(null),V=o([]),U=o(null),K=o(null),X=!!s&&!!l&&(null==l?void 0:l.length)===s,q=e=>{const t=D?D(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},G=p((e=>!!yD(l,(t=>wD(t,e)))),[l]),Z=th((()=>null==I?void 0:I(R))),Q=th((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=q(e),n=R.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),J=(e,t)=>{X&&!G(e)||(j(t),null==w||w(e,(e=>k?k(e):e)(e)))},ee=e=>{const t=e.target.value;z(t),null==A||A()},te=()=>{var e;z(""),null===(e=U.current)||void 0===e||e.focus(),null==A||A()},re=()=>{null==S||S()};rh("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),B<P.length-1){const e=B+1;null===(t=V.current[e])||void 0===t||t.focus(),j(e)}break;case"ArrowUp":if(e.preventDefault(),B>0){const e=B-1;null===(r=V.current[e])||void 0===r||r.focus(),j(e)}else 0===B&&U.current&&(U.current.focus(),j(-1));break;case"Space":case"Enter":document.activeElement===V.current[B]&&(e.preventDefault(),P[B]&&J(P[B],B))}})),u((()=>{var e;if(!x)return void(null===(e=K.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(x);K.current&&-1!==e&&(K.current.scrollToIndex({index:e}),j(e))}),0);return()=>clearTimeout(t)}),[V,n,j,x]),u((()=>{var e,t,r;if(H)return;if(c||!n)return;const i=n.findIndex((e=>G(e)));U.current?(j(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):B>0?(null===(e=K.current)||void 0===e||e.scrollToIndex({index:B,align:"center"}),setTimeout((()=>{var e;return null===(e=V.current[B])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=K.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),j(i),setTimeout((()=>{var e;return null===(e=V.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(r=K.current)||void 0===r||r.scrollToIndex({index:0}),j(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200))}),[G,c,B,n,H,j]),u((()=>{H&&N&&(c||"success"===d&&U.current&&(j(-1),U.current.focus()))}),[H,N,d,j,c]),u((()=>{var e;L(null!==(e=""===R?n:I?Z():Q())&&void 0!==e?e:[])}),[Z,Q,n,I,R]);const ne=t=>i?e(X&&!t?w_:t?y_:x_,{"aria-hidden":!0}):t?e(b_,{"aria-hidden":!0}):e(v_,{}),ie=(t,r)=>{const{title:n,secondaryLabel:i}=q(t);return e(FT,{displayType:m,label:n,maxLines:g,selected:r,disabled:!r&&X,sublabel:i,truncationType:h,variant:b})},oe=(n,o)=>{if(!S||"success"===d){const a=G(n),s=o===B;return e(m_,{"aria-selected":a,"aria-multiselectable":i,"aria-disabled":!a&&X,"data-testid":"list-item",onClick:()=>J(n,o),onMouseEnter:()=>(e=>{j(e)})(o),ref:e=>{V.current[o]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&X,children:T?T(n,{selected:a}):t(r,{children:[ne(a),ie(n,a)]})},((e,t)=>`item_${t}__${k?k(e):e}`)(n,o))}},ae=()=>{if(l&&i&&P.length>0&&!R&&"success"===d)return e($_,{children:e(k_,{onClick:$,type:"button",$variant:b,children:s||0!==l.length?"Clear all":"Select all"})})},se=()=>{if(!F&&(R||!O)&&0===P.length&&"success"===d)return t(r,{children:[t(D_,{"data-testid":"list-no-results",children:[e(T_,{"data-testid":"no-result-icon"}),"No results found."]}),_&&e(O_,{"data-testid":"no-result-desc",children:_})]})},le=()=>{if(S&&"loading"===d)return t(D_,{"data-testid":"list-loading",children:[e(E_,{}),"Loading..."]})},ce=()=>{if(S&&"fail"===d)return t(D_,{"data-testid":"list-fail",children:[e(T_,{"data-testid":"load-error-icon"}),"Failed to load. ",e(S_,{onClick:re,type:"button",$variant:b,children:"Try again."})]})},de=()=>{var t;const r="test"===process.env.NODE_ENV;return e(f_,{role:"listbox",id:v,children:e(BF,Object.assign({ref:K,style:{height:"100%"},data:P,customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>oe(t,e)},r?{initialItemCount:P.length}:{}),r?P.length:void 0)})};return t(g_,{"data-testid":"dropdown-container",ref:W,$width:y,$variant:b,children:[t(p_,{ref:Y,"data-testid":"dropdown-list",children:[(()=>{if((O||I)&&"success"===d)return e(B_,{ref:U,onChange:ee,value:R,placeholder:M,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:b})})(),ae(),se(),le(),ce(),de()]}),(()=>{if(E)return e("div",{"data-testid":"custom-cta",children:E(C,P)})})()]})},R_=_(Hp)`
    display: flex;
    align-items: center;
    gap: ${Ac["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Ac["spacing-16"]};

    ${e=>"small"===e.$variant?_c["body-md-regular"]:_c["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,z_=_.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Mc["duration-250"]} ${Mc["ease-default"]};

    svg {
        color: ${Fc.icon};
        height: 1em;
        width: 1em;
    }
`,P_=g((({children:r,disabled:n,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},c)=>t(R_,{ref:c,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l,children:[r,!s&&e(z_,{$expanded:i,$variant:l,children:e(be,{"aria-hidden":!0})})]})));var L_=Symbol.for("immer-nothing"),N_=Symbol.for("immer-draftable"),H_=Symbol.for("immer-state"),W_="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function Y_(e,...t){if("production"!==process.env.NODE_ENV){const r=W_[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var V_=Object.getPrototypeOf;function U_(e){return!!e&&!!e[H_]}function K_(e){return!!e&&(q_(e)||Array.isArray(e)||!!e[N_]||!!e.constructor?.[N_]||eM(e)||tM(e))}var X_=Object.prototype.constructor.toString();function q_(e){if(!e||"object"!=typeof e)return!1;const t=V_(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===X_}function G_(e,t){0===Z_(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function Z_(e){const t=e[H_];return t?t.type_:Array.isArray(e)?1:eM(e)?2:tM(e)?3:0}function Q_(e,t){return 2===Z_(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function J_(e,t,r){const n=Z_(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function eM(e){return e instanceof Map}function tM(e){return e instanceof Set}function rM(e){return e.copy_||e.base_}function nM(e,t){if(eM(e))return new Map(e);if(tM(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=q_(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[H_];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(V_(e),t)}{const t=V_(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function iM(e,t=!1){return aM(e)||U_(e)||!K_(e)||(Z_(e)>1&&(e.set=e.add=e.clear=e.delete=oM),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>iM(t,!0)))),e}function oM(){Y_(2)}function aM(e){return Object.isFrozen(e)}var sM,lM={};function cM(e){const t=lM[e];return t||Y_(0,e),t}function dM(){return sM}function uM(e,t){t&&(cM("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function hM(e){gM(e),e.drafts_.forEach(fM),e.drafts_=null}function gM(e){e===sM&&(sM=e.parent_)}function pM(e){return sM={drafts_:[],parent_:sM,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function fM(e){const t=e[H_];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function mM(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[H_].modified_&&(hM(t),Y_(4)),K_(e)&&(e=bM(t,e),t.parent_||yM(t,e)),t.patches_&&cM("Patches").generateReplacementPatches_(r[H_].base_,e,t.patches_,t.inversePatches_)):e=bM(t,r,[]),hM(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==L_?e:void 0}function bM(e,t,r){if(aM(t))return t;const n=t[H_];if(!n)return G_(t,((i,o)=>vM(e,n,t,i,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return yM(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),G_(i,((i,a)=>vM(e,n,t,i,a,r,o))),yM(e,t,!1),r&&e.patches_&&cM("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function vM(e,t,r,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===r&&Y_(5),U_(i)){const a=bM(e,i,o&&t&&3!==t.type_&&!Q_(t.assigned_,n)?o.concat(n):void 0);if(J_(r,n,a),!U_(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(K_(i)&&!aM(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;bM(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||yM(e,i)}}function yM(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&iM(t,r)}var xM={get(e,t){if(t===H_)return e;const r=rM(e);if(!Q_(r,t))return function(e,t,r){const n=CM(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!K_(n)?n:n===$M(e.base_,t)?(kM(e),e.copy_[t]=DM(n,e)):n},has:(e,t)=>t in rM(e),ownKeys:e=>Reflect.ownKeys(rM(e)),set(e,t,r){const n=CM(rM(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=$M(rM(e),t),i=n?.[H_];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||Q_(e.base_,t)))return!0;kM(e),SM(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==$M(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,kM(e),SM(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=rM(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){Y_(11)},getPrototypeOf:e=>V_(e.base_),setPrototypeOf(){Y_(12)}},wM={};function $M(e,t){const r=e[H_];return(r?rM(r):e)[t]}function CM(e,t){if(!(t in e))return;let r=V_(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=V_(r)}}function SM(e){e.modified_||(e.modified_=!0,e.parent_&&SM(e.parent_))}function kM(e){e.copy_||(e.copy_=nM(e.base_,e.scope_.immer_.useStrictShallowCopy_))}G_(xM,((e,t)=>{wM[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),wM.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&Y_(13),wM.set.call(this,e,t,void 0)},wM.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&Y_(14),xM.set.call(this,e[0],t,r,e[0])};function DM(e,t){const r=eM(e)?cM("MapSet").proxyMap_(e,t):tM(e)?cM("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:dM(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=xM;r&&(i=[n],o=wM);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:dM()).drafts_.push(r),r}function TM(e){if(!K_(e)||aM(e))return e;const t=e[H_];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=nM(e,t.scope_.immer_.useStrictShallowCopy_)}else r=nM(e,!0);return G_(r,((e,t)=>{J_(r,e,TM(t))})),t&&(t.finalized_=!1),r}var EM=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&Y_(6),void 0!==r&&"function"!=typeof r&&Y_(7),K_(e)){const i=pM(this),o=DM(e,void 0);let a=!0;try{n=t(o),a=!1}finally{a?hM(i):gM(i)}return uM(i,r),mM(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===L_&&(n=void 0),this.autoFreeze_&&iM(n,!0),r){const t=[],i=[];cM("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}Y_(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const i=this.produce(e,t,((e,t)=>{r=e,n=t}));return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){K_(e)||Y_(8),U_(e)&&(e=function(e){U_(e)||Y_(10,e);return TM(e)}(e));const t=pM(this),r=DM(e,void 0);return r[H_].isManual_=!0,gM(t),r}finishDraft(e,t){const r=e&&e[H_];r&&r.isManual_||Y_(9);const{scope_:n}=r;return uM(n,t),mM(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=cM("Patches").applyPatches_;return U_(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},OM=EM.produce;EM.produceWithPatches.bind(EM),EM.setAutoFreeze.bind(EM),EM.setUseStrictShallowCopy.bind(EM),EM.applyPatches.bind(EM),EM.createDraft.bind(EM),EM.finishDraft.bind(EM);var FM=kS,_M=nk,MM=VC,IM=Go,AM=ES,BM=XC,jM=yS,RM=cS,zM=Object.prototype.hasOwnProperty;var PM=function(e){if(null==e)return!0;if(AM(e)&&(IM(e)||"string"==typeof e||"function"==typeof e.splice||BM(e)||RM(e)||MM(e)))return!e.length;var t=_M(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(jM(e))return!FM(e).length;for(var r in e)if(zM.call(e,r))return!1;return!0},LM=Xo(PM);const NM=(e,t,r)=>{const n=OM(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n],o=WM(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}}));return n},HM=(e,t)=>{const[r,...n]=t;if(LM(e)||LM(r))return;const i=e.find((e=>e.key===r));return i&&n.length?HM(i.subItems,n):i},WM=e=>e.join(","),YM=e=>new Set(e.map((e=>e.join(",")))),VM=_.li`
    display: ${e=>e.$visible?"flex":"none"};
`,UM=_.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Ac["spacing-8"]};
    padding: ${Ac["spacing-12"]} ${Ac["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&M`
            background: ${Fc["bg-hover"]};
        `}
`,KM=_.div`
    height: 1px;
    width: calc((1lh + ${Ac["spacing-8"]}) * ${e=>e.$level});
`,XM=_.div`
    width: 1lh;
    height: 1lh;
    color: ${Fc["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Mc["duration-350"]}
            ${Mc["ease-standard"]};

        ${e=>{if(e.$expanded)return M`
                    transform: rotate(90deg);
                `}}
    }
`,qM=_.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Ac["spacing-8"]};
`,GM=_.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Ac["spacing-16"]};

    display: flex;
    justify-content: center;
`,ZM=_(Ze)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Fc["icon-selected"]};
`,QM=({listItems:n,multiSelect:i=!1,selectedKeyPaths:s,itemsLoadState:l="success",itemTruncationType:c="end",itemMaxLines:d=2,variant:h="default",listboxId:g,width:p,mode:f="default",selectableCategory:b,onSelectItem:v,onSelectAll:y,onRetry:x,enableSearch:w,hideNoResultsDisplay:$,noResultsDescription:C,searchPlaceholder:S="Search",onSearch:k})=>{const D=i||b,[T,E]=a(""),O=T.toLowerCase().trim(),[F,_]=a(!1),M=o(null),I=o(null),A=o([]),B=o(null),j=ih(),[R,z]=a([]),[P,L]=a([]),N=F?P:R,H=m((()=>{let e=0;for(const t of R)t.level>e&&(e=t.level);return e}),[R]),[W,Y]=a(0),[V,U]=a([]),[K,X]=a(0),q=e=>{const t=e.target.value;E(t),""===t?_(!1):t.trim().length>=3&&_(!0),null==k||k()},G=()=>{var e;E(""),_(!1),null===(e=B.current)||void 0===e||e.focus(),null==k||k()},Z=()=>{null==x||x()},Q=()=>{if(0===s.size){const e=[],t=[];R.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==y||y(e,t)}else null==y||y([],[])},J=th(((e,t)=>((e,t,r,n,i)=>{const o=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var h,g;const p=s?s.level+1:0,f=s?[...s.keyPath,d.key]:[d.key],m=WM(f),b={item:d,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:f,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||(null==s?void 0:s.expanded)||!1,expanded:i,checked:t.has(m),hasSubItems:!!(null===(h=d.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(g=d.subItems)||void 0===g?void 0:g.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,s,i,O,t))),ee=th((e=>{return s.size?(t=J(e,!1),OM(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>OM(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),o=e[r].keyPath.slice(0,i.length);wD(i,o)&&(n.visible=!0)}return e})))(J(e,!1));var t})),te=th((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(O))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),re=th((()=>{z((e=>NM(e,s,i))),F&&L((e=>NM(e,s,i)))})),ne=(e,t,r)=>{const n=((e,t,r)=>OM(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!wD(n,a))break;t.visible=r&&o.expanded&&o.visible}})))(N,e,t);Y(e),X(r),F?L(n):z(n)};rh("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(N,(e=>e.visible),W+1);r&&(X((e=>e+1)),Y(r.index),null===(t=A.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(N,(e=>e.visible),W-1);t?(X((e=>e-1)),Y(t.index),null===(r=A.current[t.index])||void 0===r||r.focus()):0===K&&B.current&&(B.current.focus(),X(-1),Y(-1));break}case"ArrowRight":e.preventDefault(),ne(W,!0,K);break;case"ArrowLeft":e.preventDefault(),ne(W,!1,K);break;case"Space":if(document.activeElement===A.current[W]){e.preventDefault();const t=N[W];if(t.hasSubItems&&!D)return;null==v||v(t)}}})),u((()=>{let e=[];"default"===f?e=ee(n):"expand"===f?e=J(n,!0):"collapse"===f&&(e=J(n,!1)),z(e)}),[J,ee,n,f]),u((()=>{U(N.filter((e=>e.visible)))}),[F,N]),u((()=>{re()}),[i,s,re]),u((()=>{if(F&&T.trim().length>=3){const e=te(n),t=(e=>OM(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(J(e,!1));L(t)}}),[te,J,n,F,T]),u((()=>{j||(B.current?(Y(-1),X(-1),setTimeout((()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.focus()}),200)):A.current[W]?setTimeout((()=>{var e;return null===(e=A.current[W])||void 0===e?void 0:e.focus()}),200):(Y(0),X(0),setTimeout((()=>{var e;return null===(e=A.current[0])||void 0===e?void 0:e.focus()}),200)))}),[W,K,j]);const ie=()=>{if(w&&"success"===l)return e(B_,{ref:B,onChange:q,value:T,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:G,variant:h})},oe=()=>{if(i&&!F&&R.length>0&&"success"===l)return e($_,{children:e(k_,{onClick:Q,type:"button",$variant:h,children:0===s.size?"Select all":"Clear all"})})},ae=()=>{if(!$&&F&&0===P.length&&"success"===l)return t(r,{children:[t(D_,{"data-testid":"list-no-results",children:[e(T_,{"data-testid":"no-result-icon"}),"No results found."]}),C&&e(O_,{"data-testid":"no-result-desc",children:C})]})},se=()=>{if(x&&"loading"===l)return t(D_,{"data-testid":"list-loading",children:[e(Rd,{}),"Loading..."]})},le=()=>{if(x&&"fail"===l)return t(D_,{"data-testid":"list-fail",children:[e(T_,{"data-testid":"load-error-icon"}),"Failed to load. ",e(S_,{onClick:Z,type:"button",$variant:h,children:"Try again."})]})},ce=t=>{if(i)switch(t.checked){case"mixed":return e(ZM,{"aria-hidden":!0});case!0:return e(y_,{"aria-hidden":!0});default:return e(x_,{"aria-hidden":!0})}if(!t.hasSubItems)return e(GM,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(b_,{"aria-hidden":!0})})},de=(r,n)=>{const{level:o,visible:a,expanded:s,keyPath:l,checked:u,hasSubItems:h,indexInParent:g,parentSetSize:p}=r,f=r.index,m=K===n,b=h&&!D;return t(VM,{$visible:a,children:[H>0&&e(KM,{$level:o}),H>0&&!h&&i&&e(qM,{}),t(UM,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":o+1,"aria-posinset":g+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?ne(f,!s,n):((e,t)=>{X(t),Y(e),null==v||v(N[e])})(f,n)},onMouseEnter:()=>((e,t)=>{Y(t.index),X(e)})(n,r),ref:e=>A.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[h&&e(XM,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),ne(f,!s,n)},$expanded:s,children:e(Ge,{})}),ce(r),e(FT,{bold:h,searchTerm:F?O:void 0,label:r.item.label,selected:!!u,truncationType:c,maxLines:d})]})]},`[${l.join("---")}]`)},ue=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":i,id:g,ref:I,role:"tree",children:e(BF,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=M.current)&&void 0!==t?t:void 0,data:V,itemContent:(e,t)=>de(t,e)},r?{initialItemCount:V.length}:{}),r?V.length:void 0)})};return e(g_,{"data-testid":"dropdown-container",ref:M,$width:p,$variant:h,children:t(p_,{"data-testid":"nested-dropdown-list",children:[ie(),oe(),ae(),se(),le(),ue()]})})},JM=({selectedOptions:t,placeholder:r="Select",options:n,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:g,searchPlaceholder:p,valueExtractor:f,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:k,renderCustomCallToAction:D,onBlur:T,variant:E="default",readOnly:O,alignment:F,dropdownZIndex:_,maxSelectable:M,dropdownRootNode:I})=>{const[A,B]=a(t||[]),[j,R]=a(!1),[z,P]=a(!1),[L]=a((()=>Ju.generate())),N=o(null),H=o(null);u((()=>{B(t||[])}),[t]);const W=()=>{A&&A.length>0||M?(B([]),q([])):(B(n),q(n))},Y=(e,t)=>{const r=[...A],n=vD(A,(e=>(f?f(e):e)===t));n>-1?r.splice(n,1):r.push(e),B(r),q(r)},V=()=>{j&&(R(!1),X(!1))},U=()=>{z||j||P(!0)},K=e=>{z&&!j&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==T||T())},X=e=>{!e&&y&&y(),e&&v&&v()},q=e=>{b&&b(e)};return e(h_,{children:e(Df,{enabled:!O&&!i,isOpen:j,renderElement:()=>e(Pp,{className:l,"data-testid":c,id:d,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:z,$disabled:i,$readOnly:O,$error:s,children:e(P_,{ref:H,disabled:i,expanded:j,listboxId:L,popupRole:"listbox",readOnly:O,variant:E,children:e(vf,{$disabled:i,children:A&&0!==A.length?e(yf,{$variant:E,children:n&&A.length===n.length?"All selected":`${A.length} selected`}):e(xf,{truncateType:$,$variant:E,children:r})})})}),renderDropdown:({elementWidth:t})=>e(j_,{listboxId:L,listItems:n,onSelectItem:Y,onDismiss:V,valueExtractor:f,listExtractor:m,enableSearch:h,searchFunction:g,searchPlaceholder:p,multiSelect:!0,maxSelectable:M,selectedItems:A,onSelectAll:W,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:k,renderCustomCallToAction:D,variant:E,width:t}),onOpen:()=>{R(!0),X(!0),P(!0)},onClose:e=>{R(!1),X(!1),"click"!==e&&(P(!1),null==T||T())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),R(!1),X(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:_,rootNode:I})})},eI=(e,t)=>{const[r,...n]=t;if(LM(e)||!r)return;const i=e.find((e=>e.key===r));return i?n.length?eI(i.subItems,n):i:void 0},tI=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...tI(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},rI=({placeholder:t="Select",options:r,disabled:n,error:i,className:s,"data-testid":l,id:c,selectedKeyPaths:d,mode:h,valueToStringFunction:g,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,noResultsDescription:b,readOnly:v,onSearch:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,onBlur:S,optionsLoadState:k="success",optionTruncationType:D="end",variant:T="default",alignment:E,dropdownZIndex:O,dropdownRootNode:F})=>{const _=r,[M,I]=a(d?YM(d):new Set),[A,B]=a([]),[j,R]=a(!1),[z,P]=a(!1),[L]=a((()=>Ju.generate())),N=o(null),H=o(null),W=o(null);u((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const i=t[n],o=eI(e,i);o&&r.push({value:o.value,label:o.label,keyPath:i})}return r})(_,e);I(YM(e)),B(t)}),[d,_]);const Y=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));I(YM(e)),B(r),Z(e,r)},V=e=>{const t=Q(e),r=t.map((e=>e.keyPath));B(t),I(YM(r)),Z(r,t)},U=()=>{z||j||P(!0)},K=e=>{z&&!j&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==S||S())},X=()=>{if(A.length>1)return`${A.length} selected`;const{label:e,value:t}=A[0];return g?g(t):e},q=e=>{if("middle"===D){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),eh.truncateOneLine(e,t,120,6)}return e},G=e=>{!e&&$&&$(),e&&w&&w()},Z=(e,t)=>{if(x){const r=t.map((e=>e.value));x(e,r)}},Q=e=>{if(!0===e.checked)return A.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!wD(e.keyPath,r)}));{const t=[...A],r=e.hasSubItems?((e,t)=>{const r=eI(e,t);return r&&r.subItems?tI(r.subItems,t):[]})(_,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{A.find((t=>wD(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(Df,{enabled:!v&&!n,isOpen:j,renderElement:()=>e(Pp,{className:s,"data-testid":l,id:c,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:z,$disabled:n,$readOnly:v,$error:i,children:e(P_,{ref:H,disabled:n,expanded:j,listboxId:L,popupRole:"tree",readOnly:v,variant:T,children:e(vf,{ref:W,$disabled:n,children:LM(A)?e(xf,{truncateType:D,children:t}):e(yf,{truncateType:D,children:q(X())})})})}),renderDropdown:({elementWidth:t})=>e(QM,{listboxId:L,listItems:_,multiSelect:!0,selectedKeyPaths:M,itemsLoadState:k,itemTruncationType:D,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,noResultsDescription:b,onSelectItem:V,onSelectAll:Y,onRetry:C,onSearch:y,variant:T,mode:h,width:t}),onOpen:()=>{R(!0),G(!0),P(!0)},onClose:e=>{R(!1),G(!1),"click"!==e&&(P(!1),null==S||S())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),R(!1),G(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:O,rootNode:F})},nI=({placeholder:t="Select",options:r,disabled:n,error:i,className:s,"data-testid":l,id:c,selectedKeyPath:d,mode:h,valueToStringFunction:g,enableSearch:p,searchPlaceholder:f,selectableCategory:m,hideNoResultsDisplay:b,noResultsDescription:v,readOnly:y,onBlur:x,onSearch:w,onSelectOption:$,onShowOptions:C,onHideOptions:S,onRetry:k,optionsLoadState:D="success",optionTruncationType:T="end",variant:E="default",alignment:O,dropdownZIndex:F,dropdownRootNode:_})=>{const M=r,[I,A]=a(d?YM([d]):new Set),[B,j]=a(),[R,z]=a(!1),[P,L]=a(!1),[N]=a((()=>Ju.generate())),H=o(null),W=o(null),Y=o(null);u((()=>{A(d?YM([d]):new Set);const e=HM(M,d||[]);j(null!=e?e:void 0)}),[d,M]);const V=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;A(YM([r])),j({label:n,value:i}),z(!1),G(!1),null===(t=W.current)||void 0===t||t.focus(),null==$||$(r,i)},U=()=>{P||R||L(!0)},K=e=>{P&&!R&&H.current&&!H.current.contains(e.relatedTarget)&&(L(!1),null==x||x())},X=()=>{if(!B)return"";const{label:e,value:t}=B;return g?g(t):e},q=e=>{if("middle"===T){let t=0;return Y&&Y.current&&(t=Y.current.getBoundingClientRect().width),eh.truncateOneLine(e,t,120,6)}return e},G=e=>{!e&&S&&S(),e&&C&&C()};return e(Df,{enabled:!y&&!n,isOpen:R,renderElement:()=>e(Pp,{className:s,"data-testid":l,id:c,ref:H,tabIndex:-1,onFocus:U,onBlur:K,$focused:P,$disabled:n,$readOnly:y,$error:i,children:e(P_,{ref:W,disabled:n,expanded:R,listboxId:N,popupRole:"tree",readOnly:y,variant:E,children:e(vf,{ref:Y,$disabled:n,children:LM(B)?e(xf,{truncateType:T,children:t}):e(yf,{truncateType:T,children:q(X())})})})}),renderDropdown:({elementWidth:t})=>e(QM,{listboxId:N,listItems:M,selectedKeyPaths:I,selectableCategory:m,itemsLoadState:D,itemTruncationType:T,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:b,noResultsDescription:v,onSelectItem:V,onRetry:k,onSearch:w,variant:E,mode:h,width:t}),onOpen:()=>{z(!0),G(!0),L(!0)},onClose:e=>{z(!1),G(!1),"click"!==e&&(L(!1),null==x||x())},onDismiss:()=>{var e;null===(e=W.current)||void 0===e||e.focus(),z(!1),G(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:F,rootNode:_})};var iI=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r};var oI=function(e){return function(t,r,n){for(var i=-1,o=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}},aI=oI(),sI=MS;var lI=ES;var cI=function(e,t){return function(r,n){if(null==r)return r;if(!lI(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Object(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}((function(e,t){return e&&aI(e,t,sI)}));var dI=iI,uI=cI,hI=oD,gI=function(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r},pI=Go;var fI=function(e,t,r){var n=pI(e)?dI:gI,i=arguments.length<3;return n(e,hI(t),r,i,uI)},mI=Xo(fI);const bI=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],vI=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var yI;!function(e){e.getCountries=()=>[].concat(...bI.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:vI("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,i=n.split(" ");i.shift();const o=i.join(" ");return mI(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(yI||(yI={}));const xI=t=>{var{onChange:r,value:n,allowClear:i,onClear:s,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:g,enableSearch:p,onHideOptions:f,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=gt(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=a(yI.getCountries()),[w,$]=a(void 0),[C,S]=a(""),k=o(null),D=oh({ref:k,formatter:e=>yI.formatNumber(e.replace(/[^0-9]/g,""),w)});u((()=>{const e=x.filter((e=>e.countryCode===wI(null==n?void 0:n.countryCode)))[0];$(e),S(yI.formatNumber(null==n?void 0:n.number,e))}),[n]);const T=e=>{O(C,e),r&&E(C,e)},E=(e,t)=>{const n=yI.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&$I(t.countryCode)})},O=(e,t)=>{S(yI.formatNumber(e,t)),$(t)};return e(aT,Object.assign({ref:k,value:C,onChange:()=>{const e=D();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),O(t,w),r&&E(t,w)},allowClear:i&&!!C,onClear:()=>{s?s():S("")},onBlur:l,error:c,placeholder:b,addon:d?{type:"label",attributes:{value:$I(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:h,options:x,selectedOption:w,enableSearch:p,searchPlaceholder:g,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:$I(e.countryCode)}),onSelectOption:T,onHideOptions:f,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},wI=e=>e?e.replace("+",""):"",$I=e=>e?e.includes("+")?e:`+${e}`:"",CI=({className:n,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:h=!1,disabled:g=!1,error:f,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=a((()=>s?W(s):"")),[$,C]=a((()=>s?W(s):"")),[S,k]=a([]),[D,T]=a(!0),[E,O]=a(!1),[F,_]=a(!!s),[M,I]=a(s),A=o(c),B=e=>pt(void 0,void 0,void 0,(function*(){O(!1),T(!0);try{const t=yield A.current(e);C(e),k(t),T(!1)}catch(e){O(!0)}})),j=p(Kg((e=>B(e)),500,{leading:!1,trailing:!0}),[]);u((()=>{A.current=c}),[c]),u((()=>{x&&x.length>=l&&x!==$?j(x):j.cancel(),""===x&&M&&(y&&y(void 0,void 0),P(),I(void 0)),s&&x!==W(s)&&_(!1)}),[x,s]),u((()=>{w(s?W(s):""),P(s),I(s)}),[s]);const R=e=>{w(e.target.value)},z=(e,t)=>{y&&y(e,t)},P=e=>{C(e?W(e):""),_(!!e),k([]),T(!0)},L=()=>{w(""),y&&y(void 0,void 0),P()},N=()=>{F||M?(P(M),w(W(M)),y&&y(M,Y(M)),I(M)):L()},H=()=>!!x&&x.length>=l&&!F,W=e=>e?v?v(e):e.toString():"",Y=e=>{if(e)return m?m(e):e},V=()=>e(V$,{type:"text",value:x,onChange:R,placeholder:d,readOnly:h,disabled:g,allowClear:!0,onClear:L,styleType:"no-border",onBlur:x.length<l?N:void 0});return t(wf,{className:n,show:H(),error:f&&!H(),disabled:g,readOnly:h,testId:i,onBlur:N,children:[e(h?r:pf,{children:V()}),!h&&H()&&e(bf,{}),e(VD,{listItems:S,onSelectItem:z,valueExtractor:m,listExtractor:b,itemsLoadState:E?"fail":D?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>B(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},SI=_.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,kI=_(N$)`
    position: absolute;
    right: 0;
    padding-left: ${Ac["spacing-8"]};
    margin-right: 0;
`,DI=_(gf)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Ac["spacing-16"]});
`,TI=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:s,disabled:l,className:c,readOnly:d,error:h,"data-testid":g,id:p,enableSearch:f=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:k,onRetry:D,optionsLoadState:T={from:"success",to:"success"},optionTruncationType:E="middle",renderCustomSelectedOption:O,renderListItem:F,renderCustomCallToAction:_}=r,M=gt(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[I,A]=a(),[B,j]=a(),R=o(null),z={from:o(null),to:o(null)},[P,L]=a("none");u((()=>{A(null==n?void 0:n.from),j(null==n?void 0:n.to)}),[n]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||L("from"===e?"from":"to"===e&&I?"to":"from")},H=e=>{var t;const r="from"===e?I:B;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===E){let r=0;return z[e]&&z[e].current&&(r=z[e].current.getBoundingClientRect().width),eh.truncateOneLine(t,r,120,8)}return t},Y=e=>{!e&&k&&k(),e&&S&&S()},V=t=>{const r="from"===t?I:B;return r?O?O(r):e(yf,{truncateType:E,children:W(t,H(t))}):e(xf,{truncateType:E,children:W(t,i[t]||"")})},U=t=>e(vf,{onClick:N(t),ref:z[t],$disabled:l,children:V(t)});return t(wf,{show:"none"!==P,error:h&&!("none"!==P),disabled:l,readOnly:d,testId:g,onBlur:()=>{Y(!1),L("none"),I&&B||(j(void 0),A(void 0))},className:c,children:[t(SI,{children:[e(DI,Object.assign({type:"button","data-testid":p||"selector",disabled:l,ref:R,onClick:N()},M,{children:t(qf,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[U("from"),U("to")]})})),"none"===P&&I&&B&&!d&&!l&&e(kI,{onClick:e=>{e.stopPropagation(),A(void 0),j(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e(H$,{"aria-hidden":!0})})]}),"none"!==P&&e(bf,{}),(()=>{if("none"===P)return null;const t=s[P];if(t&&t.length>0){const r="from"===P?I:B;return e(VD,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):j(e),Y(!1),R&&(null===(n=R.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(j(void 0),L("to"),Y(!0)):L("none")})(e,t,P),onDismiss:()=>(()=>{var e;L("none"),Y(!1),R&&(null===(e=R.current)||void 0===e||e.focus()),I&&B||(j(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:f,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:r?[r]:[],onRetry:D,itemsLoadState:T[P],itemTruncationType:E,renderListItem:F,renderCustomCallToAction:_})}return null})()]})},EI=({selectedOption:t,placeholder:r="Select",options:n,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:g,searchPlaceholder:p,valueExtractor:f,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:k,renderListItem:D,hideNoResultsDisplay:T,noResultsDescription:E,renderCustomCallToAction:O,onBlur:F,variant:_="default",readOnly:M,alignment:I,dropdownZIndex:A,dropdownRootNode:B})=>{const[j,R]=a(t),[z,P]=a(!1),[L,N]=a(!1),[H]=a((()=>Ju.generate())),W=o(null),Y=o(null),V=o(null);u((()=>{R(t)}),[t]);const U=(e,t)=>{var r;null===(r=Y.current)||void 0===r||r.focus(),R(e),P(!1),Q(!1),null==y||y(e,t)},K=()=>{z&&(P(!1),Q(!1))},X=()=>{L||z||N(!0)},q=e=>{L&&!z&&W.current&&!W.current.contains(e.relatedTarget)&&(N(!1),null==F||F())},G=()=>{var e;if(!j)return"";if(v)return v(j);if(f){const t=f(j);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return j.toString()},Z=e=>{if("middle"===S){let t=0;return V&&V.current&&(t=V.current.getBoundingClientRect().width),eh.truncateOneLine(e,t,120,8)}return e},Q=e=>{e?null==x||x():null==w||w()};return e(h_,{children:e(Df,{enabled:!M&&!i,isOpen:z,renderElement:()=>e(Pp,{className:l,"data-testid":c,id:d,ref:W,tabIndex:-1,onFocus:X,onBlur:q,$focused:L,$disabled:i,$readOnly:M,$error:s,children:e(P_,{ref:Y,disabled:i,expanded:z,listboxId:H,popupRole:"listbox",readOnly:M,variant:_,children:e(vf,{ref:V,$disabled:i,children:j?k?k(j):e(yf,{truncateType:S,$variant:_,children:Z(G())}):e(xf,{truncateType:S,$variant:_,children:r})})})}),renderDropdown:({elementWidth:t})=>e(j_,{listboxId:H,listItems:n,onSelectItem:U,onDismiss:K,valueExtractor:f,listExtractor:b,enableSearch:h,searchPlaceholder:p,searchFunction:g,selectedItems:j?[j]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:D,hideNoResultsDisplay:T,noResultsDescription:E,renderCustomCallToAction:O,variant:_,width:t}),onOpen:()=>{P(!0),Q(!0),N(!0)},onClose:e=>{P(!1),Q(!1),"click"!==e&&(N(!1),null==F||F())},onDismiss:()=>{var e;null===(e=Y.current)||void 0===e||e.focus(),P(!1),Q(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:A,rootNode:B})})},OI=_.div`
    overflow: hidden;
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};
    background: ${Fc.bg};
    padding: ${Ac["spacing-16"]};
    min-width: 23rem;

    ${Rc.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${jc["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Rc.MaxWidth.xs} {
        width: calc(100vw - ${jc["xs-margin"]} * 2);
    }

    ${Rc.MaxWidth.xxs} {
        width: calc(100vw - ${jc["xxs-margin"]} * 2);
    }
`,FI=_.div`
    display: flex;
    align-items: baseline;
`,_I=_.div`
    margin: 0 0.5rem;
    color: ${Fc.text};
`,MI=_.div`
    ${e=>"small"===e.$variant?_c["body-md-regular"]:_c["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return M`
                    ${rd(1)}
                `}}
    overflow: hidden;
`,II=_(MI)`
    color: ${Fc["text-subtler"]};
`,AI=r=>{var{alignment:n="left",className:i,disabled:s,dropdownZIndex:l,error:c,histogramSlider:d,id:h,onBlur:g,onChange:p,onChangeEnd:f,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$,dropdownRootNode:C}=r,S=gt(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:k,bins:D=[],renderEmptyView:T,ariaLabels:E}=d,O=D.map((e=>e.minValue)),F=Math.min(...O),[_,M]=a(U()),[I,A]=a(!1),[B,j]=a(!1),[R]=a((()=>Ju.generate())),z=o(null),P=o(null),L=o(null),N=S["data-testid"]||"select-histogram";u((()=>{$!==_&&M(U())}),[$]);const H=e=>{M(e),null==p||p(e)},W=e=>{M(e),null==f||f(e)},Y=()=>{B||I||j(!0)},V=e=>{B&&!I&&z.current&&!z.current.contains(e.relatedTarget)&&(j(!1),null==g||g())};function U(){return null!=$?$:[F,F+k]}const K=e=>w?w(e):t(ad.BodyBL,{children:[v,e,y]});return e(h_,{children:e(Df,{enabled:!x&&!s,isOpen:I,renderElement:()=>e(Pp,{className:i,"data-testid":N,id:h,ref:z,tabIndex:-1,onFocus:Y,onBlur:V,$focused:B,$disabled:s,$readOnly:x,$error:c,children:e(P_,{ref:P,disabled:s,expanded:I,listboxId:R,popupRole:"dialog",readOnly:x,variant:"default",children:e(vf,{ref:L,$disabled:s,children:O&&0!==O.length?t(FI,{children:[K(_[0]),e(_I,{children:"-"}),K(_[1])]}):e(II,{truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:t})=>e(OI,{style:{width:t},children:e(P$,{interval:k,value:_,bins:D,onChange:H,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:T,ariaLabels:E})}),onOpen:()=>{A(!0)},onClose:()=>{A(!1)},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:l,rootNode:C})})},BI=t=>{var{value:r,ariaLabel:n,onChange:i,onChangeEnd:o}=t,s=gt(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=a(d());u((()=>{r!==l[0]&&c(d())}),[r]);function d(){return null!=r?[r]:[0]}return e(I$,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==i||i(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:n?[n]:void 0}))},jI=_.p`
    text-align: right;
    ${_c["body-sm-semibold"]}
    color: ${Fc["text-subtler"]};
`,RI=({value:t,maxLength:n,renderCustomCounter:o})=>{const[s,l]=a("");u((()=>{l(c(`${t||""}`))}),[t,n]);const c=e=>{if(o)return o(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:i.isValidElement(s)?s:e(jI,{"data-testid":"counter-label",children:s})})},zI=_.div`
    display: flex;
    flex-direction: column;
`,PI=_.textarea`
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};
    background: ${Fc.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${Ac["spacing-12"]} ${Ac["spacing-16"]};
    width: 100%;

    ${_c["body-baseline-regular"]}
    color: ${Fc.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${Ic["width-020"]} ${Ic.solid}
            ${Fc["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Fc["text-subtler"]};
    }

    ${e=>e.readOnly?M`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${Fc["border-focus"]};
                }
            `:e.disabled?M`
                background: ${Fc["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${Fc["border-disabled"]};
                }
            `:e.$error?M`
                border-color: ${Fc["border-error"]};

                :focus,
                :active {
                    outline-color: ${Fc["border-error-focus"]};
                }
            `:void 0}
`,LI=i.forwardRef(((t,r)=>{var{value:n,disabled:i,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:h}=t,g=gt(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[p,f]=a(n);u((()=>{f(n)}),[n]);return e(PI,Object.assign({ref:r,disabled:i,value:l?l+(null!=p?p:""):p,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=c?c(r):r;if(f(n),e.target.value=l+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=c?c(null!=t?t:""):t;f(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:o,rows:s,maxLength:l&&h?l.length+h:h},g))})),NI=i.forwardRef(((r,n)=>{var{value:i,disabled:o,rows:s=5,onChange:l,transformValue:c,prefix:d,maxLength:h,renderCustomCounter:g}=r,p=gt(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[f,m]=a(i);u((()=>{m(i)}),[i]);return t(zI,{children:[e(LI,Object.assign({ref:n,disabled:o,value:f,rows:s||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:d,transformValue:c,maxLength:h},p)),h&&e(RI,{value:f,maxLength:h,renderCustomCounter:g})]})})),HI=_.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Ac["spacing-4"]};
`,WI=_.div`
    display: flex;
    flex: 1;
    margin-right: ${Ac["spacing-12"]};
`,YI=_(s$)`
    margin-top: 0;
`,VI=i.forwardRef(((n,i)=>{const{label:o,value:s,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":h,onChange:g,layoutType:p,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:k,prefix:D=""}=n,T=gt(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[E,O]=a(s);u((()=>{O(s)}),[s]);return t(f$,{id:c,label:o,disabled:T.disabled,layoutType:p,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(LI,Object.assign({id:`${c}-base`,"data-testid":h||c,value:E,error:!!l,onChange:e=>{const t=e.target.value;O(t),g&&g(e)},ref:i,prefix:D,transformValue:k},T)),l||T.maxLength?t(HI,{children:[l&&e(WI,{children:e(YI,{"data-testid":d||(c?`${c}-error-message`:"error-message"),children:l})}),T.maxLength&&e(RI,{value:E,maxLength:T.maxLength,renderCustomCounter:T.renderCustomCounter})]}):e(r,{})]})})),UI=_.div`
    position: relative;
`,KI=_(Lp)`
    height: 3rem;
    gap: ${Ac["spacing-8"]};
`,XI=_(Np)`
    display: block;
    width: 100%;
    flex: 1;
`,qI=_.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?M`
                    color: ${Fc["icon-selected-disabled"]};
                `:M`
                    color: ${Fc["icon-disabled-subtle"]};
                `:e.$active?M`
                color: ${Fc["icon-selected"]};
            `:M`
            color: ${Fc["icon-subtle"]};
        `};
`,GI=M`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${_c.Spec["weight-regular"]};
        ${e=>e.$size&&_c[`${e.$size}-regular`]}
        color: ${Fc.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,ZI=_.ol`
    ${GI}

    margin-left: 3rem;

    ${Rc.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return M`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return M`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,QI=_.ul`
    ${GI}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,JI=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,a=gt(t,["size","bulletType","bottomMargin","children"]);return e(QI,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},a,{children:o}))};JI.displayName="TextList.Ul";const eA=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=t,s=gt(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(ZI,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};eA.displayName="TextList.Ol";const tA={Ul:JI,Ol:eA},rA=_.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Fc.bg};

    ${e=>{if(!e.$indicator)return M`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return M`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?M`
                            border-color: ${Fc["border-error"]};
                        `:M`
                            border-color: ${Fc["border-error"]};

                            &:has(${sA}:hover) {
                                background: ${Fc["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?M`
                            border: none;
                            background: ${Fc["bg-selected-disabled"]};
                        `:M`
                            border: none;
                        `:e.$selected?M`
                        border: none;
                        background: ${Fc["bg-selected"]};

                        &:has(${sA}:hover) {
                            background: ${Fc["bg-selected-hover"]};

                            & ${iA} {
                                color: ${Fc["text-selected-hover"]};
                            }

                            & ${mA} {
                                color: ${Fc["icon-selected-hover"]};
                            }
                        }
                    `:M`
                    border: none;

                    &:has(${sA}:hover) {
                        background: ${Fc["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?M`
                            border-color: ${Fc["border-error"]};
                        `:M`
                            border-color: ${Fc["border-error"]};

                            &:has(${sA}:hover) {
                                background: ${Fc["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?M`
                            border-color: ${Fc["border-selected-disabled"]};
                            background: ${Fc["bg-selected-disabled"]};
                        `:M`
                            border-color: ${Fc["border-disabled"]};
                            background: ${Fc["bg-disabled"]};
                        `:e.$selected?M`
                        border-color: ${Fc["border-selected"]};
                        background: ${Fc["bg-selected"]};

                        &:has(${sA}:hover) {
                            background: ${Fc["bg-selected-hover"]};

                            & ${iA} {
                                color: ${Fc["text-selected-hover"]};
                            }

                            & ${mA} {
                                color: ${Fc["icon-selected-hover"]};
                            }
                        }
                    `:M`
                    border-color: ${Fc.border};

                    &:has(${sA}:hover) {
                        background: ${Fc["bg-hover-subtle"]};
                    }
                `}
`,nA=_.input`
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
`,iA=_.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?M`
                    color: ${Fc["text-selected-disabled"]};
                `:M`
                    color: ${Fc["text-disabled"]};
                `:e.$selected?M`
                color: ${Fc["text-selected"]};
            `:M`
            color: ${Fc.text};
        `}
`,oA=_.label`
    ${_c["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Rc.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Rc.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,aA=_.div`
    ${_c["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${_c["body-md-semibold"]}
    }
`,sA=_.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,lA=_.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,cA=_.button`
    color: ${e=>e.$disabled?Fc["text-disabled"]:Fc["text-error"]};
    white-space: nowrap;
    ${_c["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,dA=_.button`
    color: ${e=>e.disabled?Fc["text-disabled"]:Fc["text-primary"]};
    ${_c["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Fc.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,uA=_.div`
    width: 100%;
    color: ${e=>e.$disabled?Fc["text-disabled"]:Fc["text-error"]};
    border: none;
    background: ${Fc.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,hA=_(tu)`
    width: 100%;
    user-select: none;
`,gA=_.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Fc.bg};
    ${Kd({textSize:"body-md"})}

    ${e=>e.$disabled?M`
                color: ${Fc["text-disabled"]};
            `:e.$selected?M`
                color: ${Fc["text-selected"]};
            `:M`
                color: ${Fc.text};
            `}
`,pA=_(ad.BodyMD)`
    color: ${e=>e.$disabled?Fc["text-disabled"]:Fc["text-error"]};
`,fA=_(tA.Ul)`
    color: ${e=>e.$disabled?Fc["text-disabled"]:Fc["text-error"]};
`,mA=_((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=e(r?Xe:Ue,{});break;case"radio":o=e(r?Je:Qe,{});break;case"tick":o=e(qe,{});break;case"cross":o=e(ze,{});break;default:o=null}return e(qI,{className:i,$active:r,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?M`
                    color: ${Fc["icon-selected-disabled"]};
                `:M`
                    color: ${Fc["icon-disabled-subtle"]};
                `:e.$selected?M`
                color: ${Fc["icon-selected"]};
            `:M`
            color: ${Fc["icon-subtle"]};
        `};
`,bA=({type:n="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:d,subLabel:h,disabled:g,error:p,name:f,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:C,useContentWidth:S})=>{const{collapsible:k=!0,errors:D,children:T,initialExpanded:E}=y||{},[O,_]=a(s),[M,I]=a(!!E),A=m((()=>{const e=Array.isArray(D)&&(null==D?void 0:D.length)>0,t=!Array.isArray(D)&&!!D;return e||t}),[D]),[B]=a(Ju.generate()),j=b?`${b}`:`tg-${B}`,R=o(null);u((()=>{_(s)}),[s]),u((()=>{O&&I(null==E||E)}),[O]);const z=()=>{g||I(!M)},P=()=>{g||!w||w()},L=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e(mA,{type:t,active:O,disabled:g,$selected:O,$disabled:g})},N=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(aA,{"data-id":"toggle-sublabel",children:t})},H=n=>t(r,{children:[e(pA,{weight:"semibold",$disabled:g,children:"Error"}),e(fA,{$disabled:g,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${j}-error-list-item-${r}`,children:e(pA,{weight:"semibold",$disabled:g,children:t})},r)))})]});return t(rA,{$selected:O,$disabled:g,className:v,$styleType:l,$error:p,$indicator:i,$useContentWidth:S,id:b,"data-testid":$,children:[t(sA,{id:`${j}-header-container`,$disabled:g,$error:p,$selected:O,$indicator:i,$styleType:l,children:[t(lA,{$addPadding:x,children:[e(nA,{ref:R,name:f,id:`${j}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:e=>{if(!g){if(C)return void C(e);switch(n){case"checkbox":_((e=>!e));break;case"radio":case"yes":case"no":O||_(!0)}}},checked:O}),i&&L(),t(iA,{$selected:O,$disabled:g,children:[e(oA,{htmlFor:`${j}-input`,"data-testid":`${j}-toggle-label`,$maxLines:d,children:c}),h&&N()]})]}),x&&e(cA,{type:"button",$disabled:g,onClick:P,id:`${j}-remove-button`,children:"Remove"})]}),T&&t("div",{children:[(!k||M)&&e(gA,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g,children:T}),k&&!M&&A&&e(uA,{$disabled:g,onClick:z,id:`${j}-error-alert`,children:e(hA,{type:g?"description":"error",className:v,showIcon:!0,children:Array.isArray(D)?H(D):D})}),k&&t(dA,{$paddingTopRequired:!M&&!A,disabled:g,onClick:z,"data-testid":M?"collapse-button":"expand-button",children:[M?"Show less":"Show more",e(M?F:be,{"aria-hidden":!0})]})]})]})},vA=_(Uo.div)`
    position: absolute;
    top: calc(3rem + ${Ac["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Rc.MaxWidth.xxs} {
        max-width: 100%;
    }
`,yA=_.div`
    position: relative;
    width: 100%;
    padding: ${Ac["spacing-8"]} ${Ac["spacing-20"]}
        ${Ac["spacing-24"]} ${Ac["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Fc.bg};
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};
`,xA=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Rc.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,wA=_.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Ac["spacing-16"]};
    gap: ${Ac["spacing-8"]} ${Ac["spacing-16"]};

    ${Rc.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Ac["spacing-32"]};
    }
`,$A=_.div`
    display: flex;
    align-items: center;
    margin-right: ${Ac["spacing-32"]};

    ${Rc.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,CA=_.div`
    display: flex;
    gap: ${Ac["spacing-8"]};

    ${Rc.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Rc.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,SA=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Rc.MaxWidth.xxs} {
        width: 6rem;
    }
`,kA=_(td)`
    width: 5rem;
    padding: ${Ac["spacing-16"]} 0;
    color: ${Fc.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Fc["icon-hover"]};
    }
`,DA=_(ad.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,TA=_(Pp)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Rc.MaxWidth.xxs} {
        width: 100%;
    }
`,EA=_(Np)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,OA=_(bA)`
    min-width: 5rem;
    flex: 1;
`,FA=_(Nd.Small)`
    width: 7rem;

    ${Rc.MaxWidth.sm} {
        flex: 1;
    }

    ${Rc.MaxWidth.xxs} {
        width: 100%;
    }
`;var _A,MA,IA;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(_A||(_A={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(MA||(MA={})),function(e){e.AM="am",e.PM="pm"}(IA||(IA={}));const AA=({id:r,value:n,show:i,format:s,onChange:l,onCancel:c})=>{var d;const h=Zg.getTimeValues(s,n),[g,f]=a(h.hour),[m,b]=a(h.minute),[v,y]=a(h.period),x=o(null),w=o(null),$=hr();u((()=>{if(i&&x.current&&x.current.focus(),i){const{hour:e,minute:t,period:r}=Zg.getTimeValues(s,n);f(e),b(t),y(r)}}),[i,n,s]),u((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=p((e=>{switch(e.currentTarget.name){case _A.MINUTE_UP:b(Zg.updateMinutes(m,"add"));break;case _A.MINUTE_DOWN:b(Zg.updateMinutes(m,"minus"));break;case _A.HOUR_UP:f(Zg.updateHours(g,"add"));break;case _A.HOUR_DOWN:f(Zg.updateHours(g,"minus"))}}),[g,m]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case MA.HOUR:t.length<=2&&f(t);break;case MA.MINUTE:t.length<=2&&b(t)}},T=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case MA.HOUR:{const r=t>23||t<0?h.hour:Zg.convertHourTo12HourFormat(e.target.value);f(r);break}case MA.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(eh.padValue(r));break}}},E=e=>{switch(e.target.name){case IA.AM:y(Gg.AM);break;case IA.PM:y(Gg.PM)}},O=e=>r?`${r}-${e}`:e,_=Eo({opacity:i?1:0,height:i?(null!==(d=$.height)&&void 0!==d?d:0)+32+2:0});return e(vA,{"data-testid":"animated-dropdown-wrapper",style:_,children:t(yA,{ref:$.ref,"data-testid":O("timepicker-dropdown"),inert:i?void 0:"",children:[t(xA,{children:[t($A,{children:[t(SA,{children:[e(kA,{"aria-label":"increase hour",name:_A.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":O("hour-increment-button"),children:e(F,{})}),e(TA,{children:e(EA,{"aria-label":"hour",type:"number",name:MA.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:k,onChange:D,onBlur:T,min:1,max:12,placeholder:"HH","data-testid":O("hour-input")})}),e(kA,{"aria-label":"decrease hour",name:_A.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":O("hour-decrement-button"),children:e(be,{})})]}),e(DA,{children:":"}),t(SA,{children:[e(kA,{"aria-label":"increase minute",name:_A.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":O("minute-increment-button"),children:e(F,{})}),e(TA,{children:e(EA,{"aria-label":"minute",type:"number",name:MA.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:D,onBlur:T,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":O("minute-input")})}),e(kA,{"aria-label":"decrease minute",name:_A.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":O("minute-decrement-button"),children:e(be,{})})]})]}),t(CA,{children:[e(OA,{checked:v===Gg.AM,name:IA.AM,type:"radio",onChange:E,"data-testid":O("am-toggle"),"aria-label":"AM",children:"AM"}),e(OA,{checked:v===Gg.PM,name:IA.PM,type:"radio",onChange:E,"data-testid":O("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(wA,{children:[e(FA,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":O("cancel-button"),children:"Cancel"}),e(FA,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?Zg.convertTo24HourFormat({hour:g,minute:m,period:v}):`${g}:${m}${v}`,l(e)},disabled:""===g||""===m,"data-testid":O("confirm-button"),children:"Done"})]})]})})},BA=r=>{var{id:n,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:h,onFocus:g,onBlur:p}=r,f=gt(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=a(!1),[v,y]=a(!1),[x,w]=a(""),[$,C]=a(""),S=o(null);u((()=>{l&&(w(l.start),C(l.end))}),[l]),rh("mousedown",(function(e){i||E(e)}),"document"),rh("keyup",(function(e){if("Tab"===e.code)E(e)}),"document");const k=()=>{T()},D=()=>{m||v||g&&g()},T=()=>{b(!1),y(!1),p&&p()},E=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&T()};return e(UI,Object.assign({ref:S,id:n},f,{children:t(KI,{$disabled:i,$error:s,$readOnly:d,children:[t(qf,{error:s,currentActive:m?"start":v?"end":"none",children:[e(XI,{onFocus:()=>{i||d||m||(y(!1),b(!0),D())},readOnly:!0,placeholder:"From",value:Zg.formatDisplayValue(x,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(XI,{onFocus:()=>{i||d||v||(b(!1),y(!0),D())},readOnly:!0,placeholder:"To",value:Zg.formatDisplayValue($,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(AA,{id:n,show:m,value:x,format:c,onCancel:k,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),e(AA,{id:n,show:v,value:$,format:c,onCancel:k,onChange:e=>{y(!1),C(e);h&&h({start:x,end:e}),""==x?b(!0):p&&p()}})]})}))},jA=_(Lp)`
    height: 3rem;
    gap: ${Ac["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Ac["spacing-20"]});
`,RA=r=>{var{id:n,disabled:i=!1,error:s,value:l,format:c="12hr",readOnly:d,onChange:h,onFocus:g,onBlur:f,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=gt(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=a((()=>Ju.generate())),[S,k]=a(null),[D,T]=a(!1),[E,O]=a(""),[F,_]=a(""),[M,I]=a(""),[A,B]=a(""),[j,R]=a(""),z=o(null),P=o(null),L=o(null),N=m((()=>Zg.generateTimings(w,c,y,x)),[w,c,y,x]),H=m((()=>{if(""===A)return N;const e=Zg.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=p((e=>Zg.parseInput(e,c)),[c]);u((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";_(r),I(n),B(r),R(n)}}),[l,W]),u((()=>{if(s)return void T(!1);const e=W(F),t=W(M);if(void 0===e)O("Invalid start time");else if(void 0===t)O("Invalid end time");else{if(!(""!==e&&""!==t&&Zg.to24Hour(t)<Zg.to24Hour(e)))return O(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||T(!0));O("End time must be after start time")}T(!1)}),[F,M,W,s]);const Y=e=>{i||d||(S||D||null==g||g(),k(e),T(!0))},V=e=>{var t;i||d||(k(e),T(!0),null===(t=("start"===e?P:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(F):"end"===S&&(D&&X(M),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":q(F,M,{})}}const K=e=>{q(e,M,{goToNextInput:!0})},X=e=>{q(F,e,{triggerOnBlur:!0})},q=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,o,a;const s=null!==(i=W(e))&&void 0!==i?i:A,l=null!==(o=W(t))&&void 0!==o?o:j;_(s),I(l);s===A&&l===j||null==h||h({start:s,end:l}),r&&void 0!==W(e)&&(k("end"),null===(a=L.current)||void 0===a||a.select()),n&&(k(null),T(!1),null==f||f()),B(s),R(l)},G=e=>{e.stopPropagation(),_(""),I(""),B(""),R("");null==h||h({start:"",end:""}),k(null),T(!1)},Z=e=>{z.current&&!z.current.contains(e.relatedTarget)&&S&&!D&&q(F,M,{triggerOnBlur:!0})},Q=()=>{if(!d&&!i&&((null==F?void 0:F.length)>0||(null==M?void 0:M.length)>0))return e(kI,{onClick:G,type:"button","aria-label":"Clear",children:e(H$,{"aria-hidden":!0})})};return t(UI,Object.assign({id:n},$,{children:[e(h_,{children:e(Df,{enabled:!d&&!i,isOpen:D,renderElement:()=>t(jA,{ref:z,$disabled:i,$error:s||!!E,$readOnly:d,onBlur:Z,children:[t(qf,{error:s||!!E,currentActive:null===S?"none":S,children:[e(XI,{ref:P,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>_(e.target.value),value:F,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"}),e(XI,{ref:L,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>I(e.target.value),value:M,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"})]}),Q()]}),renderDropdown:()=>{if(D)return e(j_,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[F],disableItemFocus:!0,topScrollItem:Zg.findClosestFlooredTime(W(F),N),listboxId:C}:{listItems:H,onSelectItem:X,selectedItems:[M],disableItemFocus:!0,topScrollItem:Zg.findClosestFlooredTime(W(M),H),listboxId:C})},onClose:e=>{"outside-press"===e?(k(null),T(!1),null==f||f()):q(F,M,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:L).current)||void 0===e||e.focus(),T(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!s&&E&&e(s$,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:E})]}))},zA=t=>{var{variant:r="dial"}=t,n=gt(t,["variant"]);return e("combobox"===r?RA:BA,Object.assign({},n))};_.div`
    position: relative;
`;const PA=_(Np)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,LA=r=>{var{id:n,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:g,onBlur:f}=r,m=gt(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=a(!1),y=o(null);rh("mousedown",(function(e){i||s||$(e)}),"document"),rh("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{i||s||b||(v(!0),g&&g())};const w=()=>{v(!1),f&&f()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=p((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(Lp,Object.assign({ref:y,id:n,$readOnly:s,$disabled:i,$error:l},m,{children:[e(PA,{onFocus:x,focused:b,readOnly:!0,placeholder:d||C(),value:Zg.formatDisplayValue(c,u),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(AA,{id:n,show:b,value:c,format:u,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))},NA=_(iT)`
    margin-right: 0.5rem;
`,HA=_(V$)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,WA=_(HA)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,YA=_(ad.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return M`
                color: ${Fc["text-disabled"]};
            `}}
`,VA=_.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,UA=_(ad.BodyBL)``,KA=n=>{var{disabled:i,error:s,value:l,onChange:c,onBlur:d,onChangeRaw:h,onBlurRaw:g,readOnly:p,placeholder:f="00-8888",autoComplete:m}=n,b=gt(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=a(""),[x,w]=a(""),[$,C]=a("none"),S=o(null),k=o(null),D=o(null),T=o(v),E=o(x),O=o($),F=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),_=oh({ref:k,formatter:F}),M=oh({ref:D,formatter:F}),I=e=>{T.current=e,y(e)},A=e=>{E.current=e,w(e)},B=e=>{O.current=e,C(e)};u((()=>{"floor"===$&&3===v.length&&D.current&&D.current.focus()}),[v]),u((()=>{N(l)}),[l]);const j=e=>{B(e.target.name),e.target.select()},R=e=>{const t=e.target.name,r=e.target.value,n=L(r);"floor"===t?(I(n),n!==v&&H(n,t)):"unit"===t&&(A(n),n!==x&&H(n,t))},z=e=>{const t=e.target.name;if("floor"===t){const e=_();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),I(r),H(r,t)}else if("unit"===t){const e=M();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),A(r),H(r,t)}},P=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=k.current)||void 0===t||t.focus())},L=e=>/^[0-9]$/.test(e)?eh.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==XA)if(void 0===e||0===e.length)I(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];I("floor"===$?e:L(e)),A("unit"===$?r:L(r))}}},H=(e,t)=>{if(!c&&!h)return;const r={floor:T.current,unit:E.current};if(r[t]=e,c){const e=Y(r);c(e)}h&&h([r.floor,r.unit])},W=()=>{if(!d&&!g)return;const e={floor:L(T.current),unit:L(E.current)};if(d){const t=Y(e);d(t)}g&&g([e.floor,e.unit])},Y=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":XA},V=e=>e.split("-");return t(Lp,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&k.current&&k.current.focus()},$disabled:i,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==O.current&&(B("none"),W())},children:[e(NA,{"data-testid":"addon",$disabled:i,$readOnly:p,children:"#"}),p&&l?(r=>{const n=r.split("-");return t(VA,{children:[e(UA,{children:n[0]}),e(YA,{children:"-"}),e(UA,{children:n[1]})]})})(l):t(r,{children:[e(HA,{name:"floor",maxLength:3,value:v,ref:k,onFocus:j,onBlur:R,onChange:z,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||p?V(f)[0]:"",autoComplete:m,styleType:"no-border"}),e(YA,{$inactive:0===v.length,children:"-"}),e(WA,{name:"unit",maxLength:5,value:x,ref:D,onFocus:j,onBlur:R,onChange:z,onKeyDown:P,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||p?V(f)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},XA="Invalid unit number",qA={DateInput:t=>{var{label:r,errorMessage:n,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(Rf,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(em,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},ESignature:t=>{const{label:r,errorMessage:n,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(Jm,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(P$,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},Input:U$,InputGroup:sT,MaskedInput:CT,Label:c$,MultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=gt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(JM,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(nI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(rI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=gt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(EI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(AI,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||i,id:`${i}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(BI,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(I$,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=gt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(TI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s},y))})},Textarea:VI,Timepicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(LA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(zA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:i}=t,o=gt(t,["id","data-error-testid","children"]);return e(f$,Object.assign({id:r,"data-error-testid":n},o,{children:i}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(KA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(xI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=gt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(f$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(CI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})}},GA=_.li`
    display: flex;
    flex-direction: column;
    padding: ${Ac["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    }
`,ZA=_.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Ac["spacing-16"]};
    width: 100%;
`,QA=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,JA=_.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${Ac["spacing-16"]};

    ${Rc.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,eB=_(ad.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${Ac["spacing-16"]};

    ${Rc.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${Ac["spacing-8"]};
    }
`,tB=_(ad.BodyMD)``,rB=_.div`
    display: flex;
    ${Rc.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return M`
                margin-left: calc(
                    96px + ${Ac["spacing-32"]}
                ); // thumbnail width + right margin

                ${Rc.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,nB=_(Nd.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${Ac["spacing-16"]};
    }

    ${Rc.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${Ac["spacing-16"]};
        }
    }
`,iB=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:i,onReplaceClick:o})=>t(oB,{"data-testid":n,children:[e(aB,{"data-testid":n?`${n}-image`:void 0,src:r}),i&&e(sB,{type:"button",onClick:()=>{o&&o()},children:"Replace"})]}),oB=_.div`
    width: auto;
    margin-right: ${Ac["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,aB=_(Sb)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${Bc.sm};
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    object-fit: cover;

    ${Rc.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,sB=_.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${Ac["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${_c["body-md-semibold"]}
    color: ${Fc["text-primary"]};

    :hover {
        color: ${Fc["text-hover"]};
    }
`,lB=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:i,onSave:s,onCancel:l,onBlur:c})=>{const{id:d,name:h,size:g,truncateText:p=!0,thumbnailImageDataUrl:f}=r,[m,b]=a(),[v,y]=a(""),x=o(null),w=o(null);u((()=>{b($(h))}),[i]),u((()=>{y(r.description||"")}),[r]);const $=e=>{if(!p)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return eh.truncateOneLine(e,t,t/2,t/2/8,16)};return t(GA,{"data-testid":`${d}-edit-display`,children:[t(ZA,{children:[f&&e(iB,{thumbnailImageDataUrl:f}),t(QA,{children:[t(JA,{ref:w,children:[e(eB,{weight:"semibold",children:m}),e(tB,{children:Cb.formatFileSizeDisplay(g)})]}),e(qA.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{c(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(rB,{$thumbnail:!!f,children:[e(nB,{"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&s(x.current.value.trim())},children:"Save"}),e(nB,{type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:l,children:"Cancel"})]})]})},cB=_.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Ac["spacing-16"]};
    }

    ${e=>e.$disabled&&"none"===e.$focusType?M`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?M`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?M`
                :hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,dB=_(rt)`
    margin-right: ${Ac["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Fc.icon};

    ${e=>e.$active?M`
                color: ${Fc["icon-primary"]};
            `:e.$disabled?M`
                color: ${Fc["icon-disabled"]};
            `:void 0};
`,uB=_.div`
    background: ${Fc["bg-primary-subtlest"]};
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.sm};
    padding: ${Ac["spacing-16"]} ${Ac["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${Rc.MaxWidth.sm} {
        padding: ${Ac["spacing-16"]};
    }

    ${e=>e.$focused?M`
                border-color: ${Fc["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${Fc["border-focus"]} r g b / 50%);
            `:e.$disabled?M`
                border-color: ${Fc["border-disabled"]};
            `:e.$error?M`
                background: ${Fc["bg-error"]};
                border-color: ${Fc["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return M`
                ${Rc.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,hB=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Rc.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return M`
                ${Rc.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,gB=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,pB=_.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Rc.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,fB=_.div`
    display: flex;
    width: 5rem;
    margin-left: ${Ac["spacing-8"]};
    justify-content: flex-end;

    ${Rc.MaxWidth.sm} {
        ${e=>e.$hideInMobile?M`
                    display: none;
                    visibility: hidden;
                `:M`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${Ac["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,mB=_(ad.BodyMD)``,bB=_(mB)`
    margin-top: ${Ac["spacing-4"]};
`,vB=_(ad.BodySM)`
    color: ${Fc["text-error"]};
`,yB=_(vB)`
    margin-top: ${Ac["spacing-4"]};
    ${Rc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,xB=_(vB)`
    display: none;
    visibility: hidden;
    ${Rc.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${Ac["spacing-8"]};
    }
`,wB=_.div`
    width: 6rem;
    margin-left: ${Ac["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${Rc.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?M`
                    margin-left: 0;
                    margin-top: ${Ac["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?M`
                    margin-left: 0;
                    margin-top: ${Ac["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,$B=_(Pf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Ac["spacing-16"]};
    }
`,CB=_(td)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Fc.icon};
    }
`,SB=w((({fileItem:n,editable:i,sortable:s,wrapperWidth:l,disabled:c,readOnly:d,onDelete:h,onEditClick:g})=>{const{id:p,name:m,size:b,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=n,[C,S]=a(),{activeId:k}=f(Hb),{attributes:D,listeners:T,setNodeRef:E,transform:O,transition:F}=Lw({id:p}),_=o(null),M={transform:Ly.Translate.toString(O),transition:F},I=Object.assign(Object.assign({style:M},D),T),A=y<1,B=Cb.formatFileSizeDisplay(b),j=k?k===p?"self":"others":"none";u((()=>{S(L(m))}),[l]);const R=()=>{h()},z=()=>{g&&g()},P=e=>{s&&e.stopPropagation()},L=e=>{if(!$)return e;const t=_&&_.current?_.current.getBoundingClientRect().width:0;return eh.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>c||!!k,H=()=>!!s&&!d,W=()=>t(r,{children:[e(mB,{weight:v?"semibold":"regular",children:C}),v&&e(bB,{children:v})]});return t(cB,Object.assign({id:p,ref:E,$sortable:H(),$disabled:N(),$focusType:j},H()?I:{},{children:[H()&&e(dB,{"data-testid":`${p}-drag-handle`,$disabled:N(),$active:"self"===j}),t(uB,{$focused:"self"===j,$error:!!x,$loading:A,$disabled:N(),$editable:i,children:[(()=>{let n;return n=x?t(r,{children:[t(gB,{ref:_,children:[W(),x&&e(yB,{weight:"semibold",children:x})]}),e(fB,{children:e(mB,{children:B})}),x&&e(xB,{weight:"semibold",children:x})]}):w?(n=>t(r,{children:[e(iB,{thumbnailImageDataUrl:n,"data-testid":`${p}-thumbnail`}),t(pB,{children:[e(gB,{ref:_,children:W()}),e(fB,{children:e(mB,{children:B})})]})]}))(w):t(r,{children:[e(gB,{ref:_,children:W()}),e(fB,{$hideInMobile:A,children:e(mB,{children:B})})]}),e(hB,{$hasThumbnail:!!w,children:n})})(),!d&&(()=>{let n;return n=x?e(CB,{onClick:R,"data-testid":`${p}-error-delete-button`,"aria-label":`delete-${m}`,children:e(ze,{"aria-hidden":!0})}):A?e(km,{progress:y,"data-testid":`${p}-progress-bar`}):t(r,{children:[i&&e($B,{"data-testid":`${p}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${m}`,disabled:N(),onClick:z,onKeyDown:P,children:e(tt,{"aria-hidden":!0})},"edit"),e($B,{"data-testid":`${p}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${m}`,disabled:N(),onClick:R,onKeyDown:P,children:e(et,{"aria-hidden":!0})},"delete")]}),e(wB,{$editable:i,$error:!!x,$loading:A,children:n})})()]})]}))})),kB=_.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":Ac["spacing-32"]};
`,DB=_.li`
    border-top: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};

    :not(:last-child) {
        margin-bottom: ${Ac["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${Ac["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,TB=({fileItems:t,editableFileItems:r,fileDescriptionMaxLength:n,sortable:i,disabled:s,readOnly:l,onItemUpdate:c,onItemDelete:d,onSort:h})=>{const[g,p]=a({}),{setActiveId:b}=f(Hb),{width:v=0,ref:y}=hr(),x=o({}),w=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m((()=>[...t].filter((e=>null!=e))),[...t])}(Qy(Vw,{activationConstraint:{distance:8}}),Qy(Vx,{activationConstraint:{delay:150,tolerance:5}}),Qy(Bx,{coordinateGetter:Ww})),$=e=>{delete x.current[e]};u((()=>{p(M(t))}),[t]);const C=e=>t=>{I(e.id,"display"),$(e.id);const r=Object.assign(Object.assign({},e),{description:t});c(r)},S=e=>t=>{x.current[e.id]=t},k=e=>()=>{e.description&&0!==e.description.length?I(e.id,"display"):d(e),$(e.id)},D=e=>()=>{I(e.id,"edit")},T=e=>()=>{d(e)},E=e=>{if(h&&t){const{active:r,over:n}=e;if(n&&r.id!==n.id){const e=t.findIndex((e=>e.id===r.id)),i=t.findIndex((e=>e.id===n.id)),o=kw(t,e,i);h(o)}}b(void 0)},O=e=>{const{active:t}=e;b(t.id)},F=e=>r&&Cb.isSupportedImageType(e.type),_=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&F(e)&&!e.description,M=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":g[r.id]?t[r.id]=g[r.id]:t[r.id]=_(r)?"edit":"display";return t},I=(e,t)=>{p((r=>Object.assign(Object.assign({},r),{[e]:t})))},A=()=>t&&t.length>1&&i&&Object.values(g).every((e=>"display"===e)),B=()=>{const r=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(t,g);return 0===r.length?null:r.map(((t,r)=>Array.isArray(t)?((t,r)=>{const i=t.map((t=>{const r=Object.assign({},t);return void 0!==x.current[t.id]&&(r.description=x.current[t.id]),e(lB,{fileItem:r,wrapperWidth:v,fileDescriptionMaxLength:n,onSave:C(t),onCancel:k(t),onBlur:S(t)},t.id)}));return e(DB,{children:e("ul",{children:i})},`editable-${r}`)})(t,r):e(SB,{fileItem:t,editable:F(t),wrapperWidth:v,sortable:A(),disabled:s,readOnly:l,onDelete:T(t),onEditClick:D(t)},t.id)))};return t&&0!==t.length?s||l||!A()?e(kB,{$readOnly:l,ref:y,children:B()}):e(xw,{sensors:w,onDragEnd:E,onDragStart:O,children:e(Iw,{items:t,strategy:Fw,children:e(kB,{$readOnly:l,ref:y,children:B()})})}):null},EB=_.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Ac["spacing-32"]};
    gap: ${Ac["spacing-8"]};
`,OB=_(ad.BodyBL)``,FB=_.div`
    color: ${Fc.text};
    ${Kd({textSize:"body-baseline"})}
`,_B=_(ad.BodyMD)`
    color: ${Fc["text-subtler"]};
`,MB=_.div`
    color: ${Fc.text};
    ${Kd({textSize:"body-md"})}
`,IB=_(tu)`
    margin-bottom: ${Ac["spacing-32"]};
`,AB=_.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${Rc.MaxWidth.sm} {
        align-items: flex-start;
    }
`,BB=_(Nd.Small)`
    width: 10rem;

    ${Rc.MaxWidth.sm} {
        width: 100%;
    }
`,jB=_.label`
    ${_c["body-md-semibold"]}
    color: ${Fc["text-subtler"]};
    margin-top: ${Ac["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${Rc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,RB=_(tu)`
    margin-bottom: ${Ac["spacing-32"]};
`,zB=({styleType:r="bordered",fileItems:n,title:i,description:s,maxFiles:l,warning:c,className:d,name:u,id:h,"data-testid":g,accept:p,capture:f,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:C,onDelete:S,onEdit:k,onSort:D})=>{const T=o(null),[E,O]=a(),F=()=>!(!l||!n)&&n.length>=l;return e(Hb.Provider,{value:{activeId:E,setActiveId:O},children:t(vy,{ref:T,onChange:e=>{!b&&C&&C(e)},id:h?`${h}-dropzone`:"dropzone",accept:p,capture:f,border:"bordered"===r,className:d,"data-testid":g,name:u,multiple:m,disabled:b||F()||$,children:[!(!i&&!s)&&t(EB,{children:[i?e("string"==typeof i?OB:FB,{children:i}):null,s?e("string"==typeof s?_B:MB,{children:s}):null]}),!!c&&e(IB,{type:"warning",children:c}),e(TB,{fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{S&&S(e)},onItemUpdate:e=>{k&&k(e)},onSort:e=>{D&&D(e)}}),w&&e(RB,{type:"error",children:w}),!$&&t(AB,{children:[e(BB,{type:"button",styleType:"secondary",disabled:!!E||b||F(),onClick:e=>{b||(e.preventDefault(),T.current&&T.current.openFileDialog())},children:"Upload files"}),e(jB,{children:"or drop them here"})]})]})})},PB=i.createContext({mode:"default",rootNode:{current:null}});var LB=Xo((function(e){return null==e}));const NB=_.div`
    background-color: ${e=>e.$collapsible?Fc["bg-strong"]:Fc.bg};
    ${Rc.MaxWidth.lg} {
        background-color: ${Fc["bg-strong"]};
    }
`,HB=_.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Fc.border};

    ${Rc.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${Ac["spacing-16"]};
    }
`,WB=_.div`
    display: flex;
    align-items: center;

    background-color: ${Fc.bg};

    ${Rc.MaxWidth.lg} {
        background-color: transparent;
    }
`,YB=_(td)`
    margin: 0 0 0 auto;

    color: ${Fc.icon};
    &:hover {
        color: ${Fc["icon-hover"]};
    }
`,VB=_(be)`
    height: ${_c.Spec["body-size-baseline"]};
    width: ${_c.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Mc["duration-350"]} ${Mc["ease-standard"]};
`,UB=_.p`
    ${_c["heading-xs-semibold"]}
    color: ${Fc.text};

    margin: ${Ac["spacing-24"]} 0 ${Ac["spacing-24"]}
        ${Ac["spacing-20"]};

    ${Rc.MaxWidth.lg} {
        ${_c["body-md-semibold"]}
        color: ${Fc["text-subtle"]};

        margin: ${Ac["spacing-24"]} ${Ac["spacing-20"]} 0
            ${Ac["spacing-20"]};
    }
`,KB=_(Uo.div)`
    overflow: hidden;
`,XB=_.div`
    padding: ${Ac["spacing-24"]} ${Ac["spacing-20"]};
`,qB=_(Uo.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,GB=_(Nd.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Ac["spacing-16"]} 0 0 0;
`,ZB=r=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:l,minimisable:c=!1,minimisedHeight:d,showDivider:h=!0,showMobileDivider:g=!0,title:p,addon:m,children:b}=r,v=gt(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:y,rootNode:x}=f(PB),w="mobile"===y,[$,C]=a(_()),[S,k]=a(c),D=!w&&i,T=hr(),E=hr(),O=Eo({height:$?T.height:0}),F=S?null!=d?d:Math.min(.5*(null!==(n=E.height)&&void 0!==n?n:0),216):E.height;u((()=>{C(_())}),[i,s]);function _(){return!!w||(LB(s)?!i||o:s)}return t(NB,{$collapsible:D,children:[e(HB,{$showDivider:h,$showMobileDivider:g}),(p||D)&&t(WB,{children:[p&&t(UB,{children:[p," ",m&&("popover"===(null==m?void 0:m.type)?e(o$,{addon:m,rootNode:w?x:void 0}):null)]}),D&&e(YB,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!$;LB(s)&&C(e),l&&l(e)},"aria-label":$?"Collapse":"Expand",children:e(VB,{$expanded:$})})]}),e(KB,{"data-testid":"expandable-container","data-expanded":$,style:O,children:e("div",{ref:T.ref,children:t(XB,Object.assign({},v,{children:[e(qB,{"data-testid":"minimisable-container",$height:F,$minimisable:c,children:e("div",{ref:E.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof b?b(y,{minimised:S}):b})})}),c&&t(GB,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{k(!S)},children:["View ",S?"more":"less"]})]}))})})]})};ZB.displayName="Filter.Item";const QB=_(ZB)`
    padding: 0 0 ${Ac["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${Ac["spacing-8"]} ${Ac["spacing-8"]} 0;

        ${Rc.MaxWidth.lg} {
            padding: ${Ac["spacing-16"]} ${Ac["spacing-20"]}
                ${Ac["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${Ac["spacing-8"]} ${Ac["spacing-20"]} 0;
    }
`,JB=_.div`
    display: flex;
    flex-direction: column;

    ${Rc.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${Ac["spacing-16"]};
    }
`,ej=_.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${Ac["spacing-8"]} ${Ac["spacing-12"]};

    cursor: pointer;
    ${_c["body-md-regular"]}
    color: ${Fc.text};
    ${e=>e.$selected&&M`
            color: ${Fc["text-selected"]};
        `}

    ${Rc.MaxWidth.lg} {
        padding: ${Ac["spacing-8"]};
    }
`,tj=_(Eg)`
    flex-shrink: 0;
    margin-right: ${Ac["spacing-8"]};
`,rj=_(bA)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,nj=_(Nd.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Ac["spacing-16"]} 0 ${Ac["spacing-8"]}
        ${Ac["spacing-12"]};

    ${Rc.MaxWidth.lg} {
        margin: 0 0 ${Ac["spacing-16"]} 0;
    }
`,ij=n=>{var{selectedOptions:i,options:s,onSelect:l,labelExtractor:c,valueExtractor:d,useToggleContentWidth:h}=n,g=gt(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:m}=f(PB),[b,v]=a(i||[]),[y,x]=a(),[w,$]=a(s.length),C=o(null),S=o(null),k=e=>()=>{const t=[...b],r=b.findIndex((t=>E(t)===E(e)));r>=0?t.splice(r,1):t.push(e),v(t),null==l||l(t)},D=()=>{const e=b.length?[]:s;v(e),null==l||l(e)},T=e=>{var t;return c?c(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},E=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},O=p((()=>{if(!C.current)return void x(void 0);const e=Array.from(C.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}$(t),x(r>2?n-8:void 0)}),[]);u((()=>{i!==b&&v(i||[])}),[i]),u((()=>{"default"===m?(()=>{const e=S.current?S.current.offsetTop+S.current.clientHeight:void 0;x(e)})():O()}),[s]),hr({handleWidth:"mobile"===m,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:C,onResize:O});return e(QB,Object.assign({minimisable:s.length>5,minimisedHeight:y},g,{children:(n,{minimised:i})=>t(r,{children:[s.length<3?null:e(nj,{styleType:"link",type:"button",onClick:D,children:b.length?"Clear all":"Select all"}),e(JB,{role:"group","aria-label":g.title,ref:C,children:s.map(((r,o)=>"default"===n?((r,n,i)=>{const o=T(r),a=E(r),s=!!b.find((e=>E(e)===a));return t(ej,{$visible:!i||n<5,$selected:s,ref:4===n?S:void 0,children:[e(tj,{displaySize:"small",checked:s,onChange:k(r)}),o]},a)})(r,o,i):((t,r,n)=>{const i=T(t),o=E(t),a=!!b.find((e=>E(e)===o));return e(rj,{type:"checkbox",checked:a,$visible:!n||!!y&&r<=w,onChange:k(t),useContentWidth:h,children:i},o)})(r,o,i)))})]})}))};ij.displayName="Filter.Checkbox";const oj=_.div`
    background-color: ${Fc.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,aj=_.div`
    background-color: ${Fc.bg};
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-radius: ${Bc.md};
    overflow: hidden;
    width: 100%;
`,sj=_.div`
    background-color: ${Fc["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,lj=_.div`
    background-color: ${Fc.bg};
    height: 100%;
    width: 100%;
`,cj=_.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,dj=_.div`
    display: flex;
    align-items: center;

    background-color: ${Fc.bg};

    ${Rc.MaxWidth.lg} {
        border-bottom: ${Ic["width-010"]} ${Ic.solid}
            ${Fc.border};
    }
`,uj=_(ad.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${Ac["spacing-24"]} 0 ${Ac["spacing-24"]}
        ${Ac["spacing-20"]};

    ${Rc.MaxWidth.lg} {
        text-align: center;
        margin: ${Ac["spacing-24"]} 0;
    }
`,hj=_(td)`
    padding: ${Ac["spacing-24"]} ${Ac["spacing-20"]};
    margin-right: auto;
    color: ${Fc.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Fc["icon-hover"]};
    }
`,gj=_(Nd.Small)`
    background-color: transparent;
    padding-right: ${Ac["spacing-20"]};
    padding-left: ${Ac["spacing-20"]};
    height: 100%;

    ${Rc.MaxWidth.lg} {
        padding: ${Ac["spacing-24"]} ${Ac["spacing-20"]};
    }
`,pj=_(yh.Default)`
    width: 100%;
`,fj=_.div`
    padding: ${Ac["spacing-24"]} ${Ac["spacing-20"]};
    background-color: ${Fc.bg};
    border-top: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
`,mj=_(Nd.Default)`
    width: 100%;
`,bj=({onDismiss:r,onDone:n,children:i})=>t(oj,{children:[e(hj,{onClick:r,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(ye,{})}),e(cj,{children:i}),e(fj,{children:e(mj,{onClick:n,type:"button",children:"Done"})})]});bj.displayName="Filter.Page";const vj=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:d,onDismiss:h,onDone:g,children:p}=n,f=gt(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[m,b]=a(!1),v=o(null),y=o(null),x=j(),w=jc["lg-max"]({theme:x}),$=bu.useMediaQuery({maxWidth:w});u((()=>{$||S()}),[$]);const C=()=>{b(!0)},S=()=>{b(!1),h&&h()},k=()=>{b(!1),g&&g()},D=()=>{d&&d()},T=e=>"function"==typeof p?p(e):p,E=r=>t(dj,{children:["mobile"===r&&e(hj,{onClick:S,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(te,{})}),e(uj,{weight:"semibold",children:l}),e(gj,{styleType:"link",type:"button",onClick:D,disabled:c,children:"Clear"})]});return e("div",Object.assign({},f,{children:e(PB.Provider,$?{value:{mode:"mobile",rootNode:v},children:t(r,{children:[e(pj,{"data-testid":"filter-show-button",styleType:s,onClick:C,type:"button",icon:e(re,{}),children:i}),e(mm,{show:m,disableTransition:!0,children:e(lj,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:t(sj,{ref:v,children:[E("mobile"),e(cj,{children:T("mobile")}),e(fj,{children:e(mj,{onClick:k,type:"button",children:"Done"})})]})})})]})}:{value:{mode:"default",rootNode:y},children:t(aj,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:y,children:[E("default"),T("default")]})})}))};vj.displayName="Filter";const yj=Object.assign(vj,{Item:ZB,Page:bj,Checkbox:ij}),xj=_.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Rc.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,wj=_(ad.BodyMD)`
    margin-bottom: ${Ac["spacing-16"]};
`,$j=_.div`
    display: flex;
    align-items: flex-start;
`,Cj=_.a`
    &:not(:last-child) {
        margin-right: ${Ac["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Rc.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${Ac["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,Sj=()=>t(xj,{"data-testid":"download-app-section",children:[e(wj,{weight:"semibold",children:"Download the app"}),t($j,{children:[e(Cj,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(Cj,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]}),kj={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},Dj={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},Tj={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var Ej;!function(e){e.getCopyrightInfo=(e=new Date,r)=>{const n=t(r);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${Iu(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const r=(e=>{switch(e){case"bookingsg":return Dj;case"mylegacy":return Tj;default:return kj}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},r.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},r.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},r.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(Ej||(Ej={}));const Oj=_.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?M`
                padding: 0 ${jc["xxl-margin"]}px;
            `:M`
                padding: 0 ${jc["xxl-margin"]}px;
                max-width: 1440px;

                ${Rc.MaxWidth.xl} {
                    padding: 0 ${jc["xl-margin"]}px;
                }

                ${Rc.MaxWidth.lg} {
                    padding: 0 ${jc["lg-margin"]}px;
                }

                ${Rc.MaxWidth.md} {
                    padding: 0 ${jc["md-margin"]}px;
                }

                ${Rc.MaxWidth.sm} {
                    padding: 0 ${jc["sm-margin"]}px;
                }

                ${Rc.MaxWidth.xs} {
                    padding: 0 ${jc["xs-margin"]}px;
                }

                ${Rc.MaxWidth.xxs} {
                    padding: 0 ${jc["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return M`
                    column-gap: ${jc["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${jc["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${Rc.MaxWidth.xl} {
                        column-gap: ${jc["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${jc["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Rc.MaxWidth.lg} {
                        column-gap: ${jc["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${jc["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Rc.MaxWidth.md} {
                        column-gap: ${jc["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${jc["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Rc.MaxWidth.sm} {
                        column-gap: ${jc["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${jc["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Rc.MaxWidth.xs} {
                        column-gap: ${jc["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${jc["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Rc.MaxWidth.xxs} {
                        column-gap: ${jc["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${jc["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return M`
                    display: flex;
                    flex-direction: column;
                `;default:return M`
                    display: flex;
                `}}}
`,Fj=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=gt(t,["children","data-testid","type","stretch"]);return e(Oj,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),_j=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=gt(t,["children","data-testid","stretch"]);return e(Mj,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),Mj=_.section`
    display: block;
    position: relative;
`,Ij=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=gt(t,["children","data-testid","className","type","stretch"]);return e(_j,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e(Fj,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),Aj={Section:_j,Container:Fj,Content:Ij,ColDiv:rm},Bj=_.footer`
    background: ${Fc["bg-strong"]};
`,jj=_(ad.LinkSM)`
    color: ${Fc.text};
`,Rj=_(hm)`
    width: 100%;
`,zj=_(Aj.Content)`
    padding: ${Ac["spacing-64"]} 0;

    ${Rc.MaxWidth.lg} {
        padding: ${Ac["spacing-32"]} 0;
    }
`,Pj=_.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${Rc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${Ac["spacing-32"]};
    }

    ${Rc.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${Ac["spacing-32"]};
    }
`,Lj=_.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${Ac["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${Rc.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${Rc.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,Nj=_.div`
    grid-column: 13 / span 6;

    ${Rc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${Ac["spacing-32"]};
    }

    ${Rc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,Hj=_(Aj.Content)`
    padding: ${Ac["spacing-20"]} 0;

    ${Rc.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${Ac["spacing-16"]} 0;
    }
`,Wj=_.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${Ac["spacing-16"]};
    }

    ${Rc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Rc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,Yj=_(Wj)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Rc.MaxWidth.lg} {
        margin-top: ${Ac["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${Rc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,Vj=_(ad.LinkXS)`
    color: ${Fc.text};
    &:not(:last-child) {
        margin-right: ${Ac["spacing-16"]};
    }

    svg {
        color: ${Fc.icon};
    }

    &:hover {
        color: ${Fc["text-subtler"]};
        svg {
            color: ${Fc["icon-subtle"]};
        }
    }

    ${Rc.MaxWidth.lg} {
        margin-bottom: ${Ac["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Rc.MaxWidth.lg} {
        margin-bottom: ${Ac["spacing-8"]};
    }
`,Uj=n=>{var{children:i,links:o,lastUpdated:a,disclaimerLinks:s,showDownloadAddon:l,logoSrc:c,copyrightInfo:d,onFooterLinkClick:u,layout:h="default"}=n,g=gt(n,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const p="stretch"===h,f=j(),m=t=>t.map(((t,r)=>{const n=gt(t,["data-options"]);return e("li",{children:e(jj,Object.assign({},n,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):u&&(e.preventDefault(),u(t))})(e,t)}))},r)}));return t(Bj,Object.assign({},g,{children:[(()=>{let n=null;return i||((o||l)&&(n=t(r,{children:[e(Pj,{"data-testid":"logo-section",children:e("img",{src:c||Ej.getFooterLogo(null==f?void 0:f.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==o?void 0:o[0])&&e(Lj,{"data-testid":"link-col-1",children:m(o[0])},"link-col-1"),(null==o?void 0:o[1])&&e(Lj,{"data-testid":"link-col-2",children:m(o[1])},"link-col-2"),l&&e(Nj,{children:e(Sj,{})})]})),n?t(r,{children:[e(zj,{type:"grid",stretch:p,children:n}),e(Rj,{})]}):null)})(),t(Hj,{type:"grid",stretch:p,children:[e(Wj,{children:(()=>{const t=Ej.getDisclaimerLinks(null==f?void 0:f.resourceScheme,s);return Object.keys(t).map((r=>e(Vj,Object.assign({},t[r]),r)))})()},"disclaimer"),e(Yj,{children:e(ad.BodyXS,{"data-testid":"copyright-text",children:d||t(r,{children:["©"," ",Ej.getCopyrightInfo(a,null==f?void 0:f.resourceScheme)]})})},"copyright")]})]}))};var Kj=function(e,t){return Number(e.toFixed(t))},Xj=function(e,t,r){r&&"function"==typeof r&&r(e,t)},qj={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},Gj=function(e){"number"==typeof e&&cancelAnimationFrame(e)},Zj=function(e){e.mounted&&(Gj(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function Qj(e,t,r,n){if(e.mounted){var i=(new Date).getTime();Zj(e),e.animation=function(){if(!e.mounted)return Gj(e.animation);var o=(new Date).getTime()-i,a=(0,qj[t])(o/r);o>=r?(n(1),e.animation=null):e.animation&&(n(a),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function Jj(e,t,r,n){var i=function(e){var t=e.scale,r=e.positionX,n=e.positionY;return!(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,h=t.positionY-c;0===r?o(t.scale,t.positionX,t.positionY):Qj(e,n,r,(function(e){o(s+d*e,l+u*e,c+h*e)}))}}var eR=function(e,t){var r=e.wrapperComponent,n=e.contentComponent,i=e.setup.centerZoomedOut;if(!r||!n)throw new Error("Components are not mounted");var o=function(e,t,r){var n=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*r,a=t.offsetHeight*r;return{wrapperWidth:n,wrapperHeight:i,newContentWidth:o,newDiffWidth:n-o,newContentHeight:a,newDiffHeight:i-a}}(r,n,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,r,n,i,o,a){var s=e>t?r*(a?1:.5):0,l=n>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:n-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},tR=function(e,t,r,n){return Kj(n?e<t?t:e>r?r:e:e,2)},rR=function(e,t){var r=eR(e,t);return e.bounds=r,r};function nR(e,t,r,n,i,o,a){var s=r.minPositionX,l=r.minPositionY,c=r.maxPositionX,d=r.maxPositionY,u=0,h=0;return a&&(u=i,h=o),{x:tR(e,s-u,c+u,n),y:tR(t,l-h,d+h,n)}}function iR(e,t,r,n,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=n-s;return"number"!=typeof t||"number"!=typeof r?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):nR(l-t*d,c-r*d,i,o,0,0,null)}function oR(e,t,r,n,i){var o=t-(i?n:0);return!Number.isNaN(r)&&e>=r?r:!Number.isNaN(t)&&e<=o?o:e}var aR=function(e,t){var r=e.setup.panning.excluded,n=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(n&&o&&a)&&!zR(o,r)},sR=function(e){var t=e.isInitialized,r=e.isPanning,n=e.setup.panning.disabled;return!(!t||!r||n)};function lR(e,t,r,n,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||r!==u)){var h=nR(t,r,s,o,n,i,a),g=h.x,p=h.y;e.setTransformState(c,g,p)}}var cR=function(e,t){var r=e.setup,n=e.transformState.scale,i=r.minScale,o=r.disablePadding;return t>0&&n>=i&&!o?t:0};function dR(e,t,r,n,i,o,a,s,l,c){if(i){var d;if(t>a&&r>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&r<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return n?t:tR(e,o,a,i)}function uR(e,t){var r=function(e){var t=e.mounted,r=e.setup,n=r.disabled,i=r.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&n&&!t)}(e);if(r){var n=e.lastMousePosition,i=e.velocityTime,o=e.setup,a=e.wrapperComponent,s=o.velocityAnimation.equalToMove,l=Date.now();if(n&&i&&a){var c=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,s),d=t.x-n.x,u=t.y-n.y,h=d/c,g=u/c,p=l-i,f=d*d+u*u,m=Math.sqrt(f)/p;e.velocity={velocityX:h,velocityY:g,total:m}}e.lastMousePosition=t,e.velocityTime=l}}function hR(e,t){var r=e.transformState.scale;Zj(e),rR(e,r),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var r=t.touches,n=e.transformState,i=n.positionX,o=n.positionY;if(e.isPanning=!0,1===r.length){var a=r[0].clientX,s=r[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var r=e.transformState,n=r.positionX,i=r.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-n,y:a-i}}(e,t)}function gR(e){var t=e.transformState.scale,r=e.setup,n=r.minScale,i=r.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<n||!a&&!s)){var d=function(e){var t=e.transformState,r=t.positionX,n=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,h=d.minPositionX,g=d.maxPositionY,p=d.minPositionY,f=r>u||r<h,m=n>g||n<p,b=iR(e,r>u?c.offsetWidth:e.setup.minPositionX||0,n>g?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:f?v:r,positionY:m?y:n}}}(e);d&&Jj(e,d,l,c)}}function pR(e,t,r){var n=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(n){var s=function(e,t,r){var n=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!n)return{x:l,y:c};var d=t-n.x,u=r-n.y;return{x:a?l:d,y:s?c:u}}(e,t,r),l=s.x,c=s.y,d=cR(e,o),u=cR(e,a);uR(e,{x:l,y:c}),lR(e,l,c,d,u)}}function fR(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,r=e.velocity,n=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==n?void 0:n.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&r&&(null==r?void 0:r.total)>.1&&u?function(e){var t=e.velocity,r=e.bounds,n=e.setup,i=e.wrapperComponent,o=function(e){var t=e.mounted,r=e.velocity,n=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t||!r||!n)}(e);if(o&&t&&r&&i){var a=t.velocityX,s=t.velocityY,l=t.total,c=r.maxPositionX,d=r.minPositionX,u=r.maxPositionY,h=r.minPositionY,g=n.limitToBounds,p=n.alignmentAnimation,f=n.zoomAnimation,m=n.panning,b=m.lockAxisY,v=m.lockAxisX,y=f.animationType,x=p.sizeX,w=p.sizeY,$=p.velocityAlignmentTime,C=function(e,t){var r=e.setup.velocityAnimation,n=r.equalToMove,i=r.animationTime,o=r.sensitivity;return n?i*t*o:i}(e,l),S=Math.max(C,$),k=cR(e,x),D=cR(e,w),T=k*i.offsetWidth/100,E=D*i.offsetHeight/100,O=c+T,F=d-T,_=u+E,M=h-E,I=e.transformState,A=(new Date).getTime();Qj(e,y,S,(function(t){var r=e.transformState,n=r.scale,i=r.positionX,o=r.positionY,l=((new Date).getTime()-A)/$,f=1-(0,qj[p.animationType])(Math.min(1,l)),m=1-t,y=i+a*m,x=o+s*m,w=dR(y,I.positionX,i,v,g,d,c,F,O,f),C=dR(x,I.positionY,o,b,g,h,u,M,_,f);i===y&&o===x||e.setTransformState(n,w,C)}))}}(e):gR(e)}}function mR(e,t,r,n){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=oR(Kj(t,2),o,a,0,!1),c=iR(e,r,n,l,rR(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function bR(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,h=c||n>=a;if((n>=1||s)&&gR(e),!h&&i&&e.mounted){var g=mR(e,a,t||i.offsetWidth/2,r||i.offsetHeight/2);g&&Jj(e,g,d,u)}}var vR=function(){return vR=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},vR.apply(this,arguments)};function yR(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var xR=1,wR=0,$R=0,CR={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},SR=function(e){var t,r,n,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:xR,scale:null!==(r=e.initialScale)&&void 0!==r?r:xR,positionX:null!==(n=e.initialPositionX)&&void 0!==n?n:wR,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:$R}},kR=function(e){var t=vR({},CR);return Object.keys(e).forEach((function(r){var n=void 0!==e[r];if(void 0!==CR[r]&&n){var i=Object.prototype.toString.call(CR[r]),o="[object Object]"===i,a="[object Array]"===i;t[r]=o?vR(vR({},CR[r]),e[r]):a?yR(yR([],CR[r],!0),e[r],!0):e[r]}})),t},DR=function(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?n*Math.exp(t*r):n+t*r;return oR(Kj(u,3),s,a,d,!1)};function TR(e,t,r,n,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,h=mR(e,DR(e,t,r),d,u);if(!h)return console.error("Error during zoom event. New transformation state was not calculated.");Jj(e,h,n,i)}function ER(e,t,r,n){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=SR(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var h=eR(e,s.scale),g=nR(s.positionX,s.positionY,h,a,0,0,o),p={scale:s.scale,positionX:g.x,positionY:g.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==n||n(),Jj(e,p,t,r))}}var OR=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),TR(e,1,t,r,n)}},FR=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),TR(e,-1,t,r,n)}},_R=function(e){return function(t,r,n,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var h={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(r)?l:r,scale:Number.isNaN(n)?c:n};Jj(e,h,i,o)}}},MR=function(e){return function(t,r){void 0===t&&(t=200),void 0===r&&(r="easeOut"),ER(e,t,r)}},IR=function(e){return function(t,r,n){void 0===r&&(r=200),void 0===n&&(n="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=LR(t||i.scale,o,a);Jj(e,s,r,n)}}},AR=function(e){return function(t,r,n,i){void 0===n&&(n=600),void 0===i&&(i="easeOut"),Zj(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,r){var n=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!n||!i)return o;var d=n.getBoundingClientRect(),u=t.getBoundingClientRect(),h=function(e,t,r,n){var i=e.getBoundingClientRect(),o=t.getBoundingClientRect(),a=r.getBoundingClientRect(),s=o.x*n.scale,l=o.y*n.scale;return{x:(i.x-a.x+s)/n.scale,y:(i.y-a.y+l)/n.scale}}(t,n,i,o),g=h.x,p=h.y,f=u.width/o.scale,m=u.height/o.scale,b=n.offsetWidth/f,v=n.offsetHeight/m,y=oR(r||Math.min(b,v),l,c,0,!1),x=(d.width-f*y)/2,w=(d.height-m*y)/2,$=nR((d.left-g)*y+x,(d.top-p)*y+w,eR(e,y),s,0,0,n);return{positionX:$.x,positionY:$.y,scale:y}}(e,a,r);Jj(e,s,n,i)}}},BR=function(e){return{instance:e,zoomIn:OR(e),zoomOut:FR(e),setTransform:_R(e),resetTransform:MR(e),centerView:IR(e),zoomToElement:AR(e)}},jR=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,BR(e)),t};function RR(){try{return{get passive(){return!1}}}catch(e){return!1}}var zR=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},PR=function(e){e&&clearTimeout(e)},LR=function(e,t,r){var n=r.offsetWidth*e,i=r.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-n)/2,positionY:(t.offsetHeight-i)/2}};function NR(e,t,r){var n=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-n.left)/r,o=(e.clientY-n.top)/r;else{var a=e.touches[0];i=(a.clientX-n.left)/r,o=(a.clientY-n.top)/r}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var HR=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},WR=function(e,t){var r=e.props,n=r.onWheel,i=r.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,h=a.disablePadding,g=a.smooth,p=d.size,f=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var r=function(e){return e?e.deltaY<0?1:-1:0}(e),n=function(e,t){return"number"==typeof e?e:t}(t,r);return n}(t,null),y=function(e,t,r,n,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,h=d.size,g=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var p=o+t*r;if(i)return p;var f=!n&&!g;return oR(Kj(p,3),c,l,h,f&&!u)}(e,v,g?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=rR(e,y),w=NR(t,o,s),$=l&&(f||0===p||c||h),C=iR(e,w.x,w.y,y,x,$),S=C.x,k=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,k),Xj(jR(e),t,n),Xj(jR(e),t,i)}},YR=function(e,t){var r=e.props,n=r.onWheelStop,i=r.onZoomStop;PR(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(bR(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var r=e.previousWheelEvent,n=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!r&&(n<o||n>a||Math.sign(r.deltaY)!==Math.sign(t.deltaY)||r.deltaY>0&&r.deltaY<t.deltaY||r.deltaY<0&&r.deltaY>t.deltaY||Math.sign(r.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(PR(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,Xj(jR(e),t,n),Xj(jR(e),t,i))}),160))},VR=function(e,t){var r=e.contentComponent,n=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==n&&r){var u=function(e,t,r){var n=r.getBoundingClientRect(),i=e.touches,o=Kj(i[0].clientX-n.left,5),a=Kj(i[0].clientY-n.top,5);return{x:(o+Kj(i[1].clientX-n.left,5))/2/t,y:(a+Kj(i[1].clientY-n.top,5))/2/t}}(t,i,r);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var h=HR(t),g=function(e,t){var r=e.pinchStartScale,n=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!r||null===n||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:oR(Kj(t/n*r,2),a,o,c,!d&&!l)}(e,h);if(g!==i){var p=rR(e,g),f=a&&(c||0===d||s),m=iR(e,u.x,u.y,g,p,f),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=h,e.setTransformState(g,b,v)}}}},UR=function(e,t){var r=e.props.onZoomStop,n=e.setup.doubleClick.animationTime;PR(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,Xj(jR(e),t,r)}),n)};function KR(e,t){var r=e.setup,n=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=r.doubleClick,u=d.disabled,h=d.mode,g=d.step,p=d.animationTime,f=d.animationType;if(!u&&!n){if("reset"===h)return function(e,t){var r=e.props,n=r.onZoomStart,i=r.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;Xj(jR(e),t,n),ER(e,a,s,(function(){return Xj(jR(e),t,i)})),UR(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(h,e.transformState.scale),b=DR(e,m,g);if(a!==b){Xj(jR(e),t,l);var v=NR(t,o,a),y=mR(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");Xj(jR(e),t,c),Jj(e,y,p,f),UR(e,t)}}}var XR=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,rR(t,t.transformState.scale),t.setup=kR(e)},this.initializeWindowEvents=function(){var e,r,n=RR(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(r=t.wrapperComponent)||void 0===r||r.addEventListener("wheel",t.onWheelPanning,n),null==o||o.addEventListener("mousedown",t.onPanningStart,n),null==o||o.addEventListener("mousemove",t.onPanning,n),null==o||o.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==o||o.addEventListener("keyup",t.setKeyUnPressed,n),null==o||o.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,r,n=RR(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,n),null==o||o.removeEventListener("mousemove",t.onPanning,n),null==o||o.removeEventListener("mouseup",t.onPanningStop,n),null==i||i.removeEventListener("mouseleave",t.clearPanning,n),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,n),null==o||o.removeEventListener("keydown",t.setKeyPressed,n),document.removeEventListener("mouseleave",t.clearPanning,n),Zj(t),null===(r=t.observer)||void 0===r||r.disconnect()},this.handleInitializeWrapperEvents=function(e){var r=RR();e.addEventListener("wheel",t.onWheelZoom,r),e.addEventListener("dblclick",t.onDoubleClick,r),e.addEventListener("touchstart",t.onTouchPanningStart,r),e.addEventListener("touchmove",t.onTouchPanning,r),e.addEventListener("touchend",t.onTouchPanningStop,r)},this.handleInitialize=function(e){var r=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(jR(t))})),r&&(t.setCenter(),t.observer=new ResizeObserver((function(){var r,n=e.offsetWidth,i=e.offsetHeight;(n>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(jR(t))})),t.setCenter(),null===(r=t.observer)||void 0===r||r.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.setup.wheel,n=r.disabled,i=r.wheelDisabled,o=r.touchPadDisabled,a=r.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||n||!c||i&&!t.ctrlKey||o&&t.ctrlKey||zR(c,a))}(t,e);r&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var r=e.props,n=r.onWheelStart,i=r.onZoomStart;e.wheelStopEventTimer||(Zj(e),Xj(jR(e),t,n),Xj(jR(e),t,i))}(t,e),WR(t,e),YR(t,e))}},this.onWheelPanning=function(e){var r=t.setup,n=r.disabled,i=r.wheel,o=r.panning;if(t.wrapperComponent&&t.contentComponent&&!n&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,h=o.lockAxisY?l:d,g=t.setup.alignmentAnimation,p=g.sizeX,f=g.sizeY,m=cR(t,p),b=cR(t,f);u===s&&h===l||lR(t,u,h,m,b)}},this.onPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;r||aR(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),Zj(t),hR(t,e),Xj(jR(t),e,n))},this.onPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;r||sR(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),pR(t,e.clientX,e.clientY),Xj(jR(t),e,n))},this.onPanningStop=function(e){var r=t.props.onPanningStop;t.isPanning&&(fR(t),Xj(jR(t),e,r))},this.onPinchStart=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinchingStart,o=n.onZoomStart;if(!r){var a=function(e,t){var r=e.setup.pinch,n=r.disabled,i=r.excluded,o=e.isInitialized,a=t.target;return!(!o||n||!a||zR(a,i))}(t,e);a&&(function(e,t){var r=HR(t);e.pinchStartDistance=r,e.lastDistance=r,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,Zj(e)}(t,e),Zj(t),Xj(jR(t),e,i),Xj(jR(t),e,o))}},this.onPinch=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinching,o=n.onZoom;if(!r){var a=function(e){var t=e.setup.pinch.disabled,r=e.isInitialized,n=e.pinchStartDistance;return!(!r||t||!n)}(t);a&&(e.preventDefault(),e.stopPropagation(),VR(t,e),Xj(jR(t),e,i),Xj(jR(t),e,o))}},this.onPinchStop=function(e){var r,n,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(n=(r=t).pinchMidpoint,r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,bR(r,null==n?void 0:n.x,null==n?void 0:n.y),Xj(jR(t),e,o),Xj(jR(t),e,a))},this.onTouchPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;if(!r&&aR(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,Zj(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(Zj(t),hR(t,e),Xj(jR(t),e,n)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(r)return;if(!sR(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];pR(t,i.clientX,i.clientY),Xj(jR(t),e,n)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.isInitialized,n=e.setup,i=e.wrapperComponent,o=n.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(r&&l&&c)||a||zR(l,s))}(t,e);r&&KR(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,r,n){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(n))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=r,t.transformState.positionY=n,t.applyTransformation();var o=jR(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),Xj(o,{scale:e,positionX:r,positionY:n},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=LR(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,r,n){return t.props.customTransform?t.props.customTransform(e,r,n):function(e,t,r){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(r,")")}(e,r,n)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,r=e.scale,n=e.positionX,i=e.positionY,o=t.handleTransformStyles(n,i,r);t.contentComponent.style.transform=o}},this.getContext=function(){return jR(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,r){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=r,rR(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(r),t.initializeWindowEvents(),t.isInitialized=!0;var n=jR(t);Xj(n,void 0,t.props.onInit)},this.props=e,this.setup=kR(this.props),this.transformState=SR(this.props)},qR=i.createContext(null),GR=i.forwardRef((function(e,t){var r=o(new XR(e)).current,n=function(e,t){return"function"==typeof e?e(t):e}(e.children,BR(r));return b(t,(function(){return BR(r)}),[r]),u((function(){r.update(e)}),[r,e]),i.createElement(qR.Provider,{value:r},n)}));i.forwardRef((function(e,t){var r,n=o(null),a=f(qR);return u((function(){return a.onChange((function(e){if(n.current){n.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),i.createElement("div",vR({},e,{ref:(r=[n,t],function(e){r.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var ZR="transform-component-module_wrapper__SPB86",QR="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var JR=function(e){var t=e.children,r=e.wrapperClass,n=void 0===r?"":r,a=e.contentClass,s=void 0===a?"":a,l=e.wrapperStyle,c=e.contentStyle,d=e.wrapperProps,h=void 0===d?{}:d,g=e.contentProps,p=void 0===g?{}:g,m=f(qR),b=m.init,v=m.cleanupWindowEvents,y=o(null),x=o(null);return u((function(){var e=y.current,t=x.current;return null!==e&&null!==t&&b&&(null==b||b(e,t)),function(){null==v||v()}}),[]),i.createElement("div",vR({},h,{ref:y,className:"react-transform-wrapper ".concat(ZR," ").concat(n),style:l}),i.createElement("div",vR({},p,{ref:x,className:"react-transform-component ".concat(QR," ").concat(s),style:c}),t))};const ez=_.div`
    background-color: ${Fc["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${Fc["icon-subtle"]};
    }
`,tz=t=>e(ez,Object.assign({},t,{children:e(ne,{})})),rz=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,nz=_.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,iz=_(tz)`
    width: 100%;
    height: 100%;
`,oz=({src:t,className:r,alt:n,fit:i,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=a(!0),[h,g]=a();u((()=>{d(!0),g(void 0);const e=new Image;e.src=t,e.onload=()=>{s&&l&&l({src:t,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),g(e)}}),[t]);return e(rz,{className:r,children:h?null!=o?o:e(iz,{}):c?e(su,{}):e(nz,{src:t,alt:n,$fit:i})})},az=_(td)`
    padding: 0;
    border-radius: 100%;
    background: ${Fc.bg};
    color: ${Fc["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,sz=_(az)`
    position: absolute;
    top: ${Ac["spacing-48"]};
    right: ${Ac["spacing-48"]};
    z-index: 5;

    ${Rc.MaxWidth.sm} {
        top: ${Ac["spacing-20"]};
        right: ${Ac["spacing-20"]};
    }
`,lz=_(az)`
    position: absolute;
    top: ${Ac["spacing-48"]};
    right: calc(
        2.5rem + ${Ac["spacing-48"]} + ${Ac["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${Rc.MaxWidth.sm} {
        top: ${Ac["spacing-20"]};
        right: calc(
            2.5rem + ${Ac["spacing-20"]} + ${Ac["spacing-16"]}
        );
    }
`,cz=_(az)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&M`
            left: ${Ac["spacing-48"]};
            ${Rc.MaxWidth.sm} {
                left: ${Ac["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&M`
            right: ${Ac["spacing-48"]};
            ${Rc.MaxWidth.sm} {
                right: ${Ac["spacing-20"]};
            }
        `}
`,dz=_.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,uz=_.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,hz=_.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,gz=_.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,pz=_.div`
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
`,fz=_(oz)`
    height: 100%;
    width: 100%;
`,mz=_(tz)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,bz=_.div`
    display: flex;
    justify-content: center;
    padding: ${Ac["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,vz=_(ad.BodyXS)`
    display: inline-flex;
    padding: ${Ac["spacing-4"]} ${Ac["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${Bc.full};
    background-color: ${Fc.bg};
    text-align: center;
`,yz=_.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${Fc["bg-inverse"]};
    padding: ${Ac["spacing-24"]} ${Ac["spacing-16"]};

    ${Rc.MaxWidth.sm} {
        padding: ${Ac["spacing-16"]} ${Ac["spacing-20"]};
    }
`,xz=_.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${Ac["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,wz=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${Rc.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,$z=_.div`
    cursor: pointer;
    background-color: ${Fc["bg-inverse"]};
    border-radius: ${Bc.md};
    border: ${Ic.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${Rc.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${e=>e.$active?M`
                  border-width: ${Ic["width-040"]};
                  border-color: ${Fc["border-selected"]};

                  ${Rc.MaxWidth.sm} {
                      border-width: ${Ic["width-020"]};
                  }

                  :hover {
                      border-color: ${Fc["border-selected-hover"]};
                  }
              `:M`
                  border-width: ${Ic["width-010"]};

                  :hover {
                      border-color: ${Fc["border-hover"]};
                  }
              `};
`,Cz=_(oz)`
    height: 100%;
    width: 100%;
`,Sz=(n,i)=>{var{items:s,initialActiveItemIndex:l,hideThumbnail:c=!1,hideNavigation:d=!1,hideCounter:h=!1,hideMagnifier:g=!1,onClose:p}=n,f=gt(n,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[m,v]=a(null!=l?l:0),[y,x]=a({}),[w,$]=a(1),[C,S]=a(),[k,D]=a(),T=o(null),E=o([]),O=o([]),F=C&&k?C-k:0;b(i,(()=>({currentItemIndex:m,setCurrentItem:j,goToPrevItem:A,goToNextItem:B}))),rh("keydown",(function(e){"ArrowRight"===e.key?B():"ArrowLeft"===e.key?A():"Escape"===e.key&&p&&p()}),"document"),u((()=>{var e,t;null===(t=null===(e=E.current)||void 0===e?void 0:e[m])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),$(1)}),[m]);const _=e=>{$(e.state.scale)};const M=({src:e,height:t,width:r})=>{x((n=>Object.assign(Object.assign({},n),{[e]:{height:t,width:r}})))},I=()=>{const e=y[s[m].src];if(T.current&&e){const{clientHeight:t,clientWidth:r}=T.current,{width:n,height:i}=e,o=i/n<t/r;return n<r&&i<t?o?r/n:t/i:o?t/(i/(n/r)):r/(n/(i/t))}},A=()=>{var e,t;null===(t=null===(e=O.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>0===e?s.length-1:e-1))},B=()=>{var e,t;null===(t=null===(e=O.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>e===s.length-1?0:e+1))},j=e=>{var t,r;null===(r=null===(t=O.current)||void 0===t?void 0:t[m])||void 0===r||r.resetTransform(),v(e)};return t(Mm,Object.assign({},f,{"data-testid":"image-carousel-modal",children:[e(sz,{"aria-label":"Close image carousel",onClick:p,focusHighlight:!1,children:e(te,{"aria-hidden":!0})}),!g&&e(lz,{"aria-label":1===w?"Zoom in":"Zoom out",onClick:()=>{var e,t,r,n;if(1===w){const r=I();null===(t=null===(e=O.current)||void 0===e?void 0:e[m])||void 0===t||t.centerView(r),$(null!=r?r:1)}else $(1),null===(n=null===(r=O.current)||void 0===r?void 0:r[m])||void 0===n||n.resetTransform()},focusHighlight:!1,children:e(1===w?ie:oe,{"aria-hidden":!0})}),t(dz,{children:[t(uz,{children:[!d&&t(r,{children:[e(cz,{"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:A,children:e(ae,{"aria-hidden":!0})}),e(cz,{"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:B,children:e(se,{"aria-hidden":!0})})]}),e(hz,{ref:T,onTouchStart:e=>{w<=1&&S(e.touches[0].clientX)},onTouchMove:e=>{!C||w>1||D(e.touches[0].clientX)},onTouchEnd:()=>{T.current&&(Math.abs(F)>T.current.offsetWidth/3&&(F>0?B():A()),S(void 0),D(void 0))},children:e(gz,{style:{transform:`translateX(calc(${100*-m}% - ${F}px))`},children:s.map(((t,r)=>{var n;return e(pz,{"data-testid":"slide-item",children:e(GR,{ref:e=>O.current[r]=e,panning:{disabled:w<=1},initialScale:1,onZoom:_,onZoomStop:_,onWheel:_,children:e(JR,{children:e(fz,{src:t.src,alt:null!==(n=t.alt)&&void 0!==n?n:`Image ${r+1}`,placeholder:e(mz,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:M})})})},r)}))})}),!h&&e(bz,{children:e(vz,{weight:"semibold",children:`${m+1}/${s.length}`})})]}),!c&&e(yz,{children:e(xz,{children:s.map(((t,r)=>{var n;const i=null!==(n=t.thumbnailSrc)&&void 0!==n?n:t.src;return e(wz,{children:e($z,{"data-testid":"thumbnail-item",$active:r===m,onClick:()=>j(r),ref:e=>E.current[r]=e,children:e(Cz,{src:i,alt:`Thumbnail ${r+1}`,fit:"cover"})})},r)}))})})]})]}))},kz=g(Sz),Dz=_.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${Fc.bg};
    border: ${Ic["width-010"]} ${Ic.solid} transparent;
    border-radius: ${Bc.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${Mc["duration-250"]} ${Mc["ease-default"]};
    ${_c["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?Fc["text-primary"]:Fc.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${Rc.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${_c["body-md-semibold"]}
    }

    ${e=>e.$error?M`
                background: ${Fc.bg};
                border: ${Ic["width-010"]} ${Ic.solid}
                    ${Fc["border-error"]};
            `:e.$selected?M`
                background: ${Fc["bg-selected"]};
                border: ${Ic["width-010"]} ${Ic.solid}
                    ${Fc["border-selected"]};

                &:hover {
                    background: ${Fc["bg-selected-hover"]};
                    border: ${Ic["width-010"]} ${Ic.solid}
                        ${Fc["border-selected-hover"]};
                }
            `:M`
                &:hover {
                    border: ${Ic["width-010"]} ${Ic.solid}
                        ${Fc["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${Ic["width-010"]} ${Ic.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${Fc["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,Tz=i.forwardRef(((r,n)=>{var{children:i,imgSrc:o,selected:a,error:s,type:l="button"}=r,c=gt(r,["children","imgSrc","selected","error","type"]);return t(Dz,Object.assign({ref:n,$selected:a,$error:s,type:l},c,{children:[e(Sb,{src:o}),i]}))})),Ez=M`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Fc["icon-primary"]};
`,Oz=_.div`
    border-top: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
`,Fz=_(ad.HeadingSM).attrs({as:"div"})`
    color: ${Fc["text-primary"]};
    margin-bottom: 0.5rem;
`,_z=_(ad.HeadingXS).attrs({as:"div"})`
    color: ${Fc["text-primary"]};
`,Mz=_(ve)`
    ${Ez}
`,Iz=_.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    }

    :hover {
        ${Fz},
        ${_z},
        ${Mz} {
            color: ${Fc["text-hover"]};
        }
    }
`,Az=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,Bz=_(ad.BodyMD)`
    margin-top: 0.25rem;
`,jz=_(Uo.div)`
    overflow: hidden;
`,Rz=_.div`
    border-top: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
`,zz=_(ad.BodyMD).attrs({as:"span"})`
    color: ${Fc["text-primary"]};
    margin-right: 1rem;
`,Pz=_(it)`
    ${Ez}
`,Lz=_(nt)`
    ${Ez}
`,Nz=_.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};

    :hover {
        ${zz},
        ${Pz},
        ${Lz} {
            color: ${Fc["text-hover"]};
        }
    }
`,Hz=n=>{var{items:i,maxShown:o,style:s="default",onItemClick:l}=n,c=gt(n,["items","maxShown","style","onItemClick"]);const[d,u]=a(!o||o>=i.length),h=o?i.slice(0,o):i,g=o?i.slice(o):[],p=hr(),f=p.ref,m=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):l&&(e.preventDefault(),l(t,e))},b=()=>{u(!d)},v=(n,i,o,a)=>t(r,{children:[t(Az,{children:[e("small"===s?_z:Fz,{"data-testid":`link-title-${n}`,weight:"semibold",children:i}),o&&e(Bz,{"data-testid":`link-description-${n}`,children:o}),a]}),e(Mz,{})]}),y=Eo({height:d?p.height:0});return t(Oz,Object.assign({},c,{children:[h.map(((t,r)=>{const{title:n,description:i,secondaryDescription:o,onClick:a}=t,s=gt(t,["title","description","secondaryDescription","onClick"]);return e(Iz,Object.assign({"data-testid":`list-item-shown-${r}`,onClick:e=>m(e,t)},s,{children:v(r,n,i,o)}),`list-item-shown-${r}`)})),g.length>0&&e(jz,{style:y,"data-testid":"minimised-content",children:e(Rz,{ref:f,children:g.map(((t,r)=>{const{title:n,description:i,onClick:o,secondaryDescription:a}=t,s=gt(t,["title","description","onClick","secondaryDescription"]);return e(Iz,Object.assign({"data-testid":`list-item-minimised-${r}`,onClick:e=>m(e,t)},s,{children:v(r,n,i,a)}),`list-item-minimised-${r}`)}))})}),g.length>0&&t(Nz,{type:"button",onClick:b,"data-testid":"toggle-button",$showMinimised:d,children:[e(zz,{weight:"semibold","data-testid":"toggle-button-label",children:d?"View less":"View more"}),e(d?Lz:Pz,{})]})]}))},Wz=_.div`
    ${e=>Kd({textSize:e.$textSize})}
    ${e=>e.$textColor&&M`
            color: ${e.$textColor};
        `}
`,Yz=g(((t,r)=>{const{baseTextColor:n,baseTextSize:i,inline:o}=t,a=gt(t,["baseTextColor","baseTextSize","inline"]);return e(Wz,Object.assign({ref:r,as:o?"span":"div",$textSize:i,$textColor:n},a))})),Vz=_.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,n=t.sm?t.sm<=2?t.sm:2:void 0,i=t.md||t.sm||2;return M`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${om.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/i}% - 2rem), 1fr)
                );
            }

            ${om.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${n||"auto-fill"},
                    minmax(calc(${100/(n||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,Uz=_.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:n,colsMd:i,startSm:o,colsSm:a}=e;return M`
            grid-column: ${t||n||"auto"} / span
                ${r||i||1};

            ${om.MaxWidth.tablet} {
                grid-column: ${n||o||"auto"} / span
                    ${i||a||1};
            }

            ${om.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span ${a||1};
            }
        `}}
`,Kz={Grid:i.forwardRef(((t,r)=>{const{children:n}=t,i=gt(t,["children"]);return e(Vz,Object.assign({ref:r},i,{children:n}))})),Tile:i.forwardRef(((t,r)=>{const{children:n}=t,i=gt(t,["children"]);return e(Uz,Object.assign({ref:r},i,{children:n}))}))},Xz=_.div`
    // matches Layout.Container
    ${e=>e.$stretch?M`
                --sgds-mainnav-padding-x: ${jc["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${jc["xxl-margin"]}px;
            `:M`
                --sgds-mainnav-max-width: 1440px;

                --sgds-mainnav-padding-x: ${jc["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${jc["xxl-margin"]}px;

                ${Rc.MaxWidth.xl} {
                    --sgds-mainnav-padding-x: ${jc["xl-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${jc["xl-margin"]}px;
                }

                ${Rc.MaxWidth.lg} {
                    --sgds-mainnav-padding-x: ${jc["lg-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${jc["lg-margin"]}px;
                }

                ${Rc.MaxWidth.md} {
                    --sgds-mainnav-padding-x: ${jc["md-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${jc["md-margin"]}px;
                }

                ${Rc.MaxWidth.sm} {
                    --sgds-mainnav-padding-x: ${jc["sm-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${jc["sm-margin"]}px;
                }

                ${Rc.MaxWidth.xs} {
                    --sgds-mainnav-padding-x: ${jc["xs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${jc["xs-margin"]}px;
                }

                ${Rc.MaxWidth.xxs} {
                    --sgds-mainnav-padding-x: ${jc["xxs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${jc["xxs-margin"]}px;
                }
            `}
`,qz=({stretch:t=!1})=>{u((()=>{r()||n()}),[]);const r=()=>document.getElementById(Gz),n=()=>{if(!document.getElementById(Gz)){const e=document.createElement("script");e.id=Gz,e.type="module",e.src=Zz,document.head.appendChild(e)}};return e(Xz,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"},$stretch:t})},Gz="lifesg-ds-masthead-script",Zz="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",Qz={notCompress:6,compress:4},Jz=_.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: ${Fc.bg};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,eP=_.nav`
    height: ${e=>e.$compress?Qz.compress:Qz.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Mc["duration-350"]} ${Mc["ease-standard"]};

    ${Rc.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,tP=_.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Rc.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,rP=_(td)`
    display: none;

    ${Rc.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,nP=_(ot)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Fc.icon};
`,iP=_.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Rc.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${Rc.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,oP=_.div`
    display: flex;
    background-color: ${Fc.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Rc.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${Rc.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,aP=_.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Mc["duration-150"]} ${Mc["ease-default"]};
        object-fit: contain;
    }
`,sP=({resources:t,onClick:r,"data-id":n,"data-testid":i="navbar-brand",type:o})=>e(aP,{role:"link",onClick:e=>{r&&r(e,o)},tabIndex:0,"data-id":n,"data-testid":i,$type:o,children:e(Sb,{src:t.logoSrc,alt:t.brandName})}),lP=_.div`
    display: none;

    ${Rc.MaxWidth.lg} {
        display: flex;
    }
`,cP=_.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${Ac["spacing-16"]};
    background-color: ${Fc.bg};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?M`
            right: 0;
            transition: all 300ms ${Mc["ease-entrance"]};
            transition-delay: 200ms;
        `:M`
        right: -100%;
        transition: all 300ms ${Mc["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return M`
            height: calc(${t} * 100);
        `}}

	${Rc.MaxWidth.lg} {
        width: 75%;
    }

    ${Rc.MaxWidth.sm} {
        width: 100%;
    }
`,dP=_.div`
    display: flex;
    flex-direction: column;
`,uP=_.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${Ac["spacing-40"]} ${Ac["spacing-20"]}
        ${Ac["spacing-32"]};
`,hP=_(ze)`
    height: 1.5rem;
    width: 1.5rem;
`,gP=_(td)`
    position: absolute;
    right: -${Ac["spacing-4"]};
    color: ${Fc.icon};

    :active,
    :focus {
        color: ${Fc["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,pP=i.forwardRef(((n,i)=>{const{show:o,resources:s={},children:l,hideNavBranding:c,onClose:d,onBrandClick:h}=n,[g,p]=a(0),{primary:f,secondary:m}=s;u((()=>(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=()=>{if(window){const e=.01*window.innerHeight;p(e)}};return e(lP,{ref:i,"data-testid":"drawer",children:e(cP,{$show:o,$viewHeight:g,children:t(dP,{children:[t(uP,{children:[e(iP,{"data-id":"drawer-brand-container",children:!c&&t(r,{children:[f&&e(sP,{resources:f,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&t(r,{children:[e(oP,{}),e(sP,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e(gP,{onClick:d,focusHighlight:!1,"aria-label":"Close nav menu",children:e(hP,{})})]}),l]})})})})),fP=_.ul`
    display: flex;
    list-style: none;
    margin-left: ${Ac["spacing-64"]};
    flex-shrink: 0;

    ${Rc.MaxWidth.lg} {
        display: none;
    }
`,mP=_.ul`
    display: none;

    ${Rc.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${Ac["spacing-64"]};
        flex-shrink: 0;
    }
`,bP=_.ul`
    display: none;
    list-style: none;

    ${Rc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Ac["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Rc.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,vP=_.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${Ac["spacing-16"]};
    }

    ${Rc.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${Ac["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?Ac["spacing-16"]:"0"};
        }
    }

    ${Rc.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return M`
                    padding: 0 ${Ac["spacing-16"]};
                `}}
    }
`,yP=_(Nd.Small)`
    ${Rc.MaxWidth.lg} {
        width: 100%;
    }
`,xP=_.div`
    display: none;

    ${Rc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Ac["spacing-40"]};
    }
`,wP=_(ad.BodyMD)`
    margin-bottom: ${Ac["spacing-8"]};
`,$P=_.div`
    display: flex;
`,CP=_.a`
    :not(:last-child) {
        margin-right: ${Ac["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Rc.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${Rc.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,SP=({actionButtons:n,mobile:i=!1,onActionButtonClick:o})=>{const a=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(t,e)},l=(r,n)=>{const i=r?(e=>{const t=vD(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(n):n;return i.map(((n,i)=>{let o;switch(n.type){case"download":o=r?(l=n.args,t(xP,{children:[e(wP,{weight:"semibold",children:l&&l.children||"Download the app"}),t($P,{children:[e(CP,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(CP,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e(yP,Object.assign({},n.args,{type:"button",onClick:s(n),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const t=n.args["data-testid"]?`action-button__${n.args["data-testid"]}`:`action-button__button-${r?"mobile-":""}${i+1}`;o=e(yP,Object.assign({},n.args,{type:"button",onClick:s(n),"data-testid":t}));break}case"component":{const e=n.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return e(vP,{$mobile:r,children:o},`action-button-${i+1}`)}))};if(n){const o=(null==n?void 0:n.mobile)||n.desktop,a=o.filter((e=>!!e.uncollapsible)),s=o.filter((e=>!e.uncollapsible));return i?e(r,{children:s.length>0&&e(bP,{children:l(i,s)})}):t(r,{children:[a.length>0&&e(mP,{children:l(!1,a)}),n.desktop.length>0&&e(fP,{children:l(i,n.desktop)})]})}return e(r,{})};var kP;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const t=e;return!t.itemType||"link"===t.itemType}}(kP||(kP={}));const DP=_.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${Ac["spacing-8"]} 0;

    background: ${Fc.bg};
    border-radius: ${Bc.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${Fc.Primitive["neutral-50"]} r g b / 25%);
`,TP=_.ul`
    display: none;
    list-style: none;

    ${Rc.MaxWidth.lg} {
        border-left: ${Ic["width-040"]} solid ${Fc["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,EP=_(ad.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${Fc.text};

    margin: 0 ${Ac["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${Ic.solid} transparent;
    border-width: ${Ac["spacing-12"]} ${Ac["spacing-8"]};

    border-radius: ${Bc.md};

    ${rd(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${Fc["bg-hover"]};
        color: ${Fc.text};
    }

    ${Rc.MaxWidth.lg} {
        ${_c["body-md-regular"]}
    }
`,OP=_.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,FP=({items:t,mobile:n=!1,onItemClick:i})=>{const o=e=>t=>{t.stopPropagation(),i(t,e)},a=(r=!1)=>t.map(((t,n)=>{const{children:i,options:a}=t,s=gt(t,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return e(OP,{children:e(EP,Object.assign({"data-testid":l},s,{onClick:o(t)},a,{children:i}))},n)}));if(t&&t.length>0){return e(n?TP:DP,{children:a(n)})}return e(r,{})},_P=_.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Rc.MaxWidth.lg} {
        display: none;
    }
`,MP=_.ul`
    display: none;
    list-style: none;

    ${Rc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,IP=_.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Rc.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,AP=_(ad.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Fc.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?Fc["text-selected-hover"]:Fc["text-hover"]};
    }

    ${Rc.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,BP=_.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,jP=_.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Fc["border-selected"]};

    :hover {
        ${e=>e.$selected&&Fc["border-selected-hover"]};
    }

    ${Rc.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,RP=_.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,zP=_(td)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,PP=_(F)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Fc.icon};
    :hover {
        ${e=>e.$selected?Fc["icon-selected-hover"]:Fc["icon-hover"]};
    }
`,LP=({items:n,selectedId:i,mobile:s=!1,hideNavBranding:l,onItemClick:c})=>{const[d,h]=a(-1),[g,p]=a(!1),f=o(null);u((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{p(!1)},b=(e,t)=>r=>{r.stopPropagation(),h(t),p(!0),c(r,e)},v=(e,t)=>{e.stopPropagation(),c(e,t),p(!1)},y=()=>n.map(((r,n)=>{if("component"===r.itemType){const t=r&&r.children||null;return e("li",{children:t},n)}{const o=(e=>{if(e.id===i)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(r),{children:a,options:c}=r,u=gt(r,["children","options"]),h=o?s?"bold":"semibold":"regular",p=s?`link__mobile-${n+1}`:`link__${n+1}`,f=d>=0&&d===n&&g;return t(IP,{$hiddenBranding:l,children:[t(AP,Object.assign({"data-testid":p,weight:h,$selected:o},u,{onClick:b(r,n)},c,{children:[e(BP,{children:a}),o&&e(jP,{"data-testid":`${p}-indicator`,$selected:o}),s&&r.subMenu&&e(RP,{children:e(zP,{"data-testid":`${p}-expand-collapse-button`,$selected:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand",children:e(PP,{$selected:o})})})]})),f&&r.subMenu&&e(FP,{items:r.subMenu,mobile:s,onItemClick:v})]},n)}}));return n&&n.length>0?s?e(MP,{ref:f,children:y()}):e(_P,{ref:f,$alignLeft:l,children:y()}):e(r,{})},NP={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},HP={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},WP={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},YP={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},VP=g(((n,i)=>{var{items:s,className:l,id:c,selectedId:d,compress:h=!1,fixed:g=!0,resources:p,hideNavElements:f=!1,hideNavBranding:m=!1,drawerDismissalExclusions:v=[],actionButtons:y,onItemClick:x,onActionButtonClick:w,onBrandClick:$,masthead:C=!0,layout:S="default"}=n,k=gt(n,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[D,T]=a(!1),[E,O]=a(!1),F="stretch"===S,_=o(null),M=j(),I=(e=>{switch(e){case"bookingsg":return HP;case"mylegacy":return YP;case"ccube":return WP;default:return NP}})(null==M?void 0:M.resourceScheme),A=jc["lg-max"]({theme:M}),B=(null==p?void 0:p.primary)||I.primary,R=null==p?void 0:p.secondary;b(i,(()=>Object.assign(_.current,{dismissDrawer:()=>{z()}})),[D]),u((()=>(L(),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)})),[]);const z=()=>{T(!1),setTimeout((()=>{O(!1)}),550)},P=e=>D&&-1===v.indexOf(e),L=()=>{window.innerWidth<=A&&D&&z()},N=(e,t)=>{$&&(e.preventDefault(),$(t)),P("brand-click")&&z()},H=(e,t)=>{kP.isNavItemCommon(t)&&t.onClick?t.onClick(e):x&&(e.preventDefault(),x(t)),kP.isNavItemLink(t)&&!t.subMenu&&P("item-click")&&z()},W=(e,t)=>{var r;"button"!==t.type&&"download"!==t.type||!(null===(r=t.args)||void 0===r?void 0:r.onClick)?w&&(e.preventDefault(),w(t)):t.args.onClick(e),P("item-click")&&z()},Y=()=>{T(!0),O(!0)},V=()=>{P("close-button-click")&&z()},U=()=>{const t=s.mobile||s.desktop;return t&&t.length>0||y&&(e=>{const t=e.mobile||e.desktop;return!!t&&t.length&&t.some((e=>!e.uncollapsible))})(y)?e(rP,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:Y,focusHighlight:!1,children:e(nP,{})}):null};return t(Jz,{ref:_,$fixed:g,className:l,id:c||"navbar-wrapper","data-testid":k["data-testid"]||"navbar-wrapper",children:[C&&e(qz,{stretch:F}),t(Aj.Content,{stretch:F,children:[t(eP,{$compress:h,children:[!m&&t(iP,{$compress:h,"data-id":"brand-container",children:[B&&e(sP,{resources:B,onClick:N,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),R&&t(r,{children:[e(oP,{$compress:h}),e(sP,{resources:R,onClick:N,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!f&&t(tP,{$hideNavBranding:m,children:[e(LP,{items:s.desktop,onItemClick:H,selectedId:d,hideNavBranding:m}),e(SP,{actionButtons:y,onActionButtonClick:W}),U()]})]}),!f&&e(mm,{show:E,enableOverlayClick:!0,onOverlayClick:V,children:t(pP,{show:D,resources:{primary:B,secondary:R},onClose:V,onBrandClick:N,actionButtons:y,hideNavBranding:m,children:[e(LP,{items:s.mobile||s.desktop,onItemClick:H,selectedId:d,mobile:!0}),e(SP,{actionButtons:y,onActionButtonClick:W,mobile:!0})]})})]})]})})),UP=Qz,KP=3.5,XP=M`
    color: ${Fc["hyperlink-inverse"]};

    svg {
        color: ${Fc["icon-primary-inverse"]};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Fc["hyperlink-inverse"]};
        svg {
            color: ${Fc["icon-primary-inverse"]};
        }
    }
`,qP=_.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${Mc["duration-800"]} ${Mc["ease-default"]};
    background: ${Fc["bg-inverse-subtle"]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,GP=_(Aj.Content)`
    display: flex;
`,ZP=_.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,QP=_.div`
    display: inline-block;
    width: 100%;

    ${_c["body-baseline-regular"]}
    color: ${Fc["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${_c["body-baseline-semibold"]}
        color: ${Fc["text-inverse"]};
    }

    a {
        ${_c["body-baseline-regular"]}
        ${XP}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return M`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,JP=_(ad.LinkBL)`
    position: relative;

    ${XP}
`,eL=_(td)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,tL=_(ze)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Fc["icon-inverse"]};
`,rL=_.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${Fc["hyperlink-inverse"]};
    ${_c["body-md-semibold"]};

    cursor: pointer;
`,nL=_.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,iL=r=>{var{children:n,visible:i=!0,dismissible:o=!0,sticky:s=!0,onDismiss:l,id:c,forwardedRef:d,maxCollapsedHeight:h,onClick:g,actionButton:p}=r,f=gt(r,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const m=f["data-testid"],[b,v]=a(i),{height:y=0,ref:x}=hr();u((()=>{v(i)}),[i]);const w=e=>{e.stopPropagation(),v(!1),o&&l&&l()},$=e=>{(null==p?void 0:p.onClick)&&(e.stopPropagation(),p.onClick(e))};if(!b)return null;return t(qP,Object.assign({ref:d,$sticky:s,$clickable:!!g,onClick:g},f,{children:[t(GP,{id:oL("container",c),children:[t(ZP,{children:[e(QP,{"data-testid":oL("text-content",m),$maxCollapsedHeight:h&&y>h?h:void 0,children:e("div",{ref:x,children:n})}),p?e(rL,Object.assign({id:oL("action-button",c),"data-testid":oL("action-button",m),type:"button"},p,{onClick:$,children:p.children})):null]}),o&&e(eL,{onClick:w,id:oL("dismiss-button",c),"data-testid":oL("dismiss-button",m),focusHighlight:!1,type:"button","aria-label":"Dismiss notification",children:e(tL,{"aria-hidden":!0})})]}),g&&e(nL,{"aria-label":"Clickable banner",type:"button"})]}))},oL=(e,t="wrapper")=>`${t}-${e}`,aL=i.forwardRef(((t,r)=>e(iL,Object.assign({},t,{forwardedRef:r}))));aL.displayName="NotificationBanner";const sL=Object.assign(aL,{Link:JP}),{entries:lL,setPrototypeOf:cL,isFrozen:dL,getPrototypeOf:uL,getOwnPropertyDescriptor:hL}=Object;
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */let{freeze:gL,seal:pL,create:fL}=Object,{apply:mL,construct:bL}="undefined"!=typeof Reflect&&Reflect;gL||(gL=function(e){return e}),pL||(pL=function(e){return e}),mL||(mL=function(e,t,r){return e.apply(t,r)}),bL||(bL=function(e,t){return new e(...t)});const vL=IL(Array.prototype.forEach),yL=IL(Array.prototype.lastIndexOf),xL=IL(Array.prototype.pop),wL=IL(Array.prototype.push),$L=IL(Array.prototype.splice),CL=IL(String.prototype.toLowerCase),SL=IL(String.prototype.toString),kL=IL(String.prototype.match),DL=IL(String.prototype.replace),TL=IL(String.prototype.indexOf),EL=IL(String.prototype.trim),OL=IL(Object.prototype.hasOwnProperty),FL=IL(RegExp.prototype.test),_L=(ML=TypeError,function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return bL(ML,t)});var ML;function IL(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return mL(e,t,n)}}function AL(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:CL;cL&&cL(e,null);let n=t.length;for(;n--;){let i=t[n];if("string"==typeof i){const e=r(i);e!==i&&(dL(t)||(t[n]=e),i=e)}e[i]=!0}return e}function BL(e){for(let t=0;t<e.length;t++){OL(e,t)||(e[t]=null)}return e}function jL(e){const t=fL(null);for(const[r,n]of lL(e)){OL(e,r)&&(Array.isArray(n)?t[r]=BL(n):n&&"object"==typeof n&&n.constructor===Object?t[r]=jL(n):t[r]=n)}return t}function RL(e,t){for(;null!==e;){const r=hL(e,t);if(r){if(r.get)return IL(r.get);if("function"==typeof r.value)return IL(r.value)}e=uL(e)}return function(){return null}}const zL=gL(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),PL=gL(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),LL=gL(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),NL=gL(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),HL=gL(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),WL=gL(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),YL=gL(["#text"]),VL=gL(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),UL=gL(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),KL=gL(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),XL=gL(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qL=pL(/\{\{[\w\W]*|[\w\W]*\}\}/gm),GL=pL(/<%[\w\W]*|[\w\W]*%>/gm),ZL=pL(/\$\{[\w\W]*/gm),QL=pL(/^data-[\-\w.\u00B7-\uFFFF]+$/),JL=pL(/^aria-[\-\w]+$/),eN=pL(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),tN=pL(/^(?:\w+script|data):/i),rN=pL(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),nN=pL(/^html$/i),iN=pL(/^[a-z][.\w]*(-[.\w]+)+$/i);var oN=Object.freeze({__proto__:null,ARIA_ATTR:JL,ATTR_WHITESPACE:rN,CUSTOM_ELEMENT:iN,DATA_ATTR:QL,DOCTYPE_NAME:nN,ERB_EXPR:GL,IS_ALLOWED_URI:eN,IS_SCRIPT_OR_DATA:tN,MUSTACHE_EXPR:qL,TMPLIT_EXPR:ZL});const aN=1,sN=3,lN=7,cN=8,dN=9,uN=function(){return"undefined"==typeof window?null:window};var hN=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:uN();const r=t=>e(t);if(r.version="3.2.5",r.removed=[],!t||!t.document||t.document.nodeType!==dN||!t.Element)return r.isSupported=!1,r;let{document:n}=t;const i=n,o=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:h,DOMParser:g,trustedTypes:p}=t,f=c.prototype,m=RL(f,"cloneNode"),b=RL(f,"remove"),v=RL(f,"nextSibling"),y=RL(f,"childNodes"),x=RL(f,"parentNode");if("function"==typeof s){const e=n.createElement("template");e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let w,$="";const{implementation:C,createNodeIterator:S,createDocumentFragment:k,getElementsByTagName:D}=n,{importNode:T}=i;let E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};r.isSupported="function"==typeof lL&&"function"==typeof x&&C&&void 0!==C.createHTMLDocument;const{MUSTACHE_EXPR:O,ERB_EXPR:F,TMPLIT_EXPR:_,DATA_ATTR:M,ARIA_ATTR:I,IS_SCRIPT_OR_DATA:A,ATTR_WHITESPACE:B,CUSTOM_ELEMENT:j}=oN;let{IS_ALLOWED_URI:R}=oN,z=null;const P=AL({},[...zL,...PL,...LL,...HL,...YL]);let L=null;const N=AL({},[...VL,...UL,...KL,...XL]);let H=Object.seal(fL(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,Y=null,V=!0,U=!0,K=!1,X=!0,q=!1,G=!0,Z=!1,Q=!1,J=!1,ee=!1,te=!1,re=!1,ne=!0,ie=!1,oe=!0,ae=!1,se={},le=null;const ce=AL({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let de=null;const ue=AL({},["audio","video","img","source","image","track"]);let he=null;const ge=AL({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),pe="http://www.w3.org/1998/Math/MathML",fe="http://www.w3.org/2000/svg",me="http://www.w3.org/1999/xhtml";let be=me,ve=!1,ye=null;const xe=AL({},[pe,fe,me],SL);let we=AL({},["mi","mo","mn","ms","mtext"]),$e=AL({},["annotation-xml"]);const Ce=AL({},["title","style","font","a","script"]);let Se=null;const ke=["application/xhtml+xml","text/html"];let De=null,Te=null;const Ee=n.createElement("form"),Oe=function(e){return e instanceof RegExp||e instanceof Function},Fe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Te||Te!==e){if(e&&"object"==typeof e||(e={}),e=jL(e),Se=-1===ke.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,De="application/xhtml+xml"===Se?SL:CL,z=OL(e,"ALLOWED_TAGS")?AL({},e.ALLOWED_TAGS,De):P,L=OL(e,"ALLOWED_ATTR")?AL({},e.ALLOWED_ATTR,De):N,ye=OL(e,"ALLOWED_NAMESPACES")?AL({},e.ALLOWED_NAMESPACES,SL):xe,he=OL(e,"ADD_URI_SAFE_ATTR")?AL(jL(ge),e.ADD_URI_SAFE_ATTR,De):ge,de=OL(e,"ADD_DATA_URI_TAGS")?AL(jL(ue),e.ADD_DATA_URI_TAGS,De):ue,le=OL(e,"FORBID_CONTENTS")?AL({},e.FORBID_CONTENTS,De):ce,W=OL(e,"FORBID_TAGS")?AL({},e.FORBID_TAGS,De):{},Y=OL(e,"FORBID_ATTR")?AL({},e.FORBID_ATTR,De):{},se=!!OL(e,"USE_PROFILES")&&e.USE_PROFILES,V=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,K=e.ALLOW_UNKNOWN_PROTOCOLS||!1,X=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,q=e.SAFE_FOR_TEMPLATES||!1,G=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,re=e.RETURN_TRUSTED_TYPE||!1,J=e.FORCE_BODY||!1,ne=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,oe=!1!==e.KEEP_CONTENT,ae=e.IN_PLACE||!1,R=e.ALLOWED_URI_REGEXP||eN,be=e.NAMESPACE||me,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,$e=e.HTML_INTEGRATION_POINTS||$e,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Oe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Oe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),q&&(U=!1),te&&(ee=!0),se&&(z=AL({},YL),L=[],!0===se.html&&(AL(z,zL),AL(L,VL)),!0===se.svg&&(AL(z,PL),AL(L,UL),AL(L,XL)),!0===se.svgFilters&&(AL(z,LL),AL(L,UL),AL(L,XL)),!0===se.mathMl&&(AL(z,HL),AL(L,KL),AL(L,XL))),e.ADD_TAGS&&(z===P&&(z=jL(z)),AL(z,e.ADD_TAGS,De)),e.ADD_ATTR&&(L===N&&(L=jL(L)),AL(L,e.ADD_ATTR,De)),e.ADD_URI_SAFE_ATTR&&AL(he,e.ADD_URI_SAFE_ATTR,De),e.FORBID_CONTENTS&&(le===ce&&(le=jL(le)),AL(le,e.FORBID_CONTENTS,De)),oe&&(z["#text"]=!0),Z&&AL(z,["html","head","body"]),z.table&&(AL(z,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw _L('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw _L('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,$=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let r=null;const n="data-tt-policy-suffix";t&&t.hasAttribute(n)&&(r=t.getAttribute(n));const i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(p,o)),null!==w&&"string"==typeof $&&($=w.createHTML(""));gL&&gL(e),Te=e}},_e=AL({},[...PL,...LL,...NL]),Me=AL({},[...HL,...WL]),Ie=function(e){wL(r.removed,{element:e});try{x(e).removeChild(e)}catch(t){b(e)}},Ae=function(e,t){try{wL(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){wL(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{Ie(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Be=function(e){let t=null,r=null;if(J)e="<remove></remove>"+e;else{const t=kL(e,/^[\r\n\t ]+/);r=t&&t[0]}"application/xhtml+xml"===Se&&be===me&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(be===me)try{t=(new g).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=C.createDocument(be,"template",null);try{t.documentElement.innerHTML=ve?$:i}catch(e){}}const o=t.body||t.documentElement;return e&&r&&o.insertBefore(n.createTextNode(r),o.childNodes[0]||null),be===me?D.call(t,Z?"html":"body")[0]:Z?t.documentElement:o},je=function(e){return S.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Re=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},ze=function(e){return"function"==typeof l&&e instanceof l};function Pe(e,t,n){vL(e,(e=>{e.call(r,t,n,Te)}))}const Le=function(e){let t=null;if(Pe(E.beforeSanitizeElements,e,null),Re(e))return Ie(e),!0;const n=De(e.nodeName);if(Pe(E.uponSanitizeElement,e,{tagName:n,allowedTags:z}),e.hasChildNodes()&&!ze(e.firstElementChild)&&FL(/<[/\w!]/g,e.innerHTML)&&FL(/<[/\w!]/g,e.textContent))return Ie(e),!0;if(e.nodeType===lN)return Ie(e),!0;if(G&&e.nodeType===cN&&FL(/<[/\w]/g,e.data))return Ie(e),!0;if(!z[n]||W[n]){if(!W[n]&&He(n)){if(H.tagNameCheck instanceof RegExp&&FL(H.tagNameCheck,n))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(n))return!1}if(oe&&!le[n]){const t=x(e)||e.parentNode,r=y(e)||e.childNodes;if(r&&t){for(let n=r.length-1;n>=0;--n){const i=m(r[n],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,v(e))}}}return Ie(e),!0}return e instanceof c&&!function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});const r=CL(e.tagName),n=CL(t.tagName);return!!ye[e.namespaceURI]&&(e.namespaceURI===fe?t.namespaceURI===me?"svg"===r:t.namespaceURI===pe?"svg"===r&&("annotation-xml"===n||we[n]):Boolean(_e[r]):e.namespaceURI===pe?t.namespaceURI===me?"math"===r:t.namespaceURI===fe?"math"===r&&$e[n]:Boolean(Me[r]):e.namespaceURI===me?!(t.namespaceURI===fe&&!$e[n])&&!(t.namespaceURI===pe&&!we[n])&&!Me[r]&&(Ce[r]||!_e[r]):!("application/xhtml+xml"!==Se||!ye[e.namespaceURI]))}(e)?(Ie(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!FL(/<\/no(script|embed|frames)/i,e.innerHTML)?(q&&e.nodeType===sN&&(t=e.textContent,vL([O,F,_],(e=>{t=DL(t,e," ")})),e.textContent!==t&&(wL(r.removed,{element:e.cloneNode()}),e.textContent=t)),Pe(E.afterSanitizeElements,e,null),!1):(Ie(e),!0)},Ne=function(e,t,r){if(ne&&("id"===t||"name"===t)&&(r in n||r in Ee))return!1;if(U&&!Y[t]&&FL(M,t));else if(V&&FL(I,t));else if(!L[t]||Y[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&FL(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&FL(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&FL(H.tagNameCheck,r)||H.tagNameCheck instanceof Function&&H.tagNameCheck(r))))return!1}else if(he[t]);else if(FL(R,DL(r,B,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==TL(r,"data:")||!de[e]){if(K&&!FL(A,DL(r,B,"")));else if(r)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&kL(e,j)},We=function(e){Pe(E.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Re(e))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L,forceKeepAttr:void 0};let i=t.length;for(;i--;){const o=t[i],{name:a,namespaceURI:s,value:l}=o,c=De(a);let d="value"===a?l:EL(l);if(n.attrName=c,n.attrValue=d,n.keepAttr=!0,n.forceKeepAttr=void 0,Pe(E.uponSanitizeAttribute,e,n),d=n.attrValue,!ie||"id"!==c&&"name"!==c||(Ae(a,e),d="user-content-"+d),G&&FL(/((--!?|])>)|<\/(style|title)/i,d)){Ae(a,e);continue}if(n.forceKeepAttr)continue;if(Ae(a,e),!n.keepAttr)continue;if(!X&&FL(/\/>/i,d)){Ae(a,e);continue}q&&vL([O,F,_],(e=>{d=DL(d,e," ")}));const u=De(e.nodeName);if(Ne(u,c,d)){if(w&&"object"==typeof p&&"function"==typeof p.getAttributeType)if(s);else switch(p.getAttributeType(u,c)){case"TrustedHTML":d=w.createHTML(d);break;case"TrustedScriptURL":d=w.createScriptURL(d)}try{s?e.setAttributeNS(s,a,d):e.setAttribute(a,d),Re(e)?Ie(e):xL(r.removed)}catch(e){}}}Pe(E.afterSanitizeAttributes,e,null)},Ye=function e(t){let r=null;const n=je(t);for(Pe(E.beforeSanitizeShadowDOM,t,null);r=n.nextNode();)Pe(E.uponSanitizeShadowNode,r,null),Le(r),We(r),r.content instanceof a&&e(r.content);Pe(E.afterSanitizeShadowDOM,t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,o=null,s=null,c=null;if(ve=!e,ve&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ze(e)){if("function"!=typeof e.toString)throw _L("toString is not a function");if("string"!=typeof(e=e.toString()))throw _L("dirty is not a string, aborting")}if(!r.isSupported)return e;if(Q||Fe(t),r.removed=[],"string"==typeof e&&(ae=!1),ae){if(e.nodeName){const t=De(e.nodeName);if(!z[t]||W[t])throw _L("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)n=Be("\x3c!----\x3e"),o=n.ownerDocument.importNode(e,!0),o.nodeType===aN&&"BODY"===o.nodeName||"HTML"===o.nodeName?n=o:n.appendChild(o);else{if(!ee&&!q&&!Z&&-1===e.indexOf("<"))return w&&re?w.createHTML(e):e;if(n=Be(e),!n)return ee?null:re?$:""}n&&J&&Ie(n.firstChild);const d=je(ae?e:n);for(;s=d.nextNode();)Le(s),We(s),s.content instanceof a&&Ye(s.content);if(ae)return e;if(ee){if(te)for(c=k.call(n.ownerDocument);n.firstChild;)c.appendChild(n.firstChild);else c=n;return(L.shadowroot||L.shadowrootmode)&&(c=T.call(i,c,!0)),c}let u=Z?n.outerHTML:n.innerHTML;return Z&&z["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&FL(nN,n.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+u),q&&vL([O,F,_],(e=>{u=DL(u,e," ")})),w&&re?w.createHTML(u):u},r.setConfig=function(){Fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},r.clearConfig=function(){Te=null,Q=!1},r.isValidAttribute=function(e,t,r){Te||Fe({});const n=De(e),i=De(t);return Ne(n,i,r)},r.addHook=function(e,t){"function"==typeof t&&wL(E[e],t)},r.removeHook=function(e,t){if(void 0!==t){const r=yL(E[e],t);return-1===r?void 0:$L(E[e],r,1)[0]}return xL(E[e])},r.removeHooks=function(e){E[e]=[]},r.removeAllHooks=function(){E={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},r}();const gN=t=>i.forwardRef(((r,n)=>e(iL,Object.assign({forwardedRef:n},r,{children:t.length>0?t.map(((t,r)=>{if("text"===t.type){const n=t.otherAttributes,i=hN.sanitize(t.content);return e("p",Object.assign({},n,{dangerouslySetInnerHTML:{__html:i}}),r)}{const n=t.otherAttributes;return e(sL.Link,Object.assign({},n,{children:t.content}),r)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),pN=_.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,fN=_.div`
    display: flex;
    flex-direction: column;
`,mN=_.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${Ac["spacing-8"]};
`,bN=_(V$)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${Rc.MaxWidth.xs} {
            padding: 0 ${Ac["spacing-8"]};
        }
    }
`,vN=_(Nd.Small)`
    margin: ${Ac["spacing-32"]} 0;
`,yN=r=>{var{id:n,value:i=[],"data-testid":s,className:l,cooldownDuration:c,actionButtonProps:d,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:f,onCooldownEnd:m}=r,b=gt(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=d?d:{},{disabled:y,onClick:x,styleType:w="secondary"}=v,$=gt(v,["disabled","onClick","styleType"]),C=o([]),S=o(p),[k,D]=a(new Array(g).fill("")),[T,E]=a(c),[O,F]=a(new Date),[_]=a((()=>Ju.generate())),M=!!h,I=`${_}-error`,A=`${_}-timer`;u((()=>{var e;return null===(e=null==C?void 0:C.current[0])||void 0===e||e.focus(),document.addEventListener("paste",R),()=>document.removeEventListener("paste",R)}),[]),u((()=>{if(0!==c){f&&f();const e=L();return()=>e()}}),[O]),u((()=>{S.current=p}),[p]),u((()=>{i.length===g&&D(i)}),[i]);const B=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(z(n)){const t=[...k];t[e]=n.substring(n.length-1),null===(r=C.current[e+1])||void 0===r||r.focus(),D(t),p&&p(t)}},j=e=>t=>{var r,n,i;const{key:o,code:a}=t;if("Backspace"===o||"Backspace"===a){const t=[...k];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=C.current[e-1])||void 0===r||r.focus()),D(t),p&&p(t)}else"ArrowRight"===t.code?null===(n=C.current[e+1])||void 0===n||n.focus():"ArrowLeft"===t.code&&(null===(i=C.current[e-1])||void 0===i||i.focus())},R=e=>{if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),r=t.split("");t&&z(t,g)?(D(r),S.current&&S.current(r)):e.preventDefault()},z=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),P=()=>{const e=Date.now(),t=1e3*c;return e<O.valueOf()+t},L=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*c,n=Math.ceil((O.valueOf()+r-t)/1e3);E(n),n<=0&&(m&&m(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},N=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`,H=e=>`${e} second${1===e?"":"s"}`;return t(fN,{id:n,"data-testid":s,className:l,children:[e(mN,{role:"group","aria-label":`${g}-digit OTP input field`,children:k.map(((t,r)=>e(bN,Object.assign({id:N(r,"otp-input",n),"data-testid":N(r,"otp-input",s),"aria-label":`${eh.formatOrdinal(r+1)} digit`,"aria-invalid":M,"aria-describedby":M?I:void 0,ref:e=>C.current[r]=e,type:"text",inputMode:"numeric",value:t,error:M,onChange:B(r),onKeyDown:j(r),autoComplete:"off"},b),r)))}),h&&e(d$,{id:I,children:h}),t(pN,{role:"timer",id:A,children:[H(T)," remaining"]}),e(pN,{"aria-live":"polite",children:T>0?"":"Ready to resend OTP"}),e(vN,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{D(new Array(g).fill("")),P()||(F(new Date),E(c)),x&&x(e)},disabled:y||P()},$.children?{children:$.children}:{children:T>0?`Resend OTP in ${H(T)}`:"Resend OTP","aria-label":T>0?`Resend OTP in ${H(c)}`:"Resend OTP","aria-describedby":A}))]})},xN=_.nav`
    display: flex;
`,wN=_.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${Rc.MaxWidth.lg} {
        align-self: center;
    }
`,$N=_.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,CN=_(td)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Bc.sm};
    color: ${Fc["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Fc["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${Fc["bg-hover"]};
    }
`,SN=_(td)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Bc.sm};
    color: ${Fc["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Fc["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${Fc["bg-hover"]};
    }

    ${e=>"left"===e.$position?M`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:M`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${Rc.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,kN=_.button`
    background: ${e=>e.$selected?Fc["bg-primary"]:Fc.bg};
    border: ${Ic["width-010"]} ${Ic.solid}
        ${e=>M`
                ${e.$selected?Fc["bg-primary"]:Fc.border}
            `};
    color: ${e=>e.$selected?Fc["text-inverse"]:Fc.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${Bc.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?M`
                  ${_c["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${Fc["bg-selected-strongest-hover"]};
                      background-color: ${Fc["bg-selected-strongest-hover"]};
                      color: ${Fc["text-inverse"]};
                  }
              `:M`
                  ${_c["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${Fc["bg-hover"]};
                      background-color: ${Fc["bg-hover"]};
                      color: ${Fc["text-hover"]};
                      ${_c["body-baseline-semibold"]};
                  }
              `}
`;_(td)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Fc["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${Bc.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${Fc["icon-hover"]};
        }
    }
`;const DN=_.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${Bc.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,TN=_.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Fc.text};

    display: flex;
    justify-content: center;
`,EN=_(ad.BodyBL)`
    white-space: nowrap;
`,ON=_(ad.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,FN=_(V$)`
    ${_c["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${Bc.sm};
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${_c["body-xs-regular"]}
        }
    }
`,_N=_.div`
    ${_c["body-xs-regular"]}
    background-color: ${Fc["bg-hover"]};
    border: none;
    border-radius: ${Bc.sm};
    color: ${Fc["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,MN=_.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,IN=i.forwardRef((({id:r,"data-testid":n,className:i,pageSize:o=10,totalItems:s,activePage:l,pageSizeOptions:c=AN,showFirstAndLastNav:d,showPageSizeChanger:h=!1,onPageChange:g,onPageSizeChange:p},f)=>{const m=j(),b=jc["sm-max"]({theme:m}),v=bu.useMediaQuery({maxWidth:b}),[y,x]=a(!1),[w,$]=a(!1),[C,S]=a(""),[k,D]=a(c[0]),[T,E]=a(!v&&h&&k?k.value:o),O=Math.ceil(s/T),F=1===l,_=l===O,M=l>1?()=>N(1):void 0,I=l<O?()=>N(O):void 0,A=l>1?()=>N(l-1):void 0,B=l<O?()=>N(parseInt(l.toString())+1):void 0,R=e=>e?()=>X():()=>U(),z=e=>e?()=>q():()=>K();u((()=>{l&&P(l)}),[l]),u((()=>{E(o),D(c.find((e=>e.value===o)))}),[o]);const P=e=>{S(e.toString())},L=()=>{x(!1),$(!1)},N=e=>{g&&(g(e),P(e))},H=()=>{const e=Math.min(O,l+5);N(e),P(e),x(!0),$(!1)},W=()=>{const e=Math.max(1,l-5);N(e),P(e),x(!1),$(!0)},Y=e=>{const t=e.target.value;if(void 0===t||0===t.length)S("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));P(Math.max(1,Math.min(O,e)))}else S(t.replace(/[^0-9]/g,""))},V=e=>{e.preventDefault(),C&&(null==g||g(parseInt(C)))},U=()=>{x(!0)},K=()=>{x(!1)},X=()=>{$(!0)},q=()=>{$(!1)},G=(r,n,i)=>t(DN,{children:[e(CN,{focusHighlight:!1,focusOutline:"browser","aria-label":r?"Previous 5 pages":"Next 5 pages",onMouseOver:R(r),onMouseOut:z(r),onFocus:R(r),onBlur:z(r),onClick:r?W:H,children:e(r&&w?at:n&&y?st:dt,{"aria-hidden":!0})}),r&&w&&e(_N,{children:"Previous 5 pages"}),n&&y&&e(_N,{children:"Next 5 pages"})]},i);return t(xN,{className:i,ref:f,id:r||"pagination-wrapper","data-testid":n||"pagination","aria-label":"Pagination",children:[e(wN,{children:t($N,{children:[d&&e(SN,{onClick:M,disabled:F,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:e(lt,{"aria-hidden":!0})}),e(SN,{onClick:A,disabled:F,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:e(ye,{"aria-hidden":!0})}),v?t(TN,{children:[e("form",{onSubmit:V,children:e(FN,{value:C,onChange:Y,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(n||"pagination")+"-input"})}),e(ON,{children:"/"}),e(EN,{children:O})]}):[...Array(O)].map(((t,r)=>{const n=r+1,i=O-5,o=l===n;if(O<=7)return e(kN,{onClick:()=>N(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:L,onFocus:L,children:n},n);const a=l+1>5&&2===n,s=l-1<=i&&n===O-1-1;return a||s?G(a,s,n):n<=5&&l+1<=5||n<=1||n===l||n<=l+1&&n>=l-1-1||n>i&&l-1>i||n>O-1?e(kN,{onClick:()=>N(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:L,onFocus:L,children:n},n):null})),e(SN,{onClick:B,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:e(ve,{"aria-hidden":!0})}),d&&e(SN,{onClick:I,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:e(ct,{"aria-hidden":!0})})]})}),h&&!v&&e(MN,{children:e(EI,{options:c,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{D(e);const t=e.value,r=Math.ceil(s/t);E(t);p&&p(l>=r?r:l,t)}})})]})})),AN=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],BN=_.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${_c["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n;if("solid"===e.$type)switch(n=Fc["text-inverse"],e.$color){case"grey":t=Fc["bg-inverse-subtler"];break;case"green":t=Fc["bg-success-strong"];break;case"yellow":t=Fc["bg-warning-strong"];break;case"red":t=Fc["bg-error-strong"];break;case"blue":t=Fc["bg-info-strong"];break;default:t=Fc["bg-inverse"]}else switch(e.$color){case"grey":t=Fc["bg-stronger"],r=Fc["border-strong"],n=Fc["text-subtler"];break;case"green":t=Fc["bg-success"],r=Fc["border-success"],n=Fc["text-success"];break;case"yellow":t=Fc["bg-warning"],r=Fc["border-warning"],n=Fc["text-warning"];break;case"red":t=Fc["bg-error"],r=Fc["border-error"],n=Fc["text-error"];break;case"blue":t=Fc["bg-info"],r=Fc["border-info"],n=Fc["text-info"];break;default:t=Fc.bg,r=Fc.border,n=Fc.text}return M`
            background: ${t};
            border: ${Ic["width-010"]} ${Ic.solid} ${r};
            color: ${n};
        `}}
`,jN=_.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,RN=r=>{var{type:n,colorType:i="black",children:o,icon:a}=r,s=gt(r,["type","colorType","children","icon"]);return t(BN,Object.assign({$type:n,$color:i},s,{children:[a,e(jN,{children:o})]}))},zN=(e,t,r)=>t?kl(r,t)||kl(e,t):r||e,PN=(e,t)=>{const r=t||e.defaultValue;return kl(e.collections,r)};var LN;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(LN||(LN={}));const NN={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},HN=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=PN(NN,null==n?void 0:n[LN.colorScheme]);return n.options&&n.options.color?zN(i,e,n.options.color):zN(i,e)},WN={Brand:{1:HN("Brand.1"),2:HN("Brand.2"),3:HN("Brand.3"),4:HN("Brand.4"),5:HN("Brand.5"),6:HN("Brand.6")},Primary:HN("Primary"),PrimaryDark:HN("PrimaryDark"),Secondary:HN("Secondary"),Accent:{Light:{1:HN("Accent.Light.1"),2:HN("Accent.Light.2"),3:HN("Accent.Light.3"),4:HN("Accent.Light.4"),5:HN("Accent.Light.5"),6:HN("Accent.Light.6")},Dark:{1:HN("Accent.Dark.1"),2:HN("Accent.Dark.2"),3:HN("Accent.Dark.3")}},Neutral:{1:HN("Neutral.1"),2:HN("Neutral.2"),3:HN("Neutral.3"),4:HN("Neutral.4"),5:HN("Neutral.5"),6:HN("Neutral.6"),7:HN("Neutral.7"),8:HN("Neutral.8")},Validation:{Green:{Text:HN("Validation.Green.Text"),Icon:HN("Validation.Green.Icon"),Border:HN("Validation.Green.Border"),Background:HN("Validation.Green.Background")},Orange:{Text:HN("Validation.Orange.Text"),Icon:HN("Validation.Orange.Icon"),Border:HN("Validation.Orange.Border"),Background:HN("Validation.Orange.Background"),Badge:HN("Validation.Orange.Badge")},Red:{Text:HN("Validation.Red.Text"),Icon:HN("Validation.Red.Icon"),Border:HN("Validation.Red.Border"),Background:HN("Validation.Red.Background")},Blue:{Text:HN("Validation.Blue.Text"),Icon:HN("Validation.Blue.Icon"),Border:HN("Validation.Blue.Border"),Background:HN("Validation.Blue.Background")}},Shadow:{Accent:HN("Shadow.Accent"),Red:HN("Shadow.Red"),Elevation:HN("Shadow.Elevation")}},YN={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},VN={D1:{fontFamily:YN.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:YN.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:YN.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:YN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:YN.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:YN.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:YN.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:YN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:YN.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:YN.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:YN.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:YN.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:YN.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:YN.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},UN={D1:{fontFamily:YN.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:YN.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:YN.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:YN.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:YN.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:YN.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:YN.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:YN.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:YN.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:YN.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:YN.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:YN.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:YN.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:YN.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},KN={collections:{base:VN,oneservice:{D1:{fontFamily:YN.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:YN.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:YN.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:YN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:YN.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:YN.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:YN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:YN.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:YN.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:YN.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:YN.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:YN.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:YN.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:YN.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:UN},defaultValue:"base"},XN=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=PN(KN,null==n?void 0:n[LN.textStyleScheme]);return n.options&&n.options.textStyle?zN(i,e,n.options.textStyle):zN(i,e)},qN={D1:{fontFamily:XN("D1.fontFamily"),fontSize:XN("D1.fontSize"),fontWeight:XN("D1.fontWeight"),lineHeight:XN("D1.lineHeight"),letterSpacing:XN("D1.letterSpacing"),fontVariant:XN("D1.fontVariant")},D2:{fontFamily:XN("D2.fontFamily"),fontSize:XN("D2.fontSize"),fontWeight:XN("D2.fontWeight"),lineHeight:XN("D2.lineHeight"),letterSpacing:XN("D2.letterSpacing"),fontVariant:XN("D2.fontVariant")},D3:{fontFamily:XN("D3.fontFamily"),fontSize:XN("D3.fontSize"),fontWeight:XN("D3.fontWeight"),lineHeight:XN("D3.lineHeight"),letterSpacing:XN("D3.letterSpacing"),fontVariant:XN("D3.fontVariant")},D4:{fontFamily:XN("D4.fontFamily"),fontSize:XN("D4.fontSize"),fontWeight:XN("D4.fontWeight"),lineHeight:XN("D4.lineHeight"),letterSpacing:XN("D4.letterSpacing"),fontVariant:XN("D4.fontVariant")},DBody:{fontFamily:XN("DBody.fontFamily"),fontSize:XN("DBody.fontSize"),fontWeight:XN("DBody.fontWeight"),lineHeight:XN("DBody.lineHeight"),letterSpacing:XN("DBody.letterSpacing"),fontVariant:XN("DBody.fontVariant")},H1:{fontFamily:XN("H1.fontFamily"),fontSize:XN("H1.fontSize"),fontWeight:XN("H1.fontWeight"),lineHeight:XN("H1.lineHeight"),letterSpacing:XN("H1.letterSpacing"),fontVariant:XN("H1.fontVariant")},H2:{fontFamily:XN("H2.fontFamily"),fontSize:XN("H2.fontSize"),fontWeight:XN("H2.fontWeight"),lineHeight:XN("H2.lineHeight"),letterSpacing:XN("H2.letterSpacing"),fontVariant:XN("H2.fontVariant")},H3:{fontFamily:XN("H3.fontFamily"),fontSize:XN("H3.fontSize"),fontWeight:XN("H3.fontWeight"),lineHeight:XN("H3.lineHeight"),letterSpacing:XN("H3.letterSpacing"),fontVariant:XN("H3.fontVariant")},H4:{fontFamily:XN("H4.fontFamily"),fontSize:XN("H4.fontSize"),fontWeight:XN("H4.fontWeight"),lineHeight:XN("H4.lineHeight"),letterSpacing:XN("H4.letterSpacing"),fontVariant:XN("H4.fontVariant")},H5:{fontFamily:XN("H5.fontFamily"),fontSize:XN("H5.fontSize"),fontWeight:XN("H5.fontWeight"),lineHeight:XN("H5.lineHeight"),letterSpacing:XN("H5.letterSpacing"),fontVariant:XN("H5.fontVariant")},H6:{fontFamily:XN("H6.fontFamily"),fontSize:XN("H6.fontSize"),fontWeight:XN("H6.fontWeight"),lineHeight:XN("H6.lineHeight"),letterSpacing:XN("H6.letterSpacing"),fontVariant:XN("H6.fontVariant")},Body:{fontFamily:XN("Body.fontFamily"),fontSize:XN("Body.fontSize"),fontWeight:XN("Body.fontWeight"),lineHeight:XN("Body.lineHeight"),letterSpacing:XN("Body.letterSpacing"),fontVariant:XN("Body.fontVariant")},BodySmall:{fontFamily:XN("BodySmall.fontFamily"),fontSize:XN("BodySmall.fontSize"),fontWeight:XN("BodySmall.fontWeight"),lineHeight:XN("BodySmall.lineHeight"),letterSpacing:XN("BodySmall.letterSpacing"),fontVariant:XN("BodySmall.fontVariant")},XSmall:{fontFamily:XN("XSmall.fontFamily"),fontSize:XN("XSmall.fontSize"),fontWeight:XN("XSmall.fontWeight"),lineHeight:XN("XSmall.lineHeight"),letterSpacing:XN("XSmall.letterSpacing"),fontVariant:XN("XSmall.fontVariant")}},GN=[YN.OpenSans,YN.PlusJakartaSans],ZN=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},QN=(e,t)=>r=>{var n,i,o,a,s;const l=null===(i=(n=qN[e]).fontFamily)||void 0===i?void 0:i.call(n,r),c=null===(a=(o=qN[e]).fontWeight)||void 0===a?void 0:a.call(o,r),d=GN.find((e=>Object.values(e).includes(l)));return d?M`
                font-family: ${ZN(d,t)||ZN(d,c)||l};
                font-weight: normal !important;
            `:M`
            font-family: ${l};
            font-weight: ${null!==(s=JN(t)||c)&&void 0!==s?s:"normal"};
        `},JN=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},eH=e=>{if(e)return M`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},tH={getFontFamily:QN,getTextStyle:(e,t,r=!1)=>n=>{var i,o,a;const s=qN[e],l=(null===(i=s.fontSize)||void 0===i?void 0:i.call(s,n))||1;return M`
            ${QN(e,t)}
            font-size: ${l}rem !important;
            line-height: ${s.lineHeight}rem !important;
            letter-spacing: ${(null===(o=s.letterSpacing)||void 0===o?void 0:o.call(s,n))||0}rem !important;
            font-variant: ${(null===(a=s.fontVariant)||void 0===a?void 0:a.call(s,n))||"normal"};
            ${M`
                margin-bottom: ${l*(r?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,t=!1,r=void 0)=>t?M`
            display: block;
            ${eH(r)}
        `:e?M`
            display: inline;
        `:M`
            display: block;
            ${eH(r)}
        `};var rH;!function(e){e.D1=_.h1`
        ${e=>M`
                ${tH.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=_.h1`
        ${e=>M`
                ${tH.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=_.h1`
        ${e=>M`
                ${tH.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=_.h1`
        ${e=>M`
                ${tH.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=_.h1`
        ${e=>M`
                ${tH.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=_.h1`
        ${e=>M`
                ${tH.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=_.h2`
        ${e=>M`
                ${tH.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=_.h3`
        ${e=>M`
                ${tH.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=_.h4`
        ${e=>M`
                ${tH.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=_.h5`
        ${e=>M`
                ${tH.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=_.h6`
        ${e=>M`
                ${tH.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=_.p`
        ${e=>M`
                ${tH.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=_.p`
        ${e=>M`
                ${tH.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=_.span`
        ${e=>M`
                ${tH.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${WN.Neutral[1]};
                ${tH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>oH(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>oH(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(rH||(rH={}));const nH=_.a`
    ${e=>M`
            ${tH.getTextStyle(e.textStyle,e.weight)}
            color: ${WN.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${WN.Secondary};

                svg {
                    color: ${WN.Secondary};
                }
            }
        `}
`,iH=_(R)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,oH=r=>{var{external:n=!1,children:i}=r,o=gt(r,["external","children"]);return t(nH,Object.assign({},o,{children:[i,n&&e(iH,{})]}))},aH={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},sH=_.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?M`
            visibility: visible;
            opacity: 1;
            transition: ${aH.Base};
            z-index: 50;
        `:M`
            visibility: hidden;
            opacity: 0;
            transition: ${aH.Base};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return M`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return M`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return M`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return M`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return M`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return M`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${om.MaxWidth.mobileL} {
        display: none;
    }
`,lH=_(_m)`
    padding: 3.5rem 1.25rem 2.5rem;
`,cH=_.div`
    position: relative;
    width: fit-content;
`,dH=_.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,uH=_.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,hH=n=>{var{children:i,visible:s,onMobileClose:l}=n,c=gt(n,["children","visible","onMobileClose"]);const d=c["data-testid"]||"popover",[h,g]=a("none"),p=o(null),f=bu.useMediaQuery({maxWidth:nm.mobileL}),m=o(h);u((()=>(y(),window.addEventListener("resize",Kg(b,300)),()=>{window.removeEventListener("resize",Kg(b,300))})),[]);const b=()=>{y()},v=()=>{l&&l()},y=()=>{const e=x();var t;e&&(t=e,m.current=t,g(t))},x=()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},w=()=>"string"==typeof i?e(rH.BodySmall,{children:i}):i;return t(r,{children:[e(sH,Object.assign({ref:p,"data-testid":d,$visible:s,$offset:h},c,{children:e(yg,{children:w()})})),f&&e(Em,{show:null!=s&&s,onOverlayClick:v,children:e(lH,{onClose:v,children:e(uH,{children:w()})})})]})},gH=(r,n)=>i=>{const{onPopoverAppear:s,onPopoverDismiss:l}=i,c=gt(i,["onPopoverAppear","onPopoverDismiss"]),d=n.trigger||"click",h=c,[g,p]=a(!1),f=o(null),m=bu.useMediaQuery({maxWidth:nm.mobileL});u((()=>{if(!m)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[g]);const b=e=>{f&&!f.current.contains(e.target)&&(g&&p(!1),l&&l())};return t(cH,{id:"popover-hoc-wrapper",ref:f,children:[e(dH,{id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||m)&&(p(!g),!g&&s&&s(),g&&l&&l())},onMouseEnter:()=>{"hover"!==d||m||p(!0)},onMouseLeave:()=>{"hover"===d&&g&&!m&&p(!1)},"aria-label":"popover-button",children:e(r,Object.assign({},h))}),e(hH,{visible:g,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{p(!1)},children:n.content})]})},pH=_.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${Rc.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${Rc.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,fH=_.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,mH=_.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?Fc["bg-primary-subtle"]:Fc["bg-disabled"])(e)};\n        `}};
`,bH=_(ad.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?Fc["text-primary"]:Fc["text-disabled"])(e)};`}};
`,vH=_(ad.BodyMD)`
    overflow-wrap: anywhere;
    color: ${Fc.text};
`,yH=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var xH=function(e){return function(t){return null==e?void 0:e[t]}},wH=xH({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),$H=hl,CH=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,SH=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var kH=function(e){return(e=$H(e))&&e.replace(CH,wH).replace(SH,"")},DH=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var TH=function(e){return e.match(DH)||[]},EH=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var OH=function(e){return EH.test(e)},FH="\\ud800-\\udfff",_H="\\u2700-\\u27bf",MH="a-z\\xdf-\\xf6\\xf8-\\xff",IH="A-Z\\xc0-\\xd6\\xd8-\\xde",AH="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",BH="["+AH+"]",jH="\\d+",RH="["+_H+"]",zH="["+MH+"]",PH="[^"+FH+AH+jH+_H+MH+IH+"]",LH="(?:\\ud83c[\\udde6-\\uddff]){2}",NH="[\\ud800-\\udbff][\\udc00-\\udfff]",HH="["+IH+"]",WH="(?:"+zH+"|"+PH+")",YH="(?:"+HH+"|"+PH+")",VH="(?:['’](?:d|ll|m|re|s|t|ve))?",UH="(?:['’](?:D|LL|M|RE|S|T|VE))?",KH="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",XH="[\\ufe0e\\ufe0f]?",qH=XH+KH+("(?:\\u200d(?:"+["[^"+FH+"]",LH,NH].join("|")+")"+XH+KH+")*"),GH="(?:"+[RH,LH,NH].join("|")+")"+qH,ZH=RegExp([HH+"?"+zH+"+"+VH+"(?="+[BH,HH,"$"].join("|")+")",YH+"+"+UH+"(?="+[BH,HH+WH,"$"].join("|")+")",HH+"?"+WH+"+"+VH,HH+"+"+UH,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",jH,GH].join("|"),"g");var QH=TH,JH=OH,eW=hl,tW=function(e){return e.match(ZH)||[]};var rW=iI,nW=kH,iW=function(e,t,r){return e=eW(e),void 0===(t=r?void 0:t)?JH(e)?tW(e):QH(e):e.match(t)||[]},oW=RegExp("['’]","g");var aW=Xo(function(e){return function(t){return rW(iW(nW(t).replace(oW,"")),e,"")}}((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})));const sW=r=>{var{steps:n,currentIndex:i,displayExtractor:o,fadeColor:a,fadePosition:s}=r,l=gt(r,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=j(),d=jc["lg-max"]({theme:c}),u=bu.useMediaQuery({maxWidth:d}),h=e=>{var t;return o?o(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""},g=(e,t)=>aW(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!n.length)return null;return t(pH,Object.assign({},l,{children:[e(fH,{children:n.map(((t,r)=>{const n=r<=i;return e(yH,{id:g(r,i),children:e(mH,{highlighted:n})},r)}))}),e(fH,{children:u?t(yH,{id:g(i,i),children:[t(vH,{weight:"semibold",id:`${g(i,i)}-counter`,children:["Step ",i+1," of ",n.length]}),e(vH,{weight:"regular",id:`${g(i,i)}-title`,children:h(n[i])})]},i):n.map(((t,r)=>{const n=r<=i,o=r===i,a=o?"bold":"regular";return e(yH,{id:`${g(r,i)}-title`,children:e(bH,{highlighted:n,weight:a,"aria-current":o,children:h(t)})},r)}))})]}))},lW=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${e=>"small"===e.$displaySize?M`
                height: 1.5rem;
                width: 1.5rem;
            `:M`
                height: 2rem;
                width: 2rem;
            `}
    position: relative;
`,cW=_(le)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?Fc["icon-disabled-subtle"](e):Fc["icon-subtle"](e)};
    transition: ${Mc["duration-150"]} ${Mc["ease-default"]};
`,dW=_(ce)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?Fc["icon-selected-disabled"](e):Fc["icon-selected"](e)};

    transition: ${Mc["duration-150"]} ${Mc["ease-default"]};
`,uW=_.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${cW}, &:hover + ${dW} {
        color: ${e=>!e.disabled&&Fc["icon-hover"](e)};
    }
`,hW=r=>{var{className:n,checked:i,disabled:o,displaySize:a="default",onChange:s}=r,l=gt(r,["className","checked","disabled","displaySize","onChange"]);return t(lW,{$selected:i,$disabled:o,className:n,$displaySize:a,"data-testid":"radio-button",children:[e(uW,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{o||null==s||s(e)},checked:i,disabled:o},l)),i?e(dW,{"data-testid":"radio-checked",$disabled:o}):e(cW,{"data-testid":"radio-unchecked",$disabled:o})]})},gW=_.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,pW=_.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    background-color: ${Fc["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,fW=_(pW)`
    height: 100vh;
    left: 0;
    top: 0;
    ${Rc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,mW=_(pW)`
    display: none;
    visibility: hidden;
    ${Rc.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,bW=_(Uo.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${Fc["bg-primary-subtlest"]};
    border-top-right-radius: ${Bc.md};
    border-bottom-right-radius: ${Bc.md};
    border: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};

    ${e=>e.$showDrawer?M`
                  box-shadow: 0 0 4px
                      rgb(from ${Fc.Primitive["neutral-20"]} r g b / 25%);
              `:M`
                  border: 0;
                  padding: 0;
              `};
`,vW=_.li`
    width: 100%;
`,yW=_.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${Bc.md};
    color: ${Fc["icon-primary"]};
    transition: ${Mc["duration-250"]} ${Mc["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,xW=_(ad.BodyXS)`
    ${rd(2)}
    margin-top: 0.25rem;
    transition: ${Mc["duration-250"]} ${Mc["ease-default"]};
`,wW=_(Hp)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${yW} {
            background-color: ${Fc["bg-hover"]};
        }

        ${xW} {
            ${_c["body-xs-semibold"]}
            color: ${Fc["text-hover"]};
        }
    }

    ${e=>e.$highlight&&M`
            ${yW} {
                background-color: ${Fc["bg-hover"]};
            }

            ${xW} {
                ${_c["body-xs-semibold"]}
                color: ${Fc["text-selected"]};
            }
        `}
`,$W=$({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),CW=_.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,SW=_.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${Fc.border};
`,kW=_(Uo.li)``,DW=_(Hp)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Bc.md};

    ${_c["body-md-semibold"]}
    color: ${Fc.text};

    ${e=>e.$noChildren?M`
                  :hover,
                  :focus {
                      background: ${Fc["bg-hover"]};
                      color: ${Fc["text-hover"]};
                  }
              `:M`
                  :hover,
                  :focus {
                      background: ${Fc["bg-hover-strong"]};
                  }
              `}
`,TW=_(Uo.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,EW=_(F)`
    flex-shrink: 0;
    color: ${Fc.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${Mc["duration-150"]} ${Mc["ease-default"]};
`,OW=_.span`
    ${rd(2)}
    text-align: left;
`,FW=_(Uo.ul)``,_W=_.li``,MW=_(Hp)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Bc.md};

    ${_c["body-md-regular"]}
    color: ${Fc.text};
    ${rd(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${Fc["bg-hover"]};
        color: ${Fc["text-hover"]};
    }
`,IW=Object.assign((r=>{var{fixed:n=!0,children:i}=r,s=gt(r,["fixed","children"]);const l=o(null),[c,d]=a(void 0),[h,g]=a(void 0),[p,f]=a(void 0),[b,v]=a(!1),y=m((()=>({currentItem:c,selectedItem:h,previouslySelectedItemId:p,setCurrentItem:d,setSelectedItem:g,setPreviouslySelectedItemId:f})),[c,h,p,d,g,f]),x=Eo({width:b?240:0,borderRightWidth:b?1:0,borderTopWidth:b?1:0,borderBottomWidth:b?1:0,borderLeftWidth:0});return rh("click",(e=>{l.current&&!l.current.contains(e.target)&&(g({itemId:p||(h?h.itemId:void 0),content:void 0}),f(void 0),d(void 0))}),"window",!0),u((()=>{v(!!(null==h?void 0:h.content)||!!(null==c?void 0:c.content))}),[c,h]),e($W.Provider,{value:y,children:t(gW,Object.assign({$fixed:n},s,{ref:l,onMouseLeave:()=>{d(void 0)},children:[e(fW,{children:i}),e(bW,{style:x,$showDrawer:b,"data-testid":"sidenav-drawer",children:c&&c.content||h&&h.content}),e(mW,{})]}))})}),{Group:r=>{var{separator:n,children:i}=r,o=gt(r,["separator","children"]);return t(CW,Object.assign({},o,{children:[i,n&&e(SW,{"data-testid":"divider"})]}))},Item:r=>{var{children:n,icon:i,title:o,onClick:a}=r,s=gt(r,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:h,setCurrentItem:g,setPreviouslySelectedItemId:p,setSelectedItem:m}=f($W);u((()=>{s.selected&&m({itemId:l,content:void 0})}),[s.selected]);return e(vW,{children:t(wW,Object.assign({type:"button",onClick:()=>{p((()=>{if(n&&h)return d||h.itemId})()),g({itemId:l,content:n}),m({itemId:l,content:n}),a&&!n&&a(l)},onMouseEnter:()=>{g({itemId:l,content:n})}},s,{$highlight:!!h&&h.itemId===l||!!c&&c.itemId===l,children:[e(yW,{children:i}),e(xW,{children:o})]}))})},DrawerItem:r=>{var{id:n,title:i,onClick:o,children:s}=r,l=gt(r,["id","title","onClick","children"]);const[c,d]=a(!0),[u,h]=a(!1),{currentItem:g,setSelectedItem:p,setPreviouslySelectedItemId:m,setCurrentItem:b}=f($W),v=Eo({from:{opacity:0},to:{opacity:1}}),y=hr(),x=y.ref,w=Eo({height:s&&c?y.height:0});return t(kW,Object.assign({onMouseEnter:()=>{h(!0)},onMouseLeave:()=>{h(!1)}},l,{style:v,children:[t(DW,{type:"button",onClick:()=>{s?d(!c):(p({itemId:null==g?void 0:g.itemId,content:void 0}),b(void 0),m(void 0),o&&o(n))},$highlight:u&&c,$noChildren:!s,children:[e(OW,{children:i}),s&&e(EW,{"aria-hidden":!0,$expanded:c})]}),e(TW,{style:w,children:e(FW,{ref:x,children:s})})]}))},DrawerSubitem:t=>{var{id:r,title:n,onClick:i}=t,o=gt(t,["id","title","onClick"]);const{currentItem:a,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=f($W);return e(_W,Object.assign({},o,{children:e(MW,{type:"button",onClick:()=>{i&&i(r),s({itemId:null==a?void 0:a.itemId,content:void 0}),l(void 0),c(void 0)},children:n})}))}}),AW=e=>"red-filled"===e?"https://assets.life.gov.sg/react-design-system/img/singpass/singpass_red_filled.svg":"https://assets.life.gov.sg/react-design-system/img/singpass/singpass_white_filled.svg",BW=_.button`
    padding: ${Ac["spacing-8"]} ${Ac["spacing-16"]};
    transition: all ${Mc["duration-250"]} ${Mc["ease-default"]};
    border-radius: ${Ed};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    ${e=>"red-filled"===e.$buttonStyle?M`
                background-color: #f4333d;
                border: none;

                &:hover,
                &:active {
                    background-color: #b0262d;
                }
            `:M`
            background-color: ${Fc.Primitive.white};
            border: 1px #c8c9cc solid;

            &:hover,
            &:active {
                background-color: #f5f5f7;
            }
        `}

    ${e=>{switch(e.$buttonSizeStyle){case"small":return M`
                    height: 2.5rem;
                `;case"large":return M`
                    min-height: 4rem;
                `;default:return M`
                    min-height: 3rem;
                `}}}
`,jW=_.span`
    img {
        height: 100%;
    }

    height: ${e=>"large"===e.$buttonSizeStyle?2.5:1.5}rem;
`,RW=(t,r)=>{const{styleType:n="white-filled"}=t,i=gt(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"default"};return e(BW,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e(jW,{$buttonSizeStyle:"default",children:e("img",{src:AW(n),alt:""})})}))};RW.displayName="SingpassButton.Default";const zW=(t,r)=>{const{styleType:n="white-filled"}=t,i=gt(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"small"};return e(BW,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e(jW,{$buttonSizeStyle:"small",children:e("img",{src:AW(n),alt:""})})}))};zW.displayName="SingpassButton.Small";const PW=(t,r)=>{const{styleType:n="white-filled"}=t,i=gt(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"large"};return e(BW,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e(jW,{$buttonSizeStyle:"large",children:e("img",{src:AW(n),alt:""})})}))};PW.displayName="SingpassButton.Large";const LW={Default:i.forwardRef(RW),Small:i.forwardRef(zW),Large:i.forwardRef(PW)},NW=B`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,HW=_.div`
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
    background: ${Fc.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${Bc.md};
    ${e=>{if(e.$isAnimated)return M`
                animation: ${NW} 0.3s;
            `}}
`,WW=_.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,YW=_(td)`
    padding: 0;
`,VW=_(ze)`
    color: ${Fc.icon};
    height: 1.25rem;
    width: 1.25rem;
`,UW=_.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,KW=_.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${Rc.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,XW=_.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,qW=_.div`
    max-width: 30%;
`,GW=_(Nd.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${_c["body-xs-semibold"]}
    }
`,ZW=_(ad.BodySM)`
    font-weight: ${_c.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${Rc.MaxWidth.xs} {
        ${_c["body-xs-bold"]}
    }
`,QW=_(ad.BodyXS)`
    overflow-wrap: anywhere;
`,JW=_.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,eY=M`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,tY=_(Le)`
    ${eY}
`,rY=_(ut)`
    ${eY}
`,nY=_(Pe)`
    ${eY}
`,iY="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",oY="smart-app-banner";const aY=i.forwardRef((function(n,i){const{className:o,show:a,href:s,content:l,offset:c=0,icon:d=iY,animated:u=!1,onDismiss:h,onClick:g}=n,{title:p,message:f,buttonLabel:m,buttonAriaLabel:b,numberOfStars:v}=l,y=e=>{e.stopPropagation(),window.open(s,"_blank","noreferrer"),null==g||g()};return e(r,{children:a&&t(HW,{ref:i,$isAnimated:u,$offset:c,className:o,children:[e(WW,{onClick:h,id:`${oY}-dismiss`,"data-testid":`${oY}-dismiss-container`,children:e(YW,{"aria-label":"Dismiss",children:e(VW,{})})}),t(UW,{onClick:y,id:`${oY}-proceed`,"data-testid":`${oY}-proceed-container`,children:[e(XW,{src:d,alt:"lifesg-app-icon"}),t(KW,{children:[e(ZW,{children:p}),e(QW,{children:f}),(()=>{if(isNaN(v)||v<0)return;const t=[],r=v-Math.floor(v)>=.4;for(let r=0;r<Math.floor(v);r++)t.push(e(tY,{},`star${r}`));if(r&&t.push(e(rY,{},"halfstar")),t.length<5){const r=5-t.length;for(let n=0;n<r;n++)t.push(e(nY,{},`emptystar${n}`))}return e(JW,{children:t.slice(0,5)})})()]}),e(qW,{children:e(GW,{type:"button",onClick:y,"aria-label":b,children:m})})]})]})})})),sY=i.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),lY=_.div`
    position: relative;
    width: 100%;
`,cY=_.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const r="rgba(255,255,255,0.001)",n=Fc.bg(e);return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?`${n}, ${n}`:`${n}`)},\n                    ${r}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?`${n}, ${n}`:`${n}`)},\n                    ${r}\n                );\n            `,M`
            ${Rc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,dY=_.div`
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
`,uY=_(td)`
    display: none;

    ${Rc.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?M`
                    justify-content: left;
                    padding-left: ${Ac["spacing-8"]};
                `:M`
                    justify-content: right;
                    padding-right: ${Ac["spacing-8"]};
                `}

        svg {
            color: ${Fc.icon};
        }
    }
`,hY=g(((n,i)=>{var{children:s,fadeColor:l,fadePosition:c="both",showIndicator:d=!1,onResize:h}=n,g=gt(n,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[p,f]=a("left"===c||"both"===c),[m,v]=a("right"===c||"both"===c),y=o(null),x=o(null),w=Jg($,50);function $(){const e=y.current,t=x.current;e&&t&&t.scrollWidth>e.offsetWidth?(v(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),f(t.scrollLeft>=1)):(v(!1),f(!1))}function C(){$(),h&&h({content:x.current,wrapper:y.current})}hr({onResize:C,targetRef:y,refreshMode:"debounce",refreshRate:50}),b(i,(()=>({resize(){C()}}))),u((()=>{const e=x.current;return $(),e&&e.addEventListener("scroll",w),()=>{e&&e.removeEventListener("scroll",w)}}),[]);return t(lY,Object.assign({ref:y},g,{children:[e(dY,{ref:x,children:s}),(()=>{let n;return n=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(r,{children:[p&&e(cY,{$backgroundColor:n.left,$position:"left",$showIndicator:d,"data-id":"left-fade",children:d&&e(uY,{$position:"left","data-id":"left-fade-indicator-button",children:e(ye,{})})}),m&&e(cY,{$backgroundColor:n.right,$position:"right",$showIndicator:d,"data-id":"right-fade",children:d&&e(uY,{$position:"right","data-id":"right-fade-indicator-button",children:e(ve,{})})})]})})()]}))})),gY=_.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return M`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${Ic["width-040"]} ${Ic.solid}
                        ${Fc.border};
                }
            `}}
`,pY=_.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${Ic["width-040"]} ${Ic.solid} ${Fc.border};

    ${e=>{if(e.$width)return M`
                width: ${e.$width};
            `}}

    ${e=>{if(e.$active)return M`
                border-color: ${Fc["border-primary"]};
            `}}

    ${Rc.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,fY=_.button`
    position: relative;
    padding: ${Ac["spacing-16"]} ${Ac["spacing-16"]}
        ${Ac["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,mY=_(ad.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Fc["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return M`
                opacity: 0;
            `}}
`,bY=_(ad.BodyBL)`
    color: ${Fc["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return M`
                opacity: 1;
            `}}
`,vY=_(hY)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${Ac["spacing-4"]};
    }
`,yY=({controlledMode:r,"data-testid":n,onTabClick:i,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:c}=f(sY),d=j(),u=jc["md-max"]({theme:d}),h=bu.useMediaQuery({maxWidth:u}),g=jc["lg-max"]({theme:d}),p=o(null),m=e=>t=>{t.preventDefault(),r||s(e),i&&i(c[e].title,e)},b=e=>h&&e.length>20?`${e.substring(0,20)}...`:e;return e(vY,{onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=g&&p.current&&(e.scrollLeft=p.current.getBoundingClientRect().left)},"data-testid":n,children:e(gY,{role:"tablist",$fullWidthIndicatorLine:a,children:c.map(((r,i)=>{const o=l===i;return e(pY,{role:"none",$active:o,ref:o?p:null,$width:r.width,children:t(fY,{role:"tab",type:"button","aria-selected":o,onClick:m(i),"data-testid":`${n}-link-${i}`,children:[e(mY,{$active:o,weight:"regular",children:b(r.title)}),e(bY,{$active:o,weight:"semibold","aria-hidden":"true",children:b(r.title)})]})},i)}))})})},xY=_.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,wY=Object.assign((r=>{var{children:n,currentActive:i,initialActive:o=0,onTabClick:s,"data-testid":l,fullWidthIndicatorLine:d}=r,h=gt(r,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[g,p]=a(i||o),f=m((()=>S.toArray(n).filter(Boolean).map((e=>({title:e.props.title,width:e.props.width})))),[n]);u((()=>{"number"==typeof i&&p(i)}),[i]);return e(xY,Object.assign({"data-testid":l},h,{children:t(sY.Provider,{value:{tabLinks:f,currentActiveIndex:g,setCurrentActiveIndex:p},children:[e(yY,{controlledMode:"number"==typeof i,onTabClick:s,"data-testid":`${l}-tabs`,fullWidthIndicatorLine:d}),S.toArray(n).filter(Boolean).map(((e,t)=>c(e,{key:t,index:t})))]})}))}),{Item:t=>{var{index:r,children:n}=t,i=gt(t,["index","children"]);const{currentActiveIndex:o}=f(sY);return o===r?e("div",Object.assign({role:"tabpanel"},i,{children:n})):null}}),$Y=_.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${_c["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n,i,o;if("solid"===e.$type)switch(n=Fc["text-inverse"],e.$color){case"grey":t=Fc["bg-inverse-subtler"],i=Fc["bg-inverse-hover"];break;case"green":t=Fc["bg-success-strong"],i=Fc["bg-success-strong-hover"];break;case"yellow":t=Fc["bg-warning-strong"],i=Fc["bg-warning-strong-hover"];break;case"red":t=Fc["bg-error-strong"],i=Fc["bg-error-strong-hover"];break;case"blue":t=Fc["bg-info-strong"],i=Fc["bg-info-strong-hover"];break;default:t=Fc["bg-inverse"],i=Fc["bg-inverse-hover"]}else switch(e.$color){case"grey":t=Fc["bg-strong"],r=Fc["border-strong"],n=Fc["text-subtle"],i=Fc["bg-hover-neutral-strong"];break;case"green":t=Fc["bg-success"],r=Fc["border-success"],n=Fc["text-success"],i=Fc["bg-success-hover"];break;case"yellow":t=Fc["bg-warning"],r=Fc["border-warning"],n=Fc["text-warning"],i=Fc["bg-warning-hover"];break;case"red":t=Fc["bg-error"],r=Fc["border-error"],n=Fc["text-error"],i=Fc["bg-error-hover"];break;case"blue":t=Fc["bg-info"],r=Fc["border-info"],n=Fc["text-info"],i=Fc["bg-info-hover"];break;default:t=Fc.bg,r=Fc.border,n=Fc.text,i=Fc["bg-hover-neutral"]}return M`
            background: ${t};
            border: ${Ic["width-010"]} ${Ic.solid} ${r};
            color: ${n};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&i&&`background: ${i(e)};`}
                    ${e.$interactive&&o}
                }
            }
        `}}

    ${Rc.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return M`
                    ${_c["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,CY=_.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,SY=r=>{var{type:n,colorType:i="black",children:o,interactive:a=!1,icon:s,iconPosition:l="left"}=r,c=gt(r,["type","colorType","children","interactive","icon","iconPosition"]);return t($Y,Object.assign({as:a?"button":"div",$type:n,$color:i,$interactive:a},c,{children:["left"===l&&s,e(CY,{children:o}),"right"===l&&s]}))};var kY;Iu.extend(Bu),function(e){e.formatHourlyDisplay=e=>Iu(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>Zu.getTimeDiffInMinutes(e,t)/15*(r/2)}(kY||(kY={}));const DY=1.25,TY=e=>"minified"===e?12:40,EY=e=>"minified"===e?12:40,OY=_.div`
    position: relative;
    display: flex;
    align-items: center;
`,FY=_(td)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${Fc.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${Fc.Primitive["neutral-50"]} r g b / 50%);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?M`
                  right: 0;
              `:M`
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
`,_Y=_(ve)`
    width: 1rem;
    height: 1rem;
    color: ${Fc["icon-primary"]};
`,MY=_(ye)`
    font-size: 1rem;
    color: ${Fc["icon-primary"]};
`,IY=_.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+EY(e)}px`};
`,AY=_.div`
    position: relative;
    white-space: nowrap;
    height: ${DY}rem;
`,BY=_.div`
    display: flex;
    white-space: nowrap;
`,jY=_.div`
    display: inline-block;
    width: ${({$variant:e})=>`${TY(e)}px`};
    position: relative;
    border-left: ${Ic["width-010"]} ${Ic.solid}
        ${Fc["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?DY:.625;break;case"minified":t=e.$isLongMarker?DY:0;break;default:t=0}return M`
            height: ${t}rem;
        `}}
`,RY=_(ad.BodyXS)`
    color: ${Fc["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,zY=_.div`
    ${e=>"vertical"===e.$type?M`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:M`
                position: absolute;
                height: ${EY(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&M`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||Fc["bg-strongest"]} 0px,
                ${e.$bgColor2||Fc["bg-strongest"]} 10px,
                ${e.$bgColor||Fc["bg-stronger"]} 10px,
                ${e.$bgColor||Fc["bg-stronger"]} 20px
            );
        `}
`,PY=_.div`
    position: absolute;
    top: ${DY}rem;
    height: ${({$variant:e})=>`${EY(e)}px`};
    z-index: 1;
    border-right: ${Ic["width-010"]} ${Ic.solid}
        ${Fc["border-stronger"]};
`,LY=_(ad.BodyXS)`
    color: ${e=>e.$color||Fc.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,NY=({"data-testid":n,className:i,variant:s="default",startTime:l,endTime:c,slots:d,onSlotClick:h,onClick:g,styleAttributes:p})=>{const f=o(null),[m,b]=a(0),[v,y]=a(0),x=TY(s),w=2.5*x;u((()=>{const e=f.current;return e&&e.addEventListener("scroll",$),()=>{e&&e.removeEventListener("scroll",$)}}),[]);const $=()=>{f.current&&b(f.current.scrollLeft)},C=e=>{f.current&&f.current.scrollBy({left:"left"===e?-w:w,behavior:"smooth"})};hr({onResize:()=>{f.current&&y(f.current.clientWidth)},targetRef:f,refreshMode:"debounce",refreshRate:50});const S=e=>e<=x/2,k=e=>{if(n)return`${n}-${e}`},D=(e,t,r)=>{const n=0===e.minute();if("default"===r)return n;return n&&(t?e.hour()%2==0:e.hour()%2==1)};return t(OY,{className:i,children:[t(IY,{"data-testid":n,ref:f,$variant:s,children:[e(AY,{"data-testid":k("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const t=[],r=Iu(l,"HH:mm"),n=Iu(c,"HH:mm"),i=r.hour()%2==0;for(let o=r;o.isBefore(n);o=o.add(30,"minute")){const r=D(o,i,s);t.push(e(jY,{$isLongMarker:r,$variant:s,children:r&&e(RY,{weight:"semibold",children:kY.formatHourlyDisplay(o.format("HH:mm"))})},o.format("HH:mm")))}return t})()}),t(BY,{"data-testid":k("time-slot-wrapper"),"data-id":"slot-wrapper",children:[(()=>{if(!p)return;const{backgroundColor:n,backgroundColor2:i,styleType:o="default"}=p,a=kY.calculateWidth(l,c,x),d=!!g&&"default"===s;return t(r,{children:[e(PY,{$variant:s}),e(zY,{"data-testid":k("default-timeslot"),$width:a,$variant:s,$left:0,$styleType:o,$bgColor:n,$bgColor2:i,$clickable:d,onClick:d?g:void 0},"default-timeslot")]})})(),d.map((r=>{const{id:n,startTime:i,endTime:o,label:a,clickable:d=!0,styleAttributes:u}=r,{color:g,styleType:p="default",backgroundColor:f,backgroundColor2:m}=u,b=kY.calculateWidth(i,o,x),v=kY.calculateWidth(l,i,x),y=d&&"default"===s;return t("div",{children:[e(PY,{$variant:s,style:{left:`${v}px`}}),e(zY,{"data-testid":k(`${n}-timeslot`),$width:b,$left:v,$styleType:p,$variant:s,$bgColor:f,$bgColor2:m,$clickable:y,onClick:()=>y&&h(r),children:a&&"default"===s&&e(LY,{$slotWidth:b,$color:g,weight:"semibold",children:S(b)?"...":a})}),c!==o&&e(PY,{$variant:s,style:{left:`${v+b}px`}})]},n)}))]})]}),e(r,{children:m>0&&e(FY,{"data-testid":k("arrow-left"),$direction:"left",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("left")},children:e(MY,{})})}),m+v<kY.calculateWidth(l,c,x)?e(FY,{"data-testid":k("arrow-right"),$direction:"right",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("right")},children:e(_Y,{})}):e(r,{})]})},HY=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${Ac["spacing-8"]};
    flex: 1;
`,WY=_(ad.BodyXS)`
    ${e=>e.$disabled&&M`
            color: ${Fc["text-disabled-subtlest"]};
        `}
`,YY=_.div`
    grid-column: 2 / -1;
    display: flex;
`,VY=_.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${Ac["spacing-4"]};
`,UY=_(Uo.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,KY=_.div`
    display: flex;
    gap: ${Ac["spacing-4"]};
    transition: all ${Mc["duration-250"]} ${Mc["ease-default"]};
    overflow: hidden;
`,XY=_.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${Ac["spacing-4"]};
    width: 1.375rem;
    transition: all ${Mc["duration-250"]} ${Mc["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,qY=_.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,GY=_.div`
    ${_c["body-xs-bold"]}
    color: ${Fc["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${_c.Spec["body-size-sm"]};
    }
`,ZY=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${Ac["spacing-4"]};
`,QY=_.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${Ac["spacing-8"]};
`,JY=_(Nd.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${Ac["spacing-8"]};
    }
`,eV=_(de)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${Mc["duration-250"]} ${Mc["ease-default"]};
`,tV=_(zY)`
    ${e=>{if("vertical"===e.$type)return M`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${Bc.xs};
            `}}

    ${e=>e.$halfFill?M`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${Fc["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||Fc["bg-strongest"]} 0px,\n                            ${e.$bgColor2||Fc["bg-strongest"]} 10px,\n                            ${e.$bgColor||Fc["bg-stronger"]} 10px,\n                            ${e.$bgColor||Fc["bg-stronger"]} 20px\n                        )`};
            `:M`
                background-color: ${e.$bgColor};
            `}
`;var rV=ma;var nV=function(e,t,r){for(var n=-1,i=e.length;++n<i;){var o=e[n],a=t(o);if(null!=a&&(void 0===s?a==a&&!rV(a):r(a,s)))var s=a,l=o}return l};var iV=nV,oV=oD,aV=function(e,t){return e<t};var sV=Xo((function(e,t){return e&&e.length?iV(e,oV(t),aV):void 0}));var lV=nV,cV=function(e,t){return e>t},dV=oD;var uV=Xo((function(e,t){return e&&e.length?lV(e,dV(t),cV):void 0}));const hV=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:s,maxDate:l,startTime:c,endTime:d,maxVisibleCellHeight:u,slots:h,interval:g=30,variant:p="flexible",enableSelection:f=!0,onSlotClick:b})=>{var v,y,x,w;const $="YYYY-MM-DD",[C,S]=a(!1),[k,D]=a(),T=m((()=>Vu.generateDaysForCurrentWeek(r)),[r]),E=Object.values(null!=h?h:{}).flat(),O=null!==(y=null!=c?c:null===(v=sV(E,"startTime"))||void 0===v?void 0:v.startTime)&&void 0!==y?y:"00:00",F=null!==(w=null!=d?d:null===(x=uV(E,"endTime"))||void 0===x?void 0:x.endTime)&&void 0!==w?w:"24:00",_=Math.ceil(Zu.getTimeDiffInMinutes(O,F)/g),{height:M=0,ref:I}=hr(),A=u?M<u||C?M:u:M,B=Eo({height:A}),j=m((()=>{if(h){const e={};return Object.entries(h).forEach((([t,r])=>{const n=function(e){const t=Array(_).fill({});return e.forEach((e=>{const r=Math.max(0,Zu.getTimeDiffInMinutes(O,e.startTime)/g),n=Math.min(_,Zu.getTimeDiffInMinutes(O,e.endTime)/g),i=Math.ceil(n)-Math.floor(r);switch(p){case"fixed":t[Math.floor(r)]=Object.assign(Object.assign({},e),{cellLength:n-r});break;case"flexible":for(let o=0;o<i;o++){const a=Zu.addMinutesToTime(O,Math.floor(r+o)*g),s=Zu.addMinutesToTime(a,g);let l;LM(t[Math.floor(r+o)])?0===o&&r%1!=0?l="top":o===i-1&&n%1!=0&&(l="bottom"):l=void 0,t[Math.floor(r+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(r);e[t]=function(e){var t,r,n,i;let o=0;switch(p){case"fixed":for(e=e.reduce(((e,t)=>{const r=e.length>0?e[e.length-1]:e[0];return LM(t)&&LM(r)?e:[...e,t]}),[{}]);o<e.length;){if(LM(e[o])){const a=null!==(r=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==r?r:O,s=null!==(i=null===(n=e[o+1])||void 0===n?void 0:n.startTime)&&void 0!==i?i:F;if(a!==s){const t=Zu.getTimeDiffInMinutes(a,s)/g;e[o]=Object.assign(Object.assign({},N(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)LM(e[o])?(e[o]=N(o),o++):o+=e[o].cellLength}return e.filter((e=>!LM(e)&&e.cellLength>0))}(n)})),e}return{}}),[h]),R=e=>{D(e)},z=()=>{D(void 0)},P=e=>{e.preventDefault(),S((e=>!e))},L=e=>{var t;const r=Vu.isWithinRange(e,s?Iu(s):void 0,l?Iu(l):void 0),i=null!==(t=n&&n.includes(e.format($)))&&void 0!==t&&t;return!r||i};function N(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:Fc["bg-stronger"]},cellLength:t}}return t(VY,{children:[e(YY,{children:T.map(((t,r)=>{const n=(e=>{const t=e.format($),r=L(e),n={},o=f&&!r;r&&(n.disabled=!0),n.interactive=f?o:null;const a=o&&k&&e.isSame(k,"day"),s=[i].includes(t);return s&&a?(n.labelType="selected-hover",n.circleLeft="selected-hover-outline",n.circleRight="selected-hover-outline"):s?(n.labelType="selected",n.circleLeft="selected-outline",n.circleRight="selected-outline"):a&&(n.labelType="hover",n.circleLeft="hover-subtle",n.circleRight="hover-subtle"),n})(t);return e(ig,Object.assign({date:t,calendarDate:Iu(i),onSelect:()=>{((e,t)=>{!t&&f&&o(e)})(t,!n.interactive)},onHover:R,onHoverEnd:z},n),`day-${r}`)}))}),e(YY,{children:T.map(((t,r)=>e(HY,{children:e(WY,{weight:"semibold",$disabled:L(t),children:Iu(t).format("ddd")})},`week-day-${r}`)))}),(()=>{let t=!1;const r=e=>{const r=Iu(O,"HH:mm").add(4*e*g,"minutes"),n=r.format("h"),i=r.format("mm"),o=r.format("a");let a=`${n}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e(XY,{$height:A,children:Array(Math.ceil(_/4)).fill(void 0).map(((t,n)=>e(qY,{children:e(GY,{children:r(n)})},`time-${n}`)))})})(),e(UY,{style:B,children:e(KY,{ref:I,children:T.map(((t,r)=>{var n;const i=t.format($),o=null!==(n=j[i])&&void 0!==n?n:Array("flexible"===p?_:1).fill(void 0).map(((e,t)=>N(t,"fixed"===p?_:void 0)));return e(ZY,{children:o.map((t=>{const{id:r,clickable:n=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e(tV,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:n,$height:"fixed"===p?12*a+4*(a-1):12,onClick:()=>n&&((e,t)=>{b&&b(e,t)})(i,t)},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format($)}`)}),(()=>{if(u&&I.current&&!(M&&M<u))return e(QY,{children:t(JY,{"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:P,children:[e(eV,{$isExpanded:C}),(C?"Hide":"Show")+" later times"]})})})()]})},gV=_.div`
    --header-bottom-spacing: 0.5rem;

    ${Rc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,pV="YYYY-MM-DD",fV=t=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:i,value:s,minDate:l,maxDate:c,startTime:d,endTime:h,slots:g,interval:p,variant:f,maxVisibleCellHeight:m,showNavigationHeader:b=!0,enableSelection:v,onSlotClick:y,currentCalendarDate:x}=t,w=gt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[$,C]=a(s),S=o(null),k=o(void 0);u((()=>{C(s)}),[s]);const D=e=>{const t=e.format(pV);C(t),i&&i(t)},T=(e,t)=>{y&&y(e,t)},E=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format(pV),lastDayOfWeek:e.endOf("week").format(pV)},month:e.month()+1,year:e.year()};n(t)}};return e(gV,Object.assign({},w,{children:e(Wh,{ref:S,dynamicHeight:!0,initialCalendarDate:Zu.toDayjs($||x).endOf("week").format(pV),selectedStartDate:$,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!l&&Iu(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>!!c&&Iu(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{k.current&&k.current.isSame(e,"week")||E(e),k.current=e},showNavigationHeader:b,minDate:l,maxDate:c,getMonthHeaderLabel:e=>Iu(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Iu(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>(t=>e(hV,{calendarDate:t,disabledDates:r,selectedDate:$,minDate:l,maxDate:c,startTime:d,endTime:h,onSelect:D,slots:g,interval:p,variant:f,maxVisibleCellHeight:m,enableSelection:v,onSlotClick:T}))(t)})}))},mV=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,bV=_.div`
    ${_c["body-xs-semibold"]}
    color:${Fc.text};

    ${e=>e.$disabled&&M`
            color: ${Fc["text-disabled-subtlest"]};
        `};
`,vV=_.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,yV=_.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,xV=_.div`
    ${_c["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${Fc.text};
    span {
        display: block;
    }
`,wV=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;Iu.extend(Ru);const $V="YYYY-MM-DD",CV={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:Fc["bg-stronger"],backgroundColor2:Fc["bg-strongest"]}},SV=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:s,maxDate:l,slots:c,enableSelection:d=!0,onSlotClick:u})=>{const h=m((()=>Vu.generateDaysForCurrentWeek(r)),[r]),[g,p]=a(),f=e=>{p(e)},b=()=>{p(void 0)},v=e=>{const t=e.format($V),r=(e=>{const t=Vu.isWithinRange(e,s?Iu(s):void 0,l?Iu(l):void 0),r=!!n&&n.includes(e.format($V));return!t||r})(e),o=d&&!r,a=o&&g&&e.isSame(g,"day"),c=[i].includes(t),u={labelType:"available",interactive:d?o:null};return r&&(u.disabled=!0,u.labelType="unavailable"),c&&a?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):c?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):a&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return t(vV,{children:[h.map(((r,n)=>{const a=v(r);return t(mV,{children:[e(ig,Object.assign({date:r,calendarDate:Iu(i),onSelect:()=>{((e,t)=>{!t&&d&&o(e)})(r,!a.interactive)},onHover:f,onHoverEnd:b},a),`day-${n}`),e(bV,{$disabled:a.disabled,children:Iu(r).format("ddd")})]},`week-day-${n}`)})),e(yV,{children:h.map(((r,n)=>{const i=r.format($V),o=c&&(c[i]?c[i]:[CV]);return e(wV,{children:o&&o.map((r=>{const{id:n,startTime:o,endTime:a,clickable:s=!0,styleAttributes:l}=r,{color:c,styleType:d="default",backgroundColor:h,backgroundColor2:g}=l;return e(zY,{$type:"vertical",$variant:"default",$styleType:d,$bgColor:h,$bgColor2:g,$clickable:s,onClick:()=>s&&((e,t)=>{null==u||u(e,t)})(i,r),children:t(xV,{style:{color:c},children:[e("span",{children:Vu.convertTo12HourFormat(o)}),a&&o&&e("span",{children:"-"}),e("span",{children:Vu.convertTo12HourFormat(a)})]})},n)}))},`wrapper-${n}`)}))},`week-cell-${r.format($V)}`)]})},kV=_.div`
    --header-bottom-spacing: 0.5rem;

    ${Rc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,DV="YYYY-MM-DD",TV=t=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:i,value:s,minDate:l,maxDate:c,slots:d,showNavigationHeader:h=!0,enableSelection:g,onSlotClick:p,currentCalendarDate:f}=t,m=gt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[b,v]=a(s),y=o(null),x=o(void 0);u((()=>{v(s)}),[s]);const w=e=>{const t=e.format(DV);v(t),i&&i(t)},$=(e,t)=>{p&&p(e,t)},C=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format(DV),lastDayOfWeek:e.endOf("week").format(DV)},month:e.month()+1,year:e.year()};n(t)}};return e(kV,Object.assign({},m,{children:e(Wh,{ref:y,dynamicHeight:!0,initialCalendarDate:Zu.toDayjs(b||f).endOf("week").format(DV),selectedStartDate:b,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!l&&Iu(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>!!c&&Iu(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"week")||C(e),x.current=e},showNavigationHeader:h,minDate:l,maxDate:c,getMonthHeaderLabel:e=>Iu(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Iu(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>e(SV,{calendarDate:t,disabledDates:r,selectedDate:b,minDate:l,maxDate:c,onSelect:w,slots:d,enableSelection:g,onSlotClick:$})})}))},EV=_.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return M`
                    background-color: ${Fc["icon-primary-subtle"]};
                `;case"upcoming-active":return M`
                    border: 4px solid ${Fc["icon-primary-subtle"]};
                `;case"upcoming-inactive":return M`
                    border: 4px solid ${Fc["icon-subtle"]};
                `;case"disabled":return M`
                    background-color: ${Fc["icon-disabled-subtle"]};
                `;case"completed":return M`
                    background-color: ${Fc["icon-success"]};
                    svg {
                        color: ${Fc["icon-inverse"]};
                    }
                `;case"error":return M`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Fc["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,OV=_.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return M`
                    background-color: ${Fc["icon-primary-subtle"]};
                `;case"upcoming-inactive":return M`
                    background-color: ${Fc["icon-subtle"]};
                `;case"disabled":return M`
                    background-color: ${Fc["icon-disabled-subtle"]};
                `;case"completed":return M`
                    background-color: ${Fc["icon-success"]};
                `;case"error":return M`
                    margin-left: -0.15rem;
                    background-color: ${Fc["icon-error"]};
                `}}}
`,FV=_.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,_V=_.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${Rc.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${Rc.MaxWidth.sm} {
        grid-column: span 8;
    }
`,MV=_(ad.HeadingSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${Rc.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`,IV=_(ad.HeadingXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,AV=_.div`
    display: flex;

    :last-of-type ${OV} {
        margin-bottom: 0;
    }
`,BV=_.div`
    margin-bottom: 2rem;
    width: 100%;
`,jV=_.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,RV=_(RN)`
    padding: 0.125rem 0.5rem;
`,zV=({items:n,className:i,id:o,title:a,startCol:s,colSpan:l,"data-base-indicator-testid":c,"data-testid":d="timeline"})=>{const u=t=>"string"==typeof t?e(ad.BodyMD,{className:"timeline-item-content-text",children:t}):e(r,{children:t}),h=t=>"string"==typeof t?e(IV,{weight:"semibold",className:"timeline-item-title",children:t}):e(r,{children:t}),g=e=>e.slice(0,2).map(((e,t)=>k(RV,Object.assign({},e,{type:e.type,key:`status-pill-${t}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),p=t=>{switch(t){case"completed":return e(he,{});case"error":return e(ue,{});default:return null}};return t(_V,{className:i,id:o,"data-testid":d,$startCol:s,$colSpan:l,children:[e(MV,{"data-testid":"timeline-title",weight:"bold",children:a}),n.map(((r,n)=>{const{title:i,content:o,statuses:a,variant:s}=r,l=s||(0===n?"current":"upcoming-active");return t(AV,{children:[t(FV,{children:[e(EV,{"data-testid":c?`circleindicator${n+1}_div_${c}`:"circleindicator",$variant:l,children:p(l)}),e(OV,{$variant:l})]}),t(BV,{className:"timeline-item-content",children:[h(i),a&&e(jV,{children:g(a)}),u(o)]})]},`timeline-item-${n}`)}))]})},PV=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],LV=15,NV=252,HV=["#FFF2DD","#EBF7F5","#F2F4FE","#FCF1F2","#E9F6FD"],WV=B`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,YV=_(Pf)`
    color: ${Fc.icon};
    svg {
        ${e=>{if(e.$loading)return M`
                    animation: ${WV} 4s linear infinite;
                `}}
    }
`,VV=_.div`
    display: flex;
    padding-bottom: ${Ac["spacing-16"]};
    justify-content: space-between;
    gap: ${Ac["spacing-8"]};
`,UV=_.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${Ac["spacing-8"]};
`,KV=_(ad.BodySM)`
    color: ${Fc["text-subtler"]};
`,XV=_(Wf)`
    width: 400px;
`,qV=n=>{var{selectedDate:i,loading:o,tableContainerRef:a,totalRecords:s,onPreviousDayClick:l,onNextDayClick:c,onRefresh:d,onCalendarDateSelect:u}=n,h=gt(n,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const g=()=>{a.current&&(a.current.scrollTop=0)},p=()=>{d&&(g(),d())};return t(VV,{children:[e(XV,Object.assign({selectedDate:i,loading:o},h,{onRightArrowClick:e=>{g(),c(e)},onLeftArrowClick:e=>{g(),l(e)},onCalendarDateSelect:u})),void 0===s?e(r,{}):t(UV,{children:[t(KV,{"data-testid":"timetable-records-results",weight:"semibold",children:[s," results found"]}),d&&e(YV,{"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:o,onClick:p,$loading:o,children:e(ge,{})})]})]})},GV=_.div`
    display: flex;
    width: 100%;
`,ZV=_.div`
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    ${e=>{if(e.$isOnTheHour)return M`
                box-shadow: inset -0.5px 0px ${Fc["border-primary"]};
            `}}
`,QV=_.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,JV=_.div`
    width: 2px;
    height: 100%;
`,eU=_.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${Bc.sm};
    box-sizing: border-box;
    padding: ${Ac["spacing-4"]};
    ${({$status:e,$mainColor:t,$isClickable:r,$altColor:n})=>{switch(e){case"blocked":return M`
                    background: repeating-linear-gradient(
                        135deg,
                        ${Fc["bg-stronger"]} 0px 6px,
                        ${Fc["bg-strongest"]} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"filled":return M`
                    background: ${t};
                    &:hover {
                        cursor: ${r?"pointer":"default"};
                    }
                `;case"disabled":return M`
                    background: ${Fc["bg-disabled"]};
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"pending":return M`
                    background: repeating-linear-gradient(
                        135deg,
                        ${t} 0px 6px,
                        ${n} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;default:return M`
                    &:hover {
                        background-color: ${r?Fc["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,tU=_(ad.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,rU=_(ad.BodyXS)`
    color: ${Fc["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,nU=({containerRef:t,children:r,customPopover:n})=>{if(!n)return r;const i={position:"bottom-start",rootNode:t,customOffset:n.offset,children:r,trigger:n.trigger,delay:n.delay,popoverContent:n.content};return e(Jw,Object.assign({},i))},iU=i.memo((({id:r,startTime:n,endTime:i,title:o,subtitle:a,status:s,intervalWidth:l,rowBarColor:c,containerRef:d,customPopover:u,roundedStartTime:h=n,roundedEndTime:g=i,onClick:p})=>{const f=0===Iu(g,"HH:mm").get("minutes"),m=Zu.getTimeDiffInMinutes(h,g)/LV*l-2,b=!!p||u&&"click"===u.trigger;return e(nU,{containerRef:d,customPopover:u,children:e(ZV,{"data-testid":"block-container",$isOnTheHour:f,children:t(QV,{children:[t(eU,{$width:m,$status:s,$mainColor:c.mainColor,$altColor:c.alternateColor,$isClickable:b,onClick:e=>{p&&p({id:r,startTime:n,endTime:i,status:s,title:o,subtitle:a,customPopover:u},e)},children:[o&&e(tU,{weight:"semibold",children:o}),a&&e(rU,{weight:"bold",children:a})]}),e(JV,{})]})},"block-container-key")})})),oU=({id:t,timetableMinTime:r,timetableMaxTime:n,rowMinTime:i,rowMaxTime:o,rowCells:a,rowBarColor:s,intervalWidth:l,containerRef:c,outOfRangeCellPopover:d})=>{const u=i?Zg.roundToNearestInterval(i,LV):r,h=o?Zg.roundToNearestInterval(o,LV,!0):n,g=m((()=>{const e=[];u&&Iu(r,"HH:mm").isBefore(Iu(u,"HH:mm"))&&e.push({id:t,startTime:r,endTime:u,status:"blocked",customPopover:d});const s=[...a].sort(((e,t)=>{const r=Iu(e.startTime,"HH:mm"),n=Iu(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0}));let l;return s.forEach(((r,n)=>{var i;const{startTime:o,endTime:s}=r;let c=Zg.roundToNearestInterval(o,LV);l&&Iu(c,"HH:mm").isBefore(Iu(l,"HH:mm"))&&(c=Zg.roundToNearestInterval(o,LV,!0));const d=Zg.roundToNearestInterval(s,LV,!0);e.push(Object.assign(Object.assign({},r),{roundedStartTime:c,roundedEndTime:d}));const u=(null===(i=a[n+1])||void 0===i?void 0:i.startTime)||h,g=Iu(Zg.roundToNearestInterval(u,LV),"HH:mm");let p=Iu(d,"HH:mm");for(;p.isBefore(g);)if(f=g,p.get("hour")!=f.get("hour")){const r=p.add(1,"hour").startOf("hour");e.push({id:t,startTime:p.format("HH:mm").toString(),endTime:r.format("HH:mm").toString(),status:"disabled"}),p=r}else e.push({id:t,startTime:p.format("HH:mm").toString(),endTime:g.format("HH:mm").toString(),status:"disabled"}),p=g;var f;l=p.format("HH:mm").toString()})),h&&Iu(n,"HH:mm").isAfter(Iu(h,"HH:mm"))&&e.push({id:t,startTime:h,endTime:n,status:"blocked",customPopover:d}),0!==s.length||i||o||e.push({id:t,startTime:r,endTime:n,status:"blocked",customPopover:d}),e}),[u,r,a,h,n,i,o,t,d]);return e(GV,{"data-testid":"timetable-row",children:g.map(((t,r)=>e(iU,Object.assign({},t,{intervalWidth:l,rowBarColor:s,containerRef:c}),`${r}-row-cell-key`)))})},aU=_.div``,sU=_.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${NV}px auto;
`,lU=_.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${NV}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return M`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,cU=_.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${Fc.bg};
    width: ${NV}px;
    z-index: 2;
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?M`
                box-shadow: 2px 2px 8px
                    rgb(from ${Fc.Primitive["neutral-20"]} r g b / 25%);
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.12px":"0"}
                        ${e.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:M`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,dU=_.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${Fc.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,uU=_.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${Fc.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return M`
                box-shadow: 2px 2px 8px
                    rgb(from ${Fc.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,hU=_.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${Ac["spacing-4"]};
`,gU=_(ad.BodySM)`
    color: ${Fc["text-subtler"]};
`,pU=_.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,fU=_.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${Fc.bg};
    width: ${NV}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${Ac["spacing-16"]} 0 ${Ac["spacing-32"]};
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    border-left: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?M`
                box-shadow: 2px 2px 8px
                    rgb(from ${Fc.Primitive["neutral-20"]} r g b / 25%);
            `:M`
                box-shadow: inset -0.5px 0px ${Fc["border-primary"]};
            `};
`,mU=_(ad.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${Fc["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,bU=_(ad.BodyXS)`
    display: inline-flex;
    gap: ${Ac["spacing-4"]};
    align-items: center;
    color: ${Fc["text-subtler"]};
    ${e=>{if(!e.$show)return M`
                display: none;
            `}}
`,vU=_(uu)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,yU=_(Ap)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${Ac["spacing-72"]} 0;
`,xU=_.div`
    display: flex;
    border-bottom: ${Ic["width-010"]} ${Ic.solid} ${Fc.border};
`,wU=_.div`
    border-right: ${Ic["width-005"]} ${Ic.solid}
        ${Fc["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${Ac["spacing-20"]} ${Ac["spacing-12"]};
`,$U=B`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,CU=_.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${Fc.Primitive["neutral-95"]} 8%,
        ${Fc.Primitive["neutral-100"]} 18%,
        ${Fc.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${$U} 1.5s forwards infinite;
`,SU=_(Jw)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,kU=n=>{var{date:i,emptyContentMessage:s,rowData:l,loading:c,minTime:d="00:00",maxTime:h="23:00",minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPage:v,onRefresh:y,onNextDayClick:x,onPreviousDayClick:w,onCalendarDateSelect:$}=n,C=gt(n,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const S=C["data-testid"]||"timetable",D=Zg.roundToNearestInterval(d,60),T=Zg.roundToNearestInterval(h,60,!0),E=Zg.generateHourlyIntervals(D,T),O=0===f||wT.isEmpty(l),F=O||l.length===f,_=o(null),M=o(null),[I,A]=a(!1),[B,j]=a(!1),[R,z]=a(0),[P,L]=a(!1);u((()=>{const e=wT.throttle((()=>{if(_.current&&(A(_.current.scrollLeft>0),j(_.current.scrollTop>0)),P||!_.current)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=_.current;Math.ceil(e+t)>=r-1&&!F&&v&&!c&&(L(!0),v())}),100),t=_.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[F,P,c,v]),u((()=>{L(!1)}),[l]);hr({onResize:()=>{if(_.current){const e=Math.ceil(60*E.length/LV),t=(_.current.clientWidth-NV)/e;z(t>21?t:21)}},targetRef:_,refreshMode:"debounce",refreshRate:50});const N=(()=>{let e=0;const t=PV.length;return()=>{const r=PV[e],n=HV[e];return e=(e+1)%t,{mainColor:r,alternateColor:n}}})(),H=({wrapper:e,children:t})=>e(t),W=()=>{if(!c&&P)return e(fU,{$isScrolled:I,children:e(CU,{})})},Y=()=>{if(!c&&P)return e(xU,{"data-testid":"lazy-loader",children:E.map(((t,r)=>e(wU,{$width:4*R,children:e(CU,{})},`lazy-load-cell-${r}`)))})};return t(aU,O?Object.assign({},C,{"data-testid":S,children:[e(qV,{selectedDate:i,loading:c||P,tableContainerRef:_,minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),e(sU,{className:"empty-container",children:c?e(vU,{$isEmptyContent:O}):e(yU,{type:"no-item-found",description:s})})]}):Object.assign({},C,{"data-testid":S,children:[e(qV,{"data-id":"timetable-date-navigator",selectedDate:i,loading:c||P,tableContainerRef:_,minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),t(lU,{"data-id":"timetable-container","data-testid":"timetable-container",ref:_,$loading:c,$allRecordsLoaded:F||!v,children:[e(cU,{$isScrolledY:B,$isScrolledX:I}),e(dU,{$numOfRows:l.length,$isScrolled:I,"data-testid":"row-header-column-id",children:t(r,{children:[l.map(((r,n)=>e(H,{wrapper:e=>((e,t)=>{if(!e.rowHeaderPopover)return t;const r={position:"bottom-start",rootNode:_,customOffset:e.rowHeaderPopover.offset,children:t,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return k(SU,Object.assign({},r,{key:`${e.id}-popover-trigger`,zIndex:2}),t)})(r,e),children:t(fU,{$isScrolled:I,children:[e(mU,{$isClickable:!!r.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(r,e),weight:"semibold","data-testid":`${r.id}-row-header-title`,children:r.name}),e(bU,{weight:"bold",$show:!!r.subtitle,"data-testid":`${r.id}-row-header-subtitle`,children:r.subtitle})]},`${r.id}-row-header`)},n))),W()]})}),e(uU,{$numOfColumns:E.length,$isScrolled:B,children:E.map((t=>e(hU,{"data-testid":`${t}-column`,children:e(gU,{weight:"semibold",children:t})},`${t}-column-key`)))}),c?e(vU,{$isEmptyContent:O}):t(pU,{"data-testid":"content-container-id",ref:M,$numOfRows:l.length,children:[l.map(((t,r)=>e(oU,Object.assign({timetableMinTime:D,timetableMaxTime:T,rowBarColor:N(),intervalWidth:R,containerRef:M},t),`${r}-row-bar`))),Y()]})]})]}))},DU=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:Fc[t.Background],Border:Fc[t.Border],Text:Fc[t.Text],Icon:Fc[t.Icon]}},TU=_(Uo.div)`
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

    ${Rc.MaxWidth.lg} {
        left: 0;
    }

    ${e=>M`
            background: ${DU(e).Background};
            border: 1px solid ${DU(e).Border};
            color: ${DU(e).Text};
        `};
`,EU=_.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${Rc.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,OU=_.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${e=>M`
            & > svg {
                flex-shrink: 0;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.0625rem;
                margin-right: 0.5rem;
                color: ${DU(e).Icon};
            }
        `};
`,FU=_.div`
    display: flex;
    flex-direction: column;
`,_U=_(ad.HeadingXS)`
    display: flex;

    ${e=>M`
            color: ${DU(e).Text};
        `}
`,MU=_.div`
    ${e=>M`
            p {
                color: ${DU(e).Text};
            }
        `}
`,IU=_(Nd.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${Rc.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,AU=_(td)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>M`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${DU(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${Rc.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,BU=4e3,jU=r=>{var{type:n="success",title:o,label:s,autoDismiss:l,autoDismissTime:c=BU,onDismiss:d,fixed:h=!0,actionButton:g}=r,p=gt(r,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[f,m]=a(!1),b=j(),v=jc["lg-max"]({theme:b}),y=bu.useMediaQuery({maxWidth:v});u((()=>{m(!0)}),[]),u((()=>{if(!l)return;const e=setTimeout((()=>{m(!1)}),c);return()=>clearTimeout(e)}),[l]);const x=Eo({opacity:f?1:0,transform:f?y?"translateY(0%)":"translateX(0%)":y?"translateY(-1500%)":"translateX(150%)",config:{easing:On.easeInOutQuart,duration:1e3},onRest:()=>{f||null==d||d()}});return t(TU,Object.assign({style:x,$type:n,$fixed:h},p,{children:[t(EU,{children:[t(OU,{$type:n,children:[(()=>{switch(n){case"success":return e(me,{});case"warning":return e(fe,{});case"error":return e(ue,{});case"info":return e(pe,{});default:return null}})(),t(FU,{children:[o&&(i.isValidElement(o)?o:e(_U,{$type:n,weight:"semibold",children:o})),s&&e(MU,{$type:n,children:i.isValidElement(s)?s:e(o?ad.BodyMD:ad.BodyBL,{children:s})})]})]}),g&&e(IU,{styleType:"light",onClick:g.onClick,children:g.label})]}),e(AU,{$type:n,onClick:()=>{m(!1)},children:e(te,{})})]}))},RU=_.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${e=>(e=>{switch(e){case"left":return M`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${om.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"right":return M`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${om.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"bottom":return M`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${om.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;default:return M`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${om.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?M`
            visibility: "visible";
            opacity: 1;
            transition: ${aH.Base};
            z-index: 2;
        `:M`
            visibility: "hidden";
            opacity: 0;
            transition: ${aH.Base};
            z-index: -1;
        `}
`,zU=_(yg)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,PU=_.div`
    position: absolute;
    overflow: hidden;

    ${e=>{switch(e.position){case"top":default:return M`
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
                        border-color: ${WN.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return M`
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
                        border-color: transparent ${WN.Neutral[8]}
                            transparent transparent;
                    }
                `;case"left":return M`
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
                            ${WN.Neutral[8]};
                    }
                `;case"bottom":return M`
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
                            ${WN.Neutral[8]} transparent;
                    }
                `}}}
`,LU=_.div`
    position: relative;
`,NU=r=>{var{visible:n,position:i="top",children:s}=r,l=gt(r,["visible","position","children"]);const c=l["data-testid"]||"tooltip",[d,h]=a(i),g=o(null);u((()=>(f(),window.addEventListener("resize",Kg(p,300)),()=>{window.removeEventListener("resize",Kg(p,300))})),[]);const p=()=>{f()},f=()=>{if(g.current){const e=g.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":h("right");break;case"right":h("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":h("left");break;case"left":h("top")}else h(i)}};return t(RU,Object.assign({position:d,"data-testid":c,visible:n,ref:g},l,{children:[e(zU,{children:"string"==typeof s?e(rH.BodySmall,{children:s}):s}),e(PU,{position:d})]}))},HU=(r,n)=>i=>{const{tooltipVisible:o,position:a}=i,s=gt(i,["tooltipVisible","position"]);return t(LU,{children:[e(r,Object.assign({},s)),e(NU,{visible:o,position:a,children:n.content})]})},WU=M`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${Rc.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,YU=_(Aj.Content)`
    background: ${({$background:e})=>e?Fc["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,VU=_(ad.HeadingSM)`
    margin-bottom: 1rem;
    ${WU}
`,UU=_(ad.BodyBL)`
    margin-bottom: 2rem;
    ${WU}
`,KU=_.div`
    ${WU}
`,XU=_.ul`
    ${WU}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${Rc.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${Rc.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,qU=i.forwardRef(((t,r)=>{var{stretch:n}=t,i=gt(t,["stretch"]);return e(XU,Object.assign({ref:r,$stretch:n},i))})),GU=_.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return M`
                    grid-column: auto / span 4;
                `;case"full":return M`
                    grid-column: auto / span 8;
                `}}}

    ${Rc.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,ZU=_.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Fc["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${_c.Spec["body-size-baseline"]};
        height: ${_c.Spec["body-size-baseline"]};
    }
`,QU=_.button`
    ${_c["body-baseline-regular"]}
    color: ${Fc.text};
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
`,JU=_.span`
    color: ${Fc["text-disabled"]};
`,eK=_(Sd)`
    margin-right: 0.5rem;
    color: ${Fc["text-disabled"]};
`,tK=_(Ve)`
    color: ${Fc["icon-warning"]};
    margin-right: 0.5rem;
    height: ${_c.Spec["body-size-baseline"]};
    width: ${_c.Spec["body-size-baseline"]};
`,rK=_.span`
    color: ${Fc["text-warning"]};
`,nK=_.span`
    ${_c["body-baseline-semibold"]}
    color: ${Fc.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,iK=_(tu)`
    margin-top: 0.5rem;
`,oK=({label:n,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:c="•",maskRange:d,unmaskRange:h,maskRegex:g,disableMaskUnmask:p,alert:f,maskTransformer:m,onMask:b,onUnmask:v,onTryAgain:y})=>{const[x,w]=a(s);u((()=>{w(s)}),[s]);const $=()=>{switch("fail"===l&&y&&y(),x){case"masked":v&&v(),w("unmasked");break;case"unmasked":b&&b(),w("masked")}},C=()=>"string"!=typeof i?i:"masked"===x?eh.maskValue(i,{maskChar:c,maskRange:d,unmaskRange:h,maskRegex:g,maskTransformer:m}):i,S=()=>{switch(l){case"fail":return t(r,{children:[e(tK,{}),e(rK,{children:"Error"}),e(nK,{children:"Try again?"})]});case"loading":return t(r,{children:[e(eK,{}),e(JU,{children:"Retrieving..."})]});default:return t(r,{children:[C(),e(ZU,{children:"masked"===x?e(We,{"data-testid":"masked-icon"}):e(Ye,{"data-testid":"unmasked-icon"})})]})}};return t(GU,{$widthStyle:o,children:[e(c$,{children:n}),"string"!=typeof i?i:x?p?e(ad.BodyBL,{children:C()}):e(QU,{"data-testid":"clickable-label",onClick:$,"aria-busy":"loading"===l,"aria-live":"polite",type:"button",children:S()}):e(ad.BodyBL,{children:i}),f&&e(iK,Object.assign({sizeType:"small"},f))]})},aK=Object.assign((n=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:c,background:d=!0,stretch:u,onMask:h,onUnmask:g,onTryAgain:p}=n,f=gt(n,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{h&&h(e)},b=e=>()=>{g&&g(e)},v=e=>()=>{p&&p(e)},y=()=>{if(i&&i.length>0){const t=i.map(((t,r)=>e(oK,Object.assign({},t,{onMask:m(t),onUnmask:b(t),onTryAgain:v(t)}),r)));return e(XU,{$stretch:u,children:t})}return null};return e(YU,Object.assign({$background:d},f,{type:"grid",children:c||t(r,{children:[o&&e(VU,{weight:"semibold",$stretch:u,children:o}),a&&e(UU,{$stretch:u,children:a}),s&&e(KU,{"data-id":"top-section",$stretch:u,children:s}),y(),l&&e(KU,{"data-id":"bottom-section",$stretch:u,children:l})]})}))}),{ItemSection:qU,Item:oK}),sK={collections:{base:{InputBoxShadow:M`
        inset 0 0 4px 0px ${WN.Shadow.Accent}
    `,InputErrorBoxShadow:M`
        inset 0 0 4px 0px ${WN.Shadow.Red}
    `,ElevationBoxShadow:M`
      0px 2px 8px ${WN.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:M`
        inset 0 0 3px 0px ${WN.Shadow.Accent}
    `,InputErrorBoxShadow:M`
        inset 0 0 3px 0px ${WN.Shadow.Red}
    `,ElevationBoxShadow:M`
      0px 2px 8px ${WN.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},lK=e=>t=>{var r,n;const i=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,o=PN(sK,null==i?void 0:i[LN.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?zN(o,e,i.options.designToken):zN(o,e)},cK={InputBoxShadow:lK("InputBoxShadow"),InputErrorBoxShadow:lK("InputErrorBoxShadow"),ElevationBoxShadow:lK("ElevationBoxShadow"),Table:{Header:lK("Table.Header"),Cell:{Primary:lK("Table.Cell.Primary"),Secondary:lK("Table.Cell.Secondary"),Selected:lK("Table.Cell.Selected"),Hover:lK("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:lK("Button.Danger.BackgroundColor"),Hover:lK("Button.Danger.Hover"),Primary:lK("Button.Danger.Primary"),Border:lK("Button.Danger.Border")}}},dK=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=gt(t,["children","data-testid","type","stretch"]);return e(uK,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),uK=_.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?M`
                padding: 0 3rem;
            `:M`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${om.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${om.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${om.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return M`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${om.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${om.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return M`
                    display: flex;
                    flex-direction: column;
                `;default:return M`
                    display: flex;
                `}}}
`,hK=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=gt(t,["children","data-testid","stretch"]);return e(gK,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),gK=_.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?M`
                ${om.MaxWidth.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:M`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,pK=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=gt(t,["children","data-testid","className","type","stretch"]);return e(hK,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e(dK,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),fK={Section:hK,Container:dK,Content:pK,ColDiv:lm};var mK;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(mK||(mK={}));const bK=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,vK=_.ol`
    ${e=>bK(e.bottomMargin)}
    margin-left: ${3}rem;

    ${om.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>tH.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${WN.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",n=e.counterSeparator||")";return M`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return M`
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
`,yK=_.ul`
    ${e=>bK(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>tH.getTextStyle(e.size,"regular")}
        color: ${WN.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,xK={Ul:t=>{var{size:r="Body",children:n}=t,i=gt(t,["size","children"]);return e(yK,Object.assign({size:r},i,{children:n}))},Ol:t=>{var{size:r="Body",children:n}=t,i=gt(t,["size","children"]);return e(vK,Object.assign({size:r},i,{children:n}))}},wK={[LN.colorScheme]:"base",[LN.textStyleScheme]:"base",[LN.designTokenScheme]:"base",[LN.resourceScheme]:"base"},$K={[LN.colorScheme]:"bookingsg",[LN.textStyleScheme]:"base",[LN.designTokenScheme]:"base",[LN.resourceScheme]:"bookingsg"},CK={[LN.colorScheme]:"rbs",[LN.textStyleScheme]:"base",[LN.designTokenScheme]:"rbs",[LN.resourceScheme]:"rbs"},SK={[LN.colorScheme]:"mylegacy",[LN.textStyleScheme]:"base",[LN.designTokenScheme]:"base",[LN.resourceScheme]:"mylegacy"},kK={[LN.colorScheme]:"ccube",[LN.textStyleScheme]:"base",[LN.designTokenScheme]:"base",[LN.resourceScheme]:"ccube"},DK={[LN.colorScheme]:"oneservice",[LN.textStyleScheme]:"oneservice",[LN.designTokenScheme]:"base",[LN.resourceScheme]:"base"};export{$T as $,Ud as A,_u as B,Fc as C,cf as D,Jm as E,fb as F,kz as G,P$ as H,Pf as I,Tz as J,V$ as K,nu as L,aT as M,JM as N,rI as O,nI as P,TI as Q,I$ as R,Gm as S,pu as T,EI as U,BI as V,NI as W,Aj as X,Hz as Y,Yz as Z,pt as _,Zm as a,cK as a$,Kz as a0,qz as a1,Mm as a2,UP as a3,KP as a4,VP as a5,iL as a6,sL as a7,gN as a8,yN as a9,Uc as aA,Kc as aB,Xc as aC,qc as aD,Gc as aE,Zc as aF,Qc as aG,Jc as aH,Oc as aI,Dc as aJ,Tc as aK,Ec as aL,zA as aM,NY as aN,fV as aO,TV as aP,zV as aQ,LA as aR,kU as aS,jU as aT,bA as aU,NU as aV,HU as aW,ad as aX,aK as aY,KA as aZ,WN as a_,mm as aa,IN as ab,xI as ac,RN as ad,gH as ae,hH as af,Zw as ag,n$ as ah,Jw as ai,CI as aj,sW as ak,hW as al,AI as am,IW as an,LW as ao,aY as ap,wY as aq,SY as ar,tA as as,_c as at,Mc as au,Ic as av,Ac as aw,Bc as ax,jc as ay,Rc as az,tu as b,fK as b0,om as b1,am as b2,tH as b3,qN as b4,rH as b5,mK as b6,xK as b7,wK as b8,$K as b9,CK as ba,SK as bb,kK as bc,DK as bd,LN as be,aH as bf,Ko as c,su as d,uu as e,fh as f,qo as g,Nd as h,yh as i,mg as j,yg as k,Eg as l,yp as m,Rf as n,Wf as o,em as p,hm as q,Sm as r,Ap as s,wp as t,Nb as u,zB as v,yj as w,Uj as x,qA as y,Sz as z};
//# sourceMappingURL=index.22b83cb0.js.map
