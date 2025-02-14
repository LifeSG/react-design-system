import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,useCallback as b,useMemo as g,forwardRef as f,useContext as m}from"react";import p,{css as y,useTheme as v,keyframes as x}from"styled-components";import{findDOMNode as w}from"react-dom";import{ExclamationCircleFillIcon as $}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as F}from"@lifesg/react-icons/square";import{SquareTickFillIcon as D}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as E}from"@lifesg/react-icons/tick";import{CrossIcon as C}from"@lifesg/react-icons/cross";import{MagnifierIcon as O}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as A}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as z}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as j,useFloating as B,autoUpdate as _,offset as S,flip as k,shift as M,limitShift as T,size as Y,useTransitionStyles as L,useClick as I,useDismiss as R,useInteractions as W,FloatingPortal as H,FloatingFocusManager as P}from"@floating-ui/react";var N=function(e,r){return N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},N(e,r)};var U=function(){return U=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},U.apply(this,arguments)};var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Z=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},q="object"==typeof V&&V&&V.Object===Object&&V,J="object"==typeof self&&self&&self.Object===Object&&self,X=q||J||Function("return this")(),G=X,Q=function(){return G.Date.now()},K=/\s/;var ee=function(e){for(var r=e.length;r--&&K.test(e.charAt(r)););return r},re=/^\s+/;var te=function(e){return e?e.slice(0,ee(e)+1).replace(re,""):e},ne=X.Symbol,ie=ne,oe=Object.prototype,ae=oe.hasOwnProperty,se=oe.toString,le=ie?ie.toStringTag:void 0;var de=function(e){var r=ae.call(e,le),t=e[le];try{e[le]=void 0;var n=!0}catch(e){}var i=se.call(e);return n&&(r?e[le]=t:delete e[le]),i},ce=Object.prototype.toString;var ue=de,he=function(e){return ce.call(e)},be=ne?ne.toStringTag:void 0;var ge=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":be&&be in Object(e)?ue(e):he(e)},fe=function(e){return null!=e&&"object"==typeof e};var me=te,pe=Z,ye=function(e){return"symbol"==typeof e||fe(e)&&"[object Symbol]"==ge(e)},ve=/^[-+]0x[0-9a-f]+$/i,xe=/^0b[01]+$/i,we=/^0o[0-7]+$/i,$e=parseInt;var Fe=Z,De=Q,Ee=function(e){if("number"==typeof e)return e;if(ye(e))return NaN;if(pe(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=pe(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=me(e);var t=xe.test(e);return t||we.test(e)?$e(e.slice(2),t?2:8):ve.test(e)?NaN:+e},Ce=Math.max,Oe=Math.min;var Ae=function(e,r,t){var n,i,o,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,o=i;return n=i=void 0,d=r,a=e.apply(o,t)}function g(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function f(){var e=De();if(g(e))return m(e);s=setTimeout(f,function(e){var t=r-(e-l);return u?Oe(t,o-(e-d)):t}(e))}function m(e){return s=void 0,h&&n?b(e):(n=i=void 0,a)}function p(){var e=De(),t=g(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(f,r),c?b(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,r),b(l)}return void 0===s&&(s=setTimeout(f,r)),a}return r=Ee(r)||0,Fe(t)&&(c=!!t.leading,o=(u="maxWait"in t)?Ce(Ee(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},p.flush=function(){return void 0===s?a:m(De())},p},ze=Ae,je=Z;var Be=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return je(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),ze(e,r,{leading:n,maxWait:r,trailing:i})},_e=function(e,r,t,n){switch(r){case"debounce":return Ae(e,t,n);case"throttle":return Be(e,t,n);default:return e}},Se=function(e){return"function"==typeof e},ke=function(){return"undefined"==typeof window},Me=function(e){return e instanceof Element||e instanceof HTMLDocument},Te=function(e,r,t,n){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!n||r.height===a&&!t?r:(e&&Se(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!ke()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(ke())return null;if(r)return document.querySelector(r);if(n&&Me(n))return n;if(t.targetRef&&Me(t.targetRef.current))return t.targetRef.current;var i=w(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=Te(s,t.setState.bind(t),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!ke()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Se(r)?"renderProp":Se(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,ke()||(t.resizeHandler=_e(t.createResizeHandler,i,a,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}N(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){ke()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(a,null)}}}(c);var Ye=ke()?u:h;function Le(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,b=e.targetRef,g=e.observerOptions,f=e.onResize,m=o(t),p=o(null),y=null!=b?b:p,v=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Ye((function(){if(!ke()){var e=Te(f,$,c,h);v.current=_e((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!m.current&&!ke()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,g),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,f,g,y.current]),U({ref:y},w)}var Ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Re(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var We=Array.isArray,He="object"==typeof Ie&&Ie&&Ie.Object===Object&&Ie,Pe=He,Ne="object"==typeof self&&self&&self.Object===Object&&self,Ue=Pe||Ne||Function("return this")(),Ve=Ue.Symbol,Ze=Ve,qe=Object.prototype,Je=qe.hasOwnProperty,Xe=qe.toString,Ge=Ze?Ze.toStringTag:void 0;var Qe=function(e){var r=Je.call(e,Ge),t=e[Ge];try{e[Ge]=void 0;var n=!0}catch(e){}var i=Xe.call(e);return n&&(r?e[Ge]=t:delete e[Ge]),i},Ke=Object.prototype.toString;var er=Qe,rr=function(e){return Ke.call(e)},tr=Ve?Ve.toStringTag:void 0;var nr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":tr&&tr in Object(e)?er(e):rr(e)};var ir=function(e){return null!=e&&"object"==typeof e},or=nr,ar=ir;var sr=function(e){return"symbol"==typeof e||ar(e)&&"[object Symbol]"==or(e)},lr=We,dr=sr,cr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ur=/^\w*$/;var hr=function(e,r){if(lr(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!dr(e))||(ur.test(e)||!cr.test(e)||null!=r&&e in Object(r))};var br=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},gr=nr,fr=br;var mr,pr=function(e){if(!fr(e))return!1;var r=gr(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},yr=Ue["__core-js_shared__"],vr=(mr=/[^.]+$/.exec(yr&&yr.keys&&yr.keys.IE_PROTO||""))?"Symbol(src)_1."+mr:"";var xr=function(e){return!!vr&&vr in e},wr=Function.prototype.toString;var $r=function(e){if(null!=e){try{return wr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fr=pr,Dr=xr,Er=br,Cr=$r,Or=/^\[object .+?Constructor\]$/,Ar=Function.prototype,zr=Object.prototype,jr=Ar.toString,Br=zr.hasOwnProperty,_r=RegExp("^"+jr.call(Br).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Sr=function(e,r){return null==e?void 0:e[r]},kr=function(e){return!(!Er(e)||Dr(e))&&(Fr(e)?_r:Or).test(Cr(e))},Mr=Sr;var Tr=function(e,r){var t=Mr(e,r);return kr(t)?t:void 0},Yr=Tr(Object,"create"),Lr=Yr;var Ir=function(){this.__data__=Lr?Lr(null):{},this.size=0};var Rr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Wr=Yr,Hr=Object.prototype.hasOwnProperty;var Pr=function(e){var r=this.__data__;if(Wr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Hr.call(r,e)?r[e]:void 0},Nr=Yr,Ur=Object.prototype.hasOwnProperty;var Vr=function(e){var r=this.__data__;return Nr?void 0!==r[e]:Ur.call(r,e)},Zr=Yr;var qr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Zr&&void 0===r?"__lodash_hash_undefined__":r,this},Jr=Ir,Xr=Rr,Gr=Pr,Qr=Vr,Kr=qr;function et(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}et.prototype.clear=Jr,et.prototype.delete=Xr,et.prototype.get=Gr,et.prototype.has=Qr,et.prototype.set=Kr;var rt=et;var tt=function(){this.__data__=[],this.size=0};var nt=function(e,r){return e===r||e!=e&&r!=r},it=nt;var ot=function(e,r){for(var t=e.length;t--;)if(it(e[t][0],r))return t;return-1},at=ot,st=Array.prototype.splice;var lt=function(e){var r=this.__data__,t=at(r,e);return!(t<0)&&(t==r.length-1?r.pop():st.call(r,t,1),--this.size,!0)},dt=ot;var ct=function(e){var r=this.__data__,t=dt(r,e);return t<0?void 0:r[t][1]},ut=ot;var ht=function(e){return ut(this.__data__,e)>-1},bt=ot;var gt=function(e,r){var t=this.__data__,n=bt(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},ft=tt,mt=lt,pt=ct,yt=ht,vt=gt;function xt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}xt.prototype.clear=ft,xt.prototype.delete=mt,xt.prototype.get=pt,xt.prototype.has=yt,xt.prototype.set=vt;var wt=xt,$t=Tr(Ue,"Map"),Ft=rt,Dt=wt,Et=$t;var Ct=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Ot=function(e,r){var t=e.__data__;return Ct(r)?t["string"==typeof r?"string":"hash"]:t.map},At=Ot;var zt=function(e){var r=At(this,e).delete(e);return this.size-=r?1:0,r},jt=Ot;var Bt=function(e){return jt(this,e).get(e)},_t=Ot;var St=function(e){return _t(this,e).has(e)},kt=Ot;var Mt=function(e,r){var t=kt(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Tt=function(){this.size=0,this.__data__={hash:new Ft,map:new(Et||Dt),string:new Ft}},Yt=zt,Lt=Bt,It=St,Rt=Mt;function Wt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Wt.prototype.clear=Tt,Wt.prototype.delete=Yt,Wt.prototype.get=Lt,Wt.prototype.has=It,Wt.prototype.set=Rt;var Ht=Wt,Pt=Ht;function Nt(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(Nt.Cache||Pt),t}Nt.Cache=Pt;var Ut=Nt;var Vt=function(e){var r=Ut(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Zt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qt=/\\(\\)?/g,Jt=Vt((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Zt,(function(e,t,n,i){r.push(n?i.replace(qt,"$1"):t||e)})),r}));var Xt=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Gt=We,Qt=sr,Kt=Ve?Ve.prototype:void 0,en=Kt?Kt.toString:void 0;var rn=function e(r){if("string"==typeof r)return r;if(Gt(r))return Xt(r,e)+"";if(Qt(r))return en?en.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},tn=rn;var nn=We,on=hr,an=Jt,sn=function(e){return null==e?"":tn(e)};var ln=function(e,r){return nn(e)?e:on(e,r)?[e]:an(sn(e))},dn=sr;var cn=function(e){if("string"==typeof e||dn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},un=ln,hn=cn;var bn=function(e,r){for(var t=0,n=(r=un(r,e)).length;null!=e&&t<n;)e=e[hn(r[t++])];return t&&t==n?e:void 0},gn=bn;var fn=function(e,r,t){var n=null==e?void 0:gn(e,r);return void 0===n?t:n},mn=Re(fn);const pn=(e,r,t)=>mn(t,r)||mn(e,r),yn=(e,r)=>{const t=r||e.defaultValue;return mn(e.collections,t)},vn={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},xn=e=>r=>{var t;const n=r.theme,i=yn(vn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?pn(i,e,n.overrides.motion):i[e]},wn={"duration-150":xn("duration-150"),"duration-250":xn("duration-250"),"duration-350":xn("duration-350"),"duration-500":xn("duration-500"),"duration-800":xn("duration-800"),"duration-1000":xn("duration-1000"),"ease-default":xn("ease-default"),"ease-standard":xn("ease-standard"),"ease-entrance":xn("ease-entrance"),"ease-exit":xn("ease-exit")},$n={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Fn=e=>r=>{var t;const n=r.theme,i=yn($n,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?pn(i,e,n.overrides.primitiveColour):i[e]},Dn={"brand-10":Fn("brand-10"),"brand-20":Fn("brand-20"),"brand-30":Fn("brand-30"),"brand-40":Fn("brand-40"),"brand-50":Fn("brand-50"),"brand-60":Fn("brand-60"),"brand-70":Fn("brand-70"),"brand-80":Fn("brand-80"),"brand-90":Fn("brand-90"),"brand-95":Fn("brand-95"),"brand-100":Fn("brand-100"),"primary-10":Fn("primary-10"),"primary-20":Fn("primary-20"),"primary-30":Fn("primary-30"),"primary-40":Fn("primary-40"),"primary-50":Fn("primary-50"),"primary-60":Fn("primary-60"),"primary-70":Fn("primary-70"),"primary-80":Fn("primary-80"),"primary-90":Fn("primary-90"),"primary-95":Fn("primary-95"),"primary-100":Fn("primary-100"),"secondary-10":Fn("secondary-10"),"secondary-20":Fn("secondary-20"),"secondary-30":Fn("secondary-30"),"secondary-40":Fn("secondary-40"),"secondary-50":Fn("secondary-50"),"secondary-60":Fn("secondary-60"),"secondary-70":Fn("secondary-70"),"secondary-80":Fn("secondary-80"),"secondary-90":Fn("secondary-90"),"secondary-95":Fn("secondary-95"),"secondary-100":Fn("secondary-100"),"neutral-10":Fn("neutral-10"),"neutral-20":Fn("neutral-20"),"neutral-30":Fn("neutral-30"),"neutral-40":Fn("neutral-40"),"neutral-50":Fn("neutral-50"),"neutral-60":Fn("neutral-60"),"neutral-70":Fn("neutral-70"),"neutral-80":Fn("neutral-80"),"neutral-90":Fn("neutral-90"),"neutral-95":Fn("neutral-95"),"neutral-100":Fn("neutral-100"),"success-10":Fn("success-10"),"success-20":Fn("success-20"),"success-30":Fn("success-30"),"success-40":Fn("success-40"),"success-50":Fn("success-50"),"success-60":Fn("success-60"),"success-70":Fn("success-70"),"success-80":Fn("success-80"),"success-90":Fn("success-90"),"success-95":Fn("success-95"),"success-100":Fn("success-100"),"warning-10":Fn("warning-10"),"warning-20":Fn("warning-20"),"warning-30":Fn("warning-30"),"warning-40":Fn("warning-40"),"warning-50":Fn("warning-50"),"warning-60":Fn("warning-60"),"warning-70":Fn("warning-70"),"warning-80":Fn("warning-80"),"warning-90":Fn("warning-90"),"warning-95":Fn("warning-95"),"warning-100":Fn("warning-100"),"error-10":Fn("error-10"),"error-20":Fn("error-20"),"error-30":Fn("error-30"),"error-40":Fn("error-40"),"error-50":Fn("error-50"),"error-60":Fn("error-60"),"error-70":Fn("error-70"),"error-80":Fn("error-80"),"error-90":Fn("error-90"),"error-95":Fn("error-95"),"error-100":Fn("error-100"),"info-10":Fn("info-10"),"info-20":Fn("info-20"),"info-30":Fn("info-30"),"info-40":Fn("info-40"),"info-50":Fn("info-50"),"info-60":Fn("info-60"),"info-70":Fn("info-70"),"info-80":Fn("info-80"),"info-90":Fn("info-90"),"info-95":Fn("info-95"),"info-100":Fn("info-100"),white:Fn("white"),black:Fn("black"),"primary-inverse":Fn("primary-inverse")},En={text:Fn("neutral-20"),"text-subtle":Fn("neutral-30"),"text-subtler":Fn("neutral-50"),"text-subtlest":Fn("neutral-60"),"text-primary":Fn("primary-50"),"text-hover":Fn("primary-40"),"text-selected":Fn("primary-50"),"text-selected-hover":Fn("primary-40"),"text-disabled":Fn("neutral-50"),"text-disabled-subtle":Fn("neutral-60"),"text-disabled-subtlest":Fn("neutral-80"),"text-selected-disabled":Fn("neutral-20"),"text-success":Fn("success-40"),"text-warning":Fn("warning-40"),"text-error":Fn("error-40"),"text-info":Fn("info-40"),"text-inverse":Fn("white"),icon:Fn("neutral-50"),"icon-subtle":Fn("neutral-60"),"icon-strongest":Fn("neutral-20"),"icon-primary":Fn("primary-50"),"icon-primary-subtle":Fn("primary-60"),"icon-primary-subtlest":Fn("primary-70"),"icon-hover":Fn("primary-40"),"icon-selected":Fn("primary-50"),"icon-selected-hover":Fn("primary-40"),"icon-disabled":Fn("neutral-50"),"icon-disabled-subtle":Fn("neutral-60"),"icon-selected-disabled":Fn("neutral-60"),"icon-success":Fn("success-50"),"icon-warning":Fn("warning-60"),"icon-error":Fn("error-50"),"icon-error-strong":Fn("error-40"),"icon-info":Fn("info-50"),"icon-inverse":Fn("white"),"icon-primary-inverse":Fn("primary-inverse"),border:Fn("neutral-90"),"border-strong":Fn("neutral-70"),"border-stronger":Fn("neutral-50"),"border-primary":Fn("primary-50"),"border-primary-subtle":Fn("primary-60"),"border-hover":Fn("primary-90"),"border-hover-strong":Fn("primary-60"),"border-selected":Fn("primary-50"),"border-selected-subtle":Fn("primary-70"),"border-selected-subtlest":Fn("primary-90"),"border-selected-hover":Fn("primary-40"),"border-focus":Fn("primary-60"),"border-focus-strong":Fn("primary-50"),"border-disabled":Fn("neutral-90"),"border-selected-disabled":Fn("neutral-70"),"border-success":Fn("success-60"),"border-warning":Fn("warning-60"),"border-error":Fn("error-60"),"border-error-focus":Fn("error-60"),"border-error-focus-strong":Fn("error-40"),"border-error-strong":Fn("error-40"),"border-info":Fn("info-60"),bg:Fn("white"),"bg-strong":Fn("neutral-100"),"bg-stronger":Fn("neutral-95"),"bg-strongest":Fn("neutral-90"),"bg-hover":Fn("primary-95"),"bg-hover-strong":Fn("primary-90"),"bg-hover-subtle":Fn("primary-100"),"bg-hover-neutral":Fn("neutral-100"),"bg-hover-neutral-strong":Fn("neutral-90"),"bg-selected":Fn("primary-95"),"bg-selected-hover":Fn("primary-90"),"bg-selected-strong":Fn("primary-90"),"bg-selected-stronger":Fn("primary-70"),"bg-selected-strongest":Fn("primary-50"),"bg-selected-strongest-hover":Fn("primary-40"),"bg-disabled":Fn("neutral-95"),"bg-selected-disabled":Fn("neutral-95"),"bg-selected-stronger-disabled":Fn("neutral-70"),"bg-success":Fn("success-100"),"bg-success-hover":Fn("success-95"),"bg-success-strong":Fn("success-50"),"bg-success-strong-hover":Fn("success-40"),"bg-warning":Fn("warning-100"),"bg-warning-hover":Fn("warning-95"),"bg-warning-strong":Fn("warning-50"),"bg-warning-strong-hover":Fn("warning-40"),"bg-info":Fn("info-100"),"bg-info-hover":Fn("info-95"),"bg-info-strong":Fn("info-50"),"bg-info-strong-hover":Fn("info-40"),"bg-error":Fn("error-100"),"bg-error-hover":Fn("error-95"),"bg-error-strong":Fn("error-50"),"bg-error-strong-hover":Fn("error-40"),"bg-inverse":Fn("neutral-20"),"bg-inverse-subtle":Fn("neutral-30"),"bg-inverse-subtler":Fn("neutral-50"),"bg-inverse-subtlest":Fn("neutral-60"),"bg-inverse-hover":Fn("neutral-40"),"bg-primary":Fn("primary-50"),"bg-primary-subtle":Fn("primary-60"),"bg-primary-subtler":Fn("primary-95"),"bg-primary-subtlest":Fn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Fn("primary-40"),"bg-primary-subtlest-hover":Fn("primary-90"),"bg-primary-subtlest-selected":Fn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Fn("primary-50"),"hyperlink-hover":Fn("primary-40"),"hyperlink-visited":Fn("primary-40"),"hyperlink-inverse":Fn("primary-inverse"),"focus-ring":Fn("black"),"focus-ring-inverse":Fn("white")},Cn={collections:{lifesg:En,bookingsg:En,rbs:En,mylegacy:En,ccube:En},defaultValue:"lifesg"},On=e=>r=>{var t;const n=r.theme,i=yn(Cn,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?pn(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},An={text:On("text"),"text-subtle":On("text-subtle"),"text-subtler":On("text-subtler"),"text-subtlest":On("text-subtlest"),"text-primary":On("text-primary"),"text-hover":On("text-hover"),"text-selected":On("text-selected"),"text-selected-hover":On("text-selected-hover"),"text-disabled":On("text-disabled"),"text-disabled-subtle":On("text-disabled-subtle"),"text-disabled-subtlest":On("text-disabled-subtlest"),"text-selected-disabled":On("text-selected-disabled"),"text-success":On("text-success"),"text-warning":On("text-warning"),"text-error":On("text-error"),"text-info":On("text-info"),"text-inverse":On("text-inverse"),icon:On("icon"),"icon-subtle":On("icon-subtle"),"icon-strongest":On("icon-strongest"),"icon-primary":On("icon-primary"),"icon-primary-subtle":On("icon-primary-subtle"),"icon-primary-subtlest":On("icon-primary-subtlest"),"icon-hover":On("icon-hover"),"icon-selected":On("icon-selected"),"icon-selected-hover":On("icon-selected-hover"),"icon-disabled":On("icon-disabled"),"icon-disabled-subtle":On("icon-disabled-subtle"),"icon-selected-disabled":On("icon-selected-disabled"),"icon-success":On("icon-success"),"icon-warning":On("icon-warning"),"icon-error":On("icon-error"),"icon-error-strong":On("icon-error-strong"),"icon-info":On("icon-info"),"icon-inverse":On("icon-inverse"),"icon-primary-inverse":On("icon-primary-inverse"),border:On("border"),"border-strong":On("border-strong"),"border-stronger":On("border-stronger"),"border-primary":On("border-primary"),"border-primary-subtle":On("border-primary-subtle"),"border-hover":On("border-hover"),"border-hover-strong":On("border-hover-strong"),"border-selected":On("border-selected"),"border-selected-subtle":On("border-selected-subtle"),"border-selected-subtlest":On("border-selected-subtlest"),"border-selected-hover":On("border-selected-hover"),"border-focus":On("border-focus"),"border-focus-strong":On("border-focus-strong"),"border-disabled":On("border-disabled"),"border-selected-disabled":On("border-selected-disabled"),"border-success":On("border-success"),"border-warning":On("border-warning"),"border-error":On("border-error"),"border-error-focus":On("border-error-focus"),"border-error-focus-strong":On("border-error-focus-strong"),"border-error-strong":On("border-error-strong"),"border-info":On("border-info"),bg:On("bg"),"bg-strong":On("bg-strong"),"bg-stronger":On("bg-stronger"),"bg-strongest":On("bg-strongest"),"bg-hover":On("bg-hover"),"bg-hover-strong":On("bg-hover-strong"),"bg-hover-subtle":On("bg-hover-subtle"),"bg-hover-neutral":On("bg-hover-neutral"),"bg-hover-neutral-strong":On("bg-hover-neutral-strong"),"bg-selected":On("bg-selected"),"bg-selected-hover":On("bg-selected-hover"),"bg-selected-strong":On("bg-selected-strong"),"bg-selected-stronger":On("bg-selected-stronger"),"bg-selected-strongest":On("bg-selected-strongest"),"bg-selected-strongest-hover":On("bg-selected-strongest-hover"),"bg-disabled":On("bg-disabled"),"bg-selected-disabled":On("bg-selected-disabled"),"bg-selected-stronger-disabled":On("bg-selected-stronger-disabled"),"bg-success":On("bg-success"),"bg-success-hover":On("bg-success-hover"),"bg-success-strong":On("bg-success-strong"),"bg-success-strong-hover":On("bg-success-strong-hover"),"bg-warning":On("bg-warning"),"bg-warning-hover":On("bg-warning-hover"),"bg-warning-strong":On("bg-warning-strong"),"bg-warning-strong-hover":On("bg-warning-strong-hover"),"bg-info":On("bg-info"),"bg-info-hover":On("bg-info-hover"),"bg-info-strong":On("bg-info-strong"),"bg-info-strong-hover":On("bg-info-strong-hover"),"bg-error":On("bg-error"),"bg-error-hover":On("bg-error-hover"),"bg-error-strong":On("bg-error-strong"),"bg-error-strong-hover":On("bg-error-strong-hover"),"bg-inverse":On("bg-inverse"),"bg-inverse-subtle":On("bg-inverse-subtle"),"bg-inverse-subtler":On("bg-inverse-subtler"),"bg-inverse-subtlest":On("bg-inverse-subtlest"),"bg-inverse-hover":On("bg-inverse-hover"),"bg-primary":On("bg-primary"),"bg-primary-subtle":On("bg-primary-subtle"),"bg-primary-subtler":On("bg-primary-subtler"),"bg-primary-subtlest":On("bg-primary-subtlest"),"bg-available":On("bg-available"),"bg-primary-hover":On("bg-primary-hover"),"bg-primary-subtlest-hover":On("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":On("bg-primary-subtlest-selected"),"overlay-strong":On("overlay-strong"),"overlay-subtle":On("overlay-subtle"),hyperlink:On("hyperlink"),"hyperlink-hover":On("hyperlink-hover"),"hyperlink-visited":On("hyperlink-visited"),"hyperlink-inverse":On("hyperlink-inverse"),"focus-ring":On("focus-ring"),"focus-ring-inverse":On("focus-ring-inverse")},zn={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:_n["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:An.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return y`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},jn=e=>r=>{var t;const n=r.theme,i=yn(zn,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${pn(i,e,n.overrides.border)}px`:`${i[e]}px`},Bn=e=>1===e.length&&"theme"in e[0],_n={"width-010":jn("width-010"),"width-020":jn("width-020"),"width-040":jn("width-040"),solid:(Sn="solid",e=>{var r;const t=e.theme,n=yn(zn,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?pn(n,Sn,t.overrides.border):n[Sn];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=Bn(r)?[]:r,o=Bn(r)?r[0]:t,a=o.theme,s=yn(zn,null==a?void 0:a.borderScheme);return((null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.border)?pn(s,e,a.overrides.border):s[e])(...i)(o)})("dashed-default")};var Sn;const kn={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Mn=e=>r=>{var t;const n=r.theme,i=yn(kn,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?pn(i,e,n.overrides.breakpoint):i[e],o},Tn={"xxs-min":Mn("xxs-min"),"xxs-max":Mn("xxs-max"),"xs-min":Mn("xs-min"),"xs-max":Mn("xs-max"),"sm-min":Mn("sm-min"),"sm-max":Mn("sm-max"),"md-min":Mn("md-min"),"md-max":Mn("md-max"),"lg-min":Mn("lg-min"),"lg-max":Mn("lg-max"),"xl-min":Mn("xl-min"),"xl-max":Mn("xl-max"),"xxl-min":Mn("xxl-min"),"xxs-column":Mn("xxs-column"),"xs-column":Mn("xs-column"),"sm-column":Mn("sm-column"),"md-column":Mn("md-column"),"lg-column":Mn("lg-column"),"xl-column":Mn("xl-column"),"xxl-column":Mn("xxl-column"),"xxs-gutter":Mn("xxs-gutter"),"xs-gutter":Mn("xs-gutter"),"sm-gutter":Mn("sm-gutter"),"md-gutter":Mn("md-gutter"),"lg-gutter":Mn("lg-gutter"),"xl-gutter":Mn("xl-gutter"),"xxl-gutter":Mn("xxl-gutter"),"xxs-margin":Mn("xxs-margin"),"xs-margin":Mn("xs-margin"),"sm-margin":Mn("sm-margin"),"md-margin":Mn("md-margin"),"lg-margin":Mn("lg-margin"),"xl-margin":Mn("xl-margin"),"xxl-margin":Mn("xxl-margin")},Yn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Tn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Ln={MaxWidth:Yn("max-width"),MinWidth:Yn("min-width")},In={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Rn={collections:{lifesg:In,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:In,mylegacy:In,ccube:In},defaultValue:"lifesg"},Wn=e=>r=>{var t;const n=r.theme,i=yn(Rn,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?pn(i,e,n.overrides.fontSpec):i[e]},Hn={"header-size-xxl":Wn("header-size-xxl"),"header-size-xl":Wn("header-size-xl"),"header-size-lg":Wn("header-size-lg"),"header-size-md":Wn("header-size-md"),"header-size-sm":Wn("header-size-sm"),"header-size-xs":Wn("header-size-xs"),"header-lh-xxl":Wn("header-lh-xxl"),"header-lh-xl":Wn("header-lh-xl"),"header-lh-lg":Wn("header-lh-lg"),"header-lh-md":Wn("header-lh-md"),"header-lh-sm":Wn("header-lh-sm"),"header-lh-xs":Wn("header-lh-xs"),"header-ls-xxl":Wn("header-ls-xxl"),"header-ls-xl":Wn("header-ls-xl"),"header-ls-lg":Wn("header-ls-lg"),"header-ls-md":Wn("header-ls-md"),"header-ls-sm":Wn("header-ls-sm"),"header-ls-xs":Wn("header-ls-xs"),"weight-light":Wn("weight-light"),"weight-regular":Wn("weight-regular"),"weight-semibold":Wn("weight-semibold"),"weight-bold":Wn("weight-bold"),"font-family":Wn("font-family"),"body-size-baseline":Wn("body-size-baseline"),"body-size-md":Wn("body-size-md"),"body-size-sm":Wn("body-size-sm"),"body-size-xs":Wn("body-size-xs"),"body-lh-baseline":Wn("body-lh-baseline"),"body-lh-md":Wn("body-lh-md"),"body-lh-sm":Wn("body-lh-sm"),"body-lh-xs":Wn("body-lh-xs"),"body-ls-baseline":Wn("body-ls-baseline"),"body-ls-md":Wn("body-ls-md"),"body-ls-sm":Wn("body-ls-sm"),"body-ls-xs":Wn("body-ls-xs"),"formlabel-size-baseline":Wn("formlabel-size-baseline"),"formlabel-size-lg":Wn("formlabel-size-lg"),"formlabel-lh-baseline":Wn("formlabel-lh-baseline"),"formlabel-lh-lg":Wn("formlabel-lh-lg"),"formlabel-ls-baseline":Wn("formlabel-ls-baseline"),"formlabel-ls-lg":Wn("formlabel-ls-lg")},Pn={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Nn=e=>r=>{var t;const n=r.theme,i=yn(Pn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${pn(i,e,n.overrides.radius)}px`:`${i[e]}px`},Un={none:Nn("none"),xs:Nn("xs"),sm:Nn("sm"),md:Nn("md"),lg:Nn("lg"),full:Nn("full")},Vn={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Zn=e=>r=>{var t;const n=r.theme,i=yn(Vn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${pn(i,e,n.overrides.spacing)}px`:`${i[e]}px`},qn={"spacing-0":Zn("spacing-0"),"spacing-4":Zn("spacing-4"),"spacing-8":Zn("spacing-8"),"spacing-12":Zn("spacing-12"),"spacing-16":Zn("spacing-16"),"spacing-20":Zn("spacing-20"),"spacing-24":Zn("spacing-24"),"spacing-32":Zn("spacing-32"),"spacing-40":Zn("spacing-40"),"spacing-48":Zn("spacing-48"),"spacing-64":Zn("spacing-64"),"spacing-72":Zn("spacing-72"),"layout-xs":Zn("layout-xs"),"layout-sm":Zn("layout-sm"),"layout-md":Zn("layout-md"),"layout-lg":Zn("layout-lg"),"layout-xl":Zn("layout-xl"),"layout-xxl":Zn("layout-xxl"),"layout-xxxl":Zn("layout-xxxl")},Jn=(e,r,t,n)=>y`
    font-family: ${Wn("font-family")};
    font-size: ${Wn(e)};
    font-weight: ${Wn(r)};
    line-height: ${Wn(t)};
    letter-spacing: ${Wn(n)};
`,Xn={"header-xxl-light":Jn("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Jn("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Jn("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Jn("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Jn("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Jn("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Jn("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Jn("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Jn("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Jn("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Jn("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Jn("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Jn("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Jn("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Jn("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Jn("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Jn("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Jn("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Jn("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Jn("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Jn("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Jn("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Jn("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Jn("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Jn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Jn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Jn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Jn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Jn("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Jn("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Jn("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Jn("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Jn("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Jn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Jn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Jn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Jn("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Jn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Jn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Jn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Jn("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Jn("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Gn={collections:{lifesg:Xn,bookingsg:Xn,rbs:Xn,mylegacy:Xn,ccube:Xn},defaultValue:"lifesg"},Qn=e=>r=>{var t;const n=r.theme,i=yn(Gn,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?pn(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Kn={"header-xxl-light":Qn("header-xxl-light"),"header-xxl-regular":Qn("header-xxl-regular"),"header-xxl-semibold":Qn("header-xxl-semibold"),"header-xxl-bold":Qn("header-xxl-bold"),"header-xl-light":Qn("header-xl-light"),"header-xl-regular":Qn("header-xl-regular"),"header-xl-semibold":Qn("header-xl-semibold"),"header-xl-bold":Qn("header-xl-bold"),"header-lg-light":Qn("header-lg-light"),"header-lg-regular":Qn("header-lg-regular"),"header-lg-semibold":Qn("header-lg-semibold"),"header-lg-bold":Qn("header-lg-bold"),"header-md-light":Qn("header-md-light"),"header-md-regular":Qn("header-md-regular"),"header-md-semibold":Qn("header-md-semibold"),"header-md-bold":Qn("header-md-bold"),"header-sm-light":Qn("header-sm-light"),"header-sm-regular":Qn("header-sm-regular"),"header-sm-semibold":Qn("header-sm-semibold"),"header-sm-bold":Qn("header-sm-bold"),"header-xs-light":Qn("header-xs-light"),"header-xs-regular":Qn("header-xs-regular"),"header-xs-semibold":Qn("header-xs-semibold"),"header-xs-bold":Qn("header-xs-bold"),"body-baseline-light":Qn("body-baseline-light"),"body-baseline-regular":Qn("body-baseline-regular"),"body-baseline-semibold":Qn("body-baseline-semibold"),"body-baseline-bold":Qn("body-baseline-bold"),"body-md-light":Qn("body-md-light"),"body-md-regular":Qn("body-md-regular"),"body-md-semibold":Qn("body-md-semibold"),"body-md-bold":Qn("body-md-bold"),"body-sm-light":Qn("body-sm-light"),"body-sm-regular":Qn("body-sm-regular"),"body-sm-semibold":Qn("body-sm-semibold"),"body-sm-bold":Qn("body-sm-bold"),"body-xs-light":Qn("body-xs-light"),"body-xs-regular":Qn("body-xs-regular"),"body-xs-semibold":Qn("body-xs-semibold"),"body-xs-bold":Qn("body-xs-bold"),"formlabel-baseline-semibold":Qn("formlabel-baseline-semibold"),"formlabel-lg-semibold":Qn("formlabel-lg-semibold")},ei=Object.assign(Object.assign({},An),{Primitive:Dn}),ri=Object.assign(Object.assign({},Kn),{Spec:Hn}),ti=wn,ni=_n,ii=qn,oi=Un,ai=Tn,si=Ln;var li;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(li||(li={}));const di=e=>y`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,ci=p.div`
    font-weight: ${e=>e.$bold?ri.Spec["weight-semibold"]:ri.Spec["weight-regular"]};
    color: ${e=>e.$selected?ei["text-selected"]:ei.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&di(e.$maxLines||2)}
    overflow-wrap: break-word;
`,ui=p.div`
    color: ${ei["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&di(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${ri["body-md-semibold"]}
                `:y`
                    ${ri["body-baseline-regular"]}
                `}
`,hi=p.span`
    font-weight: ${ri.Spec["weight-semibold"]};
`,bi=p.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?ri["body-md-regular"]:ri["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${ci} {
                        display: inline;
                    }

                    ${ui} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,gi=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,fi=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,mi=({bold:n,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:d,truncationType:c="middle",variant:u})=>{const h=v(),f="small"===u?ri.Spec["body-size-md"]({theme:h}):ri.Spec["body-size-baseline"]({theme:h}),m=ri.Spec["font-family"]({theme:h}),{ref:p,width:y}=Le(),x=b((e=>{if("inline"!==i)return!1;return li.getTextWidth(e,`${f} '${m}'`)>y*s-50}),[y,i,f,m,s]),w=g((()=>x(o)),[x,o]),$=g((()=>d&&x(d)),[x,d]),F=w||$?"next-line":i,D=n=>{if(!a)return n;const i=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(i),l=s+a.length;return-1===s?n:e(t,{children:[o.slice(0,s),r(hi,Object.assign({$variant:u},{children:o.slice(s,l)})),o.slice(l)]})},E=n=>e(t,{children:[r(gi,Object.assign({$maxLines:s,"aria-hidden":!0},{children:D(n)})),r(fi,Object.assign({$maxLines:s,"aria-hidden":!0},{children:D(n)}))]});return e(bi,Object.assign({ref:p,$labelDisplayType:F,$variant:u},{children:[r(ci,Object.assign({"aria-label":o,$bold:n,$maxLines:s,$selected:l,$truncateType:c},{children:"middle"===c&&w?E(o):D(o)})),d&&r(ui,Object.assign({"aria-label":d,$maxLines:s,$truncateType:c,$labelDisplayType:i},{children:"middle"===c&&$?E(d):d}))]}))};var pi=wt;var yi=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var vi=function(e){return this.__data__.get(e)};var xi=function(e){return this.__data__.has(e)},wi=wt,$i=$t,Fi=Ht;var Di=function(e,r){var t=this.__data__;if(t instanceof wi){var n=t.__data__;if(!$i||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new Fi(n)}return t.set(e,r),this.size=t.size,this},Ei=wt,Ci=function(){this.__data__=new pi,this.size=0},Oi=yi,Ai=vi,zi=xi,ji=Di;function Bi(e){var r=this.__data__=new Ei(e);this.size=r.size}Bi.prototype.clear=Ci,Bi.prototype.delete=Oi,Bi.prototype.get=Ai,Bi.prototype.has=zi,Bi.prototype.set=ji;var _i=Bi;var Si=Ht,ki=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Mi=function(e){return this.__data__.has(e)};function Ti(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Si;++r<t;)this.add(e[r])}Ti.prototype.add=Ti.prototype.push=ki,Ti.prototype.has=Mi;var Yi=function(e,r){return e.has(r)},Li=Ti,Ii=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Ri=Yi;var Wi=function(e,r,t,n,i,o){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=o.get(e),c=o.get(r);if(d&&c)return d==r&&c==e;var u=-1,h=!0,b=2&t?new Li:void 0;for(o.set(e,r),o.set(r,e);++u<s;){var g=e[u],f=r[u];if(n)var m=a?n(f,g,u,r,e,o):n(g,f,u,e,r,o);if(void 0!==m){if(m)continue;h=!1;break}if(b){if(!Ii(r,(function(e,r){if(!Ri(b,r)&&(g===e||i(g,e,t,n,o)))return b.push(r)}))){h=!1;break}}else if(g!==f&&!i(g,f,t,n,o)){h=!1;break}}return o.delete(e),o.delete(r),h};var Hi=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Pi=Ue.Uint8Array,Ni=nt,Ui=Wi,Vi=Hi,Zi=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},qi=Ve?Ve.prototype:void 0,Ji=qi?qi.valueOf:void 0;var Xi=function(e,r,t,n,i,o,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!o(new Pi(e),new Pi(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ni(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=Vi;case"[object Set]":var l=1&n;if(s||(s=Zi),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=Ui(s(e),s(r),n,i,o,a);return a.delete(e),c;case"[object Symbol]":if(Ji)return Ji.call(e)==Ji.call(r)}return!1};var Gi=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},Qi=Gi,Ki=We;var eo=function(e,r,t){var n=r(e);return Ki(e)?n:Qi(n,t(e))};var ro=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,o=[];++t<n;){var a=e[t];r(a,t,e)&&(o[i++]=a)}return o},to=function(){return[]},no=Object.prototype.propertyIsEnumerable,io=Object.getOwnPropertySymbols,oo=io?function(e){return null==e?[]:(e=Object(e),ro(io(e),(function(r){return no.call(e,r)})))}:to;var ao=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},so=nr,lo=ir;var co=function(e){return lo(e)&&"[object Arguments]"==so(e)},uo=ir,ho=Object.prototype,bo=ho.hasOwnProperty,go=ho.propertyIsEnumerable,fo=co(function(){return arguments}())?co:function(e){return uo(e)&&bo.call(e,"callee")&&!go.call(e,"callee")},mo={exports:{}};var po=function(){return!1};!function(e,r){var t=Ue,n=po,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(mo,mo.exports);var yo=mo.exports,vo=/^(?:0|[1-9]\d*)$/;var xo=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&vo.test(e))&&e>-1&&e%1==0&&e<r};var wo=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},$o=nr,Fo=wo,Do=ir,Eo={};Eo["[object Float32Array]"]=Eo["[object Float64Array]"]=Eo["[object Int8Array]"]=Eo["[object Int16Array]"]=Eo["[object Int32Array]"]=Eo["[object Uint8Array]"]=Eo["[object Uint8ClampedArray]"]=Eo["[object Uint16Array]"]=Eo["[object Uint32Array]"]=!0,Eo["[object Arguments]"]=Eo["[object Array]"]=Eo["[object ArrayBuffer]"]=Eo["[object Boolean]"]=Eo["[object DataView]"]=Eo["[object Date]"]=Eo["[object Error]"]=Eo["[object Function]"]=Eo["[object Map]"]=Eo["[object Number]"]=Eo["[object Object]"]=Eo["[object RegExp]"]=Eo["[object Set]"]=Eo["[object String]"]=Eo["[object WeakMap]"]=!1;var Co=function(e){return Do(e)&&Fo(e.length)&&!!Eo[$o(e)]};var Oo=function(e){return function(r){return e(r)}},Ao={exports:{}};!function(e,r){var t=He,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&t.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Ao,Ao.exports);var zo=Ao.exports,jo=Co,Bo=Oo,_o=zo&&zo.isTypedArray,So=_o?Bo(_o):jo,ko=ao,Mo=fo,To=We,Yo=yo,Lo=xo,Io=So,Ro=Object.prototype.hasOwnProperty;var Wo=function(e,r){var t=To(e),n=!t&&Mo(e),i=!t&&!n&&Yo(e),o=!t&&!n&&!i&&Io(e),a=t||n||i||o,s=a?ko(e.length,String):[],l=s.length;for(var d in e)!r&&!Ro.call(e,d)||a&&("length"==d||i&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Lo(d,l))||s.push(d);return s},Ho=Object.prototype;var Po=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Ho)};var No=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Uo=Po,Vo=No,Zo=Object.prototype.hasOwnProperty;var qo=function(e){if(!Uo(e))return Vo(e);var r=[];for(var t in Object(e))Zo.call(e,t)&&"constructor"!=t&&r.push(t);return r},Jo=pr,Xo=wo;var Go=function(e){return null!=e&&Xo(e.length)&&!Jo(e)},Qo=Wo,Ko=qo,ea=Go;var ra=function(e){return ea(e)?Qo(e):Ko(e)},ta=eo,na=oo,ia=ra;var oa=function(e){return ta(e,ia,na)},aa=Object.prototype.hasOwnProperty;var sa=function(e,r,t,n,i,o){var a=1&t,s=oa(e),l=s.length;if(l!=oa(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:aa.call(r,c)))return!1}var u=o.get(e),h=o.get(r);if(u&&h)return u==r&&h==e;var b=!0;o.set(e,r),o.set(r,e);for(var g=a;++d<l;){var f=e[c=s[d]],m=r[c];if(n)var p=a?n(m,f,c,r,e,o):n(f,m,c,e,r,o);if(!(void 0===p?f===m||i(f,m,t,n,o):p)){b=!1;break}g||(g="constructor"==c)}if(b&&!g){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(b=!1)}return o.delete(e),o.delete(r),b},la=Tr(Ue,"DataView"),da=$t,ca=Tr(Ue,"Promise"),ua=Tr(Ue,"Set"),ha=Tr(Ue,"WeakMap"),ba=nr,ga=$r,fa="[object Map]",ma="[object Promise]",pa="[object Set]",ya="[object WeakMap]",va="[object DataView]",xa=ga(la),wa=ga(da),$a=ga(ca),Fa=ga(ua),Da=ga(ha),Ea=ba;(la&&Ea(new la(new ArrayBuffer(1)))!=va||da&&Ea(new da)!=fa||ca&&Ea(ca.resolve())!=ma||ua&&Ea(new ua)!=pa||ha&&Ea(new ha)!=ya)&&(Ea=function(e){var r=ba(e),t="[object Object]"==r?e.constructor:void 0,n=t?ga(t):"";if(n)switch(n){case xa:return va;case wa:return fa;case $a:return ma;case Fa:return pa;case Da:return ya}return r});var Ca=_i,Oa=Wi,Aa=Xi,za=sa,ja=Ea,Ba=We,_a=yo,Sa=So,ka="[object Arguments]",Ma="[object Array]",Ta="[object Object]",Ya=Object.prototype.hasOwnProperty;var La=function(e,r,t,n,i,o){var a=Ba(e),s=Ba(r),l=a?Ma:ja(e),d=s?Ma:ja(r),c=(l=l==ka?Ta:l)==Ta,u=(d=d==ka?Ta:d)==Ta,h=l==d;if(h&&_a(e)){if(!_a(r))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new Ca),a||Sa(e)?Oa(e,r,t,n,i,o):Aa(e,r,l,t,n,i,o);if(!(1&t)){var b=c&&Ya.call(e,"__wrapped__"),g=u&&Ya.call(r,"__wrapped__");if(b||g){var f=b?e.value():e,m=g?r.value():r;return o||(o=new Ca),i(f,m,t,n,o)}}return!!h&&(o||(o=new Ca),za(e,r,t,n,i,o))},Ia=ir;var Ra=function e(r,t,n,i,o){return r===t||(null==r||null==t||!Ia(r)&&!Ia(t)?r!=r&&t!=t:La(r,t,n,i,e,o))},Wa=_i,Ha=Ra;var Pa=function(e,r,t,n){var i=t.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=t[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=t[i])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Wa;if(n)var h=n(d,c,l,e,r,u);if(!(void 0===h?Ha(c,d,3,n,u):h))return!1}}return!0},Na=br;var Ua=function(e){return e==e&&!Na(e)},Va=Ua,Za=ra;var qa=function(e){for(var r=Za(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,Va(i)]}return r};var Ja=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Xa=Pa,Ga=qa,Qa=Ja;var Ka=function(e,r){return null!=e&&r in Object(e)},es=ln,rs=fo,ts=We,ns=xo,is=wo,os=cn;var as=function(e,r,t){for(var n=-1,i=(r=es(r,e)).length,o=!1;++n<i;){var a=os(r[n]);if(!(o=null!=e&&t(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&is(i)&&ns(a,i)&&(ts(e)||rs(e))},ss=Ka,ls=as;var ds=Ra,cs=fn,us=function(e,r){return null!=e&&ls(e,r,ss)},hs=hr,bs=Ua,gs=Ja,fs=cn;var ms=function(e){return function(r){return null==r?void 0:r[e]}},ps=bn;var ys=ms,vs=function(e){return function(r){return ps(r,e)}},xs=hr,ws=cn;var $s=function(e){var r=Ga(e);return 1==r.length&&r[0][2]?Qa(r[0][0],r[0][1]):function(t){return t===e||Xa(t,e,r)}},Fs=function(e,r){return hs(e)&&bs(r)?gs(fs(e),r):function(t){var n=cs(t,e);return void 0===n&&n===r?us(t,e):ds(r,n,3)}},Ds=function(e){return e},Es=We,Cs=function(e){return xs(e)?ys(ws(e)):vs(e)};var Os=function(e){return"function"==typeof e?e:null==e?Ds:"object"==typeof e?Es(e)?Fs(e[0],e[1]):$s(e):Cs(e)},As=Os,zs=Go,js=ra;var Bs=function(e){return function(r,t,n){var i=Object(r);if(!zs(r)){var o=As(t);r=js(r),t=function(e){return o(i[e],e,i)}}var a=e(r,t,n);return a>-1?i[o?r[a]:a]:void 0}};var _s=/\s/;var Ss=function(e){for(var r=e.length;r--&&_s.test(e.charAt(r)););return r},ks=/^\s+/;var Ms=function(e){return e?e.slice(0,Ss(e)+1).replace(ks,""):e},Ts=br,Ys=sr,Ls=/^[-+]0x[0-9a-f]+$/i,Is=/^0b[01]+$/i,Rs=/^0o[0-7]+$/i,Ws=parseInt;var Hs=function(e){if("number"==typeof e)return e;if(Ys(e))return NaN;if(Ts(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ts(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Ms(e);var t=Is.test(e);return t||Rs.test(e)?Ws(e.slice(2),t?2:8):Ls.test(e)?NaN:+e},Ps=1/0;var Ns=function(e){return e?(e=Hs(e))===Ps||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Us=function(e,r,t,n){for(var i=e.length,o=t+(n?1:-1);n?o--:++o<i;)if(r(e[o],o,e))return o;return-1},Vs=Os,Zs=function(e){var r=Ns(e),t=r%1;return r==r?t?r-t:r:0},qs=Math.max;var Js=Re(Bs((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:Zs(t);return i<0&&(i=qs(n+i,0)),Us(e,Vs(r),i)}))),Xs=Ra;var Gs=Re((function(e,r){return Xs(e,r)})),Qs={exports:{}};Qs.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=m;var w="$isDayjsObject",$=function(e){return e instanceof C||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},D=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=m.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===b)},p.isSame=function(e,r){var t=D(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return D(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<D(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},g=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},f=this.$W,m=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,m):b(0,m+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return b(n?p-x:p+(6-x),m);case s:case h:return g(y+"Hours",0);case a:return g(y+"Minutes",1);case o:return g(y+"Seconds",2);case i:return g(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var f=this.clone().set(h,1);f.$d[b](g),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else b&&this.$d[b](g);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var h,b=this;n=Number(n);var g=E.p(c),f=function(e){var r=D(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return f(1);if(g===l)return f(7);var m=(h={},h[o]=r,h[a]=t,h[i]=e,h)[g]||1,p=this.$d.getTime()+n*m;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,h,b){var g,f=this,m=E.p(h),p=D(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(f,p)};switch(m){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-y)/6048e5;break;case s:g=(v-y)/864e5;break;case a:g=v/t;break;case o:g=v/r;break;case i:g=v/e;break;default:g=v}return b?g:E.a(g)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),O=C.prototype;return D.prototype=O,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){O[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,C,D),e.$i=!0),D},D.locale=F,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=x[v],D.Ls=x,D.p={},D}();var Ks=Re(Qs.exports),el={exports:{}};el.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],b=c&&c[1];a[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,g=a||(i||o?1:b.getDate()),f=i||b.getFullYear(),m=0;i&&!o||(m=o>0?o-1:b.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,m,g,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(f,m,g,p,y,v,x)):new Date(f,m,g,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var b=s.length,g=1;g<=b;g+=1){a[1]=s[g-1];var f=t.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}g===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var rl=Re(el.exports),tl={exports:{}};tl.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var nl=Re(tl.exports),il={exports:{}};il.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ol=Re(il.exports),al={exports:{}};al.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var sl,ll,dl,cl=Re(al.exports),ul={exports:{}},hl=Re(ul.exports=(sl={year:0,month:1,day:2,hour:3,minute:4,second:5},ll={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=ll[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ll[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=sl[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,b=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(t.utc(b).valueOf()-(g-=g%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Ks.extend(nl),Ks.extend(cl),Ks.extend(ol),Ks.extend(rl),Ks.extend(hl),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Ks(r).startOf("week");return bl(t).map((e=>gl(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return gl(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Ks(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Ks(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Ks(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?Ks(n):void 0,i?Ks(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(dl||(dl={}));const bl=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},gl=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},fl=[1,3,5,7,8,10,12],ml=[4,6,9,11];var pl,yl,vl;function xl(e){const r=o(null);return h((()=>{r.current=e}),[e]),b(((...e)=>r.current(...e)),[])}!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":fl.includes(o)?Math.min(i,31).toString():ml.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Ks(e,t);return Ks(r,t).diff(n,"minute")},e.toDayjs=e=>e?Ks(e):Ks(),e.addMinutesToTime=(e,r,t="HH:mm")=>Ks(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Ks(e).isSame(Ks(r),t)}(pl||(pl={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!Ks(e).isBefore(n,"day"))||!(!i||!Ks(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Ks(e).isValid())return e}return""}}(yl||(yl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(vl||(vl={}));const wl=e=>{const r=(e=>{const r=o(e),t=o();return u((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e},$l=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Fl=({children:e})=>{const[t,n]=a(-1);return r($l.Provider,Object.assign({value:{focusedIndex:t,setFocusedIndex:n}},{children:e}))},Dl=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,El=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Cl=p.div`
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
    animation: ${El} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ol=p(Cl)`
    animation-delay: -0.45s;
`,Al=p(Cl)`
    animation-delay: -0.3s;
`,zl=p(Cl)`
    animation-delay: -0.15s;
`,jl=({color:t,className:n,size:i})=>e(Dl,Object.assign({className:n,$size:i,$color:t},{children:[r(Cl,{id:"inner1"}),r(Ol,{id:"inner2"}),r(Al,{id:"inner3"}),r(zl,{id:"inner4"})]})),Bl=y`
    outline-offset: -1px;
    outline: ${ni["width-020"]} ${ni.solid} ${ei["border-focus"]};
`,_l=y`
    outline-color: ${ei["border-focus"]};
`,Sl=y`
    outline-color: ${ei["border-disabled"]};
`,kl=y`
    outline-color: ${ei["border-error-focus"]};
`,Ml=p.div`
    border: ${ni["width-010"]} ${ni.solid} ${ei.border};
    border-radius: ${oi.sm};
    background: ${ei.bg};

    :focus-within {
        ${Bl}
    }
    ${e=>e.$focused&&Bl}

    ${e=>e.$readOnly?y`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${_l}
                }
                ${e.$focused&&_l}
            `:e.$disabled?y`
                background: ${ei["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Sl}
                }
                ${e.$focused&&Sl}
            `:e.$error?y`
                border-color: ${ei["border-error"]};

                :focus-within {
                    ${kl}
                }
                ${e.$focused&&kl}
            `:void 0}
`;p(Ml)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${ii["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Tl=p.input`
    ${e=>"small"===e.$variant?ri["body-md-regular"]:ri["body-baseline-regular"]}
    color: ${ei.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${ei["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${ei["text-subtler"]};
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
`,Yl=p.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${ni["width-010"]} ${ni.solid}
            ${ei["border-focus"]};
        border-radius: ${oi.sm};
    }
`,Ll=p.div`
    overflow: hidden;
    border: ${ni["width-010"]} ${ni.solid} ${ei.border};
    border-radius: ${oi.sm};
    background: ${ei.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?ri["body-md-regular"]:ri["body-baseline-regular"]}

    ${si.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${ai["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${si.MaxWidth.xs} {
        width: calc(100vw - ${ai["xs-margin"]} * 2);
    }

    ${si.MaxWidth.xxs} {
        width: calc(100vw - ${ai["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${ei["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Il=p.div`
    background: transparent;
    padding: ${ii["spacing-8"]};
`,Rl=p.ul`
    list-style-type: none;
`,Wl=p.li`
    display: flex;
    align-items: flex-start;
    gap: ${ii["spacing-8"]};
    padding: ${ii["spacing-12"]} ${ii["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?y`
                background: ${ei["bg-hover"]};
            `:e.$active?y`
                background: ${ei["bg-hover-subtle"]};
            `:void 0}
`,Hl=p(E)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${ei["icon-selected"]};
`,Pl=p.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Nl=p(D)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ei["icon-selected"]};
`,Ul=p(F)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ei["icon-primary-subtlest"]};
`,Vl=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Zl=p(Yl)`
    cursor: pointer;
    overflow: hidden;
    color: ${ei["text-primary"]};
    font-size: inherit;
`,ql=p(Zl)`
    ${ri["body-baseline-semibold"]}
`,Jl=p(Zl)`
    ${ri["body-md-semibold"]}
    padding: ${ii["spacing-8"]} ${ii["spacing-8"]};
`,Xl=p.div`
    width: 100%;
    display: flex;
    padding: ${ii["spacing-12"]} ${ii[16]};
    align-items: center;
`,Gl=p($)`
    margin-right: ${ii["spacing-4"]};
    color: ${ei["icon-error"]};
    height: 1em;
    width: 1em;
`,Ql=p(jl)`
    margin-right: ${ii["spacing-8"]};
    color: ${ei.icon};
`;function Kl(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;const ed=p.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ii["spacing-32"]};
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

        ${({$highlight:e})=>e&&y`
                background-color: ${ei["bg-hover-neutral"]};
            `}
    }
`,rd=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=Kl(e,["children","focusHighlight","focusOutline","type"]);return r(ed,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),td=p.div`
    background: ${ei["bg-strong"]};
    border-radius: ${oi.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?ri["body-md-regular"]:ri["body-baseline-regular"]}
`,nd=p.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${ii["spacing-8"]};
    padding: ${e=>"small"===e.$variant?y`
                  ${ii["spacing-8"]} ${ii["spacing-16"]}
              `:y`10px ${ii["spacing-16"]}`};
`,id=p(Tl)`
    flex: 1;
`,od=p(O)`
    color: ${ei.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,ad=p(rd)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${ii["spacing-8"]};
    margin-left: -${ii["spacing-8"]};
    color: ${ei.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,sd=f(((t,n)=>{var{value:i,variant:o,onClear:a}=t,s=Kl(t,["value","variant","onClear"]);return e(td,Object.assign({$variant:o},{children:[e(nd,Object.assign({$variant:o},{children:[r(od,{"aria-hidden":!0}),r(id,Object.assign({ref:n,value:i,$variant:o},s))]})),i&&r(ad,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a},{children:r(C,{"aria-hidden":!0})}))]}))})),ld=({listItems:n,multiSelect:i,selectedItems:s,disableItemFocus:l,itemsLoadState:d="success",itemTruncationType:c="end",itemMaxLines:h=2,labelDisplayType:g="inline",variant:f="default",listboxId:p,width:y,topScrollItem:v,onSelectItem:x,onSelectAll:w,onDismiss:$,onRetry:F,valueExtractor:D,listExtractor:E,renderListItem:C,renderCustomCallToAction:O,enableSearch:A,hideNoResultsDisplay:z,searchPlaceholder:j="Search",searchFunction:B,onSearch:_})=>{const{focusedIndex:S,setFocusedIndex:k}=m($l),[M,T]=a(""),[Y,L]=a(n),I=wl(d),R=(()=>{const[e,r]=a(!1);return u((()=>{r(!0)}),[]),e})(),W=o(),H=o(),P=o([]),N=o(),U=e=>E?E(e):e.toString(),V=b((e=>!!Js(s,(r=>Gs(r,e)))),[s]),Z=xl((()=>B(M))),q=xl((()=>n.filter((e=>{var r;const t=U(e),n="object"==typeof t?t.title.toLowerCase():t.toLowerCase(),i="string"==typeof t||null===(r=t.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=M.trim().toLowerCase();return n.includes(o)||i&&i.includes(o)})))),J=(e,r)=>{k(r),null==x||x(e,(e=>D?D(e):e)(e))},X=e=>{const r=e.target.value;T(r),null==_||_()},G=()=>{var e;T(""),null===(e=N.current)||void 0===e||e.focus(),null==_||_()},Q=()=>{null==F||F()};((e,r,t="window",n)=>{const i=o();u((()=>{i.current=r}),[r]),u((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const o=e=>i.current(e);return r.addEventListener(e,o,n),()=>{r.removeEventListener(e,o,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),S<Y.length-1){const e=S+1;null===(r=P.current[e])||void 0===r||r.focus(),k(e)}break;case"ArrowUp":if(e.preventDefault(),S>0){const e=S-1;null===(t=P.current[e])||void 0===t||t.focus(),k(e)}else 0===S&&N.current&&(N.current.focus(),k(-1));break;case"Space":case"Enter":document.activeElement===P.current[S]&&(e.preventDefault(),Y[S]&&J(Y[S],S))}})),u((()=>{if(void 0===v)return;const e=setTimeout((()=>{var e;const r=n.indexOf(v),t=P.current[r];if(W.current){const r=null!==(e=null==t?void 0:t.offsetTop)&&void 0!==e?e:0;W.current.scrollTop=r-8}k(r)}),0);return()=>clearTimeout(e)}),[P,n,k,v]),u((()=>{if(R)return;if(l)return;const e=n.findIndex((e=>V(e)));N.current?(k(-1),setTimeout((()=>{var e;return null===(e=N.current)||void 0===e?void 0:e.focus()}),200)):P.current[S]?setTimeout((()=>{var e;return null===(e=P.current[S])||void 0===e?void 0:e.focus()}),200):P.current[e]?(k(e),setTimeout((()=>{var r;return null===(r=P.current[e])||void 0===r?void 0:r.focus()}),200)):(k(0),setTimeout((()=>{var e;return null===(e=P.current[0])||void 0===e?void 0:e.focus()}),200))}),[V,l,S,n,R,k]),u((()=>{R&&I&&(l||"success"===d&&N.current&&(k(-1),N.current.focus()))}),[R,I,d,k,l]),u((()=>{L(""===M?n:B?Z():q())}),[Z,q,n,B,M]);const K=e=>i?r(e?Nl:Ul,{"aria-hidden":!0}):e?r(Hl,{"aria-hidden":!0}):r(Pl,{}),ee=(e,t)=>{const n=U(e),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel;return r(mi,{displayType:g,label:i,maxLines:h,selected:t,sublabel:o,truncationType:c,variant:f})},re=()=>{if(!F||F&&"success"===d)return Y.map(((n,o)=>{const a=V(n),s=o===S;return r(Wl,Object.assign({"aria-selected":a,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>J(n,o),onMouseEnter:()=>(e=>{k(e)})(o),ref:e=>P.current[o]=e,role:"option",tabIndex:s?0:-1,$active:s,$selected:a},{children:C?C(n,{selected:a}):e(t,{children:[K(a),ee(n,a)]})}),((e,r)=>`item_${r}__${D?D(e):e}`)(n,o))}))},te=()=>{if((A||B)&&"success"===d)return r(sd,{ref:N,onChange:X,value:M,placeholder:j,"data-testid":"search-input","aria-label":"Enter text to search",onClear:G,variant:f})},ne=()=>{if(i&&Y.length>0&&!M&&"success"===d)return r(Vl,{children:r(Jl,Object.assign({onClick:w,type:"button",$variant:f},{children:0===s.length?"Select all":"Clear all"}))})},ie=()=>{if(!z&&(M||!A)&&0===Y.length&&"success"===d)return e(Xl,Object.assign({"data-testid":"list-no-results"},{children:[r(Gl,{"data-testid":"no-result-icon"}),"No results found."]}))},oe=()=>{if(F&&"loading"===d)return e(Xl,Object.assign({"data-testid":"list-loading"},{children:[r(Ql,{}),"Loading..."]}))},ae=()=>{if(F&&"fail"===d)return e(Xl,Object.assign({"data-testid":"list-fail"},{children:[r(Gl,{"data-testid":"load-error-icon"}),"Failed to load. ",r(ql,Object.assign({onClick:Q,type:"button",$variant:f},{children:"Try again."}))]}))};return e(Ll,Object.assign({"data-testid":"dropdown-container",ref:W,$width:y,$variant:f},{children:[e(Il,Object.assign({ref:H,"data-testid":"dropdown-list"},{children:[te(),ne(),ie(),oe(),ae(),r(Rl,Object.assign({role:"listbox",id:p},{children:re()}))]})),(()=>{if(O)return r("div",Object.assign({"data-testid":"custom-cta"},{children:O($,Y)}))})()]}))},dd=p(Yl)`
    display: flex;
    align-items: center;
    gap: ${ii["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${ii["spacing-16"]};

    ${e=>"small"===e.$variant?ri["body-md-regular"]:ri["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,cd=p.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${ti["duration-250"]} ${ti["ease-default"]};

    svg {
        color: ${ei.icon};
        height: 1em;
        width: 1em;
    }
`,ud=f((({children:t,disabled:n,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},d)=>e(dd,Object.assign({ref:d,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l},{children:[t,!s&&r(cd,Object.assign({$expanded:i,$variant:l},{children:r(A,{"aria-hidden":!0})}))]}))));p.button`
    padding: ${ii["spacing-8"]} ${ii["spacing-16"]};
    min-width: 4rem;
    border: ${ni["width-010"]} ${ni.solid} transparent;
    border-radius: ${oi.sm};
    transition: all ${ti["duration-250"]} ${ti["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${ei.Primitive.white};
                    border-color: ${e.$buttonIsDanger?ei["border-error-strong"]:ei["border-primary"]};

                    color: ${e.$buttonIsDanger?ei["text-error"]:ei["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${ei["bg-hover-neutral"]};
                    }
                `;case"light":return y`
                    background-color: ${ei.bg};
                    border-color: ${ei.border};

                    color: ${e.$buttonIsDanger?ei["text-error"]:ei["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${ei["bg-hover-neutral"]};
                    }
                `;case"link":return y`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?ei["text-error"]:ei["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${ei["bg-hover-neutral"]};
                    }
                `;case"disabled":return y`
                    background-color: ${ei["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ei["text-disabled"]};
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?ei["bg-error-strong"]:ei["bg-primary"]};

                    ${si.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${ei["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?ei["bg-error-strong-hover"]:ei["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return y`
                    height: 2.5rem;
                    ${ri["body-md-semibold"]}

                    ${si.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return y`
                    height: 4rem;
                    ${ri["header-md-semibold"]}

                    ${si.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return y`
                    height: 3rem;
                    ${ri["header-xs-semibold"]}

                    ${si.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,p(jl)`
    margin-right: 0.5rem;
`,p.li`
    display: ${e=>e.$visible?"flex":"none"};
`,p.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${ii["spacing-8"]};
    padding: ${ii["spacing-12"]} ${ii["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&y`
            background: ${ei["bg-hover"]};
        `}
`,p.div`
    height: 1px;
    width: calc((1lh + ${ii["spacing-8"]}) * ${e=>e.$level});
`,p.div`
    width: 1lh;
    height: 1lh;
    color: ${ei["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${ti["duration-350"]}
            ${ti["ease-standard"]};

        ${e=>{if(e.$expanded)return y`
                    transform: rotate(90deg);
                `}}
    }
`,p.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${ii["spacing-8"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":ii["spacing-16"]};

    display: flex;
    justify-content: center;
`,p(z)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ei["icon-selected"]};
`;const hd=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=hd(e.$variant);return y`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const bd=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${ii["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>hd(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${oi.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${ei["border-focus"]};
    }
`,gd=p.button`
    ${bd}
    cursor: pointer;
`;p.div`
    ${bd}
`;const fd=x`
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
`;p.div`
    position: relative;
    border: ${ni["width-010"]} ${ni.solid} ${ei.border};
    border-radius: ${oi.sm};
    background: ${ei.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${ei["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${ei["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${fd} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${ei["bg-disabled"]};

                ${gd} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${ei.border};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${gd} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border-color: ${ei["border-error"]};

                :focus-within {
                    border-color: ${ei["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${ei["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${ti["duration-250"]} ${ti["ease-default"]};
    margin-left: ${ii["spacing-16"]};
`,p(A)`
    color: ${ei.icon};
`,p.div`
    height: 1px;
    background: ${ei.border};
    margin: 0 ${ii["spacing-8"]};
`;const md=p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return y`
                color: ${ei["text-disabled"]};
            `}}
`,pd=p.div`
    ${e=>"small"===e.$variant?ri["body-md-regular"]:ri["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return y`
                    ${di(1)}
                `}}
    overflow: hidden;
`,yd=p(pd)`
    color: ${ei["text-subtler"]};
`;var vd;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(vd||(vd={}));const xd=p.div`
    display: flex;
    flex-direction: column;
`,wd=e=>"right"===e?"bottom-end":"bottom-start",$d=({enabled:n,isOpen:i,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:h,customZIndex:b,clickToToggle:g=!1,offset:f=0,alignment:m="left",fitAvailableHeight:p})=>{var y;const x=v(),w=ai["sm-max"]({theme:x}),$=o(null),F=o(null),{width:D}=Le({targetRef:$,handleHeight:!1}),E={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:C,floatingStyles:O,context:A}=B({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!i?null==s||s():!e&&i&&(null==l||l(t))},whileElementsMounted:_,placement:wd(m),middleware:[S(f),k(),M({limiter:T()}),Y({apply({availableHeight:e}){F.current&&Object.assign(F.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),E]}),z=(()=>{const[e,r]=a(void 0),t=j();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(vd.Change,e),t.events.emit(vd.Ready),()=>t.events.off(vd.Change,e)}),[t]),e})(),{isMounted:N,styles:U}=L(A,{initial:{opacity:0},open:{opacity:1},duration:300}),V=I(A,{enabled:n,toggle:g}),Z=R(A,{enabled:n}),{getReferenceProps:q,getFloatingProps:J}=W([V,Z]);return e(t,{children:[r("div",Object.assign({ref:e=>{$.current=e,C.setReference(e)}},q(),{children:c()})),N&&r(H,{children:r(P,Object.assign({context:A,modal:!1,initialFocus:F,returnFocus:!1},{children:r("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},O),{zIndex:null!==(y=null!=b?b:z)&&void 0!==y?y:50})},J(),{children:r(xd,Object.assign({ref:F,style:Object.assign({},U),inert:U.opacity<1?"":void 0},{children:h({elementWidth:D})}))}))}))})]})},Fd=({selectedOption:e,placeholder:t="Select",options:n,disabled:i,error:s,className:l,"data-testid":d,id:c,enableSearch:h=!1,searchFunction:b,searchPlaceholder:g,valueExtractor:f,valueToStringFunction:m,listExtractor:p,displayValueExtractor:y,onSelectOption:v,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:F="success",optionTruncationType:D="end",renderCustomSelectedOption:E,renderListItem:C,hideNoResultsDisplay:O,renderCustomCallToAction:A,onBlur:z,variant:j="default",readOnly:B,alignment:_,dropdownZIndex:S})=>{const[k,M]=a(e),[T,Y]=a(!1),[L,I]=a(!1),[R]=a((()=>vl.generate())),W=o(),H=o(),P=o();u((()=>{M(e)}),[e]);const N=(e,r)=>{H.current.focus(),M(e),Y(!1),J(!1),null==v||v(e,r)},U=()=>{T&&(Y(!1),J(!1))},V=()=>{L||T||I(!0)},Z=e=>{!L||T||W.current.contains(e.relatedTarget)||(I(!1),null==z||z())},q=e=>{if("middle"===D){let r=0;return P&&P.current&&(r=P.current.getBoundingClientRect().width),li.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),r,120,8)}return e},J=e=>{e?null==x||x():null==w||w()};return r(Fl,{children:r($d,{enabled:!B&&!i,isOpen:T,renderElement:()=>r(Ml,Object.assign({className:l,"data-testid":d,id:c,ref:W,tabIndex:-1,onFocus:V,onBlur:Z,$focused:L,$disabled:i,$readOnly:B,$error:s},{children:r(ud,Object.assign({ref:H,disabled:i,expanded:T,listboxId:R,popupRole:"listbox",readOnly:B,variant:j},{children:r(md,Object.assign({ref:P,$disabled:i},{children:k?E?E(k):r(pd,Object.assign({truncateType:D,$variant:j},{children:q(y?y(k):f?f(k):k.toString())})):r(yd,Object.assign({truncateType:D,$variant:j},{children:t}))}))}))})),renderDropdown:({elementWidth:e})=>r(ld,{listboxId:R,listItems:n,onSelectItem:N,onDismiss:U,valueExtractor:f,listExtractor:p,enableSearch:h,searchPlaceholder:g,searchFunction:b,selectedItems:k?[k]:[],onRetry:$,itemsLoadState:F,itemTruncationType:D,renderListItem:C,hideNoResultsDisplay:O,renderCustomCallToAction:A,variant:j,width:e}),onOpen:()=>{Y(!0),J(!0),I(!0)},onClose:e=>{Y(!1),J(!1),"click"!==e&&(I(!1),null==z||z())},onDismiss:()=>{H.current.focus(),Y(!1),J(!1)},clickToToggle:!0,offset:8,alignment:_,fitAvailableHeight:!0,customZIndex:S})})};export{Fd as InputSelect};
//# sourceMappingURL=index.js.map
