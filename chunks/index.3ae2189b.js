import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as a,useState as o,isValidElement as s,createRef as l,cloneElement as c,PureComponent as d,useEffect as u,useLayoutEffect as h,forwardRef as p,useCallback as f,useContext as g,useMemo as m,useImperativeHandle as b,lazy as v,Suspense as y,useReducer as x,memo as w,createContext as $,Fragment as S,Children as k,createElement as O}from"react";import C,{findDOMNode as D,unstable_batchedUpdates as j,createPortal as T}from"react-dom";import{ChevronUpIcon as _}from"@lifesg/react-icons/chevron-up";import M,{css as E,keyframes as N,useTheme as A}from"styled-components";import{ExternalIcon as I}from"@lifesg/react-icons/external";import{ArrowRightIcon as B}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as P}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as L}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as F}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as R}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as z,MinusSquareFillIcon as H,SquareTickFillIcon as W,SquareFillIcon as V,SquareIcon as Y,ClockIcon as U,ArrowUpIcon as K,ArrowDownIcon as X,ArrowRightIcon as q,PencilIcon as G,EraserIcon as Z,DownloadIcon as Q,CrossIcon as J,FilterIcon as ee,PlaceholderImageIcon as te,MagnifierPlusIcon as ne,MagnifierMinusIcon as re,ChevronLeftIcon as ie,ChevronRightIcon as ae,ChevronUpIcon as oe,ExclamationCircleFillIcon as se,TickIcon as le,RefreshIcon as ce,ICircleFillIcon as de,ExclamationTriangleFillIcon as ue,TickCircleFillIcon as he}from"@lifesg/react-icons";import{ChevronDownIcon as pe}from"@lifesg/react-icons/chevron-down";import{ChevronRightIcon as fe}from"@lifesg/react-icons/chevron-right";import{ChevronLeftIcon as ge}from"@lifesg/react-icons/chevron-left";import{useFloatingTree as me,useFloating as be,autoUpdate as ve,offset as ye,flip as xe,shift as we,limitShift as $e,size as Se,useTransitionStyles as ke,useClick as Oe,useDismiss as Ce,useInteractions as De,FloatingPortal as je,FloatingFocusManager as Te,FloatingTree as _e,useFloatingNodeId as Me,FloatingNode as Ee,useHover as Ne}from"@floating-ui/react";import{CrossIcon as Ae}from"@lifesg/react-icons/cross";import{StarIcon as Ie}from"@lifesg/react-icons/star";import{StarFillIcon as Be}from"@lifesg/react-icons/star-fill";import{CloudArrowUpFillIcon as Pe}from"@lifesg/react-icons/cloud-arrow-up-fill";import{MagnifierIcon as Le}from"@lifesg/react-icons/magnifier";import{EyeIcon as Fe}from"@lifesg/react-icons/eye";import{EyeSlashIcon as Re}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as ze}from"@lifesg/react-icons/exclamation-triangle";import{SquareIcon as He}from"@lifesg/react-icons/square";import{SquareTickFillIcon as We}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as Ve}from"@lifesg/react-icons/tick";import{CaretRightIcon as Ye}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as Ue}from"@lifesg/react-icons/minus-square-fill";import{CircleIcon as Ke}from"@lifesg/react-icons/circle";import{CircleDotIcon as Xe}from"@lifesg/react-icons/circle-dot";import{BinIcon as qe}from"@lifesg/react-icons/bin";import{PencilIcon as Ge}from"@lifesg/react-icons/pencil";import{DragHandleIcon as Ze}from"@lifesg/react-icons/drag-handle";import{MinusIcon as Qe}from"@lifesg/react-icons/minus";import{PlusIcon as Je}from"@lifesg/react-icons/plus";import{MenuIcon as et}from"@lifesg/react-icons/menu";import{Chevron2LeftIcon as tt}from"@lifesg/react-icons/chevron-2-left";import{Chevron2RightIcon as nt}from"@lifesg/react-icons/chevron-2-right";import{ChevronLineLeftIcon as rt}from"@lifesg/react-icons/chevron-line-left";import{ChevronLineRightIcon as it}from"@lifesg/react-icons/chevron-line-right";import{EllipsisHorizontalIcon as at}from"@lifesg/react-icons/ellipsis-horizontal";import{StarHalfIcon as ot}from"@lifesg/react-icons/star-half";const st=i.createContext(!1);function lt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function ct(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))}function dt(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function ut(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o}function ht(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var pt=function(e,t){return pt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},pt(e,t)};var ft=function(){return ft=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ft.apply(this,arguments)};var gt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var mt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},bt="object"==typeof gt&&gt&&gt.Object===Object&&gt,vt="object"==typeof self&&self&&self.Object===Object&&self,yt=bt||vt||Function("return this")(),xt=yt,wt=function(){return xt.Date.now()},$t=/\s/;var St=function(e){for(var t=e.length;t--&&$t.test(e.charAt(t)););return t},kt=/^\s+/;var Ot=function(e){return e?e.slice(0,St(e)+1).replace(kt,""):e},Ct=yt.Symbol,Dt=Ct,jt=Object.prototype,Tt=jt.hasOwnProperty,_t=jt.toString,Mt=Dt?Dt.toStringTag:void 0;var Et=function(e){var t=Tt.call(e,Mt),n=e[Mt];try{e[Mt]=void 0;var r=!0}catch(e){}var i=_t.call(e);return r&&(t?e[Mt]=n:delete e[Mt]),i},Nt=Object.prototype.toString;var At=Et,It=function(e){return Nt.call(e)},Bt=Ct?Ct.toStringTag:void 0;var Pt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Bt&&Bt in Object(e)?At(e):It(e)},Lt=function(e){return null!=e&&"object"==typeof e};var Ft=Ot,Rt=mt,zt=function(e){return"symbol"==typeof e||Lt(e)&&"[object Symbol]"==Pt(e)},Ht=/^[-+]0x[0-9a-f]+$/i,Wt=/^0b[01]+$/i,Vt=/^0o[0-7]+$/i,Yt=parseInt;var Ut=mt,Kt=wt,Xt=function(e){if("number"==typeof e)return e;if(zt(e))return NaN;if(Rt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Rt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ft(e);var n=Wt.test(e);return n||Vt.test(e)?Yt(e.slice(2),n?2:8):Ht.test(e)?NaN:+e},qt=Math.max,Gt=Math.min;var Zt=function(e,t,n){var r,i,a,o,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=a}function g(){var e=Kt();if(f(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return u?Gt(n,a-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?p(e):(r=i=void 0,o)}function b(){var e=Kt(),n=f(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?p(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),p(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Xt(t)||0,Ut(n)&&(d=!!n.leading,a=(u="maxWait"in n)?qt(Xt(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?o:m(Kt())},b},Qt=Zt,Jt=mt;var en=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Jt(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Qt(e,t,{leading:r,maxWait:t,trailing:i})},tn=function(e,t,n,r){switch(t){case"debounce":return Zt(e,n,r);case"throttle":return en(e,n,r);default:return e}},nn=function(e){return"function"==typeof e},rn=function(){return"undefined"==typeof window},an=function(e){return e instanceof Element||e instanceof HTMLDocument},on=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&nn(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!rn()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(rn())return null;if(t)return document.querySelector(t);if(r&&an(r))return r;if(n.targetRef&&an(n.targetRef.current))return n.targetRef.current;var i=D(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=on(s,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!rn()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return nn(t)?"renderProp":nn(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,rn()||(n.resizeHandler=tn(n.createResizeHandler,i,o,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}pt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){rn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return r.createElement(o,null)}}}(d);var sn=rn()?u:h;function ln(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,d=void 0===c||c,u=e.handleHeight,h=void 0===u||u,p=e.targetRef,f=e.observerOptions,g=e.onResize,m=a(n),b=a(null),v=null!=p?p:b,y=a(),x=o({width:void 0,height:void 0}),w=x[0],$=x[1];return sn((function(){if(!rn()){var e=on(g,$,d,h);y.current=tn((function(t){(d||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!rn()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,f),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,d,h,g,f,v.current]),ft({ref:v},w)}var cn=Object.defineProperty,dn={};((e,t)=>{for(var n in t)cn(e,n,{get:t[n],enumerable:!0})})(dn,{assign:()=>Wn,colors:()=>Rn,createStringInterpolator:()=>Bn,skipAnimation:()=>zn,to:()=>Pn,willAdvance:()=>Hn});var un=Dn(),hn=e=>Sn(e,un),pn=Dn();hn.write=e=>Sn(e,pn);var fn=Dn();hn.onStart=e=>Sn(e,fn);var gn=Dn();hn.onFrame=e=>Sn(e,gn);var mn=Dn();hn.onFinish=e=>Sn(e,mn);var bn=[];hn.setTimeout=(e,t)=>{const n=hn.now()+t,r=()=>{const e=bn.findIndex((e=>e.cancel==r));~e&&bn.splice(e,1),wn-=~e?1:0},i={time:n,handler:e,cancel:r};return bn.splice(vn(n),0,i),wn+=1,kn(),i};var vn=e=>~(~bn.findIndex((t=>t.time>e))||~bn.length);hn.cancel=e=>{fn.delete(e),gn.delete(e),mn.delete(e),un.delete(e),pn.delete(e)},hn.sync=e=>{$n=!0,hn.batchedUpdates(e),$n=!1},hn.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,hn.onStart(n)}return r.handler=e,r.cancel=()=>{fn.delete(n),t=null},r};var yn="undefined"!=typeof window?window.requestAnimationFrame:()=>{};hn.use=e=>yn=e,hn.now="undefined"!=typeof performance?()=>performance.now():Date.now,hn.batchedUpdates=e=>e(),hn.catch=console.error,hn.frameLoop="always",hn.advance=()=>{"demand"!==hn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Cn()};var xn=-1,wn=0,$n=!1;function Sn(e,t){$n?(t.delete(e),e(0)):(t.add(e),kn())}function kn(){xn<0&&(xn=0,"demand"!==hn.frameLoop&&yn(On))}function On(){~xn&&(yn(On),hn.batchedUpdates(Cn))}function Cn(){const e=xn;xn=hn.now();const t=vn(xn);t&&(jn(bn.splice(0,t),(e=>e.handler())),wn-=t),wn?(fn.flush(),un.flush(e?Math.min(64,xn-e):16.667),gn.flush(),pn.flush(),mn.flush()):xn=-1}function Dn(){let e=new Set,t=e;return{add(n){wn+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(wn-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,wn-=t.size,jn(t,(t=>t(n)&&e.add(t))),wn+=e.size,t=e)}}}function jn(e,t){e.forEach((e=>{try{t(e)}catch(e){hn.catch(e)}}))}function Tn(){}var _n={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Mn(e,t){if(_n.arr(e)){if(!_n.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var En=(e,t)=>e.forEach(t);function Nn(e,t,n){if(_n.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var An=e=>_n.und(e)?[]:_n.arr(e)?e:[e];function In(e,t){if(e.size){const n=Array.from(e);e.clear(),En(n,t)}}var Bn,Pn,Ln=(e,...t)=>In(e,(e=>e(...t))),Fn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Rn=null,zn=!1,Hn=Tn,Wn=e=>{e.to&&(Pn=e.to),e.now&&(hn.now=e.now),void 0!==e.colors&&(Rn=e.colors),null!=e.skipAnimation&&(zn=e.skipAnimation),e.createStringInterpolator&&(Bn=e.createStringInterpolator),e.requestAnimationFrame&&hn.use(e.requestAnimationFrame),e.batchedUpdates&&(hn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Hn=e.willAdvance),e.frameLoop&&(hn.frameLoop=e.frameLoop)},Vn=new Set,Yn=[],Un=[],Kn=0,Xn={get idle(){return!Vn.size&&!Yn.length},start(e){Kn>e.priority?(Vn.add(e),hn.onStart(qn)):(Gn(e),hn(Qn))},advance:Qn,sort(e){if(Kn)hn.onFrame((()=>Xn.sort(e)));else{const t=Yn.indexOf(e);~t&&(Yn.splice(t,1),Zn(e))}},clear(){Yn=[],Vn.clear()}};function qn(){Vn.forEach(Gn),Vn.clear(),hn(Qn)}function Gn(e){Yn.includes(e)||Zn(e)}function Zn(e){Yn.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Yn,(t=>t.priority>e.priority)),0,e)}function Qn(e){const t=Un;for(let n=0;n<Yn.length;n++){const r=Yn[n];Kn=r.priority,r.idle||(Hn(r),r.advance(e),r.idle||t.push(r))}return Kn=0,(Un=Yn).length=0,(Yn=t).length>0}var Jn="[-+]?\\d*\\.?\\d+",er=Jn+"%";function tr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var nr=new RegExp("rgb"+tr(Jn,Jn,Jn)),rr=new RegExp("rgba"+tr(Jn,Jn,Jn,Jn)),ir=new RegExp("hsl"+tr(Jn,er,er)),ar=new RegExp("hsla"+tr(Jn,er,er,Jn)),or=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,sr=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,lr=/^#([0-9a-fA-F]{6})$/,cr=/^#([0-9a-fA-F]{8})$/;function dr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ur(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=dr(i,r,e+1/3),o=dr(i,r,e),s=dr(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function hr(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function pr(e){return(parseFloat(e)%360+360)%360/360}function fr(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function gr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function mr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=lr.exec(e))?parseInt(t[1]+"ff",16)>>>0:Rn&&void 0!==Rn[e]?Rn[e]:(t=nr.exec(e))?(hr(t[1])<<24|hr(t[2])<<16|hr(t[3])<<8|255)>>>0:(t=rr.exec(e))?(hr(t[1])<<24|hr(t[2])<<16|hr(t[3])<<8|fr(t[4]))>>>0:(t=or.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=cr.exec(e))?parseInt(t[1],16)>>>0:(t=sr.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ir.exec(e))?(255|ur(pr(t[1]),gr(t[2]),gr(t[3])))>>>0:(t=ar.exec(e))?(ur(pr(t[1]),gr(t[2]),gr(t[3]))|fr(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var br=(e,t,n)=>{if(_n.fun(e))return e;if(_n.arr(e))return br({range:e,output:t,extrapolate:n});if(_n.str(e.output[0]))return Bn(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=a(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};var vr=1.70158,yr=1.525*vr,xr=vr+1,wr=2*Math.PI/3,$r=2*Math.PI/4.5,Sr=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},kr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>xr*e*e*e-vr*e*e,easeOutBack:e=>1+xr*Math.pow(e-1,3)+vr*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-yr)/2:(Math.pow(2*e-2,2)*((yr+1)*(2*e-2)+yr)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*wr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*wr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*$r)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*$r)/2+1,easeInBounce:e=>1-Sr(1-e),easeOutBounce:Sr,easeInOutBounce:e=>e<.5?(1-Sr(1-2*e))/2:(1+Sr(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},Or=Symbol.for("FluidValue.get"),Cr=Symbol.for("FluidValue.observers"),Dr=e=>Boolean(e&&e[Or]),jr=e=>e&&e[Or]?e[Or]():e,Tr=e=>e[Cr]||null;function _r(e,t){const n=e[Cr];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Mr=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Er(this,e)}},Er=(e,t)=>Br(e,Or,t);function Nr(e,t){if(e[Or]){let n=e[Cr];n||Br(e,Cr,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ar(e,t){const n=e[Cr];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Cr]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Ir,Br=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Pr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Lr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Fr=new RegExp(`(${Pr.source})(%|[a-z]+)`,"i"),Rr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,zr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Hr=e=>{const[t,n]=Wr(e);if(!t||Fn())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&zr.test(n)?Hr(n):n||e},Wr=e=>{const t=zr.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Vr=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Yr=e=>{Ir||(Ir=Rn?new RegExp(`(${Object.keys(Rn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>jr(e).replace(zr,Hr).replace(Lr,mr).replace(Ir,mr))),n=t.map((e=>e.match(Pr).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=r.map((t=>br({...e,output:t})));return e=>{const n=!Fr.test(t[0])&&t.find((e=>Fr.test(e)))?.replace(Pr,"");let r=0;return t[0].replace(Pr,(()=>`${i[r++](e)}${n||""}`)).replace(Rr,Vr)}},Ur="react-spring: ",Kr=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ur}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Xr=Kr(console.warn);var qr=Kr(console.warn);function Gr(e){return _n.str(e)&&("#"==e[0]||/\d/.test(e)||!Fn()&&zr.test(e)||e in(Rn||{}))}var Zr=Fn()?u:h,Qr=()=>{const e=a(!1);return Zr((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Jr(){const e=o()[1],t=Qr();return()=>{t.current&&e(Math.random())}}var ei=e=>u(e,ti),ti=[];function ni(e){const t=a();return u((()=>{t.current=e})),t.current}var ri=Symbol.for("Animated:node"),ii=e=>e&&e[ri],ai=(e,t)=>{return n=e,r=ri,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},oi=e=>e&&e[ri]&&e[ri].getPayload(),si=class{constructor(){ai(this,this)}getPayload(){return this.payload||[]}},li=class extends si{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,_n.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new li(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return _n.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,_n.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ci=class extends li{constructor(e){super(0),this._string=null,this._toString=br({output:[e,e]})}static create(e){return new ci(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(_n.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=br({output:[this.getValue(),e]})),this._value=0,super.reset()}},di={dependencies:null},ui=class extends si{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Nn(this.source,((n,r)=>{var i;(i=n)&&i[ri]===i?t[r]=n.getValue(e):Dr(n)?t[r]=jr(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&En(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Nn(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){di.dependencies&&Dr(e)&&di.dependencies.add(e);const t=oi(e);t&&En(t,(e=>this.add(e)))}},hi=class extends ui{constructor(e){super(e)}static create(e){return new hi(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(pi)),!0)}};function pi(e){return(Gr(e)?ci:li).create(e)}function fi(e){const t=ii(e);return t?t.constructor:_n.arr(e)?hi:Gr(e)?ci:li}var gi=(e,t)=>{const n=!_n.fun(e)||e.prototype&&e.prototype.isReactComponent;return p(((i,o)=>{const s=a(null),l=n&&f((e=>{s.current=function(e,t){e&&(_n.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[c,d]=function(e,t){const n=new Set;di.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ui(e),di.dependencies=null,[e,n]}(i,t),h=Jr(),p=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},g=new mi(p,d),m=a();Zr((()=>(m.current=g,En(d,(e=>Nr(e,g))),()=>{m.current&&(En(m.current.deps,(e=>Ar(e,m.current))),hn.cancel(m.current.update))}))),u(p,[]),ei((()=>()=>{const e=m.current;En(e.deps,(t=>Ar(t,e)))}));const b=t.getComponentProps(c.getValue());return r.createElement(e,{...b,ref:l})}))},mi=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&hn.write(this.update)}};var bi=Symbol.for("AnimatedComponent"),vi=e=>_n.str(e)?e:e&&_n.str(e.displayName)?e.displayName:_n.fun(e)&&e.name||null;function yi(e,...t){return _n.fun(e)?e(...t):e}var xi=(e,t)=>!0===e||!!(t&&e&&(_n.fun(e)?e(t):An(e).includes(t))),wi=(e,t)=>_n.obj(e)?t&&e[t]:e,$i=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Si=e=>e,ki=(e,t=Si)=>{let n=Oi;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);_n.und(n)||(r[i]=n)}return r},Oi=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ci={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Di(e){const t=function(e){const t={};let n=0;if(Nn(e,((e,r)=>{Ci[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Nn(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function ji(e){return e=jr(e),_n.arr(e)?e.map(ji):Gr(e)?dn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ti(e){return _n.fun(e)||_n.arr(e)&&_n.obj(e[0])}var _i={tension:170,friction:26,mass:1,damping:1,easing:kr.linear,clamp:!1},Mi=class{constructor(){this.velocity=0,Object.assign(this,_i)}};function Ei(e,t){if(_n.und(t.decay)){const n=!_n.und(t.tension)||!_n.und(t.friction);!n&&_n.und(t.frequency)&&_n.und(t.damping)&&_n.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Ni=[],Ai=class{constructor(){this.changed=!1,this.values=Ni,this.toValues=null,this.fromValues=Ni,this.config=new Mi,this.immediate=!1}};function Ii(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{let l,c,d=xi(n.cancel??r?.cancel,t);if(d)p();else{_n.und(n.pause)||(i.paused=xi(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||xi(e,t)),l=yi(n.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-hn.now()}function h(){l>0&&!dn.skipAnimation?(i.delayed=!0,c=hn.setTimeout(p,l),i.pauseQueue.add(u),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{a.start({...n,callId:e,cancel:d},o)}catch(e){s(e)}}}))}var Bi=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Fi(e.get()):t.every((e=>e.noop))?Pi(e.get()):Li(e.get(),t.every((e=>e.finished))),Pi=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Li=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Fi=e=>({value:e,cancelled:!0,finished:!1});function Ri(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=ki(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),p=e=>{const t=i<=(n.cancelId||0)&&Fi(r)||i!==n.asyncId&&Li(r,!1);if(t)throw e.result=t,u(e),e},f=(e,t)=>{const a=new Hi,o=new Wi;return(async()=>{if(dn.skipAnimation)throw zi(n),o.result=Li(r,!1),u(o),o;p(a);const s=_n.obj(e)?{...e}:{...t,to:e};s.parentId=i,Nn(c,((e,t)=>{_n.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(dn.skipAnimation)return zi(n),Li(r,!1);try{let t;t=_n.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(d),h]),g=Li(r.get(),!0,!1)}catch(e){if(e instanceof Hi)g=e.result;else{if(!(e instanceof Wi))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return _n.fun(o)&&hn.batchedUpdates((()=>{o(g,r,r.item)})),g})():l}function zi(e,t){In(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Hi=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Wi=class extends Error{constructor(){super("SkipAnimationSignal")}},Vi=e=>e instanceof Ui,Yi=1,Ui=class extends Mr{constructor(){super(...arguments),this.id=Yi++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ii(this);return e&&e.getValue()}to(...e){return dn.to(this,e)}interpolate(...e){return Xr(`${Ur}The "interpolate" function is deprecated in v9 (use "to" instead)`),dn.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){_r(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Xn.sort(this),_r(this,{type:"priority",parent:this,priority:e})}},Ki=Symbol.for("SpringPhase"),Xi=e=>(1&e[Ki])>0,qi=e=>(2&e[Ki])>0,Gi=e=>(4&e[Ki])>0,Zi=(e,t)=>t?e[Ki]|=3:e[Ki]&=-3,Qi=(e,t)=>t?e[Ki]|=4:e[Ki]&=-5,Ji=class extends Ui{constructor(e,t){if(super(),this.animation=new Ai,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!_n.und(e)||!_n.und(t)){const n=_n.obj(e)?{...e}:{...t,from:e};_n.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(qi(this)||this._state.asyncTo)||Gi(this)}get goal(){return jr(this.animation.to)}get velocity(){const e=ii(this);return e instanceof li?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Xi(this)}get isAnimating(){return qi(this)}get isPaused(){return Gi(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:a}=r,o=oi(r.to);!o&&Dr(r.to)&&(i=An(jr(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ci?1:o?o[l].lastPosition:i[l];let d=r.immediate,u=c;if(!d){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=_n.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(_n.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,r=Math.exp(-(1-e)*t);u=n+i/(1-e)*(1-r),d=Math.abs(s.lastPosition-u)<=h,o=i*r}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,r=a.clamp?0:a.bounce,l=!_n.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(f=Math.abs(o)>t,f||(d=Math.abs(c-u)<=h,!d));++e){l&&(g=u==c||u>c==p,g&&(o=-o*r,u=c));o+=(1e-6*-a.tension*(u-c)+.001*-a.friction*o)/a.mass*m,u+=o*m}}else{let r=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(a.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),u=n+a.easing(r)*(c-n),o=(u-s.lastPosition)/e,d=1==r}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,a.round)&&(n=!0)}));const s=ii(this),l=s.getValue();if(t){const e=jr(r.to);l===e&&!n||a.decay?n&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return hn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(qi(this)){const{to:e,config:t}=this.animation;hn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return _n.und(e)?(n=this.queue||[],this.queue=[]):n=[_n.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Bi(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),zi(this._state,e&&this._lastCallId),hn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=_n.obj(n)?n[t]:n,(null==n||Ti(n))&&(n=void 0),r=_n.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Xi(this)||(e.reverse&&([n,r]=[r,n]),r=jr(r),_n.und(r)?ii(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ki(e,((e,t)=>/^on/.test(t)?wi(e,n):e))),oa(this,e,"onProps"),sa(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Ii(++this._lastCallId,{key:n,props:e,defaultProps:r,state:a,actions:{pause:()=>{Gi(this)||(Qi(this,!0),Ln(a.pauseQueue),sa(this,"onPause",Li(this,ea(this,this.animation.to)),this))},resume:()=>{Gi(this)&&(Qi(this,!1),qi(this)&&this._resume(),Ln(a.resumeQueue),sa(this,"onResume",Li(this,ea(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=ta(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Fi(this));const r=!_n.und(e.to),i=!_n.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Fi(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||r||t.default&&!_n.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!Mn(u,c);h&&(s.from=u),u=jr(u);const p=!Mn(d,l);p&&this._focus(d);const f=Ti(t.to),{config:g}=s,{decay:m,velocity:b}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Ei(n={...n},t),t={...n,...t}),Ei(e,t),Object.assign(e,t);for(const t in _i)null==e[t]&&(e[t]=_i[t]);let{frequency:r,damping:i}=e;const{mass:a}=e;_n.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*a,e.friction=4*Math.PI*i*a/r)}(g,yi(t.config,a),t.config!==o.config?yi(o.config,a):void 0);let v=ii(this);if(!v||_n.und(d))return n(Li(this,!0));const y=_n.und(t.reset)?i&&!t.default:!_n.und(u)&&xi(t.reset,a),x=y?u:this.get(),w=ji(d),$=_n.num(w)||_n.arr(w)||Gr(w),S=!f&&(!$||xi(o.immediate||t.immediate,a));if(p){const e=fi(d);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const k=v.constructor;let O=Dr(d),C=!1;if(!O){const e=y||!Xi(this)&&h;(p||e)&&(C=Mn(ji(x),w),O=!C),(Mn(s.immediate,S)||S)&&Mn(g.decay,m)&&Mn(g.velocity,b)||(O=!0)}if(C&&qi(this)&&(s.changed&&!y?O=!0:O||this._stop(l)),!f&&((O||Dr(l))&&(s.values=v.getPayload(),s.toValues=Dr(d)?null:k==ci?[1]:An(w)),s.immediate!=S&&(s.immediate=S,S||y||this._set(l)),O)){const{onRest:e}=s;En(aa,(e=>oa(this,t,e)));const r=Li(this,ea(this,l));Ln(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&hn.batchedUpdates((()=>{s.changed=!y,e?.(r,this),y?yi(o.onRest,r):s.onStart?.(r,this)}))}y&&this._set(x),f?n(Ri(t.to,t,this._state,this)):O?this._start():qi(this)&&!p?this._pendingCalls.add(n):n(Pi(x))}_focus(e){const t=this.animation;e!==t.to&&(Tr(this)&&this._detach(),t.to=e,Tr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Dr(t)&&(Nr(t,this),Vi(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Dr(e)&&Ar(e,this)}_set(e,t=!0){const n=jr(e);if(!_n.und(n)){const e=ii(this);if(!e||!Mn(n,e.getValue())){const r=fi(n);e&&e.constructor==r?e.setValue(n):ai(this,r.create(n)),e&&hn.batchedUpdates((()=>{this._onChange(n,t)}))}}return ii(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,sa(this,"onStart",Li(this,ea(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),yi(this.animation.onChange,e,this)),yi(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ii(this).reset(jr(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),qi(this)||(Zi(this,!0),Gi(this)||this._resume())}_resume(){dn.skipAnimation?this.finish():Xn.start(this)}_stop(e,t){if(qi(this)){Zi(this,!1);const n=this.animation;En(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),_r(this,{type:"idle",parent:this});const r=t?Fi(this.get()):Li(this.get(),ea(this,e??n.to));Ln(this._pendingCalls,r),n.changed&&(n.changed=!1,sa(this,"onRest",r,this))}}};function ea(e,t){const n=ji(t);return Mn(ji(e.get()),n)}function ta(e,t=e.loop,n=e.to){const r=yi(t);if(r){const i=!0!==r&&Di(r),a=(i||e).reverse,o=!i||i.reset;return na({...e,loop:t,default:!1,pause:void 0,to:!a||Ti(n)?n:void 0,from:o?e.from:void 0,reset:o,...i})}}function na(e){const{to:t,from:n}=e=Di(e),r=new Set;return _n.obj(t)&&ia(t,r),_n.obj(n)&&ia(n,r),e.keys=r.size?Array.from(r):null,e}function ra(e){const t=na(e);return _n.und(t.default)&&(t.default=ki(t)),t}function ia(e,t){Nn(e,((e,n)=>null!=e&&t.add(n)))}var aa=["onStart","onRest","onChange","onPause","onResume"];function oa(e,t,n){e.animation[n]=t[n]!==$i(t,n)?wi(t[n],e.key):void 0}function sa(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var la=["onStart","onChange","onRest"],ca=1,da=class{constructor(e,t){this.id=ca++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];_n.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(na(e)),this}start(e){let{queue:t}=this;return e?t=An(e).map(na):this.queue=[],this._flush?this._flush(this,t):(ba(this,t),ua(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;En(An(t),(t=>n[t].stop(!!e)))}else zi(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(_n.und(e))this.start({pause:!0});else{const t=this.springs;En(An(e),(e=>t[e].pause()))}return this}resume(e){if(_n.und(e))this.start({pause:!1});else{const t=this.springs;En(An(e),(e=>t[e].resume()))}return this}each(e){Nn(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,In(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&In(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,In(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}hn.onFrame(this._onFrame)}};function ua(e,t){return Promise.all(t.map((t=>ha(e,t)))).then((t=>Bi(e,t)))}async function ha(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=_n.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const d=_n.arr(i)||_n.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):En(la,(n=>{const r=t[n];if(_n.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Ln(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===$i(t,"cancel");(d||p&&u.asyncId)&&h.push(Ii(++e._lastAsyncId,{props:t,state:u,actions:{pause:Tn,resume:Tn,start(t,n){p?(zi(u,e._lastAsyncId),n(Fi(e))):(t.onRest=s,n(Ri(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const f=Bi(e,await Promise.all(h));if(o&&f.finished&&(!n||!f.noop)){const n=ta(t,o,i);if(n)return ba(e,[n]),ha(e,n,!0)}return l&&hn.batchedUpdates((()=>l(f,e,e.item))),f}function pa(e,t){const n={...e.springs};return t&&En(An(t),(e=>{_n.und(e.keys)&&(e=na(e)),_n.obj(e.to)||(e={...e,to:void 0}),ma(n,e,(e=>ga(e)))})),fa(e,n),n}function fa(e,t){Nn(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Nr(t,e))}))}function ga(e,t){const n=new Ji;return n.key=e,t&&Nr(n,t),n}function ma(e,t,n){t.keys&&En(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ba(e,t){En(t,(t=>{ma(e.springs,t,(t=>ga(t,e)))}))}var va,ya,xa=({children:e,...t})=>{const n=g(wa),i=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=function(e,t){const[n]=o((()=>({inputs:t,result:e()}))),r=a(),i=r.current;let s=i;if(s){const n=Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs));n||(s={inputs:t,result:e()})}else s=n;return u((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=wa;return r.createElement(l,{value:t},e)},wa=(va=xa,ya={},Object.assign(va,r.createContext(ya)),va.Provider._context=va,va.Consumer._context=va,va);xa.Provider=wa.Provider,xa.Consumer=wa.Consumer;var $a=()=>{const e=[],t=function(t){qr(`${Ur}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return En(e,((e,i)=>{if(_n.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return En(e,(e=>e.pause(...arguments))),this},t.resume=function(){return En(e,(e=>e.resume(...arguments))),this},t.set=function(t){En(e,((e,n)=>{const r=_n.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return En(e,((e,r)=>{if(_n.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return En(e,(e=>e.stop(...arguments))),this},t.update=function(t){return En(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return _n.fun(e)?e(n,t):e};return t._getProps=n,t};function Sa(e,t){const n=_n.fun(e),[[r],i]=function(e,t,n){const r=_n.fun(t)&&t;r&&!n&&(n=[]);const i=m((()=>r||3==arguments.length?$a():void 0),[]),o=a(0),s=Jr(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const n=pa(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?ua(e,t):new Promise((r=>{fa(e,n),l.queue.push((()=>{r(ua(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),d=[],u=ni(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new da(null,l.flush)),n=r?r(i,e):t[i];n&&(d[i]=ra(n))}}m((()=>{En(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(u,e)}),[e]),m((()=>{h(0,Math.min(u,e))}),n);const p=c.current.map(((e,t)=>pa(e,d[t]))),f=g(xa),b=ni(f),v=f!==b&&function(e){for(const t in e)return!0;return!1}(f);Zr((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],En(e,(e=>e()))),En(c.current,((e,t)=>{i?.add(e),v&&e.start({default:f});const n=d[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ei((()=>()=>{En(l.ctrls,(e=>e.stop(!0)))}));const y=p.map((e=>({...e})));return i?[y,i]:y}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var ka=class extends Ui{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=br(...t);const n=this._get(),r=fi(n);ai(this,r.create(n))}advance(e){const t=this._get();Mn(t,this.get())||(ii(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ca(this._active)&&Da(this)}_get(){const e=_n.arr(this.source)?this.source.map(jr):An(jr(this.source));return this.calc(...e)}_start(){this.idle&&!Ca(this._active)&&(this.idle=!1,En(oi(this),(e=>{e.done=!1})),dn.skipAnimation?(hn.batchedUpdates((()=>this.advance())),Da(this)):Xn.start(this))}_attach(){let e=1;En(An(this.source),(t=>{Dr(t)&&Nr(t,this),Vi(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){En(An(this.source),(e=>{Dr(e)&&Ar(e,this)})),this._active.clear(),Da(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=An(this.source).reduce(((e,t)=>Math.max(e,(Vi(t)?t.priority:0)+1)),0))}};function Oa(e){return!1!==e.idle}function Ca(e){return!e.size||Array.from(e).every(Oa)}function Da(e){e.idle||(e.idle=!0,En(oi(e),(e=>{e.done=!0})),_r(e,{type:"idle",parent:e}))}dn.assign({createStringInterpolator:Yr,to:(e,t)=>new ka(e,t)});var ja=/^--/;function Ta(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||ja.test(e)||Ma.hasOwnProperty(e)&&Ma[e]?(""+t).trim():t+"px"}var _a={};var Ma={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ea=["Webkit","Ms","Moz","O"];Ma=Object.keys(Ma).reduce(((e,t)=>(Ea.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Ma);var Na=/^(matrix|translate|scale|rotate|skew)/,Aa=/^(translate)/,Ia=/^(rotate|skew)/,Ba=(e,t)=>_n.num(e)&&0!==e?e+t:e,Pa=(e,t)=>_n.arr(e)?e.every((e=>Pa(e,t))):_n.num(e)?e===t:parseFloat(e)===t,La=class extends ui{constructor({x:e,y:t,z:n,...r}){const i=[],a=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>Ba(e,"px"))).join(",")})`,Pa(e,0)]))),Nn(r,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(Na.test(t)){if(delete r[t],_n.und(e))return;const n=Aa.test(t)?"px":Ia.test(t)?"deg":"";i.push(An(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Ba(i,n)})`,Pa(i,0)]:e=>[`${t}(${e.map((e=>Ba(e,n))).join(",")})`,Pa(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Fa(i,a)),super(r)}},Fa=class extends Mr{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return En(this.inputs,((n,r)=>{const i=jr(n[0]),[a,o]=this.transforms[r](_n.arr(i)?i:n.map(jr));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&En(this.inputs,(e=>En(e,(e=>Dr(e)&&Nr(e,this)))))}observerRemoved(e){0==e&&En(this.inputs,(e=>En(e,(e=>Dr(e)&&Ar(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),_r(this,e)}};dn.assign({batchedUpdates:j,createStringInterpolator:Yr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Ra=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new ui(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=vi(e)||"Anonymous";return(e=_n.str(e)?a[e]||(a[e]=gi(e,i)):e[bi]||(e[bi]=gi(e,i))).displayName=`Animated(${t})`,e};return Nn(e,((t,n)=>{_n.arr(e)&&(n=vi(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:_a[t]||(_a[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=Ta(t,r[t]);ja.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new La(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),za=Ra.animated;var Ha="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Wa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Va(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var Ya=Array.isArray,Ua="object"==typeof Ha&&Ha&&Ha.Object===Object&&Ha,Ka=Ua,Xa="object"==typeof self&&self&&self.Object===Object&&self,qa=Ka||Xa||Function("return this")(),Ga=qa.Symbol,Za=Ga,Qa=Object.prototype,Ja=Qa.hasOwnProperty,eo=Qa.toString,to=Za?Za.toStringTag:void 0;var no=function(e){var t=Ja.call(e,to),n=e[to];try{e[to]=void 0;var r=!0}catch(e){}var i=eo.call(e);return r&&(t?e[to]=n:delete e[to]),i},ro=Object.prototype.toString;var io=no,ao=function(e){return ro.call(e)},oo=Ga?Ga.toStringTag:void 0;var so=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":oo&&oo in Object(e)?io(e):ao(e)};var lo=function(e){return null!=e&&"object"==typeof e},co=so,uo=lo;var ho=function(e){return"symbol"==typeof e||uo(e)&&"[object Symbol]"==co(e)},po=Ya,fo=ho,go=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mo=/^\w*$/;var bo=function(e,t){if(po(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!fo(e))||(mo.test(e)||!go.test(e)||null!=t&&e in Object(t))};var vo=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},yo=so,xo=vo;var wo,$o=function(e){if(!xo(e))return!1;var t=yo(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},So=qa["__core-js_shared__"],ko=(wo=/[^.]+$/.exec(So&&So.keys&&So.keys.IE_PROTO||""))?"Symbol(src)_1."+wo:"";var Oo=function(e){return!!ko&&ko in e},Co=Function.prototype.toString;var Do=function(e){if(null!=e){try{return Co.call(e)}catch(e){}try{return e+""}catch(e){}}return""},jo=$o,To=Oo,_o=vo,Mo=Do,Eo=/^\[object .+?Constructor\]$/,No=Function.prototype,Ao=Object.prototype,Io=No.toString,Bo=Ao.hasOwnProperty,Po=RegExp("^"+Io.call(Bo).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Lo=function(e){return!(!_o(e)||To(e))&&(jo(e)?Po:Eo).test(Mo(e))},Fo=function(e,t){return null==e?void 0:e[t]};var Ro=function(e,t){var n=Fo(e,t);return Lo(n)?n:void 0},zo=Ro(Object,"create"),Ho=zo;var Wo=function(){this.__data__=Ho?Ho(null):{},this.size=0};var Vo=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yo=zo,Uo=Object.prototype.hasOwnProperty;var Ko=function(e){var t=this.__data__;if(Yo){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Uo.call(t,e)?t[e]:void 0},Xo=zo,qo=Object.prototype.hasOwnProperty;var Go=zo;var Zo=Wo,Qo=Vo,Jo=Ko,es=function(e){var t=this.__data__;return Xo?void 0!==t[e]:qo.call(t,e)},ts=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Go&&void 0===t?"__lodash_hash_undefined__":t,this};function ns(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ns.prototype.clear=Zo,ns.prototype.delete=Qo,ns.prototype.get=Jo,ns.prototype.has=es,ns.prototype.set=ts;var rs=ns;var is=function(){this.__data__=[],this.size=0};var as=function(e,t){return e===t||e!=e&&t!=t},os=as;var ss=function(e,t){for(var n=e.length;n--;)if(os(e[n][0],t))return n;return-1},ls=ss,cs=Array.prototype.splice;var ds=ss;var us=ss;var hs=ss;var ps=is,fs=function(e){var t=this.__data__,n=ls(t,e);return!(n<0)&&(n==t.length-1?t.pop():cs.call(t,n,1),--this.size,!0)},gs=function(e){var t=this.__data__,n=ds(t,e);return n<0?void 0:t[n][1]},ms=function(e){return us(this.__data__,e)>-1},bs=function(e,t){var n=this.__data__,r=hs(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function vs(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vs.prototype.clear=ps,vs.prototype.delete=fs,vs.prototype.get=gs,vs.prototype.has=ms,vs.prototype.set=bs;var ys=vs,xs=Ro(qa,"Map"),ws=rs,$s=ys,Ss=xs;var ks=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Os=function(e,t){var n=e.__data__;return ks(t)?n["string"==typeof t?"string":"hash"]:n.map},Cs=Os;var Ds=Os;var js=Os;var Ts=Os;var _s=function(e,t){var n=Ts(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Ms=function(){this.size=0,this.__data__={hash:new ws,map:new(Ss||$s),string:new ws}},Es=function(e){var t=Cs(this,e).delete(e);return this.size-=t?1:0,t},Ns=function(e){return Ds(this,e).get(e)},As=function(e){return js(this,e).has(e)},Is=_s;function Bs(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Bs.prototype.clear=Ms,Bs.prototype.delete=Es,Bs.prototype.get=Ns,Bs.prototype.has=As,Bs.prototype.set=Is;var Ps=Bs,Ls=Ps;function Fs(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Fs.Cache||Ls),n}Fs.Cache=Ls;var Rs=Fs;var zs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hs=/\\(\\)?/g,Ws=function(e){var t=Rs(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(zs,(function(e,n,r,i){t.push(r?i.replace(Hs,"$1"):n||e)})),t}));var Vs=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ys=Ya,Us=ho,Ks=Ga?Ga.prototype:void 0,Xs=Ks?Ks.toString:void 0;var qs=function e(t){if("string"==typeof t)return t;if(Ys(t))return Vs(t,e)+"";if(Us(t))return Xs?Xs.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Gs=qs;var Zs=function(e){return null==e?"":Gs(e)},Qs=Ya,Js=bo,el=Ws,tl=Zs;var nl=function(e,t){return Qs(e)?e:Js(e,t)?[e]:el(tl(e))},rl=ho;var il=function(e){if("string"==typeof e||rl(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},al=nl,ol=il;var sl=function(e,t){for(var n=0,r=(t=al(t,e)).length;null!=e&&n<r;)e=e[ol(t[n++])];return n&&n==r?e:void 0},ll=sl;var cl=function(e,t,n){var r=null==e?void 0:ll(e,t);return void 0===r?n:r},dl=Wa(cl);const ul=(e,t,n)=>t?dl(n,t)||dl(e,t):n||e,hl=(e,t)=>{const n=t||e.defaultValue;return dl(e.collections,n)};var pl;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(pl||(pl={}));const fl={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},gl=e=>t=>{const n=t.theme,r=hl(fl,n[pl.colorScheme]);return n.options&&n.options.color?ul(r,e,n.options.color):ul(r,e)},ml={Brand:{1:gl("Brand.1"),2:gl("Brand.2"),3:gl("Brand.3"),4:gl("Brand.4"),5:gl("Brand.5"),6:gl("Brand.6")},Primary:gl("Primary"),PrimaryDark:gl("PrimaryDark"),Secondary:gl("Secondary"),Accent:{Light:{1:gl("Accent.Light.1"),2:gl("Accent.Light.2"),3:gl("Accent.Light.3"),4:gl("Accent.Light.4"),5:gl("Accent.Light.5"),6:gl("Accent.Light.6")},Dark:{1:gl("Accent.Dark.1"),2:gl("Accent.Dark.2"),3:gl("Accent.Dark.3")}},Neutral:{1:gl("Neutral.1"),2:gl("Neutral.2"),3:gl("Neutral.3"),4:gl("Neutral.4"),5:gl("Neutral.5"),6:gl("Neutral.6"),7:gl("Neutral.7"),8:gl("Neutral.8")},Validation:{Green:{Text:gl("Validation.Green.Text"),Icon:gl("Validation.Green.Icon"),Border:gl("Validation.Green.Border"),Background:gl("Validation.Green.Background")},Orange:{Text:gl("Validation.Orange.Text"),Icon:gl("Validation.Orange.Icon"),Border:gl("Validation.Orange.Border"),Background:gl("Validation.Orange.Background"),Badge:gl("Validation.Orange.Badge")},Red:{Text:gl("Validation.Red.Text"),Icon:gl("Validation.Red.Icon"),Border:gl("Validation.Red.Border"),Background:gl("Validation.Red.Background")},Blue:{Text:gl("Validation.Blue.Text"),Icon:gl("Validation.Blue.Icon"),Border:gl("Validation.Blue.Border"),Background:gl("Validation.Blue.Background")}},Shadow:{Accent:gl("Shadow.Accent"),Red:gl("Shadow.Red"),Elevation:gl("Shadow.Elevation")}},bl={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},vl=e=>Object.keys(bl).reduce(((t,n)=>{const r=bl[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),yl={MaxWidth:vl("max-width"),MinWidth:vl("min-width")},xl=bl,wl=M.button`
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
                background-color: ${ml.Neutral[7]};
            `}
    }
`,$l=i.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=t,s=lt(t,["children","focusHighlight","focusOutline","type"]);return e(wl,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),Sl={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},kl={D1:{fontFamily:Sl.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Sl.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Sl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sl.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Sl.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Sl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Sl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Sl.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Sl.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Sl.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Sl.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Sl.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Sl.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ol={D1:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sl.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Sl.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Sl.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Sl.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Sl.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Cl={collections:{base:kl,oneservice:{D1:{fontFamily:Sl.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Sl.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Sl.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Sl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Sl.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Sl.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Sl.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Sl.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Sl.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Sl.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Sl.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Sl.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Sl.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Sl.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Ol},defaultValue:"base"},Dl=e=>t=>{const n=t.theme,r=hl(Cl,n[pl.textStyleScheme]);return n.options&&n.options.textStyle?ul(r,e,n.options.textStyle):ul(r,e)},jl={D1:{fontFamily:Dl("D1.fontFamily"),fontSize:Dl("D1.fontSize"),fontWeight:Dl("D1.fontWeight"),lineHeight:Dl("D1.lineHeight"),letterSpacing:Dl("D1.letterSpacing")},D2:{fontFamily:Dl("D2.fontFamily"),fontSize:Dl("D2.fontSize"),fontWeight:Dl("D2.fontWeight"),lineHeight:Dl("D2.lineHeight"),letterSpacing:Dl("D2.letterSpacing")},D3:{fontFamily:Dl("D3.fontFamily"),fontSize:Dl("D3.fontSize"),fontWeight:Dl("D3.fontWeight"),lineHeight:Dl("D3.lineHeight"),letterSpacing:Dl("D3.letterSpacing")},D4:{fontFamily:Dl("D4.fontFamily"),fontSize:Dl("D4.fontSize"),fontWeight:Dl("D4.fontWeight"),lineHeight:Dl("D4.lineHeight"),letterSpacing:Dl("D4.letterSpacing")},DBody:{fontFamily:Dl("DBody.fontFamily"),fontSize:Dl("DBody.fontSize"),fontWeight:Dl("DBody.fontWeight"),lineHeight:Dl("DBody.lineHeight"),letterSpacing:Dl("DBody.letterSpacing")},H1:{fontFamily:Dl("H1.fontFamily"),fontSize:Dl("H1.fontSize"),fontWeight:Dl("H1.fontWeight"),lineHeight:Dl("H1.lineHeight"),letterSpacing:Dl("H1.letterSpacing")},H2:{fontFamily:Dl("H2.fontFamily"),fontSize:Dl("H2.fontSize"),fontWeight:Dl("H2.fontWeight"),lineHeight:Dl("H2.lineHeight"),letterSpacing:Dl("H2.letterSpacing")},H3:{fontFamily:Dl("H3.fontFamily"),fontSize:Dl("H3.fontSize"),fontWeight:Dl("H3.fontWeight"),lineHeight:Dl("H3.lineHeight"),letterSpacing:Dl("H3.letterSpacing")},H4:{fontFamily:Dl("H4.fontFamily"),fontSize:Dl("H4.fontSize"),fontWeight:Dl("H4.fontWeight"),lineHeight:Dl("H4.lineHeight"),letterSpacing:Dl("H4.letterSpacing")},H5:{fontFamily:Dl("H5.fontFamily"),fontSize:Dl("H5.fontSize"),fontWeight:Dl("H5.fontWeight"),lineHeight:Dl("H5.lineHeight"),letterSpacing:Dl("H5.letterSpacing")},H6:{fontFamily:Dl("H6.fontFamily"),fontSize:Dl("H6.fontSize"),fontWeight:Dl("H6.fontWeight"),lineHeight:Dl("H6.lineHeight"),letterSpacing:Dl("H6.letterSpacing")},Body:{fontFamily:Dl("Body.fontFamily"),fontSize:Dl("Body.fontSize"),fontWeight:Dl("Body.fontWeight"),lineHeight:Dl("Body.lineHeight"),letterSpacing:Dl("Body.letterSpacing")},BodySmall:{fontFamily:Dl("BodySmall.fontFamily"),fontSize:Dl("BodySmall.fontSize"),fontWeight:Dl("BodySmall.fontWeight"),lineHeight:Dl("BodySmall.lineHeight"),letterSpacing:Dl("BodySmall.letterSpacing")},XSmall:{fontFamily:Dl("XSmall.fontFamily"),fontSize:Dl("XSmall.fontSize"),fontWeight:Dl("XSmall.fontWeight"),lineHeight:Dl("XSmall.lineHeight"),letterSpacing:Dl("XSmall.letterSpacing")}},Tl=[Sl.OpenSans,Sl.PlusJakartaSans],_l=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Ml=(e,t)=>n=>{var r;const i=jl[e].fontFamily(n),a=jl[e].fontWeight(n),o=Tl.find((e=>Object.values(e).includes(i)));return o?E`
                font-family: ${_l(o,t)||_l(o,a)||i};
                font-weight: normal !important;
            `:E`
            font-family: ${i};
            font-weight: ${null!==(r=El(t)||a)&&void 0!==r?r:"normal"};
        `},El=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Nl=e=>{if(e>0)return E`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Al={getFontFamily:Ml,getTextStyle:(e,t,n=!1)=>r=>{const i=jl[e],a=i.fontSize(r);return E`
            ${Ml(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${E`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,t=!1,n=void 0)=>t?E`
            display: block;
            ${Nl(n)}
        `:e?E`
            display: inline;
        `:E`
            display: block;
            ${Nl(n)}
        `};var Il;!function(e){e.D1=M.h1`
        ${e=>E`
                ${Al.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=M.h1`
        ${e=>E`
                ${Al.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=M.h1`
        ${e=>E`
                ${Al.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=M.h1`
        ${e=>E`
                ${Al.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=M.h1`
        ${e=>E`
                ${Al.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=M.h1`
        ${e=>E`
                ${Al.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=M.h2`
        ${e=>E`
                ${Al.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=M.h3`
        ${e=>E`
                ${Al.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=M.h4`
        ${e=>E`
                ${Al.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=M.h5`
        ${e=>E`
                ${Al.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=M.h6`
        ${e=>E`
                ${Al.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=M.p`
        ${e=>E`
                ${Al.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=M.p`
        ${e=>E`
                ${Al.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=M.span`
        ${e=>E`
                ${Al.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${ml.Neutral[1]};
                ${Al.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ll(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ll(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Il||(Il={}));const Bl=M.a`
    ${e=>E`
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
`,Pl=M(I)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ll=n=>{var{external:r=!1,children:i}=n,a=lt(n,["external","children"]);return t(Bl,Object.assign({},a,{children:[i,r&&e(Pl,{})]}))},Fl={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},Rl=M.div`
    background-color: ${ml.Neutral[8]} !important;
    border-top: 1px solid ${ml.Neutral[6]};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${yl.MaxWidth.mobileL} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,zl=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Hl=e=>E`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: ${Fl.Base};
`,Wl=M(Il.H3)`
    ${e=>Hl(e.$isCollapsed)}
`,Vl=M(Il.H4)`
    ${e=>Hl(e.$isCollapsed)}
`,Yl=M($l)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto -1rem auto 0;
`,Ul=M(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${ml.Primary};
`,Kl=M(za.div)`
    overflow: hidden;
`,Xl=M.div`
    display: inline-block;
    padding-right: 4rem;

    ${yl.MaxWidth.tablet} {
        padding-right: 0;
    }
`;const ql=p((function(n,r){var{title:i,children:s,expanded:l,type:c="default",collapsible:d=!0}=n,h=lt(n,["title","children","expanded","type","collapsible"]);const p=a(),f=g(st),[m,v]=o(!d||(null!=l?l:f)),[y,x]=o(!1),w=h["data-testid"]||"accordion-item",$=ln(),S=$.ref;b(r,(()=>Object.assign(p.current,{expand(){v(!0)},collapse(){v(!1)},isExpanded:()=>m})),[m]),u((()=>{y&&v(!d||f)}),[f]),u((()=>{y&&v(l)}),[l]),u((()=>{x(!0)}),[]);const k={height:m?$.height:0},O=Sa(k);return t(Rl,Object.assign({"data-testid":w,className:h.className,$isCollapsed:m,ref:p},{children:[t(zl,Object.assign({$isCollapsed:d,onClick:d?e=>{e.preventDefault(),v((e=>!e))}:void 0},{children:["string"!=typeof i?i:e("small"===c?Vl:Wl,Object.assign({"data-testid":`${w}-title`,$isCollapsed:m},{children:i})),d&&e(Yl,Object.assign({"data-testid":`${w}-expand-collapse-button`,$isCollapsed:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand"},{children:e(Ul,{})}))]})),e(Kl,Object.assign({style:y?O:k,$isCollapsed:m,"data-testid":`${w}-expandable-container`},{children:e(Xl,Object.assign({ref:S,id:"content-container"},{children:s}))}))]}))})),Gl=M.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Zl=N`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ql=M.div`
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
`,Jl=M(Ql)`
    animation-delay: -0.45s;
`,ec=M(Ql)`
    animation-delay: -0.3s;
`,tc=M(Ql)`
    animation-delay: -0.15s;
`,nc=({color:n,className:r,size:i=18})=>t(Gl,Object.assign({className:r,$size:i,$color:n},{children:[e(Ql,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),e(Jl,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),e(ec,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),e(tc,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}));var rc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(rc||(rc={}));const ic={collections:{base:{InputBoxShadow:E`
        inset 0 0 4px 0px ${ml.Shadow.Accent}
    `,InputErrorBoxShadow:E`
        inset 0 0 4px 0px ${ml.Shadow.Red}
    `,ElevationBoxShadow:E`
      0px 2px 8px ${ml.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:E`
        inset 0 0 3px 0px ${ml.Shadow.Accent}
    `,InputErrorBoxShadow:E`
        inset 0 0 3px 0px ${ml.Shadow.Red}
    `,ElevationBoxShadow:E`
      0px 2px 8px ${ml.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},ac=e=>t=>{var n;const r=t.theme,i=hl(ic,r[pl.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?ul(i,e,r.options.designToken):ul(i,e)},oc={InputBoxShadow:ac("InputBoxShadow"),InputErrorBoxShadow:ac("InputErrorBoxShadow"),ElevationBoxShadow:ac("ElevationBoxShadow"),Table:{Header:ac("Table.Header"),Cell:{Primary:ac("Table.Cell.Primary"),Secondary:ac("Table.Cell.Secondary"),Selected:ac("Table.Cell.Selected"),Hover:ac("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:ac("Button.Danger.BackgroundColor"),Hover:ac("Button.Danger.Hover"),Primary:ac("Button.Danger.Primary"),Border:ac("Button.Danger.Border")}}},sc=M.button`
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
                    background-color: ${ml.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?oc.Button.Danger.Border:ml.Primary};

                    color: ${e.$buttonIsDanger?oc.Button.Danger.Primary:ml.Primary};
                `;case"light":return E`
                    background-color: ${ml.Neutral[8]};
                    border: 1px solid ${ml.Neutral[5]};

                    color: ${e.$buttonIsDanger?oc.Button.Danger.Primary:ml.Primary};
                `;case"disabled":return E`
                    background-color: ${ml.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ml.Neutral[3]};
                `;case"link":return E`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?oc.Button.Danger.Primary:ml.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?oc.Button.Danger.Hover:ml.Secondary};
                    }
                `;default:return E`
                    background-color: ${e.$buttonIsDanger?oc.Button.Danger.BackgroundColor:ml.Primary};
                    border: 1px solid transparent;

                    ${yl.MaxWidth.mobileL} {
                        width: 100%;
                    }

                    color: ${ml.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?E`
                    height: 2.5rem;
                    ${Al.getTextStyle("H5","semibold")}

                    ${yl.MaxWidth.mobileS} {
                        height: auto;
                    }
                `:E`
                    height: 3rem;
                    ${Al.getTextStyle("H4","semibold")}

                    ${yl.MaxWidth.mobileS} {
                        height: auto;
                    }
                `}
`,lc=M(nc)`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?oc.Button.Danger.Primary:ml.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ml.Neutral[3](e);break;default:t=ml.Neutral[8](e)}return E`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,cc={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=lt(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(sc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&e(lc,Object.assign({},d)),e("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=lt(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(sc,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&e(lc,Object.assign({},d,{size:16})),e("span",{children:i})]}))}))},dc=M.div`
    width: 100%;
    border-bottom: 1px solid ${ml.Neutral[6]};
`,uc=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${yl.MaxWidth.mobileL} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return E`
                ${yl.MaxWidth.mobileL} {
                    display: none;
                }
            `}}
`,hc=M(Il.H2)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${yl.MaxWidth.mobileL} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return E`
                ${yl.MaxWidth.mobileL} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,pc=M(cc.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,fc=Object.assign((({children:n,title:r,enableExpandAll:i=!0,initialDisplay:a="expand-all",showTitleInMobile:s=!1,className:l})=>{const[c,d]=o("expand-all"===a),u=e=>{e.preventDefault(),d((e=>!e))};return e(st.Provider,Object.assign({value:c},{children:t(dc,Object.assign({className:l},{children:[r||i?t(uc,Object.assign({$showTitleInMobile:s,$hasExpandAll:i},{children:[r&&e(hc,Object.assign({$showInMobile:s,"data-testid":"accordion-title"},{children:r})),i&&e(pc,Object.assign({"data-testid":"accordion-expand-collapse-button",onClick:u,styleType:"link",type:"button"},{children:c?"Hide all":"Show all"}))]})):null,n]}))}))}),{Item:ql}),gc=e=>{const{textSize:t}=e||{};return E`
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
    `},mc=M.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=ml.Validation.Red.Background(e),n=ml.Validation.Red.Border(e);break;case"success":t=ml.Validation.Green.Background(e),n=ml.Validation.Green.Border(e);break;case"warning":default:t=ml.Validation.Orange.Background(e),n=ml.Validation.Orange.Border(e);break;case"info":t=ml.Validation.Blue.Background(e),n=ml.Validation.Blue.Border(e);break;case"description":t=ml.Neutral[7](e),n=ml.Neutral[4](e)}return E`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${ml.Neutral[1]};
    ${e=>"small"===e.$sizeType?gc({textSize:"H6"}):gc({textSize:"BodySmall"})}
`,bc=M.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&E`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=ml.Validation.Red.Icon(e);break;case"success":t=ml.Validation.Green.Icon(e);break;case"warning":default:t=ml.Validation.Orange.Icon(e);break;case"info":t=ml.Validation.Blue.Icon(e);break;case"description":t=ml.Neutral[4](e)}return E`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,vc=M(Il.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?E`
                ${Al.getTextStyle("H6","semibold")}
                margin-top: 0.25rem;
            `:E`
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
`,yc=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,xc=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,wc=M.button`
    ${e=>"small"===e.$sizeType?E`
                ${Al.getTextStyle("H6","semibold")}
            `:E`
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
`,$c=M(z)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Sc=n=>{var{type:r,className:i,children:a,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:d=!1,customIcon:h,maxCollapsedHeight:p}=n,f=lt(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[g,m]=o(!1),[b,v]=o(!1),{height:y,ref:x}=ln();u((()=>{w()}),[p,y]);const w=()=>{m(!p),v($())},$=()=>!!p&&y>p;return t(mc,Object.assign({className:i,$type:r,$sizeType:c,"data-testid":f["data-testid"]},{children:[d&&e(bc,Object.assign({$sizeType:c,$type:r},{children:(()=>{if(r&&h)return h;switch(r){case"success":return e(R,{});case"warning":return e(L,{});case"error":return e(P,{});case"info":case"description":return e(F,{});default:return null}})()})),t(yc,{children:[t(xc,Object.assign({$maxCollapsedHeight:$()?p:void 0,$showMore:g,$hasActionLink:!!s},{children:[e("div",Object.assign({ref:x},{children:a})),s&&t(vc,Object.assign({"data-testid":"action-link",$type:r,$sizeType:c},s,{children:[s.children,l||e(B,{})]}))]})),b&&t(wc,Object.assign({$sizeType:c,$type:r,type:"button",onClick:()=>m(!g)},{children:["Show ",g?"less":"more",e($c,{$expanded:g})]}))]})]}))},kc=v((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.ffd38dc3.js")).LottieSpinner}})))),Oc=t=>e(Dc,Object.assign({},t,{children:e(y,Object.assign({fallback:e(Cc,{})},{children:e(kc,{})}))})),Cc=()=>e("div",{style:{height:"200px",width:"200px"}}),Dc=M.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`,jc=v((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.5fdb6471.js")).LottieLoadingDots}})))),Tc=t=>e(Mc,Object.assign({},t,{children:e(y,Object.assign({fallback:e(_c,{})},{children:e(jc,{})}))})),_c=()=>e("div",{style:{height:"16px",width:"64px"}}),Mc=M.div`
    margin: 0 auto;
`,Ec={[pl.colorScheme]:"base",[pl.textStyleScheme]:"base",[pl.designTokenScheme]:"base",[pl.resourceScheme]:"base"},Nc={[pl.colorScheme]:"bookingsg",[pl.textStyleScheme]:"base",[pl.designTokenScheme]:"base",[pl.resourceScheme]:"bookingsg"},Ac={[pl.colorScheme]:"rbs",[pl.textStyleScheme]:"base",[pl.designTokenScheme]:"rbs",[pl.resourceScheme]:"rbs"},Ic={[pl.colorScheme]:"mylegacy",[pl.textStyleScheme]:"base",[pl.designTokenScheme]:"base",[pl.resourceScheme]:"mylegacy"},Bc={[pl.colorScheme]:"ccube",[pl.textStyleScheme]:"base",[pl.designTokenScheme]:"base",[pl.resourceScheme]:"ccube"},Pc={[pl.colorScheme]:"oneservice",[pl.textStyleScheme]:"oneservice",[pl.designTokenScheme]:"base",[pl.resourceScheme]:"base"},Lc=v((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.051bd124.js")).LottieLoadingDotsSpinner}})))),Fc=t=>{var{color:n}=t,r=lt(t,["color"]);const i=A(),a=n||ml.Primary({theme:i||Ec});return e(zc,Object.assign({},r,{children:e(y,Object.assign({fallback:e(Rc,{})},{children:e(Lc,{color:a})}))}))},Rc=()=>e("div",{style:{height:"200px",width:"200px"}}),zc=M.div`
    margin: 0 auto;
`;var Hc,Wc={exports:{}};Hc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},o=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(o(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,n,null,i)}catch(e){d=e}if(!d||d instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in a)){a[d.message]=!0;var h=l?l():"";r("Failed "+n+" type: "+d.message+(null!=h?h:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){a={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),a=n(/*! object-assign */"./node_modules/object-assign/index.js"),o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(c),arrayOf:function(e){return g((function(t,n,r,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new f("Invalid "+i+" `"+a+"` of type `"+y(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,a+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:g((function(t,n,r,i,a){var o=t[n];return e(o)?null:new f("Invalid "+i+" `"+a+"` of type `"+y(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:g((function(e,t,n,r,a){var o=e[t];return i.isValidElementType(o)?null:new f("Invalid "+r+" `"+a+"` of type `"+y(o)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||u;return new f("Invalid "+i+" `"+a+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:g((function(e,t,n,r,i){return v(e[t])?null:new f("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,n,r,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=y(l);if("object"!==c)return new f("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,r,i,a+"."+d,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,n,r,i,a){for(var o=t[n],s=0;s<e.length;s++)if(p(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new f("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return g((function(t,n,r,i,a){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,n,r,i,a,o);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new f("Invalid "+i+" `"+a+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,n,r,i,a){var s=t[n],l=y(s);if("object"!==l)return new f("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(r,i,a,c,x(d));var u=d(s,c,r,i,a+"."+c,o);if(u)return u}return null}))},exact:function(e){return g((function(t,n,r,i,l){var c=t[n],d=y(c);if("object"!==d)return new f("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");var u=a({},t[n],e);for(var h in u){var p=e[h];if(s(e,h)&&"function"!=typeof p)return b(r,i,l,h,x(p));if(!p)return new f("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,h,r,i,l+"."+h,o);if(g)return g}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var n={},i=0;function a(a,s,l,c,d,h,p){if(c=c||u,h=h||l,p!==o){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!n[m]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,i++)}}return null==s[l]?a?null===s[l]?new f("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,h)}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}function m(e){return g((function(t,n,r,i,a,o){var s=t[n];return y(s)!==e?new f("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,i){return new f((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[d]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,a=r.call(t);if(r!==t.entries){for(;!(i=a.next()).done;)if(!v(i.value))return!1}else for(;!(i=a.next()).done;){var o=i.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case c:case d:case i:case o:case a:case h:return p;default:var m=p&&p.$$typeof;switch(m){case l:case u:case g:case f:case s:return m;default:return t}}case r:return t}}}var w=c,$=d,S=l,k=s,O=n,C=u,D=i,j=g,T=f,_=r,M=o,E=a,N=h,A=!1;function I(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=S,t.ContextProvider=k,t.Element=O,t.ForwardRef=C,t.Fragment=D,t.Lazy=j,t.Memo=T,t.Portal=_,t.Profiler=M,t.StrictMode=E,t.Suspense=N,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),I(e)||x(e)===c},t.isConcurrentMode=I,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===f},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===o},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===o||e===a||e===h||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},c={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},d=i(c,["type"]),u=r({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},d),h=r(r({},l),u);t.default={all:h,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(a.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),a=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,o.default)(n)]=e[n],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&a(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return d(e)||d(t)},r=(0,i.useState)(n),a=r[0],o=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(a,e)||o(e)}),[e,t]),a}(t),o=h(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,a.default)(e,t||{},!!t)},r=(0,i.useState)(n),o=r[0],s=r[1],l=u();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,r),p=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),f=u();return(0,i.useEffect)((function(){f&&n&&n(p)}),[p]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Vc=Wc.exports=Hc(i);const Yc=M.div`
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    margin-bottom: 2rem;
`,Uc=M(za.div)`
    overflow: hidden;
`,Kc=M.div`
    height: max-content;
`,Xc=M.div`
    border-top: 1px solid ${ml.Neutral[5]};
`,qc=M.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${yl.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
        display: block;
    }

    ${e=>{if(e.$interactive)return E`
                cursor: pointer;
            `}}
`,Gc=M(Il.H3)`
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: 1rem;
`,Zc=M.div`
    display: flex;
`,Qc=M.span`
    font-size: 1.5rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    margin-right: 2.5rem;

    ${yl.MaxWidth.mobileL} {
        margin-right: 0rem;
    }

    ${e=>{switch(e.$displayState){case"error":return E`
                    color: ${ml.Validation.Red.Icon(e)};
                `;case"warning":return E`
                    color: ${ml.Validation.Orange.Icon(e)};
                `}}}
`,Jc=M(P)`
    height: 1.375rem;
    width: 1.375rem;
`,ed=M.div`
    display: flex;
    margin-left: auto;
    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return E`
                margin-right: 2.5rem;
                ${yl.MaxWidth.mobileL} {
                    margin-right: 0rem;
                    margin-top: 1rem;
                }
            `}}
`,td=M.button`
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
`;M(Il.H4)`
    color: ${ml.Primary};
`;const nd=M.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Fl.Base};
`,rd=M(pe)`
    color: ${ml.Neutral[3]};
    height: 1.375rem;
    width: 1.375rem;
`,id=n=>{var{children:r,title:i,collapsible:a=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=n,h=lt(n,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[p,f]=o(!a||s),g=ln(),m=g.ref,b=Vc.useMediaQuery({maxWidth:xl.mobileL}),v=e=>{e.stopPropagation(),f(!p)},y=Sa({height:p?g.height:0}),x=()=>a&&e(td,Object.assign({onClick:v,type:"button","aria-label":p?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle"},{children:e(nd,Object.assign({$expanded:p},{children:e(rd,{"aria-hidden":!0})}))}));return t(Yc,Object.assign({},h,{children:[t(qc,Object.assign({"data-testid":"header",onClick:u&&a&&v,$interactive:u&&a},{children:[t(Zc,{children:[e(Gc,Object.assign({id:"title","data-testid":(null==d?void 0:d.title)||"title",weight:"semibold"},{children:i})),(()=>{switch(c){case"error":case"warning":return e(Qc,Object.assign({$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`},{children:e(Jc,{})}));default:return null}})(),b&&x()]}),l&&e(ed,Object.assign({$collapsible:a,"data-testid":"call-to-action-container"},{children:l})),!b&&x()]})),a?e(Uc,Object.assign({style:y,"data-testid":"expandable-container"},{children:e(Xc,Object.assign({ref:m},{children:r}))})):e(Kc,Object.assign({"data-testid":"non-expandable-container"},{children:e(Xc,{children:r})}))]}))};var ad={exports:{}};ad.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},b=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:b,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+b(r,2,"0")+":"+b(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof C||!(!e||!e[w])},S=function e(t,n,r){var i;if(!t)return y;if("string"==typeof t){var a=t.toLowerCase();x[a]&&(i=a),n&&(x[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;x[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},k=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new C(n)},O=v;O.l=S,O.i=$,O.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(f);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return O},b.isValid=function(){return!(this.$d.toString()===p)},b.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},b.isAfter=function(e,t){return k(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<k(e)},b.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var n=this,r=!!O.u(t)||t,d=O.p(e),p=function(e,t){var i=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},f=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return r?p(1,0):p(31,11);case c:return r?p(1,m):p(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return p(r?b-x:b+(6-x),m);case s:case h:return f(v+"Hours",0);case o:return f(v+"Minutes",1);case a:return f(v+"Seconds",2);case i:return f(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var n,l=O.p(e),d="set"+(this.$u?"UTC":""),p=(n={},n[s]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],f=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(h,1);g.$d[p](f),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[O.p(e)]()},b.add=function(r,d){var h,p=this;r=Number(r);var f=O.p(d),g=function(e){var t=k(p);return O.w(t.date(t.date()+Math.round(e*r)),p)};if(f===c)return this.set(c,this.$M+r);if(f===u)return this.set(u,this.$y+r);if(f===s)return g(1);if(f===l)return g(7);var m=(h={},h[a]=t,h[o]=n,h[i]=e,h)[f]||1,b=this.$d.getTime()+r*m;return O.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},h=function(e){return O.s(a%12||12,e,"0")},f=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return s+1;case"MM":return O.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return O.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(a,o,!0);case"A":return f(a,o,!1);case"m":return String(o);case"mm":return O.s(o,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(r,h,p){var f,g=this,m=O.p(h),b=k(r),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return O.m(g,b)};switch(m){case u:f=x()/12;break;case c:f=x();break;case d:f=x()/3;break;case l:f=(y-v)/6048e5;break;case s:f=(y-v)/864e5;break;case o:f=y/n;break;case a:f=y/t;break;case i:f=y/e;break;default:f=y}return p?f:O.a(f)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},b.clone=function(){return O.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),D=C.prototype;return k.prototype=D,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,C,k),e.$i=!0),k},k.locale=S,k.isDayjs=$,k.unix=function(e){return k(1e3*e)},k.en=x[y],k.Ls=x,k.p={},k}();var od=Wa(ad.exports),sd={exports:{}};sd.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],p=d&&d[1];o[l]=p?{regex:h,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(r),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,p=new Date,f=o||(i||a?1:p.getDate()),g=i||p.getFullYear(),m=0;i&&!a||(m=a>0?a-1:p.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,f,b,v,y,x+60*u.offset*1e3)):n?new Date(Date.UTC(g,m,f,b,v,y,x)):new Date(g,m,f,b,v,y,x)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var p=s.length,f=1;f<=p;f+=1){o[1]=s[f-1];var g=n.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}f===p&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ld=Wa(sd.exports),cd={exports:{}};cd.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var dd=Wa(cd.exports),ud={exports:{}};ud.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var hd=Wa(ud.exports),pd={exports:{}};pd.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var fd,gd,md=Wa(pd.exports),bd={exports:{}};bd.exports=(fd={year:0,month:1,day:2,hour:3,minute:4,second:5},gd={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=gd[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),gd[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,d=fd[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,p=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",f=+e;return(n.utc(p).valueOf()-(f-=f%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=n(d).utcOffset(u);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var vd,yd=Wa(bd.exports);od.extend(dd),od.extend(md),od.extend(hd),od.extend(ld),od.extend(yd),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=od(t).startOf("week");return xd(n).map((e=>wd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return wd(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(od(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+od(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=od(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?od(r):void 0,i?od(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(vd||(vd={}));const xd=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},wd=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},$d=[1,3,5,7,8,10,12],Sd=[4,6,9,11];var kd,Od,Cd,Dd;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":$d.includes(a)?Math.min(i,31).toString():Sd.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=od(e,n);return od(t,n).diff(r,"minute")},e.toDayjs=e=>e?od(e):od(),e.addMinutesToTime=(e,t,n="HH:mm")=>od(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>od(e).isSame(od(t),n)}(kd||(kd={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!od(e).isBefore(r,"day"))||!(!i||!od(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(od(e).isValid())return e}return""}}(Od||(Od={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Cd||(Cd={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Dd||(Dd={}));function jd(e){const t=a(null);return h((()=>{t.current=e}),[e]),f(((...e)=>t.current(...e)),[])}const Td=(e,t,n="window",r)=>{const i=a();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const a=e=>i.current(e);return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}),[e,n])},_d="undefined"!=typeof window?h:u,Md=()=>{const[e,t]=o(!1);return u((()=>{t(!0)}),[]),e};function Ed({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),a=r.substring(0,n.selectionEnd),o=t(a),s=a.length-o.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}const Nd=e=>{const t=(e=>{const t=a(e),n=a();return u((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},Ad=e=>{const[t,n]=o(e),r=a(e);return[t,f((e=>{r.current=e,n(e)}),[]),r]},Id=M.div`
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
`,Bd=M.ul`
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
`,Pd=M.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${yl.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,Ld=M.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Fd=M(fe)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${ml.Neutral[4]};
`,Rd=M(Il.BodySmall)`
    margin: 0.25rem !important;
`,zd=M(Il.Hyperlink.Small)`
    margin: 0.25rem !important;
`,Hd=r=>{var{links:i,fadeColor:s,fadePosition:l="both",itemStyle:c,id:d}=r,u=lt(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[h,p]=o(!1),[f,g]=o(!1),[m,b]=o(!1),v="left"===l||"both"===l,y="right"===l||"both"===l,x=a(null),w=a(null),$=jd((()=>{const e=w.current,t=x.current;e&&t&&i&&i.length>1&&window.innerWidth<=bl.tablet&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),S=jd((()=>{const e=window.innerWidth<=bl.tablet;p(e);const t=w.current,n=x.current;if(t&&n&&e&&t.scrollWidth>n.offsetWidth)return g(t.scrollLeft>=1),void b(t.scrollWidth-t.scrollLeft-1>n.offsetWidth);g(!1),b(!1)}));if(Td("resize",S),Td("scroll",S,w.current),_d((()=>{$(),S()}),[$,S]),ln({onResize:$,targetRef:x,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!i)return null;return t(Id,Object.assign({ref:x,id:d||"breadcrumb"},u,{children:[e("nav",{children:e(Bd,Object.assign({ref:w},{children:i.map(((n,r)=>{let a;return n.children?(a=r!==i.length-1&&n.href?e(zd,Object.assign({},n,{weight:"semibold"})):e(Rd,Object.assign({weight:"semibold"},{children:n.children})),t(Ld,Object.assign({$styleProps:c},{children:[a,r<i.length-1&&e(Fd,{})]}),r)):null}))}))}),h&&(()=>{let r;return r=Array.isArray(s)&&s.length>0?{left:s,right:s}:s||{left:void 0,right:void 0},t(n,{children:[f&&v&&e(Pd,{$backgroundColor:r.left,$position:"left"}),m&&y&&e(Pd,{$backgroundColor:r.right,$position:"right"})]})})()]}))},Wd=M(sc)`
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
`,Vd={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,styleType:o="default",danger:s=!1,icon:l,iconPosition:c="left"}=n,d=lt(n,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:c,$buttonStyle:a?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:s};return t(Wd,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:a},u,d,{children:[l,e("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,styleType:o="default",danger:s=!1,icon:l,iconPosition:c="left"}=n,d=lt(n,["children","disabled","styleType","danger","icon","iconPosition"]),u={$buttonIconPosition:c,$buttonStyle:a?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:s};return t(Wd,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:a},u,d,{children:[l,e("span",{children:i})]}))}))},Yd=M.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${yl.MaxWidth.mobileL} {
        min-width: 17.5rem;
    }
`,Ud=E`
    color: ${ml.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Kd=M(ge)`
    ${Ud}
`,Xd=M(fe)`
    ${Ud}
`,qd=M(pe)`
    ${Ud}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Gd=M.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Zd=M.div`
    display: flex;
    flex: 1;
    position: relative;
`,Qd=M.div`
    isolation: isolate;
    width: 100%;
`,Jd=M.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${ml.Neutral[8]};

    ${e=>{if(!e.$visible)return E`
                display: none;
            `}}
`,eu=M.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,tu=M.div`
    display: flex;
`,nu=M.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?E`
                display: none;
            `:e.$expanded?E`
                ${qd} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,ru=M.p`
    ${Al.getTextStyle("H5","regular")}
`,iu=M.div`
    display: flex;
`,au=M($l)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ou=M.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,su=M(cc.Small)`
    flex: 1;
`,lu=M.div`
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
`,cu=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?E`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${ml.Shadow.Accent};
                    border: 1px solid ${ml.Accent.Light[1]};
                }
            `:e.$disabledDisplay?E`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return E`
                    background-color: ${ml.Accent.Light[6](e)};
                `;case"selected-month":return E`
                    background-color: ${ml.Accent.Light[5](e)};
                    border: 1px solid ${ml.Primary(e)};
                `}}}
`,du=M(Il.H5)`
    ${e=>{if(e.$disabledDisplay)return E`
                color: ${ml.Neutral[4]};
            `;switch(e.$variant){case"current-month":return E`
                    color: ${ml.Neutral[3](e)};
                `;case"selected-month":return E`
                    ${Al.getTextStyle("H5","semibold")}
                    color: ${ml.Primary(e)};
                `}}}
`,uu=({calendarDate:t,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:a,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const h=m((()=>vd.generateMonths(od(t))),[t]),p=e=>{const t="start"===n&&i&&e.isAfter(i,"month")&&s,a="end"===n&&r&&e.isBefore(r,"month")&&s;return t||a},f=e=>{const t=e.format("MMMM"),n=(r=e,!vd.isWithinRange(r,l?od(l):void 0,c?od(c):void 0,"month"));var r;const i=a.isSame(e,"month")?"selected-month":od().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||p(e),interactive:!n||d,month:t,variant:i}};return h.length?e(lu,Object.assign({$type:o},{children:h.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,month:a}=f(t);return e(cu,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(t,!r)},{children:e(du,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n},{children:a}))}),a)}))})):null},hu=M.div`
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
`,pu=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?E`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${ml.Shadow.Accent};
                    border: 1px solid ${ml.Accent.Light[1]};
                }
            `:e.$disabledDisplay?E`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return E`
                    background: ${ml.Accent.Light[6](e)};
                `;case"selected-year":return E`
                    background: ${ml.Accent.Light[5](e)};
                    border: 1px solid ${ml.Primary(e)};
                `}}};
`,fu=M(Il.H5)`
    ${e=>{if(e.$disabledDisplay)return E`
                color: ${ml.Neutral[4]};
            `;switch(e.$variant){case"current-year":return E`
                    color: ${ml.Neutral[3](e)};
                `;case"selected-year":return E`
                    ${Al.getTextStyle("H5","semibold")}
                    color: ${ml.Primary(e)};
                `;case"other-decade":return E`
                    color: ${ml.Neutral[4](e)};
                `}}}
`,gu=({calendarDate:t,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:a,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const h=m((()=>vd.generateDecadeOfYears(od(t))),[t]),p=e=>{const t="start"===n&&i&&e.isAfter(i,"year")&&s,a="end"===n&&r&&e.isBefore(r,"year")&&s;return t||a},f=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(i=e,!vd.isWithinRange(i,l?od(l):void 0,c?od(c):void 0,"year"));var i;const o=t?"other-decade":a.isSame(e,"year")?"selected-year":od().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||p(e),interactive:!r||d,year:n,variant:o}};return h.length?e(hu,Object.assign({$type:o},{children:h.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,year:a}=f(t);return e(pu,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||u(e)})(t,!r)},{children:e(fu,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n,$interactive:r},{children:a}))}),a)}))})):null},mu=i.forwardRef(((r,i)=>{var{children:s,initialCalendarDate:l,type:c,minDate:d,maxDate:h,currentFocus:p,selectedStartDate:f,selectedEndDate:g,selectWithinRange:m,dynamicHeight:v=!1,allowDisabledSelection:y,onCalendarDateChange:x,withButton:w,doneButtonDisabled:$,onDismiss:S,showNavigationHeader:k=!0,getLeftArrowDate:O,getRightArrowDate:C,isLeftArrowDisabled:D,isRightArrowDisabled:j,getMonthHeaderLabel:T,getYearHeaderLabel:_}=r,M=lt(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[E,N]=o(kd.toDayjs(l)),[A,I]=o(kd.toDayjs(l)),[B,P]=o("default"),L=a(null),F=a(null),R=a();b(i,(()=>({defaultView(){P("default")},resetView(){const e=kd.toDayjs(l);N(e),I(e),P("default")},setCalendarDate(e){const t=kd.toDayjs(e);N(t),I(t)}}))),u((()=>{const e=kd.toDayjs(l);N(e),I(e)}),[l]),u((()=>{K(A)}),[A]);const z=()=>{"month-options"!==B?(P("month-options"),R.current.focus()):(P("default"),N(A))},H=()=>{"default"!==B?(P("default"),N(A)):P("year-options")},W=()=>{R.current.focus();const e=O?O(E):E.subtract(1,"month");switch(B){case"default":I(e),N(e);break;case"month-options":N((e=>e.subtract(1,"year")));break;case"year-options":N((e=>e.subtract(10,"year")))}},V=()=>{R.current.focus();const e=C?C(E):E.add(1,"month");switch(B){case"default":I(e),N(e);break;case"month-options":N((e=>e.add(1,"year")));break;case"year-options":N((e=>e.add(10,"year")))}},Y=e=>{N(e),I(e),w||P("default")},U=()=>{const e=kd.toDayjs(l);N(e),I(e),"default"===B?X("reset"):P("default")},K=e=>{x&&x(e)},X=e=>{S&&S(e)},q=()=>{if(!d||y)return!1;const e=od(d);return"month-options"===B?!vd.isPreviousYearWithinRange(E,e):"year-options"===B?!vd.isPreviousDecadeWithinRange(E,e):D?D(E):!vd.isPreviousMonthWithinRange(E,e)},G=()=>{if(!h||y)return!1;const e=od(h);return"month-options"===B?!vd.isNextYearWithinRange(E,e):"year-options"===B?!vd.isNextDecadeWithinRange(E,e):j?j(E):!vd.isNextMonthWithinRange(E,e)},Z=()=>{if("year-options"===B){const{beginDecade:e,endDecade:t}=vd.getStartEndDecade(E);return`${e} to ${t}`}return _?_(E):E.format("YYYY")},Q=()=>{const r=T?T(E):E.format("MMM");return t(n,{children:[t(nu,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===B,$visible:"default"===B,id:"month-dropdown",onClick:z},{children:[e(ru,{children:r}),e(qd,{})]})),t(nu,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==B,id:"year-dropdown",onClick:H},{children:[e(ru,{children:Z()}),e(qd,{})]}))]})},J=()=>{switch(B){case"month-options":return e(uu,{type:c,calendarDate:E,currentFocus:p,minDate:d,maxDate:h,selectedStartDate:f,selectedEndDate:g,viewCalendarDate:A,isNewSelection:m,onMonthSelect:Y,allowDisabledSelection:y});case"year-options":return e(gu,{type:c,calendarDate:E,currentFocus:p,minDate:d,maxDate:h,selectedStartDate:f,selectedEndDate:g,viewCalendarDate:A,isNewSelection:m,onYearSelect:Y,allowDisabledSelection:y});default:return null}};return t(Gd,Object.assign({ref:R,"data-id":"calendar-container","data-testid":"calendar-container"},M,{children:[k&&t(eu,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[e(tu,{children:Q()}),t(iu,{children:[e(au,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:W},{children:e(Kd,{})})),e(au,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:e(Xd,{})}))]})]})),e(Zd,{children:(()=>{const r="function"==typeof s?s({calendarDate:A,currentView:B}):s;return t(n,v?{children:["default"===B&&r,J()]}:{children:[e(Qd,{children:r}),e(Jd,Object.assign({$visible:"default"!==B},{children:J()}))]})})()}),(()=>{if(!w)return;const n=!!("default"===B)&&$;return t(ou,{children:[e(su,Object.assign({ref:F,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),e(su,Object.assign({"data-testid":"done-button",ref:L,type:"button",onClick:()=>{n||(N(A),"default"===B?X("confirmed"):P("default"))},disabled:n},{children:"Done"}))]})})()]}))})),bu=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,vu=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,yu=M.div`
    grid-column: 1 / -1;
    display: flex;
`,xu=M.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,wu=M.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return E`
                    left: 0;
                `;case"right":return E`
                    right: 0;
                `}}}
`,$u=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,Su=M(Il.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return E`
                ${Al.getTextStyle("H5","semibold")};
                color: ${ml.Accent.Light[2]};
            `;if(t)return E`
                color: ${ml.Neutral[4]};
            `;if(n)return E`
                ${Al.getTextStyle("H5","semibold")};
                color: ${ml.Primary};
            `;switch(r){case"other-month":return E`
                    color: ${ml.Neutral[4]};
                `;case"today":return E`
                    color: ${ml.Neutral[3]};
                `;case"default":return E`
                    color: ${ml.Neutral[1]};
                `}}}
`;M(wu)`
    ${e=>{const{$selected:t}=e;if(t)return E`
                border-top: 1px solid ${ml.Accent.Light[4]};
                border-bottom: 1px solid ${ml.Accent.Light[4]};
                background-color: ${ml.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?E`
                border-top: 1px dashed ${ml.Accent.Light[4]};
                border-bottom: 1px dashed ${ml.Accent.Light[4]};
                background-color: ${ml.Accent.Light[6]};
            `:n?E`
                background-color: ${ml.Accent.Light[4]};
            `:void 0}}
`;const ku=M($u)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?E`
                background: ${ml.Accent.Light[5]};
                border: 1px solid ${ml.Primary};
            `:t?E`
                box-shadow: 0px 0px 4px 1px ${ml.Shadow.Accent};
                border: 1px solid ${ml.Accent.Light[1]};
                background-color: ${ml.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?E`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${ml.Shadow.Accent};
                    border: 1px solid ${ml.Accent.Light[1]};
                    background-color: ${ml.Neutral[8]};
                }
            `:n?E`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?E`
                border: 1px solid ${ml.Accent.Light[1]};
                background: ${ml.Accent.Light[4]};

                :hover {
                    background: ${ml.Accent.Light[4]};
                }
            `:t?E`
                color: ${ml.Neutral[4]};
            `:"today"===r?E`
                    background: ${ml.Accent.Light[5]};
                `:void 0}}
`,Ou=e=>{let t=ml.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=ml.Accent.Light[5];break;case"hover-dash":t=ml.Accent.Light[6],n=`1px dashed ${ml.Accent.Light[4](e)}`;break;case"hover-current":t=ml.Neutral[8],n=`1px solid ${ml.Primary(e)}`;break;case"selected":t=ml.Accent.Light[5],n=`1px solid ${ml.Accent.Light[4](e)}`;break;case"selected-outline":t=ml.Accent.Light[5],n=`1px solid ${ml.Primary(e)}`;break;case"overlap":t=ml.Accent.Light[4],n=`1px solid ${ml.Accent.Light[4](e)}`;break;case"overlap-outline":t=ml.Accent.Light[4],n=`1px solid ${ml.Primary(e)}`}return{color:t,border:n}},Cu=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Du=M.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=Ou(e);return E`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,ju=M(Du)`
    left: 0;
`,Tu=M(Du)`
    right: 0;
`,_u=M.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Mu=M(_u)`
    left: 0;
`,Eu=M(_u)`
    right: 0;
`,Nu=M.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=Ou(e);return E`
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
`,Au=M(Nu)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${ml.Shadow.Accent};
    }
`,Iu=M(Nu)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${ml.Shadow.Accent};
    }
`,Bu=M(Il.H5)`
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
                    ${Al.getTextStyle("H5","semibold")};
                    color: ${ml.Accent.Light[2]};
                `:E`
                color: ${ml.Neutral[4]};
            `;switch(n){case"selected":return E`
                    ${Al.getTextStyle("H5","semibold")};
                    color: ${ml.Primary};
                `;case"current":return E`
                    color: ${ml.Neutral[3]};
                `;case"unavailable":return E`
                    color: ${ml.Neutral[4]};
                `;case"hidden":return E`
                    visibility: hidden;
                `;default:return E`
                    color: ${ml.Neutral[1]};
                `}}}
`,Pu=({bgLeft:n,bgRight:r,circleLeft:i,circleRight:a,shadow:o,circleShadow:s,labelType:l,disabled:c,interactive:d,date:u,onSelect:h,onHover:p,onHoverEnd:f})=>t(Cu,{children:[e(Mu,{$shadow:n&&o}),e(ju,{$type:n,$shadow:n&&o}),e(Au,{$type:i,$shadow:i&&s}),e(Eu,{$shadow:r&&o}),e(Tu,{$type:r,$shadow:r&&o}),e(Iu,{$type:a,$shadow:a&&s}),e(Bu,Object.assign({weight:"regular",$type:l,$disabled:c,$interactive:d,onClick:()=>{h(u)},onMouseEnter:()=>{p(u)},onMouseLeave:()=>{f&&f(u)}},{children:u.date()}))]}),Lu=({date:t,calendarDate:n,startDate:r,endDate:i,currentFocus:a,hoverDate:o,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:h,onSelect:p,onHover:f})=>{const g=vd.isDisabledDay(t,c,s,l),m=!g||d,b=()=>{const e=od(o),t=e.isBefore(i,"day"),n=e.isAfter(r,"day");let s,l,c,d;return"start"===a&&i&&t&&(r&&n?(c=o,d=i):(s=o,l=r||i)),"end"===a&&r&&n&&(i&&t?(c=r,d=o):(s=i||r,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:n,disabled:g,interactive:m,onSelect:()=>{p(t,!m)},onHover:()=>{f(t.format("YYYY-MM-DD"),!m)}};return e(Pu,Object.assign({},v,(()=>{const e={};if(n.month()!==t.month())e.labelType=h?"hidden":"unavailable";else if(od().isSame(t,"day")&&!g)e.labelType="current",e.circleLeft="current",e.circleRight="current";else if(u){const n="end"===a&&r&&t.isBefore(r),o="start"===a&&i&&t.isAfter(i);(n||o)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},a=t.isSame(r,"day"),o=t.isSame(i,"day");return h&&n.month()!==t.month()?(e.labelType="hidden",e):((r&&a||i&&o)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),r&&i&&t.isBetween(r,i,"day","[]")&&(e.labelType="selected",a||(e.bgLeft="selected"),o||(e.bgRight="selected")),e)})(),(()=>{if(!o)return;const e={};t.isSame(o,"day")&&(e.circleShadow=!0,e.circleLeft="hover-current",e.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:i,overlapEnd:a}=b();if(n&&r){if(t.isBetween(n,r,"day","[]")){const i=t.isSame(n,"day"),a=t.isSame(r,"day");e.labelType="selected",i||(e.bgLeft="hover-dash"),a||(e.bgRight="hover-dash")}return e}if(i&&a){if(t.isBetween(i,a,"day","[]")){const n=t.isSame(i,"day"),r=t.isSame(a,"day");e.labelType="selected",(n||r)&&(e.circleShadow=!0,e.circleLeft="overlap-outline",e.circleRight="overlap-outline"),n||(e.bgLeft="overlap"),r||(e.bgRight="overlap")}return e}return e})()))};od.extend(dd);const Fu=({calendarDate:n,currentFocus:r,disabledDates:i,selectedStartDate:a,selectedEndDate:s,onSelect:l,onHover:c,isNewSelection:d,minDate:u,maxDate:h,allowDisabledSelection:p,showActiveMonthDaysOnly:f})=>{const g=m((()=>vd.generateDays(n)),[n]),[b,v]=o(""),y=(e,t)=>{t&&!p||l(e)},x=(e,t)=>{t&&!p||(v(e),c(e))},w=()=>{v(""),c("")};return t(bu,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((t,n)=>e(vu,{children:e(Il.H6,Object.assign({weight:"semibold"},{children:od(t).format("ddd")}))},`week-day-${n}`))),g.map(((t,o)=>e(yu,Object.assign({onMouseLeave:w},{children:t.map(((t,o)=>e(Lu,{date:t,calendarDate:n,startDate:a,endDate:s,hoverDate:b,currentFocus:r,minDate:u,maxDate:h,disabledDates:i,allowDisabledSelection:p,isNewSelection:d,showActiveMonthDaysOnly:f,onSelect:y,onHover:x},`day-${o}`)))}),o)))]}))},Ru=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:d,onHover:u})=>{const h=vd.isDisabledDay(t,s,a,o),p=!h||l,{start:f,end:g}=r?vd.getFixedRangeStartEnd(kd.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:b}=i?vd.getFixedRangeStartEnd(kd.toDayjs(i),c):{start:void 0,end:void 0},v=r&&t.isBetween(f,g,"day","[]"),y=i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(f,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(g,"day")||y&&t.isSame(b,"day"),$=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},S={date:t,calendarDate:n,disabled:h,interactive:p,onSelect:()=>{d(t,!p)},onHover:()=>{u(t.format("YYYY-MM-DD"),!p)}};return e(Pu,Object.assign({},S,(()=>{const e={};return v||y?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":od().isSame(t,"day")&&!h&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={},n=t.format("YYYY-MM-DD");return y&&$(e,"hover-dash",n===m,n===b),v&&$(e,"selected",n===f,n===g),v&&y&&$(e,"overlap",x,w),n===f&&(y?(e.circleLeft="overlap-outline",e.circleRight="overlap-outline"):(e.circleRight="selected-outline",e.circleLeft="selected-outline")),n===m&&(e.circleLeft="hover-current",e.circleRight="hover-current",e.circleShadow=!0,m>=f&&m<g&&(e.circleLeft="overlap-outline",e.circleRight="overlap-outline")),e})()))},zu=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:a,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:u})=>{const h=m((()=>vd.generateDays(n)),[n]),[p,f]=o(""),g=(e,t)=>{t&&!d||(a(e),e&&!od(e).isSame(e,"month")&&f(""))},b=(e,t)=>{t&&!d||(f(e),s(e))},v=()=>{f(""),s("")};return t(bu,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((t,n)=>e(vu,{children:e(Il.H6,Object.assign({weight:"semibold"},{children:od(t).format("ddd")}))},`week-day-${n}`))),h.map(((t,a)=>e(yu,Object.assign({onMouseLeave:v},{children:t.map(((t,a)=>e(Ru,{date:t,calendarDate:n,selectedDate:i,hoverDate:p,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:g,onHover:b,numberOfDays:u},`day-${a}`)))}),a)))]}))},Hu=M.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${ml.Neutral[8]};

    ${e=>{if("input"===e.$type)return E`
                border: 1px solid ${ml.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Wu=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=vd.isDisabledDay(t,s,a,o),h=!u||l,{start:p,end:f}=vd.getWeekStartEnd(kd.toDayjs(r)),{start:g,end:m}=vd.getWeekStartEnd(kd.toDayjs(i)),b=r&&t.isBetween(p,f,"day","[]"),v=i&&t.isBetween(g,m,"day","[]"),y=b&&t.isSame(p)||v&&t.isSame(g),x=b&&t.isSame(f)||v&&t.isSame(m),w={date:t,calendarDate:n,disabled:u,interactive:h,onSelect:()=>{c(t,!h)},onHover:()=>{d(t.format("YYYY-MM-DD"),!h)}};return e(Pu,Object.assign({},w,(()=>{const e={};return b||v?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":od().isSame(t,"day")&&!u&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={};let t;return b&&v?(t="hover-current",e.shadow=!0,e.circleShadow=y||x):b?t="selected-outline":v&&(t="hover-dash"),t&&(y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},Vu=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:a,onHover:s,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const u=m((()=>vd.generateDays(n)),[n]),[h,p]=o(""),f=(e,t)=>{if(t&&!d)return;const n=e.startOf("week");a(n),e&&!od(e).isSame(n,"month")&&p("")},g=(e,t)=>{t&&!d||(p(e),s(e))},b=()=>{p(""),s("")};return t(bu,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((t,n)=>e(vu,{children:e(Il.H6,Object.assign({weight:"semibold"},{children:od(t).format("ddd")}))},`week-day-${n}`))),u.map(((t,a)=>e(yu,Object.assign({onMouseLeave:b},{children:t.map(((t,a)=>e(Wu,{date:t,calendarDate:n,selectedDate:i,hoverDate:h,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:f,onHover:g},`day-${a}`)))}),a)))]}))},Yu=i.forwardRef((({disabledDates:t,onYearMonthDisplayChange:n,onSelect:r,onHover:i,onDismiss:o,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:h,maxDate:p,allowDisabledSelection:f,type:g="standalone",selectWithinRange:m=!0,initialCalendarDate:v,numberOfDays:y,showActiveMonthDaysOnly:x=!1},w)=>{const $=a(),S=a(void 0);b(w,(()=>({reset(){$.current.resetView()},setCalendarDate(e){$.current.setCalendarDate(e)}})));const k=e=>{const t=e.format("YYYY-MM-DD");$.current.setCalendarDate(t),C(t)},O=e=>{D(e)},C=e=>{r&&r(e)},D=e=>{i&&i(e)},j=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e(Hu,Object.assign({$type:g},{children:e(mu,Object.assign({type:g,ref:$,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:h,maxDate:p,selectWithinRange:m,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:f,onCalendarDateChange:e=>{S.current&&S.current.isSame(e,"month")||j(e),S.current=e},initialCalendarDate:v},{children:({calendarDate:n})=>(n=>{switch(u){case"week":return e(Vu,{calendarDate:n,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:p,allowDisabledSelection:f,onSelect:k,onHover:O});case"fixed-range":return e(zu,{calendarDate:n,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:p,allowDisabledSelection:f,onSelect:k,onHover:O,numberOfDays:y});default:return e(Fu,{calendarDate:n,currentFocus:c,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:p,isNewSelection:m,allowDisabledSelection:f,showActiveMonthDaysOnly:x,onSelect:k,onHover:O})}})(n)}))}))})),Uu=i.forwardRef(((t,n)=>{var{width:r}=t,i=lt(t,["width"]);return e(Yd,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:e(Yu,Object.assign({ref:n},i))}))})),Ku=t=>{var{className:n,styleType:r="bordered",value:i,onSelect:a}=t,s=lt(t,["className","styleType","value","onSelect"]);const[l,c]=o(i);return u((()=>{c(i)}),[i]),e(Xu,Object.assign({className:n,$hasBorder:"bordered"===r},{children:e(Yu,Object.assign({type:"standalone",value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==a||a(e)}},s))}))},Xu=M.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return E`
                border: 1px solid ${ml.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`,qu=M.div`
    border-radius: 0.5rem;
    background: ${ml.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Gu=t=>{var{children:n}=t,r=lt(t,["children"]);const i=r["data-testid"]||"card";return e(qu,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e(Il.Body,{children:n}):n}))},Zu=N`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Qu=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return E`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${Zu};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?ml.Neutral[4](e):e.$unchecked?ml.Accent.Light[2](e):ml.Primary(e)};
    }
`,Ju=M.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,eh=n=>{var{className:r,checked:i,disabled:o,indeterminate:s,onChange:l,onKeyPress:c,displaySize:d="default"}=n,h=lt(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=a();u((()=>{p.current.indeterminate=s}),[s]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return t(Qu,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f,$displaySize:d,$disabled:o,$unchecked:!(s||i||o)},{children:[e(Ju,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:f,disabled:o},h)),s?e(H,{"data-testid":"indeterminate"}):i?e(W,{"data-testid":"checkmark"}):o?e(V,{"data-testid":"disabled-empty-checkbox"}):e(Y,{"data-testid":"empty-checkbox"})]}))};var th=qa,nh=/\s/;var rh=function(e){for(var t=e.length;t--&&nh.test(e.charAt(t)););return t},ih=/^\s+/;var ah=function(e){return e?e.slice(0,rh(e)+1).replace(ih,""):e},oh=vo,sh=ho,lh=/^[-+]0x[0-9a-f]+$/i,ch=/^0b[01]+$/i,dh=/^0o[0-7]+$/i,uh=parseInt;var hh=function(e){if("number"==typeof e)return e;if(sh(e))return NaN;if(oh(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=oh(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ah(e);var n=ch.test(e);return n||dh.test(e)?uh(e.slice(2),n?2:8):lh.test(e)?NaN:+e},ph=vo,fh=function(){return th.Date.now()},gh=hh,mh=Math.max,bh=Math.min;var vh=function(e,t,n){var r,i,a,o,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=a}function g(){var e=fh();if(f(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return u?bh(n,a-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?p(e):(r=i=void 0,o)}function b(){var e=fh(),n=f(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?p(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),p(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=gh(t)||0,ph(n)&&(d=!!n.leading,a=(u="maxWait"in n)?mh(gh(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?o:m(fh())},b},yh=Wa(vh),xh=vh,wh=vo;var $h=Wa((function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return wh(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),xh(e,t,{leading:r,maxWait:t,trailing:i})})),Sh=new Map,kh=new WeakMap,Oh=0,Ch=void 0;function Dh(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(kh.has(e)||(Oh+=1,kh.set(e,Oh.toString())),kh.get(e)):"0"}(e.root):e[t]}`)).toString()}function jh(e,t,n={},r=Ch){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=Dh(e);let n=Sh.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver((t=>{t.forEach((t=>{var n;const a=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach((e=>{e(a,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},Sh.set(t,n)}return n}(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),Sh.delete(i))}}function Th({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var u;const[h,p]=r.useState(null),f=r.useRef(),[g,m]=r.useState({inView:!!l,entry:void 0});f.current=d,r.useEffect((()=>{if(s||!h)return;let r;return r=jh(h,((e,t)=>{m({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&o&&r&&(r(),r=void 0)}),{root:a,rootMargin:i,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}}),[Array.isArray(e)?e.toString():e,h,a,i,o,s,n,c,t]);const b=null==(u=g.entry)?void 0:u.target,v=r.useRef();h||!b||o||s||v.current===b||(v.current=b,m({inView:!!l,entry:void 0}));const y=[p,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}const _h=M.div`
    width: 100%;
`,Mh=M.div`
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

    ${e=>{if(e.$warn)return E`
                color: ${ml.Validation.Red.Text};
                border: 1px solid ${ml.Validation.Red.Border};
            `}}
`,Eh=M(Mh)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,Nh=M(Mh)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:n,$right:r,$warn:i}=e;return E`
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
`,Ah=M.div`
    ${Al.getTextStyle("H4","bold")}
    margin-left: 0.5rem;
    margin-right: 1.5rem;

    ${yl.MaxWidth.mobileL} {
        margin-right: 3rem;
    }
`,Ih=M.div`
    margin-left: auto;
`;var Bh,Ph;!function(e){e.AM="AM",e.PM="PM"}(Bh||(Bh={})),function(e){e.roundToNearestHour=(e,t)=>{const n=od(e,"HH:mm");return(0===n.minute()?n:t?n.minute(0).add(1,"hour"):n.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let i=od(e,r),a=od(t,r);i.isSame(a)&&(a=a.add(1,"day"));const o=[];for(;i.isBefore(a);)o.push(i.format(n)),i=i.add(1,"hour");return o},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:Bh.AM};if(!t)return n;try{if("24hr"===e){const r=Rh(t,e);n.minute=Dd.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=Bh.AM,n.hour=0===i?"12":Dd.padValue(i.toString())):(n.period=Bh.PM,n.hour=12===i?i.toString():Dd.padValue((i-12).toString()))}else{const r=Rh(t,e);n.hour=Dd.padValue(r.hour),n.minute=Dd.padValue(r.minute),n.period="am"===r.period.toLowerCase()?Bh.AM:Bh.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Dd.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return Dd.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Dd.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?Dd.padValue(r.toString()):13===r?Dd.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===Bh.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return Dd.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Rh(e,t),r=Dd.padValue(n.hour);let i=`${r}:${Dd.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,i]=t.split(":").map(Number);let a=r;return"pm"===n&&a<12&&(a+=12),"am"===n&&12===a&&(a=0),zh(a,i)}return e},e.generateTimings=(t,n="12hr",r,i)=>{const a=[];let o=0,s=1440-t;for(r&&(o=e.timeToMinutes(r)),i&&(s=e.timeToMinutes(i));o<=s;){let e=Math.floor(o/60);const r=o%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=zh(e,r,t);a.push(n)}else{const t=zh(e,r);a.push(t)}o+=t}return a},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let i=parseInt(r[1]||"0",10);const a=parseInt(r[3]||"0",10);let o=r[4];if(void 0===r[1]||i>24||a>59)return;if("a"===o?o="am":"p"===o&&(o="pm"),"24hr"===t)return"pm"===o&&i<12?i+=12:("am"===o&&12===i||24===i)&&(i=0),zh(i,a);o?0===i||24===i?(o="am",i=12):i>12&&(o="pm",i-=12):(o=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return zh(i,a,o)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let i="",a=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<a)a=Math.abs(n),i=t;else if(n>0)break}return i},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,i]=t.split(":").map(Number);let a=r;return"pm"===n&&12!==a&&(a+=12),"am"===n&&12===a&&(a=0),60*a+i}}(Ph||(Ph={}));const Lh=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},Fh=e=>{const t=parseInt(e);return t>=0&&t<=59},Rh=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),a=n[1].substring(2);if(!Lh(n[0],t)||!Fh(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Lh(n[0],t)||!Fh(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},zh=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,Hh=r=>{var{className:i,align:s="right",timer:l,timestamp:c,notifyTimer:d,offset:h,mobileOffset:p,show:f,fixed:g=!0,"data-testid":m,onFinish:b,onNotify:v,onTick:y}=r,x=lt(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const w=a(),$=a(!1),[S,k]=o(0),[O,C]=o(0),[D,j]=o(0),[T,_]=o(!1),[M]=((e,t,n)=>{const[r,i]=o(e);u((()=>{if(!t)return;const r=null!=n?n:Date.now()+1e3*e,i=a(r);return()=>clearTimeout(i)}),[n,t,e]);const a=e=>{const t=()=>{const n=e-Date.now(),r=n%1e3,a=Math.max(Math.round(n/1e3),0);if(i(a),0!==a)return setTimeout(t,r>500?r:r+1e3)};return t()};return[r]})(l,T,c),{ref:E,inView:N}=Th({threshold:1,rootMargin:-1*S+"px 0px 0px 0px",initialInView:!0}),A=!g||N,I=Vc.useMediaQuery({maxWidth:bl.mobileL});u((()=>{_(f)}),[f]),u((()=>{0===M?F():M<=d&&(P(),L())}),[M]),u((()=>{const e=function(){var e,t;const n=null!==(e=null==h?void 0:h.top)&&void 0!==e?e:168,r=null!==(t=null==p?void 0:p.top)&&void 0!==t?t:80,i=I?r:n;return i}();k(e)}),[I,null==h?void 0:h.top,null==p?void 0:p.top]),u((()=>{if(w.current){const e=$h(B,300);return B(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[w.current]),u((()=>{$.current=!1}),[l,f]);const B=()=>{var e;const t=null===(e=w.current)||void 0===e?void 0:e.getBoundingClientRect();j(t.x),C(t.right)},P=()=>{y&&y(M)},L=()=>{v&&!$.current&&($.current=!0,v())},F=()=>{_(!1),b&&b()};const R=()=>{const{minutes:r,seconds:i}=Ph.toMinutesSeconds(M),a=1!==r?"mins":"min",o=1!==i?"secs":"sec";return t(n,{children:[e(U,{}),e(Ah,{children:"Time left:"}),t(Ih,{children:[r," ",a," ",String(i).padStart(2,"0")," ",o]})]})};if(void 0!==typeof window)return T||0===M?t(_h,Object.assign({className:i},x,{children:[e("div",{ref:E}),e(Eh,Object.assign({"data-testid":m,"data-id":"countdown-wrapper",ref:w,inert:A?void 0:"",$visible:A,$warn:M<=d},{children:R()})),w.current&&!A&&(()=>{var t,n;const r=null!==(t=null==h?void 0:h.left)&&void 0!==t?t:"left"===s?D:void 0,i=null!==(n=null==h?void 0:h.right)&&void 0!==n?n:"right"===s?Math.floor(document.body.clientWidth-O):void 0;return e(Nh,Object.assign({"data-testid":m,"data-id":"fixed-countdown-wrapper",$warn:M<=d,$top:S,$left:r,$right:i},{children:R()}))})()]})):e(n,{})},Wh=r=>i=>{switch(r){case"maintenance":return t(n,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const r=i,a=Math.floor(r.secondsLeft/60),o=r.secondsLeft%60;return t(n,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",a," minutes"," ",o," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var Vh;!function(e){e.imgAttributeHelper=e=>{const{base:t,md:n,lg:r,width:i,height:a}=e;return{srcSet:`${t} 400w, ${n} 800w, ${r} 1200w`,src:r,sizes:`(max-width: ${bl.mobileL}px) 400px, (max-width: ${bl.tablet}px) 800px, 1200px`,width:i,height:a}}}(Vh||(Vh={}));const{imgAttributeHelper:Yh}=Vh,Uh={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},Kh={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},Xh=Object.assign(Object.assign({},Uh),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),qh=Object.assign(Object.assign({},Uh),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Gh=e=>new Map([["400",{img:Yh(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Yh(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Yh(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Yh(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Yh(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Yh(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Yh(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Yh(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Yh(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Yh(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Yh(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Yh(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Yh(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:Wh("inactivity")}],["maintenance",{img:Yh(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:Wh("maintenance")}],["no-item-found",{img:Yh(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Yh(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Yh(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Yh(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Yh(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Yh(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]),Zh=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Qh=M.img`
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
`,Jh=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,ep=M(Il.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,tp=M.div`
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
`,np=M(cc.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${yl.MaxWidth.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,rp=n=>{var{type:r,img:i,title:a,description:o,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=n,u=lt(n,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const h=A(),p=((e,t)=>{switch(t){case"bookingsg":return Gh(Kh).get(e);case"ccube":return Gh(Xh).get(e);case"mylegacy":return Gh(qh).get(e);default:return Gh(Uh).get(e)}})(r,d||(h||Ec).resourceScheme),f=u["data-testid"]||"error-display",g=()=>{switch(r){case"maintenance":{const e=l;return l&&e.dateString?p.renderDescription(e):o||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?p.renderDescription(e):o||void 0}default:return o||void 0}};if(!p)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},p),i&&{img:i}),a&&{title:a}),g()&&{description:g()});return t(Zh,Object.assign({},u,{"data-testid":f},{children:[e(Qh,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?t(Jh,{children:[m.title&&("string"==typeof m.title?e(ep,Object.assign({"data-testid":`${f}--title`,"data-id":"error-display-title",weight:"semibold"},{children:m.title})):m.title),m.description&&e(tp,Object.assign({"data-testid":`${f}--description`,"data-id":"error-display-description"},{children:"string"==typeof m.description?e("p",{children:m.description}):m.description}))]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e(np,Object.assign({},t))})()]}))},ip=ml.Neutral[5],ap=ml.Neutral[1],op=M.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${ip};
    border-radius: 0.5rem;

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,sp=M.div`
    flex: 1;
`,lp=M.table`
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
`,cp=M.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`1px solid ${ip}`:"none"};
        }
    }
`,dp=M.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",n=e.$width?`${e.$width}px`:"100%";return E`
                position: fixed;
                left: ${t};
                width: ${n};
            `}return E`
                position: sticky;
                left: 0;
            `}};
`,up=M.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&`\n            transform: translateX(-0.5%) translateY(-2rem);\n            border-radius: 4px;\n            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);\n            width: 101%;\n            border: 1px solid ${ip};\n        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: 1px solid ${ip};
    border-radius: 0 0 4px 4px;
    background-color: ${oc.Table.Cell.Selected};
    transition: all 300ms ease;
`,hp=M.tr`
    background-color: ${oc.Table.Header};
    height: 6rem;
    border-bottom: 1px solid ${ip};
`,pp=M.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${ap};
    border-bottom: 1px solid ${ip};
    ${e=>{if(e.$isCheckbox)return E`
                width: 4rem;
            `}};
`,fp=M.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${ml.Neutral[1]};
        margin-left: 0.5rem;
    }
`,gp=M.tr`
    background-color: ${e=>e.$isSelected?E`
                ${oc.Table.Cell.Selected};
            `:e.$alternating?E`
                ${oc.Table.Cell.Primary};
            `:E`
                ${oc.Table.Cell.Secondary};
            `};
    border-top: 1px solid ${ip};
    &:hover {
        ${e=>{if(!e.$isSelected&&e.$isSelectable)return E`
                    background-color: ${oc.Table.Cell.Hover};
                `}};
    }
`,mp=M.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${ap};
    border-bottom: 1px solid ${ip};
`,bp=M(Il.Body)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`,vp=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,yp=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,xp=M(rp)`
    h3,
    button {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }
`,wp=M.td`
    padding: 4rem 0;
`,$p=r=>{var{id:i,headers:s,rows:l,className:c,sortIndicators:d,alternatingRows:h,loadState:p="success",enableMultiSelect:g,selectedIds:m,disabledIds:b,enableActionBar:v,enableSelectAll:y,enableStickyHeader:x,emptyView:w,actionBarContent:$,renderCustomEmptyView:S,onHeaderClick:k,onSelect:O,onSelectAll:C,onClearSelectionClick:D}=r,j=lt(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const T=a(null),_=a(null),M=a(null),E=a(null),N=a(null),[A,I]=o(!1),[B,P]=o(!1),[L,F]=o(!1),[R,z]=o(!1),[H,W]=o(!1),{ref:V,inView:Y}=Th(),U=f((()=>{if(!N.current||!E.current)return;const e=N.current.scrollHeight>N.current.clientHeight;I(e),e?E.current.style.transform="translateY(0)":ne()}),[]);u((()=>{U()}),[]),ln({onResize:U});Td("scroll",(()=>{requestAnimationFrame((()=>{A?te():ne()})),N.current&&F(N.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),u((()=>{re()}),[l]);const q=()=>(null==m?void 0:m.length)===l.length,G=e=>!!(null==m?void 0:m.includes(e)),Z=e=>!!h&&e%2==1,Q=e=>!!(null==b?void 0:b.includes(e)),J=e=>{if(j["data-testid"])return`${j["data-testid"]}-${e}`},ee=()=>s.length+(g?1:0),te=()=>{if(!N.current)return;const e=N.current.getBoundingClientRect();z(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},ne=()=>{if(!(T.current&&_.current&&N.current&&E.current&&M.current))return;const e=_.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,n=T.current.getBoundingClientRect().height-M.current.clientHeight-32,r=Math.min(t,n);E.current.style.transform=`translateY(-${r}px)`}else E.current.style.transform="translateY(0)"},re=()=>{T.current&&N.current&&W(T.current.clientHeight+(v?56:0)<N.current.clientHeight)},ie=n=>{const{fieldKey:r,label:i,clickable:a=!1,style:o}="string"==typeof n?{fieldKey:n,label:n,style:void 0}:n;return e(pp,Object.assign({"data-testid":J(`header-${r}`),$clickable:a,onClick:()=>a&&(null==k?void 0:k(r)),style:o,$isCheckbox:!1},{children:t(fp,{children:["string"==typeof i?e(Il.H4,Object.assign({weight:"bold"},{children:i})):i,ae(r)]})}),r)},ae=t=>{const r=null==d?void 0:d[t];return r?"asc"===r?e(K,{"data-testid":J(`header-${t}-arrowup`)}):e(X,{"data-testid":J(`header-${t}-arrowdown`)}):e(n,{})},oe=()=>e(pp,Object.assign({"data-testid":J("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e(vp,{children:y&&e(eh,{displaySize:"small",checked:q(),indeterminate:m&&0!==m.length&&!q(),onClick:()=>{C&&C(q())}})})})),se=(t,n)=>{const r="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,a=n.id.toString(),o=n[i],s=`${a}-${i}`;return e(mp,Object.assign({"data-testid":J(`row-${s}`),style:r,$isCheckbox:!1},{children:"string"==typeof o||"number"==typeof o?e(bp,{children:o}):"function"==typeof o?o(n,{isSelected:G(a)}):o}),s)},le=t=>e(mp,Object.assign({"data-testid":J(`row-${t}-selection`),$isCheckbox:!0},{children:e(vp,{children:e(eh,{displaySize:"small",checked:G(t),onClick:()=>{O&&O(t,!G(t))},disabled:Q(t)})})})),ce=()=>e(xp,Object.assign({type:"no-item-found"},w,{title:(null==w?void 0:w.title)?"string"==typeof w.title?e(Il.H3,{children:w.title}):w.title:e(Il.H3,{children:"No <items> found"}),description:(null==w?void 0:w.description)?w.description:"No matching rows"}));return t(op,Object.assign({id:i||"table-wrapper","data-testid":j["data-testid"]||"table",className:c,ref:N,onScroll:()=>{A&&N.current&&P(N.current.scrollTop+N.current.clientHeight>=N.current.scrollHeight)}},{children:[e(sp,{children:t(lp,Object.assign({$end:L,$scrollable:A,ref:T,$stickyHeader:x},{children:[e("thead",Object.assign({ref:M},{children:t(hp,{children:[g&&oe(),s.map(ie)]})})),e(cp,Object.assign({$showLastRowBottomBorder:H},{children:"success"===p?!l||l.length<1?e("tr",{children:e(wp,Object.assign({colSpan:ee()},{children:S?S():ce()}))}):e(n,{children:null==l?void 0:l.map(((e,n)=>t(gp,Object.assign({"data-testid":J(`row-${e.id.toString()}`),$alternating:Z(n),$isSelectable:g,$isSelected:G(e.id.toString())},{children:[g&&le(e.id.toString()),s.map((t=>se(t,e)))]}),e.id.toString())))}):e("tr",{children:e("td",Object.assign({colSpan:ee()},{children:e(yp,{children:"loading"===p&&e(Fc,{})})}))})}))]}))}),v&&m&&m.length>0&&(()=>{var n,r,i;return e(dp,Object.assign({ref:E,$fixed:R,$left:null===(r=null===(n=null==T?void 0:T.current)||void 0===n?void 0:n.getBoundingClientRect())||void 0===r?void 0:r.left,$width:null===(i=null==T?void 0:T.current)||void 0===i?void 0:i.clientWidth},{children:t(up,Object.assign({$float:(A?!B:!Y)||R,$scrollable:A},{children:[e(Il.H5,Object.assign({weight:"semibold"},{children:`${m.length} item${m.length>1?"s":""} selected`})),e(cc.Small,Object.assign({styleType:"link",onClick:D},{children:"Clear selection"})),$]}))}))})(),e("div",{ref:e=>{_.current=e,V(e)}})]}))},Sp=e=>"small"===e?2.5:3,kp=M.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Sp(e.$variant);return E`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Op=E`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Sp(e.$variant)}rem - 2px);
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
`,Cp=M.button`
    ${Op}
    cursor: pointer;
`,Dp=M.div`
    ${Op}
`,jp=N`
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
`,Tp=M.div`
    position: relative;
    border: 1px solid ${ml.Neutral[5]};
    border-radius: ${"4px"};
    background: ${ml.Neutral[8]};

    :focus-within {
        border: 1px solid ${ml.Accent.Light[1]};
        box-shadow: ${oc.InputBoxShadow};
    }

    ${e=>e.expanded?E`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:E`
                animation: ${jp} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?E`
                background: ${ml.Neutral[6](e)};

                ${Cp} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ml.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?E`
                border: none;
                background: transparent !important;

                ${Cp} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?E`
                border: 1px solid ${ml.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ml.Validation.Red.Border(e)};
                    box-shadow: ${oc.InputErrorBoxShadow};
                }
            `:void 0}
`;M.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Fl.Base};
    margin-left: 1rem;
`,M(pe)`
    color: ${ml.Neutral[3]};
    ${e=>{let t=jl.Body.fontSize;return"small"===e.$variant&&(t=jl.BodySmall.fontSize),E`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`;const _p=M.div`
    height: 1px;
    background: ${ml.Neutral[5]};
    margin: 0 0.5rem;
`,Mp=M.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return E`
                color: ${ml.Neutral[3]};
            `}}
`,Ep=M.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return E`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Np=M(Ep)`
    color: ${ml.Neutral[3]};
`,Ap=({children:t,show:n,error:r,disabled:i,testId:o,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=a();return Td("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e(kp,Object.assign({className:c,$variant:d},{children:e(Tp,Object.assign({ref:u,error:r&&!n,disabled:i,$readOnly:l,expanded:n,"data-testid":o},{children:t}))}))};var Ip;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ip||(Ip={}));const Bp=()=>{const[e,t]=o(void 0),n=me();return u((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Ip.Change,e),n.events.emit(Ip.Ready),()=>n.events.off(Ip.Change,e)}),[n]),e},Pp=M.div`
    display: flex;
    flex-direction: column;
`,Lp=e=>"right"===e?"bottom-end":"bottom-start",Fp=({enabled:r,isOpen:i,onOpen:o,onClose:s,onDismiss:l,renderElement:c,renderDropdown:d,customZIndex:u,clickToToggle:h=!1,offset:p=0,alignment:f="left",fitAvailableHeight:g})=>{var m;const b=a(null),v=a(null),{width:y}=ln({targetRef:b,handleHeight:!1}),x={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<xl.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:w,floatingStyles:$,context:S}=be({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==l||l():e&&!i?null==o||o():!e&&i&&(null==s||s(n))},whileElementsMounted:ve,placement:Lp(f),middleware:[ye(p),xe(),we({limiter:$e()}),Se({apply({availableHeight:e}){v.current&&Object.assign(v.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}}),x]}),k=Bp(),{isMounted:O,styles:C}=ke(S,{initial:{opacity:0},open:{opacity:1},duration:300}),D=Oe(S,{enabled:r,toggle:h}),j=Ce(S,{enabled:r}),{getReferenceProps:T,getFloatingProps:_}=De([D,j]);return t(n,{children:[e("div",Object.assign({ref:e=>{b.current=e,w.setReference(e)}},T(),{children:c()})),O&&e(je,{children:e(Te,Object.assign({context:S,modal:!1,initialFocus:v,returnFocus:!1},{children:e("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},$),{zIndex:null!==(m=null!=u?u:k)&&void 0!==m?m:50})},_(),{children:e(Pp,Object.assign({ref:v,style:Object.assign({},C),inert:C.opacity<1?"":void 0},{children:d({elementWidth:y})}))}))}))})]})},Rp=E`
    border: 1px solid ${ml.Accent.Light[1]};
    box-shadow: ${oc.InputBoxShadow};
`,zp=E`
    border: 1px solid ${ml.Accent.Light[1]};
    box-shadow: none;
`,Hp=E`
    border: 1px solid ${ml.Neutral[5]};
    box-shadow: none;
`,Wp=E`
    border: 1px solid ${ml.Validation.Red.Border};
    box-shadow: ${oc.InputErrorBoxShadow};
`,Vp=M.div`
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    background: ${ml.Neutral[8]};

    :focus-within {
        ${Rp}
    }
    ${e=>e.$focused&&Rp}

    ${e=>e.$readOnly?E`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${zp}
                }
                ${e.$focused&&zp}
            `:e.$disabled?E`
                background: ${ml.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Hp}
                }
                ${e.$focused&&Hp}
            `:e.$error?E`
                border: 1px solid ${ml.Validation.Red.Border};

                :focus-within {
                    ${Wp}
                }
                ${e.$focused&&Wp}
            `:void 0}
`,Yp=M(Vp)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Up=M.input`
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
`,Kp=M.button`
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
`,Xp=M.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,qp=M.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return E`
                ${Gp}, ${ef} {
                    color: ${ml.Neutral[4]};
                }
            `}}
`,Gp=M(Up)`
    background: transparent;
    text-align: center;
`,Zp=M(Gp)`
    width: 2rem;
    margin-right: 0.25rem;
`,Qp=M(Gp)`
    width: 2.5rem;
`,Jp=M(Gp)`
    width: 3rem;
    margin-left: 0.25rem;
`,ef=M(Il.Body)`
    ${e=>{if(e.$inactive)return E`
                color: ${ml.Neutral[3](e)};
            `}}
`,tf=M.div`
    ${Al.getTextStyle("Body","regular")}
    background-color: ${ml.Neutral[8]};
    color: ${ml.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?E`
                background-color: ${ml.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?E`
                display: none;
            `:void 0}
`;od.extend(ld);const nf=i.forwardRef((({disabled:n,readOnly:r,names:i,value:s,focused:l,hoverValue:c,placeholder:d,label:h,onChange:p,onFocus:f,onBlur:g,hideInputKeyboard:m},v)=>{const y=m?"none":"numeric",[x,w,$]=Ad(""),[S,k,O]=Ad(""),[C,D,j]=Ad(""),[T,_]=o("none"),[M,E]=o(!1),N=a(null),A=a(null),I=a(null),B=a(null),[P,L,F]=Y(c);u((()=>{const[e="",t="",n=""]=Y(s);w(e),k(t),D(n),e||t||n||!N.current.contains(document.activeElement)||A.current.focus()}),[s]),u((()=>{l||_("none"),l&&(E(!0),N.current.contains(document.activeElement)||A.current.focus())}),[l]),b(v,(()=>({ref:N,resetPlaceholder(){E(!1)},resetInput(){const[e="",t="",n=""]=Y(s);w(e),k(t),D(n)}})),[s]);const R=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},z=e=>{e.target.select();const t=e.target.name;_(t)},H=e=>{const[t,n,r]=i,a={[t]:$.current,[n]:O.current,[r]:j.current},o=e.target.name,s=a[o],l=o!==r?Dd.padValue(s,!0):s;switch(o){case t:a[t]=l,w(l);break;case n:a[n]=l,k(l)}const c=`${a[r]}-${a[n]}-${a[t]}`,d=od(c,"YYYY-MM-DD",!0).isValid(),u=!a[t]&&!a[n]&&!a[r];d&&s!==l&&p(c),N.current.contains(e.relatedTarget)||(_("none"),null==g||g(u||d))},W=e=>{if(c)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:x,month:S,year:C};switch(t){case i[0]:r.day=n,w(n),2===n.length&&I.current.focus();break;case i[1]:r.month=n,k(n),2===n.length&&B.current.focus();break;case i[2]:r.year=n,D(n)}if(!r.day&&!r.month&&!r.year)return void p("");const a=`${r.year}-${r.month}-${r.day}`;od(a,"YYYY-MM-DD",!0).isValid()&&p(a)},V=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(T===i[1]&&0===S.length&&A.current.focus(),T===i[2]&&0===C.length&&I.current.focus())};function Y(e){if(e){const t=od(new Date(e));return t.isValid()?[Dd.padValue(t.date().toString()),Dd.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return t(Xp,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(E(!0),N.current.contains(document.activeElement)||A.current.focus())},onFocus:e=>{n||(E(!0),l||null==f||f(e))}},{children:[t(qp,Object.assign({ref:N,$hover:!!c},{children:[e(Zp,{ref:A,name:i[0],maxLength:2,value:null!=P?P:x,onFocus:z,onBlur:H,onChange:W,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:T!==i[0]||r?"DD":""}),e(ef,Object.assign({$inactive:0===x.length},{children:"/"})),e(Qp,{ref:I,name:i[1],maxLength:2,value:null!=L?L:S,onFocus:z,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:T!==i[1]||r?"MM":""}),e(ef,Object.assign({$inactive:0===S.length},{children:"/"})),e(Jp,{ref:B,name:i[2],maxLength:4,value:null!=F?F:C,onFocus:z,onBlur:H,onChange:W,onKeyDown:V,type:"text",inputMode:y,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:T!==i[2]||r?"YYYY":""})]})),(()=>{if(!s&&!r&&d)return e(tf,Object.assign({$hide:M,$disabled:n,onMouseDown:R},{children:d}))})()]}))})),rf=M(Yp)`
    height: 3rem;
`,af=t=>{var{minDate:n,maxDate:r,disabled:i,disabledDates:s,error:l,hideInputKeyboard:c,value:d,onChange:h,onFocus:p,onBlur:f,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x}=t,w=lt(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[$,S]=o(Od.sanitizeInput(d)),[k,O]=o(Od.sanitizeInput(d)),[C,D]=o(void 0),[j,T]=o(!1),[_,M]=o(!1),E=a(null),N=a();u((()=>{const e=Od.sanitizeInput(d);S(e),O(e)}),[d]);const A=e=>{!y&&Od.isDateDisabled(e,{disabledDates:s,minDate:n,maxDate:r})||(O(e),m||(R(e),S(e),e&&T(!1)))},I=e=>{O(e),m||(R(e),S(e),e&&(E.current.focus(),T(!1)),C&&D(void 0))},B=()=>{b||i||(T(!0),_||(M(!0),p&&p()))},P=e=>{!_||j||E.current.contains(e.relatedTarget)||(N.current.resetInput(),O($),M(!1),z())},L=e=>{D(e)},F=e=>{switch(e){case"reset":O($);break;case"confirmed":S(k),R(k)}E.current.focus(),T(!1)},R=e=>{h&&h(e)},z=()=>{f&&f()};return e(Fp,{enabled:!b&&!i,isOpen:j,renderElement:()=>e(rf,Object.assign({tabIndex:-1,ref:E,onBlur:P,onFocus:B,$disabled:i,$readOnly:b,$focused:_,$error:l,id:v,"data-testid":w["data-testid"]},w,{children:e(nf,{ref:N,disabled:i,onChange:A,readOnly:b,focused:j,names:["start-day","start-month","start-year"],value:k,hoverValue:C,hideInputKeyboard:c})})),renderDropdown:({elementWidth:t})=>e(Uu,{type:"input",variant:"single",initialCalendarDate:k,withButton:m,value:k,disabledDates:s,minDate:n,maxDate:r,allowDisabledSelection:y,onHover:L,onSelect:I,onDismiss:F,onYearMonthDisplayChange:g,width:t}),onClose:()=>{N.current.resetInput(),O($),T(!1),M(!1),z()},onDismiss:()=>{N.current.resetInput(),E.current.focus(),O($),T(!1)},customZIndex:x,offset:16})},of=M($l)`
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
`,sf=M.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${ml.Neutral[7]};
    border-radius: 0.25rem;
`,lf=M(cc.Default)`
    color: ${e=>e.$enableDateClick?ml.Primary:ml.Neutral[1]};
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
            background-color: ${ml.Neutral[7]};
            :hover {
                cursor: default;
            }
        `}
`,cf=n=>{var{selectedDate:r,minDate:i,maxDate:a,loading:s,showDateAsShortForm:l,showCurrentDateAsToday:c,onLeftArrowClick:d,onRightArrowClick:u,onCalendarDateSelect:h}=n,p=lt(n,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const f=kd.toDayjs(r),g=kd.toDayjs(r).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),m=kd.isSame(r,od())&&c?"Today":f.format(l?"ddd":"dddd"),[b,v]=o(!1),y=e=>{h&&h(e),v(!b)},x=()=>{v(!1),d(r)},w=()=>{v(!1),u(r)};return e(Fp,{enabled:!s,isOpen:b,renderElement:()=>t(sf,Object.assign({},p,{children:[e(of,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:s||!!i&&(vd.isDisabledDay(f,void 0,i)||kd.isSame(f,i)),focusHighlight:!1,focusOutline:"browser","aria-label":"Previous day",onClick:x},{children:e(Kd,{})})),e(lf,Object.assign({onClick:()=>!!h&&!s&&v(!b),$enableDateClick:!!h&&!s,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!h||s},{children:`${g}, ${m}`})),e(of,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:s||!!a&&(vd.isDisabledDay(f,void 0,void 0,a)||kd.isSame(f,a)),focusHighlight:!1,focusOutline:"browser","aria-label":"Next day",onClick:w},{children:e(Xd,{})}))]})),renderDropdown:({elementWidth:t})=>e(Uu,{type:"input",variant:"single",initialCalendarDate:r,value:r,minDate:i,maxDate:a,onSelect:y,width:t}),onDismiss:()=>v(!1),onClose:()=>v(!1),offset:8})},df=M.div`
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
`,uf=M.div`
    width: 100%; // Force next flex item to break to next line
`,hf=M.div`
    display: flex;
    flex: 1;
    align-items: center;
`,pf=M(q)`
    color: ${ml.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,ff=M.div`
    position: absolute;
    background: ${e=>e.$error?ml.Validation.Red.Border(e):ml.Primary(e)};
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
`,gf=({children:n,currentActive:r,error:i,className:a,wrap:o})=>{const[s,l]=n;return t(df,Object.assign({className:a,$wrap:o},{children:[e(hf,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),e(pf,{}),o&&e(uf,{}),e(hf,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),e(ff,{"data-id":"range-container-indicator",$position:r,$error:i,$wrap:o})]}))},mf=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},bf=M(Yp)`
    ${e=>e.$wrap&&E`
            padding: 0.75rem 1rem;
        `}
`,vf=M.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&E`
            height: fit-content;
        `}
`,yf={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},xf=n=>{var{minDate:r,maxDate:i,disabled:s,disabledDates:l,error:c,hideInputKeyboard:d,value:h,valueEnd:p,onChange:g,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:S,id:k,allowDisabledSelection:O,zIndex:C}=n,D=lt(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[j,T]=o(),[_,M]=o(void 0),[E,N]=o(!1),[A,I]=o(!1),B="week"===w,P="fixed-range"===w,[{selectedStart:L,selectedEnd:F,currentFocus:R,calendarOpen:z,isStartDirty:H,isEndDirty:W,focused:V},Y]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[i,a]=x(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&mf(n,e,t),a({type:e,payload:t})}])))]})({name:"date-range-input",initialState:yf,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:B?"none":P?"start":t,calendarOpen:!S,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=a(!1),K=a(),X=a(),q=a(),G=a(),Z=(({maxWidth:e,targetRef:t})=>{const[n,r]=o(!1);return ln({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:f((t=>{r(t<=e)}),[e])}),n})({maxWidth:320,targetRef:K});u((()=>{Y.resetRange({start:Od.sanitizeInput(h),end:Od.sanitizeInput(p)})}),[h,p]),u((()=>{"start"===R?T(L):"end"===R&&T(F)}),[R]);const Q=e=>{"Enter"!==e.code||y||(L&&F?(Y.done({start:L,end:F}),null==g||g(L,F)):(Y.dismiss(),K.current.focus(),q.current.resetPlaceholder(),G.current.resetPlaceholder()))},J=e=>{if(he(e))return void(U.current=!0);if(Y.changeStart(e),X.current.setCalendarDate(e),U.current=!1,!e)return void(y||F||!W||(Y.resetRange({start:"",end:""}),null==g||g("","")));if(!F)return void Y.focus("end");if(od(e).isAfter(F,"day"))Y.reselectEnd();else{if(W)return y?void 0:(Y.done({start:e,end:F}),void(null==g||g(e,F)));Y.focus("end")}},ee=e=>{if(he(e))return void(U.current=!0);if(od(e).isBefore(L,"day"))return Y.changeStart(e),X.current.setCalendarDate(e),void Y.reselectEnd();if(Y.changeEnd(e),X.current.setCalendarDate(e),e){if(L)return y?void 0:(Y.done({start:L,end:e}),void(null==g||g(L,e)));Y.focus("start")}else y||L||!H||(Y.resetRange({start:"",end:""}),null==g||g("",""))},te=e=>{if(he(e))return void(U.current=!0);if(Y.changeStart(e),X.current.setCalendarDate(e),U.current=!1,!e)return void(y?Y.changeEnd(""):(Y.resetRange({start:"",end:""}),null==g||g("","")));const t=od(e).format("YYYY-MM-DD"),n=od(t).add($-1,"day").format("YYYY-MM-DD");return Y.changeStart(t),Y.changeEnd(n),U.current=!1,y?void 0:(Y.done({start:t,end:n}),void(null==g||g(t,n)))},ne=()=>{S||s||V||(Y.focus("start"),null==m||m())},re=e=>{!V||z||K.current.contains(e.relatedTarget)||(Y.blur(),N(!1),I(!1),q.current.resetPlaceholder(),G.current.resetPlaceholder(),null==b||b())},ie=e=>t=>{t.stopPropagation(),S||(Y.focus(e),ae(),oe(),V||null==m||m())},ae=()=>{if(B){const e=kd.toDayjs(L).startOf("week").format("YYYY-MM-DD");N(!0),I(!0),T(e)}},oe=()=>{P&&(I(!0),T(L))},se=e=>{e&&!U.current||(Y.resetStart(),q.current.resetInput())},le=e=>{e&&!U.current||(Y.resetEnd(),G.current.resetInput())},ce=e=>{switch(w){case"week":(e=>{const t=od(e).startOf("week").format("YYYY-MM-DD"),n=od(e).endOf("week").format("YYYY-MM-DD");if(Y.changeStart(t),Y.changeEnd(n),U.current=!1,!y)Y.done({start:t,end:n}),null==g||g(t,n)})(e);break;case"fixed-range":te(e);break;default:"start"===R?J(e):"end"===R&&ee(e)}},de=e=>{switch(K.current.focus(),e){case"reset":Y.cancel();break;case"confirmed":Y.done({start:L,end:F}),null==g||g(L,F)}},ue=e=>{M(e)},he=e=>!O&&e&&Od.isDateDisabled(e,{disabledDates:l,minDate:r,maxDate:i}),pe=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===R?_:void 0,end:"end"===R?_:void 0};break;case"week":if(!_)return;t={start:od(_).startOf("week").format("YYYY-MM-DD"),end:od(_).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!_)return;t={start:od(_).format("YYYY-MM-DD"),end:od(_).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Fp,{enabled:!S&&!s,isOpen:z,onClose:()=>{Y.blur(),N(!1),I(!1),q.current.resetPlaceholder(),G.current.resetPlaceholder(),null==b||b()},onDismiss:()=>{Y.dismiss(),K.current.focus(),q.current.resetPlaceholder(),G.current.resetPlaceholder()},renderElement:()=>e(bf,Object.assign({ref:K,tabIndex:-1,onFocus:ne,onBlur:re,$focused:V,$disabled:s,$readOnly:S,$error:c,$wrap:Z,id:k,"data-testid":D["data-testid"],onKeyDown:Q},D,{children:t(gf,Object.assign({currentActive:R,wrap:Z,error:c},{children:[e(vf,Object.assign({$wrap:Z},{children:e(nf,{ref:q,placeholder:"From",names:["start-day","start-month","start-year"],value:L,disabled:s,readOnly:E||S,focused:"start"===R,hoverValue:pe("start"),onChange:P?te:J,onFocus:ie("start"),onBlur:se,hideInputKeyboard:d})})),e(vf,Object.assign({$wrap:Z},{children:e(nf,{ref:G,placeholder:"To",names:["end-day","end-month","end-year"],value:F,disabled:s,readOnly:A||S,focused:"end"===R,hoverValue:pe("end"),onChange:ee,onFocus:ie("end"),onBlur:le,hideInputKeyboard:d})}))]}))})),renderDropdown:({elementWidth:t})=>e(Uu,{ref:X,type:"input",variant:w,initialCalendarDate:j,withButton:y,value:L,endValue:F,selectWithinRange:H||W,currentFocus:R,disabledDates:l,minDate:r,maxDate:i,allowDisabledSelection:O,onSelect:ce,onDismiss:de,onHover:ue,onYearMonthDisplayChange:v,numberOfDays:$,width:t}),customZIndex:C,offset:16})},wf=M.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:a,$mobileSpan:o}=e;return E`
            grid-column: ${t||"auto"} / span ${n||1};

            ${yl.MaxWidth.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${yl.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${o||1};
            }
        `}}
`,$f=i.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=t,o=lt(t,["mobileCols","tabletCols","desktopCols"]);return e(wf,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=Sf(a||i||r),o=Sf(e),s=Sf(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),Sf=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},kf=()=>e=>{let t;t=e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ml.Neutral[5](e);const n=encodeURIComponent(t),r=e.$thickness||1;return E`
        background-color: transparent;
        height: ${r}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${r}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${r+1}" stroke-dasharray="4 4" /></svg>');
    `},Of=M.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return E`
                    ${kf}
                `;case"solid":return E`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||ml.Neutral[5]};
                `}}}
`,Cf=t=>{var{thickness:n=1,lineStyle:r="solid",layoutType:i="flex",color:a,className:o,mobileCols:s=4,tabletCols:l=8,desktopCols:c=12}=t,d=lt(t,["thickness","lineStyle","layoutType","color","className","mobileCols","tabletCols","desktopCols"]);switch(i){case"flex":return e(Of,Object.assign({className:o,$thickness:n,$lineStyle:r,$color:a},d));case"grid":return e($f,Object.assign({className:o,mobileCols:s,tabletCols:l,desktopCols:c},d,{children:e(Of,{$thickness:n,$lineStyle:r,$color:a})}))}},Df=M.div`
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
`,jf=M.div`
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
`,Tf=({show:t=!1,rootId:n,onOverlayClick:r,children:s,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:d=!1,enableOverlayClick:h=!1,zIndex:p,id:f})=>{const[g,m]=o(null),[b,v]=o(),[y]=o((()=>Cd.generate())),x=Me(),w=a(),$=a(null),S=s&&i.cloneElement(s,{ref:$}),k=f?`lifesg-ds-overlay-root-${f}`:"lifesg-ds-overlay-root",O=null!=p?p:b?99999:99998;(e=>{const t=me();u((()=>{if(!t)return;const n={zIndex:e};t.events.emit(Ip.Change,n)}),[t,e]),u((()=>{if(!t)return;const n=()=>{const n={zIndex:e};t.events.emit(Ip.Change,n)};return null==t||t.events.on(Ip.Ready,n),()=>null==t?void 0:t.events.off(Ip.Ready,n)}),[t,e])})(O),u((()=>(_(),m(j()),()=>{A(),E().length<1&&M("remove")})),[]),u((()=>{if(t){const e=T();D(e),N();const t=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(t)}{A();const e=setTimeout((()=>{E().length<1&&M("remove")}),200);return()=>clearTimeout(e)}}),[t]);const D=e=>{w.current=e,v(e)},j=()=>document&&n?document.getElementById(n):document?document.body:null,T=()=>E().length>0,_=()=>{if(!document.getElementById(Mf)){const e=document.createElement("style");e.id=Mf;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Ef} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ef}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},M=e=>{const t=document.body.classList.contains(Ef);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Ef):document.body.classList.add(Ef)},E=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},N=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},I=e=>{var t;const n=null===(t=$.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&h&&(e.preventDefault(),r())};return g?C.createPortal(e(Df,Object.assign({id:k,"data-testid":k,$show:t,$zIndex:O},{children:s&&e(Ee,Object.assign({id:x},{children:e(jf,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:l||(b?.5:.8),$backgroundBlur:c,$disableTransition:d,onClick:I},{children:S}))}))})),g):null},_f=t=>e(_e,{children:e(Tf,Object.assign({},t))}),Mf="lifesg-ds-overlay-stylesheet",Ef="lifesg-ds-overlay-open",Nf=M.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${ml.Neutral[8]};
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
`,Af=M.div`
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
`,If=M($l)`
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
`,Bf=M(Il.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Pf=M.div`
    flex: 1;
    overflow-y: auto;
`,Lf=n=>{var{children:r,heading:i,show:s,onClose:l,onOverlayClick:c}=n,d=lt(n,["children","heading","show","onClose","onOverlayClick"]);const[h,p]=o(s),[f]=o((()=>Cd.generate())),g=a();u((()=>{if(!s){const e=setTimeout((()=>p(!1)),500);return()=>clearTimeout(e)}p(!0)}),[s]);return e(_f,Object.assign({show:h,enableOverlayClick:!0,onOverlayClick:c},{children:t(Nf,Object.assign({$show:s,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":f,onTransitionEnd:e=>{"visibility"===e.propertyName&&s&&g.current.focus()}},d,{children:[t(Af,{children:[e(Bf,Object.assign({id:f,ref:g,tabIndex:-1},{children:i})),e(If,Object.assign({"aria-label":"Close drawer",onClick:l,focusHighlight:!1},{children:e(Ae,{"aria-hidden":!0})}))]}),e(Pf,{children:r})]}))}))},Ff=({className:t,progress:n,color:r,"data-testid":i})=>e(Rf,Object.assign({className:t,$innerWidth:n,$color:r,"data-testid":i},{children:e("progress",{value:100*n,max:100})})),Rf=M.div`
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

    ${e=>{const{$color:t}=e;let n;return n=t&&"string"==typeof t?t:t?t(e):ml.Accent.Light[1](e),E`
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
`,zf=M.button`
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
                    background-color: ${ml.Neutral[8]};
                    border: 1px solid ${ml.Primary};
                    color: ${ml.Primary};
                `;case"light":return E`
                    background-color: ${ml.Neutral[8]};
                    border: 1px solid ${ml.Neutral[5]};
                    color: ${ml.Primary};
                `;default:return E`
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
`,Hf=i.forwardRef(((t,n)=>{var{"data-testid":r,styleType:i="primary",children:a,sizeType:o="default",type:s="button"}=t,l=lt(t,["data-testid","styleType","children","sizeType","type"]);return e(zf,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:o,$styleType:i},l,{children:a}))})),Wf=M.div`
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
`,Vf=t=>{var{id:n="modal",show:r,animationFrom:i="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:h=!0}=t,p=lt(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[f,g]=o(),[m,b]=o();u((()=>window.visualViewport?(y(),window.visualViewport.addEventListener("resize",y),()=>{window.visualViewport.removeEventListener("resize",y)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),u((()=>{var e,t;r&&h&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;g(e)},y=()=>{const e=.01*window.visualViewport.height;g(e),b(window.visualViewport.offsetTop)};return e(_f,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:s,onOverlayClick:d,id:n,rootId:l,zIndex:c},{children:e(Wf,Object.assign({show:r,animationFrom:i,"data-testid":n,verticalHeight:f,offsetTop:m},p,{children:a}))}))},Yf=M.div`
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
`,Uf=M($l)`
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
`,Kf=n=>{var{id:r="modal-box",children:i,onClose:a,showCloseButton:o=!0}=n,s=lt(n,["id","children","onClose","showCloseButton"]);return t(Yf,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[o&&e(Uf,Object.assign({onClick:a,"data-testid":"close-button",focusHighlight:!1},{children:e(Ae,{})})),i]}))},Xf=Object.assign(Vf,{Box:Kf}),qf=` ${yl.MaxWidth.mobileL}, (orientation: landscape) and (max-height: ${xl.mobileL}px)`,Gf=`@media(orientation: landscape) and (max-height: ${xl.mobileL}px)`,Zf=M.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(ml.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${ml.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,Qf=M(cc.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,Jf=M(Hf)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,eg=M.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`,tg=M.div`
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
`,ng=M(Il.H6)`
    margin-top: 1rem;
`,rg=M(Xf)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,ig=M.div`
    width: 100%;
    margin: auto;
    padding: 5rem 1.25rem;

    ${qf} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,ag=M(Xf.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${qf} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`,og=M.h4`
    ${Al.getTextStyle("H4","semibold")}
    margin-bottom: 1rem;
    color: ${ml.Neutral[1]};
    text-align: center;

    ${qf} {
        ${Al.getTextStyle("H5","semibold")}
        margin: 0.75rem 0;
    }
`,sg=M.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${qf} {
        border-radius: 0;
        flex: 1;
    }

    ${Gf} {
        background: ${ml.Neutral[7]};
    }
`,lg=M.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${ml.Neutral[6]};
    margin: auto;

    ${qf} {
        aspect-ratio: 4/3;
    }
    ${yl.MaxWidth.mobileL} {
        width: 100%;
        height: auto;
    }
    ${Gf} {
        width: auto;
        height: 100%;
    }
`,cg=M.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${ml.Neutral[4]};
    pointer-events: none;

    ${qf} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`,dg=M.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${Gf} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,ug=M(cc.Default)`
    width: 8.5rem;
    ${yl.MaxWidth.mobileL} {
        width: 100%;
    }
    ${Gf} {
        height: 2.5rem;
    }
`,hg=M.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,pg=M.canvas`
    cursor: crosshair;
`,fg=v((()=>ct(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.74a82c7f.js")).ESignatureCanvas}})))),gg=r=>{const{description:i,id:s,loadingProgress:l,loadingLabel:c="Uploading...",onChange:d,value:h}=r,p=lt(r,["description","id","loadingProgress","loadingLabel","onChange","value"]),[f,g]=o(!1),m=a(null),[b,v]=o(h),x=Vc.useMediaQuery({maxWidth:xl.mobileL}),w=()=>{m.current.clear()},$=()=>{const e=m.current.export();v(e),g(!1),null==d||d(e)};u((()=>{v(h)}),[h]);return t("div",Object.assign({},p,{children:[e(Zf,{children:isNaN(l)?b?t(n,{children:[e(eg,{src:b,alt:"Signature preview"}),e(Jf,Object.assign({styleType:"light",onClick:()=>g(!0),id:s,"aria-label":"Edit signature"},{children:e(G,{})}))]}):e(Qf,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:s,onClick:()=>g(!0)},{children:"Add signature"})):t(tg,{children:[c&&e(Il.BodySmall,{children:c}),e(Ff,{progress:l,"data-testid":`${s||"e-signature"}-progress-bar`})]})}),e(rg,Object.assign({"data-testid":"signature-modal",show:f},{children:e(ig,{children:t(ag,Object.assign({onClose:()=>g(!1)},{children:[e(og,{children:"Signature"}),e(sg,{children:t(lg,{children:[e(cg,{}),e(y,Object.assign({fallback:null},{children:f&&e(fg,{ref:m,baseImageDataURL:b})}))]})}),t(dg,{children:[e(ug,Object.assign({as:Vd.Default,type:"button",styleType:x?"light":"link",icon:e(Z,{}),onClick:w},{children:"Clear"})),e(ug,Object.assign({type:"button",onClick:$},{children:"Save"}))]})]}))})})),i?e(ng,Object.assign({weight:"regular",as:"p"},{children:i})):null]}))},mg="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",bg="Submit",vg="Rate your experience",yg=5,xg=M.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,wg=E`
    width: 2.75rem;
    height: 2.75rem;
    color: ${ml.Primary};
    ${xg}:focus-visible + & {
        outline: 0.125rem solid ${ml.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,$g=M(Ie)`
    ${wg}
`,Sg=M(Be)`
    ${wg}
`,kg=M.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,Og=M.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,Cg=n=>{const{description:r,rating:i,onRatingChange:a}=n,o=t=>{const n=`${t} star${1===t?"":"s"}`;return e(t<=i?Sg:$g,{"aria-label":n})};return e(Og,Object.assign({role:"radiogroup","aria-label":r},{children:[...Array(yg)].map(((n,r)=>{const s=r+1;return t(kg,{children:[e(xg,{type:"radio",name:"star",checked:s===i,onChange:()=>(e=>{a(e)})(s)}),o(s)]},s)}))}))},Dg=M.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,jg=M.div`
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
`,Tg=M.div`
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
`,_g=M(cc.Default)`
    margin-top: 1rem;
    width: 100%;
`,Mg=n=>{const{imgSrc:r,buttonLabel:i,description:a,rating:o,onRatingChange:s,onSubmit:l}=n,c=lt(n,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),d=null!=r?r:mg,u=null!=a?a:vg;return t(jg,Object.assign({},c,{children:[d&&e(Dg,{"data-testid":"feedback-banner-image",src:d,alt:"",onError:e=>e.currentTarget.style.display="none"}),t(Tg,{children:[e(Il.H3,Object.assign({weight:"semibold"},{children:u})),e(Cg,{description:u,rating:o,onRatingChange:s}),e(_g,Object.assign({disabled:!o,onClick:l,type:"button"},{children:null!=i?i:bg}))]})]}))},Eg=M.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border){const t=encodeURIComponent(ml.Neutral[5](e));return E`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${yl.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `}}}
`,Ng=M.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,Ag=M(Il.H4)`
    margin-bottom: 0.5rem;
`,Ig=M.div`
    color: ${ml.Neutral[1]};
    ${gc({textSize:"Body"})}
`,Bg=M(Il.BodySmall)`
    margin-bottom: 0;
    color: ${ml.Neutral[3]};
`,Pg=M.div`
    color: ${ml.Neutral[3]};
    ${gc({textSize:"BodySmall"})}
`,Lg=M.ul`
    list-style-type: none;
`;var Fg;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(Fg||(Fg={}));const Rg=({src:t,alt:n,className:r,"data-testid":i})=>e("img",{src:t,alt:n||"",className:r,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),zg=M.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: 1rem;
    }
`,Hg=M.div`
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
`,Wg=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return E`
                ${yl.MaxWidth.mobileL} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,Vg=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,Yg=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,Ug=M.div`
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
`,Kg=M(Il.BodySmall)`
    ${yl.MaxWidth.mobileL} {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: normal;
    }
`;M(Kg)`
    margin-top: 0.25rem;
`;const Xg=M(Il.XSmall)`
    font-size: 0.875rem !important;
    color: ${ml.Validation.Red.Text};
`,qg=M(Xg)`
    margin-top: 0.25rem;
    ${yl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,Gg=M(Xg)`
    display: none;
    visibility: hidden;
    ${yl.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,Zg=M(nc)`
    ${e=>{let t=ml.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ml.Neutral[3](e);break;default:t=ml.Neutral[8](e)}return E`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Qg=M.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        width: fit-content;
        margin-left: 1rem;
    }
`,Jg=M(Hf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,em=M.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    ${yl.MaxWidth.mobileL} {
        margin-right: 1rem;
    }
`,tm=M(Rg)`
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
`,nm=w((({fileItem:r,onDownload:i})=>{const{id:s,name:l,size:c,errorMessage:d,thumbnailImageDataUrl:h,truncateText:p=!0,ready:f=!0}=r,[g,m]=o(!1),[b,v]=o(!1),y=Fg.formatFileSizeDisplay(c),x=Vc.useMediaQuery({maxWidth:xl.mobileL}),[w,$]=o(),S=a();u((()=>{S.current&&$(x?k(l):l)}),[l,x]);const k=e=>{if(!p)return e;const t=S&&S.current?S.current.getBoundingClientRect().width:0;return Dd.truncateTwoLines(e,t,16,1.5)},O=()=>t(n,{children:[e(Kg,Object.assign({weight:"regular",ref:S},{children:w})),b&&e(qg,Object.assign({weight:"semibold"},{children:d||"Something went wrong"}))]});return e(zg,Object.assign({"data-testid":s},{children:t(Hg,Object.assign({onClick:()=>ct(void 0,void 0,void 0,(function*(){if(f&&!g){m(!0);try{v(!1),yield i(r)}catch(e){v(!0)}finally{m(!1)}}}))},{children:[(()=>{let r;return r=t(n,h?{children:[e(em,Object.assign({"data-testid":`${s}-thumbnail`},{children:e(tm,{"data-testid":`${s}-thumbnail-image`,src:h})})),t(Yg,{children:[e(Vg,{children:O()}),e(Ug,{children:e(Kg,{children:y||"-"})}),b&&e(Gg,Object.assign({weight:"semibold"},{children:d||"Something went wrong"}))]})]}:{children:[e(Vg,{children:O()}),e(Ug,{children:e(Kg,{children:y||"-"})}),b&&e(Gg,Object.assign({weight:"semibold"},{children:d||"Something went wrong"}))]}),e(Wg,Object.assign({$hasThumbnail:!!h},{children:r}))})(),e(Qg,{children:e(Jg,Object.assign({"data-testid":`${s}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${l}`},{children:g||!f?e(Zg,{$buttonStyle:"light",$buttonSizeStyle:"small",size:16,"aria-hidden":!0}):e(Q,{"aria-hidden":!0})}))})]}))}))})),rm=({id:n,fileItems:r,title:i,description:a,onDownload:o,"data-testid":s,className:l,styleType:c="bordered"})=>{const d=e=>ct(void 0,void 0,void 0,(function*(){o&&(yield o(e))}));return t(Eg,Object.assign({id:n?`${n}-file-download`:"file-download",className:l,"data-testid":s,$border:"bordered"===c},{children:[(i||a)&&t(Ng,{children:[i?"string"==typeof i?e(Ag,Object.assign({weight:"regular"},{children:i})):e(Ig,{children:i}):null,a?"string"==typeof a?e(Bg,Object.assign({weight:"regular"},{children:a})):e(Pg,{children:a}):null]}),e(Lg,{children:r&&r.length>0&&r.map((t=>e(nm,{fileItem:t,onDownload:d},t.id)))})]}))},im=$({activeId:void 0,setActiveId:void 0});var am,om={exports:{}},sm={exports:{}},lm={};var cm,dm,um,hm,pm,fm,gm,mm,bm,vm,ym,xm,wm,$m,Sm={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function km(){return dm||(dm=1,"production"===process.env.NODE_ENV?sm.exports=function(){if(am)return lm;am=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:switch(e=e.type){case l:case c:case r:case a:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case f:case p:case o:return e;default:return h}}case n:return h}}}function x(e){return y(e)===c}return lm.AsyncMode=l,lm.ConcurrentMode=c,lm.ContextConsumer=s,lm.ContextProvider=o,lm.Element=t,lm.ForwardRef=d,lm.Fragment=r,lm.Lazy=f,lm.Memo=p,lm.Portal=n,lm.Profiler=a,lm.StrictMode=i,lm.Suspense=u,lm.isAsyncMode=function(e){return x(e)||y(e)===l},lm.isConcurrentMode=x,lm.isContextConsumer=function(e){return y(e)===s},lm.isContextProvider=function(e){return y(e)===o},lm.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},lm.isForwardRef=function(e){return y(e)===d},lm.isFragment=function(e){return y(e)===r},lm.isLazy=function(e){return y(e)===f},lm.isMemo=function(e){return y(e)===p},lm.isPortal=function(e){return y(e)===n},lm.isProfiler=function(e){return y(e)===a},lm.isStrictMode=function(e){return y(e)===i},lm.isSuspense=function(e){return y(e)===u},lm.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===a||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},lm.typeOf=y,lm}():sm.exports=(cm||(cm=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var h=e.$$typeof;switch(h){case t:var g=e.type;switch(g){case l:case c:case r:case a:case i:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case f:case p:case o:return m;default:return h}}case n:return h}}}var x=l,w=c,$=s,S=o,k=t,O=d,C=r,D=f,j=p,T=n,_=a,M=i,E=u,N=!1;function A(e){return y(e)===c}Sm.AsyncMode=x,Sm.ConcurrentMode=w,Sm.ContextConsumer=$,Sm.ContextProvider=S,Sm.Element=k,Sm.ForwardRef=O,Sm.Fragment=C,Sm.Lazy=D,Sm.Memo=j,Sm.Portal=T,Sm.Profiler=_,Sm.StrictMode=M,Sm.Suspense=E,Sm.isAsyncMode=function(e){return N||(N=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||y(e)===l},Sm.isConcurrentMode=A,Sm.isContextConsumer=function(e){return y(e)===s},Sm.isContextProvider=function(e){return y(e)===o},Sm.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Sm.isForwardRef=function(e){return y(e)===d},Sm.isFragment=function(e){return y(e)===r},Sm.isLazy=function(e){return y(e)===f},Sm.isMemo=function(e){return y(e)===p},Sm.isPortal=function(e){return y(e)===n},Sm.isProfiler=function(e){return y(e)===a},Sm.isStrictMode=function(e){return y(e)===i},Sm.isSuspense=function(e){return y(e)===u},Sm.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===a||e===i||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Sm.typeOf=y}()),Sm)),sm.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function Om(){if(hm)return um;hm=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return um=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(r,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))t.call(a,c)&&(s[c]=a[c]);if(e){o=e(a);for(var d=0;d<o.length;d++)n.call(a,o[d])&&(s[o[d]]=a[o[d]])}}return s},um}function Cm(){if(fm)return pm;fm=1;return pm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Dm(){return mm?gm:(mm=1,gm=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var jm=km();om.exports=function(){if(xm)return ym;xm=1;var e=km(),t=Om(),n=Cm(),r=Dm(),i=function(){if(vm)return bm;vm=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=Cm(),n={},r=Dm();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,a,o,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(r(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+o+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](a,c,s,o,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+o+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in n)){n[d.message]=!0;var h=l?l():"";e("Failed "+o+" type: "+d.message+(null!=h?h:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},bm=i}(),a=function(){};function o(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),ym=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",h={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(o),arrayOf:function(e){return g((function(t,r,i,a,o){if("function"!=typeof e)return new f("Property `"+o+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new f("Invalid "+a+" `"+o+"` of type `"+y(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,a,o+"["+l+"]",n);if(c instanceof Error)return c}return null}))},element:g((function(e,t,n,r,i){var a=e[t];return s(a)?null:new f("Invalid "+r+" `"+i+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(t,n,r,i,a){var o=t[n];return e.isValidElementType(o)?null:new f("Invalid "+i+" `"+a+"` of type `"+y(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||u;return new f("Invalid "+i+" `"+a+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:g((function(e,t,n,r,i){return v(e[t])?null:new f("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,i,a,o,s){if("function"!=typeof e)return new f("Property `"+s+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var l=t[i],c=y(l);if("object"!==c)return new f("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+a+"`, expected an object.");for(var d in l)if(r(l,d)){var u=e(l,d,a,o,s+"."+d,n);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,n,r,i,a){for(var o=t[n],s=0;s<e.length;s++)if(p(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new f("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),o)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),o;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(i)+" at index "+t+"."),o}return g((function(t,i,a,o,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,a,o,s,n);if(null==d)return null;d.data&&r(d.data,"expectedType")&&l.push(d.data.expectedType)}return new f("Invalid "+o+" `"+s+"` supplied to `"+a+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,i,a,o){var s=t[r],l=y(s);if("object"!==l)return new f("Invalid "+a+" `"+o+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(i,a,o,c,x(d));var u=d(s,c,i,a,o+"."+c,n);if(u)return u}return null}))},exact:function(e){return g((function(i,a,o,s,l){var c=i[a],d=y(c);if("object"!==d)return new f("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+o+"`, expected `object`.");var u=t({},i[a],e);for(var h in u){var p=e[h];if(r(e,h)&&"function"!=typeof p)return b(o,s,l,h,x(p));if(!p)return new f("Invalid "+s+" `"+l+"` key `"+h+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(i[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,h,o,s,l+"."+h,n);if(g)return g}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,o,s,c,d,h,p){if(c=c||u,h=h||s,p!==n){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&r<3&&(a("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,r++)}}return null==o[s]?i?null===o[s]?new f("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new f("The "+d+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(o,s,c,d,h)}var o=i.bind(null,!1);return o.isRequired=i.bind(null,!0),o}function m(e){return g((function(t,n,r,i,a,o){var s=t[n];return y(s)!==e?new f("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,i){return new f((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e[d]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!v(n.value))return!1}else for(;!(n=r.next()).done;){var i=n.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,h.checkPropTypes=i,h.resetWarningCache=i.resetWarningCache,h.PropTypes=h,h},ym}()(jm.isElement,!0)}else om.exports=function(){if($m)return wm;$m=1;var e=Cm();function t(){}function n(){}return n.resetWarningCache=t,wm=function(){function r(t,n,r,i,a,o){if(o!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return r}r.isRequired=r;var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a}}()();var Tm=Wa(om.exports),_m=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Mm(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=_m.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var Em=[".DS_Store","Thumbs.db"];function Nm(e){return"object"==typeof e&&null!==e}function Am(e){return Lm(e.target.files).map((function(e){return Mm(e)}))}function Im(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return Mm(e)}))]}}))}))}function Bm(e,t){return ct(this,void 0,void 0,(function(){var n;return dt(this,(function(r){switch(r.label){case 0:return e.items?(n=Lm(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(Fm))]):[3,2];case 1:return[2,Pm(Rm(r.sent()))];case 2:return[2,Pm(Lm(e.files).map((function(e){return Mm(e)})))]}}))}))}function Pm(e){return e.filter((function(e){return-1===Em.indexOf(e.name)}))}function Lm(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function Fm(e){if("function"!=typeof e.webkitGetAsEntry)return zm(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Wm(t):zm(e)}function Rm(e){return e.reduce((function(e,t){return ht(ht([],ut(e),!1),ut(Array.isArray(t)?Rm(t):[t]),!1)}),[])}function zm(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=Mm(t);return Promise.resolve(n)}function Hm(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){return[2,e.isDirectory?Wm(e):Vm(e)]}))}))}function Wm(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function i(){var a=this;t.readEntries((function(t){return ct(a,void 0,void 0,(function(){var a,o,s;return dt(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return a=l.sent(),e(a),[3,4];case 3:return o=l.sent(),n(o),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(Hm)),r.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function Vm(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=Mm(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var Ym=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",i=(e.type||"").toLowerCase(),a=i.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?a===t.replace(/\/.*$/,""):i===t}))}return!0};function Um(e){return function(e){if(Array.isArray(e))return Qm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Zm(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Km(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xm(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Km(Object(n),!0).forEach((function(t){qm(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Km(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function qm(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||Zm(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Zm(e,t){if(e){if("string"==typeof e)return Qm(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qm(e,t):void 0}}function Qm(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Jm=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},eb=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},tb=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},nb={code:"too-many-files",message:"Too many files"};function rb(e,t){var n="application/x-moz-file"===e.type||Ym(e,t);return[n,n?null:Jm(t)]}function ib(e,t,n){if(ab(e.size))if(ab(t)&&ab(n)){if(e.size>n)return[!1,eb(n)];if(e.size<t)return[!1,tb(t)]}else{if(ab(t)&&e.size<t)return[!1,tb(t)];if(ab(n)&&e.size>n)return[!1,eb(n)]}return[!0,null]}function ab(e){return null!=e}function ob(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function sb(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function lb(e){e.preventDefault()}function cb(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return!ob(e)&&t&&t.apply(void 0,[e].concat(r)),ob(e)}))}}function db(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function ub(e){return/^.*\.[\w]+$/.test(e)}var hb=["children"],pb=["open"],fb=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],gb=["refKey","onChange","onClick"];function mb(e){return function(e){if(Array.isArray(e))return yb(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||vb(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function bb(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||vb(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function vb(e,t){if(e){if("string"==typeof e)return yb(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?yb(e,t):void 0}}function yb(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function wb(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xb(Object(n),!0).forEach((function(t){$b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xb(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sb(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var kb=p((function(e,t){var n=e.children,r=Db(Sb(e,hb)),a=r.open,o=Sb(r,pb);return b(t,(function(){return{open:a}}),[a]),i.createElement(S,null,n(wb(wb({},o),{},{open:a})))}));kb.displayName="Dropzone";var Ob={disabled:!1,getFilesFromEvent:function(e){return ct(this,void 0,void 0,(function(){return dt(this,(function(t){return Nm(e)&&Nm(e.dataTransfer)?[2,Bm(e.dataTransfer,e.type)]:function(e){return Nm(e)&&Nm(e.target)}(e)?[2,Am(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,Im(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};kb.defaultProps=Ob,kb.propTypes={children:Tm.func,accept:Tm.objectOf(Tm.arrayOf(Tm.string)),multiple:Tm.bool,preventDropOnDocument:Tm.bool,noClick:Tm.bool,noKeyboard:Tm.bool,noDrag:Tm.bool,noDragEventsBubbling:Tm.bool,minSize:Tm.number,maxSize:Tm.number,maxFiles:Tm.number,disabled:Tm.bool,getFilesFromEvent:Tm.func,onFileDialogCancel:Tm.func,onFileDialogOpen:Tm.func,useFsAccessApi:Tm.bool,autoFocus:Tm.bool,onDragEnter:Tm.func,onDragLeave:Tm.func,onDragOver:Tm.func,onDrop:Tm.func,onDropAccepted:Tm.func,onDropRejected:Tm.func,onError:Tm.func,validator:Tm.func};var Cb={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Db(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=wb(wb({},Ob),e),n=t.accept,r=t.disabled,i=t.getFilesFromEvent,o=t.maxSize,s=t.minSize,l=t.multiple,c=t.maxFiles,d=t.onDragEnter,h=t.onDragLeave,p=t.onDragOver,g=t.onDrop,b=t.onDropAccepted,v=t.onDropRejected,y=t.onFileDialogCancel,w=t.onFileDialogOpen,$=t.useFsAccessApi,S=t.autoFocus,k=t.preventDropOnDocument,O=t.noClick,C=t.noKeyboard,D=t.noDrag,j=t.noDragEventsBubbling,T=t.onError,_=t.validator,M=m((function(){return function(e){if(ab(e))return Object.entries(e).reduce((function(e,t){var n=Gm(t,2),r=n[0],i=n[1];return[].concat(Um(e),[r],Um(i))}),[]).filter((function(e){return db(e)||ub(e)})).join(",")}(n)}),[n]),E=m((function(){return function(e){return ab(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Gm(e,2),n=t[0],r=t[1],i=!0;return db(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(r)&&r.every(ub)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var n=Gm(t,2),r=n[0],i=n[1];return Xm(Xm({},e),{},qm({},r,i))}),{})}]:e}(n)}),[n]),N=m((function(){return"function"==typeof w?w:Tb}),[w]),A=m((function(){return"function"==typeof y?y:Tb}),[y]),I=a(null),B=a(null),P=bb(x(jb,Cb),2),L=P[0],F=P[1],R=L.isFocused,z=L.isFileDialogActive,H=a("undefined"!=typeof window&&window.isSecureContext&&$&&"showOpenFilePicker"in window),W=function(){!H.current&&z&&setTimeout((function(){B.current&&(B.current.files.length||(F({type:"closeDialog"}),A()))}),300)};u((function(){return window.addEventListener("focus",W,!1),function(){window.removeEventListener("focus",W,!1)}}),[B,z,A,H]);var V=a([]),Y=function(e){I.current&&I.current.contains(e.target)||(e.preventDefault(),V.current=[])};u((function(){return k&&(document.addEventListener("dragover",lb,!1),document.addEventListener("drop",Y,!1)),function(){k&&(document.removeEventListener("dragover",lb),document.removeEventListener("drop",Y))}}),[I,k]),u((function(){return!r&&S&&I.current&&I.current.focus(),function(){}}),[I,S,r]);var U=f((function(e){T?T(e):console.error(e)}),[T]),K=f((function(e){e.preventDefault(),e.persist(),oe(e),V.current=[].concat(mb(V.current),[e.target]),sb(e)&&Promise.resolve(i(e)).then((function(t){if(!ob(e)||j){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,i=e.maxSize,a=e.multiple,o=e.maxFiles,s=e.validator;return!(!a&&t.length>1||a&&o>=1&&t.length>o)&&t.every((function(e){var t=Gm(rb(e,n),1)[0],a=Gm(ib(e,r,i),1)[0],o=s?s(e):null;return t&&a&&!o}))}({files:t,accept:M,minSize:s,maxSize:o,multiple:l,maxFiles:c,validator:_});F({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return U(e)}))}),[i,d,U,j,M,s,o,l,c,_]),X=f((function(e){e.preventDefault(),e.persist(),oe(e);var t=sb(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&p&&p(e),!1}),[p,j]),q=f((function(e){e.preventDefault(),e.persist(),oe(e);var t=V.current.filter((function(e){return I.current&&I.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),V.current=t,t.length>0||(F({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),sb(e)&&h&&h(e))}),[I,h,j]),G=f((function(e,t){var n=[],r=[];e.forEach((function(e){var t=bb(rb(e,M),2),i=t[0],a=t[1],l=bb(ib(e,s,o),2),c=l[0],d=l[1],u=_?_(e):null;if(i&&c&&!u)n.push(e);else{var h=[a,d];u&&(h=h.concat(u)),r.push({file:e,errors:h.filter((function(e){return e}))})}})),(!l&&n.length>1||l&&c>=1&&n.length>c)&&(n.forEach((function(e){r.push({file:e,errors:[nb]})})),n.splice(0)),F({acceptedFiles:n,fileRejections:r,type:"setFiles"}),g&&g(n,r,t),r.length>0&&v&&v(r,t),n.length>0&&b&&b(n,t)}),[F,l,M,s,o,c,g,b,v,_]),Z=f((function(e){e.preventDefault(),e.persist(),oe(e),V.current=[],sb(e)&&Promise.resolve(i(e)).then((function(t){ob(e)&&!j||G(t,e)})).catch((function(e){return U(e)})),F({type:"reset"})}),[i,G,U,j]),Q=f((function(){if(H.current){F({type:"openDialog"}),N();var e={multiple:l,types:E};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){G(e,null),F({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(A(e),F({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?U(e):(H.current=!1,B.current?(B.current.value=null,B.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else B.current&&(F({type:"openDialog"}),N(),B.current.value=null,B.current.click())}),[F,N,A,$,G,U,E,l]),J=f((function(e){I.current&&I.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),Q()))}),[I,Q]),ee=f((function(){F({type:"focus"})}),[]),te=f((function(){F({type:"blur"})}),[]),ne=f((function(){O||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?Q():setTimeout(Q,0))}),[O,Q]),re=function(e){return r?null:e},ie=function(e){return C?null:re(e)},ae=function(e){return D?null:re(e)},oe=function(e){j&&e.stopPropagation()},se=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,i=e.role,a=e.onKeyDown,o=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,h=e.onDrop,p=Sb(e,fb);return wb(wb($b({onKeyDown:ie(cb(a,J)),onFocus:ie(cb(o,ee)),onBlur:ie(cb(s,te)),onClick:re(cb(l,ne)),onDragEnter:ae(cb(c,K)),onDragOver:ae(cb(d,X)),onDragLeave:ae(cb(u,q)),onDrop:ae(cb(h,Z)),role:"string"==typeof i&&""!==i?i:"presentation"},n,I),r||C?{}:{tabIndex:0}),p)}}),[I,J,ee,te,ne,K,X,q,Z,C,D,r]),le=f((function(e){e.stopPropagation()}),[]),ce=m((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,i=e.onClick,a=Sb(e,gb);return wb(wb({},$b({accept:M,multiple:l,type:"file",style:{display:"none"},onChange:re(cb(r,Z)),onClick:re(cb(i,le)),tabIndex:-1},n,B)),a)}}),[B,n,l,Z,r]);return wb(wb({},L),{},{isFocused:R&&!r,getRootProps:se,getInputProps:ce,rootRef:I,inputRef:B,open:re(Q)})}function jb(e,t){switch(t.type){case"focus":return wb(wb({},e),{},{isFocused:!0});case"blur":return wb(wb({},e),{},{isFocused:!1});case"openDialog":return wb(wb({},Cb),{},{isFileDialogActive:!0});case"closeDialog":return wb(wb({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return wb(wb({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return wb(wb({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return wb({},Cb);default:return e}}function Tb(){}const _b=M.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border){const t=encodeURIComponent(ml.Neutral[5](e));return E`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${yl.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `}}}
`,Mb=M.input`
    display: none;
`,Eb=M.div`
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

    ${e=>{const t=encodeURIComponent(ml.Primary(e));return E`
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
            border-radius: 4px;
        `}}
`,Nb=M(Il.BodySmall)`
    color: ${ml.Primary};
    text-align: center;
`,Ab=M(Pe)`
    color: ${ml.Primary};
    height: 4rem;
    width: 4rem;
`,Ib=p((({children:n,accept:r,capture:i,multiple:o,id:s,className:l,name:c,border:d,disabled:u,onChange:h,"data-testid":p},f)=>{const g=a(),{getRootProps:m,isDragActive:v}=Db({onDrop:h,noClick:!0,disabled:u});b(f,(()=>Object.assign(Object.assign({},g.current),{openFileDialog:()=>{var e;g.current.value=null,null===(e=g.current)||void 0===e||e.click()}})));return t(_b,Object.assign({id:s,"data-testid":p||"dropzone",$border:d,className:l},m(),{children:[e(Mb,{type:"file",name:c,ref:g,tabIndex:-1,"aria-hidden":!0,accept:r,capture:i,multiple:o,"data-testid":p?`${p}-input`:"dropzone-input",onChange:e=>{e.target.files&&h(Array.from(e.target.files))}}),n,v&&t(Eb,{children:[e(Ab,{}),e(Nb,Object.assign({weight:"semibold"},{children:"Drop files here"}))]})]}))}));const Bb="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function Pb(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function Lb(e){return"nodeType"in e}function Fb(e){var t,n;return e?Pb(e)?e:Lb(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function Rb(e){const{Document:t}=Fb(e);return e instanceof t}function zb(e){return!Pb(e)&&e instanceof Fb(e).HTMLElement}function Hb(e){return e instanceof Fb(e).SVGElement}function Wb(e){return e?Pb(e)?e.document:Lb(e)?Rb(e)?e:zb(e)||Hb(e)?e.ownerDocument:document:document:document}const Vb=Bb?h:u;function Yb(e){const t=a(e);return Vb((()=>{t.current=e})),f((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}function Ub(e,t){void 0===t&&(t=[e]);const n=a(e);return Vb((()=>{n.current!==e&&(n.current=e)}),t),n}function Kb(e,t){const n=a();return m((()=>{const t=e(n.current);return n.current=t,t}),[...t])}function Xb(e){const t=Yb(e),n=a(null),r=f((e=>{e!==n.current&&(null==t||t(e,n.current)),n.current=e}),[]);return[n,r]}function qb(e){const t=a();return u((()=>{t.current=e}),[e]),t.current}let Gb={};function Zb(e,t){return m((()=>{if(t)return t;const n=null==Gb[e]?0:Gb[e]+1;return Gb[e]=n,e+"-"+n}),[e,t])}function Qb(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>{const r=Object.entries(n);for(const[n,i]of r){const r=t[n];null!=r&&(t[n]=r+e*i)}return t}),{...t})}}const Jb=Qb(1),ev=Qb(-1);function tv(e){if(!e)return!1;const{KeyboardEvent:t}=Fb(e.target);return t&&e instanceof t}function nv(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=Fb(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const rv=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[rv.Translate.toString(e),rv.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),iv="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function av(e){return e.matches(iv)?e:e.querySelector(iv)}const ov={display:"none"};function sv(e){let{id:t,value:n}=e;return i.createElement("div",{id:t,style:ov},n)}function lv(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return i.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}const cv=$(null);const dv={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},uv={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function hv(e){let{announcements:t=uv,container:n,hiddenTextDescribedById:r,screenReaderInstructions:a=dv}=e;const{announce:s,announcement:l}=function(){const[e,t]=o("");return{announce:f((e=>{null!=e&&t(e)}),[]),announcement:e}}(),c=Zb("DndLiveRegion"),[d,h]=o(!1);if(u((()=>{h(!0)}),[]),function(e){const t=g(cv);u((()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)}),[e,t])}(m((()=>({onDragStart(e){let{active:n}=e;s(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&s(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;s(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;s(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;s(t.onDragCancel({active:n,over:r}))}})),[s,t])),!d)return null;const p=i.createElement(i.Fragment,null,i.createElement(sv,{id:r,value:a.draggable}),i.createElement(lv,{id:c,announcement:l}));return n?T(p,n):p}var pv;function fv(){}function gv(e,t){return m((()=>({sensor:e,options:null!=t?t:{}})),[e,t])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(pv||(pv={}));const mv=Object.freeze({x:0,y:0});function bv(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function vv(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function yv(e){let{left:t,top:n,height:r,width:i}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t,y:n+r},{x:t+i,y:n+r}]}function xv(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}function wv(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){const n=t.width*t.height,r=e.width*e.height,i=o*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const $v=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const e of r){const{id:r}=e,a=n.get(r);if(a){const n=wv(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(vv)};function Sv(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:mv}function kv(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x})),{...t})}}const Ov=kv(1);const Cv={ignoreTransform:!1};function Dv(e,t){void 0===t&&(t=Cv);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=Fb(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;const{scaleX:i,scaleY:a,x:o,y:s}=r,l=e.left-o-(1-i)*parseFloat(n),c=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?e.width/i:e.width,u=a?e.height/a:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(n,t,r))}const{top:r,left:i,width:a,height:o,bottom:s,right:l}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:l}}function jv(e){return Dv(e,{ignoreTransform:!0})}function Tv(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(Rb(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!zb(i)||Hb(i))return n;if(n.includes(i))return n;const a=Fb(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=Fb(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const r=t[e];return"string"==typeof r&&n.test(r)}))}(i,a)&&n.push(i),function(e,t){return void 0===t&&(t=Fb(e).getComputedStyle(e)),"fixed"===t.position}(i,a)?n:r(i.parentNode)}(e):n}function _v(e){const[t]=Tv(e,1);return null!=t?t:null}function Mv(e){return Bb&&e?Pb(e)?e:Lb(e)?Rb(e)||e===Wb(e).scrollingElement?window:zb(e)?e:null:null:null}function Ev(e){return Pb(e)?e.scrollX:e.scrollLeft}function Nv(e){return Pb(e)?e.scrollY:e.scrollTop}function Av(e){return{x:Ev(e),y:Nv(e)}}var Iv;function Bv(e){return!(!Bb||!e)&&e===document.scrollingElement}function Pv(e){const t={x:0,y:0},n=Bv(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Iv||(Iv={}));const Lv={x:.2,y:.2};function Fv(e,t,n,r,i){let{top:a,left:o,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=Lv);const{isTop:c,isBottom:d,isLeft:u,isRight:h}=Pv(e),p={x:0,y:0},f={x:0,y:0},g=t.height*i.y,m=t.width*i.x;return!c&&a<=t.top+g?(p.y=Iv.Backward,f.y=r*Math.abs((t.top+g-a)/g)):!d&&l>=t.bottom-g&&(p.y=Iv.Forward,f.y=r*Math.abs((t.bottom-g-l)/g)),!h&&s>=t.right-m?(p.x=Iv.Forward,f.x=r*Math.abs((t.right-m-s)/m)):!u&&o<=t.left+m&&(p.x=Iv.Backward,f.x=r*Math.abs((t.left+m-o)/m)),{direction:p,speed:f}}function Rv(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function zv(e){return e.reduce(((e,t)=>Jb(e,Av(t))),mv)}const Hv=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Ev(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Nv(t)),0)}]];class Wv{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=Tv(t),r=zv(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of Hv)for(const a of t)Object.defineProperty(this,a,{get:()=>{const t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Vv{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function Yv(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var Uv,Kv;function Xv(e){e.preventDefault()}function qv(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(Uv||(Uv={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(Kv||(Kv={}));const Gv={start:[Kv.Space,Kv.Enter],cancel:[Kv.Esc],end:[Kv.Space,Kv.Enter]},Zv=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case Kv.Right:return{...n,x:n.x+25};case Kv.Left:return{...n,x:n.x-25};case Kv.Down:return{...n,y:n.y+25};case Kv.Up:return{...n,y:n.y-25}}};let Qv=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new Vv(Wb(t)),this.windowListeners=new Vv(Fb(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Uv.Resize,this.handleCancel),this.windowListeners.add(Uv.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(Uv.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=Dv),!e)return;const{top:n,left:r,bottom:i,right:a}=t(e);_v(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(mv)}handleKeyDown(e){if(tv(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=Gv,coordinateGetter:a=Zv,scrollBehavior:o="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:mv;this.referenceCoordinates||(this.referenceCoordinates=c);const d=a(e,{active:t,context:n.current,currentCoordinates:c});if(d){const t=ev(d,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:a,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:h}=Pv(n),p=Rv(n),f={x:Math.min(i===Kv.Right?p.right-p.width/2:p.right,Math.max(i===Kv.Right?p.left:p.left+p.width/2,d.x)),y:Math.min(i===Kv.Down?p.bottom-p.height/2:p.bottom,Math.max(i===Kv.Down?p.top:p.top+p.height/2,d.y))},g=i===Kv.Right&&!s||i===Kv.Left&&!l,m=i===Kv.Down&&!c||i===Kv.Up&&!a;if(g&&f.x!==d.x){const e=n.scrollLeft+t.x,a=i===Kv.Right&&e<=u.x||i===Kv.Left&&e>=h.x;if(a&&!t.y)return void n.scrollTo({left:e,behavior:o});r.x=a?n.scrollLeft-e:i===Kv.Right?n.scrollLeft-u.x:n.scrollLeft-h.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}if(m&&f.y!==d.y){const e=n.scrollTop+t.y,a=i===Kv.Down&&e<=u.y||i===Kv.Up&&e>=h.y;if(a&&!t.x)return void n.scrollTo({top:e,behavior:o});r.y=a?n.scrollTop-e:i===Kv.Down?n.scrollTop-u.y:n.scrollTop-h.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,Jb(ev(d,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Jv(e){return Boolean(e&&"distance"in e)}function ey(e){return Boolean(e&&"delay"in e)}Qv.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=Gv,onActivation:i}=t,{active:a}=n;const{code:o}=e.nativeEvent;if(r.start.includes(o)){const t=a.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class ty{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=Fb(e);return e instanceof t?e:Wb(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:a}=i;this.props=e,this.events=t,this.document=Wb(a),this.documentListeners=new Vv(this.document),this.listeners=new Vv(n),this.windowListeners=new Vv(Fb(a)),this.initialCoordinates=null!=(r=nv(i))?r:mv,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Uv.Resize,this.handleCancel),this.windowListeners.add(Uv.DragStart,Xv),this.windowListeners.add(Uv.VisibilityChange,this.handleCancel),this.windowListeners.add(Uv.ContextMenu,Xv),this.documentListeners.add(Uv.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(ey(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Jv(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Uv.Click,qv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Uv.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:a,options:{activationConstraint:o}}=i;if(!r)return;const s=null!=(t=nv(e))?t:mv,l=ev(r,s);if(!n&&o){if(Jv(o)){if(null!=o.tolerance&&Yv(l,o.tolerance))return this.handleCancel();if(Yv(l,o.distance))return this.handleStart()}return ey(o)&&Yv(l,o.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),a(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Kv.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const ny={move:{name:"pointermove"},end:{name:"pointerup"}};class ry extends ty{constructor(e){const{event:t}=e,n=Wb(t.target);super(e,ny,n)}}ry.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const iy={move:{name:"mousemove"},end:{name:"mouseup"}};var ay;!function(e){e[e.RightClick=2]="RightClick"}(ay||(ay={}));let oy=class extends ty{constructor(e){super(e,iy,Wb(e.event.target))}};oy.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==ay.RightClick&&(null==r||r({event:n}),!0)}}];const sy={move:{name:"touchmove"},end:{name:"touchend"}};class ly extends ty{constructor(e){super(e,sy)}static setup(){return window.addEventListener(sy.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(sy.move.name,e)};function e(){}}}var cy,dy;function uy(e){let{acceleration:t,activator:n=cy.Pointer,canScroll:r,draggingRect:i,enabled:o,interval:s=5,order:l=dy.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:h,delta:p,threshold:g}=e;const b=function(e){let{delta:t,disabled:n}=e;const r=qb(t);return Kb((e=>{if(n||!r||!e)return hy;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Iv.Backward]:e.x[Iv.Backward]||-1===i.x,[Iv.Forward]:e.x[Iv.Forward]||1===i.x},y:{[Iv.Backward]:e.y[Iv.Backward]||-1===i.y,[Iv.Forward]:e.y[Iv.Forward]||1===i.y}}}),[n,t,r])}({delta:p,disabled:!o}),[v,y]=function(){const e=a(null);return[f(((t,n)=>{e.current=setInterval(t,n)}),[]),f((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),x=a({x:0,y:0}),w=a({x:0,y:0}),$=m((()=>{switch(n){case cy.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case cy.DraggableRect:return i}}),[n,i,c]),S=a(null),k=f((()=>{const e=S.current;if(!e)return;const t=x.current.x*w.current.x,n=x.current.y*w.current.y;e.scrollBy(t,n)}),[]),O=m((()=>l===dy.TreeOrder?[...d].reverse():d),[l,d]);u((()=>{if(o&&d.length&&$){for(const e of O){if(!1===(null==r?void 0:r(e)))continue;const n=d.indexOf(e),i=h[n];if(!i)continue;const{direction:a,speed:o}=Fv(e,i,$,t,g);for(const e of["x","y"])b[e][a[e]]||(o[e]=0,a[e]=0);if(o.x>0||o.y>0)return y(),S.current=e,v(k,s),x.current=o,void(w.current=a)}x.current={x:0,y:0},w.current={x:0,y:0},y()}else y()}),[t,k,r,y,o,s,JSON.stringify($),JSON.stringify(b),v,d,O,h,JSON.stringify(g)])}ly.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(cy||(cy={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(dy||(dy={}));const hy={x:{[Iv.Backward]:!1,[Iv.Forward]:!1},y:{[Iv.Backward]:!1,[Iv.Forward]:!1}};var py,fy;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(py||(py={})),function(e){e.Optimized="optimized"}(fy||(fy={}));const gy=new Map;function my(e,t){return Kb((n=>e?n||("function"==typeof t?t(e):e):null),[t,e])}function by(e){let{callback:t,disabled:n}=e;const r=Yb(t),i=m((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(r)}),[n]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}function vy(e){return new Wv(Dv(e),e)}function yy(e,t,n){void 0===t&&(t=vy);const[r,i]=x((function(r){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=r?r:n)?i:null;const a=t(e);if(JSON.stringify(r)===JSON.stringify(a))return r;return a}),null),a=function(e){let{callback:t,disabled:n}=e;const r=Yb(t),i=m((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(r)}),[r,n]);return u((()=>()=>null==i?void 0:i.disconnect()),[i]),i}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){i();break}}}}),o=by({callback:i});return Vb((()=>{i(),e?(null==o||o.observe(e),null==a||a.observe(document.body,{childList:!0,subtree:!0})):(null==o||o.disconnect(),null==a||a.disconnect())}),[e]),r}const xy=[];function wy(e,t){void 0===t&&(t=[]);const n=a(null);return u((()=>{n.current=null}),t),u((()=>{const t=e!==mv;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?ev(e,n.current):mv}function $y(e){return m((()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null),[e])}const Sy=[];function ky(e){let{measure:t}=e;const[n,r]=o(null),i=f((e=>{for(const{target:n}of e)if(zb(n)){r((e=>{const r=t(n);return e?{...e,width:r.width,height:r.height}:r}));break}}),[t]),a=by({callback:i}),s=f((e=>{const n=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return zb(t)?t:e}(e);null==a||a.disconnect(),n&&(null==a||a.observe(n)),r(n?t(n):null)}),[t,a]),[l,c]=Xb(s);return m((()=>({nodeRef:l,rect:n,setRef:c})),[n,l,c])}const Oy=[{sensor:ry,options:{}},{sensor:Qv,options:{}}],Cy={current:{}},Dy={draggable:{measure:jv},droppable:{measure:jv,strategy:py.WhileDragging,frequency:fy.Optimized},dragOverlay:{measure:Dv}};class jy extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const Ty={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new jy,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:fv},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Dy,measureDroppableContainers:fv,windowRect:null,measuringScheduled:!1},_y=$({activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:fv,draggableNodes:new Map,over:null,measureDroppableContainers:fv}),My=$(Ty);function Ey(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new jy}}}function Ny(e,t){switch(t.type){case pv.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case pv.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case pv.DragEnd:case pv.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case pv.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new jy(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case pv.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const o=new jy(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case pv.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const a=new jy(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function Ay(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:i}=g(_y),a=qb(r),o=qb(null==n?void 0:n.id);return u((()=>{if(!t&&!r&&a&&null!=o){if(!tv(a))return;if(document.activeElement===a.target)return;const e=i.get(o);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame((()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=av(e);if(t){t.focus();break}}}))}}),[r,t,i,o,a]),null}const Iy=$({...mv,scaleX:1,scaleY:1});var By;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(By||(By={}));const Py=w((function(e){var t,n,r,s;let{id:l,accessibility:c,autoScroll:d=!0,children:h,sensors:p=Oy,collisionDetection:g=$v,measuring:b,modifiers:v,...y}=e;const w=x(Ny,void 0,Ey),[$,S]=w,[k,O]=function(){const[e]=o((()=>new Set)),t=f((t=>(e.add(t),()=>e.delete(t))),[e]);return[f((t=>{let{type:n,event:r}=t;e.forEach((e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)}))}),[e]),t]}(),[C,D]=o(By.Uninitialized),T=C===By.Initialized,{draggable:{active:_,nodes:M,translate:E},droppable:{containers:N}}=$,A=_?M.get(_):null,I=a({initial:null,translated:null}),B=m((()=>{var e;return null!=_?{id:_,data:null!=(e=null==A?void 0:A.data)?e:Cy,rect:I}:null}),[_,A]),P=a(null),[L,F]=o(null),[R,z]=o(null),H=Ub(y,Object.values(y)),W=Zb("DndDescribedBy",l),V=m((()=>N.getEnabled()),[N]),Y=function(e){return m((()=>({draggable:{...Dy.draggable,...null==e?void 0:e.draggable},droppable:{...Dy.droppable,...null==e?void 0:e.droppable},dragOverlay:{...Dy.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(b),{droppableRects:U,measureDroppableContainers:K,measuringScheduled:X}=function(e,t){let{dragging:n,dependencies:r,config:i}=t;const[s,l]=o(null),{frequency:c,measure:d,strategy:h}=i,p=a(e),g=function(){switch(h){case py.Always:return!1;case py.BeforeDragging:return n;default:return!n}}(),m=Ub(g),b=f((function(e){void 0===e&&(e=[]),m.current||l((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[m]),v=a(null),y=Kb((t=>{if(g&&!n)return gy;if(!t||t===gy||p.current!==e||null!=s){const t=new Map;for(let n of e){if(!n)continue;if(s&&s.length>0&&!s.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new Wv(d(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t}),[e,s,n,g,d]);return u((()=>{p.current=e}),[e]),u((()=>{g||b()}),[n,g]),u((()=>{s&&s.length>0&&l(null)}),[JSON.stringify(s)]),u((()=>{g||"number"!=typeof c||null!==v.current||(v.current=setTimeout((()=>{b(),v.current=null}),c))}),[c,g,b,...r]),{droppableRects:y,measureDroppableContainers:b,measuringScheduled:null!=s}}(V,{dragging:T,dependencies:[E.x,E.y],config:Y.droppable}),q=function(e,t){const n=null!==t?e.get(t):void 0,r=n?n.node.current:null;return Kb((e=>{var n;return null===t?null:null!=(n=null!=r?r:e)?n:null}),[r,t])}(M,_),G=m((()=>R?nv(R):null),[R]),Z=function(){const e=!1===(null==L?void 0:L.autoScrollEnabled),t="object"==typeof d?!1===d.enabled:!1===d,n=T&&!e&&!t;if("object"==typeof d)return{...d,enabled:n};return{enabled:n}}(),Q=function(e,t){return my(e,t)}(q,Y.draggable.measure);!function(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e;const o=a(!1),{x:s,y:l}="boolean"==typeof i?{x:i,y:i}:i;Vb((()=>{if(!s&&!l||!t)return void(o.current=!1);if(o.current||!r)return;const e=null==t?void 0:t.node.current;if(!e||!1===e.isConnected)return;const i=Sv(n(e),r);if(s||(i.x=0),l||(i.y=0),o.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){const t=_v(e);t&&t.scrollBy({top:i.y,left:i.x})}}),[t,s,l,r,n])}({activeNode:_?M.get(_):null,config:Z.layoutShiftCompensation,initialRect:Q,measure:Y.draggable.measure});const J=yy(q,Y.draggable.measure,Q),ee=yy(q?q.parentElement:null),te=a({activatorEvent:null,active:null,activeNode:q,collisionRect:null,collisions:null,droppableRects:U,draggableNodes:M,draggingNode:null,draggingNodeRect:null,droppableContainers:N,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ne=N.getNodeFor(null==(t=te.current.over)?void 0:t.id),re=ky({measure:Y.dragOverlay.measure}),ie=null!=(n=re.nodeRef.current)?n:q,ae=T?null!=(r=re.rect)?r:J:null,oe=Boolean(re.nodeRef.current&&re.rect),se=Sv(le=oe?null:J,my(le));var le;const ce=$y(ie?Fb(ie):null),de=function(e){const t=a(e),n=Kb((n=>e?n&&n!==xy&&e&&t.current&&e.parentNode===t.current.parentNode?n:Tv(e):xy),[e]);return u((()=>{t.current=e}),[e]),n}(T?null!=ne?ne:q:null),ue=function(e,t){void 0===t&&(t=Dv);const[n]=e,r=$y(n?Fb(n):null),[i,a]=x((function(){return e.length?e.map((e=>Bv(e)?r:new Wv(t(e),e))):Sy}),Sy),o=by({callback:a});return e.length>0&&i===Sy&&a(),Vb((()=>{e.length?e.forEach((e=>null==o?void 0:o.observe(e))):(null==o||o.disconnect(),a())}),[e]),i}(de),he=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...r})),n):n}(v,{transform:{x:E.x-se.x,y:E.y-se.y,scaleX:1,scaleY:1},activatorEvent:R,active:B,activeNodeRect:J,containerNodeRect:ee,draggingNodeRect:ae,over:te.current.over,overlayNodeRect:re.rect,scrollableAncestors:de,scrollableAncestorRects:ue,windowRect:ce}),pe=G?Jb(G,E):null,fe=function(e){const[t,n]=o(null),r=a(e),i=f((e=>{const t=Mv(e.target);t&&n((e=>e?(e.set(t,Av(t)),new Map(e)):null))}),[]);return u((()=>{const t=r.current;if(e!==t){a(t);const o=e.map((e=>{const t=Mv(e);return t?(t.addEventListener("scroll",i,{passive:!0}),[t,Av(t)]):null})).filter((e=>null!=e));n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach((e=>{const t=Mv(e);null==t||t.removeEventListener("scroll",i)}))}}),[i,e]),m((()=>e.length?t?Array.from(t.values()).reduce(((e,t)=>Jb(e,t)),mv):zv(e):mv),[e,t])}(de),ge=wy(fe),me=wy(fe,[J]),be=Jb(he,ge),ve=ae?Ov(ae,he):null,ye=B&&ve?g({active:B,collisionRect:ve,droppableRects:U,droppableContainers:V,pointerCoordinates:pe}):null,xe=xv(ye,"id"),[we,$e]=o(null),Se=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(oe?he:Jb(he,me),null!=(s=null==we?void 0:we.rect)?s:null,J),ke=f(((e,t)=>{let{sensor:n,options:r}=t;if(null==P.current)return;const i=M.get(P.current);if(!i)return;const a=e.nativeEvent,o=new n({active:P.current,activeNode:i,event:a,options:r,context:te,onStart(e){const t=P.current;if(null==t)return;const n=M.get(t);if(!n)return;const{onDragStart:r}=H.current,i={active:{id:t,data:n.data,rect:I}};j((()=>{null==r||r(i),D(By.Initializing),S({type:pv.DragStart,initialCoordinates:e,active:t}),k({type:"onDragStart",event:i})}))},onMove(e){S({type:pv.DragMove,coordinates:e})},onEnd:s(pv.DragEnd),onCancel:s(pv.DragCancel)});function s(e){return async function(){const{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=te.current;let o=null;if(t&&i){const{cancelDrop:s}=H.current;if(o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===pv.DragEnd&&"function"==typeof s){await Promise.resolve(s(o))&&(e=pv.DragCancel)}}P.current=null,j((()=>{S({type:e}),D(By.Uninitialized),$e(null),F(null),z(null);const t=e===pv.DragEnd?"onDragEnd":"onDragCancel";if(o){const e=H.current[t];null==e||e(o),k({type:t,event:o})}}))}}j((()=>{F(o),z(e.nativeEvent)}))}),[M]),Oe=f(((e,t)=>(n,r)=>{const i=n.nativeEvent,a=M.get(r);if(null!==P.current||!a||i.dndKit||i.defaultPrevented)return;const o={active:a};!0===e(n,t.options,o)&&(i.dndKit={capturedBy:t.sensor},P.current=r,ke(n,t))}),[M,ke]),Ce=function(e,t){return m((()=>e.reduce(((e,n)=>{const{sensor:r}=n;return[...e,...r.activators.map((e=>({eventName:e.eventName,handler:t(e.handler,n)})))]}),[])),[e,t])}(p,Oe);!function(e){u((()=>{if(!Bb)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(p),Vb((()=>{J&&C===By.Initializing&&D(By.Initialized)}),[J,C]),u((()=>{const{onDragMove:e}=H.current,{active:t,activatorEvent:n,collisions:r,over:i}=te.current;if(!t||!n)return;const a={active:t,activatorEvent:n,collisions:r,delta:{x:be.x,y:be.y},over:i};j((()=>{null==e||e(a),k({type:"onDragMove",event:a})}))}),[be.x,be.y]),u((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=te.current;if(!e||null==P.current||!t||!i)return;const{onDragOver:a}=H.current,o=r.get(xe),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,l={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};j((()=>{$e(s),null==a||a(l),k({type:"onDragOver",event:l})}))}),[xe]),Vb((()=>{te.current={activatorEvent:R,active:B,activeNode:q,collisionRect:ve,collisions:ye,droppableRects:U,draggableNodes:M,draggingNode:ie,draggingNodeRect:ae,droppableContainers:N,over:we,scrollableAncestors:de,scrollAdjustedTranslate:be},I.current={initial:ae,translated:ve}}),[B,q,ye,ve,M,ie,ae,U,N,we,de,be]),uy({...Z,delta:E,draggingRect:ve,pointerCoordinates:pe,scrollableAncestors:de,scrollableAncestorRects:ue});const De=m((()=>({active:B,activeNode:q,activeNodeRect:J,activatorEvent:R,collisions:ye,containerNodeRect:ee,dragOverlay:re,draggableNodes:M,droppableContainers:N,droppableRects:U,over:we,measureDroppableContainers:K,scrollableAncestors:de,scrollableAncestorRects:ue,measuringConfiguration:Y,measuringScheduled:X,windowRect:ce})),[B,q,J,R,ye,ee,re,M,N,U,we,K,de,ue,Y,X,ce]),je=m((()=>({activatorEvent:R,activators:Ce,active:B,activeNodeRect:J,ariaDescribedById:{draggable:W},dispatch:S,draggableNodes:M,over:we,measureDroppableContainers:K})),[R,Ce,B,J,S,W,M,we,K]);return i.createElement(cv.Provider,{value:O},i.createElement(_y.Provider,{value:je},i.createElement(My.Provider,{value:De},i.createElement(Iy.Provider,{value:Se},h)),i.createElement(Ay,{disabled:!1===(null==c?void 0:c.restoreFocus)})),i.createElement(hv,{...c,hiddenTextDescribedById:W}))})),Ly=$(null),Fy="button",Ry="Droppable";function zy(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e;const a=Zb(Ry),{activators:o,activatorEvent:s,active:l,activeNodeRect:c,ariaDescribedById:d,draggableNodes:u,over:h}=g(_y),{role:p=Fy,roleDescription:f="draggable",tabIndex:b=0}=null!=i?i:{},v=(null==l?void 0:l.id)===t,y=g(v?Iy:Ly),[x,w]=Xb(),[$,S]=Xb(),k=function(e,t){return m((()=>e.reduce(((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e}),{})),[e,t])}(o,t),O=Ub(n);Vb((()=>(u.set(t,{id:t,key:a,node:x,activatorNode:$,data:O}),()=>{const e=u.get(t);e&&e.key===a&&u.delete(t)})),[u,t]);return{active:l,activatorEvent:s,activeNodeRect:c,attributes:m((()=>({role:p,tabIndex:b,"aria-disabled":r,"aria-pressed":!(!v||p!==Fy)||void 0,"aria-roledescription":f,"aria-describedby":d.draggable})),[r,p,b,v,f,d.draggable]),isDragging:v,listeners:r?void 0:k,node:x,over:h,setNodeRef:w,setActivatorNodeRef:S,transform:y}}const Hy="Droppable",Wy={timeout:25};function Vy(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Yy(e,t){return e.reduce(((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e}),Array(e.length))}function Uy(e){return null!==e&&e>=0}const Ky=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const a=Vy(t,r,n),o=t[i],s=a[i];return s&&o?{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}:null},Xy={scaleX:1,scaleY:1},qy=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:i,rects:a,overIndex:o}=e;const s=null!=(t=a[n])?t:r;if(!s)return null;if(i===n){const e=a[o];return e?{x:0,y:n<o?e.top+e.height-(s.top+s.height):e.top-s.top,...Xy}:null}const l=function(e,t,n){const r=e[t],i=e[t-1],a=e[t+1];if(!r)return 0;if(n<t)return i?r.top-(i.top+i.height):a?a.top-(r.top+r.height):0;return a?a.top-(r.top+r.height):i?r.top-(i.top+i.height):0}(a,i,n);return i>n&&i<=o?{x:0,y:-s.height-l,...Xy}:i<n&&i>=o?{x:0,y:s.height+l,...Xy}:{x:0,y:0,...Xy}};const Gy="Sortable",Zy=i.createContext({activeIndex:-1,containerId:Gy,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ky,disabled:{draggable:!1,droppable:!1}});function Qy(e){let{children:t,id:n,items:r,strategy:o=Ky,disabled:s=!1}=e;const{active:l,dragOverlay:c,droppableRects:d,over:h,measureDroppableContainers:p}=g(My),f=Zb(Gy,n),b=Boolean(null!==c.rect),v=m((()=>r.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[r]),y=null!=l,x=l?v.indexOf(l.id):-1,w=h?v.indexOf(h.id):-1,$=a(v),S=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(v,$.current),k=-1!==w&&-1===x||S,O=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(s);Vb((()=>{S&&y&&p(v)}),[S,v,y,p]),u((()=>{$.current=v}),[v]);const C=m((()=>({activeIndex:x,containerId:f,disabled:O,disableTransforms:k,items:v,overIndex:w,useDragOverlay:b,sortedRects:Yy(v,d),strategy:o})),[x,f,O.draggable,O.droppable,k,v,w,d,b,o]);return i.createElement(Zy.Provider,{value:C},t)}const Jy=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return Vy(n,r,i).indexOf(t)},ex=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===a||i!==o)&&(!!n||o!==i&&t===l))},tx={duration:200,easing:"ease"},nx="transform",rx=rv.Transition.toString({property:nx,duration:0,easing:"linear"}),ix={roleDescription:"sortable"};function ax(e){let{animateLayoutChanges:t=ex,attributes:n,disabled:r,data:i,getNewIndex:s=Jy,id:l,strategy:c,resizeObserverConfig:d,transition:h=tx}=e;const{items:p,containerId:b,activeIndex:v,disabled:y,disableTransforms:x,sortedRects:w,overIndex:$,useDragOverlay:S,strategy:k}=g(Zy),O=function(e,t){var n,r;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(r,y),C=p.indexOf(l),D=m((()=>({sortable:{containerId:b,index:C,items:p},...i})),[b,i,C,p]),j=m((()=>p.slice(p.indexOf(l))),[p,l]),{rect:T,node:_,isOver:M,setNodeRef:E}=function(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e;const o=Zb(Hy),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=g(_y),h=a({disabled:n}),p=a(!1),m=a(null),b=a(null),{disabled:v,updateMeasurementsFor:y,timeout:x}={...Wy,...i},w=Ub(null!=y?y:r),$=by({callback:f((()=>{p.current?(null!=b.current&&clearTimeout(b.current),b.current=setTimeout((()=>{d(Array.isArray(w.current)?w.current:[w.current]),b.current=null}),x)):p.current=!0}),[x]),disabled:v||!s}),S=f(((e,t)=>{$&&(t&&($.unobserve(t),p.current=!1),e&&$.observe(e))}),[$]),[k,O]=Xb(S),C=Ub(t);return u((()=>{$&&k.current&&($.disconnect(),p.current=!1,$.observe(k.current))}),[k,$]),Vb((()=>(l({type:pv.RegisterDroppable,element:{id:r,key:o,disabled:n,node:k,rect:m,data:C}}),()=>l({type:pv.UnregisterDroppable,key:o,id:r}))),[r]),u((()=>{n!==h.current.disabled&&(l({type:pv.SetDroppableDisabled,id:r,key:o,disabled:n}),h.current.disabled=n)}),[r,o,n,l]),{active:s,rect:m,isOver:(null==c?void 0:c.id)===r,node:k,over:c,setNodeRef:O}}({id:l,data:D,disabled:O.droppable,resizeObserverConfig:{updateMeasurementsFor:j,...d}}),{active:N,activatorEvent:A,activeNodeRect:I,attributes:B,setNodeRef:P,listeners:L,isDragging:F,over:R,setActivatorNodeRef:z,transform:H}=zy({id:l,data:D,attributes:{...ix,...n},disabled:O.draggable}),W=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m((()=>e=>{t.forEach((t=>t(e)))}),t)}(E,P),V=Boolean(N),Y=V&&!x&&Uy(v)&&Uy($),U=!S&&F,K=U&&Y?H:null,X=Y?null!=K?K:(null!=c?c:k)({rects:w,activeNodeRect:I,activeIndex:v,overIndex:$,index:C}):null,q=Uy(v)&&Uy($)?s({id:l,items:p,activeIndex:v,overIndex:$}):C,G=null==N?void 0:N.id,Z=a({activeId:G,items:p,newIndex:q,containerId:b}),Q=p!==Z.current.items,J=t({active:N,containerId:b,isDragging:F,isSorting:V,id:l,index:C,items:p,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:h,wasDragging:null!=Z.current.activeId}),ee=function(e){let{disabled:t,index:n,node:r,rect:i}=e;const[s,l]=o(null),c=a(n);return Vb((()=>{if(!t&&n!==c.current&&r.current){const e=i.current;if(e){const t=Dv(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&l(n)}}n!==c.current&&(c.current=n)}),[t,n,r,i]),u((()=>{s&&l(null)}),[s]),s}({disabled:!J,index:C,node:_,rect:T});return u((()=>{V&&Z.current.newIndex!==q&&(Z.current.newIndex=q),b!==Z.current.containerId&&(Z.current.containerId=b),p!==Z.current.items&&(Z.current.items=p)}),[V,q,b,p]),u((()=>{if(G===Z.current.activeId)return;if(G&&!Z.current.activeId)return void(Z.current.activeId=G);const e=setTimeout((()=>{Z.current.activeId=G}),50);return()=>clearTimeout(e)}),[G]),{active:N,activeIndex:v,attributes:B,data:D,rect:T,index:C,newIndex:q,items:p,isOver:M,isSorting:V,isDragging:F,listeners:L,node:_,overIndex:$,over:R,setNodeRef:W,setActivatorNodeRef:z,setDroppableNodeRef:E,setDraggableNodeRef:P,transform:null!=ee?ee:X,transition:function(){if(ee||Q&&Z.current.newIndex===C)return rx;if(U&&!tv(A)||!h)return;if(V||J)return rv.Transition.toString({...h,property:nx});return}()}}function ox(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const sx=[Kv.Down,Kv.Right,Kv.Up,Kv.Left],lx=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:a,over:o,scrollableAncestors:s}}=t;if(sx.includes(e.code)){if(e.preventDefault(),!n||!r)return;const t=[];a.getEnabled().forEach((n=>{if(!n||null!=n&&n.disabled)return;const a=i.get(n.id);if(a)switch(e.code){case Kv.Down:r.top<a.top&&t.push(n);break;case Kv.Up:r.top>a.top&&t.push(n);break;case Kv.Left:r.left>a.left&&t.push(n);break;case Kv.Right:r.left<a.left&&t.push(n)}}));const l=(e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=yv(t),a=[];for(const e of r){const{id:t}=e,r=n.get(t);if(r){const n=yv(r),o=i.reduce(((e,t,r)=>{return e+(i=n[r],a=t,Math.sqrt(Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2)));var i,a}),0),s=Number((o/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:s}})}}return a.sort(bv)})({active:n,collisionRect:r,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=xv(l,"id");if(c===(null==o?void 0:o.id)&&l.length>1&&(c=l[1].id),null!=c){const e=a.get(n.id),t=a.get(c),o=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&o&&e&&t){const n=Tv(l).some(((e,t)=>s[t]!==e)),i=cx(e,t),a=function(e,t){if(!ox(e)||!ox(t))return!1;if(!cx(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=n||!i?{x:0,y:0}:{x:a?r.width-o.width:0,y:a?r.height-o.height:0},d={x:o.left,y:o.top};return c.x&&c.y?d:ev(d,c)}}}};function cx(e,t){return!(!ox(e)||!ox(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class dx extends oy{}dx.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>ux(e.target)}];function ux(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Qv{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>ux(e.target)}];const hx=M.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,px=M(Gu)`
    color: ${ml.Neutral[1]};
    ${gc({textSize:"BodySmall"})}

    ${yl.MaxWidth.mobileL} {
        display: none;
    }
`,fx=M(Kf)`
    padding: 3.5rem 1.25rem 2.5rem;
`,gx=M.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${ml.Neutral[1]};
    ${gc({textSize:"BodySmall"})}
`,mx=r=>{var{children:i,visible:a,onMobileClose:o}=r,s=lt(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=Vc.useMediaQuery({maxWidth:bl.mobileL}),d=()=>{o&&o()},u=()=>"string"==typeof i?e(Il.BodySmall,{children:i}):i;return t(n,{children:[a&&e(hx,Object.assign({"data-testid":l},s,{children:e(px,{children:u()})})),c&&e(Vf,Object.assign({show:a,onOverlayClick:d},{children:e(fx,Object.assign({onClose:d},{children:e(gx,{children:u()})}))}))]})},bx=M.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,vx=r=>{var i,s,{children:l,popoverContent:c,trigger:d="click",position:u="top",zIndex:h,rootNode:p,customOffset:f,delay:g,onPopoverAppear:m,onPopoverDismiss:b}=r,v=lt(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[y,x]=o(!1),w=a(),$=a(),S=Vc.useMediaQuery({maxWidth:xl.mobileL}),{refs:k,floatingStyles:O,context:C}=be({open:y,placement:u,whileElementsMounted:ve,middleware:[ye(null!=f?f:16),xe(),we({limiter:$e()})],onOpenChange:e=>{x(e),y!==e&&I(e)}}),D=Bp(),j=S?"click":d,T=Oe(C,{ignoreMouse:"hover"===j}),_=Ce(C),M=Ne(C,{enabled:"hover"===j,delay:{open:null!==(i=null==g?void 0:g.open)&&void 0!==i?i:0,close:null!==(s=null==g?void 0:g.close)&&void 0!==s?s:500}}),{getReferenceProps:E,getFloatingProps:N}=De([T,_,M]),A=()=>{x(!1),I(!1)},I=e=>{e&&m&&m(),!e&&b&&b()};return t(n,{children:[e(bx,Object.assign({ref:e=>{w.current=e,k.setReference(e)}},E({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),v,{children:l})),y&&e(je,Object.assign({root:p},{children:e(Te,Object.assign({context:C},{children:e("div",Object.assign({ref:e=>{$.current=e,k.setFloating(e)},style:Object.assign(Object.assign({},O),{outline:"none",zIndex:null!=h?h:D})},N(),{children:"function"==typeof c?c():e(mx,Object.assign({visible:!0,onMobileClose:A},{children:c}))}))}))}))]})},yx=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},xx=M.span`
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
`,wx=M.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,$x=n=>{var{ariaLabel:r,content:i,icon:a,underlineStyle:o="default",underlineHoverStyle:s="default"}=n,l=lt(n,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const c=!!i;return e(vx,Object.assign({},l,{children:t(xx,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:o,$hoverStyle:s,"aria-label":null!=r?r:c?void 0:"More info"},{children:[i,a&&e(wx,Object.assign({$standalone:!c},{children:a}))]}))}))};M.button`
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
`;const Sx=M.div`
    padding-left: 0.25rem;
    display: inline;
`,kx=({addon:t,rootNode:n})=>{const{content:r,type:i,icon:a,id:o,zIndex:s,"data-testid":l}=t;return e(Sx,{children:e($x,{trigger:"click",id:o,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s,icon:null!=a?a:e(F,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Ox=M.label`
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
`,Cx=M(Il.H6)`
    color: ${ml.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,Dx=M(Il.BodySmall)`
    && {
        color: ${ml.Neutral[3]};
        ${Al.getFontFamily("BodySmall","regular")}
    }
`,jx=n=>{var{children:r,addon:i,subtitle:a,"data-testid":o}=n,s=lt(n,["children","addon","subtitle","data-testid"]);return t(Ox,Object.assign({},s,{children:[r,i&&i.type&&("popover"===i.type?e(kx,{addon:i}):null),"string"==typeof a?e(Dx,Object.assign({as:"span","data-testid":o?`${o}-subtitle`:"subtitle"},s,{children:a})):a]}))},Tx=t=>e(Cx,Object.assign({weight:"semibold"},t)),_x=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,s=lt(t,["children","data-testid","type","stretch"]);return e(Mx,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},s,{children:r}))})),Mx=M.div`
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

    ${e=>{switch(e.$type){case"grid":return E`
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
                `;case"flex-column":return E`
                    display: flex;
                    flex-direction: column;
                `;default:return E`
                    display: flex;
                `}}}
`,Ex=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=lt(t,["children","data-testid","stretch"]);return e(Nx,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),Nx=M.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?E`
                ${yl.MaxWidth.tablet} {
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
`,Ax=i.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=t,l=lt(t,["children","data-testid","className","type","stretch"]);return e(Ex,Object.assign({ref:n,"data-testid":i,className:a,stretch:s},l,{children:e(_x,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),Ix={Section:Ex,Container:_x,Content:Ax,ColDiv:$f},Bx=E`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,Px=M.div`
    ${Bx}
`,Lx=M(Ix.ColDiv)`
    ${Bx}
`,Fx=({label:n,errorMessage:r,id:i,disabled:a,children:o,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:u,"data-error-testid":h})=>{const p=!s&&(l||d||u)?"grid":s||"flex",f=()=>h||(i?`${i}-error-message`:"error-message"),g=()=>!!r;return t("grid"===p?Lx:Px,Object.assign({},(e=>{switch(e){case"grid":return{mobileCols:l,tabletCols:d,desktopCols:u};case"flex":return}})(p),{children:[n&&e(jx,"string"==typeof n?Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},{children:n}):Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},n)),(()=>{const e={"aria-invalid":g(),"aria-describedby":g()&&f()};return k.map(o,(t=>c(t,e)))})(),r&&e(Cx,Object.assign({id:f(),weight:"semibold",tabIndex:0,"data-testid":f()},{children:r}))]}))};function Rx(e,t){return Rx=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Rx(e,t)}function zx(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Hx(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Wx(e){return null!==e&&1===e.length?e[0]:e.slice()}function Vx(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Yx(e,t){return Ux(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function Ux(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let Kx=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),Vx(n.getMouseEventMap())}))}zx(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=Yx(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),Vx(n.getKeyDownEventMap()),zx(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),Vx(n.getMouseEventMap()),zx(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),Vx(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},a={index:t,value:Wx(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(a)),n.props.renderThumb(i,a)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},a={index:e,value:Wx(n.state.value)};return n.props.renderTrack(i,a)};let r=Hx(t.value);r.length||(r=Hx(t.defaultValue)),n.pendingResizeTimeouts=[];const a=[];for(let e=0;e<r.length;e+=1)r[e]=Yx(r[e],t),a.push(e);return n.resizeObserver=null,n.resizeElementRef=i.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:a},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Rx(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Hx(e.value);return n.length?t.pending?null:{value:n.map((t=>Yx(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return Wx(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let a=0;a<i;a+=1){const i=this.calcOffset(r[a]),o=Math.abs(e-i);o<t&&(t=o,n=a)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Yx(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],a=r[this.posMaxKey()],o=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(a-o);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let a=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(a=this.state.sliderLength-a),a-=this.state.thumbSize/2,a},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=Yx(this.calcValue(n),this.props),a=this.state.value.slice();a[r]=i;for(let e=0;e<a.length-1;e+=1)if(a[e+1]-a[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:a},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Yx(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=Yx(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:a,max:o,min:s,minDistance:l}=this.props;if(!a){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,a&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const a=r-i*n;t[e-1-i]>a&&(t[e-1-i]=a)}}(r,t,l,o)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=Ux(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=Ux(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](Wx(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,a=this.renderThumbs(e),o=this.props.marks?this.renderMarks():null;return i.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,a,o)},t}(i.Component);Kx.displayName="ReactSlider",Kx.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>i.createElement("div",e),renderTrack:e=>i.createElement("div",e),renderMark:e=>i.createElement("span",e)};var Xx=Kx;const qx=M.div`
    isolation: isolate;
`,Gx=M.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,Zx=M.div`
    margin-bottom: 1rem;
`,Qx=M(Il.Body)`
    overflow-wrap: anywhere;
`,Jx=M(Xx)`
    height: 0.875rem;
`,ew=M.div`
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

        background-color: ${ml.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${ml.Neutral[4]};
        border-radius: 50%;
    }
`,tw=M.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${ew}:after {
        border: 1px solid ${ml.Primary};
    }
`,nw=M.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ml.Neutral[4](e)};
`,rw=n=>{var{value:r,min:i=0,max:a=100,step:s=1,minRange:l,numOfThumbs:c=2,colors:d,disabled:h,readOnly:p,ariaLabels:f,showSliderLabels:g,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:S}=n,k=lt(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[O,C]=o(j()),D=function(){const e=function(){const e=h||p?ml.Neutral[5]:ml.Neutral[4],t=h||p?ml.Neutral[4]:ml.Primary;if(1===c)return[t,e];const n=[];n.push(e);for(let e=0;e<c-1;e++)n.push(t);return n.push(e),n}();return new Array(c+1).fill(0).map(((t,n)=>(null==d?void 0:d[n])||e[n]))}();u((()=>{r!==O&&C(j())}),[r]);function j(){if(r&&r.length===c)return r;const e=[];for(let t=0;t<c;t++)e.push(i+s*t);return e}const T=e=>w?w(e):t(Qx,{children:[m,e,b]});return t(qx,Object.assign({},k,{children:[v&&e(Zx,{children:(()=>{let e="";if(1===O.length)e=`${O[0]}`;else if(2===O.length)e=`${O[0]} - ${O[1]}`;else if(O.length>2){e=`${Math.min(...O)} - ${Math.max(...O)}`}return t(Qx,{children:[y,e,x]})})()}),e(Jx,{step:s,min:i,max:a,value:O,disabled:h||p,onChange:(e,t)=>{if("number"==typeof e){const t=[e];C(t),null==$||$(t)}else{if(t>-1&&O[t]===e[t])return;C(e),null==$||$(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];C(t),null==S||S(t)}else C(e),null==S||S(e)},minDistance:l,ariaLabel:f,renderThumb:(t,n)=>e(tw,Object.assign({"data-testid":`slider-thumb-${n.index}`},t,{tabIndex:h?void 0:t.tabIndex},{children:e(ew,{$disabled:h,$readOnly:p})})),renderTrack:(t,n)=>e(nw,Object.assign({"data-testid":`slider-track-${n.index}`},t,{$color:D[n.index]}))}),g&&t(Gx,{children:[e("div",{children:T(i)}),e("div",{children:T(a)})]})]}))},iw=M.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,aw=M.div`
    margin: 0 0.5rem;
`,ow=M.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,sw=M.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${ml.Neutral[8]};

    ${e=>{let t=ml.Neutral[6];return e.$disabled&&e.$selected?t=ml.Neutral[4]:e.$disabled?t=ml.Neutral[5]:e.$selected&&(t=ml.Accent.Light[1]),E`
            background-color: ${t};
        `}}
`,lw=M(rw)`
    margin-top: -0.3125rem;
`,cw=r=>{var{bins:i=[],interval:a,disabled:s,readOnly:l,value:c,showRangeLabels:d,rangeLabelPrefix:h,rangeLabelSuffix:p,ariaLabels:f,onChange:g,onChangeEnd:b,renderEmptyView:v,renderRangeLabel:y}=r,x=lt(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=i.map((e=>e.count)),$=Math.max(...w),S=i.map((e=>e.minValue)),k=Math.max(...S),O=Math.min(...S),[C,D]=o(M()),j=m((()=>{const e=[...i].sort(((e,t)=>e.minValue-t.minValue)),t=(k-O)/a+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===O+a*r));t?n.push(t):n.push({count:0,minValue:O+a*r})}return n}),[i,a]);u((()=>{c!==C&&D(M())}),[c]);const T=e=>{D(e),null==g||g(e)},_=e=>{D(e),null==b||b(e)};function M(){return null!=c?c:[O,O+a]}const E=e=>y?y(e):t(Il.Body,{children:[h,e,p]});return t("div",Object.assign({},x,{children:[d&&t(iw,{children:[E(C[0]),e(aw,{children:"-"}),E(C[1])]}),j.every((e=>0===e.count))&&v?v():t(n,{children:[e(ow,{children:j.map(((t,n)=>{const r=t.count/$;return e(sw,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:t.minValue>=C[0]&&t.minValue<C[1],$disabled:s||l},n)}))}),e(lw,{min:O,max:k+a,step:a,minRange:a,numOfThumbs:2,value:C,disabled:s,readOnly:l,ariaLabels:f,onChange:T,onChangeEnd:_})]})]}))},dw=M.input`
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
`,uw=M.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${ml.Neutral[3]};
    background-color: transparent;
    border: none;
`,hw=M(Ae)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,pw=M.div`
    display: flex;
    width: 100%;
`,fw=i.forwardRef(((r,i)=>{var{value:o,spacing:s,type:l,error:c,disabled:d,readOnly:u,onChange:h,onClear:p,allowClear:f=!1,className:g,styleType:m="bordered"}=r,v=lt(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=a();b(i,(()=>y.current),[]);const x=Ed({ref:y,formatter:e=>Dd.transformWithSpaces(e,s)}),w=e=>{h&&(S()?k(e):h(e))},$=()=>{p&&p(),y&&y.current&&y.current.focus()},S=()=>"tel"===l&&s,k=e=>{const{nextValue:t,updateCaretPosition:n}=x(),r=t.replace(/\s/g,"");e.target.value=r,h(e),n()},O=o?(e=>e?S()?Dd.transformWithSpaces(e,s):e:"")(o):o,C=()=>t(n,{children:[e(dw,Object.assign({"data-testid":"input",ref:y,disabled:d,value:O,onChange:w,type:l,readOnly:u},v)),f&&!d&&!u&&!!o&&e(uw,Object.assign({onClick:$,type:"button"},{children:e(hw,{"aria-hidden":!0})}))]});return e(n,{children:"no-border"===m?e(pw,Object.assign({className:g},{children:C()})):e(Yp,Object.assign({$disabled:d,$error:c,$readOnly:u,className:g},{children:C()}))})})),gw=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:a,label:r,errorMessage:i,disabled:h.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(fw,Object.assign({id:`${a}-base`,"data-testid":s||a,ref:n,error:!!i},h))}))})),mw=M.div`
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
        box-shadow: ${oc.InputBoxShadow};
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
                background: ${ml.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ml.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?E`
                border: 1px solid ${ml.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ml.Validation.Red.Border(e)};
                    box-shadow: ${oc.InputErrorBoxShadow};
                }
            `:void 0}
`,bw=M(fw)`
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
`,vw=M.div`
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

    ${e=>{if(e.disabled)return E`
                color: ${ml.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${ml.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?E`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:E`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var yw=ys;var xw=ys,ww=xs,$w=Ps;var Sw=ys,kw=function(){this.__data__=new yw,this.size=0},Ow=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Cw=function(e){return this.__data__.get(e)},Dw=function(e){return this.__data__.has(e)},jw=function(e,t){var n=this.__data__;if(n instanceof xw){var r=n.__data__;if(!ww||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new $w(r)}return n.set(e,t),this.size=n.size,this};function Tw(e){var t=this.__data__=new Sw(e);this.size=t.size}Tw.prototype.clear=kw,Tw.prototype.delete=Ow,Tw.prototype.get=Cw,Tw.prototype.has=Dw,Tw.prototype.set=jw;var _w=Tw;var Mw=Ps,Ew=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Nw=function(e){return this.__data__.has(e)};function Aw(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Mw;++t<n;)this.add(e[t])}Aw.prototype.add=Aw.prototype.push=Ew,Aw.prototype.has=Nw;var Iw=Aw,Bw=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},Pw=function(e,t){return e.has(t)};var Lw=function(e,t,n,r,i,a){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,p=2&n?new Iw:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var f=e[u],g=t[u];if(r)var m=o?r(g,f,u,t,e,a):r(f,g,u,e,t,a);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Bw(t,(function(e,t){if(!Pw(p,t)&&(f===e||i(f,e,n,r,a)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var Fw=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Rw=qa.Uint8Array,zw=as,Hw=Lw,Ww=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Vw=Fw,Yw=Ga?Ga.prototype:void 0,Uw=Yw?Yw.valueOf:void 0;var Kw=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new Rw(e),new Rw(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return zw(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Ww;case"[object Set]":var l=1&r;if(s||(s=Vw),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=Hw(s(e),s(t),r,i,a,o);return o.delete(e),d;case"[object Symbol]":if(Uw)return Uw.call(e)==Uw.call(t)}return!1};var Xw=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},qw=Xw,Gw=Ya;var Zw=function(e,t,n){var r=t(e);return Gw(e)?r:qw(r,n(e))};var Qw=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},Jw=function(){return[]},e$=Object.prototype.propertyIsEnumerable,t$=Object.getOwnPropertySymbols,n$=t$?function(e){return null==e?[]:(e=Object(e),Qw(t$(e),(function(t){return e$.call(e,t)})))}:Jw;var r$=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},i$=so,a$=lo;var o$=function(e){return a$(e)&&"[object Arguments]"==i$(e)},s$=lo,l$=Object.prototype,c$=l$.hasOwnProperty,d$=l$.propertyIsEnumerable,u$=o$(function(){return arguments}())?o$:function(e){return s$(e)&&c$.call(e,"callee")&&!d$.call(e,"callee")},h$={exports:{}};var p$=function(){return!1};!function(e,t){var n=qa,r=p$,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(h$,h$.exports);var f$=h$.exports,g$=/^(?:0|[1-9]\d*)$/;var m$=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&g$.test(e))&&e>-1&&e%1==0&&e<t};var b$=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},v$=so,y$=b$,x$=lo,w$={};w$["[object Float32Array]"]=w$["[object Float64Array]"]=w$["[object Int8Array]"]=w$["[object Int16Array]"]=w$["[object Int32Array]"]=w$["[object Uint8Array]"]=w$["[object Uint8ClampedArray]"]=w$["[object Uint16Array]"]=w$["[object Uint32Array]"]=!0,w$["[object Arguments]"]=w$["[object Array]"]=w$["[object ArrayBuffer]"]=w$["[object Boolean]"]=w$["[object DataView]"]=w$["[object Date]"]=w$["[object Error]"]=w$["[object Function]"]=w$["[object Map]"]=w$["[object Number]"]=w$["[object Object]"]=w$["[object RegExp]"]=w$["[object Set]"]=w$["[object String]"]=w$["[object WeakMap]"]=!1;var $$=function(e){return x$(e)&&y$(e.length)&&!!w$[v$(e)]};var S$=function(e){return function(t){return e(t)}},k$={exports:{}};!function(e,t){var n=Ua,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(k$,k$.exports);var O$=k$.exports,C$=$$,D$=S$,j$=O$&&O$.isTypedArray,T$=j$?D$(j$):C$,_$=r$,M$=u$,E$=Ya,N$=f$,A$=m$,I$=T$,B$=Object.prototype.hasOwnProperty;var P$=function(e,t){var n=E$(e),r=!n&&M$(e),i=!n&&!r&&N$(e),a=!n&&!r&&!i&&I$(e),o=n||r||i||a,s=o?_$(e.length,String):[],l=s.length;for(var c in e)!t&&!B$.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||A$(c,l))||s.push(c);return s},L$=Object.prototype;var F$=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||L$)};var R$=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),z$=F$,H$=R$,W$=Object.prototype.hasOwnProperty;var V$=function(e){if(!z$(e))return H$(e);var t=[];for(var n in Object(e))W$.call(e,n)&&"constructor"!=n&&t.push(n);return t},Y$=$o,U$=b$;var K$=function(e){return null!=e&&U$(e.length)&&!Y$(e)},X$=P$,q$=V$,G$=K$;var Z$=function(e){return G$(e)?X$(e):q$(e)},Q$=Zw,J$=n$,eS=Z$;var tS=function(e){return Q$(e,eS,J$)},nS=Object.prototype.hasOwnProperty;var rS=function(e,t,n,r,i,a){var o=1&n,s=tS(e),l=s.length;if(l!=tS(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:nS.call(t,d)))return!1}var u=a.get(e),h=a.get(t);if(u&&h)return u==t&&h==e;var p=!0;a.set(e,t),a.set(t,e);for(var f=o;++c<l;){var g=e[d=s[c]],m=t[d];if(r)var b=o?r(m,g,d,t,e,a):r(g,m,d,e,t,a);if(!(void 0===b?g===m||i(g,m,n,r,a):b)){p=!1;break}f||(f="constructor"==d)}if(p&&!f){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(p=!1)}return a.delete(e),a.delete(t),p},iS=Ro(qa,"DataView"),aS=xs,oS=Ro(qa,"Promise"),sS=Ro(qa,"Set"),lS=Ro(qa,"WeakMap"),cS=so,dS=Do,uS="[object Map]",hS="[object Promise]",pS="[object Set]",fS="[object WeakMap]",gS="[object DataView]",mS=dS(iS),bS=dS(aS),vS=dS(oS),yS=dS(sS),xS=dS(lS),wS=cS;(iS&&wS(new iS(new ArrayBuffer(1)))!=gS||aS&&wS(new aS)!=uS||oS&&wS(oS.resolve())!=hS||sS&&wS(new sS)!=pS||lS&&wS(new lS)!=fS)&&(wS=function(e){var t=cS(e),n="[object Object]"==t?e.constructor:void 0,r=n?dS(n):"";if(r)switch(r){case mS:return gS;case bS:return uS;case vS:return hS;case yS:return pS;case xS:return fS}return t});var $S=wS,SS=_w,kS=Lw,OS=Kw,CS=rS,DS=$S,jS=Ya,TS=f$,_S=T$,MS="[object Arguments]",ES="[object Array]",NS="[object Object]",AS=Object.prototype.hasOwnProperty;var IS=function(e,t,n,r,i,a){var o=jS(e),s=jS(t),l=o?ES:DS(e),c=s?ES:DS(t),d=(l=l==MS?NS:l)==NS,u=(c=c==MS?NS:c)==NS,h=l==c;if(h&&TS(e)){if(!TS(t))return!1;o=!0,d=!1}if(h&&!d)return a||(a=new SS),o||_S(e)?kS(e,t,n,r,i,a):OS(e,t,l,n,r,i,a);if(!(1&n)){var p=d&&AS.call(e,"__wrapped__"),f=u&&AS.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return a||(a=new SS),i(g,m,n,r,a)}}return!!h&&(a||(a=new SS),CS(e,t,n,r,i,a))},BS=lo;var PS=function e(t,n,r,i,a){return t===n||(null==t||null==n||!BS(t)&&!BS(n)?t!=t&&n!=n:IS(t,n,r,i,e,a))},LS=_w,FS=PS;var RS=vo;var zS=function(e){return e==e&&!RS(e)},HS=zS,WS=Z$;var VS=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},YS=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=n[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new LS;if(r)var h=r(c,d,l,e,t,u);if(!(void 0===h?FS(d,c,3,r,u):h))return!1}}return!0},US=function(e){for(var t=WS(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,HS(i)]}return t},KS=VS;var XS=nl,qS=u$,GS=Ya,ZS=m$,QS=b$,JS=il;var ek=function(e,t){return null!=e&&t in Object(e)},tk=function(e,t,n){for(var r=-1,i=(t=XS(t,e)).length,a=!1;++r<i;){var o=JS(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&QS(i)&&ZS(o,i)&&(GS(e)||qS(e))};var nk=PS,rk=cl,ik=function(e,t){return null!=e&&tk(e,t,ek)},ak=bo,ok=zS,sk=VS,lk=il;var ck=sl;var dk=function(e){return function(t){return null==t?void 0:t[e]}},uk=function(e){return function(t){return ck(t,e)}},hk=bo,pk=il;var fk=function(e){var t=US(e);return 1==t.length&&t[0][2]?KS(t[0][0],t[0][1]):function(n){return n===e||YS(n,e,t)}},gk=function(e,t){return ak(e)&&ok(t)?sk(lk(e),t):function(n){var r=rk(n,e);return void 0===r&&r===t?ik(n,e):nk(t,r,3)}},mk=function(e){return e},bk=Ya,vk=function(e){return hk(e)?dk(pk(e)):uk(e)};var yk=function(e){return"function"==typeof e?e:null==e?mk:"object"==typeof e?bk(e)?gk(e[0],e[1]):fk(e):vk(e)},xk=yk,wk=K$,$k=Z$;var Sk=function(e){return function(t,n,r){var i=Object(t);if(!wk(t)){var a=xk(n);t=$k(t),n=function(e){return a(i[e],e,i)}}var o=e(t,n,r);return o>-1?i[a?t[o]:o]:void 0}};var kk=hh,Ok=1/0;var Ck=function(e){return e?(e=kk(e))===Ok||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Dk=function(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1},jk=yk,Tk=function(e){var t=Ck(e),n=t%1;return t==t?n?t-n:t:0},_k=Math.max;var Mk=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Tk(n);return i<0&&(i=_k(r+i,0)),Dk(e,jk(t),i)},Ek=Wa(Mk),Nk=Wa(Sk(Mk)),Ak=PS;var Ik=Wa((function(e,t){return Ak(e,t)}));const Bk=M(za.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Pk=M.ul`
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
`,Lk=M.li`
    :hover,
    :focus,
    :active {
        background: ${ml.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return E`
                background: ${ml.Accent.Light[5]};
            `}}
`,Fk=M.button`
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
        outline-color: ${ml.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Rk=E`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,zk=M.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${ml.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rk}
`,Hk=M.div`
    color: ${ml.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rk}

    ${e=>"next-line"===e.$labelDisplayType?E`
                    ${Al.getTextStyle("BodySmall","semibold")}
                `:E`
                    ${Al.getTextStyle("Body","regular")}
                `}
`,Wk=M.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return E`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return E`
                    ${zk} {
                        display: inline;
                    }

                    ${Hk} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Vk=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Yk=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Uk=M(eh)`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Kk=M.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Xk=M.button`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${ml.Primary(e)};\n\t\t`}
`,qk=M.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Gk=M.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,Zk=M(P)`
    ${e=>{const t="small"===e.$variant?1:1.5;return E`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${ml.Validation.Red.Icon};
`,Qk=e=>"small"===e?1:1.375,Jk=e=>E`
        height: ${Qk(e)}rem;
        width: ${Qk(e)}rem;
    `,eO=M.li`
    background: ${ml.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,tO=M(Up)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,nO=M(Le)`
    ${e=>Jk(e.$variant)}
    margin: 0 0.5rem;
    color: ${ml.Neutral[3]};
`,rO=M($l)`
    ${e=>Jk(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${ml.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return E`
                svg {
                    ${Jk(e.$variant)}
                }
            `}}
`,iO=p(((n,r)=>{const{onClear:i}=n,a=lt(n,["onClear"]);return t(eO,{children:[e(nO,{$variant:n.variant}),e(tO,Object.assign({ref:r,$variant:n.variant},a)),a.value&&e(rO,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:n.variant},{children:e(J,{})}))]},"search")})),aO=r=>{var{listItems:i,listExtractor:s,valueExtractor:l,onSelectItem:c,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:b,disableItemFocus:v,multiSelect:y,selectedItems:x,onSelectAll:w,onRetry:$,itemsLoadState:S="success",itemTruncationType:k="end",itemMaxLines:O=2,labelDisplayType:C="inline",renderListItem:D,onBlur:j,hideNoResultsDisplay:T,renderCustomCallToAction:_,variant:M="default"}=r,E=lt(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[N,A]=o(0),[I,B]=o(""),[P,L]=o(i),[F,R]=o(0),z=Sa({height:F}),H=a(),W=a(),V=a([]),Y=a(),U=a(),K=a(N),X=a(P),q=e=>{K.current=e,A(e)},G=e=>{X.current=e,L(e)};u((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),u((()=>{ee(I)}),[I]),u((()=>{if(B(""),h){if(setTimeout((()=>{R(te())})),v)return;Y&&Y.current?(Y.current.focus(),q(-1)):V.current[N]&&V.current[N].focus()}else R(0)}),[h]),u((()=>{if(h){const e=te();R(e)}}),[P,S]),u((()=>{G(i),B(""),q(0)}),[i]);const Z=e=>s?s(e):e.toString(),Q=e=>{if("inline"!==C)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return Dd.getTextWidth(e,"1.125rem 'Open Sans'")>t*O},J=e=>!!Nk(x,(t=>Ik(t,e))),ee=e=>{if(""===e)G(i);else if(m){const t=m(e);G(t)}else{const t=i.filter((t=>{var n;const r=Z(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),a="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),o=e.trim().toLowerCase();return i.includes(o)||a&&a.includes(o)}));G(t)}},te=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(K.current<X.current.length-1){const e=K.current+1;V.current[e].focus(),q(e)}break;case"ArrowUp":if(K.current>0){const e=K.current-1;V.current[e].focus(),q(K.current-1)}break;case"Escape":b&&b(!0)}},re=(e,t)=>{e.preventDefault(),c&&c(t,(e=>l?l(e):e)(t))},ie=e=>{const t=e.target.value;B(t),g&&g()},ae=()=>{B(""),Y.current.focus(),g&&g()},oe=()=>{$&&$()},se=()=>{j&&j()},le=r=>t(n,{children:[e(Vk,Object.assign({$maxLines:O,"aria-hidden":!0},{children:r})),e(Yk,Object.assign({$maxLines:O,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=Z(n),i="string"==typeof r?r:r.title,a="string"==typeof r?void 0:r.secondaryLabel,o=Q(i),s=a&&Q(a),l=o||s?"next-line":C;return t(Wk,Object.assign({$labelDisplayType:l},{children:[e(zk,Object.assign({$truncateType:k,$maxLines:O,$variant:M,"aria-label":i},{children:"middle"===k&&o?le(i):i})),a&&e(Hk,Object.assign({$truncateType:k,$maxLines:O,$labelDisplayType:C,"aria-label":a},{children:"middle"===k&&s?le(a):a}))]}))},de=()=>{if(!$||$&&"success"===S)return P.map(((n,r)=>e(Lk,Object.assign({$checked:J(n)&&!y},{children:t(Fk,Object.assign({$hasNextLineLabel:"next-line"===C&&P.length>0&&s&&"string"!=typeof s(P[0]),onClick:e=>{re(e,n)},ref:e=>V.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:y,onBlur:se,$variant:M},{children:[y&&e(Uk,{checked:J(n),displaySize:"small"}),D?D(n,{selected:J(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${l?l(e):e}`)(n,r))))},ue=()=>{if(y&&P.length>0&&!I&&"success"===S)return e(Kk,{children:e(Xk,Object.assign({onClick:w,type:"button",$variant:M},{children:0===x.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!T&&(I||!p)&&0===P.length&&"success"===S)return t(qk,Object.assign({"data-testid":"list-no-results"},{children:[e(Zk,{"data-testid":"no-result-icon",$variant:M}),e(Gk,Object.assign({$variant:M},{children:"No results found."}))]}),"noResults")},pe=()=>{if($&&"loading"===S){const n="small"===M?16:24;return t(qk,Object.assign({"data-testid":"list-loading"},{children:[e(lc,{$buttonStyle:"secondary",size:n}),e(Gk,Object.assign({$variant:M},{children:"Loading..."}))]}),"loading")}},fe=()=>{if($&&"fail"===S)return t(qk,Object.assign({"data-testid":"list-fail"},{children:[e(Zk,{"data-testid":"load-error-icon",$variant:M}),e(Gk,Object.assign({$variant:M},{children:"Failed to load."}))," ",e(Xk,Object.assign({onClick:oe,type:"button",$variant:M},{children:"Try again."}))]}),"noResults")};return e(n,{children:t(Bk,Object.assign({style:z,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:H},{children:[(()=>{if(h)return t(Pk,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},E,{children:[(p||m)&&"success"===S?e(iO,{ref:Y,onChange:ie,value:I,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:ae,variant:M}):null,ue(),he(),pe(),fe(),de()]}))})(),(()=>{if(h&&_)return e("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:_(b,P)}))})()]}))})},oO=M.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return E`
                border-bottom: 1px solid ${ml.Neutral[5](e)};
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
`,sO=M(Cp)`
    padding: 0;
    width: auto;
`,lO=M.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,cO=M.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Fl.Base};
    margin: 0 0.75rem;
`,dO=M(pe)`
    color: ${ml.Neutral[3]};
    height: ${jl.Body.fontSize}rem;
    width: ${jl.Body.fontSize}rem;
    vertical-align: bottom;
`,uO=M.div`
    display: flex;
    flex: 1 1 auto;
`,hO=M(Il.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,pO=M(hO)`
    color: ${ml.Neutral[3]};
`,fO=M.div`
    width: 1px;
    background: ${ml.Neutral[5]};
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
`,gO=i.forwardRef(((r,i)=>{var{addon:s,error:l,onChange:c,readOnly:d,className:h,onBlur:p}=r,f=lt(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:g,options:m,enableSearch:b,searchFunction:v,searchPlaceholder:y,valueExtractor:x,listExtractor:w,displayValueExtractor:$,selectedOption:S,onSelectOption:k,onHideOptions:O,onShowOptions:C,"data-selector-testid":D}=s.attributes,{position:j}=s,[T,_]=o(S),[M,E]=o(!1),N=a();u((()=>{_(S)}),[S]);const A=()=>$?$(T):x?x(T):T.toString(),I=e=>{!e&&O&&O(),e&&C&&C()},B=e=>{e.preventDefault(),f.disabled||(E(!M),I(!M))},P=(e,t)=>{_(e),E(!1),I(!1),N&&N.current.focus(),k&&k(e,t)},L=e=>{c&&c(e)},F=()=>{p&&p()},R=()=>{E(!1),I(!1),N&&N.current.focus()};return t(Ap,Object.assign({className:h,show:M,error:l&&!M,disabled:f.disabled,readOnly:d,onBlur:()=>{E(!1),I(!1),F()}},{children:[t(oO,Object.assign({$expanded:M,$readOnly:d,$position:j},{children:[d?T?e(lO,{children:e(hO,Object.assign({"data-testid":"selector-label"},{children:A()}))}):null:e(sO,Object.assign({ref:N,type:"button",disabled:f.disabled,"data-testid":D||"addon-selector",onClick:B},{children:t(n,{children:[t(uO,{children:[g&&!T&&e(pO,{children:g}),T&&e(hO,Object.assign({"data-testid":"selector-label"},{children:A()}))]}),e(cO,Object.assign({$expanded:M},{children:e(dO,{})}))]})})),e(fO,{$readOnly:d,$position:j}),e(bw,Object.assign({ref:i},f,{readOnly:d,error:l,onChange:L,"data-testid":f["data-testid"]||"input",onBlur:F}))]})),m&&m.length>0?e(aO,{listItems:m,selectedItems:S?[S]:[],onSelectItem:P,valueExtractor:x,listExtractor:w,visible:M,enableSearch:b,searchFunction:v,searchPlaceholder:y,"data-testid":"dropdown-list",onBlur:F,onDismiss:R}):null]}))})),mO=i.forwardRef(((n,r)=>{var{addon:i,error:a,className:o}=n,s=lt(n,["addon","error","className"]);const l=()=>e(mw,Object.assign({disabled:s.disabled,$error:a,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:o},{children:e(bw,Object.assign({ref:r},s,{"data-testid":"input"}))}));if(!i)return l();{const{type:n="label",position:c="left"}=i,{allowClear:d}=s;switch(n){case"list":{const t=i.attributes;return t.options&&t.options.length>0?e(gO,Object.assign({ref:r,addon:i,error:a,className:o},s)):l()}case"custom":{const n=i.attributes;return n.children?t(Yp,Object.assign({$error:a,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[e(vw,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.children})),e(bw,Object.assign({ref:r},s,{allowClear:d&&"right"!==c,error:a,"data-testid":"input"}))]})):l()}default:{const n=i.attributes;return n.value?t(Yp,Object.assign({$disabled:s.disabled,$error:a,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:c,className:o},{children:[e(vw,Object.assign({"data-testid":"addon",disabled:s.disabled,$readOnly:s.readOnly,$position:c},{children:n.value})),e(bw,Object.assign({ref:r},s,{allowClear:d&&"right"!==c,error:a,"data-testid":"input"}))]})):l()}}}})),bO=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field-group","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:a,label:r,errorMessage:i,disabled:h.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(mO,Object.assign({ref:n,id:`${a}-base`,"data-testid":s||a,error:!!i},h))}))})),vO=M(mO)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":"1rem"};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,yO=M.div`
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
`,xO=M.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,wO=M(Il.Body)`
    color: ${ml.Neutral[3]};
`,$O=M(nc)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${ml.Neutral[3]} transparent transparent transparent;
    }
`,SO=M(Il.Body)`
    color: ${ml.Primary};
    text-decoration: underline;
`,kO=M.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`,OO=M(ze)`
    color: ${ml.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,CO=M(Il.Body)`
    color: ${ml.Validation.Orange.Text};
`,DO=M.button`
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
`;var jO,TO,_O={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */jO=_O,TO=_O.exports,function(){var e,t="Expected a function",n="__lodash_hash_undefined__",r="__lodash_placeholder__",i=16,a=32,o=64,s=128,l=256,c=1/0,d=9007199254740991,u=NaN,h=4294967295,p=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",i],["flip",512],["partial",a],["partialRight",o],["rearg",l]],f="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",S="[object Object]",k="[object Promise]",O="[object RegExp]",C="[object Set]",D="[object String]",j="[object Symbol]",T="[object WeakMap]",_="[object ArrayBuffer]",M="[object DataView]",E="[object Float32Array]",N="[object Float64Array]",A="[object Int8Array]",I="[object Int16Array]",B="[object Int32Array]",P="[object Uint8Array]",L="[object Uint8ClampedArray]",F="[object Uint16Array]",R="[object Uint32Array]",z=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,Y=/[&<>"']/g,U=RegExp(V.source),K=RegExp(Y.source),X=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),ne=/^\s+/,re=/\s/,ie=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ae=/\{\n\/\* \[wrapped with (.+)\] \*/,oe=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,fe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Se="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",Ce="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",De="['’]",je="["+xe+"]",Te="["+Ce+"]",_e="["+we+"]",Me="\\d+",Ee="["+$e+"]",Ne="["+Se+"]",Ae="[^"+xe+Ce+Me+$e+Se+ke+"]",Ie="\\ud83c[\\udffb-\\udfff]",Be="[^"+xe+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Fe="["+ke+"]",Re="\\u200d",ze="(?:"+Ne+"|"+Ae+")",He="(?:"+Fe+"|"+Ae+")",We="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ye="(?:"+_e+"|"+Ie+")?",Ue="["+Oe+"]?",Ke=Ue+Ye+"(?:"+Re+"(?:"+[Be,Pe,Le].join("|")+")"+Ue+Ye+")*",Xe="(?:"+[Ee,Pe,Le].join("|")+")"+Ke,qe="(?:"+[Be+_e+"?",_e,Pe,Le,je].join("|")+")",Ge=RegExp(De,"g"),Ze=RegExp(_e,"g"),Qe=RegExp(Ie+"(?="+Ie+")|"+qe+Ke,"g"),Je=RegExp([Fe+"?"+Ne+"+"+We+"(?="+[Te,Fe,"$"].join("|")+")",He+"+"+Ve+"(?="+[Te,Fe+ze,"$"].join("|")+")",Fe+"?"+ze+"+"+We,Fe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Xe].join("|"),"g"),et=RegExp("["+Re+xe+we+Oe+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rt=-1,it={};it[E]=it[N]=it[A]=it[I]=it[B]=it[P]=it[L]=it[F]=it[R]=!0,it[f]=it[g]=it[_]=it[m]=it[M]=it[b]=it[v]=it[y]=it[w]=it[$]=it[S]=it[O]=it[C]=it[D]=it[T]=!1;var at={};at[f]=at[g]=at[_]=at[M]=at[m]=at[b]=at[E]=at[N]=at[A]=at[I]=at[B]=at[w]=at[$]=at[S]=at[O]=at[C]=at[D]=at[j]=at[P]=at[L]=at[F]=at[R]=!0,at[v]=at[y]=at[T]=!1;var ot={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,lt=parseInt,ct="object"==typeof Ha&&Ha&&Ha.Object===Object&&Ha,dt="object"==typeof self&&self&&self.Object===Object&&self,ut=ct||dt||Function("return this")(),ht=TO&&!TO.nodeType&&TO,pt=ht&&jO&&!jO.nodeType&&jO,ft=pt&&pt.exports===ht,gt=ft&&ct.process,mt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||gt&&gt.binding&&gt.binding("util")}catch(e){}}(),bt=mt&&mt.isArrayBuffer,vt=mt&&mt.isDate,yt=mt&&mt.isMap,xt=mt&&mt.isRegExp,wt=mt&&mt.isSet,$t=mt&&mt.isTypedArray;function St(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function kt(e,t,n,r){for(var i=-1,a=null==e?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function Ot(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Ct(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Dt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function jt(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function Tt(e,t){return!(null==e||!e.length)&&Ft(e,t,0)>-1}function _t(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Mt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Et(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Nt(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function At(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function It(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Bt=Wt("length");function Pt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Lt(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function Ft(e,t,n){return t==t?function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Lt(e,zt,n)}function Rt(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function zt(e){return e!=e}function Ht(e,t){var n=null==e?0:e.length;return n?Ut(e,t)/n:u}function Wt(t){return function(n){return null==n?e:n[t]}}function Vt(t){return function(n){return null==t?e:t[n]}}function Yt(e,t,n,r,i){return i(e,(function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)})),n}function Ut(t,n){for(var r,i=-1,a=t.length;++i<a;){var o=n(t[i]);o!==e&&(r=r===e?o:r+o)}return r}function Kt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Xt(e){return e?e.slice(0,hn(e)+1).replace(ne,""):e}function qt(e){return function(t){return e(t)}}function Gt(e,t){return Mt(t,(function(t){return e[t]}))}function Zt(e,t){return e.has(t)}function Qt(e,t){for(var n=-1,r=e.length;++n<r&&Ft(t,e[n],0)>-1;);return n}function Jt(e,t){for(var n=e.length;n--&&Ft(t,e[n],0)>-1;);return n}var en=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tn=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nn(e){return"\\"+ot[e]}function rn(e){return et.test(e)}function an(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function on(e,t){return function(n){return e(t(n))}}function sn(e,t){for(var n=-1,i=e.length,a=0,o=[];++n<i;){var s=e[n];s!==t&&s!==r||(e[n]=r,o[a++]=n)}return o}function ln(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function dn(e){return rn(e)?function(e){for(var t=Qe.lastIndex=0;Qe.test(e);)++t;return t}(e):Bt(e)}function un(e){return rn(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.split("")}(e)}function hn(e){for(var t=e.length;t--&&re.test(e.charAt(t)););return t}var pn=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),fn=function re(xe){var we=(xe=null==xe?ut:fn.defaults(ut.Object(),xe,fn.pick(ut,nt))).Array,$e=xe.Date,Se=xe.Error,ke=xe.Function,Oe=xe.Math,Ce=xe.Object,De=xe.RegExp,je=xe.String,Te=xe.TypeError,_e=we.prototype,Me=ke.prototype,Ee=Ce.prototype,Ne=xe["__core-js_shared__"],Ae=Me.toString,Ie=Ee.hasOwnProperty,Be=0,Pe=function(){var e=/[^.]+$/.exec(Ne&&Ne.keys&&Ne.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Le=Ee.toString,Fe=Ae.call(Ce),Re=ut._,ze=De("^"+Ae.call(Ie).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=ft?xe.Buffer:e,We=xe.Symbol,Ve=xe.Uint8Array,Ye=He?He.allocUnsafe:e,Ue=on(Ce.getPrototypeOf,Ce),Ke=Ce.create,Xe=Ee.propertyIsEnumerable,qe=_e.splice,Qe=We?We.isConcatSpreadable:e,et=We?We.iterator:e,ot=We?We.toStringTag:e,ct=function(){try{var e=ua(Ce,"defineProperty");return e({},"",{}),e}catch(e){}}(),dt=xe.clearTimeout!==ut.clearTimeout&&xe.clearTimeout,ht=$e&&$e.now!==ut.Date.now&&$e.now,pt=xe.setTimeout!==ut.setTimeout&&xe.setTimeout,gt=Oe.ceil,mt=Oe.floor,Bt=Ce.getOwnPropertySymbols,Vt=He?He.isBuffer:e,gn=xe.isFinite,mn=_e.join,bn=on(Ce.keys,Ce),vn=Oe.max,yn=Oe.min,xn=$e.now,wn=xe.parseInt,$n=Oe.random,Sn=_e.reverse,kn=ua(xe,"DataView"),On=ua(xe,"Map"),Cn=ua(xe,"Promise"),Dn=ua(xe,"Set"),jn=ua(xe,"WeakMap"),Tn=ua(Ce,"create"),_n=jn&&new jn,Mn={},En=Pa(kn),Nn=Pa(On),An=Pa(Cn),In=Pa(Dn),Bn=Pa(jn),Pn=We?We.prototype:e,Ln=Pn?Pn.valueOf:e,Fn=Pn?Pn.toString:e;function Rn(e){if(ts(e)&&!Vo(e)&&!(e instanceof Vn)){if(e instanceof Wn)return e;if(Ie.call(e,"__wrapped__"))return La(e)}return new Wn(e)}var zn=function(){function t(){}return function(n){if(!es(n))return{};if(Ke)return Ke(n);t.prototype=n;var r=new t;return t.prototype=e,r}}();function Hn(){}function Wn(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=e}function Vn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Xn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Kn;++t<n;)this.add(e[t])}function qn(e){var t=this.__data__=new Un(e);this.size=t.size}function Gn(e,t){var n=Vo(e),r=!n&&Wo(e),i=!n&&!r&&Xo(e),a=!n&&!r&&!i&&cs(e),o=n||r||i||a,s=o?Kt(e.length,je):[],l=s.length;for(var c in e)!t&&!Ie.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||va(c,l))||s.push(c);return s}function Zn(t){var n=t.length;return n?t[Xr(0,n-1)]:e}function Qn(e,t){return Aa(Ti(e),sr(t,0,e.length))}function Jn(e){return Aa(Ti(e))}function er(t,n,r){(r!==e&&!Ro(t[n],r)||r===e&&!(n in t))&&ar(t,n,r)}function tr(t,n,r){var i=t[n];Ie.call(t,n)&&Ro(i,r)&&(r!==e||n in t)||ar(t,n,r)}function nr(e,t){for(var n=e.length;n--;)if(Ro(e[n][0],t))return n;return-1}function rr(e,t,n,r){return hr(e,(function(e,i,a){t(r,e,n(e),a)})),r}function ir(e,t){return e&&_i(t,Ms(t),e)}function ar(e,t,n){"__proto__"==t&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function or(t,n){for(var r=-1,i=n.length,a=we(i),o=null==t;++r<i;)a[r]=o?e:Cs(t,n[r]);return a}function sr(t,n,r){return t==t&&(r!==e&&(t=t<=r?t:r),n!==e&&(t=t>=n?t:n)),t}function lr(t,n,r,i,a,o){var s,l=1&n,c=2&n,d=4&n;if(r&&(s=a?r(t,i,a,o):r(t)),s!==e)return s;if(!es(t))return t;var u=Vo(t);if(u){if(s=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Ie.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(t),!l)return Ti(t,s)}else{var h=fa(t),p=h==y||h==x;if(Xo(t))return Si(t,l);if(h==S||h==f||p&&!a){if(s=c||p?{}:ma(t),!l)return c?function(e,t){return _i(e,pa(e),t)}(t,function(e,t){return e&&_i(t,Es(t),e)}(s,t)):function(e,t){return _i(e,ha(e),t)}(t,ir(s,t))}else{if(!at[h])return a?t:{};s=function(e,t,n){var r,i=e.constructor;switch(t){case _:return ki(e);case m:case b:return new i(+e);case M:return function(e,t){var n=t?ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case E:case N:case A:case I:case B:case P:case L:case F:case R:return Oi(e,n);case w:return new i;case $:case D:return new i(e);case O:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case C:return new i;case j:return r=e,Ln?Ce(Ln.call(r)):{}}}(t,h,l)}}o||(o=new qn);var g=o.get(t);if(g)return g;o.set(t,s),os(t)?t.forEach((function(e){s.add(lr(e,n,r,e,t,o))})):ns(t)&&t.forEach((function(e,i){s.set(i,lr(e,n,r,i,t,o))}));var v=u?e:(d?c?ia:ra:c?Es:Ms)(t);return Ot(v||t,(function(e,i){v&&(e=t[i=e]),tr(s,i,lr(e,n,r,i,t,o))})),s}function cr(t,n,r){var i=r.length;if(null==t)return!i;for(t=Ce(t);i--;){var a=r[i],o=n[a],s=t[a];if(s===e&&!(a in t)||!o(s))return!1}return!0}function dr(n,r,i){if("function"!=typeof n)throw new Te(t);return _a((function(){n.apply(e,i)}),r)}function ur(e,t,n,r){var i=-1,a=Tt,o=!0,s=e.length,l=[],c=t.length;if(!s)return l;n&&(t=Mt(t,qt(n))),r?(a=_t,o=!1):t.length>=200&&(a=Zt,o=!1,t=new Xn(t));e:for(;++i<s;){var d=e[i],u=null==n?d:n(d);if(d=r||0!==d?d:0,o&&u==u){for(var h=c;h--;)if(t[h]===u)continue e;l.push(d)}else a(t,u,r)||l.push(d)}return l}Rn.templateSettings={escape:X,evaluate:q,interpolate:G,variable:"",imports:{_:Rn}},Rn.prototype=Hn.prototype,Rn.prototype.constructor=Rn,Wn.prototype=zn(Hn.prototype),Wn.prototype.constructor=Wn,Vn.prototype=zn(Hn.prototype),Vn.prototype.constructor=Vn,Yn.prototype.clear=function(){this.__data__=Tn?Tn(null):{},this.size=0},Yn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yn.prototype.get=function(t){var r=this.__data__;if(Tn){var i=r[t];return i===n?e:i}return Ie.call(r,t)?r[t]:e},Yn.prototype.has=function(t){var n=this.__data__;return Tn?n[t]!==e:Ie.call(n,t)},Yn.prototype.set=function(t,r){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=Tn&&r===e?n:r,this},Un.prototype.clear=function(){this.__data__=[],this.size=0},Un.prototype.delete=function(e){var t=this.__data__,n=nr(t,e);return!(n<0||(n==t.length-1?t.pop():qe.call(t,n,1),--this.size,0))},Un.prototype.get=function(t){var n=this.__data__,r=nr(n,t);return r<0?e:n[r][1]},Un.prototype.has=function(e){return nr(this.__data__,e)>-1},Un.prototype.set=function(e,t){var n=this.__data__,r=nr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Kn.prototype.clear=function(){this.size=0,this.__data__={hash:new Yn,map:new(On||Un),string:new Yn}},Kn.prototype.delete=function(e){var t=ca(this,e).delete(e);return this.size-=t?1:0,t},Kn.prototype.get=function(e){return ca(this,e).get(e)},Kn.prototype.has=function(e){return ca(this,e).has(e)},Kn.prototype.set=function(e,t){var n=ca(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Xn.prototype.add=Xn.prototype.push=function(e){return this.__data__.set(e,n),this},Xn.prototype.has=function(e){return this.__data__.has(e)},qn.prototype.clear=function(){this.__data__=new Un,this.size=0},qn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},qn.prototype.get=function(e){return this.__data__.get(e)},qn.prototype.has=function(e){return this.__data__.has(e)},qn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Un){var r=n.__data__;if(!On||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Kn(r)}return n.set(e,t),this.size=n.size,this};var hr=Ni(xr),pr=Ni(wr,!0);function fr(e,t){var n=!0;return hr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function gr(t,n,r){for(var i=-1,a=t.length;++i<a;){var o=t[i],s=n(o);if(null!=s&&(l===e?s==s&&!ls(s):r(s,l)))var l=s,c=o}return c}function mr(e,t){var n=[];return hr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function br(e,t,n,r,i){var a=-1,o=e.length;for(n||(n=ba),i||(i=[]);++a<o;){var s=e[a];t>0&&n(s)?t>1?br(s,t-1,n,r,i):Et(i,s):r||(i[i.length]=s)}return i}var vr=Ai(),yr=Ai(!0);function xr(e,t){return e&&vr(e,t,Ms)}function wr(e,t){return e&&yr(e,t,Ms)}function $r(e,t){return jt(t,(function(t){return Zo(e[t])}))}function Sr(t,n){for(var r=0,i=(n=yi(n,t)).length;null!=t&&r<i;)t=t[Ba(n[r++])];return r&&r==i?t:e}function kr(e,t,n){var r=t(e);return Vo(e)?r:Et(r,n(e))}function Or(t){return null==t?t===e?"[object Undefined]":"[object Null]":ot&&ot in Ce(t)?function(t){var n=Ie.call(t,ot),r=t[ot];try{t[ot]=e;var i=!0}catch(e){}var a=Le.call(t);return i&&(n?t[ot]=r:delete t[ot]),a}(t):function(e){return Le.call(e)}(t)}function Cr(e,t){return e>t}function Dr(e,t){return null!=e&&Ie.call(e,t)}function jr(e,t){return null!=e&&t in Ce(e)}function Tr(t,n,r){for(var i=r?_t:Tt,a=t[0].length,o=t.length,s=o,l=we(o),c=1/0,d=[];s--;){var u=t[s];s&&n&&(u=Mt(u,qt(n))),c=yn(u.length,c),l[s]=!r&&(n||a>=120&&u.length>=120)?new Xn(s&&u):e}u=t[0];var h=-1,p=l[0];e:for(;++h<a&&d.length<c;){var f=u[h],g=n?n(f):f;if(f=r||0!==f?f:0,!(p?Zt(p,g):i(d,g,r))){for(s=o;--s;){var m=l[s];if(!(m?Zt(m,g):i(t[s],g,r)))continue e}p&&p.push(g),d.push(f)}}return d}function _r(t,n,r){var i=null==(t=Da(t,n=yi(n,t)))?t:t[Ba(qa(n))];return null==i?e:St(i,t,r)}function Mr(e){return ts(e)&&Or(e)==f}function Er(t,n,r,i,a){return t===n||(null==t||null==n||!ts(t)&&!ts(n)?t!=t&&n!=n:function(t,n,r,i,a,o){var s=Vo(t),l=Vo(n),c=s?g:fa(t),d=l?g:fa(n),u=(c=c==f?S:c)==S,h=(d=d==f?S:d)==S,p=c==d;if(p&&Xo(t)){if(!Xo(n))return!1;s=!0,u=!1}if(p&&!u)return o||(o=new qn),s||cs(t)?ta(t,n,r,i,a,o):function(e,t,n,r,i,a,o){switch(n){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!a(new Ve(e),new Ve(t)));case m:case b:case $:return Ro(+e,+t);case v:return e.name==t.name&&e.message==t.message;case O:case D:return e==t+"";case w:var s=an;case C:var l=1&r;if(s||(s=ln),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=ta(s(e),s(t),r,i,a,o);return o.delete(e),d;case j:if(Ln)return Ln.call(e)==Ln.call(t)}return!1}(t,n,c,r,i,a,o);if(!(1&r)){var y=u&&Ie.call(t,"__wrapped__"),x=h&&Ie.call(n,"__wrapped__");if(y||x){var k=y?t.value():t,T=x?n.value():n;return o||(o=new qn),a(k,T,r,i,o)}}return!!p&&(o||(o=new qn),function(t,n,r,i,a,o){var s=1&r,l=ra(t),c=l.length,d=ra(n),u=d.length;if(c!=u&&!s)return!1;for(var h=c;h--;){var p=l[h];if(!(s?p in n:Ie.call(n,p)))return!1}var f=o.get(t),g=o.get(n);if(f&&g)return f==n&&g==t;var m=!0;o.set(t,n),o.set(n,t);for(var b=s;++h<c;){var v=t[p=l[h]],y=n[p];if(i)var x=s?i(y,v,p,n,t,o):i(v,y,p,t,n,o);if(!(x===e?v===y||a(v,y,r,i,o):x)){m=!1;break}b||(b="constructor"==p)}if(m&&!b){var w=t.constructor,$=n.constructor;w==$||!("constructor"in t)||!("constructor"in n)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return o.delete(t),o.delete(n),m}(t,n,r,i,a,o))}(t,n,r,i,Er,a))}function Nr(t,n,r,i){var a=r.length,o=a,s=!i;if(null==t)return!o;for(t=Ce(t);a--;){var l=r[a];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++a<o;){var c=(l=r[a])[0],d=t[c],u=l[1];if(s&&l[2]){if(d===e&&!(c in t))return!1}else{var h=new qn;if(i)var p=i(d,u,c,t,n,h);if(!(p===e?Er(u,d,3,i,h):p))return!1}}return!0}function Ar(e){return!(!es(e)||(t=e,Pe&&Pe in t))&&(Zo(e)?ze:fe).test(Pa(e));var t}function Ir(e){return"function"==typeof e?e:null==e?rl:"object"==typeof e?Vo(e)?zr(e[0],e[1]):Rr(e):hl(e)}function Br(e){if(!Sa(e))return bn(e);var t=[];for(var n in Ce(e))Ie.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Pr(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var n in Ce(e))t.push(n);return t}(e);var t=Sa(e),n=[];for(var r in e)("constructor"!=r||!t&&Ie.call(e,r))&&n.push(r);return n}function Lr(e,t){return e<t}function Fr(e,t){var n=-1,r=Uo(e)?we(e.length):[];return hr(e,(function(e,i,a){r[++n]=t(e,i,a)})),r}function Rr(e){var t=da(e);return 1==t.length&&t[0][2]?Oa(t[0][0],t[0][1]):function(n){return n===e||Nr(n,e,t)}}function zr(t,n){return xa(t)&&ka(n)?Oa(Ba(t),n):function(r){var i=Cs(r,t);return i===e&&i===n?Ds(r,t):Er(n,i,3)}}function Hr(t,n,r,i,a){t!==n&&vr(n,(function(o,s){if(a||(a=new qn),es(o))!function(t,n,r,i,a,o,s){var l=ja(t,r),c=ja(n,r),d=s.get(c);if(d)er(t,r,d);else{var u=o?o(l,c,r+"",t,n,s):e,h=u===e;if(h){var p=Vo(c),f=!p&&Xo(c),g=!p&&!f&&cs(c);u=c,p||f||g?Vo(l)?u=l:Ko(l)?u=Ti(l):f?(h=!1,u=Si(c,!0)):g?(h=!1,u=Oi(c,!0)):u=[]:is(c)||Wo(c)?(u=l,Wo(l)?u=bs(l):es(l)&&!Zo(l)||(u=ma(c))):h=!1}h&&(s.set(c,u),a(u,c,i,o,s),s.delete(c)),er(t,r,u)}}(t,n,s,r,Hr,i,a);else{var l=i?i(ja(t,s),o,s+"",t,n,a):e;l===e&&(l=o),er(t,s,l)}}),Es)}function Wr(t,n){var r=t.length;if(r)return va(n+=n<0?r:0,r)?t[n]:e}function Vr(e,t,n){t=t.length?Mt(t,(function(e){return Vo(e)?function(t){return Sr(t,1===e.length?e[0]:e)}:e})):[rl];var r=-1;t=Mt(t,qt(la()));var i=Fr(e,(function(e,n,i){var a=Mt(t,(function(t){return t(e)}));return{criteria:a,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var l=Ci(i[r],a[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Yr(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=Sr(e,o);n(s,o)&&Jr(a,yi(o,e),s)}return a}function Ur(e,t,n,r){var i=r?Rt:Ft,a=-1,o=t.length,s=e;for(e===t&&(t=Ti(t)),n&&(s=Mt(e,qt(n)));++a<o;)for(var l=0,c=t[a],d=n?n(c):c;(l=i(s,d,l,r))>-1;)s!==e&&qe.call(s,l,1),qe.call(e,l,1);return e}function Kr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;va(i)?qe.call(e,i,1):ui(e,i)}}return e}function Xr(e,t){return e+mt($n()*(t-e+1))}function qr(e,t){var n="";if(!e||t<1||t>d)return n;do{t%2&&(n+=e),(t=mt(t/2))&&(e+=e)}while(t);return n}function Gr(e,t){return Ma(Ca(e,t,rl),e+"")}function Zr(e){return Zn(Rs(e))}function Qr(e,t){var n=Rs(e);return Aa(n,sr(t,0,n.length))}function Jr(t,n,r,i){if(!es(t))return t;for(var a=-1,o=(n=yi(n,t)).length,s=o-1,l=t;null!=l&&++a<o;){var c=Ba(n[a]),d=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(a!=s){var u=l[c];(d=i?i(u,c,l):e)===e&&(d=es(u)?u:va(n[a+1])?[]:{})}tr(l,c,d),l=l[c]}return t}var ei=_n?function(e,t){return _n.set(e,t),e}:rl,ti=ct?function(e,t){return ct(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:rl;function ni(e){return Aa(Rs(e))}function ri(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=we(i);++r<i;)a[r]=e[r+t];return a}function ii(e,t){var n;return hr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function ai(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var a=r+i>>>1,o=e[a];null!==o&&!ls(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return oi(e,t,rl,n)}function oi(t,n,r,i){var a=0,o=null==t?0:t.length;if(0===o)return 0;for(var s=(n=r(n))!=n,l=null===n,c=ls(n),d=n===e;a<o;){var u=mt((a+o)/2),h=r(t[u]),p=h!==e,f=null===h,g=h==h,m=ls(h);if(s)var b=i||g;else b=d?g&&(i||p):l?g&&p&&(i||!f):c?g&&p&&!f&&(i||!m):!f&&!m&&(i?h<=n:h<n);b?a=u+1:o=u}return yn(o,4294967294)}function si(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!Ro(s,l)){var l=s;a[i++]=0===o?0:o}}return a}function li(e){return"number"==typeof e?e:ls(e)?u:+e}function ci(e){if("string"==typeof e)return e;if(Vo(e))return Mt(e,ci)+"";if(ls(e))return Fn?Fn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,n){var r=-1,i=Tt,a=e.length,o=!0,s=[],l=s;if(n)o=!1,i=_t;else if(a>=200){var c=t?null:qi(e);if(c)return ln(c);o=!1,i=Zt,l=new Xn}else l=t?[]:s;e:for(;++r<a;){var d=e[r],u=t?t(d):d;if(d=n||0!==d?d:0,o&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,n)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Da(e,t=yi(t,e)))||delete e[Ba(qa(t))]}function hi(e,t,n,r){return Jr(e,t,n(Sr(e,t)),r)}function pi(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?ri(e,r?0:a,r?a+1:i):ri(e,r?a+1:0,r?i:a)}function fi(e,t){var n=e;return n instanceof Vn&&(n=n.value()),Nt(t,(function(e,t){return t.func.apply(t.thisArg,Et([e],t.args))}),n)}function gi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,a=we(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=ur(a[i]||o,e[s],t,n));return di(br(a,1),t,n)}function mi(t,n,r){for(var i=-1,a=t.length,o=n.length,s={};++i<a;){var l=i<o?n[i]:e;r(s,t[i],l)}return s}function bi(e){return Ko(e)?e:[]}function vi(e){return"function"==typeof e?e:rl}function yi(e,t){return Vo(e)?e:xa(e,t)?[e]:Ia(vs(e))}var xi=Gr;function wi(t,n,r){var i=t.length;return r=r===e?i:r,!n&&r>=i?t:ri(t,n,r)}var $i=dt||function(e){return ut.clearTimeout(e)};function Si(e,t){if(t)return e.slice();var n=e.length,r=Ye?Ye(n):new e.constructor(n);return e.copy(r),r}function ki(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function Oi(e,t){var n=t?ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ci(t,n){if(t!==n){var r=t!==e,i=null===t,a=t==t,o=ls(t),s=n!==e,l=null===n,c=n==n,d=ls(n);if(!l&&!d&&!o&&t>n||o&&s&&c&&!l&&!d||i&&s&&c||!r&&c||!a)return 1;if(!i&&!o&&!d&&t<n||d&&r&&a&&!i&&!o||l&&r&&a||!s&&a||!c)return-1}return 0}function Di(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,l=t.length,c=vn(a-o,0),d=we(l+c),u=!r;++s<l;)d[s]=t[s];for(;++i<o;)(u||i<a)&&(d[n[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function ji(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,l=-1,c=t.length,d=vn(a-s,0),u=we(d+c),h=!r;++i<d;)u[i]=e[i];for(var p=i;++l<c;)u[p+l]=t[l];for(;++o<s;)(h||i<a)&&(u[p+n[o]]=e[i++]);return u}function Ti(e,t){var n=-1,r=e.length;for(t||(t=we(r));++n<r;)t[n]=e[n];return t}function _i(t,n,r,i){var a=!r;r||(r={});for(var o=-1,s=n.length;++o<s;){var l=n[o],c=i?i(r[l],t[l],l,r,t):e;c===e&&(c=t[l]),a?ar(r,l,c):tr(r,l,c)}return r}function Mi(e,t){return function(n,r){var i=Vo(n)?kt:rr,a=t?t():{};return i(n,e,la(r,2),a)}}function Ei(t){return Gr((function(n,r){var i=-1,a=r.length,o=a>1?r[a-1]:e,s=a>2?r[2]:e;for(o=t.length>3&&"function"==typeof o?(a--,o):e,s&&ya(r[0],r[1],s)&&(o=a<3?e:o,a=1),n=Ce(n);++i<a;){var l=r[i];l&&t(n,l,i,o)}return n}))}function Ni(e,t){return function(n,r){if(null==n)return n;if(!Uo(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Ce(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}function Ai(e){return function(t,n,r){for(var i=-1,a=Ce(t),o=r(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===n(a[l],l,a))break}return t}}function Ii(t){return function(n){var r=rn(n=vs(n))?un(n):e,i=r?r[0]:n.charAt(0),a=r?wi(r,1).join(""):n.slice(1);return i[t]()+a}}function Bi(e){return function(t){return Nt(Zs(Ws(t).replace(Ge,"")),e,"")}}function Pi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=zn(e.prototype),r=e.apply(n,t);return es(r)?r:n}}function Li(t){return function(n,r,i){var a=Ce(n);if(!Uo(n)){var o=la(r,3);n=Ms(n),r=function(e){return o(a[e],e,a)}}var s=t(n,r,i);return s>-1?a[o?n[s]:s]:e}}function Fi(n){return na((function(r){var i=r.length,a=i,o=Wn.prototype.thru;for(n&&r.reverse();a--;){var s=r[a];if("function"!=typeof s)throw new Te(t);if(o&&!l&&"wrapper"==oa(s))var l=new Wn([],!0)}for(a=l?a:i;++a<i;){var c=oa(s=r[a]),d="wrapper"==c?aa(s):e;l=d&&wa(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[oa(d[0])].apply(l,d[3]):1==s.length&&wa(s)?l[c]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Vo(t))return l.plant(t).value();for(var n=0,a=i?r[n].apply(this,e):t;++n<i;)a=r[n].call(this,a);return a}}))}function Ri(t,n,r,i,a,o,l,c,d,u){var h=n&s,p=1&n,f=2&n,g=24&n,m=512&n,b=f?e:Pi(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=sa(s),$=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(y,w);if(i&&(y=Di(y,i,a,g)),o&&(y=ji(y,o,l,g)),v-=$,g&&v<u){var S=sn(y,w);return Ki(t,n,Ri,s.placeholder,r,y,S,c,d,u-v)}var k=p?r:this,O=f?k[t]:t;return v=y.length,c?y=function(t,n){for(var r=t.length,i=yn(n.length,r),a=Ti(t);i--;){var o=n[i];t[i]=va(o,r)?a[o]:e}return t}(y,c):m&&v>1&&y.reverse(),h&&d<v&&(y.length=d),this&&this!==ut&&this instanceof s&&(O=b||Pi(O)),O.apply(k,y)}}function zi(e,t){return function(n,r){return function(e,t,n,r){return xr(e,(function(e,i,a){t(r,n(e),i,a)})),r}(n,e,t(r),{})}}function Hi(t,n){return function(r,i){var a;if(r===e&&i===e)return n;if(r!==e&&(a=r),i!==e){if(a===e)return i;"string"==typeof r||"string"==typeof i?(r=ci(r),i=ci(i)):(r=li(r),i=li(i)),a=t(r,i)}return a}}function Wi(e){return na((function(t){return t=Mt(t,qt(la())),Gr((function(n){var r=this;return e(t,(function(e){return St(e,r,n)}))}))}))}function Vi(t,n){var r=(n=n===e?" ":ci(n)).length;if(r<2)return r?qr(n,t):n;var i=qr(n,gt(t/dn(n)));return rn(n)?wi(un(i),0,t).join(""):i.slice(0,t)}function Yi(t){return function(n,r,i){return i&&"number"!=typeof i&&ya(n,r,i)&&(r=i=e),n=ps(n),r===e?(r=n,n=0):r=ps(r),function(e,t,n,r){for(var i=-1,a=vn(gt((t-e)/(n||1)),0),o=we(a);a--;)o[r?a:++i]=e,e+=n;return o}(n,r,i=i===e?n<r?1:-1:ps(i),t)}}function Ui(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=ms(t),n=ms(n)),e(t,n)}}function Ki(t,n,r,i,s,l,c,d,u,h){var p=8&n;n|=p?a:o,4&(n&=~(p?o:a))||(n&=-4);var f=[t,n,s,p?l:e,p?c:e,p?e:l,p?e:c,d,u,h],g=r.apply(e,f);return wa(t)&&Ta(g,f),g.placeholder=i,Ea(g,t,n)}function Xi(e){var t=Oe[e];return function(e,n){if(e=ms(e),(n=null==n?0:yn(fs(n),292))&&gn(e)){var r=(vs(e)+"e").split("e");return+((r=(vs(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var qi=Dn&&1/ln(new Dn([,-0]))[1]==c?function(e){return new Dn(e)}:ll;function Gi(e){return function(t){var n=fa(t);return n==w?an(t):n==C?cn(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(n,c,d,u,h,p,f,g){var m=2&c;if(!m&&"function"!=typeof n)throw new Te(t);var b=u?u.length:0;if(b||(c&=-97,u=h=e),f=f===e?f:vn(fs(f),0),g=g===e?g:fs(g),b-=h?h.length:0,c&o){var v=u,y=h;u=h=e}var x=m?e:aa(n),w=[n,c,d,u,h,v,y,p,f,g];if(x&&function(e,t){var n=e[1],i=t[1],a=n|i,o=a<131,c=i==s&&8==n||i==s&&n==l&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==n;if(!o&&!c)return e;1&i&&(e[2]=t[2],a|=1&n?0:4);var d=t[3];if(d){var u=e[3];e[3]=u?Di(u,d,t[4]):d,e[4]=u?sn(e[3],r):t[4]}(d=t[5])&&(u=e[5],e[5]=u?ji(u,d,t[6]):d,e[6]=u?sn(e[5],r):t[6]),(d=t[7])&&(e[7]=d),i&s&&(e[8]=null==e[8]?t[8]:yn(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=a}(w,x),n=w[0],c=w[1],d=w[2],u=w[3],h=w[4],!(g=w[9]=w[9]===e?m?0:n.length:vn(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==i?function(t,n,r){var i=Pi(t);return function a(){for(var o=arguments.length,s=we(o),l=o,c=sa(a);l--;)s[l]=arguments[l];var d=o<3&&s[0]!==c&&s[o-1]!==c?[]:sn(s,c);return(o-=d.length)<r?Ki(t,n,Ri,a.placeholder,e,s,d,e,e,r-o):St(this&&this!==ut&&this instanceof a?i:t,this,s)}}(n,c,g):c!=a&&33!=c||h.length?Ri.apply(e,w):function(e,t,n,r){var i=1&t,a=Pi(e);return function t(){for(var o=-1,s=arguments.length,l=-1,c=r.length,d=we(c+s),u=this&&this!==ut&&this instanceof t?a:e;++l<c;)d[l]=r[l];for(;s--;)d[l++]=arguments[++o];return St(u,i?n:this,d)}}(n,c,d,u);else var $=function(e,t,n){var r=1&t,i=Pi(e);return function t(){return(this&&this!==ut&&this instanceof t?i:e).apply(r?n:this,arguments)}}(n,c,d);return Ea((x?ei:Ta)($,w),n,c)}function Qi(t,n,r,i){return t===e||Ro(t,Ee[r])&&!Ie.call(i,r)?n:t}function Ji(t,n,r,i,a,o){return es(t)&&es(n)&&(o.set(n,t),Hr(t,n,e,Ji,o),o.delete(n)),t}function ea(t){return is(t)?e:t}function ta(t,n,r,i,a,o){var s=1&r,l=t.length,c=n.length;if(l!=c&&!(s&&c>l))return!1;var d=o.get(t),u=o.get(n);if(d&&u)return d==n&&u==t;var h=-1,p=!0,f=2&r?new Xn:e;for(o.set(t,n),o.set(n,t);++h<l;){var g=t[h],m=n[h];if(i)var b=s?i(m,g,h,n,t,o):i(g,m,h,t,n,o);if(b!==e){if(b)continue;p=!1;break}if(f){if(!It(n,(function(e,t){if(!Zt(f,t)&&(g===e||a(g,e,r,i,o)))return f.push(t)}))){p=!1;break}}else if(g!==m&&!a(g,m,r,i,o)){p=!1;break}}return o.delete(t),o.delete(n),p}function na(t){return Ma(Ca(t,e,Va),t+"")}function ra(e){return kr(e,Ms,ha)}function ia(e){return kr(e,Es,pa)}var aa=_n?function(e){return _n.get(e)}:ll;function oa(e){for(var t=e.name+"",n=Mn[t],r=Ie.call(Mn,t)?n.length:0;r--;){var i=n[r],a=i.func;if(null==a||a==e)return i.name}return t}function sa(e){return(Ie.call(Rn,"placeholder")?Rn:e).placeholder}function la(){var e=Rn.iteratee||il;return e=e===il?Ir:e,arguments.length?e(arguments[0],arguments[1]):e}function ca(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function da(e){for(var t=Ms(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,ka(i)]}return t}function ua(t,n){var r=function(t,n){return null==t?e:t[n]}(t,n);return Ar(r)?r:e}var ha=Bt?function(e){return null==e?[]:(e=Ce(e),jt(Bt(e),(function(t){return Xe.call(e,t)})))}:gl,pa=Bt?function(e){for(var t=[];e;)Et(t,ha(e)),e=Ue(e);return t}:gl,fa=Or;function ga(e,t,n){for(var r=-1,i=(t=yi(t,e)).length,a=!1;++r<i;){var o=Ba(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&Jo(i)&&va(o,i)&&(Vo(e)||Wo(e))}function ma(e){return"function"!=typeof e.constructor||Sa(e)?{}:zn(Ue(e))}function ba(e){return Vo(e)||Wo(e)||!!(Qe&&e&&e[Qe])}function va(e,t){var n=typeof e;return!!(t=null==t?d:t)&&("number"==n||"symbol"!=n&&me.test(e))&&e>-1&&e%1==0&&e<t}function ya(e,t,n){if(!es(n))return!1;var r=typeof t;return!!("number"==r?Uo(n)&&va(t,n.length):"string"==r&&t in n)&&Ro(n[t],e)}function xa(e,t){if(Vo(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ls(e))||Q.test(e)||!Z.test(e)||null!=t&&e in Ce(t)}function wa(e){var t=oa(e),n=Rn[t];if("function"!=typeof n||!(t in Vn.prototype))return!1;if(e===n)return!0;var r=aa(n);return!!r&&e===r[0]}(kn&&fa(new kn(new ArrayBuffer(1)))!=M||On&&fa(new On)!=w||Cn&&fa(Cn.resolve())!=k||Dn&&fa(new Dn)!=C||jn&&fa(new jn)!=T)&&(fa=function(t){var n=Or(t),r=n==S?t.constructor:e,i=r?Pa(r):"";if(i)switch(i){case En:return M;case Nn:return w;case An:return k;case In:return C;case Bn:return T}return n});var $a=Ne?Zo:ml;function Sa(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ee)}function ka(e){return e==e&&!es(e)}function Oa(t,n){return function(r){return null!=r&&r[t]===n&&(n!==e||t in Ce(r))}}function Ca(t,n,r){return n=vn(n===e?t.length-1:n,0),function(){for(var e=arguments,i=-1,a=vn(e.length-n,0),o=we(a);++i<a;)o[i]=e[n+i];i=-1;for(var s=we(n+1);++i<n;)s[i]=e[i];return s[n]=r(o),St(t,this,s)}}function Da(e,t){return t.length<2?e:Sr(e,ri(t,0,-1))}function ja(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Ta=Na(ei),_a=pt||function(e,t){return ut.setTimeout(e,t)},Ma=Na(ti);function Ea(e,t,n){var r=t+"";return Ma(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ie,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Ot(p,(function(n){var r="_."+n[0];t&n[1]&&!Tt(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(ae);return t?t[1].split(oe):[]}(r),n)))}function Na(t){var n=0,r=0;return function(){var i=xn(),a=16-(i-r);if(r=i,a>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(e,arguments)}}function Aa(t,n){var r=-1,i=t.length,a=i-1;for(n=n===e?i:n;++r<n;){var o=Xr(r,a),s=t[o];t[o]=t[r],t[r]=s}return t.length=n,t}var Ia=function(e){var t=Ao(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,n,r,i){t.push(r?i.replace(ce,"$1"):n||e)})),t}));function Ba(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Pa(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function La(e){if(e instanceof Vn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=Ti(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Fa=Gr((function(e,t){return Ko(e)?ur(e,br(t,1,Ko,!0)):[]})),Ra=Gr((function(t,n){var r=qa(n);return Ko(r)&&(r=e),Ko(t)?ur(t,br(n,1,Ko,!0),la(r,2)):[]})),za=Gr((function(t,n){var r=qa(n);return Ko(r)&&(r=e),Ko(t)?ur(t,br(n,1,Ko,!0),e,r):[]}));function Ha(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:fs(n);return i<0&&(i=vn(r+i,0)),Lt(e,la(t,3),i)}function Wa(t,n,r){var i=null==t?0:t.length;if(!i)return-1;var a=i-1;return r!==e&&(a=fs(r),a=r<0?vn(i+a,0):yn(a,i-1)),Lt(t,la(n,3),a,!0)}function Va(e){return null!=e&&e.length?br(e,1):[]}function Ya(t){return t&&t.length?t[0]:e}var Ua=Gr((function(e){var t=Mt(e,bi);return t.length&&t[0]===e[0]?Tr(t):[]})),Ka=Gr((function(t){var n=qa(t),r=Mt(t,bi);return n===qa(r)?n=e:r.pop(),r.length&&r[0]===t[0]?Tr(r,la(n,2)):[]})),Xa=Gr((function(t){var n=qa(t),r=Mt(t,bi);return(n="function"==typeof n?n:e)&&r.pop(),r.length&&r[0]===t[0]?Tr(r,e,n):[]}));function qa(t){var n=null==t?0:t.length;return n?t[n-1]:e}var Ga=Gr(Za);function Za(e,t){return e&&e.length&&t&&t.length?Ur(e,t):e}var Qa=na((function(e,t){var n=null==e?0:e.length,r=or(e,t);return Kr(e,Mt(t,(function(e){return va(e,n)?+e:e})).sort(Ci)),r}));function Ja(e){return null==e?e:Sn.call(e)}var eo=Gr((function(e){return di(br(e,1,Ko,!0))})),to=Gr((function(t){var n=qa(t);return Ko(n)&&(n=e),di(br(t,1,Ko,!0),la(n,2))})),no=Gr((function(t){var n=qa(t);return n="function"==typeof n?n:e,di(br(t,1,Ko,!0),e,n)}));function ro(e){if(!e||!e.length)return[];var t=0;return e=jt(e,(function(e){if(Ko(e))return t=vn(e.length,t),!0})),Kt(t,(function(t){return Mt(e,Wt(t))}))}function io(t,n){if(!t||!t.length)return[];var r=ro(t);return null==n?r:Mt(r,(function(t){return St(n,e,t)}))}var ao=Gr((function(e,t){return Ko(e)?ur(e,t):[]})),oo=Gr((function(e){return gi(jt(e,Ko))})),so=Gr((function(t){var n=qa(t);return Ko(n)&&(n=e),gi(jt(t,Ko),la(n,2))})),lo=Gr((function(t){var n=qa(t);return n="function"==typeof n?n:e,gi(jt(t,Ko),e,n)})),co=Gr(ro),uo=Gr((function(t){var n=t.length,r=n>1?t[n-1]:e;return r="function"==typeof r?(t.pop(),r):e,io(t,r)}));function ho(e){var t=Rn(e);return t.__chain__=!0,t}function po(e,t){return t(e)}var fo=na((function(t){var n=t.length,r=n?t[0]:0,i=this.__wrapped__,a=function(e){return or(e,t)};return!(n>1||this.__actions__.length)&&i instanceof Vn&&va(r)?((i=i.slice(r,+r+(n?1:0))).__actions__.push({func:po,args:[a],thisArg:e}),new Wn(i,this.__chain__).thru((function(t){return n&&!t.length&&t.push(e),t}))):this.thru(a)})),go=Mi((function(e,t,n){Ie.call(e,n)?++e[n]:ar(e,n,1)})),mo=Li(Ha),bo=Li(Wa);function vo(e,t){return(Vo(e)?Ot:hr)(e,la(t,3))}function yo(e,t){return(Vo(e)?Ct:pr)(e,la(t,3))}var xo=Mi((function(e,t,n){Ie.call(e,n)?e[n].push(t):ar(e,n,[t])})),wo=Gr((function(e,t,n){var r=-1,i="function"==typeof t,a=Uo(e)?we(e.length):[];return hr(e,(function(e){a[++r]=i?St(t,e,n):_r(e,t,n)})),a})),$o=Mi((function(e,t,n){ar(e,n,t)}));function So(e,t){return(Vo(e)?Mt:Fr)(e,la(t,3))}var ko=Mi((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]})),Oo=Gr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&ya(e,t[0],t[1])?t=[]:n>2&&ya(t[0],t[1],t[2])&&(t=[t[0]]),Vr(e,br(t,1),[])})),Co=ht||function(){return ut.Date.now()};function Do(t,n,r){return n=r?e:n,n=t&&null==n?t.length:n,Zi(t,s,e,e,e,e,n)}function jo(n,r){var i;if("function"!=typeof r)throw new Te(t);return n=fs(n),function(){return--n>0&&(i=r.apply(this,arguments)),n<=1&&(r=e),i}}var To=Gr((function(e,t,n){var r=1;if(n.length){var i=sn(n,sa(To));r|=a}return Zi(e,r,t,n,i)})),_o=Gr((function(e,t,n){var r=3;if(n.length){var i=sn(n,sa(_o));r|=a}return Zi(t,r,e,n,i)}));function Mo(n,r,i){var a,o,s,l,c,d,u=0,h=!1,p=!1,f=!0;if("function"!=typeof n)throw new Te(t);function g(t){var r=a,i=o;return a=o=e,u=t,l=n.apply(i,r)}function m(t){var n=t-d;return d===e||n>=r||n<0||p&&t-u>=s}function b(){var e=Co();if(m(e))return v(e);c=_a(b,function(e){var t=r-(e-d);return p?yn(t,s-(e-u)):t}(e))}function v(t){return c=e,f&&a?g(t):(a=o=e,l)}function y(){var t=Co(),n=m(t);if(a=arguments,o=this,d=t,n){if(c===e)return function(e){return u=e,c=_a(b,r),h?g(e):l}(d);if(p)return $i(c),c=_a(b,r),g(d)}return c===e&&(c=_a(b,r)),l}return r=ms(r)||0,es(i)&&(h=!!i.leading,s=(p="maxWait"in i)?vn(ms(i.maxWait)||0,r):s,f="trailing"in i?!!i.trailing:f),y.cancel=function(){c!==e&&$i(c),u=0,a=d=o=c=e},y.flush=function(){return c===e?l:v(Co())},y}var Eo=Gr((function(e,t){return dr(e,1,t)})),No=Gr((function(e,t,n){return dr(e,ms(t)||0,n)}));function Ao(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new Te(t);var r=function(){var t=arguments,i=n?n.apply(this,t):t[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,t);return r.cache=a.set(i,o)||a,o};return r.cache=new(Ao.Cache||Kn),r}function Io(e){if("function"!=typeof e)throw new Te(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ao.Cache=Kn;var Bo=xi((function(e,t){var n=(t=1==t.length&&Vo(t[0])?Mt(t[0],qt(la())):Mt(br(t,1),qt(la()))).length;return Gr((function(r){for(var i=-1,a=yn(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return St(e,this,r)}))})),Po=Gr((function(t,n){var r=sn(n,sa(Po));return Zi(t,a,e,n,r)})),Lo=Gr((function(t,n){var r=sn(n,sa(Lo));return Zi(t,o,e,n,r)})),Fo=na((function(t,n){return Zi(t,l,e,e,e,n)}));function Ro(e,t){return e===t||e!=e&&t!=t}var zo=Ui(Cr),Ho=Ui((function(e,t){return e>=t})),Wo=Mr(function(){return arguments}())?Mr:function(e){return ts(e)&&Ie.call(e,"callee")&&!Xe.call(e,"callee")},Vo=we.isArray,Yo=bt?qt(bt):function(e){return ts(e)&&Or(e)==_};function Uo(e){return null!=e&&Jo(e.length)&&!Zo(e)}function Ko(e){return ts(e)&&Uo(e)}var Xo=Vt||ml,qo=vt?qt(vt):function(e){return ts(e)&&Or(e)==b};function Go(e){if(!ts(e))return!1;var t=Or(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Zo(e){if(!es(e))return!1;var t=Or(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qo(e){return"number"==typeof e&&e==fs(e)}function Jo(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var ns=yt?qt(yt):function(e){return ts(e)&&fa(e)==w};function rs(e){return"number"==typeof e||ts(e)&&Or(e)==$}function is(e){if(!ts(e)||Or(e)!=S)return!1;var t=Ue(e);if(null===t)return!0;var n=Ie.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Ae.call(n)==Fe}var as=xt?qt(xt):function(e){return ts(e)&&Or(e)==O},os=wt?qt(wt):function(e){return ts(e)&&fa(e)==C};function ss(e){return"string"==typeof e||!Vo(e)&&ts(e)&&Or(e)==D}function ls(e){return"symbol"==typeof e||ts(e)&&Or(e)==j}var cs=$t?qt($t):function(e){return ts(e)&&Jo(e.length)&&!!it[Or(e)]},ds=Ui(Lr),us=Ui((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Uo(e))return ss(e)?un(e):Ti(e);if(et&&e[et])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[et]());var t=fa(e);return(t==w?an:t==C?ln:Rs)(e)}function ps(e){return e?(e=ms(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function fs(e){var t=ps(e),n=t%1;return t==t?n?t-n:t:0}function gs(e){return e?sr(fs(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xt(e);var n=pe.test(e);return n||ge.test(e)?lt(e.slice(2),n?2:8):he.test(e)?u:+e}function bs(e){return _i(e,Es(e))}function vs(e){return null==e?"":ci(e)}var ys=Ei((function(e,t){if(Sa(t)||Uo(t))_i(t,Ms(t),e);else for(var n in t)Ie.call(t,n)&&tr(e,n,t[n])})),xs=Ei((function(e,t){_i(t,Es(t),e)})),ws=Ei((function(e,t,n,r){_i(t,Es(t),e,r)})),$s=Ei((function(e,t,n,r){_i(t,Ms(t),e,r)})),Ss=na(or),ks=Gr((function(t,n){t=Ce(t);var r=-1,i=n.length,a=i>2?n[2]:e;for(a&&ya(n[0],n[1],a)&&(i=1);++r<i;)for(var o=n[r],s=Es(o),l=-1,c=s.length;++l<c;){var d=s[l],u=t[d];(u===e||Ro(u,Ee[d])&&!Ie.call(t,d))&&(t[d]=o[d])}return t})),Os=Gr((function(t){return t.push(e,Ji),St(As,e,t)}));function Cs(t,n,r){var i=null==t?e:Sr(t,n);return i===e?r:i}function Ds(e,t){return null!=e&&ga(e,t,jr)}var js=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Le.call(t)),e[t]=n}),el(rl)),Ts=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Le.call(t)),Ie.call(e,t)?e[t].push(n):e[t]=[n]}),la),_s=Gr(_r);function Ms(e){return Uo(e)?Gn(e):Br(e)}function Es(e){return Uo(e)?Gn(e,!0):Pr(e)}var Ns=Ei((function(e,t,n){Hr(e,t,n)})),As=Ei((function(e,t,n,r){Hr(e,t,n,r)})),Is=na((function(e,t){var n={};if(null==e)return n;var r=!1;t=Mt(t,(function(t){return t=yi(t,e),r||(r=t.length>1),t})),_i(e,ia(e),n),r&&(n=lr(n,7,ea));for(var i=t.length;i--;)ui(n,t[i]);return n})),Bs=na((function(e,t){return null==e?{}:function(e,t){return Yr(e,t,(function(t,n){return Ds(e,n)}))}(e,t)}));function Ps(e,t){if(null==e)return{};var n=Mt(ia(e),(function(e){return[e]}));return t=la(t),Yr(e,n,(function(e,n){return t(e,n[0])}))}var Ls=Gi(Ms),Fs=Gi(Es);function Rs(e){return null==e?[]:Gt(e,Ms(e))}var zs=Bi((function(e,t,n){return t=t.toLowerCase(),e+(n?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,en).replace(Ze,"")}var Vs=Bi((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ys=Bi((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Us=Ii("toLowerCase"),Ks=Bi((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()})),Xs=Bi((function(e,t,n){return e+(n?" ":"")+Gs(t)})),qs=Bi((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Gs=Ii("toUpperCase");function Zs(t,n,r){return t=vs(t),(n=r?e:n)===e?function(e){return tt.test(e)}(t)?function(e){return e.match(Je)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(n)||[]}var Qs=Gr((function(t,n){try{return St(t,e,n)}catch(e){return Go(e)?e:new Se(e)}})),Js=na((function(e,t){return Ot(t,(function(t){t=Ba(t),ar(e,t,To(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Fi(),nl=Fi(!0);function rl(e){return e}function il(e){return Ir("function"==typeof e?e:lr(e,1))}var al=Gr((function(e,t){return function(n){return _r(n,e,t)}})),ol=Gr((function(e,t){return function(n){return _r(e,n,t)}}));function sl(e,t,n){var r=Ms(t),i=$r(t,r);null!=n||es(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=$r(t,Ms(t)));var a=!(es(n)&&"chain"in n&&!n.chain),o=Zo(e);return Ot(i,(function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=Ti(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Et([this.value()],arguments))})})),e}function ll(){}var cl=Wi(Mt),dl=Wi(Dt),ul=Wi(It);function hl(e){return xa(e)?Wt(Ba(e)):function(e){return function(t){return Sr(t,e)}}(e)}var pl=Yi(),fl=Yi(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Hi((function(e,t){return e+t}),0),yl=Xi("ceil"),xl=Hi((function(e,t){return e/t}),1),wl=Xi("floor"),$l=Hi((function(e,t){return e*t}),1),Sl=Xi("round"),kl=Hi((function(e,t){return e-t}),0);return Rn.after=function(e,n){if("function"!=typeof n)throw new Te(t);return e=fs(e),function(){if(--e<1)return n.apply(this,arguments)}},Rn.ary=Do,Rn.assign=ys,Rn.assignIn=xs,Rn.assignInWith=ws,Rn.assignWith=$s,Rn.at=Ss,Rn.before=jo,Rn.bind=To,Rn.bindAll=Js,Rn.bindKey=_o,Rn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Vo(e)?e:[e]},Rn.chain=ho,Rn.chunk=function(t,n,r){n=(r?ya(t,n,r):n===e)?1:vn(fs(n),0);var i=null==t?0:t.length;if(!i||n<1)return[];for(var a=0,o=0,s=we(gt(i/n));a<i;)s[o++]=ri(t,a,a+=n);return s},Rn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i},Rn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Et(Vo(n)?Ti(n):[n],br(t,1))},Rn.cond=function(e){var n=null==e?0:e.length,r=la();return e=n?Mt(e,(function(e){if("function"!=typeof e[1])throw new Te(t);return[r(e[0]),e[1]]})):[],Gr((function(t){for(var r=-1;++r<n;){var i=e[r];if(St(i[0],this,t))return St(i[1],this,t)}}))},Rn.conforms=function(e){return function(e){var t=Ms(e);return function(n){return cr(n,e,t)}}(lr(e,1))},Rn.constant=el,Rn.countBy=go,Rn.create=function(e,t){var n=zn(e);return null==t?n:ir(n,t)},Rn.curry=function t(n,r,i){var a=Zi(n,8,e,e,e,e,e,r=i?e:r);return a.placeholder=t.placeholder,a},Rn.curryRight=function t(n,r,a){var o=Zi(n,i,e,e,e,e,e,r=a?e:r);return o.placeholder=t.placeholder,o},Rn.debounce=Mo,Rn.defaults=ks,Rn.defaultsDeep=Os,Rn.defer=Eo,Rn.delay=No,Rn.difference=Fa,Rn.differenceBy=Ra,Rn.differenceWith=za,Rn.drop=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,(n=r||n===e?1:fs(n))<0?0:n,i):[]},Rn.dropRight=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,0,(n=i-(n=r||n===e?1:fs(n)))<0?0:n):[]},Rn.dropRightWhile=function(e,t){return e&&e.length?pi(e,la(t,3),!0,!0):[]},Rn.dropWhile=function(e,t){return e&&e.length?pi(e,la(t,3),!0):[]},Rn.fill=function(t,n,r,i){var a=null==t?0:t.length;return a?(r&&"number"!=typeof r&&ya(t,n,r)&&(r=0,i=a),function(t,n,r,i){var a=t.length;for((r=fs(r))<0&&(r=-r>a?0:a+r),(i=i===e||i>a?a:fs(i))<0&&(i+=a),i=r>i?0:gs(i);r<i;)t[r++]=n;return t}(t,n,r,i)):[]},Rn.filter=function(e,t){return(Vo(e)?jt:mr)(e,la(t,3))},Rn.flatMap=function(e,t){return br(So(e,t),1)},Rn.flatMapDeep=function(e,t){return br(So(e,t),c)},Rn.flatMapDepth=function(t,n,r){return r=r===e?1:fs(r),br(So(t,n),r)},Rn.flatten=Va,Rn.flattenDeep=function(e){return null!=e&&e.length?br(e,c):[]},Rn.flattenDepth=function(t,n){return null!=t&&t.length?br(t,n=n===e?1:fs(n)):[]},Rn.flip=function(e){return Zi(e,512)},Rn.flow=tl,Rn.flowRight=nl,Rn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},Rn.functions=function(e){return null==e?[]:$r(e,Ms(e))},Rn.functionsIn=function(e){return null==e?[]:$r(e,Es(e))},Rn.groupBy=xo,Rn.initial=function(e){return null!=e&&e.length?ri(e,0,-1):[]},Rn.intersection=Ua,Rn.intersectionBy=Ka,Rn.intersectionWith=Xa,Rn.invert=js,Rn.invertBy=Ts,Rn.invokeMap=wo,Rn.iteratee=il,Rn.keyBy=$o,Rn.keys=Ms,Rn.keysIn=Es,Rn.map=So,Rn.mapKeys=function(e,t){var n={};return t=la(t,3),xr(e,(function(e,r,i){ar(n,t(e,r,i),e)})),n},Rn.mapValues=function(e,t){var n={};return t=la(t,3),xr(e,(function(e,r,i){ar(n,r,t(e,r,i))})),n},Rn.matches=function(e){return Rr(lr(e,1))},Rn.matchesProperty=function(e,t){return zr(e,lr(t,1))},Rn.memoize=Ao,Rn.merge=Ns,Rn.mergeWith=As,Rn.method=al,Rn.methodOf=ol,Rn.mixin=sl,Rn.negate=Io,Rn.nthArg=function(e){return e=fs(e),Gr((function(t){return Wr(t,e)}))},Rn.omit=Is,Rn.omitBy=function(e,t){return Ps(e,Io(la(t)))},Rn.once=function(e){return jo(2,e)},Rn.orderBy=function(t,n,r,i){return null==t?[]:(Vo(n)||(n=null==n?[]:[n]),Vo(r=i?e:r)||(r=null==r?[]:[r]),Vr(t,n,r))},Rn.over=cl,Rn.overArgs=Bo,Rn.overEvery=dl,Rn.overSome=ul,Rn.partial=Po,Rn.partialRight=Lo,Rn.partition=ko,Rn.pick=Bs,Rn.pickBy=Ps,Rn.property=hl,Rn.propertyOf=function(t){return function(n){return null==t?e:Sr(t,n)}},Rn.pull=Ga,Rn.pullAll=Za,Rn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ur(e,t,la(n,2)):e},Rn.pullAllWith=function(t,n,r){return t&&t.length&&n&&n.length?Ur(t,n,e,r):t},Rn.pullAt=Qa,Rn.range=pl,Rn.rangeRight=fl,Rn.rearg=Fo,Rn.reject=function(e,t){return(Vo(e)?jt:mr)(e,Io(la(t,3)))},Rn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],a=e.length;for(t=la(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return Kr(e,i),n},Rn.rest=function(n,r){if("function"!=typeof n)throw new Te(t);return Gr(n,r=r===e?r:fs(r))},Rn.reverse=Ja,Rn.sampleSize=function(t,n,r){return n=(r?ya(t,n,r):n===e)?1:fs(n),(Vo(t)?Qn:Qr)(t,n)},Rn.set=function(e,t,n){return null==e?e:Jr(e,t,n)},Rn.setWith=function(t,n,r,i){return i="function"==typeof i?i:e,null==t?t:Jr(t,n,r,i)},Rn.shuffle=function(e){return(Vo(e)?Jn:ni)(e)},Rn.slice=function(t,n,r){var i=null==t?0:t.length;return i?(r&&"number"!=typeof r&&ya(t,n,r)?(n=0,r=i):(n=null==n?0:fs(n),r=r===e?i:fs(r)),ri(t,n,r)):[]},Rn.sortBy=Oo,Rn.sortedUniq=function(e){return e&&e.length?si(e):[]},Rn.sortedUniqBy=function(e,t){return e&&e.length?si(e,la(t,2)):[]},Rn.split=function(t,n,r){return r&&"number"!=typeof r&&ya(t,n,r)&&(n=r=e),(r=r===e?h:r>>>0)?(t=vs(t))&&("string"==typeof n||null!=n&&!as(n))&&!(n=ci(n))&&rn(t)?wi(un(t),0,r):t.split(n,r):[]},Rn.spread=function(e,n){if("function"!=typeof e)throw new Te(t);return n=null==n?0:vn(fs(n),0),Gr((function(t){var r=t[n],i=wi(t,0,n);return r&&Et(i,r),St(e,this,i)}))},Rn.tail=function(e){var t=null==e?0:e.length;return t?ri(e,1,t):[]},Rn.take=function(t,n,r){return t&&t.length?ri(t,0,(n=r||n===e?1:fs(n))<0?0:n):[]},Rn.takeRight=function(t,n,r){var i=null==t?0:t.length;return i?ri(t,(n=i-(n=r||n===e?1:fs(n)))<0?0:n,i):[]},Rn.takeRightWhile=function(e,t){return e&&e.length?pi(e,la(t,3),!1,!0):[]},Rn.takeWhile=function(e,t){return e&&e.length?pi(e,la(t,3)):[]},Rn.tap=function(e,t){return t(e),e},Rn.throttle=function(e,n,r){var i=!0,a=!0;if("function"!=typeof e)throw new Te(t);return es(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),Mo(e,n,{leading:i,maxWait:n,trailing:a})},Rn.thru=po,Rn.toArray=hs,Rn.toPairs=Ls,Rn.toPairsIn=Fs,Rn.toPath=function(e){return Vo(e)?Mt(e,Ba):ls(e)?[e]:Ti(Ia(vs(e)))},Rn.toPlainObject=bs,Rn.transform=function(e,t,n){var r=Vo(e),i=r||Xo(e)||cs(e);if(t=la(t,4),null==n){var a=e&&e.constructor;n=i?r?new a:[]:es(e)&&Zo(a)?zn(Ue(e)):{}}return(i?Ot:xr)(e,(function(e,r,i){return t(n,e,r,i)})),n},Rn.unary=function(e){return Do(e,1)},Rn.union=eo,Rn.unionBy=to,Rn.unionWith=no,Rn.uniq=function(e){return e&&e.length?di(e):[]},Rn.uniqBy=function(e,t){return e&&e.length?di(e,la(t,2)):[]},Rn.uniqWith=function(t,n){return n="function"==typeof n?n:e,t&&t.length?di(t,e,n):[]},Rn.unset=function(e,t){return null==e||ui(e,t)},Rn.unzip=ro,Rn.unzipWith=io,Rn.update=function(e,t,n){return null==e?e:hi(e,t,vi(n))},Rn.updateWith=function(t,n,r,i){return i="function"==typeof i?i:e,null==t?t:hi(t,n,vi(r),i)},Rn.values=Rs,Rn.valuesIn=function(e){return null==e?[]:Gt(e,Es(e))},Rn.without=ao,Rn.words=Zs,Rn.wrap=function(e,t){return Po(vi(t),e)},Rn.xor=oo,Rn.xorBy=so,Rn.xorWith=lo,Rn.zip=co,Rn.zipObject=function(e,t){return mi(e||[],t||[],tr)},Rn.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jr)},Rn.zipWith=uo,Rn.entries=Ls,Rn.entriesIn=Fs,Rn.extend=xs,Rn.extendWith=ws,sl(Rn,Rn),Rn.add=vl,Rn.attempt=Qs,Rn.camelCase=zs,Rn.capitalize=Hs,Rn.ceil=yl,Rn.clamp=function(t,n,r){return r===e&&(r=n,n=e),r!==e&&(r=(r=ms(r))==r?r:0),n!==e&&(n=(n=ms(n))==n?n:0),sr(ms(t),n,r)},Rn.clone=function(e){return lr(e,4)},Rn.cloneDeep=function(e){return lr(e,5)},Rn.cloneDeepWith=function(t,n){return lr(t,5,n="function"==typeof n?n:e)},Rn.cloneWith=function(t,n){return lr(t,4,n="function"==typeof n?n:e)},Rn.conformsTo=function(e,t){return null==t||cr(e,t,Ms(t))},Rn.deburr=Ws,Rn.defaultTo=function(e,t){return null==e||e!=e?t:e},Rn.divide=xl,Rn.endsWith=function(t,n,r){t=vs(t),n=ci(n);var i=t.length,a=r=r===e?i:sr(fs(r),0,i);return(r-=n.length)>=0&&t.slice(r,a)==n},Rn.eq=Ro,Rn.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(Y,tn):e},Rn.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Rn.every=function(t,n,r){var i=Vo(t)?Dt:fr;return r&&ya(t,n,r)&&(n=e),i(t,la(n,3))},Rn.find=mo,Rn.findIndex=Ha,Rn.findKey=function(e,t){return Pt(e,la(t,3),xr)},Rn.findLast=bo,Rn.findLastIndex=Wa,Rn.findLastKey=function(e,t){return Pt(e,la(t,3),wr)},Rn.floor=wl,Rn.forEach=vo,Rn.forEachRight=yo,Rn.forIn=function(e,t){return null==e?e:vr(e,la(t,3),Es)},Rn.forInRight=function(e,t){return null==e?e:yr(e,la(t,3),Es)},Rn.forOwn=function(e,t){return e&&xr(e,la(t,3))},Rn.forOwnRight=function(e,t){return e&&wr(e,la(t,3))},Rn.get=Cs,Rn.gt=zo,Rn.gte=Ho,Rn.has=function(e,t){return null!=e&&ga(e,t,Dr)},Rn.hasIn=Ds,Rn.head=Ya,Rn.identity=rl,Rn.includes=function(e,t,n,r){e=Uo(e)?e:Rs(e),n=n&&!r?fs(n):0;var i=e.length;return n<0&&(n=vn(i+n,0)),ss(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Ft(e,t,n)>-1},Rn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:fs(n);return i<0&&(i=vn(r+i,0)),Ft(e,t,i)},Rn.inRange=function(t,n,r){return n=ps(n),r===e?(r=n,n=0):r=ps(r),function(e,t,n){return e>=yn(t,n)&&e<vn(t,n)}(t=ms(t),n,r)},Rn.invoke=_s,Rn.isArguments=Wo,Rn.isArray=Vo,Rn.isArrayBuffer=Yo,Rn.isArrayLike=Uo,Rn.isArrayLikeObject=Ko,Rn.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Or(e)==m},Rn.isBuffer=Xo,Rn.isDate=qo,Rn.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Rn.isEmpty=function(e){if(null==e)return!0;if(Uo(e)&&(Vo(e)||"string"==typeof e||"function"==typeof e.splice||Xo(e)||cs(e)||Wo(e)))return!e.length;var t=fa(e);if(t==w||t==C)return!e.size;if(Sa(e))return!Br(e).length;for(var n in e)if(Ie.call(e,n))return!1;return!0},Rn.isEqual=function(e,t){return Er(e,t)},Rn.isEqualWith=function(t,n,r){var i=(r="function"==typeof r?r:e)?r(t,n):e;return i===e?Er(t,n,e,r):!!i},Rn.isError=Go,Rn.isFinite=function(e){return"number"==typeof e&&gn(e)},Rn.isFunction=Zo,Rn.isInteger=Qo,Rn.isLength=Jo,Rn.isMap=ns,Rn.isMatch=function(e,t){return e===t||Nr(e,t,da(t))},Rn.isMatchWith=function(t,n,r){return r="function"==typeof r?r:e,Nr(t,n,da(n),r)},Rn.isNaN=function(e){return rs(e)&&e!=+e},Rn.isNative=function(e){if($a(e))throw new Se("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ar(e)},Rn.isNil=function(e){return null==e},Rn.isNull=function(e){return null===e},Rn.isNumber=rs,Rn.isObject=es,Rn.isObjectLike=ts,Rn.isPlainObject=is,Rn.isRegExp=as,Rn.isSafeInteger=function(e){return Qo(e)&&e>=-9007199254740991&&e<=d},Rn.isSet=os,Rn.isString=ss,Rn.isSymbol=ls,Rn.isTypedArray=cs,Rn.isUndefined=function(t){return t===e},Rn.isWeakMap=function(e){return ts(e)&&fa(e)==T},Rn.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Or(e)},Rn.join=function(e,t){return null==e?"":mn.call(e,t)},Rn.kebabCase=Vs,Rn.last=qa,Rn.lastIndexOf=function(t,n,r){var i=null==t?0:t.length;if(!i)return-1;var a=i;return r!==e&&(a=(a=fs(r))<0?vn(i+a,0):yn(a,i-1)),n==n?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(t,n,a):Lt(t,zt,a,!0)},Rn.lowerCase=Ys,Rn.lowerFirst=Us,Rn.lt=ds,Rn.lte=us,Rn.max=function(t){return t&&t.length?gr(t,rl,Cr):e},Rn.maxBy=function(t,n){return t&&t.length?gr(t,la(n,2),Cr):e},Rn.mean=function(e){return Ht(e,rl)},Rn.meanBy=function(e,t){return Ht(e,la(t,2))},Rn.min=function(t){return t&&t.length?gr(t,rl,Lr):e},Rn.minBy=function(t,n){return t&&t.length?gr(t,la(n,2),Lr):e},Rn.stubArray=gl,Rn.stubFalse=ml,Rn.stubObject=function(){return{}},Rn.stubString=function(){return""},Rn.stubTrue=function(){return!0},Rn.multiply=$l,Rn.nth=function(t,n){return t&&t.length?Wr(t,fs(n)):e},Rn.noConflict=function(){return ut._===this&&(ut._=Re),this},Rn.noop=ll,Rn.now=Co,Rn.pad=function(e,t,n){e=vs(e);var r=(t=fs(t))?dn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Vi(mt(i),n)+e+Vi(gt(i),n)},Rn.padEnd=function(e,t,n){e=vs(e);var r=(t=fs(t))?dn(e):0;return t&&r<t?e+Vi(t-r,n):e},Rn.padStart=function(e,t,n){e=vs(e);var r=(t=fs(t))?dn(e):0;return t&&r<t?Vi(t-r,n)+e:e},Rn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),wn(vs(e).replace(ne,""),t||0)},Rn.random=function(t,n,r){if(r&&"boolean"!=typeof r&&ya(t,n,r)&&(n=r=e),r===e&&("boolean"==typeof n?(r=n,n=e):"boolean"==typeof t&&(r=t,t=e)),t===e&&n===e?(t=0,n=1):(t=ps(t),n===e?(n=t,t=0):n=ps(n)),t>n){var i=t;t=n,n=i}if(r||t%1||n%1){var a=$n();return yn(t+a*(n-t+st("1e-"+((a+"").length-1))),n)}return Xr(t,n)},Rn.reduce=function(e,t,n){var r=Vo(e)?Nt:Yt,i=arguments.length<3;return r(e,la(t,4),n,i,hr)},Rn.reduceRight=function(e,t,n){var r=Vo(e)?At:Yt,i=arguments.length<3;return r(e,la(t,4),n,i,pr)},Rn.repeat=function(t,n,r){return n=(r?ya(t,n,r):n===e)?1:fs(n),qr(vs(t),n)},Rn.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Rn.result=function(t,n,r){var i=-1,a=(n=yi(n,t)).length;for(a||(a=1,t=e);++i<a;){var o=null==t?e:t[Ba(n[i])];o===e&&(i=a,o=r),t=Zo(o)?o.call(t):o}return t},Rn.round=Sl,Rn.runInContext=re,Rn.sample=function(e){return(Vo(e)?Zn:Zr)(e)},Rn.size=function(e){if(null==e)return 0;if(Uo(e))return ss(e)?dn(e):e.length;var t=fa(e);return t==w||t==C?e.size:Br(e).length},Rn.snakeCase=Ks,Rn.some=function(t,n,r){var i=Vo(t)?It:ii;return r&&ya(t,n,r)&&(n=e),i(t,la(n,3))},Rn.sortedIndex=function(e,t){return ai(e,t)},Rn.sortedIndexBy=function(e,t,n){return oi(e,t,la(n,2))},Rn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=ai(e,t);if(r<n&&Ro(e[r],t))return r}return-1},Rn.sortedLastIndex=function(e,t){return ai(e,t,!0)},Rn.sortedLastIndexBy=function(e,t,n){return oi(e,t,la(n,2),!0)},Rn.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var n=ai(e,t,!0)-1;if(Ro(e[n],t))return n}return-1},Rn.startCase=Xs,Rn.startsWith=function(e,t,n){return e=vs(e),n=null==n?0:sr(fs(n),0,e.length),t=ci(t),e.slice(n,n+t.length)==t},Rn.subtract=kl,Rn.sum=function(e){return e&&e.length?Ut(e,rl):0},Rn.sumBy=function(e,t){return e&&e.length?Ut(e,la(t,2)):0},Rn.template=function(t,n,r){var i=Rn.templateSettings;r&&ya(t,n,r)&&(n=e),t=vs(t),n=ws({},n,i,Qi);var a,o,s=ws({},n.imports,i.imports,Qi),l=Ms(s),c=Gt(s,l),d=0,u=n.interpolate||ve,h="__p += '",p=De((n.escape||ve).source+"|"+u.source+"|"+(u===G?de:ve).source+"|"+(n.evaluate||ve).source+"|$","g"),f="//# sourceURL="+(Ie.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rt+"]")+"\n";t.replace(p,(function(e,n,r,i,s,l){return r||(r=i),h+=t.slice(d,l).replace(ye,nn),n&&(a=!0,h+="' +\n__e("+n+") +\n'"),s&&(o=!0,h+="';\n"+s+";\n__p += '"),r&&(h+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=l+e.length,e})),h+="';\n";var g=Ie.call(n,"variable")&&n.variable;if(g){if(le.test(g))throw new Se("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(o?h.replace(z,""):h).replace(H,"$1").replace(W,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(a?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Qs((function(){return ke(l,f+"return "+h).apply(e,c)}));if(m.source=h,Go(m))throw m;return m},Rn.times=function(e,t){if((e=fs(e))<1||e>d)return[];var n=h,r=yn(e,h);t=la(t),e-=h;for(var i=Kt(r,t);++n<e;)t(n);return i},Rn.toFinite=ps,Rn.toInteger=fs,Rn.toLength=gs,Rn.toLower=function(e){return vs(e).toLowerCase()},Rn.toNumber=ms,Rn.toSafeInteger=function(e){return e?sr(fs(e),-9007199254740991,d):0===e?e:0},Rn.toString=vs,Rn.toUpper=function(e){return vs(e).toUpperCase()},Rn.trim=function(t,n,r){if((t=vs(t))&&(r||n===e))return Xt(t);if(!t||!(n=ci(n)))return t;var i=un(t),a=un(n);return wi(i,Qt(i,a),Jt(i,a)+1).join("")},Rn.trimEnd=function(t,n,r){if((t=vs(t))&&(r||n===e))return t.slice(0,hn(t)+1);if(!t||!(n=ci(n)))return t;var i=un(t);return wi(i,0,Jt(i,un(n))+1).join("")},Rn.trimStart=function(t,n,r){if((t=vs(t))&&(r||n===e))return t.replace(ne,"");if(!t||!(n=ci(n)))return t;var i=un(t);return wi(i,Qt(i,un(n))).join("")},Rn.truncate=function(t,n){var r=30,i="...";if(es(n)){var a="separator"in n?n.separator:a;r="length"in n?fs(n.length):r,i="omission"in n?ci(n.omission):i}var o=(t=vs(t)).length;if(rn(t)){var s=un(t);o=s.length}if(r>=o)return t;var l=r-dn(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):t.slice(0,l);if(a===e)return c+i;if(s&&(l+=c.length-l),as(a)){if(t.slice(l).search(a)){var d,u=c;for(a.global||(a=De(a.source,vs(ue.exec(a))+"g")),a.lastIndex=0;d=a.exec(u);)var h=d.index;c=c.slice(0,h===e?l:h)}}else if(t.indexOf(ci(a),l)!=l){var p=c.lastIndexOf(a);p>-1&&(c=c.slice(0,p))}return c+i},Rn.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(V,pn):e},Rn.uniqueId=function(e){var t=++Be;return vs(e)+t},Rn.upperCase=qs,Rn.upperFirst=Gs,Rn.each=vo,Rn.eachRight=yo,Rn.first=Ya,sl(Rn,(bl={},xr(Rn,(function(e,t){Ie.call(Rn.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Rn.VERSION="4.17.21",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Rn[e].placeholder=Rn})),Ot(["drop","take"],(function(t,n){Vn.prototype[t]=function(r){r=r===e?1:vn(fs(r),0);var i=this.__filtered__&&!n?new Vn(this):this.clone();return i.__filtered__?i.__takeCount__=yn(r,i.__takeCount__):i.__views__.push({size:yn(r,h),type:t+(i.__dir__<0?"Right":"")}),i},Vn.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),Ot(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Vn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:la(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Ot(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Vn.prototype[e]=function(){return this[n](1).value()[0]}})),Ot(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Vn.prototype[e]=function(){return this.__filtered__?new Vn(this):this[n](1)}})),Vn.prototype.compact=function(){return this.filter(rl)},Vn.prototype.find=function(e){return this.filter(e).head()},Vn.prototype.findLast=function(e){return this.reverse().find(e)},Vn.prototype.invokeMap=Gr((function(e,t){return"function"==typeof e?new Vn(this):this.map((function(n){return _r(n,e,t)}))})),Vn.prototype.reject=function(e){return this.filter(Io(la(e)))},Vn.prototype.slice=function(t,n){t=fs(t);var r=this;return r.__filtered__&&(t>0||n<0)?new Vn(r):(t<0?r=r.takeRight(-t):t&&(r=r.drop(t)),n!==e&&(r=(n=fs(n))<0?r.dropRight(-n):r.take(n-t)),r)},Vn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Vn.prototype.toArray=function(){return this.take(h)},xr(Vn.prototype,(function(t,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),i=/^(?:head|last)$/.test(n),a=Rn[i?"take"+("last"==n?"Right":""):n],o=i||/^find/.test(n);a&&(Rn.prototype[n]=function(){var n=this.__wrapped__,s=i?[1]:arguments,l=n instanceof Vn,c=s[0],d=l||Vo(n),u=function(e){var t=a.apply(Rn,Et([e],s));return i&&h?t[0]:t};d&&r&&"function"==typeof c&&1!=c.length&&(l=d=!1);var h=this.__chain__,p=!!this.__actions__.length,f=o&&!h,g=l&&!p;if(!o&&d){n=g?n:new Vn(this);var m=t.apply(n,s);return m.__actions__.push({func:po,args:[u],thisArg:e}),new Wn(m,h)}return f&&g?t.apply(this,s):(m=this.thru(u),f?i?m.value()[0]:m.value():m)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(e){var t=_e[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Rn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Vo(i)?i:[],e)}return this[n]((function(n){return t.apply(Vo(n)?n:[],e)}))}})),xr(Vn.prototype,(function(e,t){var n=Rn[t];if(n){var r=n.name+"";Ie.call(Mn,r)||(Mn[r]=[]),Mn[r].push({name:t,func:n})}})),Mn[Ri(e,2).name]=[{name:"wrapper",func:e}],Vn.prototype.clone=function(){var e=new Vn(this.__wrapped__);return e.__actions__=Ti(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ti(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ti(this.__views__),e},Vn.prototype.reverse=function(){if(this.__filtered__){var e=new Vn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Vn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Vo(e),r=t<0,i=n?e.length:0,a=function(e,t,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],o=a.size;switch(a.type){case"drop":e+=o;break;case"dropRight":t-=o;break;case"take":t=yn(t,e+o);break;case"takeRight":e=vn(e,t-o)}}return{start:e,end:t}}(0,i,this.__views__),o=a.start,s=a.end,l=s-o,c=r?s:o-1,d=this.__iteratees__,u=d.length,h=0,p=yn(l,this.__takeCount__);if(!n||!r&&i==l&&p==l)return fi(e,this.__actions__);var f=[];e:for(;l--&&h<p;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}f[h++]=m}return f},Rn.prototype.at=fo,Rn.prototype.chain=function(){return ho(this)},Rn.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},Rn.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Rn.prototype.plant=function(t){for(var n,r=this;r instanceof Hn;){var i=La(r);i.__index__=0,i.__values__=e,n?a.__wrapped__=i:n=i;var a=i;r=r.__wrapped__}return a.__wrapped__=t,n},Rn.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Vn){var n=t;return this.__actions__.length&&(n=new Vn(this)),(n=n.reverse()).__actions__.push({func:po,args:[Ja],thisArg:e}),new Wn(n,this.__chain__)}return this.thru(Ja)},Rn.prototype.toJSON=Rn.prototype.valueOf=Rn.prototype.value=function(){return fi(this.__wrapped__,this.__actions__)},Rn.prototype.first=Rn.prototype.head,et&&(Rn.prototype[et]=function(){return this}),Rn}();pt?((pt.exports=fn)._=fn,ht._=fn):ut._=fn}.call(Ha);var MO=_O.exports;const EO=i.forwardRef(((n,r)=>{var{value:i,readOnly:a,"data-testid":s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h,iconMask:p=e(Re,{}),iconUnmask:f=e(Fe,{}),iconActiveColor:g,iconInactiveColor:m,maskChar:b="•",error:v,disableMask:y,transformInput:x,loadState:w,onMask:$,onUnmask:S,onChange:k,onFocus:O,onBlur:C,onTryAgain:D}=n,j=lt(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const T=a&&MO.isEmpty(i),[_,M]=o(!y),[E,N]=o(i||"");u((()=>{N(i)}),[i]);const A=e=>{F(!1),O&&O(e)},I=e=>{F(!0),C&&C(e)},B=e=>{let t=e.target.value;switch(x){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}N(t),e.target.value=t,k&&k(e)},P=()=>{a&&D&&D()},L=()=>{F(!_)},F=e=>{M(e),e?$&&$():S&&S()},R=()=>!(null==E?void 0:E.toString().length)||y,z=()=>{const t=R();return!T&&e(yO,Object.assign({"data-testid":"icon-"+(_?"masked":"unmasked"),onClick:t?void 0:L,$isDisabled:t,$inactiveColor:m,$activeColor:g},{children:_?f:p}))};return e("div",Object.assign({"aria-busy":"loading"===w,"aria-live":"polite"},{children:(()=>{if(a)switch(w){case"fail":return t(DO,Object.assign({onClick:P,"data-testid":"try-again-button"},{children:[t(kO,{children:[e(OO,{}),e(CO,{children:"Error"})]}),e(SO,Object.assign({weight:"semibold"},{children:"Try again?"}))]}));case"loading":return t(xO,{children:[e($O,{}),e(wO,{children:"Retrieving..."})]})}return e(vO,Object.assign({ref:r,"data-testid":`${s||"masked-input"}${_?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:z()},position:"right"},onFocus:a?void 0:A,onBlur:a?void 0:I,onClick:a?L:void 0,onChange:B,value:T?"-":_&&!y?Dd.maskValue(null==E?void 0:E.toString(),{maskChar:b,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h}):E,readOnly:a,error:v,$isDisabled:R()},j))})()}))})),NO=i.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field-masked-input","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:a,label:r,errorMessage:i,disabled:h.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(EO,Object.assign({ref:n,id:`${a}-base`,"data-testid":s||a,error:!!i},h))}))})),AO=E`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,IO=M.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?ml.Primary:ml.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&AO}
`,BO=M.div`
    color: ${ml.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&AO}

    ${e=>"next-line"===e.$labelDisplayType?E`
                    ${Al.getTextStyle("BodySmall","semibold")}
                `:E`
                    ${Al.getTextStyle("Body","regular")}
                `}
`,PO=M.span`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
`,LO=M.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return E`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return E`
                    ${IO} {
                        display: inline;
                    }

                    ${BO} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,FO=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,RO=M.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,zO=({bold:r,displayType:i="inline",label:a,searchTerm:o,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u})=>{const h=A()||Ec,p=jl.Body.fontSize({theme:h}),g=jl.Body.fontFamily({theme:h}),{ref:b,width:v}=ln(),y=f((e=>{if("inline"!==i)return!1;return Dd.getTextWidth(e,`${p}rem '${g}'`)>v*s-50}),[v,i,p,g,s]),x=m((()=>y(a)),[y,a]),w=m((()=>c&&y(c)),[y,c]),$=x||w?"next-line":i,S=r=>{if(!o)return r;const i=o.toLowerCase().trim(),s=r.toLowerCase().indexOf(i),l=s+o.length;return-1===s?r:t(n,{children:[a.slice(0,s),e(PO,Object.assign({$variant:u},{children:a.slice(s,l)})),a.slice(l)]})},k=r=>t(n,{children:[e(FO,Object.assign({$maxLines:s,"aria-hidden":!0},{children:S(r)})),e(RO,Object.assign({$maxLines:s,"aria-hidden":!0},{children:S(r)}))]});return t(LO,Object.assign({ref:b,$labelDisplayType:$},{children:[e(IO,Object.assign({"aria-label":a,$bold:r,$maxLines:s,$selected:l,$truncateType:d,$variant:u},{children:"middle"===d&&x?k(a):S(a)})),c&&e(BO,Object.assign({"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:i},{children:"middle"===d&&w?k(c):c}))]}))},HO=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),WO=({children:t})=>{const[n,r]=o(-1);return e(HO.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:t}))},VO=M.div`
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
`,YO=M.div`
    background: transparent;
    padding: 0.5rem;
`,UO=M.ul`
    list-style-type: none;
`,KO=M.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${ml.Accent.Light[3]};

    ${e=>e.$active&&E`
            background: ${ml.Accent.Light[5]};
        `}
`,XO=M(Ve)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${ml.Primary};
`,qO=M.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,GO=M(We)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ml.Primary};
`,ZO=M(He)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ml.Accent.Light[2]};
`,QO=M.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,JO=M(Kp)`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${ml.Primary};
`,eC=M(JO)`
    outline-offset: 0.25rem;
`,tC=M(JO)`
    padding: 0.5rem 1rem;
`,nC=M.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,rC=M.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,iC=M(P)`
    ${e=>{const t="small"===e.$variant?1:1.125;return E`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${ml.Validation.Red.Icon};
`,aC=e=>"small"===e?1:1.125,oC=e=>E`
        height: ${aC(e)}rem;
        width: ${aC(e)}rem;
    `,sC=M.div`
    background: ${ml.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,lC=M.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,cC=M(Up)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,dC=M(Le)`
    color: ${ml.Neutral[3]};
    flex-shrink: 0;
    ${e=>oC(e.$variant)}
`,uC=M($l)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${ml.Neutral[3]};
    cursor: pointer;

    ${e=>E`
            svg {
                ${oC(e.$variant)}
            }
        `}
`,hC=p(((n,r)=>{var{value:i,variant:a,onClear:o}=n,s=lt(n,["value","variant","onClear"]);return t(sC,{children:[t(lC,{children:[e(dC,{$variant:a,"aria-hidden":!0}),e(cC,Object.assign({ref:r,value:i,$variant:a},s))]}),i&&e(uC,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:a},{children:e(Ae,{"aria-hidden":!0})}))]})})),pC=({listItems:r,multiSelect:i,selectedItems:s,disableItemFocus:l,itemsLoadState:c="success",itemTruncationType:d="end",itemMaxLines:h=2,labelDisplayType:p="inline",variant:m="default",listboxId:b,width:v,topScrollItem:y,onSelectItem:x,onSelectAll:w,onDismiss:$,onRetry:S,valueExtractor:k,listExtractor:O,renderListItem:C,renderCustomCallToAction:D,enableSearch:j,hideNoResultsDisplay:T,searchPlaceholder:_="Search",searchFunction:M,onSearch:E})=>{const{focusedIndex:N,setFocusedIndex:A}=g(HO),[I,B]=o(""),[P,L]=o(r),F=Nd(c),R=Md(),z=a(),H=a(),W=a([]),V=a(),Y=e=>O?O(e):e.toString(),U=f((e=>!!Nk(s,(t=>Ik(t,e)))),[s]),K=jd((()=>M(I))),X=jd((()=>r.filter((e=>{var t;const n=Y(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),a=I.trim().toLowerCase();return r.includes(a)||i&&i.includes(a)})))),q=(e,t)=>{A(t),null==x||x(e,(e=>k?k(e):e)(e))},G=e=>{const t=e.target.value;B(t),null==E||E()},Z=()=>{var e;B(""),null===(e=V.current)||void 0===e||e.focus(),null==E||E()},Q=()=>{null==S||S()};Td("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),N<P.length-1){const e=N+1;null===(t=W.current[e])||void 0===t||t.focus(),A(e)}break;case"ArrowUp":if(e.preventDefault(),N>0){const e=N-1;null===(n=W.current[e])||void 0===n||n.focus(),A(e)}else 0===N&&V.current&&(V.current.focus(),A(-1));break;case"Space":case"Enter":document.activeElement===W.current[N]&&(e.preventDefault(),P[N]&&q(P[N],N))}})),u((()=>{if(void 0===y)return;const e=setTimeout((()=>{var e;const t=r.indexOf(y),n=W.current[t];if(z.current){const t=null!==(e=null==n?void 0:n.offsetTop)&&void 0!==e?e:0;z.current.scrollTop=t-8}A(t)}),0);return()=>clearTimeout(e)}),[W,r,A,y]),u((()=>{if(R)return;if(l)return;const e=r.findIndex((e=>U(e)));V.current?(A(-1),setTimeout((()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.focus()}),200)):W.current[N]?setTimeout((()=>{var e;return null===(e=W.current[N])||void 0===e?void 0:e.focus()}),200):W.current[e]?(A(e),setTimeout((()=>{var t;return null===(t=W.current[e])||void 0===t?void 0:t.focus()}),200)):(A(0),setTimeout((()=>{var e;return null===(e=W.current[0])||void 0===e?void 0:e.focus()}),200))}),[U,l,N,r,R,A]),u((()=>{R&&F&&(l||"success"===c&&V.current&&(A(-1),V.current.focus()))}),[R,F,c,A,l]),u((()=>{L(""===I?r:M?K():X())}),[K,X,r,M,I]);const J=t=>i?e(t?GO:ZO,{"aria-hidden":!0}):t?e(XO,{"aria-hidden":!0}):e(qO,{}),ee=(t,n)=>{const r=Y(t),i="string"==typeof r?r:r.title,a="string"==typeof r?void 0:r.secondaryLabel;return e(zO,{displayType:p,label:i,maxLines:h,selected:n,sublabel:a,truncationType:d,variant:m})},te=()=>{if(!S||S&&"success"===c)return P.map(((r,a)=>{const o=U(r),s=a===N;return e(KO,Object.assign({"aria-selected":o,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>q(r,a),onMouseEnter:()=>(e=>{A(e)})(a),ref:e=>W.current[a]=e,role:"option",tabIndex:s?0:-1,$active:s},{children:C?C(r,{selected:o}):t(n,{children:[J(o),ee(r,o)]})}),((e,t)=>`item_${t}__${k?k(e):e}`)(r,a))}))},ne=()=>{if((j||M)&&"success"===c)return e(hC,{ref:V,onChange:G,value:I,placeholder:_,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Z,variant:m})},re=()=>{if(i&&P.length>0&&!I&&"success"===c)return e(QO,{children:e(tC,Object.assign({onClick:w,type:"button",$variant:m},{children:0===s.length?"Select all":"Clear all"}))})},ie=()=>{if(!T&&(I||!j)&&0===P.length&&"success"===c)return t(nC,Object.assign({"data-testid":"list-no-results"},{children:[e(iC,{"data-testid":"no-result-icon",$variant:m}),e(rC,Object.assign({$variant:m},{children:"No results found."}))]}))},ae=()=>{if(S&&"loading"===c){const n="small"===m?16:18;return t(nC,Object.assign({"data-testid":"list-loading"},{children:[e(lc,{$buttonStyle:"secondary",size:n}),e(rC,Object.assign({$variant:m},{children:"Loading..."}))]}))}},oe=()=>{if(S&&"fail"===c)return t(nC,Object.assign({"data-testid":"list-fail"},{children:[e(iC,{"data-testid":"load-error-icon",$variant:m}),e(rC,Object.assign({$variant:m},{children:"Failed to load."}))," ",e(eC,Object.assign({onClick:Q,type:"button",$variant:m},{children:"Try again."}))]}))};return t(VO,Object.assign({"data-testid":"dropdown-container",ref:z,$width:v},{children:[t(YO,Object.assign({ref:H,"data-testid":"dropdown-list"},{children:[ne(),re(),ie(),ae(),oe(),e(UO,Object.assign({role:"listbox",id:b},{children:te()}))]})),(()=>{if(D)return e("div",Object.assign({"data-testid":"custom-cta"},{children:D($,P)}))})()]}))},fC=M(Kp)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,gC=M.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Fl.Base};

    svg {
        color: ${ml.Neutral[3]};
        ${e=>{const t="small"===e.$variant?jl.BodySmall.fontSize:jl.Body.fontSize;return E`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,mC=p((({children:n,disabled:r,expanded:i,listboxId:a,popupRole:o,readOnly:s,variant:l},c)=>t(fC,Object.assign({ref:c,type:"button","aria-expanded":i,"aria-haspopup":o,"data-testid":"selector",disabled:r,"aria-controls":a,$variant:l},{children:[n,!s&&e(gC,Object.assign({$expanded:i,$variant:l},{children:e(pe,{"aria-hidden":!0})}))]}))));var bC=Symbol.for("immer-nothing"),vC=Symbol.for("immer-draftable"),yC=Symbol.for("immer-state"),xC="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function wC(e,...t){if("production"!==process.env.NODE_ENV){const n=xC[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var $C=Object.getPrototypeOf;function SC(e){return!!e&&!!e[yC]}function kC(e){return!!e&&(CC(e)||Array.isArray(e)||!!e[vC]||!!e.constructor?.[vC]||MC(e)||EC(e))}var OC=Object.prototype.constructor.toString();function CC(e){if(!e||"object"!=typeof e)return!1;const t=$C(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===OC}function DC(e,t){0===jC(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function jC(e){const t=e[yC];return t?t.type_:Array.isArray(e)?1:MC(e)?2:EC(e)?3:0}function TC(e,t){return 2===jC(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _C(e,t,n){const r=jC(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function MC(e){return e instanceof Map}function EC(e){return e instanceof Set}function NC(e){return e.copy_||e.base_}function AC(e,t){if(MC(e))return new Map(e);if(EC(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=CC(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[yC];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const i=n[r],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create($C(e),t)}{const t=$C(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function IC(e,t=!1){return PC(e)||SC(e)||!kC(e)||(jC(e)>1&&(e.set=e.add=e.clear=e.delete=BC),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>IC(t,!0)))),e}function BC(){wC(2)}function PC(e){return Object.isFrozen(e)}var LC,FC={};function RC(e){const t=FC[e];return t||wC(0,e),t}function zC(){return LC}function HC(e,t){t&&(RC("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function WC(e){VC(e),e.drafts_.forEach(UC),e.drafts_=null}function VC(e){e===LC&&(LC=e.parent_)}function YC(e){return LC={drafts_:[],parent_:LC,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function UC(e){const t=e[yC];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function KC(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[yC].modified_&&(WC(t),wC(4)),kC(e)&&(e=XC(t,e),t.parent_||GC(t,e)),t.patches_&&RC("Patches").generateReplacementPatches_(n[yC].base_,e,t.patches_,t.inversePatches_)):e=XC(t,n,[]),WC(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==bC?e:void 0}function XC(e,t,n){if(PC(t))return t;const r=t[yC];if(!r)return DC(t,((i,a)=>qC(e,r,t,i,a,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return GC(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,a=!1;3===r.type_&&(i=new Set(t),t.clear(),a=!0),DC(i,((i,o)=>qC(e,r,t,i,o,n,a))),GC(e,t,!1),n&&e.patches_&&RC("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function qC(e,t,n,r,i,a,o){if("production"!==process.env.NODE_ENV&&i===n&&wC(5),SC(i)){const o=XC(e,i,a&&t&&3!==t.type_&&!TC(t.assigned_,r)?a.concat(r):void 0);if(_C(n,r,o),!SC(o))return;e.canAutoFreeze_=!1}else o&&n.add(i);if(kC(i)&&!PC(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;XC(e,i),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||GC(e,i)}}function GC(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&IC(t,n)}var ZC={get(e,t){if(t===yC)return e;const n=NC(e);if(!TC(n,t))return function(e,t,n){const r=eD(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!kC(r)?r:r===JC(e.base_,t)?(nD(e),e.copy_[t]=rD(r,e)):r},has:(e,t)=>t in NC(e),ownKeys:e=>Reflect.ownKeys(NC(e)),set(e,t,n){const r=eD(NC(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=JC(NC(e),t),o=r?.[yC];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((i=n)===(a=r)?0!==i||1/i==1/a:i!=i&&a!=a)&&(void 0!==n||TC(e.base_,t)))return!0;nD(e),tD(e)}var i,a;return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==JC(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,nD(e),tD(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=NC(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){wC(11)},getPrototypeOf:e=>$C(e.base_),setPrototypeOf(){wC(12)}},QC={};function JC(e,t){const n=e[yC];return(n?NC(n):e)[t]}function eD(e,t){if(!(t in e))return;let n=$C(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=$C(n)}}function tD(e){e.modified_||(e.modified_=!0,e.parent_&&tD(e.parent_))}function nD(e){e.copy_||(e.copy_=AC(e.base_,e.scope_.immer_.useStrictShallowCopy_))}DC(ZC,((e,t)=>{QC[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),QC.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&wC(13),QC.set.call(this,e,t,void 0)},QC.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&wC(14),ZC.set.call(this,e[0],t,n,e[0])};function rD(e,t){const n=MC(e)?RC("MapSet").proxyMap_(e,t):EC(e)?RC("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:zC(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=ZC;n&&(i=[r],a=QC);const{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,s}(e,t);return(t?t.scope_:zC()).drafts_.push(n),n}function iD(e){if(!kC(e)||PC(e))return e;const t=e[yC];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=AC(e,t.scope_.immer_.useStrictShallowCopy_)}else n=AC(e,!0);return DC(n,((e,t)=>{_C(n,e,iD(t))})),t&&(t.finalized_=!1),n}var aD=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&wC(6),void 0!==n&&"function"!=typeof n&&wC(7),kC(e)){const i=YC(this),a=rD(e,void 0);let o=!0;try{r=t(a),o=!1}finally{o?WC(i):VC(i)}return HC(i,n),KC(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===bC&&(r=void 0),this.autoFreeze_&&IC(r,!0),n){const t=[],i=[];RC("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}wC(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;const i=this.produce(e,t,((e,t)=>{n=e,r=t}));return[i,n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){kC(e)||wC(8),SC(e)&&(e=function(e){SC(e)||wC(10,e);return iD(e)}(e));const t=YC(this),n=rD(e,void 0);return n[yC].isManual_=!0,VC(t),n}finishDraft(e,t){const n=e&&e[yC];n&&n.isManual_||wC(9);const{scope_:r}=n;return HC(r,t),KC(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=RC("Patches").applyPatches_;return SC(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},oD=aD.produce;aD.produceWithPatches.bind(aD),aD.setAutoFreeze.bind(aD),aD.setUseStrictShallowCopy.bind(aD),aD.applyPatches.bind(aD),aD.createDraft.bind(aD),aD.finishDraft.bind(aD);var sD=V$,lD=$S,cD=u$,dD=Ya,uD=K$,hD=f$,pD=F$,fD=T$,gD=Object.prototype.hasOwnProperty;var mD=Wa((function(e){if(null==e)return!0;if(uD(e)&&(dD(e)||"string"==typeof e||"function"==typeof e.splice||hD(e)||fD(e)||cD(e)))return!e.length;var t=lD(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(pD(e))return!sD(e).length;for(var n in e)if(gD.call(e,n))return!1;return!0}));const bD=(e,t,n)=>oD(e,(e=>{for(let r=e.length-1;r>=0;r--){const i=e[r];if(i.checked=!!t.find((e=>Ik(e,i.keyPath))),i.hasSubItems&&n&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?i.checked=!0:r&&(i.checked="mixed")}}})),vD=(e,t)=>{const[n,...r]=t;if(mD(e)||mD(n))return;const i=e.find((e=>e.key===n));return i&&r.length?vD(i.subItems,r):i},yD=M.li`
    display: ${e=>e.$visible?"flex":"none"};
`,xD=M.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${ml.Accent.Light[3]};

    ${e=>e.$active&&E`
            background: ${ml.Accent.Light[5]};
        `}
`,wD=M.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,$D=M.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${ml.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return E`
                    transform: rotate(90deg);
                `}}
    }
`,SD=M.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,kD=M.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,OD=M(Ve)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${ml.Primary};
`,CD=M(Ue)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ml.Primary};
`,DD=({listItems:n,multiSelect:r,selectedKeyPaths:i,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:c=2,variant:d="default",listboxId:h,width:p,mode:f="default",selectableCategory:g,onSelectItem:b,onSelectAll:v,onRetry:y,enableSearch:x,hideNoResultsDisplay:w,searchPlaceholder:$="Search",onSearch:S})=>{const k=r||g,[O,C]=o(""),D=O.toLowerCase().trim(),[j,T]=o(!1),_=a(),M=a(),E=a([]),N=a(),A=Md(),[I,B]=o([]),[P,L]=o([]),F=m((()=>{let e=0;for(const t of I)t.level>e&&(e=t.level);return e}),[I]),[R,z]=o(0),H=e=>{const t=e.target.value;C(t),""===t?T(!1):t.trim().length>=3&&T(!0),null==S||S()},W=()=>{C(""),T(!1),N.current.focus(),null==S||S()},V=()=>{null==y||y()},Y=()=>{if(0===i.length){const e=[],t=[];I.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==v||v(e,t)}else null==v||v([],[])},U=jd(((e,t)=>((e,t,n,r,i)=>{const a=[],o=(e,s)=>{var l,c;const d=[],u=!!e.find((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));for(let h=0;h<e.length;h++){const p=e[h],f=s?s.level+1:0,g={item:p,index:a.length,indexInParent:h,parentSetSize:e.length,keyPath:s?[...s.keyPath,p.key]:[p.key],parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:f,visible:0===f||i||s.expanded,expanded:i,checked:!1,hasSubItems:!!(null===(l=p.subItems)||void 0===l?void 0:l.length),subItemIndexes:[],hasNestedSiblings:u,matched:!!r&&-1!==p.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(g.checked=!!t.find((e=>Ik(e,g.keyPath))),d.push(g),a.push(g),null===(c=p.subItems)||void 0===c?void 0:c.length){const e=o(p.subItems,g);if(n&&!0!==g.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?g.checked=!0:n&&(g.checked="mixed")}g.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),g.subItemIndexes=e.map((e=>e.index))}}return d};return o(e,void 0),a})(e,i,r,D,t))),K=jd((e=>{return i.length?(t=U(e,!1),oD(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>oD(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const i=e[t].keyPath.length;if(i>r)r=i;else if(i<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],i=r.keyPath.slice(0,-1),a=e[n].keyPath.slice(0,i.length);Ik(i,a)&&(r.visible=!0)}return e})))(U(e,!1));var t})),X=jd((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(D))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),q=jd((()=>{B((e=>bD(e,i,r))),j&&L((e=>bD(e,i,r)))})),G=(e,t)=>{const n=((e,t,n)=>oD(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],a=e[t.parentIndex],o=t.keyPath.slice(0,r.length);if(!Ik(r,o))break;t.visible=n&&a.expanded&&a.visible}})))(j?P:I,e,t);z(e),j?L(n):B(n)};Td("keydown",(e=>{const t=j?P:I;switch(e.code){case"ArrowDown":{e.preventDefault();const n=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return r;return-1})(t,(e=>e.visible),R+1);n>=0&&(z(n),E.current[n].focus());break}case"ArrowUp":{e.preventDefault();const n=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return r;return-1})(t,(e=>e.visible),R-1);n>=0?(z(n),E.current[n].focus()):0===R&&N.current&&(N.current.focus(),z(-1));break}case"ArrowRight":e.preventDefault(),G(R,!0);break;case"ArrowLeft":e.preventDefault(),G(R,!1);break;case"Space":if(document.activeElement===E.current[R]){e.preventDefault();const n=t[R];if(n.hasSubItems&&!k)return;null==b||b(n)}}})),u((()=>{let e;"default"===f?e=K(n):"expand"===f?e=U(n,!0):"collapse"===f&&(e=U(n,!1)),B(e)}),[U,K,n,f]),u((()=>{q()}),[r,i,q]),u((()=>{if(j&&O.trim().length>=3){const e=X(n),t=(e=>oD(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(U(e,!1));L(t)}}),[X,U,n,j,O]),u((()=>{A||(N.current?(z(-1),setTimeout((()=>{var e;return null===(e=N.current)||void 0===e?void 0:e.focus()}),200)):E.current[R]?setTimeout((()=>{var e;return null===(e=E.current[R])||void 0===e?void 0:e.focus()}),200):(z(0),setTimeout((()=>{var e;return null===(e=E.current[0])||void 0===e?void 0:e.focus()}),200)))}),[R,A,z]);const Z=()=>{if(x&&"success"===s)return e(hC,{ref:N,onChange:H,value:O,placeholder:$,"data-testid":"search-input","aria-label":"Enter text to search",onClear:W,variant:d})},Q=()=>{if(r&&!j&&I.length>0&&"success"===s)return e(QO,{children:e(tC,Object.assign({onClick:Y,type:"button",$variant:d},{children:0===i.length?"Select all":"Clear all"}))})},J=()=>{if(!w&&j&&0===P.length&&"success"===s)return t(nC,Object.assign({"data-testid":"list-no-results"},{children:[e(iC,{$variant:d}),e(rC,Object.assign({$variant:d},{children:"No results found."}))]}))},ee=()=>{if(y&&"loading"===s){const n="small"===d?16:18;return t(nC,Object.assign({"data-testid":"list-loading"},{children:[e(lc,{$buttonStyle:"secondary",size:n}),e(rC,Object.assign({$variant:d},{children:"Loading..."}))]}))}},te=()=>{if(y&&"fail"===s)return t(nC,Object.assign({"data-testid":"list-fail"},{children:[e(iC,{"data-testid":"load-error-icon",$variant:d}),e(rC,Object.assign({$variant:d},{children:"Failed to load."}))," ",e(eC,Object.assign({onClick:V,type:"button",$variant:d},{children:"Try again."}))]}))},ne=t=>{if(r)switch(t.checked){case"mixed":return e(CD,{"aria-hidden":!0});case!0:return e(GO,{"aria-hidden":!0});default:return e(ZO,{"aria-hidden":!0})}if(!t.hasSubItems)return e(kD,Object.assign({$hasNestedSiblings:t.hasNestedSiblings||0===t.level},{children:t.checked&&e(OD,{"aria-hidden":!0})}))},re=()=>(j?P:I).map(((n,i)=>{const{item:a,level:o,visible:s,expanded:d,keyPath:u,checked:h,hasSubItems:p,indexInParent:f,parentSetSize:g}=n,m=R===i,v=p&&!k;return t(yD,Object.assign({$visible:s},{children:[F>0&&e(wD,{$level:o}),F>0&&!p&&r&&e(SD,{}),t(xD,Object.assign({"aria-checked":h,"aria-selected":!!h,"aria-expanded":p?d:void 0,"aria-level":o+1,"aria-posinset":f+1,"aria-setsize":g,"data-testid":"list-item",onClick:e=>{var t;e.stopPropagation(),v?G(i,!d):(z(t=i),null==b||b((j?P:I)[t]))},onMouseEnter:()=>{z(i)},ref:e=>E.current[i]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:v},{children:[p&&e($D,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),G(i,!d)},$expanded:d},{children:e(Ye,{})})),ne(n),e(zO,{bold:p,searchTerm:j?D:void 0,label:a.label,selected:!!h,truncationType:l,maxLines:c})]}))]}),`[${u.join("---")}]`)}));return e(VO,Object.assign({"data-testid":"dropdown-container",ref:_,$width:p},{children:t(YO,Object.assign({"data-testid":"nested-dropdown-list"},{children:[Z(),Q(),J(),ee(),te(),e("div",Object.assign({"aria-multiselectable":r,id:h,ref:M,role:"tree"},{children:re()}))]}))}))},jD=({selectedOptions:t,placeholder:n="Select",options:r,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:p,searchPlaceholder:f,valueExtractor:g,listExtractor:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:O,onBlur:C,variant:D="default",readOnly:j,alignment:T,dropdownZIndex:_})=>{const[M,E]=o(t||[]),[N,A]=o(!1),[I,B]=o(!1),[P]=o((()=>Cd.generate())),L=a(),F=a();u((()=>{E(t||[])}),[t]);const R=()=>{M&&M.length>0?(E([]),U([])):(E(r),U(r))},z=(e,t)=>{const n=[...M],r=Ek(M,(e=>(g?g(e):e)===t));r>-1?n.splice(r,1):n.push(e),E(n),U(n)},H=()=>{N&&(A(!1),Y(!1))},W=()=>{I||N||B(!0)},V=e=>{!I||N||L.current.contains(e.relatedTarget)||(B(!1),null==C||C())},Y=e=>{!e&&y&&y(),e&&v&&v()},U=e=>{b&&b(e)};return e(WO,{children:e(Fp,{enabled:!j&&!i,isOpen:N,renderElement:()=>e(Vp,Object.assign({className:l,"data-testid":c,id:d,ref:L,tabIndex:-1,onFocus:W,onBlur:V,$focused:I,$disabled:i,$readOnly:j,$error:s},{children:e(mC,Object.assign({ref:F,disabled:i,expanded:N,listboxId:P,popupRole:"listbox",readOnly:j,variant:D},{children:e(Mp,Object.assign({$disabled:i},{children:M&&0!==M.length?e(Ep,Object.assign({$variant:D},{children:r&&M.length===r.length?"All selected":`${M.length} selected`})):e(Np,Object.assign({truncateType:$,$variant:D},{children:n}))}))}))})),renderDropdown:({elementWidth:t})=>e(pC,{listboxId:P,listItems:r,onSelectItem:z,onDismiss:H,valueExtractor:g,listExtractor:m,enableSearch:h,searchFunction:p,searchPlaceholder:f,multiSelect:!0,selectedItems:M,onSelectAll:R,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:O,variant:D,width:t}),onOpen:()=>{A(!0),Y(!0),B(!0)},onClose:e=>{A(!1),Y(!1),"click"!==e&&(B(!1),null==C||C())},onDismiss:()=>{F.current.focus(),A(!1),Y(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:_})})},TD=(e,t)=>{const[n,...r]=t;if(mD(e)||!n)return;const i=e.find((e=>e.key===n));return i?r.length?TD(i.subItems,r):i:void 0},_D=(e,t)=>{const n=[];for(const r of e)r.subItems?n.push(..._D(r.subItems,[...t,r.key])):n.push({value:r.value,label:r.label,keyPath:[...t,r.key]});return n},MD=({placeholder:t="Select",options:n,disabled:r,error:i,className:s,"data-testid":l,id:c,selectedKeyPaths:d,mode:h,valueToStringFunction:p,enableSearch:f,searchPlaceholder:g,hideNoResultsDisplay:m,readOnly:b,onSearch:v,onSelectOptions:y,onShowOptions:x,onHideOptions:w,onRetry:$,onBlur:S,optionsLoadState:k="success",optionTruncationType:O="end",variant:C,alignment:D,dropdownZIndex:j})=>{const T=n,[_,M]=o(d||[]),[E,N]=o([]),[A,I]=o(!1),[B,P]=o(!1),[L]=o((()=>Cd.generate())),F=a(),R=a(),z=a();u((()=>{const e=d||[],t=((e,t)=>{const n=[];for(let r=0;r<t.length;r++){const i=t[r],a=TD(e,i);a&&n.push({value:a.value,label:a.label,keyPath:i})}return n})(T,e);M(e),N(t)}),[d,T]);const H=(e,t)=>{const n=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));M(e),N(n),q(e,n)},W=e=>{const t=G(e),n=t.map((e=>e.keyPath));N(t),M(n),q(n,t)},V=()=>{B||A||P(!0)},Y=e=>{!B||A||F.current.contains(e.relatedTarget)||(P(!1),null==S||S())},U=()=>{const{label:e,value:t}=E[0];return E.length>1?`${E.length} selected`:p?p(t)||t.toString():e},K=e=>{if("middle"===O){let t=0;return z&&z.current&&(t=z.current.getBoundingClientRect().width),Dd.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&w&&w(),e&&x&&x()},q=(e,t)=>{if(y){const n=t.map((e=>e.value));y(e,n)}},G=e=>{if(!0===e.checked)return E.filter((t=>{const n=t.keyPath.slice(0,e.keyPath.length);return!Ik(e.keyPath,n)}));{const t=[...E],n=e.hasSubItems?((e,t)=>{const n=TD(e,t);return n&&n.subItems?_D(n.subItems,t):[]})(T,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return n.forEach((e=>{E.find((t=>Ik(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(Fp,{enabled:!b&&!r,isOpen:A,renderElement:()=>e(Vp,Object.assign({className:s,"data-testid":l,id:c,ref:F,tabIndex:-1,onFocus:V,onBlur:Y,$focused:B,$disabled:r,$readOnly:b,$error:i},{children:e(mC,Object.assign({ref:R,disabled:r,expanded:A,listboxId:L,popupRole:"tree",readOnly:b,variant:C},{children:e(Mp,Object.assign({ref:z,$disabled:r},{children:mD(E)?e(Np,Object.assign({truncateType:O},{children:t})):e(Ep,Object.assign({truncateType:O},{children:K(U())}))}))}))})),renderDropdown:({elementWidth:t})=>e(DD,{listboxId:L,listItems:T,multiSelect:!0,selectedKeyPaths:_,itemsLoadState:k,itemTruncationType:O,enableSearch:f,searchPlaceholder:g,hideNoResultsDisplay:m,onSelectItem:W,onSelectAll:H,onRetry:$,onSearch:v,variant:C,mode:h,width:t}),onOpen:()=>{I(!0),X(!0),P(!0)},onClose:e=>{I(!1),X(!1),"click"!==e&&(P(!1),null==S||S())},onDismiss:()=>{R.current.focus(),I(!1),X(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:j})},ED=({placeholder:t="Select",options:n,disabled:r,error:i,className:s,"data-testid":l,id:c,selectedKeyPath:d,mode:h,valueToStringFunction:p,enableSearch:f,searchPlaceholder:g,selectableCategory:m,hideNoResultsDisplay:b,readOnly:v,onBlur:y,onSearch:x,onSelectOption:w,onShowOptions:$,onHideOptions:S,onRetry:k,optionsLoadState:O="success",optionTruncationType:C="end",variant:D,alignment:j,dropdownZIndex:T})=>{const _=n,[M,E]=o(d?[d]:[]),[N,A]=o(),[I,B]=o(!1),[P,L]=o(!1),[F]=o((()=>Cd.generate())),R=a(),z=a(),H=a();u((()=>{E(d?[d]:[]);const e=vD(_,d||[]);A(null!=e?e:void 0)}),[d,_]);const W=e=>{var t;const{keyPath:n,item:{label:r,value:i}}=e;E([n]),A({label:r,value:i}),B(!1),X(!1),null===(t=z.current)||void 0===t||t.focus(),null==w||w(n,i)},V=()=>{P||I||L(!0)},Y=e=>{!P||I||R.current.contains(e.relatedTarget)||(L(!1),null==y||y())},U=()=>{const{label:e,value:t}=N;return p?p(t)||t.toString():e},K=e=>{if("middle"===C){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),Dd.truncateOneLine(e,t,120,6)}return e},X=e=>{!e&&S&&S(),e&&$&&$()};return e(Fp,{enabled:!v&&!r,isOpen:I,renderElement:()=>e(Vp,Object.assign({className:s,"data-testid":l,id:c,ref:R,tabIndex:-1,onFocus:V,onBlur:Y,$focused:P,$disabled:r,$readOnly:v,$error:i},{children:e(mC,Object.assign({ref:z,disabled:r,expanded:I,listboxId:F,popupRole:"tree",readOnly:v,variant:D},{children:e(Mp,Object.assign({ref:H,$disabled:r},{children:mD(N)?e(Np,Object.assign({truncateType:C},{children:t})):e(Ep,Object.assign({truncateType:C},{children:K(U())}))}))}))})),renderDropdown:({elementWidth:t})=>e(DD,{listboxId:F,listItems:_,selectedKeyPaths:M,selectableCategory:m,itemsLoadState:O,itemTruncationType:C,enableSearch:f,searchPlaceholder:g,hideNoResultsDisplay:b,onSelectItem:W,onRetry:k,onSearch:x,variant:D,mode:h,width:t}),onOpen:()=>{B(!0),X(!0),L(!0)},onClose:e=>{B(!1),X(!1),"click"!==e&&(L(!1),null==y||y())},onDismiss:()=>{z.current.focus(),B(!1),X(!1)},clickToToggle:!0,offset:8,alignment:j,fitAvailableHeight:!0,customZIndex:T})};var ND=function(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n};var AD=function(e){return function(t,n,r){for(var i=-1,a=Object(t),o=r(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===n(a[l],l,a))break}return t}}(),ID=Z$;var BD=K$;var PD=function(e,t){return function(n,r){if(null==n)return n;if(!BD(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}((function(e,t){return e&&AD(e,t,ID)}));var LD=ND,FD=PD,RD=yk,zD=function(e,t,n,r,i){return i(e,(function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)})),n},HD=Ya;var WD=Wa((function(e,t,n){var r=HD(e)?LD:zD,i=arguments.length<3;return r(e,RD(t),n,i,FD)}));const VD=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],YD=(e,t,n,r)=>n?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r;var UD;!function(e){e.getCountries=()=>[].concat(...VD.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:YD("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const n=e.replace(/[\s()]+/g,""),{format:r}=t,i=r.split(" ");i.shift();const a=i.join(" ");return WD(a,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[n,...r]=e.remainingText;return{formattedText:e.formattedText+n,remainingText:r}}),{formattedText:"",remainingText:n}).formattedText}}(UD||(UD={}));const KD=t=>{var{onChange:n,value:r,allowClear:i,onClear:s,onBlur:l,error:c,fixedCountry:d=!1,optionPlaceholder:h="Select",optionSearchPlaceholder:p,enableSearch:f,onHideOptions:g,onShowOptions:m,placeholder:b,autoComplete:v}=t,y=lt(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[x]=o(UD.getCountries()),[w,$]=o(void 0),[S,k]=o(""),O=a(),C=Ed({ref:O,formatter:e=>UD.formatNumber(e.replace(/[^0-9]/g,""),w)});u((()=>{const e=x.filter((e=>e.countryCode===XD(null==r?void 0:r.countryCode)))[0];$(e),k(UD.formatNumber(null==r?void 0:r.number,e))}),[r]);const D=e=>{T(S,e),n&&j(S,e)},j=(e,t)=>{const r=UD.formatNumber(e,t);n({number:r.replace(/[\s()]+/g,""),countryCode:t&&qD(t.countryCode)})},T=(e,t)=>{k(UD.formatNumber(e,t)),$(t)};return e(mO,Object.assign({ref:O,value:S,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=C();t(),T(e,w),n&&j(e,w)},allowClear:i&&!!S,onClear:()=>{s?s():k("")},onBlur:l,error:c,placeholder:b,addon:d?{type:"label",attributes:{value:qD(null==w?void 0:w.countryCode)}}:{type:"list",attributes:{placeholder:h,options:x,selectedOption:w,enableSearch:f,searchPlaceholder:p,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:qD(e.countryCode)}),onSelectOption:D,onHideOptions:g,onShowOptions:m}},inputMode:"numeric",autoComplete:v},y))},XD=e=>e?e.replace("+",""):"",qD=e=>e?e.includes("+")?e:`+${e}`:"",GD=({className:r,"data-testid":i,selectedOption:s,minimumCharacters:l=3,fetchOptions:c,placeholder:d="Enter here...",readOnly:h=!1,disabled:p=!1,error:g,valueExtractor:m,listExtractor:b,displayValueExtractor:v=(e=>e.toString()),onSelectOption:y})=>{const x=s&&v(s),[w,$]=o(x||""),[S,k]=o(x||""),[O,C]=o([]),[D,j]=o(!0),[T,_]=o(!1),[M,E]=o(!!s),[N,A]=o(s),I=a(c),B=e=>ct(void 0,void 0,void 0,(function*(){_(!1),j(!0);try{const t=yield I.current(e);k(e),C(t),j(!1)}catch(e){_(!0)}})),P=f(yh((e=>B(e)),500,{leading:!1,trailing:!0}),[]);u((()=>{I.current=c}),[c]),u((()=>{w&&w.length>=l&&w!==S?P(w):P.cancel(),""===w&&N&&(y&&y(void 0,void 0),R(),A(void 0)),s&&w!==v(s)&&E(!1)}),[w,s]),u((()=>{$(s?v(s):""),R(s),A(s)}),[s]);const L=e=>{$(e.target.value)},F=(e,t)=>{y&&y(e,t)},R=e=>{k(e?v(e):""),E(!!e),C([]),j(!0)},z=()=>{$(""),y&&y(void 0,void 0),R()},H=()=>{M||N?(R(N),$(v(N)),y&&y(N,V(N)),A(N)):z()},W=()=>w&&w.length>=l&&!M,V=e=>m?m(e):e,Y=()=>e(fw,{type:"text",value:w,onChange:L,placeholder:d,readOnly:h,disabled:p,allowClear:!0,onClear:z,styleType:"no-border",onBlur:w.length<l?H:void 0});return t(Ap,Object.assign({className:r,show:W(),error:g&&!W(),disabled:p,readOnly:h,testId:i,onBlur:H},{children:[e(h?n:Dp,{children:Y()}),!h&&W()&&e(_p,{}),e(aO,{listItems:O,onSelectItem:F,valueExtractor:m,listExtractor:b,itemsLoadState:T?"fail":D?"loading":"success",visible:W(),disableItemFocus:!0,onRetry:()=>B(w),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))},ZD=M.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,QD=M(uw)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,JD=M(Cp)`
    padding-right: 2.75rem;
`,ej=n=>{var{selectedOptions:r,placeholders:i={from:"Select",to:"Select"},options:s,disabled:l,className:c,readOnly:d,error:h,"data-testid":p,id:f,enableSearch:g=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,listStyleWidth:S,onShowOptions:k,onHideOptions:O,onRetry:C,optionsLoadState:D={from:"success",to:"success"},optionTruncationType:j="middle",renderCustomSelectedOption:T,renderListItem:_,renderCustomCallToAction:M}=n,E=lt(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[N,A]=o(),[I,B]=o(),P=a(),L={from:a(),to:a()},[F,R]=o("none");u((()=>{A(null==r?void 0:r.from),B(null==r?void 0:r.to)}),[r]);const z=e=>t=>{t.stopPropagation(),t.preventDefault(),l||d||R("from"===e?"from":"to"===e&&N?"to":"from")},H=e=>{const t="from"===e?N:I;return w?w(t):v?v(t):null==t?void 0:t.toString()},W=(e,t)=>{if("middle"===j){let n=0;return L[e]&&L[e].current&&(n=L[e].current.getBoundingClientRect().width),Dd.truncateOneLine((e=>"string"==typeof e?e:y(e)||e.toString())(t),n,120,8)}return t},V=e=>{!e&&O&&O(),e&&k&&k()},Y=t=>{const n="from"===t?N:I;return n?T?T(n):e(Ep,Object.assign({truncateType:j},{children:W(t,H(t))})):e(Np,Object.assign({truncateType:j},{children:W(t,i[t])}))},U=t=>e(Mp,Object.assign({onClick:z(t),ref:L[t],$disabled:l},{children:Y(t)}));return t(Ap,Object.assign({show:"none"!==F,"data-testid":E["data-testid"],error:h&&!("none"!==F),disabled:l,readOnly:d,testId:p,onBlur:()=>{V(!1),R("none"),N&&I||(B(void 0),A(void 0))},className:c},{children:[t(ZD,{children:[e(JD,Object.assign({type:"button","data-testid":f||"selector",disabled:l,ref:P,onClick:z()},E,{children:t(gf,Object.assign({currentActive:(()=>{switch(F){case"from":return"start";case"to":return"end";case"none":return F}})()},{children:[U("from"),U("to")]}))})),"none"===F&&N&&I&&!d&&!l&&e(QD,Object.assign({onClick:e=>{e.stopPropagation(),A(void 0),B(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:e(hw,{"aria-hidden":!0})}))]}),"none"!==F&&e(_p,{}),(()=>{if("none"===F)return null;const t=s[F];if(t&&t.length>0){const n="from"===F?N:I;return e(aO,{listItems:t,onSelectItem:(e,t)=>{return n=e,r=t,"from"===(i=F)?A(n):B(n),V(!1),P&&P.current.focus(),$&&$({[i]:n},r),void("from"===i?(B(void 0),R("to"),V(!0)):R("none"));var n,r,i},onDismiss:()=>(R("none"),V(!1),P&&P.current.focus(),void(N&&I||(B(void 0),A(void 0)))),valueExtractor:v,listExtractor:x,listStyleWidth:S,visible:!0,enableSearch:g,searchPlaceholder:b,searchFunction:m,"data-testid":`${F}-dropdown-list`,selectedItems:n?[n]:[],onRetry:C,itemsLoadState:D[F],itemTruncationType:j,renderListItem:_,renderCustomCallToAction:M})}return null})()]}))},tj=({selectedOption:t,placeholder:n="Select",options:r,disabled:i,error:s,className:l,"data-testid":c,id:d,enableSearch:h=!1,searchFunction:p,searchPlaceholder:f,valueExtractor:g,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:S="success",optionTruncationType:k="end",renderCustomSelectedOption:O,renderListItem:C,hideNoResultsDisplay:D,renderCustomCallToAction:j,onBlur:T,variant:_="default",readOnly:M,alignment:E,dropdownZIndex:N})=>{const[A,I]=o(t),[B,P]=o(!1),[L,F]=o(!1),[R]=o((()=>Cd.generate())),z=a(),H=a(),W=a();u((()=>{I(t)}),[t]);const V=(e,t)=>{H.current.focus(),I(e),P(!1),q(!1),null==y||y(e,t)},Y=()=>{B&&(P(!1),q(!1))},U=()=>{L||B||F(!0)},K=e=>{!L||B||z.current.contains(e.relatedTarget)||(F(!1),null==T||T())},X=e=>{if("middle"===k){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),Dd.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),t,120,8)}return e},q=e=>{e?null==x||x():null==w||w()};return e(WO,{children:e(Fp,{enabled:!M&&!i,isOpen:B,renderElement:()=>e(Vp,Object.assign({className:l,"data-testid":c,id:d,ref:z,tabIndex:-1,onFocus:U,onBlur:K,$focused:L,$disabled:i,$readOnly:M,$error:s},{children:e(mC,Object.assign({ref:H,disabled:i,expanded:B,listboxId:R,popupRole:"listbox",readOnly:M,variant:_},{children:e(Mp,Object.assign({ref:W,$disabled:i},{children:A?O?O(A):e(Ep,Object.assign({truncateType:k,$variant:_},{children:X(v?v(A):g?g(A):A.toString())})):e(Np,Object.assign({truncateType:k,$variant:_},{children:n}))}))}))})),renderDropdown:({elementWidth:t})=>e(pC,{listboxId:R,listItems:r,onSelectItem:V,onDismiss:Y,valueExtractor:g,listExtractor:b,enableSearch:h,searchPlaceholder:f,searchFunction:p,selectedItems:A?[A]:[],onRetry:$,itemsLoadState:S,itemTruncationType:k,renderListItem:C,hideNoResultsDisplay:D,renderCustomCallToAction:j,variant:_,width:t}),onOpen:()=>{P(!0),q(!0),F(!0)},onClose:e=>{P(!1),q(!1),"click"!==e&&(F(!1),null==T||T())},onDismiss:()=>{H.current.focus(),P(!1),q(!1)},clickToToggle:!0,offset:8,alignment:E,fitAvailableHeight:!0,customZIndex:N})})},nj=M.div`
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
`,rj=M.div`
    display: flex;
    align-items: baseline;
`,ij=M.div`
    margin: 0 0.5rem;
`,aj=M.div`
    ${e=>Al.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return E`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,oj=M(aj)`
    color: ${ml.Neutral[3]};
`,sj=n=>{var{alignment:r="left",className:i,disabled:s,dropdownZIndex:l,error:c,histogramSlider:d,id:h,onBlur:p,onChange:f,onChangeEnd:g,optionTruncationType:m="end",placeholder:b="Select",rangeLabelPrefix:v,rangeLabelSuffix:y,readOnly:x,renderRangeLabel:w,value:$}=n,S=lt(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:k,bins:O=[],renderEmptyView:C,ariaLabels:D}=d,[j,T]=o(Y()),[_,M]=o(!1),[E,N]=o(!1),[A]=o((()=>Cd.generate())),I=O.map((e=>e.minValue)),B=Math.min(...I),P=a(),L=a(),F=a(),R=S["data-testid"]||"select-histogram";u((()=>{$!==j&&T(Y())}),[$]);const z=e=>{T(e),null==f||f(e)},H=e=>{T(e),null==g||g(e)},W=()=>{E||_||N(!0)},V=e=>{!E||_||P.current.contains(e.relatedTarget)||(N(!1),null==p||p())};function Y(){return null!=$?$:[B,B+k]}const U=e=>w?w(e):t(Il.Body,{children:[v,e,y]});return e(WO,{children:e(Fp,{enabled:!x&&!s,isOpen:_,renderElement:()=>e(Vp,Object.assign({className:i,"data-testid":R,id:h,ref:P,tabIndex:-1,onFocus:W,onBlur:V,$focused:E,$disabled:s,$readOnly:x,$error:c},{children:e(mC,Object.assign({ref:L,disabled:s,expanded:_,listboxId:A,popupRole:"dialog",readOnly:x,variant:"default"},{children:e(Mp,Object.assign({ref:F,$disabled:s},{children:I&&0!==I.length?t(rj,{children:[U(j[0]),e(ij,{children:"-"}),U(j[1])]}):e(oj,Object.assign({truncateType:m,$variant:"default"},{children:b}))}))}))})),renderDropdown:({elementWidth:t})=>e(nj,Object.assign({style:{width:t}},{children:e(cw,{interval:k,value:j,bins:O,onChange:z,onChangeEnd:H,showRangeLabels:!1,renderEmptyView:C,ariaLabels:D})})),onOpen:()=>{M(!0)},onClose:()=>{M(!1)},onDismiss:()=>{L.current.focus(),M(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:l})})},lj=t=>{var{value:n,ariaLabel:r,onChange:i,onChangeEnd:a}=t,s=lt(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=o(d());u((()=>{n!==l[0]&&c(d())}),[n]);function d(){return null!=n?[n]:[0]}return e(rw,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==i||i(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==a||a(t)},ariaLabels:r?[r]:void 0}))},cj=M(Il.H6)`
    text-align: right;
    color: ${ml.Neutral[3]};

    ${e=>{if(e.disabled)return E`
                color: ${ml.Neutral[4](e)};
            `}}
`,dj=({value:t,maxLength:r,disabled:a,renderCustomCounter:s})=>{const[l,c]=o("");u((()=>{c(d(`${t||""}`))}),[t,r]);const d=e=>{if(s)return s(r,e.toString().length);{const t=r-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(n,{children:i.isValidElement(l)?l:e(cj,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:a},{children:l}))})},uj=M.div`
    display: flex;
    flex-direction: column;
`,hj=M.textarea`
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Fl.Base};

    ${Al.getTextStyle("Body","regular")}
    color: ${ml.Neutral[1]};
    background: ${ml.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${ml.Accent.Light[1]};
        box-shadow: ${oc.InputBoxShadow};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${ml.Neutral[3]};
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
                background: ${ml.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${ml.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?E`
                border: 1px solid ${ml.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${ml.Validation.Red.Border(e)};
                    box-shadow: ${oc.InputErrorBoxShadow};
                }
            `:void 0}
`,pj=i.forwardRef(((t,n)=>{var{value:r,disabled:i,error:a,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:h}=t,p=lt(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[f,g]=o(r);u((()=>{g(r)}),[r]);return e(hj,Object.assign({ref:n,disabled:i,value:l?l+(null!=f?f:""):f,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const n=t.slice(l.length),r=c?c(n):n;if(g(r),e.target.value=l+r,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:r})});d(t)}}else{const n=c?c(null!=t?t:""):t;g(n),e.target.value=n,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},error:a,rows:s,maxLength:l?l.length+h:h},p))})),fj=i.forwardRef(((n,r)=>{var{value:i,disabled:a,rows:s=5,onChange:l,transformValue:c,prefix:d,maxLength:h,renderCustomCounter:p}=n,f=lt(n,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[g,m]=o(i);u((()=>{m(i)}),[i]);return t(uj,{children:[e(pj,Object.assign({ref:r,disabled:a,value:g,rows:s||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:d,transformValue:c,maxLength:h},f)),h&&e(dj,{disabled:a,value:g,maxLength:h,renderCustomCounter:p})]})})),gj=M.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,mj=M.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,bj=M(Cx)`
    margin-top: 0;
`,vj=i.forwardRef(((r,i)=>{const{label:a,value:s,errorMessage:l,id:c="form-textarea","data-error-testid":d,"data-testid":h,onChange:p,layoutType:f,mobileCols:g,tabletCols:m,desktopCols:b,transformValue:v,prefix:y=""}=r,x=lt(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","transformValue","prefix"]),[w,$]=o(s);u((()=>{$(s)}),[s]);return t(Fx,Object.assign({id:c,label:a,disabled:x.disabled,layoutType:f,mobileCols:g,tabletCols:m,desktopCols:b},{children:[e(pj,Object.assign({id:`${c}-base`,"data-testid":h||c,value:w,error:!!l,onChange:e=>{const t=e.target.value;$(t),p&&p(e)},ref:i,prefix:y,transformValue:v},x)),l||x.maxLength?t(gj,{children:[l&&e(mj,{children:e(bj,Object.assign({weight:"semibold","data-testid":d||(c?`${c}-error-message`:"error-message")},{children:l}))}),x.maxLength&&e(dj,{disabled:x.disabled,value:w,maxLength:x.maxLength,renderCustomCounter:x.renderCustomCounter})]}):e(n,{})]}))})),yj=M.div`
    position: relative;
`,xj=M(Yp)`
    height: 3rem;
    gap: 0.5rem;
`,wj=M(Up)`
    display: block;
    width: 100%;
    flex: 1;
`,$j=M.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?E`
                    color: ${ml.Primary};
                `:E`
                    color: ${ml.Neutral[4]};
                `};
    }
`,Sj=({type:t,active:n=!1,disabled:r,className:i})=>{let a;switch(t){case"checkbox":a=e(n?We:He,{});break;case"radio":a=e(n?Xe:Ke,{});break;case"tick":a=e(Ve,{});break;case"cross":a=e(Ae,{});break;default:a=null}return e($j,Object.assign({className:i,$active:n,disabled:r},{children:a}))},kj=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,Oj=M.ol`
    ${e=>kj(e.bottomMargin)}
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
`,Cj=M.ul`
    ${e=>kj(e.bottomMargin)}
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
`,Dj={Ul:t=>{var{size:n="Body",children:r}=t,i=lt(t,["size","children"]);return e(Cj,Object.assign({size:n},i,{children:r}))},Ol:t=>{var{size:n="Body",children:r}=t,i=lt(t,["size","children"]);return e(Oj,Object.assign({size:n},i,{children:r}))}},jj=M.div`
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
                        border-color: ${ml.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ml.Shadow.Red};
                        }
                    `:e.$disabled?E`
                        border-color: transparent;
                    `:E`
                        border-color: transparent;

                        :hover {
                            background: ${ml.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?E`
                        border-color: ${ml.Neutral[5]};
                    `:e.$disabled&&e.$selected?E`
                        border-color: ${ml.Neutral[4]};
                    `:e.$error?E`
                        border-color: ${ml.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ml.Shadow.Red};
                        }
                    `:e.$selected?E`
                        border-color: ${ml.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
                        }
                    `:E`
                        background: ${ml.Neutral[8]};
                        border-color: ${ml.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
                            border-color: ${ml.Accent.Light[1]};
                        }
                    `}
`,Tj=M.input`
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
`,_j=M.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,Mj=M.label`
    ${e=>e.$selected&&!e.$indicator?E`
                ${Al.getTextStyle("H4","semibold")}
            `:E`
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

    ${e=>e.$disabled?E`
                color: ${ml.Neutral[3]};
            `:e.$selected?E`
                color: ${ml.Primary};
            `:void 0}
`,Ej=M.div`
    ${Al.getTextStyle("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Al.getFontFamily("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?E`
                color: ${ml.Neutral[3]};
            `:e.$selected?E`
                color: ${ml.Primary};
            `:E`
                color: ${ml.Neutral[1]};
            `}
`,Nj=M.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?E`
                        background: ${ml.Neutral[8]};
                    `:e.$disabled?E``:E`
                        :hover {
                            background: ${ml.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?E`
                        background: ${ml.Neutral[6]};
                    `:e.$error?E`
                        background: ${ml.Neutral[8]};
                    `:e.$selected?E`
                        background: ${ml.Accent.Light[5]};
                    `:E`
                        background: ${ml.Neutral[8]};
                    `}
`,Aj=M.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Ij=M.button`
    color: ${e=>e.$disabled?ml.Neutral[3]:ml.Validation.Red.Icon};
    white-space: nowrap;
    ${Al.getTextStyle("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Bj=M.button`
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
`,Pj=M.div`
    width: 100%;
    color: ${e=>e.$disabled?ml.Neutral[3]:ml.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Lj=M(Sc)`
    width: 100%;
    user-select: none;
`,Fj=M.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${gc({textSize:"BodySmall"})}

    ${e=>e.$disabled?E`
                color: ${ml.Neutral[3]};
            `:e.$selected?E`
                color: ${ml.Primary};
            `:E`
                color: ${ml.Neutral[1]};
            `}
`,Rj=M(Il.BodySmall)`
    color: ${e=>e.$disabled?ml.Neutral[3]:ml.Validation.Red.Text};
`,zj=M(Dj.Ul)`
    li {
        color: ${e=>e.$disabled?ml.Neutral[3]:ml.Validation.Red.Text};
    }
`,Hj=({type:r="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:d,subLabel:h,disabled:p,error:f,name:g,id:b,className:v,compositeSection:y,removable:x,onRemove:w,"data-testid":$,onChange:S,useContentWidth:k})=>{const{collapsible:O=!0,errors:C,children:D,initialExpanded:j}=y||{},[T,M]=o(s),[E,N]=o(j),A=m((()=>{const e=Array.isArray(C)&&(null==C?void 0:C.length)>0,t=!Array.isArray(C)&&!!C;return e||t}),[C]),[I]=o(Cd.generate()),B=b?`${b}`:`tg-${I}`,P=a();u((()=>{M(s)}),[s]),u((()=>{T&&N(null==j||j)}),[T]);const L=e=>{if(!p){if(S)return void S(e);switch(r){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":T||M(!0)}}},F=()=>{p||N(!E)},R=()=>{p||!w||w()},z=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e(Sj,{type:t,active:T,disabled:p})},H=()=>{if(!h)return null;let t;return t="function"==typeof h?h():h,e(Ej,Object.assign({"data-id":"toggle-sublabel",$disabled:p,$selected:T},{children:t}))},W=()=>{const n=!E&&!A;return O&&t(Bj,Object.assign({$paddingTopRequired:n,disabled:p,onClick:F,"data-testid":E?"collapse-button":"expand-button"},{children:[E?"Show less":"Show more",e(E?_:pe,{"aria-hidden":!0})]}))},V=r=>t(n,{children:[e(Rj,Object.assign({weight:"semibold",$disabled:p},{children:"Error"})),e(zj,Object.assign({$disabled:p},{children:null==r?void 0:r.map(((t,n)=>e("li",Object.assign({id:`${B}-error-list-item-${n}`},{children:e(Rj,Object.assign({weight:"semibold",$disabled:p},{children:t}))}),n)))}))]});return t(jj,Object.assign({$selected:T,$disabled:p,className:v,$styleType:l,$error:f,$indicator:i,$useContentWidth:k,id:b,"data-testid":$},{children:[t(Nj,Object.assign({id:`${B}-header-container`,$disabled:p,$error:f,$selected:T,$indicator:i,$styleType:l},{children:[t(Aj,Object.assign({$addPadding:x},{children:[e(Tj,{ref:P,name:g,id:`${B}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:L,checked:T}),i&&z(),t(_j,{children:[e(Mj,Object.assign({htmlFor:`${B}-input`,$selected:T,$indicator:i,$disabled:p,"data-testid":`${B}-toggle-label`,$maxLines:d},{children:c})),h&&H()]})]})),x&&e(Ij,Object.assign({type:"button",$disabled:p,onClick:R,id:`${B}-remove-button`},{children:"Remove"}))]})),D&&t("div",{children:[(!O||E)&&e(Fj,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!O,$disabled:p},{children:D})),O&&!E&&A&&e(Pj,Object.assign({$disabled:p,onClick:F,id:`${B}-error-alert`},{children:e(Lj,Object.assign({type:p?"description":"error",className:v,showIcon:!0},{children:Array.isArray(C)?V(C):C}))})),W()]})]}))},Wj=M(za.div)`
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
`,Vj=M.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Yj=M.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${yl.MaxWidth.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Uj=M.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${yl.MaxWidth.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Kj=M.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${yl.MaxWidth.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Xj=M.div`
    display: flex;
    gap: 0.5rem;

    ${yl.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${yl.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,qj=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${yl.MaxWidth.mobileS} {
        width: 6rem;
    }
`,Gj=M($l)`
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
`,Zj=M(Il.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${yl.MaxWidth.tablet} {
        margin: 0;
    }

    ${yl.MaxWidth.mobileS} {
        margin: 0 0.25rem;
    }
`,Qj=M(Up)`
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
`,Jj=M(Hj)`
    min-width: 5rem;
    flex: 1;
`,eT=M(cc.Small)`
    width: 7rem;

    ${yl.MaxWidth.mobileL} {
        flex: 1;
    }

    ${yl.MaxWidth.mobileS} {
        width: 100%;
    }
`;var tT,nT,rT;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(tT||(tT={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(nT||(nT={})),function(e){e.AM="am",e.PM="pm"}(rT||(rT={}));const iT=({id:n,value:r,show:i,format:s,onChange:l,onCancel:c})=>{const d=Ph.getTimeValues(s,r),[h,p]=o(d.hour),[g,m]=o(d.minute),[b,v]=o(d.period),y=a(),x=a(),w=ln();u((()=>{if(i&&y.current&&y.current.focus(),i){const{hour:e,minute:t,period:n}=Ph.getTimeValues(s,r);p(e),m(t),v(n)}}),[i,r,s]),u((()=>{const e=y.current,t=x.current;return e&&e.addEventListener("keydown",$),t&&t.addEventListener("keydown",$),()=>{e&&e.removeEventListener("keydown",$),t&&t.removeEventListener("keydown",$)}}),[]);const $=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=f((e=>{switch(e.currentTarget.name){case tT.MINUTE_UP:m(Ph.updateMinutes(g,"add"));break;case tT.MINUTE_DOWN:m(Ph.updateMinutes(g,"minus"));break;case tT.HOUR_UP:p(Ph.updateHours(h,"add"));break;case tT.HOUR_DOWN:p(Ph.updateHours(h,"minus"))}}),[h,g]),k=e=>{e.target.select()},O=e=>{const t=e.target.value;switch(e.target.name){case nT.HOUR:t.length<=2&&p(t);break;case nT.MINUTE:t.length<=2&&m(t)}},C=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case nT.HOUR:{const n=t>23||t<0?d.hour:Ph.convertHourTo12HourFormat(e.target.value);p(n);break}case nT.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;m(Dd.padValue(n));break}}},D=e=>{switch(e.target.name){case rT.AM:v(Bh.AM);break;case rT.PM:v(Bh.PM)}},j=e=>n?`${n}-${e}`:e,T=Sa({height:i?w.height+32:0});return e(Wj,Object.assign({"data-testid":"animated-dropdown-wrapper",style:T},{children:t(Vj,Object.assign({ref:w.ref,"data-testid":j("timepicker-dropdown"),inert:i?void 0:""},{children:[t(Yj,{children:[t(Kj,{children:[t(qj,{children:[e(Gj,Object.assign({"aria-label":"increase hour",name:tT.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":j("hour-increment-button")},{children:e(_,{})})),e(Qj,{"aria-label":"hour",type:"number",name:nT.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:y,value:h,onFocus:k,onChange:O,onBlur:C,min:1,max:12,placeholder:"HH","data-testid":j("hour-input")}),e(Gj,Object.assign({"aria-label":"decrease hour",name:tT.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":j("hour-decrement-button")},{children:e(pe,{})}))]}),e(Zj,{children:":"}),t(qj,{children:[e(Gj,Object.assign({"aria-label":"increase minute",name:tT.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":j("minute-increment-button")},{children:e(_,{})})),e(Qj,{"aria-label":"minute",type:"number",name:nT.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:g,onChange:O,onBlur:C,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":j("minute-input")}),e(Gj,Object.assign({"aria-label":"decrease minute",name:tT.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":j("minute-decrement-button")},{children:e(pe,{})}))]})]}),t(Xj,{children:[e(Jj,Object.assign({checked:b===Bh.AM,name:rT.AM,type:"radio",onChange:D,"data-testid":j("am-toggle"),"aria-label":"AM"},{children:"AM"})),e(Jj,Object.assign({checked:b===Bh.PM,name:rT.PM,type:"radio",onChange:D,"data-testid":j("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),t(Uj,{children:[e(eT,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":j("cancel-button")},{children:"Cancel"})),e(eT,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?Ph.convertTo24HourFormat({hour:h,minute:g,period:b}):`${h}:${g}${b}`,l(e)},disabled:""===h||""===g,"data-testid":j("confirm-button")},{children:"Done"}))]})]}))}))},aT=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:d,onChange:h,onFocus:p,onBlur:f}=n,g=lt(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=o(!1),[v,y]=o(!1),[x,w]=o(""),[$,S]=o(""),k=a();u((()=>{l&&(w(l.start),S(l.end))}),[]),Td("mousedown",(function(e){i||j(e)}),"document"),Td("keyup",(function(e){if("Tab"===e.code)j(e)}),"document");const O=()=>{D()},C=()=>{m||v||p&&p()},D=()=>{b(!1),y(!1),f&&f()},j=e=>{k&&!k.current.contains(e.target)&&(v||m)&&D()};return e(yj,Object.assign({ref:k,id:r},g,{children:t(xj,Object.assign({$disabled:i,$error:s,$readOnly:d},{children:[t(gf,Object.assign({error:s,currentActive:m?"start":v?"end":"none"},{children:[e(wj,{onFocus:()=>{i||d||m||(y(!1),b(!0),C())},readOnly:!0,placeholder:"From",value:Ph.formatDisplayValue(x,c),disabled:i,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(wj,{onFocus:()=>{i||d||v||(b(!1),y(!0),C())},readOnly:!0,placeholder:"To",value:Ph.formatDisplayValue($,c),disabled:i,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),e(iT,{id:r,show:m,value:x,format:c,onCancel:O,onChange:e=>{b(!1),y(!0),w(e);h&&h({start:e,end:$})}}),e(iT,{id:r,show:v,value:$,format:c,onCancel:O,onChange:e=>{y(!1),S(e);h&&h({start:x,end:e}),""==x?b(!0):f&&f()}})]}))}))},oT=M(Yp)`
    height: 3rem;
    gap: 0.5rem;
    padding-right: 2.75rem;
`,sT=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="12hr",readOnly:d,onChange:h,onFocus:p,onBlur:g,alignment:b="left",dropdownZIndex:v,startLimit:y,endLimit:x,interval:w=15}=n,$=lt(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[S]=o((()=>Cd.generate())),[k,O]=o(null),[C,D]=o(!1),[j,T]=o(""),[_,M]=o(""),[E,N]=o(""),[A,I]=o(""),[B,P]=o(""),L=a(),F=a(),R=a(),z=m((()=>Ph.generateTimings(w,c,y,x)),[w,c,y,x]),H=m((()=>{if(""===A)return z;const e=Ph.findClosestFlooredTime(A,z);return z.slice(z.indexOf(e))}),[z,A]),W=f((e=>Ph.parseInput(e,c)),[c]);u((()=>{var e,t;if(l){const n=null!==(e=W(l.start))&&void 0!==e?e:"",r=null!==(t=W(l.end))&&void 0!==t?t:"";M(n),N(r),I(n),P(r)}}),[l,W]),u((()=>{if(s)return void D(!1);const e=W(_),t=W(E);if(void 0===e)T("Invalid start time");else if(void 0===t)T("Invalid end time");else{if(!(""!==e&&""!==t&&Ph.to24Hour(t)<Ph.to24Hour(e)))return T(""),void(document.activeElement!==F.current&&document.activeElement!==R.current||D(!0));T("End time must be after start time")}D(!1)}),[_,E,W,s]);const V=e=>{i||d||(k||C||null==p||p(),O(e),D(!0))},Y=e=>{i||d||(O(e),D(!0),("start"===e?F:R).current.select())};function U(e){switch(e.code){case"Enter":"start"===k?K(_):"end"===k&&(C&&X(E),R.current.blur());break;case"Tab":q(_,E,{})}}const K=e=>{q(e,E,{goToNextInput:!0})},X=e=>{q(_,e,{triggerOnBlur:!0})},q=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var i,a;const o=null!==(i=W(e))&&void 0!==i?i:A,s=null!==(a=W(t))&&void 0!==a?a:B;M(o),N(s);o===A&&s===B||null==h||h({start:o,end:s}),n&&void 0!==W(e)&&(O("end"),R.current.select()),r&&(O(null),D(!1),null==g||g()),I(o),P(s)},G=e=>{e.stopPropagation(),M(""),N(""),I(""),P("");null==h||h({start:"",end:""}),O(null),D(!1)},Z=e=>{L.current&&!L.current.contains(e.relatedTarget)&&k&&!C&&q(_,E,{triggerOnBlur:!0})},Q=()=>{if(!d&&!i&&((null==_?void 0:_.length)>0||(null==E?void 0:E.length)>0))return e(QD,Object.assign({onClick:G,type:"button","aria-label":"Clear"},{children:e(hw,{"aria-hidden":!0})}))};return t(yj,Object.assign({id:r},$,{children:[e(WO,{children:e(Fp,{enabled:!d&&!i,isOpen:C,renderElement:()=>t(oT,Object.assign({ref:L,$disabled:i,$error:s||!!j,$readOnly:d,onBlur:Z},{children:[t(gf,Object.assign({error:s||!!j,currentActive:null===k?"none":k},{children:[e(wj,{ref:F,onFocus:()=>V("start"),placeholder:"start"===k?"hh:mm":"From",onChange:e=>M(e.target.value),value:_,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":C,"aria-controls":S,"aria-autocomplete":"list"}),e(wj,{ref:R,onFocus:()=>V("end"),placeholder:"end"===k?"hh:mm":"To",onChange:e=>N(e.target.value),value:E,disabled:i,readOnly:d,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>Y("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":C,"aria-controls":S,"aria-autocomplete":"list"})]})),Q()]})),renderDropdown:()=>{if(C)return e(pC,"start"===k?{listItems:z,onSelectItem:K,selectedItems:[_],disableItemFocus:!0,topScrollItem:Ph.findClosestFlooredTime(W(_),z),listboxId:S}:{listItems:H,onSelectItem:X,selectedItems:[E],disableItemFocus:!0,topScrollItem:Ph.findClosestFlooredTime(W(E),H),listboxId:S})},onClose:e=>{"outside-press"===e?(O(null),D(!1),null==g||g()):q(_,E,{triggerOnBlur:!0})},onDismiss:()=>{("start"===k?F:R).current.focus(),D(!1)},offset:8,alignment:b,fitAvailableHeight:!0,customZIndex:v})}),!s&&j&&e(Cx,Object.assign({id:r?`${r}-error-message`:"error-message",weight:"semibold",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message"},{children:j}))]}))},lT=t=>{var{variant:n="dial"}=t,r=lt(t,["variant"]);return"dial"===n?e(aT,Object.assign({},r)):"combobox"===n?e(sT,Object.assign({},r)):void 0};M.div`
    position: relative;
`;const cT=M(Up)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,dT=n=>{var{id:r,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:d,format:u="24hr",onChange:h,onFocus:p,onBlur:g}=n,m=lt(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=o(!1),y=a();Td("mousedown",(function(e){i||s||$(e)}),"document"),Td("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{i||s||b||(v(!0),p&&p())};const w=()=>{v(!1),g&&g()},$=e=>{y&&!y.current.contains(e.target)&&b&&w()},S=f((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,d]);return t(Yp,Object.assign({ref:y,id:r,$readOnly:s,$disabled:i,$error:l},m,{children:[e(cT,{onFocus:x,focused:b,readOnly:!0,placeholder:d||S(),value:Ph.formatDisplayValue(c,u),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),e(iT,{id:r,show:b,value:c,format:u,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))},uT=M(vw)`
    margin-right: 0.25rem;
`,hT=M(fw)`
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
`,pT=M(hT)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,fT=M(Il.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return E`
                color: ${ml.Neutral[3]};
            `}}
`,gT=M.div`
    display: flex;
`,mT=M(Il.Body)`
    ${e=>{if(e.$inactive)return E`
                color: ${ml.Neutral[3]};
            `}}
`,bT=r=>{var{disabled:i,error:s,value:l,onChange:c,onBlur:d,onChangeRaw:h,onBlurRaw:p,readOnly:f,placeholder:g="00-8888",autoComplete:m}=r,b=lt(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[v,y]=o(""),[x,w]=o(""),[$,S]=o("none"),k=a(null),O=a(null),C=a(null),D=a(v),j=a(x),T=a($),_=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),M=Ed({ref:O,formatter:_}),E=Ed({ref:C,formatter:_}),N=e=>{D.current=e,y(e)},A=e=>{j.current=e,w(e)},I=e=>{T.current=e,S(e)};u((()=>{"floor"===$&&3===v.length&&C.current&&C.current.focus()}),[v]),u((()=>{z(l)}),[l]);const B=e=>{I(e.target.name),e.target.select()},P=e=>{const t=e.target.name,n=e.target.value,r=R(n);"floor"===t?(N(r),r!==v&&H(r,t)):(A(r),r!==x&&H(r,t))},L=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=M();n(),N(e),H(e,t)}else{const{nextValue:e,updateCaretPosition:n}=E();n(),A(e),H(e,t)}},F=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===$&&0===x.length&&O.current.focus()},R=e=>/^[0-9]$/.test(e)?Dd.padValue(e,!0):e.toLocaleUpperCase(),z=e=>{if(e!==vT)if(void 0===e||0===e.length)N(""),A("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];N("floor"===$?e:R(e)),A("unit"===$?n:R(n))}}},H=(e,t)=>{if(!c&&!h)return;const n={floor:D.current,unit:j.current};if(n[t]=e,c){const e=V(n);c(e)}h&&h([n.floor,n.unit])},W=()=>{if(!d&&!p)return;const e={floor:R(D.current),unit:R(j.current)};if(d){const t=V(e);d(t)}p&&p([e.floor,e.unit])},V=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":vT},Y=e=>e.split("-");return t(Yp,Object.assign({},b,{ref:k,onClick:()=>{"none"===$&&O.current&&O.current.focus()},$disabled:i,$error:s,$readOnly:f,tabIndex:-1,onBlur:e=>{k.current&&k.current.contains(e.relatedTarget)||"none"!==T.current&&(I("none"),W())}},{children:[e(uT,Object.assign({"data-testid":"addon",disabled:i,$readOnly:f},{children:"#"})),f&&l?(()=>{const n=l.split("-");return t(gT,{children:[e(mT,{children:n[0]}),e(fT,{children:"-"}),e(mT,{children:n[1]})]})})():t(n,{children:[e(hT,{name:"floor",maxLength:3,value:v,ref:O,onFocus:B,onBlur:P,onChange:L,disabled:i,readOnly:f,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==$||f?Y(g)[0]:"",autoComplete:m}),e(fT,Object.assign({$inactive:0===v.length},{children:"-"})),e(pT,{name:"unit",maxLength:5,value:x,ref:C,onFocus:B,onBlur:P,onChange:L,onKeyDown:F,disabled:i,readOnly:f,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==$||f?Y(g)[1]:"",autoComplete:m})]})]}))},vT="Invalid unit number",yT={DateInput:t=>{var{label:n,errorMessage:r,id:i="form-date-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(af,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},DateRangeInput:t=>{var{label:n,errorMessage:r,id:i="form-date-range-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(xf,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},ESignature:t=>{const{label:n,errorMessage:r,id:i="form-field","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(gg,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},HistogramSlider:t=>{var{label:n,errorMessage:r,id:i="form-histogram-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(cw,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},Input:gw,InputGroup:bO,MaskedInput:NO,Label:jx,MultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-multi-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:h}=t,p=lt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:p.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(jD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s,variant:h},p))}))},NestedSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(ED,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},NestedMultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-multi-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(MD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},Select:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:h}=t,p=lt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:p.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(tj,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s,variant:h},p))}))},SelectHistogram:t=>{var{label:n,errorMessage:r,id:i="form-select-histogram","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,histogramSlider:u}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","histogramSlider"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:h.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(sj,Object.assign({histogramSlider:u,error:!!r,"data-testid":o||i,id:`${i}-base`},h))}))},Slider:t=>{var{label:n,errorMessage:r,id:i="form-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(lj,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},RangeSlider:t=>{var{label:n,errorMessage:r,id:i="form-range-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(rw,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},RangeSelect:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,h=lt(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:h.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e(ej,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s},h))}))},Textarea:vj,Timepicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(dT,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},TimeRangePicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(lT,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},CustomField:t=>{var{id:n="form-custom-field","data-error-testid":r,children:i}=t,a=lt(t,["id","data-error-testid","children"]);return e(Fx,Object.assign({id:n,"data-error-testid":r},a,{children:i}))},UnitNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-unit-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(bT,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},PhoneNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-phone-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(KD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},PredictiveTextInput:t=>{var{label:n,errorMessage:r,id:i="form-predictive-text","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=lt(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Fx,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e(GD,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))}},xT=M.li`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: 1px solid ${ml.Neutral[5]};
    }
`,wT=M.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    width: 100%;
`,$T=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,ST=M.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,kT=M(Il.BodySmall)`
    display: flex;
    flex: 1;
    margin-right: 1rem;

    ${yl.MaxWidth.mobileL} {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`,OT=M(Il.BodySmall)``,CT=M.div`
    display: flex;
    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return E`
                margin-left: 8rem; // 6rem width + 2rem gap

                ${yl.MaxWidth.mobileL} {
                    margin-left: 0;
                }
            `}}
`,DT=M(cc.Small)`
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
`,jT=({thumbnailImageDataUrl:n,"data-testid":r,renderReplaceButton:i,onReplaceClick:a})=>t(TT,Object.assign({"data-testid":r},{children:[e(_T,{"data-testid":r?`${r}-image`:void 0,src:n}),i&&e(MT,Object.assign({type:"button",onClick:e=>{a&&a()}},{children:"Replace"}))]})),TT=M.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,_T=M(Rg)`
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
`,MT=M.button`
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
`,ET=({fileItem:n,fileDescriptionMaxLength:r,wrapperWidth:i,onSave:s,onCancel:l,onBlur:c})=>{const{id:d,name:h,size:p,truncateText:f=!0,thumbnailImageDataUrl:g}=n,[m,b]=o(),[v,y]=o(""),x=a(),w=a();u((()=>{b($(h))}),[i]),u((()=>{y(n.description||"")}),[n]);const $=e=>{if(!f)return e;const t=w&&w.current?w.current.getBoundingClientRect().width:0;return Dd.truncateOneLine(e,t,t/2,t/2/8,16)};return t(xT,Object.assign({"data-testid":`${d}-edit-display`},{children:[t(wT,{children:[g&&e(jT,{thumbnailImageDataUrl:g}),t($T,{children:[t(ST,Object.assign({ref:w},{children:[e(kT,Object.assign({weight:"semibold"},{children:m})),e(OT,{children:Fg.formatFileSizeDisplay(p)})]})),e(yT.Textarea,{ref:x,id:`${d}-description-textarea`,"data-testid":`${d}-textarea`,value:v,maxLength:r,onChange:e=>{y(e.target.value)},onBlur:e=>{c(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),t(CT,Object.assign({$thumbnail:!!g},{children:[e(DT,Object.assign({"data-testid":`${d}-save-button`,type:"button",disabled:0===v.trim().length,onClick:()=>{s(x.current.value.trim())}},{children:"Save"})),e(DT,Object.assign({type:"button",styleType:"secondary","data-testid":`${d}-cancel-button`,onClick:l},{children:"Cancel"}))]}))]}))},NT=M.li`
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
`,AT=M(Ze)`
    // Temp icon
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;

    ${e=>{if(e.$disabled)return E`
                color: ${ml.Neutral[4]};
            `}}
`,IT=M.div`
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

    ${e=>e.$focused?E`
                border-color: ${ml.Accent.Light[1]};
                box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
            `:e.$disabled?E`
                background: ${ml.Neutral[7]};
            `:e.$error?E`
                background: ${ml.Validation.Red.Background};
                border-color: ${ml.Validation.Red.Border};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return E`
                ${yl.MaxWidth.mobileL} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,BT=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return E`
                ${yl.MaxWidth.mobileL} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,PT=M.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,LT=M.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,FT=M.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;

    ${yl.MaxWidth.mobileL} {
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
`,RT=M(Il.BodySmall)``,zT=M(RT)`
    margin-top: 0.25rem;
`,HT=M(Il.XSmall)`
    font-size: 0.875rem !important;
    color: ${ml.Validation.Red.Text};
`,WT=M(HT)`
    margin-top: 0.25rem;
    ${yl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,VT=M(HT)`
    display: none;
    visibility: hidden;
    ${yl.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,YT=M.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${yl.MaxWidth.mobileL} {
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
`,UT=M(Hf)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,KT=M($l)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${ml.Neutral[3]};
    }
`,XT=w((({fileItem:r,editable:i,sortable:s,wrapperWidth:l,disabled:c,readOnly:d,onDelete:h,onEditClick:p})=>{const{id:f,name:m,size:b,description:v,progress:y=1,errorMessage:x,thumbnailImageDataUrl:w,truncateText:$=!0}=r,[S,k]=o(),{activeId:O}=g(im),{attributes:C,listeners:D,setNodeRef:j,transform:T,transition:_}=ax({id:f}),M=a(),E={transform:rv.Translate.toString(T),transition:_},N=Object.assign(Object.assign({style:E},C),D),A=y<1,I=Fg.formatFileSizeDisplay(b),B=O?O===f?"self":"others":"none";u((()=>{k(R(m))}),[l]);const P=()=>{h()},L=()=>{p&&p()},F=e=>{s&&e.stopPropagation()},R=e=>{if(!$)return e;const t=M&&M.current?M.current.getBoundingClientRect().width:0;return Dd.truncateOneLine(e,t,t/2,t/2/8,16)},z=()=>c||!!O,H=()=>s&&!d,W=()=>t(n,{children:[e(RT,Object.assign({weight:v?"semibold":"regular"},{children:S})),v&&e(zT,{children:v})]});return t(NT,Object.assign({id:f,ref:j,$sortable:H(),$disabled:z(),$focusType:B},H()?N:{},{children:[H()&&e(AT,{"data-testid":`${f}-drag-handle`,$disabled:z()}),t(IT,Object.assign({$focused:"self"===B,$error:!!x,$loading:A,$disabled:z(),$editable:i},{children:[(()=>{let r;return r=t(n,x?{children:[t(PT,Object.assign({ref:M},{children:[W(),x&&e(WT,Object.assign({weight:"semibold"},{children:x}))]})),e(FT,{children:e(RT,{children:I})}),x&&e(VT,Object.assign({weight:"semibold"},{children:x}))]}:w?{children:[e(jT,{thumbnailImageDataUrl:w,"data-testid":`${f}-thumbnail`}),t(LT,{children:[e(PT,Object.assign({ref:M},{children:W()})),e(FT,{children:e(RT,{children:I})})]})]}:{children:[e(PT,Object.assign({ref:M},{children:W()})),e(FT,Object.assign({$hideInMobile:A},{children:e(RT,{children:I})}))]}),e(BT,Object.assign({$hasThumbnail:!!w},{children:r}))})(),!d&&(()=>{let r;return r=x?e(KT,Object.assign({onClick:P,"data-testid":`${f}-error-delete-button`,"aria-label":`delete-${m}`},{children:e(Ae,{"aria-hidden":!0})})):A?e(Ff,{progress:y,"data-testid":`${f}-progress-bar`}):t(n,{children:[i&&e(UT,Object.assign({"data-testid":`${f}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${m}`,disabled:z(),onClick:L,onKeyDown:F},{children:e(Ge,{"aria-hidden":!0})}),"edit"),e(UT,Object.assign({"data-testid":`${f}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${m}`,disabled:z(),onClick:P,onKeyDown:F},{children:e(qe,{"aria-hidden":!0})}),"delete")]}),e(YT,Object.assign({$editable:i,$error:!!x,$loading:A},{children:r}))})()]}))]}))})),qT=M.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":"2rem"};
`,GT=M.li`
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
`,ZT=({fileItems:t,editableFileItems:n,fileDescriptionMaxLength:r,sortable:i,disabled:s,readOnly:l,onItemUpdate:c,onItemDelete:d,onSort:h})=>{const[p,f]=o({}),{setActiveId:b}=g(im),{width:v,ref:y}=ln(),x=a({}),w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m((()=>[...t].filter((e=>null!=e))),[...t])}(gv(dx,{activationConstraint:{distance:8}}),gv(ly,{activationConstraint:{delay:150,tolerance:5}}),gv(Qv,{coordinateGetter:lx})),$=e=>{delete x.current[e]};u((()=>{f(E(t))}),[t]);const S=e=>t=>{N(e.id,"display"),$(e.id);const n=Object.assign(Object.assign({},e),{description:t});c(n)},k=e=>t=>{x.current[e.id]=t},O=e=>()=>{e.description&&0!==e.description.length?N(e.id,"display"):d(e),$(e.id)},C=e=>()=>{N(e.id,"edit")},D=e=>()=>{d(e)},j=e=>{if(h){const{active:n,over:r}=e;if(r&&n.id!==r.id){const e=t.findIndex((e=>e.id===n.id)),i=t.findIndex((e=>e.id===r.id)),a=Vy(t,e,i);h(a)}}b(void 0)},T=e=>{const{active:t}=e;b(t.id)},_=e=>n&&Fg.isSupportedImageType(e.type),M=e=>!e.errorMessage&&!l&&!("number"==typeof e.progress&&e.progress<1)&&_(e)&&!e.description,E=e=>{if(!e||0===e.length)return{};const t={};for(const n of e)n.errorMessage?t[n.id]="error":p[n.id]?t[n.id]=p[n.id]:t[n.id]=M(n)?"edit":"display";return t},N=(e,t)=>{f((n=>Object.assign(Object.assign({},n),{[e]:t})))},A=()=>t&&t.length>1&&i&&Object.values(p).every((e=>"display"===e)),I=()=>{const n=((e,t)=>{if(!e||0===e.length)return[];const n=[];for(const r of e)if("edit"===t[r.id]){const e=n[n.length-1];Array.isArray(e)?e.push(r):n.push([r])}else n.push(r);return n})(t,p);return 0===n.length?null:n.map(((t,n)=>Array.isArray(t)?((t,n)=>{const i=t.map((t=>{const n=Object.assign({},t);return void 0!==x.current[t.id]&&(n.description=x.current[t.id]),e(ET,{fileItem:n,wrapperWidth:v,fileDescriptionMaxLength:r,onSave:S(t),onCancel:O(t),onBlur:k(t)},t.id)}));return e(GT,{children:e("ul",{children:i})},`editable-${n}`)})(t,n):e(XT,{fileItem:t,editable:_(t),wrapperWidth:v,sortable:A(),disabled:s,readOnly:l,onDelete:D(t),onEditClick:C(t)},t.id)))};return t&&0!==t.length?s||l||!A()?e(qT,Object.assign({$readOnly:l,ref:y},{children:I()})):e(Py,Object.assign({sensors:w,onDragEnd:j,onDragStart:T},{children:e(Qy,Object.assign({items:t,strategy:qy},{children:e(qT,Object.assign({$readOnly:l,ref:y},{children:I()}))}))})):null},QT=M.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,JT=M(Il.H4)`
    margin-bottom: 0.5rem;
`,e_=M.div`
    color: ${ml.Neutral[1]};
    ${gc({textSize:"Body"})}
`,t_=M(Il.BodySmall)`
    margin-bottom: 0;
    color: ${ml.Neutral[3]};
`,n_=M.div`
    color: ${ml.Neutral[3]};
    ${gc({textSize:"BodySmall"})}
`,r_=M(Sc)`
    margin-bottom: 2rem;
`,i_=M.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${yl.MaxWidth.mobileL} {
        align-items: flex-start;
    }
`,a_=M(cc.Small)`
    width: 10rem;

    ${yl.MaxWidth.mobileL} {
        width: 100%;
    }
`,o_=M.label`
    ${Al.getTextStyle("BodySmall","semibold")}
    color: ${ml.Neutral[3]};
    margin-top: 0.5rem;
    width: 10rem;
    text-align: center;
    ${yl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,s_=M(Sc)`
    margin-bottom: 2rem;
`,l_=({styleType:n="bordered",fileItems:r,title:i,description:s,maxFiles:l,warning:c,className:d,name:u,id:h,"data-testid":p,accept:f,capture:g,multiple:m,disabled:b,sortable:v=!1,fileDescriptionMaxLength:y,editableFileItems:x=!1,errorMessage:w,readOnly:$,onChange:S,onDelete:k,onEdit:O,onSort:C})=>{const D=a(),[j,T]=o(),_=()=>!!l&&r.length>=l;return e(im.Provider,Object.assign({value:{activeId:j,setActiveId:T}},{children:t(Ib,Object.assign({ref:D,onChange:e=>{!b&&S&&S(e)},id:h?`${h}-dropzone`:"dropzone",accept:f,capture:g,border:"bordered"===n,className:d,"data-testid":p,name:u,multiple:m,disabled:b||_()||$},{children:[(i||s)&&t(QT,{children:[i?"string"==typeof i?e(JT,Object.assign({weight:"regular"},{children:i})):e(e_,{children:i}):null,s?"string"==typeof s?e(t_,Object.assign({weight:"regular"},{children:s})):e(n_,{children:s}):null]}),c&&e(r_,Object.assign({type:"warning"},{children:c})),e(ZT,{fileItems:r,editableFileItems:x,fileDescriptionMaxLength:y,sortable:v,disabled:b,readOnly:$,onItemDelete:e=>{k&&k(e)},onItemUpdate:e=>{O&&O(e)},onSort:e=>{C&&C(e)}}),w&&e(s_,Object.assign({type:"error"},{children:w})),!$&&t(i_,{children:[e(a_,Object.assign({type:"button",styleType:"secondary",disabled:!!j||b||_(),onClick:e=>{b||(e.preventDefault(),D.current&&D.current.openFileDialog())}},{children:"Upload files"})),e(o_,{children:"or drop them here"})]})]}))}))},c_=M.div`
    background-color: ${ml.Neutral[8]};
    border: 1px solid ${ml.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,d_=M.div`
    background-color: ${ml.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,u_=M.div`
    background-color: ${ml.Neutral[8]};
    height: 100%;
    width: 100%;
`,h_=M.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,p_=M.div`
    display: flex;
    align-items: center;

    background-color: ${ml.Neutral[8]};

    ${yl.MaxWidth.tablet} {
        border-bottom: 1px solid ${ml.Neutral[5]};
    }
`,f_=M(Il.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${yl.MaxWidth.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,g_=M($l)`
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
`,m_=M(cc.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${yl.MaxWidth.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,b_=M(Vd.Default)`
    width: 100%;
`,v_=M.div`
    padding: 1.5rem 1.25rem;
    background-color: ${ml.Neutral[8]};
    border-top: 1px solid ${ml.Neutral[5]};
`,y_=M(cc.Default)`
    width: 100%;
`,x_=i.createContext({mode:"default",rootNode:null});var w_=Wa((function(e){return null==e}));const $_=M.div`
    background-color: ${e=>e.$collapsible?ml.Neutral[7](e):ml.Neutral[8](e)};

    ${yl.MaxWidth.tablet} {
        background-color: ${ml.Neutral[7]};
    }
`,S_=M.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${ml.Neutral[5]};

    ${yl.MaxWidth.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,k_=M.div`
    display: flex;
    align-items: center;

    background-color: ${ml.Neutral[8]};

    ${yl.MaxWidth.tablet} {
        background-color: transparent;
    }
`,O_=M($l)`
    margin: 0 0 0 auto;
`,C_=M(pe)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${ml.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${ml.Neutral[2]};
    }
`,D_=M(Il.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${yl.MaxWidth.tablet} {
        ${Al.getTextStyle("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,j_=M(za.div)`
    overflow: hidden;
`,T_=M.div`
    padding: 1rem 1.25rem;
`,__=M(za.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,M_=M(cc.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,E_=n=>{var{collapsible:r=!0,initialExpanded:i=!1,expanded:a,onExpandChange:s,minimisable:l=!1,minimisedHeight:c,showDivider:d=!0,showMobileDivider:h=!0,title:p,addon:f,children:m}=n,b=lt(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:v,rootNode:y}=g(x_),x="mobile"===v,[w,$]=o(_()),[S,k]=o(l),O=!x&&r,C=ln(),D=ln(),j=Sa({height:w?C.height:0}),T=S?null!=c?c:Math.min(.5*D.height,216):D.height;u((()=>{$(_())}),[r,a]);function _(){return!!x||(w_(a)?!r||i:a)}return t($_,Object.assign({$collapsible:O},{children:[e(S_,{$showDivider:d,$showMobileDivider:h}),(p||O)&&t(k_,{children:[p&&t(D_,Object.assign({weight:"semibold"},{children:[p," ",f&&("popover"===f.type?e(kx,{addon:f,rootNode:x?y:void 0}):null)]})),O&&e(O_,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!w;w_(a)&&$(e),s&&s(e)},"aria-label":w?"Collapse":"Expand"},{children:e(C_,{$expanded:w})}))]}),e(j_,Object.assign({"data-testid":"expandable-container","data-expanded":w,style:j},{children:e("div",Object.assign({ref:C.ref},{children:t(T_,Object.assign({},b,{children:[e(__,Object.assign({"data-testid":"minimisable-container",$height:T,$minimisable:l},{children:e("div",Object.assign({ref:D.ref},{children:e("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof m?m(v,{minimised:S}):m}))}))})),l&&t(M_,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{k(!S)}},{children:["View ",S?"more":"less"]}))]}))}))}))]}))},N_=M(E_)`
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
`,A_=M.div`
    display: flex;
    flex-direction: column;

    ${yl.MaxWidth.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,I_=M.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${Al.getTextStyle("BodySmall","regular")}
    ${e=>e.$selected&&E`
            color: ${ml.Primary};
        `}
`,B_=M.input`
    appearance: none;
`,P_=M(Sj)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${B_}:focus-visible + & {
        outline: 2px solid ${ml.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,L_=M(Hj)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,F_=M(cc.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${yl.MaxWidth.tablet} {
        margin: 0 0 1rem 0;
    }
`,R_=M.div`
    background-color: ${ml.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,z_=Object.assign((r=>{var{toggleFilterButtonLabel:i="Filters",toggleFilterButtonStyle:s="light",headerTitle:l="Filters",clearButtonDisabled:c=!1,onClear:d,onDismiss:h,onDone:p,children:f}=r,g=lt(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[m,b]=o(!1),v=a(null),y=a(null),x=Vc.useMediaQuery({maxWidth:bl.tablet});u((()=>{x||$()}),[x]);const w=()=>{b(!0)},$=()=>{b(!1),h&&h()},S=()=>{b(!1),p&&p()},k=()=>{d&&d()},O=e=>"function"==typeof f?f(e):f,C=n=>t(p_,{children:["mobile"===n&&e(g_,Object.assign({onClick:$,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(J,{})})),e(f_,Object.assign({weight:"semibold"},{children:l})),e(m_,Object.assign({styleType:"link",type:"button",onClick:k,disabled:c},{children:"Clear"}))]});return e("div",Object.assign({},g,{children:e(x_.Provider,x?Object.assign({value:{mode:"mobile",rootNode:v}},{children:t(n,{children:[e(b_,Object.assign({"data-testid":"filter-show-button",styleType:s,onClick:w,type:"button",icon:e(ee,{})},{children:i})),e(_f,Object.assign({show:m,disableTransition:!0},{children:e(u_,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:t(d_,Object.assign({ref:v},{children:[C("mobile"),e(h_,{children:O("mobile")}),e(v_,{children:e(y_,Object.assign({onClick:S,type:"button"},{children:"Done"}))})]}))}))}))]})}):Object.assign({value:{mode:"default",rootNode:y}},{children:t(c_,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:y},{children:[C("default"),O("default")]}))}))}))}),{Item:E_,Page:({onDismiss:n,onDone:r,children:i})=>t(R_,{children:[e(g_,Object.assign({onClick:n,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e(ge,{})})),e(h_,{children:i}),e(v_,{children:e(y_,Object.assign({onClick:r,type:"button"},{children:"Done"}))})]}),Checkbox:r=>{var{selectedOptions:i,options:s,onSelect:l,labelExtractor:c,valueExtractor:d,useToggleContentWidth:h}=r,p=lt(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:m}=g(x_),[b,v]=o(i||[]),[y,x]=o(),[w,$]=o(s.length),S=a(),k=a(),O=e=>()=>{const t=[...b],n=b.findIndex((t=>j(t)===j(e)));n>=0?t.splice(n,1):t.push(e),v(t),null==l||l(t)},C=()=>{const e=b.length?[]:s;v(e),null==l||l(e)},D=e=>{var t;return c?c(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},j=e=>{var t;return d?d(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},T=f((()=>{if(!S.current)return void x(void 0);const e=Array.from(S.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const a=e[i].offsetTop;if(a>r&&(n++,r=a,n>2))break;t=i}$(t),x(n>2?r-8:void 0)}),[]);u((()=>{i!==b&&v(i||[])}),[i]),u((()=>{"default"===m?(()=>{const e=k.current?k.current.offsetTop+k.current.clientHeight:void 0;x(e)})():T()}),[s]),ln({handleWidth:"mobile"===m,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:S,onResize:T});return e(N_,Object.assign({minimisable:s.length>5,minimisedHeight:y},p,{children:(r,{minimised:i})=>t(n,{children:[s.length<3?null:e(F_,Object.assign({styleType:"link",type:"button",onClick:C},{children:b.length?"Clear all":"Select all"})),e(A_,Object.assign({role:"group","aria-label":p.title,ref:S},{children:s.map(((n,a)=>"default"===r?((n,r,i)=>{const a=D(n),o=j(n),s=!!b.find((e=>j(e)===o));return t(I_,Object.assign({$visible:!i||r<5,$selected:s,ref:4===r?k:void 0},{children:[e(B_,{type:"checkbox",checked:s,onChange:O(n)}),e(P_,{type:"checkbox",active:s}),a]}),o)})(n,a,i):((t,n,r)=>{const i=D(t),a=j(t),o=!!b.find((e=>j(e)===a));return e(L_,Object.assign({type:"checkbox",checked:o,$visible:!r||y&&n<=w,onChange:O(t),useContentWidth:h},{children:i}),a)})(n,a,i)))}))]})}))}}),H_=M.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${yl.MaxWidth.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`,W_=M(Il.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,V_=M.div`
    display: flex;
    align-items: flex-start;
`,Y_=M.a`
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
`,U_=()=>t(H_,Object.assign({"data-testid":"download-app-section"},{children:[e(W_,Object.assign({weight:"semibold"},{children:"Download the app"})),t(V_,{children:[e(Y_,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(Y_,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})),K_={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},X_={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},q_={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var G_;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const r=t(n);return`${`${(new Date).getFullYear()} ${r}`} Last Updated ${od(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const n=(e=>{switch(e){case"bookingsg":return X_;case"mylegacy":return q_;default:return K_}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(G_||(G_={}));const Z_=M.footer`
    background: ${ml.Neutral[7]};
`,Q_=M(Il.Hyperlink.Small)`
    color: ${ml.Neutral[1]};
`,J_=M(Ix.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${ml.Neutral[5]};

    ${yl.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`,eM=M.div`
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
`,tM=M.ul`
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
`,nM=M.div`
    grid-column: 9 / span 4;

    ${yl.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${yl.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,rM=M.div`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${ml.Neutral[6]};
    }
`,iM=M(Ix.Content)`
    padding: 1.375rem 0;

    ${yl.MaxWidth.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,aM=M.div`
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
`,oM=M(aM)`
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
`,sM=M(Il.Hyperlink.Small)`
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
`,lM=r=>{var{children:i,links:a,lastUpdated:o,disclaimerLinks:s,showDownloadAddon:l,logoSrc:c,copyrightInfo:d,onFooterLinkClick:u,layout:h="default"}=r,p=lt(r,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const f="stretch"===h,g=A(),m=t=>t.map(((t,n)=>{const r=lt(t,["data-options"]);return e("li",{children:e(Q_,Object.assign({},r,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):u&&(e.preventDefault(),u(t))})(e,t)}))},n)}));return t(Z_,Object.assign({},p,{children:[(()=>{let r=null;return i||((a||l)&&(r=t(n,{children:[e(eM,Object.assign({"data-testid":"logo-section"},{children:e("img",{src:c||G_.getFooterLogo(null==g?void 0:g.resourceScheme),alt:"LifeSG","data-testid":"logo"})})),(null==a?void 0:a[0])&&e(tM,Object.assign({"data-testid":"link-col-1"},{children:m(a[0])}),"link-col-1"),(null==a?void 0:a[1])&&e(tM,Object.assign({"data-testid":"link-col-2"},{children:m(a[1])}),"link-col-2"),l&&e(nM,{children:e(U_,{})})]})),r?e(J_,Object.assign({type:"grid",stretch:f},{children:r})):null)})(),e(rM,{}),t(iM,Object.assign({type:"grid",stretch:f},{children:[e(aM,{children:(()=>{const t=G_.getDisclaimerLinks(null==g?void 0:g.resourceScheme,s);return Object.keys(t).map((n=>e(sM,Object.assign({},t[n]),n)))})()},"disclaimer"),e(oM,{children:e(Il.XSmall,Object.assign({"data-testid":"copyright-text"},{children:d||t(n,{children:["©"," ",G_.getCopyrightInfo(o,null==g?void 0:g.resourceScheme)]})}))},"copyright")]}))]}))};var cM=function(e,t){return Number(e.toFixed(t))},dM=function(e,t,n){n&&"function"==typeof n&&n(e,t)},uM={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},hM=function(e){"number"==typeof e&&cancelAnimationFrame(e)},pM=function(e){e.mounted&&(hM(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function fM(e,t,n,r){if(e.mounted){var i=(new Date).getTime();pM(e),e.animation=function(){if(!e.mounted)return hM(e.animation);var a=(new Date).getTime()-i,o=a/n,s=(0,uM[t])(o);a>=n?(r(1),e.animation=null):e.animation&&(r(s),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function gM(e,t,n,r){var i=function(e){var t=e.scale,n=e.positionX,r=e.positionY;return!(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(r))}(t);if(e.mounted&&i){var a=e.setTransformState,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=t.scale-s,u=t.positionX-l,h=t.positionY-c;0===n?a(t.scale,t.positionX,t.positionY):fM(e,r,n,(function(e){a(s+d*e,l+u*e,c+h*e)}))}}var mM=function(e,t){var n=e.wrapperComponent,r=e.contentComponent,i=e.setup.centerZoomedOut;if(!n||!r)throw new Error("Components are not mounted");var a=function(e,t,n){var r=e.offsetWidth,i=e.offsetHeight,a=t.offsetWidth*n,o=t.offsetHeight*n;return{wrapperWidth:r,wrapperHeight:i,newContentWidth:a,newDiffWidth:r-a,newContentHeight:o,newDiffHeight:i-o}}(n,r,t),o=a.wrapperWidth,s=a.wrapperHeight,l=function(e,t,n,r,i,a,o){var s=e>t?n*(o?1:.5):0,l=r>i?a*(o?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:r-i-l,maxPositionY:l}}(o,a.newContentWidth,a.newDiffWidth,s,a.newContentHeight,a.newDiffHeight,Boolean(i));return l},bM=function(e,t,n,r){return cM(r?e<t?t:e>n?n:e:e,2)},vM=function(e,t){var n=mM(e,t);return e.bounds=n,n};function yM(e,t,n,r,i,a,o){var s=n.minPositionX,l=n.minPositionY,c=n.maxPositionX,d=n.maxPositionY,u=0,h=0;return o&&(u=i,h=a),{x:bM(e,s-u,c+u,r),y:bM(t,l-h,d+h,r)}}function xM(e,t,n,r,i,a){var o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=r-s;return"number"!=typeof t||"number"!=typeof n?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):yM(l-t*d,c-n*d,i,a,0,0,null)}function wM(e,t,n,r,i){var a=t-(i?r:0);return!Number.isNaN(n)&&e>=n?n:!Number.isNaN(t)&&e<=a?a:e}var $M=function(e,t){var n=e.setup.panning.excluded,r=e.isInitialized,i=e.wrapperComponent,a=t.target,o="shadowRoot"in a&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(a);return!!(r&&a&&o)&&!nE(a,n)},SM=function(e){var t=e.isInitialized,n=e.isPanning,r=e.setup.panning.disabled;return!(!t||!n||r)};function kM(e,t,n,r,i){var a=e.setup.limitToBounds,o=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==o&&null!==s&&(t!==d||n!==u)){var h=yM(t,n,s,a,r,i,o),p=h.x,f=h.y;e.setTransformState(c,p,f)}}var OM=function(e,t){var n=e.setup,r=e.transformState.scale,i=n.minScale,a=n.disablePadding;return t>0&&r>=i&&!a?t:0},CM=function(e){var t=e.mounted,n=e.setup,r=n.disabled,i=n.velocityAnimation,a=e.transformState.scale;return!(i.disabled&&!(a>1)&&r&&!t)},DM=function(e){var t=e.mounted,n=e.velocity,r=e.bounds,i=e.setup,a=i.disabled,o=i.velocityAnimation,s=e.transformState.scale;return!(o.disabled&&!(s>1)&&a&&!t)&&!(!n||!r)};function jM(e,t,n,r,i,a,o,s,l,c){if(i){var d;if(t>o&&n>o)return(d=o+(e-o)*c)>l?l:d<o?o:d;if(t<a&&n<a)return(d=a+(e-a)*c)<s?s:d>a?a:d}return r?t:bM(e,a,o,i)}function TM(e,t){if(CM(e)){var n=e.lastMousePosition,r=e.velocityTime,i=e.setup,a=e.wrapperComponent,o=i.velocityAnimation.equalToMove,s=Date.now();if(n&&r&&a){var l=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,o),c=t.x-n.x,d=t.y-n.y,u=c/l,h=d/l,p=s-r,f=c*c+d*d,g=Math.sqrt(f)/p;e.velocity={velocityX:u,velocityY:h,total:g}}e.lastMousePosition=t,e.velocityTime=s}}function _M(e,t){var n=e.transformState.scale;pM(e),vM(e,n),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var n=t.touches,r=e.transformState,i=r.positionX,a=r.positionY;if(e.isPanning=!0,1===n.length){var o=n[0].clientX,s=n[0].clientY;e.startCoords={x:o-i,y:s-a}}}(e,t):function(e,t){var n=e.transformState,r=n.positionX,i=n.positionY;e.isPanning=!0;var a=t.clientX,o=t.clientY;e.startCoords={x:a-r,y:o-i}}(e,t)}function MM(e){var t=e.transformState.scale,n=e.setup,r=n.minScale,i=n.alignmentAnimation,a=i.disabled,o=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(a||t<r||!o&&!s)){var d=function(e){var t=e.transformState,n=t.positionX,r=t.positionY,i=t.scale,a=e.setup,o=a.disabled,s=a.limitToBounds,l=a.centerZoomedOut,c=e.wrapperComponent;if(!o&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,h=d.minPositionX,p=d.maxPositionY,f=d.minPositionY,g=n>u||n<h,m=r>p||r<f,b=xM(e,n>u?c.offsetWidth:e.setup.minPositionX||0,r>p?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:g?v:n,positionY:m?y:r}}}(e);d&&gM(e,d,l,c)}}function EM(e,t,n){var r=e.startCoords,i=e.setup.alignmentAnimation,a=i.sizeX,o=i.sizeY;if(r){var s=function(e,t,n){var r=e.startCoords,i=e.transformState,a=e.setup.panning,o=a.lockAxisX,s=a.lockAxisY,l=i.positionX,c=i.positionY;if(!r)return{x:l,y:c};var d=t-r.x,u=n-r.y;return{x:o?l:d,y:s?c:u}}(e,t,n),l=s.x,c=s.y,d=OM(e,a),u=OM(e,o);TM(e,{x:l,y:c}),kM(e,l,c,d,u)}}function NM(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,n=e.velocity,r=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var a=null==r?void 0:r.getBoundingClientRect(),o=null==i?void 0:i.getBoundingClientRect(),s=(null==a?void 0:a.width)||0,l=(null==a?void 0:a.height)||0,c=(null==o?void 0:o.width)||0,d=(null==o?void 0:o.height)||0,u=s<c||l<d;!t&&n&&(null==n?void 0:n.total)>.1&&u?function(e){var t=e.velocity,n=e.bounds,r=e.setup,i=e.wrapperComponent;if(DM(e)&&t&&n&&i){var a=t.velocityX,o=t.velocityY,s=t.total,l=n.maxPositionX,c=n.minPositionX,d=n.maxPositionY,u=n.minPositionY,h=r.limitToBounds,p=r.alignmentAnimation,f=r.zoomAnimation,g=r.panning,m=g.lockAxisY,b=g.lockAxisX,v=f.animationType,y=p.sizeX,x=p.sizeY,w=p.velocityAlignmentTime,$=function(e,t){var n=e.setup.velocityAnimation,r=n.equalToMove,i=n.animationTime,a=n.sensitivity;return r?i*t*a:i}(e,s),S=Math.max($,w),k=OM(e,y),O=OM(e,x),C=k*i.offsetWidth/100,D=O*i.offsetHeight/100,j=l+C,T=c-C,_=d+D,M=u-D,E=e.transformState,N=(new Date).getTime();fM(e,v,S,(function(t){var n=e.transformState,r=n.scale,i=n.positionX,s=n.positionY,f=((new Date).getTime()-N)/w,g=1-(0,uM[p.animationType])(Math.min(1,f)),v=1-t,y=i+a*v,x=s+o*v,$=jM(y,E.positionX,i,b,h,c,l,T,j,g),S=jM(x,E.positionY,s,m,h,u,d,M,_,g);i===y&&s===x||e.setTransformState(r,$,S)}))}}(e):MM(e)}}function AM(e,t,n,r){var i=e.setup,a=i.minScale,o=i.maxScale,s=i.limitToBounds,l=wM(cM(t,2),a,o,0,!1),c=xM(e,n,r,l,vM(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function IM(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.minScale,s=a.limitToBounds,l=a.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,h=c||r>=o;if((r>=1||s)&&MM(e),!h&&i&&e.mounted){var p=AM(e,o,t||i.offsetWidth/2,n||i.offsetHeight/2);p&&gM(e,p,d,u)}}var BM=function(){return BM=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},BM.apply(this,arguments)};function PM(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var LM=1,FM=0,RM=0,zM={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},HM=function(e){var t,n,r,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:LM,scale:null!==(n=e.initialScale)&&void 0!==n?n:LM,positionX:null!==(r=e.initialPositionX)&&void 0!==r?r:FM,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:RM}},WM=function(e){var t=BM({},zM);return Object.keys(e).forEach((function(n){var r=void 0!==e[n];if(void 0!==zM[n]&&r){var i=Object.prototype.toString.call(zM[n]),a="[object Object]"===i,o="[object Array]"===i;t[n]=a?BM(BM({},zM[n]),e[n]):o?PM(PM([],zM[n],!0),e[n],!0):e[n]}})),t},VM=function(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.maxScale,s=a.minScale,l=a.zoomAnimation,c=a.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?r*Math.exp(t*n):r+t*n;return wM(cM(u,3),s,o,d,!1)};function YM(e,t,n,r,i){var a=e.wrapperComponent,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY;if(!a)return console.error("No WrapperComponent found");var d=(a.offsetWidth/2-l)/s,u=(a.offsetHeight/2-c)/s,h=AM(e,VM(e,t,n),d,u);if(!h)return console.error("Error during zoom event. New transformation state was not calculated.");gM(e,h,r,i)}function UM(e,t,n,r){var i=e.setup,a=e.wrapperComponent,o=i.limitToBounds,s=HM(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(a){var h=mM(e,s.scale),p=yM(s.positionX,s.positionY,h,o,0,0,a),f={scale:s.scale,positionX:p.x,positionY:p.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==r||r(),gM(e,f,t,n))}}var KM=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),YM(e,1,t,n,r)}},XM=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),YM(e,-1,t,n,r)}},qM=function(e){return function(t,n,r,i,a){void 0===i&&(i=300),void 0===a&&(a="easeOut");var o=e.transformState,s=o.positionX,l=o.positionY,c=o.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var h={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(r)?c:r};gM(e,h,i,a)}}},GM=function(e){return function(t,n){void 0===t&&(t=200),void 0===n&&(n="easeOut"),UM(e,t,n)}},ZM=function(e){return function(t,n,r){void 0===n&&(n=200),void 0===r&&(r="easeOut");var i=e.transformState,a=e.wrapperComponent,o=e.contentComponent;if(a&&o){var s=iE(t||i.scale,a,o);gM(e,s,n,r)}}},QM=function(e){return function(t,n,r,i){void 0===r&&(r=600),void 0===i&&(i="easeOut"),pM(e);var a=e.wrapperComponent,o="string"==typeof t?document.getElementById(t):t;if(a&&o&&a.contains(o)){var s=function(e,t,n){var r=e.wrapperComponent,i=e.contentComponent,a=e.transformState,o=e.setup,s=o.limitToBounds,l=o.minScale,c=o.maxScale;if(!r||!i)return a;var d=r.getBoundingClientRect(),u=t.getBoundingClientRect(),h=function(e,t,n,r){var i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n.getBoundingClientRect(),s=a.x*r.scale,l=a.y*r.scale;return{x:(i.x-o.x+s)/r.scale,y:(i.y-o.y+l)/r.scale}}(t,r,i,a),p=h.x,f=h.y,g=u.width/a.scale,m=u.height/a.scale,b=r.offsetWidth/g,v=r.offsetHeight/m,y=wM(n||Math.min(b,v),l,c,0,!1),x=(d.width-g*y)/2,w=(d.height-m*y)/2,$=yM((d.left-p)*y+x,(d.top-f)*y+w,mM(e,y),s,0,0,r);return{positionX:$.x,positionY:$.y,scale:y}}(e,o,n);gM(e,s,r,i)}}},JM=function(e){return{instance:e,zoomIn:KM(e),zoomOut:XM(e),setTransform:qM(e),resetTransform:GM(e),centerView:ZM(e),zoomToElement:QM(e)}},eE=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,JM(e)),t};function tE(){try{return{get passive(){return!0,!1}}}catch(e){return!1}}var nE=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},rE=function(e){e&&clearTimeout(e)},iE=function(e,t,n){var r=n.offsetWidth*e,i=n.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-r)/2,positionY:(t.offsetHeight-i)/2}};function aE(e,t,n){var r=t.getBoundingClientRect(),i=0,a=0;if("clientX"in e)i=(e.clientX-r.left)/n,a=(e.clientY-r.top)/n;else{var o=e.touches[0];i=(o.clientX-r.left)/n,a=(o.clientY-r.top)/n}return(Number.isNaN(i)||Number.isNaN(a))&&console.error("No mouse or touch offset found"),{x:i,y:a}}var oE=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},sE=function(e,t){var n=e.props,r=n.onWheel,i=n.onZoom,a=e.contentComponent,o=e.setup,s=e.transformState.scale,l=o.limitToBounds,c=o.centerZoomedOut,d=o.zoomAnimation,u=o.wheel,h=o.disablePadding,p=o.smooth,f=d.size,g=d.disabled,m=u.step,b=u.smoothStep;if(!a)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var n=function(e){return e?e.deltaY<0?1:-1:0}(e),r=function(e,t){return"number"==typeof e?e:t}(t,n);return r}(t,null),y=function(e,t,n,r,i){var a=e.transformState.scale,o=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,h=d.size,p=d.disabled;if(!o)throw new Error("Wrapper is not mounted");var f=a+t*n;if(i)return f;var g=!r&&!p;return wM(cM(f,3),c,l,h,g&&!u)}(e,v,p?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=vM(e,y),w=aE(t,a,s),$=l&&(g||0===f||c||h),S=xM(e,w.x,w.y,y,x,$),k=S.x,O=S.y;e.previousWheelEvent=t,e.setTransformState(y,k,O),dM(eE(e),t,r),dM(eE(e),t,i)}},lE=function(e,t){var n=e.props,r=n.onWheelStop,i=n.onZoomStop;rE(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(IM(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var a=function(e,t){var n=e.previousWheelEvent,r=e.transformState.scale,i=e.setup,a=i.maxScale,o=i.minScale;return!!n&&(r<a||r>o||Math.sign(n.deltaY)!==Math.sign(t.deltaY)||n.deltaY>0&&n.deltaY<t.deltaY||n.deltaY<0&&n.deltaY>t.deltaY||Math.sign(n.deltaY)!==Math.sign(t.deltaY))}(e,t);a&&(rE(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,dM(eE(e),t,r),dM(eE(e),t,i))}),160))},cE=function(e,t){var n=e.contentComponent,r=e.pinchStartDistance,i=e.transformState.scale,a=e.setup,o=a.limitToBounds,s=a.centerZoomedOut,l=a.zoomAnimation,c=l.disabled,d=l.size;if(null!==r&&n){var u=function(e,t,n){var r=n.getBoundingClientRect(),i=e.touches,a=cM(i[0].clientX-r.left,5),o=cM(i[0].clientY-r.top,5);return{x:(a+cM(i[1].clientX-r.left,5))/2/t,y:(o+cM(i[1].clientY-r.top,5))/2/t}}(t,i,n);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var h=oE(t),p=function(e,t){var n=e.pinchStartScale,r=e.pinchStartDistance,i=e.setup,a=i.maxScale,o=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!n||null===r||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:wM(cM(t/r*n,2),o,a,c,!d&&!l)}(e,h);if(p!==i){var f=vM(e,p),g=o&&(c||0===d||s),m=xM(e,u.x,u.y,p,f,g),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=h,e.setTransformState(p,b,v)}}}},dE=function(e,t){var n=e.props.onZoomStop,r=e.setup.doubleClick.animationTime;rE(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,dM(eE(e),t,n)}),r)};function uE(e,t){var n=e.setup,r=e.doubleClickStopEventTimer,i=e.transformState,a=e.contentComponent,o=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=n.doubleClick,u=d.disabled,h=d.mode,p=d.step,f=d.animationTime,g=d.animationType;if(!u&&!r){if("reset"===h)return function(e,t){var n=e.props,r=n.onZoomStart,i=n.onZoom,a=e.setup.doubleClick,o=a.animationTime,s=a.animationType;dM(eE(e),t,r),UM(e,o,s,(function(){return dM(eE(e),t,i)})),dE(e,t)}(e,t);if(!a)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(h,e.transformState.scale),b=VM(e,m,p);if(o!==b){dM(eE(e),t,l);var v=aE(t,a,o),y=AM(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");dM(eE(e),t,c),gM(e,y,f,g),dE(e,t)}}}var hE=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,vM(t,t.transformState.scale),t.setup=WM(e)},this.initializeWindowEvents=function(){var e,n,r=tE(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null===(n=t.wrapperComponent)||void 0===n||n.addEventListener("wheel",t.onWheelPanning,r),null==a||a.addEventListener("mousedown",t.onPanningStart,r),null==a||a.addEventListener("mousemove",t.onPanning,r),null==a||a.addEventListener("mouseup",t.onPanningStop,r),null==i||i.addEventListener("mouseleave",t.clearPanning,r),null==a||a.addEventListener("keyup",t.setKeyUnPressed,r),null==a||a.addEventListener("keydown",t.setKeyPressed,r)},this.cleanupWindowEvents=function(){var e,n,r=tE(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null==a||a.removeEventListener("mousedown",t.onPanningStart,r),null==a||a.removeEventListener("mousemove",t.onPanning,r),null==a||a.removeEventListener("mouseup",t.onPanningStop,r),null==i||i.removeEventListener("mouseleave",t.clearPanning,r),null==a||a.removeEventListener("keyup",t.setKeyUnPressed,r),null==a||a.removeEventListener("keydown",t.setKeyPressed,r),document.removeEventListener("mouseleave",t.clearPanning,r),pM(t),null===(n=t.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(e){var n=tE();e.addEventListener("wheel",t.onWheelZoom,n),e.addEventListener("dblclick",t.onDoubleClick,n),e.addEventListener("touchstart",t.onTouchPanningStart,n),e.addEventListener("touchmove",t.onTouchPanning,n),e.addEventListener("touchend",t.onTouchPanningStop,n)},this.handleInitialize=function(e){var n=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(eE(t))})),n&&(t.setCenter(),t.observer=new ResizeObserver((function(){var n,r=e.offsetWidth,i=e.offsetHeight;(r>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(eE(t))})),t.setCenter(),null===(n=t.observer)||void 0===n||n.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.setup.wheel,r=n.disabled,i=n.wheelDisabled,a=n.touchPadDisabled,o=n.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||r||!c||i&&!t.ctrlKey||a&&t.ctrlKey||nE(c,o))}(t,e);n&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var n=e.props,r=n.onWheelStart,i=n.onZoomStart;e.wheelStopEventTimer||(pM(e),dM(eE(e),t,r),dM(eE(e),t,i))}(t,e),sE(t,e),lE(t,e))}},this.onWheelPanning=function(e){var n=t.setup,r=n.disabled,i=n.wheel,a=n.panning;if(t.wrapperComponent&&t.contentComponent&&!r&&i.wheelDisabled&&!a.disabled&&a.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var o=t.transformState,s=o.positionX,l=o.positionY,c=s-e.deltaX,d=l-e.deltaY,u=a.lockAxisX?s:c,h=a.lockAxisY?l:d,p=t.setup.alignmentAnimation,f=p.sizeX,g=p.sizeY,m=OM(t,f),b=OM(t,g);u===s&&h===l||kM(t,u,h,m,b)}},this.onPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;n||$M(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),pM(t),_M(t,e),dM(eE(t),e,r))},this.onPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;n||SM(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),EM(t,e.clientX,e.clientY),dM(eE(t),e,r))},this.onPanningStop=function(e){var n=t.props.onPanningStop;t.isPanning&&(NM(t),dM(eE(t),e,n))},this.onPinchStart=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinchingStart,a=r.onZoomStart;if(!n){var o=function(e,t){var n=e.setup.pinch,r=n.disabled,i=n.excluded,a=e.isInitialized,o=t.target;return!(!a||r||!o||nE(o,i))}(t,e);o&&(function(e,t){var n=oE(t);e.pinchStartDistance=n,e.lastDistance=n,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,pM(e)}(t,e),pM(t),dM(eE(t),e,i),dM(eE(t),e,a))}},this.onPinch=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinching,a=r.onZoom;if(!n){var o=function(e){var t=e.setup.pinch.disabled,n=e.isInitialized,r=e.pinchStartDistance;return!(!n||t||!r)}(t);o&&(e.preventDefault(),e.stopPropagation(),cE(t,e),dM(eE(t),e,i),dM(eE(t),e,a))}},this.onPinchStop=function(e){var n,r,i=t.props,a=i.onPinchingStop,o=i.onZoomStop;t.pinchStartScale&&(r=(n=t).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,IM(n,null==r?void 0:r.x,null==r?void 0:r.y),dM(eE(t),e,a),dM(eE(t),e,o))},this.onTouchPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;if(!n&&$M(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,pM(t);var i=e.touches,a=1===i.length,o=2===i.length;a&&(pM(t),_M(t,e),dM(eE(t),e,r)),o&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(n)return;if(!SM(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];EM(t,i.clientX,i.clientY),dM(eE(t),e,r)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.isInitialized,r=e.setup,i=e.wrapperComponent,a=r.doubleClick,o=a.disabled,s=a.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(n&&l&&c)||o||nE(l,s))}(t,e);n&&uE(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,n,r){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(r))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=n,t.transformState.positionY=r,t.applyTransformation();var a=eE(t);t.onChangeCallbacks.forEach((function(e){return e(a)})),dM(a,{scale:e,positionX:n,positionY:r},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=iE(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,n,r){return t.props.customTransform?t.props.customTransform(e,n,r):function(e,t,n){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(n,")")}(e,n,r)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,n=e.scale,r=e.positionX,i=e.positionY,a=t.handleTransformStyles(r,i,n);t.contentComponent.style.transform=a}},this.getContext=function(){return eE(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,n){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=n,vM(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(n),t.initializeWindowEvents(),t.isInitialized=!0;var r=eE(t);dM(r,void 0,t.props.onInit)},this.props=e,this.setup=WM(this.props),this.transformState=HM(this.props)},pE=i.createContext(null),fE=i.forwardRef((function(e,t){var n=a(new hE(e)).current,r=function(e,t){return"function"==typeof e?e(t):e}(e.children,JM(n));return b(t,(function(){return JM(n)}),[n]),u((function(){n.update(e)}),[n,e]),i.createElement(pE.Provider,{value:n},r)}));i.forwardRef((function(e,t){var n,r=a(null),o=g(pE);return u((function(){return o.onChange((function(e){if(r.current){r.current.style.transform=o.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[o]),i.createElement("div",BM({},e,{ref:(n=[r,t],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var gE="transform-component-module_wrapper__SPB86",mE="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var bE=function(e){var t=e.children,n=e.wrapperClass,r=void 0===n?"":n,o=e.contentClass,s=void 0===o?"":o,l=e.wrapperStyle,c=e.contentStyle,d=e.wrapperProps,h=void 0===d?{}:d,p=e.contentProps,f=void 0===p?{}:p,m=g(pE),b=m.init,v=m.cleanupWindowEvents,y=a(null),x=a(null);return u((function(){var e=y.current,t=x.current;return null!==e&&null!==t&&b&&(null==b||b(e,t)),function(){null==v||v()}}),[]),i.createElement("div",BM({},h,{ref:y,className:"react-transform-wrapper ".concat(gE," ").concat(r),style:l}),i.createElement("div",BM({},f,{ref:x,className:"react-transform-component ".concat(mE," ").concat(s),style:c}),t))};const vE=M.div`
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
`,yE=t=>e(vE,Object.assign({},t,{children:e(te,{})})),xE=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,wE=M.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,$E=M(yE)`
    width: 100%;
    height: 100%;
`,SE=({src:t,className:n,alt:r,fit:i,placeholder:a,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=o(!0),[h,p]=o();u((()=>{d(!0),p(void 0);const e=new Image;e.src=t,e.onload=()=>{s&&l({src:t,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),p(e)}}),[t]);return e(xE,Object.assign({className:n},{children:h?null!=a?a:e($E,{}):c?e(Tc,{}):e(wE,{src:t,alt:r,$fit:i})}))},kE=M($l)`
    padding: 0;
    border-radius: 100%;
    background: ${ml.Neutral[8]};
    color: ${ml.Primary};
    height: 2.5rem;
    width: 2.5rem;
`,OE=M(kE)`
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
`,CE=M(kE)`
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
`,DE=M(kE)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&E`
            left: 3rem;
            ${yl.MaxWidth.mobileL} {
                left: 1.25rem;
            }
        `}

    ${e=>"right"===e.$position&&E`
            right: 3rem;
            ${yl.MaxWidth.mobileL} {
                right: 1.25rem;
            }
        `}

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,jE=M.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,TE=M.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,_E=M.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,ME=M.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,EE=M.div`
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
`,NE=M(SE)`
    height: 100%;
    width: 100%;
`,AE=M(yE)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,IE=M.div`
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
`,BE=M(Il.XSmall)`
    display: inline-flex;
    padding: 0.25rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${ml.Neutral[8]};
    text-align: center;
`,PE=M.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${ml.Neutral[1]};
    padding: 1.5rem 1rem;

    ${yl.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
    }
`,LE=M.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,FE=M.div`
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

    ${e=>e.$active?E`
                  border: 4px solid ${ml.Primary};

                  ${yl.MaxWidth.mobileL} {
                      border: 2px solid ${ml.Primary};
                  }
              `:E`
                  :hover {
                      border: 1px solid ${ml.Neutral[5]};
                  }
              `};
`,RE=M(SE)`
    height: 100%;
    width: 100%;
`,zE=(r,i)=>{var{items:s,initialActiveItemIndex:l,hideThumbnail:c=!1,hideNavigation:d=!1,hideCounter:h=!1,hideMagnifier:p=!1,onClose:f}=r,g=lt(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[m,v]=o(null!=l?l:0),[y,x]=o({}),[w,$]=o(1),[S,k]=o(null),[O,C]=o(null),D=a(null),j=a([]),T=a([]),_=S&&O?S-O:0;b(i,(()=>({currentItemIndex:m,setCurrentItem:B,goToPrevItem:A,goToNextItem:I}))),Td("keydown",(function(e){"ArrowRight"===e.key?I():"ArrowLeft"===e.key?A():"Escape"===e.key&&f&&f()}),"document"),u((()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[m])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),$(1)}),[m]);const M=e=>{$(e.state.scale)};const E=({src:e,height:t,width:n})=>{x((r=>Object.assign(Object.assign({},r),{[e]:{height:t,width:n}})))},N=()=>{const e=y[s[m].src];if((null==D?void 0:D.current)&&e){const{clientHeight:t,clientWidth:n}=D.current,{width:r,height:i}=e,a=i/r<t/n;return r<n&&i<t?a?n/r:t/i:a?t/(i/(r/n)):n/(r/(i/t))}},A=()=>{var e,t;null===(t=null===(e=T.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>0===e?s.length-1:e-1))},I=()=>{var e,t;null===(t=null===(e=T.current)||void 0===e?void 0:e[m])||void 0===t||t.resetTransform(),v((e=>e===s.length-1?0:e+1))},B=e=>{var t,n;null===(n=null===(t=T.current)||void 0===t?void 0:t[m])||void 0===n||n.resetTransform(),v(e)};return t(Xf,Object.assign({},g,{"data-testid":"image-carousel-modal"},{children:[e(OE,Object.assign({"aria-label":"Close image carousel",onClick:f,focusHighlight:!1},{children:e(J,{"aria-hidden":!0})})),!p&&e(CE,Object.assign({"aria-label":1===w?"Zoom in":"Zoom out",onClick:()=>{var e,t,n,r;if(1===w){const n=N();null===(t=null===(e=T.current)||void 0===e?void 0:e[m])||void 0===t||t.centerView(n),$(n)}else $(1),null===(r=null===(n=T.current)||void 0===n?void 0:n[m])||void 0===r||r.resetTransform()},focusHighlight:!1},{children:e(1===w?ne:re,{"aria-hidden":!0})})),t(jE,{children:[t(TE,{children:[!d&&t(n,{children:[e(DE,Object.assign({"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:A},{children:e(ie,{"aria-hidden":!0})})),e(DE,Object.assign({"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:I},{children:e(ae,{"aria-hidden":!0})}))]}),e(_E,Object.assign({ref:D,onTouchStart:e=>{w<=1&&k(e.touches[0].clientX)},onTouchMove:e=>{!S||w>1||C(e.touches[0].clientX)},onTouchEnd:()=>{Math.abs(_)>D.current.offsetWidth/3&&(_>0?I():A()),k(null),C(null)}},{children:e(ME,Object.assign({style:{transform:`translateX(calc(${100*-m}% - ${_}px))`}},{children:s.map(((t,n)=>{var r;return e(EE,Object.assign({"data-testid":"slide-item"},{children:e(fE,Object.assign({ref:e=>T.current[n]=e,panning:{disabled:w<=1},initialScale:1,onZoom:M,onZoomStop:M,onWheel:M},{children:e(bE,{children:e(NE,{src:t.src,alt:null!==(r=t.alt)&&void 0!==r?r:`Image ${n+1}`,placeholder:e(AE,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:E})})}))}),n)}))}))})),!h&&e(IE,{children:e(BE,Object.assign({weight:"semibold"},{children:`${m+1}/${s.length}`}))})]}),!c&&e(PE,{children:e(LE,{children:s.map(((t,n)=>{var r;const i=null!==(r=t.thumbnailSrc)&&void 0!==r?r:t.src;return e(FE,Object.assign({"data-testid":"thumbnail-item",$active:n===m,onClick:()=>B(n),ref:e=>j.current[n]=e},{children:e(RE,{src:i,alt:`Thumbnail ${n+1}`,fit:"cover"})}),n)}))})})]})]}))},HE=p(zE),WE=M.button`
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

    ${e=>e.$error?E`
                background: ${ml.Neutral[8]};
                border: 1px solid ${ml.Validation.Red.Border};

                :hover {
                    box-shadow: 0 0 4px 1px ${ml.Shadow.Red};
                }
            `:e.$selected?E`
                background: ${ml.Accent.Light[5]};
                border: 1px solid ${ml.Primary};

                :hover {
                    box-shadow: 0 0 4px 1px ${ml.Shadow.Accent};
                }
            `:E`
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
`,VE=i.forwardRef(((n,r)=>{var{children:i,imgSrc:a,selected:o,error:s,type:l="button"}=n,c=lt(n,["children","imgSrc","selected","error","type"]);return t(WE,Object.assign({ref:r,$selected:o,$error:s,type:l},c,{children:[e(Rg,{src:a}),i]}))})),YE=E`
    height: 1.125rem;
    width: 1.125rem;
    color: ${ml.Primary};
`,UE=M.div`
    border-top: 1px solid ${ml.Neutral[5]};
    border-bottom: 1px solid ${ml.Neutral[5]};
`,KE=M(Il.H3)`
    color: ${ml.Primary};
    margin-bottom: 0.5rem;
`,XE=M(Il.Body)`
    color: ${ml.Primary};
`,qE=M(fe)`
    ${YE}
`,GE=M.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: 1px solid ${ml.Neutral[5]};
    }

    :hover {
        ${KE},
        ${XE},
        ${qE} {
            color: ${ml.PrimaryDark};
        }
    }
`,ZE=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,QE=M(Il.BodySmall)`
    margin-top: 0.25rem;
`,JE=M(za.div)`
    overflow: hidden;
`,eN=M.div`
    border-top: 1px solid ${ml.Neutral[5]};
`,tN=M(Il.H5)`
    color: ${ml.Primary};
    margin-right: 0.5rem;
`,nN=M(Je)`
    ${YE}
`,rN=M(Qe)`
    ${YE}
`,iN=M.button`
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
        ${tN},
        ${nN},
        ${rN} {
            color: ${ml.PrimaryDark};
        }
    }
`,aN=r=>{var{items:i,maxShown:a,style:s="default",onItemClick:l}=r,c=lt(r,["items","maxShown","style","onItemClick"]);const[d,u]=o(!a||a>=i.length),h=a?i.slice(0,a):i,p=a?i.slice(a):[],f=ln(),g=f.ref,m=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):l&&(e.preventDefault(),l(t,e))},b=()=>{u(!d)},v=(r,i,a,o)=>t(n,{children:[t(ZE,{children:[e("small"===s?XE:KE,Object.assign({"data-testid":`link-title-${r}`,weight:"semibold"},{children:i})),a&&e(QE,Object.assign({"data-testid":`link-description-${r}`},{children:a})),o]}),e(qE,{})]}),y=Sa({height:d?f.height:0});return t(UE,Object.assign({},c,{children:[h.map(((t,n)=>{const{title:r,description:i,secondaryDescription:a,onClick:o}=t,s=lt(t,["title","description","secondaryDescription","onClick"]);return e(GE,Object.assign({"data-testid":`list-item-shown-${n}`,onClick:e=>m(e,t)},s,{children:v(n,r,i,a)}),`list-item-shown-${n}`)})),p.length>0&&e(JE,Object.assign({style:y,"data-testid":"minimised-content"},{children:e(eN,Object.assign({ref:g},{children:p.map(((t,n)=>{const{title:r,description:i,onClick:a,secondaryDescription:o}=t,s=lt(t,["title","description","onClick","secondaryDescription"]);return e(GE,Object.assign({"data-testid":`list-item-minimised-${n}`,onClick:e=>m(e,t)},s,{children:v(n,r,i,o)}),`list-item-minimised-${n}`)}))}))})),p.length>0&&t(iN,Object.assign({type:"button",onClick:b,"data-testid":"toggle-button",$showMinimised:d},{children:[e(tN,Object.assign({weight:"semibold","data-testid":"toggle-button-label"},{children:d?"View less":"View more"})),e(d?rN:nN,{})]}))]}))},oN=M.div`
    ${e=>gc({textSize:e.$textSize})}
    ${e=>e.color&&E`
            color: ${e.color};
        `}
`,sN=p(((t,n)=>{const{baseTextColor:r,baseTextSize:i,inline:a}=t,o=lt(t,["baseTextColor","baseTextSize","inline"]);return e(oN,Object.assign({ref:n,as:a?"span":"div",$textSize:i,$textColor:r},o))})),lN=M.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,n=t.lg||t.md,r=t.sm?t.sm<=2?t.sm:2:void 0,i=t.md||t.sm||2;return E`
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
`,cN=M.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:n,startMd:r,colsMd:i,startSm:a,colsSm:o}=e;return E`
            grid-column: ${t||r||"auto"} / span
                ${n||i||1};

            ${yl.MaxWidth.tablet} {
                grid-column: ${r||a||"auto"} / span
                    ${i||o||1};
            }

            ${yl.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span ${o||1};
            }
        `}}
`,dN={Grid:i.forwardRef(((t,n)=>{const{children:r}=t,i=lt(t,["children"]);return e(lN,Object.assign({ref:n},i,{children:r}))})),Tile:i.forwardRef(((t,n)=>{const{children:r}=t,i=lt(t,["children"]);return e(cN,Object.assign({ref:n},i,{children:r}))}))},uN=M.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${yl.MaxWidth.mobileL} {
        padding: 0;
    }
`,hN=()=>{u((()=>{t()||n()}),[]);const t=()=>document.getElementById(pN),n=()=>{if(!document.getElementById(pN)){const e=document.createElement("script");e.id=pN,e.type="module",e.src=fN,document.head.appendChild(e)}};return e(uN,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},pN="lifesg-ds-masthead-script",fN="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",gN={notCompress:6,compress:4},mN=M.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,bN=M.nav`
    height: ${e=>e.$compress?gN.compress:gN.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Fl.Base};

    ${yl.MaxWidth.tablet} {
        height: ${3.5}rem;
    }
`,vN=M.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${yl.MaxWidth.tablet} {
        margin-left: 0rem;
    }
`,yN=M($l)`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,xN=M(et)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${ml.Neutral[1]};
`,wN=M.div`
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
`,$N=M.div`
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
`,SN=M.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Fl.Base};
        object-fit: contain;
    }
`,kN=({resources:t,onClick:n,"data-id":r,"data-testid":i="navbar-brand",type:a})=>e(SN,Object.assign({role:"link",onClick:e=>{n&&n(e,a)},tabIndex:0,"data-id":r,"data-testid":i,$type:a},{children:e(Rg,{src:t.logoSrc,alt:t.brandName})})),ON=M.div`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
    }
`,CN=M.div`
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

	${yl.MaxWidth.tablet} {
        width: 75%;
    }

    ${yl.MaxWidth.mobileL} {
        width: 100%;
    }
`,DN=M.div`
    display: flex;
    flex-direction: column;
`,jN=M.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,TN=M(Ae)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,_N=M($l)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${ml.Neutral[1]};

    :active,
    :focus {
        color: ${ml.Primary};
    }
`,MN=i.forwardRef(((r,i)=>{const{show:a,resources:s,children:l,hideNavBranding:c,onClose:d,onBrandClick:h}=r,[p,f]=o(0),{primary:g,secondary:m}=s;u((()=>(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=()=>{if(window){const e=.01*window.innerHeight;f(e)}};return e(ON,Object.assign({ref:i,"data-testid":"drawer"},{children:e(CN,Object.assign({$show:a,$viewHeight:p},{children:t(DN,{children:[t(jN,{children:[e(wN,Object.assign({"data-id":"drawer-brand-container"},{children:!c&&t(n,{children:[e(kN,{resources:g,compress:!0,onClick:h,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),m&&t(n,{children:[e($N,{}),e(kN,{resources:m,compress:!0,onClick:h,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),e(_N,Object.assign({onClick:d,focusHighlight:!1,"aria-label":"Close nav menu"},{children:e(TN,{})}))]}),l]})}))}))})),EN={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},NN={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},AN={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},IN={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},BN=M.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${yl.MaxWidth.tablet} {
        display: none;
    }
`,PN=M.ul`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,LN=M.ul`
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
`,FN=M.li`
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
        ${e=>{if(e.$mobile)return E`
                    padding: 0 1rem;
                `}}
    }
`,RN=M(cc.Small)`
    ${yl.MaxWidth.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,zN=M.div`
    display: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,HN=M(Il.BodySmall)`
    margin-bottom: 0.5rem;
`,WN=M.div`
    display: flex;
`,VN=M.a`
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
`,YN=({actionButtons:r,mobile:i=!1,onActionButtonClick:a})=>{const o=e=>{e.stopPropagation()},s=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),a(t,e)},l=(n,r)=>{const i=n?(e=>{const t=Ek(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(r):r;return i.map(((r,i)=>{let a;switch(r.type){case"download":a=n?(l=r.args,t(zN,{children:[e(HN,Object.assign({weight:"semibold"},{children:l&&l.children||"Download the app"})),t(WN,{children:[e(VN,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:o},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(VN,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:o},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):e(RN,Object.assign({},r.args,{type:"button",onClick:s(r),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const t=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${n?"mobile-":""}${i+1}`;a=e(RN,Object.assign({},r.args,{type:"button",onClick:s(r),"data-testid":t}));break}case"component":{const e=r.args;a=e&&e.render||null;break}default:a=null}var l;if(a)return e(FN,Object.assign({$mobile:n},{children:a}),`action-button-${i+1}`)}))};if(r){const a=(null==r?void 0:r.mobile)||r.desktop,o=a.filter((e=>!!e.uncollapsible)),s=a.filter((e=>!e.uncollapsible));return i?e(n,{children:s.length>0&&e(LN,{children:l(i,s)})}):t(n,{children:[o.length>0&&e(PN,{children:l(!1,o)}),r.desktop.length>0&&e(BN,{children:l(i,r.desktop)})]})}return e(n,{})},UN=M.ul`
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
    box-shadow: ${oc.ElevationBoxShadow};
`,KN=M.ul`
    display: none;
    list-style: none;

    ${yl.MaxWidth.tablet} {
        border-left: 0.25rem solid ${ml.Primary};
        display: flex;
        flex-direction: column;
    }
`,XN=M(Il.Hyperlink.Small)`
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
`,qN=M.li`
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
`,GN=({items:t,mobile:r=!1,onItemClick:i})=>{const a=e=>t=>{t.stopPropagation(),i(t,e)},o=(n=!1)=>t.map(((t,r)=>{const{children:i,options:o}=t,s=lt(t,["children","options"]),l=n?`link__mobile-${r+1}`:`link__${r+1}`;return e(qN,{children:e(XN,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:a(t)},o,{children:i}))},r)}));if(t&&t.length>0){return e(r?KN:UN,{children:o(r)})}return e(n,{})},ZN=M.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${yl.MaxWidth.tablet} {
        display: none;
    }
`,QN=M.ul`
    display: none;
    list-style: none;

    ${yl.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,JN=M.li`
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
`,eA=M(Il.Hyperlink.Small)`
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
`,tA=M.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,nA=M.div`
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
`,rA=M.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,iA=M($l)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,aA=M(_)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${ml.Neutral[3]};
    :hover {
        color: ${ml.Neutral[1]};
    }
`,oA=({items:r,selectedId:i,mobile:s=!1,hideNavBranding:l,onItemClick:c})=>{const[d,h]=o(-1),[p,f]=o(!1),g=a(null);u((()=>{const e=e=>{g.current&&!g.current.contains(e.target)&&m()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const m=()=>{f(!1)},b=(e,t)=>n=>{n.stopPropagation(),h(t),f(!0),c(n,e)},v=(e,t)=>{e.stopPropagation(),c(e,t),f(!1)},y=()=>r.map(((n,r)=>{if("component"===n.itemType){const t=n&&n.children||null;return e("li",{children:t},r)}{const a=(e=>{if(e.id===i)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===i));return!1})(n),{children:o,options:c}=n,u=lt(n,["children","options"]),h=a?s?"bold":"semibold":"regular",f=s?`link__mobile-${r+1}`:`link__${r+1}`,g=d>=0&&d===r&&p;return t(JN,Object.assign({$hiddenBranding:l},{children:[t(eA,Object.assign({"data-testid":f,weight:h,$selected:a},u,{onClick:b(n,r)},c,{children:[e(tA,{children:o}),a&&e(nA,{"data-testid":`${f}-indicator`}),s&&n.subMenu&&e(rA,{children:e(iA,Object.assign({"data-testid":`${f}-expand-collapse-button`,$selected:g,focusHighlight:!1,focusOutline:"browser","aria-label":g?"Collapse":"Expand"},{children:e(aA,{})}))})]})),g&&e(GN,{items:n.subMenu,mobile:s,onItemClick:v})]}),r)}}));return r&&r.length>0?s?e(QN,Object.assign({ref:g},{children:y()})):e(ZN,Object.assign({ref:g,$alignLeft:l},{children:y()})):e(n,{})},sA=p(((r,i)=>{var{items:s,className:l,id:c,selectedId:d,compress:h=!1,fixed:p=!0,resources:f,hideNavElements:g=!1,hideNavBranding:m=!1,drawerDismissalExclusions:v=[],actionButtons:y,onItemClick:x,onActionButtonClick:w,onBrandClick:$,masthead:S=!0,layout:k="default"}=r,O=lt(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[C,D]=o(!1),[j,T]=o(!1),_="stretch"===k,M=a(),E=A(),N=(e=>{switch(e){case"bookingsg":return NN;case"mylegacy":return IN;case"ccube":return AN;default:return EN}})(null==E?void 0:E.resourceScheme),I=(null==f?void 0:f.primary)||N.primary,B=null==f?void 0:f.secondary;b(i,(()=>Object.assign(M.current,{dismissDrawer:()=>{P()}})),[C]),u((()=>(F(),window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F)})),[]);const P=()=>{D(!1),setTimeout((()=>{T(!1)}),550)},L=e=>C&&-1===v.indexOf(e),F=()=>{window.innerWidth<=bl.tablet&&C&&P()},R=(e,t)=>{$&&(e.preventDefault(),$(t)),L("brand-click")&&P()},z=(e,t)=>{t.onClick?t.onClick(e):x&&(e.preventDefault(),x(t)),!(null==t?void 0:t.subMenu)&&L("item-click")&&P()},H=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):w&&(e.preventDefault(),w(t)),L("item-click")&&P()},W=()=>{D(!0),T(!0)},V=()=>{L("close-button-click")&&P()},Y=()=>{const t=s.mobile||s.desktop;return t&&t.length>0||y&&(()=>{const e=y.mobile||y.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?e(yN,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:W,focusHighlight:!1},{children:e(xN,{})})):null};return t(mN,Object.assign({ref:M,$fixed:p,className:l,id:c||"navbar-wrapper","data-testid":O["data-testid"]||"navbar-wrapper"},{children:[S&&e(hN,{}),t(Ix.Content,Object.assign({stretch:_},{children:[t(bN,Object.assign({$compress:h},{children:[!m&&t(wN,Object.assign({$compress:h,"data-id":"brand-container"},{children:[e(kN,{resources:I,onClick:R,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),B&&t(n,{children:[e($N,{$compress:h}),e(kN,{resources:B,onClick:R,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!g&&t(vN,Object.assign({$hideNavBranding:m},{children:[e(oA,{items:s.desktop,onItemClick:z,selectedId:d,hideNavBranding:m}),e(YN,{actionButtons:y,onActionButtonClick:H}),Y()]}))]})),!g&&e(_f,Object.assign({show:j,enableOverlayClick:!0,onOverlayClick:V},{children:t(MN,Object.assign({show:C,resources:{primary:I,secondary:B},onClose:V,onBrandClick:R,actionButtons:y,hideNavBranding:m},{children:[e(oA,{items:s.mobile||s.desktop,onItemClick:z,selectedId:d,mobile:!0}),e(YN,{actionButtons:y,onActionButtonClick:H,mobile:!0})]}))}))]}))]}))})),lA=gN,cA=3.5,dA=E`
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
`,uA=M.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${Fl.Base};
    background: ${ml.Neutral[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,hA=M(Ix.Content)`
    display: flex;
`,pA=M.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,fA=M.div`
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
        ${dA}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return E`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,gA=M(Il.Hyperlink.Default)`
    position: relative;

    ${dA}
`,mA=M($l)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,bA=M(Ae)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${ml.Neutral[8]};
`,vA=M.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${ml.Validation.Orange.Icon};
    ${Al.getTextStyle("BodySmall","semibold")};

    cursor: pointer;
`,yA=M.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,xA=n=>{var{children:r,visible:i=!0,dismissible:a=!0,sticky:s=!0,onDismiss:l,id:c,forwardedRef:d,maxCollapsedHeight:h,onClick:p,actionButton:f}=n,g=lt(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const m=g["data-testid"],[b,v]=o(i),{height:y,ref:x}=ln();u((()=>{v(i)}),[i]);const w=e=>{e.stopPropagation(),v(!1),a&&l&&l()},$=e=>{f.onClick&&(e.stopPropagation(),f.onClick(e))};if(!b)return null;return t(uA,Object.assign({ref:d,$sticky:s,$clickable:!!p,onClick:p},g,{children:[t(hA,Object.assign({id:wA("container",c)},{children:[t(pA,{children:[e(fA,Object.assign({"data-testid":wA("text-content",m),$maxCollapsedHeight:h&&y>h?h:void 0},{children:e("div",Object.assign({ref:x},{children:r}))})),f&&e(vA,Object.assign({id:wA("action-button",c),"data-testid":wA("action-button",m),type:"button"},f,{onClick:$},{children:f.children}))]}),a&&e(mA,Object.assign({onClick:w,id:wA("dismiss-button",c),"data-testid":wA("dismiss-button",m),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e(bA,{"aria-hidden":!0})}))]})),p&&e(yA,{"aria-label":"Clickable banner",type:"button"})]}))},wA=(e,t="wrapper")=>`${t}-${e}`,$A=i.forwardRef(((t,n)=>e(xA,Object.assign({},t,{forwardedRef:n})))),SA=Object.assign($A,{Link:gA});var kA={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */kA.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,i,a){return r=n()?Reflect.construct:function(e,n,r){var i=[null];i.push.apply(i,n);var a=new(Function.bind.apply(e,i));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function i(e){return a(e)||o(e)||s(e)||c()}function a(e){if(Array.isArray(e))return l(e)}function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=Object.hasOwnProperty,u=Object.setPrototypeOf,h=Object.isFrozen,p=Object.getPrototypeOf,f=Object.getOwnPropertyDescriptor,g=Object.freeze,m=Object.seal,b=Object.create,v="undefined"!=typeof Reflect&&Reflect,y=v.apply,x=v.construct;y||(y=function(e,t,n){return e.apply(t,n)}),g||(g=function(e){return e}),m||(m=function(e){return e}),x||(x=function(e,t){return r(e,i(t))});var w=E(Array.prototype.forEach),$=E(Array.prototype.pop),S=E(Array.prototype.push),k=E(String.prototype.toLowerCase),O=E(String.prototype.toString),C=E(String.prototype.match),D=E(String.prototype.replace),j=E(String.prototype.indexOf),T=E(String.prototype.trim),_=E(RegExp.prototype.test),M=N(TypeError);function E(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return y(e,t,r)}}function N(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(e,n)}}function A(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:k,u&&u(e,null);for(var i=t.length;i--;){var a=t[i];if("string"==typeof a){var o=n(a);o!==a&&(h(t)||(t[i]=o),a=o)}e[a]=!0}return e}function I(e){var t,n=b(null);for(t in e)!0===y(d,e,[t])&&(n[t]=e[t]);return n}function B(e,t){for(;null!==e;){var n=f(e,t);if(n){if(n.get)return E(n.get);if("function"==typeof n.value)return E(n.value)}e=p(e)}function r(e){return console.warn("fallback value for",e),null}return r}var P=g(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=g(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),F=g(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),R=g(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),z=g(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=g(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),W=g(["#text"]),V=g(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Y=g(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=g(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=g(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),X=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),q=m(/<%[\w\W]*|[\w\W]*%>/gm),G=m(/\${[\w\W]*}/gm),Z=m(/^data-[\-\w.\u00B7-\uFFFF]/),Q=m(/^aria-[\-\w]+$/),J=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=m(/^(?:\w+script|data):/i),te=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=m(/^html$/i),re=m(/^[a-z][.\w]*(-[.\w]+)+$/i),ie=function(){return"undefined"==typeof window?null:window},ae=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,i="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(i)&&(r=n.currentScript.getAttribute(i));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function oe(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),n=function(e){return oe(e)};if(n.version="2.5.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,o=t.DocumentFragment,s=t.HTMLTemplateElement,l=t.Node,c=t.Element,d=t.NodeFilter,u=t.NamedNodeMap,h=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,p=t.HTMLFormElement,f=t.DOMParser,m=t.trustedTypes,b=c.prototype,v=B(b,"cloneNode"),y=B(b,"nextSibling"),x=B(b,"childNodes"),E=B(b,"parentNode");if("function"==typeof s){var N=a.createElement("template");N.content&&N.content.ownerDocument&&(a=N.content.ownerDocument)}var se=ae(m,r),le=se?se.createHTML(""):"",ce=a,de=ce.implementation,ue=ce.createNodeIterator,he=ce.createDocumentFragment,pe=ce.getElementsByTagName,fe=r.importNode,ge={};try{ge=I(a).documentMode?a.documentMode:{}}catch(e){}var me={};n.isSupported="function"==typeof E&&de&&void 0!==de.createHTMLDocument&&9!==ge;var be,ve,ye=X,xe=q,we=G,$e=Z,Se=Q,ke=ee,Oe=te,Ce=re,De=J,je=null,Te=A({},[].concat(i(P),i(L),i(F),i(z),i(W))),_e=null,Me=A({},[].concat(i(V),i(Y),i(U),i(K))),Ee=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ne=null,Ae=null,Ie=!0,Be=!0,Pe=!1,Le=!0,Fe=!1,Re=!0,ze=!1,He=!1,We=!1,Ve=!1,Ye=!1,Ue=!1,Ke=!0,Xe=!1,qe="user-content-",Ge=!0,Ze=!1,Qe={},Je=null,et=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=A({},["audio","video","img","source","image","track"]),rt=null,it=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),at="http://www.w3.org/1998/Math/MathML",ot="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml",lt=st,ct=!1,dt=null,ut=A({},[at,ot,st],O),ht=["application/xhtml+xml","text/html"],pt="text/html",ft=null,gt=a.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},bt=function(t){ft&&ft===t||(t&&"object"===e(t)||(t={}),t=I(t),be=be=-1===ht.indexOf(t.PARSER_MEDIA_TYPE)?pt:t.PARSER_MEDIA_TYPE,ve="application/xhtml+xml"===be?O:k,je="ALLOWED_TAGS"in t?A({},t.ALLOWED_TAGS,ve):Te,_e="ALLOWED_ATTR"in t?A({},t.ALLOWED_ATTR,ve):Me,dt="ALLOWED_NAMESPACES"in t?A({},t.ALLOWED_NAMESPACES,O):ut,rt="ADD_URI_SAFE_ATTR"in t?A(I(it),t.ADD_URI_SAFE_ATTR,ve):it,tt="ADD_DATA_URI_TAGS"in t?A(I(nt),t.ADD_DATA_URI_TAGS,ve):nt,Je="FORBID_CONTENTS"in t?A({},t.FORBID_CONTENTS,ve):et,Ne="FORBID_TAGS"in t?A({},t.FORBID_TAGS,ve):{},Ae="FORBID_ATTR"in t?A({},t.FORBID_ATTR,ve):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Ie=!1!==t.ALLOW_ARIA_ATTR,Be=!1!==t.ALLOW_DATA_ATTR,Pe=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Fe=t.SAFE_FOR_TEMPLATES||!1,Re=!1!==t.SAFE_FOR_XML,ze=t.WHOLE_DOCUMENT||!1,Ve=t.RETURN_DOM||!1,Ye=t.RETURN_DOM_FRAGMENT||!1,Ue=t.RETURN_TRUSTED_TYPE||!1,We=t.FORCE_BODY||!1,Ke=!1!==t.SANITIZE_DOM,Xe=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,De=t.ALLOWED_URI_REGEXP||De,lt=t.NAMESPACE||st,Ee=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ee.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ee.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ee.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(Be=!1),Ye&&(Ve=!0),Qe&&(je=A({},i(W)),_e=[],!0===Qe.html&&(A(je,P),A(_e,V)),!0===Qe.svg&&(A(je,L),A(_e,Y),A(_e,K)),!0===Qe.svgFilters&&(A(je,F),A(_e,Y),A(_e,K)),!0===Qe.mathMl&&(A(je,z),A(_e,U),A(_e,K))),t.ADD_TAGS&&(je===Te&&(je=I(je)),A(je,t.ADD_TAGS,ve)),t.ADD_ATTR&&(_e===Me&&(_e=I(_e)),A(_e,t.ADD_ATTR,ve)),t.ADD_URI_SAFE_ATTR&&A(rt,t.ADD_URI_SAFE_ATTR,ve),t.FORBID_CONTENTS&&(Je===et&&(Je=I(Je)),A(Je,t.FORBID_CONTENTS,ve)),Ge&&(je["#text"]=!0),ze&&A(je,["html","head","body"]),je.table&&(A(je,["tbody"]),delete Ne.tbody),g&&g(t),ft=t)},vt=A({},["mi","mo","mn","ms","mtext"]),yt=A({},["foreignobject","annotation-xml"]),xt=A({},["title","style","font","a","script"]),wt=A({},L);A(wt,F),A(wt,R);var $t=A({},z);A($t,H);var St=function(e){var t=E(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var n=k(e.tagName),r=k(t.tagName);return!!dt[e.namespaceURI]&&(e.namespaceURI===ot?t.namespaceURI===st?"svg"===n:t.namespaceURI===at?"svg"===n&&("annotation-xml"===r||vt[r]):Boolean(wt[n]):e.namespaceURI===at?t.namespaceURI===st?"math"===n:t.namespaceURI===ot?"math"===n&&yt[r]:Boolean($t[n]):e.namespaceURI===st?!(t.namespaceURI===ot&&!yt[r])&&!(t.namespaceURI===at&&!vt[r])&&!$t[n]&&(xt[n]||!wt[n]):!("application/xhtml+xml"!==be||!dt[e.namespaceURI]))},kt=function(e){S(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=le}catch(t){e.remove()}}},Ot=function(e,t){try{S(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){S(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(Ve||Ye)try{kt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ct=function(e){var t,n;if(We)e="<remove></remove>"+e;else{var r=C(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===be&&lt===st&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=se?se.createHTML(e):e;if(lt===st)try{t=(new f).parseFromString(i,be)}catch(e){}if(!t||!t.documentElement){t=de.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?le:i}catch(e){}}var o=t.body||t.documentElement;return e&&n&&o.insertBefore(a.createTextNode(n),o.childNodes[0]||null),lt===st?pe.call(t,ze?"html":"body")[0]:ze?t.documentElement:o},Dt=function(e){return ue.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},jt=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof h)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Tt=function(t){return"object"===e(l)?t instanceof l:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},_t=function(e,t,r){me[e]&&w(me[e],(function(e){e.call(n,t,r,ft)}))},Mt=function(e){var t;if(_t("beforeSanitizeElements",e,null),jt(e))return kt(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return kt(e),!0;var r=ve(e.nodeName);if(_t("uponSanitizeElement",e,{tagName:r,allowedTags:je}),e.hasChildNodes()&&!Tt(e.firstElementChild)&&(!Tt(e.content)||!Tt(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return kt(e),!0;if("select"===r&&_(/<template/i,e.innerHTML))return kt(e),!0;if(7===e.nodeType)return kt(e),!0;if(Re&&8===e.nodeType&&_(/<[/\w]/g,e.data))return kt(e),!0;if(!je[r]||Ne[r]){if(!Ne[r]&&Nt(r)){if(Ee.tagNameCheck instanceof RegExp&&_(Ee.tagNameCheck,r))return!1;if(Ee.tagNameCheck instanceof Function&&Ee.tagNameCheck(r))return!1}if(Ge&&!Je[r]){var i=E(e)||e.parentNode,a=x(e)||e.childNodes;if(a&&i)for(var o=a.length-1;o>=0;--o){var s=v(a[o],!0);s.__removalCount=(e.__removalCount||0)+1,i.insertBefore(s,y(e))}}return kt(e),!0}return e instanceof c&&!St(e)?(kt(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!_(/<\/no(script|embed|frames)/i,e.innerHTML)?(Fe&&3===e.nodeType&&(t=e.textContent,t=D(t,ye," "),t=D(t,xe," "),t=D(t,we," "),e.textContent!==t&&(S(n.removed,{element:e.cloneNode()}),e.textContent=t)),_t("afterSanitizeElements",e,null),!1):(kt(e),!0)},Et=function(e,t,n){if(Ke&&("id"===t||"name"===t)&&(n in a||n in gt))return!1;if(Be&&!Ae[t]&&_($e,t));else if(Ie&&_(Se,t));else if(!_e[t]||Ae[t]){if(!(Nt(e)&&(Ee.tagNameCheck instanceof RegExp&&_(Ee.tagNameCheck,e)||Ee.tagNameCheck instanceof Function&&Ee.tagNameCheck(e))&&(Ee.attributeNameCheck instanceof RegExp&&_(Ee.attributeNameCheck,t)||Ee.attributeNameCheck instanceof Function&&Ee.attributeNameCheck(t))||"is"===t&&Ee.allowCustomizedBuiltInElements&&(Ee.tagNameCheck instanceof RegExp&&_(Ee.tagNameCheck,n)||Ee.tagNameCheck instanceof Function&&Ee.tagNameCheck(n))))return!1}else if(rt[t]);else if(_(De,D(n,Oe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==j(n,"data:")||!tt[e])if(Pe&&!_(ke,D(n,Oe,"")));else if(n)return!1;return!0},Nt=function(e){return"annotation-xml"!==e&&C(e,Ce)},At=function(t){var r,i,a,o;_t("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(o=s.length;o--;){var c=r=s[o],d=c.name,u=c.namespaceURI;if(i="value"===d?r.value:T(r.value),a=ve(d),l.attrName=a,l.attrValue=i,l.keepAttr=!0,l.forceKeepAttr=void 0,_t("uponSanitizeAttribute",t,l),i=l.attrValue,!l.forceKeepAttr&&(Ot(d,t),l.keepAttr))if(Le||!_(/\/>/i,i))if(Re&&_(/((--!?|])>)|<\/(style|title)/i,i))Ot(d,t);else{Fe&&(i=D(i,ye," "),i=D(i,xe," "),i=D(i,we," "));var h=ve(t.nodeName);if(Et(h,a,i)){if(!Xe||"id"!==a&&"name"!==a||(Ot(d,t),i=qe+i),se&&"object"===e(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(h,a)){case"TrustedHTML":i=se.createHTML(i);break;case"TrustedScriptURL":i=se.createScriptURL(i)}try{u?t.setAttributeNS(u,d,i):t.setAttribute(d,i),jt(t)?kt(t):$(n.removed)}catch(e){}}}else Ot(d,t)}_t("afterSanitizeAttributes",t,null)}},It=function e(t){var n,r=Dt(t);for(_t("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)_t("uponSanitizeShadowNode",n,null),Mt(n)||(n.content instanceof o&&e(n.content),At(n));_t("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(i){var a,s,c,d,u,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!Tt(i)){if("function"!=typeof i.toString)throw M("toString is not a function");if("string"!=typeof(i=i.toString()))throw M("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof i)return t.toStaticHTML(i);if(Tt(i))return t.toStaticHTML(i.outerHTML)}return i}if(He||bt(h),n.removed=[],"string"==typeof i&&(Ze=!1),Ze){if(i.nodeName){var p=ve(i.nodeName);if(!je[p]||Ne[p])throw M("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof l)1===(s=(a=Ct("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?a=s:a.appendChild(s);else{if(!Ve&&!Fe&&!ze&&-1===i.indexOf("<"))return se&&Ue?se.createHTML(i):i;if(!(a=Ct(i)))return Ve?null:Ue?le:""}a&&We&&kt(a.firstChild);for(var f=Dt(Ze?i:a);c=f.nextNode();)3===c.nodeType&&c===d||Mt(c)||(c.content instanceof o&&It(c.content),At(c),d=c);if(d=null,Ze)return i;if(Ve){if(Ye)for(u=he.call(a.ownerDocument);a.firstChild;)u.appendChild(a.firstChild);else u=a;return(_e.shadowroot||_e.shadowrootmod)&&(u=fe.call(r,u,!0)),u}var g=ze?a.outerHTML:a.innerHTML;return ze&&je["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&_(ne,a.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+g),Fe&&(g=D(g,ye," "),g=D(g,xe," "),g=D(g,we," ")),se&&Ue?se.createHTML(g):g},n.setConfig=function(e){bt(e),He=!0},n.clearConfig=function(){ft=null,He=!1},n.isValidAttribute=function(e,t,n){ft||bt({});var r=ve(e),i=ve(t);return Et(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],S(me[e],t))},n.removeHook=function(e){if(me[e])return $(me[e])},n.removeHooks=function(e){me[e]&&(me[e]=[])},n.removeAllHooks=function(){me={}},n}var se=oe();return se}();var OA=Wa(kA.exports);const CA=t=>i.forwardRef(((n,r)=>e(xA,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=OA.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e(SA.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),DA=M.div`
    display: flex;
    flex-direction: column;
`,jA=M.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,TA=M(fw)`
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
`,_A=M(cc.Small)`
    margin: 2rem 0rem;
`,MA=n=>{var{id:r,value:i=[],"data-testid":s,className:l,cooldownDuration:c,actionButtonProps:d,errorMessage:h,numOfInput:p,onChange:f,onCooldownStart:g,onCooldownEnd:m}=n,b=lt(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const v=null!=d?d:{},{disabled:y,onClick:x,styleType:w="secondary"}=v,$=lt(v,["disabled","onClick","styleType"]),S=a([]),k=a(f),[O,C]=o(new Array(p).fill("")),[D,j]=o(c),[T,_]=o(new Date);u((()=>{var e;return null===(e=null==S?void 0:S.current[0])||void 0===e||e.focus(),document.addEventListener("paste",N),()=>document.removeEventListener("paste",N)}),[]),u((()=>{if(0!==c){g&&g();const e=B();return()=>e()}}),[T]),u((()=>{k.current=f}),[f]),u((()=>{i.length===p&&C(i)}),[i]);const M=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(A(r)){const t=[...O];t[e]=r.substring(r.length-1),null===(n=S.current[e+1])||void 0===n||n.focus(),C(t),f&&f(t)}},E=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...O];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=S.current[e-1])||void 0===n||n.focus()),C(t),f&&f(t)}},N=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&A(t,p)?(C(n),k.current&&k.current(n)):e.preventDefault()},A=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),I=()=>{const e=Date.now(),t=1e3*c;return e<T.valueOf()+t},B=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*c,r=Math.ceil((T.valueOf()+n-t)/1e3);j(r),r<=0&&(m&&m(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},P=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return t(DA,Object.assign({id:r,"data-testid":s,className:l},{children:[e(jA,{children:O.map(((t,n)=>e(TA,Object.assign({id:P(n,"otp-input",r),"data-testid":P(n,"otp-input",s),"aria-label":`Enter OTP character ${n+1}`,ref:e=>S.current[n]=e,type:"text",inputMode:"numeric",value:t,error:!!h,onChange:M(n),onKeyDown:E(n),autoComplete:"off"},b),n)))}),h&&e(Tx,{children:h}),e(_A,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{C(new Array(p).fill("")),I()||(_(new Date),j(c)),x&&x(e)},disabled:y||I()},{children:$.children?$.children:"Resend OTP"+(D?` in ${D} second${D>1?"s":""}`:"")}))]}))},EA=M.nav`
    display: flex;
`,NA=M.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${yl.MaxWidth.tablet} {
        align-self: center;
    }
`,AA=M.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,IA=M($l)`
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
`,BA=M($l)`
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
    ${e=>"left"===e.$position?E`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:E`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${yl.MaxWidth.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,PA=M(cc.Default)`
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
        ${e=>e.$selected?E`
                    ${Al.getTextStyle("Body",700)};
                `:E`
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
            ${e=>e.$selected?E`
                        ${Al.getTextStyle("Body",700)};
                    `:E`
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

            ${e=>e.$selected?E`
                        ${Al.getTextStyle("Body",700)};
                    `:E`
                        ${Al.getTextStyle("Body",400)};
                    `}
        }
    }
`;M($l)`
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
`;const LA=M.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,FA=M.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${ml.Neutral[1]};

    display: flex;
    justify-content: center;
`,RA=M(Il.Body)`
    white-space: nowrap;
`,zA=M(Il.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,HA=M(fw)`
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
`,WA=M.div`
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
`,VA=M.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,YA=i.forwardRef((({id:n,"data-testid":r,className:i,pageSize:a=10,totalItems:s,activePage:l,pageSizeOptions:c=UA,showFirstAndLastNav:d,showPageSizeChanger:h=!1,onPageChange:p,onPageSizeChange:f},g)=>{const m=Vc.useMediaQuery({maxWidth:bl.mobileL}),b=c,[v,y]=o(!1),[x,w]=o(!1),[$,S]=o(""),[k,O]=o(b&&b.length>=1?b[0]:null),[C,D]=o(!m&&h&&k?k.value:a),j=Math.ceil(s/C),T=1===l,_=l===j,M=l>1?()=>F(1):void 0,E=l<j?()=>F(j):void 0,N=l>1?()=>F(l-1):void 0,A=l<j?()=>F(parseInt(l.toString())+1):void 0,I=e=>e?()=>U():()=>V(),B=e=>e?()=>K():()=>Y();u((()=>{l&&P(l)}),[l]),u((()=>{var e;D(a),O(null!==(e=b.find((e=>e.value===a)))&&void 0!==e?e:null)}),[a]);const P=e=>{S(e.toString())},L=()=>{y(!1),w(!1)},F=e=>{p&&(p(e),P(e))},R=()=>{const e=Math.min(j,l+5);F(e),P(e),y(!0),w(!1)},z=()=>{const e=Math.max(1,l-5);F(e),P(e),y(!1),w(!0)},H=e=>{const t=e.target.value;if(void 0===t||0===t.length)S("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));P(Math.max(1,Math.min(j,e)))}else S(t.replace(/[^0-9]/g,""))},W=e=>{e.preventDefault(),$&&p(parseInt($))},V=()=>{y(!0)},Y=()=>{y(!1)},U=()=>{w(!0)},K=()=>{w(!1)},X=(n,r,i)=>t(LA,{children:[e(IA,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":n?"Previous 5 pages":"Next 5 pages",onMouseOver:I(n),onMouseOut:B(n),onFocus:I(n),onBlur:B(n),onClick:n?z:R},{children:e(n&&x?tt:r&&v?nt:at,{"aria-hidden":!0})})),n&&x&&e(WA,{children:"Previous 5 pages"}),r&&v&&e(WA,{children:"Next 5 pages"})]},i);return t(EA,Object.assign({className:i,ref:g,id:n||"pagination-wrapper","data-testid":r||"pagination","aria-label":"Pagination"},{children:[e(NA,{children:t(AA,{children:[d&&e(BA,Object.assign({onClick:M,disabled:T,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:e(rt,{"aria-hidden":!0})})),e(BA,Object.assign({onClick:N,disabled:T,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:e(ge,{"aria-hidden":!0})})),m?t(FA,{children:[e("form",Object.assign({onSubmit:W},{children:e(HA,{value:$,onChange:H,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(r||"pagination")+"-input"})})),e(zA,{children:"/"}),e(RA,{children:j})]}):[...Array(j)].map(((t,n)=>{const r=n+1,i=j-5,a=l===r;if(j<=7)return e(PA,Object.assign({onClick:()=>F(r),$selected:a,"aria-label":"Page "+r,"aria-current":!!a&&"page",onMouseOver:L,onFocus:L},{children:r}),r);const o=l+1>5&&2===r,s=l-1<=i&&r===j-1-1;return o||s?X(o,s,r):r<=5&&l+1<=5||r<=1||r===l||r<=l+1&&r>=l-1-1||r>i&&l-1>i||r>j-1?e(PA,Object.assign({onClick:()=>F(r),$selected:a,"aria-label":"Page "+r,"aria-current":!!a&&"page",onMouseOver:L,onFocus:L},{children:r}),r):null})),e(BA,Object.assign({onClick:A,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:e(fe,{"aria-hidden":!0})})),d&&e(BA,Object.assign({onClick:E,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:e(it,{"aria-hidden":!0})}))]})}),h&&!m&&e(VA,{children:e(tj,{options:b,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{O(e);const t=e.value,n=Math.ceil(s/t);D(t);f&&f(l>=n?n:l,t)}})})]}))})),UA=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],KA=M.div`
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

    ${e=>{let t,n,r;if("solid"===e.$type)switch(r=ml.Neutral[8],e.$color){case"grey":t=ml.Neutral[3],n=ml.Neutral[3];break;case"green":t=ml.Validation.Green.Text,n=ml.Validation.Green.Text;break;case"yellow":t=ml.Validation.Orange.Text,n=ml.Validation.Orange.Text;break;case"red":t=ml.Validation.Red.Text,n=ml.Validation.Red.Text;break;case"blue":t=ml.Validation.Blue.Text,n=ml.Validation.Blue.Text;break;default:t=ml.Neutral[1],n=ml.Neutral[1]}else switch(e.$color){case"grey":t=ml.Neutral[6],n=ml.Neutral[4],r=ml.Neutral[3];break;case"green":t=ml.Validation.Green.Background,n=ml.Validation.Green.Border,r=ml.Validation.Green.Text;break;case"yellow":t=ml.Validation.Orange.Background,n=ml.Validation.Orange.Border,r=ml.Validation.Orange.Text;break;case"red":t=ml.Validation.Red.Background,n=ml.Validation.Red.Border,r=ml.Validation.Red.Text;break;case"blue":t=ml.Validation.Blue.Background,n=ml.Validation.Blue.Border,r=ml.Validation.Blue.Text;break;default:t=ml.Neutral[8],n=ml.Neutral[5],r=ml.Neutral[1]}return E`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};
        `}}
`,XA=M.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,qA=n=>{var{type:r,colorType:i="black",children:a,icon:o}=n,s=lt(n,["type","colorType","children","icon"]);return t(KA,Object.assign({$type:r,$color:i},s,{children:[o,e(XA,{children:a})]}))},GA=M.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?E`
            visibility: visible;
            opacity: 1;
            transition: ${Fl.Base};
            z-index: 50;
        `:E`
            visibility: hidden;
            opacity: 0;
            transition: ${Fl.Base};
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

	${yl.MaxWidth.mobileL} {
        display: none;
    }
`,ZA=M(Kf)`
    padding: 3.5rem 1.25rem 2.5rem;
`,QA=M.div`
    position: relative;
    width: fit-content;
`,JA=M.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,eI=M.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,tI=r=>{var{children:i,visible:s,onMobileClose:l}=r,c=lt(r,["children","visible","onMobileClose"]);const d=c["data-testid"]||"popover",[h,p]=o("none"),f=a(null),g=Vc.useMediaQuery({maxWidth:bl.mobileL}),m=a(h);u((()=>(y(),window.addEventListener("resize",yh(b,300)),()=>{window.removeEventListener("resize",yh(b,300))})),[]);const b=()=>{y()},v=()=>{l&&l()},y=()=>{const e=x();var t;e&&(t=e,m.current=t,p(t))},x=()=>{if(f.current){const e=f.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===m.current||"left"===m.current)&&e.x-e.width/2>t||("top-right"===m.current||"right"===m.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},w=()=>"string"==typeof i?e(Il.BodySmall,{children:i}):i;return t(n,{children:[e(GA,Object.assign({ref:f,"data-testid":d,$visible:s,$offset:h},c,{children:e(Gu,{children:w()})})),g&&e(Vf,Object.assign({show:s,onOverlayClick:v},{children:e(ZA,Object.assign({onClose:v},{children:e(eI,{children:w()})}))}))]})},nI=(n,r)=>i=>{const{onPopoverAppear:s,onPopoverDismiss:l}=i,c=lt(i,["onPopoverAppear","onPopoverDismiss"]),d=r.trigger||"click",h=c,[p,f]=o(!1),g=a(),m=Vc.useMediaQuery({maxWidth:bl.mobileL});u((()=>{if(!m)return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}}),[p]);const b=e=>{g&&!g.current.contains(e.target)&&(p&&f(!1),l&&l())};return t(QA,Object.assign({id:"popover-hoc-wrapper",ref:g},{children:[e(JA,Object.assign({id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===d||m)&&(f(!p),!p&&s&&s(),p&&l&&l())},onMouseEnter:()=>{"hover"!==d||m||f(!0)},onMouseLeave:()=>{"hover"===d&&p&&!m&&f(!1)},"aria-label":"popover-button"},{children:e(n,Object.assign({},h))})),e(tI,Object.assign({visible:p,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{f(!1)}},{children:r.content}))]}))},rI=M.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${yl.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${yl.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,iI=M.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,aI=M.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?ml.Accent.Light[1]:ml.Neutral[6])(e)};\n        `}};
`,oI=M(Il.BodySmall)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?ml.Primary:ml.Neutral[3])(e)};`}};
`,sI=M(Il.BodySmall)`
    overflow-wrap: anywhere;
    color: ${ml.Neutral[1]};
`,lI=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var cI=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),dI=Zs,uI=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,hI=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var pI=function(e){return(e=dI(e))&&e.replace(uI,cI).replace(hI,"")},fI=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var gI=function(e){return e.match(fI)||[]},mI=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var bI=function(e){return mI.test(e)},vI="\\ud800-\\udfff",yI="\\u2700-\\u27bf",xI="a-z\\xdf-\\xf6\\xf8-\\xff",wI="A-Z\\xc0-\\xd6\\xd8-\\xde",$I="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",SI="["+$I+"]",kI="\\d+",OI="["+yI+"]",CI="["+xI+"]",DI="[^"+vI+$I+kI+yI+xI+wI+"]",jI="(?:\\ud83c[\\udde6-\\uddff]){2}",TI="[\\ud800-\\udbff][\\udc00-\\udfff]",_I="["+wI+"]",MI="(?:"+CI+"|"+DI+")",EI="(?:"+_I+"|"+DI+")",NI="(?:['’](?:d|ll|m|re|s|t|ve))?",AI="(?:['’](?:D|LL|M|RE|S|T|VE))?",II="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",BI="[\\ufe0e\\ufe0f]?",PI=BI+II+("(?:\\u200d(?:"+["[^"+vI+"]",jI,TI].join("|")+")"+BI+II+")*"),LI="(?:"+[OI,jI,TI].join("|")+")"+PI,FI=RegExp([_I+"?"+CI+"+"+NI+"(?="+[SI,_I,"$"].join("|")+")",EI+"+"+AI+"(?="+[SI,_I+MI,"$"].join("|")+")",_I+"?"+MI+"+"+NI,_I+"+"+AI,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kI,LI].join("|"),"g");var RI=gI,zI=bI,HI=Zs,WI=function(e){return e.match(FI)||[]};var VI=ND,YI=pI,UI=function(e,t,n){return e=HI(e),void 0===(t=n?void 0:t)?zI(e)?WI(e):RI(e):e.match(t)||[]},KI=RegExp("['’]","g");var XI=Wa(function(e){return function(t){return VI(UI(YI(t).replace(KI,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})));const qI=n=>{var{steps:r,currentIndex:i,displayExtractor:a,fadeColor:o,fadePosition:s="both"}=n,l=lt(n,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=Vc.useMediaQuery({maxWidth:xl.tablet}),d=e=>a?a(e):e.toString(),u=(e,t)=>XI(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return t(rI,Object.assign({},l,{children:[e(iI,{children:r.map(((t,n)=>{const r=n<=i;return e(lI,Object.assign({id:u(n,i)},{children:e(aI,{highlighted:r})}),n)}))}),e(iI,{children:c?t(lI,Object.assign({id:u(i,i)},{children:[t(sI,Object.assign({weight:"semibold",id:`${u(i,i)}-counter`},{children:["Step ",i+1," of ",r.length]})),e(sI,Object.assign({weight:"regular",id:`${u(i,i)}-title`},{children:d(r[i])}))]}),i):r.map(((t,n)=>{const r=n<=i,a=n===i,o=a?"bold":"regular";return e(lI,Object.assign({id:`${u(n,i)}-title`},{children:e(oI,Object.assign({highlighted:r,weight:o,"aria-current":a},{children:d(t)}))}),n)}))})]}))},GI=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${ml.Accent.Light[2]};

    ${e=>{if(e.$disabled)return`\n\t\t\t\tborder: 2px solid ${ml.Neutral[4](e)};\n\t\t\t`}}
`,ZI=M.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,QI=M.div`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${e=>e.$selected?1:0};
    transition: all 200ms ease-in-out;
    background: ${e=>e.$disabled?ml.Neutral[4](e):ml.Primary(e)};
    border-radius: 50%;
    border: 1px solid transparent;
`,JI=n=>{var{className:r,checked:i,disabled:a,onChange:o}=n,s=lt(n,["className","checked","disabled","onChange"]);return t(GI,Object.assign({$selected:i,$disabled:a,className:r,"data-testid":"radio-button"},{children:[e(ZI,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{a||null==o||o(e)},checked:i,disabled:a},s)),e(QI,{id:"checkmark","data-testid":"checkmark",$disabled:a,$selected:i})]}))},eB=M.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,tB=M.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${ml.Neutral[5]};
    background-color: ${ml.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,nB=M(tB)`
    height: 100vh;
    left: 0;
    top: 0;
    ${yl.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,rB=M(tB)`
    display: none;
    visibility: hidden;
    ${yl.MaxWidth.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,iB=M(za.ul)`
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

    ${e=>e.$showDrawer?E`
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              `:E`
                  border: 0;
                  padding: 0;
              `};
`,aB=M.li`
    width: 100%;
`,oB=M(cc.Default)`
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

    ${e=>e.$highlight&&E`
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
`,sB=M.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,lB=M(Il.XSmall)``,cB=$({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),dB=M.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,uB=M.li`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${ml.Neutral[5]};
`,hB=M(za.li)``,pB=M(cc.Default)`
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
            ${e=>e.$noChildren&&E`
                    color: ${ml.Primary} !important;
                `}
        }
    }

    ${e=>e.$highlight&&E`
            background-color: ${ml.Accent.Light[4]};
        `}
`,fB=M(za.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,gB=M.div`
    align-self: center;
    padding-left: 0.5rem;
`,mB=M(_)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${ml.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,bB=M.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,vB=M(za.ul)``,yB=M.li``,xB=M(cc.Default)`
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
`,wB=Object.assign((n=>{var{fixed:r=!0,children:i}=n,s=lt(n,["fixed","children"]);const l=a(null),[c,d]=o(void 0),[h,p]=o(void 0),[f,g]=o(void 0),[b,v]=o(!1),y=m((()=>({currentItem:c,selectedItem:h,previouslySelectedItemId:f,setCurrentItem:d,setSelectedItem:p,setPreviouslySelectedItemId:g})),[c,h,f,d,p,g]),x=Sa({width:b?240:0,borderRightWidth:b?1:0,borderTopWidth:b?1:0,borderBottomWidth:b?1:0,borderLeftWidth:0});return Td("click",(e=>{l.current&&!l.current.contains(e.target)&&(p({itemId:f||(h?h.itemId:void 0),content:void 0}),g(void 0),d(void 0))}),"window",!0),u((()=>{v(h&&!!h.content||c&&!!c.content)}),[c,h]),e(cB.Provider,Object.assign({value:y},{children:t(eB,Object.assign({$fixed:r},s,{ref:l,onMouseLeave:()=>{d(void 0)}},{children:[e(nB,{children:i}),e(iB,Object.assign({style:x,$showDrawer:b,"data-testid":"sidenav-drawer"},{children:c&&c.content||h&&h.content})),e(rB,{})]}))}))}),{Group:n=>{var{separator:r,children:i}=n,a=lt(n,["separator","children"]);return t(dB,Object.assign({},a,{children:[i,r&&e(uB,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:i,title:a,onClick:o}=n,s=lt(n,["children","icon","title","onClick"]);const l=s.id||a.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:h,setCurrentItem:p,setPreviouslySelectedItemId:f,setSelectedItem:m}=g(cB);u((()=>{s.selected&&m({itemId:l,content:void 0})}),[s.selected]);return e(aB,{children:t(oB,Object.assign({styleType:"link",type:"button",onClick:()=>{f((()=>{if(r&&h)return d||h.itemId})()),p({itemId:l,content:r}),m({itemId:l,content:r}),o&&!r&&o(l)},onMouseEnter:()=>{p({itemId:l,content:r})}},s,{$highlight:h&&h.itemId===l||c&&c.itemId===l},{children:[e(sB,{children:i}),e(lB,{children:a})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:a,children:s}=n,l=lt(n,["id","title","onClick","children"]);const[c,d]=o(!0),[u,h]=o(!1),{currentItem:p,setSelectedItem:f,setPreviouslySelectedItemId:m,setCurrentItem:b}=g(cB),v=Sa({from:{opacity:0},to:{opacity:1}}),y=ln(),x=y.ref,w=Sa({height:s&&c?y.height:0});return t(hB,Object.assign({onMouseEnter:()=>{h(!0)},onMouseLeave:()=>{h(!1)}},l,{style:v},{children:[t(pB,Object.assign({styleType:"link",type:"button",onClick:()=>{s?d(!c):(f({itemId:p.itemId,content:void 0}),b(void 0),m(void 0),a&&a(r))},$highlight:u&&c,$noChildren:!s},{children:[e(bB,{children:i}),s&&e(gB,{children:e(mB,{"aria-hidden":!0,$expanded:c})})]})),e(fB,Object.assign({style:w},{children:e(vB,Object.assign({ref:x},{children:s}))}))]}))},DrawerSubitem:t=>{var{id:n,title:r,onClick:i}=t,a=lt(t,["id","title","onClick"]);const{currentItem:o,setSelectedItem:s,setCurrentItem:l,setPreviouslySelectedItemId:c}=g(cB);return e(yB,Object.assign({},a,{children:e(xB,Object.assign({styleType:"link",type:"button",onClick:()=>{i&&i(n),s({itemId:o.itemId,content:void 0}),l(void 0),c(void 0)}},{children:r}))}))}}),$B=N`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,SB=M.div`
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
    ${e=>{if(e.$isAnimated)return E`
                animation: ${$B} 0.3s;
            `}}
`,kB=M.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,OB=M($l)`
    padding: 0;
`,CB=M(Ae)`
    color: ${ml.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,DB=M.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,jB=M.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${yl.MaxWidth.mobileM} {
        margin: 0 0.5rem;
    }
`,TB=M.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,_B=M.div`
    max-width: 30%;
`,MB=M(cc.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Al.getTextStyle("XSmall","semibold")};
    }
`,EB=M(Il.H6)`
    overflow-wrap: anywhere;
    ${yl.MaxWidth.mobileM} {
        ${Al.getTextStyle("XSmall","semibold")}
    }
`,NB=M(Il.XSmall)`
    overflow-wrap: anywhere;
`,AB=M.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,IB=E`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,BB=M(Be)`
    ${IB}
`,PB=M(ot)`
    ${IB}
`,LB=M(Ie)`
    ${IB}
`,FB="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",RB="smart-app-banner";const zB=i.forwardRef((function(r,i){const{className:a,show:o,href:s,content:l,offset:c=0,icon:d=FB,animated:u=!1,onDismiss:h,onClick:p}=r,{title:f,message:g,buttonLabel:m,buttonAriaLabel:b,numberOfStars:v}=l,y=e=>{e.stopPropagation(),window.open(s,"_blank","noreferrer"),null==p||p()};return e(n,{children:o&&t(SB,Object.assign({ref:i,$isAnimated:u,$offset:c,className:a},{children:[e(kB,Object.assign({onClick:h,id:`${RB}-dismiss`,"data-testid":`${RB}-dismiss-container`},{children:e(OB,Object.assign({"aria-label":"Dismiss"},{children:e(CB,{})}))})),t(DB,Object.assign({onClick:y,id:`${RB}-proceed`,"data-testid":`${RB}-proceed-container`},{children:[e(TB,{src:d,alt:"lifesg-app-icon"}),t(jB,{children:[e(EB,{children:f}),e(NB,{children:g}),(()=>{if(isNaN(v)||v<0)return;const t=[],n=v-Math.floor(v)>=.4;for(let n=0;n<Math.floor(v);n++)t.push(e(BB,{},`star${n}`));if(n&&t.push(e(PB,{},"halfstar")),t.length<5){const n=5-t.length;for(let r=0;r<n;r++)t.push(e(LB,{},`emptystar${r}`))}return e(AB,{children:t.slice(0,5)})})()]}),e(_B,{children:e(MB,Object.assign({type:"button",onClick:y,"aria-label":b},{children:m}))})]}))]}))})})),HB=i.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),WB=M.div`
    position: relative;
    width: 100%;
`,VB=M.div`
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,`\n\t\t\t${yl.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,YB=M.div`
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
`,UB=M($l)`
    display: none;

    ${yl.MaxWidth.tablet} {
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
            color: ${ml.Neutral[3]};
        }
    }
`,KB=p(((r,i)=>{var{children:s,fadeColor:l,fadePosition:c="both",showIndicator:d=!1,onResize:h}=r,p=lt(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[f,g]=o("left"===c||"both"===c),[m,v]=o("right"===c||"both"===c),y=a(null),x=a(null),w=$h($,50);function $(){const e=y.current,t=x.current;e&&t&&t.scrollWidth>e.offsetWidth?(v(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),g(t.scrollLeft>=1)):(v(!1),g(!1))}function S(){$(),h&&h({content:x.current,wrapper:y.current})}ln({onResize:S,targetRef:y,refreshMode:"debounce",refreshRate:50}),b(i,(()=>({resize(){S()}}))),u((()=>{const e=x.current;return $(),e&&e.addEventListener("scroll",w),()=>{e&&e.removeEventListener("scroll",w)}}),[]);return t(WB,Object.assign({ref:y},p,{children:[e(YB,Object.assign({ref:x},{children:s})),(()=>{let r;return r=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(n,{children:[f&&e(VB,Object.assign({$backgroundColor:r.left,$position:"left",$showIndicator:d,"data-id":"left-fade"},{children:d&&e(UB,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e(ge,{})}))})),m&&e(VB,Object.assign({$backgroundColor:r.right,$position:"right",$showIndicator:d,"data-id":"right-fade"},{children:d&&e(UB,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e(fe,{})}))}))]})})()]}))})),XB=M.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;
`,qB=M.li`
    display: flex;
    flex-shrink: 0;
    border-bottom: 4px solid ${ml.Neutral[5]};

    ${e=>{if(e.$active)return E`
                border-bottom: 4px solid ${ml.Primary};
            `}}

    ${yl.MaxWidth.mobileL} {
        flex: 1;
        justify-content: center;
    }
`,GB=M.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,ZB=M(Il.Body)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${ml.Neutral[3]};
    opacity: 1;

    ${e=>{if(e.$active)return E`
                opacity: 0;
            `}}
`,QB=M(Il.Body)`
    color: ${ml.Primary};
    opacity: 0;
    ${e=>{if(e.$active)return E`
                opacity: 1;
            `}}
`,JB=M(KB)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`,eP=({controlledMode:n,"data-testid":r,onTabClick:i})=>{const{setCurrentActiveIndex:o,currentActiveIndex:s,tabLinks:l}=g(HB),c=Vc.useMediaQuery({maxWidth:xl.mobileL}),d=a(null),u=e=>t=>{t.preventDefault(),n||o(e),i&&i(l[e].title,e)},h=e=>c&&e.length>20?`${e.substring(0,20)}...`:e;return e(JB,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=xl.tablet&&d&&(e.scrollLeft=d.current.getBoundingClientRect().left)},"data-testid":r},{children:e(XB,Object.assign({role:"tablist"},{children:l.map(((n,i)=>{const a=s===i;return e(qB,Object.assign({role:"none",$active:a,ref:a?d:null},{children:t(GB,Object.assign({role:"tab",type:"button","aria-selected":a,onClick:u(i),"data-testid":`${r}-link-${i}`},{children:[e(ZB,Object.assign({$active:a,weight:"regular"},{children:h(n.title)})),e(QB,Object.assign({$active:a,weight:"semibold","aria-hidden":"true"},{children:h(n.title)}))]}))}),i)}))}))}))},tP=M.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,nP=Object.assign((n=>{var{children:r,currentActive:i,initialActive:a=0,onTabClick:s,"data-testid":l}=n,d=lt(n,["children","currentActive","initialActive","onTabClick","data-testid"]);const[h,p]=o(i||a),[f,g]=o([]);u((()=>{const e=k.toArray(r).filter(Boolean);m(e)}),[r]),u((()=>{"number"==typeof i&&p(i)}),[i]);const m=e=>{const t=e.map((e=>({title:e.props.title})));g(t)};return e(tP,Object.assign({"data-testid":l},d,{children:t(HB.Provider,Object.assign({value:{tabLinks:f,currentActiveIndex:h,setCurrentActiveIndex:p}},{children:[e(eP,{controlledMode:"number"==typeof i,onTabClick:s,"data-testid":`${l}-tabs`}),k.toArray(r).filter(Boolean).map(((e,t)=>c(e,{key:t,index:t})))]}))}))}),{Item:t=>{var{index:n,children:r}=t,i=lt(t,["index","children"]);const{currentActiveIndex:a}=g(HB);return a===n?e("div",Object.assign({role:"tabpanel"},i,{children:r})):null}}),rP=M.div`
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

    ${e=>{let t,n,r,i;if("solid"===e.$type)switch(r=ml.Neutral[8],i=`0px 0px 4px 1px ${ml.Neutral[4](e)}`,e.$color){case"grey":t=ml.Neutral[3],n=ml.Neutral[3];break;case"green":t=ml.Validation.Green.Text,n=ml.Validation.Green.Text;break;case"yellow":t=ml.Validation.Orange.Text,n=ml.Validation.Orange.Text;break;case"red":t=ml.Validation.Red.Text,n=ml.Validation.Red.Text;break;case"blue":t=ml.Validation.Blue.Text,n=ml.Validation.Blue.Text;break;default:t=ml.Neutral[1],n=ml.Neutral[1]}else switch(i="0px 0px 4px 1px rgba(164, 164, 164, 0.70)",e.$color){case"grey":t=ml.Neutral[6],n=ml.Neutral[4],r=ml.Neutral[3];break;case"green":t=ml.Validation.Green.Background,n=ml.Validation.Green.Border,r=ml.Validation.Green.Text;break;case"yellow":t=ml.Validation.Orange.Background,n=ml.Validation.Orange.Border,r=ml.Validation.Orange.Text;break;case"red":t=ml.Validation.Red.Background,n=ml.Validation.Red.Border,r=ml.Validation.Red.Text;break;case"blue":t=ml.Validation.Blue.Background,n=ml.Validation.Blue.Border,r=ml.Validation.Blue.Text;break;default:t=ml.Neutral[8],n=ml.Neutral[5],r=ml.Neutral[1],i="0px 0px 4px 1px rgba(164, 164, 164, 0.50)"}return E`
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
        ${({$interactive:e})=>{if(e)return E`
                    ${Al.getTextStyle("H5","semibold")};
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,iP=M.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,aP=n=>{var{type:r,colorType:i="black",children:a,interactive:o=!1,icon:s,iconPosition:l="left"}=n,c=lt(n,["type","colorType","children","interactive","icon","iconPosition"]);return t(rP,Object.assign({as:o?"button":"div",$type:r,$color:i,$interactive:o},c,{children:["left"===l&&s,e(iP,{children:a}),"right"===l&&s]}))};var oP;od.extend(ld),function(e){e.formatHourlyDisplay=e=>od(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,n)=>kd.getTimeDiffInMinutes(e,t)/15*(n/2)}(oP||(oP={}));const sP=1.25,lP=e=>"minified"===e?12:40,cP=e=>"minified"===e?12:40,dP=M.div`
    position: relative;
    display: flex;
    align-items: center;
`,uP=M($l)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${ml.Neutral[8]};
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
`,hP=M(fe)`
    width: 1rem;
    height: 1rem;
    color: ${ml.Primary};
`,pP=M(ge)`
    font-size: 1rem;
    color: ${ml.Primary};
`,fP=M.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+cP(e)}px`};
`,gP=M.div`
    position: relative;
    white-space: nowrap;
    height: ${sP}rem;
`,mP=M.div`
    display: flex;
    white-space: nowrap;
`,bP=M.div`
    display: inline-block;
    width: ${({$variant:e})=>`${lP(e)}px`};
    position: relative;
    border-left: 1px solid ${ml.Neutral[2]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?sP:.625;break;case"minified":t=e.$isLongMarker?sP:0;break;default:t=0}return E`
            height: ${t}rem;
        `}}
`,vP=M(Il.XSmall)`
    color: ${ml.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,yP=M.div`
    ${e=>"vertical"===e.$type?E`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:E`
                position: absolute;
                height: ${cP(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&E`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||ml.Neutral[5]} 0px,
                ${e.$bgColor2||ml.Neutral[5]} 10px,
                ${e.$bgColor} 10px,
                ${e.$bgColor} 20px
            );
        `}
`,xP=M.div`
    position: absolute;
    top: ${sP}rem;
    height: ${({$variant:e})=>`${cP(e)}px`};
    z-index: 1;
    border-right: 1px solid ${ml.Neutral[2]};
`,wP=M(Il.XSmall)`
    color: ${e=>e.$color||ml.Neutral[2](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,$P=({"data-testid":r,className:i,variant:s="default",startTime:l,endTime:c,slots:d,onSlotClick:h,onClick:p,styleAttributes:f})=>{const g=a(null),[m,b]=o(0),[v,y]=o(0),x=lP(s),w=2.5*x;u((()=>{const e=g.current;return e&&e.addEventListener("scroll",$),()=>{e&&e.removeEventListener("scroll",$)}}),[]);const $=()=>{g.current&&b(g.current.scrollLeft)},S=e=>{g.current&&g.current.scrollBy({left:"left"===e?-w:w,behavior:"smooth"})};ln({onResize:()=>{g.current&&y(g.current.clientWidth)},targetRef:g,refreshMode:"debounce",refreshRate:50});const k=e=>e<=x/2,O=e=>{if(r)return`${r}-${e}`},C=(e,t,n)=>{const r=0===e.minute();if("default"===n)return r;return r&&(t?e.hour()%2==0:e.hour()%2==1)};return t(dP,Object.assign({className:i},{children:[t(fP,Object.assign({"data-testid":r,ref:g,$variant:s},{children:[e(gP,Object.assign({"data-testid":O("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const t=[],n=od(l,"HH:mm"),r=od(c,"HH:mm"),i=n.hour()%2==0;for(let a=n;a.isBefore(r);a=a.add(30,"minute")){const n=C(a,i,s);t.push(e(bP,Object.assign({$isLongMarker:n,$variant:s},{children:n&&e(vP,Object.assign({weight:"semibold"},{children:oP.formatHourlyDisplay(a.format("HH:mm"))}))}),a.format("HH:mm")))}return t})()})),t(mP,Object.assign({"data-testid":O("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[f&&(()=>{const{backgroundColor:r,backgroundColor2:i,styleType:a="default"}=f,o=oP.calculateWidth(l,c,x),d=!!p&&"default"===s;return t(n,{children:[e(xP,{$variant:s}),e(yP,{"data-testid":O("default-timeslot"),$width:o,$variant:s,$left:0,$styleType:a,$bgColor:r,$bgColor2:i,$clickable:d,onClick:d?p:void 0},"default-timeslot")]})})(),d.map((n=>{const{id:r,startTime:i,endTime:a,label:o,clickable:d=!0,styleAttributes:u}=n,{color:p,styleType:f="default",backgroundColor:g,backgroundColor2:m}=u,b=oP.calculateWidth(i,a,x),v=oP.calculateWidth(l,i,x),y=d&&"default"===s;return t("div",{children:[e(xP,{$variant:s,style:{left:`${v}px`}}),e(yP,Object.assign({"data-testid":O(`${r}-timeslot`),$width:b,$left:v,$styleType:f,$variant:s,$bgColor:g,$bgColor2:m,$clickable:y,onClick:()=>y&&h(n)},{children:o&&"default"===s&&e(wP,Object.assign({$slotWidth:b,$color:p,weight:"semibold"},{children:k(b)?"...":o}))})),c!==a&&e(xP,{$variant:s,style:{left:`${v+b}px`}})]},r)}))]}))]})),e(n,{children:m>0&&e(uP,Object.assign({"data-testid":O("arrow-left"),$direction:"left",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{S("left")}},{children:e(pP,{})}))}),m+v<oP.calculateWidth(l,c,x)?e(uP,Object.assign({"data-testid":O("arrow-right"),$direction:"right",$variant:s,focusHighlight:!1,focusOutline:"none",onClick:()=>{S("right")}},{children:e(hP,{})})):e(n,{})]}))},SP=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.5rem;
    flex: 1;
`,kP=M(Il.XSmall)`
    ${e=>e.$disabled&&E`
            color: ${ml.Neutral[4]};
        `}
`,OP=M.div`
    grid-column: 2 / -1;
    display: flex;
`,CP=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: 0.25rem;
`,DP=M(za.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,jP=M.div`
    display: flex;
    gap: 0.25rem;
    transition: ${Fl.Base};
    overflow: hidden;
`,TP=M.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: 0.25rem;
    width: 1.375rem;
    transition: ${Fl.Base};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,_P=M.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,MP=M.div`
    ${Al.getFontFamily("Body",700)}
    color: ${ml.Neutral[3]};
    font-size: 0.625rem !important;
    line-height: 0.75rem !important;
    text-align: center;
    :first-line {
        font-size: 0.875rem !important;
    }
`,EP=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.25rem;
`,NP=M.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: 0.5rem;
`,AP=M(cc.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`,IP=M(oe)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,BP=M(yP)`
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
                        ${ml.Neutral[5]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||ml.Neutral[5]} 0px,\n                            ${e.$bgColor2||ml.Neutral[5]} 10px,\n                            ${e.$bgColor} 10px,\n                            ${e.$bgColor} 20px\n                        )`};
            `:E`
                background-color: ${e.$bgColor};
            `}
`;var PP=ho;var LP=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],o=t(a);if(null!=o&&(void 0===s?o==o&&!PP(o):n(o,s)))var s=o,l=a}return l};var FP=LP,RP=yk,zP=function(e,t){return e<t};var HP=Wa((function(e,t){return e&&e.length?FP(e,RP(t),zP):void 0}));var WP=LP,VP=function(e,t){return e>t},YP=yk;var UP=Wa((function(e,t){return e&&e.length?WP(e,YP(t),VP):void 0}));const KP=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:s,maxDate:l,startTime:c,endTime:d,maxVisibleCellHeight:u,slots:h,interval:p=30,variant:f="flexible",enableSelection:g=!0,onSlotClick:b})=>{var v,y,x,w;const $="YYYY-MM-DD",[S,k]=o(!1),[O,C]=o(),D=m((()=>vd.generateDaysForCurrentWeek(n)),[n]),j=Object.values(null!=h?h:{}).flat(),T=null!==(y=null!=c?c:null===(v=HP(j,"startTime"))||void 0===v?void 0:v.startTime)&&void 0!==y?y:"00:00",_=null!==(w=null!=d?d:null===(x=UP(j,"endTime"))||void 0===x?void 0:x.endTime)&&void 0!==w?w:"24:00",M=Math.ceil(kd.getTimeDiffInMinutes(T,_)/p),{height:E,ref:N}=ln(),A=u?E<u||S?E:u:E,I=Sa({height:A}),B=m((()=>{if(h){const e={};return Object.entries(h).forEach((([t,n])=>{const r=function(e){const t=Array(M).fill({});return e.forEach((e=>{const n=Math.max(0,kd.getTimeDiffInMinutes(T,e.startTime)/p),r=Math.min(M,kd.getTimeDiffInMinutes(T,e.endTime)/p),i=Math.ceil(r)-Math.floor(n);switch(f){case"fixed":t[Math.floor(n)]=Object.assign(Object.assign({},e),{cellLength:r-n});break;case"flexible":for(let a=0;a<i;a++){const o=kd.addMinutesToTime(T,Math.floor(n+a)*p),s=kd.addMinutesToTime(o,p);let l;mD(t[Math.floor(n+a)])?0===a&&n%1!=0?l="top":a===i-1&&r%1!=0&&(l="bottom"):l=void 0,t[Math.floor(n+a)]=Object.assign(Object.assign({},e),{id:`${e.id}-${a}`,startTime:o,endTime:s,cellLength:1,halfFill:l})}}})),t}(n);e[t]=function(e){var t,n,r,i;let a=0;switch(f){case"fixed":for(e=e.reduce(((e,t)=>{const n=e.length>0?e[e.length-1]:e[0];return mD(t)&&mD(n)?e:[...e,t]}),[{}]);a<e.length;){if(mD(e[a])){const o=null!==(n=null===(t=e[a-1])||void 0===t?void 0:t.endTime)&&void 0!==n?n:T,s=null!==(i=null===(r=e[a+1])||void 0===r?void 0:r.startTime)&&void 0!==i?i:_;if(o!==s){const t=kd.getTimeDiffInMinutes(o,s)/p;e[a]=Object.assign(Object.assign({},z(a)),{startTime:o,endTime:s,cellLength:t})}}a++}break;case"flexible":for(;a<e.length;)mD(e[a])?(e[a]=z(a),a++):a+=e[a].cellLength}return e.filter((e=>!mD(e)&&e.cellLength>0))}(r)})),e}return{}}),[h]),P=e=>{C(e)},L=()=>{C(void 0)},F=e=>{e.preventDefault(),k((e=>!e))},R=e=>{var t;const n=vd.isWithinRange(e,s?od(s):void 0,l?od(l):void 0),i=null!==(t=r&&r.includes(e.format($)))&&void 0!==t&&t;return!n||i};function z(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:"#E0E4E5"},cellLength:t}}return t(CP,{children:[e(OP,{children:D.map(((t,n)=>{const r=(e=>{const t=e.format($),n=R(e),r={},a=g&&!n;return n&&(r.disabled=!0),r.interactive=g?a:null,a&&O&&e.isSame(O,"day")&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0),[i].includes(t)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),r})(t);return e(Pu,Object.assign({date:t,calendarDate:od(i),onSelect:()=>{((e,t)=>{!t&&g&&a(e)})(t,!r.interactive)},onHover:P,onHoverEnd:L},r),`day-${n}`)}))}),e(OP,{children:D.map(((t,n)=>e(SP,{children:e(kP,Object.assign({weight:"semibold",$disabled:R(t)},{children:od(t).format("ddd")}))},`week-day-${n}`)))}),(()=>{let t=!1;const n=e=>{const n=od(T,"HH:mm").add(4*e*p,"minutes"),r=n.format("h"),i=n.format("mm"),a=n.format("a");let o=`${r}${"00"!==i?` ${i}`:""}`;return t||"pm"!==a||"00"!==i||(o+=` ${a}`,t=!0),o};return e(TP,Object.assign({$height:A},{children:Array(Math.ceil(M/4)).fill(void 0).map(((t,r)=>e(_P,{children:e(MP,{children:n(r)})},`time-${r}`)))}))})(),e(DP,Object.assign({style:I},{children:e(jP,Object.assign({ref:N},{children:D.map(((t,n)=>{var r;const i=t.format($),a=null!==(r=B[i])&&void 0!==r?r:Array("flexible"===f?M:1).fill(void 0).map(((e,t)=>z(t,"fixed"===f?M:void 0)));return e(EP,{children:a.map((t=>{const{id:n,clickable:r=!0,styleAttributes:a,cellLength:o,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=a;return e(BP,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:r,$height:"fixed"===f?12*o+4*(o-1):12,onClick:()=>r&&((e,t)=>{b&&b(e,t)})(i,t)},n)}))},`wrapper-${n}`)}))}),`week-cell-${n.format($)}`)})),(()=>{if(u&&N.current&&!(E&&E<u))return e(NP,{children:t(AP,Object.assign({"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:F},{children:[e(IP,{$isExpanded:S}),(S?"Hide":"Show")+" later times"]}))})})()]})},XP=M.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${yl.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,qP="YYYY-MM-DD",GP=t=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:s,minDate:l,maxDate:c,startTime:d,endTime:h,slots:p,interval:f,variant:g,maxVisibleCellHeight:m,showNavigationHeader:b=!0,enableSelection:v,onSlotClick:y,currentCalendarDate:x}=t,w=lt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[$,S]=o(s),k=a(),O=a(void 0);u((()=>{S(s)}),[s]);const C=e=>{const t=e.format(qP);S(t),i&&i(t)},D=(e,t)=>{y&&y(e,t)},j=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(qP),lastDayOfWeek:e.endOf("week").format(qP)},month:e.month()+1,year:e.year()};r(t)}};return e(XP,Object.assign({},w,{children:e(mu,Object.assign({ref:k,type:"standalone",dynamicHeight:!0,initialCalendarDate:kd.toDayjs($||x).endOf("week").format(qP),selectedStartDate:$,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>l&&od(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>c&&od(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{O.current&&O.current.isSame(e,"week")||j(e),O.current=e},showNavigationHeader:b,minDate:l,maxDate:c,getMonthHeaderLabel:e=>od(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>od(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>(t=>e(KP,{calendarDate:t,disabledDates:n,selectedDate:$,minDate:l,maxDate:c,startTime:d,endTime:h,onSelect:C,slots:p,interval:f,variant:g,maxVisibleCellHeight:m,enableSelection:v,onSlotClick:D}))(t)}))}))},ZP=M(Su)`
    ${e=>{const{$variant:t}=e;if("default"===t)return E`
                    ${Al.getFontFamily("H5","semibold")}
                    color: ${ml.Neutral[3]};
                `}}
`,QP=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`,JP=M.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,eL=M.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,tL=M.div`
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
`,nL=M.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;od.extend(dd);const rL={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},iL=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:o,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=m((()=>vd.generateDaysForCurrentWeek(n)),[n]),h="YYYY-MM-DD",p=e=>{const t=e.format(h),n=(e=>{const t=vd.isWithinRange(e,o?od(o):void 0,s?od(s):void 0),n=r&&r.includes(e.format(h));return!t||n})(e),a={},l={};return n&&(a.$disabledDisplay=!0,l.$disabledDisplay=!0),a.$interactive=c&&!n,[i].includes(t)&&(a.$selected=!0,l.$selected=!0),{styleCircleProps:a,styleLabelProps:l}};return t(JP,{children:[e(yu,{children:u.map(((t,n)=>{const r="default",{styleCircleProps:i,styleLabelProps:o}=p(t);return e(xu,{children:e(ku,Object.assign({$variant:r,onClick:()=>((e,t)=>{!t&&c&&a(e)})(t,!i.$interactive)},i,{children:e(ZP,Object.assign({weight:o.$selected?"semibold":"regular",$variant:r},o,{children:t.format("D")}))}))},`day-${n}`)}))}),u.map(((t,n)=>e(QP,{children:e(Il.XSmall,Object.assign({weight:"semibold"},{children:od(t).format("ddd")}))},`week-day-${n}`))),e(eL,{children:u.map(((n,r)=>{const i=n.format(h),a=l&&(l[i]?l[i]:[rL]);return e(nL,{children:a&&a.map((n=>{const{id:r,startTime:a,endTime:o,clickable:s=!0,styleAttributes:l}=n,{color:c,styleType:u="default",backgroundColor:h,backgroundColor2:p}=l;return e(yP,Object.assign({$type:"vertical",$variant:"default",$styleType:u,$bgColor:h,$bgColor2:p,$clickable:s,onClick:()=>s&&((e,t)=>{d(e,t)})(i,n)},{children:t(tL,Object.assign({style:{color:c}},{children:[e("span",{children:vd.convertTo12HourFormat(a)}),o&&a&&e("span",{children:"-"}),e("span",{children:vd.convertTo12HourFormat(o)})]}))}),r)}))},`wrapper-${r}`)}))},`week-cell-${n.format(h)}`)]})},aL=M.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${yl.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,oL="YYYY-MM-DD",sL=t=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:s,minDate:l,maxDate:c,slots:d,showNavigationHeader:h=!0,enableSelection:p,onSlotClick:f,currentCalendarDate:g}=t,m=lt(t,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[b,v]=o(s),y=a(),x=a(void 0);u((()=>{v(s)}),[s]);const w=e=>{const t=e.format(oL);v(t),i&&i(t)},$=(e,t)=>{f&&f(e,t)},S=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(oL),lastDayOfWeek:e.endOf("week").format(oL)},month:e.month()+1,year:e.year()};r(t)}};return e(aL,Object.assign({},m,{children:e(mu,Object.assign({ref:y,type:"standalone",dynamicHeight:!0,initialCalendarDate:kd.toDayjs(b||g).endOf("week").format(oL),selectedStartDate:b,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>l&&od(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>c&&od(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"week")||S(e),x.current=e},showNavigationHeader:h,minDate:l,maxDate:c,getMonthHeaderLabel:e=>od(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>od(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>e(iL,{calendarDate:t,disabledDates:n,selectedDate:b,minDate:l,maxDate:c,onSelect:w,slots:d,enableSelection:p,onSlotClick:$})}))}))},lL=M.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return E`
                    background-color: ${ml.Accent.Light[1]};
                `;case"upcoming-active":return E`
                    border: 4px solid ${ml.Accent.Light[1]};
                `;case"upcoming-inactive":return E`
                    border: 4px solid ${ml.Neutral[4]};
                `;case"completed":return E`
                    background-color: ${ml.Validation.Green.Icon};
                    svg {
                        color: ${ml.Neutral[8]};
                    }
                `;case"error":return E`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${ml.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `;case"disabled":return E`
                    background-color: ${ml.Neutral[4]};
                `}}}
`,cL=M.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return E`
                    background-color: ${ml.Accent.Light[1]};
                `;case"upcoming-inactive":case"disabled":return E`
                    background-color: ${ml.Neutral[4]};
                `;case"completed":return E`
                    background-color: ${ml.Validation.Green.Icon};
                `;case"error":return E`
                    margin-left: -0.15rem;
                    background-color: ${ml.Validation.Red.Icon};
                `}}}
`,dL=M.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,uL=M.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${yl.MaxWidth.tablet} {
        grid-column: span 8;
    }

    ${yl.MaxWidth.mobileL} {
        grid-column: span 4;
    }
`,hL=M(Il.H3)`
    margin-bottom: 1rem;

    ${yl.MaxWidth.tablet} {
        margin-bottom: 1.5rem;
    }
`,pL=M(Il.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,fL=M.div`
    display: flex;

    :last-of-type ${cL} {
        margin-bottom: 0;
    }
`,gL=M.div`
    margin-bottom: 2rem;
    width: 100%;
`,mL=M(Il.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,bL=M(qA)`
    padding: 0.125rem 0.5rem;
`,vL=({items:r,className:i,title:a,startCol:o,colSpan:s,"data-base-indicator-testid":l,"data-testid":c="timeline"})=>{const d=t=>"string"==typeof t?e(Il.Body,Object.assign({className:"timeline-item-content-text"},{children:t})):e(n,{children:t}),u=t=>"string"==typeof t?e(pL,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):e(n,{children:t}),h=e=>e.slice(0,2).map(((e,t)=>O(bL,Object.assign({},e,{type:e.type,key:`status-pill-${t}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),p=t=>{switch(t){case"completed":return e(le,{});case"error":return e(se,{});default:return null}};return t(uL,Object.assign({className:i,"data-testid":c,$startCol:o,$colSpan:s},{children:[e(hL,Object.assign({id:"timeline-title"},{children:a})),r.map(((n,r)=>{const{title:i,content:a,statuses:o,variant:s}=n,c=l?`circleindicator${r+1}_div_${l}`:"circleindicator",f=s||(0===r?"current":"upcoming-active");return t(fL,{children:[t(dL,{children:[e(lL,Object.assign({"data-testid":c,$variant:f},{children:p(f)})),e(cL,{$variant:f})]}),t(gL,Object.assign({className:"timeline-item-content"},{children:[u(i),o&&e(mL,{children:h(o)}),d(a)]}))]},`timeline-item-${r}`)}))]}))},yL=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],xL=252,wL=N`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,$L=M(Hf)`
    color: ${ml.Neutral[3]};
    svg {
        ${e=>{if(e.$loading)return E`
                    animation: ${wL} 4s linear infinite;
                `}}
    }
`,SL=M.div`
    display: flex;
    padding-bottom: 1rem;
    justify-content: space-between;
`,kL=M.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
`,OL=M(Il.H6)`
    color: ${ml.Neutral[3]};
`,CL=M(cf)`
    width: 400px;
`,DL=r=>{var{selectedDate:i,loading:a,tableContainerRef:o,totalRecords:s,onPreviousDayClick:l,onNextDayClick:c,onRefresh:d,onCalendarDateSelect:u}=r,h=lt(r,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const p=()=>{o.current&&(o.current.scrollTop=0)},f=()=>{d&&(p(),d())};return t(SL,{children:[e(CL,Object.assign({selectedDate:i,loading:a},h,{onRightArrowClick:e=>{p(),c(e)},onLeftArrowClick:e=>{p(),l(e)},onCalendarDateSelect:u})),void 0===s?e(n,{}):t(kL,{children:[t(OL,Object.assign({"data-testid":"timetable-records-results",weight:"semibold"},{children:[s," results found"]})),d&&e($L,Object.assign({"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:a,onClick:f,$loading:a},{children:e(ce,{})}))]})]})},jL=M.div`
    display: flex;
    width: 100%;
`,TL=M.div`
    border-bottom: 1px solid ${ml.Neutral[5]};
    ${e=>{if(e.$isOnTheHour)return E`
                box-shadow: inset -0.5px 0px ${ml.Accent.Light[1]};
            `}}
`,_L=M.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,ML=M.div`
    width: 2px;
    height: 100%;
`,EL=M.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: 4px;
    box-sizing: border-box;
    padding: 4px;
    ${({$status:e,$bgColour:t,$isClickable:n})=>{switch(e){case"blocked":return E`
                    background: repeating-linear-gradient(
                        135deg,
                        #e0e4e5 0px 6px,
                        #ecefef 6px 12px
                    );
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;case"filled":return E`
                    background: ${t};
                    &:hover {
                        cursor: ${n?"pointer":"default"};
                    }
                `;case"disabled":return E`
                    background: ${ml.Neutral[6]};
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;default:return E`
                    &:hover {
                        background-color: ${n?ml.Accent.Light[5]:""};
                        cursor: ${n?"pointer":"default"};
                    }
                `}}}
`,NL=M(Il.H6)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,AL=M(Il.XSmall)`
    color: ${ml.Neutral[3]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,IL=i.memo((({id:n,startTime:r,endTime:i,title:a,subtitle:o,status:s,intervalWidth:l,rowBarColor:c,containerRef:d,customPopover:u,onClick:h})=>{const p=0===od(i,"HH:mm").get("minutes"),f=kd.getTimeDiffInMinutes(r,i)/15*l-2,g=!!h||u&&"click"===u.trigger;return e((({wrapper:e,children:t})=>u?e(t):t),Object.assign({wrapper:t=>(t=>{const n={position:"bottom-start",rootNode:d,customOffset:u.offset,children:t,trigger:u.trigger,delay:u.delay,popoverContent:u.content};return e(vx,Object.assign({},n,{children:t}))})(t)},{children:e(TL,Object.assign({"data-testid":"block-container",$isOnTheHour:p},{children:t(_L,{children:[t(EL,Object.assign({$width:f,$status:s,$bgColour:c,$isClickable:g,onClick:e=>{h&&h({id:n,startTime:r,endTime:i,status:s,title:a,subtitle:o,customPopover:u},e)}},{children:[a&&e(NL,Object.assign({weight:"semibold"},{children:a})),o&&e(AL,Object.assign({weight:"bold"},{children:o}))]})),e(ML,{})]})}),"block-container-key")}))})),BL=t=>{var{id:n,timetableMinTime:r,timetableMaxTime:i,rowMinTime:a=r,rowMaxTime:o=i,rowCells:s,rowBarColor:l,intervalWidth:c,containerRef:d,outOfRangeCellPopover:u}=t,h=lt(t,["id","timetableMinTime","timetableMaxTime","rowMinTime","rowMaxTime","rowCells","rowBarColor","intervalWidth","containerRef","outOfRangeCellPopover"]);const p=h["data-testid"]||"timetable-row",f=m((()=>{const e=[];od(r,"HH:mm").isBefore(od(a,"HH:mm"))&&e.push({id:n,startTime:r,endTime:a,status:"blocked",customPopover:u});const t=[...s].sort(((e,t)=>{const n=od(e.startTime,"HH:mm"),r=od(t.startTime,"HH:mm");return n.isBefore(r)?-1:n.isAfter(r)?1:0}));return t.forEach(((t,r)=>{var i;const{endTime:a}=t;e.push(t);const l=od((null===(i=s[r+1])||void 0===i?void 0:i.startTime)||o,"HH:mm");let c=od(a,"HH:mm");for(;c.isBefore(l);)if(d=l,c.get("hour")!=d.get("hour")){const t=c.add(1,"hour").startOf("hour");e.push({id:n,startTime:c.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),c=t}else e.push({id:n,startTime:c.format("HH:mm").toString(),endTime:l.format("HH:mm").toString(),status:"disabled"}),c=l;var d})),od(i,"HH:mm").isAfter(od(o,"HH:mm"))&&e.push({id:n,startTime:o,endTime:i,status:"blocked",customPopover:u}),e}),[n,r,i,a,o,s,u]);return e(jL,Object.assign({"data-testid":p},h,{children:f.map(((t,n)=>e(IL,Object.assign({},t,{intervalWidth:c,rowBarColor:l,containerRef:d}),`${n}-row-cell-key`)))}))},PL=M.div``,LL=M.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${xL}px auto;
`,FL=M.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${xL}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return E`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,RL=M.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    width: ${xL}px;
    z-index: 2;
    border-bottom: 1px solid ${ml.Neutral[5]};
    ${e=>e.$isScrolledX||e.$isScrolledY?E`
                box-shadow: 0.125rem 0.125rem 0.5rem ${ml.Neutral[5]};
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
`,zL=M.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: white;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,HL=M.div`
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
    ${e=>{if(e.$isScrolled)return E`
                box-shadow: 0rem 0.125rem 0.5rem ${ml.Neutral[5]};
            `}};
`,WL=M.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: 0.25rem;
`,VL=M(Il.H6)`
    color: ${ml.Neutral[3]};
`,YL=M.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,UL=M.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: white;
    width: ${xL}px;
    height: ${68}px;
    text-align: right;
    padding: 0 1rem 0 2rem;
    border-bottom: 1px solid ${ml.Neutral[5]};
    border-left: 1px solid ${ml.Accent.Light[1]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?E`
                box-shadow: 0.125rem 0.125rem 0.5rem ${ml.Neutral[5]};
            `:E`
                box-shadow: inset -0.5px 0px ${ml.Accent.Light[1]};
            `};
`,KL=M(Il.H5)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${ml.Primary};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,XL=M(Il.XSmall)`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${ml.Neutral[3]};
    ${e=>{if(!e.$show)return E`
                display: none;
            `}}
`,qL=M(Fc)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,GL=M(rp)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 5rem 0 5rem 0;
`,ZL=M.div`
    display: flex;
    border-bottom: 1px solid ${ml.Neutral[5]};
`,QL=M.div`
    border-right: 0.5px solid ${ml.Accent.Light[1]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: 20px 12px 20px 12px;
`,JL=N`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,eF=M.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${ml.Neutral[6]} 8%,
        ${ml.Neutral[7]} 18%,
        ${ml.Neutral[6]} 33%
    );
    background-size: 800px 104px;
    animation: ${JL} 1.5s forwards infinite;
`,tF=M(vx)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,nF=r=>{var{date:i,emptyContentMessage:s,rowData:l,loading:c,minTime:d="00:00",maxTime:h="23:00",minDate:p,maxDate:f,totalRecords:g,showCurrentDateAsToday:m,showDateAsShortForm:b,onPage:v,onRefresh:y,onNextDayClick:x,onPreviousDayClick:w,onCalendarDateSelect:$}=r,S=lt(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const k=S["data-testid"]||"timetable",C=Ph.roundToNearestHour(d),D=Ph.roundToNearestHour(h,!0),j=Ph.generateHourlyIntervals(C,D),T=0===g||MO.isEmpty(l),_=T||l.length===g,M=a(null),E=a(null),[N,A]=o(!1),[I,B]=o(!1),[P,L]=o(0),[F,R]=o(!1);u((()=>{const e=MO.throttle((()=>{if(M.current&&(A(M.current.scrollLeft>0),B(M.current.scrollTop>0)),F)return;const{scrollTop:e,clientHeight:t,scrollHeight:n}=M.current;Math.ceil(e+t)>=n-1&&!_&&v&&!c&&(R(!0),v())}),100),t=M.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[_,F,c,v]),u((()=>{R(!1)}),[l]);ln({onResize:()=>{if(M.current){const e=Math.ceil(60*j.length/15),t=(M.current.clientWidth-xL)/e;L(t>21?t:21)}},targetRef:M,refreshMode:"debounce",refreshRate:50});const z=(()=>{let e=0;const t=yL.length;return()=>{const n=yL[e];return e=(e+1)%t,n}})(),H=({wrapper:e,children:t})=>e(t),W=()=>{if(!c&&F)return e(UL,Object.assign({$isScrolled:N},{children:e(eF,{})}))},V=()=>{if(!c&&F)return e(ZL,Object.assign({"data-testid":"lazy-loader"},{children:j.map(((t,n)=>e(QL,Object.assign({$width:4*P},{children:e(eF,{})}),`lazy-load-cell-${n}`)))}))};return t(PL,T?Object.assign({},S,{"data-testid":k},{children:[e(DL,{selectedDate:i,loading:c||F,tableContainerRef:M,minDate:p,maxDate:f,totalRecords:g,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),e(LL,Object.assign({className:"empty-container"},{children:c?e(qL,{$isEmptyContent:T}):e(GL,{type:"no-item-found",description:s})}))]}):Object.assign({},S,{"data-testid":k},{children:[e(DL,{"data-id":"timetable-date-navigator",selectedDate:i,loading:c||F,tableContainerRef:M,minDate:p,maxDate:f,totalRecords:g,showCurrentDateAsToday:m,showDateAsShortForm:b,onPreviousDayClick:w,onNextDayClick:x,onRefresh:y,onCalendarDateSelect:$}),t(FL,Object.assign({"data-id":"timetable-container","data-testid":"timetable-container",ref:M,$loading:c,$allRecordsLoaded:_||!v},{children:[e(RL,{$isScrolledY:I,$isScrolledX:N}),e(zL,Object.assign({$numOfRows:l.length,$isScrolled:N,"data-testid":"row-header-column-id"},{children:t(n,{children:[l.map(((n,r)=>e(H,Object.assign({wrapper:e=>((e,t)=>{if(!e.rowHeaderPopover)return t;const n={position:"bottom-start",rootNode:M,customOffset:e.rowHeaderPopover.offset,children:t,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return O(tF,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),t)})(n,e)},{children:t(UL,Object.assign({$isScrolled:N},{children:[e(KL,Object.assign({$isClickable:!!n.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(n,e),weight:"semibold","data-testid":`${n.id}-row-header-title`},{children:n.name})),e(XL,Object.assign({weight:"bold",$show:!!n.subtitle,"data-testid":`${n.id}-row-header-subtitle`},{children:n.subtitle}))]}),`${n.id}-row-header`)}),r))),W()]})})),e(HL,Object.assign({$numOfColumns:j.length,$isScrolled:I},{children:j.map((t=>e(WL,Object.assign({"data-testid":`${t}-column`},{children:e(VL,Object.assign({weight:"semibold"},{children:t}))}),`${t}-column-key`)))})),c?e(qL,{$isEmptyContent:T}):t(YL,Object.assign({"data-testid":"content-container-id",ref:E,$numOfRows:l.length},{children:[l.map(((t,n)=>e(BL,Object.assign({timetableMinTime:C,timetableMaxTime:D,rowBarColor:z(),intervalWidth:P,containerRef:E},t),`${n}-row-bar`))),V()]}))]}))]}))},rF=e=>{switch(e.$type){case"success":return ml.Validation.Green;case"warning":return ml.Validation.Orange;case"error":return ml.Validation.Red;case"info":return ml.Validation.Blue;default:return}},iF=M(za.div)`
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

    ${e=>E`
            background: ${rF(e).Background};
            border: 1px solid ${rF(e).Border};
            color: ${rF(e).Text};
        `};
`,aF=M.div`
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
`,oF=M.div`
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
                color: ${rF(e).Icon};
            }
        `};
`,sF=M.div`
    display: flex;
    flex-direction: column;
`,lF=M(Il.H4)`
    display: flex;

    ${e=>E`
            color: ${rF(e).Text};
        `}
`,cF=M.div`
    ${e=>E`
            p {
                color: ${rF(e).Text};
            }
        `}
`,dF=M(cc.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${yl.MaxWidth.mobileL} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,uF=M($l)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>E`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${rF(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${yl.MaxWidth.mobileL} {
                align-self: center;
            }
        `};
`,hF=4e3,pF=n=>{var{type:r="success",title:a,label:s,autoDismiss:l,autoDismissTime:c=hF,onDismiss:d,fixed:h=!0,actionButton:p}=n,f=lt(n,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[g,m]=o(!1),b=Vc.useMediaQuery({maxWidth:bl.tablet});u((()=>{m(!0)}),[]),u((()=>{if(!l)return;const e=setTimeout((()=>{m(!1)}),c);return()=>clearTimeout(e)}),[l]);const v=Sa({opacity:g?1:0,transform:g?b?"translateY(0%)":"translateX(0%)":b?"translateY(-1500%)":"translateX(150%)",config:{easing:kr.easeInOutQuart,duration:1e3},onRest:()=>{g||null==d||d()}});return t(iF,Object.assign({style:v,$type:r,$fixed:h},f,{children:[t(aF,{children:[t(oF,Object.assign({$type:r},{children:[(()=>{switch(r){case"success":return e(he,{});case"warning":return e(ue,{});case"error":return e(se,{});case"info":return e(de,{});default:return null}})(),t(sF,{children:[a&&(i.isValidElement(a)?a:e(lF,Object.assign({$type:r,weight:"semibold"},{children:a}))),s&&e(cF,Object.assign({$type:r},{children:i.isValidElement(s)?s:e(a?Il.BodySmall:Il.Body,{children:s})}))]})]})),p&&e(dF,Object.assign({styleType:"light",onClick:p.onClick},{children:p.label}))]}),e(uF,Object.assign({$type:r,onClick:()=>{m(!1)}},{children:e(J,{})}))]}))},fF=M.div`
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

                ${yl.MaxWidth.mobileL} {
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

                ${yl.MaxWidth.mobileL} {
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

                ${yl.MaxWidth.mobileL} {
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

                ${yl.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?E`
            visibility: "visible";
            opacity: 1;
            transition: ${Fl.Base};
            z-index: 2;
        `:E`
            visibility: "hidden";
            opacity: 0;
            transition: ${Fl.Base};
            z-index: -1;
        `}
`,gF=M(Gu)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,mF=M.div`
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
                        border-color: ${ml.Neutral[8]} transparent
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
                        border-color: transparent ${ml.Neutral[8]}
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
                            ${ml.Neutral[8]};
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
                            ${ml.Neutral[8]} transparent;
                    }
                `}}}
`,bF=M.div`
    position: relative;
`,vF=n=>{var{visible:r,position:i="top",children:s}=n,l=lt(n,["visible","position","children"]);const c=l["data-testid"]||"tooltip",[d,h]=o(i),p=a(null);u((()=>(g(),window.addEventListener("resize",yh(f,300)),()=>{window.removeEventListener("resize",yh(f,300))})),[]);const f=()=>{g()},g=()=>{if(p.current){const e=p.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":h("right");break;case"right":h("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":h("left");break;case"left":h("top")}else h(i)}};return t(fF,Object.assign({position:d,"data-testid":c,visible:r,ref:p},l,{children:[e(gF,{children:"string"==typeof s?e(Il.BodySmall,{children:s}):s}),e(mF,{position:d})]}))},yF=(n,r)=>i=>{const{tooltipVisible:a,position:o}=i,s=lt(i,["tooltipVisible","position"]);return t(bF,{children:[e(n,Object.assign({},s)),e(vF,Object.assign({visible:a,position:o},{children:r.content}))]})},xF=E`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${yl.MaxWidth.mobileL} {
        grid-column: 1 / -1;
    }
`,wF=M(Ix.Content)`
    background: ${({$background:e})=>e?ml.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,$F=M(Il.H3)`
    margin-bottom: 1rem;
    ${xF}
`,SF=M(Il.Body)`
    margin-bottom: 2rem;
    ${xF}
`,kF=M.div`
    ${xF}
`,OF=M.ul`
    ${xF}
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
`,CF=i.forwardRef(((t,n)=>{var{stretch:r}=t,i=lt(t,["stretch"]);return e(OF,Object.assign({ref:n,$stretch:r},i))})),DF=M.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return E`
                    grid-column: auto / span 4;
                `;case"full":return E`
                    grid-column: auto / span 8;
                `}}}

    ${yl.MaxWidth.tablet} {
        grid-column: auto / span 8;
    }

    ${yl.MaxWidth.mobileL} {
        grid-column: auto / span 4;
    }

    overflow-wrap: break-word;
`,jF=M.div`
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
`,TF=M.button`
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
`,_F=M.span`
    color: ${ml.Neutral[3]};
`,MF=M(nc)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${ml.Neutral[3]} transparent transparent transparent;
    }
`,EF=M(ze)`
    color: ${ml.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,NF=M.span`
    color: ${ml.Validation.Orange.Text};
`,AF=M.span`
    ${Al.getTextStyle("Body","semibold")}
    color: ${ml.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,IF=M(Sc)`
    margin-top: 0.5rem;
`,BF=({label:r,value:i,displayWidth:a="full",maskState:s,maskLoadingState:l,maskChar:c="•",maskRange:d,unmaskRange:h,maskRegex:p,disableMaskUnmask:f,alert:g,maskTransformer:m,onMask:b,onUnmask:v,onTryAgain:y})=>{const[x,w]=o(s);u((()=>{w(s)}),[s]);const $=()=>{switch("fail"===l&&y&&y(),x){case"masked":v&&v(),w("unmasked");break;case"unmasked":b&&b(),w("masked")}},S=()=>"string"!=typeof i?i:"masked"===x?Dd.maskValue(i,{maskChar:c,maskRange:d,unmaskRange:h,maskRegex:p,maskTransformer:m}):i,k=()=>{switch(l){case"fail":return t(n,{children:[e(EF,{}),e(NF,{children:"Error"}),e(AF,{children:"Try again?"})]});case"loading":return t(n,{children:[e(MF,{}),e(_F,{children:"Retrieving..."})]});default:return t(n,{children:[S(),e(jF,{children:"masked"===x?e(Fe,{"data-testid":"masked-icon"}):e(Re,{"data-testid":"unmasked-icon"})})]})}};return t(DF,Object.assign({$widthStyle:a},{children:[e(jx,{children:r}),"string"!=typeof i?i:x?f?e(Il.Body,{children:S()}):e(TF,Object.assign({"data-testid":"clickable-label",onClick:$,"aria-busy":"loading"===l,"aria-live":"polite",type:"button"},{children:k()})):e(Il.Body,{children:i}),g&&e(IF,Object.assign({sizeType:"small"},g))]}))},PF=Object.assign((r=>{var{items:i,title:a,description:o,topSection:s,bottomSection:l,children:c,background:d=!0,stretch:u,onMask:h,onUnmask:p,onTryAgain:f}=r,g=lt(r,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{h&&h(e)},b=e=>()=>{p&&p(e)},v=e=>()=>{f&&f(e)},y=()=>{if(i&&i.length>0){const t=i.map(((t,n)=>e(BF,Object.assign({},t,{onMask:m(t),onUnmask:b(t),onTryAgain:v(t)}),n)));return e(OF,Object.assign({$stretch:u},{children:t}))}return null};return e(wF,Object.assign({$background:d},g,{type:"grid"},{children:c||t(n,{children:[a&&e($F,Object.assign({weight:"semibold",$stretch:u},{children:a})),o&&e(SF,Object.assign({$stretch:u},{children:o})),s&&e(kF,Object.assign({"data-id":"top-section",$stretch:u},{children:s})),y(),l&&e(kF,Object.assign({"data-id":"bottom-section",$stretch:u},{children:l}))]})}))}),{ItemSection:CF,Item:BF});export{sN as $,fc as A,Ec as B,ml as C,$p as D,gg as E,Mg as F,yT as G,zE as H,HE as I,cw as J,Hf as K,Oc as L,VE as M,fw as N,mO as O,jD as P,MD as Q,ED as R,hg as S,ej as T,rw as U,tj as V,lj as W,fj as X,Ix as Y,aN as Z,ct as _,pg as a,EO as a0,dN as a1,hN as a2,yl as a3,xl as a4,Xf as a5,lA as a6,cA as a7,sA as a8,xA as a9,Ac as aA,Ic as aB,Bc as aC,Pc as aD,pl as aE,lT as aF,$P as aG,GP as aH,sL as aI,vL as aJ,dT as aK,nF as aL,pF as aM,Hj as aN,vF as aO,yF as aP,Fl as aQ,PF as aR,bT as aS,SA as aa,CA as ab,MA as ac,_f as ad,YA as ae,KD as af,qA as ag,nI as ah,tI as ai,mx as aj,$x as ak,vx as al,GD as am,qI as an,JI as ao,sj as ap,wB as aq,zB as ar,nP as as,aP as at,Al as au,jl as av,Il as aw,rc as ax,Dj as ay,Nc as az,Sc as b,Ha as c,Tc as d,Fc as e,id as f,Va as g,Hd as h,cc as i,Vd as j,Ku as k,Gu as l,eh as m,Hh as n,af as o,cf as p,xf as q,oc as r,Cf as s,Lf as t,rp as u,Vh as v,rm as w,l_ as x,z_ as y,lM as z};
//# sourceMappingURL=index.3ae2189b.js.map
