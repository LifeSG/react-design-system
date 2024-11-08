import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as a,useState as o,isValidElement as l,createRef as s,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as f,useCallback as h,useMemo as g,forwardRef as p,useContext as m}from"react";import v,{css as y,useTheme as b,keyframes as S}from"styled-components";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{findDOMNode as $}from"react-dom";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as x}from"@lifesg/react-icons/square";import{SquareTickFillIcon as B}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as D}from"@lifesg/react-icons/tick";import{CrossIcon as O}from"@lifesg/react-icons/cross";import{MagnifierIcon as k}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as E}from"@lifesg/react-icons/chevron-down";import{useFloatingTree as H,useFloating as j,autoUpdate as A,offset as _,flip as T,shift as z,limitShift as M,size as C,useTransitionStyles as L,useClick as W,useDismiss as I,useInteractions as R,FloatingPortal as P,FloatingFocusManager as N}from"@floating-ui/react";var Y=function(e,t){return Y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Y(e,t)};var V=function(){return V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},V.apply(this,arguments)};var J="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},U="object"==typeof J&&J&&J.Object===Object&&J,X="object"==typeof self&&self&&self.Object===Object&&self,G=U||X||Function("return this")(),q=G,Q=function(){return q.Date.now()},K=/\s/;var ee=function(e){for(var t=e.length;t--&&K.test(e.charAt(t)););return t},te=/^\s+/;var ne=function(e){return e?e.slice(0,ee(e)+1).replace(te,""):e},re=G.Symbol,ie=re,ae=Object.prototype,oe=ae.hasOwnProperty,le=ae.toString,se=ie?ie.toStringTag:void 0;var ce=function(e){var t=oe.call(e,se),n=e[se];try{e[se]=void 0;var r=!0}catch(e){}var i=le.call(e);return r&&(t?e[se]=n:delete e[se]),i},ue=Object.prototype.toString;var de=ce,fe=function(e){return ue.call(e)},he=re?re.toStringTag:void 0;var ge=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":he&&he in Object(e)?de(e):fe(e)},pe=function(e){return null!=e&&"object"==typeof e};var me=ne,ve=Z,ye=function(e){return"symbol"==typeof e||pe(e)&&"[object Symbol]"==ge(e)},be=/^[-+]0x[0-9a-f]+$/i,Se=/^0b[01]+$/i,Fe=/^0o[0-7]+$/i,$e=parseInt;var we=Z,xe=Q,Be=function(e){if("number"==typeof e)return e;if(ye(e))return NaN;if(ve(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ve(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=me(e);var n=Se.test(e);return n||Fe.test(e)?$e(e.slice(2),n?2:8):be.test(e)?NaN:+e},De=Math.max,Oe=Math.min;var ke=function(e,t,n){var r,i,a,o,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function g(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=a}function p(){var e=xe();if(g(e))return m(e);l=setTimeout(p,function(e){var n=t-(e-s);return d?Oe(n,a-(e-c)):n}(e))}function m(e){return l=void 0,f&&r?h(e):(r=i=void 0,o)}function v(){var e=xe(),n=g(e);if(r=arguments,i=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(p,t),u?h(e):o}(s);if(d)return clearTimeout(l),l=setTimeout(p,t),h(s)}return void 0===l&&(l=setTimeout(p,t)),o}return t=Be(t)||0,we(n)&&(u=!!n.leading,a=(d="maxWait"in n)?De(Be(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=i=l=void 0},v.flush=function(){return void 0===l?o:m(xe())},v},Ee=ke,He=Z;var je=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return He(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Ee(e,t,{leading:r,maxWait:t,trailing:i})},Ae=function(e,t,n,r){switch(t){case"debounce":return ke(e,n,r);case"throttle":return je(e,n,r);default:return e}},_e=function(e){return"function"==typeof e},Te=function(){return"undefined"==typeof window},ze=function(e){return e instanceof Element||e instanceof HTMLDocument},Me=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&_e(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Te()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Te())return null;if(t)return document.querySelector(t);if(r&&ze(r))return r;if(n.targetRef&&ze(n.targetRef.current))return n.targetRef.current;var i=$(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,l=t.onResize;if(i||o){var s=Me(l,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Te()&&s({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return _e(t)?"renderProp":_e(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,Te()||(n.resizeHandler=Ae(n.createResizeHandler,i,o,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Y(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Te()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=i)(s);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(s,["targetRef"]);return c(e,u)}return c(e,s);case"childArray":return(e=i).map((function(e){return!!e&&c(e,s)}));default:return r.createElement(o,null)}}}(u);var Ce=Te()?d:f;function Le(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,l=void 0===i?1e3:i,s=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,g=e.observerOptions,p=e.onResize,m=a(n),v=a(null),y=null!=h?h:v,b=a(),S=o({width:void 0,height:void 0}),F=S[0],$=S[1];return Ce((function(){if(!Te()){var e=Me(p,$,u,f);b.current=Ae((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!Te()&&e({width:r,height:i}),m.current=!1}))}),r,l,s);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,g),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,l,s,u,f,p,g,y.current]),V({ref:y},F)}const We={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Ie={D1:{fontFamily:We.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:We.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:We.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:We.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:We.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:We.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:We.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:We.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:We.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:We.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:We.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:We.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:We.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:We.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Re={D1:{fontFamily:We.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:We.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:We.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:We.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:We.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:We.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:We.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:We.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Pe={D1:{fontFamily:We.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:We.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:We.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:We.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:We.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:We.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:We.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:We.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:We.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:We.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:We.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:We.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:We.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:We.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var Ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ve=Array.isArray,Je="object"==typeof Ne&&Ne&&Ne.Object===Object&&Ne,Ze=Je,Ue="object"==typeof self&&self&&self.Object===Object&&self,Xe=Ze||Ue||Function("return this")(),Ge=Xe.Symbol,qe=Ge,Qe=Object.prototype,Ke=Qe.hasOwnProperty,et=Qe.toString,tt=qe?qe.toStringTag:void 0;var nt=function(e){var t=Ke.call(e,tt),n=e[tt];try{e[tt]=void 0;var r=!0}catch(e){}var i=et.call(e);return r&&(t?e[tt]=n:delete e[tt]),i},rt=Object.prototype.toString;var it=nt,at=function(e){return rt.call(e)},ot=Ge?Ge.toStringTag:void 0;var lt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ot&&ot in Object(e)?it(e):at(e)};var st=function(e){return null!=e&&"object"==typeof e},ct=lt,ut=st;var dt=function(e){return"symbol"==typeof e||ut(e)&&"[object Symbol]"==ct(e)},ft=Ve,ht=dt,gt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pt=/^\w*$/;var mt=function(e,t){if(ft(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ht(e))||(pt.test(e)||!gt.test(e)||null!=t&&e in Object(t))};var vt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},yt=lt,bt=vt;var St,Ft=function(e){if(!bt(e))return!1;var t=yt(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},$t=Xe["__core-js_shared__"],wt=(St=/[^.]+$/.exec($t&&$t.keys&&$t.keys.IE_PROTO||""))?"Symbol(src)_1."+St:"";var xt=function(e){return!!wt&&wt in e},Bt=Function.prototype.toString;var Dt=function(e){if(null!=e){try{return Bt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ot=Ft,kt=xt,Et=vt,Ht=Dt,jt=/^\[object .+?Constructor\]$/,At=Function.prototype,_t=Object.prototype,Tt=At.toString,zt=_t.hasOwnProperty,Mt=RegExp("^"+Tt.call(zt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ct=function(e){return!(!Et(e)||kt(e))&&(Ot(e)?Mt:jt).test(Ht(e))},Lt=function(e,t){return null==e?void 0:e[t]};var Wt=function(e,t){var n=Lt(e,t);return Ct(n)?n:void 0},It=Wt(Object,"create"),Rt=It;var Pt=function(){this.__data__=Rt?Rt(null):{},this.size=0};var Nt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yt=It,Vt=Object.prototype.hasOwnProperty;var Jt=function(e){var t=this.__data__;if(Yt){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Vt.call(t,e)?t[e]:void 0},Zt=It,Ut=Object.prototype.hasOwnProperty;var Xt=It;var Gt=Pt,qt=Nt,Qt=Jt,Kt=function(e){var t=this.__data__;return Zt?void 0!==t[e]:Ut.call(t,e)},en=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Xt&&void 0===t?"__lodash_hash_undefined__":t,this};function tn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tn.prototype.clear=Gt,tn.prototype.delete=qt,tn.prototype.get=Qt,tn.prototype.has=Kt,tn.prototype.set=en;var nn=tn;var rn=function(){this.__data__=[],this.size=0};var an=function(e,t){return e===t||e!=e&&t!=t},on=an;var ln=function(e,t){for(var n=e.length;n--;)if(on(e[n][0],t))return n;return-1},sn=ln,cn=Array.prototype.splice;var un=ln;var dn=ln;var fn=ln;var hn=rn,gn=function(e){var t=this.__data__,n=sn(t,e);return!(n<0)&&(n==t.length-1?t.pop():cn.call(t,n,1),--this.size,!0)},pn=function(e){var t=this.__data__,n=un(t,e);return n<0?void 0:t[n][1]},mn=function(e){return dn(this.__data__,e)>-1},vn=function(e,t){var n=this.__data__,r=fn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}yn.prototype.clear=hn,yn.prototype.delete=gn,yn.prototype.get=pn,yn.prototype.has=mn,yn.prototype.set=vn;var bn=yn,Sn=Wt(Xe,"Map"),Fn=nn,$n=bn,wn=Sn;var xn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Bn=function(e,t){var n=e.__data__;return xn(t)?n["string"==typeof t?"string":"hash"]:n.map},Dn=Bn;var On=Bn;var kn=Bn;var En=Bn;var Hn=function(e,t){var n=En(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},jn=function(){this.size=0,this.__data__={hash:new Fn,map:new(wn||$n),string:new Fn}},An=function(e){var t=Dn(this,e).delete(e);return this.size-=t?1:0,t},_n=function(e){return On(this,e).get(e)},Tn=function(e){return kn(this,e).has(e)},zn=Hn;function Mn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Mn.prototype.clear=jn,Mn.prototype.delete=An,Mn.prototype.get=_n,Mn.prototype.has=Tn,Mn.prototype.set=zn;var Cn=Mn,Ln=Cn;function Wn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Wn.Cache||Ln),n}Wn.Cache=Ln;var In=Wn;var Rn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pn=/\\(\\)?/g,Nn=function(e){var t=In(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Rn,(function(e,n,r,i){t.push(r?i.replace(Pn,"$1"):n||e)})),t}));var Yn=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Vn=Ve,Jn=dt,Zn=Ge?Ge.prototype:void 0,Un=Zn?Zn.toString:void 0;var Xn=function e(t){if("string"==typeof t)return t;if(Vn(t))return Yn(t,e)+"";if(Jn(t))return Un?Un.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Gn=Xn;var qn=Ve,Qn=mt,Kn=Nn,er=function(e){return null==e?"":Gn(e)};var tr=function(e,t){return qn(e)?e:Qn(e,t)?[e]:Kn(er(e))},nr=dt;var rr=function(e){if("string"==typeof e||nr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},ir=tr,ar=rr;var or=function(e,t){for(var n=0,r=(t=ir(t,e)).length;null!=e&&n<r;)e=e[ar(t[n++])];return n&&n==r?e:void 0},lr=or;var sr=function(e,t,n){var r=null==e?void 0:lr(e,t);return void 0===r?n:r},cr=Ye(sr);const ur=(e,t,n)=>t?cr(n,t)||cr(e,t):n||e,dr=(e,t)=>{const n=t||e.defaultValue;return cr(e.collections,n)};var fr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(fr||(fr={}));const hr={collections:{base:Ie,oneservice:Pe,plusJakartaSans:Re},defaultValue:"base"},gr=e=>t=>{const n=t.theme,r=dr(hr,n[fr.textStyleScheme]);return n.options&&n.options.textStyle?ur(r,e,n.options.textStyle):ur(r,e)},pr={D1:{fontFamily:gr("D1.fontFamily"),fontSize:gr("D1.fontSize"),fontWeight:gr("D1.fontWeight"),lineHeight:gr("D1.lineHeight"),letterSpacing:gr("D1.letterSpacing")},D2:{fontFamily:gr("D2.fontFamily"),fontSize:gr("D2.fontSize"),fontWeight:gr("D2.fontWeight"),lineHeight:gr("D2.lineHeight"),letterSpacing:gr("D2.letterSpacing")},D3:{fontFamily:gr("D3.fontFamily"),fontSize:gr("D3.fontSize"),fontWeight:gr("D3.fontWeight"),lineHeight:gr("D3.lineHeight"),letterSpacing:gr("D3.letterSpacing")},D4:{fontFamily:gr("D4.fontFamily"),fontSize:gr("D4.fontSize"),fontWeight:gr("D4.fontWeight"),lineHeight:gr("D4.lineHeight"),letterSpacing:gr("D4.letterSpacing")},DBody:{fontFamily:gr("DBody.fontFamily"),fontSize:gr("DBody.fontSize"),fontWeight:gr("DBody.fontWeight"),lineHeight:gr("DBody.lineHeight"),letterSpacing:gr("DBody.letterSpacing")},H1:{fontFamily:gr("H1.fontFamily"),fontSize:gr("H1.fontSize"),fontWeight:gr("H1.fontWeight"),lineHeight:gr("H1.lineHeight"),letterSpacing:gr("H1.letterSpacing")},H2:{fontFamily:gr("H2.fontFamily"),fontSize:gr("H2.fontSize"),fontWeight:gr("H2.fontWeight"),lineHeight:gr("H2.lineHeight"),letterSpacing:gr("H2.letterSpacing")},H3:{fontFamily:gr("H3.fontFamily"),fontSize:gr("H3.fontSize"),fontWeight:gr("H3.fontWeight"),lineHeight:gr("H3.lineHeight"),letterSpacing:gr("H3.letterSpacing")},H4:{fontFamily:gr("H4.fontFamily"),fontSize:gr("H4.fontSize"),fontWeight:gr("H4.fontWeight"),lineHeight:gr("H4.lineHeight"),letterSpacing:gr("H4.letterSpacing")},H5:{fontFamily:gr("H5.fontFamily"),fontSize:gr("H5.fontSize"),fontWeight:gr("H5.fontWeight"),lineHeight:gr("H5.lineHeight"),letterSpacing:gr("H5.letterSpacing")},H6:{fontFamily:gr("H6.fontFamily"),fontSize:gr("H6.fontSize"),fontWeight:gr("H6.fontWeight"),lineHeight:gr("H6.lineHeight"),letterSpacing:gr("H6.letterSpacing")},Body:{fontFamily:gr("Body.fontFamily"),fontSize:gr("Body.fontSize"),fontWeight:gr("Body.fontWeight"),lineHeight:gr("Body.lineHeight"),letterSpacing:gr("Body.letterSpacing")},BodySmall:{fontFamily:gr("BodySmall.fontFamily"),fontSize:gr("BodySmall.fontSize"),fontWeight:gr("BodySmall.fontWeight"),lineHeight:gr("BodySmall.lineHeight"),letterSpacing:gr("BodySmall.letterSpacing")},XSmall:{fontFamily:gr("XSmall.fontFamily"),fontSize:gr("XSmall.fontSize"),fontWeight:gr("XSmall.fontWeight"),lineHeight:gr("XSmall.lineHeight"),letterSpacing:gr("XSmall.letterSpacing")}},mr=[We.OpenSans,We.PlusJakartaSans],vr=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},yr=(e,t)=>n=>{var r;const i=pr[e].fontFamily(n),a=pr[e].fontWeight(n),o=mr.find((e=>Object.values(e).includes(i)));return o?y`
                font-family: ${vr(o,t)||vr(o,a)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(r=br(t)||a)&&void 0!==r?r:"normal"};
        `},br=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Sr=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Fr=(e,t,n=!1)=>r=>{const i=pr[e],a=i.fontSize(r);return y`
            ${yr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},$r=(e=!1,t=!1,n=void 0)=>t?y`
            display: block;
            ${Sr(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${Sr(n)}
        `;function wr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const xr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Br=e=>t=>{const n=t.theme,r=dr(xr,n[fr.colorScheme]);return n.options&&n.options.color?ur(r,e,n.options.color):ur(r,e)},Dr={Brand:{1:Br("Brand.1"),2:Br("Brand.2"),3:Br("Brand.3"),4:Br("Brand.4"),5:Br("Brand.5"),6:Br("Brand.6")},Primary:Br("Primary"),PrimaryDark:Br("PrimaryDark"),Secondary:Br("Secondary"),Accent:{Light:{1:Br("Accent.Light.1"),2:Br("Accent.Light.2"),3:Br("Accent.Light.3"),4:Br("Accent.Light.4"),5:Br("Accent.Light.5"),6:Br("Accent.Light.6")},Dark:{1:Br("Accent.Dark.1"),2:Br("Accent.Dark.2"),3:Br("Accent.Dark.3")}},Neutral:{1:Br("Neutral.1"),2:Br("Neutral.2"),3:Br("Neutral.3"),4:Br("Neutral.4"),5:Br("Neutral.5"),6:Br("Neutral.6"),7:Br("Neutral.7"),8:Br("Neutral.8")},Validation:{Green:{Text:Br("Validation.Green.Text"),Icon:Br("Validation.Green.Icon"),Border:Br("Validation.Green.Border"),Background:Br("Validation.Green.Background")},Orange:{Text:Br("Validation.Orange.Text"),Icon:Br("Validation.Orange.Icon"),Border:Br("Validation.Orange.Border"),Background:Br("Validation.Orange.Background"),Badge:Br("Validation.Orange.Badge")},Red:{Text:Br("Validation.Red.Text"),Icon:Br("Validation.Red.Icon"),Border:Br("Validation.Red.Border"),Background:Br("Validation.Red.Background")},Blue:{Text:Br("Validation.Blue.Text"),Icon:Br("Validation.Blue.Icon"),Border:Br("Validation.Blue.Border"),Background:Br("Validation.Blue.Background")}},Shadow:{Accent:Br("Shadow.Accent"),Red:Br("Shadow.Red"),Elevation:Br("Shadow.Elevation")}};var Or;!function(e){e.D1=v.h1`
        ${e=>y`
                ${Fr("D1",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>y`
                ${Fr("D2",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>y`
                ${Fr("D3",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>y`
                ${Fr("D4",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>y`
                ${Fr("DBody",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>y`
                ${Fr("H1",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>y`
                ${Fr("H2",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>y`
                ${Fr("H3",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>y`
                ${Fr("H4",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>y`
                ${Fr("H5",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>y`
                ${Fr("H6",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>y`
                ${Fr("Body",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>y`
                ${Fr("BodySmall",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>y`
                ${Fr("XSmall",e.weight,e.paragraph)}
                color: ${Dr.Neutral[1]};
                ${$r(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Hr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Hr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Or||(Or={}));const kr=v.a`
    ${e=>y`
            ${Fr(e.textStyle,e.weight)}
            color: ${Dr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Dr.Secondary};

                svg {
                    color: ${Dr.Secondary};
                }
            }
        `}
`,Er=v(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Hr=n=>{var{external:r=!1,children:i}=n,a=wr(n,["external","children"]);return e(kr,Object.assign({},a,{children:[i,r&&t(Er,{})]}))};var jr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(jr||(jr={}));const Ar={[fr.colorScheme]:"base",[fr.textStyleScheme]:"base",[fr.designTokenScheme]:"base",[fr.resourceScheme]:"base"};var _r;fr.colorScheme,fr.textStyleScheme,fr.designTokenScheme,fr.resourceScheme,fr.colorScheme,fr.textStyleScheme,fr.designTokenScheme,fr.resourceScheme,fr.colorScheme,fr.textStyleScheme,fr.designTokenScheme,fr.resourceScheme,fr.colorScheme,fr.textStyleScheme,fr.designTokenScheme,fr.resourceScheme,fr.colorScheme,fr.textStyleScheme,fr.designTokenScheme,fr.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:l}=n;if(l)return l(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(_r||(_r={}));const Tr=y`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,zr=v.div`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${e=>e.$selected?Dr.Primary:Dr.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Tr}
`,Mr=v.div`
    color: ${Dr.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Tr}

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${Fr("BodySmall","semibold")}
                `:y`
                    ${Fr("Body","regular")}
                `}
`,Cr=v.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${zr} {
                        display: inline;
                    }

                    ${Mr} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Lr=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Wr=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Ir=({displayType:r="inline",label:i,maxLines:a=2,selected:o,sublabel:l,truncationType:s="middle",variant:c})=>{const u=b()||Ar,d=pr.Body.fontSize({theme:u}),f=pr.Body.fontFamily({theme:u}),{ref:p,width:m}=Le(),v=h((e=>{if("inline"!==r)return!1;return _r.getTextWidth(e,`${d}rem '${f}'`)>m*a-50}),[m,r,d,f,a]),y=g((()=>v(i)),[v,i]),S=g((()=>l&&v(l)),[v,l]),F=y||S?"next-line":r,$=r=>e(n,{children:[t(Lr,Object.assign({$maxLines:a,"aria-hidden":!0},{children:r})),t(Wr,Object.assign({$maxLines:a,"aria-hidden":!0},{children:r}))]});return e(Cr,Object.assign({ref:p,$labelDisplayType:F},{children:[t(zr,Object.assign({"aria-label":i,$maxLines:a,$selected:o,$truncateType:s,$variant:c},{children:"middle"===s&&y?$(i):i})),l&&t(Mr,Object.assign({"aria-label":l,$maxLines:a,$truncateType:s,$labelDisplayType:r},{children:"middle"===s&&S?$(l):l}))]}))};var Rr=bn;var Pr=bn,Nr=Sn,Yr=Cn;var Vr=bn,Jr=function(){this.__data__=new Rr,this.size=0},Zr=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Ur=function(e){return this.__data__.get(e)},Xr=function(e){return this.__data__.has(e)},Gr=function(e,t){var n=this.__data__;if(n instanceof Pr){var r=n.__data__;if(!Nr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Yr(r)}return n.set(e,t),this.size=n.size,this};function qr(e){var t=this.__data__=new Vr(e);this.size=t.size}qr.prototype.clear=Jr,qr.prototype.delete=Zr,qr.prototype.get=Ur,qr.prototype.has=Xr,qr.prototype.set=Gr;var Qr=qr;var Kr=Cn,ei=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ti=function(e){return this.__data__.has(e)};function ni(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Kr;++t<n;)this.add(e[t])}ni.prototype.add=ni.prototype.push=ei,ni.prototype.has=ti;var ri=ni,ii=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},ai=function(e,t){return e.has(t)};var oi=function(e,t,n,r,i,a){var o=1&n,l=e.length,s=t.length;if(l!=s&&!(o&&s>l))return!1;var c=a.get(e),u=a.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&n?new ri:void 0;for(a.set(e,t),a.set(t,e);++d<l;){var g=e[d],p=t[d];if(r)var m=o?r(p,g,d,t,e,a):r(g,p,d,e,t,a);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!ii(t,(function(e,t){if(!ai(h,t)&&(g===e||i(g,e,n,r,a)))return h.push(t)}))){f=!1;break}}else if(g!==p&&!i(g,p,n,r,a)){f=!1;break}}return a.delete(e),a.delete(t),f};var li=Xe.Uint8Array,si=an,ci=oi,ui=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},di=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},fi=Ge?Ge.prototype:void 0,hi=fi?fi.valueOf:void 0;var gi=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new li(e),new li(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return si(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=ui;case"[object Set]":var s=1&r;if(l||(l=di),e.size!=t.size&&!s)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var u=ci(l(e),l(t),r,i,a,o);return o.delete(e),u;case"[object Symbol]":if(hi)return hi.call(e)==hi.call(t)}return!1};var pi=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},mi=pi,vi=Ve;var yi=function(e,t,n){var r=t(e);return vi(e)?r:mi(r,n(e))};var bi=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},Si=function(){return[]},Fi=Object.prototype.propertyIsEnumerable,$i=Object.getOwnPropertySymbols,wi=$i?function(e){return null==e?[]:(e=Object(e),bi($i(e),(function(t){return Fi.call(e,t)})))}:Si;var xi=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Bi=lt,Di=st;var Oi=function(e){return Di(e)&&"[object Arguments]"==Bi(e)},ki=st,Ei=Object.prototype,Hi=Ei.hasOwnProperty,ji=Ei.propertyIsEnumerable,Ai=Oi(function(){return arguments}())?Oi:function(e){return ki(e)&&Hi.call(e,"callee")&&!ji.call(e,"callee")},_i={exports:{}};var Ti=function(){return!1};!function(e,t){var n=Xe,r=Ti,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,l=(o?o.isBuffer:void 0)||r;e.exports=l}(_i,_i.exports);var zi=_i.exports,Mi=/^(?:0|[1-9]\d*)$/;var Ci=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Mi.test(e))&&e>-1&&e%1==0&&e<t};var Li=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Wi=lt,Ii=Li,Ri=st,Pi={};Pi["[object Float32Array]"]=Pi["[object Float64Array]"]=Pi["[object Int8Array]"]=Pi["[object Int16Array]"]=Pi["[object Int32Array]"]=Pi["[object Uint8Array]"]=Pi["[object Uint8ClampedArray]"]=Pi["[object Uint16Array]"]=Pi["[object Uint32Array]"]=!0,Pi["[object Arguments]"]=Pi["[object Array]"]=Pi["[object ArrayBuffer]"]=Pi["[object Boolean]"]=Pi["[object DataView]"]=Pi["[object Date]"]=Pi["[object Error]"]=Pi["[object Function]"]=Pi["[object Map]"]=Pi["[object Number]"]=Pi["[object Object]"]=Pi["[object RegExp]"]=Pi["[object Set]"]=Pi["[object String]"]=Pi["[object WeakMap]"]=!1;var Ni=function(e){return Ri(e)&&Ii(e.length)&&!!Pi[Wi(e)]};var Yi=function(e){return function(t){return e(t)}},Vi={exports:{}};!function(e,t){var n=Je,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Vi,Vi.exports);var Ji=Vi.exports,Zi=Ni,Ui=Yi,Xi=Ji&&Ji.isTypedArray,Gi=Xi?Ui(Xi):Zi,qi=xi,Qi=Ai,Ki=Ve,ea=zi,ta=Ci,na=Gi,ra=Object.prototype.hasOwnProperty;var ia=function(e,t){var n=Ki(e),r=!n&&Qi(e),i=!n&&!r&&ea(e),a=!n&&!r&&!i&&na(e),o=n||r||i||a,l=o?qi(e.length,String):[],s=l.length;for(var c in e)!t&&!ra.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ta(c,s))||l.push(c);return l},aa=Object.prototype;var oa=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||aa)};var la=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),sa=oa,ca=la,ua=Object.prototype.hasOwnProperty;var da=Ft,fa=Li;var ha=function(e){return null!=e&&fa(e.length)&&!da(e)},ga=ia,pa=function(e){if(!sa(e))return ca(e);var t=[];for(var n in Object(e))ua.call(e,n)&&"constructor"!=n&&t.push(n);return t},ma=ha;var va=function(e){return ma(e)?ga(e):pa(e)},ya=yi,ba=wi,Sa=va;var Fa=function(e){return ya(e,Sa,ba)},$a=Object.prototype.hasOwnProperty;var wa=function(e,t,n,r,i,a){var o=1&n,l=Fa(e),s=l.length;if(s!=Fa(t).length&&!o)return!1;for(var c=s;c--;){var u=l[c];if(!(o?u in t:$a.call(t,u)))return!1}var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var h=!0;a.set(e,t),a.set(t,e);for(var g=o;++c<s;){var p=e[u=l[c]],m=t[u];if(r)var v=o?r(m,p,u,t,e,a):r(p,m,u,e,t,a);if(!(void 0===v?p===m||i(p,m,n,r,a):v)){h=!1;break}g||(g="constructor"==u)}if(h&&!g){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return a.delete(e),a.delete(t),h},xa=Wt(Xe,"DataView"),Ba=Sn,Da=Wt(Xe,"Promise"),Oa=Wt(Xe,"Set"),ka=Wt(Xe,"WeakMap"),Ea=lt,Ha=Dt,ja="[object Map]",Aa="[object Promise]",_a="[object Set]",Ta="[object WeakMap]",za="[object DataView]",Ma=Ha(xa),Ca=Ha(Ba),La=Ha(Da),Wa=Ha(Oa),Ia=Ha(ka),Ra=Ea;(xa&&Ra(new xa(new ArrayBuffer(1)))!=za||Ba&&Ra(new Ba)!=ja||Da&&Ra(Da.resolve())!=Aa||Oa&&Ra(new Oa)!=_a||ka&&Ra(new ka)!=Ta)&&(Ra=function(e){var t=Ea(e),n="[object Object]"==t?e.constructor:void 0,r=n?Ha(n):"";if(r)switch(r){case Ma:return za;case Ca:return ja;case La:return Aa;case Wa:return _a;case Ia:return Ta}return t});var Pa=Qr,Na=oi,Ya=gi,Va=wa,Ja=Ra,Za=Ve,Ua=zi,Xa=Gi,Ga="[object Arguments]",qa="[object Array]",Qa="[object Object]",Ka=Object.prototype.hasOwnProperty;var eo=function(e,t,n,r,i,a){var o=Za(e),l=Za(t),s=o?qa:Ja(e),c=l?qa:Ja(t),u=(s=s==Ga?Qa:s)==Qa,d=(c=c==Ga?Qa:c)==Qa,f=s==c;if(f&&Ua(e)){if(!Ua(t))return!1;o=!0,u=!1}if(f&&!u)return a||(a=new Pa),o||Xa(e)?Na(e,t,n,r,i,a):Ya(e,t,s,n,r,i,a);if(!(1&n)){var h=u&&Ka.call(e,"__wrapped__"),g=d&&Ka.call(t,"__wrapped__");if(h||g){var p=h?e.value():e,m=g?t.value():t;return a||(a=new Pa),i(p,m,n,r,a)}}return!!f&&(a||(a=new Pa),Va(e,t,n,r,i,a))},to=st;var no=function e(t,n,r,i,a){return t===n||(null==t||null==n||!to(t)&&!to(n)?t!=t&&n!=n:eo(t,n,r,i,e,a))},ro=Qr,io=no;var ao=vt;var oo=function(e){return e==e&&!ao(e)},lo=oo,so=va;var co=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},uo=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var l=n[i];if(o&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<a;){var s=(l=n[i])[0],c=e[s],u=l[1];if(o&&l[2]){if(void 0===c&&!(s in e))return!1}else{var d=new ro;if(r)var f=r(c,u,s,e,t,d);if(!(void 0===f?io(u,c,3,r,d):f))return!1}}return!0},fo=function(e){for(var t=so(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,lo(i)]}return t},ho=co;var go=tr,po=Ai,mo=Ve,vo=Ci,yo=Li,bo=rr;var So=function(e,t){return null!=e&&t in Object(e)},Fo=function(e,t,n){for(var r=-1,i=(t=go(t,e)).length,a=!1;++r<i;){var o=bo(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&yo(i)&&vo(o,i)&&(mo(e)||po(e))};var $o=no,wo=sr,xo=function(e,t){return null!=e&&Fo(e,t,So)},Bo=mt,Do=oo,Oo=co,ko=rr;var Eo=or;var Ho=function(e){return function(t){return null==t?void 0:t[e]}},jo=function(e){return function(t){return Eo(t,e)}},Ao=mt,_o=rr;var To=function(e){var t=fo(e);return 1==t.length&&t[0][2]?ho(t[0][0],t[0][1]):function(n){return n===e||uo(n,e,t)}},zo=function(e,t){return Bo(e)&&Do(t)?Oo(ko(e),t):function(n){var r=wo(n,e);return void 0===r&&r===t?xo(n,e):$o(t,r,3)}},Mo=function(e){return e},Co=Ve,Lo=function(e){return Ao(e)?Ho(_o(e)):jo(e)};var Wo=function(e){return"function"==typeof e?e:null==e?Mo:"object"==typeof e?Co(e)?zo(e[0],e[1]):To(e):Lo(e)},Io=Wo,Ro=ha,Po=va;var No=function(e){return function(t,n,r){var i=Object(t);if(!Ro(t)){var a=Io(n);t=Po(t),n=function(e){return a(i[e],e,i)}}var o=e(t,n,r);return o>-1?i[a?t[o]:o]:void 0}};var Yo=/\s/;var Vo=function(e){for(var t=e.length;t--&&Yo.test(e.charAt(t)););return t},Jo=/^\s+/;var Zo=function(e){return e?e.slice(0,Vo(e)+1).replace(Jo,""):e},Uo=vt,Xo=dt,Go=/^[-+]0x[0-9a-f]+$/i,qo=/^0b[01]+$/i,Qo=/^0o[0-7]+$/i,Ko=parseInt;var el=function(e){if("number"==typeof e)return e;if(Xo(e))return NaN;if(Uo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Uo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zo(e);var n=qo.test(e);return n||Qo.test(e)?Ko(e.slice(2),n?2:8):Go.test(e)?NaN:+e},tl=1/0;var nl=function(e){return e?(e=el(e))===tl||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var rl=function(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1},il=Wo,al=function(e){var t=nl(e),n=t%1;return t==t?n?t-n:t:0},ol=Math.max;var ll=Ye(No((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:al(n);return i<0&&(i=ol(r+i,0)),rl(e,il(t),i)}))),sl=no;var cl=Ye((function(e,t){return sl(e,t)})),ul={exports:{}};ul.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=m;var F="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[F])},w=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();S[a]&&(i=a),n&&(S[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var l=t.name;S[l]=t,i=l}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},B=y;B.l=w,B.i=$,B.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return B},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return x(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<x(e)},v.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),h=function(e,t){var i=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(l)},g=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,S=(p<b?p+7:p)-b;return h(r?v-S:v+(6-S),m);case l:case f:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case a:return g(y+"Seconds",2);case i:return g(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,s=B.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var p=this.clone().set(f,1);p.$d[h](g),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[B.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var g=B.p(u),p=function(e){var t=x(h);return B.w(t.date(t.date()+Math.round(e*r)),h)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(f={},f[a]=t,f[o]=n,f[i]=e,f)[g]||1,v=this.$d.getTime()+r*m;return B.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),a=this.$H,o=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},f=function(e){return B.s(a%12||12,e,"0")},g=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return l+1;case"MM":return B.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(a);case"HH":return B.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return B.s(o,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var g,p=this,m=B.p(f),v=x(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,S=function(){return B.m(p,v)};switch(m){case d:g=S()/12;break;case c:g=S();break;case u:g=S()/3;break;case s:g=(b-y)/6048e5;break;case l:g=(b-y)/864e5;break;case o:g=b/n;break;case a:g=b/t;break;case i:g=b/e;break;default:g=b}return h?g:B.a(g)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return S[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=w(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return B.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),O=D.prototype;return x.prototype=O,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,D,x),e.$i=!0),x},x.locale=w,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=S[b],x.Ls=S,x.p={},x}();var dl=Ye(ul.exports),fl={exports:{}};fl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var c=o[s],u=d[c],f=u&&u[0],h=u&&u[1];o[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,s=i.parser,c=e.slice(r),u=a.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var l=o[1];if("string"==typeof l){var s=!0===o[2],c=!0===o[3],u=s||c,d=o[2];c&&(d=o[2]),a=this.$locale(),!s&&d&&(a=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),i=r.year,a=r.month,o=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,g=o||(i||a?1:h.getDate()),p=i||h.getFullYear(),m=0;i&&!a||(m=a>0?a-1:h.getMonth());var v=l||0,y=s||0,b=c||0,S=u||0;return d?new Date(Date.UTC(p,m,g,v,y,b,S+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,v,y,b,S)):new Date(p,m,g,v,y,b,S)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var h=l.length,g=1;g<=h;g+=1){o[1]=l[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var hl=Ye(fl.exports),gl={exports:{}};gl.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(a,r):!this.isBefore(a,r))&&(s?this.isBefore(o,r):!this.isAfter(o,r))||(l?this.isBefore(a,r):!this.isAfter(a,r))&&(s?this.isAfter(o,r):!this.isBefore(o,r))}};var pl=Ye(gl.exports),ml={exports:{}};ml.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var vl=Ye(ml.exports),yl={exports:{}};yl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var bl,Sl,Fl,$l=Ye(yl.exports),wl={exports:{}},xl=Ye(wl.exports=(bl={year:0,month:1,day:2,hour:3,minute:4,second:5},Sl={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Sl[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Sl[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var l=r[o],s=l.type,c=l.value,u=bl[s];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],f=24===d?0:d,h=a[0]+"-"+a[1]+"-"+a[2]+" "+f+":"+a[4]+":"+a[5]+":000",g=+e;return(n.utc(h).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),l=Math.round((a-new Date(o))/1e3/60),s=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,l=i||t||r,s=a(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));dl.extend(pl),dl.extend($l),dl.extend(vl),dl.extend(hl),dl.extend(xl),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=dl(t).startOf("week");return Bl(n).map((e=>Dl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Dl(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(dl(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+dl(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=dl(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?dl(r):void 0,i?dl(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Fl||(Fl={}));const Bl=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Dl=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Ol=[1,3,5,7,8,10,12],kl=[4,6,9,11];var El,Hl,jl;function Al(e){const t=a(null);return f((()=>{t.current=e}),[e]),h(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":Ol.includes(a)?Math.min(i,31).toString():kl.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=dl(e,n);return dl(t,n).diff(r,"minute")},e.toDayjs=e=>e?dl(e):dl(),e.addMinutesToTime=(e,t,n="HH:mm")=>dl(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>dl(e).isSame(dl(t),n)}(El||(El={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!dl(e).isBefore(r,"day"))||!(!i||!dl(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(dl(e).isValid())return e}return""}}(Hl||(Hl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(jl||(jl={}));const _l=e=>{const t=(e=>{const t=a(e),n=a();return d((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},Tl=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),zl=({children:e})=>{const[n,r]=o(-1);return t(Tl.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},Ml={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Cl=e=>Object.keys(Ml).reduce(((t,n)=>{const r=Ml[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ll=Cl("max-width"),Wl=(Cl("min-width"),Ml),Il=v.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Rl=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Pl=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${Rl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Nl=v(Pl)`
    animation-delay: -0.45s;
`,Yl=v(Pl)`
    animation-delay: -0.3s;
`,Vl=v(Pl)`
    animation-delay: -0.15s;
`,Jl={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${Dr.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${Dr.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Dr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${Dr.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${Dr.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Dr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Zl=e=>t=>{var n;const r=t.theme,i=dr(Jl,r[fr.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?ur(i,e,r.options.designToken):ur(i,e)},Ul=Zl("InputBoxShadow"),Xl=Zl("InputErrorBoxShadow"),Gl=(Zl("ElevationBoxShadow"),Zl("Table.Header"),Zl("Table.Cell.Primary"),Zl("Table.Cell.Secondary"),Zl("Table.Cell.Selected"),Zl("Table.Cell.Hover"),Zl("Button.Danger.BackgroundColor"),Zl("Button.Danger.Hover"),Zl("Button.Danger.Primary"),Zl("Button.Danger.Border"),y`
    border: 1px solid ${Dr.Accent.Light[1]};
    box-shadow: ${Ul};
`),ql=y`
    border: 1px solid ${Dr.Accent.Light[1]};
    box-shadow: none;
`,Ql=y`
    border: 1px solid ${Dr.Neutral[5]};
    box-shadow: none;
`,Kl=y`
    border: 1px solid ${Dr.Validation.Red.Border};
    box-shadow: ${Xl};
`,es=v.div`
    border: 1px solid ${Dr.Neutral[5]};
    border-radius: 4px;
    background: ${Dr.Neutral[8]};

    :focus-within {
        ${Gl}
    }
    ${e=>e.$focused&&Gl}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${ql}
                }
                ${e.$focused&&ql}
            `:e.$disabled?y`
                background: ${Dr.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Ql}
                }
                ${e.$focused&&Ql}
            `:e.$error?y`
                border: 1px solid ${Dr.Validation.Red.Border};

                :focus-within {
                    ${Kl}
                }
                ${e.$focused&&Kl}
            `:void 0}
`;v(es)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ts=v.input`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Dr.Neutral[1]};
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
        color: ${Dr.Neutral[3]};
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
`,ns=v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Dr.Primary};
    }
`,rs=v.div`
    overflow: hidden;
    border: 1px solid ${Dr.Neutral[5]};
    border-radius: 4px;
    background: ${Dr.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${Ll.mobileL} {
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
        background: ${Dr.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,is=v.div`
    background: transparent;
    padding: 0.5rem;
`,as=v.ul`
    list-style-type: none;
`,os=v.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Dr.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${Dr.Accent.Light[5]};
        `}
`,ls=v(D)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Dr.Primary};
`,ss=v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,cs=v(B)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Dr.Primary};
`,us=v(x)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Dr.Accent.Light[2]};
`,ds=v.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,fs=v(ns)`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Dr.Primary};
`,hs=v(fs)`
    outline-offset: 0.25rem;
`,gs=v(fs)`
    padding: 0.5rem 1rem;
`,ps=v.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;

    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","regular")}
`,ms=v(w)`
    ${e=>{const t="small"===e.$variant?1:1.125;return y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Dr.Validation.Red.Icon};
`,vs=v((({color:n,className:r,size:i})=>e(Il,Object.assign({className:r,$size:i,$color:n},{children:[t(Pl,{id:"inner1"}),t(Nl,{id:"inner2"}),t(Yl,{id:"inner3"}),t(Vl,{id:"inner4"})]}))))`
    margin-right: 0.625rem;
    color: ${Dr.Primary};
`,ys=v.button`
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
                background-color: ${Dr.Neutral[7]};
            `}
    }
`,bs=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,l=wr(e,["children","focusHighlight","focusOutline","type"]);return t(ys,Object.assign({ref:n,$outline:a,$highlight:i,type:o},l,{children:r}))})),Ss=e=>"small"===e?1:1.125,Fs=e=>y`
        height: ${Ss(e)}rem;
        width: ${Ss(e)}rem;
    `,$s=v.div`
    background: ${Dr.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,ws=v.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,xs=v(ts)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Bs=v(k)`
    color: ${Dr.Neutral[3]};
    flex-shrink: 0;
    ${e=>Fs(e.$variant)}
`,Ds=v(bs)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Dr.Neutral[3]};
    cursor: pointer;

    ${e=>y`
            svg {
                ${Fs(e.$variant)}
            }
        `}
`,Os=p(((n,r)=>{var{value:i,variant:a,onClear:o}=n,l=wr(n,["value","variant","onClear"]);return e($s,{children:[e(ws,{children:[t(Bs,{$variant:a,"aria-hidden":!0}),t(xs,Object.assign({ref:r,value:i,$variant:a},l))]}),i&&t(Ds,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:a},{children:t(O,{"aria-hidden":!0})}))]})})),ks=({listItems:r,multiSelect:i,selectedItems:l,disableItemFocus:s,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:f=2,labelDisplayType:g="inline",variant:p="default",listboxId:v,width:y,topScrollItem:b,onSelectItem:S,onSelectAll:F,onDismiss:$,onRetry:w,valueExtractor:x,listExtractor:B,renderListItem:D,renderCustomCallToAction:O,enableSearch:k,hideNoResultsDisplay:E,searchPlaceholder:H="Search",searchFunction:j,onSearch:A})=>{const{focusedIndex:_,setFocusedIndex:T}=m(Tl),[z,M]=o(""),[C,L]=o(r),W=_l(c),I=(()=>{const[e,t]=o(!1);return d((()=>{t(!0)}),[]),e})(),R=a(),P=a(),N=a([]),Y=a(),V=e=>B?B(e):e.toString(),J=h((e=>!!ll(l,(t=>cl(t,e)))),[l]),Z=Al((()=>j(z))),U=Al((()=>r.filter((e=>{var t;const n=V(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),a=z.trim().toLowerCase();return r.includes(a)||i&&i.includes(a)})))),X=(e,t)=>{T(t),null==S||S(e,(e=>x?x(e):e)(e))},G=e=>{const t=e.target.value;M(t),null==A||A()},q=()=>{var e;M(""),null===(e=Y.current)||void 0===e||e.focus(),null==A||A()},Q=()=>{null==w||w()};((e,t,n="window",r)=>{const i=a();d((()=>{i.current=t}),[t]),d((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const a=e=>i.current(e);return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}),[e,n])})("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),_<C.length-1){const e=_+1;null===(t=N.current[e])||void 0===t||t.focus(),T(e)}break;case"ArrowUp":if(e.preventDefault(),_>0){const e=_-1;null===(n=N.current[e])||void 0===n||n.focus(),T(e)}else 0===_&&Y.current&&(Y.current.focus(),T(-1));break;case"Space":case"Enter":document.activeElement===N.current[_]&&(e.preventDefault(),C[_]&&X(C[_],_))}})),d((()=>{if(void 0===b)return;const e=setTimeout((()=>{var e;const t=r.indexOf(b),n=N.current[t];if(R.current){const t=null!==(e=null==n?void 0:n.offsetTop)&&void 0!==e?e:0;R.current.scrollTop=t-8}T(t)}),0);return()=>clearTimeout(e)}),[N,r,T,b]),d((()=>{if(I)return;if(s)return;const e=r.findIndex((e=>J(e)));Y.current?(T(-1),setTimeout((()=>{var e;return null===(e=Y.current)||void 0===e?void 0:e.focus()}),200)):N.current[_]?setTimeout((()=>{var e;return null===(e=N.current[_])||void 0===e?void 0:e.focus()}),200):N.current[e]?(T(e),setTimeout((()=>{var t;return null===(t=N.current[e])||void 0===t?void 0:t.focus()}),200)):(T(0),setTimeout((()=>{var e;return null===(e=N.current[0])||void 0===e?void 0:e.focus()}),200))}),[J,s,_,r,I,T]),d((()=>{I&&W&&(s||"success"===c&&Y.current&&(T(-1),Y.current.focus()))}),[I,W,c,T,s]),d((()=>{L(""===z?r:j?Z():U())}),[Z,U,r,j,z]);const K=e=>i?t(e?cs:us,{"aria-hidden":!0}):e?t(ls,{"aria-hidden":!0}):t(ss,{}),ee=(e,n)=>{const r=V(e),i="string"==typeof r?r:r.title,a="string"==typeof r?void 0:r.secondaryLabel;return t(Ir,{displayType:g,label:i,maxLines:f,selected:n,sublabel:a,truncationType:u,variant:p})},te=()=>{if(!w||w&&"success"===c)return C.map(((r,a)=>{const o=J(r),l=a===_;return t(os,Object.assign({"aria-selected":o,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>X(r,a),onMouseEnter:()=>(e=>{T(e)})(a),ref:e=>N.current[a]=e,role:"option",tabIndex:l?0:-1,$active:l},{children:D?D(r,{selected:o}):e(n,{children:[K(o),ee(r,o)]})}),((e,t)=>`item_${t}__${x?x(e):e}`)(r,a))}))},ne=()=>{if((k||j)&&"success"===c)return t(Os,{ref:Y,onChange:G,value:z,placeholder:H,"data-testid":"search-input","aria-label":"Enter text to search",onClear:q,variant:p})},re=()=>{if(i&&C.length>0&&!z&&"success"===c)return t(ds,{children:t(gs,Object.assign({onClick:F,type:"button",$variant:p},{children:0===l.length?"Select all":"Clear all"}))})},ie=()=>{if(!E&&(z||!k)&&0===C.length&&"success"===c)return e(ps,Object.assign({"data-testid":"list-no-results",$variant:p},{children:[t(ms,{"data-testid":"no-result-icon",$variant:p}),"No results found."]}))},ae=()=>{if(w&&"loading"===c)return e(ps,Object.assign({"data-testid":"list-loading",$variant:p},{children:[t(vs,{}),"Loading..."]}))},oe=()=>{if(w&&"fail"===c)return e(ps,Object.assign({"data-testid":"list-fail",$variant:p},{children:[t(ms,{"data-testid":"load-error-icon",$variant:p}),"Failed to load. ",t(hs,Object.assign({onClick:Q,type:"button",$variant:p},{children:"Try again."}))]}))};return e(rs,Object.assign({"data-testid":"dropdown-container",ref:R,$width:y},{children:[e(is,Object.assign({ref:P,"data-testid":"dropdown-list"},{children:[ne(),re(),ie(),ae(),oe(),t(as,Object.assign({role:"listbox",id:v},{children:te()}))]})),(()=>{if(O)return t("div",Object.assign({"data-testid":"custom-cta"},{children:O($,C)}))})()]}))},Es="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Hs=v(ns)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,js=v.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Es};

    svg {
        color: ${Dr.Neutral[3]};
        ${e=>{const t="small"===e.$variant?pr.BodySmall.fontSize:pr.Body.fontSize;return y`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,As=p((({children:n,disabled:r,expanded:i,listboxId:a,readOnly:o,variant:l},s)=>e(Hs,Object.assign({ref:s,type:"button","aria-expanded":i,"aria-haspopup":"listbox","data-testid":"selector",disabled:r,"aria-controls":a,$variant:l},{children:[n,!o&&t(js,Object.assign({$expanded:i,$variant:l},{children:t(E,{"aria-hidden":!0})}))]})))),_s=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=_s(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Ts=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>_s(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Dr.Accent.Light[3]};
    }
`,zs=v.button`
    ${Ts}
    cursor: pointer;
`;v.div`
    ${Ts}
`;const Ms=S`
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
    border: 1px solid ${Dr.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Dr.Neutral[8]};

    :focus-within {
        border: 1px solid ${Dr.Accent.Light[1]};
        box-shadow: ${Ul};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${Ms} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${Dr.Neutral[6](e)};

                ${zs} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Dr.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${zs} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${Dr.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Dr.Validation.Red.Border(e)};
                    box-shadow: ${Xl};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Es};
    margin-left: 1rem;
`,v(E)`
    color: ${Dr.Neutral[3]};
    ${e=>{let t=pr.Body.fontSize;return"small"===e.$variant&&(t=pr.BodySmall.fontSize),y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,v.div`
    height: 1px;
    background: ${Dr.Neutral[5]};
    margin: 0 0.5rem;
`;const Cs=v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Ls=v.div`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Ws=v(Ls)`
    color: ${Dr.Neutral[3]};
`;var Is;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Is||(Is={}));const Rs=v.div`
    display: flex;
    flex-direction: column;
`,Ps=e=>"right"===e?"bottom-end":"bottom-start",Ns=({enabled:r,isOpen:i,onOpen:l,onClose:s,onDismiss:c,renderElement:u,renderDropdown:f,customZIndex:h,clickToToggle:g=!1,offset:p=0,alignment:m="left",fitAvailableHeight:v})=>{var y;const b=a(null),S=a(null),{width:F}=Le({targetRef:b,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<Wl.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:w,floatingStyles:x,context:B}=j({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!i?null==l||l():!e&&i&&(null==s||s(n))},whileElementsMounted:A,placement:Ps(m),middleware:[_(p),T(),z({limiter:M()}),C({apply({availableHeight:e}){S.current&&Object.assign(S.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}}),$]}),D=(()=>{const[e,t]=o(void 0),n=H();return d((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on(Is.Change,e),n.events.emit(Is.Ready),()=>n.events.off(Is.Change,e)}),[n]),e})(),{isMounted:O,styles:k}=L(B,{initial:{opacity:0},open:{opacity:1},duration:300}),E=W(B,{enabled:r,toggle:g}),Y=I(B,{enabled:r}),{getReferenceProps:V,getFloatingProps:J}=R([E,Y]);return e(n,{children:[t("div",Object.assign({ref:e=>{b.current=e,w.setReference(e)}},V(),{children:u()})),O&&t(P,{children:t(N,Object.assign({context:B,modal:!1,initialFocus:S,returnFocus:!1},{children:t("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},x),{zIndex:null!==(y=null!=h?h:D)&&void 0!==y?y:50})},J(),{children:t(Rs,Object.assign({ref:S,style:Object.assign({},k),inert:k.opacity<1?"":void 0},{children:f({elementWidth:F})}))}))}))})]})},Ys=({selectedOption:e,placeholder:n="Select",options:r,disabled:i,error:l,className:s,"data-testid":c,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:g,valueExtractor:p,valueToStringFunction:m,listExtractor:v,displayValueExtractor:y,onSelectOption:b,onShowOptions:S,onHideOptions:F,onRetry:$,optionsLoadState:w="success",optionTruncationType:x="end",renderCustomSelectedOption:B,renderListItem:D,hideNoResultsDisplay:O,renderCustomCallToAction:k,onBlur:E,variant:H="default",readOnly:j,alignment:A,dropdownZIndex:_})=>{const[T,z]=o(e),[M,C]=o(!1),[L,W]=o(!1),[I]=o((()=>jl.generate())),R=a(),P=a(),N=a();d((()=>{z(e)}),[e]);const Y=(e,t)=>{P.current.focus(),z(e),C(!1),X(!1),null==b||b(e,t)},V=()=>{M&&(C(!1),X(!1))},J=()=>{L||M||W(!0)},Z=e=>{!L||M||R.current.contains(e.relatedTarget)||(W(!1),null==E||E())},U=e=>{if("middle"===x){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),_r.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),t,120,8)}return e},X=e=>{e?null==S||S():null==F||F()};return t(zl,{children:t(Ns,{enabled:!j&&!i,isOpen:M,renderElement:()=>t(es,Object.assign({className:s,"data-testid":c,id:u,ref:R,tabIndex:-1,onFocus:J,onBlur:Z,$focused:L,$disabled:i,$readOnly:j,$error:l},{children:t(As,Object.assign({ref:P,disabled:i,expanded:M,listboxId:I,readOnly:j,variant:H},{children:t(Cs,Object.assign({ref:N},{children:T?B?B(T):t(Ls,Object.assign({truncateType:x,$variant:H},{children:U(y?y(T):p?p(T):T.toString())})):t(Ws,Object.assign({truncateType:x,$variant:H},{children:n}))}))}))})),renderDropdown:({elementWidth:e})=>t(ks,{listboxId:I,listItems:r,onSelectItem:Y,onDismiss:V,valueExtractor:p,listExtractor:v,enableSearch:f,searchPlaceholder:g,searchFunction:h,selectedItems:T?[T]:[],onRetry:$,itemsLoadState:w,itemTruncationType:x,renderListItem:D,hideNoResultsDisplay:O,renderCustomCallToAction:k,variant:H,width:e}),onOpen:()=>{C(!0),X(!0),W(!0)},onClose:e=>{C(!1),X(!1),"click"!==e&&(W(!1),null==E||E())},onDismiss:()=>{P.current.focus(),C(!1),X(!1)},clickToToggle:!0,offset:8,alignment:A,fitAvailableHeight:!0,customZIndex:_})})};export{Ys as InputSelect};
//# sourceMappingURL=index.js.map
