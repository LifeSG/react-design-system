import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as a,useState as o,isValidElement as s,createRef as l,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as f,useCallback as h,useMemo as p,forwardRef as g}from"react";import m,{css as y,useTheme as b,keyframes as v}from"styled-components";import{ExternalIcon as S}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as $}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as F}from"@lifesg/react-icons/square";import{SquareTickFillIcon as w}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as x}from"@lifesg/react-icons/tick";import{CrossIcon as D}from"@lifesg/react-icons/cross";import{MagnifierIcon as B}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as O}from"@lifesg/react-icons/chevron-down";import{CaretRightIcon as _}from"@lifesg/react-icons/caret-right";import{findDOMNode as k}from"react-dom";import{MinusSquareFillIcon as E}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as j,useFloating as H,autoUpdate as z,offset as A,flip as T,shift as P,limitShift as M,size as I,useTransitionStyles as C,useClick as L,useDismiss as N,useInteractions as W,FloatingPortal as R,FloatingFocusManager as Y}from"@floating-ui/react";var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function J(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U=Object.prototype;var Z=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||U)};var X=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),G=Z,q=X,K=Object.prototype.hasOwnProperty;var Q=function(e){if(!G(e))return q(e);var t=[];for(var r in Object(e))K.call(e,r)&&"constructor"!=r&&t.push(r);return t},ee="object"==typeof V&&V&&V.Object===Object&&V,te=ee,re="object"==typeof self&&self&&self.Object===Object&&self,ne=te||re||Function("return this")(),ie=ne.Symbol,ae=ie,oe=Object.prototype,se=oe.hasOwnProperty,le=oe.toString,ce=ae?ae.toStringTag:void 0;var ue=function(e){var t=se.call(e,ce),r=e[ce];try{e[ce]=void 0;var n=!0}catch(e){}var i=le.call(e);return n&&(t?e[ce]=r:delete e[ce]),i},de=Object.prototype.toString;var fe=ue,he=function(e){return de.call(e)},pe=ie?ie.toStringTag:void 0;var ge=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":pe&&pe in Object(e)?fe(e):he(e)};var me=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ye=ge,be=me;var ve,Se=function(e){if(!be(e))return!1;var t=ye(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},$e=ne["__core-js_shared__"],Fe=(ve=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||""))?"Symbol(src)_1."+ve:"";var we=function(e){return!!Fe&&Fe in e},xe=Function.prototype.toString;var De=function(e){if(null!=e){try{return xe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Be=Se,Oe=we,_e=me,ke=De,Ee=/^\[object .+?Constructor\]$/,je=Function.prototype,He=Object.prototype,ze=je.toString,Ae=He.hasOwnProperty,Te=RegExp("^"+ze.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Pe=function(e){return!(!_e(e)||Oe(e))&&(Be(e)?Te:Ee).test(ke(e))},Me=function(e,t){return null==e?void 0:e[t]};var Ie=function(e,t){var r=Me(e,t);return Pe(r)?r:void 0},Ce=Ie(ne,"DataView"),Le=Ie(ne,"Map"),Ne=Ce,We=Le,Re=Ie(ne,"Promise"),Ye=Ie(ne,"Set"),Ve=Ie(ne,"WeakMap"),Je=ge,Ue=De,Ze="[object Map]",Xe="[object Promise]",Ge="[object Set]",qe="[object WeakMap]",Ke="[object DataView]",Qe=Ue(Ne),et=Ue(We),tt=Ue(Re),rt=Ue(Ye),nt=Ue(Ve),it=Je;(Ne&&it(new Ne(new ArrayBuffer(1)))!=Ke||We&&it(new We)!=Ze||Re&&it(Re.resolve())!=Xe||Ye&&it(new Ye)!=Ge||Ve&&it(new Ve)!=qe)&&(it=function(e){var t=Je(e),r="[object Object]"==t?e.constructor:void 0,n=r?Ue(r):"";if(n)switch(n){case Qe:return Ke;case et:return Ze;case tt:return Xe;case rt:return Ge;case nt:return qe}return t});var at=it;var ot=function(e){return null!=e&&"object"==typeof e},st=ge,lt=ot;var ct=function(e){return lt(e)&&"[object Arguments]"==st(e)},ut=ot,dt=Object.prototype,ft=dt.hasOwnProperty,ht=dt.propertyIsEnumerable,pt=ct(function(){return arguments}())?ct:function(e){return ut(e)&&ft.call(e,"callee")&&!ht.call(e,"callee")},gt=Array.isArray;var mt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},yt=Se,bt=mt;var vt=function(e){return null!=e&&bt(e.length)&&!yt(e)},St={exports:{}};var $t=function(){return!1};!function(e,t){var r=ne,n=$t,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(St,St.exports);var Ft=St.exports,wt=ge,xt=mt,Dt=ot,Bt={};Bt["[object Float32Array]"]=Bt["[object Float64Array]"]=Bt["[object Int8Array]"]=Bt["[object Int16Array]"]=Bt["[object Int32Array]"]=Bt["[object Uint8Array]"]=Bt["[object Uint8ClampedArray]"]=Bt["[object Uint16Array]"]=Bt["[object Uint32Array]"]=!0,Bt["[object Arguments]"]=Bt["[object Array]"]=Bt["[object ArrayBuffer]"]=Bt["[object Boolean]"]=Bt["[object DataView]"]=Bt["[object Date]"]=Bt["[object Error]"]=Bt["[object Function]"]=Bt["[object Map]"]=Bt["[object Number]"]=Bt["[object Object]"]=Bt["[object RegExp]"]=Bt["[object Set]"]=Bt["[object String]"]=Bt["[object WeakMap]"]=!1;var Ot=function(e){return Dt(e)&&xt(e.length)&&!!Bt[wt(e)]};var _t=function(e){return function(t){return e(t)}},kt={exports:{}};!function(e,t){var r=ee,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&r.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(kt,kt.exports);var Et=kt.exports,jt=Ot,Ht=_t,zt=Et&&Et.isTypedArray,At=zt?Ht(zt):jt,Tt=Q,Pt=at,Mt=pt,It=gt,Ct=vt,Lt=Ft,Nt=Z,Wt=At,Rt=Object.prototype.hasOwnProperty;var Yt=J((function(e){if(null==e)return!0;if(Ct(e)&&(It(e)||"string"==typeof e||"function"==typeof e.splice||Lt(e)||Wt(e)||Mt(e)))return!e.length;var t=Pt(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(Nt(e))return!Tt(e).length;for(var r in e)if(Rt.call(e,r))return!1;return!0})),Vt=function(e,t){return Vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Vt(e,t)};var Jt=function(){return Jt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Jt.apply(this,arguments)};var Ut="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Zt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Xt="object"==typeof Ut&&Ut&&Ut.Object===Object&&Ut,Gt="object"==typeof self&&self&&self.Object===Object&&self,qt=Xt||Gt||Function("return this")(),Kt=qt,Qt=function(){return Kt.Date.now()},er=/\s/;var tr=function(e){for(var t=e.length;t--&&er.test(e.charAt(t)););return t},rr=/^\s+/;var nr=function(e){return e?e.slice(0,tr(e)+1).replace(rr,""):e},ir=qt.Symbol,ar=ir,or=Object.prototype,sr=or.hasOwnProperty,lr=or.toString,cr=ar?ar.toStringTag:void 0;var ur=function(e){var t=sr.call(e,cr),r=e[cr];try{e[cr]=void 0;var n=!0}catch(e){}var i=lr.call(e);return n&&(t?e[cr]=r:delete e[cr]),i},dr=Object.prototype.toString;var fr=ur,hr=function(e){return dr.call(e)},pr=ir?ir.toStringTag:void 0;var gr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":pr&&pr in Object(e)?fr(e):hr(e)},mr=function(e){return null!=e&&"object"==typeof e};var yr=nr,br=Zt,vr=function(e){return"symbol"==typeof e||mr(e)&&"[object Symbol]"==gr(e)},Sr=/^[-+]0x[0-9a-f]+$/i,$r=/^0b[01]+$/i,Fr=/^0o[0-7]+$/i,wr=parseInt;var xr=Zt,Dr=Qt,Br=function(e){if("number"==typeof e)return e;if(vr(e))return NaN;if(br(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=br(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=yr(e);var r=$r.test(e);return r||Fr.test(e)?wr(e.slice(2),r?2:8):Sr.test(e)?NaN:+e},Or=Math.max,_r=Math.min;var kr=function(e,t,r){var n,i,a,o,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,a=i;return n=i=void 0,c=t,o=e.apply(a,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=a}function g(){var e=Dr();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return d?_r(r,a-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,o)}function y(){var e=Dr(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?h(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Br(t)||0,xr(r)&&(u=!!r.leading,a=(d="maxWait"in r)?Or(Br(r.maxWait)||0,t):a,f="trailing"in r?!!r.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},y.flush=function(){return void 0===s?o:m(Dr())},y},Er=kr,jr=Zt;var Hr=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return jr(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Er(e,t,{leading:n,maxWait:t,trailing:i})},zr=function(e,t,r,n){switch(t){case"debounce":return kr(e,r,n);case"throttle":return Hr(e,r,n);default:return e}},Ar=function(e){return"function"==typeof e},Tr=function(){return"undefined"==typeof window},Pr=function(e){return e instanceof Element||e instanceof HTMLDocument},Mr=function(e,t,r,n){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!n||t.height===o&&!r?t:(e&&Ar(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Tr()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Tr())return null;if(t)return document.querySelector(t);if(n&&Pr(n))return n;if(r.targetRef&&Pr(r.targetRef.current))return r.targetRef.current;var i=k(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=Mr(s,r.setState.bind(r),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!Tr()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Ar(t)?"renderProp":Ar(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,c=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=l(),r.observableElement=null,Tr()||(r.resizeHandler=zr(r.createResizeHandler,i,o,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Vt(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Tr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(o,null)}}}(u);var Ir=Tr()?d:f;function Cr(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,g=e.onResize,m=a(r),y=a(null),b=null!=h?h:y,v=a(),S=o({width:void 0,height:void 0}),$=S[0],F=S[1];return Ir((function(){if(!Tr()){var e=Mr(g,F,u,f);v.current=zr((function(t){(u||f)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!Tr()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,p),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,u,f,g,p,b.current]),Jt({ref:b},$)}const Lr={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Nr={D1:{fontFamily:Lr.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Lr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Lr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lr.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Lr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Lr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Lr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Lr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Lr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Lr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Lr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Lr.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Lr.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Wr={D1:{fontFamily:Lr.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Lr.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Lr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lr.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Lr.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Lr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Lr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Lr.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Lr.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Lr.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Lr.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Lr.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Lr.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Rr={D1:{fontFamily:Lr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Lr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Lr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Lr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Lr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Lr.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Lr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Lr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Lr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Lr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Lr.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Lr.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Lr.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Lr.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var Yr=ge,Vr=ot;var Jr=function(e){return"symbol"==typeof e||Vr(e)&&"[object Symbol]"==Yr(e)},Ur=gt,Zr=Jr,Xr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gr=/^\w*$/;var qr=function(e,t){if(Ur(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Zr(e))||(Gr.test(e)||!Xr.test(e)||null!=t&&e in Object(t))},Kr=Ie(Object,"create"),Qr=Kr;var en=function(){this.__data__=Qr?Qr(null):{},this.size=0};var tn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},rn=Kr,nn=Object.prototype.hasOwnProperty;var an=function(e){var t=this.__data__;if(rn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return nn.call(t,e)?t[e]:void 0},on=Kr,sn=Object.prototype.hasOwnProperty;var ln=Kr;var cn=en,un=tn,dn=an,fn=function(e){var t=this.__data__;return on?void 0!==t[e]:sn.call(t,e)},hn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ln&&void 0===t?"__lodash_hash_undefined__":t,this};function pn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}pn.prototype.clear=cn,pn.prototype.delete=un,pn.prototype.get=dn,pn.prototype.has=fn,pn.prototype.set=hn;var gn=pn;var mn=function(){this.__data__=[],this.size=0};var yn=function(e,t){return e===t||e!=e&&t!=t},bn=yn;var vn=function(e,t){for(var r=e.length;r--;)if(bn(e[r][0],t))return r;return-1},Sn=vn,$n=Array.prototype.splice;var Fn=vn;var wn=vn;var xn=vn;var Dn=mn,Bn=function(e){var t=this.__data__,r=Sn(t,e);return!(r<0)&&(r==t.length-1?t.pop():$n.call(t,r,1),--this.size,!0)},On=function(e){var t=this.__data__,r=Fn(t,e);return r<0?void 0:t[r][1]},_n=function(e){return wn(this.__data__,e)>-1},kn=function(e,t){var r=this.__data__,n=xn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function En(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}En.prototype.clear=Dn,En.prototype.delete=Bn,En.prototype.get=On,En.prototype.has=_n,En.prototype.set=kn;var jn=En,Hn=gn,zn=jn,An=Le;var Tn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pn=function(e,t){var r=e.__data__;return Tn(t)?r["string"==typeof t?"string":"hash"]:r.map},Mn=Pn;var In=Pn;var Cn=Pn;var Ln=Pn;var Nn=function(e,t){var r=Ln(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Wn=function(){this.size=0,this.__data__={hash:new Hn,map:new(An||zn),string:new Hn}},Rn=function(e){var t=Mn(this,e).delete(e);return this.size-=t?1:0,t},Yn=function(e){return In(this,e).get(e)},Vn=function(e){return Cn(this,e).has(e)},Jn=Nn;function Un(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Un.prototype.clear=Wn,Un.prototype.delete=Rn,Un.prototype.get=Yn,Un.prototype.has=Vn,Un.prototype.set=Jn;var Zn=Un,Xn=Zn;function Gn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Gn.Cache||Xn),r}Gn.Cache=Xn;var qn=Gn;var Kn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qn=/\\(\\)?/g,ei=function(e){var t=qn(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Kn,(function(e,r,n,i){t.push(n?i.replace(Qn,"$1"):r||e)})),t}));var ti=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ri=gt,ni=Jr,ii=ie?ie.prototype:void 0,ai=ii?ii.toString:void 0;var oi=function e(t){if("string"==typeof t)return t;if(ri(t))return ti(t,e)+"";if(ni(t))return ai?ai.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},si=oi;var li=gt,ci=qr,ui=ei,di=function(e){return null==e?"":si(e)};var fi=Jr;var hi=function(e,t){return li(e)?e:ci(e,t)?[e]:ui(di(e))},pi=function(e){if("string"==typeof e||fi(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var gi=function(e,t){for(var r=0,n=(t=hi(t,e)).length;null!=e&&r<n;)e=e[pi(t[r++])];return r&&r==n?e:void 0};var mi=J((function(e,t,r){var n=null==e?void 0:gi(e,t);return void 0===n?r:n}));const yi=(e,t,r)=>t?mi(r,t)||mi(e,t):r||e,bi=(e,t)=>{const r=t||e.defaultValue;return mi(e.collections,r)};var vi;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(vi||(vi={}));const Si={collections:{base:Nr,oneservice:Rr,plusJakartaSans:Wr},defaultValue:"base"},$i=e=>t=>{const r=t.theme,n=bi(Si,r[vi.textStyleScheme]);return r.options&&r.options.textStyle?yi(n,e,r.options.textStyle):yi(n,e)},Fi={D1:{fontFamily:$i("D1.fontFamily"),fontSize:$i("D1.fontSize"),fontWeight:$i("D1.fontWeight"),lineHeight:$i("D1.lineHeight"),letterSpacing:$i("D1.letterSpacing")},D2:{fontFamily:$i("D2.fontFamily"),fontSize:$i("D2.fontSize"),fontWeight:$i("D2.fontWeight"),lineHeight:$i("D2.lineHeight"),letterSpacing:$i("D2.letterSpacing")},D3:{fontFamily:$i("D3.fontFamily"),fontSize:$i("D3.fontSize"),fontWeight:$i("D3.fontWeight"),lineHeight:$i("D3.lineHeight"),letterSpacing:$i("D3.letterSpacing")},D4:{fontFamily:$i("D4.fontFamily"),fontSize:$i("D4.fontSize"),fontWeight:$i("D4.fontWeight"),lineHeight:$i("D4.lineHeight"),letterSpacing:$i("D4.letterSpacing")},DBody:{fontFamily:$i("DBody.fontFamily"),fontSize:$i("DBody.fontSize"),fontWeight:$i("DBody.fontWeight"),lineHeight:$i("DBody.lineHeight"),letterSpacing:$i("DBody.letterSpacing")},H1:{fontFamily:$i("H1.fontFamily"),fontSize:$i("H1.fontSize"),fontWeight:$i("H1.fontWeight"),lineHeight:$i("H1.lineHeight"),letterSpacing:$i("H1.letterSpacing")},H2:{fontFamily:$i("H2.fontFamily"),fontSize:$i("H2.fontSize"),fontWeight:$i("H2.fontWeight"),lineHeight:$i("H2.lineHeight"),letterSpacing:$i("H2.letterSpacing")},H3:{fontFamily:$i("H3.fontFamily"),fontSize:$i("H3.fontSize"),fontWeight:$i("H3.fontWeight"),lineHeight:$i("H3.lineHeight"),letterSpacing:$i("H3.letterSpacing")},H4:{fontFamily:$i("H4.fontFamily"),fontSize:$i("H4.fontSize"),fontWeight:$i("H4.fontWeight"),lineHeight:$i("H4.lineHeight"),letterSpacing:$i("H4.letterSpacing")},H5:{fontFamily:$i("H5.fontFamily"),fontSize:$i("H5.fontSize"),fontWeight:$i("H5.fontWeight"),lineHeight:$i("H5.lineHeight"),letterSpacing:$i("H5.letterSpacing")},H6:{fontFamily:$i("H6.fontFamily"),fontSize:$i("H6.fontSize"),fontWeight:$i("H6.fontWeight"),lineHeight:$i("H6.lineHeight"),letterSpacing:$i("H6.letterSpacing")},Body:{fontFamily:$i("Body.fontFamily"),fontSize:$i("Body.fontSize"),fontWeight:$i("Body.fontWeight"),lineHeight:$i("Body.lineHeight"),letterSpacing:$i("Body.letterSpacing")},BodySmall:{fontFamily:$i("BodySmall.fontFamily"),fontSize:$i("BodySmall.fontSize"),fontWeight:$i("BodySmall.fontWeight"),lineHeight:$i("BodySmall.lineHeight"),letterSpacing:$i("BodySmall.letterSpacing")},XSmall:{fontFamily:$i("XSmall.fontFamily"),fontSize:$i("XSmall.fontSize"),fontWeight:$i("XSmall.fontWeight"),lineHeight:$i("XSmall.lineHeight"),letterSpacing:$i("XSmall.letterSpacing")}},wi=[Lr.OpenSans,Lr.PlusJakartaSans],xi=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Di=(e,t)=>r=>{var n;const i=Fi[e].fontFamily(r),a=Fi[e].fontWeight(r),o=wi.find((e=>Object.values(e).includes(i)));return o?y`
                font-family: ${xi(o,t)||xi(o,a)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(n=Bi(t)||a)&&void 0!==n?n:"normal"};
        `},Bi=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Oi=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},_i=(e,t,r=!1)=>n=>{const i=Fi[e],a=i.fontSize(n);return y`
            ${Di(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${y`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},ki=(e=!1,t=!1,r=void 0)=>t?y`
            display: block;
            ${Oi(r)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${Oi(r)}
        `;function Ei(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;const ji={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Hi=e=>t=>{const r=t.theme,n=bi(ji,r[vi.colorScheme]);return r.options&&r.options.color?yi(n,e,r.options.color):yi(n,e)},zi={Brand:{1:Hi("Brand.1"),2:Hi("Brand.2"),3:Hi("Brand.3"),4:Hi("Brand.4"),5:Hi("Brand.5"),6:Hi("Brand.6")},Primary:Hi("Primary"),PrimaryDark:Hi("PrimaryDark"),Secondary:Hi("Secondary"),Accent:{Light:{1:Hi("Accent.Light.1"),2:Hi("Accent.Light.2"),3:Hi("Accent.Light.3"),4:Hi("Accent.Light.4"),5:Hi("Accent.Light.5"),6:Hi("Accent.Light.6")},Dark:{1:Hi("Accent.Dark.1"),2:Hi("Accent.Dark.2"),3:Hi("Accent.Dark.3")}},Neutral:{1:Hi("Neutral.1"),2:Hi("Neutral.2"),3:Hi("Neutral.3"),4:Hi("Neutral.4"),5:Hi("Neutral.5"),6:Hi("Neutral.6"),7:Hi("Neutral.7"),8:Hi("Neutral.8")},Validation:{Green:{Text:Hi("Validation.Green.Text"),Icon:Hi("Validation.Green.Icon"),Border:Hi("Validation.Green.Border"),Background:Hi("Validation.Green.Background")},Orange:{Text:Hi("Validation.Orange.Text"),Icon:Hi("Validation.Orange.Icon"),Border:Hi("Validation.Orange.Border"),Background:Hi("Validation.Orange.Background"),Badge:Hi("Validation.Orange.Badge")},Red:{Text:Hi("Validation.Red.Text"),Icon:Hi("Validation.Red.Icon"),Border:Hi("Validation.Red.Border"),Background:Hi("Validation.Red.Background")},Blue:{Text:Hi("Validation.Blue.Text"),Icon:Hi("Validation.Blue.Icon"),Border:Hi("Validation.Blue.Border"),Background:Hi("Validation.Blue.Background")}},Shadow:{Accent:Hi("Shadow.Accent"),Red:Hi("Shadow.Red"),Elevation:Hi("Shadow.Elevation")}};var Ai;!function(e){e.D1=m.h1`
        ${e=>y`
                ${_i("D1",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>y`
                ${_i("D2",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>y`
                ${_i("D3",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>y`
                ${_i("D4",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>y`
                ${_i("DBody",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>y`
                ${_i("H1",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>y`
                ${_i("H2",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>y`
                ${_i("H3",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>y`
                ${_i("H4",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>y`
                ${_i("H5",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>y`
                ${_i("H6",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>y`
                ${_i("Body",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>y`
                ${_i("BodySmall",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>y`
                ${_i("XSmall",e.weight,e.paragraph)}
                color: ${zi.Neutral[1]};
                ${ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Mi(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Mi(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ai||(Ai={}));const Ti=m.a`
    ${e=>y`
            ${_i(e.textStyle,e.weight)}
            color: ${zi.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${zi.Secondary};

                svg {
                    color: ${zi.Secondary};
                }
            }
        `}
`,Pi=m(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Mi=r=>{var{external:n=!1,children:i}=r,a=Ei(r,["external","children"]);return e(Ti,Object.assign({},a,{children:[i,n&&t(Pi,{})]}))};var Ii;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ii||(Ii={}));const Ci={[vi.colorScheme]:"base",[vi.textStyleScheme]:"base",[vi.designTokenScheme]:"base",[vi.resourceScheme]:"base"};var Li;vi.colorScheme,vi.textStyleScheme,vi.designTokenScheme,vi.resourceScheme,vi.colorScheme,vi.textStyleScheme,vi.designTokenScheme,vi.resourceScheme,vi.colorScheme,vi.textStyleScheme,vi.designTokenScheme,vi.resourceScheme,vi.colorScheme,vi.textStyleScheme,vi.designTokenScheme,vi.resourceScheme,vi.colorScheme,vi.textStyleScheme,vi.designTokenScheme,vi.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Li||(Li={}));const Ni=y`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Wi=m.div`
    ${e=>_i("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?zi.Primary:zi.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ni}
`,Ri=m.div`
    color: ${zi.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ni}

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${_i("BodySmall","semibold")}
                `:y`
                    ${_i("Body","regular")}
                `}
`,Yi=m.span`
    ${e=>_i("small"===e.$variant?"BodySmall":"Body","semibold")}
`,Vi=m.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${Wi} {
                        display: inline;
                    }

                    ${Ri} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Ji=m.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Ui=m.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Zi=({bold:n,displayType:i="inline",label:a,searchTerm:o,maxLines:s=2,selected:l,sublabel:c,truncationType:u="middle",variant:d})=>{const f=b()||Ci,g=Fi.Body.fontSize({theme:f}),m=Fi.Body.fontFamily({theme:f}),{ref:y,width:v}=Cr(),S=h((e=>{if("inline"!==i)return!1;return Li.getTextWidth(e,`${g}rem '${m}'`)>v*s-50}),[v,i,g,m,s]),$=p((()=>S(a)),[S,a]),F=p((()=>c&&S(c)),[S,c]),w=$||F?"next-line":i,x=n=>{if(!o)return n;const i=o.toLowerCase().trim(),s=n.toLowerCase().indexOf(i),l=s+o.length;return-1===s?n:e(r,{children:[a.slice(0,s),t(Yi,Object.assign({$variant:d},{children:a.slice(s,l)})),a.slice(l)]})},D=n=>e(r,{children:[t(Ji,Object.assign({$maxLines:s,"aria-hidden":!0},{children:x(n)})),t(Ui,Object.assign({$maxLines:s,"aria-hidden":!0},{children:x(n)}))]});return e(Vi,Object.assign({ref:y,$labelDisplayType:w},{children:[t(Wi,Object.assign({"aria-label":a,$bold:n,$maxLines:s,$selected:l,$truncateType:u,$variant:d},{children:"middle"===u&&$?D(a):x(a)})),c&&t(Ri,Object.assign({"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:i},{children:"middle"===u&&F?D(c):c}))]}))};var Xi=jn;var Gi=jn,qi=Le,Ki=Zn;var Qi=jn,ea=function(){this.__data__=new Xi,this.size=0},ta=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},ra=function(e){return this.__data__.get(e)},na=function(e){return this.__data__.has(e)},ia=function(e,t){var r=this.__data__;if(r instanceof Gi){var n=r.__data__;if(!qi||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ki(n)}return r.set(e,t),this.size=r.size,this};function aa(e){var t=this.__data__=new Qi(e);this.size=t.size}aa.prototype.clear=ea,aa.prototype.delete=ta,aa.prototype.get=ra,aa.prototype.has=na,aa.prototype.set=ia;var oa=aa;var sa=Zn,la=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ca=function(e){return this.__data__.has(e)};function ua(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new sa;++t<r;)this.add(e[t])}ua.prototype.add=ua.prototype.push=la,ua.prototype.has=ca;var da=ua,fa=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},ha=function(e,t){return e.has(t)};var pa=function(e,t,r,n,i,a){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),u=a.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&r?new da:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var p=e[d],g=t[d];if(n)var m=o?n(g,p,d,t,e,a):n(p,g,d,e,t,a);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!fa(t,(function(e,t){if(!ha(h,t)&&(p===e||i(p,e,r,n,a)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!i(p,g,r,n,a)){f=!1;break}}return a.delete(e),a.delete(t),f};var ga=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},ma=ne.Uint8Array,ya=yn,ba=pa,va=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Sa=ga,$a=ie?ie.prototype:void 0,Fa=$a?$a.valueOf:void 0;var wa=function(e,t,r,n,i,a,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new ma(e),new ma(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ya(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=va;case"[object Set]":var l=1&n;if(s||(s=Sa),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var u=ba(s(e),s(t),n,i,a,o);return o.delete(e),u;case"[object Symbol]":if(Fa)return Fa.call(e)==Fa.call(t)}return!1};var xa=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Da=xa,Ba=gt;var Oa=function(e,t,r){var n=t(e);return Ba(e)?n:Da(n,r(e))};var _a=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a},ka=function(){return[]},Ea=Object.prototype.propertyIsEnumerable,ja=Object.getOwnPropertySymbols,Ha=ja?function(e){return null==e?[]:(e=Object(e),_a(ja(e),(function(t){return Ea.call(e,t)})))}:ka;var za=/^(?:0|[1-9]\d*)$/;var Aa=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Ta=pt,Pa=gt,Ma=Ft,Ia=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&za.test(e))&&e>-1&&e%1==0&&e<t},Ca=At,La=Object.prototype.hasOwnProperty;var Na=function(e,t){var r=Pa(e),n=!r&&Ta(e),i=!r&&!n&&Ma(e),a=!r&&!n&&!i&&Ca(e),o=r||n||i||a,s=o?Aa(e.length,String):[],l=s.length;for(var c in e)!t&&!La.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ia(c,l))||s.push(c);return s},Wa=Q,Ra=vt;var Ya=Oa,Va=Ha,Ja=function(e){return Ra(e)?Na(e):Wa(e)};var Ua=function(e){return Ya(e,Ja,Va)},Za=Object.prototype.hasOwnProperty;var Xa=oa,Ga=pa,qa=wa,Ka=function(e,t,r,n,i,a){var o=1&r,s=Ua(e),l=s.length;if(l!=Ua(t).length&&!o)return!1;for(var c=l;c--;){var u=s[c];if(!(o?u in t:Za.call(t,u)))return!1}var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var h=!0;a.set(e,t),a.set(t,e);for(var p=o;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var y=o?n(m,g,u,t,e,a):n(g,m,u,e,t,a);if(!(void 0===y?g===m||i(g,m,r,n,a):y)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(h=!1)}return a.delete(e),a.delete(t),h},Qa=at,eo=gt,to=Ft,ro=At,no="[object Arguments]",io="[object Array]",ao="[object Object]",oo=Object.prototype.hasOwnProperty;var so=function(e,t,r,n,i,a){var o=eo(e),s=eo(t),l=o?io:Qa(e),c=s?io:Qa(t),u=(l=l==no?ao:l)==ao,d=(c=c==no?ao:c)==ao,f=l==c;if(f&&to(e)){if(!to(t))return!1;o=!0,u=!1}if(f&&!u)return a||(a=new Xa),o||ro(e)?Ga(e,t,r,n,i,a):qa(e,t,l,r,n,i,a);if(!(1&r)){var h=u&&oo.call(e,"__wrapped__"),p=d&&oo.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return a||(a=new Xa),i(g,m,r,n,a)}}return!!f&&(a||(a=new Xa),Ka(e,t,r,n,i,a))},lo=ot;var co=function e(t,r,n,i,a){return t===r||(null==t||null==r||!lo(t)&&!lo(r)?t!=t&&r!=r:so(t,r,n,i,e,a))},uo=co;var fo=J((function(e,t){return uo(e,t)}));const ho={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},po=e=>Object.keys(ho).reduce(((t,r)=>{const n=ho[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),go=po("max-width"),mo=(po("min-width"),ho),yo=m.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,bo=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,vo=m.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||zi.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${bo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,So=m(vo)`
    animation-delay: -0.45s;
`,$o=m(vo)`
    animation-delay: -0.3s;
`,Fo=m(vo)`
    animation-delay: -0.15s;
`,wo={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${zi.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${zi.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${zi.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${zi.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${zi.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${zi.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},xo=e=>t=>{var r;const n=t.theme,i=bi(wo,n[vi.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?yi(i,e,n.options.designToken):yi(i,e)},Do={InputBoxShadow:xo("InputBoxShadow"),InputErrorBoxShadow:xo("InputErrorBoxShadow"),ElevationBoxShadow:xo("ElevationBoxShadow"),Table:{Header:xo("Table.Header"),Cell:{Primary:xo("Table.Cell.Primary"),Secondary:xo("Table.Cell.Secondary"),Selected:xo("Table.Cell.Selected"),Hover:xo("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:xo("Button.Danger.BackgroundColor"),Hover:xo("Button.Danger.Hover"),Primary:xo("Button.Danger.Primary"),Border:xo("Button.Danger.Border")}}};m.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${zi.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Do.Button.Danger.Border:zi.Primary};

                    color: ${e.$buttonIsDanger?Do.Button.Danger.Primary:zi.Primary};
                `;case"light":return y`
                    background-color: ${zi.Neutral[8]};
                    border: 1px solid ${zi.Neutral[5]};

                    color: ${e.$buttonIsDanger?Do.Button.Danger.Primary:zi.Primary};
                `;case"disabled":return y`
                    background-color: ${zi.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${zi.Neutral[3]};
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Do.Button.Danger.Primary:zi.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Do.Button.Danger.Hover:zi.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Do.Button.Danger.BackgroundColor:zi.Primary};
                    border: 1px solid transparent;

                    ${go.mobileL} {
                        width: 100%;
                    }

                    color: ${zi.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    ${_i("H5","semibold")}

                    ${go.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${_i("H4","semibold")}

                    ${go.mobileS} {
                        height: auto;
                    }
                `}
`;const Bo=m((({color:r,className:n,size:i=18})=>e(yo,Object.assign({className:n,$size:i,$color:r},{children:[t(vo,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(So,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t($o,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(Fo,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Do.Button.Danger.Primary:zi.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=zi.Neutral[3](e);break;default:t=zi.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Oo={exports:{}};Oo.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},b={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:o,m:a,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",S={};S[v]=m;var $="$isDayjsObject",F=function(e){return e instanceof B||!(!e||!e[$])},w=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();S[a]&&(i=a),r&&(S[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;S[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},x=function(e,t){if(F(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new B(r)},D=b;D.l=w,D.i=F,D.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!D.u(t)||t,u=D.p(e),h=function(e,t){var i=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var v=this.$locale().weekStart||0,S=(g<v?g+7:g)-v;return h(n?y-S:y+(6-S),m);case s:case f:return p(b+"Hours",0);case o:return p(b+"Minutes",1);case a:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=D.p(e),u="set"+(this.$u?"UTC":""),h=(r={},r[s]=u+"Date",r[f]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[o]=u+"Hours",r[a]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(n,u){var f,h=this;n=Number(n);var p=D.p(u),g=function(e){var t=x(h);return D.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[a]=t,f[o]=r,f[i]=e,f)[p]||1,y=this.$d.getTime()+n*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},f=function(e){return D.s(a%12||12,e,"0")},p=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(a,o,!0);case"A":return p(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,f,h){var p,g=this,m=D.p(f),y=x(n),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,S=function(){return D.m(g,y)};switch(m){case d:p=S()/12;break;case c:p=S();break;case u:p=S()/3;break;case l:p=(v-b)/6048e5;break;case s:p=(v-b)/864e5;break;case o:p=v/r;break;case a:p=v/t;break;case i:p=v/e;break;default:p=v}return h?p:D.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=w(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=B.prototype;return x.prototype=O,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,B,x),e.$i=!0),x},x.locale=w,x.isDayjs=F,x.unix=function(e){return x(1e3*e)},x.en=S[v],x.Ls=S,x.p={},x}();var _o=J(Oo.exports),ko={exports:{}};ko.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],f=u&&u[0],h=u&&u[1];o[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(n),u=a.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),a=this.$locale(),!l&&d&&(a=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,h=new Date,p=o||(i||a?1:h.getDate()),g=i||h.getFullYear(),m=0;i&&!a||(m=a>0?a-1:h.getMonth());var y=s||0,b=l||0,v=c||0,S=u||0;return d?new Date(Date.UTC(g,m,p,y,b,v,S+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,b,v,S)):new Date(g,m,p,y,b,v,S)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){o[1]=s[p-1];var g=r.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Eo=J(ko.exports),jo={exports:{}};jo.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Ho=J(jo.exports),zo={exports:{}};zo.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ao=J(zo.exports),To={exports:{}};To.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Po,Mo,Io,Co=J(To.exports),Lo={exports:{}},No=J(Lo.exports=(Po={year:0,month:1,day:2,hour:3,minute:4,second:5},Mo={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Mo[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Mo[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,u=Po[l];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],f=24===d?0:d,h=a[0]+"-"+a[1]+"-"+a[2]+" "+f+":"+a[4]+":"+a[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],f=r(u).utcOffset(d);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));_o.extend(Ho),_o.extend(Co),_o.extend(Ao),_o.extend(Eo),_o.extend(No),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=_o(t).startOf("week");return Wo(r).map((e=>Ro(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ro(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(_o(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+_o(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=_o(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?_o(n):void 0,i?_o(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Io||(Io={}));const Wo=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ro=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Yo=[1,3,5,7,8,10,12],Vo=[4,6,9,11];var Jo,Uo,Zo;function Xo(e){const t=a(null);return f((()=>{t.current=e}),[e]),h(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":Yo.includes(a)?Math.min(i,31).toString():Vo.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=_o(e,r);return _o(t,r).diff(n,"minute")},e.toDayjs=e=>e?_o(e):_o(),e.addMinutesToTime=(e,t,r="HH:mm")=>_o(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>_o(e).isSame(_o(t),r)}(Jo||(Jo={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!_o(e).isBefore(n,"day"))||!(!i||!_o(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(_o(e).isValid())return e}return""}}(Uo||(Uo={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Zo||(Zo={}));i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}});const Go=y`
    border: 1px solid ${zi.Accent.Light[1]};
    box-shadow: ${Do.InputBoxShadow};
`,qo=y`
    border: 1px solid ${zi.Accent.Light[1]};
    box-shadow: none;
`,Ko=y`
    border: 1px solid ${zi.Neutral[5]};
    box-shadow: none;
`,Qo=y`
    border: 1px solid ${zi.Validation.Red.Border};
    box-shadow: ${Do.InputErrorBoxShadow};
`,es=m.div`
    border: 1px solid ${zi.Neutral[5]};
    border-radius: 4px;
    background: ${zi.Neutral[8]};

    :focus-within {
        ${Go}
    }
    ${e=>e.$focused&&Go}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${qo}
                }
                ${e.$focused&&qo}
            `:e.$disabled?y`
                background: ${zi.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Ko}
                }
                ${e.$focused&&Ko}
            `:e.$error?y`
                border: 1px solid ${zi.Validation.Red.Border};

                :focus-within {
                    ${Qo}
                }
                ${e.$focused&&Qo}
            `:void 0}
`;m(es)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ts=m.input`
    ${e=>_i("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${zi.Neutral[1]};
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
        color: ${zi.Neutral[3]};
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
`,rs=m.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${zi.Primary};
    }
`,ns=m.div`
    overflow: hidden;
    border: 1px solid ${zi.Neutral[5]};
    border-radius: 4px;
    background: ${zi.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${go.mobileL} {
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
        background: ${zi.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,is=m.div`
    background: transparent;
    padding: 0.5rem;
`;m.ul`
    list-style-type: none;
`,m.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${zi.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${zi.Accent.Light[5]};
        `}
`,m(x)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${zi.Primary};
`,m.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`;const as=m(w)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${zi.Primary};
`,os=m(F)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${zi.Accent.Light[2]};
`,ss=m.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,ls=m(rs)`
    ${e=>_i("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${zi.Primary};
`,cs=m(ls)`
    outline-offset: 0.25rem;
`,us=m(ls)`
    padding: 0.5rem 1rem;
`,ds=m.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,fs=m.div`
    ${e=>_i("small"===e.$variant?"BodySmall":"Body","regular")}
`,hs=m($)`
    ${e=>{const t="small"===e.$variant?1:1.125;return y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${zi.Validation.Red.Icon};
`,ps=m.button`
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

        ${({$highlight:e})=>e&&y`
                background-color: ${zi.Neutral[7]};
            `}
    }
`,gs=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=Ei(e,["children","focusHighlight","focusOutline","type"]);return t(ps,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),ms=e=>"small"===e?1:1.125,ys=e=>y`
        height: ${ms(e)}rem;
        width: ${ms(e)}rem;
    `,bs=m.div`
    background: ${zi.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,vs=m.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,Ss=m(ts)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,$s=m(B)`
    color: ${zi.Neutral[3]};
    flex-shrink: 0;
    ${e=>ys(e.$variant)}
`,Fs=m(gs)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${zi.Neutral[3]};
    cursor: pointer;

    ${e=>y`
            svg {
                ${ys(e.$variant)}
            }
        `}
`,ws=g(((r,n)=>{var{value:i,variant:a,onClear:o}=r,s=Ei(r,["value","variant","onClear"]);return e(bs,{children:[e(vs,{children:[t($s,{$variant:a,"aria-hidden":!0}),t(Ss,Object.assign({ref:n,value:i,$variant:a},s))]}),i&&t(Fs,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:a},{children:t(D,{"aria-hidden":!0})}))]})})),xs="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ds=m(rs)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>_i("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Bs=m.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${xs};

    svg {
        color: ${zi.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Fi.BodySmall.fontSize:Fi.Body.fontSize;return y`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,Os=g((({children:r,disabled:n,expanded:i,listboxId:a,popupRole:o,readOnly:s,variant:l},c)=>e(Ds,Object.assign({ref:c,type:"button","aria-expanded":i,"aria-haspopup":o,"data-testid":"selector",disabled:n,"aria-controls":a,$variant:l},{children:[r,!s&&t(Bs,Object.assign({$expanded:i,$variant:l},{children:t(O,{"aria-hidden":!0})}))]}))));var _s=Symbol.for("immer-nothing"),ks=Symbol.for("immer-draftable"),Es=Symbol.for("immer-state"),js="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function Hs(e,...t){if("production"!==process.env.NODE_ENV){const r=js[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var zs=Object.getPrototypeOf;function As(e){return!!e&&!!e[Es]}function Ts(e){return!!e&&(Ms(e)||Array.isArray(e)||!!e[ks]||!!e.constructor?.[ks]||Ws(e)||Rs(e))}var Ps=Object.prototype.constructor.toString();function Ms(e){if(!e||"object"!=typeof e)return!1;const t=zs(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Ps}function Is(e,t){0===Cs(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function Cs(e){const t=e[Es];return t?t.type_:Array.isArray(e)?1:Ws(e)?2:Rs(e)?3:0}function Ls(e,t){return 2===Cs(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Ns(e,t,r){const n=Cs(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function Ws(e){return e instanceof Map}function Rs(e){return e instanceof Set}function Ys(e){return e.copy_||e.base_}function Vs(e,t){if(Ws(e))return new Map(e);if(Rs(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Ms(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[Es];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(zs(e),t)}{const t=zs(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function Js(e,t=!1){return Zs(e)||As(e)||!Ts(e)||(Cs(e)>1&&(e.set=e.add=e.clear=e.delete=Us),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>Js(t,!0)))),e}function Us(){Hs(2)}function Zs(e){return Object.isFrozen(e)}var Xs,Gs={};function qs(e){const t=Gs[e];return t||Hs(0,e),t}function Ks(){return Xs}function Qs(e,t){t&&(qs("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function el(e){tl(e),e.drafts_.forEach(nl),e.drafts_=null}function tl(e){e===Xs&&(Xs=e.parent_)}function rl(e){return Xs={drafts_:[],parent_:Xs,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function nl(e){const t=e[Es];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function il(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[Es].modified_&&(el(t),Hs(4)),Ts(e)&&(e=al(t,e),t.parent_||sl(t,e)),t.patches_&&qs("Patches").generateReplacementPatches_(r[Es].base_,e,t.patches_,t.inversePatches_)):e=al(t,r,[]),el(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==_s?e:void 0}function al(e,t,r){if(Zs(t))return t;const n=t[Es];if(!n)return Is(t,((i,a)=>ol(e,n,t,i,a,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return sl(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,a=!1;3===n.type_&&(i=new Set(t),t.clear(),a=!0),Is(i,((i,o)=>ol(e,n,t,i,o,r,a))),sl(e,t,!1),r&&e.patches_&&qs("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function ol(e,t,r,n,i,a,o){if("production"!==process.env.NODE_ENV&&i===r&&Hs(5),As(i)){const o=al(e,i,a&&t&&3!==t.type_&&!Ls(t.assigned_,n)?a.concat(n):void 0);if(Ns(r,n,o),!As(o))return;e.canAutoFreeze_=!1}else o&&r.add(i);if(Ts(i)&&!Zs(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;al(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||sl(e,i)}}function sl(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Js(t,r)}var ll={get(e,t){if(t===Es)return e;const r=Ys(e);if(!Ls(r,t))return function(e,t,r){const n=dl(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!Ts(n)?n:n===ul(e.base_,t)?(hl(e),e.copy_[t]=pl(n,e)):n},has:(e,t)=>t in Ys(e),ownKeys:e=>Reflect.ownKeys(Ys(e)),set(e,t,r){const n=dl(Ys(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=ul(Ys(e),t),o=n?.[Es];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((i=r)===(a=n)?0!==i||1/i==1/a:i!=i&&a!=a)&&(void 0!==r||Ls(e.base_,t)))return!0;hl(e),fl(e)}var i,a;return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==ul(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,hl(e),fl(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=Ys(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){Hs(11)},getPrototypeOf:e=>zs(e.base_),setPrototypeOf(){Hs(12)}},cl={};function ul(e,t){const r=e[Es];return(r?Ys(r):e)[t]}function dl(e,t){if(!(t in e))return;let r=zs(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=zs(r)}}function fl(e){e.modified_||(e.modified_=!0,e.parent_&&fl(e.parent_))}function hl(e){e.copy_||(e.copy_=Vs(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Is(ll,((e,t)=>{cl[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),cl.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&Hs(13),cl.set.call(this,e,t,void 0)},cl.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&Hs(14),ll.set.call(this,e[0],t,r,e[0])};function pl(e,t){const r=Ws(e)?qs("MapSet").proxyMap_(e,t):Rs(e)?qs("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Ks(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,a=ll;r&&(i=[n],a=cl);const{revoke:o,proxy:s}=Proxy.revocable(i,a);return n.draft_=s,n.revoke_=o,s}(e,t);return(t?t.scope_:Ks()).drafts_.push(r),r}function gl(e){if(!Ts(e)||Zs(e))return e;const t=e[Es];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Vs(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Vs(e,!0);return Is(r,((e,t)=>{Ns(r,e,gl(t))})),t&&(t.finalized_=!1),r}var ml=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&Hs(6),void 0!==r&&"function"!=typeof r&&Hs(7),Ts(e)){const i=rl(this),a=pl(e,void 0);let o=!0;try{n=t(a),o=!1}finally{o?el(i):tl(i)}return Qs(i,r),il(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===_s&&(n=void 0),this.autoFreeze_&&Js(n,!0),r){const t=[],i=[];qs("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}Hs(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Ts(e)||Hs(8),As(e)&&(e=function(e){As(e)||Hs(10,e);return gl(e)}(e));const t=rl(this),r=pl(e,void 0);return r[Es].isManual_=!0,tl(t),r}finishDraft(e,t){const r=e&&e[Es];r&&r.isManual_||Hs(9);const{scope_:n}=r;return Qs(n,t),il(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=qs("Patches").applyPatches_;return As(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},yl=ml.produce;ml.produceWithPatches.bind(ml),ml.setAutoFreeze.bind(ml),ml.setUseStrictShallowCopy.bind(ml),ml.applyPatches.bind(ml),ml.createDraft.bind(ml),ml.finishDraft.bind(ml);const bl=(e,t,r)=>yl(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n];if(i.checked=!!t.find((e=>fo(e,i.keyPath))),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}})),vl=(e,t)=>{const[r,...n]=t;if(Yt(e)||Yt(r))return;const i=e.find((e=>e.key===r));return i&&n.length?vl(i.subItems,n):i},Sl=m.li`
    display: ${e=>e.$visible?"flex":"none"};
`,$l=m.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${zi.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${zi.Accent.Light[5]};
        `}
`,Fl=m.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,wl=m.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${zi.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return y`
                    transform: rotate(90deg);
                `}}
    }
`,xl=m.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,Dl=m.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,Bl=m(x)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${zi.Primary};
`,Ol=m(E)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${zi.Primary};
`,_l=({listItems:r,multiSelect:n,selectedKeyPaths:i,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:c=2,variant:u="default",listboxId:f,width:h,mode:g="default",selectableCategory:m,onSelectItem:y,onSelectAll:b,onRetry:v,enableSearch:S,hideNoResultsDisplay:$,searchPlaceholder:F="Search",onSearch:w})=>{const x=n||m,[D,B]=o(""),O=D.toLowerCase().trim(),[k,E]=o(!1),j=a(),H=a(),z=a([]),A=a(),T=(()=>{const[e,t]=o(!1);return d((()=>{t(!0)}),[]),e})(),[P,M]=o([]),[I,C]=o([]),L=p((()=>{let e=0;for(const t of P)t.level>e&&(e=t.level);return e}),[P]),[N,W]=o(0),R=e=>{const t=e.target.value;B(t),""===t?E(!1):t.trim().length>=3&&E(!0),null==w||w()},Y=()=>{B(""),E(!1),A.current.focus(),null==w||w()},V=()=>{null==v||v()},J=()=>{if(0===i.length){const e=[],t=[];P.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==b||b(e,t)}else null==b||b([],[])},U=Xo(((e,t)=>((e,t,r,n,i)=>{const a=[],o=(e,s)=>{var l,c;const u=[],d=!!e.find((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));for(let f=0;f<e.length;f++){const h=e[f],p=s?s.level+1:0,g={item:h,index:a.length,indexInParent:f,parentSetSize:e.length,keyPath:s?[...s.keyPath,h.key]:[h.key],parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||s.expanded,expanded:i,checked:!1,hasSubItems:!!(null===(l=h.subItems)||void 0===l?void 0:l.length),subItemIndexes:[],hasNestedSiblings:d,matched:!!n&&-1!==h.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(g.checked=!!t.find((e=>fo(e,g.keyPath))),u.push(g),a.push(g),null===(c=h.subItems)||void 0===c?void 0:c.length){const e=o(h.subItems,g);if(r&&!0!==g.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?g.checked=!0:r&&(g.checked="mixed")}g.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),g.subItemIndexes=e.map((e=>e.index))}}return u};return o(e,void 0),a})(e,i,n,O,t))),Z=Xo((e=>{return i.length?(t=U(e,!1),yl(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>yl(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),a=e[r].keyPath.slice(0,i.length);fo(i,a)&&(n.visible=!0)}return e})))(U(e,!1));var t})),X=Xo((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(O))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),G=Xo((()=>{M((e=>bl(e,i,n))),k&&C((e=>bl(e,i,n)))})),q=(e,t)=>{const r=((e,t,r)=>yl(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],a=e[t.parentIndex],o=t.keyPath.slice(0,n.length);if(!fo(n,o))break;t.visible=r&&a.expanded&&a.visible}})))(k?I:P,e,t);W(e),k?C(r):M(r)};((e,t,r="window",n)=>{const i=a();d((()=>{i.current=t}),[t]),d((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const a=e=>i.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r])})("keydown",(e=>{const t=k?I:P;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return n;return-1})(t,(e=>e.visible),N+1);r>=0&&(W(r),z.current[r].focus());break}case"ArrowUp":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return n;return-1})(t,(e=>e.visible),N-1);r>=0?(W(r),z.current[r].focus()):0===N&&A.current&&(A.current.focus(),W(-1));break}case"ArrowRight":e.preventDefault(),q(N,!0);break;case"ArrowLeft":e.preventDefault(),q(N,!1);break;case"Space":if(document.activeElement===z.current[N]){e.preventDefault();const r=t[N];if(r.hasSubItems&&!x)return;null==y||y(r)}}})),d((()=>{let e;"default"===g?e=Z(r):"expand"===g?e=U(r,!0):"collapse"===g&&(e=U(r,!1)),M(e)}),[U,Z,r,g]),d((()=>{G()}),[n,i,G]),d((()=>{if(k&&D.trim().length>=3){const e=X(r),t=(e=>yl(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(U(e,!1));C(t)}}),[X,U,r,k,D]),d((()=>{T||(A.current?(W(-1),setTimeout((()=>{var e;return null===(e=A.current)||void 0===e?void 0:e.focus()}),200)):z.current[N]?setTimeout((()=>{var e;return null===(e=z.current[N])||void 0===e?void 0:e.focus()}),200):(W(0),setTimeout((()=>{var e;return null===(e=z.current[0])||void 0===e?void 0:e.focus()}),200)))}),[N,T,W]);const K=()=>{if(S&&"success"===s)return t(ws,{ref:A,onChange:R,value:D,placeholder:F,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Y,variant:u})},Q=()=>{if(n&&!k&&P.length>0&&"success"===s)return t(ss,{children:t(us,Object.assign({onClick:J,type:"button",$variant:u},{children:0===i.length?"Select all":"Clear all"}))})},ee=()=>{if(!$&&k&&0===I.length&&"success"===s)return e(ds,Object.assign({"data-testid":"list-no-results"},{children:[t(hs,{$variant:u}),t(fs,Object.assign({$variant:u},{children:"No results found."}))]}))},te=()=>{if(v&&"loading"===s){const r="small"===u?16:18;return e(ds,Object.assign({"data-testid":"list-loading"},{children:[t(Bo,{$buttonStyle:"secondary",size:r}),t(fs,Object.assign({$variant:u},{children:"Loading..."}))]}))}},re=()=>{if(v&&"fail"===s)return e(ds,Object.assign({"data-testid":"list-fail"},{children:[t(hs,{"data-testid":"load-error-icon",$variant:u}),t(fs,Object.assign({$variant:u},{children:"Failed to load."}))," ",t(cs,Object.assign({onClick:V,type:"button",$variant:u},{children:"Try again."}))]}))},ne=e=>{if(n)switch(e.checked){case"mixed":return t(Ol,{"aria-hidden":!0});case!0:return t(as,{"aria-hidden":!0});default:return t(os,{"aria-hidden":!0})}if(!e.hasSubItems)return t(Dl,Object.assign({$hasNestedSiblings:e.hasNestedSiblings||0===e.level},{children:e.checked&&t(Bl,{"aria-hidden":!0})}))},ie=()=>(k?I:P).map(((r,i)=>{const{item:a,level:o,visible:s,expanded:u,keyPath:d,checked:f,hasSubItems:h,indexInParent:p,parentSetSize:g}=r,m=N===i,b=h&&!x;return e(Sl,Object.assign({$visible:s},{children:[L>0&&t(Fl,{$level:o}),L>0&&!h&&n&&t(xl,{}),e($l,Object.assign({"aria-checked":f,"aria-selected":!!f,"aria-expanded":h?u:void 0,"aria-level":o+1,"aria-posinset":p+1,"aria-setsize":g,"data-testid":"list-item",onClick:e=>{var t;e.stopPropagation(),b?q(i,!u):(W(t=i),null==y||y((k?I:P)[t]))},onMouseEnter:()=>{W(i)},ref:e=>z.current[i]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b},{children:[h&&t(wl,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),q(i,!u)},$expanded:u},{children:t(_,{})})),ne(r),t(Zi,{bold:h,searchTerm:k?O:void 0,label:a.label,selected:!!f,truncationType:l,maxLines:c})]}))]}),`[${d.join("---")}]`)}));return t(ns,Object.assign({"data-testid":"dropdown-container",ref:j,$width:h},{children:e(is,Object.assign({"data-testid":"nested-dropdown-list"},{children:[K(),Q(),ee(),te(),re(),t("div",Object.assign({"aria-multiselectable":n,id:f,ref:H,role:"tree"},{children:ie()}))]}))}))},kl=e=>"small"===e?2.5:3;m.div`
    position: relative;
    width: 100%;
    ${e=>{const t=kl(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const El=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>kl(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${zi.Accent.Light[3]};
    }
`,jl=m.button`
    ${El}
    cursor: pointer;
`;m.div`
    ${El}
`;const Hl=v`
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
`;m.div`
    position: relative;
    border: 1px solid ${zi.Neutral[5]};
    border-radius: ${"4px"};
    background: ${zi.Neutral[8]};

    :focus-within {
        border: 1px solid ${zi.Accent.Light[1]};
        box-shadow: ${Do.InputBoxShadow};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${Hl} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${zi.Neutral[6](e)};

                ${jl} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${zi.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${jl} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${zi.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${zi.Validation.Red.Border(e)};
                    box-shadow: ${Do.InputErrorBoxShadow};
                }
            `:void 0}
`,m.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${xs};
    margin-left: 1rem;
`,m(O)`
    color: ${zi.Neutral[3]};
    ${e=>{let t=Fi.Body.fontSize;return"small"===e.$variant&&(t=Fi.BodySmall.fontSize),y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,m.div`
    height: 1px;
    background: ${zi.Neutral[5]};
    margin: 0 0.5rem;
`;const zl=m.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return y`
                color: ${zi.Neutral[3]};
            `}}
`,Al=m.div`
    ${e=>_i("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Tl=m(Al)`
    color: ${zi.Neutral[3]};
`;var Pl;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Pl||(Pl={}));const Ml=m.div`
    display: flex;
    flex-direction: column;
`,Il=e=>"right"===e?"bottom-end":"bottom-start",Cl=({enabled:n,isOpen:i,onOpen:s,onClose:l,onDismiss:c,renderElement:u,renderDropdown:f,customZIndex:h,clickToToggle:p=!1,offset:g=0,alignment:m="left",fitAvailableHeight:y})=>{var b;const v=a(null),S=a(null),{width:$}=Cr({targetRef:v,handleHeight:!1}),F={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<mo.mobileL;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:w,floatingStyles:x,context:D}=H({open:i,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!i?null==s||s():!e&&i&&(null==l||l(r))},whileElementsMounted:z,placement:Il(m),middleware:[A(g),T(),P({limiter:M()}),I({apply({availableHeight:e}){S.current&&Object.assign(S.current.style,{maxHeight:y?`${e}px`:void 0,overflowY:y?"hidden":void 0})}}),F]}),B=(()=>{const[e,t]=o(void 0),r=j();return d((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Pl.Change,e),r.events.emit(Pl.Ready),()=>r.events.off(Pl.Change,e)}),[r]),e})(),{isMounted:O,styles:_}=C(D,{initial:{opacity:0},open:{opacity:1},duration:300}),k=L(D,{enabled:n,toggle:p}),E=N(D,{enabled:n}),{getReferenceProps:V,getFloatingProps:J}=W([k,E]);return e(r,{children:[t("div",Object.assign({ref:e=>{v.current=e,w.setReference(e)}},V(),{children:u()})),O&&t(R,{children:t(Y,Object.assign({context:D,modal:!1,initialFocus:S,returnFocus:!1},{children:t("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},x),{zIndex:null!==(b=null!=h?h:B)&&void 0!==b?b:50})},J(),{children:t(Ml,Object.assign({ref:S,style:Object.assign({},_),inert:_.opacity<1?"":void 0},{children:f({elementWidth:$})}))}))}))})]})},Ll=({placeholder:e="Select",options:r,disabled:n,error:i,className:s,"data-testid":l,id:c,selectedKeyPath:u,mode:f,valueToStringFunction:h,enableSearch:p,searchPlaceholder:g,selectableCategory:m,hideNoResultsDisplay:y,readOnly:b,onBlur:v,onSearch:S,onSelectOption:$,onShowOptions:F,onHideOptions:w,onRetry:x,optionsLoadState:D="success",optionTruncationType:B="end",variant:O,alignment:_,dropdownZIndex:k})=>{const E=r,[j,H]=o(u?[u]:[]),[z,A]=o(),[T,P]=o(!1),[M,I]=o(!1),[C]=o((()=>Zo.generate())),L=a(),N=a(),W=a();d((()=>{H(u?[u]:[]);const e=vl(E,u||[]);A(null!=e?e:void 0)}),[u,E]);const R=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;H([r]),A({label:n,value:i}),P(!1),Z(!1),null===(t=N.current)||void 0===t||t.focus(),null==$||$(r,i)},Y=()=>{M||T||I(!0)},V=e=>{!M||T||L.current.contains(e.relatedTarget)||(I(!1),null==v||v())},J=()=>{const{label:e,value:t}=z;return h?h(t)||t.toString():e},U=e=>{if("middle"===B){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),Li.truncateOneLine(e,t,120,6)}return e},Z=e=>{!e&&w&&w(),e&&F&&F()};return t(Cl,{enabled:!b&&!n,isOpen:T,renderElement:()=>t(es,Object.assign({className:s,"data-testid":l,id:c,ref:L,tabIndex:-1,onFocus:Y,onBlur:V,$focused:M,$disabled:n,$readOnly:b,$error:i},{children:t(Os,Object.assign({ref:N,disabled:n,expanded:T,listboxId:C,popupRole:"tree",readOnly:b,variant:O},{children:t(zl,Object.assign({ref:W,$disabled:n},{children:Yt(z)?t(Tl,Object.assign({truncateType:B},{children:e})):t(Al,Object.assign({truncateType:B},{children:U(J())}))}))}))})),renderDropdown:({elementWidth:e})=>t(_l,{listboxId:C,listItems:E,selectedKeyPaths:j,selectableCategory:m,itemsLoadState:D,itemTruncationType:B,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:y,onSelectItem:R,onRetry:x,onSearch:S,variant:O,mode:f,width:e}),onOpen:()=>{P(!0),Z(!0),I(!0)},onClose:e=>{P(!1),Z(!1),"click"!==e&&(I(!1),null==v||v())},onDismiss:()=>{N.current.focus(),P(!1),Z(!1)},clickToToggle:!0,offset:8,alignment:_,fitAvailableHeight:!0,customZIndex:k})};export{Ll as InputNestedSelect};
//# sourceMappingURL=index.js.map
