import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as g,useMemo as m,useImperativeHandle as b,lazy as v,Suspense as y,useReducer as x,memo as w,createContext as $,Fragment as S,Children as k,createElement as O}from"react";import C,{findDOMNode as T,unstable_batchedUpdates as D,createPortal as j}from"react-dom";import{ChevronUpIcon as _}from"@lifesg/react-icons/chevron-up";import I,{css as M,keyframes as E,useTheme as A}from"styled-components";import{ExternalIcon as N}from"@lifesg/react-icons/external";import{ArrowRightIcon as B}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as L}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as R}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as P}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as F}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as z,MinusSquareFillIcon as H,SquareTickFillIcon as W,SquareFillIcon as V,SquareIcon as Y,ClockIcon as U,ArrowUpIcon as K,ArrowDownIcon as X,ArrowRightIcon as q,PencilIcon as G,EraserIcon as Z,DownloadIcon as Q,CrossIcon as J,FilterIcon as ee,PlaceholderImageIcon as te,MagnifierPlusIcon as ne,MagnifierMinusIcon as re,ChevronLeftIcon as ie,ChevronRightIcon as oe,ChevronUpIcon as ae,ExclamationCircleFillIcon as se,TickIcon as le,RefreshIcon as ce,ICircleFillIcon as de,ExclamationTriangleFillIcon as ue,TickCircleFillIcon as he}from"@lifesg/react-icons";import{ChevronDownIcon as fe}from"@lifesg/react-icons/chevron-down";import{ChevronRightIcon as pe}from"@lifesg/react-icons/chevron-right";import{ChevronLeftIcon as ge}from"@lifesg/react-icons/chevron-left";import{useFloatingTree as me,useFloating as be,autoUpdate as ve,offset as ye,flip as xe,shift as we,limitShift as $e,size as Se,useTransitionStyles as ke,useClick as Oe,useDismiss as Ce,useInteractions as Te,FloatingPortal as De,FloatingFocusManager as je,FloatingTree as _e,useFloatingNodeId as Ie,FloatingNode as Me,useHover as Ee}from"@floating-ui/react";import{CrossIcon as Ae}from"@lifesg/react-icons/cross";import{StarIcon as Ne}from"@lifesg/react-icons/star";import{StarFillIcon as Be}from"@lifesg/react-icons/star-fill";import{CloudArrowUpFillIcon as Le}from"@lifesg/react-icons/cloud-arrow-up-fill";import{MagnifierIcon as Re}from"@lifesg/react-icons/magnifier";import{EyeIcon as Pe}from"@lifesg/react-icons/eye";import{EyeSlashIcon as Fe}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as ze}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as He}from"@lifesg/react-icons/square";import{SquareTickFillIcon as We}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Ve}from"@lifesg/react-icons/tick";import{CaretRightIcon as Ye}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Ue}from"@lifesg/react-icons/minus-square-fill";import{CircleIcon as Ke}from"@lifesg/react-icons/circle";import{CircleDotIcon as Xe}from"@lifesg/react-icons/circle-dot";import{BinIcon as qe}from"@lifesg/react-icons/bin";import{PencilIcon as Ge}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Ze}from"@lifesg/react-icons/drag-handle";import{MinusIcon as Qe}from"@lifesg/react-icons/minus";import{PlusIcon as Je}from"@lifesg/react-icons/plus";import{MenuIcon as et}from"@lifesg/react-icons/menu";import{Chevron2LeftIcon as tt}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as nt}from"@lifesg/react-icons/chevron-2-right";import{ChevronLineLeftIcon as rt}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as it}from"@lifesg/react-icons/chevron-line-right";import{EllipsisHorizontalIcon as ot}from"@lifesg/react-icons/ellipsis-horizontal";import{StarHalfIcon as at}from"@lifesg/react-icons/star-half";const st=i.createContext(!1);function lt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function ct(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function dt(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function ut(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function ht(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ft=function(e,t){return ft=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ft(e,t)};var pt=function(){return pt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},pt.apply(this,arguments)};var gt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var mt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},bt="object"==typeof gt&&gt&&gt.Object===Object&&gt,vt="object"==typeof self&&self&&self.Object===Object&&self,yt=bt||vt||Function("return this")(),xt=yt,wt=function(){return xt.Date.now()},$t=/\s/;var St=function(e){for(var t=e.length;t--&&$t.test(e.charAt(t)););return t},kt=/^\s+/;var Ot=function(e){return e?e.slice(0,St(e)+1).replace(kt,""):e},Ct=yt.Symbol,Tt=Ct,Dt=Object.prototype,jt=Dt.hasOwnProperty,_t=Dt.toString,It=Tt?Tt.toStringTag:void 0;var Mt=function(e){var t=jt.call(e,It),n=e[It];try{e[It]=void 0;var r=!0}catch(e){}var i=_t.call(e);return r&&(t?e[It]=n:delete e[It]),i},Et=Object.prototype.toString;var At=Mt,Nt=function(e){return Et.call(e)},Bt=Ct?Ct.toStringTag:void 0;var Lt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Bt&&Bt in Object(e)?At(e):Nt(e)},Rt=function(e){return null!=e&&"object"==typeof e};var Pt=Ot,Ft=mt,zt=function(e){return"symbol"==typeof e||Rt(e)&&"[object Symbol]"==Lt(e)},Ht=/^[-+]0x[0-9a-f]+$/i,Wt=/^0b[01]+$/i,Vt=/^0o[0-7]+$/i,Yt=parseInt;var Ut=mt,Kt=wt,Xt=function(e){if("number"==typeof e)return e;if(zt(e))return NaN;if(Ft(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ft(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Pt(e);var n=Wt.test(e);return n||Vt.test(e)?Yt(e.slice(2),n?2:8):Ht.test(e)?NaN:+e},qt=Math.max,Gt=Math.min;var Zt=function(e,t,n){var r,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function g(){var e=Kt();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return u?Gt(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function b(){var e=Kt(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Xt(t)||0,Ut(n)&&(d=!!n.leading,o=(u="maxWait"in n)?qt(Xt(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Kt())},b},Qt=Zt,Jt=mt;var en=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Jt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Qt(e,t,{leading:r,maxWait:t,trailing:i})},tn=function(e,t,n,r){switch(t){case"debounce":return Zt(e,n,r);case"throttle":return en(e,n,r);default:return e}},nn=function(e){return"function"==typeof e},rn=function(){return"undefined"==typeof window},on=function(e){return e instanceof Element||e instanceof HTMLDocument},an=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&nn(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!rn()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(rn())return null;if(t)return document.querySelector(t);if(r&&on(r))return r;if(n.targetRef&&on(n.targetRef.current))return n.targetRef.current;var i=T(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=an(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!rn()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return nn(t)?"renderProp":nn(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,rn()||(n.resizeHandler=tn(n.createResizeHandler,i,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ft(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){rn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return r.createElement(a,null)}}}(d);var sn=rn()?u:h;function ln(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=o(n),b=o(null),v=null!=f?f:b,y=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return sn((function(){if(!rn()){var e=an(g,$,d,h);y.current=tn((function(t){(d||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!rn()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,d,h,g,p,v.current]),pt({ref:v},w)}var cn=Object.defineProperty,dn={};((e,t)=>{for(var n in t)cn(e,n,{get:t[n],enumerable:!0})})(dn,{assign:()=>Wn,colors:()=>Fn,createStringInterpolator:()=>Bn,skipAnimation:()=>zn,to:()=>Ln,willAdvance:()=>Hn});var un=Tn(),hn=e=>Sn(e,un),fn=Tn();hn.write=e=>Sn(e,fn);var pn=Tn();hn.onStart=e=>Sn(e,pn);var gn=Tn();hn.onFrame=e=>Sn(e,gn);var mn=Tn();hn.onFinish=e=>Sn(e,mn);var bn=[];hn.setTimeout=(e,t)=>{const n=hn.now()+t,r=()=>{const e=bn.findIndex((e=>e.cancel==r));~e&&bn.splice(e,1),wn-=~e?1:0},i={time:n,handler:e,cancel:r};return bn.splice(vn(n),0,i),wn+=1,kn(),i};var vn=e=>~(~bn.findIndex((t=>t.time>e))||~bn.length);hn.cancel=e=>{pn.delete(e),gn.delete(e),mn.delete(e),un.delete(e),fn.delete(e)},hn.sync=e=>{$n=!0,hn.batchedUpdates(e),$n=!1},hn.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,hn.onStart(n)}return r.handler=e,r.cancel=()=>{pn.delete(n),t=null},r};var yn="undefined"!=typeof window?window.requestAnimationFrame:()=>{};hn.use=e=>yn=e,hn.now="undefined"!=typeof performance?()=>performance.now():Date.now,hn.batchedUpdates=e=>e(),hn.catch=console.error,hn.frameLoop="always",hn.advance=()=>{"demand"!==hn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Cn()};var xn=-1,wn=0,$n=!1;function Sn(e,t){$n?(t.delete(e),e(0)):(t.add(e),kn())}function kn(){xn<0&&(xn=0,"demand"!==hn.frameLoop&&yn(On))}function On(){~xn&&(yn(On),hn.batchedUpdates(Cn))}function Cn(){const e=xn;xn=hn.now();const t=vn(xn);t&&(Dn(bn.splice(0,t),(e=>e.handler())),wn-=t),wn?(pn.flush(),un.flush(e?Math.min(64,xn-e):16.667),gn.flush(),fn.flush(),mn.flush()):xn=-1}function Tn(){let e=new Set,t=e;return{add(n){wn+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(wn-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,wn-=t.size,Dn(t,(t=>t(n)&&e.add(t))),wn+=e.size,t=e)}}}function Dn(e,t){e.forEach((e=>{try{t(e)}catch(e){hn.catch(e)}}))}function jn(){}var _n={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function In(e,t){if(_n.arr(e)){if(!_n.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var Mn=(e,t)=>e.forEach(t);function En(e,t,n){if(_n.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var An=e=>_n.und(e)?[]:_n.arr(e)?e:[e];function Nn(e,t){if(e.size){const n=Array.from(e);e.clear(),Mn(n,t)}}var Bn,Ln,Rn=(e,...t)=>Nn(e,(e=>e(...t))),Pn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Fn=null,zn=!1,Hn=jn,Wn=e=>{e.to&&(Ln=e.to),e.now&&(hn.now=e.now),void 0!==e.colors&&(Fn=e.colors),null!=e.skipAnimation&&(zn=e.skipAnimation),e.createStringInterpolator&&(Bn=e.createStringInterpolator),e.requestAnimationFrame&&hn.use(e.requestAnimationFrame),e.batchedUpdates&&(hn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Hn=e.willAdvance),e.frameLoop&&(hn.frameLoop=e.frameLoop)},Vn=new Set,Yn=[],Un=[],Kn=0,Xn={get idle(){return!Vn.size&&!Yn.length},start(e){Kn>e.priority?(Vn.add(e),hn.onStart(qn)):(Gn(e),hn(Qn))},advance:Qn,sort(e){if(Kn)hn.onFrame((()=>Xn.sort(e)));else{const t=Yn.indexOf(e);~t&&(Yn.splice(t,1),Zn(e))}},clear(){Yn=[],Vn.clear()}};function qn(){Vn.forEach(Gn),Vn.clear(),hn(Qn)}function Gn(e){Yn.includes(e)||Zn(e)}function Zn(e){Yn.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Yn,(t=>t.priority>e.priority)),0,e)}function Qn(e){const t=Un;for(let n=0;n<Yn.length;n++){const r=Yn[n];Kn=r.priority,r.idle||(Hn(r),r.advance(e),r.idle||t.push(r))}return Kn=0,(Un=Yn).length=0,(Yn=t).length>0}var Jn="[-+]?\\d*\\.?\\d+",er=Jn+"%";function tr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var nr=new RegExp("rgb"+tr(Jn,Jn,Jn)),rr=new RegExp("rgba"+tr(Jn,Jn,Jn,Jn)),ir=new RegExp("hsl"+tr(Jn,er,er)),or=new RegExp("hsla"+tr(Jn,er,er,Jn)),ar=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,sr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,lr=/^#([0-9a-fA-F]{6})$/,cr=/^#([0-9a-fA-F]{8})$/;function dr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ur(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=dr(i,r,e+1/3),a=dr(i,r,e),s=dr(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function hr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function fr(e){return(parseFloat(e)%360+360)%360/360}function pr(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function gr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function mr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=lr.exec(e))?parseInt(t[1]+"ff",16)>>>0:Fn&&void 0!==Fn[e]?Fn[e]:(t=nr.exec(e))?(hr(t[1])<<24|hr(t[2])<<16|hr(t[3])<<8|255)>>>0:(t=rr.exec(e))?(hr(t[1])<<24|hr(t[2])<<16|hr(t[3])<<8|pr(t[4]))>>>0:(t=ar.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=cr.exec(e))?parseInt(t[1],16)>>>0:(t=sr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ir.exec(e))?(255|ur(fr(t[1]),gr(t[2]),gr(t[3])))>>>0:(t=or.exec(e))?(ur(fr(t[1]),gr(t[2]),gr(t[3]))|pr(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var br=(e,t,n)=>{if(_n.fun(e))return e;if(_n.arr(e))return br({range:e,output:t,extrapolate:n});if(_n.str(e.output[0]))return Bn(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var vr=1.70158,yr=1.525*vr,xr=vr+1,wr=2*Math.PI/3,$r=2*Math.PI/4.5,Sr=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},kr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>xr*e*e*e-vr*e*e,easeOutBack:e=>1+xr*Math.pow(e-1,3)+vr*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-yr)/2:(Math.pow(2*e-2,2)*((yr+1)*(2*e-2)+yr)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*wr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*wr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*$r)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*$r)/2+1,easeInBounce:e=>1-Sr(1-e),easeOutBounce:Sr,easeInOutBounce:e=>e<.5?(1-Sr(1-2*e))/2:(1+Sr(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Or=Symbol.for("FluidValue.get"),Cr=Symbol.for("FluidValue.observers"),Tr=e=>Boolean(e&&e[Or]),Dr=e=>e&&e[Or]?e[Or]():e,jr=e=>e[Cr]||null;function _r(e,t){const n=e[Cr];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Ir=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Mr(this,e)}},Mr=(e,t)=>Br(e,Or,t);function Er(e,t){if(e[Or]){let n=e[Cr];n||Br(e,Cr,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ar(e,t){const n=e[Cr];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Cr]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Nr,Br=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Lr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Rr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Pr=new RegExp(`(${Lr.source})(%|[a-z]+)`,"i"),Fr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,zr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Hr=e=>{const[t,n]=Wr(e);if(!t||Pn())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&zr.test(n)?Hr(n):n||e},Wr=e=>{const t=zr.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Vr=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Yr=e=>{Nr||(Nr=Fn?new RegExp(`(${Object.keys(Fn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Dr(e).replace(zr,Hr).replace(Rr,mr).replace(Nr,mr))),n=t.map((e=>e.match(Lr).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=r.map((t=>br({...e,output:t})));return e=>{const n=!Pr.test(t[0])&&t.find((e=>Pr.test(e)))?.replace(Lr,"");let r=0;return t[0].replace(Lr,(()=>`${i[r++](e)}${n||""}`)).replace(Fr,Vr)}},Ur="react-spring: ",Kr=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ur}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Xr=Kr(console.warn);var qr=Kr(console.warn);function Gr(e){return _n.str(e)&&("#"==e[0]||/\d/.test(e)||!Pn()&&zr.test(e)||e in(Fn||{}))}var Zr=Pn()?u:h,Qr=()=>{const e=o(!1);return Zr((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Jr(){const e=a()[1],t=Qr();return()=>{t.current&&e(Math.random())}}var ei=e=>u(e,ti),ti=[];function ni(e){const t=o();return u((()=>{t.current=e})),t.current}var ri=Symbol.for("Animated:node"),ii=e=>e&&e[ri],oi=(e,t)=>{return n=e,r=ri,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ai=e=>e&&e[ri]&&e[ri].getPayload(),si=class{constructor(){oi(this,this)}getPayload(){return this.payload||[]}},li=class extends si{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,_n.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new li(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return _n.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,_n.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ci=class extends li{constructor(e){super(0),this._string=null,this._toString=br({output:[e,e]})}static create(e){return new ci(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(_n.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=br({output:[this.getValue(),e]})),this._value=0,super.reset()}},di={dependencies:null},ui=class extends si{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return En(this.source,((n,r)=>{var i;(i=n)&&i[ri]===i?t[r]=n.getValue(e):Tr(n)?t[r]=Dr(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Mn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return En(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){di.dependencies&&Tr(e)&&di.dependencies.add(e);const t=ai(e);t&&Mn(t,(e=>this.add(e)))}},hi=class extends ui{constructor(e){super(e)}static create(e){return new hi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(fi)),!0)}};function fi(e){return(Gr(e)?ci:li).create(e)}function pi(e){const t=ii(e);return t?t.constructor:_n.arr(e)?hi:Gr(e)?ci:li}var gi=(e,t)=>{const n=!_n.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((i,a)=>{const s=o(null),l=n&&p((e=>{s.current=function(e,t){e&&(_n.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,d]=function(e,t){const n=new Set;di.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ui(e),di.dependencies=null,[e,n]}(i,t),h=Jr(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},g=new mi(f,d),m=o();Zr((()=>(m.current=g,Mn(d,(e=>Er(e,g))),()=>{m.current&&(Mn(m.current.deps,(e=>Ar(e,m.current))),hn.cancel(m.current.update))}))),u(f,[]),ei((()=>()=>{const e=m.current;Mn(e.deps,(t=>Ar(t,e)))}));const b=t.getComponentProps(c.getValue());return r.createElement(e,{...b,ref:l})}))},mi=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&hn.write(this.update)}};var bi=Symbol.for("AnimatedComponent"),vi=e=>_n.str(e)?e:e&&_n.str(e.displayName)?e.displayName:_n.fun(e)&&e.name||null;function yi(e,...t){return _n.fun(e)?e(...t):e}var xi=(e,t)=>!0===e||!!(t&&e&&(_n.fun(e)?e(t):An(e).includes(t))),wi=(e,t)=>_n.obj(e)?t&&e[t]:e,$i=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Si=e=>e,ki=(e,t=Si)=>{let n=Oi;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);_n.und(n)||(r[i]=n)}return r},Oi=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ci={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ti(e){const t=function(e){const t={};let n=0;if(En(e,((e,r)=>{Ci[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return En(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function Di(e){return e=Dr(e),_n.arr(e)?e.map(Di):Gr(e)?dn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ji(e){return _n.fun(e)||_n.arr(e)&&_n.obj(e[0])}var _i={tension:170,friction:26,mass:1,damping:1,easing:kr.linear,clamp:!1},Ii=class{constructor(){this.velocity=0,Object.assign(this,_i)}};function Mi(e,t){if(_n.und(t.decay)){const n=!_n.und(t.tension)||!_n.und(t.friction);!n&&_n.und(t.frequency)&&_n.und(t.damping)&&_n.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Ei=[],Ai=class{constructor(){this.changed=!1,this.values=Ei,this.toValues=null,this.fromValues=Ei,this.config=new Ii,this.immediate=!1}};function Ni(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=xi(n.cancel??r?.cancel,t);if(d)f();else{_n.und(n.pause)||(i.paused=xi(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||xi(e,t)),l=yi(n.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-hn.now()}function h(){l>0&&!dn.skipAnimation?(i.delayed=!0,c=hn.setTimeout(f,l),i.pauseQueue.add(u),i.timeouts.add(c)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...n,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Bi=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Pi(e.get()):t.every((e=>e.noop))?Li(e.get()):Ri(e.get(),t.every((e=>e.finished))),Li=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ri=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Pi=e=>({value:e,cancelled:!0,finished:!1});function Fi(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=ki(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),f=e=>{const t=i<=(n.cancelId||0)&&Pi(r)||i!==n.asyncId&&Ri(r,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new Hi,a=new Wi;return(async()=>{if(dn.skipAnimation)throw zi(n),a.result=Ri(r,!1),u(a),a;f(o);const s=_n.obj(e)?{...e}:{...t,to:e};s.parentId=i,En(c,((e,t)=>{_n.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(dn.skipAnimation)return zi(n),Ri(r,!1);try{let t;t=_n.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(d),h]),g=Ri(r.get(),!0,!1)}catch(e){if(e instanceof Hi)g=e.result;else{if(!(e instanceof Wi))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return _n.fun(a)&&hn.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function zi(e,t){Nn(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Hi=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Wi=class extends Error{constructor(){super("SkipAnimationSignal")}},Vi=e=>e instanceof Ui,Yi=1,Ui=class extends Ir{constructor(){super(...arguments),this.id=Yi++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ii(this);return e&&e.getValue()}to(...e){return dn.to(this,e)}interpolate(...e){return Xr(`${Ur}The "interpolate" function is deprecated in v9 (use "to" instead)`),dn.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){_r(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Xn.sort(this),_r(this,{type:"priority",parent:this,priority:e})}},Ki=Symbol.for("SpringPhase"),Xi=e=>(1&e[Ki])>0,qi=e=>(2&e[Ki])>0,Gi=e=>(4&e[Ki])>0,Zi=(e,t)=>t?e[Ki]|=3:e[Ki]&=-3,Qi=(e,t)=>t?e[Ki]|=4:e[Ki]&=-5,Ji=class extends Ui{constructor(e,t){if(super(),this.animation=new Ai,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!_n.und(e)||!_n.und(t)){const n=_n.obj(e)?{...e}:{...t,from:e};_n.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(qi(this)||this._state.asyncTo)||Gi(this)}get goal(){return Dr(this.animation.to)}get velocity(){const e=ii(this);return e instanceof li?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Xi(this)}get isAnimating(){return qi(this)}get isPaused(){return Gi(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=ai(r.to);!a&&Tr(r.to)&&(i=An(Dr(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ci?1:a?a[l].lastPosition:i[l];let d=r.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=_n.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(_n.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);u=n+i/(1-e)*(1-r),d=Math.abs(s.lastPosition-u)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!_n.und(r),f=n==c?s.v0>0:n<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(g=u==c||u>c==f,g&&(a=-a*r,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),u=n+o.easing(r)*(c-n),a=(u-s.lastPosition)/e,d=1==r}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(n=!0)}));const s=ii(this),l=s.getValue();if(t){const e=Dr(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return hn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(qi(this)){const{to:e,config:t}=this.animation;hn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return _n.und(e)?(n=this.queue||[],this.queue=[]):n=[_n.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Bi(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),zi(this._state,e&&this._lastCallId),hn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=_n.obj(n)?n[t]:n,(null==n||ji(n))&&(n=void 0),r=_n.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Xi(this)||(e.reverse&&([n,r]=[r,n]),r=Dr(r),_n.und(r)?ii(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ki(e,((e,t)=>/^on/.test(t)?wi(e,n):e))),ao(this,e,"onProps"),so(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Ni(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Gi(this)||(Qi(this,!0),Rn(o.pauseQueue),so(this,"onPause",Ri(this,eo(this,this.animation.to)),this))},resume:()=>{Gi(this)&&(Qi(this,!1),qi(this)&&this._resume(),Rn(o.resumeQueue),so(this,"onResume",Ri(this,eo(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=to(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Pi(this));const r=!_n.und(e.to),i=!_n.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Pi(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||r||t.default&&!_n.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!In(u,c);h&&(s.from=u),u=Dr(u);const f=!In(d,l);f&&this._focus(d);const p=ji(t.to),{config:g}=s,{decay:m,velocity:b}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(Mi(n={...n},t),t={...n,...t}),Mi(e,t),Object.assign(e,t);for(const t in _i)null==e[t]&&(e[t]=_i[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;_n.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(g,yi(t.config,o),t.config!==a.config?yi(a.config,o):void 0);let v=ii(this);if(!v||_n.und(d))return n(Ri(this,!0));const y=_n.und(t.reset)?i&&!t.default:!_n.und(u)&&xi(t.reset,o),x=y?u:this.get(),w=Di(d),$=_n.num(w)||_n.arr(w)||Gr(w),S=!p&&(!$||xi(a.immediate||t.immediate,o));if(f){const e=pi(d);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const k=v.constructor;let O=Tr(d),C=!1;if(!O){const e=y||!Xi(this)&&h;(f||e)&&(C=In(Di(x),w),O=!C),(In(s.immediate,S)||S)&&In(g.decay,m)&&In(g.velocity,b)||(O=!0)}if(C&&qi(this)&&(s.changed&&!y?O=!0:O||this._stop(l)),!p&&((O||Tr(l))&&(s.values=v.getPayload(),s.toValues=Tr(d)?null:k==ci?[1]:An(w)),s.immediate!=S&&(s.immediate=S,S||y||this._set(l)),O)){const{onRest:e}=s;Mn(oo,(e=>ao(this,t,e)));const r=Ri(this,eo(this,l));Rn(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&hn.batchedUpdates((()=>{s.changed=!y,e?.(r,this),y?yi(a.onRest,r):s.onStart?.(r,this)}))}y&&this._set(x),p?n(Fi(t.to,t,this._state,this)):O?this._start():qi(this)&&!f?this._pendingCalls.add(n):n(Li(x))}_focus(e){const t=this.animation;e!==t.to&&(jr(this)&&this._detach(),t.to=e,jr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Tr(t)&&(Er(t,this),Vi(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Tr(e)&&Ar(e,this)}_set(e,t=!0){const n=Dr(e);if(!_n.und(n)){const e=ii(this);if(!e||!In(n,e.getValue())){const r=pi(n);e&&e.constructor==r?e.setValue(n):oi(this,r.create(n)),e&&hn.batchedUpdates((()=>{this._onChange(n,t)}))}}return ii(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,so(this,"onStart",Ri(this,eo(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),yi(this.animation.onChange,e,this)),yi(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ii(this).reset(Dr(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),qi(this)||(Zi(this,!0),Gi(this)||this._resume())}_resume(){dn.skipAnimation?this.finish():Xn.start(this)}_stop(e,t){if(qi(this)){Zi(this,!1);const n=this.animation;Mn(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),_r(this,{type:"idle",parent:this});const r=t?Pi(this.get()):Ri(this.get(),eo(this,e??n.to));Rn(this._pendingCalls,r),n.changed&&(n.changed=!1,so(this,"onRest",r,this))}}};function eo(e,t){const n=Di(t);return In(Di(e.get()),n)}function to(e,t=e.loop,n=e.to){const r=yi(t);if(r){const i=!0!==r&&Ti(r),o=(i||e).reverse,a=!i||i.reset;return no({...e,loop:t,default:!1,pause:void 0,to:!o||ji(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function no(e){const{to:t,from:n}=e=Ti(e),r=new Set;return _n.obj(t)&&io(t,r),_n.obj(n)&&io(n,r),e.keys=r.size?Array.from(r):null,e}function ro(e){const t=no(e);return _n.und(t.default)&&(t.default=ki(t)),t}function io(e,t){En(e,((e,n)=>null!=e&&t.add(n)))}var oo=["onStart","onRest","onChange","onPause","onResume"];function ao(e,t,n){e.animation[n]=t[n]!==$i(t,n)?wi(t[n],e.key):void 0}function so(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var lo=["onStart","onChange","onRest"],co=1,uo=class{constructor(e,t){this.id=co++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];_n.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(no(e)),this}start(e){let{queue:t}=this;return e?t=An(e).map(no):this.queue=[],this._flush?this._flush(this,t):(vo(this,t),ho(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Mn(An(t),(t=>n[t].stop(!!e)))}else zi(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(_n.und(e))this.start({pause:!0});else{const t=this.springs;Mn(An(e),(e=>t[e].pause()))}return this}resume(e){if(_n.und(e))this.start({pause:!1});else{const t=this.springs;Mn(An(e),(e=>t[e].resume()))}return this}each(e){En(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Nn(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Nn(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Nn(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}hn.onFrame(this._onFrame)}};function ho(e,t){return Promise.all(t.map((t=>fo(e,t)))).then((t=>Bi(e,t)))}async function fo(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=_n.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=_n.arr(i)||_n.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Mn(lo,(n=>{const r=t[n];if(_n.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Rn(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===$i(t,"cancel");(d||f&&u.asyncId)&&h.push(Ni(++e._lastAsyncId,{props:t,state:u,actions:{pause:jn,resume:jn,start(t,n){f?(zi(u,e._lastAsyncId),n(Pi(e))):(t.onRest=s,n(Fi(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Bi(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=to(t,a,i);if(n)return vo(e,[n]),fo(e,n,!0)}return l&&hn.batchedUpdates((()=>l(p,e,e.item))),p}function po(e,t){const n={...e.springs};return t&&Mn(An(t),(e=>{_n.und(e.keys)&&(e=no(e)),_n.obj(e.to)||(e={...e,to:void 0}),bo(n,e,(e=>mo(e)))})),go(e,n),n}function go(e,t){En(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Er(t,e))}))}function mo(e,t){const n=new Ji;return n.key=e,t&&Er(n,t),n}function bo(e,t,n){t.keys&&Mn(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function vo(e,t){Mn(t,(t=>{bo(e.springs,t,(t=>mo(t,e)))}))}var yo,xo,wo=({children:e,...t})=>{const n=g($o),i=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let s=i;if(s){const n=Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs));n||(s={inputs:t,result:e()})}else s=n;return u((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=$o;return r.createElement(l,{value:t},e)},$o=(yo=wo,xo={},Object.assign(yo,r.createContext(xo)),yo.Provider._context=yo,yo.Consumer._context=yo,yo);wo.Provider=$o.Provider,wo.Consumer=$o.Consumer;var So=()=>{const e=[],t=function(t){qr(`${Ur}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Mn(e,((e,i)=>{if(_n.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Mn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Mn(e,(e=>e.resume(...arguments))),this},t.set=function(t){Mn(e,((e,n)=>{const r=_n.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return Mn(e,((e,r)=>{if(_n.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Mn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Mn(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return _n.fun(e)?e(n,t):e};return t._getProps=n,t};function ko(e,t){const n=_n.fun(e),[[r],i]=function(e,t,n){const r=_n.fun(t)&&t;r&&!n&&(n=[]);const i=m((()=>r||3==arguments.length?So():void 0),[]),a=o(0),s=Jr(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const n=po(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?ho(e,t):new Promise((r=>{go(e,n),l.queue.push((()=>{r(ho(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),d=[],u=ni(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new uo(null,l.flush)),n=r?r(i,e):t[i];n&&(d[i]=ro(n))}}m((()=>{Mn(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),m((()=>{h(0,Math.min(u,e))}),n);const f=c.current.map(((e,t)=>po(e,d[t]))),p=g(wo),b=ni(p),v=p!==b&&function(e){for(const t in e)return!0;return!1}(p);Zr((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Mn(e,(e=>e()))),Mn(c.current,((e,t)=>{i?.add(e),v&&e.start({default:p});const n=d[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ei((()=>()=>{Mn(l.ctrls,(e=>e.stop(!0)))}));const y=f.map((e=>({...e})));return i?[y,i]:y}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var Oo=class extends Ui{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=br(...t);const n=this._get(),r=pi(n);oi(this,r.create(n))}advance(e){const t=this._get();In(t,this.get())||(ii(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&To(this._active)&&Do(this)}_get(){const e=_n.arr(this.source)?this.source.map(Dr):An(Dr(this.source));return this.calc(...e)}_start(){this.idle&&!To(this._active)&&(this.idle=!1,Mn(ai(this),(e=>{e.done=!1})),dn.skipAnimation?(hn.batchedUpdates((()=>this.advance())),Do(this)):Xn.start(this))}_attach(){let e=1;Mn(An(this.source),(t=>{Tr(t)&&Er(t,this),Vi(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Mn(An(this.source),(e=>{Tr(e)&&Ar(e,this)})),this._active.clear(),Do(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=An(this.source).reduce(((e,t)=>Math.max(e,(Vi(t)?t.priority:0)+1)),0))}};function Co(e){return!1!==e.idle}function To(e){return!e.size||Array.from(e).every(Co)}function Do(e){e.idle||(e.idle=!0,Mn(ai(e),(e=>{e.done=!0})),_r(e,{type:"idle",parent:e}))}dn.assign({createStringInterpolator:Yr,to:(e,t)=>new Oo(e,t)});var jo=/^--/;function _o(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||jo.test(e)||Mo.hasOwnProperty(e)&&Mo[e]?(""+t).trim():t+"px"}var Io={};var Mo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Eo=["Webkit","Ms","Moz","O"];Mo=Object.keys(Mo).reduce(((e,t)=>(Eo.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Mo);var Ao=/^(matrix|translate|scale|rotate|skew)/,No=/^(translate)/,Bo=/^(rotate|skew)/,Lo=(e,t)=>_n.num(e)&&0!==e?e+t:e,Ro=(e,t)=>_n.arr(e)?e.every((e=>Ro(e,t))):_n.num(e)?e===t:parseFloat(e)===t,Po=class extends ui{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>Lo(e,"px"))).join(",")})`,Ro(e,0)]))),En(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Ao.test(t)){if(delete r[t],_n.und(e))return;const n=No.test(t)?"px":Bo.test(t)?"deg":"";i.push(An(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Lo(i,n)})`,Ro(i,0)]:e=>[`${t}(${e.map((e=>Lo(e,n))).join(",")})`,Ro(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Fo(i,o)),super(r)}},Fo=class extends Ir{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Mn(this.inputs,((n,r)=>{const i=Dr(n[0]),[o,a]=this.transforms[r](_n.arr(i)?i:n.map(Dr));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Mn(this.inputs,(e=>Mn(e,(e=>Tr(e)&&Er(e,this)))))}observerRemoved(e){0==e&&Mn(this.inputs,(e=>Mn(e,(e=>Tr(e)&&Ar(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),_r(this,e)}};dn.assign({batchedUpdates:D,createStringInterpolator:Yr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var zo=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new ui(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=vi(e)||"Anonymous";return(e=_n.str(e)?o[e]||(o[e]=gi(e,i)):e[bi]||(e[bi]=gi(e,i))).displayName=`Animated(${t})`,e};return En(e,((t,n)=>{_n.arr(e)&&(n=vi(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:Io[t]||(Io[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=_o(t,r[t]);jo.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Po(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Ho=zo.animated;var Wo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Vo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Yo(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var Uo=Array.isArray,Ko="object"==typeof Wo&&Wo&&Wo.Object===Object&&Wo,Xo=Ko,qo="object"==typeof self&&self&&self.Object===Object&&self,Go=Xo||qo||Function("return this")(),Zo=Go.Symbol,Qo=Zo,Jo=Object.prototype,ea=Jo.hasOwnProperty,ta=Jo.toString,na=Qo?Qo.toStringTag:void 0;var ra=function(e){var t=ea.call(e,na),n=e[na];try{e[na]=void 0;var r=!0}catch(e){}var i=ta.call(e);return r&&(t?e[na]=n:delete e[na]),i},ia=Object.prototype.toString;var oa=ra,aa=function(e){return ia.call(e)},sa=Zo?Zo.toStringTag:void 0;var la=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":sa&&sa in Object(e)?oa(e):aa(e)};var ca=function(e){return null!=e&&"object"==typeof e},da=la,ua=ca;var ha=function(e){return"symbol"==typeof e||ua(e)&&"[object Symbol]"==da(e)},fa=Uo,pa=ha,ga=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ma=/^\w*$/;var ba=function(e,t){if(fa(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!pa(e))||(ma.test(e)||!ga.test(e)||null!=t&&e in Object(t))};var va=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ya=la,xa=va;var wa,$a=function(e){if(!xa(e))return!1;var t=ya(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Sa=Go["__core-js_shared__"],ka=(wa=/[^.]+$/.exec(Sa&&Sa.keys&&Sa.keys.IE_PROTO||""))?"Symbol(src)_1."+wa:"";var Oa=function(e){return!!ka&&ka in e},Ca=Function.prototype.toString;var Ta=function(e){if(null!=e){try{return Ca.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Da=$a,ja=Oa,_a=va,Ia=Ta,Ma=/^\[object .+?Constructor\]$/,Ea=Function.prototype,Aa=Object.prototype,Na=Ea.toString,Ba=Aa.hasOwnProperty,La=RegExp("^"+Na.call(Ba).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ra=function(e){return!(!_a(e)||ja(e))&&(Da(e)?La:Ma).test(Ia(e))},Pa=function(e,t){return null==e?void 0:e[t]};var Fa=function(e,t){var n=Pa(e,t);return Ra(n)?n:void 0},za=Fa(Object,"create"),Ha=za;var Wa=function(){this.__data__=Ha?Ha(null):{},this.size=0};var Va=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ya=za,Ua=Object.prototype.hasOwnProperty;var Ka=function(e){var t=this.__data__;if(Ya){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ua.call(t,e)?t[e]:void 0},Xa=za,qa=Object.prototype.hasOwnProperty;var Ga=za;var Za=Wa,Qa=Va,Ja=Ka,es=function(e){var t=this.__data__;return Xa?void 0!==t[e]:qa.call(t,e)},ts=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ga&&void 0===t?"__lodash_hash_undefined__":t,this};function ns(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ns.prototype.clear=Za,ns.prototype.delete=Qa,ns.prototype.get=Ja,ns.prototype.has=es,ns.prototype.set=ts;var rs=ns;var is=function(){this.__data__=[],this.size=0};var os=function(e,t){return e===t||e!=e&&t!=t},as=os;var ss=function(e,t){for(var n=e.length;n--;)if(as(e[n][0],t))return n;return-1},ls=ss,cs=Array.prototype.splice;var ds=ss;var us=ss;var hs=ss;var fs=is,ps=function(e){var t=this.__data__,n=ls(t,e);return!(n<0)&&(n==t.length-1?t.pop():cs.call(t,n,1),--this.size,!0)},gs=function(e){var t=this.__data__,n=ds(t,e);return n<0?void 0:t[n][1]},ms=function(e){return us(this.__data__,e)>-1},bs=function(e,t){var n=this.__data__,r=hs(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function vs(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vs.prototype.clear=fs,vs.prototype.delete=ps,vs.prototype.get=gs,vs.prototype.has=ms,vs.prototype.set=bs;var ys=vs,xs=Fa(Go,"Map"),ws=rs,$s=ys,Ss=xs;var ks=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Os=function(e,t){var n=e.__data__;return ks(t)?n["string"==typeof t?"string":"hash"]:n.map},Cs=Os;var Ts=Os;var Ds=Os;var js=Os;var _s=function(e,t){var n=js(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Is=function(){this.size=0,this.__data__={hash:new ws,map:new(Ss||$s),string:new ws}},Ms=function(e){var t=Cs(this,e).delete(e);return this.size-=t?1:0,t},Es=function(e){return Ts(this,e).get(e)},As=function(e){return Ds(this,e).has(e)},Ns=_s;function Bs(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Bs.prototype.clear=Is,Bs.prototype.delete=Ms,Bs.prototype.get=Es,Bs.prototype.has=As,Bs.prototype.set=Ns;var Ls=Bs,Rs=Ls;function Ps(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ps.Cache||Rs),n}Ps.Cache=Rs;var Fs=Ps;var zs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hs=/\\(\\)?/g,Ws=function(e){var t=Fs(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(zs,(function(e,n,r,i){t.push(r?i.replace(Hs,"$1"):n||e)})),t}));var Vs=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ys=Uo,Us=ha,Ks=Zo?Zo.prototype:void 0,Xs=Ks?Ks.toString:void 0;var qs=function e(t){if("string"==typeof t)return t;if(Ys(t))return Vs(t,e)+"";if(Us(t))return Xs?Xs.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Gs=qs;var Zs=function(e){return null==e?"":Gs(e)},Qs=Uo,Js=ba,el=Ws,tl=Zs;var nl=function(e,t){return Qs(e)?e:Js(e,t)?[e]:el(tl(e))},rl=ha;var il=function(e){if("string"==typeof e||rl(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},ol=nl,al=il;var sl=function(e,t){for(var n=0,r=(t=ol(t,e)).length;null!=e&&n<r;)e=e[al(t[n++])];return n&&n==r?e:void 0},ll=sl;var cl=function(e,t,n){var r=null==e?void 0:ll(e,t);return void 0===r?n:r},dl=Vo(cl);const ul=(e,t,n)=>t?dl(n,t)||dl(e,t):n||e,hl=(e,t)=>{const n=t||e.defaultValue;return dl(e.collections,n)};var fl;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(fl||(fl={}));const pl={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},gl=e=>t=>{const n=t.theme,r=hl(pl,n[fl.colorScheme]);return n.options&&n.options.color?ul(r,e,n.options.color):ul(r,e)},ml={Brand:{1:gl("Brand.1"),2:gl("Brand.2"),3:gl("Brand.3"),4:gl("Brand.4"),5:gl("Brand.5"),6:gl("Brand.6")},Primary:gl("Primary"),PrimaryDark:gl("PrimaryDark"),Secondary:gl("Secondary"),Accent:{Light:{1:gl("Accent.Light.1"),2:gl("Accent.Light.2"),3:gl("Accent.Light.3"),4:gl("Accent.Light.4"),5:gl("Accent.Light.5"),6:gl("Accent.Light.6")},Dark:{1:gl("Accent.Dark.1"),2:gl("Accent.Dark.2"),3:gl("Accent.Dark.3")}},Neutral:{1:gl("Neutral.1"),2:gl("Neutral.2"),3:gl("Neutral.3"),4:gl("Neutral.4"),5:gl("Neutral.5"),6:gl("Neutral.6"),7:gl("Neutral.7"),8:gl("Neutral.8")},Validation:{Green:{Text:gl("Validation.Green.Text"),Icon:gl("Validation.Green.Icon"),Border:gl("Validation.Green.Border"),Background:gl("Validation.Green.Background")},Orange:{Text:gl("Validation.Orange.Text"),Icon:gl("Validation.Orange.Icon"),Border:gl("Validation.Orange.Border"),Background:gl("Validation.Orange.Background"),Badge:gl("Validation.Orange.Badge")},Red:{Text:gl("Validation.Red.Text"),Icon:gl("Validation.Red.Icon"),Border:gl("Validation.Red.Border"),Background:gl("Validation.Red.Background")},Blue:{Text:gl("Validation.Blue.Text"),Icon:gl("Validation.Blue.Icon"),Border:gl("Validation.Blue.Border"),Background:gl("Validation.Blue.Background")}},Shadow:{Accent:gl("Shadow.Accent"),Red:gl("Shadow.Red"),Elevation:gl("Shadow.Elevation")}},bl={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},vl=e=>Object.keys(bl).reduce(((t,n)=>{const r=bl[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),yl={MaxWidth:vl("max-width"),MinWidth:vl("min-width")},xl=bl,wl=I.button`
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

        ${({$highlight:e})=>e&&M`
                background-color: ${ml.Neutral[7]};
            `}
    }
`,$l=i.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=lt(t,["children","focusHighlight","focusOutline","type"]);return e(wl,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Sl={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},kl={D1:{fontFamily:Sl.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Sl.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Sl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sl.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Sl.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Sl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Sl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Sl.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Sl.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Sl.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Sl.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Sl.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Sl.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ol={D1:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sl.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Sl.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Sl.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Sl.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Cl={collections:{base:kl,oneservice:{D1:{fontFamily:Sl.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Sl.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Sl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sl.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Sl.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Sl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Sl.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Sl.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Sl.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Sl.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Sl.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Sl.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Sl.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Ol},defaultValue:"base"},Tl=e=>t=>{const n=t.theme,r=hl(Cl,n[fl.textStyleScheme]);return n.options&&n.options.textStyle?ul(r,e,n.options.textStyle):ul(r,e)},Dl={D1:{fontFamily:Tl("D1.fontFamily"),fontSize:Tl("D1.fontSize"),fontWeight:Tl("D1.fontWeight"),lineHeight:Tl("D1.lineHeight"),letterSpacing:Tl("D1.letterSpacing")},D2:{fontFamily:Tl("D2.fontFamily"),fontSize:Tl("D2.fontSize"),fontWeight:Tl("D2.fontWeight"),lineHeight:Tl("D2.lineHeight"),letterSpacing:Tl("D2.letterSpacing")},D3:{fontFamily:Tl("D3.fontFamily"),fontSize:Tl("D3.fontSize"),fontWeight:Tl("D3.fontWeight"),lineHeight:Tl("D3.lineHeight"),letterSpacing:Tl("D3.letterSpacing")},D4:{fontFamily:Tl("D4.fontFamily"),fontSize:Tl("D4.fontSize"),fontWeight:Tl("D4.fontWeight"),lineHeight:Tl("D4.lineHeight"),letterSpacing:Tl("D4.letterSpacing")},DBody:{fontFamily:Tl("DBody.fontFamily"),fontSize:Tl("DBody.fontSize"),fontWeight:Tl("DBody.fontWeight"),lineHeight:Tl("DBody.lineHeight"),letterSpacing:Tl("DBody.letterSpacing")},H1:{fontFamily:Tl("H1.fontFamily"),fontSize:Tl("H1.fontSize"),fontWeight:Tl("H1.fontWeight"),lineHeight:Tl("H1.lineHeight"),letterSpacing:Tl("H1.letterSpacing")},H2:{fontFamily:Tl("H2.fontFamily"),fontSize:Tl("H2.fontSize"),fontWeight:Tl("H2.fontWeight"),lineHeight:Tl("H2.lineHeight"),letterSpacing:Tl("H2.letterSpacing")},H3:{fontFamily:Tl("H3.fontFamily"),fontSize:Tl("H3.fontSize"),fontWeight:Tl("H3.fontWeight"),lineHeight:Tl("H3.lineHeight"),letterSpacing:Tl("H3.letterSpacing")},H4:{fontFamily:Tl("H4.fontFamily"),fontSize:Tl("H4.fontSize"),fontWeight:Tl("H4.fontWeight"),lineHeight:Tl("H4.lineHeight"),letterSpacing:Tl("H4.letterSpacing")},H5:{fontFamily:Tl("H5.fontFamily"),fontSize:Tl("H5.fontSize"),fontWeight:Tl("H5.fontWeight"),lineHeight:Tl("H5.lineHeight"),letterSpacing:Tl("H5.letterSpacing")},H6:{fontFamily:Tl("H6.fontFamily"),fontSize:Tl("H6.fontSize"),fontWeight:Tl("H6.fontWeight"),lineHeight:Tl("H6.lineHeight"),letterSpacing:Tl("H6.letterSpacing")},Body:{fontFamily:Tl("Body.fontFamily"),fontSize:Tl("Body.fontSize"),fontWeight:Tl("Body.fontWeight"),lineHeight:Tl("Body.lineHeight"),letterSpacing:Tl("Body.letterSpacing")},BodySmall:{fontFamily:Tl("BodySmall.fontFamily"),fontSize:Tl("BodySmall.fontSize"),fontWeight:Tl("BodySmall.fontWeight"),lineHeight:Tl("BodySmall.lineHeight"),letterSpacing:Tl("BodySmall.letterSpacing")},XSmall:{fontFamily:Tl("XSmall.fontFamily"),fontSize:Tl("XSmall.fontSize"),fontWeight:Tl("XSmall.fontWeight"),lineHeight:Tl("XSmall.lineHeight"),letterSpacing:Tl("XSmall.letterSpacing")}},jl=[Sl.OpenSans,Sl.PlusJakartaSans],_l=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Il=(e,t)=>n=>{var r;const i=Dl[e].fontFamily(n),o=Dl[e].fontWeight(n),a=jl.find((e=>Object.values(e).includes(i)));return a?M`
                font-family: ${_l(a,t)||_l(a,o)||i};
                font-weight: normal !important;
            `:M`
            font-family: ${i};
            font-weight: ${null!==(r=Ml(t)||o)&&void 0!==r?r:"normal"};
        `},Ml=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},El=e=>{if(e>0)return M`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Al={getFontFamily:Il,getTextStyle:(e,t,n=!1)=>r=>{const i=Dl[e],o=i.fontSize(r);return M`
            ${Il(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${M`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,t=!1,n=void 0)=>t?M`
            display: block;
            ${El(n)}
        `:e?M`
            display: inline;
        `:M`
            display: block;
            ${El(n)}
        `};var Nl;!function(e){e.D1=I.h1`
        ${e=>M`
                ${Al.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=I.h1`
        ${e=>M`
                ${Al.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=I.h1`
        ${e=>M`
                ${Al.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=I.h1`
        ${e=>M`
                ${Al.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=I.h1`
        ${e=>M`
                ${Al.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=I.h1`
        ${e=>M`
                ${Al.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=I.h2`
        ${e=>M`
                ${Al.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=I.h3`
        ${e=>M`
                ${Al.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=I.h4`
        ${e=>M`
                ${Al.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=I.h5`
        ${e=>M`
                ${Al.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=I.h6`
        ${e=>M`
                ${Al.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=I.p`
        ${e=>M`
                ${Al.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=I.p`
        ${e=>M`
                ${Al.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=I.span`
        ${e=>M`
                ${Al.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Rl(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rl(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Nl||(Nl={}));const Bl=I.a`
    ${e=>M`
            ${Al.getTextStyle(e.textStyle,e.weight)}
            color: ${ml.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ml.Secondary};

                svg {
                    color: ${ml.Secondary};
                }
            }
        `}
`,Ll=I(N)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rl=n=>{var{external:r=!1,children:i}=n,o=lt(n,["external","children"]);return t(Bl,Object.assign({},o,{children:[i,r&&e(Ll,{})]}))},Pl={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},Fl=I.div`
    background-color: ${ml.Neutral[8]} !important;
    border-top: 1px solid ${ml.Neutral[6]};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${yl.MaxWidth.mobileL} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,zl=I.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Hl=e=>M`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: ${Pl.Base};
`,Wl=I(Nl.H3)`
    ${e=>Hl(e.$isCollapsed)}
`,Vl=I(Nl.H4)`
    ${e=>Hl(e.$isCollapsed)}
`,Yl=I($l)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto -1rem auto 0;
`,Ul=I(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${ml.Primary};
`,Kl=I(Ho.div)`
    overflow: hidden;
`,Xl=I.div`
    display: inline-block;
    padding-right: 4rem;

    ${yl.MaxWidth.tablet} {
        padding-right: 0;
    }
`;const ql=f((function(n,r){var{title:i,children:s,expanded:l,type:c="default",collapsible:d=!0}=n,h=lt(n,["title","children","expanded","type","collapsible"]);const f=o(),p=g(st),[m,v]=a(!d||(null!=l?l:p)),[y,x]=a(!1),w=h["data-testid"]||"accordion-item",$=ln(),S=$.ref;b(r,(()=>Object.assign(f.current,{expand(){v(!0)},collapse(){v(!1)},isExpanded:()=>m})),[m]),u((()=>{y&&v(!d||p)}),[p]),u((()=>{y&&v(l)}),[l]),u((()=>{x(!0)}),[]);const k={height:m?$.height:0},O=ko(k);return t(Fl,Object.assign({"data-testid":w,className:h.className,$isCollapsed:m,ref:f},{children:[t(zl,Object.assign({$isCollapsed:d,onClick:d?e=>{e.preventDefault(),v((e=>!e))}:void 0},{children:["string"!=typeof i?i:e("small"===c?Vl:Wl,Object.assign({"data-testid":`${w}-title`,$isCollapsed:m},{children:i})),d&&e(Yl,Object.assign({"data-testid":`${w}-expand-collapse-button`,$isCollapsed:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand"},{children:e(Ul,{})}))]})),e(Kl,Object.assign({style:y?O:k,$isCollapsed:m,"data-testid":`${w}-expandable-container`},{children:e(Xl,Object.assign({ref:S,id:"content-container"},{children:s}))}))]}))})),Gl=I.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Zl=E`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ql=I.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||ml.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Zl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Jl=I(Ql)`
    animation-delay: -0.45s;
`,ec=I(Ql)`
    animation-delay: -0.3s;
`,tc=I(Ql)`
    animation-delay: -0.15s;
`,nc=({color:n,className:r,size:i=18})=>t(Gl,Object.assign({className:r,$size:i,$color:n},{children:[e(Ql,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),e(Jl,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),e(ec,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),e(tc,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}));var rc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(rc||(rc={}));const ic={collections:{base:{InputBoxShadow:M`
        inset 0 0 4px 0px ${ml.Shadow.Accent}
    `,InputErrorBoxShadow:M`
        inset 0 0 4px 0px ${ml.Shadow.Red}
    `,ElevationBoxShadow:M`
      0px 2px 8px ${ml.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:M`
        inset 0 0 3px 0px ${ml.Shadow.Accent}
    `,InputErrorBoxShadow:M`
        inset 0 0 3px 0px ${ml.Shadow.Red}
    `,ElevationBoxShadow:M`
      0px 2px 8px ${ml.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},oc=e=>t=>{var n;const r=t.theme,i=hl(ic,r[fl.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?ul(i,e,r.options.designToken):ul(i,e)},ac={InputBoxShadow:oc("InputBoxShadow"),InputErrorBoxShadow:oc("InputErrorBoxShadow"),ElevationBoxShadow:oc("ElevationBoxShadow"),Table:{Header:oc("Table.Header"),Cell:{Primary:oc("Table.Cell.Primary"),Secondary:oc("Table.Cell.Secondary"),Selected:oc("Table.Cell.Selected"),Hover:oc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:oc("Button.Danger.BackgroundColor"),Hover:oc("Button.Danger.Hover"),Primary:oc("Button.Danger.Primary"),Border:oc("Button.Danger.Border")}}},sc=I.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return M`
                    background-color: ${ml.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?ac.Button.Danger.Border:ml.Primary};

                    color: ${e.$buttonIsDanger?ac.Button.Danger.Primary:ml.Primary};
                `;case"light":return M`
                    background-color: ${ml.Neutral[8]};
                    border: 1px solid ${ml.Neutral[5]};

                    color: ${e.$buttonIsDanger?ac.Button.Danger.Primary:ml.Primary};
                `;case"disabled":return M`
                    background-color: ${ml.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ml.Neutral[3]};
                `;case"link":return M`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?ac.Button.Danger.Primary:ml.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?ac.Button.Danger.Hover:ml.Secondary};
                    }
                `;default:return M`
                    background-color: ${e.$buttonIsDanger?ac.Button.Danger.BackgroundColor:ml.Primary};
                    border: 1px solid transparent;

                    ${yl.MaxWidth.mobileL} {
                        width: 100%;
                    }

                    color: ${ml.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?M`
                    height: 2.5rem;
                    ${Al.getTextStyle("H5","semibold")}

                    ${yl.MaxWidth.mobileS} {
                        height: auto;
                    }
                `:M`
                    height: 3rem;
                    ${Al.getTextStyle("H4","semibold")}

                    ${yl.MaxWidth.mobileS} {
                        height: auto;
                    }
                `}
`,lc=I(nc)`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?ac.Button.Danger.Primary:ml.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ml.Neutral[3](e);break;default:t=ml.Neutral[8](e)}return M`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,cc={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=lt(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(sc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(lc,Object.assign({},d)),e("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=lt(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(sc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:o},d,c,{children:[a&&e(lc,Object.assign({},d,{size:16})),e("span",{children:i})]}))}))},dc=I.div`
    width: 100%;
    border-bottom: 1px solid ${ml.Neutral[6]};
`,uc=I.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${yl.MaxWidth.mobileL} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return M`
                ${yl.MaxWidth.mobileL} {
                    display: none;
                }
            `}}
`,hc=I(Nl.H2)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${yl.MaxWidth.mobileL} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return M`
                ${yl.MaxWidth.mobileL} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,fc=I(cc.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,pc=Object.assign((({children:n,title:r,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:s=!1,className:l})=>{const[c,d]=a("expand-all"===o),u=e=>{e.preventDefault(),d((e=>!e))};return e(st.Provider,Object.assign({value:c},{children:t(dc,Object.assign({className:l},{children:[r||i?t(uc,Object.assign({$showTitleInMobile:s,$hasExpandAll:i},{children:[r&&e(hc,Object.assign({$showInMobile:s,"data-testid":"accordion-title"},{children:r})),i&&e(fc,Object.assign({"data-testid":"accordion-expand-collapse-button",onClick:u,styleType:"link",type:"button"},{children:c?"Hide all":"Show all"}))]})):null,n]}))}))}),{Item:ql}),gc=e=>{const{textSize:t}=e||{};return M`
        // Text styling
        ${t&&Al.getTextStyle(t,"regular")}

        strong {
            font-family: ${Sl.OpenSans.Semibold};
            ${t&&Al.getTextStyle(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Sl.OpenSans.Semibold};
            ${t&&Al.getTextStyle(t,"semibold")}
            color: ${ml.Primary};
            text-decoration: none;

            svg {
                color: ${ml.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${ml.Secondary};

                svg {
                    color: ${ml.Secondary};
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
    `},mc=I.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=ml.Validation.Red.Background(e),n=ml.Validation.Red.Border(e);break;case"success":t=ml.Validation.Green.Background(e),n=ml.Validation.Green.Border(e);break;case"warning":default:t=ml.Validation.Orange.Background(e),n=ml.Validation.Orange.Border(e);break;case"info":t=ml.Validation.Blue.Background(e),n=ml.Validation.Blue.Border(e);break;case"description":t=ml.Neutral[7](e),n=ml.Neutral[4](e)}return M`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${ml.Neutral[1]};
    ${e=>"small"===e.$sizeType?gc({textSize:"H6"}):gc({textSize:"BodySmall"})}
`,bc=I.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&M`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=ml.Validation.Red.Icon(e);break;case"success":t=ml.Validation.Green.Icon(e);break;case"warning":default:t=ml.Validation.Orange.Icon(e);break;case"info":t=ml.Validation.Blue.Icon(e);break;case"description":t=ml.Neutral[4](e)}return M`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,vc=I(Nl.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?M`
                ${Al.getTextStyle("H6","semibold")}
                margin-top: 0.25rem;
            `:M`
                ${Al.getTextStyle("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${ml.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${ml.Primary};
    }
`,yc=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,xc=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,wc=I.button`
    ${e=>"small"===e.$sizeType?M`
                ${Al.getTextStyle("H6","semibold")}
            `:M`
                ${Al.getTextStyle("H5","semibold")}
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

    color: ${ml.Primary};
`,$c=I(z)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Sc=n=>{var{type:r,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:f}=n,p=lt(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[g,m]=a(!1),[b,v]=a(!1),{height:y,ref:x}=ln();u((()=>{w()}),[f,y]);const w=()=>{m(!f),v($())},$=()=>!!f&&y>f;return t(mc,Object.assign({className:i,$type:r,$sizeType:c,"data-testid":p["data-testid"]},{children:[d&&e(bc,Object.assign({$sizeType:c,$type:r},{children:(()=>{if(r&&h)return h;switch(r){case"success":return e(F,{});case"warning":return e(R,{});case"error":return e(L,{});case"info":case"description":return e(P,{});default:return null}})()})),t(yc,{children:[t(xc,Object.assign({$maxCollapsedHeight:$()?f:void 0,$showMore:g,$hasActionLink:!!s},{children:[e("div",Object.assign({ref:x},{children:o})),s&&t(vc,Object.assign({"data-testid":"action-link",$type:r,$sizeType:c},s,{children:[s.children,l||e(B,{})]}))]})),b&&t(wc,Object.assign({$sizeType:c,$type:r,type:"button",onClick:()=>m(!g)},{children:["Show ",g?"less":"more",e($c,{$expanded:g})]}))]})]}))},kc=v((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.ffd053f8.js")).LottieSpinner}})))),Oc=t=>e(Tc,Object.assign({},t,{children:e(y,Object.assign({fallback:e(Cc,{})},{children:e(kc,{})}))})),Cc=()=>e("div",{style:{height:"200px",width:"200px"}}),Tc=I.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`,Dc=v((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.41a2680f.js")).LottieLoadingDots}})))),jc=t=>e(Ic,Object.assign({},t,{children:e(y,Object.assign({fallback:e(_c,{})},{children:e(Dc,{})}))})),_c=()=>e("div",{style:{height:"16px",width:"64px"}}),Ic=I.div`
    margin: 0 auto;
`,Mc={[fl.colorScheme]:"base",[fl.textStyleScheme]:"base",[fl.designTokenScheme]:"base",[fl.resourceScheme]:"base"},Ec={[fl.colorScheme]:"bookingsg",[fl.textStyleScheme]:"base",[fl.designTokenScheme]:"base",[fl.resourceScheme]:"bookingsg"},Ac={[fl.colorScheme]:"rbs",[fl.textStyleScheme]:"base",[fl.designTokenScheme]:"rbs",[fl.resourceScheme]:"rbs"},Nc={[fl.colorScheme]:"mylegacy",[fl.textStyleScheme]:"base",[fl.designTokenScheme]:"base",[fl.resourceScheme]:"mylegacy"},Bc={[fl.colorScheme]:"ccube",[fl.textStyleScheme]:"base",[fl.designTokenScheme]:"base",[fl.resourceScheme]:"ccube"},Lc={[fl.colorScheme]:"oneservice",[fl.textStyleScheme]:"oneservice",[fl.designTokenScheme]:"base",[fl.resourceScheme]:"base"},Rc=v((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.f578aa7b.js")).LottieLoadingDotsSpinner}})))),Pc=t=>{var{color:n}=t,r=lt(t,["color"]);const i=A(),o=n||ml.Primary({theme:i||Mc});return e(zc,Object.assign({},r,{children:e(y,Object.assign({fallback:e(Fc,{})},{children:e(Rc,{color:o})}))}))},Fc=()=>e("div",{style:{height:"200px",width:"200px"}}),zc=I.div`
    margin: 0 auto;
`;var Hc,Wc={exports:{}};Hc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(c),arrayOf:function(e){return g((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:g((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:g((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=y(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,r,i,o+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return g((function(t,n,r,i,o){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,n,r,i,o,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,n,r,i,o){var s=t[n],l=y(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(r,i,o,c,x(d));var u=d(s,c,r,i,o+"."+c,a);if(u)return u}return null}))},exact:function(e){return g((function(t,n,r,i,l){var c=t[n],d=y(c);if("object"!==d)return new p("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");var u=o({},t[n],e);for(var h in u){var f=e[h];if(s(e,h)&&"function"!=typeof f)return b(r,i,l,h,x(f));if(!f)return new p("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=f(c,h,r,i,l+"."+h,a);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var n={},i=0;function o(o,s,l,c,d,h,f){if(c=c||u,h=h||l,f!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!n[m]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function m(e){return g((function(t,n,r,i,o,a){var s=t[n];return y(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[d]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case c:case d:case i:case a:case o:case h:return f;default:var m=f&&f.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case r:return t}}}var w=c,$=d,S=l,k=s,O=n,C=u,T=i,D=g,j=p,_=r,I=a,M=o,E=h,A=!1;function N(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=S,t.ContextProvider=k,t.Element=O,t.ForwardRef=C,t.Fragment=T,t.Lazy=D,t.Memo=j,t.Portal=_,t.Profiler=I,t.StrictMode=M,t.Suspense=E,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),N(e)||x(e)===c},t.isConcurrentMode=N,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return d(e)||d(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],l=u();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),f=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=u();return(0,i.useEffect)((function(){p&&n&&n(f)}),[f]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Vc=Wc.exports=Hc(i);const Yc=I.div`
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    margin-bottom: 2rem;
`,Uc=I(Ho.div)`
    overflow: hidden;
`,Kc=I.div`
    height: max-content;
`,Xc=I.div`
    border-top: 1px solid ${ml.Neutral[5]};
`,qc=I.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${yl.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
        display: block;
    }

    ${e=>{if(e.$interactive)return M`
                cursor: pointer;
            `}}
`,Gc=I(Nl.H3)`
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: 1rem;
`,Zc=I.div`
    display: flex;
`,Qc=I.span`
    font-size: 1.5rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    margin-right: 2.5rem;

    ${yl.MaxWidth.mobileL} {
        margin-right: 0rem;
    }

    ${e=>{switch(e.$displayState){case"error":return M`
                    color: ${ml.Validation.Red.Icon(e)};
                `;case"warning":return M`
                    color: ${ml.Validation.Orange.Icon(e)};
                `}}}
`,Jc=I(L)`
    height: 1.375rem;
    width: 1.375rem;
`,ed=I.div`
    display: flex;
    margin-left: auto;
    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return M`
                margin-right: 2.5rem;
                ${yl.MaxWidth.mobileL} {
                    margin-right: 0rem;
                    margin-top: 1rem;
                }
            `}}
`,td=I.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 1rem;
    margin: -1rem;
    display: flex;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        margin: -1rem -1rem -1rem 0;
        margin-left: auto;
    }
`;I(Nl.H4)`
    color: ${ml.Primary};
`;const nd=I.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Pl.Base};
`,rd=I(fe)`
    color: ${ml.Neutral[3]};
    height: 1.375rem;
    width: 1.375rem;
`,id=n=>{var{children:r,title:i,collapsible:o=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=n,h=lt(n,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[f,p]=a(!o||s),g=ln(),m=g.ref,b=Vc.useMediaQuery({maxWidth:xl.mobileL}),v=e=>{e.stopPropagation(),p(!f)},y=ko({height:f?g.height:0}),x=()=>o&&e(td,Object.assign({onClick:v,type:"button","aria-label":f?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle"},{children:e(nd,Object.assign({$expanded:f},{children:e(rd,{"aria-hidden":!0})}))}));return t(Yc,Object.assign({},h,{children:[t(qc,Object.assign({"data-testid":"header",onClick:u&&o&&v,$interactive:u&&o},{children:[t(Zc,{children:[e(Gc,Object.assign({id:"title","data-testid":(null==d?void 0:d.title)||"title",weight:"semibold"},{children:i})),(()=>{switch(c){case"error":case"warning":return e(Qc,Object.assign({$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`},{children:e(Jc,{})}));default:return null}})(),b&&x()]}),l&&e(ed,Object.assign({$collapsible:o,"data-testid":"call-to-action-container"},{children:l})),!b&&x()]})),o?e(Uc,Object.assign({style:y,"data-testid":"expandable-container"},{children:e(Xc,Object.assign({ref:m},{children:r}))})):e(Kc,Object.assign({"data-testid":"non-expandable-container"},{children:e(Xc,{children:r})}))]}))};var od={exports:{}};od.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},b=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:b,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+b(r,2,"0")+":"+b(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof C||!(!e||!e[w])},S=function e(t,n,r){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},k=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new C(n)},O=v;O.l=S,O.i=$,O.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return O},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},b.isAfter=function(e,t){return k(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<k(e)},b.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var n=this,r=!!O.u(t)||t,d=O.p(e),f=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return f(r?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var n,l=O.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[O.p(e)]()},b.add=function(r,d){var h,f=this;r=Number(r);var p=O.p(d),g=function(e){var t=k(f);return O.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,b=this.$d.getTime()+r*m;return O.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},h=function(e){return O.s(o%12||12,e,"0")},p=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return s+1;case"MM":return O.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return O.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return O.s(a,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(r,h,f){var p,g=this,m=O.p(h),b=k(r),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return O.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/n;break;case o:p=y/t;break;case i:p=y/e;break;default:p=y}return f?p:O.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},b.clone=function(){return O.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),T=C.prototype;return k.prototype=T,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,C,k),e.$i=!0),k},k.locale=S,k.isDayjs=$,k.unix=function(e){return k(1e3*e)},k.en=x[y],k.Ls=x,k.p={},k}();var ad=Vo(od.exports),sd={exports:{}};sd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],h=d&&d[0],f=d&&d[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):n?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ld=Vo(sd.exports),cd={exports:{}};cd.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var dd=Vo(cd.exports),ud={exports:{}};ud.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var hd=Vo(ud.exports),fd={exports:{}};fd.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var pd,gd,md=Vo(fd.exports),bd={exports:{}};bd.exports=(pd={year:0,month:1,day:2,hour:3,minute:4,second:5},gd={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=gd[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),gd[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,d=pd[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],h=24===u?0:u,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var vd,yd=Vo(bd.exports);ad.extend(dd),ad.extend(md),ad.extend(hd),ad.extend(ld),ad.extend(yd),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=ad(t).startOf("week");return xd(n).map((e=>wd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return wd(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(ad(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+ad(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=ad(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?ad(r):void 0,i?ad(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(vd||(vd={}));const xd=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},wd=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},$d=[1,3,5,7,8,10,12],Sd=[4,6,9,11];var kd,Od,Cd,Td;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":$d.includes(o)?Math.min(i,31).toString():Sd.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=ad(e,n);return ad(t,n).diff(r,"minute")},e.toDayjs=e=>e?ad(e):ad(),e.addMinutesToTime=(e,t,n="HH:mm")=>ad(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>ad(e).isSame(ad(t),n)}(kd||(kd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!ad(e).isBefore(r,"day"))||!(!i||!ad(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(ad(e).isValid())return e}return""}}(Od||(Od={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Cd||(Cd={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Td||(Td={}));function Dd(e){const t=o(null);return h((()=>{t.current=e}),[e]),p(((...e)=>t.current(...e)),[])}const jd=(e,t,n="window",r)=>{const i=o();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])},_d="undefined"!=typeof window?h:u,Id=()=>{const[e,t]=a(!1);return u((()=>{t(!0)}),[]),e};function Md({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}const Ed=e=>{const t=(e=>{const t=o(e),n=o();return u((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},Ad=e=>{const[t,n]=a(e),r=o(e);return[t,p((e=>{r.current=e,n(e)}),[]),r]},Nd=I.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${yl.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${yl.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,Bd=I.ul`
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

    ${yl.MaxWidth.tablet} {
        flex-wrap: nowrap;
    }
`,Ld=I.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${yl.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,Rd=I.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Pd=I(pe)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${ml.Neutral[4]};
`,Fd=I(Nl.BodySmall)`
    margin: 0.25rem !important;
`,zd=I(Nl.Hyperlink.Small)`
    margin: 0.25rem !important;
`,Hd=r=>{var{links:i,fadeColor:s,fadePosition:l="both",itemStyle:c,id:d}=r,u=lt(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[h,f]=a(!1),[p,g]=a(!1),[m,b]=a(!1),v="left"===l||"both"===l,y="right"===l||"both"===l,x=o(null),w=o(null),$=Dd((()=>{const e=w.current,t=x.current;e&&t&&i&&i.length>1&&window.innerWidth<=bl.tablet&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),S=Dd((()=>{const e=window.innerWidth<=bl.tablet;f(e);const t=w.current,n=x.current;if(t&&n&&e&&t.scrollWidth>n.offsetWidth)return g(t.scrollLeft>=1),void b(t.scrollWidth-t.scrollLeft-1>n.offsetWidth);g(!1),b(!1)}));if(jd("resize",S),jd("scroll",S,w.current),_d((()=>{$(),S()}),[$,S]),ln({onResize:$,targetRef:x,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!i)return null;return t(Nd,Object.assign({ref:x,id:d||"breadcrumb"},u,{children:[e("nav",{children:e(Bd,Object.assign({ref:w},{children:i.map(((n,r)=>{let o;return n.children?(o=r!==i.length-1&&n.href?e(zd,Object.assign({},n,{weight:"semibold"})):e(Fd,Object.assign({weight:"semibold"},{children:n.children})),t(Rd,Object.assign({$styleProps:c},{children:[o,r<i.length-1&&e(Pd,{})]}),r)):null}))}))}),h&&(()=>{let r;return r=Array.isArray(s)&&s.length>0?{left:s,right:s}:s||{left:void 0,right:void 0},t(n,{children:[p&&v&&e(Ld,{$backgroundColor:r.left,$position:"left"}),m&&y&&e(Ld,{$backgroundColor:r.right,$position:"right"})]})})()]}))},Wd=I(sc)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>"small"===e.$buttonSizeStyle?M`
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `:M`
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}
`,Vd={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=n,d=lt(n,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return t(Wd,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:o},u,d,{children:[l,e("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,styleType:a="default",danger:s=!1,icon:l,iconPosition:c="left"}=n,d=lt(n,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:c,$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return t(Wd,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:o},u,d,{children:[l,e("span",{children:i})]}))}))},Yd=I.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${yl.MaxWidth.mobileL} {
        min-width: 17.5rem;
    }
`,Ud=M`
    color: ${ml.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Kd=I(ge)`
    ${Ud}
`,Xd=I(pe)`
    ${Ud}
`,qd=I(fe)`
    ${Ud}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Gd=I.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Zd=I.div`
    display: flex;
    flex: 1;
    position: relative;
`,Qd=I.div`
    isolation: isolate;
    width: 100%;
`,Jd=I.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${ml.Neutral[8]};

    ${e=>{if(!e.$visible)return M`
                display: none;
            `}}
`,eu=I.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,tu=I.div`
    display: flex;
`,nu=I.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?M`
                display: none;
            `:e.$expanded?M`
                ${qd} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,ru=I.p`
    ${Al.getTextStyle("H5","regular")}
`,iu=I.div`
    display: flex;
`,ou=I($l)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,au=I.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,su=I(cc.Small)`
    flex: 1;
`,lu=I.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return M`
                    gap: 0.5rem 2.5rem;
                `;case"input":return M`
                    gap: 0.5rem 1rem;
                `}}}
`,cu=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?M`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${ml.Shadow.Accent};
                    border: 1px solid ${ml.Accent.Light[1]};
                }
            `:e.$disabledDisplay?M`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return M`
                    background-color: ${ml.Accent.Light[6](e)};
                `;case"selected-month":return M`
                    background-color: ${ml.Accent.Light[5](e)};
                    border: 1px solid ${ml.Primary(e)};
                `}}}
`,du=I(Nl.H5)`
    ${e=>{if(e.$disabledDisplay)return M`
                color: ${ml.Neutral[4]};
            `;switch(e.$variant){case"current-month":return M`
                    color: ${ml.Neutral[3](e)};
                `;case"selected-month":return M`
                    ${Al.getTextStyle("H5","semibold")}
                    color: ${ml.Primary(e)};
                `}}}
`,uu=({calendarDate:t,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:o,type:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const h=m((()=>vd.generateMonths(ad(t))),[t]),f=e=>{const t="start"===n&&i&&e.isAfter(i,"month")&&s,o="end"===n&&r&&e.isBefore(r,"month")&&s;return t||o},p=e=>{const t=e.format("MMMM"),n=(r=e,!vd.isWithinRange(r,l?ad(l):void 0,c?ad(c):void 0,"month"));var r;const i=o.isSame(e,"month")?"selected-month":ad().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||f(e),interactive:!n||d,month:t,variant:i}};return h.length?e(lu,Object.assign({$type:a},{children:h.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,month:o}=p(t);return e(cu,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(t,!r)},{children:e(du,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n},{children:o}))}),o)}))})):null},hu=I.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return M`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return M`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,fu=I.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?M`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${ml.Shadow.Accent};
                    border: 1px solid ${ml.Accent.Light[1]};
                }
            `:e.$disabledDisplay?M`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return M`
                    background: ${ml.Accent.Light[6](e)};
                `;case"selected-year":return M`
                    background: ${ml.Accent.Light[5](e)};
                    border: 1px solid ${ml.Primary(e)};
                `}}};
`,pu=I(Nl.H5)`
    ${e=>{if(e.$disabledDisplay)return M`
                color: ${ml.Neutral[4]};
            `;switch(e.$variant){case"current-year":return M`
                    color: ${ml.Neutral[3](e)};
                `;case"selected-year":return M`
                    ${Al.getTextStyle("H5","semibold")}
                    color: ${ml.Primary(e)};
                `;case"other-decade":return M`
                    color: ${ml.Neutral[4](e)};
                `}}}
`,gu=({calendarDate:t,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:o,type:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const h=m((()=>vd.generateDecadeOfYears(ad(t))),[t]),f=e=>{const t="start"===n&&i&&e.isAfter(i,"year")&&s,o="end"===n&&r&&e.isBefore(r,"year")&&s;return t||o},p=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(i=e,!vd.isWithinRange(i,l?ad(l):void 0,c?ad(c):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":ad().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||f(e),interactive:!r||d,year:n,variant:a}};return h.length?e(hu,Object.assign({$type:a},{children:h.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,year:o}=p(t);return e(fu,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(t,!r)},{children:e(pu,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n,$interactive:r},{children:o}))}),o)}))})):null},mu=i.forwardRef(((r,i)=>{var{children:s,initialCalendarDate:l,type:c,minDate:d,maxDate:h,currentFocus:f,selectedStartDate:p,selectedEndDate:g,selectWithinRange:m,dynamicHeight:v=!1,allowDisabledSelection:y,onCalendarDateChange:x,withButton:w,doneButtonDisabled:$,onDismiss:S,showNavigationHeader:k=!0,getLeftArrowDate:O,getRightArrowDate:C,isLeftArrowDisabled:T,isRightArrowDisabled:D,getMonthHeaderLabel:j,getYearHeaderLabel:_}=r,I=lt(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[M,E]=a(kd.toDayjs(l)),[A,N]=a(kd.toDayjs(l)),[B,L]=a("default"),R=o(null),P=o(null),F=o();b(i,(()=>({defaultView(){L("default")},resetView(){const e=kd.toDayjs(l);E(e),N(e),L("default")},setCalendarDate(e){const t=kd.toDayjs(e);E(t),N(t)}}))),u((()=>{const e=kd.toDayjs(l);E(e),N(e)}),[l]),u((()=>{K(A)}),[A]);const z=()=>{"month-options"!==B?(L("month-options"),F.current.focus()):(L("default"),E(A))},H=()=>{"default"!==B?(L("default"),E(A)):L("year-options")},W=()=>{F.current.focus();const e=O?O(M):M.subtract(1,"month");switch(B){case"default":N(e),E(e);break;case"month-options":E((e=>e.subtract(1,"year")));break;case"year-options":E((e=>e.subtract(10,"year")))}},V=()=>{F.current.focus();const e=C?C(M):M.add(1,"month");switch(B){case"default":N(e),E(e);break;case"month-options":E((e=>e.add(1,"year")));break;case"year-options":E((e=>e.add(10,"year")))}},Y=e=>{E(e),N(e),w||L("default")},U=()=>{const e=kd.toDayjs(l);E(e),N(e),"default"===B?X("reset"):L("default")},K=e=>{x&&x(e)},X=e=>{S&&S(e)},q=()=>{if(!d||y)return!1;const e=ad(d);return"month-options"===B?!vd.isPreviousYearWithinRange(M,e):"year-options"===B?!vd.isPreviousDecadeWithinRange(M,e):T?T(M):!vd.isPreviousMonthWithinRange(M,e)},G=()=>{if(!h||y)return!1;const e=ad(h);return"month-options"===B?!vd.isNextYearWithinRange(M,e):"year-options"===B?!vd.isNextDecadeWithinRange(M,e):D?D(M):!vd.isNextMonthWithinRange(M,e)},Z=()=>{if("year-options"===B){const{beginDecade:e,endDecade:t}=vd.getStartEndDecade(M);return`${e} to ${t}`}return _?_(M):M.format("YYYY")},Q=()=>{const r=j?j(M):M.format("MMM");return t(n,{children:[t(nu,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===B,$visible:"default"===B,id:"month-dropdown",onClick:z},{children:[e(ru,{children:r}),e(qd,{})]})),t(nu,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==B,id:"year-dropdown",onClick:H},{children:[e(ru,{children:Z()}),e(qd,{})]}))]})},J=()=>{switch(B){case"month-options":return e(uu,{type:c,calendarDate:M,currentFocus:f,minDate:d,maxDate:h,selectedStartDate:p,selectedEndDate:g,viewCalendarDate:A,isNewSelection:m,onMonthSelect:Y,allowDisabledSelection:y});case"year-options":return e(gu,{type:c,calendarDate:M,currentFocus:f,minDate:d,maxDate:h,selectedStartDate:p,selectedEndDate:g,viewCalendarDate:A,isNewSelection:m,onYearSelect:Y,allowDisabledSelection:y});default:return null}};return t(Gd,Object.assign({ref:F,"data-id":"calendar-container","data-testid":"calendar-container"},I,{children:[k&&t(eu,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[e(tu,{children:Q()}),t(iu,{children:[e(ou,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:W},{children:e(Kd,{})})),e(ou,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:e(Xd,{})}))]})]})),e(Zd,{children:(()=>{const r="function"==typeof s?s({calendarDate:A,currentView:B}):s;return t(n,v?{children:["default"===B&&r,J()]}:{children:[e(Qd,{children:r}),e(Jd,Object.assign({$visible:"default"!==B},{children:J()}))]})})()}),(()=>{if(!w)return;const n=!!("default"===B)&&$;return t(au,{children:[e(su,Object.assign({ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),e(su,Object.assign({"data-testid":"done-button",ref:R,type:"button",onClick:()=>{n||(E(A),"default"===B?X("confirmed"):L("default"))},disabled:n},{children:"Done"}))]})})()]}))})),bu=I.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,vu=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,yu=I.div`
    grid-column: 1 / -1;
    display: flex;
`,xu=I.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,wu=I.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return M`
                    left: 0;
                `;case"right":return M`
                    right: 0;
                `}}}
`,$u=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,Su=I(Nl.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return M`
                ${Al.getTextStyle("H5","semibold")};
                color: ${ml.Accent.Light[2]};
            `;if(t)return M`
                color: ${ml.Neutral[4]};
            `;if(n)return M`
                ${Al.getTextStyle("H5","semibold")};
                color: ${ml.Primary};
            `;switch(r){case"other-month":return M`
                    color: ${ml.Neutral[4]};
                `;case"today":return M`
                    color: ${ml.Neutral[3]};
                `;case"default":return M`
                    color: ${ml.Neutral[1]};
                `}}}
`;I(wu)`
    ${e=>{const{$selected:t}=e;if(t)return M`
                border-top: 1px solid ${ml.Accent.Light[4]};
                border-bottom: 1px solid ${ml.Accent.Light[4]};
                background-color: ${ml.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?M`
                border-top: 1px dashed ${ml.Accent.Light[4]};
                border-bottom: 1px dashed ${ml.Accent.Light[4]};
                background-color: ${ml.Accent.Light[6]};
            `:n?M`
                background-color: ${ml.Accent.Light[4]};
            `:void 0}}
`;const ku=I($u)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?M`
                background: ${ml.Accent.Light[5]};
                border: 1px solid ${ml.Primary};
            `:t?M`
                box-shadow: 0px 0px 4px 1px ${ml.Shadow.Accent};
                border: 1px solid ${ml.Accent.Light[1]};
                background-color: ${ml.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?M`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${ml.Shadow.Accent};
                    border: 1px solid ${ml.Accent.Light[1]};
                    background-color: ${ml.Neutral[8]};
                }
            `:n?M`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?M`
                border: 1px solid ${ml.Accent.Light[1]};
                background: ${ml.Accent.Light[4]};

                :hover {
                    background: ${ml.Accent.Light[4]};
                }
            `:t?M`
                color: ${ml.Neutral[4]};
            `:"today"===r?M`
                    background: ${ml.Accent.Light[5]};
                `:void 0}}
`,Ou=e=>{let t=ml.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=ml.Accent.Light[5];break;case"hover-dash":t=ml.Accent.Light[6],n=`1px dashed ${ml.Accent.Light[4](e)}`;break;case"hover-current":t=ml.Neutral[8],n=`1px solid ${ml.Primary(e)}`;break;case"selected":t=ml.Accent.Light[5],n=`1px solid ${ml.Accent.Light[4](e)}`;break;case"selected-outline":t=ml.Accent.Light[5],n=`1px solid ${ml.Primary(e)}`;break;case"overlap":t=ml.Accent.Light[4],n=`1px solid ${ml.Accent.Light[4](e)}`;break;case"overlap-outline":t=ml.Accent.Light[4],n=`1px solid ${ml.Primary(e)}`}return{color:t,border:n}},Cu=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Tu=I.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=Ou(e);return M`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Du=I(Tu)`
    left: 0;
`,ju=I(Tu)`
    right: 0;
`,_u=I.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Iu=I(_u)`
    left: 0;
`,Mu=I(_u)`
    right: 0;
`,Eu=I.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=Ou(e);return M`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&M`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,Au=I(Eu)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${ml.Shadow.Accent};
    }
`,Nu=I(Eu)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${ml.Shadow.Accent};
    }
`,Bu=I(Nl.H5)`
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

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?M`
                    ${Al.getTextStyle("H5","semibold")};
                    color: ${ml.Accent.Light[2]};
                `:"hidden"===n?M`
                    visibility: hidden;
                `:M`
                color: ${ml.Neutral[4]};
            `;switch(n){case"selected":return M`
                    ${Al.getTextStyle("H5","semibold")};
                    color: ${ml.Primary};
                `;case"current":return M`
                    color: ${ml.Neutral[3]};
                `;case"unavailable":return M`
                    color: ${ml.Neutral[4]};
                `;case"hidden":return M`
                    visibility: hidden;
                `;default:return M`
                    color: ${ml.Neutral[1]};
                `}}}
`,Lu=({bgLeft:n,bgRight:r,circleLeft:i,circleRight:o,shadow:a,circleShadow:s,labelType:l,disabled:c,interactive:d,date:u,onSelect:h,onHover:f,onHoverEnd:p})=>t(Cu,{children:[e(Iu,{$shadow:n&&a}),e(Du,{$type:n,$shadow:n&&a}),e(Au,{$type:i,$shadow:i&&s}),e(Mu,{$shadow:r&&a}),e(ju,{$type:r,$shadow:r&&a}),e(Nu,{$type:o,$shadow:o&&s}),e(Bu,Object.assign({weight:"regular",$type:l,$disabled:c,$interactive:d,onClick:()=>{h(u)},onMouseEnter:()=>{f(u)},onMouseLeave:()=>{p&&p(u)}},{children:u.date()}))]}),Ru=({date:t,calendarDate:n,startDate:r,endDate:i,currentFocus:o,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:f,onHover:p})=>{const g=vd.isDisabledDay(t,c,s,l),m=!g||d,b=()=>{const e=ad(a),t=e.isBefore(i,"day"),n=e.isAfter(r,"day");let s,l,c,d;return"start"===o&&i&&t&&(r&&n?(c=a,d=i):(s=a,l=r||i)),"end"===o&&r&&n&&(i&&t?(c=r,d=a):(s=i||r,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:n,disabled:g,interactive:m,onSelect:()=>{f(t,!m)},onHover:()=>{p(t.format("YYYY-MM-DD"),!m)}};return e(Lu,Object.assign({},v,(()=>{const e={};if(n.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(ad().isSame(t,"day")&&!g)e.labelType="current",e.circleLeft="current",e.circleRight="current";else if(u){const n="end"===o&&r&&t.isBefore(r),a="start"===o&&i&&t.isAfter(i);(n||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(r,"day"),a=t.isSame(i,"day");return h&&n.month()!==t.month()?(e.labelType="hidden",e):((r&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),r&&i&&t.isBetween(r,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected"),a||(e.bgRight="selected")),e)})(),(()=>{if(!a)return;const e={};t.isSame(a,"day")&&(e.circleShadow=!0,e.circleLeft="hover-current",e.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:i,overlapEnd:o}=b();if(n&&r){if(t.isBetween(n,r,"day","[]")){const i=t.isSame(n,"day"),o=t.isSame(r,"day");e.labelType="selected",i||(e.bgLeft="hover-dash"),o||(e.bgRight="hover-dash")}return e}if(i&&o){if(t.isBetween(i,o,"day","[]")){const n=t.isSame(i,"day"),r=t.isSame(o,"day");e.labelType="selected",(n||r)&&(e.circleShadow=!0,e.circleLeft="overlap-outline",e.circleRight="overlap-outline"),n||(e.bgLeft="overlap"),r||(e.bgRight="overlap")}return e}return e})()))};ad.extend(dd);const Pu=({calendarDate:n,currentFocus:r,disabledDates:i,selectedStartDate:o,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:d,minDate:u,maxDate:h,allowDisabledSelection:f,showActiveMonthDaysOnly:p})=>{const g=m((()=>vd.generateDays(n)),[n]),[b,v]=a(""),y=(e,t)=>{t&&!f||l(e)},x=(e,t)=>{t&&!f||(v(e),c(e))},w=()=>{v(""),c("")};return t(bu,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((t,n)=>e(vu,{children:e(Nl.H6,Object.assign({weight:"semibold"},{children:ad(t).format("ddd")}))},`week-day-${n}`))),g.map(((t,a)=>e(yu,Object.assign({onMouseLeave:w},{children:t.map(((t,a)=>e(Ru,{date:t,calendarDate:n,startDate:o,endDate:s,hoverDate:b,currentFocus:r,minDate:u,maxDate:h,disabledDates:i,allowDisabledSelection:f,isNewSelection:d,showActiveMonthDaysOnly:p,onSelect:y,onHover:x},`day-${a}`)))}),a)))]}))},Fu=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:d,onHover:u})=>{const h=vd.isDisabledDay(t,s,o,a),f=!h||l,{start:p,end:g}=r?vd.getFixedRangeStartEnd(kd.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:b}=i?vd.getFixedRangeStartEnd(kd.toDayjs(i),c):{start:void 0,end:void 0},v=r&&t.isBetween(p,g,"day","[]"),y=i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(g,"day")||y&&t.isSame(b,"day"),$=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},S={date:t,calendarDate:n,disabled:h,interactive:f,onSelect:()=>{d(t,!f)},onHover:()=>{u(t.format("YYYY-MM-DD"),!f)}};return e(Lu,Object.assign({},S,(()=>{const e={};return v||y?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":ad().isSame(t,"day")&&!h&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={},n=t.format("YYYY-MM-DD");return y&&$(e,"hover-dash",n===m,n===b),v&&$(e,"selected",n===p,n===g),v&&y&&$(e,"overlap",x,w),n===p&&(y?(e.circleLeft="overlap-outline",e.circleRight="overlap-outline"):(e.circleRight="selected-outline",e.circleLeft="selected-outline")),n===m&&(e.circleLeft="hover-current",e.circleRight="hover-current",e.circleShadow=!0,m>=p&&m<g&&(e.circleLeft="overlap-outline",e.circleRight="overlap-outline")),e})()))},zu=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=m((()=>vd.generateDays(n)),[n]),[f,p]=a(""),g=(e,t)=>{t&&!d||(o(e),e&&!ad(e).isSame(e,"month")&&p(""))},b=(e,t)=>{t&&!d||(p(e),s(e))},v=()=>{p(""),s("")};return t(bu,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((t,n)=>e(vu,{children:e(Nl.H6,Object.assign({weight:"semibold"},{children:ad(t).format("ddd")}))},`week-day-${n}`))),h.map(((t,o)=>e(yu,Object.assign({onMouseLeave:v},{children:t.map(((t,o)=>e(Fu,{date:t,calendarDate:n,selectedDate:i,hoverDate:f,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:g,onHover:b,numberOfDays:u},`day-${o}`)))}),o)))]}))},Hu=I.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${ml.Neutral[8]};

    ${e=>{if("input"===e.$type)return M`
                border: 1px solid ${ml.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Wu=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=vd.isDisabledDay(t,s,o,a),h=!u||l,{start:f,end:p}=vd.getWeekStartEnd(kd.toDayjs(r)),{start:g,end:m}=vd.getWeekStartEnd(kd.toDayjs(i)),b=r&&t.isBetween(f,p,"day","[]"),v=i&&t.isBetween(g,m,"day","[]"),y=b&&t.isSame(f)||v&&t.isSame(g),x=b&&t.isSame(p)||v&&t.isSame(m),w={date:t,calendarDate:n,disabled:u,interactive:h,onSelect:()=>{c(t,!h)},onHover:()=>{d(t.format("YYYY-MM-DD"),!h)}};return e(Lu,Object.assign({},w,(()=>{const e={};return b||v?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":ad().isSame(t,"day")&&!u&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={};let t;return b&&v?(t="hover-current",e.shadow=!0,e.circleShadow=y||x):b?t="selected-outline":v&&(t="hover-dash"),t&&(y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},Vu=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:o,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const u=m((()=>vd.generateDays(n)),[n]),[h,f]=a(""),p=(e,t)=>{if(t&&!d)return;const n=e.startOf("week");o(n),e&&!ad(e).isSame(n,"month")&&f("")},g=(e,t)=>{t&&!d||(f(e),s(e))},b=()=>{f(""),s("")};return t(bu,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((t,n)=>e(vu,{children:e(Nl.H6,Object.assign({weight:"semibold"},{children:ad(t).format("ddd")}))},`week-day-${n}`))),u.map(((t,o)=>e(yu,Object.assign({onMouseLeave:b},{children:t.map(((t,o)=>e(Wu,{date:t,calendarDate:n,selectedDate:i,hoverDate:h,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:p,onHover:g},`day-${o}`)))}),o)))]}))},Yu=i.forwardRef((({disabledDates:t,onYearMonthDisplayChange:n,onSelect:r,onHover:i,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:f,allowDisabledSelection:p,type:g="standalone",selectWithinRange:m=!0,initialCalendarDate:v,numberOfDays:y,showActiveMonthDaysOnly:x=!1},w)=>{const $=o(),S=o(void 0);b(w,(()=>({reset(){$.current.resetView()},setCalendarDate(e){$.current.setCalendarDate(e)}})));const k=e=>{const t=e.format("YYYY-MM-DD");$.current.setCalendarDate(t),C(t)},O=e=>{T(e)},C=e=>{r&&r(e)},T=e=>{i&&i(e)},D=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e(Hu,Object.assign({$type:g},{children:e(mu,Object.assign({type:g,ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:h,maxDate:f,selectWithinRange:m,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{S.current&&S.current.isSame(e,"month")||D(e),S.current=e},initialCalendarDate:v},{children:({calendarDate:n})=>(n=>{switch(u){case"week":return e(Vu,{calendarDate:n,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:k,onHover:O});case"fixed-range":return e(zu,{calendarDate:n,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:k,onHover:O,numberOfDays:y});default:return e(Pu,{calendarDate:n,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:f,isNewSelection:m,allowDisabledSelection:p,showActiveMonthDaysOnly:x,onSelect:k,onHover:O})}})(n)}))}))})),Uu=i.forwardRef(((t,n)=>{var{width:r}=t,i=lt(t,["width"]);return e(Yd,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:e(Yu,Object.assign({ref:n},i))}))})),Ku=t=>{var{className:n,styleType:r="bordered",value:i,onSelect:o}=t,s=lt(t,["className","styleType","value","onSelect"]);const[l,c]=a(i);return u((()=>{c(i)}),[i]),e(Xu,Object.assign({className:n,$hasBorder:"bordered"===r},{children:e(Yu,Object.assign({type:"standalone",value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==o||o(e)}},s))}))},Xu=I.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return M`
                border: 1px solid ${ml.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`,qu=I.div`
    border-radius: 0.5rem;
    background: ${ml.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Gu=t=>{var{children:n}=t,r=lt(t,["children"]);const i=r["data-testid"]||"card";return e(qu,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e(Nl.Body,{children:n}):n}))},Zu=E`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Qu=I.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return M`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${Zu};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?ml.Neutral[4](e):e.$unchecked?ml.Accent.Light[2](e):ml.Primary(e)};
    }
`,Ju=I.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,eh=n=>{var{className:r,checked:i,disabled:a,indeterminate:s,onChange:l,onKeyPress:c,displaySize:d="default"}=n,h=lt(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=o();u((()=>{f.current.indeterminate=s}),[s]);const p=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(Qu,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:p,$displaySize:d,$disabled:a,$unchecked:!(s||i||a)},{children:[e(Ju,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:f,tabIndex:-1,onChange:p,disabled:a},h)),s?e(H,{"data-testid":"indeterminate"}):i?e(W,{"data-testid":"checkmark"}):a?e(V,{"data-testid":"disabled-empty-checkbox"}):e(Y,{"data-testid":"empty-checkbox"})]}))};var th=Go,nh=/\s/;var rh=function(e){for(var t=e.length;t--&&nh.test(e.charAt(t)););return t},ih=/^\s+/;var oh=function(e){return e?e.slice(0,rh(e)+1).replace(ih,""):e},ah=va,sh=ha,lh=/^[-+]0x[0-9a-f]+$/i,ch=/^0b[01]+$/i,dh=/^0o[0-7]+$/i,uh=parseInt;var hh=function(e){if("number"==typeof e)return e;if(sh(e))return NaN;if(ah(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ah(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=oh(e);var n=ch.test(e);return n||dh.test(e)?uh(e.slice(2),n?2:8):lh.test(e)?NaN:+e},fh=va,ph=function(){return th.Date.now()},gh=hh,mh=Math.max,bh=Math.min;var vh=function(e,t,n){var r,i,o,a,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function g(){var e=ph();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return u?bh(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function b(){var e=ph(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=gh(t)||0,fh(n)&&(d=!!n.leading,o=(u="maxWait"in n)?mh(gh(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(ph())},b},yh=Vo(vh),xh=vh,wh=va;var $h=Vo((function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return wh(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),xh(e,t,{leading:r,maxWait:t,trailing:i})})),Sh=new Map,kh=new WeakMap,Oh=0,Ch=void 0;function Th(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(kh.has(e)||(Oh+=1,kh.set(e,Oh.toString())),kh.get(e)):"0"}(e.root):e[t]}`)).toString()}function Dh(e,t,n={},r=Ch){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=Th(e);let n=Sh.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Sh.set(t,n)}return n}(n),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),Sh.delete(i))}}function jh({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var u;const[h,f]=r.useState(null),p=r.useRef(),[g,m]=r.useState({inView:!!l,entry:void 0});p.current=d,r.useEffect((()=>{if(s||!h)return;let r;return r=Dh(h,((e,t)=>{m({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&a&&r&&(r(),r=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,h,o,i,a,s,n,c,t]);const b=null==(u=g.entry)?void 0:u.target,v=r.useRef();h||!b||a||s||v.current===b||(v.current=b,m({inView:!!l,entry:void 0}));const y=[f,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}const _h=I.div`
    width: 100%;
`,Ih=I.div`
    ${Al.getTextStyle("H4","semibold")}
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: ${ml.Primary};
    border: 1px solid ${ml.Primary};
    background-color: ${ml.Neutral[8]};

    ${yl.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${e=>{if(e.$warn)return M`
                color: ${ml.Validation.Red.Text};
                border: 1px solid ${ml.Validation.Red.Border};
            `}}
`,Mh=I(Ih)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,Eh=I(Ih)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:n,$right:r,$warn:i}=e;return M`
            /* style object will be converted to px */
            ${{top:t,left:n,right:r}}
            box-shadow: 0px 0px 4px 1px
                ${i?ml.Validation.Red.Border:ml.Accent.Light[2]};

            ${yl.MaxWidth.mobileL} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
            }
        `}}
`,Ah=I.div`
    ${Al.getTextStyle("H4","bold")}
    margin-left: 0.5rem;
    margin-right: 1.5rem;

    ${yl.MaxWidth.mobileL} {
        margin-right: 3rem;
    }
`,Nh=I.div`
    margin-left: auto;
`;var Bh,Lh;!function(e){e.AM="AM",e.PM="PM"}(Bh||(Bh={})),function(e){e.roundToNearestHour=(e,t)=>{const n=ad(e,"HH:mm");return(0===n.minute()?n:t?n.minute(0).add(1,"hour"):n.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let i=ad(e,r),o=ad(t,r);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(n)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:Bh.AM};if(!t)return n;try{if("24hr"===e){const r=Fh(t,e);n.minute=Td.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=Bh.AM,n.hour=0===i?"12":Td.padValue(i.toString())):(n.period=Bh.PM,n.hour=12===i?i.toString():Td.padValue((i-12).toString()))}else{const r=Fh(t,e);n.hour=Td.padValue(r.hour),n.minute=Td.padValue(r.minute),n.period="am"===r.period.toLowerCase()?Bh.AM:Bh.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Td.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return Td.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Td.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?Td.padValue(r.toString()):13===r?Td.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===Bh.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return Td.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Fh(e,t),r=Td.padValue(n.hour);let i=`${r}:${Td.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,i]=t.split(":").map(Number);let o=r;return"pm"===n&&o<12&&(o+=12),"am"===n&&12===o&&(o=0),zh(o,i)}return e},e.generateTimings=(t,n="12hr",r,i)=>{const o=[];let a=0,s=1440-t;for(r&&(a=e.timeToMinutes(r)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const r=a%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=zh(e,r,t);o.push(n)}else{const t=zh(e,r);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let i=parseInt(r[1]||"0",10);const o=parseInt(r[3]||"0",10);let a=r[4];if(void 0===r[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),zh(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return zh(i,o,a)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let i="",o=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<o)o=Math.abs(n),i=t;else if(n>0)break}return i},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,i]=t.split(":").map(Number);let o=r;return"pm"===n&&12!==o&&(o+=12),"am"===n&&12===o&&(o=0),60*o+i}}(Lh||(Lh={}));const Rh=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},Ph=e=>{const t=parseInt(e);return t>=0&&t<=59},Fh=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),o=n[1].substring(2);if(!Rh(n[0],t)||!Ph(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Rh(n[0],t)||!Ph(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},zh=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,Hh=r=>{var{className:i,align:s="right",timer:l,timestamp:c,notifyTimer:d,offset:h,mobileOffset:f,show:p,fixed:g=!0,"data-testid":m,onFinish:b,onNotify:v,onTick:y}=r,x=lt(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const w=o(),$=o(!1),[S,k]=a(0),[O,C]=a(0),[T,D]=a(0),[j,_]=a(!1),[I]=((e,t,n)=>{const[r,i]=a(e);u((()=>{if(!t)return;const r=null!=n?n:Date.now()+1e3*e,i=o(r);return()=>clearTimeout(i)}),[n,t,e]);const o=e=>{const t=()=>{const n=e-Date.now(),r=n%1e3,o=Math.max(Math.round(n/1e3),0);if(i(o),0!==o)return setTimeout(t,r>500?r:r+1e3)};return t()};return[r]})(l,j,c),{ref:M,inView:E}=jh({threshold:1,rootMargin:-1*S+"px 0px 0px 0px",initialInView:!0}),A=!g||E,N=Vc.useMediaQuery({maxWidth:bl.mobileL});u((()=>{_(p)}),[p]),u((()=>{0===I?P():I<=d&&(L(),R())}),[I]),u((()=>{const e=function(){var e,t;const n=null!==(e=null==h?void 0:h.top)&&void 0!==e?e:168,r=null!==(t=null==f?void 0:f.top)&&void 0!==t?t:80,i=N?r:n;return i}();k(e)}),[N,null==h?void 0:h.top,null==f?void 0:f.top]),u((()=>{if(w.current){const e=$h(B,300);return B(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[w.current]),u((()=>{$.current=!1}),[l,p]);const B=()=>{var e;const t=null===(e=w.current)||void 0===e?void 0:e.getBoundingClientRect();D(t.x),C(t.right)},L=()=>{y&&y(I)},R=()=>{v&&!$.current&&($.current=!0,v())},P=()=>{_(!1),b&&b()};const F=()=>{const{minutes:r,seconds:i}=Lh.toMinutesSeconds(I),o=1!==r?"mins":"min",a=1!==i?"secs":"sec";return t(n,{children:[e(U,{}),e(Ah,{children:"Time left:"}),t(Nh,{children:[r," ",o," ",String(i).padStart(2,"0")," ",a]})]})};if(void 0!==typeof window)return j||0===I?t(_h,Object.assign({className:i},x,{children:[e("div",{ref:M}),e(Mh,Object.assign({"data-testid":m,"data-id":"countdown-wrapper",ref:w,inert:A?void 0:"",$visible:A,$warn:I<=d},{children:F()})),w.current&&!A&&(()=>{var t,n;const r=null!==(t=null==h?void 0:h.left)&&void 0!==t?t:"left"===s?T:void 0,i=null!==(n=null==h?void 0:h.right)&&void 0!==n?n:"right"===s?Math.floor(document.body.clientWidth-O):void 0;return e(Eh,Object.assign({"data-testid":m,"data-id":"fixed-countdown-wrapper",$warn:I<=d,$top:S,$left:r,$right:i},{children:F()}))})()]})):e(n,{})},Wh=r=>i=>{switch(r){case"maintenance":return t(n,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const r=i,o=Math.floor(r.secondsLeft/60),a=r.secondsLeft%60;return t(n,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",o," minutes"," ",a," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var Vh;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:n,lg:r,width:i,height:o}=e;return{srcSet:`${t} 400w, ${n} 800w, ${r} 1200w`,src:r,sizes:`(max-width: ${bl.mobileL}px) 400px, (max-width: ${bl.tablet}px) 800px, 1200px`,width:i,height:o}}}(Vh||(Vh={}));const{imgAttributeHelper:Yh}=Vh,Uh={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},Kh={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},Xh=Object.assign(Object.assign({},Uh),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),qh=Object.assign(Object.assign({},Uh),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Gh=e=>new Map([["400",{img:Yh(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Yh(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Yh(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Yh(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Yh(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Yh(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Yh(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Yh(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Yh(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Yh(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Yh(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Yh(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Yh(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:Wh("inactivity")}],["maintenance",{img:Yh(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:Wh("maintenance")}],["no-item-found",{img:Yh(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Yh(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Yh(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Yh(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Yh(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Yh(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]),Zh=I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Qh=I.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${yl.MaxWidth.mobileL} {
        width: 20rem;
    }

    ${yl.MaxWidth.mobileM} {
        width: 18rem;
    }

    ${yl.MaxWidth.mobileS} {
        width: 15rem;
    }
`,Jh=I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,ef=I(Nl.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,tf=I.div`
    ${Al.getTextStyle("Body","regular")} // Follow styling of Text.Body
    color: ${ml.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${Al.getFontFamily("Body","semibold")}
    }

    a {
        ${Al.getTextStyle("Body","semibold")}
        color: ${ml.Primary};

        :hover,
        :active,
        :focus {
            color: ${ml.Secondary};
        }
    }
`,nf=I(cc.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${yl.MaxWidth.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,rf=n=>{var{type:r,img:i,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=n,u=lt(n,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=A(),f=((e,t)=>{switch(t){case"bookingsg":return Gh(Kh).get(e);case"ccube":return Gh(Xh).get(e);case"mylegacy":return Gh(qh).get(e);default:return Gh(Uh).get(e)}})(r,d||(h||Mc).resourceScheme),p=u["data-testid"]||"error-display",g=()=>{switch(r){case"maintenance":{const e=l;return l&&e.dateString?f.renderDescription(e):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?f.renderDescription(e):a||void 0}default:return a||void 0}};if(!f)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},f),i&&{img:i}),o&&{title:o}),g()&&{description:g()});return t(Zh,Object.assign({},u,{"data-testid":p},{children:[e(Qh,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?t(Jh,{children:[m.title&&("string"==typeof m.title?e(ef,Object.assign({"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold"},{children:m.title})):m.title),m.description&&e(tf,Object.assign({"data-testid":`${p}--description`,"data-id":"error-display-description"},{children:"string"==typeof m.description?e("p",{children:m.description}):m.description}))]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e(nf,Object.assign({},t))})()]}))},of=ml.Neutral[5],af=ml.Neutral[1],sf=I.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${of};
    border-radius: 0.5rem;

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,lf=I.div`
    flex: 1;
`,cf=I.table`
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
`,df=I.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`1px solid ${of}`:"none"};
        }
    }
`,uf=I.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",n=e.$width?`${e.$width}px`:"100%";return M`
                position: fixed;
                left: ${t};
                width: ${n};
            `}return M`
                position: sticky;
                left: 0;
            `}};
`,hf=I.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&`\n            transform: translateX(-0.5%) translateY(-2rem);\n            border-radius: 4px;\n            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);\n            width: 101%;\n            border: 1px solid ${of};\n        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: 1px solid ${of};
    border-radius: 0 0 4px 4px;
    background-color: ${ac.Table.Cell.Selected};
    transition: all 300ms ease;
`,ff=I.tr`
    background-color: ${ac.Table.Header};
    height: 6rem;
    border-bottom: 1px solid ${of};
`,pf=I.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${af};
    border-bottom: 1px solid ${of};
    ${e=>{if(e.$isCheckbox)return M`
                width: 4rem;
            `}};
`,gf=I.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${ml.Neutral[1]};
        margin-left: 0.5rem;
    }
`,mf=I.tr`
    background-color: ${e=>e.$isSelected?M`
                ${ac.Table.Cell.Selected};
            `:e.$alternating?M`
                ${ac.Table.Cell.Primary};
            `:M`
                ${ac.Table.Cell.Secondary};
            `};
    border-top: 1px solid ${of};
    &:hover {
        ${e=>{if(!e.$isSelected&&e.$isSelectable)return M`
                    background-color: ${ac.Table.Cell.Hover};
                `}};
    }
`,bf=I.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${af};
    border-bottom: 1px solid ${of};
`,vf=I(Nl.Body)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`,yf=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,xf=I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,wf=I(rf)`
    h3,
    button {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }
`,$f=I.td`
    padding: 4rem 0;
`,Sf=r=>{var{id:i,headers:s,rows:l,className:c,sortIndicators:d,alternatingRows:h,loadState:f="success",enableMultiSelect:g,selectedIds:m,disabledIds:b,enableActionBar:v,enableSelectAll:y,enableStickyHeader:x,emptyView:w,actionBarContent:$,renderCustomEmptyView:S,onHeaderClick:k,onSelect:O,onSelectAll:C,onClearSelectionClick:T}=r,D=lt(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const j=o(null),_=o(null),I=o(null),M=o(null),E=o(null),[A,N]=a(!1),[B,L]=a(!1),[R,P]=a(!1),[F,z]=a(!1),[H,W]=a(!1),{ref:V,inView:Y}=jh(),U=p((()=>{if(!E.current||!M.current)return;const e=E.current.scrollHeight>E.current.clientHeight;N(e),e?M.current.style.transform="translateY(0)":ne()}),[]);u((()=>{U()}),[]),ln({onResize:U});jd("scroll",(()=>{requestAnimationFrame((()=>{A?te():ne()})),E.current&&P(E.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),u((()=>{re()}),[l]);const q=()=>(null==m?void 0:m.length)===l.length,G=e=>!!(null==m?void 0:m.includes(e)),Z=e=>!!h&&e%2==1,Q=e=>!!(null==b?void 0:b.includes(e)),J=e=>{if(D["data-testid"])return`${D["data-testid"]}-${e}`},ee=()=>s.length+(g?1:0),te=()=>{if(!E.current)return;const e=E.current.getBoundingClientRect();z(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},ne=()=>{if(!(j.current&&_.current&&E.current&&M.current&&I.current))return;const e=_.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,n=j.current.getBoundingClientRect().height-I.current.clientHeight-32,r=Math.min(t,n);M.current.style.transform=`translateY(-${r}px)`}else M.current.style.transform="translateY(0)"},re=()=>{j.current&&E.current&&W(j.current.clientHeight+(v?56:0)<E.current.clientHeight)},ie=n=>{const{fieldKey:r,label:i,clickable:o=!1,style:a}="string"==typeof n?{fieldKey:n,label:n,style:void 0}:n;return e(pf,Object.assign({"data-testid":J(`header-${r}`),$clickable:o,onClick:()=>o&&(null==k?void 0:k(r)),style:a,$isCheckbox:!1},{children:t(gf,{children:["string"==typeof i?e(Nl.H4,Object.assign({weight:"bold"},{children:i})):i,oe(r)]})}),r)},oe=t=>{const r=null==d?void 0:d[t];return r?"asc"===r?e(K,{"data-testid":J(`header-${t}-arrowup`)}):e(X,{"data-testid":J(`header-${t}-arrowdown`)}):e(n,{})},ae=()=>e(pf,Object.assign({"data-testid":J("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e(yf,{children:y&&e(eh,{displaySize:"small",checked:q(),indeterminate:m&&0!==m.length&&!q(),onClick:()=>{C&&C(q())}})})})),se=(t,n)=>{const r="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=n.id.toString(),a=n[i],s=`${o}-${i}`;return e(bf,Object.assign({"data-testid":J(`row-${s}`),style:r,$isCheckbox:!1},{children:"string"==typeof a||"number"==typeof a?e(vf,{children:a}):"function"==typeof a?a(n,{isSelected:G(o)}):a}),s)},le=t=>e(bf,Object.assign({"data-testid":J(`row-${t}-selection`),$isCheckbox:!0},{children:e(yf,{children:e(eh,{displaySize:"small",checked:G(t),onClick:()=>{O&&O(t,!G(t))},disabled:Q(t)})})})),ce=()=>e(wf,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(Nl.H3,{children:w.title}):w.title:e(Nl.H3,{children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(sf,Object.assign({id:i||"table-wrapper","data-testid":D["data-testid"]||"table",className:c,ref:E,onScroll:()=>{A&&E.current&&L(E.current.scrollTop+E.current.clientHeight>=E.current.scrollHeight)}},{children:[e(lf,{children:t(cf,Object.assign({$end:R,$scrollable:A,ref:j,$stickyHeader:x},{children:[e("thead",Object.assign({ref:I},{children:t(ff,{children:[g&&ae(),s.map(ie)]})})),e(df,Object.assign({$showLastRowBottomBorder:H},{children:"success"===f?!l||l.length<1?e("tr",{children:e($f,Object.assign({colSpan:ee()},{children:S?S():ce()}))}):e(n,{children:null==l?void 0:l.map(((e,n)=>t(mf,Object.assign({"data-testid":J(`row-${e.id.toString()}`),$alternating:Z(n),$isSelectable:g,$isSelected:G(e.id.toString())},{children:[g&&le(e.id.toString()),s.map((t=>se(t,e)))]}),e.id.toString())))}):e("tr",{children:e("td",Object.assign({colSpan:ee()},{children:e(xf,{children:"loading"===f&&e(Pc,{})})}))})}))]}))}),v&&m&&m.length>0&&(()=>{var n,r,i;return e(uf,Object.assign({ref:M,$fixed:F,$left:null===(r=null===(n=null==j?void 0:j.current)||void 0===n?void 0:n.getBoundingClientRect())||void 0===r?void 0:r.left,$width:null===(i=null==j?void 0:j.current)||void 0===i?void 0:i.clientWidth},{children:t(hf,Object.assign({$float:(A?!B:!Y)||F,$scrollable:A},{children:[e(Nl.H5,Object.assign({weight:"semibold"},{children:`${m.length} item${m.length>1?"s":""} selected`})),e(cc.Small,Object.assign({styleType:"link",onClick:T},{children:"Clear selection"})),$]}))}))})(),e("div",{ref:e=>{_.current=e,V(e)}})]}))},kf=e=>"small"===e?2.5:3,Of=I.div`
    position: relative;
    width: 100%;
    ${e=>{const t=kf(e.$variant);return M`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Cf=M`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>kf(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${ml.Accent.Light[3]};
    }
`,Tf=I.button`
    ${Cf}
    cursor: pointer;
`,Df=I.div`
    ${Cf}
`,jf=E`
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
`,_f=I.div`
    position: relative;
    border: 1px solid ${ml.Neutral[5]};
    border-radius: ${"4px"};
    background: ${ml.Neutral[8]};

    :focus-within {
        border: 1px solid ${ml.Accent.Light[1]};
        box-shadow: ${ac.InputBoxShadow};
    }

    ${e=>e.expanded?M`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:M`
                animation: ${jf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?M`
                background: ${ml.Neutral[6](e)};

                ${Tf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ml.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?M`
                border: none;
                background: transparent !important;

                ${Tf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?M`
                border: 1px solid ${ml.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ml.Validation.Red.Border(e)};
                    box-shadow: ${ac.InputErrorBoxShadow};
                }
            `:void 0}
`;I.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Pl.Base};
    margin-left: 1rem;
`,I(fe)`
    color: ${ml.Neutral[3]};
    ${e=>{let t=Dl.Body.fontSize;return"small"===e.$variant&&(t=Dl.BodySmall.fontSize),M`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`;const If=I.div`
    height: 1px;
    background: ${ml.Neutral[5]};
    margin: 0 0.5rem;
`,Mf=I.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return M`
                color: ${ml.Neutral[3]};
            `}}
`,Ef=I.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return M`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Af=I(Ef)`
    color: ${ml.Neutral[3]};
`,Nf=({children:t,show:n,error:r,disabled:i,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=o();return jd("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e(Of,Object.assign({className:c,$variant:d},{children:e(_f,Object.assign({ref:u,error:r&&!n,disabled:i,$readOnly:l,expanded:n,"data-testid":a},{children:t}))}))};var Bf;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Bf||(Bf={}));const Lf=()=>{const[e,t]=a(void 0),n=me();return u((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Bf.Change,e),n.events.emit(Bf.Ready),()=>n.events.off(Bf.Change,e)}),[n]),e},Rf=I.div`
    display: flex;
    flex-direction: column;
`,Pf=e=>"right"===e?"bottom-end":"bottom-start",Ff=({enabled:r,isOpen:i,onOpen:a,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:f=0,alignment:p="left",fitAvailableHeight:g})=>{var m;const b=o(null),v=o(null),{width:y}=ln({targetRef:b,handleHeight:!1}),x={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<xl.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:w,floatingStyles:$,context:S}=be({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==l||l():e&&!i?null==a||a():!e&&i&&(null==s||s(n))},whileElementsMounted:ve,placement:Pf(p),middleware:[ye(f),xe(),we({limiter:$e()}),Se({apply({availableHeight:e}){v.current&&Object.assign(v.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}}),x]}),k=Lf(),{isMounted:O,styles:C}=ke(S,{initial:{opacity:0},open:{opacity:1},duration:300}),T=Oe(S,{enabled:r,toggle:h}),D=Ce(S,{enabled:r}),{getReferenceProps:j,getFloatingProps:_}=Te([T,D]);return t(n,{children:[e("div",Object.assign({ref:e=>{b.current=e,w.setReference(e)}},j(),{children:c()})),O&&e(De,{children:e(je,Object.assign({context:S,modal:!1,initialFocus:v,returnFocus:!1},{children:e("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},$),{zIndex:null!==(m=null!=u?u:k)&&void 0!==m?m:50})},_(),{children:e(Rf,Object.assign({ref:v,style:Object.assign({},C),inert:C.opacity<1?"":void 0},{children:d({elementWidth:y})}))}))}))})]})},zf=M`
    border: 1px solid ${ml.Accent.Light[1]};
    box-shadow: ${ac.InputBoxShadow};
`,Hf=M`
    border: 1px solid ${ml.Accent.Light[1]};
    box-shadow: none;
`,Wf=M`
    border: 1px solid ${ml.Neutral[5]};
    box-shadow: none;
`,Vf=M`
    border: 1px solid ${ml.Validation.Red.Border};
    box-shadow: ${ac.InputErrorBoxShadow};
`,Yf=I.div`
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    background: ${ml.Neutral[8]};

    :focus-within {
        ${zf}
    }
    ${e=>e.$focused&&zf}

    ${e=>e.$readOnly?M`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Hf}
                }
                ${e.$focused&&Hf}
            `:e.$disabled?M`
                background: ${ml.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Wf}
                }
                ${e.$focused&&Wf}
            `:e.$error?M`
                border: 1px solid ${ml.Validation.Red.Border};

                :focus-within {
                    ${Vf}
                }
                ${e.$focused&&Vf}
            `:void 0}
`,Uf=I(Yf)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Kf=I.input`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${ml.Neutral[1]};
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
        color: ${ml.Neutral[3]};
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
`,Xf=I.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${ml.Primary};
    }
`,qf=I.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Gf=I.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return M`
                ${Zf}, ${tp} {
                    color: ${ml.Neutral[4]};
                }
            `}}
`,Zf=I(Kf)`
    background: transparent;
    text-align: center;
`,Qf=I(Zf)`
    width: 2rem;
    margin-right: 0.25rem;
`,Jf=I(Zf)`
    width: 2.5rem;
`,ep=I(Zf)`
    width: 3rem;
    margin-left: 0.25rem;
`,tp=I(Nl.Body)`
    ${e=>{if(e.$inactive)return M`
                color: ${ml.Neutral[3](e)};
            `}}
`,np=I.div`
    ${Al.getTextStyle("Body","regular")}
    background-color: ${ml.Neutral[8]};
    color: ${ml.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?M`
                background-color: ${ml.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?M`
                display: none;
            `:void 0}
`;ad.extend(ld);const rp=i.forwardRef((({disabled:n,readOnly:r,names:i,value:s,focused:l,hoverValue:c,placeholder:d,label:h,onChange:f,onFocus:p,onBlur:g,hideInputKeyboard:m},v)=>{const y=m?"none":"numeric",[x,w,$]=Ad(""),[S,k,O]=Ad(""),[C,T,D]=Ad(""),[j,_]=a("none"),[I,M]=a(!1),E=o(null),A=o(null),N=o(null),B=o(null),[L,R,P]=Y(c);u((()=>{const[e="",t="",n=""]=Y(s);w(e),k(t),T(n),e||t||n||!E.current.contains(document.activeElement)||A.current.focus()}),[s]),u((()=>{l||_("none"),l&&(M(!0),E.current.contains(document.activeElement)||A.current.focus())}),[l]),b(v,(()=>({ref:E,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",n=""]=Y(s);w(e),k(t),T(n)}})),[s]);const F=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},z=e=>{e.target.select();const t=e.target.name;_(t)},H=e=>{const[t,n,r]=i,o={[t]:$.current,[n]:O.current,[r]:D.current},a=e.target.name,s=o[a],l=a!==r?Td.padValue(s,!0):s;switch(a){case t:o[t]=l,w(l);break;case n:o[n]=l,k(l)}const c=`${o[r]}-${o[n]}-${o[t]}`,d=ad(c,"YYYY-MM-DD",!0).isValid(),u=!o[t]&&!o[n]&&!o[r];d&&s!==l&&f(c),E.current.contains(e.relatedTarget)||(_("none"),null==g||g(u||d))},W=e=>{if(c)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:x,month:S,year:C};switch(t){case i[0]:r.day=n,w(n),2===n.length&&N.current.focus();break;case i[1]:r.month=n,k(n),2===n.length&&B.current.focus();break;case i[2]:r.year=n,T(n)}if(!r.day&&!r.month&&!r.year)return void f("");const o=`${r.year}-${r.month}-${r.day}`;ad(o,"YYYY-MM-DD",!0).isValid()&&f(o)},V=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(j===i[1]&&0===S.length&&A.current.focus(),j===i[2]&&0===C.length&&N.current.focus())};function Y(e){if(e){const t=ad(new Date(e));return t.isValid()?[Td.padValue(t.date().toString()),Td.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(qf,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(M(!0),E.current.contains(document.activeElement)||A.current.focus())},onFocus:e=>{n||(M(!0),l||null==p||p(e))}},{children:[t(Gf,Object.assign({ref:E,$hover:!!c},{children:[e(Qf,{ref:A,name:i[0],maxLength:2,value:null!=L?L:x,onFocus:z,onBlur:H,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:j!==i[0]||r?"DD":""}),e(tp,Object.assign({$inactive:0===x.length},{children:"/"})),e(Jf,{ref:N,name:i[1],maxLength:2,value:null!=R?R:S,onFocus:z,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:j!==i[1]||r?"MM":""}),e(tp,Object.assign({$inactive:0===S.length},{children:"/"})),e(ep,{ref:B,name:i[2],maxLength:4,value:null!=P?P:C,onFocus:z,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:j!==i[2]||r?"YYYY":""})]})),(()=>{if(!s&&!r&&d)return e(np,Object.assign({$hide:I,$disabled:n,onMouseDown:F},{children:d}))})()]}))})),ip=I(Uf)`
    height: 3rem;
`,op=t=>{var{minDate:n,maxDate:r,disabled:i,disabledDates:s,error:l,hideInputKeyboard:c,value:d,onChange:h,onFocus:f,onBlur:p,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x}=t,w=lt(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[$,S]=a(Od.sanitizeInput(d)),[k,O]=a(Od.sanitizeInput(d)),[C,T]=a(void 0),[D,j]=a(!1),[_,I]=a(!1),M=o(null),E=o();u((()=>{const e=Od.sanitizeInput(d);S(e),O(e)}),[d]);const A=e=>{!y&&Od.isDateDisabled(e,{disabledDates:s,minDate:n,maxDate:r})||(O(e),m||(F(e),S(e),e&&j(!1)))},N=e=>{O(e),m||(F(e),S(e),e&&(M.current.focus(),j(!1)),C&&T(void 0))},B=()=>{b||i||(j(!0),_||(I(!0),f&&f()))},L=e=>{!_||D||M.current.contains(e.relatedTarget)||(E.current.resetInput(),O($),I(!1),z())},R=e=>{T(e)},P=e=>{switch(e){case"reset":O($);break;case"confirmed":S(k),F(k)}M.current.focus(),j(!1)},F=e=>{h&&h(e)},z=()=>{p&&p()};return e(Ff,{enabled:!b&&!i,isOpen:D,renderElement:()=>e(ip,Object.assign({tabIndex:-1,ref:M,onBlur:L,onFocus:B,$disabled:i,$readOnly:b,$focused:_,$error:l,id:v,"data-testid":w["data-testid"]},w,{children:e(rp,{ref:E,disabled:i,onChange:A,readOnly:b,focused:D,names:["start-day","start-month","start-year"],value:k,hoverValue:C,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e(Uu,{type:"input",variant:"single",initialCalendarDate:k,withButton:m,value:k,disabledDates:s,minDate:n,maxDate:r,allowDisabledSelection:y,onHover:R,onSelect:N,onDismiss:P,onYearMonthDisplayChange:g,width:t}),onClose:()=>{E.current.resetInput(),O($),j(!1),I(!1),z()},onDismiss:()=>{E.current.resetInput(),M.current.focus(),O($),j(!1)},customZIndex:x,offset:16})},ap=I($l)`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    margin: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${ml.Neutral[5]};
    background-color: ${ml.Neutral[8]};
    :hover {
        background-color: ${ml.Neutral[7]};
    }
    :disabled {
        cursor: not-allowed;
        background-color: ${ml.Neutral[6]};
    }
`,sp=I.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${ml.Neutral[7]};
    border-radius: 0.25rem;
`,lp=I(cc.Default)`
    color: ${e=>e.$enableDateClick?ml.Primary:ml.Neutral[1]};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0.5rem 0;
    padding: 0;
    ${e=>e.$enableDateClick?M`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `:M`
            background-color: ${ml.Neutral[7]};
            :hover {
                cursor: default;
            }
        `}
`,cp=n=>{var{selectedDate:r,minDate:i,maxDate:o,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:c,onLeftArrowClick:d,onRightArrowClick:u,onCalendarDateSelect:h}=n,f=lt(n,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const p=kd.toDayjs(r),g=kd.toDayjs(r).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),m=kd.isSame(r,ad())&&c?"Today":p.format(l?"ddd":"dddd"),[b,v]=a(!1),y=e=>{h&&h(e),v(!b)},x=()=>{v(!1),d(r)},w=()=>{v(!1),u(r)};return e(Ff,{enabled:!s,isOpen:b,renderElement:()=>t(sp,Object.assign({},f,{children:[e(ap,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!i&&(vd.isDisabledDay(p,void 0,i)||kd.isSame(p,i)),focusHighlight:!1,focusOutline:"browser","aria-label":"Previous day",onClick:x},{children:e(Kd,{})})),e(lp,Object.assign({onClick:()=>!!h&&!s&&v(!b),$enableDateClick:!!h&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!h||s},{children:`${g}, ${m}`})),e(ap,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!o&&(vd.isDisabledDay(p,void 0,void 0,o)||kd.isSame(p,o)),focusHighlight:!1,focusOutline:"browser","aria-label":"Next day",onClick:w},{children:e(Xd,{})}))]})),renderDropdown:({elementWidth:t})=>e(Uu,{type:"input",variant:"single",initialCalendarDate:r,value:r,minDate:i,maxDate:o,onSelect:y,width:t}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8})},dp=I.div`
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
                    max-width: calc(100% - 1.125rem - 1rem);
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: 0.5rem;
                }
            `}}
`,up=I.div`
    width: 100%; // Force next flex item to break to next line
`,hp=I.div`
    display: flex;
    flex: 1;
    align-items: center;
`,fp=I(q)`
    color: ${ml.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,pp=I.div`
    position: absolute;
    background: ${e=>e.$error?ml.Validation.Red.Border(e):ml.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return M`
                    opacity: 1;
                `;case"end":return M`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return M`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return M`
                display: none;
            `}}
`,gp=({children:n,currentActive:r,error:i,className:o,wrap:a})=>{const[s,l]=n;return t(dp,Object.assign({className:o,$wrap:a},{children:[e(hp,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),e(fp,{}),a&&e(up,{}),e(hp,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),e(pp,{"data-id":"range-container-indicator",$position:r,$error:i,$wrap:a})]}))},mp=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},bp=I(Uf)`
    ${e=>e.$wrap&&M`
            padding: 0.75rem 1rem;
        `}
`,vp=I.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&M`
            height: fit-content;
        `}
`,yp={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},xp=n=>{var{minDate:r,maxDate:i,disabled:s,disabledDates:l,error:c,hideInputKeyboard:d,value:h,valueEnd:f,onChange:g,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:S,id:k,allowDisabledSelection:O,zIndex:C}=n,T=lt(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[D,j]=a(),[_,I]=a(void 0),[M,E]=a(!1),[A,N]=a(!1),B="week"===w,L="fixed-range"===w,[{selectedStart:R,selectedEnd:P,currentFocus:F,calendarOpen:z,isStartDirty:H,isEndDirty:W,focused:V},Y]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[i,o]=x(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&mp(n,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:yp,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:B?"none":L?"start":t,calendarOpen:!S,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=o(!1),K=o(),X=o(),q=o(),G=o(),Z=(({maxWidth:e,targetRef:t})=>{const[n,r]=a(!1);return ln({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{r(t<=e)}),[e])}),n})({maxWidth:320,targetRef:K});u((()=>{Y.resetRange({start:Od.sanitizeInput(h),end:Od.sanitizeInput(f)})}),[h,f]),u((()=>{"start"===F?j(R):"end"===F&&j(P)}),[F]);const Q=e=>{"Enter"!==e.code||y||(R&&P?(Y.done({start:R,end:P}),null==g||g(R,P)):(Y.dismiss(),K.current.focus(),q.current.resetPlaceholder(),G.current.resetPlaceholder()))},J=e=>{if(he(e))return void(U.current=!0);if(Y.changeStart(e),X.current.setCalendarDate(e),U.current=!1,!e)return void(y||P||!W||(Y.resetRange({start:"",end:""}),null==g||g("","")));if(!P)return void Y.focus("end");if(ad(e).isAfter(P,"day"))Y.reselectEnd();else{if(W)return y?void 0:(Y.done({start:e,end:P}),void(null==g||g(e,P)));Y.focus("end")}},ee=e=>{if(he(e))return void(U.current=!0);if(ad(e).isBefore(R,"day"))return Y.changeStart(e),X.current.setCalendarDate(e),void Y.reselectEnd();if(Y.changeEnd(e),X.current.setCalendarDate(e),e){if(R)return y?void 0:(Y.done({start:R,end:e}),void(null==g||g(R,e)));Y.focus("start")}else y||R||!H||(Y.resetRange({start:"",end:""}),null==g||g("",""))},te=e=>{if(he(e))return void(U.current=!0);if(Y.changeStart(e),X.current.setCalendarDate(e),U.current=!1,!e)return void(y?Y.changeEnd(""):(Y.resetRange({start:"",end:""}),null==g||g("","")));const t=ad(e).format("YYYY-MM-DD"),n=ad(t).add($-1,"day").format("YYYY-MM-DD");return Y.changeStart(t),Y.changeEnd(n),U.current=!1,y?void 0:(Y.done({start:t,end:n}),void(null==g||g(t,n)))},ne=()=>{S||s||V||(Y.focus("start"),null==m||m())},re=e=>{!V||z||K.current.contains(e.relatedTarget)||(Y.blur(),E(!1),N(!1),q.current.resetPlaceholder(),G.current.resetPlaceholder(),null==b||b())},ie=e=>t=>{t.stopPropagation(),S||(Y.focus(e),oe(),ae(),V||null==m||m())},oe=()=>{if(B){const e=kd.toDayjs(R).startOf("week").format("YYYY-MM-DD");E(!0),N(!0),j(e)}},ae=()=>{L&&(N(!0),j(R))},se=e=>{e&&!U.current||(Y.resetStart(),q.current.resetInput())},le=e=>{e&&!U.current||(Y.resetEnd(),G.current.resetInput())},ce=e=>{switch(w){case"week":(e=>{const t=ad(e).startOf("week").format("YYYY-MM-DD"),n=ad(e).endOf("week").format("YYYY-MM-DD");if(Y.changeStart(t),Y.changeEnd(n),U.current=!1,!y)Y.done({start:t,end:n}),null==g||g(t,n)})(e);break;case"fixed-range":te(e);break;default:"start"===F?J(e):"end"===F&&ee(e)}},de=e=>{switch(K.current.focus(),e){case"reset":Y.cancel();break;case"confirmed":Y.done({start:R,end:P}),null==g||g(R,P)}},ue=e=>{I(e)},he=e=>!O&&e&&Od.isDateDisabled(e,{disabledDates:l,minDate:r,maxDate:i}),fe=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===F?_:void 0,end:"end"===F?_:void 0};break;case"week":if(!_)return;t={start:ad(_).startOf("week").format("YYYY-MM-DD"),end:ad(_).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!_)return;t={start:ad(_).format("YYYY-MM-DD"),end:ad(_).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Ff,{enabled:!S&&!s,isOpen:z,onClose:()=>{Y.blur(),E(!1),N(!1),q.current.resetPlaceholder(),G.current.resetPlaceholder(),null==b||b()},onDismiss:()=>{Y.dismiss(),K.current.focus(),q.current.resetPlaceholder(),G.current.resetPlaceholder()},renderElement:()=>e(bp,Object.assign({ref:K,tabIndex:-1,onFocus:ne,onBlur:re,$focused:V,$disabled:s,$readOnly:S,$error:c,$wrap:Z,id:k,"data-testid":T["data-testid"],onKeyDown:Q},T,{children:t(gp,Object.assign({currentActive:F,wrap:Z,error:c},{children:[e(vp,Object.assign({$wrap:Z},{children:e(rp,{ref:q,placeholder:"From",names:["start-day","start-month","start-year"],value:R,disabled:s,readOnly:M||S,focused:"start"===F,hoverValue:fe("start"),onChange:L?te:J,onFocus:ie("start"),onBlur:se,hideInputKeyboard:d})})),e(vp,Object.assign({$wrap:Z},{children:e(rp,{ref:G,placeholder:"To",names:["end-day","end-month","end-year"],value:P,disabled:s,readOnly:A||S,focused:"end"===F,hoverValue:fe("end"),onChange:ee,onFocus:ie("end"),onBlur:le,hideInputKeyboard:d})}))]}))})),renderDropdown:({elementWidth:t})=>e(Uu,{ref:X,type:"input",variant:w,initialCalendarDate:D,withButton:y,value:R,endValue:P,selectWithinRange:H||W,currentFocus:F,disabledDates:l,minDate:r,maxDate:i,allowDisabledSelection:O,onSelect:ce,onDismiss:de,onHover:ue,onYearMonthDisplayChange:v,numberOfDays:$,width:t}),customZIndex:C,offset:16})},wp=I.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:o,$mobileSpan:a}=e;return M`
            grid-column: ${t||"auto"} / span ${n||1};

            ${yl.MaxWidth.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${yl.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${a||1};
            }
        `}}
`,$p=i.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:o}=t,a=lt(t,["mobileCols","tabletCols","desktopCols"]);return e(wp,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=Sp(o||i||r),a=Sp(e),s=Sp(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Sp=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let o;return o=i===r?1:i-r,{start:r,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},kp=()=>e=>{let t;t=e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ml.Neutral[5](e);const n=encodeURIComponent(t),r=e.$thickness||1;return M`
        background-color: transparent;
        height: ${r}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${r}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${r+1}" stroke-dasharray="4 4" /></svg>');
    `},Op=I.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return M`
                    ${kp}
                `;case"solid":return M`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||ml.Neutral[5]};
                `}}}
`,Cp=t=>{var{thickness:n=1,lineStyle:r="solid",layoutType:i="flex",color:o,className:a,mobileCols:s=4,tabletCols:l=8,desktopCols:c=12}=t,d=lt(t,["thickness","lineStyle","layoutType","color","className","mobileCols","tabletCols","desktopCols"]);switch(i){case"flex":return e(Op,Object.assign({className:a,$thickness:n,$lineStyle:r,$color:o},d));case"grid":return e($p,Object.assign({className:a,mobileCols:s,tabletCols:l,desktopCols:c},d,{children:e(Op,{$thickness:n,$lineStyle:r,$color:o})}))}},Tp=I.div`
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
`,Dp=I.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
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
`,jp=({show:t=!1,rootId:n,onOverlayClick:r,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:f,id:p})=>{const[g,m]=a(null),[b,v]=a(),[y]=a((()=>Cd.generate())),x=Ie(),w=o(),$=o(null),S=s&&i.cloneElement(s,{ref:$}),k=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",O=null!=f?f:b?99999:99998;(e=>{const t=me();u((()=>{if(!t)return;const n={zIndex:e};t.events.emit(Bf.Change,n)}),[t,e]),u((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(Bf.Change,n)};return null==t||t.events.on(Bf.Ready,n),()=>null==t?void 0:t.events.off(Bf.Ready,n)}),[t,e])})(O),u((()=>(_(),m(D()),()=>{A(),M().length<1&&I("remove")})),[]),u((()=>{if(t){const e=j();T(e),E();const t=setTimeout((()=>{I("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{M().length<1&&I("remove")}),200);return()=>clearTimeout(e)}}),[t]);const T=e=>{w.current=e,v(e)},D=()=>document&&n?document.getElementById(n):document?document.body:null,j=()=>M().length>0,_=()=>{if(!document.getElementById(Ip)){const e=document.createElement("style");e.id=Ip;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Mp} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Mp}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},I=e=>{const t=document.body.classList.contains(Mp);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Mp):document.body.classList.add(Mp)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},E=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},N=e=>{var t;const n=null===(t=$.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&h&&(e.preventDefault(),r())};return g?C.createPortal(e(Tp,Object.assign({id:k,"data-testid":k,$show:t,$zIndex:O},{children:s&&e(Me,Object.assign({id:x},{children:e(Dp,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:l||(b?.5:.8),$backgroundBlur:c,$disableTransition:d,onClick:N},{children:S}))}))})),g):null},_p=t=>e(_e,{children:e(jp,Object.assign({},t))}),Ip="lifesg-ds-overlay-stylesheet",Mp="lifesg-ds-overlay-open",Ep=I.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${ml.Neutral[8]};
    box-shadow: 0px 2px 12px rgba(104, 104, 104, 0.25);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?M`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:M`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}

    width: 40%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow: hidden;

    ${yl.MaxWidth.desktopL} {
        width: 50%;
        min-width: 700px;
    }

    ${yl.MaxWidth.tablet} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,Ap=I.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    padding: 2rem 1rem 1rem;
    background-color: ${ml.Neutral[8]};
    border-bottom: 1px solid ${ml.Neutral[5]};

    ${yl.MaxWidth.tablet} {
        gap: 0.5rem;
        padding: 2rem 1.25rem 1rem;
    }
`,Np=I($l)`
    color: ${ml.Neutral[3]};
    padding: 0;
    order: -1; // show button on the left of the header

    :active,
    :focus {
        color: ${ml.Primary};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Bp=I(Nl.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Lp=I.div`
    flex: 1;
    overflow-y: auto;
`,Rp=n=>{var{children:r,heading:i,show:s,onClose:l,onOverlayClick:c}=n,d=lt(n,["children","heading","show","onClose","onOverlayClick"]);const[h,f]=a(s),[p]=a((()=>Cd.generate())),g=o();u((()=>{if(!s){const e=setTimeout((()=>f(!1)),500);return()=>clearTimeout(e)}f(!0)}),[s]);return e(_p,Object.assign({show:h,enableOverlayClick:!0,onOverlayClick:c},{children:t(Ep,Object.assign({$show:s,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":p,onTransitionEnd:e=>{"visibility"===e.propertyName&&s&&g.current.focus()}},d,{children:[t(Ap,{children:[e(Bp,Object.assign({id:p,ref:g,tabIndex:-1},{children:i})),e(Np,Object.assign({"aria-label":"Close drawer",onClick:l,focusHighlight:!1},{children:e(Ae,{"aria-hidden":!0})}))]}),e(Lp,{children:r})]}))}))},Pp=({className:t,progress:n,color:r,"data-testid":i})=>e(Fp,Object.assign({className:t,$innerWidth:n,$color:r,"data-testid":i},{children:e("progress",{value:100*n,max:100})})),Fp=I.div`
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

    ${e=>{const{$color:t}=e;let n;return n=t&&"string"==typeof t?t:t?t(e):ml.Accent.Light[1](e),M`
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
`,zp=I.button`
    align-items: center;
    background-color: ${ml.Primary};
    border-radius: 0.25rem;
    color: ${ml.Neutral[8]};
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
                    background-color: ${ml.Neutral[8]};
                    border: 1px solid ${ml.Primary};
                    color: ${ml.Primary};
                `;case"light":return M`
                    background-color: ${ml.Neutral[8]};
                    border: 1px solid ${ml.Neutral[5]};
                    color: ${ml.Primary};
                `;default:return M`
                    background-color: ${ml.Primary};
                    border: none;
                    color: ${ml.Neutral[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${ml.Neutral[6]};
        border: 1px solid ${ml.Neutral[6]};
        color: ${ml.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`,Hp=i.forwardRef(((t,n)=>{var{"data-testid":r,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=lt(t,["data-testid","styleType","children","sizeType","type"]);return e(zp,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),Wp=I.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${yl.MaxWidth.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Vp=t=>{var{id:n="modal",show:r,animationFrom:i="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=t,f=lt(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[p,g]=a(),[m,b]=a();u((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{window.visualViewport.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),u((()=>{var e,t;r&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;g(e)},y=()=>{const e=.01*window.visualViewport.height;g(e),b(window.visualViewport.offsetTop)};return e(_p,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:s,onOverlayClick:d,id:n,rootId:l,zIndex:c},{children:e(Wp,Object.assign({show:r,animationFrom:i,"data-testid":n,verticalHeight:p,offsetTop:m},f,{children:o}))}))},Yp=I.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${ml.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${yl.MaxWidth.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Up=I($l)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${ml.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${ml.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${yl.MaxWidth.mobileL} {
        right: 1.25rem;
    }
`,Kp=n=>{var{id:r="modal-box",children:i,onClose:o,showCloseButton:a=!0}=n,s=lt(n,["id","children","onClose","showCloseButton"]);return t(Yp,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&e(Up,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1},{children:e(Ae,{})})),i]}))},Xp=Object.assign(Vp,{Box:Kp}),qp=` ${yl.MaxWidth.mobileL}, (orientation: landscape) and (max-height: ${xl.mobileL}px)`,Gp=`@media(orientation: landscape) and (max-height: ${xl.mobileL}px)`,Zp=I.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(ml.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${ml.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,Qp=I(cc.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,Jp=I(Hp)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,eg=I.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`,tg=I.div`
    background: ${ml.Accent.Light[6]};
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    margin: 0 2rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
`,ng=I(Nl.H6)`
    margin-top: 1rem;
`,rg=I(Xp)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,ig=I.div`
    width: 100%;
    margin: auto;
    padding: 5rem 1.25rem;

    ${qp} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,og=I(Xp.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${qp} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`,ag=I.h4`
    ${Al.getTextStyle("H4","semibold")}
    margin-bottom: 1rem;
    color: ${ml.Neutral[1]};
    text-align: center;

    ${qp} {
        ${Al.getTextStyle("H5","semibold")}
        margin: 0.75rem 0;
    }
`,sg=I.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${qp} {
        border-radius: 0;
        flex: 1;
    }

    ${Gp} {
        background: ${ml.Neutral[7]};
    }
`,lg=I.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${ml.Neutral[6]};
    margin: auto;

    ${qp} {
        aspect-ratio: 4/3;
    }
    ${yl.MaxWidth.mobileL} {
        width: 100%;
        height: auto;
    }
    ${Gp} {
        width: auto;
        height: 100%;
    }
`,cg=I.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${ml.Neutral[4]};
    pointer-events: none;

    ${qp} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`,dg=I.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${Gp} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,ug=I(cc.Default)`
    width: 8.5rem;
    ${yl.MaxWidth.mobileL} {
        width: 100%;
    }
    ${Gp} {
        height: 2.5rem;
    }
`,hg=I.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,fg=I.canvas`
    cursor: crosshair;
`,pg=v((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.32632295.js")).ESignatureCanvas}})))),gg=r=>{const{description:i,id:s,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:h}=r,f=lt(r,["description","id","loadingProgress","loadingLabel","onChange","value"]),[p,g]=a(!1),m=o(null),[b,v]=a(h),x=Vc.useMediaQuery({maxWidth:xl.mobileL}),w=()=>{m.current.clear()},$=()=>{const e=m.current.export();v(e),g(!1),null==d||d(e)};u((()=>{v(h)}),[h]);return t("div",Object.assign({},f,{children:[e(Zp,{children:isNaN(l)?b?t(n,{children:[e(eg,{src:b,alt:"Signature preview"}),e(Jp,Object.assign({styleType:"light",onClick:()=>g(!0),id:s,"aria-label":"Edit signature"},{children:e(G,{})}))]}):e(Qp,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:s,onClick:()=>g(!0)},{children:"Add signature"})):t(tg,{children:[c&&e(Nl.BodySmall,{children:c}),e(Pp,{progress:l,"data-testid":`${s||"e-signature"}-progress-bar`})]})}),e(rg,Object.assign({"data-testid":"signature-modal",show:p},{children:e(ig,{children:t(og,Object.assign({onClose:()=>g(!1)},{children:[e(ag,{children:"Signature"}),e(sg,{children:t(lg,{children:[e(cg,{}),e(y,Object.assign({fallback:null},{children:p&&e(pg,{ref:m,baseImageDataURL:b})}))]})}),t(dg,{children:[e(ug,Object.assign({as:Vd.Default,type:"button",styleType:x?"light":"link",icon:e(Z,{}),onClick:w},{children:"Clear"})),e(ug,Object.assign({type:"button",onClick:$},{children:"Save"}))]})]}))})})),i?e(ng,Object.assign({weight:"regular",as:"p"},{children:i})):null]}))},mg="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",bg="Submit",vg="Rate your experience",yg=5,xg=I.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,wg=M`
    width: 2.75rem;
    height: 2.75rem;
    color: ${ml.Primary};
    ${xg}:focus-visible + & {
        outline: 0.125rem solid ${ml.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,$g=I(Ne)`
    ${wg}
`,Sg=I(Be)`
    ${wg}
`,kg=I.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,Og=I.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,Cg=n=>{const{description:r,rating:i,onRatingChange:o}=n,a=t=>{const n=`${t} star${1===t?"":"s"}`;return e(t<=i?Sg:$g,{"aria-label":n})};return e(Og,Object.assign({role:"radiogroup","aria-label":r},{children:[...Array(yg)].map(((n,r)=>{const s=r+1;return t(kg,{children:[e(xg,{type:"radio",name:"star",checked:s===i,onChange:()=>(e=>{o(e)})(s)}),a(s)]},s)}))}))},Tg=I.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Dg=I.div`
    border-top: 1px solid ${ml.Neutral[5]};
    border-bottom: 1px solid ${ml.Neutral[5]};
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
`,jg=I.div`
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
`,_g=I(cc.Default)`
    margin-top: 1rem;
    width: 100%;
`,Ig=n=>{const{imgSrc:r,buttonLabel:i,description:o,rating:a,onRatingChange:s,onSubmit:l}=n,c=lt(n,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=r?r:mg,u=null!=o?o:vg;return t(Dg,Object.assign({},c,{children:[d&&e(Tg,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),t(jg,{children:[e(Nl.H3,Object.assign({weight:"semibold"},{children:u})),e(Cg,{description:u,rating:a,onRatingChange:s}),e(_g,Object.assign({disabled:!a,onClick:l,type:"button"},{children:null!=i?i:bg}))]})]}))},Mg=I.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border){const t=encodeURIComponent(ml.Neutral[5](e));return M`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${yl.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `}}}
`,Eg=I.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,Ag=I(Nl.H4)`
    margin-bottom: 0.5rem;
`,Ng=I.div`
    color: ${ml.Neutral[1]};
    ${gc({textSize:"Body"})}
`,Bg=I(Nl.BodySmall)`
    margin-bottom: 0;
    color: ${ml.Neutral[3]};
`,Lg=I.div`
    color: ${ml.Neutral[3]};
    ${gc({textSize:"BodySmall"})}
`,Rg=I.ul`
    list-style-type: none;
`;var Pg;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Pg||(Pg={}));const Fg=({src:t,alt:n,className:r,"data-testid":i})=>e("img",{src:t,alt:n||"",className:r,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),zg=I.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: 1rem;
    }
`,Hg=I.div`
    background: ${ml.Accent.Light[6]};
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    ${yl.MaxWidth.mobileL} {
        padding: 1rem;
    }
    :hover {
        background: ${ml.Accent.Light[5]};
    }
`,Wg=I.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return M`
                ${yl.MaxWidth.mobileL} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,Vg=I.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,Yg=I.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,Ug=I.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;
    ${yl.MaxWidth.mobileL} {
        width: 100%;
        margin-left: 0;
        margin-top: 0.5rem;
        justify-content: flex-start;
    }
`,Kg=I(Nl.BodySmall)`
    ${yl.MaxWidth.mobileL} {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: normal;
    }
`;I(Kg)`
    margin-top: 0.25rem;
`;const Xg=I(Nl.XSmall)`
    font-size: 0.875rem !important;
    color: ${ml.Validation.Red.Text};
`,qg=I(Xg)`
    margin-top: 0.25rem;
    ${yl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,Gg=I(Xg)`
    display: none;
    visibility: hidden;
    ${yl.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,Zg=I(nc)`
    ${e=>{let t=ml.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ml.Neutral[3](e);break;default:t=ml.Neutral[8](e)}return M`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Qg=I.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        width: fit-content;
        margin-left: 1rem;
    }
`,Jg=I(Hp)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,em=I.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    ${yl.MaxWidth.mobileL} {
        margin-right: 1rem;
    }
`,tm=I(Fg)`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid ${ml.Neutral[5]};
    object-fit: cover;

    ${yl.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`,nm=w((({fileItem:r,onDownload:i})=>{const{id:s,name:l,size:c,errorMessage:d,thumbnailImageDataUrl:h,truncateText:f=!0,ready:p=!0}=r,[g,m]=a(!1),[b,v]=a(!1),y=Pg.formatFileSizeDisplay(c),x=Vc.useMediaQuery({maxWidth:xl.mobileL}),[w,$]=a(),S=o();u((()=>{S.current&&$(x?k(l):l)}),[l,x]);const k=e=>{if(!f)return e;const t=S&&S.current?S.current.getBoundingClientRect().width:0;return Td.truncateTwoLines(e,t,16,1.5)},O=()=>t(n,{children:[e(Kg,Object.assign({weight:"regular",ref:S},{children:w})),b&&e(qg,Object.assign({weight:"semibold"},{children:d||"Something went wrong"}))]});return e(zg,Object.assign({"data-testid":s},{children:t(Hg,Object.assign({onClick:()=>ct(void 0,void 0,void 0,(function*(){if(p&&!g){m(!0);try{v(!1),yield i(r)}catch(e){v(!0)}finally{m(!1)}}}))},{children:[(()=>{let r;return r=t(n,h?{children:[e(em,Object.assign({"data-testid":`${s}-thumbnail`},{children:e(tm,{"data-testid":`${s}-thumbnail-image`,src:h})})),t(Yg,{children:[e(Vg,{children:O()}),e(Ug,{children:e(Kg,{children:y||"-"})}),b&&e(Gg,Object.assign({weight:"semibold"},{children:d||"Something went wrong"}))]})]}:{children:[e(Vg,{children:O()}),e(Ug,{children:e(Kg,{children:y||"-"})}),b&&e(Gg,Object.assign({weight:"semibold"},{children:d||"Something went wrong"}))]}),e(Wg,Object.assign({$hasThumbnail:!!h},{children:r}))})(),e(Qg,{children:e(Jg,Object.assign({"data-testid":`${s}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${l}`},{children:g||!p?e(Zg,{$buttonStyle:"light",$buttonSizeStyle:"small",size:16,"aria-hidden":!0}):e(Q,{"aria-hidden":!0})}))})]}))}))})),rm=({id:n,fileItems:r,title:i,description:o,onDownload:a,"data-testid":s,className:l,styleType:c="bordered"})=>{const d=e=>ct(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return t(Mg,Object.assign({id:n?`${n}-file-download`:"file-download",className:l,"data-testid":s,$border:"bordered"===c},{children:[(i||o)&&t(Eg,{children:[i?"string"==typeof i?e(Ag,Object.assign({weight:"regular"},{children:i})):e(Ng,{children:i}):null,o?"string"==typeof o?e(Bg,Object.assign({weight:"regular"},{children:o})):e(Lg,{children:o}):null]}),e(Rg,{children:r&&r.length>0&&r.map((t=>e(nm,{fileItem:t,onDownload:d},t.id)))})]}))},im=$({activeId:void 0,setActiveId:void 0});var om,am={exports:{}},sm={exports:{}},lm={};var cm,dm,um,hm,fm,pm,gm,mm,bm,vm,ym,xm,wm,$m,Sm={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function km(){return dm||(dm=1,"production"===process.env.NODE_ENV?sm.exports=function(){if(om)return lm;om=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:switch(e=e.type){case l:case c:case r:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case f:case a:return e;default:return h}}case n:return h}}}function x(e){return y(e)===c}return lm.AsyncMode=l,lm.ConcurrentMode=c,lm.ContextConsumer=s,lm.ContextProvider=a,lm.Element=t,lm.ForwardRef=d,lm.Fragment=r,lm.Lazy=p,lm.Memo=f,lm.Portal=n,lm.Profiler=o,lm.StrictMode=i,lm.Suspense=u,lm.isAsyncMode=function(e){return x(e)||y(e)===l},lm.isConcurrentMode=x,lm.isContextConsumer=function(e){return y(e)===s},lm.isContextProvider=function(e){return y(e)===a},lm.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},lm.isForwardRef=function(e){return y(e)===d},lm.isFragment=function(e){return y(e)===r},lm.isLazy=function(e){return y(e)===p},lm.isMemo=function(e){return y(e)===f},lm.isPortal=function(e){return y(e)===n},lm.isProfiler=function(e){return y(e)===o},lm.isStrictMode=function(e){return y(e)===i},lm.isSuspense=function(e){return y(e)===u},lm.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},lm.typeOf=y,lm}():sm.exports=(cm||(cm=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:var g=e.type;switch(g){case l:case c:case r:case o:case i:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case p:case f:case a:return m;default:return h}}case n:return h}}}var x=l,w=c,$=s,S=a,k=t,O=d,C=r,T=p,D=f,j=n,_=o,I=i,M=u,E=!1;function A(e){return y(e)===c}Sm.AsyncMode=x,Sm.ConcurrentMode=w,Sm.ContextConsumer=$,Sm.ContextProvider=S,Sm.Element=k,Sm.ForwardRef=O,Sm.Fragment=C,Sm.Lazy=T,Sm.Memo=D,Sm.Portal=j,Sm.Profiler=_,Sm.StrictMode=I,Sm.Suspense=M,Sm.isAsyncMode=function(e){return E||(E=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},Sm.isConcurrentMode=A,Sm.isContextConsumer=function(e){return y(e)===s},Sm.isContextProvider=function(e){return y(e)===a},Sm.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Sm.isForwardRef=function(e){return y(e)===d},Sm.isFragment=function(e){return y(e)===r},Sm.isLazy=function(e){return y(e)===p},Sm.isMemo=function(e){return y(e)===f},Sm.isPortal=function(e){return y(e)===n},Sm.isProfiler=function(e){return y(e)===o},Sm.isStrictMode=function(e){return y(e)===i},Sm.isSuspense=function(e){return y(e)===u},Sm.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===o||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Sm.typeOf=y}()),Sm)),sm.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function Om(){if(hm)return um;hm=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return um=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(r,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)n.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},um}function Cm(){if(pm)return fm;pm=1;return fm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Tm(){return mm?gm:(mm=1,gm=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var Dm=km();am.exports=function(){if(xm)return ym;xm=1;var e=km(),t=Om(),n=Cm(),r=Tm(),i=function(){if(vm)return bm;vm=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=Cm(),n={},r=Tm();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(r(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in n)){n[d.message]=!0;var h=l?l():"";e("Failed "+a+" type: "+d.message+(null!=h?h:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},bm=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),ym=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(a),arrayOf:function(e){return g((function(t,r,i,o,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+o+" `"+a+"` of type `"+y(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",n);if(c instanceof Error)return c}return null}))},element:g((function(e,t,n,r,i){var o=e[t];return s(o)?null:new p("Invalid "+r+" `"+i+"` of type `"+y(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(t,n,r,i,o){var a=t[n];return e.isValidElementType(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,i,o,a,s){if("function"!=typeof e)return new p("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=y(l);if("object"!==c)return new p("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(r(l,d)){var u=e(l,d,o,a,s+"."+d,n);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(i)+" at index "+t+"."),a}return g((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,n);if(null==d)return null;d.data&&r(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,i,o,a){var s=t[r],l=y(s);if("object"!==l)return new p("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(i,o,a,c,x(d));var u=d(s,c,i,o,a+"."+c,n);if(u)return u}return null}))},exact:function(e){return g((function(i,o,a,s,l){var c=i[o],d=y(c);if("object"!==d)return new p("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var h in u){var f=e[h];if(r(e,h)&&"function"!=typeof f)return b(a,s,l,h,x(f));if(!f)return new p("Invalid "+s+" `"+l+"` key `"+h+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=f(c,h,a,s,l+"."+h,n);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,a,s,c,d,h,f){if(c=c||u,h=h||s,f!==n){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&r<3&&(o("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,r++)}}return null==a[s]?i?null===a[s]?new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,d,h)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function m(e){return g((function(t,n,r,i,o,a){var s=t[n];return y(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e[d]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!v(n.value))return!1}else for(;!(n=r.next()).done;){var i=n.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=i,h.resetWarningCache=i.resetWarningCache,h.PropTypes=h,h},ym}()(Dm.isElement,!0)}else am.exports=function(){if($m)return wm;$m=1;var e=Cm();function t(){}function n(){}return n.resetWarningCache=t,wm=function(){function r(t,n,r,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return r}r.isRequired=r;var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o}}()();var jm=Vo(am.exports),_m=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Im(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=_m.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var Mm=[".DS_Store","Thumbs.db"];function Em(e){return"object"==typeof e&&null!==e}function Am(e){return Rm(e.target.files).map((function(e){return Im(e)}))}function Nm(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return Im(e)}))]}}))}))}function Bm(e,t){return ct(this,void 0,void 0,(function(){var n;return dt(this,(function(r){switch(r.label){case 0:return e.items?(n=Rm(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(Pm))]):[3,2];case 1:return[2,Lm(Fm(r.sent()))];case 2:return[2,Lm(Rm(e.files).map((function(e){return Im(e)})))]}}))}))}function Lm(e){return e.filter((function(e){return-1===Mm.indexOf(e.name)}))}function Rm(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function Pm(e){if("function"!=typeof e.webkitGetAsEntry)return zm(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Wm(t):zm(e)}function Fm(e){return e.reduce((function(e,t){return ht(ht([],ut(e),!1),ut(Array.isArray(t)?Fm(t):[t]),!1)}),[])}function zm(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=Im(t);return Promise.resolve(n)}function Hm(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){return[2,e.isDirectory?Wm(e):Vm(e)]}))}))}function Wm(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function i(){var o=this;t.readEntries((function(t){return ct(o,void 0,void 0,(function(){var o,a,s;return dt(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),n(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(Hm)),r.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function Vm(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=Im(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var Ym=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0};function Um(e){return function(e){if(Array.isArray(e))return Qm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Zm(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Km(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xm(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Km(Object(n),!0).forEach((function(t){qm(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Km(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function qm(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||Zm(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Zm(e,t){if(e){if("string"==typeof e)return Qm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qm(e,t):void 0}}function Qm(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Jm=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},eb=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},tb=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},nb={code:"too-many-files",message:"Too many files"};function rb(e,t){var n="application/x-moz-file"===e.type||Ym(e,t);return[n,n?null:Jm(t)]}function ib(e,t,n){if(ob(e.size))if(ob(t)&&ob(n)){if(e.size>n)return[!1,eb(n)];if(e.size<t)return[!1,tb(t)]}else{if(ob(t)&&e.size<t)return[!1,tb(t)];if(ob(n)&&e.size>n)return[!1,eb(n)]}return[!0,null]}function ob(e){return null!=e}function ab(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function sb(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function lb(e){e.preventDefault()}function cb(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return!ab(e)&&t&&t.apply(void 0,[e].concat(r)),ab(e)}))}}function db(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function ub(e){return/^.*\.[\w]+$/.test(e)}var hb=["children"],fb=["open"],pb=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],gb=["refKey","onChange","onClick"];function mb(e){return function(e){if(Array.isArray(e))return yb(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||vb(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function bb(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||vb(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function vb(e,t){if(e){if("string"==typeof e)return yb(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?yb(e,t):void 0}}function yb(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function wb(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xb(Object(n),!0).forEach((function(t){$b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xb(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sb(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var kb=f((function(e,t){var n=e.children,r=Tb(Sb(e,hb)),o=r.open,a=Sb(r,fb);return b(t,(function(){return{open:o}}),[o]),i.createElement(S,null,n(wb(wb({},a),{},{open:o})))}));kb.displayName="Dropzone";var Ob={disabled:!1,getFilesFromEvent:function(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){return Em(e)&&Em(e.dataTransfer)?[2,Bm(e.dataTransfer,e.type)]:function(e){return Em(e)&&Em(e.target)}(e)?[2,Am(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,Nm(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};kb.defaultProps=Ob,kb.propTypes={children:jm.func,accept:jm.objectOf(jm.arrayOf(jm.string)),multiple:jm.bool,preventDropOnDocument:jm.bool,noClick:jm.bool,noKeyboard:jm.bool,noDrag:jm.bool,noDragEventsBubbling:jm.bool,minSize:jm.number,maxSize:jm.number,maxFiles:jm.number,disabled:jm.bool,getFilesFromEvent:jm.func,onFileDialogCancel:jm.func,onFileDialogOpen:jm.func,useFsAccessApi:jm.bool,autoFocus:jm.bool,onDragEnter:jm.func,onDragLeave:jm.func,onDragOver:jm.func,onDrop:jm.func,onDropAccepted:jm.func,onDropRejected:jm.func,onError:jm.func,validator:jm.func};var Cb={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Tb(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=wb(wb({},Ob),e),n=t.accept,r=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,s=t.minSize,l=t.multiple,c=t.maxFiles,d=t.onDragEnter,h=t.onDragLeave,f=t.onDragOver,g=t.onDrop,b=t.onDropAccepted,v=t.onDropRejected,y=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,S=t.autoFocus,k=t.preventDropOnDocument,O=t.noClick,C=t.noKeyboard,T=t.noDrag,D=t.noDragEventsBubbling,j=t.onError,_=t.validator,I=m((function(){return function(e){if(ob(e))return Object.entries(e).reduce((function(e,t){var n=Gm(t,2),r=n[0],i=n[1];return[].concat(Um(e),[r],Um(i))}),[]).filter((function(e){return db(e)||ub(e)})).join(",")}(n)}),[n]),M=m((function(){return function(e){return ob(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Gm(e,2),n=t[0],r=t[1],i=!0;return db(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(r)&&r.every(ub)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var n=Gm(t,2),r=n[0],i=n[1];return Xm(Xm({},e),{},qm({},r,i))}),{})}]:e}(n)}),[n]),E=m((function(){return"function"==typeof w?w:jb}),[w]),A=m((function(){return"function"==typeof y?y:jb}),[y]),N=o(null),B=o(null),L=bb(x(Db,Cb),2),R=L[0],P=L[1],F=R.isFocused,z=R.isFileDialogActive,H=o("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&z&&setTimeout((function(){B.current&&(B.current.files.length||(P({type:"closeDialog"}),A()))}),300)};u((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[B,z,A,H]);var V=o([]),Y=function(e){N.current&&N.current.contains(e.target)||(e.preventDefault(),V.current=[])};u((function(){return k&&(document.addEventListener("dragover",lb,!1),document.addEventListener("drop",Y,!1)),function(){k&&(document.removeEventListener("dragover",lb),document.removeEventListener("drop",Y))}}),[N,k]),u((function(){return!r&&S&&N.current&&N.current.focus(),function(){}}),[N,S,r]);var U=p((function(e){j?j(e):console.error(e)}),[j]),K=p((function(e){e.preventDefault(),e.persist(),ae(e),V.current=[].concat(mb(V.current),[e.target]),sb(e)&&Promise.resolve(i(e)).then((function(t){if(!ab(e)||D){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=Gm(rb(e,n),1)[0],o=Gm(ib(e,r,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:I,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:_});P({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return U(e)}))}),[i,d,U,D,I,s,a,l,c,_]),X=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=sb(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&f&&f(e),!1}),[f,D]),q=p((function(e){e.preventDefault(),e.persist(),ae(e);var t=V.current.filter((function(e){return N.current&&N.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),V.current=t,t.length>0||(P({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),sb(e)&&h&&h(e))}),[N,h,D]),G=p((function(e,t){var n=[],r=[];e.forEach((function(e){var t=bb(rb(e,I),2),i=t[0],o=t[1],l=bb(ib(e,s,a),2),c=l[0],d=l[1],u=_?_(e):null;if(i&&c&&!u)n.push(e);else{var h=[o,d];u&&(h=h.concat(u)),r.push({file:e,errors:h.filter((function(e){return e}))})}})),(!l&&n.length>1||l&&c>=1&&n.length>c)&&(n.forEach((function(e){r.push({file:e,errors:[nb]})})),n.splice(0)),P({acceptedFiles:n,fileRejections:r,type:"setFiles"}),g&&g(n,r,t),r.length>0&&v&&v(r,t),n.length>0&&b&&b(n,t)}),[P,l,I,s,a,c,g,b,v,_]),Z=p((function(e){e.preventDefault(),e.persist(),ae(e),V.current=[],sb(e)&&Promise.resolve(i(e)).then((function(t){ab(e)&&!D||G(t,e)})).catch((function(e){return U(e)})),P({type:"reset"})}),[i,G,U,D]),Q=p((function(){if(H.current){P({type:"openDialog"}),E();var e={multiple:l,types:M};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){G(e,null),P({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),P({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,B.current?(B.current.value=null,B.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else B.current&&(P({type:"openDialog"}),E(),B.current.value=null,B.current.click())}),[P,E,A,$,G,U,M,l]),J=p((function(e){N.current&&N.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),Q()))}),[N,Q]),ee=p((function(){P({type:"focus"})}),[]),te=p((function(){P({type:"blur"})}),[]),ne=p((function(){O||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?Q():setTimeout(Q,0))}),[O,Q]),re=function(e){return r?null:e},ie=function(e){return C?null:re(e)},oe=function(e){return T?null:re(e)},ae=function(e){D&&e.stopPropagation()},se=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,i=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,h=e.onDrop,f=Sb(e,pb);return wb(wb($b({onKeyDown:ie(cb(o,J)),onFocus:ie(cb(a,ee)),onBlur:ie(cb(s,te)),onClick:re(cb(l,ne)),onDragEnter:oe(cb(c,K)),onDragOver:oe(cb(d,X)),onDragLeave:oe(cb(u,q)),onDrop:oe(cb(h,Z)),role:"string"==typeof i&&""!==i?i:"presentation"},n,N),r||C?{}:{tabIndex:0}),f)}}),[N,J,ee,te,ne,K,X,q,Z,C,T,r]),le=p((function(e){e.stopPropagation()}),[]),ce=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,i=e.onClick,o=Sb(e,gb);return wb(wb({},$b({accept:I,multiple:l,type:"file",style:{display:"none"},onChange:re(cb(r,Z)),onClick:re(cb(i,le)),tabIndex:-1},n,B)),o)}}),[B,n,l,Z,r]);return wb(wb({},R),{},{isFocused:F&&!r,getRootProps:se,getInputProps:ce,rootRef:N,inputRef:B,open:re(Q)})}function Db(e,t){switch(t.type){case"focus":return wb(wb({},e),{},{isFocused:!0});case"blur":return wb(wb({},e),{},{isFocused:!1});case"openDialog":return wb(wb({},Cb),{},{isFileDialogActive:!0});case"closeDialog":return wb(wb({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return wb(wb({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return wb(wb({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return wb({},Cb);default:return e}}function jb(){}const _b=I.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border){const t=encodeURIComponent(ml.Neutral[5](e));return M`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${yl.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `}}}
`,Ib=I.input`
    display: none;
`,Mb=I.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${ml.Accent.Light[5]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${e=>{const t=encodeURIComponent(ml.Primary(e));return M`
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
            border-radius: 4px;
        `}}
`,Eb=I(Nl.BodySmall)`
    color: ${ml.Primary};
    text-align: center;
`,Ab=I(Le)`
    color: ${ml.Primary};
    height: 4rem;
    width: 4rem;
`,Nb=f((({children:n,accept:r,capture:i,multiple:a,id:s,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":f},p)=>{const g=o(),{getRootProps:m,isDragActive:v}=Tb({onDrop:h,noClick:!0,disabled:u});b(p,(()=>Object.assign(Object.assign({},g.current),{openFileDialog:()=>{var e;g.current.value=null,null===(e=g.current)||void 0===e||e.click()}})));return t(_b,Object.assign({id:s,"data-testid":f||"dropzone",$border:d,className:l},m(),{children:[e(Ib,{type:"file",name:c,ref:g,tabIndex:-1,"aria-hidden":!0,accept:r,capture:i,multiple:a,"data-testid":f?`${f}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),n,v&&t(Mb,{children:[e(Ab,{}),e(Eb,Object.assign({weight:"semibold"},{children:"Drop files here"}))]})]}))}));const Bb="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Lb(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Rb(e){return"nodeType"in e}function Pb(e){var t,n;return e?Lb(e)?e:Rb(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function Fb(e){const{Document:t}=Pb(e);return e instanceof t}function zb(e){return!Lb(e)&&e instanceof Pb(e).HTMLElement}function Hb(e){return e instanceof Pb(e).SVGElement}function Wb(e){return e?Lb(e)?e.document:Rb(e)?Fb(e)?e:zb(e)||Hb(e)?e.ownerDocument:document:document:document}const Vb=Bb?h:u;function Yb(e){const t=o(e);return Vb((()=>{t.current=e})),p((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}function Ub(e,t){void 0===t&&(t=[e]);const n=o(e);return Vb((()=>{n.current!==e&&(n.current=e)}),t),n}function Kb(e,t){const n=o();return m((()=>{const t=e(n.current);return n.current=t,t}),[...t])}function Xb(e){const t=Yb(e),n=o(null),r=p((e=>{e!==n.current&&(null==t||t(e,n.current)),n.current=e}),[]);return[n,r]}function qb(e){const t=o();return u((()=>{t.current=e}),[e]),t.current}let Gb={};function Zb(e,t){return m((()=>{if(t)return t;const n=null==Gb[e]?0:Gb[e]+1;return Gb[e]=n,e+"-"+n}),[e,t])}function Qb(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>{const r=Object.entries(n);for(const[n,i]of r){const r=t[n];null!=r&&(t[n]=r+e*i)}return t}),{...t})}}const Jb=Qb(1),ev=Qb(-1);function tv(e){if(!e)return!1;const{KeyboardEvent:t}=Pb(e.target);return t&&e instanceof t}function nv(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Pb(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const rv=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[rv.Translate.toString(e),rv.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),iv="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function ov(e){return e.matches(iv)?e:e.querySelector(iv)}const av={display:"none"};function sv(e){let{id:t,value:n}=e;return i.createElement("div",{id:t,style:av},n)}function lv(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return i.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}const cv=$(null);const dv={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},uv={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function hv(e){let{announcements:t=uv,container:n,hiddenTextDescribedById:r,screenReaderInstructions:o=dv}=e;const{announce:s,announcement:l}=function(){const[e,t]=a("");return{announce:p((e=>{null!=e&&t(e)}),[]),announcement:e}}(),c=Zb("DndLiveRegion"),[d,h]=a(!1);if(u((()=>{h(!0)}),[]),function(e){const t=g(cv);u((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(m((()=>({onDragStart(e){let{active:n}=e;s(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&s(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;s(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;s(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;s(t.onDragCancel({active:n,over:r}))}})),[s,t])),!d)return null;const f=i.createElement(i.Fragment,null,i.createElement(sv,{id:r,value:o.draggable}),i.createElement(lv,{id:c,announcement:l}));return n?j(f,n):f}var fv;function pv(){}function gv(e,t){return m((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(fv||(fv={}));const mv=Object.freeze({x:0,y:0});function bv(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function vv(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function yv(e){let{left:t,top:n,height:r,width:i}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t,y:n+r},{x:t+i,y:n+r}]}function xv(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}function wv(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-r,s=o-n;if(r<i&&n<o){const n=t.width*t.height,r=e.width*e.height,i=a*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const $v=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const e of r){const{id:r}=e,o=n.get(r);if(o){const n=wv(o,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(vv)};function Sv(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:mv}function kv(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x})),{...t})}}const Ov=kv(1);const Cv={ignoreTransform:!1};function Tv(e,t){void 0===t&&(t=Cv);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=Pb(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;const{scaleX:i,scaleY:o,x:a,y:s}=r,l=e.left-a-(1-i)*parseFloat(n),c=e.top-s-(1-o)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(n,t,r))}const{top:r,left:i,width:o,height:a,bottom:s,right:l}=n;return{top:r,left:i,width:o,height:a,bottom:s,right:l}}function Dv(e){return Tv(e,{ignoreTransform:!0})}function jv(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(Fb(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!zb(i)||Hb(i))return n;if(n.includes(i))return n;const o=Pb(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Pb(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const r=t[e];return"string"==typeof r&&n.test(r)}))}(i,o)&&n.push(i),function(e,t){return void 0===t&&(t=Pb(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?n:r(i.parentNode)}(e):n}function _v(e){const[t]=jv(e,1);return null!=t?t:null}function Iv(e){return Bb&&e?Lb(e)?e:Rb(e)?Fb(e)||e===Wb(e).scrollingElement?window:zb(e)?e:null:null:null}function Mv(e){return Lb(e)?e.scrollX:e.scrollLeft}function Ev(e){return Lb(e)?e.scrollY:e.scrollTop}function Av(e){return{x:Mv(e),y:Ev(e)}}var Nv;function Bv(e){return!(!Bb||!e)&&e===document.scrollingElement}function Lv(e){const t={x:0,y:0},n=Bv(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Nv||(Nv={}));const Rv={x:.2,y:.2};function Pv(e,t,n,r,i){let{top:o,left:a,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=Rv);const{isTop:c,isBottom:d,isLeft:u,isRight:h}=Lv(e),f={x:0,y:0},p={x:0,y:0},g=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+g?(f.y=Nv.Backward,p.y=r*Math.abs((t.top+g-o)/g)):!d&&l>=t.bottom-g&&(f.y=Nv.Forward,p.y=r*Math.abs((t.bottom-g-l)/g)),!h&&s>=t.right-m?(f.x=Nv.Forward,p.x=r*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(f.x=Nv.Backward,p.x=r*Math.abs((t.left+m-a)/m)),{direction:f,speed:p}}function Fv(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function zv(e){return e.reduce(((e,t)=>Jb(e,Av(t))),mv)}const Hv=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Mv(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Ev(t)),0)}]];class Wv{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=jv(t),r=zv(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of Hv)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(n),a=r[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Vv{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function Yv(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var Uv,Kv;function Xv(e){e.preventDefault()}function qv(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(Uv||(Uv={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(Kv||(Kv={}));const Gv={start:[Kv.Space,Kv.Enter],cancel:[Kv.Esc],end:[Kv.Space,Kv.Enter]},Zv=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case Kv.Right:return{...n,x:n.x+25};case Kv.Left:return{...n,x:n.x-25};case Kv.Down:return{...n,y:n.y+25};case Kv.Up:return{...n,y:n.y-25}}};let Qv=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Vv(Wb(t)),this.windowListeners=new Vv(Pb(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Uv.Resize,this.handleCancel),this.windowListeners.add(Uv.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(Uv.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=Tv),!e)return;const{top:n,left:r,bottom:i,right:o}=t(e);_v(e)&&(i<=0||o<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(mv)}handleKeyDown(e){if(tv(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=Gv,coordinateGetter:o=Zv,scrollBehavior:a="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:mv;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:n.current,currentCoordinates:c});if(d){const t=ev(d,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:h}=Lv(n),f=Fv(n),p={x:Math.min(i===Kv.Right?f.right-f.width/2:f.right,Math.max(i===Kv.Right?f.left:f.left+f.width/2,d.x)),y:Math.min(i===Kv.Down?f.bottom-f.height/2:f.bottom,Math.max(i===Kv.Down?f.top:f.top+f.height/2,d.y))},g=i===Kv.Right&&!s||i===Kv.Left&&!l,m=i===Kv.Down&&!c||i===Kv.Up&&!o;if(g&&p.x!==d.x){const e=n.scrollLeft+t.x,o=i===Kv.Right&&e<=u.x||i===Kv.Left&&e>=h.x;if(o&&!t.y)return void n.scrollTo({left:e,behavior:a});r.x=o?n.scrollLeft-e:i===Kv.Right?n.scrollLeft-u.x:n.scrollLeft-h.x,r.x&&n.scrollBy({left:-r.x,behavior:a});break}if(m&&p.y!==d.y){const e=n.scrollTop+t.y,o=i===Kv.Down&&e<=u.y||i===Kv.Up&&e>=h.y;if(o&&!t.x)return void n.scrollTo({top:e,behavior:a});r.y=o?n.scrollTop-e:i===Kv.Down?n.scrollTop-u.y:n.scrollTop-h.y,r.y&&n.scrollBy({top:-r.y,behavior:a});break}}this.handleMove(e,Jb(ev(d,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Jv(e){return Boolean(e&&"distance"in e)}function ey(e){return Boolean(e&&"delay"in e)}Qv.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=Gv,onActivation:i}=t,{active:o}=n;const{code:a}=e.nativeEvent;if(r.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class ty{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=Pb(e);return e instanceof t?e:Wb(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=Wb(o),this.documentListeners=new Vv(this.document),this.listeners=new Vv(n),this.windowListeners=new Vv(Pb(o)),this.initialCoordinates=null!=(r=nv(i))?r:mv,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Uv.Resize,this.handleCancel),this.windowListeners.add(Uv.DragStart,Xv),this.windowListeners.add(Uv.VisibilityChange,this.handleCancel),this.windowListeners.add(Uv.ContextMenu,Xv),this.documentListeners.add(Uv.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(ey(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Jv(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Uv.Click,qv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Uv.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!r)return;const s=null!=(t=nv(e))?t:mv,l=ev(r,s);if(!n&&a){if(Jv(a)){if(null!=a.tolerance&&Yv(l,a.tolerance))return this.handleCancel();if(Yv(l,a.distance))return this.handleStart()}return ey(a)&&Yv(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Kv.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const ny={move:{name:"pointermove"},end:{name:"pointerup"}};class ry extends ty{constructor(e){const{event:t}=e,n=Wb(t.target);super(e,ny,n)}}ry.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const iy={move:{name:"mousemove"},end:{name:"mouseup"}};var oy;!function(e){e[e.RightClick=2]="RightClick"}(oy||(oy={}));let ay=class extends ty{constructor(e){super(e,iy,Wb(e.event.target))}};ay.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==oy.RightClick&&(null==r||r({event:n}),!0)}}];const sy={move:{name:"touchmove"},end:{name:"touchend"}};class ly extends ty{constructor(e){super(e,sy)}static setup(){return window.addEventListener(sy.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(sy.move.name,e)};function e(){}}}var cy,dy;function uy(e){let{acceleration:t,activator:n=cy.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:s=5,order:l=dy.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:h,delta:f,threshold:g}=e;const b=function(e){let{delta:t,disabled:n}=e;const r=qb(t);return Kb((e=>{if(n||!r||!e)return hy;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Nv.Backward]:e.x[Nv.Backward]||-1===i.x,[Nv.Forward]:e.x[Nv.Forward]||1===i.x},y:{[Nv.Backward]:e.y[Nv.Backward]||-1===i.y,[Nv.Forward]:e.y[Nv.Forward]||1===i.y}}}),[n,t,r])}({delta:f,disabled:!a}),[v,y]=function(){const e=o(null);return[p(((t,n)=>{e.current=setInterval(t,n)}),[]),p((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=o({x:0,y:0}),w=o({x:0,y:0}),$=m((()=>{switch(n){case cy.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case cy.DraggableRect:return i}}),[n,i,c]),S=o(null),k=p((()=>{const e=S.current;if(!e)return;const t=x.current.x*w.current.x,n=x.current.y*w.current.y;e.scrollBy(t,n)}),[]),O=m((()=>l===dy.TreeOrder?[...d].reverse():d),[l,d]);u((()=>{if(a&&d.length&&$){for(const e of O){if(!1===(null==r?void 0:r(e)))continue;const n=d.indexOf(e),i=h[n];if(!i)continue;const{direction:o,speed:a}=Pv(e,i,$,t,g);for(const e of["x","y"])b[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return y(),S.current=e,v(k,s),x.current=a,void(w.current=o)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,k,r,y,a,s,JSON.stringify($),JSON.stringify(b),v,d,O,h,JSON.stringify(g)])}ly.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(cy||(cy={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(dy||(dy={}));const hy={x:{[Nv.Backward]:!1,[Nv.Forward]:!1},y:{[Nv.Backward]:!1,[Nv.Forward]:!1}};var fy,py;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(fy||(fy={})),function(e){e.Optimized="optimized"}(py||(py={}));const gy=new Map;function my(e,t){return Kb((n=>e?n||("function"==typeof t?t(e):e):null),[t,e])}function by(e){let{callback:t,disabled:n}=e;const r=Yb(t),i=m((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(r)}),[n]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}function vy(e){return new Wv(Tv(e),e)}function yy(e,t,n){void 0===t&&(t=vy);const[r,i]=x((function(r){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=r?r:n)?i:null;const o=t(e);if(JSON.stringify(r)===JSON.stringify(o))return r;return o}),null),o=function(e){let{callback:t,disabled:n}=e;const r=Yb(t),i=m((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(r)}),[r,n]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){i();break}}}}),a=by({callback:i});return Vb((()=>{i(),e?(null==a||a.observe(e),null==o||o.observe(document.body,{childList:!0,subtree:!0})):(null==a||a.disconnect(),null==o||o.disconnect())}),[e]),r}const xy=[];function wy(e,t){void 0===t&&(t=[]);const n=o(null);return u((()=>{n.current=null}),t),u((()=>{const t=e!==mv;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?ev(e,n.current):mv}function $y(e){return m((()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null),[e])}const Sy=[];function ky(e){let{measure:t}=e;const[n,r]=a(null),i=p((e=>{for(const{target:n}of e)if(zb(n)){r((e=>{const r=t(n);return e?{...e,width:r.width,height:r.height}:r}));break}}),[t]),o=by({callback:i}),s=p((e=>{const n=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return zb(t)?t:e}(e);null==o||o.disconnect(),n&&(null==o||o.observe(n)),r(n?t(n):null)}),[t,o]),[l,c]=Xb(s);return m((()=>({nodeRef:l,rect:n,setRef:c})),[n,l,c])}const Oy=[{sensor:ry,options:{}},{sensor:Qv,options:{}}],Cy={current:{}},Ty={draggable:{measure:Dv},droppable:{measure:Dv,strategy:fy.WhileDragging,frequency:py.Optimized},dragOverlay:{measure:Tv}};class Dy extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const jy={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Dy,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:pv},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ty,measureDroppableContainers:pv,windowRect:null,measuringScheduled:!1},_y=$({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:pv,draggableNodes:new Map,over:null,measureDroppableContainers:pv}),Iy=$(jy);function My(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Dy}}}function Ey(e,t){switch(t.type){case fv.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case fv.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case fv.DragEnd:case fv.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case fv.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new Dy(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case fv.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const a=new Dy(e.droppable.containers);return a.set(n,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case fv.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new Dy(e.droppable.containers);return o.delete(n),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Ay(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:i}=g(_y),o=qb(r),a=qb(null==n?void 0:n.id);return u((()=>{if(!t&&!r&&o&&null!=a){if(!tv(o))return;if(document.activeElement===o.target)return;const e=i.get(a);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame((()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=ov(e);if(t){t.focus();break}}}))}}),[r,t,i,a,o]),null}const Ny=$({...mv,scaleX:1,scaleY:1});var By;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(By||(By={}));const Ly=w((function(e){var t,n,r,s;let{id:l,accessibility:c,autoScroll:d=!0,children:h,sensors:f=Oy,collisionDetection:g=$v,measuring:b,modifiers:v,...y}=e;const w=x(Ey,void 0,My),[$,S]=w,[k,O]=function(){const[e]=a((()=>new Set)),t=p((t=>(e.add(t),()=>e.delete(t))),[e]);return[p((t=>{let{type:n,event:r}=t;e.forEach((e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)}))}),[e]),t]}(),[C,T]=a(By.Uninitialized),j=C===By.Initialized,{draggable:{active:_,nodes:I,translate:M},droppable:{containers:E}}=$,A=_?I.get(_):null,N=o({initial:null,translated:null}),B=m((()=>{var e;return null!=_?{id:_,data:null!=(e=null==A?void 0:A.data)?e:Cy,rect:N}:null}),[_,A]),L=o(null),[R,P]=a(null),[F,z]=a(null),H=Ub(y,Object.values(y)),W=Zb("DndDescribedBy",l),V=m((()=>E.getEnabled()),[E]),Y=function(e){return m((()=>({draggable:{...Ty.draggable,...null==e?void 0:e.draggable},droppable:{...Ty.droppable,...null==e?void 0:e.droppable},dragOverlay:{...Ty.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(b),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:X}=function(e,t){let{dragging:n,dependencies:r,config:i}=t;const[s,l]=a(null),{frequency:c,measure:d,strategy:h}=i,f=o(e),g=function(){switch(h){case fy.Always:return!1;case fy.BeforeDragging:return n;default:return!n}}(),m=Ub(g),b=p((function(e){void 0===e&&(e=[]),m.current||l((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=o(null),y=Kb((t=>{if(g&&!n)return gy;if(!t||t===gy||f.current!==e||null!=s){const t=new Map;for(let n of e){if(!n)continue;if(s&&s.length>0&&!s.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new Wv(d(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t}),[e,s,n,g,d]);return u((()=>{f.current=e}),[e]),u((()=>{g||b()}),[n,g]),u((()=>{s&&s.length>0&&l(null)}),[JSON.stringify(s)]),u((()=>{g||"number"!=typeof c||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),c))}),[c,g,b,...r]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=s}}(V,{dragging:j,dependencies:[M.x,M.y],config:Y.droppable}),q=function(e,t){const n=null!==t?e.get(t):void 0,r=n?n.node.current:null;return Kb((e=>{var n;return null===t?null:null!=(n=null!=r?r:e)?n:null}),[r,t])}(I,_),G=m((()=>F?nv(F):null),[F]),Z=function(){const e=!1===(null==R?void 0:R.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,n=j&&!e&&!t;if("object"==typeof d)return{...d,enabled:n};return{enabled:n}}(),Q=function(e,t){return my(e,t)}(q,Y.draggable.measure);!function(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e;const a=o(!1),{x:s,y:l}="boolean"==typeof i?{x:i,y:i}:i;Vb((()=>{if(!s&&!l||!t)return void(a.current=!1);if(a.current||!r)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const i=Sv(n(e),r);if(s||(i.x=0),l||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){const t=_v(e);t&&t.scrollBy({top:i.y,left:i.x})}}),[t,s,l,r,n])}({activeNode:_?I.get(_):null,config:Z.layoutShiftCompensation,initialRect:Q,measure:Y.draggable.measure});const J=yy(q,Y.draggable.measure,Q),ee=yy(q?q.parentElement:null),te=o({activatorEvent:null,active:null,activeNode:q,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:I,draggingNode:null,draggingNodeRect:null,droppableContainers:E,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ne=E.getNodeFor(null==(t=te.current.over)?void 0:t.id),re=ky({measure:Y.dragOverlay.measure}),ie=null!=(n=re.nodeRef.current)?n:q,oe=j?null!=(r=re.rect)?r:J:null,ae=Boolean(re.nodeRef.current&&re.rect),se=Sv(le=ae?null:J,my(le));var le;const ce=$y(ie?Pb(ie):null),de=function(e){const t=o(e),n=Kb((n=>e?n&&n!==xy&&e&&t.current&&e.parentNode===t.current.parentNode?n:jv(e):xy),[e]);return u((()=>{t.current=e}),[e]),n}(j?null!=ne?ne:q:null),ue=function(e,t){void 0===t&&(t=Tv);const[n]=e,r=$y(n?Pb(n):null),[i,o]=x((function(){return e.length?e.map((e=>Bv(e)?r:new Wv(t(e),e))):Sy}),Sy),a=by({callback:o});return e.length>0&&i===Sy&&o(),Vb((()=>{e.length?e.forEach((e=>null==a?void 0:a.observe(e))):(null==a||a.disconnect(),o())}),[e]),i}(de),he=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...r})),n):n}(v,{transform:{x:M.x-se.x,y:M.y-se.y,scaleX:1,scaleY:1},activatorEvent:F,active:B,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:oe,over:te.current.over,overlayNodeRect:re.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),fe=G?Jb(G,M):null,pe=function(e){const[t,n]=a(null),r=o(e),i=p((e=>{const t=Iv(e.target);t&&n((e=>e?(e.set(t,Av(t)),new Map(e)):null))}),[]);return u((()=>{const t=r.current;if(e!==t){o(t);const a=e.map((e=>{const t=Iv(e);return t?(t.addEventListener("scroll",i,{passive:!0}),[t,Av(t)]):null})).filter((e=>null!=e));n(a.length?new Map(a):null),r.current=e}return()=>{o(e),o(t)};function o(e){e.forEach((e=>{const t=Iv(e);null==t||t.removeEventListener("scroll",i)}))}}),[i,e]),m((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>Jb(e,t)),mv):zv(e):mv),[e,t])}(de),ge=wy(pe),me=wy(pe,[J]),be=Jb(he,ge),ve=oe?Ov(oe,he):null,ye=B&&ve?g({active:B,collisionRect:ve,droppableRects:U,droppableContainers:V,pointerCoordinates:fe}):null,xe=xv(ye,"id"),[we,$e]=a(null),Se=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(ae?he:Jb(he,me),null!=(s=null==we?void 0:we.rect)?s:null,J),ke=p(((e,t)=>{let{sensor:n,options:r}=t;if(null==L.current)return;const i=I.get(L.current);if(!i)return;const o=e.nativeEvent,a=new n({active:L.current,activeNode:i,event:o,options:r,context:te,onStart(e){const t=L.current;if(null==t)return;const n=I.get(t);if(!n)return;const{onDragStart:r}=H.current,i={active:{id:t,data:n.data,rect:N}};D((()=>{null==r||r(i),T(By.Initializing),S({type:fv.DragStart,initialCoordinates:e,active:t}),k({type:"onDragStart",event:i})}))},onMove(e){S({type:fv.DragMove,coordinates:e})},onEnd:s(fv.DragEnd),onCancel:s(fv.DragCancel)});function s(e){return async function(){const{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=te.current;let a=null;if(t&&i){const{cancelDrop:s}=H.current;if(a={activatorEvent:o,active:t,collisions:n,delta:i,over:r},e===fv.DragEnd&&"function"==typeof s){await Promise.resolve(s(a))&&(e=fv.DragCancel)}}L.current=null,D((()=>{S({type:e}),T(By.Uninitialized),$e(null),P(null),z(null);const t=e===fv.DragEnd?"onDragEnd":"onDragCancel";if(a){const e=H.current[t];null==e||e(a),k({type:t,event:a})}}))}}D((()=>{P(a),z(e.nativeEvent)}))}),[I]),Oe=p(((e,t)=>(n,r)=>{const i=n.nativeEvent,o=I.get(r);if(null!==L.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(n,t.options,a)&&(i.dndKit={capturedBy:t.sensor},L.current=r,ke(n,t))}),[I,ke]),Ce=function(e,t){return m((()=>e.reduce(((e,n)=>{const{sensor:r}=n;return[...e,...r.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,n)})))]}),[])),[e,t])}(f,Oe);!function(e){u((()=>{if(!Bb)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(f),Vb((()=>{J&&C===By.Initializing&&T(By.Initialized)}),[J,C]),u((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:n,collisions:r,over:i}=te.current;if(!t||!n)return;const o={active:t,activatorEvent:n,collisions:r,delta:{x:be.x,y:be.y},over:i};D((()=>{null==e||e(o),k({type:"onDragMove",event:o})}))}),[be.x,be.y]),u((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=te.current;if(!e||null==L.current||!t||!i)return;const{onDragOver:o}=H.current,a=r.get(xe),s=a&&a.rect.current?{id:a.id,rect:a.rect.current,data:a.data,disabled:a.disabled}:null,l={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};D((()=>{$e(s),null==o||o(l),k({type:"onDragOver",event:l})}))}),[xe]),Vb((()=>{te.current={activatorEvent:F,active:B,activeNode:q,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:I,draggingNode:ie,draggingNodeRect:oe,droppableContainers:E,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},N.current={initial:oe,translated:ve}}),[B,q,ye,ve,I,ie,oe,U,E,we,de,be]),uy({...Z,delta:M,draggingRect:ve,pointerCoordinates:fe,scrollableAncestors:de,scrollableAncestorRects:ue});const Te=m((()=>({active:B,activeNode:q,activeNodeRect:J,activatorEvent:F,collisions:ye,containerNodeRect:ee,dragOverlay:re,draggableNodes:I,droppableContainers:E,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:Y,measuringScheduled:X,windowRect:ce})),[B,q,J,F,ye,ee,re,I,E,U,we,K,de,ue,Y,X,ce]),De=m((()=>({activatorEvent:F,activators:Ce,active:B,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:S,draggableNodes:I,over:we,measureDroppableContainers:K})),[F,Ce,B,J,S,W,I,we,K]);return i.createElement(cv.Provider,{value:O},i.createElement(_y.Provider,{value:De},i.createElement(Iy.Provider,{value:Te},i.createElement(Ny.Provider,{value:Se},h)),i.createElement(Ay,{disabled:!1===(null==c?void 0:c.restoreFocus)})),i.createElement(hv,{...c,hiddenTextDescribedById:W}))})),Ry=$(null),Py="button",Fy="Droppable";function zy(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e;const o=Zb(Fy),{activators:a,activatorEvent:s,active:l,activeNodeRect:c,ariaDescribedById:d,draggableNodes:u,over:h}=g(_y),{role:f=Py,roleDescription:p="draggable",tabIndex:b=0}=null!=i?i:{},v=(null==l?void 0:l.id)===t,y=g(v?Ny:Ry),[x,w]=Xb(),[$,S]=Xb(),k=function(e,t){return m((()=>e.reduce(((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e}),{})),[e,t])}(a,t),O=Ub(n);Vb((()=>(u.set(t,{id:t,key:o,node:x,activatorNode:$,data:O}),()=>{const e=u.get(t);e&&e.key===o&&u.delete(t)})),[u,t]);return{active:l,activatorEvent:s,activeNodeRect:c,attributes:m((()=>({role:f,tabIndex:b,"aria-disabled":r,"aria-pressed":!(!v||f!==Py)||void 0,"aria-roledescription":p,"aria-describedby":d.draggable})),[r,f,b,v,p,d.draggable]),isDragging:v,listeners:r?void 0:k,node:x,over:h,setNodeRef:w,setActivatorNodeRef:S,transform:y}}const Hy="Droppable",Wy={timeout:25};function Vy(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Yy(e,t){return e.reduce(((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e}),Array(e.length))}function Uy(e){return null!==e&&e>=0}const Ky=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const o=Vy(t,r,n),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},Xy={scaleX:1,scaleY:1},qy=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[n])?t:r;if(!s)return null;if(i===n){const e=o[a];return e?{x:0,y:n<a?e.top+e.height-(s.top+s.height):e.top-s.top,...Xy}:null}const l=function(e,t,n){const r=e[t],i=e[t-1],o=e[t+1];if(!r)return 0;if(n<t)return i?r.top-(i.top+i.height):o?o.top-(r.top+r.height):0;return o?o.top-(r.top+r.height):i?r.top-(i.top+i.height):0}(o,i,n);return i>n&&i<=a?{x:0,y:-s.height-l,...Xy}:i<n&&i>=a?{x:0,y:s.height+l,...Xy}:{x:0,y:0,...Xy}};const Gy="Sortable",Zy=i.createContext({activeIndex:-1,containerId:Gy,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ky,disabled:{draggable:!1,droppable:!1}});function Qy(e){let{children:t,id:n,items:r,strategy:a=Ky,disabled:s=!1}=e;const{active:l,dragOverlay:c,droppableRects:d,over:h,measureDroppableContainers:f}=g(Iy),p=Zb(Gy,n),b=Boolean(null!==c.rect),v=m((()=>r.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[r]),y=null!=l,x=l?v.indexOf(l.id):-1,w=h?v.indexOf(h.id):-1,$=o(v),S=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(v,$.current),k=-1!==w&&-1===x||S,O=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(s);Vb((()=>{S&&y&&f(v)}),[S,v,y,f]),u((()=>{$.current=v}),[v]);const C=m((()=>({activeIndex:x,containerId:p,disabled:O,disableTransforms:k,items:v,overIndex:w,useDragOverlay:b,sortedRects:Yy(v,d),strategy:a})),[x,p,O.draggable,O.droppable,k,v,w,d,b,a]);return i.createElement(Zy.Provider,{value:C},t)}const Jy=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return Vy(n,r,i).indexOf(t)},ex=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===o||i!==a)&&(!!n||a!==i&&t===l))},tx={duration:200,easing:"ease"},nx="transform",rx=rv.Transition.toString({property:nx,duration:0,easing:"linear"}),ix={roleDescription:"sortable"};function ox(e){let{animateLayoutChanges:t=ex,attributes:n,disabled:r,data:i,getNewIndex:s=Jy,id:l,strategy:c,resizeObserverConfig:d,transition:h=tx}=e;const{items:f,containerId:b,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:S,strategy:k}=g(Zy),O=function(e,t){var n,r;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(r,y),C=f.indexOf(l),T=m((()=>({sortable:{containerId:b,index:C,items:f},...i})),[b,i,C,f]),D=m((()=>f.slice(f.indexOf(l))),[f,l]),{rect:j,node:_,isOver:I,setNodeRef:M}=function(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e;const a=Zb(Hy),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=g(_y),h=o({disabled:n}),f=o(!1),m=o(null),b=o(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...Wy,...i},w=Ub(null!=y?y:r),$=by({callback:p((()=>{f.current?(null!=b.current&&clearTimeout(b.current),b.current=setTimeout((()=>{d(Array.isArray(w.current)?w.current:[w.current]),b.current=null}),x)):f.current=!0}),[x]),disabled:v||!s}),S=p(((e,t)=>{$&&(t&&($.unobserve(t),f.current=!1),e&&$.observe(e))}),[$]),[k,O]=Xb(S),C=Ub(t);return u((()=>{$&&k.current&&($.disconnect(),f.current=!1,$.observe(k.current))}),[k,$]),Vb((()=>(l({type:fv.RegisterDroppable,element:{id:r,key:a,disabled:n,node:k,rect:m,data:C}}),()=>l({type:fv.UnregisterDroppable,key:a,id:r}))),[r]),u((()=>{n!==h.current.disabled&&(l({type:fv.SetDroppableDisabled,id:r,key:a,disabled:n}),h.current.disabled=n)}),[r,a,n,l]),{active:s,rect:m,isOver:(null==c?void 0:c.id)===r,node:k,over:c,setNodeRef:O}}({id:l,data:T,disabled:O.droppable,resizeObserverConfig:{updateMeasurementsFor:D,...d}}),{active:E,activatorEvent:A,activeNodeRect:N,attributes:B,setNodeRef:L,listeners:R,isDragging:P,over:F,setActivatorNodeRef:z,transform:H}=zy({id:l,data:T,attributes:{...ix,...n},disabled:O.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m((()=>e=>{t.forEach((t=>t(e)))}),t)}(M,L),V=Boolean(E),Y=V&&!x&&Uy(v)&&Uy($),U=!S&&P,K=U&&Y?H:null,X=Y?null!=K?K:(null!=c?c:k)({rects:w,activeNodeRect:N,activeIndex:v,overIndex:$,index:C}):null,q=Uy(v)&&Uy($)?s({id:l,items:f,activeIndex:v,overIndex:$}):C,G=null==E?void 0:E.id,Z=o({activeId:G,items:f,newIndex:q,containerId:b}),Q=f!==Z.current.items,J=t({active:E,containerId:b,isDragging:P,isSorting:V,id:l,index:C,items:f,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:n,node:r,rect:i}=e;const[s,l]=a(null),c=o(n);return Vb((()=>{if(!t&&n!==c.current&&r.current){const e=i.current;if(e){const t=Tv(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&l(n)}}n!==c.current&&(c.current=n)}),[t,n,r,i]),u((()=>{s&&l(null)}),[s]),s}({disabled:!J,index:C,node:_,rect:j});return u((()=>{V&&Z.current.newIndex!==q&&(Z.current.newIndex=q),b!==Z.current.containerId&&(Z.current.containerId=b),f!==Z.current.items&&(Z.current.items=f)}),[V,q,b,f]),u((()=>{if(G===Z.current.activeId)return;if(G&&!Z.current.activeId)return void(Z.current.activeId=G);const e=setTimeout((()=>{Z.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:E,activeIndex:v,attributes:B,data:T,rect:j,index:C,newIndex:q,items:f,isOver:I,isSorting:V,isDragging:P,listeners:R,node:_,overIndex:$,over:F,setNodeRef:W,setActivatorNodeRef:z,setDroppableNodeRef:M,setDraggableNodeRef:L,transform:null!=ee?ee:X,transition:function(){if(ee||Q&&Z.current.newIndex===C)return rx;if(U&&!tv(A)||!h)return;if(V||J)return rv.Transition.toString({...h,property:nx});return}()}}function ax(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const sx=[Kv.Down,Kv.Right,Kv.Up,Kv.Left],lx=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(sx.includes(e.code)){if(e.preventDefault(),!n||!r)return;const t=[];o.getEnabled().forEach((n=>{if(!n||null!=n&&n.disabled)return;const o=i.get(n.id);if(o)switch(e.code){case Kv.Down:r.top<o.top&&t.push(n);break;case Kv.Up:r.top>o.top&&t.push(n);break;case Kv.Left:r.left>o.left&&t.push(n);break;case Kv.Right:r.left<o.left&&t.push(n)}}));const l=(e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=yv(t),o=[];for(const e of r){const{id:t}=e,r=n.get(t);if(r){const n=yv(r),a=i.reduce(((e,t,r)=>{return e+(i=n[r],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(bv)})({active:n,collisionRect:r,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=xv(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(n.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const n=jv(l).some(((e,t)=>s[t]!==e)),i=cx(e,t),o=function(e,t){if(!ax(e)||!ax(t))return!1;if(!cx(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=n||!i?{x:0,y:0}:{x:o?r.width-a.width:0,y:o?r.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:ev(d,c)}}}};function cx(e,t){return!(!ax(e)||!ax(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class dx extends ay{}dx.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>ux(e.target)}];function ux(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Qv{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>ux(e.target)}];const hx=I.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,fx=I(Gu)`
    color: ${ml.Neutral[1]};
    ${gc({textSize:"BodySmall"})}

    ${yl.MaxWidth.mobileL} {
        display: none;
    }
`,px=I(Kp)`
    padding: 3.5rem 1.25rem 2.5rem;
`,gx=I.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${ml.Neutral[1]};
    ${gc({textSize:"BodySmall"})}
`,mx=r=>{var{children:i,visible:o,onMobileClose:a}=r,s=lt(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=Vc.useMediaQuery({maxWidth:bl.mobileL}),d=()=>{a&&a()},u=()=>"string"==typeof i?e(Nl.BodySmall,{children:i}):i;return t(n,{children:[o&&e(hx,Object.assign({"data-testid":l},s,{children:e(fx,{children:u()})})),c&&e(Vp,Object.assign({show:o,onOverlayClick:d},{children:e(px,Object.assign({onClose:d},{children:e(gx,{children:u()})}))}))]})},bx=I.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,vx=r=>{var i,s,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:h,rootNode:f,customOffset:p,delay:g,onPopoverAppear:m,onPopoverDismiss:b}=r,v=lt(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=a(!1),w=o(),$=o(),S=Vc.useMediaQuery({maxWidth:xl.mobileL}),{refs:k,floatingStyles:O,context:C}=be({open:y,placement:u,whileElementsMounted:ve,middleware:[ye(null!=p?p:16),xe(),we({limiter:$e()})],onOpenChange:e=>{x(e),y!==e&&N(e)}}),T=Lf(),D=S?"click":d,j=Oe(C,{ignoreMouse:"hover"===D}),_=Ce(C),I=Ee(C,{enabled:"hover"===D,delay:{open:null!==(i=null==g?void 0:g.open)&&void 0!==i?i:0,close:null!==(s=null==g?void 0:g.close)&&void 0!==s?s:500}}),{getReferenceProps:M,getFloatingProps:E}=Te([j,_,I]),A=()=>{x(!1),N(!1)},N=e=>{e&&m&&m(),!e&&b&&b()};return t(n,{children:[e(bx,Object.assign({ref:e=>{w.current=e,k.setReference(e)}},M({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:l})),y&&e(De,Object.assign({root:f},{children:e(je,Object.assign({context:C},{children:e("div",Object.assign({ref:e=>{$.current=e,k.setFloating(e)},style:Object.assign(Object.assign({},O),{outline:"none",zIndex:null!=h?h:T})},E(),{children:"function"==typeof c?c():e(mx,Object.assign({visible:!0,onMobileClose:A},{children:c}))}))}))}))]})},yx=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},xx=I.span`
    color: ${ml.Primary};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>yx(e)}

    &:hover,
    &:focus-visible {
        color: ${ml.Secondary};
        ${({$hoverStyle:e})=>yx(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,wx=I.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,$x=n=>{var{ariaLabel:r,content:i,icon:o,underlineStyle:a="default",underlineHoverStyle:s="default"}=n,l=lt(n,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!i;return e(vx,Object.assign({},l,{children:t(xx,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,"aria-label":null!=r?r:c?void 0:"More info"},{children:[i,o&&e(wx,Object.assign({$standalone:!c},{children:o}))]}))}))};I.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${ml.Primary};
    }
`;const Sx=I.div`
    padding-left: 0.25rem;
    display: inline;
`,kx=({addon:t,rootNode:n})=>{const{content:r,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e(Sx,{children:e($x,{trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s,icon:null!=o?o:e(P,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Ox=I.label`
    ${Al.getTextStyle("H5","semibold")}
    color: ${ml.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Al.getTextStyle("H5","semibold")}
    }

    a {
        color: ${ml.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${ml.Secondary};

            svg {
                color: ${ml.Secondary};
            }
        }
    }
`,Cx=I(Nl.H6)`
    color: ${ml.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,Tx=I(Nl.BodySmall)`
    && {
        color: ${ml.Neutral[3]};
        ${Al.getFontFamily("BodySmall","regular")}
    }
`,Dx=n=>{var{children:r,addon:i,subtitle:o,"data-testid":a}=n,s=lt(n,["children","addon","subtitle","data-testid"]);return t(Ox,Object.assign({},s,{children:[r,i&&i.type&&("popover"===i.type?e(kx,{addon:i}):null),"string"==typeof o?e(Tx,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:o})):o]}))},jx=t=>e(Cx,Object.assign({weight:"semibold"},t)),_x=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=lt(t,["children","data-testid","type","stretch"]);return e(Ix,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},s,{children:r}))})),Ix=I.div`
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

                ${yl.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${yl.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${yl.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return M`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${yl.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${yl.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return M`
                    display: flex;
                    flex-direction: column;
                `;default:return M`
                    display: flex;
                `}}}
`,Mx=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1}=t,a=lt(t,["children","data-testid","stretch"]);return e(Ex,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:r}))})),Ex=I.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?M`
                ${yl.MaxWidth.tablet} {
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
`,Ax=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=lt(t,["children","data-testid","className","type","stretch"]);return e(Mx,Object.assign({ref:n,"data-testid":i,className:o,stretch:s},l,{children:e(_x,Object.assign({"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s},{children:r}))}))})),Nx={Section:Mx,Container:_x,Content:Ax,ColDiv:$p},Bx=M`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,Lx=I.div`
    ${Bx}
`,Rx=I(Nx.ColDiv)`
    ${Bx}
`,Px=({label:n,errorMessage:r,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:u,"data-error-testid":h})=>{const f=!s&&(l||d||u)?"grid":s||"flex",p=()=>h||(i?`${i}-error-message`:"error-message"),g=()=>!!r;return t("grid"===f?Rx:Lx,Object.assign({},(e=>{switch(e){case"grid":return{mobileCols:l,tabletCols:d,desktopCols:u};case"flex":return}})(f),{children:[n&&e(Dx,"string"==typeof n?Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},{children:n}):Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},n)),(()=>{const e={"aria-invalid":g(),"aria-describedby":g()&&p()};return k.map(a,(t=>c(t,e)))})(),r&&e(Cx,Object.assign({id:p(),weight:"semibold",tabIndex:0,"data-testid":p()},{children:r}))]}))};function Fx(e,t){return Fx=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Fx(e,t)}function zx(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Hx(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Wx(e){return null!==e&&1===e.length?e[0]:e.slice()}function Vx(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Yx(e,t){return Ux(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function Ux(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let Kx=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Vx(n.getMouseEventMap())}))}zx(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=Yx(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Vx(n.getKeyDownEventMap()),zx(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),Vx(n.getMouseEventMap()),zx(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),Vx(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:t,value:Wx(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(i,o)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},o={index:e,value:Wx(n.state.value)};return n.props.renderTrack(i,o)};let r=Hx(t.value);r.length||(r=Hx(t.defaultValue)),n.pendingResizeTimeouts=[];const o=[];for(let e=0;e<r.length;e+=1)r[e]=Yx(r[e],t),o.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:o},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Fx(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Hx(e.value);return n.length?t.pending?null:{value:n.map((t=>Yx(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return Wx(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(r[o]),a=Math.abs(e-i);a<t&&(t=a,n=o)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Yx(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],o=r[this.posMaxKey()],a=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=Yx(this.calcValue(n),this.props),o=this.state.value.slice();o[r]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Yx(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Yx(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,o&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const o=r-i*n;t[e-1-i]>o&&(t[e-1-i]=o)}}(r,t,l,a)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=Ux(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=Ux(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](Wx(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,o,a)},t}(i.Component);Kx.displayName="ReactSlider",Kx.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Xx=Kx;const qx=I.div`
    isolation: isolate;
`,Gx=I.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,Zx=I.div`
    margin-bottom: 1rem;
`,Qx=I(Nl.Body)`
    overflow-wrap: anywhere;
`,Jx=I(Xx)`
    height: 0.875rem;
`,ew=I.div`
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

        background-color: ${ml.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${ml.Neutral[4]};
        border-radius: 50%;
    }
`,tw=I.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${ew}:after {
        border: 1px solid ${ml.Primary};
    }
`,nw=I.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ml.Neutral[4](e)};
`,rw=n=>{var{value:r,min:i=0,max:o=100,step:s=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:h,readOnly:f,ariaLabels:p,showSliderLabels:g,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:S}=n,k=lt(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[O,C]=a(D()),T=function(){const e=function(){const e=h||f?ml.Neutral[5]:ml.Neutral[4],t=h||f?ml.Neutral[4]:ml.Primary;if(1===c)return[t,e];const n=[];n.push(e);for(let e=0;e<c-1;e++)n.push(t);return n.push(e),n}();return new Array(c+1).fill(0).map(((t,n)=>(null==d?void 0:d[n])||e[n]))}();u((()=>{r!==O&&C(D())}),[r]);function D(){if(r&&r.length===c)return r;const e=[];for(let t=0;t<c;t++)e.push(i+s*t);return e}const j=e=>w?w(e):t(Qx,{children:[m,e,b]});return t(qx,Object.assign({},k,{children:[v&&e(Zx,{children:(()=>{let e="";if(1===O.length)e=`${O[0]}`;else if(2===O.length)e=`${O[0]} - ${O[1]}`;else if(O.length>2){e=`${Math.min(...O)} - ${Math.max(...O)}`}return t(Qx,{children:[y,e,x]})})()}),e(Jx,{step:s,min:i,max:o,value:O,disabled:h||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];C(t),null==$||$(t)}else{if(t>-1&&O[t]===e[t])return;C(e),null==$||$(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];C(t),null==S||S(t)}else C(e),null==S||S(e)},minDistance:l,ariaLabel:p,renderThumb:(t,n)=>e(tw,Object.assign({"data-testid":`slider-thumb-${n.index}`},t,{tabIndex:h?void 0:t.tabIndex},{children:e(ew,{$disabled:h,$readOnly:f})})),renderTrack:(t,n)=>e(nw,Object.assign({"data-testid":`slider-track-${n.index}`},t,{$color:T[n.index]}))}),g&&t(Gx,{children:[e("div",{children:j(i)}),e("div",{children:j(o)})]})]}))},iw=I.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,ow=I.div`
    margin: 0 0.5rem;
`,aw=I.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,sw=I.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${ml.Neutral[8]};

    ${e=>{let t=ml.Neutral[6];return e.$disabled&&e.$selected?t=ml.Neutral[4]:e.$disabled?t=ml.Neutral[5]:e.$selected&&(t=ml.Accent.Light[1]),M`
            background-color: ${t};
        `}}
`,lw=I(rw)`
    margin-top: -0.3125rem;
`,cw=r=>{var{bins:i=[],interval:o,disabled:s,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:h,rangeLabelSuffix:f,ariaLabels:p,onChange:g,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=r,x=lt(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),$=Math.max(...w),S=i.map((e=>e.minValue)),k=Math.max(...S),O=Math.min(...S),[C,T]=a(I()),D=m((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(k-O)/o+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===O+o*r));t?n.push(t):n.push({count:0,minValue:O+o*r})}return n}),[i,o]);u((()=>{c!==C&&T(I())}),[c]);const j=e=>{T(e),null==g||g(e)},_=e=>{T(e),null==b||b(e)};function I(){return null!=c?c:[O,O+o]}const M=e=>y?y(e):t(Nl.Body,{children:[h,e,f]});return t("div",Object.assign({},x,{children:[d&&t(iw,{children:[M(C[0]),e(ow,{children:"-"}),M(C[1])]}),D.every((e=>0===e.count))&&v?v():t(n,{children:[e(aw,{children:D.map(((t,n)=>{const r=t.count/$;return e(sw,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:t.minValue>=C[0]&&t.minValue<C[1],$disabled:s||l},n)}))}),e(lw,{min:O,max:k+o,step:o,minRange:o,numOfThumbs:2,value:C,disabled:s,readOnly:l,ariaLabels:p,onChange:j,onChangeEnd:_})]})]}))},dw=I.input`
    ${Al.getTextStyle("Body","regular")}
    color: ${ml.Neutral[1]};

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
        color: ${ml.Neutral[3]};
    }

    ${e=>"number"===e.type?M`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?M`
                cursor: not-allowed;
            `:void 0}
`,uw=I.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${ml.Neutral[3]};
    background-color: transparent;
    border: none;
`,hw=I(Ae)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,fw=I.div`
    display: flex;
    width: 100%;
`,pw=i.forwardRef(((r,i)=>{var{value:a,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:f,allowClear:p=!1,className:g,styleType:m="bordered"}=r,v=lt(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=o();b(i,(()=>y.current),[]);const x=Md({ref:y,formatter:e=>Td.transformWithSpaces(e,s)}),w=e=>{h&&(S()?k(e):h(e))},$=()=>{f&&f(),y&&y.current&&y.current.focus()},S=()=>"tel"===l&&s,k=e=>{const{nextValue:t,updateCaretPosition:n}=x(),r=t.replace(/\s/g,"");e.target.value=r,h(e),n()},O=a?(e=>e?S()?Td.transformWithSpaces(e,s):e:"")(a):a,C=()=>t(n,{children:[e(dw,Object.assign({"data-testid":"input",ref:y,disabled:d,value:O,onChange:w,type:l,readOnly:u},v)),p&&!d&&!u&&!!a&&e(uw,Object.assign({onClick:$,type:"button"},{children:e(hw,{"aria-hidden":!0})}))]});return e(n,{children:"no-border"===m?e(fw,Object.assign({className:g},{children:C()})):e(Uf,Object.assign({$disabled:d,$error:c,$readOnly:u,className:g},{children:C()}))})})),gw=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:o,label:r,errorMessage:i,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(pw,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:n,error:!!i},h))}))})),mw=I.div`
    display: flex;
    position: relative;
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    background: ${ml.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${ml.Accent.Light[1]};
        box-shadow: ${ac.InputBoxShadow};
    }

    ${e=>e.$readOnly?M`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?M`
                background: ${ml.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ml.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?M`
                border: 1px solid ${ml.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ml.Validation.Red.Border(e)};
                    box-shadow: ${ac.InputErrorBoxShadow};
                }
            `:void 0}
`,bw=I(pw)`
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
`,vw=I.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Al.getTextStyle("Body","regular")}
    color: ${ml.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${ml.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return M`
                color: ${ml.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${ml.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?M`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:M`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var yw=ys;var xw=ys,ww=xs,$w=Ls;var Sw=ys,kw=function(){this.__data__=new yw,this.size=0},Ow=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Cw=function(e){return this.__data__.get(e)},Tw=function(e){return this.__data__.has(e)},Dw=function(e,t){var n=this.__data__;if(n instanceof xw){var r=n.__data__;if(!ww||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new $w(r)}return n.set(e,t),this.size=n.size,this};function jw(e){var t=this.__data__=new Sw(e);this.size=t.size}jw.prototype.clear=kw,jw.prototype.delete=Ow,jw.prototype.get=Cw,jw.prototype.has=Tw,jw.prototype.set=Dw;var _w=jw;var Iw=Ls,Mw=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ew=function(e){return this.__data__.has(e)};function Aw(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Iw;++t<n;)this.add(e[t])}Aw.prototype.add=Aw.prototype.push=Mw,Aw.prototype.has=Ew;var Nw=Aw,Bw=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},Lw=function(e,t){return e.has(t)};var Rw=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,f=2&n?new Nw:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var p=e[u],g=t[u];if(r)var m=a?r(g,p,u,t,e,o):r(p,g,u,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Bw(t,(function(e,t){if(!Lw(f,t)&&(p===e||i(p,e,n,r,o)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Pw=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Fw=Go.Uint8Array,zw=os,Hw=Rw,Ww=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Vw=Pw,Yw=Zo?Zo.prototype:void 0,Uw=Yw?Yw.valueOf:void 0;var Kw=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Fw(e),new Fw(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return zw(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Ww;case"[object Set]":var l=1&r;if(s||(s=Vw),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var d=Hw(s(e),s(t),r,i,o,a);return a.delete(e),d;case"[object Symbol]":if(Uw)return Uw.call(e)==Uw.call(t)}return!1};var Xw=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},qw=Xw,Gw=Uo;var Zw=function(e,t,n){var r=t(e);return Gw(e)?r:qw(r,n(e))};var Qw=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Jw=function(){return[]},e$=Object.prototype.propertyIsEnumerable,t$=Object.getOwnPropertySymbols,n$=t$?function(e){return null==e?[]:(e=Object(e),Qw(t$(e),(function(t){return e$.call(e,t)})))}:Jw;var r$=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},i$=la,o$=ca;var a$=function(e){return o$(e)&&"[object Arguments]"==i$(e)},s$=ca,l$=Object.prototype,c$=l$.hasOwnProperty,d$=l$.propertyIsEnumerable,u$=a$(function(){return arguments}())?a$:function(e){return s$(e)&&c$.call(e,"callee")&&!d$.call(e,"callee")},h$={exports:{}};var f$=function(){return!1};!function(e,t){var n=Go,r=f$,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(h$,h$.exports);var p$=h$.exports,g$=/^(?:0|[1-9]\d*)$/;var m$=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&g$.test(e))&&e>-1&&e%1==0&&e<t};var b$=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},v$=la,y$=b$,x$=ca,w$={};w$["[object Float32Array]"]=w$["[object Float64Array]"]=w$["[object Int8Array]"]=w$["[object Int16Array]"]=w$["[object Int32Array]"]=w$["[object Uint8Array]"]=w$["[object Uint8ClampedArray]"]=w$["[object Uint16Array]"]=w$["[object Uint32Array]"]=!0,w$["[object Arguments]"]=w$["[object Array]"]=w$["[object ArrayBuffer]"]=w$["[object Boolean]"]=w$["[object DataView]"]=w$["[object Date]"]=w$["[object Error]"]=w$["[object Function]"]=w$["[object Map]"]=w$["[object Number]"]=w$["[object Object]"]=w$["[object RegExp]"]=w$["[object Set]"]=w$["[object String]"]=w$["[object WeakMap]"]=!1;var $$=function(e){return x$(e)&&y$(e.length)&&!!w$[v$(e)]};var S$=function(e){return function(t){return e(t)}},k$={exports:{}};!function(e,t){var n=Ko,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(k$,k$.exports);var O$=k$.exports,C$=$$,T$=S$,D$=O$&&O$.isTypedArray,j$=D$?T$(D$):C$,_$=r$,I$=u$,M$=Uo,E$=p$,A$=m$,N$=j$,B$=Object.prototype.hasOwnProperty;var L$=function(e,t){var n=M$(e),r=!n&&I$(e),i=!n&&!r&&E$(e),o=!n&&!r&&!i&&N$(e),a=n||r||i||o,s=a?_$(e.length,String):[],l=s.length;for(var c in e)!t&&!B$.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||A$(c,l))||s.push(c);return s},R$=Object.prototype;var P$=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||R$)};var F$=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),z$=P$,H$=F$,W$=Object.prototype.hasOwnProperty;var V$=function(e){if(!z$(e))return H$(e);var t=[];for(var n in Object(e))W$.call(e,n)&&"constructor"!=n&&t.push(n);return t},Y$=$a,U$=b$;var K$=function(e){return null!=e&&U$(e.length)&&!Y$(e)},X$=L$,q$=V$,G$=K$;var Z$=function(e){return G$(e)?X$(e):q$(e)},Q$=Zw,J$=n$,eS=Z$;var tS=function(e){return Q$(e,eS,J$)},nS=Object.prototype.hasOwnProperty;var rS=function(e,t,n,r,i,o){var a=1&n,s=tS(e),l=s.length;if(l!=tS(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:nS.call(t,d)))return!1}var u=o.get(e),h=o.get(t);if(u&&h)return u==t&&h==e;var f=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(r)var b=a?r(m,g,d,t,e,o):r(g,m,d,e,t,o);if(!(void 0===b?g===m||i(g,m,n,r,o):b)){f=!1;break}p||(p="constructor"==d)}if(f&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(f=!1)}return o.delete(e),o.delete(t),f},iS=Fa(Go,"DataView"),oS=xs,aS=Fa(Go,"Promise"),sS=Fa(Go,"Set"),lS=Fa(Go,"WeakMap"),cS=la,dS=Ta,uS="[object Map]",hS="[object Promise]",fS="[object Set]",pS="[object WeakMap]",gS="[object DataView]",mS=dS(iS),bS=dS(oS),vS=dS(aS),yS=dS(sS),xS=dS(lS),wS=cS;(iS&&wS(new iS(new ArrayBuffer(1)))!=gS||oS&&wS(new oS)!=uS||aS&&wS(aS.resolve())!=hS||sS&&wS(new sS)!=fS||lS&&wS(new lS)!=pS)&&(wS=function(e){var t=cS(e),n="[object Object]"==t?e.constructor:void 0,r=n?dS(n):"";if(r)switch(r){case mS:return gS;case bS:return uS;case vS:return hS;case yS:return fS;case xS:return pS}return t});var $S=wS,SS=_w,kS=Rw,OS=Kw,CS=rS,TS=$S,DS=Uo,jS=p$,_S=j$,IS="[object Arguments]",MS="[object Array]",ES="[object Object]",AS=Object.prototype.hasOwnProperty;var NS=function(e,t,n,r,i,o){var a=DS(e),s=DS(t),l=a?MS:TS(e),c=s?MS:TS(t),d=(l=l==IS?ES:l)==ES,u=(c=c==IS?ES:c)==ES,h=l==c;if(h&&jS(e)){if(!jS(t))return!1;a=!0,d=!1}if(h&&!d)return o||(o=new SS),a||_S(e)?kS(e,t,n,r,i,o):OS(e,t,l,n,r,i,o);if(!(1&n)){var f=d&&AS.call(e,"__wrapped__"),p=u&&AS.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return o||(o=new SS),i(g,m,n,r,o)}}return!!h&&(o||(o=new SS),CS(e,t,n,r,i,o))},BS=ca;var LS=function e(t,n,r,i,o){return t===n||(null==t||null==n||!BS(t)&&!BS(n)?t!=t&&n!=n:NS(t,n,r,i,e,o))},RS=_w,PS=LS;var FS=va;var zS=function(e){return e==e&&!FS(e)},HS=zS,WS=Z$;var VS=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},YS=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new RS;if(r)var h=r(c,d,l,e,t,u);if(!(void 0===h?PS(d,c,3,r,u):h))return!1}}return!0},US=function(e){for(var t=WS(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,HS(i)]}return t},KS=VS;var XS=nl,qS=u$,GS=Uo,ZS=m$,QS=b$,JS=il;var ek=function(e,t){return null!=e&&t in Object(e)},tk=function(e,t,n){for(var r=-1,i=(t=XS(t,e)).length,o=!1;++r<i;){var a=JS(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&QS(i)&&ZS(a,i)&&(GS(e)||qS(e))};var nk=LS,rk=cl,ik=function(e,t){return null!=e&&tk(e,t,ek)},ok=ba,ak=zS,sk=VS,lk=il;var ck=sl;var dk=function(e){return function(t){return null==t?void 0:t[e]}},uk=function(e){return function(t){return ck(t,e)}},hk=ba,fk=il;var pk=function(e){var t=US(e);return 1==t.length&&t[0][2]?KS(t[0][0],t[0][1]):function(n){return n===e||YS(n,e,t)}},gk=function(e,t){return ok(e)&&ak(t)?sk(lk(e),t):function(n){var r=rk(n,e);return void 0===r&&r===t?ik(n,e):nk(t,r,3)}},mk=function(e){return e},bk=Uo,vk=function(e){return hk(e)?dk(fk(e)):uk(e)};var yk=function(e){return"function"==typeof e?e:null==e?mk:"object"==typeof e?bk(e)?gk(e[0],e[1]):pk(e):vk(e)},xk=yk,wk=K$,$k=Z$;var Sk=function(e){return function(t,n,r){var i=Object(t);if(!wk(t)){var o=xk(n);t=$k(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var kk=hh,Ok=1/0;var Ck=function(e){return e?(e=kk(e))===Ok||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Tk=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Dk=yk,jk=function(e){var t=Ck(e),n=t%1;return t==t?n?t-n:t:0},_k=Math.max;var Ik=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:jk(n);return i<0&&(i=_k(r+i,0)),Tk(e,Dk(t),i)},Mk=Vo(Ik),Ek=Vo(Sk(Ik)),Ak=LS;var Nk=Vo((function(e,t){return Ak(e,t)}));const Bk=I(Ho.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Lk=I.ul`
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
        background: ${ml.Neutral[4]};
        border-right: 5px solid ${ml.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${yl.MaxWidth.mobileL} {
        max-height: 15rem;
    }
`,Rk=I.li`
    :hover,
    :focus,
    :active {
        background: ${ml.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return M`
                background: ${ml.Accent.Light[5]};
            `}}
`,Pk=I.button`
    display: flex;
    ${e=>e.$multiSelect?M`
                padding: 0.5rem 1rem;
            `:M`
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
        outline-color: ${ml.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Fk=M`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,zk=I.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${ml.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Fk}
`,Hk=I.div`
    color: ${ml.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Fk}

    ${e=>"next-line"===e.$labelDisplayType?M`
                    ${Al.getTextStyle("BodySmall","semibold")}
                `:M`
                    ${Al.getTextStyle("Body","regular")}
                `}
`,Wk=I.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return M`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return M`
                    ${zk} {
                        display: inline;
                    }

                    ${Hk} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Vk=I.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Yk=I.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Uk=I(eh)`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Kk=I.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Xk=I.button`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${ml.Primary(e)};\n\t\t`}
`,qk=I.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Gk=I.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,Zk=I(L)`
    ${e=>{const t="small"===e.$variant?1:1.5;return M`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${ml.Validation.Red.Icon};
`,Qk=e=>"small"===e?1:1.375,Jk=e=>M`
        height: ${Qk(e)}rem;
        width: ${Qk(e)}rem;
    `,eO=I.li`
    background: ${ml.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,tO=I(Kf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,nO=I(Re)`
    ${e=>Jk(e.$variant)}
    margin: 0 0.5rem;
    color: ${ml.Neutral[3]};
`,rO=I($l)`
    ${e=>Jk(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${ml.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return M`
                svg {
                    ${Jk(e.$variant)}
                }
            `}}
`,iO=f(((n,r)=>{const{onClear:i}=n,o=lt(n,["onClear"]);return t(eO,{children:[e(nO,{$variant:n.variant}),e(tO,Object.assign({ref:r,$variant:n.variant},o)),o.value&&e(rO,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:n.variant},{children:e(J,{})}))]},"search")})),oO=r=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:f,searchPlaceholder:p="Search",onSearch:g,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:S="success",itemTruncationType:k="end",itemMaxLines:O=2,labelDisplayType:C="inline",renderListItem:T,onBlur:D,hideNoResultsDisplay:j,renderCustomCallToAction:_,variant:I="default"}=r,M=lt(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[E,A]=a(0),[N,B]=a(""),[L,R]=a(i),[P,F]=a(0),z=ko({height:P}),H=o(),W=o(),V=o([]),Y=o(),U=o(),K=o(E),X=o(L),q=e=>{K.current=e,A(e)},G=e=>{X.current=e,R(e)};u((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),u((()=>{ee(N)}),[N]),u((()=>{if(B(""),h){if(setTimeout((()=>{F(te())})),v)return;Y&&Y.current?(Y.current.focus(),q(-1)):V.current[E]&&V.current[E].focus()}else F(0)}),[h]),u((()=>{if(h){const e=te();F(e)}}),[L,S]),u((()=>{G(i),B(""),q(0)}),[i]);const Z=e=>s?s(e):e.toString(),Q=e=>{if("inline"!==C)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return Td.getTextWidth(e,"1.125rem 'Open Sans'")>t*O},J=e=>!!Ek(x,(t=>Nk(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var n;const r=Z(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));G(t)}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<X.current.length-1){const e=K.current+1;V.current[e].focus(),q(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;V.current[e].focus(),q(K.current-1)}break;case"Escape":b&&b(!0)}},re=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;B(t),g&&g()},oe=()=>{B(""),Y.current.focus(),g&&g()},ae=()=>{$&&$()},se=()=>{D&&D()},le=r=>t(n,{children:[e(Vk,Object.assign({$maxLines:O,"aria-hidden":!0},{children:r})),e(Yk,Object.assign({$maxLines:O,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=Z(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=Q(i),s=o&&Q(o),l=a||s?"next-line":C;return t(Wk,Object.assign({$labelDisplayType:l},{children:[e(zk,Object.assign({$truncateType:k,$maxLines:O,$variant:I,"aria-label":i},{children:"middle"===k&&a?le(i):i})),o&&e(Hk,Object.assign({$truncateType:k,$maxLines:O,$labelDisplayType:C,"aria-label":o},{children:"middle"===k&&s?le(o):o}))]}))},de=()=>{if(!$||$&&"success"===S)return L.map(((n,r)=>e(Rk,Object.assign({$checked:J(n)&&!y},{children:t(Pk,Object.assign({$hasNextLineLabel:"next-line"===C&&L.length>0&&s&&"string"!=typeof s(L[0]),onClick:e=>{re(e,n)},ref:e=>V.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:y,onBlur:se,$variant:I},{children:[y&&e(Uk,{checked:J(n),displaySize:"small"}),T?T(n,{selected:J(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},ue=()=>{if(y&&L.length>0&&!N&&"success"===S)return e(Kk,{children:e(Xk,Object.assign({onClick:w,type:"button",$variant:I},{children:0===x.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!j&&(N||!f)&&0===L.length&&"success"===S)return t(qk,Object.assign({"data-testid":"list-no-results"},{children:[e(Zk,{"data-testid":"no-result-icon",$variant:I}),e(Gk,Object.assign({$variant:I},{children:"No results found."}))]}),"noResults")},fe=()=>{if($&&"loading"===S){const n="small"===I?16:24;return t(qk,Object.assign({"data-testid":"list-loading"},{children:[e(lc,{$buttonStyle:"secondary",size:n}),e(Gk,Object.assign({$variant:I},{children:"Loading..."}))]}),"loading")}},pe=()=>{if($&&"fail"===S)return t(qk,Object.assign({"data-testid":"list-fail"},{children:[e(Zk,{"data-testid":"load-error-icon",$variant:I}),e(Gk,Object.assign({$variant:I},{children:"Failed to load."}))," ",e(Xk,Object.assign({onClick:ae,type:"button",$variant:I},{children:"Try again."}))]}),"noResults")};return e(n,{children:t(Bk,Object.assign({style:z,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:H},{children:[(()=>{if(h)return t(Lk,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},M,{children:[(f||m)&&"success"===S?e(iO,{ref:Y,onChange:ie,value:N,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:I}):null,ue(),he(),fe(),pe(),de()]}))})(),(()=>{if(h&&_)return e("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:_(b,L)}))})()]}))})},aO=I.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return M`
                border-bottom: 1px solid ${ml.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?M`
                border: 0;
                margin: 0;
            `:"right"===e.$position?M`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:M`
                        flex-direction: row;
                    `}
`,sO=I(Tf)`
    padding: 0;
    width: auto;
`,lO=I.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,cO=I.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Pl.Base};
    margin: 0 0.75rem;
`,dO=I(fe)`
    color: ${ml.Neutral[3]};
    height: ${Dl.Body.fontSize}rem;
    width: ${Dl.Body.fontSize}rem;
    vertical-align: bottom;
`,uO=I.div`
    display: flex;
    flex: 1 1 auto;
`,hO=I(Nl.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,fO=I(hO)`
    color: ${ml.Neutral[3]};
`,pO=I.div`
    width: 1px;
    background: ${ml.Neutral[5]};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return M`
                display: none;
            `}}

    ${e=>"right"===e.$position?M`
                    margin: 0 0.75rem;
                `:M`
                    margin: 0 0.75rem 0 0;
                `}
`,gO=i.forwardRef(((r,i)=>{var{addon:s,error:l,onChange:c,readOnly:d,className:h,onBlur:f}=r,p=lt(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:g,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:S,onSelectOption:k,onHideOptions:O,onShowOptions:C,"data-selector-testid":T}=s.attributes,{position:D}=s,[j,_]=a(S),[I,M]=a(!1),E=o();u((()=>{_(S)}),[S]);const A=()=>$?$(j):x?x(j):j.toString(),N=e=>{!e&&O&&O(),e&&C&&C()},B=e=>{e.preventDefault(),p.disabled||(M(!I),N(!I))},L=(e,t)=>{_(e),M(!1),N(!1),E&&E.current.focus(),k&&k(e,t)},R=e=>{c&&c(e)},P=()=>{f&&f()},F=()=>{M(!1),N(!1),E&&E.current.focus()};return t(Nf,Object.assign({className:h,show:I,error:l&&!I,disabled:p.disabled,readOnly:d,onBlur:()=>{M(!1),N(!1),P()}},{children:[t(aO,Object.assign({$expanded:I,$readOnly:d,$position:D},{children:[d?j?e(lO,{children:e(hO,Object.assign({"data-testid":"selector-label"},{children:A()}))}):null:e(sO,Object.assign({ref:E,type:"button",disabled:p.disabled,"data-testid":T||"addon-selector",onClick:B},{children:t(n,{children:[t(uO,{children:[g&&!j&&e(fO,{children:g}),j&&e(hO,Object.assign({"data-testid":"selector-label"},{children:A()}))]}),e(cO,Object.assign({$expanded:I},{children:e(dO,{})}))]})})),e(pO,{$readOnly:d,$position:D}),e(bw,Object.assign({ref:i},p,{readOnly:d,error:l,onChange:R,"data-testid":p["data-testid"]||"input",onBlur:P}))]})),m&&m.length>0?e(oO,{listItems:m,selectedItems:S?[S]:[],onSelectItem:L,valueExtractor:x,listExtractor:w,visible:I,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:P,onDismiss:F}):null]}))})),mO=i.forwardRef(((n,r)=>{var{addon:i,error:o,className:a}=n,s=lt(n,["addon","error","className"]);const l=()=>e(mw,Object.assign({disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a},{children:e(bw,Object.assign({ref:r},s,{"data-testid":"input"}))}));if(!i)return l();{const{type:n="label",position:c="left"}=i,{allowClear:d}=s;switch(n){case"list":{const t=i.attributes;return t.options&&t.options.length>0?e(gO,Object.assign({ref:r,addon:i,error:o,className:a},s)):l()}case"custom":{const n=i.attributes;return n.children?t(Uf,Object.assign({$error:o,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a},{children:[e(vw,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.children})),e(bw,Object.assign({ref:r},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input"}))]})):l()}default:{const n=i.attributes;return n.value?t(Uf,Object.assign({$disabled:s.disabled,$error:o,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:a},{children:[e(vw,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.value})),e(bw,Object.assign({ref:r},s,{allowClear:d&&"right"!==c,error:o,"data-testid":"input"}))]})):l()}}}})),bO=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:o,label:r,errorMessage:i,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(mO,Object.assign({ref:n,id:`${o}-base`,"data-testid":s||o,error:!!i},h))}))})),vO=I(mO)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":"1rem"};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,yO=I.div`
    display: flex;
    height: calc(3rem - 2px);
    width: 3.25rem;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=ml.Neutral[3],$activeColor:n=ml.Primary})=>e?t:n};

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,xO=I.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,wO=I(Nl.Body)`
    color: ${ml.Neutral[3]};
`,$O=I(nc)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${ml.Neutral[3]} transparent transparent transparent;
    }
`,SO=I(Nl.Body)`
    color: ${ml.Primary};
    text-decoration: underline;
`,kO=I.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`,OO=I(ze)`
    color: ${ml.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,CO=I(Nl.Body)`
    color: ${ml.Validation.Orange.Text};
`,TO=I.button`
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
        ${SO} {
            color: ${ml.Secondary};
        }
    }
`;var DO,jO,_O={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */DO=_O,jO=_O.exports,function(){var e,t="Expected a function",n="__lodash_hash_undefined__",r="__lodash_placeholder__",i=16,o=32,a=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,f=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",i],["flip",512],["partial",o],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",S="[object Object]",k="[object Promise]",O="[object RegExp]",C="[object Set]",T="[object String]",D="[object Symbol]",j="[object WeakMap]",_="[object ArrayBuffer]",I="[object DataView]",M="[object Float32Array]",E="[object Float64Array]",A="[object Int8Array]",N="[object Int16Array]",B="[object Int32Array]",L="[object Uint8Array]",R="[object Uint8ClampedArray]",P="[object Uint16Array]",F="[object Uint32Array]",z=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,Y=/[&<>"']/g,U=RegExp(V.source),K=RegExp(Y.source),X=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),ne=/^\s+/,re=/\s/,ie=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,oe=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Se="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",Ce="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="['’]",De="["+xe+"]",je="["+Ce+"]",_e="["+we+"]",Ie="\\d+",Me="["+$e+"]",Ee="["+Se+"]",Ae="[^"+xe+Ce+Ie+$e+Se+ke+"]",Ne="\\ud83c[\\udffb-\\udfff]",Be="[^"+xe+"]",Le="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+ke+"]",Fe="\\u200d",ze="(?:"+Ee+"|"+Ae+")",He="(?:"+Pe+"|"+Ae+")",We="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ye="(?:"+_e+"|"+Ne+")?",Ue="["+Oe+"]?",Ke=Ue+Ye+"(?:"+Fe+"(?:"+[Be,Le,Re].join("|")+")"+Ue+Ye+")*",Xe="(?:"+[Me,Le,Re].join("|")+")"+Ke,qe="(?:"+[Be+_e+"?",_e,Le,Re,De].join("|")+")",Ge=RegExp(Te,"g"),Ze=RegExp(_e,"g"),Qe=RegExp(Ne+"(?="+Ne+")|"+qe+Ke,"g"),Je=RegExp([Pe+"?"+Ee+"+"+We+"(?="+[je,Pe,"$"].join("|")+")",He+"+"+Ve+"(?="+[je,Pe+ze,"$"].join("|")+")",Pe+"?"+ze+"+"+We,Pe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ie,Xe].join("|"),"g"),et=RegExp("["+Fe+xe+we+Oe+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rt=-1,it={};it[M]=it[E]=it[A]=it[N]=it[B]=it[L]=it[R]=it[P]=it[F]=!0,it[p]=it[g]=it[_]=it[m]=it[I]=it[b]=it[v]=it[y]=it[w]=it[$]=it[S]=it[O]=it[C]=it[T]=it[j]=!1;var ot={};ot[p]=ot[g]=ot[_]=ot[I]=ot[m]=ot[b]=ot[M]=ot[E]=ot[A]=ot[N]=ot[B]=ot[w]=ot[$]=ot[S]=ot[O]=ot[C]=ot[T]=ot[D]=ot[L]=ot[R]=ot[P]=ot[F]=!0,ot[v]=ot[y]=ot[j]=!1;var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,lt=parseInt,ct="object"==typeof Wo&&Wo&&Wo.Object===Object&&Wo,dt="object"==typeof self&&self&&self.Object===Object&&self,ut=ct||dt||Function("return this")(),ht=jO&&!jO.nodeType&&jO,ft=ht&&DO&&!DO.nodeType&&DO,pt=ft&&ft.exports===ht,gt=pt&&ct.process,mt=function(){try{var e=ft&&ft.require&&ft.require("util").types;return e||gt&&gt.binding&&gt.binding("util")}catch(e){}}(),bt=mt&&mt.isArrayBuffer,vt=mt&&mt.isDate,yt=mt&&mt.isMap,xt=mt&&mt.isRegExp,wt=mt&&mt.isSet,$t=mt&&mt.isTypedArray;function St(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function kt(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(r,a,n(a),e)}return r}function Ot(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Ct(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Dt(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function jt(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function _t(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function It(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Mt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Et(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function At(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Nt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Bt=Wt("length");function Lt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Rt(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Pt(e,t,n){return t==t?function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Rt(e,zt,n)}function Ft(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function zt(e){return e!=e}function Ht(e,t){var n=null==e?0:e.length;return n?Ut(e,t)/n:u}function Wt(t){return function(n){return null==n?e:n[t]}}function Vt(t){return function(n){return null==t?e:t[n]}}function Yt(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Ut(t,n){for(var r,i=-1,o=t.length;++i<o;){var a=n(t[i]);a!==e&&(r=r===e?a:r+a)}return r}function Kt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Xt(e){return e?e.slice(0,hn(e)+1).replace(ne,""):e}function qt(e){return function(t){return e(t)}}function Gt(e,t){return It(t,(function(t){return e[t]}))}function Zt(e,t){return e.has(t)}function Qt(e,t){for(var n=-1,r=e.length;++n<r&&Pt(t,e[n],0)>-1;);return n}function Jt(e,t){for(var n=e.length;n--&&Pt(t,e[n],0)>-1;);return n}var en=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tn=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nn(e){return"\\"+at[e]}function rn(e){return et.test(e)}function on(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function an(e,t){return function(n){return e(t(n))}}function sn(e,t){for(var n=-1,i=e.length,o=0,a=[];++n<i;){var s=e[n];s!==t&&s!==r||(e[n]=r,a[o++]=n)}return a}function ln(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function dn(e){return rn(e)?function(e){for(var t=Qe.lastIndex=0;Qe.test(e);)++t;return t}(e):Bt(e)}function un(e){return rn(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function hn(e){for(var t=e.length;t--&&re.test(e.charAt(t)););return t}var fn=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pn=function re(xe){var we=(xe=null==xe?ut:pn.defaults(ut.Object(),xe,pn.pick(ut,nt))).Array,$e=xe.Date,Se=xe.Error,ke=xe.Function,Oe=xe.Math,Ce=xe.Object,Te=xe.RegExp,De=xe.String,je=xe.TypeError,_e=we.prototype,Ie=ke.prototype,Me=Ce.prototype,Ee=xe["__core-js_shared__"],Ae=Ie.toString,Ne=Me.hasOwnProperty,Be=0,Le=function(){var e=/[^.]+$/.exec(Ee&&Ee.keys&&Ee.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Me.toString,Pe=Ae.call(Ce),Fe=ut._,ze=Te("^"+Ae.call(Ne).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=pt?xe.Buffer:e,We=xe.Symbol,Ve=xe.Uint8Array,Ye=He?He.allocUnsafe:e,Ue=an(Ce.getPrototypeOf,Ce),Ke=Ce.create,Xe=Me.propertyIsEnumerable,qe=_e.splice,Qe=We?We.isConcatSpreadable:e,et=We?We.iterator:e,at=We?We.toStringTag:e,ct=function(){try{var e=ho(Ce,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ut.clearTimeout&&xe.clearTimeout,ht=$e&&$e.now!==ut.Date.now&&$e.now,ft=xe.setTimeout!==ut.setTimeout&&xe.setTimeout,gt=Oe.ceil,mt=Oe.floor,Bt=Ce.getOwnPropertySymbols,Vt=He?He.isBuffer:e,gn=xe.isFinite,mn=_e.join,bn=an(Ce.keys,Ce),vn=Oe.max,yn=Oe.min,xn=$e.now,wn=xe.parseInt,$n=Oe.random,Sn=_e.reverse,kn=ho(xe,"DataView"),On=ho(xe,"Map"),Cn=ho(xe,"Promise"),Tn=ho(xe,"Set"),Dn=ho(xe,"WeakMap"),jn=ho(Ce,"create"),_n=Dn&&new Dn,In={},Mn=Ro(kn),En=Ro(On),An=Ro(Cn),Nn=Ro(Tn),Bn=Ro(Dn),Ln=We?We.prototype:e,Rn=Ln?Ln.valueOf:e,Pn=Ln?Ln.toString:e;function Fn(e){if(ts(e)&&!Va(e)&&!(e instanceof Vn)){if(e instanceof Wn)return e;if(Ne.call(e,"__wrapped__"))return Po(e)}return new Wn(e)}var zn=function(){function t(){}return function(n){if(!es(n))return{};if(Ke)return Ke(n);t.prototype=n;var r=new t;return t.prototype=e,r}}();function Hn(){}function Wn(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=e}function Vn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Xn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Kn;++t<n;)this.add(e[t])}function qn(e){var t=this.__data__=new Un(e);this.size=t.size}function Gn(e,t){var n=Va(e),r=!n&&Wa(e),i=!n&&!r&&Xa(e),o=!n&&!r&&!i&&cs(e),a=n||r||i||o,s=a?Kt(e.length,De):[],l=s.length;for(var c in e)!t&&!Ne.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Zn(t){var n=t.length;return n?t[Xr(0,n-1)]:e}function Qn(e,t){return No(ji(e),sr(t,0,e.length))}function Jn(e){return No(ji(e))}function er(t,n,r){(r!==e&&!Fa(t[n],r)||r===e&&!(n in t))&&or(t,n,r)}function tr(t,n,r){var i=t[n];Ne.call(t,n)&&Fa(i,r)&&(r!==e||n in t)||or(t,n,r)}function nr(e,t){for(var n=e.length;n--;)if(Fa(e[n][0],t))return n;return-1}function rr(e,t,n,r){return hr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function ir(e,t){return e&&_i(t,Is(t),e)}function or(e,t,n){"__proto__"==t&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ar(t,n){for(var r=-1,i=n.length,o=we(i),a=null==t;++r<i;)o[r]=a?e:Cs(t,n[r]);return o}function sr(t,n,r){return t==t&&(r!==e&&(t=t<=r?t:r),n!==e&&(t=t>=n?t:n)),t}function lr(t,n,r,i,o,a){var s,l=1&n,c=2&n,d=4&n;if(r&&(s=o?r(t,i,o,a):r(t)),s!==e)return s;if(!es(t))return t;var u=Va(t);if(u){if(s=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Ne.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(t),!l)return ji(t,s)}else{var h=go(t),f=h==y||h==x;if(Xa(t))return Si(t,l);if(h==S||h==p||f&&!o){if(s=c||f?{}:bo(t),!l)return c?function(e,t){return _i(e,po(e),t)}(t,function(e,t){return e&&_i(t,Ms(t),e)}(s,t)):function(e,t){return _i(e,fo(e),t)}(t,ir(s,t))}else{if(!ot[h])return o?t:{};s=function(e,t,n){var r,i=e.constructor;switch(t){case _:return ki(e);case m:case b:return new i(+e);case I:return function(e,t){var n=t?ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case M:case E:case A:case N:case B:case L:case R:case P:case F:return Oi(e,n);case w:return new i;case $:case T:return new i(e);case O:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case C:return new i;case D:return r=e,Rn?Ce(Rn.call(r)):{}}}(t,h,l)}}a||(a=new qn);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(lr(e,n,r,e,t,a))})):ns(t)&&t.forEach((function(e,i){s.set(i,lr(e,n,r,i,t,a))}));var v=u?e:(d?c?io:ro:c?Ms:Is)(t);return Ot(v||t,(function(e,i){v&&(e=t[i=e]),tr(s,i,lr(e,n,r,i,t,a))})),s}function cr(t,n,r){var i=r.length;if(null==t)return!i;for(t=Ce(t);i--;){var o=r[i],a=n[o],s=t[o];if(s===e&&!(o in t)||!a(s))return!1}return!0}function dr(n,r,i){if("function"!=typeof n)throw new je(t);return Io((function(){n.apply(e,i)}),r)}function ur(e,t,n,r){var i=-1,o=jt,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;n&&(t=It(t,qt(n))),r?(o=_t,a=!1):t.length>=200&&(o=Zt,a=!1,t=new Xn(t));e:for(;++i<s;){var d=e[i],u=null==n?d:n(d);if(d=r||0!==d?d:0,a&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else o(t,u,r)||l.push(d)}return l}Fn.templateSettings={escape:X,evaluate:q,interpolate:G,variable:"",imports:{_:Fn}},Fn.prototype=Hn.prototype,Fn.prototype.constructor=Fn,Wn.prototype=zn(Hn.prototype),Wn.prototype.constructor=Wn,Vn.prototype=zn(Hn.prototype),Vn.prototype.constructor=Vn,Yn.prototype.clear=function(){this.__data__=jn?jn(null):{},this.size=0},Yn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yn.prototype.get=function(t){var r=this.__data__;if(jn){var i=r[t];return i===n?e:i}return Ne.call(r,t)?r[t]:e},Yn.prototype.has=function(t){var n=this.__data__;return jn?n[t]!==e:Ne.call(n,t)},Yn.prototype.set=function(t,r){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=jn&&r===e?n:r,this},Un.prototype.clear=function(){this.__data__=[],this.size=0},Un.prototype.delete=function(e){var t=this.__data__,n=nr(t,e);return!(n<0||(n==t.length-1?t.pop():qe.call(t,n,1),--this.size,0))},Un.prototype.get=function(t){var n=this.__data__,r=nr(n,t);return r<0?e:n[r][1]},Un.prototype.has=function(e){return nr(this.__data__,e)>-1},Un.prototype.set=function(e,t){var n=this.__data__,r=nr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Kn.prototype.clear=function(){this.size=0,this.__data__={hash:new Yn,map:new(On||Un),string:new Yn}},Kn.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Kn.prototype.get=function(e){return co(this,e).get(e)},Kn.prototype.has=function(e){return co(this,e).has(e)},Kn.prototype.set=function(e,t){var n=co(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Xn.prototype.add=Xn.prototype.push=function(e){return this.__data__.set(e,n),this},Xn.prototype.has=function(e){return this.__data__.has(e)},qn.prototype.clear=function(){this.__data__=new Un,this.size=0},qn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},qn.prototype.get=function(e){return this.__data__.get(e)},qn.prototype.has=function(e){return this.__data__.has(e)},qn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Un){var r=n.__data__;if(!On||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Kn(r)}return n.set(e,t),this.size=n.size,this};var hr=Ei(xr),fr=Ei(wr,!0);function pr(e,t){var n=!0;return hr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function gr(t,n,r){for(var i=-1,o=t.length;++i<o;){var a=t[i],s=n(a);if(null!=s&&(l===e?s==s&&!ls(s):r(s,l)))var l=s,c=a}return c}function mr(e,t){var n=[];return hr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function br(e,t,n,r,i){var o=-1,a=e.length;for(n||(n=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&n(s)?t>1?br(s,t-1,n,r,i):Mt(i,s):r||(i[i.length]=s)}return i}var vr=Ai(),yr=Ai(!0);function xr(e,t){return e&&vr(e,t,Is)}function wr(e,t){return e&&yr(e,t,Is)}function $r(e,t){return Dt(t,(function(t){return Za(e[t])}))}function Sr(t,n){for(var r=0,i=(n=yi(n,t)).length;null!=t&&r<i;)t=t[Lo(n[r++])];return r&&r==i?t:e}function kr(e,t,n){var r=t(e);return Va(e)?r:Mt(r,n(e))}function Or(t){return null==t?t===e?"[object Undefined]":"[object Null]":at&&at in Ce(t)?function(t){var n=Ne.call(t,at),r=t[at];try{t[at]=e;var i=!0}catch(e){}var o=Re.call(t);return i&&(n?t[at]=r:delete t[at]),o}(t):function(e){return Re.call(e)}(t)}function Cr(e,t){return e>t}function Tr(e,t){return null!=e&&Ne.call(e,t)}function Dr(e,t){return null!=e&&t in Ce(e)}function jr(t,n,r){for(var i=r?_t:jt,o=t[0].length,a=t.length,s=a,l=we(a),c=1/0,d=[];s--;){var u=t[s];s&&n&&(u=It(u,qt(n))),c=yn(u.length,c),l[s]=!r&&(n||o>=120&&u.length>=120)?new Xn(s&&u):e}u=t[0];var h=-1,f=l[0];e:for(;++h<o&&d.length<c;){var p=u[h],g=n?n(p):p;if(p=r||0!==p?p:0,!(f?Zt(f,g):i(d,g,r))){for(s=a;--s;){var m=l[s];if(!(m?Zt(m,g):i(t[s],g,r)))continue e}f&&f.push(g),d.push(p)}}return d}function _r(t,n,r){var i=null==(t=Do(t,n=yi(n,t)))?t:t[Lo(Go(n))];return null==i?e:St(i,t,r)}function Ir(e){return ts(e)&&Or(e)==p}function Mr(t,n,r,i,o){return t===n||(null==t||null==n||!ts(t)&&!ts(n)?t!=t&&n!=n:function(t,n,r,i,o,a){var s=Va(t),l=Va(n),c=s?g:go(t),d=l?g:go(n),u=(c=c==p?S:c)==S,h=(d=d==p?S:d)==S,f=c==d;if(f&&Xa(t)){if(!Xa(n))return!1;s=!0,u=!1}if(f&&!u)return a||(a=new qn),s||cs(t)?to(t,n,r,i,o,a):function(e,t,n,r,i,o,a){switch(n){case I:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!o(new Ve(e),new Ve(t)));case m:case b:case $:return Fa(+e,+t);case v:return e.name==t.name&&e.message==t.message;case O:case T:return e==t+"";case w:var s=on;case C:var l=1&r;if(s||(s=ln),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var d=to(s(e),s(t),r,i,o,a);return a.delete(e),d;case D:if(Rn)return Rn.call(e)==Rn.call(t)}return!1}(t,n,c,r,i,o,a);if(!(1&r)){var y=u&&Ne.call(t,"__wrapped__"),x=h&&Ne.call(n,"__wrapped__");if(y||x){var k=y?t.value():t,j=x?n.value():n;return a||(a=new qn),o(k,j,r,i,a)}}return!!f&&(a||(a=new qn),function(t,n,r,i,o,a){var s=1&r,l=ro(t),c=l.length,d=ro(n),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var f=l[h];if(!(s?f in n:Ne.call(n,f)))return!1}var p=a.get(t),g=a.get(n);if(p&&g)return p==n&&g==t;var m=!0;a.set(t,n),a.set(n,t);for(var b=s;++h<c;){var v=t[f=l[h]],y=n[f];if(i)var x=s?i(y,v,f,n,t,a):i(v,y,f,t,n,a);if(!(x===e?v===y||o(v,y,r,i,a):x)){m=!1;break}b||(b="constructor"==f)}if(m&&!b){var w=t.constructor,$=n.constructor;w==$||!("constructor"in t)||!("constructor"in n)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(n),m}(t,n,r,i,o,a))}(t,n,r,i,Mr,o))}function Er(t,n,r,i){var o=r.length,a=o,s=!i;if(null==t)return!a;for(t=Ce(t);o--;){var l=r[o];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++o<a;){var c=(l=r[o])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new qn;if(i)var f=i(d,u,c,t,n,h);if(!(f===e?Mr(u,d,3,i,h):f))return!1}}return!0}function Ar(e){return!(!es(e)||(t=e,Le&&Le in t))&&(Za(e)?ze:pe).test(Ro(e));var t}function Nr(e){return"function"==typeof e?e:null==e?rl:"object"==typeof e?Va(e)?zr(e[0],e[1]):Fr(e):hl(e)}function Br(e){if(!ko(e))return bn(e);var t=[];for(var n in Ce(e))Ne.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Lr(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var n in Ce(e))t.push(n);return t}(e);var t=ko(e),n=[];for(var r in e)("constructor"!=r||!t&&Ne.call(e,r))&&n.push(r);return n}function Rr(e,t){return e<t}function Pr(e,t){var n=-1,r=Ua(e)?we(e.length):[];return hr(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}function Fr(e){var t=uo(e);return 1==t.length&&t[0][2]?Co(t[0][0],t[0][1]):function(n){return n===e||Er(n,e,t)}}function zr(t,n){return wo(t)&&Oo(n)?Co(Lo(t),n):function(r){var i=Cs(r,t);return i===e&&i===n?Ts(r,t):Mr(n,i,3)}}function Hr(t,n,r,i,o){t!==n&&vr(n,(function(a,s){if(o||(o=new qn),es(a))!function(t,n,r,i,o,a,s){var l=jo(t,r),c=jo(n,r),d=s.get(c);if(d)er(t,r,d);else{var u=a?a(l,c,r+"",t,n,s):e,h=u===e;if(h){var f=Va(c),p=!f&&Xa(c),g=!f&&!p&&cs(c);u=c,f||p||g?Va(l)?u=l:Ka(l)?u=ji(l):p?(h=!1,u=Si(c,!0)):g?(h=!1,u=Oi(c,!0)):u=[]:is(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):h=!1}h&&(s.set(c,u),o(u,c,i,a,s),s.delete(c)),er(t,r,u)}}(t,n,s,r,Hr,i,o);else{var l=i?i(jo(t,s),a,s+"",t,n,o):e;l===e&&(l=a),er(t,s,l)}}),Ms)}function Wr(t,n){var r=t.length;if(r)return yo(n+=n<0?r:0,r)?t[n]:e}function Vr(e,t,n){t=t.length?It(t,(function(e){return Va(e)?function(t){return Sr(t,1===e.length?e[0]:e)}:e})):[rl];var r=-1;t=It(t,qt(lo()));var i=Pr(e,(function(e,n,i){var o=It(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,a=i.length,s=n.length;++r<a;){var l=Ci(i[r],o[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Yr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var a=t[r],s=Sr(e,a);n(s,a)&&Jr(o,yi(a,e),s)}return o}function Ur(e,t,n,r){var i=r?Ft:Pt,o=-1,a=t.length,s=e;for(e===t&&(t=ji(t)),n&&(s=It(e,qt(n)));++o<a;)for(var l=0,c=t[o],d=n?n(c):c;(l=i(s,d,l,r))>-1;)s!==e&&qe.call(s,l,1),qe.call(e,l,1);return e}function Kr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;yo(i)?qe.call(e,i,1):ui(e,i)}}return e}function Xr(e,t){return e+mt($n()*(t-e+1))}function qr(e,t){var n="";if(!e||t<1||t>d)return n;do{t%2&&(n+=e),(t=mt(t/2))&&(e+=e)}while(t);return n}function Gr(e,t){return Mo(To(e,t,rl),e+"")}function Zr(e){return Zn(Fs(e))}function Qr(e,t){var n=Fs(e);return No(n,sr(t,0,n.length))}function Jr(t,n,r,i){if(!es(t))return t;for(var o=-1,a=(n=yi(n,t)).length,s=a-1,l=t;null!=l&&++o<a;){var c=Lo(n[o]),d=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=s){var u=l[c];(d=i?i(u,c,l):e)===e&&(d=es(u)?u:yo(n[o+1])?[]:{})}tr(l,c,d),l=l[c]}return t}var ei=_n?function(e,t){return _n.set(e,t),e}:rl,ti=ct?function(e,t){return ct(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:rl;function ni(e){return No(Fs(e))}function ri(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=we(i);++r<i;)o[r]=e[r+t];return o}function ii(e,t){var n;return hr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function oi(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,a=e[o];null!==a&&!ls(a)&&(n?a<=t:a<t)?r=o+1:i=o}return i}return ai(e,t,rl,n)}function ai(t,n,r,i){var o=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(n=r(n))!=n,l=null===n,c=ls(n),d=n===e;o<a;){var u=mt((o+a)/2),h=r(t[u]),f=h!==e,p=null===h,g=h==h,m=ls(h);if(s)var b=i||g;else b=d?g&&(i||f):l?g&&f&&(i||!p):c?g&&f&&!p&&(i||!m):!p&&!m&&(i?h<=n:h<n);b?o=u+1:a=u}return yn(a,4294967294)}function si(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!Fa(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?u:+e}function ci(e){if("string"==typeof e)return e;if(Va(e))return It(e,ci)+"";if(ls(e))return Pn?Pn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,n){var r=-1,i=jt,o=e.length,a=!0,s=[],l=s;if(n)a=!1,i=_t;else if(o>=200){var c=t?null:qi(e);if(c)return ln(c);a=!1,i=Zt,l=new Xn}else l=t?[]:s;e:for(;++r<o;){var d=e[r],u=t?t(d):d;if(d=n||0!==d?d:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,n)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Do(e,t=yi(t,e)))||delete e[Lo(Go(t))]}function hi(e,t,n,r){return Jr(e,t,n(Sr(e,t)),r)}function fi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?ri(e,r?0:o,r?o+1:i):ri(e,r?o+1:0,r?i:o)}function pi(e,t){var n=e;return n instanceof Vn&&(n=n.value()),Et(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),n)}function gi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,o=we(r);++i<r;)for(var a=e[i],s=-1;++s<r;)s!=i&&(o[i]=ur(o[i]||a,e[s],t,n));return di(br(o,1),t,n)}function mi(t,n,r){for(var i=-1,o=t.length,a=n.length,s={};++i<o;){var l=i<a?n[i]:e;r(s,t[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:rl}function yi(e,t){return Va(e)?e:wo(e,t)?[e]:Bo(vs(e))}var xi=Gr;function wi(t,n,r){var i=t.length;return r=r===e?i:r,!n&&r>=i?t:ri(t,n,r)}var $i=dt||function(e){return ut.clearTimeout(e)};function Si(e,t){if(t)return e.slice();var n=e.length,r=Ye?Ye(n):new e.constructor(n);return e.copy(r),r}function ki(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function Oi(e,t){var n=t?ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ci(t,n){if(t!==n){var r=t!==e,i=null===t,o=t==t,a=ls(t),s=n!==e,l=null===n,c=n==n,d=ls(n);if(!l&&!d&&!a&&t>n||a&&s&&c&&!l&&!d||i&&s&&c||!r&&c||!o)return 1;if(!i&&!a&&!d&&t<n||d&&r&&o&&!i&&!a||l&&r&&o||!s&&o||!c)return-1}return 0}function Ti(e,t,n,r){for(var i=-1,o=e.length,a=n.length,s=-1,l=t.length,c=vn(o-a,0),d=we(l+c),u=!r;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[n[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Di(e,t,n,r){for(var i=-1,o=e.length,a=-1,s=n.length,l=-1,c=t.length,d=vn(o-s,0),u=we(d+c),h=!r;++i<d;)u[i]=e[i];for(var f=i;++l<c;)u[f+l]=t[l];for(;++a<s;)(h||i<o)&&(u[f+n[a]]=e[i++]);return u}function ji(e,t){var n=-1,r=e.length;for(t||(t=we(r));++n<r;)t[n]=e[n];return t}function _i(t,n,r,i){var o=!r;r||(r={});for(var a=-1,s=n.length;++a<s;){var l=n[a],c=i?i(r[l],t[l],l,r,t):e;c===e&&(c=t[l]),o?or(r,l,c):tr(r,l,c)}return r}function Ii(e,t){return function(n,r){var i=Va(n)?kt:rr,o=t?t():{};return i(n,e,lo(r,2),o)}}function Mi(t){return Gr((function(n,r){var i=-1,o=r.length,a=o>1?r[o-1]:e,s=o>2?r[2]:e;for(a=t.length>3&&"function"==typeof a?(o--,a):e,s&&xo(r[0],r[1],s)&&(a=o<3?e:a,o=1),n=Ce(n);++i<o;){var l=r[i];l&&t(n,l,i,a)}return n}))}function Ei(e,t){return function(n,r){if(null==n)return n;if(!Ua(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Ce(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function Ai(e){return function(t,n,r){for(var i=-1,o=Ce(t),a=r(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===n(o[l],l,o))break}return t}}function Ni(t){return function(n){var r=rn(n=vs(n))?un(n):e,i=r?r[0]:n.charAt(0),o=r?wi(r,1).join(""):n.slice(1);return i[t]()+o}}function Bi(e){return function(t){return Et(Zs(Ws(t).replace(Ge,"")),e,"")}}function Li(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=zn(e.prototype),r=e.apply(n,t);return es(r)?r:n}}function Ri(t){return function(n,r,i){var o=Ce(n);if(!Ua(n)){var a=lo(r,3);n=Is(n),r=function(e){return a(o[e],e,o)}}var s=t(n,r,i);return s>-1?o[a?n[s]:s]:e}}function Pi(n){return no((function(r){var i=r.length,o=i,a=Wn.prototype.thru;for(n&&r.reverse();o--;){var s=r[o];if("function"!=typeof s)throw new je(t);if(a&&!l&&"wrapper"==ao(s))var l=new Wn([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=r[o]),d="wrapper"==c?oo(s):e;l=d&&$o(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&$o(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Va(t))return l.plant(t).value();for(var n=0,o=i?r[n].apply(this,e):t;++n<i;)o=r[n].call(this,o);return o}}))}function Fi(t,n,r,i,o,a,l,c,d,u){var h=n&s,f=1&n,p=2&n,g=24&n,m=512&n,b=p?e:Li(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=so(s),$=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(y,w);if(i&&(y=Ti(y,i,o,g)),a&&(y=Di(y,a,l,g)),v-=$,g&&v<u){var S=sn(y,w);return Ki(t,n,Fi,s.placeholder,r,y,S,c,d,u-v)}var k=f?r:this,O=p?k[t]:t;return v=y.length,c?y=function(t,n){for(var r=t.length,i=yn(n.length,r),o=ji(t);i--;){var a=n[i];t[i]=yo(a,r)?o[a]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ut&&this instanceof s&&(O=b||Li(O)),O.apply(k,y)}}function zi(e,t){return function(n,r){return function(e,t,n,r){return xr(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function Hi(t,n){return function(r,i){var o;if(r===e&&i===e)return n;if(r!==e&&(o=r),i!==e){if(o===e)return i;"string"==typeof r||"string"==typeof i?(r=ci(r),i=ci(i)):(r=li(r),i=li(i)),o=t(r,i)}return o}}function Wi(e){return no((function(t){return t=It(t,qt(lo())),Gr((function(n){var r=this;return e(t,(function(e){return St(e,r,n)}))}))}))}function Vi(t,n){var r=(n=n===e?" ":ci(n)).length;if(r<2)return r?qr(n,t):n;var i=qr(n,gt(t/dn(n)));return rn(n)?wi(un(i),0,t).join(""):i.slice(0,t)}function Yi(t){return function(n,r,i){return i&&"number"!=typeof i&&xo(n,r,i)&&(r=i=e),n=fs(n),r===e?(r=n,n=0):r=fs(r),function(e,t,n,r){for(var i=-1,o=vn(gt((t-e)/(n||1)),0),a=we(o);o--;)a[r?o:++i]=e,e+=n;return a}(n,r,i=i===e?n<r?1:-1:fs(i),t)}}function Ui(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=ms(t),n=ms(n)),e(t,n)}}function Ki(t,n,r,i,s,l,c,d,u,h){var f=8&n;n|=f?o:a,4&(n&=~(f?a:o))||(n&=-4);var p=[t,n,s,f?l:e,f?c:e,f?e:l,f?e:c,d,u,h],g=r.apply(e,p);return $o(t)&&_o(g,p),g.placeholder=i,Eo(g,t,n)}function Xi(e){var t=Oe[e];return function(e,n){if(e=ms(e),(n=null==n?0:yn(ps(n),292))&&gn(e)){var r=(vs(e)+"e").split("e");return+((r=(vs(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var qi=Tn&&1/ln(new Tn([,-0]))[1]==c?function(e){return new Tn(e)}:ll;function Gi(e){return function(t){var n=go(t);return n==w?on(t):n==C?cn(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(n,c,d,u,h,f,p,g){var m=2&c;if(!m&&"function"!=typeof n)throw new je(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),p=p===e?p:vn(ps(p),0),g=g===e?g:ps(g),b-=h?h.length:0,c&a){var v=u,y=h;u=h=e}var x=m?e:oo(n),w=[n,c,d,u,h,v,y,f,p,g];if(x&&function(e,t){var n=e[1],i=t[1],o=n|i,a=o<131,c=i==s&&8==n||i==s&&n==l&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==n;if(!a&&!c)return e;1&i&&(e[2]=t[2],o|=1&n?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Ti(u,d,t[4]):d,e[4]=u?sn(e[3],r):t[4]}(d=t[5])&&(u=e[5],e[5]=u?Di(u,d,t[6]):d,e[6]=u?sn(e[5],r):t[6]),(d=t[7])&&(e[7]=d),i&s&&(e[8]=null==e[8]?t[8]:yn(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o}(w,x),n=w[0],c=w[1],d=w[2],u=w[3],h=w[4],!(g=w[9]=w[9]===e?m?0:n.length:vn(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==i?function(t,n,r){var i=Li(t);return function o(){for(var a=arguments.length,s=we(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:sn(s,c);return(a-=d.length)<r?Ki(t,n,Fi,o.placeholder,e,s,d,e,e,r-a):St(this&&this!==ut&&this instanceof o?i:t,this,s)}}(n,c,g):c!=o&&33!=c||h.length?Fi.apply(e,w):function(e,t,n,r){var i=1&t,o=Li(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=r.length,d=we(c+s),u=this&&this!==ut&&this instanceof t?o:e;++l<c;)d[l]=r[l];for(;s--;)d[l++]=arguments[++a];return St(u,i?n:this,d)}}(n,c,d,u);else var $=function(e,t,n){var r=1&t,i=Li(e);return function t(){return(this&&this!==ut&&this instanceof t?i:e).apply(r?n:this,arguments)}}(n,c,d);return Eo((x?ei:_o)($,w),n,c)}function Qi(t,n,r,i){return t===e||Fa(t,Me[r])&&!Ne.call(i,r)?n:t}function Ji(t,n,r,i,o,a){return es(t)&&es(n)&&(a.set(n,t),Hr(t,n,e,Ji,a),a.delete(n)),t}function eo(t){return is(t)?e:t}function to(t,n,r,i,o,a){var s=1&r,l=t.length,c=n.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(t),u=a.get(n);if(d&&u)return d==n&&u==t;var h=-1,f=!0,p=2&r?new Xn:e;for(a.set(t,n),a.set(n,t);++h<l;){var g=t[h],m=n[h];if(i)var b=s?i(m,g,h,n,t,a):i(g,m,h,t,n,a);if(b!==e){if(b)continue;f=!1;break}if(p){if(!Nt(n,(function(e,t){if(!Zt(p,t)&&(g===e||o(g,e,r,i,a)))return p.push(t)}))){f=!1;break}}else if(g!==m&&!o(g,m,r,i,a)){f=!1;break}}return a.delete(t),a.delete(n),f}function no(t){return Mo(To(t,e,Yo),t+"")}function ro(e){return kr(e,Is,fo)}function io(e){return kr(e,Ms,po)}var oo=_n?function(e){return _n.get(e)}:ll;function ao(e){for(var t=e.name+"",n=In[t],r=Ne.call(In,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Ne.call(Fn,"placeholder")?Fn:e).placeholder}function lo(){var e=Fn.iteratee||il;return e=e===il?Nr:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Is(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Oo(i)]}return t}function ho(t,n){var r=function(t,n){return null==t?e:t[n]}(t,n);return Ar(r)?r:e}var fo=Bt?function(e){return null==e?[]:(e=Ce(e),Dt(Bt(e),(function(t){return Xe.call(e,t)})))}:gl,po=Bt?function(e){for(var t=[];e;)Mt(t,fo(e)),e=Ue(e);return t}:gl,go=Or;function mo(e,t,n){for(var r=-1,i=(t=yi(t,e)).length,o=!1;++r<i;){var a=Lo(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Va(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||ko(e)?{}:zn(Ue(e))}function vo(e){return Va(e)||Wa(e)||!!(Qe&&e&&e[Qe])}function yo(e,t){var n=typeof e;return!!(t=null==t?d:t)&&("number"==n||"symbol"!=n&&me.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,n){if(!es(n))return!1;var r=typeof t;return!!("number"==r?Ua(n)&&yo(t,n.length):"string"==r&&t in n)&&Fa(n[t],e)}function wo(e,t){if(Va(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ls(e))||Q.test(e)||!Z.test(e)||null!=t&&e in Ce(t)}function $o(e){var t=ao(e),n=Fn[t];if("function"!=typeof n||!(t in Vn.prototype))return!1;if(e===n)return!0;var r=oo(n);return!!r&&e===r[0]}(kn&&go(new kn(new ArrayBuffer(1)))!=I||On&&go(new On)!=w||Cn&&go(Cn.resolve())!=k||Tn&&go(new Tn)!=C||Dn&&go(new Dn)!=j)&&(go=function(t){var n=Or(t),r=n==S?t.constructor:e,i=r?Ro(r):"";if(i)switch(i){case Mn:return I;case En:return w;case An:return k;case Nn:return C;case Bn:return j}return n});var So=Ee?Za:ml;function ko(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Me)}function Oo(e){return e==e&&!es(e)}function Co(t,n){return function(r){return null!=r&&r[t]===n&&(n!==e||t in Ce(r))}}function To(t,n,r){return n=vn(n===e?t.length-1:n,0),function(){for(var e=arguments,i=-1,o=vn(e.length-n,0),a=we(o);++i<o;)a[i]=e[n+i];i=-1;for(var s=we(n+1);++i<n;)s[i]=e[i];return s[n]=r(a),St(t,this,s)}}function Do(e,t){return t.length<2?e:Sr(e,ri(t,0,-1))}function jo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var _o=Ao(ei),Io=ft||function(e,t){return ut.setTimeout(e,t)},Mo=Ao(ti);function Eo(e,t,n){var r=t+"";return Mo(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ie,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Ot(f,(function(n){var r="_."+n[0];t&n[1]&&!jt(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(oe);return t?t[1].split(ae):[]}(r),n)))}function Ao(t){var n=0,r=0;return function(){var i=xn(),o=16-(i-r);if(r=i,o>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(e,arguments)}}function No(t,n){var r=-1,i=t.length,o=i-1;for(n=n===e?i:n;++r<n;){var a=Xr(r,o),s=t[a];t[a]=t[r],t[r]=s}return t.length=n,t}var Bo=function(e){var t=Aa(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,n,r,i){t.push(r?i.replace(ce,"$1"):n||e)})),t}));function Lo(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ro(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Vn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=ji(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Fo=Gr((function(e,t){return Ka(e)?ur(e,br(t,1,Ka,!0)):[]})),zo=Gr((function(t,n){var r=Go(n);return Ka(r)&&(r=e),Ka(t)?ur(t,br(n,1,Ka,!0),lo(r,2)):[]})),Ho=Gr((function(t,n){var r=Go(n);return Ka(r)&&(r=e),Ka(t)?ur(t,br(n,1,Ka,!0),e,r):[]}));function Wo(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ps(n);return i<0&&(i=vn(r+i,0)),Rt(e,lo(t,3),i)}function Vo(t,n,r){var i=null==t?0:t.length;if(!i)return-1;var o=i-1;return r!==e&&(o=ps(r),o=r<0?vn(i+o,0):yn(o,i-1)),Rt(t,lo(n,3),o,!0)}function Yo(e){return null!=e&&e.length?br(e,1):[]}function Uo(t){return t&&t.length?t[0]:e}var Ko=Gr((function(e){var t=It(e,bi);return t.length&&t[0]===e[0]?jr(t):[]})),Xo=Gr((function(t){var n=Go(t),r=It(t,bi);return n===Go(r)?n=e:r.pop(),r.length&&r[0]===t[0]?jr(r,lo(n,2)):[]})),qo=Gr((function(t){var n=Go(t),r=It(t,bi);return(n="function"==typeof n?n:e)&&r.pop(),r.length&&r[0]===t[0]?jr(r,e,n):[]}));function Go(t){var n=null==t?0:t.length;return n?t[n-1]:e}var Zo=Gr(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Ur(e,t):e}var Jo=no((function(e,t){var n=null==e?0:e.length,r=ar(e,t);return Kr(e,It(t,(function(e){return yo(e,n)?+e:e})).sort(Ci)),r}));function ea(e){return null==e?e:Sn.call(e)}var ta=Gr((function(e){return di(br(e,1,Ka,!0))})),na=Gr((function(t){var n=Go(t);return Ka(n)&&(n=e),di(br(t,1,Ka,!0),lo(n,2))})),ra=Gr((function(t){var n=Go(t);return n="function"==typeof n?n:e,di(br(t,1,Ka,!0),e,n)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Dt(e,(function(e){if(Ka(e))return t=vn(e.length,t),!0})),Kt(t,(function(t){return It(e,Wt(t))}))}function oa(t,n){if(!t||!t.length)return[];var r=ia(t);return null==n?r:It(r,(function(t){return St(n,e,t)}))}var aa=Gr((function(e,t){return Ka(e)?ur(e,t):[]})),sa=Gr((function(e){return gi(Dt(e,Ka))})),la=Gr((function(t){var n=Go(t);return Ka(n)&&(n=e),gi(Dt(t,Ka),lo(n,2))})),ca=Gr((function(t){var n=Go(t);return n="function"==typeof n?n:e,gi(Dt(t,Ka),e,n)})),da=Gr(ia),ua=Gr((function(t){var n=t.length,r=n>1?t[n-1]:e;return r="function"==typeof r?(t.pop(),r):e,oa(t,r)}));function ha(e){var t=Fn(e);return t.__chain__=!0,t}function fa(e,t){return t(e)}var pa=no((function(t){var n=t.length,r=n?t[0]:0,i=this.__wrapped__,o=function(e){return ar(e,t)};return!(n>1||this.__actions__.length)&&i instanceof Vn&&yo(r)?((i=i.slice(r,+r+(n?1:0))).__actions__.push({func:fa,args:[o],thisArg:e}),new Wn(i,this.__chain__).thru((function(t){return n&&!t.length&&t.push(e),t}))):this.thru(o)})),ga=Ii((function(e,t,n){Ne.call(e,n)?++e[n]:or(e,n,1)})),ma=Ri(Wo),ba=Ri(Vo);function va(e,t){return(Va(e)?Ot:hr)(e,lo(t,3))}function ya(e,t){return(Va(e)?Ct:fr)(e,lo(t,3))}var xa=Ii((function(e,t,n){Ne.call(e,n)?e[n].push(t):or(e,n,[t])})),wa=Gr((function(e,t,n){var r=-1,i="function"==typeof t,o=Ua(e)?we(e.length):[];return hr(e,(function(e){o[++r]=i?St(t,e,n):_r(e,t,n)})),o})),$a=Ii((function(e,t,n){or(e,n,t)}));function Sa(e,t){return(Va(e)?It:Pr)(e,lo(t,3))}var ka=Ii((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]})),Oa=Gr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&xo(e,t[0],t[1])?t=[]:n>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Vr(e,br(t,1),[])})),Ca=ht||function(){return ut.Date.now()};function Ta(t,n,r){return n=r?e:n,n=t&&null==n?t.length:n,Zi(t,s,e,e,e,e,n)}function Da(n,r){var i;if("function"!=typeof r)throw new je(t);return n=ps(n),function(){return--n>0&&(i=r.apply(this,arguments)),n<=1&&(r=e),i}}var ja=Gr((function(e,t,n){var r=1;if(n.length){var i=sn(n,so(ja));r|=o}return Zi(e,r,t,n,i)})),_a=Gr((function(e,t,n){var r=3;if(n.length){var i=sn(n,so(_a));r|=o}return Zi(t,r,e,n,i)}));function Ia(n,r,i){var o,a,s,l,c,d,u=0,h=!1,f=!1,p=!0;if("function"!=typeof n)throw new je(t);function g(t){var r=o,i=a;return o=a=e,u=t,l=n.apply(i,r)}function m(t){var n=t-d;return d===e||n>=r||n<0||f&&t-u>=s}function b(){var e=Ca();if(m(e))return v(e);c=Io(b,function(e){var t=r-(e-d);return f?yn(t,s-(e-u)):t}(e))}function v(t){return c=e,p&&o?g(t):(o=a=e,l)}function y(){var t=Ca(),n=m(t);if(o=arguments,a=this,d=t,n){if(c===e)return function(e){return u=e,c=Io(b,r),h?g(e):l}(d);if(f)return $i(c),c=Io(b,r),g(d)}return c===e&&(c=Io(b,r)),l}return r=ms(r)||0,es(i)&&(h=!!i.leading,s=(f="maxWait"in i)?vn(ms(i.maxWait)||0,r):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==e&&$i(c),u=0,o=d=a=c=e},y.flush=function(){return c===e?l:v(Ca())},y}var Ma=Gr((function(e,t){return dr(e,1,t)})),Ea=Gr((function(e,t,n){return dr(e,ms(t)||0,n)}));function Aa(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new je(t);var r=function(){var t=arguments,i=n?n.apply(this,t):t[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,t);return r.cache=o.set(i,a)||o,a};return r.cache=new(Aa.Cache||Kn),r}function Na(e){if("function"!=typeof e)throw new je(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Kn;var Ba=xi((function(e,t){var n=(t=1==t.length&&Va(t[0])?It(t[0],qt(lo())):It(br(t,1),qt(lo()))).length;return Gr((function(r){for(var i=-1,o=yn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return St(e,this,r)}))})),La=Gr((function(t,n){var r=sn(n,so(La));return Zi(t,o,e,n,r)})),Ra=Gr((function(t,n){var r=sn(n,so(Ra));return Zi(t,a,e,n,r)})),Pa=no((function(t,n){return Zi(t,l,e,e,e,n)}));function Fa(e,t){return e===t||e!=e&&t!=t}var za=Ui(Cr),Ha=Ui((function(e,t){return e>=t})),Wa=Ir(function(){return arguments}())?Ir:function(e){return ts(e)&&Ne.call(e,"callee")&&!Xe.call(e,"callee")},Va=we.isArray,Ya=bt?qt(bt):function(e){return ts(e)&&Or(e)==_};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var Xa=Vt||ml,qa=vt?qt(vt):function(e){return ts(e)&&Or(e)==b};function Ga(e){if(!ts(e))return!1;var t=Or(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=Or(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var ns=yt?qt(yt):function(e){return ts(e)&&go(e)==w};function rs(e){return"number"==typeof e||ts(e)&&Or(e)==$}function is(e){if(!ts(e)||Or(e)!=S)return!1;var t=Ue(e);if(null===t)return!0;var n=Ne.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Ae.call(n)==Pe}var os=xt?qt(xt):function(e){return ts(e)&&Or(e)==O},as=wt?qt(wt):function(e){return ts(e)&&go(e)==C};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&Or(e)==T}function ls(e){return"symbol"==typeof e||ts(e)&&Or(e)==D}var cs=$t?qt($t):function(e){return ts(e)&&Ja(e.length)&&!!it[Or(e)]},ds=Ui(Rr),us=Ui((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?un(e):ji(e);if(et&&e[et])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[et]());var t=go(e);return(t==w?on:t==C?ln:Fs)(e)}function fs(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=fs(e),n=t%1;return t==t?n?t-n:t:0}function gs(e){return e?sr(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xt(e);var n=fe.test(e);return n||ge.test(e)?lt(e.slice(2),n?2:8):he.test(e)?u:+e}function bs(e){return _i(e,Ms(e))}function vs(e){return null==e?"":ci(e)}var ys=Mi((function(e,t){if(ko(t)||Ua(t))_i(t,Is(t),e);else for(var n in t)Ne.call(t,n)&&tr(e,n,t[n])})),xs=Mi((function(e,t){_i(t,Ms(t),e)})),ws=Mi((function(e,t,n,r){_i(t,Ms(t),e,r)})),$s=Mi((function(e,t,n,r){_i(t,Is(t),e,r)})),Ss=no(ar),ks=Gr((function(t,n){t=Ce(t);var r=-1,i=n.length,o=i>2?n[2]:e;for(o&&xo(n[0],n[1],o)&&(i=1);++r<i;)for(var a=n[r],s=Ms(a),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||Fa(u,Me[d])&&!Ne.call(t,d))&&(t[d]=a[d])}return t})),Os=Gr((function(t){return t.push(e,Ji),St(As,e,t)}));function Cs(t,n,r){var i=null==t?e:Sr(t,n);return i===e?r:i}function Ts(e,t){return null!=e&&mo(e,t,Dr)}var Ds=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=n}),el(rl)),js=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Ne.call(e,t)?e[t].push(n):e[t]=[n]}),lo),_s=Gr(_r);function Is(e){return Ua(e)?Gn(e):Br(e)}function Ms(e){return Ua(e)?Gn(e,!0):Lr(e)}var Es=Mi((function(e,t,n){Hr(e,t,n)})),As=Mi((function(e,t,n,r){Hr(e,t,n,r)})),Ns=no((function(e,t){var n={};if(null==e)return n;var r=!1;t=It(t,(function(t){return t=yi(t,e),r||(r=t.length>1),t})),_i(e,io(e),n),r&&(n=lr(n,7,eo));for(var i=t.length;i--;)ui(n,t[i]);return n})),Bs=no((function(e,t){return null==e?{}:function(e,t){return Yr(e,t,(function(t,n){return Ts(e,n)}))}(e,t)}));function Ls(e,t){if(null==e)return{};var n=It(io(e),(function(e){return[e]}));return t=lo(t),Yr(e,n,(function(e,n){return t(e,n[0])}))}var Rs=Gi(Is),Ps=Gi(Ms);function Fs(e){return null==e?[]:Gt(e,Is(e))}var zs=Bi((function(e,t,n){return t=t.toLowerCase(),e+(n?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,en).replace(Ze,"")}var Vs=Bi((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ys=Bi((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Us=Ni("toLowerCase"),Ks=Bi((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()})),Xs=Bi((function(e,t,n){return e+(n?" ":"")+Gs(t)})),qs=Bi((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Gs=Ni("toUpperCase");function Zs(t,n,r){return t=vs(t),(n=r?e:n)===e?function(e){return tt.test(e)}(t)?function(e){return e.match(Je)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(n)||[]}var Qs=Gr((function(t,n){try{return St(t,e,n)}catch(e){return Ga(e)?e:new Se(e)}})),Js=no((function(e,t){return Ot(t,(function(t){t=Lo(t),or(e,t,ja(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),nl=Pi(!0);function rl(e){return e}function il(e){return Nr("function"==typeof e?e:lr(e,1))}var ol=Gr((function(e,t){return function(n){return _r(n,e,t)}})),al=Gr((function(e,t){return function(n){return _r(e,n,t)}}));function sl(e,t,n){var r=Is(t),i=$r(t,r);null!=n||es(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=$r(t,Is(t)));var o=!(es(n)&&"chain"in n&&!n.chain),a=Za(e);return Ot(i,(function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__);return(n.__actions__=ji(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Wi(It),dl=Wi(Tt),ul=Wi(Nt);function hl(e){return wo(e)?Wt(Lo(e)):function(e){return function(t){return Sr(t,e)}}(e)}var fl=Yi(),pl=Yi(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Hi((function(e,t){return e+t}),0),yl=Xi("ceil"),xl=Hi((function(e,t){return e/t}),1),wl=Xi("floor"),$l=Hi((function(e,t){return e*t}),1),Sl=Xi("round"),kl=Hi((function(e,t){return e-t}),0);return Fn.after=function(e,n){if("function"!=typeof n)throw new je(t);return e=ps(e),function(){if(--e<1)return n.apply(this,arguments)}},Fn.ary=Ta,Fn.assign=ys,Fn.assignIn=xs,Fn.assignInWith=ws,Fn.assignWith=$s,Fn.at=Ss,Fn.before=Da,Fn.bind=ja,Fn.bindAll=Js,Fn.bindKey=_a,Fn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Fn.chain=ha,Fn.chunk=function(t,n,r){n=(r?xo(t,n,r):n===e)?1:vn(ps(n),0);var i=null==t?0:t.length;if(!i||n<1)return[];for(var o=0,a=0,s=we(gt(i/n));o<i;)s[a++]=ri(t,o,o+=n);return s},Fn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},Fn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Mt(Va(n)?ji(n):[n],br(t,1))},Fn.cond=function(e){var n=null==e?0:e.length,r=lo();return e=n?It(e,(function(e){if("function"!=typeof e[1])throw new je(t);return[r(e[0]),e[1]]})):[],Gr((function(t){for(var r=-1;++r<n;){var i=e[r];if(St(i[0],this,t))return St(i[1],this,t)}}))},Fn.conforms=function(e){return function(e){var t=Is(e);return function(n){return cr(n,e,t)}}(lr(e,1))},Fn.constant=el,Fn.countBy=ga,Fn.create=function(e,t){var n=zn(e);return null==t?n:ir(n,t)},Fn.curry=function t(n,r,i){var o=Zi(n,8,e,e,e,e,e,r=i?e:r);return o.placeholder=t.placeholder,o},Fn.curryRight=function t(n,r,o){var a=Zi(n,i,e,e,e,e,e,r=o?e:r);return a.placeholder=t.placeholder,a},Fn.debounce=Ia,Fn.defaults=ks,Fn.defaultsDeep=Os,Fn.defer=Ma,Fn.delay=Ea,Fn.difference=Fo,Fn.differenceBy=zo,Fn.differenceWith=Ho,Fn.drop=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,(n=r||n===e?1:ps(n))<0?0:n,i):[]},Fn.dropRight=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,0,(n=i-(n=r||n===e?1:ps(n)))<0?0:n):[]},Fn.dropRightWhile=function(e,t){return e&&e.length?fi(e,lo(t,3),!0,!0):[]},Fn.dropWhile=function(e,t){return e&&e.length?fi(e,lo(t,3),!0):[]},Fn.fill=function(t,n,r,i){var o=null==t?0:t.length;return o?(r&&"number"!=typeof r&&xo(t,n,r)&&(r=0,i=o),function(t,n,r,i){var o=t.length;for((r=ps(r))<0&&(r=-r>o?0:o+r),(i=i===e||i>o?o:ps(i))<0&&(i+=o),i=r>i?0:gs(i);r<i;)t[r++]=n;return t}(t,n,r,i)):[]},Fn.filter=function(e,t){return(Va(e)?Dt:mr)(e,lo(t,3))},Fn.flatMap=function(e,t){return br(Sa(e,t),1)},Fn.flatMapDeep=function(e,t){return br(Sa(e,t),c)},Fn.flatMapDepth=function(t,n,r){return r=r===e?1:ps(r),br(Sa(t,n),r)},Fn.flatten=Yo,Fn.flattenDeep=function(e){return null!=e&&e.length?br(e,c):[]},Fn.flattenDepth=function(t,n){return null!=t&&t.length?br(t,n=n===e?1:ps(n)):[]},Fn.flip=function(e){return Zi(e,512)},Fn.flow=tl,Fn.flowRight=nl,Fn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},Fn.functions=function(e){return null==e?[]:$r(e,Is(e))},Fn.functionsIn=function(e){return null==e?[]:$r(e,Ms(e))},Fn.groupBy=xa,Fn.initial=function(e){return null!=e&&e.length?ri(e,0,-1):[]},Fn.intersection=Ko,Fn.intersectionBy=Xo,Fn.intersectionWith=qo,Fn.invert=Ds,Fn.invertBy=js,Fn.invokeMap=wa,Fn.iteratee=il,Fn.keyBy=$a,Fn.keys=Is,Fn.keysIn=Ms,Fn.map=Sa,Fn.mapKeys=function(e,t){var n={};return t=lo(t,3),xr(e,(function(e,r,i){or(n,t(e,r,i),e)})),n},Fn.mapValues=function(e,t){var n={};return t=lo(t,3),xr(e,(function(e,r,i){or(n,r,t(e,r,i))})),n},Fn.matches=function(e){return Fr(lr(e,1))},Fn.matchesProperty=function(e,t){return zr(e,lr(t,1))},Fn.memoize=Aa,Fn.merge=Es,Fn.mergeWith=As,Fn.method=ol,Fn.methodOf=al,Fn.mixin=sl,Fn.negate=Na,Fn.nthArg=function(e){return e=ps(e),Gr((function(t){return Wr(t,e)}))},Fn.omit=Ns,Fn.omitBy=function(e,t){return Ls(e,Na(lo(t)))},Fn.once=function(e){return Da(2,e)},Fn.orderBy=function(t,n,r,i){return null==t?[]:(Va(n)||(n=null==n?[]:[n]),Va(r=i?e:r)||(r=null==r?[]:[r]),Vr(t,n,r))},Fn.over=cl,Fn.overArgs=Ba,Fn.overEvery=dl,Fn.overSome=ul,Fn.partial=La,Fn.partialRight=Ra,Fn.partition=ka,Fn.pick=Bs,Fn.pickBy=Ls,Fn.property=hl,Fn.propertyOf=function(t){return function(n){return null==t?e:Sr(t,n)}},Fn.pull=Zo,Fn.pullAll=Qo,Fn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ur(e,t,lo(n,2)):e},Fn.pullAllWith=function(t,n,r){return t&&t.length&&n&&n.length?Ur(t,n,e,r):t},Fn.pullAt=Jo,Fn.range=fl,Fn.rangeRight=pl,Fn.rearg=Pa,Fn.reject=function(e,t){return(Va(e)?Dt:mr)(e,Na(lo(t,3)))},Fn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=lo(t,3);++r<o;){var a=e[r];t(a,r,e)&&(n.push(a),i.push(r))}return Kr(e,i),n},Fn.rest=function(n,r){if("function"!=typeof n)throw new je(t);return Gr(n,r=r===e?r:ps(r))},Fn.reverse=ea,Fn.sampleSize=function(t,n,r){return n=(r?xo(t,n,r):n===e)?1:ps(n),(Va(t)?Qn:Qr)(t,n)},Fn.set=function(e,t,n){return null==e?e:Jr(e,t,n)},Fn.setWith=function(t,n,r,i){return i="function"==typeof i?i:e,null==t?t:Jr(t,n,r,i)},Fn.shuffle=function(e){return(Va(e)?Jn:ni)(e)},Fn.slice=function(t,n,r){var i=null==t?0:t.length;return i?(r&&"number"!=typeof r&&xo(t,n,r)?(n=0,r=i):(n=null==n?0:ps(n),r=r===e?i:ps(r)),ri(t,n,r)):[]},Fn.sortBy=Oa,Fn.sortedUniq=function(e){return e&&e.length?si(e):[]},Fn.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Fn.split=function(t,n,r){return r&&"number"!=typeof r&&xo(t,n,r)&&(n=r=e),(r=r===e?h:r>>>0)?(t=vs(t))&&("string"==typeof n||null!=n&&!os(n))&&!(n=ci(n))&&rn(t)?wi(un(t),0,r):t.split(n,r):[]},Fn.spread=function(e,n){if("function"!=typeof e)throw new je(t);return n=null==n?0:vn(ps(n),0),Gr((function(t){var r=t[n],i=wi(t,0,n);return r&&Mt(i,r),St(e,this,i)}))},Fn.tail=function(e){var t=null==e?0:e.length;return t?ri(e,1,t):[]},Fn.take=function(t,n,r){return t&&t.length?ri(t,0,(n=r||n===e?1:ps(n))<0?0:n):[]},Fn.takeRight=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,(n=i-(n=r||n===e?1:ps(n)))<0?0:n,i):[]},Fn.takeRightWhile=function(e,t){return e&&e.length?fi(e,lo(t,3),!1,!0):[]},Fn.takeWhile=function(e,t){return e&&e.length?fi(e,lo(t,3)):[]},Fn.tap=function(e,t){return t(e),e},Fn.throttle=function(e,n,r){var i=!0,o=!0;if("function"!=typeof e)throw new je(t);return es(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),Ia(e,n,{leading:i,maxWait:n,trailing:o})},Fn.thru=fa,Fn.toArray=hs,Fn.toPairs=Rs,Fn.toPairsIn=Ps,Fn.toPath=function(e){return Va(e)?It(e,Lo):ls(e)?[e]:ji(Bo(vs(e)))},Fn.toPlainObject=bs,Fn.transform=function(e,t,n){var r=Va(e),i=r||Xa(e)||cs(e);if(t=lo(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:es(e)&&Za(o)?zn(Ue(e)):{}}return(i?Ot:xr)(e,(function(e,r,i){return t(n,e,r,i)})),n},Fn.unary=function(e){return Ta(e,1)},Fn.union=ta,Fn.unionBy=na,Fn.unionWith=ra,Fn.uniq=function(e){return e&&e.length?di(e):[]},Fn.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Fn.uniqWith=function(t,n){return n="function"==typeof n?n:e,t&&t.length?di(t,e,n):[]},Fn.unset=function(e,t){return null==e||ui(e,t)},Fn.unzip=ia,Fn.unzipWith=oa,Fn.update=function(e,t,n){return null==e?e:hi(e,t,vi(n))},Fn.updateWith=function(t,n,r,i){return i="function"==typeof i?i:e,null==t?t:hi(t,n,vi(r),i)},Fn.values=Fs,Fn.valuesIn=function(e){return null==e?[]:Gt(e,Ms(e))},Fn.without=aa,Fn.words=Zs,Fn.wrap=function(e,t){return La(vi(t),e)},Fn.xor=sa,Fn.xorBy=la,Fn.xorWith=ca,Fn.zip=da,Fn.zipObject=function(e,t){return mi(e||[],t||[],tr)},Fn.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jr)},Fn.zipWith=ua,Fn.entries=Rs,Fn.entriesIn=Ps,Fn.extend=xs,Fn.extendWith=ws,sl(Fn,Fn),Fn.add=vl,Fn.attempt=Qs,Fn.camelCase=zs,Fn.capitalize=Hs,Fn.ceil=yl,Fn.clamp=function(t,n,r){return r===e&&(r=n,n=e),r!==e&&(r=(r=ms(r))==r?r:0),n!==e&&(n=(n=ms(n))==n?n:0),sr(ms(t),n,r)},Fn.clone=function(e){return lr(e,4)},Fn.cloneDeep=function(e){return lr(e,5)},Fn.cloneDeepWith=function(t,n){return lr(t,5,n="function"==typeof n?n:e)},Fn.cloneWith=function(t,n){return lr(t,4,n="function"==typeof n?n:e)},Fn.conformsTo=function(e,t){return null==t||cr(e,t,Is(t))},Fn.deburr=Ws,Fn.defaultTo=function(e,t){return null==e||e!=e?t:e},Fn.divide=xl,Fn.endsWith=function(t,n,r){t=vs(t),n=ci(n);var i=t.length,o=r=r===e?i:sr(ps(r),0,i);return(r-=n.length)>=0&&t.slice(r,o)==n},Fn.eq=Fa,Fn.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(Y,tn):e},Fn.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Fn.every=function(t,n,r){var i=Va(t)?Tt:pr;return r&&xo(t,n,r)&&(n=e),i(t,lo(n,3))},Fn.find=ma,Fn.findIndex=Wo,Fn.findKey=function(e,t){return Lt(e,lo(t,3),xr)},Fn.findLast=ba,Fn.findLastIndex=Vo,Fn.findLastKey=function(e,t){return Lt(e,lo(t,3),wr)},Fn.floor=wl,Fn.forEach=va,Fn.forEachRight=ya,Fn.forIn=function(e,t){return null==e?e:vr(e,lo(t,3),Ms)},Fn.forInRight=function(e,t){return null==e?e:yr(e,lo(t,3),Ms)},Fn.forOwn=function(e,t){return e&&xr(e,lo(t,3))},Fn.forOwnRight=function(e,t){return e&&wr(e,lo(t,3))},Fn.get=Cs,Fn.gt=za,Fn.gte=Ha,Fn.has=function(e,t){return null!=e&&mo(e,t,Tr)},Fn.hasIn=Ts,Fn.head=Uo,Fn.identity=rl,Fn.includes=function(e,t,n,r){e=Ua(e)?e:Fs(e),n=n&&!r?ps(n):0;var i=e.length;return n<0&&(n=vn(i+n,0)),ss(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Pt(e,t,n)>-1},Fn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ps(n);return i<0&&(i=vn(r+i,0)),Pt(e,t,i)},Fn.inRange=function(t,n,r){return n=fs(n),r===e?(r=n,n=0):r=fs(r),function(e,t,n){return e>=yn(t,n)&&e<vn(t,n)}(t=ms(t),n,r)},Fn.invoke=_s,Fn.isArguments=Wa,Fn.isArray=Va,Fn.isArrayBuffer=Ya,Fn.isArrayLike=Ua,Fn.isArrayLikeObject=Ka,Fn.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Or(e)==m},Fn.isBuffer=Xa,Fn.isDate=qa,Fn.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Fn.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||Xa(e)||cs(e)||Wa(e)))return!e.length;var t=go(e);if(t==w||t==C)return!e.size;if(ko(e))return!Br(e).length;for(var n in e)if(Ne.call(e,n))return!1;return!0},Fn.isEqual=function(e,t){return Mr(e,t)},Fn.isEqualWith=function(t,n,r){var i=(r="function"==typeof r?r:e)?r(t,n):e;return i===e?Mr(t,n,e,r):!!i},Fn.isError=Ga,Fn.isFinite=function(e){return"number"==typeof e&&gn(e)},Fn.isFunction=Za,Fn.isInteger=Qa,Fn.isLength=Ja,Fn.isMap=ns,Fn.isMatch=function(e,t){return e===t||Er(e,t,uo(t))},Fn.isMatchWith=function(t,n,r){return r="function"==typeof r?r:e,Er(t,n,uo(n),r)},Fn.isNaN=function(e){return rs(e)&&e!=+e},Fn.isNative=function(e){if(So(e))throw new Se("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ar(e)},Fn.isNil=function(e){return null==e},Fn.isNull=function(e){return null===e},Fn.isNumber=rs,Fn.isObject=es,Fn.isObjectLike=ts,Fn.isPlainObject=is,Fn.isRegExp=os,Fn.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=d},Fn.isSet=as,Fn.isString=ss,Fn.isSymbol=ls,Fn.isTypedArray=cs,Fn.isUndefined=function(t){return t===e},Fn.isWeakMap=function(e){return ts(e)&&go(e)==j},Fn.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Or(e)},Fn.join=function(e,t){return null==e?"":mn.call(e,t)},Fn.kebabCase=Vs,Fn.last=Go,Fn.lastIndexOf=function(t,n,r){var i=null==t?0:t.length;if(!i)return-1;var o=i;return r!==e&&(o=(o=ps(r))<0?vn(i+o,0):yn(o,i-1)),n==n?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(t,n,o):Rt(t,zt,o,!0)},Fn.lowerCase=Ys,Fn.lowerFirst=Us,Fn.lt=ds,Fn.lte=us,Fn.max=function(t){return t&&t.length?gr(t,rl,Cr):e},Fn.maxBy=function(t,n){return t&&t.length?gr(t,lo(n,2),Cr):e},Fn.mean=function(e){return Ht(e,rl)},Fn.meanBy=function(e,t){return Ht(e,lo(t,2))},Fn.min=function(t){return t&&t.length?gr(t,rl,Rr):e},Fn.minBy=function(t,n){return t&&t.length?gr(t,lo(n,2),Rr):e},Fn.stubArray=gl,Fn.stubFalse=ml,Fn.stubObject=function(){return{}},Fn.stubString=function(){return""},Fn.stubTrue=function(){return!0},Fn.multiply=$l,Fn.nth=function(t,n){return t&&t.length?Wr(t,ps(n)):e},Fn.noConflict=function(){return ut._===this&&(ut._=Fe),this},Fn.noop=ll,Fn.now=Ca,Fn.pad=function(e,t,n){e=vs(e);var r=(t=ps(t))?dn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Vi(mt(i),n)+e+Vi(gt(i),n)},Fn.padEnd=function(e,t,n){e=vs(e);var r=(t=ps(t))?dn(e):0;return t&&r<t?e+Vi(t-r,n):e},Fn.padStart=function(e,t,n){e=vs(e);var r=(t=ps(t))?dn(e):0;return t&&r<t?Vi(t-r,n)+e:e},Fn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),wn(vs(e).replace(ne,""),t||0)},Fn.random=function(t,n,r){if(r&&"boolean"!=typeof r&&xo(t,n,r)&&(n=r=e),r===e&&("boolean"==typeof n?(r=n,n=e):"boolean"==typeof t&&(r=t,t=e)),t===e&&n===e?(t=0,n=1):(t=fs(t),n===e?(n=t,t=0):n=fs(n)),t>n){var i=t;t=n,n=i}if(r||t%1||n%1){var o=$n();return yn(t+o*(n-t+st("1e-"+((o+"").length-1))),n)}return Xr(t,n)},Fn.reduce=function(e,t,n){var r=Va(e)?Et:Yt,i=arguments.length<3;return r(e,lo(t,4),n,i,hr)},Fn.reduceRight=function(e,t,n){var r=Va(e)?At:Yt,i=arguments.length<3;return r(e,lo(t,4),n,i,fr)},Fn.repeat=function(t,n,r){return n=(r?xo(t,n,r):n===e)?1:ps(n),qr(vs(t),n)},Fn.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Fn.result=function(t,n,r){var i=-1,o=(n=yi(n,t)).length;for(o||(o=1,t=e);++i<o;){var a=null==t?e:t[Lo(n[i])];a===e&&(i=o,a=r),t=Za(a)?a.call(t):a}return t},Fn.round=Sl,Fn.runInContext=re,Fn.sample=function(e){return(Va(e)?Zn:Zr)(e)},Fn.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?dn(e):e.length;var t=go(e);return t==w||t==C?e.size:Br(e).length},Fn.snakeCase=Ks,Fn.some=function(t,n,r){var i=Va(t)?Nt:ii;return r&&xo(t,n,r)&&(n=e),i(t,lo(n,3))},Fn.sortedIndex=function(e,t){return oi(e,t)},Fn.sortedIndexBy=function(e,t,n){return ai(e,t,lo(n,2))},Fn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=oi(e,t);if(r<n&&Fa(e[r],t))return r}return-1},Fn.sortedLastIndex=function(e,t){return oi(e,t,!0)},Fn.sortedLastIndexBy=function(e,t,n){return ai(e,t,lo(n,2),!0)},Fn.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var n=oi(e,t,!0)-1;if(Fa(e[n],t))return n}return-1},Fn.startCase=Xs,Fn.startsWith=function(e,t,n){return e=vs(e),n=null==n?0:sr(ps(n),0,e.length),t=ci(t),e.slice(n,n+t.length)==t},Fn.subtract=kl,Fn.sum=function(e){return e&&e.length?Ut(e,rl):0},Fn.sumBy=function(e,t){return e&&e.length?Ut(e,lo(t,2)):0},Fn.template=function(t,n,r){var i=Fn.templateSettings;r&&xo(t,n,r)&&(n=e),t=vs(t),n=ws({},n,i,Qi);var o,a,s=ws({},n.imports,i.imports,Qi),l=Is(s),c=Gt(s,l),d=0,u=n.interpolate||ve,h="__p += '",f=Te((n.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(n.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Ne.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rt+"]")+"\n";t.replace(f,(function(e,n,r,i,s,l){return r||(r=i),h+=t.slice(d,l).replace(ye,nn),n&&(o=!0,h+="' +\n__e("+n+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),r&&(h+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var g=Ne.call(n,"variable")&&n.variable;if(g){if(le.test(g))throw new Se("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(z,""):h).replace(H,"$1").replace(W,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Qs((function(){return ke(l,p+"return "+h).apply(e,c)}));if(m.source=h,Ga(m))throw m;return m},Fn.times=function(e,t){if((e=ps(e))<1||e>d)return[];var n=h,r=yn(e,h);t=lo(t),e-=h;for(var i=Kt(r,t);++n<e;)t(n);return i},Fn.toFinite=fs,Fn.toInteger=ps,Fn.toLength=gs,Fn.toLower=function(e){return vs(e).toLowerCase()},Fn.toNumber=ms,Fn.toSafeInteger=function(e){return e?sr(ps(e),-9007199254740991,d):0===e?e:0},Fn.toString=vs,Fn.toUpper=function(e){return vs(e).toUpperCase()},Fn.trim=function(t,n,r){if((t=vs(t))&&(r||n===e))return Xt(t);if(!t||!(n=ci(n)))return t;var i=un(t),o=un(n);return wi(i,Qt(i,o),Jt(i,o)+1).join("")},Fn.trimEnd=function(t,n,r){if((t=vs(t))&&(r||n===e))return t.slice(0,hn(t)+1);if(!t||!(n=ci(n)))return t;var i=un(t);return wi(i,0,Jt(i,un(n))+1).join("")},Fn.trimStart=function(t,n,r){if((t=vs(t))&&(r||n===e))return t.replace(ne,"");if(!t||!(n=ci(n)))return t;var i=un(t);return wi(i,Qt(i,un(n))).join("")},Fn.truncate=function(t,n){var r=30,i="...";if(es(n)){var o="separator"in n?n.separator:o;r="length"in n?ps(n.length):r,i="omission"in n?ci(n.omission):i}var a=(t=vs(t)).length;if(rn(t)){var s=un(t);a=s.length}if(r>=a)return t;var l=r-dn(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):t.slice(0,l);if(o===e)return c+i;if(s&&(l+=c.length-l),os(o)){if(t.slice(l).search(o)){var d,u=c;for(o.global||(o=Te(o.source,vs(ue.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(ci(o),l)!=l){var f=c.lastIndexOf(o);f>-1&&(c=c.slice(0,f))}return c+i},Fn.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(V,fn):e},Fn.uniqueId=function(e){var t=++Be;return vs(e)+t},Fn.upperCase=qs,Fn.upperFirst=Gs,Fn.each=va,Fn.eachRight=ya,Fn.first=Uo,sl(Fn,(bl={},xr(Fn,(function(e,t){Ne.call(Fn.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Fn.VERSION="4.17.21",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Fn[e].placeholder=Fn})),Ot(["drop","take"],(function(t,n){Vn.prototype[t]=function(r){r=r===e?1:vn(ps(r),0);var i=this.__filtered__&&!n?new Vn(this):this.clone();return i.__filtered__?i.__takeCount__=yn(r,i.__takeCount__):i.__views__.push({size:yn(r,h),type:t+(i.__dir__<0?"Right":"")}),i},Vn.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),Ot(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Vn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Ot(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Vn.prototype[e]=function(){return this[n](1).value()[0]}})),Ot(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Vn.prototype[e]=function(){return this.__filtered__?new Vn(this):this[n](1)}})),Vn.prototype.compact=function(){return this.filter(rl)},Vn.prototype.find=function(e){return this.filter(e).head()},Vn.prototype.findLast=function(e){return this.reverse().find(e)},Vn.prototype.invokeMap=Gr((function(e,t){return"function"==typeof e?new Vn(this):this.map((function(n){return _r(n,e,t)}))})),Vn.prototype.reject=function(e){return this.filter(Na(lo(e)))},Vn.prototype.slice=function(t,n){t=ps(t);var r=this;return r.__filtered__&&(t>0||n<0)?new Vn(r):(t<0?r=r.takeRight(-t):t&&(r=r.drop(t)),n!==e&&(r=(n=ps(n))<0?r.dropRight(-n):r.take(n-t)),r)},Vn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Vn.prototype.toArray=function(){return this.take(h)},xr(Vn.prototype,(function(t,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),i=/^(?:head|last)$/.test(n),o=Fn[i?"take"+("last"==n?"Right":""):n],a=i||/^find/.test(n);o&&(Fn.prototype[n]=function(){var n=this.__wrapped__,s=i?[1]:arguments,l=n instanceof Vn,c=s[0],d=l||Va(n),u=function(e){var t=o.apply(Fn,Mt([e],s));return i&&h?t[0]:t};d&&r&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,f=!!this.__actions__.length,p=a&&!h,g=l&&!f;if(!a&&d){n=g?n:new Vn(this);var m=t.apply(n,s);return m.__actions__.push({func:fa,args:[u],thisArg:e}),new Wn(m,h)}return p&&g?t.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(e){var t=_e[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Fn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Va(i)?i:[],e)}return this[n]((function(n){return t.apply(Va(n)?n:[],e)}))}})),xr(Vn.prototype,(function(e,t){var n=Fn[t];if(n){var r=n.name+"";Ne.call(In,r)||(In[r]=[]),In[r].push({name:t,func:n})}})),In[Fi(e,2).name]=[{name:"wrapper",func:e}],Vn.prototype.clone=function(){var e=new Vn(this.__wrapped__);return e.__actions__=ji(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ji(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ji(this.__views__),e},Vn.prototype.reverse=function(){if(this.__filtered__){var e=new Vn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Vn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Va(e),r=t<0,i=n?e.length:0,o=function(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=yn(t,e+a);break;case"takeRight":e=vn(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=r?s:a-1,d=this.__iteratees__,u=d.length,h=0,f=yn(l,this.__takeCount__);if(!n||!r&&i==l&&f==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&h<f;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Fn.prototype.at=pa,Fn.prototype.chain=function(){return ha(this)},Fn.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},Fn.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Fn.prototype.plant=function(t){for(var n,r=this;r instanceof Hn;){var i=Po(r);i.__index__=0,i.__values__=e,n?o.__wrapped__=i:n=i;var o=i;r=r.__wrapped__}return o.__wrapped__=t,n},Fn.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Vn){var n=t;return this.__actions__.length&&(n=new Vn(this)),(n=n.reverse()).__actions__.push({func:fa,args:[ea],thisArg:e}),new Wn(n,this.__chain__)}return this.thru(ea)},Fn.prototype.toJSON=Fn.prototype.valueOf=Fn.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Fn.prototype.first=Fn.prototype.head,et&&(Fn.prototype[et]=function(){return this}),Fn}();ft?((ft.exports=pn)._=pn,ht._=pn):ut._=pn}.call(Wo);var IO=_O.exports;const MO=i.forwardRef(((n,r)=>{var{value:i,readOnly:o,"data-testid":s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h,iconMask:f=e(Fe,{}),iconUnmask:p=e(Pe,{}),iconActiveColor:g,iconInactiveColor:m,maskChar:b="•",error:v,disableMask:y,transformInput:x,loadState:w,onMask:$,onUnmask:S,onChange:k,onFocus:O,onBlur:C,onTryAgain:T}=n,D=lt(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const j=o&&IO.isEmpty(i),[_,I]=a(!y),[M,E]=a(i||"");u((()=>{E(i)}),[i]);const A=e=>{P(!1),O&&O(e)},N=e=>{P(!0),C&&C(e)},B=e=>{let t=e.target.value;switch(x){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}E(t),e.target.value=t,k&&k(e)},L=()=>{o&&T&&T()},R=()=>{P(!_)},P=e=>{I(e),e?$&&$():S&&S()},F=()=>!(null==M?void 0:M.toString().length)||y,z=()=>{const t=F();return!j&&e(yO,Object.assign({"data-testid":"icon-"+(_?"masked":"unmasked"),onClick:t?void 0:R,$isDisabled:t,$inactiveColor:m,$activeColor:g},{children:_?p:f}))};return e("div",Object.assign({"aria-busy":"loading"===w,"aria-live":"polite"},{children:(()=>{if(o)switch(w){case"fail":return t(TO,Object.assign({onClick:L,"data-testid":"try-again-button"},{children:[t(kO,{children:[e(OO,{}),e(CO,{children:"Error"})]}),e(SO,Object.assign({weight:"semibold"},{children:"Try again?"}))]}));case"loading":return t(xO,{children:[e($O,{}),e(wO,{children:"Retrieving..."})]})}return e(vO,Object.assign({ref:r,"data-testid":`${s||"masked-input"}${_?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:z()},position:"right"},onFocus:o?void 0:A,onBlur:o?void 0:N,onClick:o?R:void 0,onChange:B,value:j?"-":_&&!y?Td.maskValue(null==M?void 0:M.toString(),{maskChar:b,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h}):M,readOnly:o,error:v,$isDisabled:F()},D))})()}))})),EO=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:o,label:r,errorMessage:i,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(MO,Object.assign({ref:n,id:`${o}-base`,"data-testid":s||o,error:!!i},h))}))})),AO=M`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,NO=I.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?ml.Primary:ml.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&AO}
`,BO=I.div`
    color: ${ml.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&AO}

    ${e=>"next-line"===e.$labelDisplayType?M`
                    ${Al.getTextStyle("BodySmall","semibold")}
                `:M`
                    ${Al.getTextStyle("Body","regular")}
                `}
`,LO=I.span`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
`,RO=I.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return M`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return M`
                    ${NO} {
                        display: inline;
                    }

                    ${BO} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,PO=I.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,FO=I.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,zO=({bold:r,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u})=>{const h=A()||Mc,f=Dl.Body.fontSize({theme:h}),g=Dl.Body.fontFamily({theme:h}),{ref:b,width:v}=ln(),y=p((e=>{if("inline"!==i)return!1;return Td.getTextWidth(e,`${f}rem '${g}'`)>v*s-50}),[v,i,f,g,s]),x=m((()=>y(o)),[y,o]),w=m((()=>c&&y(c)),[y,c]),$=x||w?"next-line":i,S=r=>{if(!a)return r;const i=a.toLowerCase().trim(),s=r.toLowerCase().indexOf(i),l=s+a.length;return-1===s?r:t(n,{children:[o.slice(0,s),e(LO,Object.assign({$variant:u},{children:o.slice(s,l)})),o.slice(l)]})},k=r=>t(n,{children:[e(PO,Object.assign({$maxLines:s,"aria-hidden":!0},{children:S(r)})),e(FO,Object.assign({$maxLines:s,"aria-hidden":!0},{children:S(r)}))]});return t(RO,Object.assign({ref:b,$labelDisplayType:$},{children:[e(NO,Object.assign({"aria-label":o,$bold:r,$maxLines:s,$selected:l,$truncateType:d,$variant:u},{children:"middle"===d&&x?k(o):S(o)})),c&&e(BO,Object.assign({"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:i},{children:"middle"===d&&w?k(c):c}))]}))},HO=0,WO=1,VO=2,YO=4;function UO(e){return()=>e}function KO(e){e()}function XO(e,t){return n=>e(t(n))}function qO(e,t){return()=>e(t)}function GO(e,t){return n=>e(t,n)}function ZO(e){return void 0!==e}function QO(){}function JO(e,t){return t(e),e}function eC(e,t){return t(e)}function tC(...e){return e}function nC(e,t){return e(WO,t)}function rC(e,t){e(HO,t)}function iC(e){e(VO)}function oC(e){return e(YO)}function aC(e,t){return nC(e,GO(t,HO))}function sC(e,t){const n=e(WO,(e=>{n(),t(e)}));return n}function lC(e){let t,n;return r=>i=>{t=i,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function cC(e,t){return e===t}function dC(e=cC){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function uC(e){return t=>n=>{e(n)&&t(n)}}function hC(e){return t=>XO(t,e)}function fC(e){return t=>()=>{t(e)}}function pC(e,...t){const n=function(...e){return t=>e.reduceRight(eC,t)}(...t);return(t,r)=>{switch(t){case VO:return void iC(e);case WO:return nC(e,n(r))}}}function gC(e,t){return n=>r=>{n(t=e(t,r))}}function mC(e){return t=>n=>{e>0?e--:t(n)}}function bC(e){let t,n=null;return r=>i=>{n=i,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function vC(...e){const t=new Array(e.length);let n=0,r=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);nC(e,(e=>{const s=n;n|=a,t[o]=e,s!==i&&n===i&&r&&(r(),r=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};n===i?a():r=a}}function yC(e){let t=e;const n=wC();return(e,r)=>{switch(e){case HO:t=r;break;case WO:r(t);break;case YO:return t}return n(e,r)}}function xC(e,t){return JO(yC(t),(t=>aC(e,t)))}function wC(){const e=[];return(t,n)=>{switch(t){case HO:return void e.slice().forEach((e=>{e(n)}));case VO:return void e.splice(0,e.length);case WO:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function $C(e){return JO(wC(),(t=>aC(e,t)))}function SC(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:kC(),singleton:n}}const kC=()=>Symbol();function OC(...e){const t=wC(),n=new Array(e.length);let r=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);nC(e,(e=>{n[o]=e,r|=a,r===i&&rC(t,n)}))})),function(e,o){switch(e){case VO:return void iC(t);case WO:return r===i&&o(n),nC(t,o)}}}function CC(e,t=cC){return pC(e,dC(t))}function TC(...e){return function(t,n){switch(t){case VO:return;case WO:return function(...e){return()=>{e.map(KO)}}(...e.map((e=>nC(e,n))))}}}var DC=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(DC||{});const jC={0:"debug",3:"error",1:"log",2:"warn"},_C=SC((()=>{const e=yC(3);return{log:yC(((t,n,r=1)=>{var i;r>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:oC(e))&&console[jC[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function IC(e,t,n){return MC(e,t,n).callbackRef}function MC(e,t,n){const r=i.useRef(null);let o=e=>{};if(typeof ResizeObserver<"u"){const a=i.useMemo((()=>new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)}))),[e]);o=e=>{e&&t?(a.observe(e),r.current=e):(r.current&&a.unobserve(r.current),r.current=null)}}return{callbackRef:o,ref:r}}function EC(e,t,n,r,o,a,s,l,c){const d=i.useCallback((n=>{const i=function(e,t,n,r){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,n);if(0===c&&r("Zero-sized element, this should not happen",{child:i},DC.ERROR),c===l)continue;const d=o[o.length-1];0===o.length||d.size!==c||d.endIndex!==s-1?o.push({endIndex:s,size:c,startIndex:s}):o[o.length-1].endIndex++}return o}(n.children,t,l?"offsetWidth":"offsetHeight",o);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:d?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:d?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,f=s?l?s.offsetWidth:s.offsetHeight:d?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;r({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:f}),null==a||a(l?AC("column-gap",getComputedStyle(n).columnGap,o):AC("row-gap",getComputedStyle(n).rowGap,o)),null!==i&&e(i)}),[e,t,o,a,s,r]);return MC(d,n,c)}function AC(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,DC.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function NC(e,t,n){const r=i.useRef(null),o=i.useCallback((n=>{if(null==n||!n.offsetParent)return;const i=n.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),n=i.top-e.top;s=e.height-Math.max(0,n),a=n+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;r.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(r.current)}),[e,t]),{callbackRef:a,ref:s}=MC(o,!0,n),l=i.useCallback((()=>{o(s.current)}),[o,s]);return i.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const BC=SC((()=>{const e=wC(),t=wC(),n=yC(0),r=wC(),i=yC(0),o=wC(),a=wC(),s=yC(0),l=yC(0),c=yC(0),d=yC(0),u=wC(),h=wC(),f=yC(!1),p=yC(!1),g=yC(!1);return aC(pC(e,hC((({scrollTop:e})=>e))),t),aC(pC(e,hC((({scrollHeight:e})=>e))),a),aC(t,i),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:r,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),LC={lvl:0};function RC(e,t){const n=e.length;if(0===n)return[];let{index:r,value:i}=t(e[0]);const o=[];for(let a=1;a<n;a++){const{index:n,value:s}=t(e[a]);o.push({end:n-1,start:r,value:i}),r=n,i=s}return o.push({end:1/0,start:r,value:i}),o}function PC(e){return e===LC}function FC(e,t){if(!PC(e))return t===e.k?e.v:t<e.k?FC(e.l,t):FC(e.r,t)}function zC(e,t,n="k"){if(PC(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=zC(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return zC(e.l,t,n)}function HC(e,t,n){return PC(e)?JC(t,n,1):t===e.k?qC(e,{k:t,v:n}):t<e.k?eT(qC(e,{l:HC(e.l,t,n)})):eT(qC(e,{r:HC(e.r,t,n)}))}function WC(){return LC}function VC(e,t,n){if(PC(e))return[];return function(e){return RC(e,(({k:e,v:t})=>({index:e,value:t})))}(KC(e,zC(e,t)[0],n))}function YC(e,t){if(PC(e))return LC;const{k:n,l:r,r:i}=e;if(t===n){if(PC(r))return i;if(PC(i))return r;{const[t,n]=QC(r);return XC(qC(e,{k:t,l:GC(r),v:n}))}}return XC(qC(e,t<n?{l:YC(r,t)}:{r:YC(i,t)}))}function UC(e){return PC(e)?[]:[...UC(e.l),{k:e.k,v:e.v},...UC(e.r)]}function KC(e,t,n){if(PC(e))return[];const{k:r,l:i,r:o,v:a}=e;let s=[];return r>t&&(s=s.concat(KC(i,t,n))),r>=t&&r<=n&&s.push({k:r,v:a}),r<=n&&(s=s.concat(KC(o,t,n))),s}function XC(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(ZC(t))return tT(qC(e,{lvl:n-1}));if(!PC(t)&&!PC(t.r))return qC(t.r,{l:qC(t,{r:t.r.l}),lvl:n,r:qC(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(ZC(e))return nT(qC(e,{lvl:n-1}));if(PC(r)||PC(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,i=ZC(t)?r.lvl-1:r.lvl;return qC(t,{l:qC(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:nT(qC(r,{l:t.r,lvl:i}))})}}function qC(e,t){return JC(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function GC(e){return PC(e.r)?e.l:XC(qC(e,{r:GC(e.r)}))}function ZC(e){return PC(e)||e.lvl>e.r.lvl}function QC(e){return PC(e.r)?[e.k,e.v]:QC(e.r)}function JC(e,t,n,r=LC,i=LC){return{k:e,l:r,lvl:n,r:i,v:t}}function eT(e){return nT(tT(e))}function tT(e){const{l:t}=e;return PC(t)||t.lvl!==e.lvl?e:qC(t,{r:qC(e,{l:t.r})})}function nT(e){const{lvl:t,r:n}=e;return PC(n)||PC(n.r)||n.lvl!==t||n.r.lvl!==t?e:qC(n,{l:qC(e,{r:n.l}),lvl:t+1})}function rT(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function iT(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const oT=SC((()=>({recalcInProgress:yC(!1)})),[],{singleton:!0});function aT(e,t,n){return e[sT(e,t,n)]}function sT(e,t,n,r=0){let i=e.length-1;for(;r<=i;){const o=Math.floor((r+i)/2),a=n(e[o],t);if(0===a)return o;if(-1===a){if(i-r<2)return o-1;i=o-1}else{if(i===r)return o;r=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function lT(e,t){return Math.round(e.getBoundingClientRect()[t])}function cT(e){return!PC(e.groupOffsetTree)}function dT({index:e},t){return t===e?0:t<e?-1:1}function uT({offset:e},t){return t===e?0:t<e?-1:1}function hT(e,t,n){if(0===t.length)return 0;const{index:r,offset:i,size:o}=aT(t,e,dT),a=e-r,s=o*a+(a-1)*n+i;return s>0?s+n:s}function fT(e,t){if(!cT(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function pT(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=fT("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function gT(e,t,n,r=0){return r>0&&(t=Math.max(t,aT(e,r,dT).offset)),RC(function(e,t,n,r){const i=sT(e,t,r),o=sT(e,n,r,i);return e.slice(i,o+1)}(e,t,n,uT),yT)}function mT(e,[t,n,r,i]){t.length>0&&r("received item sizes",t,DC.DEBUG);const o=e.sizeTree;let a=o,s=0;if(n.length>0&&PC(o)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>HC(HC(t,n,e),n+1,r)),a)}else[a,s]=function(e,t){let n=PC(e)?0:1/0;for(const r of t){const{endIndex:t,size:i,startIndex:o}=r;if(n=Math.min(n,o),PC(e)){e=HC(e,0,i);continue}const a=VC(e,o-1,t+1);if(a.some(xT(r)))continue;let s=!1,l=!1;for(const{end:n,start:r,value:o}of a)s?(t>=r||i===o)&&(e=YC(e,r)):(l=o!==i,s=!0),n>t&&t>=r&&o!==i&&(e=HC(e,t+1,o));l&&(e=HC(e,o,i))}return[e,n]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=vT(e.offsetTree,s,a,i);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>HC(e,t,hT(t,u,i))),WC()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function bT(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function vT(e,t,n,r){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=sT(i,t-1,dT),s=i[l].offset;const e=zC(n,t-1);o=e[0],a=e[1],i.length&&i[l].size===zC(n,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of VC(n,t,1/0)){const t=e-o,n=t*a+s+t*r;i.push({index:e,offset:n,size:l}),o=e,s=n,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function yT(e){return{index:e.index,value:e}}function xT(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const wT={offsetHeight:"height",offsetWidth:"width"},$T=SC((([{log:e},{recalcInProgress:t}])=>{const n=wC(),r=wC(),i=xC(r,0),o=wC(),a=wC(),s=yC(0),l=yC([]),c=yC(void 0),d=yC(void 0),u=yC(((e,t)=>lT(e,wT[t]))),h=yC(void 0),f=yC(0),p={groupIndices:[],groupOffsetTree:WC(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:WC()},g=xC(pC(n,vC(l,e,f),gC(mT,p),dC()),p),m=xC(pC(l,dC(),gC(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),hC((({prev:e})=>e))),[]);aC(pC(l,uC((e=>e.length>0)),vC(g,f),hC((([e,t,n])=>{const r=e.reduce(((e,r,i)=>HC(e,r,hT(r,t.offsetTree,n)||i)),WC());return{...t,groupIndices:e,groupOffsetTree:r}}))),g),aC(pC(r,vC(g),uC((([e,{lastIndex:t}])=>e<t)),hC((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),aC(c,d);const b=xC(pC(c,hC((e=>void 0===e))),!0);aC(pC(d,uC((e=>void 0!==e&&PC(oC(g).sizeTree))),hC((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const v=$C(pC(n,vC(g),gC((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:p}),hC((e=>e.changed))));nC(pC(s,gC(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),hC((e=>e.diff))),(e=>{const{groupIndices:n}=oC(g);if(e>0)rC(t,!0),rC(o,e+bT(e,n));else if(e<0){const t=oC(m);t.length>0&&(e-=bT(-e,t)),rC(a,e)}})),nC(pC(s,vC(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},DC.ERROR)}));const y=$C(o);aC(pC(o,vC(g),hC((([e,t])=>{const n=t.groupIndices.length>0,r=[],i=t.lastSize;if(n){const n=FC(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=UC(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:n,v:r})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:i}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return UC(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),n);const x=$C(pC(a,vC(g,f),hC((([e,{offsetTree:t},n])=>hT(-e,t,n)))));return aC(pC(a,vC(g,f),hC((([e,t,n])=>{if(t.groupIndices.length>0){if(PC(t.sizeTree))return t;let r=WC();const i=oC(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(r=UC(t.sizeTree).reduce(((t,{k:n,v:r})=>HC(t,Math.max(0,n+e),r)),r),o!==-e){r=HC(r,0,FC(t.sizeTree,s));r=HC(r,1,zC(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...vT(t.offsetTree,0,r,n)}}{const r=UC(t.sizeTree).reduce(((t,{k:n,v:r})=>HC(t,Math.max(0,n+e),r)),WC());return{...t,sizeTree:r,...vT(t.offsetTree,0,r,n)}}}))),g),{beforeUnshiftWith:y,data:h,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:f,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:n,sizes:g,statefulTotalCount:i,totalCount:r,trackItemSizes:b,unshiftWith:o}}),tC(_C,oT),{singleton:!0});function ST(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const kT=SC((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:i}])=>{const o=wC(),a=wC(),s=$C(pC(o,hC(ST)));return aC(pC(s,hC((e=>e.totalCount))),n),aC(pC(s,hC((e=>e.groupIndices))),e),aC(pC(OC(i,t,r),uC((([e,t])=>cT(t))),hC((([e,t,n])=>zC(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),dC(),hC((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),tC($T,BC)),OT=SC((([{log:e}])=>{const t=yC(!1),n=$C(pC(t,uC((e=>e)),dC()));return nC(t,(t=>{t&&oC(e)("props updated",{},DC.DEBUG)})),{didMount:n,propsReady:t}}),tC(_C),{singleton:!0}),CT=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function TT(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!CT)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const DT=SC((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:h}])=>{const f=wC(),p=wC(),g=yC(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),rC(l,!1)}return aC(pC(f,vC(n,u,r,g,s,a,h),vC(e,o,i),hC((([[e,n,r,i,o,a,s,c],u,h,g])=>{const x=TT(e),{align:w,behavior:$,offset:S}=x,k=i-1,O=pT(x,n,k);let C=hT(O,n.offsetTree,u)+a;"end"===w?(C+=h+zC(n.sizeTree,O)[1]-r+g,O===k&&(C+=s)):"center"===w?C+=(h+zC(n.sizeTree,O)[1]-r+g)/2:C-=o,S&&(C+=S);const T=t=>{y(),t?(c("retrying to scroll to",{location:e},DC.DEBUG),rC(f,e)):(rC(p,!0),c("list did not change, scroll successful",{},DC.DEBUG))};if(y(),"smooth"===$){let e=!1;v=nC(t,(t=>{e=e||t})),m=sC(d,(()=>{T(e)}))}else m=sC(pC(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),T);return b=setTimeout((()=>{y()}),1200),rC(l,!0),c("scrolling from index to",{behavior:$,index:O,top:C},DC.DEBUG),{behavior:$,top:C}}))),c),{scrollTargetReached:p,scrollToIndex:f,topListHeight:g}}),tC($T,BC,_C),{singleton:!0});function jT(e,t){0==e?t():requestAnimationFrame((()=>{jT(e-1,t)}))}function _T(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const IT=SC((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=yC(!0),l=yC(0),c=yC(!0);return aC(pC(a,vC(l),uC((([e,t])=>!!t)),fC(!1)),s),aC(pC(a,vC(l),uC((([e,t])=>!!t)),fC(!1)),c),nC(pC(OC(t,a),vC(s,n,e,c),uC((([[,e],t,{sizeTree:n},r,i])=>e&&(!PC(n)||ZO(r))&&!t&&!i)),vC(l)),(([,e])=>{sC(i,(()=>{rC(c,!0)})),jT(4,(()=>{sC(r,(()=>{rC(s,!0)})),rC(o,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),tC($T,BC,DT,OT),{singleton:!0});function MT(e,t){return Math.abs(e-t)<1.01}const ET="up",AT="down",NT={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},BT=SC((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:i,viewportHeight:o}])=>{const a=yC(!1),s=yC(!0),l=wC(),c=wC(),d=yC(4),u=yC(0),h=xC(pC(TC(pC(CC(i),mC(1),fC(!0)),pC(CC(i),mC(1),fC(!1),lC(100))),dC()),!1),f=xC(pC(TC(pC(n,fC(!0)),pC(n,fC(!1),lC(200))),dC()),!1);aC(pC(OC(CC(i),CC(u)),hC((([e,t])=>e<=t)),dC()),s),aC(pC(s,bC(50)),c);const p=$C(pC(OC(r,CC(o),CC(t),CC(e),CC(d)),gC(((e,[{scrollHeight:t,scrollTop:n},r,i,o,a])=>{const s={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),NT),dC(((e,t)=>e&&e.atBottom===t.atBottom)))),g=xC(pC(r,gC(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(MT(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const i=t-(n+r)<1;return e.scrollTop!==n&&i?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),uC((e=>e.changed)),hC((e=>e.jump))),0);aC(pC(p,hC((e=>e.atBottom))),a),aC(pC(a,bC(50)),l);const m=yC(AT);aC(pC(r,hC((({scrollTop:e})=>e)),dC(),gC(((e,t)=>oC(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?ET:AT,prevScrollTop:t}),{direction:AT,prevScrollTop:0}),hC((e=>e.direction))),m),aC(pC(r,bC(50),fC("none")),m);const b=yC(0);return aC(pC(h,uC((e=>!e)),fC(0)),b),aC(pC(i,bC(100),vC(h),uC((([e,t])=>!!t)),gC((([e,t],[n])=>[t,n]),[0,0]),hC((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),tC(BC)),LT="top",RT="bottom",PT="none";function FT(e,t,n){return"number"==typeof e?n===ET&&t===LT||n===AT&&t===RT?e:0:n===ET?t===LT?e.main:e.reverse:t===RT?e.main:e.reverse}function zT(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const HT=SC((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:i}])=>{const o=wC(),a=yC(0),s=yC(0),l=yC(0),c=xC(pC(OC(CC(r),CC(i),CC(n),CC(o,iT),CC(l),CC(a),CC(t),CC(e),CC(s)),hC((([e,t,n,[r,i],o,a,s,l,c])=>{const d=e-l,u=a+s,h=Math.max(n-d,0);let f=PT;const p=zT(c,LT),g=zT(c,RT);return r-=l,i+=n+s,(r+=n+s)>e+u-p&&(f=ET),(i-=l)<e-h+t+g&&(f=AT),f!==PT?[Math.max(d-n-FT(o,LT,f)-p,0),d-h-s+t+FT(o,RT,f)+g]:null})),uC((e=>null!=e)),dC(iT)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:c}}),tC(BC),{singleton:!0});const WT={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function VT(e,t,n,r,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=n-a,h=c,f=s+u*l+(u-1)*r-d;return{bottom:d,firstItemIndex:o,items:UT(e,i,o),offsetBottom:f,offsetTop:c,top:h,topItems:UT(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function YT(e,t,n,r,i,o){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=_T(t,s);return VT(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,n,r)}function UT(e,t,n){if(0===e.length)return[];if(!cT(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,i=e[e.length-1].index,o=[],a=VC(t.groupOffsetTree,r,i);let s,l=0;for(const r of e){let e;(!s||s.end<r.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=r.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:r.index-(l+1)+n},o.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return o}const KT=SC((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},h,{didMount:f},{recalcInProgress:p}])=>{const g=yC([]),m=yC(0),b=wC();aC(o.topItemsIndexes,g);const v=xC(pC(OC(f,p,CC(l,iT),CC(i),CC(r),CC(c),d,CC(g),CC(t),CC(n),e),uC((([e,t,,n,,,,,,,r])=>{const i=r&&r.length!==n;return e&&!t&&!i})),hC((([,,[e,t],n,r,i,o,a,s,l,c])=>{const d=r,{offsetTree:u,sizeTree:h}=d,f=oC(m);if(0===n)return{...WT,totalCount:n};if(0===e&&0===t)return 0===f?{...WT,totalCount:n}:YT(f,i,r,s,l,c||[]);if(PC(h))return f>0?null:VT(function(e,t,n){if(cT(t)){const r=fT(e,t);return[{index:zC(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(_T(i,n),d,c),[],n,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of VC(h,e,t)){const i=r.value,o=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=o;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:n,size:i}),n+=i}}if(!o)return VT([],p,n,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=gT(u,e,t,g);if(0===b.length)return null;const v=n-1;return VT(JO([],(n=>{for(const r of b){const i=r.value;let o=i.offset,a=r.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-r.start;o+=t*s+t*l}a<g&&(o+=(g-a)*s,a=g);const d=Math.min(r.end,v);for(let e=a;e<=d&&!(o>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:o,size:s}),o+=s+l}})),p,n,l,d,s)})),uC((e=>null!==e)),dC()),WT);aC(pC(e,uC(ZO),hC((e=>null==e?void 0:e.length))),i),aC(pC(v,hC((e=>e.topListHeight))),u),aC(u,s),aC(pC(v,hC((e=>[e.top,e.bottom]))),a),aC(pC(v,hC((e=>e.items))),b);const y=$C(pC(v,uC((({items:e})=>e.length>0)),vC(i,e),uC((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),hC((([,e,t])=>[e-1,t])),dC(iT),hC((([e])=>e)))),x=$C(pC(v,bC(200),uC((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),hC((({items:e})=>e[0].index)),dC())),w=$C(pC(v,uC((({items:e})=>e.length>0)),hC((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),dC(rT)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...h}}),tC($T,kT,HT,IT,DT,BT,OT,oT),{singleton:!0}),XT=SC((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:i}])=>{const o=wC(),a=xC(pC(OC(n,e,r,t,i),hC((([e,t,n,r,i])=>e+t+n+r+i.offsetBottom+i.bottom))),0);return aC(CC(a),o),{totalListHeight:a,totalListHeightChanged:o}}),tC(BC,KT),{singleton:!0}),qT=SC((([{viewportHeight:e},{totalListHeight:t}])=>{const n=yC(!1),r=xC(pC(OC(n,e,t),uC((([e])=>e)),hC((([,e,t])=>Math.max(0,e-t))),bC(0),dC()),0);return{alignToBottom:n,paddingTopAddition:r}}),tC(BC,XT),{singleton:!0});function GT(e){return!!e&&("smooth"===e?"smooth":"auto")}const ZT=SC((([{listRefresh:e,totalCount:t},{atBottomState:n,isAtBottom:r},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=yC(!1),u=wC();let h=null;function f(e){rC(i,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=sC(n,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(oC(l)("scrolling to bottom due to increased size",{},DC.DEBUG),f("auto"))}));setTimeout(t,100)}return nC(pC(OC(pC(CC(t),mC(1)),a),vC(CC(d),r,o,c),hC((([[e,t],n,r,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?GT(e(t)):t&&GT(e))(n,r||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),uC((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:n})=>{h&&(h(),h=null),h=sC(e,(()=>{oC(l)("following output to ",{totalCount:n},DC.DEBUG),f(t),h=null}))})),nC(pC(OC(CC(d),t,s),uC((([e,,t])=>e&&t)),gC((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),uC((({refreshed:e})=>e)),vC(d,t)),(([,e])=>{oC(o)&&p(!1!==e)})),nC(u,(()=>{p(!1!==oC(d))})),nC(OC(CC(d),n),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&f("auto")})),{autoscrollToBottom:u,followOutput:d}}),tC($T,BT,DT,IT,OT,_C,BC)),QT=SC((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(aC(pC(s,vC(o),uC((([,e])=>0!==e)),vC(i,r,t,n,e),hC((([[,e],t,n,r,i,o=[]])=>YT(e,t,n,r,i,o)))),a),{})),tC($T,IT,KT,OT),{singleton:!0}),JT=SC((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=yC(0);return nC(pC(e,vC(r),uC((([,e])=>0!==e)),hC((([,e])=>({top:e})))),(e=>{sC(pC(n,mC(1),uC((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{rC(t,e)}))}))})),{initialScrollTop:r}}),tC(OT,BC,KT),{singleton:!0}),eD=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=n?n:"start",behavior:r}:e>o?{...i,align:null!=n?n:"end",behavior:r}:null,tD=SC((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=wC();return aC(pC(d,vC(t,l,n,o,i,r,s),vC(e),hC((([[e,t,n,r,i,o,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:h=eD,done:f,...p}=e,g=pT(e,t,r-1),m=hT(g,t.offsetTree,c)+i+o,b=h({itemBottom:m+zC(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+n-s,viewportTop:l+o});return b?f&&sC(pC(a,uC((e=>!e)),mC(oC(a)?1:2)),f):f&&f(),b})),uC((e=>null!==e))),c),{scrollIntoView:d}}),tC($T,BC,DT,KT,_C),{singleton:!0}),nD=SC((([{scrollVelocity:e}])=>{const t=yC(!1),n=wC(),r=yC(!1);return aC(pC(e,vC(r,t,n),uC((([e,t])=>!!t)),hC((([e,t,n,r])=>{const{enter:i,exit:o}=t;if(n){if(o(e,r))return!1}else if(i(e,r))return!0;return n})),dC()),t),nC(pC(OC(t,e,n),vC(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),tC(BT),{singleton:!0}),rD=SC((([{scrollContainerState:e,scrollTo:t}])=>{const n=wC(),r=wC(),i=wC(),o=yC(!1),a=yC(void 0);return aC(pC(OC(n,r),hC((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),aC(pC(t,vC(r),hC((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:n,windowScrollTo:i,windowViewportRect:r}}),tC(BC)),iD=SC((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=wC(),d=yC(void 0),u=yC(null),h=yC(null);return aC(s,u),aC(l,h),nC(pC(c,vC(t,r,a,u,h,n)),(([e,t,n,r,i,o,a])=>{const s=function(e){return UC(e).map((({k:e,v:t},n,r)=>{const i=r[n+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==i&&null!==o&&(n=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:n-=a})})),aC(pC(d,uC(ZO),hC(oD)),i),aC(pC(o,vC(d),uC((([,e])=>void 0!==e)),dC(),hC((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),tC($T,BC,IT,OT,rD));function oD(e){return{align:"start",index:0,offset:e.scrollTop}}const aD=SC((([{topItemsIndexes:e}])=>{const t=yC(0);return aC(pC(t,uC((e=>e>=0)),hC((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),tC(KT));function sD(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const lD=sD((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),cD=SC((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:h},{log:f},{recalcInProgress:p}])=>{const g=$C(pC(l,vC(a),gC((([,e,t,n],[{bottom:r,items:i,offsetBottom:o,totalCount:a},s])=>{const l=r+o;let c=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-n,0!==c&&(c+=s))),[c,i,a,l]}),[0,[],0,0]),uC((([e])=>0!==e)),vC(r,s,n,i,f,p),uC((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===ET)),hC((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},DC.DEBUG),e)))));function m(n){n>0?(rC(t,{behavior:"auto",top:-n}),rC(e,0)):(rC(e,0),rC(t,{behavior:"auto",top:-n}))}return nC(pC(g,vC(e,o)),(([t,n,r])=>{r&&lD()?rC(e,n-t):m(-t)})),nC(pC(OC(xC(o,!1),e,p),uC((([e,t,n])=>!e&&!n&&0!==t)),hC((([e,t])=>t)),bC(1)),m),aC(pC(u,hC((e=>({top:-e})))),t),nC(pC(c,vC(h,d),hC((([e,{groupIndices:t,lastSize:n,sizeTree:r},i])=>{function o(e){return e*(n+i)}if(0===t.length)return o(e);{let n=0;const i=FC(r,0);let a=0,s=0;for(;a<e;){a++,n+=i;let r=t.length===s+1?1/0:t[s+1]-t[s]-1;a+r>e&&(n-=i,r=e-a+1),a+=r,n+=o(r),s++}return n}}))),(n=>{rC(e,n),requestAnimationFrame((()=>{rC(t,{top:n}),requestAnimationFrame((()=>{rC(e,0),rC(p,!1)}))}))})),{deviation:e}}),tC(BC,BT,KT,$T,_C,oT)),dD=SC((([e,t,n,r,i,o,a,s,l,c])=>({...e,...t,...n,...r,...i,...o,...a,...s,...l,...c})),tC(HT,QT,OT,nD,XT,JT,qT,rD,tD,_C)),uD=SC((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:S},{groupCounts:k},O])=>(aC(x.rangeChanged,O.scrollSeekRangeChanged),aC(pC(O.windowViewportRect,hC((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:i,groupCounts:k,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p,sizeRanges:s,topItemCount:S,topItemsIndexes:y,totalCount:d,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...O,...g,sizes:l,...m})),tC($T,IT,BC,iD,ZT,KT,DT,cD,aD,kT,dD));function hD(e,t){const n={},r={};let i=0;const o=e.length;for(;i<o;)r[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const fD=typeof document<"u"?i.useLayoutEffect:i.useEffect;function pD(t,n,r){const o=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),s=Object.keys(n.methods||{}),l=Object.keys(n.events||{}),c=i.createContext({});function d(e,t){e.propsReady&&rC(e.propsReady,!1);for(const r of o){rC(e[n.required[r]],t[r])}for(const r of a)if(r in t){rC(e[n.optional[r]],t[r])}e.propsReady&&rC(e.propsReady,!0)}function u(e){return l.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(i,o){switch(i){case WO:return o?n===o?void 0:(r(),n=o,t=nC(e,o),t):(r(),QO);case VO:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const h=i.forwardRef(((h,f)=>{const{children:p,...g}=h,[m]=i.useState((()=>JO(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(r.map((e=>n(e))));return o&&t.set(i,a),a};return n(e)}(t),(e=>{d(e,g)})))),[b]=i.useState(qO(u,m));fD((()=>{for(const e of l)e in g&&nC(b[e],g[e]);return()=>{Object.values(b).map(iC)}}),[g,b,m]),fD((()=>{d(m,g)})),i.useImperativeHandle(f,UO(function(e){return s.reduce(((t,r)=>(t[r]=t=>{rC(e[n.methods[r]],t)},t)),{})}(m)));const v=r;return e(c.Provider,{value:m,children:r?e(v,{...hD([...o,...a,...l],g),children:p}):p})})),f=i.version.startsWith("18")?e=>{const t=i.useContext(c)[e],n=i.useCallback((e=>nC(t,e)),[t]);return i.useSyncExternalStore(n,(()=>oC(t)),(()=>oC(t)))}:e=>{const t=i.useContext(c)[e],[n,r]=i.useState(qO(oC,t));return fD((()=>nC(t,(e=>{e!==n&&r(UO(e))}))),[t,n]),n};return{Component:h,useEmitter:(e,t)=>{const n=i.useContext(c)[e];fD((()=>nC(n,t)),[t,n])},useEmitterValue:f,usePublisher:e=>i.useCallback(GO(rC,i.useContext(c)[e]),[e])}}const gD=i.createContext(void 0),mD=i.createContext(void 0),bD=typeof document<"u"?i.useLayoutEffect:i.useEffect;function vD(e,t,n,r=QO,o,a){const s=i.useRef(null),l=i.useRef(null),c=i.useRef(null),d=i.useCallback((n=>{const r=n.target,i=r===window||r===document,o=a?i?window.pageXOffset||document.documentElement.scrollLeft:r.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:r.scrollTop,s=a?i?document.documentElement.scrollWidth:r.scrollWidth:i?document.documentElement.scrollHeight:r.scrollHeight,d=a?i?window.innerWidth:r.offsetWidth:i?window.innerHeight:r.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(o,0),viewportHeight:d})};n.suppressFlushSync?u():C.flushSync(u),null!==l.current&&(o===l.current||o<=0||o===s-d)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return i.useEffect((()=>{const e=o||s.current;return r(o||s.current),d({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",d,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",d)}}),[s,d,n,r,o]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(n){const r=s.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const i="smooth"===n.behavior;let o,d,u;r===window?(d=Math.max(lT(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),o=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=r[a?"scrollWidth":"scrollHeight"],o=lT(r,a?"width":"height"),u=r[a?"scrollLeft":"scrollTop"]);const h=d-o;if(n.top=Math.ceil(Math.max(Math.min(h,n.top),0)),MT(o,d)||n.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:o}),void(i&&t(!0));i?(l.current=n.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const yD="-webkit-sticky",xD="sticky",wD=sD((()=>{if(typeof document>"u")return xD;const e=document.createElement("div");return e.style.position=yD,e.style.position===yD?yD:xD}));function $D(e){return e}const SD=SC((()=>{const e=yC((e=>`Item ${e}`)),t=yC(null),n=yC((e=>`Group ${e}`)),r=yC({}),i=yC($D),o=yC("div"),a=yC(QO),s=(e,t=null)=>xC(pC(r,hC((t=>t[e])),dC()),t);return{components:r,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:n,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),kD=SC((([e,t])=>({...e,...t})),tC(uD,SD)),OD=({height:t})=>e("div",{style:{height:t}}),CD={overflowAnchor:"none",position:wD(),zIndex:1},TD={overflowAnchor:"none"},DD={...TD,display:"inline-block",height:"100%"},jD=i.memo((function({showTopList:t=!1}){const n=UD("listState"),r=KD("sizeRanges"),o=UD("useWindowScroll"),a=UD("customScrollParent"),s=KD("windowScrollContainerState"),l=KD("scrollContainerState"),c=a||o?s:l,d=UD("itemContent"),u=UD("context"),h=UD("groupContent"),f=UD("trackItemSizes"),p=UD("itemSize"),g=UD("log"),m=KD("gap"),b=UD("horizontalDirection"),{callbackRef:v}=EC(r,p,f,t?QO:c,g,m,a,b,UD("skipAnimationFrameInResizeObserver")),[y,x]=i.useState(0);YD("deviation",(e=>{y!==e&&x(e)}));const w=UD("EmptyPlaceholder"),$=UD("ScrollSeekPlaceholder")||OD,S=UD("ListComponent"),k=UD("ItemComponent"),C=UD("GroupComponent"),T=UD("computeItemKey"),D=UD("isSeeking"),j=UD("groupIndices").length>0,_=UD("alignToBottom"),I=UD("initialItemFinalLocationReached"),M=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:_?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:_?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...I?{}:{visibility:"hidden"}};return!t&&0===n.totalCount&&w?e(w,{...AD(w,u)}):e(S,{...AD(S,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:M,children:(t?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=T(t+n.firstItemIndex,e.data,u);return D?O($,{...AD($,u),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?O(C,{...AD(C,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:CD},h(e.index,u)):O(k,{...AD(k,u),...ND(k,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:b?DD:TD},j?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),_D={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},ID={outline:"none",overflowX:"auto",position:"relative"},MD=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),ED={position:wD(),top:0,width:"100%",zIndex:1};function AD(e,t){if("string"!=typeof e)return{context:t}}function ND(e,t){return{item:"string"==typeof e?void 0:t}}const BD=i.memo((function(){const t=UD("HeaderComponent"),n=KD("headerHeight"),r=UD("HeaderFooterTag"),o=IC(i.useMemo((()=>e=>{n(lT(e,"height"))}),[n]),!0,UD("skipAnimationFrameInResizeObserver")),a=UD("context");return t?e(r,{ref:o,children:e(t,{...AD(t,a)})}):null})),LD=i.memo((function(){const t=UD("FooterComponent"),n=KD("footerHeight"),r=UD("HeaderFooterTag"),o=IC(i.useMemo((()=>e=>{n(lT(e,"height"))}),[n]),!0,UD("skipAnimationFrameInResizeObserver")),a=UD("context");return t?e(r,{ref:o,children:e(t,{...AD(t,a)})}):null}));function RD({useEmitter:t,useEmitterValue:n,usePublisher:r}){return i.memo((function({children:i,style:o,...a}){const s=r("scrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("scrollerRef"),u=n("context"),h=n("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:p,scrollToCallback:g}=vD(s,c,l,d,void 0,h);return t("scrollTo",g),t("scrollBy",f),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?ID:_D,...o},tabIndex:0,...a,...AD(l,u),children:i})}))}function PD({useEmitter:t,useEmitterValue:n,usePublisher:r}){return i.memo((function({children:i,style:o,...a}){const s=r("windowScrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("totalListHeight"),u=n("deviation"),h=n("customScrollParent"),f=n("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=vD(s,c,l,QO,h);return bD((()=>(g.current=h||window,()=>{g.current=null})),[g,h]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==d?{height:d+u}:{}},...a,...AD(l,f),children:i})}))}const FD=({children:t})=>{const n=i.useContext(gD),r=KD("viewportHeight"),o=KD("fixedItemHeight"),a=UD("alignToBottom"),s=UD("horizontalDirection"),l=IC(i.useMemo((()=>XO(r,(e=>lT(e,s?"width":"height")))),[r,s]),!0,UD("skipAnimationFrameInResizeObserver"));return i.useEffect((()=>{n&&(r(n.viewportHeight),o(n.itemHeight))}),[n,r,o]),e("div",{"data-viewport-type":"element",ref:l,style:MD(a),children:t})},zD=({children:t})=>{const n=i.useContext(gD),r=KD("windowViewportRect"),o=KD("fixedItemHeight"),a=UD("customScrollParent"),s=NC(r,a,UD("skipAnimationFrameInResizeObserver")),l=UD("alignToBottom");return i.useEffect((()=>{n&&(o(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,o]),e("div",{"data-viewport-type":"window",ref:s,style:MD(l),children:t})},HD=({children:t})=>{const n=UD("TopItemListComponent")||"div",r=UD("headerHeight"),i={...ED,marginTop:`${r}px`},o=UD("context");return e(n,{style:i,...AD(n,o),children:t})},WD=i.memo((function(n){const r=UD("useWindowScroll"),i=UD("topItemsIndexes").length>0,o=UD("customScrollParent"),a=UD("context"),s=o||r?qD:XD,l=o||r?zD:FD;return t(s,{...n,...AD(s,a),children:[i&&e(HD,{children:e(jD,{showTopList:!0})}),t(l,{children:[e(BD,{}),e(jD,{}),e(LD,{})]})]})})),{Component:VD,useEmitter:YD,useEmitterValue:UD,usePublisher:KD}=pD(kD,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},WD),XD=RD({useEmitter:YD,useEmitterValue:UD,usePublisher:KD}),qD=PD({useEmitter:YD,useEmitterValue:UD,usePublisher:KD}),GD=VD,ZD={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},QD={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:JD,floor:ej,max:tj,min:nj,round:rj}=Math;function ij(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function oj(e,t){return e&&e.width===t.width&&e.height===t.height}function aj(e,t){return e&&e.column===t.column&&e.row===t.row}const sj=SC((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},h,f,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=yC(0),S=yC(0),k=yC(ZD),O=yC({height:0,width:0}),C=yC({height:0,width:0}),T=wC(),D=wC(),j=yC(0),_=yC(null),I=yC({column:0,row:0}),M=wC(),E=wC(),A=yC(!1),N=yC(0),B=yC(!0),L=yC(!1),R=yC(!1);nC(pC(p,vC(N),uC((([e,t])=>!!t))),(()=>{rC(B,!1)})),nC(pC(OC(p,B,C,O,N,L),uC((([e,t,n,r,,i])=>e&&!t&&0!==n.height&&0!==r.height&&!i))),(([,,,,e])=>{rC(L,!0),jT(1,(()=>{rC(T,e)})),sC(pC(c),(()=>{rC(t,[0,0]),rC(B,!0)}))})),aC(pC(E,uC((e=>null!=e&&e.scrollTop>0)),fC(0)),S),nC(pC(p,vC(E),uC((([,e])=>null!=e))),(([,e])=>{e&&(rC(O,e.viewport),rC(C,e.item),rC(I,e.gap),e.scrollTop>0&&(rC(A,!0),sC(pC(c,mC(1)),(e=>{rC(A,!1)})),rC(l,{top:e.scrollTop})))})),aC(pC(O,hC((({height:e})=>e))),u),aC(pC(OC(CC(O,oj),CC(C,oj),CC(I,((e,t)=>e&&e.column===t.column&&e.row===t.row)),CC(c)),hC((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),M),aC(pC(OC(CC($),r,CC(I,aj),CC(C,oj),CC(O,oj),CC(_),CC(S),CC(A),CC(B),CC(N)),uC((([,,,,,,,e])=>!e)),hC((([e,[t,n],r,i,o,a,s,,l,c])=>{const{column:d,row:u}=r,{height:h,width:f}=i,{width:p}=o;if(0===s&&(0===e||0===p))return ZD;if(0===f){const t=_T(c,e);return function(e){return{...QD,items:e}}(ij(t,t+Math.max(s-1,0),a))}const g=lj(p,f,d);let m,b;l?0===t&&0===n&&s>0?(m=0,b=s-1):(m=g*ej((t+u)/(h+u)),b=g*JD((n+u)/(h+u))-1,b=nj(e-1,tj(b,g-1)),m=nj(b,tj(0,m))):(m=0,b=-1);const v=ij(m,b,a),{bottom:y,top:x}=cj(o,r,i,v),w=JD(e/g);return{bottom:y,itemHeight:h,items:v,itemWidth:f,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),k),aC(pC(_,uC((e=>null!==e)),hC((e=>e.length))),$),aC(pC(OC(O,C,k,I),uC((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),hC((([e,t,{items:n},r])=>{const{bottom:i,top:o}=cj(e,r,t,n);return[o,i]})),dC(iT)),t);const P=yC(!1);aC(pC(c,vC(P),hC((([e,t])=>t||0!==e))),P);const F=$C(pC(OC(k,$),uC((([{items:e}])=>e.length>0)),vC(P),uC((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),hC((([[,e]])=>e-1)),dC())),z=$C(pC(CC(k),uC((({items:e})=>e.length>0&&0===e[0].index)),fC(0),dC())),H=$C(pC(CC(k),vC(A),uC((([{items:e},t])=>e.length>0&&!t)),hC((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),dC(rT),bC(0)));aC(H,f.scrollSeekRangeChanged),aC(pC(T,vC(O,C,$,I),hC((([e,t,n,r,i])=>{const o=TT(e),{align:a,behavior:s,offset:l}=o;let c=o.index;"LAST"===c&&(c=r-1),c=tj(0,c,nj(r-1,c));let d=dj(t,i,n,c);return"end"===a?d=rj(d-t.height+n.height):"center"===a&&(d=rj(d-t.height/2+n.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=xC(pC(k,hC((e=>e.offsetBottom+e.bottom))),0);return aC(pC(x,hC((e=>({height:e.visibleHeight,width:e.visibleWidth})))),O),{customScrollParent:m,data:_,deviation:j,footerHeight:i,gap:I,headerHeight:o,increaseViewportBy:e,initialItemCount:S,itemDimensions:C,overscan:n,restoreStateFrom:E,scrollBy:a,scrollContainerState:s,scrollHeight:D,scrollTo:l,scrollToIndex:T,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:O,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...f,gridState:k,horizontalDirection:R,initialTopMostItemIndex:N,totalListHeight:W,...h,endReached:F,propsReady:g,rangeChanged:H,startReached:z,stateChanged:M,stateRestoreInProgress:A,...w}}),tC(HT,BC,BT,nD,OT,rD,_C));function lj(e,t,n){return tj(1,ej((e+n)/(ej(t)+n)))}function cj(e,t,n,r){const{height:i}=n;if(void 0===i||0===r.length)return{bottom:0,top:0};const o=dj(e,t,n,r[0].index);return{bottom:dj(e,t,n,r[r.length-1].index)+i,top:o}}function dj(e,t,n,r){const i=lj(e.width,n.width,t.column),o=ej(r/i),a=o*n.height+tj(0,o-1)*t.row;return a>0?a+t.row:a}const uj=SC((()=>{const e=yC((e=>`Item ${e}`)),t=yC({}),n=yC(null),r=yC("virtuoso-grid-item"),i=yC("virtuoso-grid-list"),o=yC($D),a=yC("div"),s=yC(QO),l=(e,n=null)=>xC(pC(t,hC((t=>t[e])),dC()),n),c=yC(!1),d=yC(!1);return aC(CC(d),c),{components:t,computeItemKey:o,context:n,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),hj=SC((([e,t])=>({...e,...t})),tC(sj,uj)),fj=i.memo((function(){const t=wj("gridState"),n=wj("listClassName"),r=wj("itemClassName"),o=wj("itemContent"),a=wj("computeItemKey"),s=wj("isSeeking"),l=$j("scrollHeight"),c=wj("ItemComponent"),d=wj("ListComponent"),u=wj("ScrollSeekPlaceholder"),h=wj("context"),f=$j("itemDimensions"),p=$j("gap"),g=wj("log"),m=wj("stateRestoreInProgress"),b=$j("reportReadyState"),v=IC(i.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();f({height:e,width:t})}p({column:Oj("column-gap",getComputedStyle(e).columnGap,g),row:Oj("row-gap",getComputedStyle(e).rowGap,g)})}),[l,f,p,g]),!0,!1);return bD((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(d,{className:n,ref:v,...AD(d,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((n=>{const i=a(n.index,n.data,h);return s?e(u,{...AD(u,h),height:t.itemHeight,index:n.index,width:t.itemWidth},i):O(c,{...AD(c,h),className:r,"data-index":n.index,key:i},o(n.index,n.data,h))}))})})),pj=i.memo((function(){const t=wj("HeaderComponent"),n=$j("headerHeight"),r=wj("headerFooterTag"),o=IC(i.useMemo((()=>e=>{n(lT(e,"height"))}),[n]),!0,!1),a=wj("context");return t?e(r,{ref:o,children:e(t,{...AD(t,a)})}):null})),gj=i.memo((function(){const t=wj("FooterComponent"),n=$j("footerHeight"),r=wj("headerFooterTag"),o=IC(i.useMemo((()=>e=>{n(lT(e,"height"))}),[n]),!0,!1),a=wj("context");return t?e(r,{ref:o,children:e(t,{...AD(t,a)})}):null})),mj=({children:t})=>{const n=i.useContext(mD),r=$j("itemDimensions"),o=$j("viewportDimensions"),a=IC(i.useMemo((()=>e=>{o(e.getBoundingClientRect())}),[o]),!0,!1);return i.useEffect((()=>{n&&(o({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,o,r]),e("div",{ref:a,style:MD(!1),children:t})},bj=({children:t})=>{const n=i.useContext(mD),r=$j("windowViewportRect"),o=$j("itemDimensions"),a=wj("customScrollParent"),s=NC(r,a,!1);return i.useEffect((()=>{n&&(o({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,o]),e("div",{ref:s,style:MD(!1),children:t})},vj=i.memo((function({...n}){const r=wj("useWindowScroll"),i=wj("customScrollParent"),o=i||r?kj:Sj,a=i||r?bj:mj,s=wj("context");return e(o,{...n,...AD(o,s),children:t(a,{children:[e(pj,{}),e(fj,{}),e(gj,{})]})})})),{Component:yj,useEmitter:xj,useEmitterValue:wj,usePublisher:$j}=pD(hj,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},vj),Sj=RD({useEmitter:xj,useEmitterValue:wj,usePublisher:$j}),kj=PD({useEmitter:xj,useEmitterValue:wj,usePublisher:$j});function Oj(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,DC.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Cj=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Tj=({children:t})=>{const[n,r]=a(-1);return e(Cj.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:t}))},Dj=I.div`
    overflow: hidden;
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    background: ${ml.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${yl.MaxWidth.mobileL} {
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
        background: ${ml.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,jj=I.div`
    background: transparent;
    padding: 0.5rem;
`,_j=I.ul`
    list-style-type: none;
`,Ij=I.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${ml.Accent.Light[3]};

    ${e=>e.$active&&M`
            background: ${ml.Accent.Light[5]};
        `}
`,Mj=I(Ve)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${ml.Primary};
`,Ej=I.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,Aj=I(We)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ml.Primary};
`,Nj=I(He)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ml.Accent.Light[2]};
`,Bj=I.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Lj=I(Xf)`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${ml.Primary};
`,Rj=I(Lj)`
    outline-offset: 0.25rem;
`,Pj=I(Lj)`
    padding: 0.5rem 1rem;
`,Fj=I.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,zj=I.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,Hj=I(L)`
    ${e=>{const t="small"===e.$variant?1:1.125;return M`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${ml.Validation.Red.Icon};
`,Wj=e=>"small"===e?1:1.125,Vj=e=>M`
        height: ${Wj(e)}rem;
        width: ${Wj(e)}rem;
    `,Yj=I.div`
    background: ${ml.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,Uj=I.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,Kj=I(Kf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Xj=I(Re)`
    color: ${ml.Neutral[3]};
    flex-shrink: 0;
    ${e=>Vj(e.$variant)}
`,qj=I($l)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${ml.Neutral[3]};
    cursor: pointer;

    ${e=>M`
            svg {
                ${Vj(e.$variant)}
            }
        `}
`,Gj=f(((n,r)=>{var{value:i,variant:o,onClear:a}=n,s=lt(n,["value","variant","onClear"]);return t(Yj,{children:[t(Uj,{children:[e(Xj,{$variant:o,"aria-hidden":!0}),e(Kj,Object.assign({ref:r,value:i,$variant:o},s))]}),i&&e(qj,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:o},{children:e(Ae,{"aria-hidden":!0})}))]})})),Zj=({listItems:r,multiSelect:i,selectedItems:s,disableItemFocus:l,itemsLoadState:c="success",itemTruncationType:d="end",itemMaxLines:h=2,labelDisplayType:f="inline",variant:m="default",listboxId:b,width:v,topScrollItem:y,onSelectItem:x,onSelectAll:w,onDismiss:$,onRetry:S,valueExtractor:k,listExtractor:O,renderListItem:C,renderCustomCallToAction:T,enableSearch:D,hideNoResultsDisplay:j,searchPlaceholder:_="Search",searchFunction:I,onSearch:M})=>{const{focusedIndex:E,setFocusedIndex:A}=g(Cj),[N,B]=a(""),[L,R]=a(r),P=Ed(c),F=Id(),z=o(),H=o(),W=o([]),V=o(),Y=o(null),U=e=>O?O(e):e.toString(),K=p((e=>!!Ek(s,(t=>Nk(t,e)))),[s]),X=Dd((()=>I(N))),q=Dd((()=>r.filter((e=>{var t;const n=U(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),o=N.trim().toLowerCase();return r.includes(o)||i&&i.includes(o)})))),G=(e,t)=>{A(t),null==x||x(e,(e=>k?k(e):e)(e))},Z=e=>{const t=e.target.value;B(t),null==M||M()},Q=()=>{var e;B(""),null===(e=V.current)||void 0===e||e.focus(),null==M||M()},J=()=>{null==S||S()};jd("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),E<L.length-1){const e=E+1;null===(t=W.current[e])||void 0===t||t.focus(),A(e)}break;case"ArrowUp":if(e.preventDefault(),E>0){const e=E-1;null===(n=W.current[e])||void 0===n||n.focus(),A(e)}else 0===E&&V.current&&(V.current.focus(),A(-1));break;case"Space":case"Enter":document.activeElement===W.current[E]&&(e.preventDefault(),L[E]&&G(L[E],E))}})),u((()=>{if(!y&&Y.current)return void Y.current.scrollTo({top:0});const e=setTimeout((()=>{const e=r.indexOf(y);Y.current&&-1!==e&&(Y.current.scrollToIndex({index:e}),A(e))}),0);return()=>clearTimeout(e)}),[W,r,A,y]),u((()=>{if(F)return;if(l)return;const e=r.findIndex((e=>K(e)));V.current?(A(-1),setTimeout((()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.focus()}),200)):E>0?(Y.current.scrollToIndex({index:E,align:"center"}),setTimeout((()=>{var e;return null===(e=W.current[E])||void 0===e?void 0:e.focus()}),200)):-1!==e?(Y.current.scrollToIndex({index:e,align:"center"}),A(e),setTimeout((()=>{var t;return null===(t=W.current[e])||void 0===t?void 0:t.focus()}),200)):(Y.current.scrollToIndex({index:0}),A(0),setTimeout((()=>{var e;return null===(e=W.current[0])||void 0===e?void 0:e.focus()}),200))}),[K,l,E,r,F,A]),u((()=>{F&&P&&(l||"success"===c&&V.current&&(A(-1),V.current.focus()))}),[F,P,c,A,l]),u((()=>{R(""===N?r:I?X():q())}),[X,q,r,I,N]);const ee=t=>i?e(t?Aj:Nj,{"aria-hidden":!0}):t?e(Mj,{"aria-hidden":!0}):e(Ej,{}),te=(t,n)=>{const r=U(t),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel;return e(zO,{displayType:f,label:i,maxLines:h,selected:n,sublabel:o,truncationType:d,variant:m})},ne=(r,o)=>{if(!S||S&&"success"===c){const a=K(r),s=o===E;return e(Ij,Object.assign({"aria-selected":a,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>G(r,o),onMouseEnter:()=>(e=>{A(e)})(o),ref:e=>{W.current[o]=e},role:"option",tabIndex:s?0:-1,$active:s},{children:C?C(r,{selected:a}):t(n,{children:[ee(a),te(r,a)]})}),((e,t)=>`item_${t}__${k?k(e):e}`)(r,o))}},re=()=>{if((D||I)&&"success"===c)return e(Gj,{ref:V,onChange:Z,value:N,placeholder:_,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Q,variant:m})},ie=()=>{if(i&&L.length>0&&!N&&"success"===c)return e(Bj,{children:e(Pj,Object.assign({onClick:w,type:"button",$variant:m},{children:0===s.length?"Select all":"Clear all"}))})},oe=()=>{if(!j&&(N||!D)&&0===L.length&&"success"===c)return t(Fj,Object.assign({"data-testid":"list-no-results"},{children:[e(Hj,{"data-testid":"no-result-icon",$variant:m}),e(zj,Object.assign({$variant:m},{children:"No results found."}))]}))},ae=()=>{if(S&&"loading"===c){const n="small"===m?16:18;return t(Fj,Object.assign({"data-testid":"list-loading"},{children:[e(lc,{$buttonStyle:"secondary",size:n}),e(zj,Object.assign({$variant:m},{children:"Loading..."}))]}))}},se=()=>{if(S&&"fail"===c)return t(Fj,Object.assign({"data-testid":"list-fail"},{children:[e(Hj,{"data-testid":"load-error-icon",$variant:m}),e(zj,Object.assign({$variant:m},{children:"Failed to load."}))," ",e(Rj,Object.assign({onClick:J,type:"button",$variant:m},{children:"Try again."}))]}))};return t(Dj,Object.assign({"data-testid":"dropdown-container",ref:z,$width:v},{children:[t(jj,Object.assign({ref:H,"data-testid":"dropdown-list"},{children:[re(),ie(),oe(),ae(),se(),e(_j,Object.assign({role:"listbox",id:b},{children:e(GD,{ref:Y,style:{height:"100%"},data:L,customScrollParent:z.current,itemContent:(e,t)=>ne(t,e)})}))]})),(()=>{if(T)return e("div",Object.assign({"data-testid":"custom-cta"},{children:T($,L)}))})()]}))},Qj=I(Xf)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Jj=I.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Pl.Base};

    svg {
        color: ${ml.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Dl.BodySmall.fontSize:Dl.Body.fontSize;return M`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,e_=f((({children:n,disabled:r,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},c)=>t(Qj,Object.assign({ref:c,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":o,$variant:l},{children:[n,!s&&e(Jj,Object.assign({$expanded:i,$variant:l},{children:e(fe,{"aria-hidden":!0})}))]}))));var t_=Symbol.for("immer-nothing"),n_=Symbol.for("immer-draftable"),r_=Symbol.for("immer-state"),i_="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function o_(e,...t){if("production"!==process.env.NODE_ENV){const n=i_[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var a_=Object.getPrototypeOf;function s_(e){return!!e&&!!e[r_]}function l_(e){return!!e&&(d_(e)||Array.isArray(e)||!!e[n_]||!!e.constructor?.[n_]||g_(e)||m_(e))}var c_=Object.prototype.constructor.toString();function d_(e){if(!e||"object"!=typeof e)return!1;const t=a_(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===c_}function u_(e,t){0===h_(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function h_(e){const t=e[r_];return t?t.type_:Array.isArray(e)?1:g_(e)?2:m_(e)?3:0}function f_(e,t){return 2===h_(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function p_(e,t,n){const r=h_(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function g_(e){return e instanceof Map}function m_(e){return e instanceof Set}function b_(e){return e.copy_||e.base_}function v_(e,t){if(g_(e))return new Map(e);if(m_(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=d_(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[r_];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const i=n[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(a_(e),t)}{const t=a_(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function y_(e,t=!1){return w_(e)||s_(e)||!l_(e)||(h_(e)>1&&(e.set=e.add=e.clear=e.delete=x_),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>y_(t,!0)))),e}function x_(){o_(2)}function w_(e){return Object.isFrozen(e)}var $_,S_={};function k_(e){const t=S_[e];return t||o_(0,e),t}function O_(){return $_}function C_(e,t){t&&(k_("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function T_(e){D_(e),e.drafts_.forEach(__),e.drafts_=null}function D_(e){e===$_&&($_=e.parent_)}function j_(e){return $_={drafts_:[],parent_:$_,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function __(e){const t=e[r_];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function I_(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[r_].modified_&&(T_(t),o_(4)),l_(e)&&(e=M_(t,e),t.parent_||A_(t,e)),t.patches_&&k_("Patches").generateReplacementPatches_(n[r_].base_,e,t.patches_,t.inversePatches_)):e=M_(t,n,[]),T_(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==t_?e:void 0}function M_(e,t,n){if(w_(t))return t;const r=t[r_];if(!r)return u_(t,((i,o)=>E_(e,r,t,i,o,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return A_(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,o=!1;3===r.type_&&(i=new Set(t),t.clear(),o=!0),u_(i,((i,a)=>E_(e,r,t,i,a,n,o))),A_(e,t,!1),n&&e.patches_&&k_("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function E_(e,t,n,r,i,o,a){if("production"!==process.env.NODE_ENV&&i===n&&o_(5),s_(i)){const a=M_(e,i,o&&t&&3!==t.type_&&!f_(t.assigned_,r)?o.concat(r):void 0);if(p_(n,r,a),!s_(a))return;e.canAutoFreeze_=!1}else a&&n.add(i);if(l_(i)&&!w_(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;M_(e,i),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||A_(e,i)}}function A_(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&y_(t,n)}var N_={get(e,t){if(t===r_)return e;const n=b_(e);if(!f_(n,t))return function(e,t,n){const r=R_(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!l_(r)?r:r===L_(e.base_,t)?(F_(e),e.copy_[t]=z_(r,e)):r},has:(e,t)=>t in b_(e),ownKeys:e=>Reflect.ownKeys(b_(e)),set(e,t,n){const r=R_(b_(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=L_(b_(e),t),i=r?.[r_];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,r)&&(void 0!==n||f_(e.base_,t)))return!0;F_(e),P_(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==L_(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,F_(e),P_(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=b_(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){o_(11)},getPrototypeOf:e=>a_(e.base_),setPrototypeOf(){o_(12)}},B_={};function L_(e,t){const n=e[r_];return(n?b_(n):e)[t]}function R_(e,t){if(!(t in e))return;let n=a_(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=a_(n)}}function P_(e){e.modified_||(e.modified_=!0,e.parent_&&P_(e.parent_))}function F_(e){e.copy_||(e.copy_=v_(e.base_,e.scope_.immer_.useStrictShallowCopy_))}u_(N_,((e,t)=>{B_[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),B_.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&o_(13),B_.set.call(this,e,t,void 0)},B_.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&o_(14),N_.set.call(this,e[0],t,n,e[0])};function z_(e,t){const n=g_(e)?k_("MapSet").proxyMap_(e,t):m_(e)?k_("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:O_(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=N_;n&&(i=[r],o=B_);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return r.draft_=s,r.revoke_=a,s}(e,t);return(t?t.scope_:O_()).drafts_.push(n),n}function H_(e){if(!l_(e)||w_(e))return e;const t=e[r_];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=v_(e,t.scope_.immer_.useStrictShallowCopy_)}else n=v_(e,!0);return u_(n,((e,t)=>{p_(n,e,H_(t))})),t&&(t.finalized_=!1),n}var W_=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&o_(6),void 0!==n&&"function"!=typeof n&&o_(7),l_(e)){const i=j_(this),o=z_(e,void 0);let a=!0;try{r=t(o),a=!1}finally{a?T_(i):D_(i)}return C_(i,n),I_(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===t_&&(r=void 0),this.autoFreeze_&&y_(r,!0),n){const t=[],i=[];k_("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}o_(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;const i=this.produce(e,t,((e,t)=>{n=e,r=t}));return[i,n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){l_(e)||o_(8),s_(e)&&(e=function(e){s_(e)||o_(10,e);return H_(e)}(e));const t=j_(this),n=z_(e,void 0);return n[r_].isManual_=!0,D_(t),n}finishDraft(e,t){const n=e&&e[r_];n&&n.isManual_||o_(9);const{scope_:r}=n;return C_(r,t),I_(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=k_("Patches").applyPatches_;return s_(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},V_=W_.produce;W_.produceWithPatches.bind(W_),W_.setAutoFreeze.bind(W_),W_.setUseStrictShallowCopy.bind(W_),W_.applyPatches.bind(W_),W_.createDraft.bind(W_),W_.finishDraft.bind(W_);var Y_=V$,U_=$S,K_=u$,X_=Uo,q_=K$,G_=p$,Z_=P$,Q_=j$,J_=Object.prototype.hasOwnProperty;var eI=Vo((function(e){if(null==e)return!0;if(q_(e)&&(X_(e)||"string"==typeof e||"function"==typeof e.splice||G_(e)||Q_(e)||K_(e)))return!e.length;var t=U_(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(Z_(e))return!Y_(e).length;for(var n in e)if(J_.call(e,n))return!1;return!0}));const tI=(e,t,n)=>{const r=V_(e,(e=>{for(let r=e.length-1;r>=0;r--){const i=e[r],o=rI(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&n&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?i.checked=!0:r&&(i.checked="mixed")}}}));return r},nI=(e,t)=>{const[n,...r]=t;if(eI(e)||eI(n))return;const i=e.find((e=>e.key===n));return i&&r.length?nI(i.subItems,r):i},rI=e=>e.join(","),iI=e=>new Set(e.map((e=>e.join(",")))),oI=I.li`
    display: ${e=>e.$visible?"flex":"none"};
`,aI=I.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${ml.Accent.Light[3]};

    ${e=>e.$active&&M`
            background: ${ml.Accent.Light[5]};
        `}
`,sI=I.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,lI=I.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${ml.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return M`
                    transform: rotate(90deg);
                `}}
    }
`,cI=I.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,dI=I.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,uI=I(Ve)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${ml.Primary};
`,hI=I(Ue)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ml.Primary};
`,fI=({listItems:n,multiSelect:r,selectedKeyPaths:i,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:c=2,variant:d="default",listboxId:h,width:f,mode:p="default",selectableCategory:g,onSelectItem:b,onSelectAll:v,onRetry:y,enableSearch:x,hideNoResultsDisplay:w,searchPlaceholder:$="Search",onSearch:S})=>{const k=r||g,[O,C]=a(""),T=O.toLowerCase().trim(),[D,j]=a(!1),_=o(),I=o(),M=o([]),E=o(),A=Id(),[N,B]=a([]),[L,R]=a([]),P=D?L:N,F=m((()=>{let e=0;for(const t of N)t.level>e&&(e=t.level);return e}),[N]),[z,H]=a(0),[W,V]=a([]),[Y,U]=a(0),K=e=>{const t=e.target.value;C(t),""===t?j(!1):t.trim().length>=3&&j(!0),null==S||S()},X=()=>{C(""),j(!1),E.current.focus(),null==S||S()},q=()=>{null==y||y()},G=()=>{if(0===i.size){const e=[],t=[];N.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==v||v(e,t)}else null==v||v([],[])},Z=Dd(((e,t)=>((e,t,n,r,i)=>{const o=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var h,f;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=rI(g),b={item:d,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||(null==s?void 0:s.expanded),expanded:i,checked:t.has(m),hasSubItems:!!(null===(h=d.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!r&&-1!==d.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(f=d.subItems)||void 0===f?void 0:f.length){const e=a(d.subItems,b);if(n&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?b.checked=!0:n&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,i,r,T,t))),Q=Dd((e=>{return i.size?(t=Z(e,!1),V_(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>V_(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const i=e[t].keyPath.length;if(i>r)r=i;else if(i<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],i=r.keyPath.slice(0,-1),o=e[n].keyPath.slice(0,i.length);Nk(i,o)&&(r.visible=!0)}return e})))(Z(e,!1));var t})),J=Dd((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(T))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),ee=Dd((()=>{B((e=>tI(e,i,r))),D&&R((e=>tI(e,i,r)))})),te=(e,t,n)=>{const r=((e,t,n)=>V_(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,r.length);if(!Nk(r,a))break;t.visible=n&&o.expanded&&o.visible}})))(P,e,t);H(e),U(n),D?R(r):B(r)};jd("keydown",(e=>{switch(e.code){case"ArrowDown":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return e[r]})(P,(e=>e.visible),z+1);t&&(U((e=>e+1)),H(t.index),M.current[t.index].focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return e[r]})(P,(e=>e.visible),z-1);t?(U((e=>e-1)),H(t.index),M.current[t.index].focus()):0===Y&&E.current&&(E.current.focus(),U(-1),H(-1));break}case"ArrowRight":e.preventDefault(),te(z,!0,Y);break;case"ArrowLeft":e.preventDefault(),te(z,!1,Y);break;case"Space":if(document.activeElement===M.current[z]){e.preventDefault();const t=P[z];if(t.hasSubItems&&!k)return;null==b||b(t)}}})),u((()=>{let e;"default"===p?e=Q(n):"expand"===p?e=Z(n,!0):"collapse"===p&&(e=Z(n,!1)),B(e)}),[Z,Q,n,p]),u((()=>{V(P.filter((e=>e.visible)))}),[D,P]),u((()=>{ee()}),[r,i,ee]),u((()=>{if(D&&O.trim().length>=3){const e=J(n),t=(e=>V_(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(Z(e,!1));R(t)}}),[J,Z,n,D,O]),u((()=>{A||(E.current?(H(-1),U(-1),setTimeout((()=>{var e;return null===(e=E.current)||void 0===e?void 0:e.focus()}),200)):M.current[z]?setTimeout((()=>{var e;return null===(e=M.current[z])||void 0===e?void 0:e.focus()}),200):(H(0),U(0),setTimeout((()=>{var e;return null===(e=M.current[0])||void 0===e?void 0:e.focus()}),200)))}),[z,Y,A]);const ne=()=>{if(x&&"success"===s)return e(Gj,{ref:E,onChange:K,value:O,placeholder:$,"data-testid":"search-input","aria-label":"Enter text to search",onClear:X,variant:d})},re=()=>{if(r&&!D&&N.length>0&&"success"===s)return e(Bj,{children:e(Pj,Object.assign({onClick:G,type:"button",$variant:d},{children:0===i.size?"Select all":"Clear all"}))})},ie=()=>{if(!w&&D&&0===L.length&&"success"===s)return t(Fj,Object.assign({"data-testid":"list-no-results"},{children:[e(Hj,{$variant:d}),e(zj,Object.assign({$variant:d},{children:"No results found."}))]}))},oe=()=>{if(y&&"loading"===s){const n="small"===d?16:18;return t(Fj,Object.assign({"data-testid":"list-loading"},{children:[e(lc,{$buttonStyle:"secondary",size:n}),e(zj,Object.assign({$variant:d},{children:"Loading..."}))]}))}},ae=()=>{if(y&&"fail"===s)return t(Fj,Object.assign({"data-testid":"list-fail"},{children:[e(Hj,{"data-testid":"load-error-icon",$variant:d}),e(zj,Object.assign({$variant:d},{children:"Failed to load."}))," ",e(Rj,Object.assign({onClick:q,type:"button",$variant:d},{children:"Try again."}))]}))},se=t=>{if(r)switch(t.checked){case"mixed":return e(hI,{"aria-hidden":!0});case!0:return e(Aj,{"aria-hidden":!0});default:return e(Nj,{"aria-hidden":!0})}if(!t.hasSubItems)return e(dI,Object.assign({$hasNestedSiblings:t.hasNestedSiblings||0===t.level},{children:t.checked&&e(uI,{"aria-hidden":!0})}))},le=(n,i)=>{const{level:o,visible:a,expanded:s,keyPath:d,checked:u,hasSubItems:h,indexInParent:f,parentSetSize:p}=n,g=n.index,m=Y===i,v=h&&!k;return t(oI,Object.assign({$visible:a},{children:[F>0&&e(sI,{$level:o}),F>0&&!h&&r&&e(cI,{}),t(aI,Object.assign({"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":o+1,"aria-posinset":f+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),v?te(g,!s,i):((e,t)=>{U(t),H(e),null==b||b(P[e])})(g,i)},onMouseEnter:()=>((e,t)=>{H(t.index),U(e)})(i,n),ref:e=>M.current[n.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:v},{children:[h&&e(lI,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),te(g,!s,i)},$expanded:s},{children:e(Ye,{})})),se(n),e(zO,{bold:h,searchTerm:D?T:void 0,label:n.item.label,selected:!!u,truncationType:l,maxLines:c})]}))]}),`[${d.join("---")}]`)};return e(Dj,Object.assign({"data-testid":"dropdown-container",ref:_,$width:f},{children:t(jj,Object.assign({"data-testid":"nested-dropdown-list"},{children:[ne(),re(),ie(),oe(),ae(),e("div",Object.assign({"aria-multiselectable":r,id:h,ref:I,role:"tree"},{children:e(GD,{style:{height:"100%"},customScrollParent:_.current,data:W,itemContent:(e,t)=>le(t,e)})}))]}))}))},pI=({selectedOptions:t,placeholder:n="Select",options:r,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:f,searchPlaceholder:p,valueExtractor:g,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:O,onBlur:C,variant:T="default",readOnly:D,alignment:j,dropdownZIndex:_})=>{const[I,M]=a(t||[]),[E,A]=a(!1),[N,B]=a(!1),[L]=a((()=>Cd.generate())),R=o(),P=o();u((()=>{M(t||[])}),[t]);const F=()=>{I&&I.length>0?(M([]),U([])):(M(r),U(r))},z=(e,t)=>{const n=[...I],r=Mk(I,(e=>(g?g(e):e)===t));r>-1?n.splice(r,1):n.push(e),M(n),U(n)},H=()=>{E&&(A(!1),Y(!1))},W=()=>{N||E||B(!0)},V=e=>{!N||E||R.current.contains(e.relatedTarget)||(B(!1),null==C||C())},Y=e=>{!e&&y&&y(),e&&v&&v()},U=e=>{b&&b(e)};return e(Tj,{children:e(Ff,{enabled:!D&&!i,isOpen:E,renderElement:()=>e(Yf,Object.assign({className:l,"data-testid":c,id:d,ref:R,tabIndex:-1,onFocus:W,onBlur:V,$focused:N,$disabled:i,$readOnly:D,$error:s},{children:e(e_,Object.assign({ref:P,disabled:i,expanded:E,listboxId:L,popupRole:"listbox",readOnly:D,variant:T},{children:e(Mf,Object.assign({$disabled:i},{children:I&&0!==I.length?e(Ef,Object.assign({$variant:T},{children:r&&I.length===r.length?"All selected":`${I.length} selected`})):e(Af,Object.assign({truncateType:$,$variant:T},{children:n}))}))}))})),renderDropdown:({elementWidth:t})=>e(Zj,{listboxId:L,listItems:r,onSelectItem:z,onDismiss:H,valueExtractor:g,listExtractor:m,enableSearch:h,searchFunction:f,searchPlaceholder:p,multiSelect:!0,selectedItems:I,onSelectAll:F,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:O,variant:T,width:t}),onOpen:()=>{A(!0),Y(!0),B(!0)},onClose:e=>{A(!1),Y(!1),"click"!==e&&(B(!1),null==C||C())},onDismiss:()=>{P.current.focus(),A(!1),Y(!1)},clickToToggle:!0,offset:8,alignment:j,fitAvailableHeight:!0,customZIndex:_})})},gI=(e,t)=>{const[n,...r]=t;if(eI(e)||!n)return;const i=e.find((e=>e.key===n));return i?r.length?gI(i.subItems,r):i:void 0},mI=(e,t)=>{const n=[];for(const r of e)r.subItems?n.push(...mI(r.subItems,[...t,r.key])):n.push({value:r.value,label:r.label,keyPath:[...t,r.key]});return n},bI=({placeholder:t="Select",options:n,disabled:r,error:i,className:s,"data-testid":l,id:c,selectedKeyPaths:d,mode:h,valueToStringFunction:f,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:m,readOnly:b,onSearch:v,onSelectOptions:y,onShowOptions:x,onHideOptions:w,onRetry:$,onBlur:S,optionsLoadState:k="success",optionTruncationType:O="end",variant:C,alignment:T,dropdownZIndex:D})=>{const j=n,[_,I]=a(d?iI(d):new Set),[M,E]=a([]),[A,N]=a(!1),[B,L]=a(!1),[R]=a((()=>Cd.generate())),P=o(),F=o(),z=o();u((()=>{const e=d||[],t=((e,t)=>{const n=[];for(let r=0;r<t.length;r++){const i=t[r],o=gI(e,i);o&&n.push({value:o.value,label:o.label,keyPath:i})}return n})(j,e);I(iI(e)),E(t)}),[d,j]);const H=(e,t)=>{const n=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));I(iI(e)),E(n),q(e,n)},W=e=>{const t=G(e),n=t.map((e=>e.keyPath));E(t),I(iI(n)),q(n,t)},V=()=>{B||A||L(!0)},Y=e=>{!B||A||P.current.contains(e.relatedTarget)||(L(!1),null==S||S())},U=()=>{const{label:e,value:t}=M[0];return M.length>1?`${M.length} selected`:f?f(t)||t.toString():e},K=e=>{if("middle"===O){let t=0;return z&&z.current&&(t=z.current.getBoundingClientRect().width),Td.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&w&&w(),e&&x&&x()},q=(e,t)=>{if(y){const n=t.map((e=>e.value));y(e,n)}},G=e=>{if(!0===e.checked)return M.filter((t=>{const n=t.keyPath.slice(0,e.keyPath.length);return!Nk(e.keyPath,n)}));{const t=[...M],n=e.hasSubItems?((e,t)=>{const n=gI(e,t);return n&&n.subItems?mI(n.subItems,t):[]})(j,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return n.forEach((e=>{M.find((t=>Nk(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(Ff,{enabled:!b&&!r,isOpen:A,renderElement:()=>e(Yf,Object.assign({className:s,"data-testid":l,id:c,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:B,$disabled:r,$readOnly:b,$error:i},{children:e(e_,Object.assign({ref:F,disabled:r,expanded:A,listboxId:R,popupRole:"tree",readOnly:b,variant:C},{children:e(Mf,Object.assign({ref:z,$disabled:r},{children:eI(M)?e(Af,Object.assign({truncateType:O},{children:t})):e(Ef,Object.assign({truncateType:O},{children:K(U())}))}))}))})),renderDropdown:({elementWidth:t})=>e(fI,{listboxId:R,listItems:j,multiSelect:!0,selectedKeyPaths:_,itemsLoadState:k,itemTruncationType:O,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:m,onSelectItem:W,onSelectAll:H,onRetry:$,onSearch:v,variant:C,mode:h,width:t}),onOpen:()=>{N(!0),X(!0),L(!0)},onClose:e=>{N(!1),X(!1),"click"!==e&&(L(!1),null==S||S())},onDismiss:()=>{F.current.focus(),N(!1),X(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:D})},vI=({placeholder:t="Select",options:n,disabled:r,error:i,className:s,"data-testid":l,id:c,selectedKeyPath:d,mode:h,valueToStringFunction:f,enableSearch:p,searchPlaceholder:g,selectableCategory:m,hideNoResultsDisplay:b,readOnly:v,onBlur:y,onSearch:x,onSelectOption:w,onShowOptions:$,onHideOptions:S,onRetry:k,optionsLoadState:O="success",optionTruncationType:C="end",variant:T,alignment:D,dropdownZIndex:j})=>{const _=n,[I,M]=a(d?iI([d]):new Set),[E,A]=a(),[N,B]=a(!1),[L,R]=a(!1),[P]=a((()=>Cd.generate())),F=o(),z=o(),H=o();u((()=>{M(d?iI([d]):new Set);const e=nI(_,d||[]);A(null!=e?e:void 0)}),[d,_]);const W=e=>{var t;const{keyPath:n,item:{label:r,value:i}}=e;M(iI([n])),A({label:r,value:i}),B(!1),X(!1),null===(t=z.current)||void 0===t||t.focus(),null==w||w(n,i)},V=()=>{L||N||R(!0)},Y=e=>{!L||N||F.current.contains(e.relatedTarget)||(R(!1),null==y||y())},U=()=>{const{label:e,value:t}=E;return f?f(t)||t.toString():e},K=e=>{if("middle"===C){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),Td.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&S&&S(),e&&$&&$()};return e(Ff,{enabled:!v&&!r,isOpen:N,renderElement:()=>e(Yf,Object.assign({className:s,"data-testid":l,id:c,ref:F,tabIndex:-1,onFocus:V,onBlur:Y,$focused:L,$disabled:r,$readOnly:v,$error:i},{children:e(e_,Object.assign({ref:z,disabled:r,expanded:N,listboxId:P,popupRole:"tree",readOnly:v,variant:T},{children:e(Mf,Object.assign({ref:H,$disabled:r},{children:eI(E)?e(Af,Object.assign({truncateType:C},{children:t})):e(Ef,Object.assign({truncateType:C},{children:K(U())}))}))}))})),renderDropdown:({elementWidth:t})=>e(fI,{listboxId:P,listItems:_,selectedKeyPaths:I,selectableCategory:m,itemsLoadState:O,itemTruncationType:C,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:b,onSelectItem:W,onRetry:k,onSearch:x,variant:T,mode:h,width:t}),onOpen:()=>{B(!0),X(!0),R(!0)},onClose:e=>{B(!1),X(!1),"click"!==e&&(R(!1),null==y||y())},onDismiss:()=>{z.current.focus(),B(!1),X(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:j})};var yI=function(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n};var xI=function(e){return function(t,n,r){for(var i=-1,o=Object(t),a=r(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===n(o[l],l,o))break}return t}}(),wI=Z$;var $I=K$;var SI=function(e,t){return function(n,r){if(null==n)return n;if(!$I(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Object(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}((function(e,t){return e&&xI(e,t,wI)}));var kI=yI,OI=SI,CI=yk,TI=function(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n},DI=Uo;var jI=Vo((function(e,t,n){var r=DI(e)?kI:TI,i=arguments.length<3;return r(e,CI(t),n,i,OI)}));const _I=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],II=(e,t,n,r)=>n?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r;var MI;!function(e){e.getCountries=()=>[].concat(..._I.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:II("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const n=e.replace(/[\s()]+/g,""),{format:r}=t,i=r.split(" ");i.shift();const o=i.join(" ");return jI(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[n,...r]=e.remainingText;return{formattedText:e.formattedText+n,remainingText:r}}),{formattedText:"",remainingText:n}).formattedText}}(MI||(MI={}));const EI=t=>{var{onChange:n,value:r,allowClear:i,onClear:s,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:f,enableSearch:p,onHideOptions:g,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=lt(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=a(MI.getCountries()),[w,$]=a(void 0),[S,k]=a(""),O=o(),C=Md({ref:O,formatter:e=>MI.formatNumber(e.replace(/[^0-9]/g,""),w)});u((()=>{const e=x.filter((e=>e.countryCode===AI(null==r?void 0:r.countryCode)))[0];$(e),k(MI.formatNumber(null==r?void 0:r.number,e))}),[r]);const T=e=>{j(S,e),n&&D(S,e)},D=(e,t)=>{const r=MI.formatNumber(e,t);n({number:r.replace(/[\s()]+/g,""),countryCode:t&&NI(t.countryCode)})},j=(e,t)=>{k(MI.formatNumber(e,t)),$(t)};return e(mO,Object.assign({ref:O,value:S,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=C();t(),j(e,w),n&&D(e,w)},allowClear:i&&!!S,onClear:()=>{s?s():k("")},onBlur:l,error:c,placeholder:b,addon:d?{type:"label",attributes:{value:NI(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:h,options:x,selectedOption:w,enableSearch:p,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:NI(e.countryCode)}),onSelectOption:T,onHideOptions:g,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},AI=e=>e?e.replace("+",""):"",NI=e=>e?e.includes("+")?e:`+${e}`:"",BI=({className:r,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:h=!1,disabled:f=!1,error:g,valueExtractor:m,listExtractor:b,displayValueExtractor:v=(e=>e.toString()),onSelectOption:y})=>{const x=s&&v(s),[w,$]=a(x||""),[S,k]=a(x||""),[O,C]=a([]),[T,D]=a(!0),[j,_]=a(!1),[I,M]=a(!!s),[E,A]=a(s),N=o(c),B=e=>ct(void 0,void 0,void 0,(function*(){_(!1),D(!0);try{const t=yield N.current(e);k(e),C(t),D(!1)}catch(e){_(!0)}})),L=p(yh((e=>B(e)),500,{leading:!1,trailing:!0}),[]);u((()=>{N.current=c}),[c]),u((()=>{w&&w.length>=l&&w!==S?L(w):L.cancel(),""===w&&E&&(y&&y(void 0,void 0),F(),A(void 0)),s&&w!==v(s)&&M(!1)}),[w,s]),u((()=>{$(s?v(s):""),F(s),A(s)}),[s]);const R=e=>{$(e.target.value)},P=(e,t)=>{y&&y(e,t)},F=e=>{k(e?v(e):""),M(!!e),C([]),D(!0)},z=()=>{$(""),y&&y(void 0,void 0),F()},H=()=>{I||E?(F(E),$(v(E)),y&&y(E,V(E)),A(E)):z()},W=()=>w&&w.length>=l&&!I,V=e=>m?m(e):e,Y=()=>e(pw,{type:"text",value:w,onChange:R,placeholder:d,readOnly:h,disabled:f,allowClear:!0,onClear:z,styleType:"no-border",onBlur:w.length<l?H:void 0});return t(Nf,Object.assign({className:r,show:W(),error:g&&!W(),disabled:f,readOnly:h,testId:i,onBlur:H},{children:[e(h?n:Df,{children:Y()}),!h&&W()&&e(If,{}),e(oO,{listItems:O,onSelectItem:P,valueExtractor:m,listExtractor:b,itemsLoadState:j?"fail":T?"loading":"success",visible:W(),disableItemFocus:!0,onRetry:()=>B(w),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))},LI=I.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,RI=I(uw)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,PI=I(Tf)`
    padding-right: 2.75rem;
`,FI=n=>{var{selectedOptions:r,placeholders:i={from:"Select",to:"Select"},options:s,disabled:l,className:c,readOnly:d,error:h,"data-testid":f,id:p,enableSearch:g=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:S,onShowOptions:k,onHideOptions:O,onRetry:C,optionsLoadState:T={from:"success",to:"success"},optionTruncationType:D="middle",renderCustomSelectedOption:j,renderListItem:_,renderCustomCallToAction:I}=n,M=lt(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[E,A]=a(),[N,B]=a(),L=o(),R={from:o(),to:o()},[P,F]=a("none");u((()=>{A(null==r?void 0:r.from),B(null==r?void 0:r.to)}),[r]);const z=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||F("from"===e?"from":"to"===e&&E?"to":"from")},H=e=>{const t="from"===e?E:N;return w?w(t):v?v(t):null==t?void 0:t.toString()},W=(e,t)=>{if("middle"===D){let n=0;return R[e]&&R[e].current&&(n=R[e].current.getBoundingClientRect().width),Td.truncateOneLine((e=>"string"==typeof e?e:y(e)||e.toString())(t),n,120,8)}return t},V=e=>{!e&&O&&O(),e&&k&&k()},Y=t=>{const n="from"===t?E:N;return n?j?j(n):e(Ef,Object.assign({truncateType:D},{children:W(t,H(t))})):e(Af,Object.assign({truncateType:D},{children:W(t,i[t])}))},U=t=>e(Mf,Object.assign({onClick:z(t),ref:R[t],$disabled:l},{children:Y(t)}));return t(Nf,Object.assign({show:"none"!==P,"data-testid":M["data-testid"],error:h&&!("none"!==P),disabled:l,readOnly:d,testId:f,onBlur:()=>{V(!1),F("none"),E&&N||(B(void 0),A(void 0))},className:c},{children:[t(LI,{children:[e(PI,Object.assign({type:"button","data-testid":p||"selector",disabled:l,ref:L,onClick:z()},M,{children:t(gp,Object.assign({currentActive:(()=>{switch(P){case"from":return"start";case"to":return"end";case"none":return P}})()},{children:[U("from"),U("to")]}))})),"none"===P&&E&&N&&!d&&!l&&e(RI,Object.assign({onClick:e=>{e.stopPropagation(),A(void 0),B(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:e(hw,{"aria-hidden":!0})}))]}),"none"!==P&&e(If,{}),(()=>{if("none"===P)return null;const t=s[P];if(t&&t.length>0){const n="from"===P?E:N;return e(oO,{listItems:t,onSelectItem:(e,t)=>{return n=e,r=t,"from"===(i=P)?A(n):B(n),V(!1),L&&L.current.focus(),$&&$({[i]:n},r),void("from"===i?(B(void 0),F("to"),V(!0)):F("none"));var n,r,i},onDismiss:()=>(F("none"),V(!1),L&&L.current.focus(),void(E&&N||(B(void 0),A(void 0)))),valueExtractor:v,listExtractor:x,listStyleWidth:S,visible:!0,enableSearch:g,searchPlaceholder:b,searchFunction:m,"data-testid":`${P}-dropdown-list`,selectedItems:n?[n]:[],onRetry:C,itemsLoadState:T[P],itemTruncationType:D,renderListItem:_,renderCustomCallToAction:I})}return null})()]}))},zI=({selectedOption:t,placeholder:n="Select",options:r,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:f,searchPlaceholder:p,valueExtractor:g,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:S="success",optionTruncationType:k="end",renderCustomSelectedOption:O,renderListItem:C,hideNoResultsDisplay:T,renderCustomCallToAction:D,onBlur:j,variant:_="default",readOnly:I,alignment:M,dropdownZIndex:E})=>{const[A,N]=a(t),[B,L]=a(!1),[R,P]=a(!1),[F]=a((()=>Cd.generate())),z=o(),H=o(),W=o();u((()=>{N(t)}),[t]);const V=(e,t)=>{H.current.focus(),N(e),L(!1),q(!1),null==y||y(e,t)},Y=()=>{B&&(L(!1),q(!1))},U=()=>{R||B||P(!0)},K=e=>{!R||B||z.current.contains(e.relatedTarget)||(P(!1),null==j||j())},X=e=>{if("middle"===k){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),Td.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),t,120,8)}return e},q=e=>{e?null==x||x():null==w||w()};return e(Tj,{children:e(Ff,{enabled:!I&&!i,isOpen:B,renderElement:()=>e(Yf,Object.assign({className:l,"data-testid":c,id:d,ref:z,tabIndex:-1,onFocus:U,onBlur:K,$focused:R,$disabled:i,$readOnly:I,$error:s},{children:e(e_,Object.assign({ref:H,disabled:i,expanded:B,listboxId:F,popupRole:"listbox",readOnly:I,variant:_},{children:e(Mf,Object.assign({ref:W,$disabled:i},{children:A?O?O(A):e(Ef,Object.assign({truncateType:k,$variant:_},{children:X(v?v(A):g?g(A):A.toString())})):e(Af,Object.assign({truncateType:k,$variant:_},{children:n}))}))}))})),renderDropdown:({elementWidth:t})=>e(Zj,{listboxId:F,listItems:r,onSelectItem:V,onDismiss:Y,valueExtractor:g,listExtractor:b,enableSearch:h,searchPlaceholder:p,searchFunction:f,selectedItems:A?[A]:[],onRetry:$,itemsLoadState:S,itemTruncationType:k,renderListItem:C,hideNoResultsDisplay:T,renderCustomCallToAction:D,variant:_,width:t}),onOpen:()=>{L(!0),q(!0),P(!0)},onClose:e=>{L(!1),q(!1),"click"!==e&&(P(!1),null==j||j())},onDismiss:()=>{H.current.focus(),L(!1),q(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:E})})},HI=I.div`
    overflow: hidden;
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    background: ${ml.Neutral[8]};
    padding: 1rem;
    min-width: 23rem;

    ${yl.MaxWidth.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }
`,WI=I.div`
    display: flex;
    align-items: baseline;
`,VI=I.div`
    margin: 0 0.5rem;
`,YI=I.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return M`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,UI=I(YI)`
    color: ${ml.Neutral[3]};
`,KI=n=>{var{alignment:r="left",className:i,disabled:s,dropdownZIndex:l,error:c,histogramSlider:d,id:h,onBlur:f,onChange:p,onChangeEnd:g,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$}=n,S=lt(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:k,bins:O=[],renderEmptyView:C,ariaLabels:T}=d,[D,j]=a(Y()),[_,I]=a(!1),[M,E]=a(!1),[A]=a((()=>Cd.generate())),N=O.map((e=>e.minValue)),B=Math.min(...N),L=o(),R=o(),P=o(),F=S["data-testid"]||"select-histogram";u((()=>{$!==D&&j(Y())}),[$]);const z=e=>{j(e),null==p||p(e)},H=e=>{j(e),null==g||g(e)},W=()=>{M||_||E(!0)},V=e=>{!M||_||L.current.contains(e.relatedTarget)||(E(!1),null==f||f())};function Y(){return null!=$?$:[B,B+k]}const U=e=>w?w(e):t(Nl.Body,{children:[v,e,y]});return e(Tj,{children:e(Ff,{enabled:!x&&!s,isOpen:_,renderElement:()=>e(Yf,Object.assign({className:i,"data-testid":F,id:h,ref:L,tabIndex:-1,onFocus:W,onBlur:V,$focused:M,$disabled:s,$readOnly:x,$error:c},{children:e(e_,Object.assign({ref:R,disabled:s,expanded:_,listboxId:A,popupRole:"dialog",readOnly:x,variant:"default"},{children:e(Mf,Object.assign({ref:P,$disabled:s},{children:N&&0!==N.length?t(WI,{children:[U(D[0]),e(VI,{children:"-"}),U(D[1])]}):e(UI,Object.assign({truncateType:m,$variant:"default"},{children:b}))}))}))})),renderDropdown:({elementWidth:t})=>e(HI,Object.assign({style:{width:t}},{children:e(cw,{interval:k,value:D,bins:O,onChange:z,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:C,ariaLabels:T})})),onOpen:()=>{I(!0)},onClose:()=>{I(!1)},onDismiss:()=>{R.current.focus(),I(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:l})})},XI=t=>{var{value:n,ariaLabel:r,onChange:i,onChangeEnd:o}=t,s=lt(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=a(d());u((()=>{n!==l[0]&&c(d())}),[n]);function d(){return null!=n?[n]:[0]}return e(rw,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==i||i(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:r?[r]:void 0}))},qI=I(Nl.H6)`
    text-align: right;
    color: ${ml.Neutral[3]};

    ${e=>{if(e.disabled)return M`
                color: ${ml.Neutral[4](e)};
            `}}
`,GI=({value:t,maxLength:r,disabled:o,renderCustomCounter:s})=>{const[l,c]=a("");u((()=>{c(d(`${t||""}`))}),[t,r]);const d=e=>{if(s)return s(r,e.toString().length);{const t=r-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(n,{children:i.isValidElement(l)?l:e(qI,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:o},{children:l}))})},ZI=I.div`
    display: flex;
    flex-direction: column;
`,QI=I.textarea`
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Pl.Base};

    ${Al.getTextStyle("Body","regular")}
    color: ${ml.Neutral[1]};
    background: ${ml.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${ml.Accent.Light[1]};
        box-shadow: ${ac.InputBoxShadow};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${ml.Neutral[3]};
    }

    ${e=>e.readOnly?M`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?M`
                background: ${ml.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${ml.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?M`
                border: 1px solid ${ml.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${ml.Validation.Red.Border(e)};
                    box-shadow: ${ac.InputErrorBoxShadow};
                }
            `:void 0}
`,JI=i.forwardRef(((t,n)=>{var{value:r,disabled:i,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:h}=t,f=lt(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[p,g]=a(r);u((()=>{g(r)}),[r]);return e(QI,Object.assign({ref:n,disabled:i,value:l?l+(null!=p?p:""):p,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const n=t.slice(l.length),r=c?c(n):n;if(g(r),e.target.value=l+r,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:r})});d(t)}}else{const n=c?c(null!=t?t:""):t;g(n),e.target.value=n,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},error:o,rows:s,maxLength:l?l.length+h:h},f))})),eM=i.forwardRef(((n,r)=>{var{value:i,disabled:o,rows:s=5,onChange:l,transformValue:c,prefix:d,maxLength:h,renderCustomCounter:f}=n,p=lt(n,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[g,m]=a(i);u((()=>{m(i)}),[i]);return t(ZI,{children:[e(JI,Object.assign({ref:r,disabled:o,value:g,rows:s||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:d,transformValue:c,maxLength:h},p)),h&&e(GI,{disabled:o,value:g,maxLength:h,renderCustomCounter:f})]})})),tM=I.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,nM=I.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,rM=I(Cx)`
    margin-top: 0;
`,iM=i.forwardRef(((r,i)=>{const{label:o,value:s,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":h,onChange:f,layoutType:p,mobileCols:g,tabletCols:m,desktopCols:b,transformValue:v,prefix:y=""}=r,x=lt(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","transformValue","prefix"]),[w,$]=a(s);u((()=>{$(s)}),[s]);return t(Px,Object.assign({id:c,label:o,disabled:x.disabled,layoutType:p,mobileCols:g,tabletCols:m,desktopCols:b},{children:[e(JI,Object.assign({id:`${c}-base`,"data-testid":h||c,value:w,error:!!l,onChange:e=>{const t=e.target.value;$(t),f&&f(e)},ref:i,prefix:y,transformValue:v},x)),l||x.maxLength?t(tM,{children:[l&&e(nM,{children:e(rM,Object.assign({weight:"semibold","data-testid":d||(c?`${c}-error-message`:"error-message")},{children:l}))}),x.maxLength&&e(GI,{disabled:x.disabled,value:w,maxLength:x.maxLength,renderCustomCounter:x.renderCustomCounter})]}):e(n,{})]}))})),oM=I.div`
    position: relative;
`,aM=I(Uf)`
    height: 3rem;
    gap: 0.5rem;
`,sM=I(Kf)`
    display: block;
    width: 100%;
    flex: 1;
`,lM=I.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?M`
                    color: ${ml.Primary};
                `:M`
                    color: ${ml.Neutral[4]};
                `};
    }
`,cM=({type:t,active:n=!1,disabled:r,className:i})=>{let o;switch(t){case"checkbox":o=e(n?We:He,{});break;case"radio":o=e(n?Xe:Ke,{});break;case"tick":o=e(Ve,{});break;case"cross":o=e(Ae,{});break;default:o=null}return e(lM,Object.assign({className:i,$active:n,disabled:r},{children:o}))},dM=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,uM=I.ol`
    ${e=>dM(e.bottomMargin)}
    margin-left: ${3}rem;

    ${yl.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>Al.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${ml.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return M`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return M`
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
`,hM=I.ul`
    ${e=>dM(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>Al.getTextStyle(e.size,"regular")}
        color: ${ml.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,fM={Ul:t=>{var{size:n="Body",children:r}=t,i=lt(t,["size","children"]);return e(hM,Object.assign({size:n},i,{children:r}))},Ol:t=>{var{size:n="Body",children:r}=t,i=lt(t,["size","children"]);return e(uM,Object.assign({size:n},i,{children:r}))}},pM=I.div`
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
    ${e=>{if(!e.$indicator)return M`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return M`
                min-width: unset;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?M`
                        border-color: ${ml.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ml.Shadow.Red};
                        }
                    `:e.$disabled?M`
                        border-color: transparent;
                    `:M`
                        border-color: transparent;

                        :hover {
                            background: ${ml.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?M`
                        border-color: ${ml.Neutral[5]};
                    `:e.$disabled&&e.$selected?M`
                        border-color: ${ml.Neutral[4]};
                    `:e.$error?M`
                        border-color: ${ml.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ml.Shadow.Red};
                        }
                    `:e.$selected?M`
                        border-color: ${ml.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
                        }
                    `:M`
                        background: ${ml.Neutral[8]};
                        border-color: ${ml.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
                            border-color: ${ml.Accent.Light[1]};
                        }
                    `}
`,gM=I.input`
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
`,mM=I.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,bM=I.label`
    ${e=>e.$selected&&!e.$indicator?M`
                ${Al.getTextStyle("H4","semibold")}
            `:M`
                ${Al.getTextStyle("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${yl.MaxWidth.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${yl.MaxWidth.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${ml.Neutral[1]};

    ${e=>e.$disabled?M`
                color: ${ml.Neutral[3]};
            `:e.$selected?M`
                color: ${ml.Primary};
            `:void 0}
`,vM=I.div`
    ${Al.getTextStyle("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Al.getFontFamily("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?M`
                color: ${ml.Neutral[3]};
            `:e.$selected?M`
                color: ${ml.Primary};
            `:M`
                color: ${ml.Neutral[1]};
            `}
`,yM=I.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?M`
                        background: ${ml.Neutral[8]};
                    `:e.$disabled?M``:M`
                        :hover {
                            background: ${ml.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?M`
                        background: ${ml.Neutral[6]};
                    `:e.$error?M`
                        background: ${ml.Neutral[8]};
                    `:e.$selected?M`
                        background: ${ml.Accent.Light[5]};
                    `:M`
                        background: ${ml.Neutral[8]};
                    `}
`,xM=I.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,wM=I.button`
    color: ${e=>e.$disabled?ml.Neutral[3]:ml.Validation.Red.Icon};
    white-space: nowrap;
    ${Al.getTextStyle("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,$M=I.button`
    color: ${e=>e.disabled?ml.Neutral[3]:ml.Primary};
    ${Al.getTextStyle("H4","semibold")}
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
`,SM=I.div`
    width: 100%;
    color: ${e=>e.$disabled?ml.Neutral[3]:ml.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,kM=I(Sc)`
    width: 100%;
    user-select: none;
`,OM=I.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${gc({textSize:"BodySmall"})}

    ${e=>e.$disabled?M`
                color: ${ml.Neutral[3]};
            `:e.$selected?M`
                color: ${ml.Primary};
            `:M`
                color: ${ml.Neutral[1]};
            `}
`,CM=I(Nl.BodySmall)`
    color: ${e=>e.$disabled?ml.Neutral[3]:ml.Validation.Red.Text};
`,TM=I(fM.Ul)`
    li {
        color: ${e=>e.$disabled?ml.Neutral[3]:ml.Validation.Red.Text};
    }
`,DM=({type:r="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:d,subLabel:h,disabled:f,error:p,name:g,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:S,useContentWidth:k})=>{const{collapsible:O=!0,errors:C,children:T,initialExpanded:D}=y||{},[j,I]=a(s),[M,E]=a(D),A=m((()=>{const e=Array.isArray(C)&&(null==C?void 0:C.length)>0,t=!Array.isArray(C)&&!!C;return e||t}),[C]),[N]=a(Cd.generate()),B=b?`${b}`:`tg-${N}`,L=o();u((()=>{I(s)}),[s]),u((()=>{j&&E(null==D||D)}),[j]);const R=e=>{if(!f){if(S)return void S(e);switch(r){case"checkbox":I((e=>!e));break;case"radio":case"yes":case"no":j||I(!0)}}},P=()=>{f||E(!M)},F=()=>{f||!w||w()},z=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e(cM,{type:t,active:j,disabled:f})},H=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(vM,Object.assign({"data-id":"toggle-sublabel",$disabled:f,$selected:j},{children:t}))},W=()=>{const n=!M&&!A;return O&&t($M,Object.assign({$paddingTopRequired:n,disabled:f,onClick:P,"data-testid":M?"collapse-button":"expand-button"},{children:[M?"Show less":"Show more",e(M?_:fe,{"aria-hidden":!0})]}))},V=r=>t(n,{children:[e(CM,Object.assign({weight:"semibold",$disabled:f},{children:"Error"})),e(TM,Object.assign({$disabled:f},{children:null==r?void 0:r.map(((t,n)=>e("li",Object.assign({id:`${B}-error-list-item-${n}`},{children:e(CM,Object.assign({weight:"semibold",$disabled:f},{children:t}))}),n)))}))]});return t(pM,Object.assign({$selected:j,$disabled:f,className:v,$styleType:l,$error:p,$indicator:i,$useContentWidth:k,id:b,"data-testid":$},{children:[t(yM,Object.assign({id:`${B}-header-container`,$disabled:f,$error:p,$selected:j,$indicator:i,$styleType:l},{children:[t(xM,Object.assign({$addPadding:x},{children:[e(gM,{ref:L,name:g,id:`${B}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:f,onChange:R,checked:j}),i&&z(),t(mM,{children:[e(bM,Object.assign({htmlFor:`${B}-input`,$selected:j,$indicator:i,$disabled:f,"data-testid":`${B}-toggle-label`,$maxLines:d},{children:c})),h&&H()]})]})),x&&e(wM,Object.assign({type:"button",$disabled:f,onClick:F,id:`${B}-remove-button`},{children:"Remove"}))]})),T&&t("div",{children:[(!O||M)&&e(OM,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!O,$disabled:f},{children:T})),O&&!M&&A&&e(SM,Object.assign({$disabled:f,onClick:P,id:`${B}-error-alert`},{children:e(kM,Object.assign({type:f?"description":"error",className:v,showIcon:!0},{children:Array.isArray(C)?V(C):C}))})),W()]})]}))},jM=I(Ho.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${ml.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${yl.MaxWidth.mobileS} {
        max-width: 100%;
    }
`,_M=I.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,IM=I.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${yl.MaxWidth.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,MM=I.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${yl.MaxWidth.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,EM=I.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${yl.MaxWidth.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,AM=I.div`
    display: flex;
    gap: 0.5rem;

    ${yl.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${yl.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,NM=I.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${yl.MaxWidth.mobileS} {
        width: 6rem;
    }
`,BM=I($l)`
    width: 5rem;
    padding: 1rem 0;
    color: ${ml.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${ml.Primary};
    }
`,LM=I(Nl.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${yl.MaxWidth.tablet} {
        margin: 0;
    }

    ${yl.MaxWidth.mobileS} {
        margin: 0 0.25rem;
    }
`,RM=I(Kf)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${ml.Neutral[5]};
    background: ${ml.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${ml.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${ml.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${yl.MaxWidth.mobileS} {
        width: 100%;
    }
`,PM=I(DM)`
    min-width: 5rem;
    flex: 1;
`,FM=I(cc.Small)`
    width: 7rem;

    ${yl.MaxWidth.mobileL} {
        flex: 1;
    }

    ${yl.MaxWidth.mobileS} {
        width: 100%;
    }
`;var zM,HM,WM;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(zM||(zM={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(HM||(HM={})),function(e){e.AM="am",e.PM="pm"}(WM||(WM={}));const VM=({id:n,value:r,show:i,format:s,onChange:l,onCancel:c})=>{const d=Lh.getTimeValues(s,r),[h,f]=a(d.hour),[g,m]=a(d.minute),[b,v]=a(d.period),y=o(),x=o(),w=ln();u((()=>{if(i&&y.current&&y.current.focus(),i){const{hour:e,minute:t,period:n}=Lh.getTimeValues(s,r);f(e),m(t),v(n)}}),[i,r,s]),u((()=>{const e=y.current,t=x.current;return e&&e.addEventListener("keydown",$),t&&t.addEventListener("keydown",$),()=>{e&&e.removeEventListener("keydown",$),t&&t.removeEventListener("keydown",$)}}),[]);const $=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=p((e=>{switch(e.currentTarget.name){case zM.MINUTE_UP:m(Lh.updateMinutes(g,"add"));break;case zM.MINUTE_DOWN:m(Lh.updateMinutes(g,"minus"));break;case zM.HOUR_UP:f(Lh.updateHours(h,"add"));break;case zM.HOUR_DOWN:f(Lh.updateHours(h,"minus"))}}),[h,g]),k=e=>{e.target.select()},O=e=>{const t=e.target.value;switch(e.target.name){case HM.HOUR:t.length<=2&&f(t);break;case HM.MINUTE:t.length<=2&&m(t)}},C=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case HM.HOUR:{const n=t>23||t<0?d.hour:Lh.convertHourTo12HourFormat(e.target.value);f(n);break}case HM.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;m(Td.padValue(n));break}}},T=e=>{switch(e.target.name){case WM.AM:v(Bh.AM);break;case WM.PM:v(Bh.PM)}},D=e=>n?`${n}-${e}`:e,j=ko({height:i?w.height+32:0});return e(jM,Object.assign({"data-testid":"animated-dropdown-wrapper",style:j},{children:t(_M,Object.assign({ref:w.ref,"data-testid":D("timepicker-dropdown"),inert:i?void 0:""},{children:[t(IM,{children:[t(EM,{children:[t(NM,{children:[e(BM,Object.assign({"aria-label":"increase hour",name:zM.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":D("hour-increment-button")},{children:e(_,{})})),e(RM,{"aria-label":"hour",type:"number",name:HM.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:y,value:h,onFocus:k,onChange:O,onBlur:C,min:1,max:12,placeholder:"HH","data-testid":D("hour-input")}),e(BM,Object.assign({"aria-label":"decrease hour",name:zM.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":D("hour-decrement-button")},{children:e(fe,{})}))]}),e(LM,{children:":"}),t(NM,{children:[e(BM,Object.assign({"aria-label":"increase minute",name:zM.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":D("minute-increment-button")},{children:e(_,{})})),e(RM,{"aria-label":"minute",type:"number",name:HM.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onChange:O,onBlur:C,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":D("minute-input")}),e(BM,Object.assign({"aria-label":"decrease minute",name:zM.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":D("minute-decrement-button")},{children:e(fe,{})}))]})]}),t(AM,{children:[e(PM,Object.assign({checked:b===Bh.AM,name:WM.AM,type:"radio",onChange:T,"data-testid":D("am-toggle"),"aria-label":"AM"},{children:"AM"})),e(PM,Object.assign({checked:b===Bh.PM,name:WM.PM,type:"radio",onChange:T,"data-testid":D("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),t(MM,{children:[e(FM,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":D("cancel-button")},{children:"Cancel"})),e(FM,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?Lh.convertTo24HourFormat({hour:h,minute:g,period:b}):`${h}:${g}${b}`,l(e)},disabled:""===h||""===g,"data-testid":D("confirm-button")},{children:"Done"}))]})]}))}))},YM=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:h,onFocus:f,onBlur:p}=n,g=lt(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=a(!1),[v,y]=a(!1),[x,w]=a(""),[$,S]=a(""),k=o();u((()=>{l&&(w(l.start),S(l.end))}),[l]),jd("mousedown",(function(e){i||D(e)}),"document"),jd("keyup",(function(e){if("Tab"===e.code)D(e)}),"document");const O=()=>{T()},C=()=>{m||v||f&&f()},T=()=>{b(!1),y(!1),p&&p()},D=e=>{k&&!k.current.contains(e.target)&&(v||m)&&T()};return e(oM,Object.assign({ref:k,id:r},g,{children:t(aM,Object.assign({$disabled:i,$error:s,$readOnly:d},{children:[t(gp,Object.assign({error:s,currentActive:m?"start":v?"end":"none"},{children:[e(sM,{onFocus:()=>{i||d||m||(y(!1),b(!0),C())},readOnly:!0,placeholder:"From",value:Lh.formatDisplayValue(x,c),disabled:i,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(sM,{onFocus:()=>{i||d||v||(b(!1),y(!0),C())},readOnly:!0,placeholder:"To",value:Lh.formatDisplayValue($,c),disabled:i,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),e(VM,{id:r,show:m,value:x,format:c,onCancel:O,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),e(VM,{id:r,show:v,value:$,format:c,onCancel:O,onChange:e=>{y(!1),S(e);h&&h({start:x,end:e}),""==x?b(!0):p&&p()}})]}))}))},UM=I(Uf)`
    height: 3rem;
    gap: 0.5rem;
    padding-right: 2.75rem;
`,KM=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="12hr",readOnly:d,onChange:h,onFocus:f,onBlur:g,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=n,$=lt(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[S]=a((()=>Cd.generate())),[k,O]=a(null),[C,T]=a(!1),[D,j]=a(""),[_,I]=a(""),[M,E]=a(""),[A,N]=a(""),[B,L]=a(""),R=o(),P=o(),F=o(),z=m((()=>Lh.generateTimings(w,c,y,x)),[w,c,y,x]),H=m((()=>{if(""===A)return z;const e=Lh.findClosestFlooredTime(A,z);return z.slice(z.indexOf(e))}),[z,A]),W=p((e=>Lh.parseInput(e,c)),[c]);u((()=>{var e,t;if(l){const n=null!==(e=W(l.start))&&void 0!==e?e:"",r=null!==(t=W(l.end))&&void 0!==t?t:"";I(n),E(r),N(n),L(r)}}),[l,W]),u((()=>{if(s)return void T(!1);const e=W(_),t=W(M);if(void 0===e)j("Invalid start time");else if(void 0===t)j("Invalid end time");else{if(!(""!==e&&""!==t&&Lh.to24Hour(t)<Lh.to24Hour(e)))return j(""),void(document.activeElement!==P.current&&document.activeElement!==F.current||T(!0));j("End time must be after start time")}T(!1)}),[_,M,W,s]);const V=e=>{i||d||(k||C||null==f||f(),O(e),T(!0))},Y=e=>{i||d||(O(e),T(!0),("start"===e?P:F).current.select())};function U(e){switch(e.code){case"Enter":"start"===k?K(_):"end"===k&&(C&&X(M),F.current.blur());break;case"Tab":q(_,M,{})}}const K=e=>{q(e,M,{goToNextInput:!0})},X=e=>{q(_,e,{triggerOnBlur:!0})},q=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var i,o;const a=null!==(i=W(e))&&void 0!==i?i:A,s=null!==(o=W(t))&&void 0!==o?o:B;I(a),E(s);a===A&&s===B||null==h||h({start:a,end:s}),n&&void 0!==W(e)&&(O("end"),F.current.select()),r&&(O(null),T(!1),null==g||g()),N(a),L(s)},G=e=>{e.stopPropagation(),I(""),E(""),N(""),L("");null==h||h({start:"",end:""}),O(null),T(!1)},Z=e=>{R.current&&!R.current.contains(e.relatedTarget)&&k&&!C&&q(_,M,{triggerOnBlur:!0})},Q=()=>{if(!d&&!i&&((null==_?void 0:_.length)>0||(null==M?void 0:M.length)>0))return e(RI,Object.assign({onClick:G,type:"button","aria-label":"Clear"},{children:e(hw,{"aria-hidden":!0})}))};return t(oM,Object.assign({id:r},$,{children:[e(Tj,{children:e(Ff,{enabled:!d&&!i,isOpen:C,renderElement:()=>t(UM,Object.assign({ref:R,$disabled:i,$error:s||!!D,$readOnly:d,onBlur:Z},{children:[t(gp,Object.assign({error:s||!!D,currentActive:null===k?"none":k},{children:[e(sM,{ref:P,onFocus:()=>V("start"),placeholder:"start"===k?"hh:mm":"From",onChange:e=>I(e.target.value),value:_,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":C,"aria-controls":S,"aria-autocomplete":"list"}),e(sM,{ref:F,onFocus:()=>V("end"),placeholder:"end"===k?"hh:mm":"To",onChange:e=>E(e.target.value),value:M,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":C,"aria-controls":S,"aria-autocomplete":"list"})]})),Q()]})),renderDropdown:()=>{if(C)return e(Zj,"start"===k?{listItems:z,onSelectItem:K,selectedItems:[_],disableItemFocus:!0,topScrollItem:Lh.findClosestFlooredTime(W(_),z),listboxId:S}:{listItems:H,onSelectItem:X,selectedItems:[M],disableItemFocus:!0,topScrollItem:Lh.findClosestFlooredTime(W(M),H),listboxId:S})},onClose:e=>{"outside-press"===e?(O(null),T(!1),null==g||g()):q(_,M,{triggerOnBlur:!0})},onDismiss:()=>{("start"===k?P:F).current.focus(),T(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!s&&D&&e(Cx,Object.assign({id:r?`${r}-error-message`:"error-message",weight:"semibold",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message"},{children:D}))]}))},XM=t=>{var{variant:n="dial"}=t,r=lt(t,["variant"]);return"dial"===n?e(YM,Object.assign({},r)):"combobox"===n?e(KM,Object.assign({},r)):void 0};I.div`
    position: relative;
`;const qM=I(Kf)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,GM=n=>{var{id:r,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:f,onBlur:g}=n,m=lt(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=a(!1),y=o();jd("mousedown",(function(e){i||s||$(e)}),"document"),jd("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{i||s||b||(v(!0),f&&f())};const w=()=>{v(!1),g&&g()},$=e=>{y&&!y.current.contains(e.target)&&b&&w()},S=p((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(Uf,Object.assign({ref:y,id:r,$readOnly:s,$disabled:i,$error:l},m,{children:[e(qM,{onFocus:x,focused:b,readOnly:!0,placeholder:d||S(),value:Lh.formatDisplayValue(c,u),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),e(VM,{id:r,show:b,value:c,format:u,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))},ZM=I(vw)`
    margin-right: 0.25rem;
`,QM=I(pw)`
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
`,JM=I(QM)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,eE=I(Nl.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return M`
                color: ${ml.Neutral[3]};
            `}}
`,tE=I.div`
    display: flex;
`,nE=I(Nl.Body)`
    ${e=>{if(e.$inactive)return M`
                color: ${ml.Neutral[3]};
            `}}
`,rE=r=>{var{disabled:i,error:s,value:l,onChange:c,onBlur:d,onChangeRaw:h,onBlurRaw:f,readOnly:p,placeholder:g="00-8888",autoComplete:m}=r,b=lt(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=a(""),[x,w]=a(""),[$,S]=a("none"),k=o(null),O=o(null),C=o(null),T=o(v),D=o(x),j=o($),_=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),I=Md({ref:O,formatter:_}),M=Md({ref:C,formatter:_}),E=e=>{T.current=e,y(e)},A=e=>{D.current=e,w(e)},N=e=>{j.current=e,S(e)};u((()=>{"floor"===$&&3===v.length&&C.current&&C.current.focus()}),[v]),u((()=>{z(l)}),[l]);const B=e=>{N(e.target.name),e.target.select()},L=e=>{const t=e.target.name,n=e.target.value,r=F(n);"floor"===t?(E(r),r!==v&&H(r,t)):(A(r),r!==x&&H(r,t))},R=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=I();n(),E(e),H(e,t)}else{const{nextValue:e,updateCaretPosition:n}=M();n(),A(e),H(e,t)}},P=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&O.current.focus()},F=e=>/^[0-9]$/.test(e)?Td.padValue(e,!0):e.toLocaleUpperCase(),z=e=>{if(e!==iE)if(void 0===e||0===e.length)E(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];E("floor"===$?e:F(e)),A("unit"===$?n:F(n))}}},H=(e,t)=>{if(!c&&!h)return;const n={floor:T.current,unit:D.current};if(n[t]=e,c){const e=V(n);c(e)}h&&h([n.floor,n.unit])},W=()=>{if(!d&&!f)return;const e={floor:F(T.current),unit:F(D.current)};if(d){const t=V(e);d(t)}f&&f([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":iE},Y=e=>e.split("-");return t(Uf,Object.assign({},b,{ref:k,onClick:()=>{"none"===$&&O.current&&O.current.focus()},$disabled:i,$error:s,$readOnly:p,tabIndex:-1,onBlur:e=>{k.current&&k.current.contains(e.relatedTarget)||"none"!==j.current&&(N("none"),W())}},{children:[e(ZM,Object.assign({"data-testid":"addon",disabled:i,$readOnly:p},{children:"#"})),p&&l?(()=>{const n=l.split("-");return t(tE,{children:[e(nE,{children:n[0]}),e(eE,{children:"-"}),e(nE,{children:n[1]})]})})():t(n,{children:[e(QM,{name:"floor",maxLength:3,value:v,ref:O,onFocus:B,onBlur:L,onChange:R,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||p?Y(g)[0]:"",autoComplete:m}),e(eE,Object.assign({$inactive:0===v.length},{children:"-"})),e(JM,{name:"unit",maxLength:5,value:x,ref:C,onFocus:B,onBlur:L,onChange:R,onKeyDown:P,disabled:i,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||p?Y(g)[1]:"",autoComplete:m})]})]}))},iE="Invalid unit number",oE={DateInput:t=>{var{label:n,errorMessage:r,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(op,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},DateRangeInput:t=>{var{label:n,errorMessage:r,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(xp,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},ESignature:t=>{const{label:n,errorMessage:r,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(gg,Object.assign({id:`${i}-base`,"data-testid":a||i},u))}))},HistogramSlider:t=>{var{label:n,errorMessage:r,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(cw,Object.assign({id:`${i}-base`,"data-testid":a||i},u))}))},Input:gw,InputGroup:bO,MaskedInput:EO,Label:Dx,MultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:h}=t,f=lt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:f.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(pI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s,variant:h},f))}))},NestedSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(vI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},NestedMultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(bI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},Select:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:h}=t,f=lt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:f.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(zI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s,variant:h},f))}))},SelectHistogram:t=>{var{label:n,errorMessage:r,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,histogramSlider:u}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","histogramSlider"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:h.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(KI,Object.assign({histogramSlider:u,error:!!r,"data-testid":a||i,id:`${i}-base`},h))}))},Slider:t=>{var{label:n,errorMessage:r,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(XI,Object.assign({id:`${i}-base`,"data-testid":a||i},u))}))},RangeSlider:t=>{var{label:n,errorMessage:r,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(rw,Object.assign({id:`${i}-base`,"data-testid":a||i},u))}))},RangeSelect:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:h.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(FI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s},h))}))},Textarea:iM,Timepicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(GM,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},TimeRangePicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(XM,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},CustomField:t=>{var{id:n="form-custom-field","data-error-testid":r,children:i}=t,o=lt(t,["id","data-error-testid","children"]);return e(Px,Object.assign({id:n,"data-error-testid":r},o,{children:i}))},UnitNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(rE,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},PhoneNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(EI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},PredictiveTextInput:t=>{var{label:n,errorMessage:r,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Px,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(BI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))}},aE=I.li`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: 1px solid ${ml.Neutral[5]};
    }
`,sE=I.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    width: 100%;
`,lE=I.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,cE=I.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,dE=I(Nl.BodySmall)`
    display: flex;
    flex: 1;
    margin-right: 1rem;

    ${yl.MaxWidth.mobileL} {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`,uE=I(Nl.BodySmall)``,hE=I.div`
    display: flex;
    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return M`
                margin-left: 8rem; // 6rem width + 2rem gap

                ${yl.MaxWidth.mobileL} {
                    margin-left: 0;
                }
            `}}
`,fE=I(cc.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${yl.MaxWidth.mobileL} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }
`,pE=({thumbnailImageDataUrl:n,"data-testid":r,renderReplaceButton:i,onReplaceClick:o})=>t(gE,Object.assign({"data-testid":r},{children:[e(mE,{"data-testid":r?`${r}-image`:void 0,src:n}),i&&e(bE,Object.assign({type:"button",onClick:e=>{o&&o()}},{children:"Replace"}))]})),gE=I.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,mE=I(Fg)`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid ${ml.Neutral[5]};
    object-fit: cover;

    ${yl.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`,bE=I.button`
    width: 100%;
    height: 1.625rem;
    margin-top: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    ${Al.getTextStyle("BodySmall","semibold")};
    color: ${ml.Primary};
    :hover {
        color: ${ml.PrimaryDark};
    }
`,vE=({fileItem:n,fileDescriptionMaxLength:r,wrapperWidth:i,onSave:s,onCancel:l,onBlur:c})=>{const{id:d,name:h,size:f,truncateText:p=!0,thumbnailImageDataUrl:g}=n,[m,b]=a(),[v,y]=a(""),x=o(),w=o();u((()=>{b($(h))}),[i]),u((()=>{y(n.description||"")}),[n]);const $=e=>{if(!p)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return Td.truncateOneLine(e,t,t/2,t/2/8,16)};return t(aE,Object.assign({"data-testid":`${d}-edit-display`},{children:[t(sE,{children:[g&&e(pE,{thumbnailImageDataUrl:g}),t(lE,{children:[t(cE,Object.assign({ref:w},{children:[e(dE,Object.assign({weight:"semibold"},{children:m})),e(uE,{children:Pg.formatFileSizeDisplay(f)})]})),e(oE.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:r,onChange:e=>{y(e.target.value)},onBlur:e=>{c(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(hE,Object.assign({$thumbnail:!!g},{children:[e(fE,Object.assign({"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{s(x.current.value.trim())}},{children:"Save"})),e(fE,Object.assign({type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:l},{children:"Cancel"}))]}))]}))},yE=I.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: 1rem;
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
`,xE=I(Ze)`
    // Temp icon
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;

    ${e=>{if(e.$disabled)return M`
                color: ${ml.Neutral[4]};
            `}}
`,wE=I.div`
    background: ${ml.Accent.Light[6]};
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;

    ${yl.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${e=>e.$focused?M`
                border-color: ${ml.Accent.Light[1]};
                box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
            `:e.$disabled?M`
                background: ${ml.Neutral[7]};
            `:e.$error?M`
                background: ${ml.Validation.Red.Background};
                border-color: ${ml.Validation.Red.Border};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return M`
                ${yl.MaxWidth.mobileL} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,$E=I.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return M`
                ${yl.MaxWidth.mobileL} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,SE=I.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,kE=I.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,OE=I.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;

    ${yl.MaxWidth.mobileL} {
        ${e=>e.$hideInMobile?M`
                    display: none;
                    visibility: hidden;
                `:M`
                    width: 100%;
                    margin-left: 0;
                    margin-top: 0.5rem;
                    justify-content: flex-start;
                `}
    }
`,CE=I(Nl.BodySmall)``,TE=I(CE)`
    margin-top: 0.25rem;
`,DE=I(Nl.XSmall)`
    font-size: 0.875rem !important;
    color: ${ml.Validation.Red.Text};
`,jE=I(DE)`
    margin-top: 0.25rem;
    ${yl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,_E=I(DE)`
    display: none;
    visibility: hidden;
    ${yl.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,IE=I.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?M`
                    margin-left: 0;
                    margin-top: 1rem;
                    width: 100%;
                `:e.$editable&&!e.$error?M`
                    margin-left: 0;
                    margin-top: 1rem;
                    align-self: flex-end;
                `:void 0}
    }
`,ME=I(Hp)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,EE=I($l)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${ml.Neutral[3]};
    }
`,AE=w((({fileItem:r,editable:i,sortable:s,wrapperWidth:l,disabled:c,readOnly:d,onDelete:h,onEditClick:f})=>{const{id:p,name:m,size:b,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=r,[S,k]=a(),{activeId:O}=g(im),{attributes:C,listeners:T,setNodeRef:D,transform:j,transition:_}=ox({id:p}),I=o(),M={transform:rv.Translate.toString(j),transition:_},E=Object.assign(Object.assign({style:M},C),T),A=y<1,N=Pg.formatFileSizeDisplay(b),B=O?O===p?"self":"others":"none";u((()=>{k(F(m))}),[l]);const L=()=>{h()},R=()=>{f&&f()},P=e=>{s&&e.stopPropagation()},F=e=>{if(!$)return e;const t=I&&I.current?I.current.getBoundingClientRect().width:0;return Td.truncateOneLine(e,t,t/2,t/2/8,16)},z=()=>c||!!O,H=()=>s&&!d,W=()=>t(n,{children:[e(CE,Object.assign({weight:v?"semibold":"regular"},{children:S})),v&&e(TE,{children:v})]});return t(yE,Object.assign({id:p,ref:D,$sortable:H(),$disabled:z(),$focusType:B},H()?E:{},{children:[H()&&e(xE,{"data-testid":`${p}-drag-handle`,$disabled:z()}),t(wE,Object.assign({$focused:"self"===B,$error:!!x,$loading:A,$disabled:z(),$editable:i},{children:[(()=>{let r;return r=t(n,x?{children:[t(SE,Object.assign({ref:I},{children:[W(),x&&e(jE,Object.assign({weight:"semibold"},{children:x}))]})),e(OE,{children:e(CE,{children:N})}),x&&e(_E,Object.assign({weight:"semibold"},{children:x}))]}:w?{children:[e(pE,{thumbnailImageDataUrl:w,"data-testid":`${p}-thumbnail`}),t(kE,{children:[e(SE,Object.assign({ref:I},{children:W()})),e(OE,{children:e(CE,{children:N})})]})]}:{children:[e(SE,Object.assign({ref:I},{children:W()})),e(OE,Object.assign({$hideInMobile:A},{children:e(CE,{children:N})}))]}),e($E,Object.assign({$hasThumbnail:!!w},{children:r}))})(),!d&&(()=>{let r;return r=x?e(EE,Object.assign({onClick:L,"data-testid":`${p}-error-delete-button`,"aria-label":`delete-${m}`},{children:e(Ae,{"aria-hidden":!0})})):A?e(Pp,{progress:y,"data-testid":`${p}-progress-bar`}):t(n,{children:[i&&e(ME,Object.assign({"data-testid":`${p}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${m}`,disabled:z(),onClick:R,onKeyDown:P},{children:e(Ge,{"aria-hidden":!0})}),"edit"),e(ME,Object.assign({"data-testid":`${p}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${m}`,disabled:z(),onClick:L,onKeyDown:P},{children:e(qe,{"aria-hidden":!0})}),"delete")]}),e(IE,Object.assign({$editable:i,$error:!!x,$loading:A},{children:r}))})()]}))]}))})),NE=I.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":"2rem"};
`,BE=I.li`
    border-top: 1px solid ${ml.Neutral[5]};
    border-bottom: 1px solid ${ml.Neutral[5]};

    :not(:last-child) {
        margin-bottom: 2rem;
    }

    :not(:first-child) {
        margin-top: 2rem;
    }

    ul {
        list-style-type: none;
    }
`,LE=({fileItems:t,editableFileItems:n,fileDescriptionMaxLength:r,sortable:i,disabled:s,readOnly:l,onItemUpdate:c,onItemDelete:d,onSort:h})=>{const[f,p]=a({}),{setActiveId:b}=g(im),{width:v,ref:y}=ln(),x=o({}),w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m((()=>[...t].filter((e=>null!=e))),[...t])}(gv(dx,{activationConstraint:{distance:8}}),gv(ly,{activationConstraint:{delay:150,tolerance:5}}),gv(Qv,{coordinateGetter:lx})),$=e=>{delete x.current[e]};u((()=>{p(M(t))}),[t]);const S=e=>t=>{E(e.id,"display"),$(e.id);const n=Object.assign(Object.assign({},e),{description:t});c(n)},k=e=>t=>{x.current[e.id]=t},O=e=>()=>{e.description&&0!==e.description.length?E(e.id,"display"):d(e),$(e.id)},C=e=>()=>{E(e.id,"edit")},T=e=>()=>{d(e)},D=e=>{if(h){const{active:n,over:r}=e;if(r&&n.id!==r.id){const e=t.findIndex((e=>e.id===n.id)),i=t.findIndex((e=>e.id===r.id)),o=Vy(t,e,i);h(o)}}b(void 0)},j=e=>{const{active:t}=e;b(t.id)},_=e=>n&&Pg.isSupportedImageType(e.type),I=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&_(e)&&!e.description,M=e=>{if(!e||0===e.length)return{};const t={};for(const n of e)n.errorMessage?t[n.id]="error":f[n.id]?t[n.id]=f[n.id]:t[n.id]=I(n)?"edit":"display";return t},E=(e,t)=>{p((n=>Object.assign(Object.assign({},n),{[e]:t})))},A=()=>t&&t.length>1&&i&&Object.values(f).every((e=>"display"===e)),N=()=>{const n=((e,t)=>{if(!e||0===e.length)return[];const n=[];for(const r of e)if("edit"===t[r.id]){const e=n[n.length-1];Array.isArray(e)?e.push(r):n.push([r])}else n.push(r);return n})(t,f);return 0===n.length?null:n.map(((t,n)=>Array.isArray(t)?((t,n)=>{const i=t.map((t=>{const n=Object.assign({},t);return void 0!==x.current[t.id]&&(n.description=x.current[t.id]),e(vE,{fileItem:n,wrapperWidth:v,fileDescriptionMaxLength:r,onSave:S(t),onCancel:O(t),onBlur:k(t)},t.id)}));return e(BE,{children:e("ul",{children:i})},`editable-${n}`)})(t,n):e(AE,{fileItem:t,editable:_(t),wrapperWidth:v,sortable:A(),disabled:s,readOnly:l,onDelete:T(t),onEditClick:C(t)},t.id)))};return t&&0!==t.length?s||l||!A()?e(NE,Object.assign({$readOnly:l,ref:y},{children:N()})):e(Ly,Object.assign({sensors:w,onDragEnd:D,onDragStart:j},{children:e(Qy,Object.assign({items:t,strategy:qy},{children:e(NE,Object.assign({$readOnly:l,ref:y},{children:N()}))}))})):null},RE=I.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,PE=I(Nl.H4)`
    margin-bottom: 0.5rem;
`,FE=I.div`
    color: ${ml.Neutral[1]};
    ${gc({textSize:"Body"})}
`,zE=I(Nl.BodySmall)`
    margin-bottom: 0;
    color: ${ml.Neutral[3]};
`,HE=I.div`
    color: ${ml.Neutral[3]};
    ${gc({textSize:"BodySmall"})}
`,WE=I(Sc)`
    margin-bottom: 2rem;
`,VE=I.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${yl.MaxWidth.mobileL} {
        align-items: flex-start;
    }
`,YE=I(cc.Small)`
    width: 10rem;

    ${yl.MaxWidth.mobileL} {
        width: 100%;
    }
`,UE=I.label`
    ${Al.getTextStyle("BodySmall","semibold")}
    color: ${ml.Neutral[3]};
    margin-top: 0.5rem;
    width: 10rem;
    text-align: center;
    ${yl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,KE=I(Sc)`
    margin-bottom: 2rem;
`,XE=({styleType:n="bordered",fileItems:r,title:i,description:s,maxFiles:l,warning:c,className:d,name:u,id:h,"data-testid":f,accept:p,capture:g,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:S,onDelete:k,onEdit:O,onSort:C})=>{const T=o(),[D,j]=a(),_=()=>!!l&&r.length>=l;return e(im.Provider,Object.assign({value:{activeId:D,setActiveId:j}},{children:t(Nb,Object.assign({ref:T,onChange:e=>{!b&&S&&S(e)},id:h?`${h}-dropzone`:"dropzone",accept:p,capture:g,border:"bordered"===n,className:d,"data-testid":f,name:u,multiple:m,disabled:b||_()||$},{children:[(i||s)&&t(RE,{children:[i?"string"==typeof i?e(PE,Object.assign({weight:"regular"},{children:i})):e(FE,{children:i}):null,s?"string"==typeof s?e(zE,Object.assign({weight:"regular"},{children:s})):e(HE,{children:s}):null]}),c&&e(WE,Object.assign({type:"warning"},{children:c})),e(LE,{fileItems:r,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{k&&k(e)},onItemUpdate:e=>{O&&O(e)},onSort:e=>{C&&C(e)}}),w&&e(KE,Object.assign({type:"error"},{children:w})),!$&&t(VE,{children:[e(YE,Object.assign({type:"button",styleType:"secondary",disabled:!!D||b||_(),onClick:e=>{b||(e.preventDefault(),T.current&&T.current.openFileDialog())}},{children:"Upload files"})),e(UE,{children:"or drop them here"})]})]}))}))},qE=I.div`
    background-color: ${ml.Neutral[8]};
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,GE=I.div`
    background-color: ${ml.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,ZE=I.div`
    background-color: ${ml.Neutral[8]};
    height: 100%;
    width: 100%;
`,QE=I.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,JE=I.div`
    display: flex;
    align-items: center;

    background-color: ${ml.Neutral[8]};

    ${yl.MaxWidth.tablet} {
        border-bottom: 1px solid ${ml.Neutral[5]};
    }
`,eA=I(Nl.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${yl.MaxWidth.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,tA=I($l)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${ml.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${ml.Neutral[2]};
    }
`,nA=I(cc.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${yl.MaxWidth.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,rA=I(Vd.Default)`
    width: 100%;
`,iA=I.div`
    padding: 1.5rem 1.25rem;
    background-color: ${ml.Neutral[8]};
    border-top: 1px solid ${ml.Neutral[5]};
`,oA=I(cc.Default)`
    width: 100%;
`,aA=i.createContext({mode:"default",rootNode:null});var sA=Vo((function(e){return null==e}));const lA=I.div`
    background-color: ${e=>e.$collapsible?ml.Neutral[7](e):ml.Neutral[8](e)};

    ${yl.MaxWidth.tablet} {
        background-color: ${ml.Neutral[7]};
    }
`,cA=I.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${ml.Neutral[5]};

    ${yl.MaxWidth.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,dA=I.div`
    display: flex;
    align-items: center;

    background-color: ${ml.Neutral[8]};

    ${yl.MaxWidth.tablet} {
        background-color: transparent;
    }
`,uA=I($l)`
    margin: 0 0 0 auto;
`,hA=I(fe)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${ml.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${ml.Neutral[2]};
    }
`,fA=I(Nl.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${yl.MaxWidth.tablet} {
        ${Al.getTextStyle("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,pA=I(Ho.div)`
    overflow: hidden;
`,gA=I.div`
    padding: 1rem 1.25rem;
`,mA=I(Ho.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,bA=I(cc.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,vA=n=>{var{collapsible:r=!0,initialExpanded:i=!1,expanded:o,onExpandChange:s,minimisable:l=!1,minimisedHeight:c,showDivider:d=!0,showMobileDivider:h=!0,title:f,addon:p,children:m}=n,b=lt(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:v,rootNode:y}=g(aA),x="mobile"===v,[w,$]=a(_()),[S,k]=a(l),O=!x&&r,C=ln(),T=ln(),D=ko({height:w?C.height:0}),j=S?null!=c?c:Math.min(.5*T.height,216):T.height;u((()=>{$(_())}),[r,o]);function _(){return!!x||(sA(o)?!r||i:o)}return t(lA,Object.assign({$collapsible:O},{children:[e(cA,{$showDivider:d,$showMobileDivider:h}),(f||O)&&t(dA,{children:[f&&t(fA,Object.assign({weight:"semibold"},{children:[f," ",p&&("popover"===p.type?e(kx,{addon:p,rootNode:x?y:void 0}):null)]})),O&&e(uA,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!w;sA(o)&&$(e),s&&s(e)},"aria-label":w?"Collapse":"Expand"},{children:e(hA,{$expanded:w})}))]}),e(pA,Object.assign({"data-testid":"expandable-container","data-expanded":w,style:D},{children:e("div",Object.assign({ref:C.ref},{children:t(gA,Object.assign({},b,{children:[e(mA,Object.assign({"data-testid":"minimisable-container",$height:j,$minimisable:l},{children:e("div",Object.assign({ref:T.ref},{children:e("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof m?m(v,{minimised:S}):m}))}))})),l&&t(bA,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{k(!S)}},{children:["View ",S?"more":"less"]}))]}))}))}))]}))},yA=I(vA)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${yl.MaxWidth.tablet} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${yl.MaxWidth.tablet} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,xA=I.div`
    display: flex;
    flex-direction: column;

    ${yl.MaxWidth.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,wA=I.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${Al.getTextStyle("BodySmall","regular")}
    ${e=>e.$selected&&M`
            color: ${ml.Primary};
        `}
`,$A=I.input`
    appearance: none;
`,SA=I(cM)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${$A}:focus-visible + & {
        outline: 2px solid ${ml.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,kA=I(DM)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,OA=I(cc.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${yl.MaxWidth.tablet} {
        margin: 0 0 1rem 0;
    }
`,CA=I.div`
    background-color: ${ml.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,TA=Object.assign((r=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:d,onDismiss:h,onDone:f,children:p}=r,g=lt(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[m,b]=a(!1),v=o(null),y=o(null),x=Vc.useMediaQuery({maxWidth:bl.tablet});u((()=>{x||$()}),[x]);const w=()=>{b(!0)},$=()=>{b(!1),h&&h()},S=()=>{b(!1),f&&f()},k=()=>{d&&d()},O=e=>"function"==typeof p?p(e):p,C=n=>t(JE,{children:["mobile"===n&&e(tA,Object.assign({onClick:$,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(J,{})})),e(eA,Object.assign({weight:"semibold"},{children:l})),e(nA,Object.assign({styleType:"link",type:"button",onClick:k,disabled:c},{children:"Clear"}))]});return e("div",Object.assign({},g,{children:e(aA.Provider,x?Object.assign({value:{mode:"mobile",rootNode:v}},{children:t(n,{children:[e(rA,Object.assign({"data-testid":"filter-show-button",styleType:s,onClick:w,type:"button",icon:e(ee,{})},{children:i})),e(_p,Object.assign({show:m,disableTransition:!0},{children:e(ZE,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:t(GE,Object.assign({ref:v},{children:[C("mobile"),e(QE,{children:O("mobile")}),e(iA,{children:e(oA,Object.assign({onClick:S,type:"button"},{children:"Done"}))})]}))}))}))]})}):Object.assign({value:{mode:"default",rootNode:y}},{children:t(qE,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:y},{children:[C("default"),O("default")]}))}))}))}),{Item:vA,Page:({onDismiss:n,onDone:r,children:i})=>t(CA,{children:[e(tA,Object.assign({onClick:n,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(ge,{})})),e(QE,{children:i}),e(iA,{children:e(oA,Object.assign({onClick:r,type:"button"},{children:"Done"}))})]}),Checkbox:r=>{var{selectedOptions:i,options:s,onSelect:l,labelExtractor:c,valueExtractor:d,useToggleContentWidth:h}=r,f=lt(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:m}=g(aA),[b,v]=a(i||[]),[y,x]=a(),[w,$]=a(s.length),S=o(),k=o(),O=e=>()=>{const t=[...b],n=b.findIndex((t=>D(t)===D(e)));n>=0?t.splice(n,1):t.push(e),v(t),null==l||l(t)},C=()=>{const e=b.length?[]:s;v(e),null==l||l(e)},T=e=>{var t;return c?c(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},D=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},j=p((()=>{if(!S.current)return void x(void 0);const e=Array.from(S.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>r&&(n++,r=o,n>2))break;t=i}$(t),x(n>2?r-8:void 0)}),[]);u((()=>{i!==b&&v(i||[])}),[i]),u((()=>{"default"===m?(()=>{const e=k.current?k.current.offsetTop+k.current.clientHeight:void 0;x(e)})():j()}),[s]),ln({handleWidth:"mobile"===m,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:S,onResize:j});return e(yA,Object.assign({minimisable:s.length>5,minimisedHeight:y},f,{children:(r,{minimised:i})=>t(n,{children:[s.length<3?null:e(OA,Object.assign({styleType:"link",type:"button",onClick:C},{children:b.length?"Clear all":"Select all"})),e(xA,Object.assign({role:"group","aria-label":f.title,ref:S},{children:s.map(((n,o)=>"default"===r?((n,r,i)=>{const o=T(n),a=D(n),s=!!b.find((e=>D(e)===a));return t(wA,Object.assign({$visible:!i||r<5,$selected:s,ref:4===r?k:void 0},{children:[e($A,{type:"checkbox",checked:s,onChange:O(n)}),e(SA,{type:"checkbox",active:s}),o]}),a)})(n,o,i):((t,n,r)=>{const i=T(t),o=D(t),a=!!b.find((e=>D(e)===o));return e(kA,Object.assign({type:"checkbox",checked:a,$visible:!r||y&&n<=w,onChange:O(t),useContentWidth:h},{children:i}),o)})(n,o,i)))}))]})}))}}),DA=I.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${yl.MaxWidth.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`,jA=I(Nl.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,_A=I.div`
    display: flex;
    align-items: flex-start;
`,IA=I.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${yl.MaxWidth.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,MA=()=>t(DA,Object.assign({"data-testid":"download-app-section"},{children:[e(jA,Object.assign({weight:"semibold"},{children:"Download the app"})),t(_A,{children:[e(IA,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(IA,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})),EA={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},AA={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},NA={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var BA;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const r=t(n);return`${`${(new Date).getFullYear()} ${r}`} Last Updated ${ad(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const n=(e=>{switch(e){case"bookingsg":return AA;case"mylegacy":return NA;default:return EA}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(BA||(BA={}));const LA=I.footer`
    background: ${ml.Neutral[7]};
`,RA=I(Nl.Hyperlink.Small)`
    color: ${ml.Neutral[1]};
`,PA=I(Nx.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${ml.Neutral[5]};

    ${yl.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`,FA=I.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${yl.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${yl.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,zA=I.ul`
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

    ${yl.MaxWidth.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${yl.MaxWidth.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,HA=I.div`
    grid-column: 9 / span 4;

    ${yl.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${yl.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,WA=I.div`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${ml.Neutral[6]};
    }
`,VA=I(Nx.Content)`
    padding: 1.375rem 0;

    ${yl.MaxWidth.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,YA=I.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${yl.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${yl.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,UA=I(YA)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${yl.MaxWidth.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${yl.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,KA=I(Nl.Hyperlink.Small)`
    ${Al.getTextStyle("XSmall","regular")}
    color: ${ml.Neutral[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${ml.Neutral[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${ml.Neutral[3]};
        svg {
            color: ${ml.Neutral[3]};
        }
    }

    ${yl.MaxWidth.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${yl.MaxWidth.tablet} {
        margin-bottom: 0.625rem;
    }
`,XA=r=>{var{children:i,links:o,lastUpdated:a,disclaimerLinks:s,showDownloadAddon:l,logoSrc:c,copyrightInfo:d,onFooterLinkClick:u,layout:h="default"}=r,f=lt(r,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const p="stretch"===h,g=A(),m=t=>t.map(((t,n)=>{const r=lt(t,["data-options"]);return e("li",{children:e(RA,Object.assign({},r,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):u&&(e.preventDefault(),u(t))})(e,t)}))},n)}));return t(LA,Object.assign({},f,{children:[(()=>{let r=null;return i||((o||l)&&(r=t(n,{children:[e(FA,Object.assign({"data-testid":"logo-section"},{children:e("img",{src:c||BA.getFooterLogo(null==g?void 0:g.resourceScheme),alt:"LifeSG","data-testid":"logo"})})),(null==o?void 0:o[0])&&e(zA,Object.assign({"data-testid":"link-col-1"},{children:m(o[0])}),"link-col-1"),(null==o?void 0:o[1])&&e(zA,Object.assign({"data-testid":"link-col-2"},{children:m(o[1])}),"link-col-2"),l&&e(HA,{children:e(MA,{})})]})),r?e(PA,Object.assign({type:"grid",stretch:p},{children:r})):null)})(),e(WA,{}),t(VA,Object.assign({type:"grid",stretch:p},{children:[e(YA,{children:(()=>{const t=BA.getDisclaimerLinks(null==g?void 0:g.resourceScheme,s);return Object.keys(t).map((n=>e(KA,Object.assign({},t[n]),n)))})()},"disclaimer"),e(UA,{children:e(Nl.XSmall,Object.assign({"data-testid":"copyright-text"},{children:d||t(n,{children:["©"," ",BA.getCopyrightInfo(a,null==g?void 0:g.resourceScheme)]})}))},"copyright")]}))]}))};var qA=function(e,t){return Number(e.toFixed(t))},GA=function(e,t,n){n&&"function"==typeof n&&n(e,t)},ZA={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},QA=function(e){"number"==typeof e&&cancelAnimationFrame(e)},JA=function(e){e.mounted&&(QA(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function eN(e,t,n,r){if(e.mounted){var i=(new Date).getTime();JA(e),e.animation=function(){if(!e.mounted)return QA(e.animation);var o=(new Date).getTime()-i,a=o/n,s=(0,ZA[t])(a);o>=n?(r(1),e.animation=null):e.animation&&(r(s),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function tN(e,t,n,r){var i=function(e){var t=e.scale,n=e.positionX,r=e.positionY;return!(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(r))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,h=t.positionY-c;0===n?o(t.scale,t.positionX,t.positionY):eN(e,r,n,(function(e){o(s+d*e,l+u*e,c+h*e)}))}}var nN=function(e,t){var n=e.wrapperComponent,r=e.contentComponent,i=e.setup.centerZoomedOut;if(!n||!r)throw new Error("Components are not mounted");var o=function(e,t,n){var r=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*n,a=t.offsetHeight*n;return{wrapperWidth:r,wrapperHeight:i,newContentWidth:o,newDiffWidth:r-o,newContentHeight:a,newDiffHeight:i-a}}(n,r,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,n,r,i,o,a){var s=e>t?n*(a?1:.5):0,l=r>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:r-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},rN=function(e,t,n,r){return qA(r?e<t?t:e>n?n:e:e,2)},iN=function(e,t){var n=nN(e,t);return e.bounds=n,n};function oN(e,t,n,r,i,o,a){var s=n.minPositionX,l=n.minPositionY,c=n.maxPositionX,d=n.maxPositionY,u=0,h=0;return a&&(u=i,h=o),{x:rN(e,s-u,c+u,r),y:rN(t,l-h,d+h,r)}}function aN(e,t,n,r,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=r-s;return"number"!=typeof t||"number"!=typeof n?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):oN(l-t*d,c-n*d,i,o,0,0,null)}function sN(e,t,n,r,i){var o=t-(i?r:0);return!Number.isNaN(n)&&e>=n?n:!Number.isNaN(t)&&e<=o?o:e}var lN=function(e,t){var n=e.setup.panning.excluded,r=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(r&&o&&a)&&!HN(o,n)},cN=function(e){var t=e.isInitialized,n=e.isPanning,r=e.setup.panning.disabled;return!(!t||!n||r)};function dN(e,t,n,r,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||n!==u)){var h=oN(t,n,s,o,r,i,a),f=h.x,p=h.y;e.setTransformState(c,f,p)}}var uN=function(e,t){var n=e.setup,r=e.transformState.scale,i=n.minScale,o=n.disablePadding;return t>0&&r>=i&&!o?t:0},hN=function(e){var t=e.mounted,n=e.setup,r=n.disabled,i=n.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&r&&!t)},fN=function(e){var t=e.mounted,n=e.velocity,r=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t)&&!(!n||!r)};function pN(e,t,n,r,i,o,a,s,l,c){if(i){var d;if(t>a&&n>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&n<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return r?t:rN(e,o,a,i)}function gN(e,t){if(hN(e)){var n=e.lastMousePosition,r=e.velocityTime,i=e.setup,o=e.wrapperComponent,a=i.velocityAnimation.equalToMove,s=Date.now();if(n&&r&&o){var l=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(o,a),c=t.x-n.x,d=t.y-n.y,u=c/l,h=d/l,f=s-r,p=c*c+d*d,g=Math.sqrt(p)/f;e.velocity={velocityX:u,velocityY:h,total:g}}e.lastMousePosition=t,e.velocityTime=s}}function mN(e,t){var n=e.transformState.scale;JA(e),iN(e,n),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var n=t.touches,r=e.transformState,i=r.positionX,o=r.positionY;if(e.isPanning=!0,1===n.length){var a=n[0].clientX,s=n[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var n=e.transformState,r=n.positionX,i=n.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-r,y:a-i}}(e,t)}function bN(e){var t=e.transformState.scale,n=e.setup,r=n.minScale,i=n.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<r||!a&&!s)){var d=function(e){var t=e.transformState,n=t.positionX,r=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,h=d.minPositionX,f=d.maxPositionY,p=d.minPositionY,g=n>u||n<h,m=r>f||r<p,b=aN(e,n>u?c.offsetWidth:e.setup.minPositionX||0,r>f?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:g?v:n,positionY:m?y:r}}}(e);d&&tN(e,d,l,c)}}function vN(e,t,n){var r=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(r){var s=function(e,t,n){var r=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!r)return{x:l,y:c};var d=t-r.x,u=n-r.y;return{x:a?l:d,y:s?c:u}}(e,t,n),l=s.x,c=s.y,d=uN(e,o),u=uN(e,a);gN(e,{x:l,y:c}),dN(e,l,c,d,u)}}function yN(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,n=e.velocity,r=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==r?void 0:r.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&n&&(null==n?void 0:n.total)>.1&&u?function(e){var t=e.velocity,n=e.bounds,r=e.setup,i=e.wrapperComponent;if(fN(e)&&t&&n&&i){var o=t.velocityX,a=t.velocityY,s=t.total,l=n.maxPositionX,c=n.minPositionX,d=n.maxPositionY,u=n.minPositionY,h=r.limitToBounds,f=r.alignmentAnimation,p=r.zoomAnimation,g=r.panning,m=g.lockAxisY,b=g.lockAxisX,v=p.animationType,y=f.sizeX,x=f.sizeY,w=f.velocityAlignmentTime,$=function(e,t){var n=e.setup.velocityAnimation,r=n.equalToMove,i=n.animationTime,o=n.sensitivity;return r?i*t*o:i}(e,s),S=Math.max($,w),k=uN(e,y),O=uN(e,x),C=k*i.offsetWidth/100,T=O*i.offsetHeight/100,D=l+C,j=c-C,_=d+T,I=u-T,M=e.transformState,E=(new Date).getTime();eN(e,v,S,(function(t){var n=e.transformState,r=n.scale,i=n.positionX,s=n.positionY,p=((new Date).getTime()-E)/w,g=1-(0,ZA[f.animationType])(Math.min(1,p)),v=1-t,y=i+o*v,x=s+a*v,$=pN(y,M.positionX,i,b,h,c,l,j,D,g),S=pN(x,M.positionY,s,m,h,u,d,I,_,g);i===y&&s===x||e.setTransformState(r,$,S)}))}}(e):bN(e)}}function xN(e,t,n,r){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=sN(qA(t,2),o,a,0,!1),c=aN(e,n,r,l,iN(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function wN(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,h=c||r>=a;if((r>=1||s)&&bN(e),!h&&i&&e.mounted){var f=xN(e,a,t||i.offsetWidth/2,n||i.offsetHeight/2);f&&tN(e,f,d,u)}}var $N=function(){return $N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},$N.apply(this,arguments)};function SN(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var kN=1,ON=0,CN=0,TN={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},DN=function(e){var t,n,r,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:kN,scale:null!==(n=e.initialScale)&&void 0!==n?n:kN,positionX:null!==(r=e.initialPositionX)&&void 0!==r?r:ON,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:CN}},jN=function(e){var t=$N({},TN);return Object.keys(e).forEach((function(n){var r=void 0!==e[n];if(void 0!==TN[n]&&r){var i=Object.prototype.toString.call(TN[n]),o="[object Object]"===i,a="[object Array]"===i;t[n]=o?$N($N({},TN[n]),e[n]):a?SN(SN([],TN[n],!0),e[n],!0):e[n]}})),t},_N=function(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?r*Math.exp(t*n):r+t*n;return sN(qA(u,3),s,a,d,!1)};function IN(e,t,n,r,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,h=xN(e,_N(e,t,n),d,u);if(!h)return console.error("Error during zoom event. New transformation state was not calculated.");tN(e,h,r,i)}function MN(e,t,n,r){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=DN(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var h=nN(e,s.scale),f=oN(s.positionX,s.positionY,h,a,0,0,o),p={scale:s.scale,positionX:f.x,positionY:f.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==r||r(),tN(e,p,t,n))}}var EN=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),IN(e,1,t,n,r)}},AN=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),IN(e,-1,t,n,r)}},NN=function(e){return function(t,n,r,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var h={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(r)?c:r};tN(e,h,i,o)}}},BN=function(e){return function(t,n){void 0===t&&(t=200),void 0===n&&(n="easeOut"),MN(e,t,n)}},LN=function(e){return function(t,n,r){void 0===n&&(n=200),void 0===r&&(r="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=VN(t||i.scale,o,a);tN(e,s,n,r)}}},RN=function(e){return function(t,n,r,i){void 0===r&&(r=600),void 0===i&&(i="easeOut"),JA(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,n){var r=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!r||!i)return o;var d=r.getBoundingClientRect(),u=t.getBoundingClientRect(),h=function(e,t,n,r){var i=e.getBoundingClientRect(),o=t.getBoundingClientRect(),a=n.getBoundingClientRect(),s=o.x*r.scale,l=o.y*r.scale;return{x:(i.x-a.x+s)/r.scale,y:(i.y-a.y+l)/r.scale}}(t,r,i,o),f=h.x,p=h.y,g=u.width/o.scale,m=u.height/o.scale,b=r.offsetWidth/g,v=r.offsetHeight/m,y=sN(n||Math.min(b,v),l,c,0,!1),x=(d.width-g*y)/2,w=(d.height-m*y)/2,$=oN((d.left-f)*y+x,(d.top-p)*y+w,nN(e,y),s,0,0,r);return{positionX:$.x,positionY:$.y,scale:y}}(e,a,n);tN(e,s,r,i)}}},PN=function(e){return{instance:e,zoomIn:EN(e),zoomOut:AN(e),setTransform:NN(e),resetTransform:BN(e),centerView:LN(e),zoomToElement:RN(e)}},FN=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,PN(e)),t};function zN(){try{return{get passive(){return!0,!1}}}catch(e){return!1}}var HN=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},WN=function(e){e&&clearTimeout(e)},VN=function(e,t,n){var r=n.offsetWidth*e,i=n.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-r)/2,positionY:(t.offsetHeight-i)/2}};function YN(e,t,n){var r=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-r.left)/n,o=(e.clientY-r.top)/n;else{var a=e.touches[0];i=(a.clientX-r.left)/n,o=(a.clientY-r.top)/n}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var UN=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},KN=function(e,t){var n=e.props,r=n.onWheel,i=n.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,h=a.disablePadding,f=a.smooth,p=d.size,g=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var n=function(e){return e?e.deltaY<0?1:-1:0}(e),r=function(e,t){return"number"==typeof e?e:t}(t,n);return r}(t,null),y=function(e,t,n,r,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,h=d.size,f=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var p=o+t*n;if(i)return p;var g=!r&&!f;return sN(qA(p,3),c,l,h,g&&!u)}(e,v,f?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=iN(e,y),w=YN(t,o,s),$=l&&(g||0===p||c||h),S=aN(e,w.x,w.y,y,x,$),k=S.x,O=S.y;e.previousWheelEvent=t,e.setTransformState(y,k,O),GA(FN(e),t,r),GA(FN(e),t,i)}},XN=function(e,t){var n=e.props,r=n.onWheelStop,i=n.onZoomStop;WN(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(wN(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var n=e.previousWheelEvent,r=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!n&&(r<o||r>a||Math.sign(n.deltaY)!==Math.sign(t.deltaY)||n.deltaY>0&&n.deltaY<t.deltaY||n.deltaY<0&&n.deltaY>t.deltaY||Math.sign(n.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(WN(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,GA(FN(e),t,r),GA(FN(e),t,i))}),160))},qN=function(e,t){var n=e.contentComponent,r=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==r&&n){var u=function(e,t,n){var r=n.getBoundingClientRect(),i=e.touches,o=qA(i[0].clientX-r.left,5),a=qA(i[0].clientY-r.top,5);return{x:(o+qA(i[1].clientX-r.left,5))/2/t,y:(a+qA(i[1].clientY-r.top,5))/2/t}}(t,i,n);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var h=UN(t),f=function(e,t){var n=e.pinchStartScale,r=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!n||null===r||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:sN(qA(t/r*n,2),a,o,c,!d&&!l)}(e,h);if(f!==i){var p=iN(e,f),g=a&&(c||0===d||s),m=aN(e,u.x,u.y,f,p,g),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=h,e.setTransformState(f,b,v)}}}},GN=function(e,t){var n=e.props.onZoomStop,r=e.setup.doubleClick.animationTime;WN(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,GA(FN(e),t,n)}),r)};function ZN(e,t){var n=e.setup,r=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=n.doubleClick,u=d.disabled,h=d.mode,f=d.step,p=d.animationTime,g=d.animationType;if(!u&&!r){if("reset"===h)return function(e,t){var n=e.props,r=n.onZoomStart,i=n.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;GA(FN(e),t,r),MN(e,a,s,(function(){return GA(FN(e),t,i)})),GN(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(h,e.transformState.scale),b=_N(e,m,f);if(a!==b){GA(FN(e),t,l);var v=YN(t,o,a),y=xN(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");GA(FN(e),t,c),tN(e,y,p,g),GN(e,t)}}}var QN=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,iN(t,t.transformState.scale),t.setup=jN(e)},this.initializeWindowEvents=function(){var e,n,r=zN(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(n=t.wrapperComponent)||void 0===n||n.addEventListener("wheel",t.onWheelPanning,r),null==o||o.addEventListener("mousedown",t.onPanningStart,r),null==o||o.addEventListener("mousemove",t.onPanning,r),null==o||o.addEventListener("mouseup",t.onPanningStop,r),null==i||i.addEventListener("mouseleave",t.clearPanning,r),null==o||o.addEventListener("keyup",t.setKeyUnPressed,r),null==o||o.addEventListener("keydown",t.setKeyPressed,r)},this.cleanupWindowEvents=function(){var e,n,r=zN(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,r),null==o||o.removeEventListener("mousemove",t.onPanning,r),null==o||o.removeEventListener("mouseup",t.onPanningStop,r),null==i||i.removeEventListener("mouseleave",t.clearPanning,r),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,r),null==o||o.removeEventListener("keydown",t.setKeyPressed,r),document.removeEventListener("mouseleave",t.clearPanning,r),JA(t),null===(n=t.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(e){var n=zN();e.addEventListener("wheel",t.onWheelZoom,n),e.addEventListener("dblclick",t.onDoubleClick,n),e.addEventListener("touchstart",t.onTouchPanningStart,n),e.addEventListener("touchmove",t.onTouchPanning,n),e.addEventListener("touchend",t.onTouchPanningStop,n)},this.handleInitialize=function(e){var n=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(FN(t))})),n&&(t.setCenter(),t.observer=new ResizeObserver((function(){var n,r=e.offsetWidth,i=e.offsetHeight;(r>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(FN(t))})),t.setCenter(),null===(n=t.observer)||void 0===n||n.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.setup.wheel,r=n.disabled,i=n.wheelDisabled,o=n.touchPadDisabled,a=n.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||r||!c||i&&!t.ctrlKey||o&&t.ctrlKey||HN(c,a))}(t,e);n&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var n=e.props,r=n.onWheelStart,i=n.onZoomStart;e.wheelStopEventTimer||(JA(e),GA(FN(e),t,r),GA(FN(e),t,i))}(t,e),KN(t,e),XN(t,e))}},this.onWheelPanning=function(e){var n=t.setup,r=n.disabled,i=n.wheel,o=n.panning;if(t.wrapperComponent&&t.contentComponent&&!r&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,h=o.lockAxisY?l:d,f=t.setup.alignmentAnimation,p=f.sizeX,g=f.sizeY,m=uN(t,p),b=uN(t,g);u===s&&h===l||dN(t,u,h,m,b)}},this.onPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;n||lN(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),JA(t),mN(t,e),GA(FN(t),e,r))},this.onPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;n||cN(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),vN(t,e.clientX,e.clientY),GA(FN(t),e,r))},this.onPanningStop=function(e){var n=t.props.onPanningStop;t.isPanning&&(yN(t),GA(FN(t),e,n))},this.onPinchStart=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinchingStart,o=r.onZoomStart;if(!n){var a=function(e,t){var n=e.setup.pinch,r=n.disabled,i=n.excluded,o=e.isInitialized,a=t.target;return!(!o||r||!a||HN(a,i))}(t,e);a&&(function(e,t){var n=UN(t);e.pinchStartDistance=n,e.lastDistance=n,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,JA(e)}(t,e),JA(t),GA(FN(t),e,i),GA(FN(t),e,o))}},this.onPinch=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinching,o=r.onZoom;if(!n){var a=function(e){var t=e.setup.pinch.disabled,n=e.isInitialized,r=e.pinchStartDistance;return!(!n||t||!r)}(t);a&&(e.preventDefault(),e.stopPropagation(),qN(t,e),GA(FN(t),e,i),GA(FN(t),e,o))}},this.onPinchStop=function(e){var n,r,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(r=(n=t).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,wN(n,null==r?void 0:r.x,null==r?void 0:r.y),GA(FN(t),e,o),GA(FN(t),e,a))},this.onTouchPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;if(!n&&lN(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,JA(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(JA(t),mN(t,e),GA(FN(t),e,r)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(n)return;if(!cN(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];vN(t,i.clientX,i.clientY),GA(FN(t),e,r)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.isInitialized,r=e.setup,i=e.wrapperComponent,o=r.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(n&&l&&c)||a||HN(l,s))}(t,e);n&&ZN(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,n,r){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(r))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=n,t.transformState.positionY=r,t.applyTransformation();var o=FN(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),GA(o,{scale:e,positionX:n,positionY:r},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=VN(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,n,r){return t.props.customTransform?t.props.customTransform(e,n,r):function(e,t,n){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(n,")")}(e,n,r)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,n=e.scale,r=e.positionX,i=e.positionY,o=t.handleTransformStyles(r,i,n);t.contentComponent.style.transform=o}},this.getContext=function(){return FN(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,n){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=n,iN(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(n),t.initializeWindowEvents(),t.isInitialized=!0;var r=FN(t);GA(r,void 0,t.props.onInit)},this.props=e,this.setup=jN(this.props),this.transformState=DN(this.props)},JN=i.createContext(null),eB=i.forwardRef((function(e,t){var n=o(new QN(e)).current,r=function(e,t){return"function"==typeof e?e(t):e}(e.children,PN(n));return b(t,(function(){return PN(n)}),[n]),u((function(){n.update(e)}),[n,e]),i.createElement(JN.Provider,{value:n},r)}));i.forwardRef((function(e,t){var n,r=o(null),a=g(JN);return u((function(){return a.onChange((function(e){if(r.current){r.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),i.createElement("div",$N({},e,{ref:(n=[r,t],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var tB="transform-component-module_wrapper__SPB86",nB="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var rB=function(e){var t=e.children,n=e.wrapperClass,r=void 0===n?"":n,a=e.contentClass,s=void 0===a?"":a,l=e.wrapperStyle,c=e.contentStyle,d=e.wrapperProps,h=void 0===d?{}:d,f=e.contentProps,p=void 0===f?{}:f,m=g(JN),b=m.init,v=m.cleanupWindowEvents,y=o(null),x=o(null);return u((function(){var e=y.current,t=x.current;return null!==e&&null!==t&&b&&(null==b||b(e,t)),function(){null==v||v()}}),[]),i.createElement("div",$N({},h,{ref:y,className:"react-transform-wrapper ".concat(tB," ").concat(r),style:l}),i.createElement("div",$N({},p,{ref:x,className:"react-transform-component ".concat(nB," ").concat(s),style:c}),t))};const iB=I.div`
    background-color: ${ml.Neutral[6]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 3rem;
        width: 18%;
        height: auto;
    }
`,oB=t=>e(iB,Object.assign({},t,{children:e(te,{})})),aB=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,sB=I.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,lB=I(oB)`
    width: 100%;
    height: 100%;
`,cB=({src:t,className:n,alt:r,fit:i,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=a(!0),[h,f]=a();u((()=>{d(!0),f(void 0);const e=new Image;e.src=t,e.onload=()=>{s&&l({src:t,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),f(e)}}),[t]);return e(aB,Object.assign({className:n},{children:h?null!=o?o:e(lB,{}):c?e(jc,{}):e(sB,{src:t,alt:r,$fit:i})}))},dB=I($l)`
    padding: 0;
    border-radius: 100%;
    background: ${ml.Neutral[8]};
    color: ${ml.Primary};
    height: 2.5rem;
    width: 2.5rem;
`,uB=I(dB)`
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 5;

    ${yl.MaxWidth.mobileL} {
        top: 1.25rem;
        right: 1.25rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,hB=I(dB)`
    position: absolute;
    top: 3rem;
    right: 6.5rem;
    z-index: 5;

    ${yl.MaxWidth.mobileL} {
        top: 1.25rem;
        right: 4.75rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,fB=I(dB)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&M`
            left: 3rem;
            ${yl.MaxWidth.mobileL} {
                left: 1.25rem;
            }
        `}

    ${e=>"right"===e.$position&&M`
            right: 3rem;
            ${yl.MaxWidth.mobileL} {
                right: 1.25rem;
            }
        `}

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,pB=I.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,gB=I.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,mB=I.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,bB=I.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,vB=I.div`
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
`,yB=I(cB)`
    height: 100%;
    width: 100%;
`,xB=I(oB)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,wB=I.div`
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
`,$B=I(Nl.XSmall)`
    display: inline-flex;
    padding: 0.25rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${ml.Neutral[8]};
    text-align: center;
`,SB=I.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${ml.Neutral[1]};
    padding: 1.5rem 1rem;

    ${yl.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
    }
`,kB=I.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,OB=I.div`
    cursor: pointer;
    background-color: ${ml.Neutral[1]};
    border-radius: 10px;

    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.25rem;
    width: 6.25rem;

    ${yl.MaxWidth.mobileL} {
        height: 4rem;
        width: 4rem;
    }

    ${e=>e.$active?M`
                  border: 4px solid ${ml.Primary};

                  ${yl.MaxWidth.mobileL} {
                      border: 2px solid ${ml.Primary};
                  }
              `:M`
                  :hover {
                      border: 1px solid ${ml.Neutral[5]};
                  }
              `};
`,CB=I(cB)`
    height: 100%;
    width: 100%;
`,TB=(r,i)=>{var{items:s,initialActiveItemIndex:l,hideThumbnail:c=!1,hideNavigation:d=!1,hideCounter:h=!1,hideMagnifier:f=!1,onClose:p}=r,g=lt(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[m,v]=a(null!=l?l:0),[y,x]=a({}),[w,$]=a(1),[S,k]=a(null),[O,C]=a(null),T=o(null),D=o([]),j=o([]),_=S&&O?S-O:0;b(i,(()=>({currentItemIndex:m,setCurrentItem:B,goToPrevItem:A,goToNextItem:N}))),jd("keydown",(function(e){"ArrowRight"===e.key?N():"ArrowLeft"===e.key?A():"Escape"===e.key&&p&&p()}),"document"),u((()=>{var e,t;null===(t=null===(e=D.current)||void 0===e?void 0:e[m])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),$(1)}),[m]);const I=e=>{$(e.state.scale)};const M=({src:e,height:t,width:n})=>{x((r=>Object.assign(Object.assign({},r),{[e]:{height:t,width:n}})))},E=()=>{const e=y[s[m].src];if((null==T?void 0:T.current)&&e){const{clientHeight:t,clientWidth:n}=T.current,{width:r,height:i}=e,o=i/r<t/n;return r<n&&i<t?o?n/r:t/i:o?t/(i/(r/n)):n/(r/(i/t))}},A=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>0===e?s.length-1:e-1))},N=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>e===s.length-1?0:e+1))},B=e=>{var t,n;null===(n=null===(t=j.current)||void 0===t?void 0:t[m])||void 0===n||n.resetTransform(),v(e)};return t(Xp,Object.assign({},g,{"data-testid":"image-carousel-modal"},{children:[e(uB,Object.assign({"aria-label":"Close image carousel",onClick:p,focusHighlight:!1},{children:e(J,{"aria-hidden":!0})})),!f&&e(hB,Object.assign({"aria-label":1===w?"Zoom in":"Zoom out",onClick:()=>{var e,t,n,r;if(1===w){const n=E();null===(t=null===(e=j.current)||void 0===e?void 0:e[m])||void 0===t||t.centerView(n),$(n)}else $(1),null===(r=null===(n=j.current)||void 0===n?void 0:n[m])||void 0===r||r.resetTransform()},focusHighlight:!1},{children:e(1===w?ne:re,{"aria-hidden":!0})})),t(pB,{children:[t(gB,{children:[!d&&t(n,{children:[e(fB,Object.assign({"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:A},{children:e(ie,{"aria-hidden":!0})})),e(fB,Object.assign({"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:N},{children:e(oe,{"aria-hidden":!0})}))]}),e(mB,Object.assign({ref:T,onTouchStart:e=>{w<=1&&k(e.touches[0].clientX)},onTouchMove:e=>{!S||w>1||C(e.touches[0].clientX)},onTouchEnd:()=>{Math.abs(_)>T.current.offsetWidth/3&&(_>0?N():A()),k(null),C(null)}},{children:e(bB,Object.assign({style:{transform:`translateX(calc(${100*-m}% - ${_}px))`}},{children:s.map(((t,n)=>{var r;return e(vB,Object.assign({"data-testid":"slide-item"},{children:e(eB,Object.assign({ref:e=>j.current[n]=e,panning:{disabled:w<=1},initialScale:1,onZoom:I,onZoomStop:I,onWheel:I},{children:e(rB,{children:e(yB,{src:t.src,alt:null!==(r=t.alt)&&void 0!==r?r:`Image ${n+1}`,placeholder:e(xB,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:M})})}))}),n)}))}))})),!h&&e(wB,{children:e($B,Object.assign({weight:"semibold"},{children:`${m+1}/${s.length}`}))})]}),!c&&e(SB,{children:e(kB,{children:s.map(((t,n)=>{var r;const i=null!==(r=t.thumbnailSrc)&&void 0!==r?r:t.src;return e(OB,Object.assign({"data-testid":"thumbnail-item",$active:n===m,onClick:()=>B(n),ref:e=>D.current[n]=e},{children:e(CB,{src:i,alt:`Thumbnail ${n+1}`,fit:"cover"})}),n)}))})})]})]}))},DB=f(TB),jB=I.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${ml.Neutral[8]};
    border: 1px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    max-width: 13rem;
    transition: all 200ms ease;
    ${Al.getTextStyle("Body","semibold")}
    color: ${({$selected:e})=>e&&ml.Primary};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${yl.MaxWidth.mobileL} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${Al.getTextStyle("BodySmall","semibold")}
    }

    ${e=>e.$error?M`
                background: ${ml.Neutral[8]};
                border: 1px solid ${ml.Validation.Red.Border};

                :hover {
                    box-shadow: 0 0 4px 1px ${ml.Shadow.Red};
                }
            `:e.$selected?M`
                background: ${ml.Accent.Light[5]};
                border: 1px solid ${ml.Primary};

                :hover {
                    box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
                }
            `:M`
                &:hover {
                    border: 1px solid ${ml.Accent.Light[1]};
                    box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
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
        color: ${ml.Neutral[3]};

        outline: none;
        cursor: not-allowed;
    }
`,_B=i.forwardRef(((n,r)=>{var{children:i,imgSrc:o,selected:a,error:s,type:l="button"}=n,c=lt(n,["children","imgSrc","selected","error","type"]);return t(jB,Object.assign({ref:r,$selected:a,$error:s,type:l},c,{children:[e(Fg,{src:o}),i]}))})),IB=M`
    height: 1.125rem;
    width: 1.125rem;
    color: ${ml.Primary};
`,MB=I.div`
    border-top: 1px solid ${ml.Neutral[5]};
    border-bottom: 1px solid ${ml.Neutral[5]};
`,EB=I(Nl.H3)`
    color: ${ml.Primary};
    margin-bottom: 0.5rem;
`,AB=I(Nl.Body)`
    color: ${ml.Primary};
`,NB=I(pe)`
    ${IB}
`,BB=I.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: 1px solid ${ml.Neutral[5]};
    }

    :hover {
        ${EB},
        ${AB},
        ${NB} {
            color: ${ml.PrimaryDark};
        }
    }
`,LB=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,RB=I(Nl.BodySmall)`
    margin-top: 0.25rem;
`,PB=I(Ho.div)`
    overflow: hidden;
`,FB=I.div`
    border-top: 1px solid ${ml.Neutral[5]};
`,zB=I(Nl.H5)`
    color: ${ml.Primary};
    margin-right: 0.5rem;
`,HB=I(Je)`
    ${IB}
`,WB=I(Qe)`
    ${IB}
`,VB=I.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    transition: border-width 300ms linear;
    border-top: 1px solid ${ml.Neutral[5]};

    :hover {
        ${zB},
        ${HB},
        ${WB} {
            color: ${ml.PrimaryDark};
        }
    }
`,YB=r=>{var{items:i,maxShown:o,style:s="default",onItemClick:l}=r,c=lt(r,["items","maxShown","style","onItemClick"]);const[d,u]=a(!o||o>=i.length),h=o?i.slice(0,o):i,f=o?i.slice(o):[],p=ln(),g=p.ref,m=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):l&&(e.preventDefault(),l(t,e))},b=()=>{u(!d)},v=(r,i,o,a)=>t(n,{children:[t(LB,{children:[e("small"===s?AB:EB,Object.assign({"data-testid":`link-title-${r}`,weight:"semibold"},{children:i})),o&&e(RB,Object.assign({"data-testid":`link-description-${r}`},{children:o})),a]}),e(NB,{})]}),y=ko({height:d?p.height:0});return t(MB,Object.assign({},c,{children:[h.map(((t,n)=>{const{title:r,description:i,secondaryDescription:o,onClick:a}=t,s=lt(t,["title","description","secondaryDescription","onClick"]);return e(BB,Object.assign({"data-testid":`list-item-shown-${n}`,onClick:e=>m(e,t)},s,{children:v(n,r,i,o)}),`list-item-shown-${n}`)})),f.length>0&&e(PB,Object.assign({style:y,"data-testid":"minimised-content"},{children:e(FB,Object.assign({ref:g},{children:f.map(((t,n)=>{const{title:r,description:i,onClick:o,secondaryDescription:a}=t,s=lt(t,["title","description","onClick","secondaryDescription"]);return e(BB,Object.assign({"data-testid":`list-item-minimised-${n}`,onClick:e=>m(e,t)},s,{children:v(n,r,i,a)}),`list-item-minimised-${n}`)}))}))})),f.length>0&&t(VB,Object.assign({type:"button",onClick:b,"data-testid":"toggle-button",$showMinimised:d},{children:[e(zB,Object.assign({weight:"semibold","data-testid":"toggle-button-label"},{children:d?"View less":"View more"})),e(d?WB:HB,{})]}))]}))},UB=I.div`
    ${e=>gc({textSize:e.$textSize})}
    ${e=>e.color&&M`
            color: ${e.color};
        `}
`,KB=f(((t,n)=>{const{baseTextColor:r,baseTextSize:i,inline:o}=t,a=lt(t,["baseTextColor","baseTextSize","inline"]);return e(UB,Object.assign({ref:n,as:o?"span":"div",$textSize:i,$textColor:r},a))})),XB=I.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,n=t.lg||t.md,r=t.sm?t.sm<=2?t.sm:2:void 0,i=t.md||t.sm||2;return M`
            grid-template-columns: repeat(${n||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${yl.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/i}% - 2rem), 1fr)
                );
            }

            ${yl.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${r||"auto-fill"},
                    minmax(calc(${100/(r||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,qB=I.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:n,startMd:r,colsMd:i,startSm:o,colsSm:a}=e;return M`
            grid-column: ${t||r||"auto"} / span
                ${n||i||1};

            ${yl.MaxWidth.tablet} {
                grid-column: ${r||o||"auto"} / span
                    ${i||a||1};
            }

            ${yl.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span ${a||1};
            }
        `}}
`,GB={Grid:i.forwardRef(((t,n)=>{const{children:r}=t,i=lt(t,["children"]);return e(XB,Object.assign({ref:n},i,{children:r}))})),Tile:i.forwardRef(((t,n)=>{const{children:r}=t,i=lt(t,["children"]);return e(qB,Object.assign({ref:n},i,{children:r}))}))},ZB=I.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${yl.MaxWidth.mobileL} {
        padding: 0;
    }
`,QB=()=>{u((()=>{t()||n()}),[]);const t=()=>document.getElementById(JB),n=()=>{if(!document.getElementById(JB)){const e=document.createElement("script");e.id=JB,e.type="module",e.src=eL,document.head.appendChild(e)}};return e(ZB,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},JB="lifesg-ds-masthead-script",eL="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",tL={notCompress:6,compress:4},nL=I.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,rL=I.nav`
    height: ${e=>e.$compress?tL.compress:tL.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Pl.Base};

    ${yl.MaxWidth.tablet} {
        height: ${3.5}rem;
    }
`,iL=I.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${yl.MaxWidth.tablet} {
        margin-left: 0rem;
    }
`,oL=I($l)`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,aL=I(et)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${ml.Neutral[1]};
`,sL=I.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${yl.MaxWidth.tablet} {
        height: 1.5rem;
    }

    ${yl.MaxWidth.mobileS} {
        height: 1.25rem;
    }
`,lL=I.div`
    display: flex;
    background-color: ${ml.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${yl.MaxWidth.tablet} {
        margin: 0 1rem;
    }

    ${yl.MaxWidth.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,cL=I.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Pl.Base};
        object-fit: contain;
    }
`,dL=({resources:t,onClick:n,"data-id":r,"data-testid":i="navbar-brand",type:o})=>e(cL,Object.assign({role:"link",onClick:e=>{n&&n(e,o)},tabIndex:0,"data-id":r,"data-testid":i,$type:o},{children:e(Fg,{src:t.logoSrc,alt:t.brandName})})),uL=I.div`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
    }
`,hL=I.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?M`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:M`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return M`
            height: calc(${t} * 100);
        `}}

	${yl.MaxWidth.tablet} {
        width: 75%;
    }

    ${yl.MaxWidth.mobileL} {
        width: 100%;
    }
`,fL=I.div`
    display: flex;
    flex-direction: column;
`,pL=I.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,gL=I(Ae)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,mL=I($l)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${ml.Neutral[1]};

    :active,
    :focus {
        color: ${ml.Primary};
    }
`,bL=i.forwardRef(((r,i)=>{const{show:o,resources:s,children:l,hideNavBranding:c,onClose:d,onBrandClick:h}=r,[f,p]=a(0),{primary:g,secondary:m}=s;u((()=>(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=()=>{if(window){const e=.01*window.innerHeight;p(e)}};return e(uL,Object.assign({ref:i,"data-testid":"drawer"},{children:e(hL,Object.assign({$show:o,$viewHeight:f},{children:t(fL,{children:[t(pL,{children:[e(sL,Object.assign({"data-id":"drawer-brand-container"},{children:!c&&t(n,{children:[e(dL,{resources:g,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&t(n,{children:[e(lL,{}),e(dL,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),e(mL,Object.assign({onClick:d,focusHighlight:!1,"aria-label":"Close nav menu"},{children:e(gL,{})}))]}),l]})}))}))})),vL={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},yL={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},xL={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},wL={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},$L=I.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${yl.MaxWidth.tablet} {
        display: none;
    }
`,SL=I.ul`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,kL=I.ul`
    display: none;
    list-style: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${yl.MaxWidth.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,OL=I.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${yl.MaxWidth.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${yl.MaxWidth.mobileL} {
        ${e=>{if(e.$mobile)return M`
                    padding: 0 1rem;
                `}}
    }
`,CL=I(cc.Small)`
    ${yl.MaxWidth.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,TL=I.div`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,DL=I(Nl.BodySmall)`
    margin-bottom: 0.5rem;
`,jL=I.div`
    display: flex;
`,_L=I.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${yl.MaxWidth.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${yl.MaxWidth.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,IL=({actionButtons:r,mobile:i=!1,onActionButtonClick:o})=>{const a=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),o(t,e)},l=(n,r)=>{const i=n?(e=>{const t=Mk(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(r):r;return i.map(((r,i)=>{let o;switch(r.type){case"download":o=n?(l=r.args,t(TL,{children:[e(DL,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),t(jL,{children:[e(_L,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:a},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(_L,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:a},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):e(CL,Object.assign({},r.args,{type:"button",onClick:s(r),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const t=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${n?"mobile-":""}${i+1}`;o=e(CL,Object.assign({},r.args,{type:"button",onClick:s(r),"data-testid":t}));break}case"component":{const e=r.args;o=e&&e.render||null;break}default:o=null}var l;if(o)return e(OL,Object.assign({$mobile:n},{children:o}),`action-button-${i+1}`)}))};if(r){const o=(null==r?void 0:r.mobile)||r.desktop,a=o.filter((e=>!!e.uncollapsible)),s=o.filter((e=>!e.uncollapsible));return i?e(n,{children:s.length>0&&e(kL,{children:l(i,s)})}):t(n,{children:[a.length>0&&e(SL,{children:l(!1,a)}),r.desktop.length>0&&e($L,{children:l(i,r.desktop)})]})}return e(n,{})},ML=I.ul`
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

    background: ${ml.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${ac.ElevationBoxShadow};
`,EL=I.ul`
    display: none;
    list-style: none;

    ${yl.MaxWidth.tablet} {
        border-left: 0.25rem solid ${ml.Primary};
        display: flex;
        flex-direction: column;
    }
`,AL=I(Nl.Hyperlink.Small)`
    ${Al.getTextStyle("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${ml.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${ml.Primary};
    }
    :hover {
        color: ${ml.Accent.Light[1]};
    }

    ${yl.MaxWidth.tablet} {
        ${Al.getTextStyle("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,NL=I.li`
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

    ${yl.MaxWidth.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,BL=({items:t,mobile:r=!1,onItemClick:i})=>{const o=e=>t=>{t.stopPropagation(),i(t,e)},a=(n=!1)=>t.map(((t,r)=>{const{children:i,options:a}=t,s=lt(t,["children","options"]),l=n?`link__mobile-${r+1}`:`link__${r+1}`;return e(NL,{children:e(AL,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:o(t)},a,{children:i}))},r)}));if(t&&t.length>0){return e(r?EL:ML,{children:a(r)})}return e(n,{})},LL=I.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${yl.MaxWidth.tablet} {
        display: none;
    }
`,RL=I.ul`
    display: none;
    list-style: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,PL=I.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${yl.MaxWidth.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,FL=I(Nl.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${ml.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${ml.Neutral[1]};
    }

    ${yl.MaxWidth.tablet} {
        color: ${ml.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${ml.Neutral[1]};
        }
    }
`,zL=I.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,HL=I.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${ml.Primary};

    ${yl.MaxWidth.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${ml.Primary};
    }
`,WL=I.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,VL=I($l)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,YL=I(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${ml.Neutral[3]};
    :hover {
        color: ${ml.Neutral[1]};
    }
`,UL=({items:r,selectedId:i,mobile:s=!1,hideNavBranding:l,onItemClick:c})=>{const[d,h]=a(-1),[f,p]=a(!1),g=o(null);u((()=>{const e=e=>{g.current&&!g.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{p(!1)},b=(e,t)=>n=>{n.stopPropagation(),h(t),p(!0),c(n,e)},v=(e,t)=>{e.stopPropagation(),c(e,t),p(!1)},y=()=>r.map(((n,r)=>{if("component"===n.itemType){const t=n&&n.children||null;return e("li",{children:t},r)}{const o=(e=>{if(e.id===i)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(n),{children:a,options:c}=n,u=lt(n,["children","options"]),h=o?s?"bold":"semibold":"regular",p=s?`link__mobile-${r+1}`:`link__${r+1}`,g=d>=0&&d===r&&f;return t(PL,Object.assign({$hiddenBranding:l},{children:[t(FL,Object.assign({"data-testid":p,weight:h,$selected:o},u,{onClick:b(n,r)},c,{children:[e(zL,{children:a}),o&&e(HL,{"data-testid":`${p}-indicator`}),s&&n.subMenu&&e(WL,{children:e(VL,Object.assign({"data-testid":`${p}-expand-collapse-button`,$selected:g,focusHighlight:!1,focusOutline:"browser","aria-label":g?"Collapse":"Expand"},{children:e(YL,{})}))})]})),g&&e(BL,{items:n.subMenu,mobile:s,onItemClick:v})]}),r)}}));return r&&r.length>0?s?e(RL,Object.assign({ref:g},{children:y()})):e(LL,Object.assign({ref:g,$alignLeft:l},{children:y()})):e(n,{})},KL=f(((r,i)=>{var{items:s,className:l,id:c,selectedId:d,compress:h=!1,fixed:f=!0,resources:p,hideNavElements:g=!1,hideNavBranding:m=!1,drawerDismissalExclusions:v=[],actionButtons:y,onItemClick:x,onActionButtonClick:w,onBrandClick:$,masthead:S=!0,layout:k="default"}=r,O=lt(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[C,T]=a(!1),[D,j]=a(!1),_="stretch"===k,I=o(),M=A(),E=(e=>{switch(e){case"bookingsg":return yL;case"mylegacy":return wL;case"ccube":return xL;default:return vL}})(null==M?void 0:M.resourceScheme),N=(null==p?void 0:p.primary)||E.primary,B=null==p?void 0:p.secondary;b(i,(()=>Object.assign(I.current,{dismissDrawer:()=>{L()}})),[C]),u((()=>(P(),window.addEventListener("resize",P),()=>{window.removeEventListener("resize",P)})),[]);const L=()=>{T(!1),setTimeout((()=>{j(!1)}),550)},R=e=>C&&-1===v.indexOf(e),P=()=>{window.innerWidth<=bl.tablet&&C&&L()},F=(e,t)=>{$&&(e.preventDefault(),$(t)),R("brand-click")&&L()},z=(e,t)=>{t.onClick?t.onClick(e):x&&(e.preventDefault(),x(t)),!(null==t?void 0:t.subMenu)&&R("item-click")&&L()},H=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):w&&(e.preventDefault(),w(t)),R("item-click")&&L()},W=()=>{T(!0),j(!0)},V=()=>{R("close-button-click")&&L()},Y=()=>{const t=s.mobile||s.desktop;return t&&t.length>0||y&&(()=>{const e=y.mobile||y.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?e(oL,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:W,focusHighlight:!1},{children:e(aL,{})})):null};return t(nL,Object.assign({ref:I,$fixed:f,className:l,id:c||"navbar-wrapper","data-testid":O["data-testid"]||"navbar-wrapper"},{children:[S&&e(QB,{}),t(Nx.Content,Object.assign({stretch:_},{children:[t(rL,Object.assign({$compress:h},{children:[!m&&t(sL,Object.assign({$compress:h,"data-id":"brand-container"},{children:[e(dL,{resources:N,onClick:F,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),B&&t(n,{children:[e(lL,{$compress:h}),e(dL,{resources:B,onClick:F,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!g&&t(iL,Object.assign({$hideNavBranding:m},{children:[e(UL,{items:s.desktop,onItemClick:z,selectedId:d,hideNavBranding:m}),e(IL,{actionButtons:y,onActionButtonClick:H}),Y()]}))]})),!g&&e(_p,Object.assign({show:D,enableOverlayClick:!0,onOverlayClick:V},{children:t(bL,Object.assign({show:C,resources:{primary:N,secondary:B},onClose:V,onBrandClick:F,actionButtons:y,hideNavBranding:m},{children:[e(UL,{items:s.mobile||s.desktop,onItemClick:z,selectedId:d,mobile:!0}),e(IL,{actionButtons:y,onActionButtonClick:H,mobile:!0})]}))}))]}))]}))})),XL=tL,qL=3.5,GL=M`
    color: ${ml.Validation.Orange.Icon};

    svg {
        color: ${ml.Validation.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${ml.Validation.Orange.Icon};
        svg {
            color: ${ml.Validation.Orange.Icon};
        }
    }
`,ZL=I.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${Pl.Base};
    background: ${ml.Neutral[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,QL=I(Nx.Content)`
    display: flex;
`,JL=I.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,eR=I.div`
    display: inline-block;
    width: 100%;

    ${Al.getTextStyle("Body","regular")}
    color: ${ml.Neutral[8]};

    p {
        display: inline-block;
    }

    strong {
        ${Al.getFontFamily("Body","semibold")}
        color: ${ml.Neutral[8]};
    }

    a {
        ${Al.getTextStyle("Body","regular")}
        ${GL}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return M`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,tR=I(Nl.Hyperlink.Default)`
    position: relative;

    ${GL}
`,nR=I($l)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,rR=I(Ae)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${ml.Neutral[8]};
`,iR=I.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${ml.Validation.Orange.Icon};
    ${Al.getTextStyle("BodySmall","semibold")};

    cursor: pointer;
`,oR=I.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,aR=n=>{var{children:r,visible:i=!0,dismissible:o=!0,sticky:s=!0,onDismiss:l,id:c,forwardedRef:d,maxCollapsedHeight:h,onClick:f,actionButton:p}=n,g=lt(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const m=g["data-testid"],[b,v]=a(i),{height:y,ref:x}=ln();u((()=>{v(i)}),[i]);const w=e=>{e.stopPropagation(),v(!1),o&&l&&l()},$=e=>{p.onClick&&(e.stopPropagation(),p.onClick(e))};if(!b)return null;return t(ZL,Object.assign({ref:d,$sticky:s,$clickable:!!f,onClick:f},g,{children:[t(QL,Object.assign({id:sR("container",c)},{children:[t(JL,{children:[e(eR,Object.assign({"data-testid":sR("text-content",m),$maxCollapsedHeight:h&&y>h?h:void 0},{children:e("div",Object.assign({ref:x},{children:r}))})),p&&e(iR,Object.assign({id:sR("action-button",c),"data-testid":sR("action-button",m),type:"button"},p,{onClick:$},{children:p.children}))]}),o&&e(nR,Object.assign({onClick:w,id:sR("dismiss-button",c),"data-testid":sR("dismiss-button",m),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e(rR,{"aria-hidden":!0})}))]})),f&&e(oR,{"aria-label":"Clickable banner",type:"button"})]}))},sR=(e,t="wrapper")=>`${t}-${e}`,lR=i.forwardRef(((t,n)=>e(aR,Object.assign({},t,{forwardedRef:n})))),cR=Object.assign(lR,{Link:tR});var dR={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */dR.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,i,o){return r=n()?Reflect.construct:function(e,n,r){var i=[null];i.push.apply(i,n);var o=new(Function.bind.apply(e,i));return r&&t(o,r.prototype),o},r.apply(null,arguments)}function i(e){return o(e)||a(e)||s(e)||c()}function o(e){if(Array.isArray(e))return l(e)}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=Object.hasOwnProperty,u=Object.setPrototypeOf,h=Object.isFrozen,f=Object.getPrototypeOf,p=Object.getOwnPropertyDescriptor,g=Object.freeze,m=Object.seal,b=Object.create,v="undefined"!=typeof Reflect&&Reflect,y=v.apply,x=v.construct;y||(y=function(e,t,n){return e.apply(t,n)}),g||(g=function(e){return e}),m||(m=function(e){return e}),x||(x=function(e,t){return r(e,i(t))});var w=M(Array.prototype.forEach),$=M(Array.prototype.pop),S=M(Array.prototype.push),k=M(String.prototype.toLowerCase),O=M(String.prototype.toString),C=M(String.prototype.match),T=M(String.prototype.replace),D=M(String.prototype.indexOf),j=M(String.prototype.trim),_=M(RegExp.prototype.test),I=E(TypeError);function M(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return y(e,t,r)}}function E(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(e,n)}}function A(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:k,u&&u(e,null);for(var i=t.length;i--;){var o=t[i];if("string"==typeof o){var a=n(o);a!==o&&(h(t)||(t[i]=a),o=a)}e[o]=!0}return e}function N(e){var t,n=b(null);for(t in e)!0===y(d,e,[t])&&(n[t]=e[t]);return n}function B(e,t){for(;null!==e;){var n=p(e,t);if(n){if(n.get)return M(n.get);if("function"==typeof n.value)return M(n.value)}e=f(e)}function r(e){return console.warn("fallback value for",e),null}return r}var L=g(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=g(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),P=g(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),F=g(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),z=g(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=g(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),W=g(["#text"]),V=g(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Y=g(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=g(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=g(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),X=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),q=m(/<%[\w\W]*|[\w\W]*%>/gm),G=m(/\${[\w\W]*}/gm),Z=m(/^data-[\-\w.\u00B7-\uFFFF]/),Q=m(/^aria-[\-\w]+$/),J=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=m(/^(?:\w+script|data):/i),te=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=m(/^html$/i),re=m(/^[a-z][.\w]*(-[.\w]+)+$/i),ie=function(){return"undefined"==typeof window?null:window},oe=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,i="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(i)&&(r=n.currentScript.getAttribute(i));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),n=function(e){return ae(e)};if(n.version="2.5.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,l=t.Node,c=t.Element,d=t.NodeFilter,u=t.NamedNodeMap,h=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,f=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,b=c.prototype,v=B(b,"cloneNode"),y=B(b,"nextSibling"),x=B(b,"childNodes"),M=B(b,"parentNode");if("function"==typeof s){var E=o.createElement("template");E.content&&E.content.ownerDocument&&(o=E.content.ownerDocument)}var se=oe(m,r),le=se?se.createHTML(""):"",ce=o,de=ce.implementation,ue=ce.createNodeIterator,he=ce.createDocumentFragment,fe=ce.getElementsByTagName,pe=r.importNode,ge={};try{ge=N(o).documentMode?o.documentMode:{}}catch(e){}var me={};n.isSupported="function"==typeof M&&de&&void 0!==de.createHTMLDocument&&9!==ge;var be,ve,ye=X,xe=q,we=G,$e=Z,Se=Q,ke=ee,Oe=te,Ce=re,Te=J,De=null,je=A({},[].concat(i(L),i(R),i(P),i(z),i(W))),_e=null,Ie=A({},[].concat(i(V),i(Y),i(U),i(K))),Me=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ee=null,Ae=null,Ne=!0,Be=!0,Le=!1,Re=!0,Pe=!1,Fe=!0,ze=!1,He=!1,We=!1,Ve=!1,Ye=!1,Ue=!1,Ke=!0,Xe=!1,qe="user-content-",Ge=!0,Ze=!1,Qe={},Je=null,et=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=A({},["audio","video","img","source","image","track"]),rt=null,it=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ot="http://www.w3.org/1998/Math/MathML",at="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml",lt=st,ct=!1,dt=null,ut=A({},[ot,at,st],O),ht=["application/xhtml+xml","text/html"],ft="text/html",pt=null,gt=o.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},bt=function(t){pt&&pt===t||(t&&"object"===e(t)||(t={}),t=N(t),be=be=-1===ht.indexOf(t.PARSER_MEDIA_TYPE)?ft:t.PARSER_MEDIA_TYPE,ve="application/xhtml+xml"===be?O:k,De="ALLOWED_TAGS"in t?A({},t.ALLOWED_TAGS,ve):je,_e="ALLOWED_ATTR"in t?A({},t.ALLOWED_ATTR,ve):Ie,dt="ALLOWED_NAMESPACES"in t?A({},t.ALLOWED_NAMESPACES,O):ut,rt="ADD_URI_SAFE_ATTR"in t?A(N(it),t.ADD_URI_SAFE_ATTR,ve):it,tt="ADD_DATA_URI_TAGS"in t?A(N(nt),t.ADD_DATA_URI_TAGS,ve):nt,Je="FORBID_CONTENTS"in t?A({},t.FORBID_CONTENTS,ve):et,Ee="FORBID_TAGS"in t?A({},t.FORBID_TAGS,ve):{},Ae="FORBID_ATTR"in t?A({},t.FORBID_ATTR,ve):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Ne=!1!==t.ALLOW_ARIA_ATTR,Be=!1!==t.ALLOW_DATA_ATTR,Le=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Pe=t.SAFE_FOR_TEMPLATES||!1,Fe=!1!==t.SAFE_FOR_XML,ze=t.WHOLE_DOCUMENT||!1,Ve=t.RETURN_DOM||!1,Ye=t.RETURN_DOM_FRAGMENT||!1,Ue=t.RETURN_TRUSTED_TYPE||!1,We=t.FORCE_BODY||!1,Ke=!1!==t.SANITIZE_DOM,Xe=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,Te=t.ALLOWED_URI_REGEXP||Te,lt=t.NAMESPACE||st,Me=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Me.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Me.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Me.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(Be=!1),Ye&&(Ve=!0),Qe&&(De=A({},i(W)),_e=[],!0===Qe.html&&(A(De,L),A(_e,V)),!0===Qe.svg&&(A(De,R),A(_e,Y),A(_e,K)),!0===Qe.svgFilters&&(A(De,P),A(_e,Y),A(_e,K)),!0===Qe.mathMl&&(A(De,z),A(_e,U),A(_e,K))),t.ADD_TAGS&&(De===je&&(De=N(De)),A(De,t.ADD_TAGS,ve)),t.ADD_ATTR&&(_e===Ie&&(_e=N(_e)),A(_e,t.ADD_ATTR,ve)),t.ADD_URI_SAFE_ATTR&&A(rt,t.ADD_URI_SAFE_ATTR,ve),t.FORBID_CONTENTS&&(Je===et&&(Je=N(Je)),A(Je,t.FORBID_CONTENTS,ve)),Ge&&(De["#text"]=!0),ze&&A(De,["html","head","body"]),De.table&&(A(De,["tbody"]),delete Ee.tbody),g&&g(t),pt=t)},vt=A({},["mi","mo","mn","ms","mtext"]),yt=A({},["foreignobject","annotation-xml"]),xt=A({},["title","style","font","a","script"]),wt=A({},R);A(wt,P),A(wt,F);var $t=A({},z);A($t,H);var St=function(e){var t=M(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var n=k(e.tagName),r=k(t.tagName);return!!dt[e.namespaceURI]&&(e.namespaceURI===at?t.namespaceURI===st?"svg"===n:t.namespaceURI===ot?"svg"===n&&("annotation-xml"===r||vt[r]):Boolean(wt[n]):e.namespaceURI===ot?t.namespaceURI===st?"math"===n:t.namespaceURI===at?"math"===n&&yt[r]:Boolean($t[n]):e.namespaceURI===st?!(t.namespaceURI===at&&!yt[r])&&!(t.namespaceURI===ot&&!vt[r])&&!$t[n]&&(xt[n]||!wt[n]):!("application/xhtml+xml"!==be||!dt[e.namespaceURI]))},kt=function(e){S(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=le}catch(t){e.remove()}}},Ot=function(e,t){try{S(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){S(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(Ve||Ye)try{kt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ct=function(e){var t,n;if(We)e="<remove></remove>"+e;else{var r=C(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===be&&lt===st&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=se?se.createHTML(e):e;if(lt===st)try{t=(new p).parseFromString(i,be)}catch(e){}if(!t||!t.documentElement){t=de.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?le:i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),lt===st?fe.call(t,ze?"html":"body")[0]:ze?t.documentElement:a},Tt=function(e){return ue.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},Dt=function(e){return e instanceof f&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof h)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},jt=function(t){return"object"===e(l)?t instanceof l:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},_t=function(e,t,r){me[e]&&w(me[e],(function(e){e.call(n,t,r,pt)}))},It=function(e){var t;if(_t("beforeSanitizeElements",e,null),Dt(e))return kt(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return kt(e),!0;var r=ve(e.nodeName);if(_t("uponSanitizeElement",e,{tagName:r,allowedTags:De}),e.hasChildNodes()&&!jt(e.firstElementChild)&&(!jt(e.content)||!jt(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return kt(e),!0;if("select"===r&&_(/<template/i,e.innerHTML))return kt(e),!0;if(7===e.nodeType)return kt(e),!0;if(Fe&&8===e.nodeType&&_(/<[/\w]/g,e.data))return kt(e),!0;if(!De[r]||Ee[r]){if(!Ee[r]&&Et(r)){if(Me.tagNameCheck instanceof RegExp&&_(Me.tagNameCheck,r))return!1;if(Me.tagNameCheck instanceof Function&&Me.tagNameCheck(r))return!1}if(Ge&&!Je[r]){var i=M(e)||e.parentNode,o=x(e)||e.childNodes;if(o&&i)for(var a=o.length-1;a>=0;--a){var s=v(o[a],!0);s.__removalCount=(e.__removalCount||0)+1,i.insertBefore(s,y(e))}}return kt(e),!0}return e instanceof c&&!St(e)?(kt(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!_(/<\/no(script|embed|frames)/i,e.innerHTML)?(Pe&&3===e.nodeType&&(t=e.textContent,t=T(t,ye," "),t=T(t,xe," "),t=T(t,we," "),e.textContent!==t&&(S(n.removed,{element:e.cloneNode()}),e.textContent=t)),_t("afterSanitizeElements",e,null),!1):(kt(e),!0)},Mt=function(e,t,n){if(Ke&&("id"===t||"name"===t)&&(n in o||n in gt))return!1;if(Be&&!Ae[t]&&_($e,t));else if(Ne&&_(Se,t));else if(!_e[t]||Ae[t]){if(!(Et(e)&&(Me.tagNameCheck instanceof RegExp&&_(Me.tagNameCheck,e)||Me.tagNameCheck instanceof Function&&Me.tagNameCheck(e))&&(Me.attributeNameCheck instanceof RegExp&&_(Me.attributeNameCheck,t)||Me.attributeNameCheck instanceof Function&&Me.attributeNameCheck(t))||"is"===t&&Me.allowCustomizedBuiltInElements&&(Me.tagNameCheck instanceof RegExp&&_(Me.tagNameCheck,n)||Me.tagNameCheck instanceof Function&&Me.tagNameCheck(n))))return!1}else if(rt[t]);else if(_(Te,T(n,Oe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==D(n,"data:")||!tt[e])if(Le&&!_(ke,T(n,Oe,"")));else if(n)return!1;return!0},Et=function(e){return"annotation-xml"!==e&&C(e,Ce)},At=function(t){var r,i,o,a;_t("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(a=s.length;a--;){var c=r=s[a],d=c.name,u=c.namespaceURI;if(i="value"===d?r.value:j(r.value),o=ve(d),l.attrName=o,l.attrValue=i,l.keepAttr=!0,l.forceKeepAttr=void 0,_t("uponSanitizeAttribute",t,l),i=l.attrValue,!l.forceKeepAttr&&(Ot(d,t),l.keepAttr))if(Re||!_(/\/>/i,i))if(Fe&&_(/((--!?|])>)|<\/(style|title)/i,i))Ot(d,t);else{Pe&&(i=T(i,ye," "),i=T(i,xe," "),i=T(i,we," "));var h=ve(t.nodeName);if(Mt(h,o,i)){if(!Xe||"id"!==o&&"name"!==o||(Ot(d,t),i=qe+i),se&&"object"===e(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(h,o)){case"TrustedHTML":i=se.createHTML(i);break;case"TrustedScriptURL":i=se.createScriptURL(i)}try{u?t.setAttributeNS(u,d,i):t.setAttribute(d,i),Dt(t)?kt(t):$(n.removed)}catch(e){}}}else Ot(d,t)}_t("afterSanitizeAttributes",t,null)}},Nt=function e(t){var n,r=Tt(t);for(_t("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)_t("uponSanitizeShadowNode",n,null),It(n)||(n.content instanceof a&&e(n.content),At(n));_t("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(i){var o,s,c,d,u,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!jt(i)){if("function"!=typeof i.toString)throw I("toString is not a function");if("string"!=typeof(i=i.toString()))throw I("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof i)return t.toStaticHTML(i);if(jt(i))return t.toStaticHTML(i.outerHTML)}return i}if(He||bt(h),n.removed=[],"string"==typeof i&&(Ze=!1),Ze){if(i.nodeName){var f=ve(i.nodeName);if(!De[f]||Ee[f])throw I("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof l)1===(s=(o=Ct("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?o=s:o.appendChild(s);else{if(!Ve&&!Pe&&!ze&&-1===i.indexOf("<"))return se&&Ue?se.createHTML(i):i;if(!(o=Ct(i)))return Ve?null:Ue?le:""}o&&We&&kt(o.firstChild);for(var p=Tt(Ze?i:o);c=p.nextNode();)3===c.nodeType&&c===d||It(c)||(c.content instanceof a&&Nt(c.content),At(c),d=c);if(d=null,Ze)return i;if(Ve){if(Ye)for(u=he.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(_e.shadowroot||_e.shadowrootmod)&&(u=pe.call(r,u,!0)),u}var g=ze?o.outerHTML:o.innerHTML;return ze&&De["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&_(ne,o.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+g),Pe&&(g=T(g,ye," "),g=T(g,xe," "),g=T(g,we," ")),se&&Ue?se.createHTML(g):g},n.setConfig=function(e){bt(e),He=!0},n.clearConfig=function(){pt=null,He=!1},n.isValidAttribute=function(e,t,n){pt||bt({});var r=ve(e),i=ve(t);return Mt(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],S(me[e],t))},n.removeHook=function(e){if(me[e])return $(me[e])},n.removeHooks=function(e){me[e]&&(me[e]=[])},n.removeAllHooks=function(){me={}},n}var se=ae();return se}();var uR=Vo(dR.exports);const hR=t=>i.forwardRef(((n,r)=>e(aR,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=uR.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e(cR.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),fR=I.div`
    display: flex;
    flex-direction: column;
`,pR=I.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,gR=I(pw)`
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

    ${yl.MaxWidth.mobileM} {
        padding: 0 0.5rem;
    }
`,mR=I(cc.Small)`
    margin: 2rem 0rem;
`,bR=n=>{var{id:r,value:i=[],"data-testid":s,className:l,cooldownDuration:c,actionButtonProps:d,errorMessage:h,numOfInput:f,onChange:p,onCooldownStart:g,onCooldownEnd:m}=n,b=lt(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=d?d:{},{disabled:y,onClick:x,styleType:w="secondary"}=v,$=lt(v,["disabled","onClick","styleType"]),S=o([]),k=o(p),[O,C]=a(new Array(f).fill("")),[T,D]=a(c),[j,_]=a(new Date);u((()=>{var e;return null===(e=null==S?void 0:S.current[0])||void 0===e||e.focus(),document.addEventListener("paste",E),()=>document.removeEventListener("paste",E)}),[]),u((()=>{if(0!==c){g&&g();const e=B();return()=>e()}}),[j]),u((()=>{k.current=p}),[p]),u((()=>{i.length===f&&C(i)}),[i]);const I=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(A(r)){const t=[...O];t[e]=r.substring(r.length-1),null===(n=S.current[e+1])||void 0===n||n.focus(),C(t),p&&p(t)}},M=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...O];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=S.current[e-1])||void 0===n||n.focus()),C(t),p&&p(t)}},E=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&A(t,f)?(C(n),k.current&&k.current(n)):e.preventDefault()},A=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),N=()=>{const e=Date.now(),t=1e3*c;return e<j.valueOf()+t},B=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*c,r=Math.ceil((j.valueOf()+n-t)/1e3);D(r),r<=0&&(m&&m(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},L=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return t(fR,Object.assign({id:r,"data-testid":s,className:l},{children:[e(pR,{children:O.map(((t,n)=>e(gR,Object.assign({id:L(n,"otp-input",r),"data-testid":L(n,"otp-input",s),"aria-label":`Enter OTP character ${n+1}`,ref:e=>S.current[n]=e,type:"text",inputMode:"numeric",value:t,error:!!h,onChange:I(n),onKeyDown:M(n),autoComplete:"off"},b),n)))}),h&&e(jx,{children:h}),e(mR,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{C(new Array(f).fill("")),N()||(_(new Date),D(c)),x&&x(e)},disabled:y||N()},{children:$.children?$.children:"Resend OTP"+(T?` in ${T} second${T>1?"s":""}`:"")}))]}))},vR=I.nav`
    display: flex;
`,yR=I.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${yl.MaxWidth.tablet} {
        align-self: center;
    }
`,xR=I.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,wR=I($l)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${ml.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${ml.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${ml.Accent.Light[1]};
    }
`,$R=I($l)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${ml.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${ml.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${ml.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?M`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:M`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${yl.MaxWidth.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,SR=I(cc.Default)`
    background: ${e=>e.$selected?ml.Primary:ml.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?ml.Primary:ml.Neutral[5]};
    color: ${e=>e.$selected?ml.Neutral[8]:ml.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?ml.Neutral[8]:ml.Neutral[1]};
        ${e=>e.$selected?M`
                    ${Al.getTextStyle("Body",700)};
                `:M`
                    ${Al.getTextStyle("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?ml.Primary:ml.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?ml.Primary:ml.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?ml.Neutral[8]:ml.Primary};
            ${e=>e.$selected?M`
                        ${Al.getTextStyle("Body",700)};
                    `:M`
                        ${Al.getTextStyle("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?ml.Primary:ml.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${ml.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?ml.Neutral[8]:ml.Primary};

            ${e=>e.$selected?M`
                        ${Al.getTextStyle("Body",700)};
                    `:M`
                        ${Al.getTextStyle("Body",400)};
                    `}
        }
    }
`;I($l)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ml.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${ml.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${ml.Accent.Light[1]};
    }
`;const kR=I.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,OR=I.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${ml.Neutral[1]};

    display: flex;
    justify-content: center;
`,CR=I(Nl.Body)`
    white-space: nowrap;
`,TR=I(Nl.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,DR=I(pw)`
    ${Al.getTextStyle("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${ml.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${Al.getTextStyle("XSmall",400)};
        }
    }
`,jR=I.div`
    ${Al.getTextStyle("XSmall",400)};

    background-color: ${ml.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${ml.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,_R=I.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,IR=i.forwardRef((({id:n,"data-testid":r,className:i,pageSize:o=10,totalItems:s,activePage:l,pageSizeOptions:c=MR,showFirstAndLastNav:d,showPageSizeChanger:h=!1,onPageChange:f,onPageSizeChange:p},g)=>{const m=Vc.useMediaQuery({maxWidth:bl.mobileL}),b=c,[v,y]=a(!1),[x,w]=a(!1),[$,S]=a(""),[k,O]=a(b&&b.length>=1?b[0]:null),[C,T]=a(!m&&h&&k?k.value:o),D=Math.ceil(s/C),j=1===l,_=l===D,I=l>1?()=>P(1):void 0,M=l<D?()=>P(D):void 0,E=l>1?()=>P(l-1):void 0,A=l<D?()=>P(parseInt(l.toString())+1):void 0,N=e=>e?()=>U():()=>V(),B=e=>e?()=>K():()=>Y();u((()=>{l&&L(l)}),[l]),u((()=>{var e;T(o),O(null!==(e=b.find((e=>e.value===o)))&&void 0!==e?e:null)}),[o]);const L=e=>{S(e.toString())},R=()=>{y(!1),w(!1)},P=e=>{f&&(f(e),L(e))},F=()=>{const e=Math.min(D,l+5);P(e),L(e),y(!0),w(!1)},z=()=>{const e=Math.max(1,l-5);P(e),L(e),y(!1),w(!0)},H=e=>{const t=e.target.value;if(void 0===t||0===t.length)S("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));L(Math.max(1,Math.min(D,e)))}else S(t.replace(/[^0-9]/g,""))},W=e=>{e.preventDefault(),$&&f(parseInt($))},V=()=>{y(!0)},Y=()=>{y(!1)},U=()=>{w(!0)},K=()=>{w(!1)},X=(n,r,i)=>t(kR,{children:[e(wR,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":n?"Previous 5 pages":"Next 5 pages",onMouseOver:N(n),onMouseOut:B(n),onFocus:N(n),onBlur:B(n),onClick:n?z:F},{children:e(n&&x?tt:r&&v?nt:ot,{"aria-hidden":!0})})),n&&x&&e(jR,{children:"Previous 5 pages"}),r&&v&&e(jR,{children:"Next 5 pages"})]},i);return t(vR,Object.assign({className:i,ref:g,id:n||"pagination-wrapper","data-testid":r||"pagination","aria-label":"Pagination"},{children:[e(yR,{children:t(xR,{children:[d&&e($R,Object.assign({onClick:I,disabled:j,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:e(rt,{"aria-hidden":!0})})),e($R,Object.assign({onClick:E,disabled:j,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:e(ge,{"aria-hidden":!0})})),m?t(OR,{children:[e("form",Object.assign({onSubmit:W},{children:e(DR,{value:$,onChange:H,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(r||"pagination")+"-input"})})),e(TR,{children:"/"}),e(CR,{children:D})]}):[...Array(D)].map(((t,n)=>{const r=n+1,i=D-5,o=l===r;if(D<=7)return e(SR,Object.assign({onClick:()=>P(r),$selected:o,"aria-label":"Page "+r,"aria-current":!!o&&"page",onMouseOver:R,onFocus:R},{children:r}),r);const a=l+1>5&&2===r,s=l-1<=i&&r===D-1-1;return a||s?X(a,s,r):r<=5&&l+1<=5||r<=1||r===l||r<=l+1&&r>=l-1-1||r>i&&l-1>i||r>D-1?e(SR,Object.assign({onClick:()=>P(r),$selected:o,"aria-label":"Page "+r,"aria-current":!!o&&"page",onMouseOver:R,onFocus:R},{children:r}),r):null})),e($R,Object.assign({onClick:A,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:e(pe,{"aria-hidden":!0})})),d&&e($R,Object.assign({onClick:M,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:e(it,{"aria-hidden":!0})}))]})}),h&&!m&&e(_R,{children:e(zI,{options:b,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{O(e);const t=e.value,n=Math.ceil(s/t);T(t);p&&p(l>=n?n:l,t)}})})]}))})),MR=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],ER=I.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Al.getTextStyle("XSmall","semibold")}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r;if("solid"===e.$type)switch(r=ml.Neutral[8],e.$color){case"grey":t=ml.Neutral[3],n=ml.Neutral[3];break;case"green":t=ml.Validation.Green.Text,n=ml.Validation.Green.Text;break;case"yellow":t=ml.Validation.Orange.Text,n=ml.Validation.Orange.Text;break;case"red":t=ml.Validation.Red.Text,n=ml.Validation.Red.Text;break;case"blue":t=ml.Validation.Blue.Text,n=ml.Validation.Blue.Text;break;default:t=ml.Neutral[1],n=ml.Neutral[1]}else switch(e.$color){case"grey":t=ml.Neutral[6],n=ml.Neutral[4],r=ml.Neutral[3];break;case"green":t=ml.Validation.Green.Background,n=ml.Validation.Green.Border,r=ml.Validation.Green.Text;break;case"yellow":t=ml.Validation.Orange.Background,n=ml.Validation.Orange.Border,r=ml.Validation.Orange.Text;break;case"red":t=ml.Validation.Red.Background,n=ml.Validation.Red.Border,r=ml.Validation.Red.Text;break;case"blue":t=ml.Validation.Blue.Background,n=ml.Validation.Blue.Border,r=ml.Validation.Blue.Text;break;default:t=ml.Neutral[8],n=ml.Neutral[5],r=ml.Neutral[1]}return M`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};
        `}}
`,AR=I.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,NR=n=>{var{type:r,colorType:i="black",children:o,icon:a}=n,s=lt(n,["type","colorType","children","icon"]);return t(ER,Object.assign({$type:r,$color:i},s,{children:[a,e(AR,{children:o})]}))},BR=I.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?M`
            visibility: visible;
            opacity: 1;
            transition: ${Pl.Base};
            z-index: 50;
        `:M`
            visibility: hidden;
            opacity: 0;
            transition: ${Pl.Base};
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

	${yl.MaxWidth.mobileL} {
        display: none;
    }
`,LR=I(Kp)`
    padding: 3.5rem 1.25rem 2.5rem;
`,RR=I.div`
    position: relative;
    width: fit-content;
`,PR=I.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,FR=I.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,zR=r=>{var{children:i,visible:s,onMobileClose:l}=r,c=lt(r,["children","visible","onMobileClose"]);const d=c["data-testid"]||"popover",[h,f]=a("none"),p=o(null),g=Vc.useMediaQuery({maxWidth:bl.mobileL}),m=o(h);u((()=>(y(),window.addEventListener("resize",yh(b,300)),()=>{window.removeEventListener("resize",yh(b,300))})),[]);const b=()=>{y()},v=()=>{l&&l()},y=()=>{const e=x();var t;e&&(t=e,m.current=t,f(t))},x=()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},w=()=>"string"==typeof i?e(Nl.BodySmall,{children:i}):i;return t(n,{children:[e(BR,Object.assign({ref:p,"data-testid":d,$visible:s,$offset:h},c,{children:e(Gu,{children:w()})})),g&&e(Vp,Object.assign({show:s,onOverlayClick:v},{children:e(LR,Object.assign({onClose:v},{children:e(FR,{children:w()})}))}))]})},HR=(n,r)=>i=>{const{onPopoverAppear:s,onPopoverDismiss:l}=i,c=lt(i,["onPopoverAppear","onPopoverDismiss"]),d=r.trigger||"click",h=c,[f,p]=a(!1),g=o(),m=Vc.useMediaQuery({maxWidth:bl.mobileL});u((()=>{if(!m)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[f]);const b=e=>{g&&!g.current.contains(e.target)&&(f&&p(!1),l&&l())};return t(RR,Object.assign({id:"popover-hoc-wrapper",ref:g},{children:[e(PR,Object.assign({id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||m)&&(p(!f),!f&&s&&s(),f&&l&&l())},onMouseEnter:()=>{"hover"!==d||m||p(!0)},onMouseLeave:()=>{"hover"===d&&f&&!m&&p(!1)},"aria-label":"popover-button"},{children:e(n,Object.assign({},h))})),e(zR,Object.assign({visible:f,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{p(!1)}},{children:r.content}))]}))},WR=I.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${yl.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${yl.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,VR=I.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,YR=I.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?ml.Accent.Light[1]:ml.Neutral[6])(e)};\n        `}};
`,UR=I(Nl.BodySmall)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?ml.Primary:ml.Neutral[3])(e)};`}};
`,KR=I(Nl.BodySmall)`
    overflow-wrap: anywhere;
    color: ${ml.Neutral[1]};
`,XR=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var qR=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),GR=Zs,ZR=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,QR=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var JR=function(e){return(e=GR(e))&&e.replace(ZR,qR).replace(QR,"")},eP=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var tP=function(e){return e.match(eP)||[]},nP=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var rP=function(e){return nP.test(e)},iP="\\ud800-\\udfff",oP="\\u2700-\\u27bf",aP="a-z\\xdf-\\xf6\\xf8-\\xff",sP="A-Z\\xc0-\\xd6\\xd8-\\xde",lP="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",cP="["+lP+"]",dP="\\d+",uP="["+oP+"]",hP="["+aP+"]",fP="[^"+iP+lP+dP+oP+aP+sP+"]",pP="(?:\\ud83c[\\udde6-\\uddff]){2}",gP="[\\ud800-\\udbff][\\udc00-\\udfff]",mP="["+sP+"]",bP="(?:"+hP+"|"+fP+")",vP="(?:"+mP+"|"+fP+")",yP="(?:['’](?:d|ll|m|re|s|t|ve))?",xP="(?:['’](?:D|LL|M|RE|S|T|VE))?",wP="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",$P="[\\ufe0e\\ufe0f]?",SP=$P+wP+("(?:\\u200d(?:"+["[^"+iP+"]",pP,gP].join("|")+")"+$P+wP+")*"),kP="(?:"+[uP,pP,gP].join("|")+")"+SP,OP=RegExp([mP+"?"+hP+"+"+yP+"(?="+[cP,mP,"$"].join("|")+")",vP+"+"+xP+"(?="+[cP,mP+bP,"$"].join("|")+")",mP+"?"+bP+"+"+yP,mP+"+"+xP,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",dP,kP].join("|"),"g");var CP=tP,TP=rP,DP=Zs,jP=function(e){return e.match(OP)||[]};var _P=yI,IP=JR,MP=function(e,t,n){return e=DP(e),void 0===(t=n?void 0:t)?TP(e)?jP(e):CP(e):e.match(t)||[]},EP=RegExp("['’]","g");var AP=Vo(function(e){return function(t){return _P(MP(IP(t).replace(EP,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})));const NP=n=>{var{steps:r,currentIndex:i,displayExtractor:o,fadeColor:a,fadePosition:s="both"}=n,l=lt(n,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=Vc.useMediaQuery({maxWidth:xl.tablet}),d=e=>o?o(e):e.toString(),u=(e,t)=>AP(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return t(WR,Object.assign({},l,{children:[e(VR,{children:r.map(((t,n)=>{const r=n<=i;return e(XR,Object.assign({id:u(n,i)},{children:e(YR,{highlighted:r})}),n)}))}),e(VR,{children:c?t(XR,Object.assign({id:u(i,i)},{children:[t(KR,Object.assign({weight:"semibold",id:`${u(i,i)}-counter`},{children:["Step ",i+1," of ",r.length]})),e(KR,Object.assign({weight:"regular",id:`${u(i,i)}-title`},{children:d(r[i])}))]}),i):r.map(((t,n)=>{const r=n<=i,o=n===i,a=o?"bold":"regular";return e(XR,Object.assign({id:`${u(n,i)}-title`},{children:e(UR,Object.assign({highlighted:r,weight:a,"aria-current":o},{children:d(t)}))}),n)}))})]}))},BP=I.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${ml.Accent.Light[2]};

    ${e=>{if(e.$disabled)return`\n\t\t\t\tborder: 2px solid ${ml.Neutral[4](e)};\n\t\t\t`}}
`,LP=I.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,RP=I.div`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${e=>e.$selected?1:0};
    transition: all 200ms ease-in-out;
    background: ${e=>e.$disabled?ml.Neutral[4](e):ml.Primary(e)};
    border-radius: 50%;
    border: 1px solid transparent;
`,PP=n=>{var{className:r,checked:i,disabled:o,onChange:a}=n,s=lt(n,["className","checked","disabled","onChange"]);return t(BP,Object.assign({$selected:i,$disabled:o,className:r,"data-testid":"radio-button"},{children:[e(LP,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{o||null==a||a(e)},checked:i,disabled:o},s)),e(RP,{id:"checkmark","data-testid":"checkmark",$disabled:o,$selected:i})]}))},FP=I.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,zP=I.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${ml.Neutral[5]};
    background-color: ${ml.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,HP=I(zP)`
    height: 100vh;
    left: 0;
    top: 0;
    ${yl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,WP=I(zP)`
    display: none;
    visibility: hidden;
    ${yl.MaxWidth.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,VP=I(Ho.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${ml.Accent.Light[6]};
    border-radius: 0 8px 8px 0;
    border: 1px solid ${ml.Neutral[5]};

    ${e=>e.$showDrawer?M`
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              `:M`
                  border: 0;
                  padding: 0;
              `};
`,YP=I.li`
    width: 100%;
`,UP=I(cc.Default)`
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
            ${Al.getFontFamily("XSmall","regular")}
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
                background-color: ${ml.Accent.Light[5]};
                color: ${ml.Primary} !important;
            }

            span {
                ${Al.getFontFamily("XSmall","semibold")}
                color: ${ml.Primary} !important;
            }
        }
    }

    ${e=>e.$highlight&&M`
            span {
                div {
                    background-color: ${ml.Accent.Light[5]};
                }

                span {
                    ${Al.getFontFamily("XSmall","semibold")}
                    color: ${ml.Primary};
                }
            }
        `}
`,KP=I.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,XP=I(Nl.XSmall)``,qP=$({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),GP=I.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,ZP=I.li`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${ml.Neutral[5]};
`,QP=I(Ho.li)``,JP=I(cc.Default)`
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
        ${Al.getFontFamily("H5","semibold")}
        font-size: 1rem !important;
        color: ${ml.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${ml.Accent.Light[4]};

        span {
            ${e=>e.$noChildren&&M`
                    color: ${ml.Primary} !important;
                `}
        }
    }

    ${e=>e.$highlight&&M`
            background-color: ${ml.Accent.Light[4]};
        `}
`,eF=I(Ho.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,tF=I.div`
    align-self: center;
    padding-left: 0.5rem;
`,nF=I(_)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${ml.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,rF=I.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,iF=I(Ho.ul)``,oF=I.li``,aF=I(cc.Default)`
    width: 100%;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;
    outline-offset: -0.125rem;

    span {
        ${Al.getFontFamily("H5","regular")}
        font-size: 1rem !important;
        color: ${ml.Neutral[1]} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        background-color: ${ml.Accent.Light[5]};
        span {
            ${Al.getFontFamily("H5","semibold")}
            color: ${ml.Primary} !important;
        }
    }
`,sF=Object.assign((n=>{var{fixed:r=!0,children:i}=n,s=lt(n,["fixed","children"]);const l=o(null),[c,d]=a(void 0),[h,f]=a(void 0),[p,g]=a(void 0),[b,v]=a(!1),y=m((()=>({currentItem:c,selectedItem:h,previouslySelectedItemId:p,setCurrentItem:d,setSelectedItem:f,setPreviouslySelectedItemId:g})),[c,h,p,d,f,g]),x=ko({width:b?240:0,borderRightWidth:b?1:0,borderTopWidth:b?1:0,borderBottomWidth:b?1:0,borderLeftWidth:0});return jd("click",(e=>{l.current&&!l.current.contains(e.target)&&(f({itemId:p||(h?h.itemId:void 0),content:void 0}),g(void 0),d(void 0))}),"window",!0),u((()=>{v(h&&!!h.content||c&&!!c.content)}),[c,h]),e(qP.Provider,Object.assign({value:y},{children:t(FP,Object.assign({$fixed:r},s,{ref:l,onMouseLeave:()=>{d(void 0)}},{children:[e(HP,{children:i}),e(VP,Object.assign({style:x,$showDrawer:b,"data-testid":"sidenav-drawer"},{children:c&&c.content||h&&h.content})),e(WP,{})]}))}))}),{Group:n=>{var{separator:r,children:i}=n,o=lt(n,["separator","children"]);return t(GP,Object.assign({},o,{children:[i,r&&e(ZP,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:i,title:o,onClick:a}=n,s=lt(n,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:h,setCurrentItem:f,setPreviouslySelectedItemId:p,setSelectedItem:m}=g(qP);u((()=>{s.selected&&m({itemId:l,content:void 0})}),[s.selected]);return e(YP,{children:t(UP,Object.assign({styleType:"link",type:"button",onClick:()=>{p((()=>{if(r&&h)return d||h.itemId})()),f({itemId:l,content:r}),m({itemId:l,content:r}),a&&!r&&a(l)},onMouseEnter:()=>{f({itemId:l,content:r})}},s,{$highlight:h&&h.itemId===l||c&&c.itemId===l},{children:[e(KP,{children:i}),e(XP,{children:o})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:o,children:s}=n,l=lt(n,["id","title","onClick","children"]);const[c,d]=a(!0),[u,h]=a(!1),{currentItem:f,setSelectedItem:p,setPreviouslySelectedItemId:m,setCurrentItem:b}=g(qP),v=ko({from:{opacity:0},to:{opacity:1}}),y=ln(),x=y.ref,w=ko({height:s&&c?y.height:0});return t(QP,Object.assign({onMouseEnter:()=>{h(!0)},onMouseLeave:()=>{h(!1)}},l,{style:v},{children:[t(JP,Object.assign({styleType:"link",type:"button",onClick:()=>{s?d(!c):(p({itemId:f.itemId,content:void 0}),b(void 0),m(void 0),o&&o(r))},$highlight:u&&c,$noChildren:!s},{children:[e(rF,{children:i}),s&&e(tF,{children:e(nF,{"aria-hidden":!0,$expanded:c})})]})),e(eF,Object.assign({style:w},{children:e(iF,Object.assign({ref:x},{children:s}))}))]}))},DrawerSubitem:t=>{var{id:n,title:r,onClick:i}=t,o=lt(t,["id","title","onClick"]);const{currentItem:a,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=g(qP);return e(oF,Object.assign({},o,{children:e(aF,Object.assign({styleType:"link",type:"button",onClick:()=>{i&&i(n),s({itemId:a.itemId,content:void 0}),l(void 0),c(void 0)}},{children:r}))}))}}),lF=E`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,cF=I.div`
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
    background: ${ml.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return M`
                animation: ${lF} 0.3s;
            `}}
`,dF=I.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,uF=I($l)`
    padding: 0;
`,hF=I(Ae)`
    color: ${ml.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,fF=I.div`
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
    ${yl.MaxWidth.mobileM} {
        margin: 0 0.5rem;
    }
`,gF=I.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,mF=I.div`
    max-width: 30%;
`,bF=I(cc.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Al.getTextStyle("XSmall","semibold")};
    }
`,vF=I(Nl.H6)`
    overflow-wrap: anywhere;
    ${yl.MaxWidth.mobileM} {
        ${Al.getTextStyle("XSmall","semibold")}
    }
`,yF=I(Nl.XSmall)`
    overflow-wrap: anywhere;
`,xF=I.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,wF=M`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,$F=I(Be)`
    ${wF}
`,SF=I(at)`
    ${wF}
`,kF=I(Ne)`
    ${wF}
`,OF="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",CF="smart-app-banner";const TF=i.forwardRef((function(r,i){const{className:o,show:a,href:s,content:l,offset:c=0,icon:d=OF,animated:u=!1,onDismiss:h,onClick:f}=r,{title:p,message:g,buttonLabel:m,buttonAriaLabel:b,numberOfStars:v}=l,y=e=>{e.stopPropagation(),window.open(s,"_blank","noreferrer"),null==f||f()};return e(n,{children:a&&t(cF,Object.assign({ref:i,$isAnimated:u,$offset:c,className:o},{children:[e(dF,Object.assign({onClick:h,id:`${CF}-dismiss`,"data-testid":`${CF}-dismiss-container`},{children:e(uF,Object.assign({"aria-label":"Dismiss"},{children:e(hF,{})}))})),t(fF,Object.assign({onClick:y,id:`${CF}-proceed`,"data-testid":`${CF}-proceed-container`},{children:[e(gF,{src:d,alt:"lifesg-app-icon"}),t(pF,{children:[e(vF,{children:p}),e(yF,{children:g}),(()=>{if(isNaN(v)||v<0)return;const t=[],n=v-Math.floor(v)>=.4;for(let n=0;n<Math.floor(v);n++)t.push(e($F,{},`star${n}`));if(n&&t.push(e(SF,{},"halfstar")),t.length<5){const n=5-t.length;for(let r=0;r<n;r++)t.push(e(kF,{},`emptystar${r}`))}return e(xF,{children:t.slice(0,5)})})()]}),e(mF,{children:e(bF,Object.assign({type:"button",onClick:y,"aria-label":b},{children:m}))})]}))]}))})})),DF=i.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),jF=I.div`
    position: relative;
    width: 100%;
`,_F=I.div`
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,`\n\t\t\t${yl.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,IF=I.div`
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
`,MF=I($l)`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?M`
                    justify-content: left;
                    padding-left: 0.5rem;
                `:M`
                    justify-content: right;
                    padding-right: 0.5rem;
                `}

        svg {
            color: ${ml.Neutral[3]};
        }
    }
`,EF=f(((r,i)=>{var{children:s,fadeColor:l,fadePosition:c="both",showIndicator:d=!1,onResize:h}=r,f=lt(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[p,g]=a("left"===c||"both"===c),[m,v]=a("right"===c||"both"===c),y=o(null),x=o(null),w=$h($,50);function $(){const e=y.current,t=x.current;e&&t&&t.scrollWidth>e.offsetWidth?(v(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),g(t.scrollLeft>=1)):(v(!1),g(!1))}function S(){$(),h&&h({content:x.current,wrapper:y.current})}ln({onResize:S,targetRef:y,refreshMode:"debounce",refreshRate:50}),b(i,(()=>({resize(){S()}}))),u((()=>{const e=x.current;return $(),e&&e.addEventListener("scroll",w),()=>{e&&e.removeEventListener("scroll",w)}}),[]);return t(jF,Object.assign({ref:y},f,{children:[e(IF,Object.assign({ref:x},{children:s})),(()=>{let r;return r=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(n,{children:[p&&e(_F,Object.assign({$backgroundColor:r.left,$position:"left",$showIndicator:d,"data-id":"left-fade"},{children:d&&e(MF,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e(ge,{})}))})),m&&e(_F,Object.assign({$backgroundColor:r.right,$position:"right",$showIndicator:d,"data-id":"right-fade"},{children:d&&e(MF,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e(pe,{})}))}))]})})()]}))})),AF=I.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return M`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: 4px solid ${ml.Neutral[5]};
                }
            `}}
`,NF=I.li`
    display: flex;
    flex-shrink: 0;
    border-bottom: 4px solid ${ml.Neutral[5]};

    ${e=>{if(e.$active)return M`
                border-bottom: 4px solid ${ml.Primary};
            `}}

    ${yl.MaxWidth.mobileL} {
        flex: 1;
        justify-content: center;
    }
`,BF=I.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,LF=I(Nl.Body)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${ml.Neutral[3]};
    opacity: 1;

    ${e=>{if(e.$active)return M`
                opacity: 0;
            `}}
`,RF=I(Nl.Body)`
    color: ${ml.Primary};
    opacity: 0;
    ${e=>{if(e.$active)return M`
                opacity: 1;
            `}}
`,PF=I(EF)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`,FF=({controlledMode:n,"data-testid":r,onTabClick:i,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:c}=g(DF),d=Vc.useMediaQuery({maxWidth:xl.mobileL}),u=o(null),h=e=>t=>{t.preventDefault(),n||s(e),i&&i(c[e].title,e)},f=e=>d&&e.length>20?`${e.substring(0,20)}...`:e;return e(PF,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=xl.tablet&&u&&(e.scrollLeft=u.current.getBoundingClientRect().left)},"data-testid":r},{children:e(AF,Object.assign({role:"tablist",$fullWidthIndicatorLine:a},{children:c.map(((n,i)=>{const o=l===i;return e(NF,Object.assign({role:"none",$active:o,ref:o?u:null},{children:t(BF,Object.assign({role:"tab",type:"button","aria-selected":o,onClick:h(i),"data-testid":`${r}-link-${i}`},{children:[e(LF,Object.assign({$active:o,weight:"regular"},{children:f(n.title)})),e(RF,Object.assign({$active:o,weight:"semibold","aria-hidden":"true"},{children:f(n.title)}))]}))}),i)}))}))}))},zF=I.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,HF=Object.assign((n=>{var{children:r,currentActive:i,initialActive:o=0,onTabClick:s,"data-testid":l,fullWidthIndicatorLine:d}=n,h=lt(n,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[f,p]=a(i||o),[g,m]=a([]);u((()=>{const e=k.toArray(r).filter(Boolean);b(e)}),[r]),u((()=>{"number"==typeof i&&p(i)}),[i]);const b=e=>{const t=e.map((e=>({title:e.props.title})));m(t)};return e(zF,Object.assign({"data-testid":l},h,{children:t(DF.Provider,Object.assign({value:{tabLinks:g,currentActiveIndex:f,setCurrentActiveIndex:p}},{children:[e(FF,{controlledMode:"number"==typeof i,onTabClick:s,"data-testid":`${l}-tabs`,fullWidthIndicatorLine:d}),k.toArray(r).filter(Boolean).map(((e,t)=>c(e,{key:t,index:t})))]}))}))}),{Item:t=>{var{index:n,children:r}=t,i=lt(t,["index","children"]);const{currentActiveIndex:o}=g(DF);return o===n?e("div",Object.assign({role:"tabpanel"},i,{children:r})):null}}),WF=I.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Al.getTextStyle("XSmall","semibold")}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r,i;if("solid"===e.$type)switch(r=ml.Neutral[8],i=`0px 0px 4px 1px ${ml.Neutral[4](e)}`,e.$color){case"grey":t=ml.Neutral[3],n=ml.Neutral[3];break;case"green":t=ml.Validation.Green.Text,n=ml.Validation.Green.Text;break;case"yellow":t=ml.Validation.Orange.Text,n=ml.Validation.Orange.Text;break;case"red":t=ml.Validation.Red.Text,n=ml.Validation.Red.Text;break;case"blue":t=ml.Validation.Blue.Text,n=ml.Validation.Blue.Text;break;default:t=ml.Neutral[1],n=ml.Neutral[1]}else switch(i="0px 0px 4px 1px rgba(164, 164, 164, 0.70)",e.$color){case"grey":t=ml.Neutral[6],n=ml.Neutral[4],r=ml.Neutral[3];break;case"green":t=ml.Validation.Green.Background,n=ml.Validation.Green.Border,r=ml.Validation.Green.Text;break;case"yellow":t=ml.Validation.Orange.Background,n=ml.Validation.Orange.Border,r=ml.Validation.Orange.Text;break;case"red":t=ml.Validation.Red.Background,n=ml.Validation.Red.Border,r=ml.Validation.Red.Text;break;case"blue":t=ml.Validation.Blue.Background,n=ml.Validation.Blue.Border,r=ml.Validation.Blue.Text;break;default:t=ml.Neutral[8],n=ml.Neutral[5],r=ml.Neutral[1],i="0px 0px 4px 1px rgba(164, 164, 164, 0.50)"}return M`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};

            @media (hover: hover) {
                &:hover {
                    box-shadow: ${e.$interactive?i:"none"};
                }
            }
        `}}

    ${yl.MaxWidth.tablet} {
        ${({$interactive:e})=>{if(e)return M`
                    ${Al.getTextStyle("H5","semibold")};
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,VF=I.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,YF=n=>{var{type:r,colorType:i="black",children:o,interactive:a=!1,icon:s,iconPosition:l="left"}=n,c=lt(n,["type","colorType","children","interactive","icon","iconPosition"]);return t(WF,Object.assign({as:a?"button":"div",$type:r,$color:i,$interactive:a},c,{children:["left"===l&&s,e(VF,{children:o}),"right"===l&&s]}))};var UF;ad.extend(ld),function(e){e.formatHourlyDisplay=e=>ad(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,n)=>kd.getTimeDiffInMinutes(e,t)/15*(n/2)}(UF||(UF={}));const KF=1.25,XF=e=>"minified"===e?12:40,qF=e=>"minified"===e?12:40,GF=I.div`
    position: relative;
    display: flex;
    align-items: center;
`,ZF=I($l)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${ml.Neutral[8]};
    box-shadow: 0px 2px 8px rgba(104, 104, 104, 0.5);
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
`,QF=I(pe)`
    width: 1rem;
    height: 1rem;
    color: ${ml.Primary};
`,JF=I(ge)`
    font-size: 1rem;
    color: ${ml.Primary};
`,ez=I.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+qF(e)}px`};
`,tz=I.div`
    position: relative;
    white-space: nowrap;
    height: ${KF}rem;
`,nz=I.div`
    display: flex;
    white-space: nowrap;
`,rz=I.div`
    display: inline-block;
    width: ${({$variant:e})=>`${XF(e)}px`};
    position: relative;
    border-left: 1px solid ${ml.Neutral[2]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?KF:.625;break;case"minified":t=e.$isLongMarker?KF:0;break;default:t=0}return M`
            height: ${t}rem;
        `}}
`,iz=I(Nl.XSmall)`
    color: ${ml.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,oz=I.div`
    ${e=>"vertical"===e.$type?M`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:M`
                position: absolute;
                height: ${qF(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&M`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||ml.Neutral[5]} 0px,
                ${e.$bgColor2||ml.Neutral[5]} 10px,
                ${e.$bgColor} 10px,
                ${e.$bgColor} 20px
            );
        `}
`,az=I.div`
    position: absolute;
    top: ${KF}rem;
    height: ${({$variant:e})=>`${qF(e)}px`};
    z-index: 1;
    border-right: 1px solid ${ml.Neutral[2]};
`,sz=I(Nl.XSmall)`
    color: ${e=>e.$color||ml.Neutral[2](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,lz=({"data-testid":r,className:i,variant:s="default",startTime:l,endTime:c,slots:d,onSlotClick:h,onClick:f,styleAttributes:p})=>{const g=o(null),[m,b]=a(0),[v,y]=a(0),x=XF(s),w=2.5*x;u((()=>{const e=g.current;return e&&e.addEventListener("scroll",$),()=>{e&&e.removeEventListener("scroll",$)}}),[]);const $=()=>{g.current&&b(g.current.scrollLeft)},S=e=>{g.current&&g.current.scrollBy({left:"left"===e?-w:w,behavior:"smooth"})};ln({onResize:()=>{g.current&&y(g.current.clientWidth)},targetRef:g,refreshMode:"debounce",refreshRate:50});const k=e=>e<=x/2,O=e=>{if(r)return`${r}-${e}`},C=(e,t,n)=>{const r=0===e.minute();if("default"===n)return r;return r&&(t?e.hour()%2==0:e.hour()%2==1)};return t(GF,Object.assign({className:i},{children:[t(ez,Object.assign({"data-testid":r,ref:g,$variant:s},{children:[e(tz,Object.assign({"data-testid":O("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const t=[],n=ad(l,"HH:mm"),r=ad(c,"HH:mm"),i=n.hour()%2==0;for(let o=n;o.isBefore(r);o=o.add(30,"minute")){const n=C(o,i,s);t.push(e(rz,Object.assign({$isLongMarker:n,$variant:s},{children:n&&e(iz,Object.assign({weight:"semibold"},{children:UF.formatHourlyDisplay(o.format("HH:mm"))}))}),o.format("HH:mm")))}return t})()})),t(nz,Object.assign({"data-testid":O("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[p&&(()=>{const{backgroundColor:r,backgroundColor2:i,styleType:o="default"}=p,a=UF.calculateWidth(l,c,x),d=!!f&&"default"===s;return t(n,{children:[e(az,{$variant:s}),e(oz,{"data-testid":O("default-timeslot"),$width:a,$variant:s,$left:0,$styleType:o,$bgColor:r,$bgColor2:i,$clickable:d,onClick:d?f:void 0},"default-timeslot")]})})(),d.map((n=>{const{id:r,startTime:i,endTime:o,label:a,clickable:d=!0,styleAttributes:u}=n,{color:f,styleType:p="default",backgroundColor:g,backgroundColor2:m}=u,b=UF.calculateWidth(i,o,x),v=UF.calculateWidth(l,i,x),y=d&&"default"===s;return t("div",{children:[e(az,{$variant:s,style:{left:`${v}px`}}),e(oz,Object.assign({"data-testid":O(`${r}-timeslot`),$width:b,$left:v,$styleType:p,$variant:s,$bgColor:g,$bgColor2:m,$clickable:y,onClick:()=>y&&h(n)},{children:a&&"default"===s&&e(sz,Object.assign({$slotWidth:b,$color:f,weight:"semibold"},{children:k(b)?"...":a}))})),c!==o&&e(az,{$variant:s,style:{left:`${v+b}px`}})]},r)}))]}))]})),e(n,{children:m>0&&e(ZF,Object.assign({"data-testid":O("arrow-left"),$direction:"left",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{S("left")}},{children:e(JF,{})}))}),m+v<UF.calculateWidth(l,c,x)?e(ZF,Object.assign({"data-testid":O("arrow-right"),$direction:"right",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{S("right")}},{children:e(QF,{})})):e(n,{})]}))},cz=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.5rem;
    flex: 1;
`,dz=I(Nl.XSmall)`
    ${e=>e.$disabled&&M`
            color: ${ml.Neutral[4]};
        `}
`,uz=I.div`
    grid-column: 2 / -1;
    display: flex;
`,hz=I.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: 0.25rem;
`,fz=I(Ho.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,pz=I.div`
    display: flex;
    gap: 0.25rem;
    transition: ${Pl.Base};
    overflow: hidden;
`,gz=I.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: 0.25rem;
    width: 1.375rem;
    transition: ${Pl.Base};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,mz=I.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,bz=I.div`
    ${Al.getFontFamily("Body",700)}
    color: ${ml.Neutral[3]};
    font-size: 0.625rem !important;
    line-height: 0.75rem !important;
    text-align: center;
    :first-line {
        font-size: 0.875rem !important;
    }
`,vz=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.25rem;
`,yz=I.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: 0.5rem;
`,xz=I(cc.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`,wz=I(ae)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,$z=I(oz)`
    ${e=>{if("vertical"===e.$type)return M`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: 0.125rem;
            `}}

    ${e=>e.$halfFill?M`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${ml.Neutral[5]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||ml.Neutral[5]} 0px,\n                            ${e.$bgColor2||ml.Neutral[5]} 10px,\n                            ${e.$bgColor} 10px,\n                            ${e.$bgColor} 20px\n                        )`};
            `:M`
                background-color: ${e.$bgColor};
            `}
`;var Sz=ha;var kz=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var o=e[r],a=t(o);if(null!=a&&(void 0===s?a==a&&!Sz(a):n(a,s)))var s=a,l=o}return l};var Oz=kz,Cz=yk,Tz=function(e,t){return e<t};var Dz=Vo((function(e,t){return e&&e.length?Oz(e,Cz(t),Tz):void 0}));var jz=kz,_z=function(e,t){return e>t},Iz=yk;var Mz=Vo((function(e,t){return e&&e.length?jz(e,Iz(t),_z):void 0}));const Ez=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:o,minDate:s,maxDate:l,startTime:c,endTime:d,maxVisibleCellHeight:u,slots:h,interval:f=30,variant:p="flexible",enableSelection:g=!0,onSlotClick:b})=>{var v,y,x,w;const $="YYYY-MM-DD",[S,k]=a(!1),[O,C]=a(),T=m((()=>vd.generateDaysForCurrentWeek(n)),[n]),D=Object.values(null!=h?h:{}).flat(),j=null!==(y=null!=c?c:null===(v=Dz(D,"startTime"))||void 0===v?void 0:v.startTime)&&void 0!==y?y:"00:00",_=null!==(w=null!=d?d:null===(x=Mz(D,"endTime"))||void 0===x?void 0:x.endTime)&&void 0!==w?w:"24:00",I=Math.ceil(kd.getTimeDiffInMinutes(j,_)/f),{height:M,ref:E}=ln(),A=u?M<u||S?M:u:M,N=ko({height:A}),B=m((()=>{if(h){const e={};return Object.entries(h).forEach((([t,n])=>{const r=function(e){const t=Array(I).fill({});return e.forEach((e=>{const n=Math.max(0,kd.getTimeDiffInMinutes(j,e.startTime)/f),r=Math.min(I,kd.getTimeDiffInMinutes(j,e.endTime)/f),i=Math.ceil(r)-Math.floor(n);switch(p){case"fixed":t[Math.floor(n)]=Object.assign(Object.assign({},e),{cellLength:r-n});break;case"flexible":for(let o=0;o<i;o++){const a=kd.addMinutesToTime(j,Math.floor(n+o)*f),s=kd.addMinutesToTime(a,f);let l;eI(t[Math.floor(n+o)])?0===o&&n%1!=0?l="top":o===i-1&&r%1!=0&&(l="bottom"):l=void 0,t[Math.floor(n+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(n);e[t]=function(e){var t,n,r,i;let o=0;switch(p){case"fixed":for(e=e.reduce(((e,t)=>{const n=e.length>0?e[e.length-1]:e[0];return eI(t)&&eI(n)?e:[...e,t]}),[{}]);o<e.length;){if(eI(e[o])){const a=null!==(n=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==n?n:j,s=null!==(i=null===(r=e[o+1])||void 0===r?void 0:r.startTime)&&void 0!==i?i:_;if(a!==s){const t=kd.getTimeDiffInMinutes(a,s)/f;e[o]=Object.assign(Object.assign({},z(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)eI(e[o])?(e[o]=z(o),o++):o+=e[o].cellLength}return e.filter((e=>!eI(e)&&e.cellLength>0))}(r)})),e}return{}}),[h]),L=e=>{C(e)},R=()=>{C(void 0)},P=e=>{e.preventDefault(),k((e=>!e))},F=e=>{var t;const n=vd.isWithinRange(e,s?ad(s):void 0,l?ad(l):void 0),i=null!==(t=r&&r.includes(e.format($)))&&void 0!==t&&t;return!n||i};function z(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:"#E0E4E5"},cellLength:t}}return t(hz,{children:[e(uz,{children:T.map(((t,n)=>{const r=(e=>{const t=e.format($),n=F(e),r={},o=g&&!n;return n&&(r.disabled=!0),r.interactive=g?o:null,o&&O&&e.isSame(O,"day")&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0),[i].includes(t)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),r})(t);return e(Lu,Object.assign({date:t,calendarDate:ad(i),onSelect:()=>{((e,t)=>{!t&&g&&o(e)})(t,!r.interactive)},onHover:L,onHoverEnd:R},r),`day-${n}`)}))}),e(uz,{children:T.map(((t,n)=>e(cz,{children:e(dz,Object.assign({weight:"semibold",$disabled:F(t)},{children:ad(t).format("ddd")}))},`week-day-${n}`)))}),(()=>{let t=!1;const n=e=>{const n=ad(j,"HH:mm").add(4*e*f,"minutes"),r=n.format("h"),i=n.format("mm"),o=n.format("a");let a=`${r}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e(gz,Object.assign({$height:A},{children:Array(Math.ceil(I/4)).fill(void 0).map(((t,r)=>e(mz,{children:e(bz,{children:n(r)})},`time-${r}`)))}))})(),e(fz,Object.assign({style:N},{children:e(pz,Object.assign({ref:E},{children:T.map(((t,n)=>{var r;const i=t.format($),o=null!==(r=B[i])&&void 0!==r?r:Array("flexible"===p?I:1).fill(void 0).map(((e,t)=>z(t,"fixed"===p?I:void 0)));return e(vz,{children:o.map((t=>{const{id:n,clickable:r=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e($z,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:r,$height:"fixed"===p?12*a+4*(a-1):12,onClick:()=>r&&((e,t)=>{b&&b(e,t)})(i,t)},n)}))},`wrapper-${n}`)}))}),`week-cell-${n.format($)}`)})),(()=>{if(u&&E.current&&!(M&&M<u))return e(yz,{children:t(xz,Object.assign({"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:P},{children:[e(wz,{$isExpanded:S}),(S?"Hide":"Show")+" later times"]}))})})()]})},Az=I.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${yl.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,Nz="YYYY-MM-DD",Bz=t=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:s,minDate:l,maxDate:c,startTime:d,endTime:h,slots:f,interval:p,variant:g,maxVisibleCellHeight:m,showNavigationHeader:b=!0,enableSelection:v,onSlotClick:y,currentCalendarDate:x}=t,w=lt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[$,S]=a(s),k=o(),O=o(void 0);u((()=>{S(s)}),[s]);const C=e=>{const t=e.format(Nz);S(t),i&&i(t)},T=(e,t)=>{y&&y(e,t)},D=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(Nz),lastDayOfWeek:e.endOf("week").format(Nz)},month:e.month()+1,year:e.year()};r(t)}};return e(Az,Object.assign({},w,{children:e(mu,Object.assign({ref:k,type:"standalone",dynamicHeight:!0,initialCalendarDate:kd.toDayjs($||x).endOf("week").format(Nz),selectedStartDate:$,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>l&&ad(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>c&&ad(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{O.current&&O.current.isSame(e,"week")||D(e),O.current=e},showNavigationHeader:b,minDate:l,maxDate:c,getMonthHeaderLabel:e=>ad(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>ad(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>(t=>e(Ez,{calendarDate:t,disabledDates:n,selectedDate:$,minDate:l,maxDate:c,startTime:d,endTime:h,onSelect:C,slots:f,interval:p,variant:g,maxVisibleCellHeight:m,enableSelection:v,onSlotClick:T}))(t)}))}))},Lz=I(Su)`
    ${e=>{const{$variant:t}=e;if("default"===t)return M`
                    ${Al.getFontFamily("H5","semibold")}
                    color: ${ml.Neutral[3]};
                `}}
`,Rz=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`,Pz=I.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,Fz=I.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,zz=I.div`
    ${Al.getTextStyle("XSmall","semibold")}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${ml.Neutral[1]};
    span {
        display: block;
    }
`,Hz=I.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;ad.extend(dd);const Wz={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},Vz=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:o,minDate:a,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=m((()=>vd.generateDaysForCurrentWeek(n)),[n]),h="YYYY-MM-DD",f=e=>{const t=e.format(h),n=(e=>{const t=vd.isWithinRange(e,a?ad(a):void 0,s?ad(s):void 0),n=r&&r.includes(e.format(h));return!t||n})(e),o={},l={};return n&&(o.$disabledDisplay=!0,l.$disabledDisplay=!0),o.$interactive=c&&!n,[i].includes(t)&&(o.$selected=!0,l.$selected=!0),{styleCircleProps:o,styleLabelProps:l}};return t(Pz,{children:[e(yu,{children:u.map(((t,n)=>{const r="default",{styleCircleProps:i,styleLabelProps:a}=f(t);return e(xu,{children:e(ku,Object.assign({$variant:r,onClick:()=>((e,t)=>{!t&&c&&o(e)})(t,!i.$interactive)},i,{children:e(Lz,Object.assign({weight:a.$selected?"semibold":"regular",$variant:r},a,{children:t.format("D")}))}))},`day-${n}`)}))}),u.map(((t,n)=>e(Rz,{children:e(Nl.XSmall,Object.assign({weight:"semibold"},{children:ad(t).format("ddd")}))},`week-day-${n}`))),e(Fz,{children:u.map(((n,r)=>{const i=n.format(h),o=l&&(l[i]?l[i]:[Wz]);return e(Hz,{children:o&&o.map((n=>{const{id:r,startTime:o,endTime:a,clickable:s=!0,styleAttributes:l}=n,{color:c,styleType:u="default",backgroundColor:h,backgroundColor2:f}=l;return e(oz,Object.assign({$type:"vertical",$variant:"default",$styleType:u,$bgColor:h,$bgColor2:f,$clickable:s,onClick:()=>s&&((e,t)=>{d(e,t)})(i,n)},{children:t(zz,Object.assign({style:{color:c}},{children:[e("span",{children:vd.convertTo12HourFormat(o)}),a&&o&&e("span",{children:"-"}),e("span",{children:vd.convertTo12HourFormat(a)})]}))}),r)}))},`wrapper-${r}`)}))},`week-cell-${n.format(h)}`)]})},Yz=I.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${yl.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,Uz="YYYY-MM-DD",Kz=t=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:s,minDate:l,maxDate:c,slots:d,showNavigationHeader:h=!0,enableSelection:f,onSlotClick:p,currentCalendarDate:g}=t,m=lt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[b,v]=a(s),y=o(),x=o(void 0);u((()=>{v(s)}),[s]);const w=e=>{const t=e.format(Uz);v(t),i&&i(t)},$=(e,t)=>{p&&p(e,t)},S=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(Uz),lastDayOfWeek:e.endOf("week").format(Uz)},month:e.month()+1,year:e.year()};r(t)}};return e(Yz,Object.assign({},m,{children:e(mu,Object.assign({ref:y,type:"standalone",dynamicHeight:!0,initialCalendarDate:kd.toDayjs(b||g).endOf("week").format(Uz),selectedStartDate:b,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>l&&ad(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>c&&ad(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"week")||S(e),x.current=e},showNavigationHeader:h,minDate:l,maxDate:c,getMonthHeaderLabel:e=>ad(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>ad(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>e(Vz,{calendarDate:t,disabledDates:n,selectedDate:b,minDate:l,maxDate:c,onSelect:w,slots:d,enableSelection:f,onSlotClick:$})}))}))},Xz=I.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return M`
                    background-color: ${ml.Accent.Light[1]};
                `;case"upcoming-active":return M`
                    border: 4px solid ${ml.Accent.Light[1]};
                `;case"upcoming-inactive":return M`
                    border: 4px solid ${ml.Neutral[4]};
                `;case"completed":return M`
                    background-color: ${ml.Validation.Green.Icon};
                    svg {
                        color: ${ml.Neutral[8]};
                    }
                `;case"error":return M`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${ml.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `;case"disabled":return M`
                    background-color: ${ml.Neutral[4]};
                `}}}
`,qz=I.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return M`
                    background-color: ${ml.Accent.Light[1]};
                `;case"upcoming-inactive":case"disabled":return M`
                    background-color: ${ml.Neutral[4]};
                `;case"completed":return M`
                    background-color: ${ml.Validation.Green.Icon};
                `;case"error":return M`
                    margin-left: -0.15rem;
                    background-color: ${ml.Validation.Red.Icon};
                `}}}
`,Gz=I.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,Zz=I.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${yl.MaxWidth.tablet} {
        grid-column: span 8;
    }

    ${yl.MaxWidth.mobileL} {
        grid-column: span 4;
    }
`,Qz=I(Nl.H3)`
    margin-bottom: 1rem;

    ${yl.MaxWidth.tablet} {
        margin-bottom: 1.5rem;
    }
`,Jz=I(Nl.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,eH=I.div`
    display: flex;

    :last-of-type ${qz} {
        margin-bottom: 0;
    }
`,tH=I.div`
    margin-bottom: 2rem;
    width: 100%;
`,nH=I(Nl.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,rH=I(NR)`
    padding: 0.125rem 0.5rem;
`,iH=({items:r,className:i,title:o,startCol:a,colSpan:s,"data-base-indicator-testid":l,"data-testid":c="timeline"})=>{const d=t=>"string"==typeof t?e(Nl.Body,Object.assign({className:"timeline-item-content-text"},{children:t})):e(n,{children:t}),u=t=>"string"==typeof t?e(Jz,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):e(n,{children:t}),h=e=>e.slice(0,2).map(((e,t)=>O(rH,Object.assign({},e,{type:e.type,key:`status-pill-${t}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),f=t=>{switch(t){case"completed":return e(le,{});case"error":return e(se,{});default:return null}};return t(Zz,Object.assign({className:i,"data-testid":c,$startCol:a,$colSpan:s},{children:[e(Qz,Object.assign({id:"timeline-title"},{children:o})),r.map(((n,r)=>{const{title:i,content:o,statuses:a,variant:s}=n,c=l?`circleindicator${r+1}_div_${l}`:"circleindicator",p=s||(0===r?"current":"upcoming-active");return t(eH,{children:[t(Gz,{children:[e(Xz,Object.assign({"data-testid":c,$variant:p},{children:f(p)})),e(qz,{$variant:p})]}),t(tH,Object.assign({className:"timeline-item-content"},{children:[u(i),a&&e(nH,{children:h(a)}),d(o)]}))]},`timeline-item-${r}`)}))]}))},oH=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],aH=252,sH=E`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,lH=I(Hp)`
    color: ${ml.Neutral[3]};
    svg {
        ${e=>{if(e.$loading)return M`
                    animation: ${sH} 4s linear infinite;
                `}}
    }
`,cH=I.div`
    display: flex;
    padding-bottom: 1rem;
    justify-content: space-between;
`,dH=I.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
`,uH=I(Nl.H6)`
    color: ${ml.Neutral[3]};
`,hH=I(cp)`
    width: 400px;
`,fH=r=>{var{selectedDate:i,loading:o,tableContainerRef:a,totalRecords:s,onPreviousDayClick:l,onNextDayClick:c,onRefresh:d,onCalendarDateSelect:u}=r,h=lt(r,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const f=()=>{a.current&&(a.current.scrollTop=0)},p=()=>{d&&(f(),d())};return t(cH,{children:[e(hH,Object.assign({selectedDate:i,loading:o},h,{onRightArrowClick:e=>{f(),c(e)},onLeftArrowClick:e=>{f(),l(e)},onCalendarDateSelect:u})),void 0===s?e(n,{}):t(dH,{children:[t(uH,Object.assign({"data-testid":"timetable-records-results",weight:"semibold"},{children:[s," results found"]})),d&&e(lH,Object.assign({"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:o,onClick:p,$loading:o},{children:e(ce,{})}))]})]})},pH=I.div`
    display: flex;
    width: 100%;
`,gH=I.div`
    border-bottom: 1px solid ${ml.Neutral[5]};
    ${e=>{if(e.$isOnTheHour)return M`
                box-shadow: inset -0.5px 0px ${ml.Accent.Light[1]};
            `}}
`,mH=I.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,bH=I.div`
    width: 2px;
    height: 100%;
`,vH=I.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: 4px;
    box-sizing: border-box;
    padding: 4px;
    ${({$status:e,$bgColour:t,$isClickable:n})=>{switch(e){case"blocked":return M`
                    background: repeating-linear-gradient(
                        135deg,
                        #e0e4e5 0px 6px,
                        #ecefef 6px 12px
                    );
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;case"filled":return M`
                    background: ${t};
                    &:hover {
                        cursor: ${n?"pointer":"default"};
                    }
                `;case"disabled":return M`
                    background: ${ml.Neutral[6]};
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;default:return M`
                    &:hover {
                        background-color: ${n?ml.Accent.Light[5]:""};
                        cursor: ${n?"pointer":"default"};
                    }
                `}}}
`,yH=I(Nl.H6)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,xH=I(Nl.XSmall)`
    color: ${ml.Neutral[3]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,wH=i.memo((({id:n,startTime:r,endTime:i,title:o,subtitle:a,status:s,intervalWidth:l,rowBarColor:c,containerRef:d,customPopover:u,onClick:h})=>{const f=0===ad(i,"HH:mm").get("minutes"),p=kd.getTimeDiffInMinutes(r,i)/15*l-2,g=!!h||u&&"click"===u.trigger;return e((({wrapper:e,children:t})=>u?e(t):t),Object.assign({wrapper:t=>(t=>{const n={position:"bottom-start",rootNode:d,customOffset:u.offset,children:t,trigger:u.trigger,delay:u.delay,popoverContent:u.content};return e(vx,Object.assign({},n,{children:t}))})(t)},{children:e(gH,Object.assign({"data-testid":"block-container",$isOnTheHour:f},{children:t(mH,{children:[t(vH,Object.assign({$width:p,$status:s,$bgColour:c,$isClickable:g,onClick:e=>{h&&h({id:n,startTime:r,endTime:i,status:s,title:o,subtitle:a,customPopover:u},e)}},{children:[o&&e(yH,Object.assign({weight:"semibold"},{children:o})),a&&e(xH,Object.assign({weight:"bold"},{children:a}))]})),e(bH,{})]})}),"block-container-key")}))})),$H=t=>{var{id:n,timetableMinTime:r,timetableMaxTime:i,rowMinTime:o=r,rowMaxTime:a=i,rowCells:s,rowBarColor:l,intervalWidth:c,containerRef:d,outOfRangeCellPopover:u}=t,h=lt(t,["id","timetableMinTime","timetableMaxTime","rowMinTime","rowMaxTime","rowCells","rowBarColor","intervalWidth","containerRef","outOfRangeCellPopover"]);const f=h["data-testid"]||"timetable-row",p=m((()=>{const e=[];ad(r,"HH:mm").isBefore(ad(o,"HH:mm"))&&e.push({id:n,startTime:r,endTime:o,status:"blocked",customPopover:u});const t=[...s].sort(((e,t)=>{const n=ad(e.startTime,"HH:mm"),r=ad(t.startTime,"HH:mm");return n.isBefore(r)?-1:n.isAfter(r)?1:0}));return t.forEach(((t,r)=>{var i;const{endTime:o}=t;e.push(t);const l=ad((null===(i=s[r+1])||void 0===i?void 0:i.startTime)||a,"HH:mm");let c=ad(o,"HH:mm");for(;c.isBefore(l);)if(d=l,c.get("hour")!=d.get("hour")){const t=c.add(1,"hour").startOf("hour");e.push({id:n,startTime:c.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),c=t}else e.push({id:n,startTime:c.format("HH:mm").toString(),endTime:l.format("HH:mm").toString(),status:"disabled"}),c=l;var d})),ad(i,"HH:mm").isAfter(ad(a,"HH:mm"))&&e.push({id:n,startTime:a,endTime:i,status:"blocked",customPopover:u}),e}),[n,r,i,o,a,s,u]);return e(pH,Object.assign({"data-testid":f},h,{children:p.map(((t,n)=>e(wH,Object.assign({},t,{intervalWidth:c,rowBarColor:l,containerRef:d}),`${n}-row-cell-key`)))}))},SH=I.div``,kH=I.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${aH}px auto;
`,OH=I.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${aH}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return M`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,CH=I.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    width: ${aH}px;
    z-index: 2;
    border-bottom: 1px solid ${ml.Neutral[5]};
    ${e=>e.$isScrolledX||e.$isScrolledY?M`
                box-shadow: 0.125rem 0.125rem 0.5rem ${ml.Neutral[5]};
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.75rem":"0"}
                        ${e.$isScrolledY?"-0.75rem":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:M`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,TH=I.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: white;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,DH=I.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: white;
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: 1px solid ${ml.Neutral[5]};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return M`
                box-shadow: 0rem 0.125rem 0.5rem ${ml.Neutral[5]};
            `}};
`,jH=I.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: 0.25rem;
`,_H=I(Nl.H6)`
    color: ${ml.Neutral[3]};
`,IH=I.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,MH=I.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: white;
    width: ${aH}px;
    height: ${68}px;
    text-align: right;
    padding: 0 1rem 0 2rem;
    border-bottom: 1px solid ${ml.Neutral[5]};
    border-left: 1px solid ${ml.Accent.Light[1]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?M`
                box-shadow: 0.125rem 0.125rem 0.5rem ${ml.Neutral[5]};
            `:M`
                box-shadow: inset -0.5px 0px ${ml.Accent.Light[1]};
            `};
`,EH=I(Nl.H5)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${ml.Primary};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,AH=I(Nl.XSmall)`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${ml.Neutral[3]};
    ${e=>{if(!e.$show)return M`
                display: none;
            `}}
`,NH=I(Pc)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,BH=I(rf)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 5rem 0 5rem 0;
`,LH=I.div`
    display: flex;
    border-bottom: 1px solid ${ml.Neutral[5]};
`,RH=I.div`
    border-right: 0.5px solid ${ml.Accent.Light[1]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: 20px 12px 20px 12px;
`,PH=E`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,FH=I.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${ml.Neutral[6]} 8%,
        ${ml.Neutral[7]} 18%,
        ${ml.Neutral[6]} 33%
    );
    background-size: 800px 104px;
    animation: ${PH} 1.5s forwards infinite;
`,zH=I(vx)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,HH=r=>{var{date:i,emptyContentMessage:s,rowData:l,loading:c,minTime:d="00:00",maxTime:h="23:00",minDate:f,maxDate:p,totalRecords:g,showCurrentDateAsToday:m,showDateAsShortForm:b,onPage:v,onRefresh:y,onNextDayClick:x,onPreviousDayClick:w,onCalendarDateSelect:$}=r,S=lt(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const k=S["data-testid"]||"timetable",C=Lh.roundToNearestHour(d),T=Lh.roundToNearestHour(h,!0),D=Lh.generateHourlyIntervals(C,T),j=0===g||IO.isEmpty(l),_=j||l.length===g,I=o(null),M=o(null),[E,A]=a(!1),[N,B]=a(!1),[L,R]=a(0),[P,F]=a(!1);u((()=>{const e=IO.throttle((()=>{if(I.current&&(A(I.current.scrollLeft>0),B(I.current.scrollTop>0)),P)return;const{scrollTop:e,clientHeight:t,scrollHeight:n}=I.current;Math.ceil(e+t)>=n-1&&!_&&v&&!c&&(F(!0),v())}),100),t=I.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[_,P,c,v]),u((()=>{F(!1)}),[l]);ln({onResize:()=>{if(I.current){const e=Math.ceil(60*D.length/15),t=(I.current.clientWidth-aH)/e;R(t>21?t:21)}},targetRef:I,refreshMode:"debounce",refreshRate:50});const z=(()=>{let e=0;const t=oH.length;return()=>{const n=oH[e];return e=(e+1)%t,n}})(),H=({wrapper:e,children:t})=>e(t),W=()=>{if(!c&&P)return e(MH,Object.assign({$isScrolled:E},{children:e(FH,{})}))},V=()=>{if(!c&&P)return e(LH,Object.assign({"data-testid":"lazy-loader"},{children:D.map(((t,n)=>e(RH,Object.assign({$width:4*L},{children:e(FH,{})}),`lazy-load-cell-${n}`)))}))};return t(SH,j?Object.assign({},S,{"data-testid":k},{children:[e(fH,{selectedDate:i,loading:c||P,tableContainerRef:I,minDate:f,maxDate:p,totalRecords:g,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),e(kH,Object.assign({className:"empty-container"},{children:c?e(NH,{$isEmptyContent:j}):e(BH,{type:"no-item-found",description:s})}))]}):Object.assign({},S,{"data-testid":k},{children:[e(fH,{"data-id":"timetable-date-navigator",selectedDate:i,loading:c||P,tableContainerRef:I,minDate:f,maxDate:p,totalRecords:g,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),t(OH,Object.assign({"data-id":"timetable-container","data-testid":"timetable-container",ref:I,$loading:c,$allRecordsLoaded:_||!v},{children:[e(CH,{$isScrolledY:N,$isScrolledX:E}),e(TH,Object.assign({$numOfRows:l.length,$isScrolled:E,"data-testid":"row-header-column-id"},{children:t(n,{children:[l.map(((n,r)=>e(H,Object.assign({wrapper:e=>((e,t)=>{if(!e.rowHeaderPopover)return t;const n={position:"bottom-start",rootNode:I,customOffset:e.rowHeaderPopover.offset,children:t,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return O(zH,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),t)})(n,e)},{children:t(MH,Object.assign({$isScrolled:E},{children:[e(EH,Object.assign({$isClickable:!!n.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(n,e),weight:"semibold","data-testid":`${n.id}-row-header-title`},{children:n.name})),e(AH,Object.assign({weight:"bold",$show:!!n.subtitle,"data-testid":`${n.id}-row-header-subtitle`},{children:n.subtitle}))]}),`${n.id}-row-header`)}),r))),W()]})})),e(DH,Object.assign({$numOfColumns:D.length,$isScrolled:N},{children:D.map((t=>e(jH,Object.assign({"data-testid":`${t}-column`},{children:e(_H,Object.assign({weight:"semibold"},{children:t}))}),`${t}-column-key`)))})),c?e(NH,{$isEmptyContent:j}):t(IH,Object.assign({"data-testid":"content-container-id",ref:M,$numOfRows:l.length},{children:[l.map(((t,n)=>e($H,Object.assign({timetableMinTime:C,timetableMaxTime:T,rowBarColor:z(),intervalWidth:L,containerRef:M},t),`${n}-row-bar`))),V()]}))]}))]}))},WH=e=>{switch(e.$type){case"success":return ml.Validation.Green;case"warning":return ml.Validation.Orange;case"error":return ml.Validation.Red;case"info":return ml.Validation.Blue;default:return}},VH=I(Ho.div)`
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

    ${yl.MaxWidth.tablet} {
        left: 0;
    }

    ${e=>M`
            background: ${WH(e).Background};
            border: 1px solid ${WH(e).Border};
            color: ${WH(e).Text};
        `};
`,YH=I.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${yl.MaxWidth.mobileL} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,UH=I.div`
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
                color: ${WH(e).Icon};
            }
        `};
`,KH=I.div`
    display: flex;
    flex-direction: column;
`,XH=I(Nl.H4)`
    display: flex;

    ${e=>M`
            color: ${WH(e).Text};
        `}
`,qH=I.div`
    ${e=>M`
            p {
                color: ${WH(e).Text};
            }
        `}
`,GH=I(cc.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${yl.MaxWidth.mobileL} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,ZH=I($l)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>M`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${WH(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${yl.MaxWidth.mobileL} {
                align-self: center;
            }
        `};
`,QH=4e3,JH=n=>{var{type:r="success",title:o,label:s,autoDismiss:l,autoDismissTime:c=QH,onDismiss:d,fixed:h=!0,actionButton:f}=n,p=lt(n,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[g,m]=a(!1),b=Vc.useMediaQuery({maxWidth:bl.tablet});u((()=>{m(!0)}),[]),u((()=>{if(!l)return;const e=setTimeout((()=>{m(!1)}),c);return()=>clearTimeout(e)}),[l]);const v=ko({opacity:g?1:0,transform:g?b?"translateY(0%)":"translateX(0%)":b?"translateY(-1500%)":"translateX(150%)",config:{easing:kr.easeInOutQuart,duration:1e3},onRest:()=>{g||null==d||d()}});return t(VH,Object.assign({style:v,$type:r,$fixed:h},p,{children:[t(YH,{children:[t(UH,Object.assign({$type:r},{children:[(()=>{switch(r){case"success":return e(he,{});case"warning":return e(ue,{});case"error":return e(se,{});case"info":return e(de,{});default:return null}})(),t(KH,{children:[o&&(i.isValidElement(o)?o:e(XH,Object.assign({$type:r,weight:"semibold"},{children:o}))),s&&e(qH,Object.assign({$type:r},{children:i.isValidElement(s)?s:e(o?Nl.BodySmall:Nl.Body,{children:s})}))]})]})),f&&e(GH,Object.assign({styleType:"light",onClick:f.onClick},{children:f.label}))]}),e(ZH,Object.assign({$type:r,onClick:()=>{m(!1)}},{children:e(J,{})}))]}))},eW=I.div`
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

                ${yl.MaxWidth.mobileL} {
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

                ${yl.MaxWidth.mobileL} {
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

                ${yl.MaxWidth.mobileL} {
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

                ${yl.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?M`
            visibility: "visible";
            opacity: 1;
            transition: ${Pl.Base};
            z-index: 2;
        `:M`
            visibility: "hidden";
            opacity: 0;
            transition: ${Pl.Base};
            z-index: -1;
        `}
`,tW=I(Gu)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,nW=I.div`
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
                        border-color: ${ml.Neutral[8]} transparent
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
                        border-color: transparent ${ml.Neutral[8]}
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
                            ${ml.Neutral[8]};
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
                            ${ml.Neutral[8]} transparent;
                    }
                `}}}
`,rW=I.div`
    position: relative;
`,iW=n=>{var{visible:r,position:i="top",children:s}=n,l=lt(n,["visible","position","children"]);const c=l["data-testid"]||"tooltip",[d,h]=a(i),f=o(null);u((()=>(g(),window.addEventListener("resize",yh(p,300)),()=>{window.removeEventListener("resize",yh(p,300))})),[]);const p=()=>{g()},g=()=>{if(f.current){const e=f.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":h("right");break;case"right":h("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":h("left");break;case"left":h("top")}else h(i)}};return t(eW,Object.assign({position:d,"data-testid":c,visible:r,ref:f},l,{children:[e(tW,{children:"string"==typeof s?e(Nl.BodySmall,{children:s}):s}),e(nW,{position:d})]}))},oW=(n,r)=>i=>{const{tooltipVisible:o,position:a}=i,s=lt(i,["tooltipVisible","position"]);return t(rW,{children:[e(n,Object.assign({},s)),e(iW,Object.assign({visible:o,position:a},{children:r.content}))]})},aW=M`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${yl.MaxWidth.mobileL} {
        grid-column: 1 / -1;
    }
`,sW=I(Nx.Content)`
    background: ${({$background:e})=>e?ml.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,lW=I(Nl.H3)`
    margin-bottom: 1rem;
    ${aW}
`,cW=I(Nl.Body)`
    margin-bottom: 2rem;
    ${aW}
`,dW=I.div`
    ${aW}
`,uW=I.ul`
    ${aW}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${yl.MaxWidth.tablet} {
        column-gap: 1.5rem;
    }

    ${yl.MaxWidth.mobileL} {
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,hW=i.forwardRef(((t,n)=>{var{stretch:r}=t,i=lt(t,["stretch"]);return e(uW,Object.assign({ref:n,$stretch:r},i))})),fW=I.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return M`
                    grid-column: auto / span 4;
                `;case"full":return M`
                    grid-column: auto / span 8;
                `}}}

    ${yl.MaxWidth.tablet} {
        grid-column: auto / span 8;
    }

    ${yl.MaxWidth.mobileL} {
        grid-column: auto / span 4;
    }

    overflow-wrap: break-word;
`,pW=I.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${ml.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,gW=I.button`
    ${Al.getTextStyle("Body","regular")}
    color: ${ml.Neutral[1]};
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
`,mW=I.span`
    color: ${ml.Neutral[3]};
`,bW=I(nc)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${ml.Neutral[3]} transparent transparent transparent;
    }
`,vW=I(ze)`
    color: ${ml.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,yW=I.span`
    color: ${ml.Validation.Orange.Text};
`,xW=I.span`
    ${Al.getTextStyle("Body","semibold")}
    color: ${ml.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,wW=I(Sc)`
    margin-top: 0.5rem;
`,$W=({label:r,value:i,displayWidth:o="full",maskState:s,maskLoadingState:l,maskChar:c="•",maskRange:d,unmaskRange:h,maskRegex:f,disableMaskUnmask:p,alert:g,maskTransformer:m,onMask:b,onUnmask:v,onTryAgain:y})=>{const[x,w]=a(s);u((()=>{w(s)}),[s]);const $=()=>{switch("fail"===l&&y&&y(),x){case"masked":v&&v(),w("unmasked");break;case"unmasked":b&&b(),w("masked")}},S=()=>"string"!=typeof i?i:"masked"===x?Td.maskValue(i,{maskChar:c,maskRange:d,unmaskRange:h,maskRegex:f,maskTransformer:m}):i,k=()=>{switch(l){case"fail":return t(n,{children:[e(vW,{}),e(yW,{children:"Error"}),e(xW,{children:"Try again?"})]});case"loading":return t(n,{children:[e(bW,{}),e(mW,{children:"Retrieving..."})]});default:return t(n,{children:[S(),e(pW,{children:"masked"===x?e(Pe,{"data-testid":"masked-icon"}):e(Fe,{"data-testid":"unmasked-icon"})})]})}};return t(fW,Object.assign({$widthStyle:o},{children:[e(Dx,{children:r}),"string"!=typeof i?i:x?p?e(Nl.Body,{children:S()}):e(gW,Object.assign({"data-testid":"clickable-label",onClick:$,"aria-busy":"loading"===l,"aria-live":"polite",type:"button"},{children:k()})):e(Nl.Body,{children:i}),g&&e(wW,Object.assign({sizeType:"small"},g))]}))},SW=Object.assign((r=>{var{items:i,title:o,description:a,topSection:s,bottomSection:l,children:c,background:d=!0,stretch:u,onMask:h,onUnmask:f,onTryAgain:p}=r,g=lt(r,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{h&&h(e)},b=e=>()=>{f&&f(e)},v=e=>()=>{p&&p(e)},y=()=>{if(i&&i.length>0){const t=i.map(((t,n)=>e($W,Object.assign({},t,{onMask:m(t),onUnmask:b(t),onTryAgain:v(t)}),n)));return e(uW,Object.assign({$stretch:u},{children:t}))}return null};return e(sW,Object.assign({$background:d},g,{type:"grid"},{children:c||t(n,{children:[o&&e(lW,Object.assign({weight:"semibold",$stretch:u},{children:o})),a&&e(cW,Object.assign({$stretch:u},{children:a})),s&&e(dW,Object.assign({"data-id":"top-section",$stretch:u},{children:s})),y(),l&&e(dW,Object.assign({"data-id":"bottom-section",$stretch:u},{children:l}))]})}))}),{ItemSection:hW,Item:$W});export{KB as $,pc as A,Mc as B,ml as C,Sf as D,gg as E,Ig as F,oE as G,TB as H,DB as I,cw as J,Hp as K,Oc as L,_B as M,pw as N,mO as O,pI as P,bI as Q,vI as R,hg as S,FI as T,rw as U,zI as V,XI as W,eM as X,Nx as Y,YB as Z,ct as _,fg as a,MO as a0,GB as a1,QB as a2,yl as a3,xl as a4,Xp as a5,XL as a6,qL as a7,KL as a8,aR as a9,Ac as aA,Nc as aB,Bc as aC,Lc as aD,fl as aE,XM as aF,lz as aG,Bz as aH,Kz as aI,iH as aJ,GM as aK,HH as aL,JH as aM,DM as aN,iW as aO,oW as aP,Pl as aQ,SW as aR,rE as aS,cR as aa,hR as ab,bR as ac,_p as ad,IR as ae,EI as af,NR as ag,HR as ah,zR as ai,mx as aj,$x as ak,vx as al,BI as am,NP as an,PP as ao,KI as ap,sF as aq,TF as ar,HF as as,YF as at,Al as au,Dl as av,Nl as aw,rc as ax,fM as ay,Ec as az,Sc as b,Wo as c,jc as d,Pc as e,id as f,Yo as g,Hd as h,cc as i,Vd as j,Ku as k,Gu as l,eh as m,Hh as n,op as o,cp as p,xp as q,ac as r,Cp as s,Rp as t,rf as u,Vh as v,rm as w,XE as x,TA as y,XA as z};
//# sourceMappingURL=index.7e23eb31.js.map
