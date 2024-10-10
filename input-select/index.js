import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as a,useState as o,isValidElement as l,createRef as s,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as f,useCallback as h,useMemo as g,forwardRef as p,useContext as m}from"react";import v,{css as y,useTheme as b,keyframes as $}from"styled-components";import{ExternalIcon as S}from"@lifesg/react-icons/external";import{findDOMNode as F}from"react-dom";import{ExclamationCircleFillIcon as x}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as B}from"@lifesg/react-icons/square";import{SquareTickFillIcon as w}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as D}from"@lifesg/react-icons/tick";import{CrossIcon as O}from"@lifesg/react-icons/cross";import{MagnifierIcon as k}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as E}from"@lifesg/react-icons/chevron-down";import{useFloatingTree as H,useFloating as j,autoUpdate as T,offset as A,flip as _,shift as z,limitShift as M,size as C,useTransitionStyles as I,useClick as L,useDismiss as W,useInteractions as P,FloatingPortal as R,FloatingFocusManager as N}from"@floating-ui/react";var Y=function(e,t){return Y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Y(e,t)};var V=function(){return V=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},V.apply(this,arguments)};var J="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},U="object"==typeof J&&J&&J.Object===Object&&J,X="object"==typeof self&&self&&self.Object===Object&&self,G=U||X||Function("return this")(),q=G,Q=function(){return q.Date.now()},K=/\s/;var ee=function(e){for(var t=e.length;t--&&K.test(e.charAt(t)););return t},te=/^\s+/;var re=function(e){return e?e.slice(0,ee(e)+1).replace(te,""):e},ne=G.Symbol,ie=ne,ae=Object.prototype,oe=ae.hasOwnProperty,le=ae.toString,se=ie?ie.toStringTag:void 0;var ce=function(e){var t=oe.call(e,se),r=e[se];try{e[se]=void 0;var n=!0}catch(e){}var i=le.call(e);return n&&(t?e[se]=r:delete e[se]),i},ue=Object.prototype.toString;var de=ce,fe=function(e){return ue.call(e)},he=ne?ne.toStringTag:void 0;var ge=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":he&&he in Object(e)?de(e):fe(e)},pe=function(e){return null!=e&&"object"==typeof e};var me=re,ve=Z,ye=function(e){return"symbol"==typeof e||pe(e)&&"[object Symbol]"==ge(e)},be=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Se=/^0o[0-7]+$/i,Fe=parseInt;var xe=Z,Be=Q,we=function(e){if("number"==typeof e)return e;if(ye(e))return NaN;if(ve(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ve(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=me(e);var r=$e.test(e);return r||Se.test(e)?Fe(e.slice(2),r?2:8):be.test(e)?NaN:+e},De=Math.max,Oe=Math.min;var ke=function(e,t,r){var n,i,a,o,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,a=i;return n=i=void 0,c=t,o=e.apply(a,r)}function g(e){var r=e-s;return void 0===s||r>=t||r<0||d&&e-c>=a}function p(){var e=Be();if(g(e))return m(e);l=setTimeout(p,function(e){var r=t-(e-s);return d?Oe(r,a-(e-c)):r}(e))}function m(e){return l=void 0,f&&n?h(e):(n=i=void 0,o)}function v(){var e=Be(),r=g(e);if(n=arguments,i=this,s=e,r){if(void 0===l)return function(e){return c=e,l=setTimeout(p,t),u?h(e):o}(s);if(d)return clearTimeout(l),l=setTimeout(p,t),h(s)}return void 0===l&&(l=setTimeout(p,t)),o}return t=we(t)||0,xe(r)&&(u=!!r.leading,a=(d="maxWait"in r)?De(we(r.maxWait)||0,t):a,f="trailing"in r?!!r.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=s=i=l=void 0},v.flush=function(){return void 0===l?o:m(Be())},v},Ee=ke,He=Z;var je=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return He(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Ee(e,t,{leading:n,maxWait:t,trailing:i})},Te=function(e,t,r,n){switch(t){case"debounce":return ke(e,r,n);case"throttle":return je(e,r,n);default:return e}},Ae=function(e){return"function"==typeof e},_e=function(){return"undefined"==typeof window},ze=function(e){return e instanceof Element||e instanceof HTMLDocument},Me=function(e,t,r,n){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!n||t.height===o&&!r?t:(e&&Ae(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!_e()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(_e())return null;if(t)return document.querySelector(t);if(n&&ze(n))return n;if(r.targetRef&&ze(r.targetRef.current))return r.targetRef.current;var i=F(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,a=t.handleHeight,o=void 0===a||a,l=t.onResize;if(i||o){var s=Me(l,r.setState.bind(r),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!_e()&&s({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Ae(t)?"renderProp":Ae(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,c=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=s(),r.observableElement=null,_e()||(r.resizeHandler=Te(r.createResizeHandler,i,o,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Y(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){_e()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(e=i)(s);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(s,["targetRef"]);return c(e,u)}return c(e,s);case"childArray":return(e=i).map((function(e){return!!e&&c(e,s)}));default:return n.createElement(o,null)}}}(u);var Ce=_e()?d:f;function Ie(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,l=void 0===i?1e3:i,s=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,g=e.observerOptions,p=e.onResize,m=a(r),v=a(null),y=null!=h?h:v,b=a(),$=o({width:void 0,height:void 0}),S=$[0],F=$[1];return Ce((function(){if(!_e()){var e=Me(p,F,u,f);b.current=Te((function(t){(u||f)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!_e()&&e({width:n,height:i}),m.current=!1}))}),n,l,s);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,g),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[n,l,s,u,f,p,g,y.current]),V({ref:y},S)}const Le={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},We={D1:{fontFamily:Le.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Le.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Le.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Le.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Le.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Le.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Le.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Le.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Le.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Le.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Le.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Le.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Le.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Le.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Pe={D1:{fontFamily:Le.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Le.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Le.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Le.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Le.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Le.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Le.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Le.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Le.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Le.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Le.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Le.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Le.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Le.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Re={D1:{fontFamily:Le.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Le.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Le.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Le.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Le.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Le.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Le.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Le.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Le.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Le.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Le.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Le.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Le.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Le.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var Ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ve=Array.isArray,Je="object"==typeof Ne&&Ne&&Ne.Object===Object&&Ne,Ze=Je,Ue="object"==typeof self&&self&&self.Object===Object&&self,Xe=Ze||Ue||Function("return this")(),Ge=Xe.Symbol,qe=Ge,Qe=Object.prototype,Ke=Qe.hasOwnProperty,et=Qe.toString,tt=qe?qe.toStringTag:void 0;var rt=function(e){var t=Ke.call(e,tt),r=e[tt];try{e[tt]=void 0;var n=!0}catch(e){}var i=et.call(e);return n&&(t?e[tt]=r:delete e[tt]),i},nt=Object.prototype.toString;var it=rt,at=function(e){return nt.call(e)},ot=Ge?Ge.toStringTag:void 0;var lt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ot&&ot in Object(e)?it(e):at(e)};var st=function(e){return null!=e&&"object"==typeof e},ct=lt,ut=st;var dt=function(e){return"symbol"==typeof e||ut(e)&&"[object Symbol]"==ct(e)},ft=Ve,ht=dt,gt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pt=/^\w*$/;var mt=function(e,t){if(ft(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ht(e))||(pt.test(e)||!gt.test(e)||null!=t&&e in Object(t))};var vt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},yt=lt,bt=vt;var $t,St=function(e){if(!bt(e))return!1;var t=yt(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ft=Xe["__core-js_shared__"],xt=($t=/[^.]+$/.exec(Ft&&Ft.keys&&Ft.keys.IE_PROTO||""))?"Symbol(src)_1."+$t:"";var Bt=function(e){return!!xt&&xt in e},wt=Function.prototype.toString;var Dt=function(e){if(null!=e){try{return wt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ot=St,kt=Bt,Et=vt,Ht=Dt,jt=/^\[object .+?Constructor\]$/,Tt=Function.prototype,At=Object.prototype,_t=Tt.toString,zt=At.hasOwnProperty,Mt=RegExp("^"+_t.call(zt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ct=function(e){return!(!Et(e)||kt(e))&&(Ot(e)?Mt:jt).test(Ht(e))},It=function(e,t){return null==e?void 0:e[t]};var Lt=function(e,t){var r=It(e,t);return Ct(r)?r:void 0},Wt=Lt(Object,"create"),Pt=Wt;var Rt=function(){this.__data__=Pt?Pt(null):{},this.size=0};var Nt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yt=Wt,Vt=Object.prototype.hasOwnProperty;var Jt=function(e){var t=this.__data__;if(Yt){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Vt.call(t,e)?t[e]:void 0},Zt=Wt,Ut=Object.prototype.hasOwnProperty;var Xt=Wt;var Gt=Rt,qt=Nt,Qt=Jt,Kt=function(e){var t=this.__data__;return Zt?void 0!==t[e]:Ut.call(t,e)},er=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Xt&&void 0===t?"__lodash_hash_undefined__":t,this};function tr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}tr.prototype.clear=Gt,tr.prototype.delete=qt,tr.prototype.get=Qt,tr.prototype.has=Kt,tr.prototype.set=er;var rr=tr;var nr=function(){this.__data__=[],this.size=0};var ir=function(e,t){return e===t||e!=e&&t!=t},ar=ir;var or=function(e,t){for(var r=e.length;r--;)if(ar(e[r][0],t))return r;return-1},lr=or,sr=Array.prototype.splice;var cr=or;var ur=or;var dr=or;var fr=nr,hr=function(e){var t=this.__data__,r=lr(t,e);return!(r<0)&&(r==t.length-1?t.pop():sr.call(t,r,1),--this.size,!0)},gr=function(e){var t=this.__data__,r=cr(t,e);return r<0?void 0:t[r][1]},pr=function(e){return ur(this.__data__,e)>-1},mr=function(e,t){var r=this.__data__,n=dr(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}vr.prototype.clear=fr,vr.prototype.delete=hr,vr.prototype.get=gr,vr.prototype.has=pr,vr.prototype.set=mr;var yr=vr,br=Lt(Xe,"Map"),$r=rr,Sr=yr,Fr=br;var xr=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Br=function(e,t){var r=e.__data__;return xr(t)?r["string"==typeof t?"string":"hash"]:r.map},wr=Br;var Dr=Br;var Or=Br;var kr=Br;var Er=function(e,t){var r=kr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Hr=function(){this.size=0,this.__data__={hash:new $r,map:new(Fr||Sr),string:new $r}},jr=function(e){var t=wr(this,e).delete(e);return this.size-=t?1:0,t},Tr=function(e){return Dr(this,e).get(e)},Ar=function(e){return Or(this,e).has(e)},_r=Er;function zr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}zr.prototype.clear=Hr,zr.prototype.delete=jr,zr.prototype.get=Tr,zr.prototype.has=Ar,zr.prototype.set=_r;var Mr=zr,Cr=Mr;function Ir(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Ir.Cache||Cr),r}Ir.Cache=Cr;var Lr=Ir;var Wr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pr=/\\(\\)?/g,Rr=function(e){var t=Lr(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Wr,(function(e,r,n,i){t.push(n?i.replace(Pr,"$1"):r||e)})),t}));var Nr=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Yr=Ve,Vr=dt,Jr=Ge?Ge.prototype:void 0,Zr=Jr?Jr.toString:void 0;var Ur=function e(t){if("string"==typeof t)return t;if(Yr(t))return Nr(t,e)+"";if(Vr(t))return Zr?Zr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Xr=Ur;var Gr=Ve,qr=mt,Qr=Rr,Kr=function(e){return null==e?"":Xr(e)};var en=function(e,t){return Gr(e)?e:qr(e,t)?[e]:Qr(Kr(e))},tn=dt;var rn=function(e){if("string"==typeof e||tn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},nn=en,an=rn;var on=function(e,t){for(var r=0,n=(t=nn(t,e)).length;null!=e&&r<n;)e=e[an(t[r++])];return r&&r==n?e:void 0},ln=on;var sn=function(e,t,r){var n=null==e?void 0:ln(e,t);return void 0===n?r:n},cn=Ye(sn);const un=(e,t,r)=>t?cn(r,t)||cn(e,t):r||e,dn=(e,t)=>{const r=t||e.defaultValue;return cn(e.collections,r)};var fn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(fn||(fn={}));const hn={collections:{base:We,oneservice:Re,plusJakartaSans:Pe},defaultValue:"base"},gn=e=>t=>{const r=t.theme,n=dn(hn,r[fn.textStyleScheme]);return r.options&&r.options.textStyle?un(n,e,r.options.textStyle):un(n,e)},pn={D1:{fontFamily:gn("D1.fontFamily"),fontSize:gn("D1.fontSize"),fontWeight:gn("D1.fontWeight"),lineHeight:gn("D1.lineHeight"),letterSpacing:gn("D1.letterSpacing")},D2:{fontFamily:gn("D2.fontFamily"),fontSize:gn("D2.fontSize"),fontWeight:gn("D2.fontWeight"),lineHeight:gn("D2.lineHeight"),letterSpacing:gn("D2.letterSpacing")},D3:{fontFamily:gn("D3.fontFamily"),fontSize:gn("D3.fontSize"),fontWeight:gn("D3.fontWeight"),lineHeight:gn("D3.lineHeight"),letterSpacing:gn("D3.letterSpacing")},D4:{fontFamily:gn("D4.fontFamily"),fontSize:gn("D4.fontSize"),fontWeight:gn("D4.fontWeight"),lineHeight:gn("D4.lineHeight"),letterSpacing:gn("D4.letterSpacing")},DBody:{fontFamily:gn("DBody.fontFamily"),fontSize:gn("DBody.fontSize"),fontWeight:gn("DBody.fontWeight"),lineHeight:gn("DBody.lineHeight"),letterSpacing:gn("DBody.letterSpacing")},H1:{fontFamily:gn("H1.fontFamily"),fontSize:gn("H1.fontSize"),fontWeight:gn("H1.fontWeight"),lineHeight:gn("H1.lineHeight"),letterSpacing:gn("H1.letterSpacing")},H2:{fontFamily:gn("H2.fontFamily"),fontSize:gn("H2.fontSize"),fontWeight:gn("H2.fontWeight"),lineHeight:gn("H2.lineHeight"),letterSpacing:gn("H2.letterSpacing")},H3:{fontFamily:gn("H3.fontFamily"),fontSize:gn("H3.fontSize"),fontWeight:gn("H3.fontWeight"),lineHeight:gn("H3.lineHeight"),letterSpacing:gn("H3.letterSpacing")},H4:{fontFamily:gn("H4.fontFamily"),fontSize:gn("H4.fontSize"),fontWeight:gn("H4.fontWeight"),lineHeight:gn("H4.lineHeight"),letterSpacing:gn("H4.letterSpacing")},H5:{fontFamily:gn("H5.fontFamily"),fontSize:gn("H5.fontSize"),fontWeight:gn("H5.fontWeight"),lineHeight:gn("H5.lineHeight"),letterSpacing:gn("H5.letterSpacing")},H6:{fontFamily:gn("H6.fontFamily"),fontSize:gn("H6.fontSize"),fontWeight:gn("H6.fontWeight"),lineHeight:gn("H6.lineHeight"),letterSpacing:gn("H6.letterSpacing")},Body:{fontFamily:gn("Body.fontFamily"),fontSize:gn("Body.fontSize"),fontWeight:gn("Body.fontWeight"),lineHeight:gn("Body.lineHeight"),letterSpacing:gn("Body.letterSpacing")},BodySmall:{fontFamily:gn("BodySmall.fontFamily"),fontSize:gn("BodySmall.fontSize"),fontWeight:gn("BodySmall.fontWeight"),lineHeight:gn("BodySmall.lineHeight"),letterSpacing:gn("BodySmall.letterSpacing")},XSmall:{fontFamily:gn("XSmall.fontFamily"),fontSize:gn("XSmall.fontSize"),fontWeight:gn("XSmall.fontWeight"),lineHeight:gn("XSmall.lineHeight"),letterSpacing:gn("XSmall.letterSpacing")}},mn=[Le.OpenSans,Le.PlusJakartaSans],vn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},yn=(e,t)=>r=>{var n;const i=pn[e].fontFamily(r),a=pn[e].fontWeight(r),o=mn.find((e=>Object.values(e).includes(i)));return o?y`
                font-family: ${vn(o,t)||vn(o,a)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(n=bn(t)||a)&&void 0!==n?n:"normal"};
        `},bn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},$n=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Sn=(e,t,r=!1)=>n=>{const i=pn[e],a=i.fontSize(n);return y`
            ${yn(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${y`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Fn=(e=!1,t=!1,r=void 0)=>t?y`
            display: block;
            ${$n(r)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${$n(r)}
        `;function xn(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;const Bn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},wn=e=>t=>{const r=t.theme,n=dn(Bn,r[fn.colorScheme]);return r.options&&r.options.color?un(n,e,r.options.color):un(n,e)},Dn={Brand:{1:wn("Brand.1"),2:wn("Brand.2"),3:wn("Brand.3"),4:wn("Brand.4"),5:wn("Brand.5"),6:wn("Brand.6")},Primary:wn("Primary"),PrimaryDark:wn("PrimaryDark"),Secondary:wn("Secondary"),Accent:{Light:{1:wn("Accent.Light.1"),2:wn("Accent.Light.2"),3:wn("Accent.Light.3"),4:wn("Accent.Light.4"),5:wn("Accent.Light.5"),6:wn("Accent.Light.6")},Dark:{1:wn("Accent.Dark.1"),2:wn("Accent.Dark.2"),3:wn("Accent.Dark.3")}},Neutral:{1:wn("Neutral.1"),2:wn("Neutral.2"),3:wn("Neutral.3"),4:wn("Neutral.4"),5:wn("Neutral.5"),6:wn("Neutral.6"),7:wn("Neutral.7"),8:wn("Neutral.8")},Validation:{Green:{Text:wn("Validation.Green.Text"),Icon:wn("Validation.Green.Icon"),Border:wn("Validation.Green.Border"),Background:wn("Validation.Green.Background")},Orange:{Text:wn("Validation.Orange.Text"),Icon:wn("Validation.Orange.Icon"),Border:wn("Validation.Orange.Border"),Background:wn("Validation.Orange.Background"),Badge:wn("Validation.Orange.Badge")},Red:{Text:wn("Validation.Red.Text"),Icon:wn("Validation.Red.Icon"),Border:wn("Validation.Red.Border"),Background:wn("Validation.Red.Background")},Blue:{Text:wn("Validation.Blue.Text"),Icon:wn("Validation.Blue.Icon"),Border:wn("Validation.Blue.Border"),Background:wn("Validation.Blue.Background")}},Shadow:{Accent:wn("Shadow.Accent"),Red:wn("Shadow.Red"),Elevation:wn("Shadow.Elevation")}};var On;!function(e){e.D1=v.h1`
        ${e=>y`
                ${Sn("D1",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>y`
                ${Sn("D2",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>y`
                ${Sn("D3",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>y`
                ${Sn("D4",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>y`
                ${Sn("DBody",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>y`
                ${Sn("H1",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>y`
                ${Sn("H2",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>y`
                ${Sn("H3",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>y`
                ${Sn("H4",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>y`
                ${Sn("H5",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>y`
                ${Sn("H6",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>y`
                ${Sn("Body",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>y`
                ${Sn("BodySmall",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>y`
                ${Sn("XSmall",e.weight,e.paragraph)}
                color: ${Dn.Neutral[1]};
                ${Fn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Hn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Hn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(On||(On={}));const kn=v.a`
    ${e=>y`
            ${Sn(e.textStyle,e.weight)}
            color: ${Dn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Dn.Secondary};

                svg {
                    color: ${Dn.Secondary};
                }
            }
        `}
`,En=v(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Hn=r=>{var{external:n=!1,children:i}=r,a=xn(r,["external","children"]);return e(kn,Object.assign({},a,{children:[i,n&&t(En,{})]}))};var jn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(jn||(jn={}));const Tn={[fn.colorScheme]:"base",[fn.textStyleScheme]:"base",[fn.designTokenScheme]:"base",[fn.resourceScheme]:"base"};var An;fn.colorScheme,fn.textStyleScheme,fn.designTokenScheme,fn.resourceScheme,fn.colorScheme,fn.textStyleScheme,fn.designTokenScheme,fn.resourceScheme,fn.colorScheme,fn.textStyleScheme,fn.designTokenScheme,fn.resourceScheme,fn.colorScheme,fn.textStyleScheme,fn.designTokenScheme,fn.resourceScheme,fn.colorScheme,fn.textStyleScheme,fn.designTokenScheme,fn.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:l}=r;if(l)return l(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(An||(An={}));const _n=y`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,zn=v.div`
    ${e=>Sn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${e=>e.$selected?Dn.Primary:Dn.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&_n}
`,Mn=v.div`
    color: ${Dn.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&_n}

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${Sn("BodySmall","semibold")}
                `:y`
                    ${Sn("Body","regular")}
                `}
`,Cn=v.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${zn} {
                        display: inline;
                    }

                    ${Mn} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,In=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Ln=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Wn=({displayType:n="inline",label:i,maxLines:a=2,selected:o,sublabel:l,truncationType:s="middle",variant:c})=>{const u=b()||Tn,d=pn.Body.fontSize({theme:u}),f=pn.Body.fontFamily({theme:u}),{ref:p,width:m}=Ie(),v=h((e=>{if("inline"!==n)return!1;return An.getTextWidth(e,`${d}rem '${f}'`)>m*a-50}),[m,n,d,f,a]),y=g((()=>v(i)),[v,i]),$=g((()=>l&&v(l)),[v,l]),S=y||$?"next-line":n,F=n=>e(r,{children:[t(In,Object.assign({$maxLines:a,"aria-hidden":!0},{children:n})),t(Ln,Object.assign({$maxLines:a,"aria-hidden":!0},{children:n}))]});return e(Cn,Object.assign({ref:p,$labelDisplayType:S},{children:[t(zn,Object.assign({"aria-label":i,$maxLines:a,$selected:o,$truncateType:s,$variant:c},{children:"middle"===s&&y?F(i):i})),l&&t(Mn,Object.assign({"aria-label":l,$maxLines:a,$truncateType:s,$labelDisplayType:n},{children:"middle"===s&&$?F(l):l}))]}))};var Pn=yr;var Rn=yr,Nn=br,Yn=Mr;var Vn=yr,Jn=function(){this.__data__=new Pn,this.size=0},Zn=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Un=function(e){return this.__data__.get(e)},Xn=function(e){return this.__data__.has(e)},Gn=function(e,t){var r=this.__data__;if(r instanceof Rn){var n=r.__data__;if(!Nn||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Yn(n)}return r.set(e,t),this.size=r.size,this};function qn(e){var t=this.__data__=new Vn(e);this.size=t.size}qn.prototype.clear=Jn,qn.prototype.delete=Zn,qn.prototype.get=Un,qn.prototype.has=Xn,qn.prototype.set=Gn;var Qn=qn;var Kn=Mr,ei=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ti=function(e){return this.__data__.has(e)};function ri(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Kn;++t<r;)this.add(e[t])}ri.prototype.add=ri.prototype.push=ei,ri.prototype.has=ti;var ni=ri,ii=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},ai=function(e,t){return e.has(t)};var oi=function(e,t,r,n,i,a){var o=1&r,l=e.length,s=t.length;if(l!=s&&!(o&&s>l))return!1;var c=a.get(e),u=a.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&r?new ni:void 0;for(a.set(e,t),a.set(t,e);++d<l;){var g=e[d],p=t[d];if(n)var m=o?n(p,g,d,t,e,a):n(g,p,d,e,t,a);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!ii(t,(function(e,t){if(!ai(h,t)&&(g===e||i(g,e,r,n,a)))return h.push(t)}))){f=!1;break}}else if(g!==p&&!i(g,p,r,n,a)){f=!1;break}}return a.delete(e),a.delete(t),f};var li=Xe.Uint8Array,si=ir,ci=oi,ui=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},di=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},fi=Ge?Ge.prototype:void 0,hi=fi?fi.valueOf:void 0;var gi=function(e,t,r,n,i,a,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new li(e),new li(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return si(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=ui;case"[object Set]":var s=1&n;if(l||(l=di),e.size!=t.size&&!s)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var u=ci(l(e),l(t),n,i,a,o);return o.delete(e),u;case"[object Symbol]":if(hi)return hi.call(e)==hi.call(t)}return!1};var pi=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},mi=pi,vi=Ve;var yi=function(e,t,r){var n=t(e);return vi(e)?n:mi(n,r(e))};var bi=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a},$i=function(){return[]},Si=Object.prototype.propertyIsEnumerable,Fi=Object.getOwnPropertySymbols,xi=Fi?function(e){return null==e?[]:(e=Object(e),bi(Fi(e),(function(t){return Si.call(e,t)})))}:$i;var Bi=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},wi=lt,Di=st;var Oi=function(e){return Di(e)&&"[object Arguments]"==wi(e)},ki=st,Ei=Object.prototype,Hi=Ei.hasOwnProperty,ji=Ei.propertyIsEnumerable,Ti=Oi(function(){return arguments}())?Oi:function(e){return ki(e)&&Hi.call(e,"callee")&&!ji.call(e,"callee")},Ai={exports:{}};var _i=function(){return!1};!function(e,t){var r=Xe,n=_i,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?r.Buffer:void 0,l=(o?o.isBuffer:void 0)||n;e.exports=l}(Ai,Ai.exports);var zi=Ai.exports,Mi=/^(?:0|[1-9]\d*)$/;var Ci=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Mi.test(e))&&e>-1&&e%1==0&&e<t};var Ii=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Li=lt,Wi=Ii,Pi=st,Ri={};Ri["[object Float32Array]"]=Ri["[object Float64Array]"]=Ri["[object Int8Array]"]=Ri["[object Int16Array]"]=Ri["[object Int32Array]"]=Ri["[object Uint8Array]"]=Ri["[object Uint8ClampedArray]"]=Ri["[object Uint16Array]"]=Ri["[object Uint32Array]"]=!0,Ri["[object Arguments]"]=Ri["[object Array]"]=Ri["[object ArrayBuffer]"]=Ri["[object Boolean]"]=Ri["[object DataView]"]=Ri["[object Date]"]=Ri["[object Error]"]=Ri["[object Function]"]=Ri["[object Map]"]=Ri["[object Number]"]=Ri["[object Object]"]=Ri["[object RegExp]"]=Ri["[object Set]"]=Ri["[object String]"]=Ri["[object WeakMap]"]=!1;var Ni=function(e){return Pi(e)&&Wi(e.length)&&!!Ri[Li(e)]};var Yi=function(e){return function(t){return e(t)}},Vi={exports:{}};!function(e,t){var r=Je,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&r.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Vi,Vi.exports);var Ji=Vi.exports,Zi=Ni,Ui=Yi,Xi=Ji&&Ji.isTypedArray,Gi=Xi?Ui(Xi):Zi,qi=Bi,Qi=Ti,Ki=Ve,ea=zi,ta=Ci,ra=Gi,na=Object.prototype.hasOwnProperty;var ia=function(e,t){var r=Ki(e),n=!r&&Qi(e),i=!r&&!n&&ea(e),a=!r&&!n&&!i&&ra(e),o=r||n||i||a,l=o?qi(e.length,String):[],s=l.length;for(var c in e)!t&&!na.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ta(c,s))||l.push(c);return l},aa=Object.prototype;var oa=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||aa)};var la=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),sa=oa,ca=la,ua=Object.prototype.hasOwnProperty;var da=St,fa=Ii;var ha=function(e){return null!=e&&fa(e.length)&&!da(e)},ga=ia,pa=function(e){if(!sa(e))return ca(e);var t=[];for(var r in Object(e))ua.call(e,r)&&"constructor"!=r&&t.push(r);return t},ma=ha;var va=function(e){return ma(e)?ga(e):pa(e)},ya=yi,ba=xi,$a=va;var Sa=function(e){return ya(e,$a,ba)},Fa=Object.prototype.hasOwnProperty;var xa=function(e,t,r,n,i,a){var o=1&r,l=Sa(e),s=l.length;if(s!=Sa(t).length&&!o)return!1;for(var c=s;c--;){var u=l[c];if(!(o?u in t:Fa.call(t,u)))return!1}var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var h=!0;a.set(e,t),a.set(t,e);for(var g=o;++c<s;){var p=e[u=l[c]],m=t[u];if(n)var v=o?n(m,p,u,t,e,a):n(p,m,u,e,t,a);if(!(void 0===v?p===m||i(p,m,r,n,a):v)){h=!1;break}g||(g="constructor"==u)}if(h&&!g){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return a.delete(e),a.delete(t),h},Ba=Lt(Xe,"DataView"),wa=br,Da=Lt(Xe,"Promise"),Oa=Lt(Xe,"Set"),ka=Lt(Xe,"WeakMap"),Ea=lt,Ha=Dt,ja="[object Map]",Ta="[object Promise]",Aa="[object Set]",_a="[object WeakMap]",za="[object DataView]",Ma=Ha(Ba),Ca=Ha(wa),Ia=Ha(Da),La=Ha(Oa),Wa=Ha(ka),Pa=Ea;(Ba&&Pa(new Ba(new ArrayBuffer(1)))!=za||wa&&Pa(new wa)!=ja||Da&&Pa(Da.resolve())!=Ta||Oa&&Pa(new Oa)!=Aa||ka&&Pa(new ka)!=_a)&&(Pa=function(e){var t=Ea(e),r="[object Object]"==t?e.constructor:void 0,n=r?Ha(r):"";if(n)switch(n){case Ma:return za;case Ca:return ja;case Ia:return Ta;case La:return Aa;case Wa:return _a}return t});var Ra=Qn,Na=oi,Ya=gi,Va=xa,Ja=Pa,Za=Ve,Ua=zi,Xa=Gi,Ga="[object Arguments]",qa="[object Array]",Qa="[object Object]",Ka=Object.prototype.hasOwnProperty;var eo=function(e,t,r,n,i,a){var o=Za(e),l=Za(t),s=o?qa:Ja(e),c=l?qa:Ja(t),u=(s=s==Ga?Qa:s)==Qa,d=(c=c==Ga?Qa:c)==Qa,f=s==c;if(f&&Ua(e)){if(!Ua(t))return!1;o=!0,u=!1}if(f&&!u)return a||(a=new Ra),o||Xa(e)?Na(e,t,r,n,i,a):Ya(e,t,s,r,n,i,a);if(!(1&r)){var h=u&&Ka.call(e,"__wrapped__"),g=d&&Ka.call(t,"__wrapped__");if(h||g){var p=h?e.value():e,m=g?t.value():t;return a||(a=new Ra),i(p,m,r,n,a)}}return!!f&&(a||(a=new Ra),Va(e,t,r,n,i,a))},to=st;var ro=function e(t,r,n,i,a){return t===r||(null==t||null==r||!to(t)&&!to(r)?t!=t&&r!=r:eo(t,r,n,i,e,a))},no=Qn,io=ro;var ao=vt;var oo=function(e){return e==e&&!ao(e)},lo=oo,so=va;var co=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},uo=function(e,t,r,n){var i=r.length,a=i,o=!n;if(null==e)return!a;for(e=Object(e);i--;){var l=r[i];if(o&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<a;){var s=(l=r[i])[0],c=e[s],u=l[1];if(o&&l[2]){if(void 0===c&&!(s in e))return!1}else{var d=new no;if(n)var f=n(c,u,s,e,t,d);if(!(void 0===f?io(u,c,3,n,d):f))return!1}}return!0},fo=function(e){for(var t=so(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,lo(i)]}return t},ho=co;var go=en,po=Ti,mo=Ve,vo=Ci,yo=Ii,bo=rn;var $o=function(e,t){return null!=e&&t in Object(e)},So=function(e,t,r){for(var n=-1,i=(t=go(t,e)).length,a=!1;++n<i;){var o=bo(t[n]);if(!(a=null!=e&&r(e,o)))break;e=e[o]}return a||++n!=i?a:!!(i=null==e?0:e.length)&&yo(i)&&vo(o,i)&&(mo(e)||po(e))};var Fo=ro,xo=sn,Bo=function(e,t){return null!=e&&So(e,t,$o)},wo=mt,Do=oo,Oo=co,ko=rn;var Eo=on;var Ho=function(e){return function(t){return null==t?void 0:t[e]}},jo=function(e){return function(t){return Eo(t,e)}},To=mt,Ao=rn;var _o=function(e){var t=fo(e);return 1==t.length&&t[0][2]?ho(t[0][0],t[0][1]):function(r){return r===e||uo(r,e,t)}},zo=function(e,t){return wo(e)&&Do(t)?Oo(ko(e),t):function(r){var n=xo(r,e);return void 0===n&&n===t?Bo(r,e):Fo(t,n,3)}},Mo=function(e){return e},Co=Ve,Io=function(e){return To(e)?Ho(Ao(e)):jo(e)};var Lo=function(e){return"function"==typeof e?e:null==e?Mo:"object"==typeof e?Co(e)?zo(e[0],e[1]):_o(e):Io(e)},Wo=Lo,Po=ha,Ro=va;var No=function(e){return function(t,r,n){var i=Object(t);if(!Po(t)){var a=Wo(r);t=Ro(t),r=function(e){return a(i[e],e,i)}}var o=e(t,r,n);return o>-1?i[a?t[o]:o]:void 0}};var Yo=/\s/;var Vo=function(e){for(var t=e.length;t--&&Yo.test(e.charAt(t)););return t},Jo=/^\s+/;var Zo=function(e){return e?e.slice(0,Vo(e)+1).replace(Jo,""):e},Uo=vt,Xo=dt,Go=/^[-+]0x[0-9a-f]+$/i,qo=/^0b[01]+$/i,Qo=/^0o[0-7]+$/i,Ko=parseInt;var el=function(e){if("number"==typeof e)return e;if(Xo(e))return NaN;if(Uo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Uo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zo(e);var r=qo.test(e);return r||Qo.test(e)?Ko(e.slice(2),r?2:8):Go.test(e)?NaN:+e},tl=1/0;var rl=function(e){return e?(e=el(e))===tl||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var nl=function(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1},il=Lo,al=function(e){var t=rl(e),r=t%1;return t==t?r?t-r:t:0},ol=Math.max;var ll=Ye(No((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:al(r);return i<0&&(i=ol(n+i,0)),nl(e,il(t),i)}))),sl=ro;var cl=Ye((function(e,t){return sl(e,t)}));const ul={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},dl=e=>Object.keys(ul).reduce(((t,r)=>{const n=ul[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),fl=dl("max-width"),hl=(dl("min-width"),v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),gl=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,pl=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Dn.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${gl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ml=v(pl)`
    animation-delay: -0.45s;
`,vl=v(pl)`
    animation-delay: -0.3s;
`,yl=v(pl)`
    animation-delay: -0.15s;
`,bl={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${Dn.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${Dn.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Dn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${Dn.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${Dn.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Dn.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},$l=e=>t=>{var r;const n=t.theme,i=dn(bl,n[fn.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?un(i,e,n.options.designToken):un(i,e)},Sl={InputBoxShadow:$l("InputBoxShadow"),InputErrorBoxShadow:$l("InputErrorBoxShadow"),ElevationBoxShadow:$l("ElevationBoxShadow"),Table:{Header:$l("Table.Header"),Cell:{Primary:$l("Table.Cell.Primary"),Secondary:$l("Table.Cell.Secondary"),Selected:$l("Table.Cell.Selected"),Hover:$l("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:$l("Button.Danger.BackgroundColor"),Hover:$l("Button.Danger.Hover"),Primary:$l("Button.Danger.Primary"),Border:$l("Button.Danger.Border")}}};v.button`
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
                    background-color: ${Dn.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Sl.Button.Danger.Border:Dn.Primary};

                    color: ${e.$buttonIsDanger?Sl.Button.Danger.Primary:Dn.Primary};
                `;case"light":return y`
                    background-color: ${Dn.Neutral[8]};
                    border: 1px solid ${Dn.Neutral[5]};

                    color: ${e.$buttonIsDanger?Sl.Button.Danger.Primary:Dn.Primary};
                `;case"disabled":return y`
                    background-color: ${Dn.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Dn.Neutral[3]};
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Sl.Button.Danger.Primary:Dn.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Sl.Button.Danger.Hover:Dn.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Sl.Button.Danger.BackgroundColor:Dn.Primary};
                    border: 1px solid transparent;

                    ${fl.mobileL} {
                        width: 100%;
                    }

                    color: ${Dn.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    ${Sn("H5","semibold")}

                    ${fl.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${Sn("H4","semibold")}

                    ${fl.mobileS} {
                        height: auto;
                    }
                `}
`;const Fl=v((({color:r,className:n,size:i=18})=>e(hl,Object.assign({className:n,$size:i,$color:r},{children:[t(pl,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(ml,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(vl,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(yl,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Sl.Button.Danger.Primary:Dn.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Dn.Neutral[3](e);break;default:t=Dn.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var xl={exports:{}};xl.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},v=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:v,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+v(n,2,"0")+":"+v(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:o,m:a,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=m;var S="$isDayjsObject",F=function(e){return e instanceof D||!(!e||!e[S])},x=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),r&&($[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var l=t.name;$[l]=t,i=l}return!n&&i&&(b=i),i||!n&&b},B=function(e,t){if(F(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},w=y;w.l=x,w.i=F,w.w=function(e,t){return B(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[S]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var r=B(e);return this.startOf(t)<=r&&r<=this.endOf(t)},v.isAfter=function(e,t){return B(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<B(e)},v.$g=function(e,t,r){return w.u(e)?this[t]:this.set(r,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var r=this,n=!!w.u(t)||t,u=w.p(e),h=function(e,t){var i=w.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(l)},g=function(e,t){return w.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,$=(p<b?p+7:p)-b;return h(n?v-$:v+(6-$),m);case l:case f:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case a:return g(y+"Seconds",2);case i:return g(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var r,s=w.p(e),u="set"+(this.$u?"UTC":""),h=(r={},r[l]=u+"Date",r[f]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[o]=u+"Hours",r[a]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var p=this.clone().set(f,1);p.$d[h](g),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[w.p(e)]()},v.add=function(n,u){var f,h=this;n=Number(n);var g=w.p(u),p=function(e){var t=B(h);return w.w(t.date(t.date()+Math.round(e*n)),h)};if(g===c)return this.set(c,this.$M+n);if(g===d)return this.set(d,this.$y+n);if(g===l)return p(1);if(g===s)return p(7);var m=(f={},f[a]=t,f[o]=r,f[i]=e,f)[g]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),a=this.$H,o=this.$m,l=this.$M,s=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},f=function(e){return w.s(a%12||12,e,"0")},g=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return l+1;case"MM":return w.s(l+1,2,"0");case"MMM":return d(r.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,s,2);case"ddd":return d(r.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(a);case"HH":return w.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return w.s(o,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,f,h){var g,p=this,m=w.p(f),v=B(n),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,$=function(){return w.m(p,v)};switch(m){case d:g=$()/12;break;case c:g=$();break;case u:g=$()/3;break;case s:g=(b-y)/6048e5;break;case l:g=(b-y)/864e5;break;case o:g=b/r;break;case a:g=b/t;break;case i:g=b/e;break;default:g=b}return h?g:w.a(g)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),O=D.prototype;return B.prototype=O,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),B.extend=function(e,t){return e.$i||(e(t,D,B),e.$i=!0),B},B.locale=x,B.isDayjs=F,B.unix=function(e){return B(1e3*e)},B.en=$[b],B.Ls=$,B.p={},B}();var Bl=Ye(xl.exports),wl={exports:{}};wl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,l("seconds")],ss:[n,l("seconds")],m:[n,l("minutes")],mm:[n,l("minutes")],H:[n,l("hours")],h:[n,l("hours")],HH:[n,l("hours")],hh:[n,l("hours")],D:[n,l("day")],DD:[r,l("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,l("month")],MM:[r,l("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var c=o[s],u=d[c],f=u&&u[0],h=u&&u[1];o[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<l;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,s=i.parser,c=e.slice(n),u=a.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var l=o[1];if("string"==typeof l){var s=!0===o[2],c=!0===o[3],u=s||c,d=o[2];c&&(d=o[2]),a=this.$locale(),!s&&d&&(a=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,a=n.month,o=n.day,l=n.hours,s=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,h=new Date,g=o||(i||a?1:h.getDate()),p=i||h.getFullYear(),m=0;i&&!a||(m=a>0?a-1:h.getMonth());var v=l||0,y=s||0,b=c||0,$=u||0;return d?new Date(Date.UTC(p,m,g,v,y,b,$+60*d.offset*1e3)):r?new Date(Date.UTC(p,m,g,v,y,b,$)):new Date(p,m,g,v,y,b,$)}catch(e){return new Date("")}}(t,l,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var h=l.length,g=1;g<=h;g+=1){o[1]=l[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Dl=Ye(wl.exports),Ol={exports:{}};Ol.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(a,n):!this.isBefore(a,n))&&(s?this.isBefore(o,n):!this.isAfter(o,n))||(l?this.isBefore(a,n):!this.isAfter(a,n))&&(s?this.isAfter(o,n):!this.isBefore(o,n))}};var kl=Ye(Ol.exports),El={exports:{}};El.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Hl=Ye(El.exports),jl={exports:{}};jl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Tl,Al,_l,zl=Ye(jl.exports),Ml={exports:{}},Cl=Ye(Ml.exports=(Tl={year:0,month:1,day:2,hour:3,minute:4,second:5},Al={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Al[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Al[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var l=n[o],s=l.type,c=l.value,u=Tl[s];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],f=24===d?0:d,h=a[0]+"-"+a[1]+"-"+a[2]+" "+f+":"+a[4]+":"+a[5]+":000",g=+e;return(r.utc(h).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),l=Math.round((a-new Date(o))/1e3/60),s=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,l=i||t||n,s=a(+r(),l);if("string"!=typeof e)return r(e).tz(l);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),s,l),u=c[0],d=c[1],f=r(u).utcOffset(d);return f.$x.$timezone=l,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));Bl.extend(kl),Bl.extend(zl),Bl.extend(Hl),Bl.extend(Dl),Bl.extend(Cl),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Bl(t).startOf("week");return Il(r).map((e=>Ll(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ll(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Bl(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Bl(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Bl(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?Bl(n):void 0,i?Bl(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(_l||(_l={}));const Il=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ll=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Wl=[1,3,5,7,8,10,12],Pl=[4,6,9,11];var Rl,Nl,Yl;function Vl(e){const t=a(null);return f((()=>{t.current=e}),[e]),h(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":Wl.includes(a)?Math.min(i,31).toString():Pl.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Bl(e,r);return Bl(t,r).diff(n,"minute")},e.toDayjs=e=>e?Bl(e):Bl(),e.addMinutesToTime=(e,t,r="HH:mm")=>Bl(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Bl(e).isSame(Bl(t),r)}(Rl||(Rl={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Bl(e).isBefore(n,"day"))||!(!i||!Bl(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Bl(e).isValid())return e}return""}}(Nl||(Nl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Yl||(Yl={}));const Jl=e=>{const t=(e=>{const t=a(e),r=a();return d((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},Zl=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Ul=({children:e})=>{const[r,n]=o(-1);return t(Zl.Provider,Object.assign({value:{focusedIndex:r,setFocusedIndex:n}},{children:e}))},Xl=y`
    border: 1px solid ${Dn.Accent.Light[1]};
    box-shadow: ${Sl.InputBoxShadow};
`,Gl=y`
    border: 1px solid ${Dn.Accent.Light[1]};
    box-shadow: none;
`,ql=y`
    border: 1px solid ${Dn.Neutral[5]};
    box-shadow: none;
`,Ql=y`
    border: 1px solid ${Dn.Validation.Red.Border};
    box-shadow: ${Sl.InputErrorBoxShadow};
`,Kl=v.div`
    border: 1px solid ${Dn.Neutral[5]};
    border-radius: 4px;
    background: ${Dn.Neutral[8]};

    :focus-within {
        ${Xl}
    }
    ${e=>e.$focused&&Xl}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Gl}
                }
                ${e.$focused&&Gl}
            `:e.$disabled?y`
                background: ${Dn.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${ql}
                }
                ${e.$focused&&ql}
            `:e.$error?y`
                border: 1px solid ${Dn.Validation.Red.Border};

                :focus-within {
                    ${Ql}
                }
                ${e.$focused&&Ql}
            `:void 0}
`;v(Kl)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const es=v.input`
    ${e=>Sn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Dn.Neutral[1]};
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
        color: ${Dn.Neutral[3]};
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
`,ts=v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Dn.Primary};
    }
`,rs=v.div`
    overflow: hidden;
    border: 1px solid ${Dn.Neutral[5]};
    border-radius: 4px;
    background: ${Dn.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${fl.mobileL} {
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
        background: ${Dn.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,ns=v.div`
    background: transparent;
    padding: 0.5rem;
`,is=v.ul`
    list-style-type: none;
`,as=v.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Dn.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${Dn.Accent.Light[5]};
        `}
`,os=v(D)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Dn.Primary};
`,ls=v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,ss=v(w)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Dn.Primary};
`,cs=v(B)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Dn.Accent.Light[2]};
`,us=v.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,ds=v(ts)`
    ${e=>Sn("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Dn.Primary};
`,fs=v(ds)`
    outline-offset: 0.25rem;
`,hs=v(ds)`
    padding: 0.5rem 1rem;
`,gs=v.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,ps=v.div`
    ${e=>Sn("small"===e.$variant?"BodySmall":"Body","regular")}
`,ms=v(x)`
    ${e=>{const t="small"===e.$variant?1:1.125;return y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Dn.Validation.Red.Icon};
`,vs=v.button`
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
                background-color: ${Dn.Neutral[7]};
            `}
    }
`,ys=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,l=xn(e,["children","focusHighlight","focusOutline","type"]);return t(vs,Object.assign({ref:r,$outline:a,$highlight:i,type:o},l,{children:n}))})),bs=e=>"small"===e?1:1.125,$s=e=>y`
        height: ${bs(e)}rem;
        width: ${bs(e)}rem;
    `,Ss=v.div`
    background: ${Dn.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,Fs=v.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,xs=v(es)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Bs=v(k)`
    color: ${Dn.Neutral[3]};
    flex-shrink: 0;
    ${e=>$s(e.$variant)}
`,ws=v(ys)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Dn.Neutral[3]};
    cursor: pointer;

    ${e=>y`
            svg {
                ${$s(e.$variant)}
            }
        `}
`,Ds=p(((r,n)=>{var{value:i,variant:a,onClear:o}=r,l=xn(r,["value","variant","onClear"]);return e(Ss,{children:[e(Fs,{children:[t(Bs,{$variant:a,"aria-hidden":!0}),t(xs,Object.assign({ref:n,value:i,$variant:a},l))]}),i&&t(ws,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:a},{children:t(O,{"aria-hidden":!0})}))]})})),Os=({listItems:r,multiSelect:n,selectedItems:i,disableItemFocus:l,itemsLoadState:s="success",itemTruncationType:c="end",itemMaxLines:u=2,labelDisplayType:f="inline",variant:h="default",listboxId:g,width:p,topScrollItem:v,onSelectItem:y,onSelectAll:b,onDismiss:$,onRetry:S,valueExtractor:F,listExtractor:x,renderListItem:B,renderCustomCallToAction:w,enableSearch:D,hideNoResultsDisplay:O,searchPlaceholder:k="Search",searchFunction:E,onSearch:H})=>{const{focusedIndex:j,setFocusedIndex:T}=m(Zl),[A,_]=o(""),[z,M]=o(r),C=Jl(s),I=(()=>{const[e,t]=o(!1);return d((()=>{t(!0)}),[]),e})(),L=a(),W=a(),P=a([]),R=a(),N=e=>x?x(e):e.toString(),Y=Vl((()=>E(A))),V=Vl((()=>r.filter((e=>{var t;const r=N(e),n="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),i="string"==typeof r||null===(t=r.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),a=A.trim().toLowerCase();return n.includes(a)||i&&i.includes(a)})))),J=(e,t)=>{T(t),null==y||y(e,(e=>F?F(e):e)(e))},Z=e=>{const t=e.target.value;_(t),null==H||H()},U=()=>{var e;_(""),null===(e=R.current)||void 0===e||e.focus(),null==H||H()},X=()=>{null==S||S()};((e,t,r="window",n)=>{const i=a();d((()=>{i.current=t}),[t]),d((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const a=e=>i.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r])})("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),j<z.length-1){const e=j+1;null===(t=P.current[e])||void 0===t||t.focus(),T(e)}break;case"ArrowUp":if(e.preventDefault(),j>0){const e=j-1;null===(r=P.current[e])||void 0===r||r.focus(),T(e)}else 0===j&&R.current&&(R.current.focus(),T(-1));break;case"Space":case"Enter":document.activeElement===P.current[j]&&(e.preventDefault(),z[j]&&J(z[j],j))}})),d((()=>{if(void 0===v)return;const e=setTimeout((()=>{var e;const t=r.indexOf(v),n=P.current[t];if(L.current){const t=null!==(e=null==n?void 0:n.offsetTop)&&void 0!==e?e:0;L.current.scrollTop=t-8}T(t)}),0);return()=>clearTimeout(e)}),[P,r,T,v]),d((()=>{I||l||(R.current?(T(-1),setTimeout((()=>{var e;return null===(e=R.current)||void 0===e?void 0:e.focus()}),200)):P.current[j]?setTimeout((()=>{var e;return null===(e=P.current[j])||void 0===e?void 0:e.focus()}),200):(T(0),setTimeout((()=>{var e;return null===(e=P.current[0])||void 0===e?void 0:e.focus()}),200)))}),[l,j,I,T]),d((()=>{I&&C&&(l||"success"===s&&R.current&&(T(-1),R.current.focus()))}),[I,C,s,T,l]),d((()=>{M(""===A?r:E?Y():V())}),[Y,V,r,E,A]);const G=e=>n?t(e?ss:cs,{"aria-hidden":!0}):e?t(os,{"aria-hidden":!0}):t(ls,{}),q=(e,r)=>{const n=N(e),i="string"==typeof n?n:n.title,a="string"==typeof n?void 0:n.secondaryLabel;return t(Wn,{displayType:f,label:i,maxLines:u,selected:r,sublabel:a,truncationType:c,variant:h})},Q=()=>{if(!S||S&&"success"===s)return z.map(((t,r)=>{const a=(e=>!!ll(i,(t=>cl(t,e))))(t),o=r===j;return e(as,Object.assign({"aria-selected":a,"aria-multiselectable":n,"data-testid":"list-item",onClick:()=>J(t,r),onMouseEnter:()=>(e=>{T(e)})(r),ref:e=>P.current[r]=e,role:"option",tabIndex:o?0:-1,$active:o},{children:[G(a),B?B(t,{selected:a}):q(t,a)]}),((e,t)=>`item_${t}__${F?F(e):e}`)(t,r))}))},K=()=>{if((D||E)&&"success"===s)return t(Ds,{ref:R,onChange:Z,value:A,placeholder:k,"data-testid":"search-input","aria-label":"Enter text to search",onClear:U,variant:h})},ee=()=>{if(n&&z.length>0&&!A&&"success"===s)return t(us,{children:t(hs,Object.assign({onClick:b,type:"button",$variant:h},{children:0===i.length?"Select all":"Clear all"}))})},te=()=>{if(!O&&(A||!D)&&0===z.length&&"success"===s)return e(gs,Object.assign({"data-testid":"list-no-results"},{children:[t(ms,{"data-testid":"no-result-icon",$variant:h}),t(ps,Object.assign({$variant:h},{children:"No results found."}))]}))},re=()=>{if(S&&"loading"===s){const r="small"===h?16:18;return e(gs,Object.assign({"data-testid":"list-loading"},{children:[t(Fl,{$buttonStyle:"secondary",size:r}),t(ps,Object.assign({$variant:h},{children:"Loading..."}))]}))}},ne=()=>{if(S&&"fail"===s)return e(gs,Object.assign({"data-testid":"list-fail"},{children:[t(ms,{"data-testid":"load-error-icon",$variant:h}),t(ps,Object.assign({$variant:h},{children:"Failed to load."}))," ",t(fs,Object.assign({onClick:X,type:"button",$variant:h},{children:"Try again."}))]}))};return e(rs,Object.assign({"data-testid":"dropdown-container",ref:L,$width:p},{children:[e(ns,Object.assign({ref:W,"data-testid":"dropdown-list"},{children:[K(),ee(),te(),re(),ne(),t(is,Object.assign({role:"listbox",id:g},{children:Q()}))]})),(()=>{if(w)return t("div",Object.assign({"data-testid":"custom-cta"},{children:w($,z)}))})()]}))},ks="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Es=v(ts)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Sn("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Hs=v.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${ks};

    svg {
        color: ${Dn.Neutral[3]};
        ${e=>{const t="small"===e.$variant?pn.BodySmall.fontSize:pn.Body.fontSize;return y`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,js=p((({children:r,disabled:n,expanded:i,listboxId:a,readOnly:o,variant:l},s)=>e(Es,Object.assign({ref:s,type:"button","aria-expanded":i,"aria-haspopup":"listbox","data-testid":"selector",disabled:n,"aria-controls":a,$variant:l},{children:[r,!o&&t(Hs,Object.assign({$expanded:i,$variant:l},{children:t(E,{"aria-hidden":!0})}))]})))),Ts=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Ts(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const As=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Ts(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Dn.Accent.Light[3]};
    }
`,_s=v.button`
    ${As}
    cursor: pointer;
`;v.div`
    ${As}
`;const zs=$`
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
    border: 1px solid ${Dn.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Dn.Neutral[8]};

    :focus-within {
        border: 1px solid ${Dn.Accent.Light[1]};
        box-shadow: ${Sl.InputBoxShadow};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${zs} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${Dn.Neutral[6](e)};

                ${_s} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Dn.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${_s} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${Dn.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Dn.Validation.Red.Border(e)};
                    box-shadow: ${Sl.InputErrorBoxShadow};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${ks};
    margin-left: 1rem;
`,v(E)`
    color: ${Dn.Neutral[3]};
    ${e=>{let t=pn.Body.fontSize;return"small"===e.$variant&&(t=pn.BodySmall.fontSize),y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,v.div`
    height: 1px;
    background: ${Dn.Neutral[5]};
    margin: 0 0.5rem;
`;const Ms=v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Cs=v.div`
    ${e=>Sn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Is=v(Cs)`
    color: ${Dn.Neutral[3]};
`;var Ls;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ls||(Ls={}));const Ws=v.div`
    display: flex;
    flex-direction: column;
`,Ps=e=>"right"===e?"bottom-end":"bottom-start",Rs=({enabled:n,isOpen:i,onOpen:l,onClose:s,onDismiss:c,renderElement:u,renderDropdown:f,customZIndex:h,clickToToggle:g=!1,offset:p=0,alignment:m="left",fitAvailableHeight:v})=>{var y;const b=a(null),$=a(null),{width:S}=Ie({targetRef:b,handleHeight:!1}),{refs:F,floatingStyles:x,context:B}=j({open:i,onOpenChange:(e,t,r)=>{"escape-key"===r?null==c||c():e&&!i?null==l||l():!e&&i&&(null==s||s(r))},whileElementsMounted:T,placement:Ps(m),middleware:[A(p),_(),z({limiter:M()}),C({apply({availableHeight:e}){$.current&&Object.assign($.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}})]}),w=(()=>{const[e,t]=o(void 0),r=H();return d((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Ls.Change,e),r.events.emit(Ls.Ready),()=>r.events.off(Ls.Change,e)}),[r]),e})(),{isMounted:D,styles:O}=I(B,{initial:{opacity:0},open:{opacity:1},duration:300}),k=L(B,{enabled:n,toggle:g}),E=W(B,{enabled:n}),{getReferenceProps:Y,getFloatingProps:V}=P([k,E]);return e(r,{children:[t("div",Object.assign({ref:e=>{b.current=e,F.setReference(e)}},Y(),{children:u()})),D&&t(R,{children:t(N,Object.assign({context:B,modal:!1,initialFocus:$,returnFocus:!1},{children:t("div",Object.assign({ref:F.setFloating,style:Object.assign(Object.assign({},x),{zIndex:null!==(y=null!=h?h:w)&&void 0!==y?y:50})},V(),{children:t(Ws,Object.assign({ref:$,style:Object.assign({},O),inert:O.opacity<1?"":void 0},{children:f({elementWidth:S})}))}))}))})]})},Ns=({selectedOption:e,placeholder:r="Select",options:n,disabled:i,error:l,className:s,"data-testid":c,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:g,valueExtractor:p,valueToStringFunction:m,listExtractor:v,displayValueExtractor:y,onSelectOption:b,onShowOptions:$,onHideOptions:S,onRetry:F,optionsLoadState:x="success",optionTruncationType:B="end",renderCustomSelectedOption:w,renderListItem:D,hideNoResultsDisplay:O,renderCustomCallToAction:k,onBlur:E,variant:H="default",readOnly:j,alignment:T,dropdownZIndex:A})=>{const[_,z]=o(e),[M,C]=o(!1),[I,L]=o(!1),[W]=o((()=>Yl.generate())),P=a(),R=a(),N=a();d((()=>{z(e)}),[e]);const Y=(e,t)=>{R.current.focus(),z(e),C(!1),X(!1),null==b||b(e,t)},V=()=>{M&&(C(!1),X(!1))},J=()=>{I||M||L(!0)},Z=e=>{!I||M||P.current.contains(e.relatedTarget)||(L(!1),null==E||E())},U=e=>{if("middle"===B){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),An.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),t,120,8)}return e},X=e=>{e?null==$||$():null==S||S()};return t(Ul,{children:t(Rs,{enabled:!j&&!i,isOpen:M,renderElement:()=>t(Kl,Object.assign({className:s,"data-testid":c,id:u,ref:P,tabIndex:-1,onFocus:J,onBlur:Z,$focused:I,$disabled:i,$readOnly:j,$error:l},{children:t(js,Object.assign({ref:R,disabled:i,expanded:M,listboxId:W,readOnly:j,variant:H},{children:t(Ms,Object.assign({ref:N},{children:_?w?w(_):t(Cs,Object.assign({truncateType:B,$variant:H},{children:U(y?y(_):p?p(_):_.toString())})):t(Is,Object.assign({truncateType:B,$variant:H},{children:r}))}))}))})),renderDropdown:({elementWidth:e})=>t(Os,{listboxId:W,listItems:n,onSelectItem:Y,onDismiss:V,valueExtractor:p,listExtractor:v,enableSearch:f,searchPlaceholder:g,searchFunction:h,selectedItems:_?[_]:[],onRetry:F,itemsLoadState:x,itemTruncationType:B,renderListItem:D,hideNoResultsDisplay:O,renderCustomCallToAction:k,variant:H,width:e}),onOpen:()=>{C(!0),X(!0),L(!0)},onClose:e=>{C(!1),X(!1),"click"!==e&&(L(!1),null==E||E())},onDismiss:()=>{R.current.focus(),C(!1),X(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:A})})};export{Ns as InputSelect};
//# sourceMappingURL=index.js.map
