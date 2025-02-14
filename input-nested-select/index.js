import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,useCallback as b,useMemo as f,forwardRef as g}from"react";import m,{css as p,useTheme as y,keyframes as v}from"styled-components";import{ExclamationCircleFillIcon as x}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as w}from"@lifesg/react-icons/square";import{SquareTickFillIcon as $}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as F}from"@lifesg/react-icons/tick";import{CrossIcon as D}from"@lifesg/react-icons/cross";import{MagnifierIcon as E}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as _}from"@lifesg/react-icons/chevron-down";import{CaretRightIcon as C}from"@lifesg/react-icons/caret-right";import{findDOMNode as O}from"react-dom";import{MinusSquareFillIcon as S}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as A,useFloating as k,autoUpdate as z,offset as j,flip as B,shift as M,limitShift as T,size as I,useTransitionStyles as P,useClick as Y,useDismiss as L,useInteractions as R,FloatingPortal as W,FloatingFocusManager as N}from"@floating-ui/react";var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function V(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U=Object.prototype;var Z=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||U)};var q=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),K=Z,J=q,X=Object.prototype.hasOwnProperty;var G=function(e){if(!K(e))return J(e);var r=[];for(var t in Object(e))X.call(e,t)&&"constructor"!=t&&r.push(t);return r},Q="object"==typeof H&&H&&H.Object===Object&&H,ee=Q,re="object"==typeof self&&self&&self.Object===Object&&self,te=ee||re||Function("return this")(),ne=te.Symbol,ie=ne,oe=Object.prototype,ae=oe.hasOwnProperty,se=oe.toString,le=ie?ie.toStringTag:void 0;var de=function(e){var r=ae.call(e,le),t=e[le];try{e[le]=void 0;var n=!0}catch(e){}var i=se.call(e);return n&&(r?e[le]=t:delete e[le]),i},ce=Object.prototype.toString;var ue=de,he=function(e){return ce.call(e)},be=ne?ne.toStringTag:void 0;var fe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":be&&be in Object(e)?ue(e):he(e)};var ge=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},me=fe,pe=ge;var ye,ve=function(e){if(!pe(e))return!1;var r=me(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},xe=te["__core-js_shared__"],we=(ye=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||""))?"Symbol(src)_1."+ye:"";var $e=function(e){return!!we&&we in e},Fe=Function.prototype.toString;var De=function(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ee=ve,_e=$e,Ce=ge,Oe=De,Se=/^\[object .+?Constructor\]$/,Ae=Function.prototype,ke=Object.prototype,ze=Ae.toString,je=ke.hasOwnProperty,Be=RegExp("^"+ze.call(je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e,r){return null==e?void 0:e[r]},Te=function(e){return!(!Ce(e)||_e(e))&&(Ee(e)?Be:Se).test(Oe(e))},Ie=Me;var Pe=function(e,r){var t=Ie(e,r);return Te(t)?t:void 0},Ye=Pe(te,"DataView"),Le=Pe(te,"Map"),Re=Ye,We=Le,Ne=Pe(te,"Promise"),He=Pe(te,"Set"),Ve=Pe(te,"WeakMap"),Ue=fe,Ze=De,qe="[object Map]",Ke="[object Promise]",Je="[object Set]",Xe="[object WeakMap]",Ge="[object DataView]",Qe=Ze(Re),er=Ze(We),rr=Ze(Ne),tr=Ze(He),nr=Ze(Ve),ir=Ue;(Re&&ir(new Re(new ArrayBuffer(1)))!=Ge||We&&ir(new We)!=qe||Ne&&ir(Ne.resolve())!=Ke||He&&ir(new He)!=Je||Ve&&ir(new Ve)!=Xe)&&(ir=function(e){var r=Ue(e),t="[object Object]"==r?e.constructor:void 0,n=t?Ze(t):"";if(n)switch(n){case Qe:return Ge;case er:return qe;case rr:return Ke;case tr:return Je;case nr:return Xe}return r});var or=ir;var ar=function(e){return null!=e&&"object"==typeof e},sr=fe,lr=ar;var dr=function(e){return lr(e)&&"[object Arguments]"==sr(e)},cr=ar,ur=Object.prototype,hr=ur.hasOwnProperty,br=ur.propertyIsEnumerable,fr=dr(function(){return arguments}())?dr:function(e){return cr(e)&&hr.call(e,"callee")&&!br.call(e,"callee")},gr=Array.isArray;var mr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},pr=ve,yr=mr;var vr=function(e){return null!=e&&yr(e.length)&&!pr(e)},xr={exports:{}};var wr=function(){return!1};!function(e,r){var t=te,n=wr,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(xr,xr.exports);var $r=xr.exports,Fr=fe,Dr=mr,Er=ar,_r={};_r["[object Float32Array]"]=_r["[object Float64Array]"]=_r["[object Int8Array]"]=_r["[object Int16Array]"]=_r["[object Int32Array]"]=_r["[object Uint8Array]"]=_r["[object Uint8ClampedArray]"]=_r["[object Uint16Array]"]=_r["[object Uint32Array]"]=!0,_r["[object Arguments]"]=_r["[object Array]"]=_r["[object ArrayBuffer]"]=_r["[object Boolean]"]=_r["[object DataView]"]=_r["[object Date]"]=_r["[object Error]"]=_r["[object Function]"]=_r["[object Map]"]=_r["[object Number]"]=_r["[object Object]"]=_r["[object RegExp]"]=_r["[object Set]"]=_r["[object String]"]=_r["[object WeakMap]"]=!1;var Cr=function(e){return Er(e)&&Dr(e.length)&&!!_r[Fr(e)]};var Or=function(e){return function(r){return e(r)}},Sr={exports:{}};!function(e,r){var t=Q,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&t.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Sr,Sr.exports);var Ar=Sr.exports,kr=Cr,zr=Or,jr=Ar&&Ar.isTypedArray,Br=jr?zr(jr):kr,Mr=G,Tr=or,Ir=fr,Pr=gr,Yr=vr,Lr=$r,Rr=Z,Wr=Br,Nr=Object.prototype.hasOwnProperty;var Hr=function(e){if(null==e)return!0;if(Yr(e)&&(Pr(e)||"string"==typeof e||"function"==typeof e.splice||Lr(e)||Wr(e)||Ir(e)))return!e.length;var r=Tr(e);if("[object Map]"==r||"[object Set]"==r)return!e.size;if(Rr(e))return!Mr(e).length;for(var t in e)if(Nr.call(e,t))return!1;return!0},Vr=V(Hr),Ur=function(e,r){return Ur=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Ur(e,r)};var Zr=function(){return Zr=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Zr.apply(this,arguments)};var qr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Kr=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Jr="object"==typeof qr&&qr&&qr.Object===Object&&qr,Xr="object"==typeof self&&self&&self.Object===Object&&self,Gr=Jr||Xr||Function("return this")(),Qr=Gr,et=function(){return Qr.Date.now()},rt=/\s/;var tt=function(e){for(var r=e.length;r--&&rt.test(e.charAt(r)););return r},nt=/^\s+/;var it=function(e){return e?e.slice(0,tt(e)+1).replace(nt,""):e},ot=Gr.Symbol,at=ot,st=Object.prototype,lt=st.hasOwnProperty,dt=st.toString,ct=at?at.toStringTag:void 0;var ut=function(e){var r=lt.call(e,ct),t=e[ct];try{e[ct]=void 0;var n=!0}catch(e){}var i=dt.call(e);return n&&(r?e[ct]=t:delete e[ct]),i},ht=Object.prototype.toString;var bt=ut,ft=function(e){return ht.call(e)},gt=ot?ot.toStringTag:void 0;var mt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":gt&&gt in Object(e)?bt(e):ft(e)},pt=function(e){return null!=e&&"object"==typeof e};var yt=it,vt=Kr,xt=function(e){return"symbol"==typeof e||pt(e)&&"[object Symbol]"==mt(e)},wt=/^[-+]0x[0-9a-f]+$/i,$t=/^0b[01]+$/i,Ft=/^0o[0-7]+$/i,Dt=parseInt;var Et=Kr,_t=et,Ct=function(e){if("number"==typeof e)return e;if(xt(e))return NaN;if(vt(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=vt(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=yt(e);var t=$t.test(e);return t||Ft.test(e)?Dt(e.slice(2),t?2:8):wt.test(e)?NaN:+e},Ot=Math.max,St=Math.min;var At=function(e,r,t){var n,i,o,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,o=i;return n=i=void 0,d=r,a=e.apply(o,t)}function f(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function g(){var e=_t();if(f(e))return m(e);s=setTimeout(g,function(e){var t=r-(e-l);return u?St(t,o-(e-d)):t}(e))}function m(e){return s=void 0,h&&n?b(e):(n=i=void 0,a)}function p(){var e=_t(),t=f(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(g,r),c?b(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,r),b(l)}return void 0===s&&(s=setTimeout(g,r)),a}return r=Ct(r)||0,Et(t)&&(c=!!t.leading,o=(u="maxWait"in t)?Ot(Ct(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},p.flush=function(){return void 0===s?a:m(_t())},p},kt=At,zt=Kr;var jt=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return zt(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),kt(e,r,{leading:n,maxWait:r,trailing:i})},Bt=function(e,r,t,n){switch(r){case"debounce":return At(e,t,n);case"throttle":return jt(e,t,n);default:return e}},Mt=function(e){return"function"==typeof e},Tt=function(){return"undefined"==typeof window},It=function(e){return e instanceof Element||e instanceof HTMLDocument},Pt=function(e,r,t,n){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!n||r.height===a&&!t?r:(e&&Mt(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Tt()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Tt())return null;if(r)return document.querySelector(r);if(n&&It(n))return n;if(t.targetRef&&It(t.targetRef.current))return t.targetRef.current;var i=O(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=Pt(s,t.setState.bind(t),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Tt()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Mt(r)?"renderProp":Mt(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Tt()||(t.resizeHandler=Bt(t.createResizeHandler,i,a,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Ur(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Tt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(a,null)}}}(c);var Yt=Tt()?u:h;function Lt(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,b=e.targetRef,f=e.observerOptions,g=e.onResize,m=o(t),p=o(null),y=null!=b?b:p,v=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Yt((function(){if(!Tt()){var e=Pt(g,$,c,h);v.current=Bt((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!m.current&&!Tt()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,f),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,g,f,y.current]),Zr({ref:y},w)}var Rt=fe,Wt=ar;var Nt=function(e){return"symbol"==typeof e||Wt(e)&&"[object Symbol]"==Rt(e)},Ht=gr,Vt=Nt,Ut=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zt=/^\w*$/;var qt=function(e,r){if(Ht(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Vt(e))||(Zt.test(e)||!Ut.test(e)||null!=r&&e in Object(r))},Kt=Pe(Object,"create"),Jt=Kt;var Xt=function(){this.__data__=Jt?Jt(null):{},this.size=0};var Gt=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Qt=Kt,en=Object.prototype.hasOwnProperty;var rn=function(e){var r=this.__data__;if(Qt){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return en.call(r,e)?r[e]:void 0},tn=Kt,nn=Object.prototype.hasOwnProperty;var on=function(e){var r=this.__data__;return tn?void 0!==r[e]:nn.call(r,e)},an=Kt;var sn=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=an&&void 0===r?"__lodash_hash_undefined__":r,this},ln=Xt,dn=Gt,cn=rn,un=on,hn=sn;function bn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}bn.prototype.clear=ln,bn.prototype.delete=dn,bn.prototype.get=cn,bn.prototype.has=un,bn.prototype.set=hn;var fn=bn;var gn=function(){this.__data__=[],this.size=0};var mn=function(e,r){return e===r||e!=e&&r!=r},pn=mn;var yn=function(e,r){for(var t=e.length;t--;)if(pn(e[t][0],r))return t;return-1},vn=yn,xn=Array.prototype.splice;var wn=function(e){var r=this.__data__,t=vn(r,e);return!(t<0)&&(t==r.length-1?r.pop():xn.call(r,t,1),--this.size,!0)},$n=yn;var Fn=function(e){var r=this.__data__,t=$n(r,e);return t<0?void 0:r[t][1]},Dn=yn;var En=function(e){return Dn(this.__data__,e)>-1},_n=yn;var Cn=function(e,r){var t=this.__data__,n=_n(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},On=gn,Sn=wn,An=Fn,kn=En,zn=Cn;function jn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}jn.prototype.clear=On,jn.prototype.delete=Sn,jn.prototype.get=An,jn.prototype.has=kn,jn.prototype.set=zn;var Bn=jn,Mn=fn,Tn=Bn,In=Le;var Pn=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Yn=function(e,r){var t=e.__data__;return Pn(r)?t["string"==typeof r?"string":"hash"]:t.map},Ln=Yn;var Rn=function(e){var r=Ln(this,e).delete(e);return this.size-=r?1:0,r},Wn=Yn;var Nn=function(e){return Wn(this,e).get(e)},Hn=Yn;var Vn=function(e){return Hn(this,e).has(e)},Un=Yn;var Zn=function(e,r){var t=Un(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},qn=function(){this.size=0,this.__data__={hash:new Mn,map:new(In||Tn),string:new Mn}},Kn=Rn,Jn=Nn,Xn=Vn,Gn=Zn;function Qn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Qn.prototype.clear=qn,Qn.prototype.delete=Kn,Qn.prototype.get=Jn,Qn.prototype.has=Xn,Qn.prototype.set=Gn;var ei=Qn,ri=ei;function ti(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(ti.Cache||ri),t}ti.Cache=ri;var ni=ti;var ii=function(e){var r=ni(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},oi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ai=/\\(\\)?/g,si=ii((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(oi,(function(e,t,n,i){r.push(n?i.replace(ai,"$1"):t||e)})),r}));var li=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},di=gr,ci=Nt,ui=ne?ne.prototype:void 0,hi=ui?ui.toString:void 0;var bi=function e(r){if("string"==typeof r)return r;if(di(r))return li(r,e)+"";if(ci(r))return hi?hi.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},fi=bi;var gi=gr,mi=qt,pi=si,yi=function(e){return null==e?"":fi(e)};var vi=Nt;var xi=function(e,r){return gi(e)?e:mi(e,r)?[e]:pi(yi(e))},wi=function(e){if("string"==typeof e||vi(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var $i=function(e,r){for(var t=0,n=(r=xi(r,e)).length;null!=e&&t<n;)e=e[wi(r[t++])];return t&&t==n?e:void 0};var Fi=V((function(e,r,t){var n=null==e?void 0:$i(e,r);return void 0===n?t:n}));const Di=(e,r,t)=>Fi(t,r)||Fi(e,r),Ei=(e,r)=>{const t=r||e.defaultValue;return Fi(e.collections,t)},_i={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},Ci=e=>r=>{var t;const n=r.theme,i=Ei(_i,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Di(i,e,n.overrides.motion):i[e]},Oi={"duration-150":Ci("duration-150"),"duration-250":Ci("duration-250"),"duration-350":Ci("duration-350"),"duration-500":Ci("duration-500"),"duration-800":Ci("duration-800"),"duration-1000":Ci("duration-1000"),"ease-default":Ci("ease-default"),"ease-standard":Ci("ease-standard"),"ease-entrance":Ci("ease-entrance"),"ease-exit":Ci("ease-exit")},Si={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Ai=e=>r=>{var t;const n=r.theme,i=Ei(Si,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?Di(i,e,n.overrides.primitiveColour):i[e]},ki={"brand-10":Ai("brand-10"),"brand-20":Ai("brand-20"),"brand-30":Ai("brand-30"),"brand-40":Ai("brand-40"),"brand-50":Ai("brand-50"),"brand-60":Ai("brand-60"),"brand-70":Ai("brand-70"),"brand-80":Ai("brand-80"),"brand-90":Ai("brand-90"),"brand-95":Ai("brand-95"),"brand-100":Ai("brand-100"),"primary-10":Ai("primary-10"),"primary-20":Ai("primary-20"),"primary-30":Ai("primary-30"),"primary-40":Ai("primary-40"),"primary-50":Ai("primary-50"),"primary-60":Ai("primary-60"),"primary-70":Ai("primary-70"),"primary-80":Ai("primary-80"),"primary-90":Ai("primary-90"),"primary-95":Ai("primary-95"),"primary-100":Ai("primary-100"),"secondary-10":Ai("secondary-10"),"secondary-20":Ai("secondary-20"),"secondary-30":Ai("secondary-30"),"secondary-40":Ai("secondary-40"),"secondary-50":Ai("secondary-50"),"secondary-60":Ai("secondary-60"),"secondary-70":Ai("secondary-70"),"secondary-80":Ai("secondary-80"),"secondary-90":Ai("secondary-90"),"secondary-95":Ai("secondary-95"),"secondary-100":Ai("secondary-100"),"neutral-10":Ai("neutral-10"),"neutral-20":Ai("neutral-20"),"neutral-30":Ai("neutral-30"),"neutral-40":Ai("neutral-40"),"neutral-50":Ai("neutral-50"),"neutral-60":Ai("neutral-60"),"neutral-70":Ai("neutral-70"),"neutral-80":Ai("neutral-80"),"neutral-90":Ai("neutral-90"),"neutral-95":Ai("neutral-95"),"neutral-100":Ai("neutral-100"),"success-10":Ai("success-10"),"success-20":Ai("success-20"),"success-30":Ai("success-30"),"success-40":Ai("success-40"),"success-50":Ai("success-50"),"success-60":Ai("success-60"),"success-70":Ai("success-70"),"success-80":Ai("success-80"),"success-90":Ai("success-90"),"success-95":Ai("success-95"),"success-100":Ai("success-100"),"warning-10":Ai("warning-10"),"warning-20":Ai("warning-20"),"warning-30":Ai("warning-30"),"warning-40":Ai("warning-40"),"warning-50":Ai("warning-50"),"warning-60":Ai("warning-60"),"warning-70":Ai("warning-70"),"warning-80":Ai("warning-80"),"warning-90":Ai("warning-90"),"warning-95":Ai("warning-95"),"warning-100":Ai("warning-100"),"error-10":Ai("error-10"),"error-20":Ai("error-20"),"error-30":Ai("error-30"),"error-40":Ai("error-40"),"error-50":Ai("error-50"),"error-60":Ai("error-60"),"error-70":Ai("error-70"),"error-80":Ai("error-80"),"error-90":Ai("error-90"),"error-95":Ai("error-95"),"error-100":Ai("error-100"),"info-10":Ai("info-10"),"info-20":Ai("info-20"),"info-30":Ai("info-30"),"info-40":Ai("info-40"),"info-50":Ai("info-50"),"info-60":Ai("info-60"),"info-70":Ai("info-70"),"info-80":Ai("info-80"),"info-90":Ai("info-90"),"info-95":Ai("info-95"),"info-100":Ai("info-100"),white:Ai("white"),black:Ai("black"),"primary-inverse":Ai("primary-inverse")},zi={text:Ai("neutral-20"),"text-subtle":Ai("neutral-30"),"text-subtler":Ai("neutral-50"),"text-subtlest":Ai("neutral-60"),"text-primary":Ai("primary-50"),"text-hover":Ai("primary-40"),"text-selected":Ai("primary-50"),"text-selected-hover":Ai("primary-40"),"text-disabled":Ai("neutral-50"),"text-disabled-subtle":Ai("neutral-60"),"text-disabled-subtlest":Ai("neutral-80"),"text-selected-disabled":Ai("neutral-20"),"text-success":Ai("success-40"),"text-warning":Ai("warning-40"),"text-error":Ai("error-40"),"text-info":Ai("info-40"),"text-inverse":Ai("white"),icon:Ai("neutral-50"),"icon-subtle":Ai("neutral-60"),"icon-strongest":Ai("neutral-20"),"icon-primary":Ai("primary-50"),"icon-primary-subtle":Ai("primary-60"),"icon-primary-subtlest":Ai("primary-70"),"icon-hover":Ai("primary-40"),"icon-selected":Ai("primary-50"),"icon-selected-hover":Ai("primary-40"),"icon-disabled":Ai("neutral-50"),"icon-disabled-subtle":Ai("neutral-60"),"icon-selected-disabled":Ai("neutral-60"),"icon-success":Ai("success-50"),"icon-warning":Ai("warning-60"),"icon-error":Ai("error-50"),"icon-error-strong":Ai("error-40"),"icon-info":Ai("info-50"),"icon-inverse":Ai("white"),"icon-primary-inverse":Ai("primary-inverse"),border:Ai("neutral-90"),"border-strong":Ai("neutral-70"),"border-stronger":Ai("neutral-50"),"border-primary":Ai("primary-50"),"border-primary-subtle":Ai("primary-60"),"border-hover":Ai("primary-90"),"border-hover-strong":Ai("primary-60"),"border-selected":Ai("primary-50"),"border-selected-subtle":Ai("primary-70"),"border-selected-subtlest":Ai("primary-90"),"border-selected-hover":Ai("primary-40"),"border-focus":Ai("primary-60"),"border-focus-strong":Ai("primary-50"),"border-disabled":Ai("neutral-90"),"border-selected-disabled":Ai("neutral-70"),"border-success":Ai("success-60"),"border-warning":Ai("warning-60"),"border-error":Ai("error-60"),"border-error-focus":Ai("error-60"),"border-error-focus-strong":Ai("error-40"),"border-error-strong":Ai("error-40"),"border-info":Ai("info-60"),bg:Ai("white"),"bg-strong":Ai("neutral-100"),"bg-stronger":Ai("neutral-95"),"bg-strongest":Ai("neutral-90"),"bg-hover":Ai("primary-95"),"bg-hover-strong":Ai("primary-90"),"bg-hover-subtle":Ai("primary-100"),"bg-hover-neutral":Ai("neutral-100"),"bg-hover-neutral-strong":Ai("neutral-90"),"bg-selected":Ai("primary-95"),"bg-selected-hover":Ai("primary-90"),"bg-selected-strong":Ai("primary-90"),"bg-selected-stronger":Ai("primary-70"),"bg-selected-strongest":Ai("primary-50"),"bg-selected-strongest-hover":Ai("primary-40"),"bg-disabled":Ai("neutral-95"),"bg-selected-disabled":Ai("neutral-95"),"bg-selected-stronger-disabled":Ai("neutral-70"),"bg-success":Ai("success-100"),"bg-success-hover":Ai("success-95"),"bg-success-strong":Ai("success-50"),"bg-success-strong-hover":Ai("success-40"),"bg-warning":Ai("warning-100"),"bg-warning-hover":Ai("warning-95"),"bg-warning-strong":Ai("warning-50"),"bg-warning-strong-hover":Ai("warning-40"),"bg-info":Ai("info-100"),"bg-info-hover":Ai("info-95"),"bg-info-strong":Ai("info-50"),"bg-info-strong-hover":Ai("info-40"),"bg-error":Ai("error-100"),"bg-error-hover":Ai("error-95"),"bg-error-strong":Ai("error-50"),"bg-error-strong-hover":Ai("error-40"),"bg-inverse":Ai("neutral-20"),"bg-inverse-subtle":Ai("neutral-30"),"bg-inverse-subtler":Ai("neutral-50"),"bg-inverse-subtlest":Ai("neutral-60"),"bg-inverse-hover":Ai("neutral-40"),"bg-primary":Ai("primary-50"),"bg-primary-subtle":Ai("primary-60"),"bg-primary-subtler":Ai("primary-95"),"bg-primary-subtlest":Ai("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ai("primary-40"),"bg-primary-subtlest-hover":Ai("primary-90"),"bg-primary-subtlest-selected":Ai("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ai("primary-50"),"hyperlink-hover":Ai("primary-40"),"hyperlink-visited":Ai("primary-40"),"hyperlink-inverse":Ai("primary-inverse"),"focus-ring":Ai("black"),"focus-ring-inverse":Ai("white")},ji={collections:{lifesg:zi,bookingsg:zi,rbs:zi,mylegacy:zi,ccube:zi},defaultValue:"lifesg"},Bi=e=>r=>{var t;const n=r.theme,i=Ei(ji,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?Di(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},Mi={text:Bi("text"),"text-subtle":Bi("text-subtle"),"text-subtler":Bi("text-subtler"),"text-subtlest":Bi("text-subtlest"),"text-primary":Bi("text-primary"),"text-hover":Bi("text-hover"),"text-selected":Bi("text-selected"),"text-selected-hover":Bi("text-selected-hover"),"text-disabled":Bi("text-disabled"),"text-disabled-subtle":Bi("text-disabled-subtle"),"text-disabled-subtlest":Bi("text-disabled-subtlest"),"text-selected-disabled":Bi("text-selected-disabled"),"text-success":Bi("text-success"),"text-warning":Bi("text-warning"),"text-error":Bi("text-error"),"text-info":Bi("text-info"),"text-inverse":Bi("text-inverse"),icon:Bi("icon"),"icon-subtle":Bi("icon-subtle"),"icon-strongest":Bi("icon-strongest"),"icon-primary":Bi("icon-primary"),"icon-primary-subtle":Bi("icon-primary-subtle"),"icon-primary-subtlest":Bi("icon-primary-subtlest"),"icon-hover":Bi("icon-hover"),"icon-selected":Bi("icon-selected"),"icon-selected-hover":Bi("icon-selected-hover"),"icon-disabled":Bi("icon-disabled"),"icon-disabled-subtle":Bi("icon-disabled-subtle"),"icon-selected-disabled":Bi("icon-selected-disabled"),"icon-success":Bi("icon-success"),"icon-warning":Bi("icon-warning"),"icon-error":Bi("icon-error"),"icon-error-strong":Bi("icon-error-strong"),"icon-info":Bi("icon-info"),"icon-inverse":Bi("icon-inverse"),"icon-primary-inverse":Bi("icon-primary-inverse"),border:Bi("border"),"border-strong":Bi("border-strong"),"border-stronger":Bi("border-stronger"),"border-primary":Bi("border-primary"),"border-primary-subtle":Bi("border-primary-subtle"),"border-hover":Bi("border-hover"),"border-hover-strong":Bi("border-hover-strong"),"border-selected":Bi("border-selected"),"border-selected-subtle":Bi("border-selected-subtle"),"border-selected-subtlest":Bi("border-selected-subtlest"),"border-selected-hover":Bi("border-selected-hover"),"border-focus":Bi("border-focus"),"border-focus-strong":Bi("border-focus-strong"),"border-disabled":Bi("border-disabled"),"border-selected-disabled":Bi("border-selected-disabled"),"border-success":Bi("border-success"),"border-warning":Bi("border-warning"),"border-error":Bi("border-error"),"border-error-focus":Bi("border-error-focus"),"border-error-focus-strong":Bi("border-error-focus-strong"),"border-error-strong":Bi("border-error-strong"),"border-info":Bi("border-info"),bg:Bi("bg"),"bg-strong":Bi("bg-strong"),"bg-stronger":Bi("bg-stronger"),"bg-strongest":Bi("bg-strongest"),"bg-hover":Bi("bg-hover"),"bg-hover-strong":Bi("bg-hover-strong"),"bg-hover-subtle":Bi("bg-hover-subtle"),"bg-hover-neutral":Bi("bg-hover-neutral"),"bg-hover-neutral-strong":Bi("bg-hover-neutral-strong"),"bg-selected":Bi("bg-selected"),"bg-selected-hover":Bi("bg-selected-hover"),"bg-selected-strong":Bi("bg-selected-strong"),"bg-selected-stronger":Bi("bg-selected-stronger"),"bg-selected-strongest":Bi("bg-selected-strongest"),"bg-selected-strongest-hover":Bi("bg-selected-strongest-hover"),"bg-disabled":Bi("bg-disabled"),"bg-selected-disabled":Bi("bg-selected-disabled"),"bg-selected-stronger-disabled":Bi("bg-selected-stronger-disabled"),"bg-success":Bi("bg-success"),"bg-success-hover":Bi("bg-success-hover"),"bg-success-strong":Bi("bg-success-strong"),"bg-success-strong-hover":Bi("bg-success-strong-hover"),"bg-warning":Bi("bg-warning"),"bg-warning-hover":Bi("bg-warning-hover"),"bg-warning-strong":Bi("bg-warning-strong"),"bg-warning-strong-hover":Bi("bg-warning-strong-hover"),"bg-info":Bi("bg-info"),"bg-info-hover":Bi("bg-info-hover"),"bg-info-strong":Bi("bg-info-strong"),"bg-info-strong-hover":Bi("bg-info-strong-hover"),"bg-error":Bi("bg-error"),"bg-error-hover":Bi("bg-error-hover"),"bg-error-strong":Bi("bg-error-strong"),"bg-error-strong-hover":Bi("bg-error-strong-hover"),"bg-inverse":Bi("bg-inverse"),"bg-inverse-subtle":Bi("bg-inverse-subtle"),"bg-inverse-subtler":Bi("bg-inverse-subtler"),"bg-inverse-subtlest":Bi("bg-inverse-subtlest"),"bg-inverse-hover":Bi("bg-inverse-hover"),"bg-primary":Bi("bg-primary"),"bg-primary-subtle":Bi("bg-primary-subtle"),"bg-primary-subtler":Bi("bg-primary-subtler"),"bg-primary-subtlest":Bi("bg-primary-subtlest"),"bg-available":Bi("bg-available"),"bg-primary-hover":Bi("bg-primary-hover"),"bg-primary-subtlest-hover":Bi("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Bi("bg-primary-subtlest-selected"),"overlay-strong":Bi("overlay-strong"),"overlay-subtle":Bi("overlay-subtle"),hyperlink:Bi("hyperlink"),"hyperlink-hover":Bi("hyperlink-hover"),"hyperlink-visited":Bi("hyperlink-visited"),"hyperlink-inverse":Bi("hyperlink-inverse"),"focus-ring":Bi("focus-ring"),"focus-ring-inverse":Bi("focus-ring-inverse")},Ti={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:Yi["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Mi.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return p`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},Ii=e=>r=>{var t;const n=r.theme,i=Ei(Ti,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Di(i,e,n.overrides.border)}px`:`${i[e]}px`},Pi=e=>1===e.length&&"theme"in e[0],Yi={"width-010":Ii("width-010"),"width-020":Ii("width-020"),"width-040":Ii("width-040"),solid:(Li="solid",e=>{var r;const t=e.theme,n=Ei(Ti,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Di(n,Li,t.overrides.border):n[Li];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=Pi(r)?[]:r,o=Pi(r)?r[0]:t,a=o.theme,s=Ei(Ti,null==a?void 0:a.borderScheme);return((null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.border)?Di(s,e,a.overrides.border):s[e])(...i)(o)})("dashed-default")};var Li;const Ri={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Wi=e=>r=>{var t;const n=r.theme,i=Ei(Ri,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Di(i,e,n.overrides.breakpoint):i[e],o},Ni={"xxs-min":Wi("xxs-min"),"xxs-max":Wi("xxs-max"),"xs-min":Wi("xs-min"),"xs-max":Wi("xs-max"),"sm-min":Wi("sm-min"),"sm-max":Wi("sm-max"),"md-min":Wi("md-min"),"md-max":Wi("md-max"),"lg-min":Wi("lg-min"),"lg-max":Wi("lg-max"),"xl-min":Wi("xl-min"),"xl-max":Wi("xl-max"),"xxl-min":Wi("xxl-min"),"xxs-column":Wi("xxs-column"),"xs-column":Wi("xs-column"),"sm-column":Wi("sm-column"),"md-column":Wi("md-column"),"lg-column":Wi("lg-column"),"xl-column":Wi("xl-column"),"xxl-column":Wi("xxl-column"),"xxs-gutter":Wi("xxs-gutter"),"xs-gutter":Wi("xs-gutter"),"sm-gutter":Wi("sm-gutter"),"md-gutter":Wi("md-gutter"),"lg-gutter":Wi("lg-gutter"),"xl-gutter":Wi("xl-gutter"),"xxl-gutter":Wi("xxl-gutter"),"xxs-margin":Wi("xxs-margin"),"xs-margin":Wi("xs-margin"),"sm-margin":Wi("sm-margin"),"md-margin":Wi("md-margin"),"lg-margin":Wi("lg-margin"),"xl-margin":Wi("xl-margin"),"xxl-margin":Wi("xxl-margin")},Hi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ni["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Vi={MaxWidth:Hi("max-width"),MinWidth:Hi("min-width")},Ui={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Zi={collections:{lifesg:Ui,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Ui,mylegacy:Ui,ccube:Ui},defaultValue:"lifesg"},qi=e=>r=>{var t;const n=r.theme,i=Ei(Zi,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Di(i,e,n.overrides.fontSpec):i[e]},Ki={"header-size-xxl":qi("header-size-xxl"),"header-size-xl":qi("header-size-xl"),"header-size-lg":qi("header-size-lg"),"header-size-md":qi("header-size-md"),"header-size-sm":qi("header-size-sm"),"header-size-xs":qi("header-size-xs"),"header-lh-xxl":qi("header-lh-xxl"),"header-lh-xl":qi("header-lh-xl"),"header-lh-lg":qi("header-lh-lg"),"header-lh-md":qi("header-lh-md"),"header-lh-sm":qi("header-lh-sm"),"header-lh-xs":qi("header-lh-xs"),"header-ls-xxl":qi("header-ls-xxl"),"header-ls-xl":qi("header-ls-xl"),"header-ls-lg":qi("header-ls-lg"),"header-ls-md":qi("header-ls-md"),"header-ls-sm":qi("header-ls-sm"),"header-ls-xs":qi("header-ls-xs"),"weight-light":qi("weight-light"),"weight-regular":qi("weight-regular"),"weight-semibold":qi("weight-semibold"),"weight-bold":qi("weight-bold"),"font-family":qi("font-family"),"body-size-baseline":qi("body-size-baseline"),"body-size-md":qi("body-size-md"),"body-size-sm":qi("body-size-sm"),"body-size-xs":qi("body-size-xs"),"body-lh-baseline":qi("body-lh-baseline"),"body-lh-md":qi("body-lh-md"),"body-lh-sm":qi("body-lh-sm"),"body-lh-xs":qi("body-lh-xs"),"body-ls-baseline":qi("body-ls-baseline"),"body-ls-md":qi("body-ls-md"),"body-ls-sm":qi("body-ls-sm"),"body-ls-xs":qi("body-ls-xs"),"formlabel-size-baseline":qi("formlabel-size-baseline"),"formlabel-size-lg":qi("formlabel-size-lg"),"formlabel-lh-baseline":qi("formlabel-lh-baseline"),"formlabel-lh-lg":qi("formlabel-lh-lg"),"formlabel-ls-baseline":qi("formlabel-ls-baseline"),"formlabel-ls-lg":qi("formlabel-ls-lg")},Ji={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Xi=e=>r=>{var t;const n=r.theme,i=Ei(Ji,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Di(i,e,n.overrides.radius)}px`:`${i[e]}px`},Gi={none:Xi("none"),xs:Xi("xs"),sm:Xi("sm"),md:Xi("md"),lg:Xi("lg"),full:Xi("full")},Qi={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},eo=e=>r=>{var t;const n=r.theme,i=Ei(Qi,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Di(i,e,n.overrides.spacing)}px`:`${i[e]}px`},ro={"spacing-0":eo("spacing-0"),"spacing-4":eo("spacing-4"),"spacing-8":eo("spacing-8"),"spacing-12":eo("spacing-12"),"spacing-16":eo("spacing-16"),"spacing-20":eo("spacing-20"),"spacing-24":eo("spacing-24"),"spacing-32":eo("spacing-32"),"spacing-40":eo("spacing-40"),"spacing-48":eo("spacing-48"),"spacing-64":eo("spacing-64"),"spacing-72":eo("spacing-72"),"layout-xs":eo("layout-xs"),"layout-sm":eo("layout-sm"),"layout-md":eo("layout-md"),"layout-lg":eo("layout-lg"),"layout-xl":eo("layout-xl"),"layout-xxl":eo("layout-xxl"),"layout-xxxl":eo("layout-xxxl")},to=(e,r,t,n)=>p`
    font-family: ${qi("font-family")};
    font-size: ${qi(e)};
    font-weight: ${qi(r)};
    line-height: ${qi(t)};
    letter-spacing: ${qi(n)};
`,no={"header-xxl-light":to("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":to("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":to("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":to("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":to("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":to("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":to("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":to("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":to("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":to("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":to("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":to("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":to("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":to("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":to("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":to("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":to("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":to("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":to("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":to("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":to("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":to("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":to("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":to("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":to("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":to("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":to("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":to("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":to("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":to("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":to("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":to("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":to("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":to("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":to("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":to("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":to("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":to("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":to("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":to("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":to("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":to("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},io={collections:{lifesg:no,bookingsg:no,rbs:no,mylegacy:no,ccube:no},defaultValue:"lifesg"},oo=e=>r=>{var t;const n=r.theme,i=Ei(io,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Di(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},ao={"header-xxl-light":oo("header-xxl-light"),"header-xxl-regular":oo("header-xxl-regular"),"header-xxl-semibold":oo("header-xxl-semibold"),"header-xxl-bold":oo("header-xxl-bold"),"header-xl-light":oo("header-xl-light"),"header-xl-regular":oo("header-xl-regular"),"header-xl-semibold":oo("header-xl-semibold"),"header-xl-bold":oo("header-xl-bold"),"header-lg-light":oo("header-lg-light"),"header-lg-regular":oo("header-lg-regular"),"header-lg-semibold":oo("header-lg-semibold"),"header-lg-bold":oo("header-lg-bold"),"header-md-light":oo("header-md-light"),"header-md-regular":oo("header-md-regular"),"header-md-semibold":oo("header-md-semibold"),"header-md-bold":oo("header-md-bold"),"header-sm-light":oo("header-sm-light"),"header-sm-regular":oo("header-sm-regular"),"header-sm-semibold":oo("header-sm-semibold"),"header-sm-bold":oo("header-sm-bold"),"header-xs-light":oo("header-xs-light"),"header-xs-regular":oo("header-xs-regular"),"header-xs-semibold":oo("header-xs-semibold"),"header-xs-bold":oo("header-xs-bold"),"body-baseline-light":oo("body-baseline-light"),"body-baseline-regular":oo("body-baseline-regular"),"body-baseline-semibold":oo("body-baseline-semibold"),"body-baseline-bold":oo("body-baseline-bold"),"body-md-light":oo("body-md-light"),"body-md-regular":oo("body-md-regular"),"body-md-semibold":oo("body-md-semibold"),"body-md-bold":oo("body-md-bold"),"body-sm-light":oo("body-sm-light"),"body-sm-regular":oo("body-sm-regular"),"body-sm-semibold":oo("body-sm-semibold"),"body-sm-bold":oo("body-sm-bold"),"body-xs-light":oo("body-xs-light"),"body-xs-regular":oo("body-xs-regular"),"body-xs-semibold":oo("body-xs-semibold"),"body-xs-bold":oo("body-xs-bold"),"formlabel-baseline-semibold":oo("formlabel-baseline-semibold"),"formlabel-lg-semibold":oo("formlabel-lg-semibold")},so=Object.assign(Object.assign({},Mi),{Primitive:ki}),lo=Object.assign(Object.assign({},ao),{Spec:Ki}),co=Oi,uo=Yi,ho=ro,bo=Gi,fo=Ni,go=Vi;var mo;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(mo||(mo={}));const po=e=>p`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,yo=m.div`
    font-weight: ${e=>e.$bold?lo.Spec["weight-semibold"]:lo.Spec["weight-regular"]};
    color: ${e=>e.$selected?so["text-selected"]:so.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&po(e.$maxLines||2)}
    overflow-wrap: break-word;
`,vo=m.div`
    color: ${so["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&po(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?p`
                    ${lo["body-md-semibold"]}
                `:p`
                    ${lo["body-baseline-regular"]}
                `}
`,xo=m.span`
    font-weight: ${lo.Spec["weight-semibold"]};
`,wo=m.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return p`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return p`
                    ${yo} {
                        display: inline;
                    }

                    ${vo} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,$o=m.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Fo=m.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Do=({bold:n,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:d,truncationType:c="middle",variant:u})=>{const h=y(),g="small"===u?lo.Spec["body-size-md"]({theme:h}):lo.Spec["body-size-baseline"]({theme:h}),m=lo.Spec["font-family"]({theme:h}),{ref:p,width:v}=Lt(),x=b((e=>{if("inline"!==i)return!1;return mo.getTextWidth(e,`${g} '${m}'`)>v*s-50}),[v,i,g,m,s]),w=f((()=>x(o)),[x,o]),$=f((()=>d&&x(d)),[x,d]),F=w||$?"next-line":i,D=n=>{if(!a)return n;const i=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(i),l=s+a.length;return-1===s?n:e(t,{children:[o.slice(0,s),r(xo,Object.assign({$variant:u},{children:o.slice(s,l)})),o.slice(l)]})},E=n=>e(t,{children:[r($o,Object.assign({$maxLines:s,"aria-hidden":!0},{children:D(n)})),r(Fo,Object.assign({$maxLines:s,"aria-hidden":!0},{children:D(n)}))]});return e(wo,Object.assign({ref:p,$labelDisplayType:F,$variant:u},{children:[r(yo,Object.assign({"aria-label":o,$bold:n,$maxLines:s,$selected:l,$truncateType:c},{children:"middle"===c&&w?E(o):D(o)})),d&&r(vo,Object.assign({"aria-label":d,$maxLines:s,$truncateType:c,$labelDisplayType:i},{children:"middle"===c&&$?E(d):d}))]}))};var Eo=Bn;var _o=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var Co=function(e){return this.__data__.get(e)};var Oo=function(e){return this.__data__.has(e)},So=Bn,Ao=Le,ko=ei;var zo=function(e,r){var t=this.__data__;if(t instanceof So){var n=t.__data__;if(!Ao||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new ko(n)}return t.set(e,r),this.size=t.size,this},jo=Bn,Bo=function(){this.__data__=new Eo,this.size=0},Mo=_o,To=Co,Io=Oo,Po=zo;function Yo(e){var r=this.__data__=new jo(e);this.size=r.size}Yo.prototype.clear=Bo,Yo.prototype.delete=Mo,Yo.prototype.get=To,Yo.prototype.has=Io,Yo.prototype.set=Po;var Lo=Yo;var Ro=ei,Wo=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},No=function(e){return this.__data__.has(e)};function Ho(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Ro;++r<t;)this.add(e[r])}Ho.prototype.add=Ho.prototype.push=Wo,Ho.prototype.has=No;var Vo=function(e,r){return e.has(r)},Uo=Ho,Zo=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},qo=Vo;var Ko=function(e,r,t,n,i,o){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=o.get(e),c=o.get(r);if(d&&c)return d==r&&c==e;var u=-1,h=!0,b=2&t?new Uo:void 0;for(o.set(e,r),o.set(r,e);++u<s;){var f=e[u],g=r[u];if(n)var m=a?n(g,f,u,r,e,o):n(f,g,u,e,r,o);if(void 0!==m){if(m)continue;h=!1;break}if(b){if(!Zo(r,(function(e,r){if(!qo(b,r)&&(f===e||i(f,e,t,n,o)))return b.push(r)}))){h=!1;break}}else if(f!==g&&!i(f,g,t,n,o)){h=!1;break}}return o.delete(e),o.delete(r),h};var Jo=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Xo=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},Go=te.Uint8Array,Qo=mn,ea=Ko,ra=Jo,ta=Xo,na=ne?ne.prototype:void 0,ia=na?na.valueOf:void 0;var oa=function(e,r,t,n,i,o,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!o(new Go(e),new Go(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Qo(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=ra;case"[object Set]":var l=1&n;if(s||(s=ta),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=ea(s(e),s(r),n,i,o,a);return a.delete(e),c;case"[object Symbol]":if(ia)return ia.call(e)==ia.call(r)}return!1};var aa=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},sa=aa,la=gr;var da=function(e,r,t){var n=r(e);return la(e)?n:sa(n,t(e))};var ca=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,o=[];++t<n;){var a=e[t];r(a,t,e)&&(o[i++]=a)}return o},ua=function(){return[]},ha=Object.prototype.propertyIsEnumerable,ba=Object.getOwnPropertySymbols,fa=ba?function(e){return null==e?[]:(e=Object(e),ca(ba(e),(function(r){return ha.call(e,r)})))}:ua;var ga=/^(?:0|[1-9]\d*)$/;var ma=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},pa=fr,ya=gr,va=$r,xa=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&ga.test(e))&&e>-1&&e%1==0&&e<r},wa=Br,$a=Object.prototype.hasOwnProperty;var Fa=function(e,r){var t=ya(e),n=!t&&pa(e),i=!t&&!n&&va(e),o=!t&&!n&&!i&&wa(e),a=t||n||i||o,s=a?ma(e.length,String):[],l=s.length;for(var d in e)!r&&!$a.call(e,d)||a&&("length"==d||i&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||xa(d,l))||s.push(d);return s},Da=Fa,Ea=G,_a=vr;var Ca=da,Oa=fa,Sa=function(e){return _a(e)?Da(e):Ea(e)};var Aa=function(e){return Ca(e,Sa,Oa)},ka=Object.prototype.hasOwnProperty;var za=function(e,r,t,n,i,o){var a=1&t,s=Aa(e),l=s.length;if(l!=Aa(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:ka.call(r,c)))return!1}var u=o.get(e),h=o.get(r);if(u&&h)return u==r&&h==e;var b=!0;o.set(e,r),o.set(r,e);for(var f=a;++d<l;){var g=e[c=s[d]],m=r[c];if(n)var p=a?n(m,g,c,r,e,o):n(g,m,c,e,r,o);if(!(void 0===p?g===m||i(g,m,t,n,o):p)){b=!1;break}f||(f="constructor"==c)}if(b&&!f){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(b=!1)}return o.delete(e),o.delete(r),b},ja=Lo,Ba=Ko,Ma=oa,Ta=za,Ia=or,Pa=gr,Ya=$r,La=Br,Ra="[object Arguments]",Wa="[object Array]",Na="[object Object]",Ha=Object.prototype.hasOwnProperty;var Va=function(e,r,t,n,i,o){var a=Pa(e),s=Pa(r),l=a?Wa:Ia(e),d=s?Wa:Ia(r),c=(l=l==Ra?Na:l)==Na,u=(d=d==Ra?Na:d)==Na,h=l==d;if(h&&Ya(e)){if(!Ya(r))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new ja),a||La(e)?Ba(e,r,t,n,i,o):Ma(e,r,l,t,n,i,o);if(!(1&t)){var b=c&&Ha.call(e,"__wrapped__"),f=u&&Ha.call(r,"__wrapped__");if(b||f){var g=b?e.value():e,m=f?r.value():r;return o||(o=new ja),i(g,m,t,n,o)}}return!!h&&(o||(o=new ja),Ta(e,r,t,n,i,o))},Ua=ar;var Za=function e(r,t,n,i,o){return r===t||(null==r||null==t||!Ua(r)&&!Ua(t)?r!=r&&t!=t:Va(r,t,n,i,e,o))},qa=Za;var Ka=V((function(e,r){return qa(e,r)})),Ja={exports:{}};Ja.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=m;var w="$isDayjsObject",$=function(e){return e instanceof _||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},D=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new _(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var _=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=m.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(f);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===b)},p.isSame=function(e,r){var t=D(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return D(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<D(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},f=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},g=this.$W,m=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,m):b(0,m+1);case l:var v=this.$locale().weekStart||0,x=(g<v?g+7:g)-v;return b(n?p-x:p+(6-x),m);case s:case h:return f(y+"Hours",0);case a:return f(y+"Minutes",1);case o:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],f=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var g=this.clone().set(h,1);g.$d[b](f),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else b&&this.$d[b](f);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var h,b=this;n=Number(n);var f=E.p(c),g=function(e){var r=D(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(f===d)return this.set(d,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return g(1);if(f===l)return g(7);var m=(h={},h[o]=r,h[a]=t,h[i]=e,h)[f]||1,p=this.$d.getTime()+n*m;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},f=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(o,a,!0);case"A":return f(o,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,h,b){var f,g=this,m=E.p(h),p=D(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(g,p)};switch(m){case u:f=x()/12;break;case d:f=x();break;case c:f=x()/3;break;case l:f=(v-y)/6048e5;break;case s:f=(v-y)/864e5;break;case a:f=v/t;break;case o:f=v/r;break;case i:f=v/e;break;default:f=v}return b?f:E.a(f)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),C=_.prototype;return D.prototype=C,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){C[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,_,D),e.$i=!0),D},D.locale=F,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=x[v],D.Ls=x,D.p={},D}();var Xa=V(Ja.exports),Ga={exports:{}};Ga.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],b=c&&c[1];a[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,f=a||(i||o?1:b.getDate()),g=i||b.getFullYear(),m=0;i&&!o||(m=o>0?o-1:b.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(g,m,f,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(g,m,f,p,y,v,x)):new Date(g,m,f,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var b=s.length,f=1;f<=b;f+=1){a[1]=s[f-1];var g=t.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}f===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Qa=V(Ga.exports),es={exports:{}};es.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var rs=V(es.exports),ts={exports:{}};ts.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ns=V(ts.exports),is={exports:{}};is.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var os,as,ss,ls=V(is.exports),ds={exports:{}},cs=V(ds.exports=(os={year:0,month:1,day:2,hour:3,minute:4,second:5},as={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=as[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),as[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=os[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,b=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",f=+e;return(t.utc(b).valueOf()-(f-=f%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Xa.extend(rs),Xa.extend(ls),Xa.extend(ns),Xa.extend(Qa),Xa.extend(cs),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Xa(r).startOf("week");return us(t).map((e=>hs(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return hs(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Xa(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Xa(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Xa(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?Xa(n):void 0,i?Xa(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(ss||(ss={}));const us=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},hs=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},bs=[1,3,5,7,8,10,12],fs=[4,6,9,11];var gs,ms,ps;function ys(e){const r=o(null);return h((()=>{r.current=e}),[e]),b(((...e)=>r.current(...e)),[])}!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":bs.includes(o)?Math.min(i,31).toString():fs.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Xa(e,t);return Xa(r,t).diff(n,"minute")},e.toDayjs=e=>e?Xa(e):Xa(),e.addMinutesToTime=(e,r,t="HH:mm")=>Xa(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Xa(e).isSame(Xa(r),t)}(gs||(gs={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!Xa(e).isBefore(n,"day"))||!(!i||!Xa(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Xa(e).isValid())return e}return""}}(ms||(ms={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ps||(ps={}));i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}});const vs=m.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,xs=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ws=m.div`
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
    animation: ${xs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,$s=m(ws)`
    animation-delay: -0.45s;
`,Fs=m(ws)`
    animation-delay: -0.3s;
`,Ds=m(ws)`
    animation-delay: -0.15s;
`,Es=({color:t,className:n,size:i})=>e(vs,Object.assign({className:n,$size:i,$color:t},{children:[r(ws,{id:"inner1"}),r($s,{id:"inner2"}),r(Fs,{id:"inner3"}),r(Ds,{id:"inner4"})]})),_s=p`
    outline-offset: -1px;
    outline: ${uo["width-020"]} ${uo.solid} ${so["border-focus"]};
`,Cs=p`
    outline-color: ${so["border-focus"]};
`,Os=p`
    outline-color: ${so["border-disabled"]};
`,Ss=p`
    outline-color: ${so["border-error-focus"]};
`,As=m.div`
    border: ${uo["width-010"]} ${uo.solid} ${so.border};
    border-radius: ${bo.sm};
    background: ${so.bg};

    :focus-within {
        ${_s}
    }
    ${e=>e.$focused&&_s}

    ${e=>e.$readOnly?p`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Cs}
                }
                ${e.$focused&&Cs}
            `:e.$disabled?p`
                background: ${so["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Os}
                }
                ${e.$focused&&Os}
            `:e.$error?p`
                border-color: ${so["border-error"]};

                :focus-within {
                    ${Ss}
                }
                ${e.$focused&&Ss}
            `:void 0}
`;m(As)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${ho["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ks=m.input`
    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}
    color: ${so.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${so["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${so["text-subtler"]};
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
`,zs=m.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${uo["width-010"]} ${uo.solid}
            ${so["border-focus"]};
        border-radius: ${bo.sm};
    }
`,js=m.div`
    overflow: hidden;
    border: ${uo["width-010"]} ${uo.solid} ${so.border};
    border-radius: ${bo.sm};
    background: ${so.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}

    ${go.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${fo["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${go.MaxWidth.xs} {
        width: calc(100vw - ${fo["xs-margin"]} * 2);
    }

    ${go.MaxWidth.xxs} {
        width: calc(100vw - ${fo["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${so["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Bs=m.div`
    background: transparent;
    padding: ${ho["spacing-8"]};
`;m.ul`
    list-style-type: none;
`,m.li`
    display: flex;
    align-items: flex-start;
    gap: ${ho["spacing-8"]};
    padding: ${ho["spacing-12"]} ${ho["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?p`
                background: ${so["bg-hover"]};
            `:e.$active?p`
                background: ${so["bg-hover-subtle"]};
            `:void 0}
`;const Ms=m(F)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${so["icon-selected"]};
`;m.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`;const Ts=m($)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${so["icon-selected"]};
`,Is=m(w)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${so["icon-primary-subtlest"]};
`,Ps=m.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Ys=m(zs)`
    cursor: pointer;
    overflow: hidden;
    color: ${so["text-primary"]};
    font-size: inherit;
`,Ls=m(Ys)`
    ${lo["body-baseline-semibold"]}
`,Rs=m(Ys)`
    ${lo["body-md-semibold"]}
    padding: ${ho["spacing-8"]} ${ho["spacing-8"]};
`,Ws=m.div`
    width: 100%;
    display: flex;
    padding: ${ho["spacing-12"]} ${ho[16]};
    align-items: center;
`,Ns=m(x)`
    margin-right: ${ho["spacing-4"]};
    color: ${so["icon-error"]};
    height: 1em;
    width: 1em;
`;function Hs(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}m(Es)`
    margin-right: ${ho["spacing-8"]};
    color: ${so.icon};
`,"function"==typeof SuppressedError&&SuppressedError;const Vs=m.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ho["spacing-32"]};
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

        ${({$highlight:e})=>e&&p`
                background-color: ${so["bg-hover-neutral"]};
            `}
    }
`,Us=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=Hs(e,["children","focusHighlight","focusOutline","type"]);return r(Vs,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),Zs=m.div`
    background: ${so["bg-strong"]};
    border-radius: ${bo.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}
`,qs=m.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${ho["spacing-8"]};
    padding: ${e=>"small"===e.$variant?p`
                  ${ho["spacing-8"]} ${ho["spacing-16"]}
              `:p`10px ${ho["spacing-16"]}`};
`,Ks=m(ks)`
    flex: 1;
`,Js=m(E)`
    color: ${so.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Xs=m(Us)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${ho["spacing-8"]};
    margin-left: -${ho["spacing-8"]};
    color: ${so.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Gs=g(((t,n)=>{var{value:i,variant:o,onClear:a}=t,s=Hs(t,["value","variant","onClear"]);return e(Zs,Object.assign({$variant:o},{children:[e(qs,Object.assign({$variant:o},{children:[r(Js,{"aria-hidden":!0}),r(Ks,Object.assign({ref:n,value:i,$variant:o},s))]})),i&&r(Xs,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a},{children:r(D,{"aria-hidden":!0})}))]}))})),Qs=m(zs)`
    display: flex;
    align-items: center;
    gap: ${ho["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${ho["spacing-16"]};

    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,el=m.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${co["duration-250"]} ${co["ease-default"]};

    svg {
        color: ${so.icon};
        height: 1em;
        width: 1em;
    }
`,rl=g((({children:t,disabled:n,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},d)=>e(Qs,Object.assign({ref:d,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l},{children:[t,!s&&r(el,Object.assign({$expanded:i,$variant:l},{children:r(_,{"aria-hidden":!0})}))]}))));m.button`
    padding: ${ho["spacing-8"]} ${ho["spacing-16"]};
    min-width: 4rem;
    border: ${uo["width-010"]} ${uo.solid} transparent;
    border-radius: ${bo.sm};
    transition: all ${co["duration-250"]} ${co["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${so.Primitive.white};
                    border-color: ${e.$buttonIsDanger?so["border-error-strong"]:so["border-primary"]};

                    color: ${e.$buttonIsDanger?so["text-error"]:so["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${so["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${so.bg};
                    border-color: ${so.border};

                    color: ${e.$buttonIsDanger?so["text-error"]:so["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${so["bg-hover-neutral"]};
                    }
                `;case"link":return p`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?so["text-error"]:so["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${so["bg-hover-neutral"]};
                    }
                `;case"disabled":return p`
                    background-color: ${so["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${so["text-disabled"]};
                `;default:return p`
                    background-color: ${e.$buttonIsDanger?so["bg-error-strong"]:so["bg-primary"]};

                    ${go.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${so["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?so["bg-error-strong-hover"]:so["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return p`
                    height: 2.5rem;
                    ${lo["body-md-semibold"]}

                    ${go.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return p`
                    height: 4rem;
                    ${lo["header-md-semibold"]}

                    ${go.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return p`
                    height: 3rem;
                    ${lo["header-xs-semibold"]}

                    ${go.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`;const tl=m(Es)`
    margin-right: 0.5rem;
`;var nl=Symbol.for("immer-nothing"),il=Symbol.for("immer-draftable"),ol=Symbol.for("immer-state"),al="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function sl(e,...r){if("production"!==process.env.NODE_ENV){const t=al[e],n="function"==typeof t?t.apply(null,r):t;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ll=Object.getPrototypeOf;function dl(e){return!!e&&!!e[ol]}function cl(e){return!!e&&(hl(e)||Array.isArray(e)||!!e[il]||!!e.constructor?.[il]||pl(e)||yl(e))}var ul=Object.prototype.constructor.toString();function hl(e){if(!e||"object"!=typeof e)return!1;const r=ll(e);if(null===r)return!0;const t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===ul}function bl(e,r){0===fl(e)?Reflect.ownKeys(e).forEach((t=>{r(t,e[t],e)})):e.forEach(((t,n)=>r(n,t,e)))}function fl(e){const r=e[ol];return r?r.type_:Array.isArray(e)?1:pl(e)?2:yl(e)?3:0}function gl(e,r){return 2===fl(e)?e.has(r):Object.prototype.hasOwnProperty.call(e,r)}function ml(e,r,t){const n=fl(e);2===n?e.set(r,t):3===n?e.add(t):e[r]=t}function pl(e){return e instanceof Map}function yl(e){return e instanceof Set}function vl(e){return e.copy_||e.base_}function xl(e,r){if(pl(e))return new Map(e);if(yl(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=hl(e);if(!0===r||"class_only"===r&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[ol];let t=Reflect.ownKeys(r);for(let n=0;n<t.length;n++){const i=t[n],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(ll(e),r)}{const r=ll(e);if(null!==r&&t)return{...e};const n=Object.create(r);return Object.assign(n,e)}}function wl(e,r=!1){return Fl(e)||dl(e)||!cl(e)||(fl(e)>1&&(e.set=e.add=e.clear=e.delete=$l),Object.freeze(e),r&&Object.entries(e).forEach((([e,r])=>wl(r,!0)))),e}function $l(){sl(2)}function Fl(e){return Object.isFrozen(e)}var Dl,El={};function _l(e){const r=El[e];return r||sl(0,e),r}function Cl(){return Dl}function Ol(e,r){r&&(_l("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=r)}function Sl(e){Al(e),e.drafts_.forEach(zl),e.drafts_=null}function Al(e){e===Dl&&(Dl=e.parent_)}function kl(e){return Dl={drafts_:[],parent_:Dl,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function zl(e){const r=e[ol];0===r.type_||1===r.type_?r.revoke_():r.revoked_=!0}function jl(e,r){r.unfinalizedDrafts_=r.drafts_.length;const t=r.drafts_[0];return void 0!==e&&e!==t?(t[ol].modified_&&(Sl(r),sl(4)),cl(e)&&(e=Bl(r,e),r.parent_||Tl(r,e)),r.patches_&&_l("Patches").generateReplacementPatches_(t[ol].base_,e,r.patches_,r.inversePatches_)):e=Bl(r,t,[]),Sl(r),r.patches_&&r.patchListener_(r.patches_,r.inversePatches_),e!==nl?e:void 0}function Bl(e,r,t){if(Fl(r))return r;const n=r[ol];if(!n)return bl(r,((i,o)=>Ml(e,n,r,i,o,t))),r;if(n.scope_!==e)return r;if(!n.modified_)return Tl(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const r=n.copy_;let i=r,o=!1;3===n.type_&&(i=new Set(r),r.clear(),o=!0),bl(i,((i,a)=>Ml(e,n,r,i,a,t,o))),Tl(e,r,!1),t&&e.patches_&&_l("Patches").generatePatches_(n,t,e.patches_,e.inversePatches_)}return n.copy_}function Ml(e,r,t,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===t&&sl(5),dl(i)){const a=Bl(e,i,o&&r&&3!==r.type_&&!gl(r.assigned_,n)?o.concat(n):void 0);if(ml(t,n,a),!dl(a))return;e.canAutoFreeze_=!1}else a&&t.add(i);if(cl(i)&&!Fl(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Bl(e,i),r&&r.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(t,n)||Tl(e,i)}}function Tl(e,r,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&wl(r,t)}var Il={get(e,r){if(r===ol)return e;const t=vl(e);if(!gl(t,r))return function(e,r,t){const n=Ll(r,t);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,t,r);const n=t[r];return e.finalized_||!cl(n)?n:n===Yl(e.base_,r)?(Wl(e),e.copy_[r]=Nl(n,e)):n},has:(e,r)=>r in vl(e),ownKeys:e=>Reflect.ownKeys(vl(e)),set(e,r,t){const n=Ll(vl(e),r);if(n?.set)return n.set.call(e.draft_,t),!0;if(!e.modified_){const n=Yl(vl(e),r),a=n?.[ol];if(a&&a.base_===t)return e.copy_[r]=t,e.assigned_[r]=!1,!0;if(((i=t)===(o=n)?0!==i||1/i==1/o:i!=i&&o!=o)&&(void 0!==t||gl(e.base_,r)))return!0;Wl(e),Rl(e)}var i,o;return e.copy_[r]===t&&(void 0!==t||r in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[r])||(e.copy_[r]=t,e.assigned_[r]=!0),!0},deleteProperty:(e,r)=>(void 0!==Yl(e.base_,r)||r in e.base_?(e.assigned_[r]=!1,Wl(e),Rl(e)):delete e.assigned_[r],e.copy_&&delete e.copy_[r],!0),getOwnPropertyDescriptor(e,r){const t=vl(e),n=Reflect.getOwnPropertyDescriptor(t,r);return n?{writable:!0,configurable:1!==e.type_||"length"!==r,enumerable:n.enumerable,value:t[r]}:n},defineProperty(){sl(11)},getPrototypeOf:e=>ll(e.base_),setPrototypeOf(){sl(12)}},Pl={};function Yl(e,r){const t=e[ol];return(t?vl(t):e)[r]}function Ll(e,r){if(!(r in e))return;let t=ll(e);for(;t;){const e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=ll(t)}}function Rl(e){e.modified_||(e.modified_=!0,e.parent_&&Rl(e.parent_))}function Wl(e){e.copy_||(e.copy_=xl(e.base_,e.scope_.immer_.useStrictShallowCopy_))}bl(Il,((e,r)=>{Pl[e]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),Pl.deleteProperty=function(e,r){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(r))&&sl(13),Pl.set.call(this,e,r,void 0)},Pl.set=function(e,r,t){return"production"!==process.env.NODE_ENV&&"length"!==r&&isNaN(parseInt(r))&&sl(14),Il.set.call(this,e[0],r,t,e[0])};function Nl(e,r){const t=pl(e)?_l("MapSet").proxyMap_(e,r):yl(e)?_l("MapSet").proxySet_(e,r):function(e,r){const t=Array.isArray(e),n={type_:t?1:0,scope_:r?r.scope_:Cl(),modified_:!1,finalized_:!1,assigned_:{},parent_:r,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=Il;t&&(i=[n],o=Pl);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,r);return(r?r.scope_:Cl()).drafts_.push(t),t}function Hl(e){if(!cl(e)||Fl(e))return e;const r=e[ol];let t;if(r){if(!r.modified_)return r.base_;r.finalized_=!0,t=xl(e,r.scope_.immer_.useStrictShallowCopy_)}else t=xl(e,!0);return bl(t,((e,r)=>{ml(t,e,Hl(r))})),r&&(r.finalized_=!1),t}var Vl=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,r,t)=>{if("function"==typeof e&&"function"!=typeof r){const t=r;r=e;const n=this;return function(e=t,...i){return n.produce(e,(e=>r.call(this,e,...i)))}}let n;if("function"!=typeof r&&sl(6),void 0!==t&&"function"!=typeof t&&sl(7),cl(e)){const i=kl(this),o=Nl(e,void 0);let a=!0;try{n=r(o),a=!1}finally{a?Sl(i):Al(i)}return Ol(i,t),jl(n,i)}if(!e||"object"!=typeof e){if(n=r(e),void 0===n&&(n=e),n===nl&&(n=void 0),this.autoFreeze_&&wl(n,!0),t){const r=[],i=[];_l("Patches").generateReplacementPatches_(e,n,r,i),t(r,i)}return n}sl(1,e)},this.produceWithPatches=(e,r)=>{if("function"==typeof e)return(r,...t)=>this.produceWithPatches(r,(r=>e(r,...t)));let t,n;return[this.produce(e,r,((e,r)=>{t=e,n=r})),t,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){cl(e)||sl(8),dl(e)&&(e=function(e){dl(e)||sl(10,e);return Hl(e)}(e));const r=kl(this),t=Nl(e,void 0);return t[ol].isManual_=!0,Al(r),t}finishDraft(e,r){const t=e&&e[ol];t&&t.isManual_||sl(9);const{scope_:n}=t;return Ol(n,r),jl(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,r){let t;for(t=r.length-1;t>=0;t--){const n=r[t];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}t>-1&&(r=r.slice(t+1));const n=_l("Patches").applyPatches_;return dl(e)?n(e,r):this.produce(e,(e=>n(e,r)))}},Ul=Vl.produce;Vl.produceWithPatches.bind(Vl),Vl.setAutoFreeze.bind(Vl),Vl.setUseStrictShallowCopy.bind(Vl),Vl.applyPatches.bind(Vl),Vl.createDraft.bind(Vl),Vl.finishDraft.bind(Vl);const Zl=(e,r,t)=>Ul(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n];if(i.checked=!!r.find((e=>Ka(e,i.keyPath))),i.hasSubItems&&t&&!0!==i.checked){const r=i.subItemIndexes.map((r=>e[r])),t=r.every((e=>!0===e.checked)),n=r.some((e=>!1!==e.checked));t?i.checked=!0:n&&(i.checked="mixed")}}})),ql=(e,r)=>{const[t,...n]=r;if(Vr(e)||Vr(t))return;const i=e.find((e=>e.key===t));return i&&n.length?ql(i.subItems,n):i},Kl=m.li`
    display: ${e=>e.$visible?"flex":"none"};
`,Jl=m.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${ho["spacing-8"]};
    padding: ${ho["spacing-12"]} ${ho["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&p`
            background: ${so["bg-hover"]};
        `}
`,Xl=m.div`
    height: 1px;
    width: calc((1lh + ${ho["spacing-8"]}) * ${e=>e.$level});
`,Gl=m.div`
    width: 1lh;
    height: 1lh;
    color: ${so["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${co["duration-350"]}
            ${co["ease-standard"]};

        ${e=>{if(e.$expanded)return p`
                    transform: rotate(90deg);
                `}}
    }
`,Ql=m.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${ho["spacing-8"]};
`,ed=m.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":ho["spacing-16"]};

    display: flex;
    justify-content: center;
`,rd=m(S)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${so["icon-selected"]};
`,td=({listItems:t,multiSelect:n,selectedKeyPaths:i,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:d=2,variant:c="default",listboxId:h,width:b,mode:g="default",selectableCategory:m,onSelectItem:p,onSelectAll:y,onRetry:v,enableSearch:x,hideNoResultsDisplay:w,searchPlaceholder:$="Search",onSearch:F})=>{const D=n||m,[E,_]=a(""),O=E.toLowerCase().trim(),[S,A]=a(!1),k=o(),z=o(),j=o([]),B=o(),M=(()=>{const[e,r]=a(!1);return u((()=>{r(!0)}),[]),e})(),[T,I]=a([]),[P,Y]=a([]),L=f((()=>{let e=0;for(const r of T)r.level>e&&(e=r.level);return e}),[T]),[R,W]=a(0),N=e=>{const r=e.target.value;_(r),""===r?A(!1):r.trim().length>=3&&A(!0),null==F||F()},H=()=>{_(""),A(!1),B.current.focus(),null==F||F()},V=()=>{null==v||v()},U=()=>{if(0===i.length){const e=[],r=[];T.forEach((t=>{t.hasSubItems||(e.push(t.keyPath),r.push(t))})),null==y||y(e,r)}else null==y||y([],[])},Z=ys(((e,r)=>((e,r,t,n,i)=>{const o=[],a=(e,s)=>{var l,d;const c=[],u=!!e.find((e=>{var r;return null===(r=e.subItems)||void 0===r?void 0:r.length}));for(let h=0;h<e.length;h++){const b=e[h],f=s?s.level+1:0,g={item:b,index:o.length,indexInParent:h,parentSetSize:e.length,keyPath:s?[...s.keyPath,b.key]:[b.key],parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:f,visible:0===f||i||s.expanded,expanded:i,checked:!1,hasSubItems:!!(null===(l=b.subItems)||void 0===l?void 0:l.length),subItemIndexes:[],hasNestedSiblings:u,matched:!!n&&-1!==b.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(g.checked=!!r.find((e=>Ka(e,g.keyPath))),c.push(g),o.push(g),null===(d=b.subItems)||void 0===d?void 0:d.length){const e=a(b.subItems,g);if(t&&!0!==g.checked){const r=e.every((e=>!0===e.checked)),t=e.some((e=>!1!==e.checked));r?g.checked=!0:t&&(g.checked="mixed")}g.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),g.subItemIndexes=e.map((e=>e.index))}}return c};return a(e,void 0),o})(e,i,n,O,r))),q=ys((e=>{return i.length?(r=Z(e,!1),Ul(r,(e=>{const r=e.filter((e=>!0===e.checked));for(const t of r){let r=t.parentIndex;for(;r>=0;){const t=e[r];t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0;r=t.parentIndex}}}))):(e=>Ul(e,(e=>{const r=e.findIndex((e=>e.hasSubItems));if(r<0)return;let t=r,n=0;for(let r=t;r<e.length;r++){const i=e[r].keyPath.length;if(i>n)n=i;else if(i<n)break;t=r,e[r].visible=!0,e[r].expanded=!0}for(let r=0;r<e.length;r++){const n=e[r],i=n.keyPath.slice(0,-1),o=e[t].keyPath.slice(0,i.length);Ka(i,o)&&(n.visible=!0)}return e})))(Z(e,!1));var r})),K=ys((e=>{const r=e=>{const t=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(O))t.push(n);else if(n.subItems){const e=r(n.subItems);if(e.length>0){t.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return t};return r(e)})),J=ys((()=>{I((e=>Zl(e,i,n))),S&&Y((e=>Zl(e,i,n)))})),X=(e,r)=>{const t=((e,r,t)=>Ul(e,(e=>{e[r].expanded=t;const n=e[r].keyPath;for(let i=r+1;i<e.length;i++){const r=e[i],o=e[r.parentIndex],a=r.keyPath.slice(0,n.length);if(!Ka(n,a))break;r.visible=t&&o.expanded&&o.visible}})))(S?P:T,e,r);W(e),S?Y(t):I(t)};((e,r,t="window",n)=>{const i=o();u((()=>{i.current=r}),[r]),u((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const o=e=>i.current(e);return r.addEventListener(e,o,n),()=>{r.removeEventListener(e,o,n)}}),[e,t])})("keydown",(e=>{const r=S?P:T;switch(e.code){case"ArrowDown":{e.preventDefault();const t=((e,r,t)=>{for(let n=t;n<e.length;n++)if(r(e[n]))return n;return-1})(r,(e=>e.visible),R+1);t>=0&&(W(t),j.current[t].focus());break}case"ArrowUp":{e.preventDefault();const t=((e,r,t)=>{for(let n=t;n>=0;n--)if(r(e[n]))return n;return-1})(r,(e=>e.visible),R-1);t>=0?(W(t),j.current[t].focus()):0===R&&B.current&&(B.current.focus(),W(-1));break}case"ArrowRight":e.preventDefault(),X(R,!0);break;case"ArrowLeft":e.preventDefault(),X(R,!1);break;case"Space":if(document.activeElement===j.current[R]){e.preventDefault();const t=r[R];if(t.hasSubItems&&!D)return;null==p||p(t)}}})),u((()=>{let e;"default"===g?e=q(t):"expand"===g?e=Z(t,!0):"collapse"===g&&(e=Z(t,!1)),I(e)}),[Z,q,t,g]),u((()=>{J()}),[n,i,J]),u((()=>{if(S&&E.trim().length>=3){const e=K(t),r=(e=>Ul(e,(e=>{for(const r of e)if(r.matched&&(r.visible=!0),r.hasMatchedSubItems){r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0}})))(Z(e,!1));Y(r)}}),[K,Z,t,S,E]),u((()=>{M||(B.current?(W(-1),setTimeout((()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.focus()}),200)):j.current[R]?setTimeout((()=>{var e;return null===(e=j.current[R])||void 0===e?void 0:e.focus()}),200):(W(0),setTimeout((()=>{var e;return null===(e=j.current[0])||void 0===e?void 0:e.focus()}),200)))}),[R,M,W]);const G=()=>{if(x&&"success"===s)return r(Gs,{ref:B,onChange:N,value:E,placeholder:$,"data-testid":"search-input","aria-label":"Enter text to search",onClear:H,variant:c})},Q=()=>{if(n&&!S&&T.length>0&&"success"===s)return r(Ps,{children:r(Rs,Object.assign({onClick:U,type:"button",$variant:c},{children:0===i.length?"Select all":"Clear all"}))})},ee=()=>{if(!w&&S&&0===P.length&&"success"===s)return e(Ws,Object.assign({"data-testid":"list-no-results"},{children:[r(Ns,{"data-testid":"no-result-icon"}),"No results found."]}))},re=()=>{if(v&&"loading"===s)return e(Ws,Object.assign({"data-testid":"list-loading"},{children:[r(tl,{}),"Loading..."]}))},te=()=>{if(v&&"fail"===s)return e(Ws,Object.assign({"data-testid":"list-fail"},{children:[r(Ns,{"data-testid":"load-error-icon"}),"Failed to load. ",r(Ls,Object.assign({onClick:V,type:"button",$variant:c},{children:"Try again."}))]}))},ne=e=>{if(n)switch(e.checked){case"mixed":return r(rd,{"aria-hidden":!0});case!0:return r(Ts,{"aria-hidden":!0});default:return r(Is,{"aria-hidden":!0})}if(!e.hasSubItems)return r(ed,Object.assign({$hasNestedSiblings:e.hasNestedSiblings||0===e.level},{children:e.checked&&r(Ms,{"aria-hidden":!0})}))},ie=()=>(S?P:T).map(((t,i)=>{const{item:o,level:a,visible:s,expanded:c,keyPath:u,checked:h,hasSubItems:b,indexInParent:f,parentSetSize:g}=t,m=R===i,y=b&&!D;return e(Kl,Object.assign({$visible:s},{children:[L>0&&r(Xl,{$level:a}),L>0&&!b&&n&&r(Ql,{}),e(Jl,Object.assign({"aria-checked":h,"aria-selected":!!h,"aria-expanded":b?c:void 0,"aria-level":a+1,"aria-posinset":f+1,"aria-setsize":g,"data-testid":"list-item",onClick:e=>{var r;e.stopPropagation(),y?X(i,!c):(W(r=i),null==p||p((S?P:T)[r]))},onMouseEnter:()=>{W(i)},ref:e=>j.current[i]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:y},{children:[b&&r(Gl,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),X(i,!c)},$expanded:c},{children:r(C,{})})),ne(t),r(Do,{bold:b,searchTerm:S?O:void 0,label:o.label,selected:!!h,truncationType:l,maxLines:d})]}))]}),`[${u.join("---")}]`)}));return r(js,Object.assign({"data-testid":"dropdown-container",ref:k,$width:b,$variant:c},{children:e(Bs,Object.assign({"data-testid":"nested-dropdown-list"},{children:[G(),Q(),ee(),re(),te(),r("div",Object.assign({"aria-multiselectable":n,id:h,ref:z,role:"tree"},{children:ie()}))]}))}))},nd=e=>"small"===e?2.5:3;m.div`
    position: relative;
    width: 100%;
    ${e=>{const r=nd(e.$variant);return p`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const id=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${ho["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>nd(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${bo.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${so["border-focus"]};
    }
`,od=m.button`
    ${id}
    cursor: pointer;
`;m.div`
    ${id}
`;const ad=v`
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
    border: ${uo["width-010"]} ${uo.solid} ${so.border};
    border-radius: ${bo.sm};
    background: ${so.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${so["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${so["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${ad} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${so["bg-disabled"]};

                ${od} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${so.border};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${od} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?p`
                border-color: ${so["border-error"]};

                :focus-within {
                    border-color: ${so["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${so["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,m.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${co["duration-250"]} ${co["ease-default"]};
    margin-left: ${ho["spacing-16"]};
`,m(_)`
    color: ${so.icon};
`,m.div`
    height: 1px;
    background: ${so.border};
    margin: 0 ${ho["spacing-8"]};
`;const sd=m.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return p`
                color: ${so["text-disabled"]};
            `}}
`,ld=m.div`
    ${e=>"small"===e.$variant?lo["body-md-regular"]:lo["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return p`
                    ${po(1)}
                `}}
    overflow: hidden;
`,dd=m(ld)`
    color: ${so["text-subtler"]};
`;var cd;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(cd||(cd={}));const ud=m.div`
    display: flex;
    flex-direction: column;
`,hd=e=>"right"===e?"bottom-end":"bottom-start",bd=({enabled:n,isOpen:i,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:h,customZIndex:b,clickToToggle:f=!1,offset:g=0,alignment:m="left",fitAvailableHeight:p})=>{var v;const x=y(),w=fo["sm-max"]({theme:x}),$=o(null),F=o(null),{width:D}=Lt({targetRef:$,handleHeight:!1}),E={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:_,floatingStyles:C,context:O}=k({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!i?null==s||s():!e&&i&&(null==l||l(t))},whileElementsMounted:z,placement:hd(m),middleware:[j(g),B(),M({limiter:T()}),I({apply({availableHeight:e}){F.current&&Object.assign(F.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),E]}),S=(()=>{const[e,r]=a(void 0),t=A();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(cd.Change,e),t.events.emit(cd.Ready),()=>t.events.off(cd.Change,e)}),[t]),e})(),{isMounted:H,styles:V}=P(O,{initial:{opacity:0},open:{opacity:1},duration:300}),U=Y(O,{enabled:n,toggle:f}),Z=L(O,{enabled:n}),{getReferenceProps:q,getFloatingProps:K}=R([U,Z]);return e(t,{children:[r("div",Object.assign({ref:e=>{$.current=e,_.setReference(e)}},q(),{children:c()})),H&&r(W,{children:r(N,Object.assign({context:O,modal:!1,initialFocus:F,returnFocus:!1},{children:r("div",Object.assign({ref:_.setFloating,style:Object.assign(Object.assign({},C),{zIndex:null!==(v=null!=b?b:S)&&void 0!==v?v:50})},K(),{children:r(ud,Object.assign({ref:F,style:Object.assign({},V),inert:V.opacity<1?"":void 0},{children:h({elementWidth:D})}))}))}))})]})},fd=({placeholder:e="Select",options:t,disabled:n,error:i,className:s,"data-testid":l,id:d,selectedKeyPath:c,mode:h,valueToStringFunction:b,enableSearch:f,searchPlaceholder:g,selectableCategory:m,hideNoResultsDisplay:p,readOnly:y,onBlur:v,onSearch:x,onSelectOption:w,onShowOptions:$,onHideOptions:F,onRetry:D,optionsLoadState:E="success",optionTruncationType:_="end",variant:C,alignment:O,dropdownZIndex:S})=>{const A=t,[k,z]=a(c?[c]:[]),[j,B]=a(),[M,T]=a(!1),[I,P]=a(!1),[Y]=a((()=>ps.generate())),L=o(),R=o(),W=o();u((()=>{z(c?[c]:[]);const e=ql(A,c||[]);B(null!=e?e:void 0)}),[c,A]);const N=e=>{var r;const{keyPath:t,item:{label:n,value:i}}=e;z([t]),B({label:n,value:i}),T(!1),q(!1),null===(r=R.current)||void 0===r||r.focus(),null==w||w(t,i)},H=()=>{I||M||P(!0)},V=e=>{!I||M||L.current.contains(e.relatedTarget)||(P(!1),null==v||v())},U=()=>{const{label:e,value:r}=j;return b?b(r)||r.toString():e},Z=e=>{if("middle"===_){let r=0;return W&&W.current&&(r=W.current.getBoundingClientRect().width),mo.truncateOneLine(e,r,120,6)}return e},q=e=>{!e&&F&&F(),e&&$&&$()};return r(bd,{enabled:!y&&!n,isOpen:M,renderElement:()=>r(As,Object.assign({className:s,"data-testid":l,id:d,ref:L,tabIndex:-1,onFocus:H,onBlur:V,$focused:I,$disabled:n,$readOnly:y,$error:i},{children:r(rl,Object.assign({ref:R,disabled:n,expanded:M,listboxId:Y,popupRole:"tree",readOnly:y,variant:C},{children:r(sd,Object.assign({ref:W,$disabled:n},{children:Vr(j)?r(dd,Object.assign({truncateType:_},{children:e})):r(ld,Object.assign({truncateType:_},{children:Z(U())}))}))}))})),renderDropdown:({elementWidth:e})=>r(td,{listboxId:Y,listItems:A,selectedKeyPaths:k,selectableCategory:m,itemsLoadState:E,itemTruncationType:_,enableSearch:f,searchPlaceholder:g,hideNoResultsDisplay:p,onSelectItem:N,onRetry:D,onSearch:x,variant:C,mode:h,width:e}),onOpen:()=>{T(!0),q(!0),P(!0)},onClose:e=>{T(!1),q(!1),"click"!==e&&(P(!1),null==v||v())},onDismiss:()=>{R.current.focus(),T(!1),q(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:S})};export{fd as InputNestedSelect};
//# sourceMappingURL=index.js.map
