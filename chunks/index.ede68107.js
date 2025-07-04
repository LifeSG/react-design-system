import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,forwardRef as g,useCallback as p,useContext as f,useMemo as m,version as b,useImperativeHandle as v,lazy as y,Suspense as x,useReducer as w,memo as $,createContext as C,Fragment as S,Children as k,createElement as D}from"react";import E,{findDOMNode as T,unstable_batchedUpdates as F,createPortal as O}from"react-dom";import M,{css as _,ThemeContext as I,ThemeProvider as A,keyframes as B,useTheme as R}from"styled-components";import{ChevronUpIcon as j}from"@lifesg/react-icons/chevron-up";import{ExternalIcon as z}from"@lifesg/react-icons/external";import{ArrowRightIcon as P}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as L}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as N}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as H}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as W}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as Y,SquareIcon as V,SquareFillIcon as U,SquareTickFillIcon as K,MinusSquareFillIcon as X,ClockIcon as q,ArrowUpIcon as G,ArrowDownIcon as Z,ArrowRightIcon as Q,PencilIcon as J,EraserIcon as ee,DownloadIcon as te,CrossIcon as re,FilterIcon as ne,PlaceholderImageIcon as ie,MagnifierPlusIcon as oe,MagnifierMinusIcon as ae,ChevronLeftIcon as se,ChevronRightIcon as le,CircleIcon as ce,CircleDotIcon as de,ChevronUpIcon as ue,ExclamationCircleFillIcon as he,TickIcon as ge,RefreshIcon as pe,ICircleFillIcon as fe,ExclamationTriangleFillIcon as me,TickCircleFillIcon as be}from"@lifesg/react-icons";import{ChevronDownIcon as ve}from"@lifesg/react-icons/chevron-down";import{ChevronRightIcon as ye}from"@lifesg/react-icons/chevron-right";import{ChevronLeftIcon as xe}from"@lifesg/react-icons/chevron-left";import{useFloatingTree as we,useFloating as $e,autoUpdate as Ce,offset as Se,flip as ke,shift as De,limitShift as Ee,size as Te,useTransitionStyles as Fe,useClick as Oe,useDismiss as Me,useInteractions as _e,FloatingPortal as Ie,FloatingFocusManager as Ae,FloatingTree as Be,useFloatingNodeId as Re,FloatingNode as je,useHover as ze}from"@floating-ui/react";import{CrossIcon as Pe}from"@lifesg/react-icons/cross";import{StarIcon as Le}from"@lifesg/react-icons/star";import{StarFillIcon as Ne}from"@lifesg/react-icons/star-fill";import{CloudArrowUpFillIcon as He}from"@lifesg/react-icons/cloud-arrow-up-fill";import{MagnifierIcon as We}from"@lifesg/react-icons/magnifier";import{EyeIcon as Ye}from"@lifesg/react-icons/eye";import{EyeSlashIcon as Ve}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as Ue}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as Ke}from"@lifesg/react-icons/square";import{SquareFillIcon as Xe}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as qe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Ge}from"@lifesg/react-icons/tick";import{CaretRightIcon as Ze}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Qe}from"@lifesg/react-icons/minus-square-fill";import{CircleIcon as Je}from"@lifesg/react-icons/circle";import{CircleDotIcon as et}from"@lifesg/react-icons/circle-dot";import{BinIcon as tt}from"@lifesg/react-icons/bin";import{PencilIcon as rt}from"@lifesg/react-icons/pencil";import{DragHandleIcon as nt}from"@lifesg/react-icons/drag-handle";import{MinusIcon as it}from"@lifesg/react-icons/minus";import{PlusIcon as ot}from"@lifesg/react-icons/plus";import{MenuIcon as at}from"@lifesg/react-icons/menu";import{Chevron2LeftIcon as st}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as lt}from"@lifesg/react-icons/chevron-2-right";import{ChevronLineLeftIcon as ct}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as dt}from"@lifesg/react-icons/chevron-line-right";import{EllipsisHorizontalIcon as ut}from"@lifesg/react-icons/ellipsis-horizontal";import{StarHalfIcon as ht}from"@lifesg/react-icons/star-half";const gt=i.createContext(!1);var pt=function(e,t){return pt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},pt(e,t)};var ft=function(){return ft=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ft.apply(this,arguments)};var mt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var bt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},vt="object"==typeof mt&&mt&&mt.Object===Object&&mt,yt="object"==typeof self&&self&&self.Object===Object&&self,xt=vt||yt||Function("return this")(),wt=xt,$t=function(){return wt.Date.now()},Ct=/\s/;var St=function(e){for(var t=e.length;t--&&Ct.test(e.charAt(t)););return t},kt=/^\s+/;var Dt=function(e){return e?e.slice(0,St(e)+1).replace(kt,""):e},Et=xt.Symbol,Tt=Et,Ft=Object.prototype,Ot=Ft.hasOwnProperty,Mt=Ft.toString,_t=Tt?Tt.toStringTag:void 0;var It=function(e){var t=Ot.call(e,_t),r=e[_t];try{e[_t]=void 0;var n=!0}catch(e){}var i=Mt.call(e);return n&&(t?e[_t]=r:delete e[_t]),i},At=Object.prototype.toString;var Bt=It,Rt=function(e){return At.call(e)},jt=Et?Et.toStringTag:void 0;var zt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":jt&&jt in Object(e)?Bt(e):Rt(e)},Pt=function(e){return null!=e&&"object"==typeof e};var Lt=Dt,Nt=bt,Ht=function(e){return"symbol"==typeof e||Pt(e)&&"[object Symbol]"==zt(e)},Wt=/^[-+]0x[0-9a-f]+$/i,Yt=/^0b[01]+$/i,Vt=/^0o[0-7]+$/i,Ut=parseInt;var Kt=bt,Xt=$t,qt=function(e){if("number"==typeof e)return e;if(Ht(e))return NaN;if(Nt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Nt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Lt(e);var r=Yt.test(e);return r||Vt.test(e)?Ut(e.slice(2),r?2:8):Wt.test(e)?NaN:+e},Gt=Math.max,Zt=Math.min;var Qt=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function f(){var e=Xt();if(p(e))return m(e);s=setTimeout(f,function(e){var r=t-(e-l);return u?Zt(r,o-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?g(e):(n=i=void 0,a)}function b(){var e=Xt(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),g(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=qt(t)||0,Kt(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Gt(qt(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Xt())},b},Jt=Qt,er=bt;var tr=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return er(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Jt(e,t,{leading:n,maxWait:t,trailing:i})},rr=function(e,t,r,n){switch(t){case"debounce":return Qt(e,r,n);case"throttle":return tr(e,r,n);default:return e}},nr=function(e){return"function"==typeof e},ir=function(){return"undefined"==typeof window},or=function(e){return e instanceof Element||e instanceof HTMLDocument},ar=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&nr(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!ir()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(ir())return null;if(t)return document.querySelector(t);if(n&&or(n))return n;if(r.targetRef&&or(r.targetRef.current))return r.targetRef.current;var i=T(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=ar(s,r.setState.bind(r),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!ir()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return nr(t)?"renderProp":nr(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,c=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=l(),r.observableElement=null,ir()||(r.resizeHandler=rr(r.createResizeHandler,i,a,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}pt(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ir()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(d);var sr=ir()?u:h;function lr(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,g=e.targetRef,p=e.observerOptions,f=e.onResize,m=o(r),b=o(null),v=null!=g?g:b,y=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return sr((function(){if(!ir()){var e=ar(f,$,d,h);y.current=rr((function(t){(d||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!ir()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,d,h,f,p,v.current]),ft({ref:v},w)}var cr=Object.defineProperty,dr={};((e,t)=>{for(var r in t)cr(e,r,{get:t[r],enumerable:!0})})(dr,{assign:()=>Wr,colors:()=>Lr,createStringInterpolator:()=>Rr,skipAnimation:()=>Nr,to:()=>jr,willAdvance:()=>Hr});var ur=Er(),hr=e=>Cr(e,ur),gr=Er();hr.write=e=>Cr(e,gr);var pr=Er();hr.onStart=e=>Cr(e,pr);var fr=Er();hr.onFrame=e=>Cr(e,fr);var mr=Er();hr.onFinish=e=>Cr(e,mr);var br=[];hr.setTimeout=(e,t)=>{const r=hr.now()+t,n=()=>{const e=br.findIndex((e=>e.cancel==n));~e&&br.splice(e,1),wr-=~e?1:0},i={time:r,handler:e,cancel:n};return br.splice(vr(r),0,i),wr+=1,Sr(),i};var vr=e=>~(~br.findIndex((t=>t.time>e))||~br.length);hr.cancel=e=>{pr.delete(e),fr.delete(e),mr.delete(e),ur.delete(e),gr.delete(e)},hr.sync=e=>{$r=!0,hr.batchedUpdates(e),$r=!1},hr.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,hr.onStart(r)}return n.handler=e,n.cancel=()=>{pr.delete(r),t=null},n};var yr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};hr.use=e=>yr=e,hr.now="undefined"!=typeof performance?()=>performance.now():Date.now,hr.batchedUpdates=e=>e(),hr.catch=console.error,hr.frameLoop="always",hr.advance=()=>{"demand"!==hr.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Dr()};var xr=-1,wr=0,$r=!1;function Cr(e,t){$r?(t.delete(e),e(0)):(t.add(e),Sr())}function Sr(){xr<0&&(xr=0,"demand"!==hr.frameLoop&&yr(kr))}function kr(){~xr&&(yr(kr),hr.batchedUpdates(Dr))}function Dr(){const e=xr;xr=hr.now();const t=vr(xr);t&&(Tr(br.splice(0,t),(e=>e.handler())),wr-=t),wr?(pr.flush(),ur.flush(e?Math.min(64,xr-e):16.667),fr.flush(),gr.flush(),mr.flush()):xr=-1}function Er(){let e=new Set,t=e;return{add(r){wr+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(wr-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,wr-=t.size,Tr(t,(t=>t(r)&&e.add(t))),wr+=e.size,t=e)}}}function Tr(e,t){e.forEach((e=>{try{t(e)}catch(e){hr.catch(e)}}))}function Fr(){}var Or={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Mr(e,t){if(Or.arr(e)){if(!Or.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var _r=(e,t)=>e.forEach(t);function Ir(e,t,r){if(Or.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Ar=e=>Or.und(e)?[]:Or.arr(e)?e:[e];function Br(e,t){if(e.size){const r=Array.from(e);e.clear(),_r(r,t)}}var Rr,jr,zr=(e,...t)=>Br(e,(e=>e(...t))),Pr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Lr=null,Nr=!1,Hr=Fr,Wr=e=>{e.to&&(jr=e.to),e.now&&(hr.now=e.now),void 0!==e.colors&&(Lr=e.colors),null!=e.skipAnimation&&(Nr=e.skipAnimation),e.createStringInterpolator&&(Rr=e.createStringInterpolator),e.requestAnimationFrame&&hr.use(e.requestAnimationFrame),e.batchedUpdates&&(hr.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Hr=e.willAdvance),e.frameLoop&&(hr.frameLoop=e.frameLoop)},Yr=new Set,Vr=[],Ur=[],Kr=0,Xr={get idle(){return!Yr.size&&!Vr.length},start(e){Kr>e.priority?(Yr.add(e),hr.onStart(qr)):(Gr(e),hr(Qr))},advance:Qr,sort(e){if(Kr)hr.onFrame((()=>Xr.sort(e)));else{const t=Vr.indexOf(e);~t&&(Vr.splice(t,1),Zr(e))}},clear(){Vr=[],Yr.clear()}};function qr(){Yr.forEach(Gr),Yr.clear(),hr(Qr)}function Gr(e){Vr.includes(e)||Zr(e)}function Zr(e){Vr.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Vr,(t=>t.priority>e.priority)),0,e)}function Qr(e){const t=Ur;for(let r=0;r<Vr.length;r++){const n=Vr[r];Kr=n.priority,n.idle||(Hr(n),n.advance(e),n.idle||t.push(n))}return Kr=0,(Ur=Vr).length=0,(Vr=t).length>0}var Jr="[-+]?\\d*\\.?\\d+",en=Jr+"%";function tn(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var rn=new RegExp("rgb"+tn(Jr,Jr,Jr)),nn=new RegExp("rgba"+tn(Jr,Jr,Jr,Jr)),on=new RegExp("hsl"+tn(Jr,en,en)),an=new RegExp("hsla"+tn(Jr,en,en,Jr)),sn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ln=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,cn=/^#([0-9a-fA-F]{6})$/,dn=/^#([0-9a-fA-F]{8})$/;function un(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function hn(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=un(i,n,e+1/3),a=un(i,n,e),s=un(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function gn(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function pn(e){return(parseFloat(e)%360+360)%360/360}function fn(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function mn(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function bn(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=cn.exec(e))?parseInt(t[1]+"ff",16)>>>0:Lr&&void 0!==Lr[e]?Lr[e]:(t=rn.exec(e))?(gn(t[1])<<24|gn(t[2])<<16|gn(t[3])<<8|255)>>>0:(t=nn.exec(e))?(gn(t[1])<<24|gn(t[2])<<16|gn(t[3])<<8|fn(t[4]))>>>0:(t=sn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=dn.exec(e))?parseInt(t[1],16)>>>0:(t=ln.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=on.exec(e))?(255|hn(pn(t[1]),mn(t[2]),mn(t[3])))>>>0:(t=an.exec(e))?(hn(pn(t[1]),mn(t[2]),mn(t[3]))|fn(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var vn=(e,t,r)=>{if(Or.fun(e))return e;if(Or.arr(e))return vn({range:e,output:t,extrapolate:r});if(Or.str(e.output[0]))return Rr(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var yn=1.70158,xn=1.525*yn,wn=yn+1,$n=2*Math.PI/3,Cn=2*Math.PI/4.5,Sn=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},kn={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>wn*e*e*e-yn*e*e,easeOutBack:e=>1+wn*Math.pow(e-1,3)+yn*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-xn)/2:(Math.pow(2*e-2,2)*((xn+1)*(2*e-2)+xn)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*$n),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*$n)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Cn)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Cn)/2+1,easeInBounce:e=>1-Sn(1-e),easeOutBounce:Sn,easeInOutBounce:e=>e<.5?(1-Sn(1-2*e))/2:(1+Sn(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Dn=Symbol.for("FluidValue.get"),En=Symbol.for("FluidValue.observers"),Tn=e=>Boolean(e&&e[Dn]),Fn=e=>e&&e[Dn]?e[Dn]():e,On=e=>e[En]||null;function Mn(e,t){const r=e[En];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var _n=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");In(this,e)}},In=(e,t)=>jn(e,Dn,t);function An(e,t){if(e[Dn]){let r=e[En];r||jn(e,En,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Bn(e,t){const r=e[En];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[En]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Rn,jn=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),zn=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Pn=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ln=new RegExp(`(${zn.source})(%|[a-z]+)`,"i"),Nn=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Hn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Wn=e=>{const[t,r]=Yn(e);if(!t||Pr())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Hn.test(r)?Wn(r):r||e},Yn=e=>{const t=Hn.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Vn=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Un=e=>{Rn||(Rn=Lr?new RegExp(`(${Object.keys(Lr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Fn(e).replace(Hn,Wn).replace(Pn,bn).replace(Rn,bn))),r=t.map((e=>e.match(zn).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=n.map((t=>vn({...e,output:t})));return e=>{const r=!Ln.test(t[0])&&t.find((e=>Ln.test(e)))?.replace(zn,"");let n=0;return t[0].replace(zn,(()=>`${i[n++](e)}${r||""}`)).replace(Nn,Vn)}},Kn="react-spring: ",Xn=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Kn}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},qn=Xn(console.warn);var Gn=Xn(console.warn);function Zn(e){return Or.str(e)&&("#"==e[0]||/\d/.test(e)||!Pr()&&Hn.test(e)||e in(Lr||{}))}var Qn=Pr()?u:h;function Jn(){const e=a()[1],t=(()=>{const e=o(!1);return Qn((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var ei=e=>u(e,ti),ti=[];function ri(e){const t=o();return u((()=>{t.current=e})),t.current}var ni=Symbol.for("Animated:node"),ii=e=>e&&e[ni],oi=(e,t)=>{return r=e,n=ni,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},ai=e=>e&&e[ni]&&e[ni].getPayload(),si=class{constructor(){oi(this,this)}getPayload(){return this.payload||[]}},li=class extends si{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Or.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new li(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Or.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Or.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ci=class extends li{constructor(e){super(0),this._string=null,this._toString=vn({output:[e,e]})}static create(e){return new ci(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Or.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=vn({output:[this.getValue(),e]})),this._value=0,super.reset()}},di={dependencies:null},ui=class extends si{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ir(this.source,((r,n)=>{var i;(i=r)&&i[ni]===i?t[n]=r.getValue(e):Tn(r)?t[n]=Fn(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&_r(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ir(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){di.dependencies&&Tn(e)&&di.dependencies.add(e);const t=ai(e);t&&_r(t,(e=>this.add(e)))}},hi=class extends ui{constructor(e){super(e)}static create(e){return new hi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(gi)),!0)}};function gi(e){return(Zn(e)?ci:li).create(e)}function pi(e){const t=ii(e);return t?t.constructor:Or.arr(e)?hi:Zn(e)?ci:li}var fi=(e,t)=>{const r=!Or.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((i,a)=>{const s=o(null),l=r&&p((e=>{s.current=function(e,t){e&&(Or.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,d]=function(e,t){const r=new Set;di.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ui(e),di.dependencies=null,[e,r]}(i,t),h=Jn(),g=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},f=new mi(g,d),m=o();Qn((()=>(m.current=f,_r(d,(e=>An(e,f))),()=>{m.current&&(_r(m.current.deps,(e=>Bn(e,m.current))),hr.cancel(m.current.update))}))),u(g,[]),ei((()=>()=>{const e=m.current;_r(e.deps,(t=>Bn(t,e)))}));const b=t.getComponentProps(c.getValue());return n.createElement(e,{...b,ref:l})}))},mi=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&hr.write(this.update)}};var bi=Symbol.for("AnimatedComponent"),vi=e=>Or.str(e)?e:e&&Or.str(e.displayName)?e.displayName:Or.fun(e)&&e.name||null;function yi(e,...t){return Or.fun(e)?e(...t):e}var xi=(e,t)=>!0===e||!!(t&&e&&(Or.fun(e)?e(t):Ar(e).includes(t))),wi=(e,t)=>Or.obj(e)?t&&e[t]:e,$i=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ci=e=>e,Si=(e,t=Ci)=>{let r=ki;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Or.und(r)||(n[i]=r)}return n},ki=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Di={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ei(e){const t=function(e){const t={};let r=0;if(Ir(e,((e,n)=>{Di[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ir(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Ti(e){return e=Fn(e),Or.arr(e)?e.map(Ti):Zn(e)?dr.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Fi(e){return Or.fun(e)||Or.arr(e)&&Or.obj(e[0])}var Oi={tension:170,friction:26,mass:1,damping:1,easing:kn.linear,clamp:!1},Mi=class{constructor(){this.velocity=0,Object.assign(this,Oi)}};function _i(e,t){if(Or.und(t.decay)){const r=!Or.und(t.tension)||!Or.und(t.friction);!r&&Or.und(t.frequency)&&Or.und(t.damping)&&Or.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Ii=[],Ai=class{constructor(){this.changed=!1,this.values=Ii,this.toValues=null,this.fromValues=Ii,this.config=new Mi,this.immediate=!1}};function Bi(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=xi(r.cancel??n?.cancel,t);if(d)g();else{Or.und(r.pause)||(i.paused=xi(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||xi(e,t)),l=yi(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-hr.now()}function h(){l>0&&!dr.skipAnimation?(i.delayed=!0,c=hr.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(c)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Ri=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Pi(e.get()):t.every((e=>e.noop))?ji(e.get()):zi(e.get(),t.every((e=>e.finished))),ji=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),zi=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Pi=e=>({value:e,cancelled:!0,finished:!1});function Li(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Si(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),g=e=>{const t=i<=(r.cancelId||0)&&Pi(n)||i!==r.asyncId&&zi(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new Hi,a=new Wi;return(async()=>{if(dr.skipAnimation)throw Ni(r),a.result=zi(n,!1),u(a),a;g(o);const s=Or.obj(e)?{...e}:{...t,to:e};s.parentId=i,Ir(c,((e,t)=>{Or.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return g(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(dr.skipAnimation)return Ni(r),zi(n,!1);try{let t;t=Or.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),h]),f=zi(n.get(),!0,!1)}catch(e){if(e instanceof Hi)f=e.result;else{if(!(e instanceof Wi))throw e;f=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Or.fun(a)&&hr.batchedUpdates((()=>{a(f,n,n.item)})),f})():l}function Ni(e,t){Br(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Hi=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Wi=class extends Error{constructor(){super("SkipAnimationSignal")}},Yi=e=>e instanceof Ui,Vi=1,Ui=class extends _n{constructor(){super(...arguments),this.id=Vi++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ii(this);return e&&e.getValue()}to(...e){return dr.to(this,e)}interpolate(...e){return qn(`${Kn}The "interpolate" function is deprecated in v9 (use "to" instead)`),dr.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Mn(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Xr.sort(this),Mn(this,{type:"priority",parent:this,priority:e})}},Ki=Symbol.for("SpringPhase"),Xi=e=>(1&e[Ki])>0,qi=e=>(2&e[Ki])>0,Gi=e=>(4&e[Ki])>0,Zi=(e,t)=>t?e[Ki]|=3:e[Ki]&=-3,Qi=(e,t)=>t?e[Ki]|=4:e[Ki]&=-5,Ji=class extends Ui{constructor(e,t){if(super(),this.animation=new Ai,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Or.und(e)||!Or.und(t)){const r=Or.obj(e)?{...e}:{...t,from:e};Or.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(qi(this)||this._state.asyncTo)||Gi(this)}get goal(){return Fn(this.animation.to)}get velocity(){const e=ii(this);return e instanceof li?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Xi(this)}get isAnimating(){return qi(this)}get isPaused(){return Gi(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=ai(n.to);!a&&Tn(n.to)&&(i=Ar(Fn(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ci?1:a?a[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Or.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Or.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Or.und(n),g=r==c?s.v0>0:r<c;let p,f=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(f=u==c||u>c==g,f&&(a=-a*n,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=ii(this),l=s.getValue();if(t){const e=Fn(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return hr.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(qi(this)){const{to:e,config:t}=this.animation;hr.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Or.und(e)?(r=this.queue||[],this.queue=[]):r=[Or.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Ri(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ni(this._state,e&&this._lastCallId),hr.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Or.obj(r)?r[t]:r,(null==r||Fi(r))&&(r=void 0),n=Or.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Xi(this)||(e.reverse&&([r,n]=[n,r]),n=Fn(n),Or.und(n)?ii(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Si(e,((e,t)=>/^on/.test(t)?wi(e,r):e))),ao(this,e,"onProps"),so(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Bi(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{Gi(this)||(Qi(this,!0),zr(o.pauseQueue),so(this,"onPause",zi(this,eo(this,this.animation.to)),this))},resume:()=>{Gi(this)&&(Qi(this,!1),qi(this)&&this._resume(),zr(o.resumeQueue),so(this,"onResume",zi(this,eo(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=to(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Pi(this));const n=!Or.und(e.to),i=!Or.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Pi(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||n||t.default&&!Or.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!Mr(u,c);h&&(s.from=u),u=Fn(u);const g=!Mr(d,l);g&&this._focus(d);const p=Fi(t.to),{config:f}=s,{decay:m,velocity:b}=f;(n||i)&&(f.velocity=0),t.config&&!p&&function(e,t,r){r&&(_i(r={...r},t),t={...r,...t}),_i(e,t),Object.assign(e,t);for(const t in Oi)null==e[t]&&(e[t]=Oi[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Or.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(f,yi(t.config,o),t.config!==a.config?yi(a.config,o):void 0);let v=ii(this);if(!v||Or.und(d))return r(zi(this,!0));const y=Or.und(t.reset)?i&&!t.default:!Or.und(u)&&xi(t.reset,o),x=y?u:this.get(),w=Ti(d),$=Or.num(w)||Or.arr(w)||Zn(w),C=!p&&(!$||xi(a.immediate||t.immediate,o));if(g){const e=pi(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let k=Tn(d),D=!1;if(!k){const e=y||!Xi(this)&&h;(g||e)&&(D=Mr(Ti(x),w),k=!D),(Mr(s.immediate,C)||C)&&Mr(f.decay,m)&&Mr(f.velocity,b)||(k=!0)}if(D&&qi(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||Tn(l))&&(s.values=v.getPayload(),s.toValues=Tn(d)?null:S==ci?[1]:Ar(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),k)){const{onRest:e}=s;_r(oo,(e=>ao(this,t,e)));const n=zi(this,eo(this,l));zr(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&hr.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?yi(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(Li(t.to,t,this._state,this)):k?this._start():qi(this)&&!g?this._pendingCalls.add(r):r(ji(x))}_focus(e){const t=this.animation;e!==t.to&&(On(this)&&this._detach(),t.to=e,On(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Tn(t)&&(An(t,this),Yi(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Tn(e)&&Bn(e,this)}_set(e,t=!0){const r=Fn(e);if(!Or.und(r)){const e=ii(this);if(!e||!Mr(r,e.getValue())){const n=pi(r);e&&e.constructor==n?e.setValue(r):oi(this,n.create(r)),e&&hr.batchedUpdates((()=>{this._onChange(r,t)}))}}return ii(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,so(this,"onStart",zi(this,eo(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),yi(this.animation.onChange,e,this)),yi(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ii(this).reset(Fn(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),qi(this)||(Zi(this,!0),Gi(this)||this._resume())}_resume(){dr.skipAnimation?this.finish():Xr.start(this)}_stop(e,t){if(qi(this)){Zi(this,!1);const r=this.animation;_r(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Mn(this,{type:"idle",parent:this});const n=t?Pi(this.get()):zi(this.get(),eo(this,e??r.to));zr(this._pendingCalls,n),r.changed&&(r.changed=!1,so(this,"onRest",n,this))}}};function eo(e,t){const r=Ti(t);return Mr(Ti(e.get()),r)}function to(e,t=e.loop,r=e.to){const n=yi(t);if(n){const i=!0!==n&&Ei(n),o=(i||e).reverse,a=!i||i.reset;return ro({...e,loop:t,default:!1,pause:void 0,to:!o||Fi(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function ro(e){const{to:t,from:r}=e=Ei(e),n=new Set;return Or.obj(t)&&io(t,n),Or.obj(r)&&io(r,n),e.keys=n.size?Array.from(n):null,e}function no(e){const t=ro(e);return Or.und(t.default)&&(t.default=Si(t)),t}function io(e,t){Ir(e,((e,r)=>null!=e&&t.add(r)))}var oo=["onStart","onRest","onChange","onPause","onResume"];function ao(e,t,r){e.animation[r]=t[r]!==$i(t,r)?wi(t[r],e.key):void 0}function so(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var lo=["onStart","onChange","onRest"],co=1,uo=class{constructor(e,t){this.id=co++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Or.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(ro(e)),this}start(e){let{queue:t}=this;return e?t=Ar(e).map(ro):this.queue=[],this._flush?this._flush(this,t):(vo(this,t),ho(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;_r(Ar(t),(t=>r[t].stop(!!e)))}else Ni(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Or.und(e))this.start({pause:!0});else{const t=this.springs;_r(Ar(e),(e=>t[e].pause()))}return this}resume(e){if(Or.und(e))this.start({pause:!1});else{const t=this.springs;_r(Ar(e),(e=>t[e].resume()))}return this}each(e){Ir(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Br(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Br(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Br(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}hr.onFrame(this._onFrame)}};function ho(e,t){return Promise.all(t.map((t=>go(e,t)))).then((t=>Ri(e,t)))}async function go(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Or.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=Or.arr(i)||Or.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):_r(lo,(r=>{const n=t[r];if(Or.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,zr(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===$i(t,"cancel");(d||g&&u.asyncId)&&h.push(Bi(++e._lastAsyncId,{props:t,state:u,actions:{pause:Fr,resume:Fr,start(t,r){g?(Ni(u,e._lastAsyncId),r(Pi(e))):(t.onRest=s,r(Li(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Ri(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=to(t,a,i);if(r)return vo(e,[r]),go(e,r,!0)}return l&&hr.batchedUpdates((()=>l(p,e,e.item))),p}function po(e,t){const r={...e.springs};return t&&_r(Ar(t),(e=>{Or.und(e.keys)&&(e=ro(e)),Or.obj(e.to)||(e={...e,to:void 0}),bo(r,e,(e=>mo(e)))})),fo(e,r),r}function fo(e,t){Ir(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,An(t,e))}))}function mo(e,t){const r=new Ji;return r.key=e,t&&An(r,t),r}function bo(e,t,r){t.keys&&_r(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function vo(e,t){_r(t,(t=>{bo(e.springs,t,(t=>mo(t,e)))}))}var yo,xo,wo=({children:e,...t})=>{const r=f($o),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=o(),i=n.current;let s=i;if(s){const r=Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs));r||(s={inputs:t,result:e()})}else s=r;return u((()=>{n.current=s,i==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=$o;return n.createElement(l,{value:t},e)},$o=(yo=wo,xo={},Object.assign(yo,n.createContext(xo)),yo.Provider._context=yo,yo.Consumer._context=yo,yo);wo.Provider=$o.Provider,wo.Consumer=$o.Consumer;var Co=()=>{const e=[],t=function(t){Gn(`${Kn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return _r(e,((e,i)=>{if(Or.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return _r(e,(e=>e.pause(...arguments))),this},t.resume=function(){return _r(e,(e=>e.resume(...arguments))),this},t.set=function(t){_r(e,((e,r)=>{const n=Or.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return _r(e,((e,n)=>{if(Or.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return _r(e,(e=>e.stop(...arguments))),this},t.update=function(t){return _r(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Or.fun(e)?e(r,t):e};return t._getProps=r,t};function So(e,t){const r=Or.fun(e),[[n],i]=function(e,t,r){const n=Or.fun(t)&&t;n&&!r&&(r=[]);const i=m((()=>n||3==arguments.length?Co():void 0),[]),a=o(0),s=Jn(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const r=po(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?ho(e,t):new Promise((n=>{fo(e,r),l.queue.push((()=>{n(ho(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),d=[],u=ri(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new uo(null,l.flush)),r=n?n(i,e):t[i];r&&(d[i]=no(r))}}m((()=>{_r(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),m((()=>{h(0,Math.min(u,e))}),r);const g=c.current.map(((e,t)=>po(e,d[t]))),p=f(wo),b=ri(p),v=p!==b&&function(e){for(const t in e)return!0;return!1}(p);Qn((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],_r(e,(e=>e()))),_r(c.current,((e,t)=>{i?.add(e),v&&e.start({default:p});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ei((()=>()=>{_r(l.ctrls,(e=>e.stop(!0)))}));const y=g.map((e=>({...e})));return i?[y,i]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var ko=class extends Ui{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=vn(...t);const r=this._get(),n=pi(r);oi(this,n.create(r))}advance(e){const t=this._get();Mr(t,this.get())||(ii(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Eo(this._active)&&To(this)}_get(){const e=Or.arr(this.source)?this.source.map(Fn):Ar(Fn(this.source));return this.calc(...e)}_start(){this.idle&&!Eo(this._active)&&(this.idle=!1,_r(ai(this),(e=>{e.done=!1})),dr.skipAnimation?(hr.batchedUpdates((()=>this.advance())),To(this)):Xr.start(this))}_attach(){let e=1;_r(Ar(this.source),(t=>{Tn(t)&&An(t,this),Yi(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){_r(Ar(this.source),(e=>{Tn(e)&&Bn(e,this)})),this._active.clear(),To(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ar(this.source).reduce(((e,t)=>Math.max(e,(Yi(t)?t.priority:0)+1)),0))}};function Do(e){return!1!==e.idle}function Eo(e){return!e.size||Array.from(e).every(Do)}function To(e){e.idle||(e.idle=!0,_r(ai(e),(e=>{e.done=!0})),Mn(e,{type:"idle",parent:e}))}dr.assign({createStringInterpolator:Un,to:(e,t)=>new ko(e,t)});var Fo=/^--/;function Oo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Fo.test(e)||_o.hasOwnProperty(e)&&_o[e]?(""+t).trim():t+"px"}var Mo={};var _o={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Io=["Webkit","Ms","Moz","O"];_o=Object.keys(_o).reduce(((e,t)=>(Io.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),_o);var Ao=/^(matrix|translate|scale|rotate|skew)/,Bo=/^(translate)/,Ro=/^(rotate|skew)/,jo=(e,t)=>Or.num(e)&&0!==e?e+t:e,zo=(e,t)=>Or.arr(e)?e.every((e=>zo(e,t))):Or.num(e)?e===t:parseFloat(e)===t,Po=class extends ui{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>jo(e,"px"))).join(",")})`,zo(e,0)]))),Ir(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Ao.test(t)){if(delete n[t],Or.und(e))return;const r=Bo.test(t)?"px":Ro.test(t)?"deg":"";i.push(Ar(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${jo(i,r)})`,zo(i,0)]:e=>[`${t}(${e.map((e=>jo(e,r))).join(",")})`,zo(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Lo(i,o)),super(n)}},Lo=class extends _n{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return _r(this.inputs,((r,n)=>{const i=Fn(r[0]),[o,a]=this.transforms[n](Or.arr(i)?i:r.map(Fn));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&_r(this.inputs,(e=>_r(e,(e=>Tn(e)&&An(e,this)))))}observerRemoved(e){0==e&&_r(this.inputs,(e=>_r(e,(e=>Tn(e)&&Bn(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Mn(this,e)}};dr.assign({batchedUpdates:F,createStringInterpolator:Un,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var No=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new ui(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=vi(e)||"Anonymous";return(e=Or.str(e)?o[e]||(o[e]=fi(e,i)):e[bi]||(e[bi]=fi(e,i))).displayName=`Animated(${t})`,e};return Ir(e,((t,r)=>{Or.arr(e)&&(r=vi(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Mo[t]||(Mo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Oo(t,n[t]);Fo.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Po(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Ho=No.animated;const Wo=M.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Yo=e=>{const t=b.split(".");return parseInt(t[0],10)>=19?e:e?"true":void 0};function Vo(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function Uo(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function Ko(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function Xo(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function qo(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var Go="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Zo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qo=Array.isArray,Jo="object"==typeof Go&&Go&&Go.Object===Object&&Go,ea=Jo,ta="object"==typeof self&&self&&self.Object===Object&&self,ra=ea||ta||Function("return this")(),na=ra.Symbol,ia=na,oa=Object.prototype,aa=oa.hasOwnProperty,sa=oa.toString,la=ia?ia.toStringTag:void 0;var ca=function(e){var t=aa.call(e,la),r=e[la];try{e[la]=void 0;var n=!0}catch(e){}var i=sa.call(e);return n&&(t?e[la]=r:delete e[la]),i},da=Object.prototype.toString;var ua=ca,ha=function(e){return da.call(e)},ga=na?na.toStringTag:void 0;var pa=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ga&&ga in Object(e)?ua(e):ha(e)};var fa=function(e){return null!=e&&"object"==typeof e},ma=pa,ba=fa;var va=function(e){return"symbol"==typeof e||ba(e)&&"[object Symbol]"==ma(e)},ya=Qo,xa=va,wa=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$a=/^\w*$/;var Ca=function(e,t){if(ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!xa(e))||($a.test(e)||!wa.test(e)||null!=t&&e in Object(t))};var Sa=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ka=pa,Da=Sa;var Ea,Ta=function(e){if(!Da(e))return!1;var t=ka(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Fa=ra["__core-js_shared__"],Oa=(Ea=/[^.]+$/.exec(Fa&&Fa.keys&&Fa.keys.IE_PROTO||""))?"Symbol(src)_1."+Ea:"";var Ma=function(e){return!!Oa&&Oa in e},_a=Function.prototype.toString;var Ia=function(e){if(null!=e){try{return _a.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Aa=Ta,Ba=Ma,Ra=Sa,ja=Ia,za=/^\[object .+?Constructor\]$/,Pa=Function.prototype,La=Object.prototype,Na=Pa.toString,Ha=La.hasOwnProperty,Wa=RegExp("^"+Na.call(Ha).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ya=function(e,t){return null==e?void 0:e[t]},Va=function(e){return!(!Ra(e)||Ba(e))&&(Aa(e)?Wa:za).test(ja(e))},Ua=Ya;var Ka=function(e,t){var r=Ua(e,t);return Va(r)?r:void 0},Xa=Ka(Object,"create"),qa=Xa;var Ga=function(){this.__data__=qa?qa(null):{},this.size=0};var Za=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Qa=Xa,Ja=Object.prototype.hasOwnProperty;var es=function(e){var t=this.__data__;if(Qa){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ja.call(t,e)?t[e]:void 0},ts=Xa,rs=Object.prototype.hasOwnProperty;var ns=function(e){var t=this.__data__;return ts?void 0!==t[e]:rs.call(t,e)},is=Xa;var os=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=is&&void 0===t?"__lodash_hash_undefined__":t,this},as=Ga,ss=Za,ls=es,cs=ns,ds=os;function us(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}us.prototype.clear=as,us.prototype.delete=ss,us.prototype.get=ls,us.prototype.has=cs,us.prototype.set=ds;var hs=us;var gs=function(){this.__data__=[],this.size=0};var ps=function(e,t){return e===t||e!=e&&t!=t},fs=ps;var ms=function(e,t){for(var r=e.length;r--;)if(fs(e[r][0],t))return r;return-1},bs=ms,vs=Array.prototype.splice;var ys=function(e){var t=this.__data__,r=bs(t,e);return!(r<0)&&(r==t.length-1?t.pop():vs.call(t,r,1),--this.size,!0)},xs=ms;var ws=function(e){var t=this.__data__,r=xs(t,e);return r<0?void 0:t[r][1]},$s=ms;var Cs=function(e){return $s(this.__data__,e)>-1},Ss=ms;var ks=function(e,t){var r=this.__data__,n=Ss(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ds=gs,Es=ys,Ts=ws,Fs=Cs,Os=ks;function Ms(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ms.prototype.clear=Ds,Ms.prototype.delete=Es,Ms.prototype.get=Ts,Ms.prototype.has=Fs,Ms.prototype.set=Os;var _s=Ms,Is=Ka(ra,"Map"),As=hs,Bs=_s,Rs=Is;var js=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var zs=function(e,t){var r=e.__data__;return js(t)?r["string"==typeof t?"string":"hash"]:r.map},Ps=zs;var Ls=function(e){var t=Ps(this,e).delete(e);return this.size-=t?1:0,t},Ns=zs;var Hs=function(e){return Ns(this,e).get(e)},Ws=zs;var Ys=function(e){return Ws(this,e).has(e)},Vs=zs;var Us=function(e,t){var r=Vs(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Ks=function(){this.size=0,this.__data__={hash:new As,map:new(Rs||Bs),string:new As}},Xs=Ls,qs=Hs,Gs=Ys,Zs=Us;function Qs(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Qs.prototype.clear=Ks,Qs.prototype.delete=Xs,Qs.prototype.get=qs,Qs.prototype.has=Gs,Qs.prototype.set=Zs;var Js=Qs,el=Js;function tl(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(tl.Cache||el),r}tl.Cache=el;var rl=tl;var nl=function(e){var t=rl(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},il=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ol=/\\(\\)?/g,al=nl((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(il,(function(e,r,n,i){t.push(n?i.replace(ol,"$1"):r||e)})),t}));var sl=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ll=Qo,cl=va,dl=na?na.prototype:void 0,ul=dl?dl.toString:void 0;var hl=function e(t){if("string"==typeof t)return t;if(ll(t))return sl(t,e)+"";if(cl(t))return ul?ul.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},gl=hl;var pl=function(e){return null==e?"":gl(e)},fl=Qo,ml=Ca,bl=al,vl=pl;var yl=function(e,t){return fl(e)?e:ml(e,t)?[e]:bl(vl(e))},xl=va;var wl=function(e){if("string"==typeof e||xl(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},$l=yl,Cl=wl;var Sl=function(e,t){for(var r=0,n=(t=$l(t,e)).length;null!=e&&r<n;)e=e[Cl(t[r++])];return r&&r==n?e:void 0},kl=Sl;var Dl=function(e,t,r){var n=null==e?void 0:kl(e,t);return void 0===n?r:n},El=Zo(Dl);const Tl=(e,t,r)=>El(r,t)||El(e,t),Fl=(e,t)=>{const r=t||e.defaultValue;return El(e.collections,r)},Ol={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Ml=e=>t=>{var r;const n=t.theme,i=Fl(Ol,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Tl(i,e,n.overrides.border)}px`:`${i[e]}px`},_l={"width-005":Ml("width-005"),"width-010":Ml("width-010"),"width-020":Ml("width-020"),"width-040":Ml("width-040"),solid:(Il="solid",e=>{var t;const r=e.theme,n=Fl(Ol,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Tl(n,Il,r.overrides.border):n[Il];return"function"==typeof i?i(e):i})};var Il;const Al={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Bl={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Rl={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},jl={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},zl={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Pl={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ll={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Nl={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Hl={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Wl={collections:{lifesg:Rl,bookingsg:Al,rbs:Ll,mylegacy:jl,ccube:Bl,oneservice:zl,pa:Pl,a11yplayground:Nl,supportgowhere:Hl},defaultValue:"lifesg"},Yl={collections:{lifesg:Rl,bookingsg:Al,rbs:Ll,mylegacy:jl,ccube:Bl,oneservice:zl,pa:Pl,a11yplayground:Nl,supportgowhere:Hl},defaultValue:"lifesg"},Vl=e=>t=>{var r;const n=t.theme,i="dark"===(null==n?void 0:n.colourMode),o=Fl(i?Yl:Wl,null==n?void 0:n.colourScheme),a=i?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?Tl(o,e,s):o[e]},Ul={"brand-10":Vl("brand-10"),"brand-20":Vl("brand-20"),"brand-30":Vl("brand-30"),"brand-40":Vl("brand-40"),"brand-50":Vl("brand-50"),"brand-60":Vl("brand-60"),"brand-70":Vl("brand-70"),"brand-80":Vl("brand-80"),"brand-90":Vl("brand-90"),"brand-95":Vl("brand-95"),"brand-100":Vl("brand-100"),"primary-10":Vl("primary-10"),"primary-20":Vl("primary-20"),"primary-30":Vl("primary-30"),"primary-40":Vl("primary-40"),"primary-50":Vl("primary-50"),"primary-60":Vl("primary-60"),"primary-70":Vl("primary-70"),"primary-80":Vl("primary-80"),"primary-90":Vl("primary-90"),"primary-95":Vl("primary-95"),"primary-100":Vl("primary-100"),"secondary-10":Vl("secondary-10"),"secondary-20":Vl("secondary-20"),"secondary-30":Vl("secondary-30"),"secondary-40":Vl("secondary-40"),"secondary-50":Vl("secondary-50"),"secondary-60":Vl("secondary-60"),"secondary-70":Vl("secondary-70"),"secondary-80":Vl("secondary-80"),"secondary-90":Vl("secondary-90"),"secondary-95":Vl("secondary-95"),"secondary-100":Vl("secondary-100"),"neutral-10":Vl("neutral-10"),"neutral-20":Vl("neutral-20"),"neutral-30":Vl("neutral-30"),"neutral-40":Vl("neutral-40"),"neutral-50":Vl("neutral-50"),"neutral-60":Vl("neutral-60"),"neutral-70":Vl("neutral-70"),"neutral-80":Vl("neutral-80"),"neutral-90":Vl("neutral-90"),"neutral-95":Vl("neutral-95"),"neutral-100":Vl("neutral-100"),"success-10":Vl("success-10"),"success-20":Vl("success-20"),"success-30":Vl("success-30"),"success-40":Vl("success-40"),"success-50":Vl("success-50"),"success-60":Vl("success-60"),"success-70":Vl("success-70"),"success-80":Vl("success-80"),"success-90":Vl("success-90"),"success-95":Vl("success-95"),"success-100":Vl("success-100"),"warning-10":Vl("warning-10"),"warning-20":Vl("warning-20"),"warning-30":Vl("warning-30"),"warning-40":Vl("warning-40"),"warning-50":Vl("warning-50"),"warning-60":Vl("warning-60"),"warning-70":Vl("warning-70"),"warning-80":Vl("warning-80"),"warning-90":Vl("warning-90"),"warning-95":Vl("warning-95"),"warning-100":Vl("warning-100"),"error-10":Vl("error-10"),"error-20":Vl("error-20"),"error-30":Vl("error-30"),"error-40":Vl("error-40"),"error-50":Vl("error-50"),"error-60":Vl("error-60"),"error-70":Vl("error-70"),"error-80":Vl("error-80"),"error-90":Vl("error-90"),"error-95":Vl("error-95"),"error-100":Vl("error-100"),"info-10":Vl("info-10"),"info-20":Vl("info-20"),"info-30":Vl("info-30"),"info-40":Vl("info-40"),"info-50":Vl("info-50"),"info-60":Vl("info-60"),"info-70":Vl("info-70"),"info-80":Vl("info-80"),"info-90":Vl("info-90"),"info-95":Vl("info-95"),"info-100":Vl("info-100"),white:Vl("white"),black:Vl("black"),"primary-inverse":Vl("primary-inverse")},Kl={text:Vl("neutral-20"),"text-subtle":Vl("neutral-30"),"text-subtler":Vl("neutral-50"),"text-subtlest":Vl("neutral-60"),"text-primary":Vl("primary-50"),"text-hover":Vl("primary-40"),"text-selected":Vl("primary-50"),"text-selected-hover":Vl("primary-40"),"text-disabled":Vl("neutral-50"),"text-disabled-subtle":Vl("neutral-60"),"text-disabled-subtlest":Vl("neutral-80"),"text-selected-disabled":Vl("neutral-20"),"text-success":Vl("success-40"),"text-warning":Vl("warning-40"),"text-error":Vl("error-40"),"text-info":Vl("info-40"),"text-inverse":Vl("white"),icon:Vl("neutral-50"),"icon-subtle":Vl("neutral-60"),"icon-strongest":Vl("neutral-20"),"icon-primary":Vl("primary-50"),"icon-primary-subtle":Vl("primary-60"),"icon-primary-subtlest":Vl("primary-70"),"icon-hover":Vl("primary-40"),"icon-selected":Vl("primary-50"),"icon-selected-hover":Vl("primary-40"),"icon-disabled":Vl("neutral-50"),"icon-disabled-subtle":Vl("neutral-60"),"icon-selected-disabled":Vl("neutral-60"),"icon-success":Vl("success-50"),"icon-warning":Vl("warning-60"),"icon-error":Vl("error-50"),"icon-error-strong":Vl("error-40"),"icon-info":Vl("info-50"),"icon-inverse":Vl("white"),"icon-primary-inverse":Vl("primary-inverse"),border:Vl("neutral-90"),"border-strong":Vl("neutral-70"),"border-stronger":Vl("neutral-50"),"border-primary":Vl("primary-50"),"border-primary-subtle":Vl("primary-60"),"border-hover":Vl("primary-90"),"border-hover-strong":Vl("primary-60"),"border-selected":Vl("primary-50"),"border-selected-subtle":Vl("primary-70"),"border-selected-subtlest":Vl("primary-90"),"border-selected-hover":Vl("primary-40"),"border-focus":Vl("primary-60"),"border-focus-strong":Vl("primary-50"),"border-disabled":Vl("neutral-90"),"border-selected-disabled":Vl("neutral-70"),"border-success":Vl("success-60"),"border-warning":Vl("warning-60"),"border-error":Vl("error-60"),"border-error-focus":Vl("error-60"),"border-error-focus-strong":Vl("error-40"),"border-error-strong":Vl("error-40"),"border-info":Vl("info-60"),bg:Vl("white"),"bg-strong":Vl("neutral-100"),"bg-stronger":Vl("neutral-95"),"bg-strongest":Vl("neutral-90"),"bg-hover":Vl("primary-95"),"bg-hover-strong":Vl("primary-90"),"bg-hover-subtle":Vl("primary-100"),"bg-hover-neutral":Vl("neutral-100"),"bg-hover-neutral-strong":Vl("neutral-90"),"bg-selected":Vl("primary-95"),"bg-selected-hover":Vl("primary-90"),"bg-selected-strong":Vl("primary-90"),"bg-selected-stronger":Vl("primary-70"),"bg-selected-strongest":Vl("primary-50"),"bg-selected-strongest-hover":Vl("primary-40"),"bg-disabled":Vl("neutral-95"),"bg-selected-disabled":Vl("neutral-95"),"bg-selected-stronger-disabled":Vl("neutral-70"),"bg-success":Vl("success-100"),"bg-success-hover":Vl("success-95"),"bg-success-strong":Vl("success-50"),"bg-success-strong-hover":Vl("success-40"),"bg-warning":Vl("warning-100"),"bg-warning-hover":Vl("warning-95"),"bg-warning-strong":Vl("warning-50"),"bg-warning-strong-hover":Vl("warning-40"),"bg-info":Vl("info-100"),"bg-info-hover":Vl("info-95"),"bg-info-strong":Vl("info-50"),"bg-info-strong-hover":Vl("info-40"),"bg-error":Vl("error-100"),"bg-error-hover":Vl("error-95"),"bg-error-strong":Vl("error-50"),"bg-error-strong-hover":Vl("error-40"),"bg-inverse":Vl("neutral-20"),"bg-inverse-subtle":Vl("neutral-30"),"bg-inverse-subtler":Vl("neutral-50"),"bg-inverse-subtlest":Vl("neutral-60"),"bg-inverse-hover":Vl("neutral-40"),"bg-primary":Vl("primary-50"),"bg-primary-subtle":Vl("primary-60"),"bg-primary-subtler":Vl("primary-95"),"bg-primary-subtlest":Vl("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Vl("primary-40"),"bg-primary-subtlest-hover":Vl("primary-90"),"bg-primary-subtlest-selected":Vl("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Vl("primary-50"),"hyperlink-hover":Vl("primary-40"),"hyperlink-visited":Vl("primary-40"),"hyperlink-inverse":Vl("primary-inverse"),"focus-ring":Vl("black"),"focus-ring-inverse":Vl("white")},Xl={text:Vl("neutral-100"),"text-subtle":Vl("neutral-80"),"text-subtler":Vl("neutral-60"),"text-subtlest":Vl("neutral-50"),"text-primary":Vl("primary-60"),"text-hover":Vl("primary-70"),"text-selected":Vl("primary-60"),"text-selected-hover":Vl("primary-70"),"text-disabled":Vl("neutral-60"),"text-disabled-subtle":Vl("neutral-50"),"text-disabled-subtlest":Vl("neutral-30"),"text-selected-disabled":Vl("neutral-90"),"text-success":Vl("success-70"),"text-warning":Vl("warning-70"),"text-error":Vl("error-70"),"text-info":Vl("info-70"),"text-inverse":Vl("black"),icon:Vl("neutral-60"),"icon-subtle":Vl("neutral-50"),"icon-strongest":Vl("neutral-90"),"icon-primary":Vl("primary-60"),"icon-primary-subtle":Vl("primary-50"),"icon-primary-subtlest":Vl("primary-40"),"icon-hover":Vl("primary-70"),"icon-selected":Vl("primary-60"),"icon-selected-hover":Vl("primary-70"),"icon-disabled":Vl("neutral-60"),"icon-disabled-subtle":Vl("neutral-50"),"icon-selected-disabled":Vl("neutral-50"),"icon-success":Vl("success-60"),"icon-warning":Vl("warning-50"),"icon-error":Vl("error-60"),"icon-error-strong":Vl("error-70"),"icon-info":Vl("info-60"),"icon-inverse":Vl("black"),"icon-primary-inverse":Vl("primary-inverse"),border:Vl("neutral-20"),"border-strong":Vl("neutral-40"),"border-stronger":Vl("neutral-60"),"border-primary":Vl("primary-60"),"border-primary-subtle":Vl("primary-50"),"border-hover":Vl("primary-20"),"border-hover-strong":Vl("primary-50"),"border-selected":Vl("primary-60"),"border-selected-subtle":Vl("primary-40"),"border-selected-subtlest":Vl("primary-20"),"border-selected-hover":Vl("primary-70"),"border-focus":Vl("primary-50"),"border-focus-strong":Vl("primary-60"),"border-disabled":Vl("neutral-20"),"border-selected-disabled":Vl("neutral-40"),"border-success":Vl("success-50"),"border-warning":Vl("warning-50"),"border-error":Vl("error-50"),"border-error-focus":Vl("error-50"),"border-error-focus-strong":Vl("error-70"),"border-error-strong":Vl("error-70"),"border-info":Vl("info-50"),bg:Vl("black"),"bg-strong":Vl("neutral-10"),"bg-stronger":Vl("neutral-20"),"bg-strongest":Vl("neutral-20"),"bg-hover":Vl("primary-20"),"bg-hover-strong":Vl("primary-20"),"bg-hover-subtle":Vl("primary-10"),"bg-hover-neutral":Vl("neutral-10"),"bg-hover-neutral-strong":Vl("neutral-20"),"bg-selected":Vl("primary-20"),"bg-selected-hover":Vl("primary-20"),"bg-selected-strong":Vl("primary-20"),"bg-selected-stronger":Vl("primary-40"),"bg-selected-strongest":Vl("primary-60"),"bg-selected-strongest-hover":Vl("primary-70"),"bg-disabled":Vl("neutral-20"),"bg-selected-disabled":Vl("neutral-20"),"bg-selected-stronger-disabled":Vl("neutral-40"),"bg-success":Vl("success-10"),"bg-success-hover":Vl("success-20"),"bg-success-strong":Vl("success-60"),"bg-success-strong-hover":Vl("success-70"),"bg-warning":Vl("warning-10"),"bg-warning-hover":Vl("warning-20"),"bg-warning-strong":Vl("warning-60"),"bg-warning-strong-hover":Vl("warning-70"),"bg-info":Vl("info-10"),"bg-info-hover":Vl("info-20"),"bg-info-strong":Vl("info-60"),"bg-info-strong-hover":Vl("info-70"),"bg-error":Vl("error-10"),"bg-error-hover":Vl("error-20"),"bg-error-strong":Vl("error-60"),"bg-error-strong-hover":Vl("error-70"),"bg-inverse":Vl("neutral-90"),"bg-inverse-subtle":Vl("neutral-80"),"bg-inverse-subtler":Vl("neutral-60"),"bg-inverse-subtlest":Vl("neutral-50"),"bg-inverse-hover":Vl("neutral-70"),"bg-primary":Vl("primary-60"),"bg-primary-subtle":Vl("primary-50"),"bg-primary-subtler":Vl("primary-20"),"bg-primary-subtlest":Vl("primary-10"),"bg-available":"#185339","bg-primary-hover":Vl("primary-70"),"bg-primary-subtlest-hover":Vl("primary-20"),"bg-primary-subtlest-selected":Vl("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Vl("primary-60"),"hyperlink-hover":Vl("primary-70"),"hyperlink-visited":Vl("primary-70"),"hyperlink-inverse":Vl("primary-inverse"),"focus-ring":Vl("primary-60"),"focus-ring-inverse":Vl("black")},ql={text:Vl("neutral-30"),"text-subtle":Vl("neutral-40"),"text-subtler":Vl("neutral-50"),"text-subtlest":Vl("neutral-70"),"text-primary":Vl("neutral-10"),"text-hover":Vl("neutral-70"),"text-selected":Vl("neutral-20"),"text-selected-hover":Vl("neutral-10"),"text-disabled":Vl("neutral-50"),"text-disabled-subtle":Vl("neutral-60"),"text-disabled-subtlest":Vl("neutral-80"),"text-selected-disabled":Vl("neutral-40"),"text-success":Vl("success-40"),"text-warning":Vl("warning-40"),"text-error":Vl("brand-30"),"text-info":Vl("neutral-40"),"text-inverse":Vl("neutral-100"),icon:Vl("neutral-40"),"icon-subtle":Vl("neutral-50"),"icon-strongest":Vl("neutral-10"),"icon-primary":Vl("neutral-10"),"icon-primary-subtle":Vl("neutral-30"),"icon-primary-subtlest":Vl("neutral-60"),"icon-hover":Vl("neutral-70"),"icon-selected":Vl("brand-20"),"icon-selected-hover":Vl("brand-10"),"icon-disabled":Vl("neutral-50"),"icon-disabled-subtle":Vl("neutral-60"),"icon-selected-disabled":Vl("neutral-40"),"icon-success":Vl("success-40"),"icon-warning":Vl("warning-60"),"icon-error":Vl("brand-30"),"icon-error-strong":Vl("brand-10"),"icon-info":Vl("neutral-40"),"icon-inverse":Vl("neutral-100"),"icon-primary-inverse":"#F9B371",border:Vl("neutral-90"),"border-strong":Vl("neutral-30"),"border-stronger":Vl("neutral-20"),"border-primary":Vl("neutral-40"),"border-primary-subtle":Vl("neutral-60"),"border-hover":Vl("neutral-80"),"border-hover-strong":Vl("neutral-10"),"border-selected":Vl("brand-20"),"border-selected-subtle":Vl("neutral-40"),"border-selected-subtlest":Vl("neutral-70"),"border-selected-hover":Vl("neutral-10"),"border-focus":Vl("neutral-20"),"border-focus-strong":Vl("neutral-10"),"border-disabled":Vl("neutral-90"),"border-selected-disabled":Vl("neutral-80"),"border-success":Vl("success-40"),"border-warning":Vl("warning-60"),"border-error":Vl("brand-30"),"border-error-focus":Vl("brand-20"),"border-error-focus-strong":Vl("brand-10"),"border-error-strong":Vl("brand-20"),"border-info":Vl("neutral-40"),bg:Vl("neutral-100"),"bg-strong":Vl("neutral-95"),"bg-stronger":Vl("neutral-90"),"bg-strongest":Vl("neutral-80"),"bg-hover":Vl("brand-90"),"bg-hover-strong":Vl("brand-80"),"bg-hover-subtle":Vl("neutral-90"),"bg-hover-neutral":Vl("neutral-90"),"bg-hover-neutral-strong":Vl("neutral-90"),"bg-selected":Vl("brand-100"),"bg-selected-hover":Vl("brand-30"),"bg-selected-strong":Vl("brand-50"),"bg-selected-stronger":Vl("brand-40"),"bg-selected-strongest":Vl("brand-20"),"bg-selected-strongest-hover":Vl("brand-10"),"bg-disabled":Vl("neutral-90"),"bg-selected-disabled":Vl("neutral-90"),"bg-selected-stronger-disabled":Vl("neutral-80"),"bg-success":Vl("success-100"),"bg-success-hover":Vl("success-95"),"bg-success-strong":Vl("success-50"),"bg-success-strong-hover":Vl("success-40"),"bg-warning":Vl("warning-100"),"bg-warning-hover":Vl("warning-95"),"bg-warning-strong":Vl("warning-50"),"bg-warning-strong-hover":Vl("warning-40"),"bg-info":Vl("neutral-95"),"bg-info-hover":Vl("info-95"),"bg-info-strong":Vl("info-50"),"bg-info-strong-hover":Vl("info-40"),"bg-error":Vl("brand-100"),"bg-error-hover":Vl("error-95"),"bg-error-strong":Vl("error-50"),"bg-error-strong-hover":Vl("error-40"),"bg-inverse":Vl("neutral-40"),"bg-inverse-subtle":Vl("neutral-60"),"bg-inverse-subtler":Vl("neutral-70"),"bg-inverse-subtlest":Vl("neutral-80"),"bg-inverse-hover":Vl("neutral-30"),"bg-primary":Vl("brand-20"),"bg-primary-subtle":Vl("brand-60"),"bg-primary-subtler":Vl("brand-80"),"bg-primary-subtlest":Vl("brand-100"),"bg-available":Vl("success-60"),"bg-primary-hover":Vl("brand-10"),"bg-primary-subtlest-hover":Vl("brand-80"),"bg-primary-subtlest-selected":Vl("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Vl("neutral-10"),"hyperlink-hover":Vl("neutral-40"),"hyperlink-visited":Vl("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Vl("black"),"focus-ring-inverse":Vl("white")},Gl={text:Vl("neutral-20"),"text-subtle":Vl("neutral-30"),"text-subtler":Vl("neutral-50"),"text-subtlest":Vl("neutral-60"),"text-primary":Vl("primary-50"),"text-hover":Vl("primary-40"),"text-selected":Vl("primary-50"),"text-selected-hover":Vl("primary-40"),"text-disabled":Vl("neutral-50"),"text-disabled-subtle":Vl("neutral-60"),"text-disabled-subtlest":Vl("neutral-80"),"text-selected-disabled":Vl("neutral-20"),"text-success":Vl("success-40"),"text-warning":Vl("warning-40"),"text-error":Vl("error-40"),"text-info":Vl("info-40"),"text-inverse":Vl("white"),icon:Vl("neutral-50"),"icon-subtle":Vl("neutral-60"),"icon-strongest":Vl("neutral-20"),"icon-primary":Vl("primary-50"),"icon-primary-subtle":Vl("primary-60"),"icon-primary-subtlest":Vl("primary-70"),"icon-hover":Vl("primary-40"),"icon-selected":Vl("primary-50"),"icon-selected-hover":Vl("primary-40"),"icon-disabled":Vl("neutral-50"),"icon-disabled-subtle":Vl("neutral-60"),"icon-selected-disabled":Vl("neutral-60"),"icon-success":Vl("success-50"),"icon-warning":Vl("warning-60"),"icon-error":Vl("error-50"),"icon-error-strong":Vl("error-40"),"icon-info":Vl("info-50"),"icon-inverse":Vl("white"),"icon-primary-inverse":Vl("primary-inverse"),border:Vl("neutral-90"),"border-strong":Vl("neutral-70"),"border-stronger":Vl("neutral-50"),"border-primary":Vl("primary-50"),"border-primary-subtle":Vl("primary-60"),"border-hover":Vl("primary-90"),"border-hover-strong":Vl("primary-60"),"border-selected":Vl("primary-50"),"border-selected-subtle":Vl("primary-70"),"border-selected-subtlest":Vl("primary-90"),"border-selected-hover":Vl("primary-40"),"border-focus":Vl("primary-60"),"border-focus-strong":Vl("primary-50"),"border-disabled":Vl("neutral-90"),"border-selected-disabled":Vl("neutral-70"),"border-success":Vl("success-60"),"border-warning":Vl("warning-60"),"border-error":Vl("error-60"),"border-error-focus":Vl("error-60"),"border-error-focus-strong":Vl("error-40"),"border-error-strong":Vl("error-40"),"border-info":Vl("info-60"),bg:Vl("white"),"bg-strong":Vl("neutral-100"),"bg-stronger":Vl("neutral-95"),"bg-strongest":Vl("neutral-90"),"bg-hover":Vl("primary-95"),"bg-hover-strong":Vl("primary-90"),"bg-hover-subtle":Vl("primary-100"),"bg-hover-neutral":Vl("neutral-100"),"bg-hover-neutral-strong":Vl("neutral-90"),"bg-selected":Vl("primary-95"),"bg-selected-hover":Vl("primary-90"),"bg-selected-strong":Vl("primary-90"),"bg-selected-stronger":Vl("primary-70"),"bg-selected-strongest":Vl("primary-50"),"bg-selected-strongest-hover":Vl("primary-40"),"bg-disabled":Vl("neutral-95"),"bg-selected-disabled":Vl("neutral-95"),"bg-selected-stronger-disabled":Vl("neutral-70"),"bg-success":Vl("success-100"),"bg-success-hover":Vl("success-95"),"bg-success-strong":Vl("success-50"),"bg-success-strong-hover":Vl("success-40"),"bg-warning":Vl("warning-100"),"bg-warning-hover":Vl("warning-95"),"bg-warning-strong":Vl("warning-50"),"bg-warning-strong-hover":Vl("warning-40"),"bg-info":Vl("info-100"),"bg-info-hover":Vl("info-95"),"bg-info-strong":Vl("info-50"),"bg-info-strong-hover":Vl("info-40"),"bg-error":Vl("error-100"),"bg-error-hover":Vl("error-95"),"bg-error-strong":Vl("error-50"),"bg-error-strong-hover":Vl("error-40"),"bg-inverse":Vl("neutral-20"),"bg-inverse-subtle":Vl("neutral-30"),"bg-inverse-subtler":Vl("neutral-50"),"bg-inverse-subtlest":Vl("neutral-60"),"bg-inverse-hover":Vl("neutral-40"),"bg-primary":Vl("primary-50"),"bg-primary-subtle":Vl("primary-60"),"bg-primary-subtler":Vl("primary-95"),"bg-primary-subtlest":Vl("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Vl("primary-40"),"bg-primary-subtlest-hover":Vl("primary-90"),"bg-primary-subtlest-selected":Vl("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Vl("primary-50"),"hyperlink-hover":Vl("primary-40"),"hyperlink-visited":Vl("primary-40"),"hyperlink-inverse":Vl("primary-inverse"),"focus-ring":Vl("black"),"focus-ring-inverse":Vl("white")},Zl={text:Vl("neutral-100"),"text-subtle":Vl("neutral-80"),"text-subtler":Vl("neutral-60"),"text-subtlest":Vl("neutral-50"),"text-primary":Vl("primary-60"),"text-hover":Vl("primary-70"),"text-selected":Vl("primary-60"),"text-selected-hover":Vl("primary-70"),"text-disabled":Vl("neutral-60"),"text-disabled-subtle":Vl("neutral-50"),"text-disabled-subtlest":Vl("neutral-30"),"text-selected-disabled":Vl("neutral-90"),"text-success":Vl("success-70"),"text-warning":Vl("warning-70"),"text-error":Vl("error-70"),"text-info":Vl("info-70"),"text-inverse":Vl("black"),icon:Vl("neutral-60"),"icon-subtle":Vl("neutral-50"),"icon-strongest":Vl("neutral-90"),"icon-primary":Vl("primary-60"),"icon-primary-subtle":Vl("primary-50"),"icon-primary-subtlest":Vl("primary-40"),"icon-hover":Vl("primary-70"),"icon-selected":Vl("primary-60"),"icon-selected-hover":Vl("primary-70"),"icon-disabled":Vl("neutral-60"),"icon-disabled-subtle":Vl("neutral-50"),"icon-selected-disabled":Vl("neutral-50"),"icon-success":Vl("success-60"),"icon-warning":Vl("warning-50"),"icon-error":Vl("error-60"),"icon-error-strong":Vl("error-70"),"icon-info":Vl("info-60"),"icon-inverse":Vl("black"),"icon-primary-inverse":Vl("primary-inverse"),border:Vl("neutral-20"),"border-strong":Vl("neutral-40"),"border-stronger":Vl("neutral-60"),"border-primary":Vl("primary-60"),"border-primary-subtle":Vl("primary-50"),"border-hover":Vl("primary-20"),"border-hover-strong":Vl("primary-50"),"border-selected":Vl("primary-60"),"border-selected-subtle":Vl("primary-40"),"border-selected-subtlest":Vl("primary-20"),"border-selected-hover":Vl("primary-70"),"border-focus":Vl("primary-50"),"border-focus-strong":Vl("primary-60"),"border-disabled":Vl("neutral-20"),"border-selected-disabled":Vl("neutral-40"),"border-success":Vl("success-50"),"border-warning":Vl("warning-50"),"border-error":Vl("error-50"),"border-error-focus":Vl("error-50"),"border-error-focus-strong":Vl("error-70"),"border-error-strong":Vl("error-70"),"border-info":Vl("info-50"),bg:Vl("black"),"bg-strong":Vl("neutral-10"),"bg-stronger":Vl("neutral-20"),"bg-strongest":Vl("neutral-20"),"bg-hover":Vl("primary-20"),"bg-hover-strong":Vl("primary-20"),"bg-hover-subtle":Vl("primary-10"),"bg-hover-neutral":Vl("neutral-10"),"bg-hover-neutral-strong":Vl("neutral-20"),"bg-selected":Vl("primary-20"),"bg-selected-hover":Vl("primary-20"),"bg-selected-strong":Vl("primary-20"),"bg-selected-stronger":Vl("primary-40"),"bg-selected-strongest":Vl("primary-60"),"bg-selected-strongest-hover":Vl("primary-70"),"bg-disabled":Vl("neutral-20"),"bg-selected-disabled":Vl("neutral-20"),"bg-selected-stronger-disabled":Vl("neutral-40"),"bg-success":Vl("success-10"),"bg-success-hover":Vl("success-20"),"bg-success-strong":Vl("success-60"),"bg-success-strong-hover":Vl("success-70"),"bg-warning":Vl("warning-10"),"bg-warning-hover":Vl("warning-20"),"bg-warning-strong":Vl("warning-60"),"bg-warning-strong-hover":Vl("warning-70"),"bg-info":Vl("info-10"),"bg-info-hover":Vl("info-20"),"bg-info-strong":Vl("info-60"),"bg-info-strong-hover":Vl("info-70"),"bg-error":Vl("error-10"),"bg-error-hover":Vl("error-20"),"bg-error-strong":Vl("error-60"),"bg-error-strong-hover":Vl("error-70"),"bg-inverse":Vl("neutral-90"),"bg-inverse-subtle":Vl("neutral-80"),"bg-inverse-subtler":Vl("neutral-60"),"bg-inverse-subtlest":Vl("neutral-50"),"bg-inverse-hover":Vl("neutral-70"),"bg-primary":Vl("primary-60"),"bg-primary-subtle":Vl("primary-50"),"bg-primary-subtler":Vl("primary-20"),"bg-primary-subtlest":Vl("primary-10"),"bg-available":"#185339","bg-primary-hover":Vl("primary-70"),"bg-primary-subtlest-hover":Vl("primary-20"),"bg-primary-subtlest-selected":Vl("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Vl("primary-60"),"hyperlink-hover":Vl("primary-70"),"hyperlink-visited":Vl("primary-70"),"hyperlink-inverse":Vl("primary-inverse"),"focus-ring":Vl("primary-60"),"focus-ring-inverse":Vl("black")},Ql={collections:{lifesg:Kl,bookingsg:Kl,rbs:Kl,mylegacy:Kl,ccube:Kl,oneservice:Kl,pa:ql,a11yplayground:Gl,supportgowhere:Kl},defaultValue:"lifesg"},Jl={collections:{lifesg:Xl,bookingsg:Xl,rbs:Xl,mylegacy:Xl,ccube:Xl,oneservice:Xl,pa:Xl,a11yplayground:Zl,supportgowhere:Xl},defaultValue:"lifesg"},ec=e=>t=>{var r;const n=t.theme,i="dark"===(null==n?void 0:n.colourMode),o=Fl(i?Jl:Ql,null==n?void 0:n.colourScheme),a=i?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?Tl(o,e,s):o[e];return"function"==typeof l?l(t):l},tc={text:ec("text"),"text-subtle":ec("text-subtle"),"text-subtler":ec("text-subtler"),"text-subtlest":ec("text-subtlest"),"text-primary":ec("text-primary"),"text-hover":ec("text-hover"),"text-selected":ec("text-selected"),"text-selected-hover":ec("text-selected-hover"),"text-disabled":ec("text-disabled"),"text-disabled-subtle":ec("text-disabled-subtle"),"text-disabled-subtlest":ec("text-disabled-subtlest"),"text-selected-disabled":ec("text-selected-disabled"),"text-success":ec("text-success"),"text-warning":ec("text-warning"),"text-error":ec("text-error"),"text-info":ec("text-info"),"text-inverse":ec("text-inverse"),icon:ec("icon"),"icon-subtle":ec("icon-subtle"),"icon-strongest":ec("icon-strongest"),"icon-primary":ec("icon-primary"),"icon-primary-subtle":ec("icon-primary-subtle"),"icon-primary-subtlest":ec("icon-primary-subtlest"),"icon-hover":ec("icon-hover"),"icon-selected":ec("icon-selected"),"icon-selected-hover":ec("icon-selected-hover"),"icon-disabled":ec("icon-disabled"),"icon-disabled-subtle":ec("icon-disabled-subtle"),"icon-selected-disabled":ec("icon-selected-disabled"),"icon-success":ec("icon-success"),"icon-warning":ec("icon-warning"),"icon-error":ec("icon-error"),"icon-error-strong":ec("icon-error-strong"),"icon-info":ec("icon-info"),"icon-inverse":ec("icon-inverse"),"icon-primary-inverse":ec("icon-primary-inverse"),border:ec("border"),"border-strong":ec("border-strong"),"border-stronger":ec("border-stronger"),"border-primary":ec("border-primary"),"border-primary-subtle":ec("border-primary-subtle"),"border-hover":ec("border-hover"),"border-hover-strong":ec("border-hover-strong"),"border-selected":ec("border-selected"),"border-selected-subtle":ec("border-selected-subtle"),"border-selected-subtlest":ec("border-selected-subtlest"),"border-selected-hover":ec("border-selected-hover"),"border-focus":ec("border-focus"),"border-focus-strong":ec("border-focus-strong"),"border-disabled":ec("border-disabled"),"border-selected-disabled":ec("border-selected-disabled"),"border-success":ec("border-success"),"border-warning":ec("border-warning"),"border-error":ec("border-error"),"border-error-focus":ec("border-error-focus"),"border-error-focus-strong":ec("border-error-focus-strong"),"border-error-strong":ec("border-error-strong"),"border-info":ec("border-info"),bg:ec("bg"),"bg-strong":ec("bg-strong"),"bg-stronger":ec("bg-stronger"),"bg-strongest":ec("bg-strongest"),"bg-hover":ec("bg-hover"),"bg-hover-strong":ec("bg-hover-strong"),"bg-hover-subtle":ec("bg-hover-subtle"),"bg-hover-neutral":ec("bg-hover-neutral"),"bg-hover-neutral-strong":ec("bg-hover-neutral-strong"),"bg-selected":ec("bg-selected"),"bg-selected-hover":ec("bg-selected-hover"),"bg-selected-strong":ec("bg-selected-strong"),"bg-selected-stronger":ec("bg-selected-stronger"),"bg-selected-strongest":ec("bg-selected-strongest"),"bg-selected-strongest-hover":ec("bg-selected-strongest-hover"),"bg-disabled":ec("bg-disabled"),"bg-selected-disabled":ec("bg-selected-disabled"),"bg-selected-stronger-disabled":ec("bg-selected-stronger-disabled"),"bg-success":ec("bg-success"),"bg-success-hover":ec("bg-success-hover"),"bg-success-strong":ec("bg-success-strong"),"bg-success-strong-hover":ec("bg-success-strong-hover"),"bg-warning":ec("bg-warning"),"bg-warning-hover":ec("bg-warning-hover"),"bg-warning-strong":ec("bg-warning-strong"),"bg-warning-strong-hover":ec("bg-warning-strong-hover"),"bg-info":ec("bg-info"),"bg-info-hover":ec("bg-info-hover"),"bg-info-strong":ec("bg-info-strong"),"bg-info-strong-hover":ec("bg-info-strong-hover"),"bg-error":ec("bg-error"),"bg-error-hover":ec("bg-error-hover"),"bg-error-strong":ec("bg-error-strong"),"bg-error-strong-hover":ec("bg-error-strong-hover"),"bg-inverse":ec("bg-inverse"),"bg-inverse-subtle":ec("bg-inverse-subtle"),"bg-inverse-subtler":ec("bg-inverse-subtler"),"bg-inverse-subtlest":ec("bg-inverse-subtlest"),"bg-inverse-hover":ec("bg-inverse-hover"),"bg-primary":ec("bg-primary"),"bg-primary-subtle":ec("bg-primary-subtle"),"bg-primary-subtler":ec("bg-primary-subtler"),"bg-primary-subtlest":ec("bg-primary-subtlest"),"bg-available":ec("bg-available"),"bg-primary-hover":ec("bg-primary-hover"),"bg-primary-subtlest-hover":ec("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ec("bg-primary-subtlest-selected"),"overlay-strong":ec("overlay-strong"),"overlay-subtle":ec("overlay-subtle"),hyperlink:ec("hyperlink"),"hyperlink-hover":ec("hyperlink-hover"),"hyperlink-visited":ec("hyperlink-visited"),"hyperlink-inverse":ec("hyperlink-inverse"),"focus-ring":ec("focus-ring"),"focus-ring-inverse":ec("focus-ring-inverse")},rc={collections:{default:{solid:e=>t=>{var r,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:_l["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:tc.border(t),u=_l.solid;return _`
            border: ${l} ${u} ${d};
            border-radius: ${c};
        `},"dashed-default":e=>t=>{var r,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:_l["width-010"](t),c=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,d=null!==(i="function"==typeof s?s(t):s)&&void 0!==i?i:tc.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return _`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${c};
        `}}},defaultValue:"default"},nc=e=>1===e.length&&"theme"in e[0],ic=e=>(...t)=>r=>{const n=nc(t)?[]:t,i=nc(t)?t[0]:r,o=i.theme;return(0,Fl(rc,null==o?void 0:o.borderScheme)[e])(...n)(i)},oc={solid:ic("solid"),"dashed-default":ic("dashed-default")},ac={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},sc=e=>t=>{var r;const n=t.theme,i=Fl(ac,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Tl(i,e,n.overrides.breakpoint):i[e],o},lc={"xxs-min":sc("xxs-min"),"xxs-max":sc("xxs-max"),"xs-min":sc("xs-min"),"xs-max":sc("xs-max"),"sm-min":sc("sm-min"),"sm-max":sc("sm-max"),"md-min":sc("md-min"),"md-max":sc("md-max"),"lg-min":sc("lg-min"),"lg-max":sc("lg-max"),"xl-min":sc("xl-min"),"xl-max":sc("xl-max"),"xxl-min":sc("xxl-min"),"xxs-column":sc("xxs-column"),"xs-column":sc("xs-column"),"sm-column":sc("sm-column"),"md-column":sc("md-column"),"lg-column":sc("lg-column"),"xl-column":sc("xl-column"),"xxl-column":sc("xxl-column"),"xxs-gutter":sc("xxs-gutter"),"xs-gutter":sc("xs-gutter"),"sm-gutter":sc("sm-gutter"),"md-gutter":sc("md-gutter"),"lg-gutter":sc("lg-gutter"),"xl-gutter":sc("xl-gutter"),"xxl-gutter":sc("xxl-gutter"),"xxs-margin":sc("xxs-margin"),"xs-margin":sc("xs-margin"),"sm-margin":sc("sm-margin"),"md-margin":sc("md-margin"),"lg-margin":sc("lg-margin"),"xl-margin":sc("xl-margin"),"xxl-margin":sc("xxl-margin")},cc=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=lc["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),dc={MaxWidth:cc("max-width"),MinWidth:cc("min-width")},uc={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},hc=e=>t=>{var r;const n=t.theme,i=Fl(uc,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Tl(i,e,n.overrides.fontSpec):i[e]},gc={"heading-size-xxl":hc("heading-size-xxl"),"heading-size-xl":hc("heading-size-xl"),"heading-size-lg":hc("heading-size-lg"),"heading-size-md":hc("heading-size-md"),"heading-size-sm":hc("heading-size-sm"),"heading-size-xs":hc("heading-size-xs"),"heading-lh-xxl":hc("heading-lh-xxl"),"heading-lh-xl":hc("heading-lh-xl"),"heading-lh-lg":hc("heading-lh-lg"),"heading-lh-md":hc("heading-lh-md"),"heading-lh-sm":hc("heading-lh-sm"),"heading-lh-xs":hc("heading-lh-xs"),"heading-ls-xxl":hc("heading-ls-xxl"),"heading-ls-xl":hc("heading-ls-xl"),"heading-ls-lg":hc("heading-ls-lg"),"heading-ls-md":hc("heading-ls-md"),"heading-ls-sm":hc("heading-ls-sm"),"heading-ls-xs":hc("heading-ls-xs"),"weight-light":hc("weight-light"),"weight-regular":hc("weight-regular"),"weight-semibold":hc("weight-semibold"),"weight-bold":hc("weight-bold"),"font-family":hc("font-family"),"body-size-baseline":hc("body-size-baseline"),"body-size-md":hc("body-size-md"),"body-size-sm":hc("body-size-sm"),"body-size-xs":hc("body-size-xs"),"body-lh-baseline":hc("body-lh-baseline"),"body-lh-md":hc("body-lh-md"),"body-lh-sm":hc("body-lh-sm"),"body-lh-xs":hc("body-lh-xs"),"body-ls-baseline":hc("body-ls-baseline"),"body-ls-md":hc("body-ls-md"),"body-ls-sm":hc("body-ls-sm"),"body-ls-xs":hc("body-ls-xs"),"form-label-size":hc("form-label-size"),"form-description-size":hc("form-description-size"),"form-label-lh":hc("form-label-lh"),"form-description-lh":hc("form-description-lh"),"form-label-ls":hc("form-label-ls"),"form-description-ls":hc("form-description-ls")},pc=(e,t,r,n,i)=>{const{disableLigatures:o}=i||{};return _`
        font-family: ${hc("font-family")};
        font-size: ${hc(e)};
        font-weight: ${hc(t)};
        line-height: ${hc(r)};
        letter-spacing: ${hc(n)};

        font-variant: ${o?"no-common-ligatures":"normal"};
    `},fc=(e={})=>({"heading-xxl-light":pc("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":pc("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":pc("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":pc("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":pc("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":pc("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":pc("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":pc("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":pc("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":pc("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":pc("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":pc("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":pc("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":pc("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":pc("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":pc("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":pc("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":pc("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":pc("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":pc("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":pc("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":pc("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":pc("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":pc("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":pc("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":pc("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":pc("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":pc("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":pc("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":pc("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":pc("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":pc("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":pc("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":pc("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":pc("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":pc("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":pc("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":pc("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":pc("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":pc("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":pc("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":pc("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),mc=fc({disableLigatures:!0}),bc={collections:{default:fc(),bookingsg:mc,pa:fc({disableLigatures:!0}),a11yplayground:fc({disableLigatures:!0}),supportgowhere:fc({disableLigatures:!0})},defaultValue:"default"},vc=e=>t=>{var r;const n=t.theme,i=Fl(bc,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Tl(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},yc={"heading-xxl-light":vc("heading-xxl-light"),"heading-xxl-regular":vc("heading-xxl-regular"),"heading-xxl-semibold":vc("heading-xxl-semibold"),"heading-xxl-bold":vc("heading-xxl-bold"),"heading-xl-light":vc("heading-xl-light"),"heading-xl-regular":vc("heading-xl-regular"),"heading-xl-semibold":vc("heading-xl-semibold"),"heading-xl-bold":vc("heading-xl-bold"),"heading-lg-light":vc("heading-lg-light"),"heading-lg-regular":vc("heading-lg-regular"),"heading-lg-semibold":vc("heading-lg-semibold"),"heading-lg-bold":vc("heading-lg-bold"),"heading-md-light":vc("heading-md-light"),"heading-md-regular":vc("heading-md-regular"),"heading-md-semibold":vc("heading-md-semibold"),"heading-md-bold":vc("heading-md-bold"),"heading-sm-light":vc("heading-sm-light"),"heading-sm-regular":vc("heading-sm-regular"),"heading-sm-semibold":vc("heading-sm-semibold"),"heading-sm-bold":vc("heading-sm-bold"),"heading-xs-light":vc("heading-xs-light"),"heading-xs-regular":vc("heading-xs-regular"),"heading-xs-semibold":vc("heading-xs-semibold"),"heading-xs-bold":vc("heading-xs-bold"),"body-baseline-light":vc("body-baseline-light"),"body-baseline-regular":vc("body-baseline-regular"),"body-baseline-semibold":vc("body-baseline-semibold"),"body-baseline-bold":vc("body-baseline-bold"),"body-md-light":vc("body-md-light"),"body-md-regular":vc("body-md-regular"),"body-md-semibold":vc("body-md-semibold"),"body-md-bold":vc("body-md-bold"),"body-sm-light":vc("body-sm-light"),"body-sm-regular":vc("body-sm-regular"),"body-sm-semibold":vc("body-sm-semibold"),"body-sm-bold":vc("body-sm-bold"),"body-xs-light":vc("body-xs-light"),"body-xs-regular":vc("body-xs-regular"),"body-xs-semibold":vc("body-xs-semibold"),"body-xs-bold":vc("body-xs-bold"),"form-label":vc("form-label"),"form-description":vc("form-description")},xc={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},wc=e=>t=>{var r;const n=t.theme,i=Fl(xc,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Tl(i,e,n.overrides.motion):i[e]},$c={"duration-150":wc("duration-150"),"duration-250":wc("duration-250"),"duration-350":wc("duration-350"),"duration-500":wc("duration-500"),"duration-800":wc("duration-800"),"duration-1000":wc("duration-1000"),"ease-default":wc("ease-default"),"ease-standard":wc("ease-standard"),"ease-entrance":wc("ease-entrance"),"ease-exit":wc("ease-exit")},Cc={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Sc=e=>t=>{var r;const n=t.theme,i=Fl(Cc,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Tl(i,e,n.overrides.radius)}px`:`${i[e]}px`},kc={none:Sc("none"),xs:Sc("xs"),sm:Sc("sm"),md:Sc("md"),lg:Sc("lg"),full:Sc("full")},Dc={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ec=e=>t=>{var r;const n=t.theme,i=Fl(Dc,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Tl(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Tc={"spacing-0":Ec("spacing-0"),"spacing-4":Ec("spacing-4"),"spacing-8":Ec("spacing-8"),"spacing-12":Ec("spacing-12"),"spacing-16":Ec("spacing-16"),"spacing-20":Ec("spacing-20"),"spacing-24":Ec("spacing-24"),"spacing-32":Ec("spacing-32"),"spacing-40":Ec("spacing-40"),"spacing-48":Ec("spacing-48"),"spacing-64":Ec("spacing-64"),"spacing-72":Ec("spacing-72"),"layout-xs":Ec("layout-xs"),"layout-sm":Ec("layout-sm"),"layout-md":Ec("layout-md"),"layout-lg":Ec("layout-lg"),"layout-xl":Ec("layout-xl"),"layout-xxl":Ec("layout-xxl"),"layout-xxxl":Ec("layout-xxxl")},Fc=()=>{const e=f(I);return e?{colourMode:e.colourMode||"light",theme:e}:(console.warn("useDSTheme must be used within a DSThemeProvider or ThemeProvider"),{colourMode:"light",theme:null})},Oc=()=>"undefined"!=typeof window&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",Mc=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),_c=({theme:t,children:r})=>{const[n,i]=a(null==t?void 0:t.colourMode);u((()=>{if(!t)return void i("light");if(t.colourMode)return void i(t.colourMode);const e=Oc();if(i(e),"undefined"!=typeof window&&window.matchMedia){const e=window.matchMedia("(prefers-color-scheme: dark)"),r=e=>{t.colourMode||i(e.matches?"dark":"light")};return e.addEventListener?(e.addEventListener("change",r),()=>e.removeEventListener("change",r)):(e.addListener(r),()=>e.removeListener(r))}}),[null==t?void 0:t.colourMode]);const o=Object.assign(Object.assign({},t),{colourMode:n||"light"});return e(A,{theme:o,children:r})},Ic=Object.assign(Object.assign({},tc),{Primitive:Ul}),Ac=Object.assign(Object.assign({},yc),{Spec:gc}),Bc=$c,Rc=Object.assign(Object.assign({},_l),{Util:oc}),jc=Tc,zc=kc,Pc=lc,Lc=dc,Nc={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Hc={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Wc={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Yc={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Vc={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Uc={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Kc={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Xc={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},qc={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Gc=Object.assign(Object.assign({},Nc),{light:Mc(Nc,"light"),dark:Mc(Nc,"dark")}),Zc=Object.assign(Object.assign({},Hc),{light:Mc(Hc,"light"),dark:Mc(Hc,"dark")}),Qc=Object.assign(Object.assign({},Wc),{light:Mc(Wc,"light"),dark:Mc(Wc,"dark")}),Jc=Object.assign(Object.assign({},Yc),{light:Mc(Yc,"light"),dark:Mc(Yc,"dark")}),ed=Object.assign(Object.assign({},Vc),{light:Mc(Vc,"light"),dark:Mc(Vc,"dark")}),td=Object.assign(Object.assign({},Uc),{light:Mc(Uc,"light"),dark:Mc(Uc,"dark")}),rd=Object.assign(Object.assign({},Kc),{light:Mc(Kc,"light"),dark:Mc(Kc,"dark")}),nd=Object.assign(Object.assign({},Xc),{light:Mc(Xc,"light"),dark:Mc(Xc,"dark")}),id=Object.assign(Object.assign({},qc),{light:Mc(qc,"light"),dark:Mc(qc,"dark")}),od=M.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${jc["spacing-24"]};
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

        ${({$highlight:e})=>e&&_`
                background-color: ${Ic["bg-hover-neutral"]};
            `}
    }
`,ad=i.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=Vo(t,["children","focusHighlight","focusOutline","type"]);return e(od,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),sd=e=>_`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,ld=(e,t,r=!1)=>_`
        ${Ac[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,cd=e=>{if(e)return _`
            ${sd(e)}
        `},dd=(e,t)=>_`
    ${ld(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?_`
            display: block;
            ${cd(r)}
        `:e?_`
            display: inline;
        `:_`
            display: block;
            ${cd(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Ic.text};
`;var ud;!function(r){const n=(e,t,r)=>{const n=M(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>dd(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,t)=>{const r=M.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>dd(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const o=(r,n)=>{const i=M.a`
            ${e=>_`
                ${ld(r,e.weight||"regular")}
                color: ${Ic.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ic["text-hover"]};
                }
            `}
        `,o=r=>{var{external:n=!1,children:o}=r,a=Vo(r,["external","children"]);return t(i,Object.assign({},a,{children:[o,n&&e(hd,{})]}))};return o.displayName=`Typography.${n}`,o};r.LinkBL=o("body-baseline","LinkBL"),r.LinkMD=o("body-md","LinkMD"),r.LinkSM=o("body-sm","LinkSM"),r.LinkXS=o("body-xs","LinkXS")}(ud||(ud={}));const hd=M(z)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,gd=M.div`
    background-color: ${Ic.bg} !important;
    border-top: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${Lc.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,pd=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,fd=e=>_`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${Bc["duration-250"]} ${Bc["ease-standard"]};
`,md=M(ud.HeadingSM)`
    ${e=>fd(e.$isCollapsed)}
`,bd=M(ud.HeadingXS)`
    ${e=>fd(e.$isCollapsed)}
`,vd=M(ad)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${Bc["duration-250"]} ${Bc["ease-default"]};
    margin: auto -1rem auto 0;
`,yd=M(j)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Ic["icon-primary"]};
`,xd=M(Ho.div)`
    overflow: hidden;
`,wd=M.div`
    display: inline-block;
    padding-right: 4rem;

    ${Lc.MaxWidth.lg} {
        padding-right: 0;
    }
`;const $d=g((function({title:r,children:n,expanded:i,type:s="default",collapsible:l=!0,className:c,id:d,"data-testid":h="accordion-item"},g){const p=o(null),m=f(gt),[b,y]=a(!l||(null!=i?i:m)),[x,w]=a(!1),$=lr(),C=$.ref;v(g,(()=>Object.assign(p.current,{expand(){y(!0)},collapse(){y(!1)},isExpanded:()=>b})),[b]),u((()=>{x&&y(!l||m)}),[m]),u((()=>{x&&y(!!i)}),[i]),u((()=>{w(!0)}),[]);const S={height:b?$.height:0},k=So(S);return t(gd,{"data-testid":h,className:c,id:d,$isCollapsed:b,ref:p,children:[t(pd,{$isCollapsed:l,onClick:l?e=>{e.preventDefault(),y((e=>!e))}:void 0,children:["string"!=typeof r?r:e("small"===s?bd:md,{weight:"bold","data-testid":`${h}-title`,$isCollapsed:b,children:r}),l&&e(vd,{"data-testid":`${h}-expand-collapse-button`,$isCollapsed:b,focusHighlight:!1,focusOutline:"browser","aria-label":b?"Collapse":"Expand",children:e(yd,{})})]}),e(xd,{style:x?k:S,$isCollapsed:b,"data-testid":`${h}-expandable-container`,inert:Yo(!b),children:e(wd,{ref:C,"data-testid":"content-container",children:n})})]})})),Cd=M.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Sd=B`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,kd=M.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 100%;
    border-color: currentColor transparent transparent transparent;
    animation: ${Sd} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Dd=M(kd)`
    animation-delay: -0.45s;
`,Ed=M(kd)`
    animation-delay: -0.3s;
`,Td=M(kd)`
    animation-delay: -0.15s;
`,Fd=({color:r,className:n,size:i})=>t(Cd,{className:n,$size:i,$color:r,"data-testid":"component-loading-spinner",children:[e(kd,{id:"inner1"}),e(Dd,{id:"inner2"}),e(Ed,{id:"inner3"}),e(Td,{id:"inner4"})]}),Od={Button:{"button-radius":kc.md,"button-default-colour-bg":tc["bg-primary"],"button-default-colour-bg-hover":tc["bg-primary-hover"],"button-default-colour-text":tc["text-inverse"],"button-secondary-colour-border":tc["border-primary"],"button-secondary-colour-text":tc["text-primary"],"button-light-colour-text":tc["text-primary"],"button-link-colour-text":tc["text-primary"]}},Md={collections:{default:{Button:{"button-radius":kc.sm,"button-default-colour-bg":tc["bg-primary"],"button-default-colour-bg-hover":tc["bg-primary-hover"],"button-default-colour-text":tc["text-inverse"],"button-secondary-colour-border":tc["border-primary"],"button-secondary-colour-text":tc["text-primary"],"button-light-colour-text":tc["text-primary"],"button-link-colour-text":tc["text-primary"]}},pa:{Button:{"button-radius":kc.full,"button-default-colour-bg":tc["bg-primary"],"button-default-colour-bg-hover":tc["bg-primary-hover"],"button-default-colour-text":tc["text-inverse"],"button-secondary-colour-border":tc["border-primary"],"button-secondary-colour-text":tc["text-primary"],"button-light-colour-text":tc["text-primary"],"button-link-colour-text":tc["text-primary"]}},a11yplayground:Od},defaultValue:"default"},_d=(e,t)=>r=>{var n,i;const o=r.theme,a=Fl(Md,null==o?void 0:o.componentScheme);return Id((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[t])||a[e][t],r)},Id=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},Ad=_d("Button","button-radius"),Bd=_d("Button","button-default-colour-bg"),Rd=_d("Button","button-default-colour-bg-hover"),jd=_d("Button","button-default-colour-text"),zd=_d("Button","button-secondary-colour-border"),Pd=_d("Button","button-secondary-colour-text"),Ld=_d("Button","button-light-colour-text"),Nd=_d("Button","button-link-colour-text"),Hd=M.button`
    padding: ${jc["spacing-8"]} ${jc["spacing-16"]};
    min-width: 4rem;
    border: ${Rc["width-010"]} ${Rc.solid} transparent;
    transition: all ${Bc["duration-250"]} ${Bc["ease-default"]};
    border-radius: ${Ad};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return _`
                    background-color: ${Ic.bg};
                    border-color: ${e.$buttonIsDanger?Ic["border-error-strong"]:zd};

                    color: ${e.$buttonIsDanger?Ic["text-error"]:Pd};

                    &:hover,
                    &:active {
                        background-color: ${Ic["bg-hover-neutral"]};
                    }
                `;case"light":return _`
                    background-color: ${Ic.bg};
                    border-color: ${Ic.border};

                    color: ${e.$buttonIsDanger?Ic["text-error"]:Ld};

                    &:hover,
                    &:active {
                        background-color: ${Ic["bg-hover-neutral"]};
                    }
                `;case"link":return _`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ic["text-error"]:Nd};
                    &:hover,
                    &:active {
                        background-color: ${Ic["bg-hover-neutral"]};
                    }
                `;case"disabled":return _`
                    background-color: ${Ic["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ic["text-disabled"]};
                `;default:return _`
                    background-color: ${e.$buttonIsDanger?Ic["bg-error-strong"]:Bd};};

                    ${Lc.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${jd}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ic["bg-error-strong-hover"]:Rd}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return _`
                    height: 2.5rem;
                    ${Ac["body-md-semibold"]}

                    ${Lc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return _`
                    height: 4rem;
                    ${Ac["heading-md-semibold"]}

                    ${Lc.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return _`
                    height: 3rem;
                    ${Ac["heading-xs-semibold"]}

                    ${Lc.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Wd=M(Fd)`
    margin-right: 0.5rem;
`,Yd=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=Vo(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Hd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Wd,{}),e("span",{children:i})]}))};Yd.displayName="Button.Default";const Vd=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=Vo(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Hd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Wd,{}),e("span",{children:i})]}))};Vd.displayName="Button.Small";const Ud=(r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=Vo(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(Hd,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(Wd,{}),e("span",{children:i})]}))};Ud.displayName="Button.Large";const Kd={Default:i.forwardRef(Yd),Small:i.forwardRef(Vd),Large:i.forwardRef(Ud)},Xd=M.div`
    width: 100%;
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
`,qd=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${Lc.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return _`
                ${Lc.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,Gd=M(ud.HeadingMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${Lc.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return _`
                ${Lc.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,Zd=M(Kd.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,Qd=Object.assign((({children:r,title:n,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:s=!1,className:l,id:c,"data-testid":d})=>{const[u,h]=a("expand-all"===o),g=e=>{e.preventDefault(),h((e=>!e))};return e(gt.Provider,{value:u,children:t(Xd,{className:l,id:c,"data-testid":d,children:[n||i?t(qd,{$showTitleInMobile:s,$hasExpandAll:i,children:[n&&e(Gd,{weight:"bold",$showInMobile:s,"data-testid":"accordion-title",children:n}),i&&e(Zd,{"data-testid":"accordion-expand-collapse-button",onClick:g,styleType:"link",type:"button",children:u?"Hide all":"Show all"})]}):null,r]})})}),{Item:$d}),Jd=e=>{const{textSize:t}=e||{};return _`
        // Text styling
        ${t&&Ac[`${t}-regular`]}

        strong {
            font-weight: ${Ac.Spec["weight-semibold"]};
            ${t&&Ac[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Ac.Spec["weight-semibold"]};
            ${t&&Ac[`${t}-semibold`]}
            color: ${Ic.hyperlink};
            text-decoration: none;

            svg {
                color: ${Ic["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ic["hyperlink-hover"]};

                svg {
                    color: ${Ic["icon-hover"]};
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
    `},eu=M.div`
    padding: ${jc["spacing-8"]} ${jc["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Ic["bg-error"](e),r=Ic["border-error"](e);break;case"success":t=Ic["bg-success"](e),r=Ic["border-success"](e);break;case"warning":default:t=Ic["bg-warning"](e),r=Ic["border-warning"](e);break;case"info":t=Ic["bg-info"](e),r=Ic["border-info"](e);break;case"description":t=Ic["bg-strong"](e),r=Ic["border-strong"](e)}return _`
            background: ${t};
            border-left: ${Rc["width-020"]} ${Rc.solid}
                ${r};
        `}}

    color: ${Ic.text};
    ${e=>"small"===e.$sizeType?Jd({textSize:"body-sm"}):Jd({textSize:"body-md"})}
`,tu=M.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${jc["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Ic["icon-error"](e);break;case"success":t=Ic["icon-success"](e);break;case"warning":default:t=Ic["icon-warning"](e);break;case"info":t=Ic["icon-info"](e);break;case"description":t=Ic["icon-subtle"](e)}return _`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,ru=M(ud.LinkSM)`
    ${e=>"small"===e.$sizeType?_`
                ${Ac["body-sm-semibold"]}
                margin-top: ${jc["spacing-4"]};
            `:_`
                ${Ac["body-md-semibold"]}
                margin-top: ${jc["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${jc["spacing-4"]};
    }
`,nu=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,iu=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return _`
                margin-bottom: ${jc["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,ou=M.button`
    ${e=>"small"===e.$sizeType?_`
                ${Ac["body-sm-semibold"]}
            `:_`
                ${Ac["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${jc["spacing-4"]};
    margin-top: ${jc["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Ic["text-primary"]};
`,au=M(Y)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Bc["duration-350"]} ${Bc["ease-standard"]};
`,su=r=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:g}=r,p=Vo(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,m]=a(!1),[b,v]=a(!1),{height:y,ref:x}=lr();u((()=>{w()}),[g,y]);const w=()=>{m(!g),v($())},$=()=>!(!y||!g)&&y>g;return t(eu,{className:i,$type:n,$sizeType:c,"data-testid":p["data-testid"],children:[d&&e(tu,{$sizeType:c,$type:n,children:(()=>{if(n&&h)return h;switch(n){case"success":return e(W,{});case"warning":return e(N,{});case"error":return e(L,{});case"info":case"description":return e(H,{});default:return null}})()}),t(nu,{children:[t(iu,{$maxCollapsedHeight:$()?g:void 0,$showMore:f,$hasActionLink:!!s,children:[e("div",{ref:x,children:o}),s?t(ru,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},s,{children:[s.children,l||e(P,{})]})):null]}),b&&t(ou,{$sizeType:c,$type:n,type:"button",onClick:()=>m(!f),children:["Show ",f?"less":"more",e(au,{$expanded:f})]})]})]})},lu=y((()=>Uo(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.994e8f51.js")).LottieSpinner}})))),cu=t=>e(uu,Object.assign({},t,{children:e(x,{fallback:e(du,{}),children:e(lu,{})})})),du=()=>e("div",{style:{height:"200px",width:"200px"}}),uu=M.div`
    margin: 0 auto;
    padding: ${jc["spacing-32"]} ${jc["spacing-16"]};
`,hu=y((()=>Uo(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.6ede485c.js")).LottieLoadingDots}})))),gu=t=>e(fu,Object.assign({},t,{children:e(x,{fallback:e(pu,{}),children:e(hu,{})})})),pu=()=>e("div",{style:{height:"16px",width:"64px"}}),fu=M.div`
    margin: 0 auto;
`,mu=y((()=>Uo(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.b089b004.js")).LottieLoadingDotsSpinner}})))),bu=t=>{var{color:r}=t,n=Vo(t,["color"]);const i=R(),o=r||Ic["icon-primary"]({theme:i});return e(yu,Object.assign({},n,{children:e(x,{fallback:e(vu,{}),children:e(mu,{color:o})})}))},vu=()=>e("div",{style:{height:"200px",width:"200px"}}),yu=M.div`
    margin: 0 auto;
`,xu=t=>{const r=R();return"lifesg"===(null==r?void 0:r.resourceScheme)?e(cu,Object.assign({},t)):e(bu,Object.assign({},t))};var wu,$u={exports:{}};wu=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,g=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var g=e.type;switch(g){case c:case d:case i:case a:case o:case h:return g;default:var m=g&&g.$$typeof;switch(m){case l:case u:case f:case p:case s:return m;default:return t}}case n:return t}}}var w=c,$=d,C=l,S=s,k=r,D=u,E=i,T=f,F=p,O=n,M=a,_=o,I=h,A=!1;function B(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=k,t.ForwardRef=D,t.Fragment=E,t.Lazy=T,t.Memo=F,t.Portal=O,t.Profiler=M,t.StrictMode=_,t.Suspense=I,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===c},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===f},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Cu=$u.exports=wu(i);const Su=M.div`
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};
    margin-bottom: ${jc["spacing-32"]};
`,ku=M(Ho.div)`
    overflow: hidden;
`,Du=M.div`
    height: max-content;
`,Eu=M.div`
    border-top: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
`,Tu=M.div`
    padding: ${jc["spacing-16"]} ${jc["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Lc.MaxWidth.sm} {
        padding: ${jc["spacing-16"]} ${jc["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return _`
                cursor: pointer;
            `}}
`,Fu=M.div`
    ${Ac["heading-sm-semibold"]}
    color: ${Ic.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${jc["spacing-16"]};
`,Ou=M.div`
    display: flex;
`,Mu=M.span`
    display: flex;
    align-items: center;
    margin-right: ${jc["spacing-40"]};

    ${Lc.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return _`
                    color: ${Ic["icon-error"]};
                `;case"warning":return _`
                    color: ${Ic["icon-warning"]};
                `}}}
`,_u=M(L)`
    height: ${Ac.Spec["heading-size-sm"]};
    width: ${Ac.Spec["heading-size-sm"]};
`,Iu=M.div`
    display: flex;
    margin-left: auto;
    ${Lc.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return _`
                margin-right: ${jc["spacing-40"]};
                ${Lc.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${jc["spacing-16"]};
                }
            `}}
`,Au=M.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${jc["spacing-16"]};
    margin: -${jc["spacing-16"]};
    display: flex;
    align-items: center;

    ${Lc.MaxWidth.sm} {
        margin: -${jc["spacing-16"]} -${jc["spacing-16"]} -${jc["spacing-16"]} 0;
        margin-left: auto;
    }
`,Bu=M.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Bc["duration-250"]} ${Bc["ease-default"]};
`,Ru=M(ve)`
    color: ${Ic.icon};
    height: ${Ac.Spec["heading-size-sm"]};
    width: ${Ac.Spec["heading-size-sm"]};
`,ju=r=>{var{children:n,title:i,collapsible:o=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=r,h=Vo(r,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[g,p]=a(!o||s),f=lr(),m=f.ref,b=R(),v=Pc["sm-max"]({theme:b}),y=Cu.useMediaQuery({maxWidth:v}),x=u&&o,w=e=>{e.stopPropagation(),p(!g)},$=So({height:g?f.height:0}),C=()=>o&&e(Au,{onClick:w,type:"button","aria-label":g?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle",children:e(Bu,{$expanded:g,children:e(Ru,{"aria-hidden":!0})})});return t(Su,Object.assign({},h,{children:[t(Tu,{"data-testid":"header",onClick:x?w:void 0,$interactive:x,children:[t(Ou,{children:[e(Fu,{"data-testid":(null==d?void 0:d.title)||"title",children:i}),(()=>{switch(c){case"error":case"warning":return e(Mu,{$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`,children:e(_u,{})});default:return null}})(),y&&C()]}),l&&e(Iu,{$collapsible:o,"data-testid":"call-to-action-container",children:l}),!y&&C()]}),o?e(ku,{style:$,"data-testid":"expandable-container",children:e(Eu,{ref:m,children:n})}):e(Du,{"data-testid":"non-expandable-container",children:e(Eu,{children:n})})]}))};var zu={exports:{}};zu.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",g="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[w])},C=function e(t,r,n){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(y=i),i||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},k=v;k.l=C,k.i=$,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===g)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return k.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!k.u(t)||t,d=k.p(e),g=function(e,t){var i=k.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return k.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?g(1,0):g(31,11);case c:return n?g(1,m):g(0,m+1);case l:var y=this.$locale().weekStart||0,x=(f<y?f+7:f)-y;return g(n?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=k.p(e),d="set"+(this.$u?"UTC":""),g=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[o]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var f=this.clone().set(h,1);f.$d[g](p),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else g&&this.$d[g](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(n,d){var h,g=this;n=Number(n);var p=k.p(d),f=function(e){var t=S(g);return k.w(t.date(t.date()+Math.round(e*n)),g)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return f(1);if(p===l)return f(7);var m=(h={},h[o]=t,h[a]=r,h[i]=e,h)[p]||1,b=this.$d.getTime()+n*m;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},h=function(e){return k.s(o%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return k.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,g){var p,f=this,m=k.p(h),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return k.m(f,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case o:p=y/t;break;case i:p=y/e;break;default:p=y}return g?p:k.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),E=D.prototype;return S.prototype=E,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,D,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Pu=Zo(zu.exports),Lu={exports:{}};Lu.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],g=d&&d[1];a[l]=g?{regex:h,parser:g}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,g=new Date,p=a||(i||o?1:g.getDate()),f=i||g.getFullYear(),m=0;i&&!o||(m=o>0?o-1:g.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(f,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(f,m,p,b,v,y,x)):new Date(f,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var g=s.length,p=1;p<=g;p+=1){a[1]=s[p-1];var f=r.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}p===g&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Nu=Zo(Lu.exports),Hu={exports:{}};Hu.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Wu=Zo(Hu.exports),Yu={exports:{}};Yu.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Vu=Zo(Yu.exports),Uu={exports:{}};Uu.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ku,Xu,qu=Zo(Uu.exports),Gu={exports:{}};Gu.exports=(Ku={year:0,month:1,day:2,hour:3,minute:4,second:5},Xu={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Xu[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Xu[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=Ku[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,g=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(g).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Zu,Qu=Zo(Gu.exports);Pu.extend(Wu),Pu.extend(qu),Pu.extend(Vu),Pu.extend(Nu),Pu.extend(Qu),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Pu(t).startOf("week");return Ju(r).map((e=>eh(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return eh(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Pu(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Pu(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Pu(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?Pu(n):void 0,i?Pu(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Zu||(Zu={}));const Ju=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},eh=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},th=[1,3,5,7,8,10,12],rh=[4,6,9,11];var nh,ih,oh,ah;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":th.includes(o)?Math.min(i,31).toString():rh.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Pu(e,r);return Pu(t,r).diff(n,"minute")},e.toDayjs=e=>e?Pu(e):Pu(),e.addMinutesToTime=(e,t,r="HH:mm")=>Pu(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Pu(e).isSame(Pu(t),r)}(nh||(nh={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Pu(e).isBefore(n,"day"))||!(!i||!Pu(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Pu(e).isValid())return e}return""}}(ih||(ih={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(oh||(oh={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`}}(ah||(ah={}));function sh(e){const t=o(null);return h((()=>{t.current=e}),[e]),p(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const lh=(e,t,r="window",n)=>{const i=o();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.call(i,e)};return t.addEventListener(e,o,n),()=>{null==t||t.removeEventListener(e,o,n)}}),[e,r])},ch="undefined"!=typeof window?h:u,dh=()=>{const[e,t]=a(!1);return u((()=>{t(!0)}),[]),e};function uh({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const i=n.value,o=t(i),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=i.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:o,updateCaretPosition:()=>{n.value=o,n.setSelectionRange(d,d)}}}}const hh=e=>{const t=(e=>{const t=o(e),r=o();return u((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},gh=e=>{const[t,r]=a(e),n=o(e);return[t,p((e=>{n.current=e,r(e)}),[]),n]},ph=M.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${jc["spacing-32"]} 0;

    ${Lc.MaxWidth.xl} {
        margin: ${jc["spacing-24"]} 0;
    }

    ${Lc.MaxWidth.lg} {
        margin: ${jc["spacing-16"]} 0;
    }
`,fh=M.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${jc["spacing-8"]};
    font-size: ${Ac.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${Lc.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,mh=M.div`
    width: ${jc["spacing-64"]};
    height: calc(1lh + ${jc["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const r="rgba(255,255,255,0.001)",n=Ic.bg(e);return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||n}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||n},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,_`
            ${Lc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,bh=M.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,vh=M(ye)`
    margin: ${jc["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${Ic["icon-subtle"]};
`,yh=M(ud.BodyMD)`
    margin: ${jc["spacing-8"]} !important;
`,xh=M(ud.LinkMD)`
    margin: ${jc["spacing-8"]} !important;
`,wh=n=>{var{links:i,fadeColor:s,fadePosition:l="both",itemStyle:c,id:d}=n,u=Vo(n,["links","fadeColor","fadePosition","itemStyle","id"]);const[h,g]=a(!1),[p,f]=a(!1),[m,b]=a(!1),v="left"===l||"both"===l,y="right"===l||"both"===l,x=o(null),w=o(null),$=R(),C=Pc["lg-max"]({theme:$}),S=sh((()=>{const e=w.current,t=x.current;e&&t&&i&&i.length>1&&window.innerWidth<=C&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),k=sh((()=>{const e=window.innerWidth<=C;g(e);const t=w.current,r=x.current;if(t&&r&&e&&t.scrollWidth>r.offsetWidth)return f(t.scrollLeft>=1),void b(t.scrollWidth-t.scrollLeft-1>r.offsetWidth);f(!1),b(!1)}));if(lh("resize",k),lh("scroll",k,w.current),ch((()=>{S(),k()}),[S,k]),lr({onResize:S,targetRef:x,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!i)return null;return t(ph,Object.assign({ref:x,id:d||"breadcrumb"},u,{children:[e("nav",{children:e(fh,{ref:w,children:i.map(((r,n)=>{let o;return r.children?(o=n!==i.length-1&&r.href?e(xh,Object.assign({},r,{weight:"semibold"})):e(yh,{weight:"semibold",children:r.children}),t(bh,{$styleProps:c,children:[o,n<i.length-1&&e(vh,{})]},n)):null}))})}),h&&(()=>{let n;return n=Array.isArray(s)&&s.length>0?{left:s,right:s}:s||{left:void 0,right:void 0},t(r,{children:[p&&v&&e(mh,{$backgroundColor:n.left,$position:"left"}),m&&y&&e(mh,{$backgroundColor:n.right,$position:"right"})]})})()]}))},$h=M(Hd)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Ch=(r,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=r,u=Vo(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return t($h,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[d?e(Fd,{}):l,e("span",{children:i})]}))};Ch.displayName="ButtonWithIcon.Default";const Sh=(r,n)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left",loading:d=!1}=r,u=Vo(r,["children","disabled","styleType","danger","icon","iconPosition","loading"]),h={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return t($h,Object.assign({ref:n,"data-testid":u["data-testid"]||"button-with-icon",disabled:o},h,u,{children:[d?e(Fd,{}):l,e("span",{children:i})]}))};Sh.displayName="ButtonWithIcon.Small";const kh={Default:i.forwardRef(Ch),Small:i.forwardRef(Sh)},Dh=M.div`
    --vertical-inset: ${jc["spacing-24"]};
    --horizontal-inset: ${jc["spacing-20"]};
    --header-bottom-spacing: ${jc["spacing-4"]};

    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${Lc.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,Eh=_`
    color: ${Ic.icon};
    height: 1rem;
    width: 1rem;
`,Th=M(xe)`
    ${Eh}
`,Fh=M(ye)`
    ${Eh}
`,Oh=M(ve)`
    ${Eh}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Mh=M.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,_h=M.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ih=M.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Ah=M.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Ic.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return _`
                display: none;
            `}}
`,Bh=M.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Rh=M.div`
    display: flex;
`,jh=M.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?_`
                display: none;
            `:e.$expanded?_`
                ${Oh} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,zh=M.span`
    ${Ac["body-md-regular"]}
    color: ${Ic.text};
`,Ph=M.div`
    display: flex;
`,Lh=M(ad)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Nh=M.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Hh=M(Kd.Small)`
    flex: 1;
`,Wh=M.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Yh=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${zc.md};
    margin: 0 0.5rem;
    transition: ${Bc["duration-150"]} ${Bc["ease-default"]};

    // default styles
    ${Ac["body-md-regular"]}
    border-radius: ${zc.md};
    border: ${Rc["width-010"]} ${Rc.solid} transparent;
    background-clip: border-box;
    color: ${Ic.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?_`
                cursor: pointer;
            `:e.$disabledDisplay?_`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?_`
                background: ${Ic["bg-selected"]};
                border-color: ${Ic["border-selected"]};
                color: ${Ic["text-selected"]};
                font-weight: ${Ac.Spec["weight-semibold"]};

                ${t&&_`
                    &:hover {
                        background: ${Ic["bg-selected-hover"]};
                        border-color: ${Ic["border-selected-hover"]};
                        color: ${Ic["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?_`
                color: ${Ic["text-primary"]};
                font-weight: ${Ac.Spec["weight-semibold"]};
            `:r?_`
                color: ${Ic["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?_`
                &:hover {
                    background: ${Ic["bg-selected-hover"]};
                    border-color: ${Ic["border-selected-hover"]};
                    color: ${Ic["text-selected-hover"]};
                    font-weight: ${Ac.Spec["weight-semibold"]};
                }
            `:_`
            &:hover {
                background: ${Ic["bg-hover"]};
                color: ${Ic["text-hover"]};
                font-weight: ${Ac.Spec["weight-semibold"]};
            }
        `}}
`,Vh=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:h,onMonthSelect:g})=>{const p=m((()=>Zu.generateMonths(Pu(t))),[t]),f=o(new Array(p.length).fill(null)),[b,v]=a(p.findIndex((e=>e.isSame(s,"month"))));u((()=>{var e;null!==b&&(null===(e=f.current[b])||void 0===e||e.focus())}),[b,p]);const y=(e,t)=>{t||g(e)},x=e=>{const t="start"===r&&i&&e.isAfter(i,"month")&&l,o="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!o)},w=e=>{const t=e.format("MMMM"),r=(n=e,!Zu.isWithinRange(n,c?Pu(c):void 0,d?Pu(d):void 0,"month"));var n;const i=s.isSame(e,"month"),o=i?"selected-month":Pu().isSame(e,"month")?"current-month":"default",a=s.isSame(e,"year")?i?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||h,month:t,variant:o,tabIndex:a}};return p.length?e(Wh,{onBlur:()=>{v(null)},children:p.map(((t,r)=>{const{disabledDisplay:n,interactive:i,variant:o,month:a,tabIndex:s}=w(t);return e(Yh,{ref:e=>f.current[r]=e,tabIndex:s,role:"button","aria-disabled":!i,"aria-selected":"selected-month"===o,$variant:o,$disabledDisplay:n,$interactive:i,onClick:()=>y(t,!i),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let i;const o=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":i=o-1;break;case"ArrowRight":i=o+1;break;case"ArrowUp":i=o-2;break;case"ArrowDown":i=o+2}void 0!==i&&i>=0&&i<p.length&&(e.preventDefault(),v(i))})(e,t,!i)},children:a},a)}))}):null},Uh=M.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Kh=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Bc["duration-150"]} ${Bc["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Ac["body-md-regular"]}
    border-radius: ${zc.md};
    border: ${Rc["width-010"]} ${Rc.solid} transparent;
    background-clip: border-box;
    color: ${Ic.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?_`
                cursor: pointer;
            `:t?_`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?_`
                background: ${Ic["bg-selected"]};
                border-color: ${Ic["border-selected"]};
                color: ${Ic["text-selected"]};
                font-weight: ${Ac.Spec["weight-semibold"]};

                ${t&&_`
                    &:hover {
                        background: ${Ic["bg-selected-hover"]};
                        border-color: ${Ic["border-selected-hover"]};
                        color: ${Ic["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?_`
                color: ${Ic["text-primary"]};
                font-weight: ${Ac.Spec["weight-semibold"]};
            `:"other-decade"===e||r?_`
                color: ${Ic["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?_`
                &:hover {
                    background: ${Ic["bg-selected-hover"]};
                    border-color: ${Ic["border-selected-hover"]};
                    color: ${Ic["text-selected-hover"]};
                    font-weight: ${Ac.Spec["weight-semibold"]};
                }
            `:_`
            &:hover {
                background: ${Ic["bg-hover"]};
                color: ${Ic["text-hover"]};
                font-weight: ${Ac.Spec["weight-semibold"]};
            }
        `}}
`,Xh=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:h,onYearSelect:g,setCalendarDate:p})=>{const f=m((()=>Zu.generateDecadeOfYears(Pu(t))),[t]),b=o(new Array(f.length).fill(null)),[v,y]=a(t);u((()=>{var e;if(null===v)return;const t=f.findIndex((e=>e.isSame(v,"year")));t>=0&&(null===(e=b.current[t])||void 0===e||e.focus())}),[v,f]);const x=(e,t)=>{t||g(e)},w=e=>{const t="start"===r&&i&&e.isAfter(i,"year")&&l,o="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!o)},$=e=>{const t=f.indexOf(e),r=[0,11].includes(t),n=e.year(),i=(o=e,!Zu.isWithinRange(o,c?Pu(c):void 0,d?Pu(d):void 0,"year"));var o;const a=r?"other-decade":s.isSame(e,"year")?"selected-year":Pu().isSame(e,"year")?"current-year":"default",l=s.year()>=f[0].year()&&s.year()<=f[f.length-1].year()?"selected-year"===a?0:-1:1===t?0:-1;return{disabledDisplay:i||w(e),interactive:!i||h,year:n,variant:a,tabIndex:l}};return f.length?e(Uh,{onBlur:()=>{y(null)},children:f.map(((t,r)=>{const{disabledDisplay:n,interactive:i,variant:o,year:a,tabIndex:s}=$(t);return e(Kh,{ref:e=>{b.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!i,"aria-selected":"selected-year"===o,$variant:o,$disabledDisplay:n,$interactive:!!i,onClick:()=>x(t,!i),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(e,t,!i)},children:a},a)}))}):null},qh=i.forwardRef(((n,i)=>{var{children:s,initialCalendarDate:l,minDate:c,maxDate:d,currentFocus:h,selectedStartDate:g,selectedEndDate:p,selectWithinRange:f,dynamicHeight:m=!1,allowDisabledSelection:b,onCalendarDateChange:y,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:k,isLeftArrowDisabled:D,isRightArrowDisabled:E,getMonthHeaderLabel:T,getYearHeaderLabel:F,isFocusable:O=!1}=n,M=Vo(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[_,I]=a(nh.toDayjs(l)),[A,B]=a(nh.toDayjs(l)),[R,j]=a("default"),z=o(null),P=o(null),L=o(null),N=o(null);v(i,(()=>({defaultView(){j("default")},resetView(){const e=nh.toDayjs(l);I(e),B(e),j("default")},setCalendarDate(e){const t=nh.toDayjs(e);I(t),B(t)}}))),u((()=>{const e=nh.toDayjs(l);I(e),B(e)}),[l]),u((()=>{G(A)}),[A]);const H=()=>{var e;"month-options"!==R?(j("month-options"),null===(e=L.current)||void 0===e||e.focus()):(j("default"),I(A))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),H(),null===(t=N.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?_.subtract(1,"month"):_.add(1,"month");if(!Zu.isWithinRange(t,c?Pu(c):void 0,d?Pu(d):void 0,"month"))return;I(t),"default"===R&&B(t)}},Y=()=>{"default"!==R?(j("default"),I(A)):j("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===R?"ArrowUp"===e.key?_.subtract(10,"year"):_.add(10,"year"):"ArrowUp"===e.key?_.subtract(1,"year"):_.add(1,"year"),!Zu.isWithinRange(t,c?Pu(c):void 0,d?Pu(d):void 0,"year"))return;I(t),"default"===R&&B(t)}},U=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const t=S?S(_):_.subtract(1,"month");switch(R){case"default":B(t),I(t);break;case"month-options":I((e=>e.subtract(1,"year")));break;case"year-options":I((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=L.current)||void 0===e||e.focus();const t=k?k(_):_.add(1,"month");switch(R){case"default":B(t),I(t);break;case"month-options":I((e=>e.add(1,"year")));break;case"year-options":I((e=>e.add(10,"year")))}},X=e=>{I(e),B(e),x||j("default")},q=()=>{const e=nh.toDayjs(l);I(e),B(e),"default"===R?Z("reset"):j("default")},G=e=>{y&&y(e)},Z=e=>{$&&$(e)},Q=()=>{if(!c||b)return!1;const e=Pu(c);return"month-options"===R?!Zu.isPreviousYearWithinRange(_,e):"year-options"===R?!Zu.isPreviousDecadeWithinRange(_,e):D?D(_):!Zu.isPreviousMonthWithinRange(_,e)},J=()=>{if(!d||b)return!1;const e=Pu(d);return"month-options"===R?!Zu.isNextYearWithinRange(_,e):"year-options"===R?!Zu.isNextDecadeWithinRange(_,e):E?E(_):!Zu.isNextMonthWithinRange(_,e)},ee=()=>{const n=T?T(_):_.format("MMM"),i=Pu(n,"MMM").format("MMMM"),o=(()=>{if("year-options"===R){const{beginDecade:e,endDecade:t}=Zu.getStartEndDecade(_);return`${e} to ${t}`}return F?F(_):_.format("YYYY")})(),a={"month-options":`${o}, Close month selection`,"year-options":`${o}, Close year selection`,default:`${o}, Select year`};return t(r,{children:[t(jh,{"aria-label":`${i}, Select month`,type:"button",$expanded:"month-options"===R,$visible:"default"===R,id:"month-dropdown",onClick:H,onKeyDown:W,tabIndex:O?0:-1,children:[e(zh,{children:n}),e(Oh,{})]}),t(jh,{ref:N,"aria-label":a[R],type:"button",$expanded:"default"!==R,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:O?0:-1,children:[e(zh,{children:o}),e(Oh,{})]})]})},te=()=>{switch(R){case"month-options":return e(Vh,{calendarDate:_,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:g,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!f,onMonthSelect:X,allowDisabledSelection:b});case"year-options":return e(Xh,{setCalendarDate:I,calendarDate:_,currentFocus:h,minDate:c,maxDate:d,selectedStartDate:g,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!f,onYearSelect:X,allowDisabledSelection:b});default:return null}};return t(Mh,Object.assign({ref:L,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},M,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[R];return t(Bh,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Rh,{children:ee()}),t(Ph,{children:[e(Lh,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:Q(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:O?0:-1,children:e(Th,{})}),e(Lh,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:O?0:-1,children:e(Fh,{})})]})]})})(),e(_h,{children:(()=>{const n="function"==typeof s?s({calendarDate:A,currentView:R}):s;if(m)return t(r,{children:["default"===R&&n,te()]});{const i="default"===R;return t(r,{children:[e(Ih,{inert:Yo(!i),children:n}),e(Ah,{$visible:!i,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===R)&&w;return t(Nh,{children:[e(Hh,{ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q,children:"Cancel"}),e(Hh,{"data-testid":"done-button",ref:z,type:"button",onClick:()=>{r||(I(A),"default"===R?Z("confirmed"):j("default"))},disabled:r,children:"Done"})]})})()]}))})),Gh=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Zh=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Ac["body-sm-semibold"]};
    color: ${Ic.text};
`,Qh=M.div`
    grid-column: 1 / -1;
    display: flex;
`,Jh=e=>{let t=Ic.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Ic["bg-hover"],r=Ic["bg-hover"];break;case"hover":t=Ic["bg-hover-strong"],r=Ic["bg-hover-strong"];break;case"hover-outline":t=Ic["bg-hover-subtle"],r=Ic["border-hover"];break;case"selected-outline":t=Ic["bg-selected"],r=Ic["border-selected"];break;case"selected-outline-subtle":t=Ic["bg-selected"],r=Ic["border-selected-subtle"];break;case"selected-hover":t=Ic["bg-selected-hover"];break;case"selected-hover-outline":t=Ic["bg-selected-hover"],r=Ic["border-selected-hover"]}return{color:t,borderColor:r}},eg=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,tg=M.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Bc["duration-150"]} ${Bc["ease-default"]};
    border: ${Rc["width-010"]} ${Rc.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Jh(e);return _`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,rg=M(tg)`
    left: 0;
`,ng=M(tg)`
    right: 0;
`,ig=M.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Bc["duration-150"]} ${Bc["ease-default"]};

    border: ${Rc["width-010"]} ${Rc.solid} transparent;
    border-radius: ${zc.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Jh(e);return _`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,og=M(ig)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,ag=M(ig)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,sg=M.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,lg=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Ac["body-md-regular"]}
    transition: ${Bc["duration-150"]} ${Bc["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?_`
                    visibility: hidden;
                `:_`
                color: ${Ic["text-disabled-subtlest"]};
            `;switch(r){case"selected":return _`
                    font-weight: ${Ac.Spec["weight-semibold"]};
                    color: ${Ic["text-selected"]};
                `;case"selected-hover":return _`
                    font-weight: ${Ac.Spec["weight-semibold"]};
                    color: ${Ic["text-selected-hover"]};
                `;case"current":return _`
                    font-weight: ${Ac.Spec["weight-semibold"]};
                    color: ${Ic["text-primary"]};
                `;case"hover":return _`
                    font-weight: ${Ac.Spec["weight-semibold"]};
                    color: ${Ic["text-hover"]};
                `;case"unavailable":return _`
                    color: ${Ic["text-disabled-subtlest"]};
                `;case"hidden":return _`
                    visibility: hidden;
                `;default:return _`
                    color: ${Ic.text};
                `}}}

    &:focus {
        outline: none;
    }
`,cg=M.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,dg=({bgLeft:r,bgRight:n,circleLeft:i,circleRight:a,labelType:s,disabled:l,interactive:c,currentDateIndicator:d,date:h,onSelect:g,onHover:p,onFocus:f,onHoverEnd:m,onKeyDown:b,focusDate:v,label:y,ariaHidden:x,tabIndex:w=-1,role:$="button"})=>{const C=Pu().isSame(h,"day"),S=!!v&&v.isSame(h,"day"),k=`${h.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,D=o(null);u((()=>{var e;S&&D.current&&(null===(e=D.current)||void 0===e||e.focus())}),[S]);return t(eg,{"aria-hidden":x,children:[e(rg,{$type:r}),e(og,{$type:i}),e(ng,{$type:n}),e(ag,{$type:a}),e(sg,{$interactive:c,children:t(lg,{ref:D,tabIndex:w,role:$,"aria-label":y||k,"aria-disabled":!c,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:c,onClick:()=>{g(h)},onKeyDown:e=>{b&&b(e)},onMouseEnter:()=>{p(h)},onMouseLeave:()=>{m&&m(h)},onFocus:()=>{f&&f(h)},children:[h.date(),d&&C&&e(cg,{$disabled:l})]})})]})},ug=({date:t,calendarDate:r,startDate:n,endDate:i,currentFocus:o,hoverDate:a,focusDate:s,minDate:l,maxDate:c,disabledDates:d,allowDisabledSelection:u,isNewSelection:h,showActiveMonthDaysOnly:g,onSelect:p,onHover:f,onFocus:m,setFocusCell:b,tabIndex:v})=>{const y=Zu.isDisabledDay(t,d,l,c),x=!y||u,w=()=>{p(t,!x)},$=()=>{const e=Pu(a),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===o&&i&&t&&(n&&r?(c=a,d=i):(s=a,l=n||i)),"end"===o&&n&&r&&(i&&t?(c=n,d=a):(s=i||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{f(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Pu(s),tabIndex:v};return e(dg,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=g?"hidden":"unavailable";else if(Pu().isSame(t,"day")&&!y)e.labelType="current";else if(h){const r="end"===o&&n&&t.isBefore(n),a="start"===o&&i&&t.isAfter(i);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(n,"day"),a=t.isSame(i,"day");return g&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&i&&t.isBetween(n,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:c}=$();if(r){const r=t.isSame(n,"day"),o=t.isSame(i,"day");r||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const r=t.isSame(o,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Pu.extend(Wu);const hg=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:s,selectedEndDate:l,onSelect:c,onHover:d,isNewSelection:h,minDate:g,maxDate:f,allowDisabledSelection:b,showActiveMonthDaysOnly:v,setCalendarDate:y})=>{const x=o(null);u((()=>{if(x.current){const e=x.current;x.current=null,D(e)}}),[r]);const w=p((()=>s&&Pu(s).isSame(r,"month")?Pu(s):l&&Pu(l).isSame(r,"month")?Pu(l):Pu().isSame(r,"month")?Pu():g&&r.isSame(Pu(g),"month")?Pu(g):Pu(r).startOf("month")),[s,r,l,g]),$=e=>{const t=Pu(e);if(Zu.isWithinRange(t,g?Pu(g):void 0,f?Pu(f):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);D(e)}},C=m((()=>Zu.generateDays(r)),[r]),S=m((()=>w()),[w]),[k,D]=a(""),[E,T]=a(""),F=(e,t)=>{t&&!b||c(e)},O=(e,t)=>{t&&!b||(T(e),d(e))},M=e=>{T(e),d(e)},_=()=>{T(""),d("")};return t(Gh,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(D(""),T(""),d(""))},children:[C[0].map(((t,r)=>e(Zh,{"aria-hidden":!0,children:Pu(t).format("ddd")},`week-day-${r}`))),C.map(((t,o)=>e(Qh,{role:"row","aria-label":`Week ${o+1}`,onMouseLeave:_,children:t.map(((t,o)=>e(ug,{date:t,calendarDate:r,startDate:s,endDate:l,hoverDate:E,focusDate:k,currentFocus:n,minDate:g,maxDate:f,disabledDates:i,allowDisabledSelection:b,isNewSelection:h,showActiveMonthDaysOnly:v,onSelect:F,onHover:O,onFocus:M,setFocusCell:$,tabIndex:t.isSame(S,"day")?0:-1},`day-${o}`)))},o)))]})},gg=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,focusDate:o,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,numberOfDays:d=1,onSelect:u,onHover:h,onFocus:g,setFocusCell:p,tabIndex:f})=>{const m=Zu.isDisabledDay(t,l,a,s),b=!m||c,{start:v,end:y}=n?Zu.getFixedRangeStartEnd(nh.toDayjs(n),d):{start:void 0,end:void 0},{start:x,end:w}=i?Zu.getFixedRangeStartEnd(nh.toDayjs(i),d):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!i&&t.isBetween(x,w,"day","[]"),S=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),k=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),D=`From ${Pu(x).format("D MMMM")} to ${Pu(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,E=()=>{u(t,!b)},T=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},F={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:E,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{g(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&E());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},focusDate:Pu(o),role:"gridcell",tabIndex:f,label:D};return e(dg,Object.assign({},F,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":Pu().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&T(e,"hover",r===x,r===w),$&&T(e,"selected-outline",r===v,r===y),$&&C&&(T(e,"selected-hover-outline",S,k),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},pg=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:s,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:h,numberOfDays:g,setCalendarDate:f})=>{const b=o(null);u((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=p((()=>i&&Pu(i).isSame(r,"month")?Pu(i):Pu().isSame(r,"month")?Pu():c&&r.isSame(Pu(c),"month")?Pu(c):Pu(r).startOf("month")),[i,r,c]),y=e=>{const t=Pu(e);if(Zu.isWithinRange(t,c?Pu(c):void 0,d?Pu(d):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(b.current=e);C(e)}},x=m((()=>Zu.generateDays(r)),[r]),w=m((()=>v()),[v]),[$,C]=a(""),[S,k]=a(""),D=(e,t)=>{t&&!h||(s(e),e&&!Pu(e).isSame(e,"month")&&k(""))},E=(e,t)=>{t&&!h||(k(e),l(e))},T=e=>{k(e),l(e)},F=()=>{k(""),l("")};return t(Gh,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),k(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Zh,{"aria-hidden":!0,children:Pu(t).format("ddd")},`week-day-${r}`))),x.map(((t,o)=>e(Qh,{role:"row",onMouseLeave:F,children:t.map(((t,o)=>e(gg,{date:t,calendarDate:r,selectedDate:i,hoverDate:S,focusDate:$,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:h,onSelect:D,onHover:E,numberOfDays:g,onFocus:T,setFocusCell:y,tabIndex:Pu(t).isSame(w,"day")?0:-1},`day-${o}`)))},o)))]})},fg=M.div`
    width: 100%;
    background: ${Ic.bg};
`,mg=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,focusDate:o,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,showActiveMonthDaysOnly:d,onSelect:u,onHover:h,onFocus:g,setFocusCell:p,tabIndex:f})=>{const m=Zu.isDisabledDay(t,l,a,s),b=!m||c,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{g(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Pu(o),tabIndex:f};return e(dg,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=d?"hidden":"unavailable":Pu().isSame(t,"day")&&!m&&(e.labelType="current");const o=t.isSame(n,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Pu.extend(Wu);const bg=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:s,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:h,showActiveMonthDaysOnly:g,setCalendarDate:f})=>{const b=o(null);u((()=>{if(b.current){const e=b.current;b.current=null,C(e)}}),[r]);const v=p((()=>i&&Pu(i).isSame(r,"month")?Pu(i):Pu().isSame(r,"month")?Pu():c&&r.isSame(Pu(c),"month")?Pu(c):Pu(r).startOf("month")),[i,r,c]),y=e=>{const t=Pu(e);if(Zu.isWithinRange(t,c?Pu(c):void 0,d?Pu(d):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(b.current=e);C(e)}},x=m((()=>Zu.generateDays(r)),[r]),w=m((()=>v()),[v]),[$,C]=a(""),[S,k]=a(""),D=(e,t)=>{t&&!h||s(e)},E=(e,t)=>{t&&!h||(k(e),l(e))},T=e=>{k(e),l(e)},F=()=>{k(""),l("")};return t(Gh,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),k(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Zh,{"aria-hidden":!0,children:Pu(t).format("ddd")},`week-day-${r}`))),x.map(((t,o)=>e(Qh,{role:"row","aria-label":`Week ${o+1}`,onMouseLeave:F,children:t.map(((t,o)=>e(mg,{date:t,calendarDate:r,selectedDate:i,hoverDate:S,focusDate:$,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:h,showActiveMonthDaysOnly:g,onSelect:D,onHover:E,onFocus:T,setFocusCell:y,tabIndex:Pu(t).isSame(w,"day")?0:-1},`day-${o}`)))},o)))]})},vg=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,focusDate:o,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:c,onSelect:d,onHover:u,onFocus:h,setFocusCell:g,tabIndex:p})=>{const f=Zu.isDisabledDay(t,l,a,s),m=!f||c,{start:b,end:v}=Zu.getWeekStartEnd(nh.toDayjs(n)),{start:y,end:x}=Zu.getWeekStartEnd(nh.toDayjs(i)),{start:w,end:$}=Zu.getWeekStartEnd(t),C=t.isSame(w,"day"),S=n&&t.isBetween(b,v,"day","[]"),k=i&&t.isBetween(y,x,"day","[]"),D=S&&t.isSame(b)||k&&t.isSame(y),E=S&&t.isSame(v)||k&&t.isSame(x),T=`From ${Pu(w).format("D MMMM")} to ${Pu($).format("D MMMM")}, ${f?"Unavailable":"Available"}`,F=()=>{d(t,!m)},O={date:t,calendarDate:r,disabled:f,interactive:m,currentDateIndicator:!0,onSelect:F,onHover:()=>{u(t.format("YYYY-MM-DD"),!m)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(m&&F());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),g(r.format("YYYY-MM-DD")))})(e)},focusDate:Pu(o),tabIndex:p,label:T,ariaHidden:!C||void 0,role:C?"button":"none"};return e(dg,Object.assign({},O,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":Pu().isSame(t,"day")&&!f&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return S&&k?(t="selected-hover-outline",r="selected-hover"):S?(t="selected-outline",r="selected"):k&&(t="hover",r="hover"),t&&(e.labelType=r,D?e.circleLeft=t:e.bgLeft=t,E?e.circleRight=t:e.bgRight=t),e})()))},yg=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:s,onHover:l,minDate:c,maxDate:d,allowDisabledSelection:h,setCalendarDate:g})=>{const f=o(null);u((()=>{if(f.current){const e=f.current;f.current=null,$(e)}}),[r]);const b=p((()=>i&&Pu(i).isSame(r,"month")?Pu(i):Pu().isSame(r,"month")?Pu().startOf("week"):c&&r.isSame(Pu(c),"month")?Pu(c):Pu(r).startOf("month")),[i,r,c]),v=e=>{const t=Pu(e);if(Zu.isWithinRange(t,c?Pu(c):void 0,d?Pu(d):void 0)){if(!t.isSame(r,"month"))return null==g||g(e),void(f.current=e);$(e)}},y=m((()=>Zu.generateDays(r)),[r]),x=m((()=>b()),[b]),[w,$]=a(""),[C,S]=a(""),k=(e,t)=>{if(t&&!h)return;const r=e.startOf("week");s(r),e&&!Pu(e).isSame(r,"month")&&S("")},D=(e,t)=>{t&&!h||(S(e),l(e))},E=e=>{S(e),l(e)},T=()=>{S(""),l("")};return t(Gh,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||($(""),S(""),l(""))},"aria-label":"Week selection",children:[y[0].map(((t,r)=>e(Zh,{"aria-hidden":!0,children:Pu(t).format("ddd")},`week-day-${r}`))),y.map(((t,o)=>e(Qh,{onMouseLeave:T,role:"group",children:t.map(((t,o)=>e(vg,{date:t,calendarDate:r,selectedDate:i,hoverDate:C,focusDate:w,minDate:c,maxDate:d,disabledDates:n,allowDisabledSelection:h,onSelect:k,onHover:D,onFocus:E,setFocusCell:v,tabIndex:Pu(t).isSame(x,"day")?0:-1},`day-${o}`)))},o)))]})},xg=i.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:i,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:g,allowDisabledSelection:p,selectWithinRange:f=!0,initialCalendarDate:m,numberOfDays:b,showActiveMonthDaysOnly:y=!1,isFocusable:x=!1},w)=>{const $=o(null),C=o(void 0),S=o(null);v(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=S.current)||void 0===t?void 0:t.contains(e))||!1}})));const k=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),E(r)},D=e=>{T(e)},E=e=>{n&&n(e)},T=e=>{i&&i(e)},F=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(fg,{ref:S,children:e(qh,{ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:h,maxDate:g,selectWithinRange:f,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),F(e)),C.current=e},initialCalendarDate:m,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const i=null===(n=$.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return e(yg,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,onSelect:k,onHover:D,setCalendarDate:i});case"fixed-range":return e(pg,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,onSelect:k,onHover:D,numberOfDays:b,setCalendarDate:i});case"single":return e(bg,{calendarDate:r,disabledDates:t,selectedDate:s,minDate:h,maxDate:g,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:k,onHover:D,setCalendarDate:i});default:return e(hg,{calendarDate:r,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:g,isNewSelection:f,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:k,onHover:D,setCalendarDate:i})}})(r)})})})),wg=i.forwardRef(((t,r)=>{var{width:n}=t,i=Vo(t,["width"]);return e(Dh,{$width:n,"data-testid":"calendar-dropdown",children:e(xg,Object.assign({ref:r},i))})})),$g=t=>{var{className:r,styleType:n="bordered",value:i,onSelect:o}=t,s=Vo(t,["className","styleType","value","onSelect"]);const[l,c]=a(i);return u((()=>{c(i)}),[i]),e(Cg,{className:r,$hasBorder:"bordered"===n,children:e(xg,Object.assign({value:l,initialCalendarDate:l,isFocusable:!0,onSelect:e=>{c(e),null==o||o(e)}},s))})},Cg=M.div`
    --vertical-inset: ${jc["spacing-24"]};
    --horizontal-inset: ${jc["spacing-32"]};
    --header-bottom-spacing: ${jc["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return _`
                border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
                border-radius: ${zc.lg};
                overflow: hidden;
            `}}
`,Sg=M.div`
    border-radius: ${zc.md};
    background: ${Ic.bg};
    padding: ${jc["spacing-16"]} ${jc["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,kg=t=>{var{children:r}=t,n=Vo(t,["children"]);const i=n["data-testid"]||"card";return e(Sg,Object.assign({},n,{"data-testid":i,children:"string"==typeof r?e(ud.BodyBL,{children:r}):r}))},Dg=B`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Eg=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>_`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,Tg=_`
    animation: ${Bc["duration-150"]} ${Bc["ease-default"]} ${Dg};
    width: 100%;
    height: 100%;
    transition: color ${Bc["duration-150"]} ${Bc["ease-default"]};
`,Fg=M(V)`
    ${Tg}
    color: ${Ic["icon-primary-subtlest"]};
`,Og=M(U)`
    ${Tg}
    color: ${Ic["icon-disabled-subtle"]};
`,Mg=M(K)`
    ${Tg}
    color: ${e=>e.$disabled?Ic["icon-disabled-subtle"](e):Ic["icon-selected"](e)};
`,_g=M(X)`
    ${Tg}
    color: ${e=>e.$disabled?Ic["icon-disabled-subtle"](e):Ic["icon-selected"](e)};
`,Ig=M.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Fg},
        &:hover
        + ${Mg},
        &:hover
        + ${_g} {
        color: ${e=>!e.disabled&&Ic["icon-hover"](e)};
    }
`,Ag=r=>{var{className:n,checked:i,disabled:a,indeterminate:s,onChange:l,onKeyPress:c,displaySize:d="default"}=r,h=Vo(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const g=o(null);u((()=>{g.current&&(g.current.indeterminate=null!=s&&s)}),[s]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(Eg,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,$displaySize:d,$disabled:a,$unchecked:!(s||i||a),children:[e(Ig,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:g,tabIndex:-1,onChange:p,disabled:a},h)),s?e(_g,{$disabled:a,"data-testid":"indeterminate"}):i?e(Mg,{$disabled:a,"data-testid":"checkmark"}):a?e(Og,{"data-testid":"empty-disabled-checkbox"}):e(Fg,{$disabled:a,"data-testid":"empty-checkbox"})]})};var Bg=ra,Rg=/\s/;var jg=function(e){for(var t=e.length;t--&&Rg.test(e.charAt(t)););return t},zg=/^\s+/;var Pg=function(e){return e?e.slice(0,jg(e)+1).replace(zg,""):e},Lg=Sa,Ng=va,Hg=/^[-+]0x[0-9a-f]+$/i,Wg=/^0b[01]+$/i,Yg=/^0o[0-7]+$/i,Vg=parseInt;var Ug=function(e){if("number"==typeof e)return e;if(Ng(e))return NaN;if(Lg(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Lg(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Pg(e);var r=Wg.test(e);return r||Yg.test(e)?Vg(e.slice(2),r?2:8):Hg.test(e)?NaN:+e},Kg=Sa,Xg=function(){return Bg.Date.now()},qg=Ug,Gg=Math.max,Zg=Math.min;var Qg=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function f(){var e=Xg();if(p(e))return m(e);s=setTimeout(f,function(e){var r=t-(e-l);return u?Zg(r,o-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?g(e):(n=i=void 0,a)}function b(){var e=Xg(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(f,t),d?g(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),g(l)}return void 0===s&&(s=setTimeout(f,t)),a}return t=qg(t)||0,Kg(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Gg(qg(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Xg())},b},Jg=Zo(Qg),ep=Qg,tp=Sa;var rp,np,ip=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return tp(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),ep(e,t,{leading:n,maxWait:t,trailing:i})},op=Zo(ip),ap=new Map,sp=new WeakMap,lp=0;function cp(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(sp.has(e)||(lp+=1,sp.set(e,lp.toString())),sp.get(e)):"0"}(e.root):e[t]}`)).toString()}function dp(e,t,r={},n=undefined){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=cp(e);let r=ap.get(t);if(!r){const n=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},ap.set(t,r)}return r}(r),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),ap.delete(i))}}function up({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var u;const[h,g]=n.useState(null),p=n.useRef(),[f,m]=n.useState({inView:!!l,entry:void 0});p.current=d,n.useEffect((()=>{if(s||!h)return;let n;return n=dp(h,((e,t)=>{m({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&a&&n&&(n(),n=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:r,delay:t},c),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,h,o,i,a,s,r,c,t]);const b=null==(u=f.entry)?void 0:u.target,v=n.useRef();h||!b||a||s||v.current===b||(v.current=b,m({inView:!!l,entry:void 0}));const y=[g,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}!function(e){e.AM="AM",e.PM="PM"}(rp||(rp={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,i]=e.split(":"),o=parseInt(n,10),a=parseInt(i,10);if(isNaN(o)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*o+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=Pu(e,n),o=Pu(t,n);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(r)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:rp.AM};if(!t)return r;try{if("24hr"===e){const n=pp(t,e);r.minute=ah.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=rp.AM,r.hour=0===i?"12":ah.padValue(i.toString())):(r.period=rp.PM,r.hour=12===i?i.toString():ah.padValue((i-12).toString()))}else{const{hour:n,minute:i,period:o=""}=pp(t,e);r.hour=ah.padValue(n),r.minute=ah.padValue(i),r.period="am"===o.toLowerCase()?rp.AM:rp.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?ah.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return ah.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?ah.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?ah.padValue(n.toString()):13===n?ah.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===rp.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return ah.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:i=""}=pp(e,t),o=ah.padValue(r);let a=`${o}:${ah.padValue(n)}`;return"12hr"===t?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&o<12&&(o+=12),"am"===r&&12===o&&(o=0),fp(o,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const o=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=fp(e,n,t);o.push(r)}else{const t=fp(e,n);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const o=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),fp(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return fp(i,o,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",o=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<o)o=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&12!==o&&(o+=12),"am"===r&&12===o&&(o=0),60*o+i}}(np||(np={}));const hp=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},gp=e=>{const t=parseInt(e);return t>=0&&t<=59},pp=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!hp(r[0],t)||!gp(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!hp(r[0],t)||!gp(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},fp=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,mp=M.div`
    width: 100%;
`,bp=M.div`
    ${Ac["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${jc["spacing-8"]} ${jc["spacing-16"]};
    border-radius: ${zc.sm};
    color: ${Ic["text-primary"]};
    border: ${Rc["width-010"]} ${Rc.solid};
    border-color: ${Ic["border-primary"]};
    background-color: ${Ic.bg};

    ${Lc.MaxWidth.sm} {
        padding: ${jc["spacing-16"]};
    }

    ${e=>{if(e.$warn)return _`
                color: ${Ic["text-error"]};
                border-color: ${Ic["border-error"]};
            `}}
`,vp=M(bp)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,yp=M(bp)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:r,$right:n,$warn:i}=e;return _`
            /* style object will be converted to px */
            ${{top:t,left:r,right:n}}

            box-shadow: 0px 0px 4px 1px rgb(from ${i?Ic["border-error"]:Ic["border-primary-subtle"]} r g b / 50%);

            ${Lc.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,xp=M.div`
    font-weight: ${Ac.Spec["weight-bold"]};
    margin-left: ${jc["spacing-8"]};
    margin-right: ${jc["spacing-24"]};

    ${Lc.MaxWidth.sm} {
        margin-right: ${jc["spacing-48"]};
    }
`,wp=M.div`
    font-weight: ${Ac.Spec["weight-semibold"]};
    margin-left: auto;
`,$p=M(q)`
    color: ${e=>e.$warn?Ic["icon-error"]:Ic["icon-primary"]};
`,Cp=(e,t)=>t||Date.now()+1e3*(null!=e?e:0),Sp=e=>Math.max(Math.round(e/1e3),0),kp=n=>{var{className:i,align:s="right",timer:l,timestamp:c,notifyTimer:d,offset:h,mobileOffset:g,show:p,fixed:f=!0,"data-testid":m,onFinish:b,onNotify:v,onTick:y}=n,x=Vo(n,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const w=o(null),$=o(!1),[C,S]=a(0),[k,D]=a(0),[E,T]=a(0),[F,O]=a(!1),[M]=((e,t,r)=>{const[n,i]=a((()=>{const r=Cp(e,t)-Date.now();return Sp(r)}));u((()=>{if(!r)return;const n=Cp(e,t),i=o(n);return()=>clearTimeout(i)}),[t,r,e]);const o=e=>{const t=()=>{const r=e-Date.now(),n=r%1e3,o=Sp(r);if(i(o),0!==o)return setTimeout(t,n>500?n:n+1e3)};return t()};return[n]})(l,c,F),{ref:_,inView:I}=up({threshold:1,rootMargin:-1*C+"px 0px 0px 0px",initialInView:!0}),A=!f||I,B="number"==typeof d&&M<=d,j=R(),z=Pc["sm-max"]({theme:j}),P=Cu.useMediaQuery({maxWidth:z});u((()=>{O(p)}),[p]),u((()=>{0===M?W():"number"==typeof d&&M<=d&&(N(),H())}),[M]),u((()=>{const e=function(){var e,t;const r=null!==(e=null==h?void 0:h.top)&&void 0!==e?e:168,n=null!==(t=null==g?void 0:g.top)&&void 0!==t?t:80,i=P?n:r;return i}();S(e)}),[P,null==h?void 0:h.top,null==g?void 0:g.top]),u((()=>{if(w.current){const e=op(L,300);return L(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[w.current]),u((()=>{$.current=!1}),[l,p]);const L=()=>{if(!w.current)return;const e=w.current.getBoundingClientRect();T(e.x),D(e.right)},N=()=>{y&&y(M)},H=()=>{v&&!$.current&&($.current=!0,v())},W=()=>{O(!1),b&&b()};const Y=()=>{const{minutes:n,seconds:i}=np.toMinutesSeconds(M),o=1!==n?"mins":"min",a=1!==i?"secs":"sec";return t(r,{children:[e($p,{$warn:B}),e(xp,{children:"Time left:"}),t(wp,{children:[n," ",o," ",String(i).padStart(2,"0")," ",a]})]})};return F||0===M?t(mp,Object.assign({className:i},x,{children:[e("div",{ref:_}),e(vp,{"data-testid":m,"data-id":"countdown-wrapper",ref:w,inert:Yo(!A),$visible:A,$warn:B,children:Y()}),w.current&&!A&&(()=>{var t,r;const n=null!==(t=null==h?void 0:h.left)&&void 0!==t?t:"left"===s?E:void 0,i=null!==(r=null==h?void 0:h.right)&&void 0!==r?r:"right"===s?Math.floor(document.body.clientWidth-k):void 0;return e(yp,{"data-testid":m,"data-id":"fixed-countdown-wrapper",$warn:B,$top:C,$left:n,$right:i,children:Y()})})()]})):e(r,{})},Dp=n=>i=>{switch(n){case"maintenance":return t(r,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const n=i,o=Math.floor(n.secondsLeft/60),a=n.secondsLeft%60;return t(r,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",o," minutes"," ",a," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var Ep;!function(e){e.imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:o,height:a}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${Pc["sm-max"]({theme:t})}px) 400px, (max-width: ${Pc["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}}}(Ep||(Ep={}));const{imgAttributeHelper:Tp}=Ep,Fp={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},Op={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},Mp=Object.assign(Object.assign({},Fp),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),_p=Object.assign(Object.assign({},Fp),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Ip=(e,t)=>new Map([["400",{img:Tp(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Tp(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Tp(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Tp(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Tp(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Tp(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Tp(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Tp(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Tp(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Tp(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Tp(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Tp(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Tp(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:Dp("inactivity")}],["maintenance",{img:Tp(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:Dp("maintenance")}],["no-item-found",{img:Tp(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Tp(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Tp(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Tp(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Tp(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Tp(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),Ap=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Bp=M.img`
    position: relative;
    width: 400px;
    height: auto;

    ${Lc.MaxWidth.sm} {
        width: 320px;
    }

    ${Lc.MaxWidth.xs} {
        width: 288px;
    }

    ${Lc.MaxWidth.xxs} {
        width: 240px;
    }
`,Rp=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,jp=M(ud.HeadingMD)`
    margin: ${jc["spacing-32"]} 0 ${jc["spacing-16"]};
    text-align: center;
`,zp=M.div`
    color: ${Ic.text};
    text-align: center;

    ${Jd({textSize:"body-baseline"})}
`,Pp=M(Kd.Default)`
    margin: ${jc["spacing-32"]} auto 0;
    width: 21rem;

    ${Lc.MaxWidth.sm} {
        width: 100%;
    }
`,Lp=r=>{var{type:n,img:i,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=r,u=Vo(r,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=R(),g=((e,t,r)=>{switch(t){case"bookingsg":return Ip(Op,r).get(e);case"ccube":return Ip(Mp,r).get(e);case"mylegacy":return Ip(_p,r).get(e);default:return Ip(Fp,r).get(e)}})(n,d||(h||Gc).resourceScheme,h),p=u["data-testid"]||"error-display",f=()=>{var e,t;switch(n){case"maintenance":{const t=l;return l&&t.dateString?null===(e=null==g?void 0:g.renderDescription)||void 0===e?void 0:e.call(g,t):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(t=null==g?void 0:g.renderDescription)||void 0===t?void 0:t.call(g,e):a||void 0}default:return a||void 0}};if(!g)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},g),i&&{img:i}),o&&{title:o}),f()&&{description:f()});return t(Ap,Object.assign({},u,{"data-testid":p,children:[e(Bp,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?t(Rp,{children:[m.title&&("string"==typeof m.title?e(jp,{"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold",children:m.title}):m.title),m.description&&e(zp,{"data-testid":`${p}--description`,"data-id":"error-display-description",children:"string"==typeof m.description?e("p",{children:m.description}):m.description})]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e(Pp,Object.assign({},t))})()]}))},Np=_`
    outline-offset: -1px;
    outline: ${Rc["width-020"]} ${Rc.solid} ${Ic["border-focus"]};
`,Hp=_`
    outline-color: ${Ic["border-focus"]};
`,Wp=_`
    outline-color: ${Ic["border-disabled"]};
`,Yp=_`
    outline-color: ${Ic["border-error-focus"]};
`,Vp=M.div`
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};
    background: ${Ic.bg};

    :focus-within {
        ${Np}
    }
    ${e=>e.$focused&&Np}

    ${e=>e.$readOnly?_`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Hp}
                }
                ${e.$focused&&Hp}
            `:e.$disabled?_`
                background: ${Ic["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Wp}
                }
                ${e.$focused&&Wp}
            `:e.$error?_`
                border-color: ${Ic["border-error"]};

                :focus-within {
                    ${Yp}
                }
                ${e.$focused&&Yp}
            `:void 0}
`,Up=M(Vp)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${jc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Kp=M.input`
    ${e=>"small"===e.$variant?Ac["body-md-regular"]:Ac["body-baseline-regular"]}
    color: ${Ic.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Ic["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ic["text-subtler"]};
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
`,Xp=M.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Rc["width-010"]} ${Rc.solid}
            ${Ic["border-focus"]};
        border-radius: ${zc.sm};
    }
`,qp=Ic.border,Gp=Ic.text,Zp=M.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${Rc["width-010"]} ${Rc.solid} ${qp};
    border-radius: ${zc.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Qp=M.div`
    flex: 1;
`,Jp=M.table`
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

    ${e=>{if(e.$stickyHeader)return _`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,ef=M.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${Rc["width-010"]} ${Rc.solid} ${qp}`:"none"};
        }
    }
`,tf=M.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return _`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return _`
                position: sticky;
                left: 0;
            `}};
`,rf=M(Xp)`
    ${Ac["body-md-semibold"]}
    cursor: pointer;
    color: ${Ic["text-primary"]};
    transition: ${Bc["duration-150"]} ${Bc["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${Ic["text-hover"]};
    }
`,nf=M.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&_`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${zc.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${Rc["width-010"]} ${Rc.solid} ${qp};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${Rc["width-010"]} ${Rc.solid} ${qp};
    border-radius: ${zc.none} ${zc.none} ${zc.sm}
        ${zc.sm};
    background-color: ${Ic["bg-selected"]};
    transition: all 300ms ease;
`,of=M.tr`
    background-color: ${Ic["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${qp};
`,af=M.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Gp};
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${qp};
    ${e=>{if(e.$isCheckbox)return _`
                width: 4rem;
            `}};
`,sf=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Gp};
        margin-left: 0.5rem;
    }
`,lf=M.tr`
    background-color: ${e=>e.$isSelected?_`
                ${Ic["bg-selected"]};
            `:e.$alternating?_`
                ${Ic["bg-strong"]};
            `:_`
                ${Ic.bg};
            `};
    border-top: ${Rc["width-010"]} ${Rc.solid} ${qp};
    &:hover {
        ${e=>{if(e.$isSelectable)return _`
                    background-color: ${Ic["bg-hover-strong"]};
                `}};
    }
`,cf=M.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Gp};
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${qp};
`,df=M(ud.BodyBL)`
    ${sd(2)}
    text-overflow: ellipsis;
`,uf=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,hf=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,gf=M(ud.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,pf=M.td`
    padding: 4rem 0;
`,ff=n=>{var{id:i,headers:s,rows:l,className:c,sortIndicators:d,alternatingRows:h,loadState:g="success",enableMultiSelect:f,selectedIds:m,disabledIds:b,enableActionBar:v,enableSelectAll:y,enableStickyHeader:x,emptyView:w,actionBarContent:$,renderCustomEmptyView:C,onHeaderClick:S,onSelect:k,onSelectAll:D,onClearSelectionClick:E}=n,T=Vo(n,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const F=o(null),O=o(null),M=o(null),_=o(null),I=o(null),[A,B]=a(!1),[R,j]=a(!1),[z,P]=a(!1),[L,N]=a(!1),[H,W]=a(!1),{ref:Y,inView:V}=up(),U=p((()=>{if(!I.current||!_.current)return;const e=I.current.scrollHeight>I.current.clientHeight;B(e),e?_.current.style.transform="translateY(0)":re()}),[]);u((()=>{U()}),[]),lr({onResize:U});lh("scroll",(()=>{requestAnimationFrame((()=>{A?te():re()})),I.current&&P(I.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),u((()=>{ne()}),[l]);const K=()=>(null==m?void 0:m.length)===(null==l?void 0:l.length),X=e=>!!(null==m?void 0:m.includes(e)),q=e=>!!h&&e%2==1,Q=e=>!!(null==b?void 0:b.includes(e)),J=e=>{if(T["data-testid"])return`${T["data-testid"]}-${e}`},ee=()=>s.length+(f?1:0),te=()=>{if(!I.current)return;const e=I.current.getBoundingClientRect();N(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},re=()=>{if(!(F.current&&O.current&&I.current&&_.current&&M.current))return;const e=O.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=F.current.getBoundingClientRect().height-M.current.clientHeight-32,n=Math.min(t,r);_.current.style.transform=`translateY(-${n}px)`}else _.current.style.transform="translateY(0)"},ne=()=>{F.current&&I.current&&W(F.current.clientHeight+(v?56:0)<I.current.clientHeight)},ie=r=>{const{fieldKey:n,label:i,clickable:o=!1,style:a}="string"==typeof r?{fieldKey:r,label:r,style:void 0}:r;return e(af,{"data-testid":J(`header-${n}`),$clickable:o,onClick:()=>o&&(null==S?void 0:S(n)),style:a,$isCheckbox:!1,children:t(sf,{children:["string"==typeof i?e(ud.BodyBL,{weight:"bold",children:i}):i,oe(n)]})},n)},oe=t=>{const n=null==d?void 0:d[t];return n?"asc"===n?e(G,{"data-testid":J(`header-${t}-arrowup`)}):e(Z,{"data-testid":J(`header-${t}-arrowdown`)}):e(r,{})},ae=()=>e(af,{"data-testid":J("header-selection"),$clickable:!1,$isCheckbox:!0,children:e(uf,{children:y&&e(Ag,{checked:K(),indeterminate:!!m&&0!==m.length&&!K(),onClick:()=>{D&&D(K())}})})}),se=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=r.id.toString(),a=r[i],s=`${o}-${i}`;return e(cf,{"data-testid":J(`row-${s}`),style:n,$isCheckbox:!1,children:"string"==typeof a||"number"==typeof a?e(df,{children:a}):"function"==typeof a?a(r,{isSelected:X(o)}):a},s)},le=t=>e(cf,{"data-testid":J(`row-${t}-selection`),$isCheckbox:!0,children:e(uf,{children:e(Ag,{checked:X(t),onClick:()=>{k&&k(t,!X(t))},disabled:Q(t)})})}),ce=()=>e(Lp,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(gf,{weight:"bold",children:w.title}):w.title:e(gf,{weight:"bold",children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(Zp,{id:i||"table-wrapper","data-testid":T["data-testid"]||"table",className:c,ref:I,onScroll:()=>{A&&I.current&&j(I.current.scrollTop+I.current.clientHeight>=I.current.scrollHeight)},children:[e(Qp,{children:t(Jp,{$end:z,$scrollable:A,ref:F,$stickyHeader:x,children:[e("thead",{ref:M,children:t(of,{children:[f&&ae(),s.map(ie)]})}),e(ef,{$showLastRowBottomBorder:H,children:"success"===g?!l||l.length<1?e("tr",{children:e(pf,{colSpan:ee(),children:C?C():ce()})}):e(r,{children:null==l?void 0:l.map(((e,r)=>t(lf,{"data-testid":J(`row-${e.id.toString()}`),$alternating:q(r),$isSelectable:f,$isSelected:X(e.id.toString()),children:[f&&le(e.id.toString()),s.map((t=>se(t,e)))]},e.id.toString())))}):e("tr",{children:e("td",{colSpan:ee(),children:e(hf,{children:"loading"===g&&e(bu,{})})})})})]})}),v&&m&&m.length>0&&(()=>{var r,n,i,o;const a=null!==(r=null==m?void 0:m.length)&&void 0!==r?r:0;return e(tf,{ref:_,$fixed:L,$left:null===(i=null===(n=null==F?void 0:F.current)||void 0===n?void 0:n.getBoundingClientRect())||void 0===i?void 0:i.left,$width:null===(o=null==F?void 0:F.current)||void 0===o?void 0:o.clientWidth,children:t(nf,{$float:(A?!R:!V)||L,$scrollable:A,children:[e(ud.BodyMD,{weight:"semibold",children:`${a} item${a>1?"s":""} selected`}),e(rf,{type:"button",onClick:E,children:"Clear selection"}),$]})})})(),e("div",{ref:e=>{O.current=e,Y(e)}})]})},mf=e=>"small"===e?2.5:3,bf=M.div`
    position: relative;
    width: 100%;
    ${e=>{const t=mf(e.$variant);return _`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,vf=_`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${jc["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>mf(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${zc.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Ic["border-focus"]};
    }
`,yf=M.button`
    ${vf}
    cursor: pointer;
`,xf=M.div`
    ${vf}
`,wf=B`
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
`,$f=M.div`
    position: relative;
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};
    background: ${Ic.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Ic["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Ic["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?_`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:_`
                animation: ${wf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?_`
                background: ${Ic["bg-disabled"]};

                ${yf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Ic.border};
                    box-shadow: none;
                }
            `:e.$readOnly?_`
                border: none;
                background: transparent !important;

                ${yf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?_`
                border-color: ${Ic["border-error"]};

                :focus-within {
                    border-color: ${Ic["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Ic["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;M.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Bc["duration-250"]} ${Bc["ease-default"]};
    margin-left: ${jc["spacing-16"]};
`,M(ve)`
    color: ${Ic.icon};
`;const Cf=M.div`
    height: 1px;
    background: ${Ic.border};
    margin: 0 ${jc["spacing-8"]};
`,Sf=M.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return _`
                color: ${Ic["text-disabled"]};
            `}}
`,kf=M.div`
    ${e=>"small"===e.$variant?Ac["body-md-regular"]:Ac["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return _`
                    ${sd(1)}
                `}}
    overflow: hidden;
`,Df=M(kf)`
    color: ${Ic["text-subtler"]};
`,Ef=({children:t,show:r,error:n,disabled:i,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=o(null);return lh("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;r&&s()}}),"document"),e(bf,{className:c,$variant:d,children:e($f,{ref:u,error:n&&!r,disabled:i,$readOnly:l,expanded:r,"data-testid":a,children:t})})};var Tf;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Tf||(Tf={}));const Ff=()=>{const[e,t]=a(void 0),r=we();return u((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Tf.Change,e),r.events.emit(Tf.Ready),()=>r.events.off(Tf.Change,e)}),[r]),e},Of=M.div`
    display: flex;
    flex-direction: column;
`,Mf=e=>"right"===e?"bottom-end":"bottom-start",_f=({enabled:n,isOpen:i,onOpen:a,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:g=0,alignment:p="left",fitAvailableHeight:f,rootNode:m})=>{var b;const v=R(),y=Pc["sm-max"]({theme:v}),x=o(null),w=o(null),{width:$=0}=lr({targetRef:x,handleHeight:!1}),C={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<y;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:S,floatingStyles:k,context:D}=$e({open:i,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!i?null==a||a():!e&&i&&(null==s||s(r))},whileElementsMounted:Ce,placement:Mf(p),middleware:[Se(g),ke(),De({limiter:Ee()}),Te({apply({availableHeight:e}){w.current&&Object.assign(w.current.style,{maxHeight:f?`${e}px`:void 0,overflowY:f?"hidden":void 0})}}),C]}),E=Ff(),{isMounted:T,styles:F}=Fe(D,{initial:{opacity:0},open:{opacity:1},duration:300}),O=Oe(D,{enabled:n,toggle:h}),M=Me(D,{enabled:n}),{getReferenceProps:_,getFloatingProps:I}=_e([O,M]);return t(r,{children:[e("div",Object.assign({ref:e=>{x.current=e,S.setReference(e)}},_(),{children:c()})),T&&e(Ie,{root:m,children:e(Ae,{context:D,modal:!1,initialFocus:w,returnFocus:!1,children:e("div",Object.assign({ref:S.setFloating,style:Object.assign(Object.assign({},k),{zIndex:null!==(b=null!=u?u:E)&&void 0!==b?b:50})},I(),{children:e(Of,{ref:w,style:Object.assign({},F),inert:Yo(F.opacity<1),children:d({elementWidth:$})})}))})})]})},If=M.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Af=M.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return _`
                ${Bf}, ${Pf} {
                    color: ${Ic["text-subtler"]};
                }
            `}}
`,Bf=M(Kp)`
    background: transparent;
    text-align: center;
`,Rf=M(Bf)`
    width: 2rem;
    margin-right: ${jc["spacing-4"]};
`,jf=M(Bf)`
    width: 2.5rem;
`,zf=M(Bf)`
    width: 3rem;
    margin-left: ${jc["spacing-4"]};
`,Pf=M.span`
    ${Ac["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return _`
                color: ${Ic.text};
            `}}
`,Lf=M.div`
    ${Ac["body-baseline-regular"]}
    background-color: ${Ic.bg};
    color: ${Ic["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?_`
                background-color: ${Ic["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?_`
                display: none;
            `:void 0}
`;Pu.extend(Nu);const Nf=i.forwardRef((({disabled:r,readOnly:n,names:i,value:s,focused:l,hoverValue:c,placeholder:d,label:h,onChange:g,onFocus:p,onBlur:f,hideInputKeyboard:m,inputLabels:b=["Date","Month","Year"]},y)=>{const x=m?"none":"numeric",[w,$,C]=gh(""),[S,k,D]=gh(""),[E,T,F]=gh(""),[O,M]=a("none"),[_,I]=a(!1),A=o(null),B=o(null),R=o(null),j=o(null),[z,P,L]=U(c);u((()=>{var e;const[t="",r="",n=""]=U(s);$(t),k(r),T(n),t||r||n||!A.current||!A.current.contains(document.activeElement)||null===(e=B.current)||void 0===e||e.focus()}),[s]),u((()=>{var e;l||M("none"),l&&(I(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))}),[l]),v(y,(()=>({ref:A,resetPlaceholder(){I(!1)},resetInput(){const[e="",t="",r=""]=U(s);$(e),k(t),T(r)},focusYearRef(){var e;null===(e=j.current)||void 0===e||e.focus()}})),[$,k,T,s]);const N=e=>{var t;e.preventDefault(),null===(t=B.current)||void 0===t||t.focus()},H=e=>{e.target.select();const t=e.target.name;M(t)},W=e=>{const[t,r,n]=i,o={[t]:C.current,[r]:D.current,[n]:F.current},a=e.target.name,s=o[a],l=a!==n?ah.padValue(s,!0):s;switch(a){case t:o[t]=l,$(l);break;case r:o[r]=l,k(l)}const c=`${o[n]}-${o[r]}-${o[t]}`,d=Pu(c,"YYYY-MM-DD",!0).isValid(),u=!o[t]&&!o[r]&&!o[n];d&&s!==l&&g(c),A.current&&!A.current.contains(e.relatedTarget)&&(M("none"),null==f||f(u||d))},Y=e=>{var t,r;if(c)return;const n=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),a={day:w,month:S,year:E};switch(n){case i[0]:a.day=o,$(o),2===o.length&&(null===(t=R.current)||void 0===t||t.focus());break;case i[1]:a.month=o,k(o),2===o.length&&(null===(r=j.current)||void 0===r||r.focus());break;case i[2]:a.year=o,T(o)}if(!a.day&&!a.month&&!a.year)return void g("");const s=`${a.year}-${a.month}-${a.day}`;Pu(s,"YYYY-MM-DD",!0).isValid()&&g(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(O===i[1]&&0===S.length&&(null===(t=B.current)||void 0===t||t.focus()),O===i[2]&&0===E.length&&(null===(r=R.current)||void 0===r||r.focus()))};function U(e){if(e){const t=Pu(new Date(e));return t.isValid()?[ah.padValue(t.date().toString()),ah.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(If,{role:"group","aria-label":h,onClick:()=>{var e;r||n||(I(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))},onFocus:e=>{r||(I(!0),l||null==p||p(e))},children:[t(Af,{ref:A,$hover:!!c,children:[e(Rf,{ref:B,name:i[0],maxLength:2,value:null!=z?z:w,onFocus:H,onBlur:W,onChange:Y,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":b[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==i[0]||n?"DD":""}),e(Pf,{$inactive:0===w.length,children:"/"}),e(jf,{ref:R,name:i[1],maxLength:2,value:null!=P?P:S,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":b[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==i[1]||n?"MM":""}),e(Pf,{$inactive:0===S.length,children:"/"}),e(zf,{ref:j,name:i[2],maxLength:4,value:null!=L?L:E,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":b[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==i[2]||n?"YYYY":""})]}),(()=>{if(!s&&!n&&d)return e(Lf,{$hide:_,$disabled:r,onMouseDown:N,children:d})})()]})})),Hf=M(Up)`
    height: 3rem;
`,Wf=t=>{var{minDate:r,maxDate:n,disabled:i,disabledDates:s,error:l,hideInputKeyboard:c,value:d,onChange:h,onFocus:g,onBlur:p,onYearMonthDisplayChange:f,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=Vo(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=a(ih.sanitizeInput(d)),[k,D]=a(ih.sanitizeInput(d)),[E,T]=a(void 0),[F,O]=a(!1),[M,_]=a(!1),I=o(null),A=o(null),B=o(null);u((()=>{const e=ih.sanitizeInput(d);S(e),D(e)}),[d]);const R=e=>{!y&&ih.isDateDisabled(e,{disabledDates:s,minDate:r,maxDate:n})||(D(e),m||(H(e),S(e),e&&O(!1)))},j=e=>{var t;D(e),m||(H(e),S(e),e&&(null===(t=A.current)||void 0===t||t.focusYearRef(),O(!1)),E&&T(void 0))},z=()=>{b||i||(O(!0),M||(_(!0),g&&g()))},P=e=>{var t,r,n;const i=e.relatedTarget,o=B.current&&B.current.contains(i),a=I.current&&I.current.contains(i),s=null===(r=null===(t=e.relatedTarget)||void 0===t?void 0:t.matches)||void 0===r?void 0:r.call(t,"[data-floating-ui-focus-guard]");(M&&!F&&!a||F&&!a&&!o&&!s)&&(null===(n=A.current)||void 0===n||n.resetInput(),D(C),_(!1),O(!1),W())},L=e=>{T(e)},N=e=>{var t,r;switch(e){case"reset":D(C);break;case"confirmed":S(k),H(k)}Pu(k,"YYYY-MM-DD",!0).isValid()?null===(t=A.current)||void 0===t||t.focusYearRef():null===(r=I.current)||void 0===r||r.focus(),O(!1)},H=e=>{h&&h(e)},W=()=>{p&&p()};return e(_f,{enabled:!b&&!i,isOpen:F,renderElement:()=>e(Hf,Object.assign({role:"group",tabIndex:0,ref:I,onBlur:P,onFocus:z,$disabled:i,$readOnly:b,$focused:M,$error:l,id:v,"data-testid":$["data-testid"],"aria-disabled":i},$,{children:e(Nf,{ref:A,disabled:i,onChange:R,readOnly:b,focused:F,names:["start-day","start-month","start-year"],value:k,hoverValue:E,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e(wg,{variant:"single",ref:B,initialCalendarDate:k,withButton:m,value:k,disabledDates:s,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:L,onSelect:j,onDismiss:N,onYearMonthDisplayChange:f,width:t,isFocusable:!b&&!i}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),D(C),O(!1),_(!1),W()},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=I.current)||void 0===t||t.focus(),D(C),O(!1)},customZIndex:x,offset:16,rootNode:w})},Yf=M.button`
    align-items: center;
    border-radius: ${zc.sm};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return _`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return _`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return _`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return _`
                    background-color: ${Ic.bg};
                    border: ${Rc["width-010"]} ${Rc.solid}
                        ${Ic["border-primary"]};
                    color: ${Ic["text-primary"]};

                    :hover {
                        background-color: ${Ic["bg-hover-neutral"]};
                    }
                `;case"light":return _`
                    background-color: ${Ic.bg};
                    border: ${Rc["width-010"]} ${Rc.solid}
                        ${Ic.border};
                    color: ${Ic["text-primary"]};

                    :hover {
                        background-color: ${Ic["bg-hover-neutral"]};
                    }
                `;default:return _`
                    background-color: ${Ic["bg-primary"]};
                    border: none;
                    color: ${Ic["text-inverse"]};

                    :hover {
                        background-color: ${Ic["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Ic["bg-disabled"]};
        border: ${Rc["width-010"]} ${Rc.solid}
            ${Ic["border-disabled"]};
        color: ${Ic["text-disabled"]};
        cursor: not-allowed;
    }
`,Vf=i.forwardRef(((t,r)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=Vo(t,["data-testid","styleType","children","sizeType","type"]);return e(Yf,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),Uf=M(Vf)`
    margin: ${jc["spacing-8"]};
`,Kf=M.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Ic["bg-strong"]};
    border-radius: ${zc.sm};
`,Xf=M(Kd.Default)`
    color: ${e=>e.$enableDateClick?Ic["text-primary"]:Ic.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${e=>{if(e.$enableDateClick)return _`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,qf=r=>{var{selectedDate:n,minDate:i,maxDate:o,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:c,onLeftArrowClick:d,onRightArrowClick:u,onCalendarDateSelect:h,dropdownRootNode:g}=r,p=Vo(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect","dropdownRootNode"]);const f=nh.toDayjs(n),m=nh.toDayjs(n).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),b=nh.isSame(n,Pu())&&c?"Today":f.format(l?"ddd":"dddd"),[v,y]=a(!1),x=e=>{h&&h(e),y(!v)},w=()=>{y(!1),d(n)},$=()=>{y(!1),u(n)};return e(_f,{enabled:!s,isOpen:v,renderElement:()=>t(Kf,Object.assign({},p,{children:[e(Uf,{"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!i&&(Zu.isDisabledDay(f,void 0,i)||nh.isSame(f,i)),"aria-label":"Previous day",onClick:w,styleType:"light",sizeType:"small",children:e(Th,{})}),e(Xf,{onClick:()=>!!h&&!s&&y(!v),$enableDateClick:!!h&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!h||s,children:`${m}, ${b}`}),e(Uf,{"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!o&&(Zu.isDisabledDay(f,void 0,void 0,o)||nh.isSame(f,o)),"aria-label":"Next day",onClick:$,styleType:"light",sizeType:"small",children:e(Fh,{})})]})),renderDropdown:({elementWidth:t})=>e(wg,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:o,onSelect:x,width:t}),onDismiss:()=>y(!1),onClose:()=>y(!1),offset:8,rootNode:g})},Gf=M.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return _`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${Ac.Spec["body-size-baseline"]} -
                            ${jc["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${jc["spacing-8"]};
                }
            `}}
`,Zf=M.div`
    width: 100%; // Force next flex item to break to next line
`,Qf=M.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Jf=M(Q)`
    color: ${Ic.icon};
    width: ${Ac.Spec["body-size-baseline"]};
    height: ${Ac.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${jc["spacing-8"]};
    align-self: center;
`,em=M.div`
    position: absolute;
    background: ${e=>e.$error?Ic["border-error-focus-strong"]:Ic["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${jc["spacing-8"]} - (${Ac.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Bc["duration-350"]} ${Bc["ease-standard"]},
        opacity ${Bc["duration-350"]} ${Bc["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return _`
                    opacity: 1;
                `;case"end":return _`
                    left: calc(50% + ${jc["spacing-16"]});
                    opacity: 1;
                `;case"none":return _`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return _`
                display: none;
            `}}
`,tm=({children:r,currentActive:n,error:i,className:o,wrap:a})=>{const[s,l]=r;return t(Gf,{className:o,$wrap:a,children:[e(Qf,{"data-id":"range-container-elem1-container",children:s}),e(Jf,{}),a&&e(Zf,{}),e(Qf,{"data-id":"range-container-elem2-container",children:l}),e(em,{"data-id":"range-container-indicator",$position:n,$error:i,$wrap:a})]})},rm=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},nm=M(Up)`
    ${e=>e.$wrap&&_`
            padding: ${jc["spacing-12"]} ${jc["spacing-16"]};
        `}
`,im=M.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&_`
            height: fit-content;
        `}
`,om={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},am=r=>{var{minDate:n,maxDate:i,disabled:s,disabledDates:l,error:c,hideInputKeyboard:d,value:h,valueEnd:g,onChange:f,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:x="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:k,zIndex:D,dropdownRootNode:E}=r,T=Vo(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[F,O]=a(),[M,_]=a(void 0),I="week"===x,A="fixed-range"===x,[B,R]=a(!1),[j,z]=a(!1),[{selectedStart:P,selectedEnd:L,currentFocus:N,calendarOpen:H,isStartDirty:W,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[i,o]=w(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&rm(r,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:om,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:I?"none":A?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=o(!1),X=o(null),q=o(null),G=o(null),Z=o(null),Q=(({maxWidth:e,targetRef:t})=>{const[r,n]=a(!1);return lr({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:X});u((()=>{U.resetRange({start:ih.sanitizeInput(h),end:ih.sanitizeInput(g)})}),[h,g]),u((()=>{"start"===N?O(P):"end"===N&&O(L)}),[N]);const J=e=>{var t,r,n;"Enter"!==e.code||y||(P&&L?(U.done({start:P,end:L}),null==f||f(P,L)):(U.dismiss(),null===(t=X.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=Z.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(pe(e))return void(K.current=!0);if(U.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(y||L||!Y||(U.resetRange({start:"",end:""}),null==f||f("","")));if(!L)return void U.focus("end");if(Pu(e).isAfter(L,"day"))U.reselectEnd();else{if(Y)return y?void 0:(U.done({start:e,end:L}),void(null==f||f(e,L)));U.focus("end")}},te=e=>{var t,r,n;if(pe(e))return void(K.current=!0);if(Pu(e).isBefore(P,"day"))return U.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),null===(r=q.current)||void 0===r||r.setCalendarDate(e),e){if(P)return y?void 0:(null===(n=Z.current)||void 0===n||n.focusYearRef(),U.done({start:P,end:e}),void(null==f||f(P,e)));U.focus("start")}else y||P||!W||(U.resetRange({start:"",end:""}),null==f||f("",""))},re=e=>{var t,r;if(pe(e))return void(K.current=!0);if(U.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(y?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==f||f("","")));const n=Pu(e).format("YYYY-MM-DD"),i=Pu(n).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(n),U.changeEnd(i),K.current=!1,y?void 0:(U.done({start:n,end:i}),null===(r=G.current)||void 0===r||r.focusYearRef(),void(null==f||f(n,i)))},ne=()=>{(I||A)&&z(!0),I&&R(!0),C||s||V||(U.focus("start"),null==m||m())},ie=e=>{var t,r,n,i;const o=e.relatedTarget,a=q.current&&q.current.contains(o),s=X.current&&X.current.contains(o),l=null===(r=null===(t=e.relatedTarget)||void 0===t?void 0:t.matches)||void 0===r?void 0:r.call(t,"[data-floating-ui-focus-guard]");(V&&!H&&!s||H&&!s&&!a&&!l)&&(U.blur(),z(!1),R(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(i=Z.current)||void 0===i||i.resetPlaceholder(),ge())},oe=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),V||null==m||m())},ae=()=>{if(I){const e=nh.toDayjs(P).startOf("week").format("YYYY-MM-DD");R(!0),z(!0),O(e)}},se=()=>{A&&(z(!0),O(P))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},ce=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=Z.current)||void 0===t||t.resetInput())},de=e=>{switch(x){case"week":(e=>{var t;const r=Pu(e).startOf("week").format("YYYY-MM-DD"),n=Pu(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(n),K.current=!1,!y)null===(t=Z.current)||void 0===t||t.focusYearRef(),U.done({start:r,end:n}),null==f||f(r,n)})(e);break;case"fixed-range":re(e);break;default:"start"===N?ee(e):"end"===N&&te(e)}},ue=e=>{var t,r,n;switch(null===(t=X.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":if(U.done({start:P,end:L}),null==f||f(P,L),I)break;fe(P,L)&&("range"===x?null===(r=Z.current)||void 0===r||r.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},he=e=>{_(e)},ge=()=>{b&&b()},pe=e=>!k&&e&&ih.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:i}),fe=(e,t)=>!(!e||!t)&&Pu(e).isBefore(t,"day"),me=e=>{let t={start:void 0,end:void 0};switch(x){case"range":t={start:"start"===N?M:void 0,end:"end"===N?M:void 0};break;case"week":if(!M)return;t={start:Pu(M).startOf("week").format("YYYY-MM-DD"),end:Pu(M).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!M)return;t={start:Pu(M).format("YYYY-MM-DD"),end:Pu(M).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(_f,{enabled:!C&&!s,isOpen:H,onClose:()=>{var e,t;U.blur(),R(!1),z(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=Z.current)||void 0===t||t.resetPlaceholder(),ge()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=X.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Z.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(nm,Object.assign({role:"group",ref:X,tabIndex:0,onFocus:ne,onBlur:ie,$focused:V,$disabled:s,$readOnly:C,$error:c,$wrap:Q,id:S,"data-testid":T["data-testid"],"aria-disabled":s,onKeyDown:J},T,{children:t(tm,{currentActive:N,wrap:Q,error:c,children:[e(im,{$wrap:Q,children:e(Nf,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:P,disabled:s,readOnly:B||C,focused:"start"===N,hoverValue:me("start"),onChange:A?re:ee,onFocus:oe("start"),onBlur:le,hideInputKeyboard:d})}),e(im,{$wrap:Q,children:e(Nf,{ref:Z,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:L,disabled:s,readOnly:j||C,focused:"end"===N,hoverValue:me("end"),onChange:te,onFocus:oe("end"),onBlur:ce,hideInputKeyboard:d})})]})})),renderDropdown:({elementWidth:t})=>e(wg,{ref:q,variant:x,initialCalendarDate:F,withButton:y,value:P,endValue:L,selectWithinRange:W||Y,currentFocus:N,disabledDates:l,minDate:n,maxDate:i,allowDisabledSelection:k,onSelect:de,onDismiss:ue,onHover:he,onYearMonthDisplayChange:v,numberOfDays:$,width:t,isFocusable:!C&&!s}),customZIndex:D,offset:16,rootNode:E})},sm=M.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:i,$lgStart:o,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:c,$smSpan:d,$xsStart:u,$xsSpan:h,$xxsStart:g,$xxsSpan:p}=e;return _`
            grid-column: ${t||"auto"} / span ${r||1};

            ${dc.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${i||1};
            }

            ${dc.MaxWidth.lg} {
                grid-column: ${o||"auto"} / span ${a||1};
            }

            ${dc.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${dc.MaxWidth.sm} {
                grid-column: ${c||"auto"} / span ${d||1};
            }

            ${dc.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${dc.MaxWidth.xxs} {
                grid-column: ${g||"auto"} / span ${p||1};
            }
        `}}
`,lm=i.forwardRef(((t,r)=>{const n=R(),{xxlCols:i,xlCols:o,lgCols:a,mdCols:s,smCols:l,xsCols:c,xxsCols:d}=t,u=Vo(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(sm,Object.assign({ref:r},(()=>{const e=lc["xxl-column"]({theme:n}),t=lc["xl-column"]({theme:n}),r=lc["lg-column"]({theme:n}),u=lc["md-column"]({theme:n}),g=lc["sm-column"]({theme:n}),p=lc["xs-column"]({theme:n}),f=lc["xxs-column"]({theme:n}),m=h(i||o||a||s||l||c||d,e,"xxl"),b=h(o||a||s||l||c||d,t,"xl"),v=h(a||s||l||c||d,r,"lg"),y=h(s||l||c||d,u,"md"),x=h(l||c||d,g,"sm"),w=h(c||d,p,"xs"),$=h(d,f,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),cm={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},dm=e=>Object.keys(cm).reduce(((t,r)=>{const n=cm[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),um={MaxWidth:dm("max-width"),MinWidth:dm("min-width")},hm=cm,gm=M.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:i,$mobileStart:o,$mobileSpan:a}=e;return _`
            grid-column: ${t||"auto"} / span ${r||1};

            ${um.MaxWidth.tablet} {
                grid-column: ${n||"auto"} / span
                    ${i||1};
            }

            ${um.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${a||1};
            }
        `}}
`,pm=i.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:i,desktopCols:o}=t,a=Vo(t,["mobileCols","tabletCols","desktopCols"]);return e(gm,Object.assign({ref:r},(()=>{const e=i||n,t=n,r=fm(o||i||n),a=fm(e),s=fm(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),fm=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let o;return o=i===n?1:i-n,{start:n,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},mm=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||Ic.border(e);const r=encodeURIComponent(t),n=e.$thickness||1;return _`
        background-color: transparent;
        height: ${n}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${n}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${r}" stroke-width="${n+1}" stroke-dasharray="4 4" /></svg>');
    `},bm=M.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return _`
                    ${mm}
                `;case"solid":return _`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||Ic.border};
                `}}}
`,vm=t=>{var{thickness:r=1,lineStyle:n="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:c,mdCols:d,lgCols:u,xlCols:h,xxlCols:g,mobileCols:p,tabletCols:f,desktopCols:m}=t,b=Vo(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==p||void 0!==f||void 0!==m;switch(i){case"flex":return e(bm,Object.assign({className:a,$thickness:r,$lineStyle:n,$color:o},b));case"grid":return v?e(pm,Object.assign({className:a,mobileCols:p,tabletCols:f,desktopCols:m},b,{children:e(bm,{$thickness:r,$lineStyle:n,$color:o})})):e(lm,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,r=c||t,n=d||r,i=u||n,o=h||i;return{xxlCols:g||o,xlCols:o,lgCols:i,mdCols:n,smCols:r,xsCols:t,xxsCols:e}})(),b,{children:e(bm,{$thickness:r,$lineStyle:n,$color:o})}))}},ym=M.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return _`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,xm=M.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Ic["overlay-subtle"]:Ic["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=_`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=_`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=_`
                transition: none;
            `),t}}
`,wm=({show:t=!1,rootId:r,onOverlayClick:n,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:g,id:p})=>{const[f,m]=a(null),[b,v]=a(),[y]=a((()=>oh.generate())),x=Re(),w=o(),$=o(null),C=s&&i.cloneElement(s,{ref:$}),S=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",k=null!=g?g:b?99999:99998;(e=>{const t=we();u((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Tf.Change,r)}),[t,e]),u((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Tf.Change,r)};return null==t||t.events.on(Tf.Ready,r),()=>null==t?void 0:t.events.off(Tf.Ready,r)}),[t,e])})(k),u((()=>(O(),m(T()),()=>{A(),_().length<1&&M("remove")})),[]),u((()=>{if(t){const e=F();D(e),I();const t=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{_().length<1&&M("remove")}),200);return()=>clearTimeout(e)}}),[t]);const D=e=>{w.current=e,v(e)},T=()=>document&&r?document.getElementById(r):document?document.body:null,F=()=>_().length>0,O=()=>{if(!document.getElementById(Cm)){const e=document.createElement("style");e.id=Cm;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Sm} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Sm}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const t=document.body.classList.contains(Sm);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Sm):document.body.classList.add(Sm)},_=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},I=()=>{const e=_();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=_();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},B=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&h&&(e.preventDefault(),n())};return f?E.createPortal(e(ym,{id:S,"data-testid":S,$show:t,$zIndex:k,children:s&&e(je,{id:x,children:e(xm,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:c,$disableTransition:d,onClick:B,children:C})})}),f):null},$m=t=>e(Be,{children:e(wm,Object.assign({},t))}),Cm="lifesg-ds-overlay-stylesheet",Sm="lifesg-ds-overlay-open",km=M.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${Ic.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${Ic.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?_`
            right: 0;
            transition: all ${Bc["duration-800"]} ${Bc["ease-exit"]};
        `:_`
        right: -100%;
        transition: all ${Bc["duration-800"]} ${Bc["ease-default"]};
    `}

    width: 40%;
    border-top-left-radius: ${zc.md};
    border-bottom-left-radius: ${zc.md};
    overflow: hidden;

    ${Lc.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${Lc.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,Dm=M.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${jc["spacing-16"]};
    padding: ${jc["spacing-32"]} ${jc["spacing-16"]}
        ${jc["spacing-16"]};
    background-color: ${Ic.bg};
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};

    ${Lc.MaxWidth.lg} {
        gap: ${jc["spacing-8"]};
        padding: ${jc["spacing-32"]} ${jc["spacing-20"]}
            ${jc["spacing-16"]};
    }
`,Em=M(ad)`
    color: ${Ic.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${Ic["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Tm=M(ud.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Fm=M.div`
    flex: 1;
    overflow-y: auto;
`,Om=r=>{var{children:n,heading:i,show:s,onClose:l,onOverlayClick:c}=r,d=Vo(r,["children","heading","show","onClose","onOverlayClick"]);const[h,g]=a(s),[p]=a((()=>oh.generate())),f=o(null);u((()=>{if(!s){const e=setTimeout((()=>g(!1)),500);return()=>clearTimeout(e)}g(!0)}),[s]);return e($m,{show:h,enableOverlayClick:!0,onOverlayClick:c,children:t(km,Object.assign({$show:s,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":p,onTransitionEnd:e=>{var t;"visibility"===e.propertyName&&s&&(null===(t=f.current)||void 0===t||t.focus())}},d,{children:[t(Dm,{children:[e(Tm,{id:p,ref:f,tabIndex:-1,weight:"bold",children:i}),e(Em,{"aria-label":"Close drawer",onClick:l,focusHighlight:!1,children:e(Pe,{"aria-hidden":!0})})]}),e(Fm,{children:n})]}))})},Mm=({className:t,progress:r,color:n,"data-testid":i})=>e(_m,{className:t,$innerWidth:r,$color:n,"data-testid":i,children:e("progress",{value:100*r,max:100})}),_m=M.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Ic["icon-primary-subtle"](e),_`
            border: ${Rc["width-010"]} ${Rc.solid} ${r};
            border-radius: ${zc.sm};

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
`,Im=M.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${Lc.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Am=t=>{var{id:r="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=t,g=Vo(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,f]=a(),[m,b]=a();u((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),u((()=>{var e,t;n&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const v=()=>{const e=.01*window.innerHeight;f(e)},y=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;f(e),b(window.visualViewport.offsetTop)}};return e($m,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:l,zIndex:c,children:e(Im,Object.assign({show:n,animationFrom:i,"data-testid":r,verticalHeight:p,offsetTop:m},g,{children:o}))})},Bm=M.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ic.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: ${zc.lg};
    overflow: hidden;

    ${Lc.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Rm=M(ad)`
    position: absolute;
    top: var(--close-button-top-inset, ${jc["spacing-16"]});
    right: var(--close-button-right-inset, ${jc["spacing-16"]});
    padding: 0;
    color: ${Ic.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Lc.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${jc["spacing-20"]});
    }
`,jm=r=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:a=!0}=r,s=Vo(r,["id","children","onClose","showCloseButton"]);return t(Bm,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Rm,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(Pe,{})}),i]}))},zm=Object.assign(Am,{Box:jm}),Pm=_`
    ${e=>`\n        ${Lc.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${Pc["sm-max"](e)}px)\n    `}
`,Lm=_`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${Pc["sm-max"](e)}px)\n    `}
`,Nm=M.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>_`
            ${Rc.Util["dashed-default"]({radius:zc.sm,thickness:Rc["width-040"],colour:e.$disabled?Ic["border-disabled"]:Ic.border})}

            background-color: ${e.$disabled?Ic["bg-disabled"]:Ic.bg};
        `}
    height: 14.125rem;
`,Hm=M(Kd.Default)`
    width: fit-content;
    margin: 0 ${jc["spacing-20"]};

    :disabled {
        border-color: ${Ic["border-strong"]};
    }
`,Wm=M(Vf)`
    position: absolute;
    top: ${jc["spacing-16"]};
    right: ${jc["spacing-16"]};

    :disabled {
        border-color: ${Ic["border-strong"]};
    }
`,Ym=M.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${jc["spacing-16"]}) * 2);
    height: 100%;
`,Vm=M.div`
    background: ${Ic["bg-primary-subtlest"]};
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};
    margin: 0 ${jc["spacing-20"]};
    padding: ${jc["spacing-16"]};
    display: flex;
    gap: ${jc["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,Um=M(ud.BodySM)`
    margin-top: ${jc["spacing-16"]};
`,Km=M(zm)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Xm=M.div`
    width: 100%;
    margin: auto;
    padding: ${jc["layout-xxl"]} ${jc["layout-sm"]};

    ${Pm} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,qm=M(zm.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${jc["spacing-16"]};

    ${Pm} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${jc["spacing-8"]};
        --close-button-right-inset: ${jc["spacing-20"]};
    }
`,Gm=M.h2`
    ${Ac["body-baseline-semibold"]}
    color: ${Ic.text};
    margin-bottom: ${jc["spacing-16"]};
    text-align: center;

    ${Pm} {
        ${Ac["body-md-semibold"]}
        margin: ${jc["spacing-12"]} 0;
    }
`,Zm=M.div`
    width: 100%;
    height: 20rem;
    border-radius: ${zc.lg};
    overflow: hidden;

    ${Pm} {
        border-radius: 0;
        flex: 1;
    }

    ${Lm} {
        background: ${Ic["bg-strong"]};
    }
`,Qm=M.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Ic["bg-stronger"]};
    margin: auto;

    ${Pm} {
        aspect-ratio: 4/3;
    }
    ${Lc.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${Lm} {
        width: auto;
        height: 100%;
    }
`,Jm=M.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Ic["border-strong"]};
    pointer-events: none;

    ${Pm} {
        width: calc(100% - ${jc["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,eb=M.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${jc["spacing-16"]};

    ${Lc.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${jc["spacing-16"]} ${jc["spacing-24"]}
            ${jc["spacing-48"]};
        gap: ${jc["spacing-16"]};
    }

    ${Lm} {
        flex-direction: row;
        margin: ${jc["spacing-16"]} ${jc["spacing-20"]};
    }
`,tb=M(Kd.Default)`
    width: 8.5rem;
    ${Lc.MaxWidth.sm} {
        width: 100%;
    }
    ${Lm} {
        height: 2.5rem;
    }
`,rb=M.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,nb=M.canvas`
    cursor: crosshair;
`,ib=y((()=>Uo(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.a288e8ff.js")).ESignatureCanvas}})))),ob=n=>{const{description:i,id:s,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:h,disabled:g}=n,p=Vo(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[f,m]=a(!1),b=o(null),[v,y]=a(h),w=R(),$=Pc["sm-max"]({theme:w}),C=Cu.useMediaQuery({maxWidth:$}),S=Cu.useMediaQuery({maxHeight:$,orientation:"landscape"}),k=()=>{var e;null===(e=b.current)||void 0===e||e.clear()},D=()=>{if(b.current){const e=b.current.export();y(e),m(!1),null==d||d(e)}};u((()=>{y(h)}),[h]);return t("div",Object.assign({},p,{children:[e(Nm,{$disabled:g,children:"number"==typeof l?t(Vm,{children:[c&&e(ud.BodyMD,{children:c}),e(Mm,{progress:null!=l?l:0,"data-testid":`${s||"e-signature"}-progress-bar`})]}):v?t(r,{children:[e(Ym,{src:v,alt:"Signature preview"}),e(Wm,{styleType:"light",onClick:()=>m(!0),id:s,"aria-label":"Edit signature",disabled:g,children:e(J,{})})]}):e(Hm,{type:"button",styleType:"secondary","aria-label":"Add signature",id:s,onClick:()=>m(!0),disabled:g,children:"Add signature"})}),e(Km,{"data-testid":"signature-modal",show:f,children:e(Xm,{children:t(qm,{onClose:()=>m(!1),children:[e(Gm,{children:"Signature"}),e(Zm,{children:t(Qm,{children:[e(Jm,{}),e(x,{fallback:null,children:f&&e(ib,{ref:b,baseImageDataURL:v})})]})}),t(eb,{children:[e(tb,{as:S?kh.Small:kh.Default,type:"button",styleType:C&&!S?"light":"link",icon:e(ee,{}),onClick:k,children:"Clear"}),e(tb,{as:S?Kd.Small:Kd.Default,type:"button",onClick:D,children:"Save"})]})]})})}),i?e(Um,{children:i}):null]}))},ab="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",sb="Submit",lb="Rate your experience",cb=5,db=M.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,ub=_`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Ic["icon-primary"]};
    ${db}:focus-visible + & {
        outline: ${Rc["width-020"]} ${Rc.solid}
            ${Ic["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${zc.sm};
    }
`,hb=M(Le)`
    ${ub}
`,gb=M(Ne)`
    ${ub}
`,pb=M.label`
    margin: 0 ${jc["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${Lc.MaxWidth.md} {
        margin: 0 ${jc["spacing-8"]};
    }
`,fb=M.div`
    display: flex;
    justify-content: center;
    margin: ${jc["spacing-8"]} ${jc["spacing-16"]};
`,mb=r=>{const{description:n,rating:i,onRatingChange:o}=r,a=t=>{const r=`${t} star${1===t?"":"s"}`;return e(t<=i?gb:hb,{"aria-label":r})};return e(fb,{role:"radiogroup","aria-label":n,children:[...Array(cb)].map(((r,n)=>{const s=n+1;return t(pb,{children:[e(db,{type:"radio",name:"star",checked:s===i,onChange:()=>(e=>{o(e)})(s)}),a(s)]},s)}))})},bb=M.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${Lc.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,vb=M.div`
    border-top: 1px solid ${Ic.border};
    border-bottom: 1px solid ${Ic.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${Lc.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,yb=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${Lc.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,xb=M(Kd.Default)`
    margin-top: 1rem;
    width: 100%;
`,wb=r=>{const{imgSrc:n,buttonLabel:i,description:o,rating:a,onRatingChange:s,onSubmit:l}=r,c=Vo(r,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=n?n:ab,u=null!=o?o:lb;return t(vb,Object.assign({},c,{children:[d&&e(bb,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),t(yb,{children:[e(ud.HeadingSM,{as:"div",weight:"semibold",children:u}),e(mb,{description:u,rating:a,onRatingChange:s}),e(xb,{disabled:!a,onClick:l,type:"button",children:null!=i?i:sb})]})]}))},$b=M.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return _`
                ${Rc.Util["dashed-default"]({radius:zc.sm,thickness:Rc["width-040"],colour:Ic.border})}
                padding: ${jc["spacing-32"]};

                ${Lc.MaxWidth.sm} {
                    padding: ${jc["spacing-32"]} ${jc["spacing-20"]};
                }
            `}}
`,Cb=M.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${jc["spacing-32"]};
`,Sb=M.p`
    ${Ac["heading-xs-regular"]}
    color: ${Ic.text};
    margin-bottom: ${jc["spacing-8"]};
`,kb=M.div`
    ${Jd({textSize:"heading-xs"})}
    color: ${Ic.text};
`,Db=M.p`
    ${Ac["body-md-regular"]}
    color: ${Ic["text-subtler"]};
`,Eb=M.div`
    ${Jd({textSize:"body-md"})}
    color: ${Ic["text-subtler"]};
`,Tb=M.ul`
    list-style-type: none;
`;var Fb;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Fb||(Fb={}));const Ob=({src:t,alt:r,className:n,"data-testid":i})=>e("img",{src:t,alt:r||"",className:n,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),Mb=M.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${jc["spacing-16"]};
    }
`,_b=M.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${jc["spacing-16"]} ${jc["spacing-32"]};
    cursor: pointer;

    background: ${Ic["bg-primary-subtlest"]};
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};

    ${Lc.MaxWidth.lg} {
        padding: ${jc["spacing-16"]};
    }

    :hover {
        background: ${Ic["bg-hover"]};
    }
`,Ib=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Lc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return _`
                ${Lc.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,Ab=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,Bb=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Lc.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,Rb=M.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${jc["spacing-8"]};

    ${Ac["body-md-regular"]}
    color: ${Ic.text};

    ${Lc.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${jc["spacing-8"]};

        ${sd(2)}
    }
`,jb=M.div`
    ${Ac["body-md-regular"]}
    color: ${Ic.text};

    ${Lc.MaxWidth.lg} {
        ${sd(2)}
    }
`;M(jb)`
    ${Ac["body-md-regular"]}
    margin-top: ${jc["spacing-4"]};
`;const zb=M.div`
    ${Ac["body-sm-semibold"]}
    color: ${Ic["text-error"]};
`,Pb=M(zb)`
    margin-top: ${jc["spacing-4"]};
    ${Lc.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,Lb=M(zb)`
    display: none;
    visibility: hidden;
    ${Lc.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${jc["spacing-8"]};
    }
`,Nb=M(Fd)`
    color: ${Ic["icon-primary"]};
`,Hb=M.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${jc["spacing-32"]};

    ${Lc.MaxWidth.lg} {
        margin-left: ${jc["spacing-16"]};
    }
`,Wb=M(Vf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${jc["spacing-16"]};
    }
`,Yb=M.div`
    width: auto;
    margin-right: ${jc["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${Lc.MaxWidth.lg} {
        margin-right: ${jc["spacing-16"]};
    }
`,Vb=M(Ob)`
    border-radius: ${zc.sm};
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${Lc.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,Ub=$((({fileItem:n,onDownload:i})=>{const{id:s,name:l,size:c,errorMessage:d,thumbnailImageDataUrl:h,truncateText:g=!0,ready:p=!0}=n,[f,m]=a(!1),[b,v]=a(!1),y=Fb.formatFileSizeDisplay(c),x=R(),w=Pc["sm-max"]({theme:x}),$=Cu.useMediaQuery({maxWidth:w}),[C,S]=a(),k=o(null);u((()=>{k.current&&S($?D(l):l)}),[l,$]);const D=e=>{if(!g)return e;const t=k&&k.current?k.current.getBoundingClientRect().width:0;return ah.truncateTwoLines(e,t,16,1.5)},E=()=>t(r,{children:[e(jb,{ref:k,children:C}),b&&e(Pb,{children:d||"Something went wrong"})]});return e(Mb,{"data-testid":s,children:t(_b,{onClick:()=>Uo(void 0,void 0,void 0,(function*(){if(p&&!f){m(!0);try{v(!1),yield i(n)}catch(e){v(!0)}finally{m(!1)}}})),children:[(()=>{let n;return n=t(r,h?{children:[e(Yb,{"data-testid":`${s}-thumbnail`,children:e(Vb,{"data-testid":`${s}-thumbnail-image`,src:h})}),t(Bb,{children:[e(Ab,{children:E()}),e(Rb,{children:y||"-"}),b&&e(Lb,{children:d||"Something went wrong"})]})]}:{children:[e(Ab,{children:E()}),e(Rb,{children:y||"-"}),b&&e(Lb,{children:d||"Something went wrong"})]}),e(Ib,{$hasThumbnail:!!h,children:n})})(),e(Hb,{children:e(Wb,{"data-testid":`${s}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${l}`,children:f||!p?e(Nb,{size:16,"aria-hidden":!0}):e(te,{"aria-hidden":!0})})})]})})})),Kb=({id:r,fileItems:n,title:i,description:o,onDownload:a,"data-testid":s,className:l,styleType:c="bordered"})=>{const d=e=>Uo(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return t($b,{id:r?`${r}-file-download`:"file-download",className:l,"data-testid":s,$border:"bordered"===c,children:[(i||o)&&t(Cb,{children:[i?e("string"==typeof i?Sb:kb,{children:i}):null,o?e("string"==typeof o?Db:Eb,{children:o}):null]}),e(Tb,{children:n&&n.length>0&&n.map((t=>e(Ub,{fileItem:t,onDownload:d},t.id)))})]})},Xb=C({activeId:void 0,setActiveId:()=>{}});var qb,Gb={exports:{}},Zb={exports:{}},Qb={};var Jb,ev,tv,rv,nv,iv,ov,av,sv,lv,cv,dv,uv,hv,gv={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function pv(){return ev||(ev=1,"production"===process.env.NODE_ENV?Zb.exports=function(){if(qb)return Qb;qb=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:switch(e=e.type){case l:case c:case n:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case g:case a:return e;default:return h}}case r:return h}}}function x(e){return y(e)===c}return Qb.AsyncMode=l,Qb.ConcurrentMode=c,Qb.ContextConsumer=s,Qb.ContextProvider=a,Qb.Element=t,Qb.ForwardRef=d,Qb.Fragment=n,Qb.Lazy=p,Qb.Memo=g,Qb.Portal=r,Qb.Profiler=o,Qb.StrictMode=i,Qb.Suspense=u,Qb.isAsyncMode=function(e){return x(e)||y(e)===l},Qb.isConcurrentMode=x,Qb.isContextConsumer=function(e){return y(e)===s},Qb.isContextProvider=function(e){return y(e)===a},Qb.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Qb.isForwardRef=function(e){return y(e)===d},Qb.isFragment=function(e){return y(e)===n},Qb.isLazy=function(e){return y(e)===p},Qb.isMemo=function(e){return y(e)===g},Qb.isPortal=function(e){return y(e)===r},Qb.isProfiler=function(e){return y(e)===o},Qb.isStrictMode=function(e){return y(e)===i},Qb.isSuspense=function(e){return y(e)===u},Qb.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},Qb.typeOf=y,Qb}():Zb.exports=(Jb||(Jb=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:var f=e.type;switch(f){case l:case c:case n:case o:case i:case u:return f;default:var m=f&&f.$$typeof;switch(m){case s:case d:case p:case g:case a:return m;default:return h}}case r:return h}}}var x=l,w=c,$=s,C=a,S=t,k=d,D=n,E=p,T=g,F=r,O=o,M=i,_=u,I=!1;function A(e){return y(e)===c}gv.AsyncMode=x,gv.ConcurrentMode=w,gv.ContextConsumer=$,gv.ContextProvider=C,gv.Element=S,gv.ForwardRef=k,gv.Fragment=D,gv.Lazy=E,gv.Memo=T,gv.Portal=F,gv.Profiler=O,gv.StrictMode=M,gv.Suspense=_,gv.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},gv.isConcurrentMode=A,gv.isContextConsumer=function(e){return y(e)===s},gv.isContextProvider=function(e){return y(e)===a},gv.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},gv.isForwardRef=function(e){return y(e)===d},gv.isFragment=function(e){return y(e)===n},gv.isLazy=function(e){return y(e)===p},gv.isMemo=function(e){return y(e)===g},gv.isPortal=function(e){return y(e)===r},gv.isProfiler=function(e){return y(e)===o},gv.isStrictMode=function(e){return y(e)===i},gv.isSuspense=function(e){return y(e)===u},gv.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===g||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===f)},gv.typeOf=y}()),gv)),Zb.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function fv(){if(rv)return tv;rv=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return tv=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(n,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},tv}function mv(){if(iv)return nv;iv=1;return nv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function bv(){return av?ov:(av=1,ov=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var vv=pv();Gb.exports=function(){if(dv)return cv;dv=1;var e=pv(),t=fv(),r=mv(),n=bv(),i=function(){if(lv)return sv;lv=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=mv(),r={},n=bv();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(n(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var h=l?l():"";e("Failed "+a+" type: "+d.message+(null!=h?h:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},sv=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),cv=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,i,o,a){if("function"!=typeof e)return new g("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new g("Invalid "+o+" `"+a+"` of type `"+v(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,i){var o=e[t];return s(o)?null:new g("Invalid "+n+" `"+i+"` of type `"+v(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,i,o){var a=t[r];return e.isValidElementType(a)?null:new g("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||d;return new g("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,i){return b(e[t])?null:new g("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,i,o,a,s){if("function"!=typeof e)return new g("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=v(l);if("object"!==c)return new g("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,o,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new g("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(i)+" at index "+t+"."),a}return p((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new g("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,i,o,a){var s=t[n],l=v(s);if("object"!==l)return new g("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(i,o,a,c,y(d));var u=d(s,c,i,o,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return p((function(i,o,a,s,l){var c=i[o],d=v(c);if("object"!==d)return new g("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var h in u){var p=e[h];if(n(e,h)&&"function"!=typeof p)return m(a,s,l,h,y(p));if(!p)return new g("Invalid "+s+" `"+l+"` key `"+h+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=p(c,h,a,s,l+"."+h,r);if(f)return f}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function g(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function i(i,a,s,c,u,h,p){if(c=c||d,h=h||s,p!==r){if(l){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(o("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?i?null===a[s]?new g("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new g("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,u,h)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function f(e){return p((function(t,r,n,i,o,a){var s=t[r];return v(s)!==e?new g("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,i){return new g((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var i=r.value;if(i&&!b(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return g.prototype=Error.prototype,u.checkPropTypes=i,u.resetWarningCache=i.resetWarningCache,u.PropTypes=u,u},cv}()(vv.isElement,!0)}else Gb.exports=function(){if(hv)return uv;hv=1;var e=mv();function t(){}function r(){}return r.resetWarningCache=t,uv=function(){function n(t,r,n,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o}}()();var yv=Zo(Gb.exports),xv=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function wv(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=xv.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var $v=[".DS_Store","Thumbs.db"];function Cv(e){return"object"==typeof e&&null!==e}function Sv(e){return Tv(e.target.files).map((function(e){return wv(e)}))}function kv(e){return Uo(this,void 0,void 0,(function(){return Ko(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return wv(e)}))]}}))}))}function Dv(e,t){return Uo(this,void 0,void 0,(function(){var r;return Ko(this,(function(n){switch(n.label){case 0:return e.items?(r=Tv(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(Fv))]):[3,2];case 1:return[2,Ev(Ov(n.sent()))];case 2:return[2,Ev(Tv(e.files).map((function(e){return wv(e)})))]}}))}))}function Ev(e){return e.filter((function(e){return-1===$v.indexOf(e.name)}))}function Tv(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function Fv(e){if("function"!=typeof e.webkitGetAsEntry)return Mv(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Iv(t):Mv(e)}function Ov(e){return e.reduce((function(e,t){return qo(qo([],Xo(e),!1),Xo(Array.isArray(t)?Ov(t):[t]),!1)}),[])}function Mv(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=wv(t);return Promise.resolve(r)}function _v(e){return Uo(this,void 0,void 0,(function(){return Ko(this,(function(t){return[2,e.isDirectory?Iv(e):Av(e)]}))}))}function Iv(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function i(){var o=this;t.readEntries((function(t){return Uo(o,void 0,void 0,(function(){var o,a,s;return Ko(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(_v)),n.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function Av(e){return Uo(this,void 0,void 0,(function(){return Ko(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=wv(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function Bv(e){return function(e){if(Array.isArray(e))return Nv(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Lv(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Rv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function jv(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Rv(Object(r),!0).forEach((function(t){zv(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Rv(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function zv(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Pv(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||Lv(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Lv(e,t){if(e){if("string"==typeof e)return Nv(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Nv(e,t):void 0}}function Nv(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Hv=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Wv=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Yv=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Vv={code:"too-many-files",message:"Too many files"};function Uv(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0}(e,t);return[r,r?null:Hv(t)]}function Kv(e,t,r){if(Xv(e.size))if(Xv(t)&&Xv(r)){if(e.size>r)return[!1,Wv(r)];if(e.size<t)return[!1,Yv(t)]}else{if(Xv(t)&&e.size<t)return[!1,Yv(t)];if(Xv(r)&&e.size>r)return[!1,Wv(r)]}return[!0,null]}function Xv(e){return null!=e}function qv(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Gv(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Zv(e){e.preventDefault()}function Qv(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return t.some((function(t){return!qv(e)&&t&&t.apply(void 0,[e].concat(n)),qv(e)}))}}function Jv(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function ey(e){return/^.*\.[\w]+$/.test(e)}var ty=["children"],ry=["open"],ny=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],iy=["refKey","onChange","onClick"];function oy(e){return function(e){if(Array.isArray(e))return ly(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||sy(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ay(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||sy(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function sy(e,t){if(e){if("string"==typeof e)return ly(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ly(e,t):void 0}}function ly(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function cy(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function dy(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?cy(Object(r),!0).forEach((function(t){uy(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cy(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function uy(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function hy(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var gy=g((function(e,t){var r=e.children,n=my(hy(e,ty)),o=n.open,a=hy(n,ry);return v(t,(function(){return{open:o}}),[o]),i.createElement(S,null,r(dy(dy({},a),{},{open:o})))}));gy.displayName="Dropzone";var py={disabled:!1,getFilesFromEvent:function(e){return Uo(this,void 0,void 0,(function(){return Ko(this,(function(t){return Cv(e)&&Cv(e.dataTransfer)?[2,Dv(e.dataTransfer,e.type)]:function(e){return Cv(e)&&Cv(e.target)}(e)?[2,Sv(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,kv(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};gy.defaultProps=py,gy.propTypes={children:yv.func,accept:yv.objectOf(yv.arrayOf(yv.string)),multiple:yv.bool,preventDropOnDocument:yv.bool,noClick:yv.bool,noKeyboard:yv.bool,noDrag:yv.bool,noDragEventsBubbling:yv.bool,minSize:yv.number,maxSize:yv.number,maxFiles:yv.number,disabled:yv.bool,getFilesFromEvent:yv.func,onFileDialogCancel:yv.func,onFileDialogOpen:yv.func,useFsAccessApi:yv.bool,autoFocus:yv.bool,onDragEnter:yv.func,onDragLeave:yv.func,onDragOver:yv.func,onDrop:yv.func,onDropAccepted:yv.func,onDropRejected:yv.func,onError:yv.func,validator:yv.func};var fy={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function my(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=dy(dy({},py),e),r=t.accept,n=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,s=t.minSize,l=t.multiple,c=t.maxFiles,d=t.onDragEnter,h=t.onDragLeave,g=t.onDragOver,f=t.onDrop,b=t.onDropAccepted,v=t.onDropRejected,y=t.onFileDialogCancel,x=t.onFileDialogOpen,$=t.useFsAccessApi,C=t.autoFocus,S=t.preventDropOnDocument,k=t.noClick,D=t.noKeyboard,E=t.noDrag,T=t.noDragEventsBubbling,F=t.onError,O=t.validator,M=m((function(){return function(e){if(Xv(e))return Object.entries(e).reduce((function(e,t){var r=Pv(t,2),n=r[0],i=r[1];return[].concat(Bv(e),[n],Bv(i))}),[]).filter((function(e){return Jv(e)||ey(e)})).join(",")}(r)}),[r]),_=m((function(){return function(e){return Xv(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Pv(e,2),r=t[0],n=t[1],i=!0;return Jv(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(n)&&n.every(ey)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var r=Pv(t,2),n=r[0],i=r[1];return jv(jv({},e),{},zv({},n,i))}),{})}]:e}(r)}),[r]),I=m((function(){return"function"==typeof x?x:vy}),[x]),A=m((function(){return"function"==typeof y?y:vy}),[y]),B=o(null),R=o(null),j=ay(w(by,fy),2),z=j[0],P=j[1],L=z.isFocused,N=z.isFileDialogActive,H=o("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&N&&setTimeout((function(){R.current&&(R.current.files.length||(P({type:"closeDialog"}),A()))}),300)};u((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[R,N,A,H]);var Y=o([]),V=function(e){B.current&&B.current.contains(e.target)||(e.preventDefault(),Y.current=[])};u((function(){return S&&(document.addEventListener("dragover",Zv,!1),document.addEventListener("drop",V,!1)),function(){S&&(document.removeEventListener("dragover",Zv),document.removeEventListener("drop",V))}}),[B,S]),u((function(){return!n&&C&&B.current&&B.current.focus(),function(){}}),[B,C,n]);var U=p((function(e){F?F(e):console.error(e)}),[F]),K=p((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[].concat(oy(Y.current),[e.target]),Gv(e)&&Promise.resolve(i(e)).then((function(t){if(!qv(e)||T){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=Pv(Uv(e,r),1)[0],o=Pv(Kv(e,n,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:M,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:O});P({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return U(e)}))}),[i,d,U,T,M,s,a,l,c,O]),X=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=Gv(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&g&&g(e),!1}),[g,T]),q=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=Y.current.filter((function(e){return B.current&&B.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),Y.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Gv(e)&&h&&h(e))}),[B,h,T]),G=p((function(e,t){var r=[],n=[];e.forEach((function(e){var t=ay(Uv(e,M),2),i=t[0],o=t[1],l=ay(Kv(e,s,a),2),c=l[0],d=l[1],u=O?O(e):null;if(i&&c&&!u)r.push(e);else{var h=[o,d];u&&(h=h.concat(u)),n.push({file:e,errors:h.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&c>=1&&r.length>c)&&(r.forEach((function(e){n.push({file:e,errors:[Vv]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:n,type:"setFiles"}),f&&f(r,n,t),n.length>0&&v&&v(n,t),r.length>0&&b&&b(r,t)}),[P,l,M,s,a,c,f,b,v,O]),Z=p((function(e){e.preventDefault(),e.persist(),ae(e),Y.current=[],Gv(e)&&Promise.resolve(i(e)).then((function(t){qv(e)&&!T||G(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[i,G,U,T]),Q=p((function(){if(H.current){P({type:"openDialog"}),I();var e={multiple:l,types:_};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){G(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,R.current?(R.current.value=null,R.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else R.current&&(P({type:"openDialog"}),I(),R.current.value=null,R.current.click())}),[P,I,A,$,G,U,_,l]),J=p((function(e){B.current&&B.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),Q()))}),[B,Q]),ee=p((function(){P({type:"focus"})}),[]),te=p((function(){P({type:"blur"})}),[]),re=p((function(){k||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?Q():setTimeout(Q,0))}),[k,Q]),ne=function(e){return n?null:e},ie=function(e){return D?null:ne(e)},oe=function(e){return E?null:ne(e)},ae=function(e){T&&e.stopPropagation()},se=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,i=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,h=e.onDrop,g=hy(e,ny);return dy(dy(uy({onKeyDown:ie(Qv(o,J)),onFocus:ie(Qv(a,ee)),onBlur:ie(Qv(s,te)),onClick:ne(Qv(l,re)),onDragEnter:oe(Qv(c,K)),onDragOver:oe(Qv(d,X)),onDragLeave:oe(Qv(u,q)),onDrop:oe(Qv(h,Z)),role:"string"==typeof i&&""!==i?i:"presentation"},r,B),n||D?{}:{tabIndex:0}),g)}}),[B,J,ee,te,re,K,X,q,Z,D,E,n]),le=p((function(e){e.stopPropagation()}),[]),ce=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,i=e.onClick,o=hy(e,iy);return dy(dy({},uy({accept:M,multiple:l,type:"file",style:{display:"none"},onChange:ne(Qv(n,Z)),onClick:ne(Qv(i,le)),tabIndex:-1},r,R)),o)}}),[R,r,l,Z,n]);return dy(dy({},z),{},{isFocused:L&&!n,getRootProps:se,getInputProps:ce,rootRef:B,inputRef:R,open:ne(Q)})}function by(e,t){switch(t.type){case"focus":return dy(dy({},e),{},{isFocused:!0});case"blur":return dy(dy({},e),{},{isFocused:!1});case"openDialog":return dy(dy({},fy),{},{isFileDialogActive:!0});case"closeDialog":return dy(dy({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return dy(dy({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return dy(dy({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return dy({},fy);default:return e}}function vy(){}const yy=M.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return _`
                ${Rc.Util["dashed-default"]({radius:zc.sm,thickness:Rc["width-040"],colour:Ic.border})}
                padding: ${jc["spacing-32"]};

                ${Lc.MaxWidth.sm} {
                    padding: ${jc["spacing-32"]} ${jc["spacing-20"]};
                }
            `}}
`,xy=M.input`
    display: none;
`,wy=M.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${Ic["bg-primary-subtler"]};
    ${Rc.Util["dashed-default"]({radius:zc.sm,thickness:Rc["width-040"],colour:Ic["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,$y=M(ud.BodyMD)`
    color: ${Ic["text-primary"]};
    text-align: center;
`,Cy=M(He)`
    color: ${Ic["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Sy=g((({children:r,accept:n,capture:i,multiple:a,id:s,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":g},p)=>{const f=o(null),{getRootProps:m,isDragActive:b}=my({onDrop:h,noClick:!0,disabled:u});v(p,(()=>Object.assign(Object.assign({},f.current),{openFileDialog:()=>{f.current&&(f.current.value="",f.current.click())}})));return t(yy,Object.assign({id:s,"data-testid":g||"dropzone",$border:d,className:l},m(),{children:[e(xy,{type:"file",name:c,ref:f,tabIndex:-1,"aria-hidden":!0,accept:n,capture:i,multiple:a,"data-testid":g?`${g}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),r,b&&t(wy,{children:[e(Cy,{}),e($y,{weight:"semibold",children:"Drop files here"})]})]}))}));const ky="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Dy(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Ey(e){return"nodeType"in e}function Ty(e){var t,r;return e?Dy(e)?e:Ey(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function Fy(e){const{Document:t}=Ty(e);return e instanceof t}function Oy(e){return!Dy(e)&&e instanceof Ty(e).HTMLElement}function My(e){return e instanceof Ty(e).SVGElement}function _y(e){return e?Dy(e)?e.document:Ey(e)?Fy(e)?e:Oy(e)||My(e)?e.ownerDocument:document:document:document}const Iy=ky?h:u;function Ay(e){const t=o(e);return Iy((()=>{t.current=e})),p((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return null==t.current?void 0:t.current(...r)}),[])}function By(e,t){void 0===t&&(t=[e]);const r=o(e);return Iy((()=>{r.current!==e&&(r.current=e)}),t),r}function Ry(e,t){const r=o();return m((()=>{const t=e(r.current);return r.current=t,t}),[...t])}function jy(e){const t=Ay(e),r=o(null),n=p((e=>{e!==r.current&&(null==t||t(e,r.current)),r.current=e}),[]);return[r,n]}function zy(e){const t=o();return u((()=>{t.current=e}),[e]),t.current}let Py={};function Ly(e,t){return m((()=>{if(t)return t;const r=null==Py[e]?0:Py[e]+1;return Py[e]=r,e+"-"+r}),[e,t])}function Ny(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,i]of n){const n=t[r];null!=n&&(t[r]=n+e*i)}return t}),{...t})}}const Hy=Ny(1),Wy=Ny(-1);function Yy(e){if(!e)return!1;const{KeyboardEvent:t}=Ty(e.target);return t&&e instanceof t}function Vy(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Ty(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Uy=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[Uy.Translate.toString(e),Uy.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),Ky="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Xy(e){return e.matches(Ky)?e:e.querySelector(Ky)}const qy={display:"none"};function Gy(e){let{id:t,value:r}=e;return i.createElement("div",{id:t,style:qy},r)}function Zy(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return i.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const Qy=C(null);const Jy={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},ex={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function tx(e){let{announcements:t=ex,container:r,hiddenTextDescribedById:n,screenReaderInstructions:o=Jy}=e;const{announce:s,announcement:l}=function(){const[e,t]=a("");return{announce:p((e=>{null!=e&&t(e)}),[]),announcement:e}}(),c=Ly("DndLiveRegion"),[d,h]=a(!1);if(u((()=>{h(!0)}),[]),function(e){const t=f(Qy);u((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(m((()=>({onDragStart(e){let{active:r}=e;s(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;t.onDragMove&&s(t.onDragMove({active:r,over:n}))},onDragOver(e){let{active:r,over:n}=e;s(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;s(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;s(t.onDragCancel({active:r,over:n}))}})),[s,t])),!d)return null;const g=i.createElement(i.Fragment,null,i.createElement(Gy,{id:n,value:o.draggable}),i.createElement(Zy,{id:c,announcement:l}));return r?O(g,r):g}var rx;function nx(){}function ix(e,t){return m((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(rx||(rx={}));const ox=Object.freeze({x:0,y:0});function ax(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function sx(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function lx(e){let{left:t,top:r,height:n,width:i}=e;return[{x:t,y:r},{x:t+i,y:r},{x:t,y:r+n},{x:t+i,y:r+n}]}function cx(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function dx(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-n,s=o-r;if(n<i&&r<o){const r=t.width*t.height,n=e.width*e.height,i=a*s;return Number((i/(r+n-i)).toFixed(4))}return 0}const ux=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=[];for(const e of n){const{id:n}=e,o=r.get(n);if(o){const r=dx(o,t);r>0&&i.push({id:n,data:{droppableContainer:e,value:r}})}}return i.sort(sx)};function hx(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ox}function gx(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const px=gx(1);const fx={ignoreTransform:!1};function mx(e,t){void 0===t&&(t=fx);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=Ty(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:i,scaleY:o,x:a,y:s}=n,l=e.left-a-(1-i)*parseFloat(r),c=e.top-s-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:i,width:o,height:a,bottom:s,right:l}=r;return{top:n,left:i,width:o,height:a,bottom:s,right:l}}function bx(e){return mx(e,{ignoreTransform:!0})}function vx(e,t){const r=[];return e?function n(i){if(null!=t&&r.length>=t)return r;if(!i)return r;if(Fy(i)&&null!=i.scrollingElement&&!r.includes(i.scrollingElement))return r.push(i.scrollingElement),r;if(!Oy(i)||My(i))return r;if(r.includes(i))return r;const o=Ty(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Ty(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(i,o)&&r.push(i),function(e,t){return void 0===t&&(t=Ty(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?r:n(i.parentNode)}(e):r}function yx(e){const[t]=vx(e,1);return null!=t?t:null}function xx(e){return ky&&e?Dy(e)?e:Ey(e)?Fy(e)||e===_y(e).scrollingElement?window:Oy(e)?e:null:null:null}function wx(e){return Dy(e)?e.scrollX:e.scrollLeft}function $x(e){return Dy(e)?e.scrollY:e.scrollTop}function Cx(e){return{x:wx(e),y:$x(e)}}var Sx;function kx(e){return!(!ky||!e)&&e===document.scrollingElement}function Dx(e){const t={x:0,y:0},r=kx(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Sx||(Sx={}));const Ex={x:.2,y:.2};function Tx(e,t,r,n,i){let{top:o,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===i&&(i=Ex);const{isTop:c,isBottom:d,isLeft:u,isRight:h}=Dx(e),g={x:0,y:0},p={x:0,y:0},f=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+f?(g.y=Sx.Backward,p.y=n*Math.abs((t.top+f-o)/f)):!d&&l>=t.bottom-f&&(g.y=Sx.Forward,p.y=n*Math.abs((t.bottom-f-l)/f)),!h&&s>=t.right-m?(g.x=Sx.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(g.x=Sx.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:g,speed:p}}function Fx(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:i}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Ox(e){return e.reduce(((e,t)=>Hy(e,Cx(t))),ox)}const Mx=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+wx(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+$x(t)),0)}]];class _x{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=vx(t),n=Ox(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of Mx)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(r),a=n[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Ix{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function Ax(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var Bx,Rx;function jx(e){e.preventDefault()}function zx(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(Bx||(Bx={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(Rx||(Rx={}));const Px={start:[Rx.Space,Rx.Enter],cancel:[Rx.Esc],end:[Rx.Space,Rx.Enter]},Lx=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case Rx.Right:return{...r,x:r.x+25};case Rx.Left:return{...r,x:r.x-25};case Rx.Down:return{...r,y:r.y+25};case Rx.Up:return{...r,y:r.y-25}}};let Nx=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Ix(_y(t)),this.windowListeners=new Ix(Ty(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Bx.Resize,this.handleCancel),this.windowListeners.add(Bx.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(Bx.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=mx),!e)return;const{top:r,left:n,bottom:i,right:o}=t(e);yx(e)&&(i<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(ox)}handleKeyDown(e){if(Yy(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:i=Px,coordinateGetter:o=Lx,scrollBehavior:a="smooth"}=n,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:ox;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=Wy(d,c),n={x:0,y:0},{scrollableAncestors:i}=r.current;for(const r of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:h}=Dx(r),g=Fx(r),p={x:Math.min(i===Rx.Right?g.right-g.width/2:g.right,Math.max(i===Rx.Right?g.left:g.left+g.width/2,d.x)),y:Math.min(i===Rx.Down?g.bottom-g.height/2:g.bottom,Math.max(i===Rx.Down?g.top:g.top+g.height/2,d.y))},f=i===Rx.Right&&!s||i===Rx.Left&&!l,m=i===Rx.Down&&!c||i===Rx.Up&&!o;if(f&&p.x!==d.x){const e=r.scrollLeft+t.x,o=i===Rx.Right&&e<=u.x||i===Rx.Left&&e>=h.x;if(o&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=o?r.scrollLeft-e:i===Rx.Right?r.scrollLeft-u.x:r.scrollLeft-h.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==d.y){const e=r.scrollTop+t.y,o=i===Rx.Down&&e<=u.y||i===Rx.Up&&e>=h.y;if(o&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=o?r.scrollTop-e:i===Rx.Down?r.scrollTop-u.y:r.scrollTop-h.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,Hy(Wy(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Hx(e){return Boolean(e&&"distance"in e)}function Wx(e){return Boolean(e&&"delay"in e)}Nx.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=Px,onActivation:i}=t,{active:o}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class Yx{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=Ty(e);return e instanceof t?e:_y(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=_y(o),this.documentListeners=new Ix(this.document),this.listeners=new Ix(r),this.windowListeners=new Ix(Ty(o)),this.initialCoordinates=null!=(n=Vy(i))?n:ox,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Bx.Resize,this.handleCancel),this.windowListeners.add(Bx.DragStart,jx),this.windowListeners.add(Bx.VisibilityChange,this.handleCancel),this.windowListeners.add(Bx.ContextMenu,jx),this.documentListeners.add(Bx.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Wx(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Hx(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Bx.Click,zx,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Bx.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!n)return;const s=null!=(t=Vy(e))?t:ox,l=Wy(n,s);if(!r&&a){if(Hx(a)){if(null!=a.tolerance&&Ax(l,a.tolerance))return this.handleCancel();if(Ax(l,a.distance))return this.handleStart()}return Wx(a)&&Ax(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Rx.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Vx={move:{name:"pointermove"},end:{name:"pointerup"}};class Ux extends Yx{constructor(e){const{event:t}=e,r=_y(t.target);super(e,Vx,r)}}Ux.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const Kx={move:{name:"mousemove"},end:{name:"mouseup"}};var Xx;!function(e){e[e.RightClick=2]="RightClick"}(Xx||(Xx={}));let qx=class extends Yx{constructor(e){super(e,Kx,_y(e.event.target))}};qx.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==Xx.RightClick&&(null==n||n({event:r}),!0)}}];const Gx={move:{name:"touchmove"},end:{name:"touchend"}};class Zx extends Yx{constructor(e){super(e,Gx)}static setup(){return window.addEventListener(Gx.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Gx.move.name,e)};function e(){}}}var Qx,Jx;function ew(e){let{acceleration:t,activator:r=Qx.Pointer,canScroll:n,draggingRect:i,enabled:a,interval:s=5,order:l=Jx.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:h,delta:g,threshold:f}=e;const b=function(e){let{delta:t,disabled:r}=e;const n=zy(t);return Ry((e=>{if(r||!n||!e)return tw;const i={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[Sx.Backward]:e.x[Sx.Backward]||-1===i.x,[Sx.Forward]:e.x[Sx.Forward]||1===i.x},y:{[Sx.Backward]:e.y[Sx.Backward]||-1===i.y,[Sx.Forward]:e.y[Sx.Forward]||1===i.y}}}),[r,t,n])}({delta:g,disabled:!a}),[v,y]=function(){const e=o(null);return[p(((t,r)=>{e.current=setInterval(t,r)}),[]),p((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=o({x:0,y:0}),w=o({x:0,y:0}),$=m((()=>{switch(r){case Qx.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Qx.DraggableRect:return i}}),[r,i,c]),C=o(null),S=p((()=>{const e=C.current;if(!e)return;const t=x.current.x*w.current.x,r=x.current.y*w.current.y;e.scrollBy(t,r)}),[]),k=m((()=>l===Jx.TreeOrder?[...d].reverse():d),[l,d]);u((()=>{if(a&&d.length&&$){for(const e of k){if(!1===(null==n?void 0:n(e)))continue;const r=d.indexOf(e),i=h[r];if(!i)continue;const{direction:o,speed:a}=Tx(e,i,$,t,f);for(const e of["x","y"])b[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return y(),C.current=e,v(S,s),x.current=a,void(w.current=o)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,S,n,y,a,s,JSON.stringify($),JSON.stringify(b),v,d,k,h,JSON.stringify(f)])}Zx.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:i}=r;return!(i.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Qx||(Qx={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Jx||(Jx={}));const tw={x:{[Sx.Backward]:!1,[Sx.Forward]:!1},y:{[Sx.Backward]:!1,[Sx.Forward]:!1}};var rw,nw;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(rw||(rw={})),function(e){e.Optimized="optimized"}(nw||(nw={}));const iw=new Map;function ow(e,t){return Ry((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function aw(e){let{callback:t,disabled:r}=e;const n=Ay(t),i=m((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(n)}),[r]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}function sw(e){return new _x(mx(e),e)}function lw(e,t,r){void 0===t&&(t=sw);const[n,i]=w((function(n){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=n?n:r)?i:null;const o=t(e);if(JSON.stringify(n)===JSON.stringify(o))return n;return o}),null),o=function(e){let{callback:t,disabled:r}=e;const n=Ay(t),i=m((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(n)}),[n,r]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){i();break}}}}),a=aw({callback:i});return Iy((()=>{i(),e?(null==a||a.observe(e),null==o||o.observe(document.body,{childList:!0,subtree:!0})):(null==a||a.disconnect(),null==o||o.disconnect())}),[e]),n}const cw=[];function dw(e,t){void 0===t&&(t=[]);const r=o(null);return u((()=>{r.current=null}),t),u((()=>{const t=e!==ox;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?Wy(e,r.current):ox}function uw(e){return m((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const hw=[];function gw(e){let{measure:t}=e;const[r,n]=a(null),i=p((e=>{for(const{target:r}of e)if(Oy(r)){n((e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n}));break}}),[t]),o=aw({callback:i}),s=p((e=>{const r=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Oy(t)?t:e}(e);null==o||o.disconnect(),r&&(null==o||o.observe(r)),n(r?t(r):null)}),[t,o]),[l,c]=jy(s);return m((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const pw=[{sensor:Ux,options:{}},{sensor:Nx,options:{}}],fw={current:{}},mw={draggable:{measure:bx},droppable:{measure:bx,strategy:rw.WhileDragging,frequency:nw.Optimized},dragOverlay:{measure:mx}};class bw extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const vw={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new bw,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:nx},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:mw,measureDroppableContainers:nx,windowRect:null,measuringScheduled:!1},yw=C({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:nx,draggableNodes:new Map,over:null,measureDroppableContainers:nx}),xw=C(vw);function ww(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new bw}}}function $w(e,t){switch(t.type){case rx.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case rx.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case rx.DragEnd:case rx.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case rx.RegisterDroppable:{const{element:r}=t,{id:n}=r,i=new bw(e.droppable.containers);return i.set(n,r),{...e,droppable:{...e.droppable,containers:i}}}case rx.SetDroppableDisabled:{const{id:r,key:n,disabled:i}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const a=new bw(e.droppable.containers);return a.set(r,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case rx.UnregisterDroppable:{const{id:r,key:n}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const o=new bw(e.droppable.containers);return o.delete(r),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Cw(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:i}=f(yw),o=zy(n),a=zy(null==r?void 0:r.id);return u((()=>{if(!t&&!n&&o&&null!=a){if(!Yy(o))return;if(document.activeElement===o.target)return;const e=i.get(a);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=Xy(e);if(t){t.focus();break}}}))}}),[n,t,i,a,o]),null}const Sw=C({...ox,scaleX:1,scaleY:1});var kw;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(kw||(kw={}));const Dw=$((function(e){var t,r,n,s;let{id:l,accessibility:c,autoScroll:d=!0,children:h,sensors:g=pw,collisionDetection:f=ux,measuring:b,modifiers:v,...y}=e;const x=w($w,void 0,ww),[$,C]=x,[S,k]=function(){const[e]=a((()=>new Set)),t=p((t=>(e.add(t),()=>e.delete(t))),[e]);return[p((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),t]}(),[D,E]=a(kw.Uninitialized),T=D===kw.Initialized,{draggable:{active:O,nodes:M,translate:_},droppable:{containers:I}}=$,A=O?M.get(O):null,B=o({initial:null,translated:null}),R=m((()=>{var e;return null!=O?{id:O,data:null!=(e=null==A?void 0:A.data)?e:fw,rect:B}:null}),[O,A]),j=o(null),[z,P]=a(null),[L,N]=a(null),H=By(y,Object.values(y)),W=Ly("DndDescribedBy",l),Y=m((()=>I.getEnabled()),[I]),V=function(e){return m((()=>({draggable:{...mw.draggable,...null==e?void 0:e.draggable},droppable:{...mw.droppable,...null==e?void 0:e.droppable},dragOverlay:{...mw.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(b),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:X}=function(e,t){let{dragging:r,dependencies:n,config:i}=t;const[s,l]=a(null),{frequency:c,measure:d,strategy:h}=i,g=o(e),f=function(){switch(h){case rw.Always:return!1;case rw.BeforeDragging:return r;default:return!r}}(),m=By(f),b=p((function(e){void 0===e&&(e=[]),m.current||l((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=o(null),y=Ry((t=>{if(f&&!r)return iw;if(!t||t===iw||g.current!==e||null!=s){const t=new Map;for(let r of e){if(!r)continue;if(s&&s.length>0&&!s.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new _x(d(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,s,r,f,d]);return u((()=>{g.current=e}),[e]),u((()=>{f||b()}),[r,f]),u((()=>{s&&s.length>0&&l(null)}),[JSON.stringify(s)]),u((()=>{f||"number"!=typeof c||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),c))}),[c,f,b,...n]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=s}}(Y,{dragging:T,dependencies:[_.x,_.y],config:V.droppable}),q=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return Ry((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(M,O),G=m((()=>L?Vy(L):null),[L]),Z=function(){const e=!1===(null==z?void 0:z.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,r=T&&!e&&!t;if("object"==typeof d)return{...d,enabled:r};return{enabled:r}}(),Q=function(e,t){return ow(e,t)}(q,V.draggable.measure);!function(e){let{activeNode:t,measure:r,initialRect:n,config:i=!0}=e;const a=o(!1),{x:s,y:l}="boolean"==typeof i?{x:i,y:i}:i;Iy((()=>{if(!s&&!l||!t)return void(a.current=!1);if(a.current||!n)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const i=hx(r(e),n);if(s||(i.x=0),l||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){const t=yx(e);t&&t.scrollBy({top:i.y,left:i.x})}}),[t,s,l,n,r])}({activeNode:O?M.get(O):null,config:Z.layoutShiftCompensation,initialRect:Q,measure:V.draggable.measure});const J=lw(q,V.draggable.measure,Q),ee=lw(q?q.parentElement:null),te=o({activatorEvent:null,active:null,activeNode:q,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:M,draggingNode:null,draggingNodeRect:null,droppableContainers:I,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=I.getNodeFor(null==(t=te.current.over)?void 0:t.id),ne=gw({measure:V.dragOverlay.measure}),ie=null!=(r=ne.nodeRef.current)?r:q,oe=T?null!=(n=ne.rect)?n:J:null,ae=Boolean(ne.nodeRef.current&&ne.rect),se=hx(le=ae?null:J,ow(le));var le;const ce=uw(ie?Ty(ie):null),de=function(e){const t=o(e),r=Ry((r=>e?r&&r!==cw&&e&&t.current&&e.parentNode===t.current.parentNode?r:vx(e):cw),[e]);return u((()=>{t.current=e}),[e]),r}(T?null!=re?re:q:null),ue=function(e,t){void 0===t&&(t=mx);const[r]=e,n=uw(r?Ty(r):null),[i,o]=w((function(){return e.length?e.map((e=>kx(e)?n:new _x(t(e),e))):hw}),hw),a=aw({callback:o});return e.length>0&&i===hw&&o(),Iy((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),o())}),[e]),i}(de),he=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(v,{transform:{x:_.x-se.x,y:_.y-se.y,scaleX:1,scaleY:1},activatorEvent:L,active:R,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:oe,over:te.current.over,overlayNodeRect:ne.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),ge=G?Hy(G,_):null,pe=function(e){const[t,r]=a(null),n=o(e),i=p((e=>{const t=xx(e.target);t&&r((e=>e?(e.set(t,Cx(t)),new Map(e)):null))}),[]);return u((()=>{const t=n.current;if(e!==t){o(t);const a=e.map((e=>{const t=xx(e);return t?(t.addEventListener("scroll",i,{passive:!0}),[t,Cx(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),n.current=e}return()=>{o(e),o(t)};function o(e){e.forEach((e=>{const t=xx(e);null==t||t.removeEventListener("scroll",i)}))}}),[i,e]),m((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>Hy(e,t)),ox):Ox(e):ox),[e,t])}(de),fe=dw(pe),me=dw(pe,[J]),be=Hy(he,fe),ve=oe?px(oe,he):null,ye=R&&ve?f({active:R,collisionRect:ve,droppableRects:U,droppableContainers:Y,pointerCoordinates:ge}):null,xe=cx(ye,"id"),[we,$e]=a(null),Ce=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(ae?he:Hy(he,me),null!=(s=null==we?void 0:we.rect)?s:null,J),Se=p(((e,t)=>{let{sensor:r,options:n}=t;if(null==j.current)return;const i=M.get(j.current);if(!i)return;const o=e.nativeEvent,a=new r({active:j.current,activeNode:i,event:o,options:n,context:te,onStart(e){const t=j.current;if(null==t)return;const r=M.get(t);if(!r)return;const{onDragStart:n}=H.current,i={active:{id:t,data:r.data,rect:B}};F((()=>{null==n||n(i),E(kw.Initializing),C({type:rx.DragStart,initialCoordinates:e,active:t}),S({type:"onDragStart",event:i})}))},onMove(e){C({type:rx.DragMove,coordinates:e})},onEnd:s(rx.DragEnd),onCancel:s(rx.DragCancel)});function s(e){return async function(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:i}=te.current;let a=null;if(t&&i){const{cancelDrop:s}=H.current;if(a={activatorEvent:o,active:t,collisions:r,delta:i,over:n},e===rx.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=rx.DragCancel)}}j.current=null,F((()=>{C({type:e}),E(kw.Uninitialized),$e(null),P(null),N(null);const t=e===rx.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),S({type:t,event:a})}}))}}F((()=>{P(a),N(e.nativeEvent)}))}),[M]),ke=p(((e,t)=>(r,n)=>{const i=r.nativeEvent,o=M.get(n);if(null!==j.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(r,t.options,a)&&(i.dndKit={capturedBy:t.sensor},j.current=n,Se(r,t))}),[M,Se]),De=function(e,t){return m((()=>e.reduce(((e,r)=>{const{sensor:n}=r;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,r)})))]}),[])),[e,t])}(g,ke);!function(e){u((()=>{if(!ky)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(g),Iy((()=>{J&&D===kw.Initializing&&E(kw.Initialized)}),[J,D]),u((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:r,collisions:n,over:i}=te.current;if(!t||!r)return;const o={active:t,activatorEvent:r,collisions:n,delta:{x:be.x,y:be.y},over:i};F((()=>{null==e||e(o),S({type:"onDragMove",event:o})}))}),[be.x,be.y]),u((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:i}=te.current;if(!e||null==j.current||!t||!i)return;const{onDragOver:o}=H.current,a=n.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:r,delta:{x:i.x,y:i.y},over:s};F((()=>{$e(s),null==o||o(l),S({type:"onDragOver",event:l})}))}),[xe]),Iy((()=>{te.current={activatorEvent:L,active:R,activeNode:q,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:M,draggingNode:ie,draggingNodeRect:oe,droppableContainers:I,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},B.current={initial:oe,translated:ve}}),[R,q,ye,ve,M,ie,oe,U,I,we,de,be]),ew({...Z,delta:_,draggingRect:ve,pointerCoordinates:ge,scrollableAncestors:de,scrollableAncestorRects:ue});const Ee=m((()=>({active:R,activeNode:q,activeNodeRect:J,activatorEvent:L,collisions:ye,containerNodeRect:ee,dragOverlay:ne,draggableNodes:M,droppableContainers:I,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:V,measuringScheduled:X,windowRect:ce})),[R,q,J,L,ye,ee,ne,M,I,U,we,K,de,ue,V,X,ce]),Te=m((()=>({activatorEvent:L,activators:De,active:R,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:C,draggableNodes:M,over:we,measureDroppableContainers:K})),[L,De,R,J,C,W,M,we,K]);return i.createElement(Qy.Provider,{value:k},i.createElement(yw.Provider,{value:Te},i.createElement(xw.Provider,{value:Ee},i.createElement(Sw.Provider,{value:Ce},h)),i.createElement(Cw,{disabled:!1===(null==c?void 0:c.restoreFocus)})),i.createElement(tx,{...c,hiddenTextDescribedById:W}))})),Ew=C(null),Tw="button";function Fw(e){let{id:t,data:r,disabled:n=!1,attributes:i}=e;const o=Ly("Droppable"),{activators:a,activatorEvent:s,active:l,activeNodeRect:c,ariaDescribedById:d,draggableNodes:u,over:h}=f(yw),{role:g=Tw,roleDescription:p="draggable",tabIndex:b=0}=null!=i?i:{},v=(null==l?void 0:l.id)===t,y=f(v?Sw:Ew),[x,w]=jy(),[$,C]=jy(),S=function(e,t){return m((()=>e.reduce(((e,r)=>{let{eventName:n,handler:i}=r;return e[n]=e=>{i(e,t)},e}),{})),[e,t])}(a,t),k=By(r);Iy((()=>(u.set(t,{id:t,key:o,node:x,activatorNode:$,data:k}),()=>{const e=u.get(t);e&&e.key===o&&u.delete(t)})),[u,t]);return{active:l,activatorEvent:s,activeNodeRect:c,attributes:m((()=>({role:g,tabIndex:b,"aria-disabled":n,"aria-pressed":!(!v||g!==Tw)||void 0,"aria-roledescription":p,"aria-describedby":d.draggable})),[n,g,b,v,p,d.draggable]),isDragging:v,listeners:n?void 0:S,node:x,over:h,setNodeRef:w,setActivatorNodeRef:C,transform:y}}const Ow={timeout:25};function Mw(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function _w(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function Iw(e){return null!==e&&e>=0}const Aw=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const o=Mw(t,n,r),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},Bw={scaleX:1,scaleY:1},Rw=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[r])?t:n;if(!s)return null;if(i===r){const e=o[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...Bw}:null}const l=function(e,t,r){const n=e[t],i=e[t-1],o=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):o?o.top-(n.top+n.height):0;return o?o.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(o,i,r);return i>r&&i<=a?{x:0,y:-s.height-l,...Bw}:i<r&&i>=a?{x:0,y:s.height+l,...Bw}:{x:0,y:0,...Bw}};const jw="Sortable",zw=i.createContext({activeIndex:-1,containerId:jw,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Aw,disabled:{draggable:!1,droppable:!1}});function Pw(e){let{children:t,id:r,items:n,strategy:a=Aw,disabled:s=!1}=e;const{active:l,dragOverlay:c,droppableRects:d,over:h,measureDroppableContainers:g}=f(xw),p=Ly(jw,r),b=Boolean(null!==c.rect),v=m((()=>n.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[n]),y=null!=l,x=l?v.indexOf(l.id):-1,w=h?v.indexOf(h.id):-1,$=o(v),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(v,$.current),S=-1!==w&&-1===x||C,k=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(s);Iy((()=>{C&&y&&g(v)}),[C,v,y,g]),u((()=>{$.current=v}),[v]);const D=m((()=>({activeIndex:x,containerId:p,disabled:k,disableTransforms:S,items:v,overIndex:w,useDragOverlay:b,sortedRects:_w(v,d),strategy:a})),[x,p,k.draggable,k.droppable,S,v,w,d,b,a]);return i.createElement(zw.Provider,{value:D},t)}const Lw=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return Mw(r,n,i).indexOf(t)},Nw=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===o||i!==a)&&(!!r||a!==i&&t===l))},Hw={duration:200,easing:"ease"},Ww="transform",Yw=Uy.Transition.toString({property:Ww,duration:0,easing:"linear"}),Vw={roleDescription:"sortable"};function Uw(e){let{animateLayoutChanges:t=Nw,attributes:r,disabled:n,data:i,getNewIndex:s=Lw,id:l,strategy:c,resizeObserverConfig:d,transition:h=Hw}=e;const{items:g,containerId:b,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:C,strategy:S}=f(zw),k=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(n,y),D=g.indexOf(l),E=m((()=>({sortable:{containerId:b,index:D,items:g},...i})),[b,i,D,g]),T=m((()=>g.slice(g.indexOf(l))),[g,l]),{rect:F,node:O,isOver:M,setNodeRef:_}=function(e){let{data:t,disabled:r=!1,id:n,resizeObserverConfig:i}=e;const a=Ly("Droppable"),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=f(yw),h=o({disabled:r}),g=o(!1),m=o(null),b=o(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...Ow,...i},w=By(null!=y?y:n),$=aw({callback:p((()=>{g.current?(null!=b.current&&clearTimeout(b.current),b.current=setTimeout((()=>{d(Array.isArray(w.current)?w.current:[w.current]),b.current=null}),x)):g.current=!0}),[x]),disabled:v||!s}),C=p(((e,t)=>{$&&(t&&($.unobserve(t),g.current=!1),e&&$.observe(e))}),[$]),[S,k]=jy(C),D=By(t);return u((()=>{$&&S.current&&($.disconnect(),g.current=!1,$.observe(S.current))}),[S,$]),Iy((()=>(l({type:rx.RegisterDroppable,element:{id:n,key:a,disabled:r,node:S,rect:m,data:D}}),()=>l({type:rx.UnregisterDroppable,key:a,id:n}))),[n]),u((()=>{r!==h.current.disabled&&(l({type:rx.SetDroppableDisabled,id:n,key:a,disabled:r}),h.current.disabled=r)}),[n,a,r,l]),{active:s,rect:m,isOver:(null==c?void 0:c.id)===n,node:S,over:c,setNodeRef:k}}({id:l,data:E,disabled:k.droppable,resizeObserverConfig:{updateMeasurementsFor:T,...d}}),{active:I,activatorEvent:A,activeNodeRect:B,attributes:R,setNodeRef:j,listeners:z,isDragging:P,over:L,setActivatorNodeRef:N,transform:H}=Fw({id:l,data:E,attributes:{...Vw,...r},disabled:k.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m((()=>e=>{t.forEach((t=>t(e)))}),t)}(_,j),Y=Boolean(I),V=Y&&!x&&Iw(v)&&Iw($),U=!C&&P,K=U&&V?H:null,X=V?null!=K?K:(null!=c?c:S)({rects:w,activeNodeRect:B,activeIndex:v,overIndex:$,index:D}):null,q=Iw(v)&&Iw($)?s({id:l,items:g,activeIndex:v,overIndex:$}):D,G=null==I?void 0:I.id,Z=o({activeId:G,items:g,newIndex:q,containerId:b}),Q=g!==Z.current.items,J=t({active:I,containerId:b,isDragging:P,isSorting:Y,id:l,index:D,items:g,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:r,node:n,rect:i}=e;const[s,l]=a(null),c=o(r);return Iy((()=>{if(!t&&r!==c.current&&n.current){const e=i.current;if(e){const t=mx(n.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&l(r)}}r!==c.current&&(c.current=r)}),[t,r,n,i]),u((()=>{s&&l(null)}),[s]),s}({disabled:!J,index:D,node:O,rect:F});return u((()=>{Y&&Z.current.newIndex!==q&&(Z.current.newIndex=q),b!==Z.current.containerId&&(Z.current.containerId=b),g!==Z.current.items&&(Z.current.items=g)}),[Y,q,b,g]),u((()=>{if(G===Z.current.activeId)return;if(G&&!Z.current.activeId)return void(Z.current.activeId=G);const e=setTimeout((()=>{Z.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:I,activeIndex:v,attributes:R,data:E,rect:F,index:D,newIndex:q,items:g,isOver:M,isSorting:Y,isDragging:P,listeners:z,node:O,overIndex:$,over:L,setNodeRef:W,setActivatorNodeRef:N,setDroppableNodeRef:_,setDraggableNodeRef:j,transform:null!=ee?ee:X,transition:function(){if(ee||Q&&Z.current.newIndex===D)return Yw;if(U&&!Yy(A)||!h)return;if(Y||J)return Uy.Transition.toString({...h,property:Ww});return}()}}function Kw(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Xw=[Rx.Down,Rx.Right,Rx.Up,Rx.Left],qw=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(Xw.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];o.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const o=i.get(r.id);if(o)switch(e.code){case Rx.Down:n.top<o.top&&t.push(r);break;case Rx.Up:n.top>o.top&&t.push(r);break;case Rx.Left:n.left>o.left&&t.push(r);break;case Rx.Right:n.left<o.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=lx(t),o=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=lx(n),a=i.reduce(((e,t,n)=>{return e+(i=r[n],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(ax)})({active:r,collisionRect:n,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=cx(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(r.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=vx(l).some(((e,t)=>s[t]!==e)),i=Gw(e,t),o=function(e,t){if(!Kw(e)||!Kw(t))return!1;if(!Gw(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!i?{x:0,y:0}:{x:o?n.width-a.width:0,y:o?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:Wy(d,c)}}}};function Gw(e,t){return!(!Kw(e)||!Kw(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class Zw extends qx{}Zw.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Qw(e.target)}];function Qw(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Nx{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Qw(e.target)}];const Jw=M.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,e$=M(kg)`
    color: ${Ic.text};
    ${Jd({textSize:"body-md"})}

    ${Lc.MaxWidth.sm} {
        display: none;
    }
`,t$=M(jm)`
    padding: 3.5rem 1.25rem 2.5rem;
`,r$=M.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ic.text};
    ${Jd({textSize:"body-md"})}
`,n$=n=>{var{children:i,visible:o,onMobileClose:a}=n,s=Vo(n,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=R(),d=Pc["sm-max"]({theme:c}),u=Cu.useMediaQuery({maxWidth:d}),h=()=>{a&&a()},g=()=>"string"==typeof i?e(ud.BodyMD,{children:i}):i;return t(r,{children:[o&&e(Jw,Object.assign({"data-testid":l},s,{children:e(e$,{children:g()})})),u&&e(Am,{show:null!=o&&o,onOverlayClick:h,children:e(t$,{onClose:h,children:e(r$,{children:g()})})})]})},i$=M.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,o$=n=>{var i,s,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:h,rootNode:g,customOffset:p,delay:f,onPopoverAppear:m,onPopoverDismiss:b}=n,v=Vo(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=a(!1),w=o(null),$=o(null),C=R(),S=Pc["sm-max"]({theme:C}),k=Cu.useMediaQuery({maxWidth:S}),{refs:D,floatingStyles:E,context:T}=$e({open:y,placement:u,whileElementsMounted:Ce,middleware:[Se(null!=p?p:16),ke(),De({limiter:Ee()})],onOpenChange:e=>{x(e),y!==e&&z(e)}}),F=Ff(),O=k?"click":d,M=Oe(T,{ignoreMouse:"hover"===O}),_=Me(T),I=ze(T,{enabled:"hover"===O,delay:{open:null!==(i=null==f?void 0:f.open)&&void 0!==i?i:0,close:null!==(s=null==f?void 0:f.close)&&void 0!==s?s:500}}),{getReferenceProps:A,getFloatingProps:B}=_e([M,_,I]),j=()=>{x(!1),z(!1)},z=e=>{e&&m&&m(),!e&&b&&b()};return t(r,{children:[e(i$,Object.assign({ref:e=>{w.current=e,D.setReference(e)}},A({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:l})),y&&e(Ie,{root:g,children:e(Ae,{context:T,children:e("div",Object.assign({ref:e=>{$.current=e,D.setFloating(e)},style:Object.assign(Object.assign({},E),{outline:"none",zIndex:null!=h?h:F})},B(),{children:"function"==typeof c?c():e(n$,{visible:!0,onMobileClose:j,children:c})}))})})]})},a$=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},s$=M.span`
    color: ${Ic["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>a$(e)}

    &:hover,
    &:focus-visible {
        color: ${Ic["text-hover"]};
        ${({$hoverStyle:e})=>a$(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,l$=M.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,c$=r=>{var{ariaLabel:n,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=Vo(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!i;return e(o$,Object.assign({},l,{children:t(s$,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=n?n:c?void 0:"More info",children:[i,o&&e(l$,{$standalone:!c,children:o})]})}))},d$=M.div`
    padding-left: ${jc["spacing-4"]};
    display: inline;
`,u$=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e(d$,{children:e(c$,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=o?o:e(H,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},h$=M.label`
    color: ${Ic["text-subtle"]};
    margin-bottom: ${jc["spacing-8"]};
    display: inline-block;

    ${Ac["form-label"]}
    ${Jd()}
    font-weight: ${Ac.Spec["weight-semibold"]};
`,g$=M.p`
    ${Ac["body-sm-semibold"]}
    color: ${Ic["text-error"]};
    margin-top: ${jc["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,p$=M.span`
    ${Ac["form-description"]}
    color: ${Ic["text-subtler"]};
    display: block;
`,f$=r=>{var{children:n,addon:i,subtitle:o,"data-testid":a}=r,s=Vo(r,["children","addon","subtitle","data-testid"]);return t(h$,Object.assign({},s,{children:[n,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(u$,{addon:i}):null),"string"==typeof o?e(p$,Object.assign({"data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},m$=t=>e(g$,Object.assign({},t)),b$=_`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${jc["spacing-32"]};
    }
`,v$=M.div`
    ${b$}
`,y$=M(lm)`
    ${b$}
`,x$=M(pm)`
    ${b$}
`,w$=({label:r,errorMessage:n,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,"data-error-testid":y})=>{const x=!s&&(l||d||u)?"v2-grid":!s&&(h||g||p||f||m||b||v)?"grid":s||"flex",w=i?`${i}-label`:void 0,$=()=>y||(i?`${i}-error-message`:"error-message"),C=()=>!!n;const S=(e=>{switch(e){case"v2-grid":return x$;case"grid":return y$;case"flex":return v$}})(x);return t(S,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:d,desktopCols:u};case"grid":return{xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v};case"flex":return}})(x),{children:[r&&e(f$,"string"==typeof r?{htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",id:w,disabled:o,children:r}:Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",id:w,disabled:o},r)),(()=>{const e={"aria-invalid":C(),"aria-describedby":C()?$():void 0};return k.map(a,(t=>c(t,e)))})(),n&&e(g$,{id:$(),tabIndex:0,"data-testid":$(),children:n})]}))};function $$(e,t){return $$=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$$(e,t)}function C$(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function S$(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function k$(e){return null!==e&&1===e.length?e[0]:e.slice()}function D$(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function E$(e,t){return T$(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function T$(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let F$=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),D$(r.getMouseEventMap())}))}C$(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=E$(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),D$(r.getKeyDownEventMap()),C$(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),D$(r.getMouseEventMap()),C$(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),D$(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:k$(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:k$(r.state.value)};return r.props.renderTrack(i,o)};let n=S$(t.value);n.length||(n=S$(t.defaultValue)),r.pendingResizeTimeouts=[];const o=[];for(let e=0;e<n.length;e+=1)n[e]=E$(n[e],t),o.push(e);return r.resizeObserver=null,r.resizeElementRef=i.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:o},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,$$(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=S$(e.value);return r.length?t.pending?null:{value:r.map((t=>E$(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return k$(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),a=Math.abs(e-i);a<t&&(t=a,r=o)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return E$(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),i=e[r],o=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],i=r[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),i=E$(this.calcValue(r),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=E$(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=E$(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,i=t[r];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,o&&n>1&&(e>i?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const o=n-i*r;t[e-1-i]>o&&(t[e-1-i]=o)}}(n,t,l,a)):e<i&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const e=n+i*r;t[i]<e&&(t[i]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,i;for(n=r,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=T$(i,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=T$(i,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](k$(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,o,a)},t}(i.Component);F$.displayName="ReactSlider",F$.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var O$=F$;const M$=M.div`
    isolation: isolate;
`,_$=M.div`
    margin-top: ${jc["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${jc["spacing-8"]};
`,I$=M.div`
    margin-bottom: ${jc["spacing-8"]};
`,A$=M(ud.BodyBL)`
    overflow-wrap: anywhere;
`,B$=M(O$)`
    height: 0.875rem;
`,R$=M.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?_`
                cursor: not-allowed;
            `:e.$readOnly?void 0:_`
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

        background-color: ${Ic.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${Rc["width-010"]} ${Rc.solid}
            ${e=>e.$disabled?Ic["border-selected-disabled"]:Ic["border-strong"]};
        border-radius: ${zc.full};
    }
`,j$=M.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${R$}:after {
        outline-offset: -1px;
        outline: ${Rc["width-040"]} ${Rc.solid}
            ${Ic["border-selected"]};
    }
`,z$=M.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${zc.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Ic["border-strong"](e)};
`,P$=r=>{var{value:n,min:i=0,max:o=100,step:s=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:h,readOnly:g,ariaLabels:p,showSliderLabels:f,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=Vo(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[k,D]=a(T()),E=function(){const e=function(){const e=h||g?Ic["border-disabled"]:Ic["border-strong"],t=h||g?Ic["border-selected-disabled"]:Ic["border-selected"];if(1===c)return[t,e];const r=[];r.push(e);for(let e=0;e<c-1;e++)r.push(t);return r.push(e),r}();return new Array(c+1).fill(0).map(((t,r)=>(null==d?void 0:d[r])||e[r]))}();u((()=>{n!==k&&D(T())}),[n]);function T(){if(n&&n.length===c)return n;const e=[];for(let t=0;t<c;t++)e.push(i+s*t);return e}const F=e=>w?w(e):t(A$,{children:[m,e,b]});return t(M$,Object.assign({},S,{children:[v&&e(I$,{children:(()=>{let e="";if(1===k.length)e=`${k[0]}`;else if(2===k.length)e=`${k[0]} - ${k[1]}`;else if(k.length>2){e=`${Math.min(...k)} - ${Math.max(...k)}`}return t(A$,{children:[y,e,x]})})()}),e(B$,{step:s,min:i,max:o,value:k,disabled:h||g,onChange:(e,t)=>{if("number"==typeof e){const t=[e];D(t),null==$||$(t)}else{if(t>-1&&k[t]===e[t])return;const r=[...e];D(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];D(t),null==C||C(t)}else{const t=[...e];D(t),null==C||C(t)}},minDistance:l,ariaLabel:p,renderThumb:(t,r)=>e(j$,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:h?void 0:t.tabIndex,children:e(R$,{$disabled:h,$readOnly:g})})),renderTrack:(t,r)=>e(z$,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:E[r.index]}))}),f&&t(_$,{children:[e("div",{children:F(i)}),e("div",{children:F(o)})]})]}))},L$=M.div`
    display: flex;
    margin-bottom: ${jc["spacing-16"]};
    align-items: baseline;
`,N$=M.div`
    margin: 0 0.5rem;
`,H$=M.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,W$=M.div`
    flex: 1;
    border-radius: ${zc.sm} ${zc.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Ic["bg-strongest"];return e.$disabled&&e.$selected?t=Ic["bg-selected-stronger-disabled"]:e.$disabled?t=Ic["bg-disabled"]:e.$selected&&(t=Ic["bg-selected-stronger"]),_`
            background-color: ${t};
        `}}
`,Y$=M(P$)`
    margin-top: -0.3125rem;
`,V$=n=>{var{bins:i=[],interval:o,disabled:s,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:h,rangeLabelSuffix:g,ariaLabels:p,onChange:f,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=n,x=Vo(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),$=Math.max(...w),C=i.map((e=>e.minValue)),S=Math.max(...C),k=Math.min(...C),[D,E]=a(M()),T=m((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(S-k)/o+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===k+o*n));t?r.push(t):r.push({count:0,minValue:k+o*n})}return r}),[i,o]);u((()=>{c!==D&&E(M())}),[c]);const F=e=>{const[t,r]=e,n=[t,r];E(n),null==f||f(n)},O=e=>{const[t,r]=e,n=[t,r];E(n),null==b||b(n)};function M(){return null!=c?c:[k,k+o]}const _=e=>y?y(e):t(ud.BodyBL,{children:[h,e,g]});return t("div",Object.assign({},x,{children:[d&&t(L$,{children:[_(D[0]),e(N$,{children:"-"}),_(D[1])]}),T.every((e=>0===e.count))&&v?v():t(r,{children:[e(H$,{children:T.map(((t,r)=>{const n=t.count/$;return e(W$,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=D[0]&&t.minValue<D[1],$disabled:s||l},r)}))}),e(Y$,{min:k,max:S+o,step:o,minRange:o,numOfThumbs:2,value:D,disabled:s,readOnly:l,ariaLabels:p,onChange:F,onChangeEnd:O})]})]}))},U$=M(Kp)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&_`
            padding-left: ${jc["spacing-16"]};
            padding-right: ${e.$showClear?0:jc["spacing-16"]};
        `}
`,K$=M(Xp)`
    height: auto;
    padding: ${jc["spacing-12"]} ${jc["spacing-16"]};

    cursor: pointer;
    color: ${Ic.icon};

    ${e=>"no-border"===e.$styleType&&_`
            margin-right: -${jc["spacing-12"]};
        `}
`,X$=M(Pe)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,q$=M.div`
    display: flex;
    width: 100%;
`,G$=M(Vp)`
    display: flex;
    align-items: center;
    width: 100%;
`,Z$=i.forwardRef(((n,i)=>{var{value:a,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:g,allowClear:p=!1,className:f,styleType:m="bordered"}=n,b=Vo(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,t)=>"tel"===e&&!!t)(l,s),x=o(null);v(i,(()=>x.current),[]);const w=uh({ref:x,formatter:e=>y?ah.transformWithSpaces(e,s):e}),$=e=>{h&&(y?S(e):h(e))},C=()=>{g&&g(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,i=r.replace(/\s/g,"");e.target.value=i,null==h||h(e),n()},k=a?(e=>e?y?ah.transformWithSpaces(e,s):e:"")(a):a,D=p&&!d&&!u&&!!a,E=()=>t(r,{children:[e(U$,Object.assign({"data-testid":"input",ref:x,disabled:d,value:k,onChange:$,type:l,readOnly:u,$showClear:D,$styleType:m},b)),D&&e(K$,{onClick:C,type:"button",$styleType:m,children:e(X$,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===m?e(q$,{className:f,children:E()}):e(G$,{$disabled:d,$error:c,$readOnly:u,className:f,children:E()})})})),Q$=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(Z$,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:r,error:!!i},y))})}));var J$=_s;var eC=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var tC=function(e){return this.__data__.get(e)};var rC=function(e){return this.__data__.has(e)},nC=_s,iC=Is,oC=Js;var aC=function(e,t){var r=this.__data__;if(r instanceof nC){var n=r.__data__;if(!iC||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new oC(n)}return r.set(e,t),this.size=r.size,this},sC=_s,lC=function(){this.__data__=new J$,this.size=0},cC=eC,dC=tC,uC=rC,hC=aC;function gC(e){var t=this.__data__=new sC(e);this.size=t.size}gC.prototype.clear=lC,gC.prototype.delete=cC,gC.prototype.get=dC,gC.prototype.has=uC,gC.prototype.set=hC;var pC=gC;var fC=Js,mC=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},bC=function(e){return this.__data__.has(e)};function vC(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new fC;++t<r;)this.add(e[t])}vC.prototype.add=vC.prototype.push=mC,vC.prototype.has=bC;var yC=function(e,t){return e.has(t)},xC=vC,wC=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},$C=yC;var CC=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,g=2&r?new xC:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var p=e[u],f=t[u];if(n)var m=a?n(f,p,u,t,e,o):n(p,f,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(g){if(!wC(t,(function(e,t){if(!$C(g,t)&&(p===e||i(p,e,r,n,o)))return g.push(t)}))){h=!1;break}}else if(p!==f&&!i(p,f,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var SC=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var kC=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},DC=ra.Uint8Array,EC=ps,TC=CC,FC=SC,OC=kC,MC=na?na.prototype:void 0,_C=MC?MC.valueOf:void 0;var IC=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new DC(e),new DC(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return EC(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=FC;case"[object Set]":var l=1&n;if(s||(s=OC),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=TC(s(e),s(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(_C)return _C.call(e)==_C.call(t)}return!1};var AC=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},BC=AC,RC=Qo;var jC=function(e,t,r){var n=t(e);return RC(e)?n:BC(n,r(e))};var zC=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},PC=function(){return[]},LC=Object.prototype.propertyIsEnumerable,NC=Object.getOwnPropertySymbols,HC=NC?function(e){return null==e?[]:(e=Object(e),zC(NC(e),(function(t){return LC.call(e,t)})))}:PC;var WC=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},YC=pa,VC=fa;var UC=function(e){return VC(e)&&"[object Arguments]"==YC(e)},KC=fa,XC=Object.prototype,qC=XC.hasOwnProperty,GC=XC.propertyIsEnumerable,ZC=UC(function(){return arguments}())?UC:function(e){return KC(e)&&qC.call(e,"callee")&&!GC.call(e,"callee")},QC={exports:{}};var JC=function(){return!1};!function(e,t){var r=ra,n=JC,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(QC,QC.exports);var eS=QC.exports,tS=/^(?:0|[1-9]\d*)$/;var rS=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&tS.test(e))&&e>-1&&e%1==0&&e<t};var nS=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},iS=pa,oS=nS,aS=fa,sS={};sS["[object Float32Array]"]=sS["[object Float64Array]"]=sS["[object Int8Array]"]=sS["[object Int16Array]"]=sS["[object Int32Array]"]=sS["[object Uint8Array]"]=sS["[object Uint8ClampedArray]"]=sS["[object Uint16Array]"]=sS["[object Uint32Array]"]=!0,sS["[object Arguments]"]=sS["[object Array]"]=sS["[object ArrayBuffer]"]=sS["[object Boolean]"]=sS["[object DataView]"]=sS["[object Date]"]=sS["[object Error]"]=sS["[object Function]"]=sS["[object Map]"]=sS["[object Number]"]=sS["[object Object]"]=sS["[object RegExp]"]=sS["[object Set]"]=sS["[object String]"]=sS["[object WeakMap]"]=!1;var lS=function(e){return aS(e)&&oS(e.length)&&!!sS[iS(e)]};var cS=function(e){return function(t){return e(t)}},dS={exports:{}};!function(e,t){var r=Jo,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(dS,dS.exports);var uS=dS.exports,hS=lS,gS=cS,pS=uS&&uS.isTypedArray,fS=pS?gS(pS):hS,mS=WC,bS=ZC,vS=Qo,yS=eS,xS=rS,wS=fS,$S=Object.prototype.hasOwnProperty;var CS=function(e,t){var r=vS(e),n=!r&&bS(e),i=!r&&!n&&yS(e),o=!r&&!n&&!i&&wS(e),a=r||n||i||o,s=a?mS(e.length,String):[],l=s.length;for(var c in e)!t&&!$S.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||xS(c,l))||s.push(c);return s},SS=Object.prototype;var kS=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||SS)};var DS=function(e,t){return function(r){return e(t(r))}},ES=DS(Object.keys,Object),TS=kS,FS=ES,OS=Object.prototype.hasOwnProperty;var MS=function(e){if(!TS(e))return FS(e);var t=[];for(var r in Object(e))OS.call(e,r)&&"constructor"!=r&&t.push(r);return t},_S=Ta,IS=nS;var AS=function(e){return null!=e&&IS(e.length)&&!_S(e)},BS=CS,RS=MS,jS=AS;var zS=function(e){return jS(e)?BS(e):RS(e)},PS=jC,LS=HC,NS=zS;var HS=function(e){return PS(e,NS,LS)},WS=Object.prototype.hasOwnProperty;var YS=function(e,t,r,n,i,o){var a=1&r,s=HS(e),l=s.length;if(l!=HS(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:WS.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var g=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var f=e[d=s[c]],m=t[d];if(n)var b=a?n(m,f,d,t,e,o):n(f,m,d,e,t,o);if(!(void 0===b?f===m||i(f,m,r,n,o):b)){g=!1;break}p||(p="constructor"==d)}if(g&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(g=!1)}return o.delete(e),o.delete(t),g},VS=Ka(ra,"DataView"),US=Is,KS=Ka(ra,"Promise"),XS=Ka(ra,"Set"),qS=Ka(ra,"WeakMap"),GS=pa,ZS=Ia,QS="[object Map]",JS="[object Promise]",ek="[object Set]",tk="[object WeakMap]",rk="[object DataView]",nk=ZS(VS),ik=ZS(US),ok=ZS(KS),ak=ZS(XS),sk=ZS(qS),lk=GS;(VS&&lk(new VS(new ArrayBuffer(1)))!=rk||US&&lk(new US)!=QS||KS&&lk(KS.resolve())!=JS||XS&&lk(new XS)!=ek||qS&&lk(new qS)!=tk)&&(lk=function(e){var t=GS(e),r="[object Object]"==t?e.constructor:void 0,n=r?ZS(r):"";if(n)switch(n){case nk:return rk;case ik:return QS;case ok:return JS;case ak:return ek;case sk:return tk}return t});var ck=lk,dk=pC,uk=CC,hk=IC,gk=YS,pk=ck,fk=Qo,mk=eS,bk=fS,vk="[object Arguments]",yk="[object Array]",xk="[object Object]",wk=Object.prototype.hasOwnProperty;var $k=function(e,t,r,n,i,o){var a=fk(e),s=fk(t),l=a?yk:pk(e),c=s?yk:pk(t),d=(l=l==vk?xk:l)==xk,u=(c=c==vk?xk:c)==xk,h=l==c;if(h&&mk(e)){if(!mk(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new dk),a||bk(e)?uk(e,t,r,n,i,o):hk(e,t,l,r,n,i,o);if(!(1&r)){var g=d&&wk.call(e,"__wrapped__"),p=u&&wk.call(t,"__wrapped__");if(g||p){var f=g?e.value():e,m=p?t.value():t;return o||(o=new dk),i(f,m,r,n,o)}}return!!h&&(o||(o=new dk),gk(e,t,r,n,i,o))},Ck=fa;var Sk=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Ck(t)&&!Ck(r)?t!=t&&r!=r:$k(t,r,n,i,e,o))},kk=pC,Dk=Sk;var Ek=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new kk;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?Dk(d,c,3,n,u):h))return!1}}return!0},Tk=Sa;var Fk=function(e){return e==e&&!Tk(e)},Ok=Fk,Mk=zS;var _k=function(e){for(var t=Mk(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Ok(i)]}return t};var Ik=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ak=Ek,Bk=_k,Rk=Ik;var jk=function(e,t){return null!=e&&t in Object(e)},zk=yl,Pk=ZC,Lk=Qo,Nk=rS,Hk=nS,Wk=wl;var Yk=function(e,t,r){for(var n=-1,i=(t=zk(t,e)).length,o=!1;++n<i;){var a=Wk(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Hk(i)&&Nk(a,i)&&(Lk(e)||Pk(e))},Vk=jk,Uk=Yk;var Kk=Sk,Xk=Dl,qk=function(e,t){return null!=e&&Uk(e,t,Vk)},Gk=Ca,Zk=Fk,Qk=Ik,Jk=wl;var eD=function(e){return function(t){return null==t?void 0:t[e]}},tD=Sl;var rD=eD,nD=function(e){return function(t){return tD(t,e)}},iD=Ca,oD=wl;var aD=function(e){var t=Bk(e);return 1==t.length&&t[0][2]?Rk(t[0][0],t[0][1]):function(r){return r===e||Ak(r,e,t)}},sD=function(e,t){return Gk(e)&&Zk(t)?Qk(Jk(e),t):function(r){var n=Xk(r,e);return void 0===n&&n===t?qk(r,e):Kk(t,n,3)}},lD=function(e){return e},cD=Qo,dD=function(e){return iD(e)?rD(oD(e)):nD(e)};var uD=function(e){return"function"==typeof e?e:null==e?lD:"object"==typeof e?cD(e)?sD(e[0],e[1]):aD(e):dD(e)},hD=uD,gD=AS,pD=zS;var fD=function(e){return function(t,r,n){var i=Object(t);if(!gD(t)){var o=hD(r);t=pD(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var mD=Ug,bD=1/0;var vD=function(e){return e?(e=mD(e))===bD||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var yD=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},xD=uD,wD=function(e){var t=vD(e),r=t%1;return t==t?r?t-r:t:0},$D=Math.max;var CD=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:wD(r);return i<0&&(i=$D(n+i,0)),yD(e,xD(t),i)},SD=Zo(CD),kD=Zo(fD(CD)),DD=Sk;var ED=Zo((function(e,t){return DD(e,t)}));const TD=M(Ho.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,FD=M.ul`
    border-bottom-left-radius: ${zc.sm};
    border-bottom-right-radius: ${zc.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${jc["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ic["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${zc.full};
        background-clip: padding-box;
    }

    ${Lc.MaxWidth.sm} {
        max-height: 15rem;
    }
`,OD=M.li`
    :hover,
    :focus,
    :active {
        background: ${Ic["bg-hover"]};
    }
    ${e=>{if(e.$checked)return _`
                background: ${Ic["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${Ic["bg-selected-hover"]};
                }
            `}}
`,MD=M.button`
    display: flex;
    ${e=>e.$multiSelect?_`
                padding: ${jc["spacing-8"]} ${jc["spacing-16"]};
            `:_`
                padding: 15px ${jc["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${jc["spacing-8"]};
    border: none;
    border-radius: ${zc.none};
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Ic["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,_D=_`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,ID=M.div`
    ${e=>"small"===e.$variant?Ac["body-md-regular"]:Ac["body-baseline-regular"]}
    color: ${Ic.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&_D}
`,AD=M.div`
    color: ${Ic["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&_D}

    ${e=>"next-line"===e.$labelDisplayType?_`
                    ${Ac["body-md-semibold"]}
                `:_`
                    ${Ac["body-baseline-regular"]}
                `}
`,BD=M.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return _`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return _`
                    ${ID} {
                        display: inline;
                    }

                    ${AD} {
                        display: inline;
                        margin-left: ${jc["spacing-8"]};
                    }
                `}}}
`,RD=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,jD=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,zD=M(Ag)`
    flex-shrink: 0;
    margin-right: ${jc["spacing-16"]};
`,PD=M.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${jc["spacing-16"]} 0 ${jc["spacing-8"]} 0;
`,LD=M.button`
    ${e=>"small"===e.$variant?Ac["body-md-semibold"]:Ac["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Ic["text-primary"]};
`,ND=M.div`
    width: 100%;
    display: flex;
    padding: 15px ${jc["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?Ac["body-md-regular"]:Ac["body-baseline-regular"]}
`,HD=M(L)`
    height: 1em;
    width: 1em;
    margin-right: ${jc["spacing-4"]};
    color: ${Ic["icon-error"]};
`,WD=M(Fd)`
    margin-right: ${jc["spacing-4"]};
    color: ${Ic.icon};
`,YD=e=>"small"===e?1:1.375,VD=e=>_`
        height: ${YD(e)}rem;
        width: ${YD(e)}rem;
    `,UD=M.li`
    background: ${Ic["bg-strong"]};
    display: flex;
    border-radius: ${zc.sm};
    align-items: center;
`,KD=M(Kp)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${jc["spacing-8"]} 0 0;
    width: 100%;
`,XD=M(We)`
    ${e=>VD(e.$variant)}
    margin: 0 ${jc["spacing-8"]};
    color: ${Ic.icon};
`,qD=M(ad)`
    ${e=>VD(e.$variant)}
    padding: 0;
    margin: 0 ${jc["spacing-8"]};
    color: ${Ic.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return _`
                svg {
                    ${VD(e.$variant)}
                }
            `}}
`,GD=g(((r,n)=>{const{onClear:i}=r,o=Vo(r,["onClear"]);return t(UD,{children:[e(XD,{$variant:r.variant}),e(KD,Object.assign({ref:n,$variant:r.variant},o)),o.value&&e(qD,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:r.variant,children:e(re,{})})]},"search")})),ZD=n=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:g,searchPlaceholder:p="Search",onSearch:f,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:C="success",itemTruncationType:S="end",itemMaxLines:k=2,labelDisplayType:D="inline",renderListItem:E,onBlur:T,hideNoResultsDisplay:F,renderCustomCallToAction:O,variant:M="default"}=n,_=Vo(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[I,A]=a(0),[B,R]=a(""),[j,z]=a(null!=i?i:[]),[P,L]=a(0),N=So({height:P}),H=o(null),W=o(null),Y=o([]),V=o(null),U=o(null),K=o(I),X=o(j),q=e=>{K.current=e,A(e)},G=e=>{X.current=e,z(e)};u((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),u((()=>{ee(B)}),[B]),u((()=>{if(R(""),h){if(setTimeout((()=>{L(te())})),v)return;V&&V.current?(V.current.focus(),q(-1)):Y.current[I]&&Y.current[I].focus()}else L(0)}),[h]),u((()=>{if(h){const e=te();L(e)}}),[j,C]),u((()=>{G(null!=i?i:[]),R(""),q(0)}),[i]);const Z=e=>{const t=s?s(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},Q=e=>{if("inline"!==D)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return ah.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!kD(x,(t=>ED(t,e))),ee=e=>{if(""===e)G(null!=i?i:[]);else if(m){const t=m(e);G(t)}else{const t=null==i?void 0:i.filter((t=>{const{title:r,secondaryLabel:n}=Z(t),i=e.trim().toLowerCase();return r.includes(i)||n&&n.includes(i)}));G(null!=t?t:[])}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{var t,r;if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<X.current.length-1){const e=K.current+1;null===(t=Y.current[e])||void 0===t||t.focus(),q(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;null===(r=Y.current[e])||void 0===r||r.focus(),q(K.current-1)}break;case"Escape":b&&b(!0)}},ne=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;R(t),f&&f()},oe=()=>{var e;R(""),null===(e=V.current)||void 0===e||e.focus(),f&&f()},ae=()=>{$&&$()},se=()=>{T&&T()},le=n=>t(r,{children:[e(RD,{$maxLines:k,"aria-hidden":!0,children:n}),e(jD,{$maxLines:k,"aria-hidden":!0,children:n})]}),ce=r=>{const{title:n,secondaryLabel:i}=Z(r),o=Q(n),a=i&&Q(i);return t(BD,{$labelDisplayType:o||a?"next-line":D,children:[e(ID,{$truncateType:S,$maxLines:k,$variant:M,"aria-label":n,children:"middle"===S&&o?le(n):n}),i&&e(AD,{$truncateType:S,$maxLines:k,$labelDisplayType:D,"aria-label":i,children:"middle"===S&&a?le(i):i})]})},de=()=>{if(!$||"success"===C)return j.map(((r,n)=>e(OD,{$checked:J(r)&&!y,children:t(MD,{$hasNextLineLabel:"next-line"===D&&j.length>0&&s&&"string"!=typeof s(j[0]),onClick:e=>{ne(e,r)},ref:e=>Y.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:y,onBlur:se,$variant:M,children:[y&&e(zD,{checked:J(r),displaySize:"small"}),E?E(r,{selected:J(r)}):ce(r)]})},((e,t)=>`item_${t}__${l?l(e):e}`)(r,n))))},ue=()=>{if(x&&y&&j.length>0&&!B&&"success"===C)return e(PD,{children:e(LD,{onClick:w,type:"button",$variant:M,children:0===x.length?"Select all":"Clear all"})},"selectAll")},he=()=>{if(!F&&(B||!g)&&0===j.length&&"success"===C)return t(ND,{"data-testid":"list-no-results",$variant:M,children:[e(HD,{"data-testid":"no-result-icon",$variant:M}),"No results found."]},"noResults")},ge=()=>{if($&&"loading"===C)return t(ND,{"data-testid":"list-loading",$variant:M,children:[e(WD,{}),"Loading..."]},"loading")},pe=()=>{if($&&"fail"===C)return t(ND,{"data-testid":"list-fail",$variant:M,children:[e(HD,{"data-testid":"load-error-icon",$variant:M}),"Failed to load. ",e(LD,{onClick:ae,type:"button",$variant:M,children:"Try again."})]},"noResults")};return e(r,{children:t(TD,{style:N,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(h)return t(FD,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},_,{children:[(g||m)&&"success"===C?e(GD,{ref:V,onChange:ie,value:B,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:M}):null,ue(),he(),ge(),pe(),de()]}))})(),(()=>{if(h&&O)return e("div",{ref:U,"data-testid":"custom-cta",children:O(b,j)})})()]})})},QD=M.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return _`
                border-bottom: ${Rc["width-010"]} ${Rc.solid}
                    ${Ic.border};
            `}}

    ${e=>e.$readOnly?_`
                border: 0;
                margin: 0;
            `:"right"===e.$position?_`
                        flex-direction: row-reverse;
                        margin: 0 ${jc["spacing-16"]};
                    `:_`
                        flex-direction: row;
                        margin: 0 ${jc["spacing-16"]};
                    `}
`,JD=M(yf)`
    padding: 0;
    width: auto;
`,eE=M.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${jc["spacing-12"]};
`,tE=M.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Bc["duration-250"]} ${Bc["ease-default"]};
    margin: 0 ${jc["spacing-12"]};
    display: flex;
    align-items: center;
`,rE=M(ve)`
    color: ${Ic.icon};
    height: ${Ac.Spec["body-size-baseline"]};
    width: ${Ac.Spec["body-size-baseline"]};
`,nE=M.div`
    display: flex;
    flex: 1 1 auto;
`,iE=M(ud.BodyBL)`
    text-align: left;
    ${sd(2)}
    text-overflow: ellipsis;
`,oE=M(iE)`
    color: ${Ic["text-subtler"]};
`,aE=M.div`
    width: 1px;
    background: ${Ic.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return _`
                display: none;
            `}}

    ${e=>"right"===e.$position?_`
                    margin: 0 ${jc["spacing-12"]};
                `:_`
                    margin: 0 ${jc["spacing-12"]} 0 0;
                `}
`,sE=M(Vp)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${jc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,lE=M(Vp)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${jc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,cE=M(Z$)``,dE=M.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Ac["body-baseline-regular"]}
    color: ${Ic.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return _`
                color: ${Ic["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?_`
                    margin-left: ${e.$readOnly?jc["spacing-4"]:jc["spacing-12"]};
                `:_`
                    margin-right: ${e.$readOnly?jc["spacing-4"]:jc["spacing-12"]};
                `};
`,uE=i.forwardRef(((n,i)=>{var{addon:s,error:l,onChange:c,readOnly:d,className:h,onBlur:g}=n,p=Vo(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:f,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:C,onSelectOption:S,onHideOptions:k,onShowOptions:D,"data-selector-testid":E}=s.attributes,{position:T}=s,[F,O]=a(C),[M,_]=a(!1),I=o(null);u((()=>{O(C)}),[C]);const A=()=>{if(F)return $?$(F):x?x(F):F.toString()},B=e=>{!e&&k&&k(),e&&D&&D()},R=e=>{e.preventDefault(),p.disabled||(_(!M),B(!M))},j=(e,t)=>{var r;O(e),_(!1),B(!1),I&&(null===(r=I.current)||void 0===r||r.focus()),S&&S(e,t)},z=e=>{c&&c(e)},P=()=>{g&&g()},L=()=>{var e;_(!1),B(!1),I&&(null===(e=I.current)||void 0===e||e.focus())};return t(Ef,{className:h,show:M,error:l&&!M,disabled:p.disabled,readOnly:d,onBlur:()=>{_(!1),B(!1),P()},children:[t(QD,{$expanded:M,$readOnly:d,$position:T,children:[d?F?e(eE,{children:e(iE,{"data-testid":"selector-label",children:A()})}):null:e(JD,{ref:I,type:"button",disabled:p.disabled,"data-testid":E||"addon-selector",onClick:R,children:t(r,{children:[t(nE,{children:[f&&!F&&e(oE,{children:f}),F&&e(iE,{"data-testid":"selector-label",children:A()})]}),e(tE,{$expanded:M,children:e(rE,{})})]})}),e(aE,{$readOnly:d,$position:T}),e(cE,Object.assign({ref:i},p,{readOnly:d,error:l,onChange:z,"data-testid":p["data-testid"]||"input",onBlur:P,styleType:"no-border"}))]}),m&&m.length>0?e(ZD,{listItems:m,selectedItems:C?[C]:[],onSelectItem:j,valueExtractor:x,listExtractor:w,visible:M,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:L}):e(r,{})]})})),hE=i.forwardRef(((r,n)=>{var{addon:i,error:o,className:a}=r,s=Vo(r,["addon","error","className"]);const l=()=>e(lE,{$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,children:e(cE,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!i)return l();{const{type:r="label",position:c="left"}=i,{allowClear:d}=s;switch(r){case"list":{const t=i.attributes;return t.options&&t.options.length>0?e(uE,Object.assign({ref:n,addon:i,error:o,className:a},s)):l()}case"custom":{const r=i.attributes;return r.children?t(sE,{$error:o,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(dE,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.children}),e(cE,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=i.attributes;return r.value?t(sE,{$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a,children:[e(dE,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:c,children:r.value}),e(cE,Object.assign({ref:n},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),gE=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(hE,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},y))})})),pE=M(hE)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":jc["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,fE=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Ic.icon,$activeColor:r=Ic["icon-primary"]})=>e?t:r};
    padding: ${jc["spacing-12"]} ${jc["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,mE=M.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,bE=M(ud.BodyBL)`
    color: ${Ic["text-subtler"]};
`,vE=M(Fd)`
    margin-right: ${jc["spacing-8"]};
    color: ${Ic.icon};
`,yE=M.span`
    color: ${Ic["text-primary"]};
    text-decoration: underline;
    font-weight: ${Ac.Spec["weight-semibold"]};
`,xE=M.span`
    display: flex;
    align-items: center;
    margin-right: ${jc["spacing-8"]};
`,wE=M(Ue)`
    color: ${Ic["icon-warning"]};
    margin-right: ${jc["spacing-8"]};
    height: 1em;
    width: 1em;
`,$E=M.span`
    color: ${Ic["text-warning"]};
`,CE=M(Xp)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Ac["body-baseline-regular"]}

    :hover, :active, :focus {
        ${yE} {
            color: ${Ic["text-hover"]};
        }
    }
`;var SE,kE,DE={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */SE=DE,kE=DE.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",i=16,o=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,g=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",i],["flip",512],["partial",o],["partialRight",a],["rearg",l]],p="[object Arguments]",f="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",k="[object RegExp]",D="[object Set]",E="[object String]",T="[object Symbol]",F="[object WeakMap]",O="[object ArrayBuffer]",M="[object DataView]",_="[object Float32Array]",I="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",R="[object Int32Array]",j="[object Uint8Array]",z="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),X=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,ie=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,oe=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,fe=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",De="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="['’]",Te="["+xe+"]",Fe="["+De+"]",Oe="["+we+"]",Me="\\d+",_e="["+$e+"]",Ie="["+Ce+"]",Ae="[^"+xe+De+Me+$e+Ce+Se+"]",Be="\\ud83c[\\udffb-\\udfff]",Re="[^"+xe+"]",je="(?:\\ud83c[\\udde6-\\uddff]){2}",ze="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",Le="\\u200d",Ne="(?:"+Ie+"|"+Ae+")",He="(?:"+Pe+"|"+Ae+")",We="(?:['’](?:d|ll|m|re|s|t|ve))?",Ye="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ve="(?:"+Oe+"|"+Be+")?",Ue="["+ke+"]?",Ke=Ue+Ve+"(?:"+Le+"(?:"+[Re,je,ze].join("|")+")"+Ue+Ve+")*",Xe="(?:"+[_e,je,ze].join("|")+")"+Ke,qe="(?:"+[Re+Oe+"?",Oe,je,ze,Te].join("|")+")",Ge=RegExp(Ee,"g"),Ze=RegExp(Oe,"g"),Qe=RegExp(Be+"(?="+Be+")|"+qe+Ke,"g"),Je=RegExp([Pe+"?"+Ie+"+"+We+"(?="+[Fe,Pe,"$"].join("|")+")",He+"+"+Ye+"(?="+[Fe,Pe+Ne,"$"].join("|")+")",Pe+"?"+Ne+"+"+We,Pe+"+"+Ye,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Xe].join("|"),"g"),et=RegExp("["+Le+xe+we+ke+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,rt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],nt=-1,it={};it[_]=it[I]=it[A]=it[B]=it[R]=it[j]=it[z]=it[P]=it[L]=!0,it[p]=it[f]=it[O]=it[m]=it[M]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[k]=it[D]=it[E]=it[F]=!1;var ot={};ot[p]=ot[f]=ot[O]=ot[M]=ot[m]=ot[b]=ot[_]=ot[I]=ot[A]=ot[B]=ot[R]=ot[w]=ot[$]=ot[C]=ot[k]=ot[D]=ot[E]=ot[T]=ot[j]=ot[z]=ot[P]=ot[L]=!0,ot[v]=ot[y]=ot[F]=!1;var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,lt=parseInt,ct="object"==typeof Go&&Go&&Go.Object===Object&&Go,dt="object"==typeof self&&self&&self.Object===Object&&self,ut=ct||dt||Function("return this")(),ht=kE&&!kE.nodeType&&kE,gt=ht&&SE&&!SE.nodeType&&SE,pt=gt&&gt.exports===ht,ft=pt&&ct.process,mt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||ft&&ft.binding&&ft.binding("util")}catch(e){}}(),bt=mt&&mt.isArrayBuffer,vt=mt&&mt.isDate,yt=mt&&mt.isMap,xt=mt&&mt.isRegExp,wt=mt&&mt.isSet,$t=mt&&mt.isTypedArray;function Ct(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function St(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Dt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Tt(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function Ft(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function Ot(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function Mt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function _t(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function It(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function At(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Bt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var Rt=Wt("length");function jt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function zt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):zt(e,Nt,r)}function Lt(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Nt(e){return e!=e}function Ht(e,t){var r=null==e?0:e.length;return r?Ut(e,t)/r:u}function Wt(t){return function(r){return null==r?e:r[t]}}function Yt(t){return function(r){return null==t?e:t[r]}}function Vt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function Ut(t,r){for(var n,i=-1,o=t.length;++i<o;){var a=r(t[i]);a!==e&&(n=n===e?a:n+a)}return n}function Kt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Xt(e){return e?e.slice(0,ur(e)+1).replace(re,""):e}function qt(e){return function(t){return e(t)}}function Gt(e,t){return Mt(t,(function(t){return e[t]}))}function Zt(e,t){return e.has(t)}function Qt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function Jt(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var er=Yt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tr=Yt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rr(e){return"\\"+at[e]}function nr(e){return et.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function or(e,t){return function(r){return e(t(r))}}function ar(e,t){for(var r=-1,i=e.length,o=0,a=[];++r<i;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[o++]=r)}return a}function sr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function cr(e){return nr(e)?function(e){for(var t=Qe.lastIndex=0;Qe.test(e);)++t;return t}(e):Rt(e)}function dr(e){return nr(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function ur(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var hr=Yt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),gr=function ne(xe){var we=(xe=null==xe?ut:gr.defaults(ut.Object(),xe,gr.pick(ut,rt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,ke=xe.Math,De=xe.Object,Ee=xe.RegExp,Te=xe.String,Fe=xe.TypeError,Oe=we.prototype,Me=Se.prototype,_e=De.prototype,Ie=xe["__core-js_shared__"],Ae=Me.toString,Be=_e.hasOwnProperty,Re=0,je=function(){var e=/[^.]+$/.exec(Ie&&Ie.keys&&Ie.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ze=_e.toString,Pe=Ae.call(De),Le=ut._,Ne=Ee("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=pt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=He?He.allocUnsafe:e,Ue=or(De.getPrototypeOf,De),Ke=De.create,Xe=_e.propertyIsEnumerable,qe=Oe.splice,Qe=We?We.isConcatSpreadable:e,et=We?We.iterator:e,at=We?We.toStringTag:e,ct=function(){try{var e=ho(De,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ut.clearTimeout&&xe.clearTimeout,ht=$e&&$e.now!==ut.Date.now&&$e.now,gt=xe.setTimeout!==ut.setTimeout&&xe.setTimeout,ft=ke.ceil,mt=ke.floor,Rt=De.getOwnPropertySymbols,Yt=He?He.isBuffer:e,pr=xe.isFinite,fr=Oe.join,mr=or(De.keys,De),br=ke.max,vr=ke.min,yr=$e.now,xr=xe.parseInt,wr=ke.random,$r=Oe.reverse,Cr=ho(xe,"DataView"),Sr=ho(xe,"Map"),kr=ho(xe,"Promise"),Dr=ho(xe,"Set"),Er=ho(xe,"WeakMap"),Tr=ho(De,"create"),Fr=Er&&new Er,Or={},Mr=zo(Cr),_r=zo(Sr),Ir=zo(kr),Ar=zo(Dr),Br=zo(Er),Rr=We?We.prototype:e,jr=Rr?Rr.valueOf:e,zr=Rr?Rr.toString:e;function Pr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Be.call(e,"__wrapped__"))return Po(e)}return new Hr(e)}var Lr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function Xr(e){var t=this.__data__=new Vr(e);this.size=t.size}function qr(e,t){var r=Ya(e),n=!r&&Wa(e),i=!r&&!n&&Xa(e),o=!r&&!n&&!i&&cs(e),a=r||n||i||o,s=a?Kt(e.length,Te):[],l=s.length;for(var c in e)!t&&!Be.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Gr(t){var r=t.length;return r?t[Xn(0,r-1)]:e}function Zr(e,t){return Bo(Fi(e),sn(t,0,e.length))}function Qr(e){return Bo(Fi(e))}function Jr(t,r,n){(n!==e&&!La(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var i=t[r];Be.call(t,r)&&La(i,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function nn(e,t){return e&&Oi(t,Ms(t),e)}function on(e,t,r){"__proto__"==t&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,i=r.length,o=we(i),a=null==t;++n<i;)o[n]=a?e:Ds(t,r[n]);return o}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,i,o,a){var s,l=1&r,c=2&r,d=4&r;if(n&&(s=o?n(t,i,o,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Fi(t,s)}else{var h=fo(t),g=h==y||h==x;if(Xa(t))return Ci(t,l);if(h==C||h==p||g&&!o){if(s=c||g?{}:bo(t),!l)return c?function(e,t){return Oi(e,po(e),t)}(t,function(e,t){return e&&Oi(t,_s(t),e)}(s,t)):function(e,t){return Oi(e,go(e),t)}(t,nn(s,t))}else{if(!ot[h])return o?t:{};s=function(e,t,r){var n,i=e.constructor;switch(t){case O:return Si(e);case m:case b:return new i(+e);case M:return function(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case _:case I:case A:case B:case R:case j:case z:case P:case L:return ki(e,r);case w:return new i;case $:case E:return new i(e);case k:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case D:return new i;case T:return n=e,jr?De(jr.call(n)):{}}}(t,h,l)}}a||(a=new Xr);var f=a.get(t);if(f)return f;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,i){s.set(i,ln(e,r,n,i,t,a))}));var v=u?e:(d?c?io:no:c?_s:Ms)(t);return kt(v||t,(function(e,i){v&&(e=t[i=e]),en(s,i,ln(e,r,n,i,t,a))})),s}function cn(t,r,n){var i=n.length;if(null==t)return!i;for(t=De(t);i--;){var o=n[i],a=r[o],s=t[o];if(s===e&&!(o in t)||!a(s))return!1}return!0}function dn(r,n,i){if("function"!=typeof r)throw new Fe(t);return Mo((function(){r.apply(e,i)}),n)}function un(e,t,r,n){var i=-1,o=Ft,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=Mt(t,qt(r))),n?(o=Ot,a=!1):t.length>=200&&(o=Zt,a=!1,t=new Kr(t));e:for(;++i<s;){var d=e[i],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else o(t,u,n)||l.push(d)}return l}Pr.templateSettings={escape:X,evaluate:q,interpolate:G,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=Tr?Tr(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(Tr){var i=n[t];return i===r?e:i}return Be.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return Tr?r[t]!==e:Be.call(r,t)},Yr.prototype.set=function(t,n){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=Tr&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():qe.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return co(this,e).get(e)},Ur.prototype.has=function(e){return co(this,e).has(e)},Ur.prototype.set=function(e,t){var r=co(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},Xr.prototype.clear=function(){this.__data__=new Vr,this.size=0},Xr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Xr.prototype.get=function(e){return this.__data__.get(e)},Xr.prototype.has=function(e){return this.__data__.has(e)},Xr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Ii(xn),gn=Ii(wn,!0);function pn(e,t){var r=!0;return hn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function fn(t,r,n){for(var i=-1,o=t.length;++i<o;){var a=t[i],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return hn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function bn(e,t,r,n,i){var o=-1,a=e.length;for(r||(r=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&r(s)?t>1?bn(s,t-1,r,n,i):_t(i,s):n||(i[i.length]=s)}return i}var vn=Ai(),yn=Ai(!0);function xn(e,t){return e&&vn(e,t,Ms)}function wn(e,t){return e&&yn(e,t,Ms)}function $n(e,t){return Tt(t,(function(t){return Za(e[t])}))}function Cn(t,r){for(var n=0,i=(r=yi(r,t)).length;null!=t&&n<i;)t=t[jo(r[n++])];return n&&n==i?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:_t(n,r(e))}function kn(t){return null==t?t===e?"[object Undefined]":"[object Null]":at&&at in De(t)?function(t){var r=Be.call(t,at),n=t[at];try{t[at]=e;var i=!0}catch(e){}var o=ze.call(t);return i&&(r?t[at]=n:delete t[at]),o}(t):function(e){return ze.call(e)}(t)}function Dn(e,t){return e>t}function En(e,t){return null!=e&&Be.call(e,t)}function Tn(e,t){return null!=e&&t in De(e)}function Fn(t,r,n){for(var i=n?Ot:Ft,o=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&r&&(u=Mt(u,qt(r))),c=vr(u.length,c),l[s]=!n&&(r||o>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var h=-1,g=l[0];e:for(;++h<o&&d.length<c;){var p=u[h],f=r?r(p):p;if(p=n||0!==p?p:0,!(g?Zt(g,f):i(d,f,n))){for(s=a;--s;){var m=l[s];if(!(m?Zt(m,f):i(t[s],f,n)))continue e}g&&g.push(f),d.push(p)}}return d}function On(t,r,n){var i=null==(t=To(t,r=yi(r,t)))?t:t[jo(Go(r))];return null==i?e:Ct(i,t,n)}function Mn(e){return ts(e)&&kn(e)==p}function _n(t,r,n,i,o){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,i,o,a){var s=Ya(t),l=Ya(r),c=s?f:fo(t),d=l?f:fo(r),u=(c=c==p?C:c)==C,h=(d=d==p?C:d)==C,g=c==d;if(g&&Xa(t)){if(!Xa(r))return!1;s=!0,u=!1}if(g&&!u)return a||(a=new Xr),s||cs(t)?to(t,r,n,i,o,a):function(e,t,r,n,i,o,a){switch(r){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!o(new Ye(e),new Ye(t)));case m:case b:case $:return La(+e,+t);case v:return e.name==t.name&&e.message==t.message;case k:case E:return e==t+"";case w:var s=ir;case D:var l=1&n;if(s||(s=sr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=to(s(e),s(t),n,i,o,a);return a.delete(e),d;case T:if(jr)return jr.call(e)==jr.call(t)}return!1}(t,r,c,n,i,o,a);if(!(1&n)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,F=x?r.value():r;return a||(a=new Xr),o(S,F,n,i,a)}}return!!g&&(a||(a=new Xr),function(t,r,n,i,o,a){var s=1&n,l=no(t),c=l.length,d=no(r),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var g=l[h];if(!(s?g in r:Be.call(r,g)))return!1}var p=a.get(t),f=a.get(r);if(p&&f)return p==r&&f==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<c;){var v=t[g=l[h]],y=r[g];if(i)var x=s?i(y,v,g,r,t,a):i(v,y,g,t,r,a);if(!(x===e?v===y||o(v,y,n,i,a):x)){m=!1;break}b||(b="constructor"==g)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,i,o,a))}(t,r,n,i,_n,o))}function In(t,r,n,i){var o=n.length,a=o,s=!i;if(null==t)return!a;for(t=De(t);o--;){var l=n[o];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++o<a;){var c=(l=n[o])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new Xr;if(i)var g=i(d,u,c,t,r,h);if(!(g===e?_n(u,d,3,i,h):g))return!1}}return!0}function An(e){return!(!es(e)||(t=e,je&&je in t))&&(Za(e)?Ne:pe).test(zo(e));var t}function Bn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Ln(e):hl(e)}function Rn(e){if(!So(e))return mr(e);var t=[];for(var r in De(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function jn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in De(e))t.push(r);return t}(e);var t=So(e),r=[];for(var n in e)("constructor"!=n||!t&&Be.call(e,n))&&r.push(n);return r}function zn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return hn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Ln(e){var t=uo(e);return 1==t.length&&t[0][2]?Do(t[0][0],t[0][1]):function(r){return r===e||In(r,e,t)}}function Nn(t,r){return wo(t)&&ko(r)?Do(jo(t),r):function(n){var i=Ds(n,t);return i===e&&i===r?Es(n,t):_n(r,i,3)}}function Hn(t,r,n,i,o){t!==r&&vn(r,(function(a,s){if(o||(o=new Xr),es(a))!function(t,r,n,i,o,a,s){var l=Fo(t,n),c=Fo(r,n),d=s.get(c);if(d)Jr(t,n,d);else{var u=a?a(l,c,n+"",t,r,s):e,h=u===e;if(h){var g=Ya(c),p=!g&&Xa(c),f=!g&&!p&&cs(c);u=c,g||p||f?Ya(l)?u=l:Ka(l)?u=Fi(l):p?(h=!1,u=Ci(c,!0)):f?(h=!1,u=ki(c,!0)):u=[]:is(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):h=!1}h&&(s.set(c,u),o(u,c,i,a,s),s.delete(c)),Jr(t,n,u)}}(t,r,s,n,Hn,i,o);else{var l=i?i(Fo(t,s),a,s+"",t,r,o):e;l===e&&(l=a),Jr(t,s,l)}}),_s)}function Wn(t,r){var n=t.length;if(n)return yo(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?Mt(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Mt(t,qt(lo()));var i=Pn(e,(function(e,r,i){var o=Mt(t,(function(t){return t(e)}));return{criteria:o,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;++n<a;){var l=Di(i[n],o[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(o,yi(a,e),s)}return o}function Un(e,t,r,n){var i=n?Lt:Pt,o=-1,a=t.length,s=e;for(e===t&&(t=Fi(t)),r&&(s=Mt(e,qt(r)));++o<a;)for(var l=0,c=t[o],d=r?r(c):c;(l=i(s,d,l,n))>-1;)s!==e&&qe.call(s,l,1),qe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;yo(i)?qe.call(e,i,1):ui(e,i)}}return e}function Xn(e,t){return e+mt(wr()*(t-e+1))}function qn(e,t){var r="";if(!e||t<1||t>d)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return _o(Eo(e,t,nl),e+"")}function Zn(e){return Gr(Ls(e))}function Qn(e,t){var r=Ls(e);return Bo(r,sn(t,0,r.length))}function Jn(t,r,n,i){if(!es(t))return t;for(var o=-1,a=(r=yi(r,t)).length,s=a-1,l=t;null!=l&&++o<a;){var c=jo(r[o]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=s){var u=l[c];(d=i?i(u,c,l):e)===e&&(d=es(u)?u:yo(r[o+1])?[]:{})}en(l,c,d),l=l[c]}return t}var ei=Fr?function(e,t){return Fr.set(e,t),e}:nl,ti=ct?function(e,t){return ct(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ri(e){return Bo(Ls(e))}function ni(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=we(i);++n<i;)o[n]=e[n+t];return o}function ii(e,t){var r;return hn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function oi(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ai(e,t,nl,r)}function ai(t,r,n,i){var o=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,c=ls(r),d=r===e;o<a;){var u=mt((o+a)/2),h=n(t[u]),g=h!==e,p=null===h,f=h==h,m=ls(h);if(s)var b=i||f;else b=d?f&&(i||g):l?f&&g&&(i||!p):c?f&&g&&!p&&(i||!m):!p&&!m&&(i?h<=r:h<r);b?o=u+1:a=u}return vr(a,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?u:+e}function ci(e){if("string"==typeof e)return e;if(Ya(e))return Mt(e,ci)+"";if(ls(e))return zr?zr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,r){var n=-1,i=Ft,o=e.length,a=!0,s=[],l=s;if(r)a=!1,i=Ot;else if(o>=200){var c=t?null:qi(e);if(c)return sr(c);a=!1,i=Zt,l=new Kr}else l=t?[]:s;e:for(;++n<o;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=To(e,t=yi(t,e)))||delete e[jo(Go(t))]}function hi(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function gi(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ni(e,n?0:o,n?o+1:i):ni(e,n?o+1:0,n?i:o)}function pi(e,t){var r=e;return r instanceof Wr&&(r=r.value()),It(t,(function(e,t){return t.func.apply(t.thisArg,_t([e],t.args))}),r)}function fi(e,t,r){var n=e.length;if(n<2)return n?di(e[0]):[];for(var i=-1,o=we(n);++i<n;)for(var a=e[i],s=-1;++s<n;)s!=i&&(o[i]=un(o[i]||a,e[s],t,r));return di(bn(o,1),t,r)}function mi(t,r,n){for(var i=-1,o=t.length,a=r.length,s={};++i<o;){var l=i<a?r[i]:e;n(s,t[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:nl}function yi(e,t){return Ya(e)?e:wo(e,t)?[e]:Ro(vs(e))}var xi=Gn;function wi(t,r,n){var i=t.length;return n=n===e?i:n,!r&&n>=i?t:ni(t,r,n)}var $i=dt||function(e){return ut.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Si(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ki(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Di(t,r){if(t!==r){var n=t!==e,i=null===t,o=t==t,a=ls(t),s=r!==e,l=null===r,c=r==r,d=ls(r);if(!l&&!d&&!a&&t>r||a&&s&&c&&!l&&!d||i&&s&&c||!n&&c||!o)return 1;if(!i&&!a&&!d&&t<r||d&&n&&o&&!i&&!a||l&&n&&o||!s&&o||!c)return-1}return 0}function Ei(e,t,r,n){for(var i=-1,o=e.length,a=r.length,s=-1,l=t.length,c=br(o-a,0),d=we(l+c),u=!n;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[r[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Ti(e,t,r,n){for(var i=-1,o=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(o-s,0),u=we(d+c),h=!n;++i<d;)u[i]=e[i];for(var g=i;++l<c;)u[g+l]=t[l];for(;++a<s;)(h||i<o)&&(u[g+r[a]]=e[i++]);return u}function Fi(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function Oi(t,r,n,i){var o=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],c=i?i(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),o?on(n,l,c):en(n,l,c)}return n}function Mi(e,t){return function(r,n){var i=Ya(r)?St:rn,o=t?t():{};return i(r,e,lo(n,2),o)}}function _i(t){return Gn((function(r,n){var i=-1,o=n.length,a=o>1?n[o-1]:e,s=o>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(o--,a):e,s&&xo(n[0],n[1],s)&&(a=o<3?e:a,o=1),r=De(r);++i<o;){var l=n[i];l&&t(r,l,i,a)}return r}))}function Ii(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=De(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function Ai(e){return function(t,r,n){for(var i=-1,o=De(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}}function Bi(t){return function(r){var n=nr(r=vs(r))?dr(r):e,i=n?n[0]:r.charAt(0),o=n?wi(n,1).join(""):r.slice(1);return i[t]()+o}}function Ri(e){return function(t){return It(Zs(Ws(t).replace(Ge,"")),e,"")}}function ji(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function zi(t){return function(r,n,i){var o=De(r);if(!Ua(r)){var a=lo(n,3);r=Ms(r),n=function(e){return a(o[e],e,o)}}var s=t(r,n,i);return s>-1?o[a?r[s]:s]:e}}function Pi(r){return ro((function(n){var i=n.length,o=i,a=Hr.prototype.thru;for(r&&n.reverse();o--;){var s=n[o];if("function"!=typeof s)throw new Fe(t);if(a&&!l&&"wrapper"==ao(s))var l=new Hr([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=n[o]),d="wrapper"==c?oo(s):e;l=d&&$o(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&$o(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,o=i?n[r].apply(this,e):t;++r<i;)o=n[r].call(this,o);return o}}))}function Li(t,r,n,i,o,a,l,c,d,u){var h=r&s,g=1&r,p=2&r,f=24&r,m=512&r,b=p?e:ji(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(f)var w=so(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(i&&(y=Ei(y,i,o,f)),a&&(y=Ti(y,a,l,f)),v-=$,f&&v<u){var C=ar(y,w);return Ki(t,r,Li,s.placeholder,n,y,C,c,d,u-v)}var S=g?n:this,k=p?S[t]:t;return v=y.length,c?y=function(t,r){for(var n=t.length,i=vr(r.length,n),o=Fi(t);i--;){var a=r[i];t[i]=yo(a,n)?o[a]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ut&&this instanceof s&&(k=b||ji(k)),k.apply(S,y)}}function Ni(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function Hi(t,r){return function(n,i){var o;if(n===e&&i===e)return r;if(n!==e&&(o=n),i!==e){if(o===e)return i;"string"==typeof n||"string"==typeof i?(n=ci(n),i=ci(i)):(n=li(n),i=li(i)),o=t(n,i)}return o}}function Wi(e){return ro((function(t){return t=Mt(t,qt(lo())),Gn((function(r){var n=this;return e(t,(function(e){return Ct(e,n,r)}))}))}))}function Yi(t,r){var n=(r=r===e?" ":ci(r)).length;if(n<2)return n?qn(r,t):r;var i=qn(r,ft(t/cr(r)));return nr(r)?wi(dr(i),0,t).join(""):i.slice(0,t)}function Vi(t){return function(r,n,i){return i&&"number"!=typeof i&&xo(r,n,i)&&(n=i=e),r=gs(r),n===e?(n=r,r=0):n=gs(n),function(e,t,r,n){for(var i=-1,o=br(ft((t-e)/(r||1)),0),a=we(o);o--;)a[n?o:++i]=e,e+=r;return a}(r,n,i=i===e?r<n?1:-1:gs(i),t)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Ki(t,r,n,i,s,l,c,d,u,h){var g=8&r;r|=g?o:a,4&(r&=~(g?a:o))||(r&=-4);var p=[t,r,s,g?l:e,g?c:e,g?e:l,g?e:c,d,u,h],f=n.apply(e,p);return $o(t)&&Oo(f,p),f.placeholder=i,Io(f,t,r)}function Xi(e){var t=ke[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&pr(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var qi=Dr&&1/sr(new Dr([,-0]))[1]==c?function(e){return new Dr(e)}:ll;function Gi(e){return function(t){var r=fo(t);return r==w?ir(t):r==D?lr(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(r,c,d,u,h,g,p,f){var m=2&c;if(!m&&"function"!=typeof r)throw new Fe(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),p=p===e?p:br(ps(p),0),f=f===e?f:ps(f),b-=h?h.length:0,c&a){var v=u,y=h;u=h=e}var x=m?e:oo(r),w=[r,c,d,u,h,v,y,g,p,f];if(x&&function(e,t){var r=e[1],i=t[1],o=r|i,a=o<131,c=i==s&&8==r||i==s&&r==l&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==r;if(!a&&!c)return e;1&i&&(e[2]=t[2],o|=1&r?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Ei(u,d,t[4]):d,e[4]=u?ar(e[3],n):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Ti(u,d,t[6]):d,e[6]=u?ar(e[5],n):t[6]),(d=t[7])&&(e[7]=d),i&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o}(w,x),r=w[0],c=w[1],d=w[2],u=w[3],h=w[4],!(f=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==i?function(t,r,n){var i=ji(t);return function o(){for(var a=arguments.length,s=we(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:ar(s,c);return(a-=d.length)<n?Ki(t,r,Li,o.placeholder,e,s,d,e,e,n-a):Ct(this&&this!==ut&&this instanceof o?i:t,this,s)}}(r,c,f):c!=o&&33!=c||h.length?Li.apply(e,w):function(e,t,r,n){var i=1&t,o=ji(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=we(c+s),u=this&&this!==ut&&this instanceof t?o:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return Ct(u,i?r:this,d)}}(r,c,d,u);else var $=function(e,t,r){var n=1&t,i=ji(e);return function t(){return(this&&this!==ut&&this instanceof t?i:e).apply(n?r:this,arguments)}}(r,c,d);return Io((x?ei:Oo)($,w),r,c)}function Qi(t,r,n,i){return t===e||La(t,_e[n])&&!Be.call(i,n)?r:t}function Ji(t,r,n,i,o,a){return es(t)&&es(r)&&(a.set(r,t),Hn(t,r,e,Ji,a),a.delete(r)),t}function eo(t){return is(t)?e:t}function to(t,r,n,i,o,a){var s=1&n,l=t.length,c=r.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(r);if(d&&u)return d==r&&u==t;var h=-1,g=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++h<l;){var f=t[h],m=r[h];if(i)var b=s?i(m,f,h,r,t,a):i(f,m,h,t,r,a);if(b!==e){if(b)continue;g=!1;break}if(p){if(!Bt(r,(function(e,t){if(!Zt(p,t)&&(f===e||o(f,e,n,i,a)))return p.push(t)}))){g=!1;break}}else if(f!==m&&!o(f,m,n,i,a)){g=!1;break}}return a.delete(t),a.delete(r),g}function ro(t){return _o(Eo(t,e,Vo),t+"")}function no(e){return Sn(e,Ms,go)}function io(e){return Sn(e,_s,po)}var oo=Fr?function(e){return Fr.get(e)}:ll;function ao(e){for(var t=e.name+"",r=Or[t],n=Be.call(Or,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Be.call(Pr,"placeholder")?Pr:e).placeholder}function lo(){var e=Pr.iteratee||il;return e=e===il?Bn:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Ms(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,ko(i)]}return t}function ho(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var go=Rt?function(e){return null==e?[]:(e=De(e),Tt(Rt(e),(function(t){return Xe.call(e,t)})))}:fl,po=Rt?function(e){for(var t=[];e;)_t(t,go(e)),e=Ue(e);return t}:fl,fo=kn;function mo(e,t,r){for(var n=-1,i=(t=yi(t,e)).length,o=!1;++n<i;){var a=jo(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Ya(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Lr(Ue(e))}function vo(e){return Ya(e)||Wa(e)||!!(Qe&&e&&e[Qe])}function yo(e,t){var r=typeof e;return!!(t=null==t?d:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yo(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wo(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||Q.test(e)||!Z.test(e)||null!=t&&e in De(t)}function $o(e){var t=ao(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=oo(r);return!!n&&e===n[0]}(Cr&&fo(new Cr(new ArrayBuffer(1)))!=M||Sr&&fo(new Sr)!=w||kr&&fo(kr.resolve())!=S||Dr&&fo(new Dr)!=D||Er&&fo(new Er)!=F)&&(fo=function(t){var r=kn(t),n=r==C?t.constructor:e,i=n?zo(n):"";if(i)switch(i){case Mr:return M;case _r:return w;case Ir:return S;case Ar:return D;case Br:return F}return r});var Co=Ie?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||_e)}function ko(e){return e==e&&!es(e)}function Do(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in De(n))}}function Eo(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,i=-1,o=br(e.length-r,0),a=we(o);++i<o;)a[i]=e[r+i];i=-1;for(var s=we(r+1);++i<r;)s[i]=e[i];return s[r]=n(a),Ct(t,this,s)}}function To(e,t){return t.length<2?e:Cn(e,ni(t,0,-1))}function Fo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oo=Ao(ei),Mo=gt||function(e,t){return ut.setTimeout(e,t)},_o=Ao(ti);function Io(e,t,r){var n=t+"";return _o(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ie,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(g,(function(r){var n="_."+r[0];t&r[1]&&!Ft(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(oe);return t?t[1].split(ae):[]}(n),r)))}function Ao(t){var r=0,n=0;return function(){var i=yr(),o=16-(i-n);if(n=i,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Bo(t,r){var n=-1,i=t.length,o=i-1;for(r=r===e?i:r;++n<r;){var a=Xn(n,o),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var Ro=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,i){t.push(n?i.replace(ce,"$1"):r||e)})),t}));function jo(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function zo(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Fi(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),No=Gn((function(t,r){var n=Go(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),lo(n,2)):[]})),Ho=Gn((function(t,r){var n=Go(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wo(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),zt(e,lo(t,3),i)}function Yo(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var o=i-1;return n!==e&&(o=ps(n),o=n<0?br(i+o,0):vr(o,i-1)),zt(t,lo(r,3),o,!0)}function Vo(e){return null!=e&&e.length?bn(e,1):[]}function Uo(t){return t&&t.length?t[0]:e}var Ko=Gn((function(e){var t=Mt(e,bi);return t.length&&t[0]===e[0]?Fn(t):[]})),Xo=Gn((function(t){var r=Go(t),n=Mt(t,bi);return r===Go(n)?r=e:n.pop(),n.length&&n[0]===t[0]?Fn(n,lo(r,2)):[]})),qo=Gn((function(t){var r=Go(t),n=Mt(t,bi);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?Fn(n,e,r):[]}));function Go(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Zo=Gn(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Jo=ro((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,Mt(t,(function(e){return yo(e,r)?+e:e})).sort(Di)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return di(bn(e,1,Ka,!0))})),ra=Gn((function(t){var r=Go(t);return Ka(r)&&(r=e),di(bn(t,1,Ka,!0),lo(r,2))})),na=Gn((function(t){var r=Go(t);return r="function"==typeof r?r:e,di(bn(t,1,Ka,!0),e,r)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Tt(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),Kt(t,(function(t){return Mt(e,Wt(t))}))}function oa(t,r){if(!t||!t.length)return[];var n=ia(t);return null==r?n:Mt(n,(function(t){return Ct(r,e,t)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return fi(Tt(e,Ka))})),la=Gn((function(t){var r=Go(t);return Ka(r)&&(r=e),fi(Tt(t,Ka),lo(r,2))})),ca=Gn((function(t){var r=Go(t);return r="function"==typeof r?r:e,fi(Tt(t,Ka),e,r)})),da=Gn(ia),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,oa(t,n)}));function ha(e){var t=Pr(e);return t.__chain__=!0,t}function ga(e,t){return t(e)}var pa=ro((function(t){var r=t.length,n=r?t[0]:0,i=this.__wrapped__,o=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&i instanceof Wr&&yo(n)?((i=i.slice(n,+n+(r?1:0))).__actions__.push({func:ga,args:[o],thisArg:e}),new Hr(i,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(o)})),fa=Mi((function(e,t,r){Be.call(e,r)?++e[r]:on(e,r,1)})),ma=zi(Wo),ba=zi(Yo);function va(e,t){return(Ya(e)?kt:hn)(e,lo(t,3))}function ya(e,t){return(Ya(e)?Dt:gn)(e,lo(t,3))}var xa=Mi((function(e,t,r){Be.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,i="function"==typeof t,o=Ua(e)?we(e.length):[];return hn(e,(function(e){o[++n]=i?Ct(t,e,r):On(e,t,r)})),o})),$a=Mi((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?Mt:Pn)(e,lo(t,3))}var Sa=Mi((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),ka=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xo(e,t[0],t[1])?t=[]:r>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),Da=ht||function(){return ut.Date.now()};function Ea(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Zi(t,s,e,e,e,e,r)}function Ta(r,n){var i;if("function"!=typeof n)throw new Fe(t);return r=ps(r),function(){return--r>0&&(i=n.apply(this,arguments)),r<=1&&(n=e),i}}var Fa=Gn((function(e,t,r){var n=1;if(r.length){var i=ar(r,so(Fa));n|=o}return Zi(e,n,t,r,i)})),Oa=Gn((function(e,t,r){var n=3;if(r.length){var i=ar(r,so(Oa));n|=o}return Zi(t,n,e,r,i)}));function Ma(r,n,i){var o,a,s,l,c,d,u=0,h=!1,g=!1,p=!0;if("function"!=typeof r)throw new Fe(t);function f(t){var n=o,i=a;return o=a=e,u=t,l=r.apply(i,n)}function m(t){var r=t-d;return d===e||r>=n||r<0||g&&t-u>=s}function b(){var e=Da();if(m(e))return v(e);c=Mo(b,function(e){var t=n-(e-d);return g?vr(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&o?f(t):(o=a=e,l)}function y(){var t=Da(),r=m(t);if(o=arguments,a=this,d=t,r){if(c===e)return function(e){return u=e,c=Mo(b,n),h?f(e):l}(d);if(g)return $i(c),c=Mo(b,n),f(d)}return c===e&&(c=Mo(b,n)),l}return n=ms(n)||0,es(i)&&(h=!!i.leading,s=(g="maxWait"in i)?br(ms(i.maxWait)||0,n):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==e&&$i(c),u=0,o=d=a=c=e},y.flush=function(){return c===e?l:v(Da())},y}var _a=Gn((function(e,t){return dn(e,1,t)})),Ia=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Fe(t);var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return n.cache=o.set(i,a)||o,a};return n.cache=new(Aa.Cache||Ur),n}function Ba(e){if("function"!=typeof e)throw new Fe(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var Ra=xi((function(e,t){var r=(t=1==t.length&&Ya(t[0])?Mt(t[0],qt(lo())):Mt(bn(t,1),qt(lo()))).length;return Gn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return Ct(e,this,n)}))})),ja=Gn((function(t,r){var n=ar(r,so(ja));return Zi(t,o,e,r,n)})),za=Gn((function(t,r){var n=ar(r,so(za));return Zi(t,a,e,r,n)})),Pa=ro((function(t,r){return Zi(t,l,e,e,e,r)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(Dn),Ha=Ui((function(e,t){return e>=t})),Wa=Mn(function(){return arguments}())?Mn:function(e){return ts(e)&&Be.call(e,"callee")&&!Xe.call(e,"callee")},Ya=we.isArray,Va=bt?qt(bt):function(e){return ts(e)&&kn(e)==O};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var Xa=Yt||ml,qa=vt?qt(vt):function(e){return ts(e)&&kn(e)==b};function Ga(e){if(!ts(e))return!1;var t=kn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=kn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=yt?qt(yt):function(e){return ts(e)&&fo(e)==w};function ns(e){return"number"==typeof e||ts(e)&&kn(e)==$}function is(e){if(!ts(e)||kn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Pe}var os=xt?qt(xt):function(e){return ts(e)&&kn(e)==k},as=wt?qt(wt):function(e){return ts(e)&&fo(e)==D};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&kn(e)==E}function ls(e){return"symbol"==typeof e||ts(e)&&kn(e)==T}var cs=$t?qt($t):function(e){return ts(e)&&Ja(e.length)&&!!it[kn(e)]},ds=Ui(zn),us=Ui((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?dr(e):Fi(e);if(et&&e[et])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[et]());var t=fo(e);return(t==w?ir:t==D?sr:Ls)(e)}function gs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=gs(e),r=t%1;return t==t?r?t-r:t:0}function fs(e){return e?sn(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xt(e);var r=ge.test(e);return r||fe.test(e)?lt(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return Oi(e,_s(e))}function vs(e){return null==e?"":ci(e)}var ys=_i((function(e,t){if(So(t)||Ua(t))Oi(t,Ms(t),e);else for(var r in t)Be.call(t,r)&&en(e,r,t[r])})),xs=_i((function(e,t){Oi(t,_s(t),e)})),ws=_i((function(e,t,r,n){Oi(t,_s(t),e,n)})),$s=_i((function(e,t,r,n){Oi(t,Ms(t),e,n)})),Cs=ro(an),Ss=Gn((function(t,r){t=De(t);var n=-1,i=r.length,o=i>2?r[2]:e;for(o&&xo(r[0],r[1],o)&&(i=1);++n<i;)for(var a=r[n],s=_s(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||La(u,_e[d])&&!Be.call(t,d))&&(t[d]=a[d])}return t})),ks=Gn((function(t){return t.push(e,Ji),Ct(As,e,t)}));function Ds(t,r,n){var i=null==t?e:Cn(t,r);return i===e?n:i}function Es(e,t){return null!=e&&mo(e,t,Tn)}var Ts=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),e[t]=r}),el(nl)),Fs=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),lo),Os=Gn(On);function Ms(e){return Ua(e)?qr(e):Rn(e)}function _s(e){return Ua(e)?qr(e,!0):jn(e)}var Is=_i((function(e,t,r){Hn(e,t,r)})),As=_i((function(e,t,r,n){Hn(e,t,r,n)})),Bs=ro((function(e,t){var r={};if(null==e)return r;var n=!1;t=Mt(t,(function(t){return t=yi(t,e),n||(n=t.length>1),t})),Oi(e,io(e),r),n&&(r=ln(r,7,eo));for(var i=t.length;i--;)ui(r,t[i]);return r})),Rs=ro((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Es(e,r)}))}(e,t)}));function js(e,t){if(null==e)return{};var r=Mt(io(e),(function(e){return[e]}));return t=lo(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var zs=Gi(Ms),Ps=Gi(_s);function Ls(e){return null==e?[]:Gt(e,Ms(e))}var Ns=Ri((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,er).replace(Ze,"")}var Ys=Ri((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=Ri((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Bi("toLowerCase"),Ks=Ri((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Xs=Ri((function(e,t,r){return e+(r?" ":"")+Gs(t)})),qs=Ri((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=Bi("toUpperCase");function Zs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return tt.test(e)}(t)?function(e){return e.match(Je)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Qs=Gn((function(t,r){try{return Ct(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ro((function(e,t){return kt(t,(function(t){t=jo(t),on(e,t,Fa(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),rl=Pi(!0);function nl(e){return e}function il(e){return Bn("function"==typeof e?e:ln(e,1))}var ol=Gn((function(e,t){return function(r){return On(r,e,t)}})),al=Gn((function(e,t){return function(r){return On(e,r,t)}}));function sl(e,t,r){var n=Ms(t),i=$n(t,n);null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=$n(t,Ms(t)));var o=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return kt(i,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=Fi(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,_t([this.value()],arguments))})})),e}function ll(){}var cl=Wi(Mt),dl=Wi(Et),ul=Wi(Bt);function hl(e){return wo(e)?Wt(jo(e)):function(e){return function(t){return Cn(t,e)}}(e)}var gl=Vi(),pl=Vi(!0);function fl(){return[]}function ml(){return!1}var bl,vl=Hi((function(e,t){return e+t}),0),yl=Xi("ceil"),xl=Hi((function(e,t){return e/t}),1),wl=Xi("floor"),$l=Hi((function(e,t){return e*t}),1),Cl=Xi("round"),Sl=Hi((function(e,t){return e-t}),0);return Pr.after=function(e,r){if("function"!=typeof r)throw new Fe(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Pr.ary=Ea,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Ta,Pr.bind=Fa,Pr.bindAll=Js,Pr.bindKey=Oa,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Pr.chain=ha,Pr.chunk=function(t,r,n){r=(n?xo(t,r,n):r===e)?1:br(ps(r),0);var i=null==t?0:t.length;if(!i||r<1)return[];for(var o=0,a=0,s=we(ft(i/r));o<i;)s[a++]=ni(t,o,o+=r);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return _t(Ya(r)?Fi(r):[r],bn(t,1))},Pr.cond=function(e){var r=null==e?0:e.length,n=lo();return e=r?Mt(e,(function(e){if("function"!=typeof e[1])throw new Fe(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var i=e[n];if(Ct(i[0],this,t))return Ct(i[1],this,t)}}))},Pr.conforms=function(e){return function(e){var t=Ms(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=fa,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function t(r,n,i){var o=Zi(r,8,e,e,e,e,e,n=i?e:n);return o.placeholder=t.placeholder,o},Pr.curryRight=function t(r,n,o){var a=Zi(r,i,e,e,e,e,e,n=o?e:n);return a.placeholder=t.placeholder,a},Pr.debounce=Ma,Pr.defaults=Ss,Pr.defaultsDeep=ks,Pr.defer=_a,Pr.delay=Ia,Pr.difference=Lo,Pr.differenceBy=No,Pr.differenceWith=Ho,Pr.drop=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,(r=n||r===e?1:ps(r))<0?0:r,i):[]},Pr.dropRight=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,0,(r=i-(r=n||r===e?1:ps(r)))<0?0:r):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!0):[]},Pr.fill=function(t,r,n,i){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xo(t,r,n)&&(n=0,i=o),function(t,r,n,i){var o=t.length;for((n=ps(n))<0&&(n=-n>o?0:o+n),(i=i===e||i>o?o:ps(i))<0&&(i+=o),i=n>i?0:fs(i);n<i;)t[n++]=r;return t}(t,r,n,i)):[]},Pr.filter=function(e,t){return(Ya(e)?Tt:mn)(e,lo(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),c)},Pr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Pr.flatten=Vo,Pr.flattenDeep=function(e){return null!=e&&e.length?bn(e,c):[]},Pr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Pr.flip=function(e){return Zi(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Ms(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,_s(e))},Pr.groupBy=xa,Pr.initial=function(e){return null!=e&&e.length?ni(e,0,-1):[]},Pr.intersection=Ko,Pr.intersectionBy=Xo,Pr.intersectionWith=qo,Pr.invert=Ts,Pr.invertBy=Fs,Pr.invokeMap=wa,Pr.iteratee=il,Pr.keyBy=$a,Pr.keys=Ms,Pr.keysIn=_s,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,t(e,n,i),e)})),r},Pr.mapValues=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,n,t(e,n,i))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Aa,Pr.merge=Is,Pr.mergeWith=As,Pr.method=ol,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=Ba,Pr.nthArg=function(e){return e=ps(e),Gn((function(t){return Wn(t,e)}))},Pr.omit=Bs,Pr.omitBy=function(e,t){return js(e,Ba(lo(t)))},Pr.once=function(e){return Ta(2,e)},Pr.orderBy=function(t,r,n,i){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=i?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Pr.over=cl,Pr.overArgs=Ra,Pr.overEvery=dl,Pr.overSome=ul,Pr.partial=ja,Pr.partialRight=za,Pr.partition=Sa,Pr.pick=Rs,Pr.pickBy=js,Pr.property=hl,Pr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Pr.pull=Zo,Pr.pullAll=Qo,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,lo(r,2)):e},Pr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Pr.pullAt=Jo,Pr.range=gl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Ya(e)?Tt:mn)(e,Ba(lo(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=lo(t,3);++n<o;){var a=e[n];t(a,n,e)&&(r.push(a),i.push(n))}return Kn(e,i),r},Pr.rest=function(r,n){if("function"!=typeof r)throw new Fe(t);return Gn(r,n=n===e?n:ps(n))},Pr.reverse=ea,Pr.sampleSize=function(t,r,n){return r=(n?xo(t,r,n):r===e)?1:ps(r),(Ya(t)?Zr:Qn)(t,r)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:Jn(t,r,n,i)},Pr.shuffle=function(e){return(Ya(e)?Qr:ri)(e)},Pr.slice=function(t,r,n){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xo(t,r,n)?(r=0,n=i):(r=null==r?0:ps(r),n=n===e?i:ps(n)),ni(t,r,n)):[]},Pr.sortBy=ka,Pr.sortedUniq=function(e){return e&&e.length?si(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Pr.split=function(t,r,n){return n&&"number"!=typeof n&&xo(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!os(r))&&!(r=ci(r))&&nr(t)?wi(dr(t),0,n):t.split(r,n):[]},Pr.spread=function(e,r){if("function"!=typeof e)throw new Fe(t);return r=null==r?0:br(ps(r),0),Gn((function(t){var n=t[r],i=wi(t,0,r);return n&&_t(i,n),Ct(e,this,i)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?ni(e,1,t):[]},Pr.take=function(t,r,n){return t&&t.length?ni(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Pr.takeRight=function(t,r,n){var i=null==t?0:t.length;return i?ni(t,(r=i-(r=n||r===e?1:ps(r)))<0?0:r,i):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?gi(e,lo(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?gi(e,lo(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,r,n){var i=!0,o=!0;if("function"!=typeof e)throw new Fe(t);return es(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ma(e,r,{leading:i,maxWait:r,trailing:o})},Pr.thru=ga,Pr.toArray=hs,Pr.toPairs=zs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Ya(e)?Mt(e,jo):ls(e)?[e]:Fi(Ro(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Ya(e),i=n||Xa(e)||cs(e);if(t=lo(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:es(e)&&Za(o)?Lr(Ue(e)):{}}return(i?kt:xn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Pr.unary=function(e){return Ea(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?di(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Pr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?di(t,e,r):[]},Pr.unset=function(e,t){return null==e||ui(e,t)},Pr.unzip=ia,Pr.unzipWith=oa,Pr.update=function(e,t,r){return null==e?e:hi(e,t,vi(r))},Pr.updateWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:hi(t,r,vi(n),i)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Gt(e,_s(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return ja(vi(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=da,Pr.zipObject=function(e,t){return mi(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=zs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=vl,Pr.attempt=Qs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=yl,Pr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Pr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Ms(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=xl,Pr.endsWith=function(t,r,n){t=vs(t),r=ci(r);var i=t.length,o=n=n===e?i:sn(ps(n),0,i);return(n-=r.length)>=0&&t.slice(n,o)==r},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,tr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Pr.every=function(t,r,n){var i=Ya(t)?Et:pn;return n&&xo(t,r,n)&&(r=e),i(t,lo(r,3))},Pr.find=ma,Pr.findIndex=Wo,Pr.findKey=function(e,t){return jt(e,lo(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Yo,Pr.findLastKey=function(e,t){return jt(e,lo(t,3),wn)},Pr.floor=wl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,lo(t,3),_s)},Pr.forInRight=function(e,t){return null==e?e:yn(e,lo(t,3),_s)},Pr.forOwn=function(e,t){return e&&xn(e,lo(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,lo(t,3))},Pr.get=Ds,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mo(e,t,En)},Pr.hasIn=Es,Pr.head=Uo,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var i=e.length;return r<0&&(r=br(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Pt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),Pt(e,t,i)},Pr.inRange=function(t,r,n){return r=gs(r),n===e?(n=r,r=0):n=gs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Pr.invoke=Os,Pr.isArguments=Wa,Pr.isArray=Ya,Pr.isArrayBuffer=Va,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kn(e)==m},Pr.isBuffer=Xa,Pr.isDate=qa,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||Xa(e)||cs(e)||Wa(e)))return!e.length;var t=fo(e);if(t==w||t==D)return!e.size;if(So(e))return!Rn(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return _n(e,t)},Pr.isEqualWith=function(t,r,n){var i=(n="function"==typeof n?n:e)?n(t,r):e;return i===e?_n(t,r,e,n):!!i},Pr.isError=Ga,Pr.isFinite=function(e){return"number"==typeof e&&pr(e)},Pr.isFunction=Za,Pr.isInteger=Qa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||In(e,t,uo(t))},Pr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,In(t,r,uo(r),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=is,Pr.isRegExp=os,Pr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=d},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(t){return t===e},Pr.isWeakMap=function(e){return ts(e)&&fo(e)==F},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kn(e)},Pr.join=function(e,t){return null==e?"":fr.call(e,t)},Pr.kebabCase=Ys,Pr.last=Go,Pr.lastIndexOf=function(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var o=i;return n!==e&&(o=(o=ps(n))<0?br(i+o,0):vr(o,i-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,o):zt(t,Nt,o,!0)},Pr.lowerCase=Vs,Pr.lowerFirst=Us,Pr.lt=ds,Pr.lte=us,Pr.max=function(t){return t&&t.length?fn(t,nl,Dn):e},Pr.maxBy=function(t,r){return t&&t.length?fn(t,lo(r,2),Dn):e},Pr.mean=function(e){return Ht(e,nl)},Pr.meanBy=function(e,t){return Ht(e,lo(t,2))},Pr.min=function(t){return t&&t.length?fn(t,nl,zn):e},Pr.minBy=function(t,r){return t&&t.length?fn(t,lo(r,2),zn):e},Pr.stubArray=fl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Pr.noConflict=function(){return ut._===this&&(ut._=Le),this},Pr.noop=ll,Pr.now=Da,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Yi(mt(i),r)+e+Yi(ft(i),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;return t&&n<t?e+Yi(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;return t&&n<t?Yi(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Pr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xo(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=gs(t),r===e?(r=t,t=0):r=gs(r)),t>r){var i=t;t=r,r=i}if(n||t%1||r%1){var o=wr();return vr(t+o*(r-t+st("1e-"+((o+"").length-1))),r)}return Xn(t,r)},Pr.reduce=function(e,t,r){var n=Ya(e)?It:Vt,i=arguments.length<3;return n(e,lo(t,4),r,i,hn)},Pr.reduceRight=function(e,t,r){var n=Ya(e)?At:Vt,i=arguments.length<3;return n(e,lo(t,4),r,i,gn)},Pr.repeat=function(t,r,n){return r=(n?xo(t,r,n):r===e)?1:ps(r),qn(vs(t),r)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(t,r,n){var i=-1,o=(r=yi(r,t)).length;for(o||(o=1,t=e);++i<o;){var a=null==t?e:t[jo(r[i])];a===e&&(i=o,a=n),t=Za(a)?a.call(t):a}return t},Pr.round=Cl,Pr.runInContext=ne,Pr.sample=function(e){return(Ya(e)?Gr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?cr(e):e.length;var t=fo(e);return t==w||t==D?e.size:Rn(e).length},Pr.snakeCase=Ks,Pr.some=function(t,r,n){var i=Ya(t)?Bt:ii;return n&&xo(t,r,n)&&(r=e),i(t,lo(r,3))},Pr.sortedIndex=function(e,t){return oi(e,t)},Pr.sortedIndexBy=function(e,t,r){return ai(e,t,lo(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=oi(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return oi(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ai(e,t,lo(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=oi(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=Xs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=ci(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?Ut(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?Ut(e,lo(t,2)):0},Pr.template=function(t,r,n){var i=Pr.templateSettings;n&&xo(t,r,n)&&(r=e),t=vs(t),r=ws({},r,i,Qi);var o,a,s=ws({},r.imports,i.imports,Qi),l=Ms(s),c=Gt(s,l),d=0,u=r.interpolate||ve,h="__p += '",g=Ee((r.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++nt+"]")+"\n";t.replace(g,(function(e,r,n,i,s,l){return n||(n=i),h+=t.slice(d,l).replace(ye,rr),r&&(o=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var f=Be.call(r,"variable")&&r.variable;if(f){if(le.test(f))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(N,""):h).replace(H,"$1").replace(W,"$1;"),h="function("+(f||"obj")+") {\n"+(f?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Qs((function(){return Se(l,p+"return "+h).apply(e,c)}));if(m.source=h,Ga(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>d)return[];var r=h,n=vr(e,h);t=lo(t),e-=h;for(var i=Kt(n,t);++r<e;)t(r);return i},Pr.toFinite=gs,Pr.toInteger=ps,Pr.toLength=fs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,d):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Xt(t);if(!t||!(r=ci(r)))return t;var i=dr(t),o=dr(r);return wi(i,Qt(i,o),Jt(i,o)+1).join("")},Pr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,ur(t)+1);if(!t||!(r=ci(r)))return t;var i=dr(t);return wi(i,0,Jt(i,dr(r))+1).join("")},Pr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=ci(r)))return t;var i=dr(t);return wi(i,Qt(i,dr(r))).join("")},Pr.truncate=function(t,r){var n=30,i="...";if(es(r)){var o="separator"in r?r.separator:o;n="length"in r?ps(r.length):n,i="omission"in r?ci(r.omission):i}var a=(t=vs(t)).length;if(nr(t)){var s=dr(t);a=s.length}if(n>=a)return t;var l=n-cr(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):t.slice(0,l);if(o===e)return c+i;if(s&&(l+=c.length-l),os(o)){if(t.slice(l).search(o)){var d,u=c;for(o.global||(o=Ee(o.source,vs(ue.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(ci(o),l)!=l){var g=c.lastIndexOf(o);g>-1&&(c=c.slice(0,g))}return c+i},Pr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,hr):e},Pr.uniqueId=function(e){var t=++Re;return vs(e)+t},Pr.upperCase=qs,Pr.upperFirst=Gs,Pr.each=va,Pr.eachRight=ya,Pr.first=Uo,sl(Pr,(bl={},xn(Pr,(function(e,t){Be.call(Pr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Pr.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var i=this.__filtered__&&!r?new Wr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,h),type:t+(i.__dir__<0?"Right":"")}),i},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return On(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Ba(lo(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(h)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),i=/^(?:head|last)$/.test(r),o=Pr[i?"take"+("last"==r?"Right":""):r],a=i||/^find/.test(r);o&&(Pr.prototype[r]=function(){var r=this.__wrapped__,s=i?[1]:arguments,l=r instanceof Wr,c=s[0],d=l||Ya(r),u=function(e){var t=o.apply(Pr,_t([e],s));return i&&h?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,g=!!this.__actions__.length,p=a&&!h,f=l&&!g;if(!a&&d){r=f?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:ga,args:[u],thisArg:e}),new Hr(m,h)}return p&&f?t.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Ya(i)?i:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";Be.call(Or,n)||(Or[n]=[]),Or[n].push({name:t,func:r})}})),Or[Li(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Fi(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Fi(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Fi(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,i=r?e.length:0,o=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var o=r[n],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,h=0,g=vr(l,this.__takeCount__);if(!r||!n&&i==l&&g==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&h<g;){for(var f=-1,m=e[c+=t];++f<u;){var b=d[f],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return ha(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Pr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var i=Po(n);i.__index__=0,i.__values__=e,r?o.__wrapped__=i:r=i;var o=i;n=n.__wrapped__}return o.__wrapped__=t,r},Pr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:ga,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,et&&(Pr.prototype[et]=function(){return this}),Pr}();gt?((gt.exports=gr)._=gr,ht._=gr):ut._=gr}.call(Go);var EE=DE.exports;const TE=i.forwardRef(((n,i)=>{var{value:o,readOnly:s,"data-testid":l,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:g,iconMask:p=e(Ve,{}),iconUnmask:f=e(Ye,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:k,onFocus:D,onBlur:E,onTryAgain:T}=n,F=Vo(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const O=s&&EE.isEmpty(o),[M,_]=a(!x),[I,A]=a(o||"");u((()=>{A(o||"")}),[o]);const B=e=>{L(!1),D&&D(e)},R=e=>{L(!0),E&&E(e)},j=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,k&&k(e)},z=()=>{s&&T&&T()},P=()=>{L(!M)},L=e=>{_(e),e?C&&C():S&&S()},N=()=>!(null==I?void 0:I.toString().length)||x,H=()=>{if(O)return e(r,{});const t=N();return e(fE,{"data-testid":"icon-"+(M?"masked":"unmasked"),onClick:t?void 0:P,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:M?f:p})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(s)switch($){case"fail":return t(CE,{onClick:z,"data-testid":"try-again-button",children:[t(xE,{children:[e(wE,{}),e($E,{children:"Error"})]}),e(yE,{children:"Try again?"})]});case"loading":return t(mE,{children:[e(vE,{}),e(bE,{children:"Retrieving..."})]})}return e(pE,Object.assign({ref:i,"data-testid":`${l||"masked-input"}${M?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:s?void 0:B,onBlur:s?void 0:R,onClick:s?P:void 0,onChange:j,value:O?"-":M&&!x?ah.maskValue(I,{maskChar:v,maskRange:c,unmaskRange:d,maskRegex:h,maskTransformer:g}):I,readOnly:s,error:y,$isDisabled:N()},F))})()})})),FE=i.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(w$,{id:o,label:n,errorMessage:i,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e(TE,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},h))})})),OE=M.div`
    font-weight: ${e=>e.$bold?Ac.Spec["weight-semibold"]:Ac.Spec["weight-regular"]};

    ${e=>e.$disabled?_`
                color: ${Ic["text-disabled"]};
            `:e.$selected?_`
                color: ${Ic["text-selected"]};
            `:_`
                color: ${Ic.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&sd(e.$maxLines||2)}
    overflow-wrap: break-word;
`,ME=M.div`
    color: ${Ic["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&sd(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?_`
                    ${Ac["body-md-semibold"]}
                `:_`
                    ${Ac["body-baseline-regular"]}
                `}
`,_E=M.span`
    font-weight: ${Ac.Spec["weight-semibold"]};
`,IE=M.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Ac["body-md-regular"]:Ac["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return _`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return _`
                    ${OE} {
                        display: inline;
                    }

                    ${ME} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,AE=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,BE=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,RE=({bold:n,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,disabled:c,sublabel:d,truncationType:u="middle",variant:h="default"})=>{const g=R(),f="small"===h?Ac.Spec["body-size-md"]({theme:g}):Ac.Spec["body-size-baseline"]({theme:g}),b=Ac.Spec["font-family"]({theme:g}),{ref:v,width:y}=lr(),x=p((e=>{if("inline"!==i||!y)return!1;return ah.getTextWidth(e,`${f} '${b}'`)>y*s-50}),[y,i,f,b,s]),w=m((()=>x(o)),[x,o]),$=m((()=>d&&x(d)),[x,d]),C=n=>{if(!a)return n;const i=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(i),l=s+a.length;return-1===s?n:t(r,{children:[o.slice(0,s),e(_E,{$variant:h,children:o.slice(s,l)}),o.slice(l)]})},S=n=>t(r,{children:[e(AE,{$maxLines:s,"aria-hidden":!0,children:C(n)}),e(BE,{$maxLines:s,"aria-hidden":!0,children:C(n)})]});return t(IE,{ref:v,$labelDisplayType:w||$?"next-line":i,$variant:h,children:[e(OE,{"aria-label":o,$bold:n,$maxLines:s,$selected:l,$disabled:c,$truncateType:u,children:"middle"===u&&w?S(o):C(o)}),d&&e(ME,{"aria-label":d,$maxLines:s,$truncateType:u,$labelDisplayType:i,children:"middle"===u&&$?S(d):d})]})};function jE(e){return()=>e}function zE(e){e()}function PE(e,t){return r=>e(t(r))}function LE(e,t){return()=>e(t)}function NE(e,t){return r=>e(t,r)}function HE(e){return void 0!==e}function WE(){}function YE(e,t){return t(e),e}function VE(e,t){return t(e)}function UE(...e){return e}function KE(e,t){return e(1,t)}function XE(e,t){e(0,t)}function qE(e){e(2)}function GE(e){return e(4)}function ZE(e,t){return KE(e,NE(t,0))}function QE(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function JE(e){let t,r;return n=>i=>{t=i,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function eT(e,t){return e===t}function tT(e=eT){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function rT(e){return t=>r=>{e(r)&&t(r)}}function nT(e){return t=>PE(t,e)}function iT(e){return t=>()=>{t(e)}}function oT(e,...t){const r=function(...e){return t=>e.reduceRight(VE,t)}(...t);return(t,n)=>{switch(t){case 2:return void qE(e);case 1:return KE(e,r(n))}}}function aT(e,t){return r=>n=>{r(t=e(t,n))}}function sT(e){return t=>r=>{e>0?e--:t(r)}}function lT(e){let t,r=null;return n=>i=>{r=i,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function cT(...e){const t=new Array(e.length);let r=0,n=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);KE(e,(e=>{const s=r;r|=a,t[o]=e,s!==i&&r===i&&n&&(n(),n=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};r===i?a():n=a}}function dT(e){let t=e;const r=hT();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function uT(e,t){return YE(dT(t),(t=>ZE(e,t)))}function hT(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function gT(e){return YE(hT(),(t=>ZE(e,t)))}function pT(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:fT(),singleton:r}}const fT=()=>Symbol();function mT(...e){const t=hT(),r=new Array(e.length);let n=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);KE(e,(e=>{r[o]=e,n|=a,n===i&&XE(t,r)}))})),function(e,o){switch(e){case 2:return void qE(t);case 1:return n===i&&o(r),KE(t,o)}}}function bT(e,t=eT){return oT(e,tT(t))}function vT(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(zE)}}(...e.map((e=>KE(e,r))))}}}var yT=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(yT||{});const xT={0:"debug",3:"error",1:"log",2:"warn"},wT=pT((()=>{const e=dT(3);return{log:dT(((t,r,n=1)=>{var i;n>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:GE(e))&&console[xT[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function $T(e,t,r){return CT(e,t,r).callbackRef}function CT(e,t,r){const n=i.useRef(null);let o=e=>{};if(typeof ResizeObserver<"u"){const a=i.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);o=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:o,ref:n}}function ST(e,t,r,n,o,a,s,l,c){const d=i.useCallback((r=>{const i=function(e,t,r,n){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,r);if(0===c&&n("Zero-sized element, this should not happen",{child:i},yT.ERROR),c===l)continue;const d=o[o.length-1];0===o.length||d.size!==c||d.endIndex!==s-1?o.push({endIndex:s,size:c,startIndex:s}):o[o.length-1].endIndex++}return o}(r.children,t,l?"offsetWidth":"offsetHeight",o);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,g=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:g}),null==a||a(l?kT("column-gap",getComputedStyle(r).columnGap,o):kT("row-gap",getComputedStyle(r).rowGap,o)),null!==i&&e(i)}),[e,t,o,a,s,n]);return CT(d,r,c)}function kT(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,yT.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function DT(e,t,r){const n=i.useRef(null),o=i.useCallback((r=>{if(null==r||!r.offsetParent)return;const i=r.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=i.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=CT(o,!0,r),l=i.useCallback((()=>{o(s.current)}),[o,s]);return i.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const ET=pT((()=>{const e=hT(),t=hT(),r=dT(0),n=hT(),i=dT(0),o=hT(),a=hT(),s=dT(0),l=dT(0),c=dT(0),d=dT(0),u=hT(),h=hT(),g=dT(!1),p=dT(!1),f=dT(!1);return ZE(oT(e,nT((({scrollTop:e})=>e))),t),ZE(oT(e,nT((({scrollHeight:e})=>e))),a),ZE(t,i),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:g,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:n,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),TT={lvl:0};function FT(e,t){const r=e.length;if(0===r)return[];let{index:n,value:i}=t(e[0]);const o=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);o.push({end:r-1,start:n,value:i}),n=r,i=s}return o.push({end:1/0,start:n,value:i}),o}function OT(e){return e===TT}function MT(e,t){if(!OT(e))return t===e.k?e.v:t<e.k?MT(e.l,t):MT(e.r,t)}function _T(e,t,r="k"){if(OT(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=_T(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return _T(e.l,t,r)}function IT(e,t,r){return OT(e)?YT(t,r,1):t===e.k?LT(e,{k:t,v:r}):t<e.k?VT(LT(e,{l:IT(e.l,t,r)})):VT(LT(e,{r:IT(e.r,t,r)}))}function AT(){return TT}function BT(e,t,r){if(OT(e))return[];return function(e){return FT(e,(({k:e,v:t})=>({index:e,value:t})))}(zT(e,_T(e,t)[0],r))}function RT(e,t){if(OT(e))return TT;const{k:r,l:n,r:i}=e;if(t===r){if(OT(n))return i;if(OT(i))return n;{const[t,r]=WT(n);return PT(LT(e,{k:t,l:NT(n),v:r}))}}return PT(LT(e,t<r?{l:RT(n,t)}:{r:RT(i,t)}))}function jT(e){return OT(e)?[]:[...jT(e.l),{k:e.k,v:e.v},...jT(e.r)]}function zT(e,t,r){if(OT(e))return[];const{k:n,l:i,r:o,v:a}=e;let s=[];return n>t&&(s=s.concat(zT(i,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(zT(o,t,r))),s}function PT(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(HT(t))return UT(LT(e,{lvl:r-1}));if(!OT(t)&&!OT(t.r))return LT(t.r,{l:LT(t,{r:t.r.l}),lvl:r,r:LT(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(HT(e))return KT(LT(e,{lvl:r-1}));if(OT(n)||OT(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,i=HT(t)?n.lvl-1:n.lvl;return LT(t,{l:LT(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:KT(LT(n,{l:t.r,lvl:i}))})}}function LT(e,t){return YT(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function NT(e){return OT(e.r)?e.l:PT(LT(e,{r:NT(e.r)}))}function HT(e){return OT(e)||e.lvl>e.r.lvl}function WT(e){return OT(e.r)?[e.k,e.v]:WT(e.r)}function YT(e,t,r,n=TT,i=TT){return{k:e,l:n,lvl:r,r:i,v:t}}function VT(e){return KT(UT(e))}function UT(e){const{l:t}=e;return OT(t)||t.lvl!==e.lvl?e:LT(t,{r:LT(e,{l:t.r})})}function KT(e){const{lvl:t,r:r}=e;return OT(r)||OT(r.r)||r.lvl!==t||r.r.lvl!==t?e:LT(r,{l:LT(e,{r:r.l}),lvl:t+1})}function XT(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function qT(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const GT=pT((()=>({recalcInProgress:dT(!1)})),[],{singleton:!0});function ZT(e,t,r){return e[QT(e,t,r)]}function QT(e,t,r,n=0){let i=e.length-1;for(;n<=i;){const o=Math.floor((n+i)/2),a=r(e[o],t);if(0===a)return o;if(-1===a){if(i-n<2)return o-1;i=o-1}else{if(i===n)return o;n=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function JT(e,t){return Math.round(e.getBoundingClientRect()[t])}function eF(e){return!OT(e.groupOffsetTree)}function tF({index:e},t){return t===e?0:t<e?-1:1}function rF({offset:e},t){return t===e?0:t<e?-1:1}function nF(e,t,r){if(0===t.length)return 0;const{index:n,offset:i,size:o}=ZT(t,e,tF),a=e-n,s=o*a+(a-1)*r+i;return s>0?s+r:s}function iF(e,t){if(!eF(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function oF(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=iF("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function aF(e,t,r,n=0){return n>0&&(t=Math.max(t,ZT(e,n,tF).offset)),FT(function(e,t,r,n){const i=QT(e,t,n),o=QT(e,r,n,i);return e.slice(i,o+1)}(e,t,r,rF),dF)}function sF(e,[t,r,n,i]){t.length>0&&n("received item sizes",t,yT.DEBUG);const o=e.sizeTree;let a=o,s=0;if(r.length>0&&OT(o)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>IT(IT(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=OT(e)?0:1/0;for(const n of t){const{endIndex:t,size:i,startIndex:o}=n;if(r=Math.min(r,o),OT(e)){e=IT(e,0,i);continue}const a=BT(e,o-1,t+1);if(a.some(uF(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:o}of a)s?(t>=n||i===o)&&(e=RT(e,n)):(l=o!==i,s=!0),r>t&&t>=n&&o!==i&&(e=IT(e,t+1,o));l&&(e=IT(e,o,i))}return[e,r]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=cF(e.offsetTree,s,a,i);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>IT(e,t,nF(t,u,i))),AT()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function lF(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function cF(e,t,r,n){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=QT(i,t-1,tF),s=i[l].offset;const e=_T(r,t-1);o=e[0],a=e[1],i.length&&i[l].size===_T(r,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of BT(r,t,1/0)){const t=e-o,r=t*a+s+t*n;i.push({index:e,offset:r,size:l}),o=e,s=r,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function dF(e){return{index:e.index,value:e}}function uF(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const hF={offsetHeight:"height",offsetWidth:"width"},gF=pT((([{log:e},{recalcInProgress:t}])=>{const r=hT(),n=hT(),i=uT(n,0),o=hT(),a=hT(),s=dT(0),l=dT([]),c=dT(void 0),d=dT(void 0),u=dT(((e,t)=>JT(e,hF[t]))),h=dT(void 0),g=dT(0),p={groupIndices:[],groupOffsetTree:AT(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:AT()},f=uT(oT(r,cT(l,e,g),aT(sF,p),tT()),p),m=uT(oT(l,tT(),aT(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),nT((({prev:e})=>e))),[]);ZE(oT(l,rT((e=>e.length>0)),cT(f,g),nT((([e,t,r])=>{const n=e.reduce(((e,n,i)=>IT(e,n,nF(n,t.offsetTree,r)||i)),AT());return{...t,groupIndices:e,groupOffsetTree:n}}))),f),ZE(oT(n,cT(f),rT((([e,{lastIndex:t}])=>e<t)),nT((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),ZE(c,d);const b=uT(oT(c,nT((e=>void 0===e))),!0);ZE(oT(d,rT((e=>void 0!==e&&OT(GE(f).sizeTree))),nT((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=gT(oT(r,cT(f),aT((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),nT((e=>e.changed))));KE(oT(s,aT(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),nT((e=>e.diff))),(e=>{const{groupIndices:r}=GE(f);if(e>0)XE(t,!0),XE(o,e+lF(e,r));else if(e<0){const t=GE(m);t.length>0&&(e-=lF(-e,t)),XE(a,e)}})),KE(oT(s,cT(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},yT.ERROR)}));const y=gT(o);ZE(oT(o,cT(f),nT((([e,t])=>{const r=t.groupIndices.length>0,n=[],i=t.lastSize;if(r){const r=MT(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=jT(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:i}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return jT(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),r);const x=gT(oT(a,cT(f,g),nT((([e,{offsetTree:t},r])=>nF(-e,t,r)))));return ZE(oT(a,cT(f,g),nT((([e,t,r])=>{if(t.groupIndices.length>0){if(OT(t.sizeTree))return t;let n=AT();const i=GE(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(n=jT(t.sizeTree).reduce(((t,{k:r,v:n})=>IT(t,Math.max(0,r+e),n)),n),o!==-e){n=IT(n,0,MT(t.sizeTree,s));n=IT(n,1,_T(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...cF(t.offsetTree,0,n,r)}}{const n=jT(t.sizeTree).reduce(((t,{k:r,v:n})=>IT(t,Math.max(0,r+e),n)),AT());return{...t,sizeTree:n,...cF(t.offsetTree,0,n,r)}}}))),f),{beforeUnshiftWith:y,data:h,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:g,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:f,statefulTotalCount:i,totalCount:n,trackItemSizes:b,unshiftWith:o}}),UE(wT,GT),{singleton:!0});function pF(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const fF=pT((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:i}])=>{const o=hT(),a=hT(),s=gT(oT(o,nT(pF)));return ZE(oT(s,nT((e=>e.totalCount))),r),ZE(oT(s,nT((e=>e.groupIndices))),e),ZE(oT(mT(i,t,n),rT((([e,t])=>eF(t))),nT((([e,t,r])=>_T(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),tT(),nT((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),UE(gF,ET)),mF=pT((([{log:e}])=>{const t=dT(!1),r=gT(oT(t,rT((e=>e)),tT()));return KE(t,(t=>{t&&GE(e)("props updated",{},yT.DEBUG)})),{didMount:r,propsReady:t}}),UE(wT),{singleton:!0}),bF=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function vF(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!bF)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const yF=pT((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:h}])=>{const g=hT(),p=hT(),f=dT(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),XE(l,!1)}return ZE(oT(g,cT(r,u,n,f,s,a,h),cT(e,o,i),nT((([[e,r,n,i,o,a,s,c],u,h,f])=>{const x=vF(e),{align:w,behavior:$,offset:C}=x,S=i-1,k=oF(x,r,S);let D=nF(k,r.offsetTree,u)+a;"end"===w?(D+=h+_T(r.sizeTree,k)[1]-n+f,k===S&&(D+=s)):"center"===w?D+=(h+_T(r.sizeTree,k)[1]-n+f)/2:D-=o,C&&(D+=C);const E=t=>{y(),t?(c("retrying to scroll to",{location:e},yT.DEBUG),XE(g,e)):(XE(p,!0),c("list did not change, scroll successful",{},yT.DEBUG))};if(y(),"smooth"===$){let e=!1;v=KE(t,(t=>{e=e||t})),m=QE(d,(()=>{E(e)}))}else m=QE(oT(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),E);return b=setTimeout((()=>{y()}),1200),XE(l,!0),c("scrolling from index to",{behavior:$,index:k,top:D},yT.DEBUG),{behavior:$,top:D}}))),c),{scrollTargetReached:p,scrollToIndex:g,topListHeight:f}}),UE(gF,ET,wT),{singleton:!0});function xF(e,t){0==e?t():requestAnimationFrame((()=>{xF(e-1,t)}))}function wF(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const $F=pT((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=dT(!0),l=dT(0),c=dT(!0);return ZE(oT(a,cT(l),rT((([e,t])=>!!t)),iT(!1)),s),ZE(oT(a,cT(l),rT((([e,t])=>!!t)),iT(!1)),c),KE(oT(mT(t,a),cT(s,r,e,c),rT((([[,e],t,{sizeTree:r},n,i])=>e&&(!OT(r)||HE(n))&&!t&&!i)),cT(l)),(([,e])=>{QE(i,(()=>{XE(c,!0)})),xF(4,(()=>{QE(n,(()=>{XE(s,!0)})),XE(o,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),UE(gF,ET,yF,mF),{singleton:!0});function CF(e,t){return Math.abs(e-t)<1.01}const SF="up",kF="down",DF={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},EF=pT((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:i,viewportHeight:o}])=>{const a=dT(!1),s=dT(!0),l=hT(),c=hT(),d=dT(4),u=dT(0),h=uT(oT(vT(oT(bT(i),sT(1),iT(!0)),oT(bT(i),sT(1),iT(!1),JE(100))),tT()),!1),g=uT(oT(vT(oT(r,iT(!0)),oT(r,iT(!1),JE(200))),tT()),!1);ZE(oT(mT(bT(i),bT(u)),nT((([e,t])=>e<=t)),tT()),s),ZE(oT(s,lT(50)),c);const p=gT(oT(mT(n,bT(o),bT(t),bT(e),bT(d)),aT(((e,[{scrollHeight:t,scrollTop:r},n,i,o,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),DF),tT(((e,t)=>e&&e.atBottom===t.atBottom)))),f=uT(oT(n,aT(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(CF(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const i=t-(r+n)<1;return e.scrollTop!==r&&i?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),rT((e=>e.changed)),nT((e=>e.jump))),0);ZE(oT(p,nT((e=>e.atBottom))),a),ZE(oT(a,lT(50)),l);const m=dT(kF);ZE(oT(n,nT((({scrollTop:e})=>e)),tT(),aT(((e,t)=>GE(g)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?SF:kF,prevScrollTop:t}),{direction:kF,prevScrollTop:0}),nT((e=>e.direction))),m),ZE(oT(n,lT(50),iT("none")),m);const b=dT(0);return ZE(oT(h,rT((e=>!e)),iT(0)),b),ZE(oT(i,lT(100),cT(h),rT((([e,t])=>!!t)),aT((([e,t],[r])=>[t,r]),[0,0]),nT((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:f,scrollDirection:m,scrollVelocity:b}}),UE(ET)),TF="top",FF="bottom",OF="none";function MF(e,t,r){return"number"==typeof e?r===SF&&t===TF||r===kF&&t===FF?e:0:r===SF?t===TF?e.main:e.reverse:t===FF?e.main:e.reverse}function _F(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const IF=pT((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:i}])=>{const o=hT(),a=dT(0),s=dT(0),l=dT(0),c=uT(oT(mT(bT(n),bT(i),bT(r),bT(o,qT),bT(l),bT(a),bT(t),bT(e),bT(s)),nT((([e,t,r,[n,i],o,a,s,l,c])=>{const d=e-l,u=a+s,h=Math.max(r-d,0);let g=OF;const p=_F(c,TF),f=_F(c,FF);return n-=l,i+=r+s,(n+=r+s)>e+u-p&&(g=SF),(i-=l)<e-h+t+f&&(g=kF),g!==OF?[Math.max(d-r-MF(o,TF,g)-p,0),d-h-s+t+MF(o,FF,g)+f]:null})),rT((e=>null!=e)),tT(qT)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:c}}),UE(ET),{singleton:!0});const AF={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function BF(e,t,r,n,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,h=c,g=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:o,items:jF(e,i,o),offsetBottom:g,offsetTop:c,top:h,topItems:jF(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function RF(e,t,r,n,i,o){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=wF(t,s);return BF(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,r,n)}function jF(e,t,r){if(0===e.length)return[];if(!eF(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,i=e[e.length-1].index,o=[],a=BT(t.groupOffsetTree,n,i);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},o.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return o}const zF=pT((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},h,{didMount:g},{recalcInProgress:p}])=>{const f=dT([]),m=dT(0),b=hT();ZE(o.topItemsIndexes,f);const v=uT(oT(mT(g,p,bT(l,qT),bT(i),bT(n),bT(c),d,bT(f),bT(t),bT(r),e),rT((([e,t,,r,,,,,,,n])=>{const i=n&&n.length!==r;return e&&!t&&!i})),nT((([,,[e,t],r,n,i,o,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:h}=d,g=GE(m);if(0===r)return{...AF,totalCount:r};if(0===e&&0===t)return 0===g?{...AF,totalCount:r}:RF(g,i,n,s,l,c||[]);if(OT(h))return g>0?null:BF(function(e,t,r){if(eF(t)){const n=iF(e,t);return[{index:_T(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(wF(i,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of BT(h,e,t)){const i=n.value,o=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=o;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:i}),r+=i}}if(!o)return BF([],p,r,l,d,s);const f=a.length>0?a[a.length-1]+1:0,b=aF(u,e,t,f);if(0===b.length)return null;const v=r-1;return BF(YE([],(r=>{for(const n of b){const i=n.value;let o=i.offset,a=n.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-n.start;o+=t*s+t*l}a<f&&(o+=(f-a)*s,a=f);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(o>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:o,size:s}),o+=s+l}})),p,r,l,d,s)})),rT((e=>null!==e)),tT()),AF);ZE(oT(e,rT(HE),nT((e=>null==e?void 0:e.length))),i),ZE(oT(v,nT((e=>e.topListHeight))),u),ZE(u,s),ZE(oT(v,nT((e=>[e.top,e.bottom]))),a),ZE(oT(v,nT((e=>e.items))),b);const y=gT(oT(v,rT((({items:e})=>e.length>0)),cT(i,e),rT((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),nT((([,e,t])=>[e-1,t])),tT(qT),nT((([e])=>e)))),x=gT(oT(v,lT(200),rT((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),nT((({items:e})=>e[0].index)),tT())),w=gT(oT(v,rT((({items:e})=>e.length>0)),nT((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),tT(XT)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:f,...h}}),UE(gF,fF,IF,$F,yF,EF,mF,GT),{singleton:!0}),PF=pT((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:i}])=>{const o=hT(),a=uT(oT(mT(r,e,n,t,i),nT((([e,t,r,n,i])=>e+t+r+n+i.offsetBottom+i.bottom))),0);return ZE(bT(a),o),{totalListHeight:a,totalListHeightChanged:o}}),UE(ET,zF),{singleton:!0}),LF=pT((([{viewportHeight:e},{totalListHeight:t}])=>{const r=dT(!1),n=uT(oT(mT(r,e,t),rT((([e])=>e)),nT((([,e,t])=>Math.max(0,e-t))),lT(0),tT()),0);return{alignToBottom:r,paddingTopAddition:n}}),UE(ET,PF),{singleton:!0});function NF(e){return!!e&&("smooth"===e?"smooth":"auto")}const HF=pT((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=dT(!1),u=hT();let h=null;function g(e){XE(i,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=QE(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(GE(l)("scrolling to bottom due to increased size",{},yT.DEBUG),g("auto"))}));setTimeout(t,100)}return KE(oT(mT(oT(bT(t),sT(1)),a),cT(bT(d),n,o,c),nT((([[e,t],r,n,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?NF(e(t)):t&&NF(e))(r,n||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),rT((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=QE(e,(()=>{GE(l)("following output to ",{totalCount:r},yT.DEBUG),g(t),h=null}))})),KE(oT(mT(bT(d),t,s),rT((([e,,t])=>e&&t)),aT((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),rT((({refreshed:e})=>e)),cT(d,t)),(([,e])=>{GE(o)&&p(!1!==e)})),KE(u,(()=>{p(!1!==GE(d))})),KE(mT(bT(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:u,followOutput:d}}),UE(gF,EF,yF,$F,mF,wT,ET)),WF=pT((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(ZE(oT(s,cT(o),rT((([,e])=>0!==e)),cT(i,n,t,r,e),nT((([[,e],t,r,n,i,o=[]])=>RF(e,t,r,n,i,o)))),a),{})),UE(gF,$F,zF,mF),{singleton:!0}),YF=pT((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=dT(0);return KE(oT(e,cT(n),rT((([,e])=>0!==e)),nT((([,e])=>({top:e})))),(e=>{QE(oT(r,sT(1),rT((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{XE(t,e)}))}))})),{initialScrollTop:n}}),UE(mF,ET,zF),{singleton:!0}),VF=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=r?r:"start",behavior:n}:e>o?{...i,align:null!=r?r:"end",behavior:n}:null,UF=pT((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=hT();return ZE(oT(d,cT(t,l,r,o,i,n,s),cT(e),nT((([[e,t,r,n,i,o,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:h=VF,done:g,...p}=e,f=oF(e,t,n-1),m=nF(f,t.offsetTree,c)+i+o,b=h({itemBottom:m+_T(t.sizeTree,f)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+o});return b?g&&QE(oT(a,rT((e=>!e)),sT(GE(a)?1:2)),g):g&&g(),b})),rT((e=>null!==e))),c),{scrollIntoView:d}}),UE(gF,ET,yF,zF,wT),{singleton:!0}),KF=pT((([{scrollVelocity:e}])=>{const t=dT(!1),r=hT(),n=dT(!1);return ZE(oT(e,cT(n,t,r),rT((([e,t])=>!!t)),nT((([e,t,r,n])=>{const{enter:i,exit:o}=t;if(r){if(o(e,n))return!1}else if(i(e,n))return!0;return r})),tT()),t),KE(oT(mT(t,e,r),cT(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),UE(EF),{singleton:!0}),XF=pT((([{scrollContainerState:e,scrollTo:t}])=>{const r=hT(),n=hT(),i=hT(),o=dT(!1),a=dT(void 0);return ZE(oT(mT(r,n),nT((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),ZE(oT(t,cT(n),nT((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:r,windowScrollTo:i,windowViewportRect:n}}),UE(ET)),qF=pT((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=hT(),d=dT(void 0),u=dT(null),h=dT(null);return ZE(s,u),ZE(l,h),KE(oT(c,cT(t,n,a,u,h,r)),(([e,t,r,n,i,o,a])=>{const s=function(e){return jT(e).map((({k:e,v:t},r,n)=>{const i=n[r+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==i&&null!==o&&(r=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:r-=a})})),ZE(oT(d,rT(HE),nT(GF)),i),ZE(oT(o,cT(d),rT((([,e])=>void 0!==e)),tT(),nT((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),UE(gF,ET,$F,mF,XF));function GF(e){return{align:"start",index:0,offset:e.scrollTop}}const ZF=pT((([{topItemsIndexes:e}])=>{const t=dT(0);return ZE(oT(t,rT((e=>e>=0)),nT((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),UE(zF));function QF(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const JF=QF((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),eO=pT((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:h},{log:g},{recalcInProgress:p}])=>{const f=gT(oT(l,cT(a),aT((([,e,t,r],[{bottom:n,items:i,offsetBottom:o,totalCount:a},s])=>{const l=n+o;let c=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,i,a,l]}),[0,[],0,0]),rT((([e])=>0!==e)),cT(n,s,r,i,g,p),rT((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===SF)),nT((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},yT.DEBUG),e)))));function m(r){r>0?(XE(t,{behavior:"auto",top:-r}),XE(e,0)):(XE(e,0),XE(t,{behavior:"auto",top:-r}))}return KE(oT(f,cT(e,o)),(([t,r,n])=>{n&&JF()?XE(e,r-t):m(-t)})),KE(oT(mT(uT(o,!1),e,p),rT((([e,t,r])=>!e&&!r&&0!==t)),nT((([e,t])=>t)),lT(1)),m),ZE(oT(u,nT((e=>({top:-e})))),t),KE(oT(c,cT(h,d),nT((([e,{groupIndices:t,lastSize:r,sizeTree:n},i])=>{function o(e){return e*(r+i)}if(0===t.length)return o(e);{let r=0;const i=MT(n,0);let a=0,s=0;for(;a<e;){a++,r+=i;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=i,n=e-a+1),a+=n,r+=o(n),s++}return r}}))),(r=>{XE(e,r),requestAnimationFrame((()=>{XE(t,{top:r}),requestAnimationFrame((()=>{XE(e,0),XE(p,!1)}))}))})),{deviation:e}}),UE(ET,EF,zF,gF,wT,GT)),tO=pT((([e,t,r,n,i,o,a,s,l,c])=>({...e,...t,...r,...n,...i,...o,...a,...s,...l,...c})),UE(IF,WF,mF,KF,PF,YF,LF,XF,UF,wT)),rO=pT((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:p},f,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},k])=>(ZE(x.rangeChanged,k.scrollSeekRangeChanged),ZE(oT(k.windowViewportRect,nT((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:i,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:g,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...k,...f,sizes:l,...m})),UE(gF,$F,ET,qF,HF,zF,yF,eO,ZF,fF,tO));function nO(e,t){const r={},n={};let i=0;const o=e.length;for(;i<o;)n[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const iO=typeof document<"u"?i.useLayoutEffect:i.useEffect;function oO(t,r,n){const o=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),c=i.createContext({});function d(e,t){e.propsReady&&XE(e.propsReady,!1);for(const n of o){XE(e[r.required[n]],t[n])}for(const n of a)if(n in t){XE(e[r.optional[n]],t[n])}e.propsReady&&XE(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(i,o){switch(i){case 1:return o?r===o?void 0:(n(),r=o,t=KE(e,o),t):(n(),WE);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=i.forwardRef(((h,g)=>{const{children:p,...f}=h,[m]=i.useState((()=>YE(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(n.map((e=>r(e))));return o&&t.set(i,a),a};return r(e)}(t),(e=>{d(e,f)})))),[b]=i.useState(LE(u,m));iO((()=>{for(const e of l)e in f&&KE(b[e],f[e]);return()=>{Object.values(b).map(qE)}}),[f,b,m]),iO((()=>{d(m,f)})),i.useImperativeHandle(g,jE(function(e){return s.reduce(((t,n)=>(t[n]=t=>{XE(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(c.Provider,{value:m,children:n?e(v,{...nO([...o,...a,...l],f),children:p}):p})})),g=i.version.startsWith("18")?e=>{const t=i.useContext(c)[e],r=i.useCallback((e=>KE(t,e)),[t]);return i.useSyncExternalStore(r,(()=>GE(t)),(()=>GE(t)))}:e=>{const t=i.useContext(c)[e],[r,n]=i.useState(LE(GE,t));return iO((()=>KE(t,(e=>{e!==r&&n(jE(e))}))),[t,r]),r};return{Component:h,useEmitter:(e,t)=>{const r=i.useContext(c)[e];iO((()=>KE(r,t)),[t,r])},useEmitterValue:g,usePublisher:e=>i.useCallback(NE(XE,i.useContext(c)[e]),[e])}}const aO=i.createContext(void 0),sO=i.createContext(void 0),lO=typeof document<"u"?i.useLayoutEffect:i.useEffect;function cO(e,t,r,n=WE,o,a){const s=i.useRef(null),l=i.useRef(null),c=i.useRef(null),d=i.useCallback((r=>{const n=r.target,i=n===window||n===document,o=a?i?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?i?document.documentElement.scrollWidth:n.scrollWidth:i?document.documentElement.scrollHeight:n.scrollHeight,d=a?i?window.innerWidth:n.offsetWidth:i?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(o,0),viewportHeight:d})};r.suppressFlushSync?u():E.flushSync(u),null!==l.current&&(o===l.current||o<=0||o===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return i.useEffect((()=>{const e=o||s.current;return n(o||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",d)}}),[s,d,r,n,o]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const i="smooth"===r.behavior;let o,d,u;n===window?(d=Math.max(JT(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),o=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[a?"scrollWidth":"scrollHeight"],o=JT(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const h=d-o;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),CF(o,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:o}),void(i&&t(!0));i?(l.current=r.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const dO="-webkit-sticky",uO="sticky",hO=QF((()=>{if(typeof document>"u")return uO;const e=document.createElement("div");return e.style.position=dO,e.style.position===dO?dO:uO}));function gO(e){return e}const pO=pT((()=>{const e=dT((e=>`Item ${e}`)),t=dT(null),r=dT((e=>`Group ${e}`)),n=dT({}),i=dT(gO),o=dT("div"),a=dT(WE),s=(e,t=null)=>uT(oT(n,nT((t=>t[e])),tT()),t);return{components:n,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),fO=pT((([e,t])=>({...e,...t})),UE(rO,pO)),mO=({height:t})=>e("div",{style:{height:t}}),bO={overflowAnchor:"none",position:hO(),zIndex:1},vO={overflowAnchor:"none"},yO={...vO,display:"inline-block",height:"100%"},xO=i.memo((function({showTopList:t=!1}){const r=jO("listState"),n=zO("sizeRanges"),o=jO("useWindowScroll"),a=jO("customScrollParent"),s=zO("windowScrollContainerState"),l=zO("scrollContainerState"),c=a||o?s:l,d=jO("itemContent"),u=jO("context"),h=jO("groupContent"),g=jO("trackItemSizes"),p=jO("itemSize"),f=jO("log"),m=zO("gap"),b=jO("horizontalDirection"),{callbackRef:v}=ST(n,p,g,t?WE:c,f,m,a,b,jO("skipAnimationFrameInResizeObserver")),[y,x]=i.useState(0);RO("deviation",(e=>{y!==e&&x(e)}));const w=jO("EmptyPlaceholder"),$=jO("ScrollSeekPlaceholder")||mO,C=jO("ListComponent"),S=jO("ItemComponent"),k=jO("GroupComponent"),E=jO("computeItemKey"),T=jO("isSeeking"),F=jO("groupIndices").length>0,O=jO("alignToBottom"),M=jO("initialItemFinalLocationReached"),_=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:O?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:O?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...M?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...kO(w,u)}):e(C,{...kO(C,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:_,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=E(t+r.firstItemIndex,e.data,u);return T?D($,{...kO($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?D(k,{...kO(k,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:bO},h(e.index,u)):D(S,{...kO(S,u),...DO(S,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?yO:vO},F?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),wO={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},$O={outline:"none",overflowX:"auto",position:"relative"},CO=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),SO={position:hO(),top:0,width:"100%",zIndex:1};function kO(e,t){if("string"!=typeof e)return{context:t}}function DO(e,t){return{item:"string"==typeof e?void 0:t}}const EO=i.memo((function(){const t=jO("HeaderComponent"),r=zO("headerHeight"),n=jO("HeaderFooterTag"),o=$T(i.useMemo((()=>e=>{r(JT(e,"height"))}),[r]),!0,jO("skipAnimationFrameInResizeObserver")),a=jO("context");return t?e(n,{ref:o,children:e(t,{...kO(t,a)})}):null})),TO=i.memo((function(){const t=jO("FooterComponent"),r=zO("footerHeight"),n=jO("HeaderFooterTag"),o=$T(i.useMemo((()=>e=>{r(JT(e,"height"))}),[r]),!0,jO("skipAnimationFrameInResizeObserver")),a=jO("context");return t?e(n,{ref:o,children:e(t,{...kO(t,a)})}):null}));function FO({useEmitter:t,useEmitterValue:r,usePublisher:n}){return i.memo((function({children:i,style:o,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:g,scrollerRef:p,scrollToCallback:f}=cO(s,c,l,d,void 0,h);return t("scrollTo",f),t("scrollBy",g),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?$O:wO,...o},tabIndex:0,...a,...kO(l,u),children:i})}))}function OO({useEmitter:t,useEmitterValue:r,usePublisher:n}){return i.memo((function({children:i,style:o,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),g=r("context"),{scrollByCallback:p,scrollerRef:f,scrollToCallback:m}=cO(s,c,l,WE,h);return lO((()=>(f.current=h||window,()=>{f.current=null})),[f,h]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==d?{height:d+u}:{}},...a,...kO(l,g),children:i})}))}const MO=({children:t})=>{const r=i.useContext(aO),n=zO("viewportHeight"),o=zO("fixedItemHeight"),a=jO("alignToBottom"),s=jO("horizontalDirection"),l=$T(i.useMemo((()=>PE(n,(e=>JT(e,s?"width":"height")))),[n,s]),!0,jO("skipAnimationFrameInResizeObserver"));return i.useEffect((()=>{r&&(n(r.viewportHeight),o(r.itemHeight))}),[r,n,o]),e("div",{"data-viewport-type":"element",ref:l,style:CO(a),children:t})},_O=({children:t})=>{const r=i.useContext(aO),n=zO("windowViewportRect"),o=zO("fixedItemHeight"),a=jO("customScrollParent"),s=DT(n,a,jO("skipAnimationFrameInResizeObserver")),l=jO("alignToBottom");return i.useEffect((()=>{r&&(o(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,o]),e("div",{"data-viewport-type":"window",ref:s,style:CO(l),children:t})},IO=({children:t})=>{const r=jO("TopItemListComponent")||"div",n=jO("headerHeight"),i={...SO,marginTop:`${n}px`},o=jO("context");return e(r,{style:i,...kO(r,o),children:t})},AO=i.memo((function(r){const n=jO("useWindowScroll"),i=jO("topItemsIndexes").length>0,o=jO("customScrollParent"),a=jO("context"),s=o||n?LO:PO,l=o||n?_O:MO;return t(s,{...r,...kO(s,a),children:[i&&e(IO,{children:e(xO,{showTopList:!0})}),t(l,{children:[e(EO,{}),e(xO,{}),e(TO,{})]})]})})),{Component:BO,useEmitter:RO,useEmitterValue:jO,usePublisher:zO}=oO(fO,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},AO),PO=FO({useEmitter:RO,useEmitterValue:jO,usePublisher:zO}),LO=OO({useEmitter:RO,useEmitterValue:jO,usePublisher:zO}),NO=BO,HO={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},WO={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:YO,floor:VO,max:UO,min:KO,round:XO}=Math;function qO(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function GO(e,t){return e&&e.width===t.width&&e.height===t.height}function ZO(e,t){return e&&e.column===t.column&&e.row===t.row}const QO=pT((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},h,g,{didMount:p,propsReady:f},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=dT(0),C=dT(0),S=dT(HO),k=dT({height:0,width:0}),D=dT({height:0,width:0}),E=hT(),T=hT(),F=dT(0),O=dT(null),M=dT({column:0,row:0}),_=hT(),I=hT(),A=dT(!1),B=dT(0),R=dT(!0),j=dT(!1),z=dT(!1);KE(oT(p,cT(B),rT((([e,t])=>!!t))),(()=>{XE(R,!1)})),KE(oT(mT(p,R,D,k,B,j),rT((([e,t,r,n,,i])=>e&&!t&&0!==r.height&&0!==n.height&&!i))),(([,,,,e])=>{XE(j,!0),xF(1,(()=>{XE(E,e)})),QE(oT(c),(()=>{XE(t,[0,0]),XE(R,!0)}))})),ZE(oT(I,rT((e=>null!=e&&e.scrollTop>0)),iT(0)),C),KE(oT(p,cT(I),rT((([,e])=>null!=e))),(([,e])=>{e&&(XE(k,e.viewport),XE(D,e.item),XE(M,e.gap),e.scrollTop>0&&(XE(A,!0),QE(oT(c,sT(1)),(e=>{XE(A,!1)})),XE(l,{top:e.scrollTop})))})),ZE(oT(k,nT((({height:e})=>e))),u),ZE(oT(mT(bT(k,GO),bT(D,GO),bT(M,((e,t)=>e&&e.column===t.column&&e.row===t.row)),bT(c)),nT((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),_),ZE(oT(mT(bT($),n,bT(M,ZO),bT(D,GO),bT(k,GO),bT(O),bT(C),bT(A),bT(R),bT(B)),rT((([,,,,,,,e])=>!e)),nT((([e,[t,r],n,i,o,a,s,,l,c])=>{const{column:d,row:u}=n,{height:h,width:g}=i,{width:p}=o;if(0===s&&(0===e||0===p))return HO;if(0===g){const t=wF(c,e);return function(e){return{...WO,items:e}}(qO(t,t+Math.max(s-1,0),a))}const f=JO(p,g,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=f*VO((t+u)/(h+u)),b=f*YO((r+u)/(h+u))-1,b=KO(e-1,UO(b,f-1)),m=KO(b,UO(0,m))):(m=0,b=-1);const v=qO(m,b,a),{bottom:y,top:x}=eM(o,n,i,v),w=YO(e/f);return{bottom:y,itemHeight:h,items:v,itemWidth:g,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),ZE(oT(O,rT((e=>null!==e)),nT((e=>e.length))),$),ZE(oT(mT(k,D,S,M),rT((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),nT((([e,t,{items:r},n])=>{const{bottom:i,top:o}=eM(e,n,t,r);return[o,i]})),tT(qT)),t);const P=dT(!1);ZE(oT(c,cT(P),nT((([e,t])=>t||0!==e))),P);const L=gT(oT(mT(S,$),rT((([{items:e}])=>e.length>0)),cT(P),rT((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),nT((([[,e]])=>e-1)),tT())),N=gT(oT(bT(S),rT((({items:e})=>e.length>0&&0===e[0].index)),iT(0),tT())),H=gT(oT(bT(S),cT(A),rT((([{items:e},t])=>e.length>0&&!t)),nT((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),tT(XT),lT(0)));ZE(H,g.scrollSeekRangeChanged),ZE(oT(E,cT(k,D,$,M),nT((([e,t,r,n,i])=>{const o=vF(e),{align:a,behavior:s,offset:l}=o;let c=o.index;"LAST"===c&&(c=n-1),c=UO(0,c,KO(n-1,c));let d=tM(t,i,r,c);return"end"===a?d=XO(d-t.height+r.height):"center"===a&&(d=XO(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=uT(oT(S,nT((e=>e.offsetBottom+e.bottom))),0);return ZE(oT(x,nT((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:m,data:O,deviation:F,footerHeight:i,gap:M,headerHeight:o,increaseViewportBy:e,initialItemCount:C,itemDimensions:D,overscan:r,restoreStateFrom:I,scrollBy:a,scrollContainerState:s,scrollHeight:T,scrollTo:l,scrollToIndex:E,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:k,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...g,gridState:S,horizontalDirection:z,initialTopMostItemIndex:B,totalListHeight:W,...h,endReached:L,propsReady:f,rangeChanged:H,startReached:N,stateChanged:_,stateRestoreInProgress:A,...w}}),UE(IF,ET,EF,KF,mF,XF,wT));function JO(e,t,r){return UO(1,VO((e+r)/(VO(t)+r)))}function eM(e,t,r,n){const{height:i}=r;if(void 0===i||0===n.length)return{bottom:0,top:0};const o=tM(e,t,r,n[0].index);return{bottom:tM(e,t,r,n[n.length-1].index)+i,top:o}}function tM(e,t,r,n){const i=JO(e.width,r.width,t.column),o=VO(n/i),a=o*r.height+UO(0,o-1)*t.row;return a>0?a+t.row:a}const rM=pT((()=>{const e=dT((e=>`Item ${e}`)),t=dT({}),r=dT(null),n=dT("virtuoso-grid-item"),i=dT("virtuoso-grid-list"),o=dT(gO),a=dT("div"),s=dT(WE),l=(e,r=null)=>uT(oT(t,nT((t=>t[e])),tT()),r),c=dT(!1),d=dT(!1);return ZE(bT(d),c),{components:t,computeItemKey:o,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),nM=pT((([e,t])=>({...e,...t})),UE(QO,rM)),iM=i.memo((function(){const t=hM("gridState"),r=hM("listClassName"),n=hM("itemClassName"),o=hM("itemContent"),a=hM("computeItemKey"),s=hM("isSeeking"),l=gM("scrollHeight"),c=hM("ItemComponent"),d=hM("ListComponent"),u=hM("ScrollSeekPlaceholder"),h=hM("context"),g=gM("itemDimensions"),p=gM("gap"),f=hM("log"),m=hM("stateRestoreInProgress"),b=gM("reportReadyState"),v=$T(i.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();g({height:e,width:t})}p({column:mM("column-gap",getComputedStyle(e).columnGap,f),row:mM("row-gap",getComputedStyle(e).rowGap,f)})}),[l,g,p,f]),!0,!1);return lO((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:r,ref:v,...kO(d,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const i=a(r.index,r.data,h);return s?e(u,{...kO(u,h),height:t.itemHeight,index:r.index,width:t.itemWidth},i):D(c,{...kO(c,h),className:n,"data-index":r.index,key:i},o(r.index,r.data,h))}))})})),oM=i.memo((function(){const t=hM("HeaderComponent"),r=gM("headerHeight"),n=hM("headerFooterTag"),o=$T(i.useMemo((()=>e=>{r(JT(e,"height"))}),[r]),!0,!1),a=hM("context");return t?e(n,{ref:o,children:e(t,{...kO(t,a)})}):null})),aM=i.memo((function(){const t=hM("FooterComponent"),r=gM("footerHeight"),n=hM("headerFooterTag"),o=$T(i.useMemo((()=>e=>{r(JT(e,"height"))}),[r]),!0,!1),a=hM("context");return t?e(n,{ref:o,children:e(t,{...kO(t,a)})}):null})),sM=({children:t})=>{const r=i.useContext(sO),n=gM("itemDimensions"),o=gM("viewportDimensions"),a=$T(i.useMemo((()=>e=>{o(e.getBoundingClientRect())}),[o]),!0,!1);return i.useEffect((()=>{r&&(o({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,o,n]),e("div",{ref:a,style:CO(!1),children:t})},lM=({children:t})=>{const r=i.useContext(sO),n=gM("windowViewportRect"),o=gM("itemDimensions"),a=hM("customScrollParent"),s=DT(n,a,!1);return i.useEffect((()=>{r&&(o({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,o]),e("div",{ref:s,style:CO(!1),children:t})},cM=i.memo((function({...r}){const n=hM("useWindowScroll"),i=hM("customScrollParent"),o=i||n?fM:pM,a=i||n?lM:sM,s=hM("context");return e(o,{...r,...kO(o,s),children:t(a,{children:[e(oM,{}),e(iM,{}),e(aM,{})]})})})),{Component:dM,useEmitter:uM,useEmitterValue:hM,usePublisher:gM}=oO(nM,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},cM),pM=FO({useEmitter:uM,useEmitterValue:hM,usePublisher:gM}),fM=OO({useEmitter:uM,useEmitterValue:hM,usePublisher:gM});function mM(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,yT.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const bM=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),vM=({children:t})=>{const[r,n]=a(-1);return e(bM.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},yM=M.div`
    overflow: hidden;
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};
    background: ${Ic.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Ac["body-md-regular"]:Ac["body-baseline-regular"]}

    ${Lc.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Pc["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Lc.MaxWidth.xs} {
        width: calc(100vw - ${Pc["xs-margin"]} * 2);
    }

    ${Lc.MaxWidth.xxs} {
        width: calc(100vw - ${Pc["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ic["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${zc.full};
        background-clip: padding-box;
    }
`,xM=M.div`
    background: transparent;
    padding: ${jc["spacing-8"]};
`,wM=M.ul`
    list-style-type: none;
`,$M=M.li`
    display: flex;
    align-items: flex-start;
    gap: ${jc["spacing-8"]};
    padding: ${jc["spacing-12"]} ${jc["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${zc.none};
    outline: none;

    ${e=>e.$disabled?_`
                cursor: not-allowed;
            `:e.$active&&e.$selected?_`
                background: ${Ic["bg-hover"]};
            `:e.$active?_`
                background: ${Ic["bg-hover-subtle"]};
            `:void 0}
`,CM=M(Ge)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Ic["icon-selected"]};
`,SM=M.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,kM=M(qe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ic["icon-selected"]};
`,DM=M(Ke)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ic["icon-primary-subtlest"]};
`,EM=M(Xe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ic["icon-disabled-subtle"]};
`,TM=M.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,FM=M(Xp)`
    cursor: pointer;
    overflow: hidden;
    color: ${Ic["text-primary"]};
    font-size: inherit;
`,OM=M(FM)`
    ${Ac["body-baseline-semibold"]}
`,MM=M(FM)`
    ${Ac["body-md-semibold"]}
    padding: ${jc["spacing-8"]} ${jc["spacing-8"]};
`,_M=M.div`
    width: 100%;
    display: flex;
    padding: ${jc["spacing-12"]} ${jc["spacing-16"]};
    align-items: center;
`,IM=M(L)`
    margin-right: ${jc["spacing-4"]};
    color: ${Ic["icon-error"]};
    height: 1em;
    width: 1em;
`,AM=M(Fd)`
    margin-right: ${jc["spacing-8"]};
    color: ${Ic.icon};
`,BM=M.div`
    ${Jd()}
    color: ${Ic["text-subtle"]};
    padding: 0 ${jc["spacing-16"]} ${jc["spacing-12"]}
        ${jc["spacing-16"]};
`,RM=M.div`
    background: ${Ic["bg-strong"]};
    border-radius: ${zc.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Ac["body-md-regular"]:Ac["body-baseline-regular"]}
`,jM=M.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${jc["spacing-8"]};
    padding: ${e=>"small"===e.$variant?_`
                  ${jc["spacing-8"]} ${jc["spacing-16"]}
              `:_`10px ${jc["spacing-16"]}`};
`,zM=M(Kp)`
    flex: 1;
`,PM=M(We)`
    color: ${Ic.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,LM=M(ad)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${jc["spacing-8"]};
    margin-left: -${jc["spacing-8"]};
    color: ${Ic.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,NM=g(((r,n)=>{var{value:i,variant:o,onClear:a}=r,s=Vo(r,["value","variant","onClear"]);return t(RM,{$variant:o,children:[t(jM,{$variant:o,children:[e(PM,{"aria-hidden":!0}),e(zM,Object.assign({ref:n,value:i,$variant:o},s))]}),i&&e(LM,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(Pe,{"aria-hidden":!0})})]})})),HM=({listItems:n,multiSelect:i,maxSelectable:s,selectedItems:l,disableItemFocus:c,itemsLoadState:d="success",itemTruncationType:h="end",itemMaxLines:g=2,labelDisplayType:m="inline",variant:b="default",listboxId:v,width:y,topScrollItem:x,onSelectItem:w,onSelectAll:$,onDismiss:C,onRetry:S,valueExtractor:k,listExtractor:D,renderListItem:E,renderCustomCallToAction:T,enableSearch:F,hideNoResultsDisplay:O,noResultsDescription:M,searchPlaceholder:_="Search",searchFunction:I,onSearch:A})=>{const{focusedIndex:B,setFocusedIndex:R}=f(bM),[j,z]=a(""),[P,L]=a(null!=n?n:[]),N=hh(d),H=dh(),W=o(null),Y=o(null),V=o([]),U=o(null),K=o(null),X=!!s&&!!l&&(null==l?void 0:l.length)===s,q=e=>{const t=D?D(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},G=p((e=>!!kD(l,(t=>ED(t,e)))),[l]),Z=sh((()=>null==I?void 0:I(j))),Q=sh((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=q(e),n=j.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),J=(e,t)=>{X&&!G(e)||(R(t),null==w||w(e,(e=>k?k(e):e)(e)))},ee=e=>{const t=e.target.value;z(t),null==A||A()},te=()=>{var e;z(""),null===(e=U.current)||void 0===e||e.focus(),null==A||A()},re=()=>{null==S||S()};lh("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),B<P.length-1){const e=B+1;null===(t=V.current[e])||void 0===t||t.focus(),R(e)}break;case"ArrowUp":if(e.preventDefault(),B>0){const e=B-1;null===(r=V.current[e])||void 0===r||r.focus(),R(e)}else 0===B&&U.current&&(U.current.focus(),R(-1));break;case"Space":case"Enter":document.activeElement===V.current[B]&&(e.preventDefault(),P[B]&&J(P[B],B))}})),u((()=>{var e;if(!x)return void(null===(e=K.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf(x);K.current&&-1!==e&&(K.current.scrollToIndex({index:e}),R(e))}),0);return()=>clearTimeout(t)}),[V,n,R,x]),u((()=>{var e,t,r;if(H)return;if(c||!n)return;const i=n.findIndex((e=>G(e)));U.current?(R(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):B>0?(null===(e=K.current)||void 0===e||e.scrollToIndex({index:B,align:"center"}),setTimeout((()=>{var e;return null===(e=V.current[B])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=K.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),R(i),setTimeout((()=>{var e;return null===(e=V.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(r=K.current)||void 0===r||r.scrollToIndex({index:0}),R(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200))}),[G,c,B,n,H,R]),u((()=>{H&&N&&(c||"success"===d&&U.current&&(R(-1),U.current.focus()))}),[H,N,d,R,c]),u((()=>{var e;L(null!==(e=""===j?n:I?Z():Q())&&void 0!==e?e:[])}),[Z,Q,n,I,j]);const ne=t=>i?e(X&&!t?EM:t?kM:DM,{"aria-hidden":!0}):t?e(CM,{"aria-hidden":!0}):e(SM,{}),ie=(t,r)=>{const{title:n,secondaryLabel:i}=q(t);return e(RE,{displayType:m,label:n,maxLines:g,selected:r,disabled:!r&&X,sublabel:i,truncationType:h,variant:b})},oe=(n,o)=>{if(!S||"success"===d){const a=G(n),s=o===B;return e($M,{"aria-selected":a,"aria-multiselectable":i,"aria-disabled":!a&&X,"data-testid":"list-item",onClick:()=>J(n,o),onMouseEnter:()=>(e=>{R(e)})(o),ref:e=>{V.current[o]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&X,children:E?E(n,{selected:a}):t(r,{children:[ne(a),ie(n,a)]})},((e,t)=>`item_${t}__${k?k(e):e}`)(n,o))}},ae=()=>{if(l&&i&&P.length>0&&!j&&"success"===d)return e(TM,{children:e(MM,{onClick:$,type:"button",$variant:b,children:s||0!==l.length?"Clear all":"Select all"})})},se=()=>{if(!O&&(j||!F)&&0===P.length&&"success"===d)return t(r,{children:[t(_M,{"data-testid":"list-no-results",children:[e(IM,{"data-testid":"no-result-icon"}),"No results found."]}),M&&e(BM,{"data-testid":"no-result-desc",children:M})]})},le=()=>{if(S&&"loading"===d)return t(_M,{"data-testid":"list-loading",children:[e(AM,{}),"Loading..."]})},ce=()=>{if(S&&"fail"===d)return t(_M,{"data-testid":"list-fail",children:[e(IM,{"data-testid":"load-error-icon"}),"Failed to load. ",e(OM,{onClick:re,type:"button",$variant:b,children:"Try again."})]})},de=()=>{var t;const r="test"===process.env.NODE_ENV;return e(wM,{role:"listbox",id:v,children:e(NO,Object.assign({ref:K,style:{height:"100%"},data:P,customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>oe(t,e)},r?{initialItemCount:P.length}:{}),r?P.length:void 0)})};return t(yM,{"data-testid":"dropdown-container",ref:W,$width:y,$variant:b,children:[t(xM,{ref:Y,"data-testid":"dropdown-list",children:[(()=>{if((F||I)&&"success"===d)return e(NM,{ref:U,onChange:ee,value:j,placeholder:_,"data-testid":"search-input","aria-label":"Enter text to search",onClear:te,variant:b})})(),ae(),se(),le(),ce(),de()]}),(()=>{if(T)return e("div",{"data-testid":"custom-cta",children:T(C,P)})})()]})},WM=M(Xp)`
    display: flex;
    align-items: center;
    gap: ${jc["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${jc["spacing-16"]};

    ${e=>"small"===e.$variant?Ac["body-md-regular"]:Ac["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,YM=M.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Bc["duration-250"]} ${Bc["ease-default"]};

    svg {
        color: ${Ic.icon};
        height: 1em;
        width: 1em;
    }
`,VM=g((({children:r,disabled:n,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},c)=>t(WM,{ref:c,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l,children:[r,!s&&e(YM,{$expanded:i,$variant:l,children:e(ve,{"aria-hidden":!0})})]})));var UM=Symbol.for("immer-nothing"),KM=Symbol.for("immer-draftable"),XM=Symbol.for("immer-state"),qM="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function GM(e,...t){if("production"!==process.env.NODE_ENV){const r=qM[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ZM=Object.getPrototypeOf;function QM(e){return!!e&&!!e[XM]}function JM(e){return!!e&&(t_(e)||Array.isArray(e)||!!e[KM]||!!e.constructor?.[KM]||a_(e)||s_(e))}var e_=Object.prototype.constructor.toString();function t_(e){if(!e||"object"!=typeof e)return!1;const t=ZM(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===e_}function r_(e,t){0===n_(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function n_(e){const t=e[XM];return t?t.type_:Array.isArray(e)?1:a_(e)?2:s_(e)?3:0}function i_(e,t){return 2===n_(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function o_(e,t,r){const n=n_(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function a_(e){return e instanceof Map}function s_(e){return e instanceof Set}function l_(e){return e.copy_||e.base_}function c_(e,t){if(a_(e))return new Map(e);if(s_(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=t_(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[XM];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(ZM(e),t)}{const t=ZM(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function d_(e,t=!1){return h_(e)||QM(e)||!JM(e)||(n_(e)>1&&(e.set=e.add=e.clear=e.delete=u_),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>d_(t,!0)))),e}function u_(){GM(2)}function h_(e){return Object.isFrozen(e)}var g_,p_={};function f_(e){const t=p_[e];return t||GM(0,e),t}function m_(){return g_}function b_(e,t){t&&(f_("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function v_(e){y_(e),e.drafts_.forEach(w_),e.drafts_=null}function y_(e){e===g_&&(g_=e.parent_)}function x_(e){return g_={drafts_:[],parent_:g_,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function w_(e){const t=e[XM];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function $_(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[XM].modified_&&(v_(t),GM(4)),JM(e)&&(e=C_(t,e),t.parent_||k_(t,e)),t.patches_&&f_("Patches").generateReplacementPatches_(r[XM].base_,e,t.patches_,t.inversePatches_)):e=C_(t,r,[]),v_(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==UM?e:void 0}function C_(e,t,r){if(h_(t))return t;const n=t[XM];if(!n)return r_(t,((i,o)=>S_(e,n,t,i,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return k_(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),r_(i,((i,a)=>S_(e,n,t,i,a,r,o))),k_(e,t,!1),r&&e.patches_&&f_("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function S_(e,t,r,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===r&&GM(5),QM(i)){const a=C_(e,i,o&&t&&3!==t.type_&&!i_(t.assigned_,n)?o.concat(n):void 0);if(o_(r,n,a),!QM(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(JM(i)&&!h_(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;C_(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||k_(e,i)}}function k_(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&d_(t,r)}var D_={get(e,t){if(t===XM)return e;const r=l_(e);if(!i_(r,t))return function(e,t,r){const n=F_(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!JM(n)?n:n===T_(e.base_,t)?(M_(e),e.copy_[t]=__(n,e)):n},has:(e,t)=>t in l_(e),ownKeys:e=>Reflect.ownKeys(l_(e)),set(e,t,r){const n=F_(l_(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=T_(l_(e),t),i=n?.[XM];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||i_(e.base_,t)))return!0;M_(e),O_(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==T_(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,M_(e),O_(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=l_(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){GM(11)},getPrototypeOf:e=>ZM(e.base_),setPrototypeOf(){GM(12)}},E_={};function T_(e,t){const r=e[XM];return(r?l_(r):e)[t]}function F_(e,t){if(!(t in e))return;let r=ZM(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=ZM(r)}}function O_(e){e.modified_||(e.modified_=!0,e.parent_&&O_(e.parent_))}function M_(e){e.copy_||(e.copy_=c_(e.base_,e.scope_.immer_.useStrictShallowCopy_))}r_(D_,((e,t)=>{E_[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),E_.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&GM(13),E_.set.call(this,e,t,void 0)},E_.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&GM(14),D_.set.call(this,e[0],t,r,e[0])};function __(e,t){const r=a_(e)?f_("MapSet").proxyMap_(e,t):s_(e)?f_("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:m_(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=D_;r&&(i=[n],o=E_);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:m_()).drafts_.push(r),r}function I_(e){if(!JM(e)||h_(e))return e;const t=e[XM];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=c_(e,t.scope_.immer_.useStrictShallowCopy_)}else r=c_(e,!0);return r_(r,((e,t)=>{o_(r,e,I_(t))})),t&&(t.finalized_=!1),r}var A_=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&GM(6),void 0!==r&&"function"!=typeof r&&GM(7),JM(e)){const i=x_(this),o=__(e,void 0);let a=!0;try{n=t(o),a=!1}finally{a?v_(i):y_(i)}return b_(i,r),$_(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===UM&&(n=void 0),this.autoFreeze_&&d_(n,!0),r){const t=[],i=[];f_("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}GM(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const i=this.produce(e,t,((e,t)=>{r=e,n=t}));return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){JM(e)||GM(8),QM(e)&&(e=function(e){QM(e)||GM(10,e);return I_(e)}(e));const t=x_(this),r=__(e,void 0);return r[XM].isManual_=!0,y_(t),r}finishDraft(e,t){const r=e&&e[XM];r&&r.isManual_||GM(9);const{scope_:n}=r;return b_(n,t),$_(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=f_("Patches").applyPatches_;return QM(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},B_=A_.produce;A_.produceWithPatches.bind(A_),A_.setAutoFreeze.bind(A_),A_.setUseStrictShallowCopy.bind(A_),A_.applyPatches.bind(A_),A_.createDraft.bind(A_),A_.finishDraft.bind(A_);var R_=MS,j_=ck,z_=ZC,P_=Qo,L_=AS,N_=eS,H_=kS,W_=fS,Y_=Object.prototype.hasOwnProperty;var V_=function(e){if(null==e)return!0;if(L_(e)&&(P_(e)||"string"==typeof e||"function"==typeof e.splice||N_(e)||W_(e)||z_(e)))return!e.length;var t=j_(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(H_(e))return!R_(e).length;for(var r in e)if(Y_.call(e,r))return!1;return!0},U_=Zo(V_);const K_=(e,t,r)=>{const n=B_(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n],o=q_(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}}));return n},X_=(e,t)=>{const[r,...n]=t;if(U_(e)||U_(r))return;const i=e.find((e=>e.key===r));return i&&n.length?X_(i.subItems,n):i},q_=e=>e.join(","),G_=e=>new Set(e.map((e=>e.join(",")))),Z_=M.li`
    display: ${e=>e.$visible?"flex":"none"};
`,Q_=M.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${jc["spacing-8"]};
    padding: ${jc["spacing-12"]} ${jc["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${zc.none};
    outline: none;

    ${e=>e.$active&&_`
            background: ${Ic["bg-hover"]};
        `}
`,J_=M.div`
    height: 1px;
    width: calc((1lh + ${jc["spacing-8"]}) * ${e=>e.$level});
`,eI=M.div`
    width: 1lh;
    height: 1lh;
    color: ${Ic["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Bc["duration-350"]}
            ${Bc["ease-standard"]};

        ${e=>{if(e.$expanded)return _`
                    transform: rotate(90deg);
                `}}
    }
`,tI=M.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${jc["spacing-8"]};
`,rI=M.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":jc["spacing-16"]};

    display: flex;
    justify-content: center;
`,nI=M(Qe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ic["icon-selected"]};
`,iI=({listItems:n,multiSelect:i=!1,selectedKeyPaths:s,itemsLoadState:l="success",itemTruncationType:c="end",itemMaxLines:d=2,variant:h="default",listboxId:g,width:p,mode:f="default",selectableCategory:b,onSelectItem:v,onSelectAll:y,onRetry:x,enableSearch:w,hideNoResultsDisplay:$,noResultsDescription:C,searchPlaceholder:S="Search",onSearch:k})=>{const D=i||b,[E,T]=a(""),F=E.toLowerCase().trim(),[O,M]=a(!1),_=o(null),I=o(null),A=o([]),B=o(null),R=dh(),[j,z]=a([]),[P,L]=a([]),N=O?P:j,H=m((()=>{let e=0;for(const t of j)t.level>e&&(e=t.level);return e}),[j]),[W,Y]=a(0),[V,U]=a([]),[K,X]=a(0),q=e=>{const t=e.target.value;T(t),""===t?M(!1):t.trim().length>=3&&M(!0),null==k||k()},G=()=>{var e;T(""),M(!1),null===(e=B.current)||void 0===e||e.focus(),null==k||k()},Z=()=>{null==x||x()},Q=()=>{if(0===s.size){const e=[],t=[];j.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==y||y(e,t)}else null==y||y([],[])},J=sh(((e,t)=>((e,t,r,n,i)=>{const o=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var h,g;const p=s?s.level+1:0,f=s?[...s.keyPath,d.key]:[d.key],m=q_(f),b={item:d,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:f,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||(null==s?void 0:s.expanded)||!1,expanded:i,checked:t.has(m),hasSubItems:!!(null===(h=d.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(g=d.subItems)||void 0===g?void 0:g.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,s,i,F,t))),ee=sh((e=>{return s.size?(t=J(e,!1),B_(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>B_(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),o=e[r].keyPath.slice(0,i.length);ED(i,o)&&(n.visible=!0)}return e})))(J(e,!1));var t})),te=sh((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(F))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),re=sh((()=>{z((e=>K_(e,s,i))),O&&L((e=>K_(e,s,i)))})),ne=(e,t,r)=>{const n=((e,t,r)=>B_(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!ED(n,a))break;t.visible=r&&o.expanded&&o.visible}})))(N,e,t);Y(e),X(r),O?L(n):z(n)};lh("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(N,(e=>e.visible),W+1);r&&(X((e=>e+1)),Y(r.index),null===(t=A.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(N,(e=>e.visible),W-1);t?(X((e=>e-1)),Y(t.index),null===(r=A.current[t.index])||void 0===r||r.focus()):0===K&&B.current&&(B.current.focus(),X(-1),Y(-1));break}case"ArrowRight":e.preventDefault(),ne(W,!0,K);break;case"ArrowLeft":e.preventDefault(),ne(W,!1,K);break;case"Space":if(document.activeElement===A.current[W]){e.preventDefault();const t=N[W];if(t.hasSubItems&&!D)return;null==v||v(t)}}})),u((()=>{let e=[];"default"===f?e=ee(n):"expand"===f?e=J(n,!0):"collapse"===f&&(e=J(n,!1)),z(e)}),[J,ee,n,f]),u((()=>{U(N.filter((e=>e.visible)))}),[O,N]),u((()=>{re()}),[i,s,re]),u((()=>{if(O&&E.trim().length>=3){const e=te(n),t=(e=>B_(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(J(e,!1));L(t)}}),[te,J,n,O,E]),u((()=>{R||(B.current?(Y(-1),X(-1),setTimeout((()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.focus()}),200)):A.current[W]?setTimeout((()=>{var e;return null===(e=A.current[W])||void 0===e?void 0:e.focus()}),200):(Y(0),X(0),setTimeout((()=>{var e;return null===(e=A.current[0])||void 0===e?void 0:e.focus()}),200)))}),[W,K,R]);const ie=()=>{if(w&&"success"===l)return e(NM,{ref:B,onChange:q,value:E,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:G,variant:h})},oe=()=>{if(i&&!O&&j.length>0&&"success"===l)return e(TM,{children:e(MM,{onClick:Q,type:"button",$variant:h,children:0===s.size?"Select all":"Clear all"})})},ae=()=>{if(!$&&O&&0===P.length&&"success"===l)return t(r,{children:[t(_M,{"data-testid":"list-no-results",children:[e(IM,{"data-testid":"no-result-icon"}),"No results found."]}),C&&e(BM,{"data-testid":"no-result-desc",children:C})]})},se=()=>{if(x&&"loading"===l)return t(_M,{"data-testid":"list-loading",children:[e(Wd,{}),"Loading..."]})},le=()=>{if(x&&"fail"===l)return t(_M,{"data-testid":"list-fail",children:[e(IM,{"data-testid":"load-error-icon"}),"Failed to load. ",e(OM,{onClick:Z,type:"button",$variant:h,children:"Try again."})]})},ce=t=>{if(i)switch(t.checked){case"mixed":return e(nI,{"aria-hidden":!0});case!0:return e(kM,{"aria-hidden":!0});default:return e(DM,{"aria-hidden":!0})}if(!t.hasSubItems)return e(rI,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(CM,{"aria-hidden":!0})})},de=(r,n)=>{const{level:o,visible:a,expanded:s,keyPath:l,checked:u,hasSubItems:h,indexInParent:g,parentSetSize:p}=r,f=r.index,m=K===n,b=h&&!D;return t(Z_,{$visible:a,children:[H>0&&e(J_,{$level:o}),H>0&&!h&&i&&e(tI,{}),t(Q_,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":o+1,"aria-posinset":g+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?ne(f,!s,n):((e,t)=>{X(t),Y(e),null==v||v(N[e])})(f,n)},onMouseEnter:()=>((e,t)=>{Y(t.index),X(e)})(n,r),ref:e=>A.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[h&&e(eI,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),ne(f,!s,n)},$expanded:s,children:e(Ze,{})}),ce(r),e(RE,{bold:h,searchTerm:O?F:void 0,label:r.item.label,selected:!!u,truncationType:c,maxLines:d})]})]},`[${l.join("---")}]`)},ue=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":i,id:g,ref:I,role:"tree",children:e(NO,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=_.current)&&void 0!==t?t:void 0,data:V,itemContent:(e,t)=>de(t,e)},r?{initialItemCount:V.length}:{}),r?V.length:void 0)})};return e(yM,{"data-testid":"dropdown-container",ref:_,$width:p,$variant:h,children:t(xM,{"data-testid":"nested-dropdown-list",children:[ie(),oe(),ae(),se(),le(),ue()]})})},oI=({selectedOptions:t,placeholder:r="Select",options:n,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:g,searchPlaceholder:p,valueExtractor:f,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:k,renderCustomCallToAction:D,onBlur:E,variant:T="default",readOnly:F,alignment:O,dropdownZIndex:M,maxSelectable:_,dropdownRootNode:I})=>{const[A,B]=a(t||[]),[R,j]=a(!1),[z,P]=a(!1),[L]=a((()=>oh.generate())),N=o(null),H=o(null);u((()=>{B(t||[])}),[t]);const W=()=>{A&&A.length>0||_?(B([]),q([])):(B(n),q(n))},Y=(e,t)=>{const r=[...A],n=SD(A,(e=>(f?f(e):e)===t));n>-1?r.splice(n,1):r.push(e),B(r),q(r)},V=()=>{R&&(j(!1),X(!1))},U=()=>{z||R||P(!0)},K=e=>{z&&!R&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==E||E())},X=e=>{!e&&y&&y(),e&&v&&v()},q=e=>{b&&b(e)};return e(vM,{children:e(_f,{enabled:!F&&!i,isOpen:R,renderElement:()=>e(Vp,{className:l,"data-testid":c,id:d,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:z,$disabled:i,$readOnly:F,$error:s,children:e(VM,{ref:H,disabled:i,expanded:R,listboxId:L,popupRole:"listbox",readOnly:F,variant:T,children:e(Sf,{$disabled:i,children:A&&0!==A.length?e(kf,{$variant:T,children:n&&A.length===n.length?"All selected":`${A.length} selected`}):e(Df,{truncateType:$,$variant:T,children:r})})})}),renderDropdown:({elementWidth:t})=>e(HM,{listboxId:L,listItems:n,onSelectItem:Y,onDismiss:V,valueExtractor:f,listExtractor:m,enableSearch:h,searchFunction:g,searchPlaceholder:p,multiSelect:!0,maxSelectable:_,selectedItems:A,onSelectAll:W,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:C,hideNoResultsDisplay:S,noResultsDescription:k,renderCustomCallToAction:D,variant:T,width:t}),onOpen:()=>{j(!0),X(!0),P(!0)},onClose:e=>{j(!1),X(!1),"click"!==e&&(P(!1),null==E||E())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),j(!1),X(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:M,rootNode:I})})},aI=(e,t)=>{const[r,...n]=t;if(U_(e)||!r)return;const i=e.find((e=>e.key===r));return i?n.length?aI(i.subItems,n):i:void 0},sI=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...sI(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},lI=({placeholder:t="Select",options:r,disabled:n,error:i,className:s,"data-testid":l,id:c,selectedKeyPaths:d,mode:h,valueToStringFunction:g,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,noResultsDescription:b,readOnly:v,onSearch:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,onBlur:S,optionsLoadState:k="success",optionTruncationType:D="end",variant:E="default",alignment:T,dropdownZIndex:F,dropdownRootNode:O})=>{const M=r,[_,I]=a(d?G_(d):new Set),[A,B]=a([]),[R,j]=a(!1),[z,P]=a(!1),[L]=a((()=>oh.generate())),N=o(null),H=o(null),W=o(null);u((()=>{const e=d||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const i=t[n],o=aI(e,i);o&&r.push({value:o.value,label:o.label,keyPath:i})}return r})(M,e);I(G_(e)),B(t)}),[d,M]);const Y=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));I(G_(e)),B(r),Z(e,r)},V=e=>{const t=Q(e),r=t.map((e=>e.keyPath));B(t),I(G_(r)),Z(r,t)},U=()=>{z||R||P(!0)},K=e=>{z&&!R&&N.current&&!N.current.contains(e.relatedTarget)&&(P(!1),null==S||S())},X=()=>{if(A.length>1)return`${A.length} selected`;const{label:e,value:t}=A[0];return g?g(t):e},q=e=>{if("middle"===D){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),ah.truncateOneLine(e,t,120,6)}return e},G=e=>{!e&&$&&$(),e&&w&&w()},Z=(e,t)=>{if(x){const r=t.map((e=>e.value));x(e,r)}},Q=e=>{if(!0===e.checked)return A.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!ED(e.keyPath,r)}));{const t=[...A],r=e.hasSubItems?((e,t)=>{const r=aI(e,t);return r&&r.subItems?sI(r.subItems,t):[]})(M,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{A.find((t=>ED(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(_f,{enabled:!v&&!n,isOpen:R,renderElement:()=>e(Vp,{className:s,"data-testid":l,id:c,ref:N,tabIndex:-1,onFocus:U,onBlur:K,$focused:z,$disabled:n,$readOnly:v,$error:i,children:e(VM,{ref:H,disabled:n,expanded:R,listboxId:L,popupRole:"tree",readOnly:v,variant:E,children:e(Sf,{ref:W,$disabled:n,children:U_(A)?e(Df,{truncateType:D,children:t}):e(kf,{truncateType:D,children:q(X())})})})}),renderDropdown:({elementWidth:t})=>e(iI,{listboxId:L,listItems:M,multiSelect:!0,selectedKeyPaths:_,itemsLoadState:k,itemTruncationType:D,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:m,noResultsDescription:b,onSelectItem:V,onSelectAll:Y,onRetry:C,onSearch:y,variant:E,mode:h,width:t}),onOpen:()=>{j(!0),G(!0),P(!0)},onClose:e=>{j(!1),G(!1),"click"!==e&&(P(!1),null==S||S())},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),j(!1),G(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:F,rootNode:O})},cI=({placeholder:t="Select",options:r,disabled:n,error:i,className:s,"data-testid":l,id:c,selectedKeyPath:d,mode:h,valueToStringFunction:g,enableSearch:p,searchPlaceholder:f,selectableCategory:m,hideNoResultsDisplay:b,noResultsDescription:v,readOnly:y,onBlur:x,onSearch:w,onSelectOption:$,onShowOptions:C,onHideOptions:S,onRetry:k,optionsLoadState:D="success",optionTruncationType:E="end",variant:T="default",alignment:F,dropdownZIndex:O,dropdownRootNode:M})=>{const _=r,[I,A]=a(d?G_([d]):new Set),[B,R]=a(),[j,z]=a(!1),[P,L]=a(!1),[N]=a((()=>oh.generate())),H=o(null),W=o(null),Y=o(null);u((()=>{A(d?G_([d]):new Set);const e=X_(_,d||[]);R(null!=e?e:void 0)}),[d,_]);const V=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;A(G_([r])),R({label:n,value:i}),z(!1),G(!1),null===(t=W.current)||void 0===t||t.focus(),null==$||$(r,i)},U=()=>{P||j||L(!0)},K=e=>{P&&!j&&H.current&&!H.current.contains(e.relatedTarget)&&(L(!1),null==x||x())},X=()=>{if(!B)return"";const{label:e,value:t}=B;return g?g(t):e},q=e=>{if("middle"===E){let t=0;return Y&&Y.current&&(t=Y.current.getBoundingClientRect().width),ah.truncateOneLine(e,t,120,6)}return e},G=e=>{!e&&S&&S(),e&&C&&C()};return e(_f,{enabled:!y&&!n,isOpen:j,renderElement:()=>e(Vp,{className:s,"data-testid":l,id:c,ref:H,tabIndex:-1,onFocus:U,onBlur:K,$focused:P,$disabled:n,$readOnly:y,$error:i,children:e(VM,{ref:W,disabled:n,expanded:j,listboxId:N,popupRole:"tree",readOnly:y,variant:T,children:e(Sf,{ref:Y,$disabled:n,children:U_(B)?e(Df,{truncateType:E,children:t}):e(kf,{truncateType:E,children:q(X())})})})}),renderDropdown:({elementWidth:t})=>e(iI,{listboxId:N,listItems:_,selectedKeyPaths:I,selectableCategory:m,itemsLoadState:D,itemTruncationType:E,enableSearch:p,searchPlaceholder:f,hideNoResultsDisplay:b,noResultsDescription:v,onSelectItem:V,onRetry:k,onSearch:w,variant:T,mode:h,width:t}),onOpen:()=>{z(!0),G(!0),L(!0)},onClose:e=>{z(!1),G(!1),"click"!==e&&(L(!1),null==x||x())},onDismiss:()=>{var e;null===(e=W.current)||void 0===e||e.focus(),z(!1),G(!1)},clickToToggle:!0,offset:8,alignment:F,fitAvailableHeight:!0,customZIndex:O,rootNode:M})};var dI=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r};var uI=function(e){return function(t,r,n){for(var i=-1,o=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}},hI=uI(),gI=zS;var pI=AS;var fI=function(e,t){return function(r,n){if(null==r)return r;if(!pI(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Object(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}((function(e,t){return e&&hI(e,t,gI)}));var mI=dI,bI=fI,vI=uD,yI=function(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r},xI=Qo;var wI=function(e,t,r){var n=xI(e)?mI:yI,i=arguments.length<3;return n(e,vI(t),r,i,bI)},$I=Zo(wI);const CI=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],SI=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var kI;!function(e){e.getCountries=()=>[].concat(...CI.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:SI("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,i=n.split(" ");i.shift();const o=i.join(" ");return $I(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(kI||(kI={}));const DI=t=>{var{onChange:r,value:n,allowClear:i,onClear:s,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:g,enableSearch:p,onHideOptions:f,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=Vo(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=a(kI.getCountries()),[w,$]=a(void 0),[C,S]=a(""),k=o(null),D=uh({ref:k,formatter:e=>kI.formatNumber(e.replace(/[^0-9]/g,""),w)});u((()=>{const e=x.filter((e=>e.countryCode===EI(null==n?void 0:n.countryCode)))[0];$(e),S(kI.formatNumber(null==n?void 0:n.number,e))}),[n]);const E=e=>{F(C,e),r&&T(C,e)},T=(e,t)=>{const n=kI.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&TI(t.countryCode)})},F=(e,t)=>{S(kI.formatNumber(e,t)),$(t)};return e(hE,Object.assign({ref:k,value:C,onChange:()=>{const e=D();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),F(t,w),r&&T(t,w)},allowClear:i&&!!C,onClear:()=>{s?s():S("")},onBlur:l,error:c,placeholder:b,addon:d?{type:"label",attributes:{value:TI(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:h,options:x,selectedOption:w,enableSearch:p,searchPlaceholder:g,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:TI(e.countryCode)}),onSelectOption:E,onHideOptions:f,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},EI=e=>e?e.replace("+",""):"",TI=e=>e?e.includes("+")?e:`+${e}`:"",FI=({className:n,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:h=!1,disabled:g=!1,error:f,valueExtractor:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y})=>{const[x,w]=a((()=>s?W(s):"")),[$,C]=a((()=>s?W(s):"")),[S,k]=a([]),[D,E]=a(!0),[T,F]=a(!1),[O,M]=a(!!s),[_,I]=a(s),A=o(c),B=e=>Uo(void 0,void 0,void 0,(function*(){F(!1),E(!0);try{const t=yield A.current(e);C(e),k(t),E(!1)}catch(e){F(!0)}})),R=p(Jg((e=>B(e)),500,{leading:!1,trailing:!0}),[]);u((()=>{A.current=c}),[c]),u((()=>{x&&x.length>=l&&x!==$?R(x):R.cancel(),""===x&&_&&(y&&y(void 0,void 0),P(),I(void 0)),s&&x!==W(s)&&M(!1)}),[x,s]),u((()=>{w(s?W(s):""),P(s),I(s)}),[s]);const j=e=>{w(e.target.value)},z=(e,t)=>{y&&y(e,t)},P=e=>{C(e?W(e):""),M(!!e),k([]),E(!0)},L=()=>{w(""),y&&y(void 0,void 0),P()},N=()=>{O||_?(P(_),w(W(_)),y&&y(_,Y(_)),I(_)):L()},H=()=>!!x&&x.length>=l&&!O,W=e=>e?v?v(e):e.toString():"",Y=e=>{if(e)return m?m(e):e},V=()=>e(Z$,{type:"text",value:x,onChange:j,placeholder:d,readOnly:h,disabled:g,allowClear:!0,onClear:L,styleType:"no-border",onBlur:x.length<l?N:void 0});return t(Ef,{className:n,show:H(),error:f&&!H(),disabled:g,readOnly:h,testId:i,onBlur:N,children:[e(h?r:xf,{children:V()}),!h&&H()&&e(Cf,{}),e(ZD,{listItems:S,onSelectItem:z,valueExtractor:m,listExtractor:b,itemsLoadState:T?"fail":D?"loading":"success",visible:H(),disableItemFocus:!0,onRetry:()=>B(x),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},OI=M.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,MI=M(K$)`
    position: absolute;
    right: 0;
    padding-left: ${jc["spacing-8"]};
    margin-right: 0;
`,_I=M(yf)`
    // space for clear icon
    padding-right: calc(1.25rem + ${jc["spacing-16"]});
`,II=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:s,disabled:l,className:c,readOnly:d,error:h,"data-testid":g,id:p,enableSearch:f=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:C,onShowOptions:S,onHideOptions:k,onRetry:D,optionsLoadState:E={from:"success",to:"success"},optionTruncationType:T="middle",renderCustomSelectedOption:F,renderListItem:O,renderCustomCallToAction:M}=r,_=Vo(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[I,A]=a(),[B,R]=a(),j=o(null),z={from:o(null),to:o(null)},[P,L]=a("none");u((()=>{A(null==n?void 0:n.from),R(null==n?void 0:n.to)}),[n]);const N=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||L("from"===e?"from":"to"===e&&I?"to":"from")},H=e=>{var t;const r="from"===e?I:B;if(!r)return"";if(w)return w(r);if(v){const e=v(r);return y?y(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},W=(e,t)=>{if("middle"===T){let r=0;return z[e]&&z[e].current&&(r=z[e].current.getBoundingClientRect().width),ah.truncateOneLine(t,r,120,8)}return t},Y=e=>{!e&&k&&k(),e&&S&&S()},V=t=>{const r="from"===t?I:B;return r?F?F(r):e(kf,{truncateType:T,children:W(t,H(t))}):e(Df,{truncateType:T,children:W(t,i[t]||"")})},U=t=>e(Sf,{onClick:N(t),ref:z[t],$disabled:l,children:V(t)});return t(Ef,{show:"none"!==P,error:h&&!("none"!==P),disabled:l,readOnly:d,testId:g,onBlur:()=>{Y(!1),L("none"),I&&B||(R(void 0),A(void 0))},className:c,children:[t(OI,{children:[e(_I,Object.assign({type:"button","data-testid":p||"selector",disabled:l,ref:j,onClick:N()},_,{children:t(tm,{currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})(),children:[U("from"),U("to")]})})),"none"===P&&I&&B&&!d&&!l&&e(MI,{onClick:e=>{e.stopPropagation(),A(void 0),R(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e(X$,{"aria-hidden":!0})})]}),"none"!==P&&e(Cf,{}),(()=>{if("none"===P)return null;const t=s[P];if(t&&t.length>0){const r="from"===P?I:B;return e(ZD,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?A(e):R(e),Y(!1),j&&(null===(n=j.current)||void 0===n||n.focus()),$&&$({[r]:e},t),"from"===r?(R(void 0),L("to"),Y(!0)):L("none")})(e,t,P),onDismiss:()=>(()=>{var e;L("none"),Y(!1),j&&(null===(e=j.current)||void 0===e||e.focus()),I&&B||(R(void 0),A(void 0))})(),valueExtractor:v,listExtractor:x,listStyleWidth:C,visible:!0,enableSearch:f,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:r?[r]:[],onRetry:D,itemsLoadState:E[P],itemTruncationType:T,renderListItem:O,renderCustomCallToAction:M})}return null})()]})},AI=({selectedOption:t,placeholder:r="Select",options:n,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:g,searchPlaceholder:p,valueExtractor:f,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",renderCustomSelectedOption:k,renderListItem:D,hideNoResultsDisplay:E,noResultsDescription:T,renderCustomCallToAction:F,onBlur:O,variant:M="default",readOnly:_,alignment:I,dropdownZIndex:A,dropdownRootNode:B})=>{const[R,j]=a(t),[z,P]=a(!1),[L,N]=a(!1),[H]=a((()=>oh.generate())),W=o(null),Y=o(null),V=o(null);u((()=>{j(t)}),[t]);const U=(e,t)=>{var r;null===(r=Y.current)||void 0===r||r.focus(),j(e),P(!1),Q(!1),null==y||y(e,t)},K=()=>{z&&(P(!1),Q(!1))},X=()=>{L||z||N(!0)},q=e=>{L&&!z&&W.current&&!W.current.contains(e.relatedTarget)&&(N(!1),null==O||O())},G=()=>{var e;if(!R)return"";if(v)return v(R);if(f){const t=f(R);return m?m(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return R.toString()},Z=e=>{if("middle"===S){let t=0;return V&&V.current&&(t=V.current.getBoundingClientRect().width),ah.truncateOneLine(e,t,120,8)}return e},Q=e=>{e?null==x||x():null==w||w()};return e(vM,{children:e(_f,{enabled:!_&&!i,isOpen:z,renderElement:()=>e(Vp,{className:l,"data-testid":c,id:d,ref:W,tabIndex:-1,onFocus:X,onBlur:q,$focused:L,$disabled:i,$readOnly:_,$error:s,children:e(VM,{ref:Y,disabled:i,expanded:z,listboxId:H,popupRole:"listbox",readOnly:_,variant:M,children:e(Sf,{ref:V,$disabled:i,children:R?k?k(R):e(kf,{truncateType:S,$variant:M,children:Z(G())}):e(Df,{truncateType:S,$variant:M,children:r})})})}),renderDropdown:({elementWidth:t})=>e(HM,{listboxId:H,listItems:n,onSelectItem:U,onDismiss:K,valueExtractor:f,listExtractor:b,enableSearch:h,searchPlaceholder:p,searchFunction:g,selectedItems:R?[R]:[],onRetry:$,itemsLoadState:C,itemTruncationType:S,renderListItem:D,hideNoResultsDisplay:E,noResultsDescription:T,renderCustomCallToAction:F,variant:M,width:t}),onOpen:()=>{P(!0),Q(!0),N(!0)},onClose:e=>{P(!1),Q(!1),"click"!==e&&(N(!1),null==O||O())},onDismiss:()=>{var e;null===(e=Y.current)||void 0===e||e.focus(),P(!1),Q(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:A,rootNode:B})})},BI=M.div`
    overflow: hidden;
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};
    background: ${Ic.bg};
    padding: ${jc["spacing-16"]};
    min-width: 23rem;

    ${Lc.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Pc["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Lc.MaxWidth.xs} {
        width: calc(100vw - ${Pc["xs-margin"]} * 2);
    }

    ${Lc.MaxWidth.xxs} {
        width: calc(100vw - ${Pc["xxs-margin"]} * 2);
    }
`,RI=M.div`
    display: flex;
    align-items: baseline;
`,jI=M.div`
    margin: 0 0.5rem;
    color: ${Ic.text};
`,zI=M.div`
    ${e=>"small"===e.$variant?Ac["body-md-regular"]:Ac["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return _`
                    ${sd(1)}
                `}}
    overflow: hidden;
`,PI=M(zI)`
    color: ${Ic["text-subtler"]};
`,LI=r=>{var{alignment:n="left",className:i,disabled:s,dropdownZIndex:l,error:c,histogramSlider:d,id:h,onBlur:g,onChange:p,onChangeEnd:f,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$,dropdownRootNode:C}=r,S=Vo(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:k,bins:D=[],renderEmptyView:E,ariaLabels:T}=d,F=D.map((e=>e.minValue)),O=Math.min(...F),[M,_]=a(U()),[I,A]=a(!1),[B,R]=a(!1),[j]=a((()=>oh.generate())),z=o(null),P=o(null),L=o(null),N=S["data-testid"]||"select-histogram";u((()=>{$!==M&&_(U())}),[$]);const H=e=>{_(e),null==p||p(e)},W=e=>{_(e),null==f||f(e)},Y=()=>{B||I||R(!0)},V=e=>{B&&!I&&z.current&&!z.current.contains(e.relatedTarget)&&(R(!1),null==g||g())};function U(){return null!=$?$:[O,O+k]}const K=e=>w?w(e):t(ud.BodyBL,{children:[v,e,y]});return e(vM,{children:e(_f,{enabled:!x&&!s,isOpen:I,renderElement:()=>e(Vp,{className:i,"data-testid":N,id:h,ref:z,tabIndex:-1,onFocus:Y,onBlur:V,$focused:B,$disabled:s,$readOnly:x,$error:c,children:e(VM,{ref:P,disabled:s,expanded:I,listboxId:j,popupRole:"dialog",readOnly:x,variant:"default",children:e(Sf,{ref:L,$disabled:s,children:F&&0!==F.length?t(RI,{children:[K(M[0]),e(jI,{children:"-"}),K(M[1])]}):e(PI,{truncateType:m,$variant:"default",children:b})})})}),renderDropdown:({elementWidth:t})=>e(BI,{style:{width:t},children:e(V$,{interval:k,value:M,bins:D,onChange:H,onChangeEnd:W,showRangeLabels:!1,renderEmptyView:E,ariaLabels:T})}),onOpen:()=>{A(!0)},onClose:()=>{A(!1)},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),A(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:l,rootNode:C})})},NI=t=>{var{value:r,ariaLabel:n,onChange:i,onChangeEnd:o}=t,s=Vo(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=a(d());u((()=>{r!==l[0]&&c(d())}),[r]);function d(){return null!=r?[r]:[0]}return e(P$,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==i||i(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:n?[n]:void 0}))},HI=M.p`
    text-align: right;
    ${Ac["body-sm-semibold"]}
    color: ${Ic["text-subtler"]};
`,WI=({value:t,maxLength:n,renderCustomCounter:o})=>{const[s,l]=a("");u((()=>{l(c(`${t||""}`))}),[t,n]);const c=e=>{if(o)return o(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:i.isValidElement(s)?s:e(HI,{"data-testid":"counter-label",children:s})})},YI=M.div`
    display: flex;
    flex-direction: column;
`,VI=M.textarea`
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};
    background: ${Ic.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${jc["spacing-12"]} ${jc["spacing-16"]};
    width: 100%;

    ${Ac["body-baseline-regular"]}
    color: ${Ic.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${Rc["width-020"]} ${Rc.solid}
            ${Ic["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ic["text-subtler"]};
    }

    ${e=>e.readOnly?_`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${Ic["border-focus"]};
                }
            `:e.disabled?_`
                background: ${Ic["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${Ic["border-disabled"]};
                }
            `:e.$error?_`
                border-color: ${Ic["border-error"]};

                :focus,
                :active {
                    outline-color: ${Ic["border-error-focus"]};
                }
            `:void 0}
`,UI=i.forwardRef(((t,r)=>{var{value:n,disabled:i,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:h}=t,g=Vo(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[p,f]=a(n);u((()=>{f(n)}),[n]);return e(VI,Object.assign({ref:r,disabled:i,value:l?l+(null!=p?p:""):p,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=c?c(r):r;if(f(n),e.target.value=l+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=c?c(null!=t?t:""):t;f(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:o,rows:s,maxLength:l&&h?l.length+h:h},g))})),KI=i.forwardRef(((r,n)=>{var{value:i,disabled:o,rows:s=5,onChange:l,transformValue:c,prefix:d,maxLength:h,renderCustomCounter:g}=r,p=Vo(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[f,m]=a(i);u((()=>{m(i)}),[i]);return t(YI,{children:[e(UI,Object.assign({ref:n,disabled:o,value:f,rows:s||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:d,transformValue:c,maxLength:h},p)),h&&e(WI,{value:f,maxLength:h,renderCustomCounter:g})]})})),XI=M.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${jc["spacing-4"]};
`,qI=M.div`
    display: flex;
    flex: 1;
    margin-right: ${jc["spacing-12"]};
`,GI=M(g$)`
    margin-top: 0;
`,ZI=i.forwardRef(((n,i)=>{const{label:o,value:s,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":h,onChange:g,layoutType:p,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:k,prefix:D=""}=n,E=Vo(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[T,F]=a(s);u((()=>{F(s)}),[s]);return t(w$,{id:c,label:o,disabled:E.disabled,layoutType:p,mobileCols:f,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(UI,Object.assign({id:`${c}-base`,"data-testid":h||c,value:T,error:!!l,onChange:e=>{const t=e.target.value;F(t),g&&g(e)},ref:i,prefix:D,transformValue:k},E)),l||E.maxLength?t(XI,{children:[l&&e(qI,{children:e(GI,{"data-testid":d||(c?`${c}-error-message`:"error-message"),children:l})}),E.maxLength&&e(WI,{value:T,maxLength:E.maxLength,renderCustomCounter:E.renderCustomCounter})]}):e(r,{})]})})),QI=M.div`
    position: relative;
`,JI=M(Up)`
    height: 3rem;
    gap: ${jc["spacing-8"]};
`,eA=M(Kp)`
    display: block;
    width: 100%;
    flex: 1;
`,tA=M.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?_`
                    color: ${Ic["icon-selected-disabled"]};
                `:_`
                    color: ${Ic["icon-disabled-subtle"]};
                `:e.$active?_`
                color: ${Ic["icon-selected"]};
            `:_`
            color: ${Ic["icon-subtle"]};
        `};
`,rA=_`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${Ac.Spec["weight-regular"]};
        ${e=>e.$size&&Ac[`${e.$size}-regular`]}
        color: ${Ic.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,nA=M.ol`
    ${rA}

    margin-left: 3rem;

    ${Lc.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return _`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return _`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,iA=M.ul`
    ${rA}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,oA=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,a=Vo(t,["size","bulletType","bottomMargin","children"]);return e(iA,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},a,{children:o}))};oA.displayName="TextList.Ul";const aA=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=t,s=Vo(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(nA,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};aA.displayName="TextList.Ol";const sA={Ul:oA,Ol:aA},lA=M.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${zc.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Ic.bg};

    ${e=>{if(!e.$indicator)return _`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return _`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?_`
                            border-color: ${Ic["border-error"]};
                        `:_`
                            border-color: ${Ic["border-error"]};

                            &:has(${gA}:hover) {
                                background: ${Ic["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?_`
                            border: none;
                            background: ${Ic["bg-selected-disabled"]};
                        `:_`
                            border: none;
                        `:e.$selected?_`
                        border: none;
                        background: ${Ic["bg-selected"]};

                        &:has(${gA}:hover) {
                            background: ${Ic["bg-selected-hover"]};

                            & ${dA} {
                                color: ${Ic["text-selected-hover"]};
                            }

                            & ${$A} {
                                color: ${Ic["icon-selected-hover"]};
                            }
                        }
                    `:_`
                    border: none;

                    &:has(${gA}:hover) {
                        background: ${Ic["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?_`
                            border-color: ${Ic["border-error"]};
                        `:_`
                            border-color: ${Ic["border-error"]};

                            &:has(${gA}:hover) {
                                background: ${Ic["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?_`
                            border-color: ${Ic["border-selected-disabled"]};
                            background: ${Ic["bg-selected-disabled"]};
                        `:_`
                            border-color: ${Ic["border-disabled"]};
                            background: ${Ic["bg-disabled"]};
                        `:e.$selected?_`
                        border-color: ${Ic["border-selected"]};
                        background: ${Ic["bg-selected"]};

                        &:has(${gA}:hover) {
                            background: ${Ic["bg-selected-hover"]};

                            & ${dA} {
                                color: ${Ic["text-selected-hover"]};
                            }

                            & ${$A} {
                                color: ${Ic["icon-selected-hover"]};
                            }
                        }
                    `:_`
                    border-color: ${Ic.border};

                    &:has(${gA}:hover) {
                        background: ${Ic["bg-hover-subtle"]};
                    }
                `}
`,cA=M.input`
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
`,dA=M.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?_`
                    color: ${Ic["text-selected-disabled"]};
                `:_`
                    color: ${Ic["text-disabled"]};
                `:e.$selected?_`
                color: ${Ic["text-selected"]};
            `:_`
            color: ${Ic.text};
        `}
`,uA=M.label`
    ${Ac["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Lc.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Lc.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,hA=M.div`
    ${Ac["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Ac["body-md-semibold"]}
    }
`,gA=M.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,pA=M.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,fA=M.button`
    color: ${e=>e.$disabled?Ic["text-disabled"]:Ic["text-error"]};
    white-space: nowrap;
    ${Ac["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,mA=M.button`
    color: ${e=>e.disabled?Ic["text-disabled"]:Ic["text-primary"]};
    ${Ac["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Ic.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,bA=M.div`
    width: 100%;
    color: ${e=>e.$disabled?Ic["text-disabled"]:Ic["text-error"]};
    border: none;
    background: ${Ic.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,vA=M(su)`
    width: 100%;
    user-select: none;
`,yA=M.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Ic.bg};
    ${Jd({textSize:"body-md"})}

    ${e=>e.$disabled?_`
                color: ${Ic["text-disabled"]};
            `:e.$selected?_`
                color: ${Ic["text-selected"]};
            `:_`
                color: ${Ic.text};
            `}
`,xA=M(ud.BodyMD)`
    color: ${e=>e.$disabled?Ic["text-disabled"]:Ic["text-error"]};
`,wA=M(sA.Ul)`
    color: ${e=>e.$disabled?Ic["text-disabled"]:Ic["text-error"]};
`,$A=M((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=e(r?qe:Ke,{});break;case"radio":o=e(r?et:Je,{});break;case"tick":o=e(Ge,{});break;case"cross":o=e(Pe,{});break;default:o=null}return e(tA,{className:i,$active:r,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?_`
                    color: ${Ic["icon-selected-disabled"]};
                `:_`
                    color: ${Ic["icon-disabled-subtle"]};
                `:e.$selected?_`
                color: ${Ic["icon-selected"]};
            `:_`
            color: ${Ic["icon-subtle"]};
        `};
`,CA=({type:n="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:d,subLabel:h,disabled:g,error:p,name:f,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:C,useContentWidth:S})=>{const{collapsible:k=!0,errors:D,children:E,initialExpanded:T}=y||{},[F,O]=a(s),[M,_]=a(!!T),I=m((()=>{const e=Array.isArray(D)&&(null==D?void 0:D.length)>0,t=!Array.isArray(D)&&!!D;return e||t}),[D]),[A]=a(oh.generate()),B=b?`${b}`:`tg-${A}`,R=o(null);u((()=>{O(s)}),[s]),u((()=>{F&&_(null==T||T)}),[F]);const z=()=>{g||_(!M)},P=()=>{g||!w||w()},L=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e($A,{type:t,active:F,disabled:g,$selected:F,$disabled:g})},N=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(hA,{"data-id":"toggle-sublabel",children:t})},H=n=>t(r,{children:[e(xA,{weight:"semibold",$disabled:g,children:"Error"}),e(wA,{$disabled:g,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${B}-error-list-item-${r}`,children:e(xA,{weight:"semibold",$disabled:g,children:t})},r)))})]});return t(lA,{$selected:F,$disabled:g,className:v,$styleType:l,$error:p,$indicator:i,$useContentWidth:S,id:b,"data-testid":$,children:[t(gA,{id:`${B}-header-container`,$disabled:g,$error:p,$selected:F,$indicator:i,$styleType:l,children:[t(pA,{$addPadding:x,children:[e(cA,{ref:R,name:f,id:`${B}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:e=>{if(!g){if(C)return void C(e);switch(n){case"checkbox":O((e=>!e));break;case"radio":case"yes":case"no":F||O(!0)}}},checked:F}),i&&L(),t(dA,{$selected:F,$disabled:g,children:[e(uA,{htmlFor:`${B}-input`,"data-testid":`${B}-toggle-label`,$maxLines:d,children:c}),h&&N()]})]}),x&&e(fA,{type:"button",$disabled:g,onClick:P,id:`${B}-remove-button`,children:"Remove"})]}),E&&t("div",{children:[(!k||M)&&e(yA,{"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:g,children:E}),k&&!M&&I&&e(bA,{$disabled:g,onClick:z,id:`${B}-error-alert`,children:e(vA,{type:g?"description":"error",className:v,showIcon:!0,children:Array.isArray(D)?H(D):D})}),k&&t(mA,{$paddingTopRequired:!M&&!I,disabled:g,onClick:z,"data-testid":M?"collapse-button":"expand-button",children:[M?"Show less":"Show more",e(M?j:ve,{"aria-hidden":!0})]})]})]})},SA=M(Ho.div)`
    position: absolute;
    top: calc(3rem + ${jc["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${Lc.MaxWidth.xxs} {
        max-width: 100%;
    }
`,kA=M.div`
    position: relative;
    width: 100%;
    padding: ${jc["spacing-8"]} ${jc["spacing-20"]}
        ${jc["spacing-24"]} ${jc["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Ic.bg};
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};
`,DA=M.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Lc.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,EA=M.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${jc["spacing-16"]};
    gap: ${jc["spacing-8"]} ${jc["spacing-16"]};

    ${Lc.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${jc["spacing-32"]};
    }
`,TA=M.div`
    display: flex;
    align-items: center;
    margin-right: ${jc["spacing-32"]};

    ${Lc.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,FA=M.div`
    display: flex;
    gap: ${jc["spacing-8"]};

    ${Lc.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Lc.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,OA=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Lc.MaxWidth.xxs} {
        width: 6rem;
    }
`,MA=M(ad)`
    width: 5rem;
    padding: ${jc["spacing-16"]} 0;
    color: ${Ic.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Ic["icon-hover"]};
    }
`,_A=M(ud.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,IA=M(Vp)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Lc.MaxWidth.xxs} {
        width: 100%;
    }
`,AA=M(Kp)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,BA=M(CA)`
    min-width: 5rem;
    flex: 1;
`,RA=M(Kd.Small)`
    width: 7rem;

    ${Lc.MaxWidth.sm} {
        flex: 1;
    }

    ${Lc.MaxWidth.xxs} {
        width: 100%;
    }
`;var jA,zA,PA;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(jA||(jA={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(zA||(zA={})),function(e){e.AM="am",e.PM="pm"}(PA||(PA={}));const LA=({id:r,value:n,show:i,format:s,onChange:l,onCancel:c})=>{var d;const h=np.getTimeValues(s,n),[g,f]=a(h.hour),[m,b]=a(h.minute),[v,y]=a(h.period),x=o(null),w=o(null),$=lr();u((()=>{if(i&&x.current&&x.current.focus(),i){const{hour:e,minute:t,period:r}=np.getTimeValues(s,n);f(e),b(t),y(r)}}),[i,n,s]),u((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=p((e=>{switch(e.currentTarget.name){case jA.MINUTE_UP:b(np.updateMinutes(m,"add"));break;case jA.MINUTE_DOWN:b(np.updateMinutes(m,"minus"));break;case jA.HOUR_UP:f(np.updateHours(g,"add"));break;case jA.HOUR_DOWN:f(np.updateHours(g,"minus"))}}),[g,m]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case zA.HOUR:t.length<=2&&f(t);break;case zA.MINUTE:t.length<=2&&b(t)}},E=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case zA.HOUR:{const r=t>23||t<0?h.hour:np.convertHourTo12HourFormat(e.target.value);f(r);break}case zA.MINUTE:{const r=t>59||t<0?h.minute:e.target.value;b(ah.padValue(r));break}}},T=e=>{switch(e.target.name){case PA.AM:y(rp.AM);break;case PA.PM:y(rp.PM)}},F=e=>r?`${r}-${e}`:e,O=So({opacity:i?1:0,height:i?(null!==(d=$.height)&&void 0!==d?d:0)+32+2:0});return e(SA,{"data-testid":"animated-dropdown-wrapper",style:O,children:t(kA,{ref:$.ref,"data-testid":F("timepicker-dropdown"),inert:Yo(!i),children:[t(DA,{children:[t(TA,{children:[t(OA,{children:[e(MA,{"aria-label":"increase hour",name:jA.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":F("hour-increment-button"),children:e(j,{})}),e(IA,{children:e(AA,{"aria-label":"hour",type:"number",name:zA.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onFocus:k,onChange:D,onBlur:E,min:1,max:12,placeholder:"HH","data-testid":F("hour-input")})}),e(MA,{"aria-label":"decrease hour",name:jA.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":F("hour-decrement-button"),children:e(ve,{})})]}),e(_A,{children:":"}),t(OA,{children:[e(MA,{"aria-label":"increase minute",name:jA.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":F("minute-increment-button"),children:e(j,{})}),e(IA,{children:e(AA,{"aria-label":"minute",type:"number",name:zA.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:D,onBlur:E,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":F("minute-input")})}),e(MA,{"aria-label":"decrease minute",name:jA.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":F("minute-decrement-button"),children:e(ve,{})})]})]}),t(FA,{children:[e(BA,{checked:v===rp.AM,name:PA.AM,type:"radio",onChange:T,"data-testid":F("am-toggle"),"aria-label":"AM",children:"AM"}),e(BA,{checked:v===rp.PM,name:PA.PM,type:"radio",onChange:T,"data-testid":F("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(EA,{children:[e(RA,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":F("cancel-button"),children:"Cancel"}),e(RA,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?np.convertTo24HourFormat({hour:g,minute:m,period:v}):`${g}:${m}${v}`,l(e)},disabled:""===g||""===m,"data-testid":F("confirm-button"),children:"Done"})]})]})})},NA=r=>{var{id:n,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:h,onFocus:g,onBlur:p}=r,f=Vo(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=a(!1),[v,y]=a(!1),[x,w]=a(""),[$,C]=a(""),S=o(null);u((()=>{l&&(w(l.start),C(l.end))}),[l]),lh("mousedown",(function(e){i||T(e)}),"document"),lh("keyup",(function(e){if("Tab"===e.code)T(e)}),"document");const k=()=>{E()},D=()=>{m||v||g&&g()},E=()=>{b(!1),y(!1),p&&p()},T=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&E()};return e(QI,Object.assign({ref:S,id:n},f,{children:t(JI,{$disabled:i,$error:s,$readOnly:d,children:[t(tm,{error:s,currentActive:m?"start":v?"end":"none",children:[e(eA,{onFocus:()=>{i||d||m||(y(!1),b(!0),D())},readOnly:!0,placeholder:"From",value:np.formatDisplayValue(x,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(eA,{onFocus:()=>{i||d||v||(b(!1),y(!0),D())},readOnly:!0,placeholder:"To",value:np.formatDisplayValue($,c),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(LA,{id:n,show:m,value:x,format:c,onCancel:k,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),e(LA,{id:n,show:v,value:$,format:c,onCancel:k,onChange:e=>{y(!1),C(e);h&&h({start:x,end:e}),""==x?b(!0):p&&p()}})]})}))},HA=M(Up)`
    height: 3rem;
    gap: ${jc["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${jc["spacing-20"]});
`,WA=r=>{var{id:n,disabled:i=!1,error:s,value:l,format:c="12hr",readOnly:d,onChange:h,onFocus:g,onBlur:f,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=r,$=Vo(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=a((()=>oh.generate())),[S,k]=a(null),[D,E]=a(!1),[T,F]=a(""),[O,M]=a(""),[_,I]=a(""),[A,B]=a(""),[R,j]=a(""),z=o(null),P=o(null),L=o(null),N=m((()=>np.generateTimings(w,c,y,x)),[w,c,y,x]),H=m((()=>{if(""===A)return N;const e=np.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=p((e=>np.parseInput(e,c)),[c]);u((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";M(r),I(n),B(r),j(n)}}),[l,W]),u((()=>{if(s)return void E(!1);const e=W(O),t=W(_);if(void 0===e)F("Invalid start time");else if(void 0===t)F("Invalid end time");else{if(!(""!==e&&""!==t&&np.to24Hour(t)<np.to24Hour(e)))return F(""),void(document.activeElement!==P.current&&document.activeElement!==L.current||E(!0));F("End time must be after start time")}E(!1)}),[O,_,W,s]);const Y=e=>{i||d||(S||D||null==g||g(),k(e),E(!0))},V=e=>{var t;i||d||(k(e),E(!0),null===(t=("start"===e?P:L).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(O):"end"===S&&(D&&X(_),null===(t=L.current)||void 0===t||t.blur());break;case"Tab":q(O,_,{})}}const K=e=>{q(e,_,{goToNextInput:!0})},X=e=>{q(O,e,{triggerOnBlur:!0})},q=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,o,a;const s=null!==(i=W(e))&&void 0!==i?i:A,l=null!==(o=W(t))&&void 0!==o?o:R;M(s),I(l);s===A&&l===R||null==h||h({start:s,end:l}),r&&void 0!==W(e)&&(k("end"),null===(a=L.current)||void 0===a||a.select()),n&&(k(null),E(!1),null==f||f()),B(s),j(l)},G=e=>{e.stopPropagation(),M(""),I(""),B(""),j("");null==h||h({start:"",end:""}),k(null),E(!1)},Z=e=>{z.current&&!z.current.contains(e.relatedTarget)&&S&&!D&&q(O,_,{triggerOnBlur:!0})},Q=()=>{if(!d&&!i&&((null==O?void 0:O.length)>0||(null==_?void 0:_.length)>0))return e(MI,{onClick:G,type:"button","aria-label":"Clear",children:e(X$,{"aria-hidden":!0})})};return t(QI,Object.assign({id:n},$,{children:[e(vM,{children:e(_f,{enabled:!d&&!i,isOpen:D,renderElement:()=>t(HA,{ref:z,$disabled:i,$error:s||!!T,$readOnly:d,onBlur:Z,children:[t(tm,{error:s||!!T,currentActive:null===S?"none":S,children:[e(eA,{ref:P,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>M(e.target.value),value:O,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"}),e(eA,{ref:L,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>I(e.target.value),value:_,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":D,"aria-controls":C,"aria-autocomplete":"list"})]}),Q()]}),renderDropdown:()=>{if(D)return e(HM,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[O],disableItemFocus:!0,topScrollItem:np.findClosestFlooredTime(W(O),N),listboxId:C}:{listItems:H,onSelectItem:X,selectedItems:[_],disableItemFocus:!0,topScrollItem:np.findClosestFlooredTime(W(_),H),listboxId:C})},onClose:e=>{"outside-press"===e?(k(null),E(!1),null==f||f()):q(O,_,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?P:L).current)||void 0===e||e.focus(),E(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!s&&T&&e(g$,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:T})]}))},YA=t=>{var{variant:r="dial"}=t,n=Vo(t,["variant"]);return e("combobox"===r?WA:NA,Object.assign({},n))};M.div`
    position: relative;
`;const VA=M(Kp)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,UA=r=>{var{id:n,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:g,onBlur:f}=r,m=Vo(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=a(!1),y=o(null);lh("mousedown",(function(e){i||s||$(e)}),"document"),lh("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{i||s||b||(v(!0),g&&g())};const w=()=>{v(!1),f&&f()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=p((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(Up,Object.assign({ref:y,id:n,$readOnly:s,$disabled:i,$error:l},m,{children:[e(VA,{onFocus:x,focused:b,readOnly:!0,placeholder:d||C(),value:np.formatDisplayValue(c,u),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(LA,{id:n,show:b,value:c,format:u,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))},KA=M(dE)`
    margin-right: 0.5rem;
`,XA=M(Z$)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,qA=M(XA)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,GA=M(ud.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return _`
                color: ${Ic["text-disabled"]};
            `}}
`,ZA=M.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,QA=M(ud.BodyBL)``,JA=n=>{var{disabled:i,error:s,value:l,onChange:c,onBlur:d,onChangeRaw:h,onBlurRaw:g,readOnly:p,placeholder:f="00-8888",autoComplete:m}=n,b=Vo(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=a(""),[x,w]=a(""),[$,C]=a("none"),S=o(null),k=o(null),D=o(null),E=o(v),T=o(x),F=o($),O=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),M=uh({ref:k,formatter:O}),_=uh({ref:D,formatter:O}),I=e=>{E.current=e,y(e)},A=e=>{T.current=e,w(e)},B=e=>{F.current=e,C(e)};u((()=>{"floor"===$&&3===v.length&&D.current&&D.current.focus()}),[v]),u((()=>{N(l)}),[l]);const R=e=>{B(e.target.name),e.target.select()},j=e=>{const t=e.target.name,r=e.target.value,n=L(r);"floor"===t?(I(n),n!==v&&H(n,t)):"unit"===t&&(A(n),n!==x&&H(n,t))},z=e=>{const t=e.target.name;if("floor"===t){const e=M();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),I(r),H(r,t)}else if("unit"===t){const e=_();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),A(r),H(r,t)}},P=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&(null===(t=k.current)||void 0===t||t.focus())},L=e=>/^[0-9]$/.test(e)?ah.padValue(e,!0):e.toLocaleUpperCase(),N=e=>{if(e!==eB)if(void 0===e||0===e.length)I(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];I("floor"===$?e:L(e)),A("unit"===$?r:L(r))}}},H=(e,t)=>{if(!c&&!h)return;const r={floor:E.current,unit:T.current};if(r[t]=e,c){const e=Y(r);c(e)}h&&h([r.floor,r.unit])},W=()=>{if(!d&&!g)return;const e={floor:L(E.current),unit:L(T.current)};if(d){const t=Y(e);d(t)}g&&g([e.floor,e.unit])},Y=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":eB},V=e=>e.split("-");return t(Up,Object.assign({},b,{ref:S,onClick:()=>{"none"===$&&k.current&&k.current.focus()},$disabled:i,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{S.current&&S.current.contains(e.relatedTarget)||"none"!==F.current&&(B("none"),W())},children:[e(KA,{"data-testid":"addon",$disabled:i,$readOnly:p,children:"#"}),p&&l?(r=>{const n=r.split("-");return t(ZA,{children:[e(QA,{children:n[0]}),e(GA,{children:"-"}),e(QA,{children:n[1]})]})})(l):t(r,{children:[e(XA,{name:"floor",maxLength:3,value:v,ref:k,onFocus:R,onBlur:j,onChange:z,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||p?V(f)[0]:"",autoComplete:m,styleType:"no-border"}),e(GA,{$inactive:0===v.length,children:"-"}),e(qA,{name:"unit",maxLength:5,value:x,ref:D,onFocus:R,onBlur:j,onChange:z,onKeyDown:P,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||p?V(f)[1]:"",autoComplete:m,styleType:"no-border"})]})]}))},eB="Invalid unit number",tB={DateInput:t=>{var{label:r,errorMessage:n,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(Wf,Object.assign({id:`${i}-base`,"data-testid":a||i,"aria-labelledby":`${i}-label`,error:!!n},v))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(am,Object.assign({id:`${i}-base`,"data-testid":a||i,"aria-labelledby":`${i}-label`,error:!!n},v))})},ESignature:t=>{const{label:r,errorMessage:n,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(ob,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(V$,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},Input:Q$,InputGroup:gE,MaskedInput:FE,Label:f$,MultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(oI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(cI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(lI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(AI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(LI,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||i,id:`${i}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(NI,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(P$,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v}=t,y=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:h,xsCols:g,smCols:p,mdCols:f,lgCols:m,xlCols:b,xxlCols:v,children:e(II,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s},y))})},Textarea:ZI,Timepicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(UA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(YA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:i}=t,o=Vo(t,["id","data-error-testid","children"]);return e(w$,Object.assign({id:r,"data-error-testid":n},o,{children:i}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(JA,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(DI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b}=t,v=Vo(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(w$,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:h,smCols:g,mdCols:p,lgCols:f,xlCols:m,xxlCols:b,children:e(FI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})}},rB=M.li`
    display: flex;
    flex-direction: column;
    padding: ${jc["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    }
`,nB=M.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${jc["spacing-16"]};
    width: 100%;
`,iB=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,oB=M.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${jc["spacing-16"]};

    ${Lc.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,aB=M(ud.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${jc["spacing-16"]};

    ${Lc.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${jc["spacing-8"]};
    }
`,sB=M(ud.BodyMD)``,lB=M.div`
    display: flex;
    ${Lc.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return _`
                margin-left: calc(
                    96px + ${jc["spacing-32"]}
                ); // thumbnail width + right margin

                ${Lc.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,cB=M(Kd.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${jc["spacing-16"]};
    }

    ${Lc.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${jc["spacing-16"]};
        }
    }
`,dB=({thumbnailImageDataUrl:r,"data-testid":n,renderReplaceButton:i,onReplaceClick:o})=>t(uB,{"data-testid":n,children:[e(hB,{"data-testid":n?`${n}-image`:void 0,src:r}),i&&e(gB,{type:"button",onClick:()=>{o&&o()},children:"Replace"})]}),uB=M.div`
    width: auto;
    margin-right: ${jc["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,hB=M(Ob)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${zc.sm};
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    object-fit: cover;

    ${Lc.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,gB=M.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${jc["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${Ac["body-md-semibold"]}
    color: ${Ic["text-primary"]};

    :hover {
        color: ${Ic["text-hover"]};
    }
`,pB=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:i,onSave:s,onCancel:l,onBlur:c})=>{const{id:d,name:h,size:g,truncateText:p=!0,thumbnailImageDataUrl:f}=r,[m,b]=a(),[v,y]=a(""),x=o(null),w=o(null);u((()=>{b($(h))}),[i]),u((()=>{y(r.description||"")}),[r]);const $=e=>{if(!p)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return ah.truncateOneLine(e,t,t/2,t/2/8,16)};return t(rB,{"data-testid":`${d}-edit-display`,children:[t(nB,{children:[f&&e(dB,{thumbnailImageDataUrl:f}),t(iB,{children:[t(oB,{ref:w,children:[e(aB,{weight:"semibold",children:m}),e(sB,{children:Fb.formatFileSizeDisplay(g)})]}),e(tB.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:n,onChange:e=>{y(e.target.value)},onBlur:e=>{c(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(lB,{$thumbnail:!!f,children:[e(cB,{"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{x.current&&s(x.current.value.trim())},children:"Save"}),e(cB,{type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:l,children:"Cancel"})]})]})},fB=M.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${jc["spacing-16"]};
    }

    ${e=>e.$disabled&&"none"===e.$focusType?_`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?_`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?_`
                :hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,mB=M(nt)`
    margin-right: ${jc["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ic.icon};

    ${e=>e.$active?_`
                color: ${Ic["icon-primary"]};
            `:e.$disabled?_`
                color: ${Ic["icon-disabled"]};
            `:void 0};
`,bB=M.div`
    background: ${Ic["bg-primary-subtlest"]};
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.sm};
    padding: ${jc["spacing-16"]} ${jc["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${Lc.MaxWidth.sm} {
        padding: ${jc["spacing-16"]};
    }

    ${e=>e.$focused?_`
                border-color: ${Ic["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${Ic["border-focus"]} r g b / 50%);
            `:e.$disabled?_`
                border-color: ${Ic["border-disabled"]};
            `:e.$error?_`
                background: ${Ic["bg-error"]};
                border-color: ${Ic["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return _`
                ${Lc.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,vB=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Lc.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return _`
                ${Lc.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,yB=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,xB=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Lc.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,wB=M.div`
    display: flex;
    width: 5rem;
    margin-left: ${jc["spacing-8"]};
    justify-content: flex-end;

    ${Lc.MaxWidth.sm} {
        ${e=>e.$hideInMobile?_`
                    display: none;
                    visibility: hidden;
                `:_`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${jc["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,$B=M(ud.BodyMD)``,CB=M($B)`
    margin-top: ${jc["spacing-4"]};
`,SB=M(ud.BodySM)`
    color: ${Ic["text-error"]};
`,kB=M(SB)`
    margin-top: ${jc["spacing-4"]};
    ${Lc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,DB=M(SB)`
    display: none;
    visibility: hidden;
    ${Lc.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${jc["spacing-8"]};
    }
`,EB=M.div`
    width: 6rem;
    margin-left: ${jc["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${Lc.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?_`
                    margin-left: 0;
                    margin-top: ${jc["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?_`
                    margin-left: 0;
                    margin-top: ${jc["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,TB=M(Vf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${jc["spacing-16"]};
    }
`,FB=M(ad)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Ic.icon};
    }
`,OB=$((({fileItem:n,editable:i,sortable:s,wrapperWidth:l,disabled:c,readOnly:d,onDelete:h,onEditClick:g})=>{const{id:p,name:m,size:b,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=n,[C,S]=a(),{activeId:k}=f(Xb),{attributes:D,listeners:E,setNodeRef:T,transform:F,transition:O}=Uw({id:p}),M=o(null),_={transform:Uy.Translate.toString(F),transition:O},I=Object.assign(Object.assign({style:_},D),E),A=y<1,B=Fb.formatFileSizeDisplay(b),R=k?k===p?"self":"others":"none";u((()=>{S(L(m))}),[l]);const j=()=>{h()},z=()=>{g&&g()},P=e=>{s&&e.stopPropagation()},L=e=>{if(!$)return e;const t=M&&M.current?M.current.getBoundingClientRect().width:0;return ah.truncateOneLine(e,t,t/2,t/2/8,16)},N=()=>c||!!k,H=()=>!!s&&!d,W=()=>t(r,{children:[e($B,{weight:v?"semibold":"regular",children:C}),v&&e(CB,{children:v})]});return t(fB,Object.assign({id:p,ref:T,$sortable:H(),$disabled:N(),$focusType:R},H()?I:{},{children:[H()&&e(mB,{"data-testid":`${p}-drag-handle`,$disabled:N(),$active:"self"===R}),t(bB,{$focused:"self"===R,$error:!!x,$loading:A,$disabled:N(),$editable:i,children:[(()=>{let n;return n=x?t(r,{children:[t(yB,{ref:M,children:[W(),x&&e(kB,{weight:"semibold",children:x})]}),e(wB,{children:e($B,{children:B})}),x&&e(DB,{weight:"semibold",children:x})]}):w?(n=>t(r,{children:[e(dB,{thumbnailImageDataUrl:n,"data-testid":`${p}-thumbnail`}),t(xB,{children:[e(yB,{ref:M,children:W()}),e(wB,{children:e($B,{children:B})})]})]}))(w):t(r,{children:[e(yB,{ref:M,children:W()}),e(wB,{$hideInMobile:A,children:e($B,{children:B})})]}),e(vB,{$hasThumbnail:!!w,children:n})})(),!d&&(()=>{let n;return n=x?e(FB,{onClick:j,"data-testid":`${p}-error-delete-button`,"aria-label":`delete-${m}`,children:e(Pe,{"aria-hidden":!0})}):A?e(Mm,{progress:y,"data-testid":`${p}-progress-bar`}):t(r,{children:[i&&e(TB,{"data-testid":`${p}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${m}`,disabled:N(),onClick:z,onKeyDown:P,children:e(rt,{"aria-hidden":!0})},"edit"),e(TB,{"data-testid":`${p}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${m}`,disabled:N(),onClick:j,onKeyDown:P,children:e(tt,{"aria-hidden":!0})},"delete")]}),e(EB,{$editable:i,$error:!!x,$loading:A,children:n})})()]})]}))})),MB=M.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":jc["spacing-32"]};
`,_B=M.li`
    border-top: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};

    :not(:last-child) {
        margin-bottom: ${jc["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${jc["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,IB=({fileItems:t,editableFileItems:r,fileDescriptionMaxLength:n,sortable:i,disabled:s,readOnly:l,onItemUpdate:c,onItemDelete:d,onSort:h})=>{const[g,p]=a({}),{setActiveId:b}=f(Xb),{width:v=0,ref:y}=lr(),x=o({}),w=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return m((()=>[...t].filter((e=>null!=e))),[...t])}(ix(Zw,{activationConstraint:{distance:8}}),ix(Zx,{activationConstraint:{delay:150,tolerance:5}}),ix(Nx,{coordinateGetter:qw})),$=e=>{delete x.current[e]};u((()=>{p(_(t))}),[t]);const C=e=>t=>{I(e.id,"display"),$(e.id);const r=Object.assign(Object.assign({},e),{description:t});c(r)},S=e=>t=>{x.current[e.id]=t},k=e=>()=>{e.description&&0!==e.description.length?I(e.id,"display"):d(e),$(e.id)},D=e=>()=>{I(e.id,"edit")},E=e=>()=>{d(e)},T=e=>{if(h&&t){const{active:r,over:n}=e;if(n&&r.id!==n.id){const e=t.findIndex((e=>e.id===r.id)),i=t.findIndex((e=>e.id===n.id)),o=Mw(t,e,i);h(o)}}b(void 0)},F=e=>{const{active:t}=e;b(t.id)},O=e=>r&&Fb.isSupportedImageType(e.type),M=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&O(e)&&!e.description,_=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":g[r.id]?t[r.id]=g[r.id]:t[r.id]=M(r)?"edit":"display";return t},I=(e,t)=>{p((r=>Object.assign(Object.assign({},r),{[e]:t})))},A=()=>t&&t.length>1&&i&&Object.values(g).every((e=>"display"===e)),B=()=>{const r=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(t,g);return 0===r.length?null:r.map(((t,r)=>Array.isArray(t)?((t,r)=>{const i=t.map((t=>{const r=Object.assign({},t);return void 0!==x.current[t.id]&&(r.description=x.current[t.id]),e(pB,{fileItem:r,wrapperWidth:v,fileDescriptionMaxLength:n,onSave:C(t),onCancel:k(t),onBlur:S(t)},t.id)}));return e(_B,{children:e("ul",{children:i})},`editable-${r}`)})(t,r):e(OB,{fileItem:t,editable:O(t),wrapperWidth:v,sortable:A(),disabled:s,readOnly:l,onDelete:E(t),onEditClick:D(t)},t.id)))};return t&&0!==t.length?s||l||!A()?e(MB,{$readOnly:l,ref:y,children:B()}):e(Dw,{sensors:w,onDragEnd:T,onDragStart:F,children:e(Pw,{items:t,strategy:Rw,children:e(MB,{$readOnly:l,ref:y,children:B()})})}):null},AB=M.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${jc["spacing-32"]};
    gap: ${jc["spacing-8"]};
`,BB=M(ud.BodyBL)``,RB=M.div`
    color: ${Ic.text};
    ${Jd({textSize:"body-baseline"})}
`,jB=M(ud.BodyMD)`
    color: ${Ic["text-subtler"]};
`,zB=M.div`
    color: ${Ic.text};
    ${Jd({textSize:"body-md"})}
`,PB=M(su)`
    margin-bottom: ${jc["spacing-32"]};
`,LB=M.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${Lc.MaxWidth.sm} {
        align-items: flex-start;
    }
`,NB=M(Kd.Small)`
    width: 10rem;

    ${Lc.MaxWidth.sm} {
        width: 100%;
    }
`,HB=M.label`
    ${Ac["body-md-semibold"]}
    color: ${Ic["text-subtler"]};
    margin-top: ${jc["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${Lc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,WB=M(su)`
    margin-bottom: ${jc["spacing-32"]};
`,YB=({styleType:r="bordered",fileItems:n,title:i,description:s,maxFiles:l,warning:c,className:d,name:u,id:h,"data-testid":g,accept:p,capture:f,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:C,onDelete:S,onEdit:k,onSort:D})=>{const E=o(null),[T,F]=a(),O=()=>!(!l||!n)&&n.length>=l;return e(Xb.Provider,{value:{activeId:T,setActiveId:F},children:t(Sy,{ref:E,onChange:e=>{!b&&C&&C(e)},id:h?`${h}-dropzone`:"dropzone",accept:p,capture:f,border:"bordered"===r,className:d,"data-testid":g,name:u,multiple:m,disabled:b||O()||$,children:[!(!i&&!s)&&t(AB,{children:[i?e("string"==typeof i?BB:RB,{children:i}):null,s?e("string"==typeof s?jB:zB,{children:s}):null]}),!!c&&e(PB,{type:"warning",children:c}),e(IB,{fileItems:n,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{S&&S(e)},onItemUpdate:e=>{k&&k(e)},onSort:e=>{D&&D(e)}}),w&&e(WB,{type:"error",children:w}),!$&&t(LB,{children:[e(NB,{type:"button",styleType:"secondary",disabled:!!T||b||O(),onClick:e=>{b||(e.preventDefault(),E.current&&E.current.openFileDialog())},children:"Upload files"}),e(HB,{children:"or drop them here"})]})]})})},VB=i.createContext({mode:"default",rootNode:{current:null}});var UB=Zo((function(e){return null==e}));const KB=M.div`
    background-color: ${e=>e.$collapsible?Ic["bg-strong"]:Ic.bg};
    ${Lc.MaxWidth.lg} {
        background-color: ${Ic["bg-strong"]};
    }
`,XB=M.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Ic.border};

    ${Lc.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${jc["spacing-16"]};
    }
`,qB=M.div`
    display: flex;
    align-items: center;

    background-color: ${Ic.bg};

    ${Lc.MaxWidth.lg} {
        background-color: transparent;
    }
`,GB=M(ad)`
    margin: 0 0 0 auto;

    color: ${Ic.icon};
    &:hover {
        color: ${Ic["icon-hover"]};
    }
`,ZB=M(ve)`
    height: ${Ac.Spec["body-size-baseline"]};
    width: ${Ac.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Bc["duration-350"]} ${Bc["ease-standard"]};
`,QB=M.p`
    ${Ac["heading-xs-semibold"]}
    color: ${Ic.text};

    margin: ${jc["spacing-24"]} 0 ${jc["spacing-24"]}
        ${jc["spacing-20"]};

    ${Lc.MaxWidth.lg} {
        ${Ac["body-md-semibold"]}
        color: ${Ic["text-subtle"]};

        margin: ${jc["spacing-24"]} ${jc["spacing-20"]} 0
            ${jc["spacing-20"]};
    }
`,JB=M(Ho.div)`
    overflow: hidden;
`,eR=M.div`
    padding: ${jc["spacing-24"]} ${jc["spacing-20"]};
`,tR=M(Ho.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,rR=M(Kd.Small)`
    height: fit-content;
    padding: 0;
    margin: ${jc["spacing-16"]} 0 0 0;
`,nR=r=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:s,onExpandChange:l,minimisable:c=!1,minimisedHeight:d,showDivider:h=!0,showMobileDivider:g=!0,title:p,addon:m,children:b}=r,v=Vo(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:y,rootNode:x}=f(VB),w="mobile"===y,[$,C]=a(M()),[S,k]=a(c),D=!w&&i,E=lr(),T=lr(),F=So({height:$?E.height:0}),O=S?null!=d?d:Math.min(.5*(null!==(n=T.height)&&void 0!==n?n:0),216):T.height;u((()=>{C(M())}),[i,s]);function M(){return!!w||(UB(s)?!i||o:s)}return t(KB,{$collapsible:D,children:[e(XB,{$showDivider:h,$showMobileDivider:g}),(p||D)&&t(qB,{children:[p&&t(QB,{children:[p," ",m&&("popover"===(null==m?void 0:m.type)?e(u$,{addon:m,rootNode:w?x:void 0}):null)]}),D&&e(GB,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!$;UB(s)&&C(e),l&&l(e)},"aria-label":$?"Collapse":"Expand",children:e(ZB,{$expanded:$})})]}),e(JB,{"data-testid":"expandable-container","data-expanded":$,style:F,children:e("div",{ref:E.ref,children:t(eR,Object.assign({},v,{children:[e(tR,{"data-testid":"minimisable-container",$height:O,$minimisable:c,children:e("div",{ref:T.ref,children:e("div",{"data-id":"content-container",children:"function"==typeof b?b(y,{minimised:S}):b})})}),c&&t(rR,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{k(!S)},children:["View ",S?"more":"less"]})]}))})})]})};nR.displayName="Filter.Item";const iR=M(nR)`
    padding: 0 0 ${jc["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${jc["spacing-8"]} ${jc["spacing-8"]} 0;

        ${Lc.MaxWidth.lg} {
            padding: ${jc["spacing-16"]} ${jc["spacing-20"]}
                ${jc["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${jc["spacing-8"]} ${jc["spacing-20"]} 0;
    }
`,oR=M.div`
    display: flex;
    flex-direction: column;

    ${Lc.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${jc["spacing-16"]};
    }
`,aR=M.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${jc["spacing-8"]} ${jc["spacing-12"]};

    cursor: pointer;
    ${Ac["body-md-regular"]}
    color: ${Ic.text};
    ${e=>e.$selected&&_`
            color: ${Ic["text-selected"]};
        `}

    ${Lc.MaxWidth.lg} {
        padding: ${jc["spacing-8"]};
    }
`,sR=M(Ag)`
    flex-shrink: 0;
    margin-right: ${jc["spacing-8"]};
`,lR=M(CA)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,cR=M(Kd.Small)`
    height: fit-content;
    padding: 0;
    margin: ${jc["spacing-16"]} 0 ${jc["spacing-8"]}
        ${jc["spacing-12"]};

    ${Lc.MaxWidth.lg} {
        margin: 0 0 ${jc["spacing-16"]} 0;
    }
`,dR=n=>{var{selectedOptions:i,options:s,onSelect:l,labelExtractor:c,valueExtractor:d,useToggleContentWidth:h}=n,g=Vo(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:m}=f(VB),[b,v]=a(i||[]),[y,x]=a(),[w,$]=a(s.length),C=o(null),S=o(null),k=e=>()=>{const t=[...b],r=b.findIndex((t=>T(t)===T(e)));r>=0?t.splice(r,1):t.push(e),v(t),null==l||l(t)},D=()=>{const e=b.length?[]:s;v(e),null==l||l(e)},E=e=>{var t;return c?c(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},T=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},F=p((()=>{if(!C.current)return void x(void 0);const e=Array.from(C.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}$(t),x(r>2?n-8:void 0)}),[]);u((()=>{i!==b&&v(i||[])}),[i]),u((()=>{"default"===m?(()=>{const e=S.current?S.current.offsetTop+S.current.clientHeight:void 0;x(e)})():F()}),[s]),lr({handleWidth:"mobile"===m,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:C,onResize:F});return e(iR,Object.assign({minimisable:s.length>5,minimisedHeight:y},g,{children:(n,{minimised:i})=>t(r,{children:[s.length<3?null:e(cR,{styleType:"link",type:"button",onClick:D,children:b.length?"Clear all":"Select all"}),e(oR,{role:"group","aria-label":g.title,ref:C,children:s.map(((r,o)=>"default"===n?((r,n,i)=>{const o=E(r),a=T(r),s=!!b.find((e=>T(e)===a));return t(aR,{$visible:!i||n<5,$selected:s,ref:4===n?S:void 0,children:[e(sR,{displaySize:"small",checked:s,onChange:k(r)}),o]},a)})(r,o,i):((t,r,n)=>{const i=E(t),o=T(t),a=!!b.find((e=>T(e)===o));return e(lR,{type:"checkbox",checked:a,$visible:!n||!!y&&r<=w,onChange:k(t),useContentWidth:h,children:i},o)})(r,o,i)))})]})}))};dR.displayName="Filter.Checkbox";const uR=M.div`
    background-color: ${Ic.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,hR=M.div`
    background-color: ${Ic.bg};
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-radius: ${zc.md};
    overflow: hidden;
    width: 100%;
`,gR=M.div`
    background-color: ${Ic["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,pR=M.div`
    background-color: ${Ic.bg};
    height: 100%;
    width: 100%;
`,fR=M.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,mR=M.div`
    display: flex;
    align-items: center;

    background-color: ${Ic.bg};

    ${Lc.MaxWidth.lg} {
        border-bottom: ${Rc["width-010"]} ${Rc.solid}
            ${Ic.border};
    }
`,bR=M(ud.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${jc["spacing-24"]} 0 ${jc["spacing-24"]}
        ${jc["spacing-20"]};

    ${Lc.MaxWidth.lg} {
        text-align: center;
        margin: ${jc["spacing-24"]} 0;
    }
`,vR=M(ad)`
    padding: ${jc["spacing-24"]} ${jc["spacing-20"]};
    margin-right: auto;
    color: ${Ic.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Ic["icon-hover"]};
    }
`,yR=M(Kd.Small)`
    background-color: transparent;
    padding-right: ${jc["spacing-20"]};
    padding-left: ${jc["spacing-20"]};
    height: 100%;

    ${Lc.MaxWidth.lg} {
        padding: ${jc["spacing-24"]} ${jc["spacing-20"]};
    }
`,xR=M(kh.Default)`
    width: 100%;
`,wR=M.div`
    padding: ${jc["spacing-24"]} ${jc["spacing-20"]};
    background-color: ${Ic.bg};
    border-top: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
`,$R=M(Kd.Default)`
    width: 100%;
`,CR=({onDismiss:r,onDone:n,children:i})=>t(uR,{children:[e(vR,{onClick:r,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(xe,{})}),e(fR,{children:i}),e(wR,{children:e($R,{onClick:n,type:"button",children:"Done"})})]});CR.displayName="Filter.Page";const SR=n=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:d,onDismiss:h,onDone:g,children:p}=n,f=Vo(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[m,b]=a(!1),v=o(null),y=o(null),x=R(),w=Pc["lg-max"]({theme:x}),$=Cu.useMediaQuery({maxWidth:w});u((()=>{$||S()}),[$]);const C=()=>{b(!0)},S=()=>{b(!1),h&&h()},k=()=>{b(!1),g&&g()},D=()=>{d&&d()},E=e=>"function"==typeof p?p(e):p,T=r=>t(mR,{children:["mobile"===r&&e(vR,{onClick:S,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e(re,{})}),e(bR,{weight:"semibold",children:l}),e(yR,{styleType:"link",type:"button",onClick:D,disabled:c,children:"Clear"})]});return e("div",Object.assign({},f,{children:e(VB.Provider,$?{value:{mode:"mobile",rootNode:v},children:t(r,{children:[e(xR,{"data-testid":"filter-show-button",styleType:s,onClick:C,type:"button",icon:e(ne,{}),children:i}),e($m,{show:m,disableTransition:!0,children:e(pR,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:t(gR,{ref:v,children:[T("mobile"),e(fR,{children:E("mobile")}),e(wR,{children:e($R,{onClick:k,type:"button",children:"Done"})})]})})})]})}:{value:{mode:"default",rootNode:y},children:t(hR,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:y,children:[T("default"),E("default")]})})}))};SR.displayName="Filter";const kR=Object.assign(SR,{Item:nR,Page:CR,Checkbox:dR}),DR=M.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Lc.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,ER=M(ud.BodyMD)`
    margin-bottom: ${jc["spacing-16"]};
`,TR=M.div`
    display: flex;
    align-items: flex-start;
`,FR=M.a`
    &:not(:last-child) {
        margin-right: ${jc["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Lc.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${jc["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,OR=()=>t(DR,{"data-testid":"download-app-section",children:[e(ER,{weight:"semibold",children:"Download the app"}),t(TR,{children:[e(FR,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(FR,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]}),MR={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},_R={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},IR={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var AR;!function(e){e.getCopyrightInfo=(e=new Date,r)=>{const n=t(r);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${Pu(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const r=(e=>{switch(e){case"bookingsg":return _R;case"mylegacy":return IR;default:return MR}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},r.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},r.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},r.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(AR||(AR={}));const BR=M.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?_`
                padding: 0 ${Pc["xxl-margin"]}px;
            `:_`
                padding: 0 ${Pc["xxl-margin"]}px;
                max-width: 1440px;

                ${Lc.MaxWidth.xl} {
                    padding: 0 ${Pc["xl-margin"]}px;
                }

                ${Lc.MaxWidth.lg} {
                    padding: 0 ${Pc["lg-margin"]}px;
                }

                ${Lc.MaxWidth.md} {
                    padding: 0 ${Pc["md-margin"]}px;
                }

                ${Lc.MaxWidth.sm} {
                    padding: 0 ${Pc["sm-margin"]}px;
                }

                ${Lc.MaxWidth.xs} {
                    padding: 0 ${Pc["xs-margin"]}px;
                }

                ${Lc.MaxWidth.xxs} {
                    padding: 0 ${Pc["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return _`
                    column-gap: ${Pc["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${Pc["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${Lc.MaxWidth.xl} {
                        column-gap: ${Pc["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Pc["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Lc.MaxWidth.lg} {
                        column-gap: ${Pc["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Pc["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Lc.MaxWidth.md} {
                        column-gap: ${Pc["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Pc["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Lc.MaxWidth.sm} {
                        column-gap: ${Pc["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Pc["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Lc.MaxWidth.xs} {
                        column-gap: ${Pc["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Pc["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${Lc.MaxWidth.xxs} {
                        column-gap: ${Pc["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Pc["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return _`
                    display: flex;
                    flex-direction: column;
                `;default:return _`
                    display: flex;
                `}}}
`,RR=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=Vo(t,["children","data-testid","type","stretch"]);return e(BR,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),jR=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=Vo(t,["children","data-testid","stretch"]);return e(zR,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),zR=M.section`
    display: block;
    position: relative;
`,PR=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=Vo(t,["children","data-testid","className","type","stretch"]);return e(jR,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e(RR,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),LR={Section:jR,Container:RR,Content:PR,ColDiv:lm},NR=M.footer`
    background: ${Ic["bg-strong"]};
`,HR=M(ud.LinkSM)`
    color: ${Ic.text};
`,WR=M(vm)`
    width: 100%;
`,YR=M(LR.Content)`
    padding: ${jc["spacing-64"]} 0;

    ${Lc.MaxWidth.lg} {
        padding: ${jc["spacing-32"]} 0;
    }
`,VR=M.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${Lc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${jc["spacing-32"]};
    }

    ${Lc.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${jc["spacing-32"]};
    }
`,UR=M.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${jc["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${Lc.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${Lc.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,KR=M.div`
    grid-column: 13 / span 6;

    ${Lc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${jc["spacing-32"]};
    }

    ${Lc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,XR=M(LR.Content)`
    padding: ${jc["spacing-20"]} 0;

    ${Lc.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${jc["spacing-16"]} 0;
    }
`,qR=M.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${jc["spacing-16"]};
    }

    ${Lc.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Lc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,GR=M(qR)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Lc.MaxWidth.lg} {
        margin-top: ${jc["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${Lc.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,ZR=M(ud.LinkXS)`
    color: ${Ic.text};
    &:not(:last-child) {
        margin-right: ${jc["spacing-16"]};
    }

    svg {
        color: ${Ic.icon};
    }

    &:hover {
        color: ${Ic["text-subtler"]};
        svg {
            color: ${Ic["icon-subtle"]};
        }
    }

    ${Lc.MaxWidth.lg} {
        margin-bottom: ${jc["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Lc.MaxWidth.lg} {
        margin-bottom: ${jc["spacing-8"]};
    }
`,QR=n=>{var{children:i,links:o,lastUpdated:a,disclaimerLinks:s,showDownloadAddon:l,logoSrc:c,copyrightInfo:d,onFooterLinkClick:u,layout:h="default"}=n,g=Vo(n,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const p="stretch"===h,f=R(),m=t=>t.map(((t,r)=>{const n=Vo(t,["data-options"]);return e("li",{children:e(HR,Object.assign({},n,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):u&&(e.preventDefault(),u(t))})(e,t)}))},r)}));return t(NR,Object.assign({},g,{children:[(()=>{let n=null;return i||((o||l)&&(n=t(r,{children:[e(VR,{"data-testid":"logo-section",children:e("img",{src:c||AR.getFooterLogo(null==f?void 0:f.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==o?void 0:o[0])&&e(UR,{"data-testid":"link-col-1",children:m(o[0])},"link-col-1"),(null==o?void 0:o[1])&&e(UR,{"data-testid":"link-col-2",children:m(o[1])},"link-col-2"),l&&e(KR,{children:e(OR,{})})]})),n?t(r,{children:[e(YR,{type:"grid",stretch:p,children:n}),e(WR,{})]}):null)})(),t(XR,{type:"grid",stretch:p,children:[e(qR,{children:(()=>{const t=AR.getDisclaimerLinks(null==f?void 0:f.resourceScheme,s);return Object.keys(t).map((r=>e(ZR,Object.assign({},t[r]),r)))})()},"disclaimer"),e(GR,{children:e(ud.BodyXS,{"data-testid":"copyright-text",children:d||t(r,{children:["©"," ",AR.getCopyrightInfo(a,null==f?void 0:f.resourceScheme)]})})},"copyright")]})]}))};var JR=function(e,t){return Number(e.toFixed(t))},ej=function(e,t,r){r&&"function"==typeof r&&r(e,t)},tj={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},rj=function(e){"number"==typeof e&&cancelAnimationFrame(e)},nj=function(e){e.mounted&&(rj(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function ij(e,t,r,n){if(e.mounted){var i=(new Date).getTime();nj(e),e.animation=function(){if(!e.mounted)return rj(e.animation);var o=(new Date).getTime()-i,a=(0,tj[t])(o/r);o>=r?(n(1),e.animation=null):e.animation&&(n(a),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function oj(e,t,r,n){var i=function(e){var t=e.scale,r=e.positionX,n=e.positionY;return!(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,h=t.positionY-c;0===r?o(t.scale,t.positionX,t.positionY):ij(e,n,r,(function(e){o(s+d*e,l+u*e,c+h*e)}))}}var aj=function(e,t){var r=e.wrapperComponent,n=e.contentComponent,i=e.setup.centerZoomedOut;if(!r||!n)throw new Error("Components are not mounted");var o=function(e,t,r){var n=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*r,a=t.offsetHeight*r;return{wrapperWidth:n,wrapperHeight:i,newContentWidth:o,newDiffWidth:n-o,newContentHeight:a,newDiffHeight:i-a}}(r,n,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,r,n,i,o,a){var s=e>t?r*(a?1:.5):0,l=n>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:n-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},sj=function(e,t,r,n){return JR(n?e<t?t:e>r?r:e:e,2)},lj=function(e,t){var r=aj(e,t);return e.bounds=r,r};function cj(e,t,r,n,i,o,a){var s=r.minPositionX,l=r.minPositionY,c=r.maxPositionX,d=r.maxPositionY,u=0,h=0;return a&&(u=i,h=o),{x:sj(e,s-u,c+u,n),y:sj(t,l-h,d+h,n)}}function dj(e,t,r,n,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=n-s;return"number"!=typeof t||"number"!=typeof r?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):cj(l-t*d,c-r*d,i,o,0,0,null)}function uj(e,t,r,n,i){var o=t-(i?n:0);return!Number.isNaN(r)&&e>=r?r:!Number.isNaN(t)&&e<=o?o:e}var hj=function(e,t){var r=e.setup.panning.excluded,n=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(n&&o&&a)&&!Yj(o,r)},gj=function(e){var t=e.isInitialized,r=e.isPanning,n=e.setup.panning.disabled;return!(!t||!r||n)};function pj(e,t,r,n,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||r!==u)){var h=cj(t,r,s,o,n,i,a),g=h.x,p=h.y;e.setTransformState(c,g,p)}}var fj=function(e,t){var r=e.setup,n=e.transformState.scale,i=r.minScale,o=r.disablePadding;return t>0&&n>=i&&!o?t:0};function mj(e,t,r,n,i,o,a,s,l,c){if(i){var d;if(t>a&&r>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&r<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return n?t:sj(e,o,a,i)}function bj(e,t){var r=function(e){var t=e.mounted,r=e.setup,n=r.disabled,i=r.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&n&&!t)}(e);if(r){var n=e.lastMousePosition,i=e.velocityTime,o=e.setup,a=e.wrapperComponent,s=o.velocityAnimation.equalToMove,l=Date.now();if(n&&i&&a){var c=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,s),d=t.x-n.x,u=t.y-n.y,h=d/c,g=u/c,p=l-i,f=d*d+u*u,m=Math.sqrt(f)/p;e.velocity={velocityX:h,velocityY:g,total:m}}e.lastMousePosition=t,e.velocityTime=l}}function vj(e,t){var r=e.transformState.scale;nj(e),lj(e,r),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var r=t.touches,n=e.transformState,i=n.positionX,o=n.positionY;if(e.isPanning=!0,1===r.length){var a=r[0].clientX,s=r[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var r=e.transformState,n=r.positionX,i=r.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-n,y:a-i}}(e,t)}function yj(e){var t=e.transformState.scale,r=e.setup,n=r.minScale,i=r.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<n||!a&&!s)){var d=function(e){var t=e.transformState,r=t.positionX,n=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,h=d.minPositionX,g=d.maxPositionY,p=d.minPositionY,f=r>u||r<h,m=n>g||n<p,b=dj(e,r>u?c.offsetWidth:e.setup.minPositionX||0,n>g?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:f?v:r,positionY:m?y:n}}}(e);d&&oj(e,d,l,c)}}function xj(e,t,r){var n=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(n){var s=function(e,t,r){var n=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!n)return{x:l,y:c};var d=t-n.x,u=r-n.y;return{x:a?l:d,y:s?c:u}}(e,t,r),l=s.x,c=s.y,d=fj(e,o),u=fj(e,a);bj(e,{x:l,y:c}),pj(e,l,c,d,u)}}function wj(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,r=e.velocity,n=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==n?void 0:n.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&r&&(null==r?void 0:r.total)>.1&&u?function(e){var t=e.velocity,r=e.bounds,n=e.setup,i=e.wrapperComponent,o=function(e){var t=e.mounted,r=e.velocity,n=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t||!r||!n)}(e);if(o&&t&&r&&i){var a=t.velocityX,s=t.velocityY,l=t.total,c=r.maxPositionX,d=r.minPositionX,u=r.maxPositionY,h=r.minPositionY,g=n.limitToBounds,p=n.alignmentAnimation,f=n.zoomAnimation,m=n.panning,b=m.lockAxisY,v=m.lockAxisX,y=f.animationType,x=p.sizeX,w=p.sizeY,$=p.velocityAlignmentTime,C=function(e,t){var r=e.setup.velocityAnimation,n=r.equalToMove,i=r.animationTime,o=r.sensitivity;return n?i*t*o:i}(e,l),S=Math.max(C,$),k=fj(e,x),D=fj(e,w),E=k*i.offsetWidth/100,T=D*i.offsetHeight/100,F=c+E,O=d-E,M=u+T,_=h-T,I=e.transformState,A=(new Date).getTime();ij(e,y,S,(function(t){var r=e.transformState,n=r.scale,i=r.positionX,o=r.positionY,l=((new Date).getTime()-A)/$,f=1-(0,tj[p.animationType])(Math.min(1,l)),m=1-t,y=i+a*m,x=o+s*m,w=mj(y,I.positionX,i,v,g,d,c,O,F,f),C=mj(x,I.positionY,o,b,g,h,u,_,M,f);i===y&&o===x||e.setTransformState(n,w,C)}))}}(e):yj(e)}}function $j(e,t,r,n){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=uj(JR(t,2),o,a,0,!1),c=dj(e,r,n,l,lj(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function Cj(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,h=c||n>=a;if((n>=1||s)&&yj(e),!h&&i&&e.mounted){var g=$j(e,a,t||i.offsetWidth/2,r||i.offsetHeight/2);g&&oj(e,g,d,u)}}var Sj=function(){return Sj=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Sj.apply(this,arguments)};function kj(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var Dj=1,Ej=0,Tj=0,Fj={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},Oj=function(e){var t,r,n,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:Dj,scale:null!==(r=e.initialScale)&&void 0!==r?r:Dj,positionX:null!==(n=e.initialPositionX)&&void 0!==n?n:Ej,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:Tj}},Mj=function(e){var t=Sj({},Fj);return Object.keys(e).forEach((function(r){var n=void 0!==e[r];if(void 0!==Fj[r]&&n){var i=Object.prototype.toString.call(Fj[r]),o="[object Object]"===i,a="[object Array]"===i;t[r]=o?Sj(Sj({},Fj[r]),e[r]):a?kj(kj([],Fj[r],!0),e[r],!0):e[r]}})),t},_j=function(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?n*Math.exp(t*r):n+t*r;return uj(JR(u,3),s,a,d,!1)};function Ij(e,t,r,n,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,h=$j(e,_j(e,t,r),d,u);if(!h)return console.error("Error during zoom event. New transformation state was not calculated.");oj(e,h,n,i)}function Aj(e,t,r,n){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=Oj(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var h=aj(e,s.scale),g=cj(s.positionX,s.positionY,h,a,0,0,o),p={scale:s.scale,positionX:g.x,positionY:g.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==n||n(),oj(e,p,t,r))}}var Bj=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),Ij(e,1,t,r,n)}},Rj=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),Ij(e,-1,t,r,n)}},jj=function(e){return function(t,r,n,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var h={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(r)?l:r,scale:Number.isNaN(n)?c:n};oj(e,h,i,o)}}},zj=function(e){return function(t,r){void 0===t&&(t=200),void 0===r&&(r="easeOut"),Aj(e,t,r)}},Pj=function(e){return function(t,r,n){void 0===r&&(r=200),void 0===n&&(n="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=Uj(t||i.scale,o,a);oj(e,s,r,n)}}},Lj=function(e){return function(t,r,n,i){void 0===n&&(n=600),void 0===i&&(i="easeOut"),nj(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,r){var n=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!n||!i)return o;var d=n.getBoundingClientRect(),u=t.getBoundingClientRect(),h=function(e,t,r,n){var i=e.getBoundingClientRect(),o=t.getBoundingClientRect(),a=r.getBoundingClientRect(),s=o.x*n.scale,l=o.y*n.scale;return{x:(i.x-a.x+s)/n.scale,y:(i.y-a.y+l)/n.scale}}(t,n,i,o),g=h.x,p=h.y,f=u.width/o.scale,m=u.height/o.scale,b=n.offsetWidth/f,v=n.offsetHeight/m,y=uj(r||Math.min(b,v),l,c,0,!1),x=(d.width-f*y)/2,w=(d.height-m*y)/2,$=cj((d.left-g)*y+x,(d.top-p)*y+w,aj(e,y),s,0,0,n);return{positionX:$.x,positionY:$.y,scale:y}}(e,a,r);oj(e,s,n,i)}}},Nj=function(e){return{instance:e,zoomIn:Bj(e),zoomOut:Rj(e),setTransform:jj(e),resetTransform:zj(e),centerView:Pj(e),zoomToElement:Lj(e)}},Hj=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,Nj(e)),t};function Wj(){try{return{get passive(){return!1}}}catch(e){return!1}}var Yj=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},Vj=function(e){e&&clearTimeout(e)},Uj=function(e,t,r){var n=r.offsetWidth*e,i=r.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-n)/2,positionY:(t.offsetHeight-i)/2}};function Kj(e,t,r){var n=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-n.left)/r,o=(e.clientY-n.top)/r;else{var a=e.touches[0];i=(a.clientX-n.left)/r,o=(a.clientY-n.top)/r}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var Xj=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},qj=function(e,t){var r=e.props,n=r.onWheel,i=r.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,h=a.disablePadding,g=a.smooth,p=d.size,f=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var r=function(e){return e?e.deltaY<0?1:-1:0}(e),n=function(e,t){return"number"==typeof e?e:t}(t,r);return n}(t,null),y=function(e,t,r,n,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,h=d.size,g=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var p=o+t*r;if(i)return p;var f=!n&&!g;return uj(JR(p,3),c,l,h,f&&!u)}(e,v,g?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=lj(e,y),w=Kj(t,o,s),$=l&&(f||0===p||c||h),C=dj(e,w.x,w.y,y,x,$),S=C.x,k=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,k),ej(Hj(e),t,n),ej(Hj(e),t,i)}},Gj=function(e,t){var r=e.props,n=r.onWheelStop,i=r.onZoomStop;Vj(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(Cj(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var r=e.previousWheelEvent,n=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!r&&(n<o||n>a||Math.sign(r.deltaY)!==Math.sign(t.deltaY)||r.deltaY>0&&r.deltaY<t.deltaY||r.deltaY<0&&r.deltaY>t.deltaY||Math.sign(r.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(Vj(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,ej(Hj(e),t,n),ej(Hj(e),t,i))}),160))},Zj=function(e,t){var r=e.contentComponent,n=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==n&&r){var u=function(e,t,r){var n=r.getBoundingClientRect(),i=e.touches,o=JR(i[0].clientX-n.left,5),a=JR(i[0].clientY-n.top,5);return{x:(o+JR(i[1].clientX-n.left,5))/2/t,y:(a+JR(i[1].clientY-n.top,5))/2/t}}(t,i,r);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var h=Xj(t),g=function(e,t){var r=e.pinchStartScale,n=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!r||null===n||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:uj(JR(t/n*r,2),a,o,c,!d&&!l)}(e,h);if(g!==i){var p=lj(e,g),f=a&&(c||0===d||s),m=dj(e,u.x,u.y,g,p,f),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=h,e.setTransformState(g,b,v)}}}},Qj=function(e,t){var r=e.props.onZoomStop,n=e.setup.doubleClick.animationTime;Vj(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,ej(Hj(e),t,r)}),n)};function Jj(e,t){var r=e.setup,n=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=r.doubleClick,u=d.disabled,h=d.mode,g=d.step,p=d.animationTime,f=d.animationType;if(!u&&!n){if("reset"===h)return function(e,t){var r=e.props,n=r.onZoomStart,i=r.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;ej(Hj(e),t,n),Aj(e,a,s,(function(){return ej(Hj(e),t,i)})),Qj(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(h,e.transformState.scale),b=_j(e,m,g);if(a!==b){ej(Hj(e),t,l);var v=Kj(t,o,a),y=$j(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");ej(Hj(e),t,c),oj(e,y,p,f),Qj(e,t)}}}var ez=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,lj(t,t.transformState.scale),t.setup=Mj(e)},this.initializeWindowEvents=function(){var e,r,n=Wj(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(r=t.wrapperComponent)||void 0===r||r.addEventListener("wheel",t.onWheelPanning,n),null==o||o.addEventListener("mousedown",t.onPanningStart,n),null==o||o.addEventListener("mousemove",t.onPanning,n),null==o||o.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==o||o.addEventListener("keyup",t.setKeyUnPressed,n),null==o||o.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,r,n=Wj(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,n),null==o||o.removeEventListener("mousemove",t.onPanning,n),null==o||o.removeEventListener("mouseup",t.onPanningStop,n),null==i||i.removeEventListener("mouseleave",t.clearPanning,n),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,n),null==o||o.removeEventListener("keydown",t.setKeyPressed,n),document.removeEventListener("mouseleave",t.clearPanning,n),nj(t),null===(r=t.observer)||void 0===r||r.disconnect()},this.handleInitializeWrapperEvents=function(e){var r=Wj();e.addEventListener("wheel",t.onWheelZoom,r),e.addEventListener("dblclick",t.onDoubleClick,r),e.addEventListener("touchstart",t.onTouchPanningStart,r),e.addEventListener("touchmove",t.onTouchPanning,r),e.addEventListener("touchend",t.onTouchPanningStop,r)},this.handleInitialize=function(e){var r=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(Hj(t))})),r&&(t.setCenter(),t.observer=new ResizeObserver((function(){var r,n=e.offsetWidth,i=e.offsetHeight;(n>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(Hj(t))})),t.setCenter(),null===(r=t.observer)||void 0===r||r.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.setup.wheel,n=r.disabled,i=r.wheelDisabled,o=r.touchPadDisabled,a=r.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||n||!c||i&&!t.ctrlKey||o&&t.ctrlKey||Yj(c,a))}(t,e);r&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var r=e.props,n=r.onWheelStart,i=r.onZoomStart;e.wheelStopEventTimer||(nj(e),ej(Hj(e),t,n),ej(Hj(e),t,i))}(t,e),qj(t,e),Gj(t,e))}},this.onWheelPanning=function(e){var r=t.setup,n=r.disabled,i=r.wheel,o=r.panning;if(t.wrapperComponent&&t.contentComponent&&!n&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,h=o.lockAxisY?l:d,g=t.setup.alignmentAnimation,p=g.sizeX,f=g.sizeY,m=fj(t,p),b=fj(t,f);u===s&&h===l||pj(t,u,h,m,b)}},this.onPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;r||hj(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),nj(t),vj(t,e),ej(Hj(t),e,n))},this.onPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;r||gj(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),xj(t,e.clientX,e.clientY),ej(Hj(t),e,n))},this.onPanningStop=function(e){var r=t.props.onPanningStop;t.isPanning&&(wj(t),ej(Hj(t),e,r))},this.onPinchStart=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinchingStart,o=n.onZoomStart;if(!r){var a=function(e,t){var r=e.setup.pinch,n=r.disabled,i=r.excluded,o=e.isInitialized,a=t.target;return!(!o||n||!a||Yj(a,i))}(t,e);a&&(function(e,t){var r=Xj(t);e.pinchStartDistance=r,e.lastDistance=r,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,nj(e)}(t,e),nj(t),ej(Hj(t),e,i),ej(Hj(t),e,o))}},this.onPinch=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinching,o=n.onZoom;if(!r){var a=function(e){var t=e.setup.pinch.disabled,r=e.isInitialized,n=e.pinchStartDistance;return!(!r||t||!n)}(t);a&&(e.preventDefault(),e.stopPropagation(),Zj(t,e),ej(Hj(t),e,i),ej(Hj(t),e,o))}},this.onPinchStop=function(e){var r,n,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(n=(r=t).pinchMidpoint,r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,Cj(r,null==n?void 0:n.x,null==n?void 0:n.y),ej(Hj(t),e,o),ej(Hj(t),e,a))},this.onTouchPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;if(!r&&hj(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,nj(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(nj(t),vj(t,e),ej(Hj(t),e,n)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(r)return;if(!gj(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];xj(t,i.clientX,i.clientY),ej(Hj(t),e,n)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.isInitialized,n=e.setup,i=e.wrapperComponent,o=n.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(r&&l&&c)||a||Yj(l,s))}(t,e);r&&Jj(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,r,n){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(n))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=r,t.transformState.positionY=n,t.applyTransformation();var o=Hj(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),ej(o,{scale:e,positionX:r,positionY:n},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=Uj(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,r,n){return t.props.customTransform?t.props.customTransform(e,r,n):function(e,t,r){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(r,")")}(e,r,n)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,r=e.scale,n=e.positionX,i=e.positionY,o=t.handleTransformStyles(n,i,r);t.contentComponent.style.transform=o}},this.getContext=function(){return Hj(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,r){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=r,lj(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(r),t.initializeWindowEvents(),t.isInitialized=!0;var n=Hj(t);ej(n,void 0,t.props.onInit)},this.props=e,this.setup=Mj(this.props),this.transformState=Oj(this.props)},tz=i.createContext(null),rz=i.forwardRef((function(e,t){var r=o(new ez(e)).current,n=function(e,t){return"function"==typeof e?e(t):e}(e.children,Nj(r));return v(t,(function(){return Nj(r)}),[r]),u((function(){r.update(e)}),[r,e]),i.createElement(tz.Provider,{value:r},n)}));i.forwardRef((function(e,t){var r,n=o(null),a=f(tz);return u((function(){return a.onChange((function(e){if(n.current){n.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),i.createElement("div",Sj({},e,{ref:(r=[n,t],function(e){r.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var nz="transform-component-module_wrapper__SPB86",iz="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var oz=function(e){var t=e.children,r=e.wrapperClass,n=void 0===r?"":r,a=e.contentClass,s=void 0===a?"":a,l=e.wrapperStyle,c=e.contentStyle,d=e.wrapperProps,h=void 0===d?{}:d,g=e.contentProps,p=void 0===g?{}:g,m=f(tz),b=m.init,v=m.cleanupWindowEvents,y=o(null),x=o(null);return u((function(){var e=y.current,t=x.current;return null!==e&&null!==t&&b&&(null==b||b(e,t)),function(){null==v||v()}}),[]),i.createElement("div",Sj({},h,{ref:y,className:"react-transform-wrapper ".concat(nz," ").concat(n),style:l}),i.createElement("div",Sj({},p,{ref:x,className:"react-transform-component ".concat(iz," ").concat(s),style:c}),t))};const az=M.div`
    background-color: ${Ic["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${Ic["icon-subtle"]};
    }
`,sz=t=>e(az,Object.assign({},t,{children:e(ie,{})})),lz=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,cz=M.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,dz=M(sz)`
    width: 100%;
    height: 100%;
`,uz=({src:t,className:r,alt:n,fit:i,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=a(!0),[h,g]=a();u((()=>{d(!0),g(void 0);const e=new Image;e.src=t,e.onload=()=>{s&&l&&l({src:t,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),g(e)}}),[t]);return e(lz,{className:r,children:h?null!=o?o:e(dz,{}):c?e(gu,{}):e(cz,{src:t,alt:n,$fit:i})})},hz=M(ad)`
    padding: 0;
    border-radius: 100%;
    background: ${Ic.bg};
    color: ${Ic["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,gz=M(hz)`
    position: absolute;
    top: ${jc["spacing-48"]};
    right: ${jc["spacing-48"]};
    z-index: 5;

    ${Lc.MaxWidth.sm} {
        top: ${jc["spacing-20"]};
        right: ${jc["spacing-20"]};
    }
`,pz=M(hz)`
    position: absolute;
    top: ${jc["spacing-48"]};
    right: calc(
        2.5rem + ${jc["spacing-48"]} + ${jc["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${Lc.MaxWidth.sm} {
        top: ${jc["spacing-20"]};
        right: calc(
            2.5rem + ${jc["spacing-20"]} + ${jc["spacing-16"]}
        );
    }
`,fz=M(hz)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&_`
            left: ${jc["spacing-48"]};
            ${Lc.MaxWidth.sm} {
                left: ${jc["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&_`
            right: ${jc["spacing-48"]};
            ${Lc.MaxWidth.sm} {
                right: ${jc["spacing-20"]};
            }
        `}
`,mz=M.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,bz=M.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,vz=M.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,yz=M.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,xz=M.div`
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
`,wz=M(uz)`
    height: 100%;
    width: 100%;
    border-radius: ${zc.none};
`,$z=M(sz)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    border-radius: ${zc.none};
    aspect-ratio: 4 / 3;
`,Cz=M.div`
    display: flex;
    justify-content: center;
    padding: ${jc["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,Sz=M(ud.BodyXS)`
    display: inline-flex;
    padding: ${jc["spacing-4"]} ${jc["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${zc.full};
    background-color: ${Ic.bg};
    text-align: center;
`,kz=M.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${Ic["bg-inverse"]};
    padding: ${jc["spacing-24"]} ${jc["spacing-16"]};

    ${Lc.MaxWidth.sm} {
        padding: ${jc["spacing-16"]} ${jc["spacing-20"]};
    }
`,Dz=M.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${jc["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,Ez=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${Lc.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,Tz=M.div`
    cursor: pointer;
    background-color: ${Ic["bg-inverse"]};
    border-radius: ${zc.md};
    border: ${Rc.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${Lc.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${e=>e.$active?_`
                  border-width: ${Rc["width-040"]};
                  border-color: ${Ic["border-selected"]};

                  ${Lc.MaxWidth.sm} {
                      border-width: ${Rc["width-020"]};
                  }

                  :hover {
                      border-color: ${Ic["border-selected-hover"]};
                  }
              `:_`
                  border-width: ${Rc["width-010"]};

                  :hover {
                      border-color: ${Ic["border-hover"]};
                  }
              `};
`,Fz=M(uz)`
    height: 100%;
    width: 100%;
`,Oz=(n,i)=>{var{items:s,initialActiveItemIndex:l,hideThumbnail:c=!1,hideNavigation:d=!1,hideCounter:h=!1,hideMagnifier:g=!1,onClose:p}=n,f=Vo(n,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[m,b]=a(null!=l?l:0),[y,x]=a({}),[w,$]=a(1),[C,S]=a(),[k,D]=a(),E=o(null),T=o([]),F=o([]),O=C&&k?C-k:0;v(i,(()=>({currentItemIndex:m,setCurrentItem:R,goToPrevItem:A,goToNextItem:B}))),lh("keydown",(function(e){"ArrowRight"===e.key?B():"ArrowLeft"===e.key?A():"Escape"===e.key&&p&&p()}),"document"),u((()=>{var e,t;null===(t=null===(e=T.current)||void 0===e?void 0:e[m])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),$(1)}),[m]);const M=e=>{$(e.state.scale)};const _=({src:e,height:t,width:r})=>{x((n=>Object.assign(Object.assign({},n),{[e]:{height:t,width:r}})))},I=()=>{const e=y[s[m].src];if(E.current&&e){const{clientHeight:t,clientWidth:r}=E.current,{width:n,height:i}=e,o=i/n<t/r;return n<r&&i<t?o?r/n:t/i:o?t/(i/(n/r)):r/(n/(i/t))}},A=()=>{var e,t;null===(t=null===(e=F.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),b((e=>0===e?s.length-1:e-1))},B=()=>{var e,t;null===(t=null===(e=F.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),b((e=>e===s.length-1?0:e+1))},R=e=>{var t,r;null===(r=null===(t=F.current)||void 0===t?void 0:t[m])||void 0===r||r.resetTransform(),b(e)};return t(zm,Object.assign({},f,{"data-testid":"image-carousel-modal",children:[e(gz,{"aria-label":"Close image carousel",onClick:p,focusHighlight:!1,children:e(re,{"aria-hidden":!0})}),!g&&e(pz,{"aria-label":1===w?"Zoom in":"Zoom out",onClick:()=>{var e,t,r,n;if(1===w){const r=I();null===(t=null===(e=F.current)||void 0===e?void 0:e[m])||void 0===t||t.centerView(r),$(null!=r?r:1)}else $(1),null===(n=null===(r=F.current)||void 0===r?void 0:r[m])||void 0===n||n.resetTransform()},focusHighlight:!1,children:e(1===w?oe:ae,{"aria-hidden":!0})}),t(mz,{children:[t(bz,{children:[!d&&t(r,{children:[e(fz,{"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:A,children:e(se,{"aria-hidden":!0})}),e(fz,{"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:B,children:e(le,{"aria-hidden":!0})})]}),e(vz,{ref:E,onTouchStart:e=>{w<=1&&S(e.touches[0].clientX)},onTouchMove:e=>{!C||w>1||D(e.touches[0].clientX)},onTouchEnd:()=>{E.current&&(Math.abs(O)>E.current.offsetWidth/3&&(O>0?B():A()),S(void 0),D(void 0))},children:e(yz,{style:{transform:`translateX(calc(${100*-m}% - ${O}px))`},children:s.map(((t,r)=>{var n;return e(xz,{"data-testid":"slide-item",children:e(rz,{ref:e=>F.current[r]=e,panning:{disabled:w<=1},initialScale:1,onZoom:M,onZoomStop:M,onWheel:M,children:e(oz,{children:e(wz,{src:t.src,alt:null!==(n=t.alt)&&void 0!==n?n:`Image ${r+1}`,placeholder:e($z,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:_})})})},r)}))})}),!h&&e(Cz,{children:e(Sz,{weight:"semibold",children:`${m+1}/${s.length}`})})]}),!c&&e(kz,{children:e(Dz,{children:s.map(((t,r)=>{var n;const i=null!==(n=t.thumbnailSrc)&&void 0!==n?n:t.src;return e(Ez,{children:e(Tz,{"data-testid":"thumbnail-item",$active:r===m,onClick:()=>R(r),ref:e=>T.current[r]=e,children:e(Fz,{src:i,alt:`Thumbnail ${r+1}`,fit:"cover"})})},r)}))})})]})]}))},Mz=g(Oz),_z=M.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${Ic.bg};
    border: ${Rc["width-010"]} ${Rc.solid} transparent;
    border-radius: ${zc.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${Bc["duration-250"]} ${Bc["ease-default"]};
    ${Ac["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?Ic["text-primary"]:Ic.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${Lc.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${Ac["body-md-semibold"]}
    }

    ${e=>e.$error?_`
                background: ${Ic.bg};
                border: ${Rc["width-010"]} ${Rc.solid}
                    ${Ic["border-error"]};
            `:e.$selected?_`
                background: ${Ic["bg-selected"]};
                border: ${Rc["width-010"]} ${Rc.solid}
                    ${Ic["border-selected"]};

                &:hover {
                    background: ${Ic["bg-selected-hover"]};
                    border: ${Rc["width-010"]} ${Rc.solid}
                        ${Ic["border-selected-hover"]};
                }
            `:_`
                &:hover {
                    border: ${Rc["width-010"]} ${Rc.solid}
                        ${Ic["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${Rc["width-010"]} ${Rc.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${Ic["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,Iz=i.forwardRef(((r,n)=>{var{children:i,imgSrc:o,selected:a,error:s,type:l="button"}=r,c=Vo(r,["children","imgSrc","selected","error","type"]);return t(_z,Object.assign({ref:n,$selected:a,$error:s,type:l},c,{children:[e(Ob,{src:o}),i]}))})),Az=_`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Ic["icon-primary"]};
`,Bz=M.div`
    border-top: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
`,Rz=M(ud.HeadingSM).attrs({as:"div"})`
    color: ${Ic["text-primary"]};
    margin-bottom: 0.5rem;
`,jz=M(ud.HeadingXS).attrs({as:"div"})`
    color: ${Ic["text-primary"]};
`,zz=M(ye)`
    ${Az}
`,Pz=M.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    }

    :hover {
        ${Rz},
        ${jz},
        ${zz} {
            color: ${Ic["text-hover"]};
        }
    }
`,Lz=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,Nz=M(ud.BodyMD)`
    margin-top: 0.25rem;
`,Hz=M(Ho.div)`
    overflow: hidden;
`,Wz=M.div`
    border-top: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
`,Yz=M(ud.BodyMD).attrs({as:"span"})`
    color: ${Ic["text-primary"]};
    margin-right: 1rem;
`,Vz=M(ot)`
    ${Az}
`,Uz=M(it)`
    ${Az}
`,Kz=M.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};

    :hover {
        ${Yz},
        ${Vz},
        ${Uz} {
            color: ${Ic["text-hover"]};
        }
    }
`,Xz=n=>{var{items:i,maxShown:o,style:s="default",onItemClick:l}=n,c=Vo(n,["items","maxShown","style","onItemClick"]);const[d,u]=a(!o||o>=i.length),h=o?i.slice(0,o):i,g=o?i.slice(o):[],p=lr(),f=p.ref,m=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):l&&(e.preventDefault(),l(t,e))},b=()=>{u(!d)},v=(n,i,o,a)=>t(r,{children:[t(Lz,{children:[e("small"===s?jz:Rz,{"data-testid":`link-title-${n}`,weight:"semibold",children:i}),o&&e(Nz,{"data-testid":`link-description-${n}`,children:o}),a]}),e(zz,{})]}),y=So({height:d?p.height:0});return t(Bz,Object.assign({},c,{children:[h.map(((t,r)=>{const{title:n,description:i,secondaryDescription:o,onClick:a}=t,s=Vo(t,["title","description","secondaryDescription","onClick"]);return e(Pz,Object.assign({"data-testid":`list-item-shown-${r}`,onClick:e=>m(e,t)},s,{children:v(r,n,i,o)}),`list-item-shown-${r}`)})),g.length>0&&e(Hz,{style:y,"data-testid":"minimised-content",children:e(Wz,{ref:f,children:g.map(((t,r)=>{const{title:n,description:i,onClick:o,secondaryDescription:a}=t,s=Vo(t,["title","description","onClick","secondaryDescription"]);return e(Pz,Object.assign({"data-testid":`list-item-minimised-${r}`,onClick:e=>m(e,t)},s,{children:v(r,n,i,a)}),`list-item-minimised-${r}`)}))})}),g.length>0&&t(Kz,{type:"button",onClick:b,"data-testid":"toggle-button",$showMinimised:d,children:[e(Yz,{weight:"semibold","data-testid":"toggle-button-label",children:d?"View less":"View more"}),e(d?Uz:Vz,{})]})]}))},qz=M.div`
    ${e=>Jd({textSize:e.$textSize})}
    ${e=>e.$textColor&&_`
            color: ${e.$textColor};
        `}
`,Gz=g(((t,r)=>{const{baseTextColor:n,baseTextSize:i,inline:o}=t,a=Vo(t,["baseTextColor","baseTextSize","inline"]);return e(qz,Object.assign({ref:r,as:o?"span":"div",$textSize:i,$textColor:n},a))})),Zz=M.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,n=t.sm?t.sm<=2?t.sm:2:void 0,i=t.md||t.sm||2;return _`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${um.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/i}% - 2rem), 1fr)
                );
            }

            ${um.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${n||"auto-fill"},
                    minmax(calc(${100/(n||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,Qz=M.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:n,colsMd:i,startSm:o,colsSm:a}=e;return _`
            grid-column: ${t||n||"auto"} / span
                ${r||i||1};

            ${um.MaxWidth.tablet} {
                grid-column: ${n||o||"auto"} / span
                    ${i||a||1};
            }

            ${um.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span ${a||1};
            }
        `}}
`,Jz={Grid:i.forwardRef(((t,r)=>{const{children:n}=t,i=Vo(t,["children"]);return e(Zz,Object.assign({ref:r},i,{children:n}))})),Tile:i.forwardRef(((t,r)=>{const{children:n}=t,i=Vo(t,["children"]);return e(Qz,Object.assign({ref:r},i,{children:n}))}))},eP=M.div`
    // matches Layout.Container
    ${e=>e.$stretch?_`
                --sgds-mainnav-padding-x: ${Pc["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${Pc["xxl-margin"]}px;
            `:_`
                --sgds-mainnav-max-width: 1440px;

                --sgds-mainnav-padding-x: ${Pc["xxl-margin"]}px;
                --sgds-mainnav-mobile-padding-x: ${Pc["xxl-margin"]}px;

                ${Lc.MaxWidth.xl} {
                    --sgds-mainnav-padding-x: ${Pc["xl-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Pc["xl-margin"]}px;
                }

                ${Lc.MaxWidth.lg} {
                    --sgds-mainnav-padding-x: ${Pc["lg-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Pc["lg-margin"]}px;
                }

                ${Lc.MaxWidth.md} {
                    --sgds-mainnav-padding-x: ${Pc["md-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Pc["md-margin"]}px;
                }

                ${Lc.MaxWidth.sm} {
                    --sgds-mainnav-padding-x: ${Pc["sm-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Pc["sm-margin"]}px;
                }

                ${Lc.MaxWidth.xs} {
                    --sgds-mainnav-padding-x: ${Pc["xs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Pc["xs-margin"]}px;
                }

                ${Lc.MaxWidth.xxs} {
                    --sgds-mainnav-padding-x: ${Pc["xxs-margin"]}px;
                    --sgds-mainnav-mobile-padding-x: ${Pc["xxs-margin"]}px;
                }
            `}
`,tP=({stretch:t=!1})=>{u((()=>{r()||n()}),[]);const r=()=>document.getElementById(rP),n=()=>{if(!document.getElementById(rP)){const e=document.createElement("script");e.id=rP,e.type="module",e.src=nP,document.head.appendChild(e)}};return e(eP,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"},$stretch:t})},rP="lifesg-ds-masthead-script",nP="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",iP={notCompress:6,compress:4},oP=M.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: ${Ic.bg};
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,aP=M.nav`
    height: ${e=>e.$compress?iP.compress:iP.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Bc["duration-350"]} ${Bc["ease-standard"]};

    ${Lc.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,sP=M.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${Lc.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,lP=M(ad)`
    display: none;

    ${Lc.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,cP=M(at)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ic.icon};
`,dP=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${Lc.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${Lc.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,uP=M.div`
    display: flex;
    background-color: ${Ic.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${Lc.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${Lc.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,hP=M.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Bc["duration-150"]} ${Bc["ease-default"]};
        object-fit: contain;
    }
`,gP=({resources:t,onClick:r,"data-id":n,"data-testid":i="navbar-brand",type:o})=>e(hP,{role:"link",onClick:e=>{r&&r(e,o)},tabIndex:0,"data-id":n,"data-testid":i,$type:o,children:e(Ob,{src:t.logoSrc,alt:t.brandName})}),pP=M.div`
    display: none;

    ${Lc.MaxWidth.lg} {
        display: flex;
    }
`,fP=M.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${jc["spacing-16"]};
    background-color: ${Ic.bg};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?_`
            right: 0;
            transition: all 300ms ${Bc["ease-entrance"]};
            transition-delay: 200ms;
        `:_`
        right: -100%;
        transition: all 300ms ${Bc["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return _`
            height: calc(${t} * 100);
        `}}

	${Lc.MaxWidth.lg} {
        width: 75%;
    }

    ${Lc.MaxWidth.sm} {
        width: 100%;
    }
`,mP=M.div`
    display: flex;
    flex-direction: column;
`,bP=M.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${jc["spacing-40"]} ${jc["spacing-20"]}
        ${jc["spacing-32"]};
`,vP=M(Pe)`
    height: 1.5rem;
    width: 1.5rem;
`,yP=M(ad)`
    position: absolute;
    right: -${jc["spacing-4"]};
    color: ${Ic.icon};

    :active,
    :focus {
        color: ${Ic["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,xP=i.forwardRef(((n,i)=>{const{show:o,resources:s={},children:l,hideNavBranding:c,onClose:d,onBrandClick:h}=n,[g,p]=a(0),{primary:f,secondary:m}=s;u((()=>(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=()=>{if(window){const e=.01*window.innerHeight;p(e)}};return e(pP,{ref:i,"data-testid":"drawer",children:e(fP,{$show:o,$viewHeight:g,children:t(mP,{children:[t(bP,{children:[e(dP,{"data-id":"drawer-brand-container",children:!c&&t(r,{children:[f&&e(gP,{resources:f,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&t(r,{children:[e(uP,{}),e(gP,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e(yP,{onClick:d,focusHighlight:!1,"aria-label":"Close nav menu",children:e(vP,{})})]}),l]})})})})),wP=M.ul`
    display: flex;
    list-style: none;
    margin-left: ${jc["spacing-64"]};
    flex-shrink: 0;

    ${Lc.MaxWidth.lg} {
        display: none;
    }
`,$P=M.ul`
    display: none;

    ${Lc.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${jc["spacing-64"]};
        flex-shrink: 0;
    }
`,CP=M.ul`
    display: none;
    list-style: none;

    ${Lc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${jc["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${Lc.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,SP=M.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${jc["spacing-16"]};
    }

    ${Lc.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${jc["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?jc["spacing-16"]:"0"};
        }
    }

    ${Lc.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return _`
                    padding: 0 ${jc["spacing-16"]};
                `}}
    }
`,kP=M(Kd.Small)`
    ${Lc.MaxWidth.lg} {
        width: 100%;
    }
`,DP=M.div`
    display: none;

    ${Lc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${jc["spacing-40"]};
    }
`,EP=M(ud.BodyMD)`
    margin-bottom: ${jc["spacing-8"]};
`,TP=M.div`
    display: flex;
`,FP=M.a`
    :not(:last-child) {
        margin-right: ${jc["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${Lc.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${Lc.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,OP=({actionButtons:n,mobile:i=!1,onActionButtonClick:o})=>{const a=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(t,e)},l=(r,n)=>{const i=r?(e=>{const t=SD(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(n):n;return i.map(((n,i)=>{let o;switch(n.type){case"download":o=r?(l=n.args,t(DP,{children:[e(EP,{weight:"semibold",children:l&&l.children||"Download the app"}),t(TP,{children:[e(FP,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e(FP,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a,children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e(kP,Object.assign({},n.args,{type:"button",onClick:s(n),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const t=n.args["data-testid"]?`action-button__${n.args["data-testid"]}`:`action-button__button-${r?"mobile-":""}${i+1}`;o=e(kP,Object.assign({},n.args,{type:"button",onClick:s(n),"data-testid":t}));break}case"component":{const e=n.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return e(SP,{$mobile:r,children:o},`action-button-${i+1}`)}))};if(n){const o=(null==n?void 0:n.mobile)||n.desktop,a=o.filter((e=>!!e.uncollapsible)),s=o.filter((e=>!e.uncollapsible));return i?e(r,{children:s.length>0&&e(CP,{children:l(i,s)})}):t(r,{children:[a.length>0&&e($P,{children:l(!1,a)}),n.desktop.length>0&&e(wP,{children:l(i,n.desktop)})]})}return e(r,{})};var MP;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const t=e;return!t.itemType||"link"===t.itemType}}(MP||(MP={}));const _P=M.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${jc["spacing-8"]} 0;

    background: ${Ic.bg};
    border-radius: ${zc.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${Ic.Primitive["neutral-50"]} r g b / 25%);
`,IP=M.ul`
    display: none;
    list-style: none;

    ${Lc.MaxWidth.lg} {
        border-left: ${Rc["width-040"]} solid ${Ic["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,AP=M(ud.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${Ic.text};

    margin: 0 ${jc["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${Rc.solid} transparent;
    border-width: ${jc["spacing-12"]} ${jc["spacing-8"]};

    border-radius: ${zc.md};

    ${sd(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${Ic["bg-hover"]};
        color: ${Ic.text};
    }

    ${Lc.MaxWidth.lg} {
        ${Ac["body-md-regular"]}
    }
`,BP=M.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,RP=({items:t,mobile:n=!1,onItemClick:i})=>{const o=e=>t=>{t.stopPropagation(),i(t,e)},a=(r=!1)=>t.map(((t,n)=>{const{children:i,options:a}=t,s=Vo(t,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return e(BP,{children:e(AP,Object.assign({"data-testid":l},s,{onClick:o(t)},a,{children:i}))},n)}));if(t&&t.length>0){return e(n?IP:_P,{children:a(n)})}return e(r,{})},jP=M.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${Lc.MaxWidth.lg} {
        display: none;
    }
`,zP=M.ul`
    display: none;
    list-style: none;

    ${Lc.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,PP=M.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${Lc.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,LP=M(ud.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Ic.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?Ic["text-selected-hover"]:Ic["text-hover"]};
    }

    ${Lc.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,NP=M.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,HP=M.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Ic["border-selected"]};

    :hover {
        ${e=>e.$selected&&Ic["border-selected-hover"]};
    }

    ${Lc.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,WP=M.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,YP=M(ad)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,VP=M(j)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Ic.icon};
    :hover {
        ${e=>e.$selected?Ic["icon-selected-hover"]:Ic["icon-hover"]};
    }
`,UP=({items:n,selectedId:i,mobile:s=!1,hideNavBranding:l,onItemClick:c})=>{const[d,h]=a(-1),[g,p]=a(!1),f=o(null);u((()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{p(!1)},b=(e,t)=>r=>{r.stopPropagation(),h(t),p(!0),c(r,e)},v=(e,t)=>{e.stopPropagation(),c(e,t),p(!1)},y=()=>n.map(((r,n)=>{if("component"===r.itemType){const t=r&&r.children||null;return e("li",{children:t},n)}{const o=(e=>{if(e.id===i)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(r),{children:a,options:c}=r,u=Vo(r,["children","options"]),h=o?s?"bold":"semibold":"regular",p=s?`link__mobile-${n+1}`:`link__${n+1}`,f=d>=0&&d===n&&g;return t(PP,{$hiddenBranding:l,children:[t(LP,Object.assign({"data-testid":p,weight:h,$selected:o},u,{onClick:b(r,n)},c,{children:[e(NP,{children:a}),o&&e(HP,{"data-testid":`${p}-indicator`,$selected:o}),s&&r.subMenu&&e(WP,{children:e(YP,{"data-testid":`${p}-expand-collapse-button`,$selected:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand",children:e(VP,{$selected:o})})})]})),f&&r.subMenu&&e(RP,{items:r.subMenu,mobile:s,onItemClick:v})]},n)}}));return n&&n.length>0?s?e(zP,{ref:f,children:y()}):e(jP,{ref:f,$alignLeft:l,children:y()}):e(r,{})},KP={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},XP={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},qP={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},GP={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},ZP=g(((n,i)=>{var{items:s,className:l,id:c,selectedId:d,compress:h=!1,fixed:g=!0,resources:p,hideNavElements:f=!1,hideNavBranding:m=!1,drawerDismissalExclusions:b=[],actionButtons:y,onItemClick:x,onActionButtonClick:w,onBrandClick:$,masthead:C=!0,layout:S="default"}=n,k=Vo(n,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[D,E]=a(!1),[T,F]=a(!1),O="stretch"===S,M=o(null),_=R(),I=(e=>{switch(e){case"bookingsg":return XP;case"mylegacy":return GP;case"ccube":return qP;default:return KP}})(null==_?void 0:_.resourceScheme),A=Pc["lg-max"]({theme:_}),B=(null==p?void 0:p.primary)||I.primary,j=null==p?void 0:p.secondary;v(i,(()=>Object.assign(M.current,{dismissDrawer:()=>{z()}})),[D]),u((()=>(L(),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)})),[]);const z=()=>{E(!1),setTimeout((()=>{F(!1)}),550)},P=e=>D&&-1===b.indexOf(e),L=()=>{window.innerWidth<=A&&D&&z()},N=(e,t)=>{$&&(e.preventDefault(),$(t)),P("brand-click")&&z()},H=(e,t)=>{MP.isNavItemCommon(t)&&t.onClick?t.onClick(e):x&&(e.preventDefault(),x(t)),MP.isNavItemLink(t)&&!t.subMenu&&P("item-click")&&z()},W=(e,t)=>{var r;"button"!==t.type&&"download"!==t.type||!(null===(r=t.args)||void 0===r?void 0:r.onClick)?w&&(e.preventDefault(),w(t)):t.args.onClick(e),P("item-click")&&z()},Y=()=>{E(!0),F(!0)},V=()=>{P("close-button-click")&&z()},U=()=>{const t=s.mobile||s.desktop;return t&&t.length>0||y&&(e=>{const t=e.mobile||e.desktop;return!!t&&t.length&&t.some((e=>!e.uncollapsible))})(y)?e(lP,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:Y,focusHighlight:!1,children:e(cP,{})}):null};return t(oP,{ref:M,$fixed:g,className:l,id:c||"navbar-wrapper","data-testid":k["data-testid"]||"navbar-wrapper",children:[C&&e(tP,{stretch:O}),t(LR.Content,{stretch:O,children:[t(aP,{$compress:h,children:[!m&&t(dP,{$compress:h,"data-id":"brand-container",children:[B&&e(gP,{resources:B,onClick:N,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),j&&t(r,{children:[e(uP,{$compress:h}),e(gP,{resources:j,onClick:N,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!f&&t(sP,{$hideNavBranding:m,children:[e(UP,{items:s.desktop,onItemClick:H,selectedId:d,hideNavBranding:m}),e(OP,{actionButtons:y,onActionButtonClick:W}),U()]})]}),!f&&e($m,{show:T,enableOverlayClick:!0,onOverlayClick:V,children:t(xP,{show:D,resources:{primary:B,secondary:j},onClose:V,onBrandClick:N,actionButtons:y,hideNavBranding:m,children:[e(UP,{items:s.mobile||s.desktop,onItemClick:H,selectedId:d,mobile:!0}),e(OP,{actionButtons:y,onActionButtonClick:W,mobile:!0})]})})]})]})})),QP=iP,JP=3.5,eL=_`
    color: ${Ic["hyperlink-inverse"]};

    svg {
        color: ${Ic["icon-primary-inverse"]};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Ic["hyperlink-inverse"]};
        svg {
            color: ${Ic["icon-primary-inverse"]};
        }
    }
`,tL=M.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${Bc["duration-800"]} ${Bc["ease-default"]};
    background: ${Ic["bg-inverse-subtle"]};
    border-radius: ${zc.none};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,rL=M(LR.Content)`
    display: flex;
`,nL=M.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,iL=M.div`
    display: inline-block;
    width: 100%;

    ${Ac["body-baseline-regular"]}
    color: ${Ic["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${Ac["body-baseline-semibold"]}
        color: ${Ic["text-inverse"]};
    }

    a {
        ${Ac["body-baseline-regular"]}
        ${eL}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return _`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,oL=M(ud.LinkBL)`
    position: relative;

    ${eL}
`,aL=M(ad)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,sL=M(Pe)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Ic["icon-inverse"]};
`,lL=M.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${Ic["hyperlink-inverse"]};
    ${Ac["body-md-semibold"]};

    cursor: pointer;
`,cL=M.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,dL=r=>{var{children:n,visible:i=!0,dismissible:o=!0,sticky:s=!0,onDismiss:l,id:c,forwardedRef:d,maxCollapsedHeight:h,onClick:g,actionButton:p}=r,f=Vo(r,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const m=f["data-testid"],[b,v]=a(i),{height:y=0,ref:x}=lr();u((()=>{v(i)}),[i]);const w=e=>{e.stopPropagation(),v(!1),o&&l&&l()},$=e=>{(null==p?void 0:p.onClick)&&(e.stopPropagation(),p.onClick(e))};if(!b)return null;return t(tL,Object.assign({ref:d,$sticky:s,$clickable:!!g,onClick:g},f,{children:[t(rL,{id:uL("container",c),children:[t(nL,{children:[e(iL,{"data-testid":uL("text-content",m),$maxCollapsedHeight:h&&y>h?h:void 0,children:e("div",{ref:x,children:n})}),p?e(lL,Object.assign({id:uL("action-button",c),"data-testid":uL("action-button",m),type:"button"},p,{onClick:$,children:p.children})):null]}),o&&e(aL,{onClick:w,id:uL("dismiss-button",c),"data-testid":uL("dismiss-button",m),focusHighlight:!1,type:"button","aria-label":"Dismiss notification",children:e(sL,{"aria-hidden":!0})})]}),g&&e(cL,{"aria-label":"Clickable banner",type:"button"})]}))},uL=(e,t="wrapper")=>`${t}-${e}`,hL=i.forwardRef(((t,r)=>e(dL,Object.assign({},t,{forwardedRef:r}))));hL.displayName="NotificationBanner";const gL=Object.assign(hL,{Link:oL}),{entries:pL,setPrototypeOf:fL,isFrozen:mL,getPrototypeOf:bL,getOwnPropertyDescriptor:vL}=Object;
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */let{freeze:yL,seal:xL,create:wL}=Object,{apply:$L,construct:CL}="undefined"!=typeof Reflect&&Reflect;yL||(yL=function(e){return e}),xL||(xL=function(e){return e}),$L||($L=function(e,t,r){return e.apply(t,r)}),CL||(CL=function(e,t){return new e(...t)});const SL=PL(Array.prototype.forEach),kL=PL(Array.prototype.lastIndexOf),DL=PL(Array.prototype.pop),EL=PL(Array.prototype.push),TL=PL(Array.prototype.splice),FL=PL(String.prototype.toLowerCase),OL=PL(String.prototype.toString),ML=PL(String.prototype.match),_L=PL(String.prototype.replace),IL=PL(String.prototype.indexOf),AL=PL(String.prototype.trim),BL=PL(Object.prototype.hasOwnProperty),RL=PL(RegExp.prototype.test),jL=(zL=TypeError,function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return CL(zL,t)});var zL;function PL(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return $L(e,t,n)}}function LL(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:FL;fL&&fL(e,null);let n=t.length;for(;n--;){let i=t[n];if("string"==typeof i){const e=r(i);e!==i&&(mL(t)||(t[n]=e),i=e)}e[i]=!0}return e}function NL(e){for(let t=0;t<e.length;t++){BL(e,t)||(e[t]=null)}return e}function HL(e){const t=wL(null);for(const[r,n]of pL(e)){BL(e,r)&&(Array.isArray(n)?t[r]=NL(n):n&&"object"==typeof n&&n.constructor===Object?t[r]=HL(n):t[r]=n)}return t}function WL(e,t){for(;null!==e;){const r=vL(e,t);if(r){if(r.get)return PL(r.get);if("function"==typeof r.value)return PL(r.value)}e=bL(e)}return function(){return null}}const YL=yL(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),VL=yL(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),UL=yL(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),KL=yL(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),XL=yL(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),qL=yL(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),GL=yL(["#text"]),ZL=yL(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),QL=yL(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),JL=yL(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),eN=yL(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),tN=xL(/\{\{[\w\W]*|[\w\W]*\}\}/gm),rN=xL(/<%[\w\W]*|[\w\W]*%>/gm),nN=xL(/\$\{[\w\W]*/gm),iN=xL(/^data-[\-\w.\u00B7-\uFFFF]+$/),oN=xL(/^aria-[\-\w]+$/),aN=xL(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),sN=xL(/^(?:\w+script|data):/i),lN=xL(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),cN=xL(/^html$/i),dN=xL(/^[a-z][.\w]*(-[.\w]+)+$/i);var uN=Object.freeze({__proto__:null,ARIA_ATTR:oN,ATTR_WHITESPACE:lN,CUSTOM_ELEMENT:dN,DATA_ATTR:iN,DOCTYPE_NAME:cN,ERB_EXPR:rN,IS_ALLOWED_URI:aN,IS_SCRIPT_OR_DATA:sN,MUSTACHE_EXPR:tN,TMPLIT_EXPR:nN});const hN=1,gN=3,pN=7,fN=8,mN=9,bN=function(){return"undefined"==typeof window?null:window};var vN=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bN();const r=t=>e(t);if(r.version="3.2.5",r.removed=[],!t||!t.document||t.document.nodeType!==mN||!t.Element)return r.isSupported=!1,r;let{document:n}=t;const i=n,o=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:h,DOMParser:g,trustedTypes:p}=t,f=c.prototype,m=WL(f,"cloneNode"),b=WL(f,"remove"),v=WL(f,"nextSibling"),y=WL(f,"childNodes"),x=WL(f,"parentNode");if("function"==typeof s){const e=n.createElement("template");e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let w,$="";const{implementation:C,createNodeIterator:S,createDocumentFragment:k,getElementsByTagName:D}=n,{importNode:E}=i;let T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};r.isSupported="function"==typeof pL&&"function"==typeof x&&C&&void 0!==C.createHTMLDocument;const{MUSTACHE_EXPR:F,ERB_EXPR:O,TMPLIT_EXPR:M,DATA_ATTR:_,ARIA_ATTR:I,IS_SCRIPT_OR_DATA:A,ATTR_WHITESPACE:B,CUSTOM_ELEMENT:R}=uN;let{IS_ALLOWED_URI:j}=uN,z=null;const P=LL({},[...YL,...VL,...UL,...XL,...GL]);let L=null;const N=LL({},[...ZL,...QL,...JL,...eN]);let H=Object.seal(wL(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,Y=null,V=!0,U=!0,K=!1,X=!0,q=!1,G=!0,Z=!1,Q=!1,J=!1,ee=!1,te=!1,re=!1,ne=!0,ie=!1,oe=!0,ae=!1,se={},le=null;const ce=LL({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let de=null;const ue=LL({},["audio","video","img","source","image","track"]);let he=null;const ge=LL({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),pe="http://www.w3.org/1998/Math/MathML",fe="http://www.w3.org/2000/svg",me="http://www.w3.org/1999/xhtml";let be=me,ve=!1,ye=null;const xe=LL({},[pe,fe,me],OL);let we=LL({},["mi","mo","mn","ms","mtext"]),$e=LL({},["annotation-xml"]);const Ce=LL({},["title","style","font","a","script"]);let Se=null;const ke=["application/xhtml+xml","text/html"];let De=null,Ee=null;const Te=n.createElement("form"),Fe=function(e){return e instanceof RegExp||e instanceof Function},Oe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Ee||Ee!==e){if(e&&"object"==typeof e||(e={}),e=HL(e),Se=-1===ke.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,De="application/xhtml+xml"===Se?OL:FL,z=BL(e,"ALLOWED_TAGS")?LL({},e.ALLOWED_TAGS,De):P,L=BL(e,"ALLOWED_ATTR")?LL({},e.ALLOWED_ATTR,De):N,ye=BL(e,"ALLOWED_NAMESPACES")?LL({},e.ALLOWED_NAMESPACES,OL):xe,he=BL(e,"ADD_URI_SAFE_ATTR")?LL(HL(ge),e.ADD_URI_SAFE_ATTR,De):ge,de=BL(e,"ADD_DATA_URI_TAGS")?LL(HL(ue),e.ADD_DATA_URI_TAGS,De):ue,le=BL(e,"FORBID_CONTENTS")?LL({},e.FORBID_CONTENTS,De):ce,W=BL(e,"FORBID_TAGS")?LL({},e.FORBID_TAGS,De):{},Y=BL(e,"FORBID_ATTR")?LL({},e.FORBID_ATTR,De):{},se=!!BL(e,"USE_PROFILES")&&e.USE_PROFILES,V=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,K=e.ALLOW_UNKNOWN_PROTOCOLS||!1,X=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,q=e.SAFE_FOR_TEMPLATES||!1,G=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,re=e.RETURN_TRUSTED_TYPE||!1,J=e.FORCE_BODY||!1,ne=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,oe=!1!==e.KEEP_CONTENT,ae=e.IN_PLACE||!1,j=e.ALLOWED_URI_REGEXP||aN,be=e.NAMESPACE||me,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,$e=e.HTML_INTEGRATION_POINTS||$e,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Fe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Fe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),q&&(U=!1),te&&(ee=!0),se&&(z=LL({},GL),L=[],!0===se.html&&(LL(z,YL),LL(L,ZL)),!0===se.svg&&(LL(z,VL),LL(L,QL),LL(L,eN)),!0===se.svgFilters&&(LL(z,UL),LL(L,QL),LL(L,eN)),!0===se.mathMl&&(LL(z,XL),LL(L,JL),LL(L,eN))),e.ADD_TAGS&&(z===P&&(z=HL(z)),LL(z,e.ADD_TAGS,De)),e.ADD_ATTR&&(L===N&&(L=HL(L)),LL(L,e.ADD_ATTR,De)),e.ADD_URI_SAFE_ATTR&&LL(he,e.ADD_URI_SAFE_ATTR,De),e.FORBID_CONTENTS&&(le===ce&&(le=HL(le)),LL(le,e.FORBID_CONTENTS,De)),oe&&(z["#text"]=!0),Z&&LL(z,["html","head","body"]),z.table&&(LL(z,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw jL('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw jL('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,$=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let r=null;const n="data-tt-policy-suffix";t&&t.hasAttribute(n)&&(r=t.getAttribute(n));const i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(p,o)),null!==w&&"string"==typeof $&&($=w.createHTML(""));yL&&yL(e),Ee=e}},Me=LL({},[...VL,...UL,...KL]),_e=LL({},[...XL,...qL]),Ie=function(e){EL(r.removed,{element:e});try{x(e).removeChild(e)}catch(t){b(e)}},Ae=function(e,t){try{EL(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){EL(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{Ie(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Be=function(e){let t=null,r=null;if(J)e="<remove></remove>"+e;else{const t=ML(e,/^[\r\n\t ]+/);r=t&&t[0]}"application/xhtml+xml"===Se&&be===me&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(be===me)try{t=(new g).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=C.createDocument(be,"template",null);try{t.documentElement.innerHTML=ve?$:i}catch(e){}}const o=t.body||t.documentElement;return e&&r&&o.insertBefore(n.createTextNode(r),o.childNodes[0]||null),be===me?D.call(t,Z?"html":"body")[0]:Z?t.documentElement:o},Re=function(e){return S.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},je=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},ze=function(e){return"function"==typeof l&&e instanceof l};function Pe(e,t,n){SL(e,(e=>{e.call(r,t,n,Ee)}))}const Le=function(e){let t=null;if(Pe(T.beforeSanitizeElements,e,null),je(e))return Ie(e),!0;const n=De(e.nodeName);if(Pe(T.uponSanitizeElement,e,{tagName:n,allowedTags:z}),e.hasChildNodes()&&!ze(e.firstElementChild)&&RL(/<[/\w!]/g,e.innerHTML)&&RL(/<[/\w!]/g,e.textContent))return Ie(e),!0;if(e.nodeType===pN)return Ie(e),!0;if(G&&e.nodeType===fN&&RL(/<[/\w]/g,e.data))return Ie(e),!0;if(!z[n]||W[n]){if(!W[n]&&He(n)){if(H.tagNameCheck instanceof RegExp&&RL(H.tagNameCheck,n))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(n))return!1}if(oe&&!le[n]){const t=x(e)||e.parentNode,r=y(e)||e.childNodes;if(r&&t){for(let n=r.length-1;n>=0;--n){const i=m(r[n],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,v(e))}}}return Ie(e),!0}return e instanceof c&&!function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});const r=FL(e.tagName),n=FL(t.tagName);return!!ye[e.namespaceURI]&&(e.namespaceURI===fe?t.namespaceURI===me?"svg"===r:t.namespaceURI===pe?"svg"===r&&("annotation-xml"===n||we[n]):Boolean(Me[r]):e.namespaceURI===pe?t.namespaceURI===me?"math"===r:t.namespaceURI===fe?"math"===r&&$e[n]:Boolean(_e[r]):e.namespaceURI===me?!(t.namespaceURI===fe&&!$e[n])&&!(t.namespaceURI===pe&&!we[n])&&!_e[r]&&(Ce[r]||!Me[r]):!("application/xhtml+xml"!==Se||!ye[e.namespaceURI]))}(e)?(Ie(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!RL(/<\/no(script|embed|frames)/i,e.innerHTML)?(q&&e.nodeType===gN&&(t=e.textContent,SL([F,O,M],(e=>{t=_L(t,e," ")})),e.textContent!==t&&(EL(r.removed,{element:e.cloneNode()}),e.textContent=t)),Pe(T.afterSanitizeElements,e,null),!1):(Ie(e),!0)},Ne=function(e,t,r){if(ne&&("id"===t||"name"===t)&&(r in n||r in Te))return!1;if(U&&!Y[t]&&RL(_,t));else if(V&&RL(I,t));else if(!L[t]||Y[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&RL(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&RL(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&RL(H.tagNameCheck,r)||H.tagNameCheck instanceof Function&&H.tagNameCheck(r))))return!1}else if(he[t]);else if(RL(j,_L(r,B,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==IL(r,"data:")||!de[e]){if(K&&!RL(A,_L(r,B,"")));else if(r)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&ML(e,R)},We=function(e){Pe(T.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||je(e))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L,forceKeepAttr:void 0};let i=t.length;for(;i--;){const o=t[i],{name:a,namespaceURI:s,value:l}=o,c=De(a);let d="value"===a?l:AL(l);if(n.attrName=c,n.attrValue=d,n.keepAttr=!0,n.forceKeepAttr=void 0,Pe(T.uponSanitizeAttribute,e,n),d=n.attrValue,!ie||"id"!==c&&"name"!==c||(Ae(a,e),d="user-content-"+d),G&&RL(/((--!?|])>)|<\/(style|title)/i,d)){Ae(a,e);continue}if(n.forceKeepAttr)continue;if(Ae(a,e),!n.keepAttr)continue;if(!X&&RL(/\/>/i,d)){Ae(a,e);continue}q&&SL([F,O,M],(e=>{d=_L(d,e," ")}));const u=De(e.nodeName);if(Ne(u,c,d)){if(w&&"object"==typeof p&&"function"==typeof p.getAttributeType)if(s);else switch(p.getAttributeType(u,c)){case"TrustedHTML":d=w.createHTML(d);break;case"TrustedScriptURL":d=w.createScriptURL(d)}try{s?e.setAttributeNS(s,a,d):e.setAttribute(a,d),je(e)?Ie(e):DL(r.removed)}catch(e){}}}Pe(T.afterSanitizeAttributes,e,null)},Ye=function e(t){let r=null;const n=Re(t);for(Pe(T.beforeSanitizeShadowDOM,t,null);r=n.nextNode();)Pe(T.uponSanitizeShadowNode,r,null),Le(r),We(r),r.content instanceof a&&e(r.content);Pe(T.afterSanitizeShadowDOM,t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,o=null,s=null,c=null;if(ve=!e,ve&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ze(e)){if("function"!=typeof e.toString)throw jL("toString is not a function");if("string"!=typeof(e=e.toString()))throw jL("dirty is not a string, aborting")}if(!r.isSupported)return e;if(Q||Oe(t),r.removed=[],"string"==typeof e&&(ae=!1),ae){if(e.nodeName){const t=De(e.nodeName);if(!z[t]||W[t])throw jL("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)n=Be("\x3c!----\x3e"),o=n.ownerDocument.importNode(e,!0),o.nodeType===hN&&"BODY"===o.nodeName||"HTML"===o.nodeName?n=o:n.appendChild(o);else{if(!ee&&!q&&!Z&&-1===e.indexOf("<"))return w&&re?w.createHTML(e):e;if(n=Be(e),!n)return ee?null:re?$:""}n&&J&&Ie(n.firstChild);const d=Re(ae?e:n);for(;s=d.nextNode();)Le(s),We(s),s.content instanceof a&&Ye(s.content);if(ae)return e;if(ee){if(te)for(c=k.call(n.ownerDocument);n.firstChild;)c.appendChild(n.firstChild);else c=n;return(L.shadowroot||L.shadowrootmode)&&(c=E.call(i,c,!0)),c}let u=Z?n.outerHTML:n.innerHTML;return Z&&z["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&RL(cN,n.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+u),q&&SL([F,O,M],(e=>{u=_L(u,e," ")})),w&&re?w.createHTML(u):u},r.setConfig=function(){Oe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},r.clearConfig=function(){Ee=null,Q=!1},r.isValidAttribute=function(e,t,r){Ee||Oe({});const n=De(e),i=De(t);return Ne(n,i,r)},r.addHook=function(e,t){"function"==typeof t&&EL(T[e],t)},r.removeHook=function(e,t){if(void 0!==t){const r=kL(T[e],t);return-1===r?void 0:TL(T[e],r,1)[0]}return DL(T[e])},r.removeHooks=function(e){T[e]=[]},r.removeAllHooks=function(){T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},r}();const yN=t=>i.forwardRef(((r,n)=>e(dL,Object.assign({forwardedRef:n},r,{children:t.length>0?t.map(((t,r)=>{if("text"===t.type){const n=t.otherAttributes,i=vN.sanitize(t.content);return e("p",Object.assign({},n,{dangerouslySetInnerHTML:{__html:i}}),r)}{const n=t.otherAttributes;return e(gL.Link,Object.assign({},n,{children:t.content}),r)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),xN=M.div`
    display: flex;
    flex-direction: column;
`,wN=M.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${jc["spacing-8"]};
`,$N=M(Z$)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${Lc.MaxWidth.xs} {
            padding: 0 ${jc["spacing-8"]};
        }
    }
`,CN=M(Kd.Small)`
    margin: ${jc["spacing-32"]} 0;
`,SN=r=>{var{id:n,value:i=[],"data-testid":s,className:l,cooldownDuration:c,actionButtonProps:d,errorMessage:h,numOfInput:g,onChange:p,onCooldownStart:f,onCooldownEnd:m}=r,b=Vo(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=d?d:{},{disabled:y,onClick:x,styleType:w="secondary"}=v,$=Vo(v,["disabled","onClick","styleType"]),C=o([]),S=o(p),[k,D]=a(new Array(g).fill("")),[E,T]=a(c),[F,O]=a(new Date),[M]=a((()=>oh.generate())),_=!!h,I=`${M}-error`,A=`${M}-timer`;u((()=>{var e;return null===(e=null==C?void 0:C.current[0])||void 0===e||e.focus(),document.addEventListener("paste",j),()=>document.removeEventListener("paste",j)}),[]),u((()=>{if(0!==c){f&&f();const e=L();return()=>e()}}),[F]),u((()=>{S.current=p}),[p]),u((()=>{i.length===g&&D(i)}),[i]);const B=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(z(n)){const t=[...k];t[e]=n.substring(n.length-1),null===(r=C.current[e+1])||void 0===r||r.focus(),D(t),p&&p(t)}},R=e=>t=>{var r,n,i;const{key:o,code:a}=t;if("Backspace"===o||"Backspace"===a){const t=[...k];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=C.current[e-1])||void 0===r||r.focus()),D(t),p&&p(t)}else"ArrowRight"===t.code?null===(n=C.current[e+1])||void 0===n||n.focus():"ArrowLeft"===t.code&&(null===(i=C.current[e-1])||void 0===i||i.focus())},j=e=>{if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),r=t.split("");t&&z(t,g)?(D(r),S.current&&S.current(r)):e.preventDefault()},z=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),P=()=>{const e=Date.now(),t=1e3*c;return e<F.valueOf()+t},L=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*c,n=Math.ceil((F.valueOf()+r-t)/1e3);T(n),n<=0&&(m&&m(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},N=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`,H=e=>`${e} second${1===e?"":"s"}`;return t(xN,{id:n,"data-testid":s,className:l,children:[e(wN,{role:"group","aria-label":`${g}-digit OTP input field`,children:k.map(((t,r)=>e($N,Object.assign({id:N(r,"otp-input",n),"data-testid":N(r,"otp-input",s),"aria-label":`${ah.formatOrdinal(r+1)} digit`,"aria-invalid":_,"aria-describedby":_?I:void 0,ref:e=>C.current[r]=e,type:"text",inputMode:"numeric",value:t,error:_,onChange:B(r),onKeyDown:R(r),autoComplete:"off"},b),r)))}),h&&e(m$,{id:I,children:h}),t(Wo,{role:"timer",id:A,children:[H(E)," remaining"]}),e(Wo,{"aria-live":"polite",children:E>0?"":"Ready to resend OTP"}),e(CN,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{D(new Array(g).fill("")),P()||(O(new Date),T(c)),x&&x(e)},disabled:y||P()},$.children?{children:$.children}:{children:E>0?`Resend OTP in ${H(E)}`:"Resend OTP","aria-label":E>0?`Resend OTP in ${H(c)}`:"Resend OTP","aria-describedby":A}))]})},kN=M.nav`
    display: flex;
`,DN=M.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${Lc.MaxWidth.lg} {
        align-self: center;
    }
`,EN=M.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,TN=M(ad)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${zc.sm};
    color: ${Ic["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Ic["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${Ic["bg-hover"]};
    }
`,FN=M(ad)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${zc.sm};
    color: ${Ic["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Ic["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${Ic["bg-hover"]};
    }

    ${e=>"left"===e.$position?_`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:_`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${Lc.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,ON=M.button`
    background: ${e=>e.$selected?Ic["bg-primary"]:Ic.bg};
    border: ${Rc["width-010"]} ${Rc.solid}
        ${e=>_`
                ${e.$selected?Ic["bg-primary"]:Ic.border}
            `};
    color: ${e=>e.$selected?Ic["text-inverse"]:Ic.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${zc.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?_`
                  ${Ac["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${Ic["bg-selected-strongest-hover"]};
                      background-color: ${Ic["bg-selected-strongest-hover"]};
                      color: ${Ic["text-inverse"]};
                  }
              `:_`
                  ${Ac["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${Ic["bg-hover"]};
                      background-color: ${Ic["bg-hover"]};
                      color: ${Ic["text-hover"]};
                      ${Ac["body-baseline-semibold"]};
                  }
              `}
`;M(ad)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Ic["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${zc.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${Ic["icon-hover"]};
        }
    }
`;const MN=M.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${zc.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,_N=M.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Ic.text};

    display: flex;
    justify-content: center;
`,IN=M(ud.BodyBL)`
    white-space: nowrap;
`,AN=M(ud.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,BN=M(Z$)`
    ${Ac["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${zc.sm};
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${Ac["body-xs-regular"]}
        }
    }
`,RN=M.div`
    ${Ac["body-xs-regular"]}
    background-color: ${Ic["bg-hover"]};
    border: none;
    border-radius: ${zc.sm};
    color: ${Ic["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,jN=M.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,zN=i.forwardRef((({id:r,"data-testid":n,className:i,pageSize:o=10,totalItems:s,activePage:l,pageSizeOptions:c=PN,showFirstAndLastNav:d,showPageSizeChanger:h=!1,onPageChange:g,onPageSizeChange:p},f)=>{const m=R(),b=Pc["sm-max"]({theme:m}),v=Cu.useMediaQuery({maxWidth:b}),[y,x]=a(!1),[w,$]=a(!1),[C,S]=a(""),[k,D]=a(c[0]),[E,T]=a(!v&&h&&k?k.value:o),F=Math.ceil(s/E),O=1===l,M=l===F,_=l>1?()=>N(1):void 0,I=l<F?()=>N(F):void 0,A=l>1?()=>N(l-1):void 0,B=l<F?()=>N(parseInt(l.toString())+1):void 0,j=e=>e?()=>X():()=>U(),z=e=>e?()=>q():()=>K();u((()=>{l&&P(l)}),[l]),u((()=>{T(o),D(c.find((e=>e.value===o)))}),[o]);const P=e=>{S(e.toString())},L=()=>{x(!1),$(!1)},N=e=>{g&&(g(e),P(e))},H=()=>{const e=Math.min(F,l+5);N(e),P(e),x(!0),$(!1)},W=()=>{const e=Math.max(1,l-5);N(e),P(e),x(!1),$(!0)},Y=e=>{const t=e.target.value;if(void 0===t||0===t.length)S("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));P(Math.max(1,Math.min(F,e)))}else S(t.replace(/[^0-9]/g,""))},V=e=>{e.preventDefault(),C&&(null==g||g(parseInt(C)))},U=()=>{x(!0)},K=()=>{x(!1)},X=()=>{$(!0)},q=()=>{$(!1)},G=(r,n,i)=>t(MN,{children:[e(TN,{focusHighlight:!1,focusOutline:"browser","aria-label":r?"Previous 5 pages":"Next 5 pages",onMouseOver:j(r),onMouseOut:z(r),onFocus:j(r),onBlur:z(r),onClick:r?W:H,children:e(r&&w?st:n&&y?lt:ut,{"aria-hidden":!0})}),r&&w&&e(RN,{children:"Previous 5 pages"}),n&&y&&e(RN,{children:"Next 5 pages"})]},i);return t(kN,{className:i,ref:f,id:r||"pagination-wrapper","data-testid":n||"pagination","aria-label":"Pagination",children:[e(DN,{children:t(EN,{children:[d&&e(FN,{onClick:_,disabled:O,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:e(ct,{"aria-hidden":!0})}),e(FN,{onClick:A,disabled:O,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:e(xe,{"aria-hidden":!0})}),v?t(_N,{children:[e("form",{onSubmit:V,children:e(BN,{value:C,onChange:Y,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(n||"pagination")+"-input"})}),e(AN,{children:"/"}),e(IN,{children:F})]}):[...Array(F)].map(((t,r)=>{const n=r+1,i=F-5,o=l===n;if(F<=7)return e(ON,{onClick:()=>N(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:L,onFocus:L,children:n},n);const a=l+1>5&&2===n,s=l-1<=i&&n===F-1-1;return a||s?G(a,s,n):n<=5&&l+1<=5||n<=1||n===l||n<=l+1&&n>=l-1-1||n>i&&l-1>i||n>F-1?e(ON,{onClick:()=>N(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:L,onFocus:L,children:n},n):null})),e(FN,{onClick:B,disabled:M,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:e(ye,{"aria-hidden":!0})}),d&&e(FN,{onClick:I,disabled:M,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:e(dt,{"aria-hidden":!0})})]})}),h&&!v&&e(jN,{children:e(AI,{options:c,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{D(e);const t=e.value,r=Math.ceil(s/t);T(t);p&&p(l>=r?r:l,t)}})})]})})),PN=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],LN=M.div`
    border-radius: ${zc.full};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Ac["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n;if("solid"===e.$type)switch(n=Ic["text-inverse"],e.$color){case"grey":t=Ic["bg-inverse-subtler"];break;case"green":t=Ic["bg-success-strong"];break;case"yellow":t=Ic["bg-warning-strong"];break;case"red":t=Ic["bg-error-strong"];break;case"blue":t=Ic["bg-info-strong"];break;default:t=Ic["bg-inverse"]}else switch(e.$color){case"grey":t=Ic["bg-stronger"],r=Ic["border-strong"],n=Ic["text-subtler"];break;case"green":t=Ic["bg-success"],r=Ic["border-success"],n=Ic["text-success"];break;case"yellow":t=Ic["bg-warning"],r=Ic["border-warning"],n=Ic["text-warning"];break;case"red":t=Ic["bg-error"],r=Ic["border-error"],n=Ic["text-error"];break;case"blue":t=Ic["bg-info"],r=Ic["border-info"],n=Ic["text-info"];break;default:t=Ic.bg,r=Ic.border,n=Ic.text}return _`
            background: ${t};
            border: ${Rc["width-010"]} ${Rc.solid} ${r};
            color: ${n};
        `}}
`,NN=M.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,HN=r=>{var{type:n,colorType:i="black",children:o,icon:a}=r,s=Vo(r,["type","colorType","children","icon"]);return t(LN,Object.assign({$type:n,$color:i},s,{children:[a,e(NN,{children:o})]}))},WN=(e,t,r)=>t?El(r,t)||El(e,t):r||e,YN=(e,t)=>{const r=t||e.defaultValue;return El(e.collections,r)};var VN;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(VN||(VN={}));const UN={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},KN=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=YN(UN,null==n?void 0:n[VN.colorScheme]);return n.options&&n.options.color?WN(i,e,n.options.color):WN(i,e)},XN={Brand:{1:KN("Brand.1"),2:KN("Brand.2"),3:KN("Brand.3"),4:KN("Brand.4"),5:KN("Brand.5"),6:KN("Brand.6")},Primary:KN("Primary"),PrimaryDark:KN("PrimaryDark"),Secondary:KN("Secondary"),Accent:{Light:{1:KN("Accent.Light.1"),2:KN("Accent.Light.2"),3:KN("Accent.Light.3"),4:KN("Accent.Light.4"),5:KN("Accent.Light.5"),6:KN("Accent.Light.6")},Dark:{1:KN("Accent.Dark.1"),2:KN("Accent.Dark.2"),3:KN("Accent.Dark.3")}},Neutral:{1:KN("Neutral.1"),2:KN("Neutral.2"),3:KN("Neutral.3"),4:KN("Neutral.4"),5:KN("Neutral.5"),6:KN("Neutral.6"),7:KN("Neutral.7"),8:KN("Neutral.8")},Validation:{Green:{Text:KN("Validation.Green.Text"),Icon:KN("Validation.Green.Icon"),Border:KN("Validation.Green.Border"),Background:KN("Validation.Green.Background")},Orange:{Text:KN("Validation.Orange.Text"),Icon:KN("Validation.Orange.Icon"),Border:KN("Validation.Orange.Border"),Background:KN("Validation.Orange.Background"),Badge:KN("Validation.Orange.Badge")},Red:{Text:KN("Validation.Red.Text"),Icon:KN("Validation.Red.Icon"),Border:KN("Validation.Red.Border"),Background:KN("Validation.Red.Background")},Blue:{Text:KN("Validation.Blue.Text"),Icon:KN("Validation.Blue.Icon"),Border:KN("Validation.Blue.Border"),Background:KN("Validation.Blue.Background")}},Shadow:{Accent:KN("Shadow.Accent"),Red:KN("Shadow.Red"),Elevation:KN("Shadow.Elevation")}},qN={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},GN={D1:{fontFamily:qN.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:qN.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:qN.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:qN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:qN.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:qN.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:qN.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:qN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:qN.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:qN.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:qN.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:qN.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:qN.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:qN.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},ZN={D1:{fontFamily:qN.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:qN.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:qN.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:qN.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:qN.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:qN.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:qN.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:qN.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:qN.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:qN.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:qN.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:qN.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:qN.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:qN.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},QN={collections:{base:GN,oneservice:{D1:{fontFamily:qN.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:qN.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:qN.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:qN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:qN.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:qN.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:qN.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:qN.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:qN.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:qN.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:qN.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:qN.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:qN.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:qN.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:ZN},defaultValue:"base"},JN=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=YN(QN,null==n?void 0:n[VN.textStyleScheme]);return n.options&&n.options.textStyle?WN(i,e,n.options.textStyle):WN(i,e)},eH={D1:{fontFamily:JN("D1.fontFamily"),fontSize:JN("D1.fontSize"),fontWeight:JN("D1.fontWeight"),lineHeight:JN("D1.lineHeight"),letterSpacing:JN("D1.letterSpacing"),fontVariant:JN("D1.fontVariant")},D2:{fontFamily:JN("D2.fontFamily"),fontSize:JN("D2.fontSize"),fontWeight:JN("D2.fontWeight"),lineHeight:JN("D2.lineHeight"),letterSpacing:JN("D2.letterSpacing"),fontVariant:JN("D2.fontVariant")},D3:{fontFamily:JN("D3.fontFamily"),fontSize:JN("D3.fontSize"),fontWeight:JN("D3.fontWeight"),lineHeight:JN("D3.lineHeight"),letterSpacing:JN("D3.letterSpacing"),fontVariant:JN("D3.fontVariant")},D4:{fontFamily:JN("D4.fontFamily"),fontSize:JN("D4.fontSize"),fontWeight:JN("D4.fontWeight"),lineHeight:JN("D4.lineHeight"),letterSpacing:JN("D4.letterSpacing"),fontVariant:JN("D4.fontVariant")},DBody:{fontFamily:JN("DBody.fontFamily"),fontSize:JN("DBody.fontSize"),fontWeight:JN("DBody.fontWeight"),lineHeight:JN("DBody.lineHeight"),letterSpacing:JN("DBody.letterSpacing"),fontVariant:JN("DBody.fontVariant")},H1:{fontFamily:JN("H1.fontFamily"),fontSize:JN("H1.fontSize"),fontWeight:JN("H1.fontWeight"),lineHeight:JN("H1.lineHeight"),letterSpacing:JN("H1.letterSpacing"),fontVariant:JN("H1.fontVariant")},H2:{fontFamily:JN("H2.fontFamily"),fontSize:JN("H2.fontSize"),fontWeight:JN("H2.fontWeight"),lineHeight:JN("H2.lineHeight"),letterSpacing:JN("H2.letterSpacing"),fontVariant:JN("H2.fontVariant")},H3:{fontFamily:JN("H3.fontFamily"),fontSize:JN("H3.fontSize"),fontWeight:JN("H3.fontWeight"),lineHeight:JN("H3.lineHeight"),letterSpacing:JN("H3.letterSpacing"),fontVariant:JN("H3.fontVariant")},H4:{fontFamily:JN("H4.fontFamily"),fontSize:JN("H4.fontSize"),fontWeight:JN("H4.fontWeight"),lineHeight:JN("H4.lineHeight"),letterSpacing:JN("H4.letterSpacing"),fontVariant:JN("H4.fontVariant")},H5:{fontFamily:JN("H5.fontFamily"),fontSize:JN("H5.fontSize"),fontWeight:JN("H5.fontWeight"),lineHeight:JN("H5.lineHeight"),letterSpacing:JN("H5.letterSpacing"),fontVariant:JN("H5.fontVariant")},H6:{fontFamily:JN("H6.fontFamily"),fontSize:JN("H6.fontSize"),fontWeight:JN("H6.fontWeight"),lineHeight:JN("H6.lineHeight"),letterSpacing:JN("H6.letterSpacing"),fontVariant:JN("H6.fontVariant")},Body:{fontFamily:JN("Body.fontFamily"),fontSize:JN("Body.fontSize"),fontWeight:JN("Body.fontWeight"),lineHeight:JN("Body.lineHeight"),letterSpacing:JN("Body.letterSpacing"),fontVariant:JN("Body.fontVariant")},BodySmall:{fontFamily:JN("BodySmall.fontFamily"),fontSize:JN("BodySmall.fontSize"),fontWeight:JN("BodySmall.fontWeight"),lineHeight:JN("BodySmall.lineHeight"),letterSpacing:JN("BodySmall.letterSpacing"),fontVariant:JN("BodySmall.fontVariant")},XSmall:{fontFamily:JN("XSmall.fontFamily"),fontSize:JN("XSmall.fontSize"),fontWeight:JN("XSmall.fontWeight"),lineHeight:JN("XSmall.lineHeight"),letterSpacing:JN("XSmall.letterSpacing"),fontVariant:JN("XSmall.fontVariant")}},tH=[qN.OpenSans,qN.PlusJakartaSans],rH=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},nH=(e,t)=>r=>{var n,i,o,a,s;const l=null===(i=(n=eH[e]).fontFamily)||void 0===i?void 0:i.call(n,r),c=null===(a=(o=eH[e]).fontWeight)||void 0===a?void 0:a.call(o,r),d=tH.find((e=>Object.values(e).includes(l)));return d?_`
                font-family: ${rH(d,t)||rH(d,c)||l};
                font-weight: normal !important;
            `:_`
            font-family: ${l};
            font-weight: ${null!==(s=iH(t)||c)&&void 0!==s?s:"normal"};
        `},iH=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},oH=e=>{if(e)return _`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},aH={getFontFamily:nH,getTextStyle:(e,t,r=!1)=>n=>{var i,o,a;const s=eH[e],l=(null===(i=s.fontSize)||void 0===i?void 0:i.call(s,n))||1;return _`
            ${nH(e,t)}
            font-size: ${l}rem !important;
            line-height: ${s.lineHeight}rem !important;
            letter-spacing: ${(null===(o=s.letterSpacing)||void 0===o?void 0:o.call(s,n))||0}rem !important;
            font-variant: ${(null===(a=s.fontVariant)||void 0===a?void 0:a.call(s,n))||"normal"};
            ${_`
                margin-bottom: ${l*(r?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,t=!1,r=void 0)=>t?_`
            display: block;
            ${oH(r)}
        `:e?_`
            display: inline;
        `:_`
            display: block;
            ${oH(r)}
        `};var sH;!function(e){e.D1=M.h1`
        ${e=>_`
                ${aH.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=M.h1`
        ${e=>_`
                ${aH.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=M.h1`
        ${e=>_`
                ${aH.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=M.h1`
        ${e=>_`
                ${aH.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=M.h1`
        ${e=>_`
                ${aH.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=M.h1`
        ${e=>_`
                ${aH.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=M.h2`
        ${e=>_`
                ${aH.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=M.h3`
        ${e=>_`
                ${aH.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=M.h4`
        ${e=>_`
                ${aH.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=M.h5`
        ${e=>_`
                ${aH.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=M.h6`
        ${e=>_`
                ${aH.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=M.p`
        ${e=>_`
                ${aH.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=M.p`
        ${e=>_`
                ${aH.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=M.span`
        ${e=>_`
                ${aH.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${XN.Neutral[1]};
                ${aH.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>dH(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>dH(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(sH||(sH={}));const lH=M.a`
    ${e=>_`
            ${aH.getTextStyle(e.textStyle,e.weight)}
            color: ${XN.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${XN.Secondary};

                svg {
                    color: ${XN.Secondary};
                }
            }
        `}
`,cH=M(z)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,dH=r=>{var{external:n=!1,children:i}=r,o=Vo(r,["external","children"]);return t(lH,Object.assign({},o,{children:[i,n&&e(cH,{})]}))},uH={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},hH=M.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?_`
            visibility: visible;
            opacity: 1;
            transition: ${uH.Base};
            z-index: 50;
        `:_`
            visibility: hidden;
            opacity: 0;
            transition: ${uH.Base};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return _`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return _`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return _`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return _`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return _`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return _`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${um.MaxWidth.mobileL} {
        display: none;
    }
`,gH=M(jm)`
    padding: 3.5rem 1.25rem 2.5rem;
`,pH=M.div`
    position: relative;
    width: fit-content;
`,fH=M.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,mH=M.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,bH=n=>{var{children:i,visible:s,onMobileClose:l}=n,c=Vo(n,["children","visible","onMobileClose"]);const d=c["data-testid"]||"popover",[h,g]=a("none"),p=o(null),f=Cu.useMediaQuery({maxWidth:cm.mobileL}),m=o(h);u((()=>(y(),window.addEventListener("resize",Jg(b,300)),()=>{window.removeEventListener("resize",Jg(b,300))})),[]);const b=()=>{y()},v=()=>{l&&l()},y=()=>{const e=x();var t;e&&(t=e,m.current=t,g(t))},x=()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},w=()=>"string"==typeof i?e(sH.BodySmall,{children:i}):i;return t(r,{children:[e(hH,Object.assign({ref:p,"data-testid":d,$visible:s,$offset:h},c,{children:e(kg,{children:w()})})),f&&e(Am,{show:null!=s&&s,onOverlayClick:v,children:e(gH,{onClose:v,children:e(mH,{children:w()})})})]})},vH=(r,n)=>i=>{const{onPopoverAppear:s,onPopoverDismiss:l}=i,c=Vo(i,["onPopoverAppear","onPopoverDismiss"]),d=n.trigger||"click",h=c,[g,p]=a(!1),f=o(null),m=Cu.useMediaQuery({maxWidth:cm.mobileL});u((()=>{if(!m)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[g]);const b=e=>{f&&!f.current.contains(e.target)&&(g&&p(!1),l&&l())};return t(pH,{id:"popover-hoc-wrapper",ref:f,children:[e(fH,{id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||m)&&(p(!g),!g&&s&&s(),g&&l&&l())},onMouseEnter:()=>{"hover"!==d||m||p(!0)},onMouseLeave:()=>{"hover"===d&&g&&!m&&p(!1)},"aria-label":"popover-button",children:e(r,Object.assign({},h))}),e(bH,{visible:g,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{p(!1)},children:n.content})]})},yH=M.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${Lc.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${Lc.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,xH=M.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,wH=M.div`
    height: 4px;
    margin-bottom: ${jc["spacing-8"]};
    border-radius: ${zc.full};
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?Ic["bg-primary-subtle"]:Ic["bg-disabled"])(e)};\n        `}};
`,$H=M(ud.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?Ic["text-primary"]:Ic["text-disabled"])(e)};`}};
`,CH=M(ud.BodyMD)`
    overflow-wrap: anywhere;
    color: ${Ic.text};
`,SH=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var kH=function(e){return function(t){return null==e?void 0:e[t]}},DH=kH({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),EH=pl,TH=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,FH=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var OH=function(e){return(e=EH(e))&&e.replace(TH,DH).replace(FH,"")},MH=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var _H=function(e){return e.match(MH)||[]},IH=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var AH=function(e){return IH.test(e)},BH="\\ud800-\\udfff",RH="\\u2700-\\u27bf",jH="a-z\\xdf-\\xf6\\xf8-\\xff",zH="A-Z\\xc0-\\xd6\\xd8-\\xde",PH="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",LH="["+PH+"]",NH="\\d+",HH="["+RH+"]",WH="["+jH+"]",YH="[^"+BH+PH+NH+RH+jH+zH+"]",VH="(?:\\ud83c[\\udde6-\\uddff]){2}",UH="[\\ud800-\\udbff][\\udc00-\\udfff]",KH="["+zH+"]",XH="(?:"+WH+"|"+YH+")",qH="(?:"+KH+"|"+YH+")",GH="(?:['’](?:d|ll|m|re|s|t|ve))?",ZH="(?:['’](?:D|LL|M|RE|S|T|VE))?",QH="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",JH="[\\ufe0e\\ufe0f]?",eW=JH+QH+("(?:\\u200d(?:"+["[^"+BH+"]",VH,UH].join("|")+")"+JH+QH+")*"),tW="(?:"+[HH,VH,UH].join("|")+")"+eW,rW=RegExp([KH+"?"+WH+"+"+GH+"(?="+[LH,KH,"$"].join("|")+")",qH+"+"+ZH+"(?="+[LH,KH+XH,"$"].join("|")+")",KH+"?"+XH+"+"+GH,KH+"+"+ZH,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",NH,tW].join("|"),"g");var nW=_H,iW=AH,oW=pl,aW=function(e){return e.match(rW)||[]};var sW=dI,lW=OH,cW=function(e,t,r){return e=oW(e),void 0===(t=r?void 0:t)?iW(e)?aW(e):nW(e):e.match(t)||[]},dW=RegExp("['’]","g");var uW=Zo(function(e){return function(t){return sW(cW(lW(t).replace(dW,"")),e,"")}}((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})));const hW=r=>{var{steps:n,currentIndex:i,displayExtractor:o,fadeColor:a,fadePosition:s}=r,l=Vo(r,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=R(),d=Pc["lg-max"]({theme:c}),u=Cu.useMediaQuery({maxWidth:d}),h=e=>{var t;return o?o(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""},g=(e,t)=>uW(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!n.length)return null;return t(yH,Object.assign({},l,{children:[e(xH,{children:n.map(((t,r)=>{const n=r<=i;return e(SH,{id:g(r,i),children:e(wH,{highlighted:n})},r)}))}),e(xH,{children:u?t(SH,{id:g(i,i),children:[t(CH,{weight:"semibold",id:`${g(i,i)}-counter`,children:["Step ",i+1," of ",n.length]}),e(CH,{weight:"regular",id:`${g(i,i)}-title`,children:h(n[i])})]},i):n.map(((t,r)=>{const n=r<=i,o=r===i,a=o?"bold":"regular";return e(SH,{id:`${g(r,i)}-title`,children:e($H,{highlighted:n,weight:a,"aria-current":o,children:h(t)})},r)}))})]}))},gW=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${e=>"small"===e.$displaySize?_`
                height: 1.5rem;
                width: 1.5rem;
            `:_`
                height: 2rem;
                width: 2rem;
            `}
    position: relative;
`,pW=M(ce)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?Ic["icon-disabled-subtle"](e):Ic["icon-subtle"](e)};
    transition: ${Bc["duration-150"]} ${Bc["ease-default"]};
`,fW=M(de)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?Ic["icon-selected-disabled"](e):Ic["icon-selected"](e)};

    transition: ${Bc["duration-150"]} ${Bc["ease-default"]};
`,mW=M.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${pW}, &:hover + ${fW} {
        color: ${e=>!e.disabled&&Ic["icon-hover"](e)};
    }
`,bW=r=>{var{className:n,checked:i,disabled:o,displaySize:a="default",onChange:s}=r,l=Vo(r,["className","checked","disabled","displaySize","onChange"]);return t(gW,{$selected:i,$disabled:o,className:n,$displaySize:a,"data-testid":"radio-button",children:[e(mW,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{o||null==s||s(e)},checked:i,disabled:o},l)),i?e(fW,{"data-testid":"radio-checked",$disabled:o}):e(pW,{"data-testid":"radio-unchecked",$disabled:o})]})},vW=M.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,yW=M.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    background-color: ${Ic["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,xW=M(yW)`
    height: 100vh;
    left: 0;
    top: 0;
    ${Lc.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,wW=M(yW)`
    display: none;
    visibility: hidden;
    ${Lc.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,$W=M(Ho.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${Ic["bg-primary-subtlest"]};
    border-top-right-radius: ${zc.md};
    border-bottom-right-radius: ${zc.md};
    border: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};

    ${e=>e.$showDrawer?_`
                  box-shadow: 0 0 4px
                      rgb(from ${Ic.Primitive["neutral-20"]} r g b / 25%);
              `:_`
                  border: 0;
                  padding: 0;
              `};
`,CW=M.li`
    width: 100%;
`,SW=M.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${zc.md};
    color: ${Ic["icon-primary"]};
    transition: ${Bc["duration-250"]} ${Bc["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,kW=M(ud.BodyXS)`
    ${sd(2)}
    margin-top: 0.25rem;
    transition: ${Bc["duration-250"]} ${Bc["ease-default"]};
`,DW=M(Xp)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${SW} {
            background-color: ${Ic["bg-hover"]};
        }

        ${kW} {
            ${Ac["body-xs-semibold"]}
            color: ${Ic["text-hover"]};
        }
    }

    ${e=>e.$highlight&&_`
            ${SW} {
                background-color: ${Ic["bg-hover"]};
            }

            ${kW} {
                ${Ac["body-xs-semibold"]}
                color: ${Ic["text-selected"]};
            }
        `}
`,EW=C({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),TW=M.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,FW=M.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${Ic.border};
`,OW=M(Ho.li)``,MW=M(Xp)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${zc.md};

    ${Ac["body-md-semibold"]}
    color: ${Ic.text};

    ${e=>e.$noChildren?_`
                  :hover,
                  :focus {
                      background: ${Ic["bg-hover"]};
                      color: ${Ic["text-hover"]};
                  }
              `:_`
                  :hover,
                  :focus {
                      background: ${Ic["bg-hover-strong"]};
                  }
              `}
`,_W=M(Ho.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,IW=M(j)`
    flex-shrink: 0;
    color: ${Ic.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${Bc["duration-150"]} ${Bc["ease-default"]};
`,AW=M.span`
    ${sd(2)}
    text-align: left;
`,BW=M(Ho.ul)``,RW=M.li``,jW=M(Xp)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${zc.md};

    ${Ac["body-md-regular"]}
    color: ${Ic.text};
    ${sd(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${Ic["bg-hover"]};
        color: ${Ic["text-hover"]};
    }
`,zW=Object.assign((r=>{var{fixed:n=!0,children:i}=r,s=Vo(r,["fixed","children"]);const l=o(null),[c,d]=a(void 0),[h,g]=a(void 0),[p,f]=a(void 0),[b,v]=a(!1),y=m((()=>({currentItem:c,selectedItem:h,previouslySelectedItemId:p,setCurrentItem:d,setSelectedItem:g,setPreviouslySelectedItemId:f})),[c,h,p,d,g,f]),x=So({width:b?240:0,borderRightWidth:b?1:0,borderTopWidth:b?1:0,borderBottomWidth:b?1:0,borderLeftWidth:0});return lh("click",(e=>{l.current&&!l.current.contains(e.target)&&(g({itemId:p||(h?h.itemId:void 0),content:void 0}),f(void 0),d(void 0))}),"window",!0),u((()=>{v(!!(null==h?void 0:h.content)||!!(null==c?void 0:c.content))}),[c,h]),e(EW.Provider,{value:y,children:t(vW,Object.assign({$fixed:n},s,{ref:l,onMouseLeave:()=>{d(void 0)},children:[e(xW,{children:i}),e($W,{style:x,$showDrawer:b,"data-testid":"sidenav-drawer",children:c&&c.content||h&&h.content}),e(wW,{})]}))})}),{Group:r=>{var{separator:n,children:i}=r,o=Vo(r,["separator","children"]);return t(TW,Object.assign({},o,{children:[i,n&&e(FW,{"data-testid":"divider"})]}))},Item:r=>{var{children:n,icon:i,title:o,onClick:a}=r,s=Vo(r,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:h,setCurrentItem:g,setPreviouslySelectedItemId:p,setSelectedItem:m}=f(EW);u((()=>{s.selected&&m({itemId:l,content:void 0})}),[s.selected]);return e(CW,{children:t(DW,Object.assign({type:"button",onClick:()=>{p((()=>{if(n&&h)return d||h.itemId})()),g({itemId:l,content:n}),m({itemId:l,content:n}),a&&!n&&a(l)},onMouseEnter:()=>{g({itemId:l,content:n})}},s,{$highlight:!!h&&h.itemId===l||!!c&&c.itemId===l,children:[e(SW,{children:i}),e(kW,{children:o})]}))})},DrawerItem:r=>{var{id:n,title:i,onClick:o,children:s}=r,l=Vo(r,["id","title","onClick","children"]);const[c,d]=a(!0),[u,h]=a(!1),{currentItem:g,setSelectedItem:p,setPreviouslySelectedItemId:m,setCurrentItem:b}=f(EW),v=So({from:{opacity:0},to:{opacity:1}}),y=lr(),x=y.ref,w=So({height:s&&c?y.height:0});return t(OW,Object.assign({onMouseEnter:()=>{h(!0)},onMouseLeave:()=>{h(!1)}},l,{style:v,children:[t(MW,{type:"button",onClick:()=>{s?d(!c):(p({itemId:null==g?void 0:g.itemId,content:void 0}),b(void 0),m(void 0),o&&o(n))},$highlight:u&&c,$noChildren:!s,children:[e(AW,{children:i}),s&&e(IW,{"aria-hidden":!0,$expanded:c})]}),e(_W,{style:w,children:e(BW,{ref:x,children:s})})]}))},DrawerSubitem:t=>{var{id:r,title:n,onClick:i}=t,o=Vo(t,["id","title","onClick"]);const{currentItem:a,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=f(EW);return e(RW,Object.assign({},o,{children:e(jW,{type:"button",onClick:()=>{i&&i(r),s({itemId:null==a?void 0:a.itemId,content:void 0}),l(void 0),c(void 0)},children:n})}))}}),PW=e=>"red-filled"===e?"https://assets.life.gov.sg/react-design-system/img/singpass/singpass_red_filled.svg":"https://assets.life.gov.sg/react-design-system/img/singpass/singpass_white_filled.svg",LW=M.button`
    padding: ${jc["spacing-8"]} ${jc["spacing-16"]};
    transition: all ${Bc["duration-250"]} ${Bc["ease-default"]};
    border-radius: ${Ad};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    ${e=>"red-filled"===e.$buttonStyle?_`
                background-color: #f4333d;
                border: none;

                &:hover,
                &:active {
                    background-color: #b0262d;
                }
            `:_`
            background-color: ${Ic.Primitive.white};
            border: 1px #c8c9cc solid;

            &:hover,
            &:active {
                background-color: #f5f5f7;
            }
        `}

    ${e=>{switch(e.$buttonSizeStyle){case"small":return _`
                    height: 2.5rem;
                `;case"large":return _`
                    min-height: 4rem;
                `;default:return _`
                    min-height: 3rem;
                `}}}
`,NW=M.span`
    img {
        height: 100%;
    }

    height: ${e=>"large"===e.$buttonSizeStyle?2.5:1.5}rem;
`,HW=(t,r)=>{const{styleType:n="white-filled"}=t,i=Vo(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"default"};return e(LW,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e(NW,{$buttonSizeStyle:"default",children:e("img",{src:PW(n),alt:""})})}))};HW.displayName="SingpassButton.Default";const WW=(t,r)=>{const{styleType:n="white-filled"}=t,i=Vo(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"small"};return e(LW,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e(NW,{$buttonSizeStyle:"small",children:e("img",{src:PW(n),alt:""})})}))};WW.displayName="SingpassButton.Small";const YW=(t,r)=>{const{styleType:n="white-filled"}=t,i=Vo(t,["styleType"]),o={$buttonStyle:n,$buttonSizeStyle:"large"};return e(LW,Object.assign({ref:r,"data-testid":i["data-testid"]||"button"},o,i,{"aria-label":"Log in with sing pass",children:e(NW,{$buttonSizeStyle:"large",children:e("img",{src:PW(n),alt:""})})}))};YW.displayName="SingpassButton.Large";const VW={Default:i.forwardRef(HW),Small:i.forwardRef(WW),Large:i.forwardRef(YW)},UW=B`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,KW=M.div`
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
    background: ${Ic.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${zc.md};
    ${e=>{if(e.$isAnimated)return _`
                animation: ${UW} 0.3s;
            `}}
`,XW=M.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,qW=M(ad)`
    padding: 0;
`,GW=M(Pe)`
    color: ${Ic.icon};
    height: 1.25rem;
    width: 1.25rem;
`,ZW=M.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,QW=M.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${Lc.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,JW=M.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,eY=M.div`
    max-width: 30%;
`,tY=M(Kd.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Ac["body-xs-semibold"]}
    }
`,rY=M(ud.BodySM)`
    font-weight: ${Ac.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${Lc.MaxWidth.xs} {
        ${Ac["body-xs-bold"]}
    }
`,nY=M(ud.BodyXS)`
    overflow-wrap: anywhere;
`,iY=M.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,oY=_`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,aY=M(Ne)`
    ${oY}
`,sY=M(ht)`
    ${oY}
`,lY=M(Le)`
    ${oY}
`,cY="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",dY="smart-app-banner";const uY=i.forwardRef((function(n,i){const{className:o,show:a,href:s,content:l,offset:c=0,icon:d=cY,animated:u=!1,onDismiss:h,onClick:g}=n,{title:p,message:f,buttonLabel:m,buttonAriaLabel:b,numberOfStars:v}=l,y=e=>{e.stopPropagation(),window.open(s,"_blank","noreferrer"),null==g||g()};return e(r,{children:a&&t(KW,{ref:i,$isAnimated:u,$offset:c,className:o,children:[e(XW,{onClick:h,id:`${dY}-dismiss`,"data-testid":`${dY}-dismiss-container`,children:e(qW,{"aria-label":"Dismiss",children:e(GW,{})})}),t(ZW,{onClick:y,id:`${dY}-proceed`,"data-testid":`${dY}-proceed-container`,children:[e(JW,{src:d,alt:"lifesg-app-icon"}),t(QW,{children:[e(rY,{children:p}),e(nY,{children:f}),(()=>{if(isNaN(v)||v<0)return;const t=[],r=v-Math.floor(v)>=.4;for(let r=0;r<Math.floor(v);r++)t.push(e(aY,{},`star${r}`));if(r&&t.push(e(sY,{},"halfstar")),t.length<5){const r=5-t.length;for(let n=0;n<r;n++)t.push(e(lY,{},`emptystar${n}`))}return e(iY,{children:t.slice(0,5)})})()]}),e(eY,{children:e(tY,{type:"button",onClick:y,"aria-label":b,children:m})})]})]})})})),hY=i.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),gY=M.div`
    position: relative;
    width: 100%;
`,pY=M.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const r="rgba(255,255,255,0.001)",n=Ic.bg(e);return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?`${n}, ${n}`:`${n}`)},\n                    ${r}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?`${n}, ${n}`:`${n}`)},\n                    ${r}\n                );\n            `,_`
            ${Lc.MaxWidth.lg} {
                ${t}
            }
        `}};
`,fY=M.div`
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
`,mY=M(ad)`
    display: none;

    ${Lc.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?_`
                    justify-content: left;
                    padding-left: ${jc["spacing-8"]};
                `:_`
                    justify-content: right;
                    padding-right: ${jc["spacing-8"]};
                `}

        svg {
            color: ${Ic.icon};
        }
    }
`,bY=g(((n,i)=>{var{children:s,fadeColor:l,fadePosition:c="both",showIndicator:d=!1,onResize:h}=n,g=Vo(n,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[p,f]=a("left"===c||"both"===c),[m,b]=a("right"===c||"both"===c),y=o(null),x=o(null),w=op($,50);function $(){const e=y.current,t=x.current;e&&t&&t.scrollWidth>e.offsetWidth?(b(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),f(t.scrollLeft>=1)):(b(!1),f(!1))}function C(){$(),h&&h({content:x.current,wrapper:y.current})}lr({onResize:C,targetRef:y,refreshMode:"debounce",refreshRate:50}),v(i,(()=>({resize(){C()}}))),u((()=>{const e=x.current;return $(),e&&e.addEventListener("scroll",w),()=>{e&&e.removeEventListener("scroll",w)}}),[]);return t(gY,Object.assign({ref:y},g,{children:[e(fY,{ref:x,children:s}),(()=>{let n;return n=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(r,{children:[p&&e(pY,{$backgroundColor:n.left,$position:"left",$showIndicator:d,"data-id":"left-fade",children:d&&e(mY,{$position:"left","data-id":"left-fade-indicator-button",children:e(xe,{})})}),m&&e(pY,{$backgroundColor:n.right,$position:"right",$showIndicator:d,"data-id":"right-fade",children:d&&e(mY,{$position:"right","data-id":"right-fade-indicator-button",children:e(ye,{})})})]})})()]}))})),vY=M.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return _`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${Rc["width-040"]} ${Rc.solid}
                        ${Ic.border};
                }
            `}}
`,yY=M.li`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${Rc["width-040"]} ${Rc.solid} ${Ic.border};

    ${e=>{if(e.$width)return _`
                width: ${e.$width};
            `}}

    ${e=>{if(e.$active)return _`
                border-color: ${Ic["border-primary"]};
            `}}

    ${Lc.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,xY=M.button`
    position: relative;
    padding: ${jc["spacing-16"]} ${jc["spacing-16"]}
        ${jc["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,wY=M(ud.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Ic["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return _`
                opacity: 0;
            `}}
`,$Y=M(ud.BodyBL)`
    color: ${Ic["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return _`
                opacity: 1;
            `}}
`,CY=M(bY)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${jc["spacing-4"]};
    }
`,SY=({controlledMode:r,"data-testid":n,onTabClick:i,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:c}=f(hY),d=R(),u=Pc["md-max"]({theme:d}),h=Cu.useMediaQuery({maxWidth:u}),g=Pc["lg-max"]({theme:d}),p=o(null),m=e=>t=>{t.preventDefault(),r||s(e),i&&i(c[e].title,e)},b=e=>h&&e.length>20?`${e.substring(0,20)}...`:e;return e(CY,{onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=g&&p.current&&(e.scrollLeft=p.current.getBoundingClientRect().left)},"data-testid":n,children:e(vY,{role:"tablist",$fullWidthIndicatorLine:a,children:c.map(((r,i)=>{const o=l===i;return e(yY,{role:"none",$active:o,ref:o?p:null,$width:r.width,children:t(xY,{role:"tab",type:"button","aria-selected":o,onClick:m(i),"data-testid":`${n}-link-${i}`,children:[e(wY,{$active:o,weight:"regular",children:b(r.title)}),e($Y,{$active:o,weight:"semibold","aria-hidden":"true",children:b(r.title)})]})},i)}))})})},kY=M.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,DY=Object.assign((r=>{var{children:n,currentActive:i,initialActive:o=0,onTabClick:s,"data-testid":l,fullWidthIndicatorLine:d}=r,h=Vo(r,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[g,p]=a(i||o),f=m((()=>k.toArray(n).filter(Boolean).map((e=>({title:e.props.title,width:e.props.width})))),[n]);u((()=>{"number"==typeof i&&p(i)}),[i]);return e(kY,Object.assign({"data-testid":l},h,{children:t(hY.Provider,{value:{tabLinks:f,currentActiveIndex:g,setCurrentActiveIndex:p},children:[e(SY,{controlledMode:"number"==typeof i,onTabClick:s,"data-testid":`${l}-tabs`,fullWidthIndicatorLine:d}),k.toArray(n).filter(Boolean).map(((e,t)=>c(e,{key:t,index:t})))]})}))}),{Item:t=>{var{index:r,children:n}=t,i=Vo(t,["index","children"]);const{currentActiveIndex:o}=f(hY);return o===r?e("div",Object.assign({role:"tabpanel"},i,{children:n})):null}}),EY=M.div`
    border-radius: ${zc.sm};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Ac["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n,i,o;if("solid"===e.$type)switch(n=Ic["text-inverse"],e.$color){case"grey":t=Ic["bg-inverse-subtler"],i=Ic["bg-inverse-hover"];break;case"green":t=Ic["bg-success-strong"],i=Ic["bg-success-strong-hover"];break;case"yellow":t=Ic["bg-warning-strong"],i=Ic["bg-warning-strong-hover"];break;case"red":t=Ic["bg-error-strong"],i=Ic["bg-error-strong-hover"];break;case"blue":t=Ic["bg-info-strong"],i=Ic["bg-info-strong-hover"];break;default:t=Ic["bg-inverse"],i=Ic["bg-inverse-hover"]}else switch(e.$color){case"grey":t=Ic["bg-strong"],r=Ic["border-strong"],n=Ic["text-subtle"],i=Ic["bg-hover-neutral-strong"];break;case"green":t=Ic["bg-success"],r=Ic["border-success"],n=Ic["text-success"],i=Ic["bg-success-hover"];break;case"yellow":t=Ic["bg-warning"],r=Ic["border-warning"],n=Ic["text-warning"],i=Ic["bg-warning-hover"];break;case"red":t=Ic["bg-error"],r=Ic["border-error"],n=Ic["text-error"],i=Ic["bg-error-hover"];break;case"blue":t=Ic["bg-info"],r=Ic["border-info"],n=Ic["text-info"],i=Ic["bg-info-hover"];break;default:t=Ic.bg,r=Ic.border,n=Ic.text,i=Ic["bg-hover-neutral"]}return _`
            background: ${t};
            border: ${Rc["width-010"]} ${Rc.solid} ${r};
            color: ${n};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&i&&`background: ${i(e)};`}
                    ${e.$interactive&&o}
                }
            }
        `}}

    ${Lc.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return _`
                    ${Ac["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,TY=M.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,FY=r=>{var{type:n,colorType:i="black",children:o,interactive:a=!1,icon:s,iconPosition:l="left"}=r,c=Vo(r,["type","colorType","children","interactive","icon","iconPosition"]);return t(EY,Object.assign({as:a?"button":"div",$type:n,$color:i,$interactive:a},c,{children:["left"===l&&s,e(TY,{children:o}),"right"===l&&s]}))};var OY;Pu.extend(Nu),function(e){e.formatHourlyDisplay=e=>Pu(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>nh.getTimeDiffInMinutes(e,t)/15*(r/2)}(OY||(OY={}));const MY=1.25,_Y=e=>"minified"===e?12:40,IY=e=>"minified"===e?12:40,AY=M.div`
    position: relative;
    display: flex;
    align-items: center;
`,BY=M(ad)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${Ic.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${Ic.Primitive["neutral-50"]} r g b / 50%);
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?_`
                  right: 0;
              `:_`
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
`,RY=M(ye)`
    width: 1rem;
    height: 1rem;
    color: ${Ic["icon-primary"]};
`,jY=M(xe)`
    font-size: 1rem;
    color: ${Ic["icon-primary"]};
`,zY=M.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+IY(e)}px`};
`,PY=M.div`
    position: relative;
    white-space: nowrap;
    height: ${MY}rem;
`,LY=M.div`
    display: flex;
    white-space: nowrap;
`,NY=M.div`
    display: inline-block;
    width: ${({$variant:e})=>`${_Y(e)}px`};
    position: relative;
    border-left: ${Rc["width-010"]} ${Rc.solid}
        ${Ic["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?MY:.625;break;case"minified":t=e.$isLongMarker?MY:0;break;default:t=0}return _`
            height: ${t}rem;
        `}}
`,HY=M(ud.BodyXS)`
    color: ${Ic["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,WY=M.div`
    ${e=>"vertical"===e.$type?_`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:_`
                position: absolute;
                height: ${IY(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&_`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||Ic["bg-strongest"]} 0px,
                ${e.$bgColor2||Ic["bg-strongest"]} 10px,
                ${e.$bgColor||Ic["bg-stronger"]} 10px,
                ${e.$bgColor||Ic["bg-stronger"]} 20px
            );
        `}
`,YY=M.div`
    position: absolute;
    top: ${MY}rem;
    height: ${({$variant:e})=>`${IY(e)}px`};
    z-index: 1;
    border-right: ${Rc["width-010"]} ${Rc.solid}
        ${Ic["border-stronger"]};
`,VY=M(ud.BodyXS)`
    color: ${e=>e.$color||Ic.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,UY=({"data-testid":n,className:i,variant:s="default",startTime:l,endTime:c,slots:d,onSlotClick:h,onClick:g,styleAttributes:p})=>{const f=o(null),[m,b]=a(0),[v,y]=a(0),x=_Y(s),w=2.5*x;u((()=>{const e=f.current;return e&&e.addEventListener("scroll",$),()=>{e&&e.removeEventListener("scroll",$)}}),[]);const $=()=>{f.current&&b(f.current.scrollLeft)},C=e=>{f.current&&f.current.scrollBy({left:"left"===e?-w:w,behavior:"smooth"})};lr({onResize:()=>{f.current&&y(f.current.clientWidth)},targetRef:f,refreshMode:"debounce",refreshRate:50});const S=e=>e<=x/2,k=e=>{if(n)return`${n}-${e}`},D=(e,t,r)=>{const n=0===e.minute();if("default"===r)return n;return n&&(t?e.hour()%2==0:e.hour()%2==1)};return t(AY,{className:i,children:[t(zY,{"data-testid":n,ref:f,$variant:s,children:[e(PY,{"data-testid":k("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const t=[],r=Pu(l,"HH:mm"),n=Pu(c,"HH:mm"),i=r.hour()%2==0;for(let o=r;o.isBefore(n);o=o.add(30,"minute")){const r=D(o,i,s);t.push(e(NY,{$isLongMarker:r,$variant:s,children:r&&e(HY,{weight:"semibold",children:OY.formatHourlyDisplay(o.format("HH:mm"))})},o.format("HH:mm")))}return t})()}),t(LY,{"data-testid":k("time-slot-wrapper"),"data-id":"slot-wrapper",children:[(()=>{if(!p)return;const{backgroundColor:n,backgroundColor2:i,styleType:o="default"}=p,a=OY.calculateWidth(l,c,x),d=!!g&&"default"===s;return t(r,{children:[e(YY,{$variant:s}),e(WY,{"data-testid":k("default-timeslot"),$width:a,$variant:s,$left:0,$styleType:o,$bgColor:n,$bgColor2:i,$clickable:d,onClick:d?g:void 0},"default-timeslot")]})})(),d.map((r=>{const{id:n,startTime:i,endTime:o,label:a,clickable:d=!0,styleAttributes:u}=r,{color:g,styleType:p="default",backgroundColor:f,backgroundColor2:m}=u,b=OY.calculateWidth(i,o,x),v=OY.calculateWidth(l,i,x),y=d&&"default"===s;return t("div",{children:[e(YY,{$variant:s,style:{left:`${v}px`}}),e(WY,{"data-testid":k(`${n}-timeslot`),$width:b,$left:v,$styleType:p,$variant:s,$bgColor:f,$bgColor2:m,$clickable:y,onClick:()=>y&&h(r),children:a&&"default"===s&&e(VY,{$slotWidth:b,$color:g,weight:"semibold",children:S(b)?"...":a})}),c!==o&&e(YY,{$variant:s,style:{left:`${v+b}px`}})]},n)}))]})]}),e(r,{children:m>0&&e(BY,{"data-testid":k("arrow-left"),$direction:"left",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("left")},children:e(jY,{})})}),m+v<OY.calculateWidth(l,c,x)?e(BY,{"data-testid":k("arrow-right"),$direction:"right",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{C("right")},children:e(RY,{})}):e(r,{})]})},KY=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${jc["spacing-8"]};
    flex: 1;
`,XY=M(ud.BodyXS)`
    ${e=>e.$disabled&&_`
            color: ${Ic["text-disabled-subtlest"]};
        `}
`,qY=M.div`
    grid-column: 2 / -1;
    display: flex;
`,GY=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${jc["spacing-4"]};
`,ZY=M(Ho.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,QY=M.div`
    display: flex;
    gap: ${jc["spacing-4"]};
    transition: all ${Bc["duration-250"]} ${Bc["ease-default"]};
    overflow: hidden;
`,JY=M.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${jc["spacing-4"]};
    width: 1.375rem;
    transition: all ${Bc["duration-250"]} ${Bc["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,eV=M.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,tV=M.div`
    ${Ac["body-xs-bold"]}
    color: ${Ic["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${Ac.Spec["body-size-sm"]};
    }
`,rV=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${jc["spacing-4"]};
`,nV=M.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${jc["spacing-8"]};
`,iV=M(Kd.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${jc["spacing-8"]};
    }
`,oV=M(ue)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${Bc["duration-250"]} ${Bc["ease-default"]};
`,aV=M(WY)`
    ${e=>{if("vertical"===e.$type)return _`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${zc.xs};
            `}}

    ${e=>e.$halfFill?_`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${Ic["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||Ic["bg-strongest"]} 0px,\n                            ${e.$bgColor2||Ic["bg-strongest"]} 10px,\n                            ${e.$bgColor||Ic["bg-stronger"]} 10px,\n                            ${e.$bgColor||Ic["bg-stronger"]} 20px\n                        )`};
            `:_`
                background-color: ${e.$bgColor};
            `}
`;var sV=va;var lV=function(e,t,r){for(var n=-1,i=e.length;++n<i;){var o=e[n],a=t(o);if(null!=a&&(void 0===s?a==a&&!sV(a):r(a,s)))var s=a,l=o}return l};var cV=lV,dV=uD,uV=function(e,t){return e<t};var hV=Zo((function(e,t){return e&&e.length?cV(e,dV(t),uV):void 0}));var gV=lV,pV=function(e,t){return e>t},fV=uD;var mV=Zo((function(e,t){return e&&e.length?gV(e,fV(t),pV):void 0}));const bV=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:s,maxDate:l,startTime:c,endTime:d,maxVisibleCellHeight:u,slots:h,interval:g=30,variant:p="flexible",enableSelection:f=!0,onSlotClick:b})=>{var v,y,x,w;const $="YYYY-MM-DD",[C,S]=a(!1),[k,D]=a(),E=m((()=>Zu.generateDaysForCurrentWeek(r)),[r]),T=Object.values(null!=h?h:{}).flat(),F=null!==(y=null!=c?c:null===(v=hV(T,"startTime"))||void 0===v?void 0:v.startTime)&&void 0!==y?y:"00:00",O=null!==(w=null!=d?d:null===(x=mV(T,"endTime"))||void 0===x?void 0:x.endTime)&&void 0!==w?w:"24:00",M=Math.ceil(nh.getTimeDiffInMinutes(F,O)/g),{height:_=0,ref:I}=lr(),A=u?_<u||C?_:u:_,B=So({height:A}),R=m((()=>{if(h){const e={};return Object.entries(h).forEach((([t,r])=>{const n=function(e){const t=Array(M).fill({});return e.forEach((e=>{const r=Math.max(0,nh.getTimeDiffInMinutes(F,e.startTime)/g),n=Math.min(M,nh.getTimeDiffInMinutes(F,e.endTime)/g),i=Math.ceil(n)-Math.floor(r);switch(p){case"fixed":t[Math.floor(r)]=Object.assign(Object.assign({},e),{cellLength:n-r});break;case"flexible":for(let o=0;o<i;o++){const a=nh.addMinutesToTime(F,Math.floor(r+o)*g),s=nh.addMinutesToTime(a,g);let l;U_(t[Math.floor(r+o)])?0===o&&r%1!=0?l="top":o===i-1&&n%1!=0&&(l="bottom"):l=void 0,t[Math.floor(r+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(r);e[t]=function(e){var t,r,n,i;let o=0;switch(p){case"fixed":for(e=e.reduce(((e,t)=>{const r=e.length>0?e[e.length-1]:e[0];return U_(t)&&U_(r)?e:[...e,t]}),[{}]);o<e.length;){if(U_(e[o])){const a=null!==(r=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==r?r:F,s=null!==(i=null===(n=e[o+1])||void 0===n?void 0:n.startTime)&&void 0!==i?i:O;if(a!==s){const t=nh.getTimeDiffInMinutes(a,s)/g;e[o]=Object.assign(Object.assign({},N(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)U_(e[o])?(e[o]=N(o),o++):o+=e[o].cellLength}return e.filter((e=>!U_(e)&&e.cellLength>0))}(n)})),e}return{}}),[h]),j=e=>{D(e)},z=()=>{D(void 0)},P=e=>{e.preventDefault(),S((e=>!e))},L=e=>{var t;const r=Zu.isWithinRange(e,s?Pu(s):void 0,l?Pu(l):void 0),i=null!==(t=n&&n.includes(e.format($)))&&void 0!==t&&t;return!r||i};function N(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:Ic["bg-stronger"]},cellLength:t}}return t(GY,{children:[e(qY,{children:E.map(((t,r)=>{const n=(e=>{const t=e.format($),r=L(e),n={},o=f&&!r;r&&(n.disabled=!0),n.interactive=f?o:null;const a=o&&k&&e.isSame(k,"day"),s=[i].includes(t);return s&&a?(n.labelType="selected-hover",n.circleLeft="selected-hover-outline",n.circleRight="selected-hover-outline"):s?(n.labelType="selected",n.circleLeft="selected-outline",n.circleRight="selected-outline"):a&&(n.labelType="hover",n.circleLeft="hover-subtle",n.circleRight="hover-subtle"),n})(t);return e(dg,Object.assign({date:t,calendarDate:Pu(i),onSelect:()=>{((e,t)=>{!t&&f&&o(e)})(t,!n.interactive)},onHover:j,onHoverEnd:z},n),`day-${r}`)}))}),e(qY,{children:E.map(((t,r)=>e(KY,{children:e(XY,{weight:"semibold",$disabled:L(t),children:Pu(t).format("ddd")})},`week-day-${r}`)))}),(()=>{let t=!1;const r=e=>{const r=Pu(F,"HH:mm").add(4*e*g,"minutes"),n=r.format("h"),i=r.format("mm"),o=r.format("a");let a=`${n}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e(JY,{$height:A,children:Array(Math.ceil(M/4)).fill(void 0).map(((t,n)=>e(eV,{children:e(tV,{children:r(n)})},`time-${n}`)))})})(),e(ZY,{style:B,children:e(QY,{ref:I,children:E.map(((t,r)=>{var n;const i=t.format($),o=null!==(n=R[i])&&void 0!==n?n:Array("flexible"===p?M:1).fill(void 0).map(((e,t)=>N(t,"fixed"===p?M:void 0)));return e(rV,{children:o.map((t=>{const{id:r,clickable:n=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e(aV,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:n,$height:"fixed"===p?12*a+4*(a-1):12,onClick:()=>n&&((e,t)=>{b&&b(e,t)})(i,t)},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format($)}`)}),(()=>{if(u&&I.current&&!(_&&_<u))return e(nV,{children:t(iV,{"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:P,children:[e(oV,{$isExpanded:C}),(C?"Hide":"Show")+" later times"]})})})()]})},vV=M.div`
    --header-bottom-spacing: 0.5rem;

    ${Lc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,yV="YYYY-MM-DD",xV=t=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:i,value:s,minDate:l,maxDate:c,startTime:d,endTime:h,slots:g,interval:p,variant:f,maxVisibleCellHeight:m,showNavigationHeader:b=!0,enableSelection:v,onSlotClick:y,currentCalendarDate:x}=t,w=Vo(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[$,C]=a(s),S=o(null),k=o(void 0);u((()=>{C(s)}),[s]);const D=e=>{const t=e.format(yV);C(t),i&&i(t)},E=(e,t)=>{y&&y(e,t)},T=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format(yV),lastDayOfWeek:e.endOf("week").format(yV)},month:e.month()+1,year:e.year()};n(t)}};return e(vV,Object.assign({},w,{children:e(qh,{ref:S,dynamicHeight:!0,initialCalendarDate:nh.toDayjs($||x).endOf("week").format(yV),selectedStartDate:$,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!l&&Pu(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>!!c&&Pu(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{k.current&&k.current.isSame(e,"week")||T(e),k.current=e},showNavigationHeader:b,minDate:l,maxDate:c,getMonthHeaderLabel:e=>Pu(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Pu(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>(t=>e(bV,{calendarDate:t,disabledDates:r,selectedDate:$,minDate:l,maxDate:c,startTime:d,endTime:h,onSelect:D,slots:g,interval:p,variant:f,maxVisibleCellHeight:m,enableSelection:v,onSlotClick:E}))(t)})}))},wV=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,$V=M.div`
    ${Ac["body-xs-semibold"]}
    color:${Ic.text};

    ${e=>e.$disabled&&_`
            color: ${Ic["text-disabled-subtlest"]};
        `};
`,CV=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,SV=M.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,kV=M.div`
    ${Ac["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${Ic.text};
    span {
        display: block;
    }
`,DV=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;Pu.extend(Wu);const EV="YYYY-MM-DD",TV={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:Ic["bg-stronger"],backgroundColor2:Ic["bg-strongest"]}},FV=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:s,maxDate:l,slots:c,enableSelection:d=!0,onSlotClick:u})=>{const h=m((()=>Zu.generateDaysForCurrentWeek(r)),[r]),[g,p]=a(),f=e=>{p(e)},b=()=>{p(void 0)},v=e=>{const t=e.format(EV),r=(e=>{const t=Zu.isWithinRange(e,s?Pu(s):void 0,l?Pu(l):void 0),r=!!n&&n.includes(e.format(EV));return!t||r})(e),o=d&&!r,a=o&&g&&e.isSame(g,"day"),c=[i].includes(t),u={labelType:"available",interactive:d?o:null};return r&&(u.disabled=!0,u.labelType="unavailable"),c&&a?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):c?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):a&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return t(CV,{children:[h.map(((r,n)=>{const a=v(r);return t(wV,{children:[e(dg,Object.assign({date:r,calendarDate:Pu(i),onSelect:()=>{((e,t)=>{!t&&d&&o(e)})(r,!a.interactive)},onHover:f,onHoverEnd:b},a),`day-${n}`),e($V,{$disabled:a.disabled,children:Pu(r).format("ddd")})]},`week-day-${n}`)})),e(SV,{children:h.map(((r,n)=>{const i=r.format(EV),o=c&&(c[i]?c[i]:[TV]);return e(DV,{children:o&&o.map((r=>{const{id:n,startTime:o,endTime:a,clickable:s=!0,styleAttributes:l}=r,{color:c,styleType:d="default",backgroundColor:h,backgroundColor2:g}=l;return e(WY,{$type:"vertical",$variant:"default",$styleType:d,$bgColor:h,$bgColor2:g,$clickable:s,onClick:()=>s&&((e,t)=>{null==u||u(e,t)})(i,r),children:t(kV,{style:{color:c},children:[e("span",{children:Zu.convertTo12HourFormat(o)}),a&&o&&e("span",{children:"-"}),e("span",{children:Zu.convertTo12HourFormat(a)})]})},n)}))},`wrapper-${n}`)}))},`week-cell-${r.format(EV)}`)]})},OV=M.div`
    --header-bottom-spacing: 0.5rem;

    ${Lc.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,MV="YYYY-MM-DD",_V=t=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:i,value:s,minDate:l,maxDate:c,slots:d,showNavigationHeader:h=!0,enableSelection:g,onSlotClick:p,currentCalendarDate:f}=t,m=Vo(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[b,v]=a(s),y=o(null),x=o(void 0);u((()=>{v(s)}),[s]);const w=e=>{const t=e.format(MV);v(t),i&&i(t)},$=(e,t)=>{p&&p(e,t)},C=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format(MV),lastDayOfWeek:e.endOf("week").format(MV)},month:e.month()+1,year:e.year()};n(t)}};return e(OV,Object.assign({},m,{children:e(qh,{ref:y,dynamicHeight:!0,initialCalendarDate:nh.toDayjs(b||f).endOf("week").format(MV),selectedStartDate:b,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!l&&Pu(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>!!c&&Pu(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"week")||C(e),x.current=e},showNavigationHeader:h,minDate:l,maxDate:c,getMonthHeaderLabel:e=>Pu(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Pu(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>e(FV,{calendarDate:t,disabledDates:r,selectedDate:b,minDate:l,maxDate:c,onSelect:w,slots:d,enableSelection:g,onSlotClick:$})})}))},IV=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;

    ${e=>{switch(e.$variant){case"current":return _`
                    background-color: ${Ic["icon-primary-subtle"]};
                `;case"upcoming-active":return _`
                    border: 4px solid ${Ic["icon-primary-subtle"]};
                `;case"upcoming-inactive":return _`
                    border: 4px solid ${Ic["icon-subtle"]};
                `;case"disabled":return _`
                    background-color: ${Ic["icon-disabled-subtle"]};
                `;case"completed":return _`
                    background-color: ${Ic["icon-success"]};
                    svg {
                        color: ${Ic["icon-inverse"]};
                    }
                `;case"error":return _`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Ic["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,AV=M.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: ${zc.full};

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return _`
                    background-color: ${Ic["icon-primary-subtle"]};
                `;case"upcoming-inactive":return _`
                    background-color: ${Ic["icon-subtle"]};
                `;case"disabled":return _`
                    background-color: ${Ic["icon-disabled-subtle"]};
                `;case"completed":return _`
                    background-color: ${Ic["icon-success"]};
                `;case"error":return _`
                    margin-left: -0.15rem;
                    background-color: ${Ic["icon-error"]};
                `}}}
`,BV=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,RV=M.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${Lc.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${Lc.MaxWidth.sm} {
        grid-column: span 8;
    }
`,jV=M(ud.HeadingSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${Lc.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`,zV=M(ud.HeadingXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,PV=M.div`
    display: flex;

    :last-of-type ${AV} {
        margin-bottom: 0;
    }
`,LV=M.div`
    margin-bottom: 2rem;
    width: 100%;
`,NV=M.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,HV=M(HN)`
    padding: 0.125rem 0.5rem;
`,WV=({items:n,className:i,id:o,title:a,startCol:s,colSpan:l,"data-base-indicator-testid":c,"data-testid":d="timeline"})=>{const u=t=>"string"==typeof t?e(ud.BodyMD,{className:"timeline-item-content-text",children:t}):e(r,{children:t}),h=t=>"string"==typeof t?e(zV,{weight:"semibold",className:"timeline-item-title",children:t}):e(r,{children:t}),g=e=>e.slice(0,2).map(((e,t)=>D(HV,Object.assign({},e,{type:e.type,key:`status-pill-${t}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),p=t=>{switch(t){case"completed":return e(ge,{});case"error":return e(he,{});default:return null}};return t(RV,{className:i,id:o,"data-testid":d,$startCol:s,$colSpan:l,children:[e(jV,{"data-testid":"timeline-title",weight:"bold",children:a}),n.map(((r,n)=>{const{title:i,content:o,statuses:a,variant:s}=r,l=s||(0===n?"current":"upcoming-active");return t(PV,{children:[t(BV,{children:[e(IV,{"data-testid":c?`circleindicator${n+1}_div_${c}`:"circleindicator",$variant:l,children:p(l)}),e(AV,{$variant:l})]}),t(LV,{className:"timeline-item-content",children:[h(i),a&&e(NV,{children:g(a)}),u(o)]})]},`timeline-item-${n}`)}))]})},YV=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],VV=15,UV=252,KV=["#FFF2DD","#EBF7F5","#F2F4FE","#FCF1F2","#E9F6FD"],XV=B`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,qV=M(Vf)`
    color: ${Ic.icon};
    svg {
        ${e=>{if(e.$loading)return _`
                    animation: ${XV} 4s linear infinite;
                `}}
    }
`,GV=M.div`
    display: flex;
    padding-bottom: ${jc["spacing-16"]};
    justify-content: space-between;
    gap: ${jc["spacing-8"]};
`,ZV=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${jc["spacing-8"]};
`,QV=M(ud.BodySM)`
    color: ${Ic["text-subtler"]};
`,JV=M(qf)`
    width: 400px;
`,eU=n=>{var{selectedDate:i,loading:o,tableContainerRef:a,totalRecords:s,onPreviousDayClick:l,onNextDayClick:c,onRefresh:d,onCalendarDateSelect:u}=n,h=Vo(n,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const g=()=>{a.current&&(a.current.scrollTop=0)},p=()=>{d&&(g(),d())};return t(GV,{children:[e(JV,Object.assign({selectedDate:i,loading:o},h,{onRightArrowClick:e=>{g(),c(e)},onLeftArrowClick:e=>{g(),l(e)},onCalendarDateSelect:u})),void 0===s?e(r,{}):t(ZV,{children:[t(QV,{"data-testid":"timetable-records-results",weight:"semibold",children:[s," results found"]}),d&&e(qV,{"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:o,onClick:p,$loading:o,children:e(pe,{})})]})]})},tU=M.div`
    display: flex;
    width: 100%;
`,rU=M.div`
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    ${e=>{if(e.$isOnTheHour)return _`
                box-shadow: inset -0.5px 0px ${Ic["border-primary"]};
            `}}
`,nU=M.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,iU=M.div`
    width: 2px;
    height: 100%;
`,oU=M.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${zc.sm};
    box-sizing: border-box;
    padding: ${jc["spacing-4"]};
    ${({$status:e,$mainColor:t,$isClickable:r,$altColor:n})=>{switch(e){case"blocked":return _`
                    background: repeating-linear-gradient(
                        135deg,
                        ${Ic["bg-stronger"]} 0px 6px,
                        ${Ic["bg-strongest"]} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"filled":return _`
                    background: ${t};
                    &:hover {
                        cursor: ${r?"pointer":"default"};
                    }
                `;case"disabled":return _`
                    background: ${Ic["bg-disabled"]};
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"pending":return _`
                    background: repeating-linear-gradient(
                        135deg,
                        ${t} 0px 6px,
                        ${n} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;default:return _`
                    &:hover {
                        background-color: ${r?Ic["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,aU=M(ud.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,sU=M(ud.BodyXS)`
    color: ${Ic["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,lU=({containerRef:t,children:r,customPopover:n})=>{if(!n)return r;const i={position:"bottom-start",rootNode:t,customOffset:n.offset,children:r,trigger:n.trigger,delay:n.delay,popoverContent:n.content};return e(o$,Object.assign({},i))},cU=i.memo((({id:r,startTime:n,endTime:i,title:o,subtitle:a,status:s,intervalWidth:l,rowBarColor:c,containerRef:d,customPopover:u,roundedStartTime:h=n,roundedEndTime:g=i,onClick:p})=>{const f=0===Pu(g,"HH:mm").get("minutes"),m=nh.getTimeDiffInMinutes(h,g)/VV*l-2,b=!!p||u&&"click"===u.trigger;return e(lU,{containerRef:d,customPopover:u,children:e(rU,{"data-testid":"block-container",$isOnTheHour:f,children:t(nU,{children:[t(oU,{$width:m,$status:s,$mainColor:c.mainColor,$altColor:c.alternateColor,$isClickable:b,onClick:e=>{p&&p({id:r,startTime:n,endTime:i,status:s,title:o,subtitle:a,customPopover:u},e)},children:[o&&e(aU,{weight:"semibold",children:o}),a&&e(sU,{weight:"bold",children:a})]}),e(iU,{})]})},"block-container-key")})})),dU=({id:t,timetableMinTime:r,timetableMaxTime:n,rowMinTime:i,rowMaxTime:o,rowCells:a,rowBarColor:s,intervalWidth:l,containerRef:c,outOfRangeCellPopover:d})=>{const u=i?np.roundToNearestInterval(i,VV):r,h=o?np.roundToNearestInterval(o,VV,!0):n,g=m((()=>{const e=[];u&&Pu(r,"HH:mm").isBefore(Pu(u,"HH:mm"))&&e.push({id:t,startTime:r,endTime:u,status:"blocked",customPopover:d});const s=[...a].sort(((e,t)=>{const r=Pu(e.startTime,"HH:mm"),n=Pu(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0}));let l;return s.forEach(((r,n)=>{var i;const{startTime:o,endTime:s}=r;let c=np.roundToNearestInterval(o,VV);l&&Pu(c,"HH:mm").isBefore(Pu(l,"HH:mm"))&&(c=np.roundToNearestInterval(o,VV,!0));const d=np.roundToNearestInterval(s,VV,!0);e.push(Object.assign(Object.assign({},r),{roundedStartTime:c,roundedEndTime:d}));const u=(null===(i=a[n+1])||void 0===i?void 0:i.startTime)||h,g=Pu(np.roundToNearestInterval(u,VV),"HH:mm");let p=Pu(d,"HH:mm");for(;p.isBefore(g);)if(f=g,p.get("hour")!=f.get("hour")){const r=p.add(1,"hour").startOf("hour");e.push({id:t,startTime:p.format("HH:mm").toString(),endTime:r.format("HH:mm").toString(),status:"disabled"}),p=r}else e.push({id:t,startTime:p.format("HH:mm").toString(),endTime:g.format("HH:mm").toString(),status:"disabled"}),p=g;var f;l=p.format("HH:mm").toString()})),h&&Pu(n,"HH:mm").isAfter(Pu(h,"HH:mm"))&&e.push({id:t,startTime:h,endTime:n,status:"blocked",customPopover:d}),0!==s.length||i||o||e.push({id:t,startTime:r,endTime:n,status:"blocked",customPopover:d}),e}),[u,r,a,h,n,i,o,t,d]);return e(tU,{"data-testid":"timetable-row",children:g.map(((t,r)=>e(cU,Object.assign({},t,{intervalWidth:l,rowBarColor:s,containerRef:c}),`${r}-row-cell-key`)))})},uU=M.div``,hU=M.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${UV}px auto;
`,gU=M.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${UV}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return _`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,pU=M.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${Ic.bg};
    width: ${UV}px;
    z-index: 2;
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?_`
                box-shadow: 2px 2px 8px
                    rgb(from ${Ic.Primitive["neutral-20"]} r g b / 25%);
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.12px":"0"}
                        ${e.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:_`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,fU=M.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${Ic.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,mU=M.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${Ic.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return _`
                box-shadow: 2px 2px 8px
                    rgb(from ${Ic.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,bU=M.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${jc["spacing-4"]};
`,vU=M(ud.BodySM)`
    color: ${Ic["text-subtler"]};
`,yU=M.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,xU=M.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${Ic.bg};
    width: ${UV}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${jc["spacing-16"]} 0 ${jc["spacing-32"]};
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    border-left: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?_`
                box-shadow: 2px 2px 8px
                    rgb(from ${Ic.Primitive["neutral-20"]} r g b / 25%);
            `:_`
                box-shadow: inset -0.5px 0px ${Ic["border-primary"]};
            `};
`,wU=M(ud.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${Ic["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,$U=M(ud.BodyXS)`
    display: inline-flex;
    gap: ${jc["spacing-4"]};
    align-items: center;
    color: ${Ic["text-subtler"]};
    ${e=>{if(!e.$show)return _`
                display: none;
            `}}
`,CU=M(bu)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,SU=M(Lp)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${jc["spacing-72"]} 0;
`,kU=M.div`
    display: flex;
    border-bottom: ${Rc["width-010"]} ${Rc.solid} ${Ic.border};
`,DU=M.div`
    border-right: ${Rc["width-005"]} ${Rc.solid}
        ${Ic["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${jc["spacing-20"]} ${jc["spacing-12"]};
`,EU=B`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,TU=M.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${Ic.Primitive["neutral-95"]} 8%,
        ${Ic.Primitive["neutral-100"]} 18%,
        ${Ic.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${EU} 1.5s forwards infinite;
`,FU=M(o$)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,OU=n=>{var{date:i,emptyContentMessage:s,rowData:l,loading:c,minTime:d="00:00",maxTime:h="23:00",minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPage:v,onRefresh:y,onNextDayClick:x,onPreviousDayClick:w,onCalendarDateSelect:$}=n,C=Vo(n,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const S=C["data-testid"]||"timetable",k=np.roundToNearestInterval(d,60),E=np.roundToNearestInterval(h,60,!0),T=np.generateHourlyIntervals(k,E),F=0===f||EE.isEmpty(l),O=F||l.length===f,M=o(null),_=o(null),[I,A]=a(!1),[B,R]=a(!1),[j,z]=a(0),[P,L]=a(!1);u((()=>{const e=EE.throttle((()=>{if(M.current&&(A(M.current.scrollLeft>0),R(M.current.scrollTop>0)),P||!M.current)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=M.current;Math.ceil(e+t)>=r-1&&!O&&v&&!c&&(L(!0),v())}),100),t=M.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[O,P,c,v]),u((()=>{L(!1)}),[l]);lr({onResize:()=>{if(M.current){const e=Math.ceil(60*T.length/VV),t=(M.current.clientWidth-UV)/e;z(t>21?t:21)}},targetRef:M,refreshMode:"debounce",refreshRate:50});const N=(()=>{let e=0;const t=YV.length;return()=>{const r=YV[e],n=KV[e];return e=(e+1)%t,{mainColor:r,alternateColor:n}}})(),H=({wrapper:e,children:t})=>e(t),W=()=>{if(!c&&P)return e(xU,{$isScrolled:I,children:e(TU,{})})},Y=()=>{if(!c&&P)return e(kU,{"data-testid":"lazy-loader",children:T.map(((t,r)=>e(DU,{$width:4*j,children:e(TU,{})},`lazy-load-cell-${r}`)))})};return t(uU,F?Object.assign({},C,{"data-testid":S,children:[e(eU,{selectedDate:i,loading:c||P,tableContainerRef:M,minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),e(hU,{className:"empty-container",children:c?e(CU,{$isEmptyContent:F}):e(SU,{type:"no-item-found",description:s})})]}):Object.assign({},C,{"data-testid":S,children:[e(eU,{"data-id":"timetable-date-navigator",selectedDate:i,loading:c||P,tableContainerRef:M,minDate:g,maxDate:p,totalRecords:f,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),t(gU,{"data-id":"timetable-container","data-testid":"timetable-container",ref:M,$loading:c,$allRecordsLoaded:O||!v,children:[e(pU,{$isScrolledY:B,$isScrolledX:I}),e(fU,{$numOfRows:l.length,$isScrolled:I,"data-testid":"row-header-column-id",children:t(r,{children:[l.map(((r,n)=>e(H,{wrapper:e=>((e,t)=>{if(!e.rowHeaderPopover)return t;const r={position:"bottom-start",rootNode:M,customOffset:e.rowHeaderPopover.offset,children:t,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return D(FU,Object.assign({},r,{key:`${e.id}-popover-trigger`,zIndex:2}),t)})(r,e),children:t(xU,{$isScrolled:I,children:[e(wU,{$isClickable:!!r.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(r,e),weight:"semibold","data-testid":`${r.id}-row-header-title`,children:r.name}),e($U,{weight:"bold",$show:!!r.subtitle,"data-testid":`${r.id}-row-header-subtitle`,children:r.subtitle})]},`${r.id}-row-header`)},n))),W()]})}),e(mU,{$numOfColumns:T.length,$isScrolled:B,children:T.map((t=>e(bU,{"data-testid":`${t}-column`,children:e(vU,{weight:"semibold",children:t})},`${t}-column-key`)))}),c?e(CU,{$isEmptyContent:F}):t(yU,{"data-testid":"content-container-id",ref:_,$numOfRows:l.length,children:[l.map(((t,r)=>e(dU,Object.assign({timetableMinTime:k,timetableMaxTime:E,rowBarColor:N(),intervalWidth:j,containerRef:_},t),`${r}-row-bar`))),Y()]})]})]}))},MU=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:Ic[t.Background],Border:Ic[t.Border],Text:Ic[t.Text],Icon:Ic[t.Icon]}},_U=M(Ho.div)`
    display: flex;
    flex-direction: row;
    position: ${e=>e.$fixed?"fixed":"relative"};
    margin: ${e=>e.$fixed?"1rem":0};
    top: 0;
    right: 0;
    padding: 1rem;
    border-radius: ${zc.md};
    z-index: 10;
    align-items: center;
    gap: 2rem;

    ${Lc.MaxWidth.lg} {
        left: 0;
    }

    ${e=>_`
            background: ${MU(e).Background};
            border: 1px solid ${MU(e).Border};
            color: ${MU(e).Text};
        `};
`,IU=M.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${Lc.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,AU=M.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${e=>_`
            & > svg {
                flex-shrink: 0;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.0625rem;
                margin-right: 0.5rem;
                color: ${MU(e).Icon};
            }
        `};
`,BU=M.div`
    display: flex;
    flex-direction: column;
`,RU=M(ud.HeadingXS)`
    display: flex;

    ${e=>_`
            color: ${MU(e).Text};
        `}
`,jU=M.div`
    ${e=>_`
            p {
                color: ${MU(e).Text};
            }
        `}
`,zU=M(Kd.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${Lc.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,PU=M(ad)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>_`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${MU(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${Lc.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,LU=4e3,NU=r=>{var{type:n="success",title:o,label:s,autoDismiss:l,autoDismissTime:c=LU,onDismiss:d,fixed:h=!0,actionButton:g}=r,p=Vo(r,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[f,m]=a(!1),b=R(),v=Pc["lg-max"]({theme:b}),y=Cu.useMediaQuery({maxWidth:v});u((()=>{m(!0)}),[]),u((()=>{if(!l)return;const e=setTimeout((()=>{m(!1)}),c);return()=>clearTimeout(e)}),[l]);const x=So({opacity:f?1:0,transform:f?y?"translateY(0%)":"translateX(0%)":y?"translateY(-1500%)":"translateX(150%)",config:{easing:kn.easeInOutQuart,duration:1e3},onRest:()=>{f||null==d||d()}});return t(_U,Object.assign({style:x,$type:n,$fixed:h},p,{children:[t(IU,{children:[t(AU,{$type:n,children:[(()=>{switch(n){case"success":return e(be,{});case"warning":return e(me,{});case"error":return e(he,{});case"info":return e(fe,{});default:return null}})(),t(BU,{children:[o&&(i.isValidElement(o)?o:e(RU,{$type:n,weight:"semibold",children:o})),s&&e(jU,{$type:n,children:i.isValidElement(s)?s:e(o?ud.BodyMD:ud.BodyBL,{children:s})})]})]}),g&&e(zU,{styleType:"light",onClick:g.onClick,children:g.label})]}),e(PU,{$type:n,onClick:()=>{m(!1)},children:e(re,{})})]}))},HU=M.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${e=>(e=>{switch(e){case"left":return _`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${um.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"right":return _`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${um.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"bottom":return _`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${um.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;default:return _`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${um.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?_`
            visibility: "visible";
            opacity: 1;
            transition: ${uH.Base};
            z-index: 2;
        `:_`
            visibility: "hidden";
            opacity: 0;
            transition: ${uH.Base};
            z-index: -1;
        `}
`,WU=M(kg)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,YU=M.div`
    position: absolute;
    overflow: hidden;

    ${e=>{switch(e.position){case"top":default:return _`
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
                        border-color: ${XN.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return _`
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
                        border-color: transparent ${XN.Neutral[8]}
                            transparent transparent;
                    }
                `;case"left":return _`
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
                            ${XN.Neutral[8]};
                    }
                `;case"bottom":return _`
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
                            ${XN.Neutral[8]} transparent;
                    }
                `}}}
`,VU=M.div`
    position: relative;
`,UU=r=>{var{visible:n,position:i="top",children:s}=r,l=Vo(r,["visible","position","children"]);const c=l["data-testid"]||"tooltip",[d,h]=a(i),g=o(null);u((()=>(f(),window.addEventListener("resize",Jg(p,300)),()=>{window.removeEventListener("resize",Jg(p,300))})),[]);const p=()=>{f()},f=()=>{if(g.current){const e=g.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":h("right");break;case"right":h("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":h("left");break;case"left":h("top")}else h(i)}};return t(HU,Object.assign({position:d,"data-testid":c,visible:n,ref:g},l,{children:[e(WU,{children:"string"==typeof s?e(sH.BodySmall,{children:s}):s}),e(YU,{position:d})]}))},KU=(r,n)=>i=>{const{tooltipVisible:o,position:a}=i,s=Vo(i,["tooltipVisible","position"]);return t(VU,{children:[e(r,Object.assign({},s)),e(UU,{visible:o,position:a,children:n.content})]})},XU=_`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${Lc.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,qU=M(LR.Content)`
    background: ${({$background:e})=>e?Ic["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,GU=M(ud.HeadingSM)`
    margin-bottom: 1rem;
    ${XU}
`,ZU=M(ud.BodyBL)`
    margin-bottom: 2rem;
    ${XU}
`,QU=M.div`
    ${XU}
`,JU=M.ul`
    ${XU}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${Lc.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${Lc.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,eK=i.forwardRef(((t,r)=>{var{stretch:n}=t,i=Vo(t,["stretch"]);return e(JU,Object.assign({ref:r,$stretch:n},i))})),tK=M.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return _`
                    grid-column: auto / span 4;
                `;case"full":return _`
                    grid-column: auto / span 8;
                `}}}

    ${Lc.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,rK=M.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Ic["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${Ac.Spec["body-size-baseline"]};
        height: ${Ac.Spec["body-size-baseline"]};
    }
`,nK=M.button`
    ${Ac["body-baseline-regular"]}
    color: ${Ic.text};
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
`,iK=M.span`
    color: ${Ic["text-disabled"]};
`,oK=M(Fd)`
    margin-right: 0.5rem;
    color: ${Ic["text-disabled"]};
`,aK=M(Ue)`
    color: ${Ic["icon-warning"]};
    margin-right: 0.5rem;
    height: ${Ac.Spec["body-size-baseline"]};
    width: ${Ac.Spec["body-size-baseline"]};
`,sK=M.span`
    color: ${Ic["text-warning"]};
`,lK=M.span`
    ${Ac["body-baseline-semibold"]}
    color: ${Ic.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,cK=M(su)`
    margin-top: 0.5rem;
`,dK=({label:n,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:c="•",maskRange:d,unmaskRange:h,maskRegex:g,disableMaskUnmask:p,alert:f,maskTransformer:m,onMask:b,onUnmask:v,onTryAgain:y})=>{const[x,w]=a(s);u((()=>{w(s)}),[s]);const $=()=>{switch("fail"===l&&y&&y(),x){case"masked":v&&v(),w("unmasked");break;case"unmasked":b&&b(),w("masked")}},C=()=>"string"!=typeof i?i:"masked"===x?ah.maskValue(i,{maskChar:c,maskRange:d,unmaskRange:h,maskRegex:g,maskTransformer:m}):i,S=()=>{switch(l){case"fail":return t(r,{children:[e(aK,{}),e(sK,{children:"Error"}),e(lK,{children:"Try again?"})]});case"loading":return t(r,{children:[e(oK,{}),e(iK,{children:"Retrieving..."})]});default:return t(r,{children:[C(),e(rK,{children:"masked"===x?e(Ye,{"data-testid":"masked-icon"}):e(Ve,{"data-testid":"unmasked-icon"})})]})}};return t(tK,{$widthStyle:o,children:[e(f$,{children:n}),"string"!=typeof i?i:x?p?e(ud.BodyBL,{children:C()}):e(nK,{"data-testid":"clickable-label",onClick:$,"aria-busy":"loading"===l,"aria-live":"polite",type:"button",children:S()}):e(ud.BodyBL,{children:i}),f&&e(cK,Object.assign({sizeType:"small"},f))]})},uK=Object.assign((n=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:c,background:d=!0,stretch:u,onMask:h,onUnmask:g,onTryAgain:p}=n,f=Vo(n,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{h&&h(e)},b=e=>()=>{g&&g(e)},v=e=>()=>{p&&p(e)},y=()=>{if(i&&i.length>0){const t=i.map(((t,r)=>e(dK,Object.assign({},t,{onMask:m(t),onUnmask:b(t),onTryAgain:v(t)}),r)));return e(JU,{$stretch:u,children:t})}return null};return e(qU,Object.assign({$background:d},f,{type:"grid",children:c||t(r,{children:[o&&e(GU,{weight:"semibold",$stretch:u,children:o}),a&&e(ZU,{$stretch:u,children:a}),s&&e(QU,{"data-id":"top-section",$stretch:u,children:s}),y(),l&&e(QU,{"data-id":"bottom-section",$stretch:u,children:l})]})}))}),{ItemSection:eK,Item:dK}),hK={collections:{base:{InputBoxShadow:_`
        inset 0 0 4px 0px ${XN.Shadow.Accent}
    `,InputErrorBoxShadow:_`
        inset 0 0 4px 0px ${XN.Shadow.Red}
    `,ElevationBoxShadow:_`
      0px 2px 8px ${XN.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:_`
        inset 0 0 3px 0px ${XN.Shadow.Accent}
    `,InputErrorBoxShadow:_`
        inset 0 0 3px 0px ${XN.Shadow.Red}
    `,ElevationBoxShadow:_`
      0px 2px 8px ${XN.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},gK=e=>t=>{var r,n;const i=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,o=YN(hK,null==i?void 0:i[VN.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?WN(o,e,i.options.designToken):WN(o,e)},pK={InputBoxShadow:gK("InputBoxShadow"),InputErrorBoxShadow:gK("InputErrorBoxShadow"),ElevationBoxShadow:gK("ElevationBoxShadow"),Table:{Header:gK("Table.Header"),Cell:{Primary:gK("Table.Cell.Primary"),Secondary:gK("Table.Cell.Secondary"),Selected:gK("Table.Cell.Selected"),Hover:gK("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:gK("Button.Danger.BackgroundColor"),Hover:gK("Button.Danger.Hover"),Primary:gK("Button.Danger.Primary"),Border:gK("Button.Danger.Border")}}},fK=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=Vo(t,["children","data-testid","type","stretch"]);return e(mK,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),mK=M.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?_`
                padding: 0 3rem;
            `:_`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${um.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${um.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${um.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return _`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${um.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${um.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return _`
                    display: flex;
                    flex-direction: column;
                `;default:return _`
                    display: flex;
                `}}}
`,bK=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=Vo(t,["children","data-testid","stretch"]);return e(vK,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),vK=M.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?_`
                ${um.MaxWidth.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:_`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,yK=i.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=Vo(t,["children","data-testid","className","type","stretch"]);return e(bK,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e(fK,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),xK={Section:bK,Container:fK,Content:yK,ColDiv:pm};var wK;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(wK||(wK={}));const $K=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,CK=M.ol`
    ${e=>$K(e.bottomMargin)}
    margin-left: ${3}rem;

    ${um.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>aH.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${XN.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",n=e.counterSeparator||")";return _`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return _`
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
`,SK=M.ul`
    ${e=>$K(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>aH.getTextStyle(e.size,"regular")}
        color: ${XN.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,kK={Ul:t=>{var{size:r="Body",children:n}=t,i=Vo(t,["size","children"]);return e(SK,Object.assign({size:r},i,{children:n}))},Ol:t=>{var{size:r="Body",children:n}=t,i=Vo(t,["size","children"]);return e(CK,Object.assign({size:r},i,{children:n}))}},DK={[VN.colorScheme]:"base",[VN.textStyleScheme]:"base",[VN.designTokenScheme]:"base",[VN.resourceScheme]:"base"},EK={[VN.colorScheme]:"bookingsg",[VN.textStyleScheme]:"base",[VN.designTokenScheme]:"base",[VN.resourceScheme]:"bookingsg"},TK={[VN.colorScheme]:"rbs",[VN.textStyleScheme]:"base",[VN.designTokenScheme]:"rbs",[VN.resourceScheme]:"rbs"},FK={[VN.colorScheme]:"mylegacy",[VN.textStyleScheme]:"base",[VN.designTokenScheme]:"base",[VN.resourceScheme]:"mylegacy"},OK={[VN.colorScheme]:"ccube",[VN.textStyleScheme]:"base",[VN.designTokenScheme]:"base",[VN.resourceScheme]:"ccube"},MK={[VN.colorScheme]:"oneservice",[VN.textStyleScheme]:"oneservice",[VN.designTokenScheme]:"base",[VN.resourceScheme]:"base"};export{Jz as $,Qd as A,ju as B,Ic as C,ff as D,ob as E,wb as F,Iz as G,V$ as H,Vf as I,Z$ as J,hE as K,cu as L,oI as M,lI as N,cI as O,II as P,P$ as Q,AI as R,rb as S,xu as T,NI as U,KI as V,LR as W,Xz as X,Gz as Y,TE as Z,Uo as _,nb as a,XN as a$,tP as a0,zm as a1,QP as a2,JP as a3,ZP as a4,dL as a5,gL as a6,yN as a7,SN as a8,$m as a9,Gc as aA,Zc as aB,Qc as aC,Jc as aD,ed as aE,td as aF,rd as aG,nd as aH,id as aI,_c as aJ,Fc as aK,Oc as aL,Mc as aM,YA as aN,UY as aO,xV as aP,_V as aQ,WV as aR,UA as aS,OU as aT,NU as aU,CA as aV,UU as aW,KU as aX,ud as aY,uK as aZ,JA as a_,zN as aa,DI as ab,HN as ac,vH as ad,bH as ae,n$ as af,c$ as ag,o$ as ah,FI as ai,hW as aj,bW as ak,LI as al,zW as am,VW as an,uY as ao,DY as ap,FY as aq,sA as ar,Ac as as,Bc as at,Rc as au,jc as av,zc as aw,Pc as ax,Lc as ay,qc as az,su as b,pK as b0,xK as b1,um as b2,hm as b3,aH as b4,eH as b5,sH as b6,wK as b7,kK as b8,DK as b9,EK as ba,TK as bb,FK as bc,OK as bd,MK as be,VN as bf,uH as bg,Go as c,gu as d,bu as e,wh as f,Kd as g,kh as h,$g as i,kg as j,Ag as k,kp as l,Wf as m,qf as n,am as o,vm as p,Om as q,Lp as r,Ep as s,Kb as t,YB as u,kR as v,QR as w,tB as x,Oz as y,Mz as z};
//# sourceMappingURL=index.ede68107.js.map
