import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useRef as i,useState as a,isValidElement as l,createRef as s,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as f,useCallback as h,useMemo as g,createElement as p,forwardRef as m,useContext as v}from"react";import y,{css as b,useTheme as S,keyframes as x}from"styled-components";import{ExternalIcon as w}from"@lifesg/react-icons/external";import $,{findDOMNode as F}from"react-dom";import{ExclamationCircleFillIcon as B}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as T}from"@lifesg/react-icons/square";import{SquareTickFillIcon as I}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as D}from"@lifesg/react-icons/tick";import{CrossIcon as H}from"@lifesg/react-icons/cross";import{MagnifierIcon as O}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as k}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as E,useFloating as z,autoUpdate as R,offset as A,flip as M,shift as j,limitShift as L,size as _,useTransitionStyles as W,useClick as P,useDismiss as V,useInteractions as N,FloatingPortal as Y,FloatingFocusManager as U}from"@floating-ui/react";var G=function(e,t){return G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},G(e,t)};var J=function(){return J=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},J.apply(this,arguments)};var Z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var X=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},q="object"==typeof Z&&Z&&Z.Object===Object&&Z,K="object"==typeof self&&self&&self.Object===Object&&self,Q=q||K||Function("return this")(),ee=Q,te=function(){return ee.Date.now()},ne=/\s/;var re=function(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t},oe=/^\s+/;var ie=function(e){return e?e.slice(0,re(e)+1).replace(oe,""):e},ae=Q.Symbol,le=ae,se=Object.prototype,ce=se.hasOwnProperty,ue=se.toString,de=le?le.toStringTag:void 0;var fe=function(e){var t=ce.call(e,de),n=e[de];try{e[de]=void 0;var r=!0}catch(e){}var o=ue.call(e);return r&&(t?e[de]=n:delete e[de]),o},he=Object.prototype.toString;var ge=fe,pe=function(e){return he.call(e)},me=ae?ae.toStringTag:void 0;var ve=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?ge(e):pe(e)},ye=function(e){return null!=e&&"object"==typeof e};var be=ie,Se=X,xe=function(e){return"symbol"==typeof e||ye(e)&&"[object Symbol]"==ve(e)},we=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Fe=/^0o[0-7]+$/i,Be=parseInt;var Te=X,Ie=te,De=function(e){if("number"==typeof e)return e;if(xe(e))return NaN;if(Se(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Se(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=be(e);var n=$e.test(e);return n||Fe.test(e)?Be(e.slice(2),n?2:8):we.test(e)?NaN:+e},He=Math.max,Oe=Math.min;var Ce=function(e,t,n){var r,o,i,a,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function g(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function p(){var e=Ie();if(g(e))return m(e);l=setTimeout(p,function(e){var n=t-(e-s);return d?Oe(n,i-(e-c)):n}(e))}function m(e){return l=void 0,f&&r?h(e):(r=o=void 0,a)}function v(){var e=Ie(),n=g(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(p,t),u?h(e):a}(s);if(d)return clearTimeout(l),l=setTimeout(p,t),h(s)}return void 0===l&&(l=setTimeout(p,t)),a}return t=De(t)||0,Te(n)&&(u=!!n.leading,i=(d="maxWait"in n)?He(De(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},v.flush=function(){return void 0===l?a:m(Ie())},v},ke=Ce,Ee=X;var ze=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ee(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ke(e,t,{leading:r,maxWait:t,trailing:o})},Re=function(e,t,n,r){switch(t){case"debounce":return Ce(e,n,r);case"throttle":return ze(e,n,r);default:return e}},Ae=function(e){return"function"==typeof e},Me=function(){return"undefined"==typeof window},je=function(e){return e instanceof Element||e instanceof HTMLDocument},Le=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&Ae(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Me()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Me())return null;if(t)return document.querySelector(t);if(r&&je(r))return r;if(n.targetRef&&je(n.targetRef.current))return n.targetRef.current;var o=F(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var s=Le(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!Me()&&s({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Ae(t)?"renderProp":Ae(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,Me()||(n.resizeHandler=Re(n.createResizeHandler,o,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}G(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Me()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(s,["targetRef"]);return c(e,u)}return c(e,s);case"childArray":return(e=o).map((function(e){return!!e&&c(e,s)}));default:return r.createElement(a,null)}}}(u);var _e=Me()?d:f;function We(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,l=void 0===o?1e3:o,s=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,g=e.observerOptions,p=e.onResize,m=i(n),v=i(null),y=null!=h?h:v,b=i(),S=a({width:void 0,height:void 0}),x=S[0],w=S[1];return _e((function(){if(!Me()){var e=Le(p,w,u,f);b.current=Re((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!m.current&&!Me()&&e({width:r,height:o}),m.current=!1}))}),r,l,s);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,g),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,l,s,u,f,p,g,y.current]),J({ref:y},x)}const Pe={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Ve={D1:{fontFamily:Pe.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Pe.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Pe.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Pe.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Pe.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Pe.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Pe.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Pe.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Pe.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Pe.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Pe.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Pe.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Pe.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Pe.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ne={D1:{fontFamily:Pe.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Pe.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Pe.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Pe.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Pe.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Pe.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Pe.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Pe.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Pe.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Pe.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Pe.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Pe.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Pe.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Pe.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Ye={D1:{fontFamily:Pe.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Pe.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Pe.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Pe.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Pe.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Pe.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Pe.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Pe.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Pe.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Pe.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Pe.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Pe.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Pe.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Pe.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var Ue="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ge(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Je=Array.isArray,Ze="object"==typeof Ue&&Ue&&Ue.Object===Object&&Ue,Xe=Ze,qe="object"==typeof self&&self&&self.Object===Object&&self,Ke=Xe||qe||Function("return this")(),Qe=Ke.Symbol,et=Qe,tt=Object.prototype,nt=tt.hasOwnProperty,rt=tt.toString,ot=et?et.toStringTag:void 0;var it=function(e){var t=nt.call(e,ot),n=e[ot];try{e[ot]=void 0;var r=!0}catch(e){}var o=rt.call(e);return r&&(t?e[ot]=n:delete e[ot]),o},at=Object.prototype.toString;var lt=it,st=function(e){return at.call(e)},ct=Qe?Qe.toStringTag:void 0;var ut=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ct&&ct in Object(e)?lt(e):st(e)};var dt=function(e){return null!=e&&"object"==typeof e},ft=ut,ht=dt;var gt=function(e){return"symbol"==typeof e||ht(e)&&"[object Symbol]"==ft(e)},pt=Je,mt=gt,vt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yt=/^\w*$/;var bt=function(e,t){if(pt(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!mt(e))||(yt.test(e)||!vt.test(e)||null!=t&&e in Object(t))};var St=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},xt=ut,wt=St;var $t,Ft=function(e){if(!wt(e))return!1;var t=xt(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Bt=Ke["__core-js_shared__"],Tt=($t=/[^.]+$/.exec(Bt&&Bt.keys&&Bt.keys.IE_PROTO||""))?"Symbol(src)_1."+$t:"";var It=function(e){return!!Tt&&Tt in e},Dt=Function.prototype.toString;var Ht=function(e){if(null!=e){try{return Dt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ot=Ft,Ct=It,kt=St,Et=Ht,zt=/^\[object .+?Constructor\]$/,Rt=Function.prototype,At=Object.prototype,Mt=Rt.toString,jt=At.hasOwnProperty,Lt=RegExp("^"+Mt.call(jt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var _t=function(e){return!(!kt(e)||Ct(e))&&(Ot(e)?Lt:zt).test(Et(e))},Wt=function(e,t){return null==e?void 0:e[t]};var Pt=function(e,t){var n=Wt(e,t);return _t(n)?n:void 0},Vt=Pt(Object,"create"),Nt=Vt;var Yt=function(){this.__data__=Nt?Nt(null):{},this.size=0};var Ut=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Gt=Vt,Jt=Object.prototype.hasOwnProperty;var Zt=function(e){var t=this.__data__;if(Gt){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Jt.call(t,e)?t[e]:void 0},Xt=Vt,qt=Object.prototype.hasOwnProperty;var Kt=Vt;var Qt=Yt,en=Ut,tn=Zt,nn=function(e){var t=this.__data__;return Xt?void 0!==t[e]:qt.call(t,e)},rn=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Kt&&void 0===t?"__lodash_hash_undefined__":t,this};function on(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}on.prototype.clear=Qt,on.prototype.delete=en,on.prototype.get=tn,on.prototype.has=nn,on.prototype.set=rn;var an=on;var ln=function(){this.__data__=[],this.size=0};var sn=function(e,t){return e===t||e!=e&&t!=t},cn=sn;var un=function(e,t){for(var n=e.length;n--;)if(cn(e[n][0],t))return n;return-1},dn=un,fn=Array.prototype.splice;var hn=un;var gn=un;var pn=un;var mn=ln,vn=function(e){var t=this.__data__,n=dn(t,e);return!(n<0)&&(n==t.length-1?t.pop():fn.call(t,n,1),--this.size,!0)},yn=function(e){var t=this.__data__,n=hn(t,e);return n<0?void 0:t[n][1]},bn=function(e){return gn(this.__data__,e)>-1},Sn=function(e,t){var n=this.__data__,r=pn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function xn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xn.prototype.clear=mn,xn.prototype.delete=vn,xn.prototype.get=yn,xn.prototype.has=bn,xn.prototype.set=Sn;var wn=xn,$n=Pt(Ke,"Map"),Fn=an,Bn=wn,Tn=$n;var In=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Dn=function(e,t){var n=e.__data__;return In(t)?n["string"==typeof t?"string":"hash"]:n.map},Hn=Dn;var On=Dn;var Cn=Dn;var kn=Dn;var En=function(e,t){var n=kn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},zn=function(){this.size=0,this.__data__={hash:new Fn,map:new(Tn||Bn),string:new Fn}},Rn=function(e){var t=Hn(this,e).delete(e);return this.size-=t?1:0,t},An=function(e){return On(this,e).get(e)},Mn=function(e){return Cn(this,e).has(e)},jn=En;function Ln(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ln.prototype.clear=zn,Ln.prototype.delete=Rn,Ln.prototype.get=An,Ln.prototype.has=Mn,Ln.prototype.set=jn;var _n=Ln,Wn=_n;function Pn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Pn.Cache||Wn),n}Pn.Cache=Wn;var Vn=Pn;var Nn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yn=/\\(\\)?/g,Un=function(e){var t=Vn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Nn,(function(e,n,r,o){t.push(r?o.replace(Yn,"$1"):n||e)})),t}));var Gn=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Jn=Je,Zn=gt,Xn=Qe?Qe.prototype:void 0,qn=Xn?Xn.toString:void 0;var Kn=function e(t){if("string"==typeof t)return t;if(Jn(t))return Gn(t,e)+"";if(Zn(t))return qn?qn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Qn=Kn;var er=Je,tr=bt,nr=Un,rr=function(e){return null==e?"":Qn(e)};var or=function(e,t){return er(e)?e:tr(e,t)?[e]:nr(rr(e))},ir=gt;var ar=function(e){if("string"==typeof e||ir(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},lr=or,sr=ar;var cr=function(e,t){for(var n=0,r=(t=lr(t,e)).length;null!=e&&n<r;)e=e[sr(t[n++])];return n&&n==r?e:void 0},ur=cr;var dr=function(e,t,n){var r=null==e?void 0:ur(e,t);return void 0===r?n:r},fr=Ge(dr);const hr=(e,t,n)=>t?fr(n,t)||fr(e,t):n||e,gr=(e,t)=>{const n=t||e.defaultValue;return fr(e.collections,n)};var pr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(pr||(pr={}));const mr={collections:{base:Ve,oneservice:Ye,plusJakartaSans:Ne},defaultValue:"base"},vr=e=>t=>{const n=t.theme,r=gr(mr,n[pr.textStyleScheme]);return n.options&&n.options.textStyle?hr(r,e,n.options.textStyle):hr(r,e)},yr={D1:{fontFamily:vr("D1.fontFamily"),fontSize:vr("D1.fontSize"),fontWeight:vr("D1.fontWeight"),lineHeight:vr("D1.lineHeight"),letterSpacing:vr("D1.letterSpacing"),fontVariant:vr("D1.fontVariant")},D2:{fontFamily:vr("D2.fontFamily"),fontSize:vr("D2.fontSize"),fontWeight:vr("D2.fontWeight"),lineHeight:vr("D2.lineHeight"),letterSpacing:vr("D2.letterSpacing"),fontVariant:vr("D2.fontVariant")},D3:{fontFamily:vr("D3.fontFamily"),fontSize:vr("D3.fontSize"),fontWeight:vr("D3.fontWeight"),lineHeight:vr("D3.lineHeight"),letterSpacing:vr("D3.letterSpacing"),fontVariant:vr("D3.fontVariant")},D4:{fontFamily:vr("D4.fontFamily"),fontSize:vr("D4.fontSize"),fontWeight:vr("D4.fontWeight"),lineHeight:vr("D4.lineHeight"),letterSpacing:vr("D4.letterSpacing"),fontVariant:vr("D4.fontVariant")},DBody:{fontFamily:vr("DBody.fontFamily"),fontSize:vr("DBody.fontSize"),fontWeight:vr("DBody.fontWeight"),lineHeight:vr("DBody.lineHeight"),letterSpacing:vr("DBody.letterSpacing"),fontVariant:vr("DBody.fontVariant")},H1:{fontFamily:vr("H1.fontFamily"),fontSize:vr("H1.fontSize"),fontWeight:vr("H1.fontWeight"),lineHeight:vr("H1.lineHeight"),letterSpacing:vr("H1.letterSpacing"),fontVariant:vr("H1.fontVariant")},H2:{fontFamily:vr("H2.fontFamily"),fontSize:vr("H2.fontSize"),fontWeight:vr("H2.fontWeight"),lineHeight:vr("H2.lineHeight"),letterSpacing:vr("H2.letterSpacing"),fontVariant:vr("H2.fontVariant")},H3:{fontFamily:vr("H3.fontFamily"),fontSize:vr("H3.fontSize"),fontWeight:vr("H3.fontWeight"),lineHeight:vr("H3.lineHeight"),letterSpacing:vr("H3.letterSpacing"),fontVariant:vr("H3.fontVariant")},H4:{fontFamily:vr("H4.fontFamily"),fontSize:vr("H4.fontSize"),fontWeight:vr("H4.fontWeight"),lineHeight:vr("H4.lineHeight"),letterSpacing:vr("H4.letterSpacing"),fontVariant:vr("H4.fontVariant")},H5:{fontFamily:vr("H5.fontFamily"),fontSize:vr("H5.fontSize"),fontWeight:vr("H5.fontWeight"),lineHeight:vr("H5.lineHeight"),letterSpacing:vr("H5.letterSpacing"),fontVariant:vr("H5.fontVariant")},H6:{fontFamily:vr("H6.fontFamily"),fontSize:vr("H6.fontSize"),fontWeight:vr("H6.fontWeight"),lineHeight:vr("H6.lineHeight"),letterSpacing:vr("H6.letterSpacing"),fontVariant:vr("H6.fontVariant")},Body:{fontFamily:vr("Body.fontFamily"),fontSize:vr("Body.fontSize"),fontWeight:vr("Body.fontWeight"),lineHeight:vr("Body.lineHeight"),letterSpacing:vr("Body.letterSpacing"),fontVariant:vr("Body.fontVariant")},BodySmall:{fontFamily:vr("BodySmall.fontFamily"),fontSize:vr("BodySmall.fontSize"),fontWeight:vr("BodySmall.fontWeight"),lineHeight:vr("BodySmall.lineHeight"),letterSpacing:vr("BodySmall.letterSpacing"),fontVariant:vr("BodySmall.fontVariant")},XSmall:{fontFamily:vr("XSmall.fontFamily"),fontSize:vr("XSmall.fontSize"),fontWeight:vr("XSmall.fontWeight"),lineHeight:vr("XSmall.lineHeight"),letterSpacing:vr("XSmall.letterSpacing"),fontVariant:vr("XSmall.fontVariant")}},br=[Pe.OpenSans,Pe.PlusJakartaSans],Sr=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},xr=(e,t)=>n=>{var r;const o=yr[e].fontFamily(n),i=yr[e].fontWeight(n),a=br.find((e=>Object.values(e).includes(o)));return a?b`
                font-family: ${Sr(a,t)||Sr(a,i)||o};
                font-weight: normal !important;
            `:b`
            font-family: ${o};
            font-weight: ${null!==(r=wr(t)||i)&&void 0!==r?r:"normal"};
        `},wr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},$r=e=>{if(e>0)return b`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Fr=(e,t,n=!1)=>r=>{const o=yr[e],i=o.fontSize(r);return b`
            ${xr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${b`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Br=(e=!1,t=!1,n=void 0)=>t?b`
            display: block;
            ${$r(n)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${$r(n)}
        `;function Tr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Ir={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dr=e=>t=>{const n=t.theme,r=gr(Ir,n[pr.colorScheme]);return n.options&&n.options.color?hr(r,e,n.options.color):hr(r,e)},Hr={Brand:{1:Dr("Brand.1"),2:Dr("Brand.2"),3:Dr("Brand.3"),4:Dr("Brand.4"),5:Dr("Brand.5"),6:Dr("Brand.6")},Primary:Dr("Primary"),PrimaryDark:Dr("PrimaryDark"),Secondary:Dr("Secondary"),Accent:{Light:{1:Dr("Accent.Light.1"),2:Dr("Accent.Light.2"),3:Dr("Accent.Light.3"),4:Dr("Accent.Light.4"),5:Dr("Accent.Light.5"),6:Dr("Accent.Light.6")},Dark:{1:Dr("Accent.Dark.1"),2:Dr("Accent.Dark.2"),3:Dr("Accent.Dark.3")}},Neutral:{1:Dr("Neutral.1"),2:Dr("Neutral.2"),3:Dr("Neutral.3"),4:Dr("Neutral.4"),5:Dr("Neutral.5"),6:Dr("Neutral.6"),7:Dr("Neutral.7"),8:Dr("Neutral.8")},Validation:{Green:{Text:Dr("Validation.Green.Text"),Icon:Dr("Validation.Green.Icon"),Border:Dr("Validation.Green.Border"),Background:Dr("Validation.Green.Background")},Orange:{Text:Dr("Validation.Orange.Text"),Icon:Dr("Validation.Orange.Icon"),Border:Dr("Validation.Orange.Border"),Background:Dr("Validation.Orange.Background"),Badge:Dr("Validation.Orange.Badge")},Red:{Text:Dr("Validation.Red.Text"),Icon:Dr("Validation.Red.Icon"),Border:Dr("Validation.Red.Border"),Background:Dr("Validation.Red.Background")},Blue:{Text:Dr("Validation.Blue.Text"),Icon:Dr("Validation.Blue.Icon"),Border:Dr("Validation.Blue.Border"),Background:Dr("Validation.Blue.Background")}},Shadow:{Accent:Dr("Shadow.Accent"),Red:Dr("Shadow.Red"),Elevation:Dr("Shadow.Elevation")}};var Or;!function(e){e.D1=y.h1`
        ${e=>b`
                ${Fr("D1",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>b`
                ${Fr("D2",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>b`
                ${Fr("D3",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>b`
                ${Fr("D4",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>b`
                ${Fr("DBody",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>b`
                ${Fr("H1",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>b`
                ${Fr("H2",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>b`
                ${Fr("H3",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>b`
                ${Fr("H4",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>b`
                ${Fr("H5",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>b`
                ${Fr("H6",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>b`
                ${Fr("Body",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>b`
                ${Fr("BodySmall",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>b`
                ${Fr("XSmall",e.weight,e.paragraph)}
                color: ${Hr.Neutral[1]};
                ${Br(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Er(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Er(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Or||(Or={}));const Cr=y.a`
    ${e=>b`
            ${Fr(e.textStyle,e.weight)}
            color: ${Hr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Hr.Secondary};

                svg {
                    color: ${Hr.Secondary};
                }
            }
        `}
`,kr=y(w)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Er=n=>{var{external:r=!1,children:o}=n,i=Tr(n,["external","children"]);return e(Cr,Object.assign({},i,{children:[o,r&&t(kr,{})]}))};var zr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(zr||(zr={}));const Rr={[pr.colorScheme]:"base",[pr.textStyleScheme]:"base",[pr.designTokenScheme]:"base",[pr.resourceScheme]:"base"};var Ar;pr.colorScheme,pr.textStyleScheme,pr.designTokenScheme,pr.resourceScheme,pr.colorScheme,pr.textStyleScheme,pr.designTokenScheme,pr.resourceScheme,pr.colorScheme,pr.textStyleScheme,pr.designTokenScheme,pr.resourceScheme,pr.colorScheme,pr.textStyleScheme,pr.designTokenScheme,pr.resourceScheme,pr.colorScheme,pr.textStyleScheme,pr.designTokenScheme,pr.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Ar||(Ar={}));const Mr=b`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,jr=y.div`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?Hr.Primary:Hr.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Mr}
`,Lr=y.div`
    color: ${Hr.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Mr}

    ${e=>"next-line"===e.$labelDisplayType?b`
                    ${Fr("BodySmall","semibold")}
                `:b`
                    ${Fr("Body","regular")}
                `}
`,_r=y.span`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","semibold")}
`,Wr=y.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return b`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return b`
                    ${jr} {
                        display: inline;
                    }

                    ${Lr} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Pr=y.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Vr=y.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Nr=({bold:r,displayType:o="inline",label:i,searchTerm:a,maxLines:l=2,selected:s,sublabel:c,truncationType:u="middle",variant:d})=>{const f=S()||Rr,p=yr.Body.fontSize({theme:f}),m=yr.Body.fontFamily({theme:f}),{ref:v,width:y}=We(),b=h((e=>{if("inline"!==o)return!1;return Ar.getTextWidth(e,`${p}rem '${m}'`)>y*l-50}),[y,o,p,m,l]),x=g((()=>b(i)),[b,i]),w=g((()=>c&&b(c)),[b,c]),$=x||w?"next-line":o,F=r=>{if(!a)return r;const o=a.toLowerCase().trim(),l=r.toLowerCase().indexOf(o),s=l+a.length;return-1===l?r:e(n,{children:[i.slice(0,l),t(_r,Object.assign({$variant:d},{children:i.slice(l,s)})),i.slice(s)]})},B=r=>e(n,{children:[t(Pr,Object.assign({$maxLines:l,"aria-hidden":!0},{children:F(r)})),t(Vr,Object.assign({$maxLines:l,"aria-hidden":!0},{children:F(r)}))]});return e(Wr,Object.assign({ref:v,$labelDisplayType:$},{children:[t(jr,Object.assign({"aria-label":i,$bold:r,$maxLines:l,$selected:s,$truncateType:u,$variant:d},{children:"middle"===u&&x?B(i):F(i)})),c&&t(Lr,Object.assign({"aria-label":c,$maxLines:l,$truncateType:u,$labelDisplayType:o},{children:"middle"===u&&w?B(c):c}))]}))};var Yr=wn;var Ur=wn,Gr=$n,Jr=_n;var Zr=wn,Xr=function(){this.__data__=new Yr,this.size=0},qr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Kr=function(e){return this.__data__.get(e)},Qr=function(e){return this.__data__.has(e)},eo=function(e,t){var n=this.__data__;if(n instanceof Ur){var r=n.__data__;if(!Gr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Jr(r)}return n.set(e,t),this.size=n.size,this};function to(e){var t=this.__data__=new Zr(e);this.size=t.size}to.prototype.clear=Xr,to.prototype.delete=qr,to.prototype.get=Kr,to.prototype.has=Qr,to.prototype.set=eo;var no=to;var ro=_n,oo=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},io=function(e){return this.__data__.has(e)};function ao(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ro;++t<n;)this.add(e[t])}ao.prototype.add=ao.prototype.push=oo,ao.prototype.has=io;var lo=ao,so=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},co=function(e,t){return e.has(t)};var uo=function(e,t,n,r,o,i){var a=1&n,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&n?new lo:void 0;for(i.set(e,t),i.set(t,e);++d<l;){var g=e[d],p=t[d];if(r)var m=a?r(p,g,d,t,e,i):r(g,p,d,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!so(t,(function(e,t){if(!co(h,t)&&(g===e||o(g,e,n,r,i)))return h.push(t)}))){f=!1;break}}else if(g!==p&&!o(g,p,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var fo=Ke.Uint8Array,ho=sn,go=uo,po=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},mo=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},vo=Qe?Qe.prototype:void 0,yo=vo?vo.valueOf:void 0;var bo=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new fo(e),new fo(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ho(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=po;case"[object Set]":var s=1&r;if(l||(l=mo),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=go(l(e),l(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(yo)return yo.call(e)==yo.call(t)}return!1};var So=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},xo=So,wo=Je;var $o=function(e,t,n){var r=t(e);return wo(e)?r:xo(r,n(e))};var Fo=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i},Bo=function(){return[]},To=Object.prototype.propertyIsEnumerable,Io=Object.getOwnPropertySymbols,Do=Io?function(e){return null==e?[]:(e=Object(e),Fo(Io(e),(function(t){return To.call(e,t)})))}:Bo;var Ho=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Oo=ut,Co=dt;var ko=function(e){return Co(e)&&"[object Arguments]"==Oo(e)},Eo=dt,zo=Object.prototype,Ro=zo.hasOwnProperty,Ao=zo.propertyIsEnumerable,Mo=ko(function(){return arguments}())?ko:function(e){return Eo(e)&&Ro.call(e,"callee")&&!Ao.call(e,"callee")},jo={exports:{}};var Lo=function(){return!1};!function(e,t){var n=Ke,r=Lo,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=(a?a.isBuffer:void 0)||r;e.exports=l}(jo,jo.exports);var _o=jo.exports,Wo=/^(?:0|[1-9]\d*)$/;var Po=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Wo.test(e))&&e>-1&&e%1==0&&e<t};var Vo=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},No=ut,Yo=Vo,Uo=dt,Go={};Go["[object Float32Array]"]=Go["[object Float64Array]"]=Go["[object Int8Array]"]=Go["[object Int16Array]"]=Go["[object Int32Array]"]=Go["[object Uint8Array]"]=Go["[object Uint8ClampedArray]"]=Go["[object Uint16Array]"]=Go["[object Uint32Array]"]=!0,Go["[object Arguments]"]=Go["[object Array]"]=Go["[object ArrayBuffer]"]=Go["[object Boolean]"]=Go["[object DataView]"]=Go["[object Date]"]=Go["[object Error]"]=Go["[object Function]"]=Go["[object Map]"]=Go["[object Number]"]=Go["[object Object]"]=Go["[object RegExp]"]=Go["[object Set]"]=Go["[object String]"]=Go["[object WeakMap]"]=!1;var Jo=function(e){return Uo(e)&&Yo(e.length)&&!!Go[No(e)]};var Zo=function(e){return function(t){return e(t)}},Xo={exports:{}};!function(e,t){var n=Ze,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Xo,Xo.exports);var qo=Xo.exports,Ko=Jo,Qo=Zo,ei=qo&&qo.isTypedArray,ti=ei?Qo(ei):Ko,ni=Ho,ri=Mo,oi=Je,ii=_o,ai=Po,li=ti,si=Object.prototype.hasOwnProperty;var ci=function(e,t){var n=oi(e),r=!n&&ri(e),o=!n&&!r&&ii(e),i=!n&&!r&&!o&&li(e),a=n||r||o||i,l=a?ni(e.length,String):[],s=l.length;for(var c in e)!t&&!si.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ai(c,s))||l.push(c);return l},ui=Object.prototype;var di=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ui)};var fi=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),hi=di,gi=fi,pi=Object.prototype.hasOwnProperty;var mi=Ft,vi=Vo;var yi=function(e){return null!=e&&vi(e.length)&&!mi(e)},bi=ci,Si=function(e){if(!hi(e))return gi(e);var t=[];for(var n in Object(e))pi.call(e,n)&&"constructor"!=n&&t.push(n);return t},xi=yi;var wi=function(e){return xi(e)?bi(e):Si(e)},$i=$o,Fi=Do,Bi=wi;var Ti=function(e){return $i(e,Bi,Fi)},Ii=Object.prototype.hasOwnProperty;var Di=function(e,t,n,r,o,i){var a=1&n,l=Ti(e),s=l.length;if(s!=Ti(t).length&&!a)return!1;for(var c=s;c--;){var u=l[c];if(!(a?u in t:Ii.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var g=a;++c<s;){var p=e[u=l[c]],m=t[u];if(r)var v=a?r(m,p,u,t,e,i):r(p,m,u,e,t,i);if(!(void 0===v?p===m||o(p,m,n,r,i):v)){h=!1;break}g||(g="constructor"==u)}if(h&&!g){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},Hi=Pt(Ke,"DataView"),Oi=$n,Ci=Pt(Ke,"Promise"),ki=Pt(Ke,"Set"),Ei=Pt(Ke,"WeakMap"),zi=ut,Ri=Ht,Ai="[object Map]",Mi="[object Promise]",ji="[object Set]",Li="[object WeakMap]",_i="[object DataView]",Wi=Ri(Hi),Pi=Ri(Oi),Vi=Ri(Ci),Ni=Ri(ki),Yi=Ri(Ei),Ui=zi;(Hi&&Ui(new Hi(new ArrayBuffer(1)))!=_i||Oi&&Ui(new Oi)!=Ai||Ci&&Ui(Ci.resolve())!=Mi||ki&&Ui(new ki)!=ji||Ei&&Ui(new Ei)!=Li)&&(Ui=function(e){var t=zi(e),n="[object Object]"==t?e.constructor:void 0,r=n?Ri(n):"";if(r)switch(r){case Wi:return _i;case Pi:return Ai;case Vi:return Mi;case Ni:return ji;case Yi:return Li}return t});var Gi=no,Ji=uo,Zi=bo,Xi=Di,qi=Ui,Ki=Je,Qi=_o,ea=ti,ta="[object Arguments]",na="[object Array]",ra="[object Object]",oa=Object.prototype.hasOwnProperty;var ia=function(e,t,n,r,o,i){var a=Ki(e),l=Ki(t),s=a?na:qi(e),c=l?na:qi(t),u=(s=s==ta?ra:s)==ra,d=(c=c==ta?ra:c)==ra,f=s==c;if(f&&Qi(e)){if(!Qi(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new Gi),a||ea(e)?Ji(e,t,n,r,o,i):Zi(e,t,s,n,r,o,i);if(!(1&n)){var h=u&&oa.call(e,"__wrapped__"),g=d&&oa.call(t,"__wrapped__");if(h||g){var p=h?e.value():e,m=g?t.value():t;return i||(i=new Gi),o(p,m,n,r,i)}}return!!f&&(i||(i=new Gi),Xi(e,t,n,r,o,i))},aa=dt;var la=function e(t,n,r,o,i){return t===n||(null==t||null==n||!aa(t)&&!aa(n)?t!=t&&n!=n:ia(t,n,r,o,e,i))},sa=no,ca=la;var ua=St;var da=function(e){return e==e&&!ua(e)},fa=da,ha=wi;var ga=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},pa=function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){var s=(l=n[o])[0],c=e[s],u=l[1];if(a&&l[2]){if(void 0===c&&!(s in e))return!1}else{var d=new sa;if(r)var f=r(c,u,s,e,t,d);if(!(void 0===f?ca(u,c,3,r,d):f))return!1}}return!0},ma=function(e){for(var t=ha(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,fa(o)]}return t},va=ga;var ya=or,ba=Mo,Sa=Je,xa=Po,wa=Vo,$a=ar;var Fa=function(e,t){return null!=e&&t in Object(e)},Ba=function(e,t,n){for(var r=-1,o=(t=ya(t,e)).length,i=!1;++r<o;){var a=$a(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&wa(o)&&xa(a,o)&&(Sa(e)||ba(e))};var Ta=la,Ia=dr,Da=function(e,t){return null!=e&&Ba(e,t,Fa)},Ha=bt,Oa=da,Ca=ga,ka=ar;var Ea=cr;var za=function(e){return function(t){return null==t?void 0:t[e]}},Ra=function(e){return function(t){return Ea(t,e)}},Aa=bt,Ma=ar;var ja=function(e){var t=ma(e);return 1==t.length&&t[0][2]?va(t[0][0],t[0][1]):function(n){return n===e||pa(n,e,t)}},La=function(e,t){return Ha(e)&&Oa(t)?Ca(ka(e),t):function(n){var r=Ia(n,e);return void 0===r&&r===t?Da(n,e):Ta(t,r,3)}},_a=function(e){return e},Wa=Je,Pa=function(e){return Aa(e)?za(Ma(e)):Ra(e)};var Va=function(e){return"function"==typeof e?e:null==e?_a:"object"==typeof e?Wa(e)?La(e[0],e[1]):ja(e):Pa(e)},Na=Va,Ya=yi,Ua=wi;var Ga=function(e){return function(t,n,r){var o=Object(t);if(!Ya(t)){var i=Na(n);t=Ua(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:void 0}};var Ja=/\s/;var Za=function(e){for(var t=e.length;t--&&Ja.test(e.charAt(t)););return t},Xa=/^\s+/;var qa=function(e){return e?e.slice(0,Za(e)+1).replace(Xa,""):e},Ka=St,Qa=gt,el=/^[-+]0x[0-9a-f]+$/i,tl=/^0b[01]+$/i,nl=/^0o[0-7]+$/i,rl=parseInt;var ol=function(e){if("number"==typeof e)return e;if(Qa(e))return NaN;if(Ka(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ka(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=qa(e);var n=tl.test(e);return n||nl.test(e)?rl(e.slice(2),n?2:8):el.test(e)?NaN:+e},il=1/0;var al=function(e){return e?(e=ol(e))===il||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var ll=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1},sl=Va,cl=function(e){var t=al(e),n=t%1;return t==t?n?t-n:t:0},ul=Math.max;var dl=Ge(Ga((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:cl(n);return o<0&&(o=ul(r+o,0)),ll(e,sl(t),o)}))),fl=la;var hl=Ge((function(e,t){return fl(e,t)}));function gl(e){return()=>e}function pl(e){e()}function ml(e,t){return n=>e(t(n))}function vl(e,t){return()=>e(t)}function yl(e){return void 0!==e}function bl(){}function Sl(e,t){return t(e),e}function xl(e,t){return t(e)}function wl(...e){return e}function $l(e,t){return e(1,t)}function Fl(e,t){e(0,t)}function Bl(e){e(2)}function Tl(e){return e(4)}function Il(e,t){return $l(e,function(e,t){return n=>e(t,n)}(t,0))}function Dl(e,t){const n=e(1,(e=>{n(),t(e)}));return n}function Hl(e){let t,n;return r=>o=>{t=o,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function Ol(e,t){return e===t}function Cl(e=Ol){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function kl(e){return t=>n=>{e(n)&&t(n)}}function El(e){return t=>ml(t,e)}function zl(e){return t=>()=>{t(e)}}function Rl(e,...t){const n=function(...e){return t=>e.reduceRight(xl,t)}(...t);return(t,r)=>{switch(t){case 2:return void Bl(e);case 1:return $l(e,n(r))}}}function Al(e,t){return n=>r=>{n(t=e(t,r))}}function Ml(e){return t=>n=>{e>0?e--:t(n)}}function jl(e){let t,n=null;return r=>o=>{n=o,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function Ll(...e){const t=new Array(e.length);let n=0,r=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);$l(e,(e=>{const l=n;n|=a,t[i]=e,l!==o&&n===o&&r&&(r(),r=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};n===o?a():r=a}}function _l(e){let t=e;const n=Pl();return(e,r)=>{switch(e){case 0:t=r;break;case 1:r(t);break;case 4:return t}return n(e,r)}}function Wl(e,t){return Sl(_l(t),(t=>Il(e,t)))}function Pl(){const e=[];return(t,n)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(n)}));case 2:return void e.splice(0,e.length);case 1:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function Vl(e){return Sl(Pl(),(t=>Il(e,t)))}function Nl(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:Yl(),singleton:n}}const Yl=()=>Symbol();function Ul(...e){const t=Pl(),n=new Array(e.length);let r=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);$l(e,(e=>{n[i]=e,r|=a,r===o&&Fl(t,n)}))})),function(e,i){switch(e){case 2:return void Bl(t);case 1:return r===o&&i(n),$l(t,i)}}}function Gl(e,t=Ol){return Rl(e,Cl(t))}function Jl(...e){return function(t,n){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(pl)}}(...e.map((e=>$l(e,n))))}}}var Zl=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Zl||{});const Xl={0:"debug",3:"error",1:"log",2:"warn"},ql=Nl((()=>{const e=_l(3);return{log:_l(((t,n,r=1)=>{var o;r>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:Tl(e))&&console[Xl[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function Kl(e,t,n){return Ql(e,t,n).callbackRef}function Ql(e,t,n){const r=o.useRef(null);let i=e=>{};const a=o.useMemo((()=>typeof ResizeObserver<"u"?new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)})):null),[e,n]);return i=e=>{e&&t?(null==a||a.observe(e),r.current=e):(r.current&&(null==a||a.unobserve(r.current)),r.current=null)},{callbackRef:i,ref:r}}function es(e,t,n,r,i,a,l,s,c){const u=o.useCallback((n=>{const o=function(e,t,n,r){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const l=parseInt(o.dataset.index),s=parseFloat(o.dataset.knownSize),c=t(o,n);if(0===c&&r("Zero-sized element, this should not happen",{child:o},Zl.ERROR),c===s)continue;const u=i[i.length-1];0===i.length||u.size!==c||u.endIndex!==l-1?i.push({endIndex:l,size:c,startIndex:l}):i[i.length-1].endIndex++}return i}(n.children,t,s?"offsetWidth":"offsetHeight",i);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const u="window"===c.lastElementChild.dataset.viewportType;let d;u&&(d=c.ownerDocument.defaultView);const f=l?s?l.scrollLeft:l.scrollTop:u?s?d.scrollX||d.document.documentElement.scrollLeft:d.scrollY||d.document.documentElement.scrollTop:s?c.scrollLeft:c.scrollTop,h=l?s?l.scrollWidth:l.scrollHeight:u?s?d.document.documentElement.scrollWidth:d.document.documentElement.scrollHeight:s?c.scrollWidth:c.scrollHeight,g=l?s?l.offsetWidth:l.offsetHeight:u?s?d.innerWidth:d.innerHeight:s?c.offsetWidth:c.offsetHeight;r({scrollHeight:h,scrollTop:Math.max(f,0),viewportHeight:g}),null==a||a(s?ts("column-gap",getComputedStyle(n).columnGap,i):ts("row-gap",getComputedStyle(n).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,l,r,s]);return Ql(u,n,c)}function ts(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,Zl.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function ns(e,t,n){const r=o.useRef(null),i=o.useCallback((n=>{if(null==n||!n.offsetParent)return;const o=n.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),n=o.top-e.top;s=e.height-Math.max(0,n),a=n+t.scrollTop}else{const e=l.current.ownerDocument.defaultView;s=e.innerHeight-Math.max(0,o.top),a=o.top+e.scrollY}r.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(r.current)}),[e,t]),{callbackRef:a,ref:l}=Ql(i,!0,n),s=o.useCallback((()=>{i(l.current)}),[i,l]);return o.useEffect((()=>{var e;if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}{const t=null==(e=l.current)?void 0:e.ownerDocument.defaultView;return null==t||t.addEventListener("scroll",s),null==t||t.addEventListener("resize",s),()=>{null==t||t.removeEventListener("scroll",s),null==t||t.removeEventListener("resize",s)}}}),[s,t,l]),a}const rs=Nl((()=>{const e=Pl(),t=Pl(),n=_l(0),r=Pl(),o=_l(0),i=Pl(),a=Pl(),l=_l(0),s=_l(0),c=_l(0),u=_l(0),d=Pl(),f=Pl(),h=_l(!1),g=_l(!1),p=_l(!1);return Il(Rl(e,El((({scrollTop:e})=>e))),t),Il(Rl(e,El((({scrollHeight:e})=>e))),a),Il(t,o),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:s,footerHeight:u,headerHeight:l,horizontalDirection:g,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:d,scrollTop:t,skipAnimationFrameInResizeObserver:p,smoothScrollTargetReached:r,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),os={lvl:0};function is(e,t){const n=e.length;if(0===n)return[];let{index:r,value:o}=t(e[0]);const i=[];for(let a=1;a<n;a++){const{index:n,value:l}=t(e[a]);i.push({end:n-1,start:r,value:o}),r=n,o=l}return i.push({end:1/0,start:r,value:o}),i}function as(e){return e===os}function ls(e,t){if(!as(e))return t===e.k?e.v:t<e.k?ls(e.l,t):ls(e.r,t)}function ss(e,t,n="k"){if(as(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=ss(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return ss(e.l,t,n)}function cs(e,t,n){return as(e)?Ss(t,n,1):t===e.k?ms(e,{k:t,v:n}):t<e.k?xs(ms(e,{l:cs(e.l,t,n)})):xs(ms(e,{r:cs(e.r,t,n)}))}function us(){return os}function ds(e,t,n){if(as(e))return[];return function(e){return is(e,(({k:e,v:t})=>({index:e,value:t})))}(gs(e,ss(e,t)[0],n))}function fs(e,t){if(as(e))return os;const{k:n,l:r,r:o}=e;if(t===n){if(as(r))return o;if(as(o))return r;{const[t,n]=bs(r);return ps(ms(e,{k:t,l:vs(r),v:n}))}}return ps(ms(e,t<n?{l:fs(r,t)}:{r:fs(o,t)}))}function hs(e){return as(e)?[]:[...hs(e.l),{k:e.k,v:e.v},...hs(e.r)]}function gs(e,t,n){if(as(e))return[];const{k:r,l:o,r:i,v:a}=e;let l=[];return r>t&&(l=l.concat(gs(o,t,n))),r>=t&&r<=n&&l.push({k:r,v:a}),r<=n&&(l=l.concat(gs(i,t,n))),l}function ps(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(ys(t))return ws(ms(e,{lvl:n-1}));if(!as(t)&&!as(t.r))return ms(t.r,{l:ms(t,{r:t.r.l}),lvl:n,r:ms(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(ys(e))return $s(ms(e,{lvl:n-1}));if(as(r)||as(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,o=ys(t)?r.lvl-1:r.lvl;return ms(t,{l:ms(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:$s(ms(r,{l:t.r,lvl:o}))})}}function ms(e,t){return Ss(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function vs(e){return as(e.r)?e.l:ps(ms(e,{r:vs(e.r)}))}function ys(e){return as(e)||e.lvl>e.r.lvl}function bs(e){return as(e.r)?[e.k,e.v]:bs(e.r)}function Ss(e,t,n,r=os,o=os){return{k:e,l:r,lvl:n,r:o,v:t}}function xs(e){return $s(ws(e))}function ws(e){const{l:t}=e;return as(t)||t.lvl!==e.lvl?e:ms(t,{r:ms(e,{l:t.r})})}function $s(e){const{lvl:t,r:n}=e;return as(n)||as(n.r)||n.lvl!==t||n.r.lvl!==t?e:ms(n,{l:ms(e,{r:n.l}),lvl:t+1})}function Fs(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Bs(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Ts=Nl((()=>({recalcInProgress:_l(!1)})),[],{singleton:!0});function Is(e,t,n){return e[Ds(e,t,n)]}function Ds(e,t,n,r=0){let o=e.length-1;for(;r<=o;){const i=Math.floor((r+o)/2),a=n(e[i],t);if(0===a)return i;if(-1===a){if(o-r<2)return i-1;o=i-1}else{if(o===r)return i;r=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Hs(e,t){return Math.round(e.getBoundingClientRect()[t])}function Os(e){return!as(e.groupOffsetTree)}function Cs({index:e},t){return t===e?0:t<e?-1:1}function ks({offset:e},t){return t===e?0:t<e?-1:1}function Es(e,t,n){if(0===t.length)return 0;const{index:r,offset:o,size:i}=Is(t,e,Cs),a=e-r,l=i*a+(a-1)*n+o;return l>0?l+n:l}function zs(e,t){if(!Os(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function Rs(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=zs("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function As(e,t,n,r=0){return r>0&&(t=Math.max(t,Is(e,r,Cs).offset)),is(function(e,t,n,r){const o=Ds(e,t,r),i=Ds(e,n,r,o);return e.slice(o,i+1)}(e,t,n,ks),_s)}function Ms(e,[t,n,r,o]){t.length>0&&r("received item sizes",t,Zl.DEBUG);const i=e.sizeTree;let a=i,l=0;if(n.length>0&&as(i)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>cs(cs(t,n,e),n+1,r)),a)}else[a,l]=function(e,t){let n=as(e)?0:1/0;for(const r of t){const{endIndex:t,size:o,startIndex:i}=r;if(n=Math.min(n,i),as(e)){e=cs(e,0,o);continue}const a=ds(e,i-1,t+1);if(a.some(Ws(r)))continue;let l=!1,s=!1;for(const{end:n,start:r,value:i}of a)l?(t>=r||o===i)&&(e=fs(e,r)):(s=i!==o,l=!0),n>t&&t>=r&&i!==o&&(e=cs(e,t+1,i));s&&(e=cs(e,i,o))}return[e,n]}(a,t);if(a===i)return e;const{lastIndex:s,lastOffset:c,lastSize:u,offsetTree:d}=Ls(e.offsetTree,l,a,o);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>cs(e,t,Es(t,d,o))),us()),lastIndex:s,lastOffset:c,lastSize:u,offsetTree:d,sizeTree:a}}function js(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function Ls(e,t,n,r){let o=e,i=0,a=0,l=0,s=0;if(0!==t){s=Ds(o,t-1,Cs),l=o[s].offset;const e=ss(n,t-1);i=e[0],a=e[1],o.length&&o[s].size===ss(n,t)[1]&&(s-=1),o=o.slice(0,s+1)}else o=[];for(const{start:e,value:s}of ds(n,t,1/0)){const t=e-i,n=t*a+l+t*r;o.push({index:e,offset:n,size:s}),i=e,l=n,a=s}return{lastIndex:i,lastOffset:l,lastSize:a,offsetTree:o}}function _s(e){return{index:e.index,value:e}}function Ws(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const Ps={offsetHeight:"height",offsetWidth:"width"},Vs=Nl((([{log:e},{recalcInProgress:t}])=>{const n=Pl(),r=Pl(),o=Wl(r,0),i=Pl(),a=Pl(),l=_l(0),s=_l([]),c=_l(void 0),u=_l(void 0),d=_l(((e,t)=>Hs(e,Ps[t]))),f=_l(void 0),h=_l(0),g={groupIndices:[],groupOffsetTree:us(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:us()},p=Wl(Rl(n,Ll(s,e,h),Al(Ms,g),Cl()),g),m=Wl(Rl(s,Cl(),Al(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),El((({prev:e})=>e))),[]);Il(Rl(s,kl((e=>e.length>0)),Ll(p,h),El((([e,t,n])=>{const r=e.reduce(((e,r,o)=>cs(e,r,Es(r,t.offsetTree,n)||o)),us());return{...t,groupIndices:e,groupOffsetTree:r}}))),p),Il(Rl(r,Ll(p),kl((([e,{lastIndex:t}])=>e<t)),El((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),Il(c,u);const v=Wl(Rl(c,El((e=>void 0===e))),!0);Il(Rl(u,kl((e=>void 0!==e&&as(Tl(p).sizeTree))),El((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const y=Vl(Rl(n,Ll(p),Al((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:g}),El((e=>e.changed))));$l(Rl(l,Al(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),El((e=>e.diff))),(e=>{const{groupIndices:n}=Tl(p);if(e>0)Fl(t,!0),Fl(i,e+js(e,n));else if(e<0){const t=Tl(m);t.length>0&&(e-=js(-e,t)),Fl(a,e)}})),$l(Rl(l,Ll(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:l},Zl.ERROR)}));const b=Vl(i);Il(Rl(i,Ll(p),El((([e,t])=>{const n=t.groupIndices.length>0,r=[],o=t.lastSize;if(n){const n=ls(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],l=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+l-1,size:o,startIndex:e+1}),a++,i+=l+1}const l=hs(t.sizeTree);return i!==e&&l.shift(),l.reduce(((t,{k:n,v:r})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:o}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return hs(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),n);const S=Vl(Rl(a,Ll(p,h),El((([e,{offsetTree:t},n])=>Es(-e,t,n)))));return Il(Rl(a,Ll(p,h),El((([e,t,n])=>{if(t.groupIndices.length>0){if(as(t.sizeTree))return t;let r=us();const o=Tl(m);let i=0,a=0,l=0;for(;i<-e;){l=o[a];const e=o[a+1]-l-1;a++,i+=e+1}if(r=hs(t.sizeTree).reduce(((t,{k:n,v:r})=>cs(t,Math.max(0,n+e),r)),r),i!==-e){r=cs(r,0,ls(t.sizeTree,l));r=cs(r,1,ss(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...Ls(t.offsetTree,0,r,n)}}{const r=hs(t.sizeTree).reduce(((t,{k:n,v:r})=>cs(t,Math.max(0,n+e),r)),us());return{...t,sizeTree:r,...Ls(t.offsetTree,0,r,n)}}}))),p),{beforeUnshiftWith:b,data:f,defaultItemSize:u,firstItemIndex:l,fixedItemSize:c,gap:h,groupIndices:s,itemSize:d,listRefresh:y,shiftWith:a,shiftWithOffset:S,sizeRanges:n,sizes:p,statefulTotalCount:o,totalCount:r,trackItemSizes:v,unshiftWith:i}}),wl(ql,Ts),{singleton:!0});function Ns(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Ys=Nl((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:o}])=>{const i=Pl(),a=Pl(),l=Vl(Rl(i,El(Ns)));return Il(Rl(l,El((e=>e.totalCount))),n),Il(Rl(l,El((e=>e.groupIndices))),e),Il(Rl(Ul(o,t,r),kl((([e,t])=>Os(t))),El((([e,t,n])=>ss(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),Cl(),El((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),wl(Vs,rs)),Us=Nl((([{log:e}])=>{const t=_l(!1),n=Vl(Rl(t,kl((e=>e)),Cl()));return $l(t,(t=>{t&&Tl(e)("props updated",{},Zl.DEBUG)})),{didMount:n,propsReady:t}}),wl(ql),{singleton:!0}),Gs=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Js(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Gs)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Zs=Nl((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:l,scrollingInProgress:s,scrollTo:c,smoothScrollTargetReached:u,viewportHeight:d},{log:f}])=>{const h=Pl(),g=Pl(),p=_l(0);let m=null,v=null,y=null;function b(){m&&(m(),m=null),y&&(y(),y=null),v&&(clearTimeout(v),v=null),Fl(s,!1)}return Il(Rl(h,Ll(n,d,r,p,l,a,f),Ll(e,i,o),El((([[e,n,r,o,i,a,l,c],d,f,p])=>{const S=Js(e),{align:x,behavior:w,offset:$}=S,F=o-1,B=Rs(S,n,F);let T=Es(B,n.offsetTree,d)+a;"end"===x?(T+=f+ss(n.sizeTree,B)[1]-r+p,B===F&&(T+=l)):"center"===x?T+=(f+ss(n.sizeTree,B)[1]-r+p)/2:T-=i,$&&(T+=$);const I=t=>{b(),t?(c("retrying to scroll to",{location:e},Zl.DEBUG),Fl(h,e)):(Fl(g,!0),c("list did not change, scroll successful",{},Zl.DEBUG))};if(b(),"smooth"===w){let e=!1;y=$l(t,(t=>{e=e||t})),m=Dl(u,(()=>{I(e)}))}else m=Dl(Rl(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),I);return v=setTimeout((()=>{b()}),1200),Fl(s,!0),c("scrolling from index to",{behavior:w,index:B,top:T},Zl.DEBUG),{behavior:w,top:T}}))),c),{scrollTargetReached:g,scrollToIndex:h,topListHeight:p}}),wl(Vs,rs,ql),{singleton:!0});function Xs(e,t){0==e?t():requestAnimationFrame((()=>{Xs(e-1,t)}))}function qs(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const Ks=Nl((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const l=_l(!0),s=_l(0),c=_l(!0);return Il(Rl(a,Ll(s),kl((([e,t])=>!!t)),zl(!1)),l),Il(Rl(a,Ll(s),kl((([e,t])=>!!t)),zl(!1)),c),$l(Rl(Ul(t,a),Ll(l,n,e,c),kl((([[,e],t,{sizeTree:n},r,o])=>e&&(!as(n)||yl(r))&&!t&&!o)),Ll(s)),(([,e])=>{Dl(o,(()=>{Fl(c,!0)})),Xs(4,(()=>{Dl(r,(()=>{Fl(l,!0)})),Fl(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:s,scrolledToInitialItem:l}}),wl(Vs,rs,Zs,Us),{singleton:!0});function Qs(e,t){return Math.abs(e-t)<1.01}const ec="up",tc="down",nc={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},rc=Nl((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:o,viewportHeight:i}])=>{const a=_l(!1),l=_l(!0),s=Pl(),c=Pl(),u=_l(4),d=_l(0),f=Wl(Rl(Jl(Rl(Gl(o),Ml(1),zl(!0)),Rl(Gl(o),Ml(1),zl(!1),Hl(100))),Cl()),!1),h=Wl(Rl(Jl(Rl(n,zl(!0)),Rl(n,zl(!1),Hl(200))),Cl()),!1);Il(Rl(Ul(Gl(o),Gl(d)),El((([e,t])=>e<=t)),Cl()),l),Il(Rl(l,jl(50)),c);const g=Vl(Rl(Ul(r,Gl(i),Gl(t),Gl(e),Gl(u)),Al(((e,[{scrollHeight:t,scrollTop:n},r,o,i,a])=>{const l={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:l}}let s;return s=l.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:s,state:l}}),nc),Cl(((e,t)=>e&&e.atBottom===t.atBottom)))),p=Wl(Rl(r,Al(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(Qs(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const o=t-(n+r)<1;return e.scrollTop!==n&&o?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),kl((e=>e.changed)),El((e=>e.jump))),0);Il(Rl(g,El((e=>e.atBottom))),a),Il(Rl(a,jl(50)),s);const m=_l(tc);Il(Rl(r,El((({scrollTop:e})=>e)),Cl(),Al(((e,t)=>Tl(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?ec:tc,prevScrollTop:t}),{direction:tc,prevScrollTop:0}),El((e=>e.direction))),m),Il(Rl(r,jl(50),zl("none")),m);const v=_l(0);return Il(Rl(f,kl((e=>!e)),zl(0)),v),Il(Rl(o,jl(100),Ll(f),kl((([e,t])=>!!t)),Al((([e,t],[n])=>[t,n]),[0,0]),El((([e,t])=>t-e))),v),{atBottomState:g,atBottomStateChange:s,atBottomThreshold:u,atTopStateChange:c,atTopThreshold:d,isAtBottom:a,isAtTop:l,isScrolling:f,lastJumpDueToItemResize:p,scrollDirection:m,scrollVelocity:v}}),wl(rs)),oc="top",ic="bottom",ac="none";function lc(e,t,n){return"number"==typeof e?n===ec&&t===oc||n===tc&&t===ic?e:0:n===ec?t===oc?e.main:e.reverse:t===ic?e.main:e.reverse}function sc(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const cc=Nl((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:o}])=>{const i=Pl(),a=_l(0),l=_l(0),s=_l(0);return{increaseViewportBy:l,listBoundary:i,overscan:s,topListHeight:a,visibleRange:Wl(Rl(Ul(Gl(r),Gl(o),Gl(n),Gl(i,Bs),Gl(s),Gl(a),Gl(t),Gl(e),Gl(l)),El((([e,t,n,[r,o],i,a,l,s,c])=>{const u=e-s,d=a+l,f=Math.max(n-u,0);let h=ac;const g=sc(c,oc),p=sc(c,ic);return r-=s,o+=n+l,(r+=n+l)>e+d-g&&(h=ec),(o-=s)<e-f+t+p&&(h=tc),h!==ac?[Math.max(u-n-lc(i,oc,h)-g,0),u-f-l+t+lc(i,ic,h)+p]:null})),kl((e=>null!=e)),Cl(Bs)),[0,0])}}),wl(rs),{singleton:!0});const uc={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function dc(e,t,n,r,o,i){const{lastIndex:a,lastOffset:l,lastSize:s}=o;let c=0,u=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];u=t.offset+t.size}const d=n-a,f=c,h=l+d*s+(d-1)*r-u;return{bottom:u,firstItemIndex:i,items:hc(e,o,i),offsetBottom:h,offsetTop:c,top:f,topItems:hc(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function fc(e,t,n,r,o,i){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const l=e+a,s=qs(t,l);return dc(Array.from({length:l}).map(((e,t)=>({data:i[t+s],index:t+s,offset:0,size:0}))),[],l,o,n,r)}function hc(e,t,n){if(0===e.length)return[];if(!Os(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,o=e[e.length-1].index,i=[],a=ds(t.groupOffsetTree,r,o);let l,s=0;for(const r of e){let e;(!l||l.end<r.index)&&(l=a.shift(),s=t.groupIndices.indexOf(l.start)),e=r.index===l.start?{index:s,type:"group"}:{groupIndex:s,index:r.index-(s+1)+n},i.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return i}const gc=Nl((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:o},i,{listBoundary:a,topListHeight:l,visibleRange:s},{initialTopMostItemIndex:c,scrolledToInitialItem:u},{topListHeight:d},f,{didMount:h},{recalcInProgress:g}])=>{const p=_l([]),m=_l(0),v=Pl();Il(i.topItemsIndexes,p);const y=Wl(Rl(Ul(h,g,Gl(s,Bs),Gl(o),Gl(r),Gl(c),u,Gl(p),Gl(t),Gl(n),e),kl((([e,t,,n,,,,,,,r])=>{const o=r&&r.length!==n;return e&&!t&&!o})),El((([,,[e,t],n,r,o,i,a,l,s,c])=>{const u=r,{offsetTree:d,sizeTree:f}=u,h=Tl(m);if(0===n)return{...uc,totalCount:n};if(0===e&&0===t)return 0===h?{...uc,totalCount:n}:fc(h,o,r,l,s,c||[]);if(as(f))return h>0?null:dc(function(e,t,n){if(Os(t)){const r=zs(e,t);return[{index:ss(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(qs(o,n),u,c),[],n,s,u,l);const g=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of ds(f,e,t)){const o=r.value,i=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=i;e<=a;e++)g.push({data:null==c?void 0:c[e],index:e,offset:n,size:o}),n+=o}}if(!i)return dc([],g,n,s,u,l);const p=a.length>0?a[a.length-1]+1:0,v=As(d,e,t,p);if(0===v.length)return null;const y=n-1;return dc(Sl([],(n=>{for(const r of v){const o=r.value;let i=o.offset,a=r.start;const l=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+s)/(l+s));const t=a-r.start;i+=t*l+t*s}a<p&&(i+=(p-a)*l,a=p);const u=Math.min(r.end,y);for(let e=a;e<=u&&!(i>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:i,size:l}),i+=l+s}})),g,n,s,u,l)})),kl((e=>null!==e)),Cl()),uc);Il(Rl(e,kl(yl),El((e=>null==e?void 0:e.length))),o),Il(Rl(y,El((e=>e.topListHeight))),d),Il(d,l),Il(Rl(y,El((e=>[e.top,e.bottom]))),a),Il(Rl(y,El((e=>e.items))),v);const b=Vl(Rl(y,kl((({items:e})=>e.length>0)),Ll(o,e),kl((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),El((([,e,t])=>[e-1,t])),Cl(Bs),El((([e])=>e)))),S=Vl(Rl(y,jl(200),kl((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),El((({items:e})=>e[0].index)),Cl())),x=Vl(Rl(y,kl((({items:e})=>e.length>0)),El((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),Cl(Fs)));return{endReached:b,initialItemCount:m,itemsRendered:v,listState:y,rangeChanged:x,startReached:S,topItemsIndexes:p,...f}}),wl(Vs,Ys,cc,Ks,Zs,rc,Us,Ts),{singleton:!0}),pc=Nl((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:o}])=>{const i=Pl(),a=Wl(Rl(Ul(n,e,r,t,o),El((([e,t,n,r,o])=>e+t+n+r+o.offsetBottom+o.bottom))),0);return Il(Gl(a),i),{totalListHeight:a,totalListHeightChanged:i}}),wl(rs,gc),{singleton:!0}),mc=Nl((([{viewportHeight:e},{totalListHeight:t}])=>{const n=_l(!1);return{alignToBottom:n,paddingTopAddition:Wl(Rl(Ul(n,e,t),kl((([e])=>e)),El((([,e,t])=>Math.max(0,e-t))),jl(0),Cl()),0)}}),wl(rs,pc),{singleton:!0});function vc(e){return!!e&&("smooth"===e?"smooth":"auto")}const yc=Nl((([{listRefresh:e,totalCount:t,fixedItemSize:n},{atBottomState:r,isAtBottom:o},{scrollToIndex:i},{scrolledToInitialItem:a},{didMount:l,propsReady:s},{log:c},{scrollingInProgress:u}])=>{const d=_l(!1),f=Pl();let h=null;function g(e){Fl(i,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=Dl(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(Tl(c)("scrolling to bottom due to increased size",{},Zl.DEBUG),g("auto"))}));setTimeout(t,100)}return $l(Rl(Ul(Rl(Gl(t),Ml(1)),l),Ll(Gl(d),o,a,u),El((([[e,t],n,r,o,i])=>{let a=t&&o,l="auto";return a&&(l=((e,t)=>"function"==typeof e?vc(e(t)):t&&vc(e))(n,r||i),a=a&&!!l),{followOutputBehavior:l,shouldFollow:a,totalCount:e}})),kl((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),Tl(n)?requestAnimationFrame((()=>{Tl(c)("following output to ",{totalCount:r},Zl.DEBUG),g(t)})):h=Dl(e,(()=>{Tl(c)("following output to ",{totalCount:r},Zl.DEBUG),g(t),h=null}))})),$l(Rl(Ul(Gl(d),t,s),kl((([e,,t])=>e&&t)),Al((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),kl((({refreshed:e})=>e)),Ll(d,t)),(([,e])=>{Tl(a)&&p(!1!==e)})),$l(f,(()=>{p(!1!==Tl(d))})),$l(Ul(Gl(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&g("auto")})),{autoscrollToBottom:f,followOutput:d}}),wl(Vs,rc,Zs,Ks,Us,ql,rs)),bc=Nl((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:l}])=>(Il(Rl(l,Ll(i),kl((([,e])=>0!==e)),Ll(o,r,t,n,e),El((([[,e],t,n,r,o,i=[]])=>fc(e,t,n,r,o,i)))),a),{})),wl(Vs,Ks,gc,Us),{singleton:!0}),Sc=Nl((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=_l(0);return $l(Rl(e,Ll(r),kl((([,e])=>0!==e)),El((([,e])=>({top:e})))),(e=>{Dl(Rl(n,Ml(1),kl((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Fl(t,e)}))}))})),{initialScrollTop:r}}),wl(Us,rs,gc),{singleton:!0}),xc=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=n?n:"start",behavior:r}:e>i?{...o,align:null!=n?n:"end",behavior:r}:null,wc=Nl((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:l,viewportHeight:s},{scrollToIndex:c}])=>{const u=Pl();return Il(Rl(u,Ll(t,s,n,i,o,r,l),Ll(e),El((([[e,t,n,r,o,i,l,s],c])=>{const{align:u,behavior:d,calculateViewLocation:f=xc,done:h,...g}=e,p=Rs(e,t,r-1),m=Es(p,t.offsetTree,c)+o+i,v=f({itemBottom:m+ss(t.sizeTree,p)[1],itemTop:m,locationParams:{align:u,behavior:d,...g},viewportBottom:s+n-l,viewportTop:s+i});return v?h&&Dl(Rl(a,kl((e=>!e)),Ml(Tl(a)?1:2)),h):h&&h(),v})),kl((e=>null!==e))),c),{scrollIntoView:u}}),wl(Vs,rs,Zs,gc,ql),{singleton:!0}),$c=Nl((([{scrollVelocity:e}])=>{const t=_l(!1),n=Pl(),r=_l(!1);return Il(Rl(e,Ll(r,t,n),kl((([e,t])=>!!t)),El((([e,t,n,r])=>{const{enter:o,exit:i}=t;if(n){if(i(e,r))return!1}else if(o(e,r))return!0;return n})),Cl()),t),$l(Rl(Ul(t,e,n),Ll(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),wl(rc),{singleton:!0}),Fc=Nl((([{scrollContainerState:e,scrollTo:t}])=>{const n=Pl(),r=Pl(),o=Pl(),i=_l(!1),a=_l(void 0);return Il(Rl(Ul(n,r),El((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),Il(Rl(t,Ll(r),El((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:n,windowScrollTo:o,windowViewportRect:r}}),wl(rs)),Bc=Nl((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:l,windowViewportRect:s}])=>{const c=Pl(),u=_l(void 0),d=_l(null),f=_l(null);return Il(l,d),Il(s,f),$l(Rl(c,Ll(t,r,a,d,f,n)),(([e,t,n,r,o,i,a])=>{const l=function(e){return hs(e).map((({k:e,v:t},n,r)=>{const o=r[n+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==o&&null!==i&&(n=o.scrollTop-i.offsetTop),e({ranges:l,scrollTop:n-=a})})),Il(Rl(u,kl(yl),El(Tc)),o),Il(Rl(i,Ll(u),kl((([,e])=>void 0!==e)),Cl(),El((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:u}}),wl(Vs,rs,Ks,Us,Fc));function Tc(e){return{align:"start",index:0,offset:e.scrollTop}}const Ic=Nl((([{topItemsIndexes:e}])=>{const t=_l(0);return Il(Rl(t,kl((e=>e>=0)),El((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),wl(gc));function Dc(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const Hc=Dc((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Oc=Nl((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:l},{listState:s},{beforeUnshiftWith:c,gap:u,shiftWithOffset:d,sizes:f},{log:h},{recalcInProgress:g}])=>{const p=Vl(Rl(s,Ll(a),Al((([,e,t,n],[{bottom:r,items:o,offsetBottom:i,totalCount:a},l])=>{const s=r+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=s-n,0!==c&&(c+=l))),[c,o,a,s]}),[0,[],0,0]),kl((([e])=>0!==e)),Ll(r,l,n,o,h,g),kl((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===ec)),El((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Zl.DEBUG),e)))));function m(n){n>0?(Fl(t,{behavior:"auto",top:-n}),Fl(e,0)):(Fl(e,0),Fl(t,{behavior:"auto",top:-n}))}return $l(Rl(p,Ll(e,i)),(([t,n,r])=>{r&&Hc()?Fl(e,n-t):m(-t)})),$l(Rl(Ul(Wl(i,!1),e,g),kl((([e,t,n])=>!e&&!n&&0!==t)),El((([e,t])=>t)),jl(1)),m),Il(Rl(d,El((e=>({top:-e})))),t),$l(Rl(c,Ll(f,u),El((([e,{groupIndices:t,lastSize:n,sizeTree:r},o])=>{function i(e){return e*(n+o)}if(0===t.length)return i(e);{let n=0;const o=ls(r,0);let a=0,l=0;for(;a<e;){a++,n+=o;let r=t.length===l+1?1/0:t[l+1]-t[l]-1;a+r>e&&(n-=o,r=e-a+1),a+=r,n+=i(r),l++}return n}}))),(n=>{Fl(e,n),requestAnimationFrame((()=>{Fl(t,{top:n}),requestAnimationFrame((()=>{Fl(e,0),Fl(g,!1)}))}))})),{deviation:e}}),wl(rs,rc,gc,Vs,ql,Ts)),Cc=Nl((([e,t,n,r,o,i,a,l,s,c])=>({...e,...t,...n,...r,...o,...i,...a,...l,...s,...c})),wl(cc,bc,Us,$c,pc,Sc,mc,Fc,wc,ql)),kc=Nl((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:o,groupIndices:i,itemSize:a,sizeRanges:l,sizes:s,statefulTotalCount:c,totalCount:u,trackItemSizes:d},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:g},p,m,v,{listState:y,topItemsIndexes:b,...S},{scrollToIndex:x},w,{topItemCount:$},{groupCounts:F},B])=>(Il(S.rangeChanged,B.scrollSeekRangeChanged),Il(Rl(B.windowViewportRect,El((e=>e.visibleHeight))),p.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:o,groupCounts:F,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:g,sizeRanges:l,topItemCount:$,topItemsIndexes:b,totalCount:u,...v,groupIndices:i,itemSize:a,listState:y,scrollToIndex:x,statefulTotalCount:c,trackItemSizes:d,...S,...B,...p,sizes:s,...m})),wl(Vs,Ks,rs,Bc,yc,gc,Zs,Oc,Ic,Ys,Cc));function Ec(e,t){const n={},r={};let o=0;const i=e.length;for(;o<i;)r[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const zc=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Rc(e,n,r){const i=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),l=Object.keys(n.methods||{}),s=Object.keys(n.events||{}),c=o.createContext({});function u(e,t){e.propsReady&&Fl(e.propsReady,!1);for(const r of i){Fl(e[n.required[r]],t[r])}for(const r of a)if(r in t){Fl(e[n.optional[r]],t[r])}e.propsReady&&Fl(e.propsReady,!0)}function d(e){return s.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?n===i?void 0:(r(),n=i,t=$l(e,i),t):(r(),bl);case 2:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const f=o.forwardRef(((f,h)=>{const{children:g,...p}=f,[m]=o.useState((()=>Sl(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(r.map((e=>n(e))));return i&&t.set(o,a),a};return n(e)}(e),(e=>{u(e,p)})))),[v]=o.useState(vl(d,m));zc((()=>{for(const e of s)e in p&&$l(v[e],p[e]);return()=>{Object.values(v).map(Bl)}}),[p,v,m]),zc((()=>{u(m,p)})),o.useImperativeHandle(h,gl(function(e){return l.reduce(((t,r)=>(t[r]=t=>{Fl(e[n.methods[r]],t)},t)),{})}(m)));const y=r;return t(c.Provider,{value:m,children:r?t(y,{...Ec([...i,...a,...s],p),children:g}):g})}));return{Component:f,useEmitter:(e,t)=>{const n=o.useContext(c)[e];zc((()=>$l(n,t)),[t,n])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],n=o.useCallback((e=>$l(t,e)),[t]);return o.useSyncExternalStore(n,(()=>Tl(t)),(()=>Tl(t)))}:e=>{const t=o.useContext(c)[e],[n,r]=o.useState(vl(Tl,t));return zc((()=>$l(t,(e=>{e!==n&&r(gl(e))}))),[t,n]),n},usePublisher:e=>{const t=o.useContext(c);return o.useCallback((n=>{Fl(t[e],n)}),[t,e])}}}const Ac=o.createContext(void 0),Mc=o.createContext(void 0),jc=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Lc(e){return"self"in e}function _c(e,t,n,r=bl,i,a){const l=o.useRef(null),s=o.useRef(null),c=o.useRef(null),u=o.useCallback((n=>{let r,o,i;const l=n.target;if(function(e){return"body"in e}(l)||Lc(l)){const e=Lc(l)?l:l.defaultView;i=a?e.scrollX:e.scrollY,r=a?e.document.documentElement.scrollWidth:e.document.documentElement.scrollHeight,o=a?e.innerWidth:e.innerHeight}else i=a?l.scrollLeft:l.scrollTop,r=a?l.scrollWidth:l.scrollHeight,o=a?l.offsetWidth:l.offsetHeight;const u=()=>{e({scrollHeight:r,scrollTop:Math.max(i,0),viewportHeight:o})};n.suppressFlushSync?u():$.flushSync(u),null!==s.current&&(i===s.current||i<=0||i===r-o)&&(s.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t,a]);return o.useEffect((()=>{const e=i||l.current;return r(i||l.current),u({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",u,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",u)}}),[l,u,n,r,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),l.current.scrollBy(e)},scrollerRef:l,scrollToCallback:function(n){const r=l.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const o="smooth"===n.behavior;let i,u,d;Lc(r)?(u=Math.max(Hs(r.document.documentElement,a?"width":"height"),a?r.document.documentElement.scrollWidth:r.document.documentElement.scrollHeight),i=a?r.innerWidth:r.innerHeight,d=a?window.scrollX:window.scrollY):(u=r[a?"scrollWidth":"scrollHeight"],i=Hs(r,a?"width":"height"),d=r[a?"scrollLeft":"scrollTop"]);const f=u-i;if(n.top=Math.ceil(Math.max(Math.min(f,n.top),0)),Qs(i,u)||n.top===d)return e({scrollHeight:u,scrollTop:d,viewportHeight:i}),void(o&&t(!0));o?(s.current=n.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,s.current=null,t(!0)}),1e3)):s.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const Wc="-webkit-sticky",Pc="sticky",Vc=Dc((()=>{if(typeof document>"u")return Pc;const e=document.createElement("div");return e.style.position=Wc,e.style.position===Wc?Wc:Pc}));function Nc(e){return e}const Yc=Nl((()=>{const e=_l((e=>`Item ${e}`)),t=_l(null),n=_l((e=>`Group ${e}`)),r=_l({}),o=_l(Nc),i=_l("div"),a=_l(bl),l=(e,t=null)=>Wl(Rl(r,El((t=>t[e])),Cl()),t);return{components:r,computeItemKey:o,context:t,EmptyPlaceholder:l("EmptyPlaceholder"),FooterComponent:l("Footer"),GroupComponent:l("Group","div"),groupContent:n,HeaderComponent:l("Header"),HeaderFooterTag:i,ItemComponent:l("Item","div"),itemContent:e,ListComponent:l("List","div"),ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder"),TopItemListComponent:l("TopItemList")}})),Uc=Nl((([e,t])=>({...e,...t})),wl(kc,Yc)),Gc=({height:e})=>t("div",{style:{height:e}}),Jc={overflowAnchor:"none",position:Vc(),zIndex:1},Zc={overflowAnchor:"none"},Xc={...Zc,display:"inline-block",height:"100%"},qc=o.memo((function({showTopList:e=!1}){const n=gu("listState"),r=pu("sizeRanges"),i=gu("useWindowScroll"),a=gu("customScrollParent"),l=pu("windowScrollContainerState"),s=pu("scrollContainerState"),c=a||i?l:s,u=gu("itemContent"),d=gu("context"),f=gu("groupContent"),h=gu("trackItemSizes"),g=gu("itemSize"),m=gu("log"),v=pu("gap"),y=gu("horizontalDirection"),{callbackRef:b}=es(r,g,h,e?bl:c,m,v,a,y,gu("skipAnimationFrameInResizeObserver")),[S,x]=o.useState(0);hu("deviation",(e=>{S!==e&&x(e)}));const w=gu("EmptyPlaceholder"),$=gu("ScrollSeekPlaceholder")||Gc,F=gu("ListComponent"),B=gu("ItemComponent"),T=gu("GroupComponent"),I=gu("computeItemKey"),D=gu("isSeeking"),H=gu("groupIndices").length>0,O=gu("alignToBottom"),C=gu("initialItemFinalLocationReached"),k=e?{}:{boxSizing:"border-box",...y?{display:"inline-block",height:"100%",marginLeft:0!==S?S:O?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==S?S:O?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...C?{}:{visibility:"hidden"}};return!e&&0===n.totalCount&&w?t(w,{...nu(w,d)}):t(F,{...nu(F,d),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:b,style:k,children:(e?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=I(t+n.firstItemIndex,e.data,d);return D?p($,{...nu($,d),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?p(T,{...nu(T,d),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:Jc},f(e.index,d)):p(B,{...nu(B,d),...ru(B,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:y?Xc:Zc},H?u(e.index,e.groupIndex,e.data,d):u(e.index,e.data,d))}))})})),Kc={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Qc={outline:"none",overflowX:"auto",position:"relative"},eu=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),tu={position:Vc(),top:0,width:"100%",zIndex:1};function nu(e,t){if("string"!=typeof e)return{context:t}}function ru(e,t){return{item:"string"==typeof e?void 0:t}}const ou=o.memo((function(){const e=gu("HeaderComponent"),n=pu("headerHeight"),r=gu("HeaderFooterTag"),i=Kl(o.useMemo((()=>e=>{n(Hs(e,"height"))}),[n]),!0,gu("skipAnimationFrameInResizeObserver")),a=gu("context");return e?t(r,{ref:i,children:t(e,{...nu(e,a)})}):null})),iu=o.memo((function(){const e=gu("FooterComponent"),n=pu("footerHeight"),r=gu("HeaderFooterTag"),i=Kl(o.useMemo((()=>e=>{n(Hs(e,"height"))}),[n]),!0,gu("skipAnimationFrameInResizeObserver")),a=gu("context");return e?t(r,{ref:i,children:t(e,{...nu(e,a)})}):null}));function au({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:o,style:i,...a}){const l=r("scrollContainerState"),s=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),u=n("scrollerRef"),d=n("context"),f=n("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:g,scrollToCallback:p}=_c(l,c,s,u,void 0,f);return e("scrollTo",p),e("scrollBy",h),t(s,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:g,style:{...f?Qc:Kc,...i},tabIndex:0,...a,...nu(s,d),children:o})}))}function lu({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:i,style:a,...l}){const s=r("windowScrollContainerState"),c=n("ScrollerComponent"),u=r("smoothScrollTargetReached"),d=n("totalListHeight"),f=n("deviation"),h=n("customScrollParent"),g=n("context"),p=o.useRef(null),m=n("scrollerRef"),{scrollByCallback:v,scrollerRef:y,scrollToCallback:b}=_c(s,u,c,m,h);return jc((()=>{var e;return y.current=h||(null==(e=p.current)?void 0:e.ownerDocument.defaultView),()=>{y.current=null}}),[y,h]),e("windowScrollTo",b),e("scrollBy",v),t(c,{ref:p,"data-virtuoso-scroller":!0,style:{position:"relative",...a,...0!==d?{height:d+f}:{}},...l,...nu(c,g),children:i})}))}const su=({children:e})=>{const n=o.useContext(Ac),r=pu("viewportHeight"),i=pu("fixedItemHeight"),a=gu("alignToBottom"),l=gu("horizontalDirection"),s=Kl(o.useMemo((()=>ml(r,(e=>Hs(e,l?"width":"height")))),[r,l]),!0,gu("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{n&&(r(n.viewportHeight),i(n.itemHeight))}),[n,r,i]),t("div",{"data-viewport-type":"element",ref:s,style:eu(a),children:e})},cu=({children:e})=>{const n=o.useContext(Ac),r=pu("windowViewportRect"),i=pu("fixedItemHeight"),a=gu("customScrollParent"),l=ns(r,a,gu("skipAnimationFrameInResizeObserver")),s=gu("alignToBottom");return o.useEffect((()=>{n&&(i(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,i]),t("div",{"data-viewport-type":"window",ref:l,style:eu(s),children:e})},uu=({children:e})=>{const n=gu("TopItemListComponent")||"div",r=gu("headerHeight"),o={...tu,marginTop:`${r}px`},i=gu("context");return t(n,{style:o,...nu(n,i),children:e})},du=o.memo((function(n){const r=gu("useWindowScroll"),o=gu("topItemsIndexes").length>0,i=gu("customScrollParent"),a=gu("context"),l=i||r?vu:mu,s=i||r?cu:su;return e(l,{...n,...nu(l,a),children:[o&&t(uu,{children:t(qc,{showTopList:!0})}),e(s,{children:[t(ou,{}),t(qc,{}),t(iu,{})]})]})})),{Component:fu,useEmitter:hu,useEmitterValue:gu,usePublisher:pu}=Rc(Uc,{required:{},optional:{restoreStateFrom:"restoreStateFrom",context:"context",followOutput:"followOutput",itemContent:"itemContent",groupContent:"groupContent",overscan:"overscan",increaseViewportBy:"increaseViewportBy",totalCount:"totalCount",groupCounts:"groupCounts",topItemCount:"topItemCount",firstItemIndex:"firstItemIndex",initialTopMostItemIndex:"initialTopMostItemIndex",components:"components",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",computeItemKey:"computeItemKey",defaultItemHeight:"defaultItemHeight",fixedItemHeight:"fixedItemHeight",itemSize:"itemSize",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"HeaderFooterTag",data:"data",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",alignToBottom:"alignToBottom",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",horizontalDirection:"horizontalDirection",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver"},methods:{scrollToIndex:"scrollToIndex",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollBy:"scrollBy",autoscrollToBottom:"autoscrollToBottom",getState:"getState"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",totalListHeightChanged:"totalListHeightChanged",itemsRendered:"itemsRendered",groupIndices:"groupIndices"}},du),mu=au({useEmitter:hu,useEmitterValue:gu,usePublisher:pu}),vu=lu({useEmitter:hu,useEmitterValue:gu,usePublisher:pu}),yu=fu,bu={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Su={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:xu,floor:wu,max:$u,min:Fu,round:Bu}=Math;function Tu(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function Iu(e,t){return e&&e.width===t.width&&e.height===t.height}function Du(e,t){return e&&e.column===t.column&&e.row===t.row}const Hu=Nl((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:l,scrollTo:s,scrollTop:c,smoothScrollTargetReached:u,viewportHeight:d},f,h,{didMount:g,propsReady:p},{customScrollParent:m,useWindowScroll:v,windowScrollContainerState:y,windowScrollTo:b,windowViewportRect:S},x])=>{const w=_l(0),$=_l(0),F=_l(bu),B=_l({height:0,width:0}),T=_l({height:0,width:0}),I=Pl(),D=Pl(),H=_l(0),O=_l(null),C=_l({column:0,row:0}),k=Pl(),E=Pl(),z=_l(!1),R=_l(0),A=_l(!0),M=_l(!1),j=_l(!1);$l(Rl(g,Ll(R),kl((([e,t])=>!!t))),(()=>{Fl(A,!1)})),$l(Rl(Ul(g,A,T,B,R,M),kl((([e,t,n,r,,o])=>e&&!t&&0!==n.height&&0!==r.height&&!o))),(([,,,,e])=>{Fl(M,!0),Xs(1,(()=>{Fl(I,e)})),Dl(Rl(c),(()=>{Fl(t,[0,0]),Fl(A,!0)}))})),Il(Rl(E,kl((e=>null!=e&&e.scrollTop>0)),zl(0)),$),$l(Rl(g,Ll(E),kl((([,e])=>null!=e))),(([,e])=>{e&&(Fl(B,e.viewport),Fl(T,e.item),Fl(C,e.gap),e.scrollTop>0&&(Fl(z,!0),Dl(Rl(c,Ml(1)),(e=>{Fl(z,!1)})),Fl(s,{top:e.scrollTop})))})),Il(Rl(B,El((({height:e})=>e))),d),Il(Rl(Ul(Gl(B,Iu),Gl(T,Iu),Gl(C,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Gl(c)),El((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),k),Il(Rl(Ul(Gl(w),r,Gl(C,Du),Gl(T,Iu),Gl(B,Iu),Gl(O),Gl($),Gl(z),Gl(A),Gl(R)),kl((([,,,,,,,e])=>!e)),El((([e,[t,n],r,o,i,a,l,,s,c])=>{const{column:u,row:d}=r,{height:f,width:h}=o,{width:g}=i;if(0===l&&(0===e||0===g))return bu;if(0===h){const t=qs(c,e);return function(e){return{...Su,items:e}}(Tu(t,t+Math.max(l-1,0),a))}const p=Ou(g,h,u);let m,v;s?0===t&&0===n&&l>0?(m=0,v=l-1):(m=p*wu((t+d)/(f+d)),v=p*xu((n+d)/(f+d))-1,v=Fu(e-1,$u(v,p-1)),m=Fu(v,$u(0,m))):(m=0,v=-1);const y=Tu(m,v,a),{bottom:b,top:S}=Cu(i,r,o,y),x=xu(e/p);return{bottom:b,itemHeight:f,items:y,itemWidth:h,offsetBottom:x*f+(x-1)*d-b,offsetTop:S,top:S}}))),F),Il(Rl(O,kl((e=>null!==e)),El((e=>e.length))),w),Il(Rl(Ul(B,T,F,C),kl((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),El((([e,t,{items:n},r])=>{const{bottom:o,top:i}=Cu(e,r,t,n);return[i,o]})),Cl(Bs)),t);const L=_l(!1);Il(Rl(c,Ll(L),El((([e,t])=>t||0!==e))),L);const _=Vl(Rl(Ul(F,w),kl((([{items:e}])=>e.length>0)),Ll(L),kl((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),El((([[,e]])=>e-1)),Cl())),W=Vl(Rl(Gl(F),kl((({items:e})=>e.length>0&&0===e[0].index)),zl(0),Cl())),P=Vl(Rl(Gl(F),Ll(z),kl((([{items:e},t])=>e.length>0&&!t)),El((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Cl(Fs),jl(0)));Il(P,h.scrollSeekRangeChanged),Il(Rl(I,Ll(B,T,w,C),El((([e,t,n,r,o])=>{const i=Js(e),{align:a,behavior:l,offset:s}=i;let c=i.index;"LAST"===c&&(c=r-1),c=$u(0,c,Fu(r-1,c));let u=ku(t,o,n,c);return"end"===a?u=Bu(u-t.height+n.height):"center"===a&&(u=Bu(u-t.height/2+n.height/2)),s&&(u+=s),{behavior:l,top:u}}))),s);const V=Wl(Rl(F,El((e=>e.offsetBottom+e.bottom))),0);return Il(Rl(S,El((e=>({height:e.visibleHeight,width:e.visibleWidth})))),B),{customScrollParent:m,data:O,deviation:H,footerHeight:o,gap:C,headerHeight:i,increaseViewportBy:e,initialItemCount:$,itemDimensions:T,overscan:n,restoreStateFrom:E,scrollBy:a,scrollContainerState:l,scrollHeight:D,scrollTo:s,scrollToIndex:I,scrollTop:c,smoothScrollTargetReached:u,totalCount:w,useWindowScroll:v,viewportDimensions:B,windowScrollContainerState:y,windowScrollTo:b,windowViewportRect:S,...h,gridState:F,horizontalDirection:j,initialTopMostItemIndex:R,totalListHeight:V,...f,endReached:_,propsReady:p,rangeChanged:P,startReached:W,stateChanged:k,stateRestoreInProgress:z,...x}}),wl(cc,rs,rc,$c,Us,Fc,ql));function Ou(e,t,n){return $u(1,wu((e+n)/(wu(t)+n)))}function Cu(e,t,n,r){const{height:o}=n;if(void 0===o||0===r.length)return{bottom:0,top:0};const i=ku(e,t,n,r[0].index);return{bottom:ku(e,t,n,r[r.length-1].index)+o,top:i}}function ku(e,t,n,r){const o=Ou(e.width,n.width,t.column),i=wu(r/o),a=i*n.height+$u(0,i-1)*t.row;return a>0?a+t.row:a}const Eu=Nl((()=>{const e=_l((e=>`Item ${e}`)),t=_l({}),n=_l(null),r=_l("virtuoso-grid-item"),o=_l("virtuoso-grid-list"),i=_l(Nc),a=_l("div"),l=_l(bl),s=(e,n=null)=>Wl(Rl(t,El((t=>t[e])),Cl()),n),c=_l(!1),u=_l(!1);return Il(Gl(u),c),{components:t,computeItemKey:i,context:n,FooterComponent:s("Footer"),HeaderComponent:s("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:s("Item","div"),itemContent:e,listClassName:o,ListComponent:s("List","div"),readyStateChanged:c,reportReadyState:u,ScrollerComponent:s("Scroller","div"),scrollerRef:l,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder","div")}})),zu=Nl((([e,t])=>({...e,...t})),wl(Hu,Eu)),Ru=o.memo((function(){const e=Vu("gridState"),n=Vu("listClassName"),r=Vu("itemClassName"),i=Vu("itemContent"),a=Vu("computeItemKey"),l=Vu("isSeeking"),s=Nu("scrollHeight"),c=Vu("ItemComponent"),u=Vu("ListComponent"),d=Vu("ScrollSeekPlaceholder"),f=Vu("context"),h=Nu("itemDimensions"),g=Nu("gap"),m=Vu("log"),v=Vu("stateRestoreInProgress"),y=Nu("reportReadyState"),b=Kl(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;s(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();h({height:e,width:t})}g({column:Gu("column-gap",getComputedStyle(e).columnGap,m),row:Gu("row-gap",getComputedStyle(e).rowGap,m)})}),[s,h,g,m]),!0,!1);return jc((()=>{e.itemHeight>0&&e.itemWidth>0&&y(!0)}),[e]),v?null:t(u,{className:n,ref:b,...nu(u,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((n=>{const o=a(n.index,n.data,f);return l?t(d,{...nu(d,f),height:e.itemHeight,index:n.index,width:e.itemWidth},o):p(c,{...nu(c,f),className:r,"data-index":n.index,key:o},i(n.index,n.data,f))}))})})),Au=o.memo((function(){const e=Vu("HeaderComponent"),n=Nu("headerHeight"),r=Vu("headerFooterTag"),i=Kl(o.useMemo((()=>e=>{n(Hs(e,"height"))}),[n]),!0,!1),a=Vu("context");return e?t(r,{ref:i,children:t(e,{...nu(e,a)})}):null})),Mu=o.memo((function(){const e=Vu("FooterComponent"),n=Nu("footerHeight"),r=Vu("headerFooterTag"),i=Kl(o.useMemo((()=>e=>{n(Hs(e,"height"))}),[n]),!0,!1),a=Vu("context");return e?t(r,{ref:i,children:t(e,{...nu(e,a)})}):null})),ju=({children:e})=>{const n=o.useContext(Mc),r=Nu("itemDimensions"),i=Nu("viewportDimensions"),a=Kl(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{n&&(i({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,i,r]),t("div",{ref:a,style:eu(!1),children:e})},Lu=({children:e})=>{const n=o.useContext(Mc),r=Nu("windowViewportRect"),i=Nu("itemDimensions"),a=Vu("customScrollParent"),l=ns(r,a,!1);return o.useEffect((()=>{n&&(i({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,i]),t("div",{ref:l,style:eu(!1),children:e})},_u=o.memo((function({...n}){const r=Vu("useWindowScroll"),o=Vu("customScrollParent"),i=o||r?Uu:Yu,a=o||r?Lu:ju,l=Vu("context");return t(i,{...n,...nu(i,l),children:e(a,{children:[t(Au,{}),t(Ru,{}),t(Mu,{})]})})})),{Component:Wu,useEmitter:Pu,useEmitterValue:Vu,usePublisher:Nu}=Rc(zu,{optional:{context:"context",totalCount:"totalCount",overscan:"overscan",itemContent:"itemContent",components:"components",computeItemKey:"computeItemKey",data:"data",initialItemCount:"initialItemCount",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"headerFooterTag",listClassName:"listClassName",itemClassName:"itemClassName",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",restoreStateFrom:"restoreStateFrom",initialTopMostItemIndex:"initialTopMostItemIndex",increaseViewportBy:"increaseViewportBy"},methods:{scrollTo:"scrollTo",scrollBy:"scrollBy",scrollToIndex:"scrollToIndex"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",stateChanged:"stateChanged",readyStateChanged:"readyStateChanged"}},_u),Yu=au({useEmitter:Pu,useEmitterValue:Vu,usePublisher:Nu}),Uu=lu({useEmitter:Pu,useEmitterValue:Vu,usePublisher:Nu});function Gu(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,Zl.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Ju={collections:{base:{InputBoxShadow:b`
        inset 0 0 4px 0px ${Hr.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 4px 0px ${Hr.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${Hr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:b`
        inset 0 0 3px 0px ${Hr.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 3px 0px ${Hr.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${Hr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Zu=e=>t=>{var n;const r=t.theme,o=gr(Ju,r[pr.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?hr(o,e,r.options.designToken):hr(o,e)},Xu={InputBoxShadow:Zu("InputBoxShadow"),InputErrorBoxShadow:Zu("InputErrorBoxShadow"),ElevationBoxShadow:Zu("ElevationBoxShadow"),Table:{Header:Zu("Table.Header"),Cell:{Primary:Zu("Table.Cell.Primary"),Secondary:Zu("Table.Cell.Secondary"),Selected:Zu("Table.Cell.Selected"),Hover:Zu("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Zu("Button.Danger.BackgroundColor"),Hover:Zu("Button.Danger.Hover"),Primary:Zu("Button.Danger.Primary"),Border:Zu("Button.Danger.Border")}}},qu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ku=e=>Object.keys(qu).reduce(((t,n)=>{const r=qu[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Qu=Ku("max-width"),ed=(Ku("min-width"),qu),td=y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,nd=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,rd=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Hr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${nd} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,od=y(rd)`
    animation-delay: -0.45s;
`,id=y(rd)`
    animation-delay: -0.3s;
`,ad=y(rd)`
    animation-delay: -0.15s;
`;y.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return b`
                    background-color: ${Hr.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Xu.Button.Danger.Border:Hr.Primary};

                    color: ${e.$buttonIsDanger?Xu.Button.Danger.Primary:Hr.Primary};
                `;case"light":return b`
                    background-color: ${Hr.Neutral[8]};
                    border: 1px solid ${Hr.Neutral[5]};

                    color: ${e.$buttonIsDanger?Xu.Button.Danger.Primary:Hr.Primary};
                `;case"disabled":return b`
                    background-color: ${Hr.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Hr.Neutral[3]};
                `;case"link":return b`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Xu.Button.Danger.Primary:Hr.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Xu.Button.Danger.Hover:Hr.Secondary};
                    }
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?Xu.Button.Danger.BackgroundColor:Hr.Primary};
                    border: 1px solid transparent;

                    ${Qu.mobileL} {
                        width: 100%;
                    }

                    color: ${Hr.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?b`
                    height: 2.5rem;
                    ${Fr("H5","semibold")}

                    ${Qu.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    ${Fr("H4","semibold")}

                    ${Qu.mobileS} {
                        height: auto;
                    }
                `}
`;const ld=y((({color:n,className:r,size:o=18})=>e(td,Object.assign({className:r,$size:o,$color:n,"data-testid":"component-loading-spinner"},{children:[t(rd,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(od,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(id,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(ad,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?Xu.Button.Danger.Primary:Hr.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Hr.Neutral[3](e);break;default:t=Hr.Neutral[8](e)}return b`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var sd={exports:{}};sd.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=m;var x="$isDayjsObject",w=function(e){return e instanceof T||!(!e||!e[x])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();S[i]&&(o=i),n&&(S[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;S[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},F=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new T(n)},B=y;B.l=$,B.i=w,B.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return B},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),h=function(e,t){var o=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},g=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,S=(p<b?p+7:p)-b;return h(r?v-S:v+(6-S),m);case l:case f:return g(y+"Hours",0);case a:return g(y+"Minutes",1);case i:return g(y+"Seconds",2);case o:return g(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,s=B.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var p=this.clone().set(f,1);p.$d[h](g),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[B.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var g=B.p(u),p=function(e){var t=F(h);return B.w(t.date(t.date()+Math.round(e*r)),h)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[g]||1,v=this.$d.getTime()+r*m;return B.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=B.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return B.s(i%12||12,e,"0")},g=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return l+1;case"MM":return B.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return B.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(i,a,!0);case"A":return g(i,a,!1);case"m":return String(a);case"mm":return B.s(a,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var g,p=this,m=B.p(f),v=F(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,S=function(){return B.m(p,v)};switch(m){case d:g=S()/12;break;case c:g=S();break;case u:g=S()/3;break;case s:g=(b-y)/6048e5;break;case l:g=(b-y)/864e5;break;case a:g=b/n;break;case i:g=b/t;break;case o:g=b/e;break;default:g=b}return h?g:B.a(g)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return S[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return B.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),I=T.prototype;return F.prototype=I,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){I[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,T,F),e.$i=!0),F},F.locale=$,F.isDayjs=w,F.unix=function(e){return F(1e3*e)},F.en=S[b],F.Ls=S,F.p={},F}();var cd=Ge(sd.exports),ud={exports:{}};ud.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,o=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},l=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},f={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[o,s("seconds")],ss:[o,s("seconds")],m:[o,s("minutes")],mm:[o,s("minutes")],H:[o,s("hours")],h:[o,s("hours")],HH:[o,s("hours")],hh:[o,s("hours")],D:[o,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[o,s("week")],ww:[r,s("week")],M:[o,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=l(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r,o;r=n,o=a&&a.formats;for(var i=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=i.length,s=0;s<l;s+=1){var c=i[s],u=f[c],d=u&&u[0],h=u&&u[1];i[s]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=i[n];if("string"==typeof o)r+=o.length;else{var a=o.regex,s=o.parser,c=e.slice(r),u=a.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(l=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,i=e.args;this.$u=r;var l=i[1];if("string"==typeof l){var s=!0===i[2],c=!0===i[3],u=s||c,d=i[2];c&&(d=i[2]),a=this.$locale(),!s&&d&&(a=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var o=h(t)(e),i=o.year,a=o.month,l=o.day,s=o.hours,c=o.minutes,u=o.seconds,d=o.milliseconds,f=o.zone,g=o.week,p=new Date,m=l||(i||a?1:p.getDate()),v=i||p.getFullYear(),y=0;i&&!a||(y=a>0?a-1:p.getMonth());var b,S=s||0,x=c||0,w=u||0,$=d||0;return f?new Date(Date.UTC(v,y,m,S,x,w,$+60*f.offset*1e3)):n?new Date(Date.UTC(v,y,m,S,x,w,$)):(b=new Date(v,y,m,S,x,w,$),g&&(b=r(b).week(g).toDate()),b)}catch(e){return new Date("")}}(t,l,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){i[1]=l[g-1];var p=n.apply(this,i);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var dd=Ge(ud.exports),fd={exports:{}};fd.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var hd=Ge(fd.exports),gd={exports:{}};gd.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var pd=Ge(gd.exports),md={exports:{}};md.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var vd,yd,bd=Ge(md.exports),Sd={exports:{}};Sd.exports=(vd={year:0,month:1,day:2,hour:3,minute:4,second:5},yd={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=yd[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),yd[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=vd[s];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",g=+e;return(n.utc(h).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o,i=this.utcOffset(),a=this.toDate(),l=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(l))/1e3/60),c=15*-Math.round(a.getTimezoneOffset()/15)-s;if(Number(c)){if(o=n(l,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var u=o.utcOffset();o=o.add(i-u,"minute")}}else o=this.utcOffset(0,t);return o.$x.$timezone=e,o},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var xd,wd=Ge(Sd.exports);cd.extend(hd),cd.extend(bd),cd.extend(pd),cd.extend(dd),cd.extend(wd),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=cd(t).startOf("week");return $d(n).map((e=>Fd(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Fd(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(cd(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+cd(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=cd(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?cd(r):void 0,o?cd(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(xd||(xd={}));const $d=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Fd=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Bd=[1,3,5,7,8,10,12],Td=[4,6,9,11];var Id,Dd,Hd;function Od(e){const t=i(null);return f((()=>{t.current=e}),[e]),h(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Bd.includes(i)?Math.min(o,31).toString():Td.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=cd(e,n);return cd(t,n).diff(r,"minute")},e.toDayjs=e=>e?cd(e):cd(),e.addMinutesToTime=(e,t,n="HH:mm")=>cd(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>cd(e).isSame(cd(t),n)}(Id||(Id={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!cd(e).isBefore(r,"day"))||!(!o||!cd(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(cd(e).isValid())return e}return""}}(Dd||(Dd={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Hd||(Hd={}));const Cd=e=>{const t=(e=>{const t=i(e),n=i();return d((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},kd=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Ed=({children:e})=>{const[n,r]=a(-1);return t(kd.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},zd=b`
    border: 1px solid ${Hr.Accent.Light[1]};
    box-shadow: ${Xu.InputBoxShadow};
`,Rd=b`
    border: 1px solid ${Hr.Accent.Light[1]};
    box-shadow: none;
`,Ad=b`
    border: 1px solid ${Hr.Neutral[5]};
    box-shadow: none;
`,Md=b`
    border: 1px solid ${Hr.Validation.Red.Border};
    box-shadow: ${Xu.InputErrorBoxShadow};
`,jd=y.div`
    border: 1px solid ${Hr.Neutral[5]};
    border-radius: 4px;
    background: ${Hr.Neutral[8]};

    :focus-within {
        ${zd}
    }
    ${e=>e.$focused&&zd}

    ${e=>e.$readOnly?b`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Rd}
                }
                ${e.$focused&&Rd}
            `:e.$disabled?b`
                background: ${Hr.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Ad}
                }
                ${e.$focused&&Ad}
            `:e.$error?b`
                border: 1px solid ${Hr.Validation.Red.Border};

                :focus-within {
                    ${Md}
                }
                ${e.$focused&&Md}
            `:void 0}
`;y(jd)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Ld=y.input`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Hr.Neutral[1]};
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
        color: ${Hr.Neutral[3]};
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
`,_d=y.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Hr.Primary};
    }
`,Wd=y.div`
    overflow: hidden;
    border: 1px solid ${Hr.Neutral[5]};
    border-radius: 4px;
    background: ${Hr.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${Qu.mobileL} {
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
        background: ${Hr.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Pd=y.div`
    background: transparent;
    padding: 0.5rem;
`,Vd=y.ul`
    list-style-type: none;
`,Nd=y.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Hr.Accent.Light[3]};

    ${e=>e.$active&&b`
            background: ${Hr.Accent.Light[5]};
        `}
`,Yd=y(D)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Hr.Primary};
`,Ud=y.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,Gd=y(I)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Hr.Primary};
`,Jd=y(T)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Hr.Accent.Light[2]};
`,Zd=y.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Xd=y(_d)`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Hr.Primary};
`,qd=y(Xd)`
    outline-offset: 0.25rem;
`,Kd=y(Xd)`
    padding: 0.5rem 1rem;
`,Qd=y.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,ef=y.div`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","regular")}
`,tf=y(B)`
    ${e=>{const t="small"===e.$variant?1:1.125;return b`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Hr.Validation.Red.Icon};
`,nf=y.button`
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

        ${({$highlight:e})=>e&&b`
                background-color: ${Hr.Neutral[7]};
            `}
    }
`,rf=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=Tr(e,["children","focusHighlight","focusOutline","type"]);return t(nf,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),of=e=>"small"===e?1:1.125,af=e=>b`
        height: ${of(e)}rem;
        width: ${of(e)}rem;
    `,lf=y.div`
    background: ${Hr.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,sf=y.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,cf=y(Ld)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,uf=y(O)`
    color: ${Hr.Neutral[3]};
    flex-shrink: 0;
    ${e=>af(e.$variant)}
`,df=y(rf)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Hr.Neutral[3]};
    cursor: pointer;

    ${e=>b`
            svg {
                ${af(e.$variant)}
            }
        `}
`,ff=m(((n,r)=>{var{value:o,variant:i,onClear:a}=n,l=Tr(n,["value","variant","onClear"]);return e(lf,{children:[e(sf,{children:[t(uf,{$variant:i,"aria-hidden":!0}),t(cf,Object.assign({ref:r,value:o,$variant:i},l))]}),o&&t(df,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(H,{"aria-hidden":!0})}))]})})),hf=({listItems:r,multiSelect:o,selectedItems:l,disableItemFocus:s,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:f=2,labelDisplayType:g="inline",variant:p="default",listboxId:m,width:y,topScrollItem:b,onSelectItem:S,onSelectAll:x,onDismiss:w,onRetry:$,valueExtractor:F,listExtractor:B,renderListItem:T,renderCustomCallToAction:I,enableSearch:D,hideNoResultsDisplay:H,searchPlaceholder:O="Search",searchFunction:C,onSearch:k})=>{const{focusedIndex:E,setFocusedIndex:z}=v(kd),[R,A]=a(""),[M,j]=a(r),L=Cd(c),_=(()=>{const[e,t]=a(!1);return d((()=>{t(!0)}),[]),e})(),W=i(),P=i(),V=i([]),N=i(),Y=i(null),U=e=>B?B(e):e.toString(),G=h((e=>!!dl(l,(t=>hl(t,e)))),[l]),J=Od((()=>C(R))),Z=Od((()=>r.filter((e=>{var t;const n=U(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),i=R.trim().toLowerCase();return r.includes(i)||o&&o.includes(i)})))),X=(e,t)=>{z(t),null==S||S(e,(e=>F?F(e):e)(e))},q=e=>{const t=e.target.value;A(t),null==k||k()},K=()=>{var e;A(""),null===(e=N.current)||void 0===e||e.focus(),null==k||k()},Q=()=>{null==$||$()};((e,t,n="window",r)=>{const o=i();d((()=>{o.current=t}),[t]),d((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),E<M.length-1){const e=E+1;null===(t=V.current[e])||void 0===t||t.focus(),z(e)}break;case"ArrowUp":if(e.preventDefault(),E>0){const e=E-1;null===(n=V.current[e])||void 0===n||n.focus(),z(e)}else 0===E&&N.current&&(N.current.focus(),z(-1));break;case"Space":case"Enter":document.activeElement===V.current[E]&&(e.preventDefault(),M[E]&&X(M[E],E))}})),d((()=>{if(!b&&Y.current)return void Y.current.scrollTo({top:0});const e=setTimeout((()=>{const e=r.indexOf(b);Y.current&&-1!==e&&(Y.current.scrollToIndex({index:e}),z(e))}),0);return()=>clearTimeout(e)}),[V,r,z,b]),d((()=>{var e,t,n;if(_)return;if(s)return;const o=r.findIndex((e=>G(e)));N.current?(z(-1),setTimeout((()=>N.current.focus()),200)):E>0?(null===(e=Y.current)||void 0===e||e.scrollToIndex({index:E,align:"center"}),setTimeout((()=>{var e;return null===(e=V.current[E])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=Y.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),z(o),setTimeout((()=>{var e;return null===(e=V.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(n=Y.current)||void 0===n||n.scrollToIndex({index:0}),z(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200))}),[G,s,E,r,_,z]),d((()=>{_&&L&&(s||"success"===c&&N.current&&(z(-1),N.current.focus()))}),[_,L,c,z,s]),d((()=>{j(""===R?r:C?J():Z())}),[J,Z,r,C,R]);const ee=e=>o?t(e?Gd:Jd,{"aria-hidden":!0}):e?t(Yd,{"aria-hidden":!0}):t(Ud,{}),te=(e,n)=>{const r=U(e),o="string"==typeof r?r:r.title,i="string"==typeof r?void 0:r.secondaryLabel;return t(Nr,{displayType:g,label:o,maxLines:f,selected:n,sublabel:i,truncationType:u,variant:p})},ne=(r,i)=>{if(!$||$&&"success"===c){const a=G(r),l=i===E;return t(Nd,Object.assign({"aria-selected":a,"aria-multiselectable":o,"data-testid":"list-item",onClick:()=>X(r,i),onMouseEnter:()=>(e=>{z(e)})(i),ref:e=>{V.current[i]=e},role:"option",tabIndex:l?0:-1,$active:l},{children:T?T(r,{selected:a}):e(n,{children:[ee(a),te(r,a)]})}),((e,t)=>`item_${t}__${F?F(e):e}`)(r,i))}},re=()=>{if((D||C)&&"success"===c)return t(ff,{ref:N,onChange:q,value:R,placeholder:O,"data-testid":"search-input","aria-label":"Enter text to search",onClear:K,variant:p})},oe=()=>{if(o&&M.length>0&&!R&&"success"===c)return t(Zd,{children:t(Kd,Object.assign({onClick:x,type:"button",$variant:p},{children:0===l.length?"Select all":"Clear all"}))})},ie=()=>{if(!H&&(R||!D)&&0===M.length&&"success"===c)return e(Qd,Object.assign({"data-testid":"list-no-results"},{children:[t(tf,{"data-testid":"no-result-icon",$variant:p}),t(ef,Object.assign({$variant:p},{children:"No results found."}))]}))},ae=()=>{if($&&"loading"===c){const n="small"===p?16:18;return e(Qd,Object.assign({"data-testid":"list-loading"},{children:[t(ld,{$buttonStyle:"secondary",size:n}),t(ef,Object.assign({$variant:p},{children:"Loading..."}))]}))}},le=()=>{if($&&"fail"===c)return e(Qd,Object.assign({"data-testid":"list-fail"},{children:[t(tf,{"data-testid":"load-error-icon",$variant:p}),t(ef,Object.assign({$variant:p},{children:"Failed to load."}))," ",t(qd,Object.assign({onClick:Q,type:"button",$variant:p},{children:"Try again."}))]}))},se=()=>{const e="test"===process.env.NODE_ENV;return t(Vd,Object.assign({role:"listbox",id:m},{children:t(yu,Object.assign({ref:Y,style:{height:"100%"},data:M,customScrollParent:W.current,itemContent:(e,t)=>ne(t,e)},e?{initialItemCount:M.length}:{}),e?M.length:void 0)}))};return e(Wd,Object.assign({"data-testid":"dropdown-container",ref:W,$width:y},{children:[e(Pd,Object.assign({ref:P,"data-testid":"dropdown-list"},{children:[re(),oe(),ie(),ae(),le(),se()]})),(()=>{if(I)return t("div",Object.assign({"data-testid":"custom-cta"},{children:I(w,M)}))})()]}))},gf="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",pf=y(_d)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,mf=y.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${gf};

    svg {
        color: ${Hr.Neutral[3]};
        ${e=>{const t="small"===e.$variant?yr.BodySmall.fontSize:yr.Body.fontSize;return b`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,vf=m((({children:n,disabled:r,expanded:o,listboxId:i,popupRole:a,readOnly:l,variant:s},c)=>e(pf,Object.assign({ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:s},{children:[n,!l&&t(mf,Object.assign({$expanded:o,$variant:s},{children:t(C,{"aria-hidden":!0})}))]}))));y.li`
    display: ${e=>e.$visible?"flex":"none"};
`,y.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${Hr.Accent.Light[3]};

    ${e=>e.$active&&b`
            background: ${Hr.Accent.Light[5]};
        `}
`,y.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,y.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${Hr.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return b`
                    transform: rotate(90deg);
                `}}
    }
`,y.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,y.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,y(D)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Hr.Primary};
`,y(k)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Hr.Primary};
`;const yf=e=>"small"===e?2.5:3;y.div`
    position: relative;
    width: 100%;
    ${e=>{const t=yf(e.$variant);return b`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const bf=b`
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
        outline: 2px solid ${Hr.Accent.Light[3]};
    }
`,Sf=y.button`
    ${bf}
    cursor: pointer;
`;y.div`
    ${bf}
`;const xf=x`
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
`;y.div`
    position: relative;
    border: 1px solid ${Hr.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Hr.Neutral[8]};

    :focus-within {
        border: 1px solid ${Hr.Accent.Light[1]};
        box-shadow: ${Xu.InputBoxShadow};
    }

    ${e=>e.expanded?b`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:b`
                animation: ${xf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?b`
                background: ${Hr.Neutral[6](e)};

                ${Sf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Hr.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?b`
                border: none;
                background: transparent !important;

                ${Sf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?b`
                border: 1px solid ${Hr.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Hr.Validation.Red.Border(e)};
                    box-shadow: ${Xu.InputErrorBoxShadow};
                }
            `:void 0}
`,y.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${gf};
    margin-left: 1rem;
`,y(C)`
    color: ${Hr.Neutral[3]};
    ${e=>{let t=yr.Body.fontSize;return"small"===e.$variant&&(t=yr.BodySmall.fontSize),b`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,y.div`
    height: 1px;
    background: ${Hr.Neutral[5]};
    margin: 0 0.5rem;
`;const wf=y.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return b`
                color: ${Hr.Neutral[3]};
            `}}
`,$f=y.div`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return b`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Ff=y($f)`
    color: ${Hr.Neutral[3]};
`;var Bf;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Bf||(Bf={}));const Tf=y.div`
    display: flex;
    flex-direction: column;
`,If=e=>"right"===e?"bottom-end":"bottom-start",Df=({enabled:r,isOpen:o,onOpen:l,onClose:s,onDismiss:c,renderElement:u,renderDropdown:f,customZIndex:h,clickToToggle:g=!1,offset:p=0,alignment:m="left",fitAvailableHeight:v})=>{var y;const b=i(null),S=i(null),{width:x}=We({targetRef:b,handleHeight:!1}),w={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<ed.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:$,floatingStyles:F,context:B}=z({open:o,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!o?null==l||l():!e&&o&&(null==s||s(n))},whileElementsMounted:R,placement:If(m),middleware:[A(p),M(),j({limiter:L()}),_({apply({availableHeight:e}){S.current&&Object.assign(S.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}}),w]}),T=(()=>{const[e,t]=a(void 0),n=E();return d((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Bf.Change,e),n.events.emit(Bf.Ready),()=>n.events.off(Bf.Change,e)}),[n]),e})(),{isMounted:I,styles:D}=W(B,{initial:{opacity:0},open:{opacity:1},duration:300}),H=P(B,{enabled:r,toggle:g}),O=V(B,{enabled:r}),{getReferenceProps:C,getFloatingProps:k}=N([H,O]);return e(n,{children:[t("div",Object.assign({ref:e=>{b.current=e,$.setReference(e)}},C(),{children:u()})),I&&t(Y,{children:t(U,Object.assign({context:B,modal:!1,initialFocus:S,returnFocus:!1},{children:t("div",Object.assign({ref:$.setFloating,style:Object.assign(Object.assign({},F),{zIndex:null!==(y=null!=h?h:T)&&void 0!==y?y:50})},k(),{children:t(Tf,Object.assign({ref:S,style:Object.assign({},D),inert:D.opacity<1?"":void 0},{children:f({elementWidth:x})}))}))}))})]})},Hf=({selectedOption:e,placeholder:n="Select",options:r,disabled:o,error:l,className:s,"data-testid":c,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:g,valueExtractor:p,valueToStringFunction:m,listExtractor:v,displayValueExtractor:y,onSelectOption:b,onShowOptions:S,onHideOptions:x,onRetry:w,optionsLoadState:$="success",optionTruncationType:F="end",renderCustomSelectedOption:B,renderListItem:T,hideNoResultsDisplay:I,renderCustomCallToAction:D,onBlur:H,variant:O="default",readOnly:C,alignment:k,dropdownZIndex:E})=>{const[z,R]=a(e),[A,M]=a(!1),[j,L]=a(!1),[_]=a((()=>Hd.generate())),W=i(),P=i(),V=i();d((()=>{R(e)}),[e]);const N=(e,t)=>{var n;null===(n=P.current)||void 0===n||n.focus(),R(e),M(!1),Z(!1),null==b||b(e,t)},Y=()=>{A&&(M(!1),Z(!1))},U=()=>{j||A||L(!0)},G=e=>{j&&!A&&W.current&&!W.current.contains(e.relatedTarget)&&(L(!1),null==H||H())},J=e=>{if("middle"===F){let t=0;return V&&V.current&&(t=V.current.getBoundingClientRect().width),Ar.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),t,120,8)}return e},Z=e=>{e?null==S||S():null==x||x()};return t(Ed,{children:t(Df,{enabled:!C&&!o,isOpen:A,renderElement:()=>t(jd,Object.assign({className:s,"data-testid":c,id:u,ref:W,tabIndex:-1,onFocus:U,onBlur:G,$focused:j,$disabled:o,$readOnly:C,$error:l},{children:t(vf,Object.assign({ref:P,disabled:o,expanded:A,listboxId:_,popupRole:"listbox",readOnly:C,variant:O},{children:t(wf,Object.assign({ref:V,$disabled:o},{children:z?B?B(z):t($f,Object.assign({truncateType:F,$variant:O},{children:J(y?y(z):p?p(z):z.toString())})):t(Ff,Object.assign({truncateType:F,$variant:O},{children:n}))}))}))})),renderDropdown:({elementWidth:e})=>t(hf,{listboxId:_,listItems:r,onSelectItem:N,onDismiss:Y,valueExtractor:p,listExtractor:v,enableSearch:f,searchPlaceholder:g,searchFunction:h,selectedItems:z?[z]:[],onRetry:w,itemsLoadState:$,itemTruncationType:F,renderListItem:T,hideNoResultsDisplay:I,renderCustomCallToAction:D,variant:O,width:e}),onOpen:()=>{M(!0),Z(!0),L(!0)},onClose:e=>{M(!1),Z(!1),"click"!==e&&(L(!1),null==H||H())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),M(!1),Z(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:E})})};export{Hf as InputSelect};
//# sourceMappingURL=index.js.map
