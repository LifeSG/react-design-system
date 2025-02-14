import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,useCallback as b,useMemo as f,forwardRef as g}from"react";import m,{css as p,useTheme as y,keyframes as v}from"styled-components";import{ExclamationCircleFillIcon as x}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as w}from"@lifesg/react-icons/square";import{SquareTickFillIcon as $}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as F}from"@lifesg/react-icons/tick";import{CrossIcon as D}from"@lifesg/react-icons/cross";import{MagnifierIcon as E}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as _}from"@lifesg/react-icons/chevron-down";import{CaretRightIcon as C}from"@lifesg/react-icons/caret-right";import{findDOMNode as O}from"react-dom";import{MinusSquareFillIcon as k}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as S,useFloating as A,autoUpdate as z,offset as j,flip as B,shift as M,limitShift as T,size as I,useTransitionStyles as P,useClick as Y,useDismiss as L,useInteractions as R,FloatingPortal as W,FloatingFocusManager as N}from"@floating-ui/react";var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function V(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U=Object.prototype;var Z=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||U)};var q=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),K=Z,J=q,X=Object.prototype.hasOwnProperty;var G=function(e){if(!K(e))return J(e);var r=[];for(var t in Object(e))X.call(e,t)&&"constructor"!=t&&r.push(t);return r},Q="object"==typeof H&&H&&H.Object===Object&&H,ee=Q,re="object"==typeof self&&self&&self.Object===Object&&self,te=ee||re||Function("return this")(),ne=te.Symbol,ie=ne,oe=Object.prototype,ae=oe.hasOwnProperty,se=oe.toString,le=ie?ie.toStringTag:void 0;var de=function(e){var r=ae.call(e,le),t=e[le];try{e[le]=void 0;var n=!0}catch(e){}var i=se.call(e);return n&&(r?e[le]=t:delete e[le]),i},ce=Object.prototype.toString;var ue=de,he=function(e){return ce.call(e)},be=ne?ne.toStringTag:void 0;var fe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":be&&be in Object(e)?ue(e):he(e)};var ge=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},me=fe,pe=ge;var ye,ve=function(e){if(!pe(e))return!1;var r=me(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},xe=te["__core-js_shared__"],we=(ye=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||""))?"Symbol(src)_1."+ye:"";var $e=function(e){return!!we&&we in e},Fe=Function.prototype.toString;var De=function(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ee=ve,_e=$e,Ce=ge,Oe=De,ke=/^\[object .+?Constructor\]$/,Se=Function.prototype,Ae=Object.prototype,ze=Se.toString,je=Ae.hasOwnProperty,Be=RegExp("^"+ze.call(je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e,r){return null==e?void 0:e[r]},Te=function(e){return!(!Ce(e)||_e(e))&&(Ee(e)?Be:ke).test(Oe(e))},Ie=Me;var Pe=function(e,r){var t=Ie(e,r);return Te(t)?t:void 0},Ye=Pe(te,"DataView"),Le=Pe(te,"Map"),Re=Ye,We=Le,Ne=Pe(te,"Promise"),He=Pe(te,"Set"),Ve=Pe(te,"WeakMap"),Ue=fe,Ze=De,qe="[object Map]",Ke="[object Promise]",Je="[object Set]",Xe="[object WeakMap]",Ge="[object DataView]",Qe=Ze(Re),er=Ze(We),rr=Ze(Ne),tr=Ze(He),nr=Ze(Ve),ir=Ue;(Re&&ir(new Re(new ArrayBuffer(1)))!=Ge||We&&ir(new We)!=qe||Ne&&ir(Ne.resolve())!=Ke||He&&ir(new He)!=Je||Ve&&ir(new Ve)!=Xe)&&(ir=function(e){var r=Ue(e),t="[object Object]"==r?e.constructor:void 0,n=t?Ze(t):"";if(n)switch(n){case Qe:return Ge;case er:return qe;case rr:return Ke;case tr:return Je;case nr:return Xe}return r});var or=ir;var ar=function(e){return null!=e&&"object"==typeof e},sr=fe,lr=ar;var dr=function(e){return lr(e)&&"[object Arguments]"==sr(e)},cr=ar,ur=Object.prototype,hr=ur.hasOwnProperty,br=ur.propertyIsEnumerable,fr=dr(function(){return arguments}())?dr:function(e){return cr(e)&&hr.call(e,"callee")&&!br.call(e,"callee")},gr=Array.isArray;var mr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},pr=ve,yr=mr;var vr=function(e){return null!=e&&yr(e.length)&&!pr(e)},xr={exports:{}};var wr=function(){return!1};!function(e,r){var t=te,n=wr,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(xr,xr.exports);var $r=xr.exports,Fr=fe,Dr=mr,Er=ar,_r={};_r["[object Float32Array]"]=_r["[object Float64Array]"]=_r["[object Int8Array]"]=_r["[object Int16Array]"]=_r["[object Int32Array]"]=_r["[object Uint8Array]"]=_r["[object Uint8ClampedArray]"]=_r["[object Uint16Array]"]=_r["[object Uint32Array]"]=!0,_r["[object Arguments]"]=_r["[object Array]"]=_r["[object ArrayBuffer]"]=_r["[object Boolean]"]=_r["[object DataView]"]=_r["[object Date]"]=_r["[object Error]"]=_r["[object Function]"]=_r["[object Map]"]=_r["[object Number]"]=_r["[object Object]"]=_r["[object RegExp]"]=_r["[object Set]"]=_r["[object String]"]=_r["[object WeakMap]"]=!1;var Cr=function(e){return Er(e)&&Dr(e.length)&&!!_r[Fr(e)]};var Or=function(e){return function(r){return e(r)}},kr={exports:{}};!function(e,r){var t=Q,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&t.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(kr,kr.exports);var Sr=kr.exports,Ar=Cr,zr=Or,jr=Sr&&Sr.isTypedArray,Br=jr?zr(jr):Ar,Mr=G,Tr=or,Ir=fr,Pr=gr,Yr=vr,Lr=$r,Rr=Z,Wr=Br,Nr=Object.prototype.hasOwnProperty;var Hr=function(e){if(null==e)return!0;if(Yr(e)&&(Pr(e)||"string"==typeof e||"function"==typeof e.splice||Lr(e)||Wr(e)||Ir(e)))return!e.length;var r=Tr(e);if("[object Map]"==r||"[object Set]"==r)return!e.size;if(Rr(e))return!Mr(e).length;for(var t in e)if(Nr.call(e,t))return!1;return!0},Vr=V(Hr);var Ur=function(){this.__data__=[],this.size=0};var Zr=function(e,r){return e===r||e!=e&&r!=r},qr=Zr;var Kr=function(e,r){for(var t=e.length;t--;)if(qr(e[t][0],r))return t;return-1},Jr=Kr,Xr=Array.prototype.splice;var Gr=function(e){var r=this.__data__,t=Jr(r,e);return!(t<0)&&(t==r.length-1?r.pop():Xr.call(r,t,1),--this.size,!0)},Qr=Kr;var et=function(e){var r=this.__data__,t=Qr(r,e);return t<0?void 0:r[t][1]},rt=Kr;var tt=function(e){return rt(this.__data__,e)>-1},nt=Kr;var it=function(e,r){var t=this.__data__,n=nt(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},ot=Ur,at=Gr,st=et,lt=tt,dt=it;function ct(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ct.prototype.clear=ot,ct.prototype.delete=at,ct.prototype.get=st,ct.prototype.has=lt,ct.prototype.set=dt;var ut=ct,ht=ut;var bt=function(){this.__data__=new ht,this.size=0};var ft=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var gt=function(e){return this.__data__.get(e)};var mt=function(e){return this.__data__.has(e)},pt=Pe(Object,"create"),yt=pt;var vt=function(){this.__data__=yt?yt(null):{},this.size=0};var xt=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},wt=pt,$t=Object.prototype.hasOwnProperty;var Ft=function(e){var r=this.__data__;if(wt){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return $t.call(r,e)?r[e]:void 0},Dt=pt,Et=Object.prototype.hasOwnProperty;var _t=function(e){var r=this.__data__;return Dt?void 0!==r[e]:Et.call(r,e)},Ct=pt;var Ot=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ct&&void 0===r?"__lodash_hash_undefined__":r,this},kt=vt,St=xt,At=Ft,zt=_t,jt=Ot;function Bt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Bt.prototype.clear=kt,Bt.prototype.delete=St,Bt.prototype.get=At,Bt.prototype.has=zt,Bt.prototype.set=jt;var Mt=Bt,Tt=ut,It=Le;var Pt=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Yt=function(e,r){var t=e.__data__;return Pt(r)?t["string"==typeof r?"string":"hash"]:t.map},Lt=Yt;var Rt=function(e){var r=Lt(this,e).delete(e);return this.size-=r?1:0,r},Wt=Yt;var Nt=function(e){return Wt(this,e).get(e)},Ht=Yt;var Vt=function(e){return Ht(this,e).has(e)},Ut=Yt;var Zt=function(e,r){var t=Ut(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},qt=function(){this.size=0,this.__data__={hash:new Mt,map:new(It||Tt),string:new Mt}},Kt=Rt,Jt=Nt,Xt=Vt,Gt=Zt;function Qt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Qt.prototype.clear=qt,Qt.prototype.delete=Kt,Qt.prototype.get=Jt,Qt.prototype.has=Xt,Qt.prototype.set=Gt;var en=Qt,rn=ut,tn=Le,nn=en;var on=function(e,r){var t=this.__data__;if(t instanceof rn){var n=t.__data__;if(!tn||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new nn(n)}return t.set(e,r),this.size=t.size,this},an=ut,sn=bt,ln=ft,dn=gt,cn=mt,un=on;function hn(e){var r=this.__data__=new an(e);this.size=r.size}hn.prototype.clear=sn,hn.prototype.delete=ln,hn.prototype.get=dn,hn.prototype.has=cn,hn.prototype.set=un;var bn=hn;var fn=en,gn=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},mn=function(e){return this.__data__.has(e)};function pn(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new fn;++r<t;)this.add(e[r])}pn.prototype.add=pn.prototype.push=gn,pn.prototype.has=mn;var yn=function(e,r){return e.has(r)},vn=pn,xn=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},wn=yn;var $n=function(e,r,t,n,i,o){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=o.get(e),c=o.get(r);if(d&&c)return d==r&&c==e;var u=-1,h=!0,b=2&t?new vn:void 0;for(o.set(e,r),o.set(r,e);++u<s;){var f=e[u],g=r[u];if(n)var m=a?n(g,f,u,r,e,o):n(f,g,u,e,r,o);if(void 0!==m){if(m)continue;h=!1;break}if(b){if(!xn(r,(function(e,r){if(!wn(b,r)&&(f===e||i(f,e,t,n,o)))return b.push(r)}))){h=!1;break}}else if(f!==g&&!i(f,g,t,n,o)){h=!1;break}}return o.delete(e),o.delete(r),h};var Fn=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Dn=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},En=te.Uint8Array,_n=Zr,Cn=$n,On=Fn,kn=Dn,Sn=ne?ne.prototype:void 0,An=Sn?Sn.valueOf:void 0;var zn=function(e,r,t,n,i,o,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!o(new En(e),new En(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return _n(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=On;case"[object Set]":var l=1&n;if(s||(s=kn),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=Cn(s(e),s(r),n,i,o,a);return a.delete(e),c;case"[object Symbol]":if(An)return An.call(e)==An.call(r)}return!1};var jn=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},Bn=jn,Mn=gr;var Tn=function(e,r,t){var n=r(e);return Mn(e)?n:Bn(n,t(e))};var In=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,o=[];++t<n;){var a=e[t];r(a,t,e)&&(o[i++]=a)}return o},Pn=function(){return[]},Yn=Object.prototype.propertyIsEnumerable,Ln=Object.getOwnPropertySymbols,Rn=Ln?function(e){return null==e?[]:(e=Object(e),In(Ln(e),(function(r){return Yn.call(e,r)})))}:Pn;var Wn=/^(?:0|[1-9]\d*)$/;var Nn=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},Hn=fr,Vn=gr,Un=$r,Zn=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&Wn.test(e))&&e>-1&&e%1==0&&e<r},qn=Br,Kn=Object.prototype.hasOwnProperty;var Jn=function(e,r){var t=Vn(e),n=!t&&Hn(e),i=!t&&!n&&Un(e),o=!t&&!n&&!i&&qn(e),a=t||n||i||o,s=a?Nn(e.length,String):[],l=s.length;for(var d in e)!r&&!Kn.call(e,d)||a&&("length"==d||i&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Zn(d,l))||s.push(d);return s},Xn=Jn,Gn=G,Qn=vr;var ei=Tn,ri=Rn,ti=function(e){return Qn(e)?Xn(e):Gn(e)};var ni=function(e){return ei(e,ti,ri)},ii=Object.prototype.hasOwnProperty;var oi=function(e,r,t,n,i,o){var a=1&t,s=ni(e),l=s.length;if(l!=ni(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:ii.call(r,c)))return!1}var u=o.get(e),h=o.get(r);if(u&&h)return u==r&&h==e;var b=!0;o.set(e,r),o.set(r,e);for(var f=a;++d<l;){var g=e[c=s[d]],m=r[c];if(n)var p=a?n(m,g,c,r,e,o):n(g,m,c,e,r,o);if(!(void 0===p?g===m||i(g,m,t,n,o):p)){b=!1;break}f||(f="constructor"==c)}if(b&&!f){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(b=!1)}return o.delete(e),o.delete(r),b},ai=bn,si=$n,li=zn,di=oi,ci=or,ui=gr,hi=$r,bi=Br,fi="[object Arguments]",gi="[object Array]",mi="[object Object]",pi=Object.prototype.hasOwnProperty;var yi=function(e,r,t,n,i,o){var a=ui(e),s=ui(r),l=a?gi:ci(e),d=s?gi:ci(r),c=(l=l==fi?mi:l)==mi,u=(d=d==fi?mi:d)==mi,h=l==d;if(h&&hi(e)){if(!hi(r))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new ai),a||bi(e)?si(e,r,t,n,i,o):li(e,r,l,t,n,i,o);if(!(1&t)){var b=c&&pi.call(e,"__wrapped__"),f=u&&pi.call(r,"__wrapped__");if(b||f){var g=b?e.value():e,m=f?r.value():r;return o||(o=new ai),i(g,m,t,n,o)}}return!!h&&(o||(o=new ai),di(e,r,t,n,i,o))},vi=ar;var xi=function e(r,t,n,i,o){return r===t||(null==r||null==t||!vi(r)&&!vi(t)?r!=r&&t!=t:yi(r,t,n,i,e,o))},wi=xi;var $i=V((function(e,r){return wi(e,r)})),Fi=function(e,r){return Fi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Fi(e,r)};var Di=function(){return Di=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},Di.apply(this,arguments)};var Ei="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var _i=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Ci="object"==typeof Ei&&Ei&&Ei.Object===Object&&Ei,Oi="object"==typeof self&&self&&self.Object===Object&&self,ki=Ci||Oi||Function("return this")(),Si=ki,Ai=function(){return Si.Date.now()},zi=/\s/;var ji=function(e){for(var r=e.length;r--&&zi.test(e.charAt(r)););return r},Bi=/^\s+/;var Mi=function(e){return e?e.slice(0,ji(e)+1).replace(Bi,""):e},Ti=ki.Symbol,Ii=Ti,Pi=Object.prototype,Yi=Pi.hasOwnProperty,Li=Pi.toString,Ri=Ii?Ii.toStringTag:void 0;var Wi=function(e){var r=Yi.call(e,Ri),t=e[Ri];try{e[Ri]=void 0;var n=!0}catch(e){}var i=Li.call(e);return n&&(r?e[Ri]=t:delete e[Ri]),i},Ni=Object.prototype.toString;var Hi=Wi,Vi=function(e){return Ni.call(e)},Ui=Ti?Ti.toStringTag:void 0;var Zi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ui&&Ui in Object(e)?Hi(e):Vi(e)},qi=function(e){return null!=e&&"object"==typeof e};var Ki=Mi,Ji=_i,Xi=function(e){return"symbol"==typeof e||qi(e)&&"[object Symbol]"==Zi(e)},Gi=/^[-+]0x[0-9a-f]+$/i,Qi=/^0b[01]+$/i,eo=/^0o[0-7]+$/i,ro=parseInt;var to=_i,no=Ai,io=function(e){if("number"==typeof e)return e;if(Xi(e))return NaN;if(Ji(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Ji(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Ki(e);var t=Qi.test(e);return t||eo.test(e)?ro(e.slice(2),t?2:8):Gi.test(e)?NaN:+e},oo=Math.max,ao=Math.min;var so=function(e,r,t){var n,i,o,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,o=i;return n=i=void 0,d=r,a=e.apply(o,t)}function f(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function g(){var e=no();if(f(e))return m(e);s=setTimeout(g,function(e){var t=r-(e-l);return u?ao(t,o-(e-d)):t}(e))}function m(e){return s=void 0,h&&n?b(e):(n=i=void 0,a)}function p(){var e=no(),t=f(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(g,r),c?b(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,r),b(l)}return void 0===s&&(s=setTimeout(g,r)),a}return r=io(r)||0,to(t)&&(c=!!t.leading,o=(u="maxWait"in t)?oo(io(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},p.flush=function(){return void 0===s?a:m(no())},p},lo=so,co=_i;var uo=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return co(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),lo(e,r,{leading:n,maxWait:r,trailing:i})},ho=function(e,r,t,n){switch(r){case"debounce":return so(e,t,n);case"throttle":return uo(e,t,n);default:return e}},bo=function(e){return"function"==typeof e},fo=function(){return"undefined"==typeof window},go=function(e){return e instanceof Element||e instanceof HTMLDocument},mo=function(e,r,t,n){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!n||r.height===a&&!t?r:(e&&bo(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!fo()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(fo())return null;if(r)return document.querySelector(r);if(n&&go(n))return n;if(t.targetRef&&go(t.targetRef.current))return t.targetRef.current;var i=O(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=mo(s,t.setState.bind(t),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!fo()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return bo(r)?"renderProp":bo(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,fo()||(t.resizeHandler=ho(t.createResizeHandler,i,a,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Fi(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){fo()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(a,null)}}}(c);var po=fo()?u:h;function yo(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,b=e.targetRef,f=e.observerOptions,g=e.onResize,m=o(t),p=o(null),y=null!=b?b:p,v=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return po((function(){if(!fo()){var e=mo(g,$,c,h);v.current=ho((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!m.current&&!fo()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,f),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,g,f,y.current]),Di({ref:y},w)}var vo=fe,xo=ar;var wo=function(e){return"symbol"==typeof e||xo(e)&&"[object Symbol]"==vo(e)},$o=gr,Fo=wo,Do=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Eo=/^\w*$/;var _o=function(e,r){if($o(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Fo(e))||(Eo.test(e)||!Do.test(e)||null!=r&&e in Object(r))},Co=en;function Oo(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(Oo.Cache||Co),t}Oo.Cache=Co;var ko=Oo;var So=function(e){var r=ko(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Ao=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zo=/\\(\\)?/g,jo=So((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Ao,(function(e,t,n,i){r.push(n?i.replace(zo,"$1"):t||e)})),r}));var Bo=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Mo=gr,To=wo,Io=ne?ne.prototype:void 0,Po=Io?Io.toString:void 0;var Yo=function e(r){if("string"==typeof r)return r;if(Mo(r))return Bo(r,e)+"";if(To(r))return Po?Po.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Lo=Yo;var Ro=gr,Wo=_o,No=jo,Ho=function(e){return null==e?"":Lo(e)};var Vo=wo;var Uo=function(e,r){return Ro(e)?e:Wo(e,r)?[e]:No(Ho(e))},Zo=function(e){if("string"==typeof e||Vo(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var qo=function(e,r){for(var t=0,n=(r=Uo(r,e)).length;null!=e&&t<n;)e=e[Zo(r[t++])];return t&&t==n?e:void 0};var Ko=V((function(e,r,t){var n=null==e?void 0:qo(e,r);return void 0===n?t:n}));const Jo=(e,r,t)=>Ko(t,r)||Ko(e,r),Xo=(e,r)=>{const t=r||e.defaultValue;return Ko(e.collections,t)},Go={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},Qo=e=>r=>{var t;const n=r.theme,i=Xo(Go,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Jo(i,e,n.overrides.motion):i[e]},ea={"duration-150":Qo("duration-150"),"duration-250":Qo("duration-250"),"duration-350":Qo("duration-350"),"duration-500":Qo("duration-500"),"duration-800":Qo("duration-800"),"duration-1000":Qo("duration-1000"),"ease-default":Qo("ease-default"),"ease-standard":Qo("ease-standard"),"ease-entrance":Qo("ease-entrance"),"ease-exit":Qo("ease-exit")},ra={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},ta=e=>r=>{var t;const n=r.theme,i=Xo(ra,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?Jo(i,e,n.overrides.primitiveColour):i[e]},na={"brand-10":ta("brand-10"),"brand-20":ta("brand-20"),"brand-30":ta("brand-30"),"brand-40":ta("brand-40"),"brand-50":ta("brand-50"),"brand-60":ta("brand-60"),"brand-70":ta("brand-70"),"brand-80":ta("brand-80"),"brand-90":ta("brand-90"),"brand-95":ta("brand-95"),"brand-100":ta("brand-100"),"primary-10":ta("primary-10"),"primary-20":ta("primary-20"),"primary-30":ta("primary-30"),"primary-40":ta("primary-40"),"primary-50":ta("primary-50"),"primary-60":ta("primary-60"),"primary-70":ta("primary-70"),"primary-80":ta("primary-80"),"primary-90":ta("primary-90"),"primary-95":ta("primary-95"),"primary-100":ta("primary-100"),"secondary-10":ta("secondary-10"),"secondary-20":ta("secondary-20"),"secondary-30":ta("secondary-30"),"secondary-40":ta("secondary-40"),"secondary-50":ta("secondary-50"),"secondary-60":ta("secondary-60"),"secondary-70":ta("secondary-70"),"secondary-80":ta("secondary-80"),"secondary-90":ta("secondary-90"),"secondary-95":ta("secondary-95"),"secondary-100":ta("secondary-100"),"neutral-10":ta("neutral-10"),"neutral-20":ta("neutral-20"),"neutral-30":ta("neutral-30"),"neutral-40":ta("neutral-40"),"neutral-50":ta("neutral-50"),"neutral-60":ta("neutral-60"),"neutral-70":ta("neutral-70"),"neutral-80":ta("neutral-80"),"neutral-90":ta("neutral-90"),"neutral-95":ta("neutral-95"),"neutral-100":ta("neutral-100"),"success-10":ta("success-10"),"success-20":ta("success-20"),"success-30":ta("success-30"),"success-40":ta("success-40"),"success-50":ta("success-50"),"success-60":ta("success-60"),"success-70":ta("success-70"),"success-80":ta("success-80"),"success-90":ta("success-90"),"success-95":ta("success-95"),"success-100":ta("success-100"),"warning-10":ta("warning-10"),"warning-20":ta("warning-20"),"warning-30":ta("warning-30"),"warning-40":ta("warning-40"),"warning-50":ta("warning-50"),"warning-60":ta("warning-60"),"warning-70":ta("warning-70"),"warning-80":ta("warning-80"),"warning-90":ta("warning-90"),"warning-95":ta("warning-95"),"warning-100":ta("warning-100"),"error-10":ta("error-10"),"error-20":ta("error-20"),"error-30":ta("error-30"),"error-40":ta("error-40"),"error-50":ta("error-50"),"error-60":ta("error-60"),"error-70":ta("error-70"),"error-80":ta("error-80"),"error-90":ta("error-90"),"error-95":ta("error-95"),"error-100":ta("error-100"),"info-10":ta("info-10"),"info-20":ta("info-20"),"info-30":ta("info-30"),"info-40":ta("info-40"),"info-50":ta("info-50"),"info-60":ta("info-60"),"info-70":ta("info-70"),"info-80":ta("info-80"),"info-90":ta("info-90"),"info-95":ta("info-95"),"info-100":ta("info-100"),white:ta("white"),black:ta("black"),"primary-inverse":ta("primary-inverse")},ia={text:ta("neutral-20"),"text-subtle":ta("neutral-30"),"text-subtler":ta("neutral-50"),"text-subtlest":ta("neutral-60"),"text-primary":ta("primary-50"),"text-hover":ta("primary-40"),"text-selected":ta("primary-50"),"text-selected-hover":ta("primary-40"),"text-disabled":ta("neutral-50"),"text-disabled-subtle":ta("neutral-60"),"text-disabled-subtlest":ta("neutral-80"),"text-selected-disabled":ta("neutral-20"),"text-success":ta("success-40"),"text-warning":ta("warning-40"),"text-error":ta("error-40"),"text-info":ta("info-40"),"text-inverse":ta("white"),icon:ta("neutral-50"),"icon-subtle":ta("neutral-60"),"icon-strongest":ta("neutral-20"),"icon-primary":ta("primary-50"),"icon-primary-subtle":ta("primary-60"),"icon-primary-subtlest":ta("primary-70"),"icon-hover":ta("primary-40"),"icon-selected":ta("primary-50"),"icon-selected-hover":ta("primary-40"),"icon-disabled":ta("neutral-50"),"icon-disabled-subtle":ta("neutral-60"),"icon-selected-disabled":ta("neutral-60"),"icon-success":ta("success-50"),"icon-warning":ta("warning-60"),"icon-error":ta("error-50"),"icon-error-strong":ta("error-40"),"icon-info":ta("info-50"),"icon-inverse":ta("white"),"icon-primary-inverse":ta("primary-inverse"),border:ta("neutral-90"),"border-strong":ta("neutral-70"),"border-stronger":ta("neutral-50"),"border-primary":ta("primary-50"),"border-primary-subtle":ta("primary-60"),"border-hover":ta("primary-90"),"border-hover-strong":ta("primary-60"),"border-selected":ta("primary-50"),"border-selected-subtle":ta("primary-70"),"border-selected-subtlest":ta("primary-90"),"border-selected-hover":ta("primary-40"),"border-focus":ta("primary-60"),"border-focus-strong":ta("primary-50"),"border-disabled":ta("neutral-90"),"border-selected-disabled":ta("neutral-70"),"border-success":ta("success-60"),"border-warning":ta("warning-60"),"border-error":ta("error-60"),"border-error-focus":ta("error-60"),"border-error-focus-strong":ta("error-40"),"border-error-strong":ta("error-40"),"border-info":ta("info-60"),bg:ta("white"),"bg-strong":ta("neutral-100"),"bg-stronger":ta("neutral-95"),"bg-strongest":ta("neutral-90"),"bg-hover":ta("primary-95"),"bg-hover-strong":ta("primary-90"),"bg-hover-subtle":ta("primary-100"),"bg-hover-neutral":ta("neutral-100"),"bg-hover-neutral-strong":ta("neutral-90"),"bg-selected":ta("primary-95"),"bg-selected-hover":ta("primary-90"),"bg-selected-strong":ta("primary-90"),"bg-selected-stronger":ta("primary-70"),"bg-selected-strongest":ta("primary-50"),"bg-selected-strongest-hover":ta("primary-40"),"bg-disabled":ta("neutral-95"),"bg-selected-disabled":ta("neutral-95"),"bg-selected-stronger-disabled":ta("neutral-70"),"bg-success":ta("success-100"),"bg-success-hover":ta("success-95"),"bg-success-strong":ta("success-50"),"bg-success-strong-hover":ta("success-40"),"bg-warning":ta("warning-100"),"bg-warning-hover":ta("warning-95"),"bg-warning-strong":ta("warning-50"),"bg-warning-strong-hover":ta("warning-40"),"bg-info":ta("info-100"),"bg-info-hover":ta("info-95"),"bg-info-strong":ta("info-50"),"bg-info-strong-hover":ta("info-40"),"bg-error":ta("error-100"),"bg-error-hover":ta("error-95"),"bg-error-strong":ta("error-50"),"bg-error-strong-hover":ta("error-40"),"bg-inverse":ta("neutral-20"),"bg-inverse-subtle":ta("neutral-30"),"bg-inverse-subtler":ta("neutral-50"),"bg-inverse-subtlest":ta("neutral-60"),"bg-inverse-hover":ta("neutral-40"),"bg-primary":ta("primary-50"),"bg-primary-subtle":ta("primary-60"),"bg-primary-subtler":ta("primary-95"),"bg-primary-subtlest":ta("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ta("primary-40"),"bg-primary-subtlest-hover":ta("primary-90"),"bg-primary-subtlest-selected":ta("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ta("primary-50"),"hyperlink-hover":ta("primary-40"),"hyperlink-visited":ta("primary-40"),"hyperlink-inverse":ta("primary-inverse"),"focus-ring":ta("black"),"focus-ring-inverse":ta("white")},oa={collections:{lifesg:ia,bookingsg:ia,rbs:ia,mylegacy:ia,ccube:ia},defaultValue:"lifesg"},aa=e=>r=>{var t;const n=r.theme,i=Xo(oa,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?Jo(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},sa={text:aa("text"),"text-subtle":aa("text-subtle"),"text-subtler":aa("text-subtler"),"text-subtlest":aa("text-subtlest"),"text-primary":aa("text-primary"),"text-hover":aa("text-hover"),"text-selected":aa("text-selected"),"text-selected-hover":aa("text-selected-hover"),"text-disabled":aa("text-disabled"),"text-disabled-subtle":aa("text-disabled-subtle"),"text-disabled-subtlest":aa("text-disabled-subtlest"),"text-selected-disabled":aa("text-selected-disabled"),"text-success":aa("text-success"),"text-warning":aa("text-warning"),"text-error":aa("text-error"),"text-info":aa("text-info"),"text-inverse":aa("text-inverse"),icon:aa("icon"),"icon-subtle":aa("icon-subtle"),"icon-strongest":aa("icon-strongest"),"icon-primary":aa("icon-primary"),"icon-primary-subtle":aa("icon-primary-subtle"),"icon-primary-subtlest":aa("icon-primary-subtlest"),"icon-hover":aa("icon-hover"),"icon-selected":aa("icon-selected"),"icon-selected-hover":aa("icon-selected-hover"),"icon-disabled":aa("icon-disabled"),"icon-disabled-subtle":aa("icon-disabled-subtle"),"icon-selected-disabled":aa("icon-selected-disabled"),"icon-success":aa("icon-success"),"icon-warning":aa("icon-warning"),"icon-error":aa("icon-error"),"icon-error-strong":aa("icon-error-strong"),"icon-info":aa("icon-info"),"icon-inverse":aa("icon-inverse"),"icon-primary-inverse":aa("icon-primary-inverse"),border:aa("border"),"border-strong":aa("border-strong"),"border-stronger":aa("border-stronger"),"border-primary":aa("border-primary"),"border-primary-subtle":aa("border-primary-subtle"),"border-hover":aa("border-hover"),"border-hover-strong":aa("border-hover-strong"),"border-selected":aa("border-selected"),"border-selected-subtle":aa("border-selected-subtle"),"border-selected-subtlest":aa("border-selected-subtlest"),"border-selected-hover":aa("border-selected-hover"),"border-focus":aa("border-focus"),"border-focus-strong":aa("border-focus-strong"),"border-disabled":aa("border-disabled"),"border-selected-disabled":aa("border-selected-disabled"),"border-success":aa("border-success"),"border-warning":aa("border-warning"),"border-error":aa("border-error"),"border-error-focus":aa("border-error-focus"),"border-error-focus-strong":aa("border-error-focus-strong"),"border-error-strong":aa("border-error-strong"),"border-info":aa("border-info"),bg:aa("bg"),"bg-strong":aa("bg-strong"),"bg-stronger":aa("bg-stronger"),"bg-strongest":aa("bg-strongest"),"bg-hover":aa("bg-hover"),"bg-hover-strong":aa("bg-hover-strong"),"bg-hover-subtle":aa("bg-hover-subtle"),"bg-hover-neutral":aa("bg-hover-neutral"),"bg-hover-neutral-strong":aa("bg-hover-neutral-strong"),"bg-selected":aa("bg-selected"),"bg-selected-hover":aa("bg-selected-hover"),"bg-selected-strong":aa("bg-selected-strong"),"bg-selected-stronger":aa("bg-selected-stronger"),"bg-selected-strongest":aa("bg-selected-strongest"),"bg-selected-strongest-hover":aa("bg-selected-strongest-hover"),"bg-disabled":aa("bg-disabled"),"bg-selected-disabled":aa("bg-selected-disabled"),"bg-selected-stronger-disabled":aa("bg-selected-stronger-disabled"),"bg-success":aa("bg-success"),"bg-success-hover":aa("bg-success-hover"),"bg-success-strong":aa("bg-success-strong"),"bg-success-strong-hover":aa("bg-success-strong-hover"),"bg-warning":aa("bg-warning"),"bg-warning-hover":aa("bg-warning-hover"),"bg-warning-strong":aa("bg-warning-strong"),"bg-warning-strong-hover":aa("bg-warning-strong-hover"),"bg-info":aa("bg-info"),"bg-info-hover":aa("bg-info-hover"),"bg-info-strong":aa("bg-info-strong"),"bg-info-strong-hover":aa("bg-info-strong-hover"),"bg-error":aa("bg-error"),"bg-error-hover":aa("bg-error-hover"),"bg-error-strong":aa("bg-error-strong"),"bg-error-strong-hover":aa("bg-error-strong-hover"),"bg-inverse":aa("bg-inverse"),"bg-inverse-subtle":aa("bg-inverse-subtle"),"bg-inverse-subtler":aa("bg-inverse-subtler"),"bg-inverse-subtlest":aa("bg-inverse-subtlest"),"bg-inverse-hover":aa("bg-inverse-hover"),"bg-primary":aa("bg-primary"),"bg-primary-subtle":aa("bg-primary-subtle"),"bg-primary-subtler":aa("bg-primary-subtler"),"bg-primary-subtlest":aa("bg-primary-subtlest"),"bg-available":aa("bg-available"),"bg-primary-hover":aa("bg-primary-hover"),"bg-primary-subtlest-hover":aa("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":aa("bg-primary-subtlest-selected"),"overlay-strong":aa("overlay-strong"),"overlay-subtle":aa("overlay-subtle"),hyperlink:aa("hyperlink"),"hyperlink-hover":aa("hyperlink-hover"),"hyperlink-visited":aa("hyperlink-visited"),"hyperlink-inverse":aa("hyperlink-inverse"),"focus-ring":aa("focus-ring"),"focus-ring-inverse":aa("focus-ring-inverse")},la={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:ua["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:sa.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return p`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},da=e=>r=>{var t;const n=r.theme,i=Xo(la,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Jo(i,e,n.overrides.border)}px`:`${i[e]}px`},ca=e=>1===e.length&&"theme"in e[0],ua={"width-010":da("width-010"),"width-020":da("width-020"),"width-040":da("width-040"),solid:(ha="solid",e=>{var r;const t=e.theme,n=Xo(la,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Jo(n,ha,t.overrides.border):n[ha];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=ca(r)?[]:r,o=ca(r)?r[0]:t,a=o.theme,s=Xo(la,null==a?void 0:a.borderScheme);return((null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.border)?Jo(s,e,a.overrides.border):s[e])(...i)(o)})("dashed-default")};var ha;const ba={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},fa=e=>r=>{var t;const n=r.theme,i=Xo(ba,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Jo(i,e,n.overrides.breakpoint):i[e],o},ga={"xxs-min":fa("xxs-min"),"xxs-max":fa("xxs-max"),"xs-min":fa("xs-min"),"xs-max":fa("xs-max"),"sm-min":fa("sm-min"),"sm-max":fa("sm-max"),"md-min":fa("md-min"),"md-max":fa("md-max"),"lg-min":fa("lg-min"),"lg-max":fa("lg-max"),"xl-min":fa("xl-min"),"xl-max":fa("xl-max"),"xxl-min":fa("xxl-min"),"xxs-column":fa("xxs-column"),"xs-column":fa("xs-column"),"sm-column":fa("sm-column"),"md-column":fa("md-column"),"lg-column":fa("lg-column"),"xl-column":fa("xl-column"),"xxl-column":fa("xxl-column"),"xxs-gutter":fa("xxs-gutter"),"xs-gutter":fa("xs-gutter"),"sm-gutter":fa("sm-gutter"),"md-gutter":fa("md-gutter"),"lg-gutter":fa("lg-gutter"),"xl-gutter":fa("xl-gutter"),"xxl-gutter":fa("xxl-gutter"),"xxs-margin":fa("xxs-margin"),"xs-margin":fa("xs-margin"),"sm-margin":fa("sm-margin"),"md-margin":fa("md-margin"),"lg-margin":fa("lg-margin"),"xl-margin":fa("xl-margin"),"xxl-margin":fa("xxl-margin")},ma=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=ga["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),pa={MaxWidth:ma("max-width"),MinWidth:ma("min-width")},ya={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},va={collections:{lifesg:ya,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:ya,mylegacy:ya,ccube:ya},defaultValue:"lifesg"},xa=e=>r=>{var t;const n=r.theme,i=Xo(va,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Jo(i,e,n.overrides.fontSpec):i[e]},wa={"header-size-xxl":xa("header-size-xxl"),"header-size-xl":xa("header-size-xl"),"header-size-lg":xa("header-size-lg"),"header-size-md":xa("header-size-md"),"header-size-sm":xa("header-size-sm"),"header-size-xs":xa("header-size-xs"),"header-lh-xxl":xa("header-lh-xxl"),"header-lh-xl":xa("header-lh-xl"),"header-lh-lg":xa("header-lh-lg"),"header-lh-md":xa("header-lh-md"),"header-lh-sm":xa("header-lh-sm"),"header-lh-xs":xa("header-lh-xs"),"header-ls-xxl":xa("header-ls-xxl"),"header-ls-xl":xa("header-ls-xl"),"header-ls-lg":xa("header-ls-lg"),"header-ls-md":xa("header-ls-md"),"header-ls-sm":xa("header-ls-sm"),"header-ls-xs":xa("header-ls-xs"),"weight-light":xa("weight-light"),"weight-regular":xa("weight-regular"),"weight-semibold":xa("weight-semibold"),"weight-bold":xa("weight-bold"),"font-family":xa("font-family"),"body-size-baseline":xa("body-size-baseline"),"body-size-md":xa("body-size-md"),"body-size-sm":xa("body-size-sm"),"body-size-xs":xa("body-size-xs"),"body-lh-baseline":xa("body-lh-baseline"),"body-lh-md":xa("body-lh-md"),"body-lh-sm":xa("body-lh-sm"),"body-lh-xs":xa("body-lh-xs"),"body-ls-baseline":xa("body-ls-baseline"),"body-ls-md":xa("body-ls-md"),"body-ls-sm":xa("body-ls-sm"),"body-ls-xs":xa("body-ls-xs"),"formlabel-size-baseline":xa("formlabel-size-baseline"),"formlabel-size-lg":xa("formlabel-size-lg"),"formlabel-lh-baseline":xa("formlabel-lh-baseline"),"formlabel-lh-lg":xa("formlabel-lh-lg"),"formlabel-ls-baseline":xa("formlabel-ls-baseline"),"formlabel-ls-lg":xa("formlabel-ls-lg")},$a={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Fa=e=>r=>{var t;const n=r.theme,i=Xo($a,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Jo(i,e,n.overrides.radius)}px`:`${i[e]}px`},Da={none:Fa("none"),xs:Fa("xs"),sm:Fa("sm"),md:Fa("md"),lg:Fa("lg"),full:Fa("full")},Ea={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},_a=e=>r=>{var t;const n=r.theme,i=Xo(Ea,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Jo(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Ca={"spacing-0":_a("spacing-0"),"spacing-4":_a("spacing-4"),"spacing-8":_a("spacing-8"),"spacing-12":_a("spacing-12"),"spacing-16":_a("spacing-16"),"spacing-20":_a("spacing-20"),"spacing-24":_a("spacing-24"),"spacing-32":_a("spacing-32"),"spacing-40":_a("spacing-40"),"spacing-48":_a("spacing-48"),"spacing-64":_a("spacing-64"),"spacing-72":_a("spacing-72"),"layout-xs":_a("layout-xs"),"layout-sm":_a("layout-sm"),"layout-md":_a("layout-md"),"layout-lg":_a("layout-lg"),"layout-xl":_a("layout-xl"),"layout-xxl":_a("layout-xxl"),"layout-xxxl":_a("layout-xxxl")},Oa=(e,r,t,n)=>p`
    font-family: ${xa("font-family")};
    font-size: ${xa(e)};
    font-weight: ${xa(r)};
    line-height: ${xa(t)};
    letter-spacing: ${xa(n)};
`,ka={"header-xxl-light":Oa("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Oa("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Oa("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Oa("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Oa("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Oa("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Oa("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Oa("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Oa("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Oa("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Oa("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Oa("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Oa("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Oa("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Oa("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Oa("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Oa("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Oa("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Oa("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Oa("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Oa("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Oa("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Oa("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Oa("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Oa("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Oa("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Oa("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Oa("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Oa("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Oa("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Oa("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Oa("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Oa("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Oa("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Oa("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Oa("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Oa("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Oa("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Oa("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Oa("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Oa("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Oa("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Sa={collections:{lifesg:ka,bookingsg:ka,rbs:ka,mylegacy:ka,ccube:ka},defaultValue:"lifesg"},Aa=e=>r=>{var t;const n=r.theme,i=Xo(Sa,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Jo(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},za={"header-xxl-light":Aa("header-xxl-light"),"header-xxl-regular":Aa("header-xxl-regular"),"header-xxl-semibold":Aa("header-xxl-semibold"),"header-xxl-bold":Aa("header-xxl-bold"),"header-xl-light":Aa("header-xl-light"),"header-xl-regular":Aa("header-xl-regular"),"header-xl-semibold":Aa("header-xl-semibold"),"header-xl-bold":Aa("header-xl-bold"),"header-lg-light":Aa("header-lg-light"),"header-lg-regular":Aa("header-lg-regular"),"header-lg-semibold":Aa("header-lg-semibold"),"header-lg-bold":Aa("header-lg-bold"),"header-md-light":Aa("header-md-light"),"header-md-regular":Aa("header-md-regular"),"header-md-semibold":Aa("header-md-semibold"),"header-md-bold":Aa("header-md-bold"),"header-sm-light":Aa("header-sm-light"),"header-sm-regular":Aa("header-sm-regular"),"header-sm-semibold":Aa("header-sm-semibold"),"header-sm-bold":Aa("header-sm-bold"),"header-xs-light":Aa("header-xs-light"),"header-xs-regular":Aa("header-xs-regular"),"header-xs-semibold":Aa("header-xs-semibold"),"header-xs-bold":Aa("header-xs-bold"),"body-baseline-light":Aa("body-baseline-light"),"body-baseline-regular":Aa("body-baseline-regular"),"body-baseline-semibold":Aa("body-baseline-semibold"),"body-baseline-bold":Aa("body-baseline-bold"),"body-md-light":Aa("body-md-light"),"body-md-regular":Aa("body-md-regular"),"body-md-semibold":Aa("body-md-semibold"),"body-md-bold":Aa("body-md-bold"),"body-sm-light":Aa("body-sm-light"),"body-sm-regular":Aa("body-sm-regular"),"body-sm-semibold":Aa("body-sm-semibold"),"body-sm-bold":Aa("body-sm-bold"),"body-xs-light":Aa("body-xs-light"),"body-xs-regular":Aa("body-xs-regular"),"body-xs-semibold":Aa("body-xs-semibold"),"body-xs-bold":Aa("body-xs-bold"),"formlabel-baseline-semibold":Aa("formlabel-baseline-semibold"),"formlabel-lg-semibold":Aa("formlabel-lg-semibold")},ja=Object.assign(Object.assign({},sa),{Primitive:na}),Ba=Object.assign(Object.assign({},za),{Spec:wa}),Ma=ea,Ta=ua,Ia=Ca,Pa=Da,Ya=ga,La=pa;var Ra;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Ra||(Ra={}));const Wa=e=>p`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Na=m.div`
    font-weight: ${e=>e.$bold?Ba.Spec["weight-semibold"]:Ba.Spec["weight-regular"]};
    color: ${e=>e.$selected?ja["text-selected"]:ja.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Wa(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Ha=m.div`
    color: ${ja["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Wa(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?p`
                    ${Ba["body-md-semibold"]}
                `:p`
                    ${Ba["body-baseline-regular"]}
                `}
`,Va=m.span`
    font-weight: ${Ba.Spec["weight-semibold"]};
`,Ua=m.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Ba["body-md-regular"]:Ba["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return p`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return p`
                    ${Na} {
                        display: inline;
                    }

                    ${Ha} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Za=m.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,qa=m.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Ka=({bold:n,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:d,truncationType:c="middle",variant:u})=>{const h=y(),g="small"===u?Ba.Spec["body-size-md"]({theme:h}):Ba.Spec["body-size-baseline"]({theme:h}),m=Ba.Spec["font-family"]({theme:h}),{ref:p,width:v}=yo(),x=b((e=>{if("inline"!==i)return!1;return Ra.getTextWidth(e,`${g} '${m}'`)>v*s-50}),[v,i,g,m,s]),w=f((()=>x(o)),[x,o]),$=f((()=>d&&x(d)),[x,d]),F=w||$?"next-line":i,D=n=>{if(!a)return n;const i=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(i),l=s+a.length;return-1===s?n:e(t,{children:[o.slice(0,s),r(Va,Object.assign({$variant:u},{children:o.slice(s,l)})),o.slice(l)]})},E=n=>e(t,{children:[r(Za,Object.assign({$maxLines:s,"aria-hidden":!0},{children:D(n)})),r(qa,Object.assign({$maxLines:s,"aria-hidden":!0},{children:D(n)}))]});return e(Ua,Object.assign({ref:p,$labelDisplayType:F,$variant:u},{children:[r(Na,Object.assign({"aria-label":o,$bold:n,$maxLines:s,$selected:l,$truncateType:c},{children:"middle"===c&&w?E(o):D(o)})),d&&r(Ha,Object.assign({"aria-label":d,$maxLines:s,$truncateType:c,$labelDisplayType:i},{children:"middle"===c&&$?E(d):d}))]}))};var Ja={exports:{}};Ja.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=m;var w="$isDayjsObject",$=function(e){return e instanceof _||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},D=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new _(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var _=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=m.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(f);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===b)},p.isSame=function(e,r){var t=D(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return D(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<D(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},f=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},g=this.$W,m=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,m):b(0,m+1);case l:var v=this.$locale().weekStart||0,x=(g<v?g+7:g)-v;return b(n?p-x:p+(6-x),m);case s:case h:return f(y+"Hours",0);case a:return f(y+"Minutes",1);case o:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],f=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var g=this.clone().set(h,1);g.$d[b](f),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else b&&this.$d[b](f);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var h,b=this;n=Number(n);var f=E.p(c),g=function(e){var r=D(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(f===d)return this.set(d,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return g(1);if(f===l)return g(7);var m=(h={},h[o]=r,h[a]=t,h[i]=e,h)[f]||1,p=this.$d.getTime()+n*m;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},f=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(o,a,!0);case"A":return f(o,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,h,b){var f,g=this,m=E.p(h),p=D(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(g,p)};switch(m){case u:f=x()/12;break;case d:f=x();break;case c:f=x()/3;break;case l:f=(v-y)/6048e5;break;case s:f=(v-y)/864e5;break;case a:f=v/t;break;case o:f=v/r;break;case i:f=v/e;break;default:f=v}return b?f:E.a(f)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),C=_.prototype;return D.prototype=C,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){C[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,_,D),e.$i=!0),D},D.locale=F,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=x[v],D.Ls=x,D.p={},D}();var Xa=V(Ja.exports),Ga={exports:{}};Ga.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],b=c&&c[1];a[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,f=a||(i||o?1:b.getDate()),g=i||b.getFullYear(),m=0;i&&!o||(m=o>0?o-1:b.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(g,m,f,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(g,m,f,p,y,v,x)):new Date(g,m,f,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var b=s.length,f=1;f<=b;f+=1){a[1]=s[f-1];var g=t.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}f===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Qa=V(Ga.exports),es={exports:{}};es.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var rs=V(es.exports),ts={exports:{}};ts.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var ns=V(ts.exports),is={exports:{}};is.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var os,as,ss,ls=V(is.exports),ds={exports:{}},cs=V(ds.exports=(os={year:0,month:1,day:2,hour:3,minute:4,second:5},as={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=as[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),as[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=os[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,b=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",f=+e;return(t.utc(b).valueOf()-(f-=f%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));Xa.extend(rs),Xa.extend(ls),Xa.extend(ns),Xa.extend(Qa),Xa.extend(cs),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=Xa(r).startOf("week");return us(t).map((e=>hs(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return hs(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(Xa(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+Xa(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=Xa(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?Xa(n):void 0,i?Xa(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(ss||(ss={}));const us=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},hs=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},bs=[1,3,5,7,8,10,12],fs=[4,6,9,11];var gs,ms,ps;function ys(e){const r=o(null);return h((()=>{r.current=e}),[e]),b(((...e)=>r.current(...e)),[])}!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":bs.includes(o)?Math.min(i,31).toString():fs.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=Xa(e,t);return Xa(r,t).diff(n,"minute")},e.toDayjs=e=>e?Xa(e):Xa(),e.addMinutesToTime=(e,r,t="HH:mm")=>Xa(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>Xa(e).isSame(Xa(r),t)}(gs||(gs={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!Xa(e).isBefore(n,"day"))||!(!i||!Xa(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Xa(e).isValid())return e}return""}}(ms||(ms={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ps||(ps={}));i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}});const vs=m.div`
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
    outline: ${Ta["width-020"]} ${Ta.solid} ${ja["border-focus"]};
`,Cs=p`
    outline-color: ${ja["border-focus"]};
`,Os=p`
    outline-color: ${ja["border-disabled"]};
`,ks=p`
    outline-color: ${ja["border-error-focus"]};
`,Ss=m.div`
    border: ${Ta["width-010"]} ${Ta.solid} ${ja.border};
    border-radius: ${Pa.sm};
    background: ${ja.bg};

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
                background: ${ja["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Os}
                }
                ${e.$focused&&Os}
            `:e.$error?p`
                border-color: ${ja["border-error"]};

                :focus-within {
                    ${ks}
                }
                ${e.$focused&&ks}
            `:void 0}
`;m(Ss)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Ia["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const As=m.input`
    ${e=>"small"===e.$variant?Ba["body-md-regular"]:Ba["body-baseline-regular"]}
    color: ${ja.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${ja["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${ja["text-subtler"]};
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
        outline: ${Ta["width-010"]} ${Ta.solid}
            ${ja["border-focus"]};
        border-radius: ${Pa.sm};
    }
`,js=m.div`
    overflow: hidden;
    border: ${Ta["width-010"]} ${Ta.solid} ${ja.border};
    border-radius: ${Pa.sm};
    background: ${ja.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?Ba["body-md-regular"]:Ba["body-baseline-regular"]}

    ${La.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Ya["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${La.MaxWidth.xs} {
        width: calc(100vw - ${Ya["xs-margin"]} * 2);
    }

    ${La.MaxWidth.xxs} {
        width: calc(100vw - ${Ya["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${ja["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Bs=m.div`
    background: transparent;
    padding: ${Ia["spacing-8"]};
`;m.ul`
    list-style-type: none;
`,m.li`
    display: flex;
    align-items: flex-start;
    gap: ${Ia["spacing-8"]};
    padding: ${Ia["spacing-12"]} ${Ia["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?p`
                background: ${ja["bg-hover"]};
            `:e.$active?p`
                background: ${ja["bg-hover-subtle"]};
            `:void 0}
`;const Ms=m(F)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${ja["icon-selected"]};
`;m.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`;const Ts=m($)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ja["icon-selected"]};
`,Is=m(w)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ja["icon-primary-subtlest"]};
`,Ps=m.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Ys=m(zs)`
    cursor: pointer;
    overflow: hidden;
    color: ${ja["text-primary"]};
    font-size: inherit;
`,Ls=m(Ys)`
    ${Ba["body-baseline-semibold"]}
`,Rs=m(Ys)`
    ${Ba["body-md-semibold"]}
    padding: ${Ia["spacing-8"]} ${Ia["spacing-8"]};
`,Ws=m.div`
    width: 100%;
    display: flex;
    padding: ${Ia["spacing-12"]} ${Ia[16]};
    align-items: center;
`,Ns=m(x)`
    margin-right: ${Ia["spacing-4"]};
    color: ${ja["icon-error"]};
    height: 1em;
    width: 1em;
`;function Hs(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}m(Es)`
    margin-right: ${Ia["spacing-8"]};
    color: ${ja.icon};
`,"function"==typeof SuppressedError&&SuppressedError;const Vs=m.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Ia["spacing-32"]};
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
                background-color: ${ja["bg-hover-neutral"]};
            `}
    }
`,Us=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=Hs(e,["children","focusHighlight","focusOutline","type"]);return r(Vs,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),Zs=m.div`
    background: ${ja["bg-strong"]};
    border-radius: ${Pa.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Ba["body-md-regular"]:Ba["body-baseline-regular"]}
`,qs=m.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Ia["spacing-8"]};
    padding: ${e=>"small"===e.$variant?p`
                  ${Ia["spacing-8"]} ${Ia["spacing-16"]}
              `:p`10px ${Ia["spacing-16"]}`};
`,Ks=m(As)`
    flex: 1;
`,Js=m(E)`
    color: ${ja.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Xs=m(Us)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Ia["spacing-8"]};
    margin-left: -${Ia["spacing-8"]};
    color: ${ja.icon};
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
    gap: ${Ia["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Ia["spacing-16"]};

    ${e=>"small"===e.$variant?Ba["body-md-regular"]:Ba["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,el=m.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ma["duration-250"]} ${Ma["ease-default"]};

    svg {
        color: ${ja.icon};
        height: 1em;
        width: 1em;
    }
`,rl=g((({children:t,disabled:n,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},d)=>e(Qs,Object.assign({ref:d,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l},{children:[t,!s&&r(el,Object.assign({$expanded:i,$variant:l},{children:r(_,{"aria-hidden":!0})}))]}))));m.button`
    padding: ${Ia["spacing-8"]} ${Ia["spacing-16"]};
    min-width: 4rem;
    border: ${Ta["width-010"]} ${Ta.solid} transparent;
    border-radius: ${Pa.sm};
    transition: all ${Ma["duration-250"]} ${Ma["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${ja.Primitive.white};
                    border-color: ${e.$buttonIsDanger?ja["border-error-strong"]:ja["border-primary"]};

                    color: ${e.$buttonIsDanger?ja["text-error"]:ja["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${ja["bg-hover-neutral"]};
                    }
                `;case"light":return p`
                    background-color: ${ja.bg};
                    border-color: ${ja.border};

                    color: ${e.$buttonIsDanger?ja["text-error"]:ja["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${ja["bg-hover-neutral"]};
                    }
                `;case"link":return p`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?ja["text-error"]:ja["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${ja["bg-hover-neutral"]};
                    }
                `;case"disabled":return p`
                    background-color: ${ja["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ja["text-disabled"]};
                `;default:return p`
                    background-color: ${e.$buttonIsDanger?ja["bg-error-strong"]:ja["bg-primary"]};

                    ${La.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${ja["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?ja["bg-error-strong-hover"]:ja["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return p`
                    height: 2.5rem;
                    ${Ba["body-md-semibold"]}

                    ${La.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return p`
                    height: 4rem;
                    ${Ba["header-md-semibold"]}

                    ${La.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return p`
                    height: 3rem;
                    ${Ba["header-xs-semibold"]}

                    ${La.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`;const tl=m(Es)`
    margin-right: 0.5rem;
`;var nl=Symbol.for("immer-nothing"),il=Symbol.for("immer-draftable"),ol=Symbol.for("immer-state"),al="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function sl(e,...r){if("production"!==process.env.NODE_ENV){const t=al[e],n="function"==typeof t?t.apply(null,r):t;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ll=Object.getPrototypeOf;function dl(e){return!!e&&!!e[ol]}function cl(e){return!!e&&(hl(e)||Array.isArray(e)||!!e[il]||!!e.constructor?.[il]||pl(e)||yl(e))}var ul=Object.prototype.constructor.toString();function hl(e){if(!e||"object"!=typeof e)return!1;const r=ll(e);if(null===r)return!0;const t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===ul}function bl(e,r){0===fl(e)?Reflect.ownKeys(e).forEach((t=>{r(t,e[t],e)})):e.forEach(((t,n)=>r(n,t,e)))}function fl(e){const r=e[ol];return r?r.type_:Array.isArray(e)?1:pl(e)?2:yl(e)?3:0}function gl(e,r){return 2===fl(e)?e.has(r):Object.prototype.hasOwnProperty.call(e,r)}function ml(e,r,t){const n=fl(e);2===n?e.set(r,t):3===n?e.add(t):e[r]=t}function pl(e){return e instanceof Map}function yl(e){return e instanceof Set}function vl(e){return e.copy_||e.base_}function xl(e,r){if(pl(e))return new Map(e);if(yl(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=hl(e);if(!0===r||"class_only"===r&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[ol];let t=Reflect.ownKeys(r);for(let n=0;n<t.length;n++){const i=t[n],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(ll(e),r)}{const r=ll(e);if(null!==r&&t)return{...e};const n=Object.create(r);return Object.assign(n,e)}}function wl(e,r=!1){return Fl(e)||dl(e)||!cl(e)||(fl(e)>1&&(e.set=e.add=e.clear=e.delete=$l),Object.freeze(e),r&&Object.entries(e).forEach((([e,r])=>wl(r,!0)))),e}function $l(){sl(2)}function Fl(e){return Object.isFrozen(e)}var Dl,El={};function _l(e){const r=El[e];return r||sl(0,e),r}function Cl(){return Dl}function Ol(e,r){r&&(_l("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=r)}function kl(e){Sl(e),e.drafts_.forEach(zl),e.drafts_=null}function Sl(e){e===Dl&&(Dl=e.parent_)}function Al(e){return Dl={drafts_:[],parent_:Dl,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function zl(e){const r=e[ol];0===r.type_||1===r.type_?r.revoke_():r.revoked_=!0}function jl(e,r){r.unfinalizedDrafts_=r.drafts_.length;const t=r.drafts_[0];return void 0!==e&&e!==t?(t[ol].modified_&&(kl(r),sl(4)),cl(e)&&(e=Bl(r,e),r.parent_||Tl(r,e)),r.patches_&&_l("Patches").generateReplacementPatches_(t[ol].base_,e,r.patches_,r.inversePatches_)):e=Bl(r,t,[]),kl(r),r.patches_&&r.patchListener_(r.patches_,r.inversePatches_),e!==nl?e:void 0}function Bl(e,r,t){if(Fl(r))return r;const n=r[ol];if(!n)return bl(r,((i,o)=>Ml(e,n,r,i,o,t))),r;if(n.scope_!==e)return r;if(!n.modified_)return Tl(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const r=n.copy_;let i=r,o=!1;3===n.type_&&(i=new Set(r),r.clear(),o=!0),bl(i,((i,a)=>Ml(e,n,r,i,a,t,o))),Tl(e,r,!1),t&&e.patches_&&_l("Patches").generatePatches_(n,t,e.patches_,e.inversePatches_)}return n.copy_}function Ml(e,r,t,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===t&&sl(5),dl(i)){const a=Bl(e,i,o&&r&&3!==r.type_&&!gl(r.assigned_,n)?o.concat(n):void 0);if(ml(t,n,a),!dl(a))return;e.canAutoFreeze_=!1}else a&&t.add(i);if(cl(i)&&!Fl(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Bl(e,i),r&&r.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(t,n)||Tl(e,i)}}function Tl(e,r,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&wl(r,t)}var Il={get(e,r){if(r===ol)return e;const t=vl(e);if(!gl(t,r))return function(e,r,t){const n=Ll(r,t);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,t,r);const n=t[r];return e.finalized_||!cl(n)?n:n===Yl(e.base_,r)?(Wl(e),e.copy_[r]=Nl(n,e)):n},has:(e,r)=>r in vl(e),ownKeys:e=>Reflect.ownKeys(vl(e)),set(e,r,t){const n=Ll(vl(e),r);if(n?.set)return n.set.call(e.draft_,t),!0;if(!e.modified_){const n=Yl(vl(e),r),a=n?.[ol];if(a&&a.base_===t)return e.copy_[r]=t,e.assigned_[r]=!1,!0;if(((i=t)===(o=n)?0!==i||1/i==1/o:i!=i&&o!=o)&&(void 0!==t||gl(e.base_,r)))return!0;Wl(e),Rl(e)}var i,o;return e.copy_[r]===t&&(void 0!==t||r in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[r])||(e.copy_[r]=t,e.assigned_[r]=!0),!0},deleteProperty:(e,r)=>(void 0!==Yl(e.base_,r)||r in e.base_?(e.assigned_[r]=!1,Wl(e),Rl(e)):delete e.assigned_[r],e.copy_&&delete e.copy_[r],!0),getOwnPropertyDescriptor(e,r){const t=vl(e),n=Reflect.getOwnPropertyDescriptor(t,r);return n?{writable:!0,configurable:1!==e.type_||"length"!==r,enumerable:n.enumerable,value:t[r]}:n},defineProperty(){sl(11)},getPrototypeOf:e=>ll(e.base_),setPrototypeOf(){sl(12)}},Pl={};function Yl(e,r){const t=e[ol];return(t?vl(t):e)[r]}function Ll(e,r){if(!(r in e))return;let t=ll(e);for(;t;){const e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=ll(t)}}function Rl(e){e.modified_||(e.modified_=!0,e.parent_&&Rl(e.parent_))}function Wl(e){e.copy_||(e.copy_=xl(e.base_,e.scope_.immer_.useStrictShallowCopy_))}bl(Il,((e,r)=>{Pl[e]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),Pl.deleteProperty=function(e,r){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(r))&&sl(13),Pl.set.call(this,e,r,void 0)},Pl.set=function(e,r,t){return"production"!==process.env.NODE_ENV&&"length"!==r&&isNaN(parseInt(r))&&sl(14),Il.set.call(this,e[0],r,t,e[0])};function Nl(e,r){const t=pl(e)?_l("MapSet").proxyMap_(e,r):yl(e)?_l("MapSet").proxySet_(e,r):function(e,r){const t=Array.isArray(e),n={type_:t?1:0,scope_:r?r.scope_:Cl(),modified_:!1,finalized_:!1,assigned_:{},parent_:r,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=Il;t&&(i=[n],o=Pl);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,r);return(r?r.scope_:Cl()).drafts_.push(t),t}function Hl(e){if(!cl(e)||Fl(e))return e;const r=e[ol];let t;if(r){if(!r.modified_)return r.base_;r.finalized_=!0,t=xl(e,r.scope_.immer_.useStrictShallowCopy_)}else t=xl(e,!0);return bl(t,((e,r)=>{ml(t,e,Hl(r))})),r&&(r.finalized_=!1),t}var Vl=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,r,t)=>{if("function"==typeof e&&"function"!=typeof r){const t=r;r=e;const n=this;return function(e=t,...i){return n.produce(e,(e=>r.call(this,e,...i)))}}let n;if("function"!=typeof r&&sl(6),void 0!==t&&"function"!=typeof t&&sl(7),cl(e)){const i=Al(this),o=Nl(e,void 0);let a=!0;try{n=r(o),a=!1}finally{a?kl(i):Sl(i)}return Ol(i,t),jl(n,i)}if(!e||"object"!=typeof e){if(n=r(e),void 0===n&&(n=e),n===nl&&(n=void 0),this.autoFreeze_&&wl(n,!0),t){const r=[],i=[];_l("Patches").generateReplacementPatches_(e,n,r,i),t(r,i)}return n}sl(1,e)},this.produceWithPatches=(e,r)=>{if("function"==typeof e)return(r,...t)=>this.produceWithPatches(r,(r=>e(r,...t)));let t,n;return[this.produce(e,r,((e,r)=>{t=e,n=r})),t,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){cl(e)||sl(8),dl(e)&&(e=function(e){dl(e)||sl(10,e);return Hl(e)}(e));const r=Al(this),t=Nl(e,void 0);return t[ol].isManual_=!0,Sl(r),t}finishDraft(e,r){const t=e&&e[ol];t&&t.isManual_||sl(9);const{scope_:n}=t;return Ol(n,r),jl(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,r){let t;for(t=r.length-1;t>=0;t--){const n=r[t];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}t>-1&&(r=r.slice(t+1));const n=_l("Patches").applyPatches_;return dl(e)?n(e,r):this.produce(e,(e=>n(e,r)))}},Ul=Vl.produce;Vl.produceWithPatches.bind(Vl),Vl.setAutoFreeze.bind(Vl),Vl.setUseStrictShallowCopy.bind(Vl),Vl.applyPatches.bind(Vl),Vl.createDraft.bind(Vl),Vl.finishDraft.bind(Vl);const Zl=(e,r,t)=>Ul(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n];if(i.checked=!!r.find((e=>$i(e,i.keyPath))),i.hasSubItems&&t&&!0!==i.checked){const r=i.subItemIndexes.map((r=>e[r])),t=r.every((e=>!0===e.checked)),n=r.some((e=>!1!==e.checked));t?i.checked=!0:n&&(i.checked="mixed")}}})),ql=m.li`
    display: ${e=>e.$visible?"flex":"none"};
`,Kl=m.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Ia["spacing-8"]};
    padding: ${Ia["spacing-12"]} ${Ia["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&p`
            background: ${ja["bg-hover"]};
        `}
`,Jl=m.div`
    height: 1px;
    width: calc((1lh + ${Ia["spacing-8"]}) * ${e=>e.$level});
`,Xl=m.div`
    width: 1lh;
    height: 1lh;
    color: ${ja["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Ma["duration-350"]}
            ${Ma["ease-standard"]};

        ${e=>{if(e.$expanded)return p`
                    transform: rotate(90deg);
                `}}
    }
`,Gl=m.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Ia["spacing-8"]};
`,Ql=m.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Ia["spacing-16"]};

    display: flex;
    justify-content: center;
`,ed=m(k)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${ja["icon-selected"]};
`,rd=({listItems:t,multiSelect:n,selectedKeyPaths:i,itemsLoadState:s="success",itemTruncationType:l="end",itemMaxLines:d=2,variant:c="default",listboxId:h,width:b,mode:g="default",selectableCategory:m,onSelectItem:p,onSelectAll:y,onRetry:v,enableSearch:x,hideNoResultsDisplay:w,searchPlaceholder:$="Search",onSearch:F})=>{const D=n||m,[E,_]=a(""),O=E.toLowerCase().trim(),[k,S]=a(!1),A=o(),z=o(),j=o([]),B=o(),M=(()=>{const[e,r]=a(!1);return u((()=>{r(!0)}),[]),e})(),[T,I]=a([]),[P,Y]=a([]),L=f((()=>{let e=0;for(const r of T)r.level>e&&(e=r.level);return e}),[T]),[R,W]=a(0),N=e=>{const r=e.target.value;_(r),""===r?S(!1):r.trim().length>=3&&S(!0),null==F||F()},H=()=>{_(""),S(!1),B.current.focus(),null==F||F()},V=()=>{null==v||v()},U=()=>{if(0===i.length){const e=[],r=[];T.forEach((t=>{t.hasSubItems||(e.push(t.keyPath),r.push(t))})),null==y||y(e,r)}else null==y||y([],[])},Z=ys(((e,r)=>((e,r,t,n,i)=>{const o=[],a=(e,s)=>{var l,d;const c=[],u=!!e.find((e=>{var r;return null===(r=e.subItems)||void 0===r?void 0:r.length}));for(let h=0;h<e.length;h++){const b=e[h],f=s?s.level+1:0,g={item:b,index:o.length,indexInParent:h,parentSetSize:e.length,keyPath:s?[...s.keyPath,b.key]:[b.key],parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:f,visible:0===f||i||s.expanded,expanded:i,checked:!1,hasSubItems:!!(null===(l=b.subItems)||void 0===l?void 0:l.length),subItemIndexes:[],hasNestedSiblings:u,matched:!!n&&-1!==b.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(g.checked=!!r.find((e=>$i(e,g.keyPath))),c.push(g),o.push(g),null===(d=b.subItems)||void 0===d?void 0:d.length){const e=a(b.subItems,g);if(t&&!0!==g.checked){const r=e.every((e=>!0===e.checked)),t=e.some((e=>!1!==e.checked));r?g.checked=!0:t&&(g.checked="mixed")}g.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),g.subItemIndexes=e.map((e=>e.index))}}return c};return a(e,void 0),o})(e,i,n,O,r))),q=ys((e=>{return i.length?(r=Z(e,!1),Ul(r,(e=>{const r=e.filter((e=>!0===e.checked));for(const t of r){let r=t.parentIndex;for(;r>=0;){const t=e[r];t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0;r=t.parentIndex}}}))):(e=>Ul(e,(e=>{const r=e.findIndex((e=>e.hasSubItems));if(r<0)return;let t=r,n=0;for(let r=t;r<e.length;r++){const i=e[r].keyPath.length;if(i>n)n=i;else if(i<n)break;t=r,e[r].visible=!0,e[r].expanded=!0}for(let r=0;r<e.length;r++){const n=e[r],i=n.keyPath.slice(0,-1),o=e[t].keyPath.slice(0,i.length);$i(i,o)&&(n.visible=!0)}return e})))(Z(e,!1));var r})),K=ys((e=>{const r=e=>{const t=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(O))t.push(n);else if(n.subItems){const e=r(n.subItems);if(e.length>0){t.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return t};return r(e)})),J=ys((()=>{I((e=>Zl(e,i,n))),k&&Y((e=>Zl(e,i,n)))})),X=(e,r)=>{const t=((e,r,t)=>Ul(e,(e=>{e[r].expanded=t;const n=e[r].keyPath;for(let i=r+1;i<e.length;i++){const r=e[i],o=e[r.parentIndex],a=r.keyPath.slice(0,n.length);if(!$i(n,a))break;r.visible=t&&o.expanded&&o.visible}})))(k?P:T,e,r);W(e),k?Y(t):I(t)};((e,r,t="window",n)=>{const i=o();u((()=>{i.current=r}),[r]),u((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const o=e=>i.current(e);return r.addEventListener(e,o,n),()=>{r.removeEventListener(e,o,n)}}),[e,t])})("keydown",(e=>{const r=k?P:T;switch(e.code){case"ArrowDown":{e.preventDefault();const t=((e,r,t)=>{for(let n=t;n<e.length;n++)if(r(e[n]))return n;return-1})(r,(e=>e.visible),R+1);t>=0&&(W(t),j.current[t].focus());break}case"ArrowUp":{e.preventDefault();const t=((e,r,t)=>{for(let n=t;n>=0;n--)if(r(e[n]))return n;return-1})(r,(e=>e.visible),R-1);t>=0?(W(t),j.current[t].focus()):0===R&&B.current&&(B.current.focus(),W(-1));break}case"ArrowRight":e.preventDefault(),X(R,!0);break;case"ArrowLeft":e.preventDefault(),X(R,!1);break;case"Space":if(document.activeElement===j.current[R]){e.preventDefault();const t=r[R];if(t.hasSubItems&&!D)return;null==p||p(t)}}})),u((()=>{let e;"default"===g?e=q(t):"expand"===g?e=Z(t,!0):"collapse"===g&&(e=Z(t,!1)),I(e)}),[Z,q,t,g]),u((()=>{J()}),[n,i,J]),u((()=>{if(k&&E.trim().length>=3){const e=K(t),r=(e=>Ul(e,(e=>{for(const r of e)if(r.matched&&(r.visible=!0),r.hasMatchedSubItems){r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0}})))(Z(e,!1));Y(r)}}),[K,Z,t,k,E]),u((()=>{M||(B.current?(W(-1),setTimeout((()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.focus()}),200)):j.current[R]?setTimeout((()=>{var e;return null===(e=j.current[R])||void 0===e?void 0:e.focus()}),200):(W(0),setTimeout((()=>{var e;return null===(e=j.current[0])||void 0===e?void 0:e.focus()}),200)))}),[R,M,W]);const G=()=>{if(x&&"success"===s)return r(Gs,{ref:B,onChange:N,value:E,placeholder:$,"data-testid":"search-input","aria-label":"Enter text to search",onClear:H,variant:c})},Q=()=>{if(n&&!k&&T.length>0&&"success"===s)return r(Ps,{children:r(Rs,Object.assign({onClick:U,type:"button",$variant:c},{children:0===i.length?"Select all":"Clear all"}))})},ee=()=>{if(!w&&k&&0===P.length&&"success"===s)return e(Ws,Object.assign({"data-testid":"list-no-results"},{children:[r(Ns,{"data-testid":"no-result-icon"}),"No results found."]}))},re=()=>{if(v&&"loading"===s)return e(Ws,Object.assign({"data-testid":"list-loading"},{children:[r(tl,{}),"Loading..."]}))},te=()=>{if(v&&"fail"===s)return e(Ws,Object.assign({"data-testid":"list-fail"},{children:[r(Ns,{"data-testid":"load-error-icon"}),"Failed to load. ",r(Ls,Object.assign({onClick:V,type:"button",$variant:c},{children:"Try again."}))]}))},ne=e=>{if(n)switch(e.checked){case"mixed":return r(ed,{"aria-hidden":!0});case!0:return r(Ts,{"aria-hidden":!0});default:return r(Is,{"aria-hidden":!0})}if(!e.hasSubItems)return r(Ql,Object.assign({$hasNestedSiblings:e.hasNestedSiblings||0===e.level},{children:e.checked&&r(Ms,{"aria-hidden":!0})}))},ie=()=>(k?P:T).map(((t,i)=>{const{item:o,level:a,visible:s,expanded:c,keyPath:u,checked:h,hasSubItems:b,indexInParent:f,parentSetSize:g}=t,m=R===i,y=b&&!D;return e(ql,Object.assign({$visible:s},{children:[L>0&&r(Jl,{$level:a}),L>0&&!b&&n&&r(Gl,{}),e(Kl,Object.assign({"aria-checked":h,"aria-selected":!!h,"aria-expanded":b?c:void 0,"aria-level":a+1,"aria-posinset":f+1,"aria-setsize":g,"data-testid":"list-item",onClick:e=>{var r;e.stopPropagation(),y?X(i,!c):(W(r=i),null==p||p((k?P:T)[r]))},onMouseEnter:()=>{W(i)},ref:e=>j.current[i]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:y},{children:[b&&r(Xl,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),X(i,!c)},$expanded:c},{children:r(C,{})})),ne(t),r(Ka,{bold:b,searchTerm:k?O:void 0,label:o.label,selected:!!h,truncationType:l,maxLines:d})]}))]}),`[${u.join("---")}]`)}));return r(js,Object.assign({"data-testid":"dropdown-container",ref:A,$width:b,$variant:c},{children:e(Bs,Object.assign({"data-testid":"nested-dropdown-list"},{children:[G(),Q(),ee(),re(),te(),r("div",Object.assign({"aria-multiselectable":n,id:h,ref:z,role:"tree"},{children:ie()}))]}))}))},td=e=>"small"===e?2.5:3;m.div`
    position: relative;
    width: 100%;
    ${e=>{const r=td(e.$variant);return p`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const nd=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Ia["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>td(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Pa.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${ja["border-focus"]};
    }
`,id=m.button`
    ${nd}
    cursor: pointer;
`;m.div`
    ${nd}
`;const od=v`
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
    border: ${Ta["width-010"]} ${Ta.solid} ${ja.border};
    border-radius: ${Pa.sm};
    background: ${ja.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${ja["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${ja["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${od} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${ja["bg-disabled"]};

                ${id} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${ja.border};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${id} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?p`
                border-color: ${ja["border-error"]};

                :focus-within {
                    border-color: ${ja["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${ja["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,m.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Ma["duration-250"]} ${Ma["ease-default"]};
    margin-left: ${Ia["spacing-16"]};
`,m(_)`
    color: ${ja.icon};
`,m.div`
    height: 1px;
    background: ${ja.border};
    margin: 0 ${Ia["spacing-8"]};
`;const ad=m.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return p`
                color: ${ja["text-disabled"]};
            `}}
`,sd=m.div`
    ${e=>"small"===e.$variant?Ba["body-md-regular"]:Ba["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return p`
                    ${Wa(1)}
                `}}
    overflow: hidden;
`,ld=m(sd)`
    color: ${ja["text-subtler"]};
`;var dd;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(dd||(dd={}));const cd=m.div`
    display: flex;
    flex-direction: column;
`,ud=e=>"right"===e?"bottom-end":"bottom-start",hd=({enabled:n,isOpen:i,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:h,customZIndex:b,clickToToggle:f=!1,offset:g=0,alignment:m="left",fitAvailableHeight:p})=>{var v;const x=y(),w=Ya["sm-max"]({theme:x}),$=o(null),F=o(null),{width:D}=yo({targetRef:$,handleHeight:!1}),E={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:_,floatingStyles:C,context:O}=A({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!i?null==s||s():!e&&i&&(null==l||l(t))},whileElementsMounted:z,placement:ud(m),middleware:[j(g),B(),M({limiter:T()}),I({apply({availableHeight:e}){F.current&&Object.assign(F.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),E]}),k=(()=>{const[e,r]=a(void 0),t=S();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(dd.Change,e),t.events.emit(dd.Ready),()=>t.events.off(dd.Change,e)}),[t]),e})(),{isMounted:H,styles:V}=P(O,{initial:{opacity:0},open:{opacity:1},duration:300}),U=Y(O,{enabled:n,toggle:f}),Z=L(O,{enabled:n}),{getReferenceProps:q,getFloatingProps:K}=R([U,Z]);return e(t,{children:[r("div",Object.assign({ref:e=>{$.current=e,_.setReference(e)}},q(),{children:c()})),H&&r(W,{children:r(N,Object.assign({context:O,modal:!1,initialFocus:F,returnFocus:!1},{children:r("div",Object.assign({ref:_.setFloating,style:Object.assign(Object.assign({},C),{zIndex:null!==(v=null!=b?b:k)&&void 0!==v?v:50})},K(),{children:r(cd,Object.assign({ref:F,style:Object.assign({},V),inert:V.opacity<1?"":void 0},{children:h({elementWidth:D})}))}))}))})]})},bd=(e,r)=>{const[t,...n]=r;if(Vr(e)||!t)return;const i=e.find((e=>e.key===t));return i?n.length?bd(i.subItems,n):i:void 0},fd=(e,r)=>{const t=[];for(const n of e)n.subItems?t.push(...fd(n.subItems,[...r,n.key])):t.push({value:n.value,label:n.label,keyPath:[...r,n.key]});return t},gd=({placeholder:e="Select",options:t,disabled:n,error:i,className:s,"data-testid":l,id:d,selectedKeyPaths:c,mode:h,valueToStringFunction:b,enableSearch:f,searchPlaceholder:g,hideNoResultsDisplay:m,readOnly:p,onSearch:y,onSelectOptions:v,onShowOptions:x,onHideOptions:w,onRetry:$,onBlur:F,optionsLoadState:D="success",optionTruncationType:E="end",variant:_,alignment:C,dropdownZIndex:O})=>{const k=t,[S,A]=a(c||[]),[z,j]=a([]),[B,M]=a(!1),[T,I]=a(!1),[P]=a((()=>ps.generate())),Y=o(),L=o(),R=o();u((()=>{const e=c||[],r=((e,r)=>{const t=[];for(let n=0;n<r.length;n++){const i=r[n],o=bd(e,i);o&&t.push({value:o.value,label:o.label,keyPath:i})}return t})(k,e);A(e),j(r)}),[c,k]);const W=(e,r)=>{const t=r.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));A(e),j(t),K(e,t)},N=e=>{const r=J(e),t=r.map((e=>e.keyPath));j(r),A(t),K(t,r)},H=()=>{T||B||I(!0)},V=e=>{!T||B||Y.current.contains(e.relatedTarget)||(I(!1),null==F||F())},U=()=>{const{label:e,value:r}=z[0];return z.length>1?`${z.length} selected`:b?b(r)||r.toString():e},Z=e=>{if("middle"===E){let r=0;return R&&R.current&&(r=R.current.getBoundingClientRect().width),Ra.truncateOneLine(e,r,120,6)}return e},q=e=>{!e&&w&&w(),e&&x&&x()},K=(e,r)=>{if(v){const t=r.map((e=>e.value));v(e,t)}},J=e=>{if(!0===e.checked)return z.filter((r=>{const t=r.keyPath.slice(0,e.keyPath.length);return!$i(e.keyPath,t)}));{const r=[...z],t=e.hasSubItems?((e,r)=>{const t=bd(e,r);return t&&t.subItems?fd(t.subItems,r):[]})(k,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return t.forEach((e=>{z.find((r=>$i(r.keyPath,e.keyPath)))||r.push(e)})),r}};return r(hd,{enabled:!p&&!n,isOpen:B,renderElement:()=>r(Ss,Object.assign({className:s,"data-testid":l,id:d,ref:Y,tabIndex:-1,onFocus:H,onBlur:V,$focused:T,$disabled:n,$readOnly:p,$error:i},{children:r(rl,Object.assign({ref:L,disabled:n,expanded:B,listboxId:P,popupRole:"tree",readOnly:p,variant:_},{children:r(ad,Object.assign({ref:R,$disabled:n},{children:Vr(z)?r(ld,Object.assign({truncateType:E},{children:e})):r(sd,Object.assign({truncateType:E},{children:Z(U())}))}))}))})),renderDropdown:({elementWidth:e})=>r(rd,{listboxId:P,listItems:k,multiSelect:!0,selectedKeyPaths:S,itemsLoadState:D,itemTruncationType:E,enableSearch:f,searchPlaceholder:g,hideNoResultsDisplay:m,onSelectItem:N,onSelectAll:W,onRetry:$,onSearch:y,variant:_,mode:h,width:e}),onOpen:()=>{M(!0),q(!0),I(!0)},onClose:e=>{M(!1),q(!1),"click"!==e&&(I(!1),null==F||F())},onDismiss:()=>{L.current.focus(),M(!1),q(!1)},clickToToggle:!0,offset:8,alignment:C,fitAvailableHeight:!0,customZIndex:O})};export{gd as InputNestedMultiSelect};
//# sourceMappingURL=index.js.map
