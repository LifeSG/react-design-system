import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as a,useState as o,isValidElement as s,createRef as l,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as p,forwardRef as h,useCallback as m,useContext as f,useMemo as g,useImperativeHandle as v,lazy as b,Suspense as y,useReducer as x,memo as w,createContext as $,Fragment as k,Children as S,createElement as O}from"react";import C,{findDOMNode as T,unstable_batchedUpdates as D,createPortal as j}from"react-dom";import{ChevronUpIcon as _}from"@lifesg/react-icons/chevron-up";import I,{css as E,keyframes as M,useTheme as A}from"styled-components";import{ExternalIcon as N}from"@lifesg/react-icons/external";import{ArrowRightIcon as B}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as R}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as L}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as P}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as z}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as F,MinusSquareFillIcon as H,SquareTickFillIcon as W,SquareFillIcon as V,SquareIcon as Y,ClockIcon as U,ArrowUpIcon as q,ArrowDownIcon as X,ArrowRightIcon as K,PencilIcon as G,EraserIcon as Z,DownloadIcon as Q,CrossIcon as J,FilterIcon as ee,PlaceholderImageIcon as te,MagnifierPlusIcon as ne,MagnifierMinusIcon as re,ChevronLeftIcon as ie,ChevronRightIcon as ae,ChevronUpIcon as oe,ExclamationCircleFillIcon as se,TickIcon as le,RefreshIcon as ce,ICircleFillIcon as de,ExclamationTriangleFillIcon as ue,TickCircleFillIcon as pe}from"@lifesg/react-icons";import{ChevronDownIcon as he}from"@lifesg/react-icons/chevron-down";import{ChevronRightIcon as me}from"@lifesg/react-icons/chevron-right";import{ChevronLeftIcon as fe}from"@lifesg/react-icons/chevron-left";import{useFloatingTree as ge,useFloating as ve,autoUpdate as be,offset as ye,flip as xe,shift as we,limitShift as $e,size as ke,useTransitionStyles as Se,useClick as Oe,useDismiss as Ce,useInteractions as Te,FloatingPortal as De,FloatingFocusManager as je,FloatingTree as _e,useFloatingNodeId as Ie,FloatingNode as Ee,useHover as Me}from"@floating-ui/react";import{CrossIcon as Ae}from"@lifesg/react-icons/cross";import{StarIcon as Ne}from"@lifesg/react-icons/star";import{StarFillIcon as Be}from"@lifesg/react-icons/star-fill";import{CloudArrowUpFillIcon as Re}from"@lifesg/react-icons/cloud-arrow-up-fill";import{MagnifierIcon as Le}from"@lifesg/react-icons/magnifier";import{EyeIcon as Pe}from"@lifesg/react-icons/eye";import{EyeSlashIcon as ze}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as Fe}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as He}from"@lifesg/react-icons/square";import{SquareTickFillIcon as We}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Ve}from"@lifesg/react-icons/tick";import{CaretRightIcon as Ye}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Ue}from"@lifesg/react-icons/minus-square-fill";import{CircleIcon as qe}from"@lifesg/react-icons/circle";import{CircleDotIcon as Xe}from"@lifesg/react-icons/circle-dot";import{BinIcon as Ke}from"@lifesg/react-icons/bin";import{PencilIcon as Ge}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Ze}from"@lifesg/react-icons/drag-handle";import{MinusIcon as Qe}from"@lifesg/react-icons/minus";import{PlusIcon as Je}from"@lifesg/react-icons/plus";import{MenuIcon as et}from"@lifesg/react-icons/menu";import{Chevron2LeftIcon as tt}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as nt}from"@lifesg/react-icons/chevron-2-right";import{ChevronLineLeftIcon as rt}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as it}from"@lifesg/react-icons/chevron-line-right";import{EllipsisHorizontalIcon as at}from"@lifesg/react-icons/ellipsis-horizontal";import{StarHalfIcon as ot}from"@lifesg/react-icons/star-half";const st=i.createContext(!1);function lt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function ct(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var dt=function(e,t){return dt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},dt(e,t)};var ut=function(){return ut=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ut.apply(this,arguments)};var pt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ht=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},mt="object"==typeof pt&&pt&&pt.Object===Object&&pt,ft="object"==typeof self&&self&&self.Object===Object&&self,gt=mt||ft||Function("return this")(),vt=gt,bt=function(){return vt.Date.now()},yt=/\s/;var xt=function(e){for(var t=e.length;t--&&yt.test(e.charAt(t)););return t},wt=/^\s+/;var $t=function(e){return e?e.slice(0,xt(e)+1).replace(wt,""):e},kt=gt.Symbol,St=kt,Ot=Object.prototype,Ct=Ot.hasOwnProperty,Tt=Ot.toString,Dt=St?St.toStringTag:void 0;var jt=function(e){var t=Ct.call(e,Dt),n=e[Dt];try{e[Dt]=void 0;var r=!0}catch(e){}var i=Tt.call(e);return r&&(t?e[Dt]=n:delete e[Dt]),i},_t=Object.prototype.toString;var It=jt,Et=function(e){return _t.call(e)},Mt=kt?kt.toStringTag:void 0;var At=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Mt&&Mt in Object(e)?It(e):Et(e)},Nt=function(e){return null!=e&&"object"==typeof e};var Bt=$t,Rt=ht,Lt=function(e){return"symbol"==typeof e||Nt(e)&&"[object Symbol]"==At(e)},Pt=/^[-+]0x[0-9a-f]+$/i,zt=/^0b[01]+$/i,Ft=/^0o[0-7]+$/i,Ht=parseInt;var Wt=ht,Vt=bt,Yt=function(e){if("number"==typeof e)return e;if(Lt(e))return NaN;if(Rt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Rt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Bt(e);var n=zt.test(e);return n||Ft.test(e)?Ht(e.slice(2),n?2:8):Pt.test(e)?NaN:+e},Ut=Math.max,qt=Math.min;var Xt=function(e,t,n){var r,i,a,o,s,l,c=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function m(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=a}function f(){var e=Vt();if(m(e))return g(e);s=setTimeout(f,function(e){var n=t-(e-l);return u?qt(n,a-(e-c)):n}(e))}function g(e){return s=void 0,p&&r?h(e):(r=i=void 0,o)}function v(){var e=Vt(),n=m(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),h(l)}return void 0===s&&(s=setTimeout(f,t)),o}return t=Yt(t)||0,Wt(n)&&(d=!!n.leading,a=(u="maxWait"in n)?Ut(Yt(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},v.flush=function(){return void 0===s?o:g(Vt())},v},Kt=Xt,Gt=ht;var Zt=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Gt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Kt(e,t,{leading:r,maxWait:t,trailing:i})},Qt=function(e,t,n,r){switch(t){case"debounce":return Xt(e,n,r);case"throttle":return Zt(e,n,r);default:return e}},Jt=function(e){return"function"==typeof e},en=function(){return"undefined"==typeof window},tn=function(e){return e instanceof Element||e instanceof HTMLDocument},nn=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&Jt(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!en()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(en())return null;if(t)return document.querySelector(t);if(r&&tn(r))return r;if(n.targetRef&&tn(n.targetRef.current))return n.targetRef.current;var i=T(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=nn(s,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!en()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Jt(t)?"renderProp":Jt(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,en()||(n.resizeHandler=Qt(n.createResizeHandler,i,o,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}dt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){en()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return r.createElement(o,null)}}}(d);var rn=en()?u:p;function an(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,p=void 0===u||u,h=e.targetRef,m=e.observerOptions,f=e.onResize,g=a(n),v=a(null),b=null!=h?h:v,y=a(),x=o({width:void 0,height:void 0}),w=x[0],$=x[1];return rn((function(){if(!en()){var e=nn(f,$,d,p);y.current=Qt((function(t){(d||p)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!en()&&e({width:r,height:i}),g.current=!1}))}),r,s,l);var t=new window.ResizeObserver(y.current);return b.current&&t.observe(b.current,m),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,d,p,f,m,b.current]),ut({ref:b},w)}var on=$n(),sn=e=>bn(e,on),ln=$n();sn.write=e=>bn(e,ln);var cn=$n();sn.onStart=e=>bn(e,cn);var dn=$n();sn.onFrame=e=>bn(e,dn);var un=$n();sn.onFinish=e=>bn(e,un);var pn=[];sn.setTimeout=(e,t)=>{const n=sn.now()+t,r=()=>{const e=pn.findIndex((e=>e.cancel==r));~e&&pn.splice(e,1),gn-=~e?1:0},i={time:n,handler:e,cancel:r};return pn.splice(hn(n),0,i),gn+=1,yn(),i};var hn=e=>~(~pn.findIndex((t=>t.time>e))||~pn.length);sn.cancel=e=>{cn.delete(e),dn.delete(e),un.delete(e),on.delete(e),ln.delete(e)},sn.sync=e=>{vn=!0,sn.batchedUpdates(e),vn=!1},sn.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,sn.onStart(n)}return r.handler=e,r.cancel=()=>{cn.delete(n),t=null},r};var mn="undefined"!=typeof window?window.requestAnimationFrame:()=>{};sn.use=e=>mn=e,sn.now="undefined"!=typeof performance?()=>performance.now():Date.now,sn.batchedUpdates=e=>e(),sn.catch=console.error,sn.frameLoop="always",sn.advance=()=>{"demand"!==sn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):wn()};var fn=-1,gn=0,vn=!1;function bn(e,t){vn?(t.delete(e),e(0)):(t.add(e),yn())}function yn(){fn<0&&(fn=0,"demand"!==sn.frameLoop&&mn(xn))}function xn(){~fn&&(mn(xn),sn.batchedUpdates(wn))}function wn(){const e=fn;fn=sn.now();const t=hn(fn);t&&(kn(pn.splice(0,t),(e=>e.handler())),gn-=t),gn?(cn.flush(),on.flush(e?Math.min(64,fn-e):16.667),dn.flush(),ln.flush(),un.flush()):fn=-1}function $n(){let e=new Set,t=e;return{add(n){gn+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(gn-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,gn-=t.size,kn(t,(t=>t(n)&&e.add(t))),gn+=e.size,t=e)}}}function kn(e,t){e.forEach((e=>{try{t(e)}catch(e){sn.catch(e)}}))}var Sn=Object.defineProperty,On={};function Cn(){}((e,t)=>{for(var n in t)Sn(e,n,{get:t[n],enumerable:!0})})(On,{assign:()=>zn,colors:()=>Rn,createStringInterpolator:()=>Mn,skipAnimation:()=>Ln,to:()=>An,willAdvance:()=>Pn});var Tn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Dn(e,t){if(Tn.arr(e)){if(!Tn.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var jn=(e,t)=>e.forEach(t);function _n(e,t,n){if(Tn.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var In=e=>Tn.und(e)?[]:Tn.arr(e)?e:[e];function En(e,t){if(e.size){const n=Array.from(e);e.clear(),jn(n,t)}}var Mn,An,Nn=(e,...t)=>En(e,(e=>e(...t))),Bn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Rn=null,Ln=!1,Pn=Cn,zn=e=>{e.to&&(An=e.to),e.now&&(sn.now=e.now),void 0!==e.colors&&(Rn=e.colors),null!=e.skipAnimation&&(Ln=e.skipAnimation),e.createStringInterpolator&&(Mn=e.createStringInterpolator),e.requestAnimationFrame&&sn.use(e.requestAnimationFrame),e.batchedUpdates&&(sn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Pn=e.willAdvance),e.frameLoop&&(sn.frameLoop=e.frameLoop)},Fn=new Set,Hn=[],Wn=[],Vn=0,Yn={get idle(){return!Fn.size&&!Hn.length},start(e){Vn>e.priority?(Fn.add(e),sn.onStart(Un)):(qn(e),sn(Kn))},advance:Kn,sort(e){if(Vn)sn.onFrame((()=>Yn.sort(e)));else{const t=Hn.indexOf(e);~t&&(Hn.splice(t,1),Xn(e))}},clear(){Hn=[],Fn.clear()}};function Un(){Fn.forEach(qn),Fn.clear(),sn(Kn)}function qn(e){Hn.includes(e)||Xn(e)}function Xn(e){Hn.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Hn,(t=>t.priority>e.priority)),0,e)}function Kn(e){const t=Wn;for(let n=0;n<Hn.length;n++){const r=Hn[n];Vn=r.priority,r.idle||(Pn(r),r.advance(e),r.idle||t.push(r))}return Vn=0,(Wn=Hn).length=0,(Hn=t).length>0}var Gn="[-+]?\\d*\\.?\\d+",Zn=Gn+"%";function Qn(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Jn=new RegExp("rgb"+Qn(Gn,Gn,Gn)),er=new RegExp("rgba"+Qn(Gn,Gn,Gn,Gn)),tr=new RegExp("hsl"+Qn(Gn,Zn,Zn)),nr=new RegExp("hsla"+Qn(Gn,Zn,Zn,Gn)),rr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ir=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ar=/^#([0-9a-fA-F]{6})$/,or=/^#([0-9a-fA-F]{8})$/;function sr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function lr(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=sr(i,r,e+1/3),o=sr(i,r,e),s=sr(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function cr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function dr(e){return(parseFloat(e)%360+360)%360/360}function ur(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function pr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function hr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ar.exec(e))?parseInt(t[1]+"ff",16)>>>0:Rn&&void 0!==Rn[e]?Rn[e]:(t=Jn.exec(e))?(cr(t[1])<<24|cr(t[2])<<16|cr(t[3])<<8|255)>>>0:(t=er.exec(e))?(cr(t[1])<<24|cr(t[2])<<16|cr(t[3])<<8|ur(t[4]))>>>0:(t=rr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=or.exec(e))?parseInt(t[1],16)>>>0:(t=ir.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=tr.exec(e))?(255|lr(dr(t[1]),pr(t[2]),pr(t[3])))>>>0:(t=nr.exec(e))?(lr(dr(t[1]),pr(t[2]),pr(t[3]))|ur(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var mr=(e,t,n)=>{if(Tn.fun(e))return e;if(Tn.arr(e))return mr({range:e,output:t,extrapolate:n});if(Tn.str(e.output[0]))return Mn(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=a(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};var fr=1.70158,gr=1.525*fr,vr=fr+1,br=2*Math.PI/3,yr=2*Math.PI/4.5,xr=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},wr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>vr*e*e*e-fr*e*e,easeOutBack:e=>1+vr*Math.pow(e-1,3)+fr*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-gr)/2:(Math.pow(2*e-2,2)*((gr+1)*(2*e-2)+gr)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*br),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*br)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*yr)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*yr)/2+1,easeInBounce:e=>1-xr(1-e),easeOutBounce:xr,easeInOutBounce:e=>e<.5?(1-xr(1-2*e))/2:(1+xr(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e;return((e,t,n)=>Math.min(Math.max(n,e),t))(0,1,("end"===t?Math.floor(r):Math.ceil(r))/e)}},$r=Symbol.for("FluidValue.get"),kr=Symbol.for("FluidValue.observers"),Sr=e=>Boolean(e&&e[$r]),Or=e=>e&&e[$r]?e[$r]():e,Cr=e=>e[kr]||null;function Tr(e,t){const n=e[kr];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Dr=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");jr(this,e)}},jr=(e,t)=>Mr(e,$r,t);function _r(e,t){if(e[$r]){let n=e[kr];n||Mr(e,kr,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ir(e,t){const n=e[kr];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[kr]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Er,Mr=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ar=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Nr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Br=new RegExp(`(${Ar.source})(%|[a-z]+)`,"i"),Rr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Lr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Pr=e=>{const[t,n]=zr(e);if(!t||Bn())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Lr.test(n)?Pr(n):n||e},zr=e=>{const t=Lr.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Fr=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Hr=e=>{Er||(Er=Rn?new RegExp(`(${Object.keys(Rn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Or(e).replace(Lr,Pr).replace(Nr,hr).replace(Er,hr))),n=t.map((e=>e.match(Ar).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=r.map((t=>mr({...e,output:t})));return e=>{const n=!Br.test(t[0])&&t.find((e=>Br.test(e)))?.replace(Ar,"");let r=0;return t[0].replace(Ar,(()=>`${i[r++](e)}${n||""}`)).replace(Rr,Fr)}},Wr="react-spring: ",Vr=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Wr}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Yr=Vr(console.warn);var Ur=Vr(console.warn);function qr(e){return Tn.str(e)&&("#"==e[0]||/\d/.test(e)||!Bn()&&Lr.test(e)||e in(Rn||{}))}var Xr=Bn()?u:p;function Kr(){const e=o()[1],t=(()=>{const e=a(!1);return Xr((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var Gr=e=>u(e,Zr),Zr=[];function Qr(e){const t=a();return u((()=>{t.current=e})),t.current}var Jr=Symbol.for("Animated:node"),ei=e=>e&&e[Jr],ti=(e,t)=>{return n=e,r=Jr,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ni=e=>e&&e[Jr]&&e[Jr].getPayload(),ri=class{constructor(){ti(this,this)}getPayload(){return this.payload||[]}},ii=class extends ri{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Tn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ii(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Tn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Tn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ai=class extends ii{constructor(e){super(0),this._string=null,this._toString=mr({output:[e,e]})}static create(e){return new ai(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Tn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=mr({output:[this.getValue(),e]})),this._value=0,super.reset()}},oi={dependencies:null},si=class extends ri{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return _n(this.source,((n,r)=>{var i;(i=n)&&i[Jr]===i?t[r]=n.getValue(e):Sr(n)?t[r]=Or(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&jn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return _n(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){oi.dependencies&&Sr(e)&&oi.dependencies.add(e);const t=ni(e);t&&jn(t,(e=>this.add(e)))}},li=class extends si{constructor(e){super(e)}static create(e){return new li(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(ci)),!0)}};function ci(e){return(qr(e)?ai:ii).create(e)}function di(e){const t=ei(e);return t?t.constructor:Tn.arr(e)?li:qr(e)?ai:ii}var ui=(e,t)=>{const n=!Tn.fun(e)||e.prototype&&e.prototype.isReactComponent;return h(((i,o)=>{const s=a(null),l=n&&m((e=>{s.current=function(e,t){e&&(Tn.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[c,d]=function(e,t){const n=new Set;oi.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new si(e),oi.dependencies=null,[e,n]}(i,t),p=Kr(),h=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&p()},f=new pi(h,d),g=a();Xr((()=>(g.current=f,jn(d,(e=>_r(e,f))),()=>{g.current&&(jn(g.current.deps,(e=>Ir(e,g.current))),sn.cancel(g.current.update))}))),u(h,[]),Gr((()=>()=>{const e=g.current;jn(e.deps,(t=>Ir(t,e)))}));const v=t.getComponentProps(c.getValue());return r.createElement(e,{...v,ref:l})}))},pi=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&sn.write(this.update)}};var hi=Symbol.for("AnimatedComponent"),mi=e=>Tn.str(e)?e:e&&Tn.str(e.displayName)?e.displayName:Tn.fun(e)&&e.name||null;function fi(e,...t){return Tn.fun(e)?e(...t):e}var gi=(e,t)=>!0===e||!!(t&&e&&(Tn.fun(e)?e(t):In(e).includes(t))),vi=(e,t)=>Tn.obj(e)?t&&e[t]:e,bi=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,yi=e=>e,xi=(e,t=yi)=>{let n=wi;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Tn.und(n)||(r[i]=n)}return r},wi=["config","onProps","onStart","onChange","onPause","onResume","onRest"],$i={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ki(e){const t=function(e){const t={};let n=0;if(_n(e,((e,r)=>{$i[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return _n(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function Si(e){return e=Or(e),Tn.arr(e)?e.map(Si):qr(e)?On.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Oi(e){return Tn.fun(e)||Tn.arr(e)&&Tn.obj(e[0])}var Ci={tension:170,friction:26,mass:1,damping:1,easing:wr.linear,clamp:!1},Ti=class{constructor(){this.velocity=0,Object.assign(this,Ci)}};function Di(e,t){if(Tn.und(t.decay)){const n=!Tn.und(t.tension)||!Tn.und(t.friction);!n&&Tn.und(t.frequency)&&Tn.und(t.damping)&&Tn.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var ji=[],_i=class{constructor(){this.changed=!1,this.values=ji,this.toValues=null,this.fromValues=ji,this.config=new Ti,this.immediate=!1}};function Ii(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{let l,c,d=gi(n.cancel??r?.cancel,t);if(d)h();else{Tn.und(n.pause)||(i.paused=gi(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||gi(e,t)),l=fi(n.delay||0,t),e?(i.resumeQueue.add(p),a.pause()):(a.resume(),p())}function u(){i.resumeQueue.add(p),i.timeouts.delete(c),c.cancel(),l=c.time-sn.now()}function p(){l>0&&!On.skipAnimation?(i.delayed=!0,c=sn.setTimeout(h,l),i.pauseQueue.add(u),i.timeouts.add(c)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{a.start({...n,callId:e,cancel:d},o)}catch(e){s(e)}}}))}var Ei=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ni(e.get()):t.every((e=>e.noop))?Mi(e.get()):Ai(e.get(),t.every((e=>e.finished))),Mi=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ai=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Ni=e=>({value:e,cancelled:!0,finished:!1});function Bi(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=xi(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const p=new Promise(((e,t)=>(d=e,u=t))),h=e=>{const t=i<=(n.cancelId||0)&&Ni(r)||i!==n.asyncId&&Ai(r,!1);if(t)throw e.result=t,u(e),e},m=(e,t)=>{const a=new Li,o=new Pi;return(async()=>{if(On.skipAnimation)throw Ri(n),o.result=Ai(r,!1),u(o),o;h(a);const s=Tn.obj(e)?{...e}:{...t,to:e};s.parentId=i,_n(c,((e,t)=>{Tn.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return h(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let f;if(On.skipAnimation)return Ri(n),Ai(r,!1);try{let t;t=Tn.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,r.stop.bind(r))),await Promise.all([t.then(d),p]),f=Ai(r.get(),!0,!1)}catch(e){if(e instanceof Li)f=e.result;else{if(!(e instanceof Pi))throw e;f=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return Tn.fun(o)&&sn.batchedUpdates((()=>{o(f,r,r.item)})),f})():l}function Ri(e,t){En(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Li=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Pi=class extends Error{constructor(){super("SkipAnimationSignal")}},zi=e=>e instanceof Hi,Fi=1,Hi=class extends Dr{constructor(){super(...arguments),this.id=Fi++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ei(this);return e&&e.getValue()}to(...e){return On.to(this,e)}interpolate(...e){return Yr(`${Wr}The "interpolate" function is deprecated in v9 (use "to" instead)`),On.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Tr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Yn.sort(this),Tr(this,{type:"priority",parent:this,priority:e})}},Wi=Symbol.for("SpringPhase"),Vi=e=>(1&e[Wi])>0,Yi=e=>(2&e[Wi])>0,Ui=e=>(4&e[Wi])>0,qi=(e,t)=>t?e[Wi]|=3:e[Wi]&=-3,Xi=(e,t)=>t?e[Wi]|=4:e[Wi]&=-5,Ki=class extends Hi{constructor(e,t){if(super(),this.animation=new _i,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Tn.und(e)||!Tn.und(t)){const n=Tn.obj(e)?{...e}:{...t,from:e};Tn.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Yi(this)||this._state.asyncTo)||Ui(this)}get goal(){return Or(this.animation.to)}get velocity(){const e=ei(this);return e instanceof ii?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Vi(this)}get isAnimating(){return Yi(this)}get isPaused(){return Ui(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:a}=r,o=ni(r.to);!o&&Sr(r.to)&&(i=In(Or(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ai?1:o?o[l].lastPosition:i[l];let d=r.immediate,u=c;if(!d){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=Tn.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const p=a.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Tn.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,r=Math.exp(-(1-e)*t);u=n+i/(1-e)*(1-r),d=Math.abs(s.lastPosition-u)<=p,o=i*r}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||p/10,r=a.clamp?0:a.bounce,l=!Tn.und(r),h=n==c?s.v0>0:n<c;let m,f=!1;const g=1,v=Math.ceil(e/g);for(let e=0;e<v&&(m=Math.abs(o)>t,m||(d=Math.abs(c-u)<=p,!d));++e){l&&(f=u==c||u>c==h,f&&(o=-o*r,u=c));o+=(1e-6*-a.tension*(u-c)+.001*-a.friction*o)/a.mass*g,u+=o*g}}else{let r=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(a.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),u=n+a.easing(r)*(c-n),o=(u-s.lastPosition)/e,d=1==r}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,a.round)&&(n=!0)}));const s=ei(this),l=s.getValue();if(t){const e=Or(r.to);l===e&&!n||a.decay?n&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return sn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Yi(this)){const{to:e,config:t}=this.animation;sn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Tn.und(e)?(n=this.queue||[],this.queue=[]):n=[Tn.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Ei(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ri(this._state,e&&this._lastCallId),sn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Tn.obj(n)?n[t]:n,(null==n||Oi(n))&&(n=void 0),r=Tn.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Vi(this)||(e.reverse&&([n,r]=[r,n]),r=Or(r),Tn.und(r)?ei(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,xi(e,((e,t)=>/^on/.test(t)?vi(e,n):e))),na(this,e,"onProps"),ra(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Ii(++this._lastCallId,{key:n,props:e,defaultProps:r,state:a,actions:{pause:()=>{Ui(this)||(Xi(this,!0),Nn(a.pauseQueue),ra(this,"onPause",Ai(this,Gi(this,this.animation.to)),this))},resume:()=>{Ui(this)&&(Xi(this,!1),Yi(this)&&this._resume(),Nn(a.resumeQueue),ra(this,"onResume",Ai(this,Gi(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=Zi(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Ni(this));const r=!Tn.und(e.to),i=!Tn.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Ni(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||r||t.default&&!Tn.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const p=!Dn(u,c);p&&(s.from=u),u=Or(u);const h=!Dn(d,l);h&&this._focus(d);const m=Oi(t.to),{config:f}=s,{decay:g,velocity:v}=f;(r||i)&&(f.velocity=0),t.config&&!m&&function(e,t,n){n&&(Di(n={...n},t),t={...n,...t}),Di(e,t),Object.assign(e,t);for(const t in Ci)null==e[t]&&(e[t]=Ci[t]);let{frequency:r,damping:i}=e;const{mass:a}=e;Tn.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*a,e.friction=4*Math.PI*i*a/r)}(f,fi(t.config,a),t.config!==o.config?fi(o.config,a):void 0);let b=ei(this);if(!b||Tn.und(d))return n(Ai(this,!0));const y=Tn.und(t.reset)?i&&!t.default:!Tn.und(u)&&gi(t.reset,a),x=y?u:this.get(),w=Si(d),$=Tn.num(w)||Tn.arr(w)||qr(w),k=!m&&(!$||gi(o.immediate||t.immediate,a));if(h){const e=di(d);if(e!==b.constructor){if(!k)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(w)}}const S=b.constructor;let O=Sr(d),C=!1;if(!O){const e=y||!Vi(this)&&p;(h||e)&&(C=Dn(Si(x),w),O=!C),(Dn(s.immediate,k)||k)&&Dn(f.decay,g)&&Dn(f.velocity,v)||(O=!0)}if(C&&Yi(this)&&(s.changed&&!y?O=!0:O||this._stop(l)),!m&&((O||Sr(l))&&(s.values=b.getPayload(),s.toValues=Sr(d)?null:S==ai?[1]:In(w)),s.immediate!=k&&(s.immediate=k,k||y||this._set(l)),O)){const{onRest:e}=s;jn(ta,(e=>na(this,t,e)));const r=Ai(this,Gi(this,l));Nn(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&sn.batchedUpdates((()=>{s.changed=!y,e?.(r,this),y?fi(o.onRest,r):s.onStart?.(r,this)}))}y&&this._set(x),m?n(Bi(t.to,t,this._state,this)):O?this._start():Yi(this)&&!h?this._pendingCalls.add(n):n(Mi(x))}_focus(e){const t=this.animation;e!==t.to&&(Cr(this)&&this._detach(),t.to=e,Cr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Sr(t)&&(_r(t,this),zi(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Sr(e)&&Ir(e,this)}_set(e,t=!0){const n=Or(e);if(!Tn.und(n)){const e=ei(this);if(!e||!Dn(n,e.getValue())){const r=di(n);e&&e.constructor==r?e.setValue(n):ti(this,r.create(n)),e&&sn.batchedUpdates((()=>{this._onChange(n,t)}))}}return ei(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ra(this,"onStart",Ai(this,Gi(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),fi(this.animation.onChange,e,this)),fi(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ei(this).reset(Or(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Yi(this)||(qi(this,!0),Ui(this)||this._resume())}_resume(){On.skipAnimation?this.finish():Yn.start(this)}_stop(e,t){if(Yi(this)){qi(this,!1);const n=this.animation;jn(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Tr(this,{type:"idle",parent:this});const r=t?Ni(this.get()):Ai(this.get(),Gi(this,e??n.to));Nn(this._pendingCalls,r),n.changed&&(n.changed=!1,ra(this,"onRest",r,this))}}};function Gi(e,t){const n=Si(t);return Dn(Si(e.get()),n)}function Zi(e,t=e.loop,n=e.to){const r=fi(t);if(r){const i=!0!==r&&ki(r),a=(i||e).reverse,o=!i||i.reset;return Qi({...e,loop:t,default:!1,pause:void 0,to:!a||Oi(n)?n:void 0,from:o?e.from:void 0,reset:o,...i})}}function Qi(e){const{to:t,from:n}=e=ki(e),r=new Set;return Tn.obj(t)&&ea(t,r),Tn.obj(n)&&ea(n,r),e.keys=r.size?Array.from(r):null,e}function Ji(e){const t=Qi(e);return Tn.und(t.default)&&(t.default=xi(t)),t}function ea(e,t){_n(e,((e,n)=>null!=e&&t.add(n)))}var ta=["onStart","onRest","onChange","onPause","onResume"];function na(e,t,n){e.animation[n]=t[n]!==bi(t,n)?vi(t[n],e.key):void 0}function ra(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var ia=["onStart","onChange","onRest"],aa=1,oa=class{constructor(e,t){this.id=aa++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Tn.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Qi(e)),this}start(e){let{queue:t}=this;return e?t=In(e).map(Qi):this.queue=[],this._flush?this._flush(this,t):(ha(this,t),sa(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;jn(In(t),(t=>n[t].stop(!!e)))}else Ri(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Tn.und(e))this.start({pause:!0});else{const t=this.springs;jn(In(e),(e=>t[e].pause()))}return this}resume(e){if(Tn.und(e))this.start({pause:!1});else{const t=this.springs;jn(In(e),(e=>t[e].resume()))}return this}each(e){_n(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,En(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&En(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,En(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}sn.onFrame(this._onFrame)}};function sa(e,t){return Promise.all(t.map((t=>la(e,t)))).then((t=>Ei(e,t)))}async function la(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=Tn.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const d=Tn.arr(i)||Tn.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):jn(ia,(n=>{const r=t[n];if(Tn.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Nn(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const p=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),h=!0===t.cancel||!0===bi(t,"cancel");(d||h&&u.asyncId)&&p.push(Ii(++e._lastAsyncId,{props:t,state:u,actions:{pause:Cn,resume:Cn,start(t,n){h?(Ri(u,e._lastAsyncId),n(Ni(e))):(t.onRest=s,n(Bi(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const m=Ei(e,await Promise.all(p));if(o&&m.finished&&(!n||!m.noop)){const n=Zi(t,o,i);if(n)return ha(e,[n]),la(e,n,!0)}return l&&sn.batchedUpdates((()=>l(m,e,e.item))),m}function ca(e,t){const n={...e.springs};return t&&jn(In(t),(e=>{Tn.und(e.keys)&&(e=Qi(e)),Tn.obj(e.to)||(e={...e,to:void 0}),pa(n,e,(e=>ua(e)))})),da(e,n),n}function da(e,t){_n(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,_r(t,e))}))}function ua(e,t){const n=new Ki;return n.key=e,t&&_r(n,t),n}function pa(e,t,n){t.keys&&jn(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ha(e,t){jn(t,(t=>{pa(e.springs,t,(t=>ua(t,e)))}))}var ma,fa,ga=({children:e,...t})=>{const n=f(va),i=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=function(e,t){const[n]=o((()=>({inputs:t,result:e()}))),r=a(),i=r.current;let s=i;if(s){const n=Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs));n||(s={inputs:t,result:e()})}else s=n;return u((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=va;return r.createElement(l,{value:t},e)},va=(ma=ga,fa={},Object.assign(ma,r.createContext(fa)),ma.Provider._context=ma,ma.Consumer._context=ma,ma);ga.Provider=va.Provider,ga.Consumer=va.Consumer;var ba=()=>{const e=[],t=function(t){Ur(`${Wr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return jn(e,((e,i)=>{if(Tn.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return jn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return jn(e,(e=>e.resume(...arguments))),this},t.set=function(t){jn(e,((e,n)=>{const r=Tn.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return jn(e,((e,r)=>{if(Tn.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return jn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return jn(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Tn.fun(e)?e(n,t):e};return t._getProps=n,t};function ya(e,t){const n=Tn.fun(e),[[r],i]=function(e,t,n){const r=Tn.fun(t)&&t;r&&!n&&(n=[]);const i=g((()=>r||3==arguments.length?ba():void 0),[]),o=a(0),s=Kr(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=ca(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?sa(e,t):new Promise((r=>{da(e,n),l.queue.push((()=>{r(sa(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),d=[],u=Qr(e)||0;function p(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new oa(null,l.flush)),n=r?r(i,e):t[i];n&&(d[i]=Ji(n))}}g((()=>{jn(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,p(u,e)}),[e]),g((()=>{p(0,Math.min(u,e))}),n);const h=c.current.map(((e,t)=>ca(e,d[t]))),m=f(ga),v=Qr(m),b=m!==v&&function(e){for(const t in e)return!0;return!1}(m);Xr((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],jn(e,(e=>e()))),jn(c.current,((e,t)=>{i?.add(e),b&&e.start({default:m});const n=d[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Gr((()=>()=>{jn(l.ctrls,(e=>e.stop(!0)))}));const y=h.map((e=>({...e})));return i?[y,i]:y}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var xa=class extends Hi{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=mr(...t);const n=this._get(),r=di(n);ti(this,r.create(n))}advance(e){const t=this._get();Dn(t,this.get())||(ei(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&$a(this._active)&&ka(this)}_get(){const e=Tn.arr(this.source)?this.source.map(Or):In(Or(this.source));return this.calc(...e)}_start(){this.idle&&!$a(this._active)&&(this.idle=!1,jn(ni(this),(e=>{e.done=!1})),On.skipAnimation?(sn.batchedUpdates((()=>this.advance())),ka(this)):Yn.start(this))}_attach(){let e=1;jn(In(this.source),(t=>{Sr(t)&&_r(t,this),zi(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){jn(In(this.source),(e=>{Sr(e)&&Ir(e,this)})),this._active.clear(),ka(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=In(this.source).reduce(((e,t)=>Math.max(e,(zi(t)?t.priority:0)+1)),0))}};function wa(e){return!1!==e.idle}function $a(e){return!e.size||Array.from(e).every(wa)}function ka(e){e.idle||(e.idle=!0,jn(ni(e),(e=>{e.done=!0})),Tr(e,{type:"idle",parent:e}))}On.assign({createStringInterpolator:Hr,to:(e,t)=>new xa(e,t)});var Sa=/^--/;function Oa(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Sa.test(e)||Ta.hasOwnProperty(e)&&Ta[e]?(""+t).trim():t+"px"}var Ca={};var Ta={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Da=["Webkit","Ms","Moz","O"];Ta=Object.keys(Ta).reduce(((e,t)=>(Da.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Ta);var ja=/^(matrix|translate|scale|rotate|skew)/,_a=/^(translate)/,Ia=/^(rotate|skew)/,Ea=(e,t)=>Tn.num(e)&&0!==e?e+t:e,Ma=(e,t)=>Tn.arr(e)?e.every((e=>Ma(e,t))):Tn.num(e)?e===t:parseFloat(e)===t,Aa=class extends si{constructor({x:e,y:t,z:n,...r}){const i=[],a=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>Ea(e,"px"))).join(",")})`,Ma(e,0)]))),_n(r,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(ja.test(t)){if(delete r[t],Tn.und(e))return;const n=_a.test(t)?"px":Ia.test(t)?"deg":"";i.push(In(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Ea(i,n)})`,Ma(i,0)]:e=>[`${t}(${e.map((e=>Ea(e,n))).join(",")})`,Ma(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Na(i,a)),super(r)}},Na=class extends Dr{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return jn(this.inputs,((n,r)=>{const i=Or(n[0]),[a,o]=this.transforms[r](Tn.arr(i)?i:n.map(Or));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&jn(this.inputs,(e=>jn(e,(e=>Sr(e)&&_r(e,this)))))}observerRemoved(e){0==e&&jn(this.inputs,(e=>jn(e,(e=>Sr(e)&&Ir(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Tr(this,e)}};On.assign({batchedUpdates:D,createStringInterpolator:Hr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Ba=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=e=>new si(e),getComponentProps:r=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=mi(e)||"Anonymous";return(e=Tn.str(e)?a[e]||(a[e]=ui(e,i)):e[hi]||(e[hi]=ui(e,i))).displayName=`Animated(${t})`,e};return _n(e,((t,n)=>{Tn.arr(e)&&(n=mi(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:r,style:i,children:a,scrollTop:o,scrollLeft:s,viewBox:l,...c}=t,d=Object.values(c),u=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Ca[t]||(Ca[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(const t in i)if(i.hasOwnProperty(t)){const n=Oa(t,i[t]);Sa.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,d[n])})),void 0!==r&&(e.className=r),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Aa(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Ra=Ba.animated;var La="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Pa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var za=Array.isArray,Fa="object"==typeof La&&La&&La.Object===Object&&La,Ha=Fa,Wa="object"==typeof self&&self&&self.Object===Object&&self,Va=Ha||Wa||Function("return this")(),Ya=Va.Symbol,Ua=Ya,qa=Object.prototype,Xa=qa.hasOwnProperty,Ka=qa.toString,Ga=Ua?Ua.toStringTag:void 0;var Za=function(e){var t=Xa.call(e,Ga),n=e[Ga];try{e[Ga]=void 0;var r=!0}catch(e){}var i=Ka.call(e);return r&&(t?e[Ga]=n:delete e[Ga]),i},Qa=Object.prototype.toString;var Ja=Za,eo=function(e){return Qa.call(e)},to=Ya?Ya.toStringTag:void 0;var no=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":to&&to in Object(e)?Ja(e):eo(e)};var ro=function(e){return null!=e&&"object"==typeof e},io=no,ao=ro;var oo=function(e){return"symbol"==typeof e||ao(e)&&"[object Symbol]"==io(e)},so=za,lo=oo,co=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,uo=/^\w*$/;var po=function(e,t){if(so(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!lo(e))||(uo.test(e)||!co.test(e)||null!=t&&e in Object(t))};var ho=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},mo=no,fo=ho;var go,vo=function(e){if(!fo(e))return!1;var t=mo(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},bo=Va["__core-js_shared__"],yo=(go=/[^.]+$/.exec(bo&&bo.keys&&bo.keys.IE_PROTO||""))?"Symbol(src)_1."+go:"";var xo=function(e){return!!yo&&yo in e},wo=Function.prototype.toString;var $o=function(e){if(null!=e){try{return wo.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ko=vo,So=xo,Oo=ho,Co=$o,To=/^\[object .+?Constructor\]$/,Do=Function.prototype,jo=Object.prototype,_o=Do.toString,Io=jo.hasOwnProperty,Eo=RegExp("^"+_o.call(Io).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Mo=function(e){return!(!Oo(e)||So(e))&&(ko(e)?Eo:To).test(Co(e))},Ao=function(e,t){return null==e?void 0:e[t]};var No=function(e,t){var n=Ao(e,t);return Mo(n)?n:void 0},Bo=No(Object,"create"),Ro=Bo;var Lo=function(){this.__data__=Ro?Ro(null):{},this.size=0};var Po=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},zo=Bo,Fo=Object.prototype.hasOwnProperty;var Ho=function(e){var t=this.__data__;if(zo){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Fo.call(t,e)?t[e]:void 0},Wo=Bo,Vo=Object.prototype.hasOwnProperty;var Yo=Bo;var Uo=Lo,qo=Po,Xo=Ho,Ko=function(e){var t=this.__data__;return Wo?void 0!==t[e]:Vo.call(t,e)},Go=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Yo&&void 0===t?"__lodash_hash_undefined__":t,this};function Zo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Zo.prototype.clear=Uo,Zo.prototype.delete=qo,Zo.prototype.get=Xo,Zo.prototype.has=Ko,Zo.prototype.set=Go;var Qo=Zo;var Jo=function(){this.__data__=[],this.size=0};var es=function(e,t){return e===t||e!=e&&t!=t},ts=es;var ns=function(e,t){for(var n=e.length;n--;)if(ts(e[n][0],t))return n;return-1},rs=ns,is=Array.prototype.splice;var as=ns;var os=ns;var ss=ns;var ls=Jo,cs=function(e){var t=this.__data__,n=rs(t,e);return!(n<0)&&(n==t.length-1?t.pop():is.call(t,n,1),--this.size,!0)},ds=function(e){var t=this.__data__,n=as(t,e);return n<0?void 0:t[n][1]},us=function(e){return os(this.__data__,e)>-1},ps=function(e,t){var n=this.__data__,r=ss(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function hs(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}hs.prototype.clear=ls,hs.prototype.delete=cs,hs.prototype.get=ds,hs.prototype.has=us,hs.prototype.set=ps;var ms=hs,fs=No(Va,"Map"),gs=Qo,vs=ms,bs=fs;var ys=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var xs=function(e,t){var n=e.__data__;return ys(t)?n["string"==typeof t?"string":"hash"]:n.map},ws=xs;var $s=xs;var ks=xs;var Ss=xs;var Os=function(e,t){var n=Ss(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Cs=function(){this.size=0,this.__data__={hash:new gs,map:new(bs||vs),string:new gs}},Ts=function(e){var t=ws(this,e).delete(e);return this.size-=t?1:0,t},Ds=function(e){return $s(this,e).get(e)},js=function(e){return ks(this,e).has(e)},_s=Os;function Is(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Is.prototype.clear=Cs,Is.prototype.delete=Ts,Is.prototype.get=Ds,Is.prototype.has=js,Is.prototype.set=_s;var Es=Is,Ms=Es;function As(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(As.Cache||Ms),n}As.Cache=Ms;var Ns=As;var Bs=function(e){var t=Ns(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t},Rs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ls=/\\(\\)?/g,Ps=Bs((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Rs,(function(e,n,r,i){t.push(r?i.replace(Ls,"$1"):n||e)})),t}));var zs=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Fs=za,Hs=oo,Ws=Ya?Ya.prototype:void 0,Vs=Ws?Ws.toString:void 0;var Ys=function e(t){if("string"==typeof t)return t;if(Fs(t))return zs(t,e)+"";if(Hs(t))return Vs?Vs.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Us=Ys;var qs=function(e){return null==e?"":Us(e)},Xs=za,Ks=po,Gs=Ps,Zs=qs;var Qs=function(e,t){return Xs(e)?e:Ks(e,t)?[e]:Gs(Zs(e))},Js=oo;var el=function(e){if("string"==typeof e||Js(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},tl=Qs,nl=el;var rl=function(e,t){for(var n=0,r=(t=tl(t,e)).length;null!=e&&n<r;)e=e[nl(t[n++])];return n&&n==r?e:void 0},il=rl;var al=function(e,t,n){var r=null==e?void 0:il(e,t);return void 0===r?n:r},ol=Pa(al);const sl=(e,t,n)=>t?ol(n,t)||ol(e,t):n||e,ll=(e,t)=>{const n=t||e.defaultValue;return ol(e.collections,n)};var cl;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(cl||(cl={}));const dl={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ul=e=>t=>{const n=t.theme,r=ll(dl,n[cl.colorScheme]);return n.options&&n.options.color?sl(r,e,n.options.color):sl(r,e)},pl={Brand:{1:ul("Brand.1"),2:ul("Brand.2"),3:ul("Brand.3"),4:ul("Brand.4"),5:ul("Brand.5"),6:ul("Brand.6")},Primary:ul("Primary"),PrimaryDark:ul("PrimaryDark"),Secondary:ul("Secondary"),Accent:{Light:{1:ul("Accent.Light.1"),2:ul("Accent.Light.2"),3:ul("Accent.Light.3"),4:ul("Accent.Light.4"),5:ul("Accent.Light.5"),6:ul("Accent.Light.6")},Dark:{1:ul("Accent.Dark.1"),2:ul("Accent.Dark.2"),3:ul("Accent.Dark.3")}},Neutral:{1:ul("Neutral.1"),2:ul("Neutral.2"),3:ul("Neutral.3"),4:ul("Neutral.4"),5:ul("Neutral.5"),6:ul("Neutral.6"),7:ul("Neutral.7"),8:ul("Neutral.8")},Validation:{Green:{Text:ul("Validation.Green.Text"),Icon:ul("Validation.Green.Icon"),Border:ul("Validation.Green.Border"),Background:ul("Validation.Green.Background")},Orange:{Text:ul("Validation.Orange.Text"),Icon:ul("Validation.Orange.Icon"),Border:ul("Validation.Orange.Border"),Background:ul("Validation.Orange.Background"),Badge:ul("Validation.Orange.Badge")},Red:{Text:ul("Validation.Red.Text"),Icon:ul("Validation.Red.Icon"),Border:ul("Validation.Red.Border"),Background:ul("Validation.Red.Background")},Blue:{Text:ul("Validation.Blue.Text"),Icon:ul("Validation.Blue.Icon"),Border:ul("Validation.Blue.Border"),Background:ul("Validation.Blue.Background")}},Shadow:{Accent:ul("Shadow.Accent"),Red:ul("Shadow.Red"),Elevation:ul("Shadow.Elevation")}},hl={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ml=e=>Object.keys(hl).reduce(((t,n)=>{const r=hl[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),fl={MaxWidth:ml("max-width"),MinWidth:ml("min-width")},gl=hl,vl=I.button`
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

        ${({$highlight:e})=>e&&E`
                background-color: ${pl.Neutral[7]};
            `}
    }
`,bl=i.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=t,s=lt(t,["children","focusHighlight","focusOutline","type"]);return e(vl,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),yl={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},xl={D1:{fontFamily:yl.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:yl.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:yl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:yl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:yl.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:yl.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:yl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:yl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:yl.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:yl.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:yl.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:yl.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:yl.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:yl.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},wl={D1:{fontFamily:yl.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:yl.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:yl.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:yl.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:yl.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:yl.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:yl.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:yl.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:yl.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:yl.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:yl.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:yl.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:yl.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:yl.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},$l={collections:{base:xl,oneservice:{D1:{fontFamily:yl.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:yl.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:yl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:yl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:yl.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:yl.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:yl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:yl.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:yl.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:yl.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:yl.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:yl.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:yl.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:yl.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:wl},defaultValue:"base"},kl=e=>t=>{const n=t.theme,r=ll($l,n[cl.textStyleScheme]);return n.options&&n.options.textStyle?sl(r,e,n.options.textStyle):sl(r,e)},Sl={D1:{fontFamily:kl("D1.fontFamily"),fontSize:kl("D1.fontSize"),fontWeight:kl("D1.fontWeight"),lineHeight:kl("D1.lineHeight"),letterSpacing:kl("D1.letterSpacing"),fontVariant:kl("D1.fontVariant")},D2:{fontFamily:kl("D2.fontFamily"),fontSize:kl("D2.fontSize"),fontWeight:kl("D2.fontWeight"),lineHeight:kl("D2.lineHeight"),letterSpacing:kl("D2.letterSpacing"),fontVariant:kl("D2.fontVariant")},D3:{fontFamily:kl("D3.fontFamily"),fontSize:kl("D3.fontSize"),fontWeight:kl("D3.fontWeight"),lineHeight:kl("D3.lineHeight"),letterSpacing:kl("D3.letterSpacing"),fontVariant:kl("D3.fontVariant")},D4:{fontFamily:kl("D4.fontFamily"),fontSize:kl("D4.fontSize"),fontWeight:kl("D4.fontWeight"),lineHeight:kl("D4.lineHeight"),letterSpacing:kl("D4.letterSpacing"),fontVariant:kl("D4.fontVariant")},DBody:{fontFamily:kl("DBody.fontFamily"),fontSize:kl("DBody.fontSize"),fontWeight:kl("DBody.fontWeight"),lineHeight:kl("DBody.lineHeight"),letterSpacing:kl("DBody.letterSpacing"),fontVariant:kl("DBody.fontVariant")},H1:{fontFamily:kl("H1.fontFamily"),fontSize:kl("H1.fontSize"),fontWeight:kl("H1.fontWeight"),lineHeight:kl("H1.lineHeight"),letterSpacing:kl("H1.letterSpacing"),fontVariant:kl("H1.fontVariant")},H2:{fontFamily:kl("H2.fontFamily"),fontSize:kl("H2.fontSize"),fontWeight:kl("H2.fontWeight"),lineHeight:kl("H2.lineHeight"),letterSpacing:kl("H2.letterSpacing"),fontVariant:kl("H2.fontVariant")},H3:{fontFamily:kl("H3.fontFamily"),fontSize:kl("H3.fontSize"),fontWeight:kl("H3.fontWeight"),lineHeight:kl("H3.lineHeight"),letterSpacing:kl("H3.letterSpacing"),fontVariant:kl("H3.fontVariant")},H4:{fontFamily:kl("H4.fontFamily"),fontSize:kl("H4.fontSize"),fontWeight:kl("H4.fontWeight"),lineHeight:kl("H4.lineHeight"),letterSpacing:kl("H4.letterSpacing"),fontVariant:kl("H4.fontVariant")},H5:{fontFamily:kl("H5.fontFamily"),fontSize:kl("H5.fontSize"),fontWeight:kl("H5.fontWeight"),lineHeight:kl("H5.lineHeight"),letterSpacing:kl("H5.letterSpacing"),fontVariant:kl("H5.fontVariant")},H6:{fontFamily:kl("H6.fontFamily"),fontSize:kl("H6.fontSize"),fontWeight:kl("H6.fontWeight"),lineHeight:kl("H6.lineHeight"),letterSpacing:kl("H6.letterSpacing"),fontVariant:kl("H6.fontVariant")},Body:{fontFamily:kl("Body.fontFamily"),fontSize:kl("Body.fontSize"),fontWeight:kl("Body.fontWeight"),lineHeight:kl("Body.lineHeight"),letterSpacing:kl("Body.letterSpacing"),fontVariant:kl("Body.fontVariant")},BodySmall:{fontFamily:kl("BodySmall.fontFamily"),fontSize:kl("BodySmall.fontSize"),fontWeight:kl("BodySmall.fontWeight"),lineHeight:kl("BodySmall.lineHeight"),letterSpacing:kl("BodySmall.letterSpacing"),fontVariant:kl("BodySmall.fontVariant")},XSmall:{fontFamily:kl("XSmall.fontFamily"),fontSize:kl("XSmall.fontSize"),fontWeight:kl("XSmall.fontWeight"),lineHeight:kl("XSmall.lineHeight"),letterSpacing:kl("XSmall.letterSpacing"),fontVariant:kl("XSmall.fontVariant")}},Ol=[yl.OpenSans,yl.PlusJakartaSans],Cl=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Tl=(e,t)=>n=>{var r;const i=Sl[e].fontFamily(n),a=Sl[e].fontWeight(n),o=Ol.find((e=>Object.values(e).includes(i)));return o?E`
                font-family: ${Cl(o,t)||Cl(o,a)||i};
                font-weight: normal !important;
            `:E`
            font-family: ${i};
            font-weight: ${null!==(r=Dl(t)||a)&&void 0!==r?r:"normal"};
        `},Dl=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jl=e=>{if(e>0)return E`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_l={getFontFamily:Tl,getTextStyle:(e,t,n=!1)=>r=>{const i=Sl[e],a=i.fontSize(r);return E`
            ${Tl(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            font-variant: ${i.fontVariant(r)||"normal"};
            ${E`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,t=!1,n=void 0)=>t?E`
            display: block;
            ${jl(n)}
        `:e?E`
            display: inline;
        `:E`
            display: block;
            ${jl(n)}
        `};var Il;!function(e){e.D1=I.h1`
        ${e=>E`
                ${_l.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=I.h1`
        ${e=>E`
                ${_l.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=I.h1`
        ${e=>E`
                ${_l.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=I.h1`
        ${e=>E`
                ${_l.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=I.h1`
        ${e=>E`
                ${_l.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=I.h1`
        ${e=>E`
                ${_l.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=I.h2`
        ${e=>E`
                ${_l.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=I.h3`
        ${e=>E`
                ${_l.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=I.h4`
        ${e=>E`
                ${_l.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=I.h5`
        ${e=>E`
                ${_l.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=I.h6`
        ${e=>E`
                ${_l.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=I.p`
        ${e=>E`
                ${_l.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=I.p`
        ${e=>E`
                ${_l.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=I.span`
        ${e=>E`
                ${_l.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${pl.Neutral[1]};
                ${_l.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Al(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Al(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Il||(Il={}));const El=I.a`
    ${e=>E`
            ${_l.getTextStyle(e.textStyle,e.weight)}
            color: ${pl.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${pl.Secondary};

                svg {
                    color: ${pl.Secondary};
                }
            }
        `}
`,Ml=I(N)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Al=n=>{var{external:r=!1,children:i}=n,a=lt(n,["external","children"]);return t(El,Object.assign({},a,{children:[i,r&&e(Ml,{})]}))},Nl={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},Bl=I.div`
    background-color: ${pl.Neutral[8]} !important;
    border-top: 1px solid ${pl.Neutral[6]};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${fl.MaxWidth.mobileL} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,Rl=I.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Ll=e=>E`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: ${Nl.Base};
`,Pl=I(Il.H3)`
    ${e=>Ll(e.$isCollapsed)}
`,zl=I(Il.H4)`
    ${e=>Ll(e.$isCollapsed)}
`,Fl=I(bl)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto -1rem auto 0;
`,Hl=I(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${pl.Primary};
`,Wl=I(Ra.div)`
    overflow: hidden;
`,Vl=I.div`
    display: inline-block;
    padding-right: 4rem;

    ${fl.MaxWidth.tablet} {
        padding-right: 0;
    }
`;const Yl=h((function(n,r){var{title:i,children:s,expanded:l,type:c="default",collapsible:d=!0}=n,p=lt(n,["title","children","expanded","type","collapsible"]);const h=a(),m=f(st),[g,b]=o(!d||(null!=l?l:m)),[y,x]=o(!1),w=p["data-testid"]||"accordion-item",$=an(),k=$.ref;v(r,(()=>Object.assign(h.current,{expand(){b(!0)},collapse(){b(!1)},isExpanded:()=>g})),[g]),u((()=>{y&&b(!d||m)}),[m]),u((()=>{y&&b(l)}),[l]),u((()=>{x(!0)}),[]);const S={height:g?$.height:0},O=ya(S);return t(Bl,Object.assign({"data-testid":w,className:p.className,$isCollapsed:g,ref:h},{children:[t(Rl,Object.assign({$isCollapsed:d,onClick:d?e=>{e.preventDefault(),b((e=>!e))}:void 0},{children:["string"!=typeof i?i:e("small"===c?zl:Pl,Object.assign({"data-testid":`${w}-title`,$isCollapsed:g},{children:i})),d&&e(Fl,Object.assign({"data-testid":`${w}-expand-collapse-button`,$isCollapsed:g,focusHighlight:!1,focusOutline:"browser","aria-label":g?"Collapse":"Expand"},{children:e(Hl,{})}))]})),e(Wl,Object.assign({style:y?O:S,$isCollapsed:g,"data-testid":`${w}-expandable-container`},{children:e(Vl,Object.assign({ref:k,id:"content-container"},{children:s}))}))]}))})),Ul={collections:{base:{InputBoxShadow:E`
        inset 0 0 4px 0px ${pl.Shadow.Accent}
    `,InputErrorBoxShadow:E`
        inset 0 0 4px 0px ${pl.Shadow.Red}
    `,ElevationBoxShadow:E`
      0px 2px 8px ${pl.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:E`
        inset 0 0 3px 0px ${pl.Shadow.Accent}
    `,InputErrorBoxShadow:E`
        inset 0 0 3px 0px ${pl.Shadow.Red}
    `,ElevationBoxShadow:E`
      0px 2px 8px ${pl.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},ql=e=>t=>{var n;const r=t.theme,i=ll(Ul,r[cl.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?sl(i,e,r.options.designToken):sl(i,e)},Xl={InputBoxShadow:ql("InputBoxShadow"),InputErrorBoxShadow:ql("InputErrorBoxShadow"),ElevationBoxShadow:ql("ElevationBoxShadow"),Table:{Header:ql("Table.Header"),Cell:{Primary:ql("Table.Cell.Primary"),Secondary:ql("Table.Cell.Secondary"),Selected:ql("Table.Cell.Selected"),Hover:ql("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:ql("Button.Danger.BackgroundColor"),Hover:ql("Button.Danger.Hover"),Primary:ql("Button.Danger.Primary"),Border:ql("Button.Danger.Border")}}},Kl=I.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Gl=M`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Zl=I.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||pl.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Gl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ql=I(Zl)`
    animation-delay: -0.45s;
`,Jl=I(Zl)`
    animation-delay: -0.3s;
`,ec=I(Zl)`
    animation-delay: -0.15s;
`,tc=({color:n,className:r,size:i=18})=>t(Kl,Object.assign({className:r,$size:i,$color:n,"data-testid":"component-loading-spinner"},{children:[e(Zl,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),e(Ql,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),e(Jl,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),e(ec,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}));var nc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(nc||(nc={}));const rc=I.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return E`
                    background-color: ${pl.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Xl.Button.Danger.Border:pl.Primary};

                    color: ${e.$buttonIsDanger?Xl.Button.Danger.Primary:pl.Primary};
                `;case"light":return E`
                    background-color: ${pl.Neutral[8]};
                    border: 1px solid ${pl.Neutral[5]};

                    color: ${e.$buttonIsDanger?Xl.Button.Danger.Primary:pl.Primary};
                `;case"disabled":return E`
                    background-color: ${pl.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${pl.Neutral[3]};
                `;case"link":return E`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Xl.Button.Danger.Primary:pl.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Xl.Button.Danger.Hover:pl.Secondary};
                    }
                `;default:return E`
                    background-color: ${e.$buttonIsDanger?Xl.Button.Danger.BackgroundColor:pl.Primary};
                    border: 1px solid transparent;

                    ${fl.MaxWidth.mobileL} {
                        width: 100%;
                    }

                    color: ${pl.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?E`
                    height: 2.5rem;
                    ${_l.getTextStyle("H5","semibold")}

                    ${fl.MaxWidth.mobileS} {
                        height: auto;
                    }
                `:E`
                    height: 3rem;
                    ${_l.getTextStyle("H4","semibold")}

                    ${fl.MaxWidth.mobileS} {
                        height: auto;
                    }
                `}
`,ic=I(tc)`
    ${e=>{let t=e.$buttonIsDanger?Xl.Button.Danger.Primary:pl.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=pl.Neutral[3](e);break;default:t=pl.Neutral[8](e)}return E`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ac={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=lt(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(rc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&e(ic,Object.assign({},d)),e("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=lt(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(rc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&e(ic,Object.assign({},d,{size:16})),e("span",{children:i})]}))}))},oc=I.div`
    width: 100%;
    border-bottom: 1px solid ${pl.Neutral[6]};
`,sc=I.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${fl.MaxWidth.mobileL} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return E`
                ${fl.MaxWidth.mobileL} {
                    display: none;
                }
            `}}
`,lc=I(Il.H2)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${fl.MaxWidth.mobileL} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return E`
                ${fl.MaxWidth.mobileL} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,cc=I(ac.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,dc=Object.assign((({children:n,title:r,enableExpandAll:i=!0,initialDisplay:a="expand-all",showTitleInMobile:s=!1,className:l})=>{const[c,d]=o("expand-all"===a),u=e=>{e.preventDefault(),d((e=>!e))};return e(st.Provider,Object.assign({value:c},{children:t(oc,Object.assign({className:l},{children:[r||i?t(sc,Object.assign({$showTitleInMobile:s,$hasExpandAll:i},{children:[r&&e(lc,Object.assign({$showInMobile:s,"data-testid":"accordion-title"},{children:r})),i&&e(cc,Object.assign({"data-testid":"accordion-expand-collapse-button",onClick:u,styleType:"link",type:"button"},{children:c?"Hide all":"Show all"}))]})):null,n]}))}))}),{Item:Yl}),uc=e=>{const{textSize:t}=e||{};return E`
        // Text styling
        ${t&&_l.getTextStyle(t,"regular")}

        strong {
            font-family: ${yl.OpenSans.Semibold};
            ${t&&_l.getTextStyle(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${yl.OpenSans.Semibold};
            ${t&&_l.getTextStyle(t,"semibold")}
            color: ${pl.Primary};
            text-decoration: none;

            svg {
                color: ${pl.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${pl.Secondary};

                svg {
                    color: ${pl.Secondary};
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
    `},pc=I.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=pl.Validation.Red.Background(e),n=pl.Validation.Red.Border(e);break;case"success":t=pl.Validation.Green.Background(e),n=pl.Validation.Green.Border(e);break;case"warning":default:t=pl.Validation.Orange.Background(e),n=pl.Validation.Orange.Border(e);break;case"info":t=pl.Validation.Blue.Background(e),n=pl.Validation.Blue.Border(e);break;case"description":t=pl.Neutral[7](e),n=pl.Neutral[4](e)}return E`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${pl.Neutral[1]};
    ${e=>"small"===e.$sizeType?uc({textSize:"H6"}):uc({textSize:"BodySmall"})}
`,hc=I.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&E`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=pl.Validation.Red.Icon(e);break;case"success":t=pl.Validation.Green.Icon(e);break;case"warning":default:t=pl.Validation.Orange.Icon(e);break;case"info":t=pl.Validation.Blue.Icon(e);break;case"description":t=pl.Neutral[4](e)}return E`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,mc=I(Il.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?E`
                ${_l.getTextStyle("H6","semibold")}
                margin-top: 0.25rem;
            `:E`
                ${_l.getTextStyle("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${pl.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${pl.Primary};
    }
`,fc=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,gc=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,vc=I.button`
    ${e=>"small"===e.$sizeType?E`
                ${_l.getTextStyle("H6","semibold")}
            `:E`
                ${_l.getTextStyle("H5","semibold")}
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

    color: ${pl.Primary};
`,bc=I(F)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,yc=n=>{var{type:r,className:i,children:a,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:p,maxCollapsedHeight:h}=n,m=lt(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,g]=o(!1),[v,b]=o(!1),{height:y,ref:x}=an();u((()=>{w()}),[h,y]);const w=()=>{g(!h),b($())},$=()=>!!h&&y>h;return t(pc,Object.assign({className:i,$type:r,$sizeType:c,"data-testid":m["data-testid"]},{children:[d&&e(hc,Object.assign({$sizeType:c,$type:r},{children:(()=>{if(r&&p)return p;switch(r){case"success":return e(z,{});case"warning":return e(L,{});case"error":return e(R,{});case"info":case"description":return e(P,{});default:return null}})()})),t(fc,{children:[t(gc,Object.assign({$maxCollapsedHeight:$()?h:void 0,$showMore:f,$hasActionLink:!!s},{children:[e("div",Object.assign({ref:x},{children:a})),s&&t(mc,Object.assign({"data-testid":"action-link",$type:r,$sizeType:c},s,{children:[s.children,l||e(B,{})]}))]})),v&&t(vc,Object.assign({$sizeType:c,$type:r,type:"button",onClick:()=>g(!f)},{children:["Show ",f?"less":"more",e(bc,{$expanded:f})]}))]})]}))},xc=b((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.b8e74be5.js")).LottieSpinner}})))),wc=t=>e(kc,Object.assign({},t,{children:e(y,Object.assign({fallback:e($c,{})},{children:e(xc,{})}))})),$c=()=>e("div",{style:{height:"200px",width:"200px"}}),kc=I.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`,Sc=b((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.936d4b0e.js")).LottieLoadingDots}})))),Oc=t=>e(Tc,Object.assign({},t,{children:e(y,Object.assign({fallback:e(Cc,{})},{children:e(Sc,{})}))})),Cc=()=>e("div",{style:{height:"16px",width:"64px"}}),Tc=I.div`
    margin: 0 auto;
`,Dc={[cl.colorScheme]:"base",[cl.textStyleScheme]:"base",[cl.designTokenScheme]:"base",[cl.resourceScheme]:"base"},jc={[cl.colorScheme]:"bookingsg",[cl.textStyleScheme]:"base",[cl.designTokenScheme]:"base",[cl.resourceScheme]:"bookingsg"},_c={[cl.colorScheme]:"rbs",[cl.textStyleScheme]:"base",[cl.designTokenScheme]:"rbs",[cl.resourceScheme]:"rbs"},Ic={[cl.colorScheme]:"mylegacy",[cl.textStyleScheme]:"base",[cl.designTokenScheme]:"base",[cl.resourceScheme]:"mylegacy"},Ec={[cl.colorScheme]:"ccube",[cl.textStyleScheme]:"base",[cl.designTokenScheme]:"base",[cl.resourceScheme]:"ccube"},Mc={[cl.colorScheme]:"oneservice",[cl.textStyleScheme]:"oneservice",[cl.designTokenScheme]:"base",[cl.resourceScheme]:"base"},Ac=b((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.a8fe33ef.js")).LottieLoadingDotsSpinner}})))),Nc=t=>{var{color:n}=t,r=lt(t,["color"]);const i=A(),a=n||pl.Primary({theme:i||Dc});return e(Rc,Object.assign({},r,{children:e(y,Object.assign({fallback:e(Bc,{})},{children:e(Ac,{color:a})}))}))},Bc=()=>e("div",{style:{height:"200px",width:"200px"}}),Rc=I.div`
    margin: 0 auto;
`;var Lc,Pc={exports:{}};Lc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),a=n(/*! object-assign */"./node_modules/object-assign/index.js"),o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,i,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+i+" `"+a+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,a+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,i,a){var o=t[n];return e(o)?null:new h("Invalid "+i+" `"+a+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,a){var o=e[t];return i.isValidElementType(o)?null:new h("Invalid "+r+" `"+a+"` of type `"+b(o)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||d;return new h("Invalid "+i+" `"+a+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return v(e[t])?null:new h("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,i,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new h("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,r,i,a+"."+d,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,a){for(var o=t[n],s=0;s<e.length;s++)if(p(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+t+"."),c}return m((function(t,n,r,i,a){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,n,r,i,a,o);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new h("Invalid "+i+" `"+a+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,i,a){var s=t[n],l=b(s);if("object"!==l)return new h("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return g(r,i,a,c,y(d));var u=d(s,c,r,i,a+"."+c,o);if(u)return u}return null}))},exact:function(e){return m((function(t,n,r,i,l){var c=t[n],d=b(c);if("object"!==d)return new h("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");var u=a({},t[n],e);for(var p in u){var m=e[p];if(s(e,p)&&"function"!=typeof m)return g(r,i,l,p,y(m));if(!m)return new h("Invalid "+i+" `"+l+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=m(c,p,r,i,l+"."+p,o);if(f)return f}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},i=0;function a(a,s,l,c,u,p,m){if(c=c||d,p=p||l,m!==o){if(t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,i++)}}return null==s[l]?a?null===s[l]?new h("The "+u+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,p)}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}function f(e){return m((function(t,n,r,i,a,o){var s=t[n];return b(s)!==e?new h("Invalid "+i+" `"+a+"` of type `"+y(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,n,r,i){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,a=r.call(t);if(r!==t.entries){for(;!(i=a.next()).done;)if(!v(i.value))return!1}else for(;!(i=a.next()).done;){var o=i.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case d:case i:case o:case a:case p:return h;default:var g=h&&h.$$typeof;switch(g){case l:case u:case f:case m:case s:return g;default:return t}}case r:return t}}}var w=c,$=d,k=l,S=s,O=n,C=u,T=i,D=f,j=m,_=r,I=o,E=a,M=p,A=!1;function N(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=k,t.ContextProvider=S,t.Element=O,t.ForwardRef=C,t.Fragment=T,t.Lazy=D,t.Memo=j,t.Portal=_,t.Profiler=I,t.StrictMode=E,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),N(e)||x(e)===c},t.isConcurrentMode=N,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===f},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===o},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===o||e===a||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===v||e.$$typeof===b||e.$$typeof===y||e.$$typeof===g)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),a=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,o.default)(n)]=e[n],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},p=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&a(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return d(e)||d(t)},r=(0,i.useState)(n),a=r[0],o=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(a,e)||o(e)}),[e,t]),a}(t),o=p(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,a.default)(e,t||{},!!t)},r=(0,i.useState)(n),o=r[0],s=r[1],l=u();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,r),h=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),m=u();return(0,i.useEffect)((function(){m&&n&&n(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var zc=Pc.exports=Lc(i);const Fc=I.div`
    border: 1px solid ${pl.Neutral[5]};
    border-radius: 4px;
    margin-bottom: 2rem;
`,Hc=I(Ra.div)`
    overflow: hidden;
`,Wc=I.div`
    height: max-content;
`,Vc=I.div`
    border-top: 1px solid ${pl.Neutral[5]};
`,Yc=I.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${fl.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
        display: block;
    }

    ${e=>{if(e.$interactive)return E`
                cursor: pointer;
            `}}
`,Uc=I(Il.H3)`
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: 1rem;
`,qc=I.div`
    display: flex;
`,Xc=I.span`
    font-size: 1.5rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    margin-right: 2.5rem;

    ${fl.MaxWidth.mobileL} {
        margin-right: 0rem;
    }

    ${e=>{switch(e.$displayState){case"error":return E`
                    color: ${pl.Validation.Red.Icon(e)};
                `;case"warning":return E`
                    color: ${pl.Validation.Orange.Icon(e)};
                `}}}
`,Kc=I(R)`
    height: 1.375rem;
    width: 1.375rem;
`,Gc=I.div`
    display: flex;
    margin-left: auto;
    ${fl.MaxWidth.mobileL} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return E`
                margin-right: 2.5rem;
                ${fl.MaxWidth.mobileL} {
                    margin-right: 0rem;
                    margin-top: 1rem;
                }
            `}}
`,Zc=I.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 1rem;
    margin: -1rem;
    display: flex;
    align-items: center;

    ${fl.MaxWidth.mobileL} {
        margin: -1rem -1rem -1rem 0;
        margin-left: auto;
    }
`;I(Il.H4)`
    color: ${pl.Primary};
`;const Qc=I.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Nl.Base};
`,Jc=I(he)`
    color: ${pl.Neutral[3]};
    height: 1.375rem;
    width: 1.375rem;
`,ed=n=>{var{children:r,title:i,collapsible:a=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=n,p=lt(n,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[h,m]=o(!a||s),f=an(),g=f.ref,v=zc.useMediaQuery({maxWidth:gl.mobileL}),b=e=>{e.stopPropagation(),m(!h)},y=ya({height:h?f.height:0}),x=()=>a&&e(Zc,Object.assign({onClick:b,type:"button","aria-label":h?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle"},{children:e(Qc,Object.assign({$expanded:h},{children:e(Jc,{"aria-hidden":!0})}))}));return t(Fc,Object.assign({},p,{children:[t(Yc,Object.assign({"data-testid":"header",onClick:u&&a&&b,$interactive:u&&a},{children:[t(qc,{children:[e(Uc,Object.assign({id:"title","data-testid":(null==d?void 0:d.title)||"title",weight:"semibold"},{children:i})),(()=>{switch(c){case"error":case"warning":return e(Xc,Object.assign({$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`},{children:e(Kc,{})}));default:return null}})(),v&&x()]}),l&&e(Gc,Object.assign({$collapsible:a,"data-testid":"call-to-action-container"},{children:l})),!v&&x()]})),a?e(Hc,Object.assign({style:y,"data-testid":"expandable-container"},{children:e(Vc,Object.assign({ref:g},{children:r}))})):e(Wc,Object.assign({"data-testid":"non-expandable-container"},{children:e(Vc,{children:r})}))]}))};var td={exports:{}};td.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",p="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:p,h:o,m:a,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=g;var w="$isDayjsObject",$=function(e){return e instanceof C||!(!e||!e[w])},k=function e(t,n,r){var i;if(!t)return y;if("string"==typeof t){var a=t.toLowerCase();x[a]&&(i=a),n&&(x[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;x[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new C(n)},O=b;O.l=k,O.i=$,O.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function g(e){this.$L=k(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return O},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return S(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<S(e)},v.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!O.u(t)||t,d=O.p(e),h=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},m=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case u:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case l:var y=this.$locale().weekStart||0,x=(f<y?f+7:f)-y;return h(r?v-x:v+(6-x),g);case s:case p:return m(b+"Hours",0);case o:return m(b+"Minutes",1);case a:return m(b+"Seconds",2);case i:return m(b+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=O.p(e),d="set"+(this.$u?"UTC":""),h=(n={},n[s]=d+"Date",n[p]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],m=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var f=this.clone().set(p,1);f.$d[h](m),f.init(),this.$d=f.set(p,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[O.p(e)]()},v.add=function(r,d){var p,h=this;r=Number(r);var m=O.p(d),f=function(e){var t=S(h);return O.w(t.date(t.date()+Math.round(e*r)),h)};if(m===c)return this.set(c,this.$M+r);if(m===u)return this.set(u,this.$y+r);if(m===s)return f(1);if(m===l)return f(7);var g=(p={},p[a]=t,p[o]=n,p[i]=e,p)[m]||1,v=this.$d.getTime()+r*g;return O.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},p=function(e){return O.s(a%12||12,e,"0")},m=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return s+1;case"MM":return O.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return O.s(a,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return m(a,o,!0);case"A":return m(a,o,!1);case"m":return String(o);case"mm":return O.s(o,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,p,h){var m,f=this,g=O.p(p),v=S(r),b=(v.utcOffset()-this.utcOffset())*t,y=this-v,x=function(){return O.m(f,v)};switch(g){case u:m=x()/12;break;case c:m=x();break;case d:m=x()/3;break;case l:m=(y-b)/6048e5;break;case s:m=(y-b)/864e5;break;case o:m=y/n;break;case a:m=y/t;break;case i:m=y/e;break;default:m=y}return h?m:O.a(m)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return x[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=k(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return O.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),T=C.prototype;return S.prototype=T,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",p]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,C,S),e.$i=!0),S},S.locale=k,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var nd=Pa(td.exports),rd={exports:{}};rd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],d=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},p={A:[a,function(e){this.afternoon=u(e,!1)}],a:[a,function(e){this.afternoon=u(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,l("seconds")],ss:[i,l("seconds")],m:[i,l("minutes")],mm:[i,l("minutes")],H:[i,l("hours")],h:[i,l("hours")],HH:[i,l("hours")],hh:[i,l("hours")],D:[i,l("day")],DD:[r,l("day")],Do:[a,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[i,l("week")],ww:[r,l("week")],M:[i,l("month")],MM:[r,l("month")],MMM:[a,function(e){var t=d("months"),n=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=p[c],u=d&&d[0],h=d&&d[1];a[l]=h?{regex:u,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=h(t)(e),a=i.year,o=i.month,s=i.day,l=i.hours,c=i.minutes,d=i.seconds,u=i.milliseconds,p=i.zone,m=i.week,f=new Date,g=s||(a||o?1:f.getDate()),v=a||f.getFullYear(),b=0;a&&!o||(b=o>0?o-1:f.getMonth());var y,x=l||0,w=c||0,$=d||0,k=u||0;return p?new Date(Date.UTC(v,b,g,x,w,$,k+60*p.offset*1e3)):n?new Date(Date.UTC(v,b,g,x,w,$,k)):(y=new Date(v,b,g,x,w,$,k),m&&(y=r(y).week(m).toDate()),y)}catch(e){return new Date("")}}(t,s,r,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var p=s.length,m=1;m<=p;m+=1){a[1]=s[m-1];var f=n.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===p&&(this.$d=new Date(""))}else i.call(this,e)}}}();var id=Pa(rd.exports),ad={exports:{}};ad.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var od=Pa(ad.exports),sd={exports:{}};sd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var ld=Pa(sd.exports),cd={exports:{}};cd.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var dd,ud,pd=Pa(cd.exports),hd={exports:{}};hd.exports=(dd={year:0,month:1,day:2,hour:3,minute:4,second:5},ud={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=ud[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),ud[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,d=dd[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],p=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+p+":"+a[4]+":"+a[5]+":000",m=+e;return(n.utc(h).valueOf()-(m-=m%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i,a=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(s))/1e3/60),c=15*-Math.round(o.getTimezoneOffset()/15)-l;if(Number(c)){if(i=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var d=i.utcOffset();i=i.add(a-d,"minute")}}else i=this.utcOffset(0,t);return i.$x.$timezone=e,i},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],p=n(d).utcOffset(u);return p.$x.$timezone=s,p},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var md,fd=Pa(hd.exports);nd.extend(od),nd.extend(pd),nd.extend(ld),nd.extend(id),nd.extend(fd),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=nd(t).startOf("week");return gd(n).map((e=>vd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return vd(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(nd(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+nd(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=nd(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?nd(r):void 0,i?nd(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(md||(md={}));const gd=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},vd=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},bd=[1,3,5,7,8,10,12],yd=[4,6,9,11];var xd,wd,$d,kd;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":bd.includes(a)?Math.min(i,31).toString():yd.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=nd(e,n);return nd(t,n).diff(r,"minute")},e.toDayjs=e=>e?nd(e):nd(),e.addMinutesToTime=(e,t,n="HH:mm")=>nd(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>nd(e).isSame(nd(t),n)}(xd||(xd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!nd(e).isBefore(r,"day"))||!(!i||!nd(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(nd(e).isValid())return e}return""}}(wd||(wd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}($d||($d={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(kd||(kd={}));function Sd(e){const t=a(null);return p((()=>{t.current=e}),[e]),m(((...e)=>t.current(...e)),[])}const Od=(e,t,n="window",r)=>{const i=a();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const a=e=>i.current(e);return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}),[e,n])},Cd="undefined"!=typeof window?p:u,Td=()=>{const[e,t]=o(!1);return u((()=>{t(!0)}),[]),e};function Dd({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),a=r.substring(0,n.selectionEnd),o=t(a),s=a.length-o.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}const jd=e=>{const t=(e=>{const t=a(e),n=a();return u((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},_d=e=>{const[t,n]=o(e),r=a(e),i=m((e=>{r.current=e,n(e)}),[]);return[t,i,r]},Id=I.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${fl.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${fl.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,Ed=I.ul`
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

    ${fl.MaxWidth.tablet} {
        flex-wrap: nowrap;
    }
`,Md=I.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${fl.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,Ad=I.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Nd=I(me)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${pl.Neutral[4]};
`,Bd=I(Il.BodySmall)`
    margin: 0.25rem !important;
`,Rd=I(Il.Hyperlink.Small)`
    margin: 0.25rem !important;
`,Ld=r=>{var{links:i,fadeColor:s,fadePosition:l="both",itemStyle:c,id:d}=r,u=lt(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[p,h]=o(!1),[m,f]=o(!1),[g,v]=o(!1),b="left"===l||"both"===l,y="right"===l||"both"===l,x=a(null),w=a(null),$=Sd((()=>{const e=w.current,t=x.current;e&&t&&i&&i.length>1&&window.innerWidth<=hl.tablet&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),k=Sd((()=>{const e=window.innerWidth<=hl.tablet;h(e);const t=w.current,n=x.current;if(t&&n&&e&&t.scrollWidth>n.offsetWidth)return f(t.scrollLeft>=1),void v(t.scrollWidth-t.scrollLeft-1>n.offsetWidth);f(!1),v(!1)}));if(Od("resize",k),Od("scroll",k,w.current),Cd((()=>{$(),k()}),[$,k]),an({onResize:$,targetRef:x,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!i)return null;return t(Id,Object.assign({ref:x,id:d||"breadcrumb"},u,{children:[e("nav",{children:e(Ed,Object.assign({ref:w},{children:i.map(((n,r)=>{let a;return n.children?(a=r!==i.length-1&&n.href?e(Rd,Object.assign({},n,{weight:"semibold"})):e(Bd,Object.assign({weight:"semibold"},{children:n.children})),t(Ad,Object.assign({$styleProps:c},{children:[a,r<i.length-1&&e(Nd,{})]}),r)):null}))}))}),p&&(()=>{let r;return r=Array.isArray(s)&&s.length>0?{left:s,right:s}:s||{left:void 0,right:void 0},t(n,{children:[m&&b&&e(Md,{$backgroundColor:r.left,$position:"left"}),g&&y&&e(Md,{$backgroundColor:r.right,$position:"right"})]})})()]}))},Pd=I(rc)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>"small"===e.$buttonSizeStyle?E`
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `:E`
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}
`,zd={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,styleType:o="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=n,u=lt(n,["children","disabled","styleType","danger","icon","iconPosition","loading"]),p={$buttonIconPosition:c,$buttonStyle:a?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:s,$buttonWithIcon:!0};return t(Pd,Object.assign({ref:r,"data-testid":u["data-testid"]||"button-with-icon",disabled:a},p,u,{children:[d?e(ic,Object.assign({},p)):l,e("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,styleType:o="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=n,u=lt(n,["children","disabled","styleType","danger","icon","iconPosition","loading"]),p={$buttonIconPosition:c,$buttonStyle:a?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:s,$buttonWithIcon:!0};return t(Pd,Object.assign({ref:r,"data-testid":u["data-testid"]||"button-with-icon",disabled:a},p,u,{children:[d?e(ic,Object.assign({},p,{size:16})):l,e("span",{children:i})]}))}))},Fd=I.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${fl.MaxWidth.mobileL} {
        min-width: 17.5rem;
    }
`,Hd=E`
    color: ${pl.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Wd=I(fe)`
    ${Hd}
`,Vd=I(me)`
    ${Hd}
`,Yd=I(he)`
    ${Hd}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ud=I.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,qd=I.div`
    display: flex;
    flex: 1;
    position: relative;
`,Xd=I.div`
    isolation: isolate;
    width: 100%;
`,Kd=I.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${pl.Neutral[8]};

    ${e=>{if(!e.$visible)return E`
                display: none;
            `}}
`,Gd=I.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Zd=I.div`
    display: flex;
`,Qd=I.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?E`
                display: none;
            `:e.$expanded?E`
                ${Yd} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Jd=I.p`
    ${_l.getTextStyle("H5","regular")}
`,eu=I.div`
    display: flex;
`,tu=I(bl)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,nu=I.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,ru=I(ac.Small)`
    flex: 1;
`,iu=I.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return E`
                    gap: 0.5rem 2.5rem;
                `;case"input":return E`
                    gap: 0.5rem 1rem;
                `}}}
`,au=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?E`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${pl.Shadow.Accent};
                    border: 1px solid ${pl.Accent.Light[1]};
                }
            `:e.$disabledDisplay?E`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return E`
                    background-color: ${pl.Accent.Light[6](e)};
                `;case"selected-month":return E`
                    background-color: ${pl.Accent.Light[5](e)};
                    border: 1px solid ${pl.Primary(e)};
                `}}}
`,ou=I(Il.H5)`
    ${e=>{if(e.$disabledDisplay)return E`
                color: ${pl.Neutral[4]};
            `;switch(e.$variant){case"current-month":return E`
                    color: ${pl.Neutral[3](e)};
                `;case"selected-month":return E`
                    ${_l.getTextStyle("H5","semibold")}
                    color: ${pl.Primary(e)};
                `}}}
`,su=({calendarDate:t,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:a,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const p=g((()=>md.generateMonths(nd(t))),[t]),h=e=>{const t="start"===n&&i&&e.isAfter(i,"month")&&s,a="end"===n&&r&&e.isBefore(r,"month")&&s;return t||a},m=e=>{const t=e.format("MMMM"),n=(r=e,!md.isWithinRange(r,l?nd(l):void 0,c?nd(c):void 0,"month"));var r;const i=a.isSame(e,"month")?"selected-month":nd().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||h(e),interactive:!n||d,month:t,variant:i}};return p.length?e(iu,Object.assign({$type:o},{children:p.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,month:a}=m(t);return e(au,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(t,!r)},{children:e(ou,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n},{children:a}))}),a)}))})):null},lu=I.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return E`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return E`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,cu=I.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?E`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${pl.Shadow.Accent};
                    border: 1px solid ${pl.Accent.Light[1]};
                }
            `:e.$disabledDisplay?E`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return E`
                    background: ${pl.Accent.Light[6](e)};
                `;case"selected-year":return E`
                    background: ${pl.Accent.Light[5](e)};
                    border: 1px solid ${pl.Primary(e)};
                `}}};
`,du=I(Il.H5)`
    ${e=>{if(e.$disabledDisplay)return E`
                color: ${pl.Neutral[4]};
            `;switch(e.$variant){case"current-year":return E`
                    color: ${pl.Neutral[3](e)};
                `;case"selected-year":return E`
                    ${_l.getTextStyle("H5","semibold")}
                    color: ${pl.Primary(e)};
                `;case"other-decade":return E`
                    color: ${pl.Neutral[4](e)};
                `}}}
`,uu=({calendarDate:t,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:a,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const p=g((()=>md.generateDecadeOfYears(nd(t))),[t]),h=e=>{const t="start"===n&&i&&e.isAfter(i,"year")&&s,a="end"===n&&r&&e.isBefore(r,"year")&&s;return t||a},m=e=>{const t=[0,11].includes(p.indexOf(e)),n=e.year(),r=(i=e,!md.isWithinRange(i,l?nd(l):void 0,c?nd(c):void 0,"year"));var i;const o=t?"other-decade":a.isSame(e,"year")?"selected-year":nd().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||h(e),interactive:!r||d,year:n,variant:o}};return p.length?e(lu,Object.assign({$type:o},{children:p.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,year:a}=m(t);return e(cu,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(t,!r)},{children:e(du,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n,$interactive:r},{children:a}))}),a)}))})):null},pu=i.forwardRef(((r,i)=>{var{children:s,initialCalendarDate:l,type:c,minDate:d,maxDate:p,currentFocus:h,selectedStartDate:m,selectedEndDate:f,selectWithinRange:g,dynamicHeight:b=!1,allowDisabledSelection:y,onCalendarDateChange:x,withButton:w,doneButtonDisabled:$,onDismiss:k,showNavigationHeader:S=!0,getLeftArrowDate:O,getRightArrowDate:C,isLeftArrowDisabled:T,isRightArrowDisabled:D,getMonthHeaderLabel:j,getYearHeaderLabel:_}=r,I=lt(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[E,M]=o(xd.toDayjs(l)),[A,N]=o(xd.toDayjs(l)),[B,R]=o("default"),L=a(null),P=a(null),z=a();v(i,(()=>({defaultView(){R("default")},resetView(){const e=xd.toDayjs(l);M(e),N(e),R("default")},setCalendarDate(e){const t=xd.toDayjs(e);M(t),N(t)}}))),u((()=>{const e=xd.toDayjs(l);M(e),N(e)}),[l]),u((()=>{q(A)}),[A]);const F=()=>{var e;"month-options"!==B?(R("month-options"),null===(e=z.current)||void 0===e||e.focus()):(R("default"),M(A))},H=()=>{"default"!==B?(R("default"),M(A)):R("year-options")},W=()=>{var e;null===(e=z.current)||void 0===e||e.focus();const t=O?O(E):E.subtract(1,"month");switch(B){case"default":N(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},V=()=>{var e;null===(e=z.current)||void 0===e||e.focus();const t=C?C(E):E.add(1,"month");switch(B){case"default":N(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},Y=e=>{M(e),N(e),w||R("default")},U=()=>{const e=xd.toDayjs(l);M(e),N(e),"default"===B?X("reset"):R("default")},q=e=>{x&&x(e)},X=e=>{k&&k(e)},K=()=>{if(!d||y)return!1;const e=nd(d);return"month-options"===B?!md.isPreviousYearWithinRange(E,e):"year-options"===B?!md.isPreviousDecadeWithinRange(E,e):T?T(E):!md.isPreviousMonthWithinRange(E,e)},G=()=>{if(!p||y)return!1;const e=nd(p);return"month-options"===B?!md.isNextYearWithinRange(E,e):"year-options"===B?!md.isNextDecadeWithinRange(E,e):D?D(E):!md.isNextMonthWithinRange(E,e)},Z=()=>{if("year-options"===B){const{beginDecade:e,endDecade:t}=md.getStartEndDecade(E);return`${e} to ${t}`}return _?_(E):E.format("YYYY")},Q=()=>{const r=j?j(E):E.format("MMM");return t(n,{children:[t(Qd,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===B,$visible:"default"===B,id:"month-dropdown",onClick:F},{children:[e(Jd,{children:r}),e(Yd,{})]})),t(Qd,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==B,id:"year-dropdown",onClick:H},{children:[e(Jd,{children:Z()}),e(Yd,{})]}))]})},J=()=>{switch(B){case"month-options":return e(su,{type:c,calendarDate:E,currentFocus:h,minDate:d,maxDate:p,selectedStartDate:m,selectedEndDate:f,viewCalendarDate:A,isNewSelection:g,onMonthSelect:Y,allowDisabledSelection:y});case"year-options":return e(uu,{type:c,calendarDate:E,currentFocus:h,minDate:d,maxDate:p,selectedStartDate:m,selectedEndDate:f,viewCalendarDate:A,isNewSelection:g,onYearSelect:Y,allowDisabledSelection:y});default:return null}};return t(Ud,Object.assign({ref:z,"data-id":"calendar-container","data-testid":"calendar-container"},I,{children:[S&&t(Gd,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[e(Zd,{children:Q()}),t(eu,{children:[e(tu,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:W},{children:e(Wd,{})})),e(tu,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:e(Vd,{})}))]})]})),e(qd,{children:(()=>{const r="function"==typeof s?s({calendarDate:A,currentView:B}):s;return t(n,b?{children:["default"===B&&r,J()]}:{children:[e(Xd,{children:r}),e(Kd,Object.assign({$visible:"default"!==B},{children:J()}))]})})()}),(()=>{if(!w)return;const n=!!("default"===B)&&$;return t(nu,{children:[e(ru,Object.assign({ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),e(ru,Object.assign({"data-testid":"done-button",ref:L,type:"button",onClick:()=>{n||(M(A),"default"===B?X("confirmed"):R("default"))},disabled:n},{children:"Done"}))]})})()]}))})),hu=I.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,mu=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,fu=I.div`
    grid-column: 1 / -1;
    display: flex;
`,gu=I.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,vu=I.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return E`
                    left: 0;
                `;case"right":return E`
                    right: 0;
                `}}}
`,bu=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,yu=I(Il.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return E`
                ${_l.getTextStyle("H5","semibold")};
                color: ${pl.Accent.Light[2]};
            `;if(t)return E`
                color: ${pl.Neutral[4]};
            `;if(n)return E`
                ${_l.getTextStyle("H5","semibold")};
                color: ${pl.Primary};
            `;switch(r){case"other-month":return E`
                    color: ${pl.Neutral[4]};
                `;case"today":return E`
                    color: ${pl.Neutral[3]};
                `;case"default":return E`
                    color: ${pl.Neutral[1]};
                `}}}
`;I(vu)`
    ${e=>{const{$selected:t}=e;if(t)return E`
                border-top: 1px solid ${pl.Accent.Light[4]};
                border-bottom: 1px solid ${pl.Accent.Light[4]};
                background-color: ${pl.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?E`
                border-top: 1px dashed ${pl.Accent.Light[4]};
                border-bottom: 1px dashed ${pl.Accent.Light[4]};
                background-color: ${pl.Accent.Light[6]};
            `:n?E`
                background-color: ${pl.Accent.Light[4]};
            `:void 0}}
`;const xu=I(bu)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?E`
                background: ${pl.Accent.Light[5]};
                border: 1px solid ${pl.Primary};
            `:t?E`
                box-shadow: 0px 0px 4px 1px ${pl.Shadow.Accent};
                border: 1px solid ${pl.Accent.Light[1]};
                background-color: ${pl.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?E`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${pl.Shadow.Accent};
                    border: 1px solid ${pl.Accent.Light[1]};
                    background-color: ${pl.Neutral[8]};
                }
            `:n?E`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?E`
                border: 1px solid ${pl.Accent.Light[1]};
                background: ${pl.Accent.Light[4]};

                :hover {
                    background: ${pl.Accent.Light[4]};
                }
            `:t?E`
                color: ${pl.Neutral[4]};
            `:"today"===r?E`
                    background: ${pl.Accent.Light[5]};
                `:void 0}}
`,wu=e=>{let t=pl.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=pl.Accent.Light[5];break;case"hover-dash":t=pl.Accent.Light[6],n=`1px dashed ${pl.Accent.Light[4](e)}`;break;case"hover-current":t=pl.Neutral[8],n=`1px solid ${pl.Primary(e)}`;break;case"selected":t=pl.Accent.Light[5],n=`1px solid ${pl.Accent.Light[4](e)}`;break;case"selected-outline":t=pl.Accent.Light[5],n=`1px solid ${pl.Primary(e)}`;break;case"overlap":t=pl.Accent.Light[4],n=`1px solid ${pl.Accent.Light[4](e)}`;break;case"overlap-outline":t=pl.Accent.Light[4],n=`1px solid ${pl.Primary(e)}`}return{color:t,border:n}},$u=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,ku=I.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=wu(e);return E`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Su=I(ku)`
    left: 0;
`,Ou=I(ku)`
    right: 0;
`,Cu=I.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${pl.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Tu=I(Cu)`
    left: 0;
`,Du=I(Cu)`
    right: 0;
`,ju=I.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=wu(e);return E`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&E`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,_u=I(ju)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${pl.Shadow.Accent};
    }
`,Iu=I(ju)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${pl.Shadow.Accent};
    }
`,Eu=I(Il.H5)`
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

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?E`
                    ${_l.getTextStyle("H5","semibold")};
                    color: ${pl.Accent.Light[2]};
                `:"hidden"===n?E`
                    visibility: hidden;
                `:E`
                color: ${pl.Neutral[4]};
            `;switch(n){case"selected":return E`
                    ${_l.getTextStyle("H5","semibold")};
                    color: ${pl.Primary};
                `;case"current":return E`
                    color: ${pl.Neutral[3]};
                `;case"unavailable":return E`
                    color: ${pl.Neutral[4]};
                `;case"hidden":return E`
                    visibility: hidden;
                `;default:return E`
                    color: ${pl.Neutral[1]};
                `}}}
`,Mu=({bgLeft:n,bgRight:r,circleLeft:i,circleRight:a,shadow:o,circleShadow:s,labelType:l,disabled:c,interactive:d,date:u,onSelect:p,onHover:h,onHoverEnd:m})=>t($u,{children:[e(Tu,{$shadow:n&&o}),e(Su,{$type:n,$shadow:n&&o}),e(_u,{$type:i,$shadow:i&&s}),e(Du,{$shadow:r&&o}),e(Ou,{$type:r,$shadow:r&&o}),e(Iu,{$type:a,$shadow:a&&s}),e(Eu,Object.assign({weight:"regular",$type:l,$disabled:c,$interactive:d,onClick:()=>{p(u)},onMouseEnter:()=>{h(u)},onMouseLeave:()=>{m&&m(u)}},{children:u.date()}))]}),Au=({date:t,calendarDate:n,startDate:r,endDate:i,currentFocus:a,hoverDate:o,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:p,onSelect:h,onHover:m})=>{const f=md.isDisabledDay(t,c,s,l),g=!f||d,v=()=>{const e=nd(o),t=e.isBefore(i,"day"),n=e.isAfter(r,"day");let s,l,c,d;return"start"===a&&i&&t&&(r&&n?(c=o,d=i):(s=o,l=r||i)),"end"===a&&r&&n&&(i&&t?(c=r,d=o):(s=i||r,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},b={date:t,calendarDate:n,disabled:f,interactive:g,onSelect:()=>{h(t,!g)},onHover:()=>{m(t.format("YYYY-MM-DD"),!g)}};return e(Mu,Object.assign({},b,(()=>{const e={};if(n.month()!==t.month())e.labelType=p?"hidden":"unavailable";else if(nd().isSame(t,"day")&&!f)e.labelType="current",e.circleLeft="current",e.circleRight="current";else if(u){const n="end"===a&&r&&t.isBefore(r),o="start"===a&&i&&t.isAfter(i);(n||o)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},a=t.isSame(r,"day"),o=t.isSame(i,"day");return p&&n.month()!==t.month()?(e.labelType="hidden",e):((r&&a||i&&o)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),r&&i&&t.isBetween(r,i,"day","[]")&&(e.labelType="selected",a||(e.bgLeft="selected"),o||(e.bgRight="selected")),e)})(),(()=>{if(!o)return;const e={};t.isSame(o,"day")&&(e.circleShadow=!0,e.circleLeft="hover-current",e.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:i,overlapEnd:a}=v();if(n&&r){if(t.isBetween(n,r,"day","[]")){const i=t.isSame(n,"day"),a=t.isSame(r,"day");e.labelType="selected",i||(e.bgLeft="hover-dash"),a||(e.bgRight="hover-dash")}return e}if(i&&a){if(t.isBetween(i,a,"day","[]")){const n=t.isSame(i,"day"),r=t.isSame(a,"day");e.labelType="selected",(n||r)&&(e.circleShadow=!0,e.circleLeft="overlap-outline",e.circleRight="overlap-outline"),n||(e.bgLeft="overlap"),r||(e.bgRight="overlap")}return e}return e})()))};nd.extend(od);const Nu=({calendarDate:n,currentFocus:r,disabledDates:i,selectedStartDate:a,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:d,minDate:u,maxDate:p,allowDisabledSelection:h,showActiveMonthDaysOnly:m})=>{const f=g((()=>md.generateDays(n)),[n]),[v,b]=o(""),y=(e,t)=>{t&&!h||l(e)},x=(e,t)=>{t&&!h||(b(e),c(e))},w=()=>{b(""),c("")};return t(hu,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((t,n)=>e(mu,{children:e(Il.H6,Object.assign({weight:"semibold"},{children:nd(t).format("ddd")}))},`week-day-${n}`))),f.map(((t,o)=>e(fu,Object.assign({onMouseLeave:w},{children:t.map(((t,o)=>e(Au,{date:t,calendarDate:n,startDate:a,endDate:s,hoverDate:v,currentFocus:r,minDate:u,maxDate:p,disabledDates:i,allowDisabledSelection:h,isNewSelection:d,showActiveMonthDaysOnly:m,onSelect:y,onHover:x},`day-${o}`)))}),o)))]}))},Bu=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:d,onHover:u})=>{const p=md.isDisabledDay(t,s,a,o),h=!p||l,{start:m,end:f}=r?md.getFixedRangeStartEnd(xd.toDayjs(r),c):{start:void 0,end:void 0},{start:g,end:v}=i?md.getFixedRangeStartEnd(xd.toDayjs(i),c):{start:void 0,end:void 0},b=r&&t.isBetween(m,f,"day","[]"),y=i&&t.isBetween(g,v,"day","[]"),x=b&&t.isSame(m,"day")||y&&t.isSame(g,"day"),w=b&&t.isSame(f,"day")||y&&t.isSame(v,"day"),$=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},k={date:t,calendarDate:n,disabled:p,interactive:h,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e(Mu,Object.assign({},k,(()=>{const e={};return b||y?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":nd().isSame(t,"day")&&!p&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={},n=t.format("YYYY-MM-DD");return y&&$(e,"hover-dash",n===g,n===v),b&&$(e,"selected",n===m,n===f),b&&y&&$(e,"overlap",x,w),n===m&&(y?(e.circleLeft="overlap-outline",e.circleRight="overlap-outline"):(e.circleRight="selected-outline",e.circleLeft="selected-outline")),n===g&&(e.circleLeft="hover-current",e.circleRight="hover-current",e.circleShadow=!0,g>=m&&g<f&&(e.circleLeft="overlap-outline",e.circleRight="overlap-outline")),e})()))},Ru=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:a,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const p=g((()=>md.generateDays(n)),[n]),[h,m]=o(""),f=(e,t)=>{t&&!d||(a(e),e&&!nd(e).isSame(e,"month")&&m(""))},v=(e,t)=>{t&&!d||(m(e),s(e))},b=()=>{m(""),s("")};return t(hu,Object.assign({"data-testid":"calendar-content"},{children:[p[0].map(((t,n)=>e(mu,{children:e(Il.H6,Object.assign({weight:"semibold"},{children:nd(t).format("ddd")}))},`week-day-${n}`))),p.map(((t,a)=>e(fu,Object.assign({onMouseLeave:b},{children:t.map(((t,a)=>e(Bu,{date:t,calendarDate:n,selectedDate:i,hoverDate:h,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:f,onHover:v,numberOfDays:u},`day-${a}`)))}),a)))]}))},Lu=I.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${pl.Neutral[8]};

    ${e=>{if("input"===e.$type)return E`
                border: 1px solid ${pl.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Pu=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=md.isDisabledDay(t,s,a,o),p=!u||l,{start:h,end:m}=md.getWeekStartEnd(xd.toDayjs(r)),{start:f,end:g}=md.getWeekStartEnd(xd.toDayjs(i)),v=r&&t.isBetween(h,m,"day","[]"),b=i&&t.isBetween(f,g,"day","[]"),y=v&&t.isSame(h)||b&&t.isSame(f),x=v&&t.isSame(m)||b&&t.isSame(g),w={date:t,calendarDate:n,disabled:u,interactive:p,onSelect:()=>{c(t,!p)},onHover:()=>{d(t.format("YYYY-MM-DD"),!p)}};return e(Mu,Object.assign({},w,(()=>{const e={};return v||b?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":nd().isSame(t,"day")&&!u&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={};let t;return v&&b?(t="hover-current",e.shadow=!0,e.circleShadow=y||x):v?t="selected-outline":b&&(t="hover-dash"),t&&(y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},zu=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:a,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const u=g((()=>md.generateDays(n)),[n]),[p,h]=o(""),m=(e,t)=>{if(t&&!d)return;const n=e.startOf("week");a(n),e&&!nd(e).isSame(n,"month")&&h("")},f=(e,t)=>{t&&!d||(h(e),s(e))},v=()=>{h(""),s("")};return t(hu,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((t,n)=>e(mu,{children:e(Il.H6,Object.assign({weight:"semibold"},{children:nd(t).format("ddd")}))},`week-day-${n}`))),u.map(((t,a)=>e(fu,Object.assign({onMouseLeave:v},{children:t.map(((t,a)=>e(Pu,{date:t,calendarDate:n,selectedDate:i,hoverDate:p,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:m,onHover:f},`day-${a}`)))}),a)))]}))},Fu=i.forwardRef((({disabledDates:t,onYearMonthDisplayChange:n,onSelect:r,onHover:i,onDismiss:o,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:p,maxDate:h,allowDisabledSelection:m,type:f="standalone",selectWithinRange:g=!0,initialCalendarDate:b,numberOfDays:y,showActiveMonthDaysOnly:x=!1},w)=>{const $=a(),k=a(void 0);v(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)}})));const S=e=>{var t;const n=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(n),C(n)},O=e=>{T(e)},C=e=>{r&&r(e)},T=e=>{i&&i(e)},D=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e(Lu,Object.assign({$type:f},{children:e(pu,Object.assign({type:f,ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:p,maxDate:h,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:m,onCalendarDateChange:e=>{k.current&&k.current.isSame(e,"month")||D(e),k.current=e},initialCalendarDate:b},{children:({calendarDate:n})=>(n=>{switch(u){case"week":return e(zu,{calendarDate:n,disabledDates:t,selectedStartDate:s,minDate:p,maxDate:h,allowDisabledSelection:m,onSelect:S,onHover:O});case"fixed-range":return e(Ru,{calendarDate:n,disabledDates:t,selectedStartDate:s,minDate:p,maxDate:h,allowDisabledSelection:m,onSelect:S,onHover:O,numberOfDays:y});default:return e(Nu,{calendarDate:n,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:p,maxDate:h,isNewSelection:g,allowDisabledSelection:m,showActiveMonthDaysOnly:x,onSelect:S,onHover:O})}})(n)}))}))})),Hu=i.forwardRef(((t,n)=>{var{width:r}=t,i=lt(t,["width"]);return e(Fd,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:e(Fu,Object.assign({ref:n},i))}))})),Wu=t=>{var{className:n,styleType:r="bordered",value:i,onSelect:a}=t,s=lt(t,["className","styleType","value","onSelect"]);const[l,c]=o(i);return u((()=>{c(i)}),[i]),e(Vu,Object.assign({className:n,$hasBorder:"bordered"===r},{children:e(Fu,Object.assign({type:"standalone",value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==a||a(e)}},s))}))},Vu=I.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return E`
                border: 1px solid ${pl.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`,Yu=I.div`
    border-radius: 0.5rem;
    background: ${pl.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Uu=t=>{var{children:n}=t,r=lt(t,["children"]);const i=r["data-testid"]||"card";return e(Yu,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e(Il.Body,{children:n}):n}))},qu=M`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Xu=I.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return E`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${qu};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?pl.Neutral[4](e):e.$unchecked?pl.Accent.Light[2](e):pl.Primary(e)};
    }
`,Ku=I.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Gu=n=>{var{className:r,checked:i,disabled:o,indeterminate:s,onChange:l,onKeyPress:c,displaySize:d="default"}=n,p=lt(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const h=a();u((()=>{h.current.indeterminate=s}),[s]);const m=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(Xu,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:m,$displaySize:d,$disabled:o,$unchecked:!(s||i||o)},{children:[e(Ku,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:h,tabIndex:-1,onChange:m,disabled:o},p)),s?e(H,{"data-testid":"indeterminate"}):i?e(W,{"data-testid":"checkmark"}):o?e(V,{"data-testid":"disabled-empty-checkbox"}):e(Y,{"data-testid":"empty-checkbox"})]}))};var Zu=Va,Qu=/\s/;var Ju=function(e){for(var t=e.length;t--&&Qu.test(e.charAt(t)););return t},ep=/^\s+/;var tp=function(e){return e?e.slice(0,Ju(e)+1).replace(ep,""):e},np=ho,rp=oo,ip=/^[-+]0x[0-9a-f]+$/i,ap=/^0b[01]+$/i,op=/^0o[0-7]+$/i,sp=parseInt;var lp=function(e){if("number"==typeof e)return e;if(rp(e))return NaN;if(np(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=np(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=tp(e);var n=ap.test(e);return n||op.test(e)?sp(e.slice(2),n?2:8):ip.test(e)?NaN:+e},cp=ho,dp=function(){return Zu.Date.now()},up=lp,pp=Math.max,hp=Math.min;var mp=function(e,t,n){var r,i,a,o,s,l,c=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function m(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=a}function f(){var e=dp();if(m(e))return g(e);s=setTimeout(f,function(e){var n=t-(e-l);return u?hp(n,a-(e-c)):n}(e))}function g(e){return s=void 0,p&&r?h(e):(r=i=void 0,o)}function v(){var e=dp(),n=m(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),h(l)}return void 0===s&&(s=setTimeout(f,t)),o}return t=up(t)||0,cp(n)&&(d=!!n.leading,a=(u="maxWait"in n)?pp(up(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},v.flush=function(){return void 0===s?o:g(dp())},v},fp=Pa(mp),gp=mp,vp=ho;var bp=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return vp(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),gp(e,t,{leading:r,maxWait:t,trailing:i})},yp=Pa(bp),xp=new Map,wp=new WeakMap,$p=0;function kp(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(wp.has(e)||($p+=1,wp.set(e,$p.toString())),wp.get(e)):"0"}(e.root):e[t]}`)).toString()}function Sp(e,t,n={},r=undefined){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=kp(e);let n=xp.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver((t=>{t.forEach((t=>{var n;const a=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach((e=>{e(a,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},xp.set(t,n)}return n}(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),xp.delete(i))}}function Op({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var u;const[p,h]=r.useState(null),m=r.useRef(d),[f,g]=r.useState({inView:!!l,entry:void 0});m.current=d,r.useEffect((()=>{if(s||!p)return;let r;return r=Sp(p,((e,t)=>{g({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&o&&r&&(r(),r=void 0)}),{root:a,rootMargin:i,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,p,a,i,o,s,n,c,t]);const v=null==(u=f.entry)?void 0:u.target,b=r.useRef(void 0);p||!v||o||s||b.current===v||(b.current=v,g({inView:!!l,entry:void 0}));const y=[h,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}const Cp=I.div`
    width: 100%;
`,Tp=I.div`
    ${_l.getTextStyle("H4","semibold")}
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: ${pl.Primary};
    border: 1px solid ${pl.Primary};
    background-color: ${pl.Neutral[8]};

    ${fl.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${e=>{if(e.$warn)return E`
                color: ${pl.Validation.Red.Text};
                border: 1px solid ${pl.Validation.Red.Border};
            `}}
`,Dp=I(Tp)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,jp=I(Tp)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:n,$right:r,$warn:i}=e;return E`
            /* style object will be converted to px */
            ${{top:t,left:n,right:r}}
            box-shadow: 0px 0px 4px 1px
                ${i?pl.Validation.Red.Border:pl.Accent.Light[2]};

            ${fl.MaxWidth.mobileL} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
            }
        `}}
`,_p=I.div`
    ${_l.getTextStyle("H4","bold")}
    margin-left: 0.5rem;
    margin-right: 1.5rem;

    ${fl.MaxWidth.mobileL} {
        margin-right: 3rem;
    }
`,Ip=I.div`
    margin-left: auto;
`;var Ep,Mp;!function(e){e.AM="AM",e.PM="PM"}(Ep||(Ep={})),function(e){e.roundToNearestInterval=(e,t,n)=>{const[r,i]=e.split(":"),a=parseInt(r,10),o=parseInt(i,10);if(isNaN(a)||isNaN(o)||o<0||o>=60)throw new Error("Invalid time format");const s=60*a+o,l=s%t,c=0===l?s:n?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let i=nd(e,r),a=nd(t,r);i.isSame(a)&&(a=a.add(1,"day"));const o=[];for(;i.isBefore(a);)o.push(i.format(n)),i=i.add(1,"hour");return o},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:Ep.AM};if(!t)return n;try{if("24hr"===e){const r=Bp(t,e);n.minute=kd.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=Ep.AM,n.hour=0===i?"12":kd.padValue(i.toString())):(n.period=Ep.PM,n.hour=12===i?i.toString():kd.padValue((i-12).toString()))}else{const r=Bp(t,e);n.hour=kd.padValue(r.hour),n.minute=kd.padValue(r.minute),n.period="am"===r.period.toLowerCase()?Ep.AM:Ep.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?kd.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return kd.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?kd.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?kd.padValue(r.toString()):13===r?kd.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===Ep.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return kd.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Bp(e,t),r=kd.padValue(n.hour);let i=`${r}:${kd.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,i]=t.split(":").map(Number);let a=r;return"pm"===n&&a<12&&(a+=12),"am"===n&&12===a&&(a=0),Rp(a,i)}return e},e.generateTimings=(t,n="12hr",r,i)=>{const a=[];let o=0,s=1440-t;for(r&&(o=e.timeToMinutes(r)),i&&(s=e.timeToMinutes(i));o<=s;){let e=Math.floor(o/60);const r=o%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=Rp(e,r,t);a.push(n)}else{const t=Rp(e,r);a.push(t)}o+=t}return a},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let i=parseInt(r[1]||"0",10);const a=parseInt(r[3]||"0",10);let o=r[4];if(void 0===r[1]||i>24||a>59)return;if("a"===o?o="am":"p"===o&&(o="pm"),"24hr"===t)return"pm"===o&&i<12?i+=12:("am"===o&&12===i||24===i)&&(i=0),Rp(i,a);o?0===i||24===i?(o="am",i=12):i>12&&(o="pm",i-=12):(o=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return Rp(i,a,o)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let i="",a=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<a)a=Math.abs(n),i=t;else if(n>0)break}return i},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,i]=t.split(":").map(Number);let a=r;return"pm"===n&&12!==a&&(a+=12),"am"===n&&12===a&&(a=0),60*a+i}}(Mp||(Mp={}));const Ap=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},Np=e=>{const t=parseInt(e);return t>=0&&t<=59},Bp=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),a=n[1].substring(2);if(!Ap(n[0],t)||!Np(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Ap(n[0],t)||!Np(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},Rp=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,Lp=r=>{var{className:i,align:s="right",timer:l,timestamp:c,notifyTimer:d,offset:p,mobileOffset:h,show:m,fixed:f=!0,"data-testid":g,onFinish:v,onNotify:b,onTick:y}=r,x=lt(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const w=a(),$=a(!1),[k,S]=o(0),[O,C]=o(0),[T,D]=o(0),[j,_]=o(!1),[I]=((e,t,n)=>{const[r,i]=o(e);u((()=>{if(!t)return;const r=null!=n?n:Date.now()+1e3*e,i=a(r);return()=>clearTimeout(i)}),[n,t,e]);const a=e=>{const t=()=>{const n=e-Date.now(),r=n%1e3,a=Math.max(Math.round(n/1e3),0);if(i(a),0!==a)return setTimeout(t,r>500?r:r+1e3)};return t()};return[r]})(l,j,c),{ref:E,inView:M}=Op({threshold:1,rootMargin:-1*k+"px 0px 0px 0px",initialInView:!0}),A=!f||M,N=zc.useMediaQuery({maxWidth:hl.mobileL});u((()=>{_(m)}),[m]),u((()=>{0===I?P():I<=d&&(R(),L())}),[I]),u((()=>{const e=function(){var e,t;const n=null!==(e=null==p?void 0:p.top)&&void 0!==e?e:168,r=null!==(t=null==h?void 0:h.top)&&void 0!==t?t:80,i=N?r:n;return i}();S(e)}),[N,null==p?void 0:p.top,null==h?void 0:h.top]),u((()=>{if(w.current){const e=yp(B,300);return B(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[w.current]),u((()=>{$.current=!1}),[l,m]);const B=()=>{var e;const t=null===(e=w.current)||void 0===e?void 0:e.getBoundingClientRect();D(t.x),C(t.right)},R=()=>{y&&y(I)},L=()=>{b&&!$.current&&($.current=!0,b())},P=()=>{_(!1),v&&v()};const z=()=>{const{minutes:r,seconds:i}=Mp.toMinutesSeconds(I),a=1!==r?"mins":"min",o=1!==i?"secs":"sec";return t(n,{children:[e(U,{}),e(_p,{children:"Time left:"}),t(Ip,{children:[r," ",a," ",String(i).padStart(2,"0")," ",o]})]})};if(void 0!==typeof window)return j||0===I?t(Cp,Object.assign({className:i},x,{children:[e("div",{ref:E}),e(Dp,Object.assign({"data-testid":g,"data-id":"countdown-wrapper",ref:w,inert:A?void 0:"",$visible:A,$warn:I<=d},{children:z()})),w.current&&!A&&(()=>{var t,n;const r=null!==(t=null==p?void 0:p.left)&&void 0!==t?t:"left"===s?T:void 0,i=null!==(n=null==p?void 0:p.right)&&void 0!==n?n:"right"===s?Math.floor(document.body.clientWidth-O):void 0;return e(jp,Object.assign({"data-testid":g,"data-id":"fixed-countdown-wrapper",$warn:I<=d,$top:k,$left:r,$right:i},{children:z()}))})()]})):e(n,{})},Pp=r=>i=>{switch(r){case"maintenance":return t(n,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const r=i,a=Math.floor(r.secondsLeft/60),o=r.secondsLeft%60;return t(n,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",a," minutes"," ",o," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var zp;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:n,lg:r,width:i,height:a}=e;return{srcSet:`${t} 400w, ${n} 800w, ${r} 1200w`,src:r,sizes:`(max-width: ${hl.mobileL}px) 400px, (max-width: ${hl.tablet}px) 800px, 1200px`,width:i,height:a}}}(zp||(zp={}));const{imgAttributeHelper:Fp}=zp,Hp={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},Wp={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},Vp=Object.assign(Object.assign({},Hp),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),Yp=Object.assign(Object.assign({},Hp),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Up=e=>new Map([["400",{img:Fp(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Fp(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Fp(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Fp(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Fp(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Fp(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Fp(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Fp(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Fp(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Fp(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Fp(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Fp(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Fp(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:Pp("inactivity")}],["maintenance",{img:Fp(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:Pp("maintenance")}],["no-item-found",{img:Fp(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Fp(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Fp(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Fp(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Fp(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Fp(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]),qp=I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Xp=I.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${fl.MaxWidth.mobileL} {
        width: 20rem;
    }

    ${fl.MaxWidth.mobileM} {
        width: 18rem;
    }

    ${fl.MaxWidth.mobileS} {
        width: 15rem;
    }
`,Kp=I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Gp=I(Il.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,Zp=I.div`
    ${_l.getTextStyle("Body","regular")} // Follow styling of Text.Body
    color: ${pl.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${_l.getFontFamily("Body","semibold")}
    }

    a {
        ${_l.getTextStyle("Body","semibold")}
        color: ${pl.Primary};

        :hover,
        :active,
        :focus {
            color: ${pl.Secondary};
        }
    }
`,Qp=I(ac.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${fl.MaxWidth.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,Jp=n=>{var{type:r,img:i,title:a,description:o,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=n,u=lt(n,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const p=A(),h=((e,t)=>{switch(t){case"bookingsg":return Up(Wp).get(e);case"ccube":return Up(Vp).get(e);case"mylegacy":return Up(Yp).get(e);default:return Up(Hp).get(e)}})(r,d||(p||Dc).resourceScheme),m=u["data-testid"]||"error-display",f=()=>{switch(r){case"maintenance":{const e=l;return l&&e.dateString?h.renderDescription(e):o||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?h.renderDescription(e):o||void 0}default:return o||void 0}};if(!h)return null;const g=Object.assign(Object.assign(Object.assign(Object.assign({},h),i&&{img:i}),a&&{title:a}),f()&&{description:f()});return t(qp,Object.assign({},u,{"data-testid":m},{children:[e(Xp,Object.assign({},g.img,{alt:"","data-id":"error-display-image"})),!c&&(g.title||g.description?t(Kp,{children:[g.title&&("string"==typeof g.title?e(Gp,Object.assign({"data-testid":`${m}--title`,"data-id":"error-display-title",weight:"semibold"},{children:g.title})):g.title),g.description&&e(Zp,Object.assign({"data-testid":`${m}--description`,"data-id":"error-display-description"},{children:"string"==typeof g.description?e("p",{children:g.description}):g.description}))]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e(Qp,Object.assign({},t))})()]}))},eh=pl.Neutral[5],th=pl.Neutral[1],nh=I.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${eh};
    border-radius: 0.5rem;

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,rh=I.div`
    flex: 1;
`,ih=I.table`
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

    ${e=>{if(e.$stickyHeader)return E`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,ah=I.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`1px solid ${eh}`:"none"};
        }
    }
`,oh=I.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",n=e.$width?`${e.$width}px`:"100%";return E`
                position: fixed;
                left: ${t};
                width: ${n};
            `}return E`
                position: sticky;
                left: 0;
            `}};
`,sh=I.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&`\n            transform: translateX(-0.5%) translateY(-2rem);\n            border-radius: 4px;\n            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);\n            width: 101%;\n            border: 1px solid ${eh};\n        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: 1px solid ${eh};
    border-radius: 0 0 4px 4px;
    background-color: ${Xl.Table.Cell.Selected};
    transition: all 300ms ease;
`,lh=I.tr`
    background-color: ${Xl.Table.Header};
    height: 6rem;
    border-bottom: 1px solid ${eh};
`,ch=I.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${th};
    border-bottom: 1px solid ${eh};
    ${e=>{if(e.$isCheckbox)return E`
                width: 4rem;
            `}};
`,dh=I.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${pl.Neutral[1]};
        margin-left: 0.5rem;
    }
`,uh=I.tr`
    background-color: ${e=>e.$isSelected?E`
                ${Xl.Table.Cell.Selected};
            `:e.$alternating?E`
                ${Xl.Table.Cell.Primary};
            `:E`
                ${Xl.Table.Cell.Secondary};
            `};
    border-top: 1px solid ${eh};
    &:hover {
        ${e=>{if(!e.$isSelected&&e.$isSelectable)return E`
                    background-color: ${Xl.Table.Cell.Hover};
                `}};
    }
`,ph=I.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${th};
    border-bottom: 1px solid ${eh};
`,hh=I(Il.Body)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`,mh=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,fh=I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,gh=I(Jp)`
    h3,
    button {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }
`,vh=I.td`
    padding: 4rem 0;
`,bh=r=>{var{id:i,headers:s,rows:l,className:c,sortIndicators:d,alternatingRows:p,loadState:h="success",enableMultiSelect:f,selectedIds:g,disabledIds:v,enableActionBar:b,enableSelectAll:y,enableStickyHeader:x,emptyView:w,actionBarContent:$,renderCustomEmptyView:k,onHeaderClick:S,onSelect:O,onSelectAll:C,onClearSelectionClick:T}=r,D=lt(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const j=a(null),_=a(null),I=a(null),E=a(null),M=a(null),[A,N]=o(!1),[B,R]=o(!1),[L,P]=o(!1),[z,F]=o(!1),[H,W]=o(!1),{ref:V,inView:Y}=Op(),U=m((()=>{if(!M.current||!E.current)return;const e=M.current.scrollHeight>M.current.clientHeight;N(e),e?E.current.style.transform="translateY(0)":ne()}),[]);u((()=>{U()}),[]),an({onResize:U});Od("scroll",(()=>{requestAnimationFrame((()=>{A?te():ne()})),M.current&&P(M.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),u((()=>{re()}),[l]);const K=()=>(null==g?void 0:g.length)===l.length,G=e=>!!(null==g?void 0:g.includes(e)),Z=e=>!!p&&e%2==1,Q=e=>!!(null==v?void 0:v.includes(e)),J=e=>{if(D["data-testid"])return`${D["data-testid"]}-${e}`},ee=()=>s.length+(f?1:0),te=()=>{if(!M.current)return;const e=M.current.getBoundingClientRect();F(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},ne=()=>{if(!(j.current&&_.current&&M.current&&E.current&&I.current))return;const e=_.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,n=j.current.getBoundingClientRect().height-I.current.clientHeight-32,r=Math.min(t,n);E.current.style.transform=`translateY(-${r}px)`}else E.current.style.transform="translateY(0)"},re=()=>{j.current&&M.current&&W(j.current.clientHeight+(b?56:0)<M.current.clientHeight)},ie=n=>{const{fieldKey:r,label:i,clickable:a=!1,style:o}="string"==typeof n?{fieldKey:n,label:n,style:void 0}:n;return e(ch,Object.assign({"data-testid":J(`header-${r}`),$clickable:a,onClick:()=>a&&(null==S?void 0:S(r)),style:o,$isCheckbox:!1},{children:t(dh,{children:["string"==typeof i?e(Il.H4,Object.assign({weight:"bold"},{children:i})):i,ae(r)]})}),r)},ae=t=>{const r=null==d?void 0:d[t];return r?"asc"===r?e(q,{"data-testid":J(`header-${t}-arrowup`)}):e(X,{"data-testid":J(`header-${t}-arrowdown`)}):e(n,{})},oe=()=>e(ch,Object.assign({"data-testid":J("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e(mh,{children:y&&e(Gu,{displaySize:"small",checked:K(),indeterminate:g&&0!==g.length&&!K(),onClick:()=>{C&&C(K())}})})})),se=(t,n)=>{const r="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,a=n.id.toString(),o=n[i],s=`${a}-${i}`;return e(ph,Object.assign({"data-testid":J(`row-${s}`),style:r,$isCheckbox:!1},{children:"string"==typeof o||"number"==typeof o?e(hh,{children:o}):"function"==typeof o?o(n,{isSelected:G(a)}):o}),s)},le=t=>e(ph,Object.assign({"data-testid":J(`row-${t}-selection`),$isCheckbox:!0},{children:e(mh,{children:e(Gu,{displaySize:"small",checked:G(t),onClick:()=>{O&&O(t,!G(t))},disabled:Q(t)})})})),ce=()=>e(gh,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(Il.H3,{children:w.title}):w.title:e(Il.H3,{children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(nh,Object.assign({id:i||"table-wrapper","data-testid":D["data-testid"]||"table",className:c,ref:M,onScroll:()=>{A&&M.current&&R(M.current.scrollTop+M.current.clientHeight>=M.current.scrollHeight)}},{children:[e(rh,{children:t(ih,Object.assign({$end:L,$scrollable:A,ref:j,$stickyHeader:x},{children:[e("thead",Object.assign({ref:I},{children:t(lh,{children:[f&&oe(),s.map(ie)]})})),e(ah,Object.assign({$showLastRowBottomBorder:H},{children:"success"===h?!l||l.length<1?e("tr",{children:e(vh,Object.assign({colSpan:ee()},{children:k?k():ce()}))}):e(n,{children:null==l?void 0:l.map(((e,n)=>t(uh,Object.assign({"data-testid":J(`row-${e.id.toString()}`),$alternating:Z(n),$isSelectable:f,$isSelected:G(e.id.toString())},{children:[f&&le(e.id.toString()),s.map((t=>se(t,e)))]}),e.id.toString())))}):e("tr",{children:e("td",Object.assign({colSpan:ee()},{children:e(fh,{children:"loading"===h&&e(Nc,{})})}))})}))]}))}),b&&g&&g.length>0&&(()=>{var n,r,i;return e(oh,Object.assign({ref:E,$fixed:z,$left:null===(r=null===(n=null==j?void 0:j.current)||void 0===n?void 0:n.getBoundingClientRect())||void 0===r?void 0:r.left,$width:null===(i=null==j?void 0:j.current)||void 0===i?void 0:i.clientWidth},{children:t(sh,Object.assign({$float:(A?!B:!Y)||z,$scrollable:A},{children:[e(Il.H5,Object.assign({weight:"semibold"},{children:`${g.length} item${g.length>1?"s":""} selected`})),e(ac.Small,Object.assign({styleType:"link",onClick:T},{children:"Clear selection"})),$]}))}))})(),e("div",{ref:e=>{_.current=e,V(e)}})]}))},yh=e=>"small"===e?2.5:3,xh=I.div`
    position: relative;
    width: 100%;
    ${e=>{const t=yh(e.$variant);return E`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,wh=E`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>yh(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${pl.Accent.Light[3]};
    }
`,$h=I.button`
    ${wh}
    cursor: pointer;
`,kh=I.div`
    ${wh}
`,Sh=M`
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
`,Oh=I.div`
    position: relative;
    border: 1px solid ${pl.Neutral[5]};
    border-radius: ${"4px"};
    background: ${pl.Neutral[8]};

    :focus-within {
        border: 1px solid ${pl.Accent.Light[1]};
        box-shadow: ${Xl.InputBoxShadow};
    }

    ${e=>e.expanded?E`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:E`
                animation: ${Sh} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?E`
                background: ${pl.Neutral[6](e)};

                ${$h} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${pl.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?E`
                border: none;
                background: transparent !important;

                ${$h} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?E`
                border: 1px solid ${pl.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${pl.Validation.Red.Border(e)};
                    box-shadow: ${Xl.InputErrorBoxShadow};
                }
            `:void 0}
`;I.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Nl.Base};
    margin-left: 1rem;
`,I(he)`
    color: ${pl.Neutral[3]};
    ${e=>{let t=Sl.Body.fontSize;return"small"===e.$variant&&(t=Sl.BodySmall.fontSize),E`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`;const Ch=I.div`
    height: 1px;
    background: ${pl.Neutral[5]};
    margin: 0 0.5rem;
`,Th=I.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return E`
                color: ${pl.Neutral[3]};
            `}}
`,Dh=I.div`
    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return E`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,jh=I(Dh)`
    color: ${pl.Neutral[3]};
`,_h=({children:t,show:n,error:r,disabled:i,testId:o,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=a();return Od("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e(xh,Object.assign({className:c,$variant:d},{children:e(Oh,Object.assign({ref:u,error:r&&!n,disabled:i,$readOnly:l,expanded:n,"data-testid":o},{children:t}))}))};var Ih;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ih||(Ih={}));const Eh=()=>{const[e,t]=o(void 0),n=ge();return u((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Ih.Change,e),n.events.emit(Ih.Ready),()=>n.events.off(Ih.Change,e)}),[n]),e},Mh=I.div`
    display: flex;
    flex-direction: column;
`,Ah=e=>"right"===e?"bottom-end":"bottom-start",Nh=({enabled:r,isOpen:i,onOpen:o,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:p=!1,offset:h=0,alignment:m="left",fitAvailableHeight:f})=>{var g;const v=a(null),b=a(null),{width:y}=an({targetRef:v,handleHeight:!1}),x={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<gl.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:w,floatingStyles:$,context:k}=ve({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==l||l():e&&!i?null==o||o():!e&&i&&(null==s||s(n))},whileElementsMounted:be,placement:Ah(m),middleware:[ye(h),xe(),we({limiter:$e()}),ke({apply({availableHeight:e}){b.current&&Object.assign(b.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),x]}),S=Eh(),{isMounted:O,styles:C}=Se(k,{initial:{opacity:0},open:{opacity:1},duration:300}),T=Oe(k,{enabled:r,toggle:p}),D=Ce(k,{enabled:r}),{getReferenceProps:j,getFloatingProps:_}=Te([T,D]);return t(n,{children:[e("div",Object.assign({ref:e=>{v.current=e,w.setReference(e)}},j(),{children:c()})),O&&e(De,{children:e(je,Object.assign({context:k,modal:!1,initialFocus:b,returnFocus:!1},{children:e("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},$),{zIndex:null!==(g=null!=u?u:S)&&void 0!==g?g:50})},_(),{children:e(Mh,Object.assign({ref:b,style:Object.assign({},C),inert:C.opacity<1?"":void 0},{children:d({elementWidth:y})}))}))}))})]})},Bh=E`
    border: 1px solid ${pl.Accent.Light[1]};
    box-shadow: ${Xl.InputBoxShadow};
`,Rh=E`
    border: 1px solid ${pl.Accent.Light[1]};
    box-shadow: none;
`,Lh=E`
    border: 1px solid ${pl.Neutral[5]};
    box-shadow: none;
`,Ph=E`
    border: 1px solid ${pl.Validation.Red.Border};
    box-shadow: ${Xl.InputErrorBoxShadow};
`,zh=I.div`
    border: 1px solid ${pl.Neutral[5]};
    border-radius: 4px;
    background: ${pl.Neutral[8]};

    :focus-within {
        ${Bh}
    }
    ${e=>e.$focused&&Bh}

    ${e=>e.$readOnly?E`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Rh}
                }
                ${e.$focused&&Rh}
            `:e.$disabled?E`
                background: ${pl.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Lh}
                }
                ${e.$focused&&Lh}
            `:e.$error?E`
                border: 1px solid ${pl.Validation.Red.Border};

                :focus-within {
                    ${Ph}
                }
                ${e.$focused&&Ph}
            `:void 0}
`,Fh=I(zh)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Hh=I.input`
    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${pl.Neutral[1]};
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
        color: ${pl.Neutral[3]};
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
`,Wh=I.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${pl.Primary};
    }
`,Vh=I.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Yh=I.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return E`
                ${Uh}, ${Gh} {
                    color: ${pl.Neutral[4]};
                }
            `}}
`,Uh=I(Hh)`
    background: transparent;
    text-align: center;
`,qh=I(Uh)`
    width: 2rem;
    margin-right: 0.25rem;
`,Xh=I(Uh)`
    width: 2.5rem;
`,Kh=I(Uh)`
    width: 3rem;
    margin-left: 0.25rem;
`,Gh=I(Il.Body)`
    ${e=>{if(e.$inactive)return E`
                color: ${pl.Neutral[3](e)};
            `}}
`,Zh=I.div`
    ${_l.getTextStyle("Body","regular")}
    background-color: ${pl.Neutral[8]};
    color: ${pl.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?E`
                background-color: ${pl.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?E`
                display: none;
            `:void 0}
`;nd.extend(id);const Qh=i.forwardRef((({disabled:n,readOnly:r,names:i,value:s,focused:l,hoverValue:c,placeholder:d,label:p,onChange:h,onFocus:m,onBlur:f,hideInputKeyboard:g},b)=>{const y=g?"none":"numeric",[x,w,$]=_d(""),[k,S,O]=_d(""),[C,T,D]=_d(""),[j,_]=o("none"),[I,E]=o(!1),M=a(null),A=a(null),N=a(null),B=a(null),[R,L,P]=Y(c);u((()=>{var e;const[t="",n="",r=""]=Y(s);w(t),S(n),T(r),t||n||r||!M.current||!M.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[s]),u((()=>{l||_("none"),l&&(E(!0),A.current&&M.current&&!M.current.contains(document.activeElement)&&A.current.focus())}),[l]),v(b,(()=>({ref:M,resetPlaceholder(){E(!1)},resetInput(){const[e="",t="",n=""]=Y(s);w(e),S(t),T(n)}})),[s]);const z=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},F=e=>{e.target.select();const t=e.target.name;_(t)},H=e=>{const[t,n,r]=i,a={[t]:$.current,[n]:O.current,[r]:D.current},o=e.target.name,s=a[o],l=o!==r?kd.padValue(s,!0):s;switch(o){case t:a[t]=l,w(l);break;case n:a[n]=l,S(l)}const c=`${a[r]}-${a[n]}-${a[t]}`,d=nd(c,"YYYY-MM-DD",!0).isValid(),u=!a[t]&&!a[n]&&!a[r];d&&s!==l&&h(c),M.current&&!M.current.contains(e.relatedTarget)&&(_("none"),null==f||f(u||d))},W=e=>{var t,n;if(c)return;const r=e.target.name,a=e.target.value.replace(/[^0-9]/g,""),o={day:x,month:k,year:C};switch(r){case i[0]:o.day=a,w(a),2===a.length&&(null===(t=N.current)||void 0===t||t.focus());break;case i[1]:o.month=a,S(a),2===a.length&&(null===(n=B.current)||void 0===n||n.focus());break;case i[2]:o.year=a,T(a)}if(!o.day&&!o.month&&!o.year)return void h("");const s=`${o.year}-${o.month}-${o.day}`;nd(s,"YYYY-MM-DD",!0).isValid()&&h(s)},V=e=>{var t,n;"Backspace"!==e.code&&"Backspace"!==e.key||(j===i[1]&&0===k.length&&(null===(t=A.current)||void 0===t||t.focus()),j===i[2]&&0===C.length&&(null===(n=N.current)||void 0===n||n.focus()))};function Y(e){if(e){const t=nd(new Date(e));return t.isValid()?[kd.padValue(t.date().toString()),kd.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(Vh,Object.assign({role:"group","aria-label":p,onClick:()=>{n||r||(E(!0),A.current&&M.current&&!M.current.contains(document.activeElement)&&A.current.focus())},onFocus:e=>{n||(E(!0),l||null==m||m(e))}},{children:[t(Yh,Object.assign({ref:M,$hover:!!c},{children:[e(qh,{ref:A,name:i[0],maxLength:2,value:null!=R?R:x,onFocus:F,onBlur:H,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:j!==i[0]||r?"DD":""}),e(Gh,Object.assign({$inactive:0===x.length},{children:"/"})),e(Xh,{ref:N,name:i[1],maxLength:2,value:null!=L?L:k,onFocus:F,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:j!==i[1]||r?"MM":""}),e(Gh,Object.assign({$inactive:0===k.length},{children:"/"})),e(Kh,{ref:B,name:i[2],maxLength:4,value:null!=P?P:C,onFocus:F,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:j!==i[2]||r?"YYYY":""})]})),(()=>{if(!s&&!r&&d)return e(Zh,Object.assign({$hide:I,$disabled:n,onMouseDown:z},{children:d}))})()]}))})),Jh=I(Fh)`
    height: 3rem;
`,em=t=>{var{minDate:n,maxDate:r,disabled:i,disabledDates:s,error:l,hideInputKeyboard:c,value:d,onChange:p,onFocus:h,onBlur:m,onYearMonthDisplayChange:f,withButton:g=!0,readOnly:v,id:b,allowDisabledSelection:y,zIndex:x}=t,w=lt(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[$,k]=o(wd.sanitizeInput(d)),[S,O]=o(wd.sanitizeInput(d)),[C,T]=o(void 0),[D,j]=o(!1),[_,I]=o(!1),E=a(null),M=a();u((()=>{const e=wd.sanitizeInput(d);k(e),O(e)}),[d]);const A=e=>{!y&&wd.isDateDisabled(e,{disabledDates:s,minDate:n,maxDate:r})||(O(e),g||(z(e),k(e),e&&j(!1)))},N=e=>{var t;O(e),g||(z(e),k(e),e&&(null===(t=E.current)||void 0===t||t.focus(),j(!1)),C&&T(void 0))},B=()=>{v||i||(j(!0),_||(I(!0),h&&h()))},R=e=>{var t;_&&!D&&E.current&&!E.current.contains(e.relatedTarget)&&(null===(t=M.current)||void 0===t||t.resetInput(),O($),I(!1),F())},L=e=>{T(e)},P=e=>{var t;switch(e){case"reset":O($);break;case"confirmed":k(S),z(S)}null===(t=E.current)||void 0===t||t.focus(),j(!1)},z=e=>{p&&p(e)},F=()=>{m&&m()};return e(Nh,{enabled:!v&&!i,isOpen:D,renderElement:()=>e(Jh,Object.assign({tabIndex:-1,ref:E,onBlur:R,onFocus:B,$disabled:i,$readOnly:v,$focused:_,$error:l,id:b,"data-testid":w["data-testid"]},w,{children:e(Qh,{ref:M,disabled:i,onChange:A,readOnly:v,focused:D,names:["start-day","start-month","start-year"],value:S,hoverValue:C,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e(Hu,{type:"input",variant:"single",initialCalendarDate:S,withButton:g,value:S,disabledDates:s,minDate:n,maxDate:r,allowDisabledSelection:y,onHover:L,onSelect:N,onDismiss:P,onYearMonthDisplayChange:f,width:t}),onClose:()=>{var e;null===(e=M.current)||void 0===e||e.resetInput(),O($),j(!1),I(!1),F()},onDismiss:()=>{var e,t;null===(e=M.current)||void 0===e||e.resetInput(),null===(t=E.current)||void 0===t||t.focus(),O($),j(!1)},customZIndex:x,offset:16})},tm=I(bl)`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    margin: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${pl.Neutral[5]};
    background-color: ${pl.Neutral[8]};
    :hover {
        background-color: ${pl.Neutral[7]};
    }
    :disabled {
        cursor: not-allowed;
        background-color: ${pl.Neutral[6]};
    }
`,nm=I.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${pl.Neutral[7]};
    border-radius: 0.25rem;
`,rm=I(ac.Default)`
    color: ${e=>e.$enableDateClick?pl.Primary:pl.Neutral[1]};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0.5rem 0;
    padding: 0;
    ${e=>e.$enableDateClick?E`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `:E`
            background-color: ${pl.Neutral[7]};
            :hover {
                cursor: default;
            }
        `}
`,im=n=>{var{selectedDate:r,minDate:i,maxDate:a,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:c,onLeftArrowClick:d,onRightArrowClick:u,onCalendarDateSelect:p}=n,h=lt(n,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const m=xd.toDayjs(r),f=xd.toDayjs(r).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),g=xd.isSame(r,nd())&&c?"Today":m.format(l?"ddd":"dddd"),[v,b]=o(!1),y=e=>{p&&p(e),b(!v)},x=()=>{b(!1),d(r)},w=()=>{b(!1),u(r)};return e(Nh,{enabled:!s,isOpen:v,renderElement:()=>t(nm,Object.assign({},h,{children:[e(tm,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!i&&(md.isDisabledDay(m,void 0,i)||xd.isSame(m,i)),focusHighlight:!1,focusOutline:"browser","aria-label":"Previous day",onClick:x},{children:e(Wd,{})})),e(rm,Object.assign({onClick:()=>!!p&&!s&&b(!v),$enableDateClick:!!p&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!p||s},{children:`${f}, ${g}`})),e(tm,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!a&&(md.isDisabledDay(m,void 0,void 0,a)||xd.isSame(m,a)),focusHighlight:!1,focusOutline:"browser","aria-label":"Next day",onClick:w},{children:e(Vd,{})}))]})),renderDropdown:({elementWidth:t})=>e(Hu,{type:"input",variant:"single",initialCalendarDate:r,value:r,minDate:i,maxDate:a,onSelect:y,width:t}),onDismiss:()=>b(!1),onClose:()=>b(!1),offset:8})},am=I.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return E`
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
`,om=I.div`
    width: 100%; // Force next flex item to break to next line
`,sm=I.div`
    display: flex;
    flex: 1;
    align-items: center;
`,lm=I(K)`
    color: ${pl.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,cm=I.div`
    position: absolute;
    background: ${e=>e.$error?pl.Validation.Red.Border(e):pl.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return E`
                    opacity: 1;
                `;case"end":return E`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return E`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return E`
                display: none;
            `}}
`,dm=({children:n,currentActive:r,error:i,className:a,wrap:o})=>{const[s,l]=n;return t(am,Object.assign({className:a,$wrap:o},{children:[e(sm,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),e(lm,{}),o&&e(om,{}),e(sm,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),e(cm,{"data-id":"range-container-indicator",$position:r,$error:i,$wrap:o})]}))},um=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},pm=I(Fh)`
    ${e=>e.$wrap&&E`
            padding: 0.75rem 1rem;
        `}
`,hm=I.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&E`
            height: fit-content;
        `}
`,mm={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},fm=n=>{var{minDate:r,maxDate:i,disabled:s,disabledDates:l,error:c,hideInputKeyboard:d,value:p,valueEnd:h,onChange:f,onFocus:g,onBlur:v,onYearMonthDisplayChange:b,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:k,id:S,allowDisabledSelection:O,zIndex:C}=n,T=lt(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[D,j]=o(),[_,I]=o(void 0),[E,M]=o(!1),[A,N]=o(!1),B="week"===w,R="fixed-range"===w,[{selectedStart:L,selectedEnd:P,currentFocus:z,calendarOpen:F,isStartDirty:H,isEndDirty:W,focused:V},Y]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[i,a]=x(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&um(n,e,t),a({type:e,payload:t})}])))]})({name:"date-range-input",initialState:mm,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:B?"none":R?"start":t,calendarOpen:!k,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=a(!1),q=a(),X=a(),K=a(),G=a(),Z=(({maxWidth:e,targetRef:t})=>{const[n,r]=o(!1);return an({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:m((t=>{r(t<=e)}),[e])}),n})({maxWidth:320,targetRef:q});u((()=>{Y.resetRange({start:wd.sanitizeInput(p),end:wd.sanitizeInput(h)})}),[p,h]),u((()=>{"start"===z?j(L):"end"===z&&j(P)}),[z]);const Q=e=>{var t,n,r;"Enter"!==e.code||y||(L&&P?(Y.done({start:L,end:P}),null==f||f(L,P)):(Y.dismiss(),null===(t=q.current)||void 0===t||t.focus(),null===(n=K.current)||void 0===n||n.resetPlaceholder(),null===(r=G.current)||void 0===r||r.resetPlaceholder()))},J=e=>{var t;if(pe(e))return void(U.current=!0);if(Y.changeStart(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(y||P||!W||(Y.resetRange({start:"",end:""}),null==f||f("","")));if(!P)return void Y.focus("end");if(nd(e).isAfter(P,"day"))Y.reselectEnd();else{if(W)return y?void 0:(Y.done({start:e,end:P}),void(null==f||f(e,P)));Y.focus("end")}},ee=e=>{var t;if(pe(e))return void(U.current=!0);if(nd(e).isBefore(L,"day")&&X.current)return Y.changeStart(e),X.current.setCalendarDate(e),void Y.reselectEnd();if(Y.changeEnd(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),e){if(L)return y?void 0:(Y.done({start:L,end:e}),void(null==f||f(L,e)));Y.focus("start")}else y||L||!H||(Y.resetRange({start:"",end:""}),null==f||f("",""))},te=e=>{var t;if(pe(e))return void(U.current=!0);if(Y.changeStart(e),null===(t=X.current)||void 0===t||t.setCalendarDate(e),U.current=!1,!e)return void(y?Y.changeEnd(""):(Y.resetRange({start:"",end:""}),null==f||f("","")));const n=nd(e).format("YYYY-MM-DD"),r=nd(n).add($-1,"day").format("YYYY-MM-DD");return Y.changeStart(n),Y.changeEnd(r),U.current=!1,y?void 0:(Y.done({start:n,end:r}),void(null==f||f(n,r)))},ne=()=>{k||s||V||(Y.focus("start"),null==g||g())},re=e=>{var t,n,r;V&&!F&&q.current&&!(null===(t=q.current)||void 0===t?void 0:t.contains(e.relatedTarget))&&(Y.blur(),M(!1),N(!1),null===(n=K.current)||void 0===n||n.resetPlaceholder(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null==v||v())},ie=e=>t=>{t.stopPropagation(),k||(Y.focus(e),ae(),oe(),V||null==g||g())},ae=()=>{if(B){const e=xd.toDayjs(L).startOf("week").format("YYYY-MM-DD");M(!0),N(!0),j(e)}},oe=()=>{R&&(N(!0),j(L))},se=e=>{var t;e&&!U.current||(Y.resetStart(),null===(t=K.current)||void 0===t||t.resetInput())},le=e=>{var t;e&&!U.current||(Y.resetEnd(),null===(t=G.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{const t=nd(e).startOf("week").format("YYYY-MM-DD"),n=nd(e).endOf("week").format("YYYY-MM-DD");if(Y.changeStart(t),Y.changeEnd(n),U.current=!1,!y)Y.done({start:t,end:n}),null==f||f(t,n)})(e);break;case"fixed-range":te(e);break;default:"start"===z?J(e):"end"===z&&ee(e)}},de=e=>{var t;switch(null===(t=q.current)||void 0===t||t.focus(),e){case"reset":Y.cancel();break;case"confirmed":Y.done({start:L,end:P}),null==f||f(L,P)}},ue=e=>{I(e)},pe=e=>!O&&e&&wd.isDateDisabled(e,{disabledDates:l,minDate:r,maxDate:i}),he=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===z?_:void 0,end:"end"===z?_:void 0};break;case"week":if(!_)return;t={start:nd(_).startOf("week").format("YYYY-MM-DD"),end:nd(_).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!_)return;t={start:nd(_).format("YYYY-MM-DD"),end:nd(_).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Nh,{enabled:!k&&!s,isOpen:F,onClose:()=>{var e,t;Y.blur(),M(!1),N(!1),null===(e=K.current)||void 0===e||e.resetPlaceholder(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null==v||v()},onDismiss:()=>{var e,t,n;Y.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(t=K.current)||void 0===t||t.resetPlaceholder(),null===(n=G.current)||void 0===n||n.resetPlaceholder()},renderElement:()=>e(pm,Object.assign({ref:q,tabIndex:-1,onFocus:ne,onBlur:re,$focused:V,$disabled:s,$readOnly:k,$error:c,$wrap:Z,id:S,"data-testid":T["data-testid"],onKeyDown:Q},T,{children:t(dm,Object.assign({currentActive:z,wrap:Z,error:c},{children:[e(hm,Object.assign({$wrap:Z},{children:e(Qh,{ref:K,placeholder:"From",names:["start-day","start-month","start-year"],value:L,disabled:s,readOnly:E||k,focused:"start"===z,hoverValue:he("start"),onChange:R?te:J,onFocus:ie("start"),onBlur:se,hideInputKeyboard:d})})),e(hm,Object.assign({$wrap:Z},{children:e(Qh,{ref:G,placeholder:"To",names:["end-day","end-month","end-year"],value:P,disabled:s,readOnly:A||k,focused:"end"===z,hoverValue:he("end"),onChange:ee,onFocus:ie("end"),onBlur:le,hideInputKeyboard:d})}))]}))})),renderDropdown:({elementWidth:t})=>e(Hu,{ref:X,type:"input",variant:w,initialCalendarDate:D,withButton:y,value:L,endValue:P,selectWithinRange:H||W,currentFocus:z,disabledDates:l,minDate:r,maxDate:i,allowDisabledSelection:O,onSelect:ce,onDismiss:de,onHover:ue,onYearMonthDisplayChange:b,numberOfDays:$,width:t}),customZIndex:C,offset:16})},gm=I.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:a,$mobileSpan:o}=e;return E`
            grid-column: ${t||"auto"} / span ${n||1};

            ${fl.MaxWidth.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${fl.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${o||1};
            }
        `}}
`,vm=i.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=t,o=lt(t,["mobileCols","tabletCols","desktopCols"]);return e(gm,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=bm(a||i||r),o=bm(e),s=bm(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),bm=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},ym=()=>e=>{let t;t=e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||pl.Neutral[5](e);const n=encodeURIComponent(t),r=e.$thickness||1;return E`
        background-color: transparent;
        height: ${r}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${r}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${r+1}" stroke-dasharray="4 4" /></svg>');
    `},xm=I.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return E`
                    ${ym}
                `;case"solid":return E`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||pl.Neutral[5]};
                `}}}
`,wm=t=>{var{thickness:n=1,lineStyle:r="solid",layoutType:i="flex",color:a,className:o,mobileCols:s=4,tabletCols:l=8,desktopCols:c=12}=t,d=lt(t,["thickness","lineStyle","layoutType","color","className","mobileCols","tabletCols","desktopCols"]);switch(i){case"flex":return e(xm,Object.assign({className:o,$thickness:n,$lineStyle:r,$color:a},d));case"grid":return e(vm,Object.assign({className:o,mobileCols:s,tabletCols:l,desktopCols:c},d,{children:e(xm,{$thickness:n,$lineStyle:r,$color:a})}))}},$m=I.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return E`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,km=I.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=E`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=E`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=E`
                transition: none;
            `),t}}
`,Sm=({show:t=!1,rootId:n,onOverlayClick:r,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:p=!1,zIndex:h,id:m})=>{const[f,g]=o(null),[v,b]=o(),[y]=o((()=>$d.generate())),x=Ie(),w=a(),$=a(null),k=s&&i.cloneElement(s,{ref:$}),S=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root",O=null!=h?h:v?99999:99998;(e=>{const t=ge();u((()=>{if(!t)return;const n={zIndex:e};t.events.emit(Ih.Change,n)}),[t,e]),u((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(Ih.Change,n)};return null==t||t.events.on(Ih.Ready,n),()=>null==t?void 0:t.events.off(Ih.Ready,n)}),[t,e])})(O),u((()=>(_(),g(D()),()=>{A(),E().length<1&&I("remove")})),[]),u((()=>{if(t){const e=j();T(e),M();const t=setTimeout((()=>{I("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{E().length<1&&I("remove")}),200);return()=>clearTimeout(e)}}),[t]);const T=e=>{w.current=e,b(e)},D=()=>document&&n?document.getElementById(n):document?document.body:null,j=()=>E().length>0,_=()=>{if(!document.getElementById(Cm)){const e=document.createElement("style");e.id=Cm;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Tm} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Tm}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},I=e=>{const t=document.body.classList.contains(Tm);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Tm):document.body.classList.add(Tm)},E=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},N=e=>{var t;const n=null===(t=$.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&p&&(e.preventDefault(),r())};return f?C.createPortal(e($m,Object.assign({id:S,"data-testid":S,$show:t,$zIndex:O},{children:s&&e(Ee,Object.assign({id:x},{children:e(km,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:l||(v?.5:.8),$backgroundBlur:c,$disableTransition:d,onClick:N},{children:k}))}))})),f):null},Om=t=>e(_e,{children:e(Sm,Object.assign({},t))}),Cm="lifesg-ds-overlay-stylesheet",Tm="lifesg-ds-overlay-open",Dm=I.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${pl.Neutral[8]};
    box-shadow: 0px 2px 12px rgba(104, 104, 104, 0.25);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?E`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:E`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}

    width: 40%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow: hidden;

    ${fl.MaxWidth.desktopL} {
        width: 50%;
        min-width: 700px;
    }

    ${fl.MaxWidth.tablet} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,jm=I.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    padding: 2rem 1rem 1rem;
    background-color: ${pl.Neutral[8]};
    border-bottom: 1px solid ${pl.Neutral[5]};

    ${fl.MaxWidth.tablet} {
        gap: 0.5rem;
        padding: 2rem 1.25rem 1rem;
    }
`,_m=I(bl)`
    color: ${pl.Neutral[3]};
    padding: 0;
    order: -1; // show button on the left of the header

    :active,
    :focus {
        color: ${pl.Primary};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Im=I(Il.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Em=I.div`
    flex: 1;
    overflow-y: auto;
`,Mm=n=>{var{children:r,heading:i,show:s,onClose:l,onOverlayClick:c}=n,d=lt(n,["children","heading","show","onClose","onOverlayClick"]);const[p,h]=o(s),[m]=o((()=>$d.generate())),f=a();u((()=>{if(!s){const e=setTimeout((()=>h(!1)),500);return()=>clearTimeout(e)}h(!0)}),[s]);return e(Om,Object.assign({show:p,enableOverlayClick:!0,onOverlayClick:c},{children:t(Dm,Object.assign({$show:s,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":m,onTransitionEnd:e=>{"visibility"===e.propertyName&&s&&f.current&&f.current.focus()}},d,{children:[t(jm,{children:[e(Im,Object.assign({id:m,ref:f,tabIndex:-1},{children:i})),e(_m,Object.assign({"aria-label":"Close drawer",onClick:l,focusHighlight:!1},{children:e(Ae,{"aria-hidden":!0})}))]}),e(Em,{children:r})]}))}))},Am=({className:t,progress:n,color:r,"data-testid":i})=>e(Nm,Object.assign({className:t,$innerWidth:n,$color:r,"data-testid":i},{children:e("progress",{value:100*n,max:100})})),Nm=I.div`
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

    ${e=>{const{$color:t}=e;let n;return n=t&&"string"==typeof t?t:t?t(e):pl.Accent.Light[1](e),E`
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
`,Bm=I.button`
    align-items: center;
    background-color: ${pl.Primary};
    border-radius: 0.25rem;
    color: ${pl.Neutral[8]};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return E`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return E`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return E`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return E`
                    background-color: ${pl.Neutral[8]};
                    border: 1px solid ${pl.Primary};
                    color: ${pl.Primary};
                `;case"light":return E`
                    background-color: ${pl.Neutral[8]};
                    border: 1px solid ${pl.Neutral[5]};
                    color: ${pl.Primary};
                `;default:return E`
                    background-color: ${pl.Primary};
                    border: none;
                    color: ${pl.Neutral[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${pl.Neutral[6]};
        border: 1px solid ${pl.Neutral[6]};
        color: ${pl.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`,Rm=i.forwardRef(((t,n)=>{var{"data-testid":r,styleType:i="primary",children:a,sizeType:o="default",type:s="button"}=t,l=lt(t,["data-testid","styleType","children","sizeType","type"]);return e(Bm,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:o,$styleType:i},l,{children:a}))})),Lm=I.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${fl.MaxWidth.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Pm=t=>{var{id:n="modal",show:r,animationFrom:i="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:p=!0}=t,h=lt(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[m,f]=o(),[g,v]=o();u((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{window.visualViewport.removeEventListener("resize",y)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),u((()=>{var e,t;r&&p&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const b=()=>{const e=.01*window.innerHeight;f(e)},y=()=>{const e=.01*window.visualViewport.height;f(e),v(window.visualViewport.offsetTop)};return e(Om,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:s,onOverlayClick:d,id:n,rootId:l,zIndex:c},{children:e(Lm,Object.assign({show:r,animationFrom:i,"data-testid":n,verticalHeight:m,offsetTop:g},h,{children:a}))}))},zm=I.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${pl.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${fl.MaxWidth.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Fm=I(bl)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${pl.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${pl.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${fl.MaxWidth.mobileL} {
        right: 1.25rem;
    }
`,Hm=n=>{var{id:r="modal-box",children:i,onClose:a,showCloseButton:o=!0}=n,s=lt(n,["id","children","onClose","showCloseButton"]);return t(zm,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[o&&e(Fm,Object.assign({onClick:a,"data-testid":"close-button",focusHighlight:!1},{children:e(Ae,{})})),i]}))},Wm=Object.assign(Pm,{Box:Hm}),Vm=` ${fl.MaxWidth.mobileL}, (orientation: landscape) and (max-height: ${gl.mobileL}px)`,Ym=`@media(orientation: landscape) and (max-height: ${gl.mobileL}px)`,Um=I.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(pl.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${pl.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,qm=I(ac.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,Xm=I(Rm)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,Km=I.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`,Gm=I.div`
    background: ${pl.Accent.Light[6]};
    border: 1px solid ${pl.Neutral[5]};
    border-radius: 4px;
    margin: 0 2rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Zm=I(Il.H6)`
    margin-top: 1rem;
`,Qm=I(Wm)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Jm=I.div`
    width: 100%;
    margin: auto;
    padding: 5rem 1.25rem;

    ${Vm} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,ef=I(Wm.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${Vm} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`,tf=I.h4`
    ${_l.getTextStyle("H4","semibold")}
    margin-bottom: 1rem;
    color: ${pl.Neutral[1]};
    text-align: center;

    ${Vm} {
        ${_l.getTextStyle("H5","semibold")}
        margin: 0.75rem 0;
    }
`,nf=I.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${Vm} {
        border-radius: 0;
        flex: 1;
    }

    ${Ym} {
        background: ${pl.Neutral[7]};
    }
`,rf=I.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${pl.Neutral[6]};
    margin: auto;

    ${Vm} {
        aspect-ratio: 4/3;
    }
    ${fl.MaxWidth.mobileL} {
        width: 100%;
        height: auto;
    }
    ${Ym} {
        width: auto;
        height: 100%;
    }
`,af=I.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${pl.Neutral[4]};
    pointer-events: none;

    ${Vm} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`,of=I.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${fl.MaxWidth.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${Ym} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,sf=I(ac.Default)`
    width: 8.5rem;
    ${fl.MaxWidth.mobileL} {
        width: 100%;
    }
    ${Ym} {
        height: 2.5rem;
    }
`,lf=I.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,cf=I.canvas`
    cursor: crosshair;
`,df=b((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.a4ae3c4b.js")).ESignatureCanvas}})))),uf=r=>{const{description:i,id:s,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:p}=r,h=lt(r,["description","id","loadingProgress","loadingLabel","onChange","value"]),[m,f]=o(!1),g=a(null),[v,b]=o(p),x=zc.useMediaQuery({maxWidth:gl.mobileL}),w=()=>{var e;null===(e=g.current)||void 0===e||e.clear()},$=()=>{var e;if(g.current){const t=null===(e=g.current)||void 0===e?void 0:e.export();b(t),f(!1),null==d||d(t)}};u((()=>{b(p)}),[p]);return t("div",Object.assign({},h,{children:[e(Um,{children:isNaN(l)?v?t(n,{children:[e(Km,{src:v,alt:"Signature preview"}),e(Xm,Object.assign({styleType:"light",onClick:()=>f(!0),id:s,"aria-label":"Edit signature"},{children:e(G,{})}))]}):e(qm,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:s,onClick:()=>f(!0)},{children:"Add signature"})):t(Gm,{children:[c&&e(Il.BodySmall,{children:c}),e(Am,{progress:l,"data-testid":`${s||"e-signature"}-progress-bar`})]})}),e(Qm,Object.assign({"data-testid":"signature-modal",show:m},{children:e(Jm,{children:t(ef,Object.assign({onClose:()=>f(!1)},{children:[e(tf,{children:"Signature"}),e(nf,{children:t(rf,{children:[e(af,{}),e(y,Object.assign({fallback:null},{children:m&&e(df,{ref:g,baseImageDataURL:v})}))]})}),t(of,{children:[e(sf,Object.assign({as:zd.Default,type:"button",styleType:x?"light":"link",icon:e(Z,{}),onClick:w},{children:"Clear"})),e(sf,Object.assign({type:"button",onClick:$},{children:"Save"}))]})]}))})})),i?e(Zm,Object.assign({weight:"regular",as:"p"},{children:i})):null]}))},pf="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",hf="Submit",mf="Rate your experience",ff=5,gf=I.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,vf=E`
    width: 2.75rem;
    height: 2.75rem;
    color: ${pl.Primary};
    ${gf}:focus-visible + & {
        outline: 0.125rem solid ${pl.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,bf=I(Ne)`
    ${vf}
`,yf=I(Be)`
    ${vf}
`,xf=I.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,wf=I.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,$f=n=>{const{description:r,rating:i,onRatingChange:a}=n,o=t=>{const n=`${t} star${1===t?"":"s"}`;return e(t<=i?yf:bf,{"aria-label":n})};return e(wf,Object.assign({role:"radiogroup","aria-label":r},{children:[...Array(ff)].map(((n,r)=>{const s=r+1;return t(xf,{children:[e(gf,{type:"radio",name:"star",checked:s===i,onChange:()=>(e=>{a(e)})(s)}),o(s)]},s)}))}))},kf=I.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Sf=I.div`
    border-top: 1px solid ${pl.Neutral[5]};
    border-bottom: 1px solid ${pl.Neutral[5]};
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
`,Of=I.div`
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
`,Cf=I(ac.Default)`
    margin-top: 1rem;
    width: 100%;
`,Tf=n=>{const{imgSrc:r,buttonLabel:i,description:a,rating:o,onRatingChange:s,onSubmit:l}=n,c=lt(n,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=r?r:pf,u=null!=a?a:mf;return t(Sf,Object.assign({},c,{children:[d&&e(kf,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),t(Of,{children:[e(Il.H3,Object.assign({weight:"semibold"},{children:u})),e($f,{description:u,rating:o,onRatingChange:s}),e(Cf,Object.assign({disabled:!o,onClick:l,type:"button"},{children:null!=i?i:hf}))]})]}))},Df=I.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border){const t=encodeURIComponent(pl.Neutral[5](e));return E`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${fl.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `}}}
`,jf=I.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,_f=I(Il.H4)`
    margin-bottom: 0.5rem;
`,If=I.div`
    color: ${pl.Neutral[1]};
    ${uc({textSize:"Body"})}
`,Ef=I(Il.BodySmall)`
    margin-bottom: 0;
    color: ${pl.Neutral[3]};
`,Mf=I.div`
    color: ${pl.Neutral[3]};
    ${uc({textSize:"BodySmall"})}
`,Af=I.ul`
    list-style-type: none;
`;var Nf;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Nf||(Nf={}));const Bf=({src:t,alt:n,className:r,"data-testid":i})=>e("img",{src:t,alt:n||"",className:r,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Rf=I.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: 1rem;
    }
`,Lf=I.div`
    background: ${pl.Accent.Light[6]};
    border: 1px solid ${pl.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    ${fl.MaxWidth.mobileL} {
        padding: 1rem;
    }
    :hover {
        background: ${pl.Accent.Light[5]};
    }
`,Pf=I.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${fl.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return E`
                ${fl.MaxWidth.mobileL} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,zf=I.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,Ff=I.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${fl.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,Hf=I.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;
    ${fl.MaxWidth.mobileL} {
        width: 100%;
        margin-left: 0;
        margin-top: 0.5rem;
        justify-content: flex-start;
    }
`,Wf=I(Il.BodySmall)`
    ${fl.MaxWidth.mobileL} {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: normal;
    }
`;I(Wf)`
    margin-top: 0.25rem;
`;const Vf=I(Il.XSmall)`
    font-size: 0.875rem !important;
    color: ${pl.Validation.Red.Text};
`,Yf=I(Vf)`
    margin-top: 0.25rem;
    ${fl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,Uf=I(Vf)`
    display: none;
    visibility: hidden;
    ${fl.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,qf=I(tc)`
    ${e=>{let t=pl.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=pl.Neutral[3](e);break;default:t=pl.Neutral[8](e)}return E`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Xf=I.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${fl.MaxWidth.mobileL} {
        width: fit-content;
        margin-left: 1rem;
    }
`,Kf=I(Rm)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,Gf=I.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    ${fl.MaxWidth.mobileL} {
        margin-right: 1rem;
    }
`,Zf=I(Bf)`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid ${pl.Neutral[5]};
    object-fit: cover;

    ${fl.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`,Qf=w((({fileItem:r,onDownload:i})=>{const{id:s,name:l,size:c,errorMessage:d,thumbnailImageDataUrl:p,truncateText:h=!0,ready:m=!0}=r,[f,g]=o(!1),[v,b]=o(!1),y=Nf.formatFileSizeDisplay(c),x=zc.useMediaQuery({maxWidth:gl.mobileL}),[w,$]=o(),k=a();u((()=>{k.current&&$(x?S(l):l)}),[l,x]);const S=e=>{if(!h)return e;const t=k&&k.current?k.current.getBoundingClientRect().width:0;return kd.truncateTwoLines(e,t,16,1.5)},O=()=>t(n,{children:[e(Wf,Object.assign({weight:"regular",ref:k},{children:w})),v&&e(Yf,Object.assign({weight:"semibold"},{children:d||"Something went wrong"}))]});return e(Rf,Object.assign({"data-testid":s},{children:t(Lf,Object.assign({onClick:()=>ct(void 0,void 0,void 0,(function*(){if(m&&!f){g(!0);try{b(!1),yield i(r)}catch(e){b(!0)}finally{g(!1)}}}))},{children:[(()=>{let r;return r=t(n,p?{children:[e(Gf,Object.assign({"data-testid":`${s}-thumbnail`},{children:e(Zf,{"data-testid":`${s}-thumbnail-image`,src:p})})),t(Ff,{children:[e(zf,{children:O()}),e(Hf,{children:e(Wf,{children:y||"-"})}),v&&e(Uf,Object.assign({weight:"semibold"},{children:d||"Something went wrong"}))]})]}:{children:[e(zf,{children:O()}),e(Hf,{children:e(Wf,{children:y||"-"})}),v&&e(Uf,Object.assign({weight:"semibold"},{children:d||"Something went wrong"}))]}),e(Pf,Object.assign({$hasThumbnail:!!p},{children:r}))})(),e(Xf,{children:e(Kf,Object.assign({"data-testid":`${s}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${l}`},{children:f||!m?e(qf,{$buttonStyle:"light",$buttonSizeStyle:"small",size:16,"aria-hidden":!0}):e(Q,{"aria-hidden":!0})}))})]}))}))})),Jf=({id:n,fileItems:r,title:i,description:a,onDownload:o,"data-testid":s,className:l,styleType:c="bordered"})=>{const d=e=>ct(void 0,void 0,void 0,(function*(){o&&(yield o(e))}));return t(Df,Object.assign({id:n?`${n}-file-download`:"file-download",className:l,"data-testid":s,$border:"bordered"===c},{children:[(i||a)&&t(jf,{children:[i?"string"==typeof i?e(_f,Object.assign({weight:"regular"},{children:i})):e(If,{children:i}):null,a?"string"==typeof a?e(Ef,Object.assign({weight:"regular"},{children:a})):e(Mf,{children:a}):null]}),e(Af,{children:r&&r.length>0&&r.map((t=>e(Qf,{fileItem:t,onDownload:d},t.id)))})]}))},eg=$({activeId:void 0,setActiveId:void 0});var tg,ng={exports:{}},rg={exports:{}},ig={};var ag,og,sg,lg,cg,dg,ug,pg,hg,mg,fg,gg,vg,bg,yg={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function xg(){return og||(og=1,"production"===process.env.NODE_ENV?rg.exports=function(){if(tg)return ig;tg=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:switch(e=e.type){case l:case c:case r:case a:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case m:case h:case o:return e;default:return p}}case n:return p}}}function x(e){return y(e)===c}return ig.AsyncMode=l,ig.ConcurrentMode=c,ig.ContextConsumer=s,ig.ContextProvider=o,ig.Element=t,ig.ForwardRef=d,ig.Fragment=r,ig.Lazy=m,ig.Memo=h,ig.Portal=n,ig.Profiler=a,ig.StrictMode=i,ig.Suspense=u,ig.isAsyncMode=function(e){return x(e)||y(e)===l},ig.isConcurrentMode=x,ig.isContextConsumer=function(e){return y(e)===s},ig.isContextProvider=function(e){return y(e)===o},ig.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},ig.isForwardRef=function(e){return y(e)===d},ig.isFragment=function(e){return y(e)===r},ig.isLazy=function(e){return y(e)===m},ig.isMemo=function(e){return y(e)===h},ig.isPortal=function(e){return y(e)===n},ig.isProfiler=function(e){return y(e)===a},ig.isStrictMode=function(e){return y(e)===i},ig.isSuspense=function(e){return y(e)===u},ig.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===a||e===i||e===u||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===f)},ig.typeOf=y,ig}():rg.exports=(ag||(ag=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:var f=e.type;switch(f){case l:case c:case r:case a:case i:case u:return f;default:var g=f&&f.$$typeof;switch(g){case s:case d:case m:case h:case o:return g;default:return p}}case n:return p}}}var x=l,w=c,$=s,k=o,S=t,O=d,C=r,T=m,D=h,j=n,_=a,I=i,E=u,M=!1;function A(e){return y(e)===c}yg.AsyncMode=x,yg.ConcurrentMode=w,yg.ContextConsumer=$,yg.ContextProvider=k,yg.Element=S,yg.ForwardRef=O,yg.Fragment=C,yg.Lazy=T,yg.Memo=D,yg.Portal=j,yg.Profiler=_,yg.StrictMode=I,yg.Suspense=E,yg.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},yg.isConcurrentMode=A,yg.isContextConsumer=function(e){return y(e)===s},yg.isContextProvider=function(e){return y(e)===o},yg.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},yg.isForwardRef=function(e){return y(e)===d},yg.isFragment=function(e){return y(e)===r},yg.isLazy=function(e){return y(e)===m},yg.isMemo=function(e){return y(e)===h},yg.isPortal=function(e){return y(e)===n},yg.isProfiler=function(e){return y(e)===a},yg.isStrictMode=function(e){return y(e)===i},yg.isSuspense=function(e){return y(e)===u},yg.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===a||e===i||e===u||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===b||e.$$typeof===f)},yg.typeOf=y}()),yg)),rg.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function wg(){if(lg)return sg;lg=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return sg=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(r,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))t.call(a,c)&&(s[c]=a[c]);if(e){o=e(a);for(var d=0;d<o.length;d++)n.call(a,o[d])&&(s[o[d]]=a[o[d]])}}return s},sg}function $g(){if(dg)return cg;dg=1;return cg="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function kg(){return pg?ug:(pg=1,ug=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var Sg=xg();ng.exports=function(){if(gg)return fg;gg=1;var e=xg(),t=wg(),n=$g(),r=kg(),i=function(){if(mg)return hg;mg=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=$g(),n={},r=kg();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,a,o,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(r(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+o+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](a,c,s,o,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+o+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in n)){n[d.message]=!0;var p=l?l():"";e("Failed "+o+" type: "+d.message+(null!=p?p:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},hg=i}(),a=function(){};function o(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),fg=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:m(o),arrayOf:function(e){return m((function(t,r,i,a,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new h("Invalid "+a+" `"+o+"` of type `"+b(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,a,o+"["+l+"]",n);if(c instanceof Error)return c}return null}))},element:m((function(e,t,n,r,i){var a=e[t];return s(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(t,n,r,i,a){var o=t[n];return e.isValidElementType(o)?null:new h("Invalid "+i+" `"+a+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||d;return new h("Invalid "+i+" `"+a+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return v(e[t])?null:new h("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,i,a,o,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var l=t[i],c=b(l);if("object"!==c)return new h("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+a+"`, expected an object.");for(var d in l)if(r(l,d)){var u=e(l,d,a,o,s+"."+d,n);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,a){for(var o=t[n],s=0;s<e.length;s++)if(p(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),o)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),o;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(i)+" at index "+t+"."),o}return m((function(t,i,a,o,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,a,o,s,n);if(null==d)return null;d.data&&r(d.data,"expectedType")&&l.push(d.data.expectedType)}return new h("Invalid "+o+" `"+s+"` supplied to `"+a+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,i,a,o){var s=t[r],l=b(s);if("object"!==l)return new h("Invalid "+a+" `"+o+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return g(i,a,o,c,y(d));var u=d(s,c,i,a,o+"."+c,n);if(u)return u}return null}))},exact:function(e){return m((function(i,a,o,s,l){var c=i[a],d=b(c);if("object"!==d)return new h("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+o+"`, expected `object`.");var u=t({},i[a],e);for(var p in u){var m=e[p];if(r(e,p)&&"function"!=typeof m)return g(o,s,l,p,y(m));if(!m)return new h("Invalid "+s+" `"+l+"` key `"+p+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(i[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=m(c,p,o,s,l+"."+p,n);if(f)return f}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,o,s,c,u,p,m){if(c=c||d,p=p||s,m!==n){if(l){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var g=c+":"+s;!t[g]&&r<3&&(a("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[g]=!0,r++)}}return null==o[s]?i?null===o[s]?new h("The "+u+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(o,s,c,u,p)}var o=i.bind(null,!1);return o.isRequired=i.bind(null,!0),o}function f(e){return m((function(t,n,r,i,a,o){var s=t[n];return b(s)!==e?new h("Invalid "+i+" `"+a+"` of type `"+y(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,n,r,i){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!v(n.value))return!1}else for(;!(n=r.next()).done;){var i=n.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=i,u.resetWarningCache=i.resetWarningCache,u.PropTypes=u,u},fg}()(Sg.isElement,!0)}else ng.exports=function(){if(bg)return vg;bg=1;var e=$g();function t(){}function n(){}return n.resetWarningCache=t,vg=function(){function r(t,n,r,i,a,o){if(o!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return r}r.isRequired=r;var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a}}()();var Og=Pa(ng.exports);const Cg=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function Tg(e,t,n){const r=function(e){const{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){const n=t.split(".").pop().toLowerCase(),r=Cg.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e),{webkitRelativePath:i}=e,a="string"==typeof t?t:"string"==typeof i&&i.length>0?i:`./${e.name}`;return"string"!=typeof r.path&&Dg(r,"path",a),void 0!==n&&Object.defineProperty(r,"handle",{value:n,writable:!1,configurable:!1,enumerable:!0}),Dg(r,"relativePath",a),r}function Dg(e,t,n){Object.defineProperty(e,t,{value:n,writable:!1,configurable:!1,enumerable:!0})}const jg=[".DS_Store","Thumbs.db"];function _g(e){return"object"==typeof e&&null!==e}function Ig(e){return e.filter((e=>-1===jg.indexOf(e.name)))}function Eg(e){if(null===e)return[];const t=[];for(let n=0;n<e.length;n++){const r=e[n];t.push(r)}return t}function Mg(e){if("function"!=typeof e.webkitGetAsEntry)return Ng(e);const t=e.webkitGetAsEntry();return t&&t.isDirectory?Rg(t):Ng(e,t)}function Ag(e){return e.reduce(((e,t)=>[...e,...Array.isArray(t)?Ag(t):[t]]),[])}function Ng(e,t){return ct(this,void 0,void 0,(function*(){var n;if(globalThis.isSecureContext&&"function"==typeof e.getAsFileSystemHandle){const t=yield e.getAsFileSystemHandle();if(null===t)throw new Error(`${e} is not a File`);if(void 0!==t){const e=yield t.getFile();return e.handle=t,Tg(e)}}const r=e.getAsFile();if(!r)throw new Error(`${e} is not a File`);return Tg(r,null!==(n=null==t?void 0:t.fullPath)&&void 0!==n?n:void 0)}))}function Bg(e){return ct(this,void 0,void 0,(function*(){return e.isDirectory?Rg(e):function(e){return ct(this,void 0,void 0,(function*(){return new Promise(((t,n)=>{e.file((n=>{const r=Tg(n,e.fullPath);t(r)}),(e=>{n(e)}))}))}))}(e)}))}function Rg(e){const t=e.createReader();return new Promise(((e,n)=>{const r=[];!function i(){t.readEntries((t=>ct(this,void 0,void 0,(function*(){if(t.length){const e=Promise.all(t.map(Bg));r.push(e),i()}else try{const t=yield Promise.all(r);e(t)}catch(e){n(e)}}))),(e=>{n(e)}))}()}))}var Lg=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(",");if(0===n.length)return!0;var r=e.name||"",i=(e.type||"").toLowerCase(),a=i.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?a===t.replace(/\/.*$/,""):i===t}))}return!0};function Pg(e){return function(e){if(Array.isArray(e))return Yg(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Vg(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function zg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Fg(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?zg(Object(n),!0).forEach((function(t){Hg(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zg(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Hg(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wg(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||Vg(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Vg(e,t){if(e){if("string"==typeof e)return Yg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yg(e,t):void 0}}function Yg(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ug=Lg,qg=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(","),t=e.length>1?"one of ".concat(e.join(", ")):e[0];return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Xg=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Kg=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Gg={code:"too-many-files",message:"Too many files"};function Zg(e,t){var n="application/x-moz-file"===e.type||Ug(e,t);return[n,n?null:qg(t)]}function Qg(e,t,n){if(Jg(e.size))if(Jg(t)&&Jg(n)){if(e.size>n)return[!1,Xg(n)];if(e.size<t)return[!1,Kg(t)]}else{if(Jg(t)&&e.size<t)return[!1,Kg(t)];if(Jg(n)&&e.size>n)return[!1,Xg(n)]}return[!0,null]}function Jg(e){return null!=e}function ev(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function tv(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function nv(e){e.preventDefault()}function rv(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return!ev(e)&&t&&t.apply(void 0,[e].concat(r)),ev(e)}))}}function iv(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||"application/*"===e||/\w+\/[-+.\w]+/g.test(e)}function av(e){return/^.*\.[\w]+$/.test(e)}var ov=["children"],sv=["open"],lv=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],cv=["refKey","onChange","onClick"];function dv(e){return function(e){if(Array.isArray(e))return hv(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||pv(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function uv(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||pv(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pv(e,t){if(e){if("string"==typeof e)return hv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?hv(e,t):void 0}}function hv(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function mv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fv(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?mv(Object(n),!0).forEach((function(t){gv(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mv(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function gv(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vv(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var bv=h((function(e,t){var n=e.children,r=wv(vv(e,ov)),a=r.open,o=vv(r,sv);return v(t,(function(){return{open:a}}),[a]),i.createElement(k,null,n(fv(fv({},o),{},{open:a})))}));bv.displayName="Dropzone";var yv={disabled:!1,getFilesFromEvent:function(e){return ct(this,void 0,void 0,(function*(){return _g(e)&&_g(e.dataTransfer)?function(e,t){return ct(this,void 0,void 0,(function*(){if(e.items){const n=Eg(e.items).filter((e=>"file"===e.kind));if("drop"!==t)return n;return Ig(Ag(yield Promise.all(n.map(Mg))))}return Ig(Eg(e.files).map((e=>Tg(e))))}))}(e.dataTransfer,e.type):function(e){return _g(e)&&_g(e.target)}(e)?function(e){return Eg(e.target.files).map((e=>Tg(e)))}(e):Array.isArray(e)&&e.every((e=>"getFile"in e&&"function"==typeof e.getFile))?function(e){return ct(this,void 0,void 0,(function*(){return(yield Promise.all(e.map((e=>e.getFile())))).map((e=>Tg(e)))}))}(e):[]}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};bv.defaultProps=yv,bv.propTypes={children:Og.func,accept:Og.objectOf(Og.arrayOf(Og.string)),multiple:Og.bool,preventDropOnDocument:Og.bool,noClick:Og.bool,noKeyboard:Og.bool,noDrag:Og.bool,noDragEventsBubbling:Og.bool,minSize:Og.number,maxSize:Og.number,maxFiles:Og.number,disabled:Og.bool,getFilesFromEvent:Og.func,onFileDialogCancel:Og.func,onFileDialogOpen:Og.func,useFsAccessApi:Og.bool,autoFocus:Og.bool,onDragEnter:Og.func,onDragLeave:Og.func,onDragOver:Og.func,onDrop:Og.func,onDropAccepted:Og.func,onDropRejected:Og.func,onError:Og.func,validator:Og.func};var xv={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function wv(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=fv(fv({},yv),e),n=t.accept,r=t.disabled,i=t.getFilesFromEvent,o=t.maxSize,s=t.minSize,l=t.multiple,c=t.maxFiles,d=t.onDragEnter,p=t.onDragLeave,h=t.onDragOver,f=t.onDrop,v=t.onDropAccepted,b=t.onDropRejected,y=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,k=t.autoFocus,S=t.preventDropOnDocument,O=t.noClick,C=t.noKeyboard,T=t.noDrag,D=t.noDragEventsBubbling,j=t.onError,_=t.validator,I=g((function(){return function(e){if(Jg(e))return Object.entries(e).reduce((function(e,t){var n=Wg(t,2),r=n[0],i=n[1];return[].concat(Pg(e),[r],Pg(i))}),[]).filter((function(e){return iv(e)||av(e)})).join(",")}(n)}),[n]),E=g((function(){return function(e){return Jg(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Wg(e,2),n=t[0],r=t[1],i=!0;return iv(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(r)&&r.every(av)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var n=Wg(t,2),r=n[0],i=n[1];return Fg(Fg({},e),{},Hg({},r,i))}),{})}]:e}(n)}),[n]),M=g((function(){return"function"==typeof w?w:kv}),[w]),A=g((function(){return"function"==typeof y?y:kv}),[y]),N=a(null),B=a(null),R=uv(x($v,xv),2),L=R[0],P=R[1],z=L.isFocused,F=L.isFileDialogActive,H=a("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&F&&setTimeout((function(){B.current&&(B.current.files.length||(P({type:"closeDialog"}),A()))}),300)};u((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[B,F,A,H]);var V=a([]),Y=function(e){N.current&&N.current.contains(e.target)||(e.preventDefault(),V.current=[])};u((function(){return S&&(document.addEventListener("dragover",nv,!1),document.addEventListener("drop",Y,!1)),function(){S&&(document.removeEventListener("dragover",nv),document.removeEventListener("drop",Y))}}),[N,S]),u((function(){return!r&&k&&N.current&&N.current.focus(),function(){}}),[N,k,r]);var U=m((function(e){j?j(e):console.error(e)}),[j]),q=m((function(e){e.preventDefault(),e.persist(),oe(e),V.current=[].concat(dv(V.current),[e.target]),tv(e)&&Promise.resolve(i(e)).then((function(t){if(!ev(e)||D){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,i=e.maxSize,a=e.multiple,o=e.maxFiles,s=e.validator;return!(!a&&t.length>1||a&&o>=1&&t.length>o)&&t.every((function(e){var t=Wg(Zg(e,n),1)[0],a=Wg(Qg(e,r,i),1)[0],o=s?s(e):null;return t&&a&&!o}))}({files:t,accept:I,minSize:s,maxSize:o,multiple:l,maxFiles:c,validator:_});P({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return U(e)}))}),[i,d,U,D,I,s,o,l,c,_]),X=m((function(e){e.preventDefault(),e.persist(),oe(e);var t=tv(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&h&&h(e),!1}),[h,D]),K=m((function(e){e.preventDefault(),e.persist(),oe(e);var t=V.current.filter((function(e){return N.current&&N.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),V.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),tv(e)&&p&&p(e))}),[N,p,D]),G=m((function(e,t){var n=[],r=[];e.forEach((function(e){var t=uv(Zg(e,I),2),i=t[0],a=t[1],l=uv(Qg(e,s,o),2),c=l[0],d=l[1],u=_?_(e):null;if(i&&c&&!u)n.push(e);else{var p=[a,d];u&&(p=p.concat(u)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!l&&n.length>1||l&&c>=1&&n.length>c)&&(n.forEach((function(e){r.push({file:e,errors:[Gg]})})),n.splice(0)),P({acceptedFiles:n,fileRejections:r,isDragReject:r.length>0,type:"setFiles"}),f&&f(n,r,t),r.length>0&&b&&b(r,t),n.length>0&&v&&v(n,t)}),[P,l,I,s,o,c,f,v,b,_]),Z=m((function(e){e.preventDefault(),e.persist(),oe(e),V.current=[],tv(e)&&Promise.resolve(i(e)).then((function(t){ev(e)&&!D||G(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[i,G,U,D]),Q=m((function(){if(H.current){P({type:"openDialog"}),M();var e={multiple:l,types:E};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){G(e,null),P({type:"closeDialog"})})).catch((function(e){!function(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}(e)?!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,B.current?(B.current.value=null,B.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):(A(e),P({type:"closeDialog"}))}))}else B.current&&(P({type:"openDialog"}),M(),B.current.value=null,B.current.click())}),[P,M,A,$,G,U,E,l]),J=m((function(e){N.current&&N.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),Q()))}),[N,Q]),ee=m((function(){P({type:"focus"})}),[]),te=m((function(){P({type:"blur"})}),[]),ne=m((function(){O||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?Q():setTimeout(Q,0))}),[O,Q]),re=function(e){return r?null:e},ie=function(e){return C?null:re(e)},ae=function(e){return T?null:re(e)},oe=function(e){D&&e.stopPropagation()},se=g((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,i=e.role,a=e.onKeyDown,o=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,p=e.onDrop,h=vv(e,lv);return fv(fv(gv({onKeyDown:ie(rv(a,J)),onFocus:ie(rv(o,ee)),onBlur:ie(rv(s,te)),onClick:re(rv(l,ne)),onDragEnter:ae(rv(c,q)),onDragOver:ae(rv(d,X)),onDragLeave:ae(rv(u,K)),onDrop:ae(rv(p,Z)),role:"string"==typeof i&&""!==i?i:"presentation"},n,N),r||C?{}:{tabIndex:0}),h)}}),[N,J,ee,te,ne,q,X,K,Z,C,T,r]),le=m((function(e){e.stopPropagation()}),[]),ce=g((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,i=e.onClick,a=vv(e,cv);return fv(fv({},gv({accept:I,multiple:l,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:re(rv(r,Z)),onClick:re(rv(i,le)),tabIndex:-1},n,B)),a)}}),[B,n,l,Z,r]);return fv(fv({},L),{},{isFocused:z&&!r,getRootProps:se,getInputProps:ce,rootRef:N,inputRef:B,open:re(Q)})}function $v(e,t){switch(t.type){case"focus":return fv(fv({},e),{},{isFocused:!0});case"blur":return fv(fv({},e),{},{isFocused:!1});case"openDialog":return fv(fv({},xv),{},{isFileDialogActive:!0});case"closeDialog":return fv(fv({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return fv(fv({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return fv(fv({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections,isDragReject:t.isDragReject});case"reset":return fv({},xv);default:return e}}function kv(){}const Sv=I.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border){const t=encodeURIComponent(pl.Neutral[5](e));return E`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${fl.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `}}}
`,Ov=I.input`
    display: none;
`,Cv=I.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${pl.Accent.Light[5]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${e=>{const t=encodeURIComponent(pl.Primary(e));return E`
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
            border-radius: 4px;
        `}}
`,Tv=I(Il.BodySmall)`
    color: ${pl.Primary};
    text-align: center;
`,Dv=I(Re)`
    color: ${pl.Primary};
    height: 4rem;
    width: 4rem;
`,jv=h((({children:n,accept:r,capture:i,multiple:o,id:s,className:l,name:c,border:d,disabled:u,onChange:p,"data-testid":h},m)=>{const f=a(),{getRootProps:g,isDragActive:b}=wv({onDrop:p,noClick:!0,disabled:u});v(m,(()=>Object.assign(Object.assign({},f.current),{openFileDialog:()=>{f.current&&(f.current.value=null,f.current.click())}})));return t(Sv,Object.assign({id:s,"data-testid":h||"dropzone",$border:d,className:l},g(),{children:[e(Ov,{type:"file",name:c,ref:f,tabIndex:-1,"aria-hidden":!0,accept:r,capture:i,multiple:o,"data-testid":h?`${h}-input`:"dropzone-input",onChange:e=>{e.target.files&&p(Array.from(e.target.files))}}),n,b&&t(Cv,{children:[e(Dv,{}),e(Tv,Object.assign({weight:"semibold"},{children:"Drop files here"}))]})]}))}));const _v="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Iv(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Ev(e){return"nodeType"in e}function Mv(e){var t,n;return e?Iv(e)?e:Ev(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function Av(e){const{Document:t}=Mv(e);return e instanceof t}function Nv(e){return!Iv(e)&&e instanceof Mv(e).HTMLElement}function Bv(e){return e instanceof Mv(e).SVGElement}function Rv(e){return e?Iv(e)?e.document:Ev(e)?Av(e)?e:Nv(e)||Bv(e)?e.ownerDocument:document:document:document}const Lv=_v?p:u;function Pv(e){const t=a(e);return Lv((()=>{t.current=e})),m((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}function zv(e,t){void 0===t&&(t=[e]);const n=a(e);return Lv((()=>{n.current!==e&&(n.current=e)}),t),n}function Fv(e,t){const n=a();return g((()=>{const t=e(n.current);return n.current=t,t}),[...t])}function Hv(e){const t=Pv(e),n=a(null),r=m((e=>{e!==n.current&&(null==t||t(e,n.current)),n.current=e}),[]);return[n,r]}function Wv(e){const t=a();return u((()=>{t.current=e}),[e]),t.current}let Vv={};function Yv(e,t){return g((()=>{if(t)return t;const n=null==Vv[e]?0:Vv[e]+1;return Vv[e]=n,e+"-"+n}),[e,t])}function Uv(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>{const r=Object.entries(n);for(const[n,i]of r){const r=t[n];null!=r&&(t[n]=r+e*i)}return t}),{...t})}}const qv=Uv(1),Xv=Uv(-1);function Kv(e){if(!e)return!1;const{KeyboardEvent:t}=Mv(e.target);return t&&e instanceof t}function Gv(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Mv(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Zv=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Zv.Translate.toString(e),Zv.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Qv="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Jv(e){return e.matches(Qv)?e:e.querySelector(Qv)}const eb={display:"none"};function tb(e){let{id:t,value:n}=e;return i.createElement("div",{id:t,style:eb},n)}function nb(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return i.createElement("div",{id:t,style:{position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}const rb=$(null);const ib={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},ab={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function ob(e){let{announcements:t=ab,container:n,hiddenTextDescribedById:r,screenReaderInstructions:a=ib}=e;const{announce:s,announcement:l}=function(){const[e,t]=o("");return{announce:m((e=>{null!=e&&t(e)}),[]),announcement:e}}(),c=Yv("DndLiveRegion"),[d,p]=o(!1);if(u((()=>{p(!0)}),[]),function(e){const t=f(rb);u((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(g((()=>({onDragStart(e){let{active:n}=e;s(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&s(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;s(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;s(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;s(t.onDragCancel({active:n,over:r}))}})),[s,t])),!d)return null;const h=i.createElement(i.Fragment,null,i.createElement(tb,{id:r,value:a.draggable}),i.createElement(nb,{id:c,announcement:l}));return n?j(h,n):h}var sb;function lb(){}function cb(e,t){return g((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(sb||(sb={}));const db=Object.freeze({x:0,y:0});function ub(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function pb(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function hb(e){let{left:t,top:n,height:r,width:i}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t,y:n+r},{x:t+i,y:n+r}]}function mb(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}function fb(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){const n=t.width*t.height,r=e.width*e.height,i=o*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const gb=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const e of r){const{id:r}=e,a=n.get(r);if(a){const n=fb(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(pb)};function vb(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:db}function bb(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x})),{...t})}}const yb=bb(1);const xb={ignoreTransform:!1};function wb(e,t){void 0===t&&(t=xb);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=Mv(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;const{scaleX:i,scaleY:a,x:o,y:s}=r,l=e.left-o-(1-i)*parseFloat(n),c=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?e.width/i:e.width,u=a?e.height/a:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(n,t,r))}const{top:r,left:i,width:a,height:o,bottom:s,right:l}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:l}}function $b(e){return wb(e,{ignoreTransform:!0})}function kb(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(Av(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Nv(i)||Bv(i))return n;if(n.includes(i))return n;const a=Mv(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Mv(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const r=t[e];return"string"==typeof r&&n.test(r)}))}(i,a)&&n.push(i),function(e,t){return void 0===t&&(t=Mv(e).getComputedStyle(e)),"fixed"===t.position}(i,a)?n:r(i.parentNode)}(e):n}function Sb(e){const[t]=kb(e,1);return null!=t?t:null}function Ob(e){return _v&&e?Iv(e)?e:Ev(e)?Av(e)||e===Rv(e).scrollingElement?window:Nv(e)?e:null:null:null}function Cb(e){return Iv(e)?e.scrollX:e.scrollLeft}function Tb(e){return Iv(e)?e.scrollY:e.scrollTop}function Db(e){return{x:Cb(e),y:Tb(e)}}var jb;function _b(e){return!(!_v||!e)&&e===document.scrollingElement}function Ib(e){const t={x:0,y:0},n=_b(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(jb||(jb={}));const Eb={x:.2,y:.2};function Mb(e,t,n,r,i){let{top:a,left:o,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=Eb);const{isTop:c,isBottom:d,isLeft:u,isRight:p}=Ib(e),h={x:0,y:0},m={x:0,y:0},f=t.height*i.y,g=t.width*i.x;return!c&&a<=t.top+f?(h.y=jb.Backward,m.y=r*Math.abs((t.top+f-a)/f)):!d&&l>=t.bottom-f&&(h.y=jb.Forward,m.y=r*Math.abs((t.bottom-f-l)/f)),!p&&s>=t.right-g?(h.x=jb.Forward,m.x=r*Math.abs((t.right-g-s)/g)):!u&&o<=t.left+g&&(h.x=jb.Backward,m.x=r*Math.abs((t.left+g-o)/g)),{direction:h,speed:m}}function Ab(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Nb(e){return e.reduce(((e,t)=>qv(e,Db(t))),db)}const Bb=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Cb(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Tb(t)),0)}]];class Rb{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=kb(t),r=Nb(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of Bb)for(const a of t)Object.defineProperty(this,a,{get:()=>{const t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Lb{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function Pb(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var zb,Fb;function Hb(e){e.preventDefault()}function Wb(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(zb||(zb={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"}(Fb||(Fb={}));const Vb={start:[Fb.Space,Fb.Enter],cancel:[Fb.Esc],end:[Fb.Space,Fb.Enter,Fb.Tab]},Yb=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case Fb.Right:return{...n,x:n.x+25};case Fb.Left:return{...n,x:n.x-25};case Fb.Down:return{...n,y:n.y+25};case Fb.Up:return{...n,y:n.y-25}}};let Ub=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Lb(Rv(t)),this.windowListeners=new Lb(Mv(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(zb.Resize,this.handleCancel),this.windowListeners.add(zb.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(zb.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=wb),!e)return;const{top:n,left:r,bottom:i,right:a}=t(e);Sb(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(db)}handleKeyDown(e){if(Kv(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=Vb,coordinateGetter:a=Yb,scrollBehavior:o="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:db;this.referenceCoordinates||(this.referenceCoordinates=c);const d=a(e,{active:t,context:n.current,currentCoordinates:c});if(d){const t=Xv(d,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:a,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:p}=Ib(n),h=Ab(n),m={x:Math.min(i===Fb.Right?h.right-h.width/2:h.right,Math.max(i===Fb.Right?h.left:h.left+h.width/2,d.x)),y:Math.min(i===Fb.Down?h.bottom-h.height/2:h.bottom,Math.max(i===Fb.Down?h.top:h.top+h.height/2,d.y))},f=i===Fb.Right&&!s||i===Fb.Left&&!l,g=i===Fb.Down&&!c||i===Fb.Up&&!a;if(f&&m.x!==d.x){const e=n.scrollLeft+t.x,a=i===Fb.Right&&e<=u.x||i===Fb.Left&&e>=p.x;if(a&&!t.y)return void n.scrollTo({left:e,behavior:o});r.x=a?n.scrollLeft-e:i===Fb.Right?n.scrollLeft-u.x:n.scrollLeft-p.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}if(g&&m.y!==d.y){const e=n.scrollTop+t.y,a=i===Fb.Down&&e<=u.y||i===Fb.Up&&e>=p.y;if(a&&!t.x)return void n.scrollTo({top:e,behavior:o});r.y=a?n.scrollTop-e:i===Fb.Down?n.scrollTop-u.y:n.scrollTop-p.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,qv(Xv(d,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function qb(e){return Boolean(e&&"distance"in e)}function Xb(e){return Boolean(e&&"delay"in e)}Ub.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=Vb,onActivation:i}=t,{active:a}=n;const{code:o}=e.nativeEvent;if(r.start.includes(o)){const t=a.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class Kb{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=Mv(e);return e instanceof t?e:Rv(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:a}=i;this.props=e,this.events=t,this.document=Rv(a),this.documentListeners=new Lb(this.document),this.listeners=new Lb(n),this.windowListeners=new Lb(Mv(a)),this.initialCoordinates=null!=(r=Gv(i))?r:db,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(zb.Resize,this.handleCancel),this.windowListeners.add(zb.DragStart,Hb),this.windowListeners.add(zb.VisibilityChange,this.handleCancel),this.windowListeners.add(zb.ContextMenu,Hb),this.documentListeners.add(zb.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Xb(t))return this.timeoutId=setTimeout(this.handleStart,t.delay),void this.handlePending(t);if(qb(t))return void this.handlePending(t)}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){const{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(zb.Click,Wb,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(zb.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:a,options:{activationConstraint:o}}=i;if(!r)return;const s=null!=(t=Gv(e))?t:db,l=Xv(r,s);if(!n&&o){if(qb(o)){if(null!=o.tolerance&&Pb(l,o.tolerance))return this.handleCancel();if(Pb(l,o.distance))return this.handleStart()}return Xb(o)&&Pb(l,o.tolerance)?this.handleCancel():void this.handlePending(o,l)}e.cancelable&&e.preventDefault(),a(s)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===Fb.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Gb={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Zb extends Kb{constructor(e){const{event:t}=e,n=Rv(t.target);super(e,Gb,n)}}Zb.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const Qb={move:{name:"mousemove"},end:{name:"mouseup"}};var Jb;!function(e){e[e.RightClick=2]="RightClick"}(Jb||(Jb={}));let ey=class extends Kb{constructor(e){super(e,Qb,Rv(e.event.target))}};ey.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==Jb.RightClick&&(null==r||r({event:n}),!0)}}];const ty={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class ny extends Kb{constructor(e){super(e,ty)}static setup(){return window.addEventListener(ty.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(ty.move.name,e)};function e(){}}}var ry,iy;function ay(e){let{acceleration:t,activator:n=ry.Pointer,canScroll:r,draggingRect:i,enabled:o,interval:s=5,order:l=iy.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:p,delta:h,threshold:f}=e;const v=function(e){let{delta:t,disabled:n}=e;const r=Wv(t);return Fv((e=>{if(n||!r||!e)return oy;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[jb.Backward]:e.x[jb.Backward]||-1===i.x,[jb.Forward]:e.x[jb.Forward]||1===i.x},y:{[jb.Backward]:e.y[jb.Backward]||-1===i.y,[jb.Forward]:e.y[jb.Forward]||1===i.y}}}),[n,t,r])}({delta:h,disabled:!o}),[b,y]=function(){const e=a(null);return[m(((t,n)=>{e.current=setInterval(t,n)}),[]),m((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=a({x:0,y:0}),w=a({x:0,y:0}),$=g((()=>{switch(n){case ry.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case ry.DraggableRect:return i}}),[n,i,c]),k=a(null),S=m((()=>{const e=k.current;if(!e)return;const t=x.current.x*w.current.x,n=x.current.y*w.current.y;e.scrollBy(t,n)}),[]),O=g((()=>l===iy.TreeOrder?[...d].reverse():d),[l,d]);u((()=>{if(o&&d.length&&$){for(const e of O){if(!1===(null==r?void 0:r(e)))continue;const n=d.indexOf(e),i=p[n];if(!i)continue;const{direction:a,speed:o}=Mb(e,i,$,t,f);for(const e of["x","y"])v[e][a[e]]||(o[e]=0,a[e]=0);if(o.x>0||o.y>0)return y(),k.current=e,b(S,s),x.current=o,void(w.current=a)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,r,y,o,s,JSON.stringify($),JSON.stringify(v),b,d,O,p,JSON.stringify(f)])}ny.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(ry||(ry={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(iy||(iy={}));const oy={x:{[jb.Backward]:!1,[jb.Forward]:!1},y:{[jb.Backward]:!1,[jb.Forward]:!1}};var sy,ly;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(sy||(sy={})),function(e){e.Optimized="optimized"}(ly||(ly={}));const cy=new Map;function dy(e,t){return Fv((n=>e?n||("function"==typeof t?t(e):e):null),[t,e])}function uy(e){let{callback:t,disabled:n}=e;const r=Pv(t),i=g((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(r)}),[n]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}function py(e){return new Rb(wb(e),e)}function hy(e,t,n){void 0===t&&(t=py);const[r,i]=o(null);function a(){i((r=>{if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=r?r:n)?i:null;const a=t(e);return JSON.stringify(r)===JSON.stringify(a)?r:a}))}const s=function(e){let{callback:t,disabled:n}=e;const r=Pv(t),i=g((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(r)}),[r,n]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),l=uy({callback:a});return Lv((()=>{a(),e?(null==l||l.observe(e),null==s||s.observe(document.body,{childList:!0,subtree:!0})):(null==l||l.disconnect(),null==s||s.disconnect())}),[e]),r}const my=[];function fy(e,t){void 0===t&&(t=[]);const n=a(null);return u((()=>{n.current=null}),t),u((()=>{const t=e!==db;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?Xv(e,n.current):db}function gy(e){return g((()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null),[e])}const vy=[];function by(e){let{measure:t}=e;const[n,r]=o(null),i=m((e=>{for(const{target:n}of e)if(Nv(n)){r((e=>{const r=t(n);return e?{...e,width:r.width,height:r.height}:r}));break}}),[t]),a=uy({callback:i}),s=m((e=>{const n=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Nv(t)?t:e}(e);null==a||a.disconnect(),n&&(null==a||a.observe(n)),r(n?t(n):null)}),[t,a]),[l,c]=Hv(s);return g((()=>({nodeRef:l,rect:n,setRef:c})),[n,l,c])}const yy=[{sensor:Zb,options:{}},{sensor:Ub,options:{}}],xy={current:{}},wy={draggable:{measure:$b},droppable:{measure:$b,strategy:sy.WhileDragging,frequency:ly.Optimized},dragOverlay:{measure:wb}};class $y extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const ky={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new $y,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:lb},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:wy,measureDroppableContainers:lb,windowRect:null,measuringScheduled:!1},Sy=$({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:lb,draggableNodes:new Map,over:null,measureDroppableContainers:lb}),Oy=$(ky);function Cy(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new $y}}}function Ty(e,t){switch(t.type){case sb.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case sb.DragMove:return null==e.draggable.active?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case sb.DragEnd:case sb.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case sb.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new $y(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case sb.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const o=new $y(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case sb.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const a=new $y(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function Dy(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:i}=f(Sy),a=Wv(r),o=Wv(null==n?void 0:n.id);return u((()=>{if(!t&&!r&&a&&null!=o){if(!Kv(a))return;if(document.activeElement===a.target)return;const e=i.get(o);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame((()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=Jv(e);if(t){t.focus();break}}}))}}),[r,t,i,o,a]),null}const jy=$({...db,scaleX:1,scaleY:1});var _y;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(_y||(_y={}));const Iy=w((function(e){var t,n,r,s;let{id:l,accessibility:c,autoScroll:d=!0,children:p,sensors:h=yy,collisionDetection:f=gb,measuring:v,modifiers:b,...y}=e;const w=x(Ty,void 0,Cy),[$,k]=w,[S,O]=function(){const[e]=o((()=>new Set)),t=m((t=>(e.add(t),()=>e.delete(t))),[e]);return[m((t=>{let{type:n,event:r}=t;e.forEach((e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)}))}),[e]),t]}(),[C,T]=o(_y.Uninitialized),j=C===_y.Initialized,{draggable:{active:_,nodes:I,translate:E},droppable:{containers:M}}=$,A=null!=_?I.get(_):null,N=a({initial:null,translated:null}),B=g((()=>{var e;return null!=_?{id:_,data:null!=(e=null==A?void 0:A.data)?e:xy,rect:N}:null}),[_,A]),R=a(null),[L,P]=o(null),[z,F]=o(null),H=zv(y,Object.values(y)),W=Yv("DndDescribedBy",l),V=g((()=>M.getEnabled()),[M]),Y=function(e){return g((()=>({draggable:{...wy.draggable,...null==e?void 0:e.draggable},droppable:{...wy.droppable,...null==e?void 0:e.droppable},dragOverlay:{...wy.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(v),{droppableRects:U,measureDroppableContainers:q,measuringScheduled:X}=function(e,t){let{dragging:n,dependencies:r,config:i}=t;const[s,l]=o(null),{frequency:c,measure:d,strategy:p}=i,h=a(e),f=function(){switch(p){case sy.Always:return!1;case sy.BeforeDragging:return n;default:return!n}}(),g=zv(f),v=m((function(e){void 0===e&&(e=[]),g.current||l((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[g]),b=a(null),y=Fv((t=>{if(f&&!n)return cy;if(!t||t===cy||h.current!==e||null!=s){const t=new Map;for(let n of e){if(!n)continue;if(s&&s.length>0&&!s.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new Rb(d(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t}),[e,s,n,f,d]);return u((()=>{h.current=e}),[e]),u((()=>{f||v()}),[n,f]),u((()=>{s&&s.length>0&&l(null)}),[JSON.stringify(s)]),u((()=>{f||"number"!=typeof c||null!==b.current||(b.current=setTimeout((()=>{v(),b.current=null}),c))}),[c,f,v,...r]),{droppableRects:y,measureDroppableContainers:v,measuringScheduled:null!=s}}(V,{dragging:j,dependencies:[E.x,E.y],config:Y.droppable}),K=function(e,t){const n=null!=t?e.get(t):void 0,r=n?n.node.current:null;return Fv((e=>{var n;return null==t?null:null!=(n=null!=r?r:e)?n:null}),[r,t])}(I,_),G=g((()=>z?Gv(z):null),[z]),Z=function(){const e=!1===(null==L?void 0:L.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,n=j&&!e&&!t;if("object"==typeof d)return{...d,enabled:n};return{enabled:n}}(),Q=function(e,t){return dy(e,t)}(K,Y.draggable.measure);!function(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e;const o=a(!1),{x:s,y:l}="boolean"==typeof i?{x:i,y:i}:i;Lv((()=>{if(!s&&!l||!t)return void(o.current=!1);if(o.current||!r)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const i=vb(n(e),r);if(s||(i.x=0),l||(i.y=0),o.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){const t=Sb(e);t&&t.scrollBy({top:i.y,left:i.x})}}),[t,s,l,r,n])}({activeNode:null!=_?I.get(_):null,config:Z.layoutShiftCompensation,initialRect:Q,measure:Y.draggable.measure});const J=hy(K,Y.draggable.measure,Q),ee=hy(K?K.parentElement:null),te=a({activatorEvent:null,active:null,activeNode:K,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:I,draggingNode:null,draggingNodeRect:null,droppableContainers:M,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ne=M.getNodeFor(null==(t=te.current.over)?void 0:t.id),re=by({measure:Y.dragOverlay.measure}),ie=null!=(n=re.nodeRef.current)?n:K,ae=j?null!=(r=re.rect)?r:J:null,oe=Boolean(re.nodeRef.current&&re.rect),se=vb(le=oe?null:J,dy(le));var le;const ce=gy(ie?Mv(ie):null),de=function(e){const t=a(e),n=Fv((n=>e?n&&n!==my&&e&&t.current&&e.parentNode===t.current.parentNode?n:kb(e):my),[e]);return u((()=>{t.current=e}),[e]),n}(j?null!=ne?ne:K:null),ue=function(e,t){void 0===t&&(t=wb);const[n]=e,r=gy(n?Mv(n):null),[i,a]=o(vy);function s(){a((()=>e.length?e.map((e=>_b(e)?r:new Rb(t(e),e))):vy))}const l=uy({callback:s});return Lv((()=>{null==l||l.disconnect(),s(),e.forEach((e=>null==l?void 0:l.observe(e)))}),[e]),i}(de),pe=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...r})),n):n}(b,{transform:{x:E.x-se.x,y:E.y-se.y,scaleX:1,scaleY:1},activatorEvent:z,active:B,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:ae,over:te.current.over,overlayNodeRect:re.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),he=G?qv(G,E):null,me=function(e){const[t,n]=o(null),r=a(e),i=m((e=>{const t=Ob(e.target);t&&n((e=>e?(e.set(t,Db(t)),new Map(e)):null))}),[]);return u((()=>{const t=r.current;if(e!==t){a(t);const o=e.map((e=>{const t=Ob(e);return t?(t.addEventListener("scroll",i,{passive:!0}),[t,Db(t)]):null})).filter((e=>null!=e));n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach((e=>{const t=Ob(e);null==t||t.removeEventListener("scroll",i)}))}}),[i,e]),g((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>qv(e,t)),db):Nb(e):db),[e,t])}(de),fe=fy(me),ge=fy(me,[J]),ve=qv(pe,fe),be=ae?yb(ae,pe):null,ye=B&&be?f({active:B,collisionRect:be,droppableRects:U,droppableContainers:V,pointerCoordinates:he}):null,xe=mb(ye,"id"),[we,$e]=o(null),ke=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(oe?pe:qv(pe,ge),null!=(s=null==we?void 0:we.rect)?s:null,J),Se=a(null),Oe=m(((e,t)=>{let{sensor:n,options:r}=t;if(null==R.current)return;const i=I.get(R.current);if(!i)return;const a=e.nativeEvent,o=new n({active:R.current,activeNode:i,event:a,options:r,context:te,onAbort(e){if(!I.get(e))return;const{onDragAbort:t}=H.current,n={id:e};null==t||t(n),S({type:"onDragAbort",event:n})},onPending(e,t,n,r){if(!I.get(e))return;const{onDragPending:i}=H.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};null==i||i(a),S({type:"onDragPending",event:a})},onStart(e){const t=R.current;if(null==t)return;const n=I.get(t);if(!n)return;const{onDragStart:r}=H.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:N}};D((()=>{null==r||r(i),T(_y.Initializing),k({type:sb.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:i}),P(Se.current),F(a)}))},onMove(e){k({type:sb.DragMove,coordinates:e})},onEnd:s(sb.DragEnd),onCancel:s(sb.DragCancel)});function s(e){return async function(){const{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=te.current;let o=null;if(t&&i){const{cancelDrop:s}=H.current;if(o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===sb.DragEnd&&"function"==typeof s){await Promise.resolve(s(o))&&(e=sb.DragCancel)}}R.current=null,D((()=>{k({type:e}),T(_y.Uninitialized),$e(null),P(null),F(null),Se.current=null;const t=e===sb.DragEnd?"onDragEnd":"onDragCancel";if(o){const e=H.current[t];null==e||e(o),S({type:t,event:o})}}))}}Se.current=o}),[I]),Ce=m(((e,t)=>(n,r)=>{const i=n.nativeEvent,a=I.get(r);if(null!==R.current||!a||i.dndKit||i.defaultPrevented)return;const o={active:a};!0===e(n,t.options,o)&&(i.dndKit={capturedBy:t.sensor},R.current=r,Oe(n,t))}),[I,Oe]),Te=function(e,t){return g((()=>e.reduce(((e,n)=>{const{sensor:r}=n;return[...e,...r.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,n)})))]}),[])),[e,t])}(h,Ce);!function(e){u((()=>{if(!_v)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(h),Lv((()=>{J&&C===_y.Initializing&&T(_y.Initialized)}),[J,C]),u((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:n,collisions:r,over:i}=te.current;if(!t||!n)return;const a={active:t,activatorEvent:n,collisions:r,delta:{x:ve.x,y:ve.y},over:i};D((()=>{null==e||e(a),S({type:"onDragMove",event:a})}))}),[ve.x,ve.y]),u((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=te.current;if(!e||null==R.current||!t||!i)return;const{onDragOver:a}=H.current,o=r.get(xe),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,l={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};D((()=>{$e(s),null==a||a(l),S({type:"onDragOver",event:l})}))}),[xe]),Lv((()=>{te.current={activatorEvent:z,active:B,activeNode:K,collisionRect:be,collisions:ye,droppableRects:U,draggableNodes:I,draggingNode:ie,draggingNodeRect:ae,droppableContainers:M,over:we,scrollableAncestors:de,scrollAdjustedTranslate:ve},N.current={initial:ae,translated:be}}),[B,K,ye,be,I,ie,ae,U,M,we,de,ve]),ay({...Z,delta:E,draggingRect:be,pointerCoordinates:he,scrollableAncestors:de,scrollableAncestorRects:ue});const De=g((()=>({active:B,activeNode:K,activeNodeRect:J,activatorEvent:z,collisions:ye,containerNodeRect:ee,dragOverlay:re,draggableNodes:I,droppableContainers:M,droppableRects:U,over:we,measureDroppableContainers:q,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:Y,measuringScheduled:X,windowRect:ce})),[B,K,J,z,ye,ee,re,I,M,U,we,q,de,ue,Y,X,ce]),je=g((()=>({activatorEvent:z,activators:Te,active:B,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:k,draggableNodes:I,over:we,measureDroppableContainers:q})),[z,Te,B,J,k,W,I,we,q]);return i.createElement(rb.Provider,{value:O},i.createElement(Sy.Provider,{value:je},i.createElement(Oy.Provider,{value:De},i.createElement(jy.Provider,{value:ke},p)),i.createElement(Dy,{disabled:!1===(null==c?void 0:c.restoreFocus)})),i.createElement(ob,{...c,hiddenTextDescribedById:W}))})),Ey=$(null),My="button";function Ay(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e;const a=Yv("Draggable"),{activators:o,activatorEvent:s,active:l,activeNodeRect:c,ariaDescribedById:d,draggableNodes:u,over:p}=f(Sy),{role:h=My,roleDescription:m="draggable",tabIndex:v=0}=null!=i?i:{},b=(null==l?void 0:l.id)===t,y=f(b?jy:Ey),[x,w]=Hv(),[$,k]=Hv(),S=function(e,t){return g((()=>e.reduce(((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e}),{})),[e,t])}(o,t),O=zv(n);Lv((()=>(u.set(t,{id:t,key:a,node:x,activatorNode:$,data:O}),()=>{const e=u.get(t);e&&e.key===a&&u.delete(t)})),[u,t]);return{active:l,activatorEvent:s,activeNodeRect:c,attributes:g((()=>({role:h,tabIndex:v,"aria-disabled":r,"aria-pressed":!(!b||h!==My)||void 0,"aria-roledescription":m,"aria-describedby":d.draggable})),[r,h,v,b,m,d.draggable]),isDragging:b,listeners:r?void 0:S,node:x,over:p,setNodeRef:w,setActivatorNodeRef:k,transform:y}}const Ny={timeout:25};function By(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Ry(e,t){return e.reduce(((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e}),Array(e.length))}function Ly(e){return null!==e&&e>=0}const Py=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const a=By(t,r,n),o=t[i],s=a[i];return s&&o?{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}:null},zy={scaleX:1,scaleY:1},Fy=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:i,rects:a,overIndex:o}=e;const s=null!=(t=a[n])?t:r;if(!s)return null;if(i===n){const e=a[o];return e?{x:0,y:n<o?e.top+e.height-(s.top+s.height):e.top-s.top,...zy}:null}const l=function(e,t,n){const r=e[t],i=e[t-1],a=e[t+1];if(!r)return 0;if(n<t)return i?r.top-(i.top+i.height):a?a.top-(r.top+r.height):0;return a?a.top-(r.top+r.height):i?r.top-(i.top+i.height):0}(a,i,n);return i>n&&i<=o?{x:0,y:-s.height-l,...zy}:i<n&&i>=o?{x:0,y:s.height+l,...zy}:{x:0,y:0,...zy}};const Hy="Sortable",Wy=i.createContext({activeIndex:-1,containerId:Hy,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Py,disabled:{draggable:!1,droppable:!1}});function Vy(e){let{children:t,id:n,items:r,strategy:o=Py,disabled:s=!1}=e;const{active:l,dragOverlay:c,droppableRects:d,over:p,measureDroppableContainers:h}=f(Oy),m=Yv(Hy,n),v=Boolean(null!==c.rect),b=g((()=>r.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[r]),y=null!=l,x=l?b.indexOf(l.id):-1,w=p?b.indexOf(p.id):-1,$=a(b),k=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(b,$.current),S=-1!==w&&-1===x||k,O=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(s);Lv((()=>{k&&y&&h(b)}),[k,b,y,h]),u((()=>{$.current=b}),[b]);const C=g((()=>({activeIndex:x,containerId:m,disabled:O,disableTransforms:S,items:b,overIndex:w,useDragOverlay:v,sortedRects:Ry(b,d),strategy:o})),[x,m,O.draggable,O.droppable,S,b,w,d,v,o]);return i.createElement(Wy.Provider,{value:C},t)}const Yy=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return By(n,r,i).indexOf(t)},Uy=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===a||i!==o)&&(!!n||o!==i&&t===l))},qy={duration:200,easing:"ease"},Xy="transform",Ky=Zv.Transition.toString({property:Xy,duration:0,easing:"linear"}),Gy={roleDescription:"sortable"};function Zy(e){let{animateLayoutChanges:t=Uy,attributes:n,disabled:r,data:i,getNewIndex:s=Yy,id:l,strategy:c,resizeObserverConfig:d,transition:p=qy}=e;const{items:h,containerId:v,activeIndex:b,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:k,strategy:S}=f(Wy),O=function(e,t){var n,r;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(r,y),C=h.indexOf(l),T=g((()=>({sortable:{containerId:v,index:C,items:h},...i})),[v,i,C,h]),D=g((()=>h.slice(h.indexOf(l))),[h,l]),{rect:j,node:_,isOver:I,setNodeRef:E}=function(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e;const o=Yv("Droppable"),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=f(Sy),p=a({disabled:n}),h=a(!1),g=a(null),v=a(null),{disabled:b,updateMeasurementsFor:y,timeout:x}={...Ny,...i},w=zv(null!=y?y:r),$=uy({callback:m((()=>{h.current?(null!=v.current&&clearTimeout(v.current),v.current=setTimeout((()=>{d(Array.isArray(w.current)?w.current:[w.current]),v.current=null}),x)):h.current=!0}),[x]),disabled:b||!s}),k=m(((e,t)=>{$&&(t&&($.unobserve(t),h.current=!1),e&&$.observe(e))}),[$]),[S,O]=Hv(k),C=zv(t);return u((()=>{$&&S.current&&($.disconnect(),h.current=!1,$.observe(S.current))}),[S,$]),u((()=>(l({type:sb.RegisterDroppable,element:{id:r,key:o,disabled:n,node:S,rect:g,data:C}}),()=>l({type:sb.UnregisterDroppable,key:o,id:r}))),[r]),u((()=>{n!==p.current.disabled&&(l({type:sb.SetDroppableDisabled,id:r,key:o,disabled:n}),p.current.disabled=n)}),[r,o,n,l]),{active:s,rect:g,isOver:(null==c?void 0:c.id)===r,node:S,over:c,setNodeRef:O}}({id:l,data:T,disabled:O.droppable,resizeObserverConfig:{updateMeasurementsFor:D,...d}}),{active:M,activatorEvent:A,activeNodeRect:N,attributes:B,setNodeRef:R,listeners:L,isDragging:P,over:z,setActivatorNodeRef:F,transform:H}=Ay({id:l,data:T,attributes:{...Gy,...n},disabled:O.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g((()=>e=>{t.forEach((t=>t(e)))}),t)}(E,R),V=Boolean(M),Y=V&&!x&&Ly(b)&&Ly($),U=!k&&P,q=U&&Y?H:null,X=Y?null!=q?q:(null!=c?c:S)({rects:w,activeNodeRect:N,activeIndex:b,overIndex:$,index:C}):null,K=Ly(b)&&Ly($)?s({id:l,items:h,activeIndex:b,overIndex:$}):C,G=null==M?void 0:M.id,Z=a({activeId:G,items:h,newIndex:K,containerId:v}),Q=h!==Z.current.items,J=t({active:M,containerId:v,isDragging:P,isSorting:V,id:l,index:C,items:h,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:p,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:n,node:r,rect:i}=e;const[s,l]=o(null),c=a(n);return Lv((()=>{if(!t&&n!==c.current&&r.current){const e=i.current;if(e){const t=wb(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&l(n)}}n!==c.current&&(c.current=n)}),[t,n,r,i]),u((()=>{s&&l(null)}),[s]),s}({disabled:!J,index:C,node:_,rect:j});return u((()=>{V&&Z.current.newIndex!==K&&(Z.current.newIndex=K),v!==Z.current.containerId&&(Z.current.containerId=v),h!==Z.current.items&&(Z.current.items=h)}),[V,K,v,h]),u((()=>{if(G===Z.current.activeId)return;if(G&&!Z.current.activeId)return void(Z.current.activeId=G);const e=setTimeout((()=>{Z.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:M,activeIndex:b,attributes:B,data:T,rect:j,index:C,newIndex:K,items:h,isOver:I,isSorting:V,isDragging:P,listeners:L,node:_,overIndex:$,over:z,setNodeRef:W,setActivatorNodeRef:F,setDroppableNodeRef:E,setDraggableNodeRef:R,transform:null!=ee?ee:X,transition:function(){if(ee||Q&&Z.current.newIndex===C)return Ky;if(U&&!Kv(A)||!p)return;if(V||J)return Zv.Transition.toString({...p,property:Xy});return}()}}function Qy(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Jy=[Fb.Down,Fb.Right,Fb.Up,Fb.Left],ex=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:a,over:o,scrollableAncestors:s}}=t;if(Jy.includes(e.code)){if(e.preventDefault(),!n||!r)return;const t=[];a.getEnabled().forEach((n=>{if(!n||null!=n&&n.disabled)return;const a=i.get(n.id);if(a)switch(e.code){case Fb.Down:r.top<a.top&&t.push(n);break;case Fb.Up:r.top>a.top&&t.push(n);break;case Fb.Left:r.left>a.left&&t.push(n);break;case Fb.Right:r.left<a.left&&t.push(n)}}));const l=(e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=hb(t),a=[];for(const e of r){const{id:t}=e,r=n.get(t);if(r){const n=hb(r),o=i.reduce(((e,t,r)=>{return e+(i=n[r],a=t,Math.sqrt(Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2)));var i,a}),0),s=Number((o/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:s}})}}return a.sort(ub)})({active:n,collisionRect:r,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=mb(l,"id");if(c===(null==o?void 0:o.id)&&l.length>1&&(c=l[1].id),null!=c){const e=a.get(n.id),t=a.get(c),o=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&o&&e&&t){const n=kb(l).some(((e,t)=>s[t]!==e)),i=tx(e,t),a=function(e,t){if(!Qy(e)||!Qy(t))return!1;if(!tx(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=n||!i?{x:0,y:0}:{x:a?r.width-o.width:0,y:a?r.height-o.height:0},d={x:o.left,y:o.top};return c.x&&c.y?d:Xv(d,c)}}}};function tx(e,t){return!(!Qy(e)||!Qy(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class nx extends ey{}nx.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>rx(e.target)}];function rx(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Ub{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>rx(e.target)}];const ix=I.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,ax=I(Uu)`
    color: ${pl.Neutral[1]};
    ${uc({textSize:"BodySmall"})}

    ${fl.MaxWidth.mobileL} {
        display: none;
    }
`,ox=I(Hm)`
    padding: 3.5rem 1.25rem 2.5rem;
`,sx=I.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${pl.Neutral[1]};
    ${uc({textSize:"BodySmall"})}
`,lx=r=>{var{children:i,visible:a,onMobileClose:o}=r,s=lt(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=zc.useMediaQuery({maxWidth:hl.mobileL}),d=()=>{o&&o()},u=()=>"string"==typeof i?e(Il.BodySmall,{children:i}):i;return t(n,{children:[a&&e(ix,Object.assign({"data-testid":l},s,{children:e(ax,{children:u()})})),c&&e(Pm,Object.assign({show:a,onOverlayClick:d},{children:e(ox,Object.assign({onClose:d},{children:e(sx,{children:u()})}))}))]})},cx=I.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,dx=r=>{var i,s,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:p,rootNode:h,customOffset:m,delay:f,onPopoverAppear:g,onPopoverDismiss:v}=r,b=lt(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=o(!1),w=a(),$=a(),k=zc.useMediaQuery({maxWidth:gl.mobileL}),{refs:S,floatingStyles:O,context:C}=ve({open:y,placement:u,whileElementsMounted:be,middleware:[ye(null!=m?m:16),xe(),we({limiter:$e()})],onOpenChange:e=>{x(e),y!==e&&N(e)}}),T=Eh(),D=k?"click":d,j=Oe(C,{ignoreMouse:"hover"===D}),_=Ce(C),I=Me(C,{enabled:"hover"===D,delay:{open:null!==(i=null==f?void 0:f.open)&&void 0!==i?i:0,close:null!==(s=null==f?void 0:f.close)&&void 0!==s?s:500}}),{getReferenceProps:E,getFloatingProps:M}=Te([j,_,I]),A=()=>{x(!1),N(!1)},N=e=>{e&&g&&g(),!e&&v&&v()};return t(n,{children:[e(cx,Object.assign({ref:e=>{w.current=e,S.setReference(e)}},E({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),b,{children:l})),y&&e(De,Object.assign({root:h},{children:e(je,Object.assign({context:C},{children:e("div",Object.assign({ref:e=>{$.current=e,S.setFloating(e)},style:Object.assign(Object.assign({},O),{outline:"none",zIndex:null!=p?p:T})},M(),{children:"function"==typeof c?c():e(lx,Object.assign({visible:!0,onMobileClose:A},{children:c}))}))}))}))]})},ux=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},px=I.span`
    color: ${pl.Primary};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>ux(e)}

    &:hover,
    &:focus-visible {
        color: ${pl.Secondary};
        ${({$hoverStyle:e})=>ux(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,hx=I.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,mx=n=>{var{ariaLabel:r,content:i,icon:a,underlineStyle:o="default",underlineHoverStyle:s="default"}=n,l=lt(n,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!i;return e(dx,Object.assign({},l,{children:t(px,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:o,$hoverStyle:s,"aria-label":null!=r?r:c?void 0:"More info"},{children:[i,a&&e(hx,Object.assign({$standalone:!c},{children:a}))]}))}))};I.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${pl.Primary};
    }
`;const fx=I.div`
    padding-left: 0.25rem;
    display: inline;
`,gx=({addon:t,rootNode:n})=>{const{content:r,type:i,icon:a,id:o,zIndex:s,"data-testid":l}=t;return e(fx,{children:e(mx,{trigger:"click",id:o,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s,icon:null!=a?a:e(P,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},vx=I.label`
    ${_l.getTextStyle("H5","semibold")}
    color: ${pl.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${_l.getTextStyle("H5","semibold")}
    }

    a {
        color: ${pl.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${pl.Secondary};

            svg {
                color: ${pl.Secondary};
            }
        }
    }
`,bx=I(Il.H6)`
    color: ${pl.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,yx=I(Il.BodySmall)`
    && {
        color: ${pl.Neutral[3]};
        ${_l.getFontFamily("BodySmall","regular")}
    }
`,xx=n=>{var{children:r,addon:i,subtitle:a,"data-testid":o}=n,s=lt(n,["children","addon","subtitle","data-testid"]);return t(vx,Object.assign({},s,{children:[r,i&&i.type&&("popover"===i.type?e(gx,{addon:i}):null),"string"==typeof a?e(yx,Object.assign({as:"span","data-testid":o?`${o}-subtitle`:"subtitle"},s,{children:a})):a]}))},wx=t=>e(bx,Object.assign({weight:"semibold"},t)),$x=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,s=lt(t,["children","data-testid","type","stretch"]);return e(kx,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},s,{children:r}))})),kx=I.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?E`
                padding: 0 3rem;
            `:E`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${fl.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${fl.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${fl.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return E`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${fl.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${fl.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return E`
                    display: flex;
                    flex-direction: column;
                `;default:return E`
                    display: flex;
                `}}}
`,Sx=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=lt(t,["children","data-testid","stretch"]);return e(Ox,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),Ox=I.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?E`
                ${fl.MaxWidth.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:E`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,Cx=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=t,l=lt(t,["children","data-testid","className","type","stretch"]);return e(Sx,Object.assign({ref:n,"data-testid":i,className:a,stretch:s},l,{children:e($x,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),Tx={Section:Sx,Container:$x,Content:Cx,ColDiv:vm},Dx=E`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,jx=I.div`
    ${Dx}
`,_x=I(Tx.ColDiv)`
    ${Dx}
`,Ix=({label:n,errorMessage:r,id:i,disabled:a,children:o,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:u,"data-error-testid":p})=>{const h=!s&&(l||d||u)?"grid":s||"flex",m=()=>p||(i?`${i}-error-message`:"error-message"),f=()=>!!r;return t("grid"===h?_x:jx,Object.assign({},(e=>{switch(e){case"grid":return{mobileCols:l,tabletCols:d,desktopCols:u};case"flex":return}})(h),{children:[n&&e(xx,"string"==typeof n?Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},{children:n}):Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},n)),(()=>{const e={"aria-invalid":f(),"aria-describedby":f()&&m()};return S.map(o,(t=>c(t,e)))})(),r&&e(bx,Object.assign({id:m(),weight:"semibold",tabIndex:0,"data-testid":m()},{children:r}))]}))};function Ex(e,t){return Ex=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ex(e,t)}function Mx(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Ax(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Nx(e){return null!==e&&1===e.length?e[0]:e.slice()}function Bx(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Rx(e,t){return Lx(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function Lx(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let Px=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Bx(n.getMouseEventMap())}))}Mx(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=Rx(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Bx(n.getKeyDownEventMap()),Mx(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),Bx(n.getMouseEventMap()),Mx(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),Bx(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},a={index:t,value:Nx(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(a)),n.props.renderThumb(i,a)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},a={index:e,value:Nx(n.state.value)};return n.props.renderTrack(i,a)};let r=Ax(t.value);r.length||(r=Ax(t.defaultValue)),n.pendingResizeTimeouts=[];const a=[];for(let e=0;e<r.length;e+=1)r[e]=Rx(r[e],t),a.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:a},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ex(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Ax(e.value);return n.length?t.pending?null:{value:n.map((t=>Rx(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return Nx(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let a=0;a<i;a+=1){const i=this.calcOffset(r[a]),o=Math.abs(e-i);o<t&&(t=o,n=a)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Rx(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],a=r[this.posMaxKey()],o=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(a-o);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let a=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(a=this.state.sliderLength-a),a-=this.state.thumbSize/2,a},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=Rx(this.calcValue(n),this.props),a=this.state.value.slice();a[r]=i;for(let e=0;e<a.length-1;e+=1)if(a[e+1]-a[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:a},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Rx(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Rx(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:a,max:o,min:s,minDistance:l}=this.props;if(!a){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,a&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const a=r-i*n;t[e-1-i]>a&&(t[e-1-i]=a)}}(r,t,l,o)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=Lx(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=Lx(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](Nx(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,a=this.renderThumbs(e),o=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,a,o)},t}(i.Component);Px.displayName="ReactSlider",Px.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var zx=Px;const Fx=I.div`
    isolation: isolate;
`,Hx=I.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,Wx=I.div`
    margin-bottom: 1rem;
`,Vx=I(Il.Body)`
    overflow-wrap: anywhere;
`,Yx=I(zx)`
    height: 0.875rem;
`,Ux=I.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?E`
                cursor: not-allowed;
            `:e.$readOnly?void 0:E`
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

        background-color: ${pl.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${pl.Neutral[4]};
        border-radius: 50%;
    }
`,qx=I.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${Ux}:after {
        border: 1px solid ${pl.Primary};
    }
`,Xx=I.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||pl.Neutral[4](e)};
`,Kx=n=>{var{value:r,min:i=0,max:a=100,step:s=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:p,readOnly:h,ariaLabels:m,showSliderLabels:f,sliderLabelPrefix:g,sliderLabelSuffix:v,showIndicatorLabel:b,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:k}=n,S=lt(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[O,C]=o(D()),T=function(){const e=function(){const e=p||h?pl.Neutral[5]:pl.Neutral[4],t=p||h?pl.Neutral[4]:pl.Primary;if(1===c)return[t,e];const n=[];n.push(e);for(let e=0;e<c-1;e++)n.push(t);return n.push(e),n}();return new Array(c+1).fill(0).map(((t,n)=>(null==d?void 0:d[n])||e[n]))}();u((()=>{r!==O&&C(D())}),[r]);function D(){if(r&&r.length===c)return r;const e=[];for(let t=0;t<c;t++)e.push(i+s*t);return e}const j=e=>w?w(e):t(Vx,{children:[g,e,v]});return t(Fx,Object.assign({},S,{children:[b&&e(Wx,{children:(()=>{let e="";if(1===O.length)e=`${O[0]}`;else if(2===O.length)e=`${O[0]} - ${O[1]}`;else if(O.length>2){e=`${Math.min(...O)} - ${Math.max(...O)}`}return t(Vx,{children:[y,e,x]})})()}),e(Yx,{step:s,min:i,max:a,value:O,disabled:p||h,onChange:(e,t)=>{if("number"==typeof e){const t=[e];C(t),null==$||$(t)}else{if(t>-1&&O[t]===e[t])return;C(e),null==$||$(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];C(t),null==k||k(t)}else C(e),null==k||k(e)},minDistance:l,ariaLabel:m,renderThumb:(t,n)=>e(qx,Object.assign({"data-testid":`slider-thumb-${n.index}`},t,{tabIndex:p?void 0:t.tabIndex},{children:e(Ux,{$disabled:p,$readOnly:h})})),renderTrack:(t,n)=>e(Xx,Object.assign({"data-testid":`slider-track-${n.index}`},t,{$color:T[n.index]}))}),f&&t(Hx,{children:[e("div",{children:j(i)}),e("div",{children:j(a)})]})]}))},Gx=I.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,Zx=I.div`
    margin: 0 0.5rem;
`,Qx=I.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Jx=I.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${pl.Neutral[8]};

    ${e=>{let t=pl.Neutral[6];return e.$disabled&&e.$selected?t=pl.Neutral[4]:e.$disabled?t=pl.Neutral[5]:e.$selected&&(t=pl.Accent.Light[1]),E`
            background-color: ${t};
        `}}
`,ew=I(Kx)`
    margin-top: -0.3125rem;
`,tw=r=>{var{bins:i=[],interval:a,disabled:s,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:p,rangeLabelSuffix:h,ariaLabels:m,onChange:f,onChangeEnd:v,renderEmptyView:b,renderRangeLabel:y}=r,x=lt(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),$=Math.max(...w),k=i.map((e=>e.minValue)),S=Math.max(...k),O=Math.min(...k),[C,T]=o(I()),D=g((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(S-O)/a+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===O+a*r));t?n.push(t):n.push({count:0,minValue:O+a*r})}return n}),[i,a]);u((()=>{c!==C&&T(I())}),[c]);const j=e=>{T(e),null==f||f(e)},_=e=>{T(e),null==v||v(e)};function I(){return null!=c?c:[O,O+a]}const E=e=>y?y(e):t(Il.Body,{children:[p,e,h]});return t("div",Object.assign({},x,{children:[d&&t(Gx,{children:[E(C[0]),e(Zx,{children:"-"}),E(C[1])]}),D.every((e=>0===e.count))&&b?b():t(n,{children:[e(Qx,{children:D.map(((t,n)=>{const r=t.count/$;return e(Jx,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:t.minValue>=C[0]&&t.minValue<C[1],$disabled:s||l},n)}))}),e(ew,{min:O,max:S+a,step:a,minRange:a,numOfThumbs:2,value:C,disabled:s,readOnly:l,ariaLabels:m,onChange:j,onChangeEnd:_})]})]}))},nw=I.input`
    ${_l.getTextStyle("Body","regular")}
    color: ${pl.Neutral[1]};

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
        color: ${pl.Neutral[3]};
    }

    ${e=>"number"===e.type?E`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?E`
                cursor: not-allowed;
            `:void 0}
`,rw=I.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${pl.Neutral[3]};
    background-color: transparent;
    border: none;
`,iw=I(Ae)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,aw=I.div`
    display: flex;
    width: 100%;
`,ow=i.forwardRef(((r,i)=>{var{value:o,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:p,onClear:h,allowClear:m=!1,className:f,styleType:g="bordered"}=r,b=lt(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=a();v(i,(()=>y.current),[]);const x=Dd({ref:y,formatter:e=>kd.transformWithSpaces(e,s)}),w=e=>{p&&(k()?S(e):p(e))},$=()=>{h&&h(),y&&y.current&&y.current.focus()},k=()=>"tel"===l&&s,S=e=>{const{nextValue:t,updateCaretPosition:n}=x(),r=t.replace(/\s/g,"");e.target.value=r,p(e),n()},O=o?(e=>e?k()?kd.transformWithSpaces(e,s):e:"")(o):o,C=()=>t(n,{children:[e(nw,Object.assign({"data-testid":"input",ref:y,disabled:d,value:O,onChange:w,type:l,readOnly:u},b)),m&&!d&&!u&&!!o&&e(rw,Object.assign({onClick:$,type:"button"},{children:e(iw,{"aria-hidden":!0})}))]});return e(n,{children:"no-border"===g?e(aw,Object.assign({className:f},{children:C()})):e(Fh,Object.assign({$disabled:d,$error:c,$readOnly:u,className:f},{children:C()}))})})),sw=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:a,label:r,errorMessage:i,disabled:p.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(ow,Object.assign({id:`${a}-base`,"data-testid":s||a,ref:n,error:!!i},p))}))})),lw=I.div`
    display: flex;
    position: relative;
    border: 1px solid ${pl.Neutral[5]};
    border-radius: 4px;
    background: ${pl.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${pl.Accent.Light[1]};
        box-shadow: ${Xl.InputBoxShadow};
    }

    ${e=>e.$readOnly?E`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?E`
                background: ${pl.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${pl.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?E`
                border: 1px solid ${pl.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${pl.Validation.Red.Border(e)};
                    box-shadow: ${Xl.InputErrorBoxShadow};
                }
            `:void 0}
`,cw=I(ow)`
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
`,dw=I.div`
    position: relative;
    display: flex;
    align-items: center;

    ${_l.getTextStyle("Body","regular")}
    color: ${pl.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${pl.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return E`
                color: ${pl.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${pl.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?E`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:E`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var uw=ms;var pw=ms,hw=fs,mw=Es;var fw=ms,gw=function(){this.__data__=new uw,this.size=0},vw=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},bw=function(e){return this.__data__.get(e)},yw=function(e){return this.__data__.has(e)},xw=function(e,t){var n=this.__data__;if(n instanceof pw){var r=n.__data__;if(!hw||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new mw(r)}return n.set(e,t),this.size=n.size,this};function ww(e){var t=this.__data__=new fw(e);this.size=t.size}ww.prototype.clear=gw,ww.prototype.delete=vw,ww.prototype.get=bw,ww.prototype.has=yw,ww.prototype.set=xw;var $w=ww;var kw=Es,Sw=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ow=function(e){return this.__data__.has(e)};function Cw(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new kw;++t<n;)this.add(e[t])}Cw.prototype.add=Cw.prototype.push=Sw,Cw.prototype.has=Ow;var Tw=Cw,Dw=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},jw=function(e,t){return e.has(t)};var _w=function(e,t,n,r,i,a){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,p=!0,h=2&n?new Tw:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var m=e[u],f=t[u];if(r)var g=o?r(f,m,u,t,e,a):r(m,f,u,e,t,a);if(void 0!==g){if(g)continue;p=!1;break}if(h){if(!Dw(t,(function(e,t){if(!jw(h,t)&&(m===e||i(m,e,n,r,a)))return h.push(t)}))){p=!1;break}}else if(m!==f&&!i(m,f,n,r,a)){p=!1;break}}return a.delete(e),a.delete(t),p};var Iw=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Ew=Va.Uint8Array,Mw=es,Aw=_w,Nw=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Bw=Iw,Rw=Ya?Ya.prototype:void 0,Lw=Rw?Rw.valueOf:void 0;var Pw=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new Ew(e),new Ew(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Mw(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Nw;case"[object Set]":var l=1&r;if(s||(s=Bw),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=Aw(s(e),s(t),r,i,a,o);return o.delete(e),d;case"[object Symbol]":if(Lw)return Lw.call(e)==Lw.call(t)}return!1};var zw=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Fw=zw,Hw=za;var Ww=function(e,t,n){var r=t(e);return Hw(e)?r:Fw(r,n(e))};var Vw=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},Yw=function(){return[]},Uw=Object.prototype.propertyIsEnumerable,qw=Object.getOwnPropertySymbols,Xw=qw?function(e){return null==e?[]:(e=Object(e),Vw(qw(e),(function(t){return Uw.call(e,t)})))}:Yw;var Kw=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Gw=no,Zw=ro;var Qw=function(e){return Zw(e)&&"[object Arguments]"==Gw(e)},Jw=ro,e$=Object.prototype,t$=e$.hasOwnProperty,n$=e$.propertyIsEnumerable,r$=Qw(function(){return arguments}())?Qw:function(e){return Jw(e)&&t$.call(e,"callee")&&!n$.call(e,"callee")},i$={exports:{}};var a$=function(){return!1};!function(e,t){var n=Va,r=a$,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(i$,i$.exports);var o$=i$.exports,s$=/^(?:0|[1-9]\d*)$/;var l$=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&s$.test(e))&&e>-1&&e%1==0&&e<t};var c$=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},d$=no,u$=c$,p$=ro,h$={};h$["[object Float32Array]"]=h$["[object Float64Array]"]=h$["[object Int8Array]"]=h$["[object Int16Array]"]=h$["[object Int32Array]"]=h$["[object Uint8Array]"]=h$["[object Uint8ClampedArray]"]=h$["[object Uint16Array]"]=h$["[object Uint32Array]"]=!0,h$["[object Arguments]"]=h$["[object Array]"]=h$["[object ArrayBuffer]"]=h$["[object Boolean]"]=h$["[object DataView]"]=h$["[object Date]"]=h$["[object Error]"]=h$["[object Function]"]=h$["[object Map]"]=h$["[object Number]"]=h$["[object Object]"]=h$["[object RegExp]"]=h$["[object Set]"]=h$["[object String]"]=h$["[object WeakMap]"]=!1;var m$=function(e){return p$(e)&&u$(e.length)&&!!h$[d$(e)]};var f$=function(e){return function(t){return e(t)}},g$={exports:{}};!function(e,t){var n=Fa,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(g$,g$.exports);var v$=g$.exports,b$=m$,y$=f$,x$=v$&&v$.isTypedArray,w$=x$?y$(x$):b$,$$=Kw,k$=r$,S$=za,O$=o$,C$=l$,T$=w$,D$=Object.prototype.hasOwnProperty;var j$=function(e,t){var n=S$(e),r=!n&&k$(e),i=!n&&!r&&O$(e),a=!n&&!r&&!i&&T$(e),o=n||r||i||a,s=o?$$(e.length,String):[],l=s.length;for(var c in e)!t&&!D$.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||C$(c,l))||s.push(c);return s},_$=Object.prototype;var I$=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||_$)};var E$=function(e,t){return function(n){return e(t(n))}},M$=E$(Object.keys,Object),A$=I$,N$=M$,B$=Object.prototype.hasOwnProperty;var R$=function(e){if(!A$(e))return N$(e);var t=[];for(var n in Object(e))B$.call(e,n)&&"constructor"!=n&&t.push(n);return t},L$=vo,P$=c$;var z$=function(e){return null!=e&&P$(e.length)&&!L$(e)},F$=j$,H$=R$,W$=z$;var V$=function(e){return W$(e)?F$(e):H$(e)},Y$=Ww,U$=Xw,q$=V$;var X$=function(e){return Y$(e,q$,U$)},K$=Object.prototype.hasOwnProperty;var G$=function(e,t,n,r,i,a){var o=1&n,s=X$(e),l=s.length;if(l!=X$(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:K$.call(t,d)))return!1}var u=a.get(e),p=a.get(t);if(u&&p)return u==t&&p==e;var h=!0;a.set(e,t),a.set(t,e);for(var m=o;++c<l;){var f=e[d=s[c]],g=t[d];if(r)var v=o?r(g,f,d,t,e,a):r(f,g,d,e,t,a);if(!(void 0===v?f===g||i(f,g,n,r,a):v)){h=!1;break}m||(m="constructor"==d)}if(h&&!m){var b=e.constructor,y=t.constructor;b==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof y&&y instanceof y||(h=!1)}return a.delete(e),a.delete(t),h},Z$=No(Va,"DataView"),Q$=fs,J$=No(Va,"Promise"),ek=No(Va,"Set"),tk=No(Va,"WeakMap"),nk=no,rk=$o,ik="[object Map]",ak="[object Promise]",ok="[object Set]",sk="[object WeakMap]",lk="[object DataView]",ck=rk(Z$),dk=rk(Q$),uk=rk(J$),pk=rk(ek),hk=rk(tk),mk=nk;(Z$&&mk(new Z$(new ArrayBuffer(1)))!=lk||Q$&&mk(new Q$)!=ik||J$&&mk(J$.resolve())!=ak||ek&&mk(new ek)!=ok||tk&&mk(new tk)!=sk)&&(mk=function(e){var t=nk(e),n="[object Object]"==t?e.constructor:void 0,r=n?rk(n):"";if(r)switch(r){case ck:return lk;case dk:return ik;case uk:return ak;case pk:return ok;case hk:return sk}return t});var fk=mk,gk=$w,vk=_w,bk=Pw,yk=G$,xk=fk,wk=za,$k=o$,kk=w$,Sk="[object Arguments]",Ok="[object Array]",Ck="[object Object]",Tk=Object.prototype.hasOwnProperty;var Dk=function(e,t,n,r,i,a){var o=wk(e),s=wk(t),l=o?Ok:xk(e),c=s?Ok:xk(t),d=(l=l==Sk?Ck:l)==Ck,u=(c=c==Sk?Ck:c)==Ck,p=l==c;if(p&&$k(e)){if(!$k(t))return!1;o=!0,d=!1}if(p&&!d)return a||(a=new gk),o||kk(e)?vk(e,t,n,r,i,a):bk(e,t,l,n,r,i,a);if(!(1&n)){var h=d&&Tk.call(e,"__wrapped__"),m=u&&Tk.call(t,"__wrapped__");if(h||m){var f=h?e.value():e,g=m?t.value():t;return a||(a=new gk),i(f,g,n,r,a)}}return!!p&&(a||(a=new gk),yk(e,t,n,r,i,a))},jk=ro;var _k=function e(t,n,r,i,a){return t===n||(null==t||null==n||!jk(t)&&!jk(n)?t!=t&&n!=n:Dk(t,n,r,i,e,a))},Ik=$w,Ek=_k;var Mk=ho;var Ak=function(e){return e==e&&!Mk(e)},Nk=Ak,Bk=V$;var Rk=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Lk=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=n[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new Ik;if(r)var p=r(c,d,l,e,t,u);if(!(void 0===p?Ek(d,c,3,r,u):p))return!1}}return!0},Pk=function(e){for(var t=Bk(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Nk(i)]}return t},zk=Rk;var Fk=Qs,Hk=r$,Wk=za,Vk=l$,Yk=c$,Uk=el;var qk=function(e,t){return null!=e&&t in Object(e)},Xk=function(e,t,n){for(var r=-1,i=(t=Fk(t,e)).length,a=!1;++r<i;){var o=Uk(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&Yk(i)&&Vk(o,i)&&(Wk(e)||Hk(e))};var Kk=_k,Gk=al,Zk=function(e,t){return null!=e&&Xk(e,t,qk)},Qk=po,Jk=Ak,eS=Rk,tS=el;var nS=rl;var rS=function(e){return function(t){return null==t?void 0:t[e]}},iS=function(e){return function(t){return nS(t,e)}},aS=po,oS=el;var sS=function(e){var t=Pk(e);return 1==t.length&&t[0][2]?zk(t[0][0],t[0][1]):function(n){return n===e||Lk(n,e,t)}},lS=function(e,t){return Qk(e)&&Jk(t)?eS(tS(e),t):function(n){var r=Gk(n,e);return void 0===r&&r===t?Zk(n,e):Kk(t,r,3)}},cS=function(e){return e},dS=za,uS=function(e){return aS(e)?rS(oS(e)):iS(e)};var pS=function(e){return"function"==typeof e?e:null==e?cS:"object"==typeof e?dS(e)?lS(e[0],e[1]):sS(e):uS(e)},hS=pS,mS=z$,fS=V$;var gS=function(e){return function(t,n,r){var i=Object(t);if(!mS(t)){var a=hS(n);t=fS(t),n=function(e){return a(i[e],e,i)}}var o=e(t,n,r);return o>-1?i[a?t[o]:o]:void 0}};var vS=lp,bS=1/0;var yS=function(e){return e?(e=vS(e))===bS||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var xS=function(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1},wS=pS,$S=function(e){var t=yS(e),n=t%1;return t==t?n?t-n:t:0},kS=Math.max;var SS=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:$S(n);return i<0&&(i=kS(r+i,0)),xS(e,wS(t),i)},OS=Pa(SS),CS=Pa(gS(SS)),TS=_k;var DS=Pa((function(e,t){return TS(e,t)}));const jS=I(Ra.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,_S=I.ul`
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
        background: ${pl.Neutral[4]};
        border-right: 5px solid ${pl.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${fl.MaxWidth.mobileL} {
        max-height: 15rem;
    }
`,IS=I.li`
    :hover,
    :focus,
    :active {
        background: ${pl.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return E`
                background: ${pl.Accent.Light[5]};
            `}}
`,ES=I.button`
    display: flex;
    ${e=>e.$multiSelect?E`
                padding: 0.5rem 1rem;
            `:E`
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
        outline-color: ${pl.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,MS=E`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,AS=I.div`
    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${pl.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&MS}
`,NS=I.div`
    color: ${pl.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&MS}

    ${e=>"next-line"===e.$labelDisplayType?E`
                    ${_l.getTextStyle("BodySmall","semibold")}
                `:E`
                    ${_l.getTextStyle("Body","regular")}
                `}
`,BS=I.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return E`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return E`
                    ${AS} {
                        display: inline;
                    }

                    ${NS} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,RS=I.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,LS=I.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,PS=I(Gu)`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,zS=I.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,FS=I.button`
    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${pl.Primary(e)};\n\t\t`}
`,HS=I.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,WS=I.div`
    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,VS=I(R)`
    ${e=>{const t="small"===e.$variant?1:1.5;return E`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${pl.Validation.Red.Icon};
`,YS=e=>"small"===e?1:1.375,US=e=>E`
        height: ${YS(e)}rem;
        width: ${YS(e)}rem;
    `,qS=I.li`
    background: ${pl.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,XS=I(Hh)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,KS=I(Le)`
    ${e=>US(e.$variant)}
    margin: 0 0.5rem;
    color: ${pl.Neutral[3]};
`,GS=I(bl)`
    ${e=>US(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${pl.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return E`
                svg {
                    ${US(e.$variant)}
                }
            `}}
`,ZS=h(((n,r)=>{const{onClear:i}=n,a=lt(n,["onClear"]);return t(qS,{children:[e(KS,{$variant:n.variant}),e(XS,Object.assign({ref:r,$variant:n.variant},a)),a.value&&e(GS,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:n.variant},{children:e(J,{})}))]},"search")})),QS=r=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:p,enableSearch:h,searchPlaceholder:m="Search",onSearch:f,searchFunction:g,onDismiss:v,disableItemFocus:b,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:k="success",itemTruncationType:S="end",itemMaxLines:O=2,labelDisplayType:C="inline",renderListItem:T,onBlur:D,hideNoResultsDisplay:j,renderCustomCallToAction:_,variant:I="default"}=r,E=lt(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[M,A]=o(0),[N,B]=o(""),[R,L]=o(i),[P,z]=o(0),F=ya({height:P}),H=a(),W=a(),V=a([]),Y=a(),U=a(),q=a(M),X=a(R),K=e=>{q.current=e,A(e)},G=e=>{X.current=e,L(e)};u((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),u((()=>{ee(N)}),[N]),u((()=>{if(B(""),p){if(setTimeout((()=>{z(te())})),b)return;Y&&Y.current?(Y.current.focus(),K(-1)):V.current[M]&&V.current[M].focus()}else z(0)}),[p]),u((()=>{if(p){const e=te();z(e)}}),[R,k]),u((()=>{G(i),B(""),K(0)}),[i]);const Z=e=>s?s(e):e.toString(),Q=e=>{if("inline"!==C)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return kd.getTextWidth(e,"1.125rem 'Open Sans'")>t*O},J=e=>!!CS(x,(t=>DS(t,e))),ee=e=>{if(""===e)G(i);else if(g){const t=g(e);G(t)}else{const t=i.filter((t=>{var n;const r=Z(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),a="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),o=e.trim().toLowerCase();return i.includes(o)||a&&a.includes(o)}));G(t)}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(q.current&&X.current&&q.current<X.current.length-1){const e=q.current+1;V.current[e].focus(),K(e)}break;case"ArrowUp":if(q.current>0){const e=q.current-1;V.current[e].focus(),K(q.current-1)}break;case"Escape":v&&v(!0)}},re=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;B(t),f&&f()},ae=()=>{var e;B(""),null===(e=Y.current)||void 0===e||e.focus(),f&&f()},oe=()=>{$&&$()},se=()=>{D&&D()},le=r=>t(n,{children:[e(RS,Object.assign({$maxLines:O,"aria-hidden":!0},{children:r})),e(LS,Object.assign({$maxLines:O,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=Z(n),i="string"==typeof r?r:r.title,a="string"==typeof r?void 0:r.secondaryLabel,o=Q(i),s=a&&Q(a),l=o||s?"next-line":C;return t(BS,Object.assign({$labelDisplayType:l},{children:[e(AS,Object.assign({$truncateType:S,$maxLines:O,$variant:I,"aria-label":i},{children:"middle"===S&&o?le(i):i})),a&&e(NS,Object.assign({$truncateType:S,$maxLines:O,$labelDisplayType:C,"aria-label":a},{children:"middle"===S&&s?le(a):a}))]}))},de=()=>{if(!$||$&&"success"===k)return R.map(((n,r)=>e(IS,Object.assign({$checked:J(n)&&!y},{children:t(ES,Object.assign({$hasNextLineLabel:"next-line"===C&&R.length>0&&s&&"string"!=typeof s(R[0]),onClick:e=>{re(e,n)},ref:e=>V.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:p?0:-1,$multiSelect:y,onBlur:se,$variant:I},{children:[y&&e(PS,{checked:J(n),displaySize:"small"}),T?T(n,{selected:J(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},ue=()=>{if(y&&R.length>0&&!N&&"success"===k)return e(zS,{children:e(FS,Object.assign({onClick:w,type:"button",$variant:I},{children:0===x.length?"Select all":"Clear all"}))},"selectAll")},pe=()=>{if(!j&&(N||!h)&&0===R.length&&"success"===k)return t(HS,Object.assign({"data-testid":"list-no-results"},{children:[e(VS,{"data-testid":"no-result-icon",$variant:I}),e(WS,Object.assign({$variant:I},{children:"No results found."}))]}),"noResults")},he=()=>{if($&&"loading"===k){const n="small"===I?16:24;return t(HS,Object.assign({"data-testid":"list-loading"},{children:[e(ic,{$buttonStyle:"secondary",size:n}),e(WS,Object.assign({$variant:I},{children:"Loading..."}))]}),"loading")}},me=()=>{if($&&"fail"===k)return t(HS,Object.assign({"data-testid":"list-fail"},{children:[e(VS,{"data-testid":"load-error-icon",$variant:I}),e(WS,Object.assign({$variant:I},{children:"Failed to load."}))," ",e(FS,Object.assign({onClick:oe,type:"button",$variant:I},{children:"Try again."}))]}),"noResults")};return e(n,{children:t(jS,Object.assign({style:F,"data-testid":p?"dropdown-container":"dropdown-container-hidden",ref:H},{children:[(()=>{if(p)return t(_S,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},E,{children:[(h||g)&&"success"===k?e(ZS,{ref:Y,onChange:ie,value:N,placeholder:m,"data-testid":"search-input","aria-label":"search-input",tabIndex:p?0:-1,onClear:ae,variant:I}):null,ue(),pe(),he(),me(),de()]}))})(),(()=>{if(p&&_)return e("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:_(v,R)}))})()]}))})},JS=I.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return E`
                border-bottom: 1px solid ${pl.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?E`
                border: 0;
                margin: 0;
            `:"right"===e.$position?E`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:E`
                        flex-direction: row;
                    `}
`,eO=I($h)`
    padding: 0;
    width: auto;
`,tO=I.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,nO=I.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Nl.Base};
    margin: 0 0.75rem;
`,rO=I(he)`
    color: ${pl.Neutral[3]};
    height: ${Sl.Body.fontSize}rem;
    width: ${Sl.Body.fontSize}rem;
    vertical-align: bottom;
`,iO=I.div`
    display: flex;
    flex: 1 1 auto;
`,aO=I(Il.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,oO=I(aO)`
    color: ${pl.Neutral[3]};
`,sO=I.div`
    width: 1px;
    background: ${pl.Neutral[5]};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return E`
                display: none;
            `}}

    ${e=>"right"===e.$position?E`
                    margin: 0 0.75rem;
                `:E`
                    margin: 0 0.75rem 0 0;
                `}
`,lO=i.forwardRef(((r,i)=>{var{addon:s,error:l,onChange:c,readOnly:d,className:p,onBlur:h}=r,m=lt(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:f,options:g,enableSearch:v,searchFunction:b,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:k,onSelectOption:S,onHideOptions:O,onShowOptions:C,"data-selector-testid":T}=s.attributes,{position:D}=s,[j,_]=o(k),[I,E]=o(!1),M=a();u((()=>{_(k)}),[k]);const A=()=>$?$(j):x?x(j):j.toString(),N=e=>{!e&&O&&O(),e&&C&&C()},B=e=>{e.preventDefault(),m.disabled||(E(!I),N(!I))},R=(e,t)=>{_(e),E(!1),N(!1),M&&M.current&&M.current.focus(),S&&S(e,t)},L=e=>{c&&c(e)},P=()=>{h&&h()},z=()=>{E(!1),N(!1),M&&M.current&&M.current.focus()};return t(_h,Object.assign({className:p,show:I,error:l&&!I,disabled:m.disabled,readOnly:d,onBlur:()=>{E(!1),N(!1),P()}},{children:[t(JS,Object.assign({$expanded:I,$readOnly:d,$position:D},{children:[d?j?e(tO,{children:e(aO,Object.assign({"data-testid":"selector-label"},{children:A()}))}):null:e(eO,Object.assign({ref:M,type:"button",disabled:m.disabled,"data-testid":T||"addon-selector",onClick:B},{children:t(n,{children:[t(iO,{children:[f&&!j&&e(oO,{children:f}),j&&e(aO,Object.assign({"data-testid":"selector-label"},{children:A()}))]}),e(nO,Object.assign({$expanded:I},{children:e(rO,{})}))]})})),e(sO,{$readOnly:d,$position:D}),e(cw,Object.assign({ref:i},m,{readOnly:d,error:l,onChange:L,"data-testid":m["data-testid"]||"input",onBlur:P}))]})),g&&g.length>0?e(QS,{listItems:g,selectedItems:k?[k]:[],onSelectItem:R,valueExtractor:x,listExtractor:w,visible:I,enableSearch:v,searchFunction:b,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:z}):null]}))})),cO=i.forwardRef(((n,r)=>{var{addon:i,error:a,className:o}=n,s=lt(n,["addon","error","className"]);const l=()=>e(lw,Object.assign({disabled:s.disabled,$error:a,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:o},{children:e(cw,Object.assign({ref:r},s,{"data-testid":"input"}))}));if(!i)return l();{const{type:n="label",position:c="left"}=i,{allowClear:d}=s;switch(n){case"list":{const t=i.attributes;return t.options&&t.options.length>0?e(lO,Object.assign({ref:r,addon:i,error:a,className:o},s)):l()}case"custom":{const n=i.attributes;return n.children?t(Fh,Object.assign({$error:a,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[e(dw,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.children})),e(cw,Object.assign({ref:r},s,{allowClear:d&&"right"!==c,error:a,"data-testid":"input"}))]})):l()}default:{const n=i.attributes;return n.value?t(Fh,Object.assign({$disabled:s.disabled,$error:a,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[e(dw,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.value})),e(cw,Object.assign({ref:r},s,{allowClear:d&&"right"!==c,error:a,"data-testid":"input"}))]})):l()}}}})),dO=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field-group","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:a,label:r,errorMessage:i,disabled:p.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(cO,Object.assign({ref:n,id:`${a}-base`,"data-testid":s||a,error:!!i},p))}))})),uO=I(cO)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":"1rem"};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,pO=I.div`
    display: flex;
    height: calc(3rem - 2px);
    width: 3.25rem;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=pl.Neutral[3],$activeColor:n=pl.Primary})=>e?t:n};

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,hO=I.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,mO=I(Il.Body)`
    color: ${pl.Neutral[3]};
`,fO=I(tc)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${pl.Neutral[3]} transparent transparent transparent;
    }
`,gO=I(Il.Body)`
    color: ${pl.Primary};
    text-decoration: underline;
`,vO=I.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`,bO=I(Fe)`
    color: ${pl.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,yO=I(Il.Body)`
    color: ${pl.Validation.Orange.Text};
`,xO=I.button`
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
        ${gO} {
            color: ${pl.Secondary};
        }
    }
`;var wO,$O,kO={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */wO=kO,$O=kO.exports,function(){var e,t="Expected a function",n="__lodash_hash_undefined__",r="__lodash_placeholder__",i=16,a=32,o=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,p=4294967295,h=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",i],["flip",512],["partial",a],["partialRight",o],["rearg",l]],m="[object Arguments]",f="[object Array]",g="[object Boolean]",v="[object Date]",b="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",k="[object Object]",S="[object Promise]",O="[object RegExp]",C="[object Set]",T="[object String]",D="[object Symbol]",j="[object WeakMap]",_="[object ArrayBuffer]",I="[object DataView]",E="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",N="[object Int16Array]",B="[object Int32Array]",R="[object Uint8Array]",L="[object Uint8ClampedArray]",P="[object Uint16Array]",z="[object Uint32Array]",F=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,Y=/[&<>"']/g,U=RegExp(V.source),q=RegExp(Y.source),X=/<%-([\s\S]+?)%>/g,K=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),ne=/^\s+/,re=/\s/,ie=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ae=/\{\n\/\* \[wrapped with (.+)\] \*/,oe=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,pe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,fe=/^0o[0-7]+$/i,ge=/^(?:0|[1-9]\d*)$/,ve=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,be=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",ke="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",Ce="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="['’]",De="["+xe+"]",je="["+Ce+"]",_e="["+we+"]",Ie="\\d+",Ee="["+$e+"]",Me="["+ke+"]",Ae="[^"+xe+Ce+Ie+$e+ke+Se+"]",Ne="\\ud83c[\\udffb-\\udfff]",Be="[^"+xe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",ze="\\u200d",Fe="(?:"+Me+"|"+Ae+")",He="(?:"+Pe+"|"+Ae+")",We="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ye="(?:"+_e+"|"+Ne+")?",Ue="["+Oe+"]?",qe=Ue+Ye+"(?:"+ze+"(?:"+[Be,Re,Le].join("|")+")"+Ue+Ye+")*",Xe="(?:"+[Ee,Re,Le].join("|")+")"+qe,Ke="(?:"+[Be+_e+"?",_e,Re,Le,De].join("|")+")",Ge=RegExp(Te,"g"),Ze=RegExp(_e,"g"),Qe=RegExp(Ne+"(?="+Ne+")|"+Ke+qe,"g"),Je=RegExp([Pe+"?"+Me+"+"+We+"(?="+[je,Pe,"$"].join("|")+")",He+"+"+Ve+"(?="+[je,Pe+Fe,"$"].join("|")+")",Pe+"?"+Fe+"+"+We,Pe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ie,Xe].join("|"),"g"),et=RegExp("["+ze+xe+we+Oe+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rt=-1,it={};it[E]=it[M]=it[A]=it[N]=it[B]=it[R]=it[L]=it[P]=it[z]=!0,it[m]=it[f]=it[_]=it[g]=it[I]=it[v]=it[b]=it[y]=it[w]=it[$]=it[k]=it[O]=it[C]=it[T]=it[j]=!1;var at={};at[m]=at[f]=at[_]=at[I]=at[g]=at[v]=at[E]=at[M]=at[A]=at[N]=at[B]=at[w]=at[$]=at[k]=at[O]=at[C]=at[T]=at[D]=at[R]=at[L]=at[P]=at[z]=!0,at[b]=at[y]=at[j]=!1;var ot={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,lt=parseInt,ct="object"==typeof La&&La&&La.Object===Object&&La,dt="object"==typeof self&&self&&self.Object===Object&&self,ut=ct||dt||Function("return this")(),pt=$O&&!$O.nodeType&&$O,ht=pt&&wO&&!wO.nodeType&&wO,mt=ht&&ht.exports===pt,ft=mt&&ct.process,gt=function(){try{var e=ht&&ht.require&&ht.require("util").types;return e||ft&&ft.binding&&ft.binding("util")}catch(e){}}(),vt=gt&&gt.isArrayBuffer,bt=gt&&gt.isDate,yt=gt&&gt.isMap,xt=gt&&gt.isRegExp,wt=gt&&gt.isSet,$t=gt&&gt.isTypedArray;function kt(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function St(e,t,n,r){for(var i=-1,a=null==e?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function Ot(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Ct(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Dt(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function jt(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function _t(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function It(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Et(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Mt(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function At(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Nt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Bt=Wt("length");function Rt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Lt(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function Pt(e,t,n){return t==t?function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Lt(e,Ft,n)}function zt(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function Ft(e){return e!=e}function Ht(e,t){var n=null==e?0:e.length;return n?Ut(e,t)/n:u}function Wt(t){return function(n){return null==n?e:n[t]}}function Vt(t){return function(n){return null==t?e:t[n]}}function Yt(e,t,n,r,i){return i(e,(function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)})),n}function Ut(t,n){for(var r,i=-1,a=t.length;++i<a;){var o=n(t[i]);o!==e&&(r=r===e?o:r+o)}return r}function qt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Xt(e){return e?e.slice(0,pn(e)+1).replace(ne,""):e}function Kt(e){return function(t){return e(t)}}function Gt(e,t){return It(t,(function(t){return e[t]}))}function Zt(e,t){return e.has(t)}function Qt(e,t){for(var n=-1,r=e.length;++n<r&&Pt(t,e[n],0)>-1;);return n}function Jt(e,t){for(var n=e.length;n--&&Pt(t,e[n],0)>-1;);return n}var en=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tn=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nn(e){return"\\"+ot[e]}function rn(e){return et.test(e)}function an(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function on(e,t){return function(n){return e(t(n))}}function sn(e,t){for(var n=-1,i=e.length,a=0,o=[];++n<i;){var s=e[n];s!==t&&s!==r||(e[n]=r,o[a++]=n)}return o}function ln(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function dn(e){return rn(e)?function(e){for(var t=Qe.lastIndex=0;Qe.test(e);)++t;return t}(e):Bt(e)}function un(e){return rn(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function pn(e){for(var t=e.length;t--&&re.test(e.charAt(t)););return t}var hn=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),mn=function re(xe){var we=(xe=null==xe?ut:mn.defaults(ut.Object(),xe,mn.pick(ut,nt))).Array,$e=xe.Date,ke=xe.Error,Se=xe.Function,Oe=xe.Math,Ce=xe.Object,Te=xe.RegExp,De=xe.String,je=xe.TypeError,_e=we.prototype,Ie=Se.prototype,Ee=Ce.prototype,Me=xe["__core-js_shared__"],Ae=Ie.toString,Ne=Ee.hasOwnProperty,Be=0,Re=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Le=Ee.toString,Pe=Ae.call(Ce),ze=ut._,Fe=Te("^"+Ae.call(Ne).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=mt?xe.Buffer:e,We=xe.Symbol,Ve=xe.Uint8Array,Ye=He?He.allocUnsafe:e,Ue=on(Ce.getPrototypeOf,Ce),qe=Ce.create,Xe=Ee.propertyIsEnumerable,Ke=_e.splice,Qe=We?We.isConcatSpreadable:e,et=We?We.iterator:e,ot=We?We.toStringTag:e,ct=function(){try{var e=ua(Ce,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ut.clearTimeout&&xe.clearTimeout,pt=$e&&$e.now!==ut.Date.now&&$e.now,ht=xe.setTimeout!==ut.setTimeout&&xe.setTimeout,ft=Oe.ceil,gt=Oe.floor,Bt=Ce.getOwnPropertySymbols,Vt=He?He.isBuffer:e,fn=xe.isFinite,gn=_e.join,vn=on(Ce.keys,Ce),bn=Oe.max,yn=Oe.min,xn=$e.now,wn=xe.parseInt,$n=Oe.random,kn=_e.reverse,Sn=ua(xe,"DataView"),On=ua(xe,"Map"),Cn=ua(xe,"Promise"),Tn=ua(xe,"Set"),Dn=ua(xe,"WeakMap"),jn=ua(Ce,"create"),_n=Dn&&new Dn,In={},En=Ra(Sn),Mn=Ra(On),An=Ra(Cn),Nn=Ra(Tn),Bn=Ra(Dn),Rn=We?We.prototype:e,Ln=Rn?Rn.valueOf:e,Pn=Rn?Rn.toString:e;function zn(e){if(ts(e)&&!Vo(e)&&!(e instanceof Vn)){if(e instanceof Wn)return e;if(Ne.call(e,"__wrapped__"))return La(e)}return new Wn(e)}var Fn=function(){function t(){}return function(n){if(!es(n))return{};if(qe)return qe(n);t.prototype=n;var r=new t;return t.prototype=e,r}}();function Hn(){}function Wn(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=e}function Vn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=p,this.__views__=[]}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function qn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Xn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new qn;++t<n;)this.add(e[t])}function Kn(e){var t=this.__data__=new Un(e);this.size=t.size}function Gn(e,t){var n=Vo(e),r=!n&&Wo(e),i=!n&&!r&&Xo(e),a=!n&&!r&&!i&&cs(e),o=n||r||i||a,s=o?qt(e.length,De):[],l=s.length;for(var c in e)!t&&!Ne.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ba(c,l))||s.push(c);return s}function Zn(t){var n=t.length;return n?t[Xr(0,n-1)]:e}function Qn(e,t){return Aa(ji(e),sr(t,0,e.length))}function Jn(e){return Aa(ji(e))}function er(t,n,r){(r!==e&&!zo(t[n],r)||r===e&&!(n in t))&&ar(t,n,r)}function tr(t,n,r){var i=t[n];Ne.call(t,n)&&zo(i,r)&&(r!==e||n in t)||ar(t,n,r)}function nr(e,t){for(var n=e.length;n--;)if(zo(e[n][0],t))return n;return-1}function rr(e,t,n,r){return pr(e,(function(e,i,a){t(r,e,n(e),a)})),r}function ir(e,t){return e&&_i(t,Is(t),e)}function ar(e,t,n){"__proto__"==t&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function or(t,n){for(var r=-1,i=n.length,a=we(i),o=null==t;++r<i;)a[r]=o?e:Cs(t,n[r]);return a}function sr(t,n,r){return t==t&&(r!==e&&(t=t<=r?t:r),n!==e&&(t=t>=n?t:n)),t}function lr(t,n,r,i,a,o){var s,l=1&n,c=2&n,d=4&n;if(r&&(s=a?r(t,i,a,o):r(t)),s!==e)return s;if(!es(t))return t;var u=Vo(t);if(u){if(s=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Ne.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(t),!l)return ji(t,s)}else{var p=ma(t),h=p==y||p==x;if(Xo(t))return ki(t,l);if(p==k||p==m||h&&!a){if(s=c||h?{}:ga(t),!l)return c?function(e,t){return _i(e,ha(e),t)}(t,function(e,t){return e&&_i(t,Es(t),e)}(s,t)):function(e,t){return _i(e,pa(e),t)}(t,ir(s,t))}else{if(!at[p])return a?t:{};s=function(e,t,n){var r,i=e.constructor;switch(t){case _:return Si(e);case g:case v:return new i(+e);case I:return function(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case E:case M:case A:case N:case B:case R:case L:case P:case z:return Oi(e,n);case w:return new i;case $:case T:return new i(e);case O:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case C:return new i;case D:return r=e,Ln?Ce(Ln.call(r)):{}}}(t,p,l)}}o||(o=new Kn);var f=o.get(t);if(f)return f;o.set(t,s),os(t)?t.forEach((function(e){s.add(lr(e,n,r,e,t,o))})):ns(t)&&t.forEach((function(e,i){s.set(i,lr(e,n,r,i,t,o))}));var b=u?e:(d?c?ia:ra:c?Es:Is)(t);return Ot(b||t,(function(e,i){b&&(e=t[i=e]),tr(s,i,lr(e,n,r,i,t,o))})),s}function cr(t,n,r){var i=r.length;if(null==t)return!i;for(t=Ce(t);i--;){var a=r[i],o=n[a],s=t[a];if(s===e&&!(a in t)||!o(s))return!1}return!0}function dr(n,r,i){if("function"!=typeof n)throw new je(t);return _a((function(){n.apply(e,i)}),r)}function ur(e,t,n,r){var i=-1,a=jt,o=!0,s=e.length,l=[],c=t.length;if(!s)return l;n&&(t=It(t,Kt(n))),r?(a=_t,o=!1):t.length>=200&&(a=Zt,o=!1,t=new Xn(t));e:for(;++i<s;){var d=e[i],u=null==n?d:n(d);if(d=r||0!==d?d:0,o&&u==u){for(var p=c;p--;)if(t[p]===u)continue e;l.push(d)}else a(t,u,r)||l.push(d)}return l}zn.templateSettings={escape:X,evaluate:K,interpolate:G,variable:"",imports:{_:zn}},zn.prototype=Hn.prototype,zn.prototype.constructor=zn,Wn.prototype=Fn(Hn.prototype),Wn.prototype.constructor=Wn,Vn.prototype=Fn(Hn.prototype),Vn.prototype.constructor=Vn,Yn.prototype.clear=function(){this.__data__=jn?jn(null):{},this.size=0},Yn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yn.prototype.get=function(t){var r=this.__data__;if(jn){var i=r[t];return i===n?e:i}return Ne.call(r,t)?r[t]:e},Yn.prototype.has=function(t){var n=this.__data__;return jn?n[t]!==e:Ne.call(n,t)},Yn.prototype.set=function(t,r){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=jn&&r===e?n:r,this},Un.prototype.clear=function(){this.__data__=[],this.size=0},Un.prototype.delete=function(e){var t=this.__data__,n=nr(t,e);return!(n<0||(n==t.length-1?t.pop():Ke.call(t,n,1),--this.size,0))},Un.prototype.get=function(t){var n=this.__data__,r=nr(n,t);return r<0?e:n[r][1]},Un.prototype.has=function(e){return nr(this.__data__,e)>-1},Un.prototype.set=function(e,t){var n=this.__data__,r=nr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},qn.prototype.clear=function(){this.size=0,this.__data__={hash:new Yn,map:new(On||Un),string:new Yn}},qn.prototype.delete=function(e){var t=ca(this,e).delete(e);return this.size-=t?1:0,t},qn.prototype.get=function(e){return ca(this,e).get(e)},qn.prototype.has=function(e){return ca(this,e).has(e)},qn.prototype.set=function(e,t){var n=ca(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Xn.prototype.add=Xn.prototype.push=function(e){return this.__data__.set(e,n),this},Xn.prototype.has=function(e){return this.__data__.has(e)},Kn.prototype.clear=function(){this.__data__=new Un,this.size=0},Kn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Kn.prototype.get=function(e){return this.__data__.get(e)},Kn.prototype.has=function(e){return this.__data__.has(e)},Kn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Un){var r=n.__data__;if(!On||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new qn(r)}return n.set(e,t),this.size=n.size,this};var pr=Mi(xr),hr=Mi(wr,!0);function mr(e,t){var n=!0;return pr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function fr(t,n,r){for(var i=-1,a=t.length;++i<a;){var o=t[i],s=n(o);if(null!=s&&(l===e?s==s&&!ls(s):r(s,l)))var l=s,c=o}return c}function gr(e,t){var n=[];return pr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function vr(e,t,n,r,i){var a=-1,o=e.length;for(n||(n=va),i||(i=[]);++a<o;){var s=e[a];t>0&&n(s)?t>1?vr(s,t-1,n,r,i):Et(i,s):r||(i[i.length]=s)}return i}var br=Ai(),yr=Ai(!0);function xr(e,t){return e&&br(e,t,Is)}function wr(e,t){return e&&yr(e,t,Is)}function $r(e,t){return Dt(t,(function(t){return Zo(e[t])}))}function kr(t,n){for(var r=0,i=(n=yi(n,t)).length;null!=t&&r<i;)t=t[Ba(n[r++])];return r&&r==i?t:e}function Sr(e,t,n){var r=t(e);return Vo(e)?r:Et(r,n(e))}function Or(t){return null==t?t===e?"[object Undefined]":"[object Null]":ot&&ot in Ce(t)?function(t){var n=Ne.call(t,ot),r=t[ot];try{t[ot]=e;var i=!0}catch(e){}var a=Le.call(t);return i&&(n?t[ot]=r:delete t[ot]),a}(t):function(e){return Le.call(e)}(t)}function Cr(e,t){return e>t}function Tr(e,t){return null!=e&&Ne.call(e,t)}function Dr(e,t){return null!=e&&t in Ce(e)}function jr(t,n,r){for(var i=r?_t:jt,a=t[0].length,o=t.length,s=o,l=we(o),c=1/0,d=[];s--;){var u=t[s];s&&n&&(u=It(u,Kt(n))),c=yn(u.length,c),l[s]=!r&&(n||a>=120&&u.length>=120)?new Xn(s&&u):e}u=t[0];var p=-1,h=l[0];e:for(;++p<a&&d.length<c;){var m=u[p],f=n?n(m):m;if(m=r||0!==m?m:0,!(h?Zt(h,f):i(d,f,r))){for(s=o;--s;){var g=l[s];if(!(g?Zt(g,f):i(t[s],f,r)))continue e}h&&h.push(f),d.push(m)}}return d}function _r(t,n,r){var i=null==(t=Ta(t,n=yi(n,t)))?t:t[Ba(Ka(n))];return null==i?e:kt(i,t,r)}function Ir(e){return ts(e)&&Or(e)==m}function Er(t,n,r,i,a){return t===n||(null==t||null==n||!ts(t)&&!ts(n)?t!=t&&n!=n:function(t,n,r,i,a,o){var s=Vo(t),l=Vo(n),c=s?f:ma(t),d=l?f:ma(n),u=(c=c==m?k:c)==k,p=(d=d==m?k:d)==k,h=c==d;if(h&&Xo(t)){if(!Xo(n))return!1;s=!0,u=!1}if(h&&!u)return o||(o=new Kn),s||cs(t)?ta(t,n,r,i,a,o):function(e,t,n,r,i,a,o){switch(n){case I:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!a(new Ve(e),new Ve(t)));case g:case v:case $:return zo(+e,+t);case b:return e.name==t.name&&e.message==t.message;case O:case T:return e==t+"";case w:var s=an;case C:var l=1&r;if(s||(s=ln),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=ta(s(e),s(t),r,i,a,o);return o.delete(e),d;case D:if(Ln)return Ln.call(e)==Ln.call(t)}return!1}(t,n,c,r,i,a,o);if(!(1&r)){var y=u&&Ne.call(t,"__wrapped__"),x=p&&Ne.call(n,"__wrapped__");if(y||x){var S=y?t.value():t,j=x?n.value():n;return o||(o=new Kn),a(S,j,r,i,o)}}return!!h&&(o||(o=new Kn),function(t,n,r,i,a,o){var s=1&r,l=ra(t),c=l.length,d=ra(n),u=d.length;if(c!=u&&!s)return!1;for(var p=c;p--;){var h=l[p];if(!(s?h in n:Ne.call(n,h)))return!1}var m=o.get(t),f=o.get(n);if(m&&f)return m==n&&f==t;var g=!0;o.set(t,n),o.set(n,t);for(var v=s;++p<c;){var b=t[h=l[p]],y=n[h];if(i)var x=s?i(y,b,h,n,t,o):i(b,y,h,t,n,o);if(!(x===e?b===y||a(b,y,r,i,o):x)){g=!1;break}v||(v="constructor"==h)}if(g&&!v){var w=t.constructor,$=n.constructor;w==$||!("constructor"in t)||!("constructor"in n)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(g=!1)}return o.delete(t),o.delete(n),g}(t,n,r,i,a,o))}(t,n,r,i,Er,a))}function Mr(t,n,r,i){var a=r.length,o=a,s=!i;if(null==t)return!o;for(t=Ce(t);a--;){var l=r[a];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++a<o;){var c=(l=r[a])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var p=new Kn;if(i)var h=i(d,u,c,t,n,p);if(!(h===e?Er(u,d,3,i,p):h))return!1}}return!0}function Ar(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Zo(e)?Fe:me).test(Ra(e));var t}function Nr(e){return"function"==typeof e?e:null==e?rl:"object"==typeof e?Vo(e)?Fr(e[0],e[1]):zr(e):pl(e)}function Br(e){if(!ka(e))return vn(e);var t=[];for(var n in Ce(e))Ne.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Rr(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var n in Ce(e))t.push(n);return t}(e);var t=ka(e),n=[];for(var r in e)("constructor"!=r||!t&&Ne.call(e,r))&&n.push(r);return n}function Lr(e,t){return e<t}function Pr(e,t){var n=-1,r=Uo(e)?we(e.length):[];return pr(e,(function(e,i,a){r[++n]=t(e,i,a)})),r}function zr(e){var t=da(e);return 1==t.length&&t[0][2]?Oa(t[0][0],t[0][1]):function(n){return n===e||Mr(n,e,t)}}function Fr(t,n){return xa(t)&&Sa(n)?Oa(Ba(t),n):function(r){var i=Cs(r,t);return i===e&&i===n?Ts(r,t):Er(n,i,3)}}function Hr(t,n,r,i,a){t!==n&&br(n,(function(o,s){if(a||(a=new Kn),es(o))!function(t,n,r,i,a,o,s){var l=Da(t,r),c=Da(n,r),d=s.get(c);if(d)er(t,r,d);else{var u=o?o(l,c,r+"",t,n,s):e,p=u===e;if(p){var h=Vo(c),m=!h&&Xo(c),f=!h&&!m&&cs(c);u=c,h||m||f?Vo(l)?u=l:qo(l)?u=ji(l):m?(p=!1,u=ki(c,!0)):f?(p=!1,u=Oi(c,!0)):u=[]:is(c)||Wo(c)?(u=l,Wo(l)?u=vs(l):es(l)&&!Zo(l)||(u=ga(c))):p=!1}p&&(s.set(c,u),a(u,c,i,o,s),s.delete(c)),er(t,r,u)}}(t,n,s,r,Hr,i,a);else{var l=i?i(Da(t,s),o,s+"",t,n,a):e;l===e&&(l=o),er(t,s,l)}}),Es)}function Wr(t,n){var r=t.length;if(r)return ba(n+=n<0?r:0,r)?t[n]:e}function Vr(e,t,n){t=t.length?It(t,(function(e){return Vo(e)?function(t){return kr(t,1===e.length?e[0]:e)}:e})):[rl];var r=-1;t=It(t,Kt(la()));var i=Pr(e,(function(e,n,i){var a=It(t,(function(t){return t(e)}));return{criteria:a,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var l=Ci(i[r],a[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Yr(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=kr(e,o);n(s,o)&&Jr(a,yi(o,e),s)}return a}function Ur(e,t,n,r){var i=r?zt:Pt,a=-1,o=t.length,s=e;for(e===t&&(t=ji(t)),n&&(s=It(e,Kt(n)));++a<o;)for(var l=0,c=t[a],d=n?n(c):c;(l=i(s,d,l,r))>-1;)s!==e&&Ke.call(s,l,1),Ke.call(e,l,1);return e}function qr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;ba(i)?Ke.call(e,i,1):ui(e,i)}}return e}function Xr(e,t){return e+gt($n()*(t-e+1))}function Kr(e,t){var n="";if(!e||t<1||t>d)return n;do{t%2&&(n+=e),(t=gt(t/2))&&(e+=e)}while(t);return n}function Gr(e,t){return Ia(Ca(e,t,rl),e+"")}function Zr(e){return Zn(zs(e))}function Qr(e,t){var n=zs(e);return Aa(n,sr(t,0,n.length))}function Jr(t,n,r,i){if(!es(t))return t;for(var a=-1,o=(n=yi(n,t)).length,s=o-1,l=t;null!=l&&++a<o;){var c=Ba(n[a]),d=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(a!=s){var u=l[c];(d=i?i(u,c,l):e)===e&&(d=es(u)?u:ba(n[a+1])?[]:{})}tr(l,c,d),l=l[c]}return t}var ei=_n?function(e,t){return _n.set(e,t),e}:rl,ti=ct?function(e,t){return ct(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:rl;function ni(e){return Aa(zs(e))}function ri(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=we(i);++r<i;)a[r]=e[r+t];return a}function ii(e,t){var n;return pr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function ai(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var a=r+i>>>1,o=e[a];null!==o&&!ls(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return oi(e,t,rl,n)}function oi(t,n,r,i){var a=0,o=null==t?0:t.length;if(0===o)return 0;for(var s=(n=r(n))!=n,l=null===n,c=ls(n),d=n===e;a<o;){var u=gt((a+o)/2),p=r(t[u]),h=p!==e,m=null===p,f=p==p,g=ls(p);if(s)var v=i||f;else v=d?f&&(i||h):l?f&&h&&(i||!m):c?f&&h&&!m&&(i||!g):!m&&!g&&(i?p<=n:p<n);v?a=u+1:o=u}return yn(o,4294967294)}function si(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!zo(s,l)){var l=s;a[i++]=0===o?0:o}}return a}function li(e){return"number"==typeof e?e:ls(e)?u:+e}function ci(e){if("string"==typeof e)return e;if(Vo(e))return It(e,ci)+"";if(ls(e))return Pn?Pn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,n){var r=-1,i=jt,a=e.length,o=!0,s=[],l=s;if(n)o=!1,i=_t;else if(a>=200){var c=t?null:Ki(e);if(c)return ln(c);o=!1,i=Zt,l=new Xn}else l=t?[]:s;e:for(;++r<a;){var d=e[r],u=t?t(d):d;if(d=n||0!==d?d:0,o&&u==u){for(var p=l.length;p--;)if(l[p]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,n)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Ta(e,t=yi(t,e)))||delete e[Ba(Ka(t))]}function pi(e,t,n,r){return Jr(e,t,n(kr(e,t)),r)}function hi(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?ri(e,r?0:a,r?a+1:i):ri(e,r?a+1:0,r?i:a)}function mi(e,t){var n=e;return n instanceof Vn&&(n=n.value()),Mt(t,(function(e,t){return t.func.apply(t.thisArg,Et([e],t.args))}),n)}function fi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,a=we(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=ur(a[i]||o,e[s],t,n));return di(vr(a,1),t,n)}function gi(t,n,r){for(var i=-1,a=t.length,o=n.length,s={};++i<a;){var l=i<o?n[i]:e;r(s,t[i],l)}return s}function vi(e){return qo(e)?e:[]}function bi(e){return"function"==typeof e?e:rl}function yi(e,t){return Vo(e)?e:xa(e,t)?[e]:Na(bs(e))}var xi=Gr;function wi(t,n,r){var i=t.length;return r=r===e?i:r,!n&&r>=i?t:ri(t,n,r)}var $i=dt||function(e){return ut.clearTimeout(e)};function ki(e,t){if(t)return e.slice();var n=e.length,r=Ye?Ye(n):new e.constructor(n);return e.copy(r),r}function Si(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function Oi(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ci(t,n){if(t!==n){var r=t!==e,i=null===t,a=t==t,o=ls(t),s=n!==e,l=null===n,c=n==n,d=ls(n);if(!l&&!d&&!o&&t>n||o&&s&&c&&!l&&!d||i&&s&&c||!r&&c||!a)return 1;if(!i&&!o&&!d&&t<n||d&&r&&a&&!i&&!o||l&&r&&a||!s&&a||!c)return-1}return 0}function Ti(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,l=t.length,c=bn(a-o,0),d=we(l+c),u=!r;++s<l;)d[s]=t[s];for(;++i<o;)(u||i<a)&&(d[n[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Di(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,l=-1,c=t.length,d=bn(a-s,0),u=we(d+c),p=!r;++i<d;)u[i]=e[i];for(var h=i;++l<c;)u[h+l]=t[l];for(;++o<s;)(p||i<a)&&(u[h+n[o]]=e[i++]);return u}function ji(e,t){var n=-1,r=e.length;for(t||(t=we(r));++n<r;)t[n]=e[n];return t}function _i(t,n,r,i){var a=!r;r||(r={});for(var o=-1,s=n.length;++o<s;){var l=n[o],c=i?i(r[l],t[l],l,r,t):e;c===e&&(c=t[l]),a?ar(r,l,c):tr(r,l,c)}return r}function Ii(e,t){return function(n,r){var i=Vo(n)?St:rr,a=t?t():{};return i(n,e,la(r,2),a)}}function Ei(t){return Gr((function(n,r){var i=-1,a=r.length,o=a>1?r[a-1]:e,s=a>2?r[2]:e;for(o=t.length>3&&"function"==typeof o?(a--,o):e,s&&ya(r[0],r[1],s)&&(o=a<3?e:o,a=1),n=Ce(n);++i<a;){var l=r[i];l&&t(n,l,i,o)}return n}))}function Mi(e,t){return function(n,r){if(null==n)return n;if(!Uo(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Ce(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}function Ai(e){return function(t,n,r){for(var i=-1,a=Ce(t),o=r(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===n(a[l],l,a))break}return t}}function Ni(t){return function(n){var r=rn(n=bs(n))?un(n):e,i=r?r[0]:n.charAt(0),a=r?wi(r,1).join(""):n.slice(1);return i[t]()+a}}function Bi(e){return function(t){return Mt(Zs(Ws(t).replace(Ge,"")),e,"")}}function Ri(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Fn(e.prototype),r=e.apply(n,t);return es(r)?r:n}}function Li(t){return function(n,r,i){var a=Ce(n);if(!Uo(n)){var o=la(r,3);n=Is(n),r=function(e){return o(a[e],e,a)}}var s=t(n,r,i);return s>-1?a[o?n[s]:s]:e}}function Pi(n){return na((function(r){var i=r.length,a=i,o=Wn.prototype.thru;for(n&&r.reverse();a--;){var s=r[a];if("function"!=typeof s)throw new je(t);if(o&&!l&&"wrapper"==oa(s))var l=new Wn([],!0)}for(a=l?a:i;++a<i;){var c=oa(s=r[a]),d="wrapper"==c?aa(s):e;l=d&&wa(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[oa(d[0])].apply(l,d[3]):1==s.length&&wa(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Vo(t))return l.plant(t).value();for(var n=0,a=i?r[n].apply(this,e):t;++n<i;)a=r[n].call(this,a);return a}}))}function zi(t,n,r,i,a,o,l,c,d,u){var p=n&s,h=1&n,m=2&n,f=24&n,g=512&n,v=m?e:Ri(t);return function s(){for(var b=arguments.length,y=we(b),x=b;x--;)y[x]=arguments[x];if(f)var w=sa(s),$=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(y,w);if(i&&(y=Ti(y,i,a,f)),o&&(y=Di(y,o,l,f)),b-=$,f&&b<u){var k=sn(y,w);return qi(t,n,zi,s.placeholder,r,y,k,c,d,u-b)}var S=h?r:this,O=m?S[t]:t;return b=y.length,c?y=function(t,n){for(var r=t.length,i=yn(n.length,r),a=ji(t);i--;){var o=n[i];t[i]=ba(o,r)?a[o]:e}return t}(y,c):g&&b>1&&y.reverse(),p&&d<b&&(y.length=d),this&&this!==ut&&this instanceof s&&(O=v||Ri(O)),O.apply(S,y)}}function Fi(e,t){return function(n,r){return function(e,t,n,r){return xr(e,(function(e,i,a){t(r,n(e),i,a)})),r}(n,e,t(r),{})}}function Hi(t,n){return function(r,i){var a;if(r===e&&i===e)return n;if(r!==e&&(a=r),i!==e){if(a===e)return i;"string"==typeof r||"string"==typeof i?(r=ci(r),i=ci(i)):(r=li(r),i=li(i)),a=t(r,i)}return a}}function Wi(e){return na((function(t){return t=It(t,Kt(la())),Gr((function(n){var r=this;return e(t,(function(e){return kt(e,r,n)}))}))}))}function Vi(t,n){var r=(n=n===e?" ":ci(n)).length;if(r<2)return r?Kr(n,t):n;var i=Kr(n,ft(t/dn(n)));return rn(n)?wi(un(i),0,t).join(""):i.slice(0,t)}function Yi(t){return function(n,r,i){return i&&"number"!=typeof i&&ya(n,r,i)&&(r=i=e),n=hs(n),r===e?(r=n,n=0):r=hs(r),function(e,t,n,r){for(var i=-1,a=bn(ft((t-e)/(n||1)),0),o=we(a);a--;)o[r?a:++i]=e,e+=n;return o}(n,r,i=i===e?n<r?1:-1:hs(i),t)}}function Ui(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=gs(t),n=gs(n)),e(t,n)}}function qi(t,n,r,i,s,l,c,d,u,p){var h=8&n;n|=h?a:o,4&(n&=~(h?o:a))||(n&=-4);var m=[t,n,s,h?l:e,h?c:e,h?e:l,h?e:c,d,u,p],f=r.apply(e,m);return wa(t)&&ja(f,m),f.placeholder=i,Ea(f,t,n)}function Xi(e){var t=Oe[e];return function(e,n){if(e=gs(e),(n=null==n?0:yn(ms(n),292))&&fn(e)){var r=(bs(e)+"e").split("e");return+((r=(bs(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Ki=Tn&&1/ln(new Tn([,-0]))[1]==c?function(e){return new Tn(e)}:ll;function Gi(e){return function(t){var n=ma(t);return n==w?an(t):n==C?cn(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(n,c,d,u,p,h,m,f){var g=2&c;if(!g&&"function"!=typeof n)throw new je(t);var v=u?u.length:0;if(v||(c&=-97,u=p=e),m=m===e?m:bn(ms(m),0),f=f===e?f:ms(f),v-=p?p.length:0,c&o){var b=u,y=p;u=p=e}var x=g?e:aa(n),w=[n,c,d,u,p,b,y,h,m,f];if(x&&function(e,t){var n=e[1],i=t[1],a=n|i,o=a<131,c=i==s&&8==n||i==s&&n==l&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==n;if(!o&&!c)return e;1&i&&(e[2]=t[2],a|=1&n?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Ti(u,d,t[4]):d,e[4]=u?sn(e[3],r):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Di(u,d,t[6]):d,e[6]=u?sn(e[5],r):t[6]),(d=t[7])&&(e[7]=d),i&s&&(e[8]=null==e[8]?t[8]:yn(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=a}(w,x),n=w[0],c=w[1],d=w[2],u=w[3],p=w[4],!(f=w[9]=w[9]===e?g?0:n.length:bn(w[9]-v,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==i?function(t,n,r){var i=Ri(t);return function a(){for(var o=arguments.length,s=we(o),l=o,c=sa(a);l--;)s[l]=arguments[l];var d=o<3&&s[0]!==c&&s[o-1]!==c?[]:sn(s,c);return(o-=d.length)<r?qi(t,n,zi,a.placeholder,e,s,d,e,e,r-o):kt(this&&this!==ut&&this instanceof a?i:t,this,s)}}(n,c,f):c!=a&&33!=c||p.length?zi.apply(e,w):function(e,t,n,r){var i=1&t,a=Ri(e);return function t(){for(var o=-1,s=arguments.length,l=-1,c=r.length,d=we(c+s),u=this&&this!==ut&&this instanceof t?a:e;++l<c;)d[l]=r[l];for(;s--;)d[l++]=arguments[++o];return kt(u,i?n:this,d)}}(n,c,d,u);else var $=function(e,t,n){var r=1&t,i=Ri(e);return function t(){return(this&&this!==ut&&this instanceof t?i:e).apply(r?n:this,arguments)}}(n,c,d);return Ea((x?ei:ja)($,w),n,c)}function Qi(t,n,r,i){return t===e||zo(t,Ee[r])&&!Ne.call(i,r)?n:t}function Ji(t,n,r,i,a,o){return es(t)&&es(n)&&(o.set(n,t),Hr(t,n,e,Ji,o),o.delete(n)),t}function ea(t){return is(t)?e:t}function ta(t,n,r,i,a,o){var s=1&r,l=t.length,c=n.length;if(l!=c&&!(s&&c>l))return!1;var d=o.get(t),u=o.get(n);if(d&&u)return d==n&&u==t;var p=-1,h=!0,m=2&r?new Xn:e;for(o.set(t,n),o.set(n,t);++p<l;){var f=t[p],g=n[p];if(i)var v=s?i(g,f,p,n,t,o):i(f,g,p,t,n,o);if(v!==e){if(v)continue;h=!1;break}if(m){if(!Nt(n,(function(e,t){if(!Zt(m,t)&&(f===e||a(f,e,r,i,o)))return m.push(t)}))){h=!1;break}}else if(f!==g&&!a(f,g,r,i,o)){h=!1;break}}return o.delete(t),o.delete(n),h}function na(t){return Ia(Ca(t,e,Va),t+"")}function ra(e){return Sr(e,Is,pa)}function ia(e){return Sr(e,Es,ha)}var aa=_n?function(e){return _n.get(e)}:ll;function oa(e){for(var t=e.name+"",n=In[t],r=Ne.call(In,t)?n.length:0;r--;){var i=n[r],a=i.func;if(null==a||a==e)return i.name}return t}function sa(e){return(Ne.call(zn,"placeholder")?zn:e).placeholder}function la(){var e=zn.iteratee||il;return e=e===il?Nr:e,arguments.length?e(arguments[0],arguments[1]):e}function ca(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function da(e){for(var t=Is(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Sa(i)]}return t}function ua(t,n){var r=function(t,n){return null==t?e:t[n]}(t,n);return Ar(r)?r:e}var pa=Bt?function(e){return null==e?[]:(e=Ce(e),Dt(Bt(e),(function(t){return Xe.call(e,t)})))}:fl,ha=Bt?function(e){for(var t=[];e;)Et(t,pa(e)),e=Ue(e);return t}:fl,ma=Or;function fa(e,t,n){for(var r=-1,i=(t=yi(t,e)).length,a=!1;++r<i;){var o=Ba(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&Jo(i)&&ba(o,i)&&(Vo(e)||Wo(e))}function ga(e){return"function"!=typeof e.constructor||ka(e)?{}:Fn(Ue(e))}function va(e){return Vo(e)||Wo(e)||!!(Qe&&e&&e[Qe])}function ba(e,t){var n=typeof e;return!!(t=null==t?d:t)&&("number"==n||"symbol"!=n&&ge.test(e))&&e>-1&&e%1==0&&e<t}function ya(e,t,n){if(!es(n))return!1;var r=typeof t;return!!("number"==r?Uo(n)&&ba(t,n.length):"string"==r&&t in n)&&zo(n[t],e)}function xa(e,t){if(Vo(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ls(e))||Q.test(e)||!Z.test(e)||null!=t&&e in Ce(t)}function wa(e){var t=oa(e),n=zn[t];if("function"!=typeof n||!(t in Vn.prototype))return!1;if(e===n)return!0;var r=aa(n);return!!r&&e===r[0]}(Sn&&ma(new Sn(new ArrayBuffer(1)))!=I||On&&ma(new On)!=w||Cn&&ma(Cn.resolve())!=S||Tn&&ma(new Tn)!=C||Dn&&ma(new Dn)!=j)&&(ma=function(t){var n=Or(t),r=n==k?t.constructor:e,i=r?Ra(r):"";if(i)switch(i){case En:return I;case Mn:return w;case An:return S;case Nn:return C;case Bn:return j}return n});var $a=Me?Zo:gl;function ka(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ee)}function Sa(e){return e==e&&!es(e)}function Oa(t,n){return function(r){return null!=r&&r[t]===n&&(n!==e||t in Ce(r))}}function Ca(t,n,r){return n=bn(n===e?t.length-1:n,0),function(){for(var e=arguments,i=-1,a=bn(e.length-n,0),o=we(a);++i<a;)o[i]=e[n+i];i=-1;for(var s=we(n+1);++i<n;)s[i]=e[i];return s[n]=r(o),kt(t,this,s)}}function Ta(e,t){return t.length<2?e:kr(e,ri(t,0,-1))}function Da(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var ja=Ma(ei),_a=ht||function(e,t){return ut.setTimeout(e,t)},Ia=Ma(ti);function Ea(e,t,n){var r=t+"";return Ia(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ie,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Ot(h,(function(n){var r="_."+n[0];t&n[1]&&!jt(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(ae);return t?t[1].split(oe):[]}(r),n)))}function Ma(t){var n=0,r=0;return function(){var i=xn(),a=16-(i-r);if(r=i,a>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(e,arguments)}}function Aa(t,n){var r=-1,i=t.length,a=i-1;for(n=n===e?i:n;++r<n;){var o=Xr(r,a),s=t[o];t[o]=t[r],t[r]=s}return t.length=n,t}var Na=function(e){var t=Ao(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,n,r,i){t.push(r?i.replace(ce,"$1"):n||e)})),t}));function Ba(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ra(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function La(e){if(e instanceof Vn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=ji(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Pa=Gr((function(e,t){return qo(e)?ur(e,vr(t,1,qo,!0)):[]})),za=Gr((function(t,n){var r=Ka(n);return qo(r)&&(r=e),qo(t)?ur(t,vr(n,1,qo,!0),la(r,2)):[]})),Fa=Gr((function(t,n){var r=Ka(n);return qo(r)&&(r=e),qo(t)?ur(t,vr(n,1,qo,!0),e,r):[]}));function Ha(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ms(n);return i<0&&(i=bn(r+i,0)),Lt(e,la(t,3),i)}function Wa(t,n,r){var i=null==t?0:t.length;if(!i)return-1;var a=i-1;return r!==e&&(a=ms(r),a=r<0?bn(i+a,0):yn(a,i-1)),Lt(t,la(n,3),a,!0)}function Va(e){return null!=e&&e.length?vr(e,1):[]}function Ya(t){return t&&t.length?t[0]:e}var Ua=Gr((function(e){var t=It(e,vi);return t.length&&t[0]===e[0]?jr(t):[]})),qa=Gr((function(t){var n=Ka(t),r=It(t,vi);return n===Ka(r)?n=e:r.pop(),r.length&&r[0]===t[0]?jr(r,la(n,2)):[]})),Xa=Gr((function(t){var n=Ka(t),r=It(t,vi);return(n="function"==typeof n?n:e)&&r.pop(),r.length&&r[0]===t[0]?jr(r,e,n):[]}));function Ka(t){var n=null==t?0:t.length;return n?t[n-1]:e}var Ga=Gr(Za);function Za(e,t){return e&&e.length&&t&&t.length?Ur(e,t):e}var Qa=na((function(e,t){var n=null==e?0:e.length,r=or(e,t);return qr(e,It(t,(function(e){return ba(e,n)?+e:e})).sort(Ci)),r}));function Ja(e){return null==e?e:kn.call(e)}var eo=Gr((function(e){return di(vr(e,1,qo,!0))})),to=Gr((function(t){var n=Ka(t);return qo(n)&&(n=e),di(vr(t,1,qo,!0),la(n,2))})),no=Gr((function(t){var n=Ka(t);return n="function"==typeof n?n:e,di(vr(t,1,qo,!0),e,n)}));function ro(e){if(!e||!e.length)return[];var t=0;return e=Dt(e,(function(e){if(qo(e))return t=bn(e.length,t),!0})),qt(t,(function(t){return It(e,Wt(t))}))}function io(t,n){if(!t||!t.length)return[];var r=ro(t);return null==n?r:It(r,(function(t){return kt(n,e,t)}))}var ao=Gr((function(e,t){return qo(e)?ur(e,t):[]})),oo=Gr((function(e){return fi(Dt(e,qo))})),so=Gr((function(t){var n=Ka(t);return qo(n)&&(n=e),fi(Dt(t,qo),la(n,2))})),lo=Gr((function(t){var n=Ka(t);return n="function"==typeof n?n:e,fi(Dt(t,qo),e,n)})),co=Gr(ro),uo=Gr((function(t){var n=t.length,r=n>1?t[n-1]:e;return r="function"==typeof r?(t.pop(),r):e,io(t,r)}));function po(e){var t=zn(e);return t.__chain__=!0,t}function ho(e,t){return t(e)}var mo=na((function(t){var n=t.length,r=n?t[0]:0,i=this.__wrapped__,a=function(e){return or(e,t)};return!(n>1||this.__actions__.length)&&i instanceof Vn&&ba(r)?((i=i.slice(r,+r+(n?1:0))).__actions__.push({func:ho,args:[a],thisArg:e}),new Wn(i,this.__chain__).thru((function(t){return n&&!t.length&&t.push(e),t}))):this.thru(a)})),fo=Ii((function(e,t,n){Ne.call(e,n)?++e[n]:ar(e,n,1)})),go=Li(Ha),vo=Li(Wa);function bo(e,t){return(Vo(e)?Ot:pr)(e,la(t,3))}function yo(e,t){return(Vo(e)?Ct:hr)(e,la(t,3))}var xo=Ii((function(e,t,n){Ne.call(e,n)?e[n].push(t):ar(e,n,[t])})),wo=Gr((function(e,t,n){var r=-1,i="function"==typeof t,a=Uo(e)?we(e.length):[];return pr(e,(function(e){a[++r]=i?kt(t,e,n):_r(e,t,n)})),a})),$o=Ii((function(e,t,n){ar(e,n,t)}));function ko(e,t){return(Vo(e)?It:Pr)(e,la(t,3))}var So=Ii((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]})),Oo=Gr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&ya(e,t[0],t[1])?t=[]:n>2&&ya(t[0],t[1],t[2])&&(t=[t[0]]),Vr(e,vr(t,1),[])})),Co=pt||function(){return ut.Date.now()};function To(t,n,r){return n=r?e:n,n=t&&null==n?t.length:n,Zi(t,s,e,e,e,e,n)}function Do(n,r){var i;if("function"!=typeof r)throw new je(t);return n=ms(n),function(){return--n>0&&(i=r.apply(this,arguments)),n<=1&&(r=e),i}}var jo=Gr((function(e,t,n){var r=1;if(n.length){var i=sn(n,sa(jo));r|=a}return Zi(e,r,t,n,i)})),_o=Gr((function(e,t,n){var r=3;if(n.length){var i=sn(n,sa(_o));r|=a}return Zi(t,r,e,n,i)}));function Io(n,r,i){var a,o,s,l,c,d,u=0,p=!1,h=!1,m=!0;if("function"!=typeof n)throw new je(t);function f(t){var r=a,i=o;return a=o=e,u=t,l=n.apply(i,r)}function g(t){var n=t-d;return d===e||n>=r||n<0||h&&t-u>=s}function v(){var e=Co();if(g(e))return b(e);c=_a(v,function(e){var t=r-(e-d);return h?yn(t,s-(e-u)):t}(e))}function b(t){return c=e,m&&a?f(t):(a=o=e,l)}function y(){var t=Co(),n=g(t);if(a=arguments,o=this,d=t,n){if(c===e)return function(e){return u=e,c=_a(v,r),p?f(e):l}(d);if(h)return $i(c),c=_a(v,r),f(d)}return c===e&&(c=_a(v,r)),l}return r=gs(r)||0,es(i)&&(p=!!i.leading,s=(h="maxWait"in i)?bn(gs(i.maxWait)||0,r):s,m="trailing"in i?!!i.trailing:m),y.cancel=function(){c!==e&&$i(c),u=0,a=d=o=c=e},y.flush=function(){return c===e?l:b(Co())},y}var Eo=Gr((function(e,t){return dr(e,1,t)})),Mo=Gr((function(e,t,n){return dr(e,gs(t)||0,n)}));function Ao(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new je(t);var r=function(){var t=arguments,i=n?n.apply(this,t):t[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,t);return r.cache=a.set(i,o)||a,o};return r.cache=new(Ao.Cache||qn),r}function No(e){if("function"!=typeof e)throw new je(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ao.Cache=qn;var Bo=xi((function(e,t){var n=(t=1==t.length&&Vo(t[0])?It(t[0],Kt(la())):It(vr(t,1),Kt(la()))).length;return Gr((function(r){for(var i=-1,a=yn(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return kt(e,this,r)}))})),Ro=Gr((function(t,n){var r=sn(n,sa(Ro));return Zi(t,a,e,n,r)})),Lo=Gr((function(t,n){var r=sn(n,sa(Lo));return Zi(t,o,e,n,r)})),Po=na((function(t,n){return Zi(t,l,e,e,e,n)}));function zo(e,t){return e===t||e!=e&&t!=t}var Fo=Ui(Cr),Ho=Ui((function(e,t){return e>=t})),Wo=Ir(function(){return arguments}())?Ir:function(e){return ts(e)&&Ne.call(e,"callee")&&!Xe.call(e,"callee")},Vo=we.isArray,Yo=vt?Kt(vt):function(e){return ts(e)&&Or(e)==_};function Uo(e){return null!=e&&Jo(e.length)&&!Zo(e)}function qo(e){return ts(e)&&Uo(e)}var Xo=Vt||gl,Ko=bt?Kt(bt):function(e){return ts(e)&&Or(e)==v};function Go(e){if(!ts(e))return!1;var t=Or(e);return t==b||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Zo(e){if(!es(e))return!1;var t=Or(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qo(e){return"number"==typeof e&&e==ms(e)}function Jo(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var ns=yt?Kt(yt):function(e){return ts(e)&&ma(e)==w};function rs(e){return"number"==typeof e||ts(e)&&Or(e)==$}function is(e){if(!ts(e)||Or(e)!=k)return!1;var t=Ue(e);if(null===t)return!0;var n=Ne.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Ae.call(n)==Pe}var as=xt?Kt(xt):function(e){return ts(e)&&Or(e)==O},os=wt?Kt(wt):function(e){return ts(e)&&ma(e)==C};function ss(e){return"string"==typeof e||!Vo(e)&&ts(e)&&Or(e)==T}function ls(e){return"symbol"==typeof e||ts(e)&&Or(e)==D}var cs=$t?Kt($t):function(e){return ts(e)&&Jo(e.length)&&!!it[Or(e)]},ds=Ui(Lr),us=Ui((function(e,t){return e<=t}));function ps(e){if(!e)return[];if(Uo(e))return ss(e)?un(e):ji(e);if(et&&e[et])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[et]());var t=ma(e);return(t==w?an:t==C?ln:zs)(e)}function hs(e){return e?(e=gs(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ms(e){var t=hs(e),n=t%1;return t==t?n?t-n:t:0}function fs(e){return e?sr(ms(e),0,p):0}function gs(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xt(e);var n=he.test(e);return n||fe.test(e)?lt(e.slice(2),n?2:8):pe.test(e)?u:+e}function vs(e){return _i(e,Es(e))}function bs(e){return null==e?"":ci(e)}var ys=Ei((function(e,t){if(ka(t)||Uo(t))_i(t,Is(t),e);else for(var n in t)Ne.call(t,n)&&tr(e,n,t[n])})),xs=Ei((function(e,t){_i(t,Es(t),e)})),ws=Ei((function(e,t,n,r){_i(t,Es(t),e,r)})),$s=Ei((function(e,t,n,r){_i(t,Is(t),e,r)})),ks=na(or),Ss=Gr((function(t,n){t=Ce(t);var r=-1,i=n.length,a=i>2?n[2]:e;for(a&&ya(n[0],n[1],a)&&(i=1);++r<i;)for(var o=n[r],s=Es(o),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||zo(u,Ee[d])&&!Ne.call(t,d))&&(t[d]=o[d])}return t})),Os=Gr((function(t){return t.push(e,Ji),kt(As,e,t)}));function Cs(t,n,r){var i=null==t?e:kr(t,n);return i===e?r:i}function Ts(e,t){return null!=e&&fa(e,t,Dr)}var Ds=Fi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Le.call(t)),e[t]=n}),el(rl)),js=Fi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Le.call(t)),Ne.call(e,t)?e[t].push(n):e[t]=[n]}),la),_s=Gr(_r);function Is(e){return Uo(e)?Gn(e):Br(e)}function Es(e){return Uo(e)?Gn(e,!0):Rr(e)}var Ms=Ei((function(e,t,n){Hr(e,t,n)})),As=Ei((function(e,t,n,r){Hr(e,t,n,r)})),Ns=na((function(e,t){var n={};if(null==e)return n;var r=!1;t=It(t,(function(t){return t=yi(t,e),r||(r=t.length>1),t})),_i(e,ia(e),n),r&&(n=lr(n,7,ea));for(var i=t.length;i--;)ui(n,t[i]);return n})),Bs=na((function(e,t){return null==e?{}:function(e,t){return Yr(e,t,(function(t,n){return Ts(e,n)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var n=It(ia(e),(function(e){return[e]}));return t=la(t),Yr(e,n,(function(e,n){return t(e,n[0])}))}var Ls=Gi(Is),Ps=Gi(Es);function zs(e){return null==e?[]:Gt(e,Is(e))}var Fs=Bi((function(e,t,n){return t=t.toLowerCase(),e+(n?Hs(t):t)}));function Hs(e){return Gs(bs(e).toLowerCase())}function Ws(e){return(e=bs(e))&&e.replace(ve,en).replace(Ze,"")}var Vs=Bi((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ys=Bi((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Us=Ni("toLowerCase"),qs=Bi((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()})),Xs=Bi((function(e,t,n){return e+(n?" ":"")+Gs(t)})),Ks=Bi((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Gs=Ni("toUpperCase");function Zs(t,n,r){return t=bs(t),(n=r?e:n)===e?function(e){return tt.test(e)}(t)?function(e){return e.match(Je)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(n)||[]}var Qs=Gr((function(t,n){try{return kt(t,e,n)}catch(e){return Go(e)?e:new ke(e)}})),Js=na((function(e,t){return Ot(t,(function(t){t=Ba(t),ar(e,t,jo(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),nl=Pi(!0);function rl(e){return e}function il(e){return Nr("function"==typeof e?e:lr(e,1))}var al=Gr((function(e,t){return function(n){return _r(n,e,t)}})),ol=Gr((function(e,t){return function(n){return _r(e,n,t)}}));function sl(e,t,n){var r=Is(t),i=$r(t,r);null!=n||es(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=$r(t,Is(t)));var a=!(es(n)&&"chain"in n&&!n.chain),o=Zo(e);return Ot(i,(function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=ji(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Et([this.value()],arguments))})})),e}function ll(){}var cl=Wi(It),dl=Wi(Tt),ul=Wi(Nt);function pl(e){return xa(e)?Wt(Ba(e)):function(e){return function(t){return kr(t,e)}}(e)}var hl=Yi(),ml=Yi(!0);function fl(){return[]}function gl(){return!1}var vl,bl=Hi((function(e,t){return e+t}),0),yl=Xi("ceil"),xl=Hi((function(e,t){return e/t}),1),wl=Xi("floor"),$l=Hi((function(e,t){return e*t}),1),kl=Xi("round"),Sl=Hi((function(e,t){return e-t}),0);return zn.after=function(e,n){if("function"!=typeof n)throw new je(t);return e=ms(e),function(){if(--e<1)return n.apply(this,arguments)}},zn.ary=To,zn.assign=ys,zn.assignIn=xs,zn.assignInWith=ws,zn.assignWith=$s,zn.at=ks,zn.before=Do,zn.bind=jo,zn.bindAll=Js,zn.bindKey=_o,zn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Vo(e)?e:[e]},zn.chain=po,zn.chunk=function(t,n,r){n=(r?ya(t,n,r):n===e)?1:bn(ms(n),0);var i=null==t?0:t.length;if(!i||n<1)return[];for(var a=0,o=0,s=we(ft(i/n));a<i;)s[o++]=ri(t,a,a+=n);return s},zn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i},zn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Et(Vo(n)?ji(n):[n],vr(t,1))},zn.cond=function(e){var n=null==e?0:e.length,r=la();return e=n?It(e,(function(e){if("function"!=typeof e[1])throw new je(t);return[r(e[0]),e[1]]})):[],Gr((function(t){for(var r=-1;++r<n;){var i=e[r];if(kt(i[0],this,t))return kt(i[1],this,t)}}))},zn.conforms=function(e){return function(e){var t=Is(e);return function(n){return cr(n,e,t)}}(lr(e,1))},zn.constant=el,zn.countBy=fo,zn.create=function(e,t){var n=Fn(e);return null==t?n:ir(n,t)},zn.curry=function t(n,r,i){var a=Zi(n,8,e,e,e,e,e,r=i?e:r);return a.placeholder=t.placeholder,a},zn.curryRight=function t(n,r,a){var o=Zi(n,i,e,e,e,e,e,r=a?e:r);return o.placeholder=t.placeholder,o},zn.debounce=Io,zn.defaults=Ss,zn.defaultsDeep=Os,zn.defer=Eo,zn.delay=Mo,zn.difference=Pa,zn.differenceBy=za,zn.differenceWith=Fa,zn.drop=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,(n=r||n===e?1:ms(n))<0?0:n,i):[]},zn.dropRight=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,0,(n=i-(n=r||n===e?1:ms(n)))<0?0:n):[]},zn.dropRightWhile=function(e,t){return e&&e.length?hi(e,la(t,3),!0,!0):[]},zn.dropWhile=function(e,t){return e&&e.length?hi(e,la(t,3),!0):[]},zn.fill=function(t,n,r,i){var a=null==t?0:t.length;return a?(r&&"number"!=typeof r&&ya(t,n,r)&&(r=0,i=a),function(t,n,r,i){var a=t.length;for((r=ms(r))<0&&(r=-r>a?0:a+r),(i=i===e||i>a?a:ms(i))<0&&(i+=a),i=r>i?0:fs(i);r<i;)t[r++]=n;return t}(t,n,r,i)):[]},zn.filter=function(e,t){return(Vo(e)?Dt:gr)(e,la(t,3))},zn.flatMap=function(e,t){return vr(ko(e,t),1)},zn.flatMapDeep=function(e,t){return vr(ko(e,t),c)},zn.flatMapDepth=function(t,n,r){return r=r===e?1:ms(r),vr(ko(t,n),r)},zn.flatten=Va,zn.flattenDeep=function(e){return null!=e&&e.length?vr(e,c):[]},zn.flattenDepth=function(t,n){return null!=t&&t.length?vr(t,n=n===e?1:ms(n)):[]},zn.flip=function(e){return Zi(e,512)},zn.flow=tl,zn.flowRight=nl,zn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},zn.functions=function(e){return null==e?[]:$r(e,Is(e))},zn.functionsIn=function(e){return null==e?[]:$r(e,Es(e))},zn.groupBy=xo,zn.initial=function(e){return null!=e&&e.length?ri(e,0,-1):[]},zn.intersection=Ua,zn.intersectionBy=qa,zn.intersectionWith=Xa,zn.invert=Ds,zn.invertBy=js,zn.invokeMap=wo,zn.iteratee=il,zn.keyBy=$o,zn.keys=Is,zn.keysIn=Es,zn.map=ko,zn.mapKeys=function(e,t){var n={};return t=la(t,3),xr(e,(function(e,r,i){ar(n,t(e,r,i),e)})),n},zn.mapValues=function(e,t){var n={};return t=la(t,3),xr(e,(function(e,r,i){ar(n,r,t(e,r,i))})),n},zn.matches=function(e){return zr(lr(e,1))},zn.matchesProperty=function(e,t){return Fr(e,lr(t,1))},zn.memoize=Ao,zn.merge=Ms,zn.mergeWith=As,zn.method=al,zn.methodOf=ol,zn.mixin=sl,zn.negate=No,zn.nthArg=function(e){return e=ms(e),Gr((function(t){return Wr(t,e)}))},zn.omit=Ns,zn.omitBy=function(e,t){return Rs(e,No(la(t)))},zn.once=function(e){return Do(2,e)},zn.orderBy=function(t,n,r,i){return null==t?[]:(Vo(n)||(n=null==n?[]:[n]),Vo(r=i?e:r)||(r=null==r?[]:[r]),Vr(t,n,r))},zn.over=cl,zn.overArgs=Bo,zn.overEvery=dl,zn.overSome=ul,zn.partial=Ro,zn.partialRight=Lo,zn.partition=So,zn.pick=Bs,zn.pickBy=Rs,zn.property=pl,zn.propertyOf=function(t){return function(n){return null==t?e:kr(t,n)}},zn.pull=Ga,zn.pullAll=Za,zn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ur(e,t,la(n,2)):e},zn.pullAllWith=function(t,n,r){return t&&t.length&&n&&n.length?Ur(t,n,e,r):t},zn.pullAt=Qa,zn.range=hl,zn.rangeRight=ml,zn.rearg=Po,zn.reject=function(e,t){return(Vo(e)?Dt:gr)(e,No(la(t,3)))},zn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],a=e.length;for(t=la(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return qr(e,i),n},zn.rest=function(n,r){if("function"!=typeof n)throw new je(t);return Gr(n,r=r===e?r:ms(r))},zn.reverse=Ja,zn.sampleSize=function(t,n,r){return n=(r?ya(t,n,r):n===e)?1:ms(n),(Vo(t)?Qn:Qr)(t,n)},zn.set=function(e,t,n){return null==e?e:Jr(e,t,n)},zn.setWith=function(t,n,r,i){return i="function"==typeof i?i:e,null==t?t:Jr(t,n,r,i)},zn.shuffle=function(e){return(Vo(e)?Jn:ni)(e)},zn.slice=function(t,n,r){var i=null==t?0:t.length;return i?(r&&"number"!=typeof r&&ya(t,n,r)?(n=0,r=i):(n=null==n?0:ms(n),r=r===e?i:ms(r)),ri(t,n,r)):[]},zn.sortBy=Oo,zn.sortedUniq=function(e){return e&&e.length?si(e):[]},zn.sortedUniqBy=function(e,t){return e&&e.length?si(e,la(t,2)):[]},zn.split=function(t,n,r){return r&&"number"!=typeof r&&ya(t,n,r)&&(n=r=e),(r=r===e?p:r>>>0)?(t=bs(t))&&("string"==typeof n||null!=n&&!as(n))&&!(n=ci(n))&&rn(t)?wi(un(t),0,r):t.split(n,r):[]},zn.spread=function(e,n){if("function"!=typeof e)throw new je(t);return n=null==n?0:bn(ms(n),0),Gr((function(t){var r=t[n],i=wi(t,0,n);return r&&Et(i,r),kt(e,this,i)}))},zn.tail=function(e){var t=null==e?0:e.length;return t?ri(e,1,t):[]},zn.take=function(t,n,r){return t&&t.length?ri(t,0,(n=r||n===e?1:ms(n))<0?0:n):[]},zn.takeRight=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,(n=i-(n=r||n===e?1:ms(n)))<0?0:n,i):[]},zn.takeRightWhile=function(e,t){return e&&e.length?hi(e,la(t,3),!1,!0):[]},zn.takeWhile=function(e,t){return e&&e.length?hi(e,la(t,3)):[]},zn.tap=function(e,t){return t(e),e},zn.throttle=function(e,n,r){var i=!0,a=!0;if("function"!=typeof e)throw new je(t);return es(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),Io(e,n,{leading:i,maxWait:n,trailing:a})},zn.thru=ho,zn.toArray=ps,zn.toPairs=Ls,zn.toPairsIn=Ps,zn.toPath=function(e){return Vo(e)?It(e,Ba):ls(e)?[e]:ji(Na(bs(e)))},zn.toPlainObject=vs,zn.transform=function(e,t,n){var r=Vo(e),i=r||Xo(e)||cs(e);if(t=la(t,4),null==n){var a=e&&e.constructor;n=i?r?new a:[]:es(e)&&Zo(a)?Fn(Ue(e)):{}}return(i?Ot:xr)(e,(function(e,r,i){return t(n,e,r,i)})),n},zn.unary=function(e){return To(e,1)},zn.union=eo,zn.unionBy=to,zn.unionWith=no,zn.uniq=function(e){return e&&e.length?di(e):[]},zn.uniqBy=function(e,t){return e&&e.length?di(e,la(t,2)):[]},zn.uniqWith=function(t,n){return n="function"==typeof n?n:e,t&&t.length?di(t,e,n):[]},zn.unset=function(e,t){return null==e||ui(e,t)},zn.unzip=ro,zn.unzipWith=io,zn.update=function(e,t,n){return null==e?e:pi(e,t,bi(n))},zn.updateWith=function(t,n,r,i){return i="function"==typeof i?i:e,null==t?t:pi(t,n,bi(r),i)},zn.values=zs,zn.valuesIn=function(e){return null==e?[]:Gt(e,Es(e))},zn.without=ao,zn.words=Zs,zn.wrap=function(e,t){return Ro(bi(t),e)},zn.xor=oo,zn.xorBy=so,zn.xorWith=lo,zn.zip=co,zn.zipObject=function(e,t){return gi(e||[],t||[],tr)},zn.zipObjectDeep=function(e,t){return gi(e||[],t||[],Jr)},zn.zipWith=uo,zn.entries=Ls,zn.entriesIn=Ps,zn.extend=xs,zn.extendWith=ws,sl(zn,zn),zn.add=bl,zn.attempt=Qs,zn.camelCase=Fs,zn.capitalize=Hs,zn.ceil=yl,zn.clamp=function(t,n,r){return r===e&&(r=n,n=e),r!==e&&(r=(r=gs(r))==r?r:0),n!==e&&(n=(n=gs(n))==n?n:0),sr(gs(t),n,r)},zn.clone=function(e){return lr(e,4)},zn.cloneDeep=function(e){return lr(e,5)},zn.cloneDeepWith=function(t,n){return lr(t,5,n="function"==typeof n?n:e)},zn.cloneWith=function(t,n){return lr(t,4,n="function"==typeof n?n:e)},zn.conformsTo=function(e,t){return null==t||cr(e,t,Is(t))},zn.deburr=Ws,zn.defaultTo=function(e,t){return null==e||e!=e?t:e},zn.divide=xl,zn.endsWith=function(t,n,r){t=bs(t),n=ci(n);var i=t.length,a=r=r===e?i:sr(ms(r),0,i);return(r-=n.length)>=0&&t.slice(r,a)==n},zn.eq=zo,zn.escape=function(e){return(e=bs(e))&&q.test(e)?e.replace(Y,tn):e},zn.escapeRegExp=function(e){return(e=bs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},zn.every=function(t,n,r){var i=Vo(t)?Tt:mr;return r&&ya(t,n,r)&&(n=e),i(t,la(n,3))},zn.find=go,zn.findIndex=Ha,zn.findKey=function(e,t){return Rt(e,la(t,3),xr)},zn.findLast=vo,zn.findLastIndex=Wa,zn.findLastKey=function(e,t){return Rt(e,la(t,3),wr)},zn.floor=wl,zn.forEach=bo,zn.forEachRight=yo,zn.forIn=function(e,t){return null==e?e:br(e,la(t,3),Es)},zn.forInRight=function(e,t){return null==e?e:yr(e,la(t,3),Es)},zn.forOwn=function(e,t){return e&&xr(e,la(t,3))},zn.forOwnRight=function(e,t){return e&&wr(e,la(t,3))},zn.get=Cs,zn.gt=Fo,zn.gte=Ho,zn.has=function(e,t){return null!=e&&fa(e,t,Tr)},zn.hasIn=Ts,zn.head=Ya,zn.identity=rl,zn.includes=function(e,t,n,r){e=Uo(e)?e:zs(e),n=n&&!r?ms(n):0;var i=e.length;return n<0&&(n=bn(i+n,0)),ss(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Pt(e,t,n)>-1},zn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ms(n);return i<0&&(i=bn(r+i,0)),Pt(e,t,i)},zn.inRange=function(t,n,r){return n=hs(n),r===e?(r=n,n=0):r=hs(r),function(e,t,n){return e>=yn(t,n)&&e<bn(t,n)}(t=gs(t),n,r)},zn.invoke=_s,zn.isArguments=Wo,zn.isArray=Vo,zn.isArrayBuffer=Yo,zn.isArrayLike=Uo,zn.isArrayLikeObject=qo,zn.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Or(e)==g},zn.isBuffer=Xo,zn.isDate=Ko,zn.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},zn.isEmpty=function(e){if(null==e)return!0;if(Uo(e)&&(Vo(e)||"string"==typeof e||"function"==typeof e.splice||Xo(e)||cs(e)||Wo(e)))return!e.length;var t=ma(e);if(t==w||t==C)return!e.size;if(ka(e))return!Br(e).length;for(var n in e)if(Ne.call(e,n))return!1;return!0},zn.isEqual=function(e,t){return Er(e,t)},zn.isEqualWith=function(t,n,r){var i=(r="function"==typeof r?r:e)?r(t,n):e;return i===e?Er(t,n,e,r):!!i},zn.isError=Go,zn.isFinite=function(e){return"number"==typeof e&&fn(e)},zn.isFunction=Zo,zn.isInteger=Qo,zn.isLength=Jo,zn.isMap=ns,zn.isMatch=function(e,t){return e===t||Mr(e,t,da(t))},zn.isMatchWith=function(t,n,r){return r="function"==typeof r?r:e,Mr(t,n,da(n),r)},zn.isNaN=function(e){return rs(e)&&e!=+e},zn.isNative=function(e){if($a(e))throw new ke("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ar(e)},zn.isNil=function(e){return null==e},zn.isNull=function(e){return null===e},zn.isNumber=rs,zn.isObject=es,zn.isObjectLike=ts,zn.isPlainObject=is,zn.isRegExp=as,zn.isSafeInteger=function(e){return Qo(e)&&e>=-9007199254740991&&e<=d},zn.isSet=os,zn.isString=ss,zn.isSymbol=ls,zn.isTypedArray=cs,zn.isUndefined=function(t){return t===e},zn.isWeakMap=function(e){return ts(e)&&ma(e)==j},zn.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Or(e)},zn.join=function(e,t){return null==e?"":gn.call(e,t)},zn.kebabCase=Vs,zn.last=Ka,zn.lastIndexOf=function(t,n,r){var i=null==t?0:t.length;if(!i)return-1;var a=i;return r!==e&&(a=(a=ms(r))<0?bn(i+a,0):yn(a,i-1)),n==n?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(t,n,a):Lt(t,Ft,a,!0)},zn.lowerCase=Ys,zn.lowerFirst=Us,zn.lt=ds,zn.lte=us,zn.max=function(t){return t&&t.length?fr(t,rl,Cr):e},zn.maxBy=function(t,n){return t&&t.length?fr(t,la(n,2),Cr):e},zn.mean=function(e){return Ht(e,rl)},zn.meanBy=function(e,t){return Ht(e,la(t,2))},zn.min=function(t){return t&&t.length?fr(t,rl,Lr):e},zn.minBy=function(t,n){return t&&t.length?fr(t,la(n,2),Lr):e},zn.stubArray=fl,zn.stubFalse=gl,zn.stubObject=function(){return{}},zn.stubString=function(){return""},zn.stubTrue=function(){return!0},zn.multiply=$l,zn.nth=function(t,n){return t&&t.length?Wr(t,ms(n)):e},zn.noConflict=function(){return ut._===this&&(ut._=ze),this},zn.noop=ll,zn.now=Co,zn.pad=function(e,t,n){e=bs(e);var r=(t=ms(t))?dn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Vi(gt(i),n)+e+Vi(ft(i),n)},zn.padEnd=function(e,t,n){e=bs(e);var r=(t=ms(t))?dn(e):0;return t&&r<t?e+Vi(t-r,n):e},zn.padStart=function(e,t,n){e=bs(e);var r=(t=ms(t))?dn(e):0;return t&&r<t?Vi(t-r,n)+e:e},zn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),wn(bs(e).replace(ne,""),t||0)},zn.random=function(t,n,r){if(r&&"boolean"!=typeof r&&ya(t,n,r)&&(n=r=e),r===e&&("boolean"==typeof n?(r=n,n=e):"boolean"==typeof t&&(r=t,t=e)),t===e&&n===e?(t=0,n=1):(t=hs(t),n===e?(n=t,t=0):n=hs(n)),t>n){var i=t;t=n,n=i}if(r||t%1||n%1){var a=$n();return yn(t+a*(n-t+st("1e-"+((a+"").length-1))),n)}return Xr(t,n)},zn.reduce=function(e,t,n){var r=Vo(e)?Mt:Yt,i=arguments.length<3;return r(e,la(t,4),n,i,pr)},zn.reduceRight=function(e,t,n){var r=Vo(e)?At:Yt,i=arguments.length<3;return r(e,la(t,4),n,i,hr)},zn.repeat=function(t,n,r){return n=(r?ya(t,n,r):n===e)?1:ms(n),Kr(bs(t),n)},zn.replace=function(){var e=arguments,t=bs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},zn.result=function(t,n,r){var i=-1,a=(n=yi(n,t)).length;for(a||(a=1,t=e);++i<a;){var o=null==t?e:t[Ba(n[i])];o===e&&(i=a,o=r),t=Zo(o)?o.call(t):o}return t},zn.round=kl,zn.runInContext=re,zn.sample=function(e){return(Vo(e)?Zn:Zr)(e)},zn.size=function(e){if(null==e)return 0;if(Uo(e))return ss(e)?dn(e):e.length;var t=ma(e);return t==w||t==C?e.size:Br(e).length},zn.snakeCase=qs,zn.some=function(t,n,r){var i=Vo(t)?Nt:ii;return r&&ya(t,n,r)&&(n=e),i(t,la(n,3))},zn.sortedIndex=function(e,t){return ai(e,t)},zn.sortedIndexBy=function(e,t,n){return oi(e,t,la(n,2))},zn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=ai(e,t);if(r<n&&zo(e[r],t))return r}return-1},zn.sortedLastIndex=function(e,t){return ai(e,t,!0)},zn.sortedLastIndexBy=function(e,t,n){return oi(e,t,la(n,2),!0)},zn.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var n=ai(e,t,!0)-1;if(zo(e[n],t))return n}return-1},zn.startCase=Xs,zn.startsWith=function(e,t,n){return e=bs(e),n=null==n?0:sr(ms(n),0,e.length),t=ci(t),e.slice(n,n+t.length)==t},zn.subtract=Sl,zn.sum=function(e){return e&&e.length?Ut(e,rl):0},zn.sumBy=function(e,t){return e&&e.length?Ut(e,la(t,2)):0},zn.template=function(t,n,r){var i=zn.templateSettings;r&&ya(t,n,r)&&(n=e),t=bs(t),n=ws({},n,i,Qi);var a,o,s=ws({},n.imports,i.imports,Qi),l=Is(s),c=Gt(s,l),d=0,u=n.interpolate||be,p="__p += '",h=Te((n.escape||be).source+"|"+u.source+"|"+(u===G?de:be).source+"|"+(n.evaluate||be).source+"|$","g"),m="//# sourceURL="+(Ne.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rt+"]")+"\n";t.replace(h,(function(e,n,r,i,s,l){return r||(r=i),p+=t.slice(d,l).replace(ye,nn),n&&(a=!0,p+="' +\n__e("+n+") +\n'"),s&&(o=!0,p+="';\n"+s+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),p+="';\n";var f=Ne.call(n,"variable")&&n.variable;if(f){if(le.test(f))throw new ke("Invalid `variable` option passed into `_.template`")}else p="with (obj) {\n"+p+"\n}\n";p=(o?p.replace(F,""):p).replace(H,"$1").replace(W,"$1;"),p="function("+(f||"obj")+") {\n"+(f?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(a?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=Qs((function(){return Se(l,m+"return "+p).apply(e,c)}));if(g.source=p,Go(g))throw g;return g},zn.times=function(e,t){if((e=ms(e))<1||e>d)return[];var n=p,r=yn(e,p);t=la(t),e-=p;for(var i=qt(r,t);++n<e;)t(n);return i},zn.toFinite=hs,zn.toInteger=ms,zn.toLength=fs,zn.toLower=function(e){return bs(e).toLowerCase()},zn.toNumber=gs,zn.toSafeInteger=function(e){return e?sr(ms(e),-9007199254740991,d):0===e?e:0},zn.toString=bs,zn.toUpper=function(e){return bs(e).toUpperCase()},zn.trim=function(t,n,r){if((t=bs(t))&&(r||n===e))return Xt(t);if(!t||!(n=ci(n)))return t;var i=un(t),a=un(n);return wi(i,Qt(i,a),Jt(i,a)+1).join("")},zn.trimEnd=function(t,n,r){if((t=bs(t))&&(r||n===e))return t.slice(0,pn(t)+1);if(!t||!(n=ci(n)))return t;var i=un(t);return wi(i,0,Jt(i,un(n))+1).join("")},zn.trimStart=function(t,n,r){if((t=bs(t))&&(r||n===e))return t.replace(ne,"");if(!t||!(n=ci(n)))return t;var i=un(t);return wi(i,Qt(i,un(n))).join("")},zn.truncate=function(t,n){var r=30,i="...";if(es(n)){var a="separator"in n?n.separator:a;r="length"in n?ms(n.length):r,i="omission"in n?ci(n.omission):i}var o=(t=bs(t)).length;if(rn(t)){var s=un(t);o=s.length}if(r>=o)return t;var l=r-dn(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):t.slice(0,l);if(a===e)return c+i;if(s&&(l+=c.length-l),as(a)){if(t.slice(l).search(a)){var d,u=c;for(a.global||(a=Te(a.source,bs(ue.exec(a))+"g")),a.lastIndex=0;d=a.exec(u);)var p=d.index;c=c.slice(0,p===e?l:p)}}else if(t.indexOf(ci(a),l)!=l){var h=c.lastIndexOf(a);h>-1&&(c=c.slice(0,h))}return c+i},zn.unescape=function(e){return(e=bs(e))&&U.test(e)?e.replace(V,hn):e},zn.uniqueId=function(e){var t=++Be;return bs(e)+t},zn.upperCase=Ks,zn.upperFirst=Gs,zn.each=bo,zn.eachRight=yo,zn.first=Ya,sl(zn,(vl={},xr(zn,(function(e,t){Ne.call(zn.prototype,t)||(vl[t]=e)})),vl),{chain:!1}),zn.VERSION="4.17.21",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){zn[e].placeholder=zn})),Ot(["drop","take"],(function(t,n){Vn.prototype[t]=function(r){r=r===e?1:bn(ms(r),0);var i=this.__filtered__&&!n?new Vn(this):this.clone();return i.__filtered__?i.__takeCount__=yn(r,i.__takeCount__):i.__views__.push({size:yn(r,p),type:t+(i.__dir__<0?"Right":"")}),i},Vn.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),Ot(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Vn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:la(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Ot(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Vn.prototype[e]=function(){return this[n](1).value()[0]}})),Ot(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Vn.prototype[e]=function(){return this.__filtered__?new Vn(this):this[n](1)}})),Vn.prototype.compact=function(){return this.filter(rl)},Vn.prototype.find=function(e){return this.filter(e).head()},Vn.prototype.findLast=function(e){return this.reverse().find(e)},Vn.prototype.invokeMap=Gr((function(e,t){return"function"==typeof e?new Vn(this):this.map((function(n){return _r(n,e,t)}))})),Vn.prototype.reject=function(e){return this.filter(No(la(e)))},Vn.prototype.slice=function(t,n){t=ms(t);var r=this;return r.__filtered__&&(t>0||n<0)?new Vn(r):(t<0?r=r.takeRight(-t):t&&(r=r.drop(t)),n!==e&&(r=(n=ms(n))<0?r.dropRight(-n):r.take(n-t)),r)},Vn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Vn.prototype.toArray=function(){return this.take(p)},xr(Vn.prototype,(function(t,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),i=/^(?:head|last)$/.test(n),a=zn[i?"take"+("last"==n?"Right":""):n],o=i||/^find/.test(n);a&&(zn.prototype[n]=function(){var n=this.__wrapped__,s=i?[1]:arguments,l=n instanceof Vn,c=s[0],d=l||Vo(n),u=function(e){var t=a.apply(zn,Et([e],s));return i&&p?t[0]:t};d&&r&&"function"==typeof c&&1!=c.length&&(l=d=!1);var p=this.__chain__,h=!!this.__actions__.length,m=o&&!p,f=l&&!h;if(!o&&d){n=f?n:new Vn(this);var g=t.apply(n,s);return g.__actions__.push({func:ho,args:[u],thisArg:e}),new Wn(g,p)}return m&&f?t.apply(this,s):(g=this.thru(u),m?i?g.value()[0]:g.value():g)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(e){var t=_e[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);zn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Vo(i)?i:[],e)}return this[n]((function(n){return t.apply(Vo(n)?n:[],e)}))}})),xr(Vn.prototype,(function(e,t){var n=zn[t];if(n){var r=n.name+"";Ne.call(In,r)||(In[r]=[]),In[r].push({name:t,func:n})}})),In[zi(e,2).name]=[{name:"wrapper",func:e}],Vn.prototype.clone=function(){var e=new Vn(this.__wrapped__);return e.__actions__=ji(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ji(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ji(this.__views__),e},Vn.prototype.reverse=function(){if(this.__filtered__){var e=new Vn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Vn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Vo(e),r=t<0,i=n?e.length:0,a=function(e,t,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],o=a.size;switch(a.type){case"drop":e+=o;break;case"dropRight":t-=o;break;case"take":t=yn(t,e+o);break;case"takeRight":e=bn(e,t-o)}}return{start:e,end:t}}(0,i,this.__views__),o=a.start,s=a.end,l=s-o,c=r?s:o-1,d=this.__iteratees__,u=d.length,p=0,h=yn(l,this.__takeCount__);if(!n||!r&&i==l&&h==l)return mi(e,this.__actions__);var m=[];e:for(;l--&&p<h;){for(var f=-1,g=e[c+=t];++f<u;){var v=d[f],b=v.iteratee,y=v.type,x=b(g);if(2==y)g=x;else if(!x){if(1==y)continue e;break e}}m[p++]=g}return m},zn.prototype.at=mo,zn.prototype.chain=function(){return po(this)},zn.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},zn.prototype.next=function(){this.__values__===e&&(this.__values__=ps(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},zn.prototype.plant=function(t){for(var n,r=this;r instanceof Hn;){var i=La(r);i.__index__=0,i.__values__=e,n?a.__wrapped__=i:n=i;var a=i;r=r.__wrapped__}return a.__wrapped__=t,n},zn.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Vn){var n=t;return this.__actions__.length&&(n=new Vn(this)),(n=n.reverse()).__actions__.push({func:ho,args:[Ja],thisArg:e}),new Wn(n,this.__chain__)}return this.thru(Ja)},zn.prototype.toJSON=zn.prototype.valueOf=zn.prototype.value=function(){return mi(this.__wrapped__,this.__actions__)},zn.prototype.first=zn.prototype.head,et&&(zn.prototype[et]=function(){return this}),zn}();ht?((ht.exports=mn)._=mn,pt._=mn):ut._=mn}.call(La);var SO=kO.exports;const OO=i.forwardRef(((n,r)=>{var{value:i,readOnly:a,"data-testid":s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:p,iconMask:h=e(ze,{}),iconUnmask:m=e(Pe,{}),iconActiveColor:f,iconInactiveColor:g,maskChar:v="•",error:b,disableMask:y,transformInput:x,loadState:w,onMask:$,onUnmask:k,onChange:S,onFocus:O,onBlur:C,onTryAgain:T}=n,D=lt(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const j=a&&SO.isEmpty(i),[_,I]=o(!y),[E,M]=o(i||"");u((()=>{M(i)}),[i]);const A=e=>{P(!1),O&&O(e)},N=e=>{P(!0),C&&C(e)},B=e=>{let t=e.target.value;switch(x){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}M(t),e.target.value=t,S&&S(e)},R=()=>{a&&T&&T()},L=()=>{P(!_)},P=e=>{I(e),e?$&&$():k&&k()},z=()=>!(null==E?void 0:E.toString().length)||y,F=()=>{const t=z();return!j&&e(pO,Object.assign({"data-testid":"icon-"+(_?"masked":"unmasked"),onClick:t?void 0:L,$isDisabled:t,$inactiveColor:g,$activeColor:f},{children:_?m:h}))};return e("div",Object.assign({"aria-busy":"loading"===w,"aria-live":"polite"},{children:(()=>{if(a)switch(w){case"fail":return t(xO,Object.assign({onClick:R,"data-testid":"try-again-button"},{children:[t(vO,{children:[e(bO,{}),e(yO,{children:"Error"})]}),e(gO,Object.assign({weight:"semibold"},{children:"Try again?"}))]}));case"loading":return t(hO,{children:[e(fO,{}),e(mO,{children:"Retrieving..."})]})}return e(uO,Object.assign({ref:r,"data-testid":`${s||"masked-input"}${_?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:F()},position:"right"},onFocus:a?void 0:A,onBlur:a?void 0:N,onClick:a?L:void 0,onChange:B,value:j?"-":_&&!y?kd.maskValue(null==E?void 0:E.toString(),{maskChar:v,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:p}):E,readOnly:a,error:b,$isDisabled:z()},D))})()}))})),CO=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field-masked-input","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:a,label:r,errorMessage:i,disabled:p.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(OO,Object.assign({ref:n,id:`${a}-base`,"data-testid":s||a,error:!!i},p))}))})),TO=E`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,DO=I.div`
    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?pl.Primary:pl.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&TO}
`,jO=I.div`
    color: ${pl.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&TO}

    ${e=>"next-line"===e.$labelDisplayType?E`
                    ${_l.getTextStyle("BodySmall","semibold")}
                `:E`
                    ${_l.getTextStyle("Body","regular")}
                `}
`,_O=I.span`
    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
`,IO=I.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return E`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return E`
                    ${DO} {
                        display: inline;
                    }

                    ${jO} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,EO=I.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,MO=I.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,AO=({bold:r,displayType:i="inline",label:a,searchTerm:o,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u})=>{const p=A()||Dc,h=Sl.Body.fontSize({theme:p}),f=Sl.Body.fontFamily({theme:p}),{ref:v,width:b}=an(),y=m((e=>{if("inline"!==i)return!1;return kd.getTextWidth(e,`${h}rem '${f}'`)>b*s-50}),[b,i,h,f,s]),x=g((()=>y(a)),[y,a]),w=g((()=>c&&y(c)),[y,c]),$=x||w?"next-line":i,k=r=>{if(!o)return r;const i=o.toLowerCase().trim(),s=r.toLowerCase().indexOf(i),l=s+o.length;return-1===s?r:t(n,{children:[a.slice(0,s),e(_O,Object.assign({$variant:u},{children:a.slice(s,l)})),a.slice(l)]})},S=r=>t(n,{children:[e(EO,Object.assign({$maxLines:s,"aria-hidden":!0},{children:k(r)})),e(MO,Object.assign({$maxLines:s,"aria-hidden":!0},{children:k(r)}))]});return t(IO,Object.assign({ref:v,$labelDisplayType:$},{children:[e(DO,Object.assign({"aria-label":a,$bold:r,$maxLines:s,$selected:l,$truncateType:d,$variant:u},{children:"middle"===d&&x?S(a):k(a)})),c&&e(jO,Object.assign({"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:i},{children:"middle"===d&&w?S(c):c}))]}))};function NO(e){return()=>e}function BO(e){e()}function RO(e,t){return n=>e(t(n))}function LO(e,t){return()=>e(t)}function PO(e){return void 0!==e}function zO(){}function FO(e,t){return t(e),e}function HO(e,t){return t(e)}function WO(...e){return e}function VO(e,t){return e(1,t)}function YO(e,t){e(0,t)}function UO(e){e(2)}function qO(e){return e(4)}function XO(e,t){return VO(e,function(e,t){return n=>e(t,n)}(t,0))}function KO(e,t){const n=e(1,(e=>{n(),t(e)}));return n}function GO(e){let t,n;return r=>i=>{t=i,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function ZO(e,t){return e===t}function QO(e=ZO){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function JO(e){return t=>n=>{e(n)&&t(n)}}function eC(e){return t=>RO(t,e)}function tC(e){return t=>()=>{t(e)}}function nC(e,...t){const n=function(...e){return t=>e.reduceRight(HO,t)}(...t);return(t,r)=>{switch(t){case 2:return void UO(e);case 1:return VO(e,n(r))}}}function rC(e,t){return n=>r=>{n(t=e(t,r))}}function iC(e){return t=>n=>{e>0?e--:t(n)}}function aC(e){let t,n=null;return r=>i=>{n=i,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function oC(...e){const t=new Array(e.length);let n=0,r=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,a)=>{const o=Math.pow(2,a);VO(e,(e=>{const s=n;n|=o,t[a]=e,s!==i&&n===i&&r&&(r(),r=null)}))})),e=>a=>{const o=()=>{e([a].concat(t))};n===i?o():r=o}}function sC(e){let t=e;const n=cC();return(e,r)=>{switch(e){case 0:t=r;break;case 1:r(t);break;case 4:return t}return n(e,r)}}function lC(e,t){return FO(sC(t),(t=>XO(e,t)))}function cC(){const e=[];return(t,n)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(n)}));case 2:return void e.splice(0,e.length);case 1:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function dC(e){return FO(cC(),(t=>XO(e,t)))}function uC(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:pC(),singleton:n}}const pC=()=>Symbol();function hC(...e){const t=cC(),n=new Array(e.length);let r=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,a)=>{const o=Math.pow(2,a);VO(e,(e=>{n[a]=e,r|=o,r===i&&YO(t,n)}))})),function(e,a){switch(e){case 2:return void UO(t);case 1:return r===i&&a(n),VO(t,a)}}}function mC(e,t=ZO){return nC(e,QO(t))}function fC(...e){return function(t,n){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(BO)}}(...e.map((e=>VO(e,n))))}}}var gC=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(gC||{});const vC={0:"debug",3:"error",1:"log",2:"warn"},bC=uC((()=>{const e=sC(3);return{log:sC(((t,n,r=1)=>{var i;r>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:qO(e))&&console[vC[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function yC(e,t,n){return xC(e,t,n).callbackRef}function xC(e,t,n){const r=i.useRef(null);let a=e=>{};const o=i.useMemo((()=>typeof ResizeObserver<"u"?new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)})):null),[e,n]);return a=e=>{e&&t?(null==o||o.observe(e),r.current=e):(r.current&&(null==o||o.unobserve(r.current)),r.current=null)},{callbackRef:a,ref:r}}function wC(e,t,n,r,a,o,s,l,c){const d=i.useCallback((n=>{const i=function(e,t,n,r){const i=e.length;if(0===i)return null;const a=[];for(let o=0;o<i;o++){const i=e.item(o);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,n);if(0===c&&r("Zero-sized element, this should not happen",{child:i},gC.ERROR),c===l)continue;const d=a[a.length-1];0===a.length||d.size!==c||d.endIndex!==s-1?a.push({endIndex:s,size:c,startIndex:s}):a[a.length-1].endIndex++}return a}(n.children,t,l?"offsetWidth":"offsetHeight",a);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType;let u;d&&(u=c.ownerDocument.defaultView);const p=s?l?s.scrollLeft:s.scrollTop:d?l?u.scrollX||u.document.documentElement.scrollLeft:u.scrollY||u.document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:d?l?u.document.documentElement.scrollWidth:u.document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,m=s?l?s.offsetWidth:s.offsetHeight:d?l?u.innerWidth:u.innerHeight:l?c.offsetWidth:c.offsetHeight;r({scrollHeight:h,scrollTop:Math.max(p,0),viewportHeight:m}),null==o||o(l?$C("column-gap",getComputedStyle(n).columnGap,a):$C("row-gap",getComputedStyle(n).rowGap,a)),null!==i&&e(i)}),[e,t,a,o,s,r,l]);return xC(d,n,c)}function $C(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,gC.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function kC(e,t,n){const r=i.useRef(null),a=i.useCallback((n=>{if(null==n||!n.offsetParent)return;const i=n.getBoundingClientRect(),a=i.width;let o,l;if(t){const e=t.getBoundingClientRect(),n=i.top-e.top;l=e.height-Math.max(0,n),o=n+t.scrollTop}else{const e=s.current.ownerDocument.defaultView;l=e.innerHeight-Math.max(0,i.top),o=i.top+e.scrollY}r.current={offsetTop:o,visibleHeight:l,visibleWidth:a},e(r.current)}),[e,t]),{callbackRef:o,ref:s}=xC(a,!0,n),l=i.useCallback((()=>{a(s.current)}),[a,s]);return i.useEffect((()=>{var e;if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}{const t=null==(e=s.current)?void 0:e.ownerDocument.defaultView;return null==t||t.addEventListener("scroll",l),null==t||t.addEventListener("resize",l),()=>{null==t||t.removeEventListener("scroll",l),null==t||t.removeEventListener("resize",l)}}}),[l,t,s]),o}const SC=uC((()=>{const e=cC(),t=cC(),n=sC(0),r=cC(),i=sC(0),a=cC(),o=cC(),s=sC(0),l=sC(0),c=sC(0),d=sC(0),u=cC(),p=cC(),h=sC(!1),m=sC(!1),f=sC(!1);return XO(nC(e,eC((({scrollTop:e})=>e))),t),XO(nC(e,eC((({scrollHeight:e})=>e))),o),XO(t,i),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:m,scrollBy:p,scrollContainerState:e,scrollHeight:o,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:r,statefulScrollTop:i,viewportHeight:a}}),[],{singleton:!0}),OC={lvl:0};function CC(e,t){const n=e.length;if(0===n)return[];let{index:r,value:i}=t(e[0]);const a=[];for(let o=1;o<n;o++){const{index:n,value:s}=t(e[o]);a.push({end:n-1,start:r,value:i}),r=n,i=s}return a.push({end:1/0,start:r,value:i}),a}function TC(e){return e===OC}function DC(e,t){if(!TC(e))return t===e.k?e.v:t<e.k?DC(e.l,t):DC(e.r,t)}function jC(e,t,n="k"){if(TC(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=jC(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return jC(e.l,t,n)}function _C(e,t,n){return TC(e)?FC(t,n,1):t===e.k?RC(e,{k:t,v:n}):t<e.k?HC(RC(e,{l:_C(e.l,t,n)})):HC(RC(e,{r:_C(e.r,t,n)}))}function IC(){return OC}function EC(e,t,n){if(TC(e))return[];return function(e){return CC(e,(({k:e,v:t})=>({index:e,value:t})))}(NC(e,jC(e,t)[0],n))}function MC(e,t){if(TC(e))return OC;const{k:n,l:r,r:i}=e;if(t===n){if(TC(r))return i;if(TC(i))return r;{const[t,n]=zC(r);return BC(RC(e,{k:t,l:LC(r),v:n}))}}return BC(RC(e,t<n?{l:MC(r,t)}:{r:MC(i,t)}))}function AC(e){return TC(e)?[]:[...AC(e.l),{k:e.k,v:e.v},...AC(e.r)]}function NC(e,t,n){if(TC(e))return[];const{k:r,l:i,r:a,v:o}=e;let s=[];return r>t&&(s=s.concat(NC(i,t,n))),r>=t&&r<=n&&s.push({k:r,v:o}),r<=n&&(s=s.concat(NC(a,t,n))),s}function BC(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(PC(t))return WC(RC(e,{lvl:n-1}));if(!TC(t)&&!TC(t.r))return RC(t.r,{l:RC(t,{r:t.r.l}),lvl:n,r:RC(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(PC(e))return VC(RC(e,{lvl:n-1}));if(TC(r)||TC(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,i=PC(t)?r.lvl-1:r.lvl;return RC(t,{l:RC(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:VC(RC(r,{l:t.r,lvl:i}))})}}function RC(e,t){return FC(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function LC(e){return TC(e.r)?e.l:BC(RC(e,{r:LC(e.r)}))}function PC(e){return TC(e)||e.lvl>e.r.lvl}function zC(e){return TC(e.r)?[e.k,e.v]:zC(e.r)}function FC(e,t,n,r=OC,i=OC){return{k:e,l:r,lvl:n,r:i,v:t}}function HC(e){return VC(WC(e))}function WC(e){const{l:t}=e;return TC(t)||t.lvl!==e.lvl?e:RC(t,{r:RC(e,{l:t.r})})}function VC(e){const{lvl:t,r:n}=e;return TC(n)||TC(n.r)||n.lvl!==t||n.r.lvl!==t?e:RC(n,{l:RC(e,{r:n.l}),lvl:t+1})}function YC(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function UC(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const qC=uC((()=>({recalcInProgress:sC(!1)})),[],{singleton:!0});function XC(e,t,n){return e[KC(e,t,n)]}function KC(e,t,n,r=0){let i=e.length-1;for(;r<=i;){const a=Math.floor((r+i)/2),o=n(e[a],t);if(0===o)return a;if(-1===o){if(i-r<2)return a-1;i=a-1}else{if(i===r)return a;r=a+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function GC(e,t){return Math.round(e.getBoundingClientRect()[t])}function ZC(e){return!TC(e.groupOffsetTree)}function QC({index:e},t){return t===e?0:t<e?-1:1}function JC({offset:e},t){return t===e?0:t<e?-1:1}function eT(e,t,n){if(0===t.length)return 0;const{index:r,offset:i,size:a}=XC(t,e,QC),o=e-r,s=a*o+(o-1)*n+i;return s>0?s+n:s}function tT(e,t){if(!ZC(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function nT(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=tT("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function rT(e,t,n,r=0){return r>0&&(t=Math.max(t,XC(e,r,QC).offset)),CC(function(e,t,n,r){const i=KC(e,t,r),a=KC(e,n,r,i);return e.slice(i,a+1)}(e,t,n,JC),sT)}function iT(e,[t,n,r,i]){t.length>0&&r("received item sizes",t,gC.DEBUG);const a=e.sizeTree;let o=a,s=0;if(n.length>0&&TC(a)&&2===t.length){const e=t[0].size,r=t[1].size;o=n.reduce(((t,n)=>_C(_C(t,n,e),n+1,r)),o)}else[o,s]=function(e,t){let n=TC(e)?0:1/0;for(const r of t){const{endIndex:t,size:i,startIndex:a}=r;if(n=Math.min(n,a),TC(e)){e=_C(e,0,i);continue}const o=EC(e,a-1,t+1);if(o.some(lT(r)))continue;let s=!1,l=!1;for(const{end:n,start:r,value:a}of o)s?(t>=r||i===a)&&(e=MC(e,r)):(l=a!==i,s=!0),n>t&&t>=r&&a!==i&&(e=_C(e,t+1,a));l&&(e=_C(e,a,i))}return[e,n]}(o,t);if(o===a)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=oT(e.offsetTree,s,o,i);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>_C(e,t,eT(t,u,i))),IC()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:o}}function aT(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function oT(e,t,n,r){let i=e,a=0,o=0,s=0,l=0;if(0!==t){l=KC(i,t-1,QC),s=i[l].offset;const e=jC(n,t-1);a=e[0],o=e[1],i.length&&i[l].size===jC(n,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of EC(n,t,1/0)){const t=e-a,n=t*o+s+t*r;i.push({index:e,offset:n,size:l}),a=e,s=n,o=l}return{lastIndex:a,lastOffset:s,lastSize:o,offsetTree:i}}function sT(e){return{index:e.index,value:e}}function lT(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const cT={offsetHeight:"height",offsetWidth:"width"},dT=uC((([{log:e},{recalcInProgress:t}])=>{const n=cC(),r=cC(),i=lC(r,0),a=cC(),o=cC(),s=sC(0),l=sC([]),c=sC(void 0),d=sC(void 0),u=sC(((e,t)=>GC(e,cT[t]))),p=sC(void 0),h=sC(0),m={groupIndices:[],groupOffsetTree:IC(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:IC()},f=lC(nC(n,oC(l,e,h),rC(iT,m),QO()),m),g=lC(nC(l,QO(),rC(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),eC((({prev:e})=>e))),[]);XO(nC(l,JO((e=>e.length>0)),oC(f,h),eC((([e,t,n])=>{const r=e.reduce(((e,r,i)=>_C(e,r,eT(r,t.offsetTree,n)||i)),IC());return{...t,groupIndices:e,groupOffsetTree:r}}))),f),XO(nC(r,oC(f),JO((([e,{lastIndex:t}])=>e<t)),eC((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),XO(c,d);const v=lC(nC(c,eC((e=>void 0===e))),!0);XO(nC(d,JO((e=>void 0!==e&&TC(qO(f).sizeTree))),eC((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const b=dC(nC(n,oC(f),rC((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:m}),eC((e=>e.changed))));VO(nC(s,rC(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),eC((e=>e.diff))),(e=>{const{groupIndices:n}=qO(f);if(e>0)YO(t,!0),YO(a,e+aT(e,n));else if(e<0){const t=qO(g);t.length>0&&(e-=aT(-e,t)),YO(o,e)}})),VO(nC(s,oC(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},gC.ERROR)}));const y=dC(a);XO(nC(a,oC(f),eC((([e,t])=>{const n=t.groupIndices.length>0,r=[],i=t.lastSize;if(n){const n=DC(t.sizeTree,0);let a=0,o=0;for(;a<e;){const e=t.groupIndices[o],s=t.groupIndices.length===o+1?1/0:t.groupIndices[o+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),o++,a+=s+1}const s=AC(t.sizeTree);return a!==e&&s.shift(),s.reduce(((t,{k:n,v:r})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:i}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return AC(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),n);const x=dC(nC(o,oC(f,h),eC((([e,{offsetTree:t},n])=>eT(-e,t,n)))));return XO(nC(o,oC(f,h),eC((([e,t,n])=>{if(t.groupIndices.length>0){if(TC(t.sizeTree))return t;let r=IC();const i=qO(g);let a=0,o=0,s=0;for(;a<-e;){s=i[o];const e=i[o+1]-s-1;o++,a+=e+1}if(r=AC(t.sizeTree).reduce(((t,{k:n,v:r})=>_C(t,Math.max(0,n+e),r)),r),a!==-e){r=_C(r,0,DC(t.sizeTree,s));r=_C(r,1,jC(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...oT(t.offsetTree,0,r,n)}}{const r=AC(t.sizeTree).reduce(((t,{k:n,v:r})=>_C(t,Math.max(0,n+e),r)),IC());return{...t,sizeTree:r,...oT(t.offsetTree,0,r,n)}}}))),f),{beforeUnshiftWith:y,data:p,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:u,listRefresh:b,shiftWith:o,shiftWithOffset:x,sizeRanges:n,sizes:f,statefulTotalCount:i,totalCount:r,trackItemSizes:v,unshiftWith:a}}),WO(bC,qC),{singleton:!0});function uT(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const pT=uC((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:i}])=>{const a=cC(),o=cC(),s=dC(nC(a,eC(uT)));return XO(nC(s,eC((e=>e.totalCount))),n),XO(nC(s,eC((e=>e.groupIndices))),e),XO(nC(hC(i,t,r),JO((([e,t])=>ZC(t))),eC((([e,t,n])=>jC(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),QO(),eC((e=>[e]))),o),{groupCounts:a,topItemsIndexes:o}}),WO(dT,SC)),hT=uC((([{log:e}])=>{const t=sC(!1),n=dC(nC(t,JO((e=>e)),QO()));return VO(t,(t=>{t&&qO(e)("props updated",{},gC.DEBUG)})),{didMount:n,propsReady:t}}),WO(bC),{singleton:!0}),mT=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function fT(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!mT)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const gT=uC((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:i,fixedHeaderHeight:a,footerHeight:o,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:p}])=>{const h=cC(),m=cC(),f=sC(0);let g=null,v=null,b=null;function y(){g&&(g(),g=null),b&&(b(),b=null),v&&(clearTimeout(v),v=null),YO(l,!1)}return XO(nC(h,oC(n,u,r,f,s,o,p),oC(e,a,i),eC((([[e,n,r,i,a,o,s,c],u,p,f])=>{const x=fT(e),{align:w,behavior:$,offset:k}=x,S=i-1,O=nT(x,n,S);let C=eT(O,n.offsetTree,u)+o;"end"===w?(C+=p+jC(n.sizeTree,O)[1]-r+f,O===S&&(C+=s)):"center"===w?C+=(p+jC(n.sizeTree,O)[1]-r+f)/2:C-=a,k&&(C+=k);const T=t=>{y(),t?(c("retrying to scroll to",{location:e},gC.DEBUG),YO(h,e)):(YO(m,!0),c("list did not change, scroll successful",{},gC.DEBUG))};if(y(),"smooth"===$){let e=!1;b=VO(t,(t=>{e=e||t})),g=KO(d,(()=>{T(e)}))}else g=KO(nC(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),T);return v=setTimeout((()=>{y()}),1200),YO(l,!0),c("scrolling from index to",{behavior:$,index:O,top:C},gC.DEBUG),{behavior:$,top:C}}))),c),{scrollTargetReached:m,scrollToIndex:h,topListHeight:f}}),WO(dT,SC,bC),{singleton:!0});function vT(e,t){0==e?t():requestAnimationFrame((()=>{vT(e-1,t)}))}function bT(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const yT=uC((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:i,scrollToIndex:a},{didMount:o}])=>{const s=sC(!0),l=sC(0),c=sC(!0);return XO(nC(o,oC(l),JO((([e,t])=>!!t)),tC(!1)),s),XO(nC(o,oC(l),JO((([e,t])=>!!t)),tC(!1)),c),VO(nC(hC(t,o),oC(s,n,e,c),JO((([[,e],t,{sizeTree:n},r,i])=>e&&(!TC(n)||PO(r))&&!t&&!i)),oC(l)),(([,e])=>{KO(i,(()=>{YO(c,!0)})),vT(4,(()=>{KO(r,(()=>{YO(s,!0)})),YO(a,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),WO(dT,SC,gT,hT),{singleton:!0});function xT(e,t){return Math.abs(e-t)<1.01}const wT="up",$T="down",kT={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},ST=uC((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:i,viewportHeight:a}])=>{const o=sC(!1),s=sC(!0),l=cC(),c=cC(),d=sC(4),u=sC(0),p=lC(nC(fC(nC(mC(i),iC(1),tC(!0)),nC(mC(i),iC(1),tC(!1),GO(100))),QO()),!1),h=lC(nC(fC(nC(n,tC(!0)),nC(n,tC(!1),GO(200))),QO()),!1);XO(nC(hC(mC(i),mC(u)),eC((([e,t])=>e<=t)),QO()),s),XO(nC(s,aC(50)),c);const m=dC(nC(hC(r,mC(a),mC(t),mC(e),mC(d)),rC(((e,[{scrollHeight:t,scrollTop:n},r,i,a,o])=>{const s={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-o){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),kT),QO(((e,t)=>e&&e.atBottom===t.atBottom)))),f=lC(nC(r,rC(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(xT(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const i=t-(n+r)<1;return e.scrollTop!==n&&i?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),JO((e=>e.changed)),eC((e=>e.jump))),0);XO(nC(m,eC((e=>e.atBottom))),o),XO(nC(o,aC(50)),l);const g=sC($T);XO(nC(r,eC((({scrollTop:e})=>e)),QO(),rC(((e,t)=>qO(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?wT:$T,prevScrollTop:t}),{direction:$T,prevScrollTop:0}),eC((e=>e.direction))),g),XO(nC(r,aC(50),tC("none")),g);const v=sC(0);return XO(nC(p,JO((e=>!e)),tC(0)),v),XO(nC(i,aC(100),oC(p),JO((([e,t])=>!!t)),rC((([e,t],[n])=>[t,n]),[0,0]),eC((([e,t])=>t-e))),v),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:o,isAtTop:s,isScrolling:p,lastJumpDueToItemResize:f,scrollDirection:g,scrollVelocity:v}}),WO(SC)),OT="top",CT="bottom",TT="none";function DT(e,t,n){return"number"==typeof e?n===wT&&t===OT||n===$T&&t===CT?e:0:n===wT?t===OT?e.main:e.reverse:t===CT?e.main:e.reverse}function jT(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const _T=uC((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:i}])=>{const a=cC(),o=sC(0),s=sC(0),l=sC(0),c=lC(nC(hC(mC(r),mC(i),mC(n),mC(a,UC),mC(l),mC(o),mC(t),mC(e),mC(s)),eC((([e,t,n,[r,i],a,o,s,l,c])=>{const d=e-l,u=o+s,p=Math.max(n-d,0);let h=TT;const m=jT(c,OT),f=jT(c,CT);return r-=l,i+=n+s,(r+=n+s)>e+u-m&&(h=wT),(i-=l)<e-p+t+f&&(h=$T),h!==TT?[Math.max(d-n-DT(a,OT,h)-m,0),d-p-s+t+DT(a,CT,h)+f]:null})),JO((e=>null!=e)),QO(UC)),[0,0]);return{increaseViewportBy:s,listBoundary:a,overscan:l,topListHeight:o,visibleRange:c}}),WO(SC),{singleton:!0});const IT={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function ET(e,t,n,r,i,a){const{lastIndex:o,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=n-o,p=c,h=s+u*l+(u-1)*r-d;return{bottom:d,firstItemIndex:a,items:AT(e,i,a),offsetBottom:h,offsetTop:c,top:p,topItems:AT(t,i,a),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function MT(e,t,n,r,i,a){let o=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-o>=e)break;o++}const s=e+o,l=bT(t,s);return ET(Array.from({length:s}).map(((e,t)=>({data:a[t+l],index:t+l,offset:0,size:0}))),[],s,i,n,r)}function AT(e,t,n){if(0===e.length)return[];if(!ZC(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,i=e[e.length-1].index,a=[],o=EC(t.groupOffsetTree,r,i);let s,l=0;for(const r of e){let e;(!s||s.end<r.index)&&(s=o.shift(),l=t.groupIndices.indexOf(s.start)),e=r.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:r.index-(l+1)+n},a.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return a}const NT=uC((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:i},a,{listBoundary:o,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},p,{didMount:h},{recalcInProgress:m}])=>{const f=sC([]),g=sC(0),v=cC();XO(a.topItemsIndexes,f);const b=lC(nC(hC(h,m,mC(l,UC),mC(i),mC(r),mC(c),d,mC(f),mC(t),mC(n),e),JO((([e,t,,n,,,,,,,r])=>{const i=r&&r.length!==n;return e&&!t&&!i})),eC((([,,[e,t],n,r,i,a,o,s,l,c])=>{const d=r,{offsetTree:u,sizeTree:p}=d,h=qO(g);if(0===n)return{...IT,totalCount:n};if(0===e&&0===t)return 0===h?{...IT,totalCount:n}:MT(h,i,r,s,l,c||[]);if(TC(p))return h>0?null:ET(function(e,t,n){if(ZC(t)){const r=tT(e,t);return[{index:jC(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(bT(i,n),d,c),[],n,l,d,s);const m=[];if(o.length>0){const e=o[0],t=o[o.length-1];let n=0;for(const r of EC(p,e,t)){const i=r.value,a=Math.max(r.start,e),o=Math.min(r.end,t);for(let e=a;e<=o;e++)m.push({data:null==c?void 0:c[e],index:e,offset:n,size:i}),n+=i}}if(!a)return ET([],m,n,l,d,s);const f=o.length>0?o[o.length-1]+1:0,v=rT(u,e,t,f);if(0===v.length)return null;const b=n-1;return ET(FO([],(n=>{for(const r of v){const i=r.value;let a=i.offset,o=r.start;const s=i.size;if(i.offset<e){o+=Math.floor((e-i.offset+l)/(s+l));const t=o-r.start;a+=t*s+t*l}o<f&&(a+=(f-o)*s,o=f);const d=Math.min(r.end,b);for(let e=o;e<=d&&!(a>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:a,size:s}),a+=s+l}})),m,n,l,d,s)})),JO((e=>null!==e)),QO()),IT);XO(nC(e,JO(PO),eC((e=>null==e?void 0:e.length))),i),XO(nC(b,eC((e=>e.topListHeight))),u),XO(u,s),XO(nC(b,eC((e=>[e.top,e.bottom]))),o),XO(nC(b,eC((e=>e.items))),v);const y=dC(nC(b,JO((({items:e})=>e.length>0)),oC(i,e),JO((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),eC((([,e,t])=>[e-1,t])),QO(UC),eC((([e])=>e)))),x=dC(nC(b,aC(200),JO((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),eC((({items:e})=>e[0].index)),QO())),w=dC(nC(b,JO((({items:e})=>e.length>0)),eC((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),QO(YC)));return{endReached:y,initialItemCount:g,itemsRendered:v,listState:b,rangeChanged:w,startReached:x,topItemsIndexes:f,...p}}),WO(dT,pT,_T,yT,gT,ST,hT,qC),{singleton:!0}),BT=uC((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:i}])=>{const a=cC(),o=lC(nC(hC(n,e,r,t,i),eC((([e,t,n,r,i])=>e+t+n+r+i.offsetBottom+i.bottom))),0);return XO(mC(o),a),{totalListHeight:o,totalListHeightChanged:a}}),WO(SC,NT),{singleton:!0}),RT=uC((([{viewportHeight:e},{totalListHeight:t}])=>{const n=sC(!1),r=lC(nC(hC(n,e,t),JO((([e])=>e)),eC((([,e,t])=>Math.max(0,e-t))),aC(0),QO()),0);return{alignToBottom:n,paddingTopAddition:r}}),WO(SC,BT),{singleton:!0});function LT(e){return!!e&&("smooth"===e?"smooth":"auto")}const PT=uC((([{listRefresh:e,totalCount:t,fixedItemSize:n},{atBottomState:r,isAtBottom:i},{scrollToIndex:a},{scrolledToInitialItem:o},{didMount:s,propsReady:l},{log:c},{scrollingInProgress:d}])=>{const u=sC(!1),p=cC();let h=null;function m(e){YO(a,{align:"end",behavior:e,index:"LAST"})}function f(e){const t=KO(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(qO(c)("scrolling to bottom due to increased size",{},gC.DEBUG),m("auto"))}));setTimeout(t,100)}return VO(nC(hC(nC(mC(t),iC(1)),s),oC(mC(u),i,o,d),eC((([[e,t],n,r,i,a])=>{let o=t&&i,s="auto";return o&&(s=((e,t)=>"function"==typeof e?LT(e(t)):t&&LT(e))(n,r||a),o=o&&!!s),{followOutputBehavior:s,shouldFollow:o,totalCount:e}})),JO((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),qO(n)?requestAnimationFrame((()=>{qO(c)("following output to ",{totalCount:r},gC.DEBUG),m(t)})):h=KO(e,(()=>{qO(c)("following output to ",{totalCount:r},gC.DEBUG),m(t),h=null}))})),VO(nC(hC(mC(u),t,l),JO((([e,,t])=>e&&t)),rC((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),JO((({refreshed:e})=>e)),oC(u,t)),(([,e])=>{qO(o)&&f(!1!==e)})),VO(p,(()=>{f(!1!==qO(u))})),VO(hC(mC(u),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&m("auto")})),{autoscrollToBottom:p,followOutput:u}}),WO(dT,ST,gT,yT,hT,bC,SC)),zT=uC((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:i},{initialItemCount:a,listState:o},{didMount:s}])=>(XO(nC(s,oC(a),JO((([,e])=>0!==e)),oC(i,r,t,n,e),eC((([[,e],t,n,r,i,a=[]])=>MT(e,t,n,r,i,a)))),o),{})),WO(dT,yT,NT,hT),{singleton:!0}),FT=uC((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=sC(0);return VO(nC(e,oC(r),JO((([,e])=>0!==e)),eC((([,e])=>({top:e})))),(e=>{KO(nC(n,iC(1),JO((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{YO(t,e)}))}))})),{initialScrollTop:r}}),WO(hT,SC,NT),{singleton:!0}),HT=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...i},viewportBottom:a,viewportTop:o})=>t<o?{...i,align:null!=n?n:"start",behavior:r}:e>a?{...i,align:null!=n?n:"end",behavior:r}:null,WT=uC((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:i,headerHeight:a,scrollingInProgress:o,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=cC();return XO(nC(d,oC(t,l,n,a,i,r,s),oC(e),eC((([[e,t,n,r,i,a,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:p=HT,done:h,...m}=e,f=nT(e,t,r-1),g=eT(f,t.offsetTree,c)+i+a,v=p({itemBottom:g+jC(t.sizeTree,f)[1],itemTop:g,locationParams:{align:d,behavior:u,...m},viewportBottom:l+n-s,viewportTop:l+a});return v?h&&KO(nC(o,JO((e=>!e)),iC(qO(o)?1:2)),h):h&&h(),v})),JO((e=>null!==e))),c),{scrollIntoView:d}}),WO(dT,SC,gT,NT,bC),{singleton:!0}),VT=uC((([{scrollVelocity:e}])=>{const t=sC(!1),n=cC(),r=sC(!1);return XO(nC(e,oC(r,t,n),JO((([e,t])=>!!t)),eC((([e,t,n,r])=>{const{enter:i,exit:a}=t;if(n){if(a(e,r))return!1}else if(i(e,r))return!0;return n})),QO()),t),VO(nC(hC(t,e,n),oC(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),WO(ST),{singleton:!0}),YT=uC((([{scrollContainerState:e,scrollTo:t}])=>{const n=cC(),r=cC(),i=cC(),a=sC(!1),o=sC(void 0);return XO(nC(hC(n,r),eC((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),XO(nC(t,oC(r),eC((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:o,useWindowScroll:a,windowScrollContainerState:n,windowScrollTo:i,windowViewportRect:r}}),WO(SC)),UT=uC((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:i},{didMount:a},{useWindowScroll:o,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=cC(),d=sC(void 0),u=sC(null),p=sC(null);return XO(s,u),XO(l,p),VO(nC(c,oC(t,r,o,u,p,n)),(([e,t,n,r,i,a,o])=>{const s=function(e){return AC(e).map((({k:e,v:t},n,r)=>{const i=r[n+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==i&&null!==a&&(n=i.scrollTop-a.offsetTop),e({ranges:s,scrollTop:n-=o})})),XO(nC(d,JO(PO),eC(qT)),i),XO(nC(a,oC(d),JO((([,e])=>void 0!==e)),QO(),eC((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),WO(dT,SC,yT,hT,YT));function qT(e){return{align:"start",index:0,offset:e.scrollTop}}const XT=uC((([{topItemsIndexes:e}])=>{const t=sC(0);return XO(nC(t,JO((e=>e>=0)),eC((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),WO(NT));function KT(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const GT=KT((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),ZT=uC((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:i,isScrolling:a,lastJumpDueToItemResize:o,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:p},{log:h},{recalcInProgress:m}])=>{const f=dC(nC(l,oC(o),rC((([,e,t,n],[{bottom:r,items:i,offsetBottom:a,totalCount:o},s])=>{const l=r+a;let c=0;return t===o&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-n,0!==c&&(c+=s))),[c,i,o,l]}),[0,[],0,0]),JO((([e])=>0!==e)),oC(r,s,n,i,h,m),JO((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===wT)),eC((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},gC.DEBUG),e)))));function g(n){n>0?(YO(t,{behavior:"auto",top:-n}),YO(e,0)):(YO(e,0),YO(t,{behavior:"auto",top:-n}))}return VO(nC(f,oC(e,a)),(([t,n,r])=>{r&&GT()?YO(e,n-t):g(-t)})),VO(nC(hC(lC(a,!1),e,m),JO((([e,t,n])=>!e&&!n&&0!==t)),eC((([e,t])=>t)),aC(1)),g),XO(nC(u,eC((e=>({top:-e})))),t),VO(nC(c,oC(p,d),eC((([e,{groupIndices:t,lastSize:n,sizeTree:r},i])=>{function a(e){return e*(n+i)}if(0===t.length)return a(e);{let n=0;const i=DC(r,0);let o=0,s=0;for(;o<e;){o++,n+=i;let r=t.length===s+1?1/0:t[s+1]-t[s]-1;o+r>e&&(n-=i,r=e-o+1),o+=r,n+=a(r),s++}return n}}))),(n=>{YO(e,n),requestAnimationFrame((()=>{YO(t,{top:n}),requestAnimationFrame((()=>{YO(e,0),YO(m,!1)}))}))})),{deviation:e}}),WO(SC,ST,NT,dT,bC,qC)),QT=uC((([e,t,n,r,i,a,o,s,l,c])=>({...e,...t,...n,...r,...i,...a,...o,...s,...l,...c})),WO(_T,zT,hT,VT,BT,FT,RT,YT,WT,bC)),JT=uC((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:i,groupIndices:a,itemSize:o,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:p,initialTopMostItemIndex:h,scrolledToInitialItem:m},f,g,v,{listState:b,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:k},{groupCounts:S},O])=>(XO(x.rangeChanged,O.scrollSeekRangeChanged),XO(nC(O.windowViewportRect,eC((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:i,groupCounts:S,initialItemFinalLocationReached:p,initialTopMostItemIndex:h,scrolledToInitialItem:m,sizeRanges:s,topItemCount:k,topItemsIndexes:y,totalCount:d,...v,groupIndices:a,itemSize:o,listState:b,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...O,...f,sizes:l,...g})),WO(dT,yT,SC,UT,PT,NT,gT,ZT,XT,pT,QT));function eD(e,t){const n={},r={};let i=0;const a=e.length;for(;i<a;)r[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const tD=typeof document<"u"?i.useLayoutEffect:i.useEffect;function nD(t,n,r){const a=Object.keys(n.required||{}),o=Object.keys(n.optional||{}),s=Object.keys(n.methods||{}),l=Object.keys(n.events||{}),c=i.createContext({});function d(e,t){e.propsReady&&YO(e.propsReady,!1);for(const r of a){YO(e[n.required[r]],t[r])}for(const r of o)if(r in t){YO(e[n.optional[r]],t[r])}e.propsReady&&YO(e.propsReady,!0)}function u(e){return l.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(i,a){switch(i){case 1:return a?n===a?void 0:(r(),n=a,t=VO(e,a),t):(r(),zO);case 2:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const p=i.forwardRef(((p,h)=>{const{children:m,...f}=p,[g]=i.useState((()=>FO(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:i,singleton:a})=>{if(a&&t.has(i))return t.get(i);const o=e(r.map((e=>n(e))));return a&&t.set(i,o),o};return n(e)}(t),(e=>{d(e,f)})))),[v]=i.useState(LO(u,g));tD((()=>{for(const e of l)e in f&&VO(v[e],f[e]);return()=>{Object.values(v).map(UO)}}),[f,v,g]),tD((()=>{d(g,f)})),i.useImperativeHandle(h,NO(function(e){return s.reduce(((t,r)=>(t[r]=t=>{YO(e[n.methods[r]],t)},t)),{})}(g)));const b=r;return e(c.Provider,{value:g,children:r?e(b,{...eD([...a,...o,...l],f),children:m}):m})}));return{Component:p,useEmitter:(e,t)=>{const n=i.useContext(c)[e];tD((()=>VO(n,t)),[t,n])},useEmitterValue:i.version.startsWith("18")?e=>{const t=i.useContext(c)[e],n=i.useCallback((e=>VO(t,e)),[t]);return i.useSyncExternalStore(n,(()=>qO(t)),(()=>qO(t)))}:e=>{const t=i.useContext(c)[e],[n,r]=i.useState(LO(qO,t));return tD((()=>VO(t,(e=>{e!==n&&r(NO(e))}))),[t,n]),n},usePublisher:e=>{const t=i.useContext(c);return i.useCallback((n=>{YO(t[e],n)}),[t,e])}}}const rD=i.createContext(void 0),iD=i.createContext(void 0),aD=typeof document<"u"?i.useLayoutEffect:i.useEffect;function oD(e){return"self"in e}function sD(e,t,n,r=zO,a,o){const s=i.useRef(null),l=i.useRef(null),c=i.useRef(null),d=i.useCallback((n=>{let r,i,a;const s=n.target;if(function(e){return"body"in e}(s)||oD(s)){const e=oD(s)?s:s.defaultView;a=o?e.scrollX:e.scrollY,r=o?e.document.documentElement.scrollWidth:e.document.documentElement.scrollHeight,i=o?e.innerWidth:e.innerHeight}else a=o?s.scrollLeft:s.scrollTop,r=o?s.scrollWidth:s.scrollHeight,i=o?s.offsetWidth:s.offsetHeight;const d=()=>{e({scrollHeight:r,scrollTop:Math.max(a,0),viewportHeight:i})};n.suppressFlushSync?d():C.flushSync(d),null!==l.current&&(a===l.current||a<=0||a===r-i)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t,o]);return i.useEffect((()=>{const e=a||s.current;return r(a||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",d)}}),[s,d,n,r,a]),{scrollByCallback:function(e){o&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(n){const r=s.current;if(!r||(o?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const i="smooth"===n.behavior;let a,d,u;oD(r)?(d=Math.max(GC(r.document.documentElement,o?"width":"height"),o?r.document.documentElement.scrollWidth:r.document.documentElement.scrollHeight),a=o?r.innerWidth:r.innerHeight,u=o?window.scrollX:window.scrollY):(d=r[o?"scrollWidth":"scrollHeight"],a=GC(r,o?"width":"height"),u=r[o?"scrollLeft":"scrollTop"]);const p=d-a;if(n.top=Math.ceil(Math.max(Math.min(p,n.top),0)),xT(a,d)||n.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:a}),void(i&&t(!0));i?(l.current=n.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,o&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const lD="-webkit-sticky",cD="sticky",dD=KT((()=>{if(typeof document>"u")return cD;const e=document.createElement("div");return e.style.position=lD,e.style.position===lD?lD:cD}));function uD(e){return e}const pD=uC((()=>{const e=sC((e=>`Item ${e}`)),t=sC(null),n=sC((e=>`Group ${e}`)),r=sC({}),i=sC(uD),a=sC("div"),o=sC(zO),s=(e,t=null)=>lC(nC(r,eC((t=>t[e])),QO()),t);return{components:r,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:n,HeaderComponent:s("Header"),HeaderFooterTag:a,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:o,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),hD=uC((([e,t])=>({...e,...t})),WO(JT,pD)),mD=({height:t})=>e("div",{style:{height:t}}),fD={overflowAnchor:"none",position:dD(),zIndex:1},gD={overflowAnchor:"none"},vD={...gD,display:"inline-block",height:"100%"},bD=i.memo((function({showTopList:t=!1}){const n=ND("listState"),r=BD("sizeRanges"),a=ND("useWindowScroll"),o=ND("customScrollParent"),s=BD("windowScrollContainerState"),l=BD("scrollContainerState"),c=o||a?s:l,d=ND("itemContent"),u=ND("context"),p=ND("groupContent"),h=ND("trackItemSizes"),m=ND("itemSize"),f=ND("log"),g=BD("gap"),v=ND("horizontalDirection"),{callbackRef:b}=wC(r,m,h,t?zO:c,f,g,o,v,ND("skipAnimationFrameInResizeObserver")),[y,x]=i.useState(0);AD("deviation",(e=>{y!==e&&x(e)}));const w=ND("EmptyPlaceholder"),$=ND("ScrollSeekPlaceholder")||mD,k=ND("ListComponent"),S=ND("ItemComponent"),C=ND("GroupComponent"),T=ND("computeItemKey"),D=ND("isSeeking"),j=ND("groupIndices").length>0,_=ND("alignToBottom"),I=ND("initialItemFinalLocationReached"),E=t?{}:{boxSizing:"border-box",...v?{display:"inline-block",height:"100%",marginLeft:0!==y?y:_?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:_?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...I?{}:{visibility:"hidden"}};return!t&&0===n.totalCount&&w?e(w,{...kD(w,u)}):e(k,{...kD(k,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:b,style:E,children:(t?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=T(t+n.firstItemIndex,e.data,u);return D?O($,{...kD($,u),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?O(C,{...kD(C,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:fD},p(e.index,u)):O(S,{...kD(S,u),...SD(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:v?vD:gD},j?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),yD={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},xD={outline:"none",overflowX:"auto",position:"relative"},wD=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),$D={position:dD(),top:0,width:"100%",zIndex:1};function kD(e,t){if("string"!=typeof e)return{context:t}}function SD(e,t){return{item:"string"==typeof e?void 0:t}}const OD=i.memo((function(){const t=ND("HeaderComponent"),n=BD("headerHeight"),r=ND("HeaderFooterTag"),a=yC(i.useMemo((()=>e=>{n(GC(e,"height"))}),[n]),!0,ND("skipAnimationFrameInResizeObserver")),o=ND("context");return t?e(r,{ref:a,children:e(t,{...kD(t,o)})}):null})),CD=i.memo((function(){const t=ND("FooterComponent"),n=BD("footerHeight"),r=ND("HeaderFooterTag"),a=yC(i.useMemo((()=>e=>{n(GC(e,"height"))}),[n]),!0,ND("skipAnimationFrameInResizeObserver")),o=ND("context");return t?e(r,{ref:a,children:e(t,{...kD(t,o)})}):null}));function TD({useEmitter:t,useEmitterValue:n,usePublisher:r}){return i.memo((function({children:i,style:a,...o}){const s=r("scrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("scrollerRef"),u=n("context"),p=n("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:m,scrollToCallback:f}=sD(s,c,l,d,void 0,p);return t("scrollTo",f),t("scrollBy",h),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...p?xD:yD,...a},tabIndex:0,...o,...kD(l,u),children:i})}))}function DD({useEmitter:t,useEmitterValue:n,usePublisher:r}){return i.memo((function({children:a,style:o,...s}){const l=r("windowScrollContainerState"),c=n("ScrollerComponent"),d=r("smoothScrollTargetReached"),u=n("totalListHeight"),p=n("deviation"),h=n("customScrollParent"),m=n("context"),f=i.useRef(null),g=n("scrollerRef"),{scrollByCallback:v,scrollerRef:b,scrollToCallback:y}=sD(l,d,c,g,h);return aD((()=>{var e;return b.current=h||(null==(e=f.current)?void 0:e.ownerDocument.defaultView),()=>{b.current=null}}),[b,h]),t("windowScrollTo",y),t("scrollBy",v),e(c,{ref:f,"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==u?{height:u+p}:{}},...s,...kD(c,m),children:a})}))}const jD=({children:t})=>{const n=i.useContext(rD),r=BD("viewportHeight"),a=BD("fixedItemHeight"),o=ND("alignToBottom"),s=ND("horizontalDirection"),l=yC(i.useMemo((()=>RO(r,(e=>GC(e,s?"width":"height")))),[r,s]),!0,ND("skipAnimationFrameInResizeObserver"));return i.useEffect((()=>{n&&(r(n.viewportHeight),a(n.itemHeight))}),[n,r,a]),e("div",{"data-viewport-type":"element",ref:l,style:wD(o),children:t})},_D=({children:t})=>{const n=i.useContext(rD),r=BD("windowViewportRect"),a=BD("fixedItemHeight"),o=ND("customScrollParent"),s=kC(r,o,ND("skipAnimationFrameInResizeObserver")),l=ND("alignToBottom");return i.useEffect((()=>{n&&(a(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,a]),e("div",{"data-viewport-type":"window",ref:s,style:wD(l),children:t})},ID=({children:t})=>{const n=ND("TopItemListComponent")||"div",r=ND("headerHeight"),i={...$D,marginTop:`${r}px`},a=ND("context");return e(n,{style:i,...kD(n,a),children:t})},ED=i.memo((function(n){const r=ND("useWindowScroll"),i=ND("topItemsIndexes").length>0,a=ND("customScrollParent"),o=ND("context"),s=a||r?LD:RD,l=a||r?_D:jD;return t(s,{...n,...kD(s,o),children:[i&&e(ID,{children:e(bD,{showTopList:!0})}),t(l,{children:[e(OD,{}),e(bD,{}),e(CD,{})]})]})})),{Component:MD,useEmitter:AD,useEmitterValue:ND,usePublisher:BD}=nD(hD,{required:{},optional:{restoreStateFrom:"restoreStateFrom",context:"context",followOutput:"followOutput",itemContent:"itemContent",groupContent:"groupContent",overscan:"overscan",increaseViewportBy:"increaseViewportBy",totalCount:"totalCount",groupCounts:"groupCounts",topItemCount:"topItemCount",firstItemIndex:"firstItemIndex",initialTopMostItemIndex:"initialTopMostItemIndex",components:"components",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",computeItemKey:"computeItemKey",defaultItemHeight:"defaultItemHeight",fixedItemHeight:"fixedItemHeight",itemSize:"itemSize",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"HeaderFooterTag",data:"data",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",alignToBottom:"alignToBottom",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",horizontalDirection:"horizontalDirection",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver"},methods:{scrollToIndex:"scrollToIndex",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollBy:"scrollBy",autoscrollToBottom:"autoscrollToBottom",getState:"getState"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",totalListHeightChanged:"totalListHeightChanged",itemsRendered:"itemsRendered",groupIndices:"groupIndices"}},ED),RD=TD({useEmitter:AD,useEmitterValue:ND,usePublisher:BD}),LD=DD({useEmitter:AD,useEmitterValue:ND,usePublisher:BD}),PD=MD,zD={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},FD={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:HD,floor:WD,max:VD,min:YD,round:UD}=Math;function qD(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function XD(e,t){return e&&e.width===t.width&&e.height===t.height}function KD(e,t){return e&&e.column===t.column&&e.row===t.row}const GD=uC((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:i,headerHeight:a,scrollBy:o,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},p,h,{didMount:m,propsReady:f},{customScrollParent:g,useWindowScroll:v,windowScrollContainerState:b,windowScrollTo:y,windowViewportRect:x},w])=>{const $=sC(0),k=sC(0),S=sC(zD),O=sC({height:0,width:0}),C=sC({height:0,width:0}),T=cC(),D=cC(),j=sC(0),_=sC(null),I=sC({column:0,row:0}),E=cC(),M=cC(),A=sC(!1),N=sC(0),B=sC(!0),R=sC(!1),L=sC(!1);VO(nC(m,oC(N),JO((([e,t])=>!!t))),(()=>{YO(B,!1)})),VO(nC(hC(m,B,C,O,N,R),JO((([e,t,n,r,,i])=>e&&!t&&0!==n.height&&0!==r.height&&!i))),(([,,,,e])=>{YO(R,!0),vT(1,(()=>{YO(T,e)})),KO(nC(c),(()=>{YO(t,[0,0]),YO(B,!0)}))})),XO(nC(M,JO((e=>null!=e&&e.scrollTop>0)),tC(0)),k),VO(nC(m,oC(M),JO((([,e])=>null!=e))),(([,e])=>{e&&(YO(O,e.viewport),YO(C,e.item),YO(I,e.gap),e.scrollTop>0&&(YO(A,!0),KO(nC(c,iC(1)),(e=>{YO(A,!1)})),YO(l,{top:e.scrollTop})))})),XO(nC(O,eC((({height:e})=>e))),u),XO(nC(hC(mC(O,XD),mC(C,XD),mC(I,((e,t)=>e&&e.column===t.column&&e.row===t.row)),mC(c)),eC((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),E),XO(nC(hC(mC($),r,mC(I,KD),mC(C,XD),mC(O,XD),mC(_),mC(k),mC(A),mC(B),mC(N)),JO((([,,,,,,,e])=>!e)),eC((([e,[t,n],r,i,a,o,s,,l,c])=>{const{column:d,row:u}=r,{height:p,width:h}=i,{width:m}=a;if(0===s&&(0===e||0===m))return zD;if(0===h){const t=bT(c,e);return function(e){return{...FD,items:e}}(qD(t,t+Math.max(s-1,0),o))}const f=ZD(m,h,d);let g,v;l?0===t&&0===n&&s>0?(g=0,v=s-1):(g=f*WD((t+u)/(p+u)),v=f*HD((n+u)/(p+u))-1,v=YD(e-1,VD(v,f-1)),g=YD(v,VD(0,g))):(g=0,v=-1);const b=qD(g,v,o),{bottom:y,top:x}=QD(a,r,i,b),w=HD(e/f);return{bottom:y,itemHeight:p,items:b,itemWidth:h,offsetBottom:w*p+(w-1)*u-y,offsetTop:x,top:x}}))),S),XO(nC(_,JO((e=>null!==e)),eC((e=>e.length))),$),XO(nC(hC(O,C,S,I),JO((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),eC((([e,t,{items:n},r])=>{const{bottom:i,top:a}=QD(e,r,t,n);return[a,i]})),QO(UC)),t);const P=sC(!1);XO(nC(c,oC(P),eC((([e,t])=>t||0!==e))),P);const z=dC(nC(hC(S,$),JO((([{items:e}])=>e.length>0)),oC(P),JO((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),eC((([[,e]])=>e-1)),QO())),F=dC(nC(mC(S),JO((({items:e})=>e.length>0&&0===e[0].index)),tC(0),QO())),H=dC(nC(mC(S),oC(A),JO((([{items:e},t])=>e.length>0&&!t)),eC((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),QO(YC),aC(0)));XO(H,h.scrollSeekRangeChanged),XO(nC(T,oC(O,C,$,I),eC((([e,t,n,r,i])=>{const a=fT(e),{align:o,behavior:s,offset:l}=a;let c=a.index;"LAST"===c&&(c=r-1),c=VD(0,c,YD(r-1,c));let d=JD(t,i,n,c);return"end"===o?d=UD(d-t.height+n.height):"center"===o&&(d=UD(d-t.height/2+n.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=lC(nC(S,eC((e=>e.offsetBottom+e.bottom))),0);return XO(nC(x,eC((e=>({height:e.visibleHeight,width:e.visibleWidth})))),O),{customScrollParent:g,data:_,deviation:j,footerHeight:i,gap:I,headerHeight:a,increaseViewportBy:e,initialItemCount:k,itemDimensions:C,overscan:n,restoreStateFrom:M,scrollBy:o,scrollContainerState:s,scrollHeight:D,scrollTo:l,scrollToIndex:T,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:v,viewportDimensions:O,windowScrollContainerState:b,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:L,initialTopMostItemIndex:N,totalListHeight:W,...p,endReached:z,propsReady:f,rangeChanged:H,startReached:F,stateChanged:E,stateRestoreInProgress:A,...w}}),WO(_T,SC,ST,VT,hT,YT,bC));function ZD(e,t,n){return VD(1,WD((e+n)/(WD(t)+n)))}function QD(e,t,n,r){const{height:i}=n;if(void 0===i||0===r.length)return{bottom:0,top:0};const a=JD(e,t,n,r[0].index);return{bottom:JD(e,t,n,r[r.length-1].index)+i,top:a}}function JD(e,t,n,r){const i=ZD(e.width,n.width,t.column),a=WD(r/i),o=a*n.height+VD(0,a-1)*t.row;return o>0?o+t.row:o}const ej=uC((()=>{const e=sC((e=>`Item ${e}`)),t=sC({}),n=sC(null),r=sC("virtuoso-grid-item"),i=sC("virtuoso-grid-list"),a=sC(uD),o=sC("div"),s=sC(zO),l=(e,n=null)=>lC(nC(t,eC((t=>t[e])),QO()),n),c=sC(!1),d=sC(!1);return XO(mC(d),c),{components:t,computeItemKey:a,context:n,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:o,itemClassName:r,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),tj=uC((([e,t])=>({...e,...t})),WO(GD,ej)),nj=i.memo((function(){const t=dj("gridState"),n=dj("listClassName"),r=dj("itemClassName"),a=dj("itemContent"),o=dj("computeItemKey"),s=dj("isSeeking"),l=uj("scrollHeight"),c=dj("ItemComponent"),d=dj("ListComponent"),u=dj("ScrollSeekPlaceholder"),p=dj("context"),h=uj("itemDimensions"),m=uj("gap"),f=dj("log"),g=dj("stateRestoreInProgress"),v=uj("reportReadyState"),b=yC(i.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();h({height:e,width:t})}m({column:mj("column-gap",getComputedStyle(e).columnGap,f),row:mj("row-gap",getComputedStyle(e).rowGap,f)})}),[l,h,m,f]),!0,!1);return aD((()=>{t.itemHeight>0&&t.itemWidth>0&&v(!0)}),[t]),g?null:e(d,{className:n,ref:b,...kD(d,p),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((n=>{const i=o(n.index,n.data,p);return s?e(u,{...kD(u,p),height:t.itemHeight,index:n.index,width:t.itemWidth},i):O(c,{...kD(c,p),className:r,"data-index":n.index,key:i},a(n.index,n.data,p))}))})})),rj=i.memo((function(){const t=dj("HeaderComponent"),n=uj("headerHeight"),r=dj("headerFooterTag"),a=yC(i.useMemo((()=>e=>{n(GC(e,"height"))}),[n]),!0,!1),o=dj("context");return t?e(r,{ref:a,children:e(t,{...kD(t,o)})}):null})),ij=i.memo((function(){const t=dj("FooterComponent"),n=uj("footerHeight"),r=dj("headerFooterTag"),a=yC(i.useMemo((()=>e=>{n(GC(e,"height"))}),[n]),!0,!1),o=dj("context");return t?e(r,{ref:a,children:e(t,{...kD(t,o)})}):null})),aj=({children:t})=>{const n=i.useContext(iD),r=uj("itemDimensions"),a=uj("viewportDimensions"),o=yC(i.useMemo((()=>e=>{a(e.getBoundingClientRect())}),[a]),!0,!1);return i.useEffect((()=>{n&&(a({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,a,r]),e("div",{ref:o,style:wD(!1),children:t})},oj=({children:t})=>{const n=i.useContext(iD),r=uj("windowViewportRect"),a=uj("itemDimensions"),o=dj("customScrollParent"),s=kC(r,o,!1);return i.useEffect((()=>{n&&(a({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,a]),e("div",{ref:s,style:wD(!1),children:t})},sj=i.memo((function({...n}){const r=dj("useWindowScroll"),i=dj("customScrollParent"),a=i||r?hj:pj,o=i||r?oj:aj,s=dj("context");return e(a,{...n,...kD(a,s),children:t(o,{children:[e(rj,{}),e(nj,{}),e(ij,{})]})})})),{Component:lj,useEmitter:cj,useEmitterValue:dj,usePublisher:uj}=nD(tj,{optional:{context:"context",totalCount:"totalCount",overscan:"overscan",itemContent:"itemContent",components:"components",computeItemKey:"computeItemKey",data:"data",initialItemCount:"initialItemCount",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"headerFooterTag",listClassName:"listClassName",itemClassName:"itemClassName",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",restoreStateFrom:"restoreStateFrom",initialTopMostItemIndex:"initialTopMostItemIndex",increaseViewportBy:"increaseViewportBy"},methods:{scrollTo:"scrollTo",scrollBy:"scrollBy",scrollToIndex:"scrollToIndex"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",stateChanged:"stateChanged",readyStateChanged:"readyStateChanged"}},sj),pj=TD({useEmitter:cj,useEmitterValue:dj,usePublisher:uj}),hj=DD({useEmitter:cj,useEmitterValue:dj,usePublisher:uj});function mj(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,gC.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const fj=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),gj=({children:t})=>{const[n,r]=o(-1);return e(fj.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:t}))},vj=I.div`
    overflow: hidden;
    border: 1px solid ${pl.Neutral[5]};
    border-radius: 4px;
    background: ${pl.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${fl.MaxWidth.mobileL} {
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
        background: ${pl.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,bj=I.div`
    background: transparent;
    padding: 0.5rem;
`,yj=I.ul`
    list-style-type: none;
`,xj=I.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${pl.Accent.Light[3]};

    ${e=>e.$active&&E`
            background: ${pl.Accent.Light[5]};
        `}
`,wj=I(Ve)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${pl.Primary};
`,$j=I.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,kj=I(We)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${pl.Primary};
`,Sj=I(He)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${pl.Accent.Light[2]};
`,Oj=I.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Cj=I(Wh)`
    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${pl.Primary};
`,Tj=I(Cj)`
    outline-offset: 0.25rem;
`,Dj=I(Cj)`
    padding: 0.5rem 1rem;
`,jj=I.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,_j=I.div`
    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,Ij=I(R)`
    ${e=>{const t="small"===e.$variant?1:1.125;return E`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${pl.Validation.Red.Icon};
`,Ej=e=>"small"===e?1:1.125,Mj=e=>E`
        height: ${Ej(e)}rem;
        width: ${Ej(e)}rem;
    `,Aj=I.div`
    background: ${pl.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,Nj=I.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,Bj=I(Hh)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Rj=I(Le)`
    color: ${pl.Neutral[3]};
    flex-shrink: 0;
    ${e=>Mj(e.$variant)}
`,Lj=I(bl)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${pl.Neutral[3]};
    cursor: pointer;

    ${e=>E`
            svg {
                ${Mj(e.$variant)}
            }
        `}
`,Pj=h(((n,r)=>{var{value:i,variant:a,onClear:o}=n,s=lt(n,["value","variant","onClear"]);return t(Aj,{children:[t(Nj,{children:[e(Rj,{$variant:a,"aria-hidden":!0}),e(Bj,Object.assign({ref:r,value:i,$variant:a},s))]}),i&&e(Lj,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:a},{children:e(Ae,{"aria-hidden":!0})}))]})})),zj=({listItems:r,multiSelect:i,selectedItems:s,disableItemFocus:l,itemsLoadState:c="success",itemTruncationType:d="end",itemMaxLines:p=2,labelDisplayType:h="inline",variant:g="default",listboxId:v,width:b,topScrollItem:y,onSelectItem:x,onSelectAll:w,onDismiss:$,onRetry:k,valueExtractor:S,listExtractor:O,renderListItem:C,renderCustomCallToAction:T,enableSearch:D,hideNoResultsDisplay:j,searchPlaceholder:_="Search",searchFunction:I,onSearch:E})=>{const{focusedIndex:M,setFocusedIndex:A}=f(fj),[N,B]=o(""),[R,L]=o(r),P=jd(c),z=Td(),F=a(),H=a(),W=a([]),V=a(),Y=a(null),U=e=>O?O(e):e.toString(),q=m((e=>!!CS(s,(t=>DS(t,e)))),[s]),X=Sd((()=>I(N))),K=Sd((()=>r.filter((e=>{var t;const n=U(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),a=N.trim().toLowerCase();return r.includes(a)||i&&i.includes(a)})))),G=(e,t)=>{A(t),null==x||x(e,(e=>S?S(e):e)(e))},Z=e=>{const t=e.target.value;B(t),null==E||E()},Q=()=>{var e;B(""),null===(e=V.current)||void 0===e||e.focus(),null==E||E()},J=()=>{null==k||k()};Od("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),M<R.length-1){const e=M+1;null===(t=W.current[e])||void 0===t||t.focus(),A(e)}break;case"ArrowUp":if(e.preventDefault(),M>0){const e=M-1;null===(n=W.current[e])||void 0===n||n.focus(),A(e)}else 0===M&&V.current&&(V.current.focus(),A(-1));break;case"Space":case"Enter":document.activeElement===W.current[M]&&(e.preventDefault(),R[M]&&G(R[M],M))}})),u((()=>{if(!y&&Y.current)return void Y.current.scrollTo({top:0});const e=setTimeout((()=>{const e=r.indexOf(y);Y.current&&-1!==e&&(Y.current.scrollToIndex({index:e}),A(e))}),0);return()=>clearTimeout(e)}),[W,r,A,y]),u((()=>{var e,t,n;if(z)return;if(l)return;const i=r.findIndex((e=>q(e)));V.current?(A(-1),setTimeout((()=>V.current.focus()),200)):M>0?(null===(e=Y.current)||void 0===e||e.scrollToIndex({index:M,align:"center"}),setTimeout((()=>{var e;return null===(e=W.current[M])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=Y.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),A(i),setTimeout((()=>{var e;return null===(e=W.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(n=Y.current)||void 0===n||n.scrollToIndex({index:0}),A(0),setTimeout((()=>{var e;return null===(e=W.current[0])||void 0===e?void 0:e.focus()}),200))}),[q,l,M,r,z,A]),u((()=>{z&&P&&(l||"success"===c&&V.current&&(A(-1),V.current.focus()))}),[z,P,c,A,l]),u((()=>{L(""===N?r:I?X():K())}),[X,K,r,I,N]);const ee=t=>i?e(t?kj:Sj,{"aria-hidden":!0}):t?e(wj,{"aria-hidden":!0}):e($j,{}),te=(t,n)=>{const r=U(t),i="string"==typeof r?r:r.title,a="string"==typeof r?void 0:r.secondaryLabel;return e(AO,{displayType:h,label:i,maxLines:p,selected:n,sublabel:a,truncationType:d,variant:g})},ne=(r,a)=>{if(!k||k&&"success"===c){const o=q(r),s=a===M;return e(xj,Object.assign({"aria-selected":o,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>G(r,a),onMouseEnter:()=>(e=>{A(e)})(a),ref:e=>{W.current[a]=e},role:"option",tabIndex:s?0:-1,$active:s},{children:C?C(r,{selected:o}):t(n,{children:[ee(o),te(r,o)]})}),((e,t)=>`item_${t}__${S?S(e):e}`)(r,a))}},re=()=>{if((D||I)&&"success"===c)return e(Pj,{ref:V,onChange:Z,value:N,placeholder:_,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Q,variant:g})},ie=()=>{if(i&&R.length>0&&!N&&"success"===c)return e(Oj,{children:e(Dj,Object.assign({onClick:w,type:"button",$variant:g},{children:0===s.length?"Select all":"Clear all"}))})},ae=()=>{if(!j&&(N||!D)&&0===R.length&&"success"===c)return t(jj,Object.assign({"data-testid":"list-no-results"},{children:[e(Ij,{"data-testid":"no-result-icon",$variant:g}),e(_j,Object.assign({$variant:g},{children:"No results found."}))]}))},oe=()=>{if(k&&"loading"===c){const n="small"===g?16:18;return t(jj,Object.assign({"data-testid":"list-loading"},{children:[e(ic,{$buttonStyle:"secondary",size:n}),e(_j,Object.assign({$variant:g},{children:"Loading..."}))]}))}},se=()=>{if(k&&"fail"===c)return t(jj,Object.assign({"data-testid":"list-fail"},{children:[e(Ij,{"data-testid":"load-error-icon",$variant:g}),e(_j,Object.assign({$variant:g},{children:"Failed to load."}))," ",e(Tj,Object.assign({onClick:J,type:"button",$variant:g},{children:"Try again."}))]}))},le=()=>{const t="test"===process.env.NODE_ENV;return e(yj,Object.assign({role:"listbox",id:v},{children:e(PD,Object.assign({ref:Y,style:{height:"100%"},data:R,customScrollParent:F.current,itemContent:(e,t)=>ne(t,e)},t?{initialItemCount:R.length}:{}),t?R.length:void 0)}))};return t(vj,Object.assign({"data-testid":"dropdown-container",ref:F,$width:b},{children:[t(bj,Object.assign({ref:H,"data-testid":"dropdown-list"},{children:[re(),ie(),ae(),oe(),se(),le()]})),(()=>{if(T)return e("div",Object.assign({"data-testid":"custom-cta"},{children:T($,R)}))})()]}))},Fj=I(Wh)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Hj=I.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Nl.Base};

    svg {
        color: ${pl.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Sl.BodySmall.fontSize:Sl.Body.fontSize;return E`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,Wj=h((({children:n,disabled:r,expanded:i,listboxId:a,popupRole:o,readOnly:s,variant:l},c)=>t(Fj,Object.assign({ref:c,type:"button","aria-expanded":i,"aria-haspopup":o,"data-testid":"selector",disabled:r,"aria-controls":a,$variant:l},{children:[n,!s&&e(Hj,Object.assign({$expanded:i,$variant:l},{children:e(he,{"aria-hidden":!0})}))]}))));var Vj=Symbol.for("immer-nothing"),Yj=Symbol.for("immer-draftable"),Uj=Symbol.for("immer-state"),qj="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function Xj(e,...t){if("production"!==process.env.NODE_ENV){const n=qj[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Kj=Object.getPrototypeOf;function Gj(e){return!!e&&!!e[Uj]}function Zj(e){return!!e&&(Jj(e)||Array.isArray(e)||!!e[Yj]||!!e.constructor?.[Yj]||i_(e)||a_(e))}var Qj=Object.prototype.constructor.toString();function Jj(e){if(!e||"object"!=typeof e)return!1;const t=Kj(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Qj}function e_(e,t){0===t_(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function t_(e){const t=e[Uj];return t?t.type_:Array.isArray(e)?1:i_(e)?2:a_(e)?3:0}function n_(e,t){return 2===t_(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function r_(e,t,n){const r=t_(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function i_(e){return e instanceof Map}function a_(e){return e instanceof Set}function o_(e){return e.copy_||e.base_}function s_(e,t){if(i_(e))return new Map(e);if(a_(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Jj(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[Uj];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const i=n[r],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Kj(e),t)}{const t=Kj(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function l_(e,t=!1){return d_(e)||Gj(e)||!Zj(e)||(t_(e)>1&&(e.set=e.add=e.clear=e.delete=c_),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>l_(t,!0)))),e}function c_(){Xj(2)}function d_(e){return Object.isFrozen(e)}var u_,p_={};function h_(e){const t=p_[e];return t||Xj(0,e),t}function m_(){return u_}function f_(e,t){t&&(h_("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function g_(e){v_(e),e.drafts_.forEach(y_),e.drafts_=null}function v_(e){e===u_&&(u_=e.parent_)}function b_(e){return u_={drafts_:[],parent_:u_,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function y_(e){const t=e[Uj];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function x_(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[Uj].modified_&&(g_(t),Xj(4)),Zj(e)&&(e=w_(t,e),t.parent_||k_(t,e)),t.patches_&&h_("Patches").generateReplacementPatches_(n[Uj].base_,e,t.patches_,t.inversePatches_)):e=w_(t,n,[]),g_(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Vj?e:void 0}function w_(e,t,n){if(d_(t))return t;const r=t[Uj];if(!r)return e_(t,((i,a)=>$_(e,r,t,i,a,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return k_(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,a=!1;3===r.type_&&(i=new Set(t),t.clear(),a=!0),e_(i,((i,o)=>$_(e,r,t,i,o,n,a))),k_(e,t,!1),n&&e.patches_&&h_("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function $_(e,t,n,r,i,a,o){if("production"!==process.env.NODE_ENV&&i===n&&Xj(5),Gj(i)){const o=w_(e,i,a&&t&&3!==t.type_&&!n_(t.assigned_,r)?a.concat(r):void 0);if(r_(n,r,o),!Gj(o))return;e.canAutoFreeze_=!1}else o&&n.add(i);if(Zj(i)&&!d_(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;w_(e,i),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||k_(e,i)}}function k_(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&l_(t,n)}var S_={get(e,t){if(t===Uj)return e;const n=o_(e);if(!n_(n,t))return function(e,t,n){const r=T_(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!Zj(r)?r:r===C_(e.base_,t)?(j_(e),e.copy_[t]=__(r,e)):r},has:(e,t)=>t in o_(e),ownKeys:e=>Reflect.ownKeys(o_(e)),set(e,t,n){const r=T_(o_(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=C_(o_(e),t),i=r?.[Uj];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,r)&&(void 0!==n||n_(e.base_,t)))return!0;j_(e),D_(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==C_(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,j_(e),D_(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=o_(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){Xj(11)},getPrototypeOf:e=>Kj(e.base_),setPrototypeOf(){Xj(12)}},O_={};function C_(e,t){const n=e[Uj];return(n?o_(n):e)[t]}function T_(e,t){if(!(t in e))return;let n=Kj(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Kj(n)}}function D_(e){e.modified_||(e.modified_=!0,e.parent_&&D_(e.parent_))}function j_(e){e.copy_||(e.copy_=s_(e.base_,e.scope_.immer_.useStrictShallowCopy_))}e_(S_,((e,t)=>{O_[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),O_.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&Xj(13),O_.set.call(this,e,t,void 0)},O_.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&Xj(14),S_.set.call(this,e[0],t,n,e[0])};function __(e,t){const n=i_(e)?h_("MapSet").proxyMap_(e,t):a_(e)?h_("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:m_(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=S_;n&&(i=[r],a=O_);const{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,s}(e,t);return(t?t.scope_:m_()).drafts_.push(n),n}function I_(e){if(!Zj(e)||d_(e))return e;const t=e[Uj];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=s_(e,t.scope_.immer_.useStrictShallowCopy_)}else n=s_(e,!0);return e_(n,((e,t)=>{r_(n,e,I_(t))})),t&&(t.finalized_=!1),n}var E_=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&Xj(6),void 0!==n&&"function"!=typeof n&&Xj(7),Zj(e)){const i=b_(this),a=__(e,void 0);let o=!0;try{r=t(a),o=!1}finally{o?g_(i):v_(i)}return f_(i,n),x_(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===Vj&&(r=void 0),this.autoFreeze_&&l_(r,!0),n){const t=[],i=[];h_("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}Xj(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;const i=this.produce(e,t,((e,t)=>{n=e,r=t}));return[i,n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Zj(e)||Xj(8),Gj(e)&&(e=function(e){Gj(e)||Xj(10,e);return I_(e)}(e));const t=b_(this),n=__(e,void 0);return n[Uj].isManual_=!0,v_(t),n}finishDraft(e,t){const n=e&&e[Uj];n&&n.isManual_||Xj(9);const{scope_:r}=n;return f_(r,t),x_(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=h_("Patches").applyPatches_;return Gj(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},M_=E_.produce;E_.produceWithPatches.bind(E_),E_.setAutoFreeze.bind(E_),E_.setUseStrictShallowCopy.bind(E_),E_.applyPatches.bind(E_),E_.createDraft.bind(E_),E_.finishDraft.bind(E_);var A_=R$,N_=fk,B_=r$,R_=za,L_=z$,P_=o$,z_=I$,F_=w$,H_=Object.prototype.hasOwnProperty;var W_=Pa((function(e){if(null==e)return!0;if(L_(e)&&(R_(e)||"string"==typeof e||"function"==typeof e.splice||P_(e)||F_(e)||B_(e)))return!e.length;var t=N_(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(z_(e))return!A_(e).length;for(var n in e)if(H_.call(e,n))return!1;return!0}));const V_=(e,t,n)=>{const r=M_(e,(e=>{for(let r=e.length-1;r>=0;r--){const i=e[r],a=U_(i.keyPath);if(i.checked=t.has(a),i.hasSubItems&&n&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?i.checked=!0:r&&(i.checked="mixed")}}}));return r},Y_=(e,t)=>{const[n,...r]=t;if(W_(e)||W_(n))return;const i=e.find((e=>e.key===n));return i&&r.length?Y_(i.subItems,r):i},U_=e=>e.join(","),q_=e=>new Set(e.map((e=>e.join(",")))),X_=I.li`
    display: ${e=>e.$visible?"flex":"none"};
`,K_=I.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${pl.Accent.Light[3]};

    ${e=>e.$active&&E`
            background: ${pl.Accent.Light[5]};
        `}
`,G_=I.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,Z_=I.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${pl.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return E`
                    transform: rotate(90deg);
                `}}
    }
`,Q_=I.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,J_=I.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,eI=I(Ve)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${pl.Primary};
`,tI=I(Ue)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${pl.Primary};
`,nI=({listItems:n,multiSelect:r,selectedKeyPaths:i,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:c=2,variant:d="default",listboxId:p,width:h,mode:m="default",selectableCategory:f,onSelectItem:v,onSelectAll:b,onRetry:y,enableSearch:x,hideNoResultsDisplay:w,searchPlaceholder:$="Search",onSearch:k})=>{const S=r||f,[O,C]=o(""),T=O.toLowerCase().trim(),[D,j]=o(!1),_=a(),I=a(),E=a([]),M=a(),A=Td(),[N,B]=o([]),[R,L]=o([]),P=D?R:N,z=g((()=>{let e=0;for(const t of N)t.level>e&&(e=t.level);return e}),[N]),[F,H]=o(0),[W,V]=o([]),[Y,U]=o(0),q=e=>{const t=e.target.value;C(t),""===t?j(!1):t.trim().length>=3&&j(!0),null==k||k()},X=()=>{var e;C(""),j(!1),null===(e=M.current)||void 0===e||e.focus(),null==k||k()},K=()=>{null==y||y()},G=()=>{if(0===i.size){const e=[],t=[];N.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==b||b(e,t)}else null==b||b([],[])},Z=Sd(((e,t)=>((e,t,n,r,i)=>{const a=[],o=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var p,h;const m=s?s.level+1:0,f=s?[...s.keyPath,d.key]:[d.key],g=U_(f),v={item:d,index:a.length,indexInParent:u,parentSetSize:e.length,keyPath:f,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:m,visible:0===m||i||(null==s?void 0:s.expanded),expanded:i,checked:t.has(g),hasSubItems:!!(null===(p=d.subItems)||void 0===p?void 0:p.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!r&&-1!==d.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(l.push(v),a.push(v),null===(h=d.subItems)||void 0===h?void 0:h.length){const e=o(d.subItems,v);if(n&&!0!==v.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?v.checked=!0:n&&(v.checked="mixed")}v.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),v.subItemIndexes=e.map((e=>e.index))}})),l};return o(e,void 0),a})(e,i,r,T,t))),Q=Sd((e=>{return i.size?(t=Z(e,!1),M_(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>M_(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const i=e[t].keyPath.length;if(i>r)r=i;else if(i<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],i=r.keyPath.slice(0,-1),a=e[n].keyPath.slice(0,i.length);DS(i,a)&&(r.visible=!0)}return e})))(Z(e,!1));var t})),J=Sd((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(T))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),ee=Sd((()=>{B((e=>V_(e,i,r))),D&&L((e=>V_(e,i,r)))})),te=(e,t,n)=>{const r=((e,t,n)=>M_(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],a=e[t.parentIndex],o=t.keyPath.slice(0,r.length);if(!DS(r,o))break;t.visible=n&&a.expanded&&a.visible}})))(P,e,t);H(e),U(n),D?L(r):B(r)};Od("keydown",(e=>{switch(e.code){case"ArrowDown":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return e[r]})(P,(e=>e.visible),F+1);t&&(U((e=>e+1)),H(t.index),E.current[t.index].focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return e[r]})(P,(e=>e.visible),F-1);t?(U((e=>e-1)),H(t.index),E.current[t.index].focus()):0===Y&&M.current&&(M.current.focus(),U(-1),H(-1));break}case"ArrowRight":e.preventDefault(),te(F,!0,Y);break;case"ArrowLeft":e.preventDefault(),te(F,!1,Y);break;case"Space":if(document.activeElement===E.current[F]){e.preventDefault();const t=P[F];if(t.hasSubItems&&!S)return;null==v||v(t)}}})),u((()=>{let e;"default"===m?e=Q(n):"expand"===m?e=Z(n,!0):"collapse"===m&&(e=Z(n,!1)),B(e)}),[Z,Q,n,m]),u((()=>{V(P.filter((e=>e.visible)))}),[D,P]),u((()=>{ee()}),[r,i,ee]),u((()=>{if(D&&O.trim().length>=3){const e=J(n),t=(e=>M_(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(Z(e,!1));L(t)}}),[J,Z,n,D,O]),u((()=>{A||(M.current?(H(-1),U(-1),setTimeout((()=>{var e;return null===(e=M.current)||void 0===e?void 0:e.focus()}),200)):E.current[F]?setTimeout((()=>{var e;return null===(e=E.current[F])||void 0===e?void 0:e.focus()}),200):(H(0),U(0),setTimeout((()=>{var e;return null===(e=E.current[0])||void 0===e?void 0:e.focus()}),200)))}),[F,Y,A]);const ne=()=>{if(x&&"success"===s)return e(Pj,{ref:M,onChange:q,value:O,placeholder:$,"data-testid":"search-input","aria-label":"Enter text to search",onClear:X,variant:d})},re=()=>{if(r&&!D&&N.length>0&&"success"===s)return e(Oj,{children:e(Dj,Object.assign({onClick:G,type:"button",$variant:d},{children:0===i.size?"Select all":"Clear all"}))})},ie=()=>{if(!w&&D&&0===R.length&&"success"===s)return t(jj,Object.assign({"data-testid":"list-no-results"},{children:[e(Ij,{$variant:d}),e(_j,Object.assign({$variant:d},{children:"No results found."}))]}))},ae=()=>{if(y&&"loading"===s){const n="small"===d?16:18;return t(jj,Object.assign({"data-testid":"list-loading"},{children:[e(ic,{$buttonStyle:"secondary",size:n}),e(_j,Object.assign({$variant:d},{children:"Loading..."}))]}))}},oe=()=>{if(y&&"fail"===s)return t(jj,Object.assign({"data-testid":"list-fail"},{children:[e(Ij,{"data-testid":"load-error-icon",$variant:d}),e(_j,Object.assign({$variant:d},{children:"Failed to load."}))," ",e(Tj,Object.assign({onClick:K,type:"button",$variant:d},{children:"Try again."}))]}))},se=t=>{if(r)switch(t.checked){case"mixed":return e(tI,{"aria-hidden":!0});case!0:return e(kj,{"aria-hidden":!0});default:return e(Sj,{"aria-hidden":!0})}if(!t.hasSubItems)return e(J_,Object.assign({$hasNestedSiblings:t.hasNestedSiblings||0===t.level},{children:t.checked&&e(eI,{"aria-hidden":!0})}))},le=(n,i)=>{const{level:a,visible:o,expanded:s,keyPath:d,checked:u,hasSubItems:p,indexInParent:h,parentSetSize:m}=n,f=n.index,g=Y===i,b=p&&!S;return t(X_,Object.assign({$visible:o},{children:[z>0&&e(G_,{$level:a}),z>0&&!p&&r&&e(Q_,{}),t(K_,Object.assign({"aria-checked":u,"aria-selected":!!u,"aria-expanded":p?s:void 0,"aria-level":a+1,"aria-posinset":h+1,"aria-setsize":m,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?te(f,!s,i):((e,t)=>{U(t),H(e),null==v||v(P[e])})(f,i)},onMouseEnter:()=>((e,t)=>{H(t.index),U(e)})(i,n),ref:e=>E.current[n.index]=e,role:"treeitem",tabIndex:g?0:-1,$active:g,$toggleable:b},{children:[p&&e(Z_,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),te(f,!s,i)},$expanded:s},{children:e(Ye,{})})),se(n),e(AO,{bold:p,searchTerm:D?T:void 0,label:n.item.label,selected:!!u,truncationType:l,maxLines:c})]}))]}),`[${d.join("---")}]`)},ce=()=>{const t="test"===process.env.NODE_ENV;return e("div",Object.assign({"aria-multiselectable":r,id:p,ref:I,role:"tree"},{children:e(PD,Object.assign({style:{height:"100%"},customScrollParent:_.current,data:W,itemContent:(e,t)=>le(t,e)},t?{initialItemCount:W.length}:{}),t?W.length:void 0)}))};return e(vj,Object.assign({"data-testid":"dropdown-container",ref:_,$width:h},{children:t(bj,Object.assign({"data-testid":"nested-dropdown-list"},{children:[ne(),re(),ie(),ae(),oe(),ce()]}))}))},rI=({selectedOptions:t,placeholder:n="Select",options:r,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:p=!1,searchFunction:h,searchPlaceholder:m,valueExtractor:f,listExtractor:g,onSelectOptions:v,onShowOptions:b,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:k,hideNoResultsDisplay:S,renderCustomCallToAction:O,onBlur:C,variant:T="default",readOnly:D,alignment:j,dropdownZIndex:_})=>{const[I,E]=o(t||[]),[M,A]=o(!1),[N,B]=o(!1),[R]=o((()=>$d.generate())),L=a(),P=a();u((()=>{E(t||[])}),[t]);const z=()=>{I&&I.length>0?(E([]),U([])):(E(r),U(r))},F=(e,t)=>{const n=[...I],r=OS(I,(e=>(f?f(e):e)===t));r>-1?n.splice(r,1):n.push(e),E(n),U(n)},H=()=>{M&&(A(!1),Y(!1))},W=()=>{N||M||B(!0)},V=e=>{N&&!M&&L.current&&!L.current.contains(e.relatedTarget)&&(B(!1),null==C||C())},Y=e=>{!e&&y&&y(),e&&b&&b()},U=e=>{v&&v(e)};return e(gj,{children:e(Nh,{enabled:!D&&!i,isOpen:M,renderElement:()=>e(zh,Object.assign({className:l,"data-testid":c,id:d,ref:L,tabIndex:-1,onFocus:W,onBlur:V,$focused:N,$disabled:i,$readOnly:D,$error:s},{children:e(Wj,Object.assign({ref:P,disabled:i,expanded:M,listboxId:R,popupRole:"listbox",readOnly:D,variant:T},{children:e(Th,Object.assign({$disabled:i},{children:I&&0!==I.length?e(Dh,Object.assign({$variant:T},{children:r&&I.length===r.length?"All selected":`${I.length} selected`})):e(jh,Object.assign({truncateType:$,$variant:T},{children:n}))}))}))})),renderDropdown:({elementWidth:t})=>e(zj,{listboxId:R,listItems:r,onSelectItem:F,onDismiss:H,valueExtractor:f,listExtractor:g,enableSearch:p,searchFunction:h,searchPlaceholder:m,multiSelect:!0,selectedItems:I,onSelectAll:z,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:k,hideNoResultsDisplay:S,renderCustomCallToAction:O,variant:T,width:t}),onOpen:()=>{A(!0),Y(!0),B(!0)},onClose:e=>{A(!1),Y(!1),"click"!==e&&(B(!1),null==C||C())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1),Y(!1)},clickToToggle:!0,offset:8,alignment:j,fitAvailableHeight:!0,customZIndex:_})})},iI=(e,t)=>{const[n,...r]=t;if(W_(e)||!n)return;const i=e.find((e=>e.key===n));return i?r.length?iI(i.subItems,r):i:void 0},aI=(e,t)=>{const n=[];for(const r of e)r.subItems?n.push(...aI(r.subItems,[...t,r.key])):n.push({value:r.value,label:r.label,keyPath:[...t,r.key]});return n},oI=({placeholder:t="Select",options:n,disabled:r,error:i,className:s,"data-testid":l,id:c,selectedKeyPaths:d,mode:p,valueToStringFunction:h,enableSearch:m,searchPlaceholder:f,hideNoResultsDisplay:g,readOnly:v,onSearch:b,onSelectOptions:y,onShowOptions:x,onHideOptions:w,onRetry:$,onBlur:k,optionsLoadState:S="success",optionTruncationType:O="end",variant:C,alignment:T,dropdownZIndex:D})=>{const j=n,[_,I]=o(d?q_(d):new Set),[E,M]=o([]),[A,N]=o(!1),[B,R]=o(!1),[L]=o((()=>$d.generate())),P=a(),z=a(),F=a();u((()=>{const e=d||[],t=((e,t)=>{const n=[];for(let r=0;r<t.length;r++){const i=t[r],a=iI(e,i);a&&n.push({value:a.value,label:a.label,keyPath:i})}return n})(j,e);I(q_(e)),M(t)}),[d,j]);const H=(e,t)=>{const n=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));I(q_(e)),M(n),K(e,n)},W=e=>{const t=G(e),n=t.map((e=>e.keyPath));M(t),I(q_(n)),K(n,t)},V=()=>{B||A||R(!0)},Y=e=>{B&&!A&&P.current&&!P.current.contains(e.relatedTarget)&&(R(!1),null==k||k())},U=()=>{const{label:e,value:t}=E[0];return E.length>1?`${E.length} selected`:h?h(t)||t.toString():e},q=e=>{if("middle"===O){let t=0;return F&&F.current&&(t=F.current.getBoundingClientRect().width),kd.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&w&&w(),e&&x&&x()},K=(e,t)=>{if(y){const n=t.map((e=>e.value));y(e,n)}},G=e=>{if(!0===e.checked)return E.filter((t=>{const n=t.keyPath.slice(0,e.keyPath.length);return!DS(e.keyPath,n)}));{const t=[...E],n=e.hasSubItems?((e,t)=>{const n=iI(e,t);return n&&n.subItems?aI(n.subItems,t):[]})(j,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return n.forEach((e=>{E.find((t=>DS(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(Nh,{enabled:!v&&!r,isOpen:A,renderElement:()=>e(zh,Object.assign({className:s,"data-testid":l,id:c,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:B,$disabled:r,$readOnly:v,$error:i},{children:e(Wj,Object.assign({ref:z,disabled:r,expanded:A,listboxId:L,popupRole:"tree",readOnly:v,variant:C},{children:e(Th,Object.assign({ref:F,$disabled:r},{children:W_(E)?e(jh,Object.assign({truncateType:O},{children:t})):e(Dh,Object.assign({truncateType:O},{children:q(U())}))}))}))})),renderDropdown:({elementWidth:t})=>e(nI,{listboxId:L,listItems:j,multiSelect:!0,selectedKeyPaths:_,itemsLoadState:S,itemTruncationType:O,enableSearch:m,searchPlaceholder:f,hideNoResultsDisplay:g,onSelectItem:W,onSelectAll:H,onRetry:$,onSearch:b,variant:C,mode:p,width:t}),onOpen:()=>{N(!0),X(!0),R(!0)},onClose:e=>{N(!1),X(!1),"click"!==e&&(R(!1),null==k||k())},onDismiss:()=>{var e;null===(e=z.current)||void 0===e||e.focus(),N(!1),X(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:D})},sI=({placeholder:t="Select",options:n,disabled:r,error:i,className:s,"data-testid":l,id:c,selectedKeyPath:d,mode:p,valueToStringFunction:h,enableSearch:m,searchPlaceholder:f,selectableCategory:g,hideNoResultsDisplay:v,readOnly:b,onBlur:y,onSearch:x,onSelectOption:w,onShowOptions:$,onHideOptions:k,onRetry:S,optionsLoadState:O="success",optionTruncationType:C="end",variant:T,alignment:D,dropdownZIndex:j})=>{const _=n,[I,E]=o(d?q_([d]):new Set),[M,A]=o(),[N,B]=o(!1),[R,L]=o(!1),[P]=o((()=>$d.generate())),z=a(),F=a(),H=a();u((()=>{E(d?q_([d]):new Set);const e=Y_(_,d||[]);A(null!=e?e:void 0)}),[d,_]);const W=e=>{var t;const{keyPath:n,item:{label:r,value:i}}=e;E(q_([n])),A({label:r,value:i}),B(!1),X(!1),null===(t=F.current)||void 0===t||t.focus(),null==w||w(n,i)},V=()=>{R||N||L(!0)},Y=e=>{R&&!N&&z.current&&!z.current.contains(e.relatedTarget)&&(L(!1),null==y||y())},U=()=>{const{label:e,value:t}=M;return h?h(t)||t.toString():e},q=e=>{if("middle"===C){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),kd.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&k&&k(),e&&$&&$()};return e(Nh,{enabled:!b&&!r,isOpen:N,renderElement:()=>e(zh,Object.assign({className:s,"data-testid":l,id:c,ref:z,tabIndex:-1,onFocus:V,onBlur:Y,$focused:R,$disabled:r,$readOnly:b,$error:i},{children:e(Wj,Object.assign({ref:F,disabled:r,expanded:N,listboxId:P,popupRole:"tree",readOnly:b,variant:T},{children:e(Th,Object.assign({ref:H,$disabled:r},{children:W_(M)?e(jh,Object.assign({truncateType:C},{children:t})):e(Dh,Object.assign({truncateType:C},{children:q(U())}))}))}))})),renderDropdown:({elementWidth:t})=>e(nI,{listboxId:P,listItems:_,selectedKeyPaths:I,selectableCategory:g,itemsLoadState:O,itemTruncationType:C,enableSearch:m,searchPlaceholder:f,hideNoResultsDisplay:v,onSelectItem:W,onRetry:S,onSearch:x,variant:T,mode:p,width:t}),onOpen:()=>{B(!0),X(!0),L(!0)},onClose:e=>{B(!1),X(!1),"click"!==e&&(L(!1),null==y||y())},onDismiss:()=>{var e;null===(e=F.current)||void 0===e||e.focus(),B(!1),X(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:j})};var lI=function(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n};var cI=function(e){return function(t,n,r){for(var i=-1,a=Object(t),o=r(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===n(a[l],l,a))break}return t}}(),dI=V$;var uI=z$;var pI=function(e,t){return function(n,r){if(null==n)return n;if(!uI(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}((function(e,t){return e&&cI(e,t,dI)}));var hI=lI,mI=pI,fI=pS,gI=function(e,t,n,r,i){return i(e,(function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)})),n},vI=za;var bI=function(e,t,n){var r=vI(e)?hI:gI,i=arguments.length<3;return r(e,fI(t),n,i,mI)},yI=Pa(bI);const xI=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],wI=(e,t,n,r)=>n?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r;var $I;!function(e){e.getCountries=()=>[].concat(...xI.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:wI("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const n=e.replace(/[\s()]+/g,""),{format:r}=t,i=r.split(" ");i.shift();const a=i.join(" ");return yI(a,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[n,...r]=e.remainingText;return{formattedText:e.formattedText+n,remainingText:r}}),{formattedText:"",remainingText:n}).formattedText}}($I||($I={}));const kI=t=>{var{onChange:n,value:r,allowClear:i,onClear:s,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:p="Select",optionSearchPlaceholder:h,enableSearch:m,onHideOptions:f,onShowOptions:g,placeholder:v,autoComplete:b}=t,y=lt(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=o($I.getCountries()),[w,$]=o(void 0),[k,S]=o(""),O=a(),C=Dd({ref:O,formatter:e=>$I.formatNumber(e.replace(/[^0-9]/g,""),w)});u((()=>{const e=x.filter((e=>e.countryCode===SI(null==r?void 0:r.countryCode)))[0];$(e),S($I.formatNumber(null==r?void 0:r.number,e))}),[r]);const T=e=>{j(k,e),n&&D(k,e)},D=(e,t)=>{const r=$I.formatNumber(e,t);n({number:r.replace(/[\s()]+/g,""),countryCode:t&&OI(t.countryCode)})},j=(e,t)=>{S($I.formatNumber(e,t)),$(t)};return e(cO,Object.assign({ref:O,value:k,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=C();t(),j(e,w),n&&D(e,w)},allowClear:i&&!!k,onClear:()=>{s?s():S("")},onBlur:l,error:c,placeholder:v,addon:d?{type:"label",attributes:{value:OI(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:p,options:x,selectedOption:w,enableSearch:m,searchPlaceholder:h,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:OI(e.countryCode)}),onSelectOption:T,onHideOptions:f,onShowOptions:g}},inputMode:"numeric",autoComplete:b},y))},SI=e=>e?e.replace("+",""):"",OI=e=>e?e.includes("+")?e:`+${e}`:"",CI=({className:r,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:p=!1,disabled:h=!1,error:f,valueExtractor:g,listExtractor:v,displayValueExtractor:b=e=>e.toString(),onSelectOption:y})=>{const x=s&&b(s),[w,$]=o(x||""),[k,S]=o(x||""),[O,C]=o([]),[T,D]=o(!0),[j,_]=o(!1),[I,E]=o(!!s),[M,A]=o(s),N=a(c),B=e=>ct(void 0,void 0,void 0,(function*(){_(!1),D(!0);try{const t=yield N.current(e);S(e),C(t),D(!1)}catch(e){_(!0)}})),R=m(fp((e=>B(e)),500,{leading:!1,trailing:!0}),[]);u((()=>{N.current=c}),[c]),u((()=>{w&&w.length>=l&&w!==k?R(w):R.cancel(),""===w&&M&&(y&&y(void 0,void 0),z(),A(void 0)),s&&w!==b(s)&&E(!1)}),[w,s]),u((()=>{$(s?b(s):""),z(s),A(s)}),[s]);const L=e=>{$(e.target.value)},P=(e,t)=>{y&&y(e,t)},z=e=>{S(e?b(e):""),E(!!e),C([]),D(!0)},F=()=>{$(""),y&&y(void 0,void 0),z()},H=()=>{I||M?(z(M),$(b(M)),y&&y(M,V(M)),A(M)):F()},W=()=>w&&w.length>=l&&!I,V=e=>g?g(e):e,Y=()=>e(ow,{type:"text",value:w,onChange:L,placeholder:d,readOnly:p,disabled:h,allowClear:!0,onClear:F,styleType:"no-border",onBlur:w.length<l?H:void 0});return t(_h,Object.assign({className:r,show:W(),error:f&&!W(),disabled:h,readOnly:p,testId:i,onBlur:H},{children:[e(p?n:kh,{children:Y()}),!p&&W()&&e(Ch,{}),e(QS,{listItems:O,onSelectItem:P,valueExtractor:g,listExtractor:v,itemsLoadState:j?"fail":T?"loading":"success",visible:W(),disableItemFocus:!0,onRetry:()=>B(w),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))},TI=I.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,DI=I(rw)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,jI=I($h)`
    padding-right: 2.75rem;
`,_I=n=>{var{selectedOptions:r,placeholders:i={from:"Select",to:"Select"},options:s,disabled:l,className:c,readOnly:d,error:p,"data-testid":h,id:m,enableSearch:f=!1,searchFunction:g,searchPlaceholder:v,valueExtractor:b,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:k,onShowOptions:S,onHideOptions:O,onRetry:C,optionsLoadState:T={from:"success",to:"success"},optionTruncationType:D="middle",renderCustomSelectedOption:j,renderListItem:_,renderCustomCallToAction:I}=n,E=lt(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[M,A]=o(),[N,B]=o(),R=a(),L={from:a(),to:a()},[P,z]=o("none");u((()=>{A(null==r?void 0:r.from),B(null==r?void 0:r.to)}),[r]);const F=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||z("from"===e?"from":"to"===e&&M?"to":"from")},H=e=>{const t="from"===e?M:N;return w?w(t):b?b(t):null==t?void 0:t.toString()},W=(e,t)=>{if("middle"===D){let n=0;return L[e]&&L[e].current&&(n=L[e].current.getBoundingClientRect().width),kd.truncateOneLine((e=>"string"==typeof e?e:y(e)||e.toString())(t),n,120,8)}return t},V=e=>{!e&&O&&O(),e&&S&&S()},Y=t=>{const n="from"===t?M:N;return n?j?j(n):e(Dh,Object.assign({truncateType:D},{children:W(t,H(t))})):e(jh,Object.assign({truncateType:D},{children:W(t,i[t])}))},U=t=>e(Th,Object.assign({onClick:F(t),ref:L[t],$disabled:l},{children:Y(t)}));return t(_h,Object.assign({show:"none"!==P,"data-testid":E["data-testid"],error:p&&!("none"!==P),disabled:l,readOnly:d,testId:h,onBlur:()=>{V(!1),z("none"),M&&N||(B(void 0),A(void 0))},className:c},{children:[t(TI,{children:[e(jI,Object.assign({type:"button","data-testid":m||"selector",disabled:l,ref:R,onClick:F()},E,{children:t(dm,Object.assign({currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})()},{children:[U("from"),U("to")]}))})),"none"===P&&M&&N&&!d&&!l&&e(DI,Object.assign({onClick:e=>{e.stopPropagation(),A(void 0),B(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:e(iw,{"aria-hidden":!0})}))]}),"none"!==P&&e(Ch,{}),(()=>{if("none"===P)return null;const t=s[P];if(t&&t.length>0){const n="from"===P?M:N;return e(QS,{listItems:t,onSelectItem:(e,t)=>{return n=e,r=t,"from"===(i=P)?A(n):B(n),V(!1),R&&R.current&&R.current.focus(),$&&$({[i]:n},r),void("from"===i?(B(void 0),z("to"),V(!0)):z("none"));var n,r,i},onDismiss:()=>(z("none"),V(!1),R&&R.current&&R.current.focus(),void(M&&N||(B(void 0),A(void 0)))),valueExtractor:b,listExtractor:x,listStyleWidth:k,visible:!0,enableSearch:f,searchPlaceholder:v,searchFunction:g,"data-testid":`${P}-dropdown-list`,selectedItems:n?[n]:[],onRetry:C,itemsLoadState:T[P],itemTruncationType:D,renderListItem:_,renderCustomCallToAction:I})}return null})()]}))},II=({selectedOption:t,placeholder:n="Select",options:r,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:p=!1,searchFunction:h,searchPlaceholder:m,valueExtractor:f,valueToStringFunction:g,listExtractor:v,displayValueExtractor:b,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:k="success",optionTruncationType:S="end",renderCustomSelectedOption:O,renderListItem:C,hideNoResultsDisplay:T,renderCustomCallToAction:D,onBlur:j,variant:_="default",readOnly:I,alignment:E,dropdownZIndex:M})=>{const[A,N]=o(t),[B,R]=o(!1),[L,P]=o(!1),[z]=o((()=>$d.generate())),F=a(),H=a(),W=a();u((()=>{N(t)}),[t]);const V=(e,t)=>{var n;null===(n=H.current)||void 0===n||n.focus(),N(e),R(!1),K(!1),null==y||y(e,t)},Y=()=>{B&&(R(!1),K(!1))},U=()=>{L||B||P(!0)},q=e=>{L&&!B&&F.current&&!F.current.contains(e.relatedTarget)&&(P(!1),null==j||j())},X=e=>{if("middle"===S){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),kd.truncateOneLine((e=>"string"==typeof e?e:g(e)||e.toString())(e),t,120,8)}return e},K=e=>{e?null==x||x():null==w||w()};return e(gj,{children:e(Nh,{enabled:!I&&!i,isOpen:B,renderElement:()=>e(zh,Object.assign({className:l,"data-testid":c,id:d,ref:F,tabIndex:-1,onFocus:U,onBlur:q,$focused:L,$disabled:i,$readOnly:I,$error:s},{children:e(Wj,Object.assign({ref:H,disabled:i,expanded:B,listboxId:z,popupRole:"listbox",readOnly:I,variant:_},{children:e(Th,Object.assign({ref:W,$disabled:i},{children:A?O?O(A):e(Dh,Object.assign({truncateType:S,$variant:_},{children:X(b?b(A):f?f(A):A.toString())})):e(jh,Object.assign({truncateType:S,$variant:_},{children:n}))}))}))})),renderDropdown:({elementWidth:t})=>e(zj,{listboxId:z,listItems:r,onSelectItem:V,onDismiss:Y,valueExtractor:f,listExtractor:v,enableSearch:p,searchPlaceholder:m,searchFunction:h,selectedItems:A?[A]:[],onRetry:$,itemsLoadState:k,itemTruncationType:S,renderListItem:C,hideNoResultsDisplay:T,renderCustomCallToAction:D,variant:_,width:t}),onOpen:()=>{R(!0),K(!0),P(!0)},onClose:e=>{R(!1),K(!1),"click"!==e&&(P(!1),null==j||j())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),R(!1),K(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:M})})},EI=I.div`
    overflow: hidden;
    border: 1px solid ${pl.Neutral[5]};
    border-radius: 4px;
    background: ${pl.Neutral[8]};
    padding: 1rem;
    min-width: 23rem;

    ${fl.MaxWidth.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }
`,MI=I.div`
    display: flex;
    align-items: baseline;
`,AI=I.div`
    margin: 0 0.5rem;
`,NI=I.div`
    ${e=>_l.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return E`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,BI=I(NI)`
    color: ${pl.Neutral[3]};
`,RI=n=>{var{alignment:r="left",className:i,disabled:s,dropdownZIndex:l,error:c,histogramSlider:d,id:p,onBlur:h,onChange:m,onChangeEnd:f,optionTruncationType:g="end",placeholder:v="Select",rangeLabelPrefix:b,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$}=n,k=lt(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:S,bins:O=[],renderEmptyView:C,ariaLabels:T}=d,[D,j]=o(Y()),[_,I]=o(!1),[E,M]=o(!1),[A]=o((()=>$d.generate())),N=O.map((e=>e.minValue)),B=Math.min(...N),R=a(),L=a(),P=a(),z=k["data-testid"]||"select-histogram";u((()=>{$!==D&&j(Y())}),[$]);const F=e=>{j(e),null==m||m(e)},H=e=>{j(e),null==f||f(e)},W=()=>{E||_||M(!0)},V=e=>{E&&!_&&R.current&&!R.current.contains(e.relatedTarget)&&(M(!1),null==h||h())};function Y(){return null!=$?$:[B,B+S]}const U=e=>w?w(e):t(Il.Body,{children:[b,e,y]});return e(gj,{children:e(Nh,{enabled:!x&&!s,isOpen:_,renderElement:()=>e(zh,Object.assign({className:i,"data-testid":z,id:p,ref:R,tabIndex:-1,onFocus:W,onBlur:V,$focused:E,$disabled:s,$readOnly:x,$error:c},{children:e(Wj,Object.assign({ref:L,disabled:s,expanded:_,listboxId:A,popupRole:"dialog",readOnly:x,variant:"default"},{children:e(Th,Object.assign({ref:P,$disabled:s},{children:N&&0!==N.length?t(MI,{children:[U(D[0]),e(AI,{children:"-"}),U(D[1])]}):e(BI,Object.assign({truncateType:g,$variant:"default"},{children:v}))}))}))})),renderDropdown:({elementWidth:t})=>e(EI,Object.assign({style:{width:t}},{children:e(tw,{interval:S,value:D,bins:O,onChange:F,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:C,ariaLabels:T})})),onOpen:()=>{I(!0)},onClose:()=>{I(!1)},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),I(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:l})})},LI=t=>{var{value:n,ariaLabel:r,onChange:i,onChangeEnd:a}=t,s=lt(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=o(d());u((()=>{n!==l[0]&&c(d())}),[n]);function d(){return null!=n?[n]:[0]}return e(Kx,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==i||i(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==a||a(t)},ariaLabels:r?[r]:void 0}))},PI=I(Il.H6)`
    text-align: right;
    color: ${pl.Neutral[3]};

    ${e=>{if(e.disabled)return E`
                color: ${pl.Neutral[4](e)};
            `}}
`,zI=({value:t,maxLength:r,disabled:a,renderCustomCounter:s})=>{const[l,c]=o("");u((()=>{c(d(`${t||""}`))}),[t,r]);const d=e=>{if(s)return s(r,e.toString().length);{const t=r-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(n,{children:i.isValidElement(l)?l:e(PI,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:a},{children:l}))})},FI=I.div`
    display: flex;
    flex-direction: column;
`,HI=I.textarea`
    border: 1px solid ${pl.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Nl.Base};

    ${_l.getTextStyle("Body","regular")}
    color: ${pl.Neutral[1]};
    background: ${pl.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${pl.Accent.Light[1]};
        box-shadow: ${Xl.InputBoxShadow};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${pl.Neutral[3]};
    }

    ${e=>e.readOnly?E`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?E`
                background: ${pl.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${pl.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?E`
                border: 1px solid ${pl.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${pl.Validation.Red.Border(e)};
                    box-shadow: ${Xl.InputErrorBoxShadow};
                }
            `:void 0}
`,WI=i.forwardRef(((t,n)=>{var{value:r,disabled:i,error:a,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:p}=t,h=lt(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[m,f]=o(r);u((()=>{f(r)}),[r]);return e(HI,Object.assign({ref:n,disabled:i,value:l?l+(null!=m?m:""):m,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const n=t.slice(l.length),r=c?c(n):n;if(f(r),e.target.value=l+r,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:r})});d(t)}}else{const n=c?c(null!=t?t:""):t;f(n),e.target.value=n,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},error:a,rows:s,maxLength:l?l.length+p:p},h))})),VI=i.forwardRef(((n,r)=>{var{value:i,disabled:a,rows:s=5,onChange:l,transformValue:c,prefix:d,maxLength:p,renderCustomCounter:h}=n,m=lt(n,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[f,g]=o(i);u((()=>{g(i)}),[i]);return t(FI,{children:[e(WI,Object.assign({ref:r,disabled:a,value:f,rows:s||5,onChange:e=>{const t=e.target.value;g(t),l&&l(e)},prefix:d,transformValue:c,maxLength:p},m)),p&&e(zI,{disabled:a,value:f,maxLength:p,renderCustomCounter:h})]})})),YI=I.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,UI=I.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,qI=I(bx)`
    margin-top: 0;
`,XI=i.forwardRef(((r,i)=>{const{label:a,value:s,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":p,onChange:h,layoutType:m,mobileCols:f,tabletCols:g,desktopCols:v,transformValue:b,prefix:y=""}=r,x=lt(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","transformValue","prefix"]),[w,$]=o(s);u((()=>{$(s)}),[s]);return t(Ix,Object.assign({id:c,label:a,disabled:x.disabled,layoutType:m,mobileCols:f,tabletCols:g,desktopCols:v},{children:[e(WI,Object.assign({id:`${c}-base`,"data-testid":p||c,value:w,error:!!l,onChange:e=>{const t=e.target.value;$(t),h&&h(e)},ref:i,prefix:y,transformValue:b},x)),l||x.maxLength?t(YI,{children:[l&&e(UI,{children:e(qI,Object.assign({weight:"semibold","data-testid":d||(c?`${c}-error-message`:"error-message")},{children:l}))}),x.maxLength&&e(zI,{disabled:x.disabled,value:w,maxLength:x.maxLength,renderCustomCounter:x.renderCustomCounter})]}):e(n,{})]}))})),KI=I.div`
    position: relative;
`,GI=I(Fh)`
    height: 3rem;
    gap: 0.5rem;
`,ZI=I(Hh)`
    display: block;
    width: 100%;
    flex: 1;
`,QI=I.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?E`
                    color: ${pl.Primary};
                `:E`
                    color: ${pl.Neutral[4]};
                `};
    }
`,JI=({type:t,active:n=!1,disabled:r,className:i})=>{let a;switch(t){case"checkbox":a=e(n?We:He,{});break;case"radio":a=e(n?Xe:qe,{});break;case"tick":a=e(Ve,{});break;case"cross":a=e(Ae,{});break;default:a=null}return e(QI,Object.assign({className:i,$active:n,disabled:r},{children:a}))},eE=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,tE=I.ol`
    ${e=>eE(e.bottomMargin)}
    margin-left: ${3}rem;

    ${fl.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>_l.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${pl.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return E`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return E`
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
`,nE=I.ul`
    ${e=>eE(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>_l.getTextStyle(e.size,"regular")}
        color: ${pl.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,rE={Ul:t=>{var{size:n="Body",children:r}=t,i=lt(t,["size","children"]);return e(nE,Object.assign({size:n},i,{children:r}))},Ol:t=>{var{size:n="Body",children:r}=t,i=lt(t,["size","children"]);return e(tE,Object.assign({size:n},i,{children:r}))}},iE=I.div`
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
    ${e=>{if(!e.$indicator)return E`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return E`
                min-width: unset;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?E`
                        border-color: ${pl.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${pl.Shadow.Red};
                        }
                    `:e.$disabled?E`
                        border-color: transparent;
                    `:E`
                        border-color: transparent;

                        :hover {
                            background: ${pl.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?E`
                        border-color: ${pl.Neutral[5]};
                    `:e.$disabled&&e.$selected?E`
                        border-color: ${pl.Neutral[4]};
                    `:e.$error?E`
                        border-color: ${pl.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${pl.Shadow.Red};
                        }
                    `:e.$selected?E`
                        border-color: ${pl.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${pl.Shadow.Accent};
                        }
                    `:E`
                        background: ${pl.Neutral[8]};
                        border-color: ${pl.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${pl.Shadow.Accent};
                            border-color: ${pl.Accent.Light[1]};
                        }
                    `}
`,aE=I.input`
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
`,oE=I.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,sE=I.label`
    ${e=>e.$selected&&!e.$indicator?E`
                ${_l.getTextStyle("H4","semibold")}
            `:E`
                ${_l.getTextStyle("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${fl.MaxWidth.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${fl.MaxWidth.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${pl.Neutral[1]};

    ${e=>e.$disabled?E`
                color: ${pl.Neutral[3]};
            `:e.$selected?E`
                color: ${pl.Primary};
            `:void 0}
`,lE=I.div`
    ${_l.getTextStyle("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${_l.getFontFamily("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?E`
                color: ${pl.Neutral[3]};
            `:e.$selected?E`
                color: ${pl.Primary};
            `:E`
                color: ${pl.Neutral[1]};
            `}
`,cE=I.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?E`
                        background: ${pl.Neutral[8]};
                    `:e.$disabled?E``:E`
                        :hover {
                            background: ${pl.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?E`
                        background: ${pl.Neutral[6]};
                    `:e.$error?E`
                        background: ${pl.Neutral[8]};
                    `:e.$selected?E`
                        background: ${pl.Accent.Light[5]};
                    `:E`
                        background: ${pl.Neutral[8]};
                    `}
`,dE=I.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,uE=I.button`
    color: ${e=>e.$disabled?pl.Neutral[3]:pl.Validation.Red.Icon};
    white-space: nowrap;
    ${_l.getTextStyle("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,pE=I.button`
    color: ${e=>e.disabled?pl.Neutral[3]:pl.Primary};
    ${_l.getTextStyle("H4","semibold")}
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
`,hE=I.div`
    width: 100%;
    color: ${e=>e.$disabled?pl.Neutral[3]:pl.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,mE=I(yc)`
    width: 100%;
    user-select: none;
`,fE=I.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${uc({textSize:"BodySmall"})}

    ${e=>e.$disabled?E`
                color: ${pl.Neutral[3]};
            `:e.$selected?E`
                color: ${pl.Primary};
            `:E`
                color: ${pl.Neutral[1]};
            `}
`,gE=I(Il.BodySmall)`
    color: ${e=>e.$disabled?pl.Neutral[3]:pl.Validation.Red.Text};
`,vE=I(rE.Ul)`
    li {
        color: ${e=>e.$disabled?pl.Neutral[3]:pl.Validation.Red.Text};
    }
`,bE=({type:r="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:d,subLabel:p,disabled:h,error:m,name:f,id:v,className:b,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:k,useContentWidth:S})=>{const{collapsible:O=!0,errors:C,children:T,initialExpanded:D}=y||{},[j,I]=o(s),[E,M]=o(D),A=g((()=>{const e=Array.isArray(C)&&(null==C?void 0:C.length)>0,t=!Array.isArray(C)&&!!C;return e||t}),[C]),[N]=o($d.generate()),B=v?`${v}`:`tg-${N}`,R=a();u((()=>{I(s)}),[s]),u((()=>{j&&M(null==D||D)}),[j]);const L=e=>{if(!h){if(k)return void k(e);switch(r){case"checkbox":I((e=>!e));break;case"radio":case"yes":case"no":j||I(!0)}}},P=()=>{h||M(!E)},z=()=>{h||!w||w()},F=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e(JI,{type:t,active:j,disabled:h})},H=()=>{if(!p)return null;let t;return t="function"==typeof p?p():p,e(lE,Object.assign({"data-id":"toggle-sublabel",$disabled:h,$selected:j},{children:t}))},W=()=>{const n=!E&&!A;return O&&t(pE,Object.assign({$paddingTopRequired:n,disabled:h,onClick:P,"data-testid":E?"collapse-button":"expand-button"},{children:[E?"Show less":"Show more",e(E?_:he,{"aria-hidden":!0})]}))},V=r=>t(n,{children:[e(gE,Object.assign({weight:"semibold",$disabled:h},{children:"Error"})),e(vE,Object.assign({$disabled:h},{children:null==r?void 0:r.map(((t,n)=>e("li",Object.assign({id:`${B}-error-list-item-${n}`},{children:e(gE,Object.assign({weight:"semibold",$disabled:h},{children:t}))}),n)))}))]});return t(iE,Object.assign({$selected:j,$disabled:h,className:b,$styleType:l,$error:m,$indicator:i,$useContentWidth:S,id:v,"data-testid":$},{children:[t(cE,Object.assign({id:`${B}-header-container`,$disabled:h,$error:m,$selected:j,$indicator:i,$styleType:l},{children:[t(dE,Object.assign({$addPadding:x},{children:[e(aE,{ref:R,name:f,id:`${B}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:h,onChange:L,checked:j}),i&&F(),t(oE,{children:[e(sE,Object.assign({htmlFor:`${B}-input`,$selected:j,$indicator:i,$disabled:h,"data-testid":`${B}-toggle-label`,$maxLines:d},{children:c})),p&&H()]})]})),x&&e(uE,Object.assign({type:"button",$disabled:h,onClick:z,id:`${B}-remove-button`},{children:"Remove"}))]})),T&&t("div",{children:[(!O||E)&&e(fE,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!O,$disabled:h},{children:T})),O&&!E&&A&&e(hE,Object.assign({$disabled:h,onClick:P,id:`${B}-error-alert`},{children:e(mE,Object.assign({type:h?"description":"error",className:b,showIcon:!0},{children:Array.isArray(C)?V(C):C}))})),W()]})]}))},yE=I(Ra.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${pl.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${fl.MaxWidth.mobileS} {
        max-width: 100%;
    }
`,xE=I.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,wE=I.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${fl.MaxWidth.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,$E=I.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${fl.MaxWidth.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,kE=I.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${fl.MaxWidth.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,SE=I.div`
    display: flex;
    gap: 0.5rem;

    ${fl.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${fl.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,OE=I.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${fl.MaxWidth.mobileS} {
        width: 6rem;
    }
`,CE=I(bl)`
    width: 5rem;
    padding: 1rem 0;
    color: ${pl.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${pl.Primary};
    }
`,TE=I(Il.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${fl.MaxWidth.tablet} {
        margin: 0;
    }

    ${fl.MaxWidth.mobileS} {
        margin: 0 0.25rem;
    }
`,DE=I(Hh)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${pl.Neutral[5]};
    background: ${pl.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${pl.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${pl.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${fl.MaxWidth.mobileS} {
        width: 100%;
    }
`,jE=I(bE)`
    min-width: 5rem;
    flex: 1;
`,_E=I(ac.Small)`
    width: 7rem;

    ${fl.MaxWidth.mobileL} {
        flex: 1;
    }

    ${fl.MaxWidth.mobileS} {
        width: 100%;
    }
`;var IE,EE,ME;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(IE||(IE={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(EE||(EE={})),function(e){e.AM="am",e.PM="pm"}(ME||(ME={}));const AE=({id:n,value:r,show:i,format:s,onChange:l,onCancel:c})=>{const d=Mp.getTimeValues(s,r),[p,h]=o(d.hour),[f,g]=o(d.minute),[v,b]=o(d.period),y=a(),x=a(),w=an();u((()=>{if(i&&y.current&&y.current.focus(),i){const{hour:e,minute:t,period:n}=Mp.getTimeValues(s,r);h(e),g(t),b(n)}}),[i,r,s]),u((()=>{const e=y.current,t=x.current;return e&&e.addEventListener("keydown",$),t&&t.addEventListener("keydown",$),()=>{e&&e.removeEventListener("keydown",$),t&&t.removeEventListener("keydown",$)}}),[]);const $=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},k=m((e=>{switch(e.currentTarget.name){case IE.MINUTE_UP:g(Mp.updateMinutes(f,"add"));break;case IE.MINUTE_DOWN:g(Mp.updateMinutes(f,"minus"));break;case IE.HOUR_UP:h(Mp.updateHours(p,"add"));break;case IE.HOUR_DOWN:h(Mp.updateHours(p,"minus"))}}),[p,f]),S=e=>{e.target.select()},O=e=>{const t=e.target.value;switch(e.target.name){case EE.HOUR:t.length<=2&&h(t);break;case EE.MINUTE:t.length<=2&&g(t)}},C=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case EE.HOUR:{const n=t>23||t<0?d.hour:Mp.convertHourTo12HourFormat(e.target.value);h(n);break}case EE.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;g(kd.padValue(n));break}}},T=e=>{switch(e.target.name){case ME.AM:b(Ep.AM);break;case ME.PM:b(Ep.PM)}},D=e=>n?`${n}-${e}`:e,j=ya({height:i?w.height+32:0});return e(yE,Object.assign({"data-testid":"animated-dropdown-wrapper",style:j},{children:t(xE,Object.assign({ref:w.ref,"data-testid":D("timepicker-dropdown"),inert:i?void 0:""},{children:[t(wE,{children:[t(kE,{children:[t(OE,{children:[e(CE,Object.assign({"aria-label":"increase hour",name:IE.HOUR_UP,tabIndex:-1,onClick:k,"data-testid":D("hour-increment-button")},{children:e(_,{})})),e(DE,{"aria-label":"hour",type:"number",name:EE.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:y,value:p,onFocus:S,onChange:O,onBlur:C,min:1,max:12,placeholder:"HH","data-testid":D("hour-input")}),e(CE,Object.assign({"aria-label":"decrease hour",name:IE.HOUR_DOWN,tabIndex:-1,onClick:k,"data-testid":D("hour-decrement-button")},{children:e(he,{})}))]}),e(TE,{children:":"}),t(OE,{children:[e(CE,Object.assign({"aria-label":"increase minute",name:IE.MINUTE_UP,tabIndex:-1,onClick:k,"data-testid":D("minute-increment-button")},{children:e(_,{})})),e(DE,{"aria-label":"minute",type:"number",name:EE.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:f,onChange:O,onBlur:C,onFocus:S,min:0,max:59,placeholder:"MM","data-testid":D("minute-input")}),e(CE,Object.assign({"aria-label":"decrease minute",name:IE.MINUTE_DOWN,tabIndex:-1,onClick:k,"data-testid":D("minute-decrement-button")},{children:e(he,{})}))]})]}),t(SE,{children:[e(jE,Object.assign({checked:v===Ep.AM,name:ME.AM,type:"radio",onChange:T,"data-testid":D("am-toggle"),"aria-label":"AM"},{children:"AM"})),e(jE,Object.assign({checked:v===Ep.PM,name:ME.PM,type:"radio",onChange:T,"data-testid":D("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),t($E,{children:[e(_E,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":D("cancel-button")},{children:"Cancel"})),e(_E,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?Mp.convertTo24HourFormat({hour:p,minute:f,period:v}):`${p}:${f}${v}`,l(e)},disabled:""===p||""===f,"data-testid":D("confirm-button")},{children:"Done"}))]})]}))}))},NE=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:p,onFocus:h,onBlur:m}=n,f=lt(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[g,v]=o(!1),[b,y]=o(!1),[x,w]=o(""),[$,k]=o(""),S=a();u((()=>{l&&(w(l.start),k(l.end))}),[l]),Od("mousedown",(function(e){i||D(e)}),"document"),Od("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const O=()=>{T()},C=()=>{g||b||h&&h()},T=()=>{v(!1),y(!1),m&&m()},D=e=>{S.current&&!S.current.contains(e.target)&&(b||g)&&T()};return e(KI,Object.assign({ref:S,id:r},f,{children:t(GI,Object.assign({$disabled:i,$error:s,$readOnly:d},{children:[t(dm,Object.assign({error:s,currentActive:g?"start":b?"end":"none"},{children:[e(ZI,{onFocus:()=>{i||d||g||(y(!1),v(!0),C())},readOnly:!0,placeholder:"From",value:Mp.formatDisplayValue(x,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(ZI,{onFocus:()=>{i||d||b||(v(!1),y(!0),C())},readOnly:!0,placeholder:"To",value:Mp.formatDisplayValue($,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),e(AE,{id:r,show:g,value:x,format:c,onCancel:O,onChange:e=>{v(!1),y(!0),w(e);p&&p({start:e,end:$})}}),e(AE,{id:r,show:b,value:$,format:c,onCancel:O,onChange:e=>{y(!1),k(e);p&&p({start:x,end:e}),""==x?v(!0):m&&m()}})]}))}))},BE=I(Fh)`
    height: 3rem;
    gap: 0.5rem;
    padding-right: 2.75rem;
`,RE=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="12hr",readOnly:d,onChange:p,onFocus:h,onBlur:f,alignment:v="left",dropdownZIndex:b,startLimit:y,endLimit:x,interval:w=15}=n,$=lt(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[k]=o((()=>$d.generate())),[S,O]=o(null),[C,T]=o(!1),[D,j]=o(""),[_,I]=o(""),[E,M]=o(""),[A,N]=o(""),[B,R]=o(""),L=a(),P=a(),z=a(),F=g((()=>Mp.generateTimings(w,c,y,x)),[w,c,y,x]),H=g((()=>{if(""===A)return F;const e=Mp.findClosestFlooredTime(A,F);return F.slice(F.indexOf(e))}),[F,A]),W=m((e=>Mp.parseInput(e,c)),[c]);u((()=>{var e,t;if(l){const n=null!==(e=W(l.start))&&void 0!==e?e:"",r=null!==(t=W(l.end))&&void 0!==t?t:"";I(n),M(r),N(n),R(r)}}),[l,W]),u((()=>{if(s)return void T(!1);const e=W(_),t=W(E);if(void 0===e)j("Invalid start time");else if(void 0===t)j("Invalid end time");else{if(!(""!==e&&""!==t&&Mp.to24Hour(t)<Mp.to24Hour(e)))return j(""),void(document.activeElement!==P.current&&document.activeElement!==z.current||T(!0));j("End time must be after start time")}T(!1)}),[_,E,W,s]);const V=e=>{i||d||(S||C||null==h||h(),O(e),T(!0))},Y=e=>{var t;i||d||(O(e),T(!0),null===(t=("start"===e?P:z).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?q(_):"end"===S&&(C&&X(E),null===(t=z.current)||void 0===t||t.blur());break;case"Tab":K(_,E,{})}}const q=e=>{K(e,E,{goToNextInput:!0})},X=e=>{K(_,e,{triggerOnBlur:!0})},K=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var i,a,o;const s=null!==(i=W(e))&&void 0!==i?i:A,l=null!==(a=W(t))&&void 0!==a?a:B;I(s),M(l);s===A&&l===B||null==p||p({start:s,end:l}),n&&void 0!==W(e)&&(O("end"),null===(o=z.current)||void 0===o||o.select()),r&&(O(null),T(!1),null==f||f()),N(s),R(l)},G=e=>{e.stopPropagation(),I(""),M(""),N(""),R("");null==p||p({start:"",end:""}),O(null),T(!1)},Z=e=>{L.current&&!L.current.contains(e.relatedTarget)&&S&&!C&&K(_,E,{triggerOnBlur:!0})},Q=()=>{if(!d&&!i&&((null==_?void 0:_.length)>0||(null==E?void 0:E.length)>0))return e(DI,Object.assign({onClick:G,type:"button","aria-label":"Clear"},{children:e(iw,{"aria-hidden":!0})}))};return t(KI,Object.assign({id:r},$,{children:[e(gj,{children:e(Nh,{enabled:!d&&!i,isOpen:C,renderElement:()=>t(BE,Object.assign({ref:L,$disabled:i,$error:s||!!D,$readOnly:d,onBlur:Z},{children:[t(dm,Object.assign({error:s||!!D,currentActive:null===S?"none":S},{children:[e(ZI,{ref:P,onFocus:()=>V("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>I(e.target.value),value:_,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":C,"aria-controls":k,"aria-autocomplete":"list"}),e(ZI,{ref:z,onFocus:()=>V("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:E,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":C,"aria-controls":k,"aria-autocomplete":"list"})]})),Q()]})),renderDropdown:()=>{if(C)return e(zj,"start"===S?{listItems:F,onSelectItem:q,selectedItems:[_],disableItemFocus:!0,topScrollItem:Mp.findClosestFlooredTime(W(_),F),listboxId:k}:{listItems:H,onSelectItem:X,selectedItems:[E],disableItemFocus:!0,topScrollItem:Mp.findClosestFlooredTime(W(E),H),listboxId:k})},onClose:e=>{"outside-press"===e?(O(null),T(!1),null==f||f()):K(_,E,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:z).current)||void 0===e||e.focus(),T(!1)},offset:8,alignment:v,fitAvailableHeight:!0,customZIndex:b})}),!s&&D&&e(bx,Object.assign({id:r?`${r}-error-message`:"error-message",weight:"semibold",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message"},{children:D}))]}))},LE=t=>{var{variant:n="dial"}=t,r=lt(t,["variant"]);return"dial"===n?e(NE,Object.assign({},r)):"combobox"===n?e(RE,Object.assign({},r)):void 0};I.div`
    position: relative;
`;const PE=I(Hh)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,zE=n=>{var{id:r,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:p,onFocus:h,onBlur:f}=n,g=lt(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[v,b]=o(!1),y=a();Od("mousedown",(function(e){i||s||$(e)}),"document"),Od("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{i||s||v||(b(!0),h&&h())};const w=()=>{b(!1),f&&f()},$=e=>{y.current&&!y.current.contains(e.target)&&v&&w()},k=m((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(Fh,Object.assign({ref:y,id:r,$readOnly:s,$disabled:i,$error:l},g,{children:[e(PE,{onFocus:x,focused:v,readOnly:!0,placeholder:d||k(),value:Mp.formatDisplayValue(c,u),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),e(AE,{id:r,show:v,value:c,format:u,onCancel:()=>{w()},onChange:e=>{p&&p(e),w()}})]}))},FE=I(dw)`
    margin-right: 0.25rem;
`,HE=I(ow)`
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
`,WE=I(HE)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,VE=I(Il.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return E`
                color: ${pl.Neutral[3]};
            `}}
`,YE=I.div`
    display: flex;
`,UE=I(Il.Body)`
    ${e=>{if(e.$inactive)return E`
                color: ${pl.Neutral[3]};
            `}}
`,qE=r=>{var{disabled:i,error:s,value:l,onChange:c,onBlur:d,onChangeRaw:p,onBlurRaw:h,readOnly:m,placeholder:f="00-8888",autoComplete:g}=r,v=lt(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[b,y]=o(""),[x,w]=o(""),[$,k]=o("none"),S=a(null),O=a(null),C=a(null),T=a(b),D=a(x),j=a($),_=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),I=Dd({ref:O,formatter:_}),E=Dd({ref:C,formatter:_}),M=e=>{T.current=e,y(e)},A=e=>{D.current=e,w(e)},N=e=>{j.current=e,k(e)};u((()=>{"floor"===$&&3===b.length&&C.current&&C.current.focus()}),[b]),u((()=>{F(l)}),[l]);const B=e=>{N(e.target.name),e.target.select()},R=e=>{const t=e.target.name,n=e.target.value,r=z(n);"floor"===t?(M(r),r!==b&&H(r,t)):(A(r),r!==x&&H(r,t))},L=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=I();n(),M(e),H(e,t)}else{const{nextValue:e,updateCaretPosition:n}=E();n(),A(e),H(e,t)}},P=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||O.current&&"unit"===$&&0===x.length&&O.current.focus()},z=e=>/^[0-9]$/.test(e)?kd.padValue(e,!0):e.toLocaleUpperCase(),F=e=>{if(e!==XE)if(void 0===e||0===e.length)M(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];M("floor"===$?e:z(e)),A("unit"===$?n:z(n))}}},H=(e,t)=>{if(!c&&!p)return;const n={floor:T.current,unit:D.current};if(n[t]=e,c){const e=V(n);c(e)}p&&p([n.floor,n.unit])},W=()=>{if(!d&&!h)return;const e={floor:z(T.current),unit:z(D.current)};if(d){const t=V(e);d(t)}h&&h([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":XE},Y=e=>e.split("-");return t(Fh,Object.assign({},v,{ref:S,onClick:()=>{"none"===$&&O.current&&O.current.focus()},$disabled:i,$error:s,$readOnly:m,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==j.current&&(N("none"),W())}},{children:[e(FE,Object.assign({"data-testid":"addon",disabled:i,$readOnly:m},{children:"#"})),m&&l?(()=>{const n=l.split("-");return t(YE,{children:[e(UE,{children:n[0]}),e(VE,{children:"-"}),e(UE,{children:n[1]})]})})():t(n,{children:[e(HE,{name:"floor",maxLength:3,value:b,ref:O,onFocus:B,onBlur:R,onChange:L,disabled:i,readOnly:m,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||m?Y(f)[0]:"",autoComplete:g}),e(VE,Object.assign({$inactive:0===b.length},{children:"-"})),e(WE,{name:"unit",maxLength:5,value:x,ref:C,onFocus:B,onBlur:R,onChange:L,onKeyDown:P,disabled:i,readOnly:m,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||m?Y(f)[1]:"",autoComplete:g})]})]}))},XE="Invalid unit number",KE={DateInput:t=>{var{label:n,errorMessage:r,id:i="form-date-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(em,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},DateRangeInput:t=>{var{label:n,errorMessage:r,id:i="form-date-range-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(fm,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},ESignature:t=>{const{label:n,errorMessage:r,id:i="form-field","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(uf,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},HistogramSlider:t=>{var{label:n,errorMessage:r,id:i="form-histogram-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(tw,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},Input:sw,InputGroup:dO,MaskedInput:CO,Label:xx,MultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-multi-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:p}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:h.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(rI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s,variant:p},h))}))},NestedSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(sI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},NestedMultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-multi-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(oI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},Select:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:p}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:h.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(II,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s,variant:p},h))}))},SelectHistogram:t=>{var{label:n,errorMessage:r,id:i="form-select-histogram","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,histogramSlider:u}=t,p=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","histogramSlider"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:p.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(RI,Object.assign({histogramSlider:u,error:!!r,"data-testid":o||i,id:`${i}-base`},p))}))},Slider:t=>{var{label:n,errorMessage:r,id:i="form-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(LI,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},RangeSlider:t=>{var{label:n,errorMessage:r,id:i="form-range-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(Kx,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},RangeSelect:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,p=lt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:p.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(_I,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s},p))}))},Textarea:XI,Timepicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(zE,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},TimeRangePicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(LE,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},CustomField:t=>{var{id:n="form-custom-field","data-error-testid":r,children:i}=t,a=lt(t,["id","data-error-testid","children"]);return e(Ix,Object.assign({id:n,"data-error-testid":r},a,{children:i}))},UnitNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-unit-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(qE,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},PhoneNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-phone-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(kI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},PredictiveTextInput:t=>{var{label:n,errorMessage:r,id:i="form-predictive-text","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Ix,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(CI,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))}},GE=I.li`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: 1px solid ${pl.Neutral[5]};
    }
`,ZE=I.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    width: 100%;
`,QE=I.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,JE=I.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    ${fl.MaxWidth.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,eM=I(Il.BodySmall)`
    display: flex;
    flex: 1;
    margin-right: 1rem;

    ${fl.MaxWidth.mobileL} {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`,tM=I(Il.BodySmall)``,nM=I.div`
    display: flex;
    ${fl.MaxWidth.mobileL} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return E`
                margin-left: 8rem; // 6rem width + 2rem gap

                ${fl.MaxWidth.mobileL} {
                    margin-left: 0;
                }
            `}}
`,rM=I(ac.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${fl.MaxWidth.mobileL} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }
`,iM=({thumbnailImageDataUrl:n,"data-testid":r,renderReplaceButton:i,onReplaceClick:a})=>t(aM,Object.assign({"data-testid":r},{children:[e(oM,{"data-testid":r?`${r}-image`:void 0,src:n}),i&&e(sM,Object.assign({type:"button",onClick:e=>{a&&a()}},{children:"Replace"}))]})),aM=I.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,oM=I(Bf)`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid ${pl.Neutral[5]};
    object-fit: cover;

    ${fl.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`,sM=I.button`
    width: 100%;
    height: 1.625rem;
    margin-top: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    ${_l.getTextStyle("BodySmall","semibold")};
    color: ${pl.Primary};
    :hover {
        color: ${pl.PrimaryDark};
    }
`,lM=({fileItem:n,fileDescriptionMaxLength:r,wrapperWidth:i,onSave:s,onCancel:l,onBlur:c})=>{const{id:d,name:p,size:h,truncateText:m=!0,thumbnailImageDataUrl:f}=n,[g,v]=o(),[b,y]=o(""),x=a(),w=a();u((()=>{v($(p))}),[i]),u((()=>{y(n.description||"")}),[n]);const $=e=>{if(!m)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return kd.truncateOneLine(e,t,t/2,t/2/8,16)};return t(GE,Object.assign({"data-testid":`${d}-edit-display`},{children:[t(ZE,{children:[f&&e(iM,{thumbnailImageDataUrl:f}),t(QE,{children:[t(JE,Object.assign({ref:w},{children:[e(eM,Object.assign({weight:"semibold"},{children:g})),e(tM,{children:Nf.formatFileSizeDisplay(h)})]})),e(KE.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:b,maxLength:r,onChange:e=>{y(e.target.value)},onBlur:e=>{c(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(nM,Object.assign({$thumbnail:!!f},{children:[e(rM,Object.assign({"data-testid":`${d}-save-button`,type:"button",disabled:0===b.trim().length,onClick:()=>{x.current&&s(x.current.value.trim())}},{children:"Save"})),e(rM,Object.assign({type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:l},{children:"Cancel"}))]}))]}))},cM=I.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: 1rem;
    }

    ${e=>e.$disabled&&"none"===e.$focusType?E`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?E`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?E`
                :hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,dM=I(Ze)`
    // Temp icon
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;

    ${e=>{if(e.$disabled)return E`
                color: ${pl.Neutral[4]};
            `}}
`,uM=I.div`
    background: ${pl.Accent.Light[6]};
    border: 1px solid ${pl.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;

    ${fl.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${e=>e.$focused?E`
                border-color: ${pl.Accent.Light[1]};
                box-shadow: 0 0 4px 1px ${pl.Shadow.Accent};
            `:e.$disabled?E`
                background: ${pl.Neutral[7]};
            `:e.$error?E`
                background: ${pl.Validation.Red.Background};
                border-color: ${pl.Validation.Red.Border};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return E`
                ${fl.MaxWidth.mobileL} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,pM=I.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${fl.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return E`
                ${fl.MaxWidth.mobileL} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,hM=I.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,mM=I.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${fl.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,fM=I.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;

    ${fl.MaxWidth.mobileL} {
        ${e=>e.$hideInMobile?E`
                    display: none;
                    visibility: hidden;
                `:E`
                    width: 100%;
                    margin-left: 0;
                    margin-top: 0.5rem;
                    justify-content: flex-start;
                `}
    }
`,gM=I(Il.BodySmall)``,vM=I(gM)`
    margin-top: 0.25rem;
`,bM=I(Il.XSmall)`
    font-size: 0.875rem !important;
    color: ${pl.Validation.Red.Text};
`,yM=I(bM)`
    margin-top: 0.25rem;
    ${fl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,xM=I(bM)`
    display: none;
    visibility: hidden;
    ${fl.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,wM=I.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${fl.MaxWidth.mobileL} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?E`
                    margin-left: 0;
                    margin-top: 1rem;
                    width: 100%;
                `:e.$editable&&!e.$error?E`
                    margin-left: 0;
                    margin-top: 1rem;
                    align-self: flex-end;
                `:void 0}
    }
`,$M=I(Rm)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,kM=I(bl)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${pl.Neutral[3]};
    }
`,SM=w((({fileItem:r,editable:i,sortable:s,wrapperWidth:l,disabled:c,readOnly:d,onDelete:p,onEditClick:h})=>{const{id:m,name:g,size:v,description:b,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=r,[k,S]=o(),{activeId:O}=f(eg),{attributes:C,listeners:T,setNodeRef:D,transform:j,transition:_}=Zy({id:m}),I=a(),E={transform:Zv.Translate.toString(j),transition:_},M=Object.assign(Object.assign({style:E},C),T),A=y<1,N=Nf.formatFileSizeDisplay(v),B=O?O===m?"self":"others":"none";u((()=>{S(z(g))}),[l]);const R=()=>{p()},L=()=>{h&&h()},P=e=>{s&&e.stopPropagation()},z=e=>{if(!$)return e;const t=I&&I.current?I.current.getBoundingClientRect().width:0;return kd.truncateOneLine(e,t,t/2,t/2/8,16)},F=()=>c||!!O,H=()=>s&&!d,W=()=>t(n,{children:[e(gM,Object.assign({weight:b?"semibold":"regular"},{children:k})),b&&e(vM,{children:b})]});return t(cM,Object.assign({id:m,ref:D,$sortable:H(),$disabled:F(),$focusType:B},H()?M:{},{children:[H()&&e(dM,{"data-testid":`${m}-drag-handle`,$disabled:F()}),t(uM,Object.assign({$focused:"self"===B,$error:!!x,$loading:A,$disabled:F(),$editable:i},{children:[(()=>{let r;return r=t(n,x?{children:[t(hM,Object.assign({ref:I},{children:[W(),x&&e(yM,Object.assign({weight:"semibold"},{children:x}))]})),e(fM,{children:e(gM,{children:N})}),x&&e(xM,Object.assign({weight:"semibold"},{children:x}))]}:w?{children:[e(iM,{thumbnailImageDataUrl:w,"data-testid":`${m}-thumbnail`}),t(mM,{children:[e(hM,Object.assign({ref:I},{children:W()})),e(fM,{children:e(gM,{children:N})})]})]}:{children:[e(hM,Object.assign({ref:I},{children:W()})),e(fM,Object.assign({$hideInMobile:A},{children:e(gM,{children:N})}))]}),e(pM,Object.assign({$hasThumbnail:!!w},{children:r}))})(),!d&&(()=>{let r;return r=x?e(kM,Object.assign({onClick:R,"data-testid":`${m}-error-delete-button`,"aria-label":`delete-${g}`},{children:e(Ae,{"aria-hidden":!0})})):A?e(Am,{progress:y,"data-testid":`${m}-progress-bar`}):t(n,{children:[i&&e($M,Object.assign({"data-testid":`${m}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${g}`,disabled:F(),onClick:L,onKeyDown:P},{children:e(Ge,{"aria-hidden":!0})}),"edit"),e($M,Object.assign({"data-testid":`${m}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${g}`,disabled:F(),onClick:R,onKeyDown:P},{children:e(Ke,{"aria-hidden":!0})}),"delete")]}),e(wM,Object.assign({$editable:i,$error:!!x,$loading:A},{children:r}))})()]}))]}))})),OM=I.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":"2rem"};
`,CM=I.li`
    border-top: 1px solid ${pl.Neutral[5]};
    border-bottom: 1px solid ${pl.Neutral[5]};

    :not(:last-child) {
        margin-bottom: 2rem;
    }

    :not(:first-child) {
        margin-top: 2rem;
    }

    ul {
        list-style-type: none;
    }
`,TM=({fileItems:t,editableFileItems:n,fileDescriptionMaxLength:r,sortable:i,disabled:s,readOnly:l,onItemUpdate:c,onItemDelete:d,onSort:p})=>{const[h,m]=o({}),{setActiveId:v}=f(eg),{width:b,ref:y}=an(),x=a({}),w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g((()=>[...t].filter((e=>null!=e))),[...t])}(cb(nx,{activationConstraint:{distance:8}}),cb(ny,{activationConstraint:{delay:150,tolerance:5}}),cb(Ub,{coordinateGetter:ex})),$=e=>{delete x.current[e]};u((()=>{m(E(t))}),[t]);const k=e=>t=>{M(e.id,"display"),$(e.id);const n=Object.assign(Object.assign({},e),{description:t});c(n)},S=e=>t=>{x.current[e.id]=t},O=e=>()=>{e.description&&0!==e.description.length?M(e.id,"display"):d(e),$(e.id)},C=e=>()=>{M(e.id,"edit")},T=e=>()=>{d(e)},D=e=>{if(p){const{active:n,over:r}=e;if(r&&n.id!==r.id){const e=t.findIndex((e=>e.id===n.id)),i=t.findIndex((e=>e.id===r.id)),a=By(t,e,i);p(a)}}v(void 0)},j=e=>{const{active:t}=e;v(t.id)},_=e=>n&&Nf.isSupportedImageType(e.type),I=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&_(e)&&!e.description,E=e=>{if(!e||0===e.length)return{};const t={};for(const n of e)n.errorMessage?t[n.id]="error":h[n.id]?t[n.id]=h[n.id]:t[n.id]=I(n)?"edit":"display";return t},M=(e,t)=>{m((n=>Object.assign(Object.assign({},n),{[e]:t})))},A=()=>t&&t.length>1&&i&&Object.values(h).every((e=>"display"===e)),N=()=>{const n=((e,t)=>{if(!e||0===e.length)return[];const n=[];for(const r of e)if("edit"===t[r.id]){const e=n[n.length-1];Array.isArray(e)?e.push(r):n.push([r])}else n.push(r);return n})(t,h);return 0===n.length?null:n.map(((t,n)=>Array.isArray(t)?((t,n)=>{const i=t.map((t=>{const n=Object.assign({},t);return void 0!==x.current[t.id]&&(n.description=x.current[t.id]),e(lM,{fileItem:n,wrapperWidth:b,fileDescriptionMaxLength:r,onSave:k(t),onCancel:O(t),onBlur:S(t)},t.id)}));return e(CM,{children:e("ul",{children:i})},`editable-${n}`)})(t,n):e(SM,{fileItem:t,editable:_(t),wrapperWidth:b,sortable:A(),disabled:s,readOnly:l,onDelete:T(t),onEditClick:C(t)},t.id)))};return t&&0!==t.length?s||l||!A()?e(OM,Object.assign({$readOnly:l,ref:y},{children:N()})):e(Iy,Object.assign({sensors:w,onDragEnd:D,onDragStart:j},{children:e(Vy,Object.assign({items:t,strategy:Fy},{children:e(OM,Object.assign({$readOnly:l,ref:y},{children:N()}))}))})):null},DM=I.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,jM=I(Il.H4)`
    margin-bottom: 0.5rem;
`,_M=I.div`
    color: ${pl.Neutral[1]};
    ${uc({textSize:"Body"})}
`,IM=I(Il.BodySmall)`
    margin-bottom: 0;
    color: ${pl.Neutral[3]};
`,EM=I.div`
    color: ${pl.Neutral[3]};
    ${uc({textSize:"BodySmall"})}
`,MM=I(yc)`
    margin-bottom: 2rem;
`,AM=I.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${fl.MaxWidth.mobileL} {
        align-items: flex-start;
    }
`,NM=I(ac.Small)`
    width: 10rem;

    ${fl.MaxWidth.mobileL} {
        width: 100%;
    }
`,BM=I.label`
    ${_l.getTextStyle("BodySmall","semibold")}
    color: ${pl.Neutral[3]};
    margin-top: 0.5rem;
    width: 10rem;
    text-align: center;
    ${fl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,RM=I(yc)`
    margin-bottom: 2rem;
`,LM=({styleType:n="bordered",fileItems:r,title:i,description:s,maxFiles:l,warning:c,className:d,name:u,id:p,"data-testid":h,accept:m,capture:f,multiple:g,disabled:v,sortable:b=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:k,onDelete:S,onEdit:O,onSort:C})=>{const T=a(),[D,j]=o(),_=()=>!!l&&r.length>=l;return e(eg.Provider,Object.assign({value:{activeId:D,setActiveId:j}},{children:t(jv,Object.assign({ref:T,onChange:e=>{!v&&k&&k(e)},id:p?`${p}-dropzone`:"dropzone",accept:m,capture:f,border:"bordered"===n,className:d,"data-testid":h,name:u,multiple:g,disabled:v||_()||$},{children:[(i||s)&&t(DM,{children:[i?"string"==typeof i?e(jM,Object.assign({weight:"regular"},{children:i})):e(_M,{children:i}):null,s?"string"==typeof s?e(IM,Object.assign({weight:"regular"},{children:s})):e(EM,{children:s}):null]}),c&&e(MM,Object.assign({type:"warning"},{children:c})),e(TM,{fileItems:r,editableFileItems:x,fileDescriptionMaxLength:y,sortable:b,disabled:v,readOnly:$,onItemDelete:e=>{S&&S(e)},onItemUpdate:e=>{O&&O(e)},onSort:e=>{C&&C(e)}}),w&&e(RM,Object.assign({type:"error"},{children:w})),!$&&t(AM,{children:[e(NM,Object.assign({type:"button",styleType:"secondary",disabled:!!D||v||_(),onClick:e=>{v||(e.preventDefault(),T.current&&T.current.openFileDialog())}},{children:"Upload files"})),e(BM,{children:"or drop them here"})]})]}))}))},PM=I.div`
    background-color: ${pl.Neutral[8]};
    border: 1px solid ${pl.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,zM=I.div`
    background-color: ${pl.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,FM=I.div`
    background-color: ${pl.Neutral[8]};
    height: 100%;
    width: 100%;
`,HM=I.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,WM=I.div`
    display: flex;
    align-items: center;

    background-color: ${pl.Neutral[8]};

    ${fl.MaxWidth.tablet} {
        border-bottom: 1px solid ${pl.Neutral[5]};
    }
`,VM=I(Il.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${fl.MaxWidth.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,YM=I(bl)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${pl.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${pl.Neutral[2]};
    }
`,UM=I(ac.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${fl.MaxWidth.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,qM=I(zd.Default)`
    width: 100%;
`,XM=I.div`
    padding: 1.5rem 1.25rem;
    background-color: ${pl.Neutral[8]};
    border-top: 1px solid ${pl.Neutral[5]};
`,KM=I(ac.Default)`
    width: 100%;
`,GM=i.createContext({mode:"default",rootNode:null});var ZM=Pa((function(e){return null==e}));const QM=I.div`
    background-color: ${e=>e.$collapsible?pl.Neutral[7](e):pl.Neutral[8](e)};

    ${fl.MaxWidth.tablet} {
        background-color: ${pl.Neutral[7]};
    }
`,JM=I.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${pl.Neutral[5]};

    ${fl.MaxWidth.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,eA=I.div`
    display: flex;
    align-items: center;

    background-color: ${pl.Neutral[8]};

    ${fl.MaxWidth.tablet} {
        background-color: transparent;
    }
`,tA=I(bl)`
    margin: 0 0 0 auto;
`,nA=I(he)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${pl.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${pl.Neutral[2]};
    }
`,rA=I(Il.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${fl.MaxWidth.tablet} {
        ${_l.getTextStyle("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,iA=I(Ra.div)`
    overflow: hidden;
`,aA=I.div`
    padding: 1rem 1.25rem;
`,oA=I(Ra.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,sA=I(ac.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,lA=n=>{var{collapsible:r=!0,initialExpanded:i=!1,expanded:a,onExpandChange:s,minimisable:l=!1,minimisedHeight:c,showDivider:d=!0,showMobileDivider:p=!0,title:h,addon:m,children:g}=n,v=lt(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:b,rootNode:y}=f(GM),x="mobile"===b,[w,$]=o(_()),[k,S]=o(l),O=!x&&r,C=an(),T=an(),D=ya({height:w?C.height:0}),j=k?null!=c?c:Math.min(.5*T.height,216):T.height;u((()=>{$(_())}),[r,a]);function _(){return!!x||(ZM(a)?!r||i:a)}return t(QM,Object.assign({$collapsible:O},{children:[e(JM,{$showDivider:d,$showMobileDivider:p}),(h||O)&&t(eA,{children:[h&&t(rA,Object.assign({weight:"semibold"},{children:[h," ",m&&("popover"===m.type?e(gx,{addon:m,rootNode:x?y:void 0}):null)]})),O&&e(tA,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!w;ZM(a)&&$(e),s&&s(e)},"aria-label":w?"Collapse":"Expand"},{children:e(nA,{$expanded:w})}))]}),e(iA,Object.assign({"data-testid":"expandable-container","data-expanded":w,style:D},{children:e("div",Object.assign({ref:C.ref},{children:t(aA,Object.assign({},v,{children:[e(oA,Object.assign({"data-testid":"minimisable-container",$height:j,$minimisable:l},{children:e("div",Object.assign({ref:T.ref},{children:e("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof g?g(b,{minimised:k}):g}))}))})),l&&t(sA,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{S(!k)}},{children:["View ",k?"more":"less"]}))]}))}))}))]}))},cA=I(lA)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${fl.MaxWidth.tablet} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${fl.MaxWidth.tablet} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,dA=I.div`
    display: flex;
    flex-direction: column;

    ${fl.MaxWidth.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,uA=I.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${_l.getTextStyle("BodySmall","regular")}
    ${e=>e.$selected&&E`
            color: ${pl.Primary};
        `}
`,pA=I.input`
    appearance: none;
`,hA=I(JI)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${pA}:focus-visible + & {
        outline: 2px solid ${pl.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,mA=I(bE)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,fA=I(ac.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${fl.MaxWidth.tablet} {
        margin: 0 0 1rem 0;
    }
`,gA=I.div`
    background-color: ${pl.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,vA=Object.assign((r=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:d,onDismiss:p,onDone:h,children:m}=r,f=lt(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[g,v]=o(!1),b=a(null),y=a(null),x=zc.useMediaQuery({maxWidth:hl.tablet});u((()=>{x||$()}),[x]);const w=()=>{v(!0)},$=()=>{v(!1),p&&p()},k=()=>{v(!1),h&&h()},S=()=>{d&&d()},O=e=>"function"==typeof m?m(e):m,C=n=>t(WM,{children:["mobile"===n&&e(YM,Object.assign({onClick:$,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(J,{})})),e(VM,Object.assign({weight:"semibold"},{children:l})),e(UM,Object.assign({styleType:"link",type:"button",onClick:S,disabled:c},{children:"Clear"}))]});return e("div",Object.assign({},f,{children:e(GM.Provider,x?Object.assign({value:{mode:"mobile",rootNode:b}},{children:t(n,{children:[e(qM,Object.assign({"data-testid":"filter-show-button",styleType:s,onClick:w,type:"button",icon:e(ee,{})},{children:i})),e(Om,Object.assign({show:g,disableTransition:!0},{children:e(FM,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:t(zM,Object.assign({ref:b},{children:[C("mobile"),e(HM,{children:O("mobile")}),e(XM,{children:e(KM,Object.assign({onClick:k,type:"button"},{children:"Done"}))})]}))}))}))]})}):Object.assign({value:{mode:"default",rootNode:y}},{children:t(PM,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:y},{children:[C("default"),O("default")]}))}))}))}),{Item:lA,Page:({onDismiss:n,onDone:r,children:i})=>t(gA,{children:[e(YM,Object.assign({onClick:n,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(fe,{})})),e(HM,{children:i}),e(XM,{children:e(KM,Object.assign({onClick:r,type:"button"},{children:"Done"}))})]}),Checkbox:r=>{var{selectedOptions:i,options:s,onSelect:l,labelExtractor:c,valueExtractor:d,useToggleContentWidth:p}=r,h=lt(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:g}=f(GM),[v,b]=o(i||[]),[y,x]=o(),[w,$]=o(s.length),k=a(),S=a(),O=e=>()=>{const t=[...v],n=v.findIndex((t=>D(t)===D(e)));n>=0?t.splice(n,1):t.push(e),b(t),null==l||l(t)},C=()=>{const e=v.length?[]:s;b(e),null==l||l(e)},T=e=>{var t;return c?c(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},D=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},j=m((()=>{if(!k.current)return void x(void 0);const e=Array.from(k.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const a=e[i].offsetTop;if(a>r&&(n++,r=a,n>2))break;t=i}$(t),x(n>2?r-8:void 0)}),[]);u((()=>{i!==v&&b(i||[])}),[i]),u((()=>{"default"===g?(()=>{const e=S.current?S.current.offsetTop+S.current.clientHeight:void 0;x(e)})():j()}),[s]),an({handleWidth:"mobile"===g,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:k,onResize:j});return e(cA,Object.assign({minimisable:s.length>5,minimisedHeight:y},h,{children:(r,{minimised:i})=>t(n,{children:[s.length<3?null:e(fA,Object.assign({styleType:"link",type:"button",onClick:C},{children:v.length?"Clear all":"Select all"})),e(dA,Object.assign({role:"group","aria-label":h.title,ref:k},{children:s.map(((n,a)=>"default"===r?((n,r,i)=>{const a=T(n),o=D(n),s=!!v.find((e=>D(e)===o));return t(uA,Object.assign({$visible:!i||r<5,$selected:s,ref:4===r?S:void 0},{children:[e(pA,{type:"checkbox",checked:s,onChange:O(n)}),e(hA,{type:"checkbox",active:s}),a]}),o)})(n,a,i):((t,n,r)=>{const i=T(t),a=D(t),o=!!v.find((e=>D(e)===a));return e(mA,Object.assign({type:"checkbox",checked:o,$visible:!r||y&&n<=w,onChange:O(t),useContentWidth:p},{children:i}),a)})(n,a,i)))}))]})}))}}),bA=I.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${fl.MaxWidth.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`,yA=I(Il.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,xA=I.div`
    display: flex;
    align-items: flex-start;
`,wA=I.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${fl.MaxWidth.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,$A=()=>t(bA,Object.assign({"data-testid":"download-app-section"},{children:[e(yA,Object.assign({weight:"semibold"},{children:"Download the app"})),t(xA,{children:[e(wA,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(wA,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})),kA={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},SA={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},OA={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var CA;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const r=t(n);return`${`${(new Date).getFullYear()} ${r}`} Last Updated ${nd(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogoAttribute=e=>{switch(e){case"bookingsg":return{src:"https://home.booking.gov.sg/images/bookingsg/footer.svg",alt:"BookingSG"};case"mylegacy":return{src:"https://mylegacy.life.gov.sg/images/site-logo.png",alt:"MyLegacy",style:{width:"10rem",maxHeight:"2rem"}};case"ccube":return{src:"https://assets.life.gov.sg/ccube/logo-ccube.svg",alt:"Ccube"};default:return{src:"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",alt:"LifeSG"}}},e.getDisclaimerLinks=(e,t)=>{const n=(e=>{switch(e){case"bookingsg":return SA;case"mylegacy":return OA;default:return kA}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(CA||(CA={}));const TA=I.img`
    max-height: 4.5rem;
    max-width: 100%;
`,DA=I.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 1rem;
`,jA=()=>{const r=A();return e("div",Object.assign({"data-testid":"resource-addon-section"},{children:"mylegacy"===(null==r?void 0:r.resourceScheme)?t(n,{children:[e(Il.XSmall,{children:"My Legacy is a LifeSG initiative, brought to you by the following government agencies:"}),t(DA,{children:[e(TA,{"data-testid":"footer-govtech-logo",src:"https://mylegacy.life.gov.sg/images/agencies/govtech-logo.png",alt:"GovTech Singapore"}),e(TA,{"data-testid":"footer-psd-logo",src:"https://mylegacy.life.gov.sg/images/agencies/psd-logo.png",alt:"Public Service Division",style:{maxHeight:"3.5rem"}})]})]}):null}))},_A=I.footer`
    background: ${pl.Neutral[7]};
`,IA=I(Il.Hyperlink.Small)`
    color: ${pl.Neutral[1]};
`,EA=I(Tx.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${pl.Neutral[5]};

    ${fl.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`,MA=I.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${fl.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${fl.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,AA=I.ul`
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

    ${fl.MaxWidth.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${fl.MaxWidth.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,NA=I.div`
    grid-column: 9 / span 4;

    ${fl.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${fl.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,BA=I.div`
    display: none;

    ${fl.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${pl.Neutral[6]};
    }
`,RA=I(Tx.Content)`
    padding: 1.375rem 0;

    ${fl.MaxWidth.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,LA=I.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${fl.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${fl.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,PA=I(LA)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${fl.MaxWidth.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${fl.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,zA=I(Il.Hyperlink.Small)`
    ${_l.getTextStyle("XSmall","regular")}
    color: ${pl.Neutral[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${pl.Neutral[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${pl.Neutral[3]};
        svg {
            color: ${pl.Neutral[3]};
        }
    }

    ${fl.MaxWidth.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${fl.MaxWidth.tablet} {
        margin-bottom: 0.625rem;
    }
`,FA=r=>{var{children:i,links:a,lastUpdated:o,disclaimerLinks:s,showDownloadAddon:l,showResourceAddon:c,logoSrc:d,copyrightInfo:u,onFooterLinkClick:p,layout:h="default"}=r,m=lt(r,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","showResourceAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const f="stretch"===h,g=A(),v=t=>t.map(((t,n)=>{const r=lt(t,["data-options"]);return e("li",{children:e(IA,Object.assign({},r,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):p&&(e.preventDefault(),p(t))})(e,t)}))},n)}));return t(_A,Object.assign({},m,{children:[(()=>{let r=null;if(i)return i;if(a||l){const i=CA.getFooterLogoAttribute(null==g?void 0:g.resourceScheme),{src:o}=i,s=lt(i,["src"]);r=t(n,{children:[e(MA,Object.assign({"data-testid":"logo-section"},{children:e("img",Object.assign({src:d||o,"data-testid":"logo"},s))})),(null==a?void 0:a[0])&&e(AA,Object.assign({"data-testid":"link-col-1"},{children:v(a[0])}),"link-col-1"),(null==a?void 0:a[1])&&e(AA,Object.assign({"data-testid":"link-col-2"},{children:v(a[1])}),"link-col-2"),l&&e(NA,{children:e($A,{})}),!l&&c&&e(NA,{children:e(jA,{})})]})}return r?e(EA,Object.assign({type:"grid",stretch:f},{children:r})):null})(),e(BA,{}),t(RA,Object.assign({type:"grid",stretch:f},{children:[e(LA,{children:(()=>{const t=CA.getDisclaimerLinks(null==g?void 0:g.resourceScheme,s);return Object.keys(t).map((n=>e(zA,Object.assign({},t[n]),n)))})()},"disclaimer"),e(PA,{children:e(Il.XSmall,Object.assign({"data-testid":"copyright-text"},{children:u||t(n,{children:["©"," ",CA.getCopyrightInfo(o,null==g?void 0:g.resourceScheme)]})}))},"copyright")]}))]}))};var HA=function(e,t){return Number(e.toFixed(t))},WA=function(e,t,n){n&&"function"==typeof n&&n(e,t)},VA={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},YA=function(e){"number"==typeof e&&cancelAnimationFrame(e)},UA=function(e){e.mounted&&(YA(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function qA(e,t,n,r){if(e.mounted){var i=(new Date).getTime();UA(e),e.animation=function(){if(!e.mounted)return YA(e.animation);var a=(new Date).getTime()-i,o=(0,VA[t])(a/n);a>=n?(r(1),e.animation=null):e.animation&&(r(o),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function XA(e,t,n,r){var i=function(e){var t=e.scale,n=e.positionX,r=e.positionY;return!(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(r))}(t);if(e.mounted&&i){var a=e.setTransformState,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=t.scale-s,u=t.positionX-l,p=t.positionY-c;0===n?a(t.scale,t.positionX,t.positionY):qA(e,r,n,(function(e){a(s+d*e,l+u*e,c+p*e)}))}}var KA=function(e,t){var n=e.wrapperComponent,r=e.contentComponent,i=e.setup.centerZoomedOut;if(!n||!r)throw new Error("Components are not mounted");var a=function(e,t,n){var r=e.offsetWidth,i=e.offsetHeight,a=t.offsetWidth*n,o=t.offsetHeight*n;return{wrapperWidth:r,wrapperHeight:i,newContentWidth:a,newDiffWidth:r-a,newContentHeight:o,newDiffHeight:i-o}}(n,r,t),o=a.wrapperWidth,s=a.wrapperHeight,l=function(e,t,n,r,i,a,o){var s=e>t?n*(o?1:.5):0,l=r>i?a*(o?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:r-i-l,maxPositionY:l}}(o,a.newContentWidth,a.newDiffWidth,s,a.newContentHeight,a.newDiffHeight,Boolean(i));return l},GA=function(e,t,n,r){return HA(r?e<t?t:e>n?n:e:e,2)},ZA=function(e,t){var n=KA(e,t);return e.bounds=n,n};function QA(e,t,n,r,i,a,o){var s=n.minPositionX,l=n.minPositionY,c=n.maxPositionX,d=n.maxPositionY,u=0,p=0;return o&&(u=i,p=a),{x:GA(e,s-u,c+u,r),y:GA(t,l-p,d+p,r)}}function JA(e,t,n,r,i,a){var o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=r-s;return"number"!=typeof t||"number"!=typeof n?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):QA(l-t*d,c-n*d,i,a,0,0,null)}function eN(e,t,n,r,i){var a=t-(i?r:0);return!Number.isNaN(n)&&e>=n?n:!Number.isNaN(t)&&e<=a?a:e}var tN=function(e,t){var n=e.setup.panning.excluded,r=e.isInitialized,i=e.wrapperComponent,a=t.target,o="shadowRoot"in a&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(a);return!!(r&&a&&o)&&!BN(a,n)},nN=function(e){var t=e.isInitialized,n=e.isPanning,r=e.setup.panning.disabled;return!(!t||!n||r)};function rN(e,t,n,r,i){var a=e.setup.limitToBounds,o=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==o&&null!==s&&(t!==d||n!==u)){var p=QA(t,n,s,a,r,i,o),h=p.x,m=p.y;e.setTransformState(c,h,m)}}var iN=function(e,t){var n=e.setup,r=e.transformState.scale,i=n.minScale,a=n.disablePadding;return t>0&&r>=i&&!a?t:0};function aN(e,t,n,r,i,a,o,s,l,c){if(i){var d;if(t>o&&n>o)return(d=o+(e-o)*c)>l?l:d<o?o:d;if(t<a&&n<a)return(d=a+(e-a)*c)<s?s:d>a?a:d}return r?t:GA(e,a,o,i)}function oN(e,t){var n=function(e){var t=e.mounted,n=e.setup,r=n.disabled,i=n.velocityAnimation,a=e.transformState.scale;return!(i.disabled&&!(a>1)&&r&&!t)}(e);if(n){var r=e.lastMousePosition,i=e.velocityTime,a=e.setup,o=e.wrapperComponent,s=a.velocityAnimation.equalToMove,l=Date.now();if(r&&i&&o){var c=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(o,s),d=t.x-r.x,u=t.y-r.y,p=d/c,h=u/c,m=l-i,f=d*d+u*u,g=Math.sqrt(f)/m;e.velocity={velocityX:p,velocityY:h,total:g}}e.lastMousePosition=t,e.velocityTime=l}}function sN(e,t){var n=e.transformState.scale;UA(e),ZA(e,n),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var n=t.touches,r=e.transformState,i=r.positionX,a=r.positionY;if(e.isPanning=!0,1===n.length){var o=n[0].clientX,s=n[0].clientY;e.startCoords={x:o-i,y:s-a}}}(e,t):function(e,t){var n=e.transformState,r=n.positionX,i=n.positionY;e.isPanning=!0;var a=t.clientX,o=t.clientY;e.startCoords={x:a-r,y:o-i}}(e,t)}function lN(e,t){var n=e.transformState.scale,r=e.setup,i=r.minScale,a=r.alignmentAnimation,o=a.disabled,s=a.sizeX,l=a.sizeY,c=a.animationTime,d=a.animationType;if(!(o||n<i||!s&&!l)){var u=function(e){var t=e.transformState,n=t.positionX,r=t.positionY,i=t.scale,a=e.setup,o=a.disabled,s=a.limitToBounds,l=a.centerZoomedOut,c=e.wrapperComponent;if(!o&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,p=d.minPositionX,h=d.maxPositionY,m=d.minPositionY,f=n>u||n<p,g=r>h||r<m,v=JA(e,n>u?c.offsetWidth:e.setup.minPositionX||0,r>h?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),b=v.x,y=v.y;return{scale:i,positionX:f?b:n,positionY:g?y:r}}}(e);u&&XA(e,u,null!=t?t:c,d)}}function cN(e,t,n){var r=e.startCoords,i=e.setup.alignmentAnimation,a=i.sizeX,o=i.sizeY;if(r){var s=function(e,t,n){var r=e.startCoords,i=e.transformState,a=e.setup.panning,o=a.lockAxisX,s=a.lockAxisY,l=i.positionX,c=i.positionY;if(!r)return{x:l,y:c};var d=t-r.x,u=n-r.y;return{x:o?l:d,y:s?c:u}}(e,t,n),l=s.x,c=s.y,d=iN(e,a),u=iN(e,o);oN(e,{x:l,y:c}),rN(e,l,c,d,u)}}function dN(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,n=e.velocity,r=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var a=null==r?void 0:r.getBoundingClientRect(),o=null==i?void 0:i.getBoundingClientRect(),s=(null==a?void 0:a.width)||0,l=(null==a?void 0:a.height)||0,c=(null==o?void 0:o.width)||0,d=(null==o?void 0:o.height)||0,u=s<c||l<d;!t&&n&&(null==n?void 0:n.total)>.1&&u?function(e){var t=e.velocity,n=e.bounds,r=e.setup,i=e.wrapperComponent,a=function(e){var t=e.mounted,n=e.velocity,r=e.bounds,i=e.setup,a=i.disabled,o=i.velocityAnimation,s=e.transformState.scale;return!(o.disabled&&!(s>1)&&a&&!t||!n||!r)}(e);if(a&&t&&n&&i){var o=t.velocityX,s=t.velocityY,l=t.total,c=n.maxPositionX,d=n.minPositionX,u=n.maxPositionY,p=n.minPositionY,h=r.limitToBounds,m=r.alignmentAnimation,f=r.zoomAnimation,g=r.panning,v=g.lockAxisY,b=g.lockAxisX,y=f.animationType,x=m.sizeX,w=m.sizeY,$=m.velocityAlignmentTime,k=function(e,t){var n=e.setup.velocityAnimation,r=n.equalToMove,i=n.animationTime,a=n.sensitivity;return r?i*t*a:i}(e,l),S=Math.max(k,$),O=iN(e,x),C=iN(e,w),T=O*i.offsetWidth/100,D=C*i.offsetHeight/100,j=c+T,_=d-T,I=u+D,E=p-D,M=e.transformState,A=(new Date).getTime();qA(e,y,S,(function(t){var n=e.transformState,r=n.scale,i=n.positionX,a=n.positionY,l=((new Date).getTime()-A)/$,f=1-(0,VA[m.animationType])(Math.min(1,l)),g=1-t,y=i+o*g,x=a+s*g,w=aN(y,M.positionX,i,b,h,d,c,_,j,f),k=aN(x,M.positionY,a,v,h,p,u,E,I,f);i===y&&a===x||e.setTransformState(r,w,k)}))}}(e):lN(e)}}function uN(e,t,n,r){var i=e.setup,a=i.minScale,o=i.maxScale,s=i.limitToBounds,l=eN(HA(t,2),a,o,0,!1),c=JA(e,n,r,l,ZA(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function pN(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.minScale,s=a.limitToBounds,l=a.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,p=c||r>=o;if((r>=1||s)&&lN(e),!p&&i&&e.mounted){var h=uN(e,o,t||i.offsetWidth/2,n||i.offsetHeight/2);h&&XA(e,h,d,u)}}var hN=function(){return hN=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},hN.apply(this,arguments)};function mN(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var fN=1,gN=0,vN=0,bN={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},yN="react-transform-wrapper",xN="react-transform-component",wN=function(e){var t,n,r,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:fN,scale:null!==(n=e.initialScale)&&void 0!==n?n:fN,positionX:null!==(r=e.initialPositionX)&&void 0!==r?r:gN,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:vN}},$N=function(e){var t=hN({},bN);return Object.keys(e).forEach((function(n){var r=void 0!==e[n];if(void 0!==bN[n]&&r){var i=Object.prototype.toString.call(bN[n]),a="[object Object]"===i,o="[object Array]"===i;t[n]=a?hN(hN({},bN[n]),e[n]):o?mN(mN([],bN[n],!0),e[n],!0):e[n]}})),t},kN=function(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.maxScale,s=a.minScale,l=a.zoomAnimation,c=a.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?r*Math.exp(t*n):r+t*n;return eN(HA(u,3),s,o,d,!1)};function SN(e,t,n,r,i){var a=e.wrapperComponent,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY;if(!a)return console.error("No WrapperComponent found");var d=(a.offsetWidth/2-l)/s,u=(a.offsetHeight/2-c)/s,p=uN(e,kN(e,t,n),d,u);if(!p)return console.error("Error during zoom event. New transformation state was not calculated.");XA(e,p,r,i)}function ON(e,t,n,r){var i=e.setup,a=e.wrapperComponent,o=i.limitToBounds,s=wN(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(a){var p=KA(e,s.scale),h=QA(s.positionX,s.positionY,p,o,0,0,a),m={scale:s.scale,positionX:h.x,positionY:h.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==r||r(),XA(e,m,t,n))}}var CN=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),SN(e,1,t,n,r)}},TN=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),SN(e,-1,t,n,r)}},DN=function(e){return function(t,n,r,i,a){void 0===i&&(i=300),void 0===a&&(a="easeOut");var o=e.transformState,s=o.positionX,l=o.positionY,c=o.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var p={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(r)?c:r};XA(e,p,i,a)}}},jN=function(e){return function(t,n){void 0===t&&(t=200),void 0===n&&(n="easeOut"),ON(e,t,n)}},_N=function(e){return function(t,n,r){void 0===n&&(n=200),void 0===r&&(r="easeOut");var i=e.transformState,a=e.wrapperComponent,o=e.contentComponent;if(a&&o){var s=LN(t||i.scale,a,o);XA(e,s,n,r)}}},IN=function(e){return function(t,n,r,i){void 0===r&&(r=600),void 0===i&&(i="easeOut"),UA(e);var a=e.wrapperComponent,o="string"==typeof t?document.getElementById(t):t;if(a&&o&&a.contains(o)){var s=function(e,t,n){var r=e.wrapperComponent,i=e.contentComponent,a=e.transformState,o=e.setup,s=o.limitToBounds,l=o.minScale,c=o.maxScale;if(!r||!i)return a;var d=r.getBoundingClientRect(),u=t.getBoundingClientRect(),p=function(e,t,n,r){var i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n.getBoundingClientRect(),s=a.x*r.scale,l=a.y*r.scale;return{x:(i.x-o.x+s)/r.scale,y:(i.y-o.y+l)/r.scale}}(t,r,i,a),h=p.x,m=p.y,f=u.width/a.scale,g=u.height/a.scale,v=r.offsetWidth/f,b=r.offsetHeight/g,y=eN(n||Math.min(v,b),l,c,0,!1),x=(d.width-f*y)/2,w=(d.height-g*y)/2,$=QA((d.left-h)*y+x,(d.top-m)*y+w,KA(e,y),s,0,0,r);return{positionX:$.x,positionY:$.y,scale:y}}(e,o,n);XA(e,s,r,i)}}},EN=function(e){return{instance:e,zoomIn:CN(e),zoomOut:TN(e),setTransform:DN(e),resetTransform:jN(e),centerView:_N(e),zoomToElement:IN(e)}},MN=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,EN(e)),t};function AN(){try{return{get passive(){return!1}}}catch(e){return!1}}var NN=".".concat(yN),BN=function(e,t){return t.some((function(t){return e.matches("".concat(NN," ").concat(t,", ").concat(NN," .").concat(t,", ").concat(NN," ").concat(t," *, ").concat(NN," .").concat(t," *"))}))},RN=function(e){e&&clearTimeout(e)},LN=function(e,t,n){var r=n.offsetWidth*e,i=n.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-r)/2,positionY:(t.offsetHeight-i)/2}};function PN(e,t,n){var r=t.getBoundingClientRect(),i=0,a=0;if("clientX"in e)i=(e.clientX-r.left)/n,a=(e.clientY-r.top)/n;else{var o=e.touches[0];i=(o.clientX-r.left)/n,a=(o.clientY-r.top)/n}return(Number.isNaN(i)||Number.isNaN(a))&&console.error("No mouse or touch offset found"),{x:i,y:a}}var zN=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},FN=function(e,t){var n=e.props,r=n.onWheel,i=n.onZoom,a=e.contentComponent,o=e.setup,s=e.transformState.scale,l=o.limitToBounds,c=o.centerZoomedOut,d=o.zoomAnimation,u=o.wheel,p=o.disablePadding,h=o.smooth,m=d.size,f=d.disabled,g=u.step,v=u.smoothStep;if(!a)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var b=function(e,t){var n=function(e){return e?e.deltaY<0?1:-1:0}(e),r=function(e,t){return"number"==typeof e?e:t}(t,n);return r}(t,null),y=function(e,t,n,r,i){var a=e.transformState.scale,o=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,p=d.size,h=d.disabled;if(!o)throw new Error("Wrapper is not mounted");var m=a+t*n;if(i)return m;var f=!r&&!h;return eN(HA(m,3),c,l,p,f&&!u)}(e,b,h?v*Math.abs(t.deltaY):g,!t.ctrlKey);if(s!==y){var x=ZA(e,y),w=PN(t,a,s),$=l&&(f||0===m||c||p),k=JA(e,w.x,w.y,y,x,$),S=k.x,O=k.y;e.previousWheelEvent=t,e.setTransformState(y,S,O),WA(MN(e),t,r),WA(MN(e),t,i)}},HN=function(e,t){var n=e.props,r=n.onWheelStop,i=n.onZoomStop;RN(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(pN(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var a=function(e,t){var n=e.previousWheelEvent,r=e.transformState.scale,i=e.setup,a=i.maxScale,o=i.minScale;return!!n&&(r<a||r>o||Math.sign(n.deltaY)!==Math.sign(t.deltaY)||n.deltaY>0&&n.deltaY<t.deltaY||n.deltaY<0&&n.deltaY>t.deltaY||Math.sign(n.deltaY)!==Math.sign(t.deltaY))}(e,t);a&&(RN(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,WA(MN(e),t,r),WA(MN(e),t,i))}),160))},WN=function(e){for(var t=0,n=0,r=0;r<2;r+=1)t+=e.touches[r].clientX,n+=e.touches[r].clientY;return{x:t/2,y:n/2}},VN=function(e,t){var n=e.contentComponent,r=e.pinchStartDistance,i=e.wrapperComponent,a=e.transformState.scale,o=e.setup,s=o.limitToBounds,l=o.centerZoomedOut,c=o.zoomAnimation,d=o.alignmentAnimation,u=c.disabled,p=c.size;if(null!==r&&n){var h=function(e,t,n){var r=n.getBoundingClientRect(),i=e.touches,a=HA(i[0].clientX-r.left,5),o=HA(i[0].clientY-r.top,5);return{x:(a+HA(i[1].clientX-r.left,5))/2/t,y:(o+HA(i[1].clientY-r.top,5))/2/t}}(t,a,n);if(Number.isFinite(h.x)&&Number.isFinite(h.y)){var m=zN(t),f=function(e,t){var n=e.pinchStartScale,r=e.pinchStartDistance,i=e.setup,a=i.maxScale,o=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!n||null===r||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:eN(HA(t/r*n,2),o,a,c,!d&&!l)}(e,m),g=WN(t),v=g.x-(e.pinchLastCenterX||0),b=g.y-(e.pinchLastCenterY||0);if(f!==a||0!==v||0!==b){e.pinchLastCenterX=g.x,e.pinchLastCenterY=g.y;var y=ZA(e,f),x=s&&(u||0===p||l),w=JA(e,h.x,h.y,f,y,x),$=w.x,k=w.y;e.pinchMidpoint=h,e.lastDistance=m;var S=d.sizeX,O=d.sizeY,C=QA($+v,k+b,y,s,iN(e,S),iN(e,O),i),T=C.x,D=C.y;e.setTransformState(f,T,D)}}}},YN=function(e,t){var n=e.props.onZoomStop,r=e.setup.doubleClick.animationTime;RN(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,WA(MN(e),t,n)}),r)};function UN(e,t){var n=e.setup,r=e.doubleClickStopEventTimer,i=e.transformState,a=e.contentComponent,o=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=n.doubleClick,u=d.disabled,p=d.mode,h=d.step,m=d.animationTime,f=d.animationType;if(!u&&!r){if("reset"===p)return function(e,t){var n=e.props,r=n.onZoomStart,i=n.onZoom,a=e.setup.doubleClick,o=a.animationTime,s=a.animationType;WA(MN(e),t,r),ON(e,o,s,(function(){return WA(MN(e),t,i)})),YN(e,t)}(e,t);if(!a)return console.error("No ContentComponent found");var g=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(p,e.transformState.scale),v=kN(e,g,h);if(o!==v){WA(MN(e),t,l);var b=PN(t,a,o),y=uN(e,v,b.x,b.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");WA(MN(e),t,c),XA(e,y,m,f),YN(e,t)}}}var qN=function(e){var t=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,ZA(t,t.transformState.scale),t.setup=$N(e)},this.initializeWindowEvents=function(){var e,n,r=AN(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null===(n=t.wrapperComponent)||void 0===n||n.addEventListener("wheel",t.onWheelPanning,r),null==a||a.addEventListener("mousedown",t.onPanningStart,r),null==a||a.addEventListener("mousemove",t.onPanning,r),null==a||a.addEventListener("mouseup",t.onPanningStop,r),null==i||i.addEventListener("mouseleave",t.clearPanning,r),null==a||a.addEventListener("keyup",t.setKeyUnPressed,r),null==a||a.addEventListener("keydown",t.setKeyPressed,r)},this.cleanupWindowEvents=function(){var e,n,r=AN(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null==a||a.removeEventListener("mousedown",t.onPanningStart,r),null==a||a.removeEventListener("mousemove",t.onPanning,r),null==a||a.removeEventListener("mouseup",t.onPanningStop,r),null==i||i.removeEventListener("mouseleave",t.clearPanning,r),null==a||a.removeEventListener("keyup",t.setKeyUnPressed,r),null==a||a.removeEventListener("keydown",t.setKeyPressed,r),document.removeEventListener("mouseleave",t.clearPanning,r),UA(t),null===(n=t.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(e){var n=AN();e.addEventListener("wheel",t.onWheelZoom,n),e.addEventListener("dblclick",t.onDoubleClick,n),e.addEventListener("touchstart",t.onTouchPanningStart,n),e.addEventListener("touchmove",t.onTouchPanning,n),e.addEventListener("touchend",t.onTouchPanningStop,n)},this.handleInitialize=function(e,n){var r=!1,i=t.setup.centerOnInit,a=function(e,t){for(var n=0,r=e;n<r.length;n++)if(r[n].target===t)return!0;return!1};t.applyTransformation(),t.onInitCallbacks.forEach((function(e){e(MN(t))})),t.observer=new ResizeObserver((function(o){if(a(o,e)||a(o,n))if(i&&!r){var s=n.offsetWidth,l=n.offsetHeight;(s>0||l>0)&&(r=!0,t.setCenter())}else UA(t),ZA(t,t.transformState.scale),lN(t,0)})),t.observer.observe(e),t.observer.observe(n)},this.onWheelZoom=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.setup.wheel,r=n.disabled,i=n.wheelDisabled,a=n.touchPadDisabled,o=n.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||r||!c||i&&!t.ctrlKey||a&&t.ctrlKey||BN(c,o))}(t,e);n&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var n=e.props,r=n.onWheelStart,i=n.onZoomStart;e.wheelStopEventTimer||(UA(e),WA(MN(e),t,r),WA(MN(e),t,i))}(t,e),FN(t,e),HN(t,e))}},this.onWheelPanning=function(e){var n=t.setup,r=n.disabled,i=n.wheel,a=n.panning;if(t.wrapperComponent&&t.contentComponent&&!r&&i.wheelDisabled&&!a.disabled&&a.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var o=t.transformState,s=o.positionX,l=o.positionY,c=s-e.deltaX,d=l-e.deltaY,u=a.lockAxisX?s:c,p=a.lockAxisY?l:d,h=t.setup.alignmentAnimation,m=h.sizeX,f=h.sizeY,g=iN(t,m),v=iN(t,f);u===s&&p===l||rN(t,u,p,g,v)}},this.onPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;n||tN(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),UA(t),sN(t,e),WA(MN(t),e,r))},this.onPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;n||nN(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),cN(t,e.clientX,e.clientY),WA(MN(t),e,r))},this.onPanningStop=function(e){var n=t.props.onPanningStop;t.isPanning&&(dN(t),WA(MN(t),e,n))},this.onPinchStart=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinchingStart,a=r.onZoomStart;if(!n){var o=function(e,t){var n=e.setup.pinch,r=n.disabled,i=n.excluded,a=e.isInitialized,o=t.target;return!(!a||r||!o||BN(o,i))}(t,e);o&&(function(e,t){var n=zN(t);e.pinchStartDistance=n,e.lastDistance=n,e.pinchStartScale=e.transformState.scale,e.isPanning=!1;var r=WN(t);e.pinchLastCenterX=r.x,e.pinchLastCenterY=r.y,UA(e)}(t,e),UA(t),WA(MN(t),e,i),WA(MN(t),e,a))}},this.onPinch=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinching,a=r.onZoom;if(!n){var o=function(e){var t=e.setup.pinch.disabled,n=e.isInitialized,r=e.pinchStartDistance;return!(!n||t||!r)}(t);o&&(e.preventDefault(),e.stopPropagation(),VN(t,e),WA(MN(t),e,i),WA(MN(t),e,a))}},this.onPinchStop=function(e){var n,r,i=t.props,a=i.onPinchingStop,o=i.onZoomStop;t.pinchStartScale&&(r=(n=t).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,pN(n,null==r?void 0:r.x,null==r?void 0:r.y),WA(MN(t),e,a),WA(MN(t),e,o))},this.onTouchPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;if(!n&&tN(t,e)&&!(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)){t.lastTouch=+new Date,UA(t);var i=e.touches,a=1===i.length,o=2===i.length;a&&(UA(t),sN(t,e),WA(MN(t),e,r)),o&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(n)return;if(!nN(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];cN(t,i.clientX,i.clientY),WA(MN(t),e,r)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.isInitialized,r=e.setup,i=e.wrapperComponent,a=r.doubleClick,o=a.disabled,s=a.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(n&&l&&c)||o||BN(l,s))}(t,e);n&&UN(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,n,r){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(r))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=n,t.transformState.positionY=r,t.applyTransformation();var a=MN(t);t.onChangeCallbacks.forEach((function(e){return e(a)})),WA(a,{scale:e,positionX:n,positionY:r},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=LN(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,n,r){return t.props.customTransform?t.props.customTransform(e,n,r):function(e,t,n){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(n,")")}(e,n,r)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,n=e.scale,r=e.positionX,i=e.positionY,a=t.handleTransformStyles(r,i,n);t.contentComponent.style.transform=a}},this.getContext=function(){return MN(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,n){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=n,ZA(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(e,n),t.initializeWindowEvents(),t.isInitialized=!0;var r=MN(t);WA(r,void 0,t.props.onInit)},this.props=e,this.setup=$N(this.props),this.transformState=wN(this.props)},XN=i.createContext(null),KN=i.forwardRef((function(e,t){var n=a(new qN(e)).current,r=function(e,t){return"function"==typeof e?e(t):e}(e.children,EN(n));return v(t,(function(){return EN(n)}),[n]),u((function(){n.update(e)}),[n,e]),i.createElement(XN.Provider,{value:n},r)}));i.forwardRef((function(e,t){var n,r=a(null),o=f(XN);return u((function(){return o.onChange((function(e){if(r.current){r.current.style.transform=o.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[o]),i.createElement("div",hN({},e,{ref:(n=[r,t],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var GN="transform-component-module_wrapper__SPB86",ZN="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n  transform: translate3d(0, 0, 0);\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var QN=function(e){var t=e.children,n=e.wrapperClass,r=void 0===n?"":n,o=e.contentClass,s=void 0===o?"":o,l=e.wrapperStyle,c=e.contentStyle,d=e.wrapperProps,p=void 0===d?{}:d,h=e.contentProps,m=void 0===h?{}:h,g=f(XN),v=g.init,b=g.cleanupWindowEvents,y=a(null),x=a(null);return u((function(){var e=y.current,t=x.current;return null!==e&&null!==t&&v&&(null==v||v(e,t)),function(){null==b||b()}}),[]),i.createElement("div",hN({},p,{ref:y,className:"".concat(yN," ").concat(GN," ").concat(r),style:l}),i.createElement("div",hN({},m,{ref:x,className:"".concat(xN," ").concat(ZN," ").concat(s),style:c}),t))};const JN=I.div`
    background-color: ${pl.Neutral[6]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 3rem;
        width: 18%;
        height: auto;
    }
`,eB=t=>e(JN,Object.assign({},t,{children:e(te,{})})),tB=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,nB=I.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,rB=I(eB)`
    width: 100%;
    height: 100%;
`,iB=({src:t,className:n,alt:r,fit:i,placeholder:a,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=o(!0),[p,h]=o();u((()=>{d(!0),h(void 0);const e=new Image;e.src=t,e.onload=()=>{s&&l({src:t,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),h(e)}}),[t]);return e(tB,Object.assign({className:n},{children:p?null!=a?a:e(rB,{}):c?e(Oc,{}):e(nB,{src:t,alt:r,$fit:i})}))},aB=I(bl)`
    padding: 0;
    border-radius: 100%;
    background: ${pl.Neutral[8]};
    color: ${pl.Primary};
    height: 2.5rem;
    width: 2.5rem;
`,oB=I(aB)`
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 5;

    ${fl.MaxWidth.mobileL} {
        top: 1.25rem;
        right: 1.25rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,sB=I(aB)`
    position: absolute;
    top: 3rem;
    right: 6.5rem;
    z-index: 5;

    ${fl.MaxWidth.mobileL} {
        top: 1.25rem;
        right: 4.75rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,lB=I(aB)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&E`
            left: 3rem;
            ${fl.MaxWidth.mobileL} {
                left: 1.25rem;
            }
        `}

    ${e=>"right"===e.$position&&E`
            right: 3rem;
            ${fl.MaxWidth.mobileL} {
                right: 1.25rem;
            }
        `}

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,cB=I.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,dB=I.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,uB=I.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,pB=I.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,hB=I.div`
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
`,mB=I(iB)`
    height: 100%;
    width: 100%;
`,fB=I(eB)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,gB=I.div`
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
`,vB=I(Il.XSmall)`
    display: inline-flex;
    padding: 0.25rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${pl.Neutral[8]};
    text-align: center;
`,bB=I.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${pl.Neutral[1]};
    padding: 1.5rem 1rem;

    ${fl.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
    }
`,yB=I.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,xB=I.div`
    cursor: pointer;
    background-color: ${pl.Neutral[1]};
    border-radius: 10px;

    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.25rem;
    width: 6.25rem;

    ${fl.MaxWidth.mobileL} {
        height: 4rem;
        width: 4rem;
    }

    ${e=>e.$active?E`
                  border: 4px solid ${pl.Primary};

                  ${fl.MaxWidth.mobileL} {
                      border: 2px solid ${pl.Primary};
                  }
              `:E`
                  :hover {
                      border: 1px solid ${pl.Neutral[5]};
                  }
              `};
`,wB=I(iB)`
    height: 100%;
    width: 100%;
`,$B=(r,i)=>{var{items:s,initialActiveItemIndex:l,hideThumbnail:c=!1,hideNavigation:d=!1,hideCounter:p=!1,hideMagnifier:h=!1,onClose:m}=r,f=lt(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[g,b]=o(null!=l?l:0),[y,x]=o({}),[w,$]=o(1),[k,S]=o(null),[O,C]=o(null),T=a(null),D=a([]),j=a([]),_=k&&O?k-O:0;v(i,(()=>({currentItemIndex:g,setCurrentItem:B,goToPrevItem:A,goToNextItem:N}))),Od("keydown",(function(e){"ArrowRight"===e.key?N():"ArrowLeft"===e.key?A():"Escape"===e.key&&m&&m()}),"document"),u((()=>{var e,t;null===(t=null===(e=D.current)||void 0===e?void 0:e[g])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),$(1)}),[g]);const I=e=>{$(e.state.scale)};const E=({src:e,height:t,width:n})=>{x((r=>Object.assign(Object.assign({},r),{[e]:{height:t,width:n}})))},M=()=>{const e=y[s[g].src];if((null==T?void 0:T.current)&&e){const{clientHeight:t,clientWidth:n}=T.current,{width:r,height:i}=e,a=i/r<t/n;return r<n&&i<t?a?n/r:t/i:a?t/(i/(r/n)):n/(r/(i/t))}},A=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[g])||void 0===t||t.resetTransform(),b((e=>0===e?s.length-1:e-1))},N=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[g])||void 0===t||t.resetTransform(),b((e=>e===s.length-1?0:e+1))},B=e=>{var t,n;null===(n=null===(t=j.current)||void 0===t?void 0:t[g])||void 0===n||n.resetTransform(),b(e)};return t(Wm,Object.assign({},f,{"data-testid":"image-carousel-modal"},{children:[e(oB,Object.assign({"aria-label":"Close image carousel",onClick:m,focusHighlight:!1},{children:e(J,{"aria-hidden":!0})})),!h&&e(sB,Object.assign({"aria-label":1===w?"Zoom in":"Zoom out",onClick:()=>{var e,t,n,r;if(1===w){const n=M();null===(t=null===(e=j.current)||void 0===e?void 0:e[g])||void 0===t||t.centerView(n),$(n)}else $(1),null===(r=null===(n=j.current)||void 0===n?void 0:n[g])||void 0===r||r.resetTransform()},focusHighlight:!1},{children:e(1===w?ne:re,{"aria-hidden":!0})})),t(cB,{children:[t(dB,{children:[!d&&t(n,{children:[e(lB,Object.assign({"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:A},{children:e(ie,{"aria-hidden":!0})})),e(lB,Object.assign({"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:N},{children:e(ae,{"aria-hidden":!0})}))]}),e(uB,Object.assign({ref:T,onTouchStart:e=>{w<=1&&S(e.touches[0].clientX)},onTouchMove:e=>{!k||w>1||C(e.touches[0].clientX)},onTouchEnd:()=>{T.current&&Math.abs(_)>T.current.offsetWidth/3&&(_>0?N():A()),S(null),C(null)}},{children:e(pB,Object.assign({style:{transform:`translateX(calc(${100*-g}% - ${_}px))`}},{children:s.map(((t,n)=>{var r;return e(hB,Object.assign({"data-testid":"slide-item"},{children:e(KN,Object.assign({ref:e=>j.current[n]=e,panning:{disabled:w<=1},initialScale:1,onZoom:I,onZoomStop:I,onWheel:I},{children:e(QN,{children:e(mB,{src:t.src,alt:null!==(r=t.alt)&&void 0!==r?r:`Image ${n+1}`,placeholder:e(fB,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:E})})}))}),n)}))}))})),!p&&e(gB,{children:e(vB,Object.assign({weight:"semibold"},{children:`${g+1}/${s.length}`}))})]}),!c&&e(bB,{children:e(yB,{children:s.map(((t,n)=>{var r;const i=null!==(r=t.thumbnailSrc)&&void 0!==r?r:t.src;return e(xB,Object.assign({"data-testid":"thumbnail-item",$active:n===g,onClick:()=>B(n),ref:e=>D.current[n]=e},{children:e(wB,{src:i,alt:`Thumbnail ${n+1}`,fit:"cover"})}),n)}))})})]})]}))},kB=h($B),SB=I.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${pl.Neutral[8]};
    border: 1px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    max-width: 13rem;
    transition: all 200ms ease;
    ${_l.getTextStyle("Body","semibold")}
    color: ${({$selected:e})=>e&&pl.Primary};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${fl.MaxWidth.mobileL} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${_l.getTextStyle("BodySmall","semibold")}
    }

    ${e=>e.$error?E`
                background: ${pl.Neutral[8]};
                border: 1px solid ${pl.Validation.Red.Border};

                :hover {
                    box-shadow: 0 0 4px 1px ${pl.Shadow.Red};
                }
            `:e.$selected?E`
                background: ${pl.Accent.Light[5]};
                border: 1px solid ${pl.Primary};

                :hover {
                    box-shadow: 0 0 4px 1px ${pl.Shadow.Accent};
                }
            `:E`
                &:hover {
                    border: 1px solid ${pl.Accent.Light[1]};
                    box-shadow: 0 0 4px 1px ${pl.Shadow.Accent};
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
        color: ${pl.Neutral[3]};

        outline: none;
        cursor: not-allowed;
    }
`,OB=i.forwardRef(((n,r)=>{var{children:i,imgSrc:a,selected:o,error:s,type:l="button"}=n,c=lt(n,["children","imgSrc","selected","error","type"]);return t(SB,Object.assign({ref:r,$selected:o,$error:s,type:l},c,{children:[e(Bf,{src:a}),i]}))})),CB=E`
    height: 1.125rem;
    width: 1.125rem;
    color: ${pl.Primary};
`,TB=I.div`
    border-top: 1px solid ${pl.Neutral[5]};
    border-bottom: 1px solid ${pl.Neutral[5]};
`,DB=I(Il.H3)`
    color: ${pl.Primary};
    margin-bottom: 0.5rem;
`,jB=I(Il.Body)`
    color: ${pl.Primary};
`,_B=I(me)`
    ${CB}
`,IB=I.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: 1px solid ${pl.Neutral[5]};
    }

    :hover {
        ${DB},
        ${jB},
        ${_B} {
            color: ${pl.PrimaryDark};
        }
    }
`,EB=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,MB=I(Il.BodySmall)`
    margin-top: 0.25rem;
`,AB=I(Ra.div)`
    overflow: hidden;
`,NB=I.div`
    border-top: 1px solid ${pl.Neutral[5]};
`,BB=I(Il.H5)`
    color: ${pl.Primary};
    margin-right: 0.5rem;
`,RB=I(Je)`
    ${CB}
`,LB=I(Qe)`
    ${CB}
`,PB=I.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    transition: border-width 300ms linear;
    border-top: 1px solid ${pl.Neutral[5]};

    :hover {
        ${BB},
        ${RB},
        ${LB} {
            color: ${pl.PrimaryDark};
        }
    }
`,zB=r=>{var{items:i,maxShown:a,style:s="default",onItemClick:l}=r,c=lt(r,["items","maxShown","style","onItemClick"]);const[d,u]=o(!a||a>=i.length),p=a?i.slice(0,a):i,h=a?i.slice(a):[],m=an(),f=m.ref,g=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):l&&(e.preventDefault(),l(t,e))},v=()=>{u(!d)},b=(r,i,a,o)=>t(n,{children:[t(EB,{children:[e("small"===s?jB:DB,Object.assign({"data-testid":`link-title-${r}`,weight:"semibold"},{children:i})),a&&e(MB,Object.assign({"data-testid":`link-description-${r}`},{children:a})),o]}),e(_B,{})]}),y=ya({height:d?m.height:0});return t(TB,Object.assign({},c,{children:[p.map(((t,n)=>{const{title:r,description:i,secondaryDescription:a,onClick:o}=t,s=lt(t,["title","description","secondaryDescription","onClick"]);return e(IB,Object.assign({"data-testid":`list-item-shown-${n}`,onClick:e=>g(e,t)},s,{children:b(n,r,i,a)}),`list-item-shown-${n}`)})),h.length>0&&e(AB,Object.assign({style:y,"data-testid":"minimised-content"},{children:e(NB,Object.assign({ref:f},{children:h.map(((t,n)=>{const{title:r,description:i,onClick:a,secondaryDescription:o}=t,s=lt(t,["title","description","onClick","secondaryDescription"]);return e(IB,Object.assign({"data-testid":`list-item-minimised-${n}`,onClick:e=>g(e,t)},s,{children:b(n,r,i,o)}),`list-item-minimised-${n}`)}))}))})),h.length>0&&t(PB,Object.assign({type:"button",onClick:v,"data-testid":"toggle-button",$showMinimised:d},{children:[e(BB,Object.assign({weight:"semibold","data-testid":"toggle-button-label"},{children:d?"View less":"View more"})),e(d?LB:RB,{})]}))]}))},FB=I.div`
    ${e=>uc({textSize:e.$textSize})}
    ${e=>e.color&&E`
            color: ${e.color};
        `}
`,HB=h(((t,n)=>{const{baseTextColor:r,baseTextSize:i,inline:a}=t,o=lt(t,["baseTextColor","baseTextSize","inline"]);return e(FB,Object.assign({ref:n,as:a?"span":"div",$textSize:i,$textColor:r},o))})),WB=I.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,n=t.lg||t.md,r=t.sm?t.sm<=2?t.sm:2:void 0,i=t.md||t.sm||2;return E`
            grid-template-columns: repeat(${n||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${fl.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/i}% - 2rem), 1fr)
                );
            }

            ${fl.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${r||"auto-fill"},
                    minmax(calc(${100/(r||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,VB=I.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:n,startMd:r,colsMd:i,startSm:a,colsSm:o}=e;return E`
            grid-column: ${t||r||"auto"} / span
                ${n||i||1};

            ${fl.MaxWidth.tablet} {
                grid-column: ${r||a||"auto"} / span
                    ${i||o||1};
            }

            ${fl.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span ${o||1};
            }
        `}}
`,YB={Grid:i.forwardRef(((t,n)=>{const{children:r}=t,i=lt(t,["children"]);return e(WB,Object.assign({ref:n},i,{children:r}))})),Tile:i.forwardRef(((t,n)=>{const{children:r}=t,i=lt(t,["children"]);return e(VB,Object.assign({ref:n},i,{children:r}))}))},UB=I.div`
    // matches Layout.Container
    // not able to fully align with Layout.Section due to dynamic spacing
    --sgds-mainnav-max-width: 1320px;
    --sgds-mainnav-padding-x: 0.75rem;
    --sgds-mainnav-mobile-padding-x: 0.75rem;

    ${fl.MaxWidth.desktopM} {
        --sgds-mainnav-max-width: 1140px;
    }

    ${fl.MaxWidth.tablet} {
        --sgds-mainnav-max-width: 720px;
    }

    ${fl.MaxWidth.mobileL} {
        --sgds-mainnav-max-width: 100%;
    }
`,qB=()=>{u((()=>{t()||n()}),[]);const t=()=>document.getElementById(XB),n=()=>{if(!document.getElementById(XB)){const e=document.createElement("script");e.id=XB,e.type="module",e.src=KB,document.head.appendChild(e)}};return e(UB,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},XB="lifesg-ds-masthead-script",KB="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",GB={notCompress:6,compress:4},ZB=I.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,QB=I.nav`
    height: ${e=>e.$compress?GB.compress:GB.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Nl.Base};

    ${fl.MaxWidth.tablet} {
        height: ${3.5}rem;
    }
`,JB=I.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${fl.MaxWidth.tablet} {
        margin-left: 0rem;
    }
`,eR=I(bl)`
    display: none;

    ${fl.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,tR=I(et)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${pl.Neutral[1]};
`,nR=I.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${fl.MaxWidth.tablet} {
        height: 1.5rem;
    }

    ${fl.MaxWidth.mobileS} {
        height: 1.25rem;
    }
`,rR=I.div`
    display: flex;
    background-color: ${pl.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${fl.MaxWidth.tablet} {
        margin: 0 1rem;
    }

    ${fl.MaxWidth.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,iR=I.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Nl.Base};
        object-fit: contain;
    }
`,aR=({resources:t,onClick:n,"data-id":r,"data-testid":i="navbar-brand",type:a})=>e(iR,Object.assign({role:"link",onClick:e=>{n&&n(e,a)},tabIndex:0,"data-id":r,"data-testid":i,$type:a},{children:e(Bf,{src:t.logoSrc,alt:t.brandName})})),oR=I.div`
    display: none;

    ${fl.MaxWidth.tablet} {
        display: flex;
    }
`,sR=I.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?E`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:E`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return E`
            height: calc(${t} * 100);
        `}}

	${fl.MaxWidth.tablet} {
        width: 75%;
    }

    ${fl.MaxWidth.mobileL} {
        width: 100%;
    }
`,lR=I.div`
    display: flex;
    flex-direction: column;
`,cR=I.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,dR=I(Ae)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,uR=I(bl)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${pl.Neutral[1]};

    :active,
    :focus {
        color: ${pl.Primary};
    }
`,pR=i.forwardRef(((r,i)=>{const{show:a,resources:s,children:l,hideNavBranding:c,onClose:d,onBrandClick:p}=r,[h,m]=o(0),{primary:f,secondary:g}=s;u((()=>(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]);const v=()=>{if(window){const e=.01*window.innerHeight;m(e)}};return e(oR,Object.assign({ref:i,"data-testid":"drawer"},{children:e(sR,Object.assign({$show:a,$viewHeight:h},{children:t(lR,{children:[t(cR,{children:[e(nR,Object.assign({"data-id":"drawer-brand-container"},{children:!c&&t(n,{children:[e(aR,{resources:f,compress:!0,onClick:p,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),g&&t(n,{children:[e(rR,{}),e(aR,{resources:g,compress:!0,onClick:p,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),e(uR,Object.assign({onClick:d,focusHighlight:!1,"aria-label":"Close nav menu"},{children:e(dR,{})}))]}),l]})}))}))})),hR={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},mR={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},fR={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},gR={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},vR=I.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${fl.MaxWidth.tablet} {
        display: none;
    }
`,bR=I.ul`
    display: none;

    ${fl.MaxWidth.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,yR=I.ul`
    display: none;
    list-style: none;

    ${fl.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${fl.MaxWidth.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,xR=I.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${fl.MaxWidth.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${fl.MaxWidth.mobileL} {
        ${e=>{if(e.$mobile)return E`
                    padding: 0 1rem;
                `}}
    }
`,wR=I(ac.Small)`
    ${fl.MaxWidth.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,$R=I.div`
    display: none;

    ${fl.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,kR=I(Il.BodySmall)`
    margin-bottom: 0.5rem;
`,SR=I.div`
    display: flex;
`,OR=I.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${fl.MaxWidth.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${fl.MaxWidth.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,CR=({actionButtons:r,mobile:i=!1,onActionButtonClick:a})=>{const o=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),a(t,e)},l=(n,r)=>{const i=n?(e=>{const t=OS(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(r):r;return i.map(((r,i)=>{let a;switch(r.type){case"download":a=n?(l=r.args,t($R,{children:[e(kR,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),t(SR,{children:[e(OR,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:o},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(OR,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:o},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):e(wR,Object.assign({},r.args,{type:"button",onClick:s(r),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const t=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${n?"mobile-":""}${i+1}`;a=e(wR,Object.assign({},r.args,{type:"button",onClick:s(r),"data-testid":t}));break}case"component":{const e=r.args;a=e&&e.render||null;break}default:a=null}var l;if(a)return e(xR,Object.assign({$mobile:n},{children:a}),`action-button-${i+1}`)}))};if(r){const a=(null==r?void 0:r.mobile)||r.desktop,o=a.filter((e=>!!e.uncollapsible)),s=a.filter((e=>!e.uncollapsible));return i?e(n,{children:s.length>0&&e(yR,{children:l(i,s)})}):t(n,{children:[o.length>0&&e(bR,{children:l(!1,o)}),r.desktop.length>0&&e(vR,{children:l(i,r.desktop)})]})}return e(n,{})},TR=I.ul`
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

    background: ${pl.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${Xl.ElevationBoxShadow};
`,DR=I.ul`
    display: none;
    list-style: none;

    ${fl.MaxWidth.tablet} {
        border-left: 0.25rem solid ${pl.Primary};
        display: flex;
        flex-direction: column;
    }
`,jR=I(Il.Hyperlink.Small)`
    ${_l.getTextStyle("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${pl.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${pl.Primary};
    }
    :hover {
        color: ${pl.Accent.Light[1]};
    }

    ${fl.MaxWidth.tablet} {
        ${_l.getTextStyle("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,_R=I.li`
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

    ${fl.MaxWidth.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,IR=({items:t,mobile:r=!1,onItemClick:i})=>{const a=e=>t=>{t.stopPropagation(),i(t,e)},o=(n=!1)=>t.map(((t,r)=>{const{children:i,options:o}=t,s=lt(t,["children","options"]),l=n?`link__mobile-${r+1}`:`link__${r+1}`;return e(_R,{children:e(jR,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:a(t)},o,{children:i}))},r)}));if(t&&t.length>0){return e(r?DR:TR,{children:o(r)})}return e(n,{})},ER=I.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${fl.MaxWidth.tablet} {
        display: none;
    }
`,MR=I.ul`
    display: none;
    list-style: none;

    ${fl.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,AR=I.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${fl.MaxWidth.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,NR=I(Il.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${pl.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${pl.Neutral[1]};
    }

    ${fl.MaxWidth.tablet} {
        color: ${pl.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${pl.Neutral[1]};
        }
    }
`,BR=I.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,RR=I.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${pl.Primary};

    ${fl.MaxWidth.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${pl.Primary};
    }
`,LR=I.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,PR=I(bl)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,zR=I(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${pl.Neutral[3]};
    :hover {
        color: ${pl.Neutral[1]};
    }
`,FR=({items:r,selectedId:i,mobile:s=!1,hideNavBranding:l,onItemClick:c})=>{const[d,p]=o(-1),[h,m]=o(!1),f=a(null);u((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&g()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const g=()=>{m(!1)},v=(e,t)=>n=>{n.stopPropagation(),p(t),m(!0),c(n,e)},b=(e,t)=>{e.stopPropagation(),c(e,t),m(!1)},y=()=>r.map(((n,r)=>{if("component"===n.itemType){const t=n&&n.children||null;return e("li",{children:t},r)}{const a=(e=>{if(e.id===i)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(n),{children:o,options:c}=n,u=lt(n,["children","options"]),p=a?s?"bold":"semibold":"regular",m=s?`link__mobile-${r+1}`:`link__${r+1}`,f=d>=0&&d===r&&h;return t(AR,Object.assign({$hiddenBranding:l},{children:[t(NR,Object.assign({"data-testid":m,weight:p,$selected:a},u,{onClick:v(n,r)},c,{children:[e(BR,{children:o}),a&&e(RR,{"data-testid":`${m}-indicator`}),s&&n.subMenu&&e(LR,{children:e(PR,Object.assign({"data-testid":`${m}-expand-collapse-button`,$selected:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand"},{children:e(zR,{})}))})]})),f&&e(IR,{items:n.subMenu,mobile:s,onItemClick:b})]}),r)}}));return r&&r.length>0?s?e(MR,Object.assign({ref:f},{children:y()})):e(ER,Object.assign({ref:f,$alignLeft:l},{children:y()})):e(n,{})},HR=h(((r,i)=>{var{items:s,className:l,id:c,selectedId:d,compress:p=!1,fixed:h=!0,resources:m,hideNavElements:f=!1,hideNavBranding:g=!1,drawerDismissalExclusions:b=[],actionButtons:y,onItemClick:x,onActionButtonClick:w,onBrandClick:$,masthead:k=!0,layout:S="default"}=r,O=lt(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[C,T]=o(!1),[D,j]=o(!1),_="stretch"===S,I=a(),E=A(),M=(e=>{switch(e){case"bookingsg":return mR;case"mylegacy":return gR;case"ccube":return fR;default:return hR}})(null==E?void 0:E.resourceScheme),N=(null==m?void 0:m.primary)||M.primary,B=null==m?void 0:m.secondary;v(i,(()=>Object.assign(I.current,{dismissDrawer:()=>{R()}})),[C]),u((()=>(P(),window.addEventListener("resize",P),()=>{window.removeEventListener("resize",P)})),[]);const R=()=>{T(!1),setTimeout((()=>{j(!1)}),550)},L=e=>C&&-1===b.indexOf(e),P=()=>{window.innerWidth<=hl.tablet&&C&&R()},z=(e,t)=>{$&&(e.preventDefault(),$(t)),L("brand-click")&&R()},F=(e,t)=>{t.onClick?t.onClick(e):x&&(e.preventDefault(),x(t)),!(null==t?void 0:t.subMenu)&&L("item-click")&&R()},H=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):w&&(e.preventDefault(),w(t)),L("item-click")&&R()},W=()=>{T(!0),j(!0)},V=()=>{L("close-button-click")&&R()},Y=()=>{const t=s.mobile||s.desktop;return t&&t.length>0||y&&(()=>{const e=y.mobile||y.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?e(eR,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:W,focusHighlight:!1},{children:e(tR,{})})):null};return t(ZB,Object.assign({ref:I,$fixed:h,className:l,id:c||"navbar-wrapper","data-testid":O["data-testid"]||"navbar-wrapper"},{children:[k&&e(qB,{}),t(Tx.Content,Object.assign({stretch:_},{children:[t(QB,Object.assign({$compress:p},{children:[!g&&t(nR,Object.assign({$compress:p,"data-id":"brand-container"},{children:[e(aR,{resources:N,onClick:z,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),B&&t(n,{children:[e(rR,{$compress:p}),e(aR,{resources:B,onClick:z,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!f&&t(JB,Object.assign({$hideNavBranding:g},{children:[e(FR,{items:s.desktop,onItemClick:F,selectedId:d,hideNavBranding:g}),e(CR,{actionButtons:y,onActionButtonClick:H}),Y()]}))]})),!f&&e(Om,Object.assign({show:D,enableOverlayClick:!0,onOverlayClick:V},{children:t(pR,Object.assign({show:C,resources:{primary:N,secondary:B},onClose:V,onBrandClick:z,actionButtons:y,hideNavBranding:g},{children:[e(FR,{items:s.mobile||s.desktop,onItemClick:F,selectedId:d,mobile:!0}),e(CR,{actionButtons:y,onActionButtonClick:H,mobile:!0})]}))}))]}))]}))})),WR=GB,VR=3.5,YR=E`
    color: ${pl.Validation.Orange.Icon};

    svg {
        color: ${pl.Validation.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${pl.Validation.Orange.Icon};
        svg {
            color: ${pl.Validation.Orange.Icon};
        }
    }
`,UR=I.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${Nl.Base};
    background: ${pl.Neutral[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,qR=I(Tx.Content)`
    display: flex;
`,XR=I.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,KR=I.div`
    display: inline-block;
    width: 100%;

    ${_l.getTextStyle("Body","regular")}
    color: ${pl.Neutral[8]};

    p {
        display: inline-block;
    }

    strong {
        ${_l.getFontFamily("Body","semibold")}
        color: ${pl.Neutral[8]};
    }

    a {
        ${_l.getTextStyle("Body","regular")}
        ${YR}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return E`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,GR=I(Il.Hyperlink.Default)`
    position: relative;

    ${YR}
`,ZR=I(bl)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,QR=I(Ae)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${pl.Neutral[8]};
`,JR=I.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${pl.Validation.Orange.Icon};
    ${_l.getTextStyle("BodySmall","semibold")};

    cursor: pointer;
`,eL=I.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,tL=n=>{var{children:r,visible:i=!0,dismissible:a=!0,sticky:s=!0,onDismiss:l,id:c,forwardedRef:d,maxCollapsedHeight:p,onClick:h,actionButton:m}=n,f=lt(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const g=f["data-testid"],[v,b]=o(i),{height:y,ref:x}=an();u((()=>{b(i)}),[i]);const w=e=>{e.stopPropagation(),b(!1),a&&l&&l()},$=e=>{m.onClick&&(e.stopPropagation(),m.onClick(e))};if(!v)return null;return t(UR,Object.assign({ref:d,$sticky:s,$clickable:!!h,onClick:h},f,{children:[t(qR,Object.assign({id:nL("container",c)},{children:[t(XR,{children:[e(KR,Object.assign({"data-testid":nL("text-content",g),$maxCollapsedHeight:p&&y>p?p:void 0},{children:e("div",Object.assign({ref:x},{children:r}))})),m&&e(JR,Object.assign({id:nL("action-button",c),"data-testid":nL("action-button",g),type:"button"},m,{onClick:$},{children:m.children}))]}),a&&e(ZR,Object.assign({onClick:w,id:nL("dismiss-button",c),"data-testid":nL("dismiss-button",g),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e(QR,{"aria-hidden":!0})}))]})),h&&e(eL,{"aria-label":"Clickable banner",type:"button"})]}))},nL=(e,t="wrapper")=>`${t}-${e}`,rL=i.forwardRef(((t,n)=>e(tL,Object.assign({},t,{forwardedRef:n})))),iL=Object.assign(rL,{Link:GR}),{entries:aL,setPrototypeOf:oL,isFrozen:sL,getPrototypeOf:lL,getOwnPropertyDescriptor:cL}=Object;let{freeze:dL,seal:uL,create:pL}=Object,{apply:hL,construct:mL}="undefined"!=typeof Reflect&&Reflect;dL||(dL=function(e){return e}),uL||(uL=function(e){return e}),hL||(hL=function(e,t,n){return e.apply(t,n)}),mL||(mL=function(e,t){return new e(...t)});const fL=_L(Array.prototype.forEach),gL=_L(Array.prototype.lastIndexOf),vL=_L(Array.prototype.pop),bL=_L(Array.prototype.push),yL=_L(Array.prototype.splice),xL=_L(String.prototype.toLowerCase),wL=_L(String.prototype.toString),$L=_L(String.prototype.match),kL=_L(String.prototype.replace),SL=_L(String.prototype.indexOf),OL=_L(String.prototype.trim),CL=_L(Object.prototype.hasOwnProperty),TL=_L(RegExp.prototype.test),DL=(jL=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return mL(jL,t)});var jL;function _L(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return hL(e,t,r)}}function IL(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:xL;oL&&oL(e,null);let r=t.length;for(;r--;){let i=t[r];if("string"==typeof i){const e=n(i);e!==i&&(sL(t)||(t[r]=e),i=e)}e[i]=!0}return e}function EL(e){for(let t=0;t<e.length;t++){CL(e,t)||(e[t]=null)}return e}function ML(e){const t=pL(null);for(const[n,r]of aL(e)){CL(e,n)&&(Array.isArray(r)?t[n]=EL(r):r&&"object"==typeof r&&r.constructor===Object?t[n]=ML(r):t[n]=r)}return t}function AL(e,t){for(;null!==e;){const n=cL(e,t);if(n){if(n.get)return _L(n.get);if("function"==typeof n.value)return _L(n.value)}e=lL(e)}return function(){return null}}const NL=dL(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),BL=dL(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),RL=dL(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),LL=dL(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),PL=dL(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),zL=dL(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),FL=dL(["#text"]),HL=dL(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),WL=dL(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),VL=dL(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),YL=dL(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),UL=uL(/\{\{[\w\W]*|[\w\W]*\}\}/gm),qL=uL(/<%[\w\W]*|[\w\W]*%>/gm),XL=uL(/\$\{[\w\W]*/gm),KL=uL(/^data-[\-\w.\u00B7-\uFFFF]+$/),GL=uL(/^aria-[\-\w]+$/),ZL=uL(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),QL=uL(/^(?:\w+script|data):/i),JL=uL(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),eP=uL(/^html$/i),tP=uL(/^[a-z][.\w]*(-[.\w]+)+$/i);var nP=Object.freeze({__proto__:null,ARIA_ATTR:GL,ATTR_WHITESPACE:JL,CUSTOM_ELEMENT:tP,DATA_ATTR:KL,DOCTYPE_NAME:eP,ERB_EXPR:qL,IS_ALLOWED_URI:ZL,IS_SCRIPT_OR_DATA:QL,MUSTACHE_EXPR:UL,TMPLIT_EXPR:XL});const rP=1,iP=3,aP=7,oP=8,sP=9,lP=function(){return"undefined"==typeof window?null:window};var cP=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lP();const n=t=>e(t);if(n.version="3.2.6",n.removed=[],!t||!t.document||t.document.nodeType!==sP||!t.Element)return n.isSupported=!1,n;let{document:r}=t;const i=r,a=i.currentScript,{DocumentFragment:o,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:h,trustedTypes:m}=t,f=c.prototype,g=AL(f,"cloneNode"),v=AL(f,"remove"),b=AL(f,"nextSibling"),y=AL(f,"childNodes"),x=AL(f,"parentNode");if("function"==typeof s){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let w,$="";const{implementation:k,createNodeIterator:S,createDocumentFragment:O,getElementsByTagName:C}=r,{importNode:T}=i;let D={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof aL&&"function"==typeof x&&k&&void 0!==k.createHTMLDocument;const{MUSTACHE_EXPR:j,ERB_EXPR:_,TMPLIT_EXPR:I,DATA_ATTR:E,ARIA_ATTR:M,IS_SCRIPT_OR_DATA:A,ATTR_WHITESPACE:N,CUSTOM_ELEMENT:B}=nP;let{IS_ALLOWED_URI:R}=nP,L=null;const P=IL({},[...NL,...BL,...RL,...PL,...FL]);let z=null;const F=IL({},[...HL,...WL,...VL,...YL]);let H=Object.seal(pL(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,V=null,Y=!0,U=!0,q=!1,X=!0,K=!1,G=!0,Z=!1,Q=!1,J=!1,ee=!1,te=!1,ne=!1,re=!0,ie=!1,ae=!0,oe=!1,se={},le=null;const ce=IL({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let de=null;const ue=IL({},["audio","video","img","source","image","track"]);let pe=null;const he=IL({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),me="http://www.w3.org/1998/Math/MathML",fe="http://www.w3.org/2000/svg",ge="http://www.w3.org/1999/xhtml";let ve=ge,be=!1,ye=null;const xe=IL({},[me,fe,ge],wL);let we=IL({},["mi","mo","mn","ms","mtext"]),$e=IL({},["annotation-xml"]);const ke=IL({},["title","style","font","a","script"]);let Se=null;const Oe=["application/xhtml+xml","text/html"];let Ce=null,Te=null;const De=r.createElement("form"),je=function(e){return e instanceof RegExp||e instanceof Function},_e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Te||Te!==e){if(e&&"object"==typeof e||(e={}),e=ML(e),Se=-1===Oe.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,Ce="application/xhtml+xml"===Se?wL:xL,L=CL(e,"ALLOWED_TAGS")?IL({},e.ALLOWED_TAGS,Ce):P,z=CL(e,"ALLOWED_ATTR")?IL({},e.ALLOWED_ATTR,Ce):F,ye=CL(e,"ALLOWED_NAMESPACES")?IL({},e.ALLOWED_NAMESPACES,wL):xe,pe=CL(e,"ADD_URI_SAFE_ATTR")?IL(ML(he),e.ADD_URI_SAFE_ATTR,Ce):he,de=CL(e,"ADD_DATA_URI_TAGS")?IL(ML(ue),e.ADD_DATA_URI_TAGS,Ce):ue,le=CL(e,"FORBID_CONTENTS")?IL({},e.FORBID_CONTENTS,Ce):ce,W=CL(e,"FORBID_TAGS")?IL({},e.FORBID_TAGS,Ce):ML({}),V=CL(e,"FORBID_ATTR")?IL({},e.FORBID_ATTR,Ce):ML({}),se=!!CL(e,"USE_PROFILES")&&e.USE_PROFILES,Y=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,q=e.ALLOW_UNKNOWN_PROTOCOLS||!1,X=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,K=e.SAFE_FOR_TEMPLATES||!1,G=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,J=e.FORCE_BODY||!1,re=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,ae=!1!==e.KEEP_CONTENT,oe=e.IN_PLACE||!1,R=e.ALLOWED_URI_REGEXP||ZL,ve=e.NAMESPACE||ge,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,$e=e.HTML_INTEGRATION_POINTS||$e,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&je(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&je(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),K&&(U=!1),te&&(ee=!0),se&&(L=IL({},FL),z=[],!0===se.html&&(IL(L,NL),IL(z,HL)),!0===se.svg&&(IL(L,BL),IL(z,WL),IL(z,YL)),!0===se.svgFilters&&(IL(L,RL),IL(z,WL),IL(z,YL)),!0===se.mathMl&&(IL(L,PL),IL(z,VL),IL(z,YL))),e.ADD_TAGS&&(L===P&&(L=ML(L)),IL(L,e.ADD_TAGS,Ce)),e.ADD_ATTR&&(z===F&&(z=ML(z)),IL(z,e.ADD_ATTR,Ce)),e.ADD_URI_SAFE_ATTR&&IL(pe,e.ADD_URI_SAFE_ATTR,Ce),e.FORBID_CONTENTS&&(le===ce&&(le=ML(le)),IL(le,e.FORBID_CONTENTS,Ce)),ae&&(L["#text"]=!0),Z&&IL(L,["html","head","body"]),L.table&&(IL(L,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw DL('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw DL('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,$=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(m,a)),null!==w&&"string"==typeof $&&($=w.createHTML(""));dL&&dL(e),Te=e}},Ie=IL({},[...BL,...RL,...LL]),Ee=IL({},[...PL,...zL]),Me=function(e){bL(n.removed,{element:e});try{x(e).removeChild(e)}catch(t){v(e)}},Ae=function(e,t){try{bL(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){bL(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{Me(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ne=function(e){let t=null,n=null;if(J)e="<remove></remove>"+e;else{const t=$L(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Se&&ve===ge&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(ve===ge)try{t=(new h).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=k.createDocument(ve,"template",null);try{t.documentElement.innerHTML=be?$:i}catch(e){}}const a=t.body||t.documentElement;return e&&n&&a.insertBefore(r.createTextNode(n),a.childNodes[0]||null),ve===ge?C.call(t,Z?"html":"body")[0]:Z?t.documentElement:a},Be=function(e){return S.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Re=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Le=function(e){return"function"==typeof l&&e instanceof l};function Pe(e,t,r){fL(e,(e=>{e.call(n,t,r,Te)}))}const ze=function(e){let t=null;if(Pe(D.beforeSanitizeElements,e,null),Re(e))return Me(e),!0;const r=Ce(e.nodeName);if(Pe(D.uponSanitizeElement,e,{tagName:r,allowedTags:L}),G&&e.hasChildNodes()&&!Le(e.firstElementChild)&&TL(/<[/\w!]/g,e.innerHTML)&&TL(/<[/\w!]/g,e.textContent))return Me(e),!0;if(e.nodeType===aP)return Me(e),!0;if(G&&e.nodeType===oP&&TL(/<[/\w]/g,e.data))return Me(e),!0;if(!L[r]||W[r]){if(!W[r]&&He(r)){if(H.tagNameCheck instanceof RegExp&&TL(H.tagNameCheck,r))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(r))return!1}if(ae&&!le[r]){const t=x(e)||e.parentNode,n=y(e)||e.childNodes;if(n&&t){for(let r=n.length-1;r>=0;--r){const i=g(n[r],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,b(e))}}}return Me(e),!0}return e instanceof c&&!function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:ve,tagName:"template"});const n=xL(e.tagName),r=xL(t.tagName);return!!ye[e.namespaceURI]&&(e.namespaceURI===fe?t.namespaceURI===ge?"svg"===n:t.namespaceURI===me?"svg"===n&&("annotation-xml"===r||we[r]):Boolean(Ie[n]):e.namespaceURI===me?t.namespaceURI===ge?"math"===n:t.namespaceURI===fe?"math"===n&&$e[r]:Boolean(Ee[n]):e.namespaceURI===ge?!(t.namespaceURI===fe&&!$e[r])&&!(t.namespaceURI===me&&!we[r])&&!Ee[n]&&(ke[n]||!Ie[n]):!("application/xhtml+xml"!==Se||!ye[e.namespaceURI]))}(e)?(Me(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!TL(/<\/no(script|embed|frames)/i,e.innerHTML)?(K&&e.nodeType===iP&&(t=e.textContent,fL([j,_,I],(e=>{t=kL(t,e," ")})),e.textContent!==t&&(bL(n.removed,{element:e.cloneNode()}),e.textContent=t)),Pe(D.afterSanitizeElements,e,null),!1):(Me(e),!0)},Fe=function(e,t,n){if(re&&("id"===t||"name"===t)&&(n in r||n in De))return!1;if(U&&!V[t]&&TL(E,t));else if(Y&&TL(M,t));else if(!z[t]||V[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&TL(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&TL(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&TL(H.tagNameCheck,n)||H.tagNameCheck instanceof Function&&H.tagNameCheck(n))))return!1}else if(pe[t]);else if(TL(R,kL(n,N,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==SL(n,"data:")||!de[e]){if(q&&!TL(A,kL(n,N,"")));else if(n)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&$L(e,B)},We=function(e){Pe(D.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Re(e))return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:z,forceKeepAttr:void 0};let i=t.length;for(;i--;){const a=t[i],{name:o,namespaceURI:s,value:l}=a,c=Ce(o),d=l;let u="value"===o?d:OL(d);if(r.attrName=c,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,Pe(D.uponSanitizeAttribute,e,r),u=r.attrValue,!ie||"id"!==c&&"name"!==c||(Ae(o,e),u="user-content-"+u),G&&TL(/((--!?|])>)|<\/(style|title)/i,u)){Ae(o,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){Ae(o,e);continue}if(!X&&TL(/\/>/i,u)){Ae(o,e);continue}K&&fL([j,_,I],(e=>{u=kL(u,e," ")}));const p=Ce(e.nodeName);if(Fe(p,c,u)){if(w&&"object"==typeof m&&"function"==typeof m.getAttributeType)if(s);else switch(m.getAttributeType(p,c)){case"TrustedHTML":u=w.createHTML(u);break;case"TrustedScriptURL":u=w.createScriptURL(u)}if(u!==d)try{s?e.setAttributeNS(s,o,u):e.setAttribute(o,u),Re(e)?Me(e):vL(n.removed)}catch(t){Ae(o,e)}}else Ae(o,e)}Pe(D.afterSanitizeAttributes,e,null)},Ve=function e(t){let n=null;const r=Be(t);for(Pe(D.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)Pe(D.uponSanitizeShadowNode,n,null),ze(n),We(n),n.content instanceof o&&e(n.content);Pe(D.afterSanitizeShadowDOM,t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,a=null,s=null,c=null;if(be=!e,be&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Le(e)){if("function"!=typeof e.toString)throw DL("toString is not a function");if("string"!=typeof(e=e.toString()))throw DL("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Q||_e(t),n.removed=[],"string"==typeof e&&(oe=!1),oe){if(e.nodeName){const t=Ce(e.nodeName);if(!L[t]||W[t])throw DL("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)r=Ne("\x3c!----\x3e"),a=r.ownerDocument.importNode(e,!0),a.nodeType===rP&&"BODY"===a.nodeName||"HTML"===a.nodeName?r=a:r.appendChild(a);else{if(!ee&&!K&&!Z&&-1===e.indexOf("<"))return w&&ne?w.createHTML(e):e;if(r=Ne(e),!r)return ee?null:ne?$:""}r&&J&&Me(r.firstChild);const d=Be(oe?e:r);for(;s=d.nextNode();)ze(s),We(s),s.content instanceof o&&Ve(s.content);if(oe)return e;if(ee){if(te)for(c=O.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return(z.shadowroot||z.shadowrootmode)&&(c=T.call(i,c,!0)),c}let u=Z?r.outerHTML:r.innerHTML;return Z&&L["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&TL(eP,r.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+u),K&&fL([j,_,I],(e=>{u=kL(u,e," ")})),w&&ne?w.createHTML(u):u},n.setConfig=function(){_e(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},n.clearConfig=function(){Te=null,Q=!1},n.isValidAttribute=function(e,t,n){Te||_e({});const r=Ce(e),i=Ce(t);return Fe(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&bL(D[e],t)},n.removeHook=function(e,t){if(void 0!==t){const n=gL(D[e],t);return-1===n?void 0:yL(D[e],n,1)[0]}return vL(D[e])},n.removeHooks=function(e){D[e]=[]},n.removeAllHooks=function(){D={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},n}();const dP=t=>i.forwardRef(((n,r)=>e(tL,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=cP.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e(iL.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),uP=I.div`
    display: flex;
    flex-direction: column;
`,pP=I.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,hP=I(ow)`
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

    ${fl.MaxWidth.mobileM} {
        padding: 0 0.5rem;
    }
`,mP=I(ac.Small)`
    margin: 2rem 0rem;
`,fP=n=>{var{id:r,value:i=[],"data-testid":s,className:l,cooldownDuration:c,actionButtonProps:d,errorMessage:p,numOfInput:h,onChange:m,onCooldownStart:f,onCooldownEnd:g}=n,v=lt(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const b=null!=d?d:{},{disabled:y,onClick:x,styleType:w="secondary"}=b,$=lt(b,["disabled","onClick","styleType"]),k=a([]),S=a(m),[O,C]=o(new Array(h).fill("")),[T,D]=o(c),[j,_]=o(new Date);u((()=>{var e;return null===(e=null==k?void 0:k.current[0])||void 0===e||e.focus(),document.addEventListener("paste",M),()=>document.removeEventListener("paste",M)}),[]),u((()=>{if(0!==c){f&&f();const e=B();return()=>e()}}),[j]),u((()=>{S.current=m}),[m]),u((()=>{i.length===h&&C(i)}),[i]);const I=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(A(r)){const t=[...O];t[e]=r.substring(r.length-1),null===(n=k.current[e+1])||void 0===n||n.focus(),C(t),m&&m(t)}},E=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...O];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=k.current[e-1])||void 0===n||n.focus()),C(t),m&&m(t)}},M=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&A(t,h)?(C(n),S.current&&S.current(n)):e.preventDefault()},A=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),N=()=>{const e=Date.now(),t=1e3*c;return e<j.valueOf()+t},B=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*c,r=Math.ceil((j.valueOf()+n-t)/1e3);D(r),r<=0&&(g&&g(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},R=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return t(uP,Object.assign({id:r,"data-testid":s,className:l},{children:[e(pP,{children:O.map(((t,n)=>e(hP,Object.assign({id:R(n,"otp-input",r),"data-testid":R(n,"otp-input",s),"aria-label":`Enter OTP character ${n+1}`,ref:e=>k.current[n]=e,type:"text",inputMode:"numeric",value:t,error:!!p,onChange:I(n),onKeyDown:E(n),autoComplete:"off"},v),n)))}),p&&e(wx,{children:p}),e(mP,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{C(new Array(h).fill("")),N()||(_(new Date),D(c)),x&&x(e)},disabled:y||N()},{children:$.children?$.children:"Resend OTP"+(T?` in ${T} second${T>1?"s":""}`:"")}))]}))},gP=I.nav`
    display: flex;
`,vP=I.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${fl.MaxWidth.tablet} {
        align-self: center;
    }
`,bP=I.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,yP=I(bl)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${pl.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${pl.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${pl.Accent.Light[1]};
    }
`,xP=I(bl)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${pl.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${pl.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${pl.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?E`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:E`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${fl.MaxWidth.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,wP=I(ac.Default)`
    background: ${e=>e.$selected?pl.Primary:pl.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?pl.Primary:pl.Neutral[5]};
    color: ${e=>e.$selected?pl.Neutral[8]:pl.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?pl.Neutral[8]:pl.Neutral[1]};
        ${e=>e.$selected?E`
                    ${_l.getTextStyle("Body",700)};
                `:E`
                    ${_l.getTextStyle("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?pl.Primary:pl.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?pl.Primary:pl.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?pl.Neutral[8]:pl.Primary};
            ${e=>e.$selected?E`
                        ${_l.getTextStyle("Body",700)};
                    `:E`
                        ${_l.getTextStyle("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?pl.Primary:pl.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${pl.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?pl.Neutral[8]:pl.Primary};

            ${e=>e.$selected?E`
                        ${_l.getTextStyle("Body",700)};
                    `:E`
                        ${_l.getTextStyle("Body",400)};
                    `}
        }
    }
`;I(bl)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${pl.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${pl.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${pl.Accent.Light[1]};
    }
`;const $P=I.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,kP=I.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${pl.Neutral[1]};

    display: flex;
    justify-content: center;
`,SP=I(Il.Body)`
    white-space: nowrap;
`,OP=I(Il.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,CP=I(ow)`
    ${_l.getTextStyle("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${pl.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${_l.getTextStyle("XSmall",400)};
        }
    }
`,TP=I.div`
    ${_l.getTextStyle("XSmall",400)};

    background-color: ${pl.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${pl.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,DP=I.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,jP=i.forwardRef((({id:n,"data-testid":r,className:i,pageSize:a=10,totalItems:s,activePage:l,pageSizeOptions:c=_P,showFirstAndLastNav:d,showPageSizeChanger:p=!1,onPageChange:h,onPageSizeChange:m},f)=>{const g=zc.useMediaQuery({maxWidth:hl.mobileL}),v=c,[b,y]=o(!1),[x,w]=o(!1),[$,k]=o(""),[S,O]=o(v&&v.length>=1?v[0]:null),[C,T]=o(!g&&p&&S?S.value:a),D=Math.ceil(s/C),j=1===l,_=l===D,I=l>1?()=>P(1):void 0,E=l<D?()=>P(D):void 0,M=l>1?()=>P(l-1):void 0,A=l<D?()=>P(parseInt(l.toString())+1):void 0,N=e=>e?()=>U():()=>V(),B=e=>e?()=>q():()=>Y();u((()=>{l&&R(l)}),[l]),u((()=>{var e;T(a),O(null!==(e=v.find((e=>e.value===a)))&&void 0!==e?e:null)}),[a]);const R=e=>{k(e.toString())},L=()=>{y(!1),w(!1)},P=e=>{h&&(h(e),R(e))},z=()=>{const e=Math.min(D,l+5);P(e),R(e),y(!0),w(!1)},F=()=>{const e=Math.max(1,l-5);P(e),R(e),y(!1),w(!0)},H=e=>{const t=e.target.value;if(void 0===t||0===t.length)k("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));R(Math.max(1,Math.min(D,e)))}else k(t.replace(/[^0-9]/g,""))},W=e=>{e.preventDefault(),$&&h(parseInt($))},V=()=>{y(!0)},Y=()=>{y(!1)},U=()=>{w(!0)},q=()=>{w(!1)},X=(n,r,i)=>t($P,{children:[e(yP,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":n?"Previous 5 pages":"Next 5 pages",onMouseOver:N(n),onMouseOut:B(n),onFocus:N(n),onBlur:B(n),onClick:n?F:z},{children:e(n&&x?tt:r&&b?nt:at,{"aria-hidden":!0})})),n&&x&&e(TP,{children:"Previous 5 pages"}),r&&b&&e(TP,{children:"Next 5 pages"})]},i);return t(gP,Object.assign({className:i,ref:f,id:n||"pagination-wrapper","data-testid":r||"pagination","aria-label":"Pagination"},{children:[e(vP,{children:t(bP,{children:[d&&e(xP,Object.assign({onClick:I,disabled:j,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:e(rt,{"aria-hidden":!0})})),e(xP,Object.assign({onClick:M,disabled:j,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:e(fe,{"aria-hidden":!0})})),g?t(kP,{children:[e("form",Object.assign({onSubmit:W},{children:e(CP,{value:$,onChange:H,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(r||"pagination")+"-input"})})),e(OP,{children:"/"}),e(SP,{children:D})]}):[...Array(D)].map(((t,n)=>{const r=n+1,i=D-5,a=l===r;if(D<=7)return e(wP,Object.assign({onClick:()=>P(r),$selected:a,"aria-label":"Page "+r,"aria-current":!!a&&"page",onMouseOver:L,onFocus:L},{children:r}),r);const o=l+1>5&&2===r,s=l-1<=i&&r===D-1-1;return o||s?X(o,s,r):r<=5&&l+1<=5||r<=1||r===l||r<=l+1&&r>=l-1-1||r>i&&l-1>i||r>D-1?e(wP,Object.assign({onClick:()=>P(r),$selected:a,"aria-label":"Page "+r,"aria-current":!!a&&"page",onMouseOver:L,onFocus:L},{children:r}),r):null})),e(xP,Object.assign({onClick:A,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:e(me,{"aria-hidden":!0})})),d&&e(xP,Object.assign({onClick:E,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:e(it,{"aria-hidden":!0})}))]})}),p&&!g&&e(DP,{children:e(II,{options:v,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:S,onSelectOption:e=>{O(e);const t=e.value,n=Math.ceil(s/t);T(t);m&&m(l>=n?n:l,t)}})})]}))})),_P=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],IP=I.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${_l.getTextStyle("XSmall","semibold")}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r;if("solid"===e.$type)switch(r=pl.Neutral[8],e.$color){case"grey":t=pl.Neutral[3],n=pl.Neutral[3];break;case"green":t=pl.Validation.Green.Text,n=pl.Validation.Green.Text;break;case"yellow":t=pl.Validation.Orange.Text,n=pl.Validation.Orange.Text;break;case"red":t=pl.Validation.Red.Text,n=pl.Validation.Red.Text;break;case"blue":t=pl.Validation.Blue.Text,n=pl.Validation.Blue.Text;break;default:t=pl.Neutral[1],n=pl.Neutral[1]}else switch(e.$color){case"grey":t=pl.Neutral[6],n=pl.Neutral[4],r=pl.Neutral[3];break;case"green":t=pl.Validation.Green.Background,n=pl.Validation.Green.Border,r=pl.Validation.Green.Text;break;case"yellow":t=pl.Validation.Orange.Background,n=pl.Validation.Orange.Border,r=pl.Validation.Orange.Text;break;case"red":t=pl.Validation.Red.Background,n=pl.Validation.Red.Border,r=pl.Validation.Red.Text;break;case"blue":t=pl.Validation.Blue.Background,n=pl.Validation.Blue.Border,r=pl.Validation.Blue.Text;break;default:t=pl.Neutral[8],n=pl.Neutral[5],r=pl.Neutral[1]}return E`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};
        `}}
`,EP=I.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,MP=n=>{var{type:r,colorType:i="black",children:a,icon:o}=n,s=lt(n,["type","colorType","children","icon"]);return t(IP,Object.assign({$type:r,$color:i},s,{children:[o,e(EP,{children:a})]}))},AP=I.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?E`
            visibility: visible;
            opacity: 1;
            transition: ${Nl.Base};
            z-index: 50;
        `:E`
            visibility: hidden;
            opacity: 0;
            transition: ${Nl.Base};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return E`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return E`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return E`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return E`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return E`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return E`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${fl.MaxWidth.mobileL} {
        display: none;
    }
`,NP=I(Hm)`
    padding: 3.5rem 1.25rem 2.5rem;
`,BP=I.div`
    position: relative;
    width: fit-content;
`,RP=I.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,LP=I.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,PP=r=>{var{children:i,visible:s,onMobileClose:l}=r,c=lt(r,["children","visible","onMobileClose"]);const d=c["data-testid"]||"popover",[p,h]=o("none"),m=a(null),f=zc.useMediaQuery({maxWidth:hl.mobileL}),g=a(p);u((()=>(y(),window.addEventListener("resize",fp(v,300)),()=>{window.removeEventListener("resize",fp(v,300))})),[]);const v=()=>{y()},b=()=>{l&&l()},y=()=>{const e=x();var t;e&&(t=e,g.current=t,h(t))},x=()=>{if(m.current){const e=m.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===g.current||"left"===g.current)&&e.x-e.width/2>t||("top-right"===g.current||"right"===g.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},w=()=>"string"==typeof i?e(Il.BodySmall,{children:i}):i;return t(n,{children:[e(AP,Object.assign({ref:m,"data-testid":d,$visible:s,$offset:p},c,{children:e(Uu,{children:w()})})),f&&e(Pm,Object.assign({show:s,onOverlayClick:b},{children:e(NP,Object.assign({onClose:b},{children:e(LP,{children:w()})}))}))]})},zP=(n,r)=>i=>{const{onPopoverAppear:s,onPopoverDismiss:l}=i,c=lt(i,["onPopoverAppear","onPopoverDismiss"]),d=r.trigger||"click",p=c,[h,m]=o(!1),f=a(),g=zc.useMediaQuery({maxWidth:hl.mobileL});u((()=>{if(!g)return document.addEventListener("mousedown",v),()=>{document.removeEventListener("mousedown",v)}}),[h]);const v=e=>{f&&!f.current.contains(e.target)&&(h&&m(!1),l&&l())};return t(BP,Object.assign({id:"popover-hoc-wrapper",ref:f},{children:[e(RP,Object.assign({id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||g)&&(m(!h),!h&&s&&s(),h&&l&&l())},onMouseEnter:()=>{"hover"!==d||g||m(!0)},onMouseLeave:()=>{"hover"===d&&h&&!g&&m(!1)},"aria-label":"popover-button"},{children:e(n,Object.assign({},p))})),e(PP,Object.assign({visible:h,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{m(!1)}},{children:r.content}))]}))},FP=I.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${fl.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${fl.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,HP=I.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,WP=I.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?pl.Accent.Light[1]:pl.Neutral[6])(e)};\n        `}};
`,VP=I(Il.BodySmall)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?pl.Primary:pl.Neutral[3])(e)};`}};
`,YP=I(Il.BodySmall)`
    overflow-wrap: anywhere;
    color: ${pl.Neutral[1]};
`,UP=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var qP=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),XP=qs,KP=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,GP=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var ZP=function(e){return(e=XP(e))&&e.replace(KP,qP).replace(GP,"")},QP=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var JP=function(e){return e.match(QP)||[]},ez=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var tz=function(e){return ez.test(e)},nz="\\ud800-\\udfff",rz="\\u2700-\\u27bf",iz="a-z\\xdf-\\xf6\\xf8-\\xff",az="A-Z\\xc0-\\xd6\\xd8-\\xde",oz="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",sz="["+oz+"]",lz="\\d+",cz="["+rz+"]",dz="["+iz+"]",uz="[^"+nz+oz+lz+rz+iz+az+"]",pz="(?:\\ud83c[\\udde6-\\uddff]){2}",hz="[\\ud800-\\udbff][\\udc00-\\udfff]",mz="["+az+"]",fz="(?:"+dz+"|"+uz+")",gz="(?:"+mz+"|"+uz+")",vz="(?:['’](?:d|ll|m|re|s|t|ve))?",bz="(?:['’](?:D|LL|M|RE|S|T|VE))?",yz="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",xz="[\\ufe0e\\ufe0f]?",wz=xz+yz+("(?:\\u200d(?:"+["[^"+nz+"]",pz,hz].join("|")+")"+xz+yz+")*"),$z="(?:"+[cz,pz,hz].join("|")+")"+wz,kz=RegExp([mz+"?"+dz+"+"+vz+"(?="+[sz,mz,"$"].join("|")+")",gz+"+"+bz+"(?="+[sz,mz+fz,"$"].join("|")+")",mz+"?"+fz+"+"+vz,mz+"+"+bz,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",lz,$z].join("|"),"g");var Sz=JP,Oz=tz,Cz=qs,Tz=function(e){return e.match(kz)||[]};var Dz=lI,jz=ZP,_z=function(e,t,n){return e=Cz(e),void 0===(t=n?void 0:t)?Oz(e)?Tz(e):Sz(e):e.match(t)||[]},Iz=RegExp("['’]","g");var Ez=Pa(function(e){return function(t){return Dz(_z(jz(t).replace(Iz,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})));const Mz=n=>{var{steps:r,currentIndex:i,displayExtractor:a,fadeColor:o,fadePosition:s="both"}=n,l=lt(n,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=zc.useMediaQuery({maxWidth:gl.tablet}),d=e=>a?a(e):e.toString(),u=(e,t)=>Ez(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return t(FP,Object.assign({},l,{children:[e(HP,{children:r.map(((t,n)=>{const r=n<=i;return e(UP,Object.assign({id:u(n,i)},{children:e(WP,{highlighted:r})}),n)}))}),e(HP,{children:c?t(UP,Object.assign({id:u(i,i)},{children:[t(YP,Object.assign({weight:"semibold",id:`${u(i,i)}-counter`},{children:["Step ",i+1," of ",r.length]})),e(YP,Object.assign({weight:"regular",id:`${u(i,i)}-title`},{children:d(r[i])}))]}),i):r.map(((t,n)=>{const r=n<=i,a=n===i,o=a?"bold":"regular";return e(UP,Object.assign({id:`${u(n,i)}-title`},{children:e(VP,Object.assign({highlighted:r,weight:o,"aria-current":a},{children:d(t)}))}),n)}))})]}))},Az=I.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${pl.Accent.Light[2]};

    ${e=>{if(e.$disabled)return`\n\t\t\t\tborder: 2px solid ${pl.Neutral[4](e)};\n\t\t\t`}}
`,Nz=I.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,Bz=I.div`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${e=>e.$selected?1:0};
    transition: all 200ms ease-in-out;
    background: ${e=>e.$disabled?pl.Neutral[4](e):pl.Primary(e)};
    border-radius: 50%;
    border: 1px solid transparent;
`,Rz=n=>{var{className:r,checked:i,disabled:a,onChange:o}=n,s=lt(n,["className","checked","disabled","onChange"]);return t(Az,Object.assign({$selected:i,$disabled:a,className:r,"data-testid":"radio-button"},{children:[e(Nz,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{a||null==o||o(e)},checked:i,disabled:a},s)),e(Bz,{id:"checkmark","data-testid":"checkmark",$disabled:a,$selected:i})]}))},Lz=I.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,Pz=I.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${pl.Neutral[5]};
    background-color: ${pl.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,zz=I(Pz)`
    height: 100vh;
    left: 0;
    top: 0;
    ${fl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,Fz=I(Pz)`
    display: none;
    visibility: hidden;
    ${fl.MaxWidth.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,Hz=I(Ra.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${pl.Accent.Light[6]};
    border-radius: 0 8px 8px 0;
    border: 1px solid ${pl.Neutral[5]};

    ${e=>e.$showDrawer?E`
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              `:E`
                  border: 0;
                  padding: 0;
              `};
`,Wz=I.li`
    width: 100%;
`,Vz=I(ac.Default)`
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
            ${_l.getFontFamily("XSmall","regular")}
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
                background-color: ${pl.Accent.Light[5]};
                color: ${pl.Primary} !important;
            }

            span {
                ${_l.getFontFamily("XSmall","semibold")}
                color: ${pl.Primary} !important;
            }
        }
    }

    ${e=>e.$highlight&&E`
            span {
                div {
                    background-color: ${pl.Accent.Light[5]};
                }

                span {
                    ${_l.getFontFamily("XSmall","semibold")}
                    color: ${pl.Primary};
                }
            }
        `}
`,Yz=I.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,Uz=I(Il.XSmall)``,qz=$({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),Xz=I.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,Kz=I.li`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${pl.Neutral[5]};
`,Gz=I(Ra.li)``,Zz=I(ac.Default)`
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
        ${_l.getFontFamily("H5","semibold")}
        font-size: 1rem !important;
        color: ${pl.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${pl.Accent.Light[4]};

        span {
            ${e=>e.$noChildren&&E`
                    color: ${pl.Primary} !important;
                `}
        }
    }

    ${e=>e.$highlight&&E`
            background-color: ${pl.Accent.Light[4]};
        `}
`,Qz=I(Ra.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,Jz=I.div`
    align-self: center;
    padding-left: 0.5rem;
`,eF=I(_)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${pl.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,tF=I.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,nF=I(Ra.ul)``,rF=I.li``,iF=I(ac.Default)`
    width: 100%;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;
    outline-offset: -0.125rem;

    span {
        ${_l.getFontFamily("H5","regular")}
        font-size: 1rem !important;
        color: ${pl.Neutral[1]} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        background-color: ${pl.Accent.Light[5]};
        span {
            ${_l.getFontFamily("H5","semibold")}
            color: ${pl.Primary} !important;
        }
    }
`,aF=Object.assign((n=>{var{fixed:r=!0,children:i}=n,s=lt(n,["fixed","children"]);const l=a(null),[c,d]=o(void 0),[p,h]=o(void 0),[m,f]=o(void 0),[v,b]=o(!1),y=g((()=>({currentItem:c,selectedItem:p,previouslySelectedItemId:m,setCurrentItem:d,setSelectedItem:h,setPreviouslySelectedItemId:f})),[c,p,m,d,h,f]),x=ya({width:v?240:0,borderRightWidth:v?1:0,borderTopWidth:v?1:0,borderBottomWidth:v?1:0,borderLeftWidth:0});return Od("click",(e=>{l.current&&!l.current.contains(e.target)&&(h({itemId:m||(p?p.itemId:void 0),content:void 0}),f(void 0),d(void 0))}),"window",!0),u((()=>{b(p&&!!p.content||c&&!!c.content)}),[c,p]),e(qz.Provider,Object.assign({value:y},{children:t(Lz,Object.assign({$fixed:r},s,{ref:l,onMouseLeave:()=>{d(void 0)}},{children:[e(zz,{children:i}),e(Hz,Object.assign({style:x,$showDrawer:v,"data-testid":"sidenav-drawer"},{children:c&&c.content||p&&p.content})),e(Fz,{})]}))}))}),{Group:n=>{var{separator:r,children:i}=n,a=lt(n,["separator","children"]);return t(Xz,Object.assign({},a,{children:[i,r&&e(Kz,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:i,title:a,onClick:o}=n,s=lt(n,["children","icon","title","onClick"]);const l=s.id||a.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:p,setCurrentItem:h,setPreviouslySelectedItemId:m,setSelectedItem:g}=f(qz);u((()=>{s.selected&&g({itemId:l,content:void 0})}),[s.selected]);return e(Wz,{children:t(Vz,Object.assign({styleType:"link",type:"button",onClick:()=>{m((()=>{if(r&&p)return d||p.itemId})()),h({itemId:l,content:r}),g({itemId:l,content:r}),o&&!r&&o(l)},onMouseEnter:()=>{h({itemId:l,content:r})}},s,{$highlight:p&&p.itemId===l||c&&c.itemId===l},{children:[e(Yz,{children:i}),e(Uz,{children:a})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:a,children:s}=n,l=lt(n,["id","title","onClick","children"]);const[c,d]=o(!0),[u,p]=o(!1),{currentItem:h,setSelectedItem:m,setPreviouslySelectedItemId:g,setCurrentItem:v}=f(qz),b=ya({from:{opacity:0},to:{opacity:1}}),y=an(),x=y.ref,w=ya({height:s&&c?y.height:0});return t(Gz,Object.assign({onMouseEnter:()=>{p(!0)},onMouseLeave:()=>{p(!1)}},l,{style:b},{children:[t(Zz,Object.assign({styleType:"link",type:"button",onClick:()=>{s?d(!c):(m({itemId:h.itemId,content:void 0}),v(void 0),g(void 0),a&&a(r))},$highlight:u&&c,$noChildren:!s},{children:[e(tF,{children:i}),s&&e(Jz,{children:e(eF,{"aria-hidden":!0,$expanded:c})})]})),e(Qz,Object.assign({style:w},{children:e(nF,Object.assign({ref:x},{children:s}))}))]}))},DrawerSubitem:t=>{var{id:n,title:r,onClick:i}=t,a=lt(t,["id","title","onClick"]);const{currentItem:o,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=f(qz);return e(rF,Object.assign({},a,{children:e(iF,Object.assign({styleType:"link",type:"button",onClick:()=>{i&&i(n),s({itemId:o.itemId,content:void 0}),l(void 0),c(void 0)}},{children:r}))}))}}),oF=M`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,sF=I.div`
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
    background: ${pl.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return E`
                animation: ${oF} 0.3s;
            `}}
`,lF=I.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,cF=I(bl)`
    padding: 0;
`,dF=I(Ae)`
    color: ${pl.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,uF=I.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,pF=I.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${fl.MaxWidth.mobileM} {
        margin: 0 0.5rem;
    }
`,hF=I.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,mF=I.div`
    max-width: 30%;
`,fF=I(ac.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${_l.getTextStyle("XSmall","semibold")};
    }
`,gF=I(Il.H6)`
    overflow-wrap: anywhere;
    ${fl.MaxWidth.mobileM} {
        ${_l.getTextStyle("XSmall","semibold")}
    }
`,vF=I(Il.XSmall)`
    overflow-wrap: anywhere;
`,bF=I.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,yF=E`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,xF=I(Be)`
    ${yF}
`,wF=I(ot)`
    ${yF}
`,$F=I(Ne)`
    ${yF}
`,kF="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",SF="smart-app-banner";const OF=i.forwardRef((function(r,i){const{className:a,show:o,href:s,content:l,offset:c=0,icon:d=kF,animated:u=!1,onDismiss:p,onClick:h}=r,{title:m,message:f,buttonLabel:g,buttonAriaLabel:v,numberOfStars:b}=l,y=e=>{e.stopPropagation(),window.open(s,"_blank","noreferrer"),null==h||h()};return e(n,{children:o&&t(sF,Object.assign({ref:i,$isAnimated:u,$offset:c,className:a},{children:[e(lF,Object.assign({onClick:p,id:`${SF}-dismiss`,"data-testid":`${SF}-dismiss-container`},{children:e(cF,Object.assign({"aria-label":"Dismiss"},{children:e(dF,{})}))})),t(uF,Object.assign({onClick:y,id:`${SF}-proceed`,"data-testid":`${SF}-proceed-container`},{children:[e(hF,{src:d,alt:"lifesg-app-icon"}),t(pF,{children:[e(gF,{children:m}),e(vF,{children:f}),(()=>{if(isNaN(b)||b<0)return;const t=[],n=b-Math.floor(b)>=.4;for(let n=0;n<Math.floor(b);n++)t.push(e(xF,{},`star${n}`));if(n&&t.push(e(wF,{},"halfstar")),t.length<5){const n=5-t.length;for(let r=0;r<n;r++)t.push(e($F,{},`emptystar${r}`))}return e(bF,{children:t.slice(0,5)})})()]}),e(mF,{children:e(fF,Object.assign({type:"button",onClick:y,"aria-label":v},{children:g}))})]}))]}))})})),CF=i.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),TF=I.div`
    position: relative;
    width: 100%;
`,DF=I.div`
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,`\n\t\t\t${fl.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,jF=I.div`
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
`,_F=I(bl)`
    display: none;

    ${fl.MaxWidth.tablet} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?E`
                    justify-content: left;
                    padding-left: 0.5rem;
                `:E`
                    justify-content: right;
                    padding-right: 0.5rem;
                `}

        svg {
            color: ${pl.Neutral[3]};
        }
    }
`,IF=h(((r,i)=>{var{children:s,fadeColor:l,fadePosition:c="both",showIndicator:d=!1,onResize:p}=r,h=lt(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[m,f]=o("left"===c||"both"===c),[g,b]=o("right"===c||"both"===c),y=a(null),x=a(null),w=yp($,50);function $(){const e=y.current,t=x.current;e&&t&&t.scrollWidth>e.offsetWidth?(b(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),f(t.scrollLeft>=1)):(b(!1),f(!1))}function k(){$(),p&&p({content:x.current,wrapper:y.current})}an({onResize:k,targetRef:y,refreshMode:"debounce",refreshRate:50}),v(i,(()=>({resize(){k()}}))),u((()=>{const e=x.current;return $(),e&&e.addEventListener("scroll",w),()=>{e&&e.removeEventListener("scroll",w)}}),[]);return t(TF,Object.assign({ref:y},h,{children:[e(jF,Object.assign({ref:x},{children:s})),(()=>{let r;return r=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(n,{children:[m&&e(DF,Object.assign({$backgroundColor:r.left,$position:"left",$showIndicator:d,"data-id":"left-fade"},{children:d&&e(_F,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e(fe,{})}))})),g&&e(DF,Object.assign({$backgroundColor:r.right,$position:"right",$showIndicator:d,"data-id":"right-fade"},{children:d&&e(_F,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e(me,{})}))}))]})})()]}))})),EF=I.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return E`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: 4px solid ${pl.Neutral[5]};
                }
            `}}
`,MF=I.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: 4px solid ${pl.Neutral[5]};

    ${e=>{if(e.$width)return E`
                width: ${e.$width};
            `}}

    ${e=>{if(e.$active)return E`
                border-bottom: 4px solid ${pl.Primary};
            `}}

    ${fl.MaxWidth.mobileL} {
        flex: 1;
        justify-content: center;
    }
`,AF=I.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,NF=I(Il.Body)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${pl.Neutral[3]};
    opacity: 1;

    ${e=>{if(e.$active)return E`
                opacity: 0;
            `}}
`,BF=I(Il.Body)`
    color: ${pl.Primary};
    opacity: 0;
    ${e=>{if(e.$active)return E`
                opacity: 1;
            `}}
`,RF=I(IF)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`,LF=({controlledMode:n,"data-testid":r,onTabClick:i,fullWidthIndicatorLine:o})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:c}=f(CF),d=zc.useMediaQuery({maxWidth:gl.mobileL}),u=a(null),p=e=>t=>{t.preventDefault(),n||s(e),i&&i(c[e].title,e)},h=e=>d&&e.length>20?`${e.substring(0,20)}...`:e;return e(RF,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=gl.tablet&&u.current&&(e.scrollLeft=u.current.getBoundingClientRect().left)},"data-testid":r},{children:e(EF,Object.assign({role:"tablist",$fullWidthIndicatorLine:o},{children:c.map(((n,i)=>{const a=l===i;return e(MF,Object.assign({role:"none",$active:a,ref:a?u:null,$width:n.width},{children:t(AF,Object.assign({role:"tab",type:"button","aria-selected":a,onClick:p(i),"data-testid":`${r}-link-${i}`},{children:[e(NF,Object.assign({$active:a,weight:"regular"},{children:h(n.title)})),e(BF,Object.assign({$active:a,weight:"semibold","aria-hidden":"true"},{children:h(n.title)}))]}))}),i)}))}))}))},PF=I.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,zF=Object.assign((n=>{var{children:r,currentActive:i,initialActive:a=0,onTabClick:s,"data-testid":l,fullWidthIndicatorLine:d}=n,p=lt(n,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[h,m]=o(i||a),f=g((()=>S.toArray(r).filter(Boolean).map((e=>({title:e.props.title,width:e.props.width})))),[r]);u((()=>{"number"==typeof i&&m(i)}),[i]);return e(PF,Object.assign({"data-testid":l},p,{children:t(CF.Provider,Object.assign({value:{tabLinks:f,currentActiveIndex:h,setCurrentActiveIndex:m}},{children:[e(LF,{controlledMode:"number"==typeof i,onTabClick:s,"data-testid":`${l}-tabs`,fullWidthIndicatorLine:d}),S.toArray(r).filter(Boolean).map(((e,t)=>c(e,{key:t,index:t})))]}))}))}),{Item:t=>{var{index:n,children:r}=t,i=lt(t,["index","children"]);const{currentActiveIndex:a}=f(CF);return a===n?e("div",Object.assign({role:"tabpanel"},i,{children:r})):null}}),FF=I.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${_l.getTextStyle("XSmall","semibold")}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r,i;if("solid"===e.$type)switch(r=pl.Neutral[8],i=`0px 0px 4px 1px ${pl.Neutral[4](e)}`,e.$color){case"grey":t=pl.Neutral[3],n=pl.Neutral[3];break;case"green":t=pl.Validation.Green.Text,n=pl.Validation.Green.Text;break;case"yellow":t=pl.Validation.Orange.Text,n=pl.Validation.Orange.Text;break;case"red":t=pl.Validation.Red.Text,n=pl.Validation.Red.Text;break;case"blue":t=pl.Validation.Blue.Text,n=pl.Validation.Blue.Text;break;default:t=pl.Neutral[1],n=pl.Neutral[1]}else switch(i="0px 0px 4px 1px rgba(164, 164, 164, 0.70)",e.$color){case"grey":t=pl.Neutral[6],n=pl.Neutral[4],r=pl.Neutral[3];break;case"green":t=pl.Validation.Green.Background,n=pl.Validation.Green.Border,r=pl.Validation.Green.Text;break;case"yellow":t=pl.Validation.Orange.Background,n=pl.Validation.Orange.Border,r=pl.Validation.Orange.Text;break;case"red":t=pl.Validation.Red.Background,n=pl.Validation.Red.Border,r=pl.Validation.Red.Text;break;case"blue":t=pl.Validation.Blue.Background,n=pl.Validation.Blue.Border,r=pl.Validation.Blue.Text;break;default:t=pl.Neutral[8],n=pl.Neutral[5],r=pl.Neutral[1],i="0px 0px 4px 1px rgba(164, 164, 164, 0.50)"}return E`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};

            @media (hover: hover) {
                &:hover {
                    box-shadow: ${e.$interactive?i:"none"};
                }
            }
        `}}

    ${fl.MaxWidth.tablet} {
        ${({$interactive:e})=>{if(e)return E`
                    ${_l.getTextStyle("H5","semibold")};
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,HF=I.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,WF=n=>{var{type:r,colorType:i="black",children:a,interactive:o=!1,icon:s,iconPosition:l="left"}=n,c=lt(n,["type","colorType","children","interactive","icon","iconPosition"]);return t(FF,Object.assign({as:o?"button":"div",$type:r,$color:i,$interactive:o},c,{children:["left"===l&&s,e(HF,{children:a}),"right"===l&&s]}))};var VF;nd.extend(id),function(e){e.formatHourlyDisplay=e=>nd(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,n)=>xd.getTimeDiffInMinutes(e,t)/15*(n/2)}(VF||(VF={}));const YF=1.25,UF=e=>"minified"===e?12:40,qF=e=>"minified"===e?12:40,XF=I.div`
    position: relative;
    display: flex;
    align-items: center;
`,KF=I(bl)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${pl.Neutral[8]};
    box-shadow: 0px 2px 8px rgba(104, 104, 104, 0.5);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?E`
                  right: 0;
              `:E`
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
`,GF=I(me)`
    width: 1rem;
    height: 1rem;
    color: ${pl.Primary};
`,ZF=I(fe)`
    font-size: 1rem;
    color: ${pl.Primary};
`,QF=I.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+qF(e)}px`};
`,JF=I.div`
    position: relative;
    white-space: nowrap;
    height: ${YF}rem;
`,eH=I.div`
    display: flex;
    white-space: nowrap;
`,tH=I.div`
    display: inline-block;
    width: ${({$variant:e})=>`${UF(e)}px`};
    position: relative;
    border-left: 1px solid ${pl.Neutral[2]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?YF:.625;break;case"minified":t=e.$isLongMarker?YF:0;break;default:t=0}return E`
            height: ${t}rem;
        `}}
`,nH=I(Il.XSmall)`
    color: ${pl.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,rH=I.div`
    ${e=>"vertical"===e.$type?E`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:E`
                position: absolute;
                height: ${qF(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&E`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||pl.Neutral[5]} 0px,
                ${e.$bgColor2||pl.Neutral[5]} 10px,
                ${e.$bgColor} 10px,
                ${e.$bgColor} 20px
            );
        `}
`,iH=I.div`
    position: absolute;
    top: ${YF}rem;
    height: ${({$variant:e})=>`${qF(e)}px`};
    z-index: 1;
    border-right: 1px solid ${pl.Neutral[2]};
`,aH=I(Il.XSmall)`
    color: ${e=>e.$color||pl.Neutral[2](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,oH=({"data-testid":r,className:i,variant:s="default",startTime:l,endTime:c,slots:d,onSlotClick:p,onClick:h,styleAttributes:m})=>{const f=a(null),[g,v]=o(0),[b,y]=o(0),x=UF(s),w=2.5*x;u((()=>{const e=f.current;return e&&e.addEventListener("scroll",$),()=>{e&&e.removeEventListener("scroll",$)}}),[]);const $=()=>{f.current&&v(f.current.scrollLeft)},k=e=>{f.current&&f.current.scrollBy({left:"left"===e?-w:w,behavior:"smooth"})};an({onResize:()=>{f.current&&y(f.current.clientWidth)},targetRef:f,refreshMode:"debounce",refreshRate:50});const S=e=>e<=x/2,O=e=>{if(r)return`${r}-${e}`},C=(e,t,n)=>{const r=0===e.minute();if("default"===n)return r;return r&&(t?e.hour()%2==0:e.hour()%2==1)};return t(XF,Object.assign({className:i},{children:[t(QF,Object.assign({"data-testid":r,ref:f,$variant:s},{children:[e(JF,Object.assign({"data-testid":O("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const t=[],n=nd(l,"HH:mm"),r=nd(c,"HH:mm"),i=n.hour()%2==0;for(let a=n;a.isBefore(r);a=a.add(30,"minute")){const n=C(a,i,s);t.push(e(tH,Object.assign({$isLongMarker:n,$variant:s},{children:n&&e(nH,Object.assign({weight:"semibold"},{children:VF.formatHourlyDisplay(a.format("HH:mm"))}))}),a.format("HH:mm")))}return t})()})),t(eH,Object.assign({"data-testid":O("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[m&&(()=>{const{backgroundColor:r,backgroundColor2:i,styleType:a="default"}=m,o=VF.calculateWidth(l,c,x),d=!!h&&"default"===s;return t(n,{children:[e(iH,{$variant:s}),e(rH,{"data-testid":O("default-timeslot"),$width:o,$variant:s,$left:0,$styleType:a,$bgColor:r,$bgColor2:i,$clickable:d,onClick:d?h:void 0},"default-timeslot")]})})(),d.map((n=>{const{id:r,startTime:i,endTime:a,label:o,clickable:d=!0,styleAttributes:u}=n,{color:h,styleType:m="default",backgroundColor:f,backgroundColor2:g}=u,v=VF.calculateWidth(i,a,x),b=VF.calculateWidth(l,i,x),y=d&&"default"===s;return t("div",{children:[e(iH,{$variant:s,style:{left:`${b}px`}}),e(rH,Object.assign({"data-testid":O(`${r}-timeslot`),$width:v,$left:b,$styleType:m,$variant:s,$bgColor:f,$bgColor2:g,$clickable:y,onClick:()=>y&&p(n)},{children:o&&"default"===s&&e(aH,Object.assign({$slotWidth:v,$color:h,weight:"semibold"},{children:S(v)?"...":o}))})),c!==a&&e(iH,{$variant:s,style:{left:`${b+v}px`}})]},r)}))]}))]})),e(n,{children:g>0&&e(KF,Object.assign({"data-testid":O("arrow-left"),$direction:"left",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{k("left")}},{children:e(ZF,{})}))}),g+b<VF.calculateWidth(l,c,x)?e(KF,Object.assign({"data-testid":O("arrow-right"),$direction:"right",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{k("right")}},{children:e(GF,{})})):e(n,{})]}))},sH=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.5rem;
    flex: 1;
`,lH=I(Il.XSmall)`
    ${e=>e.$disabled&&E`
            color: ${pl.Neutral[4]};
        `}
`,cH=I.div`
    grid-column: 2 / -1;
    display: flex;
`,dH=I.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: 0.25rem;
`,uH=I(Ra.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,pH=I.div`
    display: flex;
    gap: 0.25rem;
    transition: ${Nl.Base};
    overflow: hidden;
`,hH=I.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: 0.25rem;
    width: 1.375rem;
    transition: ${Nl.Base};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,mH=I.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,fH=I.div`
    ${_l.getFontFamily("Body",700)}
    color: ${pl.Neutral[3]};
    font-size: 0.625rem !important;
    line-height: 0.75rem !important;
    text-align: center;
    :first-line {
        font-size: 0.875rem !important;
    }
`,gH=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.25rem;
`,vH=I.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: 0.5rem;
`,bH=I(ac.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`,yH=I(oe)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,xH=I(rH)`
    ${e=>{if("vertical"===e.$type)return E`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: 0.125rem;
            `}}

    ${e=>e.$halfFill?E`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${pl.Neutral[5]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||pl.Neutral[5]} 0px,\n                            ${e.$bgColor2||pl.Neutral[5]} 10px,\n                            ${e.$bgColor} 10px,\n                            ${e.$bgColor} 20px\n                        )`};
            `:E`
                background-color: ${e.$bgColor};
            `}
`;var wH=oo;var $H=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],o=t(a);if(null!=o&&(void 0===s?o==o&&!wH(o):n(o,s)))var s=o,l=a}return l};var kH=$H,SH=pS,OH=function(e,t){return e<t};var CH=Pa((function(e,t){return e&&e.length?kH(e,SH(t),OH):void 0}));var TH=$H,DH=function(e,t){return e>t},jH=pS;var _H=Pa((function(e,t){return e&&e.length?TH(e,jH(t),DH):void 0}));const IH=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:s,maxDate:l,startTime:c,endTime:d,maxVisibleCellHeight:u,slots:p,interval:h=30,variant:m="flexible",enableSelection:f=!0,onSlotClick:v})=>{var b,y,x,w;const $="YYYY-MM-DD",[k,S]=o(!1),[O,C]=o(),T=g((()=>md.generateDaysForCurrentWeek(n)),[n]),D=Object.values(null!=p?p:{}).flat(),j=null!==(y=null!=c?c:null===(b=CH(D,"startTime"))||void 0===b?void 0:b.startTime)&&void 0!==y?y:"00:00",_=null!==(w=null!=d?d:null===(x=_H(D,"endTime"))||void 0===x?void 0:x.endTime)&&void 0!==w?w:"24:00",I=Math.ceil(xd.getTimeDiffInMinutes(j,_)/h),{height:E,ref:M}=an(),A=u?E<u||k?E:u:E,N=ya({height:A}),B=g((()=>{if(p){const e={};return Object.entries(p).forEach((([t,n])=>{const r=function(e){const t=Array(I).fill({});return e.forEach((e=>{const n=Math.max(0,xd.getTimeDiffInMinutes(j,e.startTime)/h),r=Math.min(I,xd.getTimeDiffInMinutes(j,e.endTime)/h),i=Math.ceil(r)-Math.floor(n);switch(m){case"fixed":t[Math.floor(n)]=Object.assign(Object.assign({},e),{cellLength:r-n});break;case"flexible":for(let a=0;a<i;a++){const o=xd.addMinutesToTime(j,Math.floor(n+a)*h),s=xd.addMinutesToTime(o,h);let l;W_(t[Math.floor(n+a)])?0===a&&n%1!=0?l="top":a===i-1&&r%1!=0&&(l="bottom"):l=void 0,t[Math.floor(n+a)]=Object.assign(Object.assign({},e),{id:`${e.id}-${a}`,startTime:o,endTime:s,cellLength:1,halfFill:l})}}})),t}(n);e[t]=function(e){var t,n,r,i;let a=0;switch(m){case"fixed":for(e=e.reduce(((e,t)=>{const n=e.length>0?e[e.length-1]:e[0];return W_(t)&&W_(n)?e:[...e,t]}),[{}]);a<e.length;){if(W_(e[a])){const o=null!==(n=null===(t=e[a-1])||void 0===t?void 0:t.endTime)&&void 0!==n?n:j,s=null!==(i=null===(r=e[a+1])||void 0===r?void 0:r.startTime)&&void 0!==i?i:_;if(o!==s){const t=xd.getTimeDiffInMinutes(o,s)/h;e[a]=Object.assign(Object.assign({},F(a)),{startTime:o,endTime:s,cellLength:t})}}a++}break;case"flexible":for(;a<e.length;)W_(e[a])?(e[a]=F(a),a++):a+=e[a].cellLength}return e.filter((e=>!W_(e)&&e.cellLength>0))}(r)})),e}return{}}),[p]),R=e=>{C(e)},L=()=>{C(void 0)},P=e=>{e.preventDefault(),S((e=>!e))},z=e=>{var t;const n=md.isWithinRange(e,s?nd(s):void 0,l?nd(l):void 0),i=null!==(t=r&&r.includes(e.format($)))&&void 0!==t&&t;return!n||i};function F(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:"#E0E4E5"},cellLength:t}}return t(dH,{children:[e(cH,{children:T.map(((t,n)=>{const r=(e=>{const t=e.format($),n=z(e),r={},a=f&&!n;return n&&(r.disabled=!0),r.interactive=f?a:null,a&&O&&e.isSame(O,"day")&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0),[i].includes(t)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),r})(t);return e(Mu,Object.assign({date:t,calendarDate:nd(i),onSelect:()=>{((e,t)=>{!t&&f&&a(e)})(t,!r.interactive)},onHover:R,onHoverEnd:L},r),`day-${n}`)}))}),e(cH,{children:T.map(((t,n)=>e(sH,{children:e(lH,Object.assign({weight:"semibold",$disabled:z(t)},{children:nd(t).format("ddd")}))},`week-day-${n}`)))}),(()=>{let t=!1;const n=e=>{const n=nd(j,"HH:mm").add(4*e*h,"minutes"),r=n.format("h"),i=n.format("mm"),a=n.format("a");let o=`${r}${"00"!==i?` ${i}`:""}`;return t||"pm"!==a||"00"!==i||(o+=` ${a}`,t=!0),o};return e(hH,Object.assign({$height:A},{children:Array(Math.ceil(I/4)).fill(void 0).map(((t,r)=>e(mH,{children:e(fH,{children:n(r)})},`time-${r}`)))}))})(),e(uH,Object.assign({style:N},{children:e(pH,Object.assign({ref:M},{children:T.map(((t,n)=>{var r;const i=t.format($),a=null!==(r=B[i])&&void 0!==r?r:Array("flexible"===m?I:1).fill(void 0).map(((e,t)=>F(t,"fixed"===m?I:void 0)));return e(gH,{children:a.map((t=>{const{id:n,clickable:r=!0,styleAttributes:a,cellLength:o,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=a;return e(xH,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:r,$height:"fixed"===m?12*o+4*(o-1):12,onClick:()=>r&&((e,t)=>{v&&v(e,t)})(i,t)},n)}))},`wrapper-${n}`)}))}),`week-cell-${n.format($)}`)})),(()=>{if(u&&M.current&&!(E&&E<u))return e(vH,{children:t(bH,Object.assign({"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:P},{children:[e(yH,{$isExpanded:k}),(k?"Hide":"Show")+" later times"]}))})})()]})},EH=I.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${fl.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,MH="YYYY-MM-DD",AH=t=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:s,minDate:l,maxDate:c,startTime:d,endTime:p,slots:h,interval:m,variant:f,maxVisibleCellHeight:g,showNavigationHeader:v=!0,enableSelection:b,onSlotClick:y,currentCalendarDate:x}=t,w=lt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[$,k]=o(s),S=a(),O=a(void 0);u((()=>{k(s)}),[s]);const C=e=>{const t=e.format(MH);k(t),i&&i(t)},T=(e,t)=>{y&&y(e,t)},D=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(MH),lastDayOfWeek:e.endOf("week").format(MH)},month:e.month()+1,year:e.year()};r(t)}};return e(EH,Object.assign({},w,{children:e(pu,Object.assign({ref:S,type:"standalone",dynamicHeight:!0,initialCalendarDate:xd.toDayjs($||x).endOf("week").format(MH),selectedStartDate:$,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>l&&nd(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>c&&nd(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{O.current&&O.current.isSame(e,"week")||D(e),O.current=e},showNavigationHeader:v,minDate:l,maxDate:c,getMonthHeaderLabel:e=>nd(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>nd(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>(t=>e(IH,{calendarDate:t,disabledDates:n,selectedDate:$,minDate:l,maxDate:c,startTime:d,endTime:p,onSelect:C,slots:h,interval:m,variant:f,maxVisibleCellHeight:g,enableSelection:b,onSlotClick:T}))(t)}))}))},NH=I(yu)`
    ${e=>{const{$variant:t}=e;if("default"===t)return E`
                    ${_l.getFontFamily("H5","semibold")}
                    color: ${pl.Neutral[3]};
                `}}
`,BH=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`,RH=I.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,LH=I.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,PH=I.div`
    ${_l.getTextStyle("XSmall","semibold")}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${pl.Neutral[1]};
    span {
        display: block;
    }
`,zH=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;nd.extend(od);const FH={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},HH=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:o,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=g((()=>md.generateDaysForCurrentWeek(n)),[n]),p="YYYY-MM-DD",h=e=>{const t=e.format(p),n=(e=>{const t=md.isWithinRange(e,o?nd(o):void 0,s?nd(s):void 0),n=r&&r.includes(e.format(p));return!t||n})(e),a={},l={};return n&&(a.$disabledDisplay=!0,l.$disabledDisplay=!0),a.$interactive=c&&!n,[i].includes(t)&&(a.$selected=!0,l.$selected=!0),{styleCircleProps:a,styleLabelProps:l}};return t(RH,{children:[e(fu,{children:u.map(((t,n)=>{const r="default",{styleCircleProps:i,styleLabelProps:o}=h(t);return e(gu,{children:e(xu,Object.assign({$variant:r,onClick:()=>((e,t)=>{!t&&c&&a(e)})(t,!i.$interactive)},i,{children:e(NH,Object.assign({weight:o.$selected?"semibold":"regular",$variant:r},o,{children:t.format("D")}))}))},`day-${n}`)}))}),u.map(((t,n)=>e(BH,{children:e(Il.XSmall,Object.assign({weight:"semibold"},{children:nd(t).format("ddd")}))},`week-day-${n}`))),e(LH,{children:u.map(((n,r)=>{const i=n.format(p),a=l&&(l[i]?l[i]:[FH]);return e(zH,{children:a&&a.map((n=>{const{id:r,startTime:a,endTime:o,clickable:s=!0,styleAttributes:l}=n,{color:c,styleType:u="default",backgroundColor:p,backgroundColor2:h}=l;return e(rH,Object.assign({$type:"vertical",$variant:"default",$styleType:u,$bgColor:p,$bgColor2:h,$clickable:s,onClick:()=>s&&((e,t)=>{d(e,t)})(i,n)},{children:t(PH,Object.assign({style:{color:c}},{children:[e("span",{children:md.convertTo12HourFormat(a)}),o&&a&&e("span",{children:"-"}),e("span",{children:md.convertTo12HourFormat(o)})]}))}),r)}))},`wrapper-${r}`)}))},`week-cell-${n.format(p)}`)]})},WH=I.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${fl.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,VH="YYYY-MM-DD",YH=t=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:s,minDate:l,maxDate:c,slots:d,showNavigationHeader:p=!0,enableSelection:h,onSlotClick:m,currentCalendarDate:f}=t,g=lt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[v,b]=o(s),y=a(),x=a(void 0);u((()=>{b(s)}),[s]);const w=e=>{const t=e.format(VH);b(t),i&&i(t)},$=(e,t)=>{m&&m(e,t)},k=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(VH),lastDayOfWeek:e.endOf("week").format(VH)},month:e.month()+1,year:e.year()};r(t)}};return e(WH,Object.assign({},g,{children:e(pu,Object.assign({ref:y,type:"standalone",dynamicHeight:!0,initialCalendarDate:xd.toDayjs(v||f).endOf("week").format(VH),selectedStartDate:v,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>l&&nd(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>c&&nd(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"week")||k(e),x.current=e},showNavigationHeader:p,minDate:l,maxDate:c,getMonthHeaderLabel:e=>nd(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>nd(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>e(HH,{calendarDate:t,disabledDates:n,selectedDate:v,minDate:l,maxDate:c,onSelect:w,slots:d,enableSelection:h,onSlotClick:$})}))}))},UH=I.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return E`
                    background-color: ${pl.Accent.Light[1]};
                `;case"upcoming-active":return E`
                    border: 4px solid ${pl.Accent.Light[1]};
                `;case"upcoming-inactive":return E`
                    border: 4px solid ${pl.Neutral[4]};
                `;case"completed":return E`
                    background-color: ${pl.Validation.Green.Icon};
                    svg {
                        color: ${pl.Neutral[8]};
                    }
                `;case"error":return E`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${pl.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `;case"disabled":return E`
                    background-color: ${pl.Neutral[4]};
                `}}}
`,qH=I.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return E`
                    background-color: ${pl.Accent.Light[1]};
                `;case"upcoming-inactive":case"disabled":return E`
                    background-color: ${pl.Neutral[4]};
                `;case"completed":return E`
                    background-color: ${pl.Validation.Green.Icon};
                `;case"error":return E`
                    margin-left: -0.15rem;
                    background-color: ${pl.Validation.Red.Icon};
                `}}}
`,XH=I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,KH=I.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${fl.MaxWidth.tablet} {
        grid-column: span 8;
    }

    ${fl.MaxWidth.mobileL} {
        grid-column: span 4;
    }
`,GH=I(Il.H3)`
    margin-bottom: 1rem;

    ${fl.MaxWidth.tablet} {
        margin-bottom: 1.5rem;
    }
`,ZH=I(Il.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,QH=I.div`
    display: flex;

    :last-of-type ${qH} {
        margin-bottom: 0;
    }
`,JH=I.div`
    margin-bottom: 2rem;
    width: 100%;
`,eW=I(Il.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,tW=I(MP)`
    padding: 0.125rem 0.5rem;
`,nW=({items:r,className:i,title:a,startCol:o,colSpan:s,"data-base-indicator-testid":l,"data-testid":c="timeline"})=>{const d=t=>"string"==typeof t?e(Il.Body,Object.assign({className:"timeline-item-content-text"},{children:t})):e(n,{children:t}),u=t=>"string"==typeof t?e(ZH,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):e(n,{children:t}),p=e=>e.slice(0,2).map(((e,t)=>O(tW,Object.assign({},e,{type:e.type,key:`status-pill-${t}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),h=t=>{switch(t){case"completed":return e(le,{});case"error":return e(se,{});default:return null}};return t(KH,Object.assign({className:i,"data-testid":c,$startCol:o,$colSpan:s},{children:[e(GH,Object.assign({id:"timeline-title"},{children:a})),r.map(((n,r)=>{const{title:i,content:a,statuses:o,variant:s}=n,c=l?`circleindicator${r+1}_div_${l}`:"circleindicator",m=s||(0===r?"current":"upcoming-active");return t(QH,{children:[t(XH,{children:[e(UH,Object.assign({"data-testid":c,$variant:m},{children:h(m)})),e(qH,{$variant:m})]}),t(JH,Object.assign({className:"timeline-item-content"},{children:[u(i),o&&e(eW,{children:p(o)}),d(a)]}))]},`timeline-item-${r}`)}))]}))},rW=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],iW=15,aW=252,oW=["#FFF2DD","#EBF7F5","#F2F4FE","#FCF1F2","#E9F6FD"],sW=M`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,lW=I(Rm)`
    color: ${pl.Neutral[3]};
    svg {
        ${e=>{if(e.$loading)return E`
                    animation: ${sW} 4s linear infinite;
                `}}
    }
`,cW=I.div`
    display: flex;
    padding-bottom: 1rem;
    justify-content: space-between;
`,dW=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
`,uW=I(Il.H6)`
    color: ${pl.Neutral[3]};
`,pW=I(im)`
    width: 400px;
`,hW=r=>{var{selectedDate:i,loading:a,tableContainerRef:o,totalRecords:s,onPreviousDayClick:l,onNextDayClick:c,onRefresh:d,onCalendarDateSelect:u}=r,p=lt(r,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const h=()=>{o.current&&(o.current.scrollTop=0)},m=()=>{d&&(h(),d())};return t(cW,{children:[e(pW,Object.assign({selectedDate:i,loading:a},p,{onRightArrowClick:e=>{h(),c(e)},onLeftArrowClick:e=>{h(),l(e)},onCalendarDateSelect:u})),void 0===s?e(n,{}):t(dW,{children:[t(uW,Object.assign({"data-testid":"timetable-records-results",weight:"semibold"},{children:[s," results found"]})),d&&e(lW,Object.assign({"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:a,onClick:m,$loading:a},{children:e(ce,{})}))]})]})},mW=I.div`
    display: flex;
    width: 100%;
`,fW=I.div`
    border-bottom: 1px solid ${pl.Neutral[5]};
    ${e=>{if(e.$isOnTheHour)return E`
                box-shadow: inset -0.5px 0px ${pl.Accent.Light[1]};
            `}}
`,gW=I.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,vW=I.div`
    width: 2px;
    height: 100%;
`,bW=I.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: 4px;
    box-sizing: border-box;
    padding: 4px;
    ${({$status:e,$mainColor:t,$altColor:n,$isClickable:r})=>{switch(e){case"blocked":return E`
                    background: repeating-linear-gradient(
                        135deg,
                        #e0e4e5 0px 6px,
                        #ecefef 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"filled":return E`
                    background: ${t};
                    &:hover {
                        cursor: ${r?"pointer":"default"};
                    }
                `;case"disabled":return E`
                    background: ${pl.Neutral[6]};
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"pending":return E`
                    background: repeating-linear-gradient(
                        135deg,
                        ${t} 0px 6px,
                        ${n} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;default:return E`
                    &:hover {
                        background-color: ${r?pl.Accent.Light[5]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,yW=I(Il.H6)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,xW=I(Il.XSmall)`
    color: ${pl.Neutral[3]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,wW=i.memo((({id:n,startTime:r,endTime:i,title:a,subtitle:o,status:s,intervalWidth:l,rowBarColor:c,containerRef:d,customPopover:u,roundedStartTime:p=r,roundedEndTime:h=i,onClick:m})=>{const f=0===nd(h,"HH:mm").get("minutes"),g=xd.getTimeDiffInMinutes(p,h)/iW*l-2,v=!!m||u&&"click"===u.trigger;return e((({wrapper:e,children:t})=>u?e(t):t),Object.assign({wrapper:t=>(t=>{const n={position:"bottom-start",rootNode:d,customOffset:u.offset,children:t,trigger:u.trigger,delay:u.delay,popoverContent:u.content};return e(dx,Object.assign({},n,{children:t}))})(t)},{children:e(fW,Object.assign({"data-testid":"block-container",$isOnTheHour:f},{children:t(gW,{children:[t(bW,Object.assign({$width:g,$status:s,$mainColor:c.mainColor,$altColor:c.alternateColor,$isClickable:v,onClick:e=>{m&&m({id:n,startTime:r,endTime:i,status:s,title:a,subtitle:o,customPopover:u},e)}},{children:[a&&e(yW,Object.assign({weight:"semibold"},{children:a})),o&&e(xW,Object.assign({weight:"bold"},{children:o}))]})),e(vW,{})]})}),"block-container-key")}))})),$W=t=>{var{id:n,timetableMinTime:r,timetableMaxTime:i,rowMinTime:a,rowMaxTime:o,rowCells:s,rowBarColor:l,intervalWidth:c,containerRef:d,outOfRangeCellPopover:u}=t,p=lt(t,["id","timetableMinTime","timetableMaxTime","rowMinTime","rowMaxTime","rowCells","rowBarColor","intervalWidth","containerRef","outOfRangeCellPopover"]);const h=p["data-testid"]||"timetable-row",m=a?Mp.roundToNearestInterval(a,iW):r,f=o?Mp.roundToNearestInterval(o,iW,!0):i,v=g((()=>{const e=[];m&&nd(r,"HH:mm").isBefore(nd(m,"HH:mm"))&&e.push({id:n,startTime:r,endTime:m,status:"blocked",customPopover:u});const t=[...s].sort(((e,t)=>{const n=nd(e.startTime,"HH:mm"),r=nd(t.startTime,"HH:mm");return n.isBefore(r)?-1:n.isAfter(r)?1:0}));let l;return t.forEach(((r,i)=>{var a;const{startTime:o,endTime:s}=r;let c=Mp.roundToNearestInterval(o,iW);l&&nd(c,"HH:mm").isBefore(nd(l,"HH:mm"))&&(c=Mp.roundToNearestInterval(o,iW,!0));const d=Mp.roundToNearestInterval(s,iW,!0);e.push(Object.assign(Object.assign({},r),{roundedStartTime:c,roundedEndTime:d}));const u=(null===(a=t[i+1])||void 0===a?void 0:a.startTime)||f,p=nd(Mp.roundToNearestInterval(u,iW),"HH:mm");let h=nd(d,"HH:mm");for(;h.isBefore(p);)if(m=p,h.get("hour")!=m.get("hour")){const t=h.add(1,"hour").startOf("hour");e.push({id:n,startTime:h.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),h=t}else e.push({id:n,startTime:h.format("HH:mm").toString(),endTime:p.format("HH:mm").toString(),status:"disabled"}),h=p;var m;l=h.format("HH:mm").toString()})),f&&nd(i,"HH:mm").isAfter(nd(f,"HH:mm"))&&e.push({id:n,startTime:f,endTime:i,status:"blocked",customPopover:u}),0!==t.length||a||o||e.push({id:n,startTime:r,endTime:i,status:"blocked",customPopover:u}),e}),[m,r,s,f,i,a,o,n,u]);return e(mW,Object.assign({"data-testid":h},p,{children:v.map(((t,n)=>e(wW,Object.assign({},t,{intervalWidth:c,rowBarColor:l,containerRef:d}),`${n}-row-cell-key`)))}))},kW=I.div``,SW=I.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${aW}px auto;
`,OW=I.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${aW}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return E`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,CW=I.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    width: ${aW}px;
    z-index: 2;
    border-bottom: 1px solid ${pl.Neutral[5]};
    ${e=>e.$isScrolledX||e.$isScrolledY?E`
                box-shadow: 0.125rem 0.125rem 0.5rem ${pl.Neutral[5]};
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.75rem":"0"}
                        ${e.$isScrolledY?"-0.75rem":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:E`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,TW=I.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: white;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,DW=I.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: white;
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: 1px solid ${pl.Neutral[5]};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return E`
                box-shadow: 0rem 0.125rem 0.5rem ${pl.Neutral[5]};
            `}};
`,jW=I.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: 0.25rem;
`,_W=I(Il.H6)`
    color: ${pl.Neutral[3]};
`,IW=I.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,EW=I.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: white;
    width: ${aW}px;
    height: ${68}px;
    text-align: right;
    padding: 0 1rem 0 2rem;
    border-bottom: 1px solid ${pl.Neutral[5]};
    border-left: 1px solid ${pl.Neutral[5]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?E`
                box-shadow: 0.125rem 0.125rem 0.5rem ${pl.Neutral[5]};
            `:E`
                box-shadow: inset -0.5px 0px ${pl.Accent.Light[1]};
            `};
`,MW=I(Il.H5)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${pl.Primary};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,AW=I(Il.XSmall)`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${pl.Neutral[3]};
    ${e=>{if(!e.$show)return E`
                display: none;
            `}}
`,NW=I(Nc)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,BW=I(Jp)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 5rem 0 5rem 0;
`,RW=I.div`
    display: flex;
    border-bottom: 1px solid ${pl.Neutral[5]};
`,LW=I.div`
    border-right: 0.5px solid ${pl.Accent.Light[1]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: 20px 12px 20px 12px;
`,PW=M`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,zW=I.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${pl.Neutral[6]} 8%,
        ${pl.Neutral[7]} 18%,
        ${pl.Neutral[6]} 33%
    );
    background-size: 800px 104px;
    animation: ${PW} 1.5s forwards infinite;
`,FW=I(dx)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,HW=r=>{var{date:i,emptyContentMessage:s,rowData:l,loading:c,minTime:d="00:00",maxTime:p="23:00",minDate:h,maxDate:m,totalRecords:f,showCurrentDateAsToday:g,showDateAsShortForm:v,onPage:b,onRefresh:y,onNextDayClick:x,onPreviousDayClick:w,onCalendarDateSelect:$}=r,k=lt(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const S=k["data-testid"]||"timetable",C=Mp.roundToNearestInterval(d,60),T=Mp.roundToNearestInterval(p,60,!0),D=Mp.generateHourlyIntervals(C,T),j=0===f||SO.isEmpty(l),_=j||l.length===f,I=a(null),E=a(null),[M,A]=o(!1),[N,B]=o(!1),[R,L]=o(0),[P,z]=o(!1);u((()=>{const e=SO.throttle((()=>{if(I.current&&(A(I.current.scrollLeft>0),B(I.current.scrollTop>0)),P)return;const{scrollTop:e,clientHeight:t,scrollHeight:n}=I.current;Math.ceil(e+t)>=n-1&&!_&&b&&!c&&(z(!0),b())}),100),t=I.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[_,P,c,b]),u((()=>{z(!1)}),[l]);an({onResize:()=>{if(I.current){const e=Math.ceil(60*D.length/iW),t=(I.current.clientWidth-aW)/e;L(t>21?t:21)}},targetRef:I,refreshMode:"debounce",refreshRate:50});const F=(()=>{let e=0;const t=rW.length;return()=>{const n=rW[e],r=oW[e];return e=(e+1)%t,{mainColor:n,alternateColor:r}}})(),H=({wrapper:e,children:t})=>e(t),W=()=>{if(!c&&P)return e(EW,Object.assign({$isScrolled:M},{children:e(zW,{})}))},V=()=>{if(!c&&P)return e(RW,Object.assign({"data-testid":"lazy-loader"},{children:D.map(((t,n)=>e(LW,Object.assign({$width:4*R},{children:e(zW,{})}),`lazy-load-cell-${n}`)))}))};return t(kW,j?Object.assign({},k,{"data-testid":S},{children:[e(hW,{selectedDate:i,loading:c||P,tableContainerRef:I,minDate:h,maxDate:m,totalRecords:f,showCurrentDateAsToday:g,showDateAsShortForm:v,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),e(SW,Object.assign({className:"empty-container"},{children:c?e(NW,{$isEmptyContent:j}):e(BW,{type:"no-item-found",description:s})}))]}):Object.assign({},k,{"data-testid":S},{children:[e(hW,{"data-id":"timetable-date-navigator",selectedDate:i,loading:c||P,tableContainerRef:I,minDate:h,maxDate:m,totalRecords:f,showCurrentDateAsToday:g,showDateAsShortForm:v,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),t(OW,Object.assign({"data-id":"timetable-container","data-testid":"timetable-container",ref:I,$loading:c,$allRecordsLoaded:_||!b},{children:[e(CW,{$isScrolledY:N,$isScrolledX:M}),e(TW,Object.assign({$numOfRows:l.length,$isScrolled:M,"data-testid":"row-header-column-id"},{children:t(n,{children:[l.map(((n,r)=>e(H,Object.assign({wrapper:e=>((e,t)=>{if(!e.rowHeaderPopover)return t;const n={position:"bottom-start",rootNode:I,customOffset:e.rowHeaderPopover.offset,children:t,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return O(FW,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),t)})(n,e)},{children:t(EW,Object.assign({$isScrolled:M},{children:[e(MW,Object.assign({$isClickable:!!n.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(n,e),weight:"semibold","data-testid":`${n.id}-row-header-title`},{children:n.name})),e(AW,Object.assign({weight:"bold",$show:!!n.subtitle,"data-testid":`${n.id}-row-header-subtitle`},{children:n.subtitle}))]}),`${n.id}-row-header`)}),r))),W()]})})),e(DW,Object.assign({$numOfColumns:D.length,$isScrolled:N},{children:D.map((t=>e(jW,Object.assign({"data-testid":`${t}-column`},{children:e(_W,Object.assign({weight:"semibold"},{children:t}))}),`${t}-column-key`)))})),c?e(NW,{$isEmptyContent:j}):t(IW,Object.assign({"data-testid":"content-container-id",ref:E,$numOfRows:l.length},{children:[l.map(((t,n)=>e($W,Object.assign({timetableMinTime:C,timetableMaxTime:T,rowBarColor:F(),intervalWidth:R,containerRef:E},t),`${n}-row-bar`))),V()]}))]}))]}))},WW=e=>{switch(e.$type){case"success":return pl.Validation.Green;case"warning":return pl.Validation.Orange;case"error":return pl.Validation.Red;case"info":return pl.Validation.Blue;default:return}},VW=I(Ra.div)`
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

    ${fl.MaxWidth.tablet} {
        left: 0;
    }

    ${e=>E`
            background: ${WW(e).Background};
            border: 1px solid ${WW(e).Border};
            color: ${WW(e).Text};
        `};
`,YW=I.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${fl.MaxWidth.mobileL} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,UW=I.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${e=>E`
            & > svg {
                flex-shrink: 0;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.0625rem;
                margin-right: 0.5rem;
                color: ${WW(e).Icon};
            }
        `};
`,qW=I.div`
    display: flex;
    flex-direction: column;
`,XW=I(Il.H4)`
    display: flex;

    ${e=>E`
            color: ${WW(e).Text};
        `}
`,KW=I.div`
    ${e=>E`
            p {
                color: ${WW(e).Text};
            }
        `}
`,GW=I(ac.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${fl.MaxWidth.mobileL} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,ZW=I(bl)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>E`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${WW(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${fl.MaxWidth.mobileL} {
                align-self: center;
            }
        `};
`,QW=4e3,JW=n=>{var{type:r="success",title:a,label:s,autoDismiss:l,autoDismissTime:c=QW,onDismiss:d,fixed:p=!0,actionButton:h}=n,m=lt(n,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[f,g]=o(!1),v=zc.useMediaQuery({maxWidth:hl.tablet});u((()=>{g(!0)}),[]),u((()=>{if(!l)return;const e=setTimeout((()=>{g(!1)}),c);return()=>clearTimeout(e)}),[l]);const b=ya({opacity:f?1:0,transform:f?v?"translateY(0%)":"translateX(0%)":v?"translateY(-1500%)":"translateX(150%)",config:{easing:wr.easeInOutQuart,duration:1e3},onRest:()=>{f||null==d||d()}});return t(VW,Object.assign({style:b,$type:r,$fixed:p},m,{children:[t(YW,{children:[t(UW,Object.assign({$type:r},{children:[(()=>{switch(r){case"success":return e(pe,{});case"warning":return e(ue,{});case"error":return e(se,{});case"info":return e(de,{});default:return null}})(),t(qW,{children:[a&&(i.isValidElement(a)?a:e(XW,Object.assign({$type:r,weight:"semibold"},{children:a}))),s&&e(KW,Object.assign({$type:r},{children:i.isValidElement(s)?s:e(a?Il.BodySmall:Il.Body,{children:s})}))]})]})),h&&e(GW,Object.assign({styleType:"light",onClick:h.onClick},{children:h.label}))]}),e(ZW,Object.assign({$type:r,onClick:()=>{g(!1)}},{children:e(J,{})}))]}))},eV=I.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${e=>(e=>{switch(e){case"left":return E`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${fl.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"right":return E`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${fl.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"bottom":return E`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${fl.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;default:return E`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${fl.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?E`
            visibility: "visible";
            opacity: 1;
            transition: ${Nl.Base};
            z-index: 2;
        `:E`
            visibility: "hidden";
            opacity: 0;
            transition: ${Nl.Base};
            z-index: -1;
        `}
`,tV=I(Uu)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,nV=I.div`
    position: absolute;
    overflow: hidden;

    ${e=>{switch(e.position){case"top":default:return E`
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
                        border-color: ${pl.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return E`
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
                        border-color: transparent ${pl.Neutral[8]}
                            transparent transparent;
                    }
                `;case"left":return E`
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
                            ${pl.Neutral[8]};
                    }
                `;case"bottom":return E`
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
                            ${pl.Neutral[8]} transparent;
                    }
                `}}}
`,rV=I.div`
    position: relative;
`,iV=n=>{var{visible:r,position:i="top",children:s}=n,l=lt(n,["visible","position","children"]);const c=l["data-testid"]||"tooltip",[d,p]=o(i),h=a(null);u((()=>(f(),window.addEventListener("resize",fp(m,300)),()=>{window.removeEventListener("resize",fp(m,300))})),[]);const m=()=>{f()},f=()=>{if(h.current){const e=h.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":p("right");break;case"right":p("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":p("left");break;case"left":p("top")}else p(i)}};return t(eV,Object.assign({position:d,"data-testid":c,visible:r,ref:h},l,{children:[e(tV,{children:"string"==typeof s?e(Il.BodySmall,{children:s}):s}),e(nV,{position:d})]}))},aV=(n,r)=>i=>{const{tooltipVisible:a,position:o}=i,s=lt(i,["tooltipVisible","position"]);return t(rV,{children:[e(n,Object.assign({},s)),e(iV,Object.assign({visible:a,position:o},{children:r.content}))]})},oV=E`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${fl.MaxWidth.mobileL} {
        grid-column: 1 / -1;
    }
`,sV=I(Tx.Content)`
    background: ${({$background:e})=>e?pl.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,lV=I(Il.H3)`
    margin-bottom: 1rem;
    ${oV}
`,cV=I(Il.Body)`
    margin-bottom: 2rem;
    ${oV}
`,dV=I.div`
    ${oV}
`,uV=I.ul`
    ${oV}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${fl.MaxWidth.tablet} {
        column-gap: 1.5rem;
    }

    ${fl.MaxWidth.mobileL} {
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,pV=i.forwardRef(((t,n)=>{var{stretch:r}=t,i=lt(t,["stretch"]);return e(uV,Object.assign({ref:n,$stretch:r},i))})),hV=I.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return E`
                    grid-column: auto / span 4;
                `;case"full":return E`
                    grid-column: auto / span 8;
                `}}}

    ${fl.MaxWidth.tablet} {
        grid-column: auto / span 8;
    }

    ${fl.MaxWidth.mobileL} {
        grid-column: auto / span 4;
    }

    overflow-wrap: break-word;
`,mV=I.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${pl.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,fV=I.button`
    ${_l.getTextStyle("Body","regular")}
    color: ${pl.Neutral[1]};
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
`,gV=I.span`
    color: ${pl.Neutral[3]};
`,vV=I(tc)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${pl.Neutral[3]} transparent transparent transparent;
    }
`,bV=I(Fe)`
    color: ${pl.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,yV=I.span`
    color: ${pl.Validation.Orange.Text};
`,xV=I.span`
    ${_l.getTextStyle("Body","semibold")}
    color: ${pl.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,wV=I(yc)`
    margin-top: 0.5rem;
`,$V=({label:r,value:i,displayWidth:a="full",maskState:s,maskLoadingState:l,maskChar:c="•",maskRange:d,unmaskRange:p,maskRegex:h,disableMaskUnmask:m,alert:f,maskTransformer:g,onMask:v,onUnmask:b,onTryAgain:y})=>{const[x,w]=o(s);u((()=>{w(s)}),[s]);const $=()=>{switch("fail"===l&&y&&y(),x){case"masked":b&&b(),w("unmasked");break;case"unmasked":v&&v(),w("masked")}},k=()=>"string"!=typeof i?i:"masked"===x?kd.maskValue(i,{maskChar:c,maskRange:d,unmaskRange:p,maskRegex:h,maskTransformer:g}):i,S=()=>{switch(l){case"fail":return t(n,{children:[e(bV,{}),e(yV,{children:"Error"}),e(xV,{children:"Try again?"})]});case"loading":return t(n,{children:[e(vV,{}),e(gV,{children:"Retrieving..."})]});default:return t(n,{children:[k(),e(mV,{children:"masked"===x?e(Pe,{"data-testid":"masked-icon"}):e(ze,{"data-testid":"unmasked-icon"})})]})}};return t(hV,Object.assign({$widthStyle:a},{children:[e(xx,{children:r}),"string"!=typeof i?i:x?m?e(Il.Body,{children:k()}):e(fV,Object.assign({"data-testid":"clickable-label",onClick:$,"aria-busy":"loading"===l,"aria-live":"polite",type:"button"},{children:S()})):e(Il.Body,{children:i}),f&&e(wV,Object.assign({sizeType:"small"},f))]}))},kV=Object.assign((r=>{var{items:i,title:a,description:o,topSection:s,bottomSection:l,children:c,background:d=!0,stretch:u,onMask:p,onUnmask:h,onTryAgain:m}=r,f=lt(r,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const g=e=>()=>{p&&p(e)},v=e=>()=>{h&&h(e)},b=e=>()=>{m&&m(e)},y=()=>{if(i&&i.length>0){const t=i.map(((t,n)=>e($V,Object.assign({},t,{onMask:g(t),onUnmask:v(t),onTryAgain:b(t)}),n)));return e(uV,Object.assign({$stretch:u},{children:t}))}return null};return e(sV,Object.assign({$background:d},f,{type:"grid"},{children:c||t(n,{children:[a&&e(lV,Object.assign({weight:"semibold",$stretch:u},{children:a})),o&&e(cV,Object.assign({$stretch:u},{children:o})),s&&e(dV,Object.assign({"data-id":"top-section",$stretch:u},{children:s})),y(),l&&e(dV,Object.assign({"data-id":"bottom-section",$stretch:u},{children:l}))]})}))}),{ItemSection:pV,Item:$V});export{OO as $,dc as A,Dc as B,pl as C,bh as D,uf as E,Tf as F,$B as G,kB as H,tw as I,Rm as J,OB as K,wc as L,ow as M,cO as N,rI as O,oI as P,sI as Q,_I as R,lf as S,Kx as T,II as U,LI as V,VI as W,Tx as X,zB as Y,HB as Z,ct as _,cf as a,YB as a0,qB as a1,fl as a2,gl as a3,Wm as a4,WR as a5,VR as a6,HR as a7,tL as a8,iL as a9,Ic as aA,Ec as aB,Mc as aC,cl as aD,LE as aE,oH as aF,AH as aG,YH as aH,nW as aI,zE as aJ,HW as aK,JW as aL,bE as aM,iV as aN,aV as aO,Nl as aP,kV as aQ,qE as aR,dP as aa,fP as ab,Om as ac,jP as ad,kI as ae,MP as af,zP as ag,PP as ah,lx as ai,mx as aj,dx as ak,CI as al,Mz as am,Rz as an,RI as ao,aF as ap,OF as aq,zF as ar,WF as as,_l as at,Sl as au,Il as av,nc as aw,rE as ax,jc as ay,_c as az,yc as b,La as c,Oc as d,Nc as e,ed as f,Ld as g,ac as h,zd as i,Wu as j,Uu as k,Gu as l,Lp as m,em as n,im as o,fm as p,Xl as q,wm as r,Mm as s,Jp as t,zp as u,Jf as v,LM as w,vA as x,FA as y,KE as z};
//# sourceMappingURL=index.f952802a.js.map
