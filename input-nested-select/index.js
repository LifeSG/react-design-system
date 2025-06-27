import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useRef as i,useState as a,isValidElement as l,createRef as s,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as f,useCallback as h,useMemo as p,createElement as g,forwardRef as m}from"react";import v,{css as y,useTheme as b,keyframes as S}from"styled-components";import{ExternalIcon as x}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as $}from"@lifesg/react-icons/square";import{SquareTickFillIcon as F}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as B}from"@lifesg/react-icons/tick";import{CrossIcon as I}from"@lifesg/react-icons/cross";import{MagnifierIcon as T}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";import{CaretRightIcon as O}from"@lifesg/react-icons/caret-right";import k,{findDOMNode as H}from"react-dom";import{MinusSquareFillIcon as C}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as z,useFloating as E,autoUpdate as _,offset as R,flip as A,shift as M,limitShift as j,size as P,useTransitionStyles as L,useClick as W,useDismiss as N,useInteractions as V,FloatingPortal as Y,FloatingFocusManager as U}from"@floating-ui/react";var G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function J(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z=Object.prototype;var X=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Z)};var q=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),K=X,Q=q,ee=Object.prototype.hasOwnProperty;var te=function(e){if(!K(e))return Q(e);var t=[];for(var n in Object(e))ee.call(e,n)&&"constructor"!=n&&t.push(n);return t},ne="object"==typeof G&&G&&G.Object===Object&&G,re=ne,oe="object"==typeof self&&self&&self.Object===Object&&self,ie=re||oe||Function("return this")(),ae=ie.Symbol,le=ae,se=Object.prototype,ce=se.hasOwnProperty,ue=se.toString,de=le?le.toStringTag:void 0;var fe=function(e){var t=ce.call(e,de),n=e[de];try{e[de]=void 0;var r=!0}catch(e){}var o=ue.call(e);return r&&(t?e[de]=n:delete e[de]),o},he=Object.prototype.toString;var pe=fe,ge=function(e){return he.call(e)},me=ae?ae.toStringTag:void 0;var ve=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?pe(e):ge(e)};var ye=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},be=ve,Se=ye;var xe,we=function(e){if(!Se(e))return!1;var t=be(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},$e=ie["__core-js_shared__"],Fe=(xe=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||""))?"Symbol(src)_1."+xe:"";var Be=function(e){return!!Fe&&Fe in e},Ie=Function.prototype.toString;var Te=function(e){if(null!=e){try{return Ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""},De=we,Oe=Be,ke=ye,He=Te,Ce=/^\[object .+?Constructor\]$/,ze=Function.prototype,Ee=Object.prototype,_e=ze.toString,Re=Ee.hasOwnProperty,Ae=RegExp("^"+_e.call(Re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e){return!(!ke(e)||Oe(e))&&(De(e)?Ae:Ce).test(He(e))},je=function(e,t){return null==e?void 0:e[t]};var Pe=function(e,t){var n=je(e,t);return Me(n)?n:void 0},Le=Pe(ie,"DataView"),We=Pe(ie,"Map"),Ne=Le,Ve=We,Ye=Pe(ie,"Promise"),Ue=Pe(ie,"Set"),Ge=Pe(ie,"WeakMap"),Je=ve,Ze=Te,Xe="[object Map]",qe="[object Promise]",Ke="[object Set]",Qe="[object WeakMap]",et="[object DataView]",tt=Ze(Ne),nt=Ze(Ve),rt=Ze(Ye),ot=Ze(Ue),it=Ze(Ge),at=Je;(Ne&&at(new Ne(new ArrayBuffer(1)))!=et||Ve&&at(new Ve)!=Xe||Ye&&at(Ye.resolve())!=qe||Ue&&at(new Ue)!=Ke||Ge&&at(new Ge)!=Qe)&&(at=function(e){var t=Je(e),n="[object Object]"==t?e.constructor:void 0,r=n?Ze(n):"";if(r)switch(r){case tt:return et;case nt:return Xe;case rt:return qe;case ot:return Ke;case it:return Qe}return t});var lt=at;var st=function(e){return null!=e&&"object"==typeof e},ct=ve,ut=st;var dt=function(e){return ut(e)&&"[object Arguments]"==ct(e)},ft=st,ht=Object.prototype,pt=ht.hasOwnProperty,gt=ht.propertyIsEnumerable,mt=dt(function(){return arguments}())?dt:function(e){return ft(e)&&pt.call(e,"callee")&&!gt.call(e,"callee")},vt=Array.isArray;var yt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},bt=we,St=yt;var xt=function(e){return null!=e&&St(e.length)&&!bt(e)},wt={exports:{}};var $t=function(){return!1};!function(e,t){var n=ie,r=$t,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=(a?a.isBuffer:void 0)||r;e.exports=l}(wt,wt.exports);var Ft=wt.exports,Bt=ve,It=yt,Tt=st,Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;var Ot=function(e){return Tt(e)&&It(e.length)&&!!Dt[Bt(e)]};var kt=function(e){return function(t){return e(t)}},Ht={exports:{}};!function(e,t){var n=ne,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Ht,Ht.exports);var Ct=Ht.exports,zt=Ot,Et=kt,_t=Ct&&Ct.isTypedArray,Rt=_t?Et(_t):zt,At=te,Mt=lt,jt=mt,Pt=vt,Lt=xt,Wt=Ft,Nt=X,Vt=Rt,Yt=Object.prototype.hasOwnProperty;var Ut=J((function(e){if(null==e)return!0;if(Lt(e)&&(Pt(e)||"string"==typeof e||"function"==typeof e.splice||Wt(e)||Vt(e)||jt(e)))return!e.length;var t=Mt(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(Nt(e))return!At(e).length;for(var n in e)if(Yt.call(e,n))return!1;return!0})),Gt=function(e,t){return Gt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Gt(e,t)};var Jt=function(){return Jt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Jt.apply(this,arguments)};var Zt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Xt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},qt="object"==typeof Zt&&Zt&&Zt.Object===Object&&Zt,Kt="object"==typeof self&&self&&self.Object===Object&&self,Qt=qt||Kt||Function("return this")(),en=Qt,tn=function(){return en.Date.now()},nn=/\s/;var rn=function(e){for(var t=e.length;t--&&nn.test(e.charAt(t)););return t},on=/^\s+/;var an=function(e){return e?e.slice(0,rn(e)+1).replace(on,""):e},ln=Qt.Symbol,sn=ln,cn=Object.prototype,un=cn.hasOwnProperty,dn=cn.toString,fn=sn?sn.toStringTag:void 0;var hn=function(e){var t=un.call(e,fn),n=e[fn];try{e[fn]=void 0;var r=!0}catch(e){}var o=dn.call(e);return r&&(t?e[fn]=n:delete e[fn]),o},pn=Object.prototype.toString;var gn=hn,mn=function(e){return pn.call(e)},vn=ln?ln.toStringTag:void 0;var yn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":vn&&vn in Object(e)?gn(e):mn(e)},bn=function(e){return null!=e&&"object"==typeof e};var Sn=an,xn=Xt,wn=function(e){return"symbol"==typeof e||bn(e)&&"[object Symbol]"==yn(e)},$n=/^[-+]0x[0-9a-f]+$/i,Fn=/^0b[01]+$/i,Bn=/^0o[0-7]+$/i,In=parseInt;var Tn=Xt,Dn=tn,On=function(e){if("number"==typeof e)return e;if(wn(e))return NaN;if(xn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=xn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Sn(e);var n=Fn.test(e);return n||Bn.test(e)?In(e.slice(2),n?2:8):$n.test(e)?NaN:+e},kn=Math.max,Hn=Math.min;var Cn=function(e,t,n){var r,o,i,a,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function g(){var e=Dn();if(p(e))return m(e);l=setTimeout(g,function(e){var n=t-(e-s);return d?Hn(n,i-(e-c)):n}(e))}function m(e){return l=void 0,f&&r?h(e):(r=o=void 0,a)}function v(){var e=Dn(),n=p(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(g,t),u?h(e):a}(s);if(d)return clearTimeout(l),l=setTimeout(g,t),h(s)}return void 0===l&&(l=setTimeout(g,t)),a}return t=On(t)||0,Tn(n)&&(u=!!n.leading,i=(d="maxWait"in n)?kn(On(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},v.flush=function(){return void 0===l?a:m(Dn())},v},zn=Cn,En=Xt;var _n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return En(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),zn(e,t,{leading:r,maxWait:t,trailing:o})},Rn=function(e,t,n,r){switch(t){case"debounce":return Cn(e,n,r);case"throttle":return _n(e,n,r);default:return e}},An=function(e){return"function"==typeof e},Mn=function(){return"undefined"==typeof window},jn=function(e){return e instanceof Element||e instanceof HTMLDocument},Pn=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&An(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Mn()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Mn())return null;if(t)return document.querySelector(t);if(r&&jn(r))return r;if(n.targetRef&&jn(n.targetRef.current))return n.targetRef.current;var o=H(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var s=Pn(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!Mn()&&s({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return An(t)?"renderProp":An(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,Mn()||(n.resizeHandler=Rn(n.createResizeHandler,o,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Gt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Mn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(s,["targetRef"]);return c(e,u)}return c(e,s);case"childArray":return(e=o).map((function(e){return!!e&&c(e,s)}));default:return r.createElement(a,null)}}}(u);var Ln=Mn()?d:f;function Wn(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,l=void 0===o?1e3:o,s=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(n),v=i(null),y=null!=h?h:v,b=i(),S=a({width:void 0,height:void 0}),x=S[0],w=S[1];return Ln((function(){if(!Mn()){var e=Pn(g,w,u,f);b.current=Rn((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!m.current&&!Mn()&&e({width:r,height:o}),m.current=!1}))}),r,l,s);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,l,s,u,f,g,p,y.current]),Jt({ref:y},x)}const Nn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Vn={D1:{fontFamily:Nn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Nn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Nn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Nn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Nn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Nn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Nn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Nn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Nn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Nn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Nn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Nn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Yn={D1:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Nn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Nn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Nn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Nn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Un={D1:{fontFamily:Nn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Nn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Nn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Nn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Nn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Nn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Nn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Nn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Nn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Nn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Nn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Nn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var Gn=ve,Jn=st;var Zn=function(e){return"symbol"==typeof e||Jn(e)&&"[object Symbol]"==Gn(e)},Xn=vt,qn=Zn,Kn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qn=/^\w*$/;var er=function(e,t){if(Xn(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!qn(e))||(Qn.test(e)||!Kn.test(e)||null!=t&&e in Object(t))},tr=Pe(Object,"create"),nr=tr;var rr=function(){this.__data__=nr?nr(null):{},this.size=0};var or=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ir=tr,ar=Object.prototype.hasOwnProperty;var lr=function(e){var t=this.__data__;if(ir){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ar.call(t,e)?t[e]:void 0},sr=tr,cr=Object.prototype.hasOwnProperty;var ur=tr;var dr=rr,fr=or,hr=lr,pr=function(e){var t=this.__data__;return sr?void 0!==t[e]:cr.call(t,e)},gr=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ur&&void 0===t?"__lodash_hash_undefined__":t,this};function mr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}mr.prototype.clear=dr,mr.prototype.delete=fr,mr.prototype.get=hr,mr.prototype.has=pr,mr.prototype.set=gr;var vr=mr;var yr=function(){this.__data__=[],this.size=0};var br=function(e,t){return e===t||e!=e&&t!=t},Sr=br;var xr=function(e,t){for(var n=e.length;n--;)if(Sr(e[n][0],t))return n;return-1},wr=xr,$r=Array.prototype.splice;var Fr=xr;var Br=xr;var Ir=xr;var Tr=yr,Dr=function(e){var t=this.__data__,n=wr(t,e);return!(n<0)&&(n==t.length-1?t.pop():$r.call(t,n,1),--this.size,!0)},Or=function(e){var t=this.__data__,n=Fr(t,e);return n<0?void 0:t[n][1]},kr=function(e){return Br(this.__data__,e)>-1},Hr=function(e,t){var n=this.__data__,r=Ir(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Cr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Cr.prototype.clear=Tr,Cr.prototype.delete=Dr,Cr.prototype.get=Or,Cr.prototype.has=kr,Cr.prototype.set=Hr;var zr=Cr,Er=vr,_r=zr,Rr=We;var Ar=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Mr=function(e,t){var n=e.__data__;return Ar(t)?n["string"==typeof t?"string":"hash"]:n.map},jr=Mr;var Pr=Mr;var Lr=Mr;var Wr=Mr;var Nr=function(e,t){var n=Wr(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Vr=function(){this.size=0,this.__data__={hash:new Er,map:new(Rr||_r),string:new Er}},Yr=function(e){var t=jr(this,e).delete(e);return this.size-=t?1:0,t},Ur=function(e){return Pr(this,e).get(e)},Gr=function(e){return Lr(this,e).has(e)},Jr=Nr;function Zr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Zr.prototype.clear=Vr,Zr.prototype.delete=Yr,Zr.prototype.get=Ur,Zr.prototype.has=Gr,Zr.prototype.set=Jr;var Xr=Zr,qr=Xr;function Kr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Kr.Cache||qr),n}Kr.Cache=qr;var Qr=Kr;var eo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,to=/\\(\\)?/g,no=function(e){var t=Qr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(eo,(function(e,n,r,o){t.push(r?o.replace(to,"$1"):n||e)})),t}));var ro=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},oo=vt,io=Zn,ao=ae?ae.prototype:void 0,lo=ao?ao.toString:void 0;var so=function e(t){if("string"==typeof t)return t;if(oo(t))return ro(t,e)+"";if(io(t))return lo?lo.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},co=so;var uo=vt,fo=er,ho=no,po=function(e){return null==e?"":co(e)};var go=Zn;var mo=function(e,t){return uo(e)?e:fo(e,t)?[e]:ho(po(e))},vo=function(e){if("string"==typeof e||go(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var yo=function(e,t){for(var n=0,r=(t=mo(t,e)).length;null!=e&&n<r;)e=e[vo(t[n++])];return n&&n==r?e:void 0};var bo=J((function(e,t,n){var r=null==e?void 0:yo(e,t);return void 0===r?n:r}));const So=(e,t,n)=>t?bo(n,t)||bo(e,t):n||e,xo=(e,t)=>{const n=t||e.defaultValue;return bo(e.collections,n)};var wo;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wo||(wo={}));const $o={collections:{base:Vn,oneservice:Un,plusJakartaSans:Yn},defaultValue:"base"},Fo=e=>t=>{const n=t.theme,r=xo($o,n[wo.textStyleScheme]);return n.options&&n.options.textStyle?So(r,e,n.options.textStyle):So(r,e)},Bo={D1:{fontFamily:Fo("D1.fontFamily"),fontSize:Fo("D1.fontSize"),fontWeight:Fo("D1.fontWeight"),lineHeight:Fo("D1.lineHeight"),letterSpacing:Fo("D1.letterSpacing"),fontVariant:Fo("D1.fontVariant")},D2:{fontFamily:Fo("D2.fontFamily"),fontSize:Fo("D2.fontSize"),fontWeight:Fo("D2.fontWeight"),lineHeight:Fo("D2.lineHeight"),letterSpacing:Fo("D2.letterSpacing"),fontVariant:Fo("D2.fontVariant")},D3:{fontFamily:Fo("D3.fontFamily"),fontSize:Fo("D3.fontSize"),fontWeight:Fo("D3.fontWeight"),lineHeight:Fo("D3.lineHeight"),letterSpacing:Fo("D3.letterSpacing"),fontVariant:Fo("D3.fontVariant")},D4:{fontFamily:Fo("D4.fontFamily"),fontSize:Fo("D4.fontSize"),fontWeight:Fo("D4.fontWeight"),lineHeight:Fo("D4.lineHeight"),letterSpacing:Fo("D4.letterSpacing"),fontVariant:Fo("D4.fontVariant")},DBody:{fontFamily:Fo("DBody.fontFamily"),fontSize:Fo("DBody.fontSize"),fontWeight:Fo("DBody.fontWeight"),lineHeight:Fo("DBody.lineHeight"),letterSpacing:Fo("DBody.letterSpacing"),fontVariant:Fo("DBody.fontVariant")},H1:{fontFamily:Fo("H1.fontFamily"),fontSize:Fo("H1.fontSize"),fontWeight:Fo("H1.fontWeight"),lineHeight:Fo("H1.lineHeight"),letterSpacing:Fo("H1.letterSpacing"),fontVariant:Fo("H1.fontVariant")},H2:{fontFamily:Fo("H2.fontFamily"),fontSize:Fo("H2.fontSize"),fontWeight:Fo("H2.fontWeight"),lineHeight:Fo("H2.lineHeight"),letterSpacing:Fo("H2.letterSpacing"),fontVariant:Fo("H2.fontVariant")},H3:{fontFamily:Fo("H3.fontFamily"),fontSize:Fo("H3.fontSize"),fontWeight:Fo("H3.fontWeight"),lineHeight:Fo("H3.lineHeight"),letterSpacing:Fo("H3.letterSpacing"),fontVariant:Fo("H3.fontVariant")},H4:{fontFamily:Fo("H4.fontFamily"),fontSize:Fo("H4.fontSize"),fontWeight:Fo("H4.fontWeight"),lineHeight:Fo("H4.lineHeight"),letterSpacing:Fo("H4.letterSpacing"),fontVariant:Fo("H4.fontVariant")},H5:{fontFamily:Fo("H5.fontFamily"),fontSize:Fo("H5.fontSize"),fontWeight:Fo("H5.fontWeight"),lineHeight:Fo("H5.lineHeight"),letterSpacing:Fo("H5.letterSpacing"),fontVariant:Fo("H5.fontVariant")},H6:{fontFamily:Fo("H6.fontFamily"),fontSize:Fo("H6.fontSize"),fontWeight:Fo("H6.fontWeight"),lineHeight:Fo("H6.lineHeight"),letterSpacing:Fo("H6.letterSpacing"),fontVariant:Fo("H6.fontVariant")},Body:{fontFamily:Fo("Body.fontFamily"),fontSize:Fo("Body.fontSize"),fontWeight:Fo("Body.fontWeight"),lineHeight:Fo("Body.lineHeight"),letterSpacing:Fo("Body.letterSpacing"),fontVariant:Fo("Body.fontVariant")},BodySmall:{fontFamily:Fo("BodySmall.fontFamily"),fontSize:Fo("BodySmall.fontSize"),fontWeight:Fo("BodySmall.fontWeight"),lineHeight:Fo("BodySmall.lineHeight"),letterSpacing:Fo("BodySmall.letterSpacing"),fontVariant:Fo("BodySmall.fontVariant")},XSmall:{fontFamily:Fo("XSmall.fontFamily"),fontSize:Fo("XSmall.fontSize"),fontWeight:Fo("XSmall.fontWeight"),lineHeight:Fo("XSmall.lineHeight"),letterSpacing:Fo("XSmall.letterSpacing"),fontVariant:Fo("XSmall.fontVariant")}},Io=[Nn.OpenSans,Nn.PlusJakartaSans],To=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Do=(e,t)=>n=>{var r;const o=Bo[e].fontFamily(n),i=Bo[e].fontWeight(n),a=Io.find((e=>Object.values(e).includes(o)));return a?y`
                font-family: ${To(a,t)||To(a,i)||o};
                font-weight: normal !important;
            `:y`
            font-family: ${o};
            font-weight: ${null!==(r=Oo(t)||i)&&void 0!==r?r:"normal"};
        `},Oo=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ko=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ho=(e,t,n=!1)=>r=>{const o=Bo[e],i=o.fontSize(r);return y`
            ${Do(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${y`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Co=(e=!1,t=!1,n=void 0)=>t?y`
            display: block;
            ${ko(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${ko(n)}
        `;function zo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Eo={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_o=e=>t=>{const n=t.theme,r=xo(Eo,n[wo.colorScheme]);return n.options&&n.options.color?So(r,e,n.options.color):So(r,e)},Ro={Brand:{1:_o("Brand.1"),2:_o("Brand.2"),3:_o("Brand.3"),4:_o("Brand.4"),5:_o("Brand.5"),6:_o("Brand.6")},Primary:_o("Primary"),PrimaryDark:_o("PrimaryDark"),Secondary:_o("Secondary"),Accent:{Light:{1:_o("Accent.Light.1"),2:_o("Accent.Light.2"),3:_o("Accent.Light.3"),4:_o("Accent.Light.4"),5:_o("Accent.Light.5"),6:_o("Accent.Light.6")},Dark:{1:_o("Accent.Dark.1"),2:_o("Accent.Dark.2"),3:_o("Accent.Dark.3")}},Neutral:{1:_o("Neutral.1"),2:_o("Neutral.2"),3:_o("Neutral.3"),4:_o("Neutral.4"),5:_o("Neutral.5"),6:_o("Neutral.6"),7:_o("Neutral.7"),8:_o("Neutral.8")},Validation:{Green:{Text:_o("Validation.Green.Text"),Icon:_o("Validation.Green.Icon"),Border:_o("Validation.Green.Border"),Background:_o("Validation.Green.Background")},Orange:{Text:_o("Validation.Orange.Text"),Icon:_o("Validation.Orange.Icon"),Border:_o("Validation.Orange.Border"),Background:_o("Validation.Orange.Background"),Badge:_o("Validation.Orange.Badge")},Red:{Text:_o("Validation.Red.Text"),Icon:_o("Validation.Red.Icon"),Border:_o("Validation.Red.Border"),Background:_o("Validation.Red.Background")},Blue:{Text:_o("Validation.Blue.Text"),Icon:_o("Validation.Blue.Icon"),Border:_o("Validation.Blue.Border"),Background:_o("Validation.Blue.Background")}},Shadow:{Accent:_o("Shadow.Accent"),Red:_o("Shadow.Red"),Elevation:_o("Shadow.Elevation")}};var Ao;!function(e){e.D1=v.h1`
        ${e=>y`
                ${Ho("D1",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>y`
                ${Ho("D2",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>y`
                ${Ho("D3",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>y`
                ${Ho("D4",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>y`
                ${Ho("DBody",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>y`
                ${Ho("H1",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>y`
                ${Ho("H2",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>y`
                ${Ho("H3",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>y`
                ${Ho("H4",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>y`
                ${Ho("H5",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>y`
                ${Ho("H6",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>y`
                ${Ho("Body",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>y`
                ${Ho("BodySmall",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>y`
                ${Ho("XSmall",e.weight,e.paragraph)}
                color: ${Ro.Neutral[1]};
                ${Co(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Po(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Po(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ao||(Ao={}));const Mo=v.a`
    ${e=>y`
            ${Ho(e.textStyle,e.weight)}
            color: ${Ro.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ro.Secondary};

                svg {
                    color: ${Ro.Secondary};
                }
            }
        `}
`,jo=v(x)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Po=n=>{var{external:r=!1,children:o}=n,i=zo(n,["external","children"]);return e(Mo,Object.assign({},i,{children:[o,r&&t(jo,{})]}))};var Lo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lo||(Lo={}));const Wo={[wo.colorScheme]:"base",[wo.textStyleScheme]:"base",[wo.designTokenScheme]:"base",[wo.resourceScheme]:"base"};var No;wo.colorScheme,wo.textStyleScheme,wo.designTokenScheme,wo.resourceScheme,wo.colorScheme,wo.textStyleScheme,wo.designTokenScheme,wo.resourceScheme,wo.colorScheme,wo.textStyleScheme,wo.designTokenScheme,wo.resourceScheme,wo.colorScheme,wo.textStyleScheme,wo.designTokenScheme,wo.resourceScheme,wo.colorScheme,wo.textStyleScheme,wo.designTokenScheme,wo.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(No||(No={}));const Vo=y`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Yo=v.div`
    ${e=>Ho("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?Ro.Primary:Ro.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Vo}
`,Uo=v.div`
    color: ${Ro.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Vo}

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${Ho("BodySmall","semibold")}
                `:y`
                    ${Ho("Body","regular")}
                `}
`,Go=v.span`
    ${e=>Ho("small"===e.$variant?"BodySmall":"Body","semibold")}
`,Jo=v.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${Yo} {
                        display: inline;
                    }

                    ${Uo} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Zo=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Xo=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,qo=({bold:r,displayType:o="inline",label:i,searchTerm:a,maxLines:l=2,selected:s,sublabel:c,truncationType:u="middle",variant:d})=>{const f=b()||Wo,g=Bo.Body.fontSize({theme:f}),m=Bo.Body.fontFamily({theme:f}),{ref:v,width:y}=Wn(),S=h((e=>{if("inline"!==o)return!1;return No.getTextWidth(e,`${g}rem '${m}'`)>y*l-50}),[y,o,g,m,l]),x=p((()=>S(i)),[S,i]),w=p((()=>c&&S(c)),[S,c]),$=x||w?"next-line":o,F=r=>{if(!a)return r;const o=a.toLowerCase().trim(),l=r.toLowerCase().indexOf(o),s=l+a.length;return-1===l?r:e(n,{children:[i.slice(0,l),t(Go,Object.assign({$variant:d},{children:i.slice(l,s)})),i.slice(s)]})},B=r=>e(n,{children:[t(Zo,Object.assign({$maxLines:l,"aria-hidden":!0},{children:F(r)})),t(Xo,Object.assign({$maxLines:l,"aria-hidden":!0},{children:F(r)}))]});return e(Jo,Object.assign({ref:v,$labelDisplayType:$},{children:[t(Yo,Object.assign({"aria-label":i,$bold:r,$maxLines:l,$selected:s,$truncateType:u,$variant:d},{children:"middle"===u&&x?B(i):F(i)})),c&&t(Uo,Object.assign({"aria-label":c,$maxLines:l,$truncateType:u,$labelDisplayType:o},{children:"middle"===u&&w?B(c):c}))]}))};var Ko=zr;var Qo=zr,ei=We,ti=Xr;var ni=zr,ri=function(){this.__data__=new Ko,this.size=0},oi=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},ii=function(e){return this.__data__.get(e)},ai=function(e){return this.__data__.has(e)},li=function(e,t){var n=this.__data__;if(n instanceof Qo){var r=n.__data__;if(!ei||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ti(r)}return n.set(e,t),this.size=n.size,this};function si(e){var t=this.__data__=new ni(e);this.size=t.size}si.prototype.clear=ri,si.prototype.delete=oi,si.prototype.get=ii,si.prototype.has=ai,si.prototype.set=li;var ci=si;var ui=Xr,di=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},fi=function(e){return this.__data__.has(e)};function hi(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ui;++t<n;)this.add(e[t])}hi.prototype.add=hi.prototype.push=di,hi.prototype.has=fi;var pi=hi,gi=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},mi=function(e,t){return e.has(t)};var vi=function(e,t,n,r,o,i){var a=1&n,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&n?new pi:void 0;for(i.set(e,t),i.set(t,e);++d<l;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,i):r(p,g,d,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!gi(t,(function(e,t){if(!mi(h,t)&&(p===e||o(p,e,n,r,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var yi=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},bi=ie.Uint8Array,Si=br,xi=vi,wi=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},$i=yi,Fi=ae?ae.prototype:void 0,Bi=Fi?Fi.valueOf:void 0;var Ii=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new bi(e),new bi(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Si(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=wi;case"[object Set]":var s=1&r;if(l||(l=$i),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=xi(l(e),l(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(Bi)return Bi.call(e)==Bi.call(t)}return!1};var Ti=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},Di=Ti,Oi=vt;var ki=function(e,t,n){var r=t(e);return Oi(e)?r:Di(r,n(e))};var Hi=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i},Ci=function(){return[]},zi=Object.prototype.propertyIsEnumerable,Ei=Object.getOwnPropertySymbols,_i=Ei?function(e){return null==e?[]:(e=Object(e),Hi(Ei(e),(function(t){return zi.call(e,t)})))}:Ci;var Ri=/^(?:0|[1-9]\d*)$/;var Ai=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Mi=mt,ji=vt,Pi=Ft,Li=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Ri.test(e))&&e>-1&&e%1==0&&e<t},Wi=Rt,Ni=Object.prototype.hasOwnProperty;var Vi=function(e,t){var n=ji(e),r=!n&&Mi(e),o=!n&&!r&&Pi(e),i=!n&&!r&&!o&&Wi(e),a=n||r||o||i,l=a?Ai(e.length,String):[],s=l.length;for(var c in e)!t&&!Ni.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Li(c,s))||l.push(c);return l},Yi=te,Ui=xt;var Gi=ki,Ji=_i,Zi=function(e){return Ui(e)?Vi(e):Yi(e)};var Xi=function(e){return Gi(e,Zi,Ji)},qi=Object.prototype.hasOwnProperty;var Ki=ci,Qi=vi,ea=Ii,ta=function(e,t,n,r,o,i){var a=1&n,l=Xi(e),s=l.length;if(s!=Xi(t).length&&!a)return!1;for(var c=s;c--;){var u=l[c];if(!(a?u in t:qi.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<s;){var g=e[u=l[c]],m=t[u];if(r)var v=a?r(m,g,u,t,e,i):r(g,m,u,e,t,i);if(!(void 0===v?g===m||o(g,m,n,r,i):v)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},na=lt,ra=vt,oa=Ft,ia=Rt,aa="[object Arguments]",la="[object Array]",sa="[object Object]",ca=Object.prototype.hasOwnProperty;var ua=function(e,t,n,r,o,i){var a=ra(e),l=ra(t),s=a?la:na(e),c=l?la:na(t),u=(s=s==aa?sa:s)==sa,d=(c=c==aa?sa:c)==sa,f=s==c;if(f&&oa(e)){if(!oa(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new Ki),a||ia(e)?Qi(e,t,n,r,o,i):ea(e,t,s,n,r,o,i);if(!(1&n)){var h=u&&ca.call(e,"__wrapped__"),p=d&&ca.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new Ki),o(g,m,n,r,i)}}return!!f&&(i||(i=new Ki),ta(e,t,n,r,o,i))},da=st;var fa=function e(t,n,r,o,i){return t===n||(null==t||null==n||!da(t)&&!da(n)?t!=t&&n!=n:ua(t,n,r,o,e,i))},ha=fa;var pa=J((function(e,t){return ha(e,t)}));function ga(e){return()=>e}function ma(e){e()}function va(e,t){return n=>e(t(n))}function ya(e,t){return()=>e(t)}function ba(e){return void 0!==e}function Sa(){}function xa(e,t){return t(e),e}function wa(e,t){return t(e)}function $a(...e){return e}function Fa(e,t){return e(1,t)}function Ba(e,t){e(0,t)}function Ia(e){e(2)}function Ta(e){return e(4)}function Da(e,t){return Fa(e,function(e,t){return n=>e(t,n)}(t,0))}function Oa(e,t){const n=e(1,(e=>{n(),t(e)}));return n}function ka(e){let t,n;return r=>o=>{t=o,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function Ha(e,t){return e===t}function Ca(e=Ha){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function za(e){return t=>n=>{e(n)&&t(n)}}function Ea(e){return t=>va(t,e)}function _a(e){return t=>()=>{t(e)}}function Ra(e,...t){const n=function(...e){return t=>e.reduceRight(wa,t)}(...t);return(t,r)=>{switch(t){case 2:return void Ia(e);case 1:return Fa(e,n(r))}}}function Aa(e,t){return n=>r=>{n(t=e(t,r))}}function Ma(e){return t=>n=>{e>0?e--:t(n)}}function ja(e){let t,n=null;return r=>o=>{n=o,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function Pa(...e){const t=new Array(e.length);let n=0,r=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Fa(e,(e=>{const l=n;n|=a,t[i]=e,l!==o&&n===o&&r&&(r(),r=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};n===o?a():r=a}}function La(e){let t=e;const n=Na();return(e,r)=>{switch(e){case 0:t=r;break;case 1:r(t);break;case 4:return t}return n(e,r)}}function Wa(e,t){return xa(La(t),(t=>Da(e,t)))}function Na(){const e=[];return(t,n)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(n)}));case 2:return void e.splice(0,e.length);case 1:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function Va(e){return xa(Na(),(t=>Da(e,t)))}function Ya(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:Ua(),singleton:n}}const Ua=()=>Symbol();function Ga(...e){const t=Na(),n=new Array(e.length);let r=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Fa(e,(e=>{n[i]=e,r|=a,r===o&&Ba(t,n)}))})),function(e,i){switch(e){case 2:return void Ia(t);case 1:return r===o&&i(n),Fa(t,i)}}}function Ja(e,t=Ha){return Ra(e,Ca(t))}function Za(...e){return function(t,n){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(ma)}}(...e.map((e=>Fa(e,n))))}}}var Xa=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Xa||{});const qa={0:"debug",3:"error",1:"log",2:"warn"},Ka=Ya((()=>{const e=La(3);return{log:La(((t,n,r=1)=>{var o;r>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:Ta(e))&&console[qa[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function Qa(e,t,n){return el(e,t,n).callbackRef}function el(e,t,n){const r=o.useRef(null);let i=e=>{};const a=o.useMemo((()=>typeof ResizeObserver<"u"?new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)})):null),[e,n]);return i=e=>{e&&t?(null==a||a.observe(e),r.current=e):(r.current&&(null==a||a.unobserve(r.current)),r.current=null)},{callbackRef:i,ref:r}}function tl(e,t,n,r,i,a,l,s,c){const u=o.useCallback((n=>{const o=function(e,t,n,r){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const l=parseInt(o.dataset.index),s=parseFloat(o.dataset.knownSize),c=t(o,n);if(0===c&&r("Zero-sized element, this should not happen",{child:o},Xa.ERROR),c===s)continue;const u=i[i.length-1];0===i.length||u.size!==c||u.endIndex!==l-1?i.push({endIndex:l,size:c,startIndex:l}):i[i.length-1].endIndex++}return i}(n.children,t,s?"offsetWidth":"offsetHeight",i);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const u="window"===c.lastElementChild.dataset.viewportType;let d;u&&(d=c.ownerDocument.defaultView);const f=l?s?l.scrollLeft:l.scrollTop:u?s?d.scrollX||d.document.documentElement.scrollLeft:d.scrollY||d.document.documentElement.scrollTop:s?c.scrollLeft:c.scrollTop,h=l?s?l.scrollWidth:l.scrollHeight:u?s?d.document.documentElement.scrollWidth:d.document.documentElement.scrollHeight:s?c.scrollWidth:c.scrollHeight,p=l?s?l.offsetWidth:l.offsetHeight:u?s?d.innerWidth:d.innerHeight:s?c.offsetWidth:c.offsetHeight;r({scrollHeight:h,scrollTop:Math.max(f,0),viewportHeight:p}),null==a||a(s?nl("column-gap",getComputedStyle(n).columnGap,i):nl("row-gap",getComputedStyle(n).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,l,r,s]);return el(u,n,c)}function nl(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,Xa.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function rl(e,t,n){const r=o.useRef(null),i=o.useCallback((n=>{if(null==n||!n.offsetParent)return;const o=n.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),n=o.top-e.top;s=e.height-Math.max(0,n),a=n+t.scrollTop}else{const e=l.current.ownerDocument.defaultView;s=e.innerHeight-Math.max(0,o.top),a=o.top+e.scrollY}r.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(r.current)}),[e,t]),{callbackRef:a,ref:l}=el(i,!0,n),s=o.useCallback((()=>{i(l.current)}),[i,l]);return o.useEffect((()=>{var e;if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}{const t=null==(e=l.current)?void 0:e.ownerDocument.defaultView;return null==t||t.addEventListener("scroll",s),null==t||t.addEventListener("resize",s),()=>{null==t||t.removeEventListener("scroll",s),null==t||t.removeEventListener("resize",s)}}}),[s,t,l]),a}const ol=Ya((()=>{const e=Na(),t=Na(),n=La(0),r=Na(),o=La(0),i=Na(),a=Na(),l=La(0),s=La(0),c=La(0),u=La(0),d=Na(),f=Na(),h=La(!1),p=La(!1),g=La(!1);return Da(Ra(e,Ea((({scrollTop:e})=>e))),t),Da(Ra(e,Ea((({scrollHeight:e})=>e))),a),Da(t,o),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:s,footerHeight:u,headerHeight:l,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:d,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:r,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),il={lvl:0};function al(e,t){const n=e.length;if(0===n)return[];let{index:r,value:o}=t(e[0]);const i=[];for(let a=1;a<n;a++){const{index:n,value:l}=t(e[a]);i.push({end:n-1,start:r,value:o}),r=n,o=l}return i.push({end:1/0,start:r,value:o}),i}function ll(e){return e===il}function sl(e,t){if(!ll(e))return t===e.k?e.v:t<e.k?sl(e.l,t):sl(e.r,t)}function cl(e,t,n="k"){if(ll(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=cl(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return cl(e.l,t,n)}function ul(e,t,n){return ll(e)?xl(t,n,1):t===e.k?vl(e,{k:t,v:n}):t<e.k?wl(vl(e,{l:ul(e.l,t,n)})):wl(vl(e,{r:ul(e.r,t,n)}))}function dl(){return il}function fl(e,t,n){if(ll(e))return[];return function(e){return al(e,(({k:e,v:t})=>({index:e,value:t})))}(gl(e,cl(e,t)[0],n))}function hl(e,t){if(ll(e))return il;const{k:n,l:r,r:o}=e;if(t===n){if(ll(r))return o;if(ll(o))return r;{const[t,n]=Sl(r);return ml(vl(e,{k:t,l:yl(r),v:n}))}}return ml(vl(e,t<n?{l:hl(r,t)}:{r:hl(o,t)}))}function pl(e){return ll(e)?[]:[...pl(e.l),{k:e.k,v:e.v},...pl(e.r)]}function gl(e,t,n){if(ll(e))return[];const{k:r,l:o,r:i,v:a}=e;let l=[];return r>t&&(l=l.concat(gl(o,t,n))),r>=t&&r<=n&&l.push({k:r,v:a}),r<=n&&(l=l.concat(gl(i,t,n))),l}function ml(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(bl(t))return $l(vl(e,{lvl:n-1}));if(!ll(t)&&!ll(t.r))return vl(t.r,{l:vl(t,{r:t.r.l}),lvl:n,r:vl(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(bl(e))return Fl(vl(e,{lvl:n-1}));if(ll(r)||ll(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,o=bl(t)?r.lvl-1:r.lvl;return vl(t,{l:vl(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:Fl(vl(r,{l:t.r,lvl:o}))})}}function vl(e,t){return xl(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function yl(e){return ll(e.r)?e.l:ml(vl(e,{r:yl(e.r)}))}function bl(e){return ll(e)||e.lvl>e.r.lvl}function Sl(e){return ll(e.r)?[e.k,e.v]:Sl(e.r)}function xl(e,t,n,r=il,o=il){return{k:e,l:r,lvl:n,r:o,v:t}}function wl(e){return Fl($l(e))}function $l(e){const{l:t}=e;return ll(t)||t.lvl!==e.lvl?e:vl(t,{r:vl(e,{l:t.r})})}function Fl(e){const{lvl:t,r:n}=e;return ll(n)||ll(n.r)||n.lvl!==t||n.r.lvl!==t?e:vl(n,{l:vl(e,{r:n.l}),lvl:t+1})}function Bl(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Il(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Tl=Ya((()=>({recalcInProgress:La(!1)})),[],{singleton:!0});function Dl(e,t,n){return e[Ol(e,t,n)]}function Ol(e,t,n,r=0){let o=e.length-1;for(;r<=o;){const i=Math.floor((r+o)/2),a=n(e[i],t);if(0===a)return i;if(-1===a){if(o-r<2)return i-1;o=i-1}else{if(o===r)return i;r=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function kl(e,t){return Math.round(e.getBoundingClientRect()[t])}function Hl(e){return!ll(e.groupOffsetTree)}function Cl({index:e},t){return t===e?0:t<e?-1:1}function zl({offset:e},t){return t===e?0:t<e?-1:1}function El(e,t,n){if(0===t.length)return 0;const{index:r,offset:o,size:i}=Dl(t,e,Cl),a=e-r,l=i*a+(a-1)*n+o;return l>0?l+n:l}function _l(e,t){if(!Hl(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function Rl(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=_l("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function Al(e,t,n,r=0){return r>0&&(t=Math.max(t,Dl(e,r,Cl).offset)),al(function(e,t,n,r){const o=Ol(e,t,r),i=Ol(e,n,r,o);return e.slice(o,i+1)}(e,t,n,zl),Ll)}function Ml(e,[t,n,r,o]){t.length>0&&r("received item sizes",t,Xa.DEBUG);const i=e.sizeTree;let a=i,l=0;if(n.length>0&&ll(i)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>ul(ul(t,n,e),n+1,r)),a)}else[a,l]=function(e,t){let n=ll(e)?0:1/0;for(const r of t){const{endIndex:t,size:o,startIndex:i}=r;if(n=Math.min(n,i),ll(e)){e=ul(e,0,o);continue}const a=fl(e,i-1,t+1);if(a.some(Wl(r)))continue;let l=!1,s=!1;for(const{end:n,start:r,value:i}of a)l?(t>=r||o===i)&&(e=hl(e,r)):(s=i!==o,l=!0),n>t&&t>=r&&i!==o&&(e=ul(e,t+1,i));s&&(e=ul(e,i,o))}return[e,n]}(a,t);if(a===i)return e;const{lastIndex:s,lastOffset:c,lastSize:u,offsetTree:d}=Pl(e.offsetTree,l,a,o);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>ul(e,t,El(t,d,o))),dl()),lastIndex:s,lastOffset:c,lastSize:u,offsetTree:d,sizeTree:a}}function jl(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function Pl(e,t,n,r){let o=e,i=0,a=0,l=0,s=0;if(0!==t){s=Ol(o,t-1,Cl),l=o[s].offset;const e=cl(n,t-1);i=e[0],a=e[1],o.length&&o[s].size===cl(n,t)[1]&&(s-=1),o=o.slice(0,s+1)}else o=[];for(const{start:e,value:s}of fl(n,t,1/0)){const t=e-i,n=t*a+l+t*r;o.push({index:e,offset:n,size:s}),i=e,l=n,a=s}return{lastIndex:i,lastOffset:l,lastSize:a,offsetTree:o}}function Ll(e){return{index:e.index,value:e}}function Wl(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const Nl={offsetHeight:"height",offsetWidth:"width"},Vl=Ya((([{log:e},{recalcInProgress:t}])=>{const n=Na(),r=Na(),o=Wa(r,0),i=Na(),a=Na(),l=La(0),s=La([]),c=La(void 0),u=La(void 0),d=La(((e,t)=>kl(e,Nl[t]))),f=La(void 0),h=La(0),p={groupIndices:[],groupOffsetTree:dl(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:dl()},g=Wa(Ra(n,Pa(s,e,h),Aa(Ml,p),Ca()),p),m=Wa(Ra(s,Ca(),Aa(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Ea((({prev:e})=>e))),[]);Da(Ra(s,za((e=>e.length>0)),Pa(g,h),Ea((([e,t,n])=>{const r=e.reduce(((e,r,o)=>ul(e,r,El(r,t.offsetTree,n)||o)),dl());return{...t,groupIndices:e,groupOffsetTree:r}}))),g),Da(Ra(r,Pa(g),za((([e,{lastIndex:t}])=>e<t)),Ea((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),Da(c,u);const v=Wa(Ra(c,Ea((e=>void 0===e))),!0);Da(Ra(u,za((e=>void 0!==e&&ll(Ta(g).sizeTree))),Ea((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const y=Va(Ra(n,Pa(g),Aa((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:p}),Ea((e=>e.changed))));Fa(Ra(l,Aa(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Ea((e=>e.diff))),(e=>{const{groupIndices:n}=Ta(g);if(e>0)Ba(t,!0),Ba(i,e+jl(e,n));else if(e<0){const t=Ta(m);t.length>0&&(e-=jl(-e,t)),Ba(a,e)}})),Fa(Ra(l,Pa(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:l},Xa.ERROR)}));const b=Va(i);Da(Ra(i,Pa(g),Ea((([e,t])=>{const n=t.groupIndices.length>0,r=[],o=t.lastSize;if(n){const n=sl(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],l=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+l-1,size:o,startIndex:e+1}),a++,i+=l+1}const l=pl(t.sizeTree);return i!==e&&l.shift(),l.reduce(((t,{k:n,v:r})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:o}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return pl(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),n);const S=Va(Ra(a,Pa(g,h),Ea((([e,{offsetTree:t},n])=>El(-e,t,n)))));return Da(Ra(a,Pa(g,h),Ea((([e,t,n])=>{if(t.groupIndices.length>0){if(ll(t.sizeTree))return t;let r=dl();const o=Ta(m);let i=0,a=0,l=0;for(;i<-e;){l=o[a];const e=o[a+1]-l-1;a++,i+=e+1}if(r=pl(t.sizeTree).reduce(((t,{k:n,v:r})=>ul(t,Math.max(0,n+e),r)),r),i!==-e){r=ul(r,0,sl(t.sizeTree,l));r=ul(r,1,cl(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...Pl(t.offsetTree,0,r,n)}}{const r=pl(t.sizeTree).reduce(((t,{k:n,v:r})=>ul(t,Math.max(0,n+e),r)),dl());return{...t,sizeTree:r,...Pl(t.offsetTree,0,r,n)}}}))),g),{beforeUnshiftWith:b,data:f,defaultItemSize:u,firstItemIndex:l,fixedItemSize:c,gap:h,groupIndices:s,itemSize:d,listRefresh:y,shiftWith:a,shiftWithOffset:S,sizeRanges:n,sizes:g,statefulTotalCount:o,totalCount:r,trackItemSizes:v,unshiftWith:i}}),$a(Ka,Tl),{singleton:!0});function Yl(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Ul=Ya((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:o}])=>{const i=Na(),a=Na(),l=Va(Ra(i,Ea(Yl)));return Da(Ra(l,Ea((e=>e.totalCount))),n),Da(Ra(l,Ea((e=>e.groupIndices))),e),Da(Ra(Ga(o,t,r),za((([e,t])=>Hl(t))),Ea((([e,t,n])=>cl(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),Ca(),Ea((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),$a(Vl,ol)),Gl=Ya((([{log:e}])=>{const t=La(!1),n=Va(Ra(t,za((e=>e)),Ca()));return Fa(t,(t=>{t&&Ta(e)("props updated",{},Xa.DEBUG)})),{didMount:n,propsReady:t}}),$a(Ka),{singleton:!0}),Jl=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Zl(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Jl)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Xl=Ya((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:l,scrollingInProgress:s,scrollTo:c,smoothScrollTargetReached:u,viewportHeight:d},{log:f}])=>{const h=Na(),p=Na(),g=La(0);let m=null,v=null,y=null;function b(){m&&(m(),m=null),y&&(y(),y=null),v&&(clearTimeout(v),v=null),Ba(s,!1)}return Da(Ra(h,Pa(n,d,r,g,l,a,f),Pa(e,i,o),Ea((([[e,n,r,o,i,a,l,c],d,f,g])=>{const S=Zl(e),{align:x,behavior:w,offset:$}=S,F=o-1,B=Rl(S,n,F);let I=El(B,n.offsetTree,d)+a;"end"===x?(I+=f+cl(n.sizeTree,B)[1]-r+g,B===F&&(I+=l)):"center"===x?I+=(f+cl(n.sizeTree,B)[1]-r+g)/2:I-=i,$&&(I+=$);const T=t=>{b(),t?(c("retrying to scroll to",{location:e},Xa.DEBUG),Ba(h,e)):(Ba(p,!0),c("list did not change, scroll successful",{},Xa.DEBUG))};if(b(),"smooth"===w){let e=!1;y=Fa(t,(t=>{e=e||t})),m=Oa(u,(()=>{T(e)}))}else m=Oa(Ra(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),T);return v=setTimeout((()=>{b()}),1200),Ba(s,!0),c("scrolling from index to",{behavior:w,index:B,top:I},Xa.DEBUG),{behavior:w,top:I}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),$a(Vl,ol,Ka),{singleton:!0});function ql(e,t){0==e?t():requestAnimationFrame((()=>{ql(e-1,t)}))}function Kl(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const Ql=Ya((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const l=La(!0),s=La(0),c=La(!0);return Da(Ra(a,Pa(s),za((([e,t])=>!!t)),_a(!1)),l),Da(Ra(a,Pa(s),za((([e,t])=>!!t)),_a(!1)),c),Fa(Ra(Ga(t,a),Pa(l,n,e,c),za((([[,e],t,{sizeTree:n},r,o])=>e&&(!ll(n)||ba(r))&&!t&&!o)),Pa(s)),(([,e])=>{Oa(o,(()=>{Ba(c,!0)})),ql(4,(()=>{Oa(r,(()=>{Ba(l,!0)})),Ba(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:s,scrolledToInitialItem:l}}),$a(Vl,ol,Xl,Gl),{singleton:!0});function es(e,t){return Math.abs(e-t)<1.01}const ts="up",ns="down",rs={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},os=Ya((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:o,viewportHeight:i}])=>{const a=La(!1),l=La(!0),s=Na(),c=Na(),u=La(4),d=La(0),f=Wa(Ra(Za(Ra(Ja(o),Ma(1),_a(!0)),Ra(Ja(o),Ma(1),_a(!1),ka(100))),Ca()),!1),h=Wa(Ra(Za(Ra(n,_a(!0)),Ra(n,_a(!1),ka(200))),Ca()),!1);Da(Ra(Ga(Ja(o),Ja(d)),Ea((([e,t])=>e<=t)),Ca()),l),Da(Ra(l,ja(50)),c);const p=Va(Ra(Ga(r,Ja(i),Ja(t),Ja(e),Ja(u)),Aa(((e,[{scrollHeight:t,scrollTop:n},r,o,i,a])=>{const l={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:l}}let s;return s=l.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:s,state:l}}),rs),Ca(((e,t)=>e&&e.atBottom===t.atBottom)))),g=Wa(Ra(r,Aa(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(es(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const o=t-(n+r)<1;return e.scrollTop!==n&&o?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),za((e=>e.changed)),Ea((e=>e.jump))),0);Da(Ra(p,Ea((e=>e.atBottom))),a),Da(Ra(a,ja(50)),s);const m=La(ns);Da(Ra(r,Ea((({scrollTop:e})=>e)),Ca(),Aa(((e,t)=>Ta(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?ts:ns,prevScrollTop:t}),{direction:ns,prevScrollTop:0}),Ea((e=>e.direction))),m),Da(Ra(r,ja(50),_a("none")),m);const v=La(0);return Da(Ra(f,za((e=>!e)),_a(0)),v),Da(Ra(o,ja(100),Pa(f),za((([e,t])=>!!t)),Aa((([e,t],[n])=>[t,n]),[0,0]),Ea((([e,t])=>t-e))),v),{atBottomState:p,atBottomStateChange:s,atBottomThreshold:u,atTopStateChange:c,atTopThreshold:d,isAtBottom:a,isAtTop:l,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:v}}),$a(ol)),is="top",as="bottom",ls="none";function ss(e,t,n){return"number"==typeof e?n===ts&&t===is||n===ns&&t===as?e:0:n===ts?t===is?e.main:e.reverse:t===as?e.main:e.reverse}function cs(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const us=Ya((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:o}])=>{const i=Na(),a=La(0),l=La(0),s=La(0);return{increaseViewportBy:l,listBoundary:i,overscan:s,topListHeight:a,visibleRange:Wa(Ra(Ga(Ja(r),Ja(o),Ja(n),Ja(i,Il),Ja(s),Ja(a),Ja(t),Ja(e),Ja(l)),Ea((([e,t,n,[r,o],i,a,l,s,c])=>{const u=e-s,d=a+l,f=Math.max(n-u,0);let h=ls;const p=cs(c,is),g=cs(c,as);return r-=s,o+=n+l,(r+=n+l)>e+d-p&&(h=ts),(o-=s)<e-f+t+g&&(h=ns),h!==ls?[Math.max(u-n-ss(i,is,h)-p,0),u-f-l+t+ss(i,as,h)+g]:null})),za((e=>null!=e)),Ca(Il)),[0,0])}}),$a(ol),{singleton:!0});const ds={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function fs(e,t,n,r,o,i){const{lastIndex:a,lastOffset:l,lastSize:s}=o;let c=0,u=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];u=t.offset+t.size}const d=n-a,f=c,h=l+d*s+(d-1)*r-u;return{bottom:u,firstItemIndex:i,items:ps(e,o,i),offsetBottom:h,offsetTop:c,top:f,topItems:ps(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function hs(e,t,n,r,o,i){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const l=e+a,s=Kl(t,l);return fs(Array.from({length:l}).map(((e,t)=>({data:i[t+s],index:t+s,offset:0,size:0}))),[],l,o,n,r)}function ps(e,t,n){if(0===e.length)return[];if(!Hl(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,o=e[e.length-1].index,i=[],a=fl(t.groupOffsetTree,r,o);let l,s=0;for(const r of e){let e;(!l||l.end<r.index)&&(l=a.shift(),s=t.groupIndices.indexOf(l.start)),e=r.index===l.start?{index:s,type:"group"}:{groupIndex:s,index:r.index-(s+1)+n},i.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return i}const gs=Ya((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:o},i,{listBoundary:a,topListHeight:l,visibleRange:s},{initialTopMostItemIndex:c,scrolledToInitialItem:u},{topListHeight:d},f,{didMount:h},{recalcInProgress:p}])=>{const g=La([]),m=La(0),v=Na();Da(i.topItemsIndexes,g);const y=Wa(Ra(Ga(h,p,Ja(s,Il),Ja(o),Ja(r),Ja(c),u,Ja(g),Ja(t),Ja(n),e),za((([e,t,,n,,,,,,,r])=>{const o=r&&r.length!==n;return e&&!t&&!o})),Ea((([,,[e,t],n,r,o,i,a,l,s,c])=>{const u=r,{offsetTree:d,sizeTree:f}=u,h=Ta(m);if(0===n)return{...ds,totalCount:n};if(0===e&&0===t)return 0===h?{...ds,totalCount:n}:hs(h,o,r,l,s,c||[]);if(ll(f))return h>0?null:fs(function(e,t,n){if(Hl(t)){const r=_l(e,t);return[{index:cl(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(Kl(o,n),u,c),[],n,s,u,l);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of fl(f,e,t)){const o=r.value,i=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:n,size:o}),n+=o}}if(!i)return fs([],p,n,s,u,l);const g=a.length>0?a[a.length-1]+1:0,v=Al(d,e,t,g);if(0===v.length)return null;const y=n-1;return fs(xa([],(n=>{for(const r of v){const o=r.value;let i=o.offset,a=r.start;const l=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+s)/(l+s));const t=a-r.start;i+=t*l+t*s}a<g&&(i+=(g-a)*l,a=g);const u=Math.min(r.end,y);for(let e=a;e<=u&&!(i>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:i,size:l}),i+=l+s}})),p,n,s,u,l)})),za((e=>null!==e)),Ca()),ds);Da(Ra(e,za(ba),Ea((e=>null==e?void 0:e.length))),o),Da(Ra(y,Ea((e=>e.topListHeight))),d),Da(d,l),Da(Ra(y,Ea((e=>[e.top,e.bottom]))),a),Da(Ra(y,Ea((e=>e.items))),v);const b=Va(Ra(y,za((({items:e})=>e.length>0)),Pa(o,e),za((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Ea((([,e,t])=>[e-1,t])),Ca(Il),Ea((([e])=>e)))),S=Va(Ra(y,ja(200),za((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Ea((({items:e})=>e[0].index)),Ca())),x=Va(Ra(y,za((({items:e})=>e.length>0)),Ea((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),Ca(Bl)));return{endReached:b,initialItemCount:m,itemsRendered:v,listState:y,rangeChanged:x,startReached:S,topItemsIndexes:g,...f}}),$a(Vl,Ul,us,Ql,Xl,os,Gl,Tl),{singleton:!0}),ms=Ya((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:o}])=>{const i=Na(),a=Wa(Ra(Ga(n,e,r,t,o),Ea((([e,t,n,r,o])=>e+t+n+r+o.offsetBottom+o.bottom))),0);return Da(Ja(a),i),{totalListHeight:a,totalListHeightChanged:i}}),$a(ol,gs),{singleton:!0}),vs=Ya((([{viewportHeight:e},{totalListHeight:t}])=>{const n=La(!1);return{alignToBottom:n,paddingTopAddition:Wa(Ra(Ga(n,e,t),za((([e])=>e)),Ea((([,e,t])=>Math.max(0,e-t))),ja(0),Ca()),0)}}),$a(ol,ms),{singleton:!0});function ys(e){return!!e&&("smooth"===e?"smooth":"auto")}const bs=Ya((([{listRefresh:e,totalCount:t,fixedItemSize:n},{atBottomState:r,isAtBottom:o},{scrollToIndex:i},{scrolledToInitialItem:a},{didMount:l,propsReady:s},{log:c},{scrollingInProgress:u}])=>{const d=La(!1),f=Na();let h=null;function p(e){Ba(i,{align:"end",behavior:e,index:"LAST"})}function g(e){const t=Oa(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(Ta(c)("scrolling to bottom due to increased size",{},Xa.DEBUG),p("auto"))}));setTimeout(t,100)}return Fa(Ra(Ga(Ra(Ja(t),Ma(1)),l),Pa(Ja(d),o,a,u),Ea((([[e,t],n,r,o,i])=>{let a=t&&o,l="auto";return a&&(l=((e,t)=>"function"==typeof e?ys(e(t)):t&&ys(e))(n,r||i),a=a&&!!l),{followOutputBehavior:l,shouldFollow:a,totalCount:e}})),za((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),Ta(n)?requestAnimationFrame((()=>{Ta(c)("following output to ",{totalCount:r},Xa.DEBUG),p(t)})):h=Oa(e,(()=>{Ta(c)("following output to ",{totalCount:r},Xa.DEBUG),p(t),h=null}))})),Fa(Ra(Ga(Ja(d),t,s),za((([e,,t])=>e&&t)),Aa((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),za((({refreshed:e})=>e)),Pa(d,t)),(([,e])=>{Ta(a)&&g(!1!==e)})),Fa(f,(()=>{g(!1!==Ta(d))})),Fa(Ga(Ja(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&p("auto")})),{autoscrollToBottom:f,followOutput:d}}),$a(Vl,os,Xl,Ql,Gl,Ka,ol)),Ss=Ya((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:l}])=>(Da(Ra(l,Pa(i),za((([,e])=>0!==e)),Pa(o,r,t,n,e),Ea((([[,e],t,n,r,o,i=[]])=>hs(e,t,n,r,o,i)))),a),{})),$a(Vl,Ql,gs,Gl),{singleton:!0}),xs=Ya((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=La(0);return Fa(Ra(e,Pa(r),za((([,e])=>0!==e)),Ea((([,e])=>({top:e})))),(e=>{Oa(Ra(n,Ma(1),za((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Ba(t,e)}))}))})),{initialScrollTop:r}}),$a(Gl,ol,gs),{singleton:!0}),ws=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=n?n:"start",behavior:r}:e>i?{...o,align:null!=n?n:"end",behavior:r}:null,$s=Ya((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:l,viewportHeight:s},{scrollToIndex:c}])=>{const u=Na();return Da(Ra(u,Pa(t,s,n,i,o,r,l),Pa(e),Ea((([[e,t,n,r,o,i,l,s],c])=>{const{align:u,behavior:d,calculateViewLocation:f=ws,done:h,...p}=e,g=Rl(e,t,r-1),m=El(g,t.offsetTree,c)+o+i,v=f({itemBottom:m+cl(t.sizeTree,g)[1],itemTop:m,locationParams:{align:u,behavior:d,...p},viewportBottom:s+n-l,viewportTop:s+i});return v?h&&Oa(Ra(a,za((e=>!e)),Ma(Ta(a)?1:2)),h):h&&h(),v})),za((e=>null!==e))),c),{scrollIntoView:u}}),$a(Vl,ol,Xl,gs,Ka),{singleton:!0}),Fs=Ya((([{scrollVelocity:e}])=>{const t=La(!1),n=Na(),r=La(!1);return Da(Ra(e,Pa(r,t,n),za((([e,t])=>!!t)),Ea((([e,t,n,r])=>{const{enter:o,exit:i}=t;if(n){if(i(e,r))return!1}else if(o(e,r))return!0;return n})),Ca()),t),Fa(Ra(Ga(t,e,n),Pa(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),$a(os),{singleton:!0}),Bs=Ya((([{scrollContainerState:e,scrollTo:t}])=>{const n=Na(),r=Na(),o=Na(),i=La(!1),a=La(void 0);return Da(Ra(Ga(n,r),Ea((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),Da(Ra(t,Pa(r),Ea((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:n,windowScrollTo:o,windowViewportRect:r}}),$a(ol)),Is=Ya((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:l,windowViewportRect:s}])=>{const c=Na(),u=La(void 0),d=La(null),f=La(null);return Da(l,d),Da(s,f),Fa(Ra(c,Pa(t,r,a,d,f,n)),(([e,t,n,r,o,i,a])=>{const l=function(e){return pl(e).map((({k:e,v:t},n,r)=>{const o=r[n+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==o&&null!==i&&(n=o.scrollTop-i.offsetTop),e({ranges:l,scrollTop:n-=a})})),Da(Ra(u,za(ba),Ea(Ts)),o),Da(Ra(i,Pa(u),za((([,e])=>void 0!==e)),Ca(),Ea((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:u}}),$a(Vl,ol,Ql,Gl,Bs));function Ts(e){return{align:"start",index:0,offset:e.scrollTop}}const Ds=Ya((([{topItemsIndexes:e}])=>{const t=La(0);return Da(Ra(t,za((e=>e>=0)),Ea((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),$a(gs));function Os(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const ks=Os((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Hs=Ya((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:l},{listState:s},{beforeUnshiftWith:c,gap:u,shiftWithOffset:d,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=Va(Ra(s,Pa(a),Aa((([,e,t,n],[{bottom:r,items:o,offsetBottom:i,totalCount:a},l])=>{const s=r+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=s-n,0!==c&&(c+=l))),[c,o,a,s]}),[0,[],0,0]),za((([e])=>0!==e)),Pa(r,l,n,o,h,p),za((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===ts)),Ea((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Xa.DEBUG),e)))));function m(n){n>0?(Ba(t,{behavior:"auto",top:-n}),Ba(e,0)):(Ba(e,0),Ba(t,{behavior:"auto",top:-n}))}return Fa(Ra(g,Pa(e,i)),(([t,n,r])=>{r&&ks()?Ba(e,n-t):m(-t)})),Fa(Ra(Ga(Wa(i,!1),e,p),za((([e,t,n])=>!e&&!n&&0!==t)),Ea((([e,t])=>t)),ja(1)),m),Da(Ra(d,Ea((e=>({top:-e})))),t),Fa(Ra(c,Pa(f,u),Ea((([e,{groupIndices:t,lastSize:n,sizeTree:r},o])=>{function i(e){return e*(n+o)}if(0===t.length)return i(e);{let n=0;const o=sl(r,0);let a=0,l=0;for(;a<e;){a++,n+=o;let r=t.length===l+1?1/0:t[l+1]-t[l]-1;a+r>e&&(n-=o,r=e-a+1),a+=r,n+=i(r),l++}return n}}))),(n=>{Ba(e,n),requestAnimationFrame((()=>{Ba(t,{top:n}),requestAnimationFrame((()=>{Ba(e,0),Ba(p,!1)}))}))})),{deviation:e}}),$a(ol,os,gs,Vl,Ka,Tl)),Cs=Ya((([e,t,n,r,o,i,a,l,s,c])=>({...e,...t,...n,...r,...o,...i,...a,...l,...s,...c})),$a(us,Ss,Gl,Fs,ms,xs,vs,Bs,$s,Ka)),zs=Ya((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:o,groupIndices:i,itemSize:a,sizeRanges:l,sizes:s,statefulTotalCount:c,totalCount:u,trackItemSizes:d},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,v,{listState:y,topItemsIndexes:b,...S},{scrollToIndex:x},w,{topItemCount:$},{groupCounts:F},B])=>(Da(S.rangeChanged,B.scrollSeekRangeChanged),Da(Ra(B.windowViewportRect,Ea((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:o,groupCounts:F,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:l,topItemCount:$,topItemsIndexes:b,totalCount:u,...v,groupIndices:i,itemSize:a,listState:y,scrollToIndex:x,statefulTotalCount:c,trackItemSizes:d,...S,...B,...g,sizes:s,...m})),$a(Vl,Ql,ol,Is,bs,gs,Xl,Hs,Ds,Ul,Cs));function Es(e,t){const n={},r={};let o=0;const i=e.length;for(;o<i;)r[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const _s=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Rs(e,n,r){const i=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),l=Object.keys(n.methods||{}),s=Object.keys(n.events||{}),c=o.createContext({});function u(e,t){e.propsReady&&Ba(e.propsReady,!1);for(const r of i){Ba(e[n.required[r]],t[r])}for(const r of a)if(r in t){Ba(e[n.optional[r]],t[r])}e.propsReady&&Ba(e.propsReady,!0)}function d(e){return s.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?n===i?void 0:(r(),n=i,t=Fa(e,i),t):(r(),Sa);case 2:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const f=o.forwardRef(((f,h)=>{const{children:p,...g}=f,[m]=o.useState((()=>xa(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(r.map((e=>n(e))));return i&&t.set(o,a),a};return n(e)}(e),(e=>{u(e,g)})))),[v]=o.useState(ya(d,m));_s((()=>{for(const e of s)e in g&&Fa(v[e],g[e]);return()=>{Object.values(v).map(Ia)}}),[g,v,m]),_s((()=>{u(m,g)})),o.useImperativeHandle(h,ga(function(e){return l.reduce(((t,r)=>(t[r]=t=>{Ba(e[n.methods[r]],t)},t)),{})}(m)));const y=r;return t(c.Provider,{value:m,children:r?t(y,{...Es([...i,...a,...s],g),children:p}):p})}));return{Component:f,useEmitter:(e,t)=>{const n=o.useContext(c)[e];_s((()=>Fa(n,t)),[t,n])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],n=o.useCallback((e=>Fa(t,e)),[t]);return o.useSyncExternalStore(n,(()=>Ta(t)),(()=>Ta(t)))}:e=>{const t=o.useContext(c)[e],[n,r]=o.useState(ya(Ta,t));return _s((()=>Fa(t,(e=>{e!==n&&r(ga(e))}))),[t,n]),n},usePublisher:e=>{const t=o.useContext(c);return o.useCallback((n=>{Ba(t[e],n)}),[t,e])}}}const As=o.createContext(void 0),Ms=o.createContext(void 0),js=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Ps(e){return"self"in e}function Ls(e,t,n,r=Sa,i,a){const l=o.useRef(null),s=o.useRef(null),c=o.useRef(null),u=o.useCallback((n=>{let r,o,i;const l=n.target;if(function(e){return"body"in e}(l)||Ps(l)){const e=Ps(l)?l:l.defaultView;i=a?e.scrollX:e.scrollY,r=a?e.document.documentElement.scrollWidth:e.document.documentElement.scrollHeight,o=a?e.innerWidth:e.innerHeight}else i=a?l.scrollLeft:l.scrollTop,r=a?l.scrollWidth:l.scrollHeight,o=a?l.offsetWidth:l.offsetHeight;const u=()=>{e({scrollHeight:r,scrollTop:Math.max(i,0),viewportHeight:o})};n.suppressFlushSync?u():k.flushSync(u),null!==s.current&&(i===s.current||i<=0||i===r-o)&&(s.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t,a]);return o.useEffect((()=>{const e=i||l.current;return r(i||l.current),u({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",u,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",u)}}),[l,u,n,r,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),l.current.scrollBy(e)},scrollerRef:l,scrollToCallback:function(n){const r=l.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const o="smooth"===n.behavior;let i,u,d;Ps(r)?(u=Math.max(kl(r.document.documentElement,a?"width":"height"),a?r.document.documentElement.scrollWidth:r.document.documentElement.scrollHeight),i=a?r.innerWidth:r.innerHeight,d=a?window.scrollX:window.scrollY):(u=r[a?"scrollWidth":"scrollHeight"],i=kl(r,a?"width":"height"),d=r[a?"scrollLeft":"scrollTop"]);const f=u-i;if(n.top=Math.ceil(Math.max(Math.min(f,n.top),0)),es(i,u)||n.top===d)return e({scrollHeight:u,scrollTop:d,viewportHeight:i}),void(o&&t(!0));o?(s.current=n.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,s.current=null,t(!0)}),1e3)):s.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const Ws="-webkit-sticky",Ns="sticky",Vs=Os((()=>{if(typeof document>"u")return Ns;const e=document.createElement("div");return e.style.position=Ws,e.style.position===Ws?Ws:Ns}));function Ys(e){return e}const Us=Ya((()=>{const e=La((e=>`Item ${e}`)),t=La(null),n=La((e=>`Group ${e}`)),r=La({}),o=La(Ys),i=La("div"),a=La(Sa),l=(e,t=null)=>Wa(Ra(r,Ea((t=>t[e])),Ca()),t);return{components:r,computeItemKey:o,context:t,EmptyPlaceholder:l("EmptyPlaceholder"),FooterComponent:l("Footer"),GroupComponent:l("Group","div"),groupContent:n,HeaderComponent:l("Header"),HeaderFooterTag:i,ItemComponent:l("Item","div"),itemContent:e,ListComponent:l("List","div"),ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder"),TopItemListComponent:l("TopItemList")}})),Gs=Ya((([e,t])=>({...e,...t})),$a(zs,Us)),Js=({height:e})=>t("div",{style:{height:e}}),Zs={overflowAnchor:"none",position:Vs(),zIndex:1},Xs={overflowAnchor:"none"},qs={...Xs,display:"inline-block",height:"100%"},Ks=o.memo((function({showTopList:e=!1}){const n=gc("listState"),r=mc("sizeRanges"),i=gc("useWindowScroll"),a=gc("customScrollParent"),l=mc("windowScrollContainerState"),s=mc("scrollContainerState"),c=a||i?l:s,u=gc("itemContent"),d=gc("context"),f=gc("groupContent"),h=gc("trackItemSizes"),p=gc("itemSize"),m=gc("log"),v=mc("gap"),y=gc("horizontalDirection"),{callbackRef:b}=tl(r,p,h,e?Sa:c,m,v,a,y,gc("skipAnimationFrameInResizeObserver")),[S,x]=o.useState(0);pc("deviation",(e=>{S!==e&&x(e)}));const w=gc("EmptyPlaceholder"),$=gc("ScrollSeekPlaceholder")||Js,F=gc("ListComponent"),B=gc("ItemComponent"),I=gc("GroupComponent"),T=gc("computeItemKey"),D=gc("isSeeking"),O=gc("groupIndices").length>0,k=gc("alignToBottom"),H=gc("initialItemFinalLocationReached"),C=e?{}:{boxSizing:"border-box",...y?{display:"inline-block",height:"100%",marginLeft:0!==S?S:k?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==S?S:k?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...H?{}:{visibility:"hidden"}};return!e&&0===n.totalCount&&w?t(w,{...rc(w,d)}):t(F,{...rc(F,d),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:b,style:C,children:(e?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=T(t+n.firstItemIndex,e.data,d);return D?g($,{...rc($,d),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?g(I,{...rc(I,d),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:Zs},f(e.index,d)):g(B,{...rc(B,d),...oc(B,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:y?qs:Xs},O?u(e.index,e.groupIndex,e.data,d):u(e.index,e.data,d))}))})})),Qs={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},ec={outline:"none",overflowX:"auto",position:"relative"},tc=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),nc={position:Vs(),top:0,width:"100%",zIndex:1};function rc(e,t){if("string"!=typeof e)return{context:t}}function oc(e,t){return{item:"string"==typeof e?void 0:t}}const ic=o.memo((function(){const e=gc("HeaderComponent"),n=mc("headerHeight"),r=gc("HeaderFooterTag"),i=Qa(o.useMemo((()=>e=>{n(kl(e,"height"))}),[n]),!0,gc("skipAnimationFrameInResizeObserver")),a=gc("context");return e?t(r,{ref:i,children:t(e,{...rc(e,a)})}):null})),ac=o.memo((function(){const e=gc("FooterComponent"),n=mc("footerHeight"),r=gc("HeaderFooterTag"),i=Qa(o.useMemo((()=>e=>{n(kl(e,"height"))}),[n]),!0,gc("skipAnimationFrameInResizeObserver")),a=gc("context");return e?t(r,{ref:i,children:t(e,{...rc(e,a)})}):null}));function lc({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:o,style:i,...a}){const l=r("scrollContainerState"),s=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),u=n("scrollerRef"),d=n("context"),f=n("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=Ls(l,c,s,u,void 0,f);return e("scrollTo",g),e("scrollBy",h),t(s,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?ec:Qs,...i},tabIndex:0,...a,...rc(s,d),children:o})}))}function sc({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:i,style:a,...l}){const s=r("windowScrollContainerState"),c=n("ScrollerComponent"),u=r("smoothScrollTargetReached"),d=n("totalListHeight"),f=n("deviation"),h=n("customScrollParent"),p=n("context"),g=o.useRef(null),m=n("scrollerRef"),{scrollByCallback:v,scrollerRef:y,scrollToCallback:b}=Ls(s,u,c,m,h);return js((()=>{var e;return y.current=h||(null==(e=g.current)?void 0:e.ownerDocument.defaultView),()=>{y.current=null}}),[y,h]),e("windowScrollTo",b),e("scrollBy",v),t(c,{ref:g,"data-virtuoso-scroller":!0,style:{position:"relative",...a,...0!==d?{height:d+f}:{}},...l,...rc(c,p),children:i})}))}const cc=({children:e})=>{const n=o.useContext(As),r=mc("viewportHeight"),i=mc("fixedItemHeight"),a=gc("alignToBottom"),l=gc("horizontalDirection"),s=Qa(o.useMemo((()=>va(r,(e=>kl(e,l?"width":"height")))),[r,l]),!0,gc("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{n&&(r(n.viewportHeight),i(n.itemHeight))}),[n,r,i]),t("div",{"data-viewport-type":"element",ref:s,style:tc(a),children:e})},uc=({children:e})=>{const n=o.useContext(As),r=mc("windowViewportRect"),i=mc("fixedItemHeight"),a=gc("customScrollParent"),l=rl(r,a,gc("skipAnimationFrameInResizeObserver")),s=gc("alignToBottom");return o.useEffect((()=>{n&&(i(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,i]),t("div",{"data-viewport-type":"window",ref:l,style:tc(s),children:e})},dc=({children:e})=>{const n=gc("TopItemListComponent")||"div",r=gc("headerHeight"),o={...nc,marginTop:`${r}px`},i=gc("context");return t(n,{style:o,...rc(n,i),children:e})},fc=o.memo((function(n){const r=gc("useWindowScroll"),o=gc("topItemsIndexes").length>0,i=gc("customScrollParent"),a=gc("context"),l=i||r?yc:vc,s=i||r?uc:cc;return e(l,{...n,...rc(l,a),children:[o&&t(dc,{children:t(Ks,{showTopList:!0})}),e(s,{children:[t(ic,{}),t(Ks,{}),t(ac,{})]})]})})),{Component:hc,useEmitter:pc,useEmitterValue:gc,usePublisher:mc}=Rs(Gs,{required:{},optional:{restoreStateFrom:"restoreStateFrom",context:"context",followOutput:"followOutput",itemContent:"itemContent",groupContent:"groupContent",overscan:"overscan",increaseViewportBy:"increaseViewportBy",totalCount:"totalCount",groupCounts:"groupCounts",topItemCount:"topItemCount",firstItemIndex:"firstItemIndex",initialTopMostItemIndex:"initialTopMostItemIndex",components:"components",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",computeItemKey:"computeItemKey",defaultItemHeight:"defaultItemHeight",fixedItemHeight:"fixedItemHeight",itemSize:"itemSize",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"HeaderFooterTag",data:"data",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",alignToBottom:"alignToBottom",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",horizontalDirection:"horizontalDirection",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver"},methods:{scrollToIndex:"scrollToIndex",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollBy:"scrollBy",autoscrollToBottom:"autoscrollToBottom",getState:"getState"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",totalListHeightChanged:"totalListHeightChanged",itemsRendered:"itemsRendered",groupIndices:"groupIndices"}},fc),vc=lc({useEmitter:pc,useEmitterValue:gc,usePublisher:mc}),yc=sc({useEmitter:pc,useEmitterValue:gc,usePublisher:mc}),bc=hc,Sc={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},xc={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:wc,floor:$c,max:Fc,min:Bc,round:Ic}=Math;function Tc(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function Dc(e,t){return e&&e.width===t.width&&e.height===t.height}function Oc(e,t){return e&&e.column===t.column&&e.row===t.row}const kc=Ya((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:l,scrollTo:s,scrollTop:c,smoothScrollTargetReached:u,viewportHeight:d},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:v,windowScrollContainerState:y,windowScrollTo:b,windowViewportRect:S},x])=>{const w=La(0),$=La(0),F=La(Sc),B=La({height:0,width:0}),I=La({height:0,width:0}),T=Na(),D=Na(),O=La(0),k=La(null),H=La({column:0,row:0}),C=Na(),z=Na(),E=La(!1),_=La(0),R=La(!0),A=La(!1),M=La(!1);Fa(Ra(p,Pa(_),za((([e,t])=>!!t))),(()=>{Ba(R,!1)})),Fa(Ra(Ga(p,R,I,B,_,A),za((([e,t,n,r,,o])=>e&&!t&&0!==n.height&&0!==r.height&&!o))),(([,,,,e])=>{Ba(A,!0),ql(1,(()=>{Ba(T,e)})),Oa(Ra(c),(()=>{Ba(t,[0,0]),Ba(R,!0)}))})),Da(Ra(z,za((e=>null!=e&&e.scrollTop>0)),_a(0)),$),Fa(Ra(p,Pa(z),za((([,e])=>null!=e))),(([,e])=>{e&&(Ba(B,e.viewport),Ba(I,e.item),Ba(H,e.gap),e.scrollTop>0&&(Ba(E,!0),Oa(Ra(c,Ma(1)),(e=>{Ba(E,!1)})),Ba(s,{top:e.scrollTop})))})),Da(Ra(B,Ea((({height:e})=>e))),d),Da(Ra(Ga(Ja(B,Dc),Ja(I,Dc),Ja(H,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Ja(c)),Ea((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),C),Da(Ra(Ga(Ja(w),r,Ja(H,Oc),Ja(I,Dc),Ja(B,Dc),Ja(k),Ja($),Ja(E),Ja(R),Ja(_)),za((([,,,,,,,e])=>!e)),Ea((([e,[t,n],r,o,i,a,l,,s,c])=>{const{column:u,row:d}=r,{height:f,width:h}=o,{width:p}=i;if(0===l&&(0===e||0===p))return Sc;if(0===h){const t=Kl(c,e);return function(e){return{...xc,items:e}}(Tc(t,t+Math.max(l-1,0),a))}const g=Hc(p,h,u);let m,v;s?0===t&&0===n&&l>0?(m=0,v=l-1):(m=g*$c((t+d)/(f+d)),v=g*wc((n+d)/(f+d))-1,v=Bc(e-1,Fc(v,g-1)),m=Bc(v,Fc(0,m))):(m=0,v=-1);const y=Tc(m,v,a),{bottom:b,top:S}=Cc(i,r,o,y),x=wc(e/g);return{bottom:b,itemHeight:f,items:y,itemWidth:h,offsetBottom:x*f+(x-1)*d-b,offsetTop:S,top:S}}))),F),Da(Ra(k,za((e=>null!==e)),Ea((e=>e.length))),w),Da(Ra(Ga(B,I,F,H),za((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),Ea((([e,t,{items:n},r])=>{const{bottom:o,top:i}=Cc(e,r,t,n);return[i,o]})),Ca(Il)),t);const j=La(!1);Da(Ra(c,Pa(j),Ea((([e,t])=>t||0!==e))),j);const P=Va(Ra(Ga(F,w),za((([{items:e}])=>e.length>0)),Pa(j),za((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),Ea((([[,e]])=>e-1)),Ca())),L=Va(Ra(Ja(F),za((({items:e})=>e.length>0&&0===e[0].index)),_a(0),Ca())),W=Va(Ra(Ja(F),Pa(E),za((([{items:e},t])=>e.length>0&&!t)),Ea((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Ca(Bl),ja(0)));Da(W,h.scrollSeekRangeChanged),Da(Ra(T,Pa(B,I,w,H),Ea((([e,t,n,r,o])=>{const i=Zl(e),{align:a,behavior:l,offset:s}=i;let c=i.index;"LAST"===c&&(c=r-1),c=Fc(0,c,Bc(r-1,c));let u=zc(t,o,n,c);return"end"===a?u=Ic(u-t.height+n.height):"center"===a&&(u=Ic(u-t.height/2+n.height/2)),s&&(u+=s),{behavior:l,top:u}}))),s);const N=Wa(Ra(F,Ea((e=>e.offsetBottom+e.bottom))),0);return Da(Ra(S,Ea((e=>({height:e.visibleHeight,width:e.visibleWidth})))),B),{customScrollParent:m,data:k,deviation:O,footerHeight:o,gap:H,headerHeight:i,increaseViewportBy:e,initialItemCount:$,itemDimensions:I,overscan:n,restoreStateFrom:z,scrollBy:a,scrollContainerState:l,scrollHeight:D,scrollTo:s,scrollToIndex:T,scrollTop:c,smoothScrollTargetReached:u,totalCount:w,useWindowScroll:v,viewportDimensions:B,windowScrollContainerState:y,windowScrollTo:b,windowViewportRect:S,...h,gridState:F,horizontalDirection:M,initialTopMostItemIndex:_,totalListHeight:N,...f,endReached:P,propsReady:g,rangeChanged:W,startReached:L,stateChanged:C,stateRestoreInProgress:E,...x}}),$a(us,ol,os,Fs,Gl,Bs,Ka));function Hc(e,t,n){return Fc(1,$c((e+n)/($c(t)+n)))}function Cc(e,t,n,r){const{height:o}=n;if(void 0===o||0===r.length)return{bottom:0,top:0};const i=zc(e,t,n,r[0].index);return{bottom:zc(e,t,n,r[r.length-1].index)+o,top:i}}function zc(e,t,n,r){const o=Hc(e.width,n.width,t.column),i=$c(r/o),a=i*n.height+Fc(0,i-1)*t.row;return a>0?a+t.row:a}const Ec=Ya((()=>{const e=La((e=>`Item ${e}`)),t=La({}),n=La(null),r=La("virtuoso-grid-item"),o=La("virtuoso-grid-list"),i=La(Ys),a=La("div"),l=La(Sa),s=(e,n=null)=>Wa(Ra(t,Ea((t=>t[e])),Ca()),n),c=La(!1),u=La(!1);return Da(Ja(u),c),{components:t,computeItemKey:i,context:n,FooterComponent:s("Footer"),HeaderComponent:s("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:s("Item","div"),itemContent:e,listClassName:o,ListComponent:s("List","div"),readyStateChanged:c,reportReadyState:u,ScrollerComponent:s("Scroller","div"),scrollerRef:l,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder","div")}})),_c=Ya((([e,t])=>({...e,...t})),$a(kc,Ec)),Rc=o.memo((function(){const e=Vc("gridState"),n=Vc("listClassName"),r=Vc("itemClassName"),i=Vc("itemContent"),a=Vc("computeItemKey"),l=Vc("isSeeking"),s=Yc("scrollHeight"),c=Vc("ItemComponent"),u=Vc("ListComponent"),d=Vc("ScrollSeekPlaceholder"),f=Vc("context"),h=Yc("itemDimensions"),p=Yc("gap"),m=Vc("log"),v=Vc("stateRestoreInProgress"),y=Yc("reportReadyState"),b=Qa(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;s(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();h({height:e,width:t})}p({column:Jc("column-gap",getComputedStyle(e).columnGap,m),row:Jc("row-gap",getComputedStyle(e).rowGap,m)})}),[s,h,p,m]),!0,!1);return js((()=>{e.itemHeight>0&&e.itemWidth>0&&y(!0)}),[e]),v?null:t(u,{className:n,ref:b,...rc(u,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((n=>{const o=a(n.index,n.data,f);return l?t(d,{...rc(d,f),height:e.itemHeight,index:n.index,width:e.itemWidth},o):g(c,{...rc(c,f),className:r,"data-index":n.index,key:o},i(n.index,n.data,f))}))})})),Ac=o.memo((function(){const e=Vc("HeaderComponent"),n=Yc("headerHeight"),r=Vc("headerFooterTag"),i=Qa(o.useMemo((()=>e=>{n(kl(e,"height"))}),[n]),!0,!1),a=Vc("context");return e?t(r,{ref:i,children:t(e,{...rc(e,a)})}):null})),Mc=o.memo((function(){const e=Vc("FooterComponent"),n=Yc("footerHeight"),r=Vc("headerFooterTag"),i=Qa(o.useMemo((()=>e=>{n(kl(e,"height"))}),[n]),!0,!1),a=Vc("context");return e?t(r,{ref:i,children:t(e,{...rc(e,a)})}):null})),jc=({children:e})=>{const n=o.useContext(Ms),r=Yc("itemDimensions"),i=Yc("viewportDimensions"),a=Qa(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{n&&(i({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,i,r]),t("div",{ref:a,style:tc(!1),children:e})},Pc=({children:e})=>{const n=o.useContext(Ms),r=Yc("windowViewportRect"),i=Yc("itemDimensions"),a=Vc("customScrollParent"),l=rl(r,a,!1);return o.useEffect((()=>{n&&(i({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,i]),t("div",{ref:l,style:tc(!1),children:e})},Lc=o.memo((function({...n}){const r=Vc("useWindowScroll"),o=Vc("customScrollParent"),i=o||r?Gc:Uc,a=o||r?Pc:jc,l=Vc("context");return t(i,{...n,...rc(i,l),children:e(a,{children:[t(Ac,{}),t(Rc,{}),t(Mc,{})]})})})),{Component:Wc,useEmitter:Nc,useEmitterValue:Vc,usePublisher:Yc}=Rs(_c,{optional:{context:"context",totalCount:"totalCount",overscan:"overscan",itemContent:"itemContent",components:"components",computeItemKey:"computeItemKey",data:"data",initialItemCount:"initialItemCount",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"headerFooterTag",listClassName:"listClassName",itemClassName:"itemClassName",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",restoreStateFrom:"restoreStateFrom",initialTopMostItemIndex:"initialTopMostItemIndex",increaseViewportBy:"increaseViewportBy"},methods:{scrollTo:"scrollTo",scrollBy:"scrollBy",scrollToIndex:"scrollToIndex"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",stateChanged:"stateChanged",readyStateChanged:"readyStateChanged"}},Lc),Uc=lc({useEmitter:Nc,useEmitterValue:Vc,usePublisher:Yc}),Gc=sc({useEmitter:Nc,useEmitterValue:Vc,usePublisher:Yc});function Jc(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,Xa.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Zc={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${Ro.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${Ro.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Ro.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${Ro.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${Ro.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Ro.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Xc=e=>t=>{var n;const r=t.theme,o=xo(Zc,r[wo.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?So(o,e,r.options.designToken):So(o,e)},qc={InputBoxShadow:Xc("InputBoxShadow"),InputErrorBoxShadow:Xc("InputErrorBoxShadow"),ElevationBoxShadow:Xc("ElevationBoxShadow"),Table:{Header:Xc("Table.Header"),Cell:{Primary:Xc("Table.Cell.Primary"),Secondary:Xc("Table.Cell.Secondary"),Selected:Xc("Table.Cell.Selected"),Hover:Xc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Xc("Button.Danger.BackgroundColor"),Hover:Xc("Button.Danger.Hover"),Primary:Xc("Button.Danger.Primary"),Border:Xc("Button.Danger.Border")}}},Kc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Qc=e=>Object.keys(Kc).reduce(((t,n)=>{const r=Kc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),eu=Qc("max-width"),tu=(Qc("min-width"),Kc),nu=v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,ru=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ou=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ro.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ru} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,iu=v(ou)`
    animation-delay: -0.45s;
`,au=v(ou)`
    animation-delay: -0.3s;
`,lu=v(ou)`
    animation-delay: -0.15s;
`;v.button`
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
                    background-color: ${Ro.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?qc.Button.Danger.Border:Ro.Primary};

                    color: ${e.$buttonIsDanger?qc.Button.Danger.Primary:Ro.Primary};
                `;case"light":return y`
                    background-color: ${Ro.Neutral[8]};
                    border: 1px solid ${Ro.Neutral[5]};

                    color: ${e.$buttonIsDanger?qc.Button.Danger.Primary:Ro.Primary};
                `;case"disabled":return y`
                    background-color: ${Ro.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ro.Neutral[3]};
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?qc.Button.Danger.Primary:Ro.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?qc.Button.Danger.Hover:Ro.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?qc.Button.Danger.BackgroundColor:Ro.Primary};
                    border: 1px solid transparent;

                    ${eu.mobileL} {
                        width: 100%;
                    }

                    color: ${Ro.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    ${Ho("H5","semibold")}

                    ${eu.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${Ho("H4","semibold")}

                    ${eu.mobileS} {
                        height: auto;
                    }
                `}
`;const su=v((({color:n,className:r,size:o=18})=>e(nu,Object.assign({className:r,$size:o,$color:n,"data-testid":"component-loading-spinner"},{children:[t(ou,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(iu,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(au,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(lu,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?qc.Button.Danger.Primary:Ro.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ro.Neutral[3](e);break;default:t=Ro.Neutral[8](e)}return y`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var cu={exports:{}};cu.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=m;var x="$isDayjsObject",w=function(e){return e instanceof I||!(!e||!e[x])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();S[i]&&(o=i),n&&(S[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;S[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},F=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new I(n)},B=y;B.l=$,B.i=w,B.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var I=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return B},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),h=function(e,t){var o=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,S=(g<b?g+7:g)-b;return h(r?v-S:v+(6-S),m);case l:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case o:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,s=B.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[B.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=B.p(u),g=function(e){var t=F(h);return B.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,v=this.$d.getTime()+r*m;return B.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=B.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return B.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return l+1;case"MM":return B.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return B.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return B.s(a,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,g=this,m=B.p(f),v=F(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,S=function(){return B.m(g,v)};switch(m){case d:p=S()/12;break;case c:p=S();break;case u:p=S()/3;break;case s:p=(b-y)/6048e5;break;case l:p=(b-y)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:B.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return S[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return B.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),T=I.prototype;return F.prototype=T,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,I,F),e.$i=!0),F},F.locale=$,F.isDayjs=w,F.unix=function(e){return F(1e3*e)},F.en=S[b],F.Ls=S,F.p={},F}();var uu=J(cu.exports),du={exports:{}};du.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,o=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},l=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},f={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[o,s("seconds")],ss:[o,s("seconds")],m:[o,s("minutes")],mm:[o,s("minutes")],H:[o,s("hours")],h:[o,s("hours")],HH:[o,s("hours")],hh:[o,s("hours")],D:[o,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[o,s("week")],ww:[r,s("week")],M:[o,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=l(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r,o;r=n,o=a&&a.formats;for(var i=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=i.length,s=0;s<l;s+=1){var c=i[s],u=f[c],d=u&&u[0],h=u&&u[1];i[s]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=i[n];if("string"==typeof o)r+=o.length;else{var a=o.regex,s=o.parser,c=e.slice(r),u=a.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(l=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,i=e.args;this.$u=r;var l=i[1];if("string"==typeof l){var s=!0===i[2],c=!0===i[3],u=s||c,d=i[2];c&&(d=i[2]),a=this.$locale(),!s&&d&&(a=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var o=h(t)(e),i=o.year,a=o.month,l=o.day,s=o.hours,c=o.minutes,u=o.seconds,d=o.milliseconds,f=o.zone,p=o.week,g=new Date,m=l||(i||a?1:g.getDate()),v=i||g.getFullYear(),y=0;i&&!a||(y=a>0?a-1:g.getMonth());var b,S=s||0,x=c||0,w=u||0,$=d||0;return f?new Date(Date.UTC(v,y,m,S,x,w,$+60*f.offset*1e3)):n?new Date(Date.UTC(v,y,m,S,x,w,$)):(b=new Date(v,y,m,S,x,w,$),p&&(b=r(b).week(p).toDate()),b)}catch(e){return new Date("")}}(t,l,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var f=l.length,p=1;p<=f;p+=1){i[1]=l[p-1];var g=n.apply(this,i);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var fu=J(du.exports),hu={exports:{}};hu.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var pu=J(hu.exports),gu={exports:{}};gu.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var mu=J(gu.exports),vu={exports:{}};vu.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var yu,bu,Su=J(vu.exports),xu={exports:{}};xu.exports=(yu={year:0,month:1,day:2,hour:3,minute:4,second:5},bu={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=bu[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),bu[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=yu[s];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o,i=this.utcOffset(),a=this.toDate(),l=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(l))/1e3/60),c=15*-Math.round(a.getTimezoneOffset()/15)-s;if(Number(c)){if(o=n(l,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var u=o.utcOffset();o=o.add(i-u,"minute")}}else o=this.utcOffset(0,t);return o.$x.$timezone=e,o},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var wu,$u=J(xu.exports);uu.extend(pu),uu.extend(Su),uu.extend(mu),uu.extend(fu),uu.extend($u),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=uu(t).startOf("week");return Fu(n).map((e=>Bu(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Bu(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(uu(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+uu(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=uu(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?uu(r):void 0,o?uu(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(wu||(wu={}));const Fu=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Bu=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Iu=[1,3,5,7,8,10,12],Tu=[4,6,9,11];var Du,Ou,ku;function Hu(e){const t=i(null);return f((()=>{t.current=e}),[e]),h(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Iu.includes(i)?Math.min(o,31).toString():Tu.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=uu(e,n);return uu(t,n).diff(r,"minute")},e.toDayjs=e=>e?uu(e):uu(),e.addMinutesToTime=(e,t,n="HH:mm")=>uu(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>uu(e).isSame(uu(t),n)}(Du||(Du={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!uu(e).isBefore(r,"day"))||!(!o||!uu(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(uu(e).isValid())return e}return""}}(Ou||(Ou={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ku||(ku={}));o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}});const Cu=y`
    border: 1px solid ${Ro.Accent.Light[1]};
    box-shadow: ${qc.InputBoxShadow};
`,zu=y`
    border: 1px solid ${Ro.Accent.Light[1]};
    box-shadow: none;
`,Eu=y`
    border: 1px solid ${Ro.Neutral[5]};
    box-shadow: none;
`,_u=y`
    border: 1px solid ${Ro.Validation.Red.Border};
    box-shadow: ${qc.InputErrorBoxShadow};
`,Ru=v.div`
    border: 1px solid ${Ro.Neutral[5]};
    border-radius: 4px;
    background: ${Ro.Neutral[8]};

    :focus-within {
        ${Cu}
    }
    ${e=>e.$focused&&Cu}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${zu}
                }
                ${e.$focused&&zu}
            `:e.$disabled?y`
                background: ${Ro.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Eu}
                }
                ${e.$focused&&Eu}
            `:e.$error?y`
                border: 1px solid ${Ro.Validation.Red.Border};

                :focus-within {
                    ${_u}
                }
                ${e.$focused&&_u}
            `:void 0}
`;v(Ru)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Au=v.input`
    ${e=>Ho("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Ro.Neutral[1]};
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
        color: ${Ro.Neutral[3]};
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
`,Mu=v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Ro.Primary};
    }
`,ju=v.div`
    overflow: hidden;
    border: 1px solid ${Ro.Neutral[5]};
    border-radius: 4px;
    background: ${Ro.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${eu.mobileL} {
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
        background: ${Ro.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Pu=v.div`
    background: transparent;
    padding: 0.5rem;
`;v.ul`
    list-style-type: none;
`,v.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Ro.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${Ro.Accent.Light[5]};
        `}
`,v(B)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Ro.Primary};
`,v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`;const Lu=v(F)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Ro.Primary};
`,Wu=v($)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Ro.Accent.Light[2]};
`,Nu=v.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Vu=v(Mu)`
    ${e=>Ho("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Ro.Primary};
`,Yu=v(Vu)`
    outline-offset: 0.25rem;
`,Uu=v(Vu)`
    padding: 0.5rem 1rem;
`,Gu=v.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Ju=v.div`
    ${e=>Ho("small"===e.$variant?"BodySmall":"Body","regular")}
`,Zu=v(w)`
    ${e=>{const t="small"===e.$variant?1:1.125;return y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Ro.Validation.Red.Icon};
`,Xu=v.button`
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
                background-color: ${Ro.Neutral[7]};
            `}
    }
`,qu=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=zo(e,["children","focusHighlight","focusOutline","type"]);return t(Xu,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),Ku=e=>"small"===e?1:1.125,Qu=e=>y`
        height: ${Ku(e)}rem;
        width: ${Ku(e)}rem;
    `,ed=v.div`
    background: ${Ro.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,td=v.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,nd=v(Au)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,rd=v(T)`
    color: ${Ro.Neutral[3]};
    flex-shrink: 0;
    ${e=>Qu(e.$variant)}
`,od=v(qu)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Ro.Neutral[3]};
    cursor: pointer;

    ${e=>y`
            svg {
                ${Qu(e.$variant)}
            }
        `}
`,id=m(((n,r)=>{var{value:o,variant:i,onClear:a}=n,l=zo(n,["value","variant","onClear"]);return e(ed,{children:[e(td,{children:[t(rd,{$variant:i,"aria-hidden":!0}),t(nd,Object.assign({ref:r,value:o,$variant:i},l))]}),o&&t(od,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(I,{"aria-hidden":!0})}))]})})),ad="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",ld=v(Mu)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Ho("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,sd=v.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${ad};

    svg {
        color: ${Ro.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Bo.BodySmall.fontSize:Bo.Body.fontSize;return y`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,cd=m((({children:n,disabled:r,expanded:o,listboxId:i,popupRole:a,readOnly:l,variant:s},c)=>e(ld,Object.assign({ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:s},{children:[n,!l&&t(sd,Object.assign({$expanded:o,$variant:s},{children:t(D,{"aria-hidden":!0})}))]}))));var ud=Symbol.for("immer-nothing"),dd=Symbol.for("immer-draftable"),fd=Symbol.for("immer-state"),hd="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function pd(e,...t){if("production"!==process.env.NODE_ENV){const n=hd[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var gd=Object.getPrototypeOf;function md(e){return!!e&&!!e[fd]}function vd(e){return!!e&&(bd(e)||Array.isArray(e)||!!e[dd]||!!e.constructor?.[dd]||Fd(e)||Bd(e))}var yd=Object.prototype.constructor.toString();function bd(e){if(!e||"object"!=typeof e)return!1;const t=gd(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===yd}function Sd(e,t){0===xd(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function xd(e){const t=e[fd];return t?t.type_:Array.isArray(e)?1:Fd(e)?2:Bd(e)?3:0}function wd(e,t){return 2===xd(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function $d(e,t,n){const r=xd(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function Fd(e){return e instanceof Map}function Bd(e){return e instanceof Set}function Id(e){return e.copy_||e.base_}function Td(e,t){if(Fd(e))return new Map(e);if(Bd(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=bd(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[fd];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const o=n[r],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(gd(e),t)}{const t=gd(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function Dd(e,t=!1){return kd(e)||md(e)||!vd(e)||(xd(e)>1&&(e.set=e.add=e.clear=e.delete=Od),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>Dd(t,!0)))),e}function Od(){pd(2)}function kd(e){return Object.isFrozen(e)}var Hd,Cd={};function zd(e){const t=Cd[e];return t||pd(0,e),t}function Ed(){return Hd}function _d(e,t){t&&(zd("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Rd(e){Ad(e),e.drafts_.forEach(jd),e.drafts_=null}function Ad(e){e===Hd&&(Hd=e.parent_)}function Md(e){return Hd={drafts_:[],parent_:Hd,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function jd(e){const t=e[fd];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Pd(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[fd].modified_&&(Rd(t),pd(4)),vd(e)&&(e=Ld(t,e),t.parent_||Nd(t,e)),t.patches_&&zd("Patches").generateReplacementPatches_(n[fd].base_,e,t.patches_,t.inversePatches_)):e=Ld(t,n,[]),Rd(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ud?e:void 0}function Ld(e,t,n){if(kd(t))return t;const r=t[fd];if(!r)return Sd(t,((o,i)=>Wd(e,r,t,o,i,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return Nd(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let o=t,i=!1;3===r.type_&&(o=new Set(t),t.clear(),i=!0),Sd(o,((o,a)=>Wd(e,r,t,o,a,n,i))),Nd(e,t,!1),n&&e.patches_&&zd("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Wd(e,t,n,r,o,i,a){if("production"!==process.env.NODE_ENV&&o===n&&pd(5),md(o)){const a=Ld(e,o,i&&t&&3!==t.type_&&!wd(t.assigned_,r)?i.concat(r):void 0);if($d(n,r,a),!md(a))return;e.canAutoFreeze_=!1}else a&&n.add(o);if(vd(o)&&!kd(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ld(e,o),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||Nd(e,o)}}function Nd(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Dd(t,n)}var Vd={get(e,t){if(t===fd)return e;const n=Id(e);if(!wd(n,t))return function(e,t,n){const r=Gd(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!vd(r)?r:r===Ud(e.base_,t)?(Zd(e),e.copy_[t]=Xd(r,e)):r},has:(e,t)=>t in Id(e),ownKeys:e=>Reflect.ownKeys(Id(e)),set(e,t,n){const r=Gd(Id(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=Ud(Id(e),t),o=r?.[fd];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,r)&&(void 0!==n||wd(e.base_,t)))return!0;Zd(e),Jd(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Ud(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,Zd(e),Jd(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=Id(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){pd(11)},getPrototypeOf:e=>gd(e.base_),setPrototypeOf(){pd(12)}},Yd={};function Ud(e,t){const n=e[fd];return(n?Id(n):e)[t]}function Gd(e,t){if(!(t in e))return;let n=gd(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=gd(n)}}function Jd(e){e.modified_||(e.modified_=!0,e.parent_&&Jd(e.parent_))}function Zd(e){e.copy_||(e.copy_=Td(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Sd(Vd,((e,t)=>{Yd[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Yd.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&pd(13),Yd.set.call(this,e,t,void 0)},Yd.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&pd(14),Vd.set.call(this,e[0],t,n,e[0])};function Xd(e,t){const n=Fd(e)?zd("MapSet").proxyMap_(e,t):Bd(e)?zd("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Ed(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=Vd;n&&(o=[r],i=Yd);const{revoke:a,proxy:l}=Proxy.revocable(o,i);return r.draft_=l,r.revoke_=a,l}(e,t);return(t?t.scope_:Ed()).drafts_.push(n),n}function qd(e){if(!vd(e)||kd(e))return e;const t=e[fd];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Td(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Td(e,!0);return Sd(n,((e,t)=>{$d(n,e,qd(t))})),t&&(t.finalized_=!1),n}var Kd=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...o){return r.produce(e,(e=>t.call(this,e,...o)))}}let r;if("function"!=typeof t&&pd(6),void 0!==n&&"function"!=typeof n&&pd(7),vd(e)){const o=Md(this),i=Xd(e,void 0);let a=!0;try{r=t(i),a=!1}finally{a?Rd(o):Ad(o)}return _d(o,n),Pd(r,o)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===ud&&(r=void 0),this.autoFreeze_&&Dd(r,!0),n){const t=[],o=[];zd("Patches").generateReplacementPatches_(e,r,t,o),n(t,o)}return r}pd(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;return[this.produce(e,t,((e,t)=>{n=e,r=t})),n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){vd(e)||pd(8),md(e)&&(e=function(e){md(e)||pd(10,e);return qd(e)}(e));const t=Md(this),n=Xd(e,void 0);return n[fd].isManual_=!0,Ad(t),n}finishDraft(e,t){const n=e&&e[fd];n&&n.isManual_||pd(9);const{scope_:r}=n;return _d(r,t),Pd(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=zd("Patches").applyPatches_;return md(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},Qd=Kd.produce;Kd.produceWithPatches.bind(Kd),Kd.setAutoFreeze.bind(Kd),Kd.setUseStrictShallowCopy.bind(Kd),Kd.applyPatches.bind(Kd),Kd.createDraft.bind(Kd),Kd.finishDraft.bind(Kd);const ef=(e,t,n)=>Qd(e,(e=>{for(let r=e.length-1;r>=0;r--){const o=e[r],i=nf(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&n&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?o.checked=!0:r&&(o.checked="mixed")}}})),tf=(e,t)=>{const[n,...r]=t;if(Ut(e)||Ut(n))return;const o=e.find((e=>e.key===n));return o&&r.length?tf(o.subItems,r):o},nf=e=>e.join(","),rf=e=>new Set(e.map((e=>e.join(",")))),of=v.li`
    display: ${e=>e.$visible?"flex":"none"};
`,af=v.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${Ro.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${Ro.Accent.Light[5]};
        `}
`,lf=v.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,sf=v.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${Ro.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return y`
                    transform: rotate(90deg);
                `}}
    }
`,cf=v.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,uf=v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,df=v(B)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Ro.Primary};
`,ff=v(C)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Ro.Primary};
`,hf=({listItems:n,multiSelect:r,selectedKeyPaths:o,itemsLoadState:l="success",itemTruncationType:s="end",itemMaxLines:c=2,variant:u="default",listboxId:f,width:h,mode:g="default",selectableCategory:m,onSelectItem:v,onSelectAll:y,onRetry:b,enableSearch:S,hideNoResultsDisplay:x,searchPlaceholder:w="Search",onSearch:$})=>{const F=r||m,[B,I]=a(""),T=B.toLowerCase().trim(),[D,k]=a(!1),H=i(),C=i(),z=i([]),E=i(),_=(()=>{const[e,t]=a(!1);return d((()=>{t(!0)}),[]),e})(),[R,A]=a([]),[M,j]=a([]),P=D?M:R,L=p((()=>{let e=0;for(const t of R)t.level>e&&(e=t.level);return e}),[R]),[W,N]=a(0),[V,Y]=a([]),[U,G]=a(0),J=e=>{const t=e.target.value;I(t),""===t?k(!1):t.trim().length>=3&&k(!0),null==$||$()},Z=()=>{var e;I(""),k(!1),null===(e=E.current)||void 0===e||e.focus(),null==$||$()},X=()=>{null==b||b()},q=()=>{if(0===o.size){const e=[],t=[];R.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==y||y(e,t)}else null==y||y([],[])},K=Hu(((e,t)=>((e,t,n,r,o)=>{const i=[],a=(e,l)=>{const s=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((u,d)=>{var f,h;const p=l?l.level+1:0,g=l?[...l.keyPath,u.key]:[u.key],m=nf(g),v={item:u,index:i.length,indexInParent:d,parentSetSize:e.length,keyPath:g,parentIndex:l?l.index:-1,parentKeyPath:l?l.keyPath:[],level:p,visible:0===p||o||(null==l?void 0:l.expanded),expanded:o,checked:t.has(m),hasSubItems:!!(null===(f=u.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!r&&-1!==u.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(s.push(v),i.push(v),null===(h=u.subItems)||void 0===h?void 0:h.length){const e=a(u.subItems,v);if(n&&!0!==v.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?v.checked=!0:n&&(v.checked="mixed")}v.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),v.subItemIndexes=e.map((e=>e.index))}})),s};return a(e,void 0),i})(e,o,r,T,t))),Q=Hu((e=>{return o.size?(t=K(e,!1),Qd(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>Qd(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const o=e[t].keyPath.length;if(o>r)r=o;else if(o<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],o=r.keyPath.slice(0,-1),i=e[n].keyPath.slice(0,o.length);pa(o,i)&&(r.visible=!0)}return e})))(K(e,!1));var t})),ee=Hu((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(T))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),te=Hu((()=>{A((e=>ef(e,o,r))),D&&j((e=>ef(e,o,r)))})),ne=(e,t,n)=>{const r=((e,t,n)=>Qd(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,r.length);if(!pa(r,a))break;t.visible=n&&i.expanded&&i.visible}})))(P,e,t);N(e),G(n),D?j(r):A(r)};((e,t,n="window",r)=>{const o=i();d((()=>{o.current=t}),[t]),d((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("keydown",(e=>{switch(e.code){case"ArrowDown":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return e[r]})(P,(e=>e.visible),W+1);t&&(G((e=>e+1)),N(t.index),z.current[t.index].focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return e[r]})(P,(e=>e.visible),W-1);t?(G((e=>e-1)),N(t.index),z.current[t.index].focus()):0===U&&E.current&&(E.current.focus(),G(-1),N(-1));break}case"ArrowRight":e.preventDefault(),ne(W,!0,U);break;case"ArrowLeft":e.preventDefault(),ne(W,!1,U);break;case"Space":if(document.activeElement===z.current[W]){e.preventDefault();const t=P[W];if(t.hasSubItems&&!F)return;null==v||v(t)}}})),d((()=>{let e;"default"===g?e=Q(n):"expand"===g?e=K(n,!0):"collapse"===g&&(e=K(n,!1)),A(e)}),[K,Q,n,g]),d((()=>{Y(P.filter((e=>e.visible)))}),[D,P]),d((()=>{te()}),[r,o,te]),d((()=>{if(D&&B.trim().length>=3){const e=ee(n),t=(e=>Qd(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(K(e,!1));j(t)}}),[ee,K,n,D,B]),d((()=>{_||(E.current?(N(-1),G(-1),setTimeout((()=>{var e;return null===(e=E.current)||void 0===e?void 0:e.focus()}),200)):z.current[W]?setTimeout((()=>{var e;return null===(e=z.current[W])||void 0===e?void 0:e.focus()}),200):(N(0),G(0),setTimeout((()=>{var e;return null===(e=z.current[0])||void 0===e?void 0:e.focus()}),200)))}),[W,U,_]);const re=()=>{if(S&&"success"===l)return t(id,{ref:E,onChange:J,value:B,placeholder:w,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Z,variant:u})},oe=()=>{if(r&&!D&&R.length>0&&"success"===l)return t(Nu,{children:t(Uu,Object.assign({onClick:q,type:"button",$variant:u},{children:0===o.size?"Select all":"Clear all"}))})},ie=()=>{if(!x&&D&&0===M.length&&"success"===l)return e(Gu,Object.assign({"data-testid":"list-no-results"},{children:[t(Zu,{$variant:u}),t(Ju,Object.assign({$variant:u},{children:"No results found."}))]}))},ae=()=>{if(b&&"loading"===l){const n="small"===u?16:18;return e(Gu,Object.assign({"data-testid":"list-loading"},{children:[t(su,{$buttonStyle:"secondary",size:n}),t(Ju,Object.assign({$variant:u},{children:"Loading..."}))]}))}},le=()=>{if(b&&"fail"===l)return e(Gu,Object.assign({"data-testid":"list-fail"},{children:[t(Zu,{"data-testid":"load-error-icon",$variant:u}),t(Ju,Object.assign({$variant:u},{children:"Failed to load."}))," ",t(Yu,Object.assign({onClick:X,type:"button",$variant:u},{children:"Try again."}))]}))},se=e=>{if(r)switch(e.checked){case"mixed":return t(ff,{"aria-hidden":!0});case!0:return t(Lu,{"aria-hidden":!0});default:return t(Wu,{"aria-hidden":!0})}if(!e.hasSubItems)return t(uf,Object.assign({$hasNestedSiblings:e.hasNestedSiblings||0===e.level},{children:e.checked&&t(df,{"aria-hidden":!0})}))},ce=(n,o)=>{const{level:i,visible:a,expanded:l,keyPath:u,checked:d,hasSubItems:f,indexInParent:h,parentSetSize:p}=n,g=n.index,m=U===o,y=f&&!F;return e(of,Object.assign({$visible:a},{children:[L>0&&t(lf,{$level:i}),L>0&&!f&&r&&t(cf,{}),e(af,Object.assign({"aria-checked":d,"aria-selected":!!d,"aria-expanded":f?l:void 0,"aria-level":i+1,"aria-posinset":h+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),y?ne(g,!l,o):((e,t)=>{G(t),N(e),null==v||v(P[e])})(g,o)},onMouseEnter:()=>((e,t)=>{N(t.index),G(e)})(o,n),ref:e=>z.current[n.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:y},{children:[f&&t(sf,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),ne(g,!l,o)},$expanded:l},{children:t(O,{})})),se(n),t(qo,{bold:f,searchTerm:D?T:void 0,label:n.item.label,selected:!!d,truncationType:s,maxLines:c})]}))]}),`[${u.join("---")}]`)},ue=()=>{const e="test"===process.env.NODE_ENV;return t("div",Object.assign({"aria-multiselectable":r,id:f,ref:C,role:"tree"},{children:t(bc,Object.assign({style:{height:"100%"},customScrollParent:H.current,data:V,itemContent:(e,t)=>ce(t,e)},e?{initialItemCount:V.length}:{}),e?V.length:void 0)}))};return t(ju,Object.assign({"data-testid":"dropdown-container",ref:H,$width:h},{children:e(Pu,Object.assign({"data-testid":"nested-dropdown-list"},{children:[re(),oe(),ie(),ae(),le(),ue()]}))}))},pf=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=pf(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const gf=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>pf(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Ro.Accent.Light[3]};
    }
`,mf=v.button`
    ${gf}
    cursor: pointer;
`;v.div`
    ${gf}
`;const vf=S`
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
`;v.div`
    position: relative;
    border: 1px solid ${Ro.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Ro.Neutral[8]};

    :focus-within {
        border: 1px solid ${Ro.Accent.Light[1]};
        box-shadow: ${qc.InputBoxShadow};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${vf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${Ro.Neutral[6](e)};

                ${mf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ro.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${mf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${Ro.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ro.Validation.Red.Border(e)};
                    box-shadow: ${qc.InputErrorBoxShadow};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${ad};
    margin-left: 1rem;
`,v(D)`
    color: ${Ro.Neutral[3]};
    ${e=>{let t=Bo.Body.fontSize;return"small"===e.$variant&&(t=Bo.BodySmall.fontSize),y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,v.div`
    height: 1px;
    background: ${Ro.Neutral[5]};
    margin: 0 0.5rem;
`;const yf=v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return y`
                color: ${Ro.Neutral[3]};
            `}}
`,bf=v.div`
    ${e=>Ho("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Sf=v(bf)`
    color: ${Ro.Neutral[3]};
`;var xf;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(xf||(xf={}));const wf=v.div`
    display: flex;
    flex-direction: column;
`,$f=e=>"right"===e?"bottom-end":"bottom-start",Ff=({enabled:r,isOpen:o,onOpen:l,onClose:s,onDismiss:c,renderElement:u,renderDropdown:f,customZIndex:h,clickToToggle:p=!1,offset:g=0,alignment:m="left",fitAvailableHeight:v})=>{var y;const b=i(null),S=i(null),{width:x}=Wn({targetRef:b,handleHeight:!1}),w={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<tu.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:$,floatingStyles:F,context:B}=E({open:o,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!o?null==l||l():!e&&o&&(null==s||s(n))},whileElementsMounted:_,placement:$f(m),middleware:[R(g),A(),M({limiter:j()}),P({apply({availableHeight:e}){S.current&&Object.assign(S.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}}),w]}),I=(()=>{const[e,t]=a(void 0),n=z();return d((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(xf.Change,e),n.events.emit(xf.Ready),()=>n.events.off(xf.Change,e)}),[n]),e})(),{isMounted:T,styles:D}=L(B,{initial:{opacity:0},open:{opacity:1},duration:300}),O=W(B,{enabled:r,toggle:p}),k=N(B,{enabled:r}),{getReferenceProps:H,getFloatingProps:C}=V([O,k]);return e(n,{children:[t("div",Object.assign({ref:e=>{b.current=e,$.setReference(e)}},H(),{children:u()})),T&&t(Y,{children:t(U,Object.assign({context:B,modal:!1,initialFocus:S,returnFocus:!1},{children:t("div",Object.assign({ref:$.setFloating,style:Object.assign(Object.assign({},F),{zIndex:null!==(y=null!=h?h:I)&&void 0!==y?y:50})},C(),{children:t(wf,Object.assign({ref:S,style:Object.assign({},D),inert:D.opacity<1?"":void 0},{children:f({elementWidth:x})}))}))}))})]})},Bf=({placeholder:e="Select",options:n,disabled:r,error:o,className:l,"data-testid":s,id:c,selectedKeyPath:u,mode:f,valueToStringFunction:h,enableSearch:p,searchPlaceholder:g,selectableCategory:m,hideNoResultsDisplay:v,readOnly:y,onBlur:b,onSearch:S,onSelectOption:x,onShowOptions:w,onHideOptions:$,onRetry:F,optionsLoadState:B="success",optionTruncationType:I="end",variant:T,alignment:D,dropdownZIndex:O})=>{const k=n,[H,C]=a(u?rf([u]):new Set),[z,E]=a(),[_,R]=a(!1),[A,M]=a(!1),[j]=a((()=>ku.generate())),P=i(),L=i(),W=i();d((()=>{C(u?rf([u]):new Set);const e=tf(k,u||[]);E(null!=e?e:void 0)}),[u,k]);const N=e=>{var t;const{keyPath:n,item:{label:r,value:o}}=e;C(rf([n])),E({label:r,value:o}),R(!1),J(!1),null===(t=L.current)||void 0===t||t.focus(),null==x||x(n,o)},V=()=>{A||_||M(!0)},Y=e=>{A&&!_&&P.current&&!P.current.contains(e.relatedTarget)&&(M(!1),null==b||b())},U=()=>{const{label:e,value:t}=z;return h?h(t)||t.toString():e},G=e=>{if("middle"===I){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),No.truncateOneLine(e,t,120,6)}return e},J=e=>{!e&&$&&$(),e&&w&&w()};return t(Ff,{enabled:!y&&!r,isOpen:_,renderElement:()=>t(Ru,Object.assign({className:l,"data-testid":s,id:c,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:A,$disabled:r,$readOnly:y,$error:o},{children:t(cd,Object.assign({ref:L,disabled:r,expanded:_,listboxId:j,popupRole:"tree",readOnly:y,variant:T},{children:t(yf,Object.assign({ref:W,$disabled:r},{children:Ut(z)?t(Sf,Object.assign({truncateType:I},{children:e})):t(bf,Object.assign({truncateType:I},{children:G(U())}))}))}))})),renderDropdown:({elementWidth:e})=>t(hf,{listboxId:j,listItems:k,selectedKeyPaths:H,selectableCategory:m,itemsLoadState:B,itemTruncationType:I,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:v,onSelectItem:N,onRetry:F,onSearch:S,variant:T,mode:f,width:e}),onOpen:()=>{R(!0),J(!0),M(!0)},onClose:e=>{R(!1),J(!1),"click"!==e&&(M(!1),null==b||b())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),R(!1),J(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:O})};export{Bf as InputNestedSelect};
//# sourceMappingURL=index.js.map
