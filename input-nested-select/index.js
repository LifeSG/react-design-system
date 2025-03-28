import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useRef as i,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as f,useCallback as h,useMemo as p,createElement as g,forwardRef as m}from"react";import v,{css as y,useTheme as b,keyframes as S}from"styled-components";import{ExternalIcon as x}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as $}from"@lifesg/react-icons/square";import{SquareTickFillIcon as F}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as B}from"@lifesg/react-icons/tick";import{CrossIcon as I}from"@lifesg/react-icons/cross";import{MagnifierIcon as T}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";import{CaretRightIcon as O}from"@lifesg/react-icons/caret-right";import k,{findDOMNode as H}from"react-dom";import{MinusSquareFillIcon as C}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as z,useFloating as E,autoUpdate as _,offset as R,flip as A,shift as M,limitShift as j,size as P,useTransitionStyles as L,useClick as W,useDismiss as N,useInteractions as V,FloatingPortal as Y,FloatingFocusManager as U}from"@floating-ui/react";var G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function J(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z=Object.prototype;var X=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Z)};var q=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),K=X,Q=q,ee=Object.prototype.hasOwnProperty;var te=function(e){if(!K(e))return Q(e);var t=[];for(var n in Object(e))ee.call(e,n)&&"constructor"!=n&&t.push(n);return t},ne="object"==typeof G&&G&&G.Object===Object&&G,re=ne,oe="object"==typeof self&&self&&self.Object===Object&&self,ie=re||oe||Function("return this")(),ae=ie.Symbol,se=ae,le=Object.prototype,ce=le.hasOwnProperty,ue=le.toString,de=se?se.toStringTag:void 0;var fe=function(e){var t=ce.call(e,de),n=e[de];try{e[de]=void 0;var r=!0}catch(e){}var o=ue.call(e);return r&&(t?e[de]=n:delete e[de]),o},he=Object.prototype.toString;var pe=fe,ge=function(e){return he.call(e)},me=ae?ae.toStringTag:void 0;var ve=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?pe(e):ge(e)};var ye=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},be=ve,Se=ye;var xe,we=function(e){if(!Se(e))return!1;var t=be(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},$e=ie["__core-js_shared__"],Fe=(xe=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||""))?"Symbol(src)_1."+xe:"";var Be=function(e){return!!Fe&&Fe in e},Ie=Function.prototype.toString;var Te=function(e){if(null!=e){try{return Ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""},De=we,Oe=Be,ke=ye,He=Te,Ce=/^\[object .+?Constructor\]$/,ze=Function.prototype,Ee=Object.prototype,_e=ze.toString,Re=Ee.hasOwnProperty,Ae=RegExp("^"+_e.call(Re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e){return!(!ke(e)||Oe(e))&&(De(e)?Ae:Ce).test(He(e))},je=function(e,t){return null==e?void 0:e[t]};var Pe=function(e,t){var n=je(e,t);return Me(n)?n:void 0},Le=Pe(ie,"DataView"),We=Pe(ie,"Map"),Ne=Le,Ve=We,Ye=Pe(ie,"Promise"),Ue=Pe(ie,"Set"),Ge=Pe(ie,"WeakMap"),Je=ve,Ze=Te,Xe="[object Map]",qe="[object Promise]",Ke="[object Set]",Qe="[object WeakMap]",et="[object DataView]",tt=Ze(Ne),nt=Ze(Ve),rt=Ze(Ye),ot=Ze(Ue),it=Ze(Ge),at=Je;(Ne&&at(new Ne(new ArrayBuffer(1)))!=et||Ve&&at(new Ve)!=Xe||Ye&&at(Ye.resolve())!=qe||Ue&&at(new Ue)!=Ke||Ge&&at(new Ge)!=Qe)&&(at=function(e){var t=Je(e),n="[object Object]"==t?e.constructor:void 0,r=n?Ze(n):"";if(r)switch(r){case tt:return et;case nt:return Xe;case rt:return qe;case ot:return Ke;case it:return Qe}return t});var st=at;var lt=function(e){return null!=e&&"object"==typeof e},ct=ve,ut=lt;var dt=function(e){return ut(e)&&"[object Arguments]"==ct(e)},ft=lt,ht=Object.prototype,pt=ht.hasOwnProperty,gt=ht.propertyIsEnumerable,mt=dt(function(){return arguments}())?dt:function(e){return ft(e)&&pt.call(e,"callee")&&!gt.call(e,"callee")},vt=Array.isArray;var yt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},bt=we,St=yt;var xt=function(e){return null!=e&&St(e.length)&&!bt(e)},wt={exports:{}};var $t=function(){return!1};!function(e,t){var n=ie,r=$t,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(wt,wt.exports);var Ft=wt.exports,Bt=ve,It=yt,Tt=lt,Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;var Ot=function(e){return Tt(e)&&It(e.length)&&!!Dt[Bt(e)]};var kt=function(e){return function(t){return e(t)}},Ht={exports:{}};!function(e,t){var n=ne,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Ht,Ht.exports);var Ct=Ht.exports,zt=Ot,Et=kt,_t=Ct&&Ct.isTypedArray,Rt=_t?Et(_t):zt,At=te,Mt=st,jt=mt,Pt=vt,Lt=xt,Wt=Ft,Nt=X,Vt=Rt,Yt=Object.prototype.hasOwnProperty;var Ut=J((function(e){if(null==e)return!0;if(Lt(e)&&(Pt(e)||"string"==typeof e||"function"==typeof e.splice||Wt(e)||Vt(e)||jt(e)))return!e.length;var t=Mt(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(Nt(e))return!At(e).length;for(var n in e)if(Yt.call(e,n))return!1;return!0})),Gt=function(e,t){return Gt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Gt(e,t)};var Jt=function(){return Jt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Jt.apply(this,arguments)};var Zt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Xt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},qt="object"==typeof Zt&&Zt&&Zt.Object===Object&&Zt,Kt="object"==typeof self&&self&&self.Object===Object&&self,Qt=qt||Kt||Function("return this")(),en=Qt,tn=function(){return en.Date.now()},nn=/\s/;var rn=function(e){for(var t=e.length;t--&&nn.test(e.charAt(t)););return t},on=/^\s+/;var an=function(e){return e?e.slice(0,rn(e)+1).replace(on,""):e},sn=Qt.Symbol,ln=sn,cn=Object.prototype,un=cn.hasOwnProperty,dn=cn.toString,fn=ln?ln.toStringTag:void 0;var hn=function(e){var t=un.call(e,fn),n=e[fn];try{e[fn]=void 0;var r=!0}catch(e){}var o=dn.call(e);return r&&(t?e[fn]=n:delete e[fn]),o},pn=Object.prototype.toString;var gn=hn,mn=function(e){return pn.call(e)},vn=sn?sn.toStringTag:void 0;var yn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":vn&&vn in Object(e)?gn(e):mn(e)},bn=function(e){return null!=e&&"object"==typeof e};var Sn=an,xn=Xt,wn=function(e){return"symbol"==typeof e||bn(e)&&"[object Symbol]"==yn(e)},$n=/^[-+]0x[0-9a-f]+$/i,Fn=/^0b[01]+$/i,Bn=/^0o[0-7]+$/i,In=parseInt;var Tn=Xt,Dn=tn,On=function(e){if("number"==typeof e)return e;if(wn(e))return NaN;if(xn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=xn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Sn(e);var n=Fn.test(e);return n||Bn.test(e)?In(e.slice(2),n?2:8):$n.test(e)?NaN:+e},kn=Math.max,Hn=Math.min;var Cn=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function g(){var e=Dn();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Hn(n,i-(e-c)):n}(e))}function m(e){return s=void 0,f&&r?h(e):(r=o=void 0,a)}function v(){var e=Dn(),n=p(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?h(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=On(t)||0,Tn(n)&&(u=!!n.leading,i=(d="maxWait"in n)?kn(On(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},v.flush=function(){return void 0===s?a:m(Dn())},v},zn=Cn,En=Xt;var _n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return En(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),zn(e,t,{leading:r,maxWait:t,trailing:o})},Rn=function(e,t,n,r){switch(t){case"debounce":return Cn(e,n,r);case"throttle":return _n(e,n,r);default:return e}},An=function(e){return"function"==typeof e},Mn=function(){return"undefined"==typeof window},jn=function(e){return e instanceof Element||e instanceof HTMLDocument},Pn=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&An(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Mn()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Mn())return null;if(t)return document.querySelector(t);if(r&&jn(r))return r;if(n.targetRef&&jn(n.targetRef.current))return n.targetRef.current;var o=H(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Pn(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!Mn()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return An(t)?"renderProp":An(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,Mn()||(n.resizeHandler=Rn(n.createResizeHandler,o,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Gt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Mn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return r.createElement(a,null)}}}(u);var Ln=Mn()?d:f;function Wn(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(n),v=i(null),y=null!=h?h:v,b=i(),S=a({width:void 0,height:void 0}),x=S[0],w=S[1];return Ln((function(){if(!Mn()){var e=Pn(g,w,u,f);b.current=Rn((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!m.current&&!Mn()&&e({width:r,height:o}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,u,f,g,p,y.current]),Jt({ref:y},x)}const Nn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Vn={D1:{fontFamily:Nn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Nn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Nn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Nn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Nn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Nn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Nn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Nn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Nn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Nn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Nn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Nn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Yn={D1:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Nn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Nn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Nn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Nn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Nn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Un={D1:{fontFamily:Nn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Nn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Nn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Nn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Nn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Nn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Nn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Nn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Nn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Nn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Nn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Nn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Nn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var Gn=ve,Jn=lt;var Zn=function(e){return"symbol"==typeof e||Jn(e)&&"[object Symbol]"==Gn(e)},Xn=vt,qn=Zn,Kn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qn=/^\w*$/;var er=function(e,t){if(Xn(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!qn(e))||(Qn.test(e)||!Kn.test(e)||null!=t&&e in Object(t))},tr=Pe(Object,"create"),nr=tr;var rr=function(){this.__data__=nr?nr(null):{},this.size=0};var or=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ir=tr,ar=Object.prototype.hasOwnProperty;var sr=function(e){var t=this.__data__;if(ir){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ar.call(t,e)?t[e]:void 0},lr=tr,cr=Object.prototype.hasOwnProperty;var ur=tr;var dr=rr,fr=or,hr=sr,pr=function(e){var t=this.__data__;return lr?void 0!==t[e]:cr.call(t,e)},gr=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ur&&void 0===t?"__lodash_hash_undefined__":t,this};function mr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}mr.prototype.clear=dr,mr.prototype.delete=fr,mr.prototype.get=hr,mr.prototype.has=pr,mr.prototype.set=gr;var vr=mr;var yr=function(){this.__data__=[],this.size=0};var br=function(e,t){return e===t||e!=e&&t!=t},Sr=br;var xr=function(e,t){for(var n=e.length;n--;)if(Sr(e[n][0],t))return n;return-1},wr=xr,$r=Array.prototype.splice;var Fr=xr;var Br=xr;var Ir=xr;var Tr=yr,Dr=function(e){var t=this.__data__,n=wr(t,e);return!(n<0)&&(n==t.length-1?t.pop():$r.call(t,n,1),--this.size,!0)},Or=function(e){var t=this.__data__,n=Fr(t,e);return n<0?void 0:t[n][1]},kr=function(e){return Br(this.__data__,e)>-1},Hr=function(e,t){var n=this.__data__,r=Ir(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Cr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Cr.prototype.clear=Tr,Cr.prototype.delete=Dr,Cr.prototype.get=Or,Cr.prototype.has=kr,Cr.prototype.set=Hr;var zr=Cr,Er=vr,_r=zr,Rr=We;var Ar=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Mr=function(e,t){var n=e.__data__;return Ar(t)?n["string"==typeof t?"string":"hash"]:n.map},jr=Mr;var Pr=Mr;var Lr=Mr;var Wr=Mr;var Nr=function(e,t){var n=Wr(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Vr=function(){this.size=0,this.__data__={hash:new Er,map:new(Rr||_r),string:new Er}},Yr=function(e){var t=jr(this,e).delete(e);return this.size-=t?1:0,t},Ur=function(e){return Pr(this,e).get(e)},Gr=function(e){return Lr(this,e).has(e)},Jr=Nr;function Zr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Zr.prototype.clear=Vr,Zr.prototype.delete=Yr,Zr.prototype.get=Ur,Zr.prototype.has=Gr,Zr.prototype.set=Jr;var Xr=Zr,qr=Xr;function Kr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Kr.Cache||qr),n}Kr.Cache=qr;var Qr=Kr;var eo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,to=/\\(\\)?/g,no=function(e){var t=Qr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(eo,(function(e,n,r,o){t.push(r?o.replace(to,"$1"):n||e)})),t}));var ro=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},oo=vt,io=Zn,ao=ae?ae.prototype:void 0,so=ao?ao.toString:void 0;var lo=function e(t){if("string"==typeof t)return t;if(oo(t))return ro(t,e)+"";if(io(t))return so?so.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},co=lo;var uo=vt,fo=er,ho=no,po=function(e){return null==e?"":co(e)};var go=Zn;var mo=function(e,t){return uo(e)?e:fo(e,t)?[e]:ho(po(e))},vo=function(e){if("string"==typeof e||go(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var yo=function(e,t){for(var n=0,r=(t=mo(t,e)).length;null!=e&&n<r;)e=e[vo(t[n++])];return n&&n==r?e:void 0};var bo=J((function(e,t,n){var r=null==e?void 0:yo(e,t);return void 0===r?n:r}));const So=(e,t,n)=>t?bo(n,t)||bo(e,t):n||e,xo=(e,t)=>{const n=t||e.defaultValue;return bo(e.collections,n)};var wo;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wo||(wo={}));const $o={collections:{base:Vn,oneservice:Un,plusJakartaSans:Yn},defaultValue:"base"},Fo=e=>t=>{const n=t.theme,r=xo($o,n[wo.textStyleScheme]);return n.options&&n.options.textStyle?So(r,e,n.options.textStyle):So(r,e)},Bo={D1:{fontFamily:Fo("D1.fontFamily"),fontSize:Fo("D1.fontSize"),fontWeight:Fo("D1.fontWeight"),lineHeight:Fo("D1.lineHeight"),letterSpacing:Fo("D1.letterSpacing"),fontVariant:Fo("D1.fontVariant")},D2:{fontFamily:Fo("D2.fontFamily"),fontSize:Fo("D2.fontSize"),fontWeight:Fo("D2.fontWeight"),lineHeight:Fo("D2.lineHeight"),letterSpacing:Fo("D2.letterSpacing"),fontVariant:Fo("D2.fontVariant")},D3:{fontFamily:Fo("D3.fontFamily"),fontSize:Fo("D3.fontSize"),fontWeight:Fo("D3.fontWeight"),lineHeight:Fo("D3.lineHeight"),letterSpacing:Fo("D3.letterSpacing"),fontVariant:Fo("D3.fontVariant")},D4:{fontFamily:Fo("D4.fontFamily"),fontSize:Fo("D4.fontSize"),fontWeight:Fo("D4.fontWeight"),lineHeight:Fo("D4.lineHeight"),letterSpacing:Fo("D4.letterSpacing"),fontVariant:Fo("D4.fontVariant")},DBody:{fontFamily:Fo("DBody.fontFamily"),fontSize:Fo("DBody.fontSize"),fontWeight:Fo("DBody.fontWeight"),lineHeight:Fo("DBody.lineHeight"),letterSpacing:Fo("DBody.letterSpacing"),fontVariant:Fo("DBody.fontVariant")},H1:{fontFamily:Fo("H1.fontFamily"),fontSize:Fo("H1.fontSize"),fontWeight:Fo("H1.fontWeight"),lineHeight:Fo("H1.lineHeight"),letterSpacing:Fo("H1.letterSpacing"),fontVariant:Fo("H1.fontVariant")},H2:{fontFamily:Fo("H2.fontFamily"),fontSize:Fo("H2.fontSize"),fontWeight:Fo("H2.fontWeight"),lineHeight:Fo("H2.lineHeight"),letterSpacing:Fo("H2.letterSpacing"),fontVariant:Fo("H2.fontVariant")},H3:{fontFamily:Fo("H3.fontFamily"),fontSize:Fo("H3.fontSize"),fontWeight:Fo("H3.fontWeight"),lineHeight:Fo("H3.lineHeight"),letterSpacing:Fo("H3.letterSpacing"),fontVariant:Fo("H3.fontVariant")},H4:{fontFamily:Fo("H4.fontFamily"),fontSize:Fo("H4.fontSize"),fontWeight:Fo("H4.fontWeight"),lineHeight:Fo("H4.lineHeight"),letterSpacing:Fo("H4.letterSpacing"),fontVariant:Fo("H4.fontVariant")},H5:{fontFamily:Fo("H5.fontFamily"),fontSize:Fo("H5.fontSize"),fontWeight:Fo("H5.fontWeight"),lineHeight:Fo("H5.lineHeight"),letterSpacing:Fo("H5.letterSpacing"),fontVariant:Fo("H5.fontVariant")},H6:{fontFamily:Fo("H6.fontFamily"),fontSize:Fo("H6.fontSize"),fontWeight:Fo("H6.fontWeight"),lineHeight:Fo("H6.lineHeight"),letterSpacing:Fo("H6.letterSpacing"),fontVariant:Fo("H6.fontVariant")},Body:{fontFamily:Fo("Body.fontFamily"),fontSize:Fo("Body.fontSize"),fontWeight:Fo("Body.fontWeight"),lineHeight:Fo("Body.lineHeight"),letterSpacing:Fo("Body.letterSpacing"),fontVariant:Fo("Body.fontVariant")},BodySmall:{fontFamily:Fo("BodySmall.fontFamily"),fontSize:Fo("BodySmall.fontSize"),fontWeight:Fo("BodySmall.fontWeight"),lineHeight:Fo("BodySmall.lineHeight"),letterSpacing:Fo("BodySmall.letterSpacing"),fontVariant:Fo("BodySmall.fontVariant")},XSmall:{fontFamily:Fo("XSmall.fontFamily"),fontSize:Fo("XSmall.fontSize"),fontWeight:Fo("XSmall.fontWeight"),lineHeight:Fo("XSmall.lineHeight"),letterSpacing:Fo("XSmall.letterSpacing"),fontVariant:Fo("XSmall.fontVariant")}},Io=[Nn.OpenSans,Nn.PlusJakartaSans],To=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Do=(e,t)=>n=>{var r;const o=Bo[e].fontFamily(n),i=Bo[e].fontWeight(n),a=Io.find((e=>Object.values(e).includes(o)));return a?y`
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
`,Po=n=>{var{external:r=!1,children:o}=n,i=zo(n,["external","children"]);return e(Mo,Object.assign({},i,{children:[o,r&&t(jo,{})]}))};var Lo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lo||(Lo={}));const Wo={[wo.colorScheme]:"base",[wo.textStyleScheme]:"base",[wo.designTokenScheme]:"base",[wo.resourceScheme]:"base"};var No;wo.colorScheme,wo.textStyleScheme,wo.designTokenScheme,wo.resourceScheme,wo.colorScheme,wo.textStyleScheme,wo.designTokenScheme,wo.resourceScheme,wo.colorScheme,wo.textStyleScheme,wo.designTokenScheme,wo.resourceScheme,wo.colorScheme,wo.textStyleScheme,wo.designTokenScheme,wo.resourceScheme,wo.colorScheme,wo.textStyleScheme,wo.designTokenScheme,wo.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(No||(No={}));const Vo=y`
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
`,qo=({bold:r,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,sublabel:c,truncationType:u="middle",variant:d})=>{const f=b()||Wo,g=Bo.Body.fontSize({theme:f}),m=Bo.Body.fontFamily({theme:f}),{ref:v,width:y}=Wn(),S=h((e=>{if("inline"!==o)return!1;return No.getTextWidth(e,`${g}rem '${m}'`)>y*s-50}),[y,o,g,m,s]),x=p((()=>S(i)),[S,i]),w=p((()=>c&&S(c)),[S,c]),$=x||w?"next-line":o,F=r=>{if(!a)return r;const o=a.toLowerCase().trim(),s=r.toLowerCase().indexOf(o),l=s+a.length;return-1===s?r:e(n,{children:[i.slice(0,s),t(Go,Object.assign({$variant:d},{children:i.slice(s,l)})),i.slice(l)]})},B=r=>e(n,{children:[t(Zo,Object.assign({$maxLines:s,"aria-hidden":!0},{children:F(r)})),t(Xo,Object.assign({$maxLines:s,"aria-hidden":!0},{children:F(r)}))]});return e(Jo,Object.assign({ref:v,$labelDisplayType:$},{children:[t(Yo,Object.assign({"aria-label":i,$bold:r,$maxLines:s,$selected:l,$truncateType:u,$variant:d},{children:"middle"===u&&x?B(i):F(i)})),c&&t(Uo,Object.assign({"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o},{children:"middle"===u&&w?B(c):c}))]}))};var Ko=zr;var Qo=zr,ei=We,ti=Xr;var ni=zr,ri=function(){this.__data__=new Ko,this.size=0},oi=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},ii=function(e){return this.__data__.get(e)},ai=function(e){return this.__data__.has(e)},si=function(e,t){var n=this.__data__;if(n instanceof Qo){var r=n.__data__;if(!ei||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ti(r)}return n.set(e,t),this.size=n.size,this};function li(e){var t=this.__data__=new ni(e);this.size=t.size}li.prototype.clear=ri,li.prototype.delete=oi,li.prototype.get=ii,li.prototype.has=ai,li.prototype.set=si;var ci=li;var ui=Xr,di=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},fi=function(e){return this.__data__.has(e)};function hi(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ui;++t<n;)this.add(e[t])}hi.prototype.add=hi.prototype.push=di,hi.prototype.has=fi;var pi=hi,gi=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},mi=function(e,t){return e.has(t)};var vi=function(e,t,n,r,o,i){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&n?new pi:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,i):r(p,g,d,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!gi(t,(function(e,t){if(!mi(h,t)&&(p===e||o(p,e,n,r,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var yi=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},bi=ie.Uint8Array,Si=br,xi=vi,wi=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},$i=yi,Fi=ae?ae.prototype:void 0,Bi=Fi?Fi.valueOf:void 0;var Ii=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new bi(e),new bi(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Si(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=wi;case"[object Set]":var l=1&r;if(s||(s=$i),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=xi(s(e),s(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(Bi)return Bi.call(e)==Bi.call(t)}return!1};var Ti=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},Di=Ti,Oi=vt;var ki=function(e,t,n){var r=t(e);return Oi(e)?r:Di(r,n(e))};var Hi=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i},Ci=function(){return[]},zi=Object.prototype.propertyIsEnumerable,Ei=Object.getOwnPropertySymbols,_i=Ei?function(e){return null==e?[]:(e=Object(e),Hi(Ei(e),(function(t){return zi.call(e,t)})))}:Ci;var Ri=/^(?:0|[1-9]\d*)$/;var Ai=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Mi=mt,ji=vt,Pi=Ft,Li=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Ri.test(e))&&e>-1&&e%1==0&&e<t},Wi=Rt,Ni=Object.prototype.hasOwnProperty;var Vi=function(e,t){var n=ji(e),r=!n&&Mi(e),o=!n&&!r&&Pi(e),i=!n&&!r&&!o&&Wi(e),a=n||r||o||i,s=a?Ai(e.length,String):[],l=s.length;for(var c in e)!t&&!Ni.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Li(c,l))||s.push(c);return s},Yi=te,Ui=xt;var Gi=ki,Ji=_i,Zi=function(e){return Ui(e)?Vi(e):Yi(e)};var Xi=function(e){return Gi(e,Zi,Ji)},qi=Object.prototype.hasOwnProperty;var Ki=ci,Qi=vi,ea=Ii,ta=function(e,t,n,r,o,i){var a=1&n,s=Xi(e),l=s.length;if(l!=Xi(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:qi.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var v=a?r(m,g,u,t,e,i):r(g,m,u,e,t,i);if(!(void 0===v?g===m||o(g,m,n,r,i):v)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},na=st,ra=vt,oa=Ft,ia=Rt,aa="[object Arguments]",sa="[object Array]",la="[object Object]",ca=Object.prototype.hasOwnProperty;var ua=function(e,t,n,r,o,i){var a=ra(e),s=ra(t),l=a?sa:na(e),c=s?sa:na(t),u=(l=l==aa?la:l)==la,d=(c=c==aa?la:c)==la,f=l==c;if(f&&oa(e)){if(!oa(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new Ki),a||ia(e)?Qi(e,t,n,r,o,i):ea(e,t,l,n,r,o,i);if(!(1&n)){var h=u&&ca.call(e,"__wrapped__"),p=d&&ca.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new Ki),o(g,m,n,r,i)}}return!!f&&(i||(i=new Ki),ta(e,t,n,r,o,i))},da=lt;var fa=function e(t,n,r,o,i){return t===n||(null==t||null==n||!da(t)&&!da(n)?t!=t&&n!=n:ua(t,n,r,o,e,i))},ha=fa;var pa=J((function(e,t){return ha(e,t)}));const ga=0,ma=1,va=2,ya=4;function ba(e){return()=>e}function Sa(e){e()}function xa(e,t){return n=>e(t(n))}function wa(e,t){return()=>e(t)}function $a(e,t){return n=>e(t,n)}function Fa(e){return void 0!==e}function Ba(){}function Ia(e,t){return t(e),e}function Ta(e,t){return t(e)}function Da(...e){return e}function Oa(e,t){return e(ma,t)}function ka(e,t){e(ga,t)}function Ha(e){e(va)}function Ca(e){return e(ya)}function za(e,t){return Oa(e,$a(t,ga))}function Ea(e,t){const n=e(ma,(e=>{n(),t(e)}));return n}function _a(e){let t,n;return r=>o=>{t=o,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function Ra(e,t){return e===t}function Aa(e=Ra){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function Ma(e){return t=>n=>{e(n)&&t(n)}}function ja(e){return t=>xa(t,e)}function Pa(e){return t=>()=>{t(e)}}function La(e,...t){const n=function(...e){return t=>e.reduceRight(Ta,t)}(...t);return(t,r)=>{switch(t){case va:return void Ha(e);case ma:return Oa(e,n(r))}}}function Wa(e,t){return n=>r=>{n(t=e(t,r))}}function Na(e){return t=>n=>{e>0?e--:t(n)}}function Va(e){let t,n=null;return r=>o=>{n=o,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function Ya(...e){const t=new Array(e.length);let n=0,r=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Oa(e,(e=>{const s=n;n|=a,t[i]=e,s!==o&&n===o&&r&&(r(),r=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};n===o?a():r=a}}function Ua(e){let t=e;const n=Ja();return(e,r)=>{switch(e){case ga:t=r;break;case ma:r(t);break;case ya:return t}return n(e,r)}}function Ga(e,t){return Ia(Ua(t),(t=>za(e,t)))}function Ja(){const e=[];return(t,n)=>{switch(t){case ga:return void e.slice().forEach((e=>{e(n)}));case va:return void e.splice(0,e.length);case ma:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function Za(e){return Ia(Ja(),(t=>za(e,t)))}function Xa(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:qa(),singleton:n}}const qa=()=>Symbol();function Ka(...e){const t=Ja(),n=new Array(e.length);let r=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Oa(e,(e=>{n[i]=e,r|=a,r===o&&ka(t,n)}))})),function(e,i){switch(e){case va:return void Ha(t);case ma:return r===o&&i(n),Oa(t,i)}}}function Qa(e,t=Ra){return La(e,Aa(t))}function es(...e){return function(t,n){switch(t){case va:return;case ma:return function(...e){return()=>{e.map(Sa)}}(...e.map((e=>Oa(e,n))))}}}var ts=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(ts||{});const ns={0:"debug",3:"error",1:"log",2:"warn"},rs=Xa((()=>{const e=Ua(3);return{log:Ua(((t,n,r=1)=>{var o;r>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:Ca(e))&&console[ns[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function os(e,t,n){return is(e,t,n).callbackRef}function is(e,t,n){const r=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)}))),[e]);i=e=>{e&&t?(a.observe(e),r.current=e):(r.current&&a.unobserve(r.current),r.current=null)}}return{callbackRef:i,ref:r}}function as(e,t,n,r,i,a,s,l,c){const u=o.useCallback((n=>{const o=function(e,t,n,r){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),c=t(o,n);if(0===c&&r("Zero-sized element, this should not happen",{child:o},ts.ERROR),c===l)continue;const u=i[i.length-1];0===i.length||u.size!==c||u.endIndex!==s-1?i.push({endIndex:s,size:c,startIndex:s}):i[i.length-1].endIndex++}return i}(n.children,t,l?"offsetWidth":"offsetHeight",i);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const u="window"===c.lastElementChild.dataset.viewportType,d=s?l?s.scrollLeft:s.scrollTop:u?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?c.scrollLeft:c.scrollTop,f=s?l?s.scrollWidth:s.scrollHeight:u?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?c.scrollWidth:c.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:u?l?window.innerWidth:window.innerHeight:l?c.offsetWidth:c.offsetHeight;r({scrollHeight:f,scrollTop:Math.max(d,0),viewportHeight:h}),null==a||a(l?ss("column-gap",getComputedStyle(n).columnGap,i):ss("row-gap",getComputedStyle(n).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,r]);return is(u,n,c)}function ss(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,ts.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function ls(e,t,n){const r=o.useRef(null),i=o.useCallback((n=>{if(null==n||!n.offsetParent)return;const o=n.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),n=o.top-e.top;s=e.height-Math.max(0,n),a=n+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;r.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(r.current)}),[e,t]),{callbackRef:a,ref:s}=is(i,!0,n),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const cs=Xa((()=>{const e=Ja(),t=Ja(),n=Ua(0),r=Ja(),o=Ua(0),i=Ja(),a=Ja(),s=Ua(0),l=Ua(0),c=Ua(0),u=Ua(0),d=Ja(),f=Ja(),h=Ua(!1),p=Ua(!1),g=Ua(!1);return za(La(e,ja((({scrollTop:e})=>e))),t),za(La(e,ja((({scrollHeight:e})=>e))),a),za(t,o),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:u,headerHeight:s,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:d,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:r,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),us={lvl:0};function ds(e,t){const n=e.length;if(0===n)return[];let{index:r,value:o}=t(e[0]);const i=[];for(let a=1;a<n;a++){const{index:n,value:s}=t(e[a]);i.push({end:n-1,start:r,value:o}),r=n,o=s}return i.push({end:1/0,start:r,value:o}),i}function fs(e){return e===us}function hs(e,t){if(!fs(e))return t===e.k?e.v:t<e.k?hs(e.l,t):hs(e.r,t)}function ps(e,t,n="k"){if(fs(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=ps(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return ps(e.l,t,n)}function gs(e,t,n){return fs(e)?Is(t,n,1):t===e.k?ws(e,{k:t,v:n}):t<e.k?Ts(ws(e,{l:gs(e.l,t,n)})):Ts(ws(e,{r:gs(e.r,t,n)}))}function ms(){return us}function vs(e,t,n){if(fs(e))return[];return function(e){return ds(e,(({k:e,v:t})=>({index:e,value:t})))}(Ss(e,ps(e,t)[0],n))}function ys(e,t){if(fs(e))return us;const{k:n,l:r,r:o}=e;if(t===n){if(fs(r))return o;if(fs(o))return r;{const[t,n]=Bs(r);return xs(ws(e,{k:t,l:$s(r),v:n}))}}return xs(ws(e,t<n?{l:ys(r,t)}:{r:ys(o,t)}))}function bs(e){return fs(e)?[]:[...bs(e.l),{k:e.k,v:e.v},...bs(e.r)]}function Ss(e,t,n){if(fs(e))return[];const{k:r,l:o,r:i,v:a}=e;let s=[];return r>t&&(s=s.concat(Ss(o,t,n))),r>=t&&r<=n&&s.push({k:r,v:a}),r<=n&&(s=s.concat(Ss(i,t,n))),s}function xs(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(Fs(t))return Ds(ws(e,{lvl:n-1}));if(!fs(t)&&!fs(t.r))return ws(t.r,{l:ws(t,{r:t.r.l}),lvl:n,r:ws(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(Fs(e))return Os(ws(e,{lvl:n-1}));if(fs(r)||fs(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,o=Fs(t)?r.lvl-1:r.lvl;return ws(t,{l:ws(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:Os(ws(r,{l:t.r,lvl:o}))})}}function ws(e,t){return Is(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function $s(e){return fs(e.r)?e.l:xs(ws(e,{r:$s(e.r)}))}function Fs(e){return fs(e)||e.lvl>e.r.lvl}function Bs(e){return fs(e.r)?[e.k,e.v]:Bs(e.r)}function Is(e,t,n,r=us,o=us){return{k:e,l:r,lvl:n,r:o,v:t}}function Ts(e){return Os(Ds(e))}function Ds(e){const{l:t}=e;return fs(t)||t.lvl!==e.lvl?e:ws(t,{r:ws(e,{l:t.r})})}function Os(e){const{lvl:t,r:n}=e;return fs(n)||fs(n.r)||n.lvl!==t||n.r.lvl!==t?e:ws(n,{l:ws(e,{r:n.l}),lvl:t+1})}function ks(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Hs(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Cs=Xa((()=>({recalcInProgress:Ua(!1)})),[],{singleton:!0});function zs(e,t,n){return e[Es(e,t,n)]}function Es(e,t,n,r=0){let o=e.length-1;for(;r<=o;){const i=Math.floor((r+o)/2),a=n(e[i],t);if(0===a)return i;if(-1===a){if(o-r<2)return i-1;o=i-1}else{if(o===r)return i;r=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function _s(e,t){return Math.round(e.getBoundingClientRect()[t])}function Rs(e){return!fs(e.groupOffsetTree)}function As({index:e},t){return t===e?0:t<e?-1:1}function Ms({offset:e},t){return t===e?0:t<e?-1:1}function js(e,t,n){if(0===t.length)return 0;const{index:r,offset:o,size:i}=zs(t,e,As),a=e-r,s=i*a+(a-1)*n+o;return s>0?s+n:s}function Ps(e,t){if(!Rs(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function Ls(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=Ps("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function Ws(e,t,n,r=0){return r>0&&(t=Math.max(t,zs(e,r,As).offset)),ds(function(e,t,n,r){const o=Es(e,t,r),i=Es(e,n,r,o);return e.slice(o,i+1)}(e,t,n,Ms),Us)}function Ns(e,[t,n,r,o]){t.length>0&&r("received item sizes",t,ts.DEBUG);const i=e.sizeTree;let a=i,s=0;if(n.length>0&&fs(i)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>gs(gs(t,n,e),n+1,r)),a)}else[a,s]=function(e,t){let n=fs(e)?0:1/0;for(const r of t){const{endIndex:t,size:o,startIndex:i}=r;if(n=Math.min(n,i),fs(e)){e=gs(e,0,o);continue}const a=vs(e,i-1,t+1);if(a.some(Gs(r)))continue;let s=!1,l=!1;for(const{end:n,start:r,value:i}of a)s?(t>=r||o===i)&&(e=ys(e,r)):(l=i!==o,s=!0),n>t&&t>=r&&i!==o&&(e=gs(e,t+1,i));l&&(e=gs(e,i,o))}return[e,n]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:c,lastSize:u,offsetTree:d}=Ys(e.offsetTree,s,a,o);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>gs(e,t,js(t,d,o))),ms()),lastIndex:l,lastOffset:c,lastSize:u,offsetTree:d,sizeTree:a}}function Vs(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function Ys(e,t,n,r){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=Es(o,t-1,As),s=o[l].offset;const e=ps(n,t-1);i=e[0],a=e[1],o.length&&o[l].size===ps(n,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of vs(n,t,1/0)){const t=e-i,n=t*a+s+t*r;o.push({index:e,offset:n,size:l}),i=e,s=n,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function Us(e){return{index:e.index,value:e}}function Gs(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const Js={offsetHeight:"height",offsetWidth:"width"},Zs=Xa((([{log:e},{recalcInProgress:t}])=>{const n=Ja(),r=Ja(),o=Ga(r,0),i=Ja(),a=Ja(),s=Ua(0),l=Ua([]),c=Ua(void 0),u=Ua(void 0),d=Ua(((e,t)=>_s(e,Js[t]))),f=Ua(void 0),h=Ua(0),p={groupIndices:[],groupOffsetTree:ms(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:ms()},g=Ga(La(n,Ya(l,e,h),Wa(Ns,p),Aa()),p),m=Ga(La(l,Aa(),Wa(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),ja((({prev:e})=>e))),[]);za(La(l,Ma((e=>e.length>0)),Ya(g,h),ja((([e,t,n])=>{const r=e.reduce(((e,r,o)=>gs(e,r,js(r,t.offsetTree,n)||o)),ms());return{...t,groupIndices:e,groupOffsetTree:r}}))),g),za(La(r,Ya(g),Ma((([e,{lastIndex:t}])=>e<t)),ja((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),za(c,u);const v=Ga(La(c,ja((e=>void 0===e))),!0);za(La(u,Ma((e=>void 0!==e&&fs(Ca(g).sizeTree))),ja((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const y=Za(La(n,Ya(g),Wa((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:p}),ja((e=>e.changed))));Oa(La(s,Wa(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),ja((e=>e.diff))),(e=>{const{groupIndices:n}=Ca(g);if(e>0)ka(t,!0),ka(i,e+Vs(e,n));else if(e<0){const t=Ca(m);t.length>0&&(e-=Vs(-e,t)),ka(a,e)}})),Oa(La(s,Ya(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},ts.ERROR)}));const b=Za(i);za(La(i,Ya(g),ja((([e,t])=>{const n=t.groupIndices.length>0,r=[],o=t.lastSize;if(n){const n=hs(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=bs(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:n,v:r})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:o}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return bs(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),n);const S=Za(La(a,Ya(g,h),ja((([e,{offsetTree:t},n])=>js(-e,t,n)))));return za(La(a,Ya(g,h),ja((([e,t,n])=>{if(t.groupIndices.length>0){if(fs(t.sizeTree))return t;let r=ms();const o=Ca(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(r=bs(t.sizeTree).reduce(((t,{k:n,v:r})=>gs(t,Math.max(0,n+e),r)),r),i!==-e){r=gs(r,0,hs(t.sizeTree,s));r=gs(r,1,ps(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...Ys(t.offsetTree,0,r,n)}}{const r=bs(t.sizeTree).reduce(((t,{k:n,v:r})=>gs(t,Math.max(0,n+e),r)),ms());return{...t,sizeTree:r,...Ys(t.offsetTree,0,r,n)}}}))),g),{beforeUnshiftWith:b,data:f,defaultItemSize:u,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:d,listRefresh:y,shiftWith:a,shiftWithOffset:S,sizeRanges:n,sizes:g,statefulTotalCount:o,totalCount:r,trackItemSizes:v,unshiftWith:i}}),Da(rs,Cs),{singleton:!0});function Xs(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const qs=Xa((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:o}])=>{const i=Ja(),a=Ja(),s=Za(La(i,ja(Xs)));return za(La(s,ja((e=>e.totalCount))),n),za(La(s,ja((e=>e.groupIndices))),e),za(La(Ka(o,t,r),Ma((([e,t])=>Rs(t))),ja((([e,t,n])=>ps(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),Aa(),ja((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),Da(Zs,cs)),Ks=Xa((([{log:e}])=>{const t=Ua(!1),n=Za(La(t,Ma((e=>e)),Aa()));return Oa(t,(t=>{t&&Ca(e)("props updated",{},ts.DEBUG)})),{didMount:n,propsReady:t}}),Da(rs),{singleton:!0}),Qs=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function el(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Qs)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const tl=Xa((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:u,viewportHeight:d},{log:f}])=>{const h=Ja(),p=Ja(),g=Ua(0);let m=null,v=null,y=null;function b(){m&&(m(),m=null),y&&(y(),y=null),v&&(clearTimeout(v),v=null),ka(l,!1)}return za(La(h,Ya(n,d,r,g,s,a,f),Ya(e,i,o),ja((([[e,n,r,o,i,a,s,c],d,f,g])=>{const S=el(e),{align:x,behavior:w,offset:$}=S,F=o-1,B=Ls(S,n,F);let I=js(B,n.offsetTree,d)+a;"end"===x?(I+=f+ps(n.sizeTree,B)[1]-r+g,B===F&&(I+=s)):"center"===x?I+=(f+ps(n.sizeTree,B)[1]-r+g)/2:I-=i,$&&(I+=$);const T=t=>{b(),t?(c("retrying to scroll to",{location:e},ts.DEBUG),ka(h,e)):(ka(p,!0),c("list did not change, scroll successful",{},ts.DEBUG))};if(b(),"smooth"===w){let e=!1;y=Oa(t,(t=>{e=e||t})),m=Ea(u,(()=>{T(e)}))}else m=Ea(La(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),T);return v=setTimeout((()=>{b()}),1200),ka(l,!0),c("scrolling from index to",{behavior:w,index:B,top:I},ts.DEBUG),{behavior:w,top:I}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),Da(Zs,cs,rs),{singleton:!0});function nl(e,t){0==e?t():requestAnimationFrame((()=>{nl(e-1,t)}))}function rl(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const ol=Xa((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=Ua(!0),l=Ua(0),c=Ua(!0);return za(La(a,Ya(l),Ma((([e,t])=>!!t)),Pa(!1)),s),za(La(a,Ya(l),Ma((([e,t])=>!!t)),Pa(!1)),c),Oa(La(Ka(t,a),Ya(s,n,e,c),Ma((([[,e],t,{sizeTree:n},r,o])=>e&&(!fs(n)||Fa(r))&&!t&&!o)),Ya(l)),(([,e])=>{Ea(o,(()=>{ka(c,!0)})),nl(4,(()=>{Ea(r,(()=>{ka(s,!0)})),ka(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Da(Zs,cs,tl,Ks),{singleton:!0});function il(e,t){return Math.abs(e-t)<1.01}const al="up",sl="down",ll={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},cl=Xa((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:o,viewportHeight:i}])=>{const a=Ua(!1),s=Ua(!0),l=Ja(),c=Ja(),u=Ua(4),d=Ua(0),f=Ga(La(es(La(Qa(o),Na(1),Pa(!0)),La(Qa(o),Na(1),Pa(!1),_a(100))),Aa()),!1),h=Ga(La(es(La(n,Pa(!0)),La(n,Pa(!1),_a(200))),Aa()),!1);za(La(Ka(Qa(o),Qa(d)),ja((([e,t])=>e<=t)),Aa()),s),za(La(s,Va(50)),c);const p=Za(La(Ka(r,Qa(i),Qa(t),Qa(e),Qa(u)),Wa(((e,[{scrollHeight:t,scrollTop:n},r,o,i,a])=>{const s={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),ll),Aa(((e,t)=>e&&e.atBottom===t.atBottom)))),g=Ga(La(r,Wa(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(il(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const o=t-(n+r)<1;return e.scrollTop!==n&&o?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Ma((e=>e.changed)),ja((e=>e.jump))),0);za(La(p,ja((e=>e.atBottom))),a),za(La(a,Va(50)),l);const m=Ua(sl);za(La(r,ja((({scrollTop:e})=>e)),Aa(),Wa(((e,t)=>Ca(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?al:sl,prevScrollTop:t}),{direction:sl,prevScrollTop:0}),ja((e=>e.direction))),m),za(La(r,Va(50),Pa("none")),m);const v=Ua(0);return za(La(f,Ma((e=>!e)),Pa(0)),v),za(La(o,Va(100),Ya(f),Ma((([e,t])=>!!t)),Wa((([e,t],[n])=>[t,n]),[0,0]),ja((([e,t])=>t-e))),v),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:u,atTopStateChange:c,atTopThreshold:d,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:v}}),Da(cs)),ul="top",dl="bottom",fl="none";function hl(e,t,n){return"number"==typeof e?n===al&&t===ul||n===sl&&t===dl?e:0:n===al?t===ul?e.main:e.reverse:t===dl?e.main:e.reverse}function pl(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const gl=Xa((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:o}])=>{const i=Ja(),a=Ua(0),s=Ua(0),l=Ua(0);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:Ga(La(Ka(Qa(r),Qa(o),Qa(n),Qa(i,Hs),Qa(l),Qa(a),Qa(t),Qa(e),Qa(s)),ja((([e,t,n,[r,o],i,a,s,l,c])=>{const u=e-l,d=a+s,f=Math.max(n-u,0);let h=fl;const p=pl(c,ul),g=pl(c,dl);return r-=l,o+=n+s,(r+=n+s)>e+d-p&&(h=al),(o-=l)<e-f+t+g&&(h=sl),h!==fl?[Math.max(u-n-hl(i,ul,h)-p,0),u-f-s+t+hl(i,dl,h)+g]:null})),Ma((e=>null!=e)),Aa(Hs)),[0,0])}}),Da(cs),{singleton:!0});const ml={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function vl(e,t,n,r,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let c=0,u=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];u=t.offset+t.size}const d=n-a,f=c,h=s+d*l+(d-1)*r-u;return{bottom:u,firstItemIndex:i,items:bl(e,o,i),offsetBottom:h,offsetTop:c,top:f,topItems:bl(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function yl(e,t,n,r,o,i){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=rl(t,s);return vl(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,n,r)}function bl(e,t,n){if(0===e.length)return[];if(!Rs(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,o=e[e.length-1].index,i=[],a=vs(t.groupOffsetTree,r,o);let s,l=0;for(const r of e){let e;(!s||s.end<r.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=r.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:r.index-(l+1)+n},i.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return i}const Sl=Xa((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:u},{topListHeight:d},f,{didMount:h},{recalcInProgress:p}])=>{const g=Ua([]),m=Ua(0),v=Ja();za(i.topItemsIndexes,g);const y=Ga(La(Ka(h,p,Qa(l,Hs),Qa(o),Qa(r),Qa(c),u,Qa(g),Qa(t),Qa(n),e),Ma((([e,t,,n,,,,,,,r])=>{const o=r&&r.length!==n;return e&&!t&&!o})),ja((([,,[e,t],n,r,o,i,a,s,l,c])=>{const u=r,{offsetTree:d,sizeTree:f}=u,h=Ca(m);if(0===n)return{...ml,totalCount:n};if(0===e&&0===t)return 0===h?{...ml,totalCount:n}:yl(h,o,r,s,l,c||[]);if(fs(f))return h>0?null:vl(function(e,t,n){if(Rs(t)){const r=Ps(e,t);return[{index:ps(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(rl(o,n),u,c),[],n,l,u,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of vs(f,e,t)){const o=r.value,i=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:n,size:o}),n+=o}}if(!i)return vl([],p,n,l,u,s);const g=a.length>0?a[a.length-1]+1:0,v=Ws(d,e,t,g);if(0===v.length)return null;const y=n-1;return vl(Ia([],(n=>{for(const r of v){const o=r.value;let i=o.offset,a=r.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-r.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const u=Math.min(r.end,y);for(let e=a;e<=u&&!(i>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:i,size:s}),i+=s+l}})),p,n,l,u,s)})),Ma((e=>null!==e)),Aa()),ml);za(La(e,Ma(Fa),ja((e=>null==e?void 0:e.length))),o),za(La(y,ja((e=>e.topListHeight))),d),za(d,s),za(La(y,ja((e=>[e.top,e.bottom]))),a),za(La(y,ja((e=>e.items))),v);const b=Za(La(y,Ma((({items:e})=>e.length>0)),Ya(o,e),Ma((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),ja((([,e,t])=>[e-1,t])),Aa(Hs),ja((([e])=>e)))),S=Za(La(y,Va(200),Ma((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),ja((({items:e})=>e[0].index)),Aa())),x=Za(La(y,Ma((({items:e})=>e.length>0)),ja((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),Aa(ks)));return{endReached:b,initialItemCount:m,itemsRendered:v,listState:y,rangeChanged:x,startReached:S,topItemsIndexes:g,...f}}),Da(Zs,qs,gl,ol,tl,cl,Ks,Cs),{singleton:!0}),xl=Xa((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:o}])=>{const i=Ja(),a=Ga(La(Ka(n,e,r,t,o),ja((([e,t,n,r,o])=>e+t+n+r+o.offsetBottom+o.bottom))),0);return za(Qa(a),i),{totalListHeight:a,totalListHeightChanged:i}}),Da(cs,Sl),{singleton:!0}),wl=Xa((([{viewportHeight:e},{totalListHeight:t}])=>{const n=Ua(!1);return{alignToBottom:n,paddingTopAddition:Ga(La(Ka(n,e,t),Ma((([e])=>e)),ja((([,e,t])=>Math.max(0,e-t))),Va(0),Aa()),0)}}),Da(cs,xl),{singleton:!0});function $l(e){return!!e&&("smooth"===e?"smooth":"auto")}const Fl=Xa((([{listRefresh:e,totalCount:t},{atBottomState:n,isAtBottom:r},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const u=Ua(!1),d=Ja();let f=null;function h(e){ka(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=Ea(n,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(Ca(l)("scrolling to bottom due to increased size",{},ts.DEBUG),h("auto"))}));setTimeout(t,100)}return Oa(La(Ka(La(Qa(t),Na(1)),a),Ya(Qa(u),r,i,c),ja((([[e,t],n,r,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?$l(e(t)):t&&$l(e))(n,r||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),Ma((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:n})=>{f&&(f(),f=null),f=Ea(e,(()=>{Ca(l)("following output to ",{totalCount:n},ts.DEBUG),h(t),f=null}))})),Oa(La(Ka(Qa(u),t,s),Ma((([e,,t])=>e&&t)),Wa((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Ma((({refreshed:e})=>e)),Ya(u,t)),(([,e])=>{Ca(i)&&p(!1!==e)})),Oa(d,(()=>{p(!1!==Ca(u))})),Oa(Ka(Qa(u),n),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:d,followOutput:u}}),Da(Zs,cl,tl,ol,Ks,rs,cs)),Bl=Xa((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(za(La(s,Ya(i),Ma((([,e])=>0!==e)),Ya(o,r,t,n,e),ja((([[,e],t,n,r,o,i=[]])=>yl(e,t,n,r,o,i)))),a),{})),Da(Zs,ol,Sl,Ks),{singleton:!0}),Il=Xa((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=Ua(0);return Oa(La(e,Ya(r),Ma((([,e])=>0!==e)),ja((([,e])=>({top:e})))),(e=>{Ea(La(n,Na(1),Ma((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{ka(t,e)}))}))})),{initialScrollTop:r}}),Da(Ks,cs,Sl),{singleton:!0}),Tl=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=n?n:"start",behavior:r}:e>i?{...o,align:null!=n?n:"end",behavior:r}:null,Dl=Xa((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const u=Ja();return za(La(u,Ya(t,l,n,i,o,r,s),Ya(e),ja((([[e,t,n,r,o,i,s,l],c])=>{const{align:u,behavior:d,calculateViewLocation:f=Tl,done:h,...p}=e,g=Ls(e,t,r-1),m=js(g,t.offsetTree,c)+o+i,v=f({itemBottom:m+ps(t.sizeTree,g)[1],itemTop:m,locationParams:{align:u,behavior:d,...p},viewportBottom:l+n-s,viewportTop:l+i});return v?h&&Ea(La(a,Ma((e=>!e)),Na(Ca(a)?1:2)),h):h&&h(),v})),Ma((e=>null!==e))),c),{scrollIntoView:u}}),Da(Zs,cs,tl,Sl,rs),{singleton:!0}),Ol=Xa((([{scrollVelocity:e}])=>{const t=Ua(!1),n=Ja(),r=Ua(!1);return za(La(e,Ya(r,t,n),Ma((([e,t])=>!!t)),ja((([e,t,n,r])=>{const{enter:o,exit:i}=t;if(n){if(i(e,r))return!1}else if(o(e,r))return!0;return n})),Aa()),t),Oa(La(Ka(t,e,n),Ya(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),Da(cl),{singleton:!0}),kl=Xa((([{scrollContainerState:e,scrollTo:t}])=>{const n=Ja(),r=Ja(),o=Ja(),i=Ua(!1),a=Ua(void 0);return za(La(Ka(n,r),ja((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),za(La(t,Ya(r),ja((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:n,windowScrollTo:o,windowViewportRect:r}}),Da(cs)),Hl=Xa((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=Ja(),u=Ua(void 0),d=Ua(null),f=Ua(null);return za(s,d),za(l,f),Oa(La(c,Ya(t,r,a,d,f,n)),(([e,t,n,r,o,i,a])=>{const s=function(e){return bs(e).map((({k:e,v:t},n,r)=>{const o=r[n+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==o&&null!==i&&(n=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:n-=a})})),za(La(u,Ma(Fa),ja(Cl)),o),za(La(i,Ya(u),Ma((([,e])=>void 0!==e)),Aa(),ja((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:u}}),Da(Zs,cs,ol,Ks,kl));function Cl(e){return{align:"start",index:0,offset:e.scrollTop}}const zl=Xa((([{topItemsIndexes:e}])=>{const t=Ua(0);return za(La(t,Ma((e=>e>=0)),ja((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Da(Sl));function El(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const _l=El((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Rl=Xa((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:u,shiftWithOffset:d,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=Za(La(l,Ya(a),Wa((([,e,t,n],[{bottom:r,items:o,offsetBottom:i,totalCount:a},s])=>{const l=r+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=l-n,0!==c&&(c+=s))),[c,o,a,l]}),[0,[],0,0]),Ma((([e])=>0!==e)),Ya(r,s,n,o,h,p),Ma((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===al)),ja((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},ts.DEBUG),e)))));function m(n){n>0?(ka(t,{behavior:"auto",top:-n}),ka(e,0)):(ka(e,0),ka(t,{behavior:"auto",top:-n}))}return Oa(La(g,Ya(e,i)),(([t,n,r])=>{r&&_l()?ka(e,n-t):m(-t)})),Oa(La(Ka(Ga(i,!1),e,p),Ma((([e,t,n])=>!e&&!n&&0!==t)),ja((([e,t])=>t)),Va(1)),m),za(La(d,ja((e=>({top:-e})))),t),Oa(La(c,Ya(f,u),ja((([e,{groupIndices:t,lastSize:n,sizeTree:r},o])=>{function i(e){return e*(n+o)}if(0===t.length)return i(e);{let n=0;const o=hs(r,0);let a=0,s=0;for(;a<e;){a++,n+=o;let r=t.length===s+1?1/0:t[s+1]-t[s]-1;a+r>e&&(n-=o,r=e-a+1),a+=r,n+=i(r),s++}return n}}))),(n=>{ka(e,n),requestAnimationFrame((()=>{ka(t,{top:n}),requestAnimationFrame((()=>{ka(e,0),ka(p,!1)}))}))})),{deviation:e}}),Da(cs,cl,Sl,Zs,rs,Cs)),Al=Xa((([e,t,n,r,o,i,a,s,l,c])=>({...e,...t,...n,...r,...o,...i,...a,...s,...l,...c})),Da(gl,Bl,Ks,Ol,xl,Il,wl,kl,Dl,rs)),Ml=Xa((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:u,trackItemSizes:d},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,v,{listState:y,topItemsIndexes:b,...S},{scrollToIndex:x},w,{topItemCount:$},{groupCounts:F},B])=>(za(S.rangeChanged,B.scrollSeekRangeChanged),za(La(B.windowViewportRect,ja((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:o,groupCounts:F,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:s,topItemCount:$,topItemsIndexes:b,totalCount:u,...v,groupIndices:i,itemSize:a,listState:y,scrollToIndex:x,statefulTotalCount:c,trackItemSizes:d,...S,...B,...g,sizes:l,...m})),Da(Zs,ol,cs,Hl,Fl,Sl,tl,Rl,zl,qs,Al));function jl(e,t){const n={},r={};let o=0;const i=e.length;for(;o<i;)r[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const Pl=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Ll(e,n,r){const i=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),s=Object.keys(n.methods||{}),l=Object.keys(n.events||{}),c=o.createContext({});function u(e,t){e.propsReady&&ka(e.propsReady,!1);for(const r of i){ka(e[n.required[r]],t[r])}for(const r of a)if(r in t){ka(e[n.optional[r]],t[r])}e.propsReady&&ka(e.propsReady,!0)}function d(e){return l.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(o,i){switch(o){case ma:return i?n===i?void 0:(r(),n=i,t=Oa(e,i),t):(r(),Ba);case va:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const f=o.forwardRef(((f,h)=>{const{children:p,...g}=f,[m]=o.useState((()=>Ia(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(r.map((e=>n(e))));return i&&t.set(o,a),a};return n(e)}(e),(e=>{u(e,g)})))),[v]=o.useState(wa(d,m));Pl((()=>{for(const e of l)e in g&&Oa(v[e],g[e]);return()=>{Object.values(v).map(Ha)}}),[g,v,m]),Pl((()=>{u(m,g)})),o.useImperativeHandle(h,ba(function(e){return s.reduce(((t,r)=>(t[r]=t=>{ka(e[n.methods[r]],t)},t)),{})}(m)));const y=r;return t(c.Provider,{value:m,children:r?t(y,{...jl([...i,...a,...l],g),children:p}):p})}));return{Component:f,useEmitter:(e,t)=>{const n=o.useContext(c)[e];Pl((()=>Oa(n,t)),[t,n])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],n=o.useCallback((e=>Oa(t,e)),[t]);return o.useSyncExternalStore(n,(()=>Ca(t)),(()=>Ca(t)))}:e=>{const t=o.useContext(c)[e],[n,r]=o.useState(wa(Ca,t));return Pl((()=>Oa(t,(e=>{e!==n&&r(ba(e))}))),[t,n]),n},usePublisher:e=>o.useCallback($a(ka,o.useContext(c)[e]),[e])}}const Wl=o.createContext(void 0),Nl=o.createContext(void 0),Vl=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Yl(e,t,n,r=Ba,i,a){const s=o.useRef(null),l=o.useRef(null),c=o.useRef(null),u=o.useCallback((n=>{const r=n.target,o=r===window||r===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:r.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:r.scrollTop,s=a?o?document.documentElement.scrollWidth:r.scrollWidth:o?document.documentElement.scrollHeight:r.scrollHeight,u=a?o?window.innerWidth:r.offsetWidth:o?window.innerHeight:r.offsetHeight,d=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:u})};n.suppressFlushSync?d():k.flushSync(d),null!==l.current&&(i===l.current||i<=0||i===s-u)&&(l.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return r(i||s.current),u({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",u,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",u)}}),[s,u,n,r,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(n){const r=s.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const o="smooth"===n.behavior;let i,u,d;r===window?(u=Math.max(_s(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,d=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(u=r[a?"scrollWidth":"scrollHeight"],i=_s(r,a?"width":"height"),d=r[a?"scrollLeft":"scrollTop"]);const f=u-i;if(n.top=Math.ceil(Math.max(Math.min(f,n.top),0)),il(i,u)||n.top===d)return e({scrollHeight:u,scrollTop:d,viewportHeight:i}),void(o&&t(!0));o?(l.current=n.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const Ul="-webkit-sticky",Gl="sticky",Jl=El((()=>{if(typeof document>"u")return Gl;const e=document.createElement("div");return e.style.position=Ul,e.style.position===Ul?Ul:Gl}));function Zl(e){return e}const Xl=Xa((()=>{const e=Ua((e=>`Item ${e}`)),t=Ua(null),n=Ua((e=>`Group ${e}`)),r=Ua({}),o=Ua(Zl),i=Ua("div"),a=Ua(Ba),s=(e,t=null)=>Ga(La(r,ja((t=>t[e])),Aa()),t);return{components:r,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:n,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),ql=Xa((([e,t])=>({...e,...t})),Da(Ml,Xl)),Kl=({height:e})=>t("div",{style:{height:e}}),Ql={overflowAnchor:"none",position:Jl(),zIndex:1},ec={overflowAnchor:"none"},tc={...ec,display:"inline-block",height:"100%"},nc=o.memo((function({showTopList:e=!1}){const n=bc("listState"),r=Sc("sizeRanges"),i=bc("useWindowScroll"),a=bc("customScrollParent"),s=Sc("windowScrollContainerState"),l=Sc("scrollContainerState"),c=a||i?s:l,u=bc("itemContent"),d=bc("context"),f=bc("groupContent"),h=bc("trackItemSizes"),p=bc("itemSize"),m=bc("log"),v=Sc("gap"),y=bc("horizontalDirection"),{callbackRef:b}=as(r,p,h,e?Ba:c,m,v,a,y,bc("skipAnimationFrameInResizeObserver")),[S,x]=o.useState(0);yc("deviation",(e=>{S!==e&&x(e)}));const w=bc("EmptyPlaceholder"),$=bc("ScrollSeekPlaceholder")||Kl,F=bc("ListComponent"),B=bc("ItemComponent"),I=bc("GroupComponent"),T=bc("computeItemKey"),D=bc("isSeeking"),O=bc("groupIndices").length>0,k=bc("alignToBottom"),H=bc("initialItemFinalLocationReached"),C=e?{}:{boxSizing:"border-box",...y?{display:"inline-block",height:"100%",marginLeft:0!==S?S:k?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==S?S:k?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...H?{}:{visibility:"hidden"}};return!e&&0===n.totalCount&&w?t(w,{...sc(w,d)}):t(F,{...sc(F,d),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:b,style:C,children:(e?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=T(t+n.firstItemIndex,e.data,d);return D?g($,{...sc($,d),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?g(I,{...sc(I,d),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:Ql},f(e.index,d)):g(B,{...sc(B,d),...lc(B,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:y?tc:ec},O?u(e.index,e.groupIndex,e.data,d):u(e.index,e.data,d))}))})})),rc={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},oc={outline:"none",overflowX:"auto",position:"relative"},ic=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),ac={position:Jl(),top:0,width:"100%",zIndex:1};function sc(e,t){if("string"!=typeof e)return{context:t}}function lc(e,t){return{item:"string"==typeof e?void 0:t}}const cc=o.memo((function(){const e=bc("HeaderComponent"),n=Sc("headerHeight"),r=bc("HeaderFooterTag"),i=os(o.useMemo((()=>e=>{n(_s(e,"height"))}),[n]),!0,bc("skipAnimationFrameInResizeObserver")),a=bc("context");return e?t(r,{ref:i,children:t(e,{...sc(e,a)})}):null})),uc=o.memo((function(){const e=bc("FooterComponent"),n=Sc("footerHeight"),r=bc("HeaderFooterTag"),i=os(o.useMemo((()=>e=>{n(_s(e,"height"))}),[n]),!0,bc("skipAnimationFrameInResizeObserver")),a=bc("context");return e?t(r,{ref:i,children:t(e,{...sc(e,a)})}):null}));function dc({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:o,style:i,...a}){const s=r("scrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),u=n("scrollerRef"),d=n("context"),f=n("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=Yl(s,c,l,u,void 0,f);return e("scrollTo",g),e("scrollBy",h),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?oc:rc,...i},tabIndex:0,...a,...sc(l,d),children:o})}))}function fc({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:o,style:i,...a}){const s=r("windowScrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),u=n("totalListHeight"),d=n("deviation"),f=n("customScrollParent"),h=n("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=Yl(s,c,l,Ba,f);return Vl((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),e("windowScrollTo",m),e("scrollBy",p),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==u?{height:u+d}:{}},...a,...sc(l,h),children:o})}))}const hc=({children:e})=>{const n=o.useContext(Wl),r=Sc("viewportHeight"),i=Sc("fixedItemHeight"),a=bc("alignToBottom"),s=bc("horizontalDirection"),l=os(o.useMemo((()=>xa(r,(e=>_s(e,s?"width":"height")))),[r,s]),!0,bc("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{n&&(r(n.viewportHeight),i(n.itemHeight))}),[n,r,i]),t("div",{"data-viewport-type":"element",ref:l,style:ic(a),children:e})},pc=({children:e})=>{const n=o.useContext(Wl),r=Sc("windowViewportRect"),i=Sc("fixedItemHeight"),a=bc("customScrollParent"),s=ls(r,a,bc("skipAnimationFrameInResizeObserver")),l=bc("alignToBottom");return o.useEffect((()=>{n&&(i(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,i]),t("div",{"data-viewport-type":"window",ref:s,style:ic(l),children:e})},gc=({children:e})=>{const n=bc("TopItemListComponent")||"div",r=bc("headerHeight"),o={...ac,marginTop:`${r}px`},i=bc("context");return t(n,{style:o,...sc(n,i),children:e})},mc=o.memo((function(n){const r=bc("useWindowScroll"),o=bc("topItemsIndexes").length>0,i=bc("customScrollParent"),a=bc("context"),s=i||r?wc:xc,l=i||r?pc:hc;return e(s,{...n,...sc(s,a),children:[o&&t(gc,{children:t(nc,{showTopList:!0})}),e(l,{children:[t(cc,{}),t(nc,{}),t(uc,{})]})]})})),{Component:vc,useEmitter:yc,useEmitterValue:bc,usePublisher:Sc}=Ll(ql,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},mc),xc=dc({useEmitter:yc,useEmitterValue:bc,usePublisher:Sc}),wc=fc({useEmitter:yc,useEmitterValue:bc,usePublisher:Sc}),$c=vc,Fc={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Bc={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Ic,floor:Tc,max:Dc,min:Oc,round:kc}=Math;function Hc(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function Cc(e,t){return e&&e.width===t.width&&e.height===t.height}function zc(e,t){return e&&e.column===t.column&&e.row===t.row}const Ec=Xa((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:u,viewportHeight:d},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:v,windowScrollContainerState:y,windowScrollTo:b,windowViewportRect:S},x])=>{const w=Ua(0),$=Ua(0),F=Ua(Fc),B=Ua({height:0,width:0}),I=Ua({height:0,width:0}),T=Ja(),D=Ja(),O=Ua(0),k=Ua(null),H=Ua({column:0,row:0}),C=Ja(),z=Ja(),E=Ua(!1),_=Ua(0),R=Ua(!0),A=Ua(!1),M=Ua(!1);Oa(La(p,Ya(_),Ma((([e,t])=>!!t))),(()=>{ka(R,!1)})),Oa(La(Ka(p,R,I,B,_,A),Ma((([e,t,n,r,,o])=>e&&!t&&0!==n.height&&0!==r.height&&!o))),(([,,,,e])=>{ka(A,!0),nl(1,(()=>{ka(T,e)})),Ea(La(c),(()=>{ka(t,[0,0]),ka(R,!0)}))})),za(La(z,Ma((e=>null!=e&&e.scrollTop>0)),Pa(0)),$),Oa(La(p,Ya(z),Ma((([,e])=>null!=e))),(([,e])=>{e&&(ka(B,e.viewport),ka(I,e.item),ka(H,e.gap),e.scrollTop>0&&(ka(E,!0),Ea(La(c,Na(1)),(e=>{ka(E,!1)})),ka(l,{top:e.scrollTop})))})),za(La(B,ja((({height:e})=>e))),d),za(La(Ka(Qa(B,Cc),Qa(I,Cc),Qa(H,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Qa(c)),ja((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),C),za(La(Ka(Qa(w),r,Qa(H,zc),Qa(I,Cc),Qa(B,Cc),Qa(k),Qa($),Qa(E),Qa(R),Qa(_)),Ma((([,,,,,,,e])=>!e)),ja((([e,[t,n],r,o,i,a,s,,l,c])=>{const{column:u,row:d}=r,{height:f,width:h}=o,{width:p}=i;if(0===s&&(0===e||0===p))return Fc;if(0===h){const t=rl(c,e);return function(e){return{...Bc,items:e}}(Hc(t,t+Math.max(s-1,0),a))}const g=_c(p,h,u);let m,v;l?0===t&&0===n&&s>0?(m=0,v=s-1):(m=g*Tc((t+d)/(f+d)),v=g*Ic((n+d)/(f+d))-1,v=Oc(e-1,Dc(v,g-1)),m=Oc(v,Dc(0,m))):(m=0,v=-1);const y=Hc(m,v,a),{bottom:b,top:S}=Rc(i,r,o,y),x=Ic(e/g);return{bottom:b,itemHeight:f,items:y,itemWidth:h,offsetBottom:x*f+(x-1)*d-b,offsetTop:S,top:S}}))),F),za(La(k,Ma((e=>null!==e)),ja((e=>e.length))),w),za(La(Ka(B,I,F,H),Ma((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),ja((([e,t,{items:n},r])=>{const{bottom:o,top:i}=Rc(e,r,t,n);return[i,o]})),Aa(Hs)),t);const j=Ua(!1);za(La(c,Ya(j),ja((([e,t])=>t||0!==e))),j);const P=Za(La(Ka(F,w),Ma((([{items:e}])=>e.length>0)),Ya(j),Ma((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),ja((([[,e]])=>e-1)),Aa())),L=Za(La(Qa(F),Ma((({items:e})=>e.length>0&&0===e[0].index)),Pa(0),Aa())),W=Za(La(Qa(F),Ya(E),Ma((([{items:e},t])=>e.length>0&&!t)),ja((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Aa(ks),Va(0)));za(W,h.scrollSeekRangeChanged),za(La(T,Ya(B,I,w,H),ja((([e,t,n,r,o])=>{const i=el(e),{align:a,behavior:s,offset:l}=i;let c=i.index;"LAST"===c&&(c=r-1),c=Dc(0,c,Oc(r-1,c));let u=Ac(t,o,n,c);return"end"===a?u=kc(u-t.height+n.height):"center"===a&&(u=kc(u-t.height/2+n.height/2)),l&&(u+=l),{behavior:s,top:u}}))),l);const N=Ga(La(F,ja((e=>e.offsetBottom+e.bottom))),0);return za(La(S,ja((e=>({height:e.visibleHeight,width:e.visibleWidth})))),B),{customScrollParent:m,data:k,deviation:O,footerHeight:o,gap:H,headerHeight:i,increaseViewportBy:e,initialItemCount:$,itemDimensions:I,overscan:n,restoreStateFrom:z,scrollBy:a,scrollContainerState:s,scrollHeight:D,scrollTo:l,scrollToIndex:T,scrollTop:c,smoothScrollTargetReached:u,totalCount:w,useWindowScroll:v,viewportDimensions:B,windowScrollContainerState:y,windowScrollTo:b,windowViewportRect:S,...h,gridState:F,horizontalDirection:M,initialTopMostItemIndex:_,totalListHeight:N,...f,endReached:P,propsReady:g,rangeChanged:W,startReached:L,stateChanged:C,stateRestoreInProgress:E,...x}}),Da(gl,cs,cl,Ol,Ks,kl,rs));function _c(e,t,n){return Dc(1,Tc((e+n)/(Tc(t)+n)))}function Rc(e,t,n,r){const{height:o}=n;if(void 0===o||0===r.length)return{bottom:0,top:0};const i=Ac(e,t,n,r[0].index);return{bottom:Ac(e,t,n,r[r.length-1].index)+o,top:i}}function Ac(e,t,n,r){const o=_c(e.width,n.width,t.column),i=Tc(r/o),a=i*n.height+Dc(0,i-1)*t.row;return a>0?a+t.row:a}const Mc=Xa((()=>{const e=Ua((e=>`Item ${e}`)),t=Ua({}),n=Ua(null),r=Ua("virtuoso-grid-item"),o=Ua("virtuoso-grid-list"),i=Ua(Zl),a=Ua("div"),s=Ua(Ba),l=(e,n=null)=>Ga(La(t,ja((t=>t[e])),Aa()),n),c=Ua(!1),u=Ua(!1);return za(Qa(u),c),{components:t,computeItemKey:i,context:n,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:u,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),jc=Xa((([e,t])=>({...e,...t})),Da(Ec,Mc)),Pc=o.memo((function(){const e=Jc("gridState"),n=Jc("listClassName"),r=Jc("itemClassName"),i=Jc("itemContent"),a=Jc("computeItemKey"),s=Jc("isSeeking"),l=Zc("scrollHeight"),c=Jc("ItemComponent"),u=Jc("ListComponent"),d=Jc("ScrollSeekPlaceholder"),f=Jc("context"),h=Zc("itemDimensions"),p=Zc("gap"),m=Jc("log"),v=Jc("stateRestoreInProgress"),y=Zc("reportReadyState"),b=os(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();h({height:e,width:t})}p({column:Kc("column-gap",getComputedStyle(e).columnGap,m),row:Kc("row-gap",getComputedStyle(e).rowGap,m)})}),[l,h,p,m]),!0,!1);return Vl((()=>{e.itemHeight>0&&e.itemWidth>0&&y(!0)}),[e]),v?null:t(u,{className:n,ref:b,...sc(u,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((n=>{const o=a(n.index,n.data,f);return s?t(d,{...sc(d,f),height:e.itemHeight,index:n.index,width:e.itemWidth},o):g(c,{...sc(c,f),className:r,"data-index":n.index,key:o},i(n.index,n.data,f))}))})})),Lc=o.memo((function(){const e=Jc("HeaderComponent"),n=Zc("headerHeight"),r=Jc("headerFooterTag"),i=os(o.useMemo((()=>e=>{n(_s(e,"height"))}),[n]),!0,!1),a=Jc("context");return e?t(r,{ref:i,children:t(e,{...sc(e,a)})}):null})),Wc=o.memo((function(){const e=Jc("FooterComponent"),n=Zc("footerHeight"),r=Jc("headerFooterTag"),i=os(o.useMemo((()=>e=>{n(_s(e,"height"))}),[n]),!0,!1),a=Jc("context");return e?t(r,{ref:i,children:t(e,{...sc(e,a)})}):null})),Nc=({children:e})=>{const n=o.useContext(Nl),r=Zc("itemDimensions"),i=Zc("viewportDimensions"),a=os(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{n&&(i({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,i,r]),t("div",{ref:a,style:ic(!1),children:e})},Vc=({children:e})=>{const n=o.useContext(Nl),r=Zc("windowViewportRect"),i=Zc("itemDimensions"),a=Jc("customScrollParent"),s=ls(r,a,!1);return o.useEffect((()=>{n&&(i({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,i]),t("div",{ref:s,style:ic(!1),children:e})},Yc=o.memo((function({...n}){const r=Jc("useWindowScroll"),o=Jc("customScrollParent"),i=o||r?qc:Xc,a=o||r?Vc:Nc,s=Jc("context");return t(i,{...n,...sc(i,s),children:e(a,{children:[t(Lc,{}),t(Pc,{}),t(Wc,{})]})})})),{Component:Uc,useEmitter:Gc,useEmitterValue:Jc,usePublisher:Zc}=Ll(jc,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Yc),Xc=dc({useEmitter:Gc,useEmitterValue:Jc,usePublisher:Zc}),qc=fc({useEmitter:Gc,useEmitterValue:Jc,usePublisher:Zc});function Kc(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,ts.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Qc={collections:{base:{InputBoxShadow:y`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},eu=e=>t=>{var n;const r=t.theme,o=xo(Qc,r[wo.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?So(o,e,r.options.designToken):So(o,e)},tu={InputBoxShadow:eu("InputBoxShadow"),InputErrorBoxShadow:eu("InputErrorBoxShadow"),ElevationBoxShadow:eu("ElevationBoxShadow"),Table:{Header:eu("Table.Header"),Cell:{Primary:eu("Table.Cell.Primary"),Secondary:eu("Table.Cell.Secondary"),Selected:eu("Table.Cell.Selected"),Hover:eu("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:eu("Button.Danger.BackgroundColor"),Hover:eu("Button.Danger.Hover"),Primary:eu("Button.Danger.Primary"),Border:eu("Button.Danger.Border")}}},nu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ru=e=>Object.keys(nu).reduce(((t,n)=>{const r=nu[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),ou=ru("max-width"),iu=(ru("min-width"),nu),au=v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,su=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,lu=v.div`
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
    animation: ${su} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,cu=v(lu)`
    animation-delay: -0.45s;
`,uu=v(lu)`
    animation-delay: -0.3s;
`,du=v(lu)`
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
                        ${e.$buttonIsDanger?tu.Button.Danger.Border:Ro.Primary};

                    color: ${e.$buttonIsDanger?tu.Button.Danger.Primary:Ro.Primary};
                `;case"light":return y`
                    background-color: ${Ro.Neutral[8]};
                    border: 1px solid ${Ro.Neutral[5]};

                    color: ${e.$buttonIsDanger?tu.Button.Danger.Primary:Ro.Primary};
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

                    color: ${e.$buttonIsDanger?tu.Button.Danger.Primary:Ro.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?tu.Button.Danger.Hover:Ro.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?tu.Button.Danger.BackgroundColor:Ro.Primary};
                    border: 1px solid transparent;

                    ${ou.mobileL} {
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

                    ${ou.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${Ho("H4","semibold")}

                    ${ou.mobileS} {
                        height: auto;
                    }
                `}
`;const fu=v((({color:n,className:r,size:o=18})=>e(au,Object.assign({className:r,$size:o,$color:n,"data-testid":"component-loading-spinner"},{children:[t(lu,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(cu,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(uu,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(du,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?tu.Button.Danger.Primary:Ro.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ro.Neutral[3](e);break;default:t=Ro.Neutral[8](e)}return y`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var hu={exports:{}};hu.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=m;var x="$isDayjsObject",w=function(e){return e instanceof I||!(!e||!e[x])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();S[i]&&(o=i),n&&(S[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;S[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},F=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new I(n)},B=y;B.l=$,B.i=w,B.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var I=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return B},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),h=function(e,t){var o=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},p=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case l:var b=this.$locale().weekStart||0,S=(g<b?g+7:g)-b;return h(r?v-S:v+(6-S),m);case s:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case o:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,l=B.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[B.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=B.p(u),g=function(e){var t=F(h);return B.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,v=this.$d.getTime()+r*m;return B.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=B.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return B.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return s+1;case"MM":return B.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return B.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return B.s(a,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,g=this,m=B.p(f),v=F(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,S=function(){return B.m(g,v)};switch(m){case d:p=S()/12;break;case c:p=S();break;case u:p=S()/3;break;case l:p=(b-y)/6048e5;break;case s:p=(b-y)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:B.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return S[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return B.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),T=I.prototype;return F.prototype=T,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,I,F),e.$i=!0),F},F.locale=$,F.isDayjs=w,F.unix=function(e){return F(1e3*e)},F.en=S[b],F.Ls=S,F.p={},F}();var pu=J(hu.exports),gu={exports:{}};gu.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var v=s||0,y=l||0,b=c||0,S=u||0;return d?new Date(Date.UTC(g,m,p,v,y,b,S+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,v,y,b,S)):new Date(g,m,p,v,y,b,S)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var mu=J(gu.exports),vu={exports:{}};vu.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var yu=J(vu.exports),bu={exports:{}};bu.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Su=J(bu.exports),xu={exports:{}};xu.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var wu,$u,Fu,Bu=J(xu.exports),Iu={exports:{}},Tu=J(Iu.exports=(wu={year:0,month:1,day:2,hour:3,minute:4,second:5},$u={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=$u[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),$u[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=wu[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));pu.extend(yu),pu.extend(Bu),pu.extend(Su),pu.extend(mu),pu.extend(Tu),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=pu(t).startOf("week");return Du(n).map((e=>Ou(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ou(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(pu(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+pu(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=pu(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?pu(r):void 0,o?pu(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Fu||(Fu={}));const Du=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ou=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},ku=[1,3,5,7,8,10,12],Hu=[4,6,9,11];var Cu,zu,Eu;function _u(e){const t=i(null);return f((()=>{t.current=e}),[e]),h(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":ku.includes(i)?Math.min(o,31).toString():Hu.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=pu(e,n);return pu(t,n).diff(r,"minute")},e.toDayjs=e=>e?pu(e):pu(),e.addMinutesToTime=(e,t,n="HH:mm")=>pu(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>pu(e).isSame(pu(t),n)}(Cu||(Cu={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!pu(e).isBefore(r,"day"))||!(!o||!pu(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(pu(e).isValid())return e}return""}}(zu||(zu={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Eu||(Eu={}));o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}});const Ru=y`
    border: 1px solid ${Ro.Accent.Light[1]};
    box-shadow: ${tu.InputBoxShadow};
`,Au=y`
    border: 1px solid ${Ro.Accent.Light[1]};
    box-shadow: none;
`,Mu=y`
    border: 1px solid ${Ro.Neutral[5]};
    box-shadow: none;
`,ju=y`
    border: 1px solid ${Ro.Validation.Red.Border};
    box-shadow: ${tu.InputErrorBoxShadow};
`,Pu=v.div`
    border: 1px solid ${Ro.Neutral[5]};
    border-radius: 4px;
    background: ${Ro.Neutral[8]};

    :focus-within {
        ${Ru}
    }
    ${e=>e.$focused&&Ru}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Au}
                }
                ${e.$focused&&Au}
            `:e.$disabled?y`
                background: ${Ro.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Mu}
                }
                ${e.$focused&&Mu}
            `:e.$error?y`
                border: 1px solid ${Ro.Validation.Red.Border};

                :focus-within {
                    ${ju}
                }
                ${e.$focused&&ju}
            `:void 0}
`;v(Pu)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Lu=v.input`
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
`,Wu=v.button`
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
`,Nu=v.div`
    overflow: hidden;
    border: 1px solid ${Ro.Neutral[5]};
    border-radius: 4px;
    background: ${Ro.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${ou.mobileL} {
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
`,Vu=v.div`
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
`;const Yu=v(F)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Ro.Primary};
`,Uu=v($)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Ro.Accent.Light[2]};
`,Gu=v.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Ju=v(Wu)`
    ${e=>Ho("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Ro.Primary};
`,Zu=v(Ju)`
    outline-offset: 0.25rem;
`,Xu=v(Ju)`
    padding: 0.5rem 1rem;
`,qu=v.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Ku=v.div`
    ${e=>Ho("small"===e.$variant?"BodySmall":"Body","regular")}
`,Qu=v(w)`
    ${e=>{const t="small"===e.$variant?1:1.125;return y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Ro.Validation.Red.Icon};
`,ed=v.button`
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
`,td=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=zo(e,["children","focusHighlight","focusOutline","type"]);return t(ed,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),nd=e=>"small"===e?1:1.125,rd=e=>y`
        height: ${nd(e)}rem;
        width: ${nd(e)}rem;
    `,od=v.div`
    background: ${Ro.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,id=v.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,ad=v(Lu)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,sd=v(T)`
    color: ${Ro.Neutral[3]};
    flex-shrink: 0;
    ${e=>rd(e.$variant)}
`,ld=v(td)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Ro.Neutral[3]};
    cursor: pointer;

    ${e=>y`
            svg {
                ${rd(e.$variant)}
            }
        `}
`,cd=m(((n,r)=>{var{value:o,variant:i,onClear:a}=n,s=zo(n,["value","variant","onClear"]);return e(od,{children:[e(id,{children:[t(sd,{$variant:i,"aria-hidden":!0}),t(ad,Object.assign({ref:r,value:o,$variant:i},s))]}),o&&t(ld,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(I,{"aria-hidden":!0})}))]})})),ud="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",dd=v(Wu)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Ho("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,fd=v.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${ud};

    svg {
        color: ${Ro.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Bo.BodySmall.fontSize:Bo.Body.fontSize;return y`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,hd=m((({children:n,disabled:r,expanded:o,listboxId:i,popupRole:a,readOnly:s,variant:l},c)=>e(dd,Object.assign({ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:l},{children:[n,!s&&t(fd,Object.assign({$expanded:o,$variant:l},{children:t(D,{"aria-hidden":!0})}))]}))));var pd=Symbol.for("immer-nothing"),gd=Symbol.for("immer-draftable"),md=Symbol.for("immer-state"),vd="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function yd(e,...t){if("production"!==process.env.NODE_ENV){const n=vd[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var bd=Object.getPrototypeOf;function Sd(e){return!!e&&!!e[md]}function xd(e){return!!e&&($d(e)||Array.isArray(e)||!!e[gd]||!!e.constructor?.[gd]||Dd(e)||Od(e))}var wd=Object.prototype.constructor.toString();function $d(e){if(!e||"object"!=typeof e)return!1;const t=bd(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===wd}function Fd(e,t){0===Bd(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function Bd(e){const t=e[md];return t?t.type_:Array.isArray(e)?1:Dd(e)?2:Od(e)?3:0}function Id(e,t){return 2===Bd(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Td(e,t,n){const r=Bd(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function Dd(e){return e instanceof Map}function Od(e){return e instanceof Set}function kd(e){return e.copy_||e.base_}function Hd(e,t){if(Dd(e))return new Map(e);if(Od(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=$d(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[md];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const o=n[r],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(bd(e),t)}{const t=bd(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function Cd(e,t=!1){return Ed(e)||Sd(e)||!xd(e)||(Bd(e)>1&&(e.set=e.add=e.clear=e.delete=zd),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>Cd(t,!0)))),e}function zd(){yd(2)}function Ed(e){return Object.isFrozen(e)}var _d,Rd={};function Ad(e){const t=Rd[e];return t||yd(0,e),t}function Md(){return _d}function jd(e,t){t&&(Ad("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Pd(e){Ld(e),e.drafts_.forEach(Nd),e.drafts_=null}function Ld(e){e===_d&&(_d=e.parent_)}function Wd(e){return _d={drafts_:[],parent_:_d,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Nd(e){const t=e[md];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Vd(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[md].modified_&&(Pd(t),yd(4)),xd(e)&&(e=Yd(t,e),t.parent_||Gd(t,e)),t.patches_&&Ad("Patches").generateReplacementPatches_(n[md].base_,e,t.patches_,t.inversePatches_)):e=Yd(t,n,[]),Pd(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==pd?e:void 0}function Yd(e,t,n){if(Ed(t))return t;const r=t[md];if(!r)return Fd(t,((o,i)=>Ud(e,r,t,o,i,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return Gd(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let o=t,i=!1;3===r.type_&&(o=new Set(t),t.clear(),i=!0),Fd(o,((o,a)=>Ud(e,r,t,o,a,n,i))),Gd(e,t,!1),n&&e.patches_&&Ad("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Ud(e,t,n,r,o,i,a){if("production"!==process.env.NODE_ENV&&o===n&&yd(5),Sd(o)){const a=Yd(e,o,i&&t&&3!==t.type_&&!Id(t.assigned_,r)?i.concat(r):void 0);if(Td(n,r,a),!Sd(a))return;e.canAutoFreeze_=!1}else a&&n.add(o);if(xd(o)&&!Ed(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Yd(e,o),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||Gd(e,o)}}function Gd(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Cd(t,n)}var Jd={get(e,t){if(t===md)return e;const n=kd(e);if(!Id(n,t))return function(e,t,n){const r=qd(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!xd(r)?r:r===Xd(e.base_,t)?(Qd(e),e.copy_[t]=ef(r,e)):r},has:(e,t)=>t in kd(e),ownKeys:e=>Reflect.ownKeys(kd(e)),set(e,t,n){const r=qd(kd(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=Xd(kd(e),t),o=r?.[md];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,r)&&(void 0!==n||Id(e.base_,t)))return!0;Qd(e),Kd(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Xd(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,Qd(e),Kd(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=kd(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){yd(11)},getPrototypeOf:e=>bd(e.base_),setPrototypeOf(){yd(12)}},Zd={};function Xd(e,t){const n=e[md];return(n?kd(n):e)[t]}function qd(e,t){if(!(t in e))return;let n=bd(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=bd(n)}}function Kd(e){e.modified_||(e.modified_=!0,e.parent_&&Kd(e.parent_))}function Qd(e){e.copy_||(e.copy_=Hd(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Fd(Jd,((e,t)=>{Zd[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Zd.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&yd(13),Zd.set.call(this,e,t,void 0)},Zd.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&yd(14),Jd.set.call(this,e[0],t,n,e[0])};function ef(e,t){const n=Dd(e)?Ad("MapSet").proxyMap_(e,t):Od(e)?Ad("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Md(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=Jd;n&&(o=[r],i=Zd);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return r.draft_=s,r.revoke_=a,s}(e,t);return(t?t.scope_:Md()).drafts_.push(n),n}function tf(e){if(!xd(e)||Ed(e))return e;const t=e[md];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Hd(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Hd(e,!0);return Fd(n,((e,t)=>{Td(n,e,tf(t))})),t&&(t.finalized_=!1),n}var nf=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...o){return r.produce(e,(e=>t.call(this,e,...o)))}}let r;if("function"!=typeof t&&yd(6),void 0!==n&&"function"!=typeof n&&yd(7),xd(e)){const o=Wd(this),i=ef(e,void 0);let a=!0;try{r=t(i),a=!1}finally{a?Pd(o):Ld(o)}return jd(o,n),Vd(r,o)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===pd&&(r=void 0),this.autoFreeze_&&Cd(r,!0),n){const t=[],o=[];Ad("Patches").generateReplacementPatches_(e,r,t,o),n(t,o)}return r}yd(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;return[this.produce(e,t,((e,t)=>{n=e,r=t})),n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){xd(e)||yd(8),Sd(e)&&(e=function(e){Sd(e)||yd(10,e);return tf(e)}(e));const t=Wd(this),n=ef(e,void 0);return n[md].isManual_=!0,Ld(t),n}finishDraft(e,t){const n=e&&e[md];n&&n.isManual_||yd(9);const{scope_:r}=n;return jd(r,t),Vd(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=Ad("Patches").applyPatches_;return Sd(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},rf=nf.produce;nf.produceWithPatches.bind(nf),nf.setAutoFreeze.bind(nf),nf.setUseStrictShallowCopy.bind(nf),nf.applyPatches.bind(nf),nf.createDraft.bind(nf),nf.finishDraft.bind(nf);const of=(e,t,n)=>rf(e,(e=>{for(let r=e.length-1;r>=0;r--){const o=e[r],i=sf(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&n&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?o.checked=!0:r&&(o.checked="mixed")}}})),af=(e,t)=>{const[n,...r]=t;if(Ut(e)||Ut(n))return;const o=e.find((e=>e.key===n));return o&&r.length?af(o.subItems,r):o},sf=e=>e.join(","),lf=e=>new Set(e.map((e=>e.join(",")))),cf=v.li`
    display: ${e=>e.$visible?"flex":"none"};
`,uf=v.div`
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
`,df=v.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,ff=v.div`
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
`,hf=v.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,pf=v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,gf=v(B)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Ro.Primary};
`,mf=v(C)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Ro.Primary};
`,vf=({listItems:n,multiSelect:r,selectedKeyPaths:o,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:c=2,variant:u="default",listboxId:f,width:h,mode:g="default",selectableCategory:m,onSelectItem:v,onSelectAll:y,onRetry:b,enableSearch:S,hideNoResultsDisplay:x,searchPlaceholder:w="Search",onSearch:$})=>{const F=r||m,[B,I]=a(""),T=B.toLowerCase().trim(),[D,k]=a(!1),H=i(),C=i(),z=i([]),E=i(),_=(()=>{const[e,t]=a(!1);return d((()=>{t(!0)}),[]),e})(),[R,A]=a([]),[M,j]=a([]),P=D?M:R,L=p((()=>{let e=0;for(const t of R)t.level>e&&(e=t.level);return e}),[R]),[W,N]=a(0),[V,Y]=a([]),[U,G]=a(0),J=e=>{const t=e.target.value;I(t),""===t?k(!1):t.trim().length>=3&&k(!0),null==$||$()},Z=()=>{I(""),k(!1),E.current.focus(),null==$||$()},X=()=>{null==b||b()},q=()=>{if(0===o.size){const e=[],t=[];R.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==y||y(e,t)}else null==y||y([],[])},K=_u(((e,t)=>((e,t,n,r,o)=>{const i=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((u,d)=>{var f,h;const p=s?s.level+1:0,g=s?[...s.keyPath,u.key]:[u.key],m=sf(g),v={item:u,index:i.length,indexInParent:d,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded),expanded:o,checked:t.has(m),hasSubItems:!!(null===(f=u.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!r&&-1!==u.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(l.push(v),i.push(v),null===(h=u.subItems)||void 0===h?void 0:h.length){const e=a(u.subItems,v);if(n&&!0!==v.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?v.checked=!0:n&&(v.checked="mixed")}v.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),v.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,o,r,T,t))),Q=_u((e=>{return o.size?(t=K(e,!1),rf(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>rf(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const o=e[t].keyPath.length;if(o>r)r=o;else if(o<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],o=r.keyPath.slice(0,-1),i=e[n].keyPath.slice(0,o.length);pa(o,i)&&(r.visible=!0)}return e})))(K(e,!1));var t})),ee=_u((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(T))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),te=_u((()=>{A((e=>of(e,o,r))),D&&j((e=>of(e,o,r)))})),ne=(e,t,n)=>{const r=((e,t,n)=>rf(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,r.length);if(!pa(r,a))break;t.visible=n&&i.expanded&&i.visible}})))(P,e,t);N(e),G(n),D?j(r):A(r)};((e,t,n="window",r)=>{const o=i();d((()=>{o.current=t}),[t]),d((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("keydown",(e=>{switch(e.code){case"ArrowDown":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return e[r]})(P,(e=>e.visible),W+1);t&&(G((e=>e+1)),N(t.index),z.current[t.index].focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return e[r]})(P,(e=>e.visible),W-1);t?(G((e=>e-1)),N(t.index),z.current[t.index].focus()):0===U&&E.current&&(E.current.focus(),G(-1),N(-1));break}case"ArrowRight":e.preventDefault(),ne(W,!0,U);break;case"ArrowLeft":e.preventDefault(),ne(W,!1,U);break;case"Space":if(document.activeElement===z.current[W]){e.preventDefault();const t=P[W];if(t.hasSubItems&&!F)return;null==v||v(t)}}})),d((()=>{let e;"default"===g?e=Q(n):"expand"===g?e=K(n,!0):"collapse"===g&&(e=K(n,!1)),A(e)}),[K,Q,n,g]),d((()=>{Y(P.filter((e=>e.visible)))}),[D,P]),d((()=>{te()}),[r,o,te]),d((()=>{if(D&&B.trim().length>=3){const e=ee(n),t=(e=>rf(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(K(e,!1));j(t)}}),[ee,K,n,D,B]),d((()=>{_||(E.current?(N(-1),G(-1),setTimeout((()=>{var e;return null===(e=E.current)||void 0===e?void 0:e.focus()}),200)):z.current[W]?setTimeout((()=>{var e;return null===(e=z.current[W])||void 0===e?void 0:e.focus()}),200):(N(0),G(0),setTimeout((()=>{var e;return null===(e=z.current[0])||void 0===e?void 0:e.focus()}),200)))}),[W,U,_]);const re=()=>{if(S&&"success"===s)return t(cd,{ref:E,onChange:J,value:B,placeholder:w,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Z,variant:u})},oe=()=>{if(r&&!D&&R.length>0&&"success"===s)return t(Gu,{children:t(Xu,Object.assign({onClick:q,type:"button",$variant:u},{children:0===o.size?"Select all":"Clear all"}))})},ie=()=>{if(!x&&D&&0===M.length&&"success"===s)return e(qu,Object.assign({"data-testid":"list-no-results"},{children:[t(Qu,{$variant:u}),t(Ku,Object.assign({$variant:u},{children:"No results found."}))]}))},ae=()=>{if(b&&"loading"===s){const n="small"===u?16:18;return e(qu,Object.assign({"data-testid":"list-loading"},{children:[t(fu,{$buttonStyle:"secondary",size:n}),t(Ku,Object.assign({$variant:u},{children:"Loading..."}))]}))}},se=()=>{if(b&&"fail"===s)return e(qu,Object.assign({"data-testid":"list-fail"},{children:[t(Qu,{"data-testid":"load-error-icon",$variant:u}),t(Ku,Object.assign({$variant:u},{children:"Failed to load."}))," ",t(Zu,Object.assign({onClick:X,type:"button",$variant:u},{children:"Try again."}))]}))},le=e=>{if(r)switch(e.checked){case"mixed":return t(mf,{"aria-hidden":!0});case!0:return t(Yu,{"aria-hidden":!0});default:return t(Uu,{"aria-hidden":!0})}if(!e.hasSubItems)return t(pf,Object.assign({$hasNestedSiblings:e.hasNestedSiblings||0===e.level},{children:e.checked&&t(gf,{"aria-hidden":!0})}))},ce=(n,o)=>{const{level:i,visible:a,expanded:s,keyPath:u,checked:d,hasSubItems:f,indexInParent:h,parentSetSize:p}=n,g=n.index,m=U===o,y=f&&!F;return e(cf,Object.assign({$visible:a},{children:[L>0&&t(df,{$level:i}),L>0&&!f&&r&&t(hf,{}),e(uf,Object.assign({"aria-checked":d,"aria-selected":!!d,"aria-expanded":f?s:void 0,"aria-level":i+1,"aria-posinset":h+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),y?ne(g,!s,o):((e,t)=>{G(t),N(e),null==v||v(P[e])})(g,o)},onMouseEnter:()=>((e,t)=>{N(t.index),G(e)})(o,n),ref:e=>z.current[n.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:y},{children:[f&&t(ff,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),ne(g,!s,o)},$expanded:s},{children:t(O,{})})),le(n),t(qo,{bold:f,searchTerm:D?T:void 0,label:n.item.label,selected:!!d,truncationType:l,maxLines:c})]}))]}),`[${u.join("---")}]`)};return t(Nu,Object.assign({"data-testid":"dropdown-container",ref:H,$width:h},{children:e(Vu,Object.assign({"data-testid":"nested-dropdown-list"},{children:[re(),oe(),ie(),ae(),se(),t("div",Object.assign({"aria-multiselectable":r,id:f,ref:C,role:"tree"},{children:t($c,Object.assign({style:{height:"100%"},customScrollParent:H.current,data:V,itemContent:(e,t)=>ce(t,e)},"test"===process.env.NODE_ENV?{initialItemCount:V.length,key:V.length}:{}))}))]}))}))},yf=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=yf(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const bf=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>yf(e.$variant)}rem - 2px);
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
`,Sf=v.button`
    ${bf}
    cursor: pointer;
`;v.div`
    ${bf}
`;const xf=S`
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
        box-shadow: ${tu.InputBoxShadow};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${xf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${Ro.Neutral[6](e)};

                ${Sf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ro.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${Sf} {
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
                    box-shadow: ${tu.InputErrorBoxShadow};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${ud};
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
`;const wf=v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return y`
                color: ${Ro.Neutral[3]};
            `}}
`,$f=v.div`
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
`,Ff=v($f)`
    color: ${Ro.Neutral[3]};
`;var Bf;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Bf||(Bf={}));const If=v.div`
    display: flex;
    flex-direction: column;
`,Tf=e=>"right"===e?"bottom-end":"bottom-start",Df=({enabled:r,isOpen:o,onOpen:s,onClose:l,onDismiss:c,renderElement:u,renderDropdown:f,customZIndex:h,clickToToggle:p=!1,offset:g=0,alignment:m="left",fitAvailableHeight:v})=>{var y;const b=i(null),S=i(null),{width:x}=Wn({targetRef:b,handleHeight:!1}),w={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<iu.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:$,floatingStyles:F,context:B}=E({open:o,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!o?null==s||s():!e&&o&&(null==l||l(n))},whileElementsMounted:_,placement:Tf(m),middleware:[R(g),A(),M({limiter:j()}),P({apply({availableHeight:e}){S.current&&Object.assign(S.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}}),w]}),I=(()=>{const[e,t]=a(void 0),n=z();return d((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Bf.Change,e),n.events.emit(Bf.Ready),()=>n.events.off(Bf.Change,e)}),[n]),e})(),{isMounted:T,styles:D}=L(B,{initial:{opacity:0},open:{opacity:1},duration:300}),O=W(B,{enabled:r,toggle:p}),k=N(B,{enabled:r}),{getReferenceProps:H,getFloatingProps:C}=V([O,k]);return e(n,{children:[t("div",Object.assign({ref:e=>{b.current=e,$.setReference(e)}},H(),{children:u()})),T&&t(Y,{children:t(U,Object.assign({context:B,modal:!1,initialFocus:S,returnFocus:!1},{children:t("div",Object.assign({ref:$.setFloating,style:Object.assign(Object.assign({},F),{zIndex:null!==(y=null!=h?h:I)&&void 0!==y?y:50})},C(),{children:t(If,Object.assign({ref:S,style:Object.assign({},D),inert:D.opacity<1?"":void 0},{children:f({elementWidth:x})}))}))}))})]})},Of=({placeholder:e="Select",options:n,disabled:r,error:o,className:s,"data-testid":l,id:c,selectedKeyPath:u,mode:f,valueToStringFunction:h,enableSearch:p,searchPlaceholder:g,selectableCategory:m,hideNoResultsDisplay:v,readOnly:y,onBlur:b,onSearch:S,onSelectOption:x,onShowOptions:w,onHideOptions:$,onRetry:F,optionsLoadState:B="success",optionTruncationType:I="end",variant:T,alignment:D,dropdownZIndex:O})=>{const k=n,[H,C]=a(u?lf([u]):new Set),[z,E]=a(),[_,R]=a(!1),[A,M]=a(!1),[j]=a((()=>Eu.generate())),P=i(),L=i(),W=i();d((()=>{C(u?lf([u]):new Set);const e=af(k,u||[]);E(null!=e?e:void 0)}),[u,k]);const N=e=>{var t;const{keyPath:n,item:{label:r,value:o}}=e;C(lf([n])),E({label:r,value:o}),R(!1),J(!1),null===(t=L.current)||void 0===t||t.focus(),null==x||x(n,o)},V=()=>{A||_||M(!0)},Y=e=>{!A||_||P.current.contains(e.relatedTarget)||(M(!1),null==b||b())},U=()=>{const{label:e,value:t}=z;return h?h(t)||t.toString():e},G=e=>{if("middle"===I){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),No.truncateOneLine(e,t,120,6)}return e},J=e=>{!e&&$&&$(),e&&w&&w()};return t(Df,{enabled:!y&&!r,isOpen:_,renderElement:()=>t(Pu,Object.assign({className:s,"data-testid":l,id:c,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:A,$disabled:r,$readOnly:y,$error:o},{children:t(hd,Object.assign({ref:L,disabled:r,expanded:_,listboxId:j,popupRole:"tree",readOnly:y,variant:T},{children:t(wf,Object.assign({ref:W,$disabled:r},{children:Ut(z)?t(Ff,Object.assign({truncateType:I},{children:e})):t($f,Object.assign({truncateType:I},{children:G(U())}))}))}))})),renderDropdown:({elementWidth:e})=>t(vf,{listboxId:j,listItems:k,selectedKeyPaths:H,selectableCategory:m,itemsLoadState:B,itemTruncationType:I,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:v,onSelectItem:N,onRetry:F,onSearch:S,variant:T,mode:f,width:e}),onOpen:()=>{R(!0),J(!0),M(!0)},onClose:e=>{R(!1),J(!1),"click"!==e&&(M(!1),null==b||b())},onDismiss:()=>{L.current.focus(),R(!1),J(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:O})};export{Of as InputNestedSelect};
//# sourceMappingURL=index.js.map
